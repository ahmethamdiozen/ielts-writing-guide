export default {
  id: 'cars',
  title: 'Line graph: araba ve toplu taşıma',
  kind: 'line',
  source: "Konu, bildirilen sınav sorularından esinlenildi (toplu taşıma ile özel araç kullananların yüzdesi). Veriler örnektir, orijinal chart değildir.",
  prompt: "The line graph shows the percentage of people who used private cars and public transport in one city between 2000 and 2020.",
  chart: {
    unit: "%", max: 80, step: 20, yLabel: "People using each method (%)",
    xs: [2000, 2005, 2010, 2015, 2020],
    series: [
      { name: "Private cars", values: [50, 55, 60, 52, 45] },
      { name: "Public transport", values: [35, 30, 25, 32, 48] },
    ],
  },
  alt: "Çizgi grafik: özel araç 50, 55, 60, 52, 45; toplu taşıma 35, 30, 25, 32, 48 yüzde. 2000'den 2020'ye beş yıllık aralıklarla.",
  read: [
    { q: "Chart ne hakkında?", a: "Bir şehirde özel araç ve toplu taşıma kullanan insanların yüzdesi." },
    { q: "Birim nedir?", a: "Yüzde (%). İki çizgi var, toplamları %100 olmak zorunda değil (yürüyenler vb. de var)." },
    { q: "Zaman aralığı?", a: "2000–2020, beş yıllık adımlarla. Trend ve dönüm noktaları anlatılacak." },
    { q: "Chart ile neler yapılabilir?", a: "Zirve ve dip noktalarını, çizgilerin zıt hareketini ve kesişimi bul." },
  ],
  findings: [
    { id: "f1", tag: "compare", fact: "2000'de araba (%50) toplu taşımadan (%35) fazla.", sentence: "In 2000, 50% of people travelled by car, compared with 35% by public transport.", use: true },
    { id: "f2", tag: "increase", fact: "Araba 2010'da zirveye çıktı (%60).", sentence: "Car use rose to a peak of 60% in 2010.", use: true },
    { id: "f3", tag: "decrease", fact: "Toplu taşıma 2010'da en düşük seviyeye indi (%25).", sentence: "The figure for public transport fell to its lowest point of 25% in 2010.", use: true },
    { id: "f4", tag: "compare", fact: "2010'da fark en büyük: 35 puan (60 − 25).", sentence: "The gap between the two methods widened to 35 percentage points in 2010, the largest in the period.", use: true },
    { id: "f5", tag: "decrease", fact: "Araba 2015'te %52, 2020'de %45'e düştü.", sentence: "Car use dropped to 52% in 2015 and to 45% in 2020.", use: true },
    { id: "f6", tag: "increase", fact: "Toplu taşıma 2015'te %32, 2020'de %48'e çıktı (son beş yılda sıçrama).", sentence: "Public transport rose to 32% in 2015 and then jumped to 48% in 2020.", use: true },
    { id: "f7", tag: "overtake", fact: "2020'de toplu taşıma arabayı ilk kez geçti (48 > 45).", sentence: "In 2020, public transport overtook the car for the first time, although the difference was only three percentage points.", use: true },
    { id: "f8", tag: "detail", fact: "2005 değerleri: araba %55, toplu taşıma %30.", use: false, skipWhy: "Ara nokta. Zirve ve dip daha önemli; ara değerleri yazmak metni uzatır." },
  ],
  relations: [
    { tag: "contrast", between: ["f2", "f3"], fact: "2010'a kadar araba artıyor, toplu taşıma azalıyor." },
    { tag: "contrast", between: ["f5", "f6"], fact: "2010'dan sonra yön tersine dönüyor." },
    { tag: "similarity", between: ["f2", "f3"], fact: "İki çizgi de 2010'da dönüm noktasına geliyor (zirve ve dip)." },
  ],
  intro: {
    text: "The line graph compares the percentage of people who used private cars and public transport in one city between 2000 and 2020.",
    why: "'Compares' iki çizgiyi karşılaştırdığını söyler. Soruyu kopyalama; 'used' ve 'one city' ifadelerini koru ama yapıyı değiştir.",
  },
  overview: {
    text: "Overall, car use rose at first and then fell, while public transport followed the opposite pattern, and by 2020 public transport had become the more popular choice.",
    why: "İki trendi ve ana özelliği verir: zıt hareket ve sonunda sıra değişimi. Rakam içermez.",
  },
  units: [
    {
      id: "u1", para: "body1", rel: "Başlangıç (karşılaştırma)", from: ["f1"],
      text: "In 2000, 50% of people travelled by car, [[compared with]] 35% by public transport.",
      why: "İlk yılı iki rakamla verirsin. 'Compared with' iki rakamı tek cümlede karşılaştırır.",
    },
    {
      id: "u2", para: "body1", rel: "Karşıtlık", from: ["f2", "f3"],
      text: "Over the next decade, car use rose to a peak of 60% in 2010, [[while]] the figure for public transport fell to its lowest point of 25%.",
      why: "Aynı on yılda zıt yönler. 'While' iki trendi bağlar; 'peak' ve 'lowest point' dönüm noktalarını gösterir.",
    },
    {
      id: "u3", para: "body1", rel: "Sonuç", from: ["f4"],
      text: "[[As a result]], the gap between the two methods widened to 35 percentage points, the largest in the whole period.",
      why: "Zıt hareketin aritmetik sonucu: fark açıldı. Nedeni tahmin etmiyorsun, rakamların sonucunu söylüyorsun.",
    },
    {
      id: "u4", para: "body2", rel: "Sıra + karşıtlık", from: ["f5", "f6"],
      text: "[[After that]], the trends were reversed: car use dropped to 52% in 2015 and 45% in 2020, [[whereas]] public transport rose to 32% and then jumped to 48%.",
      why: "2010'dan sonra yön ters döndü. 'After that' zaman sırasını gösterir, 'whereas' iki yeni trendi karşılaştırır. İki nokta üst üste kısmı bir açıklama başlatır.",
    },
    {
      id: "u5", para: "body2", rel: "Sonuç + ödün", from: ["f7"],
      text: "[[Consequently]], public transport overtook the car for the first time in 2020, [[although]] the difference was only three percentage points.",
      why: "Trendin sonucu: kesişim. 'Although' farkın küçük olduğunu ekler ve cümleyi dengeler.",
    },
  ],
  bodyWhy: {
    body1: "2000–2010 arası: araba artıyor, toplu taşıma azalıyor ve fark açılıyor. Hepsi 'ilk dönem' fikrinde.",
    body2: "2010–2020 arası: yön tersine dönüyor ve toplu taşıma öne geçiyor. İkinci dönem tek paragrafta.",
  },
}
