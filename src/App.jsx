import { Routes, Route, Navigate } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/task1" replace />} />
      <Route path="/task1/:section?" element={<h1>Task 1</h1>} />
      <Route path="/task2/:section?" element={<h1>Task 2</h1>} />
      <Route path="*" element={<Navigate to="/task1" replace />} />
    </Routes>
  )
}
