import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

// Scopes Times New Roman headings + Arial code blocks to Blind-75 Solutions.
// See .blind75-solutions-serif rules in app/globals.css.
export default function BlindSevenFiveMiscLayout({ children }: LayoutProps) {
  return <div className="blind75-solutions-serif">{children}</div>;
}
