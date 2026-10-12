import { categories, entries, overview, charts, general, essayTypes } from './index.js'
import { relations } from './connectors.js'
import walk1 from './walk1/index.js'
import walk2 from './walk2/index.js'

const leaf = (id, label, to) => ({ id, label, to })
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const GENERAL_LABELS = {
  criteria: 'Puanlama kriterleri',
  ideas: 'Fikir üretme',
  thesisFormulas: 'Tez formülleri',
  cohesion: 'Bağlılık',
  grammarRange: 'Gramer çeşitliliği',
  timing: 'Zaman yönetimi',
  checklist: 'Kontrol listesi',
}

// Bağlaç şablonlarında [[...]] içindeki sözcükler.
const connectorWords = (relation) =>
  [...new Set(relation.patterns.flatMap((p) => [...p.t.matchAll(/\[\[(.+?)\]\]/g)].map((m) => m[1].toLowerCase())))]

// Zihin haritası ağacı. İçerik mevcut veri dosyalarından üretilir; yeni kelime/bağlaç/essay eklenince haritaya kendiliğinden girer.
export function buildMindMap() {
  return {
    id: 'root',
    label: 'IELTS Writing',
    children: [
      {
        id: 'task1', label: 'Task 1', to: '/task1',
        children: [
          {
            id: 't1-approach', label: 'Yaklaşım', to: '/task1/approach',
            children: overview.template.map((t, i) => leaf(`t1-tpl-${i}`, t.part, '/task1/approach')),
          },
          {
            id: 't1-charts', label: 'Grafik türleri', to: `/task1/chart-${charts[0].id}`,
            children: charts.map((c) => leaf(`t1-chart-${c.id}`, c.title, `/task1/chart-${c.id}`)),
          },
        ],
      },
      {
        id: 'vocab', label: 'Kelime bankası', to: `/task1/${categories[0].id}`,
        children: categories.map((c) => ({
          id: `vc-${c.id}`, label: c.title, to: `/task1/${c.id}`,
          children: entries.filter((e) => e.category === c.id).map((e) => leaf(`w-${e.id}`, e.term, `/task1/${c.id}`)),
        })),
      },
      {
        id: 'task2', label: 'Task 2', to: '/task2',
        children: [
          {
            id: 't2-general', label: 'Genel rehber', to: '/task2/general',
            children: Object.keys(general).map((k) => leaf(`t2-gen-${k}`, GENERAL_LABELS[k] ?? k, '/task2/general')),
          },
          {
            id: 't2-types', label: 'Essay türleri', to: `/task2/${essayTypes[0].id}`,
            children: essayTypes.map((t) => leaf(`t2-type-${t.id}`, t.name, `/task2/${t.id}`)),
          },
        ],
      },
      {
        id: 'connect', label: 'Bağlaç', to: '/connect',
        children: relations.map((r) => ({
          id: `cn-${r.id}`, label: r.title, to: '/connect',
          children: connectorWords(r).map((w) => leaf(`cn-${r.id}-${slug(w)}`, w, '/connect')),
        })),
      },
      {
        id: 'walk1', label: 'T1 Adım Adım', to: '/t1-yol',
        children: walk1.map((w) => leaf(`wk1-${w.id}`, w.title, `/t1-yol/${w.id}`)),
      },
      {
        id: 'walk2', label: 'T2 Adım Adım', to: '/t2-yol',
        children: walk2.map((w) => leaf(`wk2-${w.id}`, w.title, `/t2-yol/${w.id}`)),
      },
      { id: 'practice', label: 'Alıştırma', to: '/practice' },
    ],
  }
}
