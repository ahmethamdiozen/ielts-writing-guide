import { Navigate, useParams, Link } from 'react-router-dom'
import SideNav from '../components/SideNav.jsx'
import WordCard from '../components/WordCard.jsx'
import Callout from '../components/Callout.jsx'
import { categories, entries, overview, charts } from '../data/index.js'
import { useLocalStorage } from '../lib/useLocalStorage.js'
import { matchesQuery } from '../lib/search.js'

const catTitle = Object.fromEntries(categories.map((c) => [c.id, c.title]))

const searchText = (e) => [e.term, ...(e.forms ?? []), e.tr, e.use, e.note ?? '', ...e.examples].join(' ')

function Approach() {
  return (
    <div>
      <h2>Yaklaşım</h2>
      <p className="lead">Task 1'de 20 dakikan var, en az 150 kelime yazacaksın. Amaç yorum yapmak değil, veriyi doğru seçip karşılaştırmak.</p>

      <h3>Dört paragraf yapısı</h3>
      <ol className="steps">
        {overview.template.map((t) => (
          <li key={t.part}>
            <strong>{t.part}</strong>
            <p>{t.goal}</p>
            <p className="example-line" lang="en">{t.example}</p>
          </li>
        ))}
      </ol>

      <h3>Overview kuralları</h3>
      <ul>{overview.overviewRules.map((r) => <li key={r}>{r}</li>)}</ul>

      <h3>Puanlama kriterleri</h3>
      <div className="criteria">
        {overview.criteria.map((c) => (
          <section key={c.name} className="criterion">
            <h4>{c.name} <span className="muted">{c.tr}</span></h4>
            <ul>{c.tips.map((t) => <li key={t}>{t}</li>)}</ul>
          </section>
        ))}
      </div>

      <h3>Zaman yönetimi</h3>
      <ul>{overview.timing.map((t) => <li key={t}>{t}</li>)}</ul>

      <h3>Sık yapılan hatalar</h3>
      {overview.mistakes.map((m) => <Callout key={m} tone="warn">{m}</Callout>)}
    </div>
  )
}

function ChartGuide({ chart }) {
  const words = chart.language.map((id) => entries.find((e) => e.id === id)).filter(Boolean)
  return (
    <div>
      <h2>{chart.title}</h2>
      <p className="lead">{chart.tr}</p>
      <h3>Overview'e ne yazmalı?</h3>
      <ul>{chart.overviewInclude.map((x) => <li key={x}>{x}</li>)}</ul>
      <h3>Verileri nasıl grupla?</h3>
      <ul>{chart.grouping.map((x) => <li key={x}>{x}</li>)}</ul>
      <h3>Kullanışlı kelimeler</h3>
      <div className="tags">
        {words.map((w) => (
          <Link key={w.id} className="tag tag-link" to={`/task1/${w.category}`}>{w.term}</Link>
        ))}
      </div>
      <h3>Örnek soru ve model cevap</h3>
      <p className="prompt" lang="en">{chart.sample.prompt}</p>
      <div className="sample" lang="en">
        {chart.sample.text.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </div>
  )
}

export default function Task1Page({ query }) {
  const { section = 'approach' } = useParams()
  const [learned, setLearned] = useLocalStorage('learned-v1', [])
  const clean = (l) => (Array.isArray(l) ? l.filter((x) => typeof x === 'string') : [])
  const toggle = (id) => setLearned((l) => {
    const a = clean(l)
    return a.includes(id) ? a.filter((x) => x !== id) : [...a, id]
  })
  const learnedSet = new Set(clean(learned))
  const q = query.trim()

  const groups = [
    { title: 'Rehber', items: [{ id: 'approach', label: 'Yaklaşım' }] },
    {
      title: 'Kelime bankası',
      items: categories.map((c) => {
        const all = entries.filter((e) => e.category === c.id)
        return { id: c.id, label: c.title, count: `${all.filter((e) => learnedSet.has(e.id)).length}/${all.length}` }
      }),
    },
    { title: 'Grafik türleri', items: charts.map((c) => ({ id: `chart-${c.id}`, label: c.title })) },
  ]

  const cat = categories.find((c) => c.id === section)
  const chart = section.startsWith('chart-') ? charts.find((c) => `chart-${c.id}` === section) : null
  if (section !== 'approach' && !cat && !chart) return <Navigate to="/task1/approach" replace />

  let body
  if (q) {
    const found = entries.filter((e) => matchesQuery(searchText(e), q))
    body = (
      <section aria-label="Arama sonuçları">
        <h2>Arama sonuçları</h2>
        {found.length === 0 ? <p className="empty">Sonuç bulunamadı</p> : (
          <div className="cards">
            {found.map((e) => (
              <WordCard key={e.id} entry={e} query={q} categoryTitle={catTitle[e.category]}
                learned={learnedSet.has(e.id)} onToggle={toggle} />
            ))}
          </div>
        )}
      </section>
    )
  } else if (cat) {
    const list = entries.filter((e) => e.category === cat.id)
    const done = list.filter((e) => learnedSet.has(e.id)).length
    body = (
      <section>
        <h2>{cat.title}</h2>
        <p className="lead">{cat.desc}</p>
        <p className="progress" aria-label="İlerleme"><span>{done}/{list.length}</span> öğrenildi</p>
        <div className="cards">
          {list.map((e) => <WordCard key={e.id} entry={e} learned={learnedSet.has(e.id)} onToggle={toggle} />)}
        </div>
      </section>
    )
  } else if (chart) {
    body = <ChartGuide chart={chart} />
  } else {
    body = <Approach />
  }

  return (
    <div className="page page-1">
      <div className="page-head">
        <h1>Task 1 · Veri anlatımı</h1>
      </div>
      <div className="layout">
        <SideNav base="/task1" groups={groups} />
        <main className="content">{body}</main>
      </div>
    </div>
  )
}
