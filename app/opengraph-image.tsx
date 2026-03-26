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
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Glow circle */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 900,
            letterSpacing: "-2px",
            color: "white",
          }}
        >
          Byte
          <span style={{ color: "#60a5fa" }}>Wise</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 30,
            color: "#94a3b8",
            marginTop: 12,
            letterSpacing: "0.5px",
          }}
        >
          Programming Concepts from First Principles
        </div>

        {/* Pill badge */}
        <div
          style={{
            display: "flex",
            marginTop: 44,
            padding: "12px 32px",
            background: "rgba(59,130,246,0.15)",
            border: "1px solid rgba(96,165,250,0.35)",
            borderRadius: 999,
            color: "#93c5fd",
            fontSize: 20,
            gap: 24,
          }}
        >
          <span>20 In-Depth Articles</span>
          <span style={{ color: "#334155" }}>·</span>
          <span>Free</span>
          <span style={{ color: "#334155" }}>·</span>
          <span>Open</span>
        </div>

        {/* Author */}
        <div
          style={{
            marginTop: 36,
            color: "#475569",
            fontSize: 20,
          }}
        >
          By Zulfiqar Ali Mir
        </div>
      </div>
    ),
    { ...size }
  );
}
