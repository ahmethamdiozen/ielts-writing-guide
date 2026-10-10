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

import essayTypes from '../src/data/task2/essayTypes.js'
import general from '../src/data/task2/general.js'

describe('task2 essay types', () => {
  test('expected ids', () => {
    expect(essayTypes.map((t) => t.id).sort()).toEqual(
      ['advantages', 'development', 'discussion', 'mixed', 'opinion', 'problem-solution', 'two-part'])
  })
  describe.each(essayTypes.map((t) => [t.id, t]))('essay %s', (_id, t) => {
    test('guidance counts', () => {
      expect(t.recognize.length).toBeGreaterThanOrEqual(3)
      expect(t.structure.length).toBeGreaterThanOrEqual(3)
      expect(t.thesis.length).toBeGreaterThanOrEqual(2)
      expect(t.phrases.length).toBeGreaterThanOrEqual(6)
      expect(t.mistakes.length).toBeGreaterThanOrEqual(4)
    })
    test('phrases have en/tr/use', () => {
      for (const p of t.phrases) for (const k of ['en', 'tr', 'use']) expect(typeof p[k], k).toBe('string')
    })
    test('sample >= 250 words', () => {
      expect(typeof t.sample.question).toBe('string')
      expect(words(t.sample.text)).toBeGreaterThanOrEqual(250)
    })
  })
})

describe('task2 general', () => {
  test('4 criteria with band9 and tips', () => {
    expect(general.criteria).toHaveLength(4)
    for (const c of general.criteria) {
      expect(c.band9.length).toBeGreaterThanOrEqual(2)
      expect(c.tips.length).toBeGreaterThanOrEqual(3)
    }
  })
  test('>= 8 idea topics with >= 4 arguments', () => {
    expect(general.ideas.length).toBeGreaterThanOrEqual(8)
    for (const i of general.ideas) expect(i.arguments.length, i.topic).toBeGreaterThanOrEqual(4)
  })
  test('lists present', () => {
    expect(general.checklist.length).toBeGreaterThanOrEqual(8)
    expect(general.thesisFormulas.length).toBeGreaterThanOrEqual(3)
    expect(general.timing.length).toBeGreaterThanOrEqual(3)
    expect(general.cohesion.length).toBeGreaterThanOrEqual(3)
    expect(general.grammarRange.length).toBeGreaterThanOrEqual(3)
  })
})
