import { ReactNode } from "react";
import { FinancialStrategySidebar } from "./SidebarClient";

interface LayoutProps {
  children: ReactNode;
}

export default function FinancialStrategyLayout({ children }: LayoutProps) {
  return (
    <div style={{ background: "#f8f5ef", minHeight: "100vh" }}>
      <FinancialStrategySidebar />
      <main className="md:ml-72 min-h-screen pt-14 md:pt-0">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="prose prose-slate prose-lg max-w-none">{children}</div>
        </div>
      </main>
    </div>
  );
}
