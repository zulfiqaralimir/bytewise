# CLRS Book Project — Claude Instructions

## Book Reference
**Introduction to Algorithms, 4th Edition**
Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein

---

## Workflow — One Section at a Time

1. Teach the section conversationally
2. Write the ByteWise page using the 9-section template below
3. Push to GitHub
4. Update progress in memory file: `C:\Users\ZULFIQAR ALI MIR\.claude\projects\F--P-Drive-bytewise\memory\clrs-progress.md`
5. Move to next section

**Never skip ahead. One section per session unless user requests otherwise.**

---

## File Path Pattern

```
app/docs/cs-book/part-10-introduction-to-algorithms/
  chapter-{N}/
    {section-number}-{section-slug}/
      page.mdx
```

**Examples:**
- `chapter-1/1-1-algorithms/page.mdx`
- `chapter-1/1-2-algorithms-as-a-technology/page.mdx`
- `chapter-2/2-1-insertion-sort/page.mdx`

---

## Sidebar Registration

Every new page must be registered in:
`app/docs/cs-book/SidebarClient.tsx`

Under the `Part 10 — Introduction to Algorithms (CLRS)` entry.
Also update the chapter count (currently 54) each time a new page is added.

---

## Language Style

- **Level:** Upper undergraduate / MBA / beginner PhD
- **Audience:** Smart non-specialist — no assumed background knowledge
- **Tone:** Conversational but advanced — like explaining to a sharp friend
- **Phrases to use:** "Think of it like...", "The key insight:", "Simple takeaway:", "Why this matters:"
- **Phrases to avoid:** academic jargon, dense multi-clause sentences, passive voice
- Explain every technical term the first time it appears
- Use analogies before definitions — not after
- **DO NOT** use journal or academic paper language

---

## Page Template — 10 Sections (Mandatory for Every Page)

Use headings and bullets throughout. Prose only inside Real-World Example stories.

### 1. What
- One-line definition (blockquote from CLRS where possible)
- Bold label + bullet breakdown of key terms
- "Think of it like..." analogy in bullet form

### 2. Why
- Why this concept matters
- What breaks without it
- Motivation before mechanics

### 3. How
- The actual mechanics of the concept or algorithm
- Sub-headings for each major idea
- Bullets + comparison tables where helpful
- Step-by-step where the algorithm has steps

### 4. Where You Will See This
- Bullet list of 5–8 real-world domains
- Each bullet: domain name + one-line explanation

### 5. Real-World Example
- One specific company, product, or system
- Tell it as a short story
- Connect it back to the section concepts explicitly
- End with a blockquote:
  > **Why this algorithm?** [one sentence on why this specific algorithm was the right choice]

### 6. HLD & LLD Connections
Two sub-sections, each with a table:

**In System Design (HLD)**
| System Component | Algorithm / Concept at Work |
|---|---|

**In Low-Level Design (LLD)**
| Data Structure / Class | Algorithm / Concept at Work |
|---|---|

End with a blockquote summarizing the HLD vs LLD distinction.

### 7. Applications in Networking and Security
Two sub-sections:

**In Networking:**
- How the concept or algorithm appears in network protocols, routing, packet processing, or infrastructure
- Include a table where multiple protocols/algorithms can be compared
- At least 3 concrete examples with protocol names

**In Security:**
- How it appears in cryptography, authentication, firewalls, intrusion detection, or vulnerability analysis
- Include a table where relevant (algorithm comparisons, speed benchmarks)
- At least 3 concrete examples with real algorithm/protocol names
- End with a blockquote:
  > **Simple takeaway:** [one sentence connecting networking/security back to the section's core concept]

### 8. Applications in Machine Learning, Deep Learning, Data Science, Data Engineering, and FinOps
Five sub-sections, each showing how the section's concepts appear in that field:

**In Machine Learning:**
- How the section's algorithm or concept appears in model training, inference, or feature engineering
- At least 2–3 concrete examples with named algorithms or tools (e.g., gradient descent, kNN, Adam)

**In Deep Learning:**
- How it appears in neural network training, architecture choices, or GPU-level optimization
- At least 2 concrete examples (e.g., backpropagation, attention, CUDA kernels)

**In Data Science:**
- How it shows up in EDA, pandas/numpy workflows, or model selection
- At least 2 concrete examples (e.g., groupby, sklearn algorithm options)

**In Data Engineering:**
- How it appears in distributed pipelines, Spark, dbt, or storage formats
- Include a comparison table where join types or job strategies can be contrasted
- At least 3 concrete examples with named tools or operations

**In FinOps:**
- How algorithm efficiency directly affects cloud cost
- Include a table mapping inefficiency → root cause → billing impact
- End with a blockquote:
  > **Simple takeaway:** [one sentence connecting ML/data/cloud back to the section's core concept]

### 9. The Big Picture
- Bullet list of 4–6 key takeaways from the section
- End with a blockquote:
  > **Simple takeaway:** [one sentence that captures the entire section]

### 10. Practice — LeetCode Problems
Table format:

| # | Problem | Difficulty | Why It Fits |
|---|---|---|---|

- 🟢 Easy / 🟡 Medium / 🔴 Hard
- Only include problems that directly reinforce concepts from this section
- "Why It Fits" column must explain the specific connection — not just "it uses this algorithm"
- End with a "How to use these" bullet list + a closing blockquote

### 11. Edge Cases to Always Think About
Two sub-sections:

**Universal Checklist** (include on every page):
- Arrays/Lists: empty, one item, all same, already sorted, reverse sorted, answer at start/end
- Numbers: zero, negative, largest integer (overflow risk)
- Search: target missing, duplicates, multiple valid answers
- Strings: empty, one character, all same, spaces/special characters

**Section-Specific Edge Cases:**
- Edge cases unique to the algorithm or concept in this section
- Explain why each one matters
- End with a blockquote:
  > **Simple rule:** [one habit or rule for catching edge cases]

### 12. My Notes
Three sub-sections for spaced-repetition revision — added to every page, left empty until the user fills them in:

```mdx
## My Notes

### Notes — Reading 1

*(Your notes from the first reading go here.)*

---

### Notes — Reading 2

*(Your notes from the second reading go here.)*

---

### Notes — Reading 3

*(Your notes from the third reading go here.)*
```

- Leave all three sections as placeholder text when first creating the page
- When the user dictates notes, update only the relevant Reading section
- Notes go after Edge Cases and before ArticleNav

---

## OG Image (Thumbnail)

Every page must have an `opengraph-image.tsx` alongside `page.mdx`.

**File location:**
```
chapter-{N}/{section-slug}/opengraph-image.tsx
```

**Visual identity for CLRS series:**
- Background: deep navy `#020c1b → #0a1628`
- Grid overlay: subtle cyan lines at 4% opacity
- Accent color: cyan `#38bdf8` (top pill, glow, branding)
- Secondary accent: indigo `#818cf8` (tags, bottom glow)
- Title: white `#f0f9ff`, 88px, weight 900
- Subtitle: light blue `#7dd3fc`, 26px

**What changes per section:**
- Top pill text: `CLRS · Part {N} · Chapter {N}`
- Section number label: `Section {X.Y}`
- Main title: the section name
- Subtitle: 3–4 key concepts from that section separated by ` · `
- Tags row: 4 key terms from the section

**Base template:** Copy from `chapter-1/1-1-algorithms/opengraph-image.tsx` and update the 5 items above.

---

## ArticleNav Wiring

Every page ends with:
```mdx
<ArticleNav
  prev={{ title: "...", href: "..." }}
  next={{ title: "...", href: "..." }}
/>
```

Use `null` for prev/next only if the section has no predecessor or successor yet.
Update both directions when a new page is added (update the previous page's `next` and the next page's `prev`).

---

## Progress Tracking

Current progress is always stored in:
`C:\Users\ZULFIQAR ALI MIR\.claude\projects\F--P-Drive-bytewise\memory\clrs-progress.md`

At the start of every session:
1. Read the memory file
2. Tell the user exactly where they are and what comes next
3. Do not ask the user to remember — Claude is responsible for this

---

## Commit Message Format

```
Add CLRS {section number} — {Section Title}

{2-3 line description of what was added and why}

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```
