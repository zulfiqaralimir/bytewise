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
          background: "linear-gradient(135deg, #f0fdf9 0%, #ecfdf5 50%, #f8fafc 100%)",
          fontFamily: "sans-serif",
          padding: "60px 80px",
        }}
      >
        {/* Glow circle */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(16,185,129,0.14) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Tag pill */}
        <div
          style={{
            display: "flex",
            padding: "10px 28px",
            background: "rgba(16,185,129,0.1)",
            border: "1px solid rgba(16,185,129,0.3)",
            borderRadius: 999,
            color: "#059669",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 36,
          }}
        >
          Economics · SAM Series
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            color: "#0f172a",
            textAlign: "center",
            lineHeight: 1.15,
            letterSpacing: "-1px",
            marginBottom: 28,
            maxWidth: 980,
          }}
        >
          SAM Multiplier Analysis Pipeline
        </div>

        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            color: "#059669",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          Pakistan 2013-19 · Section 1.2
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#64748b",
            textAlign: "center",
            maxWidth: 820,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          Data Parsing · Leontief Type I &amp; II Multipliers · Policy Shock Scenarios · Interactive Dashboard
        </div>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 3,
            background: "linear-gradient(90deg, #10b981, #34d399)",
            borderRadius: 2,
            marginBottom: 32,
          }}
        />

        {/* Branding */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
            fontWeight: 900,
            color: "#0f172a",
          }}
        >
          Byte<span style={{ color: "#10b981" }}>Wise</span>
          <span style={{ color: "#cbd5e1", fontWeight: 300 }}>·</span>
          <span style={{ color: "#64748b", fontWeight: 400, fontSize: 20 }}>
            By Zulfiqar Ali Mir
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
