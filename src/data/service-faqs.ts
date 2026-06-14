export interface ServiceFaq {
  question: string;
  answer: string;
}

export const SERVICE_FAQS: Record<string, ServiceFaq[]> = {
  'growth-readiness': [
    {
      question: 'What is Growth Readiness?',
      answer:
        'Growth Readiness is the foundation of every Growth Engine. We put tracking, CRM foundations, value propositions and KPI frameworks in place so every growth decision runs on signal, not gut.',
    },
    {
      question: 'Who is Growth Readiness for?',
      answer:
        "Growth Readiness is for scale-ups and enterprise companies that are spending on growth but can't see what's working. If you're flying blind, this is where we start.",
    },
  ],
  'growth-generation': [
    {
      question: 'What is Growth Generation?',
      answer:
        'Growth Generation is the demand engine of your Growth Engine. We build the channels and systems that create and capture qualified pipeline on purpose — through demand capture, demand creation, SEO / GEO and paid acquisition.',
    },
    {
      question: 'Who is Growth Generation for?',
      answer:
        'Growth Generation is for companies with inconsistent pipeline — too dependent on referrals, outbound that stalls, or inbound that trickles. If you are struggling for demand, this is your bottleneck.',
    },
  ],
  'growth-conversion': [
    {
      question: 'What is Growth Conversion?',
      answer:
        'Growth Conversion turns the demand you already generate into revenue. We optimise funnels, implement lead scoring, marketing automation and sales enablement so more opportunities close.',
    },
    {
      question: 'Who is Growth Conversion for?',
      answer:
        'Growth Conversion is for companies where leads arrive but stall between first interest and signed revenue. If your funnel leaks and conversion is unpredictable, this is where we focus.',
    },
  ],
  'growth-acceleration': [
    {
      question: 'What is Growth Acceleration?',
      answer:
        'Growth Acceleration builds the operating model that lets growth scale without chaos. We implement RevOps, forecasting, process automation and growth playbooks so what worked at one stage keeps working at the next.',
    },
    {
      question: 'Who is Growth Acceleration for?',
      answer:
        'Growth Acceleration is for companies that have proven growth motions but hit a plateau as complexity increases. If scaling feels harder than it should, this is your bottleneck.',
    },
  ],
  'account-based-marketing': [
    {
      question: 'What is Account Based Marketing?',
      answer:
        'Account Based Marketing is a focused go-to-market approach for your highest-value accounts. We run multi-channel programs against named targets with personalised content, LinkedIn advertising and tight CRM integration.',
    },
    {
      question: 'Who is Account Based Marketing for?',
      answer:
        'ABM is for companies with high deal values, long sales cycles and a defined target account list — where a handful of accounts can make or break the year and spray-and-pray does not cut it.',
    },
  ],
};
