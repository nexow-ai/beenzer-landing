/**
 * English: the source every other language is translated from. Facts stay
 * the facts in src/data/; this file only says them.
 *
 * Markup in strings, read by rich() in src/i18n/index.ts: [label](key) is a
 * link, **x** is strong, *x* is emphasis and ==x== takes the brand gradient.
 * {name} is a value filled in by the page.
 */
const en = {
  meta: {
    description:
      'Beenzer pins your photos and videos to the exact place you took them. Follow friends, find them on the map, and keep any moment as a Solana NFT, with its place and time written in.',
    skip: 'Skip to content',
    home: 'Beenzer, home',
  },

  nav: {
    home: 'Home',
    how: 'How it works',
    onchain: 'On-chain',
    story: 'Story',
    journal: 'Journal',
    faq: 'FAQ',
    follow: 'Follow the build',
    menu: 'Menu',
    main: 'Main',
    mobile: 'Mobile',
    product: 'A Nexow, Inc. product',
    language: 'Language',
  },

  /** Shown to a visitor whose browser prefers this language, on a page in another one. */
  suggest: {
    text: 'This page is also in English.',
    go: 'Read in English',
    close: 'No thanks',
  },

  /** Place names on the phone and the strip of photos. */
  places: {
    savigny: 'Savigny',
    lutry: 'Lutry',
    lausanne: 'Lausanne',
    vevey: 'Vevey',
    tarifa: 'Tarifa',
    lisbon: 'Lisbon',
    berlin: 'Berlin',
    barcelona: 'Barcelona',
    lagos: 'Lagos',
    mexicoCity: 'Mexico City',
    paris: 'Paris',
  },

  hero: {
    status: 'Being rebuilt in Flutter · iOS & Android',
    lead: 'Beenzer pins your photos and videos to the exact place you took them. Follow friends, find them on the map, and keep any moment as a Solana NFT, with the place and the time written into it.',
    how: 'See how it works',
    follow: 'Follow the build',
    lat: 'Lat',
    lon: 'Lon',
    alt: 'Alt',
    beats: ['Every photo was taken *somewhere.*', 'Most apps forget where. ==Beenzer keeps it.=='],
    arrival: {
      title: 'Vincent was here.',
      alt: 'The photo of BEENZER #18: a selfie of Vincent at home.',
      token: 'Token',
      place: 'Place',
      coords: 'Coords',
      seen: 'Seen within',
      supply: 'Supply',
      floor: 'floor {price}',
      solscan: 'Check it on Solscan',
    },
    cue: 'Scroll to land',
  },

  tour: {
    eyebrow: 'How it works',
    title: 'A camera, a map, and a memory of where.',
    steps: [
      {
        title: 'The map is home.',
        body: 'Every pin is a photo or a video, left exactly where it was taken. Tap one to see it, and who was there.',
      },
      {
        title: 'Snap it.',
        body: 'Shoot a photo or a video, record a sound, or pick something from your gallery. Up to 20 MB a post.',
      },
      {
        title: 'Pin it.',
        body: 'Your post lands where you are standing. Then choose who can find it: everyone, or only people within the radius you set.',
      },
      {
        title: 'Share it.',
        body: 'Follow friends and see their posts on the map or in your feed. Follow each other back and you can chat.',
      },
      {
        title: 'Mint it.',
        body: 'Any post can become a Solana NFT. Pick how many editions can exist and their price, approve in Phantom, and edition #1 lands in your wallet.',
      },
    ],
    try: 'Try it · visible within',
    radius: 'Visibility radius in km',
    /** The app's own screens, drawn on the phone. */
    phone: {
      audio: 'Audio',
      photo: 'Photo',
      video: 'Video',
      newPost: 'New post',
      caption: 'Neon hour 💚',
      who: 'Who can find it',
      everyone: 'Everyone',
      nearby: 'Nearby',
      within: 'Within {distance}',
      editions: 'Editions',
      drop: 'Drop it here',
      friends: 'Friends',
      public: 'Public',
      message: 'Still at the lake? 🌅',
      mint: 'Mint on Solana',
      price: 'Price each',
      royalties: 'Royalties',
      approve: 'Approve in Phantom',
      logs: [
        'Media saved to Arweave',
        'Metadata saved to Arweave',
        'Minted in the Beenzer collection',
        'Edition #1 sent to your wallet',
      ],
    },
  },

  showcase: {
    card: '{name}, the card',
    alt: 'The photo minted as BEENZER #18: Vincent, taking a selfie indoors.',
    description: 'Description',
    meta: {
      city: 'City',
      coordinates: 'Coordinates',
      date: 'Date',
      time: 'Time UTC',
      visibility: 'Visibility',
      supply: 'Supply',
      floor: 'Floor',
      creator: 'Creator',
    },
    eyebrow: 'On the record',
    title: 'Proof you were there.',
    lead: 'Mint a post and the moment is written into it, for good. This is BEENZER #18, minted in Savigny on 16 February 2023. Its photo and its metadata still sit on Arweave, exactly as they were written.',
    /** What the server writes into every Beenzer's metadata. */
    carries: [
      ['Who', 'Creator wallet and username'],
      ['What', 'The media and its type: photo, video or sound'],
      ['When', 'Date and time, in UTC'],
      ['Where', 'City, latitude and longitude'],
      ['Who can see it', 'The visibility radius, as a box on the map'],
      ['How many', 'Supply and floor price'],
    ],
    solscan: 'See #18 on Solscan',
  },

  onchain: {
    eyebrow: 'On-chain',
    title: 'Your wallet is your account.',
    lead: 'Beenzer runs on Solana. Signing in and minting both happen in Phantom, and nothing moves without your signature.',
    pillars: [
      {
        title: 'Sign in with a signature',
        body: 'Connect Phantom and sign a one-time message. No email, and no password to leak.',
      },
      {
        title: 'Kept on Arweave',
        body: 'The photo, video or sound and its metadata go to Arweave, storage built to last. Videos get an animated preview.',
      },
      {
        title: 'Limited editions',
        body: 'Each mint is a Metaplex programmable NFT in the Beenzer collection, with as many editions as you choose.',
      },
      {
        title: 'Royalties that travel',
        body: 'A 10% royalty on resales, 80% of it to the creator and 20% to Beenzer, enforced by a Metaplex rule set.',
      },
    ],
    pipeTitle: 'What happens when you mint',
    pipeBody: 'Mints wait in a queue. You follow each step live in your inbox.',
    pipeline: [
      'You approve in Phantom',
      'Payment confirmed',
      'Media to Arweave',
      'Metadata to Arweave',
      'NFT minted',
      'Collection verified',
      'Edition #1 to you',
    ],
    built: 'Built with',
    roles: {
      chain: 'Chain',
      nft: 'NFT standard',
      storage: 'Storage',
      wallet: 'Wallet',
      apps: 'iOS & Android',
      map: 'The map',
      server: 'Server',
    },
  },

  story: {
    eyebrow: 'Story',
    title: 'Been here since 2022.',
    lead: 'Beenzer began in 2022 as a social app that minted straight from the phone camera, on Solana. Now it is being rebuilt from the ground up, around the same idea: every moment keeps its place.',
    now: 'Now',
    next: 'Next',
    timeline: [
      {
        title: 'Beenzer starts',
        body: 'A mobile dApp on Solana, built in React Native: snap, mint, drop it on the map.',
      },
      {
        title: 'BEENZER #18',
        body: 'Minted in Savigny, Switzerland. Still on-chain, still on Arweave, still the post this page lands on.',
      },
      {
        title: 'A new home at Nexow',
        body: 'Beenzer becomes a product of Nexow, Inc. and gets a fresh codebase.',
      },
      {
        title: 'Rebuilt in Flutter',
        body: 'A new app for iOS and Android, on the same server: map, feed, chat, camera and mint, in light and dark.',
      },
      {
        title: 'Launch',
        body: 'In the App Store and on Google Play. Follow along to be there when it lands.',
      },
    ],
    video: 'A walkthrough of the original Beenzer app',
    sound: 'Sound',
    caption: 'The original app, in React Native',
  },

  team: {
    eyebrow: 'The crew',
    title: 'Engineers, traders, artists. Believers.',
    lead: 'The first Beenzer was built by an international crew: software, data, finance and art, from {count} countries. Today it is built at [{company}](company), founded by two of them.',
    /** Spelled out for the count of countries above; digits are fine where words would be odd. */
    numbers: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'],
    profile: '{name}, profile',
    /** Each member's roles, by their English name in src/data/team.ts. */
    roles: {
      'Software Engineer': 'Software Engineer',
      'Data Scientist': 'Data Scientist',
      'Options Trader': 'Options Trader',
      'Accounting Chief': 'Accounting Chief',
      'Fitness King': 'Fitness King',
      'Community Manager': 'Community Manager',
      'Web3 Evangelist': 'Web3 Evangelist',
      'Metaverse Evangelist': 'Metaverse Evangelist',
      'Operations Director': 'Operations Director',
      'Managing Partner': 'Managing Partner',
      'Blockchain Manager': 'Blockchain Manager',
      'Bitcoin Evangelist': 'Bitcoin Evangelist',
      'NFT Artist': 'NFT Artist',
      'NFT Promoter': 'NFT Promoter',
      'Electronic Engineer': 'Electronic Engineer',
      'AI Expert': 'AI Expert',
      'Private Banker': 'Private Banker',
      'EFA™-EFP™ CFA™': 'EFA™-EFP™ CFA™',
      'Data Analyst': 'Data Analyst',
      'Forex Trader': 'Forex Trader',
      'Co-founder & CTO, Nexow': 'Co-founder & CTO, Nexow',
      'Co-founder & CEO, Nexow': 'Co-founder & CEO, Nexow',
    },
  },

  journal: {
    eyebrow: 'Journal',
    title: 'Notes from the map.',
    lead: 'News about the app, and guides to what is under it.',
    description: 'News from Beenzer, and guides to geo-NFTs, Solana and the app.',
    all: 'All posts',
    read: 'Read',
    minutes: '{n} min',
    minRead: '{n} min read',
    more: 'Keep reading',
    kinds: { News: 'News', Guide: 'Guide' },
    /** Over an article shown in English because it has no translation yet. */
    untranslated: 'This article has not been translated yet, so here it is in English.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Good questions.',
    more: 'Something else? Write to us through [Nexow](contact).',
    // Answers from the app's code and plan (nexow-ai/beenzer) and from
    // nexow.studio. Nothing here promises a date or a price.
    items: [
      {
        q: 'What is Beenzer?',
        a: 'A geo-social app for iOS and Android. You post photos and videos where you took them, follow friends, and find their posts on the map. Any post can be minted as an NFT on Solana.',
      },
      {
        q: 'Can I download it?',
        a: 'Not yet. The app is being rebuilt in Flutter, and the original React Native version is no longer on Google Play. Follow @beenzer_app on X or Instagram to hear the day it ships.',
      },
      {
        q: 'Do I need a crypto wallet?',
        a: 'Yes: Phantom is how you sign in. You connect it and sign a one-time message to prove the wallet is yours, so there is no email and no password. Beenzer never sees your keys.',
      },
      {
        q: 'What does minting cost?',
        a: 'A mint fee in SOL. The app shows the fee, and the wallet it goes to, before you approve anything in Phantom, and nothing is sent without your signature.',
      },
      {
        q: 'Who can see what I post?',
        a: 'You choose, post by post: everyone, or only people within a radius you set. The map shows each person the posts whose radius they are inside, plus the worldwide ones.',
      },
      {
        q: 'What does a minted post contain?',
        a: 'The media, kept on Arweave, and metadata with your username and wallet, the date and UTC time, the city and coordinates, the visibility radius, the supply and the floor price. It is a Metaplex programmable NFT in the Beenzer collection.',
      },
      {
        q: 'What are editions and royalties?',
        a: 'When you mint, you choose how many editions can exist and their price. Edition #1 goes to you. Every Beenzer is minted with a 10% royalty on resales, 80% of it for the creator and 20% for Beenzer.',
      },
      {
        q: 'How big can a post be?',
        a: 'Up to 20 MB of media, and a description of up to 2,000 characters.',
      },
      {
        q: 'What happened to the Beenzer DAO and its tokens?',
        a: 'They were part of the original 2022 design. The new app is built around posts and the map, and nothing on this site is an offer of any token.',
      },
      {
        q: 'Who is behind Beenzer?',
        a: '{company}, a Delaware corporation that builds software for clients and apps of its own. Beenzer is one of them.',
      },
    ],
  },

  follow: {
    chip: 'In the works',
    title: 'Be there when it ==lands.==',
    lead: 'The new Beenzer is coming to iPhone and Android. Follow along for the first look, the beta, and the day it ships.',
    status: 'in the works',
    press: 'Press, partners or investors: [write to Nexow](contact).',
  },

  footer: {
    body: 'Photos and videos pinned to the place they were taken, and any of them can become a Solana NFT. Rebuilt in Flutter for iOS and Android.',
    community: 'Community',
    company: 'Company',
    studio: 'Nexow Studio',
    atNexow: 'Beenzer at Nexow',
    contact: 'Contact',
    notice: 'Site notice',
    productOf: 'A product of',
    legal: '© {year} {company} All rights reserved. Beenzer is a product of {company}, a Delaware corporation.',
    languages: 'Languages',
  },

  dao: {
    title: 'Beenzer DAO',
    description: 'The Beenzer DAO and its tokens were part of the original 2022 design. What Beenzer does on-chain today.',
    eyebrow: 'The DAO',
    heading: 'The DAO was the first draft.',
    leads: [
      'In 2022, Beenzer was designed around a DAO, with two tokens of its own. The new app is built around posts and the map instead. Nothing on this site is an offer of any token.',
      'What Beenzer does on-chain today: you sign in with Phantom, and any post can be minted as a Metaplex NFT on Solana, kept on Arweave, with limited editions and royalties for its creator.',
    ],
    onchain: 'How Beenzer uses Solana',
    faq: 'FAQ',
  },

  legal: {
    title: 'Site notice',
    description: 'Who runs this site, what it does with your data (nothing), and the small print.',
    eyebrow: 'Site notice',
    heading: 'The small print.',
    updated: 'Last updated {date}',
    sections: [
      {
        title: 'Who runs this site',
        body: [
          "This website is run by **{company}**, a Delaware corporation incorporated on {incorporated}. Beenzer is one of its products. The company's details and its own policies are on [nexow.studio/legal](legal), and you can reach it through the [contact page](contact).",
        ],
      },
      {
        title: 'Your data on this site',
        body: [
          "This site sets no cookies, runs no analytics, ads or trackers, and has no forms. Fonts, images, videos and the globe's map data are all served from this site itself, so visiting it does not send you to anyone else.",
          'Like any website, the host that serves these pages may keep standard technical logs, such as an IP address and a browser version, to keep the site running and safe.',
          'Links to X, Instagram, YouTube, GitHub, Solscan or Arweave take you to those services, and their own policies apply there.',
        ],
      },
      {
        title: 'The app',
        body: ['This notice covers this website only. The Beenzer app will ship with its own terms of use and privacy policy.'],
      },
      {
        title: 'Not an offer',
        body: [
          'Nothing on this site is an offer to buy or sell any token, NFT or security, or financial advice. Blockchain transactions cannot be undone, and the value of digital assets can go down as well as up.',
        ],
      },
      {
        title: 'Translations',
        body: [
          'This site is written in English and translated into other languages. If a translation and the English version differ, the English version applies.',
        ],
      },
      {
        title: 'Names and marks',
        body: [
          'The Beenzer name and logo belong to {company} Solana, Metaplex, Arweave, Phantom, Flutter, Google Maps, Node.js, Apple, Android, X, Instagram, YouTube and GitHub are the names of their respective owners, used here only to say what Beenzer works with.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Nothing pinned here',
    description: 'This page does not exist.',
    code: '404 · Lat ?? · Lon ??',
    heading: 'Nothing was pinned here.',
    lead: 'The page you are looking for has moved, or it was never posted.',
    home: 'Back to the map',
    journal: 'Read the journal',
  },
} as const;

/** Every language has the same keys, and arrays of the same length, with its own strings. */
type Widen<T> = T extends string
  ? string
  : T extends readonly unknown[]
    ? { readonly [K in keyof T]: Widen<T[K]> }
    : { readonly [K in keyof T]: Widen<T[K]> };

export type Dict = Widen<typeof en>;

export default en satisfies Dict;
