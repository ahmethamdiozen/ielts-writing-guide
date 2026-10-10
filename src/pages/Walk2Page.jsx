import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import topics from '../data/walk2/index.js'
import { Reveal, Notes } from '../components/Reveal.jsx'

const ROLES = {
  paraphrase: 'Parafraz', thesis: 'Tez', point: 'Ana fikir', explain: 'Açıklama', example: 'Örnek',
  link: 'Bağlantı', restate: 'Tez tekrarı', wrap: 'Kapanış',
}
const wc = (t) => (t.trim().match(/\S+/g) ?? []).length
const paraText = (p) => p.sentences.map((s) => s.t).join(' ')

function Section({ n, title, children }) {
  return (
    <section className="walk-step" aria-labelledby={`t2-${n}`}>
      <h2 id={`t2-${n}`}><span className="walk-num" aria-hidden="true">{n}</span> {title}</h2>
      {children}
    </section>
  )
}

function Sentences({ p, showRoles }) {
  return (
    <p lang="en" className="essay-para">
      {p.sentences.map((s, i) => (
        <span key={i} className={showRoles ? `sent role-${s.role}` : 'sent'}>
          {showRoles && <span className="rolechip">{ROLES[s.role]}</span>}
          {s.t}{' '}
        </span>
      ))}
    </p>
  )
}

function IdeaPicker({ topic }) {
  const [picked, setPicked] = useState({})
  const [checked, setChecked] = useState(false)
  const count = Object.values(picked).filter(Boolean).length
  return (
    <>
      <fieldset className="field">
        <legend>Bu fikirlerden hangi ikisini yazardın?</legend>
        {topic.candidates.map((c) => {
          const correct = !!c.pick
          const mark = checked ? (picked[c.id] === correct ? 'ok' : 'bad') : ''
          return (
            <label key={c.id} className={`cand ${mark}`}>
              <input type="checkbox" checked={!!picked[c.id]} disabled={checked}
                onChange={() => setPicked({ ...picked, [c.id]: !picked[c.id] })} />
              <span>
                <span>{c.text}</span>
                {checked && (
                  <span className="cand-why">
                    <strong>{correct ? `Seç (${c.pick === 'body1' ? 'Body 1' : 'Body 2'}). ` : 'Seçme. '}</strong>{c.why}
                  </span>
                )}
              </span>
            </label>
          )
        })}
      </fieldset>
      {!checked
        ? <button type="button" className="primary-btn" disabled={count !== 2} onClick={() => setChecked(true)}>Kontrol et</button>
        : <button type="button" className="secondary-btn" onClick={() => { setChecked(false); setPicked({}) }}>Tekrar dene</button>}
      {!checked && count !== 2 && <p className="muted">Tam iki fikir seç.</p>}
    </>
  )
}

function DriftCheck({ topic }) {
  const [ans, setAns] = useState({})
  return (
    <ul className="place-list">
      {topic.drift.map((d) => {
        const a = ans[d.s]
        const ok = a === d.on
        return (
          <li key={d.s} className="place-item">
            <p className="linked" lang="en">{d.s}</p>
            <div className="chips" role="group" aria-label="Plana uyuyor mu">
              {[[true, 'Planıma uyuyor'], [false, 'Uymuyor']].map(([v, label]) => (
                <button key={label} type="button" disabled={a !== undefined} className={`chip${a === v ? ' on' : ''}`}
                  onClick={() => setAns({ ...ans, [d.s]: v })}>{label}</button>
              ))}
            </div>
            {a !== undefined && (
              <p role="status" className={`feedback ${ok ? 'ok' : 'bad'}`}>
                <strong>{ok ? 'Doğru ✓' : `Doğrusu: ${d.on ? 'uyuyor' : 'uymuyor'}.`}</strong> {d.why}
              </p>
            )}
          </li>
        )
      })}
    </ul>
  )
}

const CHECK = [
  'Introduction soruyu kopyalamadan parafraz ediyor ve tezi söylüyor.',
  'Tez, sorunun tüm parçalarına cevap veriyor.',
  'Her body paragrafı tek fikir içeriyor.',
  'Her fikirde ana fikir, açıklama, örnek ve bağlantı var.',
  'Planda olmayan hiçbir cümle yok.',
  'Conclusion yeni fikir eklemiyor.',
  'En az 250 kelime.',
]

export default function Walk2Page() {
  const { topic: id } = useParams()
  const navigate = useNavigate()
  const topic = topics.find((t) => t.id === id) ?? topics[0]
  const [showRoles, setShowRoles] = useState(false)
  const [checks, setChecks] = useState({})
  const [intro, ...rest] = topic.essay
  const conclusion = rest[rest.length - 1]
  const bodies = rest.slice(0, -1)
  const total = topic.essay.reduce((n, p) => n + wc(paraText(p)), 0)
  return (
    <div className="page page-2">
      <div className="page-head"><h1>Task 2 Adım Adım</h1></div>
      <div className="layout layout-single">
        <main className="content">
          <p className="lead">Soruyu gördüğünde fikri nasıl üreteceğini, geliştireceğini ve konudan çıkmadan metni nasıl tamamlayacağını yedi adımda göster. Önce kendin dene, sonra cevabı aç. Cevaplar band 7 seviyesindedir.</p>
          <div className="chips" role="group" aria-label="Konu seç">
            {topics.map((t) => (
              <button key={t.id} type="button" aria-pressed={t.id === topic.id} className={`chip${t.id === topic.id ? ' on' : ''}`}
                onClick={() => { navigate(`/t2-yol/${t.id}`); setChecks({}) }}>{t.title}</button>
            ))}
          </div>
          <p className="muted">Essay türü: <strong>{topic.type}</strong></p>
          <p className="prompt" lang="en">{topic.question}</p>
          <p className="muted">Kaynak: <a href={topic.source.url} target="_blank" rel="noreferrer">{topic.source.text}</a></p>

          <Section n={1} title="Soruyu parçala">
            <Notes id={`t2-${topic.id}-1`} label="Konu, essay türü ve istenenleri yaz" rows={3} />
            <Reveal>
              <dl className="qa">
                {topic.parse.map((r) => <div key={r.q}><dt>{r.q}</dt><dd>{r.a}</dd></div>)}
              </dl>
            </Reveal>
          </Section>

          <Section n={2} title="Fikir üret ve iki tanesini seç">
            <p>Önce kafandan geçen fikirleri yaz. Sonra aşağıdaki dört aday içinden iki tanesini seç. İyi bir fikir açıklaması ve örneği kolay olan, ve diğer fikirden farklı olandır.</p>
            <Notes id={`t2-${topic.id}-2`} label="Kendi fikirlerini yaz" rows={3} />
            <IdeaPicker key={topic.id} topic={topic} />
          </Section>

          <Section n={3} title="Fikri geliştir">
            <p>Her fikri dört parçaya böl: <strong>ana fikir</strong> (cevabın), <strong>açıklama</strong> (neden böyle?), <strong>örnek</strong> (somut durum), <strong>bağlantı</strong> (tezine dönüş). Aşağıdaki sorular açıklamayı yazmana yardım eder.</p>
            {bodies.map((p, i) => (
              <div key={p.name} className="step-card">
                <h3>{p.name}</h3>
                <p className="muted">Kendine sor:</p>
                <ul className="raw">{topic.ask[i === 0 ? 'body1' : 'body2'].map((q) => <li key={q}>{q}</li>)}</ul>
                <Notes id={`t2-${topic.id}-3-${i}`} label={`${p.name} için ana fikir, açıklama, örnek ve bağlantıyı yaz`} rows={4} />
                <Reveal>
                  <Sentences p={p} showRoles />
                </Reveal>
              </div>
            ))}
          </Section>

          <Section n={4} title="Plan yap ve konudan çıkma">
            <div className="callout">
              <strong className="callout-title">Sapmama kuralı</strong>
              Her cümleden önce sor: bu cümle tezimi ya da paragrafın ana fikrini destekliyor mu? Cevap hayırsa cümleyi at. Konuyla ilgili olsa bile planında yoksa yazma.
            </div>
            <Notes id={`t2-${topic.id}-4`} label="Tez ve iki ana fikir cümleni yaz" rows={3} />
            <Reveal>
              <h3>Tez</h3>
              <p className="linked" lang="en">{intro.sentences.find((s) => s.role === 'thesis').t}</p>
              <h3>Paragraf ana fikir cümleleri</h3>
              <ul className="alts" lang="en">
                {bodies.map((p) => <li key={p.name}><strong>{p.name}:</strong> {p.sentences.find((s) => s.role === 'point').t}</li>)}
              </ul>
              <h3>Plan dışında bıraktığım fikirler</h3>
              <ul className="alts">
                {topic.candidates.filter((c) => !c.pick).map((c) => <li key={c.id}><span>{c.text}</span> <span className="muted">— {c.why}</span></li>)}
              </ul>
            </Reveal>
          </Section>

          <Section n={5} title="Introduction ve conclusion yaz">
            <Notes id={`t2-${topic.id}-5`} label="Introduction ve conclusion yaz" rows={4} />
            <Reveal>
              <h3>Introduction</h3>
              <Sentences p={intro} showRoles />
              <p>{topic.introWhy}</p>
              <h3>Conclusion</h3>
              <Sentences p={conclusion} showRoles />
              <p>{topic.conclusionWhy}</p>
            </Reveal>
          </Section>

          <Section n={6} title="Tam essay">
            <p>Önce kendi essay'ini baştan sona yaz, sonra örnekle karşılaştır.</p>
            <Notes id={`t2-${topic.id}-6`} label="Tam essay'ini yaz" rows={10} />
            <Reveal label="Örnek essay'i göster">
              <label className="toggle"><input type="checkbox" checked={showRoles} onChange={() => setShowRoles(!showRoles)} /> Yapıyı göster</label>
              <div className="sample">
                {topic.essay.map((p) => <Sentences key={p.name} p={p} showRoles={showRoles} />)}
              </div>
              <p className="muted">{total} kelime. Task 2 için en az 250 gerekir; 260–290 band 7 için rahat bir hedeftir.</p>
              <h3>Band 7 kontrol listesi</h3>
              <ul className="checklist">
                {CHECK.map((c) => (
                  <li key={c}><label><input type="checkbox" checked={!!checks[c]} onChange={() => setChecks({ ...checks, [c]: !checks[c] })} /> {c}</label></li>
                ))}
              </ul>
            </Reveal>
          </Section>

          <Section n={7} title="Sapma kontrolü">
            <p>Aşağıdaki cümleler bu essay'in planına uyuyor mu? Birini seç, hemen geri bildirim al.</p>
            <DriftCheck key={topic.id} topic={topic} />
          </Section>
        </main>
      </div>
    </div>
  )
}
