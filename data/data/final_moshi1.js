const CURRENT_QUIZ_DATA = {
  title: "直前フル模試①：【本番的中】<ruby>学科<rt>がっか</rt></ruby>40問 ＋ <ruby>実技<rt>じつぎ</rt></ruby>25問（計65問）",
  key: "score_final_moshi_1",
  passScore: 70,
  questions: [
    // ==========================================
    // 【学科試験パート：40問（問1〜問40）】
    // ==========================================
    {
      cat: "学科：職長の役割と職務",
      q: "問1：労働安全衛生法上、現場において直接作業員を指揮・指導する職長（労働者を指揮する者）の最も重要な役割は何ですか。",
      q_id: "Soal 1: Berdasarkan UU K3, apakah peran paling penting dari seorang Shokucho (mandor pengarah pekerja) di lapangan?",
      q_ne: "प्रश्न १: श्रम सुरक्षा तथा स्वास्थ्य ऐन अनुसार कार्यस्थलमा कामदारहरूलाई प्रत्यक्ष निर्देशन दिने शोकुचोको सबैभन्दा मुख्य जिम्मेवारी के हो?",
      options: [
        { ja: "作業の安全を最優先に確保し、現場の作業員全員が無事故・無災害で作業を完了できるように指揮・監督すること", id: "Memastikan keselamatan kerja sebagai prioritas utama dan memimpin/mengawasi agar seluruh pekerja selesai tanpa kecelakaan", ne: "सुरक्षालाई पहिलो प्राथमिकता दिई सम्पूर्ण कामदारहरूलाई दुर्घटनाबिना काम सम्पन्न गर्न निर्देशन र सुपरिवेक्षण गर्नु" },
        { ja: "工期に間に合わせるため、危険な作業であっても安全確認を省略して急がせること", id: "Menyuruh pekerja terburu-buru dan memotong SOP aman demi mengejar target waktu", ne: "काम छिटो सक्नका लागि जोखिमपूर्ण काममा पनि सुरक्षा जाँच नगरी हतार गराउनु" },
        { ja: "現場事務所に閉じこもり、作業員への指示はすべてメールだけで済ませること", id: "Berdiam di kantor proyek dan hanya memberi instruksi lewat email", ne: "अफिसमै बसेर कामदारलाई इमेलबाट मात्र अह्राउनु" },
        { ja: "資材の仕入れ値を下げるために取引先とだけ終日交渉すること", id: "Hanya bernegosiasi harga bahan dengan supplier sepanjang hari", ne: "सामानको मूल्य घटाउन मात्र दिनभरि व्यापारीसँग कुरा गर्नु" }
      ],
      answer: 0,
      expJa: "【職長の職務】職長は現場で作業員を直接指揮・監督するキーマンであり、「安全は何よりも優先する」という信念のもと無事故・無災害を達成する責務を負います。",
      expId: "Shokucho adalah pemimpin lapangan langsung yang bertanggung jawab mutlak atas keselamatan nyawa timnya.",
      expNe: "शोकुचोले आफ्नो टोलीको सुरक्षालाई पहिलो स्थानमा राखी दुर्घटना हुन नदिन नेतृत्व गर्नुपर्छ।"
    },
    {
      cat: "学科：職長と安全衛生責任者",
      q: "問2：建設現場において、専門工事業者の職長が「安全衛生責任者」を兼任する場合、元方事業者（元請）の統括安全衛生責任者との連絡調整業務として正しいものはどれですか。",
      q_id: "Soal 2: Jika Shokucho merangkap sebagai Penanggung Jawab K3 (Anzen Eisei Sekininsha), manakah tugas koordinasi yang BENAR dengan kontraktor utama (Genba Motouke)?",
      q_ne: "प्रश्न २: यदि शोकुचोले सुरक्षा तथा स्वास्थ्य अधिकारीको जिम्मेवारी पनि सम्हालेको छ भने, मुख्य कम्पनीसँग समन्वय गर्दा कुन काम गर्नु सही हो?",
      options: [
        { ja: "元方事業者が毎日開催する安全工程打合せ（協議組織の会議）に参加し、混在作業の危険を調整して自社の作業員に徹底周知する", id: "Menghadiri rapat koordinasi K3 harian dengan kontraktor utama, menyelaraskan bahaya kerja silang, dan menyosialisasikannya ke anak buah", ne: "मुख्य कम्पनीले दैनिक गर्ने सुरक्षा बैठकमा भाग लिने, अन्य कम्पनीसँगको कामको खतरा मिलाउने र आफ्ना कामदारलाई राम्ररी सिकाउने" },
        { ja: "自社の作業手順書を元請には見せず、秘密にして勝手に作業する", id: "Merahasiakan SOP kerja sendiri dan bekerja semaunya tanpa izin", ne: "आफ्नो कार्यविधि मुख्य कम्पनीलाई नदेखाई लुकाएर काम गर्ने" },
        { ja: "元請からの安全指示は無視し、自社の利益だけを優先する", id: "Mengabaikan instruksi K3 dari kontraktor utama demi keuntungan sendiri", ne: "मुख्य कम्पनीको निर्देशन नमानेर आफ्नो नाफा मात्र हेर्ने" },
        { ja: "他社の作業員が危険な行動をしていても一切声をかけない", id: "Membiarkan pekerja dari subkontraktor lain meski bertindak bahaya", ne: "अरु कम्पनीको मान्छेले गल्ती गरे पनि केही नभन्ने" }
      ],
      answer: 0,
      expJa: "【安衛法第16条】安全衛生責任者は、元方事業者の統括安全衛生責任者との連絡調整、協議組織の会議への参加、指示事項の自社作業員への伝達を行います。",
      expId: "Anzen Eisei Sekininsha wajib berkoordinasi erat dengan pengawas utama proyek dan meneruskan arahan ke pekerjanya.",
      expNe: "सुरक्षा अधिकारीले मुख्य कम्पनीसँग दैनिक बैठक बसी निर्देशनहरू आफ्ना कामदारलाई बुझाउनुपर्छ।"
    },
    {
      cat: "学科：安全施工サイクル",
      q: "問3：建設現場の「日常の安全施工サイクル」において、朝一番（始業時）に実施する活動の順序として正しいものはどれですか。",
      q_id: "Soal 3: Manakah urutan yang BENAR dalam Siklus Pelaksanaan K3 Harian di awal pagi hari?",
      q_ne: "प्रश्न ३: दैनिक 'सुरक्षा निर्माण चक्र' मा बिहान काम सुरु गर्दा गरिने क्रियाकलापको सही क्रम कुन हो?",
      options: [
        { ja: "安全朝礼（ラジオ体操・指示連絡） ➔ 安全ミーティング（KY活動・新規入場者教育） ➔ 作業開始前点検", id: "Apel K3 Pagi (Senam & Pengumuman) -> Rapat K3 Tim (Aktivitas KYT & Edukasi Pekerja Baru) -> Pengecekan Alat Sebelum Kerja", ne: "सुरक्षा बिहानी सभा (कसरत र निर्देशन) -> टोलीको बैठक (खतरा अनुमान/KYT) -> काम सुरु गर्नुअघिको औजार जाँच" },
        { ja: "いきなり高所作業 ➔ 昼休みに朝礼 ➔ 夕方に点検", id: "Langsung kerja di ketinggian -> Apel saat siang -> Cek alat sore", ne: "सिधै काम सुरु गर्ने -> दिउँसो सभा -> साँझ औजार जाँच" },
        { ja: "持ち場の片付け ➔ 終礼 ➔ 朝礼", id: "Beres-beres tempat kerja -> Apel pulang -> Apel pagi", ne: "सामान थन्काउने -> साँझको बिदाइ -> बिहानको सभा" },
        { ja: "作業開始前点検 ➔ 終礼 ➔ 安全朝礼", id: "Cek alat -> Apel sore -> Apel pagi", ne: "औजार जाँच -> साँझको सभा -> बिहानको सभा" }
      ],
      answer: 0,
      expJa: "【テキスト P.186参照】朝礼で全員の健康状態と連絡事項を確認し、各班の安全ミーティング（KYT）で危険ポイントを共有し、作業前点検を行ってから作業に入ります[cite: 16]。",
      expId: "Urutan wajib pagi: Apel bersama -> Rapat KYT tim -> Cek peralatan sebelum kerja.",
      expNe: "बिहान पहिले सबैको सभा, त्यसपछि आफ्नो टोलीको KYT मिटिङ र औजार जाँचेर मात्र काम थाल्ने।"
    },
    {
      cat: "学科：危険予知（KYT）4ラウンド法",
      q: "問4：KYT（危険予知トレーニング）基礎4ラウンド法の進め方として、正しいステップの順序はどれですか。",
      q_id: "Soal 4: Manakah urutan 4 ronde yang BENAR dalam Metode Dasar KYT (Kiken Yochi Training)?",
      q_ne: "प्रश्न ४: खतरा अनुमान तालिम (KYT ४ राउन्ड) विधिको सही चरण कुन हो?",
      options: [
        { ja: "1R：どんな危険が潜んでいるか（現状把握） ➔ 2R：これが危険のポイントだ（本質追究） ➔ 3R：あなたならどうする（対策樹立） ➔ 4R：私たちはこうする（行動目標決定）", id: "1R: Bahaya apa yang tersembunyi -> 2R: Ini titik bahaya utamanya -> 3R: Apa solusi yang tepat -> 4R: Ini target tindakan kita (SOP)", ne: "१R: कस्ता खतरा लुकेका छन् -> २R: यो मुख्य खतराको चुरो हो -> ३R: तपाईं भए के गर्नुहुन्छ -> ४R: हामी यसो गर्छौं (कार्य लक्ष्य)" },
        { ja: "1R：道具を片付ける ➔ 2R：体操をする ➔ 3R：挨拶をする ➔ 4R：帰宅する", id: "1R: Bereskan alat -> 2R: Senam -> 3R: Salam -> 4R: Pulang", ne: "१R: सामान थन्काउने -> २R: कसरत -> ३R: नमस्कार -> ४R: घर जाने" },
        { ja: "1R：犯人を捜す ➔ 2R：叱責する ➔ 3R：始末書を書く ➔ 4R：罰金を払う", id: "1R: Cari pelaku -> 2R: Marahi -> 3R: Surat peringatan -> 4R: Denda", ne: "१R: दोषी खोज्ने -> २R: गाली गर्ने -> ३R: स्पष्टीकरण -> ४R: जरिवाना" },
        { ja: "1R：目標決定 ➔ 2R：対策樹立 ➔ 3R：本質追究 ➔ 4R：現状把握", id: "1R: Target -> 2R: Solusi -> 3R: Titik bahaya -> 4R: Cari bahaya", ne: "१R: लक्ष्य -> २R: उपाय -> ३R: चुरो पत्ता लगाउने -> ४R: अवस्था बुझ्ने" }
      ],
      answer: 0,
      expJa: "【KYT4ラウンド法】1R：現状把握（危険の洗い出し）➔ 2R：本質追究（重要危険の絞り込み）➔ 3R：対策樹立（具体策の提案）➔ 4R：目標設定（チーム行動目標と指差し呼称）。",
      expId: "KYT 4R: Temukan bahaya (1R), Tentukan bahaya utama (2R), Susun tindakan pencegahan (3R), dan Tetapkan target tindakan '...YOSHI!' (4R).",
      expNe: "खतरा पत्ता लगाउने (१R), मुख्य खतरा छान्ने (२R), रोकथामको उपाय खोज्ने (३R) र टोलीको नियम बनाई औंल्याएर बोल्ने (४R)।"
    },
    {
      cat: "学科：指差し呼称の効果",
      q: "問5：作業の要所で行う「指差し呼称（しさこしょう）」がヒューマンエラーを防ぐ理由として、最も適切なものはどれですか。",
      q_id: "Soal 5: Mengapa metode 'Pointing and Calling' (Shisashi Koshou) sangat efektif mencegah human error?",
      q_ne: "प्रश्न ५: 'औंल्याएर आवाज निकाल्ने (शिसा-कोशौ)' विधिले मानिसबाट हुने गल्ती रोक्न किन मद्दत गर्छ?",
      options: [
        { ja: "目・腕（指先）・口・耳の五感を総動員することで、脳の意識レベルをクリアで緊張した状態（フェーズⅢ）に引き上げるため", id: "Mengaktifkan panca indra (mata, tangan, mulut, telinga) sehingga kesadaran otak naik ke tingkat fokus optimal (Fase III)", ne: "आँखा, हात, मुख र कानलाई एकैपटक सक्रिय बनाएर दिमागलाई पूर्ण सचेत अवस्थामा पुर्याउने हुनाले" },
        { ja: "大きな声を出すと周囲の作業員が驚いて近寄ってこなくなるため", id: "Agar suara keras mengagetkan pekerja lain sehingga tidak mendekat", ne: "ठूलो स्वरले कराउँदा अरु कामदार तर्सिएर नजिक नआउने हुनाले" },
        { ja: "指を差すことで遠くのゴミを吹き飛ばすことができるため", id: "Menunjuk bisa meniup debu yang jauh", ne: "औंलाले देखाएर टाढाको फोहोर उडाउन सकिने हुनाले" },
        { ja: "法律で「1日100回言わないと罰金」と決まっているため", id: "Karena didenda jika tidak mengucapkannya 100 kali sehari", ne: "दिनमा १०० पटक नभने जरिवाना हुने कानुन भएकोले" }
      ],
      answer: 0,
      expJa: "【テキスト P.192〜194参照】指差し呼称は単に形骸化させず、対象を見て、指差して、声に出し、耳で聴くことで意識を集中させ、エラー発生率を約1/6に低減させます[cite: 22, 23, 24]。",
      expId: "Tunjuk-sebut menaikkan level fokus otak dari mengantuk/melamun ke kondisi siaga penuh (Phase III), memangkas salah tindakan.",
      expNe: "हेर्ने, देखाउने, बोल्ने र सुन्ने चारै काम गर्दा दिमाग पूर्ण चनाखो हुन्छ र गल्ती हुने सम्भावना धेरै घट्छ।"
    },
    {
      cat: "学科：建設業法と主任技術者",
      q: "問6：建設業法において、建設業者が工事現場に必ず配置しなければならない「主任技術者」または「監理技術者」の主な職務はどれですか。",
      q_id: "Soal 6: Berdasarkan UU Industri Konstruksi, apakah tugas utama Shunin Gijutsusha (Insinyur Utama) yang wajib ditempatkan di proyek?",
      q_ne: "प्रश्न ६: निर्माण व्यवसाय ऐन अनुसार कार्यस्थलमा अनिवार्य खटाइने 'शुनिन गिजुचुशा (प्रमुख प्राविधिक)' को मुख्य जिम्मेवारी के हो?",
      options: [
        { ja: "施工計画の作成、工程管理、品質管理、および当該工事の施工に従事する者の技術上の指導・監督", id: "Penyusunan rencana kerja, kontrol jadwal (progres), kontrol mutu bahan/bangunan, serta bimbingan teknis bagi para pekerja", ne: "निर्माण योजना बनाउने, कार्यतालिका हेर्ने, गुणस्तर जाँच्ने र कामदारहरूलाई प्राविधिक निर्देशन दिने" },
        { ja: "現場事務所の清掃と昼食の手配のみを行うこと", id: "Hanya menyapu kantor dan memesan makan siang", ne: "अफिस सफा गर्ने र खानाको अर्डर गर्ने मात्र" },
        { ja: "下請負業者にすべての責任を押し付けて現場には一切行かないこと", id: "Melimpahkan semua beban ke subkontraktor dan tidak pernah ke lapangan", ne: "सबै जिम्मा साना कम्पनीलाई दिएर कार्यस्थलमै नजाने" },
        { ja: "工事代金の集金と銀行への振り込み手続きのみを行うこと", id: "Hanya menagih uang proyek dan transfer ke bank", ne: "पैसा उठाउने र बैंकमा दाखिला गर्ने मात्र" }
      ],
      answer: 0,
      expJa: "【建設業法第26条の3】主任技術者・監理技術者は、工事の施工計画の作成、工程・品質・安全等の管理、作業員の技術的指導監督を誠実に行う義務があります。",
      expId: "Shunin/Kanri Gijutsusha bertanggung jawab penuh atas kendali teknis, mutu, jadwal, dan kepatuhan standar konstruksi.",
      expNe: "प्रमुख प्राविधिकले इन्जिनियरिङ योजना, गुणस्तर, तालिका र प्राविधिक सुपरीवेक्षणको सम्पूर्ण जिम्मा लिनुपर्छ।"
    },
    {
      cat: "学科：建設業の三大災害",
      q: "問7：日本の建設業における死亡事故の約7割を占める「三大災害」の組み合わせとして正しいものはどれですか。",
      q_id: "Soal 7: Manakah kombinasi yang BENAR mengenai '3 Besar Jenis Bencana Fatal' (San-dai Saigai) di konstruksi Jepang?",
      q_ne: "प्रश्न ७: जापानको निर्माण क्षेत्रमा ज्यान जाने दुर्घटनाको करिब ७०% हिस्सा ओगट्ने '३ ठूला दुर्घटनाहरू' कुन हुन्?",
      options: [
        { ja: "墜落・転落 ／ 建設機械・クレーン等による災害 ／ 倒壊・崩壊災害", id: "Jatuh dari Ketinggian / Bencana Alat Berat & Crane / Keruntuhan & Struktur Roboh", ne: "माथिबाट खस्नु / क्रेन वा हेभी मेसिनको दुर्घटना / संरचना भत्कनु वा पुरिनु" },
        { ja: "熱中症 ／ 腰痛 ／ 手指の切創", id: "Heatstroke / Sakit Pinggang / Luka Iris Jari", ne: "हिटस्ट्रोक / ढाड दुख्नु / औंला काटिनु" },
        { ja: "感電 ／ 火災 ／ 有害物接触", id: "Tersengat Listrik / Kebakaran / Kontak Zat Beracun", ne: "करेन्ट / आगलागी / विषालु पदार्थ" },
        { ja: "交通事故 ／ 睡眠時無呼吸 ／ 転倒", id: "Laka Lantas / Gangguan Tidur / Tersandung", ne: "सडक दुर्घटना / निन्द्राको समस्या / लड्नु" }
      ],
      answer: 0,
      expJa: "【テキスト P.179参照】建設業の死亡事故の多数は「墜落・転落」「重機・クレーン」「倒壊・崩壊」の3つに集中しています[cite: 9]。この3大災害の撲滅が現場管理の最優先事項です。",
      expId: "Tiga musibah paling sering merenggut nyawa: Jatuh, Tertabrak/terjepit alat berat, dan Tertimbun runtuhan/longsor.",
      expNe: "सबैभन्दा धेरै ज्यान जाने ३ दुर्घटना: अग्लोबाट खस्नु, मेसिनमा च्यापिनु र माटो वा खटले पुरिनु हुन्।"
    },
    {
      cat: "学科：労働安全衛生法上の特別教育",
      q: "問8：足場の組立、解体または変更の作業に作業員を従事させる際、事業者が受講させなければならない法定教育は何ですか。",
      q_id: "Soal 8: Pelatihan wajib apakah yang harus diselesaikan pekerja sebelum ditugaskan dalam perakitan, pembongkaran, atau perombakan perancah?",
      q_ne: "प्रश्न ८: खट (परान्चाह) बनाउने, भत्काउने वा फेर्ने काममा कामदारलाई खटाउनुअघि कम्पनीले अनिवार्य दिनुपर्ने कानुनी तालिम कुन हो?",
      options: [
        { ja: "足場の組立て等特別教育", id: "Pelatihan Khusus Perakitan Perancah (Ashiba no Kumitate Tokubetsu Kyouiku)", ne: "खट बनाउने विशेष कानुनी तालिम (तोकुबेचु क्योइकु)" },
        { ja: "普通自動車運転免許講習", id: "Kursus SIM Mobil Biasa", ne: "सवारी चालक तालिम" },
        { ja: "パソコン文書作成研修", id: "Pelatihan Mengetik Komputer Word", ne: "कम्प्यूटर टाइपिङ तालिम" },
        { ja: "簿記検定講座", id: "Kursus Akuntansi / Pembukuan", ne: "लेखा तालिम" }
      ],
      answer: 0,
      expJa: "【安衛令第20条・安衛則第36条】足場の組立て、解体、変更の作業に従事するすべての作業員は、特別教育を修了していなければ作業に就くことができません。",
      expId: "Semua tukang yang merakit atau membongkar perancah wajib memegang sertifikat Tokubetsu Kyouiku Perancah.",
      expNe: "खट बनाउने वा भत्काउने काम गर्ने हरेक कामदारले 'खट सम्बन्धी विशेष तालिम' लिएको हुनैपर्छ।"
    },
    {
      cat: "学科：フルハーネス型墜落制止用器具の義務",
      q: "問9：建設業において、フルハーネス型墜落制止用器具の着用が原則義務付けられている作業床の高さ基準はどれですか。",
      q_id: "Soal 9: Di industri konstruksi Jepang, berapakah batas ketinggian lantai kerja di mana pemakaian Full Body Harness diwajibkan?",
      q_ne: "प्रश्न ९: जापानको निर्माण क्षेत्रमा 'फुल बडी सेफ्टी हार्नेस' लगाउन अनिवार्य गरिएको उचाइको मापदण्ड कति हो?",
      options: [
        { ja: "高さ5mを超える場所での作業（一般業種は6.75m超だが建設業は5m超）", id: "Ketinggian di atas 5 meter (industri umum 6,75 m, tapi konstruksi diperketat di atas 5 m)", ne: "५ मिटरभन्दा अग्लो ठाउँमा (अन्य क्षेत्रमा ६.७५ मिटर भए पनि निर्माणमा ५ मिटरमै अनिवार्य)" },
        { ja: "高さ1m以上", id: "Ketinggian di atas 1 meter", ne: "१ मिटरभन्दा माथि" },
        { ja: "高さ30m以上", id: "Ketinggian di atas 30 meter", ne: "३० मिटरभन्दा माथि" },
        { ja: "平地のみで高所では着用禁止", id: "Hanya di tanah datar, dilarang di ketinggian", ne: "समतल भुइँमा मात्र, माथि लगाउन नपाइने" }
      ],
      answer: 0,
      expJa: "【テキスト P.189参照】墜落制止用器具の規格改正により、一般業種は6.75m超ですが、墜落リスクが高い建設業では「5mを超える場所」でフルハーネス着用が義務です[cite: 19]。",
      expId: "Untuk proyek konstruksi, ambang batas kewajiban full body harness adalah di atas ketinggian 5 meter.",
      expNe: "निर्माण क्षेत्रमा जोखिम धेरै हुने भएकाले ५ मिटरभन्दा अग्लो ठाउँमा काम गर्दा सेफ्टी हार्नेस अनिवार्य छ।"
    },
    {
      cat: "学科：工程計画とクリティカルパス",
      q: "問10：ネットワーク式工程表において、プロジェクト全体の工期を決定づける「最長の作業経路」であり、1日の遅れも許されない経路を何と呼びますか。",
      q_id: "Soal 10: Dalam bagan Network Schedule, apa sebutan jalur kerja terpanjang yang menentukan total durasi proyek dan sama sekali tidak boleh molor?",
      q_ne: "प्रश्न १०: नेटवर्क कार्यतालिकामा पूरै कामको म्याद निर्धारण गर्ने र एक दिन पनि ढिला गर्न नहुने सबैभन्दा मुख्य बाटोलाई के भनिन्छ?",
      options: [
        { ja: "クリティカルパス（重点経路）", id: "Critical Path (Jalur Kritis)", ne: "क्रिटिकल पाथ (सबैभन्दा संवेदनशील मुख्य बाटो)" },
        { ja: "バイパス", id: "Bypass (Jalan Pintas)", ne: "बाइपास (बैकल्पिक बाटो)" },
        { ja: "フリーフロート", id: "Free Float (Waktu Luang Mandiri)", ne: "फ्री फ्लोट (फुर्सदको समय)" },
        { ja: "マイルストーン", id: "Milestone (Titik Capaian)", ne: "माइलस्टोन (मुख्य कोशेढुङ्गो)" }
      ],
      answer: 0,
      expJa: "【工程管理】クリティカルパス上の作業に遅れが発生すると、そのまま全体の工事完了期日が遅延します。職長はクリティカルパス上の重点作業を最優先で管理します。",
      expId: "Critical Path adalah rangkaian mata rantai pekerjaan terpenting yang tidak memiliki toleransi waktu jeda (zero float).",
      expNe: "क्रिटिकल पाथको कुनै पनि काम ढिलो भएमा पूरै भवन निर्माणको म्याद ढिला हुन पुग्छ।"
    },
    {
      cat: "学科：原価管理の4費目",
      q: "問11：工事原価を構成する「工事原価の4費目」として正しい組み合わせはどれですか。",
      q_id: "Soal 11: Manakah kombinasi yang BENAR mengenai '4 Elemen Biaya Pokok Konstruksi' (Kouji Genka no 4 Himeki)?",
      q_ne: "प्रश्न ११: निर्माण लागत निर्धारण गर्ने '४ वटा मुख्य खर्चहरू' कुन हुन्?",
      options: [
        { ja: "材料費・労務費・外注費・経費", id: "Biaya Bahan (Materials), Biaya Tenaga Kerja (Labor), Biaya Subkontraktor (Subcontract), dan Biaya Operasional (Expenses)", ne: "सामग्री खर्च, कामदारको ज्याला, पेटी ठेक्का (सबकन्ट्र्याक्ट) खर्च, र प्रशासनिक खर्च" },
        { ja: "家賃・食費・交通費・交際費", id: "Sewa Rumah, Uang Makan, Ongkos Transport, dan Hiburan", ne: "कोठा भाडा, खाना खर्च, गाडी भाडा र मनोरञ्जन" },
        { ja: "利益・税金・利息・配当", id: "Laba, Pajak, Bunga Bank, dan Dividen", ne: "नाफा, कर, ब्याज र लाभांश" },
        { ja: "広告費・印刷費・衣装代・通信費", id: "Iklan, Cetak, Seragam, dan Pulsa", ne: "विज्ञापन, छपाइ, कपडा र फोन खर्च" }
      ],
      answer: 0,
      expJa: "【原価管理】工事原価は「材料費（資材代）」「労務費（自社直接人件費）」「外注費（下請業者への発注金額）」「経費（重機損料・仮設費・燃料等）」で管理されます。",
      expId: "4 biaya pokok konstruksi: Zairyou-hi, Roumu-hi, Gaichuu-hi, dan Kei-hi.",
      expNe: "निर्माणको ४ मुख्य लागत: निर्माण सामग्री, मजदुरी, सबकन्ट्र्याक्टर भुक्तानी र उपकरण/इन्धन खर्च।"
    },
    {
      cat: "学科：品質管理の三現主義・五現主義",
      q: "問12：現場で不具合や施工不良が発生した際、職長が問題解決のために実践すべき「三現主義」の行動として正しいものはどれですか。",
      q_id: "Soal 12: Manakah tindakan yang BENAR dalam mempraktikkan filosofi 'Sangenshugi' (3 Nyata) saat terjadi cacat mutu di lapangan?",
      q_ne: "प्रश्न १२: कार्यस्थलमा कुनै गल्ती वा समस्या आउँदा शोकुचोले पालना गर्नुपर्ने '३ प्रत्यक्ष नियम (सान्गेन-शुगी)' कुन हो?",
      options: [
        { ja: "「現場」へ直ちに行き、「現物」を自分の目で確認し、「現実」の状況・データを客観的に把握して判断する", id: "Segera pergi ke 'Lokasi Nyata' (Genba), periksa 'Benda Nyata' (Genbutsu), dan pahami 'Situasi Nyata' (Genjitsu) secara objektif", ne: "तुरुन्त 'फिल्ड' मा जाने, आफ्नै आँखाले 'सामान' हेर्ने, र वास्तविकता के हो बुझेर मात्र निर्णय गर्ने" },
        { ja: "現場には行かず、下請業者の言い訳を電話で聞いてそのまま元請に報告する", id: "Tidak ke lapangan dan hanya mendengar laporan telepon dari anak buah", ne: "फिल्डमै नगई फोनको भरमा हाकिमलाई रिपोर्ट बुझाउने" },
        { ja: "不具合の場所を隠すためにペンキを上から塗って見えなくする", id: "Mengecat bagian yang cacat agar tidak ketahuan pengawas", ne: "बिग्रिएको ठाउँ छोप्न माथिबाट रङ दलिदिने" },
        { ja: "誰がミスをしたか怒鳴りつけて責任を押し付けるだけで終わる", id: "Hanya memarahi pekerja dan melimpahkan semua kesalahan", ne: "कामदारलाई गाली गरेर पन्छिने" }
      ],
      answer: 0,
      expJa: "【三現主義】問題が発生したときは「机上の空論」を排し、「現場（現場に行く）」「現物（実物を見る）」「現実（事実を掴む）」を徹底することが基本です。",
      expId: "Sangenshugi: Datangi Genba (lokasi), amati Genbutsu (fisik barang), dan cari tahu Genjitsu (fakta riil lapangan).",
      expNe: "सान्गेन-शुगी भन्नाले फिल्डमै जाने, समस्या भएको सामान आफैं हेर्ने, र वास्तविकता बुझ्ने काम हो।"
    },
    {
      cat: "学科：労働衛生の「3管理」",
      q: "問13：労働安全衛生において、労働者を健康被害や職業性疾病から守るための「労働衛生の3管理」として正しい組み合わせはどれですか。",
      q_id: "Soal 13: Manakah kombinasi yang BENAR mengenai '3 Pilar Manajemen Kesehatan Kerja' (Roudou Eisei no San-kanri)?",
      q_ne: "प्रश्न १३: कामदारलाई बिरामी हुनबाट जोगाउन पालना गर्नुपर्ने 'औद्योगिक स्वास्थ्यका ३ व्यवस्थापन' कुन हुन्?",
      options: [
        { ja: "作業環境管理 ／ 作業管理 ／ 健康管理", id: "Manajemen Lingkungan Kerja (Kondisi Udara/Debu) / Manajemen Cara Kerja (SOP & APD) / Manajemen Kesehatan Fisik (Medical Checkup)", ne: "कार्य वातावरण व्यवस्थापन (धुलो/तापक्रम) / कार्यविधि व्यवस्थापन (नियम/मास्क) / व्यक्तिगत स्वास्थ्य व्यवस्थापन (स्वास्थ्य जाँच)" },
        { ja: "出勤管理 ／ 休憩管理 ／ 給与管理", id: "Absensi / Jam Istirahat / Penggajian", ne: "हाजिरी / आराम / तलब व्यवस्थापन" },
        { ja: "工程管理 ／ 品質管理 ／ 原価管理", id: "Progres / Mutu / Biaya", ne: "तालिका / गुणस्तर / खर्च" },
        { ja: "車両管理 ／ 燃料管理 ／ 工具管理", id: "Kendaraan / Bensin / Perkakas", ne: "गाडी / तेल / औजार व्यवस्थापन" }
      ],
      answer: 0,
      expJa: "【労働衛生の3管理】①作業環境管理（換気・遮光・騒音低減）、②作業管理（適正姿勢・休憩・保護具着用）、③健康管理（健康診断・熱中症チェック）の3本柱で健康を守ります。",
      expId: "3 pilar K3: Sagyou Kankyou Kanri (lingkungan), Sagyou Kanri (metode & APD), dan Kenkou Kanri (medis pekerja).",
      expNe: "वातावरण सफा राख्ने, सुरक्षा सामग्री लगाएर काम गर्ने र कामदारको नियमित स्वास्थ्य जाँच गर्ने ३ मुख्य खम्बा हुन्।"
    },
    {
      cat: "学科：熱中症予防の暑さ指数（WBGT）",
      q: "問14：建設現場における夏季の熱中症予防対策において、気温だけでなく湿度・日射・気流を取り入れた国際的な指標（暑さ指数）は何ですか。",
      q_id: "Soal 14: Apakah singkatan indeks cuaca panas yang mengintegrasikan suhu, kelembapan udara, dan radiasi matahari untuk mencegah heatstroke?",
      q_ne: "प्रश्न १४: गर्मीमा कामदारलाई जोगाउन तापक्रम, हावाको ओस र घामको किरणलाई मिलाएर निकालिने 'गर्मी सूचकांक' को नाम के हो?",
      options: [
        { ja: "WBGT（湿球黒球温度）", id: "WBGT (Wet Bulb Globe Temperature / Indeks Suhu Basah dan Bola)", ne: "WBGT (गर्मी सूचकांक मिटर)" },
        { ja: "OODA", id: "OODA Loop", ne: "OODA (निर्णय प्रक्रिया)" },
        { ja: "QC7", id: "QC 7 Tools", ne: "QC ७ (गुणस्तर औजार)" },
        { ja: "GDP", id: "Gross Domestic Product", ne: "GDP (कुल गार्हस्थ्य उत्पादन)" }
      ],
      answer: 0,
      expJa: "【テキスト P.190〜191参照】熱中症の発生には湿度が大きく影響するため、現場ではWBGT計測器を設置し、数値に応じて休息や給水、作業中止を判断します[cite: 20, 21]。",
      expId: "WBGT adalah standar mutlak pemantauan sengatan panas. Makin tinggi angka kelembapan, makin bahaya nilai WBGT.",
      expNe: "गर्मी नाप्न 'WBGT' यन्त्र प्रयोग गरिन्छ, जसले ओस र घामको तातोलाई हिसाब गरेर खतराको स्तर बताउँछ।"
    },
    {
      cat: "学科：ハインリッヒの法則",
      q: "問15：労働災害の統計的法則である「ハインリッヒの法則（1:29:300）」が教えている教訓として、最も適切なものはどれですか。",
      q_id: "Soal 15: Apakah pelajaran terpenting dari Hukum Heinrich (rasio 1 : 29 : 300) mengenai kecelakaan kerja?",
      q_ne: "प्रश्न १५: औद्योगिक दुर्घटनाको 'हाइनरिचको नियम (१ : २९ : ३००)' ले दिने मुख्य सन्देश के हो?",
      options: [
        { ja: "1件の重大な事故の背景には、29件の軽傷事故と、300件の怪我に至らない「ヒヤリ・ハット」が潜んでいるため、ヒヤリハットの段階で危険を撲滅しなければならない", id: "Di balik 1 kecelakaan fatal, ada 29 kecelakaan ringan dan 300 insiden nyaris celaka (hiyari-hatto); maka basmi bahaya sejak level nyaris celaka", ne: "१ वटा ठूलो ज्यानमारा दुर्घटना हुनु पछाडि २९ वटा साना चोटपटक र ३०० वटा 'थोरैले जोगिएको (हियारी-हाट्टो)' घटना हुन्छन्, त्यसैले साना गल्तीलाई तत्काल सुधार्नुपर्छ" },
        { ja: "300回怪我をしなければ、大きな死亡事故は絶対に起こらないという安心の法則", id: "Kematian tidak akan terjadi sebelum mengalami 300 kali luka ringan", ne: "३०० पटक चोट नलागी ठूलो दुर्घटना हुँदैन भन्ने नियम" },
        { ja: "1年に300人新しい作業員を採用しなければならないという法律", id: "Kewajiban merekrut 300 pekerja baru per tahun", ne: "वर्षमा ३०० जना नयाँ कामदार भर्ना गर्नुपर्ने कानुन" },
        { ja: "工事現場の予算は300倍まで膨らんでも問題ないという規則", id: "Anggaran proyek boleh membengkak hingga 300 kali lipat", ne: "बजेट ३०० गुणा बढे पनि फरक पर्दैन भन्ने नियम" }
      ],
      answer: 0,
      expJa: "【ハインリッヒの法則】重大事故を防ぐには、日常の無数にある「ヒヤリハット（不安全状態・不安全行動）」を見逃さず改善し、芽を摘むことが唯一の防止策です。",
      expId: "Cegah 1 kematian fatal dengan cara melaporkan dan membasmi 300 kejadian nyaris celaka (hiyari-hatto).",
      expNe: "एउटा ठूलो ज्यान जाने घटना रोक्नका लागि दैनिक देखिने ३०० वटा साना गल्ती र लापरबाहीलाई तुरुन्तै हटाउनुपर्छ।"
    },
    {
      cat: "学科：作業手順書の意義と見直し",
      q: "問16：現場で使用する「作業手順書」に関する職長としての心得として、誤っているものはどれですか。",
      q_id: "Soal 16: Manakah pemahaman yang SALAH bagi seorang Shokucho mengenai SOP Kerja (Sagyou Tejunsho)?",
      q_ne: "प्रश्न १६: कार्यस्थलको 'कार्यविधि पुस्तिका (एसओपी)' का सम्बन्धमा शोकुचोले गर्न नहुने 'गलत' कुरा कुन हो?",
      options: [
        { ja: "作業手順書は一度作ったら永久に変えてはならず、現場の状況や機械が変わっても昔のまま作業させる", id: "SOP tidak boleh diubah selamanya, dan pekerja harus tetap memakai cara lama meski mesin atau kondisi lapangan sudah berubah", ne: "कार्यविधि एकपटक बनेपछि कहिल्यै फेर्नु हुन्न र मेसिन वा अवस्था फेरिए पनि पुरानै तरिकाले काम लगाउनुपर्छ" },
        { ja: "作業手順書はイラストや写真、分かりやすい言葉を用いて誰でも同じ安全品質で作業できるように作成する", id: "SOP harus mudah dipahami menggunakan gambar/foto agar siapa pun bisa bekerja dengan mutu dan keamanan yang sama", ne: "कार्यविधि जोकोहीले बुझ्ने गरी फोटो र सरल भाषामा स्पष्ट लेखिनुपर्छ" },
        { ja: "ヒヤリハットの発生や新しい設備・工法の導入時には、手順書を定期的に見直し改訂する", id: "SOP wajib ditinjau ulang dan direvisi saat terjadi insiden nyaris celaka atau ada alat baru", ne: "नयाँ मेसिन आउँदा वा गल्ती फेला पर्दा कार्यविधि परिमार्जन गर्नुपर्छ" },
        { ja: "作業前ミーティングで、作業手順書に沿った急所（安全ポイント）を作業員に分かりやすく指導する", id: "Menjelaskan poin kritis keselamatan sesuai SOP kepada pekerja saat briefing pagi", ne: "बिहानी बैठकमा कार्यविधि अनुसारको मुख्य सुरक्षा नियम कामदारलाई सिकाउनुपर्छ" }
      ],
      answer: 0,
      expJa: "【作業手順書の管理】現場の条件、使用機械、工法が変わったり不具合が見つかった場合は、直ちに作業手順書を見直し、改訂（PDCA）しなければなりません。",
      expId: "SOP bersifat dinamis. Wajib diperbarui jika ada pergantian alat, metode baru, atau munculnya bahaya tak terduga.",
      expNe: "कार्यविधि सधैं एउटै रहँदैन। नयाँ तरिका र औजार आउँदा यसलाई सधैं सुधार गर्नुपर्छ।"
    },
    {
      cat: "学科：不安全行動と不安全状態",
      q: "問17：労働災害の直接原因となる「不安全行動（人的要因）」に該当するものはどれですか。",
      q_id: "Soal 17: Manakah yang tergolong sebagai 'Tindakan Tidak Aman / Unsafe Action' (faktor manusia penyebab insiden)?",
      q_ne: "प्रश्न १७: दुर्घटना गराउने मानवीय गल्ती 'असुरक्षित क्रियाकलाप (मानिसको लापरबाही)' भित्र कुन पर्दछ?",
      options: [
        { ja: "高所で面倒だからと安全帯のフックを掛けずに作業すること", id: "Bekerja di ketinggian tanpa mencantolkan kait hook harness karena merasa malas", ne: "अग्लो ठाउँमा अल्छी मानेर सेफ्टी हार्नेसको हुक नअड्काई काम गर्नु" },
        { ja: "足場の作業床に手すりが設置されていない状態", id: "Lantai kerja perancah tidak memiliki pagar pengaman (kondisi fisik)", ne: "खटको छेउमा सुरक्षा रेलिङ नभएको अवस्था (भौतिक अवस्था)" },
        { ja: "丸のこの刃が欠けている状態", id: "Mata gergaji dalam kondisi retak patah", ne: "आराको दाँत भाँचिएको अवस्था" },
        { ja: "現場の通路が暗くて照明がない状態", id: "Jalur jalan proyek gelap tanpa lampu penerangan", ne: "बाटोमा बत्ती नभएर अँध्यारो भएको अवस्था" },
      ],
      answer: 0,
      expJa: "【不安全状態と行動】設備の不備（手すりなし・刃の欠け・暗所）は「不安全状態（物）」であり、フックを掛けない・保護具を外すなどの本人の違反行為は「不安全行動（人）」です。",
      expId: "Tidak mencantolkan hook harness adalah 'Unsafe Action' (perilaku salah manusia). Tiga opsi lainnya adalah 'Unsafe Condition' (kondisi fisik barang).",
      expNe: "हुक नअड्काउनु मानिसको आफ्नै 'असुरक्षित आचरण' हो, जबकि बार नहुनु वा बत्ती नहुनु चाहिँ भौतिक अवस्थाको कमजोरी हो।"
    },
    {
      cat: "学科：ヒューマンエラーの要因",
      q: "問18：作業に慣れて自信がついたベテラン作業員が、「このくらい省略しても大丈夫だろう」と安全確認を飛ばして事故を起こすヒューマンエラーはどれですか。",
      q_id: "Soal 18: Jenis kelalaian kerja apakah saat seorang pekerja senior merasa sangat ahli lalu sengaja melewati langkah keselamatan karena meremehkan risiko?",
      q_ne: "प्रश्न १८: धेरै वर्ष काम गरेर अनुभवी बनेका कामदारले घमण्डका कारण 'यति त केही हुन्न' भन्दै सुरक्षा नियम छल्दा हुने गल्ती कुन हो?",
      options: [
        { ja: "慣れによる手抜き（過信と気の緩み）", id: "Nare ni yoru Tenuki (Keteledoran akibat Terlalu Terbiasa / Meremehkan SOP)", ne: "बानी परेकाले गरिने लापरबाही (घमण्डले नियम मिच्नु)" },
        { ja: "経験不足", id: "Kurang Pengalaman", ne: "अनुभव नहुनु" },
        { ja: "知識不足", id: "Kurang Pengetahuan Teori", ne: "ज्ञानको कमी" },
        { ja: "パニック", id: "Kepanikan Mendadak", ne: "अताल्लिएर गरिने गल्ती" }
      ],
      answer: 0,
      expJa: "【テキスト P.193参照】事故は初心者の頃よりも、仕事に慣れて自信がつき注意力が散漫になった熟練工の「慣れによる手抜き」から多く発生します[cite: 23]。",
      expId: "Kecelakaan fatal justru sering menimpa pekerja senior akibat 'Nare' (terlalu terbiasa sehingga menggampangkan bahaya).",
      expNe: "धेरैजसो ठूला दुर्घटना नयाँभन्दा पनि 'मलाई सबै आउँछ' भन्ने पुरानो कामदारको लापरबाहीले गर्दा हुन्छ।"
    },
    {
      cat: "学科：近道・省略行動",
      q: "問19：「決められた遠回りの安全通路を歩くのが面倒だから」と、開口部の上を飛び越えたり手すりを乗り越えて通行する危険行動を何と呼びますか。",
      q_id: "Soal 19: Apakah istilah untuk tindakan bahaya di mana pekerja melompati lubang atau memanjat pagar demi memotong jalan karena malas memutar?",
      q_ne: "प्रश्न १९: तोकिएको घुमाउरो सुरक्षित बाटो हिँड्न अल्छी गरेर, खाल्डो माथिबाट हामफाल्ने वा रेलिङ नाघेर सर्टकट हिँड्ने बानीलाई के भनिन्छ?",
      options: [
        { ja: "近道行動・省略行動", id: "Chikamichi Koudou / Shouryaku Koudou (Pintasan / Memotong SOP)", ne: "चिकामिची / शौर्याकु कोउदौ (सर्टकट बाटो अपनाउने गल्ती)" },
        { ja: "集団欠陥", id: "Shuudan Kekkan (Groupthink)", ne: "समूहको दबाब" },
        { ja: "認知ミス", id: "Salah Persepsi", ne: "बुझाइमा भ्रम" },
        { ja: "場面行動本能", id: "Refleks Situasional", ne: "अनियन्त्रित व्यवहार" }
      ],
      answer: 0,
      expJa: "【テキスト P.193参照】「少しでも早く、楽をしたい」という心理から正規の手順や通路を飛ばす行為を「近道行動・省略行動」といい、墜落・転落の典型的原因です[cite: 23]。",
      expId: "Chikamichi Koudou adalah tindakan memotong jalur aman demi hemat tenaga, yang sering berakhir dengan jatuh ke lubang.",
      expNe: "सजिलो र छिटो खोज्ने चक्करमा सुरक्षित बाटो छोड्नु नै 'चिकामिची कोउदौ' हो, जसले सिधै मृत्यु निम्त्याउँछ।"
    },
    {
      cat: "学科：ハラスメント防止と職長の指導",
      q: "問20：外国人技能実習生や後輩作業員を指導する際、職長として適切な指導姿勢はどれですか。",
      q_id: "Soal 20: Bagaimanakah sikap pembinaan yang BENAR bagi seorang Shokucho saat mengarahkan pekerja asing atau juniornya?",
      q_ne: "प्रश्न २०: विदेशी कामदार वा जुनियर साथीहरूलाई काम सिकाउँदा शोकुचोले कस्तो उचित व्यवहार गर्नुपर्छ?",
      options: [
        { ja: "相手の理解度や母国語の違いに配慮し、平易な日本語と身振り手振りを交え、感情的に怒鳴らず具体的に作業理由を教えて納得させる", id: "Memahami kendala bahasa, menggunakan bahasa Jepang sederhana, tidak membentak secara emosional, dan menjelaskan alasan SOP dengan logis", ne: "भाषाको भिन्नता बुझेर सरल जापानी भाषा र इसारा प्रयोग गर्ने, रिसले नचिच्याउने र कामको कारण स्पष्ट सम्झाउने" },
        { ja: "指示が伝わらないとすぐに大声で怒鳴りつけ、頭を叩いて威圧する", id: "Langsung membentak kasar dan memukul kepala jika instruksi tidak dipahami", ne: "कुरा बुझेन भन्दै ठूलो स्वरले कराउने र टाउकोमा हिर्काएर तर्साउने" },
        { ja: "日本語が苦手な外国人作業員には危険な高所作業だけを押し付けて放置する", id: "Hanya menyuruh pekerja asing mengerjakan tugas berbahaya di ketinggian dan meninggalkannya", ne: "भाषा नजान्ने विदेशीलाई मात्र जोखिमपूर्ण अग्लो काम जिम्मा दिएर छोड्ने" },
        { ja: "質問されても「見て盗め」と言って一切教えない", id: "Menolak mengajari dan menyuruh 'curi ilmu sendiri hanya dengan melihat'", ne: "सोध्दा केही नसिकाई 'आफैं हेरेर सिक' भन्ने" }
      ],
      answer: 0,
      expJa: "【ハラスメント防止と指導】暴力や暴言・人格否定はパワハラであり現場の安全を壊します。納得感のある丁寧な指導と対話が良好な安全文化を築きます。",
      expId: "Mandor modern mendidik dengan empati, bahasa sederhana, dan teladan; bukan dengan kekerasan fisik atau bentakan emosional.",
      expNe: "कुटपिट र गालीगलौज नगरी माया र आदरका साथ प्रष्टसँग काम सिकाउनु नै कुशल शोकुचोको कर्तव्य हो।"
    },
    {
      cat: "学科：PDCAサイクルとOODAループ",
      q: "問21：現場の予期せぬ急なトラブル（突然の豪雨や機械故障）に対し、臨機応変に素早く対応するための思考サイクル「OODA（ウーダ）ループ」の順序として正しいものはどれですか。",
      q_id: "Soal 21: Manakah urutan yang BENAR dari Siklus OODA Loop untuk merespons situasi darurat tak terduga di lapangan secara cepat?",
      q_ne: "प्रश्न २: कार्यस्थलमा अचानक आउने आपतकालीन समस्यालाई तुरुन्तै समाधान गर्न प्रयोग गरिने 'OODA (उडा) लुप' को सही क्रम कुन हो?",
      options: [
        { ja: "観察（Observe） ➔ 状況判断・方針決定（Orient） ➔ 意思決定（Decide） ➔ 行動（Act）", id: "Amati Fakta (Observe) -> Pahami Situasi (Orient) -> Tentukan Pilihan (Decide) -> Bertindak Cepat (Act)", ne: "हेर्ने/अवलोकन गर्ने (Observe) -> अवस्था विश्लेषण गर्ने (Orient) -> निर्णय गर्ने (Decide) -> काममा उत्रने (Act)" },
        { ja: "行動（Act） ➔ 観察（Observe） ➔ 意思決定（Decide） ➔ 状況判断（Orient）", id: "Act -> Observe -> Decide -> Orient", ne: "Act -> Observe -> Decide -> Orient" },
        { ja: "計画（Plan） ➔ 実行（Do） ➔ 評価（Check） ➔ 改善（Action）", id: "Plan -> Do -> Check -> Action (PDCA)", ne: "योजना -> काम -> जाँच -> सुधार (PDCA)" },
        { ja: "逃亡（Escape） ➔ 隠蔽（Conceal） ➔ 責任転嫁（Blame） ➔ 忘却（Forget）", id: "Kabur -> Tutup-tutupi -> Salahkan orang lain -> Lupakan", ne: "भाग्ने -> लुकाउने -> अरुलाई दोष दिने -> बिर्सने" }
      ],
      answer: 0,
      expJa: "【OODAループ】変化が激しい現場では、まず状況をよく観察し（O）、情勢を分析・判断し（O）、素早く意思決定して（D）、即座に行動（A）します。",
      expId: "OODA Loop adalah metode pengambilan keputusan taktis kilat di lapangan: Observe -> Orient -> Decide -> Act.",
      expNe: "आपत पर्दा पहिला अवस्था नियाल्ने (O), बुझ्ने (O), निर्णय गर्ने (D) र तुरुन्त कदम चाल्ने (A) विधि नै OODA हो।"
    },
    {
      cat: "学科：土止め先行工法と地山の崩壊",
      q: "問22：深さ2m以上の溝堀り掘削作業において、土砂の崩壊による作業員の生き埋め事故を防ぐための最も適切な措置はどれですか。",
      q_id: "Soal 22: Manakah tindakan pencegahan paling tepat untuk mencegah longsor menimbun pekerja pada penggalian tanah sedalam 2 meter ke atas?",
      q_ne: "प्रश्न २२: २ मिटरभन्दा गहिरो खाल्डो खन्दा माटोको ढिस्को भत्किएर कामदार पुरिनबाट रोक्न गरिने सबैभन्दा सही उपाय कुन हो?",
      options: [
        { ja: "土止め支保工（矢板・切梁・腹起し）を確実に設置し、土砂が崩れてこないよう安全を確保してから溝内に入る", id: "Pasang penahan tanah (turap/sheeting, girder, dan strut) secara kokoh sebelum pekerja turun ke dalam galian", ne: "माटो थाम्ने फल्याक र टेकोहरू (दोदोमे) बलियोसँग ठोकेर सुरक्षित बनाएपछि मात्र खाल्डोभित्र पस्ने" },
        { ja: "土止めは費用がかかるので一切設置せず、作業員に急いで走って掘らせる", id: "Tidak memasang penahan tanah demi hemat biaya dan menyuruh pekerja menggali sambil lari", ne: "पैसा बचाउन कुनै टेको नहाल्ने र कामदारलाई हतारिएर खन्न लगाउने" },
        { ja: "掘削した土砂を溝のすぐ縁のギリギリに高く積み上げておく", id: "Menumpuk tanah galian menggunung tepat di bibir tepi galian", ne: "खनेको माटो खाल्डोको छेउमै थुपारेर राख्ने" },
        { ja: "雨が降って泥水が湧き出ている最中に溝の底で寝転がる", id: "Tidur di dasar galian saat air lumpur hujan meluap", ne: "पानी परेर हिलो बगिरहेको बेला खाल्डो मुनि पल्टने" }
      ],
      answer: 0,
      expJa: "【土砂崩壊防止】地山の掘削深さが2m以上となる場合は、地山が崩壊しない勾配とするか、適切な土止め支保工を設けることが法令で義務付けられています。",
      expId: "Galian tanah >= 2 meter wajib dipasang turap penahan tanah (dodome) untuk mencegah longsor fatal menimbun manusia.",
      expNe: "२ मिटर गहिरो खाल्डोमा माटो भत्किन नदिन काठ वा फलामको पर्खाल (दोदोमे) अनिवार्य लगाउनुपर्छ।"
    },
    {
      cat: "学科：酸素欠乏症・硫化水素中毒の防止",
      q: "問23：地下ピットやマンホール、下水道などの通風が不十分な場所（酸欠危険場所）に入場する際、守らなければならない義務はどれですか。",
      q_id: "Soal 23: Manakah kewajiban mutlak yang harus ditaati sebelum pekerja memasuki area berisiko kekurangan oksigen (seperti gorong-gorong/basement)?",
      q_ne: "प्रश्न २३: जमिन मुनिको खाल्डो, ढल वा हावा नछिर्ने ठाउँ (अक्सिजन कम हुने ठाउँ) मा छिर्नुअघि पूरा गर्नुपर्ने अनिवार्य नियम कुन हो?",
      options: [
        { ja: "入場前に測定器で酸素濃度（18%以上）と硫化水素濃度（10ppm以下）を測定し、送風機で継続して換気を行う", id: "Ukur kadar oksigen (minimal 18%) dan gas H2S (maksimal 10 ppm) dengan detektor, serta pasang blower ventilasi terus-menerus", ne: "भित्र पस्नुअघि मिटरले अक्सिजन (१८% भन्दा बढी) र ग्यास जाँच गर्ने र पङ्खाबाट निरन्तर ताजा हावा पठाइरहने" },
        { ja: "息を止めて走って中に入れば換気は不要である", id: "Cukup menahan napas sambil berlari di dalam tanpa perlu ventilasi", ne: "सास रोकेर दौडिँदै भित्र पसे हावा पठाउनु पर्दैन" },
        { ja: "臭いを確認するために作業員一人を先に放り込む", id: "Menyuruh satu pekerja masuk duluan untuk mencium baunya", ne: "गन्ध कस्तो छ सुँघ्नलाई साथीलाई पहिले भित्र ठेल्ने" },
        { ja: "ライターで火をつけて爆発しないか確かめる", id: "Menyalakan korek api untuk melihat apakah meledak", ne: "लाइटर बालेर ग्यास पड्किन्छ कि नाइँ जाँच्ने" }
      ],
      answer: 0,
      expJa: "【酸素欠乏症等防止規則】酸欠場所では、酸素濃度18%以上・硫化水素10ppm以下の確認、換気の継続、監視員の配置、空気呼吸器等の備えが必須です。",
      expId: "Kadar oksigen aman minimal 18%. Wajib tes dengan gas detector portabel dan nyalakan blower angin sebelum masuk.",
      expNe: "अक्सिजन १८% भन्दा धेरै हुनैपर्छ। मिटरले ग्यास नापेर पङ्खाबाट हावा नपठाई भित्र पस्न पाइँदैन।"
    },
    {
      cat: "学科：有機溶剤中毒予防規則",
      q: "問24：屋内の換気の悪い部屋でシンナーや有機溶剤を含む塗料・接着剤を使用する際、作業員が着用すべき保護マスクは何ですか。",
      q_id: "Soal 24: Jenis masker pelindung apakah yang WAJIB dipakai saat mengecat menggunakan thinner/zat pelarut organik di dalam ruangan?",
      q_ne: "प्रश्न २४: कोठाभित्र थिनर वा केमिकल मिसिएको रङ लगाउँदा विषालु बाफबाट बच्न लगाउनुपर्ने विशेष मास्क कुन हो?",
      options: [
        { ja: "有機ガス用防毒マスク（適切な吸収缶を取り付けたもの）", id: "Masker Gas Respirator khusus Pelarut Organik (dengan tabung filter kimia aktif)", ne: "अर्ग्यानिक ग्यास छेक्ने विशेष विषादी मास्क (फिल्टर सिलिन्डर भएको)" },
        { ja: "粉じん用の不織布マスク", id: "Masker debu kain biasa", ne: "सामान्य धुलोको कपडा मास्क" },
        { ja: "透明なプラスチックのマウスシールド", id: "Pelindung mulut mika plastik transparan", ne: "प्लास्टिकको मुख छोप्ने पाता" },
        { ja: "鼻にティッシュペーパーを詰めるだけ", id: "Hanya menyumbat hidung dengan tisu kertas", ne: "नाकमा टिस्यु पेपर कोच्ने" }
      ],
      answer: 0,
      expJa: "【有機溶剤中毒予防規則】有機溶剤の蒸気は粉じんマスクでは素通りしてしまい脳神経障害を引き起こします。必ず専用の「防毒マスク（有機ガス用）」を使用します。",
      expId: "Uap thinner menembus masker debu biasa. Wajib menggunakan respirator masker gas kimia aktif (Bou-doku Mask).",
      expNe: "थिनरको गन्ध सामान्य मास्कले छेक्दैन। त्यसैले केमिकल ग्यास छेक्ने विशेष 'बोउदोकु मास्क' लगाउनुपर्छ।"
    },
    {
      cat: "学科：足場の壁つなぎの間隔（単管足場）",
      q: "問25：単管足場（鋼管足場）を組み立てる際、風圧や倒壊を防ぐために設置する「壁つなぎ」の法定設置間隔として正しいものはどれですか。",
      q_id: "Soal 25: Berapakah jarak interval pemasangan angkur pengikat dinding (kabe-tsunagi) yang diwajibkan untuk perancah pipa tunggal (tankan ashiba)?",
      q_ne: "प्रश्न २५: पाइपको खट (तान्कान आशिबा) बनाउँदा हावाले लडाउन नदिन भित्तामा बाँध्ने रड (काबे-चुनागी) को कानुनी दूरी कति हो?",
      options: [
        { ja: "垂直（高さ）方向：5.0m以下 ／ 水平方向：5.5m以下", id: "Arah Vertikal (Tinggi): Maksimal 5,0 m / Arah Horizontal: Maksimal 5,5 m", ne: "ठाडो (उचाइ) तिर: बढीमा ५.० मिटर / तेर्सोतिर: बढीमा ५.५ मिटर" },
        { ja: "垂直方向：50m以下 ／ 水平方向：50m以下", id: "Vertikal: Maks 50 m / Horizontal: Maks 50 m", ne: "ठाडो: ५० मिटर / तेर्सो: ५० मिटर" },
        { ja: "足場の最上部に1箇所だけつなげばよい", id: "Cukup 1 titik saja di paling atas", ne: "सबैभन्दा माथि एक ठाउँमा मात्र बाँधे पुग्छ" },
        { ja: "壁つなぎの間隔に法的基準は存在しない", id: "Tidak ada standar hukum untuk jarak kabe-tsunagi", ne: "कुनै कानुनी मापदण्ड छैन" }
      ],
      answer: 0,
      expJa: "【安衛則第570条】単管足場の壁つなぎ間隔は「垂直5.0m以下・水平5.5m以下」、枠組足場は「垂直9.0m以下・水平8.0m以下」と厳格に定められています。",
      expId: "Standar kabe-tsunagi perancah pipa tunggal: Vertikal <= 5,0 meter dan Horizontal <= 5,5 meter.",
      expNe: "पाइपको खटलाई भित्तामा कस्दा ठाडो दूरी ५ मिटर र तेर्सो दूरी ५.५ मिटरभित्र हुनैपर्छ।"
    },
    {
      cat: "学科：クレーン玉掛け作業の安全",
      q: "問26：移動式クレーンによる荷の吊り上げ作業において、重大事故を防ぐための合図・玉掛けルールとして誤っているものはどれですか。",
      q_id: "Soal 26: Manakah aturan pengikatan beban (tamakake) dan aba-aba crane yang SALAH?",
      q_ne: "प्रश्न २६: क्रेनले सामान उठाउँदा (तामाकाके) दुर्घटना हुन नदिन कुन नियम मान्नु 'गलत' हो?",
      options: [
        { ja: "合図者は決めずに、現場にいる全員が思い思いに大声でクレーン運転手に指示を出す", id: "Tidak menunjuk pemberi aba-aba khusus, dan semua pekerja berteriak sesuka hati ke operator crane", ne: "संकेत दिने मुख्य मान्छे नतोक्ने र सबैले आ-आफ्नो मनखुसी क्रेन चालकलाई चिच्याउने" },
        { ja: "玉掛けのワイヤーロープは、素線切れや摩耗・キンク（折れ折損）のない健全なものを使用する", id: "Menggunakan kawat sling yang tidak cacat, tidak putus kawatnya, dan tidak terpuntir kinking", ne: "तार चुँडिएको, खिया लागेको वा गाँठो परेको नभई बलियो स्लिङ तार मात्र प्रयोग गर्ने" },
        { ja: "地切り（荷が地面を数10cm離れた状態）で一旦停止し、荷のバランスとワイヤーの緩みを確認する", id: "Berhenti sejenak saat beban terangkat beberapa puluh cm dari tanah (jigiri) untuk cek keseimbangan", ne: "सामान भुइँबाट थोरै माथि उठ्ने बित्तिकै एकपटक रोकेर सन्तुलन र तारको कसाइ जाँच्ने" },
        { ja: "吊り荷の下への立入りを禁止し、誘導ロープ（介錯ロープ）を用いて荷の回転を防ぐ", id: "Melarang orang masuk ke bawah beban gantung dan gunakan tali pandu penyeimbang (kaishaku rope)", ne: "झुन्ड्याएको सामान मुनि मान्छे जान नदिने र सामान नघुमोस् भनेर डोरीले तानेर डोर्याउने" }
      ],
      answer: 0,
      expJa: "【玉掛け作業基準】クレーン作業では、定められた「1名の専任合図者」のみが運転手に明確な合図を送らなければなりません。複数人が勝手に合図を出すと誤作動を招きます。",
      expId: "Pemberi aba-aba crane WAJIB hanya 1 orang yang ditunjuk resmi. Banyak orang teriak aba-aba memicu tabrakan fatal.",
      expNe: "क्रेनलाई संकेत दिने मान्छे जम्मा १ जना मात्र तोकिनुपर्छ। धेरैले हल्ला गर्दा चालक झुक्किएर दुर्घटना हुन्छ।"
    },
    {
      cat: "学科：感電災害の防止対策",
      q: "問27：電動工具や現場仮設電源を使用する際、作業員が感電事故で命を落とすのを防ぐための設備として最も重要なものはどれですか。",
      q_id: "Soal 27: Alat pengaman kelistrikan apakah yang paling krusial dipasang pada papan listrik sementara proyek untuk mencegah kematian akibat sengatan listrik?",
      q_ne: "प्रश्न २७: कार्यस्थलमा विद्युतीय औजार चलाउँदा कामदारलाई करेन्ट लागेर ज्यान जान नदिन बिजुलीको बोर्डमा अनिवार्य राखिने उपकरण कुन हो?",
      options: [
        { ja: "感電防止用漏電遮断器（アース付きコンセント）", id: "Pemutus Sirkuit Kebocoran Listrik / ELCB (Earth Leakage Circuit Breaker ber-arde)", ne: "करेन्ट चुहावट भए तुरुन्त बिजुली काट्ने 'अर्थिङसहितको ब्रेकर (ELCB)'" },
        { ja: "電圧を2倍に跳ね上げる昇圧トランス", id: "Trafo penaik tegangan 2 kali lipat", ne: "भोल्टेज बढाउने ट्रान्सफर्मर" },
        { ja: "電線を濡れた水たまりに沈めて冷やす装置", id: "Menenggelamkan kabel ke dalam genangan air untuk mendinginkan", ne: "तार चिस्याउन पानीको खाल्डोमा डुबाउने यन्त्र" },
        { ja: "ヒューズを針金で直結して絶対に切れないようにした分電盤", id: "Sekring yang dijumper kawat agar tidak bisa putus", ne: "फ्युजको सट्टा तारले बाँधेको बोर्ड" }
      ],
      answer: 0,
      expJa: "【安衛則第333条】仮設電源や電動工具を使用する電路には、万一の漏電時に瞬時に電気を遮断する「感電防止用漏電遮断器」の設置が義務付けられています。",
      expId: "ELCB (Earth Leakage Circuit Breaker) wajib dipasang di setiap boks listrik lapangan untuk memutuskan arus saat ada sengatan/bocor.",
      expNe: "करेन्ट लाग्ने बित्तिकै आफैं बिजुली बन्द गरिदिने 'अर्थ लिकेज ब्रेकर' राख्नु अनिवार्य छ।"
    },
    {
      cat: "学科：建設機械の主用途外使用の禁止",
      q: "問28：油圧ショベル（バックホウ）を現場で使用する際、労働安全衛生規則上、固く禁止されている行為はどれですか。",
      q_id: "Soal 28: Tindakan apakah yang DILARANG KERAS dalam aturan K3 saat mengoperasikan excavator (backhoe)?",
      q_ne: "प्रश्न २८: कार्यस्थलमा एक्साभेटर (ब्याकहो) चलाउँदा कानुनले कडा प्रतिबन्ध लगाएको 'निषेधित काम' कुन हो?",
      options: [
        { ja: "バケットをクレーン代わりに使って無理な吊り上げ作業をしたり、バケットに乗って人を昇降させること（主用途外使用の禁止）", id: "Memakai bucket sebagai crane dadakan untuk mengangkat beban berat atau mengangkut manusia di dalam bucket", ne: "बकेटलाई क्रेन जस्तो बनाएर भारी सामान उठाउने वा मानिसलाई बकेटमा चढाएर माथि लैजाने" },
        { ja: "誘導員を配置して重機の後方安全を確認しながら後退すること", id: "Mundur dengan bantuan petugas pengatur lalu lintas alat berat", ne: "ट्राफिक गार्ड राखेर पछाडि हेर्दै गाडी ब्याक गर्नु" },
        { ja: "作業終了後にバケットを地面に完全に接地させてエンジンを切ること", id: "Menurunkan bucket hingga menyentuh tanah dan mematikan mesin saat selesai kerja", ne: "काम सकिएपछि बकेटलाई भुइँमा टेकाएर इन्जिन बन्द गर्नु" },
        { ja: "旋回範囲内にカラーコーンを並べて立入禁止措置をとること", id: "Memasang cone pembatas agar orang tidak masuk radius putar", ne: "मेसिन घुम्ने ठाउँ वरिपरि कोन राखेर मान्छे पस्न नदिनु" }
      ],
      answer: 0,
      expJa: "【テキスト P.183参照】建設機械を「本来の用途以外（吊り具代わり・作業員のリフト代わり等）」に使用することは法令で厳禁されています[cite: 13]。横転や下敷き死亡事故の元凶です。",
      expId: "Excavator DILARANG dipakai mengangkat orang di bucket atau mengangkat beban over kapasitas di luar fungsinya.",
      expNe: "एक्साभेटरको बकेटमा मान्छे चढाउन वा क्षमताभन्दा बढी भारी झुन्ड्याउन कानुनले कडा निषेध गरेको छ।"
    },
    {
      cat: "学科：高所作業車と特別教育",
      q: "問29：作業床の高さが10m未満の高所作業車を運転・操作する際、作業員が修了していなければならない教育は何ですか。",
      q_id: "Soal 29: Kualifikasi pendidikan apakah yang wajib dimiliki operator untuk mengoperasikan Skylift / Aerial Work Platform (tinggi < 10 meter)?",
      q_ne: "प्रश्न २९: १० मिटरभन्दा होचो उचाइमा जाने 'स्काइलिफ्ट गाडी (अग्लोमा काम गर्ने गाडी)' चलाउन कामदारले कुन तालिम लिएको हुनुपर्छ?",
      options: [
        { ja: "高所作業車運転特別教育（10m未満）", id: "Pelatihan Khusus Operator Mobil Kerja Ketinggian (< 10 meter)", ne: "१० मिटर मुनिको अग्लो गाडी चलाउने विशेष तालिम (तोकुबेचु क्योइकु)" },
        { ja: "大型特殊自動車第一種免許のみ", id: "Hanya SIM Truk Alat Berat", ne: "ठूलो गाडीको लाइसेन्स मात्र" },
        { ja: "ボイラー技士免許", id: "Lisensi Operator Boiler", ne: "ब्वाइलर लाइसेन्स" },
        { ja: "資格や教育は一切不要で誰でも操作してよい", id: "Bebas tanpa sertifikat apa pun", ne: "कुनै तालिम चाहिँदैन" }
      ],
      answer: 0,
      expJa: "【安衛則第36条】高所作業車は、作業床高さ10m以上の場合は「技能講習」、10m未満の場合は「特別教育」の修了が義務付けられています。",
      expId: "Tinggi lantai kerja < 10 meter wajib 'Tokubetsu Kyouiku', sedangkan >= 10 meter wajib 'Ginou Koushuu'.",
      expNe: "१० मिटरभन्दा कम उचाइको स्काइलिफ्ट गाडी चलाउन 'विशेष कानुनी तालिम' अनिवार्य पास गर्नुपर्छ।"
    },
    {
      cat: "学科：解体工事と事前調査（アスベスト）",
      q: "問30：建築物の解体・改修工事を行う前に、健康被害を防ぐために法令（大気汚染防止法・石綿障害予防規則）に基づいて必ず実施しなければならない調査は何ですか。",
      q_id: "Soal 30: Pemeriksaan awal apakah yang WAJIB dilakukan sebelum merenovasi/membongkar bangunan demi mencegah penyakit paru-paru mematikan?",
      q_ne: "प्रश्न ३०: भवन भत्काउनु वा मर्मत गर्नुअघि फोक्सोको क्यान्सरबाट बच्न कानुन अनुसार अनिवार्य गरिने पूर्व-जाँच के हो?",
      options: [
        { ja: "石綿（アスベスト）の使用の有無に関する事前調査（有資格者による調査と結果報告）", id: "Survei Awal Kandungan Asbes (Asbestos) oleh tenaga ahli tersertifikasi dan pelaporan hasilnya", ne: "एस्बेस्टस (विषालु सेतो धुलो) प्रयोग भएको छ कि छैन भनेर विज्ञबाट गरिने पूर्व-परीक्षण" },
        { ja: "建物に幽霊が出ないかどうかの調査", id: "Pengecekan apakah ada hantu di dalam gedung", ne: "घरमा भूत छ कि छैन भनेर हेर्ने" },
        { ja: "近所のスーパーマーケットの特売日の調査", id: "Survei hari diskon di minimarket terdekat", ne: "सुपरमार्केटको छुट कहिले छ हेर्ने" },
        { ja: "建物の壁の色が流行の色かどうかの調査", id: "Survei apakah warna dinding sedang tren", ne: "भित्ताको रङ फेसन अनुसार छ कि छैन हेर्ने" }
      ],
      answer: 0,
      expJa: "【石綿則第3条】解体・改修工事では、建材にアスベストが含まれているかを事前に有資格者が調査し、都道府県等へ報告する義務があります。",
      expId: "Survei keberadaan asbes (asbestos) adalah kewajiban hukum mutlak sebelum merenovasi gedung apa pun.",
      expNe: "घर भत्काउनु अगाडि क्यान्सर गराउने 'एस्बेस्टस' छ कि छैन भनेर जाँच गराउनु कानुनी रूपमा अनिवार्य छ।"
    },
    {
      cat: "学科：適正配置と就業制限",
      q: "問31：職長が当日の作業員を各持ち場に配置する（適正配置）にあたり、最も配慮しなければならない安全管理項目はどれですか。",
      q_id: "Soal 31: Hal terpenting apakah yang wajib dipertimbangkan seorang Shokucho saat membagi tugas penempatan anak buahnya di pagi hari?",
      q_ne: "प्रश्न ३१: शोकुचोले बिहान कामदारहरूलाई काम बाँड्दा (सही मान्छेलाई सही ठाउँमा खटाउँदा) सबैभन्दा धेरै के कुरामा ध्यान दिनुपर्छ?",
      options: [
        { ja: "作業に必要な公的資格（特別教育や技能講習）を保有しているか、および当日の健康状態（睡眠不足・体調不良がないか）", id: "Apakah pekerja memiliki sertifikat resmi yang sah untuk tugas tersebut, serta kondisi kebugaran fisiknya pagi itu", ne: "त्यो काम गर्न कामदारसँग आधिकारिक कानुनी प्रमाणपत्र छ कि छैन र उसको आजको स्वास्थ्य/निन्द्रा ठीक छ कि छैन" },
        { ja: "作業員が乗ってきたマイカーの車種と排気量", id: "Merek dan kapasitas mesin mobil pribadi pekerja", ne: "कामदार कस्तो महँगो गाडी चढेर आएको छ" },
        { ja: "作業員の趣味や血液型", id: "Hobi dan golongan darah pekerja", ne: "कामदारको रुचि र ब्लड ग्रुप" },
        { ja: "前日の晩ごはんに何を食べたか", id: "Menu makan malam kemarin", ne: "हिजो राती के खाना खाएको थियो" }
      ],
      answer: 0,
      expJa: "【適正配置】無資格者に危険業務を指示することは法律で禁止されています。また、当日の顔色や体調（睡眠不足・血圧・服薬）を確認して適材適所に配置します。",
      expId: "Penempatan kerja wajib mempertimbangkan lisensi keahlian resmi (Ginou Koushuu) dan kondisi kesehatan riil hari itu.",
      expNe: "तालिमको सर्टिफिकेट नभएका र बिरामी कामदारलाई जोखिमपूर्ण काममा लगाउन कानुनले दिँदैन।"
    },
    {
      cat: "学科：熱中症の初期症状と救急対応",
      q: "問32：作業員が炎天下で「大量の発汗、めまい、足の筋肉のけいれん（こむら返り）」を起こしました。職長が取るべき初期対応として誤っているものはどれですか。",
      q_id: "Soal 32: Pekerja mengalami keringat mengucur deras, pusing, dan kram otot saat panas terik. Manakah penanganan yang SALAH?",
      q_ne: "प्रश्न ३२: चर्को घाममा कामदारलाई धेरै पसिना आउने, रिङ्गटा लाग्ने र खुट्टा बाउँडिने भयो। शोकुचोले गर्न नहुने 'गलत' काम कुन हो?",
      options: [
        { ja: "「根性が足りない」と怒鳴り、直射日光の下に一人で放置して作業を続けさせる", id: "Memarahinya 'mental tempe' dan memaksanya tetap bekerja sendirian di bawah terik matahari", ne: "'जाँगर चलेन' भनेर गाली गर्ने र घाममै एक्लै छोडेर काम गर्न लगाउने" },
        { ja: "直ちに風通しの良い日陰や冷房の効いた涼しい休憩所に運び、衣服を緩める", id: "Segera evakuasi ke tempat teduh/ber-AC yang sejuk, lalu longgarkan pakaian kerjanya", ne: "तुरुन्तै चिसो छहारी वा एसी कोठामा लैजाने र कपडा खुकुलो पार्ने" },
        { ja: "首の周り、脇の下、太ももの付け根に氷嚢を当てて太い動脈を冷やす", id: "Kompres es di area leher, ketiak, dan pangkal paha untuk mendinginkan aliran darah", ne: "घाँटीको वरिपरि, काखी र तिघ्राको जोर्नीमा बरफ राखेर रगत चिस्याउने" },
        { ja: "本人の意識がはっきりしていれば、冷たいスポーツドリンクや塩分を補給させる", id: "Berikan minuman isotonik dingin atau garam jika korban masih sadar penuh", ne: "होश छ भने चिसो जीवनजल वा स्पोर्ट्स ड्रिंक पिउन दिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.190参照】熱中症の初期兆候を放置すると数十分で意識不明になり死に至ります[cite: 20]。直ちに涼しい場所へ移し首・脇・股の冷却と水分塩分補給を行います[cite: 20]。",
      expId: "Membiarkan korban heatstroke terus bekerja di bawah matahari adalah tindakan fatal mematikan. Evakuasi dan kompres es seketika.",
      expNe: "गर्मीले बिरामी परेको मान्छेलाई जबर्जस्ती काम लगाउनु ज्यान मार्नु जस्तै हो। तुरुन्त चिसो ठाउँमा लगेर घाँटी र काखी चिस्याउनुपर्छ।"
    },
    {
      cat: "学科：新規入場者教育の法定伝達事項",
      q: "問33：現場に初めて入場する作業員に行う「新規入場者教育」において、必ず周知しなければならない内容として最も適切なものはどれですか。",
      q_id: "Soal 33: Informasi paling penting apakah yang WAJIB dijelaskan saat Edukasi Pekerja Masuk Baru (Shinki Nyuujousha Kyouiku)?",
      q_ne: "प्रश्न ३३: पहिलोपटक कार्यस्थलमा पस्ने नयाँ कामदारलाई दिइने अभिमुखीकरण तालिममा अनिवार्य सिकाउनुपर्ने मुख्य कुरा कुन हो?",
      options: [
        { ja: "当該工事現場の立入禁止区域、安全通路、危険有害箇所、避難場所・避難経路、緊急時連絡体制", id: "Area dilarang masuk, denah jalur aman, titik bahaya galian/ketinggian, rute evakuasi darurat, dan alur kontak darurat", ne: "जान नहुने निषेधित ठाउँ, हिँड्ने सुरक्षित बाटो, खतरा भएका ठाउँ, आपत पर्दा भाग्ने बाटो र सम्पर्क नम्बर" },
        { ja: "元請の社長の高校時代の部活動の成績", id: "Riwayat ekstrakurikuler masa SMA direktur utama", ne: "कम्पनीको हाकिमको पुरानो व्यक्तिगत इतिहास" },
        { ja: "近所の観光名所と美味しい居酒屋の場所", id: "Tempat wisata dan kedai minum terdekat", ne: "वरिपरिका घुम्ने ठाउँ र रक्सी पसल" },
        { ja: "現場事務所のコピー機のメーカーと年式", id: "Merek mesin fotokopi kantor proyek", ne: "अफिसको फोटोकपी मेसिनको मोडल" }
      ],
      answer: 0,
      expJa: "【テキスト P.188参照】新規入場者は現場の地理や危険箇所を知らないため、立入禁止区域、避難経路、現場固有のルールを徹底的に周知します[cite: 18]。",
      expId: "Pekerja baru wajib tahu titik bahaya, rute evakuasi gempa/kebakaran, dan nomor darurat sebelum melangkahkan kaki ke proyek.",
      expNe: "नयाँ कामदारलाई कहाँ जान हुन्न, खतरा कहाँ छ, आपत पर्दा कता भाग्ने र कसलाई खबर गर्ने भन्ने कुरा पहिलो दिनमै सिकाउनुपर्छ।"
    },
    {
      cat: "学科：保護具の正しい使用（保護帽）",
      q: "問34：工事現場内で着用するヘルメット（保護帽）の正しい着用方法として正しいものはどれですか。",
      q_id: "Soal 34: Bagaimanakah cara pemakaian helm pengaman (protective helmet) yang BENAR di proyek konstruksi?",
      q_ne: "प्रश्न ३४: कार्यस्थलमा सेफ्टी हेल्मेट लगाउने सही तरिका कुन हो?",
      options: [
        { ja: "ヘッドバンドを自分の頭のサイズに合わせ、アゴ紐を緩みなく確実に締めて正しくまっすぐ着用する", id: "Atur ukuran lingkar kepala, kencangkan tali dagu pas tanpa kendor, dan pakai tegak lurus sempurna", ne: "टाउकोको साइज अनुसार भित्री फित्ता मिलाउने, चिउँडोको तुना खुकुलो नहुने गरी कस्ने र सिधा लगाउने" },
        { ja: "暑いからといってアゴ紐を締めずに頭に乗せるだけにする", id: "Hanya menaruh helm di atas kepala tanpa mengunci tali dagu karena gerah", ne: "गर्मी भयो भन्दै चिउँडोको तुना नबाँधी टाउको माथि मात्र राख्ने" },
        { ja: "ヘルメットの中にタオルを何重にも巻いて分厚くして斜めに被る", id: "Melilitkan handuk tebal bertumpuk di dalam helm hingga posisinya miring", ne: "हेल्मेट भित्र धेरै बाक्लो रुमाल बाँधेर बाङ्गो पारेर लगाउने" },
        { ja: "過去に高所から落下してひび割れたヘルメットをそのまま使い続ける", id: "Tetap memakai helm yang sudah retak terkena benturan masa lalu", ne: "पहिले फुटेको र चर्किएको पुरानो हेल्मेट नै लगाइरहने" }
      ],
      answer: 0,
      expJa: "【保護具の着用】アゴ紐を締めていないと、転倒や墜落の最初の衝撃でヘルメットが脱げてしまい、頭部を強打して死亡します。アゴ紐の締付けが鉄則です。",
      expId: "Tali dagu helm WAJIB terkunci kencang. Jika tidak dikunci, helm akan lepas saat pekerja terjatuh dan kepala menghantam beton.",
      expNe: "चिउँडोको तुना नकसेमा लड्ने बित्तिकै हेल्मेट फुत्किन्छ र टाउको फुटेर ज्यान जान्छ। त्यसैले तुना सधैं कस्नुपर्छ।"
    },
    {
      cat: "学科：現場の5S活動の目的",
      q: "問35：建設現場における「5S活動（整理・整頓・清掃・清潔・躾）」を徹底する最大の目的は何ですか。",
      q_id: "Soal 35: Apakah tujuan terpenting dari penerapan budaya 5S (Seiri, Seiton, Seisou, Seiketsu, Shitsuke) di lokasi proyek?",
      q_ne: "प्रश्न ३५: कार्यस्थलमा ५एस (सामान थन्काउने, सफा राख्ने नियम) कडाइका साथ लागू गर्नुको मुख्य उद्देश्य के हो?",
      options: [
        { ja: "つまずき転倒や資材崩壊を防ぎ、ムダな手待ち時間を無くして、現場の「安全・品質・生産性」を根本から向上させるため", id: "Mencegah tersandung dan material roboh, memangkas waktu mencari barang, serta mendongkrak keselamatan, mutu, dan efisiensi", ne: "लड्ने र सामान भत्किने दुर्घटना रोक्न, सामान खोज्ने समय बचाउन, र सुरक्षा तथा गुणस्तर बढाउनका लागि" },
        { ja: "現場をきれいに見せて近隣住民に自慢するためだけ", id: "Hanya untuk pamer keindahan ke tetangga sekitar", ne: "छिमेकीलाई देखाउनका लागि मात्र" },
        { ja: "資材をすべて現場の外に投げ捨てて材料費を赤字にするため", id: "Membuang semua material ke luar proyek agar rugi", ne: "सबै सामान बाहिर फालिदिनका लागि" },
        { ja: "終礼の時間を3時間延長して作業員を疲れさせるため", id: "Memperpanjang jam lembur 3 jam untuk membuat lelah pekerja", ne: "कामदारलाई धेरै थकाउनका लागि" }
      ],
      answer: 0,
      expJa: "【5S活動】「通路に物がない（整理整頓）」だけで、つまずき転倒災害を激減させ、探す時間をゼロにして作業効率を高めることができます。",
      expId: "5S bukan sekadar bersih-bersih, melainkan fondasi utama mencegah musibah tersandung dan meningkatkan efisiensi kerja.",
      expNe: "५एसले सामानमा अल्झिएर लड्न दिँदैन र औजार खोज्ने समय बचत गराई सुरक्षित र छिटो काम गर्न सघाउँछ।"
    },
    {
      cat: "学科：高所開口部の落下防止措置",
      q: "問36：建物の工事中、床のスラブ開口部（エレベーターシャフトや設備配管用の穴）に対して行わなければならない安全措置はどれですか。",
      q_id: "Soal 36: Tindakan pencegahan apakah yang WAJIB dipasang pada lubang bukaan lantai (lantai void / elevator shaft) agar orang tidak jatuh?",
      q_ne: "प्रश्न ३६: भवन बनाउँदा भुइँमा भएका खुला प्वालहरू (लिफ्टको प्वाल वा डक्ट) मा मान्छे खस्न नदिन गरिने सुरक्षा उपाय कुन हो?",
      options: [
        { ja: "丈夫な蓋を設置して容易に外れないよう固定し「開口部・関係者以外立入禁止」の危険標識を掲示するか、高さ85cm以上の手すりを設ける", id: "Pasang penutup kayu/plat yang dipaku kuat dan beri label 'Awas Lubang', atau pasang pagar pengaman setinggi minimal 85 cm", ne: "बलियो ढक्कन हालेर नहल्लिने गरी किल्ला ठोक्ने र 'खतरा' लेख्ने, वा कम्तीमा ८५ सेमी अग्लो रेलिङ लगाउने" },
        { ja: "薄い新聞紙を開口部の上にふわっと被せて隠しておく", id: "Hanya menutupi lubang dengan selembar koran tipis agar tidak kelihatan", ne: "प्वाल माथि पातलो कागज मात्र ओछ्याएर लुकाउने" },
        { ja: "暗くて見えないように穴の周りの照明をすべて消す", id: "Mematikan semua lampu agar lubang tidak terlihat", ne: "प्वाल नदेखियोस् भनेर वरिपरिको बत्ती निभाइदिने" },
        { ja: "開口部の縁に腰掛けて昼寝をするよう指示する", id: "Menyuruh pekerja tidur siang sambil duduk di pinggir lubang", ne: "प्वालको छेउमै बसेर दिउँसो सुत्न लगाउने" }
      ],
      answer: 0,
      expJa: "【安衛則第519条】高さ2m以上の開口部には、十分な強度の蓋（固定）または高さ85cm以上の手すり・囲いを設け、ネットを展張する必要があります。",
      expId: "Lubang bukaan lantai wajib ditutup penutup paten bertuliskan 'KAIKOUBU' atau dipagari railing minimal 85 cm.",
      expNe: "भुइँको खुला प्वालमा मान्छे खस्न सक्ने भएकाले बलियो ढक्कन ठोक्ने वा ८५ सेमी अग्लो सुरक्षा बार लगाउनै पर्छ।"
    },
    {
      cat: "学科：有機溶剤等の保管場所",
      q: "問37：塗料、シンナー、接着剤などの可燃性有機溶剤を現場で保管する際の安全基準として、正しいものはどれですか。",
      q_id: "Soal 37: Manakah standar keselamatan yang BENAR dalam menyimpan cairan mudah terbakar seperti cat, thinner, dan lem di proyek?",
      q_ne: "प्रश्न ३७: रङ, थिनर वा गम जस्ता आगो लाग्ने केमिकलहरू कार्यस्थलमा राख्दा कुन सुरक्षा नियम मान्नुपर्छ?",
      options: [
        { ja: "専用の通風の良い不燃性保管庫に密栓して収納し、「火気厳禁」の表示を掲示して周囲での喫煙や火花作業を禁止する", id: "Simpan dalam gudang berventilasi baik, wadah tertutup rapat, pasang rambu 'Dilarang Merokok/Api', dan larang kerja api di sekitarnya", ne: "हावा चल्ने सुरक्षित कोठामा बिर्को कसेर राख्ने, 'आगो बाल्न निषेध' लेख्ने र वरिपरि चुरोट वा वेल्डिङ गर्न नदिने" },
        { ja: "休憩所のストーブの真横に蓋を開けたまま並べておく", id: "Menaruh kaleng terbuka tepat di samping pemanas kompor ruang istirahat", ne: "जाडोमा हिटरको ठ्याक्कै छेउमा बिर्को खोलेर राख्ने" },
        { ja: "直射日光が当たり真夏に50℃を超える鉄板の上に放置する", id: "Membiarkan kaleng dijemur di atas seng panas terik matahari 50°C", ne: "घाममा ५० डिग्रीसम्म तातो हुने फलामको पातामाथि छोड्ने" },
        { ja: "作業後の余ったシンナーは現場の雨水排水溝にそのまま流して捨てる", id: "Membuang sisa thinner langsung ke saluran air got proyek", ne: "काम सकिएपछि बाँकी थिनर नालीमा बगाइदिने" }
      ],
      answer: 0,
      expJa: "【消防法・有機則】有機溶剤は揮発性が高く引火爆発の危険があるため、密栓、通風、火気厳禁、消火器の設置が厳格に義務付けられています。",
      expId: "Zat pelarut kimia wajib disimpan di tempat teduh berventilasi, jauh dari sumber api, dan selalu sediakan APAR tabung pemadam api.",
      expNe: "थिनर र रङ छिट्टै आगो टिप्ने भएकाले बिर्को कसेर हावा चल्ने ठाउँमा राख्ने र आगोबाट टाढा राख्नुपर्छ।"
    },
    {
      cat: "学科：合図の統一と周知",
      q: "問38：クレーンや揚重機、車両系建設機械を使って作業を行う際、接触や挟まれ事故を防ぐための合図管理として正しいものはどれですか。",
      q_id: "Soal 38: Manakah aturan pengelolaan aba-aba (signal) yang BENAR untuk mencegah kecelakaan tabrakan/terjepit alat berat?",
      q_ne: "प्रश्न ३८: क्रेन वा हेभी मेसिन चलाउँदा किचिने र च्यापिने दुर्घटना रोक्न संकेत (इसारा) दिने सही नियम कुन हो?",
      options: [
        { ja: "作業開始前に一定の合図方法（手合図・無線機・呼子等）を統一して定め、専任の合図者を指名して関係作業員全員に周知する", id: "Menentukan satu standar aba-aba resmi (tangan/peluit/HT), menunjuk 1 orang pemandu khusus, dan mensosialisasikannya ke semua orang", ne: "काम थाल्नुअघि एउटै किसिमको संकेत (हात, सिट्ठी वा वाकीटकी) तोक्ने, १ जना संकेत दिने मान्छे छान्ने र सबैलाई जानकारी गराउने" },
        { ja: "合図は決めずに、運転手の直感と勘だけで機械をバックさせる", id: "Tanpa aba-aba, membiarkan operator memundurkan truk hanya pakai insting", ne: "कुनै संकेत नदिई ड्राइभरले आफ्नै अन्दाजमा गाडी पछाडि सार्ने" },
        { ja: "合図者はクレーンの死角に隠れて見えない場所から指示を出す", id: "Pemberi aba-aba bersembunyi di area titik buta (blindspot) crane", ne: "ड्राइभरले नदेख्ने अँध्यारो कुनामा लुकेर इसारा गर्ने" },
        { ja: "作業員ごとにバラバラの合図を自由に出してよい", id: "Pekerja bebas memakai gerakan tangan masing-masing sesukanya", ne: "सबैले आ-आफ्नो मनखुसी फरक-फरक इसारा गर्न पाउने" }
      ],
      answer: 0,
      expJa: "【合図の統一】クレーンや重機作業では合図の混乱が重大事故を招くため、あらかじめ定めた統一合図を指名された合図者が送らなければなりません。",
      expId: "Aba-aba wajib seragam dan hanya dikeluarkan oleh satu orang juru sinyal yang ditunjuk resmi.",
      expNe: "संकेत एउटै नियमको हुनुपर्छ र तोकिएको १ जना व्यक्तिले मात्र ड्राइभरलाई प्रष्ट इसारा गर्नुपर्छ।"
    },
    {
      cat: "学科：火気使用時の防火管理",
      q: "問39：鉄骨の溶接・溶断作業など火花が飛び散る作業を行う際、火災事故を防止するための安全手順として誤っているものはどれですか。",
      q_id: "Soal 39: Manakah tindakan yang SALAH dalam mencegah kebakaran saat melakukan pekerjaan pengelasan/pemotongan yang memercikkan api?",
      q_ne: "प्रश्न ३९: वेल्डिङ वा ग्यासले फलाम काट्दा आगोको झिल्का उछिट्टिएर आगलागी हुन नदिन कुन काम गर्नु 'गलत' हो?",
      options: [
        { ja: "作業終了後、火花がくすぶっていないか確認せず、すぐに道具をまとめて誰もいなくなる", id: "Langsung pulang mengemasi alat begitu selesai las tanpa mengecek apakah masih ada bara api yang membara", ne: "वेल्डिङ सकिने बित्तिकै आगो सल्किएको छ कि छैन नहेरी तुरुन्तै सामान बाँधेर हिँडिहाल्ने" },
        { ja: "火花を受ける防炎スパッタシートを周囲に隙間なく隙間なく展張する", id: "Memasang terpal kain tahan api (spatter sheet) di sekitar area percikan las", ne: "आगोको झिल्का छेक्न वरिपरि आगो नलाग्ने विशेष कपडा (स्प्याटर सिट) ले राम्ररी घेर्ने" },
        { ja: "火花が届く範囲にある塗料・ウレタン・木くず等の可燃物をすべて除去するかシートで防護する", id: "Menyingkirkan zat mudah terbakar seperti thinner, sampah kayu, dan styrofoam dari jangkauan percikan api", ne: "झिल्का पुग्ने ठाउँमा भएका काठ, थिनर र प्लास्टिकका सामानहरू सबै टाढा हटाउने" },
        { ja: "作業場所のすぐ手元に水バケツや消火器を常備配備する", id: "Menyiapkan ember air dan tabung pemadam api (APAR) tepat di samping titik kerja", ne: "काम गर्ने ठाउँको छेउमै पानीको बाल्टिन र आगो निभाउने सिलिन्डर (दमकल) ठिक्क राख्ने" }
      ],
      answer: 0,
      expJa: "【溶接火災防止】溶接火花による火災は、作業終了後数十分〜数時間経ってから発火する事例が多発しています。作業後少なくとも30分以上は残り火がないか現場を確認します。",
      expId: "Bara api las sering menyala diam-diam setelah pekerja pulang. Wajib cek lokasi minimal 30 menit setelah pekerjaan las selesai.",
      expNe: "वेल्डिङको झिल्काले पछिबाट आगो सल्काउन सक्छ। त्यसैले काम सकिएपछि पनि कम्तीमा ३० मिनेटसम्म आगो ननिभेको पक्का गर्नुपर्छ।"
    },
    {
      cat: "学科：職長としての最終責任と心構え",
      q: "問40：特定技能2号を取得した職長が、現場で指示を出す際に最も誇りと信念を持つべき「基本原則」は何ですか。",
      q_id: "Soal 40: Apakah prinsip dasar paling mulia yang harus dipegang teguh oleh Mandor Tokutei Ginou 2 saat memimpin proyek?",
      q_ne: "प्रश्न ४०: तोकुतेइ गिनौ २ का एक कुशल शोकुचोले कार्यस्थलमा नेतृत्व गर्दा सधैं मनमा राख्नुपर्ने सबैभन्दा मुख्य सिद्धान्त के हो?",
      options: [
        { ja: "「自分の班の作業員全員の命と安全を絶対に守り、無事故で家族のもとへ帰す」という安全第一の信念", id: "Prinsip Keselamatan Pertama: 'Melindungi nyawa seluruh anggota tim dan memastikan mereka pulang ke rumah dengan selamat tanpa cedera'", ne: "'आफ्नो टोलीका सबै साथीहरूको जीवन रक्षा गर्ने र काम सकेर सकुशल परिवारकहाँ फर्काउने' सुरक्षा पहिलो प्राथमिकताको सोच" },
        { ja: "怒鳴り散らして作業員を怖がらせ、自分の言うことを何でも聞かせる支配欲", id: "Membentak agar ditakuti pekerja demi kepuasan pribadi", ne: "सबैलाई थर्काएर आफ्नो रवाफ देखाउने सोच" },
        { ja: "会社の利益のためなら多少の骨折や怪我は仕方がないという割り切り", id: "Menganggap wajar pekerja patah tulang demi laba perusahaan", ne: "कम्पनीको नाफाका लागि साथीको हातगोडा भाँचिए पनि केही हुन्न भन्ने सोच" },
        { ja: "面倒な危険予知や安全点検はすべて元請に丸投げして責任逃れをする姿勢", id: "Lepas tangan dari urusan K3 dan melimpahkan semua ke pengawas utama", ne: "झन्झटिलो सुरक्षाको काम अरुलाई पन्छाएर आफू भाग्ने सोच" }
      ],
      answer: 0,
      expJa: "【職長の心構え】特定技能2号の職長は、高い技術力だけでなく、現場の仲間と外国籍後輩の命を預かる安全の最高リーダーとしての誇りと責任を持ちます。",
      expId: "Tujuan tertinggi seorang Shokucho adalah Zero Accident: memulangkan seluruh anak buah ke rumah dalam keadaan sehat selamat setiap hari.",
      expNe: "शोकुचोको मुख्य लक्ष्य भनेकै शून्य दुर्घटना (जिरो एक्सिडेन्ट) बनाई सबै कामदारलाई सकुशल घर फर्काउनु हो।"
    },

    // ==========================================
    // 【実技試験パート：25問（問41〜問65）】
    // ==========================================
    {
      cat: "実技：オートレベルの水平据付（P.100）",
      q: "問41：オートレベル（水準器）を三脚に据え付けて測量を開始する際、機器の円形気泡管の気泡を正確に中心に合わせるために操作する部品は何ですか。",
      q_id: "Soal 41: Komponen apakah pada Auto Level yang diputar untuk memposisikan gelembung nivo kotak tepat ke titik tengah horizontal?",
      q_ne: "प्रश्न ४१: अटो लेभल यन्त्रलाई ट्राइपड स्ट्यान्डमा राखेर लेभल मिलाउँदा, गोलो पानीको फोकालाई ठ्याक्कै बीचमा ल्याउन घुमाइने ३ वटा पेच कुन हुन्?",
      options: [
        { ja: "整準ねじ（3本のレベリングスクリュー）", id: "Sekrup Pendatar / Pengatur Nivo (Leveling Screws)", ne: "लेभलिङ पेचहरू (३ वटा घुमाउने पेच)" },
        { ja: "望遠鏡の対物レンズ", id: "Lensa Objektif Depan", ne: "अगाडिको सिसा (अब्जेक्टिभ लेन्स)" },
        { ja: "三脚の石突き", id: "Ujung Kaki Logam Tripod", ne: "स्ट्यान्डको तल्लो चुच्चो" },
        { ja: "接眼レンズのピントリング", id: "Cincin Fokus Mata", ne: "आँखाले हेर्ने फोकस रिङ" }
      ],
      answer: 0,
      expJa: "【テキスト P.100参照】オートレベルは3本の「整準ねじ」を2本同時・1本単独で回して円形気泡管の気泡を中心に導き、機器を水平に整準します。",
      expId: "3 sekrup pendatar (leveling screws) diputar saling berlawanan untuk membawa gelembung nivo kotak tepat ke tengah lingkaran.",
      expNe: "अटो लेभलको ३ वटा लेभलिङ पेच घुमाएर पानीको फोकालाई बीचमा ल्याएपछि मात्र यन्त्र सिधा तेर्सो हुन्छ।"
    },
    {
      cat: "実技：スタッフ（標尺）の読み取り（P.100）",
      q: "問42：オートレベルでスタッフ（箱尺）の目盛りを視準して高さを読み取る際、測量誤差（読み間違い）を防ぐための基本動作として正しいものはどれですか。",
      q_id: "Soal 42: Manakah tindakan yang BENAR saat membaca angka rambu ukur (staff) melalui teropong level agar tidak terjadi salah ukur?",
      q_ne: "प्रश्न ४२: अटो लेभलको टेलिस्कोपबाट स्टाफ रडको अंक पढ्दा गल्ती हुन नदिन के गर्नु सही हुन्छ?",
      options: [
        { ja: "スタッフを前後にゆっくり前後に傾けさせ（アオリ）、望遠鏡の十字横線が示す「最も小さい数値（最低値）」を正しく読み取る", id: "Goyangkan rambu ukur perlahan maju-mundur, lalu baca angka 'Paling Kecil / Terendah' yang dilintasi benang silang horizontal", ne: "स्टाफ समात्ने मान्छेलाई रड बिस्तारै अगाडि-पछाडि हल्लाउन लगाउने, र तेर्सो धर्कोले छोएको 'सबैभन्दा सानो अंक' पढ्ने" },
        { ja: "スタッフが大きく斜めに傾いている瞬間の最も大きい数値を読む", id: "Membaca angka terbesar saat rambu miring jauh", ne: "रड धेरै ढल्केको बेलाको ठूलो अंक पढ्ने" },
        { ja: "望遠鏡のピントを合わせずにボヤけた状態のまま勘で読む", id: "Menebak angka dalam kondisi pandangan buram tanpa difokuskan", ne: "धमिलो भएकै बेला अन्दाजमा पढ्ने" },
        { ja: "スタッフを地面から10cm浮かせて持たせる", id: "Menyuruh pekerja mengangkat rambu menggantung 10 cm dari tanah", ne: "रडलाई जमिनबाट १० सेमी उचालेर समात्न लगाउने" }
      ],
      answer: 0,
      expJa: "【水準測量の実務】スタッフが前後に傾くと目盛りの値は見かけ上大きくなります。前後にゆっくり揺らして得られる「最小値」が垂直状態の正確な高さです。",
      expId: "Goyangan rambu ukur akan menunjukkan titik terendah (nilai minimum) pada benang silang, yang merupakan titik vertikal 90 derajat yang akurat.",
      expNe: "रड ढल्किँदा अंक ठूलो देखिन्छ। त्यसैले रड अगाडि-पछाडि हल्लाउँदा देखिने सबैभन्दा सानो अंक नै ९० डिग्रीको सही नाप हो।"
    },
    {
      cat: "実技：レーザー墨出し器の受光器判断（P.101）",
      q: "問43：直射日光の当たる明るい屋外でレーザー墨出し器の赤いレーザーラインが目視で見えない時、正確にライン位置を特定するために使う補助測定器は何ですか。",
      q_id: "Soal 43: Alat bantu apakah yang digunakan untuk mendeteksi posisi garis laser di luar ruangan yang terang benderang saat garis laser tidak tampak oleh mata?",
      q_ne: "प्रश्न ४३: बाहिर चर्को घाम लागेको बेला लेजर मेसिनको रातो धर्को आँखाले नदेखिँदा, धर्को कहाँ छ भनी पत्ता लगाउन प्रयोग गरिने सेन्सर यन्त्र कुन हो?",
      options: [
        { ja: "レーザー受光器（レシーバー）", id: "Laser Receiver / Detektor Laser (Jukouki)", ne: "लेजर रिसिभर (लेजरको धर्को समात्ने सेन्सर यन्त्र)" },
        { ja: "虫眼鏡", id: "Kaca pembesar biasa", ne: "हाते म्याग्निफाइङ ग्लास" },
        { ja: "スマートフォンのカメラフラッシュ", id: "Lampu flash HP", ne: "मोबाइलको बत्ती" },
        { ja: "懐中電灯", id: "Senter baterai", ne: "टर्चलाइट" }
      ],
      answer: 0,
      expJa: "【テキスト P.101参照】屋外の直射日光下ではレーザー光が見えなくなるため、専用の「受光器」をスタッフ等に当ててブザー音と液晶表示でレーザー位置を合わせます。",
      expId: "Laser receiver mendeteksi pulsa sinar laser yang tak terlihat mata telanjang di siang hari dengan bunyi 'tit-tit-tit-biiip'.",
      expNe: "घाममा लेजर नदेखिँदा 'लेजर रिसिभर' प्रयोग गरिन्छ, जसले धर्को भेट्टाउने बित्तिकै 'टी-टी' आवाज निकालेर देखाउँछ।"
    },
    {
      cat: "実技：足場ジャッキベースの固定（P.103）",
      q: "問44：足場の組立現場において、足場の倒壊を防ぐために敷板（敷角）と固定ベース（ジャッキベース）を緊結する正しい方法はどれですか。",
      q_id: "Soal 44: Bagaimanakah metode yang BENAR dalam mengunci pelat dasar tiang perancah (jack base) ke papan alas (shiki-ita)?",
      q_ne: "प्रश्न ४४: खट ढल्न नदिन भुइँको काठको फलेक (शिकी-इता) र फलामको बेस प्लेटलाई कसरी बलियोसँग कस्नुपर्छ?",
      options: [
        { ja: "ベース金具の穴に太い釘（または専用ビス）を確実に打ち込んで敷板に緊結する", id: "Memaku kuat paku tebal (atau sekrup khusus) melalui lubang pelat base ke papan alas", ne: "बेस प्लेटको प्वालबाट काठको फलेकमा बलियो किल्ला वा स्क्रू ठोकेर बाँध्ने" },
        { ja: "敷板の上にベース金具を乗せるだけで、釘は打たずに放置する", id: "Hanya menaruh pelat di atas papan tanpa dipaku sama sekali", ne: "काठ माथि प्लेट त्यसै राख्ने र कुनै किल्ला नठोक्ने" },
        { ja: "ガムテープをベース金具に貼り付けて固定する", id: "Menempelkan lakban kertas ke pelat base", ne: "कागजको टेपले मात्र टाँस्ने" },
        { ja: "敷板を敷かずに、ぬかるんだ泥水の中に直接ベースを埋め込む", id: "Menancapkan tiang langsung ke dalam lumpur becek tanpa papan alas", ne: "काठको फलेक नै नहाली हिलो माटोमा सिधै गाड्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.150参照】建地の滑動沈下を防ぐため、地盤を締め固め、敷板を敷き、ベース金具の釘穴に釘を打ち込んで完全に固定します。",
      expId: "Jack base wajib dipaku mati ke papan alas (shiki-ita) agar kaki tiang perancah tidak tergelincir saat dibebani.",
      expNe: "खटका खुट्टा चिप्लिन नदिन काठको फलेकमा किल्ला ठोकेर बेस प्लेटलाई हलचल नहुने बनाउनै पर्छ।"
    },
    {
      cat: "実技：足場部材（壁つなぎと手すり先行）",
      q: "問45：足場の組立・解体時において、作業員が常に手すりに囲まれた安全な作業床の上で作業できるように開発された工法は何ですか。",
      q_id: "Soal 45: Metode perakitan perancah apakah yang dirancang agar pekerja selalu terlindungi pagar pengaman sebelum melangkah ke lantai kerja baru?",
      q_ne: "प्रश्न ४५: खट बनाउँदा वा भत्काउँदा कामदार जहिले पनि सुरक्षा बारभित्रै रहेर काम गर्न पाउने गरी बनाइएको सुरक्षित विधिलाई के भनिन्छ?",
      options: [
        { ja: "手すり先行工法（てすりせんこうこうほう）", id: "Tesuri Senkou Kouhou (Metode Pagar Pengaman Duluan)", ne: "तेसुरी सेन्कोउ विधि (पहिले नै सुरक्षा बार लगाउने विधि)" },
        { ja: "手すり全撤去工法", id: "Metode tanpa pagar pengaman sama sekali", ne: "रेलिङ नै नराख्ने विधि" },
        { ja: "命綱禁止工法", id: "Metode dilarang memakai tali pengaman", ne: "सेफ्टी डोरी नै नलगाउने विधि" },
        { ja: "目隠し解体工法", id: "Metode membongkar dengan mata tertutup", ne: "आँखा चिम्लेर भत्काउने विधि" }
      ],
      answer: 0,
      expJa: "【手すり先行足場】作業床を取り付ける前に最上層の手すりを先に取り付け、常に手すりがある状態で作業させることで墜落事故をゼロにします。",
      expId: "Tesuri Senkou memastikan railing pengaman selalu terpasang satu lantai lebih awal sebelum tukang berpijak di sana.",
      expNe: "माथिल्लो तलामा टेक्न जानुअघि नै पहिले हातले समात्ने बार लगाइसकिने सुरक्षित विधिलाई 'तेसुरी सेन्कोउ' भनिन्छ।"
    },
    {
      cat: "実技：鉄骨ボルト締付の判定（トルシアボルト）",
      q: "問46：鉄骨工事の高力ボルト（トルシア形高力ボルト）の本締めにおいて、規定の締め付けトルクが正しく導入されたことを確認する判断基準は何ですか。",
      q_id: "Soal 46: Apakah bukti visual yang memastikan bahwa Baut Mutu Tinggi Torshear (Torcshear Bolt) telah dikencangkan dengan torsi sempurna?",
      q_ne: "प्रश्न ४६: स्टिलको फ्रेम कस्ने बलियो नट-बोल्ट (टोर्सियर बोल्ट) तोकिएको सही शक्तिमा कसिइसक्यो भनेर आँखाले हेरेर कसरी थाहा पाइन्छ?",
      options: [
        { ja: "専用の電動シャーレンチで締め付けた際、ボルト先端のピンテールが破断してチップが切り離されていること", id: "Bagian ekor ujung baut (pintail) putus terpotong secara otomatis oleh kunci torsi listrik", ne: "विद्युतीय रेन्चले कस्दा बोल्टको टुप्पोमा भएको सानो पुच्छर (पिनटेल) भाँच्चिएर बाहिर निस्कनु" },
        { ja: "ボルトの頭がハンマーで潰れて平らになっていること", id: "Kepala baut remuk gepeng dipukul palu", ne: "हम्बरले हिर्काएर बोल्टको टाउको चेप्टो हुनु" },
        { ja: "ボルトが手でグラグラ回ること", id: "Baut masih bisa diputar longgar dengan tangan", ne: "हातले सजिलै घुम्ने हुनु" },
        { ja: "ボルト全体が真っ赤に錆び付いていること", id: "Seluruh baut berkarat merah pekat", ne: "बोल्ट पूरै खिया लागेर रातो हुनु" }
      ],
      answer: 0,
      expJa: "【高力ボルト本締め】トルシアボルトは規定トルクに達すると先端のピンテールが破断する構造になっており、ピンテール破断の有無で本締め完了を目視確認します。",
      expId: "Putusnya pintail (ujung baut belakang) adalah bukti fisik bahwa pengencangan baut telah mencapai kekuatan standar pabrik.",
      expNe: "टोर्सियर बोल्ट सही तरिकाले कसिइसकेपछि त्यसको टुप्पोको पुच्छर आफैं भाँचिएर झर्छ।"
    },
    {
      cat: "実技：スラブ筋のスペーサー配置（P.107）",
      q: "問47：床（スラブ）のコンクリート打設において、下筋が型枠に接触してかぶり不足になるのを防ぐため、スラブ下に配置するモルタル製ブロック（キャラメル等）の間隔基準はどれですか。",
      q_id: "Soal 47: Berapakah jarak standar penempatan spacer balok mortar (caramel) pada pelat lantai (slab) agar besi tidak menempel ke triplek bekisting?",
      q_ne: "प्रश्न ४७: भुइँको ढलान गर्दा रड फर्मामा नटाँसियोस् भनेर मुनि राखिने सिमेन्टको ब्लक (क्यारामेल) कति-कति दूरीमा राख्नुपर्छ?",
      options: [
        { ja: "縦横とも、おおむね1m²に1箇所程度（約1m間隔）で均等に配置する", id: "Dipasang merata sekitar 1 buah per 1 meter persegi (jarak interval sekitar 1 meter)", ne: "वरिपरि चारैतिर करिब १ वर्गमिटरमा १ वटा (करिब १-१ मिटरको फरकमा) बराबर राख्ने" },
        { ja: "1部屋（20畳）に1個だけ部屋の真ん中に置けばよい", id: "Cukup 1 buah saja di tengah ruangan besar", ne: "ठूलो कोठाको बीचमा जम्मा १ वटा राखे पुग्छ" },
        { ja: "コンクリート打設中に足で踏んで型枠に押し付ける", id: "Diinjak kaki saat cor agar besi menempel bekisting", ne: "ढलान गर्दा खुट्टाले कुल्चेर फर्मामा टाँसिदिने" },
        { ja: "スペーサーは一切使わず、鉄筋を直接型枠の上に寝かせる", id: "Tidak memakai spacer sama sekali dan biarkan besi tergeletak di papan", ne: "कुनै ब्लक नहाली रडलाई सिधै काठ माथि सुताउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.153参照】スラブのかぶり厚さを確保するため、モルタル製スペーサーは「1m²あたり約1個（1m内外の間隔）」で千鳥状に均等配置します。",
      expId: "Spacer beton lantai dipasang rata setiap jarak 1 meter (1 buah per m2) agar besi tidak amblas saat diinjak pekerja cor.",
      expNe: "ढलानको रडलाई अड्याउन सिमेन्टका ब्लकहरू कम्तीमा १-१ मिटरको दूरीमा बराबर राख्नुपर्छ।"
    },
    {
      cat: "実技：鉄筋の結束線（P.106）",
      q: "問48：鉄筋どうしの交差部を結束する際、ハッカー（結束工具）を用いて使用する、焼きなましされた柔らかい針金は何ですか。",
      q_id: "Soal 48: Kawat kawat lunak apakah yang dipilin menggunakan alat 'Hacker' untuk mengikat persilangan besi beton agar tidak bergeser?",
      q_ne: "प्रश्न ४८: रडको जोर्नीलाई नहल्लिने गरी कस्न 'ह्याकर' औजारले बाँधिने पातलो नरम कालो तारलाई के भनिन्छ?",
      options: [
        { ja: "結束線（けっそくせん / なまし鉄線）", id: "Kessoku-sen (Kawat Bendrat / Kawat Pengikat Besi)", ne: "केस्सोकु-सेन (रड बाँध्ने नरम तार / बाइन्डिङ वायर)" },
        { ja: "ピアノ線", id: "Kawat Baja Keras Senar Piano", ne: "पियानोको कडा तार" },
        { ja: "有刺鉄線", id: "Kawat Duri Pagar", ne: "काँडेतार" },
        { ja: "アルミホイル", id: "Aluminium Foil Kertas", ne: "आल्मुनियमको कागज" }
      ],
      answer: 0,
      expJa: "【テキスト P.106参照】鉄筋の配筋工事では、直径0.8mm前後のなまし鉄線である「結束線」をハッカーで素早くねじって鉄筋を固定します[cite: 11]。",
      expId: "Kessoku-sen adalah kawat bendrat lentur yang diputar menggunakan alat kait 'Hacker' untuk merakit besi tulangan.",
      expNe: "रडको जाली बाँध्नका लागि 'केस्सोकु-सेन' तारलाई ह्याकरले बटारेर कसिन्छ।"
    },
    {
      cat: "実技：ガス圧接の不良形状判断（P.157）",
      q: "問49：鉄筋のガス圧接継手において、外観検査で「不合格（欠陥）」となる接合部の状態はどれですか。",
      q_id: "Soal 49: Manakah kondisi sambungan las gas assetsu besi beton yang dinyatakan 'TIDAK LULUS / CACAT' pada uji visual?",
      q_ne: "प्रश्न ४९: रडको ग्यास वेल्डिङ (आस्सेचु) गर्दा आँखाले हेरेर गरिने जाँचमा कुन अवस्था देखिएमा 'फेल (खराब)' मानिन्छ?",
      options: [
        { ja: "ふくらみの直径が規定値（鉄筋径の1.4倍以上）未満であったり、接合部に著しい折れ曲がりや割れ目（クラック）がある状態", id: "Diameter tonjolan kurang dari syarat (1,4x diameter besi), atau sambungan bengkok dan terdapat celah retak", ne: "जोर्नीको गोलो डल्लो तोकिएको भन्दा सानो भएको, रड बाङ्गो भएको वा जोर्नीमा चिरा (क्र्याक) परेको अवस्था" },
        { ja: "ふくらみの直径が鉄筋径の1.5倍あり、滑らかな球状に成形されている状態", id: "Diameter tonjolan 1,5x diameter besi dan berbentuk bulat halus sempurna", ne: "डल्लो रडभन्दा १.५ गुणा ठूलो भएको र चिल्लो गोलो बनेको अवस्था" },
        { ja: "鉄筋の芯のズレ（偏心量）が鉄筋径の1/5以下に収まっている状態", id: "Kemiringan as besi kurang dari 1/5 diameter besi (memenuhi standar)", ne: "रडको सेन्टर नबिग्रिएको अवस्था" },
        { ja: "ふくらみの長さが鉄筋径の1.2倍以上確保されている状態", id: "Panjang tonjolan lebih dari 1,2x diameter besi", ne: "डल्लोको लम्बाइ तोकिए अनुसार पुगेको अवस्था" }
      ],
      answer: 0,
      expJa: "【テキスト P.157図参照】ガス圧接の合格基準は、ふくらみ直径1.4倍以上、長さ1.2倍以上、偏心量1/5以下、折れ曲がり2度以下、割れ・へこみがないことです。",
      expId: "Cacat sambungan gas assetsu: Tonjolan kurus (<1,4d), retak, as geser (henshin), atau batang bengkok melebihi 2 derajat.",
      expNe: "डल्लो सानो भएको, चिरा परेको वा बाङ्गो भएको जोर्नी परीक्षणमा फेल हुन्छ र फेरि काट्नुपर्छ।"
    },
    {
      cat: "実技：型枠セパレーターの役割（P.104・P.158）",
      q: "問50：壁のコンクリート型枠を両側から組み立てる際、型枠どうしの「内寸（壁の厚み寸法）」を一定に保つために両パネルの間に突っ張る金具は何ですか。",
      q_id: "Soal 50: Batang besi pengatur jarak apakah yang dipasang di antara dua papan bekisting dinding agar ketebalan dinding cor seragam?",
      q_ne: "प्रश्न ५०: भित्ताको ढलान गर्दा दुईतिरको काठको फर्मालाई बराबर दूरीमा राख्न र भित्ताको मोटाइ कायम गर्न बीचमा हालिने फलामे रड कुन हो?",
      options: [
        { ja: "セパレーター（丸セパ）", id: "Separator (Maru-sepa)", ne: "सेपारेटर (फर्माको मोटाइ नाप्ने रड)" },
        { ja: "パイプサポート", id: "Pipe Support", ne: "पाइप सपोर्ट" },
        { ja: "クランプ", id: "Klem Pipa", ne: "क्ल्याम्प" },
        { ja: "アンカーボルト", id: "Anchor Bolt", ne: "एङ्कर बोल्ट" }
      ],
      answer: 0,
      expJa: "【テキスト P.104・158参照】「セパレーター」はPコン等とセットで壁型枠の間隔を一定に保持し、コンクリート打設時の側圧で壁厚が狂うのを防ぎます[cite: 9]。",
      expId: "Separator (marusepa) berfungsi mempertahankan ketebalan dinding beton agar tidak menciut atau membesar saat dicor.",
      expNe: "सेपारेटरले भित्ताको ढलान गर्दा पर्खालको मोटाइ ठ्याक्कै नाप अनुसार बराबर बनाउँछ।"
    },
    {
      cat: "実技：コンクリート打設の締め固め（バイブレーター）",
      q: "問51：コンクリート打設時に「棒状内部振動機（コンクリートバイブレーター）」を挿入する際の正しい施工判断はどれですか。",
      q_id: "Soal 51: Bagaimanakah cara pengoperasian yang BENAR dari alat pemadat getar (concrete vibrator) saat pengecoran beton?",
      q_ne: "प्रश्न ५१: कंक्रीट ढलान गर्दा मसलालाई भित्रसम्म खाँद्न 'भाइब्रेटर मेसिन' हाल्ने सही तरिका कुन हो?",
      options: [
        { ja: "バイブレーターを垂直に素早く挿入し、振動時間は1箇所あたり10〜15秒程度とし、穴が残らないようゆっくり引き抜く", id: "Tancapkan vibrator tegak lurus secara cepat, getarkan 10-15 detik per titik, lalu tarik keluar perlahan agar tidak berlubang", ne: "भाइब्रेटरलाई ९० डिग्री सिधा छिट्टै छिराउने, १० देखि १५ सेकेन्ड मात्र कम्पन दिने, र प्वाल नबसोस् भनेर बिस्तारै बाहिर निकाल्ने" },
        { ja: "型枠や鉄筋にバイブレーターの先端を激しくぶつけ続けてガタガタ振動させる", id: "Menempelkan dan menabrakkan ujung vibrator keras-keras ke besi dan bekisting", ne: "भाइब्रेटरको टुप्पोलाई रड र फर्मामा बेस्सरी ठोक्काइरहने" },
        { ja: "コンクリートを遠くまで横へ流すために、バイブレーターを斜めに寝かせて引きずる", id: "Menyeret vibrator secara miring untuk mendorong beton basah mengalir ke samping", ne: "कंक्रीटलाई परसम्म बगाउन भाइब्रेटरलाई तेर्सो पारेर घचेट्ने" },
        { ja: "1箇所に10分間挿入したまま作業員が休憩に行く", id: "Membiarkan vibrator bergetar di satu titik selama 10 menit ditinggal istirahat", ne: "एउटै ठाउँमा १० मिनेटसम्म भाइब्रेटर छोडेर चिया खान जाने" }
      ],
      answer: 0,
      expJa: "【コンクリート締固め】バイブレーターは「垂直挿入・10〜15秒・ゆっくり引き抜き」が鉄則です。鉄筋や型枠に直接接触させたり、横流しに使ってはいけません。",
      expId: "Vibrator ditancap vertikal, getarkan 10-15 detik, tarik perlahan. Jangan disentuhkan ke besi/bekisting dan dilarang untuk menyeret adukan.",
      expNe: "भाइब्रेटर सिधा हाल्ने, १०-१५ सेकेन्ड मात्र राख्ने र बिस्तारै निकाल्नुपर्छ। धेरै बेर राखे मसला छुटिएर ढलान कमजोर हुन्छ।"
    },
    {
      cat: "実技：コールドジョイントの防止",
      q: "問52：コンクリートの打ち継ぎ部分において、先に打ち込んだコンクリートが固まり始めた後に次を打ち重ねることで生じる「重大な欠陥（ひび割れ・漏水原因）」は何ですか。",
      q_id: "Soal 52: Cacat struktural retak dan bocor apakah yang timbul jika adukan cor baru dituang di atas adukan cor lama yang sudah mulai mengeras?",
      q_ne: "प्रश्न ५२: पहिले ढालेको कंक्रीट जम्न थालेपछि ढिलो गरी अर्को कंक्रीट खन्याउँदा जोर्नी नजोडिएर पानी चुहिने ठूलो समस्यालाई के भनिन्छ?",
      options: [
        { ja: "コールドジョイント", id: "Cold Joint (Sambungan Dingin / Cacat Pengecoran)", ne: "कोल्ड जोइन्ट (कंक्रीट नजोडिएर बन्ने कमजोर जोर्नी)" },
        { ja: "エキスパンションジョイント", id: "Expansion Joint (Celah Ekspansi Gedung)", ne: "एक्सपान्सन जोइन्ट (भूकम्प प्रतिरोधी जोर्नी)" },
        { ja: "目地（めじ）", id: "Meji (Nat Sambungan Keramik)", ne: "मेजी (टायलको जोर्नी)" },
        { ja: "アンカーボルト", id: "Anchor Bolt", ne: "एङ्कर बोल्ट" }
      ],
      answer: 0,
      expJa: "【打設管理】前の層が硬化を始める前に次の層を打ち重ねなければ、一体化せず「コールドジョイント」となり、耐力低下や雨水漏水の原因になります。",
      expId: "Cold joint adalah cacat sambungan beton akibat keterlambatan pasokan cor, menyebabkan retakan permanen dan kebocoran air.",
      expNe: "कंक्रीट समयमै नखन्याउँदा पहिलेको ढलानसँग नजोडिएर चिरा पर्छ, जसलाई 'कोल्ड जोइन्ट' भनिन्छ।"
    },
    {
      cat: "実技：外壁タイルの剥落防止（オープンタイム判定）",
      q: "問53：外壁タイル工事において、張り付けモルタルを塗布してからタイルを張り終えるまでの時間（オープンタイム）を超過してしまった場合の正しい処置はどれですか。",
      q_id: "Soal 53: Tindakan apakah yang WAJIB dilakukan jika waktu tempel (open time) terlanjur terlewati setelah mortar dioleskan ke dinding?",
      q_ne: "प्रश्न ५३: भित्तामा टायल टाँस्ने मसला लगाएपछि तोकिएको समय (ओपन टाइम) कट्यो भने के गर्नुपर्छ?",
      options: [
        { ja: "そのままタイルを張ると将来必ず剥落するため、乾きかけたモルタルを一度すべて削り落として塗り直す", id: "Kikis bersih seluruh adukan semen yang mulai mengering lalu oleskan adukan baru, karena menempelkannya sekarang pasti membuat keramik jatuh", ne: "सुक्न लागेको मसलामा टायल टाँसे पछि उप्किएर खस्ने भएकोले, त्यो मसला ताछेर फाल्ने र नयाँ मसला दल्ने" },
        { ja: "水をバケツで壁にぶっかけて湿らせ、そのままタイルを叩き込む", id: "Menyiram air ke semen kering lalu langsung menempel keramik", ne: "माथिबाट पानी छर्केर टायल जबर्जस्ती ठोक्ने" },
        { ja: "見えないように上から接着剤を吹き付けてごまかす", id: "Menyemprotkan lem cair dari luar untuk menutup-nutupi", ne: "माथिबाट गम स्प्रे गरेर छल्ने" },
        { ja: "タイルを張らずにそのまま現場を引き渡す", id: "Membiarkan tanpa keramik dan serah terima proyek", ne: "टायल नै नटाँसी काम छोडिदिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.168参照】オープンタイムを過ぎたモルタルは皮張り（ドライアウト）を起こしており接着力がありません。必ず削り落として再塗布します。",
      expId: "Semen yang melewati open time kehilangan daya rekat. Wajib dibongkar/dikikis ulang sebelum keramik dipasang.",
      expNe: "ओपन टाइम कटेपछि मसलाको टाँसिने शक्ति सकिन्छ। त्यसैले त्यो मसला फालेर नयाँ लगाउनै पर्छ।"
    },
    {
      cat: "実技：外壁塗装のケレン作業（P.160）",
      q: "問54：鉄部や外壁の塗り替え塗装工事において、塗料の密着性を高めて早期のサビや剥がれを防ぐために行う「素地調整（ケレン）」の作業内容として正しいものはどれですか。",
      q_id: "Soal 54: Manakah penjelasan yang BENAR mengenai pekerjaan persiapan permukaan 'Keren' (Surface Preparation) sebelum mengecat besi/dinding?",
      q_ne: "प्रश्न ५४: रङ लगाउनुअघि फलाम वा भित्तामा रङ राम्ररी टाँसियोस् भनेर गरिने 'केरेन (सफा गर्ने काम)' को सही तरिका कुन हो?",
      options: [
        { ja: "ワイヤーブラシやディスクサンダー、サンドペーパー等を用いて、古い劣化した塗膜やサビ・汚れを徹底的に除去し、表面に適度な微細傷をつけて塗料の食いつきを良くする", id: "Membersihkan karat, cat lama mengelupas, dan kotoran memakai sikat kawat/amplas, serta memberi goresan mikro agar cat baru melekat sempurna", ne: "तारको ब्रस, खाक्सी वा ग्राइन्डरले पुरानो रङ, खिया र फोहोर पूरै खुइल्याउने र नयाँ रङ समात्ने बनाउने" },
        { ja: "サビや泥がついたまま、上から極厚でペンキを塗りつぶして隠す", id: "Mengecat tebal langsung di atas karat dan lumpur agar tertutup", ne: "खिया र हिलो माथिबाटै बाक्लो रङ पोतेर छोप्ने" },
        { ja: "壁を水浸しにした直後に油性ペンキを塗る", id: "Langsung melabur cat minyak saat dinding basah kuyup", ne: "भित्ता पानीले भिजेकै बेला तेलको रङ लगाउने" },
        { ja: "ケレンとは現場事務所の周辺の草むしりをすることである", id: "Keren berarti mencabuti rumput liar di kantor proyek", ne: "केरेन भन्नाले अफिस वरिपरिको घाँस काट्ने काम हो" }
      ],
      answer: 0,
      expJa: "【テキスト P.160参照】塗装の耐久性の8割は下地処理（ケレン）で決まります。古い塗膜やサビを落とすだけでなく、目荒し（表面の微細な凹凸付け）をして密着性を確保します。",
      expId: "Keren adalah kunci keawetan cat. Hilangkan karat total dan amplas permukaan agar cat baru mengunci kuat.",
      expNe: "रङ उप्किन नदिन खिया र पुरानो रङलाई तारको ब्रसले घोटेर सफा गर्ने काम (केरेन) सबैभन्दा महत्त्वपूर्ण हुन्छ।"
    },
    {
      cat: "実技：屋根板金・雨仕舞の水切り（P.166〜167）",
      q: "問55：屋根と外壁の取り合い部分（境目）から雨水が建物内部へ侵入するのを防ぐため、板金工が取り付ける金属部材は何ですか。",
      q_id: "Soal 55: Komponen seng plat apakah yang dipasang tukang plat seng (bankin) di batas pertemuan antara atap dan dinding untuk mencegah kebocoran air?",
      q_ne: "प्रश्न ५५: छाना र भित्ता जोडिने कुनाबाट पानी भित्र पस्न नदिन जस्तापाताका मिस्त्री (बान्किन) ले लगाउने फलामे पातालाई के भनिन्छ?",
      options: [
        { ja: "水切り板金（雨押え板金）", id: "Mizukiri Bankin / Amabosae Bankin (Plat Flashing Seng Penangkal Air)", ne: "मिजुकिरी बान्किन (पानी छेक्ने जस्ताको पाता / फ्ल्यासिङ सिट)" },
        { ja: "巾木（はばき）", id: "Habaki", ne: "हाबाकी" },
        { ja: "筋交い（すじかい）", id: "Sujikai", ne: "सुजिकाई" },
        { ja: "フォームタイ", id: "Form-tie", ne: "फर्म-टाई" }
      ],
      answer: 0,
      expJa: "【テキスト P.166〜167参照】外壁と屋根の取り合い部には「水切り板金」を加工して取り付け、雨水を壁内に侵入させずスムーズに雨どいへ受け流す雨仕舞を完成させます。",
      expId: "Mizukiri bankin (flashing atap) mengarahkan tetesan air hujan agar langsung meluncur ke talang tanpa meresap celah dinding.",
      expNe: "छाना र भित्ताको कुनाबाट पानी चुहिन नदिन 'मिजुकिरी' जस्ताको पाता हालेर पानीलाई बाहिर बगाइन्छ।"
    },
    {
      cat: "実技：サッシ枠のモルタル充填（P.173）",
      q: "問56：RC造の開口部にアルミサッシ枠を溶接固定した後、サッシ枠の周囲とコンクリート躯体のすき間にモルタルを隙間なく詰める目的は何ですか。",
      q_id: "Soal 56: Apakah tujuan utama menginjeksi adukan semen mortar padat ke celah antara kusen aluminium dan dinding beton (RC)?",
      q_ne: "प्रश्न ५६: ढलानको भित्तामा झ्यालको आल्मुनियम फ्रेम जोडेपछि, फ्रेमको वरिपरिको खाली ठाउँमा सिमेन्ट मसला कोचेर भर्नुको मुख्य उद्देश्य के हो?",
      options: [
        { ja: "雨水や風の浸入（雨漏り）を完全に遮断し、サッシ枠を強固に固定して遮音・防火性能を保つため", id: "Mencegah kebocoran rembesan air hujan/angin, memperkokoh kusen, serta menjaga kekedapan suara dan tahan api", ne: "पानी र हावा भित्र छिर्न (पानी चुहिन) नदिन, फ्रेमलाई बलियो बनाउन र आवाज तथा आगो छेक्नका लागि" },
        { ja: "サッシ枠を重くして泥棒が窓を開けられないようにするため", id: "Membuat jendela sangat berat agar maling tidak bisa membuka", ne: "झ्याल गह्रौं बनाएर चोरले खोल्न नसकोस् भन्नका लागि" },
        { ja: "サッシのガラスを割れやすくするため", id: "Agar kaca jendela mudah pecah", ne: "झ्यालको सिसा फुटाउन सजिलो होस् भनेर" },
        { ja: "モルタルが余ったのでゴミ捨て場代わりに詰めただけ", id: "Hanya sebagai tempat membuang sisa adukan semen", ne: "बाँकी भएको सिमेन्ट फाल्ने ठाउँ नभएर कोचेको" }
      ],
      answer: 0,
      expJa: "【テキスト P.173参照】サッシ周囲の「トロ詰め（モルタル充填）」に隙間があると、暴風雨時に雨水が室内に漏水します。防水モルタルを裏まで密実に充填します。",
      expId: "Injeksi mortar kusen (toro-zume) menutup celah mikro agar air hujan badai tidak bocor merembes ke dalam kamar.",
      expNe: "झ्यालको वरिपरि सिमेन्ट नखाँदेमा हावाहुरी चल्दा पानी कोठाभित्र चुहिन्छ। त्यसैले मसला खाँदेर पानी रोकिन्छ।"
    },
    {
      cat: "実技：内装石膏ボードのビス留め基準（P.170）",
      q: "問57：軽鉄下地（LGS）に石膏ボードをビス留めする際、ボードの割れを防ぎ美しくクロスを仕上げるためのビス打ち判断として正しいものはどれですか。",
      q_id: "Soal 57: Manakah teknik sekrup papan gypsum (gypsum board) yang BENAR agar papan tidak pecah dan wallpaper terpasang rapi?",
      q_ne: "प्रश्न ५७: जिप्सम बोर्डमा स्क्रू कस्दा बोर्ड नफुटोस् र वालपेपर राम्रो देखियोस् भन्नाका लागि स्क्रू कस्ने सही तरिका कुन हो?",
      options: [
        { ja: "ビス頭がボード表面よりわずかに（約0.5〜1mm）沈む程度に締め、紙を破断させず、周辺部では端から10〜15mm以上離して留める", id: "Kepala sekrup tenggelam sedikit (0,5-1 mm) di bawah permukaan kertas tanpa merobek kertas gypsum, dan jarak sekrup dari tepi minimal 10-15 mm", ne: "स्क्रूको टाउको बोर्डको सतहभन्दा थोरै (०.५ देखि १ मिमी) भित्रसम्म कस्ने तर कागज च्यात्न नदिने, र छेउबाट कम्तीमा १०-१५ मिमी छोडेर कस्ने" },
        { ja: "ビス頭が表面から5mm以上飛び出た状態で作業を終える", id: "Membiarkan kepala sekrup menonjol 5 mm keluar dari papan", ne: "स्क्रूको टाउको ५ मिमी बाहिरै निस्किएको छोड्ने" },
        { ja: "力任せに打ち込みすぎて、石膏ボードの芯を完全に粉砕して穴を開ける", id: "Menyekrup terlalu dalam sampai melubangi tembus papan gypsum", ne: "धेरै बल गरेर कस्दा बोर्ड नै फुटाएर ठूलो प्वाल पार्ने" },
        { ja: "ビスは使わずにセロハンテープだけでボードを壁に貼り付ける", id: "Tidak memakai sekrup dan hanya menempelkan papan pakai isolasi bening", ne: "स्क्रू नै नलगाई सामान्य टेपले मात्र बोर्ड टाँस्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.170参照】石膏ボードビスは、頭がわずかに沈む「ツライチ〜微沈み」が鉄則です。飛び出ているとクロスが凸凹になり、深すぎると保持力を失います。",
      expId: "Sekrup gypsum harus rata tenggelam tipis (0,5-1 mm) agar bisa didempul plamir rapi dan daya ikatnya kuat.",
      expNe: "स्क्रूको टाउको थोरै मात्र भित्र दबिनुपर्छ। बाहिर निस्के वालपेपर फुल्छ र धेरै भित्र गए बोर्ड फुट्छ।"
    },
    {
      cat: "実技：吹付けウレタンの膜厚管理（P.174）",
      q: "問58：硬質ウレタンフォームの吹付け断熱工事において、設計仕様通りの断熱性能を確保するために職長が行う検査器具は何ですか。",
      q_id: "Soal 58: Alat ukur apakah yang digunakan pengawas untuk memastikan ketebalan semprotan insulasi foam urethane sesuai standar desain?",
      q_ne: "प्रश्न ५८: कोठा न्यानो बनाउन भित्तामा छर्किने 'फोम इन्सुलेसन (स्प्रे फोम)' तोकिए अनुसार बाक्लो भयो कि नाई भनी मोटाइ नाप्ने औजार कुन हो?",
      options: [
        { ja: "ウレタン厚さ測定器（測定針・ピンゲージ）", id: "Jarum Pengukur Ketebalan Urethane (Thickness Pin Gauge)", ne: "फोमको मोटाइ नाप्ने सुइरो मिटर (पिन गेज)" },
        { ja: "体重計", id: "Timbangan berat badan", ne: "तौल नाप्ने मेसिन" },
        { ja: "巻き尺（メジャー）で外から眺めるだけ", id: "Hanya melihat dari jauh menggunakan meteran tarik", ne: "टाढाबाट फित्ताले हेर्ने मात्र" },
        { ja: "指で押して柔らかければ合格とする感覚検査", id: "Hanya memencet dengan jari tanpa alat ukur", ne: "हातले थिचेर हेर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.174参照】ウレタン吹付け後は、目分量ではなく「厚さ測定針（ピンゲージ）」を規定ピッチで刺し込み、厚さが基準を満たしているか検査します。",
      expId: "Ketebalan semprotan urethane wajib diukur menggunakan pin jarum ukur khusus di berbagai titik sudut ruangan.",
      expNe: "फोम छर्केपछि पातलो-बाक्लो थाहा पाउन सियो जस्तो 'मोटाइ नाप्ने मिटर' भित्र घोपेर नापिन्छ।"
    },
    {
      cat: "実技：玉掛けワイヤーロープの廃棄基準",
      q: "問59：クレーンの玉掛け作業に使用するワイヤーロープにおいて、法令上「使用禁止（廃棄）」となる状態はどれですか。",
      q_id: "Soal 59: Manakah kondisi kawat seling (wire rope) yang WAJIB DIBUANG dan DILARANG dipakai untuk mengangkat beban?",
      q_ne: "प्रश्न ५९: क्रेनमा सामान झुन्ड्याउने फलामे स्लिङ तार (वायर रोप) कस्तो अवस्थामा पुगेपछि 'तुरुन्तै फाल्नुपर्छ (प्रयोग गर्न पाइन्न)'?",
      options: [
        { ja: "1よりの間で素線の10%以上が切断しているもの、直径の減少が公称径の7%を超えるもの、著しいキンクやサビがあるもの", id: "10% kawat pilin putus dalam 1 strand, diameter menyusut > 7%, atau kawat tertekuk mati (kink) dan berkarat parah", ne: "एउटा लसको १०% भन्दा बढी तार चुँडिएको, मोटाइ ७% भन्दा धेरै घटेको, गाँठो परेको वा धेरै खिया लागेको तार" },
        { ja: "表面に油が塗ってあり光沢があるもの", id: "Permukaan kawat berpelumas dan mengkilap normal", ne: "तारमा तेल लगाएको र चम्किलो भएको" },
        { ja: "両端に安全フックが正しく圧着されているもの", id: "Kedua ujung kawat memiliki kait hook pengaman resmi", ne: "दुवै छेउमा सुरक्षा हुक राम्ररी जडान भएको" },
        { ja: "製造メーカーのタグが新品のまま付いているもの", id: "Kawat baru yang masih memiliki label pabrik", ne: "कम्पनीको नयाँ ट्याग झुन्डिएको" }
      ],
      answer: 0,
      expJa: "【クレーン等安全規則第219条】素線切れ10%以上、直径減少7%超、キンク（折損）、著しい腐食があるワイヤーは吊り上げ中に破断するため即廃棄です。",
      expId: "Kawat seling wajib diafkir jika kawat putus >= 10%, mengecil >= 7%, atau pernah tertekuk patah (kinking).",
      expNe: "१०% तार चुँडिएको, पातलो भएको वा गाँठो परेर दोब्रिएको स्लिङ तारले सामान उचाल्दा चुँडिएर मान्छे मार्छ, त्यसैले तुरुन्त फाल्नुपर्छ।"
    },
    {
      cat: "実技：高所作業での安全帯フックの掛け方",
      q: "問60：足場上や鉄骨上で作業する際、墜落制止用器具（フルハーネス）のランヤードのフックを掛ける位置として正しいものはどれですか。",
      q_id: "Soal 60: Bagaimanakah posisi yang BENAR saat mencantolkan kait hook lanyard harness saat bekerja di ketinggian?",
      q_ne: "प्रश्न ६०: अग्लो खट वा फलामको फ्रेममा काम गर्दा सेफ्टी हार्नेसको हुक कुन ठाउँमा अड्काउनु सही हो?",
      options: [
        { ja: "万一の落下時の落下距離を短くするため、自分の腰より高い位置にある堅固な手すりや親綱に掛ける", id: "Cantolkan ke tali induk atau pipa kokoh di posisi LEBIH TINGGI dari pinggang untuk meminimalkan jarak jatuh bebas", ne: "खस्दा कम दूरी मात्र तल झरोस् भन्नाका लागि आफ्नो कम्मरभन्दा माथिको बलियो पाइप वा डोरीमा हुक अड्काउने" },
        { ja: "足元のつま先より下の細い番線針金に引っ掛ける", id: "Mencantolkan ke kawat tipis di bawah telapak kaki", ne: "खुट्टा मुनिको पातलो तारमा अड्काउने" },
        { ja: "外れると怖いので、自分のズボンのポケットの中にフックを突っ込んでおく", id: "Memasukkan hook ke dalam saku celana sendiri", ne: "आफ्नै प्यान्टको खल्तीभित्र हुक हालेर राख्ने" },
        { ja: "足場の養生ネットの網目の糸に引っ掛ける", id: "Menyangkutkan hook ke jaring terpal kasa pembungkus perancah", ne: "वरिपरि घेरेको जालीको धागोमा हुक अड्काउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.189参照】フックを腰より低い位置に掛けると自由落下距離が長くなり、体に加わる衝撃荷重が激増して危険です。必ず「腰より高い位置」に掛けます[cite: 19]。",
      expId: "Kait hook lanyard WAJIB dicantolkan di atas ketinggian pinggang agar jarak jatuh bebas pendek dan tubuh tidak cedera.",
      expNe: "हुक सधैं कम्मरभन्दा माथिको बलियो ठाउँमा अड्काउनुपर्छ। खुट्टा मुनि अड्काएमा तल खस्दा शरीरमा ठूलो झट्का लाग्छ।"
    },
    {
      cat: "実技：脚立の安全な作業姿勢（P.184）",
      q: "問61：内装工事などで脚立を使用する際、転倒・墜落を防ぐための安全な作業姿勢として正しいものはどれですか。",
      q_id: "Soal 61: Bagaimanakah posisi kerja yang BENAR saat menggunakan tangga lipat (kyatatsu) agar tidak terguling?",
      q_ne: "प्रश्न ६१: कोठाभित्र काम गर्दा भर्याङ (क्याताचु) लडेर चोट नलागोस् भन्नाका लागि सुरक्षित तरिका कुन हो?",
      options: [
        { ja: "天板から2段目以下の踏ざんに両足で立ち、体を開き止め金具の方向に向け、脚立に身体を安定させて作業する", id: "Berdiri di anak tangga kedua dari atas (atau lebih rendah), hadap badan ke depan tangga, dan jaga kestabilan tubuh", ne: "टुप्पोबाट दोस्रो वा त्योभन्दा मुनिको खुड्किलामा दुवै खुट्टाले उभिने र शरीरको सन्तुलन कायम राख्ने" },
        { ja: "天板の上に背伸びして片足立ちで作業する", id: "Berdiri jinjit satu kaki di atas papan teratas", ne: "टुप्पोको फलेकमाथि एउटा मात्र खुट्टाले उभिएर काम गर्ने" },
        { ja: "脚立の左右の枠に片足ずつまたがって前後に揺らしながら進む", id: "Mengangkangi tangga lipat seperti kuda lalu menggesernya sambil dinaiki", ne: "भर्याङलाई घोडा जस्तो चढेर हल्लाउँदै अगाडि बढाउने" },
        { ja: "脚立を閉じたまま壁に立てかけて、すり足で一番上まで登る", id: "Menyandarkan tangga lipat dalam kondisi tertutup ke dinding lalu memanjatnya", ne: "क्याताचु नखोली भित्तामा अडेस लगाएर टुप्पोसम्म चढ्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.184参照】天板に乗る作業、天板を跨ぐ作業は禁止です[cite: 14]。天板から2段目以下のステップに立ち、身体を脚立に預けて安定した状態で作業します[cite: 14]。",
      expId: "Dilarang berdiri di puncak tangga lipat. Berdirilah di anak tangga kedua dari atas atau lebih bawah dengan badan seimbang.",
      expNe: "क्याताचुको टुप्पोमा उभिन पाइँदैन। कम्तीमा दोस्रो खुड्किला मुनि उभिएर सन्तुलन मिलाई काम गर्नुपर्छ।"
    },
    {
      cat: "実技：ディスクグラインダーの砥石交換資格",
      q: "問62：ディスクグラインダーの削れた砥石を取り外し、新しい砥石を取り付けて試運転を行う際、作業員に必要な資格要件は何ですか。",
      q_id: "Soal 62: Syarat kualifikasi apakah yang WAJIB dimiliki pekerja sebelum diizinkan mengganti batu gerinda dan melakukan uji putar?",
      q_ne: "प्रश्न ६२: ग्राइन्डरको पुरानो ढुङ्गा फेरेर नयाँ ढुङ्गा हाल्न र मेसिन टेस्ट गर्न कामदारसँग कुन कानुनी योग्यता हुनुपर्छ?",
      options: [
        { ja: "といしの取替え等の業務に係る特別教育の修了", id: "Pelatihan Khusus Penggantian Batu Gerinda (Toishi no Torikae Tokubetsu Kyouiku)", ne: "ग्राइन्डरको ढुङ्गा फेर्ने विशेष तालिम (तोइशी तोकुबेचु क्योइकु) पास गरेको हुनुपर्ने" },
        { ja: "普通自動車第二種免許", id: "SIM Mobil Penumpang", ne: "ट्याक्सी चालक लाइसेन्स" },
        { ja: "フォークリフト運転技能講習修了", id: "Lisensi Forklift", ne: "फोर्कलिफ्ट तालिम" },
        { ja: "資格は不要で誰でも自由に替えてよい", id: "Bebas tanpa sertifikat apa pun", ne: "कुनै तालिम चाहिँदैन जसले फेरे पनि हुन्छ" }
      ],
      answer: 0,
      expJa: "【安衛則第36条第1号】研削といしの取替えや試運転の業務は、といし破壊による死亡事故を防ぐため「自由研削といし特別教育」修了者でなければ行えません。",
      expId: "Mengganti batu gerinda wajib memiliki sertifikat 'Toishi Tokubetsu Kyouiku'. Tanpa sertifikat, dilarang keras menyentuh bongkar pasang batu gerinda.",
      expNe: "ग्राइन्डरको ढुङ्गा फेर्ने काम जोखिमपूर्ण हुने भएकाले 'तोइशी सम्बन्धी विशेष कानुनी तालिम' लिएको व्यक्तिले मात्र फेर्न पाउँछ।"
    },
    {
      cat: "実技：建設機械と誘導員の配置（P.182）",
      q: "問63：ダンプトラックやバックホウが頻繁に行き交う搬入路において、作業員や一般車両との激突・接触事故を防ぐための最も適切な対策はどれですか。",
      q_id: "Soal 63: Tindakan paling tepat apakah yang wajib dilakukan untuk mencegah tabrakan antara dump truck/alat berat dengan pejalan kaki di jalur masuk proyek?",
      q_ne: "प्रश्न ६३: टिपर र ब्याकहो गाडी ओहोरदोहोर गर्ने बाटोमा हिँड्ने मान्छे किचिनबाट रोक्न गरिने सबैभन्दा सही उपाय कुन हो?",
      options: [
        { ja: "専任の交通誘導員を配置し、歩行者通路と車両運行ルートを明確に分離（バリケード等で区分）する", id: "Tempatkan petugas pengatur lalu lintas resmi, dan pisahkan jalur pejalan kaki dari jalur truk menggunakan pembatas fisik (barikade)", ne: "ट्राफिक गार्ड खटाउने, र गाडी हिँड्ने बाटो र मान्छे हिँड्ने बाटोलाई बार लगाएर पूरै छुट्टाछुट्टै बनाउने" },
        { ja: "トラックの運転手に「クラクションを鳴らし続けながら猛スピードで走れ」と指示する", id: "Menyuruh sopir truk membunyikan klakson terus-menerus sambil ngebut", ne: "हर्न बजाउँदै चर्को गतिमा कुदाउन ड्राइभरलाई भन्ने" },
        { ja: "通路が暗くても電気代がもったいないので照明をつけない", id: "Membiarkan jalur gelap tanpa lampu demi hemat listrik", ne: "बत्तीको पैसा बचाउन बाटो अँध्यारो नै राख्ने" },
        { ja: "重機の旋回範囲のすぐ後ろに作業員の休憩用ベンチを置く", id: "Menaruh bangku istirahat pekerja tepat di belakang radius putar alat berat", ne: "एक्साभेटर घुम्ने ठाउँको ठ्याक्कै पछाडि कामदार बस्ने बेन्च राख्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.182参照】重機・車両災害を防ぐ鉄則は「人車の分離（歩車分離）」と「専任誘導員の配置」です[cite: 12]。車両走行エリアへ歩行者を立ち入らせない動線を作ります[cite: 12]。",
      expId: "Pisahkan jalur manusia dan jalur truk dengan pagar barikade, serta tempatkan petugas誘導員 untuk mengatur lalu lintas.",
      expNe: "दुर्घटनाबाट बच्न गाडी हिँड्ने बाटो र मान्छे हिँड्ने बाटोलाई रेलिङले अलग्याउने र बाटोमा गार्ड राख्नुपर्छ।"
    },
    {
      cat: "実技：新規入場者の安全保護具点検（P.189）",
      q: "問64：新しく入場してきた作業員の服装・保護具を点検する際、現場入場を「禁止（やり直し）」と判定すべき服装はどれですか。",
      q_id: "Soal 64: Manakah penampilan/pakaian pekerja baru yang HARUS DITOLAK masuk ke lokasi proyek konstruksi?",
      q_ne: "प्रश्न ६४: नयाँ कामदार कार्यस्थलमा आउँदा उसको पोसाक जाँच गर्दा, कुन अवस्था देखिएमा भित्र पस्न 'निषेध (अयोग्य)' गर्नुपर्छ?",
      options: [
        { ja: "安全靴ではなくスニーカーを履き、ヘルメットのアゴ紐を外して袖口や裾をまくり上げている服装", id: "Memakai sepatu kets kancing biasa (bukan safety shoes), tali dagu helm lepas, dan ujung lengan baju digulung terbuka", ne: "सेफ्टी जुत्ताको सट्टा सामान्य कपडाको जुत्ता लगाएको, हेल्मेटको तुना नबाँधेको र बाहुला बटारेर खुल्ला राखेको" },
        { ja: "JIS規格適合のつま先芯入り安全靴を履き、長袖・長ズボンの作業服の裾を整えている服装", id: "Memakai sepatu safety bersol baja standar JIS, serta baju kerja lengan panjang dan celana panjang rapi", ne: "स्टिलको टो भएको सेफ्टी जुत्ता लगाएको र पूरै लामो बाहुला भएको पोसाक लगाएको" },
        { ja: "頭のサイズにフィットしたヘルメットのアゴ紐を確実に締めている服装", id: "Memakai helm pas di kepala dengan tali dagu terkunci kuat", ne: "साइज मिलेको हेल्मेट र चिउँडोको तुना राम्ररी कसेको" },
        { ja: "ショックアブソーバ付きフルハーネスを正しく体に密着させて装着している服装", id: "Mengenakan full body harness bershock-absorber yang pas di badan", ne: "शक-एब्जर्बर भएको सेफ्टी हार्नेस शरीरमा टपक्क मिल्ने गरी लगाएको" }
      ],
      answer: 0,
      expJa: "【テキスト P.189参照】スニーカーでの入場は釘踏み抜きや足指圧壊の危険があり禁止です[cite: 19]。また、肌の露出やアゴ紐なしは即座に是正させます。",
      expId: "Dilarang masuk jika memakai sepatu kets biasa tanpa pelindung baja, atau tidak mengunci tali helm.",
      expNe: "सामान्य जुत्ता लगाउने वा हेल्मेटको तुना नकस्ने मान्छेलाई कार्यस्थलमा छिर्नै दिनुहुन्न।"
    },
    {
      cat: "実技：災害発生時の初動対応（緊急連絡）",
      q: "問65：自分の持ち場で作業員が足場から墜落し、意識朦朧で倒れているのを発見しました。職長がその場ですぐに取るべき「初動措置」の順序として最も適切なものはどれですか。",
      q_id: "Soal 65: Pekerja jatuh dari perancah dan terkapar lemas. Manakah urutan tindakan tanggap darurat pertama yang PALING BENAR dilakukan Shokucho?",
      q_ne: "प्रश्न ६५: खटबाट लडेर साथी बेहोस अवस्थामा भुइँमा लडिरहेको देख्नुभयो। शोकुचोले तुरुन्तै गर्नुपर्ने प्राथमिक कार्यहरूको सही क्रम कुन हो?",
      options: [
        { ja: "二次災害の危険がないか周囲を確認 ➔ 大声で周囲に応援を要請（119番救急車の手配と元請所長への緊急連絡） ➔ 負傷者の呼吸・意識を確認し無理に動かさず応急手当を行う", id: "Cek bahaya susulan di sekitar -> Teriak minta tolong (panggil ambulans 119 & lapor kantor proyek) -> Cek napas/kesadaran dan jangan asal memindahkan tubuh korban", ne: "वरिपरि थप खतरा छ कि हेर्ने -> ठूलो स्वरले गुहार माग्ने (एम्बुलेन्स ११९ र मुख्य हाकिमलाई खबर गर्ने) -> घाइतेको होस र सास जाँच्ने र जथाभावी नहल्लाई प्राथमिक उपचार गर्ने" },
        { ja: "責任を追及されるのを恐れて、怪我人を現場の外の道路に引きずり出して放置する", id: "Menyeret korban ke jalan raya di luar proyek lalu meninggalkannya kabur", ne: "डरले घाइतेलाई सडक बाहिर घिसारेर फाल्ने र भाग्ने" },
        { ja: "スマートフォンで写真を撮ってSNSに投稿し、誰かが助けに来るのを座って待つ", id: "Foto korban lalu upload ke media sosial sambil menunggu orang datang", ne: "फोटो खिचेर फेसबुकमा हाल्दै कोही आउला भनेर हेरिरहने" },
        { ja: "元請にバレないように、怪我人を無理やり立たせてそのまま作業を続けさせる", id: "Memaksa korban bangun berdiri dan lanjut bekerja agar tidak ketahuan pengawas", ne: "हाकिमले थाहा पाउला भन्दै घाइतेलाई जबर्जस्ती उठाएर काममा जोत्न खोज्ने" }
      ],
      answer: 0,
      expJa: "【緊急事故対応】事故発生時は「二次災害防止（落下面の安全確認）➔ 応援要請（119番・現場本部通報）➔ 人命救助（頸椎損傷の恐れがあるため無理に動かさず気道確保）」が鉄則です。",
      expId: "Prosedur darurat: Amankan lokasi dari bahaya susulan -> Hubungi ambulans 119 & kantor proyek -> Beri P3K tanpa memindahkan posisi tulang leher korban.",
      expNe: "पहिला वरिपरिको खतरा हेर्ने, ११९ मा एम्बुलेन्स र हाकिमलाई खबर गर्ने, र घाँटीको हड्डी भाँचिएको हुनसक्ने भएकाले जथाभावी नहल्लाई प्राथमिक उपचार गर्ने।"
    }
  ]
};
