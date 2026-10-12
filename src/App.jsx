import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import TopBar from './components/TopBar.jsx'
import Task1Page from './pages/Task1Page.jsx'
import Task2Page from './pages/Task2Page.jsx'
import PracticePage from './pages/PracticePage.jsx'
import ConnectPage from './pages/ConnectPage.jsx'
import Walk1Page from './pages/Walk1Page.jsx'
import Walk2Page from './pages/Walk2Page.jsx'
import PlanPage from './pages/PlanPage.jsx'
import MindMapPage from './pages/MindMapPage.jsx'

export default function App() {
  const [query, setQuery] = useState('')
  const { pathname } = useLocation()
  useEffect(() => { setQuery('') }, [pathname])
  return (
    <>
      <TopBar query={query} onQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Navigate to="/task1" replace />} />
        <Route path="/task1/:section?" element={<Task1Page query={query} />} />
        <Route path="/task2/:section?" element={<Task2Page query={query} />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/connect/:chart?" element={<ConnectPage />} />
        <Route path="/t1-yol/:chart?" element={<Walk1Page />} />
        <Route path="/t2-yol/:topic?" element={<Walk2Page />} />
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/mindmap" element={<MindMapPage />} />
        <Route path="*" element={<Navigate to="/task1" replace />} />
      </Routes>
    </>
  )
}
