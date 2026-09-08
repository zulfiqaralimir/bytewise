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
          background: "linear-gradient(135deg, #0a0e14 0%, #111827 40%, #080c12 100%)",
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
              "linear-gradient(rgba(234,179,8,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.04) 1px, transparent 1px)",
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
            background: "radial-gradient(circle, rgba(234,179,8,0.14) 0%, transparent 70%)",
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
            background: "radial-gradient(circle, rgba(45,212,191,0.12) 0%, transparent 70%)",
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
            background: "rgba(234,179,8,0.1)",
            border: "1px solid rgba(234,179,8,0.3)",
            borderRadius: 999,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#eab308",
            }}
          />
          <span
            style={{
              color: "#eab308",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            ByteWise · Part 22 · Problem 1
          </span>
        </div>

        {/* Section label */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#64748b",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Problem 1
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "#f8fafc",
            textAlign: "center",
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: 24,
          }}
        >
          Multiples of 3 or 5
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 500,
            color: "#fde68a",
            textAlign: "center",
            marginBottom: 40,
            letterSpacing: "0.02em",
          }}
        >
          Modulo Arithmetic · For Loops · Time Complexity
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
              background: "rgba(234,179,8,0.3)",
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #eab308, #2dd4bf)",
            }}
          />
          <div
            style={{
              width: 48,
              height: 1,
              background: "rgba(234,179,8,0.3)",
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
          {["Modulo Operator", "range()", "O(n) Time", "O(1) Space"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "6px 18px",
                background: "rgba(45,212,191,0.1)",
                border: "1px solid rgba(45,212,191,0.25)",
                borderRadius: 999,
                color: "#99f6e4",
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
              color: "#f8fafc",
            }}
          >
            Byte<span style={{ color: "#eab308" }}>Wise</span>
          </span>
          <span style={{ color: "#334155", fontSize: 20 }}>·</span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "#64748b",
            }}
          >
            Project Euler
          </span>
          <span style={{ color: "#334155", fontSize: 20 }}>·</span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "#64748b",
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
