import { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import SearchBox from './SearchBox.jsx'
import { useLocalStorage } from '../lib/useLocalStorage.js'

const prefersDark = () => {
  try { return !!window.matchMedia?.('(prefers-color-scheme: dark)').matches } catch { return false }
}

export default function TopBar({ query, onQuery }) {
  const [theme, setTheme] = useLocalStorage('theme', 'auto')
  const { pathname } = useLocation()

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
        <NavLink to="/practice" className={({ isActive }) => `tab tab-3${isActive ? ' active' : ''}`}>Alıştırma</NavLink>
        <NavLink to="/connect" className={({ isActive }) => `tab tab-3${isActive ? ' active' : ''}`}>Bağlaç</NavLink>
        <NavLink to="/t1-yol" className={({ isActive }) => `tab tab-1${isActive ? ' active' : ''}`}>T1 Adım Adım</NavLink>
        <NavLink to="/t2-yol" className={({ isActive }) => `tab tab-2${isActive ? ' active' : ''}`}>T2 Adım Adım</NavLink>
        <NavLink to="/plan" className={({ isActive }) => `tab tab-2${isActive ? ' active' : ''}`}>Plan</NavLink>
        <NavLink to="/mindmap" className={({ isActive }) => `tab tab-1${isActive ? ' active' : ''}`}>Harita</NavLink>
      </nav>
      {(pathname.startsWith('/practice') || pathname.startsWith('/connect') || pathname.startsWith('/mindmap') || pathname.startsWith('/plan') || pathname.includes('-yol')) ? <div className="search" /> : <SearchBox query={query} onQuery={onQuery} />}
      <button type="button" className="theme-btn" onClick={toggle} title="Temayı değiştir">
        <span className="visually-hidden">Tema: </span>
        {effective === 'dark' ? 'Açık' : 'Koyu'}
      </button>
    </header>
  )
}
