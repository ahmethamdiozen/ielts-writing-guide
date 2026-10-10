import { categories, entries } from '../src/data/task1/vocabulary.js'

const CHARTS = ['pie', 'bar', 'line', 'table', 'mixed', 'process', 'map', 'all']

test('categories unique', () => {
  expect(new Set(categories.map((c) => c.id)).size).toBe(categories.length)
})
test('every category has >= 6 entries', () => {
  for (const c of categories) {
    expect(entries.filter((e) => e.category === c.id).length, c.id).toBeGreaterThanOrEqual(6)
  }
})
test('ids unique', () => {
  expect(new Set(entries.map((e) => e.id)).size).toBe(entries.length)
})
describe.each(entries.map((e) => [e.id, e]))('entry %s', (_id, e) => {
  test('required fields', () => {
    for (const k of ['term', 'tr', 'use']) expect(typeof e[k], k).toBe('string')
    expect(e.term.length).toBeGreaterThan(0)
    expect(categories.map((c) => c.id)).toContain(e.category)
    expect(e.charts.length).toBeGreaterThan(0)
    for (const c of e.charts) expect(CHARTS).toContain(c)
  })
  test('3-5 examples containing term or form', () => {
    expect(e.examples.length).toBeGreaterThanOrEqual(3)
    expect(e.examples.length).toBeLessThanOrEqual(5)
    const forms = [e.term, ...(e.forms ?? [])].map((f) => f.toLowerCase())
    for (const ex of e.examples) expect(forms.some((f) => ex.toLowerCase().includes(f)), ex).toBe(true)
  })
})

import overview from '../src/data/task1/overview.js'
import charts from '../src/data/task1/charts.js'

const words = (s) => s.trim().split(/\s+/).length

describe('task1 overview', () => {
  test('4 criteria with >= 3 tips each', () => {
    expect(overview.criteria).toHaveLength(4)
    for (const c of overview.criteria) expect(c.tips.length, c.name).toBeGreaterThanOrEqual(3)
  })
  test('template has 4 parts', () => { expect(overview.template).toHaveLength(4) })
  test('has rules, timing and mistakes', () => {
    expect(overview.overviewRules.length).toBeGreaterThanOrEqual(3)
    expect(overview.timing.length).toBeGreaterThanOrEqual(3)
    expect(overview.mistakes.length).toBeGreaterThanOrEqual(5)
  })
})

describe('task1 charts', () => {
  test('7 chart ids', () => {
    expect(charts.map((c) => c.id).sort()).toEqual(['bar', 'line', 'map', 'mixed', 'pie', 'process', 'table'])
  })
  describe.each(charts.map((c) => [c.id, c]))('chart %s', (_id, c) => {
    test('language ids exist', () => {
      expect(c.language.length).toBeGreaterThanOrEqual(5)
      for (const id of c.language) expect(entries.map((e) => e.id), id).toContain(id)
    })
    test('guidance present', () => {
      expect(c.overviewInclude.length).toBeGreaterThanOrEqual(2)
      expect(c.grouping.length).toBeGreaterThanOrEqual(2)
    })
    test('sample >= 120 words', () => { expect(words(c.sample.text)).toBeGreaterThanOrEqual(120) })
  })
})
