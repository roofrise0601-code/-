const CURRENT_QUIZ_DATA = {
  title: "特定技能2号 学科：Day 5（第3章 3.2 主な専門工事の仕事）",
  key: "score_gakka3_2",
  passScore: 70,
  questions: [
    {
      id: 1,
      cat: "3.2.1 土工事 (p.38)",
      q: "<ruby>土工事<rt>どこうじ</rt></ruby>（<ruby>土工<rt>どこう</rt></ruby>）の **<ruby>用語<rt>ようご</rt></ruby>と<ruby>作業内容<rt>さぎょうないよう</rt></ruby>**について、**<ruby>誤<rt>あやま</rt></ruby>っているもの**は どれですか。",
      options: [
        "<ruby>建物<rt>たてもの</rt></ruby>の<ruby>基礎<rt>きそ</rt></ruby>を<ruby>埋<rt>う</rt></ruby>めるために<ruby>地面<rt>じめん</rt></ruby>を<ruby>掘<rt>ほ</rt></ruby>ることを「<ruby>盛土<rt>もりど</rt></ruby>」といい、<ruby>斜面<rt>しゃめん</rt></ruby>に<ruby>土<rt>つち</rt></ruby>を<ruby>盛<rt>も</rt></ruby>ることを「<ruby>根切<rt>ねぎ</rt></ruby>り」という。",
        "<ruby>地面<rt>じめん</rt></ruby>が<ruby>沈下<rt>ちんか</rt></ruby>しないように、ローラーなどで<ruby>叩<rt>たた</rt></ruby>いたり<ruby>振動<rt>しんどう</rt></ruby>を<ruby>加<rt>くわ</rt></ruby>えて<ruby>隙間<rt>すきま</rt></ruby>を<ruby>少<rt>すく</rt></ruby>なくする<ruby>作業<rt>さぎょう</rt></ruby>を「<ruby>締固<rt>しめかた</rt></ruby>め」という。",
        "<ruby>基礎工事<rt>きそこうじ</rt></ruby>が<ruby>終<rt>お</rt></ruby>わった<ruby>後<rt>あと</rt></ruby>、<ruby>構造物<rt>こうぞうぶつ</rt></ruby>のまわりの<ruby>余分<rt>よぶん</rt></ruby>な<ruby>空間<rt>くうかん</rt></ruby>に<ruby>土<rt>つち</rt></ruby>を<ruby>埋<rt>う</rt></ruby>めることを「<ruby>埋<rt>う</rt></ruby>め<ruby>戻<rt>もど</rt></ruby>し」という。",
        "<ruby>斜面<rt>しゃめん</rt></ruby>の<ruby>崩壊<rt>ほうかい</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐため、モルタルを<ruby>吹<rt>ふ</rt></ruby>き<ruby>付<rt>つ</rt></ruby>けたり<ruby>種子<rt>しゅし</rt></ruby>・マットを<ruby>張<rt>は</rt></ruby>る「<ruby>法面<rt>のりめん</rt></ruby>」の<ruby>保護作業<rt>ほごさぎょう</rt></ruby>がある。"
      ],
      answer: 0,
      hintId: "Terbalik! Menggali tanah untuk pondasi disebut 'Negiri', sedangkan menimbun tanah disebut 'Morido'.",
      hintNe: "उल्टो भयो! जग हाल्न जमिन खन्ने कामलाई 'नेगिरी' र माटो थुपार्ने कामलाई 'मोरीदो' भनिन्छ।",
      expJa: "基礎のために地面を掘ることは「根切り」、斜面や平坦でない土地に土を盛ることは「盛り土」です（テキストp.38）。",
      expId: "Galian tanah untuk pondasi gedung disebut Negiri, dan pekerjaan menimbun tanah disebut Morido.",
      expNe: "जग बनाउन जमिन खन्ने कामलाई 'नेगिरी' र माटो भरेर सम्याउने कामलाई 'मोरीदो' भनिन्छ।"
    },
    {
      id: 2,
      cat: "3.2.2〜3.2.5 推進・海洋・さく井・ウェルポイント (p.39-41)",
      q: "<ruby>地下水<rt>ちかすい</rt></ruby>を <ruby>排水<rt>はいすい</rt></ruby>して **<ruby>水<rt>みず</rt></ruby>のない<ruby>状態<rt>じょうたい</rt></ruby>（ドライワーク）で<ruby>工事<rt>こうじ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うための<ruby>工法<rt>こうほう</rt></ruby>**は どれですか。",
      options: [
        "ウェルポイント<ruby>工法<rt>こうほう</rt></ruby>（またはディープウェル<ruby>工法<rt>こうほう</rt></ruby>）",
        "<ruby>浚渫<rt>しゅんせつ</rt></ruby><ruby>工法<rt>こうほう</rt></ruby>",
        "<ruby>温泉井<rt>おんせんせい</rt></ruby><ruby>工法<rt>こうほう</rt></ruby>",
        "<ruby>推進<rt>すいしん</rt></ruby>トンネル<ruby>工法<rt>こうほう</rt></ruby>"
      ],
      answer: 0,
      hintId: "Metode pemompaan air tanah agar area galian kering (dry work) hingga kedalaman 10m disebut metode Wellpoint.",
      hintNe: "जमिनमुनिको पानी तानेर सुक्खा ठाउँमा काम गर्न सकिने (ड्राइ-वर्क) विधिलाई 'वेलपोइन्ट' विधि भनिन्छ।",
      expJa: "ウェルポイント工法は、揚水管を打ち込み真空ポンプで地下水を汲み上げてドライワークを可能にする工法です（テキストp.41）。",
      expId: "Metode Wellpoint menyedot air tanah dengan pipa hisap dan pompa vakum untuk memungkinkan pekerjaan kering (dry work).",
      expNe: "जमिनमुनिको पानी तानेर खाल्डो सुक्खा बनाई सुरक्षित काम गर्न वेलपोइन्ट विधिको प्रयोग गरिन्छ।"
    },
    {
      id: 3,
      cat: "3.2.6 舗装工事 (p.42)",
      q: "<ruby>道路<rt>どうろ</rt></ruby>の **<ruby>舗装工事<rt>ほそうこうじ</rt></ruby>の<ruby>層<rt>そう</rt></ruby>（下から上への順番）**として、<ruby>正<rt>ただ</rt></ruby>しいものは どれですか。",
      options: [
        "【<ruby>路床<rt>ろしょう</rt></ruby>】 ➔ 【<ruby>路盤<rt>ろばん</rt></ruby>】 ➔ 【<ruby>基層<rt>きそう</rt></ruby>】 ➔ 【<ruby>表層<rt>ひょうそう</rt></ruby>】",
        "【<ruby>表層<rt>ひょうそう</rt></ruby>】 ➔ 【<ruby>基層<rt>きそう</rt></ruby>】 ➔ 【<ruby>路盤<rt>ろばん</rt></ruby>】 ➔ 【<ruby>路床<rt>ろしょう</rt></ruby>】",
        "【<ruby>路盤<rt>ろばん</rt></ruby>】 ➔ 【<ruby>路床<rt>ろしょう</rt></ruby>】 ➔ 【<ruby>表層<rt>ひょうそう</rt></ruby>】 ➔ 【<ruby>基層<rt>きそう</rt></ruby>】",
        "【<ruby>基層<rt>きそう</rt></ruby>】 ➔ 【<ruby>路床<rt>ろしょう</rt></ruby>】 ➔ 【<ruby>路盤<rt>ろばん</rt></ruby>】 ➔ 【<ruby>表層<rt>ひょうそう</rt></ruby>】"
      ],
      answer: 0,
      hintId: "Lapisan jalan dari paling bawah: Roshou (dasar tanah) -> Roban (batu pecah) -> Kisou (aspal dasar) -> Hyousou (aspal permukaan).",
      hintNe: "सडक कालोपत्रेको तह तलबाट माथि: रोसोउ (माटोको बेस) -> रोबान (गिटीको बेस) -> किसोउ (भित्री अस्फाल्ट) -> ह्योसोउ (सतहको अस्फाल्ट)।",
      expJa: "舗装道路は一番下の「路床」、砕石を敷く「路盤」、その上の「基層」、最後に滑りにくい「表層」の順に作られます（テキストp.42）。",
      expId: "Urutan struktur perkerasan jalan dari bawah: Lapisan Tanah Dasar (Roshou), Pondasi (Roban), Pengikat (Kisou), dan Permukaan (Hyousou).",
      expNe: "सडक निर्माणमा सबैभन्दा मुनि रोसोउ, त्यसपछि रोबान, किसोउ र सबैभन्दा माथि ह्योसोउको तह हुन्छ।"
    },
    {
      id: 4,
      cat: "3.2.8 杭工事 (p.43-44)",
      q: "<ruby>現場<rt>げんば</rt></ruby>で <ruby>穴<rt>あな</rt></ruby>を<ruby>掘<rt>ほ</rt></ruby>り、**<ruby>鉄筋<rt>てっきん</rt></ruby>かごを<ruby>入<rt>い</rt></ruby>れて<ruby>生<rt>なま</rt></ruby>コンクリートを<ruby>流<rt>なが</rt></ruby>し<ruby>込<rt>こ</rt></ruby>んで<ruby>作<rt>つく</rt></ruby>る杭**の<ruby>工法<rt>こうほう</rt></ruby>は どれですか。",
      options: [
        "<ruby>場所打<rt>ばしょう</rt></ruby>ちコンクリート<ruby>杭工法<rt>くいこうほう</rt></ruby>",
        "<ruby>既成杭工法<rt>きせいくいこうほう</rt></ruby>",
        "<ruby>木杭打<rt>きぐいう</rt></ruby>ち<ruby>工法<rt>こうほう</rt></ruby>",
        "シートパイル<ruby>工法<rt>こうほう</rt></ruby>"
      ],
      answer: 0,
      hintId: "Membuat tiang pancang langsung di lapangan dengan merakit keranjang besi beton dan cor semen basah disebut 'Basho-uchi Concrete Kui'.",
      hintNe: "कार्यस्थलमै खाल्डो खनेर रडको जाली हाली कंक्रिट ढलान गरेर बनाइने पिलरलाई 'बास्यो-उची कुइ' भनिन्छ।",
      expJa: "現場で穴を掘り、鉄筋のかごを入れ生コンを流し込んで作る杭を「場所打ち杭工法」と言います（テキストp.44）。",
      expId: "Metode pembuatan tiang cor di tempat (Bored Pile) disebut Basho-uchi Concrete Kui Kouhou.",
      expNe: "फ्याक्ट्रीबाट ल्याउने (किसेइ-कुइ) नभई फिल्डमै खाल्डो खनेर रड र कंक्रिटले बनाइने पिलरलाई बास्यो-उची कुइ भनिन्छ।"
    },
    {
      id: 5,
      cat: "3.2.9 とび工事 (p.44-45)",
      q: "「とび<ruby>職<rt>しょく</rt></ruby>」の **<ruby>種類<rt>しゅるい</rt></ruby>と<ruby>仕事内容<rt>しごとないよう</rt></ruby>**について、**<ruby>誤<rt>あやま</rt></ruby>っているもの**は どれですか。",
      options: [
        "<ruby>数百<rt>すうひゃく</rt></ruby>トンの<ruby>大型機械<rt>おおがたきかい</rt></ruby>や<ruby>設備<rt>せつび</rt></ruby>を<ruby>運<rt>はこ</rt></ruby>んで<ruby>据付<rt>すえつ</rt></ruby>ける<ruby>仕事<rt>しごと</rt></ruby>を「<ruby>町場<rt>まちば</rt></ruby>とび」という。",
        "<ruby>高所<rt>こうしょ</rt></ruby>で<ruby>塗装<rt>とそう</rt></ruby>や<ruby>作業<rt>さぎょう</rt></ruby>ができるように<ruby>足場<rt>あしば</rt></ruby>を<ruby>組<rt>く</rt></ruby>みたてる<ruby>仕事<rt>しごと</rt></ruby>を「<ruby>足場<rt>あしば</rt></ruby>とび」という。",
        "<ruby>高層<rt>こうそう</rt></ruby>ビルなどの<ruby>骨組<rt>ほねぐ</rt></ruby>みとなる<ruby>鉄骨<rt>てっこつ</rt></ruby>をクレーンで<ruby>吊<rt>つ</rt></ruby>り<ruby>上<rt>あ</rt></ruby>げてボルトで<ruby>締<rt>し</rt></ruby>める<ruby>仕事<rt>しごと</rt></ruby>を「<ruby>鉄骨<rt>てっこつ</rt></ruby>とび」という。",
        "<ruby>鉄塔<rt>てっとう</rt></ruby>の<ruby>送電線<rt>そうでんせん</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>いたり<ruby>高所<rt>こうしょ</rt></ruby>の<ruby>電気保守<rt>でんきほしゅ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>仕事<rt>しごと</rt></ruby>を「<ruby>送電<rt>そうでん</rt></ruby>とび」という。"
      ],
      answer: 0,
      hintId: "Memindahkan dan memasang mesin berat berbobot ratusan ton adalah tugas 'Juuryou-tobi' (Tobi Berat), bukan Machiba-tobi.",
      hintNe: "सयौं टनका भारी मेसिनहरू ओसारेर जडान गर्ने काम 'ज्युउर्यौ-तोबी' (हेभी तोबी) ले गर्छ, माचिबा-तोबीले होइन।",
      expJa: "数百トンの機械設備を運搬・据付するのは「重量とび」です。「町場とび」は地域の住宅やマンションの足場を組む仕事です（テキストp.44-45）。",
      expId: "Juuryou-tobi bertugas memasang mesin-mesin pabrik bermuatan ratusan ton. Machiba-tobi bertugas merakit perancah perumahan lokal.",
      expNe: "ठूला उपकरण र मेसिन जडान गर्नेलाई ज्युउर्यौ-तोबी र घर-अपार्टमेन्टको खट बाँध्नेलाई माचिबा-तोबी भनिन्छ।"
    },
    {
      id: 6,
      cat: "3.2.10 鉄骨工事 (p.45-46)",
      q: "<ruby>鉄骨工事<rt>てっこつこうじ</rt></ruby>における **「<ruby>重量鉄骨<rt>じゅうりょうてっこつ</rt></ruby>」と「<ruby>軽量鉄骨<rt>けいりょうてっこつ</rt></ruby>」の <ruby>分<rt>わ</rt></ruby>け<ruby>目<rt>め</rt></ruby>（<ruby>厚<rt>あつ</rt></ruby>さ）**は どれですか。",
      options: [
        "<ruby>厚<rt>あつ</rt></ruby>さ **6mm**（6mm<ruby>未満<rt>みまん</rt></ruby>が<ruby>軽量<rt>けいりょう</rt></ruby>、6mm<ruby>以上<rt>いじょう</rt></ruby>が<ruby>重量<rt>じゅうりょう</rt></ruby>）",
        "<ruby>厚<rt>あつ</rt></ruby>さ **2mm**（2mm<ruby>未満<rt>みまん</rt></ruby>が<ruby>軽量<rt>けいりょう</rt></ruby>、2mm<ruby>以上<rt>いじょう</rt></ruby>が<ruby>重量<rt>じゅうりょう</rt></ruby>）",
        "<ruby>厚<rt>あつ</rt></ruby>さ **15mm**（15mm<ruby>未満<rt>みまん</rt></ruby>が<ruby>軽量<rt>けいりょう</rt></ruby>、15mm<ruby>以上<rt>いじょう</rt></ruby>が<ruby>重量<rt>じゅうりょう</rt></ruby>）",
        "<ruby>厚<rt>あつ</rt></ruby>さ **30mm**（30mm<ruby>未満<rt>みまん</rt></ruby>が<ruby>軽量<rt>けいりょう</rt></ruby>、30mm<ruby>以上<rt>いじょう</rt></ruby>が<ruby>重量<rt>じゅうりょう</rt></ruby>）"
      ],
      answer: 0,
      hintId: "Batas pemisah baja ringan (Keiryou) dan baja berat (Juuryou) adalah ketebalan 6 mm.",
      hintNe: "हलुका स्टिल (केइर्यौ) र भारी स्टिल (ज्युउर्यौ) छुट्याउने मोटाइ ६ मिमी हो।",
      expJa: "鉄材の厚さが6mm未満を「軽量鉄骨」、6mm以上を「重量鉄骨」と分類します（テキストp.45）。",
      expId: "Baja dengan ketebalan di bawah 6mm diklasifikasikan sebagai baja ringan, dan 6mm ke atas adalah baja berat.",
      expNe: "६ मिमीभन्दा पातलो स्टिललाई केइर्यौ र ६ मिमी वा सोभन्दा बाक्लो स्टिललाई ज्युउर्यौ तेक्कोचु भनिन्छ।"
    },
    {
      id: 7,
      cat: "3.2.12 鉄筋継手工事 (p.47)",
      q: "<ruby>鉄筋<rt>てっきん</rt></ruby>をつなぐ「<ruby>継手<rt>つぎて</rt></ruby>」のなかで、**<ruby>酸素<rt>さんそ</rt></ruby>とアセチレンガスなどの<ruby>炎<rt>ほのお</rt></ruby>で<ruby>加熱<rt>かねつ</rt></ruby>し、<ruby>軸方向<rt>じくほうこう</rt></ruby>に<ruby>圧力<rt>あつりょく</rt></ruby>をかけて<ruby>接合<rt>せつごう</rt></ruby>する<ruby>最<rt>もっと</rt></ruby>も<ruby>一般的<rt>いっぱんてき</rt></ruby>な<ruby>工法<rt>こうほう</rt></ruby>**は どれですか。",
      options: [
        "ガス<ruby>圧接継手<rt>あっせつつぎて</rt></ruby>",
        "<ruby>機械式継手<rt>きかいしきつぎて</rt></ruby>（カプラー）",
        "<ruby>溶接継手<rt>ようせつつぎて</rt></ruby>（アーク<ruby>溶接<rt>ようせつ</rt></ruby>）",
        "<ruby>接着剤継手<rt>せっちゃくざいつぎて</rt></ruby>"
      ],
      answer: 0,
      hintId: "Metode menyambung besi beton dengan memanaskan ujungnya pakai gas asetilen lalu ditekan kuat secara aksial disebut Gas Assetsu.",
      hintNe: "अक्सिजन-एसिटिलिन ग्यासको आगोले रडको मुख तताएर दुवैतिरबाट च्यापेर जोड्ने विधिलाई 'ग्यास आस्सेचु' भनिन्छ।",
      expJa: "鉄筋の端部を加熱しながら軸方向に圧力をかけて接合する工法を「ガス圧接継手」と言い、現場で最も多用されます（テキストp.47）。",
      expId: "Gas Assetsu Tsugite adalah metode penyambungan besi beton terpopuler dengan pemanasan api gas dan tekanan aksial hidrolik.",
      expNe: "रडलाई तातो बनाएर प्रेसर दिई जोड्ने विधिलाई ग्यास आस्सेचु भनिन्छ र यो जापानमा सबैभन्दा धेरै प्रयोग हुन्छ।"
    },
    {
      id: 8,
      cat: "3.2.14 型枠工事 (p.49)",
      q: "<ruby>型枠工事<rt>かたわくこうじ</rt></ruby>において、**コンクリートを<ruby>流<rt>なが</rt></ruby>し<ruby>込<rt>こ</rt></ruby>んだときの<ruby>内側<rt>うちがわ</rt></ruby>からの<ruby>大<rt>おお</rt></ruby>きな<ruby>圧力<rt>あつりょく</rt></ruby>で<ruby>型枠<rt>かたわく</rt></ruby>が<ruby>壊<rt>こわ</rt></ruby>れないようにする<ruby>補強<rt>ほきょう</rt></ruby>**を <ruby>何<rt>なん</rt></ruby>といいますか。",
      options: [
        "<ruby>支保工<rt>しほこう</rt></ruby>（<ruby>型枠支保工<rt>かたわくしほこう</rt></ruby>）",
        "<ruby>墨出<rt>すみだ</rt></ruby>し",
        "<ruby>地中梁<rt>ちちゅうばり</rt></ruby>",
        "<ruby>埋<rt>う</rt></ruby>め<ruby>戻<rt>もど</rt></ruby>し"
      ],
      answer: 0,
      hintId: "Memperkuat cetakan beton (katawaku) dari luar menggunakan pipa besi agar tidak jebol saat dicor disebut Shihokou.",
      hintNe: "कंक्रिट हाल्दा फर्मा नफुटोस् भनेर बाहिरबाट फलामे पाइपले बलियो गरी अड्याउने संरचनालाई 'सिहोकोउ' भनिन्छ।",
      expJa: "生コンの側圧に耐えるため、型枠の外側を鉄製パイプ等でしっかりと支えて補強することを「支保工」と言います（テキストp.49）。",
      expId: "Shihokou adalah sistem perancah penyangga pipa baja untuk menahan tekanan lateral adukan beton cair agar cetakan tidak pecah.",
      expNe: "ढलान गर्दा फर्मा बाहिर नधकेलियोस् भनी फलामे पाइपले थाम्ने कामलाई सिहोकोउ भनिन्छ।"
    },
    {
      id: 9,
      cat: "3.2.15 コンクリート圧送工事 (p.50)",
      q: "コンクリートを <ruby>打<rt>う</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>むとき、**<ruby>強度<rt>きょうど</rt></ruby>の<ruby>低下<rt>ていか</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぎ、<ruby>中<rt>なか</rt></ruby>の<ruby>不要<rt>ふよう</rt></ruby>な<ruby>空気<rt>くうき</rt></ruby>の<ruby>泡<rt>あわ</rt></ruby>を<ruby>抜<rt>ぬ</rt></ruby>くために<ruby>使<rt>つか</rt></ruby>う<ruby>器具<rt>きぐ</rt></ruby>**は どれですか。",
      options: [
        "バイブレータ（<ruby>振動機<rt>しんどうき</rt></ruby>）",
        "<ruby>扇風機<rt>せんぷうき</rt></ruby>",
        "エアーコンプレッサ",
        "<ruby>電気<rt>でんき</rt></ruby>ドリル"
      ],
      answer: 0,
      hintId: "Alat penggetar (Vibrator) digunakan saat pengecoran untuk memadatkan beton dan membuang gelembung udara.",
      hintNe: "ढलान गर्दा कंक्रिटभित्र हावाको फोका रहन नदिन र राम्रोसँग भर्न 'भाइब्रेटर' प्रयोग गरिन्छ।",
      expJa: "コンクリート打設時はバイブレータで振動を与え、気泡を除去して型枠の隅々まで行きわたらせます（テキストp.50）。",
      expId: "Vibrator beton digunakan untuk memadatkan campuran beton segar dan menghilangkan rongga udara agar mutu beton maksimal.",
      expNe: "कंक्रिट खाँद्न र भित्रका हावाका फोका हटाएर बलियो बनाउन भाइब्रेटरको प्रयोग अनिवार्य हुन्छ।"
    },
    {
      id: 10,
      cat: "3.2.21 建築板金工事 (p.55)",
      q: "「<ruby>建築板金工事<rt>けんちくばんきんこうじ</rt></ruby>」の **<ruby>主<rt>おも</rt></ruby>な<ruby>仕事内容<rt>しごとないよう</rt></ruby>**として、**<ruby>正<rt>ただ</rt></ruby>しいもの**は どれですか。",
      options: [
        "<ruby>薄<rt>うす</rt></ruby>い<ruby>金属板<rt>きんぞくばん</rt></ruby>を<ruby>切断<rt>せつだん</rt></ruby>・<ruby>折<rt>お</rt></ruby>り<ruby>曲<rt>ま</rt></ruby>げ<ruby>加工<rt>かこう</rt></ruby>して、<ruby>金属製屋根<rt>きんぞくせいやね</rt></ruby>や<ruby>外壁<rt>がいへき</rt></ruby>、<ruby>雨水<rt>あまみず</rt></ruby>を<ruby>流<rt>なが</rt></ruby>す「<ruby>雨仕舞<rt>あまじまい</rt></ruby>」の<ruby>金物<rt>かなもの</rt></ruby>、<ruby>空気<rt>くうき</rt></ruby>を<ruby>送<rt>おく</rt></ruby>る「ダクト」などを<ruby>作<rt>つく</rt></ruby>り<ruby>取<rt>と</rt></ruby>り<ruby>付<rt>つ</rt></ruby>ける。",
        "<ruby>木<rt>き</rt></ruby>をカンナで<ruby>削<rt>けず</rt></ruby>って、<ruby>和室<rt>わしつ</rt></ruby>の<ruby>障子<rt>しょうじ</rt></ruby>やフスマの<ruby>木製建具<rt>もくせいたてぐ</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る。",
        "<ruby>壁<rt>かべ</rt></ruby>に「こて」を<ruby>使<rt>つか</rt></ruby>って<ruby>漆喰<rt>しっくい</rt></ruby>やモルタルを<ruby>塗<rt>ぬ</rt></ruby>り<ruby>重<rt>かさ</rt></ruby>ねる。",
        "<ruby>世界<rt>せかい</rt></ruby><ruby>各地<rt>かくち</rt></ruby>から<ruby>集<rt>あつ</rt></ruby>めた<ruby>大理石<rt>だいりせき</rt></ruby>などの<ruby>天然石<rt>てんねんせき</rt></ruby>を<ruby>磨<rt>みが</rt></ruby>いて<ruby>床<rt>ゆか</rt></ruby>に<ruby>並<rt>なら</rt></ruby>べる。"
      ],
      answer: 0,
      hintId: "Kenchiku Bankin memproses plat logam tipis (pemotongan & penekukan) untuk atap logam, talang/flashing (amajimai), dan pipa saluran udara (ducting).",
      hintNe: "केन्चिकु बान्किनले पातलो पातालाई काटेर, दोबारेर धातुको छाना, पानी तर्काउने सामान (अमाजिमाइ) र डक्ट बनाउँछ।",
      expJa: "建築板金は薄い金属板を加工し、金属屋根、雨水を処理する雨仕舞金物、換気や排煙のためのダクト等の製作取付を行います（テキストp.55）。",
      expId: "Pekerjaan plat logam arsitektural (Kenchiku Bankin) mencakup fabrikasi dan pemasangan atap metal, flashing anti-bocor (amajimai), dan saluran udara (ducting).",
      expNe: "पाताको छाना हाल्ने, पानी चुहिन नदिने धातुका सामान बनाउने र हावाको डक्ट जडान गर्ने काम बान्किनको हो।"
    }
  ]
};
