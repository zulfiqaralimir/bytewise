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
          background: "linear-gradient(135deg, #020c1b 0%, #0a1628 40%, #060d1f 100%)",
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
              "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
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
            background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)",
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
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
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
            background: "rgba(56,189,248,0.1)",
            border: "1px solid rgba(56,189,248,0.3)",
            borderRadius: 999,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#38bdf8",
            }}
          />
          <span
            style={{
              color: "#38bdf8",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Kurose &amp; Ross · Part 13 · Chapter 1
          </span>
        </div>

        {/* Section number */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#475569",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Section 1.4 · Part 4E
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#f0f9ff",
            textAlign: "center",
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: 24,
          }}
        >
          End-to-End Delay
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
          Multi-Hop Communication · Nodal Delay Accumulation
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
          <div
            style={{
              width: 48,
              height: 1,
              background: "rgba(56,189,248,0.3)",
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #38bdf8, #818cf8)",
            }}
          />
          <div
            style={{
              width: 48,
              height: 1,
              background: "rgba(56,189,248,0.3)",
            }}
          />
        </div>

        {/* Tags row */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginBottom: 44,
          }}
        >
          {["End-to-End Delay", "Multi-Hop", "Nodal Delay", "Latency"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "6px 18px",
                background: "rgba(99,102,241,0.12)",
                border: "1px solid rgba(99,102,241,0.25)",
                borderRadius: 999,
                color: "#a5b4fc",
                fontSize: 17,
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Branding */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span
            style={{
              fontSize: 26,
              fontWeight: 900,
              color: "#f0f9ff",
            }}
          >
            Byte<span style={{ color: "#38bdf8" }}>Wise</span>
          </span>
          <span style={{ color: "#334155", fontSize: 20 }}>·</span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "#475569",
            }}
          >
            Computer Networking
          </span>
          <span style={{ color: "#334155", fontSize: 20 }}>·</span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "#475569",
            }}
          >
            By Zulfiqar Ali Mir
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
