import { buildQuestions, checkAnswer, normalize } from '../src/lib/practice.js'
import { entries } from '../src/data/task1/vocabulary.js'

const seq = () => { let i = 0; return () => ((i++ * 0.37) % 1) }

describe('buildQuestions', () => {
  test('returns requested count, one per entry, each with a blank', () => {
    const qs = buildQuestions(entries, { count: 10, rng: seq() })
    expect(qs).toHaveLength(10)
    expect(new Set(qs.map((q) => q.entryId)).size).toBe(10)
    for (const q of qs) {
      expect(q.sentence).toContain('_____')
      expect(q.sentence.match(/_____/g)).toHaveLength(1)
      expect(q.hint.length).toBeGreaterThan(0)
      expect(q.accepted.length).toBeGreaterThan(0)
    }
  })
  test('the removed word is accepted and absent from the sentence', () => {
    const qs = buildQuestions(entries, { count: 200, rng: seq() })
    for (const q of qs) {
      const original = q.sentence.replace('_____', q.shown)
      const e = entries.find((x) => x.id === q.entryId)
      expect(e.examples).toContain(original)
      expect(checkAnswer(q, q.shown)).toBe(true)
    }
  })
  test('category filter', () => {
    const qs = buildQuestions(entries, { count: 10, categoryId: 'comparison', rng: seq() })
    expect(qs.length).toBeGreaterThan(0)
    for (const q of qs) expect(entries.find((e) => e.id === q.entryId).category).toBe('comparison')
  })
  test('learned filter and empty pool', () => {
    const qs = buildQuestions(entries, { count: 10, onlyIds: ['while', 'whereas'], rng: seq() })
    expect(qs.map((q) => q.entryId).sort()).toEqual(['whereas', 'while'])
    expect(buildQuestions(entries, { count: 10, onlyIds: [] })).toEqual([])
    expect(buildQuestions(entries, { count: 10, categoryId: 'nope' })).toEqual([])
  })
  test('placeholder terms like "from X to Y" are never asked', () => {
    const qs = buildQuestions(entries, { count: 500, rng: seq() })
    expect(qs.some((q) => q.entryId === 'from-x-to-y')).toBe(false)
  })
})

describe('checkAnswer', () => {
  const q = { accepted: ['rise', 'rose', 'risen', 'rises', 'rising'] }
  test('ignores case, spaces and trailing punctuation', () => {
    expect(checkAnswer(q, '  Rose ')).toBe(true)
    expect(checkAnswer(q, 'rise.')).toBe(true)
  })
  test('rejects wrong and empty answers', () => {
    expect(checkAnswer(q, 'fall')).toBe(false)
    expect(checkAnswer(q, '')).toBe(false)
    expect(checkAnswer(q, '   ')).toBe(false)
  })
  test('multi-word and curly apostrophe', () => {
    expect(checkAnswer({ accepted: ['the lion\'s share'] }, 'The  lion’s share')).toBe(true)
    expect(normalize('A  B ')).toBe('a b')
  })
})
