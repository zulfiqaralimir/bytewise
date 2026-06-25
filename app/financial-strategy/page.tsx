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

const modules = [
  {
    number: "Module 1",
    title: "An Introduction to Financial Strategy",
    accent: "#d97706",
    description: "The foundations of financial strategy — what it is, why it matters, and how finance connects to corporate decision-making.",
    href: null,
  },
  {
    number: "Module 2",
    title: "Performance Measurement in Financial Strategy",
    accent: "#b45309",
    description: "How companies measure financial performance: KPIs, shareholder value, EVA, and the balanced scorecard.",
    href: null,
  },
  {
    number: "Module 3",
    title: "Long Term Finance",
    accent: "#92400e",
    description: "Equity, debt, and hybrid instruments — how companies raise long-term capital and structure their financing.",
    href: null,
  },
  {
    number: "Module 4",
    title: "Short Term Finance & Working Capital Management",
    accent: "#d97706",
    description: "Managing liquidity, receivables, payables, and inventory to keep operations running efficiently.",
    href: null,
  },
  {
    number: "Module 5",
    title: "Cost of Capital",
    accent: "#b45309",
    description: "WACC, CAPM, and the risk-return tradeoff — understanding what it costs a company to fund itself.",
    href: null,
  },
  {
    number: "Module 6",
    title: "Capital Structure",
    accent: "#92400e",
    description: "The optimal mix of debt and equity, Modigliani-Miller, leverage, and how capital structure affects firm value.",
    href: null,
  },
  {
    number: "Module 7",
    title: "The Role of Treasury",
    accent: "#d97706",
    description: "Cash management, foreign exchange, interest rate risk, and the corporate treasury function.",
    href: null,
  },
  {
    number: "Module 8",
    title: "Investment Appraisal: Basic Techniques",
    accent: "#b45309",
    description: "NPV, IRR, payback period, and accounting rate of return — the core toolkit for evaluating capital projects.",
    href: null,
  },
  {
    number: "Module 9",
    title: "Investment Appraisal: Further Techniques",
    accent: "#92400e",
    description: "Real options, adjusted NPV, sensitivity analysis, and dealing with uncertainty in investment decisions.",
    href: null,
  },
  {
    number: "Module 10",
    title: "International Investment Appraisal",
    accent: "#d97706",
    description: "Appraising cross-border investments: currency risk, political risk, transfer pricing, and APV in a global context.",
    href: null,
  },
  {
    number: "Module 11",
    title: "Business Valuation",
    accent: "#b45309",
    description: "DCF valuation, market multiples, asset-based methods, and how to value a business for M&A or IPO.",
    href: null,
  },
  {
    number: "Module 12",
    title: "Mergers and Acquisitions",
    accent: "#92400e",
    description: "The strategic and financial logic of M&A — deal structures, synergies, due diligence, and post-merger integration.",
    href: "/financial-strategy/module-12-mergers-and-acquisitions",
  },
  {
    number: "Module 13",
    title: "Implementation and Control Procedures",
    accent: "#d97706",
    description: "Translating financial strategy into action — budgeting, control systems, governance, and performance monitoring.",
    href: null,
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
        {/* Gold glow */}
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
            {["13 Modules", "Investment Appraisal", "Valuation", "M&A Strategy"].map((tag) => (
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

      {/* Modules */}
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Curriculum</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {modules.map((mod) => {
          const cardContent = (
            <>
              <div
                className="text-xs font-black uppercase tracking-widest mb-2"
                style={{ color: mod.accent }}
              >
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

        {/* CTA card */}
        <div
          className="rounded-xl p-6 flex flex-col justify-between"
          style={{
            background: "linear-gradient(135deg, #0a0f1e 0%, #1a1000 100%)",
            border: "1px solid rgba(245,158,11,0.25)",
          }}
        >
          <div>
            <div
              className="text-xs font-black uppercase tracking-widest mb-3"
              style={{ color: "#f59e0b" }}
            >
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
      </div>

      {/* Footer note */}
      <p className="mt-12 text-xs text-slate-400 text-center">
        Financial Strategy · By Zulfiqar Ali Mir · ByteWise
      </p>
    </div>
  );
}
