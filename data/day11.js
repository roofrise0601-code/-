const CURRENT_QUIZ_DATA = {
  title: "Day 11：<ruby>納<rt>おさ</rt></ruby>まり・<ruby>寸法<rt>すんぽう</rt></ruby>・<ruby>構造用語<rt>こうぞうようご</rt></ruby>（テキスト P.88〜91）",
  key: "score_gakka2_11",
  passScore: 70,
  questions: [
    {
      cat: "第4章 納まり用語（P.88）",
      q: "2つの<ruby>部材<rt>ぶざい</rt></ruby>が<ruby>接<rt>せっ</rt></ruby>する<ruby>部分<rt>ぶぶん</rt></ruby>において、**<ruby>一方<rt>いっぽう</rt></ruby>の<ruby>面<rt>めん</rt></ruby>がもう<ruby>一方<rt>いっぽう</rt></ruby>の<ruby>面<rt>めん</rt></ruby>よりも少し<ruby>出<rt>で</rt></ruby>っ<ruby>張<rt>ぱ</rt></ruby>っている「段差（すきまの寸法）」**を現場で何と呼びますか。",
      q_id: "Apa sebutan di lapangan untuk selisih ketinggian (tingkat celah/tonjolan) di mana satu permukaan komponen sedikit menonjol dari permukaan lainnya?",
      q_ne: "दुईवटा सामान जोडिँदा एउटा सामान अर्कोभन्दा थोरै बाहिर निस्किएको वा अग्लो भएको खाडल/तह (स्टेप) लाई के भनिन्छ?",
      options: [
        { ja: "チリ（ちり）", id: "Chiri (Selisih offset permukaan)", ne: "चिरी (तहको भिन्नता / स्टेप)" },
        { ja: "ツラ（面）", id: "Tsura (Permukaan rata / sejajar)", ne: "चुरा (बराबर समतल सतह)" },
        { ja: "ネコ", id: "Neko (Gerobak dorong / pengganjal)", ne: "नेको (ठेलागाडा / कुशन)" },
        { ja: "バタ（バタ角）", id: "Bata (Balok kayu pengaku)", ne: "बाता (काठको बलियो काठ)" }
      ],
      answer: 0,
      expJa: "【テキスト P.88参照】壁面と柱、枠などの段差寸法を「チリ」と呼びます（例：「チリを5ミリ取る」）。段差がなく平らな状態は「ツラ（面）」と呼びます。",
      expId: "Chiri adalah jarak offset/tonjolan antar dua permukaan yang bertemu. Jika rata sejajar disebut 'Tsura'.",
      expNe: "'चिरी' दुई सतहहरू जोडिँदा एउटा थोरै बाहिर निस्केर बन्ने तह (स्टेप) हो। सतह ठ्याक्कै बराबर हुनुलाई 'चुरा' भनिन्छ।"
    },
    {
      cat: "第4章 納まり用語（P.88）",
      q: "2つの<ruby>材料<rt>ざいりょう</rt></ruby>の<ruby>表面<rt>ひょうめん</rt></ruby>が、**<ruby>段差<rt>だんさ</rt></ruby>がなく<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>同<rt>おな</rt></ruby>じ<ruby>平面<rt>へいめん</rt></ruby>（フラット）に<ruby>揃<rt>そろ</rt></ruby>っている状態**を何と呼びますか。",
      q_id: "Apa sebutan untuk kondisi di mana permukaan dua material berada pada bidang datar yang sama persis tanpa ada selisih tangga?",
      q_ne: "दुईवटा सामग्रीको सतहहरूमा कुनै तह नभई पूर्ण रूपमा एउटै समतल (फ्ल्याट) भएको अवस्थालाई के भनिन्छ?",
      options: [
        { ja: "ツラ（面一：ツライチ）", id: "Tsura-ichi (Rata bidang / sejajar presisi)", ne: "चुरा-इची (ठ्याक्कै बराबर समतल)" },
        { ja: "チリ（ちり）", id: "Chiri", ne: "चिरी" },
        { ja: "アゴ", id: "Ago (Bagian bibir bawah yang menonjol)", ne: "आगो" },
        { ja: "ミキリ（見切り）", id: "Mikiri (Garis batas akhir)", ne: "मिकिरी" }
      ],
      answer: 0,
      expJa: "【テキスト P.88参照】段差がなく平らに揃うことを「面（ツラ）」、完全に同一平面に合わせることを現場で「ツライチ（面一）」と呼びます。",
      expId: "Tsura-ichi (面一) berarti dua permukaan terpasang rata sempurna dalam satu bidang tanpa ada tonjolan.",
      expNe: "'चुरा-इची' भन्नाले दुई फरक सामानको सतहलाई अलिकति पनि तल-माथि नपारी ठ्याक्कै बराबर समतल बनाउनुलाई बुझिन्छ।"
    },
    {
      cat: "第4章 加工用語（P.89）",
      q: "<ruby>角材<rt>かくざい</rt></ruby>や<ruby>板<rt>いた</rt></ruby>、コンクリートなどの**<ruby>鋭利<rt>えいり</rt></ruby>な<ruby>角<rt>かど</rt></ruby>（<ruby>直角<rt>ちょっかく</rt></ruby>の<ruby>角部<rt>かどぶ</rt></ruby>）を<ruby>斜<rt>なな</rt></ruby>めに<ruby>削<rt>けず</rt></ruby>り<ruby>落<rt>お</rt></ruby>として<ruby>安全<rt>あんぜん</rt></ruby>や<ruby>美観<rt>びかん</rt></ruby>を<ruby>保<rt>たも</rt></ruby>つ<ruby>加工<rt>かこう</rt></ruby>**を何と呼びますか。",
      q_id: "Apa nama pemrosesan meratakan atau memotong miring sudut tajam (90 derajat) dari kayu, logam, atau beton demi keselamatan dan keindahan?",
      q_ne: "काठ, धातु वा कंक्रीटको तीखो ९० डिग्रीको कुनालाई सुरक्षा र सुन्दरताका लागि छड्के ताछेर काट्ने कामलाई के भनिन्छ?",
      options: [
        { ja: "面取り（めんとり）", id: "Mentori (Chamfering / pembulatan sudut)", ne: "मेन्तोरी (कुना ताछेर चिल्लो बनाउने)" },
        { ja: "相欠き（あいかき）", id: "Aikaki (Sambungan ceruk setengah)", ne: "आइकाकी" },
        { ja: "留め（とめ）", id: "Tome (Sambungan sudut mitre 45 derajat)", ne: "तोमे (४५ डिग्री जोड)" },
        { ja: "ほぞ取り", id: "Pembuatan purus kayu (Tenon)", ne: "होजो बनाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.89参照】部材の角の欠けを防ぎ、人が触れて怪我をしないように斜めに削ることを「面取り（めんとり）」と呼びます。",
      expId: "Mentori adalah memotong miring sudut tajam (chamfering) agar tidak mudah sompel dan aman saat disentuh orang.",
      expNe: "'मेन्तोरी' भन्नाले कुना भाँचिनबाट जोगाउन र मानिसलाई चोट नलागोस् भनेर धारिलो कुना छड्के पारेर ताछ्नु हो।"
    },
    {
      cat: "第4章 直角・角度用語（P.89）",
      q: "<ruby>現場<rt>げんば</rt></ruby>で「**<ruby>直角<rt>ちょっかく</rt></ruby>（90度）**」のことを<ruby>職人<rt>しょくにん</rt></ruby>言葉で何と呼びますか。※<ruby>直角<rt>ちょっかく</rt></ruby>を<ruby>出<rt>だ</rt></ruby>すことを「〇〇を出す」と言います。",
      q_id: "Apa istilah bahasa lapangan yang digunakan oleh para tukang untuk menyebut sudut siku-siku (90 derajat)?",
      q_ne: "कार्यस्थलमा कामदारहरूले ९० डिग्रीको 'समकोण (राइट एंगल)' लाई कुन शब्दले बोलाउँछन्?",
      options: [
        { ja: "カネ（かね／矩）", id: "Kane (Sudut siku-siku 90 derajat)", ne: "काने (९० डिग्रीको समकोण)" },
        { ja: "ロク（陸）", id: "Roku (Tingkat horizontal/datar)", ne: "रोकु (तेर्सो समतल)" },
        { ja: "タチ（建ち）", id: "Tachi (Tegak lurus vertikal)", ne: "ताची (ठाडो लम्ब)" },
        { ja: "トメ（留め）", id: "Tome (Sudut 45 derajat)", ne: "तोमे (४५ डिग्री)" }
      ],
      answer: 0,
      expJa: "【テキスト P.89参照】建築現場では直角（90°）を「カネ（矩）」と呼びます。直角を確認する定規を「指矩（さしがね）」、直角を合わせることを「カネを出す」「大矩（おおがね）を振る」と言います。",
      expId: "Di lapangan konstruksi Jepang, sudut siku-siku (90°) disebut 'Kane'. Penggaris siku disebut Sashigane.",
      expNe: "जापानी निर्माण कार्यस्थलमा ९० डिग्रीको समकोणलाई 'काने' भनिन्छ, र कुना मिलाउने स्केललाई 'साशिगाने' भनिन्छ।"
    },
    {
      cat: "第4章 垂直用語（P.89）",
      q: "<ruby>柱<rt>はしら</rt></ruby>や<ruby>壁<rt>かべ</rt></ruby>が「**<ruby>地面<rt>じめん</rt></ruby>に<ruby>対<rt>たい</rt></ruby>してまっすぐ<ruby>垂直<rt>すいちょく</rt></ruby>に<ruby>立<rt>た</rt></ruby>っていること**」を現場で何と呼びますか。",
      q_id: "Apa sebutan di lapangan untuk tiang atau dinding yang berdiri tegak lurus sempurna secara vertikal terhadap tanah?",
      q_ne: "पिलर वा पर्खाल जमिनसँग ठ्याक्कै सीधा ९० डिग्रीको 'ठाडो (भर्टिकल)' अवस्थामा उभिनुलाई के भनिन्छ?",
      options: [
        { ja: "タチ（建ち・立ち）", id: "Tachi (Ketegakan vertikal)", ne: "ताची (ठाडो लम्ब अवस्था)" },
        { ja: "ロク（陸）", id: "Roku (Horizontal)", ne: "रोकु (तेर्सो)" },
        { ja: "カネ（矩）", id: "Kane (Sudut siku)", ne: "काने" },
        { ja: "通り（とおり）", id: "Toori (Garis kelurusan)", ne: "तोओरी" }
      ],
      answer: 0,
      expJa: "【テキスト P.89参照】垂直の精度を「タチ（立ち）」と呼びます。「タチを見る」「タチを直す」と言い、下げ振り（さげぶり）やレーザーで垂直を測定します。",
      expId: "Tachi menunjukkan ketegakan lurus secara vertikal. Mengukur ketegakan vertikal disebut 'Tachi wo miru'.",
      expNe: "'ताची' भन्नाले ठाडो (भर्टिकल) सीधापनलाई बुझाउँछ। साहुल (सागेबुरी) ले ठाडो सीधापन जाँच्नलाई 'ताची ओ मिरु' भनिन्छ।"
    },
    {
      cat: "第4章 寸法用語（P.90）",
      q: "<ruby>日本<rt>にほん</rt></ruby>の<ruby>建築現場<rt>けんせつげんば</rt></ruby>でよく使われる「<ruby>尺貫法<rt>しゃっかんほう</rt></ruby>」において、**「1<ruby>尺<rt>しゃく</rt></ruby>」はおよそ何ミリ（何cm）**ですか。",
      q_id: "Dalam sistem satuan tradisional Jepang (Shakkan-hou) yang masih sering dipakai di konstruksi, kira-kira berapa milimeter (cm) ukuran '1 Shaku'?",
      q_ne: "जापानी निर्माण कार्यस्थलमा अझै प्रयोग हुने परम्परागत नाप प्रणालीमा '१ शाकु' भन्नाले करिब कति मिलिमिटर (सेन्टिमिटर) हुन्छ?",
      options: [
        { ja: "約303mm（約30.3cm）", id: "Sekitar 303 mm (30,3 cm)", ne: "करिब ३०३ मिमि (करिब ३०.३ सेमि)" },
        { ja: "約100mm（約10cm）", id: "Sekitar 100 mm (10 cm)", ne: "करिब १०० मिमि" },
        { ja: "約500mm（約50cm）", id: "Sekitar 500 mm (50 cm)", ne: "करिब ५०० मिमि" },
        { ja: "約1,000mm（約1m）", id: "Sekitar 1.000 mm (1 m)", ne: "करिब १००० मिमि" }
      ],
      answer: 0,
      expJa: "【テキスト P.90参照】1尺＝約303mm（10寸）、1間（けん）＝6尺（約1,818mm）です。図面がミリ表記であっても現場の職人は「1尺」「3尺（約910mm）」という言葉を日常的に使います。",
      expId: "1 Shaku adalah sekitar 303 mm (1 kaki Jepang). 1 Ken = 6 Shaku (sekitar 1.818 mm).",
      expNe: "१ शाकु = करिब ३०३ मिलिमिटर (३०.३ सेमि) हुन्छ। कार्यस्थलमा कामदारहरूले यो नाप धेरै प्रयोग गर्छन्।"
    },
    {
      cat: "第4章 材料寸法用語（P.90）",
      q: "<ruby>合板<rt>ごうはん</rt></ruby>や<ruby>石膏<rt>せっこう</rt></ruby>ボードなどの<ruby>規格寸法<rt>きかくすんぽう</rt></ruby>で、「**<ruby>幅<rt>はば</rt></ruby>3<ruby>尺<rt>しゃく</rt></ruby> × <ruby>長<rt>なが</rt></ruby>さ6<ruby>尺<rt>しゃく</rt></ruby>（<ruby>約<rt>やく</rt></ruby>910mm × <ruby>約<rt>やく</rt></ruby>1,820mm）**」の<ruby>板材<rt>いたざい</rt></ruby>を現場で何と呼びますか。",
      q_id: "Apa sebutan lapangan untuk papan triplek / papan gipsum standar yang berukuran lebar 3 shaku x panjang 6 shaku (sekitar 910 mm x 1.820 mm)?",
      q_ne: "३ शाकु चौडाइ × ६ शाकु लम्बाइ (करिब ९१० मिमि × १८२० मिमि) भएको स्ट्यान्डर्ड प्लाई वा जिप्सम बोर्डलाई के भनिन्छ?",
      options: [
        { ja: "サブロク（3×6板）", id: "Saburoku (Papan 3x6)", ne: "साबुरोकु (३×६ को बोर्ड)" },
        { ja: "シハチ（4×8板）", id: "Shihachi (Papan 4x8)", ne: "शिहाची (४×८ को बोर्ड)" },
        { ja: "ニロク（2×6板）", id: "Niroku (Papan 2x6)", ne: "निरोकु" },
        { ja: "メーター判", id: "Papan ukuran meteran", ne: "मिटर साइजको बोर्ड" }
      ],
      answer: 0,
      expJa: "【テキスト P.90参照】3尺×6尺の規格寸法を「サブロク板（ば plasterboard等）」と呼びます。4尺×8尺（約1,210×2,420mm）は「シハチ」と呼びます。",
      expId: "Ukuran standar 3 shaku x 6 shaku disebut 'Saburoku'. Ini adalah ukuran panel paling standar di Jepang.",
      expNe: "३×६ शाकुको बोर्डलाई 'साबुरोकु' भनिन्छ। यो जापानी निर्माणमा सबैभन्दा बढी प्रयोग हुने साइज हो।"
    },
    {
      cat: "第4章 構造用語（P.91）",
      q: "<ruby>柱<rt>はしら</rt></ruby>と<ruby>梁<rt>はり</rt></ruby>の<ruby>接合部<rt>せつごうぶ</rt></ruby>を<ruby>強固<rt>きょうこ</rt></ruby>に<ruby>固定<rt>こてい</rt></ruby>（<ruby>剛接合<rt>ごうせつごう</rt></ruby>）し、**<ruby>筋<rt>すじ</rt></ruby>かいや<ruby>耐震壁<rt>たいしんかべ</rt></ruby>がなくても<ruby>地震<rt>じしん</rt></ruby>や<ruby>風<rt>かぜ</rt></ruby>に<ruby>耐<rt>た</rt></ruby>えられるようにした<ruby>骨組構造<rt>ほねぐみこうぞう</rt></ruby>**を何と呼びますか。",
      q_id: "Apa sebutan untuk struktur rangka kaku di mana sambungan kolom dan balok disambung secara rigid (mati) sehingga tahan gempa dan angin tanpa perlu bracing/dinding geser?",
      q_ne: "पिलर र बिमको जोर्नीलाई अत्यन्त कडासँग जोडेर क्रस टेको बिना पनि भूकम्प र हावाहुरी थेग्न सक्ने बनाइएको फ्रेम संरचनालाई के भनिन्छ?",
      options: [
        { ja: "ラーメン構造", id: "Struktur Rahmen (Rigid frame)", ne: "रामेन संरचना (कडा फ्रेम संरचना)" },
        { ja: "ブレース構造", id: "Struktur Bracing (Rangka silang)", ne: "ब्रेस संरचना" },
        { ja: "トラス構造", id: "Struktur Truss (Rangka segitiga)", ne: "ट्रस संरचना (त्रिकोण फ्रेम)" },
        { ja: "組積造（そくせきぞう）", id: "Struktur pasangan bata / batu", ne: "इँटा-ढुङ्गा संरचना" }
      ],
      answer: 0,
      expJa: "【テキスト P.91参照】ドイツ語で「枠」を意味するRahmenに由来し、柱と梁を剛接合した骨組みを「ラーメン構造」と呼びます。鉄骨造やRC造で最も広く採用されます。",
      expId: "Struktur Rahmen (ラーメン構造) adalah struktur rangka kaku yang memberi kebebasan ruang karena tidak terhalang dinding geser.",
      expNe: "'रामेन संरचना' पिलर र बिमलाई कडा रूपमा जोडेर ठूला कोठाहरू बनाउन प्रयोग गरिने फ्रेम संरचना हो।"
    },
    {
      cat: "第4章 構造用語（P.91）",
      q: "<ruby>三角形<rt>さんかくけい</rt></ruby>を<ruby>基本単位<rt>きほんたんい</rt></ruby>として<ruby>部材<rt>ぶざい</rt></ruby>を<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせ、**<ruby>大<rt>おお</rt></ruby>きな<ruby>体育館<rt>たいいくかん</rt></ruby>や<ruby>橋<rt>はし</rt></ruby>、<ruby>大屋根<rt>おおやね</rt></ruby>などの<ruby>広<rt>ひろ</rt></ruby>い<ruby>空間<rt>くうかん</rt></ruby>（<ruby>大スパン<rt>だいすぱん</rt></ruby>）**を<ruby>柱<rt>はしら</rt></ruby>なしで<ruby>架<rt>か</rt></ruby>け<ruby>渡<rt>わた</rt></ruby>す<ruby>構造<rt>こうぞう</rt></ruby>はどれですか。",
      q_id: "Struktur apa yang merangkai komponen berbentuk segitiga untuk menopang bentang lebar tanpa kolom, seperti pada gimnasium, jembatan, dan atap kubah besar?",
      q_ne: "त्रिकोण आकारका फ्रेमहरू जोडेर पिलर बिना नै ठूला रंगशाला, पुल र ठूला छानाहरू धान्न बनाइने संरचना कुन हो?",
      options: [
        { ja: "トラス構造", id: "Struktur Truss (Rangka segitiga)", ne: "ट्रस संरचना (त्रिकोणात्मक फ्रेम)" },
        { ja: "アーチ構造", id: "Struktur Arch (Lengkung)", ne: "आर्च संरचना (घुमाउरो)" },
        { ja: "ラーメン構造", id: "Struktur Rahmen", ne: "रामेन संरचना" },
        { ja: "壁式構造", id: "Struktur Dinding Geser", ne: "पर्खाल संरचना" }
      ],
      answer: 0,
      expJa: "【テキスト P.91参照】部材の節点をピン接合とし三角形に組む構造を「トラス構造」と呼びます。部材に曲げモーメントが発生せず引張力と圧縮力のみで支えるため大空間に適しています。",
      expId: "Struktur Truss tersusun dari segitiga kaku yang sangat kuat dan ringan untuk menutupi bentang ruang yang sangat luas tanpa tiang tengah.",
      expNe: "'ट्रस संरचना' त्रिकोण आकारको फ्रेम हो जसले बीचमा पिलर नराखी ठूला हल र छानाहरू धान्न सक्छ।"
    },
    {
      cat: "第4章 構造用語（P.91）",
      q: "<ruby>柱<rt>はしら</rt></ruby>や<ruby>梁<rt>はり</rt></ruby>の<ruby>四角形<rt>しかくけい</rt></ruby>のフレームの<ruby>対角線<rt>たいかくせん</rt></ruby>に「**すじかい（<ruby>斜<rt>なな</rt></ruby>めの<ruby>部材<rt>ぶざい</rt></ruby>）**」を入れ、<ruby>横揺<rt>よこゆ</rt></ruby>れの力に<ruby>対抗<rt>たいこう</rt></ruby>させる構造を何と呼びますか。",
      q_id: "Apa nama struktur yang memasang batang diagonal (bracing / sujikain) pada rangka segi empat kolom dan balok untuk menahan gaya guncangan horizontal?",
      q_ne: "चारपाटे पिलर र बिमको फ्रेमभित्र छड्के टेको (सुजिकाई / ब्रेस) हालेर तेर्सो भूकम्पको कम्पन रोक्ने संरचनालाई के भनिन्छ?",
      options: [
        { ja: "ブレース構造（筋かい構造）", id: "Struktur Bracing (Sujikai)", ne: "ब्रेस संरचना (सुजिकाई संरचना)" },
        { ja: "ラーメン構造", id: "Struktur Rahmen", ne: "रामेन संरचना" },
        { ja: "吊り構造", id: "Struktur Gantung (Suspension)", ne: "झोलुङ्गे संरचना" },
        { ja: "シェル構造", id: "Struktur Cangkang (Shell)", ne: "शेल संरचना" }
      ],
      answer: 0,
      expJa: "【テキスト P.91参照】木造の筋かいや鉄骨造のブレースなど、斜め材によって水平力（地震や台風）に抵抗させる構造を「ブレース構造」と呼びます。",
      expId: "Struktur Bracing memasang batang diagonal untuk mencegah rangka persegi empat berubah bentuk saat terkena guncangan lateral.",
      expNe: "'ब्रेस संरचना' ले छड्के टेको (सुजिकाई) को मद्दतले भूकम्प वा हावाले भवनलाई दायाँ-बायाँ ढल्किन दिँदैन।"
    }
  ]
};
