import Link from "next/link";
import type { Metadata } from "next";
import { NetworkAnimation } from "./components/NetworkAnimation";

export const metadata: Metadata = {
  title: "ByteWise — Programming Concepts Explained from First Principles",
  description:
    "Master CS fundamentals, algorithms, system design, and modern engineering with ByteWise — a free, comprehensive programming education book by Zulfiqar Ali Mir.",
  keywords: ["programming", "computer science", "algorithms", "system design", "data structures", "ByteWise"],
  openGraph: {
    title: "ByteWise — Programming Concepts from First Principles",
    description: "Master CS fundamentals, algorithms, and system design with ByteWise.",
    type: "website",
  },
};

const parts = [
  {
    number: "Part 1",
    title: "Foundations",
    bg: "bg-blue-50",
    border: "border-blue-200",
    accent: "text-blue-600",
    chapters: ["Big O Notation", "Data Structures", "Hash Tables", "Recursion"],
  },
  {
    number: "Part 2",
    title: "Algorithms",
    bg: "bg-violet-50",
    border: "border-violet-200",
    accent: "text-violet-600",
    chapters: ["Binary Search", "Sorting Algorithms", "Graph Traversal", "Dynamic Programming"],
  },
  {
    number: "Part 3",
    title: "System Design",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    accent: "text-emerald-600",
    chapters: ["APIs & REST", "Databases", "Caching", "Load Balancing"],
  },
  {
    number: "Part 4",
    title: "Advanced Concepts",
    bg: "bg-orange-50",
    border: "border-orange-200",
    accent: "text-orange-600",
    chapters: ["CAP Theorem", "Message Queues", "Microservices", "Rate Limiting"],
  },
  {
    number: "Part 5",
    title: "Modern Engineering",
    bg: "bg-rose-50",
    border: "border-rose-200",
    accent: "text-rose-600",
    chapters: ["CI/CD Pipelines", "Docker", "OAuth", "WebSockets"],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <NetworkAnimation />
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 30% 20%, #3b82f6 0%, transparent 50%)" }} />
        <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">
          <div className="inline-block bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1 text-sm text-blue-300 mb-6">
            Free · Open · 20 In-Depth Articles
          </div>
          <h1 className="text-6xl font-black mb-4 tracking-tight">
            Byte<span className="text-blue-400">Wise</span>
          </h1>
          <p className="text-xl text-slate-300 mb-3 font-medium">
            Programming Concepts Explained from First Principles
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            A comprehensive CS education book covering data structures, algorithms, system design,
            and modern engineering — written for engineers who want to truly understand, not just memorize.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs/cs-book"
              className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
            >
              Start Reading →
            </Link>
            <Link
              href="/docs/cs-book/part-1-foundations/big-o-notation"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all"
            >
              Chapter 1: Big O Notation
            </Link>
          </div>
          <p className="mt-8 text-slate-500 text-sm">By Zulfiqar Ali Mir</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-3 gap-6 text-center">
          {[["20", "In-Depth Articles"], ["5", "Core Topic Areas"], ["1500+", "Words Per Article"]].map(
            ([num, label]) => (
              <div key={label}>
                <div className="text-3xl font-black text-blue-600">{num}</div>
                <div className="text-sm text-gray-600 mt-1">{label}</div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Parts overview */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">What You Will Learn</h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          ByteWise is organized into 5 progressive parts — each building on the last.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {parts.map((part) => (
            <div
              key={part.number}
              className={`rounded-2xl border ${part.border} ${part.bg} p-6 hover:shadow-lg transition-shadow`}
            >
              <div className={`text-xs font-bold ${part.accent} uppercase tracking-widest mb-2`}>
                {part.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{part.title}</h3>
              <ul className="space-y-1">
                {part.chapters.map((ch) => (
                  <li key={ch} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    {ch}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA card */}
          <div className="rounded-2xl border border-blue-300 bg-gradient-to-br from-blue-500 to-violet-600 p-6 text-white flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-2 text-blue-100">Ready?</div>
              <h3 className="text-xl font-bold mb-3">Start Your Journey</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Begin with Big O Notation — the language of algorithmic efficiency.
              </p>
            </div>
            <Link
              href="/docs/cs-book"
              className="mt-6 inline-block bg-white text-blue-700 font-bold px-6 py-3 rounded-xl text-center hover:bg-blue-50 transition-colors"
            >
              Open Book →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
          <p className="font-semibold text-gray-700 mb-1">ByteWise</p>
          <p>By Zulfiqar Ali Mir · Programming Concepts Explained from First Principles</p>
        </div>
      </footer>
    </main>
  );
}
