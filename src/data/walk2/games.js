export default {
  id: "games",
  title: "Opinion: oyunlar zararlı mı?",
  type: "Opinion (Agree / Disagree), kısmen katılıyorum",
  source: { text: "Ocak 2026, İngiltere sınavından bildirilen soru (ielts-blog.com)", url: "https://www.ielts-blog.com/recent-ielts-exams/ielts-test-in-uk-january-2026-academic-module/" },
  question: "Some people believe that entertainment, such as games on portable electronic devices, can be harmful to individuals and society. To what extent do you agree or disagree?",
  parse: [
    { q: "Konu nedir?", a: "Taşınabilir cihazlardaki oyunlar (telefon, tablet). Anahtar kelimeler: games, portable devices, harmful, individuals, society." },
    { q: "Essay türü?", a: "Opinion (agree/disagree). 'To what extent' kısmen katılmana izin verir; ama hangi noktada katıldığını net yazmalısın." },
    { q: "Soru tam olarak ne istiyor?", a: "Oyunların hem bireylere hem topluma zararlı olup olmadığı konusundaki görüşün." },
    { q: "Ne istemiyor?", a: "Oyunların tarihi, hangi oyunların popüler olduğu ya da genel olarak teknoloji. Konuya sadık kal." },
  ],
  candidates: [
    { id: "i1", text: "Oyuncular uykusuz kalır ve derslerine yeterince çalışmaz (bireye zarar).", pick: "body1", why: "Açıklaması kolay, örneği günlük hayattan (gençler). 'Bireye zarar' kısmını cevaplıyor." },
    { id: "i2", text: "Oyunlar uzakta yaşayan arkadaşları ve aileyi bir araya getirir (topluma zarar yok).", pick: "body2", why: "Katılmadığın tarafı gösterir. 'Kısmen katılıyorum' tezini bu fikir dengeler." },
    { id: "i3", text: "Ekrana çok bakmak göz ve duruş sorunlarına yol açar.", pick: false, why: "Mantıklı ama birinci fikirle aynı yere çıkıyor (bireye zarar). İki paragrafa farklı fikir koy, aynı fikri iki kez yazma." },
    { id: "i4", text: "Şiddet içeren oyunlar toplumu daha saldırgan yapar.", pick: false, why: "Tartışmalı bir iddia ve kanıtlaması zor. Band 7'de açıklayamayacağın bir fikir riskli; yanlış genelleme olabilir." },
  ],
  ask: {
    body1: ["Oyuncular neden durmakta zorlanır?", "Bunun sonucunda ne olur (okul, sağlık)?", "Hangi günlük hayat örneği verebilirsin?"],
    body2: ["Oyunlar insanları nasıl bir araya getirir?", "Zarar oyunun kendisinden mi, kullanım süresinden mi?", "Hangi örnek bunu gösterir?"],
  },
  essay: [
    { name: "Introduction", sentences: [
      { t: "Many people argue that games played on phones and tablets can damage both individuals and society as a whole.", role: "paraphrase" },
      { t: "I partly agree with this view, because such games can harm people who play them too much, but they also bring real benefits when they are used sensibly.", role: "thesis" },
    ] },
    { name: "Body 1", idea: "i1", sentences: [
      { t: "The strongest argument for this view is that portable games can harm individuals who play them for too long.", role: "point" },
      { t: "Because these games are exciting and always available, many players find it hard to stop, and they often stay awake late at night.", role: "explain" },
      { t: "As a result, they spend less time on homework and sleep, and this can affect their concentration for the whole day.", role: "explain" },
      { t: "For instance, a teenager who plays on a phone until midnight is likely to feel tired at school, and his or her exam results may fall as a result.", role: "example" },
      { t: "In this way, excessive gaming can damage a person's health and education.", role: "link" },
    ] },
    { name: "Body 2", idea: "i2", sentences: [
      { t: "However, I do not believe that these games harm society itself.", role: "point" },
      { t: "In fact, many games allow friends and family members who live far apart to play together and stay in contact.", role: "explain" },
      { t: "Many players also say that games help them to relax after a busy day.", role: "explain" },
      { t: "For example, millions of people use online games to meet new friends, and many of these friendships continue outside the game.", role: "example" },
      { t: "Therefore, the problem is not the games themselves but the amount of time people spend on them.", role: "link" },
    ] },
    { name: "Conclusion", sentences: [
      { t: "In conclusion, I agree that games on portable devices can harm individuals when they are overused, but I do not think they are harmful to society as a whole.", role: "restate" },
      { t: "Players, especially young people, should limit their screen time, and parents can help by setting clear rules.", role: "wrap" },
    ] },
  ],
  introWhy: "İlk cümle soruyu kendi kelimelerinle söyler (parafraz). İkinci cümle net bir tez verir: 'kısmen katılıyorum' ve hangi noktada katıldığın. Tez, iki paragrafın planını da gösterir.",
  conclusionWhy: "Tezi farklı sözcüklerle tekrar edersin ve yeni fikir eklemezsin. Son cümle kısa bir öneriyle kapanır; bu da yeni fikir sayılmaz çünkü paragrafların sonucundan çıkıyor.",
  drift: [
    { s: "Many video games contain violence, so they make young people more aggressive.", on: false, why: "Planında yok, kanıtlaması zor ve tezinle uyumsuz bir iddia. Böyle bir cümle essay'in odağını bozar." },
    { s: "Players who stay up late often feel tired the next day and may perform badly at school.", on: true, why: "Birinci fikri (uyku ve okul) açıklıyor. Planına tam uyuyor." },
    { s: "Mobile phones were invented in the 1970s and have become much smaller since then.", on: false, why: "Genel bilgi. Konu 'oyunların zararı'; telefonun tarihi soruya cevap vermiyor." },
  ],
}
