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
              "linear-gradient(rgba(245,158,11,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.05) 1px, transparent 1px)",
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
            background: "radial-gradient(circle, rgba(245,158,11,0.16) 0%, transparent 70%)",
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

        {/* Book label pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 28px",
            background: "rgba(245,158,11,0.1)",
            border: "1px solid rgba(245,158,11,0.35)",
            borderRadius: 999,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#f59e0b",
            }}
          />
          <span
            style={{
              color: "#f59e0b",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Agent Factory · Chapter 1
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
          Crash Course
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 900,
            color: "#f8fafc",
            textAlign: "center",
            lineHeight: 1.08,
            letterSpacing: "-2px",
            marginBottom: 24,
          }}
        >
          Claude Code and OpenCode
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
          15 Concepts · 80% of Real Use · Context Engineering
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
          <div style={{ width: 48, height: 1, background: "rgba(245,158,11,0.3)" }} />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #f59e0b, #38bdf8)",
            }}
          />
          <div style={{ width: 48, height: 1, background: "rgba(245,158,11,0.3)" }} />
        </div>

        {/* Tags row */}
        <div style={{ display: "flex", gap: 12, marginBottom: 44 }}>
          {["Coding Agents", "Context Window", "Rules Files", "Subagents"].map((tag) => (
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
            Byte<span style={{ color: "#f59e0b" }}>Wise</span>
          </span>
          <span style={{ color: "#334155", fontSize: 20 }}>·</span>
          <span style={{ fontSize: 20, fontWeight: 400, color: "#7d8aa3" }}>Agent Factory</span>
          <span style={{ color: "#334155", fontSize: 20 }}>·</span>
          <span style={{ fontSize: 20, fontWeight: 400, color: "#7d8aa3" }}>By Zulfiqar Ali Mir</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
