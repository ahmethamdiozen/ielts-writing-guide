export default {
  id: 'music',
  title: 'Bar chart: müzik',
  kind: 'bar',
  source: "Konu, bildirilen sınav sorularından esinlenildi (yaş gruplarına göre müzik türü tercihi). Veriler örnektir, orijinal chart değildir.",
  prompt: "The bar chart shows the percentage of people in three age groups who prefer four types of music.",
  chart: {
    unit: "%", max: 60, step: 20,
    categories: ["Pop", "Rock", "Classical", "Jazz"],
    series: [
      { name: "16–24", values: [50, 30, 5, 15] },
      { name: "25–44", values: [35, 35, 10, 20] },
      { name: "45+", values: [15, 30, 35, 20] },
    ],
  },
  alt: "Gruplu çubuk grafik: üç yaş grubunun müzik türü tercihi. Pop 50, 35 ve 15; rock 30, 35 ve 30; klasik 5, 10 ve 35; caz 15, 20 ve 20 yüzde.",
  read: [
    { q: "Chart ne hakkında?", a: "Üç yaş grubunun hangi müzik türünü tercih ettiği." },
    { q: "Birim nedir?", a: "Yüzde (%). Her yaş grubunun toplamı %100 eder." },
    { q: "Zaman var mı?", a: "Hayır. Tek bir an var, bu yüzden artış ve azalış yerine yaş grupları arasındaki farkı anlatırsın ('azalır', 'yükselir' yaşa göre)." },
    { q: "Neyi karşılaştıracaksın?", a: "Dört müzik türünü ve üç yaş grubunu. Hangi tür hangi yaşta öne çıkıyor, hangisi her yaşta benzer?" },
  ],
  findings: [
    { id: "f1", tag: "highest", fact: "En genç grupta pop en popüler (%50).", sentence: "Pop was the most popular genre among the youngest group, at 50%.", use: true },
    { id: "f2", tag: "decrease", fact: "Pop yaşla birlikte düşüyor: %50, %35, %15.", sentence: "Preference for pop fell with age, to 35% among 25–44s and only 15% among those aged 45 and over.", use: true },
    { id: "f3", tag: "increase", fact: "Klasik yaşla birlikte artıyor: %5, %10, %35.", sentence: "Classical music became more popular with age, rising from 5% to 35%.", use: true },
    { id: "f4", tag: "highest", fact: "45 yaş üstünde en popüler tür klasik (%35).", sentence: "Classical music was the favourite of the oldest group, at 35%.", use: true },
    { id: "f5", tag: "stable", fact: "Rock her yaşta %30–35 arasında.", sentence: "Rock attracted between 30% and 35% of every age group.", use: true },
    { id: "f6", tag: "stable", fact: "Caz her yaşta %15–20 arasında.", sentence: "Jazz was chosen by 15% to 20% of each age group.", use: true },
    { id: "f7", tag: "compare", fact: "25–44 yaşta pop ve rock eşit (%35), klasik en düşük (%10).", sentence: "Among 25–44s, pop and rock were equally popular at 35%, while classical music was the least popular at 10%.", use: true },
    { id: "f8", tag: "detail", fact: "Caz, en gençlerde %15, diğer iki grupta %20.", use: false, skipWhy: "Jazz zaten 'her yaşta benzer' bulgusuna dahil. Ayrı bir cümle fazla ayrıntı olur." },
  ],
  relations: [
    { tag: "contrast", between: ["f2", "f3"], fact: "Pop yaşla azalıyor, klasik yaşla artıyor: zıt kalıplar." },
    { tag: "similarity", between: ["f5", "f6"], fact: "Rock ve caz hemen hemen her yaşta aynı seviyede." },
  ],
  intro: {
    text: "The bar chart compares the percentage of people in three age groups who prefer pop, rock, classical and jazz music.",
    why: "Soruyu kopyalama: 'four types of music' yerine dört türün adını yaz, 'shows' yerine 'compares' kullan.",
  },
  overview: {
    text: "Overall, pop was most popular with the youngest people, while classical music was preferred by the oldest group. Rock and jazz were liked by a similar share of every age group.",
    why: "Overview'da iki ana kalıbı ver: yaşa göre değişen türler (pop, klasik) ve değişmeyen türler (rock, caz). Rakam yazma.",
  },
  units: [
    {
      id: "u1", para: "body1", rel: "Karşıtlık", from: ["f1", "f2"],
      text: "Pop was the favourite of 50% of 16–24s, [[but]] its popularity fell steadily with age, reaching just 15% among those aged 45 and over.",
      why: "Tek türün yaşa göre düşüşünü anlatıyorsun. 'But' burada 'başta yüksek, sonra düşük' karşıtlığını kurar; 'steadily' ve 'reaching' ile düşüşün yönünü ve sonunu söylersin.",
    },
    {
      id: "u2", para: "body1", rel: "Karşıtlık", from: ["f3", "f4"],
      text: "[[In contrast]], classical music became more popular as age increased, rising from 5% of the youngest group to 35% of the oldest, which made it the most popular choice for people over 45.",
      why: "Pop azalıyor, klasik artıyor. 'In contrast' cümle başında bu zıt kalıbı açıkça işaretler. 'Which made it' ile sonucu ekleyerek en yüksek değere bağlarsın.",
    },
    {
      id: "u3", para: "body2", rel: "Benzerlik", from: ["f5", "f6"],
      text: "Rock attracted between 30% and 35% of every age group. [[Similarly]], jazz was chosen by 15% to 20% of each group, with the youngest group slightly less keen.",
      why: "Rock ve caz yaşa göre neredeyse değişmiyor. 'Similarly' bu iki bulguyu bağlar. Sonundaki 'with ...' kısa bir ayrıntı ekler: en gençler %15 ile hafif geride.",
    },
    {
      id: "u4", para: "body2", rel: "Ekleme + karşıtlık", from: ["f7"],
      text: "[[In addition]], among 25–44s pop and rock were equally popular, at 35% each, [[whereas]] classical music was the least popular choice for this group, at 10%.",
      why: "Orta yaş grubuna özel bir bulgu ekliyorsun. 'In addition' yeni bilgi ekler; 'whereas' pop ve rock ile klasiği karşılaştırır.",
    },
  ],
  bodyWhy: {
    body1: "Yaşa göre güçlü değişen iki tür (pop azalıyor, klasik artıyor) birlikte. Okuyucu iki zıt kalıbı arka arkaya görür.",
    body2: "Yaşa göre neredeyse değişmeyen türler (rock, caz) ve orta yaş grubuna özel ayrıntı. Böylece ana karşıtlık bozulmaz.",
  },
}
