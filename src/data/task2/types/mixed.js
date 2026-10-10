export default {
  id: 'mixed',
  name: 'Mixed / Hybrid Questions',
  tr: 'İki farklı soru türünü birleştirir. En yaygın karışımlar: "discuss both views + give your opinion" ve "causes + effects", "problems + solutions + your opinion". Her bileşenin cevabı ayrı paragrafta ya da ayrı bölümde verilmelidir.',
  recognize: [
    '"Discuss both views and give your opinion." (discussion + opinion)',
    '"What are the causes and what are the effects?" (iki ayrı soru türü)',
    '"What problems does this cause and what can be done? Do you think...?" (üç parça)',
    'Soru birden fazla görev içerir; her görev ayrı cevaplanmalıdır.',
  ],
  structure: [
    { part: 'Giriş', goal: 'Konuyu parafraz et ve tüm bileşenlere kısaca cevap vereceğini belirt.', tip: 'Soruyu dikkatle ayrıştır: kaç parça var, her biri ne istiyor?' },
    { part: 'Body 1', goal: 'Birinci bileşeni cevapla (örneğin birinci görüş ya da nedenler).', tip: 'Her bileşene net bir topic sentence ver.' },
    { part: 'Body 2', goal: 'İkinci bileşeni cevapla (örneğin ikinci görüş ya da etkiler).', tip: 'Gerekirse görüşünü bu paragrafta ya da ayrı bir body\'de ver.' },
    { part: 'Sonuç', goal: 'Tüm bileşenleri özetle ve görüş varsa yeniden belirt.', tip: 'Üç parçalı sorularda 3 body paragrafı yazmak gerekebilir.' },
  ],
  thesis: [
    'This essay will discuss both views, and I will argue that [görüş].',
    'The main causes of [konu] are [neden 1] and [neden 2], and the effects include [etki 1] and [etki 2].',
    'While [A] is true to some extent, I believe that [B], and several measures could address this.',
  ],
  phrases: [
    { en: 'This essay will address each of these questions in turn.', tr: 'Bu essay her bir soruyu sırayla ele alacak.', use: 'Giriş' },
    { en: 'Firstly, it is worth examining the causes of...', tr: 'Öncelikle ...nin nedenlerini incelemekte fayda var', use: 'Body 1' },
    { en: 'The consequences of this are far-reaching.', tr: 'Bunun sonuçları çok kapsamlı.', use: 'Etki anlatırken' },
    { en: 'As for my own view, ...', tr: 'Kendi görüşüme gelince...', use: 'Görüş bildirirken' },
    { en: 'This has led to...', tr: 'Bu ...ye yol açtı', use: 'Etki sunarken' },
    { en: 'To address this, ...', tr: 'Bunu çözmek için...', use: 'Çözüm sunarken' },
    { en: 'In light of this, ...', tr: 'Bu ışıkta...', use: 'Geçiş' },
    { en: 'In conclusion, both... and... need to be considered.', tr: 'Sonuç olarak hem ... hem ... dikkate alınmalı.', use: 'Sonuç' },
  ],
  mistakes: [
    'Sorudaki bir bileşeni atlamak (en yaygın hata).',
    'Bileşenleri aynı paragrafta karıştırmak.',
    'Görüş sorusu varsa görüşü açık bildirmemek.',
    'Her bileşene eşit ağırlık vermemek.',
    'Her bileşene ayrı paragraf ayırmayıp ana fikirleri tek paragrafta dağıtmak.',
  ],
  sample: {
    question: 'Some people believe that the rise of online shopping is damaging local high streets. What are the causes of this development, and what are its effects? What can be done to protect local shops?',
    text: 'Online shopping has grown rapidly in the past decade, and many town centres are struggling as a result. This essay will explain the main causes of this trend, discuss its effects on communities and suggest practical measures to support local businesses.\n\nOne of the main causes of the shift to online retail is convenience. Shoppers can compare prices in seconds, order at any time of day and have goods delivered to their door, which saves time and effort. Another factor is price: online retailers have lower costs because they do not pay for expensive high street premises, and they can pass these savings on to customers. The pandemic accelerated this change, as many consumers who had never bought online discovered how easy it was.\n\nThe effects on local communities have been significant. Many independent shops have closed, leaving empty units that make town centres look neglected and discourage visitors. This, in turn, reduces footfall for the remaining businesses, creating a downward spiral. Job losses are another consequence, as small retailers employ many local people, and the loss of social meeting places also weakens community life.\n\nThere are several measures that could help. Local councils could reduce business rates or parking charges for independent shops, making it easier for them to compete. They could also encourage events such as markets and festivals that draw people into the centre. In addition, shops themselves could develop their own websites and offer click-and-collect services, combining the advantages of both models.\n\nIn conclusion, convenience and lower prices have driven the growth of online shopping, which has damaged town centres, but government support and adaptation by retailers could protect local high streets.',
  },
}
