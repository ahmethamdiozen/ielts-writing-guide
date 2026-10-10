// Her chart için: çizilecek veri + o veriden çıkan cümle çiftleri ve bağlanmış halleri.
// [[...]] bağlacı vurgular. Rakamlar chart'taki verilerle birebir tutarlıdır.
export default [
  {
    id: 'bar',
    title: 'Bar chart',
    prompt: 'The bar chart shows the percentage of men and women who used the internet daily in four countries in 2020.',
    kind: 'bar',
    chart: {
      unit: '%',
      max: 100,
      step: 25,
      categories: ['Sweden', 'UK', 'Brazil', 'India'],
      series: [
        { name: 'Men', values: [92, 85, 60, 45] },
        { name: 'Women', values: [90, 82, 52, 30] },
      ],
    },
    alt: 'Gruplu çubuk grafik: günlük internet kullanan erkek ve kadın yüzdesi. İsveç 92 ve 90, İngiltere 85 ve 82, Brezilya 60 ve 52, Hindistan 45 ve 30.',
    steps: [
      {
        rel: 'Karşıtlık',
        a: 'In Sweden, 92% of men used the internet daily.',
        b: 'In India, only 45% of men did.',
        linked: 'In Sweden, 92% of men used the internet daily, [[whereas]] only 45% of men did so in India.',
        why: 'En yüksek ve en düşük ülkeyi karşılaştırıyorsun, yani iki zıt uç. Whereas virgülle birinci kısma bağlanır ve tek cümle kurar. İkinci kısımda fiili tekrar etmemek için "did so" kullan.',
        alts: [
          'In Sweden, 92% of men used the internet daily. [[By contrast]], only 45% of men did so in India.',
          '[[While]] 92% of men in Sweden used the internet daily, only 45% of men in India did so.',
        ],
      },
      {
        rel: 'Benzerlik',
        a: 'In the UK, 85% of men went online every day.',
        b: '82% of women did so.',
        linked: 'In the UK, 85% of men went online every day, and [[similarly]], 82% of women did so.',
        why: 'İki değer birbirine çok yakın (3 puan fark). Benzerliği "similarly" ile işaretle; virgül hem öncesinde hem sonrasında gelir.',
        alts: [
          'In the UK, 85% of men went online every day. [[Likewise]], 82% of women did so.',
          'In the UK, 85% of men went online every day, [[as did]] 82% of women.',
        ],
      },
      {
        rel: 'Ekleme',
        a: 'India recorded the lowest figure for men, at 45%.',
        b: 'Its gender gap was the widest, at 15 percentage points.',
        linked: 'India recorded the lowest figure for men, at 45%; [[moreover]], its gender gap was the widest, at 15 percentage points.',
        why: 'İkinci cümle birinciyi çürütmüyor; aynı ülke hakkında yeni bir bulgu ekliyor. Moreover noktalı virgülden sonra gelir ve ardından virgül ister.',
        alts: [
          'India recorded the lowest figure for men, at 45%. [[In addition]], its gender gap was the widest, at 15 percentage points.',
          'India recorded the lowest figure for men, at 45%, [[and]] its gender gap was also the widest, at 15 percentage points.',
        ],
      },
      {
        rel: 'Ödün (-e rağmen)',
        a: 'Internet use in Brazil was lower than in Sweden and the UK.',
        b: 'More than half of both men and women still went online daily.',
        linked: '[[Although]] internet use in Brazil was lower than in Sweden and the UK, more than half of both men and women still went online daily.',
        why: 'Birinci cümle "az kullanım" beklentisi yaratıyor, ikincisi bunun tersini söylüyor. Although cümleyi açar ve virgülle ikinci kısma geçer. Aynı cümlede "but" ekleme.',
        alts: [
          'Internet use in Brazil was lower than in Sweden and the UK; [[nevertheless]], more than half of both men and women went online daily.',
          'Internet use in Brazil was lower than in Sweden and the UK. [[Even so]], more than half of both men and women went online daily.',
        ],
      },
    ],
  },
  {
    id: 'line',
    title: 'Line graph',
    prompt: 'The line graph shows the number of visitors to three museums between 2000 and 2020.',
    kind: 'line',
    chart: {
      unit: 'thousand',
      max: 600,
      step: 200,
      xs: [2000, 2005, 2010, 2015, 2020],
      series: [
        { name: 'History Museum', values: [200, 260, 330, 430, 550] },
        { name: 'Science Museum', values: [250, 300, 400, 330, 350] },
        { name: 'Art Museum', values: [500, 420, 300, 280, 250] },
      ],
    },
    alt: 'Çizgi grafik: üç müzenin ziyaretçi sayısı, bin kişi. Tarih müzesi 200den 550ye çıkıyor, Bilim müzesi 250 ile 400 arasında dalgalanıp 350de bitiyor, Sanat müzesi 500den 250ye düşüyor.',
    steps: [
      {
        rel: 'Karşıtlık',
        a: 'Visitor numbers at the History Museum rose steadily from 200,000 to 550,000.',
        b: 'Visitor numbers at the Art Museum fell from 500,000 to 250,000.',
        linked: 'Visitor numbers at the History Museum rose steadily from 200,000 to 550,000, [[while]] those at the Art Museum fell from 500,000 to 250,000.',
        why: 'İki çizgi zıt yönde gidiyor: biri artıyor, diğeri düşüyor. While bu durumun en doğal bağlacıdır. İkinci kısımda aynı ifadeyi tekrar etmemek için "those" kullan.',
        alts: [
          'Visitor numbers at the History Museum rose steadily from 200,000 to 550,000. [[In contrast]], those at the Art Museum fell from 500,000 to 250,000.',
          '[[Whereas]] visitor numbers at the History Museum rose steadily from 200,000 to 550,000, those at the Art Museum fell from 500,000 to 250,000.',
        ],
      },
      {
        rel: 'Sıra / Zaman',
        a: 'Visitor numbers at the Art Museum fell sharply to 300,000 in 2010.',
        b: 'Numbers declined slightly to 250,000 by 2020.',
        linked: 'Visitor numbers at the Art Museum fell sharply to 300,000 in 2010, [[after which]] they declined slightly to 250,000 by 2020.',
        why: 'Aynı çizginin iki dönemi var ve zaman sırası belli. After which birinci dönemi kapatıp ikinciye geçer; öncesinde virgül şart.',
        alts: [
          'Visitor numbers at the Art Museum fell sharply to 300,000 in 2010 and [[then]] declined slightly to 250,000 by 2020.',
          'Visitor numbers at the Art Museum fell sharply to 300,000 in 2010. [[Subsequently]], they declined slightly to 250,000 by 2020.',
        ],
      },
      {
        rel: 'Ödün (-e rağmen)',
        a: 'The Art Museum was the most popular in 2000, with 500,000 visitors.',
        b: 'The History Museum had overtaken it by 2010.',
        linked: '[[Although]] the Art Museum was the most popular in 2000, with 500,000 visitors, the History Museum had overtaken it by 2010.',
        why: 'İlk cümle "Sanat müzesi lider" izlenimi veriyor, ikincisi bunun değiştiğini söylüyor. Kesişim noktaları Task 1\'de önemli bir özelliktir; Although bunu tek cümlede verir.',
        alts: [
          'The Art Museum was the most popular in 2000, with 500,000 visitors; [[however]], the History Museum had overtaken it by 2010.',
          'The Art Museum was the most popular in 2000, with 500,000 visitors, [[but]] the History Museum had overtaken it by 2010.',
        ],
      },
      {
        rel: 'Benzerlik',
        a: 'Visitor numbers at the History Museum rose overall.',
        b: 'Visitor numbers at the Science Museum increased from 250,000 to 350,000.',
        linked: 'Visitor numbers at the History Museum rose overall, and [[similarly]], those at the Science Museum increased from 250,000 to 350,000.',
        why: 'İki müze de başlangıçtan bitişe yükseldi. Dalgalanma varsa bile genel yön aynıysa benzerlik kurabilirsin.',
        alts: [
          'Visitor numbers at the History Museum rose overall. [[Likewise]], those at the Science Museum increased from 250,000 to 350,000.',
          'Visitor numbers at the History Museum rose overall, [[as did]] those at the Science Museum, from 250,000 to 350,000.',
        ],
      },
    ],
  },
  {
    id: 'pie',
    title: 'Pie chart',
    prompt: 'The pie charts show the sources of energy used in one country in 1990 and 2020.',
    kind: 'pie',
    chart: {
      labels: ['Coal', 'Oil', 'Gas', 'Renewables'],
      pies: [
        { title: '1990', values: [45, 32, 19, 4] },
        { title: '2020', values: [15, 25, 35, 25] },
      ],
    },
    alt: 'İki pasta grafik, enerji kaynakları yüzdesi. 1990: kömür 45, petrol 32, gaz 19, yenilenebilir 4. 2020: kömür 15, petrol 25, gaz 35, yenilenebilir 25.',
    steps: [
      {
        rel: 'Karşıtlık',
        a: 'Coal accounted for 45% of energy in 1990.',
        b: 'It made up only 15% in 2020.',
        linked: 'Coal accounted for 45% of energy in 1990, [[whereas]] it made up only 15% in 2020.',
        why: 'Aynı kategorinin iki yıldaki payı çok farklı. Whereas iki zaman noktasını tek cümlede karşılaştırır. İki grafik arasındaki en büyük değişimi bu şekilde öne çıkar.',
        alts: [
          'Coal accounted for 45% of energy in 1990. [[By contrast]], it made up only 15% in 2020.',
          '[[While]] coal accounted for 45% of energy in 1990, it made up only 15% in 2020.',
        ],
      },
      {
        rel: 'Ödün (-e rağmen)',
        a: 'Coal was the dominant source in 1990.',
        b: 'It had become the smallest source by 2020.',
        linked: '[[Although]] coal was the dominant source in 1990, it had become the smallest source by 2020.',
        why: 'Baskın bir kaynağın en küçük hale gelmesi beklenmedik bir tersine dönüş. Ödün bağlacı bu "şaşırtıcı" farkı vurgular.',
        alts: [
          'Coal was the dominant source in 1990; [[however]], it had become the smallest source by 2020.',
          'Coal was the dominant source in 1990, [[yet]] it had become the smallest source by 2020.',
        ],
      },
      {
        rel: 'Ekleme',
        a: 'Gas rose to 35% in 2020.',
        b: 'Renewable energy increased to 25%.',
        linked: 'Gas rose to 35% in 2020; [[in addition]], renewable energy increased to 25%.',
        why: 'İki kaynak da arttı; ikinci cümle birinciye yeni bir artış ekliyor. In addition noktalı virgülden sonra gelir, ardından virgül yazılır.',
        alts: [
          'Gas rose to 35% in 2020. [[Furthermore]], renewable energy increased to 25%.',
          'Gas rose to 35% in 2020, [[and]] renewable energy increased to 25%.',
        ],
      },
      {
        rel: 'Benzerlik',
        a: 'Oil made up a quarter of the total in 2020.',
        b: 'Renewables accounted for 25%.',
        linked: 'Oil made up a quarter of the total in 2020, and [[similarly]], renewables accounted for 25%.',
        why: 'İki kaynak aynı payı almış (25%). Aynı değerleri ayrı ayrı yazmak yerine benzerlik bağlacıyla tek cümlede bağla.',
        alts: [
          'Oil made up a quarter of the total in 2020. [[Likewise]], renewables accounted for 25%.',
          'Oil made up a quarter of the total in 2020, [[as did]] renewables.',
        ],
      },
    ],
  },
  {
    id: 'table',
    title: 'Table',
    prompt: 'The table shows the average weekly spending of households in four countries on housing, food and leisure.',
    kind: 'table',
    chart: {
      unit: '$ per week',
      columns: ['Housing', 'Food', 'Leisure'],
      rows: [
        { name: 'Norway', values: [400, 220, 150] },
        { name: 'UK', values: [320, 160, 120] },
        { name: 'Mexico', values: [60, 90, 20] },
        { name: 'India', values: [35, 50, 10] },
      ],
    },
    alt: 'Tablo: dört ülkede haftalık hane harcaması, dolar. Norveç 400, 220, 150; İngiltere 320, 160, 120; Meksika 60, 90, 20; Hindistan 35, 50, 10.',
    steps: [
      {
        rel: 'Karşıtlık',
        a: 'Households in Norway spent most on housing ($400).',
        b: 'Households in Mexico spent most on food ($90).',
        linked: '[[Whereas]] households in Norway spent most on housing ($400), those in Mexico spent most on food ($90).',
        why: 'İki ülkenin en büyük gider kalemi farklı. Cümleyi Whereas ile açmak karşılaştırmayı en başta duyurur; ilk kısım virgülle biter.',
        alts: [
          'Households in Norway spent most on housing ($400), [[while]] those in Mexico spent most on food ($90).',
          'Households in Norway spent most on housing ($400). [[In contrast]], those in Mexico spent most on food ($90).',
        ],
      },
      {
        rel: 'Benzerlik',
        a: 'Housing was the largest expense in Norway.',
        b: 'Housing was the largest expense in the UK.',
        linked: 'Housing was the largest expense in Norway, and [[similarly]], it was the largest in the UK.',
        why: 'İki ülkede de aynı kalem birinci sırada. İkinci kısımda "housing" yerine "it" kullanarak tekrarı kaldır.',
        alts: [
          'Housing was the largest expense in Norway. [[Likewise]], it was the largest in the UK.',
          'Housing was the largest expense in Norway, [[as it was]] in the UK.',
        ],
      },
      {
        rel: 'Ekleme',
        a: 'UK households spent $320 on housing, roughly double their food spending of $160.',
        b: 'They spent $120 on leisure.',
        linked: 'UK households spent $320 on housing, roughly double their food spending of $160; [[in addition]], they spent $120 on leisure.',
        why: 'Aynı ülkenin üçüncü gider kalemi ekleniyor. Tabloda tüm rakamları yazmak yerine en önemli iki-üç tanesini bağlaçla topla.',
        alts: [
          'UK households spent $320 on housing, roughly double their food spending of $160; [[moreover]], they spent $120 on leisure.',
          'UK households spent $320 on housing, roughly double their food spending of $160, [[and]] they spent $120 on leisure.',
        ],
      },
      {
        rel: 'Ödün (-e rağmen)',
        a: 'India spent the least in every category.',
        b: 'Food was still its largest expense, at $50.',
        linked: '[[Although]] India spent the least in every category, food was still its largest expense, at $50.',
        why: 'Her kalemde en düşük harcama "her şey az" izlenimi verir, ama gıda yine de ülkenin içinde en büyük kalem. İkinci cümlede "still" vurguyu güçlendirir.',
        alts: [
          'India spent the least in every category; [[nevertheless]], food was its largest expense, at $50.',
          'India spent the least in every category, [[yet]] food was still its largest expense, at $50.',
        ],
      },
    ],
  },
  {
    id: 'process',
    title: 'Process',
    prompt: 'The diagram shows how chocolate is produced from cocoa beans.',
    kind: 'process',
    chart: {
      stages: [
        'Cocoa pods are picked and opened by hand',
        'Beans ferment for about a week',
        'Beans are dried in the sun',
        'Beans are roasted at a high temperature',
        'Beans are ground into a paste',
        'Sugar and milk are added; the mixture is heated and stirred for several hours',
        'Liquid chocolate is poured into moulds, cooled and wrapped',
      ],
    },
    alt: 'Süreç diyagramı, 7 aşama: kakao meyveleri toplanır, çekirdekler fermente edilir, güneşte kurutulur, kavrulur, öğütülür, şeker ve süt eklenip ısıtılır, kalıba dökülüp soğutulur ve paketlenir.',
    steps: [
      {
        rel: 'Sıra / Zaman',
        a: 'Cocoa pods are picked and opened by hand.',
        b: 'The beans are left to ferment for about a week.',
        linked: 'Cocoa pods are picked and opened by hand, [[after which]] the beans are left to ferment for about a week.',
        why: 'Process\'te iki aşamayı ardışık göstermenin en temiz yolu. After which birinci aşama bittikten sonra ikincinin başladığını söyler; öncesinde virgül gelir.',
        alts: [
          'Cocoa pods are picked and opened by hand. [[Next]], the beans are left to ferment for about a week.',
          '[[First]], cocoa pods are picked and opened by hand, and [[then]] the beans are left to ferment for about a week.',
        ],
      },
      {
        rel: 'Sıra / Zaman',
        a: 'The fermented beans are dried in the sun.',
        b: 'They are roasted at a high temperature.',
        linked: 'The fermented beans are dried in the sun [[and then]] roasted at a high temperature.',
        why: 'İki edilgen fiili tek özneyle birleştirirsin; "they are" tekrarı kalkar. İki eylem arasında virgül gerekmez.',
        alts: [
          'The fermented beans are dried in the sun. [[Subsequently]], they are roasted at a high temperature.',
          'The fermented beans are dried in the sun, [[followed by]] roasting at a high temperature.',
        ],
      },
      {
        rel: 'Sonuç',
        a: 'The mixture is heated and stirred for several hours.',
        b: 'It becomes smooth liquid chocolate.',
        linked: 'The mixture is heated and stirred for several hours, [[so that]] it becomes smooth liquid chocolate.',
        why: 'Süreçte neden-sonuç görünüyorsa sonuç bağlacı kullanabilirsin (grafiklerde neden tahmin etme). So that ikinci cümleyi amaç/sonuç olarak bağlar.',
        alts: [
          'The mixture is heated and stirred for several hours. [[As a result]], it becomes smooth liquid chocolate.',
          'The mixture is heated and stirred for several hours, [[which turns it into]] smooth liquid chocolate.',
        ],
      },
    ],
  },
]
