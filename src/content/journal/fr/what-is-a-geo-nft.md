---
title: "Qu'est-ce qu'un géo-NFT ?"
description: Un NFT qui garde en mémoire où et quand il a été créé, et qui peut le voir. Comment Beenzer inscrit le lieu dans chaque mint, avec un exemple réel.
date: 2026-10-20
kind: Guide
read: 4
---

Un NFT est un jeton sur une blockchain qui pointe vers un média et indique à qui il appartient. La plupart des NFT ne disent rien du monde en dehors de la chaîne. Un géo-NFT, si : il enregistre où il a été créé, et quand.

C'est toute l'idée de Beenzer. Une photo prise au bord d'un lac n'est pas qu'une image ; c'est l'image de _ce_ lieu à _cet_ instant. Quand tu mintes une publication, Beenzer inscrit les deux dans les métadonnées du jeton.

## Ce que contient un Beenzer

Chaque mint envoie le média sur Arweave, puis un fichier de métadonnées à côté, avec ces attributs :

| Attribut                | Ce qu'il contient                                         |
| ----------------------- | --------------------------------------------------------- |
| `CREATOR`               | Le portefeuille qui l'a publié                            |
| `USERNAME`              | Le nom d'utilisateur Beenzer du créateur                  |
| `TYPE`                  | Le type de média : une image, une vidéo ou un son         |
| `SUPPLY`                | Le nombre maximal d'éditions                              |
| `FLOOR`                 | Le prix d'une édition                                     |
| `DATE`, `TIME UTC`      | Quand il a été minté                                      |
| `CITY`                  | La ville d'où il a été publié                             |
| `LATITUDE`, `LONGITUDE` | Le point sur la carte                                     |
| `VISIBILITY`            | Jusqu'à quelle distance on peut le trouver, ou partout dans le monde |
| `MAX LAT` … `MIN LON`   | Ce rayon, sous forme de zone sur la carte                 |

## Un vrai exemple

Voici BEENZER #18, minté par @vincent le 16 février 2023. Ci-dessous, ses attributs tels qu'ils figurent sur Arweave, avec les coordonnées arrondies ici à environ un kilomètre, soit la visibilité de la publication elle-même :

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

Tu peux vérifier le jeton toi-même [sur Solscan](https://solscan.io/token/BXzXwJVhqQerunAWnjnXPyhtXG4SGrMQWtstp8rshKFZ).

## Pourquoi la zone compte

Le rayon de visibilité n'est pas là pour décorer. Quand tu ouvres la carte, Beenzer te montre les publications dont la zone de visibilité contient l'endroit où tu te trouves, ainsi que celles visibles dans le monde entier. Une publication avec un rayon de 1 km, tu la trouves en étant sur place. Une publication mondiale, tout le monde peut la voir.

Un géo-NFT, c'est donc deux choses à la fois : la trace d'un lieu, et une façon de laisser quelque chose dans un lieu pour les gens qui passent par là.

## Ce que coûte un mint

Minter transforme une publication en un jeton que tu détiens dans ton portefeuille, avec des éditions que d'autres peuvent collectionner. Cela coûte des frais de mint en SOL, et l'appli te les montre, ainsi que leur destination, avant que tu valides quoi que ce soit dans Phantom.
