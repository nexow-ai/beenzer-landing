import type { Dict } from './en';

/** German, translated from en.ts. */
const de: Dict = {
  meta: {
    description:
      'Beenzer pinnt deine Fotos und Videos genau an den Ort, an dem du sie aufgenommen hast. Folge Freunden, finde sie auf der Karte und halte jeden Moment als Solana-NFT fest, mit Ort und Zeit darin eingeschrieben.',
    skip: 'Zum Inhalt springen',
    home: 'Beenzer, Startseite',
  },

  nav: {
    home: 'Start',
    how: 'So funktioniert’s',
    onchain: 'On-Chain',
    story: 'Geschichte',
    journal: 'Journal',
    faq: 'FAQ',
    follow: 'Dranbleiben',
    menu: 'Menü',
    main: 'Hauptnavigation',
    mobile: 'Mobile Navigation',
    product: 'Ein Produkt von Nexow, Inc.',
    language: 'Sprache',
  },

  /** Shown to a visitor whose browser prefers German, on a page in another language. */
  suggest: {
    text: 'Diese Seite gibt es auch auf Deutsch.',
    go: 'Auf Deutsch lesen',
    close: 'Nein danke',
  },

  places: {
    savigny: 'Savigny',
    lutry: 'Lutry',
    lausanne: 'Lausanne',
    vevey: 'Vevey',
    tarifa: 'Tarifa',
    lisbon: 'Lissabon',
    berlin: 'Berlin',
    barcelona: 'Barcelona',
    lagos: 'Lagos',
    mexicoCity: 'Mexiko-Stadt',
    paris: 'Paris',
  },

  hero: {
    status: 'Wird in Flutter neu gebaut · iOS & Android',
    lead: 'Beenzer pinnt deine Fotos und Videos genau an den Ort, an dem du sie aufgenommen hast. Folge Freunden, finde sie auf der Karte und halte jeden Moment als Solana-NFT fest, mit Ort und Zeit fest darin eingeschrieben.',
    how: 'So funktioniert’s',
    follow: 'Dranbleiben',
    lat: 'Breite',
    lon: 'Länge',
    alt: 'Höhe',
    beats: ['Jedes Foto entsteht *irgendwo.*', 'Die meisten Apps vergessen, wo. ==Beenzer merkt es sich.=='],
    arrival: {
      title: 'Vincent war hier.',
      alt: 'Das Foto von BEENZER #18: ein Selfie von Vincent zu Hause.',
      token: 'Token',
      place: 'Ort',
      coords: 'Koordinaten',
      seen: 'Sichtbar im Umkreis',
      supply: 'Auflage',
      floor: 'ab {price}',
      solscan: 'Auf Solscan prüfen',
    },
    cue: 'Zum Landen scrollen',
  },

  tour: {
    eyebrow: 'So funktioniert’s',
    title: 'Eine Kamera, eine Karte und ein Gedächtnis für Orte.',
    steps: [
      {
        title: 'Die Karte ist dein Zuhause.',
        body: 'Jeder Pin ist ein Foto oder ein Video, genau dort hinterlassen, wo es aufgenommen wurde. Tipp einen an, dann siehst du es und wer dort war.',
      },
      {
        title: 'Knipsen.',
        body: 'Mach ein Foto oder Video, nimm einen Sound auf oder wähl etwas aus deiner Galerie. Bis zu 20 MB pro Beitrag.',
      },
      {
        title: 'Pinnen.',
        body: 'Dein Beitrag landet genau dort, wo du stehst. Dann wählst du, wer ihn finden kann: alle oder nur Leute innerhalb des Radius, den du festlegst.',
      },
      {
        title: 'Teilen.',
        body: 'Folge Freunden und sieh ihre Beiträge auf der Karte oder in deinem Feed. Folgt ihr euch gegenseitig, könnt ihr chatten.',
      },
      {
        title: 'Minten.',
        body: 'Jeder Beitrag kann ein Solana-NFT werden. Leg fest, wie viele Editionen es geben kann und was sie kosten, gib in Phantom frei, und Edition #1 landet in deiner Wallet.',
      },
    ],
    try: 'Probier’s aus · sichtbar im Umkreis von',
    radius: 'Sichtbarkeitsradius in km',
    phone: {
      audio: 'Audio',
      photo: 'Foto',
      video: 'Video',
      newPost: 'Neuer Beitrag',
      caption: 'Neonstunde 💚',
      who: 'Wer ihn finden kann',
      everyone: 'Alle',
      nearby: 'In der Nähe',
      within: 'Im Umkreis von {distance}',
      editions: 'Editionen',
      drop: 'Hier platzieren',
      friends: 'Freunde',
      public: 'Öffentlich',
      message: 'Noch am See? 🌅',
      mint: 'Auf Solana minten',
      price: 'Preis je Edition',
      royalties: 'Tantiemen',
      approve: 'In Phantom freigeben',
      logs: [
        'Medium auf Arweave gespeichert',
        'Metadaten auf Arweave gespeichert',
        'In der Beenzer-Kollektion gemintet',
        'Edition #1 an deine Wallet gesendet',
      ],
    },
  },

  showcase: {
    card: '{name}, die Karte',
    alt: 'Das als BEENZER #18 gemintete Foto: Vincent macht drinnen ein Selfie.',
    description: 'Beschreibung',
    meta: {
      city: 'Stadt',
      coordinates: 'Koordinaten',
      date: 'Datum',
      time: 'Uhrzeit UTC',
      visibility: 'Sichtbarkeit',
      supply: 'Auflage',
      floor: 'Mindestpreis',
      creator: 'Creator',
    },
    eyebrow: 'Festgehalten',
    title: 'Der Beweis, dass du da warst.',
    lead: 'Wenn du einen Beitrag mintest, wird der Moment für immer darin festgeschrieben. Das ist BEENZER #18, gemintet in Savigny am 16. Februar 2023. Sein Foto und seine Metadaten liegen noch immer auf Arweave, genau so, wie sie geschrieben wurden.',
    carries: [
      ['Wer', 'Wallet und Benutzername des Creators'],
      ['Was', 'Das Medium und sein Typ: Foto, Video oder Sound'],
      ['Wann', 'Datum und Uhrzeit in UTC'],
      ['Wo', 'Stadt, Breiten- und Längengrad'],
      ['Wer es sehen kann', 'Der Sichtbarkeitsradius als Rechteck auf der Karte'],
      ['Wie viele', 'Auflage und Mindestpreis'],
    ],
    solscan: '#18 auf Solscan ansehen',
  },

  onchain: {
    eyebrow: 'On-Chain',
    title: 'Deine Wallet ist dein Konto.',
    lead: 'Beenzer läuft auf Solana. Anmelden und Minten laufen beide über Phantom, und ohne deine Signatur bewegt sich nichts.',
    pillars: [
      {
        title: 'Anmelden per Signatur',
        body: 'Verbinde Phantom und signiere eine einmalige Nachricht. Keine E-Mail und kein Passwort, das geleakt werden kann.',
      },
      {
        title: 'Gespeichert auf Arweave',
        body: 'Foto, Video oder Sound und die Metadaten landen auf Arweave, einem Speicher, der auf Dauer angelegt ist. Videos bekommen eine animierte Vorschau.',
      },
      {
        title: 'Limitierte Editionen',
        body: 'Jeder Mint ist ein programmierbares Metaplex-NFT in der Beenzer-Kollektion, mit so vielen Editionen, wie du festlegst.',
      },
      {
        title: 'Tantiemen, die mitreisen',
        body: '10 % Tantiemen auf Weiterverkäufe, davon 80 % für den Creator und 20 % für Beenzer, durchgesetzt durch ein Metaplex-Regelwerk.',
      },
    ],
    pipeTitle: 'Was beim Minten passiert',
    pipeBody: 'Mints warten in einer Warteschlange. Jeden Schritt verfolgst du live in deinem Posteingang.',
    pipeline: [
      'Du gibst in Phantom frei',
      'Zahlung bestätigt',
      'Medium auf Arweave',
      'Metadaten auf Arweave',
      'NFT gemintet',
      'Kollektion verifiziert',
      'Edition #1 an dich',
    ],
    built: 'Gebaut mit',
    roles: {
      chain: 'Blockchain',
      nft: 'NFT-Standard',
      storage: 'Speicher',
      wallet: 'Wallet',
      apps: 'iOS & Android',
      map: 'Die Karte',
      server: 'Server',
    },
  },

  story: {
    eyebrow: 'Geschichte',
    title: 'Seit 2022 dabei.',
    lead: 'Beenzer begann 2022 als Social-App, die direkt aus der Handykamera mintete, auf Solana. Jetzt wird Beenzer von Grund auf neu gebaut, rund um dieselbe Idee: Jeder Moment behält seinen Ort.',
    now: 'Jetzt',
    next: 'Als Nächstes',
    timeline: [
      {
        title: 'Beenzer startet',
        body: 'Eine mobile dApp auf Solana, gebaut in React Native: knipsen, minten, auf die Karte setzen.',
      },
      {
        title: 'BEENZER #18',
        body: 'Gemintet in Savigny in der Schweiz. Immer noch on-chain, immer noch auf Arweave, immer noch der Beitrag, auf dem diese Seite landet.',
      },
      {
        title: 'Ein neues Zuhause bei Nexow',
        body: 'Beenzer wird ein Produkt von Nexow, Inc. und bekommt eine neue Codebasis.',
      },
      {
        title: 'Neu gebaut in Flutter',
        body: 'Eine neue App für iOS und Android, auf demselben Server: Karte, Feed, Chat, Kamera und Mint, in Hell und Dunkel.',
      },
      {
        title: 'Start',
        body: 'Im App Store und bei Google Play. Bleib dran und sei dabei, wenn die App landet.',
      },
    ],
    video: 'Ein Rundgang durch die ursprüngliche Beenzer-App',
    sound: 'Ton',
    caption: 'Die ursprüngliche App, in React Native',
  },

  team: {
    eyebrow: 'Die Crew',
    title: 'Ingenieure, Trader, Künstler. Überzeugte.',
    lead: 'Die erste Version von Beenzer baute eine internationale Crew: Software, Daten, Finanzen und Kunst, aus {count} Ländern. Heute entsteht Beenzer bei [{company}](company), gegründet von zweien aus dieser Crew.',
    numbers: ['null', 'einem', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf'],
    profile: '{name}, Profil',
    roles: {
      'Software Engineer': 'Softwareentwickler',
      'Data Scientist': 'Data Scientist',
      'Options Trader': 'Optionshändler',
      'Accounting Chief': 'Leiter Buchhaltung',
      'Fitness King': 'Fitnesskönig',
      'Community Manager': 'Community Manager',
      'Web3 Evangelist': 'Web3-Evangelistin',
      'Metaverse Evangelist': 'Metaverse-Evangelist',
      'Operations Director': 'Leiter Operations',
      'Managing Partner': 'Geschäftsführender Partner',
      'Blockchain Manager': 'Blockchain-Manager',
      'Bitcoin Evangelist': 'Bitcoin-Evangelist',
      'NFT Artist': 'NFT-Künstlerin',
      'NFT Promoter': 'NFT-Promoterin',
      'Electronic Engineer': 'Elektronikingenieur',
      'AI Expert': 'KI-Experte',
      'Private Banker': 'Private Banker',
      'EFA™-EFP™ CFA™': 'EFA™-EFP™ CFA™',
      'Data Analyst': 'Datenanalystin',
      'Forex Trader': 'Devisenhändlerin',
      'Co-founder & CTO, Nexow': 'Mitgründer & CTO, Nexow',
      'Co-founder & CEO, Nexow': 'Mitgründer & CEO, Nexow',
    },
  },

  journal: {
    eyebrow: 'Journal',
    title: 'Notizen von der Karte.',
    lead: 'Neues zur App und Guides zu dem, was dahintersteckt.',
    description: 'Neuigkeiten von Beenzer und Guides zu Geo-NFTs, Solana und der App.',
    all: 'Alle Beiträge',
    read: 'Lesen',
    minutes: '{n} Min.',
    minRead: '{n} Min. Lesezeit',
    more: 'Weiterlesen',
    kinds: { News: 'News', Guide: 'Guide' },
    untranslated: 'Dieser Artikel ist noch nicht übersetzt, deshalb steht er hier auf Englisch.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Gute Fragen.',
    more: 'Noch etwas anderes? Schreib uns über [Nexow](contact).',
    items: [
      {
        q: 'Was ist Beenzer?',
        a: 'Eine Geo-Social-App für iOS und Android. Du postest Fotos und Videos dort, wo du sie aufgenommen hast, folgst Freunden und findest ihre Beiträge auf der Karte. Jeder Beitrag kann als NFT auf Solana gemintet werden.',
      },
      {
        q: 'Kann ich Beenzer herunterladen?',
        a: 'Noch nicht. Die App wird gerade in Flutter neu gebaut, und die ursprüngliche React-Native-Version ist nicht mehr bei Google Play. Folge @beenzer_app auf X oder Instagram, dann erfährst du, an welchem Tag sie erscheint.',
      },
      {
        q: 'Brauche ich eine Krypto-Wallet?',
        a: 'Ja: Mit Phantom meldest du dich an. Du verbindest die Wallet und signierst eine einmalige Nachricht, die beweist, dass sie dir gehört. Es gibt also keine E-Mail und kein Passwort. Beenzer sieht deine Schlüssel nie.',
      },
      {
        q: 'Was kostet das Minten?',
        a: 'Eine Mint-Gebühr in SOL. Die App zeigt dir die Gebühr und die Wallet, an die sie geht, bevor du in Phantom irgendetwas freigibst, und ohne deine Signatur wird nichts gesendet.',
      },
      {
        q: 'Wer sieht, was ich poste?',
        a: 'Das entscheidest du, Beitrag für Beitrag: alle oder nur Leute innerhalb eines Radius, den du festlegst. Die Karte zeigt jeder Person die Beiträge, in deren Radius sie sich befindet, dazu die weltweit sichtbaren.',
      },
      {
        q: 'Was enthält ein geminteter Beitrag?',
        a: 'Das Medium, gespeichert auf Arweave, und Metadaten mit deinem Benutzernamen und deiner Wallet, dem Datum und der UTC-Uhrzeit, der Stadt und den Koordinaten, dem Sichtbarkeitsradius, der Auflage und dem Mindestpreis. Es ist ein programmierbares Metaplex-NFT in der Beenzer-Kollektion.',
      },
      {
        q: 'Was sind Editionen und Tantiemen?',
        a: 'Beim Minten legst du fest, wie viele Editionen es geben kann und was sie kosten. Edition #1 geht an dich. Jedes Beenzer-NFT wird mit 10 % Tantiemen auf Weiterverkäufe gemintet, davon 80 % für den Creator und 20 % für Beenzer.',
      },
      {
        q: 'Wie groß darf ein Beitrag sein?',
        a: 'Bis zu 20 MB an Medien und eine Beschreibung mit bis zu 2.000 Zeichen.',
      },
      {
        q: 'Was ist aus der Beenzer-DAO und ihren Tokens geworden?',
        a: 'Sie gehörten zum ursprünglichen Konzept von 2022. Die neue App dreht sich um Beiträge und die Karte, und nichts auf dieser Website ist ein Angebot für irgendeinen Token.',
      },
      {
        q: 'Wer steckt hinter Beenzer?',
        a: '{company}, eine in Delaware eingetragene Kapitalgesellschaft, die Software für Kunden und eigene Apps entwickelt. Beenzer ist eine davon.',
      },
    ],
  },

  follow: {
    chip: 'In Arbeit',
    title: 'Sei dabei, wenn Beenzer ==landet.==',
    lead: 'Das neue Beenzer kommt auf iPhone und Android. Bleib dran für den ersten Blick, die Beta und den Tag, an dem es erscheint.',
    status: 'in Arbeit',
    press: 'Presse, Partner oder Investoren: [schreib Nexow](contact).',
  },

  footer: {
    body: 'Fotos und Videos, gepinnt an den Ort, an dem sie entstanden sind, und jedes davon kann ein Solana-NFT werden. Neu gebaut in Flutter für iOS und Android.',
    community: 'Community',
    company: 'Unternehmen',
    studio: 'Nexow Studio',
    atNexow: 'Beenzer bei Nexow',
    contact: 'Kontakt',
    notice: 'Rechtliche Hinweise',
    productOf: 'Ein Produkt von',
    legal: '© {year} {company} Alle Rechte vorbehalten. Beenzer ist ein Produkt von {company}, einer in Delaware eingetragenen Kapitalgesellschaft.',
    languages: 'Sprachen',
  },

  dao: {
    title: 'Beenzer-DAO',
    description: 'Die Beenzer-DAO und ihre Tokens gehörten zum ursprünglichen Konzept von 2022. Was Beenzer heute on-chain macht.',
    eyebrow: 'Die DAO',
    heading: 'Die DAO war der erste Entwurf.',
    leads: [
      '2022 war Beenzer rund um eine DAO mit zwei eigenen Tokens konzipiert. Die neue App dreht sich stattdessen um Beiträge und die Karte. Nichts auf dieser Website ist ein Angebot für irgendeinen Token.',
      'Was Beenzer heute on-chain macht: Du meldest dich mit Phantom an, und jeder Beitrag kann als Metaplex-NFT auf Solana gemintet werden, gespeichert auf Arweave, mit limitierten Editionen und Tantiemen für den Creator.',
    ],
    onchain: 'Wie Beenzer Solana nutzt',
    faq: 'FAQ',
  },

  legal: {
    title: 'Rechtliche Hinweise',
    description: 'Wer diese Website betreibt, was sie mit deinen Daten macht (nichts) und das Kleingedruckte.',
    eyebrow: 'Rechtliche Hinweise',
    heading: 'Das Kleingedruckte.',
    updated: 'Zuletzt aktualisiert am {date}',
    sections: [
      {
        title: 'Wer diese Website betreibt',
        body: [
          'Diese Website wird von **{company}** betrieben, einer am {incorporated} in Delaware eingetragenen Kapitalgesellschaft. Beenzer ist eines ihrer Produkte. Die Angaben zum Unternehmen und seine eigenen Richtlinien stehen auf [nexow.studio/legal](legal), und erreichen kannst du es über die [Kontaktseite](contact).',
        ],
      },
      {
        title: 'Deine Daten auf dieser Website',
        body: [
          'Diese Website setzt keine Cookies, nutzt keine Analyse-Tools, Werbung oder Tracker und hat keine Formulare. Schriften, Bilder, Videos und die Kartendaten des Globus werden alle von dieser Website selbst ausgeliefert, ein Besuch schickt dich also zu niemandem sonst.',
          'Wie bei jeder Website kann der Hoster, der diese Seiten ausliefert, übliche technische Logs speichern, etwa eine IP-Adresse und eine Browserversion, um die Website am Laufen und sicher zu halten.',
          'Links zu X, Instagram, YouTube, GitHub, Solscan oder Arweave führen dich zu diesen Diensten, und dort gelten deren eigene Richtlinien.',
        ],
      },
      {
        title: 'Die App',
        body: [
          'Dieser Hinweis gilt nur für diese Website. Die Beenzer-App wird mit eigenen Nutzungsbedingungen und einer eigenen Datenschutzerklärung erscheinen.',
        ],
      },
      {
        title: 'Kein Angebot',
        body: [
          'Nichts auf dieser Website ist ein Angebot zum Kauf oder Verkauf eines Tokens, NFTs oder Wertpapiers oder eine Finanzberatung. Blockchain-Transaktionen lassen sich nicht rückgängig machen, und der Wert digitaler Vermögenswerte kann sowohl fallen als auch steigen.',
        ],
      },
      {
        title: 'Übersetzungen',
        body: [
          'Diese Website ist auf Englisch geschrieben und in andere Sprachen übersetzt. Weichen eine Übersetzung und die englische Fassung voneinander ab, gilt die englische Fassung.',
        ],
      },
      {
        title: 'Namen und Marken',
        body: [
          'Name und Logo von Beenzer gehören {company} Solana, Metaplex, Arweave, Phantom, Flutter, Google Maps, Node.js, Apple, Android, X, Instagram, YouTube und GitHub sind die Namen ihrer jeweiligen Inhaber und werden hier nur verwendet, um anzugeben, womit Beenzer arbeitet.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Hier ist nichts gepinnt',
    description: 'Diese Seite gibt es nicht.',
    code: '404 · Breite ?? · Länge ??',
    heading: 'Hier wurde nichts gepinnt.',
    lead: 'Die Seite, die du suchst, ist umgezogen oder wurde nie gepostet.',
    home: 'Zurück zur Karte',
    journal: 'Journal lesen',
  },
};

export default de;
