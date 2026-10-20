---
title: 什么是地理 NFT？
description: 一种记得自己在何时何地诞生、谁能看到它的 NFT。Beenzer 如何把地点写进每一次铸造，附一个真实的例子。
date: 2026-10-20
kind: Guide
read: 4
---

NFT 是区块链上的一种代币，它指向一份媒体内容，并说明它归谁所有。大多数 NFT 对链外的世界只字不提。地理 NFT 则不同：它记录了自己在哪里、在什么时候诞生。

这正是 Beenzer 背后的全部想法。在湖岸边拍下的一张照片，不只是一张图片；它是*那个*地方、*那个*时刻的图片。当你铸造一条帖子时，Beenzer 会把这两者都写进代币的元数据。

## 一枚 Beenzer 里有什么

每次铸造都会先把媒体文件上传到 Arweave，再在旁边放一个元数据文件，包含以下属性：

| 属性                      | 内容                               |
| ------------------------- | ---------------------------------- |
| `CREATOR`                 | 发布它的钱包                       |
| `USERNAME`                | 创作者的 Beenzer 用户名            |
| `TYPE`                    | 媒体类型：图片、视频或声音         |
| `SUPPLY`                  | 总共最多能有多少版                 |
| `FLOOR`                   | 每一版的价格                       |
| `DATE`、`TIME UTC`        | 铸造的时间                         |
| `CITY`                    | 发布时所在的城市                   |
| `LATITUDE`、`LONGITUDE`   | 地图上的位置                       |
| `VISIBILITY`              | 在多远的范围内能被找到，或全球可见 |
| `MAX LAT` … `MIN LON`     | 上述半径，以地图上的方框表示       |

## 一个真实的例子

这是 BEENZER #18，由 @vincent 于 2023 年 2 月 16 日铸造。以下是它保存在 Arweave 上的属性，其中坐标在这里四舍五入到大约一公里，也就是这条帖子本身的可见范围：

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

你可以自己[在 Solscan 上](https://solscan.io/token/BXzXwJVhqQerunAWnjnXPyhtXG4SGrMQWtstp8rshKFZ)查看这枚代币。

## 为什么方框很重要

可见半径不是装饰。当你打开地图时，Beenzer 会显示可见方框覆盖你所在位置的帖子，以及设为全球可见的帖子。半径 1 公里的帖子，要亲自到那里才能找到；全球可见的帖子，任何人都能看到。

所以，地理 NFT 同时是两样东西：一个地点的记录，也是一种在某个地方为路过的人留下些什么的方式。

## 铸造要花多少钱

铸造会把一条帖子变成你钱包里持有的代币，并附带可供他人收藏的版本。它需要支付一笔以 SOL 计的铸造费，在你于 Phantom 中确认任何操作之前，App 会先显示这笔费用以及它的去向。
