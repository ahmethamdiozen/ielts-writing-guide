const day = (id, title, steps, link) => ({ id, title, steps, ...(link ? { link } : {}) })
const rest = (id, steps) => day(id, 'Hafif tekrar', steps, { to: '/practice', label: 'Alıştırma' })

export default {
  title: '4 haftalık Writing planı',
  intro: 'Günde 40-45 dk, haftada 6 gün çalışma, 7. gün hafif tekrar. Task 1 en az 150 kelime ve 20 dk, Task 2 en az 250 kelime ve 40 dk. Yazmayı kâğıda ya da boş bir dosyaya yap, rehberi yazarken kapat.',
  weeks: [
    {
      id: 'w1', title: '1. Hafta: Task 1 temeli', goal: 'Task 1 yapısı, karşılaştırma ve değişim kelimeleri, bar chart.',
      days: [
        day('d01', 'Task 1 yaklaşımı', ['Yaklaşım sayfasındaki dört paragraf yapısını oku.', 'Kendi cümlenle bir overview paragrafı örneği yaz.'], { to: '/task1/approach', label: 'Yaklaşım' }),
        day('d02', 'Karşılaştırma kelimeleri', ['Karşılaştırma ve zıtlık kalıplarını çalış (while, whereas, in contrast…).', 'Her biriyle kendi cümleni yaz.'], { to: '/task1/comparison', label: 'Karşılaştırma' }),
        day('d03', 'Değişim fiilleri', ['Artış, azalış ve sabitlik fiillerini çalış.', 'Aynı değişimi 3 farklı fiille anlat.'], { to: '/task1/change', label: 'Artış ve azalış' }),
        day('d04', 'Zirve, dip ve yaklaşıklık', ['Zirve/dip ve yaklaşık değer kalıplarını çalış.', 'Bir veri setinden 5 cümle kur.'], { to: '/task1/peaks', label: 'Zirve ve dip' }),
        day('d05', 'Bar chart rehberi', ['Bar chart rehberini oku.', 'Chart\'ı gör, 4 paragraf planını kâğıda çıkar.'], { to: '/task1/chart-bar', label: 'Bar chart' }),
        day('d06', 'Bar chart: adım adım', ['Adım adım bir bar chart çöz.', 'Sonra aynı chart\'ı rehbere bakmadan 20 dk\'da yaz.'], { to: '/t1-yol/transport', label: 'Bar chart: ulaşım' }),
        rest('d07', ['10 dk kelime tekrarı. Öğrendiklerini boşluk doldurma ile dene.']),
      ],
    },
    {
      id: 'w2', title: '2. Hafta: Task 1 diğer grafikler', goal: 'Line, pie, table, mixed ve process. Overview\'u her seferinde yaz.',
      days: [
        day('d08', 'Line graph rehberi', ['Line graph rehberini oku.', 'Trendleri bulup overview cümlesini yaz.'], { to: '/task1/chart-line', label: 'Line graph' }),
        day('d09', 'Line graph: adım adım', ['Adım adım bir line graph çöz.', 'Rehberi kapat, aynısını yaz.'], { to: '/t1-yol/women', label: 'Line graph: kadın istihdamı' }),
        day('d10', 'Pie chart', ['Pie chart rehberini ve oran kalıplarını çalış.', 'Yüzdelerle 5 cümle kur.'], { to: '/task1/chart-pie', label: 'Pie chart' }),
        day('d11', 'Table', ['Table rehberini oku.', 'Adım adım table sorusunu çöz.'], { to: '/t1-yol/tourism', label: 'Table: turizm' }),
        day('d12', 'Process ve mixed', ['Process rehberini oku, sıralama kalıplarını çalış.', 'Adım adım process sorusunu çöz.'], { to: '/t1-yol/recycling', label: 'Process: geri dönüşüm' }),
        day('d13', 'Bağlaç çalışması + Task 1', ['Bağlaç sayfasında bir chart\'ın cümlelerini bağlaçlarla birleştir.', 'Zamanlı bir Task 1 yaz (20 dk, 150+ kelime).'], { to: '/connect/bar', label: 'Bağlaç' }),
        rest('d14', ['10 dk tekrar. Yazdığın Task 1\'de overview var mı kontrol et.']),
      ],
    },
    {
      id: 'w3', title: '3. Hafta: Task 2', goal: 'Her essay tipinin planını öğren, tez ve paragraf yapısını yerleştir.',
      days: [
        day('d15', 'Task 2 genel rehber', ['Puanlama kriterleri ve band 9 beklentisini oku.', 'Bir soruyu al, 5 dk plan yap (fikir, örnek).'], { to: '/task2/general', label: 'Genel rehber' }),
        day('d16', 'Opinion essay', ['Opinion rehberini oku.', 'Adım adım bir opinion sorusu çöz.'], { to: '/t2-yol/schools', label: 'Opinion: okullar' }),
        day('d17', 'Discussion essay', ['Discussion rehberini oku.', 'Adım adım discussion sorusu çöz.'], { to: '/t2-yol/study', label: 'Discussion: grup çalışması' }),
        day('d18', 'Advantages ve disadvantages', ['Advantages rehberini oku.', 'Adım adım bir örneği çöz.'], { to: '/t2-yol/meetings', label: 'Advantages: toplantılar' }),
        day('d19', 'Problem ve çözüm', ['Problem & solution rehberini oku.', 'Adım adım bir örneği çöz.'], { to: '/t2-yol/species', label: 'Problem ve çözüm: türler' }),
        day('d20', 'Two-part ve development', ['Two-part rehberini oku.', 'Zamanlı bir Task 2 yaz (40 dk, 250+ kelime).'], { to: '/task2/two-part', label: 'Two-part' }),
        rest('d21', ['10 dk tekrar. Yazdığın essay\'in tezi soruyu doğrudan cevaplıyor mu kontrol et.']),
      ],
    },
    {
      id: 'w4', title: '4. Hafta: Süreli pratik ve mock', goal: 'Süreyi tutturmayı ve hatalarını azaltmayı öğren.',
      days: [
        day('d22', 'Task 1 süreli', ['Rastgele bir chart seç, 20 dk\'da yaz.', 'Overview, rakam doğruluğu ve kelime sayısını kontrol et.'], { to: '/practice', label: 'Alıştırma' }),
        day('d23', 'Task 2 planlama', ['3 soru için sadece 5 dk plan yap (yaz değil).', 'Tez + 2 ana fikir + örnek.'], { to: '/task2/general', label: 'Genel rehber' }),
        day('d24', 'Task 2 süreli', ['40 dk\'da tam bir Task 2 yaz.', 'Bitince tez, paragraf geçişleri ve sonuç kontrolü yap.'], { to: '/task2/opinion', label: 'Opinion' }),
        day('d25', 'Tam mock 1', ['Task 1 (20 dk) + Task 2 (40 dk) arka arkaya, 60 dk.'], { to: '/practice', label: 'Alıştırma' }),
        day('d26', 'Hataları düzelt', ['Mock 1\'i kontrol listesiyle değerlendir.', 'En çok yaptığın hata türüne 35 dk çalış.'], { to: '/practice', label: 'Alıştırma' }),
        day('d27', 'Tam mock 2', ['İkinci tam mock, 60 dk. İlk mock ile karşılaştır.'], { to: '/practice', label: 'Alıştırma' }),
        day('d28', 'Dinlen', ['Sadece hafif kelime tekrarı. Sınav günü iyi uyu.'], { to: '/task1', label: 'Task 1' }),
      ],
    },
  ],
  checks: [
    { name: 'Task 1 süresi ve kelime sayısı', target: '20 dk içinde, 150+ kelime' },
    { name: 'Task 1 overview', target: 'Her yazıda mutlaka var' },
    { name: 'Task 2 süresi ve kelime sayısı', target: '40 dk içinde, 250+ kelime' },
    { name: 'Task 2 tezi', target: 'Soruyu doğrudan cevaplıyor' },
    { name: 'Aynı bağlacın tekrarı', target: 'Aynı bağlaç iki kereden fazla geçmesin' },
  ],
}
