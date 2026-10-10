// Özel isimler küçük harfe çevrilmesin diye kısa bir liste.
const PROPER = new Set([
  'sweden', 'norway', 'denmark', 'finland', 'germany', 'france', 'spain', 'italy', 'japan', 'china', 'india',
  'brazil', 'mexico', 'canada', 'australia', 'turkey', 'russia', 'egypt', 'korea', 'poland', 'england',
  'scotland', 'ireland', 'europe', 'asia', 'africa', 'america', 'london', 'paris', 'tokyo', 'january',
  'february', 'march', 'april', 'june', 'july', 'august', 'september', 'october', 'november', 'december',
  'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
])

export const clean = (s) => String(s ?? '').trim().replace(/[.!?\s]+$/, '')

export function upperFirst(s) {
  return s ? s[0].toUpperCase() + s.slice(1) : s
}

export function lowerFirst(s) {
  if (!s) return s
  const first = s.split(/[\s,]/)[0]
  if (/^[A-Z]{2,}$/.test(first) || /\d/.test(first) || PROPER.has(first.toLowerCase())) return s
  return s[0].toLowerCase() + s.slice(1)
}

export function combine(relation, rawA, rawB) {
  const a0 = clean(rawA)
  const b0 = clean(rawB)
  if (!a0 || !b0) return []
  const vars = { A: upperFirst(a0), B: upperFirst(b0), a: lowerFirst(upperFirst(a0)), b: lowerFirst(upperFirst(b0)) }
  return relation.patterns.map((p, i) => {
    const text = p.t.replace(/\{([AaBb])\}/g, (_, k) => vars[k])
    const parts = text.split(/\[\[(.+?)\]\]/).map((chunk, j) => ({ text: chunk, mark: j % 2 === 1 }))
    return { id: `${relation.id}-${i}`, parts, plain: text.replace(/\[\[|\]\]/g, ''), note: p.note }
  })
}
