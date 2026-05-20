import { ReactNode } from "react";
import { SidebarClient } from "./SidebarClient";
import { ReadingTime } from "@/app/components/ReadingTime";

interface LayoutProps {
  children: ReactNode;
}

// Server Component layout — client interactivity is in SidebarClient
export default function BookLayout({ children }: LayoutProps) {
  return (
    <div className="bg-white">
      <SidebarClient />
      <main className="md:ml-72 h-screen overflow-y-auto pt-14 md:pt-0">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="prose">
            <ReadingTime />
            <div id="article-body">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
