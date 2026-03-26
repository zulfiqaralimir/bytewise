"use client";

import { useEffect, useState } from "react";

export function ReadingTime() {
  const [stats, setStats] = useState<{ minutes: number; words: number } | null>(null);

  useEffect(() => {
    // Read text from the prose article content
    const prose = document.querySelector(".prose");
    if (!prose) return;

    const text = prose.textContent ?? "";
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.ceil(words / 200);

    setStats({ minutes, words });
  }, []);

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
