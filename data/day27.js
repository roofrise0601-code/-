const CURRENT_QUIZ_DATA = {
  title: "Day 27：<ruby>建設業<rt>けんせつぎょう</rt></ruby>の<ruby>社会的役割<rt>しゃかいてきやくわり</rt></ruby>と<ruby>建設業法<rt>けんせつぎょうほう</rt></ruby>（テキスト P.116〜124）",
  key: "score_gakka4_27",
  passScore: 70,
  questions: [
    {
      cat: "第5章 建設業の社会的役割（P.116〜117）",
      q: "日本社会における「**建設業の社会的役割**」として、最も適切なものはどれですか。",
      q_id: "Manakah pernyataan yang PALING TEPAT mengenai 'Peran Sosial Industri Konstruksi' bagi masyarakat Jepang?",
      q_ne: "जापानी समाजमा 'निर्माण उद्योगको सामाजिक भूमिका' सम्बन्धी कुन भनाइ सबैभन्दा उपयुक्त छ?",
      options: [
        { ja: "人々の生活や経済活動を支える社会資本（道路・住宅・水道等）を整備し、自然災害時には最前線で復旧活動にあたる「地域の守り手」としての役割", id: "Membangun infrastruktur (jalan, hunian, air bersih) penopang ekonomi, serta menjadi garda terdepan penanganan bencana alam bagi warga", ne: "मानिसको जीवन र अर्थतन्त्र धान्ने पूर्वाधार (सडक, घर, खानेपानी) निर्माण गर्ने र प्राकृतिक विपत्तिमा उद्धार र पुनर्निर्माण गर्ने 'समाजको रक्षक' को भूमिका" },
        { ja: "建物を作ることだけが目的であり、地震や台風などの災害時には一切関与しない役割", id: "Hanya berfokus mendirikan gedung dan lepas tangan sama sekali saat gempa/topan melanda", ne: "भवन बनाउने मात्र काम भएकोले भूकम्प वा आँधी आउँदा केही पनि नगर्ने" },
        { ja: "他国の製品を輸入して店舗でそのまま販売する商業の役割", id: "Hanya bertindak sebagai pedagang perantara yang menjual produk impor di toko", ne: "विदेशबाट सामान ल्याएर पसलमा बेच्ने व्यापारीको भूमिका" },
        { ja: "道路を意図的に通行止めにして自動車の利用を減少させる環境活動の役割", id: "Sengaja menutup jalan raya demi mengurangi pengendara mobil", ne: "गाडी चल्न नदिन सडक बन्द गरिराख्ने भूमिका" }
      ],
      answer: 0,
      expJa: "【テキスト P.116〜117参照】建設業は社会インフラや住まいを創り出すだけでなく、地震・台風・豪雪などの災害発生時には真っ先に現場へ駆けつけ、道路啓開や応急復旧を担う不可欠な存在です。",
      expId: "Konstruksi menopang fondasi kehidupan modern serta menjadi garda terdepan perbaikan darurat saat terjadi bencana alam.",
      expNe: "निर्माण क्षेत्रले विकास निर्माण गर्नुका साथै भूकम्प, बाढीपहिरो आउँदा तत्काल बाटो खुलाउने र पुनर्निर्माण गर्ने महत्त्वपूर्ण भूमिका खेल्दछ।"
    },
    {
      cat: "第5章 建設業の課題（P.118〜121）",
      q: "現在、日本の建設業界が直面している**「最も深刻な問題点・課題」**としてテキストに挙げられているものはどれですか。",
      q_id: "Manakah 'Tantangan Paling Kritis' yang sedang dihadapi oleh industri konstruksi Jepang saat ini menurut buku panduan?",
      q_ne: "हाल जापानी निर्माण क्षेत्रले भोगिरहेको 'सबैभन्दा गम्भीर समस्या तथा चुनौती' को रूपमा पाठ्यपुस्तकमा उल्लेख गरिएको कुरा कुन हो?",
      options: [
        { ja: "熟練技能者の高齢化と大量離職が進む一方で、若者の入職者が少なく「将来の担い手不足」が深刻化していること", id: "Penuaan tukang ahli dan pensiun massal, disertai minimnya generasi muda yang masuk sehingga krisis tenaga kerja semakin parah", ne: "अनुभवी पाका कामदारहरू बूढा हुँदै अवकाश लिने क्रम बढ्नु र नयाँ युवा कामदार नआउनाले 'भविष्यका कामदारको चरम अभाव' हुनु" },
        { ja: "若手作業員が全国に溢れかえり、仕事が全くなくて困っていること", id: "Kelebihan jumlah pekerja muda hingga tidak ada pekerjaan yang tersedia", ne: "युवा कामदार धेरै भएर काम नै नपाउने समस्या हुनु" },
        { ja: "日本中の道路や橋がすべて新しくなり、建設工事が一切不要になったこと", id: "Semua jembatan dan jalan sudah baru sehingga tidak perlu proyek apa pun lagi", ne: "सबै संरचना नयाँ बनेर अब कुनै काम गर्नै नपर्ने हुनु" },
        { ja: "重機や電動工具の性能が高すぎて職人が全員失業していること", id: "Alat berat terlalu canggih sehingga semua tukang kehilangan mata pencaharian", ne: "मेसिन राम्रो भएर सबै मिस्त्रीहरू बेरोजगार हुनु" }
      ],
      answer: 0,
      expJa: "【テキスト P.118〜121参照】建設業では就業者の約3分の1が55歳以上となるなど高齢化が加速しており、若手入職者の確保・育成、技能継承（担い手確保）が最大の国家的課題となっています。",
      expId: "Tantangan nomor satu adalah penuaan tenaga kerja senior dan krisis regenerasi pekerja muda (担い手不足).",
      expNe: "धेरै अनुभवी मिस्त्रीहरू ५५ वर्ष कटेका छन् तर नयाँ पुस्ता नआउँदा सीप हस्तान्तरण र कामदारको अभाव मुख्य चुनौती बनेको छ।"
    },
    {
      cat: "第5章 担い手確保の施策（P.120〜121）",
      q: "建設業の担い手（若い技術者・技能者）を確保・育成するために進められている取り組みとして、**テキストに記載されているもの**はどれですか。",
      q_id: "Manakah kebijakan yang digalakkan untuk menarik dan membina generasi penerus di bidang konstruksi menurut buku panduan?",
      q_ne: "निर्माण क्षेत्रमा नयाँ कामदार आकर्षित गर्न र टिकाउन चालिएका कदमहरू मध्ये पाठ्यपुस्तकमा उल्लेख भएको कुन हो?",
      options: [
        { ja: "適正な工期設定や週休2日の推進、技能と経験に応じた処遇改善（キャリアアップシステムの活用）、ICT技術の導入", id: "Penetapan jadwal wajar, libur 2 hari sepekan, peningkatan upah berbasis keahlian (CCUS), dan adopsi teknologi ICT", ne: "उचित कामको म्याद तोक्ने, हप्ताको २ दिन बिदा दिने, सीप र अनुभव अनुसार तलब बढाउने (CCUS प्रणाली), र नयाँ प्रविधि (ICT) भित्र्याउने" },
        { ja: "休日の完全撤廃と残業代の未払いを法的に認めること", id: "Menghapus hari libur dan melegalkan upah lembur tidak dibayar", ne: "बिदा पूर्ण खारेज गर्ने र ओभरटाइमको पैसा नदिने" },
        { ja: "女性労働者が現場に入ることを全面的に禁止すること", id: "Melarang total pekerja perempuan memasuki area proyek", ne: "महिला कामदारलाई कार्यस्थलमा आउन पूर्ण प्रतिबन्ध लगाउने" },
        { ja: "最新の建設機械を使わず、すべて人力によるスコップ作業に戻すこと", id: "Menghapus mesin modern dan mewajibkan semua galian memakai cangkul manual", ne: "आधुनिक मेसिन हटाएर सबै काम हातले मात्र गर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.120〜121参照】労働環境改善（週休2日・適正工期）、キャリアに応じた適正な処遇（CCUSの普及）、生産性を高める建設ICTの導入などが国を挙げて推進されています。",
      expId: "Upaya menarik generasi baru: perbaikan upah berbasis level CCUS, kepastian libur 2 hari, dan modernisasi proyek lewat ICT.",
      expNe: "कामदारको सुरक्षा र भविष्यका लागि २ दिन बिदा, सीप कार्ड (CCUS) अनुसार उचित तलब र नयाँ मेसिनको प्रयोग बढाइँदैछ।"
    },
    {
      cat: "第5章 建設業法の目的（P.122）",
      q: "「**建設業法（けんせつぎょうほう）**」の第一条に定められている**法律の目的**として、正しいものはどれですか。",
      q_id: "Apakah tujuan resmi dibentuknya 'Undang-Undang Jasa Konstruksi' (Kensetsugyou-hou) menurut Pasal 1?",
      q_ne: "जापानको 'निर्माण व्यवसाय ऐन (केन्सेचुग्यौ-हौ)' को धारा १ मा उल्लिखित कानुनको मुख्य उद्देश्य के हो?",
      options: [
        { ja: "建設業を営む者の資質の向上と請負契約の適正化を図り、適正な施工を確保して発注者を保護し、建設業の健全な発達を促進すること", id: "Meningkatkan kualifikasi kontraktor, menertibkan kontrak kerja, menjamin mutu bangunan demi melindungi klien, serta memajukan industri konstruksi", ne: "निर्माण व्यवसायीको योग्यता बढाउने, निष्पक्ष ठेक्का सम्झौता गराउने, गुणस्तरीय काम गरेर ग्राहकको रक्षा गर्ने र निर्माण क्षेत्रको स्वस्थ विकास गर्ने" },
        { ja: "元請会社が下請会社を自由に従属させ、工事代金を一方的に値引きさせること", id: "Memberi hak kontraktor utama untuk memotong upah subkon sepihak", ne: "ठूला ठेकेदारले सानालाई थिचेर मनलाग्दी पैसा घटाउन छुट दिने" },
        { ja: "不良工事や手抜き工事を行った会社を処罰から守ること", id: "Melindungi kontraktor nakal yang melakukan kecurangan dari jerat hukum", ne: "नराम्रो र ठगी काम गर्ने कम्पनीलाई कारबाहीबाट बचाउने" },
        { ja: "外国人の職長が現場で日本語以外の言葉を話すことを禁止すること", id: "Melarang mandor asing berbicara bahasa non-Jepang di lokasi", ne: "विदेशी नाइकेलाई जापानी बाहेक अन्य भाषा बोल्न रोक लगाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.122参照】建設業法第1条には「建設業を営む者の資質の向上、建設工事の請負契約の適正化等を図り、適正な施工を確保し、発注者を保護するとともに、建設業の健全な発達を促進する」と規定されています。",
      expId: "Tujuan UU Jasa Konstruksi adalah meningkatkan mutu kontraktor, menjamin keadilan kontrak kerja, serta melindungi hak klien pemesan.",
      expNe: "यस ऐनको मुख्य उद्देश्य गुणस्तरीय काम सुनिश्चित गर्नु, निष्पक्ष ठेक्का गर्नु, ग्राहकको हित जोगाउनु र निर्माण उद्योगलाई भरपर्दो बनाउनु हो।"
    },
    {
      cat: "第5章 建設業の許可制度（P.123）",
      q: "建設業を営もうとする者が受けなければならない「**建設業の許可**」について、原則として正しいものはどれですか。",
      q_id: "Manakah aturan yang BENAR mengenai 'Izin Usaha Konstruksi' (Kensetsugyou no Kyoka)?",
      q_ne: "निर्माण व्यवसाय चलाउन लिनुपर्ने 'निर्माण इजाजतपत्र (लाइसेन्स)' सम्बन्धी कुन भनाइ सही छ?",
      options: [
        { ja: "政令で定める軽微な建設工事のみを請け負う場合を除いて、業種ごとに国土交通大臣または都道府県知事の許可を受けなければならない", id: "Wajib mengantongi izin dari Menteri Pertanahan atau Gubernur Prefektur sesuai klasifikasi bidangnya, kecuali proyek bernilai sangat kecil", ne: "कानुनले तोकेको एकदमै सानो रकमको काम बाहेक, सम्बन्धित विधा अनुसार मन्त्री वा प्रान्त प्रमुख (गभर्नर) बाट अनिवार्य लाइसेन्स लिनुपर्छ" },
        { ja: "工事の金額や規模に関係なく、誰でも許可なしで自由に建設会社を開業して大規模ビルを建てられる", id: "Siapa pun bebas membangun gedung pencakar langit tanpa perlu izin resmi dari pemerintah", ne: "पैसा र आकार जतिसुकै ठूलो भए पनि बिना लाइसेन्स जोसुकैले ठूला भवन बनाउन पाउँछ" },
        { ja: "一度許可を取れば、どんな違反や手抜き工事を繰り返しても永久に取り消されることはない", id: "Sekali dapat izin, izin tersebut berlaku abadi dan tidak bisa dicabut meski melakukan pidana", ne: "एकपटक अनुमति लिएपछि जतिसुकै ठगी गरे पनि लाइसेन्स कहिल्यै खारेज हुँदैन" },
        { ja: "建設業の許可は個人タクシーの運転免許証と全く同じものである", id: "Izin konstruksi sama persis dengan SIM taksi pribadi", ne: "निर्माणको लाइसेन्स ट्याक्सी चलाउने लाइसेन्स जस्तै हो" }
      ],
      answer: 0,
      expJa: "【テキスト P.123参照】建設業を営むには、請負金額が500万円未満（建築一式工事は1500万円未満等）の軽微な工事を除き、国土交通大臣または都道府県知事の許可が必要です。",
      expId: "Semua kontraktor wajib berizin resmi dari Menteri/Gubernur, kecuali untuk pekerjaan berskala sangat kecil (di bawah 5 juta yen).",
      expNe: "५० लाख येनभन्दा कमका अति साना काम बाहेक, निर्माण व्यवसाय गर्न मन्त्री वा गभर्नरबाट आधिकारिक लाइसेन्स लिनैपर्छ।"
    },
    {
      cat: "第5章 主任技術者と監理技術者（P.123〜124）",
      q: "建設業法において、**工事現場における施工の技術上の管理をつかさどるために「すべての現場」に配置が義務付けられている技術者**は何ですか。",
      q_id: "Berdasarkan UU Konstruksi, teknisi ahli apakah yang WAJIB ditempatkan di 'SETIAP LOKASI PROYEK' untuk mengelola teknis pelaksanaan?",
      q_ne: "निर्माण व्यवसाय ऐन अनुसार, कामको प्राविधिक रेखदेख गर्न 'प्रत्येक कार्यस्थलमा' राख्नैपर्ने इन्जिनियर को हुन्?",
      options: [
        { ja: "主任技術者（しゅにんぎじゅつしゃ）※一定規模以上の元請は監理技術者", id: "Shunin Gijutsusha (Insinyur Utama / Chief Engineer) *atau Kanri Gijutsusha untuk proyek besar", ne: "शुनिन गिजुचुशा (प्रमुख प्राविधिक / चिफ इन्जिनियर) *ठूला प्रोजेक्टमा कान्त्री गिजुचुशा" },
        { ja: "現場清掃員", id: "Petugas Kebersihan Lapangan", ne: "कार्यस्थल सफाइ कर्मचारी" },
        { ja: "交通誘導員", id: "Petugas Pengatur Lalu Lintas", ne: "ट्राफिक गार्ड" },
        { ja: "近隣住民の代表者", id: "Perwakilan Warga Tetangga", ne: "छिमेकी प्रतिनिधि" }
      ],
      answer: 0,
      expJa: "【テキスト P.123〜124参照】建設業者は施工にあたり現場に「主任技術者」を置かなければなりません。また特定建設業者が一定額以上を下請発注する場合は、より高度な資格を持つ「監理技術者」を置きます。",
      expId: "Kontraktor wajib menempatkan Shunin Gijutsusha di setiap proyeknya. Untuk subkontrak bernilai besar, wajib Kanri Gijutsusha.",
      expNe: "हरेक कार्यस्थलमा प्राविधिक ज्ञान भएको 'शुनिन गिजुचुशा' राख्नैपर्छ। ठूला ठेक्कामा अझ माथिल्लो 'कान्त्री गिजुचुशा' चाहिन्छ।"
    },
    {
      cat: "第5章 契約の適正化（P.124）",
      q: "建設業法において、発注者や元請負人が**下請負人に対して行ってはならない禁止行為**として正しいものはどれですか。",
      q_id: "Manakah tindakan terlarang yang TIDAK BOLEH dilakukan oleh kontraktor utama kepada subkontraktor menurut UU Jasa Konstruksi?",
      q_ne: "निर्माण व्यवसाय ऐन अनुसार, मुख्य ठेकेदारले साना उप-ठेकेदारमाथि गर्न नपाइने 'प्रतिबन्धित गैरकानुनी काम' कुन हो?",
      options: [
        { ja: "通常必要と認められる期間に比べ、著しく短い工期での契約を強制したり、不当に低い請負代金を押し付けること", id: "Memaksa tenggat waktu pengerjaan yang luar biasa sempit (tidak masuk akal) atau menekan harga kontrak terlalu rendah secara sepihak", ne: "सामान्य समयभन्दा अत्यन्त छोटो अवधिको म्याद जबर्जस्ती थोपर्ने, वा अनुचित रूपमा अति सस्तो रकममा सम्झौता गर्न दबाब दिने" },
        { ja: "工事着工前に書面（契約書）を取り交わして明確に取り決めること", id: "Menandatangani kontrak tertulis secara jelas sebelum memulai pekerjaan", ne: "काम सुरु हुनुअघि लिखित सम्झौता गरेर नियम प्रष्ट पार्ने" },
        { ja: "下請負人の安全教育を支援し、安全設備を整備すること", id: "Mendukung pelatihan K3 dan melengkapi fasilitas keselamatan subkon", ne: "साना ठेकेदारको सुरक्षा तालिममा सहयोग गर्ने" },
        { ja: "工事完了後、正当な検査を行って期限内に代金を支払うこと", id: "Memeriksa hasil kerja dan membayar biaya tepat waktu sesuai perjanjian", ne: "काम सकिएपछि सही जाँच गरी तोकिएको समयमै रकम भुक्तानी दिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.124参照】建設業法では、優越的な立場を利用して「著しく短い工期の設定（工期ダンピング）」や「不当に低い請負代金での契約（買いたたき）」を厳格に禁止しています。",
      expId: "Dilarang memeras subkon dengan memaksakan target hari kerja yang mustahil (shorter deadline) dan menekan harga di bawah standar pasar.",
      expNe: "शक्ति वा पदको घमण्ड गरेर असम्भव छोटो म्याद थोपर्नु र कामदारको ज्याला उठ्न नसक्ने गरी सस्तोमा ठेक्का सम्झौता गराउनु कानुनी अपराध हो।"
    },
    {
      cat: "第5章 見積書の交付（P.124）",
      q: "建設工事の請負契約を締結する際、**建設業法で定められている「見積り（みつもり）」に関するルール**として正しいものはどれですか。",
      q_id: "Manakah aturan yang BENAR mengenai 'Penyerahan Surat Penawaran Harga / Estimasi' (Mitsumori) sebelum meneken kontrak kerja konstruksi?",
      q_ne: "ठेक्का सम्झौता गर्नुअघि 'लागत अनुमान (कोटेशन/मित्सुमोरी)' दिने सम्बन्धमा कानुनले तोकेको सही नियम कुन हो?",
      options: [
        { ja: "契約を結ぶ前に、工事の具体的な内容・金額・内訳などを記載した明確な見積書を提示し、検討するための適正な期間を与えなければならない", id: "Wajib memberikan rincian dokumen estimasi biaya yang jelas dan memberi waktu berpikir yang wajar sebelum kontrak ditandatangani", ne: "सम्झौता हुनुअघि कामको विवरण र रकमको विस्तृत विवरण भएको कोटेशन बुझाउनुपर्छ र सोच्नका लागि पर्याप्त समय दिनुपर्छ" },
        { ja: "金額は決めずに口約束だけで作業を開始し、完成後に請求書を自由な金額で出す", id: "Mulai kerja hanya dengan janji lisan tanpa harga dan menagih seenaknya setelah selesai", ne: "मूल्य नतोकी मुखले बोलेकै भरमा काम सुरु गर्ने र पछि मनलाग्दी बिल पठाउने" },
        { ja: "見積書はすべて外国語で暗号のように書かなければならない", id: "Surat penawaran harus ditulis dalam bahasa asing menggunakan kode rahasia", ne: "अनुमान पत्र गोप्य कोड भाषामा मात्र लेख्नुपर्छ" },
        { ja: "発注者は見積書を受け取ったその場で1秒以内にサインしなければならない", id: "Klien pemesan wajib menandatangani surat estimasi dalam waktu 1 detik saat itu juga", ne: "कोटेशन पाउनासाथ १ सेकेन्डभित्र हस्ताक्षर गर्नुपर्छ" }
      ],
      answer: 0,
      expJa: "【テキスト P.124参照】契約の透明性と適正化のため、契約締結前に具体的な内訳明細を記載した見積書を提示し、相手方に内容を検討するための正当な猶予期間を与えることが定められています。",
      expId: "Kontraktor wajib menyerahkan estimasi tertulis terperinci dan memberikan waktu telaah yang cukup sebelum kontrak disepakati.",
      expNe: "ठेक्का सम्झौता हुनुअगावै कामको सम्पूर्ण विवरण खुलेको कोटेशन दिनुपर्छ र अध्ययन गर्न उचित समय दिनुपर्छ।"
    },
    {
      cat: "第5章 施工体制台帳（P.123〜124）",
      q: "一定規模以上の工事において、元請負人が**「どの専門工事業者が、どんな役割で、どのような職長や作業員を配置して工事に関わっているか」を一目で把握するために作成する書類**は何ですか。",
      q_id: "Apa nama dokumen resmi yang wajib dibuat kontraktor utama untuk memetakan seluruh rantai subkon, mandor, dan pekerja yang terlibat di proyek?",
      q_ne: "कुन-कुन उप-ठेकेदार, कुन नाइके र कस्ता कामदारहरू कार्यस्थलमा खटिएका छन् भनी मुख्य ठेकेदारले बनाउने आधिकारिक विवरण खातालाई के भनिन्छ?",
      options: [
        { ja: "施工体制台帳（せこうたいせいだいちょう）", id: "Sekou Taisei Daichou (Buku Induk Struktur Organisasi Pelaksanaan Proyek)", ne: "सेकोउ ताइसेइ दाइच्यौ (निर्माण कार्यदल संरचना दर्ता खाता)" },
        { ja: "現場事務所の賃貸借契約書", id: "Perjanjian Sewa Kantor Proyek", ne: "अफिसको भाडा सम्झौता" },
        { ja: "安全靴のサイズ一覧表", id: "Daftar Ukuran Sepatu Pengaman Pekerja", ne: "जुत्ताको साइज लिस्ट" },
        { ja: "作業員の運転免許証のコピー集", id: "Koleksi Fotokopi SIM Mengemudi", ne: "ड्राइभिङ लाइसेन्सको फोटोकपी" }
      ],
      answer: 0,
      expJa: "【テキスト P.123〜124参照】重層下請構造を適正に管理し、現場の施工責任を明確にするために作成・備え置く書類を「施工体制台帳」と呼びます（現場には施工体系図を掲示）。",
      expId: "Sekou Taisei Daichou adalah buku induk rantai komando kontraktor untuk memastikan tidak ada subkon ilegal yang menyusup ke proyek.",
      expNe: "'सेकोउ ताइसेइ दाइच्यौ' कार्यस्थलमा खटिएका सबै कम्पनी र कामदारहरूको विवरण भएको मूल दर्ता खाता हो।"
    },
    {
      cat: "第5章 職長としての自覚と誇り（P.124）",
      q: "特定技能2号を取得し、日本の建設現場を率いる「**職長・リーダーとしての心構え**」として、最も適切なものはどれですか。",
      q_id: "Manakah sikap mental yang PALING TEPAT bagi pemegang visa Tokutei Ginou 2 sebagai Shokucho/Pemimpin di proyek konstruksi Jepang?",
      q_ne: "तोकुतेइ गिनौ २ प्राप्त गरी जापानी कार्यस्थलको नेतृत्व गर्ने एक कुशल 'शोकुचो / अगुवाको हुनुपर्ने सोच' सम्बन्धी कुन उपयुक्त छ?",
      options: [
        { ja: "法令やルールを遵守し、作業員の命と安全を最優先に守りながら、品質・原価・工程を管理し、誇りを持って社会に貢献する", id: "Mematuhi hukum, mengutamakan nyawa pekerja di atas segalanya, mengelola QCDSE dengan profesional, dan bangga berkontribusi bagi masyarakat", ne: "कानुन र नियमको पूर्ण पालना गर्ने, कामदारको जीवन र सुरक्षा पहिलो प्राथमिकतामा राख्ने, गुणस्तर र समयको व्यवस्थापन गर्ने र समाज निर्माणमा गर्व गर्ने" },
        { ja: "自分の給料さえ上がれば、作業員が怪我をしても品質が欠陥だらけでも構わない", id: "Tidak peduli bawahan celaka atau bangunan rusak asalkan gaji pribadi naik", ne: "आफ्नो तलब बढे पुग्छ, कामदार मरे पनि वा काम बिग्रे पनि मतलब नराख्ने" },
        { ja: "職長になったからには二度と勉強せず、これまでの古い経験則だけに固執する", id: "Menolak belajar ilmu baru dan hanya mengandalkan kebiasaan lama karena sudah jadi mandor", ne: "नाइके बनेपछि नयाँ कुरा कहिल्यै नसिक्ने र पुरानै ढिपीमा बस्ने" },
        { ja: "元請の監督や他職種の職長とは一切口を利かず、現場で孤立して作業する", id: "Menolak berkomunikasi dengan pihak mana pun dan mengisolasi timnya sendiri", ne: "इन्जिनियर वा अरू कम्पनीसँग बोल्दै नबोली कार्यस्थलमा छुट्टिएर बस्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.124参照】特定技能2号の職長は、高い安全意識・マネジメント能力・コミュニケーション力を発揮し、作業員の生命を守りながら高品質な社会インフラを築く重要なリーダーです。",
      expId: "Mandor Tokutei Ginou 2 adalah pemimpin berintegritas tinggi yang menjaga nyawa bawahan, mengawal mutu, dan memajukan bangsa.",
      expNe: "तोकुतेइ गिनौ २ का शोकुचोले कामदारको सुरक्षा, उच्च गुणस्तर र कानुनी मर्यादा राखेर समाजको विकासमा ठूलो योगदान दिन्छन्।"
    }
  ]
};
