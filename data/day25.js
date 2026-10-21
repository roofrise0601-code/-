const CURRENT_QUIZ_DATA = {
  title: "Day 25：ヒヤリハットとヒューマンエラー<ruby>防止<rt>ぼうし</rt></ruby>（テキスト P.94〜104）",
  key: "score_gakka4_25",
  passScore: 70,
  questions: [
    {
      cat: "第3章 ハインリッヒの法則（P.94〜95）",
      q: "労働安全の代表的な統計法則である「**ハインリッヒの法則**」における、**「重大災害：軽傷災害：無傷害災害（ヒヤリ・ハット）」の比率**として正しいものはどれですか。",
      q_id: "Manakah rasio perbandingan yang BENAR dalam 'Hukum Heinrich' antara 'Bencana Berat : Bencana Ringan : Insiden Hampir Celaka (Hiyari-Hatto)'?",
      q_ne: "औद्योगिक सुरक्षाको प्रसिद्ध 'हाइन्रिखको नियम' अनुसार 'गम्भीर दुर्घटना : सामान्य चोट : दुर्घटना हुनबाट बचेको (हियारी-हात्तो)' को सही अनुपात कुन हो?",
      options: [
        { ja: "1 ： 29 ： 300", id: "1 : 29 : 300", ne: "१ : २९ : ३००" },
        { ja: "1 ： 10 ： 100", id: "1 : 10 : 100", ne: "१ : १० : १००" },
        { ja: "1 ： 5 ： 50", id: "1 : 5 : 50", ne: "१ : ५ : ५०" },
        { ja: "1 ： 50 ： 500", id: "1 : 50 : 500", ne: "१ : ५० : ५००" }
      ],
      answer: 0,
      expJa: "【テキスト P.94〜95参照】ハインリッヒの法則では、1件の重い災害（死亡・重症）の背景には、29件の軽傷災害があり、さらにその下には怪我に至らなかった300件のヒヤリ・ハットが存在します。",
      expId: "Rasio Heinrich 1:29:300 membuktikan bahwa di balik 1 korban tewas/berat, ada 29 luka ringan dan 300 kejadian nyaris celaka (hiyari-hatto).",
      expNe: "हाइन्रिखको नियम अनुसार: १ वटा गम्भीर मृत्यु वा चोटको पछाडि २९ वटा साना चोट र ३०० वटा चोट नलागेका तर तर्सिएका (हियारी-हात्तो) घटना हुन्छन्।"
    },
    {
      cat: "第3章 ヒヤリ・ハット報告の原則（P.95〜96）",
      q: "現場でヒヤリ・ハット活動を活性化し、作業員からの報告を増やすために**「職長や管理者が守らなければならない最重要ルール」**はどれですか。",
      q_id: "Manakah aturan PALING PENTING yang wajib dipatuhi mandor/manajemen agar pekerja tidak takut melaporkan kejadian nyaris celaka (hiyari-hatto)?",
      q_ne: "कार्यस्थलमा कामदारहरूले नडराईकन हियारी-हात्तो रिपोर्ट गरुन् भन्नाका लागि शोकुचोले पालना गर्नैपर्ने सबैभन्दा मुख्य नियम कुन हो?",
      options: [
        { ja: "報告者を非難したり、責任を追及したり、ペナルティを科したりしない", id: "Dilarang menyalahkan, memojokkan, atau menghukum pekerja yang melapor", ne: "रिपोर्ट गर्ने कामदारलाई गाली नगर्ने, दोष नथोपर्ने र कुनै सजाय नदिने" },
        { ja: "ヒヤリ・ハットを起こした作業員の名前を朝礼で全員の前で大声で叱責する", id: "Membentak nama pekerja yang melapor di depan umum saat apel pagi", ne: "बिहानी बैठकमा सबैका अगाडि रिपोर्ट गर्नेको नाम लिएर हप्काउने" },
        { ja: "報告された内容をその場でゴミ箱に捨てて一切対策を講じない", id: "Membuang lembar laporan ke tempat sampah tanpa menindaklanjutinya", ne: "रिपोर्टलाई डस्टबिनमा फालिदिने र कुनै सुधार नगर्ने" },
        { ja: "ヒヤリ・ハットを報告した作業員に罰金として1万円を支払わせる", id: "Mengenakan denda uang kepada pekerja yang berani melaporkan insiden", ne: "रिपोर्ट गर्ने कामदारलाई जरिवाना तिराउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.95〜96参照】報告者を責めたり非難したりすると、作業員は隠蔽するようになります。安全向上のための貴重な教訓として受け止め、責任追及をしないことが鉄則です。",
      expId: "Prinsip non-blaming: jangan pernah menghukum atau memarahi pelapor hiyari-hatto, agar mereka tidak menyembunyikan potensi bahaya.",
      expNe: "रिपोर्ट गर्नेलाई गाली गरेमा कामदारले गल्ती लुकाउन थाल्छन्। त्यसैले रिपोर्ट गर्नेको प्रशंसा गर्ने र दोष नलगाउने वातावरण बनाउनुपर्छ।"
    },
    {
      cat: "第3章 ヒューマンエラー：認知ミス（P.97）",
      q: "思い込み、図面の読み間違い（錯覚）、警告表示の見落としなどが原因で起こる**「認知ミス」を防止するための最も有効な行動**はどれですか。",
      q_id: "Manakah tindakan yang PALING EFEKTIF untuk mencegah 'Ninchi Misu' (Kesalahan Persepsi: salah baca gambar, ilusi, salah dengar)?",
      q_ne: "नक्सा गलत पढ्नु, झुक्किनु वा चेतावनी बोर्ड नदेख्नु जस्ता 'धारणा/बुझाइको गल्ती (निन्ची मिसु)' रोक्ने सबैभन्दा राम्रो उपाय कुन हो?",
      options: [
        { ja: "指差し確認（指差し呼称）の徹底と、複数人数によるダブルチェックの確認を行う", id: "Menegakkan tunjuk-sebut (pointing and calling) dan pengecekan ganda oleh beberapa orang", ne: "औंल्याएर बोल्ने (तुरुन्तै जाँच्ने) अभ्यास अनिवार्य गर्ने र दुई वा बढी व्यक्ति मिलेर दोहोरो जाँच (डबल चेक) गर्ने" },
        { ja: "自分の勘と記憶だけを信じて、図面や警告看板を二度と見ない", id: "Hanya mempercayai insting sendiri dan tidak melihat gambar/rambu lagi", ne: "आफ्नो अन्दाजको भर पर्ने र नक्सा वा बोर्ड फेरि नहेर्ने" },
        { ja: "薄暗い場所でも照明を点けずに感覚だけで作業を進める", id: "Bekerja dalam gelap mengandalkan perasaan tanpa menyalakan lampu", ne: "अँध्यारोमा बत्ती नबाली अन्दाजमा काम गर्ने" },
        { ja: "わからない専門用語があっても質問せずに適当に相づちを打つ", id: "Mengangguk pura-pura paham tanpa berani bertanya istilah teknis", ne: "नबुझेको कुरा नसोधेर बुझे जस्तो गरी टाउको हल्लाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.97参照】認知ミスは思い込みや見落としから起こります。防止には、対象を指差し声に出して確かめる「指差し確認」と「複数人による確認（相互確認）」が最も有効です。",
      expId: "Ninchi misu dicegah dengan pointing and calling serta pengecekan ganda (double-check) oleh rekan kerja.",
      expNe: "झुक्किने गल्तीबाट बच्न औंल्याएर आवाज निकाल्दै जाँच गर्ने र अर्को साथीलाई पनि हेर्न लगाउने (दोहोरो जाँच) गर्नुपर्छ।"
    },
    {
      cat: "第3章 ヒューマンエラー：不注意・低下（P.97〜98）",
      q: "単調な作業の継続や1点への集中によって周囲への注意力が低下した作業員に対し、**周囲や職長が取れる最も有効なサポート行動**は何ですか。",
      q_id: "Tindakan saling dukung apakah yang PALING EFEKTIF dilakukan oleh rekan kerja atau Shokucho saat perhatian pekerja mulai menurun?",
      q_ne: "एउटै काम लगातार गर्दा वा एकाग्र हुँदा वरपर ध्यान नपुगेका कामदारलाई जोगाउन शोकुचो र साथीहरूले गर्नुपर्ने सबैभन्दा राम्रो काम कुन हो?",
      options: [
        { ja: "作業員どうしがお互いに積極的に「声がけ（周囲からの声がけ）」を行う習慣をつける", id: "Membiasakan saling menyapa dan memberi teguran suara ramah (Koegake) antar-pekerja secara aktif", ne: "कामदारहरूले एकापसमा सक्रिय रूपमा 'आवाज दिएर सचेत गराउने (कोएगाके)' बानी बसाल्ने" },
        { ja: "集中している作業員の背後から突然大声で驚かせる", id: "Mengagetkan pekerja dari belakang secara tiba-tiba dengan teriakan keras", ne: "काम गरिरहेको मान्छेलाई पछाडिबाट अचानक तर्साउने" },
        { ja: "集中が途切れるまで一切休憩を与えずに連続作業させる", id: "Melarang istirahat dan membiarkan terus bekerja tanpa henti", ne: "ध्यान नटुटेसम्म विश्राम नदिई काम गरिरहन लगाउने" },
        { ja: "危ない行動を見かけても他人の仕事には口を出さない", id: "Berdiam diri dan tidak peduli saat melihat tindakan berbahaya rekan", ne: "खतरा देखे पनि अरूको काम हो भन्दै नबोल्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.97〜98参照】人間が1点に集中している時や単調作業時は周囲が見えなくなります。職長や同僚が周囲の状況に気を配り、「お互いに声をかけ合う（声がけ）」ことが極めて有効です。",
      expId: "Saling mengingatkan lewat suara ramah (koegake) terbukti sangat ampuh memulihkan fokus pekerja yang melamun/lengah.",
      expNe: "एकाग्र हुँदा मानिसले वरपरको खतरा देख्दैन। त्यसैले साथी-साथीबीच आवाज दिएर सचेत गराउने बानीले दुर्घटना रोक्छ।"
    },
    {
      cat: "第3章 ヒューマンエラー：集団欠陥（P.98）",
      q: "工期が厳しくなった現場で、「安全よりも作業の速さを優先してしまう」ような現場の空気に流されて起こるヒューマンエラーを何と呼びますか。",
      q_id: "Apa sebutan untuk kesalahan manusia yang timbul akibat atmosfer kelompok yang mengabaikan K3 demi mengejar kecepatan saat deadline mepet?",
      q_ne: "म्याद छोटो भएपछि 'सुरक्षाभन्दा कामको गतिलाई प्राथमिकता दिने' कार्यस्थलको गलत माहोलका कारण हुने त्रुटिलाई के भनिन्छ?",
      options: [
        { ja: "集団欠陥（しゅうだんけっかん）", id: "Shuudan Kekkan (Cacat Kelompok / Groupthink Error)", ne: "स्युउदान केक्कान (समूहगत कमजोरी/गलत माहोलको त्रुटि)" },
        { ja: "単独ミス", id: "Kesalahan Individu", ne: "व्यक्तिगत गल्ती" },
        { ja: "機械トラブル", id: "Kerusakan Mekanis", ne: "मेसिनको खराबी" },
        { ja: "不可抗力", id: "Force Majeure (Keadaan Memaksa)", ne: "प्राकृतिक विपत्ति" }
      ],
      answer: 0,
      expJa: "【テキスト P.98参照】周囲の雰囲気やプレッシャーに流され、組織全体で安全ルールを軽視してしまうエラーを「集団欠陥」と呼びます。どんな状況でもルール順守を徹底させるのが職長の責務です。",
      expId: "Shuudan Kekkan adalah mentalitas salah kaprah kelompok di mana semua orang kompak memaklumi pelanggaran SOP demi mengejar target.",
      expNe: "'स्युउदान केक्कान' भन्नाले हतार भएको बेला समूह नै मिलेर सुरक्षा नियम मिच्ने गलत सामूहिक प्रवृत्ति हो।"
    },
    {
      cat: "第3章 ヒューマンエラー：近道・省略行動（P.98）",
      q: "急いで終わらせようとして、決められた手順を飛ばしたり自己流に変えたりしてしまう「**近道行動・省略行動**」への職長の対策として正しいものはどれですか。",
      q_id: "Manakah tindakan pencegahan yang BENAR bagi Shokucho dalam menghadapi 'Chikamichi Koudou' (Jalan Pintas) dan 'Shouryaku Koudou' (Menghilangkan Prosedur)?",
      q_ne: "छिटो सक्नका लागि तोकिएको नियम वा प्रक्रिया छल्ने 'सर्टकट लिने काम (चिकामिची/स्यौर्याकु कोउदोउ)' रोक्न शोकुचोले के गर्नुपर्छ?",
      options: [
        { ja: "手順を省略するとどんな重大な災害が起こるかを理解させ、手順の変更が必要な場合は作業中に勝手に変えず別の改善として取り組む", id: "Memahamkan bahaya fatal dari potong kompas SOP, dan jika prosedur rumit, lakukan perbaikan resmi secara terpisah bukan improvisasi spontan", ne: "प्रक्रिया छल्दा कस्तो डरलाग्दो दुर्घटना हुन्छ बुझाउने, र प्रक्रिया झन्झटिलो भए कामको बीचमा आफ्नै खुसीले नफेरी छुट्टै सुधारको छलफल गर्ने" },
        { ja: "作業が早く終わるのであれば、どんな近道行動や安全装置の解除も大いに褒める", id: "Memuji pekerja yang memotong kompas atau mematikan sensor pengaman demi kecepatan", ne: "काम छिटो सकिने भए सर्टकट लिने र सेन्सर बन्द गर्ने कामको प्रशंसा गर्ने" },
        { ja: "安全帯を掛け替えるのが面倒な場所では、親綱を外して飛び移ることを認める", id: "Mengizinkan melompat tanpa mengaitkan harness jika terasa repot", ne: "हार्नेस अड्काउन झन्झट भए बिना हुक नै फड्केर जान अनुमति दिने" },
        { ja: "作業手順書は破棄して、全員に思いつきで一番楽な近道をさせる", id: "Membuang buku SOP dan menyuruh semua orang mencari jalan pintas semaunya", ne: "नियम पुस्तिका च्यातेर सबैलाई सजिलो सर्टकट बाटो रोज्न लगाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.98参照】近道・省略行動は手抜きと同じで重大災害の温床です。手順を省いたときのリスクを周知徹底し、複雑すぎる手順は作業中ではなく事前の「改善活動」として見直します。",
      expId: "Potong kompas (jalan pintas) sangat mematikan. Mandor harus mengedukasi risikonya dan memperbaiki SOP secara resmi jika terlalu rumit.",
      expNe: "सर्टकट लिनु दुर्घटनाको मुख्य घर हो। नियम किन छ बुझाउनुपर्छ र प्रक्रिया लामो भए कामको बेला नभई पहिले नै बैठक बसेर सुधार्नुपर्छ।"
    },
    {
      cat: "第3章 場面行動本能（P.99）",
      q: "「脚立の上での作業中に道具を落としそうになったとき、**足場を離れてとっさに道具を捕まえようと手を伸ばして転落してしまう**」ような人間の本能的エラーを何と呼びますか。",
      q_id: "Apa istilah untuk kesalahan refleks manusia saat secara instingtif meraih alat kerja yang terjatuh dari tangga hingga hilang keseimbangan dan terjatuh?",
      q_ne: "भर्याङमा काम गर्दा औजार खस्न लाग्दा त्यसलाई समात्न खोज्दा सन्तुलन गुमाएर लड्ने जस्तो 'मानवको स्वाभाविक रिफ्लेक्स त्रुटि' लाई के भनिन्छ?",
      options: [
        { ja: "場面行動本能（ばめんこうどうほんのう）", id: "Bamen Koudou Honnou (Insting Refleks Spontan Situasional)", ne: "बामेन कोउदोउ होन्नौ (परिस्थिति अनुसार हुने स्वाभाविक प्रतिक्रिया/रिफ्लेक्स)" },
        { ja: "計画的サボタージュ", id: "Sabotase Terencana", ne: "योजनाबद्ध लापरबाही" },
        { ja: "睡眠障害", id: "Gangguan Tidur", ne: "निद्राको गडबडी" },
        { ja: "機械の誤作動", id: "Malfungsi Mesin", ne: "मेसिनको गडबडी" }
      ],
      answer: 0,
      expJa: "【テキスト P.99参照】目の前の出来事にとっさに反応してしまう行動を「場面行動本能」と呼びます。人間は本能的にそう動いてしまうことを理解し、KY活動等で事前に対策を話し合っておくことが重要です。",
      expId: "Bamen Koudou Honnou adalah refleks spontan alami manusia (contoh: refleks menangkap benda jatuh yang justru mencelakakan diri sendiri).",
      expNe: "'बामेन कोउदोउ होन्नौ' भन्नाले केही खस्दा समात्न हात लैजाने जस्तो मानिसको प्राकृतिक रिफ्लेक्स हो। यसबारे पहिले नै छलफल गरी जोगिनुपर्छ।"
    },
    {
      cat: "第3章 心身機能低下と疲労（P.99）",
      q: "加齢による心身の機能低下や疲労の蓄積によるヒューマンエラーを防ぐため、**現場で職長が行うべき日常の管理**として最も適切なものはどれですか。",
      q_id: "Manakah tindakan manajemen harian yang PALING TEPAT bagi Shokucho untuk mencegah human error akibat kelelahan dan penurunan stamina fisik?",
      q_ne: "थकान र उमेरका कारण शारीरिक क्षमता घट्दा हुने गल्ती रोक्न शोकुचोले कार्यस्थलमा गर्नुपर्ने दैनिक व्यवस्थापन कुन हो?",
      options: [
        { ja: "毎朝の朝礼で作業員の健康状態を確認し、適切な間隔で休憩時間を取らせ、熱中症対策を徹底する", id: "Memeriksa kebugaran saat apel pagi, menjadwalkan jeda istirahat dengan interval tepat, dan menegakkan pencegahan heatstroke", ne: "हरेक बिहानको बैठकमा स्वास्थ्य जाँच्ने, निश्चित समयको फरकमा नियमित विश्राम (ब्रेक) दिने, र हिटस्ट्रोक रोकथाम कडाइका साथ गर्ने" },
        { ja: "疲れている作業員にはエナジードリンクを飲ませて休憩なしで残業させる", id: "Mencekoki minuman berenergi dan memaksanya lembur tanpa istirahat", ne: "थाकेको कामदारलाई इनर्जी ड्रिंक खुवाएर बिना आराम ओभरटाइम खटाउने" },
        { ja: "高齢作業員には水分補給を禁止して作業速度を上げさせる", id: "Melarang minum air bagi pekerja lansia demi mengejar kecepatan", ne: "पाका कामदारलाई पानी पिउन नदिई कामको गति बढाउन लगाउने" },
        { ja: "疲労によるミスは本人の自己責任なので会社側は一切関与しない", id: "Menyatakan kelelahan adalah salah pribadi dan perusahaan lepas tangan", ne: "थकानको दोष कामदारकै हो भन्दै कम्पनीले कुनै वास्ता नगर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.99参照】疲労や機能低下は注意力を低下させ重大事故を招きます。毎朝の健康チェック、適切なインターバルでの休憩、涼しい休息環境の整備が職長の重要任務です。",
      expId: "Kelelahan memicu penurunan fokus. Wajib cek kesehatan pagi, berikan istirahat berkala, dan sediakan tempat istirahat ber-AC.",
      expNe: "थकानले ध्यान घटाएर दुर्घटना निम्त्याउँछ। त्यसैले बिहानी स्वास्थ्य जाँच, समय-समयमा ब्रेक र आराम गर्ने ठाउँको व्यवस्था गर्नुपर्छ।"
    },
    {
      cat: "第3章 パワーハラスメントの防止（P.100〜103）",
      q: "現場における「**パワーハラスメント（パワハラ）**」に該当する行為として、**絶対にやってはならないこと**はどれですか。",
      q_id: "Manakah tindakan yang termasuk dalam 'Power Harassment' (Tindakan Pelecehan Kekuasaan / Bullying) yang DILARANG KERAS di proyek?",
      q_ne: "कार्यस्थलमा 'पावर ह्यारेसमेन्ट (पदको दुरुपयोग गरी गरिने दुर्व्यवहार/गालीगलौज)' मा पर्ने र कहिल्यै गर्न नहुने काम कुन हो?",
      options: [
        { ja: "作業員のミスに対して人格を否定するような暴言を吐いたり、他の作業員の前で見せしめのように怒鳴りつける", id: "Menghina martabat pribadi saat pekerja salah, atau membentak mempermalukannya di depan rekan-rekan lain", ne: "गल्ती हुँदा कामदारको इज्जतमा चोट पुग्ने गालीगलौज गर्ने, वा अरू सबैका अगाडि अपमानित हुने गरी चर्को स्वरले हप्काउने" },
        { ja: "危険な作業手順を行っていたため、安全のためにその場ですぐに制止して正しい手順を指導した", id: "Menghentikan bahaya seketika demi keselamatan dan membimbing prosedur yang benar", ne: "खतरनाक काम गरिरहेकाले सुरक्षाको लागि तत्काल रोकेर सही तरिका सिकाउनु" },
        { ja: "作業員の健康状態を心配して、熱中症にならないよう水分補給を促した", id: "Mengingatkan minum air demi mencegah sengatan panas", ne: "बिरामी नहोस् भनेर पानी पिउन सम्झाउनु" },
        { ja: "作業手順書の不明点について、作業員からの質問に丁寧に答えた", id: "Menjawab pertanyaan pekerja mengenai SOP kerja dengan ramah dan jelas", ne: "कार्यविधिका नबुझेका कुराहरू कामदारलाई विनम्रतापूर्वक सिकाइदिनु" }
      ],
      answer: 0,
      expJa: "【テキスト P.100〜103参照】業務上の適正な指導（安全のための制止等）はパワハラではありませんが、人格を傷つける言葉、暴力、見せしめの叱責、無視などは違法なパワハラに該当します。",
      expId: "Teguran K3 adalah sah. Namun membentak kasar mempermalukan martabat pribadi di depan orang lain adalah pelanggaran hukum Power Harassment.",
      expNe: "सुरक्षाका लागि काम रोक्न लगाउनु जायज हो, तर अरूका अगाडि अपमानित हुने गरी गालीगलौज गर्नु गैरकानुनी पावर ह्यारेसमेन्ट हो।"
    },
    {
      cat: "第3章 職長としての指導ポイント（P.103）",
      q: "職長が作業員を指導する際、**パワハラにならずに相手の成長を促すためのポイント**として正しいものはどれですか。",
      q_id: "Manakah poin penting bagi Shokucho dalam membimbing pekerja secara efektif tanpa tergelincir ke dalam Power Harassment?",
      q_ne: "गालीगलौज (ह्यारेसमेन्ट) नगरी कामदारको प्रगति हुने गरी असल मार्गदर्शन गर्न शोकुचोले ध्यान दिनुपर्ने मुख्य बुँदा कुन हो?",
      options: [
        { ja: "感情的にならず、具体的な「行動や事実」に焦点を当てて理由を説明し、相手の言い分も最後までしっかり聞く", id: "Mengendalikan emosi, fokus pada 'fakta tindakan' secara objektif, menjelaskan alasan, dan mendengarkan penjelasan pekerja", ne: "भावना वा रिसमा नआई वास्तविक 'तथ्य र व्यवहार' मा केन्द्रित भएर कारण बुझाउने, र उसको कुरा पनि अन्त्यसम्म ध्यान दिएर सुन्ने" },
        { ja: "言うことを聞かない作業員には仕事を与えず、一日中現場の隅に立たせておく", id: "Mengisolasi pekerja yang membangkang dengan menyuruhnya berdiri seharian di sudut", ne: "कुरा नसुन्ने कामदारलाई काम नदिई दिनभरि कुनामा उभ्याएर राख्ने" },
        { ja: "自分の若い頃の苦労話だけを何時間も聞かせて反論を許さない", id: "Memaksa mendengarkan cerita masa lalunya berjam-jam tanpa memberi ruang bicara", ne: "आफ्नो पुरानो दुःखको कथा मात्र घण्टौं सुनाएर बोल्नै नदिने" },
        { ja: "失敗した原因を作業員の国籍や出身地のせいにして差別する", id: "Menyalahkan kewarganegaraan atau latar belakang budaya pekerja saat terjadi kesalahan", ne: "गल्ती हुनुको कारण कामदारको देश वा जातिको कारण हो भन्दै विभेद गर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.103参照】指導時は感情的にならず、事実に対して具体的に改善点を伝えます。一方的な叱責ではなく、相手の考えを聞く双方向の対話が信頼関係と成長を育みます。",
      expId: "Fokus pada fakta bukan pribadi, jelaskan alasan perbaikan, dengarkan pendapat bawahan, dan hindari kata-kata emosional.",
      expNe: "रिसाएर होइन तथ्यमा रहेर सुधार्नुपर्ने कुरा बताउने, र कामदारको भनाइ पनि सुनेर आपसी संवादबाट सिकाउनुपर्छ।"
    }
  ]
};
