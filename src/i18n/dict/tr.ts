import type { Dict } from './en';

/** Turkish, translated from en.ts. */
const tr: Dict = {
  meta: {
    description:
      "Beenzer, fotoğraflarınızı ve videolarınızı tam çektiğiniz yere sabitler. Arkadaşlarınızı takip edin, onları haritada bulun ve istediğiniz anı, yeri ve zamanı içine yazılmış bir Solana NFT'si olarak saklayın.",
    skip: 'İçeriğe geç',
    home: 'Beenzer, ana sayfa',
  },

  nav: {
    home: 'Ana sayfa',
    how: 'Nasıl çalışır',
    onchain: 'Zincir üstü',
    story: 'Hikâye',
    journal: 'Günlük',
    faq: 'SSS',
    follow: 'Gelişmeleri takip edin',
    menu: 'Menü',
    main: 'Ana menü',
    mobile: 'Mobil menü',
    product: 'Bir Nexow, Inc. ürünü',
    language: 'Dil',
  },

  /** Shown to a visitor whose browser prefers Turkish, on a page in another language. */
  suggest: {
    text: 'Bu sayfanın Türkçesi de var.',
    go: 'Türkçe okuyun',
    close: 'Hayır, teşekkürler',
  },

  places: {
    savigny: 'Savigny',
    lutry: 'Lutry',
    lausanne: 'Lozan',
    vevey: 'Vevey',
    tarifa: 'Tarifa',
    lisbon: 'Lizbon',
    berlin: 'Berlin',
    barcelona: 'Barselona',
    lagos: 'Lagos',
    mexicoCity: 'Meksiko',
    paris: 'Paris',
  },

  hero: {
    status: 'Flutter ile yeniden yapılıyor · iOS ve Android',
    lead: "Beenzer, fotoğraflarınızı ve videolarınızı tam çektiğiniz yere sabitler. Arkadaşlarınızı takip edin, onları haritada bulun ve istediğiniz anı, yeri ve saati içine yazılmış bir Solana NFT'si olarak saklayın.",
    how: 'Nasıl çalıştığını görün',
    follow: 'Gelişmeleri takip edin',
    lat: 'Enlem',
    lon: 'Boylam',
    alt: 'İrtifa',
    beats: ['Her fotoğraf *bir yerde* çekilir.', 'Çoğu uygulama nerede çekildiğini unutur. ==Beenzer saklar.=='],
    arrival: {
      title: 'Vincent buradaydı.',
      alt: "BEENZER #18'in fotoğrafı: Vincent evde selfie çekiyor.",
      token: 'Token',
      place: 'Yer',
      coords: 'Koordinat',
      seen: 'Görünürlük',
      supply: 'Arz',
      floor: 'taban fiyat {price}',
      solscan: 'Solscan üzerinden kontrol edin',
    },
    cue: 'İnmek için kaydırın',
  },

  tour: {
    eyebrow: 'Nasıl çalışır',
    title: 'Bir kamera, bir harita ve bir yer hafızası.',
    steps: [
      {
        title: 'Harita sizin eviniz.',
        body: 'Her raptiye, tam çekildiği yere bırakılmış bir fotoğraf ya da video. Birine dokunun; onu ve orada kimin olduğunu görün.',
      },
      {
        title: 'Çekin.',
        body: 'Fotoğraf ya da video çekin, ses kaydedin veya galerinizden bir şey seçin. Gönderi başına en fazla 20 MB.',
      },
      {
        title: 'Sabitleyin.',
        body: 'Gönderiniz tam bulunduğunuz yere iner. Sonra onu kimin bulabileceğini seçin: herkes ya da yalnızca belirlediğiniz yarıçapın içindekiler.',
      },
      {
        title: 'Paylaşın.',
        body: 'Arkadaşlarınızı takip edin, gönderilerini haritada ya da akışınızda görün. Birbirinizi takip ederseniz sohbet edebilirsiniz.',
      },
      {
        title: 'NFT olarak basın.',
        body: "Her gönderi bir Solana NFT'si olabilir. Kaç baskı olabileceğini ve fiyatını seçin, Phantom'da onaylayın; 1 numaralı baskı cüzdanınıza gelir.",
      },
    ],
    try: 'Deneyin · görünürlük yarıçapı',
    radius: 'Km cinsinden görünürlük yarıçapı',
    /** The app's own screens, drawn on the phone. */
    phone: {
      audio: 'Ses',
      photo: 'Fotoğraf',
      video: 'Video',
      newPost: 'Yeni gönderi',
      caption: 'Neon saati 💚',
      who: 'Kim bulabilir',
      everyone: 'Herkes',
      nearby: 'Yakındakiler',
      within: '{distance} içinde',
      editions: 'Baskı',
      drop: 'Buraya bırak',
      friends: 'Arkadaşlar',
      public: 'Herkese açık',
      message: 'Hâlâ göl kenarında mısın? 🌅',
      mint: "Solana'da bas",
      price: 'Birim fiyat',
      royalties: 'Telif payı',
      approve: "Phantom'da onayla",
      logs: [
        "Medya Arweave'e kaydedildi",
        "Meta veri Arweave'e kaydedildi",
        'Beenzer koleksiyonunda basıldı',
        'Baskı #1 cüzdanınıza gönderildi',
      ],
    },
  },

  showcase: {
    card: '{name} kartı',
    alt: 'BEENZER #18 olarak basılan fotoğraf: Vincent, içeride selfie çekiyor.',
    description: 'Açıklama',
    meta: {
      city: 'Şehir',
      coordinates: 'Koordinatlar',
      date: 'Tarih',
      time: 'Saat (UTC)',
      visibility: 'Görünürlük',
      supply: 'Arz',
      floor: 'Taban fiyat',
      creator: 'Yaratıcı',
    },
    eyebrow: 'Kayıt altında',
    title: 'Orada olduğunuzun kanıtı.',
    lead: "Bir gönderiyi bastığınızda o an kalıcı olarak içine yazılır. Bu, 16 Şubat 2023'te Savigny'de basılan BEENZER #18. Fotoğrafı ve meta verisi hâlâ Arweave'de, tam yazıldıkları hâliyle duruyor.",
    /** What the server writes into every Beenzer's metadata. */
    carries: [
      ['Kim', 'Yaratıcının cüzdanı ve kullanıcı adı'],
      ['Ne', 'Medya ve türü: fotoğraf, video ya da ses'],
      ['Ne zaman', 'UTC olarak tarih ve saat'],
      ['Nerede', 'Şehir, enlem ve boylam'],
      ['Kim görebilir', 'Haritada bir kutu olarak görünürlük yarıçapı'],
      ['Kaç tane', 'Arz ve taban fiyat'],
    ],
    solscan: "#18'i Solscan üzerinde görün",
  },

  onchain: {
    eyebrow: 'Zincir üstü',
    title: 'Cüzdanınız, hesabınızdır.',
    lead: "Beenzer, Solana üzerinde çalışır. Giriş de basım da Phantom'da yapılır ve imzanız olmadan hiçbir şey yerinden oynamaz.",
    pillars: [
      {
        title: 'İmzayla giriş',
        body: "Phantom'u bağlayın ve tek seferlik bir mesajı imzalayın. E-posta yok, sızabilecek bir şifre de yok.",
      },
      {
        title: "Arweave'de saklanır",
        body: "Fotoğraf, video ya da ses ve meta verisi, uzun ömürlü olacak şekilde kurulmuş bir depolama sistemi olan Arweave'e gider. Videolara hareketli bir önizleme eklenir.",
      },
      {
        title: 'Sınırlı baskılar',
        body: "Her basım, Beenzer koleksiyonunda bir Metaplex programlanabilir NFT'sidir. Kaç baskısı olacağını siz seçersiniz.",
      },
      {
        title: "NFT'yle dolaşan telif",
        body: "Yeniden satışlarda %10 telif payı alınır; bunun %80'i yaratıcıya, %20'si Beenzer'a gider ve bunu bir Metaplex kural seti zorunlu kılar.",
      },
    ],
    pipeTitle: 'Bastığınızda neler olur',
    pipeBody: 'Basımlar bir kuyrukta bekler. Her adımı gelen kutunuzdan canlı olarak takip edersiniz.',
    pipeline: [
      "Phantom'da onaylarsınız",
      'Ödeme onaylandı',
      "Medya Arweave'e",
      "Meta veri Arweave'e",
      'NFT basıldı',
      'Koleksiyon doğrulandı',
      'Baskı #1 size',
    ],
    built: 'Kullanılan teknolojiler',
    roles: {
      chain: 'Zincir',
      nft: 'NFT standardı',
      storage: 'Depolama',
      wallet: 'Cüzdan',
      apps: 'iOS ve Android',
      map: 'Harita',
      server: 'Sunucu',
    },
  },

  story: {
    eyebrow: 'Hikâye',
    title: "2022'den beri buradayız.",
    lead: "Beenzer, 2022'de Solana üzerinde, doğrudan telefon kamerasından basım yapan bir sosyal uygulama olarak başladı. Şimdi aynı fikir etrafında sıfırdan yeniden yapılıyor: her an yerini korur.",
    now: 'Şimdi',
    next: 'Sırada',
    timeline: [
      {
        title: 'Beenzer başlıyor',
        body: 'Solana üzerinde, React Native ile yapılmış bir mobil dApp: çek, bas, haritaya bırak.',
      },
      {
        title: 'BEENZER #18',
        body: "Savigny, İsviçre'de basıldı. Hâlâ zincirde, hâlâ Arweave'de, hâlâ bu sayfanın indiği gönderi.",
      },
      {
        title: "Nexow'da yeni bir yuva",
        body: 'Beenzer bir Nexow, Inc. ürünü olur ve yepyeni bir kod tabanına kavuşur.',
      },
      {
        title: 'Flutter ile yeniden yapım',
        body: 'Aynı sunucu üzerinde, iOS ve Android için yeni bir uygulama: harita, akış, sohbet, kamera ve basım; açık ve koyu temada.',
      },
      {
        title: 'Lansman',
        body: "App Store'da ve Google Play'de. Geldiğinde orada olmak için takipte kalın.",
      },
    ],
    video: 'Orijinal Beenzer uygulamasında bir gezinti',
    sound: 'Ses',
    caption: 'React Native ile yapılmış orijinal uygulama',
  },

  team: {
    eyebrow: 'Ekip',
    title: "Mühendisler, trader'lar, sanatçılar. İnananlar.",
    lead: 'İlk Beenzer, uluslararası bir ekip tarafından yapıldı: yazılım, veri, finans ve sanat alanlarından, {count} ülkeden insanlar. Bugün, içlerinden ikisinin kurduğu [{company}](company) bünyesinde geliştiriliyor.',
    /** Spelled out for the count of countries above. */
    numbers: ['sıfır', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz', 'on', 'on bir', 'on iki'],
    profile: '{name} profili',
    /** Each member's roles, by their English name in src/data/team.ts. */
    roles: {
      'Software Engineer': 'Yazılım Mühendisi',
      'Data Scientist': 'Veri Bilimci',
      'Options Trader': "Opsiyon Trader'ı",
      'Accounting Chief': 'Muhasebe Şefi',
      'Fitness King': 'Fitness Kralı',
      'Community Manager': 'Topluluk Yöneticisi',
      'Web3 Evangelist': 'Web3 Elçisi',
      'Metaverse Evangelist': 'Metaverse Elçisi',
      'Operations Director': 'Operasyon Direktörü',
      'Managing Partner': 'Yönetici Ortak',
      'Blockchain Manager': 'Blokzincir Yöneticisi',
      'Bitcoin Evangelist': 'Bitcoin Elçisi',
      'NFT Artist': 'NFT Sanatçısı',
      'NFT Promoter': 'NFT Promotörü',
      'Electronic Engineer': 'Elektronik Mühendisi',
      'AI Expert': 'Yapay Zekâ Uzmanı',
      'Private Banker': 'Özel Bankacı',
      'EFA™-EFP™ CFA™': 'EFA™-EFP™ CFA™',
      'Data Analyst': 'Veri Analisti',
      'Forex Trader': "Forex Trader'ı",
      'Co-founder & CTO, Nexow': "Nexow Kurucu Ortağı ve CTO'su",
      'Co-founder & CEO, Nexow': "Nexow Kurucu Ortağı ve CEO'su",
    },
  },

  journal: {
    eyebrow: 'Günlük',
    title: 'Haritadan notlar.',
    lead: 'Uygulamayla ilgili haberler ve altında neler olduğunu anlatan rehberler.',
    description: "Beenzer haberleri; geo-NFT'ler, Solana ve uygulama üzerine rehberler.",
    all: 'Tüm yazılar',
    read: 'Okuyun',
    minutes: '{n} dk',
    minRead: '{n} dk okuma',
    more: 'Okumaya devam edin',
    kinds: { News: 'Haber', Guide: 'Rehber' },
    /** Over an article shown in English because it has no translation yet. */
    untranslated: 'Bu yazı henüz Türkçeye çevrilmedi; bu yüzden İngilizcesini okuyorsunuz.',
  },

  faq: {
    eyebrow: 'SSS',
    title: 'Güzel sorular.',
    more: 'Başka bir sorunuz mu var? Bize [Nexow](contact) üzerinden yazın.',
    items: [
      {
        q: 'Beenzer nedir?',
        a: 'iOS ve Android için konum tabanlı bir sosyal uygulama. Fotoğraf ve videolarınızı çektiğiniz yerde paylaşır, arkadaşlarınızı takip eder ve gönderilerini haritada bulursunuz. Her gönderi Solana üzerinde bir NFT olarak basılabilir.',
      },
      {
        q: 'İndirebilir miyim?',
        a: "Henüz değil. Uygulama Flutter ile yeniden yapılıyor ve orijinal React Native sürümü artık Google Play'de yok. Çıktığı günü duymak için @beenzer_app hesabını X'te ya da Instagram'da takip edin.",
      },
      {
        q: 'Kripto cüzdanına ihtiyacım var mı?',
        a: 'Evet: Phantom ile giriş yaparsınız. Cüzdanı bağlar ve size ait olduğunu kanıtlamak için tek seferlik bir mesajı imzalarsınız; yani e-posta da şifre de yok. Beenzer anahtarlarınızı asla görmez.',
      },
      {
        q: 'Basım ne kadar tutar?',
        a: "SOL cinsinden bir basım ücreti. Phantom'da herhangi bir şeyi onaylamadan önce uygulama bu ücreti ve gideceği cüzdanı gösterir; imzanız olmadan hiçbir şey gönderilmez.",
      },
      {
        q: 'Paylaştıklarımı kim görebilir?',
        a: 'Her gönderi için ayrı ayrı siz seçersiniz: herkes ya da yalnızca belirlediğiniz yarıçapın içindekiler. Harita her kişiye, yarıçapının içinde bulunduğu gönderileri ve dünya geneline açık olanları gösterir.',
      },
      {
        q: 'Basılmış bir gönderide neler bulunur?',
        a: "Arweave'de saklanan medya ve şu bilgileri içeren meta veri: kullanıcı adınız ve cüzdanınız, tarih ve UTC saati, şehir ve koordinatlar, görünürlük yarıçapı, arz ve taban fiyat. Beenzer koleksiyonunda bir Metaplex programlanabilir NFT'sidir.",
      },
      {
        q: 'Baskılar ve telif payları nedir?',
        a: "Basım yaparken kaç baskı olabileceğini ve fiyatını siz seçersiniz. 1 numaralı baskı size gelir. Her Beenzer, yeniden satışlarda %10 telif payıyla basılır; bunun %80'i yaratıcıya, %20'si Beenzer'a gider.",
      },
      {
        q: 'Bir gönderi ne kadar büyük olabilir?',
        a: 'En fazla 20 MB medya ve en fazla 2.000 karakterlik bir açıklama.',
      },
      {
        q: "Beenzer DAO'ya ve token'larına ne oldu?",
        a: "Bunlar 2022'deki ilk tasarımın parçasıydı. Yeni uygulama gönderiler ve harita etrafında kuruluyor; bu sitedeki hiçbir şey herhangi bir token için teklif değildir.",
      },
      {
        q: "Beenzer'ın arkasında kim var?",
        a: '{company}: müşterileri için yazılım, kendisi için de uygulamalar geliştiren bir Delaware şirketi. Beenzer bu uygulamalardan biri.',
      },
    ],
  },

  follow: {
    chip: 'Yapım aşamasında',
    title: 'Orada olun, ==geldiğinde.==',
    lead: "Yeni Beenzer iPhone ve Android'e geliyor. İlk bakış, beta ve çıkış günü için takipte kalın.",
    status: 'yapım aşamasında',
    press: "Basın, iş ortakları ya da yatırımcılar: [Nexow'a yazın](contact).",
  },

  footer: {
    body: "Çekildikleri yere sabitlenen fotoğraflar ve videolar; her biri bir Solana NFT'sine dönüşebilir. iOS ve Android için Flutter ile yeniden yapılıyor.",
    community: 'Topluluk',
    company: 'Şirket',
    studio: 'Nexow Studio',
    atNexow: "Nexow'da Beenzer",
    contact: 'İletişim',
    notice: 'Yasal bilgiler',
    productOf: 'Geliştiren',
    legal: '© {year} {company} Tüm hakları saklıdır. Beenzer, bir Delaware şirketi olan {company} ürünüdür.',
    languages: 'Diller',
  },

  dao: {
    title: 'Beenzer DAO',
    description: "Beenzer DAO ve token'ları, 2022'deki ilk tasarımın parçasıydı. İşte Beenzer'ın bugün zincir üstünde yaptıkları.",
    eyebrow: 'DAO',
    heading: 'DAO ilk taslaktı.',
    leads: [
      "2022'de Beenzer, kendine ait iki token'ı olan bir DAO etrafında tasarlanmıştı. Yeni uygulama ise bunun yerine gönderiler ve harita etrafında kuruluyor. Bu sitedeki hiçbir şey herhangi bir token için teklif değildir.",
      "Beenzer'ın bugün zincir üstünde yaptıkları: Phantom ile giriş yaparsınız ve her gönderi, Arweave'de saklanan, sınırlı baskıları ve yaratıcısı için telif payı olan bir Metaplex NFT'si olarak Solana üzerinde basılabilir.",
    ],
    onchain: "Beenzer, Solana'yı nasıl kullanıyor",
    faq: 'SSS',
  },

  legal: {
    title: 'Yasal bilgiler',
    description: 'Bu siteyi kimin işlettiği, verilerinizle ne yaptığı (hiçbir şey) ve ince ayrıntılar.',
    eyebrow: 'Yasal bilgiler',
    heading: 'İnce ayrıntılar.',
    updated: 'Son güncelleme: {date}',
    sections: [
      {
        title: 'Bu siteyi kim işletiyor',
        body: [
          'Bu web sitesi, {incorporated} tarihinde kurulmuş bir Delaware şirketi olan **{company}** tarafından işletilmektedir. Beenzer, şirketin ürünlerinden biridir. Şirketin bilgileri ve kendi politikaları [nexow.studio/legal](legal) adresinde yer alır; şirkete [iletişim sayfası](contact) üzerinden ulaşabilirsiniz.',
        ],
      },
      {
        title: 'Bu sitedeki verileriniz',
        body: [
          'Bu site çerez kullanmaz; analiz, reklam ya da izleme araçları çalıştırmaz ve hiçbir form içermez. Yazı tipleri, görseller, videolar ve küredeki harita verileri tamamen bu sitenin kendisinden sunulur; bu yüzden siteyi ziyaret ettiğinizde başka hiç kimseye bağlanmazsınız.',
          'Her web sitesinde olduğu gibi, bu sayfaları sunan barındırma hizmeti, siteyi çalışır ve güvende tutmak için IP adresi ve tarayıcı sürümü gibi standart teknik kayıtlar tutabilir.',
          'X, Instagram, YouTube, GitHub, Solscan veya Arweave bağlantıları sizi bu hizmetlere götürür; orada bu hizmetlerin kendi politikaları geçerlidir.',
        ],
      },
      {
        title: 'Uygulama',
        body: [
          'Bu metin yalnızca bu web sitesini kapsar. Beenzer uygulaması kendi kullanım koşulları ve gizlilik politikasıyla yayımlanacaktır.',
        ],
      },
      {
        title: 'Teklif değildir',
        body: [
          'Bu sitedeki hiçbir şey herhangi bir token, NFT veya menkul kıymetin alımı ya da satımı için bir teklif veya finansal tavsiye değildir. Blokzincir işlemleri geri alınamaz ve dijital varlıkların değeri yükselebileceği gibi düşebilir de.',
        ],
      },
      {
        title: 'Çeviriler',
        body: [
          'Bu site İngilizce yazılmış ve başka dillere çevrilmiştir. Bir çeviri ile İngilizce sürüm arasında fark olması hâlinde İngilizce sürüm geçerlidir.',
        ],
      },
      {
        title: 'Adlar ve markalar',
        body: [
          "Beenzer adı ve logosu {company} şirketine aittir. Solana, Metaplex, Arweave, Phantom, Flutter, Google Maps, Node.js, Apple, Android, X, Instagram, YouTube ve GitHub, ilgili sahiplerinin adlarıdır ve burada yalnızca Beenzer'ın neyle çalıştığını belirtmek için kullanılmıştır.",
        ],
      },
    ],
  },

  notFound: {
    title: 'Burada sabitlenmiş bir şey yok',
    description: 'Bu sayfa mevcut değil.',
    code: '404 · Enlem ?? · Boylam ??',
    heading: 'Buraya hiçbir şey sabitlenmemiş.',
    lead: 'Aradığınız sayfa taşınmış ya da hiç paylaşılmamış.',
    home: 'Haritaya dönün',
    journal: 'Günlüğü okuyun',
  },
};

export default tr;
