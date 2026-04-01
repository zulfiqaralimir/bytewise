"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const chapters = [
  {
    part: "Part 0 — How Computers Work",
    items: [
      { title: "Low-Level vs High-Level Programming", href: "/docs/cs-book/part-0-how-computers-work/low-high-level-programming" },
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
    ],
  },
];

const allHrefs = chapters.flatMap((c) => c.items.map((i) => i.href));

export function SidebarClient() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [readCount, setReadCount] = useState(0);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

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
        className={`fixed top-0 left-0 bottom-0 w-72 bg-slate-900 text-white z-40 flex flex-col transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex`}
      >
        {/* Brand */}
        <div className="p-6 border-b border-slate-700">
          <Link href="/" className="block">
            <div className="font-black text-2xl">
              Byte<span className="text-blue-400">Wise</span>
            </div>
            <div className="text-xs text-slate-400 mt-1">Programming from First Principles</div>
          </Link>
          <div className="mt-4">
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>Reading progress</span>
              <span>{readCount}/28 chapters</span>
            </div>
            <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all"
                style={{ width: `${(readCount / 28) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4">
          <Link
            href="/docs/cs-book"
            className={`block px-6 py-2 text-sm font-semibold mb-2 transition-colors ${
              pathname === "/docs/cs-book" ? "text-blue-400" : "text-slate-300 hover:text-white"
            }`}
          >
            Book Overview
          </Link>

          {chapters.map((section) => (
            <div key={section.part} className="mb-2">
              <button
                onClick={() => toggleCollapse(section.part)}
                className="w-full flex items-center justify-between px-6 py-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-200 transition-colors"
              >
                <span>{section.part}</span>
                <span className="text-lg leading-none">{collapsed[section.part] ? "+" : "−"}</span>
              </button>

              {!collapsed[section.part] && (
                <ul>
                  {section.items.map((item) => {
                    const globalIdx = allHrefs.indexOf(item.href);
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-3 px-6 py-2 text-sm transition-colors ${
                            isActive
                              ? "bg-blue-600/20 text-blue-400 border-r-2 border-blue-400"
                              : "text-slate-400 hover:text-white hover:bg-slate-800"
                          }`}
                        >
                          <span className="text-xs text-slate-600 w-4 flex-shrink-0">{globalIdx + 1}.</span>
                          <span className="flex-1">{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-700 text-xs text-slate-500 text-center">
          By Zulfiqar Ali Mir
        </div>
      </aside>
    </>
  );
}
