---
title: ¿Qué es un geo-NFT?
description: Un NFT que recuerda dónde y cuándo se creó, y quién puede verlo. Cómo Beenzer escribe el lugar en cada acuñación, con un ejemplo real.
date: 2026-10-20
kind: Guide
read: 4
---

Un NFT es un token en una blockchain que apunta a un contenido y dice quién es su dueño. La mayoría de los NFT no dicen nada del mundo que hay fuera de la cadena. Un geo-NFT sí: registra dónde se creó, y cuándo.

Esa es toda la idea detrás de Beenzer. Una foto tomada en la orilla de un lago no es solo una imagen; es una imagen de _ese_ lugar en _ese_ momento. Cuando acuñas una publicación, Beenzer escribe las dos cosas en los metadatos del token.

## Qué lleva un Beenzer

Cada acuñación sube el archivo a Arweave y, a su lado, un archivo de metadatos con estos atributos:

| Atributo          | Qué contiene                                        |
| ----------------- | --------------------------------------------------- |
| `CREATOR`         | La billetera que lo publicó                         |
| `USERNAME`        | El nombre de usuario del creador en Beenzer         |
| `TYPE`            | El tipo de contenido: una imagen, un video o un sonido |
| `SUPPLY`          | Cuántas ediciones pueden llegar a existir           |
| `FLOOR`           | El precio de una edición                            |
| `DATE`, `TIME UTC`| Cuándo se acuñó                                     |
| `CITY`            | La ciudad desde la que se publicó                   |
| `LATITUDE`, `LONGITUDE` | El punto en el mapa                           |
| `VISIBILITY`      | Desde qué distancia se puede encontrar, o si es mundial |
| `MAX LAT` … `MIN LON` | Ese radio, como un recuadro en el mapa          |

## Uno de verdad

Este es BEENZER #18, acuñado por @vincent el 16 de febrero de 2023. Estos son sus atributos tal como están en Arweave, con las coordenadas redondeadas aquí a cerca de un kilómetro, la visibilidad de la propia publicación:

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

Puedes comprobar el token tú mismo [en Solscan](https://solscan.io/token/BXzXwJVhqQerunAWnjnXPyhtXG4SGrMQWtstp8rshKFZ).

## Por qué importa el recuadro

El radio de visibilidad no es decoración. Cuando abres el mapa, Beenzer te muestra las publicaciones cuyo recuadro de visibilidad contiene el lugar donde estás, además de las que son para todo el mundo. Una publicación con un radio de 1 km es algo que encuentras estando allí. Una mundial la puede ver cualquiera.

Así que un geo-NFT es dos cosas a la vez: el registro de un lugar y una forma de dejar algo en un lugar para quienes pasen por allí.

## Lo que cuesta acuñar

Acuñar convierte una publicación en un token que guardas en tu billetera, con ediciones que otros pueden coleccionar. Cuesta una comisión de acuñación en SOL, y la app te la muestra, junto con adónde va, antes de que apruebes nada en Phantom.
