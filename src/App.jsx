import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import TopBar from './components/TopBar.jsx'
import Task1Page from './pages/Task1Page.jsx'
import Task2Page from './pages/Task2Page.jsx'

export default function App() {
  const [query, setQuery] = useState('')
  return (
    <>
      <TopBar query={query} onQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Navigate to="/task1" replace />} />
        <Route path="/task1/:section?" element={<Task1Page query={query} />} />
        <Route path="/task2/:section?" element={<Task2Page query={query} />} />
        <Route path="*" element={<Navigate to="/task1" replace />} />
      </Routes>
    </>
  )
}
