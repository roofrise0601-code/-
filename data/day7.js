const CURRENT_QUIZ_DATA = {
  title: "Day 7：<ruby>第1週<rt>だいいっしゅう</rt></ruby> <ruby>総復習模擬試験<rt>そうふくしゅうもぎしけん</rt></ruby>（Week 1 総まとめ P.1〜98）",
  key: "score_gakka1_7",
  passScore: 70,
  questions: [
    {
      cat: "Day 1 復習：職長の役割（P.1〜15）",
      q: "<ruby>建設現場<rt>けんせつげんば</rt></ruby>において<ruby>作業員<rt>さぎょういん</rt></ruby>を<ruby>直接指揮<rt>ちょくせつしき</rt></ruby>・<ruby>監督<rt>かんとく</rt></ruby>する「<ruby>職長<rt>しょくちょう</rt></ruby>」の<ruby>役割<rt>やくわり</rt></ruby>として、**<ruby>不適切<rt>ふてきせつ</rt></ruby>なもの**はどれですか。",
      q_id: "Manakah yang TIDAK TEPAT sebagai peran seorang mandor (shokucho) yang langsung memimpin dan mengawasi pekerja di lokasi?",
      q_ne: "कार्यस्थलमा कामदारहरूलाई प्रत्यक्ष निर्देशन र रेखदेख गर्ने 'सुपरभाइजर/टोली नेता (शोकुचो)' को भूमिका सम्बन्धमा कुन गलत हो?",
      options: [
        { ja: "作業員への安全指示やKY活動は行わず、指示書の作成だけを担当する", id: "Tidak memberi instruksi keselamatan/KY kepada pekerja, hanya fokus membuat dokumen tertulis", ne: "कामदारलाई सुरक्षा निर्देशन वा KY नगराई कागजी आदेश बनाउने काम मात्र गर्ने" },
        { ja: "作業手順を正しく周知し、不安全行動を見つけたらその場で指導・是正する", id: "Menyosialisasikan SOP kerja dan langsung mengoreksi perilaku tidak aman di tempat", ne: "कामको नियम राम्रोसँग बुझाउने र असुरक्षित काम देखे तुरुन्त सुधार्न लगाउने" },
        { ja: "元請の現場代理人と綿密に打合せを行い、自社作業員に連絡を徹底する", id: "Berkoordinasi erat dengan pengawas kontraktor utama dan meneruskannya ke tim kerja", ne: "मुख्य ठेकेदारसँग राम्रो छलफल गरी आफ्ना कामदारहरूलाई सबै कुरा स्पष्ट पार्ने" },
        { ja: "作業員の健康状態や疲労度を日常的に観察し、熱中症や体調不良を予防する", id: "Memantau kondisi fisik dan kelelahan pekerja untuk mencegah heatstroke dan sakit", ne: "कामदारको स्वास्थ्य अवस्था हेरेर अत्यधिक गर्मी वा बिरामी हुनबाट बचाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.8参照】職長は現場で作業員を直接指導・監督するキーパーソンです。安全指示やKY活動（危険予知）を主導し、不安全状態や不安全行動を即座に是正する現場責任があります。",
      expId: "Shokucho (mandor) wajib langsung memimpin instruksi keselamatan dan KY di lapangan, tidak boleh hanya mengurus dokumen.",
      expNe: "शोकुचोले कार्यस्थलमा कामदारहरूलाई प्रत्यक्ष सुरक्षा निर्देशन दिनुपर्छ, कागजी काममा मात्र सीमित हुन मिल्दैन।"
    },
    {
      cat: "Day 1 復習：リスクアセスメント（P.1〜15）",
      q: "「リスクアセスメント」において、<ruby>特定<rt>とくてい</rt></ruby>された<ruby>危険性<rt>きけんせい</rt></ruby>・<ruby>有害性<rt>ゆうがいせい</rt></ruby>を<ruby>低減<rt>ていげん</rt></ruby>させる<ruby>対策<rt>たいさく</rt></ruby>として、**<ruby>最<rt>もっと</rt></ruby>も<ruby>優先度<rt>ゆうせんど</rt></ruby>が<ruby>高<rt>たか</rt></ruby>い（<ruby>最初<rt>さいしょ</rt></ruby>に<ruby>検討<rt>けんとう</rt></ruby>すべき）もの**はどれですか。",
      q_id: "Dalam penilaian risiko (risk assessment), manakah tindakan yang memiliki prioritas PALING TINGGI (harus dipertimbangkan pertama)?",
      q_ne: "जोखिम मूल्याङ्कनमा पत्ता लागेका खतराहरू कम गर्न सबैभन्दा पहिलो प्राथमिकता (सबैभन्दा पहिले गर्नुपर्ने) कुन हो?",
      options: [
        { ja: "危険な作業そのものをなくす、または安全な工法に変更する（本質的安全化）", id: "Menghilangkan sumber bahaya atau mengganti dengan metode yang aman (keselamatan intrinsik)", ne: "खतरनाक काम नै हटाउने वा सुरक्षित विधिमा परिवर्तन गर्ने (आधारभूत सुरक्षा)" },
        { ja: "作業員にヘルメットや安全帯などの保護具を着用させる", id: "Meminta pekerja mengenakan APD seperti helm dan sabuk pengaman", ne: "कामदारलाई हेल्मेट र सेफ्टी बेल्ट जस्ता सुरक्षा उपकरण लगाउन लगाउने" },
        { ja: "注意看板を設置して作業員に「足元注意」を呼びかける", id: "Memasang rambu peringatan 'hati-hati melangkah'", ne: "सतर्कता बोर्ड राखेर 'होसियार हुनुहोस्' भनी सूचना टाँस्ने" },
        { ja: "作業マニュアルを作って机の上で読ませる", id: "Membuat buku panduan kerja dan menyuruh pekerja membacanya", ne: "कार्य पुस्तिका बनाएर टेबलमा पढ्न लगाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.14参照】リスク低減措置の優先順位は、①本質的対策（危険の除去・低減） ➔ ②工学的対策（手すり等の安全装置） ➔ ③管理対策（手順書・教育） ➔ ④保護具の使用 の順です。",
      expId: "Prioritas pengurangan risiko: 1) Eliminasi/substitusi bahaya, 2) Rekayasa teknik, 3) Kontrol administratif, 4) Penggunaan APD.",
      expNe: "जोखिम घटाउने प्राथमिकता: १) खतरा नै हटाउने/सजिलो तरिका अपनाउने, २) रेलिङ आदि सुरक्षा घेरा, ३) नियम र तालिम, ४) सुरक्षा उपकरणको प्रयोग।"
    },
    {
      cat: "Day 2 復習：安全管理体制（P.16〜32）",
      q: "<ruby>常時<rt>じょうじ</rt></ruby>100<ruby>人以上<rt>にんいじょう</rt></ruby>の<ruby>労働者<rt>ろうどうしゃ</rt></ruby>が<ruby>働<rt>はたら</rt></ruby>く<ruby>建設現場<rt>けんせつげんば</rt></ruby>（ずい道等では50人以上）において、<ruby>統括安全衛生責任者<rt>とうかつあんぜんえいせいせきにんしゃ</rt></ruby>の<ruby>選任<rt>せんにん</rt></ruby>を<ruby>義務<rt>ぎむ</rt></ruby>づけられているのは誰ですか。",
      q_id: "Siapa yang diwajibkan untuk menunjuk Penanggung Jawab Keselamatan & Kesehatan Umum (Toukutsu Anzen Eisei Sekininsha) di lokasi konstruksi dengan 100 pekerja atau lebih?",
      q_ne: "१०० जना वा सोभन्दा बढी कामदारले काम गर्ने निर्माण कार्यस्थलमा समग्र सुरक्षा तथा स्वास्थ्य प्रमुख तोक्न कसलाई अनिवार्य गरिएको छ?",
      options: [
        { ja: "特定元方事業者（元請負人）", id: "Kontraktor Utama Terpilih (Gen-uke)", ne: "तोकिएको मुख्य ठेकेदार (गेन-उके)" },
        { ja: "一番小さな専門下請負業者", id: "Subkontraktor terkecil di proyek", ne: "आयोजनाको सबैभन्दा सानो उप-ठेकेदार" },
        { ja: "現場の警備会社", id: "Perusahaan keamanan lokasi", ne: "कार्यस्थलको सुरक्षा गार्ड कम्पनी" },
        { ja: "市役所の建築指導課", id: "Dinas pengawas bangunan pemerintah kota", ne: "नगरपालिकाको भवन नियमन शाखा" }
      ],
      answer: 0,
      expJa: "【テキスト P.19参照】特定元方事業者（元請）は、混在作業による労働災害を防止するため「統括安全衛生責任者」を選任し、下請負業者の安全衛生責任者と連絡調整を行います。",
      expId: "Kontraktor utama (元請) wajib menunjuk Toukatsu Anzen Eisei Sekininsha untuk mengoordinasikan keselamatan seluruh subkontraktor.",
      expNe: "मुख्य ठेकेदारले सबै उप-ठेकेदारहरूसँग सुरक्षा समन्वय गर्न समग्र सुरक्षा तथा स्वास्थ्य प्रमुख नियुक्त गर्नुपर्छ।"
    },
    {
      cat: "Day 2 復習：工程管理（P.16〜32）",
      q: "<ruby>工程管理<rt>こうていかんり</rt></ruby>において、**<ruby>完成引渡日<rt>かんせいいきわたしび</rt></ruby>（ゴール）から<ruby>逆算<rt>ぎゃくさん</rt></ruby>して**<ruby>各工事<rt>かくこうじ</rt></ruby>の<ruby>着手時期<rt>ちゃくしゅじき</rt></ruby>や<ruby>期間<rt>きかん</rt></ruby>を<ruby>決<rt>き</rt></ruby>めていく<ruby>計画手法<rt>けいかくしゅほう</rt></ruby>を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa nama metode perencanaan jadwal kerja yang menghitung mundur dari tanggal penyelesaian proyek (tenggat waktu) ke awal?",
      q_ne: "काम सम्पन्न गरी हस्तान्तरण गर्ने अन्तिम मितिबाट उल्टो हिसाब गर्दै हरेक कामको सुरु मिति तय गर्ने विधिलाई के भनिन्छ?",
      options: [
        { ja: "バックワード法（逆算方式）", id: "Metode Backward (perhitungan mundur)", ne: "ब्याकवर्ड विधि (उल्टो हिसाब विधि)" },
        { ja: "フォワード法（積上げ方式）", id: "Metode Forward (perhitungan maju)", ne: "फरवार्ड विधि (सुल्टो हिसाब विधि)" },
        { ja: "抜き打ち検査法", id: "Metode inspeksi mendadak", ne: "आकस्मिक जाँच विधि" },
        { ja: "指名競争入札法", id: "Metode lelang tertutup", ne: "छनोट बोलपत्र विधि" }
      ],
      answer: 0,
      expJa: "【テキスト P.28参照】納期を守るため、完了期日から逆算して工程を割り振る手法を「バックワード法」と呼びます。ボトルネックの発見や工期短縮の検討に優れています。",
      expId: "Metode Backward menghitung mundur dari batas akhir serah terima untuk memastikan target waktu tercapai tanpa molor.",
      expNe: "काम समयमा सक्न अन्तिम म्यादबाट पछाडि हिसाब गरेर कार्यतालिका बनाउने विधिलाई 'ब्याकवर्ड विधि' भनिन्छ।"
    },
    {
      cat: "Day 3 復習：建設業法・技術者（P.33〜48）",
      q: "<ruby>建設業法<rt>けんせつぎょうほう</rt></ruby>において、<ruby>元請負人<rt>もとうけおいにん</rt></ruby>が<ruby>一定額以上<rt>いっていがくいじょう</rt></ruby>（<ruby>建築一式<rt>けんちくいっしき</rt></ruby>8,000<ruby>万円以上<rt>まんえんいじょう</rt></ruby>など）の<ruby>下請契約<rt>したうけけいやく</rt></ruby>を<ruby>締結<rt>ていけつ</rt></ruby>して<ruby>施工<rt>せこう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>、<ruby>現場<rt>げんば</rt></ruby>に<ruby>配置<rt>はいち</rt></ruby>しなければならない<ruby>技術者<rt>ぎじゅつしゃ</rt></ruby>はどれですか。",
      q_id: "Menurut UU Konstruksi, teknisi apa yang WAJIB ditempatkan di lokasi oleh kontraktor utama bila mensubkontrakkan pekerjaan dalam jumlah besar (misal: 80 juta yen ke atas untuk konstruksi umum)?",
      q_ne: "जापानको निर्माण व्यवसाय ऐन अनुसार मुख्य ठेकेदारले धेरै रकमको उप-ठेक्का दिँदा कार्यस्थलमा अनिवार्य खटाउनुपर्ने प्राविधिक कुन हो?",
      options: [
        { ja: "監理技術者（かんりぎじゅつしゃ）", id: "Teknisi Pengawas (Kanri Gijutsusha)", ne: "सुपरिवेक्षण प्राविधिक (कान्री गिजुत्सुशा)" },
        { ja: "主任技術者（しゅにんぎじゅつしゃ）", id: "Teknisi Utama (Shunin Gijutsusha)", ne: "प्रमुख प्राविधिक (शुनिन गिजुत्सुशा)" },
        { ja: "宅地建物取引士", id: "Spesialis transaksi real estat", ne: "घरजग्गा कारोबार विशेषज्ञ" },
        { ja: "公認会計士", id: "Akuntan publik bersertifikat", ne: "प्रमाणित लेखापरीक्षक" }
      ],
      answer: 0,
      expJa: "【テキスト P.36参照】特定建設業者が一定額以上の下請契約を結ぶ大規模工事では「監理技術者」の配置が義務付けられます（それ以外の工事では主任技術者）。",
      expId: "Bila nilai subkontrak melebihi batas regulasi, kontraktor utama wajib menempatkan Kanri Gijutsusha (bukan hanya Shunin Gijutsusha).",
      expNe: "ठूलो रकमको उप-ठेक्का भएको आयोजनामा मुख्य ठेकेदारले 'कान्री गिजुत्सुशा' खटाउनु कानुनी रूपमा अनिवार्य छ।"
    },
    {
      cat: "Day 3 復習：品質管理（P.33〜48）",
      q: "<ruby>品質管理<rt>ひんしつかんり</rt></ruby>（QC）を<ruby>継続的<rt>けいぞくてき</rt></ruby>に<ruby>改善<rt>かいぜん</rt></ruby>していくための「PDCAサイクル」の4つのステップとして、**<ruby>正<rt>ただ</rt></ruby>しい<ruby>順番<rt>じゅんばん</rt></ruby>**はどれですか。",
      q_id: "Manakah urutan yang BENAR dari 4 langkah Siklus PDCA untuk peningkatan mutu berkelanjutan?",
      q_ne: "निरन्तर गुणस्तर सुधारका लागि प्रयोग गरिने 'PDCA चक्र' को सही क्रम कुन हो?",
      options: [
        { ja: "Plan（計画）➔ Do（実行）➔ Check（評価・点検）➔ Action（改善・処置）", id: "Plan (Rencana) -> Do (Lakukan) -> Check (Periksa) -> Action (Tindakan perbaikan)", ne: "Plan (योजना) -> Do (काम) -> Check (जाँच) -> Action (सुधार)" },
        { ja: "Action（改善）➔ Plan（計画）➔ Do（実行）➔ Check（点検）", id: "Action -> Plan -> Do -> Check", ne: "Action -> Plan -> Do -> Check" },
        { ja: "Do（実行）➔ Check（点検）➔ Plan（計画）➔ Action（改善）", id: "Do -> Check -> Plan -> Action", ne: "Do -> Check -> Plan -> Action" },
        { ja: "Check（点検）➔ Action（改善）➔ Do（実行）➔ Plan（計画）", id: "Check -> Action -> Do -> Plan", ne: "Check -> Action -> Do -> Plan" },
      ],
      answer: 0,
      expJa: "【テキスト P.41参照】計画（Plan）➔ 実行（Do）➔ 測定・評価（Check）➔ 改善（Action）のサイクルを繰り返すことで、施工品質が螺旋階段のように向上します。",
      expId: "Siklus PDCA: Rencanakan (Plan), Laksanakan (Do), Periksa hasilnya (Check), dan Lakukan perbaikan (Action) secara berulang.",
      expNe: "PDCA चक्र: योजना बनाउने (P), काम गर्ने (D), नतिजा जाँच्ने (C), र सुधार गर्ने (A) को निरन्तर प्रक्रिया हो।"
    },
    {
      cat: "Day 4 復習：原価管理（P.49〜65）",
      q: "<ruby>工事現場<rt>こうじげんば</rt></ruby>で<ruby>発生<rt>はっせい</rt></ruby>する<ruby>費用<rt>ひよう</rt></ruby>のうち、「**<ruby>専門下請負業者<rt>せんもんしたうけおいぎょうしゃ</rt></ruby>に<ruby>支払<rt>しはら</rt></ruby>う<ruby>工事代金<rt>こうじだいきん</rt></ruby>**」はどの<ruby>費目<rt>ひもく</rt></ruby>に<ruby>分類<rt>ぶんるい</rt></ruby>されますか。",
      q_id: "Biaya yang dibayarkan kepada subkontraktor spesialis atas pekerjaan yang mereka lakukan diklasifikasikan sebagai apa?",
      q_ne: "विशेषज्ञ उप-ठेकेदार कम्पनीलाई उनीहरूको काम बापत भुक्तानी गरिने रकम कुन खर्च शीर्षक अन्तर्गत पर्दछ?",
      options: [
        { ja: "外注費（がいちゅうひ）", id: "Biaya subkontraktor (Gaichuhi)", ne: "उप-ठेक्का खर्च (गाइचुही)" },
        { ja: "労務費（ろうむひ）", id: "Biaya tenaga kerja langsung (Romuhi)", ne: "प्रत्यक्ष श्रम खर्च (रोमुही)" },
        { ja: "材料費（ざいりょうひ）", id: "Biaya material (Zairyohi)", ne: "सामग्री खर्च (जाइर्योही)" },
        { ja: "法定福利費（ほうていふくりひ）", id: "Biaya kesejahteraan hukum", ne: "कानुनी कल्याणकारी खर्च" }
      ],
      answer: 0,
      expJa: "【テキスト P.50参照】自社作業員の直接賃金は「労務費」、社外の下請負会社に請け負わせた工事代金は「外注費」に区分されます。原価計算における重要な違いです。",
      expId: "Upah pekerja sendiri adalah Romuhi (労務費), sedangkan pembayaran ke kontraktor luar adalah Gaichuhi (外注費).",
      expNe: "आफ्ना कामदारको ज्याला 'रोमुही' हो भने बाहिरी उप-ठेकेदारलाई दिइने रकम 'गाइचुही' (उप-ठेक्का खर्च) हो।"
    },
    {
      cat: "Day 5 復習：基礎工法・地盤（P.66〜82）",
      q: "<ruby>地盤<rt>じばん</rt></ruby>の<ruby>一部<rt>いちぶ</rt></ruby>だけが<ruby>不均等<rt>ふきんとう</rt></ruby>に<ruby>沈<rt>しず</rt></ruby>み、<ruby>建物<rt>たてもの</rt></ruby>が<ruby>傾<rt>かたむ</rt></ruby>いて<ruby>壁<rt>かべ</rt></ruby>にクラック（ひび割れ）が<ruby>入<rt>はい</rt></ruby>るなどの<ruby>被害<rt>ひがい</rt></ruby>をもたらす<ruby>現象<rt>げんしょう</rt></ruby>を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk fenomena di mana tanah amblas secara tidak merata sehingga bangunan miring dan dinding retak?",
      q_ne: "जमिन असमान रूपमा भासिएर भवन एकातिर ढल्किने र भित्ताहरू चर्किने समस्यालाई के भनिन्छ?",
      options: [
        { ja: "不同沈下（ふどうちんか）", id: "Penurunan tanah tidak merata (Fudo Chinka)", ne: "असमान जमिन भासिने (फुदौ छिन्का)" },
        { ja: "液状化現象（えきじょうかけんしょう）", id: "Likuifaksi tanah", ne: "माटो तरलीकरण" },
        { ja: "地盤反力（じばんはんりょく）", id: "Reaksi daya dukung tanah", ne: "जमिनको प्रतिरोधी शक्ति" },
        { ja: "凍上現象（とうじょうげんしょう）", id: "Pelepasan beku tanah (Frost heave)", ne: "जमिन जम्ने प्रक्रिया" }
      ],
      answer: 0,
      expJa: "【テキスト P.71参照】不同沈下は建物の致命的な構造損傷につながります。これを防ぐために事前の地盤調査や地盤改良工法、基礎杭の打設を行います。",
      expId: "Fudo Chinka adalah penurunan sebagian tanah yang membuat gedung miring. Dihindari dengan uji tanah dan tiang pancang.",
      expNe: "जमिन असमान तरिकाले भासिँदा भवन ढल्किन्छ, जसलाई रोक्न जमिनको परीक्षण र बलियो पाइल गाडिन्छ।"
    },
    {
      cat: "Day 5 復習：免震と制震（P.66〜82）",
      q: "<ruby>地震対策構造<rt>じしんたいさくこうぞう</rt></ruby>のうち、「**ダンパー（油圧や金属の抵抗装置）を建物内に配置し、地震の揺れエネルギーを熱などに変換して吸収する構造**」はどれですか。",
      q_id: "Struktur penahan gempa manakah yang memasang peredam (damper) di dalam gedung untuk menyerap dan meredam energi gempa?",
      q_ne: "भूकम्पको कम्पन शक्तिलाई भवनभित्रै ड्याम्पर (तेल वा धातुको प्रतिरोधक) राखेर सोस्ने संरचना कुन हो?",
      options: [
        { ja: "制震構造（せいしんこうぞう）", id: "Struktur redaman gempa (Seishin)", ne: "भूकम्प नियन्त्रण संरचना (सेइशिन)" },
        { ja: "免震構造（めんしんこうぞう）", id: "Struktur isolasi gempa (Menshin)", ne: "भूकम्प पृथकीकरण संरचना (मेन्शिन)" },
        { ja: "耐震構造（たいしんこうぞう）", id: "Struktur tahan gempa kaku (Taishin)", ne: "कडा भूकम्प प्रतिरोधी संरचना (ताइशिन)" },
        { ja: "剛体構造（ごうたいこうぞう）", id: "Struktur benda tegar", ne: "अविभाज्य संरचना" }
      ],
      answer: 0,
      expJa: "【テキスト P.74参照】「制震（せいしん）」はダンパーで揺れを吸収し、建物の変形や上層階の揺れを抑える技術です。基礎と建物を切り離す「免震」、柱や梁を強くして耐える「耐震」と区別されます。",
      expId: "Seishin (制震) menggunakan damper di dalam gedung untuk menyerap getaran gempa, berbeda dengan Menshin (isolasi dari tanah).",
      expNe: "'सेइशिन' ले भवनभित्र ड्याम्पर राखेर भूकम्पको कम्पनलाई सोस्छ र माथिल्लो तल्ला हल्लिनबाट जोगाउँछ।"
    },
    {
      cat: "Day 6 復習：安全合図・緊急時（P.83〜98）",
      q: "<ruby>現場<rt>げんば</rt></ruby>でクレーンや<ruby>重機<rt>じゅうき</rt></ruby>の<ruby>合図<rt>あいず</rt></ruby>において、「**<ruby>指名<rt>しめい</rt></ruby>された<ruby>合図者<rt>あいずしゃ</rt></ruby>以外でも、現場にいる者なら誰でも直ちに行ってよい合図**」はどれですか。",
      q_id: "Manakah sinyal alat berat/crane yang WAJIB dan BOLEH dilakukan oleh siapa saja yang ada di lapangan tanpa harus menjadi juru sinyal resmi?",
      q_ne: "तोकिएको संकेतकर्ता नभए पनि कार्यस्थलमा उपस्थित जोसुकैले तुरुन्त दिन पाउने क्रेनको संकेत कुन हो?",
      options: [
        { ja: "緊急停止（非常停止）の合図", id: "Sinyal Berhenti Darurat (Emergency Stop)", ne: "आपतकालीन रोक्ने संकेत (इमर्जेन्सी स्टप)" },
        { ja: "巻上げ（吊り上げ）の合図", id: "Sinyal menaikkan muatan", ne: "सामान माथि उठाउने संकेत" },
        { ja: "ジブ（ブーム）起伏の合図", id: "Sinyal menurunkan/menaikkan lengan boom", ne: "क्रेनको हात तल/माथि गर्ने संकेत" },
        { ja: "クレーン旋回の合図", id: "Sinyal memutar arah crane", ne: "क्रेन घुमाउने संकेत" }
      ],
      answer: 0,
      expJa: "【テキスト P.96参照】通常運転の合図は指名された1名が行いますが、「事故を防ぐための緊急停止」だけは現場の全員に指示を出す権限と義務があります。",
      expId: "Sinyal darurat STOP boleh dan wajib diberikan oleh SIAPA SAJA yang melihat bahaya demi menyelamatkan nyawa.",
      expNe: "सामान उठाउने र घुमाउने काम तोकिएको संकेतकर्ताले मात्र गर्छ, तर आपतकालीन 'रोक्ने' संकेत भने जोसुकैले तुरुन्त दिनुपर्छ।"
    }
  ]
};
