export const BOTTLENECK_QUIZ_QUESTIONS = [
  {
    id: 1,
    text: 'What best describes your current growth situation?',
    answers: [
      { letter: 'A', label: "We're spending on growth but can't see what's working" },
      { letter: 'B', label: "We don't have enough leads coming in" },
      { letter: 'C', label: "Leads come in but don't convert to revenue" },
      { letter: 'D', label: "We're growing but the business can't keep up" },
    ],
  },
  {
    id: 2,
    text: 'Where does your pipeline break down most often?',
    answers: [
      { letter: 'A', label: "We don't have reliable data to make decisions" },
      { letter: 'B', label: 'Top of funnel — not enough qualified prospects' },
      { letter: 'C', label: 'Middle of funnel — leads go cold or stall' },
      { letter: 'D', label: "Bottom of funnel — deals close but ops can't scale" },
    ],
  },
  {
    id: 3,
    text: 'Which statement feels most true right now?',
    answers: [
      { letter: 'A', label: 'Every decision feels like a guess' },
      { letter: 'B', label: "Our sales team doesn't have enough to work with" },
      { letter: 'C', label: 'Marketing and sales are misaligned on lead quality' },
      { letter: 'D', label: 'What worked at our previous stage no longer works' },
    ],
  },
  {
    id: 4,
    text: 'What would have the biggest impact on your business in the next 6 months?',
    answers: [
      { letter: 'A', label: 'Full visibility into what drives our growth' },
      { letter: 'B', label: 'A predictable stream of qualified leads' },
      { letter: 'C', label: 'Higher conversion from the demand we already have' },
      { letter: 'D', label: 'A scalable system that grows with us' },
    ],
  },
] as const;

export const BOTTLENECK_QUIZ_RESULTS = {
  A: {
    key: 'Flying Blind',
    headline: "You're flying blind.",
    subtitle:
      "You're spending on growth but decisions run on gut, not signal. Before you scale anything, you need to see clearly.",
    recommendation: 'Growth Readiness is your starting point.',
    serviceHref: '/services/growth-readiness',
  },
  B: {
    key: 'Struggling for Demand',
    headline: "Your pipeline isn't predictable.",
    subtitle:
      'Not enough qualified demand is reaching your team. Outbound stalls and inbound is a trickle.',
    recommendation: 'Growth Generation is your starting point.',
    serviceHref: '/services/growth-generation',
  },
  C: {
    key: 'Struggling to Convert',
    headline: 'Your funnel is leaking.',
    subtitle:
      'Leads arrive but stall before they become revenue. The bottleneck is somewhere between first interest and closed deal.',
    recommendation: 'Growth Conversion is your starting point.',
    serviceHref: '/services/growth-conversion',
  },
  D: {
    key: 'Struggling to Scale',
    headline: "You've outgrown your current system.",
    subtitle:
      "What worked before is breaking now. Growth is there but the engine can't keep up with your ambition.",
    recommendation: 'Growth Acceleration is your starting point.',
    serviceHref: '/services/growth-acceleration',
  },
} as const;

export type BottleneckLetter = keyof typeof BOTTLENECK_QUIZ_RESULTS;
