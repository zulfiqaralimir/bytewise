# Part 22 — Project Euler

## Structure

No fixed chapter grouping (unlike CLRS's Part/Chapter/Section or Python
Internals' four eras) — Project Euler's own problem numbering is the spine.
Problems are added one at a time, roughly in increasing problem-number order,
under a single "Problems" chapter group in the sidebar.

## Workflow — One Problem at a Time

1. User picks the next Project Euler problem number.
2. Draft the page content in chat first — get explicit approval before writing
   or committing any file (same review-before-write preference as Part 19
   Agent Factory and Part 21 Python Internals).
3. Write the ByteWise page.
4. Add OG image.
5. Register in `app/docs/cs-book/SidebarClient.tsx` under
   `Part 22 — Project Euler` → `Problems`.
6. Update ArticleNav prev/next on adjacent pages.
7. Commit and push.

**Never skip ahead. One problem per session unless the user requests otherwise.**

## File Path Pattern

```
app/docs/cs-book/part-22-project-euler/
  overview/
    page.mdx
    opengraph-image.tsx
  problem-{N}-{slug}/
    page.mdx
    opengraph-image.tsx
```

Example: `problem-1-multiples-of-3-or-5/`.

## Page Template

Not yet fixed — decide per the first problem actually drafted, then document
it here for consistency. Likely shape, given the subject (math + optimization):
Problem Statement → Naive/Brute-Force Approach → Why It Doesn't Scale → The
Key Insight → Optimized Solution (with code) → Complexity Comparison → What
This Teaches. Confirm with the user before locking this in.

## Sidebar Registration

Every new problem page must be registered in
`app/docs/cs-book/SidebarClient.tsx` under `Part 22 — Project Euler` →
`Problems`.

## OG Image Visual Identity

- Background: near-black slate `#0a0e14 → #111827`
- Grid overlay: gold lines at 4% opacity
- Accent color: gold `#eab308` (top pill, glow, branding — nods to Project
  Euler's own puzzle/medal framing)
- Secondary accent: teal `#2dd4bf` (tags, bottom glow)
- Title: near-white `#f8fafc`, 88px, weight 900
- Subtitle: light gold `#fde68a`, 26px

**What changes per problem:**
- Top pill: `ByteWise · Part 22 · Problem {N}`
- Section label: `Problem {N}`
- Main title: the problem's short name
- Subtitle: 3–4 key concepts/techniques used, separated by ` · `
- Tags: 4 key terms from the problem

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
Add Project Euler #{N} — {Problem Title}

{2-3 line description of the approach and key insight}

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
```
