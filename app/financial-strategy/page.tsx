import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Strategy — ByteWise",
  description:
    "Corporate finance, valuation, strategy frameworks, and financial models — explained from first principles by Zulfiqar Ali Mir.",
  openGraph: {
    title: "Financial Strategy — ByteWise",
    description:
      "Corporate finance, valuation, strategy frameworks, and financial models explained from first principles.",
    type: "website",
  },
};

const ACCENTS = ["#d97706", "#b45309", "#92400e"] as const;

const curriculum = [
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
      { number: "Module 24", title: "Quantitative Finance for CFOs", description: "Statistical foundations, time series analysis, factor models, and portfolio optimization connecting quant methods to CFO capital allocation decisions.", href: "/financial-strategy/module-24-quantitative-finance" },
      { number: "Module 25", title: "AI & Technology in Finance",    description: "AI in FP&A, LLM agents in financial workflows, data governance for CFOs, and what every modern CFO must understand about their technology stack.", href: "/financial-strategy/module-25-ai-technology-finance" },
      { number: "Module 26", title: "FinTech & Digital Finance",     description: "Digital payments, open banking, blockchain in finance, CBDC implications, digital asset accounting, and the FinTech-disrupted treasury landscape.", href: "/financial-strategy/module-26-fintech-digital-finance" },
      { number: "Module 27", title: "Data Analytics & Financial Intelligence", description: "SQL for finance, Python for CFOs, building a finance data infrastructure, KPI dashboards, and transforming raw data into strategic intelligence.", href: "/financial-strategy/module-27-data-analytics" },
    ],
  },
  {
    part: "Part VI — CFO Leadership & Communication",
    modules: [
      { number: "Module 28", title: "CFO Leadership & Finance Team Management",      description: "Building and leading a world-class finance function — team design, hiring, talent development, and the CFO's evolution to strategic leader.", href: "/financial-strategy/module-28-cfo-leadership" },
      { number: "Module 29", title: "Investor Relations & Capital Markets Communication", description: "Earnings calls, analyst briefings, investor presentations, managing market expectations, and constructing financial narratives.", href: "/financial-strategy/module-29-investor-relations" },
      { number: "Module 30", title: "Board Reporting & Corporate Governance",         description: "Board dynamics, audit committee responsibilities, board paper preparation, governance codes, and what boards expect from their CFO.", href: "/financial-strategy/module-30-board-reporting" },
      { number: "Module 31", title: "Stakeholder & Banking Relationships",            description: "Managing banking relationships, covenant negotiation, credit rating processes, and building the external relationships that give a CFO financial flexibility.", href: "/financial-strategy/module-31-stakeholder-banking" },
    ],
  },
  {
    part: "Part VII — Geography-Specific Finance",
    modules: [
      { number: "Module 32", title: "Pakistan Financial Landscape for CFOs",   description: "The complete operating environment for a CFO in Pakistan — SECP, SBP, FBR, PSX, banking access, PKR volatility, and SBP refinancing schemes.", href: "/financial-strategy/module-32-pakistan-financial-landscape" },
      { number: "Module 33", title: "Gulf & MENA Finance for CFOs",             description: "Financial operating environment in the Gulf — regulatory frameworks, banking relationships, SWF engagement, free zone finance, and capital market access.", href: "/financial-strategy/module-33-gulf-mena-finance" },
      { number: "Module 34", title: "Islamic Finance & Shariah-Compliant Structures", description: "Sukuk, murabaha, ijara, musharaka, and the full Islamic finance toolkit — essential for any CFO operating in Pakistan or the Gulf.", href: "/financial-strategy/module-34-islamic-finance" },
      { number: "Module 35", title: "Cross-Border Finance & Transfer Pricing",  description: "Financing international operations, transfer pricing compliance, APV for cross-border investments, thin capitalisation rules, and multi-currency group treasury.", href: "/financial-strategy/module-35-cross-border-finance" },
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
            {["35 Modules", "7 Parts", "Investment Appraisal", "Valuation", "M&A", "IFRS", "Risk Management", "Gulf & Pakistan"].map((tag) => (
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

      {/* Curriculum */}
      <h2 className="text-2xl font-bold text-slate-800 mb-8">Curriculum</h2>

      {curriculum.map((part) => (
        <div key={part.part} className="mb-12">
          {/* Part heading */}
          <div className="flex items-center gap-4 mb-5">
            <span
              className="text-xs font-black uppercase tracking-widest whitespace-nowrap"
              style={{ color: "#b45309" }}
            >
              {part.part}
            </span>
            <div className="flex-1 h-px" style={{ background: "#e5d9c0" }} />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {part.modules.map((mod, i) => {
              const acc = ACCENTS[i % 3];
              const cardContent = (
                <>
                  <div className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: acc }}>
                    {mod.number}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{mod.title}</h3>
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">{mod.description}</p>
                  {mod.href ? (
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(217,119,6,0.12)",
                        color: "#b45309",
                        border: "1px solid rgba(217,119,6,0.3)",
                      }}
                    >
                      Read Module →
                    </span>
                  ) : (
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(180,83,9,0.08)",
                        color: "#92400e",
                        border: "1px solid rgba(180,83,9,0.15)",
                      }}
                    >
                      Coming Soon
                    </span>
                  )}
                </>
              );

              return mod.href ? (
                <Link
                  key={mod.number}
                  href={mod.href}
                  className="rounded-xl border p-6 transition-all hover:shadow-md hover:border-amber-300 block"
                  style={{ borderColor: "#e5d9c0", background: "#fffdf7" }}
                >
                  {cardContent}
                </Link>
              ) : (
                <div
                  key={mod.number}
                  className="rounded-xl border p-6"
                  style={{ borderColor: "#e5d9c0", background: "#fffdf7" }}
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      ))}

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
