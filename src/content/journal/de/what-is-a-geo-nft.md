---
title: Was ist ein Geo-NFT?
description: Ein NFT, das sich merkt, wo und wann es entstanden ist und wer es sehen kann. Wie Beenzer den Ort in jeden Mint schreibt, mit einem echten Beispiel.
date: 2026-10-20
kind: Guide
read: 4
---

Ein NFT ist ein Token auf einer Blockchain, der auf ein Medium verweist und festhält, wem er gehört. Die meisten NFTs sagen nichts über die Welt außerhalb der Chain. Ein Geo-NFT schon: Es hält fest, wo es entstanden ist, und wann.

Genau das ist die Idee hinter Beenzer. Ein Foto am Ufer eines Sees ist nicht einfach ein Bild; es ist ein Bild von _diesem_ Ort in _diesem_ Moment. Wenn du einen Beitrag mintest, schreibt Beenzer beides in die Metadaten des Tokens.

## Was in einem Beenzer steckt

Jeder Mint lädt das Medium auf Arweave hoch und daneben eine Metadaten-Datei mit diesen Attributen:

| Attribut          | Was es enthält                                      |
| ----------------- | --------------------------------------------------- |
| `CREATOR`         | Die Wallet, die es gepostet hat                     |
| `USERNAME`        | Der Beenzer-Benutzername des Creators               |
| `TYPE`            | Der Medientyp: ein Bild, ein Video oder ein Sound   |
| `SUPPLY`          | Wie viele Editionen es jemals geben kann            |
| `FLOOR`           | Der Preis einer Edition                             |
| `DATE`, `TIME UTC`| Wann es gemintet wurde                              |
| `CITY`            | Die Stadt, aus der es gepostet wurde                |
| `LATITUDE`, `LONGITUDE` | Der Punkt auf der Karte                       |
| `VISIBILITY`      | Wie weit entfernt es zu finden ist, oder weltweit   |
| `MAX LAT` … `MIN LON` | Dieser Radius als Rechteck auf der Karte       |

## Ein echtes Beispiel

Das ist BEENZER #18, gemintet von @vincent am 16. Februar 2023. Das sind seine Attribute, so wie sie auf Arweave liegen; die Koordinaten sind hier auf etwa einen Kilometer gerundet, entsprechend der Sichtbarkeit des Beitrags selbst:

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

Du kannst den Token selbst [auf Solscan](https://solscan.io/token/BXzXwJVhqQerunAWnjnXPyhtXG4SGrMQWtstp8rshKFZ) prüfen.

## Warum das Rechteck zählt

Der Sichtbarkeitsradius ist keine Dekoration. Wenn du die Karte öffnest, zeigt dir Beenzer die Beiträge, deren Sichtbarkeitsrechteck deinen Standort enthält, und dazu die, die auf weltweit gestellt sind. Einen Beitrag mit 1 km Radius findest du, indem du dort bist. Einen weltweiten kann jeder sehen.

Ein Geo-NFT ist also zwei Dinge zugleich: die Aufzeichnung eines Ortes und eine Möglichkeit, an einem Ort etwas für die Menschen zu hinterlassen, die vorbeikommen.

## Was das Minten kostet

Minten macht aus einem Beitrag einen Token, den du in deiner Wallet hältst, mit Editionen, die andere sammeln können. Es kostet eine Mint-Gebühr in SOL, und die App zeigt sie dir, und wohin sie geht, bevor du in Phantom irgendetwas freigibst.
