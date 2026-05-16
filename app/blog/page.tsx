import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — ByteWise",
  description: "Articles on AI, engineering, and technology by Zulfiqar Ali Mir.",
  openGraph: {
    title: "Blog — ByteWise",
    description: "Articles on AI, engineering, and technology by Zulfiqar Ali Mir.",
    type: "website",
  },
};

const posts = [
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

export default function BlogIndex() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-black text-gray-900 mb-3">Blog</h1>
        <p className="text-gray-500 text-lg">Articles on AI, engineering, and technology.</p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-300 hover:shadow-md transition-all no-underline"
          >
            <img
              src={`/blog/${post.slug}/opengraph-image`}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full h-auto"
            />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  {post.tag}
                </span>
                <span className="text-sm text-gray-400">{post.date}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
