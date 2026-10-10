export default {
  id: "products",
  title: "Development: sürekli yeni ürünler",
  type: "Positive or Negative Development",
  source: { text: "Aralık 2025'te bildirilen soruya benzer (examword.com derlemesi). Soru metni yeniden yazıldı.", url: "https://www.examword.com/ielts-practice/writing-task2-exercise" },
  question: "Companies are constantly launching new products, which encourages people to replace the things they already own. Is this a positive or negative development?",
  parse: [
    { q: "Konu nedir?", a: "Şirketlerin sürekli yeni ürün çıkarması ve insanların eski eşyaları değiştirmesi. Anahtar kelimeler: launching new products, replace, positive or negative." },
    { q: "Essay türü?", a: "Positive or negative development. Bir görüş seçip savunman gerekir." },
    { q: "Soru tam olarak ne istiyor?", a: "Bu gelişmenin olumlu mu olumsuz mu olduğuna dair net görüşün ve nedenlerin." },
    { q: "Ne istemiyor?", a: "Çözüm önermek (bu bir problem-solution sorusu değil) ya da belirli bir şirketin hikayesini anlatmak." },
  ],
  candidates: [
    { id: "i1", text: "Atık artar; eski ürünler çöpe gider ve çevreye zarar verir (olumsuz).", pick: "body1", why: "Somut, kanıtı kolay (telefon, pil örneği). Olumsuz görüşün en güçlü nedeni." },
    { id: "i2", text: "İnsanlar, ürünleri eskimiş hissetmemek için ihtiyaç dışı harcama yapar (olumsuz).", pick: "body2", why: "Birinci fikirden farklı bir alan (çevre yerine kişisel mali sorun). İki paragraf ayrı kalır." },
    { id: "i3", text: "Yeni ürünler iş yaratır ve yeniliği teşvik eder (olumlu).", pick: false, why: "Karşı görüş. Ayrı paragraf yapma; sadece 'Admittedly...' ile tek cümlede kabul edip çürüt." },
    { id: "i4", text: "Yeni ürünlerin kalitesi daha düşük.", pick: false, why: "Kanıtlaması zor, genelleme. Band 7'de açıklayamayacağın fikri seçme." },
  ],
  ask: {
    body1: ["Eski ürünler nereye gider?", "Bu çevreye nasıl zarar verir?", "Hangi ürün örneği verebilirsin (telefon, batarya)?"],
    body2: ["Reklamlar ve çevre insanları nasıl etkiler?", "İnsanlar neden ihtiyaç dışı harcama yapar?", "Hangi kişi örneği (kredi kartı) anlatabilirsin?"],
  },
  essay: [
    { name: "Introduction", sentences: [
      { t: "Nowadays, companies release new versions of phones, clothes and other goods very frequently, and many consumers replace items that still work.", role: "paraphrase" },
      { t: "I believe this trend is mainly negative, because it creates a great deal of waste and puts pressure on people to spend money they may not have.", role: "thesis" },
    ] },
    { name: "Body 1", idea: "i1", sentences: [
      { t: "The most serious problem is the amount of waste that this trend produces.", role: "point" },
      { t: "When people throw away old products that still work, they end up in rubbish dumps, and many of them contain materials that harm the environment.", role: "explain" },
      { t: "In addition, factories must use energy and raw materials to make each new product, which adds to the damage.", role: "explain" },
      { t: "Old mobile phones, for instance, contain metals and batteries that can pollute soil and water if they are not recycled properly.", role: "example" },
      { t: "Therefore, constant replacement is harmful for the planet.", role: "link" },
    ] },
    { name: "Body 2", idea: "i2", sentences: [
      { t: "In addition, this trend puts financial pressure on consumers.", role: "point" },
      { t: "Advertisements make people feel that their belongings are out of date, so many of them buy new products to avoid feeling left behind, even when they cannot afford it.", role: "explain" },
      { t: "Over time, this constant pressure can lead to stress, especially for people with low incomes.", role: "explain" },
      { t: "A young person who buys the latest phone with a credit card, for example, may spend months paying off the debt.", role: "example" },
      { t: "Admittedly, new products create jobs and encourage innovation, but these benefits do not justify so much waste and debt.", role: "link" },
    ] },
    { name: "Conclusion", sentences: [
      { t: "In conclusion, I believe that the constant launch of new products is a negative development because it increases waste and encourages people to overspend.", role: "restate" },
      { t: "Consumers should keep their products for longer, and companies should make items that last.", role: "wrap" },
    ] },
  ],
  introWhy: "Tez net bir taraf seçer ve iki nedeni önceden söyler ('waste' ve 'pressure to spend'). Her neden bir body paragrafına dönüşür.",
  conclusionWhy: "Görüşünü ve iki nedeni tek cümlede tekrar eder; yeni neden eklemez.",
  drift: [
    { s: "Some companies produce goods in factories in Asia.", on: false, why: "Konu üretim yeri değil; yeni ürünlerin olumlu ya da olumsuz etkisi. Soruya cevap vermiyor." },
    { s: "Buying on credit can leave young people in debt.", on: true, why: "İkinci fikri (mali baskı) açıklıyor. Planına uyuyor." },
    { s: "Recycling centres in many cities collect old electronic devices.", on: false, why: "Bu bir çözüm; soru çözüm istemiyor ('olumlu mu olumsuz mu?'). Plandan sapar." },
  ],
}
