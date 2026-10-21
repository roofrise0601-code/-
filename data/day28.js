const CURRENT_QUIZ_DATA = {
  title: "Day 28：<ruby>特定技能2号<rt>とくていぎのうにごう</rt></ruby> <ruby>学科試験<rt>がっかしけん</rt></ruby> ファイナル<ruby>本番模擬試験<rt>ほんばんもぎしけん</rt></ruby>",
  key: "score_gakka4_28",
  passScore: 70,
  questions: [
    {
      cat: "第1章 職長の位置づけ（P.1）",
      q: "<ruby>労働安全衛生法<rt>ろうどうあんぜんえいせいほう</rt></ruby>における「<ruby>職長<rt>しょくちょう</rt></ruby>」の位置づけとして、**最も適切なもの**はどれですか。",
      q_id: "Manakah pernyataan yang PALING TEPAT mengenai posisi 'Shokucho' (Mandor/Foreman) menurut UU K3 Jepang?",
      q_ne: "जापानको औद्योगिक सुरक्षा तथा स्वास्थ्य ऐन अनुसार 'शोकुचो' (कार्यस्थल नाइके/फोरम्यान) को भूमिका सम्बन्धी कुन भनाइ सबैभन्दा उपयुक्त छ?",
      options: [
        { ja: "工事現場における作業員の直接の指導監督者であり、作業員を直接指揮して毎日の作業を進める役割", id: "Pengawas langsung pekerja di lapangan yang memimpin dan mengarahkan pekerjaan harian secara langsung", ne: "कार्यस्थलमा कामदारहरूलाई प्रत्यक्ष निर्देशन र रेखदेख गर्ने तथा दैनिक काम अघि बढाउने प्रमुख व्यक्ति" },
        { ja: "現場には常駐せず、本社で契約書類の作成だけを行う事務員", id: "Staf administrasi di kantor pusat yang tidak ke lapangan dan hanya membuat dokumen kontrak", ne: "कार्यस्थलमा नआई हेड अफिसमा बसेर कागजात मात्र हेर्ने कर्मचारी" },
        { ja: "施主（発注者）の代理人として、建物の完成検査だけを行う検査官", id: "Petugas pemeriksa perwakilan klien yang hanya memeriksa saat serah terima akhir", ne: "घरधनीको प्रतिनिधिको रूपमा काम सकिएपछि मात्र हेर्न आउने निरीक्षक" },
        { ja: "指示や安全管理は行わず、指示された単一の作業だけを黙々とこなす見習い", id: "Pekerja magang yang hanya mengerjakan satu tugas tanpa memberi arahan atau mengelola keselamatan", ne: "अरूलाई निर्देशन नदिई अह्राएको काम मात्र गर्ने प्रशिक्षार्थी" }
      ],
      answer: 0,
      expJa: "【テキスト P.1参照】職長とは労働安全衛生法における作業員の指導監督者です。作業員を直接指揮しながら安全・工程・品質を管理し、小規模現場では「親方」「棟梁」とも呼ばれます。",
      expId: "Shokucho adalah pengawas langsung pekerja di lapangan yang bertugas mengarahkan pekerjaan harian, keselamatan, dan kualitas.",
      expNe: "'शोकुचो' भन्नाले कार्यस्थलमा कामदारहरूलाई प्रत्यक्ष निर्देशन दिने, सुरक्षा र कामको रेखदेख गर्ने मुख्य अगुवा हो।"
    },
    {
      cat: "第1章 人材育成（P.4〜5）",
      q: "職場の上司や先輩が、部下や後輩に対して「**実際の現場作業を通じて指導し、知識や技術を身につけさせる実践教育**」を何と呼びますか。",
      q_id: "Apa sebutan untuk metode pelatihan langsung di mana atasan/senior membimbing bawahan melalui praktik pekerjaan nyata sehari-hari?",
      q_ne: "कार्यस्थलमा सिनियर वा हाकिमले जुनियरलाई वास्तविक काम गराउँदै व्यावहारिक ज्ञान र सीप सिकाउने विधिलाई के भनिन्छ?",
      options: [
        { ja: "OJT（On the Job Training）", id: "OJT (On the Job Training / Pelatihan langsung di tempat kerja)", ne: "OJT (अन द जब ट्रेनिङ / काम गर्दै सिक्ने तालिम)" },
        { ja: "Off-JT（座学研修）", id: "Off-JT (Pelatihan di luar tempat kerja)", ne: "Off-JT (कक्षाकोठामा बसेर लिइने तालिम)" },
        { ja: "リスクアセスメント", id: "Risk Assessment (Penilaian risiko)", ne: "जोखिम मूल्यांकन" },
        { ja: "安全衛生委員会", id: "Komite Keselamatan dan Kesehatan Kerja", ne: "सुरक्षा तथा स्वास्थ्य समिति" }
      ],
      answer: 0,
      expJa: "【テキスト P.4〜5参照】実際の現場作業を通じて部下や後輩を指導する教育を『OJT』と呼びます。経験の浅い作業員に適切な仕事を与え、一人前に育てることも職長の重要な役割です。",
      expId: "OJT (On the Job Training) adalah pembinaan keterampilan praktis kepada staf junior langsung di lokasi kerja nyata.",
      expNe: "'OJT' भन्नाले कार्यस्थलमा प्रत्यक्ष काम गर्दै सिनियरबाट व्यवहारिक सीप र ज्ञान सिक्ने तालिम प्रणालीलाई बुझाउँछ।"
    },
    {
      cat: "第2章 現場管理の条件（P.25〜26）",
      q: "現場管理において品質低下や事故を招く「**ムリ・ムダ・ムラ**」が発生する根本的な原因として、最も適切なものはどれですか。",
      q_id: "Manakah penyebab mendasar timbulnya 'Muri (Beban lebih), Muda (Pemborosan), dan Mura (Ketidakteraturan)' di proyek?",
      q_ne: "कार्यस्थलमा 'मुरी (अति भार), मुदा (खेर जानु), र मुरा (अस्थिर हुनु)' उत्पन्न हुनुको मूल कारण कुन हो?",
      options: [
        { ja: "作業員に与える作業量（負荷）と、作業員の能力のバランスが取れていないこと", id: "Ketidakseimbangan antara beban volume kerja (beban) dan kapasitas kemampuan pekerja", ne: "कामदारलाई दिइने कामको परिमाण (भार) र उसको क्षमताबीच सन्तुलन नमिल्नु" },
        { ja: "朝礼で全員が作業手順書を正しく確認して作業を開始したこと", id: "Semua orang memeriksa SOP dengan benar saat briefing sebelum mulai kerja", ne: "बिहानी बैठकमा सबैले नियम पुस्तिका राम्ररी पढेर काम सुरु गर्नु" },
        { ja: "材料や工具が作業の流れに合わせて適切な位置に整頓されていること", id: "Bahan dan alat sudah tertata rapi mengikuti alur alur kerja", ne: "सामान र औजारहरू कामको गति अनुसार ठिक्क ठाउँमा मिलाएर राखिनु" },
        { ja: "安全パトロールを自主的に毎日実施していること", id: "Melakukan patroli keselamatan secara mandiri setiap hari", ne: "दैनिक सुरक्षा गस्ती नियमित रूपमा गर्नु" }
      ],
      answer: 0,
      expJa: "【テキスト P.25〜26参照】能力より負荷が大きすぎると「ムリ」となり、負荷が小さすぎると「手待ち（ムダ）」になります。このバランスの崩れが「ムラ」を生み出します。",
      expId: "Muri-Muda-Mura timbul karena ketidakseimbangan antara kapasitas kemampuan pekerja dan beban kerja yang diberikan.",
      expNe: "क्षमताभन्दा धेरै काम भए 'मुरी' र काम नभए 'मुदा' हुन्छ। यी दुईको असन्तुलनले नै काममा अस्थिरता (मुरा) ल्याउँछ।"
    },
    {
      cat: "第2章 意思決定手法（P.35〜37）",
      q: "刻々と変化する現場で、想定外の問題に迅速かつ柔軟に対応するための意思決定手法「**OODA（ウーダ）ループ**」の4ステップとして正しいものはどれですか。",
      q_id: "Manakah 4 langkah yang BENAR dalam metode pengambilan keputusan cepat 'OODA Loop'?",
      q_ne: "अवस्था छिटो-छिटो परिवर्तन हुने कार्यस्थलमा तत्काल सही निर्णय लिन प्रयोग गरिने 'OODA लुप' का ४ चरणहरूको सही क्रम कुन हो?",
      options: [
        { ja: "Observe（観察）➔ Orient（状況判断）➔ Decide（意思決定）➔ Action（行動・評価）", id: "Observe (Amati) -> Orient (Pahami situasi) -> Decide (Putuskan) -> Action (Eksekusi/Evaluasi)", ne: "Observe (अवलोकन) -> Orient (अवस्था बुझ्ने) -> Decide (निर्णय लिने) -> Action (काम गर्ने/मूल्यांकन)" },
        { ja: "Plan（計画）➔ Do（実行）➔ Check（評価）➔ Action（改善）", id: "Plan -> Do -> Check -> Action (PDCA Cycle)", ne: "Plan -> Do -> Check -> Action (PDCA चक्र)" },
        { ja: "Decide（決定）➔ Action（行動）➔ Observe（観察）➔ Orient（判断）", id: "Decide -> Action -> Observe -> Orient", ne: "Decide -> Action -> Observe -> Orient" },
        { ja: "Action（行動）➔ Plan（計画）➔ Do（実行）➔ Orient（判断）", id: "Action -> Plan -> Do -> Orient", ne: "Action -> Plan -> Do -> Orient" }
      ],
      answer: 0,
      expJa: "【テキスト P.35〜37参照】OODAループは、現場の事実を見る「Observe（観察）」から入り、「Orient（状況判断・仮説）」➔「Decide（意思決定）」➔「Action（行動と評価）」を高速で回します。",
      expId: "OODA Loop berawal dari Observe (Amati data riil) -> Orient (Analisis) -> Decide (Keputusan) -> Action (Tindakan nyata).",
      expNe: "OODA लुप पहिले Observe (प्रत्यक्ष हेर्ने) बाट सुरु भई Orient (विश्लेषण), Decide (निर्णय) र Action (काम) को क्रममा घुम्छ।"
    },
    {
      cat: "第2章 工程管理（P.45）",
      q: "ネットワーク式工程表において、**「全体の完成工期に直結するため、1日も遅れが許されない最長の作業経路」**を何と呼びますか。",
      q_id: "Apa sebutan untuk rangkaian kegiatan terpanjang pada network schedule yang tidak boleh molor sama sekali karena akan langsung menunda tanggal serah terima proyek?",
      q_ne: "नेटवर्क कार्यतालिकामा १ दिन पनि ढिलो हुन नहुने र सिधै पूरै प्रोजेक्टको म्यादलाई असर गर्ने सबैभन्दा लामो बाटोलाई के भनिन्छ?",
      options: [
        { ja: "クリティカルパス（最長重点経路）", id: "Critical Path (Lintasan Kritis)", ne: "क्रिटिकल पाथ (सबैभन्दा जोखिमपूर्ण मुख्य बाटो)" },
        { ja: "トータルフロート（全余裕日数）", id: "Total Float (Total waktu longgar)", ne: "टोटल फ्लोट (कुल फुर्सदको समय)" },
        { ja: "ダミー作業", id: "Dummy (Aktivitas semu)", ne: "डमी (समय नलाग्ने काम)" },
        { ja: "ガントチャート", id: "Gantt Chart", ne: "गान्ट चार्ट" }
      ],
      answer: 0,
      expJa: "【テキスト P.45参照】遅れの許されない最長経路を「クリティカルパス」と呼びます。この経路上にある作業が遅れると、工事全体の完成日がそのまま遅延するため重点的に監視します。",
      expId: "Critical Path adalah jalur kegiatan terpanjang tanpa toleransi keterlambatan; jika satu hari saja meleset, proyek dipastikan molor.",
      expNe: "'क्रिटिकल पाथ' भन्नाले अलिकति पनि ढिलो हुन नहुने मुख्य कामको बाटो हो। यसमा ढिलो हुनासाथ पूरै भवनको म्याद नाघ्छ।"
    },
    {
      cat: "第2章 労働安全衛生の3管理と熱中症（P.62, 66）",
      q: "安全衛生の「**3管理を進める優先順序**」と「**熱中症予防の暑さ指数（WBGT値）の基準**」として、正しい組み合わせはどれですか。",
      q_id: "Manakah kombinasi yang BENAR antara urutan prioritas '3 Pilar Manajemen K3' dan ambang batas 'Indeks Panas (WBGT)'?",
      q_ne: "औद्योगिक सुरक्षाको '३ व्यवस्थापनको प्राथमिकता क्रम' र 'गर्मी सूचकांक (WBGT)' सम्बन्धी सही जोडी कुन हो?",
      options: [
        { ja: "作業環境管理 ➔ 作業管理 ➔ 健康管理 の順序で対策し、WBGT値が31以上になったら可能な限り作業を中断する", id: "Urutan: Lingkungan -> Metode Kerja -> Kesehatan. Jika WBGT mencapai 31 ke atas, hentikan pekerjaan sebisa mungkin", ne: "कार्य वातावरण -> कार्यविधि -> स्वास्थ्यको क्रममा उपाय गर्ने, र WBGT सूचकांक ३१ पुगेमा काम सकेसम्म रोक्ने" },
        { ja: "健康管理 ➔ 作業管理 ➔ 作業環境管理 の順序で対策し、WBGT値に関係なく休憩は一切与えない", id: "Kesehatan -> Kerja -> Lingkungan, dan tidak boleh istirahat berapa pun nilai WBGT", ne: "स्वास्थ्य -> कार्यविधि -> वातावरणको क्रममा गर्ने, र जति गर्मी भए पनि ब्रेक नदिने" },
        { ja: "作業管理 ➔ 健康管理 ➔ 作業環境管理 の順序で対策し、WBGT値が20以上で直ちに工事を中止する", id: "Kerja -> Kesehatan -> Lingkungan, dan hentikan kerja jika WBGT di atas 20", ne: "कार्यविधि -> स्वास्थ्य -> वातावरणको क्रममा गर्ने, र WBGT २० पुग्दा काम रोक्ने" },
        { ja: "順序は関係なく、WBGT値とは気温のことだけを指す", id: "Urutan bebas dan WBGT hanyalah suhu udara biasa", ne: "यसको कुनै क्रम हुँदैन र WBGT भनेको सामान्य तापक्रम मात्र हो" }
      ],
      answer: 0,
      expJa: "【テキスト P.62, 66参照】安全衛生対策は根本原因を取り除くため「作業環境管理 ➔ 作業管理 ➔ 健康管理」の順に行います。熱中症予防ではWBGT 31以上で原則作業中断（28〜31は厳重警戒）です。",
      expId: "Urutan K3: Lingkungan -> Kerja -> Kesehatan. Pada nilai WBGT 31+, pekerjaan harus dihentikan untuk mencegah heatstroke fatal.",
      expNe: "पहिले कार्य वातावरण, अनि कामको तरिका र अन्त्यमा स्वास्थ्य जाँच्नुपर्छ। WBGT ३१ नाघेमा काम रोक्नुपर्छ।"
    },
    {
      cat: "第3章 本質安全と機能安全（P.77〜78）",
      q: "労働安全における「**本質安全（ほんしつあんぜん）**」と「**機能安全（隔離）**」の組み合わせとして、正しいものはどれですか。",
      q_id: "Manakah kombinasi yang BENAR mengenai konsep 'Honshitsu Anzen' (Keselamatan Hakiki) dan 'Kinou Anzen / Kakuri' (Fungsional/Isolasi)?",
      q_ne: "'मूलभूत सुरक्षा (होन्शिचु आन्जेन)' र 'कार्यात्मक सुरक्षा/अलग्ग्याउने (किनौ आन्जेन/काकुरी)' को सही जोडी कुन हो?",
      options: [
        { ja: "本質安全＝危険作業そのものを無くす（廃止・変更する） ／ 機能安全＝安全柵やカバー等で人を危険源から隔離して防ぐ", id: "Honshitsu Anzen = Meniadakan tugas berbahaya itu sendiri / Kinou Anzen = Memasang pagar/kap untuk mengisolasi manusia dari bahaya", ne: "मूलभूत सुरक्षा = खतरनाक काम नै खारेज वा सुरक्षित वस्तुले बदल्नु / कार्यात्मक सुरक्षा = बार वा कभर लगाएर मानिसलाई खतराबाट टाढा राख्नु" },
        { ja: "本質安全＝安全メガネをかけること ／ 機能安全＝怪我をした後に救急車を呼ぶこと", id: "Honshitsu Anzen = Memakai kacamata / Kinou Anzen = Memanggil ambulans setelah celaka", ne: "मूलभूत = चस्मा लगाउने / कार्यात्मक = दुर्घटनापछि एम्बुलेन्स बोलाउने" },
        { ja: "本質安全＝重機の近くを自由に歩くこと ／ 機能安全＝危険表示看板を外すこと", id: "Honshitsu Anzen = Bebas berjalan dekat alat berat / Kinou Anzen = Mencopot rambu", ne: "मूलभूत = मेसिन नजिक हिँड्ने / कार्यात्मक = बोर्ड हटाउने" },
        { ja: "両者は同じ意味であり、危険作業をそのまま放置することを指す", id: "Keduanya bermakna sama yaitu membiarkan bahaya apa adanya", ne: "दुवैको अर्थ एउटै हो, खतरालाई त्यतिकै छोड्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.77〜78参照】本質安全は危険そのものを避ける・無くすこと（危険作業の廃止等）です。作業を無くせない場合に、防護柵やカバーで危険源から人を遠ざけるのが「隔離（機能安全）」です。",
      expId: "Honshitsu Anzen melenyapkan sumber bahaya dari akar. Kinou Anzen (Kakuri) mengisolasi manusia dari bahaya memakai pagar pengaman.",
      expNe: "खतरा नै जरैदेखि हटाउनु 'मूलभूत सुरक्षा' हो, र काम हटाउन नसक्दा बार वा कभर लगाएर मानिसलाई जोगाउनु 'कार्यात्मक सुरक्षा' हो।"
    },
    {
      cat: "第3章 低減措置の優先順位（P.85〜86）",
      q: "リスクアセスメントで見積もったリスクに対して講じる**「低減措置検討の優先順位（図3-3）」の正しい順序**はどれですか。",
      q_id: "Manakah HIERARKI KONTROL RISIKO (urutan prioritas tindakan mitigasi) yang benar menurut Gambar 3-3?",
      q_ne: "जोखिम न्यूनीकरण उपायहरू लागू गर्दा पालना गर्नुपर्ने 'प्राथमिकताको सही क्रम (चित्र ३-३)' कुन हो?",
      options: [
        { ja: "①本質的対策 ➔ ②工学的対策 ➔ ③管理的対策 ➔ ④個人用保護具使用", id: "(1) Tindakan Hakiki (Eliminasi) -> (2) Rekayasa Teknik -> (3) Manajemen/Administrasi -> (4) Penggunaan APD", ne: "(१) मूलभूत उपाय (खतरा नै हटाउने) -> (२) प्राविधिक/इन्जिनियरिङ उपाय -> (३) व्यवस्थापकीय उपाय -> (४) व्यक्तिगत सुरक्षा सामग्री (APD) प्रयोग" },
        { ja: "①個人用保護具使用 ➔ ②管理的対策 ➔ ③工学的対策 ➔ ④本質的対策", id: "(1) APD -> (2) Administrasi -> (3) Rekayasa -> (4) Eliminasi", ne: "(१) APD -> (२) व्यवस्थापन -> (३) इन्जिनियरिङ -> (४) मूलभूत" },
        { ja: "①管理的対策 ➔ ②工学的対策 ➔ ③個人用保護具使用 ➔ ④本質的対策", id: "(1) Administrasi -> (2) Rekayasa -> (3) APD -> (4) Eliminasi", ne: "(१) व्यवस्थापन -> (२) इन्जिनियरिङ -> (३) APD -> (४) मूलभूत" },
        { ja: "優先順位はなく、一番費用がかからない方法だけを選べばよい", id: "Tidak ada hierarki, pilih saja metode yang paling murah", ne: "कुनै क्रम छैन, सबैभन्दा सस्तो उपाय रोजे पुग्छ" }
      ],
      answer: 0,
      expJa: "【テキスト P.85〜86参照】リスク低減措置は根本的な原因除去から順に検討します。①本質的対策 ➔ ②工学的対策（防護柵等）➔ ③管理的対策（手順書・教育）➔ ④個人用保護具使用（手袋・マスク等）の順序が絶対原則です。",
      expId: "Hierarki K3 wajib: Eliminasi bahaya -> Rekayasa teknik -> Kontrol administrasi (SOP) -> APD (langkah terakhir).",
      expNe: "खतरा नै हटाउने (मूलभूत), नसके बार लगाउने (इन्जिनियरिङ), अनि नियम सिकाउने (व्यवस्थापन) र अन्त्यमा मात्र पञ्जा/मास्क (APD) प्रयोग गरिन्छ।"
    },
    {
      cat: "第3章 ハインリッヒの法則（P.94〜95）",
      q: "労働安全における「**ハインリッヒの法則（1：29：300）**」が教えている重要な教訓として、最も適切なものはどれですか。",
      q_id: "Apakah pelajaran K3 terpenting yang diajarkan melalui 'Hukum Heinrich' (1 : 29 : 300)?",
      q_ne: "'हाइन्रिखको नियम (१ : २९ : ३००)' ले दिने सबैभन्दा महत्त्वपूर्ण सुरक्षा सन्देश कुन हो?",
      options: [
        { ja: "1件の重大な死亡・重症事故を防ぐためには、その背景にある「300件のヒヤリ・ハット」を見逃さず日常的に対策することが極めて重要である", id: "Untuk mencegah 1 kecelakaan fatal/berat, kuncinya adalah tidak mengabaikan 300 kejadian nyaris celaka (hiyari-hatto) dan menuntaskannya setiap hari", ne: "१ वटा ठूलो ज्यान जाने दुर्घटना रोक्नका लागि, त्यसको जगमा रहेका '३०० वटा सामान्य तर्सिएका (हियारी-हात्तो)' घटनालाई बेवास्ता नगरी दैनिक समाधान गर्नुपर्छ" },
        { ja: "重大災害が1件起きるまでは、どんな危険な不安全行動をとっても絶対に怪我はしない", id: "Sebelum bencana fatal terjadi, bebas melakukan tindakan ceroboh tanpa akan terluka", ne: "१ वटा ठूलो दुर्घटना नहुन्जेल जतिसुकै लापरवाही गरे पनि केही हुन्न" },
        { ja: "ヒヤリ・ハットを経験した作業員は無能なので、即刻解雇しなければならない", id: "Pekerja yang mengalami hiyari-hatto tidak becus dan harus segera dipecat", ne: "हियारी-हात्तो अनुभव गर्ने कामदारलाई तुरुन्त कामबाट निकाल्नुपर्छ" },
        { ja: "300件のヒヤリ・ハットを隠蔽すれば、重大災害の発生率がゼロになる", id: "Jika menyembunyikan 300 insiden nyaris celaka, kecelakaan berat otomatis jadi nol", ne: "३०० वटा घटना लुकायो भने ठूलो दुर्घटना आफैं शून्य हुन्छ" }
      ],
      answer: 0,
      expJa: "【テキスト P.94〜95参照】1件の大事故の裏には29件の軽傷と300件のヒヤリ・ハットが隠れています。氷山の一角である大事故を防ぐには、水面下に大量にあるヒヤリ・ハットの芽を摘むことが不可欠です。",
      expId: "Piramida Heinrich menegaskan: melenyapkan 300 insiden kecil hiyari-hatto adalah satu-satunya kunci mutlak mencegah 1 kematian fatal.",
      expNe: "ठूलो दुर्घटना रोक्ने एउटै उपाय भनेको ३०० वटा साना-साना गल्ती र तर्सिएका घटनालाई समयमै समाधान गर्नु हो।"
    },
    {
      cat: "第5章 建設業法（P.123〜124）",
      q: "建設業法に基づき、**施工の技術上の管理をつかさどるために「すべての工事現場」に配置が義務付けられている技術者**は何ですか。",
      q_id: "Berdasarkan UU Jasa Konstruksi Jepang, teknisi ahli apakah yang WAJIB ditempatkan di 'SETIAP LOKASI PROYEK' untuk memimpin manajemen teknis?",
      q_ne: "जापानको निर्माण व्यवसाय ऐन अनुसार, प्राविधिक रेखदेख गर्न 'प्रत्येक कार्यस्थलमा' राख्नैपर्ने अनिवार्य इन्जिनियर को हुन्?",
      options: [
        { ja: "主任技術者（しゅにんぎじゅつしゃ）※一定規模以上の下請契約がある特定建設業者は監理技術者", id: "Shunin Gijutsusha (Insinyur Utama) *atau Kanri Gijutsusha untuk proyek dengan subkontrak besar", ne: "शुनिन गिजुचुशा (प्रमुख प्राविधिक / चिफ इन्जिनियर) *ठूला प्रोजेक्टमा कान्त्री गिजुचुशा" },
        { ja: "現場警備員", id: "Petugas Keamanan Proyek (Satpam)", ne: "सुरक्षा गार्ड" },
        { ja: "近隣住民の自治会長", id: "Ketua RT / Perwakilan Warga Setempat", ne: "टोल सुधार समितिको अध्यक्ष" },
        { ja: "工具の運搬ドライバー", id: "Sopir Pengantar Perkakas", ne: "सामान ओसार्ने चालक" }
      ],
      answer: 0,
      expJa: "【テキスト P.123〜124参照】建設業者は元請・下請を問わず、すべての現場に「主任技術者」を配置しなければなりません。一定規模以上の下請発注を行う特定建設業者は「監理技術者」を配置します。",
      expId: "Kontraktor wajib menempatkan Shunin Gijutsusha di setiap proyek. Untuk proyek berskala subkontrak besar, wajib Kanri Gijutsusha.",
      expNe: "हरेक कार्यस्थलमा प्राविधिक कामको नेतृत्व गर्न 'शुनिन गिजुचुशा' राख्नैपर्छ। ठूला ठेक्कामा 'कान्त्री गिजुचुशा' चाहिन्छ।"
    }
  ]
};
