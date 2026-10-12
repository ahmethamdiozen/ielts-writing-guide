import { render, screen, fireEvent, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App.jsx'
import { buildMindMap } from '../src/data/mindmap.js'
import { layoutTree } from '../src/lib/mindmap.js'

const at = (p) => render(<MemoryRouter initialEntries={[p]}><App /></MemoryRouter>)
const h1 = () => screen.getByRole('heading', { level: 1 })
const view = () => screen.getByTestId('mm-viewport')
const k = () => Number(view().getAttribute('data-k'))
const nodeByLabel = (label) => screen.getByText(label, { selector: '[data-node] text, [data-node] tspan' }).closest('[data-node]')

test('menu has a Harita tab that opens the map page', () => {
  at('/task1')
  const nav = screen.getByRole('navigation', { name: 'Ana menü' })
  fireEvent.click(within(nav).getByRole('link', { name: 'Harita' }))
  expect(h1()).toHaveTextContent('Zihin haritası')
})

test('map page has no search box', () => {
  at('/mindmap')
  expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()
})

test('renders every node of the tree', () => {
  at('/mindmap')
  const expected = layoutTree(buildMindMap()).nodes.length
  expect(document.querySelectorAll('[data-node]')).toHaveLength(expected)
})

test('clicking a branch opens its page', () => {
  at('/mindmap')
  fireEvent.click(nodeByLabel('Task 2'))
  expect(h1()).toHaveTextContent(/Task 2/)
})

test('clicking a leaf opens its section', () => {
  at('/mindmap')
  fireEvent.click(nodeByLabel('Pie chart'))
  expect(screen.getByRole('heading', { level: 2, name: 'Pie chart' })).toBeInTheDocument()
})

test('Enter on a focused node opens its page', () => {
  at('/mindmap')
  fireEvent.keyDown(nodeByLabel('Alıştırma'), { key: 'Enter' })
  expect(h1()).toHaveTextContent('Alıştırma')
})

test('zoom buttons change the scale and Sığdır resets it', () => {
  at('/mindmap')
  expect(k()).toBe(1)
  fireEvent.click(screen.getByRole('button', { name: 'Yakınlaştır' }))
  expect(k()).toBeGreaterThan(1)
  fireEvent.click(screen.getByRole('button', { name: 'Uzaklaştır' }))
  fireEvent.click(screen.getByRole('button', { name: 'Uzaklaştır' }))
  expect(k()).toBeLessThan(1)
  fireEvent.click(screen.getByRole('button', { name: 'Sığdır' }))
  expect(k()).toBe(1)
})

test('mouse wheel zooms in and out', () => {
  at('/mindmap')
  const svg = screen.getByTestId('mm-svg')
  fireEvent.wheel(svg, { deltaY: -100, clientX: 10, clientY: 10 })
  expect(k()).toBeGreaterThan(1)
  fireEvent.wheel(svg, { deltaY: 100, clientX: 10, clientY: 10 })
  fireEvent.wheel(svg, { deltaY: 100, clientX: 10, clientY: 10 })
  expect(k()).toBeLessThan(1)
})

test('dragging pans without opening the node under the cursor', () => {
  at('/mindmap')
  const svg = screen.getByTestId('mm-svg')
  const before = view().getAttribute('transform')
  fireEvent.mouseDown(svg, { clientX: 100, clientY: 100, button: 0 })
  fireEvent.mouseMove(svg, { clientX: 160, clientY: 130 })
  fireEvent.mouseUp(svg, { clientX: 160, clientY: 130 })
  fireEvent.click(nodeByLabel('Task 2'))
  expect(h1()).toHaveTextContent('Zihin haritası')
  expect(view().getAttribute('transform')).not.toBe(before)
  fireEvent.click(nodeByLabel('Task 2'))
  expect(h1()).toHaveTextContent(/Task 2/)
})
