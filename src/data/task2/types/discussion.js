export default {
  id: 'discussion',
  name: 'Discussion (Discuss both views)',
  tr: 'İki karşıt görüş verilir; ikisini de tartışman ve çoğu zaman kendi görüşünü bildirmen istenir. Soru "give your own opinion" içeriyorsa görüşün zorunludur, içermiyorsa bile bildirmen güvenlidir.',
  recognize: [
    '"Discuss both views and give your own opinion."',
    '"Some people think X. Others believe Y."',
    '"Discuss both these views."',
    'Soruda iki ayrı kesim ve iki farklı görüş yer alır.',
  ],
  structure: [
    { part: 'Giriş', goal: 'Konuyu parafraz et ve iki görüşü belirt. Kendi görüşünü kısaca söyle.', tip: 'Görüş istenmişse mutlaka bildir; bu Task Response için kritik.' },
    { part: 'Body 1', goal: 'Birinci görüşü savun: neden bazıları böyle düşünüyor.', tip: 'Tek fikre odaklan, açıkla ve örnek ver. Kendi katılmadığın görüş için bile nesnel ve adil ol.' },
    { part: 'Body 2', goal: 'İkinci görüşü savun. Eğer bu senin görüşünse güçlü argümanlar ver.', tip: 'Her iki body de aşağı yukarı eşit uzunlukta olsun.' },
    { part: 'Sonuç', goal: 'Her iki görüşün özetini ver ve kendi görüşünü yeniden belirt.', tip: 'Görüşünü giriş ile aynı tut.' },
  ],
  thesis: [
    'While some people believe that [görüş A], others argue that [görüş B]. This essay will discuss both views before explaining why I support [A/B].',
    'There are strong arguments on both sides of this debate. In my opinion, however, [kendi görüşün].',
    'Although [görüş A] has its merits, I believe that [görüş B] is more convincing.',
  ],
  phrases: [
    { en: 'Proponents of this view argue that...', tr: 'Bu görüşü savunanlar ... diyor', use: 'Bir tarafı sunarken' },
    { en: 'On the one hand, ...', tr: 'Bir yandan...', use: 'Birinci görüşü başlatırken' },
    { en: 'On the other hand, ...', tr: 'Öte yandan...', use: 'İkinci görüşü başlatırken' },
    { en: 'Those who take this position often point out that...', tr: 'Bu pozisyondakiler genellikle ... işaret eder', use: 'Bir tarafı sunarken' },
    { en: 'There is some truth in this argument, but...', tr: 'Bu argümanda doğruluk payı var ama...', use: 'Karşı görüşü kabul ederken' },
    { en: 'In my opinion, the latter view is more persuasive because...', tr: 'Bence ikinci görüş daha ikna edici çünkü...', use: 'Kendi görüşünü bildirirken' },
    { en: 'It could be argued that...', tr: 'Şu da savunulabilir ki...', use: 'Argüman sunarken' },
    { en: 'Taking everything into account, ...', tr: 'Her şeyi göz önünde bulundurursak...', use: 'Sonuç' },
  ],
  mistakes: [
    'Sadece bir görüşü anlatmak; iki görüşü de eşit ele almamak.',
    'Görüşünü hiç bildirmemek (soru istiyorsa ağır hata).',
    'Her paragrafta "I think" yazmak; görüşü sadece giriş ve sonuçta bildirmek yeterli.',
    'Görüşünü başta bir şey, sonda başka bir şey olarak yazmak.',
    'Karşı görüşü küçümseyen veya duygusal bir dil kullanmak.',
  ],
  sample: {
    question: 'Some people think that universities should provide graduates with the knowledge and skills needed in the workplace. Others think that the true function of a university should be to give access to knowledge for its own sake. Discuss both views and give your own opinion.',
    text: 'Universities play a central role in modern society, and there is an ongoing debate about their purpose. While some people believe that they should prepare students for employment, others argue that they should pursue knowledge for its own sake. In my opinion, a balanced approach is most beneficial, although the practical view is slightly more convincing.\n\nProponents of the vocational view argue that higher education is an expensive investment, and graduates need to be able to earn a living afterwards. Students often take on large debts, so it is reasonable to expect that their degrees will lead to employment. For example, medical and engineering courses are designed around the skills that these professions require, and graduates in these fields rarely struggle to find work. Employers also benefit, because they can hire people who are ready to contribute immediately.\n\nOn the other hand, those who favour knowledge for its own sake point out that many of humanity\'s greatest advances came from curiosity rather than commercial need. Research in pure mathematics or philosophy may not seem useful at first, but it can later underpin technologies such as computing. Moreover, studying the humanities develops critical thinking, which is valuable in any career and for democratic citizenship.\n\nIn my view, the workplace should not be ignored, because universities are funded by society and should deliver tangible returns. However, this does not mean abandoning academic inquiry altogether; the best courses combine theory with practical skills.\n\nIn conclusion, both views have merit, but I believe that universities should give priority to employability while still protecting space for pure learning.',
  },
}
