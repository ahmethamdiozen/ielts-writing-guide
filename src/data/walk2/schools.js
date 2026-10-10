export default {
  id: "schools",
  title: "Opinion: okullarda sadece kariyer dersleri",
  type: "Opinion (Agree / Disagree), kesinlikle katılmıyorum",
  source: { text: "Mayıs 2025, Kanada sınavından bildirilen soru (ielts-blog.com). Soru metni kısaltıldı.", url: "https://www.ielts-blog.com/recent-ielts-exams/" },
  question: "Some people believe that schools should teach only subjects that are useful for students' future careers, so subjects such as music and sports are not important. To what extent do you agree or disagree?",
  parse: [
    { q: "Konu nedir?", a: "Okullarda sadece kariyer için faydalı derslerin okutulması. Anahtar kelimeler: schools, only subjects useful for careers, music and sports not important." },
    { q: "Essay türü?", a: "Opinion (agree/disagree). Bu soruda net bir pozisyon almak en kolay yol." },
    { q: "Soru tam olarak ne istiyor?", a: "Müzik ve spor gibi derslerin önemsiz olduğu görüşüne ne ölçüde katıldığın." },
    { q: "Ne istemiyor?", a: "Hangi derslerin ne kadar zor olduğu ya da müfredatın nasıl değişmesi gerektiği. Sadece 'müzik ve spor önemsiz mi?'" },
  ],
  candidates: [
    { id: "i1", text: "Spor, fiziksel ve zihinsel sağlığı korur; takım oyunları işbirliği öğretir.", pick: "body1", why: "Hem sağlık hem 'işverenlerin aradığı beceri' bağlantısı var. Sağlık ve kariyer birbirine bağlanıyor." },
    { id: "i2", text: "Müzik ve sanat yaratıcılık ve düzenli çalışma alışkanlığı kazandırır.", pick: "body2", why: "Spordan farklı alan. 'Diğer derslerde de başarı' bağlantısıyla kariyer argümanına cevap veriyor." },
    { id: "i3", text: "Fizik ve matematik kariyer için daha önemli.", pick: false, why: "Karşı görüş. Ayrı paragraf yapma; gerekirse sonuçta kısaca kabul et." },
    { id: "i4", text: "Müzik eğlencelidir.", pick: false, why: "Çok zayıf: 'eğlenceli' bir argüman kariyer iddiasına cevap vermiyor. Güçlü neden ve örnek bulamazsın." },
  ],
  ask: {
    body1: ["Çocuklar günün çoğunu nasıl geçiriyor ve spor buna nasıl etki eder?", "Takım sporu hangi beceriyi öğretir?", "Bu beceri iş hayatında nasıl işe yarar?"],
    body2: ["Enstrüman çalmak hangi alışkanlığı kazandırır?", "Bu alışkanlık diğer derslerde nasıl yardımcı olur?", "Hangi okul ya da öğrenci örneği verebilirsin?"],
  },
  essay: [
    { name: "Introduction", sentences: [
      { t: "Some people think that schools should concentrate only on subjects that prepare students for work, and that music and sports are unimportant.", role: "paraphrase" },
      { t: "I strongly disagree with this opinion, because these subjects improve students' health and help them to learn better in other areas.", role: "thesis" },
    ] },
    { name: "Body 1", idea: "i1", sentences: [
      { t: "First, sports lessons are essential for students' physical and mental health.", role: "point" },
      { t: "Children spend most of the day sitting in classrooms, so regular exercise helps them to stay fit and to release stress, and team games teach them to cooperate.", role: "explain" },
      { t: "Without sport, students may also become lazy and find it difficult to concentrate on their lessons.", role: "explain" },
      { t: "For instance, a student who plays football at school learns to work with others, which is a skill that almost every employer values.", role: "example" },
      { t: "Therefore, sport supports both health and future careers.", role: "link" },
    ] },
    { name: "Body 2", idea: "i2", sentences: [
      { t: "Second, music and art develop creativity and concentration.", role: "point" },
      { t: "Learning an instrument requires patience and regular practice, and these habits can also help students to succeed in more traditional subjects.", role: "explain" },
      { t: "Art lessons, in the same way, encourage students to think in new ways and to express their ideas freely.", role: "explain" },
      { t: "For example, many schools report that students who play an instrument are more disciplined in their other studies.", role: "example" },
      { t: "For instance, a child who learns the piano has to practise every day, and this teaches discipline that is useful in any career.", role: "example" },
      { t: "Consequently, removing these subjects would make students less creative and less motivated.", role: "link" },
    ] },
    { name: "Conclusion", sentences: [
      { t: "In conclusion, I strongly disagree that schools should teach only career-related subjects, since sports, music and art benefit students' health, creativity and future working lives.", role: "restate" },
      { t: "Schools should therefore keep a balanced timetable.", role: "wrap" },
    ] },
  ],
  introWhy: "Net bir pozisyon: 'strongly disagree'. Tez iki nedeni önceden söyler (sağlık ve öğrenmeye katkı); her neden bir body paragrafı olur.",
  conclusionWhy: "Görüşünü ve iki nedeni özetler, yeni argüman eklemez. Kısa bir öneriyle kapanır.",
  drift: [
    { s: "Physics and chemistry are difficult subjects for many students.", on: false, why: "Konu müzik ve sporun önemi. Fizik ve kimyanın zorluğu soruya cevap vermiyor." },
    { s: "Team games teach students to cooperate with others.", on: true, why: "Birinci fikri (spor ve işbirliği) açıklıyor. Planına uyuyor." },
    { s: "Some famous musicians never went to university.", on: false, why: "Konuyla uzaktan ilgili ama savunduğun fikre (sağlık, yaratıcılık) hizmet etmiyor." },
  ],
}
