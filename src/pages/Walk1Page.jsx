import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import charts from '../data/walk1/index.js'
import ChartView from '../components/Charts.jsx'
import Marked, { plain, wordCount } from '../components/Marked.jsx'
import { Reveal, Notes } from '../components/Reveal.jsx'
import Callout from '../components/Callout.jsx'
import EssayReview from '../components/EssayReview.jsx'

const TAGS = {
  highest: 'En yüksek', lowest: 'En düşük', increase: 'Artış', decrease: 'Azalış', stable: 'Sabit',
  overtake: 'Sıra değişimi', contrast: 'Karşıtlık', similarity: 'Benzerlik', detail: 'Küçük ayrıntı', compare: 'Karşılaştırma', step: 'Aşama', sequence: 'Sıra', trend: 'Genel eğilim',
}
const Tag = ({ tag }) => <span className={`tagchip tag-${tag}`}>{TAGS[tag] ?? tag}</span>

function Draw({ item }) {
  if (item.kind === 'mixed') {
    return item.chart.parts.map((p, i) => (
      <div key={i}>
        <ChartView item={{ kind: p.kind, chart: p.chart, alt: p.alt }} />
      </div>
    ))
  }
  return <ChartView item={item} />
}

const byId = (list) => Object.fromEntries(list.map((x) => [x.id, x]))

function Section({ n, title, children }) {
  return (
    <section className="walk-step" aria-labelledby={`w-${n}`}>
      <h2 id={`w-${n}`}><span className="walk-num" aria-hidden="true">{n}</span> {title}</h2>
      {children}
    </section>
  )
}

function Placement({ item }) {
  const [picks, setPicks] = useState({})
  const answered = Object.keys(picks).length
  return (
    <>
      <p>Her cümle hangi paragrafa girer? Bir tane seç; hemen geri bildirim alırsın.</p>
      <ul className="place-list">
        {item.units.map((u) => {
          const pick = picks[u.id]
          const ok = pick === u.para
          return (
            <li key={u.id} className="place-item">
              <p className="linked" lang="en">{plain(u.text)}</p>
              <div className="chips" role="group" aria-label="Paragraf">
                {['body1', 'body2'].map((b) => (
                  <button key={b} type="button" disabled={!!pick} className={`chip${pick === b ? ' on' : ''}`}
                    onClick={() => setPicks({ ...picks, [u.id]: b })}>{b === 'body1' ? 'Body 1' : 'Body 2'}</button>
                ))}
              </div>
              {pick && (
                <p role="status" className={`feedback ${ok ? 'ok' : 'bad'}`}>
                  <strong>{ok ? 'Doğru ✓' : `Daha uygun: ${u.para === 'body1' ? 'Body 1' : 'Body 2'}`}</strong>{' '}
                  {item.bodyWhy[u.para]}
                </p>
              )}
            </li>
          )
        })}
      </ul>
      {answered === item.units.length && <p className="muted">Hepsini yerleştirdin. Paragraf mantığı: farklı gruplama da kabul edilir, ama her paragrafın tek bir fikri olsun.</p>}
    </>
  )
}

const CHECK = [
  'Introduction soruyu kopyalamadan parafraz ediyor.',
  'Overview var ve rakam içermiyor.',
  'Ana rakamlar chart ile birebir uyumlu.',
  'Her paragrafın tek bir fikri var.',
  'En az üç farklı bağlaç kullanıldı ve tekrar yok.',
  'Zaman doğru (geçmiş veri için past simple, "had overtaken" gibi past perfect).',
  'Kelime sayısı 150\'nin üzerinde.',
]

function FullText({ item }) {
  const [shown, setShown] = useState({})
  const b1 = item.units.filter((u) => u.para === 'body1')
  const b2 = item.units.filter((u) => u.para === 'body2')
  const paras = [
    ['Introduction', item.intro.text],
    ['Overview', item.overview.text],
    ['Body 1', b1.map((u) => u.text).join(' ')],
    ['Body 2', b2.map((u) => u.text).join(' ')],
  ]
  const total = paras.reduce((n, [, t]) => n + wordCount(t), 0)
  return (
    <>
      <div className="sample" lang="en">
        {paras.map(([name, t]) => <p key={name}><Marked text={t} /></p>)}
      </div>
      <p className="muted">{total} kelime. Task 1 için en az 150 gerekir; 160–190 band 7 için rahat bir hedeftir.</p>
      <h3>Band 7 kontrol listesi</h3>
      <ul className="checklist">
        {CHECK.map((c) => (
          <li key={c}>
            <label><input type="checkbox" checked={!!shown[c]} onChange={() => setShown({ ...shown, [c]: !shown[c] })} /> {c}</label>
          </li>
        ))}
      </ul>
    </>
  )
}

export default function Walk1Page() {
  const { chart } = useParams()
  const navigate = useNavigate()
  const item = charts.find((c) => c.id === chart) ?? charts[0]
  const F = byId(item.findings)
  const used = item.findings.filter((f) => f.use)
  const skipped = item.findings.filter((f) => !f.use)
  return (
    <div className="page page-3">
      <div className="page-head"><h1>Task 1 Adım Adım</h1></div>
      <div className="layout layout-single">
        <main className="content">
          <p className="lead">Chart'tan tam metne giden yolu yedi adımda göster. Her adımda önce kendin dene, sonra cevabı aç. Cevaplar band 7 seviyesindedir.</p>
          <div className="chips" role="group" aria-label="Chart seç">
            {charts.map((c) => (
              <button key={c.id} type="button" aria-pressed={c.id === item.id} className={`chip${c.id === item.id ? ' on' : ''}`}
                onClick={() => navigate(`/t1-yol/${c.id}`)}>{c.title}</button>
            ))}
          </div>
          <p className="prompt" lang="en">{item.prompt}</p>
          <Draw item={item} />
          <p className="muted">{item.source}</p>
          {item.review && (
            <Callout title={`Bu chart'a senin cevabın var: band ${item.review.band}`}>
              <p>Önce adımları kendin dene. Sonra 8. adımda mock sınav cevabının nerede puan kaybettirdiğini cümle cümle gör.</p>
              <button type="button" className="secondary-btn" onClick={() => document.getElementById('w-8')?.scrollIntoView({ behavior: 'smooth' })}>
                8. adıma git
              </button>
            </Callout>
          )}

          <Section n={1} title="Chart'ı oku">
            <Notes id={`${item.id}-1`} label="Konu, birim ve zaman aralığını yaz" />
            <Reveal>
              <dl className="qa">
                {item.read.map((r) => <div key={r.q}><dt>{r.q}</dt><dd>{r.a}</dd></div>)}
              </dl>
            </Reveal>
          </Section>

          <Section n={2} title="Veriden bulgu çıkar">
            <p>En yüksek ve en düşük değerleri, artışları, azalışları, karşıtlıkları ve benzerlikleri ara. Hepsini yazmak zorunda değilsin; Task 1'de seçici olmak gerekir.</p>
            <Notes id={`${item.id}-2`} label="Bulduğun özellikleri yaz" rows={4} />
            <Reveal>
              <ul className="findings">
                {item.findings.map((f) => (
                  <li key={f.id} className={f.use ? 'used' : 'skipped'}>
                    <Tag tag={f.tag} /> {f.fact} <strong>{f.use ? '→ kullan' : '→ atla'}</strong>
                    {!f.use && <span className="muted"> {f.skipWhy}</span>}
                  </li>
                ))}
              </ul>
              <h3>Bulgular arasındaki ilişkiler</h3>
              <ul className="findings">
                {item.relations.map((r) => <li key={r.fact}><Tag tag={r.tag} /> {r.fact}</li>)}
              </ul>
            </Reveal>
          </Section>

          <Section n={3} title="Her bulgudan bir cümle yaz">
            <p>Kullanacağın her bulgu için tek, basit ve doğru bir cümle yaz. Rakamı doğru yaz, zamanı geçmiş zaman tut.</p>
            <Notes id={`${item.id}-3`} label="Cümlelerini yaz" rows={5} />
            <Reveal>
              <ul className="alts" lang="en">
                {used.map((f) => <li key={f.id}>{f.sentence}</li>)}
              </ul>
              {skipped.length > 0 && <p className="muted">Atlanan bulgu için cümle yazmadım: {skipped.map((f) => f.fact).join(' ')}</p>}
            </Reveal>
          </Section>

          <Section n={4} title="Introduction ve overview yaz">
            <Notes id={`${item.id}-4`} label="Introduction ve overview'u yaz" rows={4} />
            <Reveal>
              <h3>Introduction</h3>
              <p className="linked" lang="en">{item.intro.text}</p>
              <p>{item.intro.why}</p>
              <h3>Overview</h3>
              <p className="linked" lang="en">{item.overview.text}</p>
              <p>{item.overview.why}</p>
            </Reveal>
          </Section>

          <Section n={5} title="Cümleleri bağla">
            <p>Birbirine yakın bulguları bağlaçla tek cümleye topla. Karşıtlık için while/whereas, benzerlik için similarly/both, ödün için although gibi.</p>
            <Notes id={`${item.id}-5`} label="Cümleleri bağlayarak yaz" rows={5} />
            <Reveal>
              <div className="link-steps">
                {item.units.map((u) => (
                  <article key={u.id} className="step-card">
                    <h3>{u.rel}</h3>
                    <p className="muted">Ayrı cümleler:</p>
                    <ul className="raw" lang="en">{u.from.map((id) => <li key={id}>{F[id].sentence}</li>)}</ul>
                    <p className="muted">Bağlayınca:</p>
                    <p className="linked" lang="en"><Marked text={u.text} /></p>
                    <p>{u.why}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          </Section>

          <Section n={6} title="Cümleleri paragraflara yerleştir">
            <Placement key={item.id} item={item} />
          </Section>

          <Section n={7} title="Tam metin">
            <p>Önce kendi metnini baştan sona yaz, sonra band 7 örneğiyle karşılaştır.</p>
            <Notes id={`${item.id}-7`} label="Tam metnini yaz" rows={8} />
            <Reveal label="Örnek metni göster"><FullText item={item} /></Reveal>
          </Section>

          {item.review && (
            <Section n={8} title={`Senin cevabın: neden band ${item.review.band}?`}>
              <EssayReview key={item.id} review={item.review} />
            </Section>
          )}
        </main>
      </div>
    </div>
  )
}
