---
title: 지오 NFT란 무엇인가요?
description: 언제 어디서 만들어졌는지, 누가 볼 수 있는지 기억하는 NFT. Beenzer가 모든 민팅에 장소를 어떻게 기록하는지 실제 예시와 함께 알아봐요.
date: 2026-10-20
kind: Guide
read: 4
---

NFT는 블록체인 위의 토큰으로, 어떤 미디어를 가리키고 그 주인이 누구인지 알려 줘요. 대부분의 NFT는 체인 밖 세상에 대해서는 아무 말도 하지 않아요. 지오 NFT는 달라요. 어디서, 언제 만들어졌는지를 기록하거든요.

이게 바로 Beenzer의 핵심 아이디어예요. 호숫가에서 찍은 사진은 그냥 사진이 아니에요. _그_ 장소, _그_ 순간의 사진이죠. 게시물을 민팅하면 Beenzer가 이 두 가지를 토큰의 메타데이터에 기록해요.

## Beenzer에 담기는 것

민팅할 때마다 미디어가 Arweave에 올라가고, 그 옆에 메타데이터 파일이 함께 올라가요. 담기는 속성은 다음과 같아요.

| 속성              | 담기는 내용                                         |
| ----------------- | --------------------------------------------------- |
| `CREATOR`         | 게시한 지갑                                         |
| `USERNAME`        | 크리에이터의 Beenzer 사용자 이름                    |
| `TYPE`            | 미디어 유형: 이미지, 영상 또는 소리                 |
| `SUPPLY`          | 존재할 수 있는 에디션의 최대 수                     |
| `FLOOR`           | 에디션 하나의 가격                                  |
| `DATE`, `TIME UTC`| 민팅된 시각                                         |
| `CITY`            | 게시한 도시                                         |
| `LATITUDE`, `LONGITUDE` | 지도 위의 지점                                |
| `VISIBILITY`      | 얼마나 멀리서 찾을 수 있는지, 또는 전 세계          |
| `MAX LAT` … `MIN LON` | 그 반경을 지도 위의 박스로 나타낸 값           |

## 실제 예시

여기 BEENZER #18이 있어요. 2023년 2월 16일 @vincent가 민팅했어요. 아래는 Arweave에 기록된 그대로의 속성이에요. 단, 좌표는 이 게시물 자체의 공개 반경인 약 1km 단위로 여기서 반올림했어요.

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

[Solscan에서](https://solscan.io/token/BXzXwJVhqQerunAWnjnXPyhtXG4SGrMQWtstp8rshKFZ) 토큰을 직접 확인할 수 있어요.

## 박스가 중요한 이유

공개 반경은 장식이 아니에요. 지도를 열면 Beenzer는 공개 박스 안에 지금 내가 있는 게시물과, 전 세계 공개로 설정된 게시물을 보여 줘요. 반경 1km인 게시물은 그 자리에 가야 찾을 수 있어요. 전 세계 공개 게시물은 누구나 볼 수 있고요.

그래서 지오 NFT는 두 가지를 동시에 해요. 장소의 기록이면서, 지나가는 사람들을 위해 그 장소에 무언가를 남기는 방법이기도 하죠.

## 민팅 비용

민팅하면 게시물이 내 지갑에 보관하는 토큰이 되고, 다른 사람이 모을 수 있는 에디션도 생겨요. 비용은 SOL로 내는 민팅 수수료이고, Phantom에서 무언가를 승인하기 전에 앱이 그 금액과 어디로 가는지를 보여 줘요.
