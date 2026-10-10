export default [
  {
    id: 'pie',
    title: 'Pie chart',
    tr: 'Pie chart toplamın parçalarını gösterir. Odak: hangi dilim büyük, hangisi küçük, iki grafik varsa dilimler nasıl değişmiş.',
    overviewInclude: [
      'En büyük dilim hangisi, en küçük hangisi.',
      'İki pie chart varsa: en çok artan ve en çok azalan dilim.',
      'Çoğunluğu oluşturan kategori (yarıdan fazla ise).',
    ],
    grouping: [
      'Büyükten küçüğe sırala: önce ilk iki-üç büyük dilim, sonra küçükler.',
      'Birbirine yakın değerleri aynı cümlede birleştir: "X and Y both made up around 20%".',
      'İki grafik varsa: her kategoriyi iki yıl için karşılaştır.',
    ],
    language: ['account-for', 'make-up', 'a-quarter-of', 'the-majority-of', 'proportion', 'while', 'whereas', 'roughly', 'just-over', 'nearly'],
    sample: {
      prompt: 'The pie charts show the main sources of energy used in a country in 1990 and 2020.',
      text: 'The pie charts compare the sources of energy used in one country in 1990 and 2020. Overall, coal was the dominant source in 1990, but by 2020 renewable energy and gas had taken over as the leading sources.\n\nIn 1990, coal accounted for 45% of total energy production, while oil made up roughly a third. Gas represented just under a fifth, and renewable sources contributed only 4%, the smallest share by far.\n\nBy 2020, the picture had changed considerably. Coal fell sharply to 15%, and oil declined to a quarter of the total. By contrast, gas rose to 35%, and renewable energy increased dramatically to account for 25% of production, a sixfold rise compared with 1990. Taken together, gas and renewables therefore made up a majority of the total, at 60%, by 2020.',
    },
  },
  {
    id: 'bar',
    title: 'Bar chart',
    tr: 'Bar chart kategorileri ya da zaman içinde değerleri karşılaştırır. Odak: en yüksek ve en düşük çubuklar, fark ve trend.',
    overviewInclude: [
      'En yüksek ve en düşük kategori.',
      'Zaman varsa genel trend (artış, azalış).',
      'Gruplar arasında en belirgin fark.',
    ],
    grouping: [
      'Çubukları değerlerine göre grupla: yüksek ve düşük değerler.',
      'Zamana göre gruplama: önce ilk yıl, sonra son yıl; ya da kategori kategori.',
      'En yüksek ve en düşük değerleri mutlaka karşılaştır.',
    ],
    language: ['while', 'whereas', 'in-contrast', 'by-contrast', 'compared-with', 'unlike', 'the-highest-figure', 'the-lowest-figure', 'both', 'similarly'],
    sample: {
      prompt: 'The bar chart shows the percentage of men and women who used the internet daily in four countries in 2020.',
      text: 'The bar chart compares the proportion of men and women who used the internet every day in four countries in 2020. Overall, internet use was highest in Sweden and lowest in India, and men were generally more active online than women.\n\nIn Sweden, the figures were the highest of all, with 92% of men and 90% of women going online daily. Similarly, around 85% of men and 82% of women in the UK used the internet every day. In both countries, the gap between the genders was very small.\n\nBy contrast, internet use was considerably lower in Brazil and India. In Brazil, 60% of men went online daily, compared with just 52% of women. India recorded the lowest figures, at 45% for men, whereas only 30% of women used the internet every day, which was the widest gender gap.',
    },
  },
  {
    id: 'line',
    title: 'Line graph',
    tr: 'Line graph zaman içindeki değişimi gösterir. Odak: trend, zirve, dip, dalgalanma ve kesişim noktaları.',
    overviewInclude: [
      'Genel trend: yükseliş, düşüş ya da dalgalanma.',
      'En yüksek ya da en düşük noktayı gösteren çizgi.',
      'Çizgiler arasındaki en belirgin fark ya da kesişim.',
    ],
    grouping: [
      'Zaman dilimlerine göre grupla (ilk yarı, ikinci yarı) ya da çizgilere göre grupla.',
      'Çizgi sayısı fazlaysa benzer eğilimleri birlikte anlat.',
      'Başlangıç, zirve, dip ve bitiş değerlerini mutlaka belirt.',
    ],
    language: ['rise', 'increase', 'fall', 'decline', 'peak-at', 'fluctuate', 'remain-stable', 'level-off', 'sharply', 'gradually', 'steadily'],
    sample: {
      prompt: 'The line graph shows the number of visitors to three museums between 2000 and 2020.',
      text: 'The line graph illustrates the number of visitors to three museums between 2000 and 2020. Overall, visitor numbers at the History Museum rose steadily, while those at the Science Museum fluctuated and the Art Museum saw a decline.\n\nIn 2000, the History Museum attracted 200,000 visitors, and this figure rose gradually to reach a peak of 550,000 in 2020. The Science Museum started at a similar level, 250,000, but fluctuated between 300,000 and 400,000 for most of the period before levelling off at 350,000.\n\nBy contrast, the Art Museum was the most popular in 2000, with 500,000 visitors. However, its numbers fell sharply to 300,000 in 2010 and then declined slightly to end the period at 250,000, the lowest figure of the three.',
    },
  },
  {
    id: 'table',
    title: 'Table',
    tr: 'Tablo çok sayıda rakam içerir. Odak: seçici olmak, en yüksek ve en düşük değerleri bulmak, kategorileri gruplamak.',
    overviewInclude: [
      'Her sütun ya da satırdaki en yüksek ve en düşük değer.',
      'Zaman varsa genel eğilim.',
      'Gruplar arasında net fark ya da benzerlik.',
    ],
    grouping: [
      'Tüm rakamları yazma; en dikkat çekici olanları seç.',
      'Satırları ya da sütunları mantıklı biçimde grupla (örneğin yüksek ve düşük gelirli ülkeler).',
      'Her body paragrafında bir grubu anlat ve ikinci grupla karşılaştır.',
    ],
    language: ['while', 'whereas', 'compared-with', 'in-contrast', 'the-highest-figure', 'the-lowest-figure', 'roughly', 'just-over', 'nearly', 'overall'],
    sample: {
      prompt: 'The table shows the average weekly spending of households in four countries on food, housing and leisure.',
      text: 'The table compares the average weekly spending of households in four countries on three categories: food, housing and leisure. Overall, housing was the largest expense in Norway and the UK, while food came first in Mexico and India, and households in Norway spent the most in total.\n\nIn Norway, housing took the biggest share at $400 per week, compared with $220 on food and $150 on leisure. Similarly, the UK spent $320 on housing, which was roughly double its food spending of $160. Leisure spending in the UK stood at $120.\n\nBy contrast, food was the main expense in Mexico and India. Mexican households spent $90 on food, while they spent only $60 on housing and $20 on leisure. India recorded the lowest figures in every category, at $50 for food, $35 for housing and just $10 for leisure.',
    },
  },
  {
    id: 'mixed',
    title: 'Mixed charts',
    tr: 'Mixed chart iki farklı grafik türünü birlikte verir (örneğin bar chart ve pie chart). Odak: iki grafiği ilişkilendirmek ama ayrı ayrı anlatmak.',
    overviewInclude: [
      'Her grafiğin kendi ana özelliği.',
      'İki grafik arasındaki ilişki (aynı konu mu, farklı konu mu).',
      'Tek bir overview içinde ikisini birlikte özetle.',
    ],
    grouping: [
      'Body 1: ilk grafik, Body 2: ikinci grafik. Sonra aralarında bağ kur.',
      'Her grafik için kendi kalıplarını kullan (pie için oran, line için trend).',
      'Grafikler birbirine bağlıysa bağ kur: "This reflects...".',
    ],
    language: ['turning-to', 'while', 'whereas', 'account-for', 'rise', 'overall', 'as-can-be-seen', 'in-contrast', 'proportion', 'steadily'],
    sample: {
      prompt: 'The bar chart shows the number of students enrolled in four subjects, and the pie chart shows the gender split in science.',
      text: 'The bar chart shows the number of students who enrolled in four subjects at a university, while the pie chart gives the gender breakdown of science students. Overall, business was the most popular subject, and science students were mostly male.\n\nAs can be seen from the bar chart, business attracted the highest number of students at 4,000, followed by science at 3,000. Arts and law were less popular, with 1,800 and 1,200 students respectively. Business students outnumbered those in law by more than three times.\n\nTurning to the pie chart, male students accounted for 62% of those studying science, whereas females made up the remaining 38%. In other words, there were nearly two male students for every female student in this subject, which suggests that science was considerably more popular with men than with women.',
    },
  },
  {
    id: 'process',
    title: 'Process diyagramı',
    tr: 'Process bir şeyin nasıl üretildiğini ya da işlediğini adım adım gösterir. Odak: sıralama ve edilgen yapı. Genellikle yorum ve rakam yoktur.',
    overviewInclude: [
      'Toplam kaç aşama olduğu.',
      'Sürecin başlangıcı ve sonu.',
      'Süreç doğrusal mı, döngüsel mi.',
    ],
    grouping: [
      'Aşamaları kronolojik sırayla anlat; atlama.',
      'Çok sayıda aşama varsa iki paragrafa böl (ilk yarı ve ikinci yarı).',
      'Her adım için edilgen yapı kullan: "is heated", "are then packed".',
    ],
    language: ['first', 'next', 'is-then', 'followed-by', 'finally', 'as-a-result', 'initially', 'subsequently', 'during', 'meanwhile'],
    sample: {
      prompt: 'The diagram shows how chocolate is produced from cocoa beans.',
      text: 'The diagram illustrates the process by which chocolate is made from cocoa beans. Overall, there are seven main stages, beginning with the harvesting of the beans and ending with the packaging of the finished product.\n\nFirst, cocoa pods are picked from the trees and opened by hand to remove the beans. The beans are then left to ferment for about a week, followed by a drying stage in the sun, which lasts several days.\n\nNext, the dried beans are roasted at a high temperature and crushed into small pieces. These pieces are then ground into a thick paste, and sugar and milk are added. Subsequently, the mixture is heated and stirred for several hours. Finally, the liquid chocolate is poured into moulds, cooled and wrapped before being sent to shops.',
    },
  },
  {
    id: 'map',
    title: 'Map',
    tr: 'Map iki ya da daha fazla zaman noktasında bir yerin nasıl değiştiğini gösterir. Odak: yön, konum ve değişiklik. Geçmiş zaman ve edilgen kullan.',
    overviewInclude: [
      'Değişimin genel yönü: modernleşme, kentleşme, büyüme.',
      'En belirgin 2–3 değişiklik.',
      'Neler aynı kaldı.',
    ],
    grouping: [
      'Yönlere göre grupla: kuzey ve güney, doğu ve batı.',
      'Ya da değişim türlerine göre: yıkılanlar, yeni yapılanlar, dönüştürülenler.',
      'Konum belirtmeden değişiklik anlatma: her cümlede yön kullan.',
    ],
    language: ['to-the-north-of', 'adjacent-to', 'was-replaced-by', 'was-demolished', 'was-converted-into', 'as-a-result', 'in-the-centre-of', 'overall', 'while', 'whereas'],
    sample: {
      prompt: 'The maps show the changes in a village between 1990 and 2020.',
      text: 'The two maps show how a village changed between 1990 and 2020. Overall, the village expanded significantly, with farmland giving way to housing and new facilities, while the church and the river remained unchanged.\n\nIn 1990, the village consisted of a small group of houses in the centre of the map, with farmland to the north and a river to the east. The primary school stood adjacent to the church in the west.\n\nBy 2020, the farmland to the north of the village had been replaced by a large housing estate. The old school was demolished and a supermarket was built in its place, while a new school was constructed to the south. In addition, the old road in the centre was converted into a pedestrian area, whereas the river and the church remained as they were.',
    },
  },
]
