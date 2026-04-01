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
          justifyContent: "center",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
          fontFamily: "sans-serif",
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
            background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Brand */}
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#60a5fa", marginBottom: 32 }}>
          ByteWise — Part 6: Machine Learning
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 900,
            color: "white",
            lineHeight: 1.15,
            letterSpacing: "-1px",
            marginBottom: 32,
          }}
        >
          Decision Trees and Classification Trees
        </div>

        {/* Description */}
        <div style={{ display: "flex", fontSize: 28, color: "#94a3b8", lineHeight: 1.5 }}>
          Gini impurity, building trees from raw data, overfitting, pruning, and cross validation — from first principles.
        </div>

        {/* Author */}
        <div style={{ display: "flex", marginTop: 48, fontSize: 22, color: "#475569" }}>
          By Zulfiqar Ali Mir · bytewise-one.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
