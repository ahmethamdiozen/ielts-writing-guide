import { Navigate, useParams } from 'react-router-dom'
import SideNav from '../components/SideNav.jsx'
import EssayView from '../components/EssayView.jsx'
import Callout from '../components/Callout.jsx'
import { essayTypes, general } from '../data/index.js'
import { matchesQuery } from '../lib/search.js'
import { Highlighted } from '../lib/highlight.jsx'

function General() {
  return (
    <div>
      <h2>Genel rehber</h2>
      <p className="lead">Task 2'de 40 dakikan var ve en az 250 kelime yazacaksın. Task 2, yazma puanının üçte ikisini belirler.</p>

      <h3>Puanlama kriterleri ve band 9</h3>
      <div className="criteria">
        {general.criteria.map((c) => (
          <section key={c.name} className="criterion">
            <h4>{c.name} <span className="muted">{c.tr}</span></h4>
            <p className="band9-title">Band 9 ne ister?</p>
            <ul>{c.band9.map((b) => <li key={b}>{b}</li>)}</ul>
            <p className="band9-title">Nasıl başarırsın?</p>
            <ul>{c.tips.map((t) => <li key={t}>{t}</li>)}</ul>
          </section>
        ))}
      </div>

      <h3>Fikir üretme</h3>
      <div className="criteria">
        {general.ideas.map((i) => (
          <section key={i.topic} className="criterion">
            <h4>{i.topic}</h4>
            <ul>{i.arguments.map((a) => <li key={a}>{a}</li>)}</ul>
          </section>
        ))}
      </div>

      <h3>Thesis formülleri</h3>
      <ul className="examples">{general.thesisFormulas.map((t) => <li key={t}>{t}</li>)}</ul>
      <h3>Tutarlılık ve bağlantı</h3>
      <ul>{general.cohesion.map((t) => <li key={t}>{t}</li>)}</ul>
      <h3>Dil bilgisi çeşitliliği</h3>
      <ul>{general.grammarRange.map((t) => <li key={t}>{t}</li>)}</ul>
      <h3>Zaman yönetimi</h3>
      <ul>{general.timing.map((t) => <li key={t}>{t}</li>)}</ul>
      <h3>Göndermeden önce kontrol listesi</h3>
      <ul className="checklist">{general.checklist.map((t) => <li key={t}>{t}</li>)}</ul>
      <Callout tone="tip" title="İpucu">Yazdıktan sonra önce soruyu, sonra giriş ve sonucu yeniden oku. Soruya cevap vermediysen en çok puan kaybettiğin yer burasıdır.</Callout>
    </div>
  )
}

function results(q) {
  const out = []
  for (const t of essayTypes) {
    for (const p of t.phrases) if (matchesQuery(`${p.en} ${p.tr} ${p.use}`, q)) out.push({ key: `${t.id}-p-${p.en}`, label: t.name, en: p.en, tr: p.tr })
    for (const th of t.thesis) if (matchesQuery(th, q)) out.push({ key: `${t.id}-t-${th}`, label: t.name, en: th })
  }
  for (const i of general.ideas) {
    for (const a of i.arguments) if (matchesQuery(`${i.topic} ${a}`, q)) out.push({ key: `idea-${i.topic}-${a}`, label: i.topic, en: a })
  }
  return out
}

export default function Task2Page({ query }) {
  const { section = 'general' } = useParams()
  const q = query.trim()
  const type = essayTypes.find((t) => t.id === section)
  if (section !== 'general' && !type) return <Navigate to="/task2/general" replace />

  const groups = [
    { title: 'Rehber', items: [{ id: 'general', label: 'Genel rehber' }] },
    { title: 'Essay türleri', items: essayTypes.map((t) => ({ id: t.id, label: t.name })) },
  ]

  let body
  if (q) {
    const found = results(q)
    body = (
      <section aria-label="Arama sonuçları">
        <h2>Arama sonuçları</h2>
        {found.length === 0 ? <p className="empty">Sonuç bulunamadı</p> : (
          <ul className="phrases">
            {found.map((r) => (
              <li key={r.key}>
                <span className="phrase-en"><Highlighted text={r.en} terms={[q]} /></span>
                {r.tr && <span className="phrase-tr">{r.tr}</span>}
                <span className="tag">{r.label}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    )
  } else if (type) {
    body = <EssayView type={type} query="" />
  } else {
    body = <General />
  }

  return (
    <div className="page page-2">
      <div className="page-head">
        <h1>Task 2 · Essay</h1>
      </div>
      <div className="layout">
        <SideNav base="/task2" groups={groups} />
        <main className="content">{body}</main>
      </div>
    </div>
  )
}
