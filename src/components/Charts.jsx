const ticks = (max, step) => Array.from({ length: Math.floor(max / step) + 1 }, (_, i) => i * step)

function Legend({ names, y = 16 }) {
  let x = 44
  return names.map((n, i) => {
    const el = (
      <g key={n} transform={`translate(${x}, ${y})`}>
        <rect width="12" height="12" y="-10" rx="2" className={`s${i}`} />
        <text x="17" fontSize="12" className="c-text">{n}</text>
      </g>
    )
    x += 17 + n.length * 7 + 18
    return el
  })
}

export function BarChart({ chart, alt }) {
  const W = 480, H = 300, m = { l: 44, r: 12, t: 40, b: 34 }
  const pw = W - m.l - m.r, ph = H - m.t - m.b
  const y = (v) => m.t + ph * (1 - v / chart.max)
  const n = chart.categories.length, k = chart.series.length
  const gw = pw / n, gap = 4
  const bw = Math.min(26, (gw - 12 - (k - 1) * gap) / k)
  const groupW = k * bw + (k - 1) * gap
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={alt} className="chart-svg">
      <Legend names={chart.series.map((s) => s.name)} />
      {ticks(chart.max, chart.step).map((t) => (
        <g key={t}>
          <line x1={m.l} x2={W - m.r} y1={y(t)} y2={y(t)} className="c-grid" />
          <text x={m.l - 6} y={y(t) + 4} textAnchor="end" fontSize="11" className="c-text">{t}{chart.unit}</text>
        </g>
      ))}
      {chart.categories.map((c, ci) => {
        const x0 = m.l + gw * ci + (gw - groupW) / 2
        return (
          <g key={c}>
            {chart.series.map((s, si) => {
              const v = s.values[ci], x = x0 + si * (bw + gap)
              return (
                <g key={s.name}>
                  <rect x={x} y={y(v)} width={bw} height={y(0) - y(v)} className={`s${si}`} />
                  <text x={x + bw / 2} y={y(v) - 4} textAnchor="middle" fontSize={bw < 20 ? 10 : 11} className="c-text">{v}</text>
                </g>
              )
            })}
            <text x={m.l + gw * ci + gw / 2} y={H - 12} textAnchor="middle" fontSize="12" className="c-text">{c}</text>
          </g>
        )
      })}
    </svg>
  )
}

export function LineChart({ chart, alt }) {
  const W = 480, H = 300, m = { l: 44, r: 20, t: 52, b: 34 }
  const pw = W - m.l - m.r, ph = H - m.t - m.b
  const y = (v) => m.t + ph * (1 - v / chart.max)
  const x = (i) => m.l + (pw * i) / (chart.xs.length - 1)
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={alt} className="chart-svg">
      <Legend names={chart.series.map((s) => s.name)} />
      {ticks(chart.max, chart.step).map((t) => (
        <g key={t}>
          <line x1={m.l} x2={W - m.r} y1={y(t)} y2={y(t)} className="c-grid" />
          <text x={m.l - 6} y={y(t) + 4} textAnchor="end" fontSize="11" className="c-text">{t}</text>
        </g>
      ))}
      {chart.xs.map((v, i) => (
        <text key={v} x={x(i)} y={H - 12} textAnchor="middle" fontSize="12" className="c-text">{v}</text>
      ))}
      {chart.series.map((s, si) => (
        <g key={s.name}>
          <polyline fill="none" strokeWidth="3" strokeLinejoin="round" className={`l${si}`}
            points={s.values.map((v, i) => `${x(i)},${y(v)}`).join(' ')} />
          {s.values.map((v, i) => <circle key={i} cx={x(i)} cy={y(v)} r="4" className={`s${si}`} />)}
        </g>
      ))}
      <text x={m.l} y={m.t - 8} fontSize="11" className="c-text">{chart.yLabel ?? `Visitors (${chart.unit})`}</text>
    </svg>
  )
}

function Pie({ title, values, labels }) {
  const cx = 130, cy = 140, r = 78
  const total = values.reduce((a, b) => a + b, 0)
  let a0 = -Math.PI / 2
  const pt = (a, rad) => [cx + rad * Math.cos(a), cy + rad * Math.sin(a)]
  return (
    <svg viewBox="0 0 260 250" role="img" aria-label={`${title}: ${labels.map((l, i) => `${l} ${values[i]}%`).join(', ')}`} className="chart-svg pie-svg">
      <text x="130" y="22" textAnchor="middle" fontSize="15" fontWeight="700" className="c-text">{title}</text>
      {values.map((v, i) => {
        const a1 = a0 + (v / total) * Math.PI * 2
        const [x0, y0] = pt(a0, r), [x1, y1] = pt(a1, r)
        const mid = (a0 + a1) / 2
        const [lx, ly] = pt(mid, r + 16)
        const cos = Math.cos(mid)
        const anchor = cos > 0.25 ? 'start' : cos < -0.25 ? 'end' : 'middle'
        const el = (
          <g key={labels[i]}>
            <path d={`M${cx},${cy} L${x0},${y0} A${r},${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${x1},${y1} Z`} className={`s${i}`} stroke="var(--surface)" strokeWidth="2" />
            <text x={lx} y={ly + 4} textAnchor={anchor} fontSize="12" className="c-text">{v}%</text>
          </g>
        )
        a0 = a1
        return el
      })}
    </svg>
  )
}

export function PieCharts({ chart }) {
  return (
    <div>
      <div className="pies">
        {chart.pies.map((p) => <Pie key={p.title} title={p.title} values={p.values} labels={chart.labels} />)}
      </div>
      <ul className="legend">
        {chart.labels.map((l, i) => (
          <li key={l}><span className={`swatch s${i}`} aria-hidden="true" /> {l}</li>
        ))}
      </ul>
    </div>
  )
}

export function DataTable({ chart }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <caption>{chart.unit}</caption>
        <thead>
          <tr><th scope="col" />{chart.columns.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
        </thead>
        <tbody>
          {chart.rows.map((r) => (
            <tr key={r.name}>
              <th scope="row">{r.name}</th>
              {r.values.map((v, i) => <td key={i}>{v}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function ProcessDiagram({ chart }) {
  return (
    <ol className="process">
      {chart.stages.map((s) => <li key={s}>{s}</li>)}
    </ol>
  )
}

export default function ChartView({ item }) {
  switch (item.kind) {
    case 'bar': return <BarChart chart={item.chart} alt={item.alt} />
    case 'line': return <LineChart chart={item.chart} alt={item.alt} />
    case 'pie': return <PieCharts chart={item.chart} />
    case 'table': return <DataTable chart={item.chart} />
    case 'process': return <ProcessDiagram chart={item.chart} />
    default: return null
  }
}
