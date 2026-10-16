const CURRENT_QUIZ_DATA = {
  title: "Day 17：QCDSE・PDCAとOODAループ・安全初動（テキスト P.31〜42）",
  key: "score_gakka3_17",
  passScore: 70,
  questions: [
    {
      cat: "第2章 現場管理の基礎（P.31〜33）",
      q: "工事現場で管理すべき「**QCDSE**」の5つの要素として、**正しい組み合わせ**はどれですか。",
      q_id: "Manakah kombinasi yang BENAR mengenai 5 elemen manajemen konstruksi 'QCDSE'?",
      q_ne: "निर्माण कार्यस्थलमा व्यवस्थापन गर्नुपर्ने 'QCDSE' का ५ तत्त्वहरूको सही जोडी कुन हो?",
      options: [
        { ja: "品質（Quality）・原価（Cost）・工期（Delivery）・安全（Safety）・環境（Environment）", id: "Quality (Kualitas), Cost (Biaya), Delivery (Waktu), Safety (Keselamatan), Environment (Lingkungan)", ne: "Quality (गुणस्तर), Cost (लागत), Delivery (समय), Safety (सुरक्षा), Environment (वातावरण)" },
        { ja: "数量（Quantity）・原価（Cost）・設計（Design）・速度（Speed）・設備（Equipment）", id: "Quantity, Cost, Design, Speed, Equipment", ne: "मात्रा, लागत, डिजाइन, गति, उपकरण" },
        { ja: "品質（Quality）・契約（Contract）・図面（Drawing）・安全（Safety）・経済（Economy）", id: "Quality, Contract, Drawing, Safety, Economy", ne: "गुणस्तर, सम्झौता, नक्सा, सुरक्षा, अर्थतन्त्र" },
        { ja: "資格（Qualification）・清掃（Clean）・工期（Delivery）・技能（Skill）・教育（Education）", id: "Qualification, Clean, Delivery, Skill, Education", ne: "योग्यता, सफाइ, समय, सीप, शिक्षा" }
      ],
      answer: 0,
      expJa: "【テキスト P.31〜33参照】現場管理では従来のQCD（品質・原価・工期）に加えて、安全（Safety）と環境（Environment）を合わせた『QCDSE』を総合的に管理することが求められます。",
      expId: "QCDSE adalah singkatan dari Quality (Kualitas), Cost (Biaya), Delivery (Jadwal), Safety (K3), dan Environment (Lingkungan sekitar).",
      expNe: "QCDSE भन्नाले गुणस्तर (Quality), लागत (Cost), समय तालिका (Delivery), सुरक्षा (Safety), र वातावरण (Environment) को व्यवस्थापन हो।"
    },
    {
      cat: "第2章 工期と品質・原価の関係（P.31〜32）",
      q: "工期が極端に遅れた場合に、無理に工期を守ろうとして短期間で一気に工事を進める「**突貫工事（とっかんこうじ）**」を行った結果として生じやすい問題はどれですか。",
      q_id: "Masalah apakah yang paling sering terjadi jika proyek melakukan 'Tokkan Kouji' (lembur maraton terburu-buru) demi mengejar keterlambatan jadwal?",
      q_ne: "म्याद नाघ्न लागेपछि हतार-हतार रातदिन नभनी काम सक्ने 'तोक्कान कोउजी (अति हतारको काम)' गर्दा निम्तिने मुख्य समस्या कुन हो?",
      options: [
        { ja: "作業が粗雑になりやすく、施工不良や手直し・重大事故が発生して品質や安全性が著しく低下する", id: "Kualitas pengerjaan menjadi kasar, memicu cacat mutu, pengerjaan ulang, dan kecelakaan fatal", ne: "काम हतारमा गर्दा गुणस्तर खस्कने, फेरि बनाउनुपर्ने र ठूलो दुर्घटना हुने जोखिम बढ्छ" },
        { ja: "工事原価が大幅に下がり、会社に莫大な利益がもたらされる", id: "Biaya konstruksi turun drastis dan mendatangkan keuntungan besar bagi perusahaan", ne: "खर्च धेरै घटेर कम्पनीलाई ठूलो नाफा हुन्छ" },
        { ja: "作業員の手待ち（手待ち時間）が大幅に増加する", id: "Waktu tunggu menganggur (temachi) bagi pekerja meningkat pesat", ne: "कामदारहरू खाली बस्नुपर्ने समय धेरै बढ्छ" },
        { ja: "設計図書通りのねらいの品質がより完璧に実現できるようになる", id: "Kualitas target desain dapat terwujud dengan jauh lebih sempurna", ne: "नक्सा अनुसारको गुणस्तर अझ उत्कृष्ट रूपमा प्राप्त हुन्छ" }
      ],
      answer: 0,
      expJa: "【テキスト P.31〜32参照】無理な突貫工事を行うと、品質が悪化し、手戻りや手直し・労働災害の発生につながります。原価面でも人員増員や機械導入・割増工賃で高騰します。",
      expId: "Tokkan kouji (kerja terburu-buru mengejar deadline) menyebabkan penurunan kualitas drastis dan meningkatkan risiko kecelakaan kerja.",
      expNe: "हतार-हतार काम गर्दा गुणस्तर खस्किन्छ, काम दोहोर्याउनु पर्ने हुन्छ र मजदुरहरू दुर्घटनामा पर्ने जोखिम अत्यधिक बढ्छ।"
    },
    {
      cat: "第2章 業務改善手法：PDCA（P.33〜35）",
      q: "業務の改善や効率化を図る「**PDCAサイクル**」の4つのステップの順序として、**正しいもの**はどれですか。",
      q_id: "Manakah urutan 4 langkah yang BENAR dalam siklus 'PDCA' untuk perbaikan mutu dan efisiensi kerja?",
      q_ne: "कार्यसम्पादन सुधार र गुणस्तर वृद्धिका लागि प्रयोग गरिने 'PDCA चक्र' को सही क्रम कुन हो?",
      options: [
        { ja: "Plan（計画：施工計画・手順書）→ Do（実行）→ Check（評価・分析）→ Action（改善・手順書更新）", id: "Plan (Rencana) -> Do (Jalankan) -> Check (Evaluasi) -> Action (Tindak lanjut/Perbaikan)", ne: "Plan (योजना) -> Do (कार्यान्वयन) -> Check (मूल्यांकन/जाँच) -> Action (सुधार)" },
        { ja: "Do（実行）→ Plan（計画）→ Action（改善）→ Check（評価）", id: "Do -> Plan -> Action -> Check", ne: "Do -> Plan -> Action -> Check" },
        { ja: "Check（評価）→ Action（改善）→ Plan（計画）→ Do（実行）", id: "Check -> Action -> Plan -> Do", ne: "Check -> Action -> Plan -> Do" },
        { ja: "Plan（計画）→ Action（改善）→ Check（評価）→ Do（実行）", id: "Plan -> Action -> Check -> Do", ne: "Plan -> Action -> Check -> Do" }
      ],
      answer: 0,
      expJa: "【テキスト P.33〜35参照】PDCAサイクルは、Plan（目標・手順書作成）→ Do（手順書通りに実行）→ Check（結果の評価・分析）→ Action（改善・手順書更新）の順で繰り返し回します。",
      expId: "Siklus PDCA berjalan secara berurutan: Plan (Perencanaan) -> Do (Pelaksanaan) -> Check (Pemeriksaan hasil) -> Action (Perbaikan SOP).",
      expNe: "PDCA चक्रको सही क्रम Plan (योजना बनाउने) -> Do (काम गर्ने) -> Check (नतिजा जाँच्ने) -> Action (सुधार गर्ने) हो।"
    },
    {
      cat: "第2章 迅速な意思決定：OODAループ（P.35〜37）",
      q: "状況が刻々と変化し先が読めない現場で、迅速に対応するための「**OODA（ウーダ）ループ**」の4つのステップとして、**正しいもの**はどれですか。",
      q_id: "Manakah urutan 4 langkah yang BENAR dalam 'OODA Loop' yang digunakan untuk pengambilan keputusan cepat di lapangan yang berubah dinamis?",
      q_ne: "अवस्था छिटो-छिटो परिवर्तन हुने कार्यस्थलमा तत्काल सही निर्णय लिन प्रयोग गरिने 'OODA लुप' को सही क्रम कुन हो?",
      options: [
        { ja: "Observe（観察）→ Orient（状況判断）→ Decide（意思決定）→ Action（行動・結果の評価）", id: "Observe (Amati) -> Orient (Pahami situasi) -> Decide (Putuskan) -> Action (Tindak lanjut)", ne: "Observe (अवलोकन/हेर्ने) -> Orient (अवस्था बुझ्ने) -> Decide (निर्णय लिने) -> Action (काम गर्ने/नतिजा जाँच्ने)" },
        { ja: "Plan（計画）→ Orient（分析）→ Decide（決定）→ Action（行動）", id: "Plan -> Orient -> Decide -> Action", ne: "Plan -> Orient -> Decide -> Action" },
        { ja: "Decide（決定）→ Action（行動）→ Observe（観察）→ Orient（分析）", id: "Decide -> Action -> Observe -> Orient", ne: "Decide -> Action -> Observe -> Orient" },
        { ja: "Action（行動）→ Decide（決定）→ Orient（分析）→ Observe（観察）", id: "Action -> Decide -> Orient -> Observe", ne: "Action -> Decide -> Orient -> Observe" }
      ],
      answer: 0,
      expJa: "【テキスト P.35〜37参照】OODAループは、Observe（現場の生の観察）→ Orient（情報分析と状況判断・仮説立て）→ Decide（やることを決める意思決定）→ Action（実行と評価）のサイクルです。",
      expId: "OODA Loop terdiri atas: Observe (Mengamati fakta mentah) -> Orient (Menganalisis situasi) -> Decide (Menentukan tindakan) -> Action (Eksekusi).",
      expNe: "OODA लुपमा पहिले Observe (आँखाले तथ्य हेर्ने) -> Orient (अवस्था विश्लेषण गर्ने) -> Decide (निर्णय गर्ने) -> Action (काम गरेर मूल्यांकन गर्ने) गरिन्छ।"
    },
    {
      cat: "第2章 PDCAとOODAの違い（P.37）",
      q: "「PDCAサイクル」と「OODAループ」の**使い分けの違い**として、テキストに記載されている説明として正しいものはどれですか。",
      q_id: "Manakah perbedaan mendasar antara 'PDCA Cycle' dan 'OODA Loop' yang dijelaskan dalam buku panduan?",
      q_ne: "'PDCA चक्र' र 'OODA लुप' प्रयोग गर्ने सन्दर्भको फरक सम्बन्धी कुन भनाइ सही छ?",
      options: [
        { ja: "PDCAは「目標設定」から入り施工計画を徐々に良くしていくのに向いており、OODAは「観察」から入り刻々と変化する問題に素早く対応するのに向いている", id: "PDCA berawal dari target rencana dan cocok untuk perbaikan bertahap, sedangkan OODA berawal dari pengamatan langsung dan cocok untuk respons cepat atas masalah mendadak", ne: "PDCA 'लक्ष्य र योजना' बाट सुरु भई बिस्तारै काम सुधार्न उपयुक्त हुन्छ, भने OODA 'प्रत्यक्ष अवलोकन' बाट सुरु भई तत्काल आइपर्ने समस्या तुरुन्त सुल्झाउन उपयुक्त हुन्छ" },
        { ja: "PDCAは軍事用であり、OODAは製造業でしか使えない手法である", id: "PDCA hanya untuk militer, sedangkan OODA hanya bisa dipakai di pabrik manufaktur", ne: "PDCA सेनाको लागि मात्र हो र OODA फ्याक्ट्रीमा मात्र प्रयोग हुन्छ" },
        { ja: "PDCAもOODAも最初に行うことは「上司の愚痴を聞くこと」である", id: "Langkah awal dari PDCA dan OODA adalah mendengarkan keluhan atasan", ne: "दुवै विधिको पहिलो काम हाकिमको गुनासो सुन्नु हो" },
        { ja: "OODAループを行えば、現場で施工計画書を作成する必要は完全になくなる", id: "Jika memakai OODA Loop, kontraktor tidak perlu lagi membuat dokumen rencana kerja", ne: "OODA लुप प्रयोग गरेपछि निर्माण कार्यको कुनै योजना बनाउनै पर्दैन" }
      ],
      answer: 0,
      expJa: "【テキスト P.37参照】PDCAは施工計画に基づき計画（目標設定）から入って徐々に良くしていくのに適し、OODAは目の前の想定外の変化を観察（生データ収集）して即座に対応するのに適しています。",
      expId: "PDCA berorientasi pada target rencana jangka panjang, sedangkan OODA berorientasi pada pengamatan real-time untuk keputusan cepat di lapangan.",
      expNe: "PDCA योजनाबद्ध कामलाई क्रमशः उत्कृष्ट बनाउन काम लाग्छ भने OODA कार्यस्थलमा अचानक आउने समस्या तत्काल समाधान गर्न काम लाग्छ।"
    },
    {
      cat: "第2章 安全管理体制（P.37）",
      q: "<ruby>労働安全衛生法<rt>ろうどうあんぜんえいせいほう</rt></ruby>において、**「<ruby>安全管理者<rt>あんぜんかんりしゃ</rt></ruby>」および「<ruby>衛生管理者<rt>えいせいかんりしゃ</rt></ruby>」を<ruby>選任<rt>せんにん</rt></ruby>することが<ruby>義務<rt>ぎむ</rt></ruby>づけられている<ruby>事業場<rt>じぎょうば</rt></ruby>の<ruby>規模<rt>きぼ</rt></ruby>**はどれですか。",
      q_id: "Berapa batas jumlah pekerja di tempat kerja yang WAJIB menunjuk Petugas Keselamatan (Anzen Kanrisha) dan Petugas Higiene (Eisei Kanrisha)?",
      q_ne: "औद्योगिक सुरक्षा तथा स्वास्थ्य ऐन अनुसार कति जना कामदार भएको कार्यस्थलमा 'सुरक्षा प्रबन्धक' र 'स्वास्थ्य प्रबन्धक' नियुक्त गर्न अनिवार्य गरिएको छ?",
      options: [
        { ja: "常時50人以上", id: "50 orang atau lebih", ne: "५० जना वा सोभन्दा बढी" },
        { ja: "常時10人以上", id: "10 orang atau lebih", ne: "१० जना वा सोभन्दा बढी" },
        { ja: "常時100人以上", id: "100 orang atau lebih", ne: "१०० जना वा सोभन्दा बढी" },
        { ja: "常時300人以上", id: "300 orang atau lebih", ne: "३०० जना वा सोभन्दा बढी" }
      ],
      answer: 0,
      expJa: "【テキスト P.37参照】労働安全衛生法では、常時50人以上の労働者を使用する事業場において、安全管理者および衛生管理者の選任が義務付けられています。建設業では職長が兼任することも多くあります。",
      expId: "UU K3 Jepang mewajibkan penunjukan Petugas Keselamatan dan Higiene untuk proyek/tempat kerja dengan 50 pekerja atau lebih.",
      expNe: "नियमित ५० जना वा सोभन्दा बढी कामदार कार्यरत भएको कार्यस्थलमा सुरक्षा तथा स्वास्थ्य प्रबन्धक तोक्नु कानुनी रूपमा अनिवार्य छ।"
    },
    {
      cat: "第2章 安全ミーティング（P.39）",
      q: "毎日の「安全朝礼」の後に行われる「**安全ミーティング**」において、職長が作業員に対して行う内容として**最も適切なもの**はどれですか。",
      q_id: "Manakah tindakan yang PALING TEPAT dilakukan oleh Shokucho kepada para pekerjanya saat 'Safety Meeting' harian setelah apel pagi?",
      q_ne: "बिहानी सुरक्षा बैठकपछि आफ्नो टोलीको 'सुरक्षा बैठक' मा शोकुचोले कामदारहरूलाई गराउनुपर्ने सबैभन्दा उपयुक्त काम कुन हो?",
      options: [
        { ja: "安全指示書の内容伝達、服装や健康状態の確認、その日の作業に対する危険予知（KY）活動の実施", id: "Menyampaikan instruksi keselamatan, memeriksa seragam/APD dan kesehatan, serta melakukan prediksi bahaya (KY)", ne: "सुरक्षा निर्देशन सुनाउने, कामदारको लुगा/सुरक्षा सामग्री र स्वास्थ्य जाँच्ने, तथा त्यस दिनको कामको खतरा अनुमान (KY) गर्ने" },
        { ja: "無駄話だけをして時間を潰し、すぐに危険予知を行わずに解散させる", id: "Hanya mengobrol santai membuang waktu lalu membubarkan tanpa KY", ne: "गफ गरेर समय बिताउने र खतरा अनुमान नगरी काममा पठाउने" },
        { ja: "体調が悪そうな作業員がいても見て見ぬふりをして作業場所に行かせる", id: "Membiarkan pekerja yang tampak sakit tetap bekerja tanpa diperiksa", ne: "बिरामी जस्तो देखिने कामदारलाई नदेखे जस्तो गरी काममा पठाउने" },
        { ja: "当日の作業場所や作業手順を教えずに各自の思いつきで作業させる", id: "Membiarkan pekerja bekerja sesuka hati tanpa memberi tahu lokasi dan prosedur kerja", ne: "काम गर्ने ठाउँ र प्रक्रिया नबताई कामदारलाई आफ्नै मनखुसीले काम गर्न दिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.39参照】安全ミーティングでは、①安全指示書の内容（時間・場所・危険対策）の伝達、②作業員の服装・健康状態の確認、③当日の作業に対する危険予知（KY）活動を行います。",
      expId: "Safety meeting tim meliputi pengarahan lembar instruksi K3, cek seragam/kebugaran, dan diskusi identifikasi bahaya (KY).",
      expNe: "सुरक्षा बैठकमा त्यस दिनको कामको जोखिम छलफल (KY), सुरक्षा उपकरणको जाँच र कामदारको स्वास्थ्य अवस्था जाँच गर्नुपर्छ।"
    },
    {
      cat: "第2章 危険箇所の見える化（P.40）",
      q: "現場の安全管理における「**危険箇所の見える化（みえるか）**」の具体例として、**テキストに記載されているもの**はどれですか。",
      q_id: "Manakah contoh konkret 'Visualisasi Area Bahaya' (Mieruka) yang disebutkan secara jelas dalam buku panduan?",
      q_ne: "कार्यस्थलमा जोखिम न्यूनीकरण गर्न 'खतरा भएको ठाउँ सबैले देख्ने गरी प्रष्ट पार्ने (मिएरुका)' को पाठ्यपुस्तकमा उल्लेख उदाहरण कुन हो?",
      options: [
        { ja: "カラーコーンでのエリア色分けや、墜落制止用器具のフックを2丁掛けすべき区間への赤色テープ表示", id: "Membedakan warna cone pembatas area, serta menandai zona wajib double lanyard (2 kait) dengan isolasi merah", ne: "कलर कोनले क्षेत्र छुट्याउने र हार्नेसको दुईवटै हुक (२-चोगाके) अनिवार्य अड्काउनुपर्ने ठाउँमा रातो टेप टाँसेर देखाउने" },
        { ja: "危険な開口部があっても誰も気づかないようにベニヤ板で隠しておくこと", id: "Menutupi lubang bahaya dengan triplek polos tanpa tulisan peringatan", ne: "खतरा भएको प्वाललाई कुनै चेतावनी बिना नै सामान्य काठले छोपेर राख्ने" },
        { ja: "立ち入り禁止エリアのロープやコーンをすべて取り外して通りやすくすること", id: "Melepas tali dan cone di area terlarang agar pekerja bebas melintas", ne: "निषेधित क्षेत्रको डोरी र कोन हटाएर मानिसलाई हिँड्न सजिलो बनाउने" },
        { ja: "重機の死角に作業員が自由に入れるよう安全柵を設置しないこと", id: "Tidak memasang pagar pengaman agar pekerja bebas masuk ke area titik buta alat berat", ne: "क्रेन वा मेसिनको नदेखिने कुनामा मानिस छिर्न रोक्ने बार नलगाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.40参照】危険箇所は見ただけで分かる「見える化」が極めて有効です。コーンによる色分けや、フルハーネスのフックを2丁掛けすべき区間に「赤色テープ」を表示する事例があります。",
      expId: "Mieruka bahaya dilakukan dengan kode warna cone dan penempelan pita merah pada area yang wajib memasang dua kait harness.",
      expNe: "खतरा देखिने बनाउन रङ अनुसार कोन राख्ने र हार्नेसका दुवै हुक अड्काउनुपर्ने ठाउँमा रातो टेप लगाएर प्रष्ट पारिन्छ।"
    },
    {
      cat: "第2章 事故発生時の緊急措置（P.41〜42）",
      q: "万が一、現場で機械による人身事故や災害が発生した際、**職長が「最優先」で取るべき緊急措置**として正しいものはどれですか。",
      q_id: "Jika terjadi kecelakaan kerja akibat mesin di proyek, tindakan darurat apakah yang WAJIB diambil Shokucho dengan 'PRIORITAS PALING PERTAMA'?",
      q_ne: "यदि कार्यस्थलमा मेसिनबाट कुनै कामदार घाइते भएमा शोकुचोले 'सबैभन्दा पहिले' गर्नुपर्ने आपतकालीन कार्य कुन हो?",
      options: [
        { ja: "人命尊重を最優先とし、直ちに機械を非常停止して被災者の救出・救命処置（AED・心肺蘇生等）を行う", id: "Mengutamakan nyawa manusia di atas segalanya, segera matikan darurat mesin, selamatkan korban, dan beri P3K/AED", ne: "मानव जीवनको रक्षा पहिलो प्राथमिकतामा राखी, तुरुन्त मेसिन बन्द गर्ने, घाइतेको उद्धार गर्ने र प्राथमिक उपचार (AED आदि) गर्ने" },
        { ja: "元請や会社に怒られないように、まず事故を隠蔽するための言い訳を考える", id: "Mencari alasan pembelaan diri terlebih dahulu agar tidak dimarahi kantor pusat", ne: "हाकिमको गाली खाइन्छ भनेर दुर्घटना लुकाउन बहाना सोच्न थाल्ने" },
        { ja: "機械を動かしたまま、現場から作業員全員を放置して一人で逃げ出す", id: "Membiarkan mesin tetap berputar dan lari sendirian meninggalkan pekerja lain", ne: "मेसिन चल्न दिएर कामदारलाई अलपत्र छोडी आफू एक्लै भाग्ने" },
        { ja: "被災者に声をかけず、予定工期に間に合わせるために他の作業を続行させる", id: "Mengabaikan korban dan menyuruh pekerja lain terus bekerja mengejar jadwal", ne: "घाइतेलाई बेवास्ता गरी कामको म्याद सक्न अरूलाई काम गरिरहन दबाब दिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.41〜42参照】事故時は人命尊重が最優先です。機械の非常停止、電源遮断、被災者の救助と心肺蘇生やAED等の救命処置を行い、二次災害の恐れがあれば全員を退避させます。",
      expId: "Tindakan darurat pertama adalah mengutamakan nyawa: segera tekan tombol stop darurat, selamatkan korban, dan lakukan P3K/CPR.",
      expNe: "दुर्घटनामा मानवीय जीवनको रक्षा सबैभन्दा माथि हुन्छ: तुरुन्त मेसिन बन्द गर्ने, घाइतेलाई निकाल्ने र तुरुन्त सिपिआर वा AED लगाउने।"
    },
    {
      cat: "第2章 事故後の原因究明（P.42〜43）",
      q: "事故発生後に再発防止策を立てるための「**現場の保存と災害調査**」について、**正しい記述**はどれですか。",
      q_id: "Manakah pernyataan yang BENAR mengenai 'Pelestarian TKP dan Investigasi Kecelakaan' untuk mencegah musibah serupa terulang?",
      q_ne: "दुर्घटना दोहोरिन नदिन गरिने 'घटनास्थल सुरक्षित राख्ने र दुर्घटना अनुसन्धान' सम्बन्धी कुन भनाइ सही छ?",
      options: [
        { ja: "事故原因を正確に究明できるよう現場をできるだけ保存し、先入観を持たずに「人・物・作業・管理」の事実を確認・分析する", id: "Pertahankan kondisi TKP agar penyebabnya dapat diselidiki, lalu periksa fakta orang, alat, metode, dan manajemen tanpa prasangka", ne: "कारण पत्ता लगाउन घटनास्थललाई जस्ताको तस्तै जोगाएर राख्ने र कुनै पूर्वाग्रह नराखी मानिस, वस्तु, काम र व्यवस्थापनको तथ्य केलाउने" },
        { ja: "元請に見つかる前に破損した機械や材料をすぐに片付けて処分する", id: "Segera membersihkan dan membuang mesin yang rusak sebelum dilihat kontraktor utama", ne: "इन्जिनियरले देख्नुअघि नै फुटेका मेसिन र प्रमाणहरू तुरुन्त सफा गरेर फालिदिने" },
        { ja: "事故の原因を調査せず、すべて被災した作業員個人の不注意のせいにして終わらせる", id: "Tidak menginvestigasi penyebab dan menutup kasus dengan menyalahkan kecerobohan korban", ne: "कुनै छानबिन नगरी सबै दोष घाइते कामदारको असावधानीलाई दिएर कुरा टुंग्याउने" },
        { ja: "調査には時間がかかるため、原因が分からなくても翌日から全く同じ手順で危険作業を再開する", id: "Langsung melanjutkan pekerjaan berbahaya keesokan harinya dengan cara yang sama tanpa tahu penyebabnya", ne: "छानबिन नगरी भोलिपल्टबाट फेरि त्यही खतरापूर्ण काम पहिलेकै तरिकाले सुरु गर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.42〜43参照】災害原因究明のため「現場の状態をできるだけ保存」します。調査時はOODAと同様に先入観を捨て、「人」「物」「作業」「管理」の視点から客観的事実を分析して対策を立てます。",
      expId: "Kondisi lokasi harus dipertahankan untuk penyelidikan objektif terhadap 4 aspek: Orang, Barang/Alat, Metode Kerja, dan Manajemen.",
      expNe: "दुर्घटनाको वास्तविक कारण पत्ता लगाउन घटनास्थल सुरक्षित राख्नुपर्छ र मानिस, सामान, काम र व्यवस्थापनलाई निष्पक्ष रूपमा छानबिन गर्नुपर्छ।"
    }
  ]
};
