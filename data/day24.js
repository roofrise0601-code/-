const CURRENT_QUIZ_DATA = {
  title: "Day 24：5S・<ruby>危険予知<rt>きけんよち</rt></ruby>（KY）とKYT4ラウンド<ruby>法<rt>ほう</rt></ruby>（テキスト P.87〜93）",
  key: "score_gakka4_24",
  passScore: 70,
  questions: [
    {
      cat: "第3章 5S活動のねらい（P.87〜88）",
      q: "日本の建設現場で徹底される「5S活動」について、**企業が現場に対して期待していること（ねらい）**として正しい組み合わせはどれですか。",
      q_id: "Manakah kombinasi yang BENAR mengenai 3 harapan/tujuan utama perusahaan dalam menjalankan Gerakan 5S di proyek?",
      q_ne: "५S अभियानबाट कम्पनीले कार्यस्थलबाट अपेक्षा गरेका ३ मुख्य लक्ष्यहरूको सही जोडी कुन हो?",
      options: [
        { ja: "全作業員の自主性向上・良好なチームワークづくり・職長のリーダーシップの養成", id: "Peningkatan kemandirian pekerja, pembentukan kerja sama tim yang solid, dan pembinaan kepemimpinan mandor", ne: "सबै कामदारको आत्मनिर्णय क्षमता वृद्धि, उत्कृष्ट टिमवर्क निर्माण, र शोकुचोको नेतृत्व क्षमता विकास" },
        { ja: "作業員の手待ち時間の増加・工程の遅延・手直し作業の推奨", id: "Peningkatan waktu menganggur, penundaan jadwal, dan anjuran kerja ulang", ne: "कामदारलाई खाली बसाउने, काम ढिलो गर्ने, र काम दोहोर्याउन लगाउने" },
        { ja: "他職種との会話の禁止・安全パトロールの中止・日報作成の廃止", id: "Pelarangan bicara dengan subkon lain, penghentian patroli, dan penghapusan laporan harian", ne: "अरूसँग बोल्न निषेध, गस्ती बन्द, र दैनिक रिपोर्ट खारेज" },
        { ja: "高価な清掃ロボットの購入・残業時間の倍増・安全掲示板の撤去", id: "Pembelian robot mahal, penggandaan lembur, dan pencopotan papan informasi", ne: "महँगो रोबोट किन्ने, ओभरटाइम दोब्बर बनाउने, र सूचना बोर्ड हटाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.87〜88参照】5S活動の企業としてのねらいは「信頼される企業になること」であり、現場には①作業員の自主性向上、②良好なチームワークづくり、③職長のリーダーシップ養成が期待されています。",
      expId: "3 tujuan 5S bagi perusahaan: memupuk inisiatif mandiri pekerja, memperkuat kekompakan tim, dan mengasah jiwa kepemimpinan mandor.",
      expNe: "५S को ३ मुख्य उद्देश्य: कामदारको स्व-जाँगर बढाउने, राम्रो टिमवर्क बनाउने, र शोकुचोको नेतृत्व सीप तिखार्ने हो।"
    },
    {
      cat: "第3章 5Sにおける職長の役割（P.89〜90）",
      q: "現場の5S活動において、**職長が果たすべき役割**として最も適切なものはどれですか。",
      q_id: "Manakah peran yang PALING TEPAT bagi seorang Shokucho dalam memimpin aktivitas 5S di kelompok kerjanya?",
      q_ne: "५S अभियानमा एक जना शोकुचोले निर्वाह गर्नुपर्ने सबैभन्दा उपयुक्त भूमिका कुन हो?",
      options: [
        { ja: "自らが所属する班の整理・整頓・清掃を率先して行い、危険箇所や改善点を指摘して作業員と協力して改善する", id: "Memimpin langsung dengan memberi teladan dalam 5S, menunjukkan area bahaya/perbaikan, dan bekerja sama dengan tim", ne: "आफ्नो टोलीको सरसफाइ र व्यवस्थापनमा आफैं अघि सरेर उदाहरण बन्ने, जोखिम र सुधारका ठाउँ औंल्याएर कामदारसँग मिलेर सुधार्ने" },
        { ja: "自分は腕組みをして見ているだけで、新入社員だけに現場全体の掃除を押し付ける", id: "Hanya berdiri melipat tangan dan membebankan semua pembersihan kepada pekerja baru", ne: "आफू हात बाँधेर हेरिरहने र सबै सरसफाइ नयाँ कामदारलाई मात्र गर्न लगाउने" },
        { ja: "通路に足場材やゴミが散乱していても「誰かが片付けるだろう」と放置する", id: "Membiarkan material dan sampah berserakan di jalan dengan anggapan orang lain yang akan merapikannya", ne: "बाटोमा सामान छरपस्ट भए पनि 'कसैले उठाइहाल्छ नि' भन्दै बेवास्ता गर्ने" },
        { ja: "5Sは仕事の邪魔になるので、作業員が掃除を始めたら怒鳴ってやめさせる", id: "Membentak dan melarang pekerja bersih-bersih karena menganggap 5S membuang waktu kerja", ne: "५S ले काममा बाधा पुर्याउँछ भन्दै कामदारले सफा गर्न खोज्दा हप्काएर रोक्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.89〜90参照】職長は自ら作業環境の整備や清掃を「率先して行う」ことで作業員の意識改革を促し、危険箇所の指摘や改善策の実施を通じて安全性を向上させます。",
      expId: "Mandor harus menjadi teladan langsung (soksen-shihan) dalam 5S, bukan sekadar memerintah bawahan dari jauh.",
      expNe: "शोकुचोले आफैं अघि सरेर ५S गरेपछि मात्र कामदारहरू प्रेरित हुन्छन्। जोखिम औंल्याएर सँगै समाधान गर्नुपर्छ।"
    },
    {
      cat: "第3章 KY活動の3ステップ（P.91〜92）",
      q: "現場で日常的に行う「**危険予知（KY）活動**」の具体的な3つのステップとして、**正しい順序**はどれですか。",
      q_id: "Manakah 3 langkah urutan yang BENAR dalam menjalankan Aktivitas Prediksi Bahaya (KY Katsudou) harian?",
      q_ne: "दैनिक कार्यस्थलमा गरिने 'खतरा पूर्वअनुमान (KY) अभ्यास' का ३ चरणहरूको सही क्रम कुन हो?",
      options: [
        { ja: "Step1 作業場所や作業内容の危険の洗い出し ➔ Step2 危険の予測 ➔ Step3 危険の除去や軽減", id: "Step 1: Identifikasi Bahaya -> Step 2: Prediksi Akibat Musibah -> Step 3: Eliminasi atau Mitigasi Bahaya", ne: "चरण १: काम र ठाउँको जोखिम केलाउने -> चरण २: सम्भावित दुर्घटना अनुमान गर्ने -> चरण ३: जोखिम हटाउने वा घटाउने" },
        { ja: "Step1 危険の除去 ➔ Step2 危険の洗い出し ➔ Step3 危険の予測", id: "Eliminasi -> Identifikasi -> Prediksi", ne: "हटाउने -> केलाउने -> अनुमान गर्ने" },
        { ja: "Step1 危険の予測 ➔ Step2 危険の除去 ➔ Step3 危険の洗い出し", id: "Prediksi -> Eliminasi -> Identifikasi", ne: "अनुमान गर्ने -> हटाउने -> केलाउने" },
        { ja: "Step1 道具の片付け ➔ Step2 休憩 ➔ Step3 危険の放置", id: "Merapikan alat -> Istirahat -> Membiarkan bahaya", ne: "औजार थन्काउने -> आराम गर्ने -> खतरा छोड्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.91〜92参照】KY活動は、①作業場所や内容の危険の洗い出し ➔ ②発生する災害の予測と対策検討 ➔ ③危険の除去・低減措置の実施（安全ネットや柵の設置など）の順に行います。",
      expId: "Alur KY: Temukan titik bahaya -> Prediksi kecelakaan yang mungkin timbul -> Singkirkan atau kurangi risikonya.",
      expNe: "पहिले कहाँ के खतरा छ केलाउने, त्यसबाट के दुर्घटना हुनसक्छ अनुमान गर्ने र समाधानका उपाय लगाएर खतरा हटाउने।"
    },
    {
      cat: "第3章 KYT基礎4ラウンド法：1R（P.92〜93）",
      q: "KYT基礎4ラウンド法において、イラストシートを見せて「**どんな危険がひそんでいるか**」を作業員全員で話し合い、模造紙に書き出すラウンドはどれですか。",
      q_id: "Dalam KYT 4-Rounds, pada ronde (R) berapakah para pekerja berdiskusi menemukan 'Bahaya apa yang tersembunyi' dari lembar ilustrasi?",
      q_ne: "KYT ४-राउन्ड विधिमा चित्र हेरेर 'कस्तो खतरा लुकेको छ' भनी सबै कामदार मिलेर खोज्ने पहिलो चरण (राउन्ड) कुन हो?",
      options: [
        { ja: "1R（第1ラウンド：現状把握）", id: "Ronde 1 (1R: Memahami Situasi Saat Ini / Genjou Haaku)", ne: "१R (पहिलो राउन्ड: वर्तमान अवस्था पहिचान)" },
        { ja: "2R（第2ラウンド：本質追究）", id: "Ronde 2 (2R: Mengusut Hakikat Bahaya)", ne: "२R (दोस्रो राउन्ड)" },
        { ja: "3R（第3ラウンド：対策樹立）", id: "Ronde 3 (3R: Merancang Solusi)", ne: "३R (तेस्रो राउन्ड)" },
        { ja: "4R（第4ラウンド：目標設定）", id: "Ronde 4 (4R: Penetapan Target Tim)", ne: "४R (चौथो राउन्ड)" }
      ],
      answer: 0,
      expJa: "【テキスト P.92〜93参照】1R（現状把握）ではイラストシート等を見て、「どこに危険がひそんでいるか」「何が危険要因か」「どんな事故につながるか」を全員で洗い出します。",
      expId: "1R (Ronde 1) bertema 'Bahaya apa yang tersembunyi?' untuk mengidentifikasi seluruh potensi kecelakaan pada gambar kerja.",
      expNe: "१R मा कामदारहरूले चित्र हेरेर कहाँ, के कारणले, कस्तो दुर्घटना हुनसक्छ भनी सबै जोखिमहरू बाहिर ल्याउँछन्।"
    },
    {
      cat: "第3章 KYT基礎4ラウンド法：2R（P.93）",
      q: "KYTの「**2R（本質追究：これが危険のポイントだ）**」において、洗い出された危険の中から特に重要な危険を絞り込む際に行う合意形成と確認の動作はどれですか。",
      q_id: "Pada Ronde 2 (2R: Ini titik bahaya utamanya!), tindakan apakah yang dilakukan tim untuk menyepakati bahaya paling kritis?",
      q_ne: "२R (मुख्य खतरा यही हो) मा सबैभन्दा जोखिमपूर्ण बुँदा छनोट गरेपछि टोलीले कसरी पक्का गर्छ?",
      options: [
        { ja: "重要な危険に〇印、全員の合意で特に重要な危険に◎印とアンダーラインをつけ、「指差し唱和」で確認する", id: "Beri tanda ○, lalu sepakati bahaya paling kritis dengan tanda ◎ dan garis bawah, lalu lakukan 'Tunjuk-Sebut Bersama' (Shisashi Shouwa)", ne: "महत्त्वपूर्ण खतरामा ○ चिन्ह, सबैको सहमतिमा मुख्य खतरामा ◎ र रेखा कोर्ने, अनि सबै मिलेर 'हातले औंल्याउँदै आवाज निकालेर (तुरुन्तै)' पक्का गर्ने" },
        { ja: "職長が一人で適当に決めて、作業員には内緒にしておく", id: "Mandor menentukan sendiri secara rahasia tanpa memberi tahu pekerja", ne: "शोकुचोले एक्लै छान्ने र कामदारलाई थाहा नदिने" },
        { ja: "じゃんけんで負けた人の意見を一番重要な危険にする", id: "Memilih bahaya terpenting berdasarkan siapa yang kalah suit (janken)", ne: "खेल खेलेर हार्नेको कुरालाई मुख्य खतरा मान्ने" },
        { ja: "危険のポイントが決まったら、指差し確認をせずにすぐに解散する", id: "Langsung bubar tanpa melakukan tunjuk-sebut bersama", ne: "हातले नऔंल्याई तुरुन्तै बैठक टुंग्याउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.93参照】2Rでは重要危険に〇、最重要危険に◎とアンダーラインをつけ、全員で『指差し唱和』を行い、危険に対するチームの気持ちと危機感を一致させます。",
      expId: "Pada 2R, bahaya paling kritis diberi tanda ◎ dan garis bawah, lalu dikonfirmasi bersama lewat tunjuk-sebut (shisashi shouwa).",
      expNe: "२R मा मुख्य खतरालाई ◎ चिन्ह लगाएर सबैले एकै स्वरमा औंल्याउँदै आवाज निकालेर आफ्नो मनमा खतराको गम्भीरता बसाल्छन्।"
    },
    {
      cat: "第3章 KYT基礎4ラウンド法：3R（P.93）",
      q: "KYTの「**3R（対策樹立：あなたならどうする）**」で作業員同士が行う行動として、正しいものはどれですか。",
      q_id: "Apakah yang dilakukan oleh para pekerja pada Ronde 3 (3R: Apa yang akan Anda lakukan / Solusi)?",
      q_ne: "३R (तपाईं भए के गर्नुहुन्छ / समाधानका उपाय) मा कामदारहरूले के गर्छन्?",
      options: [
        { ja: "2Rで◎印をつけた危険のポイントを解決するために、具体的で実行可能な対策案を全員で出し合う", id: "Mengusulkan ide-ide solusi konkret dan realistis bersama-sama untuk memecahkan titik bahaya ◎ dari Ronde 2", ne: "२R मा छानिएको मुख्य खतरा ◎ लाई समाधान गर्न सबैले व्यावहारिक र वास्तविक उपायहरू पालैपालो अघि सार्ने" },
        { ja: "危険を解決する方法はないと諦めて沈黙する", id: "Menyerah dan diam karena menganggap bahaya mustahil diselesaikan", ne: "कुनै उपाय छैन भन्दै चुपचाप बस्ने" },
        { ja: "他人の出した意見の悪口を言って喧嘩をする", id: "Mengejek pendapat rekan kerja dan memicu pertengkaran", ne: "अरूले दिएको सुझावलाई गिज्याउने र झगडा गर्ने" },
        { ja: "安全靴を脱いでリラックスしてお茶を飲む", id: "Melepas sepatu pengaman lalu santai minum teh", ne: "जुत्ता फुकालेर चिया पिउँदै बस्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.93参照】3R（あなたならどうする）では、2Rで絞り込んだ最重要危険（◎）をどうやって安全に解決するか、具体的で前向きな対策案を出し合います。",
      expId: "3R berfokus menggali ide konkret dari seluruh anggota tim untuk menyelesaikan bahaya kritis yang disepakati di 2R.",
      expNe: "३R मा कामदार आफैंले 'यो खतराबाट बच्न हामीले के गर्नुपर्छ' भनी सुरक्षित काम गर्ने ठोस उपायहरू निकाल्छन्।"
    },
    {
      cat: "第3章 KYT基礎4ラウンド法：4R（P.93）",
      q: "KYTの最終段階である「**4R（目標設定：私たちはこうする）**」で決定・実施することとして、正しいものはどれですか。",
      q_id: "Manakah tindakan yang BENAR pada tahap akhir Ronde 4 (4R: Kami bertekad melakukan ini / Target Tindakan)?",
      q_ne: "अन्तिम चरण ४R (हामी यसो गर्नेछौं / टोलीको साझा लक्ष्य) मा तय गरिने कुरा कुन हो?",
      options: [
        { ja: "対策を全員の合意で絞り込んで「重点実施項目（※印）」とし、実践するための「チーム行動目標」を設定して指差し唱和する", id: "Menyaring solusi terbaik menjadi 'Item Prioritas (※)', menetapkan 'Target Tindakan Tim', lalu menguncinya dengan tunjuk-sebut bersama", ne: "उपायहरू मध्ये उत्कृष्ट उपाय छानेर 'मुख्य प्राथमिकता (※)' बनाउने, 'टोलीको साझा कार्य-लक्ष्य' तोक्ने र सबैले औंल्याउँदै आवाज निकालेर दृढता जनाउने" },
        { ja: "行動目標は設定せず、各自がバラバラに好きな作業を勝手に始める", id: "Tidak menetapkan target dan membiarkan setiap orang bekerja sesuka hati", ne: "कुनै लक्ष्य नतोकी सबैलाई मनखुसी काम गर्न पठाउने" },
        { ja: "一番危険な作業をクジ引きで決めた1人だけに押し付ける", id: "Membebankan tugas paling berbahaya kepada 1 orang yang kalah undian", ne: "सबैभन्दा जोखिमपूर्ण काम चिट्ठा हालेर एक जनालाई मात्र लगाउने" },
        { ja: "模造紙に書いた内容を破り捨てて誰にも見せないようにする", id: "Merobek dan membuang kertas plano agar tidak terlihat orang", ne: "कागज च्यातेर फालिदिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.93参照】4Rでは対策の中から全員合意で絞り込んで※印をつけ「重点実施項目」とします。これを「〇〇ヨシ！」の形式でチーム行動目標とし、指差し唱和で確認します。",
      expId: "Pada 4R, tim merumuskan 'Target Tindakan Tim' (※) dan mengikrarkannya bersama melalui tunjuk-sebut agar tertanam di alam bawah sadar.",
      expNe: "४R मा टोलीले 'हामी आज यस्तो नियम पूर्ण पालना गर्छौं, ठीक छ (योशी)!' भनी एकैसाथ हातले औंल्याएर संकल्प गर्छन्।"
    },
    {
      cat: "第3章 指差し呼称の効果（P.93〜94）",
      q: "現場で対象を指差し「〇〇〇ヨシ！」と声を出して確認する「**指差し呼称（しさこしょう）**」がもたらす安全上の効果として、正しいものはどれですか。",
      q_id: "Apakah manfaat utama K3 dari tindakan 'Tunjuk-Sebut' (Shisashi Koshou / Pointing and Calling) saat memeriksa target kerja?",
      q_ne: "औंलाले देखाउँदै ठूलो स्वरले '...ठिक छ (योशी)!' भनेर जाँच गर्ने 'तुरुन्तै औंल्याएर आवाज निकाल्ने (शिसा-कोशौ)' विधिको मुख्य फाइदा के हो?",
      options: [
        { ja: "意識状態を引き締め、注意力を高めてヒューマンエラー（誤操作や見落とし）の発生率を大幅に激減させる", id: "Membangkitkan kesadaran otak, mempertajam fokus perhatian, dan menurunkan drastis tingkat human error (salah operasi/lalai)", ne: "मस्तिष्कलाई सतर्क बनाउने, ध्यान केन्द्रित गराउने र मानिसबाट हुने गल्ती तथा दुर्घटनालाई धेरै घटाउने" },
        { ja: "周囲の騒音にかき消されて誰にも聞こえないため、心理的な気休めにしかならない", id: "Hanya formalitas psikologis tanpa dampak nyata karena tertutup bising mesin", ne: "हल्लाले गर्दा आवाज नसुनिने भएकाले यसको कुनै वैज्ञानिक फाइदा नहुने" },
        { ja: "作業スピードが半分以下に落ちるため、元請会社から禁止されている", id: "Dilarang oleh kontraktor utama karena dinilai memperlambat kerja", ne: "काम ढिलो हुने भएकाले निर्माण कम्पनीले यो विधि गर्न बन्द गरेको छ" },
        { ja: "指を差した方向に必ず重大な事故が発生するようになる", id: "Pasti memicu kecelakaan ke arah yang ditunjuk oleh jari", ne: "औंलाले देखाएको दिशामा दुर्घटना हुने गर्दछ" }
      ],
      answer: 0,
      expJa: "【テキスト P.93〜94参照】指差し呼称は目・腕・口・耳を総動員して確認する動作です。意識レベルをクリアな状態（レベルIII）に高め、確認の誤りや見落としを格段に減少させる効果があります。",
      expId: "Pointing and Calling mengaktifkan koordinasi mata, tangan, mulut, dan telinga untuk menaikkan kesadaran mental ke Level III (fokus penuh).",
      expNe: "आँखा, हात, मुख र कान एकैसाथ प्रयोग गरेर जाँच गर्दा दिमाग पूर्ण चनाखो हुन्छ र काममा हुने भुलचुक रोकिन्छ।"
    },
    {
      cat: "第3章 意識レベルの5段階（P.93〜94）",
      q: "意識レベルの5段階（表3-7）において、日常の定常作業が行われがちだが、不注意になりやすい「**レベルII**」と、指差し呼称によって引き上げられる理想的な「**レベルIII**」の状態の組み合わせとして正しいものはどれですか。",
      q_id: "Berdasarkan 5 Tingkat Kesadaran (Tabel 3-7), manakah pasangan yang TEPAT antara kondisi Level II (rutinitas) dan Level III (ideal fokus)?",
      q_ne: "चेतनाको ५ तह (तालिका ३-७) अनुसार दैनिक सामान्य काम गर्दा हुने 'लेभल II' र औंल्याएर बोल्दा पुगिने उत्कृष्ट 'लेभल III' को सही जोडी कुन हो?",
      options: [
        { ja: "レベルII＝正常でくつろいだ状態（注意が内方に向き不注意が起きやすい） ／ レベルIII＝正常で明快な状態（注意が前向きで信頼性が極めて高い）", id: "Level II = Relaks / Pasif (rawan lengah/melamun) / Level III = Jernih dan Aktif (fokus tajam, keandalan sangat tinggi)", ne: "लेभल II = सामान्य तर सुस्त अवस्था (असावधानी हुने जोखिम) / लेभल III = पूर्ण चनाखो र स्पष्ट अवस्था (अत्यन्त भरपर्दो र सुरक्षित)" },
        { ja: "レベルII＝睡眠状態 ／ レベルIII＝パニック過緊張状態", id: "Level II = Tidur / Level III = Panik histeris", ne: "लेभल II = निदाएको / लेभल III = आत्तिएको" },
        { ja: "レベルII＝怒っている状態 ／ レベルIII＝泣いている状態", id: "Level II = Marah / Level III = Menangis", ne: "लेभल II = रिसाएको / लेभल III = रोएको" },
        { ja: "レベルIIもレベルIIIも無意識（意識ゼロ）で何も考えていない状態", id: "Keduanya adalah kondisi tidak sadar tanpa berpikir apa pun", ne: "दुवै तह बेहोस भएको अवस्था हुन्" }
      ],
      answer: 0,
      expJa: "【テキスト P.93〜94参照】通常作業はくつろいだレベルIIで行われがちで不注意が生じます。指差し呼称を行うことで、意識をレベルIII（積極活動時・クリアーで明快、信頼性0.999999以上）に引き上げます。",
      expId: "Tunjuk-sebut menaikkan otak dari Level II (santai/melamun) menjadi Level III (jernih/fokus tinggi) sehingga zero-mistake tercapai.",
      expNe: "सामान्य काम गर्दा दिमाग लेभल II (सुस्त) मा हुन्छ। औंल्याएर बोल्दा दिमाग लेभल III (पूर्ण सचेत) मा पुगेर दुर्घटना हुन दिँदैन।"
    },
    {
      cat: "第3章 過緊張とパニック（P.93〜94）",
      q: "意識レベルの「**レベルIV（過緊張・感情パニック）**」にある作業員の状態とリスクとして、正しいものはどれですか。",
      q_id: "Apakah risiko bahaya jika seorang pekerja berada pada 'Tingkat Kesadaran Level IV' (Hipertensi / Sangat Panik)?",
      q_ne: "कामदारको चेतना 'लेभल IV (अत्यधिक तनाव / आत्तिएको अवस्था)' मा पुग्दा कस्तो जोखिम हुन्छ?",
      options: [
        { ja: "極端な緊張や恐れから視野が狭窄して1点に固執し、パニックになって正常な判断ができず信頼性が0.9以下に急落する", id: "Kepanikan ekstrem membuat pandangan menyempit pada 1 titik saja, kehilangan akal sehat, dan keandalan kerja anjlok di bawah 0,9", ne: "अत्यधिक डर र आत्तिएर आँखाले एउटा कुरा मात्र देख्ने, सही निर्णय लिन नसक्ने र कामको विश्वसनीयता ०.९ भन्दा तल खस्कने" },
        { ja: "最も安全で落ち着いており、どんな危険作業でも絶対に事故を起こさない", id: "Paling tenang dan dijamin tidak akan pernah mengalami kecelakaan apa pun", ne: "सबैभन्दा सुरक्षित भएर कुनै दुर्घटना नहुने अवस्था" },
        { ja: "ぐっすり眠っていて呼吸が完全に停止している状態", id: "Kondisi tidur lelap dan berhenti bernapas", ne: "गहिरो निद्रामा परेर सास रोकिएको अवस्था" },
        { ja: "通常通りのリラックスした気分で鼻歌を歌いながら作業している状態", id: "Bekerja santai sambil bernyanyi riang tanpa beban", ne: "गीत गाउँदै रमाइलोसँग काम गरिरहेको अवस्था" }
      ],
      answer: 0,
      expJa: "【テキスト P.93〜94参照】レベルIVは極度のパニック・過緊張状態で、注意が1点に固執し周囲の危険が見えなくなります。指差し呼称にはレベルIVの興奮を引き下げて冷静なレベルIIIに戻す効果もあります。",
      expId: "Level IV adalah kondisi panik yang sangat berbahaya karena otak mengalami 'tunnel vision' dan kehilangan kendali diri.",
      expNe: "लेभल IV मा मानिस आत्तिएर वरिपरिको खतरा देख्न सक्दैन। औंल्याएर बोल्ने अभ्यासले दिमागलाई शान्त लेभल III मा ल्याउँछ।"
    }
  ]
};
