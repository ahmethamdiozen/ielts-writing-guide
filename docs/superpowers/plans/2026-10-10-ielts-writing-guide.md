# IELTS Writing Guide Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a static React site with Turkish explanations and English examples covering IELTS Writing Task 1 (data/comparison language) and Task 2 (all essay types).

**Architecture:** Vite + React SPA with HashRouter. All content lives in plain JS data modules (`src/data/**`) validated by a Vitest schema test; components only render data. Deployed to GitHub Pages by a GitHub Actions workflow.

**Tech Stack:** Vite, React 18, react-router-dom 6, Vitest, plain CSS (custom properties for theming), GitHub Actions + Pages.

**Spec:** `docs/superpowers/specs/2026-10-10-ielts-writing-guide-design.md`

## Global Constraints

- React + plain JS (no TypeScript); no backend.
- Vite `base: '/ielts-writing-guide/'`; routing via `HashRouter`.
- Explanations in Turkish; all example sentences and model texts in English.
- Vocabulary entry: 3–5 examples, each containing the term or one of its listed `forms` (case-insensitive).
- `localStorage` access always wrapped in try/catch; app must render with it unavailable.
- Public repo `ahmethamdiozen/ielts-writing-guide`; site `https://ahmethamdiozen.github.io/ielts-writing-guide/`.
- Out of scope: quiz/practice mode, accounts, language toggle, AI feedback.
- Commit messages end with `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`.

## Review Focus

- Page refresh / direct deep link on GitHub Pages must not 404 (HashRouter; test that routes render under `/#/task2/...`).
- `localStorage` unavailable or containing corrupt JSON → app still renders, no crash (test in `useLocalStorage`).
- Search with empty string, regex characters (`(`, `*`, `\`) or no matches → no crash, shows "sonuç yok" state.
- Example sentence highlighting when the term is a multi-word phrase or appears in an inflected form (`forms`) → still highlighted, never throws.
- Unknown route / unknown essay type id → redirects to the task's first section instead of a blank page.

---

## File Structure

```
package.json, vite.config.js, index.html
.github/workflows/deploy.yml
src/main.jsx, src/App.jsx, src/styles/theme.css, src/styles/app.css
src/lib/useLocalStorage.js        persistent state hook (safe)
src/lib/search.js                 matchesQuery(), escapeRegExp()
src/lib/highlight.jsx             <Highlighted text terms/> component
src/components/TopBar.jsx, SideNav.jsx, WordCard.jsx, EssayView.jsx, Callout.jsx, SearchBox.jsx
src/pages/Task1Page.jsx, Task2Page.jsx
src/data/task1/vocabulary.js      categories + entries (split per category files below)
src/data/task1/vocab/*.js         one file per category
src/data/task1/charts.js, overview.js
src/data/task2/essayTypes.js, general.js
src/data/index.js                 re-exports
tests/data.schema.test.js, tests/lib.test.js, tests/routes.test.jsx
```

---

### Task 1: Scaffold, tooling, theme shell

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`, `src/styles/theme.css`, `src/styles/app.css`, `.gitignore`
- Test: `tests/routes.test.jsx`

**Interfaces:**
- Produces: `App` default export rendering routes `/task1/:section?` and `/task2/:section?`, `/` → `/task1`. Theme stored as `data-theme` attribute on `<html>`.

- [ ] **Step 1: Scaffold**

```bash
cd "/Users/ahmethamdiozen/Downloads/Language/IELTS New/writing"
npm init -y
npm i react@18 react-dom@18 react-router-dom@6
npm i -D vite @vitejs/plugin-react vitest jsdom @testing-library/react @testing-library/jest-dom
printf "node_modules\ndist\n.DS_Store\n" > .gitignore
```

Set scripts in `package.json`: `"dev":"vite","build":"vite build","preview":"vite preview","test":"vitest run"` and `"type":"module"`.

`vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: '/ielts-writing-guide/',
  plugins: [react()],
  test: { environment: 'jsdom', globals: true, setupFiles: ['./tests/setup.js'] },
})
```
`tests/setup.js`: `import '@testing-library/jest-dom/vitest'`

- [ ] **Step 2: Write failing route test** (`tests/routes.test.jsx`)

```jsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App.jsx'

const at = (p) => render(<MemoryRouter initialEntries={[p]}><App /></MemoryRouter>)

test('root redirects to task1', () => { at('/'); expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Task 1/i) })
test('task2 route renders', () => { at('/task2'); expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Task 2/i) })
test('unknown route falls back to task1', () => { at('/nope/zzz'); expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Task 1/i) })
```
`App` must not include its own router (main.jsx wraps in `HashRouter`).

- [ ] **Step 3: Run** `npx vitest run` → FAIL (App missing).

- [ ] **Step 4: Implement** `App.jsx` with `<Routes>` : `/` → `<Navigate to="/task1" replace/>`, `/task1/:section?` → placeholder `<h1>Task 1</h1>`, `/task2/:section?` → `<h1>Task 2</h1>`, `*` → Navigate to `/task1`. `main.jsx` wraps `<HashRouter>`. `theme.css` defines CSS variables (see Task 6 for final palette).

- [ ] **Step 5: Run** `npx vitest run` → PASS; `npm run build` → success.

- [ ] **Step 6: Commit** `git add -A && git commit -m "chore: scaffold Vite React app with routes"`

---

### Task 2: Lib utilities (storage, search, highlight)

**Files:** Create `src/lib/useLocalStorage.js`, `src/lib/search.js`, `src/lib/highlight.jsx`; Test `tests/lib.test.js`

**Interfaces:**
- `useLocalStorage(key, initial) → [value, setValue]` — never throws; falls back to in-memory state.
- `escapeRegExp(s) → string`; `matchesQuery(haystack: string, query: string) → boolean` (case-insensitive substring; empty query → true).
- `<Highlighted text={string} terms={string[]} />` wraps matches in `<mark>`; terms regex-escaped, longest first, empty terms ignored.

- [ ] **Step 1: Failing tests**

```jsx
import { renderHook, act, render } from '@testing-library/react'
import { useLocalStorage } from '../src/lib/useLocalStorage.js'
import { matchesQuery, escapeRegExp } from '../src/lib/search.js'
import { Highlighted } from '../src/lib/highlight.jsx'

test('corrupt storage falls back to initial', () => {
  localStorage.setItem('k', '{bad')
  const { result } = renderHook(() => useLocalStorage('k', 5))
  expect(result.current[0]).toBe(5)
})
test('storage that throws does not crash', () => {
  const spy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('x') })
  const { result } = renderHook(() => useLocalStorage('k2', 'a'))
  expect(result.current[0]).toBe('a')
  act(() => result.current[1]('b'))
  expect(result.current[0]).toBe('b')
  spy.mockRestore()
})
test('search handles regex chars and empty query', () => {
  expect(matchesQuery('while', '')).toBe(true)
  expect(matchesQuery('a (b)', '(b')).toBe(true)
  expect(matchesQuery('abc', '*')).toBe(false)
  expect(escapeRegExp('a.b*')).toBe('a\\.b\\*')
})
test('highlight multi-word and inflected forms', () => {
  const { container } = render(<Highlighted text="Sales soared sharply. In contrast, costs fell." terms={['in contrast', 'soared', '']} />)
  expect([...container.querySelectorAll('mark')].map(m => m.textContent)).toEqual(['soared', 'In contrast'])
})
```

- [ ] **Step 2:** `npx vitest run tests/lib.test.js` → FAIL.
- [ ] **Step 3: Implement**

```js
// search.js
export const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
export const matchesQuery = (h, q) => !q || h.toLowerCase().includes(q.toLowerCase())
```
```js
// useLocalStorage.js
import { useState, useCallback } from 'react'
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try { const raw = localStorage.getItem(key); return raw == null ? initial : JSON.parse(raw) }
    catch { return initial }
  })
  const set = useCallback((next) => {
    setValue((prev) => {
      const v = typeof next === 'function' ? next(prev) : next
      try { localStorage.setItem(key, JSON.stringify(v)) } catch { /* ignore */ }
      return v
    })
  }, [key])
  return [value, set]
}
```
```jsx
// highlight.jsx
import { escapeRegExp } from './search.js'
export function Highlighted({ text, terms = [] }) {
  const ts = terms.filter(Boolean).sort((a, b) => b.length - a.length).map(escapeRegExp)
  if (!ts.length) return <>{text}</>
  const re = new RegExp(`(${ts.join('|')})`, 'gi')
  return <>{text.split(re).map((p, i) => (i % 2 ? <mark key={i}>{p}</mark> : p))}</>
}
```
- [ ] **Step 4:** run tests → PASS.
- [ ] **Step 5: Commit** `feat: add storage, search and highlight utilities`

---

### Task 3: Data schema test + Task 1 vocabulary data

**Files:** Create `src/data/task1/vocab/*.js`, `src/data/task1/vocabulary.js`; Test `tests/data.schema.test.js`

**Interfaces:**
- `vocabulary.js` exports `categories: { id, title, desc }[]` and `entries: VocabEntry[]` (concatenation of every `vocab/*.js` default export array).
- `VocabEntry = { id: string(unique, kebab), term: string, forms?: string[], category: categoryId, tr: string, use: string (Turkish: when/where, which chart), charts: ('pie'|'bar'|'line'|'table'|'mixed'|'process'|'map'|'all')[], note?: string (Turkish grammar/punctuation), mistake?: string (Turkish), examples: string[3..5] (English) }`

- [ ] **Step 1: Write failing schema test**

```js
import { categories, entries } from '../src/data/task1/vocabulary.js'
const CHARTS = ['pie','bar','line','table','mixed','process','map','all']
test('categories unique', () => { expect(new Set(categories.map(c => c.id)).size).toBe(categories.length) })
test('every category has >= 6 entries', () => {
  for (const c of categories) expect(entries.filter(e => e.category === c.id).length, c.id).toBeGreaterThanOrEqual(6)
})
test('ids unique', () => { expect(new Set(entries.map(e => e.id)).size).toBe(entries.length) })
describe.each(entries.map(e => [e.id, e]))('entry %s', (_id, e) => {
  test('required fields', () => {
    for (const k of ['term','tr','use']) expect(typeof e[k], k).toBe('string')
    expect(e.term.length).toBeGreaterThan(0)
    expect(categories.map(c => c.id)).toContain(e.category)
    expect(e.charts.length).toBeGreaterThan(0)
    for (const c of e.charts) expect(CHARTS).toContain(c)
  })
  test('3-5 examples containing term or form', () => {
    expect(e.examples.length).toBeGreaterThanOrEqual(3)
    expect(e.examples.length).toBeLessThanOrEqual(5)
    const forms = [e.term, ...(e.forms ?? [])].map(f => f.toLowerCase())
    for (const ex of e.examples) expect(forms.some(f => ex.toLowerCase().includes(f)), ex).toBe(true)
  })
})
```
- [ ] **Step 2:** run → FAIL (module missing).
- [ ] **Step 3: Author data.** Categories and **exact terms** (each term = one entry; minimum list, add more if useful):
  1. `comparison` Karşılaştırma & zıtlık: while, whereas, in contrast, by contrast, by comparison, in comparison with, compared with/to, unlike, on the other hand, however, conversely, nevertheless
  2. `similarity` Benzerlik: similarly, likewise, in the same way, both, equally, as with, just as, the same applies to
  3. `addition` Ekleme: also, moreover, furthermore, in addition, additionally, as well as, besides, what is more
  4. `proportion` Oran & pay (pie): account for, make up, constitute, represent, a quarter of, the majority of, a minority of, the lion's share, proportion, percent/percentage, one in five
  5. `change` Artış/azalış/sabitlik: rise, increase, climb, grow, surge, soar, jump, decline, decrease, drop, fall, plummet, dip, fluctuate, remain stable, level off, plateau, recover
  6. `peaks` Zirve & dip: peak at, reach a peak of, hit a low of, bottom out at, the highest figure, the lowest figure, reach its maximum, stand at
  7. `approximation` Yaklaşıklık: roughly, approximately, around, just over, just under, nearly, almost, exactly, precisely, slightly more than
  8. `degree` Derece & hız: sharply, dramatically, significantly, considerably, substantially, gradually, steadily, slightly, marginally, slowly, rapidly, moderately
  9. `time` Zaman & sıralama: initially, subsequently, thereafter, over the period, by the end of, at the start of, from X to Y, in the following year, during, meanwhile
  10. `process-map` Süreç & harita: first, next, is then, followed by, finally, as a result, to the north of, adjacent to, was replaced by, was demolished, was converted into, in the centre of
  11. `focus` Vurgu & örnekleme: for example, for instance, in particular, notably, it is worth noting that, as can be seen, overall, in summary, turning to

  Worked example (follow this exact shape/depth for every entry; `vocab/comparison.js`):
```js
export default [
  {
    id: 'while',
    term: 'while',
    category: 'comparison',
    tr: '-iken; oysa; buna karşılık',
    use: 'Aynı cümlede iki zıt veriyi karşılaştırmak için. Bar chart ve table\'da iki grup/ülke/yıl yan yana verilince, pie chart\'ta iki dilimi karşılaştırırken kullanılır. Cümle başında ya da ortasında gelebilir.',
    charts: ['bar', 'pie', 'table', 'line'],
    note: 'Cümle başında kullanırsan iki yan cümle arasına virgül koy: "While A..., B...". Ortada kullanırsan virgül ("..., while ...") genelde gerekir.',
    mistake: '"While" sonrasında isim tek başına gelmez; mutlaka özne + fiil olmalı. Yanlış: "While Japan 20%". Doğru: "While Japan recorded 20%, ..."',
    examples: [
      'While 45% of respondents chose public transport, only 12% preferred cycling.',
      'Sales in Asia rose steadily, while those in Europe remained flat.',
      'While the figure for men peaked at 60% in 2010, the figure for women never exceeded 40%.',
      'Coal accounted for 30% of energy production, while renewables made up just 8%.'
    ],
  },
]
```
  Each `vocab/<category>.js` default-exports its array; `vocabulary.js` imports all and exports `categories`, `entries`. Write one category file at a time, run the schema test after each, fix failures.
- [ ] **Step 4:** `npx vitest run tests/data.schema.test.js` → PASS (all categories, all entries).
- [ ] **Step 5: Commit** `feat(task1): add vocabulary data and schema test` (one commit per 3–4 categories is fine).

---

### Task 4: Task 1 guides data (overview + chart types)

**Files:** Create `src/data/task1/overview.js`, `src/data/task1/charts.js`; Modify `tests/data.schema.test.js`

**Interfaces:**
- `overview.js` default export: `{ criteria: {name, tr, tips[]}[] (4 items: Task Achievement, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy), overviewRules: string[], template: {part, goal, example}[] (intro/overview/body1/body2), timing: string[], mistakes: string[] }`
- `charts.js` default export: `{ id: 'pie'|'bar'|'line'|'table'|'mixed'|'process'|'map', title, tr, overviewInclude: string[], grouping: string[], language: string[] (term ids that exist in vocabulary entries), sample: { prompt: string, text: string } }[]` — 7 items.

- [ ] **Step 1: Add failing tests** to `data.schema.test.js`: overview has 4 criteria with ≥3 tips each, template 4 parts; charts has the 7 ids, every `language` id exists in `entries`, each `sample.text` ≥ 120 words.
- [ ] **Step 2:** run → FAIL. **Step 3:** author the content (Turkish explanations, English sample texts, band 8–9 quality). **Step 4:** run → PASS.
- [ ] **Step 5: Commit** `feat(task1): add overview and chart-type guides`

---

### Task 5: Task 2 data (essay types + general)

**Files:** Create `src/data/task2/essayTypes.js`, `src/data/task2/general.js`, `src/data/index.js`; Modify `tests/data.schema.test.js`

**Interfaces:**
- `essayTypes.js` default export, 7 items: `{ id, name, tr, recognize: string[], structure: {part, goal, tip}[], thesis: string[], phrases: {en, tr, use}[], mistakes: string[], sample: { question, text } }`. Ids/names exactly: `opinion` (Opinion / Agree-Disagree / To what extent), `discussion` (Discuss both views ± opinion), `advantages` (Advantages & Disadvantages, incl. "outweigh"), `problem-solution` (Problem/Cause & Solution), `two-part` (Two-part / direct questions), `development` (Positive or negative development), `mixed` (Mixed/hybrid questions, e.g. discuss both views + give opinion; causes + effects).
- `general.js` default export: `{ criteria: {name, tr, band9: string[], tips: string[]}[] (4), ideas: {topic, arguments: string[]}[] (≥ 8 topics: education, technology, environment, health, work, crime, media, government/society), thesisFormulas: string[], cohesion: string[], grammarRange: string[], timing: string[], checklist: string[] }`
- `index.js` re-exports `{ categories, entries }`, `overview`, `charts`, `essayTypes`, `general`.

- [ ] **Step 1: Failing tests:** 7 essay types with expected ids; each has ≥3 `recognize`, ≥3 `structure` parts, ≥2 `thesis`, ≥6 `phrases`, ≥4 `mistakes`, sample text ≥ 250 words; general has 4 criteria, ≥8 idea topics each with ≥4 arguments, ≥8 checklist items.
- [ ] **Step 2:** run → FAIL. **Step 3:** author content. **Step 4:** run → PASS.
- [ ] **Step 5: Commit** `feat(task2): add essay types and general guidance data`

---

### Task 6: UI shell — theme, TopBar, SideNav, SearchBox

**Files:** Create `src/components/TopBar.jsx`, `SideNav.jsx`, `SearchBox.jsx`, `Callout.jsx`; Modify `src/App.jsx`, `src/styles/theme.css`, `src/styles/app.css`

**Interfaces:**
- `TopBar({ query, onQuery })` — NavLinks to `/task1` and `/task2`, SearchBox, theme toggle (persists via `useLocalStorage('theme','auto')`, applies `data-theme` on `<html>`).
- `SideNav({ base, sections: {id,label,count?}[] })` — NavLinks to `${base}/${id}`; on mobile renders as a toggled drawer (button with `aria-expanded`).
- `Callout({ tone: 'tip'|'warn'|'info', title, children })`.
- Before writing styles, **invoke the `frontend-design:frontend-design` skill** and follow it: editorial look, warm paper background, serif headings (Google Font via `<link>` in `index.html`, e.g. Fraunces/Newsreader + Inter), single accent colour, colored category tags, light and dark palettes via CSS variables under `:root` and `:root[data-theme="dark"]`, `prefers-color-scheme` for `auto`; responsive down to 360px with no horizontal scroll.

- [ ] **Step 1:** extend `tests/routes.test.jsx`: TopBar renders links "Task 1" and "Task 2"; clicking theme toggle sets `document.documentElement.dataset.theme`.
- [ ] **Step 2:** run → FAIL. **Step 3:** implement components and styles. **Step 4:** run → PASS.
- [ ] **Step 5: Commit** `feat(ui): add top bar, side nav, theme`

---

### Task 7: Task 1 page (vocab bank, learned marks, guides)

**Files:** Create `src/components/WordCard.jsx`, `src/pages/Task1Page.jsx`; Modify `src/App.jsx`, `src/styles/app.css`; Test `tests/routes.test.jsx`

**Interfaces:**
- Consumes: `categories`, `entries`, `overview`, `charts` from `src/data/index.js`; `Highlighted`, `matchesQuery`, `useLocalStorage`.
- `WordCard({ entry, learned, onToggle, query })` — term + Turkish meaning, category tag, chart badges, "Ne zaman?" (`use`), `note`, `mistake` as warn Callout, examples list with the term/forms highlighted; "Öğrendim" toggle with `aria-pressed`.
- `Task1Page({ query })` sections (SideNav): `approach` (overview data), one section per vocab category (`/task1/<categoryId>`, shows learned count `x/y`), one per chart (`/task1/chart-<id>`). Unknown section → `<Navigate to="/task1/approach" replace />`. Search filters word cards across all categories when `query` non-empty (shows results list with category tags; empty state "Sonuç bulunamadı").
- Learned ids stored under `useLocalStorage('learned-v1', [])`.

- [ ] **Step 1: Failing tests:** `/task1/comparison` shows the "while" card; search for "whil" at `/task1/approach` lists "while"; search `(*` shows "Sonuç bulunamadı"; toggling "Öğrendim" updates counter; `/task1/does-not-exist` shows approach heading.
- [ ] **Step 2:** run → FAIL. **Step 3:** implement. **Step 4:** run → PASS.
- [ ] **Step 5: Commit** `feat(task1): add Task 1 page with vocabulary bank`

---

### Task 8: Task 2 page (essay types, general guide)

**Files:** Create `src/components/EssayView.jsx`, `src/pages/Task2Page.jsx`; Modify `src/App.jsx`, `src/styles/app.css`; Test `tests/routes.test.jsx`

**Interfaces:**
- `EssayView({ type })` — recognize list, structure as numbered stepper (part/goal/tip), thesis formulas, phrase bank (en/tr/use, highlight en), mistakes (warn callouts), sample question + model essay.
- `Task2Page({ query })` sections: `general` (criteria with band 9 notes, ideas by topic, thesis formulas, cohesion, grammar range, timing, checklist), one per essay type (`/task2/<id>`). Unknown section → Navigate to `/task2/general`. Search filters phrases/ideas; empty state "Sonuç bulunamadı".

- [ ] **Step 1: Failing tests:** `/task2/discussion` shows its name and sample question; `/task2/zzz` shows general heading; search "outweigh" at `/task2/general` surfaces the advantages type phrase.
- [ ] **Step 2:** run → FAIL. **Step 3:** implement. **Step 4:** run → PASS.
- [ ] **Step 5: Commit** `feat(task2): add Task 2 page with essay type guides`

---

### Task 9: Polish and local verification

- [ ] **Step 1:** `npm test` → all pass; `npm run build` → success; `npm run preview` and open the app.
- [ ] **Step 2: Browser check** (use `run` skill / Playwright if available): both tasks, every section opens, search works, learned marks persist after reload, dark mode, 375px width has no horizontal scroll, deep link `/#/task2/opinion` works after reload. Fix issues found.
- [ ] **Step 3: README** (`README.md`): what the app is, `npm i / dev / build / test`, how to add a word or essay type (data file + schema).
- [ ] **Step 4: Commit** `docs: add README; polish`

---

### Task 10: Deploy to GitHub Pages

**Files:** Create `.github/workflows/deploy.yml`

**Gate:** Confirm repo name/visibility with the user was done in brainstorming (`ielts-writing-guide`, public). Re-state the exact command before running.

- [ ] **Step 1: Workflow**

```yaml
name: Deploy
on:
  push: { branches: [main] }
  workflow_dispatch:
permissions: { contents: read, pages: write, id-token: write }
concurrency: { group: pages, cancel-in-progress: true }
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm test
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages, url: '${{ steps.d.outputs.page_url }}' }
    steps:
      - id: d
        uses: actions/deploy-pages@v4
```
- [ ] **Step 2:** `git branch -M main && git add -A && git commit -m "ci: add Pages deploy workflow"`
- [ ] **Step 3: Create repo and push**

```bash
gh repo create ahmethamdiozen/ielts-writing-guide --public --source=. --remote=origin --push
gh api -X POST repos/ahmethamdiozen/ielts-writing-guide/pages -f build_type=workflow
```
(if Pages already enabled: `gh api -X PUT ... -f build_type=workflow`)
- [ ] **Step 4:** `gh run watch` until the deploy succeeds; `curl -sI https://ahmethamdiozen.github.io/ielts-writing-guide/` → 200. Open the URL and spot-check `/#/task1` and `/#/task2/opinion`.
- [ ] **Step 5:** Report the live URL to the user.

---

## Self-Review

- **Spec coverage:** stack/HashRouter/base (T1, T10), Task 1 approach + vocab + chart guides (T3, T4, T7), Task 2 all essay types + general (T5, T8), nav/search/theme/learned/mobile (T6, T7), schema test + build + manual check (T3–T5, T9), deploy (T10). No gaps.
- **Placeholders:** content-authoring steps give exact term lists, schema, minimum counts and one fully worked entry; tests enforce counts.
- **Type consistency:** `entries`/`categories`/`overview`/`charts`/`essayTypes`/`general` names are identical across T3–T8; `Highlighted`, `matchesQuery`, `useLocalStorage` signatures match T2.
- **Review Focus:** each line is covered by tests in T1 (routes/fallback), T2 (storage/search/highlight), T7/T8 (empty search, unknown section).
