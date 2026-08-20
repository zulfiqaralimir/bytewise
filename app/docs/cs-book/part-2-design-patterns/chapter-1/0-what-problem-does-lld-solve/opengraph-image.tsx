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
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #0b1220 100%)",
          fontFamily: "sans-serif",
          padding: "60px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Top-left glow */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Bottom-right glow */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(56,189,248,0.14) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Part label pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 28px",
            background: "rgba(139,92,246,0.1)",
            border: "1px solid rgba(139,92,246,0.35)",
            borderRadius: 999,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#8b5cf6",
            }}
          />
          <span
            style={{
              color: "#8b5cf6",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Part 2 · Design Patterns (LLD)
          </span>
        </div>

        {/* Section label */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#7d8aa3",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Chapter 1 · Section 0
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 900,
            color: "#f8fafc",
            textAlign: "center",
            lineHeight: 1.08,
            letterSpacing: "-2px",
            marginBottom: 24,
          }}
        >
          What Problem Is LLD Even Solving?
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 500,
            color: "#7dd3fc",
            textAlign: "center",
            marginBottom: 40,
            letterSpacing: "0.02em",
          }}
        >
          Open/Closed Principle · Change Cost · Design Thinking
        </div>

        {/* Accent divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div style={{ width: 48, height: 1, background: "rgba(139,92,246,0.3)" }} />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #8b5cf6, #38bdf8)",
            }}
          />
          <div style={{ width: 48, height: 1, background: "rgba(139,92,246,0.3)" }} />
        </div>

        {/* Tags row */}
        <div style={{ display: "flex", gap: 12, marginBottom: 44 }}>
          {["Low-Level Design", "SOLID", "Extensibility", "Order Systems"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "6px 18px",
                background: "rgba(56,189,248,0.1)",
                border: "1px solid rgba(56,189,248,0.25)",
                borderRadius: 999,
                color: "#bae6fd",
                fontSize: 17,
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Branding */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 26, fontWeight: 900, color: "#f8fafc" }}>
            Byte<span style={{ color: "#8b5cf6" }}>Wise</span>
          </span>
          <span style={{ color: "#334155", fontSize: 20 }}>·</span>
          <span style={{ fontSize: 20, fontWeight: 400, color: "#7d8aa3" }}>Design Patterns (LLD)</span>
          <span style={{ color: "#334155", fontSize: 20 }}>·</span>
          <span style={{ fontSize: 20, fontWeight: 400, color: "#7d8aa3" }}>By Zulfiqar Ali Mir</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
