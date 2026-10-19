const CURRENT_QUIZ_DATA = {
  title: "Day 21：<ruby>第3週<rt>だいさんしゅう</rt></ruby> <ruby>総復習模擬試験<rt>そうふくしゅうもぎしけん</rt></ruby>（職長の職務・現場管理編）",
  key: "score_gakka3_21",
  passScore: 70,
  questions: [
    {
      cat: "Day 15 復習：職長の位置づけ（P.1）",
      q: "<ruby>労働安全衛生法<rt>ろうどうあんぜんえいせいほう</rt></ruby>における「<ruby>職長<rt>しょくちょう</rt></ruby>」の位置づけとして、**最も適切なもの**はどれですか。",
      q_id: "Manakah pernyataan yang PALING TEPAT mengenai posisi 'Shokucho' (Mandor) menurut UU K3 Jepang?",
      q_ne: "औद्योगिक सुरक्षा तथा स्वास्थ्य ऐन अनुसार 'शोकुचो' (नाइके/फोरम्यान) को भूमिका सम्बन्धी कुन उपयुक्त छ?",
      options: [
        { ja: "工事現場における作業員の直接の指導監督者であり、作業員を直接指揮して毎日の作業を進める役割", id: "Pengawas langsung pekerja di lapangan yang memimpin dan mengarahkan pekerjaan harian secara langsung", ne: "कार्यस्थलमा कामदारहरूलाई प्रत्यक्ष निर्देशन र रेखदेख गर्ने तथा दैनिक काम अघि बढाउने प्रमुख व्यक्ति" },
        { ja: "工事現場には常駐せず、本社で書類作成や契約手続きだけを行う責任者", id: "Penanggung jawab di kantor pusat yang tidak tinggal di lapangan dan hanya mengurus administrasi", ne: "कार्यस्थलमा नआई हेड अफिसमा बसेर कागजात मात्र हेर्ने म्यानेजर" },
        { ja: "発注者の代理人として、工事の全工程を検査する設計監理者", id: "Pengawas perwakilan klien yang bertugas memeriksa keseluruhan proyek", ne: "घरधनीको प्रतिनिधिको रूपमा काम निरीक्षण गर्ने सुपरभाइजर" },
        { ja: "指示や安全管理は行わず、自分の持ち場の単一作業だけに専念する見習い作業員", id: "Pekerja pemula yang hanya mengerjakan tugas sendiri tanpa mengarahkan orang lain", ne: "अरूलाई निर्देशन नदिई आफ्नो काम मात्र गर्ने प्रशिक्षार्थी" }
      ],
      answer: 0,
      expJa: "【テキスト P.1参照】職長とは、労働安全衛生法において工事現場における作業員の指導監督者を指します。小規模現場では「親方」や「棟梁」と呼ばれることもあります。",
      expId: "Shokucho adalah pemimpin dan pengawas kerja langsung bagi para pekerja di lapangan konstruksi sesuai UU K3 Jepang.",
      expNe: "'शोकुचो' भन्नाले कार्यस्थलमा कामदारहरूलाई प्रत्यक्ष निर्देशन दिने र दैनिक काम अघि बढाउने नाइके हो।"
    },
    {
      cat: "Day 15 復習：設計品質と施工品質（P.3〜4）",
      q: "「**設計品質**」と「**施工品質**」の違いとして、正しい説明はどれですか。",
      q_id: "Manakah penjelasan yang BENAR mengenai perbedaan antara 'Kualitas Desain' dan 'Kualitas Konstruksi'?",
      q_ne: "'डिजाइन गुणस्तर' र 'निर्माण गुणस्तर' बीचको भिन्नता सम्बन्धी कुन भनाइ सही छ?",
      options: [
        { ja: "設計品質は図面や仕様書で定めた「ねらいの品質」であり、施工品質は施工段階で実現する「出来ばえの品質（出来形）」である", id: "Kualitas desain adalah target rencana (nerai no hinshitsu), dan kualitas konstruksi adalah hasil fisik nyata saat pengerjaan", ne: "डिजाइन गुणस्तर नक्सामा तोकिएको 'लक्ष्य गुणस्तर' हो, भने निर्माण गुणस्तर कामबाट प्राप्त हुने 'वास्तविक नतिजाको गुणस्तर' हो" },
        { ja: "設計品質とは現場で作業員が作るものであり、施工品質とは設計者がオフィスで描く図面のことである", id: "Kualitas desain dibuat oleh tukang di lapangan, sedangkan kualitas konstruksi adalah gambar arsitek di kantor", ne: "डिजाइन गुणस्तर कामदारले बनाउने कुरा हो र निर्माण गुणस्तर इन्जिनियरले कोर्ने नक्सा हो" },
        { ja: "ねらいの品質と出来ばえの品質が一致しなくても、手戻りや手直しは発生しない", id: "Jika kualitas target dan hasil nyata tidak cocok, tidak akan timbul pengerjaan ulang", ne: "लक्ष्य र नतिजा नमिले पनि काम दोहोर्याउनु (तेमोदोरी) पर्दैन" },
        { ja: "両者は同じ意味であるため、職長が区別して管理する必要はない", id: "Keduanya bermakna sama sehingga mandor tidak perlu membedakannya", ne: "दुवैको अर्थ एउटै भएकाले फरक छुट्याउनु पर्दैन" }
      ],
      answer: 0,
      expJa: "【テキスト P.3〜4参照】設計品質は設計図書で定めた「ねらいの品質」、施工品質は施工段階で実現する「出来ばえの品質」です。両者が一致しないと手直し・手戻り（コスト増）になります。",
      expId: "Kualitas desain adalah target rencana, dan kualitas konstruksi adalah hasil jadi nyata. Keduanya harus selaras agar tidak terjadi temodori.",
      expNe: "डिजाइन गुणस्तर नक्साको लक्ष्य हो भने निर्माण गुणस्तर वास्तविक कामको नतिजा हो। यी दुई नमिलेमा काम दोहोर्याउनुपर्ने हुन्छ।"
    },
    {
      cat: "Day 16 復習：ムリ・ムダ・ムラ（P.25〜26）",
      q: "現場管理における「**ムリ・ムダ・ムラ**」の発生原因として、最も適切なものはどれですか。",
      q_id: "Manakah penyebab utama timbulnya 'Muri (Beban lebih), Muda (Pemborosan), dan Mura (Ketidakteraturan)' di proyek?",
      q_ne: "कार्यस्थलमा 'मुरी (अति भार), मुदा (खेर जानु), र मुरा (अस्थिर हुनु)' उत्पन्न हुनुको मुख्य कारण कुन हो?",
      options: [
        { ja: "作業員に与える「負荷（作業量）」と「能力」のバランスが取れていないこと", id: "Ketidakseimbangan antara 'beban volume kerja' dan 'kapasitas/kemampuan' para pekerja", ne: "कामदारलाई दिइने 'कामको भार' र उसको 'क्षमता' बीचको सन्तुलन नमिल्नु" },
        { ja: "作業手順書を守って全員が計画通りに作業を進めていること", id: "Semua orang bekerja sesuai rencana dan mematuhi SOP", ne: "सबैले नियम पुस्तिका पालना गरेर योजना अनुसार काम गर्नु" },
        { ja: "材料や器具が作業の流れに合わせて適切な位置に配置されていること", id: "Material dan perkakas tertata rapi mengikuti alur kerja", ne: "सामान र औजारहरू कामको गति अनुसार ठिक्क ठाउँमा राखिनु" },
        { ja: "毎朝の健康チェックで全員の体調が万全であること", id: "Semua pekerja dalam kondisi bugar saat pemeriksaan pagi", ne: "बिहानी जाँचमा सबै कामदारको स्वास्थ्य राम्रो हुनु" }
      ],
      answer: 0,
      expJa: "【テキスト P.25〜26参照】能力より負荷が大きすぎると「ムリ」が生じ、負荷が小さすぎると手待ちなどの「ムダ」が発生します。両者が混在してばらつく状態が「ムラ」です。",
      expId: "Muri-Muda-Mura terjadi karena beban kerja tidak seimbang dengan kapasitas/kemampuan pekerja.",
      expNe: "कामदारको क्षमताभन्दा बढी काम भए 'मुरी' हुन्छ र काम नभए 'मुदा' हुन्छ। दुवैको असन्तुलनले मुरी-मुदा-मुरा निम्त्याउँछ।"
    },
    {
      cat: "Day 16 復習：送り出し教育（P.28〜29）",
      q: "作業現場に初めて入る作業員に対して事前に行う「**送り出し教育**」において、外国人労働者への適切な配慮として正しいものはどれですか。",
      q_id: "Manakah tindakan yang TEPAT dalam 'Okuridashi Kyouiku' (Pelatihan Pembekalan Awal) bagi pekerja asing?",
      q_ne: "नयाँ कार्यस्थलमा जानुअघि दिइने पूर्व-अभिमुखीकरण तालिममा विदेशी कामदारहरूका लागि गरिने सही व्यवस्था कुन हो?",
      options: [
        { ja: "新規入場者向けの資料を母国語で用意し、理解を促すとともに、1週間程度ヘルメットに目印シールを貼る", id: "Menyiapkan modul orientasi dalam bahasa ibu dan menempelkan stiker penanda pekerja baru di helm selama sekitar 1 minggu", ne: "अभिमुखीकरणका कागजात मातृभाषामा तयार पार्ने र करिब १ हप्तासम्म हेल्मेटमा नयाँ कामदारको चिन्ह भएको स्टिकर टाँस्ने" },
        { ja: "専門用語の解説は省き、現場の危険箇所や避難経路の説明は一切行わない", id: "Menghilangkan penjelasan istilah teknis, denah evakuasi, dan area bahaya", ne: "जोखिम भएको ठाउँ र आपतकालीन बाटोबारे केही नसिकाई छोड्ने" },
        { ja: "日本語が完璧に話せるようになるまで現場への入場を永久に禁止する", id: "Melarang masuk ke proyek secara permanen hingga bahasa Jepangnya sempurna", ne: "जापानी भाषा पूर्ण रूपमा नबोलेसम्म कार्यस्थलमा पस्नै नदिने" },
        { ja: "他の作業員とコミュニケーションを取らせず、完全に孤立させて作業させる", id: "Melarang berinteraksi dengan pekerja lain dan mengisolasinya sendirian", ne: "अरू कामदारहरूसँग बोल्न नदिई एक्लै काम गर्न लगाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.28〜29参照】外国人労働者には母国語資料を用意して安全ルールや危険箇所の理解を深めます。また周囲が気配りできるようヘルメットに目印シールを貼る工夫が有効です。",
      expId: "Gunakan panduan berbahasa ibu dan stiker penanda di helm selama 1 minggu agar pekerja baru terpantau aman oleh tim.",
      expNe: "विदेशी कामदारले बुझून् भनेर मातृभाषामा जानकारी दिने र सबैले चिनून् भनेर १ हप्ता हेल्मेटमा स्टिकर टाँस्नु राम्रो उपाय हो।"
    },
    {
      cat: "Day 17 復習：OODAループ（P.35〜37）",
      q: "現場で想定外の事態や刻々と変化する問題に迅速に対応するための「**OODA（ウーダ）ループ**」の最初のステップはどれですか。",
      q_id: "Apakah langkah pertama dalam siklus 'OODA Loop' yang digunakan untuk pengambilan keputusan cepat di lapangan?",
      q_ne: "कार्यस्थलमा अचानक आइपर्ने समस्या तत्काल समाधान गर्न प्रयोग गरिने 'OODA लुप' को पहिलो चरण कुन हो?",
      options: [
        { ja: "Observe（観察：目の前の今の状況を先入観なくよく観察し、生データ・情報を収集する）", id: "Observe (Mengamati fakta situasi terkini secara objektif tanpa prasangka untuk mengumpulkan data mentah)", ne: "Observe (अवलोकन: कुनै पूर्वाग्रह नराखी आँखा अगाडिको वास्तविक अवस्था हेर्ने र सत्य तथ्य बटुल्ने)" },
        { ja: "Plan（計画：長期的な工程計画書をオフィスで作成する）", id: "Plan (Membuat dokumen rencana jangka panjang di kantor)", ne: "Plan (अफिसमा बसेर लामो योजना बनाउने)" },
        { ja: "Decide（意思決定：観察せずに思いつきでやることを決める）", id: "Decide (Langsung mengambil keputusan sesuka hati tanpa mengamati)", ne: "Decide (अवस्था नहेरी हचुवाको भरमा निर्णय लिने)" },
        { ja: "Check（評価：作業が終わった後の結果だけを分析する）", id: "Check (Hanya mengevaluasi hasil setelah pekerjaan selesai)", ne: "Check (काम सकिएपछि नतिजा मात्र जाँच्ने)" }
      ],
      answer: 0,
      expJa: "【テキスト P.35〜37参照】OODAループは「Observe（観察）」から入るのが最大の特徴です。過去のデータではなく、職長自身の目で現場の客観的な「生データ」を捉えます。",
      expId: "Ciri khas utama OODA Loop adalah diawali dari 'Observe' (mengamati langsung fakta mentah di lapangan).",
      expNe: "OODA लुपको मुख्य विशेषता नै पहिले 'Observe (आँखाले प्रत्यक्ष तथ्य हेर्ने)' बाट सुरु गर्नु हो।"
    },
    {
      cat: "Day 17 復習：事故発生時の緊急措置（P.41〜42）",
      q: "作業現場で機械等による人身事故が発生した際、**職長が「最優先」で取るべき行動**はどれですか。",
      q_id: "Jika terjadi kecelakaan kerja di proyek, tindakan apakah yang WAJIB diambil Shokucho dengan 'PRIORITAS PALING UTAMA'?",
      q_ne: "कार्यस्थलमा कुनै दुर्घटना भएमा शोकुचोले 'सबैभन्दा पहिले' गर्नुपर्ने आपतकालीन कार्य कुन हो?",
      options: [
        { ja: "人命尊重を最優先とし、直ちに機械を非常停止して被災者の救出・救命処置（AEDや心肺蘇生）を行う", id: "Mengutamakan keselamatan nyawa: segera matikan darurat mesin, selamatkan korban, dan lakukan P3K/AED", ne: "मानव जीवनको रक्षा पहिलो प्राथमिकतामा राखी, तुरुन्त मेसिन बन्द गर्ने, घाइतेको उद्धार गर्ने र प्राथमिक उपचार (AED आदि) गर्ने" },
        { ja: "元請に怒られないよう事故原因を隠蔽するため、破損した部品をすぐにゴミ箱に捨てる", id: "Membuang komponen rusak ke tong sampah demi menutupi kesalahan agar tidak dimarahi", ne: "गाली खाइन्छ भनेर प्रमाण लुकाउन फुटेका सामान डस्टबिनमा फालिदिने" },
        { ja: "機械を動かしたまま、被災者を放置して他の作業員に作業を続行させる", id: "Membiarkan mesin tetap berputar dan menyuruh pekerja lain terus bekerja mengabaikan korban", ne: "मेसिन चल्न दिएर घाइतेलाई अलपत्र छोडी अरूलाई काम गरिरहन लगाउने" },
        { ja: "被災者の意識があっても救急車や関係機関への連絡は一切行わない", id: "Tidak menghubungi ambulans atau pihak terkait sama sekali", ne: "एम्बुलेन्स वा सम्बन्धित निकायलाई खबरै नगर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.41〜42参照】事故発生時は人命尊重が最優先です。機械の非常停止、被災者の救助と心肺蘇生・AEDなどの救命処置を直ちに行い、必要に応じて全員を退避させます。",
      expId: "Tindakan nomor satu adalah mengutamakan nyawa: segera tekan tombol stop darurat, selamatkan korban, dan berikan P3K/CPR.",
      expNe: "दुर्घटनामा मानवीय जीवनको रक्षा सबैभन्दा माथि हुन्छ: तुरुन्त मेसिन रोक्ने, उद्धार गर्ने र तुरुन्त प्राथमिक उपचार गर्ने।"
    },
    {
      cat: "Day 18 復習：ネットワーク式工程表（P.45〜46）",
      q: "ネットワーク式工程表において、**「全体の工期に直結するため、1日も遅れが許されない最長作業経路」**を何と呼びますか。",
      q_id: "Apa sebutan untuk rangkaian kegiatan terpanjang pada network schedule yang tidak boleh terlambat sama sekali?",
      q_ne: "नेटवर्क तालिकामा अलिकति पनि ढिलो हुन नहुने सबैभन्दा लामो मुख्य कामको बाटोलाई के भनिन्छ?",
      options: [
        { ja: "クリティカルパス（重点管理経路）", id: "Critical Path (Lintasan Kritis)", ne: "क्रिटिकल पाथ (सबैभन्दा जोखिमपूर्ण मुख्य बाटो)" },
        { ja: "トータルフロート（全余裕時間）", id: "Total Float (Total waktu longgar)", ne: "टोटल फ्लोट (कुल फुर्सदको समय)" },
        { ja: "ダミー（擬似作業）", id: "Dummy (Panah semu)", ne: "डमी (समय नलाग्ने तीर)" },
        { ja: "サイクルタイム", id: "Cycle Time (Waktu siklus)", ne: "साइकल समय" }
      ],
      answer: 0,
      expJa: "【テキスト P.45参照】遅れの許されない最長経路を「クリティカルパス」と呼びます。この経路上にある作業が遅れると、工事全体の完成日がそのまま遅延します。",
      expId: "Critical Path adalah jalur kegiatan terpanjang tanpa toleransi keterlambatan; jika mundur 1 hari, tanggal serah terima gedung pasti terlambat.",
      expNe: "'क्रिटिकल पाथ' भन्नाले १ दिन पनि ढिलो हुन नहुने मुख्य कामको बाटो हो। यसमा ढिलो हुनासाथ पूरै भवनको काम ढिलो हुन्छ।"
    },
    {
      cat: "Day 19 復習：工事原価と日報（P.48〜49）",
      q: "建設業の工事原価の中で最も大きな比重を占め、**「毎日の作業日報を分析して適正配置を行うことで削減できる費用」**はどれですか。",
      q_id: "Biaya apakah yang memakan porsi terbesar dalam HPP proyek dan dapat ditekan dengan analisis laporan harian serta penempatan tenaga kerja yang tepat?",
      q_ne: "निर्माण लागतको सबैभन्दा ठूलो हिस्सा ओगट्ने र दैनिक रिपोर्ट विश्लेषण गरी सही मानिस खटाउँदा बचत गर्न सकिने खर्च कुन हो?",
      options: [
        { ja: "人件費（労務費・人工：にんく）", id: "Biaya Tenaga Kerja / Upah Mandays (Roumu-hi / Ninku)", ne: "कामदारको ज्याला खर्च / दिनको ज्याला (रोउमु-हि / निन्कु)" },
        { ja: "現場の水道光熱費", id: "Tagihan Listrik dan Air Kantor Proyek", ne: "बिजुली र पानीको महसुल" },
        { ja: "安全靴やヘルメットの購入費", id: "Biaya Pembelian Sepatu dan Helm", ne: "जुत्ता र हेल्मेट किन्ने खर्च" },
        { ja: "完成後の建物の固定資産税", id: "Pajak Bumi dan Bangunan Setelah Selesai", ne: "भवनको सम्पत्ति कर" }
      ],
      answer: 0,
      expJa: "【テキスト P.48〜49参照】コストの中で大きな比重を占めるのは職人の「人件費（人工：にんく）」です。日報から働き方を把握し最適な人員配置を行うことでコスト削減につながります。",
      expId: "Komponen biaya terbesar adalah tenaga kerja (人工 / Ninku). Analisis laporan harian membantu mandor mencegah pemborosan upah.",
      expNe: "खर्चको सबैभन्दा ठूलो हिस्सा कामदारको ज्याला (निन्कु) हो। दैनिक रिपोर्ट अध्ययन गरी सही मान्छे खटाएर यो खर्च घटाउन सकिन्छ।"
    },
    {
      cat: "Day 19 復習：品質改善思考（P.54）",
      q: "施工品質の欠陥が発生した際、思い込みを捨てて事実を確認する基本思考である「**3現主義（さんげんしゅぎ）**」の組み合わせはどれですか。",
      q_id: "Manakah kombinasi yang BENAR mengenai prinsip 'Sangenshugi' (Prinsip 3 Nyata) dalam pemecahan masalah mutu?",
      q_ne: "गुणस्तरमा समस्या आउँदा कुनै पूर्वाग्रह नराखी समाधान खोज्ने '३-वास्तविकताको सिद्धान्त (सान्गेन-श्युगी)' को सही जोडी कुन हो?",
      options: [
        { ja: "現地（現場に行く）・現物（実際の物を見る）・現実（何が起きているか事実を確認する）", id: "Genchi (Tempat nyata), Genbutsu (Benda fisik nyata), Genjitsu (Fakta nyata yang terjadi)", ne: "गेन्ची (वास्तविक स्थल), गेन्बुचु (वास्तविक वस्तु), गेन्जिचु (वास्तविक घटना/तथ्य)" },
        { ja: "現金・現在・現役", id: "Uang tunai, Masa kini, Masa aktif", ne: "नगद, वर्तमान, सक्रिय" },
        { ja: "現場監督・現場主任・現場作業員", id: "Pengawas proyek, Kepala mandor, Pekerja", ne: "इन्जिनियर, नाइके, कामदार" },
        { ja: "計画・実行・評価", id: "Rencana, Pelaksanaan, Evaluasi", ne: "योजना, कार्यान्वयन, मूल्यांकन" }
      ],
      answer: 0,
      expJa: "【テキスト P.54参照】品質欠陥が発生した際は、「現地」に行き、「現物」を見て、「現実」に起きている事実を確認する『3現主義』が基本です。これに原理・原則を加えると5現主義になります。",
      expId: "Sangenshugi: pergi ke lokasi (Genchi), melihat fisik barang bukti (Genbutsu), dan memeriksa fakta kejadian (Genjitsu).",
      expNe: "'सान्गेन-श्युगी' भन्नाले घटना भएको स्थलमा जाने (गेन्ची), बिग्रेको सामान हेर्ने (गेन्बुचु), र के भएको हो सत्य बुझ्ने (गेन्जिचु) हो।"
    },
    {
      cat: "Day 20 復習：3管理と暑さ指数（P.62, 66）",
      q: "労働安全衛生における「3管理の優先順序」と「熱中症予防の暑さ指数（WBGT値）」の組み合わせとして、**正しいもの**はどれですか。",
      q_id: "Manakah kombinasi yang BENAR antara urutan prioritas '3 Pilar Manajemen K3' dan ambang batas 'Indeks Panas (WBGT)'?",
      q_ne: "औद्योगिक सुरक्षाको '३ व्यवस्थापनको प्राथमिकता क्रम' र 'गर्मी सूचकांक (WBGT)' सम्बन्धी सही जोडी कुन हो?",
      options: [
        { ja: "作業環境管理 ➔ 作業管理 ➔ 健康管理 の順序で対策し、WBGT値が31以上になったら可能な限り作業を中断する", id: "Urutan: Lingkungan -> Metode Kerja -> Kesehatan. Jika WBGT 31 ke atas, hentikan pekerjaan sebisa mungkin", ne: "कार्य वातावरण -> कार्यविधि -> स्वास्थ्यको क्रममा उपाय गर्ने, र WBGT सूचकांक ३१ पुगेमा काम सकेसम्म रोक्ने" },
        { ja: "健康管理 ➔ 作業管理 ➔ 作業環境管理 の順序で対策し、WBGT値に関係なく休憩は取らせない", id: "Kesehatan -> Kerja -> Lingkungan, dan tidak boleh istirahat berapa pun nilai WBGT", ne: "स्वास्थ्य -> कार्यविधि -> वातावरणको क्रममा गर्ने, र जति गर्मी भए पनि ब्रेक नदिने" },
        { ja: "作業管理 ➔ 健康管理 ➔ 作業環境管理 の順序で対策し、WBGT値が10以上で直ちに作業を中断する", id: "Kerja -> Kesehatan -> Lingkungan, dan hentikan kerja jika WBGT di atas 10", ne: "कार्यविधि -> स्वास्थ्य -> वातावरणको क्रममा गर्ने, र WBGT १० पुग्दा काम रोक्ने" },
        { ja: "順序は関係なく、WBGT値とは気温のことだけを指す", id: "Urutan bebas dan WBGT hanyalah suhu udara biasa", ne: "यसको कुनै क्रम हुँदैन र WBGT भनेको सामान्य तापक्रम मात्र हो" }
      ],
      answer: 0,
      expJa: "【テキスト P.62, 66参照】安全衛生対策は「作業環境管理 ➔ 作業管理 ➔ 健康管理」の順序で根本原因から対処します。熱中症予防ではWBGT 31以上で原則作業中断（28〜31は厳重警戒）となります。",
      expId: "Urutan K3: Lingkungan -> Kerja -> Kesehatan. Pada WBGT 31+, pekerjaan harus dihentikan untuk mencegah kematian akibat sengatan panas.",
      expNe: "पहिले कार्य वातावरण, अनि कामको तरिका र अन्त्यमा स्वास्थ्य जाँच्नुपर्छ। WBGT ३१ नाघेमा काम रोक्नुपर्छ।"
    }
  ]
};
