export default {
  id: 'tourists',
  title: 'Mixed: line graph + tablo',
  kind: 'mixed',
  source: "Konu, bildirilen sınav sorularından esinlenildi (turist gelişleri ve gelir). Veriler ve ülkeler örnektir, orijinal chart değildir.",
  prompt: "The line graph shows international tourist arrivals in three countries between 2000 and 2020, and the table gives revenue figures for the same countries in 2020.",
  chart: {
    parts: [
      {
        kind: "line",
        alt: "Çizgi grafik, milyon turist: A ülkesi 10, 14, 20, 28, 40; B ülkesi 18, 20, 24, 25, 26; C ülkesi 6, 8, 7, 12, 15. 2000den 2020ye beş yıllık aralıklarla.",
        chart: {
          unit: "million", max: 50, step: 10, yLabel: "Tourist arrivals (millions)",
          xs: [2000, 2005, 2010, 2015, 2020],
          series: [
            { name: "Country A", values: [10, 14, 20, 28, 40] },
            { name: "Country B", values: [18, 20, 24, 25, 26] },
            { name: "Country C", values: [6, 8, 7, 12, 15] },
          ],
        },
      },
      {
        kind: "table",
        chart: {
          unit: "2020",
          columns: ["Arrivals (millions)", "Revenue ($ billion)", "Revenue per tourist ($)"],
          rows: [
            { name: "Country A", values: ["40", "60", "1,500"] },
            { name: "Country B", values: ["26", "52", "2,000"] },
            { name: "Country C", values: ["15", "18", "1,200"] },
          ],
        },
      },
    ],
  },
  alt: "",
  read: [
    { q: "İki görsel ne hakkında?", a: "Çizgi grafik: üç ülkenin turist sayısı (zaman içinde). Tablo: aynı ülkelerin 2020'deki geliri." },
    { q: "Birimler nedir?", a: "Grafik: milyon turist. Tablo: milyon turist, milyar dolar ve kişi başı dolar." },
    { q: "İki görsel nasıl bağlanıyor?", a: "Aynı üç ülke. Tabloda 2020 turist sayıları grafiğin son noktalarıyla aynı (40, 26, 15)." },
    { q: "Nasıl yazacaksın?", a: "Önce grafiği (trend), sonra tabloyu (2020 geliri) ayrı paragraflarda anlat. Overview'da ikisini de özetle." },
  ],
  findings: [
    { id: "f1", tag: "highest", fact: "2000'de B en çok turist aldı (18 milyon); A 10, C 6.", sentence: "In 2000, Country B attracted the most tourists, with 18 million arrivals, compared with 10 million for Country A and 6 million for Country C.", use: true },
    { id: "f2", tag: "increase", fact: "A hızla arttı: 10 → 40 milyon (dört kat).", sentence: "Arrivals in Country A grew rapidly to reach 40 million, which was four times the 2000 figure.", use: true },
    { id: "f3", tag: "increase", fact: "B yavaş arttı: 18 → 26 milyon.", sentence: "Arrivals in Country B increased slowly to only 26 million.", use: true },
    { id: "f4", tag: "overtake", fact: "A, 2015'e kadar B'yi geçti.", sentence: "Country A overtook Country B by 2015.", use: true },
    { id: "f5", tag: "increase", fact: "C en küçük pazar kaldı ama 6 → 15 milyon (iki buçuk kat).", sentence: "Country C stayed the smallest market, although its arrivals more than doubled, from 6 million to 15 million.", use: true },
    { id: "f6", tag: "highest", fact: "Tablo: A en çok gelir ($60 milyar), sonra B ($52), C ($18).", sentence: "Country A earned the most revenue in 2020, at $60 billion, followed by Country B with $52 billion and Country C with $18 billion.", use: true },
    { id: "f7", tag: "compare", fact: "Tablo: B kişi başı en çok gelir ($2,000); A $1,500, C $1,200.", sentence: "Country B earned the most from each tourist, at $2,000, while the figures for Country A and Country C were $1,500 and $1,200.", use: true },
    { id: "f8", tag: "detail", fact: "C 2010'da 8'den 7'ye hafifçe düştü.", use: false, skipWhy: "Küçük bir dalgalanma. Genel eğilim artış; bu ayrıntıyı yazmak ana mesajı bulanıklaştırır." },
  ],
  relations: [
    { tag: "contrast", between: ["f2", "f3"], fact: "A hızlı artıyor, B yavaş artıyor." },
    { tag: "similarity", between: ["f2", "f6"], fact: "İki görselde de A en güçlü (en çok turist ve en çok gelir)." },
    { tag: "contrast", between: ["f6", "f7"], fact: "Toplam gelirde A birinci, kişi başı gelirde B birinci." },
  ],
  intro: {
    text: "The line graph shows international tourist arrivals in three countries from 2000 to 2020, and the table gives revenue figures for these countries in 2020.",
    why: "Her iki görseli tek cümleyle tanıt. Grafik için 'shows', tablo için 'gives' kullanmak tekrarı önler.",
  },
  overview: {
    text: "Overall, tourist numbers rose in all three countries, with Country A growing fastest and earning the most revenue in 2020, while Country B earned the most from each tourist.",
    why: "İki görseli tek overview'da ilişkilendirir: grafikten ana trend, tablodan ana özellik. Rakam yok.",
  },
  units: [
    {
      id: "u1", para: "body1", rel: "Başlangıç (karşılaştırma)", from: ["f1"],
      text: "In 2000, Country B attracted the most tourists, with 18 million arrivals, [[compared with]] 10 million for Country A and 6 million for Country C.",
      why: "İlk yılı üç rakamla verirsin. 'Compared with' üç değeri tek cümlede sıralar.",
    },
    {
      id: "u2", para: "body1", rel: "Karşıtlık", from: ["f2", "f3"],
      text: "[[However]], Country A grew much faster, rising to 40 million, [[whereas]] arrivals in Country B increased slowly to only 26 million.",
      why: "B ilk başta önde; ama A'nın hızlı büyümesi bunu değiştirdi. 'However' bu dönüşü başlatır, 'whereas' iki büyüme hızını karşılaştırır.",
    },
    {
      id: "u3", para: "body1", rel: "Sonuç + ödün", from: ["f4", "f5"],
      text: "[[Consequently]], Country A overtook Country B by 2015. Country C stayed the smallest market, [[although]] its arrivals more than doubled, from 6 million to 15 million.",
      why: "Kesişim rakamların sonucu. 'Although' C'nin küçük kaldığını ama büyüdüğünü bir arada verir.",
    },
    {
      id: "u4", para: "body2", rel: "Geçiş + sıra", from: ["f6"],
      text: "[[Turning to]] the table, Country A also earned the most revenue in 2020, at $60 billion, [[followed by]] Country B with $52 billion and Country C with only $18 billion.",
      why: "'Turning to' ikinci görsele geçişi işaretler. 'Followed by' sıralamayı tek cümleye sığdırır.",
    },
    {
      id: "u5", para: "body2", rel: "Karşıtlık", from: ["f7"],
      text: "[[However]], Country B earned the most from each tourist, at $2,000, [[while]] the figures for Country A and Country C were $1,500 and $1,200.",
      why: "Toplam gelirde A birinci iken kişi başı gelirde B birinci. 'However' bu farkı vurgular, 'while' rakamları karşılaştırır.",
    },
  ],
  bodyWhy: {
    body1: "Çizgi grafikteki tüm bilgiler: başlangıç, büyüme hızı, kesişim. Tek görsel, tek paragraf.",
    body2: "Tablodaki bilgiler: toplam gelir ve kişi başı gelir. İkinci görsel ayrı paragraf; 'Turning to' ile geçiş yapılıyor.",
  },
}
