import type { Dict } from './en';

/** Dutch, translated from en.ts. */
const nl: Dict = {
  meta: {
    description:
      'Beenzer zet je foto’s en video’s precies op de plek waar je ze hebt gemaakt. Volg vrienden, vind ze op de kaart en bewaar elk moment als Solana-NFT, met plaats en tijd erin vastgelegd.',
    skip: 'Naar de inhoud',
    home: 'Beenzer, startpagina',
  },

  nav: {
    home: 'Home',
    how: 'Zo werkt het',
    onchain: 'On-chain',
    story: 'Verhaal',
    journal: 'Journal',
    faq: 'FAQ',
    follow: 'Blijf op de hoogte',
    menu: 'Menu',
    main: 'Hoofdnavigatie',
    mobile: 'Mobiele navigatie',
    product: 'Een product van Nexow, Inc.',
    language: 'Taal',
  },

  /** Shown to a visitor whose browser prefers Dutch, on a page in another language. */
  suggest: {
    text: 'Deze pagina is er ook in het Nederlands.',
    go: 'Lees in het Nederlands',
    close: 'Nee, bedankt',
  },

  places: {
    savigny: 'Savigny',
    lutry: 'Lutry',
    lausanne: 'Lausanne',
    vevey: 'Vevey',
    tarifa: 'Tarifa',
    lisbon: 'Lissabon',
    berlin: 'Berlijn',
    barcelona: 'Barcelona',
    lagos: 'Lagos',
    mexicoCity: 'Mexico-Stad',
    paris: 'Parijs',
  },

  hero: {
    status: 'Wordt opnieuw gebouwd in Flutter · iOS & Android',
    lead: 'Beenzer zet je foto’s en video’s precies op de plek waar je ze hebt gemaakt. Volg vrienden, vind ze op de kaart en bewaar elk moment als Solana-NFT, met de plek en de tijd erin vastgelegd.',
    how: 'Zo werkt het',
    follow: 'Blijf op de hoogte',
    lat: 'Breedte',
    lon: 'Lengte',
    alt: 'Hoogte',
    beats: ['Elke foto ontstaat *ergens.*', 'De meeste apps vergeten waar. ==Beenzer onthoudt het.=='],
    arrival: {
      title: 'Vincent was hier.',
      alt: 'De foto van BEENZER #18: een selfie van Vincent thuis.',
      token: 'Token',
      place: 'Plaats',
      coords: 'Coördinaten',
      seen: 'Zichtbaar binnen',
      supply: 'Oplage',
      floor: 'vanaf {price}',
      solscan: 'Controleer het op Solscan',
    },
    cue: 'Scroll om te landen',
  },

  tour: {
    eyebrow: 'Zo werkt het',
    title: 'Een camera, een kaart en een geheugen voor plekken.',
    steps: [
      {
        title: 'De kaart is je thuisbasis.',
        body: 'Elke pin is een foto of een video, achtergelaten op precies de plek waar hij is gemaakt. Tik erop en je ziet hem, en wie er was.',
      },
      {
        title: 'Leg het vast.',
        body: 'Maak een foto of video, neem een geluid op of kies iets uit je galerij. Tot 20 MB per post.',
      },
      {
        title: 'Pin het.',
        body: 'Je post landt waar je staat. Daarna kies je wie hem kan vinden: iedereen, of alleen mensen binnen de straal die jij instelt.',
      },
      {
        title: 'Deel het.',
        body: 'Volg vrienden en zie hun posts op de kaart of in je feed. Volgen jullie elkaar, dan kunnen jullie chatten.',
      },
      {
        title: 'Mint het.',
        body: 'Elke post kan een Solana-NFT worden. Kies hoeveel edities er kunnen bestaan en wat ze kosten, keur goed in Phantom, en editie #1 landt in je wallet.',
      },
    ],
    try: 'Probeer het · zichtbaar binnen',
    radius: 'Zichtbaarheidsstraal in km',
    phone: {
      audio: 'Audio',
      photo: 'Foto',
      video: 'Video',
      newPost: 'Nieuwe post',
      caption: 'Neonuur 💚',
      who: 'Wie het kan vinden',
      everyone: 'Iedereen',
      nearby: 'In de buurt',
      within: 'Binnen {distance}',
      editions: 'Edities',
      drop: 'Hier plaatsen',
      friends: 'Vrienden',
      public: 'Openbaar',
      message: 'Nog bij het meer? 🌅',
      mint: 'Minten op Solana',
      price: 'Prijs per editie',
      royalties: 'Royalty’s',
      approve: 'Goedkeuren in Phantom',
      logs: [
        'Media opgeslagen op Arweave',
        'Metadata opgeslagen op Arweave',
        'Gemint in de Beenzer-collectie',
        'Editie #1 naar je wallet gestuurd',
      ],
    },
  },

  showcase: {
    card: '{name}, de kaart',
    alt: 'De foto die als BEENZER #18 is gemint: Vincent die binnen een selfie maakt.',
    description: 'Beschrijving',
    meta: {
      city: 'Stad',
      coordinates: 'Coördinaten',
      date: 'Datum',
      time: 'Tijd UTC',
      visibility: 'Zichtbaarheid',
      supply: 'Oplage',
      floor: 'Bodemprijs',
      creator: 'Maker',
    },
    eyebrow: 'Vastgelegd',
    title: 'Bewijs dat je er was.',
    lead: 'Mint een post en het moment wordt erin vastgelegd, voorgoed. Dit is BEENZER #18, gemint in Savigny op 16 februari 2023. De foto en de metadata staan nog altijd op Arweave, precies zoals ze zijn weggeschreven.',
    carries: [
      ['Wie', 'Wallet en gebruikersnaam van de maker'],
      ['Wat', 'De media en het type: foto, video of geluid'],
      ['Wanneer', 'Datum en tijd, in UTC'],
      ['Waar', 'Stad, breedte- en lengtegraad'],
      ['Wie het kan zien', 'De zichtbaarheidsstraal, als rechthoek op de kaart'],
      ['Hoeveel', 'Oplage en bodemprijs'],
    ],
    solscan: 'Bekijk #18 op Solscan',
  },

  onchain: {
    eyebrow: 'On-chain',
    title: 'Je wallet is je account.',
    lead: 'Beenzer draait op Solana. Inloggen en minten gaan allebei via Phantom, en er beweegt niets zonder jouw handtekening.',
    pillars: [
      {
        title: 'Inloggen met een handtekening',
        body: 'Koppel Phantom en onderteken een eenmalig bericht. Geen e-mail, en geen wachtwoord dat kan uitlekken.',
      },
      {
        title: 'Bewaard op Arweave',
        body: 'De foto, video of het geluid en de metadata gaan naar Arweave, opslag die gemaakt is om te blijven. Video’s krijgen een geanimeerde preview.',
      },
      {
        title: 'Gelimiteerde edities',
        body: 'Elke mint is een programmeerbare Metaplex-NFT in de Beenzer-collectie, met zoveel edities als jij kiest.',
      },
      {
        title: 'Royalty’s die meereizen',
        body: 'Een royalty van 10% op doorverkopen, waarvan 80% naar de maker en 20% naar Beenzer, afgedwongen door een Metaplex-regelset.',
      },
    ],
    pipeTitle: 'Wat er gebeurt als je mint',
    pipeBody: 'Mints wachten in een wachtrij. Je volgt elke stap live in je inbox.',
    pipeline: [
      'Jij keurt goed in Phantom',
      'Betaling bevestigd',
      'Media naar Arweave',
      'Metadata naar Arweave',
      'NFT gemint',
      'Collectie geverifieerd',
      'Editie #1 naar jou',
    ],
    built: 'Gebouwd met',
    roles: {
      chain: 'Blockchain',
      nft: 'NFT-standaard',
      storage: 'Opslag',
      wallet: 'Wallet',
      apps: 'iOS & Android',
      map: 'De kaart',
      server: 'Server',
    },
  },

  story: {
    eyebrow: 'Verhaal',
    title: 'Er al sinds 2022.',
    lead: 'Beenzer begon in 2022 als sociale app die rechtstreeks vanuit de telefooncamera mintte, op Solana. Nu wordt Beenzer van de grond af opnieuw gebouwd, rond hetzelfde idee: elk moment houdt zijn plek.',
    now: 'Nu',
    next: 'Hierna',
    timeline: [
      {
        title: 'Beenzer begint',
        body: 'Een mobiele dApp op Solana, gebouwd in React Native: vastleggen, minten, op de kaart zetten.',
      },
      {
        title: 'BEENZER #18',
        body: 'Gemint in Savigny, Zwitserland. Nog steeds on-chain, nog steeds op Arweave, nog steeds de post waarop deze pagina landt.',
      },
      {
        title: 'Een nieuw thuis bij Nexow',
        body: 'Beenzer wordt een product van Nexow, Inc. en krijgt een nieuwe codebase.',
      },
      {
        title: 'Opnieuw gebouwd in Flutter',
        body: 'Een nieuwe app voor iOS en Android, op dezelfde server: kaart, feed, chat, camera en minten, in licht en donker.',
      },
      {
        title: 'Lancering',
        body: 'In de App Store en op Google Play. Blijf op de hoogte en wees erbij als de app landt.',
      },
    ],
    video: 'Een rondleiding door de oorspronkelijke Beenzer-app',
    sound: 'Geluid',
    caption: 'De oorspronkelijke app, in React Native',
  },

  team: {
    eyebrow: 'De crew',
    title: 'Ingenieurs, traders, kunstenaars. Gelovers.',
    lead: 'De eerste versie van Beenzer werd gebouwd door een internationale crew: software, data, financiën en kunst, uit {count} landen. Vandaag wordt Beenzer gebouwd bij [{company}](company), opgericht door twee van hen.',
    numbers: ['nul', 'één', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen', 'tien', 'elf', 'twaalf'],
    profile: '{name}, profiel',
    roles: {
      'Software Engineer': 'Softwareontwikkelaar',
      'Data Scientist': 'Data scientist',
      'Options Trader': 'Optiehandelaar',
      'Accounting Chief': 'Hoofd boekhouding',
      'Fitness King': 'Fitnesskoning',
      'Community Manager': 'Communitymanager',
      'Web3 Evangelist': 'Web3-evangelist',
      'Metaverse Evangelist': 'Metaverse-evangelist',
      'Operations Director': 'Operationeel directeur',
      'Managing Partner': 'Managing partner',
      'Blockchain Manager': 'Blockchainmanager',
      'Bitcoin Evangelist': 'Bitcoin-evangelist',
      'NFT Artist': 'NFT-kunstenaar',
      'NFT Promoter': 'NFT-promotor',
      'Electronic Engineer': 'Elektrotechnisch ingenieur',
      'AI Expert': 'AI-expert',
      'Private Banker': 'Private banker',
      'EFA™-EFP™ CFA™': 'EFA™-EFP™ CFA™',
      'Data Analyst': 'Data-analist',
      'Forex Trader': 'Valutahandelaar',
      'Co-founder & CTO, Nexow': 'Medeoprichter & CTO, Nexow',
      'Co-founder & CEO, Nexow': 'Medeoprichter & CEO, Nexow',
    },
  },

  journal: {
    eyebrow: 'Journal',
    title: 'Notities van de kaart.',
    lead: 'Nieuws over de app, en uitleg over wat eronder zit.',
    description: 'Nieuws van Beenzer, en uitleg over geo-NFT’s, Solana en de app.',
    all: 'Alle artikelen',
    read: 'Lees',
    minutes: '{n} min',
    minRead: '{n} min leestijd',
    more: 'Lees verder',
    kinds: { News: 'Nieuws', Guide: 'Gids' },
    untranslated: 'Dit artikel is nog niet vertaald, dus je leest het hier in het Engels.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Goede vragen.',
    more: 'Nog iets anders? Schrijf ons via [Nexow](contact).',
    items: [
      {
        q: 'Wat is Beenzer?',
        a: 'Een geosociale app voor iOS en Android. Je post foto’s en video’s waar je ze hebt gemaakt, volgt vrienden en vindt hun posts op de kaart. Elke post kan worden gemint als NFT op Solana.',
      },
      {
        q: 'Kan ik Beenzer downloaden?',
        a: 'Nog niet. De app wordt opnieuw gebouwd in Flutter, en de oorspronkelijke React Native-versie staat niet meer op Google Play. Volg @beenzer_app op X of Instagram om te horen op welke dag hij uitkomt.',
      },
      {
        q: 'Heb ik een cryptowallet nodig?',
        a: 'Ja: met Phantom log je in. Je koppelt de wallet en ondertekent een eenmalig bericht om te bewijzen dat hij van jou is, dus er is geen e-mail en geen wachtwoord. Beenzer ziet je sleutels nooit.',
      },
      {
        q: 'Wat kost minten?',
        a: 'Een mintvergoeding in SOL. De app laat de vergoeding zien, en de wallet waar die naartoe gaat, voordat je iets goedkeurt in Phantom, en er wordt niets verstuurd zonder jouw handtekening.',
      },
      {
        q: 'Wie ziet wat ik post?',
        a: 'Dat kies je per post: iedereen, of alleen mensen binnen een straal die je instelt. De kaart laat iedereen de posts zien binnen wier straal ze zich bevinden, plus de wereldwijde.',
      },
      {
        q: 'Wat zit er in een geminte post?',
        a: 'De media, bewaard op Arweave, en metadata met je gebruikersnaam en wallet, de datum en UTC-tijd, de stad en coördinaten, de zichtbaarheidsstraal, de oplage en de bodemprijs. Het is een programmeerbare Metaplex-NFT in de Beenzer-collectie.',
      },
      {
        q: 'Wat zijn edities en royalty’s?',
        a: 'Bij het minten kies je hoeveel edities er kunnen bestaan en wat ze kosten. Editie #1 gaat naar jou. Elke Beenzer wordt gemint met een royalty van 10% op doorverkopen, waarvan 80% voor de maker en 20% voor Beenzer.',
      },
      {
        q: 'Hoe groot mag een post zijn?',
        a: 'Tot 20 MB aan media, en een beschrijving van maximaal 2.000 tekens.',
      },
      {
        q: 'Wat is er gebeurd met de Beenzer-DAO en de bijbehorende tokens?',
        a: 'Die hoorden bij het oorspronkelijke ontwerp uit 2022. De nieuwe app draait om posts en de kaart, en niets op deze site is een aanbod van welke token dan ook.',
      },
      {
        q: 'Wie zit er achter Beenzer?',
        a: '{company}, een vennootschap naar het recht van Delaware die software voor klanten bouwt en eigen apps maakt. Beenzer is er een van.',
      },
    ],
  },

  follow: {
    chip: 'In de maak',
    title: 'Wees erbij als Beenzer ==landt.==',
    lead: 'De nieuwe Beenzer komt naar iPhone en Android. Blijf op de hoogte voor de eerste blik, de bèta en de dag dat hij uitkomt.',
    status: 'in de maak',
    press: 'Pers, partners of investeerders: [schrijf naar Nexow](contact).',
  },

  footer: {
    body: 'Foto’s en video’s vastgepind op de plek waar ze zijn gemaakt, en elk ervan kan een Solana-NFT worden. Opnieuw gebouwd in Flutter voor iOS en Android.',
    community: 'Community',
    company: 'Bedrijf',
    studio: 'Nexow Studio',
    atNexow: 'Beenzer bij Nexow',
    contact: 'Contact',
    notice: 'Juridische informatie',
    productOf: 'Een product van',
    legal: '© {year} {company} Alle rechten voorbehouden. Beenzer is een product van {company}, een vennootschap naar het recht van Delaware.',
    languages: 'Talen',
  },

  dao: {
    title: 'Beenzer-DAO',
    description: 'De Beenzer-DAO en de bijbehorende tokens hoorden bij het oorspronkelijke ontwerp uit 2022. Wat Beenzer vandaag on-chain doet.',
    eyebrow: 'De DAO',
    heading: 'De DAO was het eerste ontwerp.',
    leads: [
      'In 2022 was Beenzer ontworpen rond een DAO, met twee eigen tokens. De nieuwe app draait in plaats daarvan om posts en de kaart. Niets op deze site is een aanbod van welke token dan ook.',
      'Wat Beenzer vandaag on-chain doet: je logt in met Phantom, en elke post kan worden gemint als Metaplex-NFT op Solana, bewaard op Arweave, met gelimiteerde edities en royalty’s voor de maker.',
    ],
    onchain: 'Hoe Beenzer Solana gebruikt',
    faq: 'FAQ',
  },

  legal: {
    title: 'Juridische informatie',
    description: 'Wie deze site beheert, wat hij met je gegevens doet (niets) en de kleine lettertjes.',
    eyebrow: 'Juridische informatie',
    heading: 'De kleine lettertjes.',
    updated: 'Laatst bijgewerkt op {date}',
    sections: [
      {
        title: 'Wie deze site beheert',
        body: [
          'Deze website wordt beheerd door **{company}**, een vennootschap naar het recht van Delaware, opgericht op {incorporated}. Beenzer is een van haar producten. De bedrijfsgegevens en het eigen beleid van het bedrijf staan op [nexow.studio/legal](legal), en je bereikt het bedrijf via de [contactpagina](contact).',
        ],
      },
      {
        title: 'Je gegevens op deze site',
        body: [
          'Deze site plaatst geen cookies, gebruikt geen analytics, advertenties of trackers en heeft geen formulieren. Lettertypen, afbeeldingen, video’s en de kaartgegevens van de globe komen allemaal van deze site zelf, dus een bezoek stuurt je naar niemand anders.',
          'Zoals bij elke website kan de host die deze pagina’s levert standaard technische logs bijhouden, zoals een IP-adres en een browserversie, om de site draaiende en veilig te houden.',
          'Links naar X, Instagram, YouTube, GitHub, Solscan of Arweave brengen je naar die diensten, en daar geldt hun eigen beleid.',
          'Kies je een taal, of sla je het aanbod van een andere taal af, dan bewaart je browser die keuze op je apparaat, in de lokale opslag en niet in een cookie. Die keuze wordt nooit naar iemand verstuurd.',
        ],
      },
      {
        title: 'De app',
        body: [
          'Deze informatie geldt alleen voor deze website. De Beenzer-app verschijnt met eigen gebruiksvoorwaarden en een eigen privacybeleid.',
        ],
      },
      {
        title: 'Geen aanbod',
        body: [
          'Niets op deze site is een aanbod om een token, NFT of effect te kopen of te verkopen, of financieel advies. Blockchaintransacties kunnen niet ongedaan worden gemaakt, en de waarde van digitale activa kan zowel dalen als stijgen.',
        ],
      },
      {
        title: 'Vertalingen',
        body: [
          'Deze site is in het Engels geschreven en in andere talen vertaald. Als een vertaling en de Engelse versie van elkaar verschillen, geldt de Engelse versie.',
        ],
      },
      {
        title: 'Namen en merken',
        body: [
          'De naam en het logo van Beenzer zijn van {company} Solana, Metaplex, Arweave, Phantom, Flutter, Google Maps, Node.js, Apple, Android, X, Instagram, YouTube en GitHub zijn de namen van hun respectieve eigenaren en worden hier alleen gebruikt om te zeggen waarmee Beenzer werkt.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Niets vastgepind',
    description: 'Deze pagina bestaat niet.',
    code: '404 · Breedte ?? · Lengte ??',
    heading: 'Hier is niets vastgepind.',
    lead: 'De pagina die je zoekt is verhuisd, of is nooit gepost.',
    home: 'Terug naar de kaart',
    journal: 'Lees het journal',
  },
};

export default nl;
