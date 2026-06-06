import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), 'src/stretch');
const files = readdirSync(dir).filter((f) => f.endsWith('.tsx') && f !== 'ds.tsx');

const primitivesFiles = new Set([
  'chrome.tsx',
  'sections.tsx',
  'cases-overview.tsx',
  'case-page.tsx',
  'insights-overview.tsx',
  'insight-page.tsx',
  'about-page.tsx',
  'contact-page.tsx',
  'service-page.tsx',
]);

const routeImports = {
  'sections.tsx': ['scrollToId', 'casesHref', 'aboutHref', 'serviceHref', 'sectionHref'],
  'cases-overview.tsx': ['goSection', 'caseHref'],
  'case-page.tsx': ['goSection', 'casesHref', 'caseHref'],
  'insights-overview.tsx': ['insightHref', 'insightsHref'],
  'insight-page.tsx': ['goSection', 'insightsHref'],
  'about-page.tsx': ['goSection'],
  'contact-page.tsx': ['goSection', 'sectionHref', 'bottleneckQuizHref'],
  'service-page.tsx': ['goSection', 'serviceHref', 'sectionHref'],
};

for (const file of files) {
  let content = readFileSync(join(dir, file), 'utf8');

  if (primitivesFiles.has(file) && !content.includes("from './primitives'")) {
    const icons = file === 'sections.tsx' || file === 'about-page.tsx' || file === 'case-page.tsx'
      ? "import { Icon, Wordmark, Lines } from './primitives';\n"
      : "import { Icon, Wordmark } from './primitives';\n";
    content = content.replace("import React from 'react';\n", `import React from 'react';\n${icons}`);
  }

  if (routeImports[file] && !content.includes("from './routes'")) {
    const names = routeImports[file].join(', ');
    content = content.replace(
      "import React from 'react';\n",
      `import React from 'react';\nimport { ${names} } from './routes';\n`,
    );
  }

  if (file === 'contact-page.tsx') {
    content = content.replace(
      /const LINKEDIN_URL[\s\S]*?function bottleneckQuizHref\(\) \{[\s\S]*?\}\n\n/,
      "import { STRETCH_LINKEDIN } from './routes';\n\n",
    );
    content = content.replace(/LINKEDIN_URL/g, 'STRETCH_LINKEDIN');
  }

  writeFileSync(join(dir, file), content);
  console.log(`Fixed imports in ${file}`);
}
