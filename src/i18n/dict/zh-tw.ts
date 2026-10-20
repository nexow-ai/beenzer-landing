import type { Dict } from './en';

/** Chinese (Traditional, Taiwan), translated from en.ts. */
const zhTw: Dict = {
  meta: {
    description:
      'Beenzer 把你的照片和影片釘在拍下它們的確切地點。追蹤朋友、在地圖上找到他們，還能把任何一刻留存為 Solana NFT，地點和時間都寫在裡面。',
    skip: '跳至主要內容',
    home: 'Beenzer 首頁',
  },

  nav: {
    home: '首頁',
    how: '運作方式',
    onchain: '鏈上',
    story: '故事',
    journal: '日誌',
    faq: '常見問題',
    follow: '追蹤開發進度',
    menu: '選單',
    main: '主選單',
    mobile: '行動版選單',
    product: 'Nexow, Inc. 旗下產品',
    language: '語言',
  },

  suggest: {
    text: '本頁也有繁體中文版。',
    go: '閱讀繁體中文版',
    close: '不用了，謝謝',
  },

  places: {
    savigny: 'Savigny',
    lutry: 'Lutry',
    lausanne: '洛桑',
    vevey: 'Vevey',
    tarifa: '塔里法',
    lisbon: '里斯本',
    berlin: '柏林',
    barcelona: '巴塞隆納',
    lagos: '拉哥斯',
    mexicoCity: '墨西哥市',
    paris: '巴黎',
  },

  hero: {
    status: '正以 Flutter 重新打造 · iOS 與 Android',
    lead: 'Beenzer 把你的照片和影片釘在拍下它們的確切地點。追蹤朋友、在地圖上找到他們，還能把任何一刻留存為 Solana NFT，連同地點和時間一起寫進去。',
    how: '看看如何運作',
    follow: '追蹤開發進度',
    lat: '緯度',
    lon: '經度',
    alt: '高度',
    beats: ['每張照片，都來自*某個地方。*', '大多數 App 都忘了是哪裡。==Beenzer 記得。=='],
    arrival: {
      title: 'Vincent 到此一遊。',
      alt: 'BEENZER #18 的照片：Vincent 在家裡的自拍。',
      token: '代幣',
      place: '地點',
      coords: '座標',
      seen: '可見範圍',
      supply: '發行量',
      floor: '地板價 {price}',
      solscan: '到 Solscan 查看',
    },
    cue: '向下捲動，開始降落',
  },

  tour: {
    eyebrow: '運作方式',
    title: '一台相機，一張地圖，一份關於地點的記憶。',
    steps: [
      {
        title: '地圖就是首頁。',
        body: '每個圖釘都是一張照片或一段影片，就留在拍下它的地方。點一下就能看到內容，還有當時誰在那裡。',
      },
      {
        title: '隨手一拍。',
        body: '拍照、錄影片、錄一段聲音，或從相簿挑一個。每則貼文最多 20 MB。',
      },
      {
        title: '釘在原地。',
        body: '你的貼文會落在你所站的位置。接著選擇誰能找到它：所有人，或只有在你設定的半徑範圍內的人。',
      },
      {
        title: '分享給朋友。',
        body: '追蹤朋友，在地圖或動態消息中看他們的貼文。互相追蹤之後，就能聊天。',
      },
      {
        title: '鑄成 NFT。',
        body: '任何貼文都能變成 Solana NFT。選好可發行的版數和價格，在 Phantom 中核准，第 1 版就會送進你的錢包。',
      },
    ],
    try: '試試看 · 可見範圍',
    radius: '可見半徑（公里）',
    phone: {
      audio: '音訊',
      photo: '照片',
      video: '影片',
      newPost: '新貼文',
      caption: '霓虹時刻 💚',
      who: '誰能找到',
      everyone: '所有人',
      nearby: '附近',
      within: '{distance}以內',
      editions: '版數',
      drop: '就放這裡',
      friends: '朋友',
      public: '公開',
      message: '還在湖邊嗎？🌅',
      mint: '在 Solana 上鑄造',
      price: '單價',
      royalties: '版稅',
      approve: '在 Phantom 中核准',
      logs: ['媒體檔案已存到 Arweave', '中繼資料已存到 Arweave', '已在 Beenzer 系列中鑄造', '第 1 版已送到你的錢包'],
    },
  },

  showcase: {
    card: '{name} 的卡片',
    alt: '鑄造成 BEENZER #18 的照片：Vincent 在室內自拍。',
    description: '說明',
    meta: {
      city: '城市',
      coordinates: '座標',
      date: '日期',
      time: '時間（UTC）',
      visibility: '可見範圍',
      supply: '發行量',
      floor: '地板價',
      creator: '創作者',
    },
    eyebrow: '記錄在案',
    title: '證明你來過。',
    lead: '鑄造一則貼文，那一刻就永遠寫進了它裡面。這是 BEENZER #18，2023 年 2 月 16 日在 Savigny 鑄造。它的照片和中繼資料至今仍存放在 Arweave 上，和寫入時一模一樣。',
    carries: [
      ['誰', '創作者錢包與使用者名稱'],
      ['什麼', '媒體檔案及其類型：照片、影片或聲音'],
      ['何時', '日期與時間（UTC）'],
      ['何地', '城市、緯度與經度'],
      ['誰能看到', '可見半徑，以地圖上的方框表示'],
      ['多少', '發行量與地板價'],
    ],
    solscan: '到 Solscan 查看 #18',
  },

  onchain: {
    eyebrow: '鏈上',
    title: '錢包就是你的帳號。',
    lead: 'Beenzer 在 Solana 上運作。登入和鑄造都在 Phantom 裡完成，沒有你的簽名，什麼都不會轉出。',
    pillars: [
      {
        title: '用簽名登入',
        body: '連接 Phantom，簽署一則一次性訊息。不需要電子郵件，也沒有會外洩的密碼。',
      },
      {
        title: '保存在 Arweave',
        body: '照片、影片或聲音及其中繼資料都會存到 Arweave，一個為長久保存而打造的儲存網路。影片還會產生動態預覽。',
      },
      {
        title: '限量發行',
        body: '每次鑄造都是 Beenzer 系列中的一個 Metaplex 可程式化 NFT，版數由你決定。',
      },
      {
        title: '版稅一路跟著走',
        body: '轉售時收取 10% 的版稅，其中 80% 歸創作者、20% 歸 Beenzer，由 Metaplex 規則集強制執行。',
      },
    ],
    pipeTitle: '鑄造時會發生什麼事',
    pipeBody: '鑄造請求會排隊處理。每個步驟的進度，你都能在收件匣裡即時看到。',
    pipeline: [
      '你在 Phantom 中核准',
      '付款已確認',
      '媒體檔案上傳到 Arweave',
      '中繼資料上傳到 Arweave',
      'NFT 已鑄造',
      '系列已驗證',
      '第 1 版歸你',
    ],
    built: '採用技術',
    roles: {
      chain: '區塊鏈',
      nft: 'NFT 標準',
      storage: '儲存',
      wallet: '錢包',
      apps: 'iOS 與 Android',
      map: '地圖',
      server: '伺服器',
    },
  },

  story: {
    eyebrow: '故事',
    title: '從 2022 年起，一直都在。',
    lead: 'Beenzer 誕生於 2022 年，是一款在 Solana 上、能直接從手機相機鑄造的社群 App。現在它正從頭重新打造，核心仍是同一個想法：每一刻，都留住它的地點。',
    now: '現在',
    next: '接下來',
    timeline: [
      {
        title: 'Beenzer 誕生',
        body: '一款在 Solana 上運作的行動 dApp，以 React Native 開發：拍下、鑄造、放上地圖。',
      },
      {
        title: 'BEENZER #18',
        body: '在瑞士 Savigny 鑄造。至今仍在鏈上、仍在 Arweave 上，也仍是這個頁面降落的那則貼文。',
      },
      {
        title: '在 Nexow 找到新家',
        body: 'Beenzer 成為 Nexow, Inc. 旗下產品，並換上全新的程式碼庫。',
      },
      {
        title: '以 Flutter 重新打造',
        body: '為 iOS 與 Android 打造的全新 App，沿用同一台伺服器：地圖、動態消息、聊天、相機和鑄造，支援淺色與深色模式。',
      },
      {
        title: '上架',
        body: '上架 App Store 與 Google Play。持續追蹤，第一時間見證它登場。',
      },
    ],
    video: '初代 Beenzer App 的操作展示',
    sound: '聲音',
    caption: '初代 App，以 React Native 開發',
  },

  team: {
    eyebrow: '團隊',
    title: '工程師、交易員、藝術家。信仰者。',
    lead: '第一代 Beenzer 由一支國際團隊打造：成員橫跨軟體、資料、金融與藝術，來自{count}個國家。如今它由 [{company}](company) 打造，這家公司正是由其中兩位成員創辦。',
    numbers: ['零', '一', '兩', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
    profile: '{name} 的個人檔案',
    /** Keys are the English roles in src/data/team.ts. */
    roles: {
      'Software Engineer': '軟體工程師',
      'Data Scientist': '資料科學家',
      'Options Trader': '選擇權交易員',
      'Accounting Chief': '會計主管',
      'Fitness King': '健身之王',
      'Community Manager': '社群經理',
      'Web3 Evangelist': 'Web3 布道師',
      'Metaverse Evangelist': '元宇宙布道師',
      'Operations Director': '營運總監',
      'Managing Partner': '管理合夥人',
      'Blockchain Manager': '區塊鏈經理',
      'Bitcoin Evangelist': '比特幣布道師',
      'NFT Artist': 'NFT 藝術家',
      'NFT Promoter': 'NFT 推廣人',
      'Electronic Engineer': '電子工程師',
      'AI Expert': 'AI 專家',
      'Private Banker': '私人銀行家',
      'EFA™-EFP™ CFA™': 'EFA™-EFP™ CFA™',
      'Data Analyst': '資料分析師',
      'Forex Trader': '外匯交易員',
      'Co-founder & CTO, Nexow': 'Nexow 共同創辦人暨技術長',
      'Co-founder & CEO, Nexow': 'Nexow 共同創辦人暨執行長',
    },
  },

  journal: {
    eyebrow: '日誌',
    title: '來自地圖的筆記。',
    lead: 'App 的最新消息，以及它底層技術的介紹。',
    description: '來自 Beenzer 的消息，以及關於地理 NFT、Solana 和這款 App 的介紹。',
    all: '所有文章',
    read: '閱讀',
    minutes: '{n} 分鐘',
    minRead: '{n} 分鐘閱讀',
    more: '繼續閱讀',
    kinds: { News: '消息', Guide: '指南' },
    untranslated: '這篇文章尚未翻譯成中文，以下是英文原文。',
  },

  faq: {
    eyebrow: '常見問題',
    title: '好問題。',
    more: '還有其他問題？透過 [Nexow](contact) 寫信給我們。',
    items: [
      {
        q: '什麼是 Beenzer？',
        a: '一款適用於 iOS 與 Android 的地理社群 App。你在拍攝地點發布照片和影片、追蹤朋友，並在地圖上找到他們的貼文。任何貼文都能在 Solana 上鑄造成 NFT。',
      },
      {
        q: '可以下載了嗎？',
        a: '還不行。App 正以 Flutter 重新打造，最初的 React Native 版本也已從 Google Play 下架。在 X 或 Instagram 上追蹤 @beenzer_app，上架那天你就會知道。',
      },
      {
        q: '我需要加密貨幣錢包嗎？',
        a: '需要：Phantom 就是你登入的方式。連接錢包後簽署一則一次性訊息，證明這個錢包是你的，所以不需要電子郵件，也不需要密碼。Beenzer 永遠看不到你的私鑰。',
      },
      {
        q: '鑄造要花多少錢？',
        a: '一筆以 SOL 計價的鑄造費。在你於 Phantom 中核准任何操作之前，App 會先顯示這筆費用及收款錢包；沒有你的簽名，什麼都不會送出。',
      },
      {
        q: '誰能看到我發布的內容？',
        a: '由你決定，每則貼文分別設定：所有人，或只有在你設定的半徑範圍內的人。地圖會向每個人顯示他們所在半徑範圍內的貼文，以及設為全球可見的貼文。',
      },
      {
        q: '鑄造後的貼文包含什麼？',
        a: '存放在 Arweave 上的媒體檔案，以及中繼資料：你的使用者名稱和錢包、日期與 UTC 時間、城市與座標、可見半徑、發行量與地板價。它是 Beenzer 系列中的一個 Metaplex 可程式化 NFT。',
      },
      {
        q: '什麼是版數和版稅？',
        a: '鑄造時，你決定最多能發行幾版，以及每版的價格。第 1 版歸你。每個 Beenzer 鑄造時都設定了 10% 的轉售版稅，其中 80% 歸創作者、20% 歸 Beenzer。',
      },
      {
        q: '一則貼文最大可以多大？',
        a: '媒體檔案最多 20 MB，說明文字最多 2,000 字。',
      },
      {
        q: 'Beenzer DAO 和它的代幣後來怎麼了？',
        a: '它們是 2022 年最初設計的一部分。新版 App 以貼文和地圖為核心打造，本網站上的任何內容都不構成任何代幣的要約。',
      },
      {
        q: 'Beenzer 背後是誰？',
        a: '{company}，一家德拉瓦州公司，為客戶開發軟體，也打造自己的 App。Beenzer 就是其中之一。',
      },
    ],
  },

  follow: {
    chip: '開發中',
    title: '第一時間，見證它==登場。==',
    lead: '全新的 Beenzer 即將登上 iPhone 與 Android。持續追蹤，搶先看到第一手畫面、Beta 測試版，以及上架那一天。',
    status: '開發中',
    press: '媒體、合作夥伴或投資人：[寫信給 Nexow](contact)。',
  },

  footer: {
    body: '照片和影片釘在拍下它們的地方，任何一個都能變成 Solana NFT。正以 Flutter 為 iOS 與 Android 重新打造。',
    community: '社群',
    company: '公司',
    studio: 'Nexow Studio',
    atNexow: 'Nexow 上的 Beenzer',
    contact: '聯絡我們',
    notice: '網站聲明',
    productOf: '出品公司',
    legal: '© {year} {company} 版權所有。Beenzer 是德拉瓦州公司 {company} 旗下的產品。',
    languages: '語言',
  },

  dao: {
    title: 'Beenzer DAO',
    description: 'Beenzer DAO 及其代幣是 2022 年最初設計的一部分。以下說明 Beenzer 現在在鏈上做些什麼。',
    eyebrow: 'DAO',
    heading: 'DAO 是初稿。',
    leads: [
      '2022 年，Beenzer 原本是圍繞一個 DAO 設計的，還有兩種自己的代幣。新版 App 則改以貼文和地圖為核心打造。本網站上的任何內容都不構成任何代幣的要約。',
      'Beenzer 現在在鏈上做的事：你用 Phantom 登入，任何貼文都能在 Solana 上鑄造成 Metaplex NFT，保存在 Arweave 上，限量發行，並為創作者帶來版稅。',
    ],
    onchain: 'Beenzer 如何運用 Solana',
    faq: '常見問題',
  },

  legal: {
    title: '網站聲明',
    description: '誰在經營本網站、它會拿你的資料做什麼（什麼都不做），以及相關細則。',
    eyebrow: '網站聲明',
    heading: '細則在此。',
    updated: '最後更新：{date}',
    sections: [
      {
        title: '誰在經營本網站',
        body: [
          '本網站由 **{company}** 經營，這是一家於{incorporated}註冊成立的德拉瓦州公司。Beenzer 是其產品之一。該公司的詳細資訊及其自身的政策載於 [nexow.studio/legal](legal)，你也可以透過[聯絡頁面](contact)與其聯繫。',
        ],
      },
      {
        title: '你在本網站上的資料',
        body: [
          '本網站不設定任何 Cookie，不執行任何分析工具、廣告或追蹤器，也沒有任何表單。字型、圖片、影片和地球儀的地圖資料都由本網站自行提供，因此你造訪本網站時，不會同時連線到任何其他方。',
          '和所有網站一樣，提供這些網頁的主機服務商可能會保留標準的技術日誌，例如 IP 位址和瀏覽器版本，以維持網站的正常運作與安全。',
          '指向 X、Instagram、YouTube、GitHub、Solscan 或 Arweave 的連結會帶你前往這些服務，在那裡適用它們各自的政策。',
        ],
      },
      {
        title: 'App 本身',
        body: ['本聲明僅適用於本網站。Beenzer App 推出時將附有其自身的使用條款與隱私權政策。'],
      },
      {
        title: '不構成要約',
        body: [
          '本網站上的任何內容均不構成買賣任何代幣、NFT 或證券的要約，也不構成財務建議。區塊鏈交易無法撤銷，數位資產的價值可能下跌，也可能上漲。',
        ],
      },
      {
        title: '翻譯',
        body: ['本網站以英文撰寫，並翻譯成其他語言。如譯文與英文版本有所出入，以英文版本為準。'],
      },
      {
        title: '名稱與商標',
        body: [
          'Beenzer 的名稱和標誌歸 {company} 所有。Solana、Metaplex、Arweave、Phantom、Flutter、Google Maps、Node.js、Apple、Android、X、Instagram、YouTube 和 GitHub 為其各自擁有者的名稱，在此僅用於說明 Beenzer 與哪些產品搭配使用。',
        ],
      },
    ],
  },

  notFound: {
    title: '這裡什麼都沒釘',
    description: '此頁面不存在。',
    code: '404 · 緯度 ?? · 經度 ??',
    heading: '這裡什麼都沒釘過。',
    lead: '你要找的頁面已經移走了，或是從來沒有發布過。',
    home: '回到地圖',
    journal: '閱讀日誌',
  },
};

export default zhTw;
