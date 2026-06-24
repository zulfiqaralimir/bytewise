# Part 15 — Marketing Engineering

## Structure

Six chapters:
- **Chapter 1:** Foundations of Marketing Engineering
- **Chapter 2:** Brand & Positioning
- **Chapter 3:** Content & SEO Strategy
- **Chapter 4:** Growth & Funnel Design
- **Chapter 5:** Marketing Analytics
- **Chapter 6:** Paid Media & Campaigns

## File Path Pattern

```
app/docs/cs-book/part-15-marketing-engineering/
  overview/
    page.mdx
    opengraph-image.tsx
  chapter-{N}/
    {lesson-number}-{slug}/
      page.mdx
      opengraph-image.tsx
```

**Examples:**
- `chapter-1/1-1-what-is-marketing-engineering/page.mdx`
- `chapter-2/2-1-brand-positioning/page.mdx`

## Sidebar Registration

Every new page must be registered in:
`app/docs/cs-book/SidebarClient.tsx`

Under the `Part 15 — Marketing Engineering` entry.

## OG Image Visual Identity

- Background: deep dark purple `#050010 → #0d0024`
- Grid overlay: purple lines at 4% opacity
- Accent color: purple `#a855f7` (top pill, glow, branding)
- Secondary accent: violet `#7c3aed` (tags, bottom glow)
- Title: near-white `#faf5ff`, 88px, weight 900
- Subtitle: light purple `#c4b5fd`, 26px

**What changes per lesson:**
- Top pill: `ByteWise · Part 15 · Chapter {N}`
- Section label: `Chapter {N} · Lesson {X.Y}`
- Main title: the lesson name
- Subtitle: 3–4 key concepts separated by ` · `
- Tags: 4 key terms from the lesson

## Page Template

Use the same 12-section template as CLRS (defined in the root CLAUDE.md), adapted:
- Section 10 (Practice) focuses on exercises, frameworks, and real campaigns — not LeetCode
- Section 8 (ML/DS/FinOps) connects marketing concepts to data, analytics, and cost efficiency
- Keep the conversational tone — "Think of it like...", "The key insight:", "Simple takeaway:"

## Language Style

- **Level:** Smart non-specialist — founders, engineers, PMs entering marketing
- **Tone:** Conversational but precise — like a sharp marketing lead explaining to a technical colleague
- Use business and marketing examples (Airbnb, Notion, Stripe, Duolingo, etc.)
- Frame every concept in terms of systems and measurable outcomes
- Avoid buzzwords without explaining them first

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
Add Part 15 {chapter}.{lesson} — {Lesson Title}

{2-3 line description}

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```
