export default function Marked({ text, className }) {
  return text.split(/\[\[(.+?)\]\]/).map((chunk, i) => (i % 2 === 1 ? <mark key={i} className={className}>{chunk}</mark> : <span key={i}>{chunk}</span>))
}

export const plain = (t) => t.replace(/\[\[|\]\]/g, '')
export const wordCount = (t) => (plain(t).trim().match(/\S+/g) ?? []).length
