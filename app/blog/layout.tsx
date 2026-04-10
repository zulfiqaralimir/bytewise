import { ReactNode } from "react";
import Link from "next/link";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Top nav */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-black text-xl text-gray-900">
            Byte<span className="text-blue-500">Wise</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/docs/cs-book" className="hover:text-gray-900 transition-colors">CS Book</Link>
            <Link href="/blog" className="hover:text-gray-900 transition-colors text-blue-600">Blog</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-gray prose-lg max-w-none">
          {children}
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-slate-50 mt-20">
        <div className="max-w-3xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
          <p className="font-semibold text-gray-700 mb-1">ByteWise</p>
          <p>By Zulfiqar Ali Mir · Programming Concepts Explained from First Principles</p>
        </div>
      </footer>
    </div>
  );
}
