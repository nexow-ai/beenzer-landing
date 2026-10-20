import type { Dict } from './en';

/** Spanish, translated from en.ts. */
const es: Dict = {
  meta: {
    description:
      'Beenzer fija tus fotos y videos en el lugar exacto donde los tomaste. Sigue a tus amigos, encuéntralos en el mapa y guarda cualquier momento como un NFT de Solana, con su lugar y su hora grabados.',
    skip: 'Saltar al contenido',
    home: 'Beenzer, inicio',
  },

  nav: {
    home: 'Inicio',
    how: 'Cómo funciona',
    onchain: 'On-chain',
    story: 'Historia',
    journal: 'Diario',
    faq: 'Preguntas',
    follow: 'Sigue el desarrollo',
    menu: 'Menú',
    main: 'Principal',
    mobile: 'Móvil',
    product: 'Un producto de Nexow, Inc.',
    language: 'Idioma',
  },

  /** Shown to a visitor whose browser prefers this language, on a page in another one. */
  suggest: {
    text: 'Esta página también está en español.',
    go: 'Leer en español',
    close: 'No, gracias',
  },

  /** Place names on the phone and the strip of photos. */
  places: {
    savigny: 'Savigny',
    lutry: 'Lutry',
    lausanne: 'Lausana',
    vevey: 'Vevey',
    tarifa: 'Tarifa',
    lisbon: 'Lisboa',
    berlin: 'Berlín',
    barcelona: 'Barcelona',
    lagos: 'Lagos',
    mexicoCity: 'Ciudad de México',
    paris: 'París',
  },

  hero: {
    status: 'En reconstrucción con Flutter · iOS y Android',
    lead: 'Beenzer fija tus fotos y videos en el lugar exacto donde los tomaste. Sigue a tus amigos, encuéntralos en el mapa y guarda cualquier momento como un NFT de Solana, con el lugar y la hora grabados en él.',
    how: 'Mira cómo funciona',
    follow: 'Sigue el desarrollo',
    lat: 'Lat',
    lon: 'Lon',
    alt: 'Alt',
    beats: ['Cada foto se tomó *en algún lugar.*', 'La mayoría de las apps olvida dónde. ==Beenzer lo guarda.=='],
    arrival: {
      title: 'Vincent estuvo aquí.',
      alt: 'La foto de BEENZER #18: una selfie de Vincent en casa.',
      token: 'Token',
      place: 'Lugar',
      coords: 'Coord.',
      seen: 'Radio visible',
      supply: 'Tirada',
      floor: 'precio mínimo {price}',
      solscan: 'Compruébalo en Solscan',
    },
    cue: 'Desplázate para aterrizar',
  },

  tour: {
    eyebrow: 'Cómo funciona',
    title: 'Una cámara, un mapa y la memoria del lugar.',
    steps: [
      {
        title: 'Todo empieza en el mapa.',
        body: 'Cada pin es una foto o un video, dejado justo donde se tomó. Toca uno para verlo y ver quién estuvo allí.',
      },
      {
        title: 'Captúralo.',
        body: 'Toma una foto o un video, graba un sonido o elige algo de tu galería. Hasta 20 MB por publicación.',
      },
      {
        title: 'Fíjalo.',
        body: 'Tu publicación queda justo donde estás. Después eliges quién puede encontrarla: todo el mundo o solo quienes estén dentro del radio que tú definas.',
      },
      {
        title: 'Compártelo.',
        body: 'Sigue a tus amigos y mira sus publicaciones en el mapa o en tu feed. Si el seguimiento es mutuo, ya puedes chatear.',
      },
      {
        title: 'Acúñalo.',
        body: 'Cualquier publicación puede convertirse en un NFT de Solana. Elige cuántas ediciones pueden existir y su precio, apruébalo en Phantom y la edición #1 llega a tu billetera.',
      },
    ],
    try: 'Pruébalo · visible en un radio de',
    radius: 'Radio de visibilidad en km',
    /** The app's own screens, drawn on the phone. */
    phone: {
      audio: 'Audio',
      photo: 'Foto',
      video: 'Video',
      newPost: 'Nueva publicación',
      caption: 'Hora neón 💚',
      who: 'Quién puede encontrarla',
      everyone: 'Todos',
      nearby: 'Cerca',
      within: 'Hasta {distance}',
      editions: 'Ediciones',
      drop: 'Déjalo aquí',
      friends: 'Amigos',
      public: 'Público',
      message: '¿Sigues en el lago? 🌅',
      mint: 'Acuñar en Solana',
      price: 'Precio por edición',
      royalties: 'Regalías',
      approve: 'Aprobar en Phantom',
      logs: [
        'Archivo guardado en Arweave',
        'Metadatos guardados en Arweave',
        'Acuñado en la colección Beenzer',
        'Edición #1 enviada a tu billetera',
      ],
    },
  },

  showcase: {
    card: '{name}, la tarjeta',
    alt: 'La foto acuñada como BEENZER #18: Vincent haciéndose una selfie en un interior.',
    description: 'Descripción',
    meta: {
      city: 'Ciudad',
      coordinates: 'Coordenadas',
      date: 'Fecha',
      time: 'Hora UTC',
      visibility: 'Visibilidad',
      supply: 'Tirada',
      floor: 'Precio mínimo',
      creator: 'Creador',
    },
    eyebrow: 'Queda constancia',
    title: 'La prueba de que estuviste ahí.',
    lead: 'Acuña una publicación y el momento queda grabado en ella, para siempre. Este es BEENZER #18, acuñado en Savigny el 16 de febrero de 2023. Su foto y sus metadatos siguen en Arweave, exactamente como se escribieron.',
    /** What the server writes into every Beenzer's metadata. */
    carries: [
      ['Quién', 'Billetera y nombre de usuario del creador'],
      ['Qué', 'El archivo y su tipo: foto, video o sonido'],
      ['Cuándo', 'Fecha y hora, en UTC'],
      ['Dónde', 'Ciudad, latitud y longitud'],
      ['Quién puede verlo', 'El radio de visibilidad, como un recuadro en el mapa'],
      ['Cuántos', 'Tirada y precio mínimo'],
    ],
    solscan: 'Ver el #18 en Solscan',
  },

  onchain: {
    eyebrow: 'On-chain',
    title: 'Tu billetera es tu cuenta.',
    lead: 'Beenzer funciona en Solana. Tanto el inicio de sesión como la acuñación pasan por Phantom, y nada se mueve sin tu firma.',
    pillars: [
      {
        title: 'Inicia sesión con una firma',
        body: 'Conecta Phantom y firma un mensaje de un solo uso. Sin correo y sin contraseña que se pueda filtrar.',
      },
      {
        title: 'Guardado en Arweave',
        body: 'La foto, el video o el sonido y sus metadatos van a Arweave, un almacenamiento pensado para durar. Los videos tienen una vista previa animada.',
      },
      {
        title: 'Ediciones limitadas',
        body: 'Cada acuñación es un NFT programable de Metaplex dentro de la colección Beenzer, con tantas ediciones como elijas.',
      },
      {
        title: 'Regalías que viajan',
        body: 'Una regalía del 10 % en las reventas, de la que el 80 % va al creador y el 20 % a Beenzer, aplicada por un conjunto de reglas de Metaplex.',
      },
    ],
    pipeTitle: 'Qué pasa cuando acuñas',
    pipeBody: 'Las acuñaciones esperan en una cola. Sigues cada paso en tiempo real en tu bandeja de entrada.',
    pipeline: [
      'Apruebas en Phantom',
      'Pago confirmado',
      'Archivo a Arweave',
      'Metadatos a Arweave',
      'NFT acuñado',
      'Colección verificada',
      'Edición #1 para ti',
    ],
    built: 'Hecho con',
    roles: {
      chain: 'Blockchain',
      nft: 'Estándar NFT',
      storage: 'Almacenamiento',
      wallet: 'Billetera',
      apps: 'iOS y Android',
      map: 'El mapa',
      server: 'Servidor',
    },
  },

  story: {
    eyebrow: 'Historia',
    title: 'Aquí desde 2022.',
    lead: 'Beenzer nació en 2022 como una app social que acuñaba directamente desde la cámara del teléfono, en Solana. Ahora se está reconstruyendo desde cero, en torno a la misma idea: cada momento conserva su lugar.',
    now: 'Ahora',
    next: 'Lo siguiente',
    timeline: [
      {
        title: 'Nace Beenzer',
        body: 'Una dApp móvil en Solana, hecha con React Native: toma la foto, acúñala y déjala en el mapa.',
      },
      {
        title: 'BEENZER #18',
        body: 'Acuñado en Savigny, Suiza. Sigue en la blockchain, sigue en Arweave y sigue siendo la publicación en la que aterriza esta página.',
      },
      {
        title: 'Un nuevo hogar en Nexow',
        body: 'Beenzer pasa a ser un producto de Nexow, Inc. y estrena un código nuevo.',
      },
      {
        title: 'Reconstruido con Flutter',
        body: 'Una app nueva para iOS y Android, sobre el mismo servidor: mapa, feed, chat, cámara y acuñación, en modo claro y oscuro.',
      },
      {
        title: 'Lanzamiento',
        body: 'En la App Store y en Google Play. Sigue el proyecto para estar ahí cuando llegue.',
      },
    ],
    video: 'Un recorrido por la app original de Beenzer',
    sound: 'Sonido',
    caption: 'La app original, en React Native',
  },

  team: {
    eyebrow: 'El equipo',
    title: 'Ingenieros, traders, artistas. Convencidos.',
    lead: 'El primer Beenzer lo construyó un equipo internacional: software, datos, finanzas y arte, de {count} países. Hoy se construye en [{company}](company), fundada por dos de ellos.',
    /** Spelled out for the count of countries above. */
    numbers: ['cero', 'un', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce'],
    profile: '{name}, perfil',
    /** Each member's roles, by their English name in src/data/team.ts. */
    roles: {
      'Software Engineer': 'Ingeniero de software',
      'Data Scientist': 'Científico de datos',
      'Options Trader': 'Trader de opciones',
      'Accounting Chief': 'Jefe de contabilidad',
      'Fitness King': 'Rey del fitness',
      'Community Manager': 'Community manager',
      'Web3 Evangelist': 'Evangelista Web3',
      'Metaverse Evangelist': 'Evangelista del metaverso',
      'Operations Director': 'Director de operaciones',
      'Managing Partner': 'Socio director',
      'Blockchain Manager': 'Responsable de blockchain',
      'Bitcoin Evangelist': 'Evangelista de Bitcoin',
      'NFT Artist': 'Artista NFT',
      'NFT Promoter': 'Promotora de NFT',
      'Electronic Engineer': 'Ingeniero electrónico',
      'AI Expert': 'Experto en IA',
      'Private Banker': 'Banquero privado',
      'EFA™-EFP™ CFA™': 'EFA™-EFP™ CFA™',
      'Data Analyst': 'Analista de datos',
      'Forex Trader': 'Trader de divisas',
      'Co-founder & CTO, Nexow': 'Cofundador y CTO, Nexow',
      'Co-founder & CEO, Nexow': 'Cofundador y CEO, Nexow',
    },
  },

  journal: {
    eyebrow: 'Diario',
    title: 'Notas desde el mapa.',
    lead: 'Noticias de la app y guías sobre lo que hay por debajo.',
    description: 'Noticias de Beenzer y guías sobre geo-NFT, Solana y la app.',
    all: 'Todos los artículos',
    read: 'Leer',
    minutes: '{n} min',
    minRead: '{n} min de lectura',
    more: 'Sigue leyendo',
    kinds: { News: 'Noticia', Guide: 'Guía' },
    /** Over an article shown in English because it has no translation yet. */
    untranslated: 'Este artículo aún no está traducido, así que aquí lo tienes en inglés.',
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Buenas preguntas.',
    more: '¿Otra cosa? Escríbenos a través de [Nexow](contact).',
    items: [
      {
        q: '¿Qué es Beenzer?',
        a: 'Una app geosocial para iOS y Android. Publicas fotos y videos donde los tomaste, sigues a tus amigos y encuentras sus publicaciones en el mapa. Cualquier publicación puede acuñarse como NFT en Solana.',
      },
      {
        q: '¿Puedo descargarla?',
        a: 'Todavía no. La app se está reconstruyendo con Flutter, y la versión original en React Native ya no está en Google Play. Sigue a @beenzer_app en X o Instagram para enterarte del día en que salga.',
      },
      {
        q: '¿Necesito una billetera de criptomonedas?',
        a: 'Sí: inicias sesión con Phantom. La conectas y firmas un mensaje de un solo uso para demostrar que la billetera es tuya, así que no hay correo ni contraseña. Beenzer nunca ve tus claves.',
      },
      {
        q: '¿Cuánto cuesta acuñar?',
        a: 'Una comisión de acuñación en SOL. La app te muestra la comisión, y la billetera a la que va, antes de que apruebes nada en Phantom, y no se envía nada sin tu firma.',
      },
      {
        q: '¿Quién puede ver lo que publico?',
        a: 'Tú eliges, publicación por publicación: todo el mundo o solo quienes estén dentro de un radio que tú defines. El mapa le muestra a cada persona las publicaciones en cuyo radio se encuentra, además de las de alcance mundial.',
      },
      {
        q: '¿Qué contiene una publicación acuñada?',
        a: 'El archivo, guardado en Arweave, y unos metadatos con tu nombre de usuario y tu billetera, la fecha y la hora UTC, la ciudad y las coordenadas, el radio de visibilidad, la tirada y el precio mínimo. Es un NFT programable de Metaplex dentro de la colección Beenzer.',
      },
      {
        q: '¿Qué son las ediciones y las regalías?',
        a: 'Al acuñar, eliges cuántas ediciones pueden existir y su precio. La edición #1 es para ti. Todo Beenzer se acuña con una regalía del 10 % en las reventas, de la que el 80 % es para el creador y el 20 % para Beenzer.',
      },
      {
        q: '¿Qué tamaño puede tener una publicación?',
        a: 'Hasta 20 MB de contenido y una descripción de hasta 2000 caracteres.',
      },
      {
        q: '¿Qué pasó con la DAO de Beenzer y sus tokens?',
        a: 'Formaban parte del diseño original de 2022. La nueva app gira en torno a las publicaciones y el mapa, y nada de lo que hay en este sitio es una oferta de ningún token.',
      },
      {
        q: '¿Quién está detrás de Beenzer?',
        a: '{company}, una sociedad de Delaware que desarrolla software para clientes y apps propias. Beenzer es una de ellas.',
      },
    ],
  },

  follow: {
    chip: 'En desarrollo',
    title: 'No te pierdas ==su llegada.==',
    lead: 'El nuevo Beenzer llegará a iPhone y Android. Síguenos para ver el primer adelanto, la beta y el día del lanzamiento.',
    status: 'en desarrollo',
    press: 'Prensa, socios o inversores: [escribe a Nexow](contact).',
  },

  footer: {
    body: 'Fotos y videos fijados en el lugar donde se tomaron, y cualquiera de ellos puede convertirse en un NFT de Solana. Reconstruido con Flutter para iOS y Android.',
    community: 'Comunidad',
    company: 'Empresa',
    studio: 'Nexow Studio',
    atNexow: 'Beenzer en Nexow',
    contact: 'Contacto',
    notice: 'Aviso legal',
    productOf: 'Un producto de',
    legal: '© {year} {company} Todos los derechos reservados. Beenzer es un producto de {company}, una sociedad de Delaware.',
    languages: 'Idiomas',
  },

  dao: {
    title: 'La DAO de Beenzer',
    description: 'La DAO de Beenzer y sus tokens formaban parte del diseño original de 2022. Lo que Beenzer hace hoy en la blockchain.',
    eyebrow: 'La DAO',
    heading: 'La DAO fue el primer borrador.',
    leads: [
      'En 2022, Beenzer se diseñó en torno a una DAO, con dos tokens propios. La nueva app, en cambio, gira en torno a las publicaciones y el mapa. Nada de lo que hay en este sitio es una oferta de ningún token.',
      'Lo que Beenzer hace hoy en la blockchain: inicias sesión con Phantom, y cualquier publicación puede acuñarse como un NFT de Metaplex en Solana, guardado en Arweave, con ediciones limitadas y regalías para su creador.',
    ],
    onchain: 'Cómo usa Beenzer Solana',
    faq: 'Preguntas frecuentes',
  },

  legal: {
    title: 'Aviso legal',
    description: 'Quién gestiona este sitio, qué hace con tus datos (nada) y la letra pequeña.',
    eyebrow: 'Aviso legal',
    heading: 'La letra pequeña.',
    updated: 'Última actualización: {date}',
    sections: [
      {
        title: 'Quién gestiona este sitio',
        body: [
          'Este sitio web lo gestiona **{company}**, una sociedad de Delaware constituida el {incorporated}. Beenzer es uno de sus productos. Los datos de la empresa y sus propias políticas están en [nexow.studio/legal](legal), y puedes contactar con ella a través de la [página de contacto](contact).',
        ],
      },
      {
        title: 'Tus datos en este sitio',
        body: [
          'Este sitio no instala cookies, no usa herramientas de analítica, anuncios ni rastreadores, y no tiene formularios. Las fuentes, las imágenes, los videos y los datos del mapa del globo se sirven desde este mismo sitio, así que visitarlo no te conecta con nadie más.',
          'Como cualquier sitio web, el proveedor de alojamiento que sirve estas páginas puede conservar registros técnicos estándar, como una dirección IP y una versión del navegador, para mantener el sitio en funcionamiento y seguro.',
          'Los enlaces a X, Instagram, YouTube, GitHub, Solscan o Arweave te llevan a esos servicios, y allí se aplican sus propias políticas.',
        ],
      },
      {
        title: 'La app',
        body: ['Este aviso cubre solo este sitio web. La app de Beenzer se publicará con sus propios términos de uso y su propia política de privacidad.'],
      },
      {
        title: 'No es una oferta',
        body: [
          'Nada de lo que hay en este sitio constituye una oferta de compra o venta de ningún token, NFT o valor negociable, ni asesoramiento financiero. Las transacciones en blockchain no se pueden deshacer, y el valor de los activos digitales puede tanto bajar como subir.',
        ],
      },
      {
        title: 'Traducciones',
        body: [
          'Este sitio está escrito en inglés y traducido a otros idiomas. Si una traducción y la versión en inglés no coinciden, prevalece la versión en inglés.',
        ],
      },
      {
        title: 'Nombres y marcas',
        body: [
          'El nombre y el logotipo de Beenzer pertenecen a {company} Solana, Metaplex, Arweave, Phantom, Flutter, Google Maps, Node.js, Apple, Android, X, Instagram, YouTube y GitHub son nombres de sus respectivos titulares, y aquí se usan solo para indicar con qué funciona Beenzer.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Nada fijado aquí',
    description: 'Esta página no existe.',
    code: '404 · Lat ?? · Lon ??',
    heading: 'Aquí no se fijó nada.',
    lead: 'La página que buscas se ha movido o nunca llegó a publicarse.',
    home: 'Volver al mapa',
    journal: 'Leer el diario',
  },
};

export default es;
