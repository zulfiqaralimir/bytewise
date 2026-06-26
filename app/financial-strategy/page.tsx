import type { Metadata } from "next";
import Link from "next/link";
import { CurriculumClient, type PartEntry } from "./CurriculumClient";

export const metadata: Metadata = {
  title: "Financial Strategy — ByteWise",
  description:
    "135-module Financial Mastery Platform — CFO Mastery, Quant & Hedge Fund, and Investment Banking tracks. Localized to Pakistan and Gulf context.",
  openGraph: {
    title: "Financial Strategy — ByteWise",
    description:
      "Three professional tracks: CFO Mastery (66 modules), Quant & Hedge Fund (27 modules), Investment Banking (42 modules).",
    type: "website",
  },
};

// ─── TRACK A: CFO MASTERY (Modules 1–66) ────────────────────────────────────

const trackA: PartEntry[] = [
  {
    part: "Part I — Corporate Finance Foundations",
    modules: [
      { number: "Module 1",  title: "An Introduction to Financial Strategy",          description: "The foundations of financial strategy — what it is, why it matters, and how finance connects to corporate decision-making.", href: null },
      { number: "Module 2",  title: "Performance Measurement in Financial Strategy",  description: "How companies measure financial performance: KPIs, shareholder value, EVA, and the balanced scorecard.", href: null },
      { number: "Module 3",  title: "Long Term Finance",                               description: "Equity, debt, and hybrid instruments — how companies raise long-term capital and structure their financing.", href: null },
      { number: "Module 4",  title: "Short Term Finance & Working Capital Management", description: "Managing liquidity, receivables, payables, and inventory to keep operations running efficiently.", href: null },
      { number: "Module 5",  title: "Cost of Capital",                                 description: "WACC, CAPM, and the risk-return tradeoff — understanding what it costs a company to fund itself.", href: null },
      { number: "Module 6",  title: "Capital Structure",                               description: "The optimal mix of debt and equity, Modigliani-Miller, leverage, and how capital structure affects firm value.", href: null },
      { number: "Module 7",  title: "The Role of Treasury",                            description: "Cash management, foreign exchange, interest rate risk, and the corporate treasury function.", href: null },
      { number: "Module 8",  title: "Investment Appraisal: Basic Techniques",          description: "NPV, IRR, payback period, and accounting rate of return — the core toolkit for evaluating capital projects.", href: null },
      { number: "Module 9",  title: "Investment Appraisal: Further Techniques",        description: "Real options, adjusted NPV, sensitivity analysis, and dealing with uncertainty in investment decisions.", href: null },
      { number: "Module 10", title: "International Investment Appraisal",              description: "Appraising cross-border investments: currency risk, political risk, transfer pricing, and APV in a global context.", href: null },
      { number: "Module 11", title: "Business Valuation",                              description: "DCF valuation, market multiples, asset-based methods, and how to value a business for M&A or IPO.", href: null },
      { number: "Module 12", title: "Mergers and Acquisitions",                        description: "The strategic and financial logic of M&A — deal structures, synergies, due diligence, and post-merger integration.", href: "/financial-strategy/module-12-mergers-and-acquisitions" },
      { number: "Module 13", title: "Implementation and Control Procedures",           description: "Translating financial strategy into action — budgeting, control systems, governance, and performance monitoring.", href: null },
    ],
  },
  {
    part: "Part II — Financial Reporting & Compliance",
    modules: [
      { number: "Module 14", title: "IFRS and IAS — Financial Reporting Mastery",           description: "The complete IFRS and IAS framework — all active standards, the CFO core curriculum, and a specialist track for investment entities.", href: "/financial-strategy/module-14-ifrs-and-ias" },
      { number: "Module 15", title: "Taxation for CFOs",                                     description: "Corporate tax strategy and compliance — Pakistan FBR framework, Gulf VAT, transfer pricing, and withholding tax regimes.", href: "/financial-strategy/module-15-taxation" },
      { number: "Module 16", title: "Audit, Internal Controls & Governance",                 description: "The external audit process, COSO internal control framework, audit committee responsibilities, and financial statement sign-off.", href: "/financial-strategy/module-16-audit-controls-governance" },
    ],
  },
  {
    part: "Part III — Operational & Strategic Finance",
    modules: [
      { number: "Module 17", title: "Budgeting, Forecasting & FP&A",       description: "The CFO's planning toolkit — zero-based budgeting, driver-based models, rolling forecasts, scenario planning, and variance analysis.", href: "/financial-strategy/module-17-budgeting-forecasting-fpa" },
      { number: "Module 18", title: "Management Accounting for CFOs",       description: "Costing, contribution analysis, pricing decisions, and the management accounting toolkit that connects financial data to operational decisions.", href: "/financial-strategy/module-18-management-accounting" },
      { number: "Module 19", title: "Financial Modeling & Decision Support", description: "Building board-ready financial models — three-statement integration, scenario analysis, Monte Carlo simulation, and model governance.", href: "/financial-strategy/module-19-financial-modeling" },
      { number: "Module 20", title: "ESG & Sustainable Finance",             description: "ESG reporting frameworks, green and sustainability-linked financing, ESG in M&A due diligence, and Gulf SWF ESG requirements.", href: "/financial-strategy/module-20-esg-sustainable-finance" },
    ],
  },
  {
    part: "Part IV — Risk Management",
    modules: [
      { number: "Module 21", title: "Enterprise Risk Management",             description: "ERM frameworks, risk appetite setting, risk registers, stress testing, and the CFO's role as Chief Risk Officer in everything but name.", href: "/financial-strategy/module-21-enterprise-risk-management" },
      { number: "Module 22", title: "Financial Risk: Market, Credit & Liquidity", description: "VaR, CVaR, credit risk models, liquidity coverage ratios, and asset-liability management for investment-oriented CFOs.", href: "/financial-strategy/module-22-financial-risk" },
      { number: "Module 23", title: "Derivatives & Hedging Strategy",         description: "Forwards, futures, options, and swaps — structuring real hedging programs and applying IFRS 9 hedge accounting.", href: "/financial-strategy/module-23-derivatives-hedging" },
    ],
  },
  {
    part: "Part V — Quantitative & Technology Finance",
    modules: [
      { number: "Module 24", title: "Quantitative Finance for CFOs",        description: "Statistical foundations, time series analysis, factor models, and portfolio optimization connecting quant methods to CFO capital allocation decisions.", href: "/financial-strategy/module-24-quantitative-finance" },
      { number: "Module 25", title: "AI & Technology in Finance",            description: "AI in FP&A, LLM agents in financial workflows, data governance for CFOs, and what every modern CFO must understand about their technology stack.", href: "/financial-strategy/module-25-ai-technology-finance" },
      { number: "Module 26", title: "FinTech & Digital Finance",             description: "Digital payments, open banking, blockchain in finance, CBDC implications, digital asset accounting, and the FinTech-disrupted treasury landscape.", href: "/financial-strategy/module-26-fintech-digital-finance" },
      { number: "Module 27", title: "Data Analytics & Financial Intelligence", description: "SQL for finance, Python for CFOs, building a finance data infrastructure, KPI dashboards, and transforming raw data into strategic intelligence.", href: "/financial-strategy/module-27-data-analytics" },
    ],
  },
  {
    part: "Part VI — CFO Leadership & Communication",
    modules: [
      { number: "Module 28", title: "CFO Leadership & Finance Team Management",          description: "Building and leading a world-class finance function — team design, hiring, talent development, and the CFO's evolution to strategic leader.", href: "/financial-strategy/module-28-cfo-leadership" },
      { number: "Module 29", title: "Investor Relations & Capital Markets Communication", description: "Earnings calls, analyst briefings, investor presentations, managing market expectations, and constructing financial narratives.", href: "/financial-strategy/module-29-investor-relations" },
      { number: "Module 30", title: "Board Reporting & Corporate Governance",             description: "Board dynamics, audit committee responsibilities, board paper preparation, governance codes, and what boards expect from their CFO.", href: "/financial-strategy/module-30-board-reporting" },
      { number: "Module 31", title: "Stakeholder & Banking Relationships",                description: "Managing banking relationships, covenant negotiation, credit rating processes, and building the external relationships that give a CFO financial flexibility.", href: "/financial-strategy/module-31-stakeholder-banking" },
    ],
  },
  {
    part: "Part VII — Geography-Specific Finance",
    modules: [
      { number: "Module 32", title: "Pakistan Financial Landscape for CFOs",        description: "The complete operating environment for a CFO in Pakistan — SECP, SBP, FBR, PSX, banking access, PKR volatility, and SBP refinancing schemes.", href: "/financial-strategy/module-32-pakistan-financial-landscape" },
      { number: "Module 33", title: "Gulf & MENA Finance for CFOs",                  description: "Financial operating environment in the Gulf — regulatory frameworks, banking relationships, SWF engagement, free zone finance, and capital market access.", href: "/financial-strategy/module-33-gulf-mena-finance" },
      { number: "Module 34", title: "Islamic Finance & Shariah-Compliant Structures", description: "Sukuk, murabaha, ijara, musharaka, and the full Islamic finance toolkit — essential for any CFO operating in Pakistan or the Gulf.", href: "/financial-strategy/module-34-islamic-finance" },
      { number: "Module 35", title: "Cross-Border Finance & Transfer Pricing",       description: "Financing international operations, transfer pricing compliance, APV for cross-border investments, thin capitalisation rules, and multi-currency group treasury.", href: "/financial-strategy/module-35-cross-border-finance" },
    ],
  },
  {
    part: "Part VIII — Crisis, Distress & Special Situations",
    modules: [
      { number: "Module 36", title: "The CFO Career Roadmap",                description: "How CFOs get hired, what executive search firms look for, building your CFO personal brand, the transition from Finance Director to CFO, and mastering your first 90 days.", href: "/financial-strategy/module-36-cfo-career-roadmap" },
      { number: "Module 37", title: "Personal Finance for CFOs",              description: "Negotiating CFO compensation, managing personal wealth, conflict of interest management, D&O insurance, and the personal financial disciplines senior finance leaders consistently overlook.", href: "/financial-strategy/module-37-personal-finance-cfo" },
      { number: "Module 38", title: "Financial Distress & Turnaround Finance", description: "Recognizing early warning signs of financial distress, the 13-week cash flow model, creditor negotiation, turnaround financing structures, and Pakistan restructuring law.", href: "/financial-strategy/module-38-financial-distress-turnaround" },
      { number: "Module 39", title: "Crisis Communication & Financial PR",    description: "Managing financial press during a crisis, profit warnings, regulatory investigations, accounting restatements, and the communication protocols that protect CFO credibility under pressure.", href: "/financial-strategy/module-39-crisis-communication" },
    ],
  },
  {
    part: "Part IX — Real Assets, Insurance & Pensions",
    modules: [
      { number: "Module 40", title: "Project Finance & Infrastructure",    description: "Non-recourse project finance structures, SPV design, waterfall mechanics, DSCR/LLCR/PLCR ratios, concession agreements, and PPP structures for Pakistan and Gulf capital projects.", href: "/financial-strategy/module-40-project-finance" },
      { number: "Module 41", title: "Real Estate Finance",                 description: "Property valuation methods, REIT structures, IAS 40 investment property accounting, commercial mortgage structures, and sale-and-leaseback transactions for balance sheet optimization.", href: "/financial-strategy/module-41-real-estate-finance" },
      { number: "Module 42", title: "Insurance for CFOs",                  description: "Corporate insurance programs, Directors and Officers liability, professional indemnity, cyber insurance, business interruption — understanding risk transfer for the finance function.", href: "/financial-strategy/module-42-insurance" },
      { number: "Module 43", title: "Pension & Employee Benefits Finance", description: "Defined benefit vs defined contribution pension structures, IAS 19 actuarial assumptions, pension deficit management, EOBI obligations, and gratuity fund design in Pakistan.", href: "/financial-strategy/module-43-pension-benefits" },
    ],
  },
  {
    part: "Part X — Sector-Specific CFO Finance",
    modules: [
      { number: "Module 44", title: "CFO in Financial Services",              description: "The CFO role in banks, asset managers, and insurers — Basel III regulatory capital, IFRS 9 for banks, net interest margin management, and IFRS 17 for insurance CFOs.", href: "/financial-strategy/module-44-financial-services-cfo" },
      { number: "Module 45", title: "CFO in Technology & SaaS",               description: "SaaS financial metrics (ARR, NRR, LTV/CAC), IFRS 15 subscription revenue recognition, IAS 38 R&D capitalization, VC-backed CFO dynamics, and IPO readiness for tech companies.", href: "/financial-strategy/module-45-technology-saas-cfo" },
      { number: "Module 46", title: "CFO in Family Business & Conglomerates", description: "Governance in family-owned groups, professionalizing finance in founder-led businesses, related party discipline, succession planning, and Pakistan's family-dominated private sector.", href: "/financial-strategy/module-46-family-business-conglomerates" },
    ],
  },
  {
    part: "Part XI — Macroeconomics & Geopolitics",
    modules: [
      { number: "Module 47", title: "Macroeconomics for CFOs",     description: "Reading GDP, inflation, interest rate, and currency cycles for financial planning — Pakistan IMF dynamics, Gulf oil price transmission, and connecting macro signals to CFO decisions.", href: "/financial-strategy/module-47-macroeconomics" },
      { number: "Module 48", title: "Geopolitical Risk & Finance", description: "Country risk assessment, political risk insurance, sanctions compliance, supply chain finance disruption, Gulf-US-China tensions, and their transmission to Pakistan's external account.", href: "/financial-strategy/module-48-geopolitical-risk" },
    ],
  },
  {
    part: "Part XII — CFO Toolkit & Case Studies",
    modules: [
      { number: "Module 49", title: "CFO Toolkit: Templates & Checklists", description: "A practical library of templates and checklists CFOs use every month — board pack, 13-week cash flow, covenant monitoring, audit preparation, due diligence, and IFRS disclosure checklists.", href: "/financial-strategy/module-49-cfo-toolkit" },
      { number: "Module 50", title: "CFO Case Studies: Pakistan & Gulf",   description: "Five real anonymized CFO case studies from Pakistan and Gulf markets — FX crisis, FinTech Series B, family conglomerate, IFRS 9 implementation, and regulatory crisis management.", href: "/financial-strategy/module-50-case-studies" },
    ],
  },
  {
    part: "Part XIII — Credentials & Exam Preparation",
    modules: [
      { number: "Module 51", title: "CFA Exam Bridge for CFOs",              description: "How CFA Level 1, 2, and 3 maps to CFO responsibilities — which topics matter most for practicing CFOs, study strategy for working professionals, and maximizing the credential's career impact in Pakistan and Gulf.", href: "/financial-strategy/module-51-cfa-exam-bridge" },
      { number: "Module 52", title: "ACCA, ICAP & Professional Credentials", description: "DipIFRS as a standalone credential, ACCA Strategic Professional papers most relevant to CFO roles, ICAP CPD requirements, and how Pakistani employers value different credential combinations.", href: "/financial-strategy/module-52-acca-icap-credentials" },
      { number: "Module 53", title: "FRM, ESG Certificate & Specialist Credentials", description: "FRM mapped to CFO risk responsibilities, CFA ESG Certificate for Gulf SWF relationships, CAIA for alternative investments, and specialist credential strategy.", href: "/financial-strategy/module-53-frm-esg-specialist-credentials" },
    ],
  },
  {
    part: "Part XIV — Accounting Deep Dives",
    modules: [
      { number: "Module 54", title: "Financial Statement Analysis for CFOs", description: "Reading and deconstructing competitor financials, DuPont decomposition, cash conversion cycle, Beneish M-Score for earnings manipulation detection, and forensic accounting red flags.", href: "/financial-strategy/module-54-financial-statement-analysis" },
      { number: "Module 55", title: "Consolidation Accounting Workshop",     description: "Step-by-step worked consolidation — intercompany eliminations, NCI, goodwill, mid-year acquisition, disposal with partial retained interest, and foreign subsidiary translation.", href: "/financial-strategy/module-55-consolidation-accounting-workshop" },
    ],
  },
  {
    part: "Part XV — Capital Markets Instruments In Depth",
    modules: [
      { number: "Module 56", title: "Equity Capital Markets Deep Dive",          description: "IPO mechanics: bookbuilding, greenshoe, lock-up, stabilization. Rights issues: TERP calculation and underwriting. Private placements: PIPE structures. PSX listing process end-to-end.", href: "/financial-strategy/module-56-equity-capital-markets" },
      { number: "Module 57", title: "Debt Capital Markets Deep Dive",            description: "Bond issuance, TFC issuance in Pakistan, Sukuk structuring, syndicated loans, liability management — the complete DCM toolkit for CFOs.", href: "/financial-strategy/module-57-debt-capital-markets" },
      { number: "Module 58", title: "Private Equity & Venture Capital for CFOs", description: "How PE funds work — fund structure, LP/GP economics, carried interest. LBO mechanics. What happens when PE buys your company. Pakistan PE landscape.", href: "/financial-strategy/module-58-private-equity-venture-capital" },
    ],
  },
  {
    part: "Part XVI — Regulatory & Legal Framework",
    modules: [
      { number: "Module 59", title: "Corporate Law for CFOs (Pakistan)",  description: "Companies Act 2017 essentials, director duties, statutory filings, share capital mechanics, dividends, winding up, and Securities Act 2015 obligations.", href: "/financial-strategy/module-59-corporate-law-pakistan" },
      { number: "Module 60", title: "Financial Regulation & Compliance",  description: "SECP licensing, SBP prudential regulations, AML/CFT obligations, FATF implications, and compliance program design for corporate finance functions.", href: "/financial-strategy/module-60-financial-regulation-compliance" },
    ],
  },
  {
    part: "Part XVII — Specialized Valuation",
    modules: [
      { number: "Module 61", title: "Startup & Early Stage Valuation",   description: "Pre-revenue valuation methods, the VC method, cap table modeling, convertible instruments, and applying startup valuation to BIQAI subsidiaries.", href: "/financial-strategy/module-61-startup-valuation" },
      { number: "Module 62", title: "Distressed Asset Valuation",        description: "Valuing companies in or near distress, recovery analysis, fulcrum security identification, NPL portfolio valuation for Pakistani banks.", href: "/financial-strategy/module-62-distressed-asset-valuation" },
      { number: "Module 63", title: "Intangible Asset & IP Valuation",   description: "Valuing AI models, data assets, brand, customer relationships, software — directly relevant to BIQAI. Relief from royalty, MEEM, cost approach. Purchase price allocation.", href: "/financial-strategy/module-63-intangible-asset-valuation" },
    ],
  },
  {
    part: "Part XVIII — Behavioral & Psychological Finance",
    modules: [
      { number: "Module 64", title: "Behavioral Finance for CFOs", description: "Cognitive biases in CFO decisions — overconfidence, anchoring, loss aversion, groupthink. Kahneman applied to capital allocation. Designing bias-resistant decision processes.", href: "/financial-strategy/module-64-behavioral-finance" },
      { number: "Module 65", title: "Negotiation for CFOs",        description: "Principled negotiation applied to M&A pricing, banking covenants, audit fees, supplier contracts, and CFO employment offers. BATNA analysis. Pakistan and Gulf cultural dimensions.", href: "/financial-strategy/module-65-negotiation-for-cfos" },
    ],
  },
  {
    part: "Part XIX — The Future CFO",
    modules: [
      { number: "Module 66", title: "The Future CFO", description: "How AI is reshaping the CFO role, which functions survive automation, the CFO as Chief Value Officer, skills for 2030, and what BIQAI's finance function looks like in five years.", href: "/financial-strategy/module-66-future-cfo" },
    ],
  },
];

// ─── TRACK B: QUANT & HEDGE FUND (Modules 67–93) ───────────────────────────

const trackB: PartEntry[] = [
  {
    part: "Part XX — Mathematical Foundations",
    modules: [
      { number: "Module 67", title: "Probability & Statistics for Quantitative Finance", description: "Probability theory, statistical inference, and the mathematical tools every quant uses — distributions, moments, multivariate statistics, copulas, and time series basics.", href: "/financial-strategy/module-67-probability-statistics-quant-finance" },
      { number: "Module 68", title: "Stochastic Calculus & Financial Mathematics",       description: "Brownian motion, Itô's lemma, SDEs, risk-neutral pricing, and Black-Scholes derivation from first principles.", href: "/financial-strategy/module-68-stochastic-calculus-financial-mathematics" },
    ],
  },
  {
    part: "Part XXI — Derivatives Pricing",
    modules: [
      { number: "Module 69", title: "Options Theory & Derivatives Pricing", description: "Complete options pricing — Black-Scholes, binomial trees, all Greeks, implied volatility surface, exotic options, interest rate derivatives.", href: "/financial-strategy/module-69-options-theory-derivatives-pricing" },
      { number: "Module 70", title: "Fixed Income Mathematics & Bond Markets", description: "Yield curve construction, duration, convexity, spread analysis, term structure models, MBS, and Pakistan/Gulf fixed income markets.", href: "/financial-strategy/module-70-fixed-income-mathematics-bond-markets" },
    ],
  },
  {
    part: "Part XXII — Algorithmic Trading",
    modules: [
      { number: "Module 71", title: "Market Microstructure & Trading Systems",    description: "Order book mechanics, market impact, execution algorithms, TCA, HFT, and alternative trading venues — including PSX specifics.", href: "/financial-strategy/module-71-market-microstructure-trading-systems" },
      { number: "Module 72", title: "Algorithmic & Quantitative Trading Strategies", description: "Systematic trading strategies — momentum, mean reversion, pairs trading, factor investing, and a backtesting framework that does not fool itself.", href: "/financial-strategy/module-72-algorithmic-quantitative-trading-strategies" },
    ],
  },
  {
    part: "Part XXIII — Portfolio Management",
    modules: [
      { number: "Module 73", title: "Portfolio Construction & Optimization", description: "Markowitz to Black-Litterman — efficient frontier, risk parity, risk budgeting, factor exposure management, and rebalancing.", href: "/financial-strategy/module-73-portfolio-construction-optimization" },
      { number: "Module 74", title: "Hedge Fund Strategies In Depth",        description: "Long/short equity, global macro, event-driven, relative value, CTA — mechanics, risk characteristics, and hedge fund evaluation.", href: "/financial-strategy/module-74-hedge-fund-strategies-in-depth" },
      { number: "Module 75", title: "Performance Measurement & Attribution", description: "GIPS compliance, TWR vs MWR, Brinson attribution, factor-based attribution, and benchmark construction.", href: "/financial-strategy/module-75-performance-measurement-attribution" },
    ],
  },
  {
    part: "Part XXIV — Fund Operations",
    modules: [
      { number: "Module 76", title: "Fund Operations & Infrastructure",        description: "Prime brokerage, fund administration, NAV calculation, securities lending, fund accounting, technology systems, and operational due diligence.", href: "/financial-strategy/module-76-fund-operations-infrastructure" },
      { number: "Module 77", title: "Investor Relations for Investment Managers", description: "LP communication, DDQ preparation, capital raising, side letters, ILPA standards, and IR infrastructure for FERROQUANT Capital.", href: "/financial-strategy/module-77-investor-relations-investment-managers" },
    ],
  },
  {
    part: "Part XXV — Advanced Quant",
    modules: [
      { number: "Module 78", title: "Machine Learning for Finance",            description: "Supervised, unsupervised, and reinforcement learning for financial problems — return prediction, regime detection, NLP on financial text, alternative data, and ML risk management.", href: "/financial-strategy/module-78-machine-learning-for-finance" },
      { number: "Module 79", title: "Risk Management for Investment Managers", description: "VaR and CVaR in depth, stress testing, drawdown management, tail risk hedging, and liquidity risk for funds.", href: "/financial-strategy/module-79-risk-management-investment-managers" },
      { number: "Module 80", title: "Regulation for Investment Managers",      description: "SECP NBFC regulations, AIFMD, SEC registration thresholds, FATCA/CRS, and compliance program design for hedge funds.", href: "/financial-strategy/module-80-regulation-investment-managers" },
      { number: "Module 81", title: "Interest Rate & Credit Derivatives",      description: "Caps, floors, swaptions, CDS, CDOs, CLOs — pricing, hedging, and risk management of interest rate and credit derivatives.", href: "/financial-strategy/module-81-interest-rate-credit-derivatives" },
      { number: "Module 82", title: "Commodity Markets & Trading",             description: "Commodity markets structure, futures curves, roll yield, weather derivatives, and commodity trading strategies.", href: "/financial-strategy/module-82-commodity-markets-trading" },
      { number: "Module 83", title: "Global Macro Trading",                    description: "FX carry, rates macro, equity macro, commodity macro — how discretionary and systematic macro funds build and express views.", href: "/financial-strategy/module-83-global-macro-trading" },
      { number: "Module 84", title: "Quantitative Risk Models: EVT & Copulas", description: "Extreme value theory, copula-based dependence modeling, and advanced portfolio risk aggregation.", href: "/financial-strategy/module-84-quantitative-risk-models-evt-copulas" },
      { number: "Module 85", title: "Portfolio Risk Reporting",                description: "Risk reporting infrastructure, P&L attribution, risk decomposition, regulatory reporting, and board-level risk communication.", href: "/financial-strategy/module-85-portfolio-risk-reporting" },
      { number: "Module 86", title: "Alternative Data Sourcing & Signals",     description: "Alternative data taxonomy, sourcing, cleaning, signal construction, and legal/compliance considerations.", href: "/financial-strategy/module-86-alternative-data-sourcing-signals" },
      { number: "Module 87", title: "Systematic Strategy Implementation",      description: "From signal to trade — execution, position sizing, portfolio construction, live monitoring, and strategy decay.", href: "/financial-strategy/module-87-systematic-strategy-implementation" },
      { number: "Module 88", title: "Fund Legal Structures",                   description: "Cayman limited partnership, BVI, DIFC fund structures, Pakistan NBFC structures, governing documents, side pockets.", href: "/financial-strategy/module-88-fund-legal-structures" },
      { number: "Module 89", title: "Tax for Investment Managers",             description: "Fund-level and investor-level taxation, carried interest tax treatment, UAE/Cayman tax neutrality, Pakistan tax for NRPs.", href: "/financial-strategy/module-89-tax-investment-managers" },
      { number: "Module 90", title: "ESG for Investment Managers",             description: "ESG integration in quant strategies, factor-based ESG, greenwashing risk, SFDR classification, Gulf SWF ESG mandates.", href: "/financial-strategy/module-90-esg-investment-managers" },
      { number: "Module 91", title: "Islamic Finance for Investment Managers", description: "Shariah-compliant fund structures, Islamic portfolio management, sukuk portfolio construction, Gulf Islamic fund market.", href: null },
      { number: "Module 92", title: "Quant Finance in Pakistan & Gulf",        description: "FERROQUANT Capital case study — building a quant fund in Pakistan/DIFC, regulatory path, capital raising, and competitive strategy.", href: null },
      { number: "Module 93", title: "The Future of Quantitative Finance",      description: "AI-driven alpha, quantum computing for finance, DeFi protocols, tokenized assets, and building a future-resilient quant career.", href: null },
    ],
  },
];

// ─── TRACK C: INVESTMENT BANKING (Modules 94–135) ──────────────────────────

const trackC: PartEntry[] = [
  {
    part: "Part XXVI — IB Foundations",
    modules: [
      { number: "Module 94",  title: "The Investment Banking Industry",   description: "IB structure, economics, product vs coverage model, league tables, bulge bracket vs boutique, global IB landscape including Gulf and Pakistan.", href: "/financial-strategy/module-94-investment-banking-industry" },
      { number: "Module 95",  title: "IB Analyst & Associate Toolkit",   description: "Day-to-day IB reality — Excel modeling conventions, PowerPoint standards, document management, working with senior bankers, and IB culture.", href: "/financial-strategy/module-95-ib-analyst-toolkit" },
      { number: "Module 96",  title: "Financial Statement Analysis for Investment Banking", description: "Reading financials through an IB lens — QoE, normalizing EBITDA, net debt calculation, working capital analysis, forensic red flags in deals.", href: "/financial-strategy/module-96-fsa-investment-banking" },
      { number: "Module 97",  title: "IB Industry Coverage Groups",      description: "TMT, FIG, Healthcare, Energy, Consumer, Industrials, Real Estate — sector knowledge, valuation metrics, deal dynamics, and Pakistan/Gulf deal flow.", href: "/financial-strategy/module-97-coverage-groups" },
    ],
  },
  {
    part: "Part XXVII — Valuation Mastery",
    modules: [
      { number: "Module 98",  title: "Comparable Company Analysis",              description: "Peer group selection, spreading financials, EV calculation, key multiples (EV/EBITDA, P/E, P/BV), and presenting the comps output. Full worked example with Pakistani cement and Gulf peers.", href: "/financial-strategy/module-98-trading-comps" },
      { number: "Module 99",  title: "Precedent Transaction Analysis",           description: "Database sources, transaction multiple calculation, control premium analysis, synergy adjustment, and presenting precedent transactions. Gulf banking sector worked example.", href: "/financial-strategy/module-99-transaction-comps" },
      { number: "Module 100", title: "Discounted Cash Flow Valuation",           description: "DCF philosophy, revenue projections, FCFF, WACC with country risk premium, terminal value, sensitivity tables. Full DCF for Pakistani consumer goods company.", href: "/financial-strategy/module-100-dcf-valuation" },
      { number: "Module 101", title: "LBO Valuation & Sponsor Returns",          description: "LBO mechanics, sources and uses, debt schedule, returns attribution (EBITDA growth + multiple expansion + debt paydown), sponsor economics. Full 5-year LBO model.", href: "/financial-strategy/module-101-lbo-valuation" },
      { number: "Module 102", title: "Sum-of-Parts & NAV Valuation",             description: "When to use SOTP, methodology, NAV for real estate and E&P, holding company discount in Pakistan. Engro Corporation SOTP worked example.", href: "/financial-strategy/module-102-sotp-nav-valuation" },
      { number: "Module 103", title: "Valuation Football Field & Fairness Opinions", description: "Football field construction, methodology weighting, board presentation of valuation, fairness opinion structure and liability.", href: "/financial-strategy/module-103-football-field-fairness-opinion" },
    ],
  },
  {
    part: "Part XXVIII — M&A Advisory",
    modules: [
      { number: "Module 104", title: "M&A Strategy & Deal Origination",        description: "Why companies do M&A, idea generation, target identification for buy-side, buyer identification for sell-side, the M&A pitch, and mandate structure.", href: "/financial-strategy/module-104-ma-strategy-origination" },
      { number: "Module 105", title: "Sell-Side M&A Process",                  description: "Process design, preparation phase, information memorandum, first and second round bids, exclusivity, SPA negotiation, and Pakistan regulatory approvals.", href: "/financial-strategy/module-105-sell-side-process" },
      { number: "Module 106", title: "Buy-Side M&A Process",                   description: "Initial approach, due diligence workstreams, synergy analysis, bid strategy, SPA key financial terms from buyer perspective.", href: "/financial-strategy/module-106-buy-side-process" },
      { number: "Module 107", title: "Mergers, Demergers & Deal Structures",   description: "Deal structures (asset vs share vs merger), consideration types, demergers and spin-offs, carve-out IPO mechanics, tax structuring.", href: "/financial-strategy/module-107-deal-structures" },
      { number: "Module 108", title: "Synergy Analysis & Integration Planning", description: "Synergy categories and quantification, synergy model structure, integration management office, 100-day plan, Pakistan/Gulf-specific integration risks.", href: "/financial-strategy/module-108-synergies-integration" },
      { number: "Module 109", title: "Cross-Border M&A & Emerging Market Deals", description: "Cross-border complexity, tax structuring, emerging market valuation adjustments, Pakistan inbound M&A, Gulf deal-making culture, CPEC M&A.", href: "/financial-strategy/module-109-cross-border-ma" },
    ],
  },
  {
    part: "Part XXIX — Equity Capital Markets",
    modules: [
      { number: "Module 110", title: "IPO Execution",                      description: "IPO decision, preparation (6–12 months), prospectus, analyst presentation, bookbuilding and pricing, allocation, post-IPO obligations. Pakistan and Gulf context.", href: "/financial-strategy/module-110-ipo-execution" },
      { number: "Module 111", title: "Rights Issues & Follow-On Offerings", description: "Rights issue rationale, TERP calculation, underwriting, accelerated bookbuild, block trade execution, Pakistan rights issue process.", href: "/financial-strategy/module-111-rights-issues-follow-on" },
      { number: "Module 112", title: "Convertible Bonds & Hybrid Securities", description: "Convertible bond structure, pricing, delta hedging, mandatory convertibles, preference shares, AT1 capital, Pakistan convertible instruments.", href: "/financial-strategy/module-112-convertible-bonds-hybrids" },
      { number: "Module 113", title: "ECM in Gulf & Pakistan Markets",       description: "Gulf IPO wave 2021–2023, Saudi Aramco IPO, ADNOC listings strategy, PSX IPO market, frontier market ECM, Islamic ECM.", href: "/financial-strategy/module-113-ecm-gulf-pakistan" },
      { number: "Module 114", title: "ECM Regulation & Prospectus Liability", description: "Prospectus liability, material misstatement standard, due diligence defense, greenshoe legal framework, prospectus approval timelines.", href: "/financial-strategy/module-114-ecm-regulation-liability" },
    ],
  },
  {
    part: "Part XXX — Debt Capital Markets & Leveraged Finance",
    modules: [
      { number: "Module 115", title: "Investment Grade Bond Markets",         description: "IG vs HY, bond issuance process, pricing (G-spread/I-spread/Z-spread), covenant package, MTN programs, Pakistan and Gulf IG market.", href: "/financial-strategy/module-115-investment-grade-bonds" },
      { number: "Module 116", title: "High Yield Bonds & Leveraged Loans",    description: "HY covenants, covenant-lite erosion, leveraged loan market, CLO mechanics, Pakistan leveraged finance constraints, Gulf leveraged finance growth.", href: "/financial-strategy/module-116-high-yield-leveraged-loans" },
      { number: "Module 117", title: "Sukuk: Islamic Bond Market",            description: "Sukuk vs bond, Ijara/Murabaha/Musharaka/Wakala sukuk structures, Pakistan sukuk (GoP Ijarah, corporate), Gulf sukuk (Aramco, Dubai), pricing sukuk vs bonds.", href: "/financial-strategy/module-117-sukuk-islamic-bonds" },
      { number: "Module 118", title: "Syndicated Lending",                    description: "Roles (MLA/bookrunner/arranger/agent), information memorandum, syndication process, credit agreement, Pakistan and Gulf syndicated markets.", href: "/financial-strategy/module-118-syndicated-lending" },
      { number: "Module 119", title: "Leveraged Buyout Financing",            description: "LBO capital structure, leverage sizing criteria, credit agreement negotiation, dividend recapitalization, refinancing strategy.", href: "/financial-strategy/module-119-lbo-financing" },
      { number: "Module 120", title: "Liability Management & Debt Restructuring", description: "Tender offer, exchange offer, consent solicitation, debt-for-equity swap, holdout problem, Pakistan TFC consent solicitation.", href: "/financial-strategy/module-120-liability-management" },
    ],
  },
  {
    part: "Part XXXI — Restructuring & Special Situations",
    modules: [
      { number: "Module 121", title: "Restructuring Advisory Process",           description: "Advisory universe, engagement, valuation in restructuring, creditor negotiation, RSA, Pakistan Companies Act 2017 schemes, Gulf restructuring case studies.", href: "/financial-strategy/module-121-restructuring-advisory" },
      { number: "Module 122", title: "Distressed M&A",                           description: "Pre-pack, credit bidding, distressed auction, management retention, Pakistan distressed M&A, NMC Health and DAMAC case studies.", href: "/financial-strategy/module-122-distressed-ma" },
      { number: "Module 123", title: "Special Situations: Spin-offs, Activism & Contested Deals", description: "Spin-off advisory, activist situations, proxy contest, hostile takeover, poison pill, white knight, Pakistan SECP Takeover Regulations 2017.", href: "/financial-strategy/module-123-special-situations" },
      { number: "Module 124", title: "Sovereign & Government Advisory",          description: "Government privatization, Pakistan Privatization Commission, sovereign debt restructuring, PPP financial advisory, SWF advisory, Pakistan Eurobond issuances.", href: "/financial-strategy/module-124-sovereign-advisory" },
    ],
  },
  {
    part: "Part XXXII — Sector Coverage & Geography",
    modules: [
      { number: "Module 125", title: "FIG Advisory In Depth",                  description: "Bank M&A, insurance M&A, FinTech advisory, bank capital raises, SBP-directed mergers, Gulf FIG case studies (FAB creation, Emirates NBD acquisitions).", href: "/financial-strategy/module-125-fig-advisory" },
      { number: "Module 126", title: "Energy & Infrastructure Advisory",       description: "E&P M&A, downstream M&A, IPP advisory, renewable energy, infrastructure M&A, NEOM financing. Pakistan OGDC/PPL, Gulf Aramco/ADNOC.", href: "/financial-strategy/module-126-energy-infrastructure-advisory" },
      { number: "Module 127", title: "TMT & FinTech Advisory",                 description: "Software M&A, internet/marketplace, FinTech M&A, regulatory licensing as deal driver, Pakistan tech M&A (Careem/Uber), Gulf tech consolidation.", href: "/financial-strategy/module-127-tmt-fintech-advisory" },
      { number: "Module 128", title: "Pakistan IB: Deals, Regulations & Opportunities", description: "Pakistan M&A landscape, PSX mechanics, CCPA merger control, SBP financial sector M&A, landmark Pakistan transactions, emerging deal flow themes.", href: "/financial-strategy/module-128-pakistan-ib" },
      { number: "Module 129", title: "Gulf IB: Saudi Arabia, UAE & Qatar",     description: "Saudi Vision 2030/NIF privatizations, UAE ADNOC listings/DIFC, Qatar QIA mandate/QNB, GCC cross-border M&A, Islamic finance IB, Gulf relationship banking.", href: "/financial-strategy/module-129-gulf-ib" },
      { number: "Module 130", title: "Emerging Market IB: Broader Context",    description: "Africa IB, India IB, Southeast Asia comparisons, EM common themes, career positioning for Pakistani/Gulf professionals in global EM roles.", href: "/financial-strategy/module-130-emerging-market-ib" },
    ],
  },
  {
    part: "Part XXXIII — IB Career, Culture & Future",
    modules: [
      { number: "Module 131", title: "Breaking Into Investment Banking",       description: "IB recruiting timeline (Pakistan/Gulf reality), networking strategy, technical preparation, interview questions (DCF/LBO/M&A), superday format, non-target university strategy.", href: "/financial-strategy/module-131-breaking-into-ib" },
      { number: "Module 132", title: "IB Career Progression: Analyst to MD",  description: "Responsibilities and timeline at each level, what accelerates promotion, compensation benchmarks (US/Gulf/Pakistan), exit opportunities, building a durable IB career in Gulf.", href: "/financial-strategy/module-132-ib-career-progression" },
      { number: "Module 133", title: "Ethics & Conflicts of Interest in IB",  description: "Conflicts of interest, Chinese walls, insider trading, market manipulation, fairness opinion conflicts, fee structure conflicts, SECP market abuse regulations, DFSA enforcement.", href: "/financial-strategy/module-133-ib-ethics" },
      { number: "Module 134", title: "Building an IB Practice in Pakistan & Gulf", description: "Regulatory licensing (SECP/DFSA/FSRA), team structure, deal economics, client development, Gulf market entry (DIFC vs ADGM), building credentials and competitive strategy.", href: "/financial-strategy/module-134-building-ib-practice" },
      { number: "Module 135", title: "The Future of Investment Banking",       description: "How AI is reshaping IB — which functions survive, the IB professional of 2030, tokenization and DeFi, Pakistan/Gulf advantage in relationship markets, building a future-resilient IB career.", href: "/financial-strategy/module-135-future-of-ib" },
    ],
  },
];

export default function FinancialStrategyPage() {
  return (
    <div>
      {/* Hero */}
      <div
        className="rounded-2xl mb-12 px-10 py-14 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a0f1e 0%, #0f1e3a 50%, #1a1000 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(180,83,9,0.18) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(245,158,11,0.10) 0%, transparent 50%)",
          }}
        />
        <div className="relative">
          <div
            className="inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest mb-5"
            style={{
              background: "rgba(245,158,11,0.12)",
              border: "1px solid rgba(245,158,11,0.25)",
              color: "#f59e0b",
            }}
          >
            Premium Finance Track
          </div>
          <h1 className="text-5xl font-black text-white mb-4 leading-tight">
            Financial{" "}
            <span style={{ color: "#f59e0b" }}>Strategy</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-6">
            Corporate finance, valuation frameworks, strategic analysis, and financial
            modelling — taught from first principles for analysts, strategists, and
            decision-makers.
          </p>
          <div className="flex flex-wrap gap-3">
            {["135 Modules", "3 Tracks", "33 Parts", "CFO Mastery", "Quant & HF", "Investment Banking", "Gulf & Pakistan"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  background: "rgba(245,158,11,0.1)",
                  color: "#fbbf24",
                  border: "1px solid rgba(245,158,11,0.2)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Curriculum with track selector */}
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Curriculum</h2>
      <CurriculumClient trackA={trackA} trackB={trackB} trackC={trackC} />

      {/* CTA */}
      <div
        className="rounded-xl p-6 flex flex-col justify-between mt-4"
        style={{
          background: "linear-gradient(135deg, #0a0f1e 0%, #1a1000 100%)",
          border: "1px solid rgba(245,158,11,0.25)",
        }}
      >
        <div>
          <div className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
            Also On ByteWise
          </div>
          <h3 className="text-lg font-bold text-white mb-3">Explore the CS Book</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Algorithms, system design, machine learning, and blockchain — all in one place.
          </p>
        </div>
        <Link
          href="/docs/cs-book"
          className="mt-6 inline-block font-bold px-5 py-2.5 rounded-xl text-center text-sm transition-colors"
          style={{ background: "#f59e0b", color: "#0a0f1e" }}
        >
          Open CS Book →
        </Link>
      </div>

      <p className="mt-12 text-xs text-slate-400 text-center">
        Financial Strategy · By Zulfiqar Ali Mir · ByteWise
      </p>
    </div>
  );
}
