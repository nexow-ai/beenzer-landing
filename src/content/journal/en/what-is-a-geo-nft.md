---
title: What is a geo-NFT?
description: An NFT that remembers where and when it was made, and who can see it. How Beenzer writes the place into every mint, with a real example.
date: 2026-10-20
kind: Guide
read: 4
---

An NFT is a token on a blockchain that points to a piece of media and says who owns it. Most NFTs say nothing about the world outside the chain. A geo-NFT does: it records where it was made, and when.

That is the whole idea behind Beenzer. A photo taken on the shore of a lake is not just a picture; it is a picture of _that_ place at _that_ moment. When you mint a post, Beenzer writes both into the token's metadata.

## What goes into a Beenzer

Every mint uploads the media to Arweave, then a metadata file next to it, with these attributes:

| Attribute         | What it holds                                       |
| ----------------- | --------------------------------------------------- |
| `CREATOR`         | The wallet that posted it                           |
| `USERNAME`        | The creator's Beenzer username                      |
| `TYPE`            | The media type: an image, a video or a sound        |
| `SUPPLY`          | How many editions can ever exist                    |
| `FLOOR`           | The price of an edition                             |
| `DATE`, `TIME UTC`| When it was minted                                  |
| `CITY`            | The city it was posted from                         |
| `LATITUDE`, `LONGITUDE` | The point on the map                          |
| `VISIBILITY`      | How far away it can be found, or worldwide          |
| `MAX LAT` … `MIN LON` | That radius, as a box on the map               |

## A real one

Here is BEENZER #18, minted by @vincent on 16 February 2023. These are its attributes as they sit on Arweave, with the coordinates rounded here to about a kilometre, the post's own visibility:

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

You can check the token yourself [on Solscan](https://solscan.io/token/BXzXwJVhqQerunAWnjnXPyhtXG4SGrMQWtstp8rshKFZ).

## Why the box matters

The visibility radius is not decoration. When you open the map, Beenzer shows you the posts whose visibility box contains where you are, plus the ones set to worldwide. A post with a 1 km radius is something you find by being there. A worldwide one, anyone can see.

So a geo-NFT is two things at once: a record of a place, and a way to leave something in a place for the people who pass by.

## What minting costs

Minting turns a post into a token you hold in your wallet, with editions others can collect. It costs a mint fee in SOL, and the app shows it, and where it goes, before you approve anything in Phantom.
