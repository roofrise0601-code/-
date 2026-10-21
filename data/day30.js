const CURRENT_QUIZ_DATA = {
  title: "Day 30：<ruby>本番実戦模擬試験<rt>ほんばんじっせんもぎしけん</rt></ruby> <ruby>第2弾<rt>だいにだん</rt></ruby>（20<ruby>問<rt>もん</rt></ruby>・<ruby>安全衛生<rt>あんぜんえいせい</rt></ruby>と<ruby>関係法令編<rt>かんけいほうれいへん</rt></ruby>）",
  key: "score_gakka5_30",
  passScore: 70,
  questions: [
    {
      cat: "第3章 安全衛生委員会（P.72〜73）",
      q: "労働安全衛生法において、労働者の危険防止や健康障害防止について調査審議する「**安全衛生委員会**」の設置が義務付けられる**事業場の規模**はどれですか。",
      q_id: "Berapa batas jumlah pekerja di tempat kerja proyek yang WAJIB membentuk 'Komite Keselamatan dan Kesehatan Kerja' (Anzen Eisei Iinkai)?",
      q_ne: "औद्योगिक सुरक्षा तथा स्वास्थ्य ऐन अनुसार कति जना कामदार भएको कार्यस्थलमा 'सुरक्षा तथा स्वास्थ्य समिति' गठन गर्न कानुनी रूपमा अनिवार्य छ?",
      options: [
        { ja: "常時50人以上", id: "50 orang atau lebih", ne: "५० जना वा सोभन्दा बढी" },
        { ja: "常時10人以上", id: "10 orang atau lebih", ne: "१० जना वा सोभन्दा बढी" },
        { ja: "常時20人以上", id: "20 orang atau lebih", ne: "२० जना वा सोभन्दा बढी" },
        { ja: "常時100人以上", id: "100 orangまたはそれ以上", ne: "१०० जना वा सोभन्दा बढी" }
      ],
      answer: 0,
      expJa: "【テキスト P.72〜73参照】建設業においては、事業場の労働者数が常時50人以上の場合に安全衛生委員会の設置が法律で義務付けられています。",
      expId: "UU K3 Jepang mewajibkan pembentukan Komite K3 untuk tempat kerja/kantor cabang dengan pekerja 50 orang atau lebih.",
      expNe: "नियमित ५० जना वा सोभन्दा बढी कामदार कार्यरत रहेको कार्यस्थलमा 'सुरक्षा तथा स्वास्थ्य समिति' स्थापना गर्न अनिवार्य छ।"
    },
    {
      cat: "第3章 法改正：労働時間の客観的把握（P.74）",
      q: "労働安全衛生法の改正により義務付けられた「タイムカード等の客観的な方法による労働時間の把握」について、**事業者がその記録を保存しなければならない期間**は何年間ですか。",
      q_id: "Berapa tahun masa simpan wajib bagi catatan jam kerja buruh (time card/login PC) yang dicatat secara objektif oleh pengusaha?",
      q_ne: "कामदारहरूको काम गरेको समय (टाइम कार्ड वा लगइन रेकर्ड) कम्पनीले कति वर्षसम्म सुरक्षित राख्नुपर्छ?",
      options: [
        { ja: "3年間", id: "3 tahun", ne: "३ वर्ष" },
        { ja: "1年間", id: "1 tahun", ne: "१ वर्ष" },
        { ja: "6か月間", id: "6 bulan", ne: "६ महिना" },
        { ja: "10年間", id: "10 tahun", ne: "१० वर्ष" }
      ],
      answer: 0,
      expJa: "【テキスト P.74参照】客観的な方法で把握した労働時間の状況の記録は、法改正により『3年間保存』することが義務付けられています。",
      expId: "Catatan jam kerja yang diperoleh secara objektif wajib disimpan selama 3 tahun penuh.",
      expNe: "कामदारको काम गरेको समयको रेकर्ड कम्पनीले अनिवार्य रूपमा ३ वर्षसम्म सुरक्षित राख्नुपर्छ।"
    },
    {
      cat: "第3章 法改正：医師面接指導（P.74〜75）",
      q: "長時間労働による過労死や脳・心臓疾患を防止するため、**医師による面接指導の対象となる「1か月の時間外・休日労働時間」の基準**は、従来の100時間超から何時間超に引き下げられましたか。",
      q_id: "Berapa jam batas lembur sebulan yang direvisi menjadi syarat pemeriksaan medis dokter demi mencegah kematian akibat kerja berlebihan (karoushi)?",
      q_ne: "अत्यधिक कामले हुने मृत्यु रोक्न डाक्टरसँग अनिवार्य परामर्श लिनुपर्ने 'महिनाको ओभरटाइम' कति घण्टा तोकिएको छ?",
      options: [
        { ja: "月80時間超", id: "Melebihi 80 jam sebulan", ne: "महिनामा ८० घण्टा नाघेमा" },
        { ja: "月45時間超", id: "Melebihi 45 jam sebulan", ne: "महिनामा ४५ घण्टा नाघेमा" },
        { ja: "月60時間超", id: "Melebihi 60 jam sebulan", ne: "महिनामा ६० घण्टा नाघेमा" },
        { ja: "月120時間超", id: "Melebihi 120 jam sebulan", ne: "महिनामा १२० घण्टा नाघेमा" }
      ],
      answer: 0,
      expJa: "【テキスト P.74〜75参照】脳・心臓疾患の発症リスクを考慮し、医師による面接指導の要件は従来の「月100時間超」から『月80時間超』に引き下げられました。",
      expId: "Batas waktu lembur untuk hak konseling dokter diturunkan menjadi 80 jam sebulan demi mencegah penyakit kardiovaskular.",
      expNe: "मुटु र मस्तिष्क रोगको जोखिम हुने भएकाले महिनामा ८० घण्टाभन्दा बढी ओभरटाइम गर्ने कामदारलाई डाक्टरसँग परामर्श गराउनुपर्छ।"
    },
    {
      cat: "第3章 労働災害発生の基本モデル（P.76〜77）",
      q: "休業4日以上の労働災害の約90%は、**「何と何が重なり合った瞬間」**に発生していますか。",
      q_id: "Berdasarkan analisis statistik, sekitar 90% kecelakaan kerja berat terjadi akibat bertemunya dua faktor apa secara bersamaan?",
      q_ne: "गम्भीर औद्योगिक दुर्घटनाहरूको करिब ९०% हिस्सा कुन दुईवटा कुरा एकैपटक मिल्दा हुने गर्दछ?",
      options: [
        { ja: "「不安全な状態（物）」と「不安全な行動（人）」", id: "Kondisi Tidak Aman (Barang/Alat) dan Tindakan Tidak Aman (Orang)", ne: "असुरक्षित अवस्था (सामान/भौतिक अवस्था) र असुरक्षित व्यवहार (मानिसको गल्ती)" },
        { ja: "「大雨」と「深夜作業」", id: "Hujan Lebat dan Kerja Larut Malam", ne: "ठूलो पानी र रातिको काम" },
        { ja: "「新品の工具」と「熟練職人」", id: "Alat Baru dan Tukang Ahli", ne: "नयाँ औजार र पुराना मिस्त्री" },
        { ja: "「設計図面」と「見積書」", id: "Gambar Desain dan Surat Estimasi", ne: "नक्सा र कोटेशन" }
      ],
      answer: 0,
      expJa: "【テキスト P.76〜77参照】労働災害の約9割は、機械設備の不備などの「不安全な状態（物）」と、手順無視などの「不安全な行動（人）」が同時に重なった瞬間に発生します。",
      expId: "Sekitar 90% kecelakaan kerja fatal terjadi akibat bertemunya 'kondisi fisik tidak aman' dan 'tindakan ceroboh manusia' secara bersamaan.",
      expNe: "करिब ९०% दुर्घटनाहरू 'खराब भौतिक अवस्था' र 'मानिसको लापरबाही' एकैसाथ जुध्दा हुने गर्दछ।"
    },
    {
      cat: "第3章 本質安全と機能安全（P.77〜78）",
      q: "安全対策における「**本質安全（ほんしつあんぜん）**」の考え方として、最も適切なものはどれですか。",
      q_id: "Manakah konsep yang PALING TEPAT mengenai 'Keselamatan Hakiki' (Honshitsu Anzen)?",
      q_ne: "सुरक्षाका उपायहरू मध्ये 'मूलभूत सुरक्षा (होन्शिचु आन्जेन)' को दृष्टिकोण कुन हो?",
      options: [
        { ja: "危険そのものを無くすため、危険作業を行わない選択をしたり、有害な材料を安全な材料に変更すること", id: "Meniadakan bahaya itu sendiri, seperti menghapus pekerjaan berbahaya atau mengganti bahan beracun dengan yang aman", ne: "खतराको मूल जड नै हटाउनका लागि खतरनाक काम नै नगर्ने, वा विषालु केमिकललाई सुरक्षित सामग्रीले बदल्ने" },
        { ja: "危険があっても保護具を二重に着用して無理やり作業させること", id: "Memaksa bekerja dengan memakai APD berlapis meski bahaya besar ada", ne: "खतरा भए पनि धेरै सामान लगाएर जबर्जस्ती काम गर्न लगाउने" },
        { ja: "作業員に注意を促す看板を100枚設置して済ませること", id: "Hanya memasang 100 plang peringatan tanpa mengubah apa pun", ne: "सूचना बोर्ड मात्र धेरै झुन्ड्याएर छोड्ने" },
        { ja: "事故が起きてから怪我人に手当をすること", id: "Memberi pertolongan pertama setelah kecelakaan terjadi", ne: "दुर्घटना भएपछि मात्र प्राथमिक उपचार गर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.77〜78参照】本質安全とは「危険な状態そのものを無くす・避ける」根本的な安全思想です。作業そのものを無くせない場合に安全柵等で防ぐのが機能安全です。",
      expId: "Honshitsu Anzen adalah melenyapkan bahaya dari akarnya (misal: menghapus tugas berisiko atau memakai bahan non-toksik).",
      expNe: "'होन्शिचु आन्जेन' भन्नाले खतराको स्रोत नै जरैदेखि उखेल्नु हो, जस्तै काम नै रद्द गर्नु वा सुरक्षित सामान प्रयोग गर्नु।"
    },
    {
      cat: "第3章 隔離の原則（P.78）",
      q: "機能安全の代表例である「**隔離（かくり）**」の現場での具体例として、最も適切なものはどれですか。",
      q_id: "Manakah contoh penerapan nyata di lapangan mengenai metode 'Isolasi / Pemisahan' (Kakuri)?",
      q_ne: "मानिसलाई जोखिमबाट टाढा राख्ने 'आइसोलेसन / अलग्ग्याउने (काकुरी)' विधिको कार्यस्थलको सही उदाहरण कुन हो?",
      options: [
        { ja: "重機作業エリアへの立ち入り禁止柵の設置や、機械の回転部への安全カバーの取り付け", id: "Memasang pagar batas dilarang masuk di area alat berat, serta memasang penutup kap pelindung pada bagian mesin putar", ne: "ठूला मेसिन चल्ने ठाउँमा मानिस पस्न नदिने बार लगाउने, र घुम्ने बेल्टमा सुरक्षा कभर लगाउने" },
        { ja: "誰でも自由に触れるよう、回転モーターをむき出しにしておくこと", id: "Membiarkan motor putar terbuka agar bebas disentuh siapa saja", ne: "घुमिरहेको मोटरमा कुनै कभर नलगाई खुल्ला राख्ने" },
        { ja: "開口部のまわりに安全手すりやコーンを一切置かないこと", id: "Tidak memasang pagar atau pembatas di sekitar lubang bukaan", ne: "प्वालको वरिपरि कुनै बार वा चेतावनी नराख्ने" },
        { ja: "高圧送電線のすぐ横で誘導員を置かずにクレーンを旋回させること", id: "Memutar boom crane di samping kabel tegangan tinggi tanpa petugas pemandu", ne: "उच्च भोल्टेजको तार नजिक बिना गाइड क्रेन घुमाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.78参照】「隔離」とは危険源に人を近づけないことです。立ち入り禁止柵、回転部カバー、高圧電線への防護管装着などが該当します。",
      expId: "Kakuri (Isolasi) berarti mencegah manusia mendekati bahaya, seperti memasang pagar di area alat berat atau cover mesin.",
      expNe: "'काकुरी' भनेको मानिसलाई खतराको नजिक जान नदिनु हो, जस्तै बार लगाउनु वा मेसिनमा कभर हाल्नु।"
    },
    {
      cat: "第3章 リスクアセスメントの4ステップ（P.80）",
      q: "リスクアセスメントを進める「**基本的な4つのステップ**」の順序として、正しいものはどれですか。",
      q_id: "Manakah urutan 4 langkah dasar yang BENAR dalam menjalankan Risk Assessment?",
      q_ne: "जोखिम मूल्यांकन अघि बढाउने '४ आधारभूत चरणहरू' को सही क्रम कुन हो?",
      options: [
        { ja: "Step1 危険性・有害性の特定 ➔ Step2 リスクの見積り ➔ Step3 優先度の設定・措置の検討 ➔ Step4 低減措置の実施", id: "Step 1: Identifikasi Bahaya -> Step 2: Penaksiran Risiko -> Step 3: Penentuan Prioritas & Solusi -> Step 4: Pelaksanaan Tindakan", ne: "चरण १: जोखिम पहिचान -> चरण २: जोखिमको नाप (हिसाब) -> चरण ३: प्राथमिकता र उपाय तय -> चरण ४: न्यूनीकरण उपाय कार्यान्वयन" },
        { ja: "Step1 低減措置の実施 ➔ Step2 危険性の特定 ➔ Step3 リスクの見積り ➔ Step4 優先度の設定", id: "Pelaksanaan -> Identifikasi -> Penaksiran -> Prioritas", ne: "कार्यान्वयन -> पहिचान -> नाप -> प्राथमिकता" },
        { ja: "Step1 リスクの見積り ➔ Step2 措置の実施 ➔ Step3 危険性の特定 ➔ Step4 優先度の設定", id: "Penaksiran -> Pelaksanaan -> Identifikasi -> Prioritas", ne: "नाप -> कार्यान्वयन -> पहिचान -> प्राथमिकता" },
        { ja: "Step1 優先度の設定 ➔ Step2 措置の実施 ➔ Step3 危険性の特定 ➔ Step4 リスクの見積り", id: "Prioritas -> Pelaksanaan -> Identifikasi -> Penaksiran", ne: "प्राथमिकता -> कार्यान्वयन -> पहिचान -> नाप" }
      ],
      answer: 0,
      expJa: "【テキスト P.80参照】リスクアセスメントは、①危険性等の特定 ➔ ②見積り ➔ ③優先度設定と対策検討 ➔ ④低減措置の実施 の4ステップで進めます。",
      expId: "Urutan wajib: Identifikasi bahaya -> Taksir tingkat risiko -> Tentukan prioritas -> Laksanakan mitigasi.",
      expNe: "पहिले जोखिम पहिचान गर्ने, अनि हिसाब निकाल्ने, त्यसपछि प्राथमिकता छानेर समाधान गर्ने उपाय लागू गरिन्छ।"
    },
    {
      cat: "第3章 リスクポイントの計算（P.82〜83）",
      q: "リスクの見積りにおいて、「**危険の発生頻度：3点**」「**災害になる可能性：4点**」「**災害の重大性：8点**」と見積もられた場合、**合計のリスクポイント**は何点ですか。",
      q_id: "Berapa 'Poin Risiko Total' jika hasil estimasi adalah: Frekuensi (3 poin), Kemungkinan (4 poin), dan Tingkat Keparahan (8 poin)?",
      q_ne: "जोखिमको हिसाब गर्दा 'घटनाको दर: ३ नम्बर', 'दुर्घटना हुने सम्भावना: ४ नम्बर', र 'चोटको गम्भीरता: ८ नम्बर' भएमा 'कुल रिस्क पोइन्ट' कति हुन्छ?",
      options: [
        { ja: "15点（3 ＋ 4 ＋ 8）", id: "15 poin (3 + 4 + 8)", ne: "१५ नम्बर (३ + ४ + ८)" },
        { ja: "96点（3 × 4 × 8）", id: "96 poin", ne: "९६ नम्बर" },
        { ja: "12点", id: "12 poin", ne: "१२ नम्बर" },
        { ja: "7点", id: "7 poin", ne: "७ नम्बर" }
      ],
      answer: 0,
      expJa: "【テキスト P.82〜83参照】頻度・可能性・重大性の各配点を合計してリスクポイントを求めます（3点 ＋ 4点 ＋ 8点 ＝ 15点）。13点以上は「レベルIV」に該当します。",
      expId: "Poin risiko dihitung dengan menjumlahkan skor: Frekuensi (3) + Kemungkinan (4) + Keparahan (8) = 15 poin.",
      expNe: "पाठ्यपुस्तकको विधि अनुसार: ३ + ४ + ८ = १५ कुल रिस्क पोइन्ट हुन्छ।"
    },
    {
      cat: "第3章 レベルIVへの対応（P.84〜85）",
      q: "リスクレベルが最も高い**「レベルIV（重大な問題がある）」**と判定された作業に対する原則的な対応として正しいものはどれですか。",
      q_id: "Bagaimanakah tindakan wajib yang harus diambil terhadap pekerjaan yang dinilai masuk 'Level IV' (Bahaya Kritis)?",
      q_ne: "सबैभन्दा खतरनाक 'लेभल IV' मा परेको कामको हकमा अनिवार्य नियम कुन हो?",
      options: [
        { ja: "リスク低減措置を「直ちに行う」。低減措置を行うまで「作業は停止する」", id: "Tindakan mitigasi harus SEGERA dilakukan. Pekerjaan WAJIB DIHENTIKAN hingga tindakan selesai", ne: "न्यूनीकरण उपाय 'तुरुन्तै गर्ने'। उपाय सम्पन्न नभएसम्म 'काम पूर्ण रूपमा रोक्ने'" },
        { ja: "作業を停止させず、作業員に口頭で注意喚起するだけで作業を続けさせる", id: "Tidak menghentikan kerja dan hanya mengingatkan lisan agar pekerja hati-hati", ne: "काम नरोकी मुखले मात्र होसियार हुन भनेर काम जारी राख्ने" },
        { ja: "来月まで特に何もせず放置する", id: "Membiarkan tanpa tindakan sampai bulan depan", ne: "अर्को महिनासम्म केही नगरी त्यतिकै छोड्ने" },
        { ja: "安全保護具を外して作業速度を上げさせる", id: "Melepas APD demi mengebut pengerjaan", ne: "सुरक्षा सामग्री फुकालेर कामको गति बढाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.84〜85参照】レベルIVは『リスク低減措置を直ちに行う。低減措置を行うまで作業は停止する』と定められています。安全が確保されるまで作業してはなりません。",
      expId: "Level IV adalah kondisi kritis: pekerjaan wajib langsung STOP sampai tindakan mitigasi fisik selesai diterapkan.",
      expNe: "लेभल IV मा परेको काम तुरुन्त रोक्नुपर्छ। सुरक्षा उपाय पूरा नभएसम्म काम सुरु गर्न पाइँदैन।"
    },
    {
      cat: "第3章 低減措置の優先順位（P.85〜86）",
      q: "リスク低減措置を検討する際の**「4段階の優先順位」の正しい順序**はどれですか。",
      q_id: "Manakah HIERARKI KONTROL RISIKO (urutan prioritas tindakan mitigasi) yang benar?",
      q_ne: "जोखिम न्यूनीकरण उपायहरू लागू गर्दा पालना गर्नुपर्ने 'प्राथमिकताको सही क्रम' कुन हो?",
      options: [
        { ja: "①本質的対策 ➔ ②工学的対策 ➔ ③管理的対策 ➔ ④個人用保護具使用", id: "(1) Tindakan Hakiki (Eliminasi) -> (2) Rekayasa Teknik -> (3) Manajemen/Administrasi -> (4) Penggunaan APD", ne: "(१) मूलभूत उपाय (खतरा हटाउने) -> (२) प्राविधिक/इन्जिनियरिङ उपाय -> (३) व्यवस्थापकीय उपाय -> (४) व्यक्तिगत सुरक्षा सामग्री (APD) प्रयोग" },
        { ja: "①個人用保護具使用 ➔ ②管理的対策 ➔ ③工学的対策 ➔ ④本質的対策", id: "(1) APD -> (2) Administrasi -> (3) Rekayasa -> (4) Eliminasi", ne: "(१) APD -> (२) व्यवस्थापन -> (३) इन्जिनियरिङ -> (४) मूलभूत" },
        { ja: "①管理的対策 ➔ ②工学的対策 ➔ ③個人用保護具使用 ➔ ④本質的対策", id: "(1) Administrasi -> (2) Rekayasa -> (3) APD -> (4) Eliminasi", ne: "(१) व्यवस्थापन -> (२) इन्जिनियरिङ -> (३) APD -> (४) मूलभूत" },
        { ja: "優先順位はなく、最も費用のかからない保護具使用だけを行えばよい", id: "Tidak ada hierarki, cukup gunakan APD termurah saja", ne: "कुनै क्रम छैन, सस्तो सामान लगाए पुग्छ" }
      ],
      answer: 0,
      expJa: "【テキスト P.85〜86参照】低減措置は根本的な原因除去から順に検討します。①本質的対策 ➔ ②工学的対策（防護柵等）➔ ③管理的対策（手順書・教育）➔ ④個人用保護具使用 の順が絶対原則です。",
      expId: "Hierarki K3 wajib: Eliminasi bahaya -> Rekayasa teknik -> Kontrol administrasi (SOP) -> APD (langkah terakhir).",
      expNe: "खतरा नै हटाउने (मूलभूत), नसके बार लगाउने (इन्जिनियरिङ), अनि नियम सिकाउने (व्यवस्थापन) र अन्त्यमा मात्र पञ्जा/मास्क (APD) प्रयोग गरिन्छ।"
    },
    {
      cat: "第3章 KYT基礎4ラウンド法：2R（P.93）",
      q: "KYT基礎4ラウンド法において、洗い出された危険の中から**「これが危険のポイントだ」と特に重要な危険を絞り込み、◎印とアンダーラインをつけるラウンド**はどれですか。",
      q_id: "Pada ronde (R) berapakah tim menyaring bahaya paling kritis dengan tanda ◎ dan garis bawah dalam KYT 4-Rounds?",
      q_ne: "KYT ४-राउन्ड विधिमा मुख्य खतरा छानेर ◎ र रेखा कोर्ने राउन्ड कुन हो?",
      options: [
        { ja: "2R（第2ラウンド：本質追究）", id: "Ronde 2 (2R: Mengusut Hakikat Bahaya / Honshitsu Tsuikyuu)", ne: "२R (दोस्रो राउन्ड: मुख्य खतरा पहिचान)" },
        { ja: "1R（第1ラウンド：現状把握）", id: "Ronde 1 (1R: Memahami Situasi)", ne: "१R (पहिलो राउन्ड: वर्तमान अवस्था)" },
        { ja: "3R（第3ラウンド：対策樹立）", id: "Ronde 3 (3R: Merancang Solusi)", ne: "३R (तेस्रो राउन्ड: समाधान)" },
        { ja: "4R（第4ラウンド：目標設定）", id: "Ronde 4 (4R: Target Tindakan Tim)", ne: "४R (चौथो राउन्ड: लक्ष्य)" }
      ],
      answer: 0,
      expJa: "【テキスト P.93参照】2R（本質追究）では重要危険に〇、最重要危険に◎とアンダーラインをつけ、全員で指差し唱和して危険に対する危機感を一致させます。",
      expId: "Pada 2R, bahaya paling kritis diberi tanda ◎ dan garis bawah, lalu dikonfirmasi bersama lewat tunjuk-sebut (shisashi shouwa).",
      expNe: "२R मा मुख्य खतरालाई ◎ चिन्ह लगाएर सबैले एकै स्वरमा औंल्याउँदै आवाज निकालेर मनमा खतराको गम्भीरता बसाल्छन्।"
    },
    {
      cat: "第3章 KYT基礎4ラウンド法：4R（P.93）",
      q: "KYTの最終段階である「**4R（目標設定：私たちはこうする）**」で決定・実施することとして正しいものはどれですか。",
      q_id: "Manakah tindakan yang BENAR pada tahap akhir Ronde 4 (4R: Kami bertekad melakukan ini) dalam KYT?",
      q_ne: "अन्तिम चरण ४R (हामी यसो गर्नेछौं / टोलीको साझा लक्ष्य) मा तय गरिने कुरा कुन हो?",
      options: [
        { ja: "対策を絞り込んで重点実施項目（※印）とし、実践するための「チーム行動目標」を設定して全員で指差し唱和する", id: "Menyaring solusi menjadi Item Prioritas (※), menetapkan Target Tindakan Tim, lalu menguncinya dengan tunjuk-sebut bersama", ne: "उत्कृष्ट उपाय छानेर मुख्य प्राथमिकता (※) बनाउने, 'टोलीको साझा कार्य-लक्ष्य' तोक्ने र सबैले औंल्याउँदै आवाज निकालेर दृढता जनाउने" },
        { ja: "目標は決めずに、各自がバラバラに好きな作業を勝手に始める", id: "Tidak menentukan target dan membiarkan setiap orang bekerja sesuka hati", ne: "कुनै लक्ष्य नतोकी सबैलाई मनखुसी काम गर्न पठाउने" },
        { ja: "一番危険な作業をクジ引きで決めた1人だけに押し付ける", id: "Membebankan tugas paling berbahaya kepada 1 orang yang kalah undian", ne: "खतरनाक काम चिट्ठा हालेर एक जनालाई मात्र लगाउने" },
        { ja: "模造紙の内容を消して誰にも見せないようにする", id: "Menghapus catatan plano agar tidak terlihat orang", ne: "लेखेको कुरा मेटेर कसैलाई नदेखाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.93参照】4Rでは対策の中から全員合意で絞り込み（※印）、チーム行動目標（〇〇ヨシ！）を設定して指差し唱和を行います。",
      expId: "Pada 4R, tim merumuskan 'Target Tindakan Tim' (※) dan mengikrarkannya bersama melalui tunjuk-sebut.",
      expNe: "४R मा टोलीले 'हामी आज यस्तो नियम पूर्ण पालना गर्छौं, ठीक छ (योशी)!' भनी एकैसाथ हातले औंल्याएर संकल्प गर्छन्।"
    },
    {
      cat: "第3章 指差し呼称と意識レベル（P.93〜94）",
      q: "対象を指差して「〇〇ヨシ！」と声に出す「**指差し呼称**」がもたらす効果として、正しいものはどれですか。",
      q_id: "Apakah efek utama dari tindakan 'Pointing and Calling' (Shisashi Koshou) terhadap tingkat kesadaran manusia?",
      q_ne: "औंलाले देखाउँदै ठूलो स्वरले '...ठिक छ (योशी)!' भनेर जाँच गर्ने विधिको मुख्य प्रभाव के हो?",
      options: [
        { ja: "意識状態を引き締め、注意力を高めて意識レベルを「レベルIII（正常・明快）」に導き、ヒューマンエラーを激減させる", id: "Meningkatkan fokus dan membawa kesadaran ke 'Level III (Jernih/Aktif)' sehingga human error anjlok drastis", ne: "मस्तिष्कलाई सतर्क बनाई चेतनाको स्तर 'लेभल III (पूर्ण सचेत र स्पष्ट)' मा पुर्याउँछ, जसले मानवीय गल्ती धेरै घटाउँछ" },
        { ja: "意識レベルを「レベル0（無意識）」に低下させて眠気を誘う", id: "Menurunkan kesadaran ke Level 0 (tidak sadar) dan memicu kantuk", ne: "चेतना घटाएर निद्रा लगाउने बनाउँछ" },
        { ja: "作業スピードが半減するため、大半の建設会社で禁止されている", id: "Dilarang di sebagian besar perusahaan karena memperlambat kerja", ne: "काम ढिलो हुने भएकाले निर्माण कम्पनीले रोक लगाएका छन्" },
        { ja: "声帯を痛めるだけで安全上の科学的効果は一切ない", id: "Hanya merusak pita suara tanpa ada bukti ilmiah keselamatan", ne: "घाँटी दुख्ने बाहेक यसको कुनै फाइदा छैन" }
      ],
      answer: 0,
      expJa: "【テキスト P.93〜94参照】指差し呼称は目・腕・口・耳を総動員して意識をクリアな「レベルIII」に引き上げ、確認の誤りや見落としを格段に減少させます。",
      expId: "Pointing and Calling mengaktifkan koordinasi panca indra untuk menaikkan kesadaran ke Level III (fokus penuh).",
      expNe: "आँखा, हात, मुख र कान एकैसाथ प्रयोग गर्दा दिमाग पूर्ण चनाखो (लेभल III) हुन्छ र भुलचुक रोकिन्छ।"
    },
    {
      cat: "第3章 ハインリッヒの法則（P.94〜95）",
      q: "労働安全における「**ハインリッヒの法則（1：29：300）**」が教えている重要な教訓として、最も適切なものはどれですか。",
      q_id: "Apakah pelajaran K3 terpenting yang diajarkan melalui 'Hukum Heinrich' (1 : 29 : 300)?",
      q_ne: "'हाइन्रिखको नियम (१ : २९ : ३००)' ले दिने सबैभन्दा महत्त्वपूर्ण सुरक्षा सन्देश कुन हो?",
      options: [
        { ja: "1件の重大事故を防ぐためには、その背景にある「300件のヒヤリ・ハット」を見逃さず日常的に摘み取ることが極めて重要である", id: "Untuk mencegah 1 kecelakaan fatal/berat, kuncinya adalah menuntaskan 300 kejadian nyaris celaka (hiyari-hatto) setiap hari", ne: "१ वटा ठूलो ज्यान जाने दुर्घटना रोक्नका लागि, त्यसको जगमा रहेका '३०० वटा तर्सिएका (हियारी-हात्तो)' घटनालाई दैनिक समाधान गर्नुपर्छ" },
        { ja: "重大災害が1件起きるまでは、どんな不安全行動をとっても絶対に怪我はしない", id: "Sebelum bencana fatal terjadi, bebas melakukan tindakan ceroboh tanpa akan terluka", ne: "१ वटा ठूलो दुर्घटना नहुन्जेल जतिसुकै लापरवाही गरे पनि केही हुन्न" },
        { ja: "ヒヤリ・ハットを経験した作業員は無能なので、即座に解雇しなければならない", id: "Pekerja yang melapor hiyari-hatto harus segera dipecat", ne: "हियारी-हात्तो अनुभव गर्ने कामदारलाई तुरुन्त कामबाट निकाल्नुपर्छ" },
        { ja: "300件のヒヤリ・ハットを隠蔽すれば重大災害は発生しない", id: "Jika menyembunyikan 300 insiden nyaris celaka, kecelakaan berat tidak akan terjadi", ne: "३०० वटा घटना लुकायो भने दुर्घटना हुँदैन" }
      ],
      answer: 0,
      expJa: "【テキスト P.94〜95参照】1件の大事故の裏には29件の軽傷と300件のヒヤリ・ハットが存在します。大事故を防ぐには日常のヒヤリ・ハットを確実に改善することが不可欠です。",
      expId: "Piramida Heinrich menegaskan: melenyapkan 300 insiden kecil hiyari-hatto adalah kunci mutlak mencegah 1 kematian fatal.",
      expNe: "ठूलो दुर्घटना रोक्ने एउटै उपाय भनेको ३०० वटा साना-साना गल्ती र तर्सिएका घटनालाई समयमै समाधान गर्नु हो।"
    },
    {
      cat: "第3章 ヒヤリ・ハット報告の原則（P.95〜96）",
      q: "現場でヒヤリ・ハットの報告を作業員から積極的に集めるために、**職長や管理者が徹底すべき基本姿勢**はどれですか。",
      q_id: "Manakah sikap dasar yang WAJIB ditegakkan oleh Shokucho agar pekerja aktif melaporkan insiden nyaris celaka (hiyari-hatto)?",
      q_ne: "कामदारहरूले हियारी-हात्तो रिपोर्ट सक्रिय रूपमा गरुन् भन्नाका लागि शोकुचोले पालना गर्नैपर्ने मुख्य नियम कुन हो?",
      options: [
        { ja: "報告者を非難したり責任追及したりせず、貴重な安全情報として受け止め、報告しやすい職場環境をつくる", id: "Tidak menyalahkan atau menghukum pelapor, melainkan mengapresiasinya sebagai info K3 berharga demi iklim kerja terbuka", ne: "रिपोर्ट गर्नेलाई गाली वा दोष नदिई बहुमूल्य जानकारीको रूपमा लिने र सजिलै रिपोर्ट गर्न सकिने वातावरण बनाउने" },
        { ja: "ヒヤリ・ハットを起こした作業員を朝礼で全員の前に立たせて大声で叱責する", id: "Menyuruh berdiri di depan apel dan membentaknya keras-keras", ne: "सबैका अगाडि उभ्याएर ठूलो स्वरले हप्काउने" },
        { ja: "報告書を出した作業員に罰金を科す", id: "Mengenakan denda uang kepada pekerja yang melapor", ne: "रिपोर्ट दिने कामदारलाई जरिवाना तिराउने" },
        { ja: "報告された内容を誰にも共有せず引き出しに隠す", id: "Menyembunyikan lembar laporan di laci tanpa tindak lanjut", ne: "रिपोर्ट कसैलाई नदेखाई घर्रामा लुकाएर राख्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.95〜96参照】報告者を責めると作業員は隠蔽するようになります。非難を禁止し、安全の貴重な財産として受け止めることが鉄則です。",
      expId: "Prinsip non-blaming: jangan pernah menyalahkan pelapor hiyari-hatto agar potensi bahaya tidak disembunyikan.",
      expNe: "रिपोर्ट गर्नेलाई गाली गरेमा कामदारले गल्ती लुकाउँछन्। त्यसैले दोष नलगाई प्रशंसा गर्ने वातावरण बनाउनुपर्छ।"
    },
    {
      cat: "第3章 パワーハラスメント防止（P.100〜103）",
      q: "現場における職長の言動として、**「違法なパワーハラスメント（パワハラ）」に該当するもの**はどれですか。",
      q_id: "Manakah tindakan mandor di proyek yang termasuk dalam kategori 'Power Harassment Ilegal'?",
      q_ne: "कार्यस्थलमा शोकुचोको कुन व्यवहार गैरकानुनी 'पावर ह्यारेसमेन्ट' मा पर्दछ?",
      options: [
        { ja: "作業員の失敗に対して人格や存在を否定する暴言を吐いたり、他の作業員の前で見せしめのように怒鳴りつける", id: "Menghina martabat pribadi saat pekerja salah, atau membentak mempermalukannya di depan rekan-rekan lain", ne: "कामदारको इज्जतमा चोट पुग्ने गालीगलौज गर्ने, वा अरू सबैका अगाडि अपमानित हुने गरी चर्को स्वरले हप्काउने" },
        { ja: "危険な作業手順を行っていたため、その場で直ちに制止して正しい安全手順を指導した", id: "Menghentikan bahaya seketika demi keselamatan dan membimbing prosedur yang benar", ne: "खतरनाक काम गरिरहेकाले सुरक्षाको लागि तत्काल रोकेर सही तरिका सिकाउनु" },
        { ja: "体調が悪そうな作業員に気づき、休憩所で休むよう指示した", id: "Meminta pekerja yang tampak sakit untuk beristirahat di posko", ne: "बिरामी जस्तो देखिने कामदारलाई विश्राम गर्न पठाउनु" },
        { ja: "作業手順書の不明点について、作業員からの質問に丁寧に答えた", id: "Menjawab pertanyaan pekerja mengenai SOP kerja dengan ramah dan jelas", ne: "कार्यविधिका नबुझेका कुराहरू कामदारलाई विनम्रतापूर्वक सिकाइदिनु" }
      ],
      answer: 0,
      expJa: "【テキスト P.100〜103参照】安全確保のための正当な業務指導はパワハラではありませんが、人格否定、暴言、見せしめの叱責などは違法なパワハラです。",
      expId: "Teguran K3 adalah sah. Namun membentak kasar mempermalukan martabat pribadi di depan orang lain adalah pelanggaran Power Harassment.",
      expNe: "सुरक्षाका लागि काम रोक्नु जायज हो, तर अरूका अगाडि अपमानित हुने गरी गालीगलौज गर्नु गैरकानुनी पावर ह्यारेसमेन्ट हो।"
    },
    {
      cat: "第4章 設計図書と施工図（P.105, 113）",
      q: "「設計図書」をもとに、**現場で作業員が間違いなく施工できるよう細部の寸法や材料の取り合いを具体化した図面**は何ですか。",
      q_id: "Gambar apakah yang dibuat di proyek berdasarkan gambar desain agar pekerja dapat memasang detail sambungan dan dimensi secara presisi?",
      q_ne: "डिजाइन नक्साको आधारमा कार्यस्थलमा कामदारले अलिकति पनि गल्ती नगरी काम गर्न सकून् भनेर बनाइने विस्तृत नक्सा कुन हो?",
      options: [
        { ja: "施工図（せこうず）", id: "Gambar Kerja Lapangan / Shop Drawing (Sekouzu)", ne: "सेकोउजु (फिल्ड निर्माण कार्य नक्सा)" },
        { ja: "意匠図（いしょうず）", id: "Gambar Arsitektur (Ishouzu)", ne: "आर्किटेक्चरल नक्सा" },
        { ja: "構造計算書", id: "Buku Perhitungan Struktur", ne: "संरचना गणना किताब" },
        { ja: "現場説明書", id: "Dokumen Penjelasan Lapangan", ne: "कार्यस्थल व्याख्या पत्र" }
      ],
      answer: 0,
      expJa: "【テキスト P.105, 113参照】設計図書の意図を反映し、実際の部材の納まりや正確な寸法を落とし込んで作業用につくる図面を「施工図」と呼びます。",
      expId: "Sekouzu (Shop drawing) adalah gambar kerja detail praktis di lapangan yang menjadi acuan langsung para pekerja.",
      expNe: "'सेकोउजु' नक्सालाई कार्यस्थलमा वास्तविकतामा ढाल्न बनाइएको विस्तृत कार्य-नक्सा हो, जसलाई हेरेर कामदारले काम गर्छन्।"
    },
    {
      cat: "第4章 施工図と手戻り防止（P.113）",
      q: "着工前に「施工図」を綿密に検討しておくことが、**「手戻り防止（コスト・工程の無駄防止）」につながる理由**として最も適切なものはどれですか。",
      q_id: "Mengapa meninjau Sekouzu secara matang sejak awal dapat mencegah pengerjaan ulang (temodori) di lapangan?",
      q_ne: "काम सुरु हुनुअघि नै 'सेकोउजु' राम्रोसँग अध्ययन गर्दा काम दोहोर्याउनु (तेमोदोरी) नपर्ने कारण के हो?",
      options: [
        { ja: "躯体と配管の干渉や他職種との取り合いの不具合を事前に発見でき、やり直しのムダを未然に防げるから", id: "Karena benturan antara pipa dan beton dapat terdeteksi sebelum dikerjakan, sehingga terhindar dari bongkar ulang", ne: "पाइप र ढलान आपसमा ठोकिने समस्या पहिल्यै पत्ता लाग्ने हुनाले पछि फुटाउने वा फेरि बनाउने नोक्सानबाट बचिन्छ" },
        { ja: "施工図を描くことで材料費がタダになるから", id: "Karena menggambar sekouzu membuat biaya bahan menjadi gratis", ne: "नक्सा कोरेपछि सामान सित्तैमा पाइने हुनाले" },
        { ja: "図面さえあれば現場監督が不在でも自動的に工事が終わるから", id: "Karena proyek akan selesai otomatis tanpa perlu kehadiran pengawas", ne: "नक्सा भएपछि इन्जिनियर नभए पनि आफैं काम सकिने हुनाले" },
        { ja: "寸法が間違っていても現場で力づくで叩けば必ず直るから", id: "Karena salah dimensi bisa diatasi dengan memukul paksa di lapangan", ne: "नाप बिग्रे पनि बल गरेर ठोक्दा मिल्ने हुनाले" }
      ],
      answer: 0,
      expJa: "【テキスト P.113参照】事前に施工図で他職種との取り合いや干渉をチェックしておくことで、後からのやり直し（手戻り・手直し）を未然に防止できます。",
      expId: "Cek gambar detail mendeteksi tabrakan pipa dan besi sejak awal, menghindarkan proyek dari pembongkaran ulang yang sangat mahal.",
      expNe: "पहिल्यै नक्सा जाँच्दा सामान जुध्ने समस्या पत्ता लाग्छ, जसले गर्दा भत्काउने र फेरि बनाउने खर्च र समय बच्छ।"
    },
    {
      cat: "第5章 建設業法の目的（P.122）",
      q: "「建設業法」第1条に定められている**法律の究極の目的**として、正しいものはどれですか。",
      q_id: "Apakah tujuan resmi dibentuknya 'Undang-Undang Jasa Konstruksi' (Kensetsugyou-hou) menurut Pasal 1?",
      q_ne: "जापानको 'निर्माण व्यवसाय ऐन' को धारा १ मा उल्लिखित कानुनको मुख्य उद्देश्य के हो?",
      options: [
        { ja: "請負契約の適正化を図り、適正な施工を確保して発注者を保護し、建設業の健全な発達を促進すること", id: "Menertibkan kontrak kerja, menjamin mutu bangunan demi melindungi klien, serta memajukan industri konstruksi", ne: "निष्पक्ष ठेक्का सम्झौता गराउने, गुणस्तरीय काम गरेर ग्राहकको रक्षा गर्ने र निर्माण क्षेत्रको स्वस्थ विकास गर्ने" },
        { ja: "元請会社が下請代金を自由に値引きできる権利を認めること", id: "Memberi hak kontraktor utama untuk memotong harga subkon sepihak", ne: "ठूला ठेकेदारले सानाको पैसा मनलाग्दी घटाउन छुट दिने" },
        { ja: "手抜き工事を行った施工業者を処罰から守ること", id: "Melindungi kontraktor nakal dari hukuman pidana", ne: "नराम्रो काम गर्ने कम्पनीलाई कारबाहीबाट बचाउने" },
        { ja: "外国人労働者が現場で働くことを全面的に禁止すること", id: "Melarang total tenaga kerja asing bekerja di sektor konstruksi", ne: "विदेशी कामदारलाई काम गर्न पूर्ण प्रतिबन्ध लगाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.122参照】建設業法第1条には、契約の適正化、適正な施工の確保、発注者の保護、建設業の健全な発達が目的として明記されています。",
      expId: "Tujuan UU Jasa Konstruksi adalah menjamin keadilan kontrak, melindungi hak klien, dan memajukan industri konstruksi.",
      expNe: "यस ऐनको मुख्य उद्देश्य गुणस्तरीय काम सुनिश्चित गर्नु, निष्पक्ष ठेक्का गर्नु, ग्राहकको हित जोगाउनु र निर्माण उद्योगको विकास गर्नु हो।"
    },
    {
      cat: "第5章 主任技術者の配置（P.123〜124）",
      q: "建設業法において、**工事現場における施工の技術上の管理をつかさどるため「すべての現場」に配置が義務付けられている技術者**は何ですか。",
      q_id: "Berdasarkan UU Konstruksi Jepang, teknisi ahli apakah yang WAJIB ditempatkan di 'SETIAP LOKASI PROYEK'?",
      q_ne: "जापानको निर्माण व्यवसाय ऐन अनुसार, कामको प्राविधिक रेखदेख गर्न 'प्रत्येक कार्यस्थलमा' राख्नैपर्ने इन्जिनियर को हुन्?",
      options: [
        { ja: "主任技術者（しゅにんぎじゅつしゃ）※一定規模以上の元請は監理技術者", id: "Shunin Gijutsusha (Insinyur Utama) *atau Kanri Gijutsusha untuk proyek besar", ne: "शुनिन गिजुचुशा (प्रमुख प्राविधिक / चिफ इन्जिनियर) *ठूला प्रोजेक्टमा कान्त्री गिजुचुशा" },
        { ja: "現場警備員", id: "Petugas Keamanan Proyek", ne: "सुरक्षा गार्ड" },
        { ja: "資材運搬ドライバー", id: "Sopir Pengantar Material", ne: "सामान ओसार्ने चालक" },
        { ja: "近隣住民の代表", id: "Perwakilan Warga Sekitar", ne: "छिमेकी प्रतिनिधि" }
      ],
      answer: 0,
      expJa: "【テキスト P.123〜124参照】建設業者は元請・下請を問わず、すべての現場に「主任技術者」を置かなければなりません。特定建設業者が一定額以上の下請発注を行う場合は「監理技術者」を置きます。",
      expId: "Kontraktor wajib menempatkan Shunin Gijutsusha di setiap proyek. Untuk subkontrak bernilai besar, wajib Kanri Gijutsusha.",
      expNe: "हरेक कार्यस्थलमा प्राविधिक कामको नेतृत्व गर्न 'शुनिन गिजुचुशा' राख्नैपर्छ। ठूला ठेक्कामा 'कान्त्री गिजुचुशा' चाहिन्छ।"
    }
  ]
};
