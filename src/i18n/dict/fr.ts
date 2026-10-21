import type { Dict } from './en';

/** French, translated from en.ts. */
const fr: Dict = {
  meta: {
    description:
      "Beenzer épingle tes photos et tes vidéos à l'endroit exact où tu les as prises. Suis tes amis, retrouve-les sur la carte et garde n'importe quel moment en NFT Solana, avec son lieu et son heure inscrits dedans.",
    skip: 'Aller au contenu',
    home: 'Beenzer, accueil',
  },

  nav: {
    home: 'Accueil',
    how: 'Comment ça marche',
    onchain: 'On-chain',
    story: 'Histoire',
    journal: 'Journal',
    faq: 'FAQ',
    follow: 'Suivre le chantier',
    menu: 'Menu',
    main: 'Principal',
    mobile: 'Mobile',
    product: 'Un produit Nexow, Inc.',
    language: 'Langue',
  },

  /** Shown to a visitor whose browser prefers French, on a page in another language. */
  suggest: {
    text: 'Cette page existe aussi en français.',
    go: 'Lire en français',
    close: 'Non merci',
  },

  places: {
    savigny: 'Savigny',
    lutry: 'Lutry',
    lausanne: 'Lausanne',
    vevey: 'Vevey',
    tarifa: 'Tarifa',
    lisbon: 'Lisbonne',
    berlin: 'Berlin',
    barcelona: 'Barcelone',
    lagos: 'Lagos',
    mexicoCity: 'Mexico',
    paris: 'Paris',
  },

  hero: {
    status: 'En cours de refonte avec Flutter · iOS et Android',
    lead: "Beenzer épingle tes photos et tes vidéos à l'endroit exact où tu les as prises. Suis tes amis, retrouve-les sur la carte et garde n'importe quel moment en NFT Solana, avec le lieu et l'heure inscrits dedans.",
    how: 'Voir comment ça marche',
    follow: 'Suivre le chantier',
    lat: 'Lat',
    lon: 'Long',
    alt: 'Alt',
    beats: ['Chaque photo a été prise *quelque part.*', "La plupart des applis oublient l'endroit. ==Beenzer le garde.=="],
    arrival: {
      title: 'Vincent est passé par ici.',
      alt: 'La photo de BEENZER #18 : un selfie de Vincent chez lui.',
      token: 'Jeton',
      place: 'Lieu',
      coords: 'Coord.',
      seen: 'Visible à moins de',
      supply: 'Tirage',
      floor: 'prix plancher {price}',
      solscan: 'Vérifier sur Solscan',
    },
    cue: 'Fais défiler pour atterrir',
  },

  tour: {
    eyebrow: 'Comment ça marche',
    title: 'Un appareil photo, une carte et la mémoire des lieux.',
    steps: [
      {
        title: "La carte, c'est chez toi.",
        body: "Chaque épingle est une photo ou une vidéo, laissée à l'endroit exact où elle a été prise. Touches-en une pour la voir, et voir qui était là.",
      },
      {
        title: 'Capture-le.',
        body: "Prends une photo ou une vidéo, enregistre un son, ou choisis quelque chose dans ta galerie. Jusqu'à 20 MB par publication.",
      },
      {
        title: 'Épingle-le.',
        body: 'Ta publication atterrit là où tu te trouves. Ensuite, choisis qui peut la trouver : tout le monde, ou seulement les personnes dans le rayon que tu fixes.',
      },
      {
        title: 'Partage-le.',
        body: 'Suis tes amis et vois leurs publications sur la carte ou dans ton fil. Si vous vous suivez tous les deux, vous pouvez discuter.',
      },
      {
        title: 'Minte-le.',
        body: "N'importe quelle publication peut devenir un NFT Solana. Choisis combien d'éditions peuvent exister et leur prix, valide dans Phantom, et l'édition #1 arrive dans ton portefeuille.",
      },
    ],
    try: 'Essaie · visible à moins de',
    radius: 'Rayon de visibilité en km',
    phone: {
      audio: 'Audio',
      photo: 'Photo',
      video: 'Vidéo',
      newPost: 'Nouvelle publication',
      caption: 'Heure néon 💚',
      who: 'Qui peut la trouver',
      everyone: 'Tout le monde',
      nearby: 'À proximité',
      within: 'Dans un rayon de {distance}',
      editions: 'Éditions',
      drop: 'Épingler ici',
      friends: 'Amis',
      public: 'Public',
      message: 'Toujours au lac ? 🌅',
      mint: 'Minter sur Solana',
      price: 'Prix unitaire',
      royalties: 'Royalties',
      approve: 'Valider dans Phantom',
      logs: [
        'Média enregistré sur Arweave',
        'Métadonnées enregistrées sur Arweave',
        'Minté dans la collection Beenzer',
        'Édition #1 envoyée dans ton portefeuille',
      ],
    },
  },

  showcase: {
    card: '{name}, la fiche',
    alt: "La photo mintée sous le nom BEENZER #18 : Vincent, en train de prendre un selfie à l'intérieur.",
    description: 'Description',
    meta: {
      city: 'Ville',
      coordinates: 'Coordonnées',
      date: 'Date',
      time: 'Heure UTC',
      visibility: 'Visibilité',
      supply: 'Tirage',
      floor: 'Prix plancher',
      creator: 'Créateur',
    },
    eyebrow: 'Noir sur blanc',
    title: 'La preuve que tu y étais.',
    lead: "Minte une publication et le moment y est inscrit, pour de bon. Voici BEENZER #18, minté à Savigny le 16 février 2023. Sa photo et ses métadonnées sont toujours sur Arweave, exactement telles qu'elles ont été écrites.",
    carries: [
      ['Qui', "Portefeuille et nom d'utilisateur du créateur"],
      ['Quoi', 'Le média et son type : photo, vidéo ou son'],
      ['Quand', 'Date et heure, en UTC'],
      ['Où', 'Ville, latitude et longitude'],
      ['Qui peut le voir', 'Le rayon de visibilité, sous forme de zone sur la carte'],
      ['Combien', 'Tirage et prix plancher'],
    ],
    solscan: 'Voir le #18 sur Solscan',
  },

  onchain: {
    eyebrow: 'On-chain',
    title: "Ton portefeuille, c'est ton compte.",
    lead: 'Beenzer tourne sur Solana. La connexion comme le mint se font dans Phantom, et rien ne bouge sans ta signature.',
    pillars: [
      {
        title: 'Connexion par signature',
        body: "Connecte Phantom et signe un message à usage unique. Pas d'e-mail, et pas de mot de passe qui puisse fuiter.",
      },
      {
        title: 'Conservé sur Arweave',
        body: 'La photo, la vidéo ou le son et ses métadonnées partent sur Arweave, un stockage conçu pour durer. Les vidéos ont droit à un aperçu animé.',
      },
      {
        title: 'Éditions limitées',
        body: "Chaque mint est un NFT programmable Metaplex de la collection Beenzer, avec le nombre d'éditions de ton choix.",
      },
      {
        title: 'Des royalties qui voyagent',
        body: 'Des royalties de 10 % sur les reventes, dont 80 % pour le créateur et 20 % pour Beenzer, appliquées par un ensemble de règles Metaplex.',
      },
    ],
    pipeTitle: 'Ce qui se passe quand tu mintes',
    pipeBody: "Les mints passent par une file d'attente. Tu suis chaque étape en direct dans ta boîte de réception.",
    pipeline: [
      'Tu valides dans Phantom',
      'Paiement confirmé',
      'Média vers Arweave',
      'Métadonnées vers Arweave',
      'NFT minté',
      'Collection vérifiée',
      'Édition #1 pour toi',
    ],
    built: 'Développé avec',
    roles: {
      chain: 'Blockchain',
      nft: 'Standard NFT',
      storage: 'Stockage',
      wallet: 'Portefeuille',
      apps: 'iOS et Android',
      map: 'La carte',
      server: 'Serveur',
    },
  },

  story: {
    eyebrow: 'Histoire',
    title: 'Là depuis 2022.',
    lead: "Beenzer a vu le jour en 2022, sous la forme d'une appli sociale qui mintait directement depuis l'appareil photo du téléphone, sur Solana. Aujourd'hui, l'appli est reconstruite de A à Z, autour de la même idée : chaque moment garde son lieu.",
    now: 'Maintenant',
    next: 'À venir',
    timeline: [
      {
        title: 'Beenzer démarre',
        body: 'Une dApp mobile sur Solana, développée en React Native : photographier, minter, déposer sur la carte.',
      },
      {
        title: 'BEENZER #18',
        body: 'Minté à Savigny, en Suisse. Toujours on-chain, toujours sur Arweave, toujours la publication où atterrit cette page.',
      },
      {
        title: 'Un nouveau foyer chez Nexow',
        body: 'Beenzer devient un produit de Nexow, Inc. et repart sur une base de code neuve.',
      },
      {
        title: 'Reconstruit en Flutter',
        body: 'Une nouvelle appli pour iOS et Android, sur le même serveur : carte, fil, chat, appareil photo et mint, en mode clair et sombre.',
      },
      {
        title: 'Lancement',
        body: "Sur l'App Store et sur Google Play. Suis le chantier pour être là quand l'appli arrivera.",
      },
    ],
    video: "Une visite guidée de l'appli Beenzer d'origine",
    sound: 'Son',
    caption: "L'appli d'origine, en React Native",
  },

  team: {
    eyebrow: "L'équipe",
    title: 'Ingénieurs, traders, artistes. Convaincus.',
    lead: "Le premier Beenzer a été construit par une équipe internationale venue de {count} pays : logiciel, data, finance et art. Aujourd'hui, il est développé chez [{company}](company), fondée par deux d'entre eux.",
    numbers: ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze'],
    profile: 'Profil de {name}',
    roles: {
      'Software Engineer': 'Ingénieur logiciel',
      'Data Scientist': 'Data scientist',
      'Options Trader': "Trader d'options",
      'Accounting Chief': 'Chef comptable',
      'Fitness King': 'Roi du fitness',
      'Community Manager': 'Community manager',
      'Web3 Evangelist': 'Évangéliste Web3',
      'Metaverse Evangelist': 'Évangéliste du métavers',
      'Operations Director': 'Directeur des opérations',
      'Managing Partner': 'Associé gérant',
      'Blockchain Manager': 'Responsable blockchain',
      'Bitcoin Evangelist': 'Évangéliste Bitcoin',
      'NFT Artist': 'Artiste NFT',
      'NFT Promoter': 'Promotion NFT',
      'Electronic Engineer': 'Ingénieur électronicien',
      'AI Expert': 'Expert en IA',
      'Private Banker': 'Banquier privé',
      'EFA™-EFP™ CFA™': 'EFA™-EFP™ CFA™',
      'Data Analyst': 'Data analyst',
      'Forex Trader': 'Trader forex',
      'Co-founder & CTO, Nexow': 'Cofondateur et CTO, Nexow',
      'Co-founder & CEO, Nexow': 'Cofondateur et CEO, Nexow',
    },
  },

  journal: {
    eyebrow: 'Journal',
    title: 'Notes de la carte.',
    lead: "Des nouvelles de l'appli, et des guides sur ce qu'il y a sous le capot.",
    description: "Les nouvelles de Beenzer, et des guides sur les géo-NFT, Solana et l'appli.",
    all: 'Tous les articles',
    read: 'Lire',
    minutes: '{n} min',
    minRead: '{n} min de lecture',
    more: 'À lire aussi',
    kinds: { News: 'Actualité', Guide: 'Guide' },
    untranslated: "Cet article n'a pas encore été traduit, alors le voici en anglais.",
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Les bonnes questions.',
    more: 'Autre chose ? Écris-nous via [Nexow](contact).',
    items: [
      {
        q: "Qu'est-ce que Beenzer ?",
        a: "Une appli géosociale pour iOS et Android. Tu publies des photos et des vidéos là où tu les as prises, tu suis tes amis et tu retrouves leurs publications sur la carte. N'importe quelle publication peut être mintée en NFT sur Solana.",
      },
      {
        q: "Je peux télécharger l'appli ?",
        a: "Pas encore. L'appli est en cours de refonte avec Flutter, et la version React Native d'origine n'est plus sur Google Play. Suis @beenzer_app sur X ou Instagram pour connaître le jour de sa sortie.",
      },
      {
        q: 'Faut-il un portefeuille crypto ?',
        a: "Oui : c'est avec Phantom que tu te connectes. Tu le relies et tu signes un message à usage unique pour prouver que le portefeuille est à toi, donc ni e-mail ni mot de passe. Beenzer ne voit jamais tes clés.",
      },
      {
        q: 'Combien coûte un mint ?',
        a: "Des frais de mint en SOL. L'appli t'affiche les frais, et le portefeuille qui les reçoit, avant que tu valides quoi que ce soit dans Phantom, et rien n'est envoyé sans ta signature.",
      },
      {
        q: 'Qui peut voir ce que je publie ?',
        a: "C'est toi qui choisis, publication par publication : tout le monde, ou seulement les personnes dans un rayon que tu fixes. La carte montre à chacun les publications dont il se trouve dans le rayon, plus celles visibles dans le monde entier.",
      },
      {
        q: 'Que contient une publication mintée ?',
        a: "Le média, conservé sur Arweave, et des métadonnées avec ton nom d'utilisateur et ton portefeuille, la date et l'heure UTC, la ville et les coordonnées, le rayon de visibilité, le tirage et le prix plancher. C'est un NFT programmable Metaplex de la collection Beenzer.",
      },
      {
        q: 'Que sont les éditions et les royalties ?',
        a: "Quand tu mintes, tu choisis combien d'éditions peuvent exister et leur prix. L'édition #1 est pour toi. Chaque Beenzer est minté avec des royalties de 10 % sur les reventes, dont 80 % pour le créateur et 20 % pour Beenzer.",
      },
      {
        q: 'Quelle taille peut faire une publication ?',
        a: "Jusqu'à 20 MB de média, et une description d'au plus 2 000 caractères.",
      },
      {
        q: 'Que sont devenus la DAO Beenzer et ses jetons ?',
        a: 'Ils faisaient partie du projet initial de 2022. La nouvelle appli est construite autour des publications et de la carte, et rien sur ce site ne constitue une offre de quelque jeton que ce soit.',
      },
      {
        q: 'Qui est derrière Beenzer ?',
        a: '{company}, une société du Delaware qui développe des logiciels pour des clients, et ses propres applis. Beenzer en fait partie.',
      },
    ],
  },

  follow: {
    chip: 'En chantier',
    title: "Sois là à l'==atterrissage.==",
    lead: 'Le nouveau Beenzer arrive sur iPhone et Android. Suis-nous pour le premier aperçu, la bêta et le jour de la sortie.',
    status: 'en chantier',
    press: 'Presse, partenaires ou investisseurs : [écrire à Nexow](contact).',
  },

  footer: {
    body: "Des photos et des vidéos épinglées à l'endroit où elles ont été prises, et chacune peut devenir un NFT Solana. Reconstruit en Flutter pour iOS et Android.",
    community: 'Communauté',
    company: 'Entreprise',
    studio: 'Nexow Studio',
    atNexow: 'Beenzer chez Nexow',
    contact: 'Contact',
    notice: 'Mentions légales',
    productOf: 'Un produit de',
    legal: '© {year} {company} Tous droits réservés. Beenzer est un produit de {company}, une société du Delaware.',
    languages: 'Langues',
  },

  dao: {
    title: 'Beenzer DAO',
    description: "La DAO Beenzer et ses jetons faisaient partie du projet initial de 2022. Ce que Beenzer fait on-chain aujourd'hui.",
    eyebrow: 'La DAO',
    heading: 'La DAO était le premier jet.',
    leads: [
      "En 2022, Beenzer avait été pensé autour d'une DAO, avec deux jetons bien à lui. La nouvelle appli est plutôt construite autour des publications et de la carte. Rien sur ce site ne constitue une offre de quelque jeton que ce soit.",
      "Ce que Beenzer fait on-chain aujourd'hui : tu te connectes avec Phantom, et n'importe quelle publication peut être mintée en NFT Metaplex sur Solana, conservée sur Arweave, avec des éditions limitées et des royalties pour son créateur.",
    ],
    onchain: 'Comment Beenzer utilise Solana',
    faq: 'FAQ',
  },

  legal: {
    title: 'Mentions légales',
    description: "Qui gère ce site, ce qu'il fait de tes données (rien), et les petits caractères.",
    eyebrow: 'Mentions légales',
    heading: 'Les petits caractères.',
    updated: 'Dernière mise à jour : {date}',
    sections: [
      {
        title: 'Qui gère ce site',
        body: [
          "Ce site est géré par **{company}**, une société du Delaware constituée le {incorporated}. Beenzer est l'un de ses produits. Les informations sur la société et ses propres politiques se trouvent sur [nexow.studio/legal](legal), et tu peux la joindre via la [page de contact](contact).",
        ],
      },
      {
        title: 'Tes données sur ce site',
        body: [
          "Ce site ne dépose aucun cookie, n'utilise aucun outil d'analyse, aucune publicité ni aucun traceur, et ne contient aucun formulaire. Les polices, les images, les vidéos et les données cartographiques du globe sont toutes servies par ce site lui-même : le visiter ne t'envoie donc chez personne d'autre.",
          "Comme pour tout site web, l'hébergeur qui sert ces pages peut conserver des journaux techniques standard, comme une adresse IP et une version de navigateur, pour assurer le fonctionnement et la sécurité du site.",
          "Les liens vers X, Instagram, YouTube, GitHub, Solscan ou Arweave t'emmènent vers ces services, et ce sont leurs propres politiques qui s'y appliquent.",
          "Si tu choisis une langue, ou refuses la proposition d'en lire une autre, ton navigateur garde ce choix sur ton appareil, dans son stockage local, et non dans un cookie. Il n'est jamais envoyé à personne.",
        ],
      },
      {
        title: "L'appli",
        body: [
          "Ces mentions ne concernent que ce site web. L'appli Beenzer sera lancée avec ses propres conditions d'utilisation et sa propre politique de confidentialité.",
        ],
      },
      {
        title: 'Pas une offre',
        body: [
          "Rien sur ce site ne constitue une offre d'achat ou de vente de quelque jeton, NFT ou valeur mobilière que ce soit, ni un conseil financier. Les transactions sur la blockchain ne peuvent pas être annulées, et la valeur des actifs numériques peut baisser comme monter.",
        ],
      },
      {
        title: 'Traductions',
        body: [
          "Ce site est rédigé en anglais et traduit dans d'autres langues. En cas de divergence entre une traduction et la version anglaise, c'est la version anglaise qui fait foi.",
        ],
      },
      {
        title: 'Noms et marques',
        body: [
          'Le nom et le logo Beenzer appartiennent à {company} Solana, Metaplex, Arweave, Phantom, Flutter, Google Maps, Node.js, Apple, Android, X, Instagram, YouTube et GitHub sont des noms appartenant à leurs propriétaires respectifs, utilisés ici uniquement pour indiquer avec quoi Beenzer fonctionne.',
        ],
      },
    ],
  },

  notFound: {
    title: "Rien d'épinglé ici",
    description: "Cette page n'existe pas.",
    code: '404 · Lat ?? · Long ??',
    heading: "Rien n'a été épinglé ici.",
    lead: "La page que tu cherches a été déplacée, ou elle n'a jamais été publiée.",
    home: 'Retour à la carte',
    journal: 'Lire le journal',
  },
};

export default fr;
