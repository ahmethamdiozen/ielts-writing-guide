import { useNavigate, useParams } from 'react-router-dom'
import charts from '../data/connectorCharts.js'
import { relations } from '../data/connectors.js'
import ChartView from '../components/Charts.jsx'

function Marked({ text }) {
  return text.split(/\[\[(.+?)\]\]/).map((chunk, i) => (i % 2 === 1 ? <mark key={i}>{chunk}</mark> : <span key={i}>{chunk}</span>))
}

const template = (t) => t.replace(/\{A\}/g, 'Sentence 1').replace(/\{a\}/g, 'sentence 1').replace(/\{B\}/g, 'Sentence 2').replace(/\{b\}/g, 'sentence 2')

function Step({ step }) {
  return (
    <article className="step-card">
      <h3>{step.rel}</h3>
      <p className="muted">Chart'tan iki ayrı cümle:</p>
      <ul className="raw" lang="en">
        <li>{step.a}</li>
        <li>{step.b}</li>
      </ul>
      <p className="muted">Bağlayınca:</p>
      <p className="linked" lang="en"><Marked text={step.linked} /></p>
      <p>{step.why}</p>
      <p className="muted">Aynı cümleyi şöyle de bağlayabilirsin:</p>
      <ul className="alts" lang="en">
        {step.alts.map((alt) => <li key={alt}><Marked text={alt} /></li>)}
      </ul>
    </article>
  )
}

function Reference() {
  return (
    <details className="reference">
      <summary>Tüm bağlaçlar ve noktalama kuralları</summary>
      {relations.map((r) => (
        <section key={r.id}>
          <h3>{r.title}</h3>
          <p className="muted">{r.tr}</p>
          <ul className="alts">
            {r.patterns.map((p) => (
              <li key={p.t}>
                <span lang="en"><Marked text={template(p.t)} /></span>
                <span className="muted"> — {p.note}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </details>
  )
}

export default function ConnectPage() {
  const { chart } = useParams()
  const navigate = useNavigate()
  const item = charts.find((c) => c.id === chart) ?? charts[0]
  const id = item.id
  const setId = (next) => navigate(`/connect/${next}`)
  return (
    <div className="page page-3">
      <div className="page-head"><h1>Bağlaç</h1></div>
      <div className="layout layout-single">
        <main className="content">
          <p className="lead">Bir chart seç. Chart'tan çıkan veri cümlelerini hangi bağlaçla, nasıl birleştireceğini adım adım göster.</p>
          <div className="chips" role="group" aria-label="Chart türü">
            {charts.map((c) => (
              <button key={c.id} type="button" aria-pressed={c.id === id}
                className={`chip${c.id === id ? ' on' : ''}`} onClick={() => setId(c.id)}>{c.title}</button>
            ))}
          </div>
          <h2>{item.title}</h2>
          <p className="prompt" lang="en">{item.prompt}</p>
          <ChartView item={item} />
          <h2>Cümleleri bağla</h2>
          <div className="link-steps">
            {item.steps.map((s) => <Step key={s.linked} step={s} />)}
          </div>
          <h2>Hepsi bir arada</h2>
          <p className="muted">Bağlanmış cümleleri arka arkaya koyunca chart'ın bir body paragrafı oluşur.</p>
          <p className="sample" lang="en">
            {item.steps.map((s, i) => <span key={s.linked}>{i > 0 ? ' ' : ''}<Marked text={s.linked} /></span>)}
          </p>
          <Reference />
        </main>
      </div>
    </div>
  )
}
