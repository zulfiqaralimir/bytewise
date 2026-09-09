import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #06120a 0%, #0a1f14 50%, #06120a 100%)",
          fontFamily: "sans-serif",
          padding: "56px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid backdrop */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(52,211,153,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 780,
            height: 780,
            background: "radial-gradient(circle, rgba(16,185,129,0.22) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Tag pill */}
        <div
          style={{
            display: "flex",
            padding: "12px 32px",
            background: "rgba(16,185,129,0.14)",
            border: "1px solid rgba(16,185,129,0.4)",
            borderRadius: 999,
            color: "#34d399",
            fontSize: 26,
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Finance
        </div>

        {/* Hero row: Excel icon + growth-chart/balance-check icon, then title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            marginBottom: 28,
          }}
        >
          {/* Vector illustration: Excel file icon */}
          <svg width="92" height="128" viewBox="0 0 100 130" style={{ flexShrink: 0 }}>
            <rect x="6" y="4" width="88" height="122" rx="12" fill="#eafff5" />
            <path d="M66,4 L94,32 L66,32 Z" fill="#bbf7d0" />
            <rect x="6" y="4" width="88" height="34" rx="12" fill="#107c41" />
            <rect x="6" y="24" width="88" height="14" fill="#107c41" />
            <path
              d="M34,12 L58,30 M58,12 L34,30"
              stroke="#ffffff"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <line x1="18" y1="56" x2="82" y2="56" stroke="rgba(16,124,65,0.3)" strokeWidth="3" />
            <line x1="18" y1="76" x2="82" y2="76" stroke="rgba(16,124,65,0.3)" strokeWidth="3" />
            <line x1="18" y1="96" x2="82" y2="96" stroke="rgba(16,124,65,0.3)" strokeWidth="3" />
            <line x1="18" y1="112" x2="82" y2="112" stroke="rgba(16,124,65,0.3)" strokeWidth="3" />
            <line x1="42" y1="46" x2="42" y2="120" stroke="rgba(16,124,65,0.3)" strokeWidth="3" />
          </svg>

          {/* Vector illustration: ascending bar chart + balance-check badge */}
          <svg width="170" height="134" viewBox="0 0 190 150" style={{ flexShrink: 0 }}>
            <rect x="0" y="6" width="190" height="138" rx="16" fill="rgba(16,185,129,0.08)" />
            <line x1="10" y1="50" x2="180" y2="50" stroke="rgba(52,211,153,0.18)" strokeWidth="1" />
            <line x1="10" y1="94" x2="180" y2="94" stroke="rgba(52,211,153,0.18)" strokeWidth="1" />

            <rect x="26" y="94" width="26" height="38" rx="5" fill="#6ee7b7" />
            <rect x="82" y="66" width="26" height="66" rx="5" fill="#34d399" />
            <rect x="138" y="30" width="26" height="102" rx="5" fill="#10b981" />

            <path
              d="M39,94 L95,66 L151,30"
              stroke="#ecfdf5"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="39" cy="94" r="5" fill="#ecfdf5" />
            <circle cx="95" cy="66" r="5" fill="#ecfdf5" />
            <circle cx="151" cy="30" r="5" fill="#ecfdf5" />

            <circle cx="158" cy="118" r="26" fill="#022c22" stroke="#34d399" strokeWidth="3" />
            <path
              d="M147,118 L154,126 L170,107"
              stroke="#6ee7b7"
              strokeWidth="4.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Title */}
          <div
            style={{
              fontSize: 62,
              fontWeight: 900,
              color: "#f0fdf4",
              textAlign: "left",
              lineHeight: 1.08,
              letterSpacing: "-1.5px",
              maxWidth: 660,
            }}
          >
            How to Build a 3-Year Financial Model
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 34,
            fontWeight: 800,
            color: "#34d399",
            textAlign: "center",
            marginBottom: 34,
          }}
        >
          ZulfiQode / Black Iron Quantum AI Case Study
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: "#a7f3d0",
            textAlign: "center",
            maxWidth: 880,
            lineHeight: 1.5,
            marginBottom: 44,
          }}
        >
          Assumptions · Income Statement · Balance Sheet · Cashflow Statement
        </div>

        {/* Divider */}
        <div
          style={{
            width: 90,
            height: 4,
            background: "linear-gradient(90deg, #10b981, #34d399)",
            borderRadius: 2,
            marginBottom: 30,
          }}
        />

        {/* Branding */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 26,
            fontWeight: 900,
            color: "#f8fafc",
          }}
        >
          Byte<span style={{ color: "#60a5fa" }}>Wise</span>
          <span style={{ color: "#334155", fontWeight: 300 }}>·</span>
          <span style={{ color: "#94a3b8", fontWeight: 700, fontSize: 22 }}>
            By Zulfiqar Ali Mir
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
