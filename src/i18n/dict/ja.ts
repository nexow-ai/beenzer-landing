import type { Dict } from './en';

/** Japanese, translated from en.ts. */
const ja: Dict = {
  meta: {
    description:
      'Beenzerは、写真や動画を撮ったその場所にピン留めします。友だちをフォローして地図で見つけたり、どんな瞬間も、場所と時刻を刻んだSolanaのNFTとして残したりできます。',
    skip: '本文へスキップ',
    home: 'Beenzer ホーム',
  },

  nav: {
    home: 'ホーム',
    how: '使い方',
    onchain: 'オンチェーン',
    story: 'ストーリー',
    journal: 'ジャーナル',
    faq: 'FAQ',
    follow: '開発をフォロー',
    menu: 'メニュー',
    main: 'メイン',
    mobile: 'モバイル',
    product: 'Nexow, Inc.のプロダクト',
    language: '言語',
  },

  /** Shown to a visitor whose browser prefers Japanese, on a page in another language. */
  suggest: {
    text: 'このページは日本語でも読めます。',
    go: '日本語で読む',
    close: 'いいえ、結構です',
  },

  places: {
    savigny: 'サヴィニー',
    lutry: 'リュトリー',
    lausanne: 'ローザンヌ',
    vevey: 'ヴヴェイ',
    tarifa: 'タリファ',
    lisbon: 'リスボン',
    berlin: 'ベルリン',
    barcelona: 'バルセロナ',
    lagos: 'ラゴス',
    mexicoCity: 'メキシコシティ',
    paris: 'パリ',
  },

  hero: {
    status: 'Flutterで再構築中 · iOSとAndroid',
    lead: 'Beenzerは、写真や動画を撮ったその場所にピン留めします。友だちをフォローして地図で見つけたり、どんな瞬間も、場所と時刻を書き込んだSolanaのNFTとして残したりできます。',
    how: '使い方を見る',
    follow: '開発をフォロー',
    lat: '緯度',
    lon: '経度',
    alt: '高度',
    beats: ['どの写真にも、*撮られた場所がある。*', '多くのアプリは、それを忘れてしまう。==Beenzerは覚えている。=='],
    arrival: {
      title: 'Vincentはここにいた。',
      alt: 'BEENZER #18の写真：自宅で自撮りするVincent。',
      token: 'トークン',
      place: '場所',
      coords: '座標',
      seen: '表示範囲',
      supply: '発行数',
      floor: 'フロア価格 {price}',
      solscan: 'Solscanで確認する',
    },
    cue: 'スクロールで着地',
  },

  tour: {
    eyebrow: '使い方',
    title: 'カメラと、地図と、場所の記憶。',
    steps: [
      {
        title: 'ホームは地図。',
        body: 'ピンの一つひとつが、撮られた場所にそのまま残された写真や動画です。タップすると、その中身と、そこに誰がいたかが見られます。',
      },
      {
        title: '撮る。',
        body: '写真や動画を撮ったり、音を録ったり、ギャラリーから選んだりできます。1回の投稿は最大20MBです。',
      },
      {
        title: 'ピンを立てる。',
        body: '投稿は、あなたがいま立っている場所に置かれます。それから、見つけられる人を選びます。全員か、あなたが決めた半径の内側にいる人だけか。',
      },
      {
        title: 'シェアする。',
        body: '友だちをフォローすると、その投稿を地図やフィードで見られます。お互いにフォローすれば、チャットもできます。',
      },
      {
        title: 'ミントする。',
        body: 'どの投稿もSolanaのNFTにできます。発行できるエディションの数と価格を決めてPhantomで承認すると、エディション#1があなたのウォレットに届きます。',
      },
    ],
    try: '試してみる · 表示範囲',
    radius: '表示半径（km）',
    phone: {
      audio: '音声',
      photo: '写真',
      video: '動画',
      newPost: '新規投稿',
      caption: 'ネオンの時間 💚',
      who: '見つけられる人',
      everyone: '全員',
      nearby: '近くの人',
      within: '{distance}以内',
      editions: 'エディション',
      drop: 'ここに置く',
      friends: '友だち',
      public: '公開',
      message: 'まだ湖にいる？ 🌅',
      mint: 'Solanaでミント',
      price: '単価',
      royalties: 'ロイヤリティ',
      approve: 'Phantomで承認',
      logs: [
        'メディアをArweaveに保存しました',
        'メタデータをArweaveに保存しました',
        'Beenzerコレクションにミントしました',
        'エディション#1をウォレットに送りました',
      ],
    },
  },

  showcase: {
    card: '{name}のカード',
    alt: 'BEENZER #18としてミントされた写真：屋内で自撮りするVincent。',
    description: '説明',
    meta: {
      city: '都市',
      coordinates: '座標',
      date: '日付',
      time: '時刻（UTC）',
      visibility: '表示範囲',
      supply: '発行数',
      floor: 'フロア価格',
      creator: 'クリエイター',
    },
    eyebrow: '記録に残る',
    title: 'そこにいた証。',
    lead: '投稿をミントすると、その瞬間がいつまでも刻まれます。これはBEENZER #18。2023年2月16日にサヴィニーでミントされました。写真もメタデータも、書き込まれたときのまま、いまもArweaveに残っています。',
    carries: [
      ['誰が', 'クリエイターのウォレットとユーザー名'],
      ['何を', 'メディアとその種類（写真、動画、音声）'],
      ['いつ', 'UTCでの日付と時刻'],
      ['どこで', '都市、緯度、経度'],
      ['誰に見えるか', '表示半径を、地図上の四角形で表したもの'],
      ['いくつ', '発行数とフロア価格'],
    ],
    solscan: 'Solscanで#18を見る',
  },

  onchain: {
    eyebrow: 'オンチェーン',
    title: 'ウォレットが、あなたのアカウント。',
    lead: 'BeenzerはSolanaの上で動いています。サインインもミントもPhantomで行い、あなたの署名なしには何も動きません。',
    pillars: [
      {
        title: '署名でサインイン',
        body: 'Phantomを接続して、1回限りのメッセージに署名します。メールアドレスも、漏れるパスワードもありません。',
      },
      {
        title: 'Arweaveに保管',
        body: '写真、動画、音声とそのメタデータは、長く残るように作られたストレージArweaveに保存されます。動画にはアニメーションのプレビューが付きます。',
      },
      {
        title: '限定エディション',
        body: 'ミントはどれも、BeenzerコレクションのMetaplexプログラマブルNFTです。エディションの数は自由に決められます。',
      },
      {
        title: 'NFTと旅するロイヤリティ',
        body: '転売時には10%のロイヤリティがかかり、その80%がクリエイターに、20%がBeenzerに入ります。これはMetaplexのルールセットによって強制されます。',
      },
    ],
    pipeTitle: 'ミントすると何が起きるか',
    pipeBody: 'ミントは順番待ちの列に入ります。各ステップは、受信箱でリアルタイムに確認できます。',
    pipeline: [
      'Phantomで承認',
      '支払いを確認',
      'メディアをArweaveへ',
      'メタデータをArweaveへ',
      'NFTをミント',
      'コレクションを検証',
      'エディション#1があなたに',
    ],
    built: '使用技術',
    roles: {
      chain: 'チェーン',
      nft: 'NFT規格',
      storage: 'ストレージ',
      wallet: 'ウォレット',
      apps: 'iOSとAndroid',
      map: '地図',
      server: 'サーバー',
    },
  },

  story: {
    eyebrow: 'ストーリー',
    title: '2022年から、ここにいる。',
    lead: 'Beenzerは2022年、スマホのカメラから直接ミントできるソーシャルアプリとして、Solanaの上で始まりました。そしていま、「どの瞬間も、その場所を忘れない」という同じアイデアのもと、ゼロから作り直されています。',
    now: '現在',
    next: '今後',
    timeline: [
      {
        title: 'Beenzer誕生',
        body: 'React Nativeで作られた、Solana上のモバイルdAppです。撮って、ミントして、地図に置く。',
      },
      {
        title: 'BEENZER #18',
        body: 'スイスのサヴィニーでミントされました。いまもオンチェーンにあり、いまもArweaveにあり、いまもこのページが着地する投稿です。',
      },
      {
        title: 'Nexowという新しい居場所',
        body: 'BeenzerはNexow, Inc.のプロダクトになり、コードベースも新しくなります。',
      },
      {
        title: 'Flutterで再構築',
        body: '同じサーバーを使う、iOSとAndroid向けの新しいアプリです。地図、フィード、チャット、カメラ、ミントを、ライトとダークの両方で。',
      },
      {
        title: 'ローンチ',
        body: 'App StoreとGoogle Playに登場します。フォローしておけば、公開の瞬間に立ち会えます。',
      },
    ],
    video: '初代Beenzerアプリのウォークスルー',
    sound: 'サウンド',
    caption: 'React Nativeで作られた初代アプリ',
  },

  team: {
    eyebrow: 'クルー',
    title: 'エンジニア、トレーダー、アーティスト。そして、信じる人たち。',
    lead: '初代Beenzerを作ったのは、ソフトウェア、データ、金融、アートに携わる、{count}か国出身の国際的なクルーでした。いまは、そのうちの2人が創業した[{company}](company)で作られています。',
    numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    profile: '{name}のプロフィール',
    roles: {
      'Software Engineer': 'ソフトウェアエンジニア',
      'Data Scientist': 'データサイエンティスト',
      'Options Trader': 'オプショントレーダー',
      'Accounting Chief': '経理責任者',
      'Fitness King': 'フィットネス王',
      'Community Manager': 'コミュニティマネージャー',
      'Web3 Evangelist': 'Web3エバンジェリスト',
      'Metaverse Evangelist': 'メタバースエバンジェリスト',
      'Operations Director': 'オペレーションディレクター',
      'Managing Partner': 'マネージングパートナー',
      'Blockchain Manager': 'ブロックチェーンマネージャー',
      'Bitcoin Evangelist': 'ビットコインエバンジェリスト',
      'NFT Artist': 'NFTアーティスト',
      'NFT Promoter': 'NFTプロモーター',
      'Electronic Engineer': '電子エンジニア',
      'AI Expert': 'AIエキスパート',
      'Private Banker': 'プライベートバンカー',
      'EFA™-EFP™ CFA™': 'EFA™-EFP™ CFA™',
      'Data Analyst': 'データアナリスト',
      'Forex Trader': 'FXトレーダー',
      'Co-founder & CTO, Nexow': 'Nexow 共同創業者兼CTO',
      'Co-founder & CEO, Nexow': 'Nexow 共同創業者兼CEO',
    },
  },

  journal: {
    eyebrow: 'ジャーナル',
    title: '地図からの便り。',
    lead: 'アプリのニュースと、それを支える仕組みのガイドです。',
    description: 'Beenzerからのニュースと、ジオNFT、Solana、アプリについてのガイド。',
    all: 'すべての記事',
    read: '読む',
    minutes: '{n}分',
    minRead: '{n}分で読めます',
    more: 'あわせて読む',
    kinds: { News: 'ニュース', Guide: 'ガイド' },
    untranslated: 'この記事はまだ翻訳されていないため、英語のままお届けします。',
  },

  faq: {
    eyebrow: 'よくある質問',
    title: 'どれも、いい質問。',
    more: 'ほかにも気になることがあれば、[Nexow](contact)からお問い合わせください。',
    items: [
      {
        q: 'Beenzerとは？',
        a: 'iOSとAndroid向けのジオソーシャルアプリです。写真や動画を撮った場所に投稿し、友だちをフォローして、その投稿を地図で見つけられます。どの投稿も、SolanaのNFTとしてミントできます。',
      },
      {
        q: 'ダウンロードできますか？',
        a: 'まだできません。アプリはFlutterで作り直している最中で、React Nativeで作られた初代版は、もうGoogle Playにはありません。公開日を知りたい方は、XかInstagramで@beenzer_appをフォローしてください。',
      },
      {
        q: '暗号資産のウォレットは必要ですか？',
        a: 'はい。Phantomでサインインします。Phantomを接続し、1回限りのメッセージに署名して、そのウォレットが自分のものだと証明します。だからメールアドレスもパスワードもありません。Beenzerがあなたの鍵を見ることはありません。',
      },
      {
        q: 'ミントにはいくらかかりますか？',
        a: 'SOLでのミント手数料がかかります。Phantomで何かを承認する前に、アプリが手数料と、その送り先のウォレットを表示します。あなたの署名なしには、何も送られません。',
      },
      {
        q: '投稿は誰が見られますか？',
        a: '投稿ごとに選べます。全員か、あなたが設定した半径の内側にいる人だけか。地図には、その人が半径の内側にいる投稿と、全世界に公開された投稿が表示されます。',
      },
      {
        q: 'ミントした投稿には何が含まれますか？',
        a: 'Arweaveに保管されたメディアと、メタデータです。メタデータには、ユーザー名とウォレット、日付とUTC時刻、都市と座標、表示半径、発行数、フロア価格が入ります。BeenzerコレクションのMetaplexプログラマブルNFTです。',
      },
      {
        q: 'エディションとロイヤリティとは？',
        a: 'ミントするときに、発行できるエディションの数と価格を決めます。エディション#1はあなたのものです。どのBeenzerも、転売時に10%のロイヤリティが付く形でミントされ、その80%がクリエイターに、20%がBeenzerに入ります。',
      },
      {
        q: '投稿のサイズに上限はありますか？',
        a: 'メディアは最大20MB、説明文は最大2,000文字です。',
      },
      {
        q: 'Beenzer DAOとそのトークンはどうなりましたか？',
        a: 'どちらも2022年の初期設計の一部でした。新しいアプリは投稿と地図を中心に作られています。このサイトに、トークンのオファーにあたるものは一切ありません。',
      },
      {
        q: 'Beenzerを作っているのは？',
        a: '{company}です。クライアント向けのソフトウェアと自社アプリを開発する、デラウェア州法人です。Beenzerは、その自社アプリの一つです。',
      },
    ],
  },

  follow: {
    chip: '開発中',
    title: 'リリースの瞬間に、==立ち会おう。==',
    lead: '新しいBeenzerは、iPhoneとAndroidに向けて準備中です。フォローしておけば、最初のお披露目も、ベータ版も、リリースの日も見逃しません。',
    status: '開発中',
    press: 'プレス、パートナー、投資家の方は、[Nexowへご連絡ください](contact)。',
  },

  footer: {
    body: '撮った場所にピン留めされる写真と動画。そのどれもが、SolanaのNFTになれます。iOSとAndroid向けに、Flutterで作り直しています。',
    community: 'コミュニティ',
    company: '会社',
    studio: 'Nexow Studio',
    atNexow: 'NexowでのBeenzer',
    contact: 'お問い合わせ',
    notice: 'サイトについて',
    productOf: '提供',
    legal: '© {year} {company} All rights reserved. Beenzerは、デラウェア州法人である{company}のプロダクトです。',
    languages: '言語',
  },

  dao: {
    title: 'Beenzer DAO',
    description: 'Beenzer DAOとそのトークンは、2022年の初期設計の一部でした。いまのBeenzerがオンチェーンでしていること。',
    eyebrow: 'DAO',
    heading: 'DAOは最初の草案だった。',
    leads: [
      '2022年、BeenzerはDAOと、2種類の独自トークンを中心に設計されていました。新しいアプリは、その代わりに投稿と地図を中心に作られています。このサイトに、トークンのオファーにあたるものは一切ありません。',
      'いまのBeenzerがオンチェーンでしていること：Phantomでサインインし、どの投稿もSolana上のMetaplex NFTとしてミントできます。Arweaveに保管され、限定エディションと、クリエイターへのロイヤリティが付きます。',
    ],
    onchain: 'BeenzerのSolanaの使い方',
    faq: 'よくある質問',
  },

  legal: {
    title: 'サイトについて',
    description: 'このサイトの運営者、あなたのデータの扱い（何もしません）、そして細かな注意書き。',
    eyebrow: 'サイトについて',
    heading: '細かな注意書き。',
    updated: '最終更新：{date}',
    sections: [
      {
        title: 'このサイトの運営者',
        body: [
          'このウェブサイトは、{incorporated}に設立されたデラウェア州法人**{company}**が運営しています。Beenzerは同社のプロダクトの一つです。同社の詳細と同社自身のポリシーは[nexow.studio/legal](legal)に掲載されており、[お問い合わせページ](contact)から連絡できます。',
        ],
      },
      {
        title: 'このサイトでのあなたのデータ',
        body: [
          'このサイトはCookieを設定せず、アクセス解析、広告、トラッカーを一切使用せず、フォームもありません。フォント、画像、動画、地球儀の地図データはすべてこのサイト自身から配信しているため、このサイトを訪れても、ほかの誰かのもとへ接続されることはありません。',
          'ほかのウェブサイトと同じく、これらのページを配信するホスティング事業者は、サイトの運営と安全のために、IPアドレスやブラウザのバージョンといった標準的な技術ログを保持する場合があります。',
          'X、Instagram、YouTube、GitHub、Solscan、Arweaveへのリンクは、それぞれのサービスへ移動します。移動先では、各サービスのポリシーが適用されます。',
          '言語を選んだとき、または別の言語で読む提案を断ったとき、その選択はブラウザがお使いの端末のローカルストレージに保存します（Cookieではありません）。どこにも送信されません。',
        ],
      },
      {
        title: 'アプリについて',
        body: ['この注意書きは、このウェブサイトのみを対象としています。Beenzerアプリは、独自の利用規約とプライバシーポリシーを備えて公開されます。'],
      },
      {
        title: 'オファーではありません',
        body: [
          'このサイトのいかなる内容も、トークン、NFT、証券の売買の申し出ではなく、金融に関する助言でもありません。ブロックチェーンの取引は取り消すことができず、デジタル資産の価値は上がることも下がることもあります。',
        ],
      },
      {
        title: '翻訳について',
        body: [
          'このサイトは英語で書かれ、ほかの言語に翻訳されています。翻訳と英語版の内容が異なる場合は、英語版が優先されます。',
        ],
      },
      {
        title: '名称と商標',
        body: [
          'Beenzerの名称とロゴは{company}に帰属します。Solana、Metaplex、Arweave、Phantom、Flutter、Google Maps、Node.js、Apple、Android、X、Instagram、YouTube、GitHubは、それぞれの所有者の名称であり、ここではBeenzerが何と連携しているかを示すためにのみ使用しています。',
        ],
      },
    ],
  },

  notFound: {
    title: 'ここには何もピン留めされていません',
    description: 'このページは存在しません。',
    code: '404 · 緯度 ?? · 経度 ??',
    heading: 'ここには何もピン留めされていない。',
    lead: 'お探しのページは移動したか、もともと投稿されていなかったようです。',
    home: '地図に戻る',
    journal: 'ジャーナルを読む',
  },
};

export default ja;
