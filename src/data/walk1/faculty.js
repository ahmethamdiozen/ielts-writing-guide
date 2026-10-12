export default {
  id: 'faculty',
  title: 'Pie chart: fakülte kayıtları',
  kind: 'pie',
  source: "Kullanıcının yapıştırdığı sınav görseli (iki pasta grafik, 2010 ve 2020). Veriler görselden okundu, uydurma değil.",
  prompt: "The charts below show the percentage of students enrolled in different specializations within the Faculty of Law, Philosophy, and Ethics at a particular university in 2010 and 2020.",
  chart: {
    labels: ["Corporate Law", "Criminal Justice", "Political Philosophy", "Human Rights Law", "Bioethics"],
    pies: [
      { title: "2010", values: [35, 25, 20, 12, 8] },
      { title: "2020", values: [28, 22, 15, 18, 17] },
    ],
  },
  alt: "İki pasta grafik, bir üniversitede uzmanlık alanlarına göre öğrenci kaydı. 2010: kurumsal hukuk 35, ceza adaleti 25, siyaset felsefesi 20, insan hakları hukuku 12, biyoetik 8. 2020: kurumsal hukuk 28, ceza adaleti 22, siyaset felsefesi 15, insan hakları hukuku 18, biyoetik 17 yüzde.",
  read: [
    { q: "Chart ne hakkında?", a: "Hukuk, Felsefe ve Etik fakültesinde öğrencilerin hangi uzmanlık alanına kayıt olduğu." },
    { q: "Birim nedir?", a: "Yüzde (%). Her pasta o yılın tüm öğrencilerini (%100) gösterir." },
    { q: "Zaman aralığı?", a: "2010 ve 2020, iki ayrı pasta. Beş dilimin on yılda nasıl değiştiğini anlatacaksın." },
    { q: "Chart ile neler yapılabilir?", a: "Her yılın en büyük ve en küçük dilimini bul. Sonra hangi alanların arttığını, hangilerinin azaldığını ve sıralamanın değişip değişmediğini karşılaştır." },
  ],
  findings: [
    { id: "f1", tag: "highest", fact: "Kurumsal hukuk iki yılda da birinci (%35 ve %28).", sentence: "Corporate law was the most popular specialization in both years.", use: true },
    { id: "f2", tag: "decrease", fact: "Kurumsal hukuk %35'ten %28'e düştü.", sentence: "Its share fell from 35% to 28%.", use: true },
    { id: "f3", tag: "compare", fact: "2010'da ceza adaleti ikinci (%25).", sentence: "In 2010, criminal justice came second, with 25% of students.", use: true },
    { id: "f4", tag: "decrease", fact: "Ceza adaleti %25'ten %22'ye hafifçe düştü ve ikinci kaldı.", sentence: "Criminal justice dropped slightly, from 25% to 22%, but stayed in second place.", use: true },
    { id: "f5", tag: "decrease", fact: "Siyaset felsefesi %20'den %15'e düştü.", sentence: "Political philosophy fell from 20% to 15%.", use: true },
    { id: "f6", tag: "lowest", fact: "2020'de en küçük dilim siyaset felsefesi (%15).", sentence: "It became the least popular specialization in 2020.", use: true },
    { id: "f7", tag: "increase", fact: "İnsan hakları hukuku %12'den %18'e çıktı.", sentence: "Human rights law grew from 12% to 18%.", use: true },
    { id: "f8", tag: "increase", fact: "Biyoetik %8'den %17'ye çıktı (iki katından fazla), en büyük artış.", sentence: "Bioethics showed the biggest rise, more than doubling from 8% to 17%.", use: true },
    { id: "f9", tag: "overtake", fact: "2020'de insan hakları (%18) ve biyoetik (%17) siyaset felsefesini (%15) geçti.", sentence: "Both subjects overtook political philosophy, and human rights law moved into third place.", use: true },
    { id: "f10", tag: "compare", fact: "En büyük ile en küçük dilim arasındaki fark 27 puandan (35 - 8) 13 puana (28 - 15) indi.", sentence: "The gap between the largest and smallest shares narrowed from 27 percentage points to 13.", use: true },
    { id: "f11", tag: "detail", fact: "Kurumsal hukuk + ceza adaleti: %60'tan %50'ye.", use: false, skipWhy: "Bir toplam daha. Paragraf zaten çok rakam taşıyor ve bu toplam yeni bir ana özellik eklemiyor." },
  ],
  relations: [
    { tag: "contrast", between: ["f2", "f8"], fact: "Kurumsal hukuk küçülüyor, biyoetik büyüyor." },
    { tag: "similarity", between: ["f2", "f5"], fact: "Kurumsal hukuk, ceza adaleti ve siyaset felsefesi üçü de azalıyor." },
    { tag: "similarity", between: ["f7", "f8"], fact: "İnsan hakları hukuku ve biyoetik ikisi de artıyor." },
  ],
  intro: {
    text: "The two pie charts compare the percentage of students enrolled in five specializations within the Faculty of Law, Philosophy and Ethics at one university in 2010 and 2020.",
    why: "Soruyu kopyalama. 'Show' yerine 'compare' yaz, 'different specializations' yerine 'five specializations' de, 'particular university' yerine 'one university' yaz.",
  },
  overview: {
    text: "Overall, corporate law remained the most popular specialization throughout the period, while human rights law and bioethics attracted a much larger share of students and the other three subjects lost ground.",
    why: "Overview rakamsızdır: en büyük özellik (kurumsal hukuk lider) ve ana değişim (iki alan arttı, üçü azaldı). Biyoetik ve insan hakları arttı, bu yüzden onları ayrı söylersin.",
  },
  units: [
    {
      id: "u0", para: "body1", rel: "Başlangıç durumu (sıralama)", from: ["f1", "f3"],
      text: "In 2010, corporate law was the most popular choice, with 35% of students, [[followed by]] criminal justice at 25%.",
      why: "Önce başlangıç sıralamasını ver ki sonraki değişim anlam kazansın. 'Followed by' iki bilgiyi tek cümlede sıralar.",
    },
    {
      id: "u1", para: "body1", rel: "Ödün (-e rağmen)", from: ["f1", "f2"],
      text: "Corporate law remained in first place in 2020, [[although]] its share fell to 28%.",
      why: "Düştü ama lider kaldı. 'Although' bu iki bilgiyi (düşüş + liderlik) tek cümleye koyar. 35% rakamı önceki cümlede var.",
    },
    {
      id: "u2", para: "body1", rel: "Benzerlik + ödün", from: ["f4"],
      text: "[[Similarly]], criminal justice stayed in second place, [[but]] its share dropped slightly, from 25% to 22%.",
      why: "Ceza adaleti de kurumsal hukuk gibi düştü ama sırası değişmedi. 'Similarly' benzerliği, 'but' sırası değişmediği halde düştüğü karşıtlığını gösterir. 'Slightly' küçük düşüşü anlatır.",
    },
    {
      id: "u3", para: "body1", rel: "Sonuç", from: ["f5", "f6"],
      text: "Political philosophy also declined, from 20% to 15%, [[which meant that]] it became the least popular specialization in 2020.",
      why: "Düşüşün sonucu rakamlardan çıkıyor: %15 artık en küçük. 'Which meant that' bu sonucu tek cümlede bağlar. Azalan üç alan bu paragrafta toplanıyor.",
    },
    {
      id: "u4", para: "body2", rel: "Karşıtlık", from: ["f7", "f8"],
      text: "[[In contrast]], human rights law grew from 12% to 18%, [[while]] bioethics showed the biggest rise, more than doubling from 8% to 17%.",
      why: "Artanlara geçiyorsun: 'in contrast' önceki paragrafın azalmasına karşı. 'While' iki artışı karşılaştırır ('grew' / 'biggest rise').",
    },
    {
      id: "u5", para: "body2", rel: "Sonuç", from: ["f9"],
      text: "[[As a result]], both subjects overtook political philosophy, and human rights law moved into third place.",
      why: "Artışın sonucu sıralama değişikliği. 18 ve 17, 15'ten büyük. 'As a result' bu aritmetik sonucu bağlar.",
    },
    {
      id: "u6", para: "body2", rel: "Sonuç (genel)", from: ["f10"],
      text: "[[Therefore]], the gap between the largest and smallest shares narrowed from 27 percentage points in 2010 to 13 in 2020.",
      why: "Son cümle büyük resmi söyler: dağılım daha dengeli oldu. 'Therefore' önceki değişimlerin toplam sonucunu bağlar. 35-8=27 ve 28-15=13.",
    },
  ],
  bodyWhy: {
    body1: "Azalan üç alan bir arada (kurumsal hukuk, ceza adaleti, siyaset felsefesi). Başlangıç sıralamasıyla açılıyor, okuyucu önce 'neyin küçüldüğünü' görür.",
    body2: "Artan iki alan (insan hakları, biyoetik) ve bunların sıralamaya etkisi. Son cümle dağılımın dengelendiğini söyleyerek overview ile bağ kurar.",
  },
}
