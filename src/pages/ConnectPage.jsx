import { useMemo, useState } from 'react'
import { relations, pairs } from '../data/connectors.js'
import { combine } from '../lib/connect.js'

const byId = Object.fromEntries(relations.map((r) => [r.id, r]))
const shuffle = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function Results({ relation, a, b }) {
  const items = useMemo(() => combine(relation, a, b), [relation, a, b])
  if (items.length === 0) return null
  return (
    <ul className="combos">
      {items.map((it) => (
        <li key={it.id} className="combo">
          <p className="combo-text" lang="en">
            {it.parts.map((p, i) => (p.mark ? <mark key={i}>{p.text}</mark> : <span key={i}>{p.text}</span>))}
          </p>
          <p className="muted">{it.note}</p>
        </li>
      ))}
    </ul>
  )
}

function RelationPicker({ value, onChange, name }) {
  return (
    <fieldset className="field">
      <legend>İki cümle arasındaki ilişki</legend>
      <div className="chips">
        {relations.map((r) => (
          <label key={r.id} className={`chip${value === r.id ? ' on' : ''}`}>
            <input type="radio" name={name} checked={value === r.id} onChange={() => onChange(r.id)} />
            {r.title}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function Combine() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [rel, setRel] = useState('contrast')
  const relation = byId[rel]
  const loadExample = () => {
    const p = pairs[Math.floor(Math.random() * pairs.length)]
    setA(p.a); setB(p.b); setRel(p.answer)
  }
  return (
    <section>
      <h2>Cümleleri birleştir</h2>
      <p className="lead">İki veri cümleni yaz, aralarındaki ilişkiyi seç. Aynı iki cümleyi farklı bağlaçlarla birleştirmenin yollarını ve her birinin noktalama kuralını gösteririm.</p>
      <label className="field">
        <span>1. cümle</span>
        <textarea rows="2" value={a} onChange={(e) => setA(e.target.value)} lang="en" placeholder="Internet use in Sweden was 92%." />
      </label>
      <label className="field">
        <span>2. cümle</span>
        <textarea rows="2" value={b} onChange={(e) => setB(e.target.value)} lang="en" placeholder="Internet use in India was only 45%." />
      </label>
      <div className="row">
        <button type="button" className="secondary-btn" onClick={() => { setA(b); setB(a) }}>Sırayı değiştir</button>
        <button type="button" className="secondary-btn" onClick={loadExample}>Örnek yükle</button>
      </div>
      <RelationPicker value={rel} onChange={setRel} name="relation" />
      <p className="muted">{relation.tr}</p>
      {(!a.trim() || !b.trim())
        ? <p className="empty">Birleştirmek için iki cümleyi de yaz.</p>
        : <Results relation={relation} a={a} b={b} />}
      <p className="muted">Özel isimle başlayan cümlelerde (örneğin Sweden) büyük harfi kontrol et. Bağlaçtan sonraki cümlenin ilk harfi otomatik küçülür.</p>
    </section>
  )
}

function Quiz() {
  const [order, setOrder] = useState(() => shuffle(pairs))
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const done = idx >= order.length
  const q = order[idx]
  const ok = picked && (picked === q.answer || (q.also ?? []).includes(picked))

  const choose = (id) => {
    if (picked) return
    setPicked(id)
    if (id === q.answer || (q.also ?? []).includes(id)) setScore((s) => s + 1)
  }
  const restart = () => { setOrder(shuffle(pairs)); setIdx(0); setPicked(null); setScore(0) }

  if (done) {
    return (
      <section>
        <h2>Sonuç</h2>
        <p className="score"><strong>{score} / {order.length}</strong> doğru</p>
        <button type="button" className="primary-btn" onClick={restart}>Yeniden başla</button>
      </section>
    )
  }
  return (
    <section>
      <h2>İlişkiyi bul</h2>
      <p className="progress">Soru {idx + 1}/{order.length}</p>
      <p className="blank-sentence" lang="en">{q.a}<br />{q.b}</p>
      <p>Bu iki cümle arasındaki ilişki hangisi?</p>
      <div className="chips">
        {relations.map((r) => (
          <button key={r.id} type="button" disabled={!!picked}
            className={`chip${picked === r.id ? ' on' : ''}`} onClick={() => choose(r.id)}>{r.title}</button>
        ))}
      </div>
      {picked && (
        <div role="status" className={`feedback ${ok ? 'ok' : 'bad'}`}>
          <strong>{ok ? 'Doğru ✓' : `Doğru cevap: ${byId[q.answer].title}`}</strong>
          <p>{q.why}</p>
          <p className="muted">Bu ilişki için birleştirme yolları:</p>
          <Results relation={byId[q.answer]} a={q.a} b={q.b} />
        </div>
      )}
      {picked && (
        <button type="button" className="primary-btn" onClick={() => { setIdx(idx + 1); setPicked(null) }}>
          {idx === order.length - 1 ? 'Sonucu gör' : 'Sonraki'}
        </button>
      )}
    </section>
  )
}

export default function ConnectPage() {
  const [mode, setMode] = useState('combine')
  return (
    <div className="page page-3">
      <div className="page-head"><h1>Bağlaç</h1></div>
      <div className="layout layout-single">
        <main className="content">
          <div className="chips mode-switch" role="group" aria-label="Mod">
            <button type="button" className={`chip${mode === 'combine' ? ' on' : ''}`} aria-pressed={mode === 'combine'} onClick={() => setMode('combine')}>Birleştir</button>
            <button type="button" className={`chip${mode === 'quiz' ? ' on' : ''}`} aria-pressed={mode === 'quiz'} onClick={() => setMode('quiz')}>İlişkiyi bul</button>
          </div>
          {mode === 'combine' ? <Combine /> : <Quiz />}
        </main>
      </div>
    </div>
  )
}
