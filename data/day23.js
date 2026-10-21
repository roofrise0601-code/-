const CURRENT_QUIZ_DATA = {
  title: "Day 23：リスクアセスメントと<ruby>低減措置<rt>ていげんそち</rt></ruby>（テキスト P.79〜86）",
  key: "score_gakka4_23",
  passScore: 70,
  questions: [
    {
      cat: "第3章 リスクアセスメントとは（P.79〜80）",
      q: "「**リスクアセスメント**」の本来の目的として、テキストに記載されている最も適切な説明はどれですか。",
      q_id: "Manakah penjelasan yang PALING TEPAT mengenai tujuan mendasar dari 'Risk Assessment' di proyek konstruksi?",
      q_ne: "पाठ्यपुस्तक अनुसार निर्माण कार्यस्थलमा 'जोखिम मूल्यांकन (रिस्क एसेसमेन्ट)' गर्नुको मूल उद्देश्य कुन हो?",
      options: [
        { ja: "事故や災害が発生する前に現場に潜む危険性・有害性を見つけ出し、事前に防止策を講じてリスクを除去・低減すること", id: "Menemukan potensi bahaya SEBELUM kecelakaan terjadi, lalu mengambil tindakan pencegahan sejak dini untuk menghilangkan/menurunkan risiko", ne: "दुर्घटना हुनुभन्दा अगाडि नै कार्यस्थलमा लुकेका जोखिमहरू पत्ता लगाउने र पहिल्यै रोकथामका उपाय अपनाएर जोखिम हटाउने वा घटाउने" },
        { ja: "重大な事故が発生した後に、被災した作業員に責任を負わせるための証拠を集めること", id: "Mengumpulkan bukti untuk menyalahkan pekerja setelah kecelakaan fatal terjadi", ne: "दुर्घटना भएपछि घाइते कामदारलाई दोषी प्रमाणित गर्न प्रमाण बटुल्ने" },
        { ja: "工事が完成した後に、市役所に提出する書類の枚数を増やすこと", id: "Menambah jumlah lembar dokumen formalitas untuk diserahkan ke balai kota", ne: "काम सकिएपछि नगरपालिकामा बुझाउने कागजको संख्या बढाउने" },
        { ja: "元請の現場監督の仕事を手伝い、残業代を多く稼ぐこと", id: "Membantu tugas pengawas utama demi menambah uang lembur semata", ne: "ओभरटाइम भत्ता बढाउन इन्जिनियरको काम सघाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.79〜80参照】従来の後追い型対策（事故原因を調べて再発防止）と異なり、事故が起きる前に危険要因を先取りして低減措置を行う『先取り・予防の安全手法』です。労働安全衛生法で努力義務化されています。",
      expId: "Risk assessment berorientasi pencegahan dini (preventif), bukan menunggu musibah terjadi baru mencari penyebabnya.",
      expNe: "दुर्घटना भएपछि कारण खोज्ने पुरानो तरिका नभई, दुर्घटना हुनुअघि नै जोखिम खोजेर रोकथाम गर्ने अग्रिम सुरक्षा विधि हो।"
    },
    {
      cat: "第3章 基本手順（P.80）",
      q: "リスクアセスメントを進める「**基本的な4つのステップ**」の順序として、正しいものはどれですか。",
      q_id: "Manakah urutan 4 langkah dasar yang BENAR dalam menjalankan Risk Assessment?",
      q_ne: "जोखिम मूल्यांकन अघि बढाउने '४ आधारभूत चरणहरू' को सही क्रम कुन हो?",
      options: [
        { ja: "Step1 危険性・有害性の特定 ➔ Step2 リスクの見積り ➔ Step3 優先度の設定・措置の検討 ➔ Step4 低減措置の実施", id: "Step 1: Identifikasi Bahaya -> Step 2: Penaksiran Risiko -> Step 3: Penentuan Prioritas & Solusi -> Step 4: Pelaksanaan Tindakan", ne: "चरण १: जोखिम पहिचान -> चरण २: जोखिमको नाप (हिसाब) -> चरण ३: प्राथमिकता र उपाय तय -> चरण ४: न्यूनीकरण उपाय कार्यान्वयन" },
        { ja: "Step1 リスクの見積り ➔ Step2 危険性の特定 ➔ Step3 措置の実施 ➔ Step4 優先度の設定", id: "Penaksiran -> Identifikasi -> Pelaksanaan -> Prioritas", ne: "नाप -> पहिचान -> कार्यान्वयन -> प्राथमिकता" },
        { ja: "Step1 低減措置の実施 ➔ Step2 リスクの見積り ➔ Step3 危険性の特定 ➔ Step4 優先度の設定", id: "Pelaksanaan -> Penaksiran -> Identifikasi -> Prioritas", ne: "कार्यान्वयन -> नाप -> पहिचान -> प्राथमिकता" },
        { ja: "Step1 優先度の設定 ➔ Step2 低減措置の実施 ➔ Step3 リスクの見積り ➔ Step4 危険性の特定", id: "Prioritas -> Pelaksanaan -> Penaksiran -> Identifikasi", ne: "प्राथमिकता -> कार्यान्वयन -> नाप -> पहिचान" }
      ],
      answer: 0,
      expJa: "【テキスト P.80参照】リスクアセスメントは、①危険性・有害性の特定（ハザード抽出）➔ ②見積り（数値化）➔ ③優先度設定と対策内容の検討 ➔ ④低減措置の実施 の4ステップで進めます。",
      expId: "Urutan wajib: Identifikasi sumber bahaya -> Nilai tingkat risiko secara kuantitatif -> Tentukan prioritas -> Laksanakan mitigasi.",
      expNe: "पहिले जोखिम पहिचान गर्ने, अनि हिसाब निकाल्ने, त्यसपछि प्राथमिकता छानेर समाधान गर्ने उपाय लागू गरिन्छ।"
    },
    {
      cat: "第3章 全員参加の意義（P.80〜81）",
      q: "リスクアセスメントを「職長のもとで、現場の全作業員が参加して行うべき理由」として、**最も適切な記述**はどれですか。",
      q_id: "Mengapa Risk Assessment WAJIB dilakukan bersama dengan melibatkan seluruh pekerja di bawah pimpinan Shokucho?",
      q_ne: "शोकुचोको नेतृत्वमा कार्यस्थलका सबै कामदार सहभागी भएर जोखिम मूल्यांकन गर्नुपर्ने सबैभन्दा उपयुक्त कारण कुन हो?",
      options: [
        { ja: "職場全体でリスクに対する共通認識を持ち、安全への感受性が高まり、決められたルールを守る理由が明確になるため", id: "Membangun kesadaran bahaya bersama, meningkatkan kepekaan K3, dan memahami alasan mengapa aturan wajib ditaati", ne: "सबै कामदारमा जोखिमबारे समान बुझाइ हुने, सुरक्षा चेतना बढ्ने र नियम किन मान्नुपर्छ भन्ने कारण स्पष्ट हुने हुनाले" },
        { ja: "職長が一人で考えるのが面倒なので、作業員に仕事を丸投げするため", id: "Agar mandor tidak repot berpikir sendirian dan menyerahkan beban kerja ke bawahan", ne: "शोकुचोले सोच्न अल्छी गरेर कामदारलाई जिम्मा पन्छाउनका लागि" },
        { ja: "作業員に発言させず、職長の個人的な意見だけを強制的に押し付けるため", id: "Untuk membungkam pekerja dan memaksakan pendapat pribadi mandor", ne: "कामदारलाई बोल्न नदिई शोकुचोको व्यक्तिगत आदेश जबर्जस्ती लाद्नका लागि" },
        { ja: "朝礼の時間をできるだけ長く引き延ばして作業時間を減らすため", id: "Untuk memperlama briefing pagi agar jam kerja lapangan berkurang", ne: "बिहानी बैठक लम्ब्याएर काम गर्ने समय घटाउनका लागि" }
      ],
      answer: 0,
      expJa: "【テキスト P.80〜81参照】全員が参加することでリスクを共有し、「守るべき決め事の理由」が作業員自身に腹落ちするため、ルール違反を防ぎ安全感受性を高めることができます。",
      expId: "Partisipasi semua pekerja memastikan semua orang paham 'mengapa aturan itu ada', sehingga tidak timbul pelanggaran sepele.",
      expNe: "सबै सहभागी भएमा खतरा किन छ र नियम किन पालना गर्नुपर्छ भन्ने कुरा सबैले बुझ्छन् र दुर्घटनाबाट बच्छन्।"
    },
    {
      cat: "第3章 リスクポイントの計算（P.82〜83）",
      q: "リスクの見積りにおいて、「**危険の発生頻度：2点**」「**災害になる可能性：4点**」「**災害の重大性：6点**」と見積もられた場合、**合計のリスクポイント**は何点ですか。",
      q_id: "Berapa 'Poin Risiko Total' jika hasil estimasi adalah: Frekuensi (2 poin), Kemungkinan (4 poin), dan Tingkat Keparahan (6 poin)?",
      q_ne: "जोखिमको हिसाब गर्दा 'घटनाको दर (फ्रिक्वेन्सी): २ नम्बर', 'दुर्घटना हुने सम्भावना: ४ नम्बर', र 'चोटको गम्भीरता: ६ नम्बर' भएमा 'कुल रिस्क पोइन्ट' कति हुन्छ?",
      options: [
        { ja: "12点（2 ＋ 4 ＋ 6）", id: "12 poin (2 + 4 + 6)", ne: "१२ नम्बर (२ + ४ + ६)" },
        { ja: "48点（2 × 4 × 6）", id: "48 poin (perkalian)", ne: "४८ नम्बर" },
        { ja: "8点", id: "8 poin", ne: "८ नम्बर" },
        { ja: "6点", id: "6 poin", ne: "६ नम्बर" }
      ],
      answer: 0,
      expJa: "【テキスト P.82〜83参照】テキストの計算例では、頻度・可能性・重大性の各配点を合計してリスクポイントを求めます（2点 ＋ 4点 ＋ 6点 ＝ 12点）。",
      expId: "Poin risiko dihitung dengan menjumlahkan skor: Frekuensi (2) + Kemungkinan (4) + Keparahan (6) = 12 poin.",
      expNe: "पाठ्यपुस्तकको विधि अनुसार: २ + ४ + ६ = १२ कुल रिस्क पोइन्ट हुन्छ।"
    },
    {
      cat: "第3章 リスクレベルの判定（P.83〜84）",
      q: "リスク評価表（表3-4）において、**リスクポイントが「14点」**であった場合の**「リスクレベル」とその内容**として正しいものはどれですか。",
      q_id: "Berdasarkan Tabel 3-4, apakah 'Level Risiko' dan kategorinya jika total poin risiko bernilai '14 poin'?",
      q_ne: "तालिका ३-४ अनुसार यदि रिस्क पोइन्ट '१४ नम्बर' आयो भने 'जोखिमको स्तर (लेभल)' र अवस्था कुन हो?",
      options: [
        { ja: "レベルIV（重大な問題がある：13〜20点）", id: "Level IV (Ada masalah berat / kritis: 13-20 poin)", ne: "लेभल IV (अत्यन्त गम्भीर समस्या छ: १३ देखि २० नम्बर)" },
        { ja: "レベルIII（問題がある：9〜12点）", id: "Level III (Ada masalah: 9-12 poin)", ne: "लेभल III (समस्या छ: ९ देखि १२ नम्बर)" },
        { ja: "レベルII（多少の問題がある：6〜8点）", id: "Level II (Sedikit masalah: 6-8 poin)", ne: "लेभल II (सामान्य समस्या: ६ देखि ८ नम्बर)" },
        { ja: "レベルI（問題はほとんどない：3〜5点）", id: "Level I (Hampir tidak ada masalah: 3-5 poin)", ne: "लेभल I (कुनै समस्या छैन: ३ देखि ५ नम्बर)" }
      ],
      answer: 0,
      expJa: "【テキスト P.83〜84参照】配点基準では、13〜20点は「レベルIV（重大な問題がある）」に分類されます。死亡や重症につながる極めて危険な状態です。",
      expId: "Skor 14 masuk dalam rentang 13-20, yaitu 'Level IV' (Kategori Bahaya Kritis / Berat).",
      expNe: "१४ नम्बर १३ देखि २० को दायरामा पर्ने भएकाले यो 'लेभल IV' (अत्यन्त गम्भीर समस्या) हो।"
    },
    {
      cat: "第3章 レベルIVへの対応基準（P.84〜85）",
      q: "リスクレベルが最も高い**「レベルIV（重大な問題がある）」**と判定された作業に対して、テキストが定めている対応の進め方はどれですか。",
      q_id: "Bagaimanakah tindakan wajib yang harus diambil terhadap pekerjaan yang dinilai masuk 'Level IV' (Bahaya Kritis)?",
      q_ne: "सबैभन्दा खतरनाक 'लेभल IV' मा परेको कामको हकमा पाठ्यपुस्तकले तोकेको अनिवार्य नियम कुन हो?",
      options: [
        { ja: "リスク低減措置を「直ちに行う」。低減措置を行うまで「作業は停止する」", id: "Tindakan mitigasi harus SEGERA dilakukan saat itu juga. Pekerjaan WAJIB DIHENTIKAN hingga tindakan selesai", ne: "न्यूनीकरण उपाय 'तुरुन्तै गर्ने'। उपाय सम्पन्न नभएसम्म 'काम पूर्ण रूपमा रोक्ने'" },
        { ja: "来月まで特に何もしないで、そのまま危険作業を続けさせる", id: "Tidak melakukan apa pun dan membiarkan pekerjaan terus berjalan sampai bulan depan", ne: "अर्को महिनासम्म केही नगरी काम जारी राख्ने" },
        { ja: "作業員に「気をつけてね」と一声かけるだけで作業は止めない", id: "Hanya berpesan 'hati-hati ya' tanpa menghentikan kegiatan", ne: "'होसियार होऊ' भनेर मात्र काम जारी राख्न दिने" },
        { ja: "危険を隠すために安全掲示板のポスターを剥がす", id: "Mencopot papan informasi agar bahayanya tidak diketahui orang", ne: "खतरा लुकाउन सूचना पाटी उप्काउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.84〜85参照】レベルIVは『リスク低減措置を直ちに行う。低減措置を行うまで作業は停止する』と定められています。人命を守るための絶対原則です。",
      expId: "Level IV adalah kondisi darurat: pekerjaan wajib langsung STOP sampai tindakan perbaikan fisik selesai diterapkan.",
      expNe: "लेभल IV मा परेको काम तुरुन्त रोक्नुपर्छ। सुरक्षा उपाय पूरा नभएसम्म काम सुरु गर्न पाइँदैन।"
    },
    {
      cat: "第3章 低減措置の優先順位（P.85〜86）",
      q: "リスク低減措置を検討する際、守らなければならない**「優先順位（図3-3）」の正しい順序**はどれですか。",
      q_id: "Manakah URUTAN PRIORITAS yang benar dalam menerapkan tindakan penurunan risiko (Hierarki Kontrol Risiko)?",
      q_ne: "जोखिम न्यूनीकरण उपायहरू लागू गर्दा पालना गर्नुपर्ने 'प्राथमिकताको सही क्रम (चित्र ३-३)' कुन हो?",
      options: [
        { ja: "①本質的対策 ➔ ②工学的対策 ➔ ③管理的対策 ➔ ④個人用保護具使用", id: "(1) Tindakan Hakiki (Eliminasi) -> (2) Rekayasa Teknik -> (3) Manajemen/Administrasi -> (4) Penggunaan APD", ne: "(१) मूलभूत उपाय (खतरा नै हटाउने) -> (२) प्राविधिक/इन्जिनियरिङ उपाय -> (३) व्यवस्थापकीय उपाय -> (४) व्यक्तिगत सुरक्षा सामग्री (APD) प्रयोग" },
        { ja: "①個人用保護具使用 ➔ ②管理的対策 ➔ ③工学的対策 ➔ ④本質的対策", id: "(1) APD -> (2) Administrasi -> (3) Rekayasa -> (4) Eliminasi", ne: "(१) APD -> (२) व्यवस्थापन -> (३) इन्जिनियरिङ -> (४) मूलभूत" },
        { ja: "①管理的対策 ➔ ②個人用保護具使用 ➔ ③本質的対策 ➔ ④工学的対策", id: "(1) Administrasi -> (2) APD -> (3) Eliminasi -> (4) Rekayasa", ne: "(१) व्यवस्थापन -> (२) APD -> (३) मूलभूत -> (४) इन्जिनियरिङ" },
        { ja: "優先順位はなく、最も費用のかからない保護具使用だけを行えばよい", id: "Tidak ada prioritas, cukup gunakan APD termurah saja", ne: "कुनै क्रम छैन, सस्तो सामान लगाए पुग्छ" }
      ],
      answer: 0,
      expJa: "【テキスト P.85〜86参照】低減措置は根本的な原因除去から順に検討します。①本質的対策 ➔ ②工学的対策（防護柵等）➔ ③管理的対策（手順書・教育等）➔ ④個人用保護具使用（手袋・マスク等）の順です。",
      expId: "Hierarki K3 wajib: Eliminasi sumber bahaya -> Rekayasa teknik (pagar/mesin aman) -> Kontrol administrasi (SOP) -> APD (langkah terakhir).",
      expNe: "सबैभन्दा पहिले खतरा हटाउने (मूलभूत), नसके बार लगाउने (इन्जिनियरिङ), अनि नियम सिकाउने (व्यवस्थापन) र अन्त्यमा मात्र पञ्जा/मास्क (APD) प्रयोग गरिन्छ।"
    },
    {
      cat: "第3章 低減措置：本質的対策（P.86）",
      q: "低減措置の最優先である「**本質的対策（ほんしつてきたいさく）**」に該当する具体例はどれですか。",
      q_id: "Manakah contoh konkret yang termasuk dalam 'Tindakan Hakiki / Eliminasi' (Honshitsuteki Taisaku)?",
      q_ne: "सबैभन्दा पहिलो प्राथमिकताको 'मूलभूत उपाय' मा पर्ने कार्यस्थलको सही उदाहरण कुन हो?",
      options: [
        { ja: "危険作業そのものを廃止したり、有害性の高い化学材料を無害で安全な材料に変更すること", id: "Meniadakan tugas berbahaya itu sendiri atau mengganti bahan kimia berbahaya dengan bahan yang aman dan tidak beracun", ne: "खतरनाक काम नै खारेज गर्ने, वा धेरै विषालु केमिकललाई सुरक्षित र हानिरहित सामग्रीले बदल्ने" },
        { ja: "機械のまわりに防護柵を設置して人が近寄れないようにすること", id: "Memasang pagar pengaman di sekeliling mesin", ne: "मेसिन वरिपरि सुरक्षा बार लगाउने" },
        { ja: "作業マニュアルを新しく印刷して作業員に配布すること", id: "Mencetak dan membagikan buku manual kerja baru", ne: "नयाँ कार्यविधि छापेर कामदारलाई बाँड्ने" },
        { ja: "作業員に厚手の革手袋を着用させること", id: "Menyuruh pekerja memakai sarung tangan kulit tebal", ne: "कामदारलाई बाक्लो छालाको पञ्जा लगाउन लगाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.86参照】本質的対策とは、危険な作業をやらなくて済むように作業そのものを廃止・変更したり、危険性・有害性の高い材料を安全な材料に変える根本的な措置です。",
      expId: "Honshitsuteki taisaku adalah menghilangkan risiko pada sumbernya, seperti menghapus pekerjaan berisiko atau memakai bahan non-toksik.",
      expNe: "'मूलभूत उपाय' भन्नाले खतराको स्रोत नै जरैदेखि उखेल्नु हो, जस्तै काम नै रद्द गर्नु वा सुरक्षित सामग्री प्रयोग गर्नु।"
    },
    {
      cat: "第3章 低減措置：工学的対策（P.86）",
      q: "低減措置の第2優先である「**工学的対策（こうがくてきたいさく）**」に該当するものはどれですか。",
      q_id: "Manakah yang termasuk dalam 'Tindakan Rekayasa Teknik' (Kougakuteki Taisaku)?",
      q_ne: "दोस्रो प्राथमिकताको 'प्राविधिक/इन्जिनियरिङ उपाय' मा पर्ने कुन हो?",
      options: [
        { ja: "機械・設備への防護柵の設置、安全カバーの取り付け、安定した作業台の使用などの物的対策", id: "Tindakan fisik/teknik seperti memasang pagar pengaman mesin, kap pelindung bilah, dan platform kerja yang stabil", ne: "मेसिनमा सुरक्षा बार लगाउने, कभर हाल्ने, र बलियो कार्य-प्लेटफर्म प्रयोग गर्ने जस्ता भौतिक उपायहरू" },
        { ja: "危険な作業手順を一切変えずにそのまま放置すること", id: "Membiarkan prosedur berbahaya tanpa diubah sama sekali", ne: "खतरनाक प्रक्रियालाई केही नगरी त्यतिकै छोड्ने" },
        { ja: "作業員全員に「各自注意して作業するように」と口頭で指示すること", id: "Hanya berpesan lisan agar masing-masing orang berhati-hati sendiri", ne: "कामदारलाई 'आफैं विचार गरेर काम गर' भनी मौखिक अह्राउने" },
        { ja: "防じんマスクや耳栓を購入して作業員に配ること", id: "Membeli dan membagikan masker debu dan sumbat telinga", ne: "मास्क र कानको ठेडी किनेर बाँड्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.86参照】工学的対策とは、防護柵・安全カバーの設置、局所排気装置、作業台の使用など、設備や環境に対する「物的な安全対策」を指します。",
      expId: "Kougakuteki taisaku adalah rekayasa fisik/mekanis pada alat atau lingkungan, seperti pagar mesin dan platform perancah kokoh.",
      expNe: "'इन्जिनियरिङ उपाय' भन्नाले मेसिनमा बार, कभर वा धुवाँ तान्ने भेन्टिलेसन जस्ता भौतिक संरचना बनाउनु हो।"
    },
    {
      cat: "第3章 低減措置：管理的対策（P.86）",
      q: "低減措置の第3優先である「**管理的対策（かんりてきたいさく）**」に該当するものはどれですか。",
      q_id: "Manakah yang termasuk dalam kategori 'Tindakan Administratif/Manajemen' (Kanriteki Taisaku)?",
      q_ne: "तेस्रो प्राथमिकताको 'व्यवस्थापकीय/प्रशासनिक उपाय' मा पर्ने कुन हो?",
      options: [
        { ja: "安全作業マニュアル（手順書）の整備、立ち入り禁止の表示、作業員への教育訓練の実施", id: "Penyusunan SOP/manual kerja aman, rambu larangan melintas, serta pelatihan dan edukasi pekerja", ne: "सुरक्षित कार्यविधि पुस्तिका बनाउने, निषेधित क्षेत्रको सूचना टाँस्ने र कामदारलाई तालिम दिने" },
        { ja: "防護メガネやヘルメットを着用させること", id: "Mewajibkan pemakaian kacamata pelindung dan helm", ne: "सुरक्षा चस्मा र हेल्मेट लगाउन लगाउने" },
        { ja: "危険な機械そのものを撤去して手作業にすること", id: "Melenyapkan mesin berbahaya sama sekali", ne: "खतरनाक मेसिन नै हटाएर हातले काम गर्ने" },
        { ja: "機械の回転部に金属製の頑丈なカバーを取り付けること", id: "Memasang pelindung baja pada bagian mesin yang berputar", ne: "मेसिनको घुम्ने भागमा बलियो फलामे कभर हाल्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.86参照】管理的対策とは、作業マニュアルの整備、立ち入り禁止措置、KY活動、資格者の配置、教育訓練など「運用やルールによる対策」を指します。",
      expId: "Kanriteki taisaku adalah pengendalian berbasis aturan, SOP, rambu peringatan, dan pelatihan kepada para pekerja.",
      expNe: "'व्यवस्थापकीय उपाय' भन्नाले नियम, कार्यविधि पुस्तिका, चेतावनी बोर्ड र कामदारलाई दिइने तालिम हो।"
    }
  ]
};
