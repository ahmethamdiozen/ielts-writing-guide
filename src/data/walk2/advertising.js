export default {
  id: "advertising",
  title: "Two-part: reklamın etkisi azalıyor",
  type: "Two-part (Direct questions)",
  source: { text: "Ocak 2026'da bildirilen soruya benzer (examword.com derlemesi). Soru metni yeniden yazıldı.", url: "https://www.examword.com/ielts-practice/writing-task2-exercise" },
  question: "These days, consumers are less influenced by advertising than they were in the past. Why do you think this is happening? Is this a positive or negative development?",
  parse: [
    { q: "Konu nedir?", a: "Reklamın tüketiciler üzerindeki etkisinin azalması. Anahtar kelimeler: consumers, less influenced, advertising." },
    { q: "Essay türü?", a: "Two-part (iki doğrudan soru). Her soruya ayrı bir paragraf ayır." },
    { q: "Soru tam olarak ne istiyor?", a: "1) Neden böyle oluyor? 2) Bu olumlu mu, olumsuz mu? İkisini de cevaplamalısın." },
    { q: "Ne istemiyor?", a: "Reklamların tarihçesi ya da reklam türlerini anlatmak. Sadece sebep ve değerlendirme." },
  ],
  candidates: [
    { id: "i1", text: "İnsanlar artık internetten yorumlara ve fiyat karşılaştırmasına kolayca ulaşıyor (neden).", pick: "body1", why: "1. soruya doğrudan cevap. Günlük hayattan bir örnekle (laptop alırken yorum okumak) açıklaması kolay." },
    { id: "i2", text: "İnsanlar reklamlardan sıkıldı ve reklam engelleyici kullanıyor (neden).", pick: false, why: "Mantıklı bir ikinci neden. Ama iki nedeni yazarsan 2. soruya yer kalmaz. Bu yapıda her soruya bir paragraf yeter." },
    { id: "i3", text: "Gerçeklere dayanan karar, gereksiz harcamayı azaltır (olumlu).", pick: "body2", why: "2. soruya net cevap ve birinci fikre bağlı: bilgi → daha akıllı karar." },
    { id: "i4", text: "Reklam sektöründe çalışanların işi risk altına girer (olumsuz).", pick: false, why: "Seçtiğin görüşün (olumlu) tersine gidiyor. Bir paragrafta iki zıt görüşü anlatma; tek tarafı seç." },
  ],
  ask: {
    body1: ["Alışveriş yapmadan önce insanlar neye bakıyor?", "Bu reklamın gücünü nasıl azaltıyor?", "Hangi ürün ve örnek verebilirsin?"],
    body2: ["Bilgiye dayanan karar neden daha iyi?", "Tüketici ve şirket için sonuç ne olur?", "Hangi aile ya da alışveriş örneğini kullanabilirsin?"],
  },
  essay: [
    { name: "Introduction", sentences: [
      { t: "It is often said that advertisements have less effect on shoppers today than they once did.", role: "paraphrase" },
      { t: "In my opinion, this is mainly because people can now find information online, and I think it is a positive development.", role: "thesis" },
    ] },
    { name: "Body 1", idea: "i1", sentences: [
      { t: "The main reason is that consumers now have easy access to information.", role: "point" },
      { t: "Before buying a product, most people can read reviews and compare prices on their phones, so they do not need to rely on what an advertisement says.", role: "explain" },
      { t: "Many consumers also trust the opinions of other customers more than the claims of a company.", role: "explain" },
      { t: "For example, a person who wants to buy a new laptop can watch several video reviews in a few minutes and then choose the best one for the price.", role: "example" },
      { t: "As a result, advertisements have lost much of their power to persuade.", role: "link" },
    ] },
    { name: "Body 2", idea: "i3", sentences: [
      { t: "I believe this change is positive for consumers.", role: "point" },
      { t: "When people make decisions based on facts rather than on attractive advertisements, they are less likely to waste money on products they do not need.", role: "explain" },
      { t: "This habit also protects people from buying products only because of a clever slogan or a famous face.", role: "explain" },
      { t: "A family that checks customer opinions before buying a washing machine, for instance, is more likely to choose a reliable model.", role: "example" },
      { t: "In addition, companies must now improve the quality of their products in order to succeed.", role: "link" },
    ] },
    { name: "Conclusion", sentences: [
      { t: "In conclusion, advertising is less effective today mainly because consumers can easily check information for themselves, and I think this is a positive trend because it leads to wiser spending.", role: "restate" },
      { t: "Companies should therefore concentrate on quality rather than on advertising.", role: "wrap" },
    ] },
  ],
  introWhy: "İki soruyu da tek cümlelik tezle cevaplarsın: 'mainly because ...' (neden) ve 'I think it is positive' (değerlendirme). Her soruya ayrı bir body paragraf ayrılır.",
  conclusionWhy: "İki cevabı tek cümlede toplar. İkinci cümle sonuçtan çıkan kısa bir öneridir; yeni argüman değildir.",
  drift: [
    { s: "Advertising agencies employ thousands of creative people around the world.", on: false, why: "Reklam sektörünün iş yaratması olumsuz görüşe hizmet eder; sen 'olumlu' dedin. Planına uymuyor." },
    { s: "Reviews on websites help buyers to compare products.", on: true, why: "Birinci fikri (bilgiye erişim) açıklıyor. Planına uyuyor." },
    { s: "Television was invented in the twentieth century.", on: false, why: "Genel bilgi; neden ya da değerlendirme sorusuna cevap vermiyor." },
  ],
}
