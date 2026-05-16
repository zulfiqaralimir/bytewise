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
          background: "#0a0a0f",
          fontFamily: "sans-serif",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Warm desk-light glow — top center */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: "38%",
            width: 600,
            height: 500,
            background:
              "radial-gradient(ellipse, rgba(251,191,36,0.07) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* ── LEFT PANEL (typography) ── */}
        <div
          style={{
            width: "58%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "52px 0 52px 64px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Tag pill */}
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 22px",
              background: "rgba(251,191,36,0.12)",
              border: "1px solid rgba(251,191,36,0.35)",
              borderRadius: 999,
              color: "#FBBF24",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Developer Productivity
          </div>

          {/* Title — line 1 */}
          <div
            style={{
              fontSize: 58,
              fontWeight: 900,
              color: "#f8fafc",
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              marginBottom: 4,
            }}
          >
            WHY YOUR LAPTOP
          </div>

          {/* Title — line 2 with red highlight on "MIGHT BE" */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 4,
            }}
          >
            <div
              style={{
                display: "flex",
                background: "#DC2626",
                padding: "2px 14px 4px",
                borderRadius: 6,
                fontSize: 58,
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
              }}
            >
              MIGHT BE
            </div>
            <div
              style={{
                fontSize: 58,
                fontWeight: 900,
                color: "#f8fafc",
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
              }}
            >
              MAKING
            </div>
          </div>

          {/* Title — line 3 */}
          <div
            style={{
              fontSize: 58,
              fontWeight: 900,
              color: "#f8fafc",
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              marginBottom: 36,
            }}
          >
            YOU WORSE AT CODING
          </div>

          {/* Tagline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 40,
            }}
          >
            <div
              style={{
                width: 36,
                height: 3,
                background: "#FBBF24",
                borderRadius: 2,
              }}
            />
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#FBBF24",
                letterSpacing: "0.06em",
              }}
            >
              Think First · Code Second
            </div>
          </div>

          {/* Branding */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 20,
              fontWeight: 900,
              color: "#f8fafc",
            }}
          >
            Byte<span style={{ color: "#60a5fa" }}>Wise</span>
            <span style={{ color: "#334155", fontWeight: 300, fontSize: 22 }}>
              ·
            </span>
            <span style={{ color: "#64748b", fontWeight: 400, fontSize: 18 }}>
              By Zulfiqar Ali Mir
            </span>
          </div>
        </div>

        {/* Vertical divider */}
        <div
          style={{
            width: 1,
            background:
              "linear-gradient(180deg, transparent, rgba(251,191,36,0.25) 40%, rgba(251,191,36,0.25) 60%, transparent)",
            alignSelf: "stretch",
            marginTop: 40,
            marginBottom: 40,
          }}
        />

        {/* ── RIGHT PANEL (notebook) ── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "40px 48px 40px 36px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Red X — distractions badge */}
          <div
            style={{
              display: "flex",
              alignSelf: "flex-end",
              alignItems: "center",
              gap: 8,
              background: "rgba(220,38,38,0.12)",
              border: "1px solid rgba(220,38,38,0.35)",
              borderRadius: 8,
              padding: "6px 14px",
              marginBottom: 18,
            }}
          >
            <div
              style={{
                fontSize: 20,
                fontWeight: 900,
                color: "#EF4444",
              }}
            >
              ✕
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, color: "#EF4444" }}>
                Distractions
              </div>
              <div style={{ fontSize: 11, color: "#94a3b8" }}>
                Context Switching · Mental Fatigue
              </div>
            </div>
          </div>

          {/* Notebook card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#13131a",
              border: "1px solid rgba(251,191,36,0.2)",
              borderRadius: 14,
              padding: "22px 24px",
              gap: 14,
            }}
          >
            {/* Notebook header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 6,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#FBBF24",
                }}
              />
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                  color: "#FBBF24",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Debug Notebook
              </div>
            </div>

            {/* Rows */}
            {[
              { label: "Known Facts", color: "#60a5fa" },
              { label: "Hypothesis", color: "#a78bfa" },
              { label: "Tests Performed", color: "#34d399" },
              { label: "Next Steps", color: "#FBBF24" },
            ].map(({ label, color }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  paddingBottom: 10,
                }}
              >
                <div
                  style={{
                    width: 3,
                    height: 22,
                    background: color,
                    borderRadius: 2,
                    flexShrink: 0,
                  }}
                />
                <div
                  style={{ fontSize: 15, fontWeight: 700, color: "#cbd5e1" }}
                >
                  {label}
                </div>
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 1,
                  }}
                />
              </div>
            ))}

            {/* Reflection box */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                background: "rgba(251,191,36,0.05)",
                border: "1px solid rgba(251,191,36,0.15)",
                borderRadius: 8,
                padding: "12px 14px",
                gap: 6,
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#FBBF24",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                Reflection
              </div>
              {[
                "What did I learn?",
                "What confused me?",
                "What should I explore next?",
              ].map((q) => (
                <div
                  key={q}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#FBBF24",
                      flexShrink: 0,
                    }}
                  />
                  <div
                    style={{ fontSize: 13, color: "#94a3b8", fontStyle: "italic" }}
                  >
                    {q}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Watermark */}
          <div
            style={{
              display: "flex",
              alignSelf: "flex-end",
              marginTop: 14,
              fontSize: 12,
              fontWeight: 600,
              color: "rgba(148,163,184,0.35)",
              letterSpacing: "0.06em",
            }}
          >
            Black Iron Quantum AI
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
