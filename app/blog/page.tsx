import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "./posts-data";

export const metadata: Metadata = {
  title: "Blog — ByteWise",
  description: "Articles on AI, engineering, and technology by Zulfiqar Ali Mir.",
  openGraph: {
    title: "Blog — ByteWise",
    description: "Articles on AI, engineering, and technology by Zulfiqar Ali Mir.",
    type: "website",
  },
};

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
