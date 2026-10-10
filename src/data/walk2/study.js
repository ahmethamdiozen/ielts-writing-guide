export default {
  id: "study",
  title: "Discussion: grup çalışması mı, tek başına mı?",
  type: "Discussion (Discuss both views + opinion)",
  source: { text: "2026 yılında bildirilen sorulardan esinlenildi (examword.com derlemesi). Soru metni yeniden yazıldı.", url: "https://www.examword.com/ielts-practice/writing-task2-exercise" },
  question: "Some people think that students learn more effectively when they study in groups, while others believe that studying alone is better. Discuss both views and give your opinion.",
  parse: [
    { q: "Konu nedir?", a: "Öğrencinin gruplarla mı yoksa tek başına mı daha iyi öğrendiği. Anahtar kelimeler: study in groups, studying alone, effectively." },
    { q: "Essay türü?", a: "Discussion. İki görüşü ayrı ayrı anlatmalı ve kendi görüşünü vermelisin." },
    { q: "Soru tam olarak ne istiyor?", a: "1) Grup çalışması görüşü. 2) Tek başına çalışma görüşü. 3) Senin görüşün (hangisi daha etkili)." },
    { q: "Ne istemiyor?", a: "Hangi yöntemin daha eğlenceli olduğu ya da online ders gibi başka konular. Sadece 'etkililik' önemli." },
  ],
  candidates: [
    { id: "i1", text: "Grupta öğrenciler birbirine anlatır; anlatmak ve dinlemek öğrenmeyi artırır.", pick: "body1", why: "Grup görüşü için en güçlü fikir. Neden ve örnek bulması kolay." },
    { id: "i2", text: "Grupta çalışmak insanı motive eder.", pick: false, why: "Doğru ama genel. 'Motive eder' sorusuna somut örnek bulmak zor; birinci fikir daha net." },
    { id: "i3", text: "Tek başına çalışırken tam konsantre olunur ve kendi hızında ilerlenir.", pick: "body2", why: "Senin görüşünü destekliyor ve gerekçesi açık. Grup çalışmasının zayıf yönüyle (dikkat dağılması) kıyaslanabilir." },
    { id: "i4", text: "Bazı öğrenciler grupta utangaç olur.", pick: false, why: "Bu bir 'kişilik' meselesi, öğrenmenin etkililiğiyle doğrudan ilgili değil. Genelleme riski var." },
  ],
  ask: {
    body1: ["Grup arkadaşı bir konuyu nasıl daha iyi açıklar?", "Anlatan kişi neden daha iyi öğrenir?", "Hangi ders ya da sınav örneği verebilirsin?"],
    body2: ["Tek başına çalışmak neden daha iyi odaklandırır?", "Hız farkı neden önemli?", "Hangi öğrenci örneği bunu gösterir?"],
  },
  essay: [
    { name: "Introduction", sentences: [
      { t: "People disagree about whether it is better for students to learn in groups or on their own.", role: "paraphrase" },
      { t: "Although studying with others has some clear advantages, I believe that studying alone is more effective for most students.", role: "thesis" },
    ] },
    { name: "Body 1", idea: "i1", sentences: [
      { t: "Supporters of group study argue that students can learn a great deal from each other.", role: "point" },
      { t: "When a student does not understand a topic, a classmate can often explain it in simpler words, and explaining something to others also helps the speaker to remember it.", role: "explain" },
      { t: "In addition, working with others can show students different ways of solving the same problem.", role: "explain" },
      { t: "For example, in a study group for a maths exam, students can compare their solutions and quickly find their mistakes.", role: "example" },
      { t: "For these reasons, group work can be very helpful for difficult topics.", role: "link" },
    ] },
    { name: "Body 2", idea: "i3", sentences: [
      { t: "Nevertheless, I think that studying alone gives better results overall.", role: "point" },
      { t: "When students work by themselves, they can concentrate fully and move at their own speed, whereas in a group they often waste time talking about unrelated things.", role: "explain" },
      { t: "A quiet room with no distractions also allows students to read carefully and think deeply about each topic.", role: "explain" },
      { t: "A student who needs more time to revise grammar, for instance, can repeat the exercises as often as necessary without worrying about the rest of the group.", role: "example" },
      { t: "Therefore, group study is useful for some tasks, but individual study should be the main method.", role: "link" },
    ] },
    { name: "Conclusion", sentences: [
      { t: "In conclusion, although group study helps students to share ideas, I believe that studying alone is more effective because it allows better concentration and flexible learning.", role: "restate" },
      { t: "Students may use both methods, but they should spend most of their time studying alone.", role: "wrap" },
    ] },
  ],
  introWhy: "Discussion essay'inde tez, iki görüşü kabul edip kendi tarafını söyler: 'Although ... I believe ...' kalıbı band 7 için uygundur.",
  conclusionWhy: "İki görüşü özetler ve kendi görüşünü tekrarlar. Yeni argüman eklemezsin.",
  drift: [
    { s: "Many universities now offer online courses that students can follow from home.", on: false, why: "Soru grup ve tek başına çalışmayı karşılaştırıyor. Online ders başka bir konu." },
    { s: "Working in a team teaches students to listen to different opinions.", on: false, why: "Konuyla ilgili ama planında yok. Üçüncü bir grup avantajı eklersen paragraf dağılır; iki fikirle kal." },
    { s: "A student who studies alone can choose the time and place that suit them best.", on: true, why: "Tek başına çalışmanın esnekliğini anlatıyor; ikinci fikri destekliyor." },
  ],
}
