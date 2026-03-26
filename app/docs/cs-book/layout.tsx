import { ReactNode } from "react";
import { SidebarClient } from "./SidebarClient";

interface LayoutProps {
  children: ReactNode;
}

// Server Component layout — client interactivity is in SidebarClient
export default function BookLayout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-white">
      <SidebarClient />
      <main className="flex-1 min-w-0 pt-14 md:pt-0">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="prose">{children}</div>
        </div>
      </main>
    </div>
  );
}
