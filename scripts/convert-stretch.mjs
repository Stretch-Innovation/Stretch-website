import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), 'src/stretch');
const files = readdirSync(dir).filter((f) => f.endsWith('.jsx'));

for (const file of files) {
  let content = readFileSync(join(dir, file), 'utf8');

  if (!content.startsWith('import React')) {
    content = `import React from 'react';\n${content}`;
  }

  // Data files: export instead of window assignment
  if (file === 'cases-data.jsx') {
    content = content.replace('window.CASE_DATA =', 'export const CASE_DATA =');
    content = content.replace(
      'window.getCase = function (slug) {\n  const data = window.CASE_DATA || [];\n  return data.find((c) => c.slug === slug) || data[0];\n};',
      'export function getCase(slug) {\n  return CASE_DATA.find((c) => c.slug === slug) || CASE_DATA[0];\n}',
    );
  }

  if (file === 'services-data.jsx') {
    content = content.replace('window.SERVICE_DATA =', 'export const SERVICE_DATA =');
    content = content.replace(
      /window\.getService = function \(slug\) \{[\s\S]*?\};/,
      'export function getService(slug) {\n  return SERVICE_DATA.find((s) => s.slug === slug) || SERVICE_DATA[0];\n}',
    );
  }

  if (file === 'insights-data.jsx') {
    content = content.replace('window.INSIGHT_DATA =', 'export const INSIGHT_DATA =');
    content = content.replace(
      /window\.getInsight = function \(slug\) \{[\s\S]*?\};/,
      'export function getInsight(slug) {\n  return INSIGHT_DATA.find((i) => i.slug === slug) || INSIGHT_DATA[0];\n}',
    );
    content = content.replace(
      /window\.formatInsightDate = function \(iso\) \{[\s\S]*?\};/,
      'export function formatInsightDate(iso) {\n  const d = new Date(iso);\n  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });\n}',
    );
  }

  // Asset paths
  content = content.replace(/\.\.\/assets\//g, '/assets/');
  content = content.replace(/"assets\//g, '"/assets/');
  content = content.replace(/'assets\//g, "'/assets/");
  content = content.replace(/CASE_ASSET_BASE = "\/assets\/cases\/"/, 'const CASE_ASSET_BASE = "/assets/cases/"');
  content = content.replace(/INS_ASSET_BASE = "\/assets\/insights\/covers\/"/, 'const INS_ASSET_BASE = "/assets/insights/covers/"');
  content = content.replace(/INS_COVER_BASE = "\/assets\/insights\/covers\/"/, 'const INS_COVER_BASE = "/assets/insights/covers/"');
  content = content.replace(/OV_IMG_BASE = "\/assets\/cases\/"/, 'const OV_IMG_BASE = "/assets/cases/"');
  content = content.replace(/CASE_IMG_BASE = "\/assets\/cases\/"/, 'const CASE_IMG_BASE = "/assets/cases/"');
  content = content.replace(/TEAM_PHOTO_BASE = "\/assets\/team\/individuals\/"/, 'const TEAM_PHOTO_BASE = "/assets/team/individuals/"');

  // Chrome: use Astro routes (no .html)
  if (file === 'chrome.jsx') {
    content = content.replace(
      /function scrollToId[\s\S]*?function contactHref\(\) \{[\s\S]*?\}\n/,
      `import {
  scrollToId,
  goSection,
  sectionHref,
  serviceHref,
  caseHref,
  casesHref,
  insightHref,
  insightsHref,
  aboutHref,
  contactHref,
  STRETCH_LINKEDIN,
  pageLinkHref,
} from './routes';

`,
    );
    content = content.replace(/const STRETCH_LINKEDIN = [\s\S]*?function pageLinkHref[\s\S]*?\}\n\n/, '');
  }

  // Remove window Object.assign lines
  content = content.replace(/\nObject\.assign\(window, \{[\s\S]*?\}\);?\n?/g, '\n');

  // Export main components from primitives
  if (file === 'primitives.jsx') {
    content += '\nexport { Lines, Wordmark, Icon };\n';
  }

  const exports = {
    'chrome.jsx': 'Nav, Footer',
    'sections.jsx': 'Hero, LogoStrip, Bottleneck, Cases, About, Services, FinalCTA',
    'cases-overview.jsx': 'CasesOverview',
    'case-page.jsx': 'CasePage',
    'insights-overview.jsx': 'InsightsOverview',
    'insight-page.jsx': 'InsightPage',
    'about-page.jsx': 'AboutPage',
    'contact-page.jsx': 'ContactPage',
    'service-page.jsx': 'ServicePage',
  };

  if (exports[file]) {
    content += `\nexport { ${exports[file]} };\n`;
  }

  const outName = file.replace('.jsx', '.tsx');
  writeFileSync(join(dir, outName), content);
  console.log(`Converted ${file} -> ${outName}`);
}
