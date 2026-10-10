import Callout from './Callout.jsx'
import { Highlighted } from '../lib/highlight.jsx'

export default function EssayView({ type, query }) {
  return (
    <div className="essay">
      <h2>{type.name}</h2>
      <p className="lead">{type.tr}</p>

      <section>
        <h3>Soruyu nasıl tanırsın?</h3>
        <ul>{type.recognize.map((r) => <li key={r}>{r}</li>)}</ul>
      </section>

      <section>
        <h3>Band 9 yapısı</h3>
        <ol className="steps">
          {type.structure.map((s) => (
            <li key={s.part}>
              <strong>{s.part}</strong>
              <p>{s.goal}</p>
              <p className="step-tip">{s.tip}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h3>Thesis kalıpları</h3>
        <ul className="examples">{type.thesis.map((t) => <li key={t}>{t}</li>)}</ul>
      </section>

      <section>
        <h3>Hazır kalıplar</h3>
        <ul className="phrases">
          {type.phrases.map((p) => (
            <li key={p.en}>
              <span className="phrase-en"><Highlighted text={p.en} terms={query ? [query] : []} /></span>
              <span className="phrase-tr">{p.tr}</span>
              <span className="tag">{p.use}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Sık yapılan hatalar</h3>
        {type.mistakes.map((m) => <Callout key={m} tone="warn">{m}</Callout>)}
      </section>

      <section>
        <h3>Örnek soru ve model essay</h3>
        <p className="prompt">{type.sample.question}</p>
        <div className="sample">
          {type.sample.text.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>
    </div>
  )
}
