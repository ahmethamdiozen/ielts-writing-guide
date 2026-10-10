import comparison from './vocab/comparison.js'
import similarity from './vocab/similarity.js'
import addition from './vocab/addition.js'
import proportion from './vocab/proportion.js'
import change from './vocab/change.js'
import peaks from './vocab/peaks.js'
import approximation from './vocab/approximation.js'
import degree from './vocab/degree.js'
import time from './vocab/time.js'
import processMap from './vocab/process-map.js'
import focus from './vocab/focus.js'

export const categories = [
  { id: 'comparison', title: 'Karşılaştırma & zıtlık', desc: 'İki veriyi yan yana koyup farkı göster: while, whereas, in contrast…' },
  { id: 'similarity', title: 'Benzerlik', desc: 'Aynı yönde giden ya da aynı değerdeki verileri bağla.' },
  { id: 'addition', title: 'Ekleme', desc: 'Ek bilgi ver: also, moreover, in addition…' },
  { id: 'proportion', title: 'Oran & pay (pie chart)', desc: 'Pie chart ve yüzdelerde pay anlatan fiil ve kalıplar.' },
  { id: 'change', title: 'Artış, azalış, sabitlik', desc: 'Line graph ve bar chart\'ta değişimi anlatan fiiller.' },
  { id: 'peaks', title: 'Zirve & dip', desc: 'En yüksek ve en düşük noktaları vurgula.' },
  { id: 'approximation', title: 'Yaklaşıklık', desc: 'Tam sayı yerine yaklaşık değer ver: roughly, just over…' },
  { id: 'degree', title: 'Derece & hız', desc: 'Değişimin ne kadar ve ne kadar hızlı olduğunu söyle.' },
  { id: 'time', title: 'Zaman & sıralama', desc: 'Zaman akışını ve dönemleri anlat.' },
  { id: 'process-map', title: 'Süreç & harita', desc: 'Process diyagramı ve harita sorularının kalıpları.' },
  { id: 'focus', title: 'Vurgu & örnekleme', desc: 'Öne çıkan veriyi göster, örnek ver, genel özet yap.' },
]

export const entries = [
  ...comparison, ...similarity, ...addition, ...proportion, ...change, ...peaks,
  ...approximation, ...degree, ...time, ...processMap, ...focus,
]
