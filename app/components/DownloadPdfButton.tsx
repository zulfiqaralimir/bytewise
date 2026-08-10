"use client";

import { useState } from "react";

export function DownloadPdfButton({
  label = "Download as PDF",
  filename,
}: {
  label?: string;
  filename?: string;
}) {
  const [busy, setBusy] = useState(false);

  const handleDownload = async () => {
    const el = document.getElementById("article-body");
    if (!el) return;

    setBusy(true);
    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas-pro"),
        import("jspdf"),
      ]);

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        ignoreElements: (node: Element) => node.classList.contains("no-print"),
      });

      const name =
        filename ??
        (document.title.split(" — ")[0] || "bytewise-article")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-+|-+$)/g, "");

      const pdf = new jsPDF({ unit: "pt", format: "a4", orientation: "portrait" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const pxPerPdfPt = canvas.width / imgWidth;
      const pageHeightPx = pageHeight * pxPerPdfPt;

      let renderedHeightPx = 0;
      let pageIndex = 0;

      while (renderedHeightPx < canvas.height) {
        const sliceHeightPx = Math.min(pageHeightPx, canvas.height - renderedHeightPx);

        const pageCanvas = document.createElement("canvas");
        pageCanvas.width = canvas.width;
        pageCanvas.height = sliceHeightPx;
        const ctx = pageCanvas.getContext("2d");
        if (!ctx) break;
        ctx.drawImage(
          canvas,
          0,
          renderedHeightPx,
          canvas.width,
          sliceHeightPx,
          0,
          0,
          canvas.width,
          sliceHeightPx
        );

        const pageImg = pageCanvas.toDataURL("image/jpeg", 0.95);
        if (pageIndex > 0) pdf.addPage();
        pdf.addImage(pageImg, "JPEG", 0, 0, imgWidth, sliceHeightPx / pxPerPdfPt);

        renderedHeightPx += sliceHeightPx;
        pageIndex += 1;
      }

      pdf.save(`${name}.pdf`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={busy}
      className="no-print flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold transition-colors mb-8 disabled:opacity-60 disabled:cursor-wait"
      aria-label={label}
    >
      <span aria-hidden="true">⬇</span>
      {busy ? "Generating PDF…" : label}
    </button>
  );
}
