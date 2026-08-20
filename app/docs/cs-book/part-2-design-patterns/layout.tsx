import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

// Scopes serif (Times New Roman) headings to Part 2 — Design Patterns (LLD) only.
// See .lld-serif rules in app/globals.css.
export default function DesignPatternsLayout({ children }: LayoutProps) {
  return <div className="lld-serif">{children}</div>;
}
