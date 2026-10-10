export default {
  id: 'two-part',
  name: 'Two-part (Direct questions)',
  tr: 'Soru iki (bazen üç) ayrı direkt soru içerir. Her soruya ayrı bir body paragrafı ayırırsın. Bu tür genelde sonuç paragrafı gerektirmeyecek kadar kısa gibi görünse de, kısa bir sonuç yazman iyidir.',
  recognize: [
    'Soru iki ayrı soru cümlesinden oluşur: "Why is this happening? Is it a positive or negative development?"',
    '"What are the reasons for this? How can it be solved?" (problem-solution\'dan farkı: iki farklı soru tipi)',
    'Her soru "?" ile biter ve birbirinden bağımsızdır.',
  ],
  structure: [
    { part: 'Giriş', goal: 'Konuyu parafraz et ve iki soruya kısaca cevap ver (ya da cevap vereceğini belirt).', tip: 'Soruları tekrar yazma; konuyu kendi sözlerinle özetle.' },
    { part: 'Body 1', goal: 'Birinci soruya cevap ver: 1–2 ana fikir, açıklama ve örnek.', tip: 'İlk cümleyle soruya doğrudan cevap ver (topic sentence).' },
    { part: 'Body 2', goal: 'İkinci soruya cevap ver: 1–2 ana fikir, açıklama ve örnek.', tip: 'İki soruya eşit ağırlık ver.' },
    { part: 'Sonuç', goal: 'İki cevabı kısaca özetle.', tip: '1–2 cümle yeterli.' },
  ],
  thesis: [
    'This essay will explain why [birinci soru] and argue that [ikinci soru için görüş].',
    'There are several reasons for [konu], and I believe that [ikinci soru cevabı].',
    'The main reason for [konu] is [neden], and I would argue that this is [positive/negative].',
  ],
  phrases: [
    { en: 'There are several reasons for this trend.', tr: 'Bu eğilimin birkaç nedeni var.', use: 'Neden sorusunda' },
    { en: 'The main factor behind this is...', tr: 'Bunun arkasındaki ana etken...', use: 'Neden açıklarken' },
    { en: 'In my view, this is a positive/negative development because...', tr: 'Bence bu olumlu/olumsuz bir gelişme çünkü...', use: 'Görüş sorusunda' },
    { en: 'To answer the first question, ...', tr: 'İlk soruya cevap vermek gerekirse...', use: 'Body 1 başı' },
    { en: 'Turning to the second question, ...', tr: 'İkinci soruya gelince...', use: 'Body 2 başı' },
    { en: 'This is largely due to...', tr: 'Bu büyük ölçüde ...den kaynaklanıyor', use: 'Neden açıklarken' },
    { en: 'It seems likely that...', tr: 'Muhtemelen...', use: 'Tahmin yaparken' },
    { en: 'In short, ...', tr: 'Kısacası...', use: 'Sonuç' },
  ],
  mistakes: [
    'Sadece bir soruya cevap vermek.',
    'İki soruyu aynı paragrafta karıştırmak.',
    'İkinci soruya yüzeysel cevap vermek.',
    'Soruları giriş paragrafında kelimesi kelimesine tekrar etmek.',
    'Argümanları örnek vermeden bırakmak.',
  ],
  sample: {
    question: 'In many countries, a growing number of people are choosing to live alone. Why is this happening? Is it a positive or negative development?',
    text: 'Living alone, once rare, has become common in many countries. This essay will explain why more people are choosing this lifestyle and argue that, on the whole, it is a positive development, provided that people have enough social support.\n\nTo answer the first question, there are several reasons behind this trend. The main factor is financial independence. As more women have entered the workforce and wages have risen, young adults can now afford to rent their own flats rather than sharing with parents or flatmates. Another reason is that people are marrying later, so they spend more years single. Moreover, social attitudes have changed: living alone is no longer seen as unusual, and many people value privacy and freedom to organise their own lives. In Japan, for instance, nearly a third of households now consist of one person.\n\nTurning to the second question, I believe that this development is mainly positive, although it has some risks. On the positive side, individuals who live alone often gain independence and self-reliance, and they can focus on their careers or hobbies without compromise. However, there is a risk of loneliness, especially among older people who may have no family nearby, and this can harm both mental and physical health. Society also faces practical challenges, such as increased demand for housing and higher energy consumption per person.\n\nIn short, people choose to live alone mainly because they can afford to and because attitudes have changed. The benefits outweigh the risks as long as individuals have enough social support, so communities should make sure that no one is left isolated.',
  },
}
