---
title: Apa itu geo-NFT?
description: NFT yang mengingat di mana dan kapan ia dibuat, serta siapa yang bisa melihatnya. Cara Beenzer menuliskan tempat ke setiap cetakan, dengan contoh nyata.
date: 2026-10-20
kind: Guide
read: 4
---

NFT adalah token di blockchain yang menunjuk ke sebuah media dan menyatakan siapa pemiliknya. Kebanyakan NFT tidak mengatakan apa pun tentang dunia di luar blockchain. Geo-NFT berbeda: ia mencatat di mana ia dibuat, dan kapan.

Itulah inti ide di balik Beenzer. Foto yang diambil di tepi danau bukan sekadar gambar; itu adalah gambar tempat _itu_ pada momen _itu_. Saat kamu mencetak sebuah postingan, Beenzer menuliskan keduanya ke metadata token.

## Isi sebuah Beenzer

Setiap cetakan mengunggah media ke Arweave, lalu file metadata di sebelahnya, dengan atribut-atribut berikut:

| Atribut           | Isinya                                              |
| ----------------- | --------------------------------------------------- |
| `CREATOR`         | Dompet yang mempostingnya                           |
| `USERNAME`        | Nama pengguna Beenzer milik kreator                 |
| `TYPE`            | Jenis media: gambar, video, atau suara              |
| `SUPPLY`          | Jumlah maksimal edisi yang bisa ada                 |
| `FLOOR`           | Harga satu edisi                                    |
| `DATE`, `TIME UTC`| Kapan ia dicetak                                    |
| `CITY`            | Kota tempat ia diposting                            |
| `LATITUDE`, `LONGITUDE` | Titik di peta                                 |
| `VISIBILITY`      | Seberapa jauh ia bisa ditemukan, atau seluruh dunia |
| `MAX LAT` … `MIN LON` | Radius itu, sebagai kotak di peta              |

## Contoh nyata

Ini BEENZER #18, dicetak oleh @vincent pada 16 Februari 2023. Inilah atributnya seperti yang tersimpan di Arweave, dengan koordinat yang dibulatkan di sini hingga sekitar satu kilometer, sesuai visibilitas postingan itu sendiri:

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

Kamu bisa memeriksa tokennya sendiri [di Solscan](https://solscan.io/token/BXzXwJVhqQerunAWnjnXPyhtXG4SGrMQWtstp8rshKFZ).

## Mengapa kotaknya penting

Radius visibilitas bukan hiasan. Saat kamu membuka peta, Beenzer menampilkan postingan yang kotak visibilitasnya mencakup posisimu, ditambah postingan yang diatur untuk seluruh dunia. Postingan dengan radius 1 km adalah sesuatu yang kamu temukan dengan berada di sana. Postingan untuk seluruh dunia bisa dilihat siapa saja.

Jadi geo-NFT adalah dua hal sekaligus: catatan tentang sebuah tempat, dan cara untuk meninggalkan sesuatu di sebuah tempat bagi orang-orang yang lewat.

## Berapa biaya mencetak

Mencetak mengubah postingan menjadi token yang kamu simpan di dompetmu, dengan edisi yang bisa dikoleksi orang lain. Biayanya berupa biaya cetak dalam SOL, dan aplikasi menampilkannya, beserta tujuannya, sebelum kamu menyetujui apa pun di Phantom.
