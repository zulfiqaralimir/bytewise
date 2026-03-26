"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function ReadingTime() {
  const pathname = usePathname();
  const [stats, setStats] = useState<{ minutes: number; words: number } | null>(null);

  useEffect(() => {
    // Double rAF ensures server-rendered children are fully in the DOM
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = document.getElementById("article-body");
        if (!el) return;

        const text = el.textContent ?? "";
        const words = text.trim().split(/\s+/).filter(Boolean).length;
        const minutes = Math.ceil(words / 200);
        setStats({ minutes, words });
      });
    });
  }, [pathname]); // re-run on every route change

  if (!stats) return null;

  return (
    <div className="flex items-center gap-2 text-sm text-gray-400 mb-8 pb-6 border-b border-gray-100">
      <span>📖</span>
      <span>{stats.minutes} min read</span>
      <span className="text-gray-300">·</span>
      <span>{stats.words.toLocaleString()} words</span>
    </div>
  );
}
