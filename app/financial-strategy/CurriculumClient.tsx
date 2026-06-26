"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const ACCENTS = ["#d97706", "#b45309", "#92400e"] as const;

export type ModuleEntry = {
  number: string;
  title: string;
  description: string;
  href: string | null;
};

export type PartEntry = {
  part: string;
  modules: ModuleEntry[];
};

type TrackKey = "a" | "b" | "c" | "all";

const TRACK_META: Record<TrackKey, { label: string; tag: string; modules: string; parts: string; description: string }> = {
  a: {
    label: "Track A — CFO Mastery",
    tag: "Modules 1–66",
    modules: "66",
    parts: "19 Parts",
    description: "For finance professionals targeting CFO, Group CFO, Finance Director, or VP Finance roles. Covers financial strategy, IFRS reporting, operations, risk, technology, and leadership. Localized to Pakistan and Gulf context.",
  },
  b: {
    label: "Track B — Quant & Hedge Fund",
    tag: "Modules 67–93",
    modules: "27",
    parts: "6 Parts",
    description: "For quantitative analysts, portfolio managers, risk managers, and fund CFOs. Covers stochastic calculus, derivatives pricing, algorithmic trading, machine learning for finance, fund operations, and investment management.",
  },
  c: {
    label: "Track C — Investment Banking",
    tag: "Modules 94–135",
    modules: "42",
    parts: "8 Parts",
    description: "For investment bankers, M&A advisors, ECM and DCM specialists, and restructuring practitioners. Covers the complete IB value chain from origination through execution — with Pakistan and Gulf deal examples throughout.",
  },
  all: {
    label: "All Tracks",
    tag: "Modules 1–135",
    modules: "135",
    parts: "33 Parts",
    description: "The complete Financial Mastery Platform — all three professional tracks in one view.",
  },
};

interface CurriculumClientProps {
  trackA: PartEntry[];
  trackB: PartEntry[];
  trackC: PartEntry[];
}

export function CurriculumClient({ trackA, trackB, trackC }: CurriculumClientProps) {
  const [track, setTrack] = useState<TrackKey>("a");

  useEffect(() => {
    const saved = localStorage.getItem("fs-track") as TrackKey | null;
    if (saved && ["a", "b", "c", "all"].includes(saved)) setTrack(saved);
  }, []);

  function selectTrack(t: TrackKey) {
    setTrack(t);
    localStorage.setItem("fs-track", t);
  }

  const curriculum =
    track === "a" ? trackA :
    track === "b" ? trackB :
    track === "c" ? trackC :
    [...trackA, ...trackB, ...trackC];

  const meta = TRACK_META[track];

  return (
    <>
      {/* Track selector */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {(["a", "b", "c", "all"] as TrackKey[]).map((t) => {
            const active = track === t;
            return (
              <button
                key={t}
                onClick={() => selectTrack(t)}
                className="text-xs font-bold px-4 py-2 rounded-full transition-all"
                style={
                  active
                    ? { background: "#d97706", color: "#fff", border: "1px solid #d97706" }
                    : { background: "transparent", color: "#b45309", border: "1px solid rgba(217,119,6,0.35)" }
                }
              >
                {t === "all" ? "All 135 Modules" : TRACK_META[t].label}
              </button>
            );
          })}
        </div>

        {/* Track description */}
        <div
          className="rounded-xl px-5 py-4"
          style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)" }}
        >
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-black uppercase tracking-widest" style={{ color: "#d97706" }}>
              {meta.tag}
            </span>
            <span className="text-xs text-slate-400">{meta.modules} modules · {meta.parts}</span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{meta.description}</p>
        </div>
      </div>

      {/* Curriculum */}
      {curriculum.map((part) => (
        <div key={part.part} className="mb-12">
          <div className="flex items-center gap-4 mb-5">
            <span
              className="text-xs font-black uppercase tracking-widest whitespace-nowrap"
              style={{ color: "#b45309" }}
            >
              {part.part}
            </span>
            <div className="flex-1 h-px" style={{ background: "#e5d9c0" }} />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {part.modules.map((mod, i) => {
              const acc = ACCENTS[i % 3];
              const cardContent = (
                <>
                  <div className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: acc }}>
                    {mod.number}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{mod.title}</h3>
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">{mod.description}</p>
                  {mod.href ? (
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(217,119,6,0.12)",
                        color: "#b45309",
                        border: "1px solid rgba(217,119,6,0.3)",
                      }}
                    >
                      Read Module →
                    </span>
                  ) : (
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(180,83,9,0.08)",
                        color: "#92400e",
                        border: "1px solid rgba(180,83,9,0.15)",
                      }}
                    >
                      Coming Soon
                    </span>
                  )}
                </>
              );

              return mod.href ? (
                <Link
                  key={mod.number}
                  href={mod.href}
                  className="rounded-xl border p-6 transition-all hover:shadow-md hover:border-amber-300 block"
                  style={{ borderColor: "#e5d9c0", background: "#fffdf7" }}
                >
                  {cardContent}
                </Link>
              ) : (
                <div
                  key={mod.number}
                  className="rounded-xl border p-6"
                  style={{ borderColor: "#e5d9c0", background: "#fffdf7" }}
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
