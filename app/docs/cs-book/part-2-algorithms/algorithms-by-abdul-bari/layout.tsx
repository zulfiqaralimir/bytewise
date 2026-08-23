import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

// Scopes serif (Times New Roman) headings to Algorithms by Abdul Bari only.
// See .abdul-bari-serif rules in app/globals.css.
export default function AbdulBariLayout({ children }: LayoutProps) {
  return <div className="abdul-bari-serif">{children}</div>;
}
