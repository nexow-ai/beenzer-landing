---
title: O que é um geo-NFT?
description: Um NFT que lembra onde e quando foi criado, e quem pode vê-lo. Como o Beenzer grava o lugar em cada cunhagem, com um exemplo real.
date: 2026-10-20
kind: Guide
read: 4
---

Um NFT é um token em uma blockchain que aponta para uma mídia e diz quem é o dono. A maioria dos NFTs não diz nada sobre o mundo fora da blockchain. Um geo-NFT diz: ele registra onde foi criado, e quando.

Essa é toda a ideia por trás do Beenzer. Uma foto tirada na beira de um lago não é só uma imagem; é uma imagem _daquele_ lugar, _naquele_ momento. Quando você cunha um post, o Beenzer grava as duas coisas nos metadados do token.

## O que vai dentro de um Beenzer

Cada cunhagem envia a mídia para o Arweave e, ao lado dela, um arquivo de metadados com estes atributos:

| Atributo          | O que guarda                                        |
| ----------------- | --------------------------------------------------- |
| `CREATOR`         | A carteira que publicou                             |
| `USERNAME`        | O nome de usuário do criador no Beenzer             |
| `TYPE`            | O tipo de mídia: uma imagem, um vídeo ou um som     |
| `SUPPLY`          | Quantas edições podem existir, no máximo            |
| `FLOOR`           | O preço de uma edição                               |
| `DATE`, `TIME UTC`| Quando foi cunhado                                  |
| `CITY`            | A cidade de onde foi publicado                      |
| `LATITUDE`, `LONGITUDE` | O ponto no mapa                               |
| `VISIBILITY`      | De que distância pode ser encontrado, ou se é mundial |
| `MAX LAT` … `MIN LON` | Esse raio, como um retângulo no mapa            |

## Um de verdade

Aqui está o BEENZER #18, cunhado por @vincent em 16 de fevereiro de 2023. Estes são os atributos dele como estão no Arweave, com as coordenadas arredondadas aqui para cerca de um quilômetro, a visibilidade do próprio post:

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

Você mesmo pode conferir o token [no Solscan](https://solscan.io/token/BXzXwJVhqQerunAWnjnXPyhtXG4SGrMQWtstp8rshKFZ).

## Por que o retângulo importa

O raio de visibilidade não é enfeite. Quando você abre o mapa, o Beenzer mostra os posts cujo retângulo de visibilidade contém o lugar onde você está, além dos que valem para o mundo todo. Um post com raio de 1 km é algo que você encontra estando lá. Um mundial, qualquer pessoa pode ver.

Então um geo-NFT é duas coisas ao mesmo tempo: o registro de um lugar e uma forma de deixar algo num lugar para quem passar por ali.

## Quanto custa cunhar

Cunhar transforma um post em um token que fica na sua carteira, com edições que outras pessoas podem colecionar. Custa uma taxa de cunhagem em SOL, e o app mostra a taxa, e para onde ela vai, antes de você aprovar qualquer coisa no Phantom.
