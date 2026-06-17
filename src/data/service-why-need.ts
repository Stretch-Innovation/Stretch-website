export interface ServiceWhyCard {
  title: string;
  description: string;
}

export const SERVICE_WHY_NEED: Record<string, ServiceWhyCard[]> = {
  'growth-readiness': [
    {
      title: "You're spending on growth but can't measure what works",
      description:
        'Budget goes out every month, but nobody can tie spend to pipeline or revenue with confidence.',
    },
    {
      title: 'Your CRM is a mess and sales hates it',
      description:
        'Data is incomplete, stages get skipped, and reps work around the system instead of in it.',
    },
    {
      title: 'Every decision is based on gut, not data',
      description:
        'Leadership debates opinions because dashboards do not tell one coherent growth story.',
    },
  ],
  'growth-generation': [
    {
      title: 'Outbound stalls after the first wave of easy wins',
      description:
        'Early outreach worked, but the list ran dry and there is no repeatable system behind it.',
    },
    {
      title: "Inbound is a trickle: SEO and content aren't converting",
      description:
        'Traffic exists on paper, but qualified opportunities are rare and slow to arrive.',
    },
    {
      title: 'Pipeline depends on a few heroes, not a system',
      description:
        'When your best rep is on holiday, pipeline stalls because nothing runs without them.',
    },
  ],
  'growth-conversion': [
    {
      title: 'Leads arrive but stall between MQL and SQL',
      description:
        'Marketing celebrates volume while sales says the leads are not ready to buy.',
    },
    {
      title: "Your funnel leaks but you don't know where",
      description:
        'Drop-off happens somewhere between interest and signed revenue, but nobody can pinpoint it.',
    },
    {
      title: 'Sales and marketing disagree on lead quality',
      description:
        'Handoffs break down because neither team shares the same definition of a good lead.',
    },
  ],
  'growth-acceleration': [
    {
      title: 'What worked at €1M ARR breaks at €5M',
      description:
        'Processes that carried you early now create friction as volume and complexity grow.',
    },
    {
      title: 'Forecasting is guesswork. The board hates it',
      description:
        'Revenue projections swing wildly because there is no reliable operating model behind them.',
    },
    {
      title: "Growth is there but the ops can't keep up",
      description:
        'More deals, more tools, more people, but no system to manage the complexity at scale.',
    },
  ],
  'account-based-marketing': [
    {
      title: "You're targeting enterprise but spray-and-pray isn't working",
      description:
        'Broad campaigns reach the wrong people while your highest-value accounts stay untouched.',
    },
    {
      title: 'Sales cycles are long and stakeholders multiply',
      description:
        'One champion is not enough. You need coordinated outreach across the buying committee.',
    },
    {
      title: "Marketing spend doesn't reach the right accounts",
      description:
        'Budget goes wide when it should go deep on the accounts that can move the year.',
    },
  ],
};
