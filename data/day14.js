const CURRENT_QUIZ_DATA = {
  title: "Day 14：<ruby>第2週<rt>だいにしゅう</rt></ruby> <ruby>総復習模擬試験<rt>そうふくしゅうもぎしけん</rt></ruby>（実務用語・マナー総まとめ）",
  key: "score_gakka2_14",
  passScore: 70,
  questions: [
    {
      cat: "Day 8 復習：挨拶マナー（P.78〜80）",
      q: "<ruby>元請<rt>もとうけ</rt></ruby>の<ruby>現場監督<rt>げんばかんとく</rt></ruby>や<ruby>設計監理者<rt>せっけいかんりしゃ</rt></ruby>など、**<ruby>目上<rt>めうえ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<ruby>使<rt>つか</rt></ruby>うと<ruby>失礼<rt>しつれい</rt></ruby>になるため<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>避<rt>さ</rt></ruby>けるべき言葉**はどれですか。",
      q_id: "Manakah ucapan yang dianggap TIDAK SOPAN dan harus dihindari jika diucapkan kepada atasan, kepala proyek, atau perwakilan kontraktor utama?",
      q_ne: "आफूभन्दा सिनियर व्यक्ति, साइट सुपरभाइजर वा मुख्य ठेकेदारलाई भन्दा अपमानजनक मानिने र कहिल्यै भन्न नहुने शब्द कुन हो?",
      options: [
        { ja: "ご苦労様でした（ごくろうさまでした）", id: "Gokurousama deshita (Hanya untuk bawahan)", ne: "गोकुरौसामा देशिता (माथिल्लो व्यक्तिले तल्लोलाई मात्र भन्ने)" },
        { ja: "お疲れ様でした（おつかれさまでした）", id: "Otsukaresama deshita", ne: "ओचुकारेसामा देशिता" },
        { ja: "ご安全に！（ごあんぜんに）", id: "Go-anzen ni!", ne: "गो-आन्जेन नि!" },
        { ja: "失礼いたします（しつれいいたします）", id: "Shitsurei itashimasu", ne: "शित्सुरेइ इताशिमासु" }
      ],
      answer: 0,
      expJa: "【テキスト P.79参照】「ご苦労様」は目上の人が部下や目下の人に対して使うねぎらいの言葉です。目上の人や元請監督に対しては必ず「お疲れ様です」を使います。",
      expId: "'Gokurousama' hanya diucapkan oleh atasan kepada bawahan. Kepada atasan/mandor utama selalu gunakan 'Otsukaresama'.",
      expNe: "'गोकुरौसामा' माथिल्लो पदकाले तल्लोलाई भन्ने शब्द हो। सिनियर वा हाकिमलाई सधैं 'ओचुकारेसामा' भन्नुपर्छ।"
    },
    {
      cat: "Day 8 復習：墨出し用語（P.80〜82）",
      q: "<ruby>壁<rt>かべ</rt></ruby>や<ruby>柱<rt>はしら</rt></ruby>の<ruby>中心線<rt>ちゅうしんせん</rt></ruby>にそのまま<ruby>線<rt>せん</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>くと<ruby>型枠<rt>かたわく</rt></ruby>などで<ruby>隠<rt>かく</rt></ruby>れてしまうため、**あらかじめ500mmや1,000mmなど<ruby>決<rt>き</rt></ruby>まった<ruby>距離<rt>きょり</rt></ruby>だけ<ruby>平行<rt>へいこう</rt></ruby>に<ruby>離<rt>はな</rt></ruby>して<ruby>引<rt>ひ</rt></ruby>いておく<ruby>基準線<rt>きじゅんせん</rt></ruby>**を何と呼びますか。",
      q_id: "Apa sebutan untuk garis acuan yang digeser beberapa puluh cm (misal 500mm atau 1000mm) dari as tengah agar tetap terlihat saat bekisting dipasang?",
      q_ne: "फर्मा लगाउँदा मुख्य रेखा नछोपियोस् भनेर ५०० वा १००० मिमि पर सारेर कोरिने समानान्तर रेखालाई के भनिन्छ?",
      options: [
        { ja: "逃げ墨（にげずみ／寄り墨）", id: "Garis acuan geser (Nige-zumi)", ne: "निगे-जुमी (सारेर कोरिने मसीको रेखा)" },
        { ja: "陸墨（ろくずみ）", id: "Garis level horizontal", ne: "रोकु-जुमी (तेर्सो लेभल रेखा)" },
        { ja: "地縄（じなわ）", id: "Tali batas tanah", ne: "सिमाना डोरी" },
        { ja: "水糸（みずいと）", id: "Benang sipat datar", ne: "मिजु-इतो" }
      ],
      answer: 0,
      expJa: "【テキスト P.81参照】資材や型枠の影になっても基準位置を正しく追えるよう、一定寸法平行にずらして打つ墨を「逃げ墨（にげずみ）」と呼びます。",
      expId: "Nige-zumi adalah garis acuan yang digeser secara paralel agar posisi as tetap bisa diukur saat tertutup material.",
      expNe: "सामान वा फर्माले रेखा नछोपियोस् भनेर केही दूरी पर सारेर कोरिने रेखालाई 'निगे-जुमी' भनिन्छ।"
    },
    {
      cat: "Day 8 復習：遣り方用語（P.82）",
      q: "<ruby>遣り方<rt>やりかた</rt></ruby>（丁張）の<ruby>貫板<rt>ぬきいた</rt></ruby>の<ruby>間<rt>あいだ</rt></ruby>にピンと<ruby>張<rt>は</rt></ruby>り、**<ruby>建物<rt>たてもの</rt></ruby>の<ruby>通<rt>とお</rt></ruby>り<ruby>芯<rt>しん</rt></ruby>や<ruby>基礎<rt>きそ</rt></ruby>の<ruby>水平<rt>すいへい</rt></ruby>な<ruby>高<rt>たか</rt></ruby>さの<ruby>基準<rt>きじゅん</rt></ruby>を<ruby>示<rt>しめ</rt></ruby>す<ruby>黄色<rt>きいろ</rt></ruby>などのナイロン<ruby>糸<rt>いと</rt></ruby>**を何と呼びますか。",
      q_id: "Apa nama benang nilon berwarna terang yang dibentangkan tegang di atas papan bousplank (yarikata) sebagai patokan as dan level ketinggian pondasi?",
      q_ne: "यारिकाताको काठको फ्रेममा कसिलो गरी तन्काएर भवनको सेन्टर लाइन र लेभल देखाउने चम्किलो नाइलनको धागोलाई के भनिन्छ?",
      options: [
        { ja: "水糸（みずいと）", id: "Mizu-ito (Benang sipat ukur)", ne: "मिजु-इतो (लेभल धागो / डोरी)" },
        { ja: "親綱（おやづな）", id: "Oyazuna (Tali keselamatan)", ne: "ओयाजुना (सेफ्टी डोरी)" },
        { ja: "介錯ロープ（かいしゃくロープ）", id: "Tali pemandu angkatan", ne: "क्रेनको सामान डोर्याउने डोरी" },
        { ja: "結束線（けっそくせん）", id: "Kawat bendrat", ne: "तार" }
      ],
      answer: 0,
      expJa: "【テキスト P.82参照】通り芯や高さを現場で目視確認するために張る糸を「水糸」と呼びます。引っ掛けてたるませたり切ったりしないよう慎重に扱います。",
      expId: "Mizu-ito adalah benang tipis pemandu kelurusan garis as dan ketinggian bangunan.",
      expNe: "'मिजु-इतो' सीधा रेखा र तेर्सो समतल देखाउन तन्काइने धागो हो। हिँड्दा यसमा खुट्टा अल्झाउनु हुँदैन।"
    },
    {
      cat: "Day 9 復習：土工事・基礎用語（P.82〜86）",
      q: "<ruby>基礎工事<rt>きそこうじ</rt></ruby>において、**<ruby>掘削底面<rt>くっさくていめん</rt></ruby>を<ruby>所定<rt>しょてい</rt></ruby>の<ruby>深<rt>ふか</rt></ruby>さと<ruby>平坦<rt>へいたん</rt></ruby>さに<ruby>仕上<rt>しあ</rt></ruby>げること**を「①」、その<ruby>上<rt>うえ</rt></ruby>に**<ruby>墨出<rt>すみだ</rt></ruby>しや<ruby>型枠<rt>かたわく</rt></ruby>の<ruby>土台<rt>どだい</rt></ruby>として<ruby>打<rt>う</rt></ruby>つ<ruby>薄<rt>うす</rt></ruby>いコンクリート**を「②」と呼びます。正しい組み合わせはどれですか。",
      q_id: "Meratakan dasar galian secara presisi disebut (1), dan mengecor beton tipis tanpa tulangan sebagai lantai kerja sumidashi disebut (2). Manakah kombinasi yang BENAR?",
      q_ne: "खाल्डोको पिँधलाई ठिक्क नापमा समतल बनाउने कामलाई (१) र रेखा कोर्न त्यसमाथि ढलान गरिने पातलो कंक्रीटलाई (२) भनिन्छ। सही जोडी कुन हो?",
      options: [
        { ja: "① 床付け（とこづけ） ② 捨てコン（すてコン）", id: "(1) Tokozuke, (2) Sute-con", ne: "(१) तोकोजुके, (२) सुते-कोन" },
        { ja: "① 埋戻し ② 生コン", id: "(1) Umemodoshi, (2) Nama-con", ne: "(१) उमेमोदोशी, (२) नामा-कोन" },
        { ja: "① 山留め ② 耐圧盤", id: "(1) Yamadome, (2) Taiatsuban", ne: "(१) यामादोमे, (२) ताइआचुबान" },
        { ja: "① 根切り ② モルタル", id: "(1) Negiri, (2) Mortar", ne: "(१) नेगिरी, (२) मोर्तार" }
      ],
      answer: 0,
      expJa: "【テキスト P.82〜84参照】掘削底面の正確な仕上げ面を「床付け」、その上に墨出しや作業の足場として打つ無筋コンクリートを「捨てコン」と呼びます。",
      expId: "Tokozuke adalah finishing dasar tanah galian, dan Sute-con adalah lantai kerja beton tipis di atasnya.",
      expNe: "खाल्डोको पिँध मिलाउने काम 'तोकोजुके' हो र त्यसमाथि रेखा कोर्न गरिने पातलो ढलान 'सुते-कोन' हो।"
    },
    {
      cat: "Day 9 復習：足場安全用語（P.86）",
      q: "<ruby>足場<rt>あしば</rt></ruby>の<ruby>安全部材<rt>あんぜんぶざい</rt></ruby>のうち、**<ruby>作業床<rt>さぎょうゆか</rt></ruby>の<ruby>端<rt>はし</rt></ruby>からの「<ruby>工具<rt>こうぐ</rt></ruby>や<ruby>小物品<rt>しょうぶっぴん</rt></ruby>の<ruby>落下<rt>らっか</rt></ruby>」を<ruby>防<rt>ふせ</rt></ruby>ぐ<ruby>高<rt>たか</rt></ruby>さ10cm<ruby>以上<rt>いじょう</rt></ruby>の<ruby>板<rt>いた</rt></ruby>**を何と呼びますか。",
      q_id: "Apa sebutan untuk papan pengaman setinggi minimal 10 cm di tepi lantai perancah untuk mencegah perkakas kecil jatuh ke bawah?",
      q_ne: "खटको भुइँबाट औजारहरू तल खस्न नदिन छेउमा लगाइने कम्तीमा १० सेमि अग्लो सुरक्षा पट्टीलाई के भनिन्छ?",
      options: [
        { ja: "巾木（はばき／幅木）", id: "Toe-board / Habaki (Papan tepi penahan jatuh)", ne: "हाबाकी (सामान खस्न नदिने छेउको फल्याक)" },
        { ja: "手すり（てすり）", id: "Handrail (Pagar pembatas)", ne: "रेलिङ" },
        { ja: "壁つなぎ（かべつなぎ）", id: "Wall tie (Pengikat dinding)", ne: "काबे-चुनागी" },
        { ja: "ジャッキベース", id: "Jack base penopang", ne: "ज्याक बेस" }
      ],
      answer: 0,
      expJa: "【テキスト P.86参照】床端からの落下物災害を防ぐ板を「巾木（はばき）」と呼びます。足場自体の倒壊を防ぐ部材は「壁つなぎ」です。",
      expId: "Habaki (toe-board) dipasang di pinggir lantai perancah setinggi minimal 10 cm untuk mencegah alat menggelinding jatuh.",
      expNe: "'हाबाकी' खटको छेउमा राखिने १० सेमि अग्लो फल्याक हो जसले औजार तल खस्न दिँदैन।"
    },
    {
      cat: "Day 10 復習：鉄筋用語（P.86〜88）",
      q: "<ruby>鉄筋<rt>てっきん</rt></ruby>がサビたり<ruby>火災<rt>かさい</rt></ruby>の<ruby>熱<rt>ねつ</rt></ruby>で<ruby>強度<rt>きょうど</rt></ruby>を<ruby>失<rt>うしな</rt></ruby>うのを<ruby>防<rt>ふせ</rt></ruby>ぐため、**「かぶり<ruby>厚<rt>あつ</rt></ruby>さ」を<ruby>規定通<rt>きていどお</rt></ruby>りに<ruby>確保<rt>かくほ</rt></ruby>する<ruby>目的<rt>もくてき</rt></ruby>で<ruby>挟<rt>はさ</rt></ruby>み<ruby>込<rt>こ</rt></ruby>むブロック**を何と呼びますか。",
      q_id: "Apa nama balok pengganjal yang dipasang di antara bekisting dan besi tulangan untuk memastikan ketebalan selimut beton (kaburi)?",
      q_ne: "रड र फर्माको बीचमा कभरको नाप ठिक्क राख्न राखिने कंक्रीट वा प्लास्टिकको ब्लकलाई के भनिन्छ?",
      options: [
        { ja: "スペーサー（サイコロ）", id: "Spacer (Tahu beton / Saikoro)", ne: "स्पेसर / साइकोरो (कभर ब्लक)" },
        { ja: "セパレーター（セパ）", id: "Separator pengatur tebal dinding", ne: "सेपरेटर" },
        { ja: "パイプサポート", id: "Tiang perancah baja penyangga lantai", ne: "पाइप सपोर्ट" },
        { ja: "ハッカー", id: "Alat pemutar kawat bendrat", ne: "ह्याकर" }
      ],
      answer: 0,
      expJa: "【テキスト P.86参照】かぶり厚さを一定に保つための部材を「スペーサー」と呼びます。四角いコンクリート製は「サイコロ」と呼ばれます。",
      expId: "Spacer (Saikoro) menjaga jarak selimut beton pelindung besi agar tidak menempel ke bekisting.",
      expNe: "'स्पेसर' (साइकोरो) रड र फर्माबीचको आवश्यक दूरी मिलाएर राख्न प्रयोग गरिने ब्लक हो।"
    },
    {
      cat: "Day 10 復習：コンクリート欠陥（P.88）",
      q: "<ruby>型枠<rt>かたわく</rt></ruby>を<ruby>解体<rt>かいたい</rt></ruby>した<ruby>際<rt>さい</rt></ruby>、セメントがしっかり<ruby>充填<rt>じゅうてん</rt></ruby>されず**<ruby>粗骨材<rt>そこつざい</rt></ruby>（<ruby>砂利<rt>じゃり</rt></ruby>）がむき<ruby>出<rt>だ</rt></ruby>しになって<ruby>蜂<rt>はち</rt></ruby>の<ruby>巣状<rt>すじょう</rt></ruby>のすき<ruby>間<rt>ま</rt></ruby>ができた<ruby>施工不良<rt>せこうふりょう</rt></ruby>**を何と呼びますか。",
      q_id: "Apa sebutan untuk cacat beton berupa rongga sarang lebah di mana batu kerikil menonjol tanpa semen akibat pemadatan vibrator yang kurang?",
      q_ne: "ढलान गर्दा भाइब्रेटर नपुगेर फर्मा फुकाल्दा गिटी मात्र नाङ्गो देखिने र प्वालै-प्वाल भएको कमजोर भागलाई के भनिन्छ?",
      options: [
        { ja: "ジャンカ（す／豆板：まめいた）", id: "Janka / Mameita (Sarang kerikil / Honeycomb)", ne: "जाङ्का / मामेइता (हनिकम्ब)" },
        { ja: "コールドジョイント", id: "Cold joint (Sambungan dingin cor)", ne: "कोल्ड जोइन्ट" },
        { ja: "レイタンス", id: "Laitance (Lapisan rapuh)", ne: "लेइतान्स" },
        { ja: "ブリーディング", id: "Bleeding (Naiknya air semen)", ne: "ब्लिडिङ" }
      ],
      answer: 0,
      expJa: "【テキスト P.88参照】締め固め不足や材料分離で生じる空隙欠陥を「ジャンカ（豆板）」と呼びます。構造強度の低下や鉄筋腐食の原因になります。",
      expId: "Janka (honeycomb) adalah rongga kerikil yang rapuh pada beton akibat getaran pemadatan yang tidak merata.",
      expNe: "'जाङ्का' कंक्रीट खाँदिएन भने गिटी मात्र जम्मा भई प्वाल पर्ने कमजोरी हो। यसले भवन कमजोर बनाउँछ।"
    },
    {
      cat: "Day 11 復習：納まり用語（P.88〜89）",
      q: "2つの<ruby>材料<rt>ざいりょう</rt></ruby>の<ruby>境目<rt>さかいめ</rt></ruby>において、**「<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>段差<rt>だんさ</rt></ruby>のない<ruby>同一平面<rt>どういつへいめん</rt></ruby>（フラット）」**の状態と、**「<ruby>鋭利<rt>えいり</rt></ruby>な<ruby>角<rt>かど</rt></ruby>を<ruby>斜<rt>なな</rt></ruby>めに<ruby>削<rt>けず</rt></ruby>り<ruby>落<rt>お</rt></ruby>とす<ruby>加工<rt>かこう</rt></ruby>」**の組み合わせとして正しいものはどれですか。",
      q_id: "Manakah kombinasi istilah yang BENAR untuk 'kondisi permukaan rata sejajar tanpa selisih tangga' dan 'memotong miring sudut tajam'?",
      q_ne: "दुई सामानको सतह 'अलिकति पनि तल-माथि नभई ठ्याक्कै एउटै समतल हुनु' र 'तीखो कुना छड्के पारेर ताछ्नु' को सही जोडी कुन हो?",
      options: [
        { ja: "ツライチ（面一） ／ 面取り（めんとり）", id: "Tsura-ichi / Mentori", ne: "चुरा-इची / मेन्तोरी" },
        { ja: "チリ ／ カネ（矩）", id: "Chiri / Kane", ne: "चिरी / काने" },
        { ja: "タチ（立ち） ／ 留め（とめ）", id: "Tachi / Tome", ne: "ताची / तोमे" },
        { ja: "ロク（陸） ／ 相欠き（あいかき）", id: "Roku / Aikaki", ne: "रोकु / आइकाकी" }
      ],
      answer: 0,
      expJa: "【テキスト P.88〜89参照】段差がなく平らに揃うことを「ツライチ（面一）」、部材の角を斜めに削って安全・美観を整えることを「面取り（めんとり）」と呼びます。",
      expId: "Tsura-ichi berarti permukaan rata tanpa tonjolan. Mentori adalah memotong miring sudut tajam (chamfering).",
      expNe: "सतह ठ्याक्कै बराबर हुनु 'चुरा-इची' हो र तीखो कुना ताछेर सुरक्षित बनाउनु 'मेन्तोरी' हो।"
    },
    {
      cat: "Day 12 復習：設備用語（P.91〜94）",
      q: "<ruby>排水管<rt>はいすいかん</rt></ruby>の<ruby>途中<rt>とちゅう</rt></ruby>に<ruby>水<rt>みず</rt></ruby>をためて**<ruby>下水<rt>げすい</rt></ruby>からの<ruby>悪臭<rt>あくしゅう</rt></ruby>や<ruby>害虫<rt>がいちゅう</rt></ruby>が<ruby>室内<rt>しつない</rt></ruby>に<ruby>入<rt>はい</rt></ruby>るのを<ruby>防<rt>ふせ</rt></ruby>ぐ<ruby>仕組<rt>しく</rt></ruby>み**を何と呼びますか。",
      q_id: "Apa sebutan untuk mekanisme penampung air pada pipa pembuangan yang berfungsi sebagai segel air untuk menahan bau busuk dan serangga masuk ke ruangan?",
      q_ne: "ढलको दुर्गन्ध र किराहरू कोठाभित्र आउन नदिन पाइपको बीचमा पानी जमाएर राखिने सिललाई के भनिन्छ?",
      options: [
        { ja: "排水トラップ（封水：ふうすい）", id: "Perangkap air / Trap (Water seal)", ne: "ड्रेन ट्र्याप / पानीको सिल (फुउसुई)" },
        { ja: "防火ダンパー（FD）", id: "Fire damper penahan api", ne: "फायर ड्याम्पर" },
        { ja: "さや管ヘッダー", id: "Header pipa fleksibel", ne: "सायाकान हेडर" },
        { ja: "スリーブ（ボイド管）", id: "Sleeve pipa tembus beton", ne: "स्लिभ" }
      ],
      answer: 0,
      expJa: "【テキスト P.93参照】S字やU字の配管内に水をためて悪臭を遮断する装置を「排水トラップ」、その溜まり水を「封水」と呼びます。",
      expId: "Drain Trap menahan sedikit air (封水) untuk mencegah bau busuk dari saluran limbah naik ke ruangan.",
      expNe: "'ट्र्याप' ले थोरै पानी जमाएर ढलको गन्ध र कीराहरू कोठाभित्र आउनबाट पूर्ण रूपमा रोक्छ।"
    },
    {
      cat: "Day 13 復習：服装安全ルール（P.97）",
      q: "ディスクグラインダーや<ruby>丸<rt>まる</rt></ruby>のこのような「**<ruby>回転工具<rt>かいてんこうぐ</rt></ruby>**」を<ruby>使用<rt>しよう</rt></ruby>する<ruby>際<rt>さい</rt></ruby>、**<ruby>巻<rt>ま</rt></ruby>き<ruby>込<rt>こ</rt></ruby>まれ<ruby>事故<rt>じこ</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐため<ruby>着用<rt>ちゃくよう</rt></ruby>が<ruby>固<rt>かた</rt></ruby>く<ruby>禁止<rt>きんし</rt></ruby>されているもの**はどれですか。",
      q_id: "Manakah perlengkapan yang DILARANG KERAS dipakai saat menggunakan mesin perkakas putar (gerinda, circular saw) demi mencegah bahaya terseret ke bilah putar?",
      q_ne: "घुम्ने औजार (ग्राइन्डर वा गोलो आरा) चलाउँदा मेसिनमा बेरिएर हात काटिन सक्ने भएकाले लगाउन कडा प्रतिबन्ध गरिएको वस्तु कुन हो?",
      options: [
        { ja: "軍手（編み手袋／布製手袋）", id: "Sarung tangan rajut katun (Gunte)", ne: "धागोको पञ्जा (गुन्ते)" },
        { ja: "保護メガネ（防じんメガネ）", id: "Kacamata pelindung (Safety glasses)", ne: "सुरक्षा चस्मा" },
        { ja: "耳栓（防音具）", id: "Sumbat telinga (Earplug)", ne: "कानको ठेडी (इयरप्लग)" },
        { ja: "防じんマスク", id: "Masker debu (Dust mask)", ne: "धुलो रोक्ने मास्क" }
      ],
      answer: 0,
      expJa: "【テキスト P.97参照】回転機器作業での軍手（糸で編まれた手袋）は、繊維が回転刃に巻き込まれて指や手を切断する重大災害を招くため使用禁止です。",
      expId: "Dilarang memakai sarung tangan rajut (Gunte) saat memakai mesin putar karena sangat mudah terseret ke bilah pisau.",
      expNe: "घुम्ने मेसिन चलाउँदा धागोको पञ्जा प्रयोग गर्न कडा मनाही छ, किनकि पञ्जा मेसिनमा बेरिएर औंला काटिन सक्छ।"
    }
  ]
};
