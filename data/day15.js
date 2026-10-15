const CURRENT_QUIZ_DATA = {
  title: "Day 15：<ruby>職長<rt>しょくちょう</rt></ruby>の<ruby>職務<rt>しょくむ</rt></ruby>とリーダーシップ（テキスト P.1〜23）",
  key: "score_gakka3_15",
  passScore: 70,
  questions: [
    {
      cat: "第1章 職長の位置づけ（P.1）",
      q: "<ruby>労働安全衛生法<rt>ろうどうあんぜんえいせいほう</rt></ruby>における「<ruby>職長<rt>しょくちょう</rt></ruby>」の<ruby>位置<rt>いち</rt></ruby>づけとして、**<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なもの**はどれですか。",
      q_id: "Manakah pernyataan yang PALING TEPAT mengenai posisi 'Shokucho' (Mandor/Foreman) menurut Undang-Undang Keselamatan dan Kesehatan Kerja Jepang?",
      q_ne: "जापानको औद्योगिक सुरक्षा तथा स्वास्थ्य ऐन अनुसार 'शोकुचो' (कार्यस्थल नाइके/फोरम्यान) को भूमिका सम्बन्धी कुन भनाइ सबैभन्दा उपयुक्त छ?",
      options: [
        { ja: "工事現場における作業員の直接の指導監督者であり、作業員を直接指揮して毎日の作業を進める役割", id: "Pengawas langsung pekerja di lapangan yang memimpin dan mengarahkan pekerjaan harian secara langsung", ne: "कार्यस्थलमा कामदारहरूलाई प्रत्यक्ष निर्देशन र रेखदेख गर्ने तथा दैनिक काम अघि बढाउने प्रमुख व्यक्ति" },
        { ja: "現場には入らず、本社で書類の作成や契約の手続きだけを行う管理責任者", id: "Penanggung jawab di kantor pusat yang hanya mengurus dokumen dan kontrak tanpa ke lapangan", ne: "कार्यस्थलमा नआई हेड अफिसमा बसेर कागजात र सम्झौता मात्र हेर्ने म्यानेजर" },
        { ja: "発注者（施主）の代理人として、施工会社を検査・監督する役割", id: "Wakil pemilik proyek (klien) yang bertugas memeriksa dan mengawasi kontraktor pelaksana", ne: "घरधनी वा क्लाइन्टको प्रतिनिधिको रूपमा कामदारलाई निरीक्षण गर्ने व्यक्ति" },
        { ja: "自分の担当作業だけに専念し、他の作業員への指示や安全管理は行わない専門技能者", id: "Teknisi ahli yang hanya fokus pada pekerjaannya sendiri tanpa mengarahkan pekerja lain", ne: "आफ्नो काम मात्र गर्ने तर अरू कामदारलाई निर्देशन वा सुरक्षा रेखदेख नगर्ने कामदार" }
      ],
      answer: 0,
      expJa: "【テキスト P.1参照】職長とは労働安全衛生法において工事現場における作業員の指導監督者を指します。小規模現場では現場責任者の役割を務め、「親方」「棟梁」と呼ばれることもあります。",
      expId: "Shokucho adalah pemimpin dan pengawas kerja langsung bagi para pekerja di lapangan konstruksi sesuai UU K3 Jepang.",
      expNe: "'शोकुचो' भन्नाले कार्यस्थलमा कामदारहरूलाई प्रत्यक्ष रूपमा काम सिकाउने र नेतृत्व दिने नाइके (फोरम्यान/अगुवा) लाई बुझाउँछ।"
    },
    {
      cat: "第1章 職長の役割（P.2）",
      q: "<ruby>職長<rt>しょくちょう</rt></ruby>が<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>進<rt>すす</rt></ruby>める<ruby>上<rt>うえ</rt></ruby>で、**「<ruby>何<rt>なに</rt></ruby>よりも<ruby>最優先<rt>さいゆうせん</rt></ruby>」にしなければならないこと**は何ですか。",
      q_id: "Dalam menjalankan pekerjaan di proyek, hal apakah yang harus menjadi 'PRIORITAS PALING UTAMA' bagi seorang Shokucho?",
      q_ne: "कार्यस्थलमा काम अघि बढाउँदा एक जना शोकुचोले 'सबैभन्दा पहिलो प्राथमिकता' दिनुपर्ने कुरा के हो?",
      options: [
        { ja: "作業員の安全確保（健康と安全な作業環境の維持）", id: "Memastikan keselamatan pekerja (menjaga kesehatan dan lingkungan kerja yang aman)", ne: "कामदारहरूको सुरक्षा सुनिश्चितता (स्वास्थ्य र सुरक्षित कार्य वातावरण कायम राख्ने)" },
        { ja: "赤字を出さないための材料費の削減", id: "Memotong biaya material agar proyek tidak mengalami defisit anggaran", ne: "कम्पनी घाटामा नजाओस् भनेर सामानको खर्च घटाउने" },
        { ja: "多少危険があっても予定工期より早く終わらせること", id: "Menyelesaikan proyek lebih cepat dari jadwal meskipun ada sedikit bahaya", ne: "थोरै खतरा भए पनि तोकिएको म्यादभन्दा छिटो काम सक्ने" },
        { ja: "他社の作業員とのコミュニケーションを完全に断つこと", id: "Memutus komunikasi dengan pekerja dari subkontraktor lain", ne: "अरू कम्पनीका कामदारहरूसँग कुराकानी पूर्ण रूपमा बन्द गर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.2参照】作業を進める上で最も重要なことは「作業員の安全確保」です。作業員の健康を脅かす恐れがある場合は作業環境を改善し、安全な作業環境を維持する責任があります。",
      expId: "Hal terpenting bagi Shokucho adalah memastikan keselamatan pekerja di atas segalanya, serta memperbaiki lingkungan kerja.",
      expNe: "काम गर्दा सबैभन्दा महत्त्वपूर्ण कुरा कामदारहरूको सुरक्षा सुनिश्चित गर्नु हो। स्वास्थ्यमा असर पर्ने अवस्था भएमा वातावरण सुधार्नुपर्छ।"
    },
    {
      cat: "第1章 作業計画・手順（P.3）",
      q: "<ruby>職長<rt>しょくちょう</rt></ruby>が『<ruby>作業手順書<rt>さぎょうてじゅんしょ</rt></ruby>』を<ruby>作成<rt>さくせい</rt></ruby>し、<ruby>状況<rt>じょうきょう</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて<ruby>適時<rt>てきじ</rt></ruby>に<ruby>手順<rt>てじゅん</rt></ruby>を<ruby>調整<rt>ちょうせい</rt></ruby>する**<ruby>主<rt>おも</rt></ruby>な<ruby>目的<rt>もくてき</rt></ruby>**として、<ruby>適切<rt>てきせつ</rt></ruby>なものはどれですか。",
      q_id: "Manakah tujuan UTAMA seorang Shokucho membuat 'SOP Kerja' (Sagyou Tejunsho) dan menyesuaikannya secara tepat waktu saat kondisi lapangan berubah?",
      q_ne: "शोकुचोले 'कार्यविधि पुस्तिका (कामको प्रक्रिया सम्बन्धी कागजात)' तयार पारी अवस्था अनुसार प्रक्रिया मिलाउनुको मुख्य उद्देश्य के हो?",
      options: [
        { ja: "作業の優先順位を明確にし、工期の遅れや品質の低下を防止するため", id: "Memperjelas urutan prioritas kerja serta mencegah keterlambatan jadwal dan penurunan mutu", ne: "कामको प्राथमिकता स्पष्ट गरी काम ढिलो हुन नदिन र गुणस्तर खस्कन नदिन" },
        { ja: "作業員に余計な質問をさせず、すべて職長一人で作業を抱え込むため", id: "Agar pekerja tidak banyak bertanya dan semua pekerjaan dipegang sendiri oleh mandor", ne: "कामदारलाई प्रश्न सोध्न नदिई सबै काम शोकुचो एक्लैले गर्न" },
        { ja: "他の工事業者との打ち合わせの手間を省くため", id: "Untuk menghindari repotnya rapat koordinasi dengan kontraktor spesialis lain", ne: "अरू ठेकेदारहरूसँग छलफल गर्ने झन्झटबाट बच्नका लागि" },
        { ja: "事故が発生した際に作業員だけに責任を負わせる証拠にするため", id: "Sebagai bukti untuk menyalahkan pekerja saja ketika terjadi kecelakaan kerja", ne: "दुर्घटना भएमा कामदारलाई मात्र दोषी देखाउने प्रमाण बनाउनका लागि" }
      ],
      answer: 0,
      expJa: "【テキスト P.3参照】職長は進捗状況や資機材の調達状況を常に把握し、緊急性と重要性に応じて優先順位を検討・調整することで、工期の遅れや品質低下を防止します。",
      expId: "Tujuan SOP kerja adalah menjaga urutan prioritas, menyesuaikan langkah kerja, serta mencegah keterlambatan dan cacat kualitas.",
      expNe: "कामको प्राथमिकता तोकेर समयमै तालिका मिलाउँदा निर्माण कार्य ढिलो हुन पाउँदैन र गुणस्तर पनि राम्रो हुन्छ।"
    },
    {
      cat: "第1章 品質確保（P.3〜4）",
      q: "「<ruby>設計品質<rt>せっけいひんしつ</rt></ruby>」と「<ruby>施工品質<rt>せこうひんしつ</rt></ruby>」の<ruby>説明<rt>せつめい</rt></ruby>として、**<ruby>正<rt>ただ</rt></ruby>しいもの**はどれですか。",
      q_id: "Manakah penjelasan yang BENAR mengenai perbedaan antara 'Kualitas Desain' (Sekkei Hinshitsu) dan 'Kualitas Konstruksi' (Sekou Hinshitsu)?",
      q_ne: "'डिजाइन गुणस्तर' र 'निर्माण गुणस्तर' बीचको भिन्नता सम्बन्धी कुन भनाइ सही छ?",
      options: [
        { ja: "設計品質は設計図書で定めた「ねらいの品質」であり、施工品質は施工段階で実現する「出来ばえの品質（出来形）」である", id: "Kualitas desain adalah 'kualitas target' pada gambar kerja, sedangkan kualitas konstruksi adalah 'kualitas hasil fisik' saat pengerjaan", ne: "डिजाइन गुणस्तर नक्सामा तोकिएको 'लक्ष्य गुणस्तर' हो, भने निर्माण गुणस्तर काम गरेर प्राप्त हुने 'वास्तविक नतिजाको गुणस्तर' हो" },
        { ja: "施工品質とは図面を描く設計者の能力のことであり、現場の作業員には関係がない", id: "Kualitas konstruksi adalah keahlian perancang gambar dan tidak ada hubungannya dengan pekerja", ne: "निर्माण गुणस्तर नक्सा बनाउने इन्जिनियरको क्षमता हो, कामदारसँग यसको कुनै सम्बन्ध हुँदैन" },
        { ja: "ねらいの品質が実現できなくても、工期さえ早ければ手直し（手戻り）をする必要はない", id: "Jika kualitas target tidak tercapai, tidak perlu perbaikan ulang asalkan jadwal selesai cepat", ne: "तोकिएको गुणस्तर नपुगे पनि काम छिटो सकिएमा फेरि बनाउनु (हात दोहोर्याउनु) पर्दैन" },
        { ja: "設計品質と施工品質はまったく同じ意味であり、使い分ける必要はない", id: "Kualitas desain dan konstruksi artinya sama persis sehingga tidak perlu dibedakan", ne: "डिजाइन गुणस्तर र निर्माण गुणस्तर एउटै कुरा हुन्, फरक छुट्याउनु पर्दैन" }
      ],
      answer: 0,
      expJa: "【テキスト P.3〜4参照】設計品質は設計図書で定められる「ねらいの品質」です。施工品質は施工段階で実現する「出来ばえの品質」であり、これが一致しないと手直し・手戻り（コスト増）になります。",
      expId: "Kualitas desain adalah target rencana (nerai no hinshitsu), dan kualitas konstruksi adalah hasil jadi nyata (dekibae no hinshitsu).",
      expNe: "डिजाइन गुणस्तर नक्साको लक्ष्य हो भने निर्माण गुणस्तर कार्यस्थलको नतिजा हो। यी दुई नमिलेमा काम दोहोर्याउनु पर्ने हुन्छ।"
    },
    {
      cat: "第1章 コンプライアンス（P.4）",
      q: "<ruby>建設現場<rt>けんせつげんば</rt></ruby>における「コンプライアンス（<ruby>法令遵守<rt>ほうれいじゅんしゅ</rt></ruby>）」について、**<ruby>重大<rt>じゅうだい</rt></ruby>な<ruby>違反行為<rt>いはんこうい</rt></ruby>となる例**はどれですか。",
      q_id: "Manakah contoh tindakan yang merupakan PELANGGARAN BERAT terhadap 'Kepatuhan Hukum' (Compliance) di proyek konstruksi?",
      q_ne: "निर्माण कार्यस्थलमा 'कानुनी तथा नीतिगत पालना (कम्प्लायन्स)' को गम्भीर उल्लंघन मानिने उदाहरण कुन हो?",
      options: [
        { ja: "元請や会社へのウソの報告や、自分たちに都合の悪い不具合・事故を隠すこと", id: "Memberikan laporan palsu ke atasan/kontraktor utama, atau menyembunyikan masalah/kecelakaan", ne: "हाकिम वा मुख्य ठेकेदारलाई झूटो रिपोर्टिङ गर्नु, वा आफ्ना कमजोरी तथा दुर्घटना लुकाउनु" },
        { ja: "毎朝の朝礼で危険予知活動（KY活動）を欠かさず実施すること", id: "Melaksanakan aktivitas prediksi bahaya (KY) setiap pagi tanpa terlewat", ne: "हरेक बिहानको बैठकमा खतरा अनुमान गर्ने (KY) अभ्यास अनिवार्य रूपमा गर्नु" },
        { ja: "作業手順に問題を発見したため、監督に相談して手順書を見直すこと", id: "Menemukan kelemahan pada SOP lalu berkonsultasi dengan pengawas untuk memperbaikinya", ne: "कार्यविधिमा समस्या देखेर इन्जिनियरसँग सल्लाह गरी सुधार गर्नु" },
        { ja: "就業規則に従って定められた時間通りに休憩を取ること", id: "Mengambil waktu istirahat sesuai jam yang telah ditentukan dalam peraturan kerja", ne: "नियम अनुसार तोकिएको समयमा विश्राम (ब्रेक) लिनु" }
      ],
      answer: 0,
      expJa: "【テキスト P.4参照】ウソの報告や都合の悪いことを隠す行為は代表的なコンプライアンス違反です。企業の信頼を失墜させるだけでなく、重大な事故につながる深刻な問題です。",
      expId: "Membuat laporan palsu atau menutupi kesalahan adalah pelanggaran berat compliance yang berisiko memicu kecelakaan fatal.",
      expNe: "झूटो रिपोर्ट दिनु वा कमजोरी लुकाउनु ठूलो कानुनी उल्लंघन हो, जसले कम्पनीको इज्जत मात्र होइन ठूलो दुर्घटना निम्त्याउँछ।"
    },
    {
      cat: "第1章 人材育成（P.4〜5）",
      q: "<ruby>職場<rt>しょくば</rt></ruby>の<ruby>上司<rt>じょうし</rt></ruby>や<ruby>先輩<rt>せんぱい</rt></ruby>が、<ruby>部下<rt>ぶか</rt></ruby>や<ruby>後輩<rt>こうはい</rt></ruby>に「**<ruby>実際<rt>じっさい</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>を<ruby>通<rt>とお</rt></ruby>じて<ruby>指導<rt>しどう</rt></ruby>し、<ruby>知識<rt>ちしき</rt></ruby>や<ruby>技術<rt>ぎじゅつ</rt></ruby>を<ruby>身<rt>み</rt></ruby>につけさせる<ruby>教育<rt>きょういく</rt></ruby>**」を何と呼びますか。",
      q_id: "Apa sebutan untuk pelatihan di mana atasan/senior membimbing bawahan/junior secara langsung melalui pekerjaan nyata sehari-hari?",
      q_ne: "कार्यस्थलमा सिनियर वा हाकिमले जुनियरलाई वास्तविक काम गराउँदै व्यावहारिक ज्ञान र सीप सिकाउने विधिलाई के भनिन्छ?",
      options: [
        { ja: "OJT（On the Job Training）", id: "OJT (On the Job Training / Pelatihan di tempat kerja)", ne: "OJT (अन द जब ट्रेनिङ / काम गर्दै सिक्ने तालिम)" },
        { ja: "Off-JT（座学研修）", id: "Off-JT (Pelatihan di luar tempat kerja / kelas)", ne: "Off-JT (कक्षाकोठामा बसेर लिइने तालिम)" },
        { ja: "リスクアセスメント", id: "Risk Assessment (Penilaian risiko)", ne: "जोखिम मूल्यांकन" },
        { ja: "KYT（危険予知訓練）", id: "KYT (Pelatihan prediksi bahaya)", ne: "खतरा पूर्वअनुमान तालिम" }
      ],
      answer: 0,
      expJa: "【テキスト P.4〜5参照】実際の現場作業を通じて後輩に知識・技術を身につけさせる教育を『OJT』と呼びます。経験の浅い作業員に適切な仕事を与えて指導することも職長の役割です。",
      expId: "OJT (On the Job Training) adalah metode mendidik staf junior melalui bimbingan praktik langsung di pekerjaan nyata.",
      expNe: "'OJT' भन्नाले कार्यस्थलमा प्रत्यक्ष काम गर्दै सिनियरबाट सीप र ज्ञान सिक्ने तालिम प्रणालीलाई बुझाउँछ।"
    },
    {
      cat: "第1章 職長会（P.6）",
      q: "<ruby>規模<rt>きぼ</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きな<ruby>工事現場<rt>こうじげんば</rt></ruby>において、**<ruby>各専門工事業者<rt>かくせんもんこうじぎょうしゃ</rt></ruby>の<ruby>職長<rt>しょくちょう</rt></ruby>が<ruby>会員<rt>かいいん</rt></ruby>となって<ruby>自主的<rt>じしゅてき</rt></ruby>に<ruby>運営<rt>うんえい</rt></ruby>する<ruby>組織<rt>そしき</rt></ruby>**を何と呼びますか。",
      q_id: "Apa nama organisasi mandiri di lokasi proyek besar yang dibentuk dan dijalankan secara sukarela oleh para Shokucho dari berbagai subkontraktor spesialis?",
      q_ne: "ठूला निर्माण कार्यस्थलहरूमा विभिन्न उप-ठेकेदारका शोकुचोहरू मिलेर आफैं सञ्चालन गर्ने संस्थालाई के भनिन्छ?",
      options: [
        { ja: "職長会（しょくちょうかい）", id: "Shokuchokai (Asosiasi/Komite Mandor Proyek)", ne: "शोकुचो-काइ (कार्यस्थल नाइकेहरूको समिति)" },
        { ja: "安全衛生委員会", id: "Komite Keselamatan dan Kesehatan Kerja", ne: "सुरक्षा तथा स्वास्थ्य समिति" },
        { ja: "労働組合", id: "Serikat Buruh (Serikat Pekerja)", ne: "मजदुर युनियन" },
        { ja: "同業者組合", id: "Asosiasi Pengusaha Sejenis", ne: "व्यावसायिक संघ" }
      ],
      answer: 0,
      expJa: "【テキスト P.6参照】多くの専門工事業者が入る現場では監督だけでは統括が難しいため、職長が自主的に運営する「職長会」が作られます。合同安全パトロールや親睦会も行います。",
      expId: "Shokuchokai adalah wadah koordinasi mandiri para mandor subkontraktor untuk menyelaraskan keselamatan dan kerja sama tim.",
      expNe: "'शोकुचो-काइ' विभिन्न विधाका शोकुचोहरू मिलेर बनाएको समिति हो, जसले संयुक्त सुरक्षा गस्ती र आपसी तालमेल मिलाउँछ।"
    },
    {
      cat: "第1章 連絡のルール（P.9〜10）",
      q: "<ruby>職長<rt>しょくちょう</rt></ruby>が<ruby>現場監督<rt>げんばかんとく</rt></ruby>からの<ruby>指示<rt>しじ</rt></ruby>を<ruby>作業員<rt>さぎょういん</rt></ruby>に「<ruby>連絡<rt>れんらく</rt></ruby>」する<ruby>際<rt>さい</rt></ruby>の<ruby>注意点<rt>ちゅういてん</rt></ruby>として、**<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>な行動**はどれですか。",
      q_id: "Manakah tindakan yang PALING TEPAT saat seorang Shokucho menyampaikan 'Instruksi' dari pengawas kepada para pekerjanya?",
      q_ne: "इन्जिनियरको निर्देशन कामदारहरूलाई सुनाउँदा शोकुचोले ध्यान दिनुपर्ने सबैभन्दा उपयुक्त तरिका कुन हो?",
      options: [
        { ja: "緊急性と重要性を判断し、声の届く場所を選んで分かりやすく伝え、相手の理解を確認する", id: "Menilai urgensi/kepentingan, memilih tempat yang tenang agar suara terdengar, dan memastikan pemahaman pekerja", ne: "महत्त्व र आपतकालीन अवस्था हेरी, आवाज सुनिने ठाउँ रोजेर प्रष्टसँग बताउने र उनीहरूले बुझेको सुनिश्चित गर्ने" },
        { ja: "騒音が激しい機械の真横で早口に話し、確認もせずに作業を始めさせる", id: "Berbicara terburu-buru di samping mesin bising tanpa memastikan apakah pekerja paham", ne: "हल्ला भइरहेको मेसिन नजिकै हतार-हतार बोल्ने र बुझ्यो कि बुझेन नहेरी काममा लगाउने" },
        { ja: "連絡事項をメモ帳に小さく書いて自分のポケットにしまっておく", id: "Menulis memo kecil lalu menyimpannya di saku sendiri tanpa mengumumkannya", ne: "कापीमा सानो अक्षरले टिपेर आफ्नो खल्तीमा मात्र राख्ने" },
        { ja: "緊急で重要な連絡であっても、終業時間まで言わずに待つ", id: "Menunggu hingga jam pulang kerja meskipun informasinya sangat darurat dan penting", ne: "अत्यन्त जरुरी र आपतकालीन सूचना भए पनि काम सकिने बेलासम्म नभनी पर्खने" }
      ],
      answer: 0,
      expJa: "【テキスト P.9〜10参照】連絡は相手に伝わらなければ意味がありません。緊急度・重要度を判断し、騒音を避けて声が届く場所で簡潔に伝え、必ず相手の理解を確認（復唱等）します。",
      expId: "Komunikasi harus jelas, disampaikan di tempat yang aman dari kebisingan, dan dipastikan dipahami oleh pekerja.",
      expNe: "सूचना प्रभावकारी हुन आवाज सुनिने शान्त ठाउँमा प्रष्ट बोल्नुपर्छ र कामदारले साँच्चै बुझ्यो कि बुझेन दोहोर्याएर पक्का गर्नुपर्छ।"
    },
    {
      cat: "第1章 コーチング能力（P.15〜16）",
      q: "<ruby>部下<rt>ぶか</rt></ruby>の<ruby>能力<rt>のうりょく</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>き<ruby>出<rt>だ</rt></ruby>す「コーチング」の<ruby>基本姿勢<rt>きほんしせい</rt></ruby>として、**<ruby>正<rt>ただ</rt></ruby>しいもの**はどれですか。",
      q_id: "Manakah sikap dasar yang BENAR dalam 'Coaching' untuk mengembangkan potensi dan kemampuan anggota tim?",
      q_ne: "आफ्ना कामदारहरूको क्षमता विकास गर्न 'कोचिङ' गर्दा लिनुपर्ने सही आधारभूत दृष्टिकोण कुन हो?",
      options: [
        { ja: "「相手自身が答えを持っている」という前提に立ち、話をしっかり聞いて質問を通じて考えさせる", id: "Berdiri pada prinsip bahwa 'jawaban ada di dalam diri orang tersebut', mendengarkan baik-baik, dan memicu pemikiran lewat pertanyaan", ne: "'उत्तर ऊ आफैंसँग छ' भन्ने मान्यता राख्दै, उसको कुरा ध्यान दिएर सुन्ने र प्रश्न सोधेर सोच्न लगाउने" },
        { ja: "「自分のやり方だけが常に絶対的に正しい」と決めつけ、一方的に命令を押し通す", id: "Menganggap cara sendiri selalu paling benar dan memaksakan perintah secara sepihak", ne: "'मेरो तरिका मात्र सधैं सही हो' भन्ने घमण्ड गर्दै एकतर्फी रूपमा आदेश मात्र दिने" },
        { ja: "相手が失敗しても何もアドバイスせず、すべて本人の自己責任として放置する", id: "Membiarkan tanpa memberi nasihat saat bawahan gagal dan menganggap itu sepenuhnya salah bawahan", ne: "कामदार असफल भए पनि कुनै सल्लाह नदिई सबै उसकै दोष हो भन्दै बेवास्ता गर्ने" },
        { ja: "相手の自己成長には関心を持たず、その場の作業スピードだけを評価する", id: "Hanya menilai kecepatan kerja saat itu tanpa peduli pada pertumbuhan jangka panjang pekerja", ne: "कामदारको व्यक्तिगत प्रगतिमा चासो नदिई त्यस क्षणको कामको गति मात्र हेर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.15〜16参照】コーチングは相手自身が答えを持っているという前提に立ちます。自分の経験則を押し付けるのではなく、傾聴と質問によって相手の自己成長を支援する手法です。",
      expId: "Prinsip coaching adalah meyakini bahwa pekerja memiliki potensi solusi, lalu membimbingnya melalui mendengar dan bertanya.",
      expNe: "'कोचिङ' भनेको आदेश थोपर्ने होइन, कामदार आफैंले समाधान खोज्न सकोस् भनेर प्रश्न सोधी उसलाई सक्षम बनाउने कला हो।"
    },
    {
      cat: "第1章 技能と技術の違い（P.21）",
      q: "現場で使われる「<ruby>技能力<rt>ぎのうりょく</rt></ruby>」と「<ruby>技術力<rt>ぎじゅつりょく</rt></ruby>」の<ruby>違<rt>ちが</rt></ruby>いに関する説明として、**正しいもの**はどれですか。",
      q_id: "Manakah pernyataan yang BENAR mengenai perbedaan antara 'Ginouryoku' (Keterampilan Kerja) dan 'Gijutsuryoku' (Kemampuan Teknis)?",
      q_ne: "कार्यस्थलमा प्रयोग हुने 'गिनौर्योकु (व्यावहारिक सीप)' र 'गिजुचुर्योकु (प्राविधिक ज्ञान क्षमता)' बीचको फरक सम्बन्धी कुन सही छ?",
      options: [
        { ja: "「技能力」はある作業に熟練していることであり、「技術力」はある専門分野の知識を持ち応用できることである", id: "'Ginouryoku' adalah kemahiran dalam melakukan tugas fisik tertentu, sedangkan 'Gijutsuryoku' adalah pengetahuan teori spesialis dan penerapannya", ne: "'गिनौर्योकु' कुनै काम हातले कुशलतापूर्वक गर्न सक्ने व्यावहारिक सीप हो, भने 'गिजुचुर्योकु' प्राविधिक ज्ञान भएर त्यसलाई प्रयोग गर्ने क्षमता हो" },
        { ja: "「技能力」は学歴が高いこと、「技術力」は体力が優れていることを指す", id: "Ginouryoku berarti berpendidikan tinggi, Gijutsuryoku berarti berbadan kuat", ne: "गिनौर्योकु उच्च शिक्षा हुनु हो, र गिजुचुर्योकु शारीरिक रूपमा बलियो हुनु हो" },
        { ja: "職長には技能力だけがあれば十分であり、技術的な知識は一切必要ない", id: "Seorang mandor hanya butuh Ginouryoku tanpa perlu pengetahuan teknis sama sekali", ne: "शोकुचोलाई काम गर्ने सीप भए पुग्छ, प्राविधिक ज्ञान अलिकति पनि चाहिँदैन" },
        { ja: "技能力と技術力は全く正反対の意味であり、両立することは不可能である", id: "Kedua istilah ini berlawanan total dan mustahil dimiliki bersamaan", ne: "यी दुई पूर्णतया विपरीत कुरा हुन्, दुवै क्षमता एकै व्यक्तिमा हुन सक्दैन" }
      ],
      answer: 0,
      expJa: "【テキスト P.21参照】技能力は作業への熟練（身体的スキル）を指し、技術力は専門知識を持ちそれを現場に応用できる能力を指します。職長には手本を示し指導するために両方が求められます。",
      expId: "Ginouryoku adalah keterampilan praktis/kemahiran kerja, sedangkan Gijutsuryoku adalah kemampuan menerapkan ilmu pengetahuan teknis.",
      expNe: "'गिनौर्योकु' हातको काममा पोख्त हुनु हो भने 'गिजुचुर्योकु' प्राविधिक ज्ञानलाई व्यवहारमा उतार्न सक्ने क्षमता हो।"
    }
  ]
};
