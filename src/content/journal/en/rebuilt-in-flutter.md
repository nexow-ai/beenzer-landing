---
title: Beenzer is being rebuilt in Flutter
description: The app moves to Nexow, Inc. and gets a new client for iOS and Android, on the same server. Here is what changes and what stays.
date: 2026-10-20
kind: News
read: 3
---

Beenzer started in November 2022 as a mobile dApp on Solana, written in React Native. In October 2026 it became a product of [Nexow, Inc.](https://nexow.studio), got a fresh repository, and the app went back on the workbench. It is now being rewritten in Flutter, for iOS and Android.

## What stays

The idea: a photo or a video belongs to the place it was taken. You post it where you are, your friends find it on the map, and any post can become a Solana NFT that carries its place and its moment with it.

The server stays too. The Flutter app is a new client for the same backend, so the rules you already know hold: sign in with Phantom, the same visibility radius, the same mint.

## What changes

Almost everything you touch.

- **A dock instead of a tab bar.** A floating glass pill with Map, Social, Chat and Profile, and Create in the middle. Press Create to open the camera; hold it to choose a photo, a video, something from your gallery, or a sound.
- **An inbox for mints.** Minting takes a few steps, and they now show up where you can follow them: your place in the queue, each step, and the result.
- **No blank screens.** Every screen is designed for the moments in between: loading, empty, an error you can retry, offline, and a server that does not answer.
- **Your drafts survive.** A mint waiting for your signature is saved before Phantom opens, so it is still there if your phone closes the app in the background.
- **Light and dark**, following your system, with an override in your profile. English and French from the first day.
- **Accessible by default.** Labels on every icon, touch targets of at least 44 points, layouts that hold with large text, and animations that respect reduced motion.

## Signing in

Your wallet is your account. Beenzer asks Phantom to connect, then asks you to sign a one-time message that proves the wallet is yours. There is no email and no password. If Phantom is not installed, the app says so and points you to it.

## When

There is no date yet, and we would rather ship it right than ship it on a date. Follow [@beenzer_app](https://x.com/beenzer_app) on X or [Instagram](https://www.instagram.com/beenzer_app/) to hear first.
