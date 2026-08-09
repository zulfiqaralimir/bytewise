@AGENTS.md
@app/docs/cs-book/part-10-introduction-to-algorithms/CLAUDE.md

# ByteWise Project Context

## Diagrams & Images in Chapters (all tracks, going forward)

Add visuals where they clarify a concept faster than prose — not on every page. Three tools, pick per case:

| Need | Tool | Import |
|------|------|--------|
| Flowchart, sequence diagram, tree, state machine, ER diagram | `<MermaidDiagram>` | `import { MermaidDiagram } from "@/app/components/MermaidDiagram";` |
| Custom vector illustration (memory layout, pointer diagram, anything Mermaid can't shape) | `<Figure>` wrapping inline `<svg>` | `import { Figure } from "@/app/components/Figure";` |
| Photo / screenshot | `<Figure src=... />` | `import { Figure } from "@/app/components/Figure";` |

**Mermaid** — see `app/docs/cs-book/part-7-ai-and-llms/openclaw-production-design/page.mdx` for real examples (architecture, sequence, ER diagrams). Usage:
```mdx
<MermaidDiagram title="Message Flow" chart={`
sequenceDiagram
  participant A
  participant B
  A->>B: request
`} />
```

**Figure (SVG)**:
```mdx
<Figure title="Array Memory Layout" caption="Contiguous allocation — index i lives at base + i*size">
  <svg width="480" height="120">...</svg>
</Figure>
```

**Figure (photo/screenshot)** — store files under `public/images/cs-book/<part-slug>/<chapter-slug>/name.png`, reference by absolute path:
```mdx
<Figure src="/images/cs-book/part-10-introduction-to-algorithms/chapter-2/insertion-sort-trace.png" alt="Insertion sort trace" width={800} height={450} caption="..." />
```

Notes:
- No dark mode on this site — style SVGs for a light background only (matches `MermaidDiagram`'s white body / gray-100 header bar).
- This is a going-forward convention only — do not retrofit already-published pages unless separately asked.
- Diagrams inside triple-backtick ` ```text ` fences cannot get colored `<span>` highlighting or interactive components — JSX doesn't render inside code fences.

## Blockchain Developer Learning Track (Black Iron Quantum AI)

Content lives in two places — CS Book (with sidebar/ArticleNav) and Blog (cross-post):

| Type | Path pattern |
|------|-------------|
| CS Book chapter | `app/docs/cs-book/part-8-blockchain/<slug>/page.mdx` |
| Blog cross-post | `app/blog/<slug>/page.mdx` |
| Blog OG image | `app/blog/<slug>/opengraph-image.tsx` |

Register new chapters in:
- `app/docs/cs-book/SidebarClient.tsx` — `chapters` array under `"Part 8 — Blockchain"`
- `app/blog/page.tsx` — `posts` array (newest first)

Chapter `ArticleNav` wiring: pass `prev` and `next` props with `{ title, href }`.

---

## Blockchain Glossary

**Page:** `app/docs/cs-book/part-8-blockchain/blockchain-glossary/page.mdx`

**Three-colour link system** — all components exported from `app/components/GlossaryLinks.tsx`:

| Colour | Component | Use |
|--------|-----------|-----|
| Teal `#0d9488` | `<TermLink href="#anchor">` | Cross-reference between glossary terms (in-page anchor) |
| Violet `#7c3aed` | `<ChapterLink href="/docs/...">` | Back-link to source chapter page |
| Amber `#b45309` | `<UserTerm id="slug">` | Glossary heading for a user-suggested term |
| Amber `#b45309` | `<UserConcept href="/docs/.../blockchain-glossary#slug">` | Inline highlight of a user-suggested term inside chapter text, links to glossary |

**Glossary imports:**
```mdx
import { TermLink, ChapterLink, UserTerm } from "@/app/components/GlossaryLinks";
```

**Chapter imports (when UserConcept needed):**
```mdx
import { UserConcept } from "@/app/components/GlossaryLinks";
```

**Workflow for adding a user-suggested term:**
1. In the glossary, use `<UserTerm id="slug">Term Name</UserTerm>` instead of `### Term Name`
2. In any chapter where the term appears, wrap the word with `<UserConcept href="/docs/cs-book/part-8-blockchain/blockchain-glossary#slug">word</UserConcept>`
3. Add a legend entry if a new colour is introduced

**Term structure in glossary:**
- Each term is a `### heading` (auto-generates anchor ID from heading text)
- Definition uses `<TermLink>` for cross-refs and plain text otherwise
- Ends with `*→ <ChapterLink href="...">Chapter X: Title</ChapterLink>*`
- Glossary note at bottom: *"This glossary grows with each chapter..."*
