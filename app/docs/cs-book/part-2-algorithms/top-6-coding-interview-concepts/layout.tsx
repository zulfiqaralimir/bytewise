import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

// Scopes Times New Roman headings to this page only.
// See .top-6-patterns-serif rules in app/globals.css.
export default function Top6PatternsLayout({ children }: LayoutProps) {
  return <div className="top-6-patterns-serif">{children}</div>;
}
