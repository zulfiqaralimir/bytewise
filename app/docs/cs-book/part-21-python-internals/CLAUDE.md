# Part 21 — Python Internals

## Structure

Four Parts, each its own "era" of understanding — grouped this way (not a flat
chapter list) because the material genuinely clusters: mechanics, then internals,
then the language features built on those internals, then history and philosophy.

- **Part I — How Python Actually Runs**
  - Ch 1: Source to Bytecode (tokenizing, parsing, AST, compilation)
  - Ch 2: The Interpreter Loop (stack-based VM, `ceval.c`)
  - Ch 3: Functions, Loops, and Control Flow at the Bytecode Level
- **Part II — The Object Model**
  - Ch 4: Everything Is an Object (`PyObject`, type pointers)
  - Ch 5: Reference Counting and Memory (`id()`, garbage collection)
  - Ch 6: Mutability and Immutability (why it exists, what it affects)
  - Ch 7: Name Binding vs Copying
- **Part III — Language Features Built on the Model**
  - Ch 8: Duck Typing
  - Ch 9: The Data Model (dunder methods)
  - Ch 10: Scope and Closures (LEGB)
  - Ch 11: Iterators and Generators
  - Ch 12: Decorators
  - Ch 13: The GIL
- **Part IV — History and Philosophy**
  - Ch 14: Why Guido Built Python (ABC, the design motivations)
  - Ch 15: PEPs and Governance (BDFL → Steering Council)
  - Ch 16: The Zen of Python — Design Choices Explained

Read Part I and II in order (II leans on I's bytecode mechanics). Part III's
chapters can be read in any order once I and II are done. Part IV stands alone.

## Workflow — One Chapter at a Time

Mirrors the CLRS workflow (see root `CLAUDE.md`):
1. User supplies/teaches the chapter's material conversationally.
2. Draft the page content in chat first — get explicit approval before writing
   or committing any file (same rule as Part 19 Agent Factory; this user prefers
   review-before-write for book content, not just-in-time file creation).
3. Write the ByteWise page.
4. Add OG image.
5. Register in `app/docs/cs-book/SidebarClient.tsx` under `Part 21 — Python Internals`.
6. Update ArticleNav prev/next on adjacent pages.
7. Commit and push.

**Never skip ahead. One chapter per session unless the user requests otherwise.**

## File Path Pattern

```
app/docs/cs-book/part-21-python-internals/
  overview/
    page.mdx
    opengraph-image.tsx
  part-1-how-python-actually-runs/
    01-source-to-bytecode/
      page.mdx
      opengraph-image.tsx
    02-the-interpreter-loop/
    03-functions-loops-control-flow/
  part-2-the-object-model/
    04-everything-is-an-object/
    05-reference-counting-and-memory/
    06-mutability-and-immutability/
    07-name-binding-vs-copying/
  part-3-language-features/
    08-duck-typing/
    09-the-data-model/
    10-scope-and-closures/
    11-iterators-and-generators/
    12-decorators/
    13-the-gil/
  part-4-history-and-philosophy/
    14-why-guido-built-python/
    15-peps-and-governance/
    16-the-zen-of-python/
```

Chapter folders are numbered globally (01–16) across the whole Part, not
per-sub-Part, so the sequence stays unambiguous no matter which sub-Part a
chapter lives under.

## Sidebar Registration

Every new chapter page must be registered in `app/docs/cs-book/SidebarClient.tsx`
under the `Part 21 — Python Internals` entry, inside the matching Part I–IV
sub-group. Sub-groups with no written chapters yet keep an empty `items: []`
array (same convention as Part 18 — Foundations of LLMs) rather than being
omitted — this keeps the full roadmap visible in the sidebar as it fills in.

## Page Template

Not yet fixed — decide per the first chapter actually drafted, then document
it here so subsequent chapters stay consistent. Likely shape, given the
subject matter (CPython internals + language history), leans toward:
Concept → Why It Works This Way → CPython Source Reference (file/function
names, e.g. `Python/ceval.c`, `Objects/object.c`) → Code Example → Diagram →
Real-World Implication — but confirm with the user before locking this in.

## Language Style

- **Level:** Working Python developer who has never looked under the hood —
  no prior compilers/systems background assumed.
- **Tone:** Conversational but precise — "Think of it like...", "The key
  insight:", explain every term the first time it appears.
- Prefer worked examples (actual `dis.dis()` output, actual CPython source
  snippets) over abstract description.

## OG Image Visual Identity

- Background: deep violet-black `#0f0a1e → #1a0f2e`
- Grid overlay: violet lines at 4% opacity
- Accent color: violet `#a78bfa` (top pill, glow, branding)
- Secondary accent: amber `#fbbf24` (tags, bottom glow) — nods to Python's own
  blue/yellow branding without copying it directly
- Title: near-white `#f5f3ff`, 88px, weight 900
- Subtitle: light violet `#c4b5fd`, 26px

**What changes per chapter:**
- Top pill: `ByteWise · Part 21 · Part {I–IV}`
- Section label: `Chapter {N}`
- Main title: the chapter name
- Subtitle: 3–4 key concepts from the chapter separated by ` · `
- Tags: 4 key terms from the chapter

**Base template:** Copy from `overview/opengraph-image.tsx` and update the
5 items above.

## ArticleNav Wiring

Every page ends with:
```mdx
<ArticleNav
  prev={{ title: "...", href: "..." }}
  next={{ title: "...", href: "..." }}
/>
```
Update both directions when a new page is added.

## Commit Message Format

```
Add Part 21 Ch.{N} — {Chapter Title}

{2-3 line description of what was added}

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
```
