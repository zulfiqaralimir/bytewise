"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { posts } from "./posts-data";
import { tagColors } from "./tagColors";

export default function BlogSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 hidden lg:block">
      <div className="sticky top-20">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 px-1">
          All Posts
        </p>
        <nav className="space-y-1">
          {posts.map((post) => {
            const href = `/blog/${post.slug}`;
            const isActive = pathname === href;
            const isIndex = pathname === "/blog";

            return (
              <Link
                key={post.slug}
                href={href}
                className={`block rounded-xl px-3 py-2.5 transition-colors no-underline group ${
                  isActive
                    ? "bg-blue-50 border border-blue-200"
                    : "hover:bg-gray-50 border border-transparent"
                }`}
              >
                <p
                  className={`text-sm font-medium leading-snug mb-1 ${
                    isActive ? "text-blue-700" : "text-gray-700 group-hover:text-gray-900"
                  }`}
                >
                  {post.title}
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full ${
                      tagColors[post.tag] ?? "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {post.tag}
                  </span>
                  <span className="text-[10px] text-gray-400">{post.date}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
