import type { Dict } from './en';

/** Italian, translated from en.ts. */
const it: Dict = {
  meta: {
    description:
      'Beenzer fissa le tue foto e i tuoi video nel punto esatto in cui li hai scattati. Segui gli amici, trovali sulla mappa e conserva qualsiasi momento come NFT su Solana, con luogo e ora scritti dentro.',
    skip: 'Vai al contenuto',
    home: 'Beenzer, home',
  },

  nav: {
    home: 'Home',
    how: 'Come funziona',
    onchain: 'On-chain',
    story: 'Storia',
    journal: 'Diario',
    faq: 'FAQ',
    follow: 'Segui i lavori',
    menu: 'Menu',
    main: 'Principale',
    mobile: 'Mobile',
    product: 'Un prodotto Nexow, Inc.',
    language: 'Lingua',
  },

  /** Shown to a visitor whose browser prefers Italian, on a page in another language. */
  suggest: {
    text: 'Questa pagina esiste anche in italiano.',
    go: 'Leggi in italiano',
    close: 'No, grazie',
  },

  places: {
    savigny: 'Savigny',
    lutry: 'Lutry',
    lausanne: 'Losanna',
    vevey: 'Vevey',
    tarifa: 'Tarifa',
    lisbon: 'Lisbona',
    berlin: 'Berlino',
    barcelona: 'Barcellona',
    lagos: 'Lagos',
    mexicoCity: 'Città del Messico',
    paris: 'Parigi',
  },

  hero: {
    status: 'In ricostruzione con Flutter · iOS e Android',
    lead: "Beenzer fissa le tue foto e i tuoi video nel punto esatto in cui li hai scattati. Segui gli amici, trovali sulla mappa e conserva qualsiasi momento come NFT su Solana, con il luogo e l'ora scritti dentro.",
    how: 'Scopri come funziona',
    follow: 'Segui i lavori',
    lat: 'Lat',
    lon: 'Long',
    alt: 'Alt',
    beats: ['Ogni foto è stata scattata *da qualche parte.*', 'Quasi tutte le app dimenticano dove. ==Beenzer lo conserva.=='],
    arrival: {
      title: 'Vincent è stato qui.',
      alt: 'La foto di BEENZER #18: un selfie di Vincent a casa.',
      token: 'Token',
      place: 'Luogo',
      coords: 'Coord.',
      seen: 'Visibile entro',
      supply: 'Tiratura',
      floor: 'prezzo minimo {price}',
      solscan: 'Verificalo su Solscan',
    },
    cue: 'Scorri per atterrare',
  },

  tour: {
    eyebrow: 'Come funziona',
    title: 'Una fotocamera, una mappa e la memoria dei luoghi.',
    steps: [
      {
        title: 'La mappa è casa tua.',
        body: "Ogni segnaposto è una foto o un video, lasciato esattamente dove è stato scattato. Toccane uno per vederlo, e per vedere chi c'era.",
      },
      {
        title: 'Scattalo.',
        body: 'Scatta una foto o gira un video, registra un audio o scegli qualcosa dalla galleria. Fino a 20 MB per post.',
      },
      {
        title: 'Fissalo.',
        body: 'Il tuo post atterra proprio dove ti trovi. Poi scegli chi può trovarlo: tutti, o solo chi si trova nel raggio che imposti tu.',
      },
      {
        title: 'Condividilo.',
        body: 'Segui gli amici e guarda i loro post sulla mappa o nel feed. Se vi seguite a vicenda, potete chattare.',
      },
      {
        title: 'Conialo.',
        body: "Qualsiasi post può diventare un NFT su Solana. Scegli quante edizioni possono esistere e il loro prezzo, approva in Phantom e l'edizione #1 arriva nel tuo wallet.",
      },
    ],
    try: 'Prova · visibile entro',
    radius: 'Raggio di visibilità in km',
    phone: {
      audio: 'Audio',
      photo: 'Foto',
      video: 'Video',
      newPost: 'Nuovo post',
      caption: 'Ora neon 💚',
      who: 'Chi può trovarlo',
      everyone: 'Tutti',
      nearby: 'Nei dintorni',
      within: 'Entro {distance}',
      editions: 'Edizioni',
      drop: 'Lascialo qui',
      friends: 'Amici',
      public: 'Pubblico',
      message: 'Ancora al lago? 🌅',
      mint: 'Conia su Solana',
      price: 'Prezzo unitario',
      royalties: 'Royalty',
      approve: 'Approva in Phantom',
      logs: [
        'Contenuto salvato su Arweave',
        'Metadati salvati su Arweave',
        'Coniato nella collezione Beenzer',
        'Edizione #1 inviata al tuo wallet',
      ],
    },
  },

  showcase: {
    card: '{name}, la scheda',
    alt: 'La foto coniata come BEENZER #18: Vincent che si scatta un selfie al chiuso.',
    description: 'Descrizione',
    meta: {
      city: 'Città',
      coordinates: 'Coordinate',
      date: 'Data',
      time: 'Ora UTC',
      visibility: 'Visibilità',
      supply: 'Tiratura',
      floor: 'Prezzo minimo',
      creator: 'Creatore',
    },
    eyebrow: 'Nero su bianco',
    title: "La prova che c'eri.",
    lead: 'Conia un post e il momento ci resta scritto dentro, per sempre. Questo è BEENZER #18, coniato a Savigny il 16 febbraio 2023. La sua foto e i suoi metadati sono ancora su Arweave, esattamente come sono stati scritti.',
    carries: [
      ['Chi', 'Wallet e nome utente del creatore'],
      ['Cosa', 'Il contenuto e il suo tipo: foto, video o audio'],
      ['Quando', 'Data e ora, in UTC'],
      ['Dove', 'Città, latitudine e longitudine'],
      ['Chi può vederlo', 'Il raggio di visibilità, come riquadro sulla mappa'],
      ['Quanti', 'Tiratura e prezzo minimo'],
    ],
    solscan: 'Vedi il #18 su Solscan',
  },

  onchain: {
    eyebrow: 'On-chain',
    title: 'Il tuo wallet è il tuo account.',
    lead: 'Beenzer gira su Solana. Accesso e conio avvengono entrambi in Phantom, e niente si muove senza la tua firma.',
    pillars: [
      {
        title: 'Accedi con una firma',
        body: 'Collega Phantom e firma un messaggio monouso. Niente email e nessuna password che possa trapelare.',
      },
      {
        title: 'Conservato su Arweave',
        body: "La foto, il video o l'audio e i relativi metadati finiscono su Arweave, uno storage fatto per durare. I video ricevono un'anteprima animata.",
      },
      {
        title: 'Edizioni limitate',
        body: 'Ogni conio è un NFT programmabile Metaplex nella collezione Beenzer, con il numero di edizioni che scegli tu.',
      },
      {
        title: 'Royalty che viaggiano',
        body: "Una royalty del 10% sulle rivendite, per l'80% al creatore e per il 20% a Beenzer, applicata da un set di regole Metaplex.",
      },
    ],
    pipeTitle: 'Cosa succede quando conii',
    pipeBody: 'Le richieste di conio aspettano in coda. Segui ogni passaggio in tempo reale nella tua inbox.',
    pipeline: [
      'Approvi in Phantom',
      'Pagamento confermato',
      'Contenuto su Arweave',
      'Metadati su Arweave',
      'NFT coniato',
      'Collezione verificata',
      'Edizione #1 a te',
    ],
    built: 'Realizzato con',
    roles: {
      chain: 'Blockchain',
      nft: 'Standard NFT',
      storage: 'Archiviazione',
      wallet: 'Wallet',
      apps: 'iOS e Android',
      map: 'La mappa',
      server: 'Server',
    },
  },

  story: {
    eyebrow: 'Storia',
    title: 'Qui dal 2022.',
    lead: 'Beenzer è nato nel 2022 come app social che coniava NFT direttamente dalla fotocamera del telefono, su Solana. Ora viene ricostruito da zero, attorno alla stessa idea: ogni momento conserva il suo luogo.',
    now: 'Ora',
    next: 'Prossimamente',
    timeline: [
      {
        title: 'Nasce Beenzer',
        body: 'Una dApp mobile su Solana, sviluppata in React Native: scattare, coniare, fissare sulla mappa.',
      },
      {
        title: 'BEENZER #18',
        body: 'Coniato a Savigny, in Svizzera. Ancora on-chain, ancora su Arweave, ancora il post su cui atterra questa pagina.',
      },
      {
        title: 'Una nuova casa da Nexow',
        body: 'Beenzer diventa un prodotto di Nexow, Inc. e riparte da una codebase nuova.',
      },
      {
        title: 'Ricostruito in Flutter',
        body: 'Una nuova app per iOS e Android, sullo stesso server: mappa, feed, chat, fotocamera e conio, in tema chiaro e scuro.',
      },
      {
        title: 'Lancio',
        body: 'Su App Store e Google Play. Segui i lavori per esserci quando arriva.',
      },
    ],
    video: "Una panoramica dell'app Beenzer originale",
    sound: 'Audio',
    caption: "L'app originale, in React Native",
  },

  team: {
    eyebrow: 'La squadra',
    title: 'Ingegneri, trader, artisti. Convinti.',
    lead: 'Il primo Beenzer è stato costruito da una squadra internazionale: software, dati, finanza e arte, da {count} paesi. Oggi lo sviluppa [{company}](company), fondata da due di loro.',
    numbers: ['zero', 'uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove', 'dieci', 'undici', 'dodici'],
    profile: 'Profilo di {name}',
    roles: {
      'Software Engineer': 'Ingegnere software',
      'Data Scientist': 'Data scientist',
      'Options Trader': 'Trader di opzioni',
      'Accounting Chief': 'Capo contabile',
      'Fitness King': 'Re del fitness',
      'Community Manager': 'Community manager',
      'Web3 Evangelist': 'Evangelista Web3',
      'Metaverse Evangelist': 'Evangelista del metaverso',
      'Operations Director': 'Direttore operativo',
      'Managing Partner': 'Socio amministratore',
      'Blockchain Manager': 'Responsabile blockchain',
      'Bitcoin Evangelist': 'Evangelista Bitcoin',
      'NFT Artist': 'Artista NFT',
      'NFT Promoter': 'Promozione NFT',
      'Electronic Engineer': 'Ingegnere elettronico',
      'AI Expert': 'Esperto di IA',
      'Private Banker': 'Private banker',
      'EFA™-EFP™ CFA™': 'EFA™-EFP™ CFA™',
      'Data Analyst': 'Data analyst',
      'Forex Trader': 'Trader forex',
      'Co-founder & CTO, Nexow': 'Cofondatore e CTO, Nexow',
      'Co-founder & CEO, Nexow': 'Cofondatore e CEO, Nexow',
    },
  },

  journal: {
    eyebrow: 'Diario',
    title: 'Appunti dalla mappa.',
    lead: "Notizie sull'app e guide a ciò che c'è sotto il cofano.",
    description: "Notizie da Beenzer e guide su geo-NFT, Solana e l'app.",
    all: 'Tutti gli articoli',
    read: 'Leggi',
    minutes: '{n} min',
    minRead: '{n} min di lettura',
    more: 'Continua a leggere',
    kinds: { News: 'Notizie', Guide: 'Guida' },
    untranslated: 'Questo articolo non è ancora stato tradotto, quindi eccolo in inglese.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Buone domande.',
    more: "Qualcos'altro? Scrivici tramite [Nexow](contact).",
    items: [
      {
        q: "Che cos'è Beenzer?",
        a: "Un'app geo-social per iOS e Android. Pubblichi foto e video dove li hai scattati, segui gli amici e trovi i loro post sulla mappa. Qualsiasi post può essere coniato come NFT su Solana.",
      },
      {
        q: 'Posso scaricarla?',
        a: "Non ancora. L'app è in ricostruzione con Flutter, e la versione originale in React Native non è più su Google Play. Segui @beenzer_app su X o Instagram per sapere il giorno in cui esce.",
      },
      {
        q: 'Mi serve un wallet crypto?',
        a: 'Sì: accedi con Phantom. Lo colleghi e firmi un messaggio monouso per dimostrare che il wallet è tuo, quindi niente email e niente password. Beenzer non vede mai le tue chiavi.',
      },
      {
        q: 'Quanto costa coniare?',
        a: "Una commissione di conio in SOL. L'app ti mostra la commissione, e il wallet a cui va, prima che tu approvi qualsiasi cosa in Phantom, e niente viene inviato senza la tua firma.",
      },
      {
        q: 'Chi può vedere quello che pubblico?',
        a: 'Scegli tu, post per post: tutti, o solo chi si trova entro un raggio che imposti tu. La mappa mostra a ciascuno i post nel cui raggio si trova, più quelli visibili in tutto il mondo.',
      },
      {
        q: 'Cosa contiene un post coniato?',
        a: "Il contenuto, conservato su Arweave, e i metadati con il tuo nome utente e il tuo wallet, la data e l'ora UTC, la città e le coordinate, il raggio di visibilità, la tiratura e il prezzo minimo. È un NFT programmabile Metaplex nella collezione Beenzer.",
      },
      {
        q: 'Cosa sono le edizioni e le royalty?',
        a: "Quando conii, scegli quante edizioni possono esistere e il loro prezzo. L'edizione #1 va a te. Ogni Beenzer viene coniato con una royalty del 10% sulle rivendite, per l'80% al creatore e per il 20% a Beenzer.",
      },
      {
        q: 'Quanto può essere grande un post?',
        a: 'Fino a 20 MB di contenuto e una descrizione fino a 2.000 caratteri.',
      },
      {
        q: 'Che fine hanno fatto la DAO di Beenzer e i suoi token?',
        a: "Facevano parte del progetto originale del 2022. La nuova app è costruita attorno ai post e alla mappa, e niente su questo sito è un'offerta di alcun token.",
      },
      {
        q: "Chi c'è dietro Beenzer?",
        a: '{company}, una società del Delaware che sviluppa software per clienti e app proprie. Beenzer è una di queste.',
      },
    ],
  },

  follow: {
    chip: 'Lavori in corso',
    title: 'Esserci quando ==atterra.==',
    lead: "Il nuovo Beenzer sta arrivando su iPhone e Android. Seguici per la prima anteprima, la beta e il giorno dell'uscita.",
    status: 'lavori in corso',
    press: 'Stampa, partner o investitori: [scrivi a Nexow](contact).',
  },

  footer: {
    body: 'Foto e video fissati al luogo in cui sono stati scattati, e ognuno può diventare un NFT su Solana. Ricostruito in Flutter per iOS e Android.',
    community: 'Community',
    company: 'Azienda',
    studio: 'Nexow Studio',
    atNexow: 'Beenzer da Nexow',
    contact: 'Contatti',
    notice: 'Note legali',
    productOf: 'Un prodotto di',
    legal: '© {year} {company} Tutti i diritti riservati. Beenzer è un prodotto di {company}, una società del Delaware.',
    languages: 'Lingue',
  },

  dao: {
    title: 'Beenzer DAO',
    description: 'La DAO di Beenzer e i suoi token facevano parte del progetto originale del 2022. Cosa fa Beenzer on-chain oggi.',
    eyebrow: 'La DAO',
    heading: 'La DAO era la prima bozza.',
    leads: [
      "Nel 2022 Beenzer era stato progettato attorno a una DAO, con due token propri. La nuova app, invece, è costruita attorno ai post e alla mappa. Niente su questo sito è un'offerta di alcun token.",
      'Cosa fa Beenzer on-chain oggi: accedi con Phantom, e qualsiasi post può essere coniato come NFT Metaplex su Solana, conservato su Arweave, con edizioni limitate e royalty per il suo creatore.',
    ],
    onchain: 'Come Beenzer usa Solana',
    faq: 'FAQ',
  },

  legal: {
    title: 'Note legali',
    description: 'Chi gestisce questo sito, cosa fa con i tuoi dati (niente) e le scritte in piccolo.',
    eyebrow: 'Note legali',
    heading: 'Le scritte in piccolo.',
    updated: 'Ultimo aggiornamento: {date}',
    sections: [
      {
        title: 'Chi gestisce questo sito',
        body: [
          'Questo sito è gestito da **{company}**, una società del Delaware costituita il {incorporated}. Beenzer è uno dei suoi prodotti. I dati della società e le sue politiche si trovano su [nexow.studio/legal](legal), e puoi contattarla tramite la [pagina dei contatti](contact).',
        ],
      },
      {
        title: 'I tuoi dati su questo sito',
        body: [
          'Questo sito non imposta cookie, non usa strumenti di analisi, pubblicità o tracker e non ha moduli. Font, immagini, video e dati cartografici del globo sono tutti serviti da questo sito stesso, quindi visitarlo non ti porta da nessun altro.',
          "Come per qualsiasi sito web, l'host che serve queste pagine può conservare i normali log tecnici, come un indirizzo IP e la versione del browser, per mantenere il sito funzionante e sicuro.",
          'I link a X, Instagram, YouTube, GitHub, Solscan o Arweave ti portano su quei servizi, dove valgono le loro politiche.',
          "Se scegli una lingua, o rifiuti la proposta di leggerne un'altra, il tuo browser conserva questa scelta sul tuo dispositivo, nella sua memoria locale, non in un cookie. Non viene mai inviata a nessuno.",
        ],
      },
      {
        title: "L'app",
        body: [
          "Queste note riguardano solo questo sito web. L'app Beenzer uscirà con i propri termini d'uso e la propria informativa sulla privacy.",
        ],
      },
      {
        title: "Non è un'offerta",
        body: [
          "Niente su questo sito costituisce un'offerta di acquisto o di vendita di alcun token, NFT o valore mobiliare, né una consulenza finanziaria. Le transazioni su blockchain non possono essere annullate, e il valore degli asset digitali può scendere così come salire.",
        ],
      },
      {
        title: 'Traduzioni',
        body: [
          'Questo sito è scritto in inglese e tradotto in altre lingue. In caso di differenze tra una traduzione e la versione inglese, fa fede la versione inglese.',
        ],
      },
      {
        title: 'Nomi e marchi',
        body: [
          'Il nome e il logo Beenzer appartengono a {company} Solana, Metaplex, Arweave, Phantom, Flutter, Google Maps, Node.js, Apple, Android, X, Instagram, YouTube e GitHub sono nomi dei rispettivi proprietari, usati qui solo per indicare con cosa funziona Beenzer.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Nessun segnaposto qui',
    description: 'Questa pagina non esiste.',
    code: '404 · Lat ?? · Long ??',
    heading: 'Qui non è stato fissato nulla.',
    lead: 'La pagina che cerchi è stata spostata, oppure non è mai stata pubblicata.',
    home: 'Torna alla mappa',
    journal: 'Leggi il diario',
  },
};

export default it;
