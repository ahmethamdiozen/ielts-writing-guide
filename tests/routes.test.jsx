import { render, screen, fireEvent, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App.jsx'

const at = (p) => render(<MemoryRouter initialEntries={[p]}><App /></MemoryRouter>)
const h1 = () => screen.getByRole('heading', { level: 1 })
const search = (q) => fireEvent.change(screen.getByRole('searchbox'), { target: { value: q } })

test('root redirects to task1', () => { at('/'); expect(h1()).toHaveTextContent(/Task 1/i) })
test('task2 route renders', () => { at('/task2'); expect(h1()).toHaveTextContent(/Task 2/i) })
test('unknown route falls back to task1', () => { at('/nope/zzz'); expect(h1()).toHaveTextContent(/Task 1/i) })

describe('top bar', () => {
  test('has Task 1 and Task 2 links', () => {
    at('/task1')
    const nav = screen.getByRole('navigation', { name: 'Ana menü' })
    expect(within(nav).getByRole('link', { name: 'Task 1' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Task 2' })).toBeInTheDocument()
  })
  test('theme toggle sets data-theme', () => {
    at('/task1')
    fireEvent.click(screen.getByRole('button', { name: /tema/i }))
    expect(['light', 'dark']).toContain(document.documentElement.dataset.theme)
  })
})

describe('task 1 page', () => {
  test('category shows vocabulary card', () => {
    at('/task1/comparison')
    expect(screen.getByRole('heading', { level: 3, name: 'while' })).toBeInTheDocument()
  })
  test('unknown section falls back to approach', () => {
    at('/task1/does-not-exist')
    expect(screen.getByRole('heading', { level: 2, name: 'Yaklaşım' })).toBeInTheDocument()
  })
  test('search lists matching words from any section', () => {
    at('/task1/approach')
    search('whil')
    expect(screen.getByRole('heading', { level: 3, name: 'while' })).toBeInTheDocument()
  })
  test('search with regex chars and no match shows empty state', () => {
    at('/task1/approach')
    search('(*')
    expect(screen.getByText('Sonuç bulunamadı')).toBeInTheDocument()
  })
  test('learned toggle updates counter', () => {
    at('/task1/comparison')
    const progress = () => screen.getByLabelText('İlerleme')
    expect(progress()).toHaveTextContent('0/12')
    fireEvent.click(screen.getAllByRole('button', { name: /öğrendim/i })[0])
    expect(progress()).toHaveTextContent('1/12')
  })
  test.each(['{}', '5', 'null', '"abc"'])('corrupt learned storage (%s) does not crash on toggle', (raw) => {
    localStorage.setItem('learned-v1', raw)
    at('/task1/comparison')
    fireEvent.click(screen.getAllByRole('button', { name: /öğrendim/i })[0])
    expect(h1()).toHaveTextContent(/Task 1/i)
    expect(screen.getByLabelText('İlerleme')).toHaveTextContent('1/12')
  })
  test('chart guide renders sample', () => {
    at('/task1/chart-pie')
    expect(screen.getByRole('heading', { level: 2, name: 'Pie chart' })).toBeInTheDocument()
  })
})

describe('task 2 page', () => {
  test('essay type shows name and sample question', () => {
    at('/task2/discussion')
    expect(screen.getByRole('heading', { level: 2, name: /Discussion/ })).toBeInTheDocument()
    expect(screen.getByText(/universities should provide graduates/i)).toBeInTheDocument()
  })
  test('unknown section falls back to general', () => {
    at('/task2/zzz')
    expect(screen.getByRole('heading', { level: 2, name: 'Genel rehber' })).toBeInTheDocument()
  })
  test('search surfaces phrase from another essay type', () => {
    at('/task2/general')
    search('outweigh')
    const results = within(screen.getByRole('region', { name: 'Arama sonuçları' }))
    expect(results.getAllByText('Advantages & Disadvantages').length).toBeGreaterThan(0)
  })
  test('search empty state', () => {
    at('/task2/general')
    search('(*')
    expect(screen.getByText('Sonuç bulunamadı')).toBeInTheDocument()
  })
})

describe('practice page', () => {
  test('tab exists and setup shows start button', () => {
    at('/practice')
    expect(h1()).toHaveTextContent(/Alıştırma/i)
    expect(screen.getByRole('button', { name: 'Başla' })).toBeInTheDocument()
  })
  test('full session: answer, finish, see score', () => {
    at('/practice')
    fireEvent.click(screen.getByRole('button', { name: 'Başla' }))
    for (let i = 0; i < 10; i++) {
      fireEvent.change(screen.getByLabelText('Cevabın'), { target: { value: 'zzz' } })
      fireEvent.click(screen.getByRole('button', { name: 'Kontrol et' }))
      expect(screen.getByRole('status')).toHaveTextContent(/Doğru cevap/)
      fireEvent.click(screen.getByRole('button', { name: i === 9 ? 'Sonucu gör' : 'Sonraki' }))
    }
    expect(screen.getByRole('heading', { level: 2, name: /Sonuç/ })).toBeInTheDocument()
    expect(screen.getByText(/0\s*\/\s*10/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Yanlışları tekrar çöz/ })).toBeInTheDocument()
  })
  test('learned-only mode with nothing learned shows guidance, no crash', () => {
    at('/practice')
    fireEvent.click(screen.getByLabelText(/Öğrendim dediklerim/))
    fireEvent.click(screen.getByRole('button', { name: 'Başla' }))
    expect(screen.getByText(/henüz .* işaretlemedin/i)).toBeInTheDocument()
  })
  test('corrupt learned storage does not crash practice', () => {
    localStorage.setItem('learned-v1', '{}')
    at('/practice')
    fireEvent.click(screen.getByLabelText(/Öğrendim dediklerim/))
    fireEvent.click(screen.getByRole('button', { name: 'Başla' }))
    expect(h1()).toHaveTextContent(/Alıştırma/i)
  })
})

describe('polish', () => {
  test('search clears when navigating to another section', () => {
    at('/task1/approach')
    search('whil')
    fireEvent.click(screen.getByRole('link', { name: /Benzerlik/ }))
    expect(screen.getByRole('searchbox')).toHaveValue('')
  })
  test('english examples are marked lang=en', () => {
    const { container } = at('/task1/comparison')
    expect(container.querySelector('.examples li[lang="en"]')).not.toBeNull()
  })
  test('side nav group titles are headings', () => {
    at('/task1/approach')
    expect(screen.getByRole('heading', { level: 2, name: 'Kelime bankası' })).toBeInTheDocument()
  })
})
