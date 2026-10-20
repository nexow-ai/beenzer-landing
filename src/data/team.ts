import type { ImageMetadata } from 'astro';
import alex from '../assets/team/alex.jpg';
import vincent from '../assets/team/vincent.jpg';
import dan from '../assets/team/dan.jpg';
import filip from '../assets/team/filip.jpg';
import mer from '../assets/team/mer.jpg';
import max from '../assets/team/max.jpg';
import joanlluis from '../assets/team/joanlluis.jpg';
import barry from '../assets/team/barry.jpg';
import elissa from '../assets/team/elissa.jpg';
import marti from '../assets/team/marti.jpg';
import nikita from '../assets/team/nikita.jpg';
import joan from '../assets/team/joan.jpg';
import armelle from '../assets/team/armelle.jpg';

export interface Member {
  name: string;
  /** ISO country code, from the flag each one chose on the original site. */
  country: string;
  role: string;
  also: string;
  /** Their own line, kept as they wrote it. */
  before: string;
  photo: ImageMetadata;
  href: string;
  /** Co-founder of Nexow, Inc. (nexow.studio, src/data/team.ts there). */
  nexow?: string;
}

// The crew as listed on the original Beenzer site (index.html, 2022–2025),
// with their links. Alex and Vincent founded Nexow, Inc., where Beenzer is
// built now (incorporation documents, 2026-07-28).
export const team: Member[] = [
  {
    name: 'Alex Colls Outumuro',
    country: 'ES',
    role: 'Software Engineer',
    also: 'Data Scientist',
    before: 'Ex Quantitative Trader',
    photo: alex,
    href: 'https://www.linkedin.com/in/alex-colls-outumuro/',
    nexow: 'Co-founder & CTO, Nexow',
  },
  {
    name: 'Vincent Porret',
    country: 'CH',
    role: 'Software Engineer',
    also: 'Options Trader',
    before: 'Ex Private Banker',
    photo: vincent,
    href: 'https://www.linkedin.com/in/vincent-porret/',
    nexow: 'Co-founder & CEO, Nexow',
  },
  {
    name: 'Dan Farisato',
    country: 'BR',
    role: 'Software Engineer',
    also: 'Accounting Chief',
    before: 'Ex Guitar Hero',
    photo: dan,
    href: 'https://www.linkedin.com/in/danilson-farisato/',
  },
  {
    name: 'Filip Stan',
    country: 'RO',
    role: 'Software Engineer',
    also: 'Fitness King',
    before: 'Ex Heartbreaker',
    photo: filip,
    href: 'https://www.linkedin.com/in/filipstan/',
  },
  {
    name: 'Mer Queen',
    country: 'CH',
    role: 'Community Manager',
    also: 'Web3 Evangelist',
    before: 'Ex Store Manager',
    photo: mer,
    href: 'https://twitter.com/SolanaQueen420',
  },
  {
    name: 'Max Ceesay',
    country: 'ES',
    role: 'Community Manager',
    also: 'Metaverse Evangelist',
    before: 'Ex Music Producer',
    photo: max,
    href: 'https://www.linkedin.com/in/max-ceesay-esquivel-4b193483/',
  },
  {
    name: 'Joan-Lluís Ponts',
    country: 'ES',
    role: 'Operations Director',
    also: 'Managing Partner',
    before: 'Ex Hotel Broker',
    photo: joanlluis,
    href: 'https://www.linkedin.com/in/joan-llu%C3%ADs-pont-476a582/',
  },
  {
    name: 'Barry Bitcoin',
    country: 'GW',
    role: 'Blockchain Manager',
    also: 'Bitcoin Evangelist',
    before: 'Ex Master Chef',
    photo: barry,
    href: 'https://www.linkedin.com/in/hassimiou-barry-a2603b100/',
  },
  {
    name: 'Elissa Art',
    country: 'GB',
    role: 'NFT Artist',
    also: 'NFT Promoter',
    before: 'Ex Heartbreaker',
    photo: elissa,
    href: 'https://twitter.com/ellissa_art',
  },
  {
    name: 'Martí Llanes',
    country: 'ES',
    role: 'Data Scientist',
    also: 'Electronic Engineer',
    before: 'Ex Math Teacher',
    photo: marti,
    href: 'https://www.linkedin.com/in/martillanes/',
  },
  {
    name: 'Nikita Polovinkin',
    country: 'RU',
    role: 'Data Scientist',
    also: 'AI Expert',
    before: 'Ex Accountant',
    photo: nikita,
    href: 'https://www.linkedin.com/in/npolovinkin/',
  },
  {
    name: 'Joan Bergada',
    country: 'ES',
    role: 'Private Banker',
    also: 'EFA™-EFP™ CFA™',
    before: 'Ex Civil Engineer',
    photo: joan,
    href: 'https://www.linkedin.com/in/joan-bergada-efa%E2%84%A2-efp%E2%84%A2-a59b7b97/',
  },
  {
    name: 'Armelle Trilles',
    country: 'FR',
    role: 'Data Analyst',
    also: 'Forex Trader',
    before: 'Ex MENSA Member',
    photo: armelle,
    href: 'https://www.linkedin.com/in/armelle-trilles-56b4a95b/',
  },
];
