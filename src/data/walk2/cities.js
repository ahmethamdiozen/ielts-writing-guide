export default {
  id: "cities",
  title: "Mixed: gençler şehre taşınıyor",
  type: "Mixed / Hybrid (neden + avantaj-dezavantaj)",
  source: { text: "Mart 2026'da bildirilen soruya benzer (examword.com derlemesi). Soru metni yeniden yazıldı.", url: "https://www.examword.com/ielts-practice/writing-task2-exercise" },
  question: "Many young people are moving from rural areas to large cities. Why is this happening? Do the benefits of this trend outweigh the drawbacks?",
  parse: [
    { q: "Konu nedir?", a: "Gençlerin köylerden büyük şehirlere taşınması. Anahtar kelimeler: young people, rural areas, large cities, benefits, drawbacks." },
    { q: "Essay türü?", a: "Mixed (hibrit): bir 'neden' sorusu ve bir 'outweigh' sorusu birleşiyor." },
    { q: "Soru tam olarak ne istiyor?", a: "1) Neden taşınıyorlar? 2) Faydalar mı yoksa zararlar mı ağır basıyor?" },
    { q: "Ne istemiyor?", a: "Şehirlerin tarihi ya da bu durumu nasıl durduracağın (çözüm). Sadece sebep ve değerlendirme." },
  ],
  candidates: [
    { id: "i1", text: "Şehirlerde çok daha fazla iş ve yüksek maaş var (neden).", pick: "body1", why: "En güçlü neden ve örneği kolay (mühendis, şirket). Tek, net neden iyi bir paragraf yapar." },
    { id: "i2", text: "Şehirlerde eğitim ve eğlence imkanları daha fazla (neden).", pick: false, why: "Mantıklı ama ikinci neden eklersen 2. soruya yer kalmaz." },
    { id: "i3", text: "Gençler daha iyi gelir ve deneyim kazanır, ailelerine para gönderir (fayda).", pick: "body2", why: "'Faydalar ağır basıyor' görüşünü destekler. Birinci fikre (iş) doğal devam: iş → gelir → aile." },
    { id: "i4", text: "Şehirler kalabalık ve evler pahalı; köyler genç nüfus kaybeder (dezavantaj).", pick: false, why: "Ayrı paragraf olmaz. 'It is true that...' ile tek cümlede kabul edip fayda lehine çürüt." },
  ],
  ask: {
    body1: ["Şehirlerde hangi işler var, köylerde ne var?", "Yüksek maaş genç için neden önemli?", "Hangi meslekten genç örneği verebilirsin?"],
    body2: ["Taşınan gençler ne kazanır?", "Aile ve ekonomi için sonuç ne?", "Hangi ülke ya da örnek bunu gösterir?"],
  },
  essay: [
    { name: "Introduction", sentences: [
      { t: "In many countries, a growing number of young people leave the countryside to live in big cities.", role: "paraphrase" },
      { t: "This is mainly because cities offer better jobs, and although there are some drawbacks, I believe the benefits are greater.", role: "thesis" },
    ] },
    { name: "Body 1", idea: "i1", sentences: [
      { t: "The main reason for this trend is that cities offer far more job opportunities.", role: "point" },
      { t: "Most large companies, hospitals and universities are located in cities, whereas villages usually offer only farming or small local businesses, so educated young people have few choices at home.", role: "explain" },
      { t: "Even young people who love village life often feel that they have no real alternative.", role: "explain" },
      { t: "For example, a young engineer from a village will almost certainly have to move to a city to find a job in his or her field.", role: "example" },
      { t: "Better jobs also mean higher salaries, which is a strong reason to move.", role: "link" },
    ] },
    { name: "Body 2", idea: "i3", sentences: [
      { t: "In my opinion, the advantages of this movement outweigh the disadvantages.", role: "point" },
      { t: "It is true that cities are crowded and housing is expensive, but young people who move gain better incomes and more experience, and many of them send money to their families back home.", role: "explain" },
      { t: "These earnings can pay for food, education and medical care in places where wages are low.", role: "explain" },
      { t: "In China, for instance, millions of workers in cities support relatives in rural areas with part of their salaries.", role: "example" },
      { t: "Therefore, the benefits for individuals and for their families are greater than the problems.", role: "link" },
    ] },
    { name: "Conclusion", sentences: [
      { t: "In conclusion, young people move to cities mainly because of better employment opportunities, and I believe this is more beneficial than harmful.", role: "restate" },
      { t: "Although crowding and high costs are real problems, the advantages for individuals and families are greater.", role: "wrap" },
    ] },
  ],
  introWhy: "Hibrit soruda tez iki soruyu da cevaplar: 'mainly because ...' (neden) ve 'I believe the benefits are greater' (değerlendirme).",
  conclusionWhy: "Neden ve değerlendirmeyi tek cümlede toplar. Son cümle dezavantajı kısaca kabul edip tezi tekrarlar.",
  drift: [
    { s: "Many villages have beautiful scenery and clean air.", on: false, why: "Kırsalın güzelliği ayrı bir argüman; iki ana fikrine hizmet etmiyor ve planını dağıtır." },
    { s: "Young people who work in cities often send money to their families.", on: true, why: "İkinci fikri (aileye destek) açıklıyor. Planına uyuyor." },
    { s: "The first cities appeared thousands of years ago.", on: false, why: "Tarihsel bilgi; neden ya da değerlendirme sorusuna cevap vermiyor." },
  ],
}
