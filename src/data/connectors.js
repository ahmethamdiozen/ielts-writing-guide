// Şablonlarda: {A} {B} = cümle olduğu gibi (büyük harfle başlar), {a} {b} = küçük harfle başlar.
// [[...]] bağlacı vurgular. Noktalama şablonun içindedir.
export const relations = [
  {
    id: 'contrast',
    title: 'Karşıtlık',
    tr: 'İki veri birbirinin zıddı ya da çok farklı. Örnek: bir ülkede yüksek, diğerinde düşük.',
    patterns: [
      { t: '{A}, [[while]] {b}.', note: 'En yaygın seçenek. Virgül zorunlu. While iki cümleyi tek cümleye bağlar; kendi başına cümle başlatmaz (başa gelirse "While A, B" olur).' },
      { t: '{A}, [[whereas]] {b}.', note: 'While ile aynı iş; daha resmî. Karşıtlığı özellikle vurgular. Tekrarı önlemek için sırayla kullan.' },
      { t: '[[Whereas]] {a}, {b}.', note: 'Cümleyi ters çevirir. Birinci cümle "Whereas" ile başlar ve virgülle biter.' },
      { t: '{A}. [[By contrast]], {b}.', note: 'İki ayrı cümle. By contrast cümle başında durur, ardından virgül gelir. In contrast ile eşanlamlı.' },
      { t: '{A}; [[however]], {b}.', note: 'Noktalı virgül + however + virgül. Sadece noktalı virgül kullanırsan hata olur. "However"den önce virgül koyma.' },
      { t: '{A}, [[but]] {b}.', note: 'Doğru ama günlük dile yakın. Task 1\'de nadiren kullan, çeşitliliğe katkısı az.' },
    ],
  },
  {
    id: 'addition',
    title: 'Ekleme',
    tr: 'İkinci veri birinciye ekleniyor; ikisi aynı yöne işaret ediyor ya da aynı konuya ait ek bilgi veriyor.',
    patterns: [
      { t: '{A}. [[In addition]], {b}.', note: 'Yeni bir bilgi ekler. Cümle başında kullanılır, virgül şart.' },
      { t: '{A}; [[moreover]], {b}.', note: 'Akademik ve güçlü. Eklenen bilgi öncekini destekliyorsa uygun. Her paragrafta bir kez yeterli.' },
      { t: '{A}. [[Furthermore]], {b}.', note: 'Moreover ile eşanlamlı. İki cümle ayrı olabilir.' },
      { t: '{A}, [[and]] {b}.', note: 'En basit bağlantı. İki cümle kısa ve konuları yakınsa kullan.' },
      { t: '{A}. [[Also]], {b}.', note: 'Cümle başında "Also" kısa ve biraz gayri resmî durur. Tercihen cümlenin içine yerleştir: "X also grew."' },
    ],
  },
  {
    id: 'similarity',
    title: 'Benzerlik',
    tr: 'İki veri birbirine çok yakın ya da aynı yönde değişiyor. Karşılaştırma yaparken "aynı şey burada da geçerli" demek istiyorsun.',
    patterns: [
      { t: '{A}. [[Similarly]], {b}.', note: 'Benzerlik için en güvenli bağlaç. Cümle başında, virgülle.' },
      { t: '{A}; [[likewise]], {b}.', note: 'Similarly ile eşanlamlı. Biraz daha seyrek, çeşitlilik sağlar.' },
      { t: '{A}, and [[similarly]], {b}.', note: 'Tek cümle içinde. "and similarly" iki virgüle dikkat et.' },
    ],
  },
  {
    id: 'result',
    title: 'Sonuç',
    tr: 'Birinci olay ikincinin sonucuna yol açıyor. Process diyagramlarında sık, grafiklerde nedeni sen tahmin edemezsin.',
    patterns: [
      { t: '{A}, [[so]] {b}.', note: 'Basit ve doğal; günlük dile yakın. Resmî yazıda "therefore" ya da "as a result" tercih et.' },
      { t: '{A}. [[As a result]], {b}.', note: 'Açık sonuç. Sadece neden-sonuç gerçekten görünüyorsa kullan.' },
      { t: '{A}; [[therefore]], {b}.', note: 'Resmî. Noktalı virgülden sonra therefore, ardından virgül.' },
      { t: '{A}, [[which meant that]] {b}.', note: 'Birinci cümlenin tamamına gönderme yapar. Sonuç zaten belirginse uygundur.' },
      { t: '[[Because]] {a}, {b}.', note: 'Neden başta gelir. Grafiklerde nedeni tahmin etme; process ve map gibi nedenin açık olduğu durumlarda kullan.' },
    ],
  },
  {
    id: 'concession',
    title: 'Ödün (-e rağmen)',
    tr: 'Birinci veri bir beklenti yaratıyor ama ikincisi bunun tersi. "Düştü ama hâlâ yüksekti" gibi.',
    patterns: [
      { t: '[[Although]] {a}, {b}.', note: 'Tek cümlede. Although cümleyi açar, virgülle ikinci kısma geçer. "But" ile birlikte kullanma.' },
      { t: '[[Even though]] {a}, {b}.', note: 'Although\'dan daha vurgulu.' },
      { t: '{A}; [[nevertheless]], {b}.', note: 'Resmî. Noktalı virgül + nevertheless + virgül.' },
      { t: '{A}. [[Even so]], {b}.', note: 'Daha doğal. İki ayrı cümle.' },
      { t: '{A}, [[yet]] {b}.', note: 'But ile benzer ama daha edebî. Virgül şart.' },
    ],
  },
  {
    id: 'sequence',
    title: 'Sıra / Zaman',
    tr: 'Olaylar sırayla gerçekleşiyor ya da aynı dönemde başka bir şey oluyor. Process, map ve zaman içeren grafiklerde sık.',
    patterns: [
      { t: '{A}. [[Then]], {b}.', note: 'Basit sıra. Process\'te her adımda tekrar etme.' },
      { t: '{A}, [[after which]] {b}.', note: 'Birinci olay biter, sonra ikincisi başlar. Resmî.' },
      { t: '{A}; [[subsequently]], {b}.', note: 'Akademik "sonrasında". Çeşitlilik için uygun.' },
      { t: '{A}. [[After that]], {b}.', note: 'Günlük ama güvenli. Virgülden sonra ikinci cümle gelir.' },
      { t: '{A}. [[Meanwhile]], {b}.', note: 'Aynı dönemde başka bir şey oluyorsa. Sıra değil eşzamanlılık anlatır.' },
    ],
  },
]
