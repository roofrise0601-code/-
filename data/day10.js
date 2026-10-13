const CURRENT_QUIZ_DATA = {
  title: "Day 10：<ruby>鉄筋<rt>てっきん</rt></ruby>・<ruby>型枠<rt>かたわく</rt></ruby>・コンクリート<ruby>打設<rt>だせつ</rt></ruby>の<ruby>現場用語<rt>げんばようご</rt></ruby>（テキスト P.86〜88）",
  key: "score_gakka2_10",
  passScore: 70,
  questions: [
    {
      cat: "第4章 鉄筋用語（P.86）",
      q: "<ruby>鉄筋<rt>てっきん</rt></ruby>の<ruby>表面<rt>ひょうめん</rt></ruby>からコンクリートの<ruby>外面<rt>がいめん</rt></ruby>までの「**コンクリートの<ruby>厚<rt>あつ</rt></ruby>み**」のことを<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk ketebalan beton dari permukaan terluar besi tulangan sampai ke permukaan luar beton?",
      q_ne: "रडको बाहिरी भागदेखि कंक्रीटको बाहिरी सतहसम्मको कंक्रीटको मोटाइलाई के भनिन्छ?",
      options: [
        { ja: "かぶり厚さ（かぶりあつさ）", id: "Selimut beton (Kaburi atsusa)", ne: "कंक्रीट कभर / काबुरी आचुसा" },
        { ja: "定着長さ（ていちゃくながさ）", id: "Panjang penyaluran (Anchorage length)", ne: "एन्कोरेज लम्बाइ" },
        { ja: "継手長さ（つぎてながさ）", id: "Panjang sambungan lewatan", ne: "जोर्नी लम्बाइ" },
        { ja: "スランプ値（スランプち）", id: "Nilai slump", ne: "स्लम्प भ्यालु" }
      ],
      answer: 0,
      expJa: "【テキスト P.86参照】鉄筋がサビるのを防ぎ耐火性能を保つための厚みを「かぶり厚さ」と呼びます。部位（柱・梁・基礎など）ごとに規定の厚さが厳格に決まっています。",
      expId: "Kaburi atsusa (selimut beton) adalah tebal beton pelindung besi tulangan agar tidak berkarat dan tahan api.",
      expNe: "'काबुरी आचुसा' रडमा खिया लाग्न नदिन र आगोबाट बचाउन राखिने कंक्रीटको बाहिरी मोटाइ (कभर) हो।"
    },
    {
      cat: "第4章 鉄筋用語（P.86）",
      q: "<ruby>鉄筋<rt>てっきん</rt></ruby>の「かぶり<ruby>厚<rt>あつ</rt></ruby>さ」を<ruby>正<rt>ただ</rt></ruby>しく<ruby>確保<rt>かくほ</rt></ruby>するために、<ruby>型枠<rt>かたわく</rt></ruby>と<ruby>鉄筋<rt>てっきん</rt></ruby>の<ruby>間<rt>あいだ</rt></ruby>にはさみ<ruby>込<rt>こ</rt></ruby>む「**コンクリート<ruby>製<rt>せい</rt></ruby>やプラスチック<ruby>製<rt>せい</rt></ruby>のブロック**」を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa nama balok pengganjal beton/plastik yang dipasang di antara bekisting dan besi tulangan untuk menjaga selimut beton?",
      q_ne: "रड र फर्माको बीचमा कभरको नाप ठिक्क राख्न राखिने कंक्रीट वा प्लास्टिकको सानो ब्लकलाई के भनिन्छ?",
      options: [
        { ja: "スペーサー（サイコロ）", id: "Spacer (Tahu beton / Saikoro)", ne: "स्पेसर / साइकोरो (कभर ब्लक)" },
        { ja: "セパレーター", id: "Separator", ne: "सेपरेटर" },
        { ja: "ハッカー", id: "Hacker (Alat pengikat kawat)", ne: "ह्याकर (तार बाँध्ने औजार)" },
        { ja: "フォームタイ", id: "Form tie", ne: "फर्म टाई" }
      ],
      answer: 0,
      expJa: "【テキスト P.86参照】かぶり厚さを一定に保つ部材を「スペーサー」と呼び、四角いコンクリート製のものは現場で「サイコロ」とも呼ばれます。",
      expId: "Spacer (sering disebut Saikoro / dadu di lapangan) berfungsi menjaga jarak selimut beton tetap seragam.",
      expNe: "'स्पेसर' (कार्यस्थलमा साइकोरो भनिने) रड र फर्माबीचको आवश्यक दूरी मिलाएर राख्न प्रयोग गरिने ब्लक हो।"
    },
    {
      cat: "第4章 鉄筋作業用語（P.87）",
      q: "<ruby>鉄筋<rt>てっきん</rt></ruby>が<ruby>交差<rt>こうさ</rt></ruby>する<ruby>部分<rt>ぶぶん</rt></ruby>を「<ruby>結束線<rt>けっそくせん</rt></ruby>（<ruby>細<rt>ほそ</rt></ruby>い<ruby>針金<rt>はりがね</rt></ruby>）」で<ruby>縛<rt>しば</rt></ruby>るときに<ruby>使<rt>つか</rt></ruby>う、**<ruby>先端<rt>せんたん</rt></ruby>がカギ<ruby>状<rt>じょう</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>がった<ruby>鉄筋工具<rt>てっきんこうぐ</rt></ruby>**はどれですか。",
      q_id: "Alat besi berujung kait apa yang diputar dengan tangan untuk mengikat kawat bendrat pada persilangan besi beton?",
      q_ne: "रड क्रस भएको ठाउँमा काँटी तारले बाँध्न हातले घुमाएर प्रयोग गरिने अगाडि अंकुशे परेको औजार कुन हो?",
      options: [
        { ja: "ハッカー", id: "Hacker / Pigtail hook twister", ne: "ह्याकर (रड बाँध्ने औजार)" },
        { ja: "ラチェット（シノ）", id: "Kunci Ratchet (Shino)", ne: "र्याचेट / शिनो" },
        { ja: "バール", id: "Linggis (Crowbar)", ne: "क्रोबर (लिङ्गिस)" },
        { ja: "パイプレンチ", id: "Kunci pipa", ne: "पाइप रेन्च" }
      ],
      answer: 0,
      expJa: "【テキスト P.87参照】結束線を素早く巻き付けて締め付ける専用工具を「ハッカー」と呼びます。鉄筋職人の代表的な腰道具です。",
      expId: "Hacker adalah perkakas khas pembuat besi beton untuk memuntir dan mengencangkan kawat bendrat secara cepat.",
      expNe: "'ह्याकर' रड जोड्ने मसिनो तारलाई छिटो र कसिलो गरी बाँध्न प्रयोग गरिने औजार हो।"
    },
    {
      cat: "第4章 型枠用語（P.87）",
      q: "<ruby>型枠<rt>かたわく</rt></ruby>（せき<ruby>板<rt>いた</rt></ruby>）の<ruby>両面<rt>りょうめん</rt></ruby>の「<ruby>幅<rt>はば</rt></ruby>（<ruby>壁<rt>かべ</rt></ruby>の<ruby>厚<rt>あつ</rt></ruby>さ）」を<ruby>一定<rt>いってい</rt></ruby>に<ruby>保<rt>たも</rt></ruby>つために、**<ruby>型枠<rt>かたわく</rt></ruby>の<ruby>間<rt>あいだ</rt></ruby>につっぱる<ruby>金属製<rt>きんぞくせい</rt></ruby>の<ruby>棒<rt>ぼう</rt></ruby>**を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa nama batang logam pengatur jarak yang dipasang di antara dua papan bekisting agar ketebalan dinding tetap presisi?",
      q_ne: "दुईवटा फर्माको बीचमा पर्खालको मोटाइ ठिक्क नापमा राख्न भित्र अड्याइने फलामे रडलाई के भनिन्छ?",
      options: [
        { ja: "セパレーター（セパ）", id: "Separator (Sepa)", ne: "सेपरेटर (सेपा)" },
        { ja: "パイプサポート", id: "Pipa support tiang perancah", ne: "पाइप सपोर्ट" },
        { ja: "桟木（さんぎ）", id: "Kayu reng pengaku (Sangi)", ne: "काठको सानो फल्याक" },
        { ja: "アンカーボルト", id: "Baut angkur", ne: "एङ्कर बोल्ट" }
      ],
      answer: 0,
      expJa: "【テキスト P.87参照】型枠の間隔（壁厚）を正確に保持する金具を「セパレーター（略してセパ）」と呼びます。外側のフォームタイとセットで締め付けます。",
      expId: "Separator (Sepa) menjaga jarak antara bekisting agar ketebalan dinding beton sesuai dengan gambar kerja.",
      expNe: "'सेपरेटर' ले दुईतिरको फर्मालाई नजिकिन नदिई पर्खालको मोटाइ नक्सा अनुसार बराबर बनाइराख्छ।"
    },
    {
      cat: "第4章 型枠支持用語（P.87）",
      q: "スラブ（<ruby>床<rt>ゆか</rt></ruby>）や<ruby>梁<rt>はり</rt></ruby>の<ruby>底型枠<rt>そこかたわく</rt></ruby>を<ruby>下<rt>した</rt></ruby>からしっかり<ruby>支<rt>ささ</rt></ruby>え、コンクリートが<ruby>固<rt>かた</rt></ruby>まるまで<ruby>重<rt>おも</rt></ruby>さを<ruby>受<rt>う</rt></ruby>け<ruby>止<rt>と</rt></ruby>める「**<ruby>長<rt>なが</rt></ruby>さを<ruby>調節<rt>ちょうせつ</rt></ruby>できる<ruby>鋼製<rt>こうせい</rt></ruby>の<ruby>支柱<rt>しちゅう</rt></ruby>**」を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk tiang penyangga baja yang dapat diatur panjangnya untuk menopang bekisting lantai (slab) dan balok dari bawah?",
      q_ne: "ढलानको भुइँ (स्ल्याब) र बिमको फर्मालाई तलबाट बलियोसँग थेग्न राखिने लम्बाइ मिलाउन मिल्ने फलामे टेकोलाई के भनिन्छ?",
      options: [
        { ja: "パイプサポート（支柱）", id: "Pipe support (Tiang penopang baja)", ne: "पाइप सपोर्ट (फलामे टेको)" },
        { ja: "ターンバックル", id: "Turnbuckle", ne: "टर्नबकल" },
        { ja: "胴縁（どうぶち）", id: "Rangka dinding", ne: "भित्ताको फ्रेम" },
        { ja: "水貫（みずぬき）", id: "Papan kayu bousplank", ne: "यारिकाताको फल्याक" }
      ],
      answer: 0,
      expJa: "【テキスト P.87参照】スラブや梁の荷重を支える伸縮式の鋼製支柱を「パイプサポート」と呼びます。所定の強度が出るまで解体してはなりません。",
      expId: "Pipe support adalah tiang baja penopang beban beton basah pada lantai dan balok hingga mencapai kekerasan yang aman.",
      expNe: "'पाइप सपोर्ट' ढलान नजमुन्जेल स्ल्याब र बिमको भार थेग्न तलबाट अड्याइने फलामे टेको हो।"
    },
    {
      cat: "第4章 コンクリート用語（P.87）",
      q: "コンクリートを<ruby>打設<rt>だせつ</rt></ruby>した<ruby>後<rt>あと</rt></ruby>、<ruby>比重<rt>ひじゅう</rt></ruby>の<ruby>違<rt>ちが</rt></ruby>いによって<ruby>表面<rt>ひょうめん</rt></ruby>に**<ruby>水<rt>みず</rt></ruby>がうっすらと<ruby>浮<rt>う</rt></ruby>き<ruby>上<rt>あ</rt></ruby>がってくる<ruby>現象<rt>げんしょう</rt></ruby>**を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk fenomena naiknya air ke permukaan beton segar setelah dicor akibat perbedaan berat jenis?",
      q_ne: "ढलान गरिसकेपछि तौलको भिन्नताका कारण कंक्रीटको माथिल्लो सतहमा पानी मात्र तैरिएर आउने प्रक्रियालाई के भनिन्छ?",
      options: [
        { ja: "ブリーディング", id: "Bleeding (Keluarnya air ke permukaan)", ne: "ब्लिडिङ (सतहमा पानी तैरिने)" },
        { ja: "レイタンス", id: "Laitance (Lapisan rapuh)", ne: "लेइतान्स (कमजोर लेदो तह)" },
        { ja: "スランプ", id: "Slump", ne: "स्लम्प" },
        { ja: "ジャンカ", id: "Sarang lebah (Honeycomb)", ne: "जाङ्का (प्वाल पर्ने)" }
      ],
      answer: 0,
      expJa: "【テキスト P.87参照】打設後の水分が上昇する現象を「ブリーディング」と呼びます。この水とともに微粒子が浮き上がって固まると、表面に脆いレイタンス層を作ります。",
      expId: "Bleeding adalah naiknya air semen ke permukaan. Air ini membawa serbuk halus yang membentuk lapisan rapuh.",
      expNe: "ढलान गरेपछि कंक्रीटबाट पानी माथि आउने प्रक्रियालाई 'ब्लिडिङ' भनिन्छ।"
    },
    {
      cat: "第4章 コンクリート用語（P.87）",
      q: "<ruby>打設後<rt>だせつご</rt></ruby>のコンクリート<ruby>表面<rt>ひょうめん</rt></ruby>に<ruby>浮<rt>う</rt></ruby>き<ruby>出<rt>で</rt></ruby>た<ruby>微粒子<rt>びりゅうし</rt></ruby>が<ruby>固<rt>かた</rt></ruby>まった、**<ruby>白<rt>しろ</rt></ruby>く<ruby>脆<rt>もろ</rt></ruby>い<ruby>膜<rt>まく</rt></ruby>（かす）**を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。※<ruby>次<rt>つぎ</rt></ruby>のコンクリートを<ruby>打<rt>う</rt></ruby>ち<ruby>継<rt>つ</rt></ruby>ぐ<ruby>前<rt>まえ</rt></ruby>に<ruby>除去<rt>じょきょ</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>です。",
      q_id: "Apa sebutan untuk lapisan putih tipis dan rapuh di permukaan beton yang terbentuk dari endapan partikel halus dan harus dibersihkan sebelum sambungan cor berikutnya?",
      q_ne: "कंक्रीटको सतहमा जमेको सेतो र कमजोर लेदो तहलाई के भनिन्छ? (अर्को ढलान थप्नुअघि यसलाई खुर्किएर फाल्नुपर्छ)",
      options: [
        { ja: "レイタンス", id: "Laitance (Lapisan busa semen rapuh)", ne: "लेइतान्स (कमजोर लेदो तह)" },
        { ja: "バリ", id: "Bari (Sisa tonjolan kasar)", ne: "बारी (तीखो भाग)" },
        { ja: "スラグ", id: "Slag", ne: "स्ल्याग" },
        { ja: "アク", id: "Aku (Getah / Kotoran)", ne: "आकु" }
      ],
      answer: 0,
      expJa: "【テキスト P.87参照】ブリーディング水に伴って堆積した脆弱な微粒子層を「レイタンス」と呼びます。取り除かないと打ち継ぎ面の付着強度が著しく低下します。",
      expId: "Laitance adalah lapisan tipis rapuh yang harus dikikis/dibersihkan agar coran beton baru dapat melekat sempurna.",
      expNe: "'लेइतान्स' कमजोर तह हो। यसलाई नहटाए अर्को पटक थपिने कंक्रीट राम्रोसँग जोडिँदैन।"
    },
    {
      cat: "第4章 欠陥・不具合用語（P.88）",
      q: "<ruby>型枠<rt>かたわく</rt></ruby>を<ruby>外<rt>はず</rt></ruby>したとき、セメントペーストが<ruby>回<rt>まわ</rt></ruby>らずに**<ruby>砂利<rt>じゃり</rt></ruby>（<ruby>骨材<rt>こつざい</rt></ruby>）がむき<ruby>出<rt>だ</rt></ruby>しになってすき<ruby>間<rt>ま</rt></ruby>だらけになった<ruby>不良部分<rt>ふりょうぶぶん</rt></ruby>**を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk cacat beton berupa rongga-rongga sarang lebah di mana kerikil terlihat menonjol tanpa tertutup pasta semen?",
      q_ne: "फर्मा फुकाल्दा सिमेन्ट नपुगेर गिटी मात्र नाङ्गो देखिने र प्वालै-प्वाल भएको कमजोर भागलाई के भनिन्छ?",
      options: [
        { ja: "ジャンカ（す／豆板：まめいた）", id: "Janka / Mameita (Sarang kerikil / Honeycomb)", ne: "जाङ्का / मामेइता (हनिकम्ब / गिटी छुट्टिएको भाग)" },
        { ja: "クラック", id: "Crack (Retakan)", ne: "क्र्याक (चिरिएको दाग)" },
        { ja: "ピンホール", id: "Pinhole (Lubang jarum)", ne: "पिनहोल (मसिनो प्वाल)" },
        { ja: "エフロレッセンス", id: "Efflorescence (Bercak putih)", ne: "सेतो दाग" }
      ],
      answer: 0,
      expJa: "【テキスト P.88参照】締め固め不足や材料分離で砂利が集まり空隙ができた欠陥部を「ジャンカ（豆板）」と呼びます。強度低下の原因となるため補修が必要です。",
      expId: "Janka (honeycomb) terjadi akibat pemadatan vibrator yang kurang, sehingga batu kerikil berongga tanpa semen.",
      expNe: "'जाङ्का' भाइब्रेटर राम्रोसँग नलागेर गिटी मात्र जम्मा भई प्वाल पर्ने ठूलो कमजोरी हो। यसलाई मर्मत गर्नुपर्छ।"
    },
    {
      cat: "第4章 欠陥・不具合用語（P.88）",
      q: "コンクリートの<ruby>打設<rt>だせつ</rt></ruby>の<ruby>間隔<rt>かんかく</rt></ruby>が<ruby>空<rt>あ</rt></ruby>きすぎて、<ruby>先<rt>さき</rt></ruby>に<ruby>打<rt>う</rt></ruby>ったコンクリートが<ruby>固<rt>かた</rt></ruby>まり<ruby>始<rt>はじ</rt></ruby>めた<ruby>後<rt>あと</rt></ruby>に<ruby>次<rt>つぎ</rt></ruby>を<ruby>流<rt>なが</rt></ruby>し<ruby>込<rt>こ</rt></ruby>んだため、**<ruby>一体化<rt>いったいか</rt></ruby>せずにできてしまった<ruby>不完全<rt>ふかんぜん</rt></ruby>なつなぎ<ruby>目<rt>め</rt></ruby>**を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk garis sambungan dingin yang gagal menyatu sempurna karena jeda waktu pengecoran lapisan berikutnya terlalu lama?",
      q_ne: "ढलान गर्दा समय धेरै ढिलो भएर पहिलेको कंक्रीट जम्न थालेपछि अर्को खन्याउँदा आपसमा नजोडिएर बन्ने कमजोर रेखालाई के भनिन्छ?",
      options: [
        { ja: "コールドジョイント", id: "Cold joint (Sambungan dingin cacat)", ne: "कोल्ड जोइन्ट (चिसो जोड / नजोडिएको रेखा)" },
        { ja: "エキスパンションジョイント", id: "Expansion joint (Sambungan muai)", ne: "एक्सपान्सन जोइन्ट" },
        { ja: "目地（めじ）", id: "Nat / Meji (Garis nat)", ne: "मेजी (जोर्नी रेखा)" },
        { ja: "誘発目地（ゆうはつめじ）", id: "Control joint", ne: "कन्ट्रोल जोइन्ट" }
      ],
      answer: 0,
      expJa: "【テキスト P.88参照】打設の重ね合わせ時間が規定を超えると一体化せず「コールドジョイント」となり、水漏れや強度不足の致命的な欠陥になります。",
      expId: "Cold joint adalah cacat struktural dan celah kebocoran air akibat jeda pengecoran antar-lapisan yang terlalu lama.",
      expNe: "'कोल्ड जोइन्ट' ढलानको बीचमा धेरै समय खाली हुँदा दुई तह नजोडिएर बन्ने गम्भीर समस्या हो, जसबाट पछि पानी चुहिन्छ।"
    },
    {
      cat: "第4章 打設器具・用語（P.88）",
      q: "コンクリート<ruby>打設時<rt>だせつじ</rt></ruby>に、<ruby>生<rt>なま</rt></ruby>コンの<ruby>中<rt>なか</rt></ruby>に<ruby>差<rt>さ</rt></ruby>し<ruby>込<rt>こ</rt></ruby>んで<ruby>振動<rt>しんどう</rt></ruby>を<ruby>与<rt>あた</rt></ruby>え、**<ruby>空気<rt>くうき</rt></ruby>を<ruby>抜<rt>ぬ</rt></ruby>いてすき<ruby>間<rt>ま</rt></ruby>なく<ruby>締<rt>し</rt></ruby>め<ruby>固<rt>かた</rt></ruby>めるための<ruby>電動工具<rt>でんどうこうぐ</rt></ruby>**を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa nama alat penggetar listrik yang dimasukkan ke dalam beton basah untuk membuang udara dan memadatkan coran secara merata?",
      q_ne: "ढलान गर्दा काँचो कंक्रीट भित्र हालेर कम्पन दिई हावा बाहिर निकाल्न र कंक्रीट खाँद्न प्रयोग गरिने बिजुलीको औजारलाई के भनिन्छ?",
      options: [
        { ja: "棒状バイブレーター（コンクリート振動機）", id: "Vibrator beton (Concrete poker vibrator)", ne: "कंक्रीट भाइब्रेटर (कम्पन दिने मेसिन)" },
        { ja: "インパクトドライバー", id: "Impact driver", ne: "इम्प्याक्ट ड्राइभर" },
        { ja: "ディスクグラインダー", id: "Gerinda tangan (Disk grinder)", ne: "ग्राइन्डर मेसिन" },
        { ja: "ハンマードリル", id: "Hammer drill", ne: "ह्यामर ड्रिल" }
      ],
      answer: 0,
      expJa: "【テキスト P.88参照】生コンの充填性を高め空隙をなくすため「バイブレーター」を使用します。同じ場所に長時間かけすぎると骨材が沈降（材料分離）するので注意が必要です。",
      expId: "Vibrator beton digunakan untuk memadatkan beton. Jangan menggetarkan di satu titik terlalu lama agar tidak terjadi pemisahan material.",
      expNe: "'कंक्रीट भाइब्रेटर' हावा फालेर कंक्रीट मिलाउन प्रयोग गरिन्छ। एउटै ठाउँमा धेरै बेर राख्दा गिटी छुट्टिने जोखिम हुन्छ।"
    }
  ]
};
