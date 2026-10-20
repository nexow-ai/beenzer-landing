---
title: ジオNFTとは？
description: どこで、いつ作られ、誰が見られるのかを覚えているNFT。Beenzerがすべてのミントに場所をどう書き込むのかを、実例とともに紹介します。
date: 2026-10-20
kind: Guide
read: 4
---

NFTとは、ブロックチェーン上のトークンです。あるメディアを指し示し、誰がそれを所有しているかを示します。ほとんどのNFTは、チェーンの外の世界について何も語りません。ジオNFTは語ります。それがどこで、いつ作られたのかを記録するのです。

それこそが、Beenzerの核にあるアイデアです。湖のほとりで撮った写真は、ただの写真ではありません。*その*場所の、*その*瞬間の写真です。投稿をミントすると、Beenzerはその両方をトークンのメタデータに書き込みます。

## Beenzerに入っているもの

ミントするたびに、メディアがArweaveにアップロードされ、その隣にメタデータファイルが置かれます。属性は次のとおりです。

| 属性              | 内容                                                |
| ----------------- | --------------------------------------------------- |
| `CREATOR`         | 投稿したウォレット                                  |
| `USERNAME`        | クリエイターのBeenzerユーザー名                     |
| `TYPE`            | メディアの種類：画像、動画、音声のいずれか          |
| `SUPPLY`          | 存在しうるエディションの最大数                      |
| `FLOOR`           | 1エディションの価格                                 |
| `DATE`, `TIME UTC`| ミントされた日時                                    |
| `CITY`            | 投稿した都市                                        |
| `LATITUDE`, `LONGITUDE` | 地図上の地点                                  |
| `VISIBILITY`      | どこまで離れて見つけられるか、または全世界          |
| `MAX LAT` … `MIN LON` | その半径を、地図上のボックス（四角形）で表したもの |

## 実際の例

こちらはBEENZER #18。2023年2月16日に@vincentがミントしたものです。以下はArweave上にある属性そのままですが、座標だけはここでおよそ1kmに丸めています。これは、この投稿自身の表示範囲と同じです。

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

このトークンは、[Solscanで](https://solscan.io/token/BXzXwJVhqQerunAWnjnXPyhtXG4SGrMQWtstp8rshKFZ)ご自身で確認できます。

## ボックスが大事な理由

表示半径は飾りではありません。地図を開くと、Beenzerは、あなたのいる場所がボックスの内側に入る投稿と、全世界に設定された投稿を表示します。半径1kmの投稿は、その場所に行って見つけるもの。全世界の投稿なら、誰でも見られます。

つまりジオNFTは、2つの役割を同時に持っています。場所の記録であり、通りかかる人たちのために、その場所に何かを残す方法でもあるのです。

## ミントにかかる費用

ミントすると、投稿はあなたのウォレットに入るトークンになり、ほかの人が集められるエディションも生まれます。費用はSOLでのミント手数料です。Phantomで何かを承認する前に、アプリがその金額と送り先を表示します。
