---
title: "Che cos'è un geo-NFT?"
description: Un NFT che ricorda dove e quando è stato creato, e chi può vederlo. Come Beenzer scrive il luogo in ogni conio, con un esempio reale.
date: 2026-10-20
kind: Guide
read: 4
---

Un NFT è un token su una blockchain che punta a un contenuto multimediale e dice chi lo possiede. La maggior parte degli NFT non dice nulla del mondo fuori dalla catena. Un geo-NFT sì: registra dove è stato creato, e quando.

È tutta qui l'idea di Beenzer. Una foto scattata sulla riva di un lago non è solo un'immagine; è un'immagine di _quel_ luogo in _quel_ momento. Quando conii un post, Beenzer scrive entrambi nei metadati del token.

## Cosa c'è dentro un Beenzer

Ogni conio carica il contenuto su Arweave, poi un file di metadati accanto, con questi attributi:

| Attributo               | Cosa contiene                                          |
| ----------------------- | ------------------------------------------------------ |
| `CREATOR`               | Il wallet che l'ha pubblicato                          |
| `USERNAME`              | Il nome utente Beenzer del creatore                    |
| `TYPE`                  | Il tipo di contenuto: un'immagine, un video o un audio |
| `SUPPLY`                | Quante edizioni potranno esistere in tutto             |
| `FLOOR`                 | Il prezzo di un'edizione                               |
| `DATE`, `TIME UTC`      | Quando è stato coniato                                 |
| `CITY`                  | La città da cui è stato pubblicato                     |
| `LATITUDE`, `LONGITUDE` | Il punto sulla mappa                                   |
| `VISIBILITY`            | Da quanto lontano si può trovare, o in tutto il mondo  |
| `MAX LAT` … `MIN LON`   | Quel raggio, come riquadro sulla mappa                 |

## Un esempio reale

Ecco BEENZER #18, coniato da @vincent il 16 febbraio 2023. Questi sono i suoi attributi così come si trovano su Arweave, con le coordinate arrotondate qui a circa un chilometro, la visibilità del post stesso:

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

Puoi verificare il token di persona [su Solscan](https://solscan.io/token/BXzXwJVhqQerunAWnjnXPyhtXG4SGrMQWtstp8rshKFZ).

## Perché il riquadro conta

Il raggio di visibilità non è decorativo. Quando apri la mappa, Beenzer ti mostra i post il cui riquadro di visibilità contiene il punto in cui ti trovi, più quelli impostati su tutto il mondo. Un post con un raggio di 1 km lo trovi stando lì. Uno visibile in tutto il mondo può vederlo chiunque.

Quindi un geo-NFT è due cose insieme: la traccia di un luogo, e un modo per lasciare qualcosa in un luogo per chi ci passa.

## Quanto costa coniare

Coniare trasforma un post in un token che tieni nel tuo wallet, con edizioni che altri possono collezionare. Costa una commissione di conio in SOL, e l'app te la mostra, insieme a dove va, prima che tu approvi qualsiasi cosa in Phantom.
