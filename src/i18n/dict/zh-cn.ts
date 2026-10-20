import type { Dict } from './en';

/** Chinese (Simplified), translated from en.ts. */
const zhCn: Dict = {
  meta: {
    description:
      'Beenzer 把你的照片和视频钉在拍下它们的确切地点。关注好友，在地图上找到他们，还能把任何一刻留存为 Solana NFT，地点和时间都写在里面。',
    skip: '跳到主要内容',
    home: 'Beenzer 首页',
  },

  nav: {
    home: '首页',
    how: '运作方式',
    onchain: '链上',
    story: '故事',
    journal: '手记',
    faq: '常见问题',
    follow: '关注开发进展',
    menu: '菜单',
    main: '主导航',
    mobile: '移动端导航',
    product: 'Nexow, Inc. 旗下产品',
    language: '语言',
  },

  suggest: {
    text: '此页面也有简体中文版。',
    go: '阅读简体中文版',
    close: '不用了，谢谢',
  },

  places: {
    savigny: 'Savigny',
    lutry: 'Lutry',
    lausanne: '洛桑',
    vevey: '沃韦',
    tarifa: '塔里法',
    lisbon: '里斯本',
    berlin: '柏林',
    barcelona: '巴塞罗那',
    lagos: '拉各斯',
    mexicoCity: '墨西哥城',
    paris: '巴黎',
  },

  hero: {
    status: '正在用 Flutter 重建 · iOS 和 Android',
    lead: 'Beenzer 把你的照片和视频钉在拍下它们的确切地点。关注好友，在地图上找到他们，还能把任何一刻留存为 Solana NFT，连同地点和时间一起写进去。',
    how: '看看如何运作',
    follow: '关注开发进展',
    lat: '纬度',
    lon: '经度',
    alt: '高度',
    beats: ['每张照片，都来自*某个地方。*', '大多数应用都忘了是哪里。==Beenzer 记得。=='],
    arrival: {
      title: 'Vincent 到此一游。',
      alt: 'BEENZER #18 的照片：Vincent 在家中的自拍。',
      token: '代币',
      place: '地点',
      coords: '坐标',
      seen: '可见范围',
      supply: '发行量',
      floor: '地板价 {price}',
      solscan: '在 Solscan 上查看',
    },
    cue: '向下滚动，开始降落',
  },

  tour: {
    eyebrow: '运作方式',
    title: '一台相机，一张地图，一份关于地点的记忆。',
    steps: [
      {
        title: '地图就是首页。',
        body: '每个图钉都是一张照片或一段视频，就留在它被拍下的地方。点开一个，就能看到它，以及当时谁在那里。',
      },
      {
        title: '随手一拍。',
        body: '拍照、录视频、录一段声音，或从相册里挑一个。每条帖子最多 20 MB。',
      },
      {
        title: '钉在原地。',
        body: '你的帖子会落在你所站的位置。然后选择谁能找到它：所有人，或只有在你设定的半径内的人。',
      },
      {
        title: '分享给好友。',
        body: '关注好友，在地图或动态里看他们的帖子。互相关注后，就能聊天。',
      },
      {
        title: '铸成 NFT。',
        body: '任何帖子都能变成 Solana NFT。选好可发行的版数和价格，在 Phantom 中确认，第 1 版就会进入你的钱包。',
      },
    ],
    try: '试试看 · 可见范围',
    radius: '可见半径（公里）',
    phone: {
      audio: '音频',
      photo: '照片',
      video: '视频',
      newPost: '新帖子',
      caption: '霓虹时刻 💚',
      who: '谁能找到',
      everyone: '所有人',
      nearby: '附近',
      within: '{distance}以内',
      editions: '版数',
      drop: '就放这里',
      friends: '好友',
      public: '公开',
      message: '还在湖边吗？🌅',
      mint: '在 Solana 上铸造',
      price: '单价',
      royalties: '版税',
      approve: '在 Phantom 中确认',
      logs: ['媒体文件已存入 Arweave', '元数据已存入 Arweave', '已在 Beenzer 合集中铸造', '第 1 版已发送到你的钱包'],
    },
  },

  showcase: {
    card: '{name} 的卡片',
    alt: '铸造为 BEENZER #18 的照片：Vincent 在室内自拍。',
    description: '描述',
    meta: {
      city: '城市',
      coordinates: '坐标',
      date: '日期',
      time: '时间（UTC）',
      visibility: '可见范围',
      supply: '发行量',
      floor: '地板价',
      creator: '创作者',
    },
    eyebrow: '记录在案',
    title: '证明你来过。',
    lead: '铸造一条帖子，那一刻就永远写进了它里面。这是 BEENZER #18，2023 年 2 月 16 日在 Savigny 铸造。它的照片和元数据至今仍存放在 Arweave 上，与写入时一模一样。',
    carries: [
      ['谁', '创作者钱包和用户名'],
      ['什么', '媒体文件及其类型：照片、视频或声音'],
      ['何时', '日期和时间（UTC）'],
      ['何地', '城市、纬度和经度'],
      ['谁能看到', '可见半径，以地图上的方框表示'],
      ['多少', '发行量和地板价'],
    ],
    solscan: '在 Solscan 上查看 #18',
  },

  onchain: {
    eyebrow: '链上',
    title: '钱包就是你的账户。',
    lead: 'Beenzer 运行在 Solana 上。登录和铸造都在 Phantom 中完成，没有你的签名，什么都不会转出。',
    pillars: [
      {
        title: '用签名登录',
        body: '连接 Phantom，签署一条一次性消息。不需要邮箱，也没有会泄露的密码。',
      },
      {
        title: '存放在 Arweave',
        body: '照片、视频或声音及其元数据都会存到 Arweave，一种为长久保存而打造的存储网络。视频还会生成动态预览。',
      },
      {
        title: '限量发行',
        body: '每次铸造都是 Beenzer 合集中的一枚 Metaplex 可编程 NFT，版数由你决定。',
      },
      {
        title: '版税，一路随行',
        body: '转售时收取 10% 的版税，其中 80% 归创作者，20% 归 Beenzer，由 Metaplex 规则集强制执行。',
      },
    ],
    pipeTitle: '铸造时会发生什么',
    pipeBody: '铸造请求会排队处理。每一步进展，你都能在收件箱里实时看到。',
    pipeline: [
      '你在 Phantom 中确认',
      '付款已确认',
      '媒体文件上传到 Arweave',
      '元数据上传到 Arweave',
      'NFT 已铸造',
      '合集已验证',
      '第 1 版归你',
    ],
    built: '采用技术',
    roles: {
      chain: '区块链',
      nft: 'NFT 标准',
      storage: '存储',
      wallet: '钱包',
      apps: 'iOS 和 Android',
      map: '地图',
      server: '服务器',
    },
  },

  story: {
    eyebrow: '故事',
    title: '从 2022 年起，一直都在。',
    lead: 'Beenzer 诞生于 2022 年，是一款基于 Solana、能直接从手机相机铸造的社交应用。如今它正从零开始重建，围绕的仍是同一个想法：每一刻，都留住它的地点。',
    now: '现在',
    next: '接下来',
    timeline: [
      {
        title: 'Beenzer 起步',
        body: '一款基于 Solana 的移动 dApp，用 React Native 开发：拍下、铸造、放到地图上。',
      },
      {
        title: 'BEENZER #18',
        body: '在瑞士 Savigny 铸造。至今仍在链上，仍在 Arweave 上，也仍是本页降落的那条帖子。',
      },
      {
        title: '在 Nexow 安家',
        body: 'Beenzer 成为 Nexow, Inc. 旗下产品，并换上全新的代码库。',
      },
      {
        title: '用 Flutter 重建',
        body: '面向 iOS 和 Android 的全新 App，沿用同一个服务器：地图、动态、聊天、相机和铸造，支持浅色和深色模式。',
      },
      {
        title: '上线',
        body: '登陆 App Store 和 Google Play。持续关注，第一时间见证它落地。',
      },
    ],
    video: '初代 Beenzer App 的操作演示',
    sound: '声音',
    caption: '初代 App，基于 React Native 开发',
  },

  team: {
    eyebrow: '团队',
    title: '工程师、交易员、艺术家。信仰者。',
    lead: '第一代 Beenzer 由一支国际团队打造：成员横跨软件、数据、金融和艺术，来自{count}个国家。如今它由 [{company}](company) 打造，这家公司由其中两位成员创立。',
    numbers: ['零', '一', '两', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
    profile: '{name} 的个人资料',
    /** Keys are the English roles in src/data/team.ts. */
    roles: {
      'Software Engineer': '软件工程师',
      'Data Scientist': '数据科学家',
      'Options Trader': '期权交易员',
      'Accounting Chief': '会计主管',
      'Fitness King': '健身之王',
      'Community Manager': '社区经理',
      'Web3 Evangelist': 'Web3 布道师',
      'Metaverse Evangelist': '元宇宙布道师',
      'Operations Director': '运营总监',
      'Managing Partner': '管理合伙人',
      'Blockchain Manager': '区块链经理',
      'Bitcoin Evangelist': '比特币布道师',
      'NFT Artist': 'NFT 艺术家',
      'NFT Promoter': 'NFT 推广人',
      'Electronic Engineer': '电子工程师',
      'AI Expert': 'AI 专家',
      'Private Banker': '私人银行家',
      'EFA™-EFP™ CFA™': 'EFA™-EFP™ CFA™',
      'Data Analyst': '数据分析师',
      'Forex Trader': '外汇交易员',
      'Co-founder & CTO, Nexow': 'Nexow 联合创始人兼 CTO',
      'Co-founder & CEO, Nexow': 'Nexow 联合创始人兼 CEO',
    },
  },

  journal: {
    eyebrow: '手记',
    title: '来自地图的手记。',
    lead: 'App 的最新消息，以及关于它底层技术的指南。',
    description: '来自 Beenzer 的消息，以及关于地理 NFT、Solana 和这款 App 的指南。',
    all: '全部文章',
    read: '阅读',
    minutes: '{n} 分钟',
    minRead: '{n} 分钟阅读',
    more: '继续阅读',
    kinds: { News: '新闻', Guide: '指南' },
    untranslated: '这篇文章还没有中文译文，以下为英文原文。',
  },

  faq: {
    eyebrow: '常见问题',
    title: '好问题。',
    more: '还有别的问题？通过 [Nexow](contact) 联系我们。',
    items: [
      {
        q: '什么是 Beenzer？',
        a: '一款适用于 iOS 和 Android 的地理社交 App。你在拍摄地点发布照片和视频，关注好友，并在地图上找到他们的帖子。任何帖子都能在 Solana 上铸造成 NFT。',
      },
      {
        q: '可以下载了吗？',
        a: '还不行。App 正在用 Flutter 重建，最初的 React Native 版本也已从 Google Play 下架。在 X 或 Instagram 上关注 @beenzer_app，上线那天你就会知道。',
      },
      {
        q: '我需要加密钱包吗？',
        a: '需要：你要通过 Phantom 登录。连接钱包后签署一条一次性消息，证明钱包属于你，所以不需要邮箱，也不需要密码。Beenzer 永远看不到你的私钥。',
      },
      {
        q: '铸造要花多少钱？',
        a: '一笔以 SOL 支付的铸造费。在你于 Phantom 中确认任何操作之前，App 会先显示这笔费用以及收款钱包；没有你的签名，什么都不会转出。',
      },
      {
        q: '谁能看到我发布的内容？',
        a: '由你决定，每条帖子单独设置：所有人，或只有在你设定的半径内的人。地图会向每个人显示他们所在半径范围内的帖子，以及设为全球可见的帖子。',
      },
      {
        q: '铸造后的帖子包含什么？',
        a: '存放在 Arweave 上的媒体文件，以及元数据：你的用户名和钱包、日期和 UTC 时间、城市和坐标、可见半径、发行量和地板价。它是 Beenzer 合集中的一枚 Metaplex 可编程 NFT。',
      },
      {
        q: '什么是版数和版税？',
        a: '铸造时，你决定最多能发行多少版，以及每版的价格。第 1 版归你。每一枚 Beenzer 在铸造时都设定了 10% 的转售版税，其中 80% 归创作者，20% 归 Beenzer。',
      },
      {
        q: '一条帖子最大可以多大？',
        a: '媒体文件最多 20 MB，描述最多 2000 字。',
      },
      {
        q: 'Beenzer DAO 和它的代币后来怎么样了？',
        a: '它们是 2022 年最初设计的一部分。新版 App 围绕帖子和地图打造，本网站上的任何内容都不构成任何代币的要约。',
      },
      {
        q: 'Beenzer 背后是谁？',
        a: '{company}，一家特拉华州公司，为客户开发软件，也打造自己的 App。Beenzer 就是其中之一。',
      },
    ],
  },

  follow: {
    chip: '开发中',
    title: '第一时间，见证它==落地。==',
    lead: '全新的 Beenzer 即将登陆 iPhone 和 Android。持续关注，首次预览、测试版和上线那一天，都不会错过。',
    status: '开发中',
    press: '媒体、合作伙伴或投资者：[联系 Nexow](contact)。',
  },

  footer: {
    body: '照片和视频钉在拍下它们的地方，其中任何一个都能变成 Solana NFT。正用 Flutter 为 iOS 和 Android 重建。',
    community: '社区',
    company: '公司',
    studio: 'Nexow Studio',
    atNexow: 'Nexow 上的 Beenzer',
    contact: '联系我们',
    notice: '网站声明',
    productOf: '出品方',
    legal: '© {year} {company} 保留所有权利。Beenzer 是特拉华州公司 {company} 旗下的产品。',
    languages: '语言',
  },

  dao: {
    title: 'Beenzer DAO',
    description: 'Beenzer DAO 及其代币是 2022 年最初设计的一部分。下面说说 Beenzer 如今在链上做些什么。',
    eyebrow: 'DAO',
    heading: 'DAO 是初稿。',
    leads: [
      '2022 年，Beenzer 的设计围绕一个 DAO 展开，还有两种自己的代币。新版 App 则改为围绕帖子和地图打造。本网站上的任何内容都不构成任何代币的要约。',
      'Beenzer 如今在链上做的事：你用 Phantom 登录，任何帖子都能在 Solana 上铸造成 Metaplex NFT，存放在 Arweave 上，限量发行，并为创作者带来版税。',
    ],
    onchain: 'Beenzer 如何使用 Solana',
    faq: '常见问题',
  },

  legal: {
    title: '网站声明',
    description: '谁在运营本网站，它会拿你的数据做什么（什么都不做），以及相关细则。',
    eyebrow: '网站声明',
    heading: '细则在此。',
    updated: '最后更新：{date}',
    sections: [
      {
        title: '谁在运营本网站',
        body: [
          '本网站由 **{company}** 运营，这是一家于{incorporated}注册成立的特拉华州公司。Beenzer 是其产品之一。该公司的详细信息及其自身的政策见 [nexow.studio/legal](legal)，你也可以通过[联系页面](contact)与其取得联系。',
        ],
      },
      {
        title: '你在本网站上的数据',
        body: [
          '本网站不设置任何 Cookie，不运行任何分析工具、广告或追踪器，也没有任何表单。字体、图片、视频和地球仪的地图数据都由本网站自身提供，因此你访问本网站时，不会同时连接到任何其他方。',
          '和任何网站一样，提供这些网页的托管服务商可能会保留标准的技术日志，例如 IP 地址和浏览器版本，以维持网站的正常运行与安全。',
          '指向 X、Instagram、YouTube、GitHub、Solscan 或 Arweave 的链接会带你前往这些服务，在那里适用它们各自的政策。',
        ],
      },
      {
        title: 'App 本身',
        body: ['本声明仅适用于本网站。Beenzer App 上线时将附带其自身的使用条款和隐私政策。'],
      },
      {
        title: '不构成要约',
        body: [
          '本网站上的任何内容均不构成买卖任何代币、NFT 或证券的要约，也不构成财务建议。区块链交易无法撤销，数字资产的价值可能下跌，也可能上涨。',
        ],
      },
      {
        title: '翻译',
        body: ['本网站以英文撰写，并翻译成其他语言。如译文与英文版本不一致，以英文版本为准。'],
      },
      {
        title: '名称与商标',
        body: [
          'Beenzer 的名称和标志归 {company} 所有。Solana、Metaplex、Arweave、Phantom、Flutter、Google Maps、Node.js、Apple、Android、X、Instagram、YouTube 和 GitHub 是其各自所有者的名称，在此仅用于说明 Beenzer 与哪些产品搭配使用。',
        ],
      },
    ],
  },

  notFound: {
    title: '这里什么都没钉',
    description: '此页面不存在。',
    code: '404 · 纬度 ?? · 经度 ??',
    heading: '这里什么都没钉过。',
    lead: '你要找的页面已经移走了，或者从未发布过。',
    home: '回到地图',
    journal: '阅读手记',
  },
};

export default zhCn;
