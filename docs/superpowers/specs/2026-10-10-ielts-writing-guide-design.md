# IELTS Writing Guide — Design Spec

Date: 2026-10-10

## Goal
A personal study/reference web app for IELTS Academic Writing, aimed at the highest band score. Two sections: **Task 1** (data description: comparison and data language) and **Task 2** (all essay types). Explanations in **Turkish**, all example sentences/model texts in **English**.

## Constraints
- React + JS (no TypeScript), static site, no backend.
- Hosted on GitHub Pages: public repo `ahmethamdiozen/ielts-writing-guide`, site at `https://ahmethamdiozen.github.io/ielts-writing-guide/`.
- Nice, distinctive UI (frontend-design skill), responsive (mobile usable).
- Out of scope for v1: practice/quiz mode, accounts, i18n toggle, AI feedback.

## Stack and architecture
- Vite + React, `react-router-dom` with **HashRouter** (avoids 404 on refresh on GitHub Pages), Vite `base: '/ielts-writing-guide/'`.
- Deploy: GitHub Actions workflow builds and publishes to Pages.
- Content lives in plain JS data modules under `src/data/`; components only render data. Adding a word or essay type = editing a data file.
- State: React state + `localStorage` (theme, "learned" marks), always wrapped in try/catch.

```
src/
  data/task1/   vocabulary.js (categories + entries), charts.js (chart-type guides), overview.js (approach, criteria, templates, mistakes)
  data/task2/   essayTypes.js, general.js (criteria, ideas, thesis, vocab, timing)
  components/   TopBar, SideNav, WordCard, ExampleList (highlights target word), EssayTypePage, Callout, SearchBox
  pages/        Task1Page, Task2Page
  lib/          useLocalStorage, search
tests/          data.schema.test.js
```

## Navigation and UI
- Sticky top bar: **Task 1 | Task 2** switch, search, dark/light theme.
- Each task: left section menu + content area; on mobile the menu becomes a drawer.
- Per-word "learned" toggle with a progress count per category (localStorage).
- Search filters words/phrases across the current task; matches highlighted.
- Visual direction: editorial — warm paper tones, strong serif headings, one accent color, colored category tags, target word highlighted in example sentences. Dark mode supported.

## Task 1 content
1. **Approach**: Task Achievement/Coherence/Lexical Resource/Grammar criteria for Task 1, overview rules, paragraph template (intro / overview / body 1 / body 2), 20-minute timing, common mistakes.
2. **Vocabulary & connector bank**, categories:
   - Comparison & contrast (while, whereas, in contrast, by contrast, by comparison, unlike, compared with, on the other hand, however, whereas…)
   - Similarity (similarly, likewise, both, in the same way, equally…)
   - Addition (also, moreover, furthermore, in addition, additionally…)
   - Proportion & share — pie charts (account for, make up, constitute, represent, a quarter of, the majority/minority, the lion's share…)
   - Increase / decrease / stability (rise, climb, surge, soar, decline, drop, plummet, fluctuate, remain stable, level off…)
   - Peaks & lows (peak at, reach a high of, hit a low of, the highest/lowest figure…)
   - Approximation & precision (roughly, approximately, just over, nearly, exactly, slightly under…)
   - Degree & speed adverbs/adjectives (sharply, dramatically, gradually, steadily, marginally, significant, slight…)
   - Sequencing & time (initially, subsequently, thereafter, over the period, by the end of…)
   - Process & map language (first, next, is then, followed by, to the north of, was replaced by…)
   - Exemplification & focus (for example, in particular, notably, it is worth noting that…)
   - Each entry: word/phrase, Turkish meaning, **when/where to use** (which chart types, position in sentence), grammar/punctuation note, common mistake (where relevant), **3–5 English example sentences** with the target highlighted.
3. **Chart-type guides**: pie, bar, line, table, mixed, process, map. Each: what to include in overview, how to group data, recommended language, a model paragraph.

## Task 2 content
- **Essay types (all IELTS types)**: Opinion (agree/disagree, "to what extent"), Discussion (both views ± your opinion), Advantages/Disadvantages (incl. "outweigh" variant), Problem/Cause & Solution, Two-part (direct) questions, Positive/Negative development, Mixed/hybrid questions.
  - Each: how to recognize the question, band-9 structure (intro/body/conclusion with per-paragraph goals), thesis/position formulas, ready-made phrase bank (English + Turkish note), common mistakes, one sample question with a model essay or model paragraphs with annotations.
- **General section**: four band descriptors for Task 2 and what band 8–9 requires, idea generation (topic categories and reusable arguments), writing thesis/topic sentences, cohesion without overusing connectors, grammar range, timing (40 min), pre-submit checklist.

## Data schema (validated by test)
- Vocabulary entry: `{ id, term, category, tr, use: string, charts: string[], note?, mistake?, examples: string[3..5] }`; each example must contain the term (or a listed variant `forms`).
- Essay type: `{ id, name, recognize, structure[], thesis[], phrases[], mistakes[], sample: { question, text } }`.

## Testing and verification
- Vitest schema test over all data (required fields, 3–5 examples, unique ids, examples include term).
- `vite build` must succeed; manual browser check of both tasks, search, theme, mobile width.
- Verify deployed URL loads after Pages is enabled.

## Delivery steps (after spec + plan approval)
1. Scaffold and build app locally with content.
2. Commit locally.
3. Create public GitHub repo `ielts-writing-guide`, push, enable Pages via Actions, confirm the live URL.
