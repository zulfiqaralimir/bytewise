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
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
          fontFamily: "sans-serif",
          padding: "60px 80px",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Tag pill */}
        <div
          style={{
            display: "flex",
            padding: "10px 28px",
            background: "rgba(239,68,68,0.15)",
            border: "1px solid rgba(239,68,68,0.4)",
            borderRadius: 999,
            color: "#fca5a5",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 36,
          }}
        >
          Agentic AI Papers
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 62,
            fontWeight: 900,
            color: "#f8fafc",
            textAlign: "center",
            lineHeight: 1.15,
            letterSpacing: "-1px",
            marginBottom: 24,
          }}
        >
          Agents of Chaos
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#fca5a5",
            textAlign: "center",
            marginBottom: 36,
          }}
        >
          A Warning About Autonomous AI Systems
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 21,
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          Harvard · MIT · Stanford · CMU — what happens when AI agents get real tools
        </div>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 3,
            background: "linear-gradient(90deg, #ef4444, #f97316)",
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
            color: "#f8fafc",
          }}
        >
          Byte<span style={{ color: "#3b82f6" }}>Wise</span>
          <span style={{ color: "#475569", fontWeight: 300 }}>·</span>
          <span style={{ color: "#94a3b8", fontWeight: 400, fontSize: 20 }}>
            By Zulfiqar Ali Mir
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
