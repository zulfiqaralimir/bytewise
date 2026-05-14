import Link from "next/link";
import { ReactNode } from "react";

// Teal — within-glossary cross-references (term → term)
export function TermLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} style={{ color: "#0d9488", textDecoration: "underline" }}>
      {children}
    </a>
  );
}

// Violet — chapter back-references (→ Chapter page)
export function ChapterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} style={{ color: "#7c3aed", textDecoration: "underline" }}>
      {children}
    </Link>
  );
}
