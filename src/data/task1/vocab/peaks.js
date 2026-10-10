import { entry } from './_entry.js'
const e = entry('peaks')

export default [
  e('peak at', 'zirve yapmak; en yüksek seviyeye ulaşmak',
    'Line graph\'ta en yüksek noktayı anlatır. "Peak at + değer" kalıbıyla kullanılır. Fiil olarak da isim olarak da kullanılır.',
    ['line', 'bar'],
    [
      'Sales peaked at 600 units in July.',
      'Unemployment peaked at 12% in 2009.',
      'The figure peaked at around 45% in the early 2000s.',
      'Demand peaks at 8 p.m. every day.',
    ],
    {
      forms: ['peaks at', 'peaked at', 'peaking at'],
      note: '"Peak at + rakam" ya da "peak in + zaman" şeklinde kullanılır. Hemen ardından düşüş geliyorsa "before falling" ekle.',
    }),
  e('reach a peak of', 'zirveye ulaşmak',
    '"Peak at" ile eşanlamlı ama daha resmî. Zirve değerini belirtirken kullanılır.',
    ['line', 'bar'],
    [
      'Sales reached a peak of 600 units in July.',
      'The figure reached a peak of 70% in 2010.',
      'Temperatures reach a peak of 35 degrees in August.',
    ],
    {
      forms: ['reached a peak of', 'reaches a peak of'],
      note: 'Ardından rakam gelir. "Reach its peak at" biçimi de olur.',
    }),
  e('hit a low of', 'en düşük seviyeye inmek',
    'Verinin en düşük noktaya indiğini söyler. Line graph\'ta dip noktasını vurgulamak için uygundur.',
    ['line', 'bar'],
    [
      'Prices hit a low of $15 in March.',
      'The figure hit a low of 10% in 2005.',
      'Sales hit a low of 100 units in January.',
    ],
    {
      forms: ['hit a low of', 'hits a low of'],
      note: '"Reach a low of" ile eşanlamlıdır. Hit, geçmiş zamanda da "hit" kalır.',
    }),
  e('bottom out at', 'dibe vurmak; en düşük seviyeye ulaşmak',
    'Düşüşün sona erdiği en düşük noktayı anlatır. Sonrasında genelde toparlanma gelir.',
    ['line'],
    [
      'The figure bottomed out at 5% in 2009 before recovering.',
      'Sales bottomed out at 80 units in January.',
      'Prices bottom out at $10 and then rise again.',
    ],
    {
      forms: ['bottomed out at', 'bottoms out at', 'bottoming out at'],
      note: 'Ardından genelde "before recovering/rising" gelir.',
    }),
  e('the highest figure', 'en yüksek rakam',
    'Bar chart ve tabloda en büyük değeri göstermek için. Overview paragrafında en çok kullanılan ifadelerden biridir.',
    ['bar', 'table', 'pie'],
    [
      'The highest figure was recorded in Japan, at 45%.',
      'Italy had the highest figure for tea consumption.',
      'The highest figure for male students was in 2010.',
    ],
    {
      note: '"The highest + isim" kalıbı: the highest figure / proportion / number / level. "The" zorunludur.',
    }),
  e('the lowest figure', 'en düşük rakam',
    'En küçük değeri belirtmek için. Overview ve body\'de karşılaştırma için çok işe yarar.',
    ['bar', 'table', 'pie'],
    [
      'The lowest figure was recorded in Canada, at 8%.',
      'Spain had the lowest figure for car ownership.',
      'The lowest figure for women was in 1990.',
    ],
    { note: 'En yüksek ve en düşük değeri aynı paragrafta birlikte kullanmak güçlü bir karşılaştırma sağlar.' }),
  e('reach its maximum', 'maksimum değerine ulaşmak',
    'Verinin ulaşabildiği en üst seviyeyi anlatır. Zirve noktasına dikkat çekmek için.',
    ['line', 'bar'],
    [
      'The figure reached its maximum of 80% in 2012.',
      'Sales reach their maximum in December.',
      'Temperatures reached their maximum in July.',
    ],
    {
      forms: ['reached its maximum', 'reaches its maximum', 'reach their maximum', 'reached their maximum'],
      note: 'Sahiplik zamiri öznenin tekil/çoğul olmasına uyar: its / their.',
    }),
  e('stand at', 'bir seviyede durmak; ...düzeyinde olmak',
    'Belirli bir tarihteki değeri vermek için. Özellikle başlangıç ve bitiş değerini bildirirken çok kullanılır.',
    ['line', 'bar', 'table'],
    [
      'The unemployment rate stood at 6% in 2010.',
      'Sales stand at 500 units per month.',
      'The figure stood at around 30% at the start of the period.',
      'Prices stood at $20 in 2000 and $35 in 2010.',
    ],
    {
      forms: ['stands at', 'stood at', 'standing at'],
      note: 'Geçmiş zaman "stood at". Ardından değer ya da yüzde gelir.',
    }),
]
