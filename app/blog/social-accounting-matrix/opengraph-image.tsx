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
          background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%)",
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
            background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Tag pill */}
        <div
          style={{
            display: "flex",
            padding: "10px 28px",
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.3)",
            borderRadius: 999,
            color: "#2563eb",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 36,
          }}
        >
          Economics
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#0f172a",
            textAlign: "center",
            lineHeight: 1.15,
            letterSpacing: "-1px",
            marginBottom: 28,
          }}
        >
          Social Accounting Matrix
        </div>

        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: "#2563eb",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          A Complete Guide
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#64748b",
            textAlign: "center",
            maxWidth: 780,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          From First Principles to Pakistan's Economy · Pakistan SAM 2007-08
        </div>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 3,
            background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
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
          Byte<span style={{ color: "#3b82f6" }}>Wise</span>
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
