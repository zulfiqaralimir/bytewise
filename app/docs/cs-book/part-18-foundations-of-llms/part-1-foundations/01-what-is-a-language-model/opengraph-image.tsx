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
          background: "linear-gradient(135deg, #1a0a2e 0%, #2d0a4e 45%, #150726 100%)",
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
              "linear-gradient(rgba(232,121,249,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,121,249,0.04) 1px, transparent 1px)",
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
            background: "radial-gradient(circle, rgba(232,121,249,0.14) 0%, transparent 70%)",
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
            background: "radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)",
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
            background: "rgba(232,121,249,0.1)",
            border: "1px solid rgba(232,121,249,0.3)",
            borderRadius: 999,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#e879f9",
            }}
          />
          <span
            style={{
              color: "#e879f9",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Foundations of LLMs · Part I
          </span>
        </div>

        {/* Chapter label */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#8b7a9e",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Chapter 1
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "#faf5ff",
            textAlign: "center",
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: 24,
          }}
        >
          What Is a Language Model?
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 500,
            color: "#d8b4fe",
            textAlign: "center",
            marginBottom: 40,
            letterSpacing: "0.02em",
          }}
        >
          Next-Token Prediction · Tokens & Sequences · Autoregressive Generation
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
              background: "rgba(232,121,249,0.3)",
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #e879f9, #a855f7)",
            }}
          />
          <div
            style={{
              width: 48,
              height: 1,
              background: "rgba(232,121,249,0.3)",
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
          {["Tokens", "Probability", "Autoregressive", "Pretraining"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "6px 18px",
                background: "rgba(168,85,247,0.12)",
                border: "1px solid rgba(168,85,247,0.25)",
                borderRadius: 999,
                color: "#c4b5fd",
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
              color: "#faf5ff",
            }}
          >
            Byte<span style={{ color: "#e879f9" }}>Wise</span>
          </span>
          <span style={{ color: "#3f2a52", fontSize: 20 }}>·</span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "#8b7a9e",
            }}
          >
            Foundations of LLMs
          </span>
          <span style={{ color: "#3f2a52", fontSize: 20 }}>·</span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "#8b7a9e",
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
