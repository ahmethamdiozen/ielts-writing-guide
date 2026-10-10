export default {
  id: 'advantages',
  name: 'Advantages & Disadvantages',
  tr: 'Bir gelişmenin artı ve eksilerini sorar. İki varyasyon vardır: (1) "Discuss the advantages and disadvantages" (iki tarafı da anlat), (2) "Do the advantages outweigh the disadvantages?" (bir taraf seçmen gerekir).',
  recognize: [
    '"Discuss the advantages and disadvantages of this trend."',
    '"What are the advantages and disadvantages?"',
    '"Do the advantages of this outweigh the disadvantages?" (görüş gerekir)',
    '"Is this a positive or negative development?" (ayrı bir tür, bkz. Positive/Negative)',
  ],
  structure: [
    { part: 'Giriş', goal: 'Konuyu parafraz et. "Outweigh" sorusunda görüşünü bildir.', tip: 'Sadece "discuss" varsa görüş şart değil, ama yazarsan ekstra puan getirir.' },
    { part: 'Body 1', goal: 'Avantajları anlat: 1–2 avantaj, açıklama ve örnek.', tip: 'Outweigh sorusunda: ağır basan tarafı Body 1\'e koyma, Body 2\'de sonuçlandır.' },
    { part: 'Body 2', goal: 'Dezavantajları anlat: 1–2 dezavantaj, açıklama ve örnek.', tip: 'İki body aynı uzunlukta ve aynı derinlikte olsun.' },
    { part: 'Sonuç', goal: 'Özetle; outweigh sorusunda hangisi ağır basıyor onu net belirt.', tip: 'Yeni argüman ekleme.' },
  ],
  thesis: [
    'This essay will discuss both the advantages and disadvantages of [konu].',
    'Although [konu] has certain drawbacks, I believe that the benefits outweigh them.',
    'In my opinion, the disadvantages of [konu] outweigh its advantages, for reasons that will be explained below.',
  ],
  phrases: [
    { en: 'One major advantage of this is that...', tr: 'Bunun başlıca avantajı...', use: 'Avantaj sunarken' },
    { en: 'A further benefit is that...', tr: 'Bir diğer fayda...', use: 'İkinci avantaj' },
    { en: 'On the downside, ...', tr: 'Olumsuz tarafı...', use: 'Dezavantaja geçerken' },
    { en: 'The main drawback is that...', tr: 'Başlıca dezavantajı...', use: 'Dezavantaj sunarken' },
    { en: 'However, these drawbacks are outweighed by...', tr: 'Ancak bu dezavantajlar ... ile bastırılıyor', use: 'Sonuçlandırırken' },
    { en: 'This is particularly true for...', tr: 'Bu özellikle ... için doğru', use: 'Genişletirken' },
    { en: 'In the long run, ...', tr: 'Uzun vadede...', use: 'Etki açıklarken' },
    { en: 'On balance, ...', tr: 'Genel olarak...', use: 'Sonuç' },
  ],
  mistakes: [
    '"Outweigh" sorusunda tarafsız kalmak ve görüşünü bildirmemek.',
    'Avantaj ve dezavantajları dengesiz yazmak (birini tek cümleyle geçmek).',
    'Konudan sapmak, örneğin sadece genel olarak teknolojiyi anlatmak.',
    '"Advantage" ve "benefit" kelimelerini tekrar tekrar kullanmak.',
    'Argümanları açıklamadan sadece listelemek.',
  ],
  sample: {
    question: 'More and more people are choosing to work from home. Do the advantages of this development outweigh the disadvantages?',
    text: 'Remote working has grown rapidly in recent years, thanks to faster internet and changing attitudes among employers. Although this trend has certain drawbacks, I believe that its benefits outweigh them.\n\nOne major advantage of working from home is the flexibility it gives employees. Without a daily commute, workers save hours that they can spend with their families or on hobbies, and this tends to improve their wellbeing. A further benefit is that companies can hire talent from anywhere in the world, rather than being limited to their local area. For instance, a software firm in London can employ an excellent developer who lives in Poland, which increases productivity and reduces recruitment costs. There are also environmental benefits, since fewer commuters mean less traffic and pollution.\n\nOn the downside, working from home can lead to isolation. Employees miss the informal conversations that happen in an office, and this may harm teamwork and creativity, especially for younger staff who need guidance from experienced colleagues. Another drawback is that the boundary between work and personal life can become blurred, making it hard for people to switch off in the evening.\n\nHowever, these problems can largely be solved. Many companies now organise regular team meetings and offer hybrid models, in which staff work from the office for part of the week. Similarly, employees can set strict working hours to protect their free time.\n\nOn balance, the flexibility, economic and environmental advantages of remote work outweigh its disadvantages, provided that employers and employees manage the risks carefully.',
  },
}
