export default {
  id: 'problem-solution',
  name: 'Problem / Cause & Solution',
  tr: 'Bir problemi, nedenlerini ve çözümlerini sorar. Soru "causes and solutions", "problems and solutions" ya da "causes and effects" şeklinde gelebilir. Her iki bölüme eşit ağırlık ver.',
  recognize: [
    '"What are the causes of this problem and what measures can be taken to solve it?"',
    '"What problems does this cause? What solutions can you suggest?"',
    '"What are the main causes? What are the effects?"',
    'Soruda bir sorun (obezite, trafik, işsizlik gibi) ve çözüm istenir.',
  ],
  structure: [
    { part: 'Giriş', goal: 'Sorunu parafraz et. Essay\'in nedenleri ve çözümleri tartışacağını belirt.', tip: 'Görüş zorunlu değil, ama "I believe the most effective solution is..." yazmak güçlüdür.' },
    { part: 'Body 1', goal: 'Nedenler (ya da problemler): 2 ana neden, açıklama ve örnek.', tip: 'Nedenleri dikkatle seç; birbirinden farklı ve somut olsun.' },
    { part: 'Body 2', goal: 'Çözümler: 2 çözüm. Her çözüm Body 1\'deki bir nedene bağlansın.', tip: 'Çözüm gerçekçi olmalı; kim yapacak (hükümet, okullar, bireyler)? Açıkla.' },
    { part: 'Sonuç', goal: 'Ana nedenleri ve en etkili çözümü özetle.', tip: 'Yeni fikir ekleme.' },
  ],
  thesis: [
    'This essay will examine the main causes of [sorun] and suggest practical solutions.',
    '[Sorun] is largely caused by [neden 1] and [neden 2], but it can be tackled through [çözüm 1] and [çözüm 2].',
    'There are several reasons behind [sorun], and I believe that [çözüm] is the most effective response.',
  ],
  phrases: [
    { en: 'One of the main causes of this problem is...', tr: 'Bu sorunun ana nedenlerinden biri...', use: 'Neden sunarken' },
    { en: 'This can be attributed to...', tr: 'Bu ... ile ilişkilendirilebilir', use: 'Neden sunarken' },
    { en: 'As a result, ...', tr: 'Sonuç olarak...', use: 'Etki sunarken' },
    { en: 'This, in turn, leads to...', tr: 'Bu da sırayla ... sonucunu doğurur', use: 'Zincirleme etki' },
    { en: 'One effective measure would be to...', tr: 'Etkili bir önlem ... olurdu', use: 'Çözüm sunarken' },
    { en: 'Governments could tackle this by...', tr: 'Hükümetler bunu ... ile çözebilir', use: 'Çözüm sunarken' },
    { en: 'This would help to reduce...', tr: 'Bu ...i azaltmaya yardımcı olurdu', use: 'Çözümün etkisi' },
    { en: 'If such measures were introduced, ...', tr: 'Bu tür önlemler alınırsa...', use: 'Koşullu çözüm' },
  ],
  mistakes: [
    'Sadece nedenleri ya da sadece çözümleri yazmak.',
    'Çözümleri nedenlerle ilişkilendirmemek; genel kalmak.',
    'Gerçekçi olmayan çözümler: "Governments should ban all cars".',
    'Aynı fikri farklı kelimelerle tekrar etmek.',
    'Nedenleri ve etkileri karıştırmak.',
  ],
  sample: {
    question: 'In many cities, traffic congestion is a growing problem. What are the main causes of this problem, and what measures can be taken to reduce it?',
    text: 'Traffic congestion has become a serious problem in cities worldwide, wasting time, damaging the environment and harming economic productivity. This essay will examine the main causes of this problem and suggest some practical solutions.\n\nOne of the main causes of congestion is the rapid increase in car ownership. As incomes rise, more families buy their own vehicles, and many people use them even for short journeys. This is often because public transport is unreliable or overcrowded, which leads commuters to see cars as the only convenient option. Another cause is poor urban planning. In many cities, offices, shops and homes are located far from one another, so people are forced to travel long distances every day, and roads become overloaded at peak hours.\n\nThere are several measures that could reduce this problem. First, governments could invest in better public transport, such as metro lines and dedicated bus lanes, which would give commuters a quicker alternative to driving. In Bogota, for instance, a bus rapid transit system has taken thousands of cars off the road. Second, cities could introduce congestion charges, so that drivers pay a fee for entering the centre at busy times. This would discourage unnecessary journeys and raise funds that could be used to improve public transport.\n\nIn addition, planners should encourage mixed-use development, so that people live closer to their workplaces, which would shorten commutes.\n\nIn conclusion, congestion is mainly caused by rising car ownership and poor planning, but investment in public transport, congestion charges and smarter urban design could substantially reduce it.',
  },
}
