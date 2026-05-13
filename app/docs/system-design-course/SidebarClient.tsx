"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const classes = [
  { title: "Class 01 — Why Do We Need Distributed Systems?", href: "/docs/system-design-course/class-01-why-distributed-systems" },
  { title: "Class 02", href: "/docs/system-design-course/class-02" },
  { title: "Class 03", href: "/docs/system-design-course/class-03" },
  { title: "Class 04", href: "/docs/system-design-course/class-04" },
  { title: "Class 05", href: "/docs/system-design-course/class-05" },
  { title: "Class 06", href: "/docs/system-design-course/class-06" },
  { title: "Class 07", href: "/docs/system-design-course/class-07" },
  { title: "Class 08", href: "/docs/system-design-course/class-08" },
  { title: "Class 09", href: "/docs/system-design-course/class-09" },
  { title: "Class 10", href: "/docs/system-design-course/class-10" },
  { title: "Class 11", href: "/docs/system-design-course/class-11" },
  { title: "Class 12", href: "/docs/system-design-course/class-12" },
  { title: "Class 13", href: "/docs/system-design-course/class-13" },
  { title: "Class 14", href: "/docs/system-design-course/class-14" },
  { title: "Class 15", href: "/docs/system-design-course/class-15" },
  { title: "Class 16", href: "/docs/system-design-course/class-16" },
];

const TOTAL = classes.length;

export function SidebarClient() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [readCount, setReadCount] = useState(0);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bw-sd-read") ?? "[]") as string[];
    setReadCount(stored.length);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);

    if (pathname !== "/docs/system-design-course") {
      const stored = JSON.parse(localStorage.getItem("bw-sd-read") ?? "[]") as string[];
      if (!stored.includes(pathname)) {
        stored.push(pathname);
        localStorage.setItem("bw-sd-read", JSON.stringify(stored));
        setReadCount(stored.length);
      }
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <>
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-violet-500 z-50 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />

      <header className="md:hidden fixed top-1 left-0 right-0 z-40 bg-white border-b border-gray-200 flex items-center justify-between px-4 py-3">
        <Link href="/docs/system-design-course" className="font-black text-lg text-gray-900">
          Byte<span className="text-blue-500">Wise</span>
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </header>

      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 bottom-0 w-72 bg-white text-gray-900 border-r border-gray-200 z-40 flex flex-col transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex`}
      >
        <div className="p-6 border-b border-gray-200">
          <Link href="/" className="block">
            <div className="font-black text-2xl text-gray-900">
              Byte<span className="text-blue-500">Wise</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">System Design by Dhirendra Sinha</div>
          </Link>
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Reading progress</span>
              <span>{readCount}/{TOTAL} classes</span>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all"
                style={{ width: `${(readCount / TOTAL) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <Link
            href="/docs/system-design-course"
            className={`block px-6 py-2 text-sm font-semibold mb-2 transition-colors ${
              pathname === "/docs/system-design-course" ? "text-blue-600" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Course Overview
          </Link>

          <div className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-gray-400">
            Classes
          </div>
          <ul>
            {classes.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-6 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-600 border-r-2 border-blue-500"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-xs text-gray-400 w-4 flex-shrink-0">{idx + 1}.</span>
                    <span className="flex-1">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200 space-y-2">
          <Link
            href="/docs/cs-book"
            className="block text-xs text-blue-500 hover:text-blue-700 transition-colors text-center"
          >
            ← ByteWise CS Book
          </Link>
          <div className="text-xs text-gray-400 text-center">By Zulfiqar Ali Mir</div>
        </div>
      </aside>
    </>
  );
}
