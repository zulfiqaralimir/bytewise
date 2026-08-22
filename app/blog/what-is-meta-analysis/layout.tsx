import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

// Scopes serif (Times New Roman) headings to this post only.
// See .meta-analysis-serif rules in app/globals.css.
export default function MetaAnalysisLayout({ children }: LayoutProps) {
  return <div className="meta-analysis-serif">{children}</div>;
}
