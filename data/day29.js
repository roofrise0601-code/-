const CURRENT_QUIZ_DATA = {
  title: "Day 29：<ruby>本番実戦模擬試験<rt>ほんばんじっせんもぎしけん</rt></ruby> <ruby>第1弾<rt>だいいちだん</rt></ruby>（20<ruby>問<rt>もん</rt></ruby>・<ruby>職長職務<rt>しょくちょうしょくむ</rt></ruby>と<ruby>現場管理編<rt>げんばかんりへん</rt></ruby>）",
  key: "score_gakka5_29",
  passScore: 70,
  questions: [
    {
      cat: "第1章 職長の位置づけ（P.1）",
      q: "<ruby>労働安全衛生法<rt>ろうどうあんぜんえいせいほう</rt></ruby>において、工事現場における作業員の指導監督者として位置づけられている「<ruby>職長<rt>しょくちょう</rt></ruby>」の役割として**最も適切なもの**はどれですか。",
      q_id: "Manakah peran yang PALING TEPAT bagi 'Shokucho' (Mandor) yang diposisikan sebagai pengawas langsung pekerja di proyek menurut UU K3 Jepang?",
      q_ne: "जापानको औद्योगिक सुरक्षा तथा स्वास्थ्य ऐन अनुसार कार्यस्थलमा कामदारहरूको प्रत्यक्ष सुपरभाइजर मानिने 'शोकुचो' को भूमिका कुन हो?",
      options: [
        { ja: "作業員を直接指揮して毎日の作業を安全・工程・品質通りに進める現場の直接指導監督者", id: "Pengawas langsung di lapangan yang memimpin pekerja harian agar berjalan aman, tepat jadwal, dan berkualitas", ne: "कामदारहरूलाई प्रत्यक्ष निर्देशन दिँदै दैनिक काम सुरक्षित, समयमै र गुणस्तरीय बनाउने कार्यस्थलको मुख्य अगुवा" },
        { ja: "現場には出ず、本社で契約書類の作成や資材の価格交渉だけを行う責任者", id: "Penanggung jawab di kantor pusat yang tidak ke lapangan dan hanya mengurus kontrak/harga bahan", ne: "कार्यस्थलमा नआई हेड अफिसमा बसेर सम्झौता र सामानको मोलमोलाइ मात्र गर्ने म्यानेजर" },
        { ja: "施主（発注者）の代理人として、工事の全工程を検査する設計監理者", id: "Pengawas perwakilan klien pemilik proyek yang bertugas memeriksa keseluruhan tahapan", ne: "घरधनी वा क्लाइन्टको प्रतिनिधिको रूपमा काम निरीक्षण गर्ने सुपरभाइजर" },
        { ja: "安全管理や指示は一切行わず、自分一人の単一作業だけに専念する見習い作業員", id: "Pekerja magang yang hanya fokus pada tugas sendiri tanpa mengurus keselamatan atau orang lain", ne: "अरूको सुरक्षा वा निर्देशनको मतलब नराखी आफ्नो काम मात्र गर्ने नयाँ कामदार" }
      ],
      answer: 0,
      expJa: "【テキスト P.1参照】職長とは、労働安全衛生法において作業員を直接指導・監督するキーパーソンです。小規模現場では「親方」や「棟梁」と呼ばれることもあります。",
      expId: "Shokucho adalah pemimpin dan pengawas kerja langsung bagi para pekerja di lapangan konstruksi sesuai UU K3 Jepang.",
      expNe: "'शोकुचो' भन्नाले कार्यस्थलमा कामदारहरूलाई प्रत्यक्ष निर्देशन दिने र दैनिक काम सुरक्षित रूपमा अघि बढाउने प्रमुख अगुवा हो।"
    },
    {
      cat: "第1章 職長の最優先事項（P.2）",
      q: "職長が日々の現場作業を指揮・管理する上で、**何よりも最優先にしなければならないこと**は何ですか。",
      q_id: "Hal apakah yang WAJIB menjadi 'Prioritas Paling Utama' bagi seorang Shokucho dalam memimpin pekerjaan harian?",
      q_ne: "दैनिक कामको नेतृत्व र व्यवस्थापन गर्दा शोकुचोले 'सबैभन्दा पहिलो प्राथमिकता' दिनुपर्ने कुरा के हो?",
      options: [
        { ja: "作業員の命と健康を守るための「安全確保」と「安全な作業環境の維持」", id: "Memastikan keselamatan dan menjaga lingkungan kerja yang aman demi melindungi nyawa serta kesehatan pekerja", ne: "कामदारहरूको जीवन र स्वास्थ्य जोगाउन 'सुरक्षा सुनिश्चितता' र 'सुरक्षित कार्य वातावरण कायम राख्ने'" },
        { ja: "多少の危険作業があっても予定工期より早く終わらせること", id: "Menyelesaikan proyek lebih cepat dari jadwal meskipun ada sedikit bahaya", ne: "थोरै खतरा भए पनि तोकिएको म्यादभन्दा छिटो काम सक्ने" },
        { ja: "会社の利益を最優先にして保護具の購入費用を削ること", id: "Mengutamakan laba perusahaan dengan memangkas anggaran pembelian APD", ne: "कम्पनीको नाफा हेरेर सुरक्षा सामग्री किन्ने खर्च घटाउने" },
        { ja: "他職種の職長や元請監督との対話を一切拒否すること", id: "Menolak berkomunikasi dengan mandor subkon lain atau pengawas utama", ne: "अरू कम्पनीका नाइके र इन्जिनियरसँग कुराकानी बन्द गर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.2参照】作業を進める上で最も重要なことは「作業員の安全確保」です。作業環境の改善・維持は職長の最大の使命です。",
      expId: "Hal terpenting bagi Shokucho adalah memastikan keselamatan pekerja di atas segalanya serta memelihara lingkungan yang aman.",
      expNe: "काम गर्दा सबैभन्दा महत्त्वपूर्ण कुरा कामदारहरूको सुरक्षा सुनिश्चित गर्नु र सुरक्षित वातावरण बनाउनु हो।"
    },
    {
      cat: "第1章 設計品質と施工品質（P.3〜4）",
      q: "「**設計品質**」と「**施工品質**」の違いとして、正しい説明はどれですか。",
      q_id: "Manakah penjelasan yang BENAR mengenai perbedaan antara 'Kualitas Desain' dan 'Kualitas Konstruksi'?",
      q_ne: "'डिजाइन गुणस्तर' र 'निर्माण गुणस्तर' बीचको भिन्नता सम्बन्धी कुन भनाइ सही छ?",
      options: [
        { ja: "設計品質は設計図書で定めた「ねらいの品質」であり、施工品質は現場施工で実現する「出来ばえの品質（出来形）」である", id: "Kualitas desain adalah target rencana pada gambar (nerai no hinshitsu), sedangkan kualitas konstruksi adalah hasil fisik nyata saat pengerjaan", ne: "डिजाइन गुणस्तर नक्सामा तोकिएको 'लक्ष्य गुणस्तर' हो, भने निर्माण गुणस्तर कार्यस्थलमा काम गरेर प्राप्त हुने 'वास्तविक नतिजाको गुणस्तर' हो" },
        { ja: "施工品質とは設計者がオフィスで描く図面の精度のことである", id: "Kualitas konstruksi adalah ketepatan gambar arsitek di kantor", ne: "निर्माण गुणस्तर इन्जिनियरले अफिसमा कोर्ने नक्साको शुद्धता हो" },
        { ja: "ねらいの品質が達成できなくても、工期に間に合えば手直しは不要である", id: "Jika kualitas target tidak tercapai, tidak perlu perbaikan asalkan jadwal tepat", ne: "लक्ष्य नपुगे पनि म्यादभित्र काम सकिएमा फेरि बनाउनु पर्दैन" },
        { ja: "両者は同じ意味であるため、現場で使い分ける必要はない", id: "Keduanya bermakna sama persis sehingga tidak perlu dibedakan", ne: "दुवैको अर्थ एउटै भएकाले फरक छुट्याउनु पर्दैन" }
      ],
      answer: 0,
      expJa: "【テキスト P.3〜4参照】設計品質は設計図書で定められる目標値（ねらいの品質）であり、施工品質は現場で実際に出来上がった品質（出来形）です。両者を一致させることが職長の役割です。",
      expId: "Kualitas desain adalah target rencana, dan kualitas konstruksi adalah hasil fisik nyata. Keduanya harus cocok agar tidak terjadi pemborosan.",
      expNe: "डिजाइन गुणस्तर नक्साको लक्ष्य हो भने निर्माण गुणस्तर वास्तविक कामको नतिजा हो। यी दुई मिलाउनु नै मुख्य काम हो।"
    },
    {
      cat: "第1章 OJT教育（P.4〜5）",
      q: "現場で後輩や新入作業員を育成する「**OJT（On the Job Training）**」の基本姿勢として、最も適切なものはどれですか。",
      q_id: "Manakah sikap dasar yang PALING TEPAT dalam mendidik staf junior melalui 'OJT (On the Job Training)' di proyek?",
      q_ne: "कार्यस्थलमा नयाँ कामदारलाई 'OJT (काम गर्दै सिक्ने तालिम)' मार्फत सिकाउँदा लिनुपर्ने सबैभन्दा उपयुक्त तरिका कुन हो?",
      options: [
        { ja: "実際の作業を通じて手本を示し、作業のやり方だけでなく「なぜその方法で行うのかの理由」も含めて指導する", id: "Memberikan teladan lewat kerja nyata, serta menjelaskan bukan hanya gerakan tangan melainkan 'alasan di balik metode tersebut'", ne: "वास्तविक काम गर्दै आफैंले गरेर देखाउने र कामको तरिका मात्र नभई 'किन यो तरिकाले गर्नुपर्छ भन्ने कारण' समेत प्रष्ट बुझाउने" },
        { ja: "何も教えずに「見て盗んで10年かけて覚えろ」と放置する", id: "Tidak mengajari apa pun dan membiarkannya 'belajar sendiri melihat diam-diam selama 10 tahun'", ne: "केही नसिकाई 'हेरेर १० वर्ष लगाएर आफैं सिक' भन्दै एक्लै छोड्ने" },
        { ja: "危険な作業手順であっても、失敗を経験させるためにあえて止めずにやらせる", id: "Sengaja membiarkan prosedur berbahaya tanpa menghentikannya agar mengalami kecelakaan", ne: "खतरनाक काम भए पनि आफैं ठोकिएर सिक्छ भन्दै रोक्दै नरोक्ने" },
        { ja: "一度教えてできなかった作業員には暴言を吐いて作業から外す", id: "Membentak kasar dan menyingkirkan pekerja yang belum bisa dalam sekali ajar", ne: "एकपटक सिकाउँदा नजानेको कामदारलाई गाली गरेर कामबाट निकाल्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.4〜5, 53〜54参照】OJTでは実際の作業を通じた具体的な指導が基本です。「なぜそうするのか」の理由やコツを分かりやすく言葉で伝えることが技能定着に繋がります。",
      expId: "OJT yang baik adalah memberi contoh langsung dan menjelaskan alasan serta tipsnya secara jelas, bukan membiarkan bawahan kebingungan.",
      expNe: "OJT मा आफैं गरेर देखाउने र 'किन यसो गर्नुपर्छ' भन्ने कारण खुलाएर बुझाउँदा कामदारले छिटो र सुरक्षित सीप सिक्छन्।"
    },
    {
      cat: "第1章 コーチングの基本（P.15〜16）",
      q: "作業員の主体性や考える力を引き出す「**コーチング**」の基本姿勢として、正しいものはどれですか。",
      q_id: "Manakah sikap dasar yang BENAR dalam 'Coaching' untuk membangkitkan inisiatif dan kemandirian berpikir anggota tim?",
      q_ne: "कामदारको आफ्नै सोच्ने र निर्णय गर्ने क्षमता विकास गर्न 'कोचिङ' गर्दा लिनुपर्ने सही दृष्टिकोण कुन हो?",
      options: [
        { ja: "「相手自身の中に答えがある」という前提に立ち、傾聴と質問を通じて相手に解決策を考えさせる", id: "Berdiri pada prinsip bahwa 'jawaban ada di dalam diri orang tersebut', mendengarkan dengan tulus, dan memicu pemikiran lewat pertanyaan", ne: "'उत्तर ऊ आफैंसँग छ' भन्ने मान्यता राख्दै, उसको कुरा ध्यान दिएर सुन्ने र प्रश्न सोधेर समाधान सोच्न लगाउने" },
        { ja: "職長自身のやり方だけが常に絶対正義であると決めつけ、一方的な指示・命令だけを押し付ける", id: "Menganggap cara mandor selalu mutlak benar dan memaksakan perintah sepihak", ne: "'मेरो तरिका मात्र सधैं सही हो' भन्दै एकतर्फी आदेश मात्र थोपर्ने" },
        { ja: "作業員が質問してきたら「自分で勝手にやれ」と突き放す", id: "Menolak menjawab saat pekerja bertanya dan menyuruhnya bertindak sesuka hati", ne: "कामदारले केही सोध्दा 'आफैं जे मन लाग्छ गर' भनेर पन्छाउने" },
        { ja: "仕事の成果だけに注目し、作業員の成長や安全への配慮は無視する", id: "Hanya fokus pada target output dan mengabaikan pertumbuhan pribadi serta keselamatan pekerja", ne: "कामको नतिजा मात्र हेर्ने तर कामदारको व्यक्तिगत विकास र सुरक्षाको कुनै वास्ता नगर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.15〜16参照】コーチングは一方的な押し付けではなく、傾聴と問いかけによって相手の自発的な気づきと成長を支援するコミュニケーション手法です。",
      expId: "Prinsip coaching meyakini potensi bawahan, membimbing lewat mendengarkan dan bertanya agar pekerja mandiri.",
      expNe: "'कोचिङ' भनेको आदेश थोपर्ने होइन, कामदार आफैंले समस्याको समाधान पहिल्याउन सकोस् भनेर प्रश्न सोधी सक्षम बनाउने कला हो।"
    },
    {
      cat: "第2章 仕事の4要素（P.24）",
      q: "現場管理において職長が有機的に組み合わせるべき「**建設の仕事を構成する4つの要素**」の組み合わせとして正しいものはどれですか。",
      q_id: "Manakah kombinasi yang BENAR mengenai '4 Elemen Penyusun Pekerjaan Konstruksi' yang wajib dikelola oleh Shokucho?",
      q_ne: "कार्यस्थल व्यवस्थापनमा शोकुचोले तालमेल मिलाउनुपर्ने 'निर्माण कार्यका ४ आधारभूत तत्त्वहरू' को सही जोडी कुन हो?",
      options: [
        { ja: "作業員・設備/材料等・作業方法/作業手順・現場情報", id: "Pekerja, Peralatan/Material, Metode/SOP Kerja, Informasi Lapangan", ne: "कामदार, उपकरण/सामग्री, काम गर्ने विधि/प्रक्रिया, कार्यस्थलको सूचना" },
        { ja: "元請会社・下請会社・設計事務所・市役所", id: "Kontraktor Utama, Subkontraktor, Konsultan Arsitek, Balai Kota", ne: "मुख्य ठेकेदार, उप-ठेकेदार, कन्सल्टेन्ट, नगरपालिका" },
        { ja: "材料費・労務費・外注費・経費", id: "Biaya Bahan, Biaya Tenaga Kerja, Biaya Subkon, Biaya Operasional", ne: "सामग्री खर्च, ज्याला खर्च, बाहिरी ठेक्का, अन्य खर्च" },
        { ja: "朝礼・昼礼・夕礼・終礼", id: "Briefing Pagi, Rapat Siang, Briefing Sore, Evaluasi Malam", ne: "बिहानी बैठक, दिउँसोको बैठक, साँझको बैठक, अन्तिम समीक्षा" }
      ],
      answer: 0,
      expJa: "【テキスト P.24参照】建設の仕事は「作業員」「設備・材料等」「作業方法・作業手順」「現場情報」の4つの要素から成り立っています。",
      expId: "4 elemen pembentuk pekerjaan proyek konstruksi: Pekerja, Alat/Bahan, Metode/SOP, dan Informasi Lapangan.",
      expNe: "निर्माण कार्य ४ तत्त्वहरू मिलेर बन्दछ: कामदार, उपकरण र सामग्री, काम गर्ने विधि र प्रक्रिया, तथा कार्यस्थलको सूचना।"
    },
    {
      cat: "第2章 ムリ・ムダ・ムラ（P.25〜26）",
      q: "現場で発生する「**ムリ・ムダ・ムラ**」の定義として、正しい組み合わせはどれですか。",
      q_id: "Manakah definisi yang BENAR mengenai 'Muri (Beban Lebih), Muda (Pemborosan), dan Mura (Ketidakteraturan)'?",
      q_ne: "कार्यस्थलमा हुने 'मुरी (अति भार), मुदा (खेर जानु), र मुरा (अस्थिर हुनु)' को सही परिभाषा कुन हो?",
      options: [
        { ja: "ムリ＝能力以上の過大な負荷、ムダ＝付加価値のない無駄な作業・手待ち、ムラ＝作業や品質のばらつき・不安定さ", id: "Muri = Beban melebihi kapasitas, Muda = Tindakan sia-sia tanpa nilai tambah/waktu tunggu, Mura = Variasi/ketidakteraturan mutu dan alur kerja", ne: "मुरी = क्षमताभन्दा बढी कामको भार हुनु, मुदा = कुनै फाइदा नहुने काम वा हात खाली बस्नु, मुरा = काम र गुणस्तर तलमाथि अस्थिर हुनु" },
        { ja: "ムリ＝予定より早く終わること、ムダ＝材料が余ること、ムラ＝全員が同じ作業をすること", id: "Muri = Selesai cepat, Muda = Bahan sisa, Mura = Semua mengerjakan tugas sama", ne: "मुरी = छिटो सकिनु, मुदा = सामान बच्नु, मुरा = सबैले एउटै काम गर्नु" },
        { ja: "ムリ＝安全保護具を着用すること、ムダ＝休憩を取ること、ムラ＝天候が晴れること", id: "Muri = Pakai APD, Muda = Istirahat, Mura = Cuaca cerah", ne: "मुरी = सुरक्षा सामग्री लगाउनु, मुदा = आराम गर्नु, मुरा = घाम लाग्नु" },
        { ja: "ムリ・ムダ・ムラはすべて同じ意味であり区別する必要はない", id: "Semuanya bermakna sama persis tanpa perlu dibedakan", ne: "यी सबैको अर्थ एउटै हो, कुनै भिन्नता छैन" }
      ],
      answer: 0,
      expJa: "【テキスト P.25〜26参照】能力より負荷が大きすぎると「ムリ」、負荷が小さく手が止まると「ムダ」、これらが混在して品質やスピードが乱れる状態が「ムラ」です。",
      expId: "Muri adalah beban melebihi kemampuan. Muda adalah pemborosan/menganggur. Mura adalah variasi hasil kerja yang tidak konsisten.",
      expNe: "क्षमताभन्दा बढी भार 'मुरी', खेर जानु वा खाली बस्नु 'मुदा', र दुवै मिसिएर काम बिग्रनु 'मुरा' हो।"
    },
    {
      cat: "第2章 手待ち・手戻り・手違い（P.26〜28）",
      q: "現場で大きな工程遅延とコスト増を招く失敗用語のうち、**「抜けた作業まで後から戻ってやり直すこと」**を何と呼びますか。",
      q_id: "Di antara istilah kegagalan proyek, apa sebutan untuk 'mengulang kembali tahapan kerja yang terlewat dari awal'?",
      q_ne: "कामको बीचमा प्रक्रिया छुटेर 'पछाडि फर्केर फेरि काम दोहोर्याउनुपर्ने अवस्था' लाई के भनिन्छ?",
      options: [
        { ja: "手戻り（てもどり）", id: "Temodori (Pengerjaan Ulang Mundur)", ne: "तेमोदोरी (पछाडि फर्केर दोहोर्याउनु)" },
        { ja: "手待ち（てまち）", id: "Temachi (Waktu Tunggu Menganggur)", ne: "तेमाची (हात बाँधेर पर्खनु)" },
        { ja: "手配（てはい）", id: "Tehai (Pengaturan / Persiapan)", ne: "तेहाई (तयारी/व्यवस्था)" },
        { ja: "手形（てがた）", id: "Tegata (Surat Promes / Cek)", ne: "तेगाता (चेक/कागज)" }
      ],
      answer: 0,
      expJa: "【テキスト P.27〜28参照】手順を飛ばしたり取り合いのミスで前の工程に戻ってやり直すことを「手戻り」と呼びます。不良を作り直す「手直し」とともに大きなロスになります。",
      expId: "Temodori adalah pengerjaan ulang akibat ada langkah yang terlewat atau salah urutan sehingga harus mundur.",
      expNe: "कुनै काम छुट्न गई फेरि अघिल्लो चरणमा फर्केर दोहोर्याउनुलाई 'तेमोदोरी' भनिन्छ, जसले ठूलो खर्च र समय खेर फाल्छ।"
    },
    {
      cat: "第2章 送り出し教育（P.28〜29）",
      q: "現場に初めて入る新規入場作業員に対して事前に行う「**送り出し教育**」において、外国人労働者への適切な配慮として正しいものはどれですか。",
      q_id: "Manakah perlakuan yang BENAR dalam 'Okuridashi Kyouiku' (Edukasi Pembekalan Awal) bagi pekerja asing?",
      q_ne: "नयाँ कार्यस्थलमा जानुअघि दिइने पूर्व-अभिमुखीकरण तालिममा विदेशी कामदारहरूका लागि गरिने सही व्यवस्था कुन हो?",
      options: [
        { ja: "新規入場者向けの安全資料を母国語で用意し、1週間程度ヘルメットに目印シールを貼って周囲が配慮できるようにする", id: "Menyiapkan panduan keselamatan dalam bahasa ibu dan menempelkan stiker penanda di helm selama 1 minggu agar dipantau tim", ne: "अभिमुखीकरणका सुरक्षा कागजात मातृभाषामा तयार पार्ने र करिब १ हप्तासम्म हेल्मेटमा नयाँ कामदारको स्टिकर टाँसी सबैले ख्याल गर्ने वातावरण बनाउने" },
        { ja: "日本語が完璧に話せるようになるまで現場への入場を全面的に禁止する", id: "Melarang total masuk ke proyek sampai bahasa Jepangnya lancar sempurna", ne: "जापानी भाषा पूर्ण रूपमा नबोलेसम्म कार्यस्थलमा पस्नै नदिने" },
        { ja: "危険箇所の説明を省き、怒鳴り声と身振りだけで覚えさせる", id: "Menghilangkan penjelasan bahaya dan hanya membentak dengan isyarat tangan", ne: "जोखिमको व्याख्या नगरी कराएर वा इसाराले मात्र काम गराउने" },
        { ja: "他の作業員と会話させず、休憩時間も完全に孤立させる", id: "Melarang berinteraksi dengan orang lain dan mengisolasinya saat istirahat", ne: "अरू कामदारसँग बोल्न नदिई विश्रामको बेला पनि एक्लै पार्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.29参照】外国人労働者には母国語の資料で安全ルールを理解させ、新規入場者と一目で分かるようヘルメットに目印シールを貼る配慮が事故防止に極めて有効です。",
      expId: "Gunakan modul berbahasa ibu dan pasang stiker penanda di helm selama 1 minggu agar pekerja baru terpantau aman oleh seluruh tim.",
      expNe: "मातृभाषामा सुरक्षा नियम बुझाउने र सुरुको १ हप्ता हेल्मेटमा स्टिकर टाँसेर सबैले सहयोग गर्ने वातावरण बनाउनुपर्छ।"
    },
    {
      cat: "第2章 QCDSEの相互関係（P.31〜33）",
      q: "現場管理の基本要素「**QCDSE**」のうち、無理な突貫工事を行って工期（D）を短縮しようとした際に、**最も悪化しやすい要素の組み合わせ**はどれですか。",
      q_id: "Dalam QCDSE, elemen manakah yang PALING RAWAN RUSAK jika proyek dipaksa lembur maraton (tokkan kouji) demi mengejar jadwal (D)?",
      q_ne: "QCDSE मा म्याद (D) सक्न हतार-हतार काम (तोक्कान कोउजी) गर्दा सबैभन्दा बढी बिग्रने तत्त्वहरूको जोडी कुन हो?",
      options: [
        { ja: "品質（Quality）の低下・原価（Cost）の高騰・安全（Safety）の著しい悪化", id: "Penurunan Kualitas (Quality), pembengkakan Biaya (Cost), dan anjloknya Keselamatan (Safety)", ne: "गुणस्तर (Quality) खस्कनु, लागत (Cost) अत्यधिक बढ्नु, र सुरक्षा (Safety) अत्यन्तै कमजोर हुनु" },
        { ja: "品質の向上・原価の削減・安全性の向上", id: "Kualitas naik, biaya hemat, keselamatan naik", ne: "गुणस्तर बढ्नु, खर्च घट्नु, सुरक्षा बढ्नु" },
        { ja: "環境対策の完璧な達成", id: "Tercapainya perlindungan lingkungan secara sempurna", ne: "वातावरणीय उपाय पूर्ण सफल हुनु" },
        { ja: "すべての要素が自動的にバランス良く改善される", id: "Semua elemen otomatis membaik secara seimbang", ne: "सबै कुरा आफैं राम्रो हुँदै जानु" }
      ],
      answer: 0,
      expJa: "【テキスト P.31〜33参照】工期の無理な短縮は、作業の粗雑化（品質悪化）、割増工賃や人員増（原価高騰）、焦りによる重大災害（安全性悪化）を招きます。",
      expId: "Memaksa lembur buru-buru merusak kualitas, memicu kecelakaan kerja fatal, dan melipatgandakan biaya upah lembur.",
      expNe: "हतारमा काम गर्दा गुणस्तर खस्किन्छ, ज्याला खर्च धेरै बढेर बजेट नाघ्छ र मजदुरहरू दुर्घटनामा पर्ने जोखिम अत्यधिक बढ्छ।"
    },
    {
      cat: "第2章 PDCAとOODAの違い（P.37）",
      q: "業務改善手法の「**PDCAサイクル**」と迅速な意思決定手法「**OODAループ**」の使い分けに関する説明として、正しいものはどれですか。",
      q_id: "Manakah perbedaan fungsi yang BENAR antara 'PDCA Cycle' dan 'OODA Loop' dalam manajemen proyek?",
      q_ne: "'PDCA चक्र' र 'OODA लुप' को प्रयोगको फरक सम्बन्धी कुन भनाइ सही छ?",
      options: [
        { ja: "PDCAは「目標計画」から入り計画通りに徐々に良くしていくのに適し、OODAは現場の「生の観察」から入り想定外の変化に素早く対応するのに適している", id: "PDCA berawal dari target rencana dan cocok untuk perbaikan terstruktur bertahap, sedangkan OODA berawal dari pengamatan langsung dan cocok untuk respons cepat atas situasi tak terduga", ne: "PDCA 'लक्ष्य र योजना' बाट सुरु भई कामलाई क्रमशः उत्कृष्ट बनाउन उपयुक्त हुन्छ, भने OODA कार्यस्थलको 'प्रत्यक्ष अवलोकन' बाट सुरु भई अचानक आउने समस्या तत्काल सुल्झाउन उपयुक्त हुन्छ" },
        { ja: "PDCAは軍事用であり、OODAは事務作業でしか使えない", id: "PDCA hanya untuk militer, OODA hanya untuk pekerjaan administrasi", ne: "PDCA सेनाको लागि मात्र हो, OODA अफिसको काममा मात्र चल्छ" },
        { ja: "OODAループを採用すれば、現場で施工計画書を作成する必要は完全になくなる", id: "Jika memakai OODA Loop, rencana kerja tertulis tidak perlu dibuat sama sekali", ne: "OODA लुप प्रयोग गरेपछि निर्माण कार्यको कुनै योजना बनाउनै पर्दैन" },
        { ja: "両者は全く同じ手法であり、最初にやることも完全に一致している", id: "Keduanya adalah metode yang sama persis dan langkah awalnya identik", ne: "यी दुवै एउटै विधि हुन् र सुरुको काम पनि एउटै हुन्छ" }
      ],
      answer: 0,
      expJa: "【テキスト P.37参照】PDCAは計画に基づいて中長期的に品質や手順をブラッシュアップするのに向き、OODAは現場の刻々と変わる異常やトラブルを観察して即座に意思決定するのに向いています。",
      expId: "PDCA cocok untuk perbaikan berkelanjutan berbasis rencana, sedangkan OODA adalah respons kilat atas fakta perubahan tak terduga di lapangan.",
      expNe: "PDCA योजनाबद्ध कामलाई सुधार गर्दै लैजान काम लाग्छ भने OODA कार्यस्थलको तत्काल आइपर्ने समस्या तुरुन्त हल गर्न काम लाग्छ।"
    },
    {
      cat: "第2章 事故発生時の緊急初動（P.41〜42）",
      q: "万が一、作業現場で機械等による人身事故が発生した際、**職長が「最優先」で行うべき緊急措置**はどれですか。",
      q_id: "Jika terjadi kecelakaan kerja berdarah di proyek, tindakan apakah yang WAJIB diambil Shokucho dengan 'Prioritas Paling Pertama'?",
      q_ne: "यदि कार्यस्थलमा कुनै दुर्घटना भएमा शोकुचोले 'सबैभन्दा पहिले' गर्नुपर्ने आपतकालीन कार्य कुन हो?",
      options: [
        { ja: "人命尊重を最優先とし、直ちに機械を非常停止して被災者の救出・救命処置（AED・心肺蘇生等）を行う", id: "Mengutamakan keselamatan nyawa: segera tekan tombol stop darurat mesin, selamatkan korban, dan beri P3K/CPR/AED", ne: "मानव जीवनको रक्षा पहिलो प्राथमिकतामा राखी, तुरुन्त मेसिन बन्द गर्ने, घाइतेको उद्धार गर्ने र प्राथमिक उपचार (AED, CPR) गर्ने" },
        { ja: "怒られないように事故原因を隠蔽するため、壊れた部品をすぐに片付けて捨てる", id: "Membuang pecahan alat ke tempat sampah untuk menutupi kesalahan agar tidak dimarahi", ne: "गाली खाइन्छ भनेर प्रमाण लुकाउन फुटेका सामान तुरुन्त फालिदिने" },
        { ja: "機械を動かしたまま、被災者を放置して他の作業員に作業を続行させる", id: "Membiarkan mesin menyala dan menyuruh pekerja lain terus bekerja mengabaikan korban", ne: "मेसिन चल्न दिएर घाइतेलाई अलपत्र छोडी अरूलाई काम गरिरहन लगाउने" },
        { ja: "被災者に声をかけず、一人で現場から逃げ出す", id: "Melarikan diri sendirian dari lokasi tanpa menyapa korban", ne: "घाइतेलाई नबोलाई आफू एक्लै भाग्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.41〜42参照】災害発生時の最優先事項は「人命尊重」です。機械の非常停止、被災者の救護、二次災害防止措置を直ちに実行し、その後速やかに元請や救急へ連絡します。",
      expId: "Tindakan pertama adalah keselamatan nyawa: matikan mesin darurat, evakuasi korban, berikan P3K/AED, dan cegah bahaya susulan.",
      expNe: "मानवीय जीवनको रक्षा सबैभन्दा माथि हुन्छ: तुरुन्त मेसिन बन्द गर्ने, घाइतेको उद्धार गर्ने र प्राथमिक उपचार गर्ने।"
    },
    {
      cat: "第2章 ネットワーク式工程表：記号（P.44〜45）",
      q: "ネットワーク式工程表において、所要日数はゼロであるが**「先行作業が完了しないと後続作業を開始できない」という作業手順の制約関係を示す記号**は何ですか。",
      q_id: "Pada diagram jaringan kerja, simbol apakah yang durasinya 0 hari tetapi menunjukkan logika urutan bahwa 'tugas berikutnya tidak bisa mulai sebelum tugas sebelumnya tuntas'?",
      q_ne: "नेटवर्क कार्यतालिकामा कुनै समय नलाग्ने तर 'अघिल्लो काम नसकिई त्यसपछिको काम सुरु हुन सक्दैन' भन्ने अनिवार्य नियम देखाउने चिन्ह कुन हो?",
      options: [
        { ja: "点線の矢印（ダミー）", id: "Panah garis putus-putus (Dummy)", ne: "डट-डट भएको तीर (डमी)" },
        { ja: "〇印（イベント）", id: "Lingkaran (Event / Simpul)", ne: "गोलो चिन्ह (इभेन्ट)" },
        { ja: "太い実線の二重矢印", id: "Garis ganda tebal", ne: "मोटो दोहोरो तीर" },
        { ja: "×印", id: "Tanda silang (X)", ne: "क्रस चिन्ह (×)" }
      ],
      answer: 0,
      expJa: "【テキスト P.45参照】点線の矢印を「ダミー」と呼び、所要時間（日数）を必要としない作業間の順序関係・制約を表します。",
      expId: "Garis panah putus-putus (dummy) tidak butuh durasi waktu, tetapi menunjukkan ketergantungan urutan kerja secara mutlak.",
      expNe: "डट-डट तीर (डमी) ले समय नलिए पनि अघिल्लो काम नसकिई अर्को काम सुरु गर्न मिल्दैन भन्ने कडा नियम देखाउँछ।"
    },
    {
      cat: "第2章 クリティカルパスとフロート（P.45〜46）",
      q: "ネットワーク式工程表において、全体の完成日（工期）を守るための管理として**最も適切な記述**はどれですか。",
      q_id: "Manakah pernyataan yang PALING TEPAT mengenai pengelolaan jaringan kerja demi menjaga tanggal serah terima akhir proyek?",
      q_ne: "नेटवर्क तालिका अनुसार कामको अन्तिम म्याद जोगाउन गरिने व्यवस्थापन सम्बन्धी कुन भनाइ सबैभन्दा सही छ?",
      options: [
        { ja: "1日も遅れが許されない最長経路「クリティカルパス」を重点監視し、遅れが出そうな場合は余裕日数（フロート）のある作業から人員を応援に回す", id: "Memantau ketat 'Critical Path' yang tidak boleh molor, dan jika terancam telat, alihkan pekerja dari tugas yang memiliki waktu longgar (float)", ne: "१ दिन पनि ढिलो हुन नहुने 'क्रिटिकल पाथ' लाई कडा निगरानीमा राख्ने, र काम ढिलो हुन लागेमा फुर्सदको समय (फ्लोट) भएका कामबाट मानिस सारेर मद्दत गराउने" },
        { ja: "余裕のある作業だけを熱心に行い、クリティカルパス上の作業は後回しにして放置する", id: "Hanya fokus pada tugas yang santai dan mengabaikan pekerjaan di jalur kritis", ne: "फुर्सदिला काम मात्र ध्यान दिएर गर्ने र मुख्य क्रिटिकल पाथको कामलाई बेवास्ता गर्ने" },
        { ja: "クリティカルパスが遅れそうになったら、工事の完成期日を勝手に1ヶ月延期する", id: "Mengulur tanggal selesai sebulan secara sepihak jika jalur kritis terlambat", ne: "काम ढिलो भएपछि आफ्नो मनखुसीले म्याद १ महिना पछाडि सार्ने" },
        { ja: "工程管理において作業員の人数を工程間で移動させることは固く禁止されている", id: "Dilarang keras memindahkan personel antar-pekerjaan dalam manajemen proyek", ne: "कामदारलाई एउटा कामबाट अर्को काममा सार्न कानुनले पूर्ण रोक लगाएको छ" }
      ],
      answer: 0,
      expJa: "【テキスト P.45〜46参照】遅れの許されないクリティカルパスを重点監視します。進捗に遅れが生じそうな場合は、トータルフロート（余裕日数）を持つ他の作業から人員を再配置して全体の工期を守ります。",
      expId: "Pantau jalur kritis secara ketat; jika terancam molor, geser tenaga kerja dari pekerjaan yang punya waktu longgar (float).",
      expNe: "क्रिटिकल पाथको कडा निगरानी गर्ने र ढिलो हुने जोखिम भएमा फुर्सद भएका कामबाट कामदार सारेर म्यादभित्रै काम सक्नुपर्छ।"
    },
    {
      cat: "第2章 完成工事原価の4費目（P.48）",
      q: "建設業における「完成工事原価」を構成する4つの費用（費目）として、正しい組み合わせはどれですか。",
      q_id: "Manakah 4 elemen pembentuk 'HPP Proyek Konstruksi' (Kansei Kouji Genka)?",
      q_ne: "सम्पन्न निर्माण लागत (खर्च) बन्ने ४ मुख्य खर्च शीर्षकहरूको सही जोडी कुन हो?",
      options: [
        { ja: "材料費・労務費・外注費・経費", id: "Biaya Bahan (Zairyou-hi), Tenaga Kerja Langsung (Roumu-hi), Subkon (Gaichuu-hi), Operasional (Keihi)", ne: "सामग्री खर्च, ज्याला खर्च, बाहिरी ठेक्का खर्च, प्रशासनिक खर्च" },
        { ja: "敷地費・登記費用・水道加入金・固定資産税", id: "Biaya Lahan, Notaris, Saluran Air, Pajak Properti", ne: "जमिन, दर्ता, पानी, कर" },
        { ja: "宣伝広告費・交際接待費・役員報酬・株主配当", id: "Biaya Iklan, Hiburan, Gaji Direksi, Dividen Saham", ne: "विज्ञापन, मनोरञ्जन, हाकिमको भत्ता, सेयर नाफा" },
        { ja: "交通反則金・損害賠償金・違約金・延滞利息", id: "Denda Lalu Lintas, Ganti Rugi, Denda Batal, Bunga Keterlambatan", ne: "जरिवाना, क्षतिपूर्ति, हर्जना, ब्याज" }
      ],
      answer: 0,
      expJa: "【テキスト P.48参照】完成工事原価は、①材料費、②労務費（職人の工賃）、③外注費（下請業者への発注費）、④経費（上記以外の現場費用）の4費目に分類されます。",
      expId: "HPP proyek terdiri atas 4 pos: Zairyou-hi (Bahan), Roumu-hi (Upah pekerja), Gaichuu-hi (Subkon), dan Keihi (Biaya lain).",
      expNe: "निर्माणको कुल लागत ४ शीर्षकमा बाँडिन्छ: सामग्री खर्च, ज्याला, बाहिरी ठेकेदार खर्च, र अन्य प्रशासनिक खर्च।"
    },
    {
      cat: "第2章 作業日報と原価管理（P.48〜49）",
      q: "現場で職長や作業員が記入する「**作業日報**」を分析することで、最も直接的に無駄を削り最適化できるコストは何ですか。",
      q_id: "Dengan menganalisis 'Laporan Harian Kerja' (Sagyou Nippou), biaya manakah yang paling efektif ditekan dan dioptimalkan?",
      q_ne: "दैनिक कामको विवरण लेखिने 'दैनिक कार्य रिपोर्ट' विश्लेषण गरेर सबैभन्दा बढी बचत गर्न सकिने मुख्य खर्च कुन हो?",
      options: [
        { ja: "人件費（人工：にんく・労務費）", id: "Biaya Tenaga Kerja / Upah Mandays (Roumu-hi / Ninku)", ne: "कामदारको ज्याला खर्च / दिनको ज्याला (रोउमु-हि / निन्कु)" },
        { ja: "現場事務所の家賃", id: "Sewa Kantor Proyek", ne: "साइट अफिसको भाडा" },
        { ja: "輸入資材の関税", id: "Bea Cukai Barang Impor", ne: "सामानको भन्सार शुल्क" },
        { ja: "完成建物の火災保険料", id: "Asuransi Kebakaran Bangunan", ne: "भवनको बीमा शुल्क" }
      ],
      answer: 0,
      expJa: "【テキスト P.49参照】原価の中で最も大きな比重を占めるのは「人件費（人工：にんく）」です。日報から作業効率や手待ち時間を分析し、適正な人員配置を行うことで無駄な人工を削れます。",
      expId: "Komponen biaya terbesar adalah tenaga kerja (人工 / Ninku). Analisis laporan harian membantu mandor mencegah pemborosan jam kerja.",
      expNe: "खर्चको सबैभन्दा ठूलो हिस्सा कामदारको ज्याला (निन्कु) हो। दैनिक रिपोर्ट अध्ययन गरी सही मान्छे खटाएर यो खर्च घटाउन सकिन्छ।"
    },
    {
      cat: "第2章 品質改善思考：5現主義（P.54）",
      q: "品質不良やトラブルが発生した際、先入観を捨てて事実に基づき解決を図る「**5現主義（ごげんしゅぎ）**」の構成要素として正しい組み合わせはどれですか。",
      q_id: "Manakah kombinasi yang BENAR mengenai 5 elemen pembentuk 'Gogenshugi' (Prinsip 5 Nyata) dalam pemecahan masalah mutu?",
      q_ne: "काममा समस्या आउँदा कुनै पूर्वाग्रह नराखी समाधान खोज्ने '५-वास्तविकता (गोन्गेन-श्युगी)' का ५ तत्त्वहरूको सही जोडी कुन हो?",
      options: [
        { ja: "現地（現場へ行く）・現物（実際の物を見る）・現実（事実を確認する）・原理（理論や法則）・原則（標準的なルール）", id: "Genchi (Tempat nyata), Genbutsu (Benda fisik), Genjitsu (Fakta nyata), Genri (Prinsip teori), Gensoku (Aturan standar)", ne: "गेन्ची (वास्तविक स्थल), गेन्बुचु (वास्तविक वस्तु), गेन्जिचु (वास्तविक घटना), गेन्त्री (वैज्ञानिक सिद्धान्त), गेन्ससोकु (मानक नियम)" },
        { ja: "現在・過去・未来・現金・現役", id: "Masa Kini, Masa Lalu, Masa Depan, Uang Tunai, Masa Aktif", ne: "वर्तमान, भूत, भविष्य, नगद, सक्रिय" },
        { ja: "現場監督・現場主任・現場職長・現場作業員・現場見習い", id: "Pengawas, Kepala Lapangan, Mandor, Pekerja, Magang", ne: "इन्जिनियर, प्रमुख, नाइके, कामदार, प्रशिक्षार्थी" },
        { ja: "計画・実行・評価・改善・報告", id: "Rencana, Pelaksanaan, Evaluasi, Perbaikan, Laporan", ne: "योजना, काम, जाँच, सुधार, रिपोर्ट" }
      ],
      answer: 0,
      expJa: "【テキスト P.54参照】3現主義（現地・現物・現実）に、原理（科学的理論・法則）と原則（正しい施工基準・ルール）を加えたものを「5現主義」と呼びます。",
      expId: "Gogenshugi terdiri dari Genchi (Lokasi), Genbutsu (Objek), Genjitsu (Fakta), Genri (Teori ilmiah), dan Gensoku (Standar baku).",
      expNe: "'गोन्गेन-श्युगी' भन्नाले स्थल (गेन्ची), वस्तु (गेन्बुचु), तथ्य (गेन्जिचु), सिद्धान्त (गेन्त्री), र मानक नियम (गेन्ससोकु) हुन्।"
    },
    {
      cat: "第2章 ミティゲーションの順序（P.56〜57）",
      q: "工事による自然環境への影響を緩和する「**ミティゲーション**」の検討手順として、正しい優先順位はどれですか。",
      q_id: "Manakah urutan prioritas yang BENAR dalam meninjau langkah 'Mitigasi Lingkungan' di proyek konstruksi?",
      q_ne: "वातावरणीय असर कम गर्न 'मिटिगेशन (असर न्यूनीकरण)' मा विचार गर्नुपर्ने सही प्राथमिकताको क्रम कुन हो?",
      options: [
        { ja: "回避 ➔ 最小化 ➔ 修正 ➔ 低減 ➔ 代償", id: "Menghindari (Kaihi) -> Minimalisasi -> Perbaikan -> Pengurangan -> Kompensasi (Daishou)", ne: "पन्छाउने (बच्ने) -> कम गर्ने -> सच्याउने -> घटाउने -> क्षतिपूर्ति" },
        { ja: "代償 ➔ 低減 ➔ 修正 ➔ 最小化 ➔ 回避", id: "Kompensasi -> Pengurangan -> Perbaikan -> Minimalisasi -> Menghindari", ne: "क्षतिपूर्ति -> घटाउने -> सच्याउने -> कम गर्ने -> पन्छाउने" },
        { ja: "最小化 ➔ 回避 ➔ 代償 ➔ 低減 ➔ 修正", id: "Minimalisasi -> Menghindari -> Kompensasi -> Pengurangan -> Perbaikan", ne: "कम गर्ने -> पन्छाउने -> क्षतिपूर्ति -> घटाउने -> सच्याउने" },
        { ja: "修正 ➔ 代償 ➔ 最小化 ➔ 回避 ➔ 低減", id: "Perbaikan -> Kompensasi -> Minimalisasi -> Menghindari -> Pengurangan", ne: "सच्याउने -> क्षतिपूर्ति -> कम गर्ने -> पन्छाउने -> घटाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.56〜57参照】ミティゲーションは、①回避（そもそも影響を出さない）➔ ②最小化（規模縮小）➔ ③修正（修復）➔ ④低減（維持保護）➔ ⑤代償（他所に代替環境整備）の順序で検討します。",
      expId: "Tahapan mitigasi lingkungan wajib dimulai dari yang paling ideal: Hindari -> Minimalisasi -> Perbaiki -> Kurangi -> Kompensasi lokasi lain.",
      expNe: "वातावरणीय असर कम गर्न सबैभन्दा पहिले बच्ने, नसके असर कम गर्ने, बिग्रे सच्याउने, घटाउने र अन्त्यमा अर्को ठाउँमा विकल्प दिने क्रममा गरिन्छ।"
    },
    {
      cat: "第2章 労働安全衛生の3管理（P.62）",
      q: "労働安全衛生管理における「**3管理**」を進める際、対策を検討すべき「正しい優先順序」はどれですか。",
      q_id: "Manakah URUTAN PRIORITAS yang benar dalam menerapkan '3 Pilar Manajemen K3' (San-Kanri)?",
      q_ne: "औद्योगिक सुरक्षाको '३ व्यवस्थापन' कार्यान्वयन गर्दा विचार गर्नुपर्ने 'सही प्राथमिकताको क्रम' कुन हो?",
      options: [
        { ja: "①作業環境管理 ➔ ②作業管理 ➔ ③健康管理", id: "(1) Manajemen Lingkungan Kerja -> (2) Manajemen Prosedur Kerja -> (3) Manajemen Kesehatan", ne: "(१) कार्य वातावरण व्यवस्थापन -> (२) कार्यविधि व्यवस्थापन -> (३) स्वास्थ्य व्यवस्थापन" },
        { ja: "①健康管理 ➔ ②作業環境管理 ➔ ③作業管理", id: "(1) Kesehatan -> (2) Lingkungan -> (3) Kerja", ne: "(१) स्वास्थ्य -> (२) वातावरण -> (३) कार्यविधि" },
        { ja: "①作業管理 ➔ ②健康管理 ➔ ③作業環境管理", id: "(1) Kerja -> (2) Kesehatan -> (3) Lingkungan", ne: "(१) कार्यविधि -> (२) स्वास्थ्य -> (३) वातावरण" },
        { ja: "優先順位はなく、一番簡単な健康診断だけを行えばよい", id: "Tidak ada prioritas, cukup lakukan cek medis biasa saja", ne: "कुनै क्रम हुँदैन, सामान्य स्वास्थ्य जाँच गरे पुग्छ" }
      ],
      answer: 0,
      expJa: "【テキスト P.62参照】安全衛生対策は根本原因から除去するため、「作業環境管理（有害源の排除）➔ 作業管理（手順や保護具の適正化）➔ 健康管理（健康診断や日常体調把握）」の順で進めます。",
      expId: "Urutan wajib: singkirkan sumber bahaya di lingkungan (作業環境), atur metode/durasi kerja (作業管理), barulah cek medis pekerja (健康管理).",
      expNe: "रोग वा दुर्घटनाको मूल जड हटाउनुपर्ने भएकाले पहिले 'कार्य वातावरण', त्यसपछि 'कामको विधि' र अन्त्यमा 'स्वास्थ्य जाँच' गरिन्छ।"
    },
    {
      cat: "第2章 熱中症予防：暑さ指数（P.65〜66）",
      q: "建設業で多発する熱中症を予防するための指標「**暑さ指数（WBGT値）**」に基づき、現場で取るべき行動基準として正しいものはどれですか。",
      q_id: "Manakah standar tindakan K3 yang BENAR di proyek berdasarkan 'Indeks Suhu Basah dan Bola' (Nilai WBGT)?",
      q_ne: "हिटस्ट्रोक रोक्ने सूचकांक 'WBGT (गर्मी सूचकांक)' अनुसार कार्यस्थलमा पालना गर्नुपर्ने सही सुरक्षा नियम कुन हो?",
      options: [
        { ja: "WBGT値が31以上になったら原則として作業を中断し、28〜31では定期的な休憩を取り水分・塩分を補給させる", id: "Jika WBGT 31 ke atas, hentikan pekerjaan sebisa mungkin; jika WBGT 28-31, wajib istirahat teratur serta minum air dan garam", ne: "WBGT सूचकांक ३१ पुगेमा काम सकेसम्म रोक्ने, र २८ देखि ३१ भएमा नियमित विश्राम लिई पानी र नुनको मात्रा पिउने" },
        { ja: "WBGT値が35を超えても休憩を一切禁止して突貫工事を続けさせる", id: "Tetap melarang istirahat dan mengebut kerja meski nilai WBGT melewati 35", ne: "WBGT ३५ नाघे पनि विश्राम नदिई जबर्जस्ती काम गराइरहने" },
        { ja: "WBGT値とは気温のことなので、湿度が高くても気にする必要はない", id: "WBGT hanyalah suhu udara biasa sehingga kelembapan tinggi boleh diabaikan", ne: "WBGT भनेको तापक्रम मात्र हो, ओस जतिसुकै भए पनि मतलब नराख्ने" },
        { ja: "涼しい部屋での休憩は作業員の甘えなので屋外の直射日光下で休ませる", id: "Menyuruh istirahat di bawah terik matahari karena ruang ber-AC dianggap memanjakan pekerja", ne: "शीतल कोठामा आराम गर्न नदिई घाममै बस्न लगाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.65〜66参照】熱中症死傷者数は建設業が全業種で最多です。WBGT値が31以上は「危険（作業中断）」、28〜31は「厳重警戒（定期的な休憩・水分塩分補給）」が指針で定められています。",
      expId: "Nilai WBGT 31+ adalah batas bahaya (hentikan pekerjaan). Rentang 28-31 wajib istirahat teratur serta konsumsi air dan garam.",
      expNe: "WBGT ३१ भन्दा माथि पुग्दा काम रोक्नुपर्छ। २८ देखि ३१ पुग्दा नियमित ब्रेक लिएर पानी र नुन सेवन गराउनुपर्छ।"
    }
  ]
};
