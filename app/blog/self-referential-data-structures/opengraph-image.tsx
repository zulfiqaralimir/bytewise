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
          background: "linear-gradient(135deg, #0f1a0a 0%, #17280f 50%, #0f1a0a 100%)",
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
            background: "radial-gradient(circle, rgba(101,163,13,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Tag pill */}
        <div
          style={{
            display: "flex",
            padding: "10px 28px",
            background: "rgba(101,163,13,0.14)",
            border: "1px solid rgba(101,163,13,0.4)",
            borderRadius: 999,
            color: "#bef264",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 36,
          }}
        >
          DSA
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            color: "#f7fee7",
            textAlign: "center",
            lineHeight: 1.15,
            letterSpacing: "-1px",
            marginBottom: 24,
          }}
        >
          Understanding Self-Referential
          <br />
          Data Structures
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 600,
            color: "#bef264",
            textAlign: "center",
            marginBottom: 36,
          }}
        >
          One idea, wearing different costumes
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 22,
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          Linked Lists · Trees · Graphs · Recursion · The Call Stack
        </div>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 3,
            background: "linear-gradient(90deg, #65a30d, #bef264)",
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
