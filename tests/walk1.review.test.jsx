import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App.jsx'
import walk1 from '../src/data/walk1/index.js'
import { KINDS } from '../src/components/EssayReview.jsx'
import { plain, wordCount } from '../src/components/Marked.jsx'

const at = (p) => render(<MemoryRouter initialEntries={[p]}><App /></MemoryRouter>)

describe.each(walk1.map((w) => [w.id, w]))('walk1 %s', (_id, w) => {
  test('units and relations point at existing findings', () => {
    const ids = new Set(w.findings.map((f) => f.id))
    for (const u of w.units) for (const id of u.from) expect(ids.has(id), `${u.id} -> ${id}`).toBe(true)
    for (const r of w.relations) for (const id of r.between) expect(ids.has(id), r.fact).toBe(true)
  })
  test('series fit the chart colours', () => {
    const n = w.chart?.series?.length ?? w.chart?.labels?.length ?? 0
    expect(n).toBeLessThanOrEqual(5)
  })
})

const reviewed = walk1.filter((w) => w.review)

describe.each(reviewed.map((w) => [w.id, w.review]))('review %s', (_id, r) => {
  test('every issue quotes a marked snippet of its sentence', () => {
    for (const s of r.answer) {
      expect(s.issues.length, s.id).toBeGreaterThan(0)
      expect(s.fix.length, s.id).toBeGreaterThan(0)
      if (!s.missing) expect(typeof s.text, s.id).toBe('string')
      for (const i of s.issues) {
        expect(Object.keys(KINDS), `${s.id} ${i.kind}`).toContain(i.kind)
        if (i.at) expect(s.text, `${s.id}: ${i.at}`).toContain(`[[${i.at}]]`)
      }
    }
  })
  test('four criteria and a corrected text over 150 words', () => {
    expect(r.criteria).toHaveLength(4)
    const fixed = r.answer.map((s) => plain(s.fix)).join(' ')
    expect(wordCount(fixed)).toBeGreaterThanOrEqual(150)
  })
})

test('forest walkthrough shows the mock answer review', () => {
  at('/t1-yol/forest')
  expect(screen.getByRole('heading', { level: 2, name: /Senin cevabın: neden band 6/ })).toBeInTheDocument()
  expect(screen.getAllByText('Veri hatası').length).toBeGreaterThan(0)
  expect(screen.queryByText(/only about a third of its 1990 forest cover remained/)).toBeInTheDocument()
  fireEvent.click(screen.getByRole('button', { name: 'Düzeltilmiş metni göster' }))
  expect(screen.getAllByText(/only about a third of its 1990 forest cover remained/).length).toBe(2)
})

test('walkthrough without a review has no review step', () => {
  at('/t1-yol/faculty')
  expect(screen.queryByRole('heading', { level: 2, name: /Senin cevabın/ })).not.toBeInTheDocument()
})
