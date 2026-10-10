# IELTS Writing Guide

IELTS Writing Task 1 (veri anlatımı) ve Task 2 (essay) için kelime, bağlaç ve yapı rehberi. Açıklamalar Türkçe, örnek cümleler ve model metinler İngilizce.

Canlı site: https://ahmethamdiozen.github.io/ielts-writing-guide/

## Neler var?

- **Task 1:** yaklaşım rehberi, 11 kategoride kelime ve bağlaç bankası (her kelimede anlam, ne zaman kullanılır, kural, sık hata ve 3–5 örnek), 7 grafik türü için rehber ve model cevap.
- **Task 2:** 7 essay türü (opinion, discussion, advantages/disadvantages, problem/solution, two-part, positive/negative development, mixed) ve genel rehber (puanlama kriterleri, fikir üretme, kontrol listesi).
- Alıştırma sekmesi: örnek cümlelerden otomatik boşluk doldurma (kategori ya da "öğrendim" listesine göre).
- Arama, "öğrendim" işareti (tarayıcıda saklanır), koyu/açık tema, mobil uyum.

## Geliştirme

```bash
npm install
npm run dev      # geliştirme sunucusu
npm test         # veri şeması ve arayüz testleri
npm run build    # dist/ üretir
```

## İçerik eklemek

İçerik `src/data/` altındaki JS dosyalarındadır; arayüz sadece bunları gösterir.

- **Yeni kelime:** `src/data/task1/vocab/<kategori>.js` dosyasına `e(term, tr, use, charts, examples, extra)` satırı ekle. `npm test` her kelimenin 3–5 örneği olduğunu ve örneklerin kelimeyi (ya da `forms` içindeki bir biçimini) içerdiğini doğrular.
- **Yeni kategori:** yeni `vocab/` dosyası aç ve `vocabulary.js` içindeki `categories` ile `entries` listesine ekle (her kategoride en az 6 kelime olmalı).
- **Yeni essay türü:** `src/data/task2/types/` altına dosya ekle ve `essayTypes.js` içine dahil et.

## Yayın

`main` branch'ine push edince GitHub Actions testleri çalıştırır, build alır ve GitHub Pages'e yayınlar (`.github/workflows/deploy.yml`).
