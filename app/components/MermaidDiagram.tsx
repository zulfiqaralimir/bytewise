"use client";

import { useEffect, useRef, useId } from "react";

interface MermaidDiagramProps {
  chart: string;
  title?: string;
}

export function MermaidDiagram({ chart, title }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    let cancelled = false;
    import("mermaid").then((mod) => {
      if (cancelled || !ref.current) return;
      const mermaid = mod.default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "neutral",
        fontFamily: "ui-monospace, monospace",
        fontSize: 13,
      });
      mermaid.render(`mermaid-${id}`, chart.trim()).then(({ svg }) => {
        if (!cancelled && ref.current) ref.current.innerHTML = svg;
      });
    });
    return () => { cancelled = true; };
  }, [chart, id]);

  return (
    <div className="my-6 rounded-lg border border-gray-200 overflow-hidden">
      {title && (
        <div className="bg-gray-100 text-gray-500 text-xs font-mono uppercase tracking-widest px-4 py-2 border-b border-gray-200">
          {title}
        </div>
      )}
      <div ref={ref} className="p-4 flex justify-center overflow-x-auto bg-white" />
    </div>
  );
}
