import Marked, { wordCount } from './Marked.jsx'
import { Reveal } from './Reveal.jsx'

export const KINDS = {
  accuracy: 'Veri hatası', task: 'Eksik bilgi', grammar: 'Dilbilgisi', vocab: 'Kelime', cohesion: 'Bağlantı',
}

const byPara = (answer, pick) => {
  const paras = [...new Set(answer.map((s) => s.para))]
  return paras
    .map((p) => [p, answer.filter((s) => s.para === p).map(pick).filter(Boolean).join(' ')])
    .filter(([, t]) => t)
}
const words = (paras) => paras.reduce((n, [, t]) => n + wordCount(t), 0)

function Essay({ paras }) {
  return (
    <div className="sample" lang="en">
      {paras.map(([name, t]) => <p key={name}><Marked text={t} className="err" /></p>)}
    </div>
  )
}

export default function EssayReview({ review }) {
  const original = byPara(review.answer, (s) => (s.missing ? null : s.text))
  const fixed = byPara(review.answer, (s) => s.fix)
  const issues = review.answer.flatMap((s) => s.issues)
  const counts = Object.keys(KINDS)
    .map((k) => [k, issues.filter((i) => i.kind === k).length])
    .filter(([, n]) => n > 0)
    .sort((a, b) => b[1] - a[1])
  return (
    <>
      <p className="review-band"><span className="band-badge">Band {review.band}</span> {review.exam}</p>

      <h3>Senin metnin</h3>
      <p>Altı dalgalı çizili yerler aşağıda tek tek açıklanıyor.</p>
      <Essay paras={original} />
      <p className="muted">{words(original)} kelime, {original.length} paragraf.</p>

      <h3>İyi yaptıkların</h3>
      <ul>{review.strengths.map((s) => <li key={s}>{s}</li>)}</ul>

      <h3>Kriterlere göre</h3>
      <dl className="qa">
        {review.criteria.map((c) => (
          <div key={c.name}><dt>{c.name}: {c.band}</dt><dd>{c.why}</dd></div>
        ))}
      </dl>
      <p className="muted">{review.note}</p>

      <h3>Cümle cümle</h3>
      <p>
        Toplam {issues.length} not: {counts.map(([k, n]) => `${n} ${KINDS[k].toLowerCase()}`).join(', ')}.
        {' '}Sarı işaretli yerler düzeltilmiş cümlede neyin değiştiğini gösterir.
      </p>
      <div className="link-steps">
        {review.answer.map((s) => (
          <article key={s.id} className={`step-card review-card${s.missing ? ' missing' : ''}`}>
            <h4>{s.para}</h4>
            {s.missing
              ? <p className="muted">Senin metninde yok, eklenmeli:</p>
              : <p className="linked" lang="en"><Marked text={s.text} className="err" /></p>}
            {s.good && <p className="good-note"><strong>İyi:</strong> {s.good}</p>}
            <ul className="issues">
              {s.issues.map((i, k) => (
                <li key={k}>
                  <span className={`tagchip kind-${i.kind}`}>{KINDS[i.kind]}</span>
                  {i.at && <><q lang="en" className="err-quote">{i.at}</q>{' '}</>}
                  {i.why}
                </li>
              ))}
            </ul>
            <p className="muted">Düzeltilmiş:</p>
            <p className="linked" lang="en"><Marked text={s.fix} /></p>
          </article>
        ))}
      </div>

      <h3>Band 7 için önce bunlar</h3>
      <ol>{review.priorities.map((p) => <li key={p}>{p}</li>)}</ol>

      <h3>Düzeltilmiş metin</h3>
      <p>Kendi metnin, kendi yapınla; yalnızca hatalar düzeltildi ve eksik overview cümlesi eklendi.</p>
      <Reveal label="Düzeltilmiş metni göster">
        <div className="sample" lang="en">
          {fixed.map(([name, t]) => <p key={name}><Marked text={t} /></p>)}
        </div>
        <p className="muted">{words(fixed)} kelime.</p>
      </Reveal>
    </>
  )
}
