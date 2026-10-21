---
title: Beenzer se reconstruit en Flutter
description: L'appli passe chez Nexow, Inc. et reçoit un nouveau client pour iOS et Android, sur le même serveur. Voici ce qui change et ce qui reste.
date: 2026-10-20
kind: News
read: 3
---

Beenzer est né en novembre 2022, sous la forme d'une dApp mobile sur Solana écrite en React Native. En octobre 2026, il est devenu un produit de [Nexow, Inc.](https://nexow.studio), a reçu un dépôt de code tout neuf, et l'appli est repassée sur l'établi. Elle est maintenant réécrite en Flutter, pour iOS et Android.

## Ce qui reste

L'idée : une photo ou une vidéo appartient à l'endroit où elle a été prise. Tu la publies là où tu es, tes amis la trouvent sur la carte, et n'importe quelle publication peut devenir un NFT Solana qui emporte avec lui son lieu et son moment.

Le serveur reste aussi. L'appli Flutter est un nouveau client pour le même backend, donc les règles que tu connais déjà tiennent toujours : connexion avec Phantom, le même rayon de visibilité, le même mint.

## Ce qui change

Presque tout ce que tu touches.

- **Un dock à la place de la barre d'onglets.** Une pilule de verre flottante avec Carte, Social, Chat et Profil, et Créer au milieu. Appuie sur Créer pour ouvrir l'appareil photo ; maintiens-le pour choisir une photo, une vidéo, quelque chose de ta galerie, ou un son.
- **Une boîte de réception pour les mints.** Un mint se fait en quelques étapes, et elles s'affichent désormais là où tu peux les suivre : ta place dans la file d'attente, chaque étape, et le résultat.
- **Fini les écrans blancs.** Chaque écran est pensé pour les entre-deux : le chargement, l'état vide, une erreur avec la possibilité de réessayer, le hors-ligne, et un serveur qui ne répond pas.
- **Tes brouillons survivent.** Un mint qui attend ta signature est enregistré avant l'ouverture de Phantom, pour qu'il soit toujours là si ton téléphone ferme l'appli en arrière-plan.
- **Clair et sombre**, selon ton système, avec un réglage manuel dans ton profil. En anglais et en français dès le premier jour.
- **Accessible par défaut.** Des libellés sur chaque icône, des zones tactiles d'au moins 44 points, des mises en page qui tiennent avec de grands textes, et des animations qui respectent l'option « Réduire les animations ».

## Se connecter

Ton portefeuille, c'est ton compte. Beenzer demande à Phantom de se connecter, puis te demande de signer un message à usage unique qui prouve que le portefeuille est bien à toi. Il n'y a ni e-mail ni mot de passe. Si Phantom n'est pas installé, l'appli te le dit et t'indique où le trouver.

## Quand

Il n'y a pas encore de date, et nous préférons sortir l'appli au point plutôt qu'à date fixe. Suis [@beenzer_app](https://x.com/beenzer_app) sur X ou sur [Instagram](https://www.instagram.com/beenzer_app/) pour l'apprendre avant tout le monde.
