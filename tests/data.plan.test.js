import plan from '../src/data/plan.js'
import { allDays } from '../src/lib/plan.js'
import { categories, charts, essayTypes } from '../src/data/index.js'
import walk1 from '../src/data/walk1/index.js'
import walk2 from '../src/data/walk2/index.js'
import connectorCharts from '../src/data/connectorCharts.js'

const days = allDays(plan)
const valid = (to) => {
  if (to === '/practice') return true
  const [, root, id] = to.split('/')
  if (root === 'task1') return id === undefined || id === 'approach' || categories.some((c) => c.id === id) || charts.some((c) => `chart-${c.id}` === id)
  if (root === 'task2') return id === undefined || id === 'general' || essayTypes.some((t) => t.id === id)
  if (root === 't1-yol') return walk1.some((w) => w.id === id)
  if (root === 't2-yol') return walk2.some((w) => w.id === id)
  if (root === 'connect') return connectorCharts.some((c) => c.id === id)
  return false
}

test('plan has 4 weeks of 7 days', () => {
  expect(plan.weeks).toHaveLength(4)
  plan.weeks.forEach((w) => expect(w.days).toHaveLength(7))
})
test('day ids are unique', () => {
  expect(new Set(days.map((d) => d.id)).size).toBe(days.length)
})
test('every day has a title and at least one step', () => {
  days.forEach((d) => { expect(d.title).toBeTruthy(); expect(d.steps.length).toBeGreaterThan(0) })
})
test('every link points to an existing page', () => {
  days.filter((d) => d.link).forEach(({ link }) => expect(valid(link.to), link.to).toBe(true))
})
test('plan lists the measurement criteria', () => {
  expect(plan.checks.length).toBeGreaterThanOrEqual(3)
})
