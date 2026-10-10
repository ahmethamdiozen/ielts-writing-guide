import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App.jsx'

const at = (p) => render(<MemoryRouter initialEntries={[p]}><App /></MemoryRouter>)

test('root redirects to task1', () => { at('/'); expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Task 1/i) })
test('task2 route renders', () => { at('/task2'); expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Task 2/i) })
test('unknown route falls back to task1', () => { at('/nope/zzz'); expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Task 1/i) })
