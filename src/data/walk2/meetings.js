export default {
  id: "meetings",
  title: "Advantages & Disadvantages: yüz yüze toplantılar",
  type: "Advantages & Disadvantages (outweigh)",
  source: { text: "Eylül 2025'te bildirilen soruya benzer (examword.com derlemesi). Soru metni yeniden yazıldı.", url: "https://www.examword.com/ielts-practice/writing-task2-exercise" },
  question: "Many businesses now use email and video calls to communicate, but some still prefer face-to-face meetings. Do the advantages of face-to-face business meetings outweigh the disadvantages?",
  parse: [
    { q: "Konu nedir?", a: "Yüz yüze iş toplantıları (video görüşme ve e-postaya karşı). Anahtar kelimeler: face-to-face, business meetings, advantages, disadvantages." },
    { q: "Essay türü?", a: "Advantages & Disadvantages, 'outweigh' ile. Yani sadece listelemek yetmez; hangisinin ağır bastığını söylemelisin." },
    { q: "Soru tam olarak ne istiyor?", a: "Avantajlar, dezavantajlar ve bir değerlendirme (hangisi ağır basıyor)." },
    { q: "Ne istemiyor?", a: "Video görüşmenin avantajlarını uzun uzun anlatmak. Konu yüz yüze toplantılar." },
  ],
  candidates: [
    { id: "i1", text: "Yüz yüze görüşmek güven oluşturur; beden dili ve ses tonu okunur (avantaj).", pick: "body1", why: "Güçlü bir avantaj; hem açıklaması hem örneği net. İş ilişkisine doğrudan bağlı." },
    { id: "i2", text: "Yüz yüze toplantılarda karar daha hızlı alınır.", pick: false, why: "Tartışmalı: video görüşmede de hızlı karar alınabilir. İkinci bir avantaj olarak yazarsan paragraf zayıflar." },
    { id: "i3", text: "Seyahat para ve zaman kaybettirir (dezavantaj).", pick: "body2", why: "Dezavantajın en açık örneği. Sonra 'neden avantaj daha ağır' diye karşılaştırabilirsin." },
    { id: "i4", text: "Uçak yolculuğu çevreye zarar verir.", pick: false, why: "Konudan biraz uzaklaşıyor (iş verimliliği yerine çevre). Ana dezavantajı (maliyet ve zaman) ikiye bölme." },
  ],
  ask: {
    body1: ["İnsanlar yüz yüze görüşünce neyi daha iyi anlar?", "Bu iş ilişkisi için neden önemli?", "Hangi iş örneği verebilirsin (sözleşme gibi)?"],
    body2: ["Seyahat edince ne kaybedilir (para, zaman)?", "Bu kayıp neden küçük sayılabilir?", "Şirketler bu kaybı nasıl azaltır?"],
  },
  essay: [
    { name: "Introduction", sentences: [
      { t: "Today, companies can communicate by email or video call, yet many still arrange meetings in person.", role: "paraphrase" },
      { t: "Although face-to-face meetings can be expensive and time-consuming, I believe that their advantages are greater.", role: "thesis" },
    ] },
    { name: "Body 1", idea: "i1", sentences: [
      { t: "The main advantage of meeting in person is that it helps people to build trust.", role: "point" },
      { t: "When business partners see each other, they can read body language and tone of voice, which makes it easier to judge whether the other person is honest and serious.", role: "explain" },
      { t: "Online communication, on the other hand, often leaves people unsure about each other's intentions.", role: "explain" },
      { t: "For example, a company is more likely to sign a large contract with a supplier it has met personally than with one it has only spoken to online.", role: "example" },
      { t: "Once trust has been established, the two companies are also more willing to share information and solve problems together.", role: "example" },
      { t: "Trust of this kind is very valuable for long-term business relationships.", role: "link" },
    ] },
    { name: "Body 2", idea: "i3", sentences: [
      { t: "The disadvantages of face-to-face meetings are mainly cost and time.", role: "point" },
      { t: "Employees may have to travel long distances, which means paying for flights and hotels and losing working hours.", role: "explain" },
      { t: "In addition, preparing for a trip and recovering from it takes up even more of the employee's time.", role: "explain" },
      { t: "A manager who flies abroad for a two-hour meeting, for instance, may lose a whole working day.", role: "example" },
      { t: "However, these costs are small compared with the value of a strong partnership, and companies can reduce them by holding meetings in person only for important decisions.", role: "link" },
    ] },
    { name: "Conclusion", sentences: [
      { t: "In conclusion, although face-to-face meetings cost money and time, I believe that the advantages, especially stronger trust, outweigh these problems.", role: "restate" },
      { t: "Companies should use video calls for routine matters and meet in person when a decision is important.", role: "wrap" },
    ] },
  ],
  introWhy: "'Outweigh' sorusunda tezin hangi tarafın ağır bastığını söylemeli. 'Although ... I believe ...' hem karşı tarafı kabul eder hem pozisyonunu gösterir.",
  conclusionWhy: "Avantaj ve dezavantajı tek cümlede özetle ve hangisinin ağır bastığını tekrar söyle.",
  drift: [
    { s: "Video calls became very popular during the pandemic.", on: false, why: "Bağlam bilgisi. Soru yüz yüze toplantıların avantajını soruyor; video görüşmenin geçmişi planında yok." },
    { s: "A manager who travels abroad often loses both time and money.", on: true, why: "İkinci fikri (maliyet ve zaman) açıklıyor. Planına uyuyor." },
    { s: "Meeting in person can also bring more tourists to the host city.", on: false, why: "İş toplantısının turizme etkisi soruyla ilgisiz. Konunun dışına çıkıyor." },
  ],
}
