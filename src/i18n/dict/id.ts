import type { Dict } from './en';

/** Indonesian, translated from en.ts. */
const id: Dict = {
  meta: {
    description:
      'Beenzer menyematkan foto dan videomu tepat di tempat kamu mengambilnya. Ikuti teman, temukan mereka di peta, dan simpan momen apa pun sebagai NFT Solana, lengkap dengan tempat dan waktunya.',
    skip: 'Langsung ke konten',
    home: 'Beenzer, beranda',
  },

  nav: {
    home: 'Beranda',
    how: 'Cara kerja',
    onchain: 'On-chain',
    story: 'Kisah',
    journal: 'Jurnal',
    faq: 'FAQ',
    follow: 'Ikuti pengembangannya',
    menu: 'Menu',
    main: 'Utama',
    mobile: 'Seluler',
    product: 'Produk Nexow, Inc.',
    language: 'Bahasa',
  },

  /** Shown to a visitor whose browser prefers this language, on a page in another one. */
  suggest: {
    text: 'Halaman ini juga tersedia dalam bahasa Indonesia.',
    go: 'Baca dalam bahasa Indonesia',
    close: 'Tidak, terima kasih',
  },

  places: {
    savigny: 'Savigny',
    lutry: 'Lutry',
    lausanne: 'Lausanne',
    vevey: 'Vevey',
    tarifa: 'Tarifa',
    lisbon: 'Lisboa',
    berlin: 'Berlin',
    barcelona: 'Barcelona',
    lagos: 'Lagos',
    mexicoCity: 'Kota Meksiko',
    paris: 'Paris',
  },

  hero: {
    status: 'Sedang dibangun ulang dengan Flutter · iOS & Android',
    lead: 'Beenzer menyematkan foto dan videomu tepat di tempat kamu mengambilnya. Ikuti teman, temukan mereka di peta, dan simpan momen apa pun sebagai NFT Solana, dengan tempat dan waktunya tertulis di dalamnya.',
    how: 'Lihat cara kerjanya',
    follow: 'Ikuti pengembangannya',
    lat: 'Lintang',
    lon: 'Bujur',
    alt: 'Tinggi',
    beats: ['Setiap foto diambil di *suatu tempat.*', 'Kebanyakan aplikasi lupa di mana. ==Beenzer menyimpannya.=='],
    arrival: {
      title: 'Vincent pernah di sini.',
      alt: 'Foto BEENZER #18: swafoto Vincent di rumah.',
      token: 'Token',
      place: 'Tempat',
      coords: 'Koordinat',
      seen: 'Terlihat dalam',
      supply: 'Suplai',
      floor: 'harga dasar {price}',
      solscan: 'Cek di Solscan',
    },
    cue: 'Gulir untuk mendarat',
  },

  tour: {
    eyebrow: 'Cara kerja',
    title: 'Kamera, peta, dan kenangan akan tempat.',
    steps: [
      {
        title: 'Peta adalah beranda.',
        body: 'Setiap pin adalah foto atau video, ditinggalkan tepat di tempat ia diambil. Ketuk salah satunya untuk melihatnya, dan siapa yang ada di sana.',
      },
      {
        title: 'Jepret.',
        body: 'Ambil foto atau video, rekam suara, atau pilih dari galerimu. Hingga 20 MB per postingan.',
      },
      {
        title: 'Sematkan.',
        body: 'Postinganmu mendarat di tempat kamu berdiri. Lalu pilih siapa yang bisa menemukannya: semua orang, atau hanya orang di dalam radius yang kamu atur.',
      },
      {
        title: 'Bagikan.',
        body: 'Ikuti teman dan lihat postingan mereka di peta atau di feed-mu. Kalau kalian saling mengikuti, kalian bisa mengobrol.',
      },
      {
        title: 'Cetak jadi NFT.',
        body: 'Postingan apa pun bisa menjadi NFT Solana. Tentukan berapa edisi yang bisa ada dan harganya, setujui di Phantom, dan edisi #1 masuk ke dompetmu.',
      },
    ],
    try: 'Coba · terlihat dalam',
    radius: 'Radius visibilitas dalam km',
    /** The app's own screens, drawn on the phone. */
    phone: {
      audio: 'Audio',
      photo: 'Foto',
      video: 'Video',
      newPost: 'Postingan baru',
      caption: 'Jam neon 💚',
      who: 'Siapa yang bisa menemukan',
      everyone: 'Semua orang',
      nearby: 'Di sekitar',
      within: 'Dalam {distance}',
      editions: 'Edisi',
      drop: 'Taruh di sini',
      friends: 'Teman',
      public: 'Publik',
      message: 'Masih di danau? 🌅',
      mint: 'Cetak di Solana',
      price: 'Harga per edisi',
      royalties: 'Royalti',
      approve: 'Setujui di Phantom',
      logs: [
        'Media disimpan ke Arweave',
        'Metadata disimpan ke Arweave',
        'Dicetak di koleksi Beenzer',
        'Edisi #1 dikirim ke dompetmu',
      ],
    },
  },

  showcase: {
    card: 'Kartu {name}',
    alt: 'Foto yang dicetak sebagai BEENZER #18: Vincent sedang swafoto di dalam ruangan.',
    description: 'Deskripsi',
    meta: {
      city: 'Kota',
      coordinates: 'Koordinat',
      date: 'Tanggal',
      time: 'Waktu UTC',
      visibility: 'Visibilitas',
      supply: 'Suplai',
      floor: 'Harga dasar',
      creator: 'Kreator',
    },
    eyebrow: 'Tercatat',
    title: 'Bukti kamu pernah di sana.',
    lead: 'Cetak sebuah postingan dan momennya tertulis di dalamnya, untuk selamanya. Ini BEENZER #18, dicetak di Savigny pada 16 Februari 2023. Foto dan metadatanya masih ada di Arweave, persis seperti saat ditulis.',
    /** What the server writes into every Beenzer's metadata. */
    carries: [
      ['Siapa', 'Dompet dan nama pengguna kreator'],
      ['Apa', 'Media dan jenisnya: foto, video, atau suara'],
      ['Kapan', 'Tanggal dan waktu, dalam UTC'],
      ['Di mana', 'Kota, lintang, dan bujur'],
      ['Siapa yang bisa melihat', 'Radius visibilitas, sebagai kotak di peta'],
      ['Berapa banyak', 'Suplai dan harga dasar'],
    ],
    solscan: 'Lihat #18 di Solscan',
  },

  onchain: {
    eyebrow: 'On-chain',
    title: 'Dompetmu adalah akunmu.',
    lead: 'Beenzer berjalan di Solana. Masuk dan mencetak sama-sama dilakukan di Phantom, dan tidak ada yang berpindah tanpa tanda tanganmu.',
    pillars: [
      {
        title: 'Masuk dengan tanda tangan',
        body: 'Hubungkan Phantom dan tanda tangani pesan sekali pakai. Tanpa email, dan tanpa kata sandi yang bisa bocor.',
      },
      {
        title: 'Tersimpan di Arweave',
        body: 'Foto, video, atau suara beserta metadatanya disimpan ke Arweave, penyimpanan yang dibuat untuk bertahan lama. Video mendapat pratinjau animasi.',
      },
      {
        title: 'Edisi terbatas',
        body: 'Setiap cetakan adalah NFT programmable Metaplex di koleksi Beenzer, dengan jumlah edisi sebanyak yang kamu pilih.',
      },
      {
        title: 'Royalti yang ikut berpindah',
        body: 'Royalti 10% untuk setiap penjualan ulang, 80% untuk kreator dan 20% untuk Beenzer, ditegakkan oleh seperangkat aturan Metaplex.',
      },
    ],
    pipeTitle: 'Yang terjadi saat kamu mencetak',
    pipeBody: 'Cetakan menunggu dalam antrean. Kamu bisa mengikuti setiap langkahnya secara langsung di kotak masukmu.',
    pipeline: [
      'Kamu menyetujui di Phantom',
      'Pembayaran dikonfirmasi',
      'Media ke Arweave',
      'Metadata ke Arweave',
      'NFT dicetak',
      'Koleksi diverifikasi',
      'Edisi #1 untukmu',
    ],
    built: 'Dibangun dengan',
    roles: {
      chain: 'Blockchain',
      nft: 'Standar NFT',
      storage: 'Penyimpanan',
      wallet: 'Dompet',
      apps: 'iOS & Android',
      map: 'Peta',
      server: 'Server',
    },
  },

  story: {
    eyebrow: 'Kisah',
    title: 'Sudah di sini sejak 2022.',
    lead: 'Beenzer lahir pada 2022 sebagai aplikasi sosial yang mencetak NFT langsung dari kamera ponsel, di Solana. Kini aplikasinya sedang dibangun ulang dari nol, dengan ide yang sama: setiap momen menyimpan tempatnya.',
    now: 'Sekarang',
    next: 'Berikutnya',
    timeline: [
      {
        title: 'Beenzer dimulai',
        body: 'Sebuah dApp seluler di Solana, dibangun dengan React Native: jepret, cetak, taruh di peta.',
      },
      {
        title: 'BEENZER #18',
        body: 'Dicetak di Savigny, Swiss. Masih on-chain, masih di Arweave, masih jadi postingan tempat halaman ini mendarat.',
      },
      {
        title: 'Rumah baru di Nexow',
        body: 'Beenzer menjadi produk Nexow, Inc. dan mendapat codebase baru.',
      },
      {
        title: 'Dibangun ulang dengan Flutter',
        body: 'Aplikasi baru untuk iOS dan Android, di server yang sama: peta, feed, chat, kamera, dan cetak NFT, dalam mode terang dan gelap.',
      },
      {
        title: 'Peluncuran',
        body: 'Di App Store dan Google Play. Ikuti terus agar kamu ada di sana saat aplikasinya mendarat.',
      },
    ],
    video: 'Tur aplikasi Beenzer versi awal',
    sound: 'Suara',
    caption: 'Aplikasi versi awal, dibuat dengan React Native',
  },

  team: {
    eyebrow: 'Kru',
    title: 'Insinyur, trader, seniman. Orang-orang yang percaya.',
    lead: 'Beenzer pertama dibangun oleh kru internasional: perangkat lunak, data, keuangan, dan seni, dari {count} negara. Kini Beenzer dibangun di [{company}](company), yang didirikan oleh dua orang di antara mereka.',
    /** Spelled out for the count of countries above. */
    numbers: ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas', 'dua belas'],
    profile: 'Profil {name}',
    /** Each member's roles, by their English name in src/data/team.ts. */
    roles: {
      'Software Engineer': 'Insinyur Perangkat Lunak',
      'Data Scientist': 'Ilmuwan Data',
      'Options Trader': 'Trader Opsi',
      'Accounting Chief': 'Kepala Akuntansi',
      'Fitness King': 'Raja Fitnes',
      'Community Manager': 'Manajer Komunitas',
      'Web3 Evangelist': 'Duta Web3',
      'Metaverse Evangelist': 'Duta Metaverse',
      'Operations Director': 'Direktur Operasional',
      'Managing Partner': 'Mitra Pengelola',
      'Blockchain Manager': 'Manajer Blockchain',
      'Bitcoin Evangelist': 'Duta Bitcoin',
      'NFT Artist': 'Seniman NFT',
      'NFT Promoter': 'Promotor NFT',
      'Electronic Engineer': 'Insinyur Elektronika',
      'AI Expert': 'Pakar AI',
      'Private Banker': 'Bankir Privat',
      'EFA™-EFP™ CFA™': 'EFA™-EFP™ CFA™',
      'Data Analyst': 'Analis Data',
      'Forex Trader': 'Trader Forex',
      'Co-founder & CTO, Nexow': 'Pendiri Bersama & CTO, Nexow',
      'Co-founder & CEO, Nexow': 'Pendiri Bersama & CEO, Nexow',
    },
  },

  journal: {
    eyebrow: 'Jurnal',
    title: 'Catatan dari peta.',
    lead: 'Kabar tentang aplikasinya, dan panduan tentang apa yang ada di baliknya.',
    description: 'Kabar dari Beenzer, dan panduan tentang geo-NFT, Solana, dan aplikasinya.',
    all: 'Semua tulisan',
    read: 'Baca',
    minutes: '{n} menit',
    minRead: '{n} menit baca',
    more: 'Baca selengkapnya',
    kinds: { News: 'Berita', Guide: 'Panduan' },
    /** Over an article shown in English because it has no translation yet. */
    untranslated: 'Artikel ini belum diterjemahkan, jadi ini versi bahasa Inggrisnya.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Pertanyaan bagus.',
    more: 'Ada pertanyaan lain? Tulis ke kami lewat [Nexow](contact).',
    items: [
      {
        q: 'Apa itu Beenzer?',
        a: 'Aplikasi geo-sosial untuk iOS dan Android. Kamu memposting foto dan video di tempat kamu mengambilnya, mengikuti teman, dan menemukan postingan mereka di peta. Postingan apa pun bisa dicetak sebagai NFT di Solana.',
      },
      {
        q: 'Apakah sudah bisa diunduh?',
        a: 'Belum. Aplikasinya sedang dibangun ulang dengan Flutter, dan versi React Native yang asli sudah tidak ada di Google Play. Ikuti @beenzer_app di X atau Instagram untuk tahu hari peluncurannya.',
      },
      {
        q: 'Apakah aku perlu dompet kripto?',
        a: 'Ya: kamu masuk dengan Phantom. Kamu menghubungkannya dan menandatangani pesan sekali pakai untuk membuktikan dompet itu milikmu, jadi tidak ada email dan tidak ada kata sandi. Beenzer tidak pernah melihat kuncimu.',
      },
      {
        q: 'Berapa biaya mencetak?',
        a: 'Biaya cetak dalam SOL. Aplikasi menampilkan biayanya, dan dompet tujuannya, sebelum kamu menyetujui apa pun di Phantom, dan tidak ada yang dikirim tanpa tanda tanganmu.',
      },
      {
        q: 'Siapa yang bisa melihat postinganku?',
        a: 'Kamu yang memilih, per postingan: semua orang, atau hanya orang di dalam radius yang kamu atur. Peta menampilkan kepada setiap orang postingan yang radiusnya mencakup posisi mereka, ditambah postingan untuk seluruh dunia.',
      },
      {
        q: 'Apa isi postingan yang sudah dicetak?',
        a: 'Medianya, yang disimpan di Arweave, dan metadata berisi nama pengguna dan dompetmu, tanggal dan waktu UTC, kota dan koordinat, radius visibilitas, suplai, dan harga dasar. Ini adalah NFT programmable Metaplex di koleksi Beenzer.',
      },
      {
        q: 'Apa itu edisi dan royalti?',
        a: 'Saat mencetak, kamu menentukan berapa edisi yang bisa ada dan harganya. Edisi #1 untukmu. Setiap Beenzer dicetak dengan royalti 10% untuk setiap penjualan ulang, 80% untuk kreator dan 20% untuk Beenzer.',
      },
      {
        q: 'Seberapa besar sebuah postingan?',
        a: 'Hingga 20 MB media, dan deskripsi hingga 2.000 karakter.',
      },
      {
        q: 'Apa yang terjadi dengan Beenzer DAO dan tokennya?',
        a: 'Keduanya bagian dari desain awal tahun 2022. Aplikasi yang baru dibangun di sekitar postingan dan peta, dan tidak ada apa pun di situs ini yang merupakan penawaran token apa pun.',
      },
      {
        q: 'Siapa di balik Beenzer?',
        a: '{company}, perusahaan Delaware yang membuat perangkat lunak untuk klien dan juga aplikasinya sendiri. Beenzer salah satunya.',
      },
    ],
  },

  follow: {
    chip: 'Sedang digarap',
    title: 'Jangan lewatkan saat ia ==mendarat.==',
    lead: 'Beenzer yang baru segera hadir di iPhone dan Android. Ikuti terus untuk tampilan pertamanya, versi beta, dan hari peluncurannya.',
    status: 'sedang digarap',
    press: 'Pers, mitra, atau investor: [tulis ke Nexow](contact).',
  },

  footer: {
    body: 'Foto dan video yang disematkan di tempat ia diambil, dan mana pun bisa menjadi NFT Solana. Dibangun ulang dengan Flutter untuk iOS dan Android.',
    community: 'Komunitas',
    company: 'Perusahaan',
    studio: 'Nexow Studio',
    atNexow: 'Beenzer di Nexow',
    contact: 'Kontak',
    notice: 'Pemberitahuan situs',
    productOf: 'Produk dari',
    legal: '© {year} {company} Hak cipta dilindungi undang-undang. Beenzer adalah produk {company}, perusahaan Delaware.',
    languages: 'Bahasa',
  },

  dao: {
    title: 'Beenzer DAO',
    description: 'Beenzer DAO dan tokennya adalah bagian dari desain awal tahun 2022. Yang dilakukan Beenzer on-chain hari ini.',
    eyebrow: 'DAO',
    heading: 'DAO adalah draf pertamanya.',
    leads: [
      'Pada 2022, Beenzer dirancang di sekitar sebuah DAO, dengan dua token sendiri. Aplikasi yang baru justru dibangun di sekitar postingan dan peta. Tidak ada apa pun di situs ini yang merupakan penawaran token apa pun.',
      'Yang dilakukan Beenzer on-chain hari ini: kamu masuk dengan Phantom, dan postingan apa pun bisa dicetak sebagai NFT Metaplex di Solana, disimpan di Arweave, dengan edisi terbatas dan royalti untuk kreatornya.',
    ],
    onchain: 'Cara Beenzer memakai Solana',
    faq: 'FAQ',
  },

  legal: {
    title: 'Pemberitahuan situs',
    description: 'Siapa yang mengelola situs ini, apa yang dilakukannya dengan datamu (tidak ada), dan detail kecilnya.',
    eyebrow: 'Pemberitahuan situs',
    heading: 'Detail kecilnya.',
    updated: 'Terakhir diperbarui {date}',
    sections: [
      {
        title: 'Siapa yang mengelola situs ini',
        body: [
          'Situs web ini dikelola oleh **{company}**, perusahaan Delaware yang didirikan pada {incorporated}. Beenzer adalah salah satu produknya. Detail perusahaan dan kebijakannya sendiri ada di [nexow.studio/legal](legal), dan kamu bisa menghubunginya melalui [halaman kontak](contact).',
        ],
      },
      {
        title: 'Datamu di situs ini',
        body: [
          'Situs ini tidak memasang cookie, tidak menjalankan analitik, iklan, atau pelacak, dan tidak memiliki formulir. Font, gambar, video, dan data peta untuk globe semuanya disajikan dari situs ini sendiri, jadi mengunjunginya tidak membawamu ke pihak lain mana pun.',
          'Seperti situs web lainnya, host yang menyajikan halaman-halaman ini dapat menyimpan log teknis standar, seperti alamat IP dan versi browser, untuk menjaga situs tetap berjalan dan aman.',
          'Tautan ke X, Instagram, YouTube, GitHub, Solscan, atau Arweave membawamu ke layanan tersebut, dan kebijakan mereka sendiri berlaku di sana.',
          'Jika kamu memilih bahasa, atau menolak tawaran untuk membaca dalam bahasa lain, browser-mu menyimpan pilihan itu di perangkatmu, di penyimpanan lokal, bukan di cookie. Pilihan itu tidak pernah dikirim ke siapa pun.',
        ],
      },
      {
        title: 'Aplikasinya',
        body: ['Pemberitahuan ini hanya mencakup situs web ini. Aplikasi Beenzer akan dirilis dengan ketentuan penggunaan dan kebijakan privasinya sendiri.'],
      },
      {
        title: 'Bukan penawaran',
        body: [
          'Tidak ada apa pun di situs ini yang merupakan penawaran untuk membeli atau menjual token, NFT, atau efek apa pun, ataupun nasihat keuangan. Transaksi blockchain tidak dapat dibatalkan, dan nilai aset digital bisa turun maupun naik.',
        ],
      },
      {
        title: 'Terjemahan',
        body: [
          'Situs ini ditulis dalam bahasa Inggris dan diterjemahkan ke bahasa lain. Jika terjemahan dan versi bahasa Inggris berbeda, yang berlaku adalah versi bahasa Inggris.',
        ],
      },
      {
        title: 'Nama dan merek',
        body: [
          'Nama dan logo Beenzer adalah milik {company} Solana, Metaplex, Arweave, Phantom, Flutter, Google Maps, Node.js, Apple, Android, X, Instagram, YouTube, dan GitHub adalah nama milik pemiliknya masing-masing, yang digunakan di sini hanya untuk menjelaskan dengan apa Beenzer bekerja.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Tidak ada yang disematkan di sini',
    description: 'Halaman ini tidak ada.',
    code: '404 · Lintang ?? · Bujur ??',
    heading: 'Tidak ada yang pernah disematkan di sini.',
    lead: 'Halaman yang kamu cari sudah dipindahkan, atau memang tidak pernah diposting.',
    home: 'Kembali ke peta',
    journal: 'Baca jurnal',
  },
};

export default id;
