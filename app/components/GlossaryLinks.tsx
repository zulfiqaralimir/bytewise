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

// Amber inline — user-suggested term appearing in chapter text, links back to glossary
export function UserConcept({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} style={{ color: "#b45309", fontWeight: 700, textDecoration: "underline" }}>
      {children}
    </Link>
  );
}

// Amber — terms suggested by the user (not auto-compiled from chapters)
export function UserTerm({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h3 id={id} style={{ color: "#b45309" }}>
      {children}
      <span style={{ fontSize: "0.6em", fontWeight: 500, color: "#d97706", marginLeft: "0.6em", verticalAlign: "middle", letterSpacing: "0.05em" }}>
        YOUR TERM
      </span>
    </h3>
  );
}
