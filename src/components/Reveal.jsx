import { useId, useState } from 'react'
import { useLocalStorage } from '../lib/useLocalStorage.js'

export function Reveal({ label = 'Cevabı göster', children }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  return (
    <div className="reveal">
      <button type="button" className="secondary-btn" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>
        {open ? 'Cevabı gizle' : label}
      </button>
      {open && <div id={id} className="reveal-body">{children}</div>}
    </div>
  )
}

const NOTES_KEY = 'walk-notes-v1'
const safe = (raw) => (raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : {})

export function Notes({ id, label = 'Önce kendin dene', rows = 3 }) {
  const [raw, setRaw] = useLocalStorage(NOTES_KEY, {})
  const notes = safe(raw)
  const value = typeof notes[id] === 'string' ? notes[id] : ''
  return (
    <label className="field notes">
      <span>{label}</span>
      <textarea rows={rows} value={value} onChange={(e) => setRaw({ ...notes, [id]: e.target.value })} lang="en" />
    </label>
  )
}
