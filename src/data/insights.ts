// Stretch — shared Insights data. Used by the Insights overview page and
// the individual insight page template. Article bodies are condensed,
// on-brand versions of the full guides; the complete PDF is the gated download.
//
// Block types: { lead }, { h2 }, { p }, { ul:[...] }, { fix } (the "what to do" note).

export const INSIGHT_DATA = [
  {
    slug: "growth-engine-revolution",
    title: "Why are all companies building Growth Engines?",
    category: "Strategy",
    date: "2026-02-10",
    readMins: 7,
    cover: "growth-engine-revolution-cover.png",
    downloadCover: "/images/insights/covers/why-all-companies-building-GE-cover.png",
    excerpt: "B2B revenue generation has hit an inflection point. Here's why market leaders are replacing fragmented commercial functions with engineered Growth Engines.",
    featured: true,
    body: [
      { lead: "B2B revenue generation has reached an inflection point. Customer acquisition costs are up 60% since 2019, while growth models built on disconnected systems and individual heroics fail to deliver predictable outcomes at scale." },
      { h2: "What is a Growth Engine?" },
      { p: "A Growth Engine is an integrated commercial operating system that systematically converts marketing and sales investment into measurable revenue. It runs as a closed loop inside your CRM — unifying demand generation, pipeline management, conversion optimisation and customer expansion so Finance, Sales and Marketing operate from a single source of truth." },
      { h2: "Three forces are forcing the shift" },
      { p: "This isn't a cyclical adjustment. It's a permanent recalibration of how revenue generation works — driven by three structural shifts." },
      { ul: [
        "Digital acceleration — 80% of the B2B buyer journey now happens online before any sales contact. Companies without digital infrastructure are simply invisible.",
        "The efficiency imperative — CAC is up 60% while conversion rates dropped 25%. Spray-and-pray marketing burns capital 3x faster than systematic approaches.",
        "Investor demands — valuations are no longer driven by top-line growth alone, but by the predictability and efficiency of that growth.",
      ] },
      { h2: "The problem: commercial fragmentation" },
      { p: "Most organisations operate with disconnected commercial functions. Strategy sits apart from execution, marketing optimises for engagement instead of pipeline contribution, and sales forecasting relies on gut feel. The result is wasted spend, blind spots, and growth nobody can repeat on purpose." },
      { h2: "The payoff is measurable" },
      { p: "Companies with documented, systematic growth processes achieve 30–50% higher valuation multiples at exit. Engineering predictability isn't just better marketing — it's a fundamentally more valuable business." },
    ],
  },
  {
    slug: "food-companies-lose-millions",
    title: "Why busy food companies quietly lose €2.7M a year",
    category: "Data & Analytics",
    date: "2026-01-28",
    readMins: 6,
    cover: "food-companies-lose-millions-cover.png",
    downloadCover: "/images/insights/covers/busy-food-companies.png",
    excerpt: "In food manufacturing, activity is mistaken for progress — while profitability erodes through invisible inefficiencies. Here's where the money goes.",
    featured: true,
    body: [
      { lead: "In FMCG and food manufacturing, activity is often mistaken for progress. Teams are busier than ever while profitability quietly erodes through invisible inefficiencies." },
      { p: "For many leaders the challenge isn't a lack of effort — it's a lack of integrated growth infrastructure. Marketing silos, disconnected supply-chain data and reactive demand planning create a leaky bucket where revenue is lost before it ever reaches the bottom line." },
      { h2: "The core problem: activity vs. efficiency" },
      { p: "Our analysis of mid-to-large food enterprises shows that disconnected systems and manual growth processes cost the average company €2.7M a year in avoidable waste and missed revenue — roughly 5.3–8.5% of annual revenue." },
      { h2: "Where the €2.7M goes" },
      { ul: [
        "Food waste — 1.5–2.5% of revenue",
        "Demand-forecasting errors — 1.5–2%",
        "Supply-chain friction — 0.8–1.5%",
        "Fragmented digital systems — 1–1.5%",
        "Missed growth opportunities — 0.5–1%",
      ] },
      { h2: "Why digital gaps hurt food brands specifically" },
      { p: "Food companies sit on rich first-party and operational data but rarely connect it. Without a single source of truth across demand, production and commercial teams, every decision is made late and on partial information — and the cost compounds quietly, quarter after quarter." },
      { h2: "From busyness to a Growth Engine" },
      { p: "A Growth Engine approach stops the leak: it connects the systems, automates the manual processes, and turns scattered activity into a measurable, scalable commercial operation. The first step is simply making the hidden costs visible." },
    ],
  },
  {
    slug: "trade-fairs-worth-investment",
    title: "Making trade fairs worth the investment",
    category: "Lead Generation",
    date: "2025-11-05",
    readMins: 5,
    cover: "trade-fairs-worth-investment-cover.png",
    downloadCover: "/images/insights/covers/make-trade-fairs-worth-investment.png",
    excerpt: "Great booths don't pay the bills — great systems do. Five practical tactics top teams use to turn event budgets into measurable business value.",
    featured: false,
    body: [
      { lead: "Great booths don't pay the bills — great systems do. Most teams prepare the booth, the visuals and the giveaways, then leave without real outcomes." },
      { h2: "1. Why most companies waste fairs" },
      { p: "The reason isn't effort, it's the lack of structure. The best companies plan every fair like a business project: clear goals, the right people, smart tools and fast follow-up." },
      { fix: "You don't need a bigger booth. You need a better system." },
      { h2: "2. Before the fair: prepare like it matters" },
      { p: "Fairs don't start on opening day — they start the moment you decide to go. Focus on the three things that move the needle:" },
      { ul: [
        "Targeting — run paid Meta campaigns to reach people already attending, and use LinkedIn to research accounts and send pre-event invites.",
        "Team — pick the right mix: one who sells, one who explains, one who listens, all trained on the same message and goal.",
        "Tools — prepare assets that start conversations: a simple ROI calculator, a product demo, or a short diagnostic that gives visitors value in minutes.",
      ] },
      { h2: "3. During the fair: start conversations, not small talk" },
      { p: "When people recognise your name before they see your booth, every conversation starts stronger. Lead with a question and a tool, not a brochure — capture the context while it's fresh." },
      { h2: "4. After the fair: follow up fast" },
      { p: "The deals are won in the 48 hours after the doors close. Route every conversation into your CRM with notes and next steps, and trigger a personalised follow-up before competitors have unpacked their crates." },
      { h2: "The takeaway" },
      { p: "Trade fairs aren't expensive — unstructured trade fairs are. Treat the event as one stage of a system and the budget turns into measurable pipeline." },
    ],
  },
  {
    slug: "pe-ebitda-gap",
    title: "The $2.5M EBITDA gap in PE portfolios",
    category: "Strategy",
    date: "2025-12-02",
    readMins: 8,
    cover: "pe-ebitda-gap-cover.png",
    downloadCover: "/images/insights/covers/2.5m-ebitda-gap.png",
    excerpt: "73% of PE portfolio companies leave revenue on the table. Why the next era of returns belongs to operational, top-line growth — and how to capture it.",
    featured: false,
    body: [
      { lead: "In a high-interest environment, financial engineering and multiple arbitrage no longer suffice. The only reliable path to superior returns is measurable, operational EBITDA growth." },
      { p: "Yet most portfolio companies suffer from a commercial growth deficit — a systematic gap between potential and performance that quietly caps the exit multiple." },
      { h2: "The numbers behind the gap" },
      { ul: [
        "$2.515T in dry powder is chasing limited quality assets, pushing entry valuations to record highs.",
        "54% of PE value creation now comes from revenue growth — versus 32% from multiple expansion.",
        "Only 36% of firms assess sales-optimisation opportunities during due diligence.",
        "1 in 3 value-creation initiatives fail, usually from overly ambitious business cases.",
      ] },
      { h2: "Revenue growth is the new value-creation engine" },
      { p: "Historical levers — cost-cutting and leverage — are reaching diminishing returns. The 1990s were the financial-engineering era and the 2000s the multiple-arbitrage era. The 2020s belong to firms that can operationalise profitable, top-line growth." },
      { h2: "Closing the gap in 18 months" },
      { p: "Top-performing funds systematise commercial excellence rather than hoping for it: a diagnosed bottleneck, an engineered Growth Engine inside the CRM, and a measurable path from spend to pipeline to EBITDA. Done well, it accelerates revenue and secures a premium exit valuation." },
    ],
  },
  {
    slug: "growth-bottlenecks-belgian-scaleups",
    title: "The 5 most common growth bottlenecks in Belgian scale-ups",
    category: "Strategy",
    date: "2024-10-01",
    readMins: 6,
    cover: "growth-bottlenecks-belgian-scaleups-cover.png",
    downloadCover: "/assets/insights/covers/growth-bottlenecks-belgian-scaleups-cover.png",
    excerpt: "After working with 120+ companies across Belgium, the same five patterns repeat. Here are the bottlenecks that hold scale-ups back — and what to do about each.",
    featured: false,
    body: [
      { lead: "Growth doesn't stall randomly. It stalls at predictable bottlenecks — and after working with over 120 companies across Belgium, we see the same five patterns repeat." },
      { h2: "1. Flying blind" },
      { p: "Most scale-ups have data somewhere, but it's fragmented across spreadsheets, ad platforms and CRM exports. Without a single source of truth, every growth decision becomes a debate instead of a data-driven choice." },
      { fix: "Start with tracking and attribution. You can't optimise what you can't measure." },
      { h2: "2. Referral dependency" },
      { p: "Many Belgian scale-ups grow through word-of-mouth and referrals — which works until it doesn't. When referral volume plateaus, there's no backup engine." },
      { fix: "Build a demand-generation system that runs independently of your network." },
      { h2: "3. Leaky funnel" },
      { p: "Generating leads is only half the battle. We regularly see healthy top-of-funnel numbers paired with conversion rates below 5%. The problem isn't demand — it's what happens after the lead arrives." },
      { fix: "Map your funnel, implement lead scoring, and automate follow-up." },
      { h2: "4. Heroic sales" },
      { p: "When growth depends on one or two star performers closing through relationships and hustle, you don't have a growth engine — you have a dependency." },
      { fix: "Document what works, build playbooks, and create systems any team member can execute." },
      { h2: "5. Scaling chaos" },
      { p: "The final bottleneck hits when growth itself creates complexity: more leads, more deals, more tools — but no processes to manage it all." },
      { fix: "Invest in RevOps, forecasting and a commercial operating model before the chaos becomes permanent." },
    ],
  },
  {
    slug: "lead-generation-not-working",
    title: "Why your lead generation isn't working",
    category: "Lead Generation",
    date: "2024-11-15",
    readMins: 5,
    cover: "lead-generation-not-working-cover.png",
    downloadCover: "/assets/insights/covers/lead-generation-not-working-cover.png",
    excerpt: "You're running ads, posting on LinkedIn and attending events — but pipeline isn't growing. Here's why most lead generation fails, and the three shifts that fix it.",
    featured: false,
    body: [
      { lead: "If you're spending on marketing but your pipeline isn't growing, you're not alone. Most B2B companies we audit share the same underlying problems." },
      { h2: "Problem 1: you're generating traffic, not demand" },
      { p: "Website visitors and LinkedIn impressions aren't leads. Demand means qualified people who have a problem you solve and are actively looking for a solution." },
      { fix: "Shift from awareness metrics to pipeline metrics. Track cost per qualified lead, not cost per click." },
      { h2: "Problem 2: your message doesn't match your market" },
      { p: "Generic value propositions produce generic results. If your landing page could belong to any company in your industry, it won't convert anyone specific." },
      { fix: "Segment your audience and write specific messaging for each. One page per persona, not one page for everyone." },
      { h2: "Problem 3: no system behind the campaigns" },
      { p: "Running ads without lead scoring, nurture sequences and sales handoff is like pouring water into a bucket with holes." },
      { fix: "Build the infrastructure before scaling spend: CRM workflows, lead scoring and automated follow-up." },
      { h2: "The compound effect" },
      { p: "Fix all three — targeted demand, specific messaging and systematic follow-up — and lead generation stops being a gamble and becomes a predictable engine." },
    ],
  },
];

// Filter categories: keep the brand's intended order, but only surface chips
// that actually have content (so the bar grows as new articles are added).
export const INSIGHT_CATEGORY_ORDER = [
  'Lead Generation',
  'Conversion',
  'Strategy',
  'ABM',
  'Data & Analytics',
];

export type Insight = (typeof INSIGHT_DATA)[number];

export function getInsight(slug: string) {
  return INSIGHT_DATA.find((i) => i.slug === slug) || INSIGHT_DATA[0];
}

export function insightCategories() {
  const present = new Set(INSIGHT_DATA.map((i) => i.category));
  const ordered = INSIGHT_CATEGORY_ORDER.filter((c) => present.has(c));
  present.forEach((c) => {
    if (!ordered.includes(c)) ordered.push(c);
  });
  return ['All', ...ordered];
}

export function formatInsightDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}
