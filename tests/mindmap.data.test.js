import { buildMindMap } from '../src/data/mindmap.js'
import { layoutTree, boxSize } from '../src/lib/mindmap.js'
import { categories, entries, charts, essayTypes } from '../src/data/index.js'
import walk1 from '../src/data/walk1/index.js'
import walk2 from '../src/data/walk2/index.js'

const tree = buildMindMap()
const out = layoutTree(tree)

const T1_SECTIONS = ['approach', ...categories.map((c) => c.id), ...charts.map((c) => `chart-${c.id}`)]
const T2_SECTIONS = ['general', ...essayTypes.map((t) => t.id)]
const STATIC = ['/task1', '/task2', '/practice', '/connect', '/t1-yol', '/t2-yol']

const valid = (to) => {
  if (STATIC.includes(to)) return true
  const [, a, b] = to.split('/')
  if (a === 'task1') return T1_SECTIONS.includes(b)
  if (a === 'task2') return T2_SECTIONS.includes(b)
  if (a === 't1-yol') return walk1.some((w) => w.id === b)
  if (a === 't2-yol') return walk2.some((w) => w.id === b)
  return false
}

test('tree builds with a root and seven main branches', () => {
  expect(tree.label).toBe('IELTS Writing')
  expect(tree.children.map((c) => c.label)).toEqual(['Task 1', 'Kelime bankası', 'Task 2', 'Bağlaç', 'T1 Adım Adım', 'T2 Adım Adım', 'Alıştırma'])
})
test('every vocabulary word, chart type, essay type and walkthrough appears as a node', () => {
  const ids = new Set(out.nodes.map((n) => n.id))
  for (const e of entries) expect(ids.has(`w-${e.id}`), e.term).toBe(true)
  for (const c of charts) expect(ids.has(`t1-chart-${c.id}`), c.id).toBe(true)
  for (const t of essayTypes) expect(ids.has(`t2-type-${t.id}`), t.id).toBe(true)
  for (const w of walk1) expect(ids.has(`wk1-${w.id}`), w.id).toBe(true)
  for (const w of walk2) expect(ids.has(`wk2-${w.id}`), w.id).toBe(true)
})
test('every link target is a real page and section', () => {
  const targets = out.nodes.filter((n) => n.to)
  expect(targets.length).toBeGreaterThan(150)
  for (const n of targets) expect(valid(n.to), `${n.id} -> ${n.to}`).toBe(true)
})
test('boxes never overlap', () => {
  const boxes = out.nodes.filter((n) => n.depth === 1 || (n.depth >= 2 && !n.leaf)).map((n) => {
    const { w, h } = boxSize(n)
    return { id: n.id, l: n.x - w / 2, r: n.x + w / 2, t: n.y - h / 2, b: n.y + h / 2 }
  })
  for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
    const a = boxes[i], b = boxes[j]
    expect(a.l < b.r && b.l < a.r && a.t < b.b && b.t < a.b, `${a.id} x ${b.id}`).toBe(false)
  }
})
test('radial leaf labels keep at least 24px of arc between neighbours', () => {
  const leaves = out.nodes.filter((n) => n.leaf && n.depth >= 2).sort((p, q) => p.angle - q.angle)
  for (let i = 1; i < leaves.length; i++) {
    const gap = (leaves[i].angle - leaves[i - 1].angle) * leaves[i].r
    expect(gap, `${leaves[i - 1].id} / ${leaves[i].id}`).toBeGreaterThanOrEqual(24)
  }
})
