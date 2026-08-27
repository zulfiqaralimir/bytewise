import { ReactNode } from "react";

// Yellow highlighter — marks a sentence worth re-reading on a later revision pass.
export function Revision({ children }: { children: ReactNode }) {
  return (
    <mark
      style={{
        backgroundColor: "#fef08a",
        color: "#1f2937",
        padding: "0 4px",
        borderRadius: "3px",
      }}
    >
      {children}
    </mark>
  );
}
