"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { posts } from "./posts-data";
import { tagColors } from "./tagColors";

export default function BlogList() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    for (const post of posts) {
      counts.set(post.tag, (counts.get(post.tag) ?? 0) + 1);
    }
    return Array.from(counts.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  const filteredPosts = activeTag ? posts.filter((post) => post.tag === activeTag) : posts;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-10">
        <button
          type="button"
          onClick={() => setActiveTag(null)}
          className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border transition-colors ${
            activeTag === null
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-500 border-gray-200 hover:border-blue-300 hover:text-blue-600"
          }`}
        >
          All ({posts.length})
        </button>
        {tags.map(([tag, count]) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border transition-colors ${
              activeTag === tag
                ? "bg-blue-600 text-white border-blue-600"
                : `${tagColors[tag] ?? "bg-gray-100 text-gray-600"} border-transparent hover:opacity-80`
            }`}
          >
            {tag} ({count})
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="text-gray-500">No posts found for this tag.</p>
      ) : (
        <div className="space-y-8">
          {filteredPosts.map((post) => (
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
      )}
    </div>
  );
}
