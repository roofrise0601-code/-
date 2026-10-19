const CURRENT_QUIZ_DATA = {
  title: "Day 20：<ruby>環境管理<rt>かんきょうかんり</rt></ruby>と<ruby>労働安全衛生<rt>ろうどうあんぜんえいせい</rt></ruby>の3<ruby>管理<rt>かんり</rt></ruby>（テキスト P.55〜68）",
  key: "score_gakka3_20",
  passScore: 70,
  questions: [
    {
      cat: "第2章 自然環境への影響（P.55）",
      q: "都市化によって周辺地域よりも気温が高くなる「**ヒートアイランド現象**」に対する建物の有効な対策として、テキストに挙げられているものはどれですか。",
      q_id: "Manakah tindakan efektif yang disebutkan dalam buku panduan untuk menanggulangi 'Fenomena Urban Heat Island' pada bangunan?",
      q_ne: "सहरको तापक्रम वरपरको क्षेत्रभन्दा धेरै तातो हुने 'अर्बन हिट आइल्यान्ड' समस्या घटाउन भवनमा गरिने प्रभावकारी उपाय कुन हो?",
      options: [
        { ja: "保水性舗装、熱を反射する塗料の使用、建物の壁面緑化や屋上緑化", id: "Aspal penyerap air, cat pemantul panas, serta penghijauan dinding dan atap gedung (Rooftop greening)", ne: "पानी सोस्ने भुइँ, ताप परावर्तन गर्ने पेन्ट, तथा भवनको भित्ता र छतमा हरियाली (रुख-बिरुवा) लगाउने" },
        { ja: "敷地全体をアスファルトとコンクリートだけで完全に埋め尽くすこと", id: "Menutupi seluruh area tanah proyek dengan aspal dan beton padat tanpa tanaman", ne: "पूरै जमिनमा रुख-बिरुवा नराखी कंक्रीट र अलकत्रा मात्र बिछ्याउने" },
        { ja: "エアコンの室外機を狭い路地に集めて大量の温風を排熱すること", id: "Mengumpulkan semua exhaust AC di lorong sempit untuk membuang udara panas bersamaan", ne: "साँघुरो गल्लीमा एसीका बाहिरी मेसिनहरू थुपारेर तातो हावा फाल्ने" },
        { ja: "周囲の雑木林をすべて伐採して風通しをなくすこと", id: "Menebang semua pepohonan sekitar agar tidak ada angin melintas", ne: "वरपरका सबै रूखहरू काटेर हावाको बहाव रोक्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.55参照】ヒートアイランド対策として、熱を蓄えにくい保水性舗装、遮熱・高反射塗料の使用、建物の壁面緑化や屋上緑化が有効です。",
      expId: "Penghijauan dinding/atap (壁面・屋上緑化) dan aspal penyerap air sangat efektif meredam kenaikan suhu kawasan kota.",
      expNe: "सहरको तापक्रम बढ्न नदिन भवनको छत र भित्तामा रुख-बिरुवा रोप्ने र घामको ताप फर्काउने पेन्ट लगाउनु प्रभावकारी हुन्छ।"
    },
    {
      cat: "第2章 環境影響緩和：ミティゲーション（P.56〜57）",
      q: "工事による環境への影響を緩和する「**ミティゲーション（mitigation）**」の検討手順として、**正しい順序**はどれですか。",
      q_id: "Manakah urutan yang BENAR dalam meninjau langkah mitigasi (pengurangan dampak lingkungan) proyek konstruksi?",
      q_ne: "निर्माणले वातावरणमा पार्ने नकारात्मक असर कम गर्ने 'मिटिगेशन (असर न्यूनीकरण)' को सही क्रम कुन हो?",
      options: [
        { ja: "回避 → 最小化 → 修正 → 低減 → 代償", id: "Menghindari (Kaihi) -> Minimalisasi -> Perbaikan -> Pengurangan -> Kompensasi (Daishou)", ne: "पन्छाउने (बच्ने) -> कम गर्ने -> सच्याउने -> घटाउने -> क्षतिपूर्ति (अर्को ठाउँमा वातावरण बनाउने)" },
        { ja: "代償 → 低減 → 修正 → 最小化 → 回避", id: "Kompensasi -> Pengurangan -> Perbaikan -> Minimalisasi -> Menghindari", ne: "क्षतिपूर्ति -> घटाउने -> सच्याउने -> कम गर्ने -> पन्छाउने" },
        { ja: "最小化 → 回避 → 代償 → 低減 → 修正", id: "Minimalisasi -> Menghindari -> Kompensasi -> Pengurangan -> Perbaikan", ne: "कम गर्ने -> पन्छाउने -> क्षतिपूर्ति -> घटाउने -> सच्याउने" },
        { ja: "修正 → 代償 → 最小化 → 回避 → 低減", id: "Perbaikan -> Kompensasi -> Minimalisasi -> Menghindari -> Pengurangan", ne: "सच्याउने -> क्षतिपूर्ति -> कम गर्ने -> पन्छाउने -> घटाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.56〜57参照】ミティゲーションは、①回避（やらない）→ ②最小化（規模縮小）→ ③修正（修復・復元）→ ④低減（維持保護）→ ⑤代償（別の場所に代替環境を作る）の順序で検討を進めます。",
      expId: "Tahapan mitigasi lingkungan wajib dimulai dari yang paling ideal: Hindari -> Minimalisasi -> Perbaiki -> Kurangi -> Kompensasi lokasi lain.",
      expNe: "वातावरणीय असर कम गर्न सबैभन्दा पहिले बच्ने, नसके असर कम गर्ने, बिग्रे सच्याउने, घटाउने र अन्त्यमा अर्को ठाउँमा विकल्प दिने क्रममा गरिन्छ।"
    },
    {
      cat: "第2章 周辺環境への見える化（P.58〜59）",
      q: "近隣住民の不安やトラブルを和らげるための「**工事の見える化**」や配慮として、テキストに記載されている具体例はどれですか。",
      q_id: "Manakah contoh konkret dari 'Visualisasi Informasi Proyek' bagi warga sekitar untuk mencegah komplain lingkungan?",
      q_ne: "छिमेकी बासिन्दाहरूको चिन्ता र गुनासो हटाउन गरिने 'निर्माणको सूचना प्रष्ट पार्ने (मिएरुका)' को सही उदाहरण कुन हो?",
      options: [
        { ja: "仮囲いに騒音・振動計の数値をリアルタイム表示し、歩行者通路にQRコード等で工事進捗や予定を案内する", id: "Menampilkan tingkat kebisingan/getaran (dB) secara real-time pada pagar proyek dan memasang QR code info jadwal", ne: "घेराबारमा आवाज र कम्पनको नाप (dB) डिजिटल बोर्डमा देखाउने र हिँड्ने बाटोमा QR कोडबाट कामको तालिका बुझाउने" },
        { ja: "工事現場を完全に密閉して近隣住民からの質問や視線を一切遮断する", id: "Menutup rapat total agar warga tidak tahu apa pun yang sedang dikerjakan di dalam", ne: "छिमेकीले केही थाहा नपाउन् भनेर पूरै बन्द गरी कुनै प्रश्न नसोध्न चेतावनी दिने" },
        { ja: "夜間や早朝に予告なしで最も騒音の大きい破砕作業を一気に終わらせる", id: "Melakukan pekerjaan paling bising pada tengah malam/dini hari tanpa pemberitahuan warga", ne: "रातिको समयमा कसैलाई थाहा नदिई चर्को आवाज आउने मेसिन चलाएर काम सक्ने" },
        { ja: "近隣住民と目が合っても挨拶をせず無視して現場に入る", id: "Mengabaikan warga tetangga dan tidak pernah menyapa sama sekali", ne: "छिमेकी बासिन्दा भेटिँदा अभिवादन नगरी बेवास्ता गर्दै हिँड्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.58〜59参照】騒音・振動レベルの数値公開、QRコードによる工事周知、子供にも分かる予定表示、気持ちの良い挨拶の徹底が住民との信頼関係を築きます。",
      expId: "Transparansi angka desibel (dB) kebisingan/getaran pada pagar proyek membuktikan kontraktor bekerja tertib dan peduli lingkungan.",
      expNe: "आवाज र कम्पनको स्तर बोर्डमा देखाउनु र छिमेकीलाई अभिवादन गर्नुले कार्यस्थलप्रतिको विश्वास र सद्भाव बढाउँछ।"
    },
    {
      cat: "第2章 働き方改革（P.60〜61）",
      q: "建設業で進められている「働き方改革」において、**年次有給休暇が10日以上付与される労働者に対して義務付けられていること**は何ですか。",
      q_id: "Dalam reformasi ketenagakerjaan konstruksi, apa kewajiban hukum perusahaan terhadap pekerja yang berhak atas cuti tahunan 10 hari atau lebih?",
      q_ne: "निर्माण क्षेत्रको श्रम सुधार अनुसार, वर्षमा १० दिन वा सोभन्दा बढी वार्षिक बिदा पाउने कामदारका लागि कम्पनीले अनिवार्य दिनुपर्ने बिदा के हो?",
      options: [
        { ja: "毎年最低でも「年5日の有給休暇」を確実に取得させること", id: "Wajib memastikan pekerja mengambil minimal '5 hari cuti tahunan berbayar' setiap tahun", ne: "प्रत्येक वर्ष कम्तीमा '५ दिनको सवेतन वार्षिक बिदा (युउक्युउ)' अनिवार्य रूपमा लिन लगाउने" },
        { ja: "すべての有給休暇を会社がお金で強制的に買い取って休ませないこと", id: "Membeli paksa semua hak cuti dengan uang agar pekerja tidak boleh libur", ne: "पैसा दिएर सबै बिदा खारेज गरी कामदारलाई आराम गर्न नदिने" },
        { ja: "週休2日を禁止して毎日12時間以上働かせること", id: "Melarang libur 2 hari seminggu dan mewajibkan lembur 12 jam setiap hari", ne: "हप्तामा २ दिन बिदा बन्द गरी दिनको १२ घण्टा काम गराउने" },
        { ja: "有給休暇を取得した作業員に対して給料の減給や罰則を与えること", id: "Memotong upah atau memberi denda kepada pekerja yang mengajukan cuti", ne: "बिदा लिने कामदारलाई जरिवाना वा तलब कट्टीको सजाय दिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.60〜61参照】有給休暇が10日以上付与される労働者には、年5日の取得が法律で義務付けられています。職長は「有給を言い出しにくい雰囲気」を作らない配慮が大切です。",
      expId: "Undang-undang mewajibkan pekerja mengambil minimal 5 hari cuti tahunan berbayar. Mandor harus menciptakan suasana kerja yang nyaman.",
      expNe: "वर्षमा कम्तीमा ५ दिन बिदा लिनु कानुनी अधिकार र नियम हो। शोकुचोले कामदारलाई बिदा माग्न संकोच नहुने वातावरण बनाउनुपर्छ।"
    },
    {
      cat: "第2章 労働安全衛生の「3管理」（P.62）",
      q: "労働安全衛生管理における「3管理」を進める際、**対策を考えるべき「正しい優先順位」**はどれですか。",
      q_id: "Manakah URUTAN PRIORITAS yang benar dalam menerapkan '3 Pilar Manajemen K3' (San-Kanri)?",
      q_ne: "औद्योगिक स्वास्थ्य तथा सुरक्षाको '३ व्यवस्थापन' कार्यान्वयन गर्दा विचार गर्नुपर्ने 'सही प्राथमिकताको क्रम' कुन हो?",
      options: [
        { ja: "①作業環境管理 ➔ ②作業管理 ➔ ③健康管理", id: "(1) Manajemen Lingkungan Kerja -> (2) Manajemen Kerja (SOP/Alat) -> (3) Manajemen Kesehatan", ne: "(१) कार्य वातावरण व्यवस्थापन -> (२) कार्यविधि व्यवस्थापन -> (३) स्वास्थ्य व्यवस्थापन" },
        { ja: "①健康管理 ➔ ②作業環境管理 ➔ ③作業管理", id: "(1) Kesehatan -> (2) Lingkungan -> (3) Kerja", ne: "(१) स्वास्थ्य -> (२) वातावरण -> (३) कार्यविधि" },
        { ja: "①作業管理 ➔ ②健康管理 ➔ ③作業環境管理", id: "(1) Kerja -> (2) Kesehatan -> (3) Lingkungan", ne: "(१) कार्यविधि -> (२) स्वास्थ्य -> (३) वातावरण" },
        { ja: "3管理の順序は決まっておらず、どれからやっても全く同じである", id: "Urutan bebas dan tidak memiliki aturan prioritas apa pun", ne: "यसको कुनै क्रम हुँदैन, जुनसुकै पहिले गरे पनि हुन्छ" }
      ],
      answer: 0,
      expJa: "【テキスト P.62参照】健康管理から考えがちですが、まず「健康を害する原因（環境）」を取り除くことが重要です。そのため『作業環境管理 ➔ 作業管理 ➔ 健康管理』の順序で対策します。",
      expId: "Urutan wajib: singkirkan sumber racun di lingkungan (作業環境), atur metode/durasi kerja (作業管理), barulah cek medis pekerja (健康管理).",
      expNe: "रोगको मूल कारण हटाउनुपर्ने भएकाले पहिले 'कार्य वातावरण' सुधार्ने, त्यसपछि 'कामको विधि' मिलाउने र अन्त्यमा 'स्वास्थ्य जाँच' गरिन्छ।"
    },
    {
      cat: "第2章 作業環境測定（P.63〜64）",
      q: "作業環境から有害要因を取り除くための「**作業環境測定**」の対象として、**法令で定められている測定項目**に該当するものはどれですか。",
      q_id: "Manakah yang merupakan item pengukuran resmi dalam pengujian lingkungan kerja menurut standar Kementerian Tenaga Kerja Jepang?",
      q_ne: "कार्य वातावरण सुधार गर्न कानुनले तोकेको 'वातावरण मापन' को आधिकारिक जाँच सूचीमा पर्ने कुन हो?",
      options: [
        { ja: "空気中の粉じん濃度、等価騒音レベル、一酸化炭素・酸素濃度、有機溶剤濃度", id: "Konsentrasi debu, tingkat kebisingan (dB), kadar CO/oksigen, serta uap pelarut organik", ne: "हावामा धुलोको मात्रा, ध्वनिको स्तर (हल्ला), कार्बन मोनोअक्साइड र अक्सिजनको मात्रा, अर्गानिक घोलकको मात्रा" },
        { ja: "作業員の靴のサイズとヘルメットの色の好み", id: "Ukuran sepatu dan warna helm favorit pekerja", ne: "कामदारको जुत्ताको साइज र हेल्मेटको रङ" },
        { ja: "現場事務所のテレビの画面サイズ", id: "Ukuran layar monitor TV di kantor proyek", ne: "अफिसको टिभीको स्क्रिन साइज" },
        { ja: "近隣住民の自動車の走行速度", id: "Kecepatan kendaraan warga yang lewat di jalan umum", ne: "सडकमा हिँड्ने छिमेकीको गाडीको गति" }
      ],
      answer: 0,
      expJa: "【テキスト P.63〜64参照】厚生労働省の規定により、粉じん濃度、暑さ（気温・湿度・ふく射熱）、等価騒音レベル、CO/CO2濃度、有機溶剤、酸素・硫化水素濃度などを測定します。",
      expId: "Pengukuran lingkungan kerja mencakup kadar debu silika, kebisingan, gas CO, oksigen ruang terbatas, dan pelarut kimia.",
      expNe: "धुलो, आवाजको स्तर, अक्सिजनको कमी, विषाक्त ग्यास र केमिकलहरूको मात्रा नाप्न कार्य वातावरण मापन गरिन्छ।"
    },
    {
      cat: "第2章 熱中症の現状（P.65）",
      q: "厚生労働省の統計データ（2018〜2022年）における、**「熱中症による業種別死亡災害・死傷者数」**に関する記述として正しいものはどれですか。",
      q_id: "Berdasarkan data statistik resmi Kemenaker Jepang (2018-2022), manakah pernyataan yang BENAR mengenai korban heatstroke (sengatan panas)?",
      q_ne: "जापान सरकारको तथ्याङ्क अनुसार गर्मीका कारण लाग्ने 'हिटस्ट्रोक (तातो घाउ/लु)' का घाइते र मृतकको संख्या सम्बन्धी कुन भनाइ सही छ?",
      options: [
        { ja: "建設業はすべての業種の中で熱中症の死傷者数が最も多く（916件・死亡52件）、7月・8月に急増する", id: "Sektor konstruksi menempati peringkat TERBANYAK di antara semua industri (916 korban, 52 tewas), melonjak drastis pada Juli-Agustus", ne: "सबै उद्योगहरू मध्ये 'निर्माण क्षेत्र' मा सबैभन्दा बढी हिटस्ट्रोकका घटना हुन्छन् (९१६ जना घाइते, ५२ जनाको मृत्यु), विशेषगरी जुलाई-अगस्टमा" },
        { ja: "建設業は屋外作業が多いため、熱中症で死亡する人は過去一度も発生していない", id: "Di konstruksi tidak pernah ada korban meninggal karena pekerja sudah kebal", ne: "निर्माण क्षेत्रमा धेरै बाहिर काम गरिने भएकाले हिटस्ट्रोकबाट कोही पनि मरेका छैनन्" },
        { ja: "熱中症は冬場の12月から2月にかけて最も多く発生する", id: "Heatstroke paling banyak terjadi pada musim dingin (Desember-Februari)", ne: "हिटस्ट्रोक जाडो महिना (डिसेम्बर-फेब्रुअरी) मा सबैभन्दा धेरै हुन्छ" },
        { ja: "製造業や運送業に比べて建設業の熱中症患者数は極めて少ない", id: "Jumlah korban di konstruksi jauh lebih sedikit dibanding pabrik atau logistik", ne: "फ्याक्ट्री वा ढुवानीको तुलनामा निर्माण क्षेत्रमा हिटस्ट्रोक धेरै कम हुन्छ" }
      ],
      answer: 0,
      expJa: "【テキスト P.65参照】建設業は炎天下や密閉空間での重労働が多いため全業種で最も熱中症死傷者が多く、5月から増え始め7月・8月に一気にピークを迎えます。",
      expId: "Konstruksi mencatatkan angka heatstroke tertinggi di Jepang. Suhu panas terik dan ruang sempit menjadi faktor pemicu utama.",
      expNe: "घाममा कडा परिश्रम गर्नुपर्ने भएकाले निर्माण क्षेत्रमा सबैभन्दा धेरै हिटस्ट्रोकका बिरामी र मृत्यु हुन्छन्, विशेषगरी असार-साउनमा।"
    },
    {
      cat: "第2章 暑さ指数：WBGT（P.66）",
      q: "熱中症予防の基準である「**暑さ指数（WBGT値）**」に応じた現場での行動基準として、**正しいもの**はどれですか。",
      q_id: "Manakah tindakan K3 yang BENAR di lapangan sesuai dengan 'Indeks Suhu Basah dan Bola' (Nilai WBGT)?",
      q_ne: "हिटस्ट्रोक रोक्ने सूचकांक 'WBGT (गर्मी सूचकांक)' अनुसार कार्यस्थलमा पालना गर्नुपर्ने सही सुरक्षा नियम कुन हो?",
      options: [
        { ja: "WBGT値が31以上になったら可能な限り作業を中断し、28〜31では休憩を取り水分・塩分を補給させる", id: "Jika WBGT 31 ke atas, hentikan pekerjaan sebisa mungkin; jika WBGT 28-31, wajib istirahat serta minum air dan garam", ne: "WBGT सूचकांक ३१ पुगेमा काम सकेसम्म रोक्ने, र २८ देखि ३१ भएमा विश्राम लिई पानी र नुनको मात्रा पिउने" },
        { ja: "WBGT値が35を超えても休憩を禁止して作業を続けさせる", id: "Tetap melarang istirahat meski nilai WBGT melewati 35", ne: "WBGT ३५ नाघे पनि काम नरोकी लगातार काम गरिरहन लगाउने" },
        { ja: "WBGT値が20以下になったら直ちに全員を病院に搬送する", id: "Segera melarikan semua orang ke rumah sakit jika WBGT di bawah 20", ne: "WBGT २० भन्दा कम हुनासाथ सबैलाई अस्पताल लैजाने" },
        { ja: "WBGT値とは気温のことなので湿度や日差しを気にする必要はない", id: "WBGT hanyalah suhu udara biasa sehingga kelembapan dan terik matahari boleh diabaikan", ne: "WBGT भनेको सामान्य तापक्रम मात्र हो, ओस वा घाम हेर्नु पर्दैन" }
      ],
      answer: 0,
      expJa: "【テキスト P.66参照】WBGT 31以上は「危険（可能な限り作業中断）」、28〜31は「厳重警戒（激しい運動中止・定期休憩と水分塩分補給）」と定められています。",
      expId: "Nilai WBGT 31+ adalah batas bahaya (hentikan pekerjaan). Rentang 28-31 wajib istirahat teratur serta minum air dan elektrolit garam.",
      expNe: "WBGT ३१ भन्दा माथि पुग्दा काम रोक्नुपर्छ। २८ देखि ३१ पुग्दा नियमित ब्रेक लिएर पानी र नुन सेवन गराउनुपर्छ।"
    },
    {
      cat: "第2章 作業管理の具体策（P.67）",
      q: "有害要因から作業員の身体を守る「**作業管理**」として、作業手順書に記載すべき具体例はどれですか。",
      q_id: "Manakah contoh konkret dari 'Manajemen Prosedur Kerja' (Sagyou Kanri) yang wajib dituangkan ke dalam SOP kerja?",
      q_ne: "कामदारको शरीरलाई चोटपटकबाट जोगाउन 'कार्यविधि व्यवस्थापन' अन्तर्गत प्रक्रिया पुस्तिकामा लेख्नुपर्ने सही उदाहरण कुन हो?",
      options: [
        { ja: "腰痛を防止するために「座って行う作業」と「立ち仕事」を交互に行わせる", id: "Mengatur rotasi kerja antara posisi duduk dan posisi berdiri secara bergantian demi mencegah sakit pinggang (nyeri punggung)", ne: "ढाड दुख्ने समस्या रोक्न 'बसेर गर्ने काम' र 'उभिएर गर्ने काम' आलोपालो मिलाएर गराउने" },
        { ja: "重量物はすべて腰を曲げて腕の力だけで一気に持ち上げるよう指導する", id: "Menyuruh mengangkat benda berat hanya dengan membungkukkan punggung dan mengandalkan otot tangan", ne: "गह्रौं सामान ढाड मात्र कुप्र्याएर हातको भरमा मात्र उचाल्न लगाउने" },
        { ja: "粉じんが舞う現場でも息苦しければ防じんマスクを外してよいと指導する", id: "Membolehkan melepas masker debu jika merasa gerah di area berdebu", ne: "धुलो भएको ठाउँमा सास फेर्न गाह्रो भए मास्क फुकाल्न अनुमति दिने" },
        { ja: "作業手順書は一度作ったら10年間絶対に見直さない", id: "Tidak boleh memperbarui dokumen SOP selama 10 tahun setelah dibuat", ne: "एक पटक बनाएको नियम पुस्तिका १० वर्षसम्म कहिल्यै परिवर्तन नगर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.67参照】作業管理では、身体的負荷を減らす具体的な動作・手順（姿勢の交代、保護具着用等）を作業手順書に明記し、定期的に作業員の声を聞いて見直します。",
      expId: "Sagyou Kanri mengatur beban fisik tubuh, contohnya rotasi posisi berdiri-duduk untuk mencegah sakit pinggang dan penggunaan APD yang tepat.",
      expNe: "ढाड दुख्न नदिन कामको पोजिसन फेर्ने र सुरक्षा सामग्री लगाउने जस्ता व्यावहारिक नियम कार्यविधिमा लेख्नुपर्छ।"
    },
    {
      cat: "第2章 健康管理と日常チェック（P.68）",
      q: "作業員の健康異常を早期発見するための「**日常の健康管理**」として、職長が行う最も効果的な取り組みはどれですか。",
      q_id: "Manakah tindakan mandor yang PALING EFEKTIF dalam pemantauan kesehatan harian untuk mendeteksi dini gangguan fisik pekerja?",
      q_ne: "कामदारहरूको स्वास्थ्य समस्या सुरुमै पत्ता लगाउन शोकुचोले दैनिक गर्नुपर्ने सबैभन्दा प्रभावकारी काम कुन हो?",
      options: [
        { ja: "毎朝の朝礼時に作業員自身に体調や睡眠・血圧などを自己チェックさせ、口頭で申告させる", id: "Meminta pekerja memeriksa kondisi fisik/tidur mereka sendiri setiap pagi saat briefing dan melaporkannya secara lisan", ne: "हरेक बिहानको बैठकमा कामदार आफैंलाई आफ्नो शरीर, निद्रा आदिको अवस्था जाँच्न लगाई मौखिक रूपमा बताउन लगाउने" },
        { ja: "年に1回の定期健康診断さえ受けていれば、日々の朝礼では体調を一切確認しない", id: "Tidak pernah memeriksa kondisi fisik harian selama sudah ikut cek medis tahunan", ne: "वर्षको एक पटक स्वास्थ्य परीक्षण गरेपछि बिहानको बैठकमा स्वास्थ्यबारे केही नसोध्ने" },
        { ja: "顔色が真っ青で熱がある作業員でも、本人が何も言わなければ無理やり高所作業をさせる", id: "Memaksa pekerja bekerja di ketinggian meski wajahnya pucat pasi dan demam selama dia tidak mengeluh", ne: "अनुहार पहेंलो र ज्वरो आएको कामदारले मुख नखोलेसम्म जबर्जस्ती उचाइको काममा पठाउने" },
        { ja: "体調不良を訴えた作業員の給料を減額してペナルティを科す", id: "Memotong gaji sebagai hukuman bagi pekerja yang mengaku sedang tidak enak badan", ne: "बिरामी भएको बताउने कामदारको तलब काट्ने सजाय दिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.68参照】健康状態は日々変化します。作業員と一番長く過ごす職長は変化に最も気づきやすい立場にあり、毎朝の朝礼で健康状態を自己チェック・申告させることが有効です。",
      expId: "Kondisi fisik berubah setiap hari. Meminta pekerja melakukan self-check dan lapor kondisi saat briefing pagi adalah cara terbaik mandor.",
      expNe: "स्वास्थ्य दिनहुँ परिवर्तन हुन्छ। हरेक बिहान काम सुरु हुनुअघि कामदार आफैंले स्वास्थ्य जाँचेर बताउने नियम बसाल्नुपर्छ।"
    }
  ]
};
