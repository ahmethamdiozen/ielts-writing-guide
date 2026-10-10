import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import SearchBox from './SearchBox.jsx'
import { useLocalStorage } from '../lib/useLocalStorage.js'

const prefersDark = () => {
  try { return !!window.matchMedia?.('(prefers-color-scheme: dark)').matches } catch { return false }
}

export default function TopBar({ query, onQuery }) {
  const [theme, setTheme] = useLocalStorage('theme', 'auto')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light' || theme === 'dark') root.dataset.theme = theme
    else delete root.dataset.theme
  }, [theme])

  const effective = theme === 'auto' ? (prefersDark() ? 'dark' : 'light') : theme
  const toggle = () => setTheme(effective === 'dark' ? 'light' : 'dark')

  return (
    <header className="topbar">
      <div className="brand">IELTS Writing</div>
      <nav className="tasks" aria-label="Ana menü">
        <NavLink to="/task1" className={({ isActive }) => `tab tab-1${isActive ? ' active' : ''}`}>Task 1</NavLink>
        <NavLink to="/task2" className={({ isActive }) => `tab tab-2${isActive ? ' active' : ''}`}>Task 2</NavLink>
      </nav>
      <SearchBox query={query} onQuery={onQuery} />
      <button type="button" className="theme-btn" onClick={toggle} aria-label="Temayı değiştir" title="Temayı değiştir">
        {effective === 'dark' ? 'Açık' : 'Koyu'}
      </button>
    </header>
  )
}
