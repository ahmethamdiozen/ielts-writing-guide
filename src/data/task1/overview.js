export default {
  criteria: [
    {
      name: 'Task Achievement',
      tr: 'Görevi Yerine Getirme',
      tips: [
        'Her zaman net bir overview (genel bakış) paragrafı yaz. Overview olmadan 6\'nın üzerine çıkmak çok zordur.',
        'Önemli verileri seç ve grupla; her rakamı yazmaya çalışma. Seçici ol.',
        'Verileri doğru aktar: yıllar, birimler, yüzdeler ve rakamlar hatasız olmalı.',
        'Kişisel yorum, tahmin ya da neden açıklama ekleme. Sadece grafikte olanı anlat.',
        'En az 150 kelime yaz; 170–190 kelime ideal.',
      ],
    },
    {
      name: 'Coherence & Cohesion',
      tr: 'Tutarlılık ve Bağlantı',
      tips: [
        'Dört paragraf: intro, overview, body 1, body 2. Her paragrafın tek bir amacı olsun.',
        'Body paragraflarında verileri mantıksal olarak grupla (örneğin en yüksek ve en düşük kategoriler).',
        'Bağlaçları çeşitle ve ölçülü kullan: while, whereas, in contrast, similarly. Her cümleye bağlaç koyma.',
        'Referanslama kullan: this, these, the former, the latter, respectively.',
      ],
    },
    {
      name: 'Lexical Resource',
      tr: 'Kelime Dağarcığı',
      tips: [
        'Aynı fiili tekrar etme: rise, climb, grow, increase arasında dönüşümlü kullan.',
        'Derece zarfları ve sıfatlarını ekle: sharply, steadily, slight, dramatic.',
        'Soru metnini birebir kopyalama; kendi cümlenle parafraz et.',
        'Kelimeleri doğru kalıplarıyla kullan: an increase in, account for, peak at.',
      ],
    },
    {
      name: 'Grammatical Range & Accuracy',
      tr: 'Dil Bilgisi Çeşitliliği ve Doğruluğu',
      tips: [
        'Doğru zaman: geçmiş veriler için Past Simple, gelecek tahminleri için will / is expected to.',
        'Karmaşık cümleler kur: while / whereas, which, with + isim yapıları, -ing sıfat fiilleri.',
        'Süreçlerde edilgen yapıyı (passive) kullan; haritalarda hem edilgen hem Past Simple.',
        'Sayılabilir/sayılamaz isim ayrımına dikkat: the number of / the amount of.',
      ],
    },
  ],
  overviewRules: [
    'Overview, grafiğin en büyük 2–3 özelliğini anlatır. Rakam verme (ya da en fazla bir iki yuvarlak rakam ver).',
    'Trend için: "Overall, X rose while Y fell." Karşılaştırma için: "Overall, X was the largest category, while Y was the smallest."',
    'Overview\'ü introdan hemen sonra, ayrı bir paragraf olarak yaz. Body paragraflarından sonra değil.',
    'Process\'te overview: kaç adım var, başı ve sonu ne, döngüsel mi doğrusal mı.',
    'Map\'te overview: genel değişiklik ne yönde (kentleşme, modernleşme), neler kaldı, neler değişti.',
  ],
  template: [
    {
      part: 'Intro (giriş)',
      goal: 'Soruyu kendi kelimelerinle parafraz et. Tek cümle yeterli.',
      example: 'The bar chart compares the proportion of households owning a car in four countries between 2000 and 2020.',
    },
    {
      part: 'Overview (genel bakış)',
      goal: 'En belirgin 2–3 trendi ya da karşılaştırmayı yaz. Rakam yok.',
      example: 'Overall, car ownership rose in every country, with China showing the most dramatic growth, while Germany remained the highest throughout.',
    },
    {
      part: 'Body 1',
      goal: 'Birinci veri grubunu (örneğin en yüksek değerler) rakamlarla anlat ve karşılaştır.',
      example: 'In 2000, Germany had the highest figure at 70%, compared with just 5% in China...',
    },
    {
      part: 'Body 2',
      goal: 'İkinci veri grubunu (örneğin düşük değerler ya da diğer trend) rakamlarla anlat.',
      example: 'By contrast, ownership in Brazil and India started at lower levels, but both rose steadily...',
    },
  ],
  timing: [
    'Task 1 için 20 dakikan var; Task 2\'ye 40 dakika ayır.',
    '1–2 dk: grafiği oku, başlık, birim ve yıllara bak.',
    '2 dk: neyi karşılaştıracağını ve overview\'de ne söyleyeceğini planla.',
    '14 dk: yaz (intro 1 dk, overview 3 dk, body\'ler 10 dk).',
    '2 dk: kontrol et: yıllar, rakamlar, birimler, zamanlar, yazım.',
  ],
  mistakes: [
    'Overview yazmamak ya da body\'nin sonuna gizlemek.',
    'Her rakamı tek tek yazmak; verileri gruplamamak.',
    'Soru metnini kelimesi kelimesine kopyalamak.',
    'Kişisel yorum yapmak ("this is bad", "because of the economy").',
    'Zaman hatası: geçmiş veriler için "is rising" yazmak.',
    'Birim ve yıl hatası: yüzdeyi sayı gibi, sayıyı yüzde gibi yazmak.',
    'Aynı fiili ve bağlacı sürekli tekrar etmek.',
    'Kelime sayısının 150\'nin altında kalması.',
  ],
}
