---
title: Geo-NFT nedir?
description: Nerede ve ne zaman yapıldığını, kimin görebileceğini hatırlayan bir NFT. Beenzer'ın her basıma yeri nasıl yazdığı, gerçek bir örnekle.
date: 2026-10-20
kind: Guide
read: 4
---

NFT, bir blokzincirde bir medya dosyasına işaret eden ve sahibinin kim olduğunu söyleyen bir token'dır. Çoğu NFT, zincirin dışındaki dünya hakkında hiçbir şey söylemez. Geo-NFT ise söyler: nerede ve ne zaman yapıldığını kaydeder.

Beenzer'ın ardındaki fikir tam olarak bu. Bir göl kıyısında çekilmiş fotoğraf yalnızca bir resim değildir; _o_ yerin _o_ andaki resmidir. Bir gönderiyi bastığınızda Beenzer ikisini de token'ın meta verisine yazar.

## Bir Beenzer'ın içinde neler var

Her basım, medyayı Arweave'e yükler, ardından yanına şu özellikleri taşıyan bir meta veri dosyası koyar:

| Özellik           | İçerdiği bilgi                                      |
| ----------------- | --------------------------------------------------- |
| `CREATOR`         | Gönderiyi paylaşan cüzdan                           |
| `USERNAME`        | Yaratıcının Beenzer kullanıcı adı                   |
| `TYPE`            | Medya türü: görsel, video ya da ses                 |
| `SUPPLY`          | Toplamda en fazla kaç baskı olabileceği             |
| `FLOOR`           | Bir baskının fiyatı                                 |
| `DATE`, `TIME UTC`| Ne zaman basıldığı                                  |
| `CITY`            | Paylaşıldığı şehir                                  |
| `LATITUDE`, `LONGITUDE` | Haritadaki nokta                              |
| `VISIBILITY`      | Ne kadar uzaktan bulunabileceği ya da dünya geneline açık olduğu |
| `MAX LAT` … `MIN LON` | Haritada bir kutu olarak o yarıçap             |

## Gerçek bir örnek

İşte @vincent tarafından 16 Şubat 2023'te basılan BEENZER #18. Aşağıdakiler, Arweave'de durduğu hâliyle özellikleri; koordinatlar burada, gönderinin kendi görünürlüğü olan yaklaşık bir kilometreye yuvarlandı:

```json
{
  "name": "BEENZER #18",
  "description": "🤘",
  "symbol": "BEENZER",
  "attributes": [
    { "trait_type": "USERNAME", "value": "vincent" },
    { "trait_type": "TYPE", "value": "image/png" },
    { "trait_type": "SUPPLY", "value": "1" },
    { "trait_type": "FLOOR", "value": "0.1 SOL" },
    { "trait_type": "DATE", "value": "2023-02-16" },
    { "trait_type": "TIME UTC", "value": "13:41:43" },
    { "trait_type": "CITY", "value": "Savigny" },
    { "trait_type": "LATITUDE", "value": "46.54…" },
    { "trait_type": "LONGITUDE", "value": "6.72…" },
    { "trait_type": "VISIBILITY", "value": "1 km" }
  ]
}
```

Token'ı [Solscan üzerinden](https://solscan.io/token/BXzXwJVhqQerunAWnjnXPyhtXG4SGrMQWtstp8rshKFZ) kendiniz kontrol edebilirsiniz.

## Kutu neden önemli

Görünürlük yarıçapı süs değildir. Haritayı açtığınızda Beenzer size, görünürlük kutusu bulunduğunuz yeri içine alan gönderileri ve dünya geneline açık olanları gösterir. 1 km yarıçaplı bir gönderi, orada olduğunuzda karşınıza çıkar. Dünya geneline açık olanı ise herkes görebilir.

Yani bir geo-NFT aynı anda iki şeydir: bir yerin kaydı ve oradan geçenler için o yere bir şey bırakmanın yolu.

## Basım ne kadar tutar

Basım, bir gönderiyi cüzdanınızda tuttuğunuz ve başkalarının baskılarını toplayabileceği bir token'a dönüştürür. SOL cinsinden bir basım ücreti vardır; uygulama, Phantom'da herhangi bir şeyi onaylamadan önce bu ücreti ve nereye gittiğini gösterir.
