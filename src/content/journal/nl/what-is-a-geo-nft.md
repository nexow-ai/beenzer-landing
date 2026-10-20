---
title: Wat is een geo-NFT?
description: Een NFT die onthoudt waar en wanneer hij is gemaakt, en wie hem kan zien. Hoe Beenzer de plek in elke mint schrijft, met een echt voorbeeld.
date: 2026-10-20
kind: Guide
read: 4
---

Een NFT is een token op een blockchain dat naar een stuk media verwijst en zegt wie de eigenaar is. De meeste NFT’s zeggen niets over de wereld buiten de chain. Een geo-NFT wel: die legt vast waar hij is gemaakt, en wanneer.

Dat is het hele idee achter Beenzer. Een foto aan de oever van een meer is niet zomaar een plaatje; het is een plaatje van _die_ plek op _dat_ moment. Als je een post mint, schrijft Beenzer allebei in de metadata van het token.

## Wat er in een Beenzer zit

Elke mint uploadt de media naar Arweave, en daarna een metadatabestand ernaast, met deze attributen:

| Attribuut         | Wat erin staat                                      |
| ----------------- | --------------------------------------------------- |
| `CREATOR`         | De wallet die het heeft gepost                      |
| `USERNAME`        | De Beenzer-gebruikersnaam van de maker              |
| `TYPE`            | Het mediatype: een afbeelding, een video of een geluid |
| `SUPPLY`          | Hoeveel edities er ooit kunnen bestaan              |
| `FLOOR`           | De prijs van een editie                             |
| `DATE`, `TIME UTC`| Wanneer het is gemint                               |
| `CITY`            | De stad van waaruit het is gepost                   |
| `LATITUDE`, `LONGITUDE` | Het punt op de kaart                          |
| `VISIBILITY`      | Hoe ver weg het te vinden is, of wereldwijd         |
| `MAX LAT` … `MIN LON` | Die straal, als rechthoek op de kaart          |

## Een echt voorbeeld

Dit is BEENZER #18, gemint door @vincent op 16 februari 2023. Dit zijn de attributen zoals ze op Arweave staan, met de coördinaten hier afgerond op ongeveer een kilometer, de zichtbaarheid van de post zelf:

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

Je kunt het token zelf controleren [op Solscan](https://solscan.io/token/BXzXwJVhqQerunAWnjnXPyhtXG4SGrMQWtstp8rshKFZ).

## Waarom de rechthoek ertoe doet

De zichtbaarheidsstraal is geen versiering. Als je de kaart opent, laat Beenzer je de posts zien waarvan de zichtbaarheidsrechthoek de plek bevat waar je bent, plus de posts die op wereldwijd staan. Een post met een straal van 1 km vind je door er te zijn. Een wereldwijde kan iedereen zien.

Een geo-NFT is dus twee dingen tegelijk: een vastlegging van een plek, en een manier om iets achter te laten op een plek voor de mensen die langskomen.

## Wat minten kost

Minten maakt van een post een token dat je in je wallet bewaart, met edities die anderen kunnen verzamelen. Het kost een mintvergoeding in SOL, en de app laat die zien, en waar die naartoe gaat, voordat je iets goedkeurt in Phantom.
