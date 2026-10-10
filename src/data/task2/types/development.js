export default {
  id: 'development',
  name: 'Positive or Negative Development',
  tr: 'Bir gelişmenin olumlu mu olumsuz mu olduğunu sorar. Bu tür görüş bildirmeni ister (opinion essay\'e benzer) ama ifade farklıdır: "Is this a positive or negative development?" Net bir taraf seç.',
  recognize: [
    '"Is this a positive or negative development?"',
    '"Do you think this is a positive or negative trend?"',
    '"Is this a good or bad thing for society?"',
    'Soruda bir eğilim (trend) anlatılır ve değerlendirmen istenir.',
  ],
  structure: [
    { part: 'Giriş', goal: 'Eğilimi parafraz et ve olumlu mu olumsuz mu olduğunu net olarak bildir.', tip: '"I believe this is a largely positive development" gibi net bir ifade kullan.' },
    { part: 'Body 1', goal: 'Seçtiğin tarafın ilk nedeni: açıkla ve örnek ver.', tip: 'Güçlü argümanla başla.' },
    { part: 'Body 2', goal: 'İkinci neden ya da karşı tarafı kabul edip çürütme.', tip: '"Although..., the overall impact is..." yapısı iyi çalışır.' },
    { part: 'Sonuç', goal: 'Görüşünü ve ana gerekçeleri özetle.', tip: 'Yeni fikir ekleme.' },
  ],
  thesis: [
    'I believe this is a largely positive development, as it [neden 1] and [neden 2].',
    'In my opinion, this trend is a negative development, because [neden].',
    'Although there are some drawbacks, I would argue that this is a positive development overall.',
  ],
  phrases: [
    { en: 'I believe this is a largely positive development.', tr: 'Bence bu büyük ölçüde olumlu bir gelişme.', use: 'Thesis' },
    { en: 'This trend has brought about significant benefits.', tr: 'Bu eğilim önemli faydalar getirdi.', use: 'Olumlu argüman' },
    { en: 'It has had a detrimental effect on...', tr: '...e zararlı bir etkisi oldu', use: 'Olumsuz argüman' },
    { en: 'On the whole, ...', tr: 'Genel olarak...', use: 'Değerlendirme' },
    { en: 'The overall impact is...', tr: 'Genel etki...', use: 'Sonuç' },
    { en: 'This is a double-edged sword.', tr: 'Bu iki ucu keskin bir kılıç.', use: 'Karışık sonuç' },
    { en: 'In the long term, ...', tr: 'Uzun vadede...', use: 'Etki açıklarken' },
    { en: 'Although there are drawbacks, ...', tr: 'Dezavantajlar olsa da...', use: 'Karşı görüşü kabul ederken' },
  ],
  mistakes: [
    'Sadece "positive" ya da "negative" yazıp açıklamamak.',
    'İki tarafı da yazıp net bir taraf seçmemek.',
    'Duygusal ve genel ifadeler kullanmak ("it is very bad").',
    'Konudan sapmak; eğilimin nedenlerini anlatmak.',
    'Soruyu opinion essay gibi cevaplamak ("I agree"); bunun yerine "positive/negative" kelimelerini kullan.',
  ],
  sample: {
    question: 'Nowadays, many people use social media to keep in touch with friends and family rather than meeting in person. Is this a positive or negative development?',
    text: 'Social media has transformed the way people communicate, and many now rely on it to maintain relationships. While this trend has some drawbacks, I believe that it is largely a positive development.\n\nThe most important benefit is that social media keeps people connected across distance. In the past, friends and relatives who moved abroad would gradually lose contact, since letters and phone calls were expensive and infrequent. Today, a family can share photos and messages instantly and at no cost, which helps them to stay close. For example, many migrant workers say that daily video calls with their children have made separation much easier to bear. Social media also allows people with niche interests or disabilities to find communities that they could not access locally, reducing loneliness and isolation.\n\nAdmittedly, online contact cannot fully replace face-to-face interaction. Some people spend hours scrolling through feeds and neglect real conversations, and researchers have linked heavy use with anxiety, particularly among teenagers. Online communication also lacks body language and tone, which can lead to misunderstandings.\n\nHowever, these problems are largely a matter of how the technology is used rather than the technology itself. People who set limits on screen time and use social media to arrange meetings, rather than to replace them, can enjoy its advantages without its risks. In this sense, online and offline contact complement one another.\n\nOn the whole, the ability to communicate instantly and cheaply outweighs the risks, and I therefore consider the growth of social media to be a positive development, provided that it is used sensibly.',
  },
}
