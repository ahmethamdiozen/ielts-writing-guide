export default {
  id: 'women',
  title: 'Line graph: kadın istihdamı',
  kind: 'line',
  source: "Konu, bildirilen sınav sorularından esinlenildi (15–64 yaş kadınlarda istihdam oranı, 2003–2009). Veriler ve ülkeler örnektir, orijinal chart değildir.",
  prompt: "The line graph shows the percentage of women aged 15 to 64 who were in employment in three countries between 2003 and 2009.",
  chart: {
    unit: "%", max: 80, step: 20, yLabel: "Women in employment (%)",
    xs: [2003, 2004, 2005, 2006, 2007, 2008, 2009],
    series: [
      { name: "Country A", values: [50, 52, 55, 58, 61, 64, 67] },
      { name: "Country B", values: [62, 62, 63, 61, 62, 63, 62] },
      { name: "Country C", values: [70, 69, 66, 63, 60, 58, 55] },
    ],
  },
  alt: "Çizgi grafik, 2003–2009 arasında üç ülkede çalışan kadın yüzdesi. A ülkesi 50den 67ye çıkıyor, B ülkesi 61 ile 63 arasında sabit, C ülkesi 70ten 55e düşüyor.",
  read: [
    { q: "Chart ne hakkında?", a: "Üç ülkede 15–64 yaş kadınlarının yüzde kaçının çalıştığı." },
    { q: "Birim nedir?", a: "Yüzde (%). Dikey eksen 0–80." },
    { q: "Zaman aralığı?", a: "2003–2009, yani altı yıl. Trend anlatılacak: artış, azalış, sabit." },
    { q: "Chart ile neler yapılabilir?", a: "Her çizginin genel yönünü, başlangıç ve bitiş değerini ve çizgilerin kesiştiği yeri bul." },
  ],
  findings: [
    { id: "f1", tag: "highest", fact: "2003'te C en yüksek (%70), A en düşük (%50).", sentence: "In 2003, Country C had the highest rate of female employment, at 70%, and Country A had the lowest, at 50%.", use: true },
    { id: "f2", tag: "increase", fact: "A düzenli arttı: %50'den %67'ye.", sentence: "The rate in Country A rose steadily to reach 67%.", use: true },
    { id: "f3", tag: "decrease", fact: "C düzenli düştü: %70'ten %55'e (15 puan).", sentence: "The figure for Country C fell by 15 percentage points to 55%.", use: true },
    { id: "f4", tag: "stable", fact: "B hemen hemen sabit: %61–63.", sentence: "Country B showed little change, staying between 61% and 63%.", use: true },
    { id: "f5", tag: "overtake", fact: "A, 2007'de C'yi, 2008'de B'yi geçti.", sentence: "Country A overtook Country C in 2007 and Country B in 2008.", use: true },
    { id: "f6", tag: "compare", fact: "2009'da sıralama 2003'ün tersi (A en yüksek, C en düşük).", sentence: "By 2009, Country A had the highest rate and Country C the lowest.", use: true },
    { id: "f7", tag: "detail", fact: "B 2005 ve 2008'de %63'e çıktı, 2006'da %61'e indi.", use: false, skipWhy: "Küçük dalgalanmalar. 'Hemen hemen sabit' demek ve aralığı vermek yeterli." },
  ],
  relations: [
    { tag: "contrast", between: ["f2", "f3"], fact: "A artıyor, C azalıyor: zıt yönler ve benzer büyüklük (+17, −15)." },
    { tag: "contrast", between: ["f4", "f2"], fact: "B sabit, diğer ikisi değişiyor." },
    { tag: "overtake", between: ["f5", "f6"], fact: "Kesişimler sıralamayı tersine çevirdi." },
  ],
  intro: {
    text: "The line graph illustrates the percentage of women aged 15 to 64 who were in employment in three countries between 2003 and 2009.",
    why: "'Shows' yerine 'illustrates' kullan ve 'who were in employment' ile soruyu kendi cümlenle ver.",
  },
  overview: {
    text: "Overall, the employment rate for women rose in Country A and fell in Country C, while it stayed almost the same in Country B. By 2009, Country A had the highest rate and Country C the lowest, which was the opposite of the situation in 2003.",
    why: "Overview her çizginin genel yönünü söyler (artış, azalış, sabit) ve en çarpıcı özelliği verir: sıralama tersine döndü. Rakam yok.",
  },
  units: [
    {
      id: "u1", para: "body1", rel: "Karşıtlık (başlangıç)", from: ["f1"],
      text: "In 2003, Country C had the highest rate of female employment, at 70%, [[whereas]] Country A had the lowest, at 50%.",
      why: "Başlangıçta iki uç ülke var. 'Whereas' bunları aynı cümlede karşılaştırır ve ilerideki tersine dönüşü hazırlar.",
    },
    {
      id: "u2", para: "body1", rel: "Karşıtlık (trend)", from: ["f2", "f3"],
      text: "Over the next six years, the rate in Country A rose steadily to reach 67%, [[while]] the figure for Country C fell by 15 percentage points to 55%.",
      why: "Aynı dönemde zıt yönler. 'While' iki trendi tek cümlede verir. 'Over the next six years' zaman çerçevesini belirtir.",
    },
    {
      id: "u3", para: "body2", rel: "Karşıtlık (sabit ülke)", from: ["f4"],
      text: "Country B, [[by contrast]], showed little change. Its rate stayed between 61% and 63% throughout the period.",
      why: "B ülkesi diğer ikisinden farklı. 'By contrast' ortada, iki virgül arasında durarak vurguyu ülke adına koyar.",
    },
    {
      id: "u4", para: "body2", rel: "Sıra değişimi", from: ["f5"],
      text: "Country A overtook Country C in 2007 and Country B in 2008, [[after which]] it remained in first place.",
      why: "İki kesişim aynı ülkeyle ilgili: tek cümleye topladım. 'After which' kesişimden sonra durumu söyler (A lider kaldı).",
    },
    {
      id: "u5", para: "body2", rel: "Sonuç", from: ["f6"],
      text: "[[As a result]], the order of the countries in 2009 was the reverse of that in 2003, with Country B in the middle in both years.",
      why: "Kesişimlerin aritmetik sonucu: sıralama tersine döndü. Sebep tahmin etmiyorsun, rakamlardan çıkan sonucu söylüyorsun. Bu yüzden 'as a result' güvenli.",
    },
  ],
  bodyWhy: {
    body1: "Başlangıç durumu ve iki büyük değişim (A artıyor, C azalıyor). Okuyucu hikayenin ana kısmını burada alır.",
    body2: "Sabit kalan ülke ve çizgilerin kesişimi. Sonuç cümlesi sıralamanın tersine döndüğünü söyleyerek overview ile bağ kurar.",
  },
}
