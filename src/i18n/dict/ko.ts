import type { Dict } from './en';

/** Korean, translated from en.ts. */
const ko: Dict = {
  meta: {
    description:
      'Beenzer는 사진과 영상을 찍은 바로 그 자리에 핀으로 남겨요. 친구를 팔로우하고 지도에서 찾아보고, 어떤 순간이든 장소와 시간이 담긴 Solana NFT로 간직할 수 있어요.',
    skip: '본문 바로가기',
    home: 'Beenzer 홈',
  },

  nav: {
    home: '홈',
    how: '사용법',
    onchain: '온체인',
    story: '스토리',
    journal: '저널',
    faq: 'FAQ',
    follow: '개발 소식 팔로우',
    menu: '메뉴',
    main: '메인',
    mobile: '모바일',
    product: 'Nexow, Inc.의 프로덕트',
    language: '언어',
  },

  /** Shown to a visitor whose browser prefers Korean, on a page in another language. */
  suggest: {
    text: '이 페이지는 한국어로도 볼 수 있어요.',
    go: '한국어로 보기',
    close: '괜찮아요',
  },

  places: {
    savigny: '사비니',
    lutry: '뤼트리',
    lausanne: '로잔',
    vevey: '브베',
    tarifa: '타리파',
    lisbon: '리스본',
    berlin: '베를린',
    barcelona: '바르셀로나',
    lagos: '라고스',
    mexicoCity: '멕시코시티',
    paris: '파리',
  },

  hero: {
    status: 'Flutter로 다시 만드는 중 · iOS와 Android',
    lead: 'Beenzer는 사진과 영상을 찍은 바로 그 자리에 핀으로 남겨요. 친구를 팔로우하고 지도에서 찾아보세요. 어떤 순간이든 장소와 시간을 새긴 Solana NFT로 간직할 수 있어요.',
    how: '사용법 보기',
    follow: '개발 소식 팔로우',
    lat: '위도',
    lon: '경도',
    alt: '고도',
    beats: ['사진마다 *찍은 곳이 있어요.*', '대부분의 앱은 그곳을 잊어요. ==Beenzer는 기억해요.=='],
    arrival: {
      title: 'Vincent 다녀감.',
      alt: 'BEENZER #18의 사진: 집에서 셀카를 찍는 Vincent.',
      token: '토큰',
      place: '장소',
      coords: '좌표',
      seen: '공개 반경',
      supply: '발행량',
      floor: '바닥가 {price}',
      solscan: 'Solscan에서 확인하기',
    },
    cue: '스크롤해서 착륙',
  },

  tour: {
    eyebrow: '사용법',
    title: '카메라, 지도, 그리고 장소의 기억.',
    steps: [
      {
        title: '지도가 곧 홈.',
        body: '핀 하나하나가 찍힌 자리에 그대로 남은 사진이나 영상이에요. 탭하면 무엇이 담겼는지, 누가 거기 있었는지 볼 수 있어요.',
      },
      {
        title: '찍어요.',
        body: '사진이나 영상을 찍고, 소리를 녹음하거나 갤러리에서 골라도 돼요. 게시물 하나에 최대 20MB까지예요.',
      },
      {
        title: '핀을 꽂아요.',
        body: '게시물은 지금 서 있는 자리에 놓여요. 그다음 누가 찾을 수 있을지 정하세요. 모든 사람, 또는 내가 정한 반경 안에 있는 사람만.',
      },
      {
        title: '공유해요.',
        body: '친구를 팔로우하면 지도나 피드에서 친구의 게시물을 볼 수 있어요. 서로 팔로우하면 채팅도 할 수 있어요.',
      },
      {
        title: '민팅해요.',
        body: '어떤 게시물이든 Solana NFT가 될 수 있어요. 에디션을 몇 개까지 발행할지와 가격을 정하고 Phantom에서 승인하면, 에디션 #1이 내 지갑으로 들어와요.',
      },
    ],
    try: '직접 해 보기 · 공개 반경',
    radius: '공개 반경(km)',
    phone: {
      audio: '오디오',
      photo: '사진',
      video: '동영상',
      newPost: '새 게시물',
      caption: '네온 아워 💚',
      who: '찾을 수 있는 사람',
      everyone: '모두',
      nearby: '근처 사람',
      within: '{distance} 이내',
      editions: '에디션',
      drop: '여기에 놓기',
      friends: '친구',
      public: '전체',
      message: '아직 호수야? 🌅',
      mint: 'Solana에서 민팅',
      price: '개당 가격',
      royalties: '로열티',
      approve: 'Phantom에서 승인',
      logs: [
        'Arweave에 미디어 저장됨',
        'Arweave에 메타데이터 저장됨',
        'Beenzer 컬렉션에 민팅됨',
        '에디션 #1을 지갑으로 보냄',
      ],
    },
  },

  showcase: {
    card: '{name} 카드',
    alt: 'BEENZER #18로 민팅된 사진: 실내에서 셀카를 찍는 Vincent.',
    description: '설명',
    meta: {
      city: '도시',
      coordinates: '좌표',
      date: '날짜',
      time: '시간(UTC)',
      visibility: '공개 범위',
      supply: '발행량',
      floor: '바닥가',
      creator: '크리에이터',
    },
    eyebrow: '기록으로 남다',
    title: '거기 있었다는 증거.',
    lead: '게시물을 민팅하면 그 순간이 영원히 새겨져요. 이건 BEENZER #18이에요. 2023년 2월 16일 사비니에서 민팅됐어요. 사진과 메타데이터는 기록된 그대로 지금도 Arweave에 남아 있어요.',
    carries: [
      ['누가', '크리에이터 지갑과 사용자 이름'],
      ['무엇을', '미디어와 그 유형: 사진, 영상 또는 소리'],
      ['언제', 'UTC 기준 날짜와 시간'],
      ['어디서', '도시, 위도, 경도'],
      ['누가 볼 수 있나', '공개 반경, 지도 위의 사각형으로'],
      ['몇 개나', '발행량과 바닥가'],
    ],
    solscan: 'Solscan에서 #18 보기',
  },

  onchain: {
    eyebrow: '온체인',
    title: '지갑이 곧 계정.',
    lead: 'Beenzer는 Solana에서 돌아가요. 로그인도 민팅도 Phantom에서 이뤄지고, 내 서명 없이는 아무것도 움직이지 않아요.',
    pillars: [
      {
        title: '서명으로 로그인',
        body: 'Phantom을 연결하고 일회용 메시지에 서명하세요. 이메일도 없고, 유출될 비밀번호도 없어요.',
      },
      {
        title: 'Arweave에 보관',
        body: '사진, 영상, 소리와 그 메타데이터는 오래 남도록 만들어진 저장소인 Arweave에 올라가요. 영상에는 움직이는 미리보기도 붙어요.',
      },
      {
        title: '한정 에디션',
        body: '민팅할 때마다 Beenzer 컬렉션의 Metaplex 프로그래머블 NFT가 만들어져요. 에디션 수는 원하는 만큼 정할 수 있어요.',
      },
      {
        title: '따라다니는 로열티',
        body: '재판매 시 10% 로열티가 붙고, 그중 80%는 크리에이터에게, 20%는 Beenzer에게 가요. Metaplex 규칙 세트가 이를 강제해요.',
      },
    ],
    pipeTitle: '민팅하면 이렇게 진행돼요',
    pipeBody: '민팅 요청은 대기열에서 순서를 기다려요. 단계마다 인박스에서 실시간으로 확인할 수 있어요.',
    pipeline: [
      'Phantom에서 승인',
      '결제 확인',
      '미디어를 Arweave로',
      '메타데이터를 Arweave로',
      'NFT 민팅',
      '컬렉션 인증',
      '에디션 #1이 나에게',
    ],
    built: '사용 기술',
    roles: {
      chain: '체인',
      nft: 'NFT 표준',
      storage: '스토리지',
      wallet: '지갑',
      apps: 'iOS와 Android',
      map: '지도',
      server: '서버',
    },
  },

  story: {
    eyebrow: '스토리',
    title: '2022년부터, 여기에.',
    lead: 'Beenzer는 2022년, 휴대폰 카메라에서 바로 민팅하는 소셜 앱으로 Solana에서 시작했어요. 지금은 ‘모든 순간은 제자리를 간직한다’는 같은 아이디어를 중심으로, 처음부터 다시 만들고 있어요.',
    now: '지금',
    next: '다음',
    timeline: [
      {
        title: 'Beenzer의 시작',
        body: 'React Native로 만든 Solana 기반 모바일 dApp이에요. 찍고, 민팅하고, 지도에 올려요.',
      },
      {
        title: 'BEENZER #18',
        body: '스위스 사비니에서 민팅됐어요. 지금도 온체인에, 지금도 Arweave에 있고, 지금도 이 페이지가 착륙하는 바로 그 게시물이에요.',
      },
      {
        title: 'Nexow라는 새 보금자리',
        body: 'Beenzer가 Nexow, Inc.의 프로덕트가 되고, 새 코드베이스로 다시 시작해요.',
      },
      {
        title: 'Flutter로 다시 만들기',
        body: '같은 서버를 쓰는 iOS·Android용 새 앱이에요. 지도, 피드, 채팅, 카메라, 민팅을 라이트 모드와 다크 모드로 모두 담았어요.',
      },
      {
        title: '출시',
        body: 'App Store와 Google Play에 나와요. 팔로우하고 출시되는 순간을 함께하세요.',
      },
    ],
    video: '초기 Beenzer 앱 둘러보기 영상',
    sound: '소리',
    caption: 'React Native로 만든 초기 앱',
  },

  team: {
    eyebrow: '크루',
    title: '엔지니어, 트레이더, 아티스트. 그리고 믿는 사람들.',
    lead: '첫 Beenzer는 소프트웨어, 데이터, 금융, 아트 분야에서 모인 {count}개국 출신의 국제적인 크루가 만들었어요. 지금은 그중 두 명이 세운 [{company}](company)에서 만들고 있어요.',
    numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    profile: '{name} 프로필',
    roles: {
      'Software Engineer': '소프트웨어 엔지니어',
      'Data Scientist': '데이터 사이언티스트',
      'Options Trader': '옵션 트레이더',
      'Accounting Chief': '회계 총괄',
      'Fitness King': '피트니스 킹',
      'Community Manager': '커뮤니티 매니저',
      'Web3 Evangelist': 'Web3 에반젤리스트',
      'Metaverse Evangelist': '메타버스 에반젤리스트',
      'Operations Director': '운영 디렉터',
      'Managing Partner': '매니징 파트너',
      'Blockchain Manager': '블록체인 매니저',
      'Bitcoin Evangelist': '비트코인 에반젤리스트',
      'NFT Artist': 'NFT 아티스트',
      'NFT Promoter': 'NFT 프로모터',
      'Electronic Engineer': '전자 엔지니어',
      'AI Expert': 'AI 전문가',
      'Private Banker': '프라이빗 뱅커',
      'EFA™-EFP™ CFA™': 'EFA™-EFP™ CFA™',
      'Data Analyst': '데이터 분석가',
      'Forex Trader': '외환 트레이더',
      'Co-founder & CTO, Nexow': 'Nexow 공동 창업자 겸 CTO',
      'Co-founder & CEO, Nexow': 'Nexow 공동 창업자 겸 CEO',
    },
  },

  journal: {
    eyebrow: '저널',
    title: '지도에서 보내는 소식.',
    lead: '앱 소식, 그리고 앱을 받치고 있는 것들에 대한 가이드예요.',
    description: 'Beenzer 소식, 그리고 지오 NFT, Solana, 앱에 대한 가이드.',
    all: '모든 글',
    read: '읽기',
    minutes: '{n}분',
    minRead: '{n}분 읽기',
    more: '더 읽어 보기',
    kinds: { News: '소식', Guide: '가이드' },
    untranslated: '이 글은 아직 번역되지 않아 영어로 보여 드려요.',
  },

  faq: {
    eyebrow: '자주 묻는 질문',
    title: '좋은 질문들.',
    more: '다른 궁금한 점이 있나요? [Nexow](contact)로 문의해 주세요.',
    items: [
      {
        q: 'Beenzer는 뭔가요?',
        a: 'iOS와 Android용 지오 소셜 앱이에요. 사진과 영상을 찍은 자리에 올리고, 친구를 팔로우하고, 친구의 게시물을 지도에서 찾을 수 있어요. 어떤 게시물이든 Solana NFT로 민팅할 수 있어요.',
      },
      {
        q: '다운로드할 수 있나요?',
        a: '아직은 안 돼요. 앱을 Flutter로 다시 만들고 있고, 기존 React Native 버전은 이제 Google Play에 없어요. 출시되는 날 바로 알고 싶다면 X나 Instagram에서 @beenzer_app을 팔로우하세요.',
      },
      {
        q: '암호화폐 지갑이 필요한가요?',
        a: '네, Phantom으로 로그인해요. Phantom을 연결하고 일회용 메시지에 서명해서 지갑이 내 것임을 증명하기 때문에, 이메일도 비밀번호도 없어요. Beenzer가 내 키를 보는 일은 없어요.',
      },
      {
        q: '민팅 비용은 얼마인가요?',
        a: 'SOL로 내는 민팅 수수료가 있어요. Phantom에서 무언가를 승인하기 전에 앱이 수수료와 그 수수료가 가는 지갑을 보여 주고, 내 서명 없이는 아무것도 전송되지 않아요.',
      },
      {
        q: '내 게시물은 누가 볼 수 있나요?',
        a: '게시물마다 직접 정해요. 모든 사람, 또는 내가 정한 반경 안에 있는 사람만. 지도에는 각자가 반경 안에 들어가 있는 게시물과 전 세계 공개 게시물이 보여요.',
      },
      {
        q: '민팅한 게시물에는 무엇이 담기나요?',
        a: 'Arweave에 보관된 미디어, 그리고 사용자 이름과 지갑, 날짜와 UTC 시간, 도시와 좌표, 공개 반경, 발행량, 바닥가가 담긴 메타데이터예요. Beenzer 컬렉션의 Metaplex 프로그래머블 NFT예요.',
      },
      {
        q: '에디션과 로열티는 뭔가요?',
        a: '민팅할 때 에디션을 몇 개까지 발행할지와 가격을 정해요. 에디션 #1은 내가 가져요. 모든 Beenzer는 재판매 시 10% 로열티가 붙도록 민팅되고, 그중 80%는 크리에이터, 20%는 Beenzer 몫이에요.',
      },
      {
        q: '게시물은 얼마나 클 수 있나요?',
        a: '미디어는 최대 20MB, 설명은 최대 2,000자예요.',
      },
      {
        q: 'Beenzer DAO와 토큰은 어떻게 됐나요?',
        a: '2022년 초기 설계의 일부였어요. 새 앱은 게시물과 지도를 중심으로 만들어지고 있고, 이 사이트의 어떤 내용도 토큰에 대한 제안이 아니에요.',
      },
      {
        q: 'Beenzer는 누가 만드나요?',
        a: '델라웨어 법인 {company}에서 만들어요. 클라이언트를 위한 소프트웨어와 자체 앱을 만드는 회사이고, Beenzer는 그 자체 앱 중 하나예요.',
      },
    ],
  },

  follow: {
    chip: '개발 중',
    title: '출시되는 순간, ==함께해요.==',
    lead: '새 Beenzer가 iPhone과 Android로 찾아와요. 팔로우하고 첫 공개, 베타, 그리고 출시되는 날을 함께하세요.',
    status: '개발 중',
    press: '언론, 파트너, 투자자라면 [Nexow에 연락해 주세요](contact).',
  },

  footer: {
    body: '찍은 자리에 핀으로 남는 사진과 영상. 그중 무엇이든 Solana NFT가 될 수 있어요. iOS와 Android를 위해 Flutter로 다시 만들고 있어요.',
    community: '커뮤니티',
    company: '회사',
    studio: 'Nexow Studio',
    atNexow: 'Nexow의 Beenzer',
    contact: '문의',
    notice: '사이트 안내',
    productOf: '만든 곳',
    legal: '© {year} {company} All rights reserved. Beenzer는 델라웨어 법인 {company}의 프로덕트예요.',
    languages: '언어',
  },

  dao: {
    title: 'Beenzer DAO',
    description: 'Beenzer DAO와 토큰은 2022년 초기 설계의 일부였어요. 지금 Beenzer가 온체인에서 하는 일을 소개해요.',
    eyebrow: 'DAO',
    heading: 'DAO는 첫 초안이었어요.',
    leads: [
      '2022년의 Beenzer는 DAO와 자체 토큰 두 가지를 중심으로 설계됐어요. 새 앱은 그 대신 게시물과 지도를 중심으로 만들어지고 있어요. 이 사이트의 어떤 내용도 토큰에 대한 제안이 아니에요.',
      '지금 Beenzer가 온체인에서 하는 일: Phantom으로 로그인하고, 어떤 게시물이든 Solana 위의 Metaplex NFT로 민팅할 수 있어요. Arweave에 보관되고, 한정 에디션과 크리에이터 로열티가 함께해요.',
    ],
    onchain: 'Beenzer가 Solana를 쓰는 방식',
    faq: '자주 묻는 질문',
  },

  legal: {
    title: '사이트 안내',
    description: '누가 이 사이트를 운영하는지, 내 데이터로 무엇을 하는지(아무것도 안 해요), 그리고 깨알 같은 안내.',
    eyebrow: '사이트 안내',
    heading: '깨알 같은 안내.',
    updated: '최종 업데이트: {date}',
    sections: [
      {
        title: '이 사이트를 운영하는 곳',
        body: [
          '이 웹사이트는 {incorporated}에 설립된 델라웨어 법인 **{company}**에서 운영해요. Beenzer는 이 회사의 프로덕트 중 하나예요. 회사 정보와 회사의 자체 정책은 [nexow.studio/legal](legal)에서 볼 수 있고, [문의 페이지](contact)를 통해 연락할 수 있어요.',
        ],
      },
      {
        title: '이 사이트에서의 내 데이터',
        body: [
          '이 사이트는 쿠키를 설정하지 않고, 분석 도구, 광고, 추적기를 실행하지 않으며, 입력 폼도 없어요. 글꼴, 이미지, 영상, 지구본의 지도 데이터는 모두 이 사이트에서 직접 제공하기 때문에, 이 사이트를 방문한다고 해서 다른 누구에게 연결되는 일은 없어요.',
          '여느 웹사이트처럼, 이 페이지를 제공하는 호스팅 업체는 사이트 운영과 보안을 위해 IP 주소와 브라우저 버전 같은 표준 기술 로그를 보관할 수 있어요.',
          'X, Instagram, YouTube, GitHub, Solscan, Arweave로 가는 링크를 누르면 해당 서비스로 이동하며, 그곳에서는 각 서비스의 정책이 적용돼요.',
          '언어를 고르거나 다른 언어로 읽자는 제안을 거절하면, 브라우저가 그 선택을 기기의 로컬 저장소에 저장해요. 쿠키가 아니며, 누구에게도 전송되지 않아요.',
        ],
      },
      {
        title: '앱',
        body: ['이 안내는 이 웹사이트에만 적용돼요. Beenzer 앱은 자체 이용약관과 개인정보 처리방침을 갖추고 출시돼요.'],
      },
      {
        title: '제안이 아니에요',
        body: [
          '이 사이트의 어떤 내용도 토큰, NFT, 증권의 매수 또는 매도 제안이 아니며, 금융 조언도 아니에요. 블록체인 거래는 되돌릴 수 없고, 디지털 자산의 가치는 오를 수도 내릴 수도 있어요.',
        ],
      },
      {
        title: '번역',
        body: [
          '이 사이트는 영어로 작성되어 다른 언어로 번역돼요. 번역본과 영어판의 내용이 다르면 영어판이 적용돼요.',
        ],
      },
      {
        title: '이름과 상표',
        body: [
          'Beenzer 이름과 로고는 {company}에 속해요. Solana, Metaplex, Arweave, Phantom, Flutter, Google Maps, Node.js, Apple, Android, X, Instagram, YouTube, GitHub은 각 소유자의 이름이며, 여기서는 Beenzer가 무엇과 함께 작동하는지 알리기 위해서만 사용해요.',
        ],
      },
    ],
  },

  notFound: {
    title: '여기엔 핀이 없어요',
    description: '존재하지 않는 페이지예요.',
    code: '404 · 위도 ?? · 경도 ??',
    heading: '여기엔 아무것도 꽂혀 있지 않아요.',
    lead: '찾는 페이지가 옮겨졌거나, 처음부터 올라온 적이 없어요.',
    home: '지도로 돌아가기',
    journal: '저널 읽기',
  },
};

export default ko;
