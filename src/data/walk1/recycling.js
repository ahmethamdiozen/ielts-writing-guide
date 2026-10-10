export default {
  id: 'recycling',
  title: 'Process: geri dönüşüm',
  kind: 'process',
  source: "Konu, bildirilen sınav sorularından esinlenildi (plastik şişelerin geri dönüşüm süreci). Diyagram aşamaları örnektir, orijinal şema değildir.",
  prompt: "The diagram shows the process that is used to recycle plastic bottles.",
  chart: {
    stages: [
      "Used bottles are collected from recycling bins and taken to a factory",
      "Bottles are sorted by hand to separate different types of plastic",
      "Bottles are pressed into large blocks to save space",
      "Blocks are shredded into small flakes",
      "Flakes are washed to remove dirt and then dried",
      "Clean flakes are melted and formed into small pellets",
      "Pellets are sent to other factories and used to make new products, such as clothes or containers",
    ],
  },
  alt: "Süreç diyagramı, yedi aşama: şişeler toplanır, elle ayrılır, bloklara preslenir, parçalanır, yıkanıp kurutulur, eritilip topaklara dönüştürülür, yeni ürünlere gönderilir.",
  read: [
    { q: "Diyagram ne hakkında?", a: "Plastik şişelerin nasıl geri dönüştürüldüğü." },
    { q: "Kaç aşama var?", a: "Yedi aşama, doğrusal (döngü yok)." },
    { q: "Başlangıç ve son?", a: "Başlangıç: şişelerin toplanması. Son: yeni ürünlerin yapımı." },
    { q: "Hangi dil yapıları gerekli?", a: "Edilgen (is collected, are sorted) ve sıra bağlaçları (first, next, after which, finally)." },
  ],
  findings: [
    { id: "f1", tag: "step", fact: "Aşama 1: toplama ve fabrikaya taşıma.", sentence: "Used plastic bottles are collected from recycling bins and taken to a factory.", use: true },
    { id: "f2", tag: "step", fact: "Aşama 2: elle ayırma (plastik türlerini ayırmak için).", sentence: "They are sorted by hand to separate different types of plastic.", use: true },
    { id: "f3", tag: "step", fact: "Aşama 3: bloklara presleme (yer kazanmak için).", sentence: "The sorted bottles are pressed into large blocks to save space.", use: true },
    { id: "f4", tag: "step", fact: "Aşama 4: küçük parçalara öğütme.", sentence: "The blocks are shredded into small flakes.", use: true },
    { id: "f5", tag: "step", fact: "Aşama 5: yıkama (kiri gidermek için) ve kurutma.", sentence: "The flakes are washed to remove dirt and then dried.", use: true },
    { id: "f6", tag: "step", fact: "Aşama 6: eritme ve küçük topaklara dönüştürme.", sentence: "The clean flakes are melted and formed into small pellets.", use: true },
    { id: "f7", tag: "step", fact: "Aşama 7: topaklar başka fabrikalara gider, yeni ürünler yapılır.", sentence: "The pellets are sent to other factories, where they are used to make new products such as clothes or containers.", use: true },
    { id: "f9", tag: "step", fact: "4. aşamadan sonra plastik küçük parçalara ayrılmış oluyor.", sentence: "At this point, the plastic has been broken down into small pieces.", use: true },
    { id: "f10", tag: "step", fact: "Eritmeden önce plastik tamamen temiz.", sentence: "The plastic is clean before it is melted.", use: true },
    { id: "f11", tag: "step", fact: "Sonuçta kullanılmış şişe tamamen farklı bir ürüne dönüşüyor.", sentence: "A used bottle can become a completely different product.", use: true },
    { id: "f8", tag: "detail", fact: "Şişelerin hangi plastik türleri olduğu (diyagramda yazmıyor).", use: false, skipWhy: "Diyagramda olmayan bir bilgiyi eklememelisin. Process'te yalnızca şemada görünenler yazılır." },
  ],
  relations: [
    { tag: "sequence", between: ["f1", "f2"], fact: "Toplanıp taşınan şişeler sonra ayrılıyor." },
    { tag: "sequence", between: ["f3", "f4"], fact: "Presleme ardından öğütme." },
    { tag: "sequence", between: ["f5", "f6"], fact: "Yıkama ve kurutma ardından eritme." },
  ],
  intro: {
    text: "The diagram shows the process that is used to recycle plastic bottles and turn them into new products.",
    why: "Soruyu kopyalama; 'and turn them into new products' ile sürecin amacını ekle.",
  },
  overview: {
    text: "Overall, there are seven stages in the process, which begins with the collection of used bottles and ends with the production of new plastic goods.",
    why: "Process overview'unda aşama sayısını, başlangıcı ve sonu söylersin. Detay vermezsin.",
  },
  units: [
    {
      id: "u1", para: "body1", rel: "Sıra + yer", from: ["f1", "f2"],
      text: "[[First]], used plastic bottles are collected from recycling bins and taken to a factory, [[where]] they are sorted by hand to separate different types of plastic.",
      why: "Aşama 1 ve 2 aynı fabrikada: 'where' ikisini tek cümleye bağlar. 'First' sürecin başladığını işaretler.",
    },
    {
      id: "u2", para: "body1", rel: "Sıra", from: ["f3", "f4"],
      text: "[[Next]], the sorted bottles are pressed into large blocks to save space, [[after which]] they are shredded into small flakes.",
      why: "'Next' yeni aşamaya geçer, 'after which' bir sonraki adımı aynı cümlede söyler. Yıkama ve sonrası için paragraf değişir.",
    },
    {
      id: "u2b", para: "body1", rel: "Özet", from: ["f9"],
      text: "[[At this point]], the plastic has been broken down into small pieces.",
      why: "Birinci paragrafı kısa bir özetle kapatırsın. 'At this point' süreçte bir noktayı işaretler ve okuyucuya ilk bölümün bittiğini söyler.",
    },
    {
      id: "u3", para: "body2", rel: "Sıra", from: ["f5", "f10"],
      text: "[[Subsequently]], the flakes are washed to remove dirt and then dried, [[so that]] the plastic is clean before it is melted.",
      why: "Yeni paragrafın ilk cümlesi. 'Subsequently' resmî bir geçiş; paragraf başı için uygun.",
    },
    {
      id: "u4", para: "body2", rel: "Sıra", from: ["f6"],
      text: "[[After that]], the clean flakes are melted and formed into small pellets.",
      why: "'After that' kısa ve net. Önceki cümlede 'then' kullandığın için burada farklı bir bağlaç seçtim; böylece tekrar yok.",
    },
    {
      id: "u5", para: "body2", rel: "Sıra + yer", from: ["f7"],
      text: "[[Finally]], the pellets are sent to other factories, [[where]] they are used to make new products such as clothes or containers.",
      why: "'Finally' son aşamayı işaretler. 'Where' son iki bilgiyi bağlar: nereye gittiği ve ne yapıldığı.",
    },
    {
      id: "u6", para: "body2", rel: "Sonuç", from: ["f11"],
      text: "[[In this way]], a used bottle can become a completely different product.",
      why: "Son cümle sürecin amacını söyler ve overview'daki 'new plastic goods' ile bağ kurar. 'In this way' sürecin özetini tek ifadeyle verir.",
    },
  ],
  bodyWhy: {
    body1: "İlk dört aşama (toplama, ayırma, presleme, öğütme): ham maddeyi hazırlama. Süreç ikiye bölününce okuması kolay.",
    body2: "Son üç aşama (yıkama, eritme, yeni ürün): temizleme ve ürüne dönüştürme.",
  },
}
