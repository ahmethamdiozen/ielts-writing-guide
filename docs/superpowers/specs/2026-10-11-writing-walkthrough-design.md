# Adım Adım yazma yolu (Task 1 ve Task 2) — tasarım

Onay: kullanıcı sohbetinde onayladı (2026-10-11). Mevcut sayfalara dokunulmaz; üst menüye iki buton eklenir.

## Amaç
Chart ya da soruyu görüp band 7 seviyesinde metni kendi başına çıkarabilmek. "Önce dene, sonra cevabı aç" biçiminde çalışır.

## Rotalar
- `#/t1-yol/:chart?` — "T1 Adım Adım"
- `#/t2-yol/:topic?` — "T2 Adım Adım"
- Üst barda arama kutusu bu sayfalarda gizli.

## Task 1 adımları (8 chart: 2 bar, 2 line, 1 pie, 1 table, 1 mixed, 1 process)
1. Chart'ı oku (konu, birim, zaman, tür)
2. Veriden bulgu çıkar (bulgular + ilişkiler: karşıtlık, benzerlik; kullan / atla)
3. Her bulgudan bir cümle
4. Overview (+ introduction)
5. Cümleleri bağla (bağlaç vurgulu, nedeni yazılı)
6. Paragraflara yerleştir (etkileşimli: Body 1 / Body 2)
7. Tam metin (kelime sayısı, band 7 kontrol listesi)

## Task 2 adımları (8 konu)
1. Soruyu parçala
2. Fikir üret ve 2 tanesini seç
3. Fikri geliştir (Point – Explain – Example – Link)
4. Plan + sapmama kuralı
5. Giriş ve sonuç
6. Tam essay (yapıyı göster düğmesi)
7. Sapma kontrolü (mini quiz)

## İçerik kuralları
- Band 7: net overview/tez, doğru rakamlar, doğal ve bilinen kelimeler. Band 8–9 süsü yok.
- Konular gerçek sınav raporlarından seçilir (ielts-blog.com test-taker raporları, examword.com derlemesi). Orijinal chart görselleri ve resmî soru metinleri kopyalanmaz: sorular kısaltılıp yeniden yazılır, Task 1 verileri örnek amaçlı uydurmadır ve sayfada belirtilir.
- Task 1 metinleri 160–190 kelime, Task 2 yaklaşık 270 kelime.

## Teknik
- Veri: `src/data/walk1/*.js`, `src/data/walk2/*.js`; sayfalar yalnızca render eder.
- Çizim: mevcut `Charts.jsx` bileşenleri yeniden kullanılır (küçük genelleştirmeler geriye uyumlu).
- Kullanıcının kendi notları localStorage'a yazılır (bozuk veri uygulamayı çökertmez).
- Yeni test yazılmaz; mevcut 328 test yeşil kalır. Rakam tutarlılığı ve kelime sayısı geçici betiklerle kontrol edilir.
