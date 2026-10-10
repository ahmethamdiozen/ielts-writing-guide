import Callout from './Callout.jsx'
import { Highlighted } from '../lib/highlight.jsx'

const CHART_LABELS = { pie: 'Pie', bar: 'Bar', line: 'Line', table: 'Table', mixed: 'Mixed', process: 'Process', map: 'Map', all: 'Hepsi' }

export default function WordCard({ entry, learned, onToggle, query, categoryTitle }) {
  const marks = [entry.term, ...(entry.forms ?? [])]
  return (
    <article className={`word-card${learned ? ' is-learned' : ''}`}>
      <header className="word-head">
        <div>
          <h3 className="word-term"><Highlighted text={entry.term} terms={query ? [query] : []} /></h3>
          <p className="word-tr">{entry.tr}</p>
        </div>
        <button type="button" className="learned-btn" aria-pressed={learned} onClick={() => onToggle(entry.id)}>
          {learned ? '✓ Öğrendim' : 'Öğrendim'}
        </button>
      </header>
      <div className="tags">
        {categoryTitle && <span className="tag tag-cat">{categoryTitle}</span>}
        {entry.charts.map((c) => <span key={c} className="tag">{CHART_LABELS[c] ?? c}</span>)}
      </div>
      <p className="word-use"><strong>Ne zaman?</strong> {entry.use}</p>
      {entry.note && <p className="word-note"><strong>Kural:</strong> {entry.note}</p>}
      {entry.mistake && <Callout tone="warn" title="Sık hata">{entry.mistake}</Callout>}
      <ul className="examples">
        {entry.examples.map((ex) => <li key={ex}><Highlighted text={ex} terms={marks} /></li>)}
      </ul>
    </article>
  )
}
