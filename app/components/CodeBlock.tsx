"use client";

import { ReactNode, useRef, useState } from "react";

interface CodeBlockProps {
  language?: string;
  children: ReactNode;
}

export function CodeBlock({ language = "code", children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    const text = ref.current?.textContent ?? "";
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative my-6 rounded-lg overflow-hidden border border-gray-200">
      <div className="flex items-center justify-between bg-[#ececf1] px-4 py-2">
        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{language}</span>
        <button
          onClick={handleCopy}
          className="text-xs px-3 py-1 rounded bg-white border border-gray-300 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
        >
          {copied ? "✓ Copied!" : "Copy"}
        </button>
      </div>
      <pre ref={ref} className="bg-[#f7f7f8] text-[#111827] p-6 overflow-x-auto text-sm leading-relaxed m-0">
        <code>{children}</code>
      </pre>
    </div>
  );
}
