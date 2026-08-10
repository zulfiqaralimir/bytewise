"use client";

export function DownloadPdfButton({ label = "Download as PDF" }: { label?: string }) {
  return (
    <button
      onClick={() => window.print()}
      className="no-print flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold transition-colors mb-8"
      aria-label={label}
    >
      <span aria-hidden="true">⬇</span>
      {label}
    </button>
  );
}
