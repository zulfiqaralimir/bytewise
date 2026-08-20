import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const tinosRegular = fs.readFileSync(
    path.join(process.cwd(), "public/fonts/Tinos-Regular.ttf")
  );
  const tinosBold = fs.readFileSync(
    path.join(process.cwd(), "public/fonts/Tinos-Bold.ttf")
  );

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
          background: "linear-gradient(135deg, #f7f2e7 0%, #efe6d3 50%, #e6d9bd 100%)",
          fontFamily: "Tinos",
          padding: "56px 80px",
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
              "linear-gradient(rgba(120,53,15,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(120,53,15,0.05) 1px, transparent 1px)",
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
            background: "radial-gradient(circle, rgba(180,83,9,0.14) 0%, transparent 70%)",
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
            background: "radial-gradient(circle, rgba(30,58,138,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Part label pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 32px",
            background: "rgba(180,83,9,0.09)",
            border: "1px solid rgba(180,83,9,0.35)",
            borderRadius: 999,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#b45309",
            }}
          />
          <span
            style={{
              color: "#92400e",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Part 2 · Design Patterns (LLD)
          </span>
        </div>

        {/* Section label */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#78716c",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Chapter 1 · Section 3
        </div>

        {/* Hero row: car illustration + title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
            marginBottom: 22,
          }}
        >
          {/* Simple car illustration — ties to the driving analogy */}
          <svg width="170" height="110" viewBox="0 0 170 110">
            <ellipse cx="85" cy="98" rx="78" ry="8" fill="rgba(28,25,23,0.10)" />
            <path
              d="M18,72 L34,30 Q42,16 60,16 L112,16 Q130,16 138,30 L152,72 Z"
              fill="#1e3a8a"
            />
            <rect x="12" y="66" width="146" height="26" rx="10" fill="#1c1917" />
            <path d="M46,32 L58,20 Q62,18 68,18 L84,18 L84,32 Z" fill="#f7f2e7" />
            <path d="M92,18 L108,18 Q114,18 118,20 L128,32 L92,32 Z" fill="#f7f2e7" />
            <circle cx="48" cy="92" r="19" fill="#1c1917" />
            <circle cx="48" cy="92" r="8" fill="#b45309" />
            <circle cx="122" cy="92" r="19" fill="#1c1917" />
            <circle cx="122" cy="92" r="8" fill="#b45309" />
          </svg>

          {/* Main title */}
          <div
            style={{
              fontSize: 118,
              fontWeight: 700,
              color: "#1c1917",
              textAlign: "left",
              lineHeight: 1.02,
              letterSpacing: "-2px",
            }}
          >
            Abstraction
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 34,
            fontWeight: 400,
            fontStyle: "italic",
            color: "#1e3a8a",
            textAlign: "center",
            marginBottom: 36,
            letterSpacing: "0.01em",
          }}
        >
          The Driving-a-Car Analogy · Interfaces · Python vs C++
        </div>

        {/* Accent divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div style={{ width: 48, height: 1, background: "rgba(120,53,15,0.35)" }} />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #b45309, #1e3a8a)",
            }}
          />
          <div style={{ width: 48, height: 1, background: "rgba(120,53,15,0.35)" }} />
        </div>

        {/* Tags row */}
        <div style={{ display: "flex", gap: 14, marginBottom: 40 }}>
          {["Abstraction", "Interfaces", "Python", "C++"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 22px",
                background: "rgba(30,58,138,0.07)",
                border: "1px solid rgba(30,58,138,0.28)",
                borderRadius: 999,
                color: "#1e3a8a",
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Branding */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 28, fontWeight: 700, color: "#1c1917" }}>
            Byte<span style={{ color: "#b45309" }}>Wise</span>
          </span>
          <span style={{ color: "#a8a29e", fontSize: 22 }}>·</span>
          <span style={{ fontSize: 22, fontWeight: 400, color: "#57534e" }}>Design Patterns (LLD)</span>
          <span style={{ color: "#a8a29e", fontSize: 22 }}>·</span>
          <span style={{ fontSize: 22, fontWeight: 400, color: "#57534e" }}>By Zulfiqar Ali Mir</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Tinos", data: tinosRegular, weight: 400, style: "normal" },
        { name: "Tinos", data: tinosBold, weight: 700, style: "normal" },
      ],
    }
  );
}
