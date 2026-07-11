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
          background: "linear-gradient(135deg, #020c1b 0%, #0a1628 60%, #061020 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top glow */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 400,
            background: "radial-gradient(ellipse, rgba(16,185,129,0.18) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Bottom glow */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: "10%",
            width: 400,
            height: 300,
            background: "radial-gradient(ellipse, rgba(20,184,166,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Top pill */}
        <div
          style={{
            display: "flex",
            padding: "10px 28px",
            background: "rgba(16,185,129,0.12)",
            border: "1px solid rgba(16,185,129,0.4)",
            borderRadius: 999,
            color: "#10b981",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Economic &amp; Finance Models · Chapter 1
        </div>

        {/* Section label */}
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#6ee7b7",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Section 1.3
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 900,
            color: "#f0f9ff",
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            marginBottom: 24,
            maxWidth: 1000,
          }}
        >
          From Data to Policy Insights
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            color: "#6ee7b7",
            textAlign: "center",
            maxWidth: 860,
            lineHeight: 1.5,
            marginBottom: 40,
          }}
        >
          Pakistan SAM Multiplier Analysis · Built in Claude Code
        </div>

        {/* Tags row */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginBottom: 40,
          }}
        >
          {["Leontief Multipliers", "5 Policy Scenarios", "Interactive Dashboard", "Pakistan 2013-19"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 20px",
                background: "rgba(20,184,166,0.12)",
                border: "1px solid rgba(20,184,166,0.3)",
                borderRadius: 8,
                color: "#14b8a6",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 2,
            background: "linear-gradient(90deg, #10b981, #14b8a6)",
            borderRadius: 2,
            marginBottom: 28,
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
            color: "#f0f9ff",
          }}
        >
          Byte<span style={{ color: "#10b981" }}>Wise</span>
          <span style={{ color: "#334155", fontWeight: 300 }}>·</span>
          <span style={{ color: "#94a3b8", fontWeight: 400, fontSize: 20 }}>
            By Zulfiqar Ali Mir
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
