export type ServiceSlug =
  | 'growth-readiness'
  | 'growth-generation'
  | 'growth-conversion'
  | 'growth-acceleration'
  | 'account-based-marketing';

export interface Service {
  slug: ServiceSlug;
  name: string;
  bottleneck: string;
  headline: string;
  description: string;
  bullets: string[];
  outcome: string;
  whoItsFor?: string;
}

export const services: Service[] = [
  {
    slug: 'growth-readiness',
    name: 'Growth Readiness',
    bottleneck: 'Flying Blind',
    headline: "You can't grow what you can't measure.",
    description: 'Build the measurement foundation so every growth decision is backed by data.',
    bullets: [
      'Tracking & Reporting',
      'CRM Foundations',
      'Value Propositions & Segments',
      'Customer Journey Blueprint',
      'KPI & ROI Framework',
    ],
    outcome: 'Full visibility and control over what drives your growth.',
  },
  {
    slug: 'growth-generation',
    name: 'Growth Generation',
    bottleneck: 'Struggling for Demand',
    headline: 'Pipeline built on purpose, not on luck.',
    description: 'Create a repeatable engine that fills your pipeline with qualified opportunities.',
    bullets: [
      'Demand Capture',
      'Demand Creation',
      'SEO/GEO',
      'Paid Acquisition',
      'Lead Generation Systems',
    ],
    outcome: 'Predictable, consistent opportunity generation.',
  },
  {
    slug: 'growth-conversion',
    name: 'Growth Conversion',
    bottleneck: 'Struggling for Conversion',
    headline: 'More revenue from the demand you already have.',
    description: 'Turn more of your existing pipeline into revenue with systematic conversion.',
    bullets: [
      'Funnel Optimization',
      'Lead Scoring',
      'Marketing Automation',
      'Lead Nurturing',
      'Sales Enablement',
    ],
    outcome: 'More opportunities turning into revenue.',
  },
  {
    slug: 'growth-acceleration',
    name: 'Growth Acceleration',
    bottleneck: 'Struggling to Scale',
    headline: 'Growth without the chaos.',
    description: 'Build systems and processes that scale with your growth.',
    bullets: [
      'RevOps',
      'Forecasting',
      'Process Automation',
      'Growth Playbooks',
      'Commercial Operating Model',
    ],
    outcome: "Scalable, predictable growth that doesn't depend on heroics.",
  },
  {
    slug: 'account-based-marketing',
    name: 'Account Based Marketing',
    bottleneck: 'High-value account targeting',
    headline: 'Go deep on the accounts that matter most.',
    description:
      'A systematic approach to winning your most valuable target accounts.',
    whoItsFor:
      'Companies with high deal values, long sales cycles, and a clear list of target accounts. You know exactly who you want as a client — you need a systematic way to get in front of them.',
    bullets: [
      'Target account selection',
      'Multi-channel outreach sequences',
      'LinkedIn advertising',
      'Personalized content',
      'CRM integration',
      'Pipeline tracking',
    ],
    outcome: 'Qualified conversations with your most valuable prospects.',
  },
];

export function getServiceBySlug(slug: ServiceSlug): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function serviceNameToSlug(name: string): ServiceSlug | undefined {
  const map: Record<string, ServiceSlug> = {
    'Growth Readiness': 'growth-readiness',
    'Growth Generation': 'growth-generation',
    'Growth Conversion': 'growth-conversion',
    'Growth Acceleration': 'growth-acceleration',
    'Account Based Marketing': 'account-based-marketing',
  };
  return map[name];
}
