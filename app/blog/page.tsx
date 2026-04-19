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
            className="block group rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-md transition-all no-underline"
          >
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
          </Link>
        ))}
      </div>
    </div>
  );
}
