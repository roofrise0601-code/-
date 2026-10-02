const CURRENT_QUIZ_DATA = {
  title: "特定技能2号 学科：Day 3（第2章 2.2〜2.17 建設業法・環境法令編）",
  key: "score_gakka2",
  passScore: 70,
  questions: [
    {
      id: 1,
      cat: "2.2 建設業法 (p.18)",
      q: "<ruby>建設業法<rt>けんせつぎょうほう</rt></ruby>の **<ruby>目的<rt>もくてき</rt></ruby>や ルール**として、**<ruby>誤<rt>あやま</rt></ruby>っているもの**は どれですか。",
      options: [
        "<ruby>請<rt>う</rt></ruby>け<ruby>負<rt>お</rt></ruby>った<ruby>工事<rt>こうじ</rt></ruby>の<ruby>全部<rt>ぜんぶ</rt></ruby>を、そのまま<ruby>他<rt>ほか</rt></ruby>の<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>丸投<rt>まるな</rt></ruby>げする「<ruby>一括下請負<rt>いっかつしたうけおい</rt></ruby>」を<ruby>自由<rt>じゆう</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>ってよい。",
        "<ruby>建設業法<rt>けんせつぎょうほう</rt></ruby>で<ruby>許可<rt>きょか</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>になる<ruby>業種<rt>ぎょうしゅ</rt></ruby>は、<ruby>屋根<rt>やね</rt></ruby>、<ruby>板金<rt>ばんきん</rt></ruby>、<ruby>大工<rt>だいく</rt></ruby>など「29<ruby>種類<rt>しゅるい</rt></ruby>」ある。",
        "<ruby>発注者<rt>はっちゅうしゃ</rt></ruby>と<ruby>専門工事業者<rt>せんもんこうじぎょうしゃ</rt></ruby>の<ruby>双方<rt>そうほう</rt></ruby>が<ruby>適切<rt>てきせつ</rt></ruby>な<ruby>契約<rt>けいやく</rt></ruby>を<ruby>交<rt>か</rt></ruby>わし、<ruby>公共<rt>こうきょう</rt></ruby>の<ruby>福祉<rt>ふくし</rt></ruby>の<ruby>増進<rt>ぞうしん</rt></ruby>に<ruby>寄与<rt>きよ</rt></ruby>することを<ruby>目的<rt>もくてき</rt></ruby>としている。",
        "<ruby>施工<rt>せこう</rt></ruby>の<ruby>現場<rt>げんば</rt></ruby>には、<ruby>適正<rt>てきせい</rt></ruby>な<ruby>施工<rt>せこう</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>するために「<ruby>主任技術者<rt>しゅにんぎじゅつしゃ</rt></ruby>」などを<ruby>配置<rt>はいち</rt></ruby>しなければならない。"
      ],
      answer: 0,
      hintId: "Ikkatsu Shitaukeoi (melempar seluruh borongan ke pihak lain / marunage) dilarang keras oleh UU Jasa Konstruksi.",
      hintNe: "निर्माण व्यवसाय ऐनले काम अरूलाई पूरै जिम्मा लगाउने (इक्कात्सु सिताउकेओइ) पूर्ण रूपमा निषेध गरेको छ।",
      expJa: "建設業法では、「一括下請負（丸投げ）」を禁止しています。業種は29種類あります（テキストp.18）。",
      expId: "UU Konstruksi melarang keras melempar seluruh kontrak ke subkontraktor lain tanpa pengerjaan sendiri demi integritas kerja.",
      expNe: "निर्माण व्यवसाय ऐन अनुसार 'इक्कात्सु सिताउकेओइ' (सबै काम अरूलाई सुम्पिने) पूर्ण निषेध छ।"
    },
    {
      id: 2,
      cat: "2.3 建築基準法 (p.19)",
      q: "<ruby>建築基準法<rt>けんちくきじゅんほう</rt></ruby>を <ruby>構成<rt>こうせい</rt></ruby>する **2つの<ruby>規定<rt>きてい</rt></ruby>**として、<ruby>正<rt>ただ</rt></ruby>しい<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせは どれですか。",
      options: [
        "<ruby>建物<rt>たてもの</rt></ruby>そのものの<ruby>安全性<rt>あんぜんせい</rt></ruby>・<ruby>防火<rt>ぼうか</rt></ruby>などを<ruby>定<rt>さだ</rt></ruby>める「<ruby>単体規定<rt>たんたいきてい</rt></ruby>」と、<ruby>良好<rt>りょうこう</rt></ruby>な<ruby>市街地環境<rt>しがいちかんきょう</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>する「<ruby>集団規定<rt>しゅうだんきてい</rt></ruby>」",
        "<ruby>工事<rt>こうじ</rt></ruby>の<ruby>売買価格<rt>ばいばいかかく</rt></ruby>を<ruby>定<rt>さだ</rt></ruby>める「<ruby>価格規定<rt>かかくきてい</rt></ruby>」と、<ruby>作業員<rt>さぎょういん</rt></ruby>の<ruby>給料<rt>きゅうりょう</rt></ruby>を<ruby>定<rt>さだ</rt></ruby>める「<ruby>賃金規定<rt>ちんぎんきてい</rt></ruby>」",
        "<ruby>現場<rt>げんば</rt></ruby>の<ruby>写真<rt>しゃしん</rt></ruby>の<ruby>撮<rt>と</rt></ruby>り<ruby>方<rt>かた</rt></ruby>を<ruby>定<rt>さだ</rt></ruby>める「<ruby>撮影規定<rt>さつえいきてい</rt></ruby>」と、<ruby>道具<rt>どうぐ</rt></ruby>の<ruby>置<rt>お</rt></ruby>き<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>定<rt>さだ</rt></ruby>める「<ruby>整理規定<rt>せいりきてい</rt></ruby>」",
        "<ruby>外国人<rt>がいこくじん</rt></ruby>の<ruby>在留資格<rt>ざいりゅうしかく</rt></ruby>を<ruby>定<rt>さだ</rt></ruby>める「<ruby>入管規定<rt>にゅうかんきてい</rt></ruby>」と、<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>試験<rt>しけん</rt></ruby>を<ruby>定<rt>さだ</rt></ruby>める「<ruby>検定規定<rt>けんていきてい</rt></ruby>」"
      ],
      answer: 0,
      hintId: "UU Standar Bangunan terdiri dari Tantai Kitei (standar fisik gedung) dan Shuudan Kitei (standar tata kota).",
      hintNe: "भवन निर्माण मानक ऐन 'तान्ताइ कितेइ' (भवनको आफ्नै मापदण्ड) र 'स्युउदान कितेइ' (सहरको वातावरण) मा आधारित छ।",
      expJa: "建築基準法は、建物自体の安全性等を定めた「単体規定」と、良好な市街地環境を確保する「集団規定」の2つで成り立ちます（テキストp.19）。",
      expId: "UU Bangunan memuat dua regulasi inti: Tantai Kitei (keselamatan gedung) dan Shuudan Kitei (tata kota).",
      expNe: "भवनको सुरक्षा र सहरको योजनाबद्ध विकासका लागि २ खम्बे नियम तय गरिएको छ।"
    },
    {
      id: 3,
      cat: "2.4 廃棄物処理法 (p.19-20)",
      q: "<ruby>現場<rt>げんば</rt></ruby>から<ruby>出<rt>で</rt></ruby>る「<ruby>産業廃棄物<rt>さんぎょうはいきぶつ</rt></ruby>」の <ruby>処理<rt>しょり</rt></ruby>について、**<ruby>誤<rt>あやま</rt></ruby>っているもの**は どれですか。",
      options: [
        "<ruby>処分費用<rt>しょぶんひよう</rt></ruby>を<ruby>安<rt>やす</rt></ruby>くするため、<ruby>余<rt>あま</rt></ruby>った<ruby>木材<rt>もくざい</rt></ruby>やゴミを<ruby>現場<rt>げんば</rt></ruby>の<ruby>隅<rt>すみ</rt></ruby>で<ruby>燃<rt>も</rt></ruby>やす（<ruby>野焼<rt>のや</rt></ruby>きする）。",
        "<ruby>工事現場<rt>こうじげんば</rt></ruby>からゴミを<ruby>排出<rt>はいしゅつ</rt></ruby>するには、<ruby>原則<rt>げんそく</rt></ruby>として「<ruby>廃棄物収集運搬業<rt>はいきぶつしゅうしゅううんぱんぎょう</rt></ruby>の<ruby>許可<rt>きょか</rt></ruby>」が<ruby>必要<rt>ひつよう</rt></ruby>である。",
        "<ruby>下請<rt>したうけ</rt></ruby><ruby>業者<rt>ぎょうしゃ</rt></ruby>も、<ruby>現場<rt>げんば</rt></ruby>における<ruby>産業廃棄物<rt>さんぎょうはいきぶつ</rt></ruby>の「<ruby>保管<rt>ほかん</rt></ruby>」に<ruby>関<rt>かん</rt></ruby>して<ruby>法律<rt>ほうりつ</rt></ruby>が<ruby>適用<rt>てきよう</rt></ruby>される。",
        "<ruby>元請<rt>もとうけ</rt></ruby><ruby>業者<rt>ぎょうしゃ</rt></ruby>は「マニフェスト（<ruby>建設系廃棄物管理票<rt>けんせつけいはいきぶつかんりひょう</rt></ruby>）」を<ruby>作成<rt>さくせい</rt></ruby>し、<ruby>最終処分<rt>さいしゅうしょぶん</rt></ruby>まで<ruby>確認<rt>かくにん</rt></ruby>する<ruby>義務<rt>ぎむ</rt></ruby>がある。"
      ],
      answer: 0,
      hintId: "Membakar sampah proyek sendiri di area konstruksi (No-yaki) dilarang keras dan melanggar hukum!",
      hintNe: "निर्माण क्षेत्रमा फोहोर जलाउनु (नोयाकी) कानुनी रूपमा कडा प्रतिबन्धित छ।",
      expJa: "現場でのゴミの野焼きや不法投棄は固く禁止されています。元請はマニフェストを発行し適正処理を確認します（テキストp.19-20）。",
      expId: "Membakar limbah di lapangan proyek dilarang keras. Semua sampah industri wajib dikelola dengan manifes resmi.",
      expNe: "कार्यस्थलमा आगो बालेर फोहोर जलाउन पाइँदैन। म्यानिफेस्टो अनुसार सही ठाउँमा पठाउनुपर्छ।"
    },
    {
      id: 4,
      cat: "2.5 建設リサイクル法 (p.20)",
      q: "<ruby>建設<rt>けんせつ</rt></ruby>リサイクル<ruby>法<rt>ほう</rt></ruby>で、<ruby>資材<rt>しざい</rt></ruby>ごとに <ruby>分別<rt>ぶんべつ</rt></ruby>して **<ruby>再資源化<rt>さいしげんか</rt></ruby>（リサイクル）が <ruby>義務<rt>ぎむ</rt></ruby>づけられている「<ruby>特定建設資材<rt>とくていけんせつしざい</rt></ruby>」**に <ruby>含<rt>ふく</rt></ruby>まれないものは どれですか。",
      options: [
        "<ruby>壁紙<rt>かべがみ</rt></ruby>（クロス）や <ruby>板<rt>いた</rt></ruby>ガラスなどの <ruby>内装材<rt>ないそうざい</rt></ruby>",
        "コンクリート",
        "コンクリート<ruby>及<rt>およ</rt></ruby>び<ruby>鉄<rt>てつ</rt></ruby>から<ruby>成<rt>な</rt></ruby>る<ruby>建設資材<rt>けんせつしざい</rt></ruby>（<ruby>鉄筋<rt>てっきん</rt></ruby>コンクリートなど）",
        "<ruby>木材<rt>もくざい</rt></ruby>、および アスファルト・コンクリート"
      ],
      answer: 0,
      hintId: "4 material wajib daur ulang: Beton, Beton bertulang, Kayu, dan Aspal beton. Kertas dinding/kaca tidak termasuk.",
      hintNe: "पुनर्प्रयोग अनिवार्य गरिएका ४ सामग्री: कंक्रीट, आरसीसी, काठ, र अस्फाल्ट हुन्। वालपेपर वा सिसा यसमा पर्दैनन्।",
      expJa: "建設リサイクル法の特定建設資材は「コンクリート」「コンクリート及び鉄から成る建設資材」「木材」「アスファルト・コンクリート」の4つです（テキストp.20）。",
      expId: "Empat material wajib pilah dan daur ulang adalah beton, beton bertulang besi, kayu, dan aspal.",
      expNe: "कंक्रीट, फलाम-कंक्रीट, काठ र अस्फाल्ट गरी ४ वटा निर्माण सामग्रीलाई अनिवार्य छुट्याएर पुनः प्रयोग गर्नुपर्छ।"
    },
    {
      id: 5,
      cat: "2.6 大気汚染防止法 (p.20)",
      q: "「<ruby>大気汚染防止法<rt>たいきおせんぼうしほう</rt></ruby>」において、<ruby>建築物<rt>けんちくぶつ</rt></ruby>の <ruby>解体<rt>かいたい</rt></ruby>・<ruby>改修<rt>かいしゅう</rt></ruby>のときに **<ruby>事前<rt>じぜん</rt></ruby>に<ruby>届<rt>とど</rt></ruby>け<ruby>出<rt>で</rt></ruby>が<ruby>義務<rt>ぎむ</rt></ruby>づけられている ルール**として、<ruby>正<rt>ただ</rt></ruby>しいものは どれですか。",
      options: [
        "アスベスト（<ruby>特定粉<rt>とくていふん</rt></ruby>じん）が<ruby>使用<rt>しよう</rt></ruby>されている<ruby>建築物<rt>けんちくぶつ</rt></ruby>を<ruby>解体<rt>かいたい</rt></ruby>・<ruby>改造<rt>かいぞう</rt></ruby>・<ruby>補修<rt>ほしゅう</rt></ruby>するときは、<ruby>作業開始<rt>さぎょうかいし</rt></ruby>の「14<ruby>日前<rt>にちまえ</rt></ruby>」までに<ruby>都道府県知事<rt>とどうふけんちじ</rt></ruby>に<ruby>届<rt>とど</rt></ruby>け<ruby>出<rt>で</rt></ruby>なければならない。",
        "アスベストは<ruby>健康<rt>けんこう</rt></ruby>に<ruby>害<rt>がい</rt></ruby>がないため、<ruby>粉<rt>こな</rt></ruby>を<ruby>飛<rt>と</rt></ruby>ばしながらマスクをつけずに<ruby>解体<rt>かいたい</rt></ruby>してよい。",
        "アスベストの<ruby>解体工事<rt>かいたいこうじ</rt></ruby>は、すべて<ruby>工事<rt>こうじ</rt></ruby>が<ruby>終<rt>お</rt></ruby>わった1か月<ruby>後<rt>ご</rt></ruby>に<ruby>届<rt>とど</rt></ruby>け<ruby>出<rt>で</rt></ruby>をすればよい。",
        "<ruby>木造<rt>もくぞう</rt></ruby>の<ruby>住宅<rt>じゅうたく</rt></ruby>であれば、どんな<ruby>有害物質<rt>ゆうがいぶっしつ</rt></ruby>が<ruby>含<rt>ふく</rt></ruby>まれていても<ruby>事前調査<rt>じぜんちょうさ</rt></ruby>は<ruby>一切不要<rt>いっさいふよう</rt></ruby>である。"
      ],
      answer: 0,
      hintId: "Pekerjaan asbes (Ishiwata) wajib dilaporkan ke gubernur prefektur minimal 14 hari sebelum pekerjaan dimulai.",
      hintNe: "एस्बेस्टस भएका संरचना भत्काउँदा काम सुरु हुनुभन्दा कम्तीमा १४ दिन अगावै जानकारी दिनुपर्छ।",
      expJa: "アスベスト（特定粉じん）排出等作業を伴う建築工事は、作業開始の日の14日前までに都道府県知事への届出が義務付けられています（テキストp.20）。",
      expId: "Pembongkaran gedung berasbes harus didaftarkan ke pemerintah daerah minimal 14 hari sebelum pelaksanaan.",
      expNe: "एस्बेस्टस हावामा उडेर असर गर्ने भएकाले काम सुरु गर्नु १४ दिन अघि अनिवार्य निवेदन पेश गर्नुपर्छ।"
    },
    {
      id: 6,
      cat: "2.7 騒音規制法・振動防止法 (p.21)",
      q: "<ruby>現場<rt>げんば</rt></ruby>の「<ruby>騒音<rt>そうおん</rt></ruby>・<ruby>振動<rt>しんどう</rt></ruby>」を <ruby>低減<rt>ていげん</rt></ruby>（<ruby>減<rt>へ</rt></ruby>らす）するための **<ruby>検討事項<rt>けんとうじこう</rt></ruby>として <ruby>適切<rt>てきせつ</rt></ruby>なもの**は どれですか。",
      options: [
        "<ruby>低騒音<rt>ていそうおん</rt></ruby>・<ruby>低振動<rt>ていしんどう</rt></ruby>の<ruby>施工法<rt>せこうほう</rt></ruby>や<ruby>機械<rt>きかい</rt></ruby>を<ruby>選<rt>えら</rt></ruby>び、<ruby>適切<rt>てきせつ</rt></ruby>な<ruby>作業時間帯<rt>さぎょうじかんたい</rt></ruby>の<ruby>設定<rt>せってい</rt></ruby>や<ruby>防音施設<rt>ぼうおんしせつ</rt></ruby>の<ruby>設置<rt>せっち</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。",
        "<ruby>音<rt>おと</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きい<ruby>工事<rt>こうじ</rt></ruby>ほど<ruby>早朝<rt>そうちょう</rt></ruby>（<ruby>朝<rt>あさ</rt></ruby>4<ruby>時<rt>じ</rt></ruby>）や<ruby>深夜<rt>しんや</rt></ruby>に<ruby>集中<rt>しゅうちゅう</rt></ruby>して<ruby>行<rt>おこな</rt></ruby>う。",
        "<ruby>近隣<rt>きんりん</rt></ruby>の<ruby>住宅<rt>じゅうたく</rt></ruby>に<ruby>近<rt>ちか</rt></ruby>い<ruby>場所<rt>ばしょ</rt></ruby>にあえて<ruby>大<rt>おお</rt></ruby>きな<ruby>音<rt>おと</rt></ruby>の<ruby>出<rt>で</rt></ruby>る<ruby>機械<rt>きかい</rt></ruby>を<ruby>置<rt>お</rt></ruby>く。",
        "<ruby>防音<rt>ぼうおん</rt></ruby>シートを<ruby>張<rt>は</rt></ruby>ると<ruby>費用<rt>ひよう</rt></ruby>がかかるため、どんなにうるさくても<ruby>防音対策<rt>ぼうおんたいさく</rt></ruby>はしてはならない。"
      ],
      answer: 0,
      hintId: "Pilihlah mesin rendah bising/getaran, atur jam kerja agar tidak mengganggu warga sekitar.",
      hintNe: "आवाज कम आउने मेसिन छान्ने, उपयुक्त समयमा मात्र काम गर्ने र साउन्डप्रूफ सिट प्रयोग गर्नुपर्छ।",
      expJa: "低騒音・低振動施工法や建設機械の選択、作業時間帯・工程の設定、防音施設の設置などを検討します（テキストp.21）。",
      expId: "Untuk mengendalikan polusi suara dan getaran, gunakan mesin tipe rendah bising dan atur jam kerja dengan bijak.",
      expNe: "आधुनिक कम आवाज आउने मेसिन प्रयोग गर्ने र बस्ती नजिक समय मिलाएर काम गर्नुपर्छ।"
    },
    {
      id: 7,
      cat: "2.8 水質汚濁防止法 ＆ 2.9 消防法 (p.21-22)",
      q: "<ruby>排水<rt>はいすい</rt></ruby>の ルールおよび <ruby>火気<rt>かき</rt></ruby>の <ruby>使用<rt>しよう</rt></ruby>について、**<ruby>正<rt>ただ</rt></ruby>しいもの**は どれですか。",
      options: [
        "コンクリートを<ruby>伝<rt>つた</rt></ruby>わった<ruby>水<rt>みず</rt></ruby>は「<ruby>高<rt>こう</rt></ruby>アルカリ<ruby>排水<rt>はいすい</rt></ruby>」となるため<ruby>中和処理<rt>ちゅうわしょり</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>であり、<ruby>火気<rt>かき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>う<ruby>場所<rt>ばしょ</rt></ruby>には<ruby>消火器<rt>しょうかき</rt></ruby>などを<ruby>備<rt>そな</rt></ruby>える。",
        "コンクリートを<ruby>洗<rt>あら</rt></ruby>った<ruby>水<rt>みず</rt></ruby>は、そのまま<ruby>何<rt>なに</rt></ruby>もせずに<ruby>近<rt>ちか</rt></ruby>くの<ruby>川<rt>かわ</rt></ruby>や<ruby>側溝<rt>そっこう</rt></ruby>に<ruby>流<rt>なが</rt></ruby>してよい。",
        "<ruby>消防法<rt>しょうぼうほう</rt></ruby>では、<ruby>現場<rt>げんば</rt></ruby>に<ruby>消火器<rt>しょうかき</rt></ruby>や<ruby>避難器具<rt>ひなんきぐ</rt></ruby>を<ruby>置<rt>お</rt></ruby>くことは<ruby>禁止<rt>きんし</rt></ruby>されている。",
        "<ruby>溶接<rt>ようせつ</rt></ruby>などの<ruby>火花<rt>ひばな</rt></ruby>が<ruby>出<rt>で</rt></ruby>る<ruby>作業<rt>さぎょう</rt></ruby>のすぐ<ruby>足元<rt>あしもと</rt></ruby>に、ガソリンのポリタンクを<ruby>開<rt>あ</rt></ruby>けて<ruby>並<rt>なら</rt></ruby>べておく。"
      ],
      answer: 0,
      hintId: "Air rembesan semen bersifat alkali tinggi (butuh dinetralkan). Lokasi kerja berapi wajib sedia alat pemadam kebakaran.",
      hintNe: "सिमेन्टको पानी कडा अल्काली हुने भएकाले केमिकलले उपचार गर्नुपर्छ र आगोको काम गर्दा अग्निनियन्त्रक राख्नुपर्छ।",
      expJa: "コンクリート排水は高アルカリのため中和処理が必要です。火災防止のため消火設備の設置が定められています（テキストp.21-22）。",
      expId: "Air cucian beton wajib dinetralkan sebelum dibuang. Pemadam api wajib siap di dekat pengerjaan api.",
      expNe: "कंक्रीट मिसिएको पानी सिधै खोलामा फाल्न पाइँदैन र आगोको काम गर्दा निभाउने साधन राख्नुपर्छ।"
    },
    {
      id: 8,
      cat: "2.10 水道法 ＆ 2.11 下水道法 (p.22-23)",
      q: "<ruby>上下水道<rt>じょうげすいどう</rt></ruby>に <ruby>関<rt>かん</rt></ruby>するルールについて、**<ruby>正<rt>ただ</rt></ruby>しいもの**は どれですか。",
      options: [
        "<ruby>下水道施設<rt>げすいどうしせつ</rt></ruby>を<ruby>腐食<rt>ふしょく</rt></ruby>させたり<ruby>有毒<rt>ゆうどく</rt>ガスが<ruby>発生<rt>はっせい</rt></ruby>するおそれのある<ruby>汚水<rt>おすい</rt></ruby>や、<ruby>重金属<rt>じゅうきんぞく</rt></ruby>・<ruby>油分<rt>あぶらぶん</rt></ruby>を<ruby>基準値以上<rt>きじゅんちいじょう</rt></ruby>に<ruby>含<rt>ふく</rt></ruby>む<ruby>水<rt>みず</rt></ruby>を<ruby>公共下水道<rt>こうきょうげすいどう</rt></ruby>に<ruby>流<rt>なが</rt></ruby>してはならない。",
        "<ruby>水道管<rt>すいどうかん</rt></ruby>の<ruby>工事<rt>こうじ</rt></ruby>は、<ruby>専門<rt>せんもん</rt></ruby>の<ruby>技術者<rt>ぎじゅつしゃ</rt></ruby>の<ruby>指示<rt>しじ</rt></ruby>がなくても<ruby>誰<rt>だれ</rt></ruby>でも<ruby>自由<rt>じゆう</rt></ruby>に<ruby>勝手<rt>かって</rt></ruby>に<ruby>配管<rt>はいかん</rt></ruby>をつなぎ<ruby>替<rt>か</rt></ruby>えてよい。",
        "<ruby>泥水<rt>どろみず</rt></ruby>やセメントのカスは、<ruby>下水管<rt>げすいかん</rt></ruby>がつまりそうになってもどんどん<ruby>流<rt>なが</rt></ruby>すのがよい。",
        "<ruby>工事現場<rt>こうじげんば</rt></ruby>の<ruby>排水<rt>はいすい</rt></ruby>には<ruby>法律<rt>ほうりつ</rt></ruby>の<ruby>基準値<rt>きじゅんち</rt></ruby>はないため、どんな<ruby>薬品<rt>やくひん</rt></ruby>を<ruby>流<rt>なが</rt></ruby>しても<ruby>問題<rt>もんだい</rt></ruby>ない。"
      ],
      answer: 0,
      hintId: "Air yang merusak saluran atau mengandung gas beracun/logam berat dilarang dibuang ke saluran pembuangan umum.",
      hintNe: "ढलका संरचना बिगार्ने, विषालु ग्यास निकाल्ने वा हानिकारक धातु मिसिएको पानी ढलमा मिसाउन पाइँदैन।",
      expJa: "下水道法では、施設を腐食させる水や有毒ガスを発生させる排水、重金属が基準値以上含まれる水の排出を禁じています（テキストp.22-23）。",
      expId: "UU Drainase melarang pembuangan cairan korosif, gas beracun, atau logam berat ke selokan umum.",
      expNe: "विषाक्त ग्यास निकाल्ने वा रसायनयुक्त पानी सार्वजनिक ढलमा मिसाउन कानुनले निषेध गरेको छ।"
    },
    {
      id: 9,
      cat: "2.12 ガス事業法 ＆ 2.13 電気事業法 (p.23)",
      q: "<ruby>現場<rt>げんば</rt></ruby>における「ガス」や「<ruby>電気<rt>でんき</rt></ruby>」の <ruby>安全管理<rt>あんぜんかんり</rt></ruby>について、**<ruby>正<rt>ただ</rt></ruby>しいもの**は どれですか。",
      options: [
        "ガスの<ruby>不適切<rt>ふてきせつ</rt></ruby>な<ruby>換気<rt>かんき</rt></ruby>や<ruby>漏<rt>も</rt></ruby>れは<ruby>死亡事故<rt>しぼうじこ</rt></ruby>につながり、<ruby>電気<rt>でんき</rt></ruby>の「<ruby>漏電<rt>ろうでん</rt></ruby>」は<ruby>火災<rt>かさい</rt></ruby>や<ruby>感電<rt>かんでん</rt></ruby>など<ruby>重大<rt>じゅうだい</rt></ruby>な<ruby>災害<rt>さいがい</rt></ruby>につながるため、<ruby>厳格<rt>げんかく</rt></ruby>な<ruby>保安基準<rt>ほあんきじゅん</rt></ruby>が<ruby>定<rt>さだ</rt></ruby>められている。",
        "<ruby>屋内<rt>おくない</rt></ruby>でガス<ruby>機器<rt>きき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>うときは、<ruby>窓<rt>まど</rt></ruby>をすべて<ruby>閉<rt>し</rt></ruby>め<ruby>切<rt>き</rt></ruby>って<ruby>換気扇<rt>かんきせん</rt></ruby>も<ruby>止<rt>と</rt></ruby>めて<ruby>作業<rt>さぎょう</rt></ruby>しなければならない。",
        "<ruby>濡<rt>ぬ</rt></ruby>れた<ruby>手<rt>て</rt></ruby>で<ruby>高圧<rt>こうあつ</rt></ruby>の<ruby>電気<rt>でんき</rt></ruby>コードや<ruby>傷<rt>きず</rt></ruby>のあるケーブルを<ruby>触<rt>さわ</rt></ruby>っても、<ruby>感電<rt>かんでん</rt></ruby>する<ruby>危険<rt>きけん</rt></ruby>はない。",
        "<ruby>電気工事<rt>でんきこうじ</rt></ruby>は<ruby>資格<rt>しかく</rt></ruby>がなくても、<ruby>誰<rt>だれ</rt></ruby>でも<ruby>自分<rt>じぶん</rt></ruby>の<ruby>判断<rt>はんだん</rt></ruby>で<ruby>自由<rt>じゆう</rt></ruby>に<ruby>電線<rt>でんせん</rt></ruby>を<ruby>切断<rt>せつだん</rt></ruby>・<ruby>接続<rt>せつぞく</rt></ruby>してよい。"
      ],
      answer: 0,
      hintId: "Kebocoran gas memicu keracunan lemas, dan kebocoran arus listrik (Rouden) memicu kebakaran & sengatan listrik fatal.",
      hintNe: "ग्यास चुहावटले ज्यान जान सक्छ र बिजुली सर्टले आगो लाग्ने तथा करेन्ट लाग्ने ठूलो जोखिम हुन्छ।",
      expJa: "ガス漏れや不完全燃焼、電気の漏電による感電・火災を防ぐため、厳格な保安基準が定められています（テキストp.23）。",
      expId: "Ventilasi mutlak dijaga saat bekerja dekat gas, dan hindari kebocoran listrik dari kabel rusak.",
      expNe: "ग्यास र बिजुलीको असावधानीले ज्यान जाने भएकाले कडा सुरक्षा मापदण्ड अपनाउनुपर्छ।"
    },
    {
      id: 10,
      cat: "2.14〜2.17 通信・電波・航空・駐車場法 (p.24-25)",
      q: "<ruby>現場<rt>げんば</rt></ruby>での **<ruby>無線機<rt>むせんき</rt></ruby>、クレーン、ドローン、<ruby>車両管理<rt>しゃりょうかんり</rt></ruby>の ルール**として、**<ruby>誤<rt>あやま</rt></ruby>っているもの**は どれですか。",
      options: [
        "<ruby>海外製<rt>かいがいせい</rt></ruby>で<ruby>日本<rt>にほん</rt></ruby>の<ruby>認可<rt>にんか</rt></ruby>がないトランシーバーを<ruby>無免許<rt>むめんきょ</rt></ruby>で<ruby>自由<rt>じゆう</rt></ruby>に<ruby>使<rt>つか</rt></ruby>っても、<ruby>電波法<rt>でんぱほう</rt></ruby>の<ruby>違反<rt>いはん</rt></ruby>にはならない。",
        "<ruby>地表<rt>ちひょう</rt></ruby>または<ruby>水面<rt>すいめん</rt></ruby>より「60m<ruby>以上<rt>いじょう</rt></ruby>」の<ruby>高<rt>たか</rt></ruby>さの<ruby>物件<rt>ぶっけん</rt></ruby>（クレーンなど）には、<ruby>航空障害灯<rt>こうくうしょうがいとう</rt></ruby>を<ruby>設置<rt>せっち</rt></ruby>しなければならない。",
        "<ruby>重量<rt>じゅうりょう</rt></ruby>が「100g<ruby>以上<rt>いじょう</rt></ruby>」のドローン（<ruby>無人航空機<rt>むじんこうくうき</rt></ruby>）は<ruby>登録<rt>とうろく</rt></ruby>が<ruby>義務化<rt>ぎむか</rt></ruby>されており、<ruby>飲酒飛行<rt>いんしゅひこう</rt></ruby>や<ruby>夜間飛行<rt>やかんひこう</rt></ruby>は<ruby>禁止<rt>きんし</rt></ruby>されている。",
        "<ruby>駐車場<rt>ちゅうしゃじょう</rt></ruby>の<ruby>工事<rt>こうじ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>工事開始前<rt>こうじかいしまえ</rt></ruby>に<ruby>自治体<rt>じちたい</rt></ruby>に<ruby>届<rt>とど</rt></ruby>け<ruby>出<rt>で</rt></ruby>をしなければならない。"
      ],
      answer: 0,
      hintId: "Transceiver buatan luar negeri tanpa sertifikasi resmi Jepang dilarang keras oleh UU Gelombang Radio (Denpa-hou).",
      hintNe: "जापानमा प्रमाणीकरण नभएका विदेशी वाकीटकी प्रयोग गर्नु कानुनी अपराध हो।",
      expJa: "電波法により認可のないトランシーバーの使用は違法です。60m以上の航空障害灯、100g以上のドローン登録も重要です（テキストp.24-25）。",
      expId: "Radio/HT tanpa sertifikasi Jepang dilarang digunakan. Derek >60m wajib lampu peringatan udara, drone >100g wajib daftar.",
      expNe: "जापानमा प्रमाणीकरण नभएका वायरलेस चलाउन पाइँदैन। ६० मिटरमाथिको संरचनामा बत्ती र १०० ग्राममाथिका ड्रोन दर्ता अनिवार्य छ।"
    }
  ]
};
