export default {
  id: 'water',
  title: 'Pie chart: su kullanımı',
  kind: 'pie',
  source: "Konu, bildirilen sınav sorularından esinlenildi (evlerde amaca göre su kullanımı, 1980 ve 2008). Veriler örnektir, orijinal chart değildir.",
  prompt: "The pie charts show how households used water for four different purposes in 1980 and 2008.",
  chart: {
    labels: ["Toilet", "Showers and baths", "Laundry", "Gardening"],
    pies: [
      { title: "1980", values: [35, 25, 20, 20] },
      { title: "2008", values: [25, 30, 15, 30] },
    ],
  },
  alt: "İki pasta grafik, evlerde su kullanımı. 1980: tuvalet 35, duş ve banyo 25, çamaşır 20, bahçe 20. 2008: tuvalet 25, duş ve banyo 30, çamaşır 15, bahçe 30 yüzde.",
  read: [
    { q: "Chart ne hakkında?", a: "Evlerde suyun hangi amaçlarla kullanıldığı." },
    { q: "Birim nedir?", a: "Yüzde (%). Her pasta toplam suyun %100'ünü gösterir." },
    { q: "Zaman aralığı?", a: "1980 ve 2008, iki ayrı pasta. Dilimlerin yıldan yıla nasıl değiştiğini anlatacaksın." },
    { q: "Chart ile neler yapılabilir?", a: "Her iki yılda en büyük dilimi bul, sonra hangi dilimin arttığını, hangisinin azaldığını karşılaştır." },
  ],
  findings: [
    { id: "f1", tag: "highest", fact: "1980'de en büyük pay tuvalet (%35).", sentence: "Toilet use accounted for the largest share of water in 1980, at 35%.", use: true },
    { id: "f2", tag: "decrease", fact: "Tuvalet 2008'de %25'e düştü (10 puan düşüş).", sentence: "The share of water used for toilets fell to 25% in 2008.", use: true },
    { id: "f3", tag: "decrease", fact: "Çamaşır %20'den %15'e düştü.", sentence: "The share used for laundry declined from 20% to 15%.", use: true },
    { id: "f4", tag: "increase", fact: "Bahçe en büyük artışı gösterdi: %20'den %30'a.", sentence: "Gardening showed the biggest rise, from 20% to 30%.", use: true },
    { id: "f5", tag: "increase", fact: "Duş ve banyo %25'ten %30'a çıktı.", sentence: "Water used for showers and baths grew more modestly, from 25% to 30%.", use: true },
    { id: "f6", tag: "similarity", fact: "2008'de duş ve bahçe aynı pay (%30) ve en büyük iki kullanım.", sentence: "In 2008, showers and gardening each took 30% of the total, making them the two largest uses.", use: true },
    { id: "f7", tag: "compare", fact: "Duş + bahçe: 1980'de %45, 2008'de %60.", sentence: "Together, they accounted for 60% of all water use, compared with only 45% in 1980.", use: true },
    { id: "f9", tag: "compare", fact: "1980'de duş ve banyo ikinci (%25), çamaşır ve bahçe %20.", sentence: "In 1980, showers and baths came second, at 25%, while laundry and gardening each accounted for 20%.", use: true },
    { id: "f10", tag: "compare", fact: "Tuvalet + çamaşır: 1980'de %55, 2008'de %40.", sentence: "Together, toilet use and laundry fell from 55% of the total to 40%.", use: true },
    { id: "f8", tag: "detail", fact: "1980'de çamaşır ve bahçe aynı paya sahip (%20).", use: false, skipWhy: "İlginç ama ana özelliği değiştirmiyor. Zaten ikisi için de rakamları veriyorsun." },
  ],
  relations: [
    { tag: "contrast", between: ["f1", "f4"], fact: "Tuvalet küçülüyor, bahçe büyüyor." },
    { tag: "similarity", between: ["f2", "f3"], fact: "Tuvalet ve çamaşır ikisi de azalıyor." },
    { tag: "similarity", between: ["f4", "f5"], fact: "Bahçe ve duş ikisi de artıyor ve 2008'de eşit." },
  ],
  intro: {
    text: "The two pie charts compare how households used water for four different purposes in 1980 and 2008.",
    why: "Soruda 'show' var; sen 'compare' yaz. İki pasta olduğunu da söyle ('two pie charts').",
  },
  overview: {
    text: "Overall, there was a move away from toilet use and towards showers and gardening, which together accounted for most of the water used by 2008.",
    why: "Overview büyük resmi verir: hangi kullanımlar küçüldü, hangileri büyüdü. 'Most' çoğunluğu rakamsız anlatır.",
  },
  units: [
    {
      id: "u1", para: "body1", rel: "Karşıtlık", from: ["f1", "f2"],
      text: "Toilet use accounted for the largest share of water in 1980, at 35%, [[whereas]] it made up only 25% in 2008.",
      why: "Aynı kategorinin iki yılda farkı. 'Whereas' iki yılı tek cümlede karşılaştırır. 'Largest share' ile 1980'in en büyük dilimini de söylersin.",
    },
    {
      id: "u1b", para: "body1", rel: "Karşılaştırma", from: ["f9"],
      text: "In 1980, showers and baths came second, at 25%, [[while]] laundry and gardening each accounted for 20%.",
      why: "Önce 1980'in geri kalan dilimlerini tek cümlede verirsin. 'While' ikinci sıra ile son iki sırayı karşılaştırır.",
    },
    {
      id: "u2", para: "body1", rel: "Benzerlik", from: ["f3"],
      text: "[[Similarly]], the share used for laundry declined from 20% to 15%.",
      why: "Çamaşır da tuvalet gibi azaldı. 'Similarly' ikisini aynı paragrafta bağlar. Azalanlar burada toplanıyor.",
    },
    {
      id: "u2b", para: "body1", rel: "Toplam", from: ["f10"],
      text: "[[Taken together]], toilet use and laundry fell from 55% of the total to 40%.",
      why: "İki azalan dilimi toplayıp paragrafı bitirirsin. 'Taken together' toplam bilgisini bağlar.",
    },
    {
      id: "u3", para: "body2", rel: "Karşıtlık", from: ["f4", "f5"],
      text: "[[In contrast]], gardening showed the biggest rise, from 20% to 30%, [[while]] water used for showers and baths grew more modestly, from 25% to 30%.",
      why: "Artanlara geçiyorsun: 'in contrast' önceki paragrafın azalmasına karşı. 'While' iki artışın büyüklüğünü karşılaştırır ('biggest' / 'more modestly').",
    },
    {
      id: "u4", para: "body2", rel: "Sonuç", from: ["f6"],
      text: "[[As a result]], showers and gardening each took 30% of the total in 2008, making them the two largest uses.",
      why: "Artışın rakamsal sonucu: ikisi de %30 ile en üstte. 'As a result' aritmetik sonucu bağlar.",
    },
    {
      id: "u5", para: "body2", rel: "Karşılaştırma", from: ["f7"],
      text: "Together, they accounted for 60% of all water use, [[compared with]] only 45% in 1980.",
      why: "İki dilimin toplamını iki yılda karşılaştırırsın. Bu cümle overview'daki 'most' iddiasını rakamla destekler.",
    },
  ],
  bodyWhy: {
    body1: "Azalan kullanımlar (tuvalet, çamaşır) bir arada. Okuyucu önce 'neyin küçüldüğünü' görür.",
    body2: "Artan kullanımlar (bahçe, duş) ve toplamları. Overview'daki 'duş ve bahçe çoğunluk' cümlesinin kanıtı burada.",
  },
}
