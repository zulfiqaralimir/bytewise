"use client";

export interface StrategyNode {
  id: string;
  label: string;
  children?: StrategyNode[];
}

interface StrategyMapProps {
  root: StrategyNode;
  title?: string;
}

const LINE = "rgba(180,83,9,0.65)";

function Node({ node, depth = 0 }: { node: StrategyNode; depth?: number }) {
  const hasChildren = node.children && node.children.length > 0;
  const isRoot = depth === 0;
  const isMid = depth === 1;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Node box */}
      <div
        style={{
          padding: isRoot ? "9px 22px" : "6px 14px",
          borderRadius: 8,
          border: `1px solid ${isRoot ? "#f59e0b" : isMid ? "#d97706" : "#b45309"}`,
          background: isRoot
            ? "rgba(245,158,11,0.16)"
            : isMid
            ? "rgba(217,119,6,0.1)"
            : "rgba(180,83,9,0.08)",
          color: isRoot ? "#fcd34d" : "#fbbf24",
          fontWeight: isRoot ? 800 : 600,
          fontSize: isRoot ? 15 : 13,
          textAlign: "center",
          whiteSpace: "nowrap",
          letterSpacing: isRoot ? "0.03em" : "0",
          boxShadow: isRoot ? "0 0 16px rgba(245,158,11,0.12)" : "none",
        }}
      >
        {node.label}
      </div>

      {/* Vertical stem down */}
      {hasChildren && (
        <div style={{ width: 1, height: 22, background: LINE }} />
      )}

      {/* Children row */}
      {hasChildren && (
        <div className="fs-map-row" style={{ display: "flex", gap: 20 }}>
          {node.children!.map((child) => (
            <div key={child.id} className="fs-map-branch">
              <Node node={child} depth={depth + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function StrategyMap({ root, title }: StrategyMapProps) {
  return (
    <>
      <style>{`
        .fs-map-row { position: relative; }

        .fs-map-branch {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 22px;
          position: relative;
        }

        /* Horizontal connector across siblings */
        .fs-map-branch:not(:only-child)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: ${LINE};
        }
        .fs-map-branch:first-child:not(:only-child)::before { left: 50%; }
        .fs-map-branch:last-child:not(:only-child)::before  { right: 50%; }
        .fs-map-branch:only-child::before { display: none; }

        /* Vertical drop from horizontal connector to node */
        .fs-map-branch::after {
          content: '';
          position: absolute;
          top: 0;
          left: calc(50% - 0.5px);
          width: 1px;
          height: 22px;
          background: ${LINE};
        }
      `}</style>

      <div
        style={{
          background: "#080d1a",
          border: "1px solid rgba(217,119,6,0.22)",
          borderRadius: 12,
          padding: "28px 36px",
          overflowX: "auto",
          margin: "24px 0",
        }}
      >
        {title && (
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#92400e",
              textAlign: "center",
              marginBottom: 24,
              marginTop: 0,
            }}
          >
            {title}
          </p>
        )}
        <div style={{ display: "flex", justifyContent: "center", minWidth: "max-content" }}>
          <Node node={root} />
        </div>
      </div>
    </>
  );
}
