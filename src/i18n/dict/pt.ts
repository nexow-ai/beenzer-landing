import type { Dict } from './en';

/** Portuguese (Brazil), translated from en.ts. */
const pt: Dict = {
  meta: {
    description:
      'O Beenzer fixa suas fotos e vídeos no lugar exato onde foram feitos. Siga amigos, encontre-os no mapa e guarde qualquer momento como um NFT na Solana, com o lugar e a hora gravados nele.',
    skip: 'Pular para o conteúdo',
    home: 'Beenzer, início',
  },

  nav: {
    home: 'Início',
    how: 'Como funciona',
    onchain: 'On-chain',
    story: 'História',
    journal: 'Diário',
    faq: 'Dúvidas',
    follow: 'Acompanhe o projeto',
    menu: 'Menu',
    main: 'Principal',
    mobile: 'Mobile',
    product: 'Um produto da Nexow, Inc.',
    language: 'Idioma',
  },

  /** Shown to a visitor whose browser prefers this language, on a page in another one. */
  suggest: {
    text: 'Esta página também está em português.',
    go: 'Ler em português',
    close: 'Agora não',
  },

  /** Place names on the phone and the strip of photos. */
  places: {
    savigny: 'Savigny',
    lutry: 'Lutry',
    lausanne: 'Lausanne',
    vevey: 'Vevey',
    tarifa: 'Tarifa',
    lisbon: 'Lisboa',
    berlin: 'Berlim',
    barcelona: 'Barcelona',
    lagos: 'Lagos',
    mexicoCity: 'Cidade do México',
    paris: 'Paris',
  },

  hero: {
    status: 'Em reconstrução com Flutter · iOS e Android',
    lead: 'O Beenzer fixa suas fotos e vídeos no lugar exato onde foram feitos. Siga amigos, encontre-os no mapa e guarde qualquer momento como um NFT na Solana, com o lugar e a hora gravados nele.',
    how: 'Veja como funciona',
    follow: 'Acompanhe o projeto',
    lat: 'Lat',
    lon: 'Lon',
    alt: 'Alt',
    beats: ['Toda foto foi tirada *em algum lugar.*', 'A maioria dos apps esquece onde. ==O Beenzer, não.=='],
    arrival: {
      title: 'Vincent esteve aqui.',
      alt: 'A foto do BEENZER #18: uma selfie de Vincent em casa.',
      token: 'Token',
      place: 'Lugar',
      coords: 'Coord.',
      seen: 'Raio visível',
      supply: 'Tiragem',
      floor: 'preço mínimo {price}',
      solscan: 'Confira no Solscan',
    },
    cue: 'Role para aterrissar',
  },

  tour: {
    eyebrow: 'Como funciona',
    title: 'Uma câmera, um mapa e a memória do lugar.',
    steps: [
      {
        title: 'Tudo começa no mapa.',
        body: 'Cada pin é uma foto ou um vídeo, deixado exatamente onde foi feito. Toque em um para ver o post e quem estava lá.',
      },
      {
        title: 'Capture.',
        body: 'Tire uma foto ou faça um vídeo, grave um som ou escolha algo da sua galeria. Até 20 MB por post.',
      },
      {
        title: 'Fixe no mapa.',
        body: 'Seu post fica exatamente onde você está. Depois escolha quem pode encontrá-lo: todo mundo ou só quem estiver dentro do raio que você definir.',
      },
      {
        title: 'Compartilhe.',
        body: 'Siga amigos e veja os posts deles no mapa ou no seu feed. Se vocês se seguirem, podem conversar.',
      },
      {
        title: 'Cunhe.',
        body: 'Qualquer post pode virar um NFT na Solana. Escolha quantas edições podem existir e o preço delas, aprove no Phantom e a edição #1 chega à sua carteira.',
      },
    ],
    try: 'Experimente · visível em um raio de',
    radius: 'Raio de visibilidade em km',
    /** The app's own screens, drawn on the phone. */
    phone: {
      audio: 'Áudio',
      photo: 'Foto',
      video: 'Vídeo',
      newPost: 'Novo post',
      caption: 'Hora neon 💚',
      who: 'Quem pode encontrar',
      everyone: 'Todos',
      nearby: 'Por perto',
      within: 'Até {distance}',
      editions: 'Edições',
      drop: 'Deixe aqui',
      friends: 'Amigos',
      public: 'Público',
      message: 'Ainda no lago? 🌅',
      mint: 'Cunhar na Solana',
      price: 'Preço por edição',
      royalties: 'Royalties',
      approve: 'Aprovar no Phantom',
      logs: [
        'Mídia salva no Arweave',
        'Metadados salvos no Arweave',
        'Cunhado na coleção Beenzer',
        'Edição #1 enviada para sua carteira',
      ],
    },
  },

  showcase: {
    card: '{name}, o cartão',
    alt: 'A foto cunhada como BEENZER #18: Vincent tirando uma selfie em um ambiente interno.',
    description: 'Descrição',
    meta: {
      city: 'Cidade',
      coordinates: 'Coordenadas',
      date: 'Data',
      time: 'Hora UTC',
      visibility: 'Visibilidade',
      supply: 'Tiragem',
      floor: 'Preço mínimo',
      creator: 'Criador',
    },
    eyebrow: 'Fica registrado',
    title: 'A prova de que você esteve lá.',
    lead: 'Cunhe um post e o momento fica gravado nele, para sempre. Este é o BEENZER #18, cunhado em Savigny em 16 de fevereiro de 2023. A foto e os metadados continuam no Arweave, exatamente como foram escritos.',
    /** What the server writes into every Beenzer's metadata. */
    carries: [
      ['Quem', 'Carteira e nome de usuário do criador'],
      ['O quê', 'A mídia e o tipo dela: foto, vídeo ou som'],
      ['Quando', 'Data e hora, em UTC'],
      ['Onde', 'Cidade, latitude e longitude'],
      ['Quem pode ver', 'O raio de visibilidade, como um retângulo no mapa'],
      ['Quantos', 'Tiragem e preço mínimo'],
    ],
    solscan: 'Veja o #18 no Solscan',
  },

  onchain: {
    eyebrow: 'On-chain',
    title: 'Sua carteira é sua conta.',
    lead: 'O Beenzer roda na Solana. O login e a cunhagem acontecem no Phantom, e nada sai do lugar sem a sua assinatura.',
    pillars: [
      {
        title: 'Entre com uma assinatura',
        body: 'Conecte o Phantom e assine uma mensagem de uso único. Sem e-mail e sem senha para vazar.',
      },
      {
        title: 'Guardado no Arweave',
        body: 'A foto, o vídeo ou o som e os metadados vão para o Arweave, um armazenamento feito para durar. Os vídeos ganham uma prévia animada.',
      },
      {
        title: 'Edições limitadas',
        body: 'Cada cunhagem é um NFT programável da Metaplex na coleção Beenzer, com quantas edições você escolher.',
      },
      {
        title: 'Royalties que viajam',
        body: 'Royalties de 10% nas revendas, sendo 80% para o criador e 20% para o Beenzer, aplicados por um conjunto de regras da Metaplex.',
      },
    ],
    pipeTitle: 'O que acontece quando você cunha',
    pipeBody: 'As cunhagens aguardam em uma fila. Você acompanha cada etapa ao vivo na sua caixa de entrada.',
    pipeline: [
      'Você aprova no Phantom',
      'Pagamento confirmado',
      'Mídia para o Arweave',
      'Metadados para o Arweave',
      'NFT cunhado',
      'Coleção verificada',
      'Edição #1 para você',
    ],
    built: 'Feito com',
    roles: {
      chain: 'Blockchain',
      nft: 'Padrão de NFT',
      storage: 'Armazenamento',
      wallet: 'Carteira',
      apps: 'iOS e Android',
      map: 'O mapa',
      server: 'Servidor',
    },
  },

  story: {
    eyebrow: 'História',
    title: 'Aqui desde 2022.',
    lead: 'O Beenzer nasceu em 2022 como um app social que cunhava direto da câmera do celular, na Solana. Agora está sendo reconstruído do zero, em torno da mesma ideia: cada momento guarda o seu lugar.',
    now: 'Agora',
    next: 'A seguir',
    timeline: [
      {
        title: 'O Beenzer começa',
        body: 'Um dApp mobile na Solana, feito em React Native: fotografe, cunhe e deixe no mapa.',
      },
      {
        title: 'BEENZER #18',
        body: 'Cunhado em Savigny, na Suíça. Ainda on-chain, ainda no Arweave, ainda o post onde esta página aterrissa.',
      },
      {
        title: 'Uma nova casa na Nexow',
        body: 'O Beenzer vira um produto da Nexow, Inc. e ganha uma base de código nova.',
      },
      {
        title: 'Reconstruído em Flutter',
        body: 'Um app novo para iOS e Android, no mesmo servidor: mapa, feed, chat, câmera e cunhagem, nos temas claro e escuro.',
      },
      {
        title: 'Lançamento',
        body: 'Na App Store e no Google Play. Acompanhe para estar lá quando chegar.',
      },
    ],
    video: 'Um tour pelo app original do Beenzer',
    sound: 'Som',
    caption: 'O app original, em React Native',
  },

  team: {
    eyebrow: 'A equipe',
    title: 'Engenheiros, traders, artistas. Gente que acredita.',
    lead: 'O primeiro Beenzer foi feito por uma equipe internacional: software, dados, finanças e arte, de {count} países. Hoje ele é feito na [{company}](company), fundada por dois deles.',
    /** Spelled out for the count of countries above. */
    numbers: ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze'],
    profile: '{name}, perfil',
    /** Each member's roles, by their English name in src/data/team.ts. */
    roles: {
      'Software Engineer': 'Engenheiro de software',
      'Data Scientist': 'Cientista de dados',
      'Options Trader': 'Trader de opções',
      'Accounting Chief': 'Chefe de contabilidade',
      'Fitness King': 'Rei do fitness',
      'Community Manager': 'Community manager',
      'Web3 Evangelist': 'Evangelista Web3',
      'Metaverse Evangelist': 'Evangelista do metaverso',
      'Operations Director': 'Diretor de operações',
      'Managing Partner': 'Sócio-diretor',
      'Blockchain Manager': 'Gerente de blockchain',
      'Bitcoin Evangelist': 'Evangelista do Bitcoin',
      'NFT Artist': 'Artista de NFT',
      'NFT Promoter': 'Promotora de NFT',
      'Electronic Engineer': 'Engenheiro eletrônico',
      'AI Expert': 'Especialista em IA',
      'Private Banker': 'Private banker',
      'EFA™-EFP™ CFA™': 'EFA™-EFP™ CFA™',
      'Data Analyst': 'Analista de dados',
      'Forex Trader': 'Trader de câmbio',
      'Co-founder & CTO, Nexow': 'Cofundador e CTO, Nexow',
      'Co-founder & CEO, Nexow': 'Cofundador e CEO, Nexow',
    },
  },

  journal: {
    eyebrow: 'Diário',
    title: 'Notas do mapa.',
    lead: 'Novidades do app e guias sobre o que está por baixo dele.',
    description: 'Novidades do Beenzer e guias sobre geo-NFTs, Solana e o app.',
    all: 'Todos os artigos',
    read: 'Ler',
    minutes: '{n} min',
    minRead: '{n} min de leitura',
    more: 'Continue lendo',
    kinds: { News: 'Notícia', Guide: 'Guia' },
    /** Over an article shown in English because it has no translation yet. */
    untranslated: 'Este artigo ainda não foi traduzido, então aqui está ele em inglês.',
  },

  faq: {
    eyebrow: 'Perguntas frequentes',
    title: 'Boas perguntas.',
    more: 'Ficou com outra dúvida? Fale com a gente pela [Nexow](contact).',
    items: [
      {
        q: 'O que é o Beenzer?',
        a: 'Um app geossocial para iOS e Android. Você publica fotos e vídeos no lugar onde foram feitos, segue amigos e encontra os posts deles no mapa. Qualquer post pode ser cunhado como NFT na Solana.',
      },
      {
        q: 'Posso baixar?',
        a: 'Ainda não. O app está sendo reconstruído em Flutter, e a versão original em React Native não está mais no Google Play. Siga @beenzer_app no X ou no Instagram para saber o dia do lançamento.',
      },
      {
        q: 'Preciso de uma carteira cripto?',
        a: 'Sim: é com o Phantom que você entra. Você conecta a carteira e assina uma mensagem de uso único para provar que ela é sua, então não tem e-mail nem senha. O Beenzer nunca vê suas chaves.',
      },
      {
        q: 'Quanto custa cunhar?',
        a: 'Uma taxa de cunhagem em SOL. O app mostra a taxa, e a carteira para onde ela vai, antes de você aprovar qualquer coisa no Phantom, e nada é enviado sem a sua assinatura.',
      },
      {
        q: 'Quem pode ver o que eu publico?',
        a: 'Você escolhe, post por post: todo mundo ou só quem estiver dentro de um raio que você define. O mapa mostra a cada pessoa os posts em cujo raio ela está, além dos que valem para o mundo todo.',
      },
      {
        q: 'O que tem em um post cunhado?',
        a: 'A mídia, guardada no Arweave, e metadados com seu nome de usuário e sua carteira, a data e a hora UTC, a cidade e as coordenadas, o raio de visibilidade, a tiragem e o preço mínimo. É um NFT programável da Metaplex na coleção Beenzer.',
      },
      {
        q: 'O que são edições e royalties?',
        a: 'Ao cunhar, você escolhe quantas edições podem existir e o preço delas. A edição #1 fica com você. Todo Beenzer é cunhado com royalties de 10% sobre as revendas, sendo 80% para o criador e 20% para o Beenzer.',
      },
      {
        q: 'Qual o tamanho máximo de um post?',
        a: 'Até 20 MB de mídia e uma descrição de até 2.000 caracteres.',
      },
      {
        q: 'O que aconteceu com a DAO do Beenzer e seus tokens?',
        a: 'Eles faziam parte do projeto original de 2022. O novo app gira em torno dos posts e do mapa, e nada neste site é uma oferta de qualquer token.',
      },
      {
        q: 'Quem está por trás do Beenzer?',
        a: 'A {company}, uma empresa de Delaware que desenvolve software para clientes e apps próprios. O Beenzer é um deles.',
      },
    ],
  },

  follow: {
    chip: 'Em desenvolvimento',
    title: 'Esteja lá quando ==chegar.==',
    lead: 'O novo Beenzer está chegando ao iPhone e ao Android. Acompanhe para ver a primeira prévia, a versão beta e o dia do lançamento.',
    status: 'em desenvolvimento',
    press: 'Imprensa, parceiros ou investidores: [fale com a Nexow](contact).',
  },

  footer: {
    body: 'Fotos e vídeos fixados no lugar onde foram feitos, e qualquer um deles pode virar um NFT na Solana. Reconstruído em Flutter para iOS e Android.',
    community: 'Comunidade',
    company: 'Empresa',
    studio: 'Nexow Studio',
    atNexow: 'O Beenzer na Nexow',
    contact: 'Contato',
    notice: 'Aviso legal',
    productOf: 'Um produto da',
    legal: '© {year} {company} Todos os direitos reservados. O Beenzer é um produto da {company}, uma empresa de Delaware.',
    languages: 'Idiomas',
  },

  dao: {
    title: 'A DAO do Beenzer',
    description: 'A DAO do Beenzer e seus tokens faziam parte do projeto original de 2022. O que o Beenzer faz on-chain hoje.',
    eyebrow: 'A DAO',
    heading: 'A DAO foi o primeiro rascunho.',
    leads: [
      'Em 2022, o Beenzer foi pensado em torno de uma DAO, com dois tokens próprios. O novo app, em vez disso, gira em torno dos posts e do mapa. Nada neste site é uma oferta de qualquer token.',
      'O que o Beenzer faz on-chain hoje: você entra com o Phantom, e qualquer post pode ser cunhado como um NFT da Metaplex na Solana, guardado no Arweave, com edições limitadas e royalties para quem o criou.',
    ],
    onchain: 'Como o Beenzer usa a Solana',
    faq: 'Perguntas frequentes',
  },

  legal: {
    title: 'Aviso legal',
    description: 'Quem mantém este site, o que ele faz com seus dados (nada) e as letras miúdas.',
    eyebrow: 'Aviso legal',
    heading: 'As letras miúdas.',
    updated: 'Última atualização: {date}',
    sections: [
      {
        title: 'Quem mantém este site',
        body: [
          'Este site é mantido pela **{company}**, uma sociedade constituída em Delaware em {incorporated}. O Beenzer é um dos seus produtos. Os dados da empresa e as políticas dela estão em [nexow.studio/legal](legal), e você pode entrar em contato pela [página de contato](contact).',
        ],
      },
      {
        title: 'Seus dados neste site',
        body: [
          'Este site não grava cookies, não usa ferramentas de análise, anúncios nem rastreadores, e não tem formulários. Fontes, imagens, vídeos e os dados do mapa do globo são todos servidos pelo próprio site, então visitá-lo não conecta você a mais ninguém.',
          'Como qualquer site, o serviço de hospedagem que entrega estas páginas pode manter registros técnicos padrão, como um endereço IP e uma versão de navegador, para manter o site funcionando e seguro.',
          'Os links para X, Instagram, YouTube, GitHub, Solscan ou Arweave levam você a esses serviços, e lá valem as políticas deles.',
        ],
      },
      {
        title: 'O app',
        body: ['Este aviso cobre apenas este site. O app Beenzer será lançado com seus próprios termos de uso e sua própria política de privacidade.'],
      },
      {
        title: 'Não é uma oferta',
        body: [
          'Nada neste site é uma oferta de compra ou venda de qualquer token, NFT ou valor mobiliário, nem aconselhamento financeiro. Transações em blockchain não podem ser desfeitas, e o valor de ativos digitais pode tanto cair quanto subir.',
        ],
      },
      {
        title: 'Traduções',
        body: [
          'Este site é escrito em inglês e traduzido para outros idiomas. Se uma tradução e a versão em inglês divergirem, vale a versão em inglês.',
        ],
      },
      {
        title: 'Nomes e marcas',
        body: [
          'O nome e o logotipo Beenzer pertencem à {company} Solana, Metaplex, Arweave, Phantom, Flutter, Google Maps, Node.js, Apple, Android, X, Instagram, YouTube e GitHub são nomes de seus respectivos titulares, usados aqui apenas para dizer com o que o Beenzer funciona.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Nada fixado aqui',
    description: 'Esta página não existe.',
    code: '404 · Lat ?? · Lon ??',
    heading: 'Nada foi fixado aqui.',
    lead: 'A página que você procura mudou de lugar ou nunca foi publicada.',
    home: 'Voltar ao mapa',
    journal: 'Ler o diário',
  },
};

export default pt;
