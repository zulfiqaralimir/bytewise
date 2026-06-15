# Part 14 — Mastering Claude Code

## Structure

Two chapters:
- **Chapter 1:** Claude Code CLI (lessons 1.0–1.9)
- **Chapter 2:** Claude API & Anthropic SDK (lessons 2.0–2.9)

## File Path Pattern

```
app/docs/cs-book/part-14-mastering-claude-code/
  chapter-1/
    {lesson-number}-{slug}/
      page.mdx
      opengraph-image.tsx
  chapter-2/
    {lesson-number}-{slug}/
      page.mdx
      opengraph-image.tsx
```

**Examples:**
- `chapter-1/1-0-overview-and-installation/page.mdx`
- `chapter-2/2-2-tool-use/page.mdx`

## Sidebar Registration

Every new page must be registered in:
`app/docs/cs-book/SidebarClient.tsx`

Under the `Part 14 — Mastering Claude Code` entry.

## OG Image Visual Identity

- Background: warm dark `#0d0500 → #1a0a00`
- Grid overlay: orange lines at 4% opacity
- Accent color: orange `#fb923c` (top pill, glow, branding)
- Secondary accent: deep orange `#ea580c` (tags, bottom glow)
- Title: cream `#fff7ed`, 88px, weight 900
- Subtitle: peach `#fdba74`, 26px

**What changes per lesson:**
- Top pill: `ByteWise · Part 14 · Chapter {N}`
- Section label: `Lesson {X.Y}`
- Main title: the lesson name
- Subtitle: 3–4 key concepts separated by ` · `
- Tags: 4 key terms from the lesson

## Page Template

Use the same 12-section template as CLRS (defined in the root CLAUDE.md), adapted as follows:
- Section 10 (Practice) focuses on hands-on CLI commands or API calls, not LeetCode
- Section 8 (ML/DS/FinOps) connects the lesson's concept to real AI pipeline use cases
- Keep the conversational tone — "Think of it like...", "The key insight:", "Simple takeaway:"

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
Add Part 14 {lesson number} — {Lesson Title}

{2-3 line description}

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```
