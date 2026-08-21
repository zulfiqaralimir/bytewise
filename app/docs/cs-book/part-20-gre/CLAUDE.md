# Part 20 — GRE

## Structure

Three chapters, mirroring the official GRE test sections:
- **Chapter 1:** Verbal Reasoning
- **Chapter 2:** Quantitative Reasoning
- **Chapter 3:** Analytical Writing (AWA)

Plus a **Last Chapter — Reading Vocabulary**, currently Chapter 4. This chapter must
always be the final chapter in Part 20, no matter what other chapters get added later.
If a new chapter is ever inserted, add it *before* Reading Vocabulary in both the
sidebar and the folder numbering, and renumber Reading Vocabulary's `chapter-{N}`
folder and sidebar label so its number stays the highest in the part.

## File Path Pattern

```
app/docs/cs-book/part-20-gre/
  overview/
    page.mdx
    opengraph-image.tsx
  chapter-{N}/
    {lesson-number}-{slug}/
      page.mdx
      opengraph-image.tsx
```

**Examples:**
- `chapter-1/1-1-sentence-equivalence/page.mdx`
- `chapter-2/2-1-quantitative-comparison/page.mdx`
- `chapter-3/3-1-issue-essay-structure/page.mdx`

## Sidebar Registration

Every new page must be registered in:
`app/docs/cs-book/SidebarClient.tsx`

Under the `Part 20 — GRE` entry.

## OG Image Visual Identity

- Background: deep emerald-black `#020f0d → #001a14`
- Grid overlay: emerald lines at 4% opacity
- Accent color: emerald `#10b981` (top pill, glow, branding)
- Secondary accent: teal `#0d9488` (tags, bottom glow)
- Title: near-white `#ecfdf5`, 88px, weight 900
- Subtitle: light emerald `#6ee7b7`, 26px

**What changes per lesson:**
- Top pill: `ByteWise · Part 20 · Chapter {N}`
- Section label: `Chapter {N} · Lesson {X.Y}`
- Main title: the lesson name
- Subtitle: 3–4 key concepts separated by ` · `
- Tags: 4 key terms from the lesson

## Page Template

Use the same 12-section template as CLRS (defined in the root CLAUDE.md), adapted:
- Section 10 (Practice) focuses on official GRE-style practice questions, not LeetCode
- Section 8 (ML/DS/FinOps) can be skipped or replaced with a "Test-Day Strategy" section if it doesn't fit the topic naturally
- Keep the conversational tone — "Think of it like...", "The key insight:", "Simple takeaway:"

## Language Style

- **Level:** Smart non-specialist — any test-taker, no prior GRE prep assumed
- **Tone:** Conversational but precise — like a sharp tutor explaining strategy, not just rules
- Explain every vocabulary word, math concept, or reasoning pattern the first time it appears
- Use worked examples before abstract rules
- Frame every concept in terms of "what the test is actually checking for," not just mechanics

## ArticleNav Wiring

Every page ends with:
```mdx
<ArticleNav
  prev={{ title: "...", href: "..." }}
  next={{ title: "...", href: "..." }}
/>
```

Update both directions when a new page is added.

## Workflow

1. Teach the lesson conversationally
2. Write the page using the template
3. Add OG image
4. Register in sidebar
5. Update prev/next nav on adjacent pages
6. Commit

## Commit Message Format

```
Add Part 20 {chapter}.{lesson} — {Lesson Title}

{2-3 line description}

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
```
