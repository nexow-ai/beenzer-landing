import { SITE } from './site';

// Answers from the app's code and plan (nexow-ai/beenzer) and from
// nexow.studio. Nothing here promises a date or a price.
export const faq = [
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
    q: 'Do I have to mint my posts?',
    a: 'No. Minting is for the posts you want to keep as a token, or let others collect. It costs a mint fee in SOL, and the app shows the fee and where it goes before you approve anything in Phantom.',
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
    a: 'They were part of the original 2022 design. The new app is built around posts, the map and optional NFTs; nothing on this site is an offer of any token.',
  },
  {
    q: 'Who is behind Beenzer?',
    a: `${SITE.owner.name}, a Delaware corporation that builds software for clients and apps of its own. Beenzer is one of them.`,
  },
];

export const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};
