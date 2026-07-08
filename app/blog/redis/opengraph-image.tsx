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
          background: "linear-gradient(135deg, #0a0a0f 0%, #1c0a08 50%, #0a0a0f 100%)",
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
            width: 700,
            height: 700,
            background: "radial-gradient(circle, rgba(220,56,45,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Tag pill */}
        <div
          style={{
            display: "flex",
            padding: "10px 28px",
            background: "rgba(220,56,45,0.14)",
            border: "1px solid rgba(220,56,45,0.4)",
            borderRadius: 999,
            color: "#fca5a5",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 36,
          }}
        >
          System Design
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#f8fafc",
            textAlign: "center",
            lineHeight: 1.15,
            letterSpacing: "-1px",
            marginBottom: 24,
          }}
        >
          Redis Is Not Just a Cache
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            color: "#f87171",
            textAlign: "center",
            marginBottom: 36,
          }}
        >
          Architecture, Patterns, and Trade-offs Every Engineer Should Know
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 22,
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: 780,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          Single-threaded architecture · Caching · Rate limiting · Leaderboards · Locks · Pub/Sub
        </div>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 3,
            background: "linear-gradient(90deg, #dc382d, #f87171)",
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
          Byte<span style={{ color: "#60a5fa" }}>Wise</span>
          <span style={{ color: "#334155", fontWeight: 300 }}>·</span>
          <span style={{ color: "#64748b", fontWeight: 400, fontSize: 20 }}>
            By Zulfiqar Ali Mir
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
