const CURRENT_QUIZ_DATA = {
  title: "Day 16：<ruby>良<rt>よ</rt></ruby>い<ruby>仕事<rt>しごと</rt></ruby>の<ruby>条件<rt>じょうけん</rt></ruby>・<ruby>段取<rt>だんど</rt></ruby>りと<ruby>作業管理<rt>さぎょうかんり</rt></ruby>（テキスト P.24〜31）",
  key: "score_gakka3_16",
  passScore: 70,
  questions: [
    {
      cat: "第2章 仕事の構成要素（P.24）",
      q: "<ruby>建設現場<rt>けんせつげんば</rt></ruby>における「<ruby>仕事<rt>しごと</rt></ruby>を<ruby>構成<rt>こうせい</rt></ruby>する4つの<ruby>要素<rt>ようそ</rt></ruby>」として、**<ruby>正<rt>ただ</rt></ruby>しい<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせ**はどれですか。",
      q_id: "Manakah kombinasi yang BENAR mengenai '4 Elemen Penyusun Pekerjaan Konstruksi' menurut teks manajemen proyek?",
      q_ne: "पाठ्यपुस्तक अनुसार 'निर्माण कार्यका ४ आधारभूत तत्त्वहरू' को सही जोडी कुन हो?",
      options: [
        { ja: "作業員・設備/材料等・作業方法/作業手順・現場情報", id: "Pekerja, Peralatan/Material, Metode/SOP Kerja, Informasi Proyek", ne: "कामदार, उपकरण/सामग्री, काम गर्ने विधि/प्रक्रिया, कार्यस्थलको सूचना" },
        { ja: "元請・下請・孫請・発注者", id: "Kontraktor utama, Subkontraktor, Pihak ketiga, Klien", ne: "मुख्य ठेकेदार, उप-ठेकेदार, पेटी ठेकेदार, घरधनी" },
        { ja: "材料費・労務費・外注費・経費", id: "Biaya bahan, Upah kerja, Biaya subkon, Biaya umum", ne: "सामान खर्च, ज्याला, बाहिरी खर्च, प्रशासनिक खर्च" },
        { ja: "朝礼・昼礼・夕礼・終礼", id: "Briefing pagi, Rapat siang, Briefing sore, Evaluasi malam", ne: "बिहानी बैठक, दिउँसोको बैठक, साँझको बैठक, अन्तिम समीक्षा" }
      ],
      answer: 0,
      expJa: "【テキスト P.24参照】建設の仕事は「作業員」「設備・材料等」「作業方法・作業手順」「現場情報」の4要素で構成されます。職長はこの4要素を組み合わせて最良の結果を得る役割を担います。",
      expId: "Pekerjaan konstruksi tersusun atas 4 elemen: Pekerja, Alat/Bahan, Metode/SOP, dan Informasi Lapangan.",
      expNe: "निर्माण कार्य ४ तत्त्वहरू मिलेर बन्दछ: कामदार, उपकरण र सामग्री, काम गर्ने विधि र प्रक्रिया, तथा कार्यस्थलको सूचना।"
    },
    {
      cat: "第2章 良い仕事の条件（P.25〜26）",
      q: "現場管理における「**ムリ（無理）・ムダ（無駄）・ムラ**」の定義として、**正しいもの**はどれですか。",
      q_id: "Manakah definisi yang BENAR mengenai 'Muri (Beban lebih), Muda (Pemborosan), dan Mura (Ketidakteraturan)' dalam manajemen proyek?",
      q_ne: "कार्यस्थल व्यवस्थापनमा 'मुरी (अति भार), मुदा (खेर जानु), र मुरा (अस्थिर हुनु)' को सही परिभाषा कुन हो?",
      options: [
        { ja: "ムリ＝能力以上の負荷、ムダ＝効果のない無駄、ムラ＝ムリとムダが混在し作業や品質が不安定な状態", id: "Muri = Beban melebihi kapasitas, Muda = Tidak ada manfaat/hasil, Mura = Beban dan pemborosan bercampur hingga mutu tidak stabil", ne: "मुरी = क्षमताभन्दा बढी भार हुनु, मुदा = कुनै फाइदा नहुने गरी खेर जानु, मुरा = मुरी र मुदा दुवै भएर काम र गुणस्तर अस्थिर हुनु" },
        { ja: "ムリ＝予定より早く終わること、ムダ＝材料が余ること、ムラ＝全員が同じ作業をすること", id: "Muri = Selesai lebih awal, Muda = Bahan tersisa, Mura = Semua mengerjakan tugas sama", ne: "मुरी = छिटो सकिनु, मुदा = सामान बच्नु, मुरा = सबैले एउटै काम गर्नु" },
        { ja: "ムリ＝残業をすること、ムダ＝休憩を取ること、ムラ＝天気が変わること", id: "Muri = Lembur, Muda = Istirahat, Mura = Cuaca berubah", ne: "मुरी = ओभरटाइम गर्नु, मुदा = आराम गर्नु, मुरा = मौसम परिवर्तन हुनु" },
        { ja: "ムリ・ムダ・ムラはすべて同じ意味であり区別する必要はない", id: "Semuanya bermakna sama persis tanpa perlu dibedakan", ne: "यी सबैको अर्थ एउटै हो, कुनै भिन्नता छैन" }
      ],
      answer: 0,
      expJa: "【テキスト P.25〜26参照】能力より負荷が大きすぎると「ムリ」が生じ、逆に負荷が小さすぎると手待ちなどの「ムダ」が発生します。両者が混在して品質がばらつく状態を「ムラ」と呼びます。",
      expId: "Muri adalah beban melebihi kemampuan. Muda adalah tindakan sia-sia. Mura adalah variasi/ketidakkonsistenan yang membuat mutu tidak stabil.",
      expNe: "क्षमताभन्दा बढी भार हुनु 'मुरी' हो, काम नहुनु वा खेर जानु 'मुदा' हो, र यी दुई मिसिएर नतिजा अस्थिर हुनु 'मुरा' हो।"
    },
    {
      cat: "第2章 失敗用語：手待ち（P.26〜27）",
      q: "次の作業に取りかかれず作業員の手がストップしてしまう「**手待ち（てまち）**」の発生原因として、**誤っているもの**はどれですか。",
      q_id: "Manakah yang BUKAN merupakan penyebab terjadinya 'Temachi' (Waktu tunggu menganggur bagi para pekerja)?",
      q_ne: "कामदारहरूले अर्को काम सुरु गर्न नपाई हात बाँधेर पर्खनुपर्ने 'तेमाची (हात खाली बस्ने अवस्था)' को कारण नभएको कुन हो?",
      options: [
        { ja: "材料や器具が作業の流れに合わせて適切な位置に事前配置されている", id: "Material dan perkakas sudah disiapkan dan ditempatkan sesuai alur kerja terlebih dahulu", ne: "सामान र औजारहरू कामको गति अनुसार पहिले नै ठिक्क ठाउँमा मिलाएर राखिएको हुनु" },
        { ja: "必要な材料や資機材の納入が遅れ、現場に届いていない", id: "Pengiriman material dan alat terlambat dan belum tiba di lokasi", ne: "आवश्यक सामान र उपकरण आइपुग्न ढिलो भई कार्यस्थलमा नपुग्नु" },
        { ja: "前の工程の作業が遅れており、自分たちの作業エリアに入れない", id: "Pekerjaan tahap sebelumnya terlambat sehingga area belum bisa dimasuki", ne: "अघिल्लो चरणको काम ढिलो भएर आफ्नो काम गर्ने ठाउँ खाली नहुनु" },
        { ja: "クレーンなどの共通機械を他職種と共有しており、順番待ちになっている", id: "Menunggu giliran pemakaian alat berat/crane yang dipakai bersama subkontraktor lain", ne: "क्रेन जस्ता साझा मेसिन अरूले चलाइरहेकाले आफ्नो पालो पर्खनुपर्ने हुनु" }
      ],
      answer: 0,
      expJa: "【テキスト P.26〜27参照】材料・資機材の不足、工程管理ミス、前工程の遅れ、クレーン等共通機械の使用待ち、職種間の作業能力差などが「手待ち」の主な原因となります。",
      expId: "Menyiapkan alat dan bahan di tempat yang tepat justru mencegah terjadinya temachi (waktu tunggu menganggur).",
      expNe: "सामान र औजारहरू काम सुरु हुनुअघि नै मिलाएर राख्नुले तेमाची हुनबाट बचाउँछ, यो तेमाचीको कारण होइन।"
    },
    {
      cat: "第2章 失敗用語：手戻り・手違い（P.27〜28）",
      q: "現場で使われる「**手戻り（てもどり）**」「**手直し（てなおし）**」「**手違い（てちがい）**」の説明として、**正しいもの**はどれですか。",
      q_id: "Manakah penjelasan yang BENAR mengenai istilah kegagalan proyek: 'Temodori' (Pengerjaan ulang urutan), 'Tenaoshi' (Perbaikan cacat), dan 'Techigai' (Kesalahan prosedur/pesanan)?",
      q_ne: "कार्यस्थलमा प्रयोग हुने 'तेमोदोरी', 'तेनाओशी', र 'तेचिगाई' को सही व्याख्या कुन हो?",
      options: [
        { ja: "手戻り＝抜けた作業まで戻ってやり直すこと、手直し＝不良を修正・再施工すること、手違い＝手順や手配を間違えること", id: "Temodori = Mengulang langkah yang terlewat, Tenaoshi = Memperbaiki cacat hasil kerja, Techigai = Salah prosedur atau salah pemesanan", ne: "तेमोदोरी = छुटेको काम गर्न पछाडि फर्केर दोहोर्याउनु, तेनाओशी = बिग्रेको काम सच्याएर फेरि बनाउनु, तेचिगाई = प्रक्रिया वा सामान अर्डर गर्दा गल्ती हुनु" },
        { ja: "手戻り＝予定より早く終わること、手直し＝作業員を褒めること、手違い＝図面を綺麗に清書すること", id: "Temodori = Selesai lebih cepat, Tenaoshi = Memuji pekerja, Techigai = Menggambar ulang denah", ne: "तेमोदोरी = छिटो काम सक्नु, तेनाओशी = कामदारको प्रशंसा गर्नु, तेचिगाई = सफा नक्सा कोर्नु" },
        { ja: "手戻りも手直しもコストや工期には全く影響を与えない小さな問題である", id: "Temodori dan tenaoshi adalah masalah sepele yang tidak berdampak pada biaya maupun jadwal", ne: "तेमोदोरी र तेनाओशीले बजेट वा समय तालिकामा कुनै असर नगर्ने सामान्य कुरा हुन्" },
        { ja: "手違いとは職長が元請監督に作業日報を提出することである", id: "Techigai adalah penyerahan laporan kerja harian mandor kepada kontraktor utama", ne: "तेचिगाई भन्नाले शोकुचोले इन्जिनियरलाई दैनिक रिपोर्ट बुझाउनु हो" }
      ],
      answer: 0,
      expJa: "【テキスト P.27〜28参照】手順を飛ばして後から戻る「手戻り」、施工不良を作り直す「手直し」、手配や手順をミスする「手違い」は、いずれも工程遅れとコスト増大（利益減少）を招きます。",
      expId: "Temodori (mundur mengulang langkah), Tenaoshi (memperbaiki cacat), dan Techigai (salah pesan/atur) membuang biaya dan waktu.",
      expNe: "काम छुटेर फेरि गर्नु 'तेमोदोरी', बिग्रेको सच्याउनु 'तेनाओशी', र प्रक्रिया वा अर्डरमा गल्ती हुनु 'तेचिगाई' हो। यिनीहरूले खर्च बढाउँछन्।"
    },
    {
      cat: "第2章 段取り（P.28）",
      q: "日本の建設業の格言である「**段取り八分、仕事二分（だんどりはちぶ、しごとになぶ）**」の意味として、最も適切なものはどれですか。",
      q_id: "Apa arti dari pepatah konstruksi Jepang: 'Dandori hachibu, shigoto nibu' (Persiapan 80%, pengerjaan 20%)?",
      q_ne: "जापानी निर्माण क्षेत्रको प्रसिद्ध भनाइ 'दान्दोरी हाचिबु, शिगोतो निबु (तयारी ८०%, वास्तविक काम २०%)' को अर्थ के हो?",
      options: [
        { ja: "仕事に取りかかる前の準備（段取り）が完全にできていれば、仕事の80%は成功した（終わった）ようなものだ", id: "Jika persiapan (dandori) sebelum mulai kerja sudah matang 100%, maka 80% pekerjaan sudah dianggap berhasil/selesai", ne: "काम सुरु गर्नुअघिको सम्पूर्ण तयारी (दान्दोरी) पूरा भएको छ भने, कामको ८०% सफलता मिलिसके बराबर हुन्छ" },
        { ja: "準備には2分しかかけず、残りの8分は休まず作業し続けること", id: "Hanya butuh 2 menit persiapan lalu bekerja 8 menit tanpa henti", ne: "तयारीमा २ मिनेट मात्र लगाउने र बाँकी समय लगातार काम गरिरहने" },
        { ja: "段取りは若手作業員の仕事であり、職長は関与しなくてよいこと", id: "Persiapan adalah tugas pekerja pemula saja dan mandor tidak perlu ikut campur", ne: "तयारी गर्ने काम जुनियरको मात्र हो र शोकुचोले हेर्नु पर्दैन" },
        { ja: "段取りをしっかりやっても実際の作業結果には影響しないこと", id: "Persiapan yang matang tidak memiliki pengaruh apa pun terhadap hasil kerja akhir", ne: "जतिसुकै राम्रो तयारी गरे पनि वास्तविक कामको नतिजामा कुनै फरक पर्दैन" }
      ],
      answer: 0,
      expJa: "【テキスト P.28参照】「段取り8分、仕事2分」とは、着工前の準備（安全計画・資機材手配・手順書・人員配置など）がいかに重要かを示した言葉です。",
      expId: "Artinya persiapan yang matang memegang peranan 80% keberhasilan kualitas dan keselamatan kerja di proyek.",
      expNe: "काम सुरु हुनुअघिको योजना र तयारीले नै कामको ८०% सफलता निर्धारण गर्छ भन्ने यसको गहिरो अर्थ हो।"
    },
    {
      cat: "第2章 送り出し教育（P.28〜29）",
      q: "「**送り出し教育**」に関する説明として、**最も適切なもの**はどれですか。",
      q_id: "Manakah pernyataan yang PALING TEPAT mengenai 'Okuridashi Kyouiku' (Pelatihan Pembekalan Sebelum Masuk Proyek)?",
      q_ne: "'ओकुरीदाशी क्योउइकु (नयाँ कार्यस्थलमा पठाउनुअघि दिइने पूर्व-अभिमुखीकरण तालिम)' सम्बन्धी कुन उपयुक्त छ?",
      options: [
        { ja: "作業現場に初めて入る新規入場者に対し、各事業者が事前に現場のルール・安全衛生計画・危険箇所等を教育すること", id: "Edukasi oleh masing-masing subkon kepada pekerja yang baru pertama kali masuk ke proyek mengenai aturan, K3, dan area bahaya", ne: "नयाँ कार्यस्थलमा पहिलो पटक जान लागेका नयाँ कामदारहरूलाई कम्पनीले पहिल्यै त्यहाँका नियम, सुरक्षा र जोखिमबारे दिने तालिम" },
        { ja: "現場を退職して帰国する作業員に対して行う送別会とお礼のこと", id: "Acara perpisahan dan ucapan terima kasih kepada pekerja yang berhenti dan pulang ke negaranya", ne: "काम छोडेर स्वदेश फर्कन लागेका कामदारलाई गरिने बिदाइ कार्यक्रम" },
        { ja: "工事が完成した後に元請会社が施主に対して建物の使い方を説明すること", id: "Penjelasan cara pemakaian gedung dari kontraktor utama kepada pemilik setelah proyek selesai", ne: "भवन निर्माण सकिएपछि मुख्य ठेकेदारले घरधनीलाई बुझाउने प्रक्रिया" },
        { ja: "ベテラン作業員だけに受けさせ、新人は除外する特別教育のこと", id: "Pelatihan khusus hanya untuk pekerja veteran dan pekerja baru dilarang ikut", ne: "पुराना कामदारलाई मात्र दिइने र नयाँलाई सहभागी नगराइने तालिम" }
      ],
      answer: 0,
      expJa: "【テキスト P.28〜29参照】送り出し教育は、現場に初めて入る職長や作業員（新規入場者）に対して事前に各事業者が行う安全衛生教育です。現場配置図、退避方法、現場独自ルールなどを教えます。",
      expId: "Okuridashi Kyouiku adalah pembekalan awal yang wajib diberikan subkontraktor kepada stafnya sebelum tiba di lokasi proyek baru.",
      expNe: "कार्यस्थलमा पहिलो पटक प्रवेश गर्ने कामदारलाई सुरक्षा नियम, नक्सा, आपतकालीन बाटो सिकाउन कम्पनीले पठाउनुअघि दिने तालिम हो।"
    },
    {
      cat: "第2章 外国人労働者への配慮（P.29）",
      q: "「送り出し教育」や「新規入場時」において、**外国人労働者に対して行う効果的な工夫**としてテキストに挙げられているものはどれですか。",
      q_id: "Manakah upaya efektif yang disebutkan dalam buku teks untuk memfasilitasi pekerja asing saat pengenalan proyek (Okuridashi Kyouiku)?",
      q_ne: "नयाँ कार्यस्थलको अभिमुखीकरणमा विदेशी कामदारहरूका लागि प्रभावकारी हुने उपायको रूपमा पाठ्यपुस्तकमा उल्लेख गरिएको कुरा कुन हो?",
      options: [
        { ja: "新規入場者向けの資料を母国語で用意し、一週間程度ヘルメットに目印のシールを貼る", id: "Menyiapkan materi orientasi dalam bahasa ibu dan menempelkan stiker penanda di helm selama sekitar 1 minggu", ne: "अभिमुखीकरणका कागजात मातृभाषामा तयार पार्ने र करिब १ हप्तासम्म हेल्मेटमा नयाँ कामदारको चिन्ह भएको स्टिकर टाँस्ने" },
        { ja: "日本語が完璧に話せるようになるまで一切現場に入場させない", id: "Melarang masuk ke proyek sebelum bahasa Jepangnya lancar sempurna tanpa cacat", ne: "जापानी भाषा पूर्ण रूपमा नबोलेसम्म कार्यस्थलमा पस्नै नदिने" },
        { ja: "専門用語の解説は省き、怒鳴り声と身振り手振りだけで覚えさせる", id: "Menghilangkan penjelasan teknis dan membimbingnya dengan teriakan dan gerakan tubuh saja", ne: "नियमहरू नसिकाई केवल कराएर वा इसाराले मात्र काम गर्न लगाउने" },
        { ja: "他の日本人作業員とは一切話させず、孤立させて作業させる", id: "Mengisolasi pekerja asing dan melarang berbicara dengan pekerja Jepang lainnya", ne: "जापानी कामदारहरूसँग बोल्न नदिई एक्लै काममा लगाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.29参照】外国人労働者には母国語の資料を用意して理解を促します。また新規入場者であることが周囲に一目で分かるよう、1週間程度ヘルメットに目印シールを貼る工夫が推奨されます。",
      expId: "Buku panduan menyarankan modul berbahasa ibu serta stiker penanda pekerja baru di helm selama 1 minggu agar dipantau bersama.",
      expNe: "विदेशी कामदारले राम्रोसँग बुझून् भनेर मातृभाषामा सामग्री दिने र सबैले चिनून् भनेर १ हप्ता हेल्मेटमा स्टिकर टाँस्नु राम्रो उपाय हो।"
    },
    {
      cat: "第2章 作業手順書の確認（P.30）",
      q: "毎日の「作業手順書」を作業員に指示する際、**職長として心がけるべき最も大切なこと**はどれですか。",
      q_id: "Apa hal PALING PENTING yang harus diperhatikan oleh Shokucho saat menginstruksikan SOP kerja harian kepada para pekerjanya?",
      q_ne: "दैनिक कार्यविधि अनुसार निर्देशन दिँदा शोकुचोले ध्यान दिनुपर्ने सबैभन्दा महत्त्वपूर्ण कुरा के हो?",
      options: [
        { ja: "単に順番を指示するだけでなく、「なぜその手順を守る必要があるのか」という理由も含めて理解させる", id: "Bukan hanya mendikte urutan kerja, tetapi juga memahamkan 'mengapa prosedur tersebut wajib dipatuhi'", ne: "कामको क्रम मात्र अह्राउने होइन, 'यो प्रक्रिया पालना गर्नु किन अनिवार्य छ' भन्ने कारण समेत बुझाउने" },
        { ja: "手順書の内容を読ませず、とにかく早く動くことだけを命令する", id: "Tidak membiarkan mereka membaca SOP dan hanya memerintahkan bergerak secepat mungkin", ne: "कागज हेर्न नदिई जतिसक्दो छिटो हात चलाउन मात्र दबाब दिने" },
        { ja: "職長自身の頭の中にだけ手順をとどめ、作業員には一切教えない", id: "Menyimpan prosedur hanya di kepala mandor dan tidak memberitahukannya kepada pekerja", ne: "प्रक्रिया आफ्नो दिमागमा मात्र राख्ने र कामदारलाई केही पनि नबताउने" },
        { ja: "危険な作業の手順であっても注意事項は省略して伝える", id: "Menghilangkan poin-poin bahaya agar instruksi terdengar singkat dan mudah", ne: "जोखिमयुक्त काम भए पनि होसियार हुनुपर्ने कुराहरू नभनी छोड्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.30参照】作業手順書にはムリ・ムラ・ムダを無くし安全・正確・迅速に作業するポイントが記されています。なぜ守る必要があるのかの理由を理解させることが重要です。",
      expId: "Penting bagi mandor untuk menjelaskan alasan di balik SOP kerja agar pekerja paham risiko bahayanya.",
      expNe: "कार्यविधिका नियमहरू किन पालना गर्नुपर्छ भन्ने कारण कामदारले बुझेमा मात्र उनीहरूले सुरक्षित र सही काम गर्दछन्।"
    },
    {
      cat: "第2章 材料・器具の配置（P.30）",
      q: "作業開始前の「材料・器具・工具の確認と管理」において、**職長が確認すべきポイント**として最も適切なものはどれですか。",
      q_id: "Manakah poin yang PALING TEPAT diperiksa oleh Shokucho mengenai material dan perkakas sebelum pekerjaan dimulai?",
      q_ne: "काम सुरु हुनुअघि सामग्री र औजारहरूको व्यवस्थापन गर्दा शोकुचोले जाँच गर्नुपर्ने सबैभन्दा उपयुक्त कुरा कुन हो?",
      options: [
        { ja: "必要なものが揃っているか確認し、作業の流れ（動線）に合わせて効率よく配置されているか確認する", id: "Memastikan semua barang lengkap dan ditempatkan secara efisien sesuai alur pergerakan kerja", ne: "आवश्यक सबै सामग्री पुगेको छ कि छैन जाँच्ने र कामको बहाव (मुभमेन्ट) अनुसार सजिलो हुने गरी राखिएको छ कि छैन हेर्ने" },
        { ja: "作業通路の真ん中に材料を山積みに配置して通行を遮断する", id: "Menumpuk material di tengah jalur jalan utama hingga menghalangi orang lewat", ne: "हिँड्ने बाटोको ठीक बीचमा सामानको थुप्रो लगाएर बाटो छेक्ने" },
        { ja: "工具の数が足りない場合は、他社の工具を勝手に黙って持ってくるよう指示する", id: "Menyuruh pekerja mengambil diam-diam alat milik subkon lain jika alat sendiri kurang", ne: "औजार पुगेन भने अरू कम्पनीको औजार नसोधी चोरेर ल्याउन अह्राउने" },
        { ja: "材料の配置は作業効率に関係しないため、適当な場所に放置しておく", id: "Membiarkan material tergeletak sembarangan karena penempatan dianggap tidak mempengaruhi efisiensi", ne: "सामान जता राखे पनि केही फरक पर्दैन भन्दै जहाँ पायो त्यहीँ अलपत्र छोड्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.30参照】作業開始前に材料・器具が揃っているか確認し、作業の流れに合わせて配置します。適切でない場合は開始前に指示して配置を整えさせます。",
      expId: "Material dan alat harus dipastikan lengkap dan ditata rapi mengikuti alur kerja sebelum jam kerja dimulai.",
      expNe: "काम सुरु हुनुअघि नै सबै सामान पुगे-नपुगेको हेरेर कामको गति सहज हुने ठाउँमा सजाएर राख्नुपर्छ।"
    },
    {
      cat: "第2章 作業員の適正配置（P.31）",
      q: "<ruby>作業員<rt>さぎょういん</rt></ruby>の「<ruby>適正配置<rt>てきせいはいち</rt></ruby>」を<ruby>決<rt>き</rt></ruby>める<ruby>際<rt>さい</rt></ruby>、**<ruby>職長<rt>しょくちょう</rt></ruby>の<ruby>配慮<rt>はいりょ</rt></ruby>として<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なもの**はどれですか。",
      q_id: "Manakah pertimbangan yang PALING TEPAT bagi seorang Shokucho dalam menentukan penempatan kerja personel (Tekisei Haichi)?",
      q_ne: "कामदारहरूलाई उपयुक्त कामको जिम्मा (तेकिसेइ हाइची) दिँदा शोकुचोले ध्यान दिनुपर्ने सबैभन्दा सही कुरा कुन हो?",
      options: [
        { ja: "技能や資格だけでなく、健康状態やモチベーション、高齢者の体力低下にも配慮して面談等を通じて決める", id: "Menilai keterampilan, lisensi, kondisi fisik, motivasi, serta penurunan stamina pekerja lansia lewat dialog tatap muka", ne: "सीप र लाइसेन्स मात्र नहेरी, स्वास्थ्य अवस्था, काम गर्ने जाँगर, र पाका कामदारको शारीरिक क्षमता समेत बुझेर काम बाँड्ने" },
        { ja: "作業員の健康状態や持病には一切配慮せず、経験年数だけで機械的に作業を割り振る", id: "Mengabaikan riwayat penyakit dan membagi tugas secara kaku hanya berdasarkan tahun pengalaman", ne: "स्वास्थ्य अवस्थालाई पूरै बेवास्ता गरी केवल पुरानो अनुभवको आधारमा मात्र जबरजस्ती काम अह्राउने" },
        { ja: "高齢作業員には豊富な知識があるため、どんなに重い危険作業でも無理をさせて配置する", id: "Memaksa pekerja lansia melakukan tugas fisik terberat karena dianggap memiliki pengalaman banyak", ne: "पाका कामदारलाई धेरै अनुभव छ भन्दै जतिसुकै गह्रौं र खतरनाक काममा पनि जबर्जस्ती खटाउने" },
        { ja: "作業員一人ひとりのキャリアアップや能力向上は無視して配置を決める", id: "Mengabaikan perkembangan karier pekerja dan membaginya sesuka hati", ne: "कामदारको व्यक्तिगत सीप विकास र भविष्यको वृद्धिलाई बेवास्ता गरी काम तोक्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.31参照】適正配置には知識・技能・資格だけでなく、健康状態やモチベーションの把握、高齢者の体力・注意力低下への配慮（無理な配置による事故防止）が不可欠です。",
      expId: "Penempatan kerja yang tepat harus mempertimbangkan lisensi, kebugaran fisik, motivasi, serta keterbatasan fisik pekerja lanjut usia.",
      expNe: "सही काम बाँडफाँड गर्दा योग्यता बाहेक स्वास्थ्य, मानसिक स्फूर्ति र उमेर ढल्केका कामदारको शारीरिक सीमालाई ध्यान दिनुपर्छ।"
    }
  ]
};
