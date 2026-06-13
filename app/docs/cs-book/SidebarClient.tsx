"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const chapters = [
  {
    part: "Part 0 — How Computers Work",
    items: [
      { title: "Low-Level vs High-Level Programming", href: "/docs/cs-book/part-0-how-computers-work/low-high-level-programming" },
      { title: "The Internet & Computer Networks", href: "/docs/cs-book/part-0-how-computers-work/networking/internet-overview" },
      { title: "Application Layer (HTTP, DNS)", href: "/docs/cs-book/part-0-how-computers-work/networking/application-layer" },
      { title: "Transport Layer (TCP & UDP)", href: "/docs/cs-book/part-0-how-computers-work/networking/transport-layer" },
      { title: "Network Layer (IP & Routing)", href: "/docs/cs-book/part-0-how-computers-work/networking/network-layer" },
      { title: "Link Layer & LANs", href: "/docs/cs-book/part-0-how-computers-work/networking/link-layer" },
      { title: "Wireless & Mobile Networks", href: "/docs/cs-book/part-0-how-computers-work/networking/wireless-mobile-networks" },
      { title: "Multimedia Networking", href: "/docs/cs-book/part-0-how-computers-work/networking/multimedia-networking" },
      { title: "Network Security", href: "/docs/cs-book/part-0-how-computers-work/networking/network-security" },
    ],
  },
  {
    part: "Part 1 — Foundations",
    items: [
      { title: "Big O Notation", href: "/docs/cs-book/part-1-foundations/big-o-notation" },
      { title: "Data Structures", href: "/docs/cs-book/part-1-foundations/data-structures" },
      { title: "Hash Tables", href: "/docs/cs-book/part-1-foundations/hash-tables" },
      { title: "Recursion", href: "/docs/cs-book/part-1-foundations/recursion" },
    ],
  },
  {
    part: "Part 2 — Design Patterns (LLD)",
    items: [
      { title: "SOLID Principles", href: "/docs/cs-book/part-2-design-patterns/solid-principles" },
      { title: "OOP Fundamentals", href: "/docs/cs-book/part-2-design-patterns/oop-fundamentals" },
      { title: "Encapsulation vs Abstraction", href: "/docs/cs-book/part-2-design-patterns/encapsulation-vs-abstraction" },
      { title: "Creational Patterns", href: "/docs/cs-book/part-2-design-patterns/creational-patterns" },
      { title: "Structural Patterns", href: "/docs/cs-book/part-2-design-patterns/structural-patterns" },
      { title: "Behavioral Patterns", href: "/docs/cs-book/part-2-design-patterns/behavioral-patterns" },
    ],
  },
  {
    part: "Part 3 — Algorithms",
    items: [
      { title: "Binary Search", href: "/docs/cs-book/part-2-algorithms/binary-search" },
      { title: "Sorting Algorithms", href: "/docs/cs-book/part-2-algorithms/sorting-algorithms" },
      { title: "Graph Traversal", href: "/docs/cs-book/part-2-algorithms/graph-traversal" },
      { title: "Dynamic Programming", href: "/docs/cs-book/part-2-algorithms/dynamic-programming" },
    ],
  },
  {
    part: "Part 3 — System Design",
    items: [
      { title: "Complete System Design Roadmap 2025", href: "/docs/cs-book/part-3-system-design/system-design-overview" },
      { title: "10-Step System Design Interview Framework", href: "/docs/cs-book/part-3-system-design/system-design-interview-framework" },
      { title: "APIs & REST", href: "/docs/cs-book/part-3-system-design/apis-and-rest" },
      { title: "Databases", href: "/docs/cs-book/part-3-system-design/databases" },
      { title: "Caching", href: "/docs/cs-book/part-3-system-design/caching" },
      { title: "Load Balancing", href: "/docs/cs-book/part-3-system-design/load-balancing" },
    ],
  },
  {
    part: "Part 4 — Advanced",
    items: [
      { title: "CAP Theorem", href: "/docs/cs-book/part-4-advanced/cap-theorem" },
      { title: "Message Queues", href: "/docs/cs-book/part-4-advanced/message-queues" },
      { title: "Microservices", href: "/docs/cs-book/part-4-advanced/microservices" },
      { title: "Rate Limiting", href: "/docs/cs-book/part-4-advanced/rate-limiting" },
    ],
  },
  {
    part: "Part 5 — Modern Engineering",
    items: [
      { title: "CI/CD Pipelines", href: "/docs/cs-book/part-5-modern-engineering/ci-cd" },
      { title: "Docker & Containers", href: "/docs/cs-book/part-5-modern-engineering/docker" },
      { title: "OAuth & Auth Flows", href: "/docs/cs-book/part-5-modern-engineering/oauth" },
      { title: "WebSockets", href: "/docs/cs-book/part-5-modern-engineering/websockets" },
    ],
  },
  {
    part: "Part 6 — Machine Learning",
    items: [
      { title: "Decision Trees", href: "/docs/cs-book/part-6-machine-learning/decision-trees" },
      { title: "Decision Trees and Classification Trees", href: "/docs/cs-book/part-6-machine-learning/decision-trees-classification" },
      { title: "Regression Trees", href: "/docs/cs-book/part-6-machine-learning/regression-trees" },
      { title: "Bias and Variance", href: "/docs/cs-book/part-6-machine-learning/bias-and-variance" },
      { title: "Prune Regression Tree", href: "/docs/cs-book/part-6-machine-learning/prune-regression-tree" },
      { title: "Cross Validation", href: "/docs/cs-book/part-6-machine-learning/cross-validation" },
    ],
  },
  {
    part: "Part 7 — AI & LLMs",
    items: [
      { title: "Agentic AI", href: "/docs/cs-book/part-7-ai-and-llms/agentic-ai" },
      { title: "Case Study: Agentic AI in Retail Merchandising", href: "/docs/cs-book/part-7-ai-and-llms/agentic-ai-retail-case-study" },
      { title: "Palantir: Data Analytics & AI", href: "/docs/cs-book/part-7-ai-and-llms/palantir-data-analytics-ai" },
      { title: "Palantir Gotham", href: "/docs/cs-book/part-7-ai-and-llms/palantir-gotham" },
      { title: "Palantir Foundry", href: "/docs/cs-book/part-7-ai-and-llms/palantir-foundry" },
      { title: "Case Study: Open Claw System Design", href: "/docs/cs-book/part-7-ai-and-llms/open-claude-system-design" },
      { title: "OpenClaw: Production-Ready Architecture", href: "/docs/cs-book/part-7-ai-and-llms/openclaw-production-design" },
      { title: "Case Study: Bloomberg-Style Fintech Platform", href: "/docs/cs-book/part-7-ai-and-llms/blackirontimes-fintech-platform" },
    ],
  },
  {
    part: "Part 8 — Blockchain",
    items: [
      { title: "Chapter 1: What Is Blockchain? Blocks, Hashing & Chain Structure", href: "/docs/cs-book/part-8-blockchain/what-is-blockchain" },
      { title: "Chapter 2: Consensus Mechanisms — Proof of Work vs Proof of Stake", href: "/docs/cs-book/part-8-blockchain/consensus-mechanisms" },
      { title: "Blockchain Glossary", href: "/docs/cs-book/part-8-blockchain/blockchain-glossary" },
    ],
  },
  {
    part: "Part 9 — Research",
    chapters: [
      {
        chapter: "Agentic AI",
        items: [
          { title: "Agents of Chaos: A Warning About Autonomous AI Systems", href: "/docs/cs-book/part-9-research/agentic-ai/agents-of-chaos" },
        ],
      },
    ],
  },
  {
    part: "Part 10 — Introduction to Algorithms (CLRS)",
    chapters: [
      {
        chapter: "Chapter 1: The Role of Algorithms in Computing",
        items: [
          { title: "1.1 Algorithms", href: "/docs/cs-book/part-10-introduction-to-algorithms/chapter-1/1-1-algorithms" },
          { title: "1.2 Algorithms as a Technology", href: "/docs/cs-book/part-10-introduction-to-algorithms/chapter-1/1-2-algorithms-as-a-technology" },
        ],
      },
      {
        chapter: "Chapter 2: Getting Started",
        items: [
          { title: "2.1 Insertion Sort", href: "/docs/cs-book/part-10-introduction-to-algorithms/chapter-2/2-1-insertion-sort" },
        ],
      },
    ],
  },
  {
    part: "Part 11 — Economic & Finance Models",
    chapters: [
      {
        chapter: "Chapter 1: Social Accounting Matrix",
        items: [
          { title: "Social Accounting Matrix: A Complete Guide", href: "/docs/cs-book/part-11-economic-finance-models/chapter-1/social-accounting-matrix" },
          { title: "1.1 How to Read a Social Accounting Matrix", href: "/docs/cs-book/part-11-economic-finance-models/chapter-1/1-1-how-to-read-a-sam" },
        ],
      },
    ],
  },
  {
    part: "Part 12 — Mastering Programming Language C",
    chapters: [
      {
        chapter: "Computer Architecture — From Zero to Expert",
        items: [
          { title: "Lesson 0: Roadmap — C from Beginner to Expert", href: "/docs/cs-book/part-12-mastering-c/computer-architecture/lesson-0-roadmap" },
          { title: "Lesson 1: Introduction — What Is a Computer?", href: "/docs/cs-book/part-12-mastering-c/computer-architecture/lesson-1-introduction" },
          { title: "Lesson 2: History of the C Programming Language", href: "/docs/cs-book/part-12-mastering-c/computer-architecture/lesson-2-history-of-c" },
          { title: "Lesson 4: History of Computers", href: "/docs/cs-book/part-12-mastering-c/computer-architecture/lesson-4-history-of-computers" },
          { title: "Lesson 5: Number Systems — Binary, Decimal, Octal, Hex", href: "/docs/cs-book/part-12-mastering-c/computer-architecture/lesson-5-number-systems" },
          { title: "Lesson 6: Bits and Bytes", href: "/docs/cs-book/part-12-mastering-c/computer-architecture/lesson-6-bits-and-bytes" },
          { title: "Lesson 7: Logic Gates", href: "/docs/cs-book/part-12-mastering-c/computer-architecture/lesson-7-logic-gates" },
          { title: "Lesson 8: Boolean Algebra", href: "/docs/cs-book/part-12-mastering-c/computer-architecture/lesson-8-boolean-algebra" },
        ],
      },
    ],
  },
];

const allHrefs = chapters.flatMap((c) =>
  "items" in c && c.items
    ? c.items.map((i: { href: string }) => i.href)
    : (c as any).chapters?.flatMap((ch: any) => ch.items.map((i: any) => i.href)) ?? []
);

export function SidebarClient() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [readCount, setReadCount] = useState(0);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(chapters.map((c) => [c.part, true]))
  );

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bw-read") ?? "[]") as string[];
    setReadCount(stored.length);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);

    // Mark current page as read
    if (pathname !== "/docs/cs-book") {
      const stored = JSON.parse(localStorage.getItem("bw-read") ?? "[]") as string[];
      if (!stored.includes(pathname)) {
        stored.push(pathname);
        localStorage.setItem("bw-read", JSON.stringify(stored));
        setReadCount(stored.length);
      }
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    const activePart = chapters.find((section) => {
      if ("items" in section && section.items) {
        return (section.items as { href: string }[]).some((item) => item.href === pathname);
      }
      return (section as any).chapters?.some((ch: any) =>
        ch.items.some((item: any) => item.href === pathname)
      );
    });
    if (activePart) {
      setCollapsed((prev) => ({ ...prev, [activePart.part]: false }));
    }
  }, [pathname]);

  const toggleCollapse = (part: string) => {
    setCollapsed((prev) => ({ ...prev, [part]: !prev[part] }));
  };

  return (
    <>
      {/* Reading progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-violet-500 z-50 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />

      {/* Mobile header */}
      <header className="md:hidden fixed top-1 left-0 right-0 z-40 bg-white border-b border-gray-200 flex items-center justify-between px-4 py-3">
        <Link href="/docs/cs-book" className="font-black text-lg text-gray-900">
          Byte<span className="text-blue-500">Wise</span>
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-72 bg-white text-gray-900 border-r border-gray-200 z-40 flex flex-col transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Brand */}
        <div className="p-6 border-b border-gray-200">
          <Link href="/" className="block">
            <div className="font-black text-2xl text-gray-900">
              Byte<span className="text-blue-500">Wise</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">Programming from First Principles</div>
          </Link>
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Reading progress</span>
              <span>{readCount}/62 chapters</span>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all"
                style={{ width: `${(readCount / 62) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4">
          <Link
            href="/docs/cs-book"
            className={`block px-6 py-2 text-sm font-semibold mb-2 transition-colors ${
              pathname === "/docs/cs-book" ? "text-blue-600" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Book Overview
          </Link>

          {chapters.map((section) => (
            <div key={section.part} className="mb-2">
              <button
                onClick={() => toggleCollapse(section.part)}
                className="w-full flex items-center justify-between px-6 py-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-gray-700 transition-colors"
              >
                <span>{section.part}</span>
                <span className="text-lg leading-none">{collapsed[section.part] ? "+" : "−"}</span>
              </button>

              {!collapsed[section.part] && (
                "items" in section && section.items ? (
                  <ul>
                    {(section.items as { title: string; href: string }[]).map((item) => {
                      const globalIdx = allHrefs.indexOf(item.href);
                      const isActive = pathname === item.href;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={`flex items-center gap-3 px-6 py-2 text-sm transition-colors ${
                              isActive
                                ? "bg-blue-50 text-blue-600 border-r-2 border-blue-500"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                            }`}
                          >
                            <span className="text-xs text-gray-400 w-4 flex-shrink-0">{globalIdx + 1}.</span>
                            <span className="flex-1">{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <div>
                    {((section as any).chapters as { chapter: string; items: { title: string; href: string }[] }[]).map((ch) => (
                      <div key={ch.chapter}>
                        <div className="px-6 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-indigo-500">
                          {ch.chapter}
                        </div>
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
                                      ? "bg-blue-50 text-blue-600 border-r-2 border-blue-500"
                                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                  }`}
                                >
                                  <span className="text-xs text-gray-400 w-4 flex-shrink-0">{globalIdx + 1}.</span>
                                  <span className="flex-1">{item.title}</span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200 space-y-2">
          <Link
            href="/docs/system-design-course"
            className="block text-xs text-blue-500 hover:text-blue-700 transition-colors text-center"
          >
            System Design Course →
          </Link>
          <div className="text-xs text-gray-400 text-center">By Zulfiqar Ali Mir</div>
        </div>
      </aside>
    </>
  );
}
