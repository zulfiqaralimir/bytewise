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
          background: "linear-gradient(135deg, #0d0500 0%, #1a0a00 40%, #0f0600 100%)",
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
              "linear-gradient(rgba(251,146,60,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,0.04) 1px, transparent 1px)",
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
            background: "radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 70%)",
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
            background: "radial-gradient(circle, rgba(234,88,12,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Top pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 28px",
            background: "rgba(251,146,60,0.1)",
            border: "1px solid rgba(251,146,60,0.3)",
            borderRadius: 999,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#fb923c",
            }}
          />
          <span
            style={{
              color: "#fb923c",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            ByteWise · Part 14 · Overview
          </span>
        </div>

        {/* Section label */}
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
          Roadmap
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            color: "#fff7ed",
            textAlign: "center",
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: 24,
          }}
        >
          Claude Code
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 500,
            color: "#fdba74",
            textAlign: "center",
            marginBottom: 40,
            letterSpacing: "0.02em",
          }}
        >
          CLI Mastery · Claude API · Agents · MCP Servers
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
              background: "rgba(251,146,60,0.3)",
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #fb923c, #f97316)",
            }}
          />
          <div
            style={{
              width: 48,
              height: 1,
              background: "rgba(251,146,60,0.3)",
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
          {["Claude Code CLI", "Anthropic SDK", "Tool Use", "Streaming"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "6px 18px",
                background: "rgba(234,88,12,0.12)",
                border: "1px solid rgba(234,88,12,0.25)",
                borderRadius: 999,
                color: "#fdba74",
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
              color: "#fff7ed",
            }}
          >
            Byte<span style={{ color: "#fb923c" }}>Wise</span>
          </span>
          <span style={{ color: "#334155", fontSize: 20 }}>·</span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "#475569",
            }}
          >
            Mastering Claude Code
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
