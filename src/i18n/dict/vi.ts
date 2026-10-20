import type { Dict } from './en';

/** Vietnamese, translated from en.ts. */
const vi: Dict = {
  meta: {
    description:
      'Beenzer ghim ảnh và video của bạn đúng vào nơi bạn đã chụp. Theo dõi bạn bè, tìm họ trên bản đồ và giữ lại bất kỳ khoảnh khắc nào dưới dạng NFT trên Solana, kèm địa điểm và thời gian được ghi vào bên trong.',
    skip: 'Chuyển đến nội dung',
    home: 'Beenzer, trang chủ',
  },

  nav: {
    home: 'Trang chủ',
    how: 'Cách hoạt động',
    onchain: 'On-chain',
    story: 'Câu chuyện',
    journal: 'Nhật ký',
    faq: 'Hỏi đáp',
    follow: 'Theo dõi tiến độ',
    menu: 'Menu',
    main: 'Chính',
    mobile: 'Di động',
    product: 'Một sản phẩm của Nexow, Inc.',
    language: 'Ngôn ngữ',
  },

  /** Shown to a visitor whose browser prefers this language, on a page in another one. */
  suggest: {
    text: 'Trang này cũng có bằng tiếng Việt.',
    go: 'Đọc bằng tiếng Việt',
    close: 'Không, cảm ơn',
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
    mexicoCity: 'Thành phố México',
    paris: 'Paris',
  },

  hero: {
    status: 'Đang được xây dựng lại bằng Flutter · iOS & Android',
    lead: 'Beenzer ghim ảnh và video của bạn đúng vào nơi bạn đã chụp. Theo dõi bạn bè, tìm họ trên bản đồ và giữ lại bất kỳ khoảnh khắc nào dưới dạng NFT trên Solana, với địa điểm và thời gian được ghi vào bên trong.',
    how: 'Xem cách hoạt động',
    follow: 'Theo dõi tiến độ',
    lat: 'Vĩ độ',
    lon: 'Kinh độ',
    alt: 'Độ cao',
    beats: ['Bức ảnh nào cũng được chụp ở *một nơi nào đó.*', 'Hầu hết ứng dụng đều quên mất là ở đâu. ==Beenzer thì giữ lại.=='],
    arrival: {
      title: 'Vincent đã ở đây.',
      alt: 'Ảnh của BEENZER #18: Vincent chụp selfie ở nhà.',
      token: 'Token',
      place: 'Địa điểm',
      coords: 'Tọa độ',
      seen: 'Hiển thị trong',
      supply: 'Nguồn cung',
      floor: 'giá sàn {price}',
      solscan: 'Kiểm tra trên Solscan',
    },
    cue: 'Cuộn xuống để hạ cánh',
  },

  tour: {
    eyebrow: 'Cách hoạt động',
    title: 'Máy ảnh, bản đồ, và ký ức về nơi chốn.',
    steps: [
      {
        title: 'Bản đồ là nhà.',
        body: 'Mỗi chiếc ghim là một bức ảnh hoặc một video, được để lại đúng nơi nó được chụp. Chạm vào để xem, và xem ai đã ở đó.',
      },
      {
        title: 'Chụp lại.',
        body: 'Chụp ảnh hoặc quay video, ghi âm, hoặc chọn từ thư viện của bạn. Tối đa 20 MB mỗi bài đăng.',
      },
      {
        title: 'Ghim lại.',
        body: 'Bài đăng của bạn xuất hiện ngay nơi bạn đang đứng. Rồi chọn ai có thể tìm thấy nó: mọi người, hoặc chỉ những người ở trong bán kính bạn đặt.',
      },
      {
        title: 'Chia sẻ.',
        body: 'Theo dõi bạn bè và xem bài đăng của họ trên bản đồ hoặc trong bảng tin. Khi hai bên theo dõi nhau, các bạn có thể trò chuyện.',
      },
      {
        title: 'Đúc NFT.',
        body: 'Bài đăng nào cũng có thể trở thành NFT trên Solana. Chọn số ấn bản có thể tồn tại và giá của chúng, xác nhận trong Phantom, và ấn bản #1 sẽ về ví của bạn.',
      },
    ],
    try: 'Thử xem · hiển thị trong',
    radius: 'Bán kính hiển thị tính bằng km',
    /** The app's own screens, drawn on the phone. */
    phone: {
      audio: 'Âm thanh',
      photo: 'Ảnh',
      video: 'Video',
      newPost: 'Bài đăng mới',
      caption: 'Giờ neon 💚',
      who: 'Ai có thể tìm thấy',
      everyone: 'Mọi người',
      nearby: 'Quanh đây',
      within: 'Trong vòng {distance}',
      editions: 'Ấn bản',
      drop: 'Thả ở đây',
      friends: 'Bạn bè',
      public: 'Công khai',
      message: 'Còn ở hồ không? 🌅',
      mint: 'Đúc trên Solana',
      price: 'Giá mỗi ấn bản',
      royalties: 'Tiền bản quyền',
      approve: 'Xác nhận trong Phantom',
      logs: [
        'Đã lưu nội dung lên Arweave',
        'Đã lưu siêu dữ liệu lên Arweave',
        'Đã đúc vào bộ sưu tập Beenzer',
        'Đã gửi ấn bản #1 vào ví của bạn',
      ],
    },
  },

  showcase: {
    card: 'Thẻ của {name}',
    alt: 'Bức ảnh được đúc thành BEENZER #18: Vincent chụp selfie trong nhà.',
    description: 'Mô tả',
    meta: {
      city: 'Thành phố',
      coordinates: 'Tọa độ',
      date: 'Ngày',
      time: 'Giờ UTC',
      visibility: 'Phạm vi hiển thị',
      supply: 'Nguồn cung',
      floor: 'Giá sàn',
      creator: 'Người tạo',
    },
    eyebrow: 'Được ghi lại',
    title: 'Bằng chứng bạn đã ở đó.',
    lead: 'Đúc một bài đăng và khoảnh khắc ấy được ghi vào đó, mãi mãi. Đây là BEENZER #18, được đúc tại Savigny ngày 16 tháng 2 năm 2023. Ảnh và siêu dữ liệu của nó vẫn nằm trên Arweave, y nguyên như lúc được ghi.',
    /** What the server writes into every Beenzer's metadata. */
    carries: [
      ['Ai', 'Ví và tên người dùng của người tạo'],
      ['Cái gì', 'Nội dung và loại của nó: ảnh, video hoặc âm thanh'],
      ['Khi nào', 'Ngày và giờ, theo UTC'],
      ['Ở đâu', 'Thành phố, vĩ độ và kinh độ'],
      ['Ai được xem', 'Bán kính hiển thị, dưới dạng một khung trên bản đồ'],
      ['Bao nhiêu', 'Nguồn cung và giá sàn'],
    ],
    solscan: 'Xem #18 trên Solscan',
  },

  onchain: {
    eyebrow: 'On-chain',
    title: 'Ví của bạn là tài khoản của bạn.',
    lead: 'Beenzer chạy trên Solana. Cả đăng nhập lẫn đúc NFT đều diễn ra trong Phantom, và không có gì được chuyển đi nếu thiếu chữ ký của bạn.',
    pillars: [
      {
        title: 'Đăng nhập bằng chữ ký',
        body: 'Kết nối Phantom và ký một tin nhắn dùng một lần. Không cần email, và không có mật khẩu nào để bị lộ.',
      },
      {
        title: 'Lưu giữ trên Arweave',
        body: 'Ảnh, video hoặc âm thanh cùng siêu dữ liệu được lưu lên Arweave, kho lưu trữ được xây dựng để tồn tại lâu dài. Video có thêm bản xem trước dạng động.',
      },
      {
        title: 'Ấn bản giới hạn',
        body: 'Mỗi lần đúc là một NFT lập trình được của Metaplex trong bộ sưu tập Beenzer, với số ấn bản do bạn chọn.',
      },
      {
        title: 'Tiền bản quyền đi theo tác phẩm',
        body: 'Tiền bản quyền 10% cho mỗi lần bán lại, 80% trong đó cho người tạo và 20% cho Beenzer, được thực thi bởi một bộ quy tắc của Metaplex.',
      },
    ],
    pipeTitle: 'Điều gì xảy ra khi bạn đúc',
    pipeBody: 'Các lượt đúc xếp hàng chờ. Bạn theo dõi trực tiếp từng bước trong hộp thư của mình.',
    pipeline: [
      'Bạn xác nhận trong Phantom',
      'Đã xác nhận thanh toán',
      'Nội dung lên Arweave',
      'Siêu dữ liệu lên Arweave',
      'Đã đúc NFT',
      'Đã xác minh bộ sưu tập',
      'Ấn bản #1 về ví bạn',
    ],
    built: 'Xây dựng bằng',
    roles: {
      chain: 'Blockchain',
      nft: 'Chuẩn NFT',
      storage: 'Lưu trữ',
      wallet: 'Ví',
      apps: 'iOS & Android',
      map: 'Bản đồ',
      server: 'Máy chủ',
    },
  },

  story: {
    eyebrow: 'Câu chuyện',
    title: 'Đã ở đây từ năm 2022.',
    lead: 'Beenzer ra đời năm 2022 như một ứng dụng mạng xã hội đúc NFT ngay từ camera điện thoại, trên Solana. Giờ đây nó đang được xây dựng lại từ đầu, quanh cùng một ý tưởng: mỗi khoảnh khắc đều giữ lại nơi chốn của nó.',
    now: 'Hiện tại',
    next: 'Sắp tới',
    timeline: [
      {
        title: 'Beenzer ra đời',
        body: 'Một dApp di động trên Solana, viết bằng React Native: chụp, đúc, thả lên bản đồ.',
      },
      {
        title: 'BEENZER #18',
        body: 'Được đúc tại Savigny, Thụy Sĩ. Vẫn nằm trên chuỗi, vẫn trên Arweave, vẫn là bài đăng nơi trang này hạ cánh.',
      },
      {
        title: 'Ngôi nhà mới tại Nexow',
        body: 'Beenzer trở thành sản phẩm của Nexow, Inc. và có một bộ mã nguồn mới.',
      },
      {
        title: 'Xây dựng lại bằng Flutter',
        body: 'Ứng dụng mới cho iOS và Android, trên cùng máy chủ: bản đồ, bảng tin, trò chuyện, máy ảnh và đúc NFT, ở cả chế độ sáng và tối.',
      },
      {
        title: 'Ra mắt',
        body: 'Trên App Store và Google Play. Theo dõi để có mặt khi ứng dụng hạ cánh.',
      },
    ],
    video: 'Video hướng dẫn ứng dụng Beenzer bản gốc',
    sound: 'Âm thanh',
    caption: 'Ứng dụng bản gốc, viết bằng React Native',
  },

  team: {
    eyebrow: 'Đội ngũ',
    title: 'Kỹ sư, nhà giao dịch, nghệ sĩ. Những người có niềm tin.',
    lead: 'Beenzer đầu tiên được xây dựng bởi một đội ngũ quốc tế: phần mềm, dữ liệu, tài chính và nghệ thuật, đến từ {count} quốc gia. Ngày nay nó được phát triển tại [{company}](company), do hai người trong số họ sáng lập.',
    /** Spelled out for the count of countries above. */
    numbers: ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín', 'mười', 'mười một', 'mười hai'],
    profile: 'Hồ sơ của {name}',
    /** Each member's roles, by their English name in src/data/team.ts. */
    roles: {
      'Software Engineer': 'Kỹ sư phần mềm',
      'Data Scientist': 'Nhà khoa học dữ liệu',
      'Options Trader': 'Nhà giao dịch quyền chọn',
      'Accounting Chief': 'Kế toán trưởng',
      'Fitness King': 'Vua thể hình',
      'Community Manager': 'Quản lý cộng đồng',
      'Web3 Evangelist': 'Sứ giả Web3',
      'Metaverse Evangelist': 'Sứ giả Metaverse',
      'Operations Director': 'Giám đốc vận hành',
      'Managing Partner': 'Đối tác điều hành',
      'Blockchain Manager': 'Quản lý blockchain',
      'Bitcoin Evangelist': 'Sứ giả Bitcoin',
      'NFT Artist': 'Nghệ sĩ NFT',
      'NFT Promoter': 'Người quảng bá NFT',
      'Electronic Engineer': 'Kỹ sư điện tử',
      'AI Expert': 'Chuyên gia AI',
      'Private Banker': 'Chuyên viên ngân hàng tư nhân',
      'EFA™-EFP™ CFA™': 'EFA™-EFP™ CFA™',
      'Data Analyst': 'Chuyên viên phân tích dữ liệu',
      'Forex Trader': 'Nhà giao dịch ngoại hối',
      'Co-founder & CTO, Nexow': 'Đồng sáng lập & CTO, Nexow',
      'Co-founder & CEO, Nexow': 'Đồng sáng lập & CEO, Nexow',
    },
  },

  journal: {
    eyebrow: 'Nhật ký',
    title: 'Ghi chép từ bản đồ.',
    lead: 'Tin tức về ứng dụng, và hướng dẫn về những gì nằm bên dưới nó.',
    description: 'Tin tức từ Beenzer, và hướng dẫn về geo-NFT, Solana và ứng dụng.',
    all: 'Tất cả bài viết',
    read: 'Đọc',
    minutes: '{n} phút',
    minRead: '{n} phút đọc',
    more: 'Đọc tiếp',
    kinds: { News: 'Tin tức', Guide: 'Hướng dẫn' },
    /** Over an article shown in English because it has no translation yet. */
    untranslated: 'Bài viết này chưa được dịch, nên đây là bản tiếng Anh.',
  },

  faq: {
    eyebrow: 'Hỏi đáp',
    title: 'Những câu hỏi hay.',
    more: 'Bạn còn câu hỏi khác? Hãy viết cho chúng tôi qua [Nexow](contact).',
    items: [
      {
        q: 'Beenzer là gì?',
        a: 'Một ứng dụng mạng xã hội theo vị trí cho iOS và Android. Bạn đăng ảnh và video tại nơi bạn chụp, theo dõi bạn bè và tìm bài đăng của họ trên bản đồ. Bài đăng nào cũng có thể được đúc thành NFT trên Solana.',
      },
      {
        q: 'Tôi tải ứng dụng được chưa?',
        a: 'Chưa được. Ứng dụng đang được xây dựng lại bằng Flutter, và phiên bản React Native ban đầu không còn trên Google Play. Theo dõi @beenzer_app trên X hoặc Instagram để biết ngày ứng dụng ra mắt.',
      },
      {
        q: 'Tôi có cần ví tiền mã hóa không?',
        a: 'Có: bạn đăng nhập bằng Phantom. Bạn kết nối ví và ký một tin nhắn dùng một lần để chứng minh ví là của bạn, nên không cần email và không có mật khẩu. Beenzer không bao giờ thấy khóa của bạn.',
      },
      {
        q: 'Đúc NFT tốn bao nhiêu?',
        a: 'Một khoản phí đúc bằng SOL. Ứng dụng hiển thị khoản phí, và ví nhận khoản phí đó, trước khi bạn xác nhận bất cứ điều gì trong Phantom, và không có gì được gửi đi nếu thiếu chữ ký của bạn.',
      },
      {
        q: 'Ai có thể xem bài tôi đăng?',
        a: 'Bạn tự chọn, cho từng bài đăng: mọi người, hoặc chỉ những người ở trong bán kính bạn đặt. Bản đồ hiển thị cho mỗi người những bài đăng mà họ đang ở trong bán kính, cùng với các bài đăng toàn cầu.',
      },
      {
        q: 'Một bài đăng đã đúc chứa những gì?',
        a: 'Nội dung, được lưu trên Arweave, và siêu dữ liệu gồm tên người dùng và ví của bạn, ngày và giờ UTC, thành phố và tọa độ, bán kính hiển thị, nguồn cung và giá sàn. Đó là một NFT lập trình được của Metaplex trong bộ sưu tập Beenzer.',
      },
      {
        q: 'Ấn bản và tiền bản quyền là gì?',
        a: 'Khi đúc, bạn chọn số ấn bản có thể tồn tại và giá của chúng. Ấn bản #1 thuộc về bạn. Mọi Beenzer đều được đúc với tiền bản quyền 10% cho mỗi lần bán lại, 80% trong đó cho người tạo và 20% cho Beenzer.',
      },
      {
        q: 'Một bài đăng có thể lớn đến đâu?',
        a: 'Tối đa 20 MB nội dung, và phần mô tả tối đa 2.000 ký tự.',
      },
      {
        q: 'Chuyện gì đã xảy ra với Beenzer DAO và các token của nó?',
        a: 'Chúng là một phần của thiết kế ban đầu năm 2022. Ứng dụng mới được xây dựng xoay quanh bài đăng và bản đồ, và không có nội dung nào trên trang web này là lời chào bán bất kỳ token nào.',
      },
      {
        q: 'Ai đứng sau Beenzer?',
        a: '{company}, một công ty Delaware làm phần mềm cho khách hàng và cả các ứng dụng của riêng mình. Beenzer là một trong số đó.',
      },
    ],
  },

  follow: {
    chip: 'Đang phát triển',
    title: 'Có mặt khi Beenzer ==hạ cánh.==',
    lead: 'Beenzer mới sắp có mặt trên iPhone và Android. Theo dõi để có cái nhìn đầu tiên, bản beta và ngày ra mắt.',
    status: 'đang phát triển',
    press: 'Báo chí, đối tác hay nhà đầu tư: [viết cho Nexow](contact).',
  },

  footer: {
    body: 'Ảnh và video được ghim vào nơi chúng được chụp, và bất kỳ cái nào cũng có thể trở thành NFT trên Solana. Được xây dựng lại bằng Flutter cho iOS và Android.',
    community: 'Cộng đồng',
    company: 'Công ty',
    studio: 'Nexow Studio',
    atNexow: 'Beenzer tại Nexow',
    contact: 'Liên hệ',
    notice: 'Thông tin pháp lý',
    productOf: 'Một sản phẩm của',
    legal: '© {year} {company} Bảo lưu mọi quyền. Beenzer là sản phẩm của {company}, một công ty Delaware.',
    languages: 'Ngôn ngữ',
  },

  dao: {
    title: 'Beenzer DAO',
    description: 'Beenzer DAO và các token của nó là một phần của thiết kế ban đầu năm 2022. Những gì Beenzer làm trên chuỗi hôm nay.',
    eyebrow: 'DAO',
    heading: 'DAO là bản nháp đầu tiên.',
    leads: [
      'Năm 2022, Beenzer được thiết kế xoay quanh một DAO, với hai token riêng. Ứng dụng mới thì được xây dựng xoay quanh bài đăng và bản đồ. Không có nội dung nào trên trang web này là lời chào bán bất kỳ token nào.',
      'Những gì Beenzer làm trên chuỗi hôm nay: bạn đăng nhập bằng Phantom, và bài đăng nào cũng có thể được đúc thành NFT Metaplex trên Solana, lưu trên Arweave, với ấn bản giới hạn và tiền bản quyền cho người tạo.',
    ],
    onchain: 'Cách Beenzer sử dụng Solana',
    faq: 'Hỏi đáp',
  },

  legal: {
    title: 'Thông tin pháp lý',
    description: 'Ai vận hành trang web này, trang web làm gì với dữ liệu của bạn (không làm gì cả), và phần chữ nhỏ.',
    eyebrow: 'Thông tin pháp lý',
    heading: 'Phần chữ nhỏ.',
    updated: 'Cập nhật lần cuối: {date}',
    sections: [
      {
        title: 'Ai vận hành trang web này',
        body: [
          'Trang web này được vận hành bởi **{company}**, một công ty Delaware thành lập ngày {incorporated}. Beenzer là một trong các sản phẩm của công ty. Thông tin về công ty và các chính sách riêng của công ty có tại [nexow.studio/legal](legal), và bạn có thể liên hệ với công ty qua [trang liên hệ](contact).',
        ],
      },
      {
        title: 'Dữ liệu của bạn trên trang web này',
        body: [
          'Trang web này không đặt cookie, không chạy công cụ phân tích, quảng cáo hay trình theo dõi nào, và không có biểu mẫu. Phông chữ, hình ảnh, video và dữ liệu bản đồ của quả địa cầu đều được phục vụ từ chính trang web này, nên việc truy cập trang không đưa bạn đến bất kỳ bên nào khác.',
          'Như mọi trang web, nhà cung cấp dịch vụ lưu trữ phục vụ các trang này có thể lưu nhật ký kỹ thuật tiêu chuẩn, chẳng hạn như địa chỉ IP và phiên bản trình duyệt, để giữ cho trang web hoạt động và an toàn.',
          'Các liên kết đến X, Instagram, YouTube, GitHub, Solscan hoặc Arweave sẽ đưa bạn đến các dịch vụ đó, và chính sách riêng của họ được áp dụng ở đó.',
        ],
      },
      {
        title: 'Ứng dụng',
        body: ['Thông báo này chỉ áp dụng cho trang web này. Ứng dụng Beenzer sẽ ra mắt kèm điều khoản sử dụng và chính sách quyền riêng tư riêng.'],
      },
      {
        title: 'Không phải lời chào bán',
        body: [
          'Không có nội dung nào trên trang web này là lời chào mua hay chào bán bất kỳ token, NFT hay chứng khoán nào, hoặc là lời khuyên tài chính. Giao dịch blockchain không thể hoàn tác, và giá trị của tài sản số có thể giảm cũng như tăng.',
        ],
      },
      {
        title: 'Bản dịch',
        body: [
          'Trang web này được viết bằng tiếng Anh và được dịch sang các ngôn ngữ khác. Nếu bản dịch và bản tiếng Anh có khác biệt, bản tiếng Anh sẽ được áp dụng.',
        ],
      },
      {
        title: 'Tên và nhãn hiệu',
        body: [
          'Tên và logo Beenzer thuộc về {company} Solana, Metaplex, Arweave, Phantom, Flutter, Google Maps, Node.js, Apple, Android, X, Instagram, YouTube và GitHub là tên của các chủ sở hữu tương ứng, chỉ được dùng ở đây để cho biết Beenzer hoạt động cùng những gì.',
        ],
      },
    ],
  },

  notFound: {
    title: 'Không có gì được ghim ở đây',
    description: 'Trang này không tồn tại.',
    code: '404 · Vĩ độ ?? · Kinh độ ??',
    heading: 'Ở đây chẳng có gì được ghim cả.',
    lead: 'Trang bạn đang tìm đã được chuyển đi, hoặc chưa từng được đăng.',
    home: 'Quay lại bản đồ',
    journal: 'Đọc nhật ký',
  },
};

export default vi;
