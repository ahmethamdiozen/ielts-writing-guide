import { useEffect, useRef, useState } from 'react'
import { categories, entries } from '../data/index.js'
import { useLocalStorage } from '../lib/useLocalStorage.js'
import { buildQuestions, checkAnswer, BLANK } from '../lib/practice.js'

const COUNT = 10
const fill = (q) => q.sentence.replace(BLANK, q.shown)

function Setup({ onStart }) {
  const [categoryId, setCategoryId] = useState('')
  const [mode, setMode] = useState('all')
  const [learned] = useLocalStorage('learned-v1', [])
  const [empty, setEmpty] = useState('')

  const start = (e) => {
    e.preventDefault()
    const ids = Array.isArray(learned) ? learned.filter((x) => typeof x === 'string') : []
    const onlyIds = mode === 'learned' ? ids : undefined
    const qs = buildQuestions(entries, { count: COUNT, categoryId: categoryId || undefined, onlyIds })
    if (qs.length === 0) {
      setEmpty(mode === 'learned' && ids.length === 0
        ? 'Henüz hiçbir kelimeyi “öğrendim” olarak işaretlemedin. Kelime bankasında işaretle, sonra tekrar dene.'
        : 'Bu seçimde soru bulunamadı. Başka bir kategori dene.')
      return
    }
    setEmpty('')
    onStart(qs)
  }

  return (
    <form className="practice-setup" onSubmit={start}>
      <h2>Boşluk doldurma</h2>
      <p className="lead">Örnek cümlelerden bir kelime silinir. Türkçe ipucuna ve ilk harfe bakarak kelimeyi yaz. Her oturumda en fazla {COUNT} soru var.</p>
      <label className="field">
        <span>Kategori</span>
        <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
          <option value="">Hepsi</option>
          {categories.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
        </select>
      </label>
      <fieldset className="field">
        <legend>Kelimeler</legend>
        <label><input type="radio" name="mode" checked={mode === 'all'} onChange={() => setMode('all')} /> Tüm kelimeler</label>
        <label><input type="radio" name="mode" checked={mode === 'learned'} onChange={() => setMode('learned')} /> Öğrendim dediklerim</label>
      </fieldset>
      {empty && <p className="empty" role="alert">{empty}</p>}
      <button type="submit" className="primary-btn">Başla</button>
    </form>
  )
}

function Quiz({ questions, onFinish }) {
  const [idx, setIdx] = useState(0)
  const [answer, setAnswer] = useState('')
  const [result, setResult] = useState(null)
  const [log, setLog] = useState([])
  const input = useRef(null)
  const q = questions[idx]
  const last = idx === questions.length - 1

  useEffect(() => { input.current?.focus() }, [idx])

  const submit = (e) => {
    e.preventDefault()
    if (!result) {
      const ok = checkAnswer(q, answer)
      setResult({ ok })
      setLog((l) => [...l, { q, answer, ok }])
      return
    }
    if (last) { onFinish(log); return }
    setIdx(idx + 1)
    setAnswer('')
    setResult(null)
  }

  return (
    <form className="practice-quiz" onSubmit={submit}>
      <p className="progress">Soru {idx + 1}/{questions.length}</p>
      <p className="blank-sentence" lang="en">{q.sentence}</p>
      <p className="hint">Türkçe: <strong>{q.hint}</strong> · İlk harf: <strong>{q.firstLetter}</strong></p>
      <label className="field">
        <span>Cevabın</span>
        <input ref={input} type="text" value={answer} disabled={!!result} autoComplete="off" autoCapitalize="off"
          spellCheck="false" onChange={(e) => setAnswer(e.target.value)} />
      </label>
      {result && (
        <div role="status" className={`feedback ${result.ok ? 'ok' : 'bad'}`}>
          {result.ok ? <strong>Doğru ✓</strong> : <strong>Doğru cevap: {q.shown}</strong>}
          <p lang="en">{fill(q)}</p>
          {!result.ok && <p className="muted">Yakın anlamlı başka kelimeler de bu cümleye uyabilir; örnek cümleyi esas al.</p>}
        </div>
      )}
      <button type="submit" className="primary-btn">{!result ? 'Kontrol et' : last ? 'Sonucu gör' : 'Sonraki'}</button>
    </form>
  )
}

function Summary({ log, onRetryWrong, onNew }) {
  const wrong = log.filter((l) => !l.ok)
  const score = log.length - wrong.length
  return (
    <div className="practice-summary">
      <h2>Sonuç</h2>
      <p className="score"><strong>{score} / {log.length}</strong> doğru</p>
      {wrong.length > 0 && (
        <>
          <h3>Yanlışların</h3>
          <ul className="examples">
            {wrong.map((l) => (
              <li key={l.q.id} lang="en">
                {fill(l.q)}
                <span className="muted"> — senin cevabın: {l.answer.trim() || '(boş)'}</span>
              </li>
            ))}
          </ul>
          <button type="button" className="primary-btn" onClick={() => onRetryWrong(wrong.map((l) => l.q))}>Yanlışları tekrar çöz</button>
        </>
      )}
      <button type="button" className="secondary-btn" onClick={onNew}>Yeni oturum</button>
    </div>
  )
}

export default function PracticePage() {
  const [phase, setPhase] = useState('setup')
  const [questions, setQuestions] = useState([])
  const [log, setLog] = useState([])
  const [run, setRun] = useState(0)

  const begin = (qs) => { setQuestions(qs); setRun((r) => r + 1); setPhase('quiz') }

  return (
    <div className="page page-3">
      <div className="page-head"><h1>Alıştırma</h1></div>
      <div className="layout layout-single">
        <main className="content">
          {phase === 'setup' && <Setup onStart={begin} />}
          {phase === 'quiz' && <Quiz key={run} questions={questions} onFinish={(l) => { setLog(l); setPhase('done') }} />}
          {phase === 'done' && <Summary log={log} onRetryWrong={begin} onNew={() => setPhase('setup')} />}
        </main>
      </div>
    </div>
  )
}
