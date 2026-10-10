export default {
  id: "species",
  title: "Problem & Solution: türlerin azalması",
  type: "Problem / Cause & Solution",
  source: { text: "Şubat 2026, Umman sınavından bildirilen soru (ielts-blog.com). Soru metni kısaltıldı.", url: "https://www.ielts-blog.com/recent-ielts-exams/" },
  question: "In recent years, the number of different plant and animal species has fallen significantly in many countries. What are the causes of this problem, and what can be done to reduce it?",
  parse: [
    { q: "Konu nedir?", a: "Bitki ve hayvan türlerinin azalması. Anahtar kelimeler: plant and animal species, fallen, causes, reduce." },
    { q: "Essay türü?", a: "Problem / cause & solution. İki ayrı soru var: nedenler ve çözümler." },
    { q: "Soru tam olarak ne istiyor?", a: "1) Nedenler. 2) Bu sorunu azaltacak çözümler." },
    { q: "Ne istemiyor?", a: "Hangi türlerin yok olduğunun listesi ya da bu durumun neden kötü olduğu. Sadece neden ve çözüm." },
  ],
  candidates: [
    { id: "i1", text: "Doğal yaşam alanlarının yok edilmesi: ormanlar tarım ve şehir için açılıyor (neden).", pick: "body1", why: "En belirgin ve açıklaması kolay neden. Bir neden seçip iyi geliştirmek, iki nedeni yüzeysel yazmaktan iyidir." },
    { id: "i2", text: "Kirlilik ve iklim değişikliği (neden).", pick: false, why: "Doğru ama geniş bir konu. Bir paragrafta iyi açıklamak zor; birinci nedenle birlikte yazarsan ikisi de yüzeysel kalır." },
    { id: "i3", text: "Koruma alanları kurmak ve yasaları sıkı uygulamak (çözüm).", pick: "body2", why: "Birinci nedene (yaşam alanı kaybı) doğrudan cevap veriyor. Neden ile çözüm birbirine bağlı olunca essay tutarlı kalır." },
    { id: "i4", text: "Halkı eğitim kampanyalarıyla bilinçlendirmek (çözüm).", pick: false, why: "Mantıklı ama etkisi yavaş ve ölçmesi zor. Nedenle bağlantısı daha zayıf." },
  ],
  ask: {
    body1: ["Doğal yaşam alanı neden azalıyor?", "Hayvanlar yaşam alanını kaybedince ne olur?", "Hangi ülke ya da bölge örneğin olabilir?"],
    body2: ["Koruma alanı bu nedene nasıl cevap veriyor?", "Yasalar nasıl işe yarar (para cezası gibi)?", "Hangi ülke başarılı örnek olabilir?"],
  },
  essay: [
    { name: "Introduction", sentences: [
      { t: "Many countries are losing a large number of plant and animal species.", role: "paraphrase" },
      { t: "The main cause is the destruction of natural habitats, and I believe the problem can best be reduced by protecting wild areas with strict laws.", role: "thesis" },
    ] },
    { name: "Body 1", idea: "i1", sentences: [
      { t: "The most important cause of this decline is the loss of natural habitats.", role: "point" },
      { t: "As the world's population grows, forests and wetlands are cleared to make space for farms, roads and cities, so many animals lose the places where they find food and shelter.", role: "explain" },
      { t: "In many tropical countries, this process is happening very quickly because the demand for land and wood is increasing.", role: "explain" },
      { t: "For example, large areas of rainforest in South America have been cut down for farming, and many species there are now in danger of disappearing.", role: "example" },
      { t: "Without a suitable home, these species cannot survive.", role: "link" },
    ] },
    { name: "Body 2", idea: "i3", sentences: [
      { t: "To reduce this problem, governments should create protected areas and enforce strict laws.", role: "point" },
      { t: "If forests and rivers are officially protected, companies are not allowed to build or farm there, and those who break the law can be given heavy fines.", role: "explain" },
      { t: "Such laws also make companies think carefully before they begin any large project near a forest or river.", role: "explain" },
      { t: "Costa Rica, for instance, has protected a large part of its land, and its forest area has increased in recent decades.", role: "example" },
      { t: "In this way, wildlife has a better chance to recover.", role: "link" },
    ] },
    { name: "Conclusion", sentences: [
      { t: "In conclusion, the loss of habitats is the main reason for the decline in species, and governments can reduce it by protecting natural areas and enforcing the law.", role: "restate" },
      { t: "If nothing is done, many more species may disappear in the near future.", role: "wrap" },
    ] },
  ],
  introWhy: "Problem-solution essay'inde tez hem nedeni hem çözümü söyler. Böylece iki body paragrafın ne anlatacağı baştan belli olur.",
  conclusionWhy: "Neden ve çözümü tek cümlede özetle. Son cümle sonucu vurgular, yeni çözüm eklemez.",
  drift: [
    { s: "Zoos can help to protect species that are in danger.", on: false, why: "Çözüm olabilir ama planında yok. İkinci bir çözüm eklersen paragraf dağılır." },
    { s: "Farms and roads take up land that animals need.", on: true, why: "Birinci nedeni (yaşam alanı kaybı) açıklıyor. Planına uyuyor." },
    { s: "Many people enjoy watching wildlife documentaries.", on: false, why: "Konuyla uzaktan ilgili ama neden ya da çözüm değil. Soruya cevap vermiyor." },
  ],
}
