import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

// Scopes serif (Times New Roman) headings, colored by level, to this post only.
// See .fama-booth-serif rules in app/globals.css.
export default function FamaBoothLayout({ children }: LayoutProps) {
  return <div className="fama-booth-serif">{children}</div>;
}
