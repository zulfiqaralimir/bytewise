"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const modules = [
  {
    part: "Module 1 — An Introduction to Financial Strategy",
    chapters: [
      { chapter: "An Introduction to Financial Strategy", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 2 — Performance Measurement in Financial Strategy",
    chapters: [
      { chapter: "Performance Measurement in Financial Strategy", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 3 — Long Term Finance",
    chapters: [
      { chapter: "Long Term Finance", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 4 — Short Term Finance & Working Capital Management",
    chapters: [
      { chapter: "Short Term Finance – Working Capital Management", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 5 — Cost of Capital",
    chapters: [
      { chapter: "Cost of Capital", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 6 — Capital Structure",
    chapters: [
      { chapter: "Capital Structure", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 7 — The Role of Treasury",
    chapters: [
      { chapter: "The Role of Treasury", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 8 — Investment Appraisal: Basic Techniques",
    chapters: [
      { chapter: "Investment Appraisal – Basic Techniques", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 9 — Investment Appraisal: Further Techniques",
    chapters: [
      { chapter: "Investment Appraisal – Further Techniques", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 10 — International Investment Appraisal",
    chapters: [
      { chapter: "International Investment Appraisal", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 11 — Business Valuation",
    chapters: [
      { chapter: "Business Valuation", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 12 — Mergers and Acquisitions",
    chapters: [
      { chapter: "Financial and Strategic Implications of Mergers and Acquisitions", items: [] as { title: string; href: string }[] },
    ],
  },
  {
    part: "Module 13 — Implementation and Control Procedures",
    chapters: [
      { chapter: "Implementation and Control Procedures", items: [] as { title: string; href: string }[] },
    ],
  },
];

const allHrefs = modules.flatMap((m) =>
  m.chapters.flatMap((ch) => ch.items.map((i) => i.href))
);

export function FinancialStrategySidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(modules.map((m) => [m.part, true]))
  );

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    const activeModule = modules.find((m) =>
      m.chapters.some((ch) => ch.items.some((item) => item.href === pathname))
    );
    if (activeModule) {
      setCollapsed((prev) => ({ ...prev, [activeModule.part]: false }));
    }
  }, [pathname]);

  const toggleCollapse = (part: string) => {
    setCollapsed((prev) => ({ ...prev, [part]: !prev[part] }));
  };

  return (
    <>
      {/* Reading progress bar — gold */}
      <div
        className="fixed top-0 left-0 h-1 z-50 transition-all duration-150"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(to right, #b45309, #f59e0b, #fbbf24)",
        }}
      />

      {/* Mobile header */}
      <header className="md:hidden fixed top-1 left-0 right-0 z-40 bg-[#0a0f1e] border-b border-amber-900/40 flex items-center justify-between px-4 py-3">
        <Link href="/financial-strategy" className="font-black text-lg text-white">
          <span className="text-amber-400">Financial</span> Strategy
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg text-amber-400 hover:bg-amber-400/10"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-72 z-40 flex flex-col transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        style={{ background: "#080d1a", borderRight: "1px solid #1e2d45" }}
      >
        {/* Brand */}
        <div className="p-6" style={{ borderBottom: "1px solid #1e2d45" }}>
          <Link href="/" className="block mb-4">
            <div className="font-black text-xl text-white">
              Byte<span className="text-blue-400">Wise</span>
            </div>
            <div className="text-xs text-slate-500 mt-0.5">Programming from First Principles</div>
          </Link>
          <Link href="/financial-strategy" className="block">
            <div className="font-black text-lg leading-tight">
              <span className="text-amber-400">Financial</span>
              <span className="text-white"> Strategy</span>
            </div>
            <div className="text-xs text-amber-700/70 mt-0.5 uppercase tracking-widest">
              Premium Finance Track
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4">
          <Link
            href="/financial-strategy"
            className={`block px-6 py-2 text-sm font-semibold mb-2 transition-colors ${
              pathname === "/financial-strategy"
                ? "text-amber-400"
                : "text-slate-400 hover:text-amber-300"
            }`}
          >
            Overview
          </Link>

          {modules.map((module) => (
            <div key={module.part} className="mb-2">
              <button
                onClick={() => toggleCollapse(module.part)}
                className="w-full flex items-center justify-between px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors"
                style={{ color: collapsed[module.part] ? "#6b5a2e" : "#d97706" }}
              >
                <span>{module.part}</span>
                <span className="text-base leading-none">
                  {collapsed[module.part] ? "+" : "−"}
                </span>
              </button>

              {!collapsed[module.part] && (
                <div>
                  {module.chapters.map((ch) => (
                    <div key={ch.chapter}>
                      <div className="px-6 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-amber-900/80">
                        {ch.chapter}
                      </div>
                      {ch.items.length === 0 ? (
                        <div className="pl-8 pr-6 py-1.5 text-xs text-slate-600 italic">
                          Coming soon
                        </div>
                      ) : (
                        <ul>
                          {ch.items.map((item) => {
                            const globalIdx = allHrefs.indexOf(item.href);
                            const isActive = pathname === item.href;
                            return (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className={`flex items-center gap-3 pl-8 pr-6 py-2 text-sm transition-colors ${
                                    isActive
                                      ? "text-amber-400 border-r-2 border-amber-400"
                                      : "text-slate-400 hover:text-amber-300"
                                  }`}
                                  style={
                                    isActive
                                      ? { background: "rgba(245,158,11,0.08)" }
                                      : undefined
                                  }
                                >
                                  <span className="text-xs text-slate-600 w-4 flex-shrink-0">
                                    {globalIdx + 1}.
                                  </span>
                                  <span className="flex-1">{item.title}</span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 space-y-2" style={{ borderTop: "1px solid #1e2d45" }}>
          <Link
            href="/docs/cs-book"
            className="block text-xs text-slate-500 hover:text-amber-400 transition-colors text-center"
          >
            CS Book →
          </Link>
          <Link
            href="/blog"
            className="block text-xs text-slate-500 hover:text-amber-400 transition-colors text-center"
          >
            Blog →
          </Link>
          <div className="text-xs text-slate-600 text-center">By Zulfiqar Ali Mir</div>
        </div>
      </aside>
    </>
  );
}
