const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// entry(category)(term, tr, use, charts, examples, extra?)
// extra: { forms?: string[], note?: string, mistake?: string }
export const entry = (category) => (term, tr, use, charts, examples, extra = {}) => ({
  id: slug(term),
  term,
  category,
  tr,
  use,
  charts,
  examples,
  ...extra,
})
