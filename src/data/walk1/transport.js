export default {
  id: 'transport',
  title: 'Bar chart: ulaşım',
  kind: 'bar',
  source: 'Konu, bildirilen sınav sorularından esinlenildi (ulaşım türüne göre yolculuk yüzdesi). Veriler örnektir, orijinal chart değildir.',
  prompt: 'The bar chart shows the percentage of trips made by different means of transport in one city in 2000 and 2020.',
  chart: {
    unit: '%', max: 50, step: 10,
    categories: ['Car', 'Bus', 'Walking', 'Cycling'],
    series: [
      { name: '2000', values: [45, 20, 30, 5] },
      { name: '2020', values: [40, 30, 20, 10] },
    ],
  },
  alt: 'Gruplu çubuk grafik, 2000 ve 2020 yıllarında ulaşım türlerinin yüzdesi. Araba 45 ve 40, otobüs 20 ve 30, yürüyüş 30 ve 20, bisiklet 5 ve 10.',
  read: [
    { q: 'Chart ne hakkında?', a: 'Bir şehirde yolculukların hangi ulaşım türüyle yapıldığı.' },
    { q: 'Birim nedir?', a: 'Yüzde (%). Her yılın toplamı %100 eder.' },
    { q: 'Zaman aralığı?', a: 'İki yıl: 2000 ve 2020. Yani değişim anlatılacak (artış, azalış).' },
    { q: 'Chart ile neler yapılabilir?', a: 'Dört ulaşım türünü ve iki yılı karşılaştırabilirsin. En yüksek ve en düşük değeri ve her türün değişimini bul.' },
  ],
  findings: [
    { id: 'f1', tag: 'highest', fact: 'Araba iki yılda da ilk sırada.', sentence: 'The car was the most popular way to travel in both years.', use: true },
    { id: 'f2', tag: 'increase', fact: 'Otobüs %20\'den %30\'a çıktı.', sentence: 'Bus use rose from 20% of trips in 2000 to 30% in 2020.', use: true },
    { id: 'f3', tag: 'decrease', fact: 'Yürüyüş %30\'dan %20\'ye düştü.', sentence: 'The proportion of trips made on foot fell from 30% to 20%.', use: true },
    { id: 'f4', tag: 'increase', fact: 'Bisiklet %5\'ten %10\'a çıktı (iki katı).', sentence: 'The share of cycling doubled, from 5% to 10%.', use: true },
    { id: 'f5', tag: 'decrease', fact: 'Araba %45\'ten %40\'a hafifçe düştü.', sentence: 'The share of car trips dropped slightly, from 45% to 40%.', use: true },
    { id: 'f6', tag: 'overtake', fact: '2020\'de otobüs yürüyüşü geçti (30 > 20).', sentence: 'By 2020, the bus had overtaken walking as the second most common choice.', use: true },
    { id: 'f7', tag: 'lowest', fact: 'Bisiklet iki yılda da en düşük.', sentence: 'Cycling was the least common choice in both years.', use: true },
    { id: 'f9', tag: 'compare', fact: '2000\'de yürüyüş (%30) otobüsten (%20) fazlaydı.', sentence: 'In 2000, walking was used more often than the bus, at 30% compared with 20%.', use: true },
    { id: 'f10', tag: 'compare', fact: '2020\'de araba bisikletin dört katı (40 / 10).', sentence: 'In 2020, car trips were still four times as common as cycling trips.', use: true },
    { id: 'f8', tag: 'detail', fact: '2000\'de araba ile bisiklet arasındaki fark 40 puan.', use: false, skipWhy: 'Çok küçük bir ayrıntı. En yüksek ve en düşük değeri zaten ayrı ayrı yazıyorsun; fark rakamı paragrafı uzatır.' },
  ],
  relations: [
    { tag: 'contrast', between: ['f2', 'f3'], fact: 'Otobüs arttı, yürüyüş azaldı: zıt yönler.' },
    { tag: 'similarity', between: ['f2', 'f4'], fact: 'Otobüs ve bisiklet ikisi de arttı.' },
    { tag: 'similarity', between: ['f3', 'f5'], fact: 'Yürüyüş ve araba ikisi de azaldı.' },
  ],
  intro: {
    text: 'The bar chart compares the percentage of trips made by car, bus, walking and cycling in one city in 2000 and 2020.',
    why: 'Soruyu kelimesi kelimesine kopyalama. "shows" yerine "compares", "different means of transport" yerine dört yöntemi say.',
  },
  overview: {
    text: 'Overall, the car remained the most popular way to travel throughout the period, while bus and bicycle use grew and walking became less common.',
    why: 'Overview rakam içermez; en büyük özelliği (araba lider) ve ana değişimleri (artanlar, azalan) söyler. İki cümleyle sınırlı kalmak yeter.',
  },
  units: [
    {
      id: 'u0', para: 'body1', rel: 'Başlangıç durumu (karşılaştırma)', from: ['f9'],
      text: 'In 2000, walking was used more often than the bus, at 30% [[compared with]] 20%.',
      why: 'Önce başlangıç durumunu ver ki sonraki değişim anlam kazansın. "Compared with" iki rakamı aynı cümlede karşılaştırır ve yeni bir cümle gerektirmez.',
    },
    {
      id: 'u1', para: 'body1', rel: 'Artış + sıra değişimi', from: ['f2', 'f6'],
      text: 'Bus use rose significantly, from 20% of trips in 2000 to 30% in 2020, [[which meant that]] it overtook walking as the second most common way to travel.',
      why: 'İki bulgu aynı olayın parçası: otobüs arttı ve bunun sonucunda yürüyüşü geçti. "Which meant that" bu sonucu tek cümlede bağlar. Sonuç rakamlardan çıktığı için bu bağlacı kullanabilirsin; nedeni tahmin etmiyorsun.',
    },
    {
      id: 'u2', para: 'body1', rel: 'Ödün (-e rağmen) + benzerlik', from: ['f4', 'f7'],
      text: 'Cycling also became more popular, [[although]] it remained the least common choice, with its share doubling from 5% to 10%.',
      why: 'Bisiklet de otobüs gibi arttı (benzerlik, "also"). Ama hâlâ en düşük (ödün). "Although" bu iki bilgiyi tek cümleye koyar.',
    },
    {
      id: 'u3', para: 'body2', rel: 'Benzerlik + karşıtlık', from: ['f3', 'f5'],
      text: '[[Both]] walking and the car became less popular: walking fell from 30% to 20%, [[while]] the car dropped slightly from 45% to 40%.',
      why: 'Yürüyüş ve araba aynı yönde (azalış). "Both" bunu başta söyler; "while" iki rakamı yan yana koyar. Düşüşün büyüklüğü farklı (10 puana karşı 5 puan), bunu "slightly" ile gösterdim.',
    },
    {
      id: 'u4', para: 'body2', rel: 'Ödün (-e rağmen)', from: ['f1', 'f10'],
      text: '[[Even so]], the car remained the most popular way to travel in both years, and in 2020 car trips were still four times as common as cycling trips.',
      why: 'Araba düştü ama lider kaldı. "Even so" önceki cümleye karşı çıkar ve overview\'daki ana mesajı tekrar bağlar.',
    },
  ],
  bodyWhy: {
    body1: 'Artan iki ulaşım türünü (otobüs ve bisiklet) bir araya topladım. Okuyucu tek paragrafta "artış" bilgisini alır.',
    body2: 'Azalan iki tür (yürüyüş ve araba) birlikte. Son cümle, araba azalsa da lider kaldığını söyleyerek overview ile bağ kurar.',
  },
}
