/**
 * Brand constants and the facts the site repeats. Facts only: each one says
 * where it comes from, and nothing here is a guess.
 */
export const SITE = {
  name: 'Beenzer',
  url: 'https://beenzer.app',
  tagline: 'Beenzer. Done that.',
  description:
    'Beenzer pins your photos and videos to the exact place you took them. Follow friends, find them on the map, and keep any moment as a Solana NFT, with its place and time written in.',
  /** Bump with each release of the site. */
  version: '2.0.0',
  x: '@beenzer_app',
  owner: {
    // Legal name as on nexow.studio (src/data/legal.ts there).
    name: 'Nexow, Inc.',
    url: 'https://nexow.studio',
    product: 'https://nexow.studio/products/beenzer',
    contact: 'https://nexow.studio/contact',
    legal: 'https://nexow.studio/legal',
    // Delaware corporation, incorporated 2026-07-28 (nexow.studio/legal).
    incorporated: '2026-07-28',
    founders: ['Alex Colls Outumuro', 'Vincent Porret'],
  },
} as const;

/** Accounts checked live on 2026-10-20. The Discord and Telegram invites had expired. */
export const SOCIAL = [
  { label: 'X', handle: '@beenzer_app', href: 'https://x.com/beenzer_app', icon: 'x' },
  { label: 'Instagram', handle: '@beenzer_app', href: 'https://www.instagram.com/beenzer_app/', icon: 'instagram' },
  { label: 'YouTube', handle: '@beenzer', href: 'https://www.youtube.com/@beenzer', icon: 'youtube' },
  { label: 'GitHub', handle: 'been-zer', href: 'https://github.com/been-zer', icon: 'github' },
] as const;

/**
 * BEENZER #18, read from Solana mainnet and its Arweave metadata on
 * 2026-10-20. The old site showed it as "#33" in Barcelona; the chain says
 * #18, Savigny.
 */
export const FEATURED = {
  name: 'BEENZER #18',
  description: '🤘',
  mint: 'BXzXwJVhqQerunAWnjnXPyhtXG4SGrMQWtstp8rshKFZ',
  solscan: 'https://solscan.io/token/BXzXwJVhqQerunAWnjnXPyhtXG4SGrMQWtstp8rshKFZ',
  metadata: 'https://arweave.net/l985F9C0bk04X8h2wxbcBgOicdrnIg2b9GM6lt3_BfE',
  username: 'vincent',
  creator: 'FmESPhYnfmJLj5eSfQ4EAXHf9hVeFDjSNHEskuGXimob',
  type: 'image/png',
  supply: 1,
  floor: '0.1 SOL',
  date: '2023-02-16',
  timeUtc: '13:41:43',
  city: 'Savigny',
  country: 'Switzerland',
  // Rounded to two decimals (about 1 km, the post's visibility radius). The
  // exact point is in the metadata; the site does not need to repeat it.
  latitude: 46.54,
  longitude: 6.72,
  visibility: '1 km',
  /** Seller fee in basis points, and the creator split, from the on-chain metadata account. */
  royaltiesBps: 1000,
  creatorShare: 80,
} as const;

/** Short form of a Solana address: first and last five characters. */
export function shortKey(key: string): string {
  return `${key.slice(0, 5)}…${key.slice(-5)}`;
}

/** "46.54° N", "6.72° E", to the given number of decimals. */
export function formatLat(lat: number, digits = 4): string {
  return `${Math.abs(lat).toFixed(digits)}° ${lat >= 0 ? 'N' : 'S'}`;
}

export function formatLon(lon: number, digits = 4): string {
  return `${Math.abs(lon).toFixed(digits)}° ${lon >= 0 ? 'E' : 'W'}`;
}
