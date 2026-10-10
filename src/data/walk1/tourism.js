export default {
  id: 'tourism',
  title: 'Table: turizm',
  kind: 'table',
  source: "Konu, bildirilen sınav sorularından esinlenildi (turizmdeki değişim, üç farklı zaman noktası). Veriler örnektir, orijinal tablo değildir.",
  prompt: "The table compares changes in tourism in one country at three different points in time.",
  chart: {
    unit: "Tourism in one country",
    columns: ["Visitors (millions)", "Average stay (nights)", "Revenue ($ billion)"],
    rows: [
      { name: "1990", values: ["3.0", "22", "6"] },
      { name: "2005", values: ["5.5", "17", "18"] },
      { name: "2020", values: ["9.0", "12", "34"] },
    ],
  },
  alt: "Tablo: 1990, 2005 ve 2020 için ziyaretçi sayısı (milyon), ortalama kalış (gece) ve gelir (milyar dolar). 1990: 3,0, 22, 6. 2005: 5,5, 17, 18. 2020: 9,0, 12, 34.",
  read: [
    { q: "Tablo ne hakkında?", a: "Bir ülkede turizmin üç göstergesi: ziyaretçi sayısı, ortalama kalış süresi ve gelir." },
    { q: "Birimler nedir?", a: "Ziyaretçi: milyon kişi. Kalış: gece. Gelir: milyar dolar. Üç sütunun birimi farklı, karıştırma." },
    { q: "Zaman aralığı?", a: "Üç yıl: 1990, 2005, 2020. Aralar eşit (15'er yıl), yani 'hangi dönemde daha hızlı' sorusu sorulabilir." },
    { q: "Hangi satır ve sütunlara bakacaksın?", a: "Her sütunda başlangıç ve bitiş değerine ve genel eğilime bak. Ara yıl değerlerini sadece gerekirse kullan." },
  ],
  findings: [
    { id: "f1", tag: "increase", fact: "Ziyaretçi 3,0 milyondan 9,0 milyona çıktı (tam üç katı).", sentence: "The number of tourists rose from 3 million in 1990 to 9 million in 2020, which was exactly three times the original figure.", use: true },
    { id: "f2", tag: "increase", fact: "Gelir 6 milyar dolardan 34 milyar dolara çıktı (yaklaşık altı kat).", sentence: "Tourism revenue grew from $6 billion to $34 billion, an increase of almost six times.", use: true },
    { id: "f3", tag: "decrease", fact: "Ortalama kalış 22 geceden 12 geceye düştü.", sentence: "The average stay fell from 22 nights in 1990 to 12 in 2020.", use: true },
    { id: "f4", tag: "compare", fact: "İkinci dönemde artış daha büyük (ziyaretçi +3,5 milyon, ilk dönem +2,5 milyon).", sentence: "Visitor numbers rose by 3.5 million after 2005, compared with 2.5 million between 1990 and 2005.", use: true },
    { id: "f5", tag: "compare", fact: "2020'de kalış, 1990'ın biraz üstünde yarısı kadar (12 / 22).", sentence: "In 2020, visitors stayed for just over half as long as in 1990.", use: true },
    { id: "f6", tag: "detail", fact: "2005 değerleri (5,5 / 17 / 18).", use: false, skipWhy: "Ara yıl. Başlangıç ve bitiş ile eğilimi anlatmak yeter; 2005'i sadece trendi göstermek için kısaca ekleyebilirsin." },
  ],
  relations: [
    { tag: "contrast", between: ["f1", "f3"], fact: "Ziyaretçi ve gelir artıyor, kalış süresi azalıyor." },
    { tag: "similarity", between: ["f1", "f2"], fact: "Ziyaretçi ve gelir aynı yönde (artış)." },
    { tag: "compare", between: ["f4"], fact: "İkinci dönemde büyüme hızlandı." },
  ],
  intro: {
    text: "The table compares tourism in one country at three points in time, in 1990, 2005 and 2020, in terms of visitor numbers, length of stay and revenue.",
    why: "Tablodaki üç göstergeyi ve üç yılı introduction'da say. 'In terms of' göstergeleri tek ifadeyle toplar.",
  },
  overview: {
    text: "Overall, the number of visitors and the revenue from tourism increased steadily, whereas the average length of stay fell throughout the period.",
    why: "İki ana eğilim: ikisi artıyor, biri azalıyor. Rakam içermez.",
  },
  units: [
    {
      id: "u1", para: "body1", rel: "Sıra / zaman", from: ["f1"],
      text: "The number of tourists rose from 3 million in 1990 to 5.5 million in 2005, [[and then]] reached 9 million in 2020, which was exactly three times the original figure.",
      why: "Ara yılı 'and then' ile eklersin; böylece eğilimin sürekli olduğunu göstermiş olursun. 'Exactly three times' hesaplanmış bir karşılaştırma.",
    },
    {
      id: "u2", para: "body1", rel: "Benzerlik", from: ["f2"],
      text: "[[Similarly]], tourism revenue grew from $6 billion to $18 billion and finally to $34 billion, an increase of almost six times.",
      why: "Gelir de ziyaretçi gibi arttı. 'Similarly' bu benzer kalıbı işaretler. 'Almost six times' 34 / 6'nın yaklaşığı.",
    },
    {
      id: "u3", para: "body1", rel: "Karşılaştırma", from: ["f4"],
      text: "Both figures grew faster after 2005: visitor numbers rose by 3.5 million, [[compared with]] 2.5 million between 1990 and 2005.",
      why: "İki dönemi karşılaştırmak tablo anlatımında iyi bir 'bonus' bulgudur. 'Compared with' iki rakamı tek cümleye bağlar.",
    },
    {
      id: "u4", para: "body2", rel: "Karşıtlık", from: ["f3", "f5"],
      text: "[[By contrast]], tourists stayed for shorter periods over time. The average stay fell from 22 nights in 1990 to 17 in 2005 and 12 in 2020, [[meaning that]] visitors in 2020 stayed for just over half as long as in 1990.",
      why: "Diğer iki göstergeye zıt yön. 'By contrast' yeni paragrafa geçişi sağlar. 'Meaning that' hesaplanmış sonucu ekler.",
    },
    {
      id: "u5", para: "body2", rel: "Ödün (-e rağmen)", from: ["f1", "f2"],
      text: "[[Although]] visitors stayed for shorter periods, the total number of tourists and the revenue both continued to grow.",
      why: "Kalış kısalmasına rağmen diğer ikisi artmaya devam etti. 'Although' karşıtlığı tek cümlede toplar; nedeni tahmin etmiyorsun, sadece iki gerçeği karşı karşıya koyuyorsun.",
    },
  ],
  bodyWhy: {
    body1: "Artan iki gösterge (ziyaretçi ve gelir) ve dönemler arası karşılaştırma bir arada.",
    body2: "Azalan gösterge (kalış süresi) ve diğer ikisiyle karşıtlığı. Her paragraf tek bir yöne ayrıldı.",
  },
}
