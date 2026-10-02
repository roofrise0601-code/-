const CURRENT_QUIZ_DATA = {
  title: "特定技能2号 学科：Day 6（第3章 3.2 仕上げ・設備 & 3.3 必要資格）",
  key: "score_gakka3_3",
  passScore: 70,
  questions: [
    {
      id: 1,
      cat: "3.2.22 タイル張り工事 (p.56)",
      q: "<ruby>壁<rt>かべ</rt></ruby>や<ruby>床<rt>ゆか</rt></ruby>の **「タイル<ruby>張<rt>は</rt></ruby>り<ruby>工事<rt>こうじ</rt></ruby>」**について、**<ruby>誤<rt>あやま</rt></ruby>っているもの**は どれですか。",
      options: [
        "<ruby>給排水<rt>きゅうはいすい</rt></ruby>の<ruby>配管<rt>はいかん</rt></ruby>の<ruby>取<rt>と</rt></ruby>り<ruby>出<rt>だ</rt></ruby>し<ruby>口<rt>ぐち</rt></ruby>の<ruby>位置<rt>いち</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>せずに、<ruby>先<rt>さき</rt></ruby>にタイルを<ruby>全面<rt>ぜんめん</rt></ruby>に<ruby>張<rt>は</rt></ruby>り<ruby>詰<rt>つ</rt></ruby>めてよい。",
        "<ruby>建物<rt>たてもの</rt></ruby>からのタイルの<ruby>剥落<rt>はくらく</rt></ruby>（<ruby>落<rt>お</rt></ruby>ちること）は<ruby>人<rt>ひと</rt></ruby>の<ruby>命<rt>いのち</rt></ruby>に<ruby>関<rt>かか</rt></ruby>わるため、<ruby>確実<rt>かくじつ</rt></ruby>な<ruby>接着<rt>せっちゃく</rt></ruby>と<ruby>施工技術<rt>せこうぎじゅつ</rt></ruby>が<ruby>求<rt>もと</rt></ruby>められる。",
        "<ruby>窓<rt>まど</rt></ruby>サッシやまわりの<ruby>部材<rt>ぶざい</rt></ruby>との「<ruby>取<rt>と</rt></ruby>り<ruby>合<rt>あ</rt></ruby>い（<ruby>異<rt>こと</rt></ruby>なる<ruby>構造<rt>こうぞう</rt></ruby>が<ruby>出<rt>で</rt></ruby><ruby>会<rt>あ</rt></ruby>う<ruby>部分<rt>ぶぶん</rt></ruby>の<ruby>処理<rt>しょり</rt></ruby>）」をしっかり<ruby>検討<rt>けんとう</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がある。",
        "タイルは<ruby>建物<rt>たてもの</rt></ruby>の<ruby>美観<rt>びかん</rt></ruby>を<ruby>整<rt>ととの</rt></ruby>えるだけでなく、<ruby>建物<rt>たてもの</rt></ruby>を<ruby>保護<rt>ほご</rt></ruby>して<ruby>耐久性<rt>たいきゅうせい</rt></ruby>を<ruby>高<rt>たか</rt></ruby>める<ruby>役割<rt>やくわり</rt></ruby>をする。"
      ],
      answer: 0,
      hintId: "Memasang keramik tanpa memikirkan jalur pipa air/listrik akan membuat pipa tidak bisa dipasang. Koordinasi sangat penting!",
      hintNe: "पाइपलाइन वा बिजुलीको प्वाल नछोडी पहिला नै टायल टाँस्दा पछि पाइप जोड्न सकिँदैन। त्यसैले समन्वय आवश्यक हुन्छ।",
      expJa: "配管の取り出し口を考えずにタイルを張ると配管工事ができなくなります。他職種との連携が重要です（テキストp.56）。",
      expId: "Pemasangan ubin/keramik harus memperhitungkan lubang instalasi pipa dan kelistrikan agar tidak saling mengganggu.",
      expNe: "टायल लगाउँदा प्लम्बिङ र बिजुलीका पाइप निस्कने ठाउँलाई ध्यान नदिएमा पछि ठूलो समस्या हुन्छ।"
    },
    {
      id: 2,
      cat: "3.2.23〜3.2.24 内装仕上げ・表装 (p.56-58)",
      q: "<ruby>内装<rt>ないそう</rt></ruby>の 「クロス（<ruby>壁紙<rt>かべがみ</rt></ruby>）<ruby>貼<rt>は</rt></ruby>り」の<ruby>下地<rt>したじ</rt></ruby>について、**<ruby>正<rt>ただ</rt></ruby>しいもの**は どれですか。",
      options: [
        "LGS（<ruby>軽鉄<rt>けいてつ</rt></ruby>・スタッド）の<ruby>下地<rt>したじ</rt></ruby>に<ruby>石膏<rt>せっこう</rt></ruby>ボードを<ruby>貼<rt>は</rt></ruby>り、ボードの<ruby>継<rt>つ</rt></ruby>ぎ<ruby>目<rt>め</rt></ruby>を「パテ」で<ruby>平<rt>たい</rt></ruby>らに<ruby>埋<rt>う</rt></ruby>めてからクロスを<ruby>貼<rt>は</rt></ruby>る。",
        "<ruby>石膏<rt>せっこう</rt></ruby>ボードの<ruby>大<rt>おお</rt></ruby>きなスキマや段差はそのままで、パテを<ruby>使<rt>つか</rt></ruby>わずにクロスを<ruby>貼<rt>は</rt></ruby>れば<ruby>自然<rt>しぜん</rt></ruby>に<ruby>平<rt>たい</rt></ruby>らになる。",
        "「<ruby>軽天工事<rt>けいてんこうじ</rt></ruby>」とは、<ruby>木<rt>き</rt></ruby>の<ruby>角材<rt>かくざい</rt></ruby>だけを<ruby>使<rt>つか</rt></ruby>って<ruby>床<rt>ゆか</rt></ruby>のフローリングを<ruby>張<rt>は</rt></ruby>る<ruby>工事<rt>こうじ</rt></ruby>のことである。",
        "クロスを<ruby>貼<rt>は</rt></ruby>るときは、<ruby>必<rt>かなら</rt></ruby>ず<ruby>表面<rt>ひょうめん</rt></ruby>にシワやデコボコを<ruby>残<rt>のこ</rt></ruby>すように<ruby>縮<rt>ちぢ</rt></ruby>めて<ruby>貼<rt>は</rt></ruby>るのが<ruby>正<rt>ただ</rt></ruby>しい。"
      ],
      answer: 0,
      hintId: "Rangka baja ringan (LGS) ditutup papan gypsum, lalu sambungannya didempul (pate) agar rata sebelum dipasangi wallpaper (cross).",
      hintNe: "हल्का स्टिलको फ्रेम (LGS) माथि जिप्सम बोर्ड ठोकेर, जोर्नीहरूमा पुटिन (पाते) भरेर मात्र वालपेपर टाँसिन्छ।",
      expJa: "鋼製下地（LGS）に石膏ボードを貼り、つなぎ目の凹凸をパテで埋めて平滑にしてからクロスを施工します（テキストp.56-58）。",
      expId: "Permukaan papan gipsum harus didempul (putty/pate) hingga rata sempurna pada bagian sambungan sebelum penempelan wallpaper.",
      expNe: "जिप्सम बोर्डका जोर्नीहरू पुटिनले चिल्लो पारेपछि मात्र वालपेपर राम्रोसँग टाँसिन्छ।"
    },
    {
      id: 3,
      cat: "3.2.26 サッシ工事 (p.59)",
      q: "マンションの<ruby>改修工事<rt>かいしゅうこうじ</rt></ruby>で、**<ruby>古<rt>ふる</rt></ruby>いサッシ<ruby>枠<rt>わく</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>外<rt>はず</rt></ruby>さず その<ruby>上<rt>うえ</rt></ruby>に<ruby>新<rt>あたら</rt></ruby>しい<ruby>枠<rt>わく</rt></ruby>をかぶせてコストと<ruby>工期<rt>こうき</rt></ruby>を<ruby>抑<rt>おさ</rt></ruby>える<ruby>工法<rt>こうほう</rt></ruby>**は どれですか。",
      options: [
        "カバー<ruby>工法<rt>こうほう</rt></ruby>",
        "ナトム（NATM）<ruby>工法<rt>こうほう</rt></ruby>",
        "ウェルポイント<ruby>工法<rt>こうほう</rt></ruby>",
        "シールド<ruby>工法<rt>こうほう</rt></ruby>"
      ],
      answer: 0,
      hintId: "Metode memasang kusen baru langsung di atas kusen lama tanpa merusak dinding sekitarnya disebut metode 'Cover Kouhou'.",
      hintNe: "पुरानो झ्यालको फ्रेम नउप्काई त्यसैमाथि नयाँ फ्रेम खप्ट्याएर सजिलै फेर्ने विधिलाई 'कभर कोउहोउ' भनिन्छ।",
      expJa: "古い枠を取り外さずにその上に新しい枠をかぶせてサッシを取り付ける工法を「カバー工法」と言います（テキストp.59）。",
      expId: "Metode Cover (Cover Kouhou) memasang kusen jendela baru di atas kusen lama sehingga menghemat biaya dan tidak merusak dinding sekitar.",
      expNe: "पुरानो फ्रेम नहटाई नयाँ झ्याल राख्दा भित्तो र रङ बिग्रँदैन, जसलाई कभर विधि भनिन्छ।"
    },
    {
      id: 4,
      cat: "3.2.27 吹付けウレタン断熱工事 (p.59-60)",
      q: "「<ruby>吹付<rt>ふきつ</rt></ruby>けウレタン<ruby>断熱工事<rt>だんねつこうじ</rt></ruby>」についての **<ruby>正<rt>ただ</rt></ruby>しいルール**は どれですか。",
      options: [
        "<ruby>吹付<rt>ふきつ</rt></ruby>け<ruby>面<rt>めん</rt></ruby>にホコリや<ruby>油分<rt>あぶらぶん</rt></ruby>があると<ruby>剥<rt>は</rt></ruby>がれる<ruby>原因<rt>げんいん</rt></ruby>になるため<ruby>清掃<rt>せいそう</rt></ruby>し、<ruby>施工中<rt>せこうちゅう</rt></ruby>は<ruby>測定器<rt>そくていき</rt></ruby>で「<ruby>厚<rt>あつ</rt></ruby>さ」を<ruby>確認<rt>かくにん</rt></ruby>する。",
        "ウレタンの<ruby>厚<rt>あつ</rt></ruby>さは<ruby>適当<rt>てきとう</rt></ruby>でよいため、<ruby>厚<rt>あつ</rt></ruby>さの<ruby>測定<rt>そくてい</rt></ruby>や<ruby>検査<rt>けんさ</rt></ruby>をしてはならない。",
        "<ruby>油<rt>あぶら</rt></ruby>や<ruby>泥<rt>どろ</rt></ruby>でベタベタに<ruby>汚<rt>よご</rt></ruby>れたコンクリートの<ruby>上<rt>うえ</rt></ruby>に<ruby>直接<rt>ちょくせつ</rt></ruby><ruby>吹<rt>ふ</rt></ruby>き<ruby>付<rt>つ</rt></ruby>けるほうが、よく<ruby>接着<rt>せっちゃく</rt></ruby>する。",
        "<ruby>吹付<rt>ふきつ</rt></ruby>けウレタンは<ruby>熱<rt>ねつ</rt></ruby>をよく<ruby>通<rt>とお</rt></ruby>すため、<ruby>部屋<rt>へや</rt></ruby>を<ruby>寒<rt>さむ</rt></ruby>くするために<ruby>使<rt>つか</rt></ruby>われる。"
      ],
      answer: 0,
      hintId: "Permukaan harus bersih dari debu/minyak agar busa urethane tidak lepas, dan ketebalan wajib diukur teratur dengan alat ukur khusus.",
      hintNe: "धुलो र तेल भएमा इन्सुलेसन उप्किन्छ, त्यसैले सफा गर्नुपर्छ र मोटाइ नाप्ने यन्त्रले नियमित जाँच गर्नुपर्छ।",
      expJa: "接着力低下を防ぐため吹付け面の清掃が必須で、施工中は4〜5m間隔で測定器を用いて厚さを確認します（テキストp.59-60）。",
      expId: "Bersihkan permukaan beton dari debu/minyak sebelum semprot foam urethane, dan periksa ketebalannya secara berkala.",
      expNe: "युरेथेन राम्रोसँग टाँसिन कंक्रिट सफा हुनुपर्छ र तोकिएको मोटाइ पुगेको नापेर यकिन गर्नुपर्छ।"
    },
    {
      id: 5,
      cat: "3.2.28 防水工事 (p.60)",
      q: "<ruby>建材<rt>けんざい</rt></ruby>やサッシの **「<ruby>部材間<rt>ぶざいかん</rt></ruby>の<ruby>隙間<rt>すきま</rt></ruby>（<ruby>目地<rt>めじ</rt></ruby>）」に プライマーを<ruby>塗<rt>ぬ</rt></ruby>って<ruby>充填<rt>じゅうてん</rt></ruby>する<ruby>防水工事<rt>ぼうすいこうじ</rt></ruby>**は どれですか。",
      options: [
        "シーリング<ruby>防水工事<rt>ぼうすいこうじ</rt></ruby>",
        "アスファルト<ruby>防水工事<rt>ぼうすいこうじ</rt></ruby>",
        "FRP<ruby>防水工事<rt>ぼうすいこうじ</rt></ruby>",
        "シート<ruby>防水工事<rt>ぼうすいこうじ</rt></ruby>"
      ],
      answer: 0,
      hintId: "Pekerjaan mengisi celah/sambungan antar-komponen bangunan dengan pasta elastis setelah dilapisi primer disebut Sealing Bousui.",
      hintNe: "झ्यालका फ्रेम वा भित्ताका जोर्नीका खाली ठाउँहरूमा केमिकल भरेर पानी रोक्ने विधिलाई 'सिलिङ' भनिन्छ।",
      expJa: "部材間の接合部の隙間にプライマーを塗り、シーリング材を充填する工法を「シーリング防水工事」と言います（テキストp.60）。",
      expId: "Sealing Bousui adalah pekerjaan mengisi celah sambungan material dengan lem elastis khusus sealant agar kedap air.",
      expNe: "जोर्नी र ग्यापहरूमा सिलिङ केमिकल भरेर पानी पस्न नदिने विधिलाई सिलिङ वाटरप्रुफिङ भनिन्छ।"
    },
    {
      id: 6,
      cat: "3.2.30〜3.2.31 電気・通信工事 (p.61-63)",
      q: "<ruby>電気工事<rt>でんきこうじ</rt></ruby>および <ruby>電気通信工事<rt>でんきつうしんこうじ</rt></ruby>について、**<ruby>正<rt>ただ</rt></ruby>しいもの**は どれですか。",
      options: [
        "<ruby>大<rt>おお</rt></ruby>きなビルや<ruby>工場<rt>こうじょう</rt></ruby>の<ruby>電気工事<rt>でんきこうじ</rt></ruby>には「<ruby>第一種電気工事士<rt>だいいっしゅでんきこうじし</rt></ruby>」などの<ruby>国家資格<rt>こっかしかく</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。",
        "<ruby>電線<rt>でんせん</rt></ruby>やケーブルは<ruby>誰<rt>だれ</rt></ruby>でも<ruby>無資格<rt>むしかく</rt></ruby>で<ruby>自由<rt>じゆう</rt></ruby>に<ruby>切<rt>き</rt></ruby>ったり<ruby>繋<rt>つな</rt></ruby>いだりしてよい。",
        "<ruby>電気通信工事<rt>でんきつうしんこうじ</rt></ruby>では、すべて<ruby>糸<rt>いと</rt></ruby>と<ruby>紙<rt>かみ</rt></ruby>コップを<ruby>使<rt>つか</rt></ruby>って<ruby>会話<rt>かいわ</rt></ruby>する<ruby>設備<rt>せつび</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る。",
        "<ruby>感電<rt>かんでん</rt></ruby>や<ruby>漏電<rt>ろうでん</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐための「<ruby>接地<rt>せっち</rt></ruby>（アース）<ruby>工事<rt>こうじ</rt></ruby>」は、してはならないと<ruby>決<rt>き</rt></ruby>められている。"
      ],
      answer: 0,
      hintId: "Pekerjaan instalasi listrik tegangan tinggi pada gedung dan pabrik besar wajib memiliki sertifikasi negara (Denki Koujishi Kelas 1).",
      hintNe: "ठूला भवन र फ्याक्ट्रीमा बिजुलीको काम गर्न प्रथम श्रेणीको 'डेनकी कोउजीशी' लाइसेन्स अनिवार्य चाहिन्छ।",
      expJa: "高電圧等を扱う大きなビルや工場での電気工事には、第一種電気工事士の資格が必要です（テキストp.61-63）。",
      expId: "Untuk mengerjakan instalasi listrik skala besar di gedung/pabrik, diwajibkan mengantongi lisensi teknisi listrik negara (Denki Koujishi Kelas 1).",
      expNe: "विद्युत दुर्घटना र आगलागीबाट बच्न योग्य राष्ट्रिय लाइसेन्स प्राप्त प्राविधिकले मात्र काम गर्न पाउँछन्।"
    },
    {
      id: 7,
      cat: "3.2.38 解体工事 (p.67)",
      q: "<ruby>建物<rt>たてもの</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>壊<rt>こわ</rt></ruby>す「<ruby>解体工事<rt>かいたいこうじ</rt></ruby>」で、**<ruby>最<rt>もっと</rt></ruby>も<ruby>注意<rt>ちゅうい</rt></ruby>すべきこと**は どれですか。",
      options: [
        "<ruby>健康被害<rt>けんこうひがい</rt></ruby>を<ruby>及<rt>およ</rt></ruby>ぼすアスベスト（<ruby>石綿<rt>いしわた</rt></ruby>）の<ruby>事前調査<rt>じぜんちょうさ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>い、<ruby>飛散<rt>ひさん</rt></ruby>や<ruby>吸<rt>す</rt></ruby>い<ruby>込<rt>こ</rt></ruby>みを<ruby>防<rt>ふせ</rt></ruby>ぐ<ruby>対策<rt>たいさく</rt></ruby>をしてから<ruby>解体<rt>かいたい</rt></ruby>する。",
        "<ruby>騒音<rt>そうおん</rt></ruby>やホコリをまき<ruby>散<rt>ち</rt></ruby>らしながら、<ruby>近所<rt>きんじょ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>も<ruby>知<rt>し</rt></ruby>らせずにいきなり<ruby>重機<rt>じゅうき</rt></ruby>で<ruby>倒<rt>たお</rt></ruby>す。",
        "<ruby>解体<rt>かいたい</rt></ruby>したコンクリートや<ruby>鉄筋<rt>てっきん</rt></ruby>のゴミ（<ruby>解体<rt>かいたい</rt></ruby>ガラ）は、<ruby>分別<rt>ぶんべつ</rt></ruby>せずにすべて<ruby>近<rt>ちか</rt></ruby>くの<ruby>山<rt>やま</rt></ruby>に<ruby>捨<rt>す</rt></ruby>てる。",
        "<ruby>建物<rt>たてもの</rt></ruby>の<ruby>地下<rt>ちか</rt></ruby>の<ruby>躯体<rt>くたい</rt></ruby>は<ruby>見<rt>み</rt></ruby>えないので、<ruby>壊<rt>こわ</rt></ruby>さずにそのまま<ruby>放置<rt>ほうち</rt></ruby>して<ruby>土<rt>つち</rt></ruby>をかぶせて<ruby>隠<rt>かく</rt></ruby>す。"
      ],
      answer: 0,
      hintId: "Wajib periksa kandungan asbes sebelum pembongkaran gedung agar partikel berbahayanya tidak terhirup pekerja atau menyebar ke lingkungan.",
      hintNe: "भवन भत्काउनु अघि हानिकारक एस्बेस्टस छ कि छैन जाँच गरी हावामा उड्न नदिन विशेष सतर्कता अपनाउनुपर्छ।",
      expJa: "アスベスト使用の有無を事前調査し、飛散・吸入防止対策を講じて解体します。廃材（解体ガラ）は適正に分別処分します（テキストp.67）。",
      expId: "Survei awal keberadaan asbes wajib dilakukan untuk melindungi pekerja dan warga dari bahaya serat asbes saat pembongkaran gedung.",
      expNe: "एस्बेस्टसले क्यान्सर गराउन सक्ने भएकाले काम अघि निरीक्षण र सुरक्षा प्रबन्ध अनिवार्य हुन्छ।"
    },
    {
      id: 8,
      cat: "3.3.1 労働安全衛生法に基づく資格の種類 (p.67-68)",
      q: "<ruby>労働安全衛生法<rt>ろうどうあんぜんえいせいほう</rt></ruby>に <ruby>基<rt>づ</rt></ruby>く **「3つの<ruby>資格<rt>しかく</rt></ruby>の<ruby>種類<rt>しゅるい</rt></ruby>」**として、<ruby>正<rt>ただ</rt></ruby>しい<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせは どれですか。",
      options: [
        "「<ruby>国家免許<rt>こっかめんきょ</rt></ruby>」・「<ruby>技能講習<rt>ぎのうこうしゅう</rt></ruby>」・「<ruby>特別教育<rt>とくべつきょういく</rt></ruby>」",
        "「<ruby>運転免許<rt>うんてんめんきょ</rt></ruby>」・「パスポート」・「<ruby>学生証<rt>がくせいしょう</rt></ruby>」",
        "「<ruby>初級<rt>しょきゅう</rt></ruby>」・「<ruby>中級<rt>ちゅうきゅう</rt></ruby>」・「<ruby>上級<rt>じょうきゅう</rt></ruby>」",
        "「<ruby>参加賞<rt>さんかしょう</rt></ruby>」・「<ruby>修了証<rt>しゅうりょうしょう</rt></ruby>」・「<ruby>合格証<rt>ごうかくしょう</rt></ruby>」"
      ],
      answer: 0,
      hintId: "3 jenis kualifikasi K3 di Jepang: Menkyo (Lisensi Negara), Ginou Koushuu (Pelatihan Keterampilan), dan Tokubetsu Kyouiku (Pendidikan Khusus).",
      hintNe: "जापानको औद्योगिक सुरक्षा कानुन अनुसारका ३ प्रकारका योग्यता: १. राष्ट्रिय लाइसेन्स (मेन्क्यो), २. गिनौ कोउस्युउ, र ३. तोकुबेचु क्योउइकु (विशेष तालिम)।",
      expJa: "安衛法に基づく資格には、難易度や危険度に応じて「国家免許」「技能講習」「特別教育」の3種類があります（テキストp.67-68）。",
      expId: "Kualifikasi resmi keselamatan kerja dibagi menjadi Lisensi Nasional (Menkyo), Kursus Keterampilan (Ginou Koushuu), dan Edukasi Khusus (Tokubetsu Kyouiku).",
      expNe: "जोखिमको मात्रा अनुसार राष्ट्रिय लाइसेन्स, सीप तालिम र विशेष तालिम गरी ३ तहको योग्यता प्रणाली हुन्छ।"
    },
    {
      id: 9,
      cat: "3.3.2 建設機械・クレーン等の資格区分 (p.68-71)",
      q: "<ruby>車両系建設機械<rt>しゃりょうけいけんせつきかい</rt></ruby>（パワーショベル等）を <ruby>運転<rt>うんてん</rt></ruby>するときの **「<ruby>技能講習<rt>ぎのうこうしゅう</rt></ruby>」と「<ruby>特別教育<rt>とくべつきょういく</rt></ruby>」の<ruby>分<rt>わ</rt></ruby>け<ruby>目<rt>め</rt></ruby>（<ruby>重<rt>おも</rt></ruby>さ）**は どれですか。",
      options: [
        "<ruby>機体重量<rt>きたいじゅうりょう</rt></ruby> **3トン**（3t<ruby>以上<rt>いじょう</rt></ruby>は<ruby>技能講習<rt>ぎのうこうしゅう</rt></ruby>、3t<ruby>未満<rt>みまん</rt></ruby>は<ruby>特別教育<rt>とくべつきょういく</rt></ruby>）",
        "<ruby>機体重量<rt>きたいじゅうりょう</rt></ruby> **10トン**（10t<ruby>以上<rt>いじょう</rt></ruby>は<ruby>技能講習<rt>ぎのうこうしゅう</rt></ruby>、10t<ruby>未満<rt>みまん</rt></ruby>は<ruby>特別教育<rt>とくべつきょういく</rt></ruby>）",
        "<ruby>機体重量<rt>きたいじゅうりょう</rt></ruby> **30トン**（30t<ruby>以上<rt>いじょう</rt></ruby>は<ruby>技能講習<rt>ぎのうこうしゅう</rt></ruby>、30t<ruby>未満<rt>みまん</rt></ruby>は<ruby>特別教育<rt>とくべつきょういく</rt></ruby>）",
        "<ruby>重<rt>おも</rt></ruby>さに関係なく、<ruby>誰<rt>だれ</rt></ruby>でも<ruby>特別教育<rt>とくべつきょういく</rt></ruby>だけでどんな<ruby>大<rt>おお</rt></ruby>きな重機でも<ruby>運転<rt>うんてん</rt></ruby>できる"
      ],
      answer: 0,
      hintId: "Batas berat alat berat (ekskavator dll): 3 ton ke atas wajib 'Ginou Koushuu', di bawah 3 ton cukup 'Tokubetsu Kyouiku'.",
      hintNe: "एक्साभेटर जस्ता हेभी मेसिनको तौल ३ टन वा माथि भए 'गिनौ कोउस्युउ' र ३ टनभन्दा कम भए 'विशेष तालिम' चाहिन्छ।",
      expJa: "車両系建設機械（整地・運搬・掘削）は、機体重量3t未満が特別教育、3t以上が技能講習修了者となります（テキストp.69-70）。",
      expId: "Alat berat konstruksi dengan bobot 3 ton ke atas wajib memiliki sertifikat Ginou Koushuu, sedangkan di bawah 3 ton cukup Tokubetsu Kyouiku.",
      expNe: "मेसिनको तौल ३ टनभन्दा बढी भएमा अनिवार्य रूपमा गिनौ कोउस्युउ (सीप तालिम) उत्तीर्ण गरेको हुनुपर्छ।"
    },
    {
      id: 10,
      cat: "3.3.2 高所作業・足場・酸欠等の資格 (p.72-77)",
      q: "<ruby>現場<rt>げんば</rt></ruby>の **<ruby>危険作業<rt>きけんさぎょう</rt></ruby>に<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>資格<rt>しかく</rt></ruby>**について、**<ruby>誤<rt>あやま</rt></ruby>っているもの**は どれですか。",
      options: [
        "<ruby>高所作業車<rt>こうしょさぎょうしゃ</rt></ruby>は、<ruby>作業床<rt>さぎょうゆか</rt></ruby>の<ruby>高<rt>たか</rt></ruby>さが20mであっても<ruby>何<rt>なに</rt></ruby>の<ruby>講習<rt>こうしゅう</rt></ruby>も<ruby>受<rt>う</rt></ruby>けずに<ruby>無資格<rt>むしかく</rt></ruby>で<ruby>操作<rt>そうさ</rt></ruby>できる。",
        "<ruby>足場<rt>あしば</rt></ruby>の<ruby>組立て<rt>くみたて</rt></ruby>や<ruby>解体<rt>かいたい</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>に<ruby>就<rt>つ</rt></ruby>くときは、「<ruby>足場<rt>あしば</rt></ruby>の<ruby>組立て等特別教育<rt>くみたてとうとくべつきょういく</rt></ruby>」を<ruby>修了<rt>しゅうりょう</rt></ruby>していなければならない。",
        "マンホールやトンネルなどの「<ruby>酸素欠乏危険場所<rt>さんそけつぼうきけんばしょ</rt></ruby>」で<ruby>作業<rt>さぎょう</rt></ruby>するときは、<ruby>酸欠<rt>さんけつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>資格<rt>しかく</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>である。",
        "<ruby>高<rt>たか</rt></ruby>さ5m<ruby>以上<rt>いじょう</rt></ruby>の<ruby>鉄骨<rt>てっこつ</rt></ruby>や<ruby>足場<rt>あしば</rt></ruby>の<ruby>組立て<rt>くみたて</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うときは、それぞれ「<ruby>作業主任者<rt>さぎょうしゅにんしゃ</rt></ruby>」を<ruby>配置<rt>はいち</rt></ruby>しなければならない。"
      ],
      answer: 0,
      hintId: "Mobil tangga/ketinggian (Kousho Sagyousha) tinggi 10m ke atas wajib memiliki sertifikat 'Ginou Koushuu', dilarang keras tanpa lisensi!",
      hintNe: "१० मिटरभन्दा अग्लो स्काईलिफ्ट (कोउस्यो सा ग्योउस्या) चलाउन 'गिनौ कोउस्युउ' अनिवार्य चाहिन्छ, बिना योग्यता चलाउन पाइँदैन।",
      expJa: "高所作業車は作業床10m以上で技能講習、10m未満で特別教育が必要です。無資格での運転は違法です（テキストp.70, 76）。",
      expId: "Mengoperasikan mobil tangga hidrolik (Manlift) dengan ketinggian lantai 10m ke atas wajib lulus Ginou Koushuu.",
      expNe: "१० मिटरभन्दा अग्लो स्काइलिफ्ट चलाउन अनिवार्य इजाजतपत्र चाहिन्छ।"
    }
  ]
};
