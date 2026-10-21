---
title: 什麼是地理 NFT？
description: 一個記得自己在何時何地誕生、誰能看到它的 NFT。Beenzer 如何把地點寫進每一次鑄造，附上真實範例。
date: 2026-10-20
kind: Guide
read: 4
---

NFT 是區塊鏈上的一種代幣，它指向一份媒體內容，並說明擁有者是誰。大多數 NFT 對鏈外的世界隻字未提。地理 NFT 則不然：它記錄了自己在哪裡、在什麼時候誕生。

這就是 Beenzer 背後的整個構想。在湖岸邊拍下的一張照片，不只是一張圖片；它是*那個*地方、*那個*時刻的圖片。當你鑄造一則貼文時，Beenzer 會把這兩者都寫進代幣的中繼資料。

## 一個 Beenzer 裡有什麼

每次鑄造都會先把媒體檔案上傳到 Arweave，再在旁邊放一個中繼資料檔案，包含以下屬性：

| 屬性                      | 內容                               |
| ------------------------- | ---------------------------------- |
| `CREATOR`                 | 發布它的錢包                       |
| `USERNAME`                | 創作者的 Beenzer 使用者名稱        |
| `TYPE`                    | 媒體類型：圖片、影片或聲音         |
| `SUPPLY`                  | 總共最多能有幾版                   |
| `FLOOR`                   | 每一版的價格                       |
| `DATE`、`TIME UTC`        | 鑄造的時間                         |
| `CITY`                    | 發布時所在的城市                   |
| `LATITUDE`、`LONGITUDE`   | 地圖上的位置                       |
| `VISIBILITY`              | 在多遠的範圍內能被找到，或全球可見 |
| `MAX LAT` … `MIN LON`     | 上述半徑，以地圖上的方框表示       |

## 一個真實的例子

這是 BEENZER #18，由 @vincent 於 2023 年 2 月 16 日鑄造。以下是它存放在 Arweave 上的屬性，座標在這裡四捨五入到大約一公里，也就是這則貼文本身的可見範圍：

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

你可以親自[到 Solscan 上](https://solscan.io/token/BXzXwJVhqQerunAWnjnXPyhtXG4SGrMQWtstp8rshKFZ)查看這個代幣。

## 為什麼方框很重要

可見半徑不是裝飾。當你打開地圖，Beenzer 會顯示可見方框涵蓋你所在位置的貼文，以及設為全球可見的貼文。半徑 1 公里的貼文，要親自到那裡才找得到；全球可見的貼文，任何人都看得到。

所以，地理 NFT 同時是兩件事：一個地點的紀錄，也是一種在某個地方留下些什麼、給路過的人的方式。

## 鑄造要花多少錢

鑄造會把一則貼文變成你錢包裡持有的代幣，並帶有其他人可以收藏的版本。它需要支付一筆以 SOL 計價的鑄造費，在你於 Phantom 中核准任何操作之前，App 會先顯示這筆費用以及它的去向。
