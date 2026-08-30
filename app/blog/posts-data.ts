export const posts = [
  {
    slug: "introduction-to-cge-modelling-part-1",
    title: "Introduction to CGE Modelling (Part 1 of 13): What Is CGE Modelling?",
    description:
      "What Computable General Equilibrium modelling means, its three defining traits — computable, general, equilibrium — and the policy questions it's built to answer.",
    date: "August 30, 2026",
    tag: "Economics",
  },
  {
    slug: "introduction-to-cge-modelling-part-2",
    title: "Introduction to CGE Modelling (Part 2 of 13): Theoretical Foundations",
    description:
      "The microeconomic theory behind CGE models — Walrasian general equilibrium, the four core agents, rational-behavior and market-clearing assumptions, and the circular flow of income.",
    date: "August 30, 2026",
    tag: "Economics",
  },
  {
    slug: "introduction-to-cge-modelling-part-3",
    title: "Introduction to CGE Modelling (Part 3 of 13): Structure and Components of a CGE Model",
    description:
      "Inside a CGE model — the Social Accounting Matrix as its database, the six families of equations that drive it, and how closure rules determine what's fixed versus what adjusts.",
    date: "August 30, 2026",
    tag: "Economics",
  },
  {
    slug: "introduction-to-cge-modelling-part-4",
    title: "Introduction to CGE Modelling (Part 4 of 13): How CGE Models Are Calibrated",
    description:
      "How a CGE model is tuned to reproduce a base-year economy exactly — gathering the SAM, choosing functional forms, assigning elasticities, and solving for share parameters.",
    date: "August 30, 2026",
    tag: "Economics",
  },
  {
    slug: "introduction-to-cge-modelling-part-5",
    title: "Introduction to CGE Modelling (Part 5 of 13): Running Policy Simulations",
    description:
      "How CGE models turn a calibrated baseline into policy answers — shocking a variable, letting prices and quantities re-equilibrate, and reading the results, illustrated with a tariff-removal example.",
    date: "August 30, 2026",
    tag: "Economics",
  },
  {
    slug: "introduction-to-cge-modelling-part-6",
    title: "Introduction to CGE Modelling (Part 6 of 13): A Practical Worked Example",
    description:
      "A complete two-sector, two-factor CGE model built from a base-year SAM through to a 5% manufacturing tax shock — production functions, market clearing, and a full before/after results table.",
    date: "August 30, 2026",
    tag: "Economics",
  },
  {
    slug: "introduction-to-cge-modelling-part-7",
    title: "Introduction to CGE Modelling (Part 7 of 13): Software and Tools for CGE Modelling",
    description:
      "Comparing GAMS, GEMPACK, Python, and R/MATLAB for building CGE models, plus pre-built frameworks like GTAP and PEP, data sources for SAMs, and a recommended learning path.",
    date: "August 30, 2026",
    tag: "Economics",
  },
  {
    slug: "introduction-to-cge-modelling-part-8",
    title: "Introduction to CGE Modelling (Part 8 of 13): Reading a Social Accounting Matrix (SAM)",
    description:
      "How to read a Social Accounting Matrix using Pakistan's 2007-08 SAM — the 'column pays row' convention, the nine core accounts, and tracing a textile factory's flow through the economy.",
    date: "August 30, 2026",
    tag: "Economics",
  },
  {
    slug: "introduction-to-cge-modelling-part-9",
    title: "Introduction to CGE Modelling (Part 9 of 13): Model 0 — The Twelve Core Equations",
    description:
      "MIMAP's Model 0 — a minimal five-account teaching CGE model — walked through its SAM structure, numerical example, and the twelve equations that solve it.",
    date: "August 30, 2026",
    tag: "Economics",
  },
  {
    slug: "introduction-to-cge-modelling-part-10",
    title: "Introduction to CGE Modelling (Part 10 of 13): Model EXTER — An Open Economy with Government",
    description:
      "MIMAP's Model EXTER — a nineteen-account CGE model that opens the economy to trade, splits households by factor endowment, and adds firms and government, with a full worked numerical SAM.",
    date: "August 30, 2026",
    tag: "Economics",
  },
  {
    slug: "introduction-to-cge-modelling-part-11",
    title: "Introduction to CGE Modelling (Part 11 of 13): CES Elasticities of Substitution",
    description:
      "Why Cobb-Douglas isn't enough — the CES elasticity of substitution between labour and capital, sector-specific values for Pakistan, and where elasticity estimates actually come from.",
    date: "August 30, 2026",
    tag: "Economics",
  },
  {
    slug: "introduction-to-cge-modelling-part-12",
    title: "Introduction to CGE Modelling (Part 12 of 13): Trade Equations — Armington and CET",
    description:
      "How CGE models handle trade — the Armington assumption for import demand, the CET function for export supply, and the 'leakage' effect that weakens fiscal multipliers in open economies.",
    date: "August 30, 2026",
    tag: "Economics",
  },
  {
    slug: "introduction-to-cge-modelling-part-13",
    title: "Introduction to CGE Modelling (Part 13 of 13): Conclusion",
    description:
      "Wrapping up the CGE modelling series — how theory, the SAM, calibration, Model 0, Model EXTER, CES elasticities, and Armington/CET trade behavior fit together into the standard MIMAP training sequence.",
    date: "August 30, 2026",
    tag: "Economics",
  },
  {
    slug: "what-is-meta-analysis",
    title: "What Is Meta-Analysis? A Practical Guide to Combining Research Findings",
    description:
      "Meta-analysis transforms scattered, sometimes conflicting research findings into a single, statistically rigorous conclusion — how it works, how it differs from a literature review, and why it matters.",
    date: "August 22, 2026",
    tag: "Research Methods",
  },
  {
    slug: "eugene-fama-david-booth",
    title:
      "Eugene Fama and David Booth: The Fifty-Year Partnership That Changed How the World Invests",
    description:
      "Why beating the market is a losing game — the Efficient Market Hypothesis, Dimensional Fund Advisors, the zero-sum arithmetic of active management, and Fama's rebuttal to behavioral finance.",
    date: "August 21, 2026",
    tag: "Finance",
  },
  {
    slug: "pakistan-sam-multiplier-analysis",
    title: "Pakistan SAM Multiplier Analysis: From Data to Policy Insights",
    description:
      "A complete economic analysis pipeline built in Claude Code — parsing raw SAM data, building Leontief Type I & II multipliers, simulating five policy scenarios, and visualizing results in an interactive dashboard.",
    date: "July 11, 2026",
    tag: "Economics",
  },
  {
    slug: "sam-multiplier-analysis-pipeline",
    title: "Building a Production-Grade SAM Multiplier Analysis Pipeline: Pakistan 2013-19",
    description:
      "From raw Excel files to a validated Leontief multiplier pipeline — Pyatt-Round account classification, Type I & Type II multipliers, five policy shock scenarios, and an interactive dashboard.",
    date: "July 11, 2026",
    tag: "Economics",
  },
  {
    slug: "redis",
    title: "Redis Is Not Just a Cache: The Architecture, Patterns, and Trade-offs Every Engineer Should Know",
    description:
      "Why Redis's single-threaded, in-memory design makes it fast — and the six production patterns built on top of it: caching, rate limiting, leaderboards, sessions, distributed locks, and pub/sub.",
    date: "July 9, 2026",
    tag: "System Design",
  },
  {
    slug: "beyond-devaluation-structural-reforms",
    title: "Beyond Devaluation: Why Structural Reforms Matter More Than a Weaker Currency for Export Growth",
    description:
      "Can a cheaper currency make a country more competitive? Long-term export success depends far more on productivity, infrastructure, energy costs, and sound economic policies than on exchange rates alone.",
    date: "July 1, 2026",
    tag: "Economics",
  },
  {
    slug: "how-to-read-a-sam",
    title: "How to Read a Social Accounting Matrix (SAM)",
    description:
      "The golden rule, cell-by-cell explanation, row and column logic, and a complete walkthrough using Pakistan SAM 2007-08. Master the one rule that unlocks any SAM.",
    date: "May 17, 2026",
    tag: "Economics",
  },
  {
    slug: "agents-of-chaos",
    title: "Agents of Chaos: A Warning About Autonomous AI Systems",
    description:
      "A research paper from Harvard, MIT, Stanford, and CMU deploys real autonomous AI agents with memory, email, and shell access — and documents what goes wrong.",
    date: "May 17, 2026",
    tag: "Agentic AI Papers",
  },
  {
    slug: "notebook-coding-productivity",
    title: "Why Your Laptop Might Be Making You Worse at Coding",
    description:
      "The science behind writing code in a notebook — how handwriting, reflection, and deep work make programmers faster, clearer thinkers.",
    date: "May 16, 2026",
    tag: "Developer Productivity",
  },
  {
    slug: "consensus-mechanisms",
    title: "Consensus Mechanisms: Proof of Work vs Proof of Stake Explained from First Principles",
    description:
      "How do thousands of computers agree on a single truth without trusting each other? A first-principles breakdown of Proof of Work, Proof of Stake, slashing, The Merge, and PBFT.",
    date: "May 14, 2026",
    tag: "Blockchain",
  },
  {
    slug: "what-is-blockchain",
    title: "What Is Blockchain? Blocks, Hashing, and Chain Structure Explained from First Principles",
    description:
      "A 3Blue1Brown-style deep dive into blockchain — no jargon, no hype, just the math and logic underneath. Covers cryptographic hashing, block structure, chaining, Proof of Work, and distributed consensus.",
    date: "May 10, 2026",
    tag: "Blockchain",
  },
  {
    slug: "social-accounting-matrix",
    title: "Social Accounting Matrix: A Complete Guide",
    description:
      "From first principles to Pakistan's 2007-08 economy — covering double-entry accounting, factor decomposition, household income distribution, and SAM multiplier analysis.",
    date: "May 7, 2026",
    tag: "Economics",
  },
  {
    slug: "blackirontimes-fintech-platform",
    title: "From Zero to 100K Requests: Engineering a Scalable Bloomberg-Style Fintech Platform",
    description:
      "How one developer built a Bloomberg-meets-Forbes financial intelligence platform using Next.js, Supabase, and Cloudflare R2 — a deep dive into ISR, force-dynamic trade-offs, and scalable architecture.",
    date: "April 25, 2026",
    tag: "System Design",
  },
  {
    slug: "mastering-ai-system-design",
    title: "Mastering AI System Design: Lessons from Open Claw Architecture",
    description:
      "Learn how modern AI systems work through Open Claw architecture. A practical guide to event-driven design, agents, tools, and automation.",
    date: "April 19, 2026",
    tag: "AI System Design",
  },
  {
    slug: "agentic-ai-retail-merchandising",
    title: "From Dashboards to Decisions: How Agentic AI Is Transforming Retail Merchandising",
    description:
      "Rather than simply displaying data, AI agents can interpret information, generate recommendations, and automate parts of the decision-making process.",
    date: "April 11, 2026",
    tag: "Agentic AI",
  },
];
