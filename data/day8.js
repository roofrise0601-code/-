const CURRENT_QUIZ_DATA = {
  title: "Day 8：<ruby>現場<rt>げんば</rt></ruby>のあいさつ・<ruby>緊急時<rt>きんきゅうじ</rt></ruby>・<ruby>墨出<rt>すみだ</rt></ruby>しと<ruby>遣方<rt>やりかた</rt></ruby>（テキスト P.78〜82）",
  key: "score_gakka2_8",
  passScore: 70,
  questions: [
    {
      cat: "第4章 あいさつ（P.78）",
      q: "<ruby>日本<rt>にほん</rt></ruby>の<ruby>建設現場<rt>けんせつげんば</rt></ruby>で、<ruby>作業員<rt>さぎょういん</rt></ruby>どうしがすれ<ruby>違<rt>ちが</rt></ruby>うときや、<ruby>一日<rt>いちにち</rt></ruby>の<ruby>無事故<rt>むじこ</rt></ruby>を<ruby>祈<rt>いの</rt></ruby>って<ruby>交<rt>か</rt></ruby>わす**<ruby>最<rt>もっと</rt></ruby>も<ruby>一般的<rt>いっぱんてき</rt></ruby>なあいさつ**はどれですか。",
      q_id: "Manakah salam PALING UMUM yang diucapkan antar-pekerja konstruksi di Jepang saat berpapasan atau saling mendoakan keselamatan kerja seharian?",
      q_ne: "जापानको निर्माण कार्यस्थलमा कामदारहरू आपसमा भेट्दा वा दिनभर सुरक्षित रहन कामना गर्दा प्रयोग गरिने सबैभन्दा सामान्य अभिवादन कुन हो?",
      options: [
        { ja: "ご安全に！（ごあんぜんに）", id: "Go-anzen ni! (Semoga aman!)", ne: "गो-आन्जेन नि! (सुरक्षित रहनुहोस्!)" },
        { ja: "ご苦労さま！（ごくろうさま）", id: "Gokurousama!", ne: "गोकुरौसामा!" },
        { ja: "さようなら！", id: "Sayounara!", ne: "सायोनारा!" },
        { ja: "いただきます！", id: "Itadakimasu!", ne: "इतादाकिमासु!" }
      ],
      answer: 0,
      expJa: "【テキスト P.78参照】「ご安全に」は建設現場特有の合言葉・挨拶で、互いに安全作業を意識し合うために朝から終業まで幅広く用いられます。",
      expId: "'Go-anzen ni!' adalah salam khas lokasi konstruksi di Jepang untuk saling mengingatkan keselamatan kerja.",
      expNe: "'गो-आन्जेन नि' जापानी निर्माण कार्यस्थलको मुख्य सुरक्षा अभिवादन हो, जसले सबैलाई सुरक्षित भएर काम गर्न सम्झाउँछ।"
    },
    {
      cat: "第4章 あいさつのマナー（P.79）",
      q: "<ruby>目上<rt>めうえ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>（<ruby>所長<rt>しょちょう</rt></ruby>や<ruby>元請<rt>もとうけ</rt></ruby>の<ruby>監督<rt>かんとく</rt></ruby>）に<ruby>対<rt>たい</rt></ruby>して<ruby>使<rt>つか</rt></ruby>うあいさつとして、**<ruby>失礼<rt>しつれい</rt></ruby>にあたるため<ruby>使<rt>つか</rt></ruby>ってはならない言葉**はどれですか。",
      q_id: "Manakah ucapan yang dianggap TIDAK SOPAN jika ditujukan kepada atasan (kepala proyek atau mandor utama kontraktor)?",
      q_ne: "आफूभन्दा माथिल्लो पदका व्यक्ति (साइट म्यानेजर वा मुख्य ठेकेदार) लाई भन्दा अपमानजनक मानिने र भन्न नहुने शब्द कुन हो?",
      options: [
        { ja: "ご苦労様でした（ごくろうさまでした）", id: "Gokurousama deshita (Hanya untuk bawahan)", ne: "गोकुरौसामा देशिता (माथिल्लो व्यक्तिले तल्लोलाई मात्र भन्ने)" },
        { ja: "お疲れ様でした（おつかれさまでした）", id: "Otsukaresama deshita", ne: "ओचुकारेसामा देशिता" },
        { ja: "失礼いたします（しつれいいたします）", id: "Shitsurei itashimasu", ne: "शित्सुरेइ इताशिमासु" },
        { ja: "おはようございます", id: "Ohayou gozaimasu", ne: "ओहायौ गोजाइमासु" }
      ],
      answer: 0,
      expJa: "【テキスト P.79参照】「ご苦労様」は目上の人が目下の人をねぎらう言葉です。目上の人や元請の監督に対しては必ず「お疲れ様です」を使います。",
      expId: "'Gokurousama' hanya diucapkan oleh atasan kepada bawahan. Kepada atasan/klien harus selalu memakai 'Otsukaresama'.",
      expNe: "'गोकुरौसामा' माथिल्लो व्यक्तिले तल्लो व्यक्तिलाई भन्ने शब्द हो। सिनियर वा हाकिमलाई सधैं 'ओचुकारेसामा' भन्नुपर्छ।"
    },
    {
      cat: "第4章 事務所・詰所（P.79）",
      q: "<ruby>現場事務所<rt>げんばじむしょ</rt></ruby>や<ruby>詰所<rt>つめしょ</rt></ruby>、<ruby>他社<rt>たしゃ</rt></ruby>のエリアに<ruby>入<rt>はい</rt></ruby>るときや<ruby>出<rt>で</rt></ruby>るときに<ruby>言<rt>い</rt></ruby>うべき<ruby>礼儀<rt>れいぎ</rt></ruby>の<ruby>言葉<rt>ことば</rt></ruby>として<ruby>適切<rt>てきせつ</rt></ruby>なものはどれですか。",
      q_id: "Ucapan sopan apa yang harus dikatakan saat masuk dan keluar dari kantor proyek atau tempat istirahat?",
      q_ne: "कार्यस्थलको कार्यालय वा विश्राम कक्षमा पस्दा र निस्कँदा शिष्टाचारको रूपमा कुन शब्द बोल्नुपर्छ?",
      options: [
        { ja: "入るとき「失礼します」、出るとき「失礼しました」", id: "Saat masuk 'Shitsurei shimasu', saat keluar 'Shitsurei shimashita'", ne: "पस्दा 'शित्सुरेइ शिमासु', निस्कँदा 'शित्सुरेइ शिमाशिता'" },
        { ja: "入るとき「ご苦労様」、出るとき「どういたしまして」", id: "Saat masuk 'Gokurousama', keluar 'Douitashimashite'", ne: "पस्दा 'गोकुरौसामा', निस्कँदा 'दौइताशिमाशिते'" },
        { ja: "何も言わずに静かに出入りする", id: "Keluar masuk diam-diam tanpa berkata apa-apa", ne: "केही नबोली सुटुक्क आउने जाने" },
        { ja: "入るとき「危ない」、出るとき「安全第一」", id: "Saat masuk 'Abunai', keluar 'Anzen Daiichi'", ne: "पस्दा 'आबुनाइ', निस्कँदा 'आन्जेन दाइइची'" }
      ],
      answer: 0,
      expJa: "【テキスト P.79参照】事務所や詰所に入るときはノックして「失礼します」、退出するときは「失礼しました」と会釈するのが現場の基本マナーです。",
      expId: "Saat masuk kantor ketuk pintu dan katakan 'Shitsurei shimasu', lalu 'Shitsurei shimashita' saat pamit keluar.",
      expNe: "अफिसमा पस्दा ढकढक्याएर 'शित्सुरेइ शिमासु' र काम सकेर निस्कँदा 'शित्सुरेइ शिमाशिता' भन्नु आधारभूत शिष्टाचार हो।"
    },
    {
      cat: "第4章 緊急時の声かけ（P.80）",
      q: "<ruby>現場<rt>げんば</rt></ruby>で<ruby>足場<rt>あしば</rt></ruby>から<ruby>工具<rt>こうぐ</rt></ruby>が<ruby>落下<rt>らっか</rt></ruby>したときや、<ruby>重機<rt>じゅうき</rt></ruby>が<ruby>人<rt>ひと</rt></ruby>に<ruby>近<rt>ちか</rt></ruby>づいたときなど、**<ruby>危険<rt>きけん</rt></ruby>を<ruby>知<rt>し</rt></ruby>らせるために<ruby>大声<rt>おおごえ</rt></ruby>で<ruby>叫<rt>さけ</rt></ruby>ぶべき言葉**はどれですか。",
      q_id: "Kata apa yang harus diteriakkan sekeras-kerasnya untuk memperingatkan orang sekitar saat ada alat jatuh atau bahaya mendesak?",
      q_ne: "खटबाट औजार खस्दा वा हेभी मेसिन मानिस नजिक पुग्दा खतराको जानकारी दिन ठूलो स्वरले के कराउनुपर्छ?",
      options: [
        { ja: "「危ない！（あぶない！）」", id: "Abunai! (Awas! / Bahaya!)", ne: "आबुनाइ! (खतरा! / होसियार!)" },
        { ja: "「失礼します」", id: "Shitsurei shimasu", ne: "शित्सुरेइ शिमासु" },
        { ja: "「お疲れ様です」", id: "Otsukaresama desu", ne: "ओचुकारेसामा देसु" },
        { ja: "「すみません」", id: "Sumimasen", ne: "सुमिमासेन" }
      ],
      answer: 0,
      expJa: "【テキスト P.80参照】危険が迫った時は、敬語や前置きを考えず直ちに全員に聞こえる大声で「危ない！」または「ストップ！」と叫ぶことが命を守ります。",
      expId: "Saat bahaya mengancam, langsung berteriak 'ABUNAI!' sekeras mungkin untuk memperingatkan rekan kerja.",
      expNe: "आपतकालीन खतरामा विनम्रता खोज्ने होइन, सिधै सबैले सुन्ने गरी ठूलो स्वरमा 'आबुनाइ!' वा 'स्टप!' भनी कराउनुपर्छ।"
    },
    {
      cat: "第4章 墨出し用語（P.80）",
      q: "<ruby>設計図<rt>せっけいず</rt></ruby>の<ruby>寸法<rt>すんぽう</rt></ruby>を<ruby>実際<rt>じっさい</rt></ruby>の<ruby>床面<rt>ゆかめん</rt></ruby>や<ruby>基礎<rt>きそ</rt></ruby>に<ruby>原寸大<rt>げんすんだい</rt></ruby>で<ruby>描<rt>えが</rt></ruby>くため、<ruby>糸<rt>いと</rt></ruby>に<ruby>墨<rt>すみ</rt></ruby>をつけて<ruby>弾<rt>はじ</rt></ruby>いて<ruby>線<rt>せん</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>く<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk pekerjaan menandai garis ukuran gambar rencana secara nyata ke lantai/pondasi menggunakan benang bertinta?",
      q_ne: "नक्साको नाप अनुसार जमिन वा ढलानमा मसीयुक्त डोरी तानेर वास्तविक नापको रेखा कोर्ने कार्यलाई के भनिन्छ?",
      options: [
        { ja: "墨出し（すみだし）", id: "Penandaan garis tinta (Sumidashi)", ne: "सुमिदाशी (मसीले रेखा कोर्ने काम)" },
        { ja: "根切り（ねぎり）", id: "Penggalian tanah (Negiri)", ne: "खाल्डो खन्ने (नेगिरी)" },
        { ja: "合番（あいばん）", id: "Penjaga / pendamping kerja (Aiban)", ne: "सँगै सहयोगी बस्ने (आइबान)" },
        { ja: "ダメ穴（だめあな）", id: "Lubang sementara di lantai", ne: "अस्थायी प्वाल" }
      ],
      answer: 0,
      expJa: "【テキスト P.80参照】建物の位置・壁の中心線・基準高さを現場に実寸で記す最も基本かつ重要な作業を「墨出し」と呼びます。",
      expId: "Sumidashi (墨出し) adalah pekerjaan menggambar garis acuan ukuran nyata dari cetak biru ke permukaan lantai.",
      expNe: "'सुमिदाशी' नक्साको वास्तविक नापलाई जमिन वा ढलानमा मसीको डोरीले रेखा कोरेर देखाउने मुख्य काम हो।"
    },
    {
      cat: "第4章 墨出し用語（P.81）",
      q: "<ruby>壁<rt>かべ</rt></ruby>や<ruby>柱<rt>はしら</rt></ruby>の「<ruby>通<rt>とお</rt></ruby>り<ruby>芯<rt>しん</rt></ruby>（<ruby>中心線<rt>ちゅうしんせん</rt></ruby>）」の<ruby>真上<rt>まうえ</rt></ruby>に<ruby>線<rt>せん</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>くと<ruby>型枠<rt>かたわく</rt></ruby>などで<ruby>隠<rt>かく</rt></ruby>れてしまうため、**そこから500mmや1000mmなど<ruby>一定<rt>いってい</rt></ruby>の<ruby>距離<rt>きょり</rt></ruby>だけ<ruby>平行<rt>へいこう</rt></ruby>に<ruby>離<rt>はな</rt></ruby>して<ruby>引<rt>ひ</rt></ruby>く<ruby>線<rt>せん</rt></ruby>**を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk garis acuan yang ditarik sejajar dengan jarak tertentu (misal 500mm atau 1000mm) dari as bangunan agar tidak tertutup bekisting?",
      q_ne: "भित्ता वा पिलरको फर्मा लगाउँदा मुख्य रेखा नछोपियोस् भनेर ५०० वा १००० मिमि पर सारेर कोरिने समानान्तर रेखालाई के भनिन्छ?",
      options: [
        { ja: "逃げ墨（にげずみ／返り墨）", id: "Garis acuan geser (Nige-zumi)", ne: "निगे-जुमी (सारेर कोरिने मसीको रेखा)" },
        { ja: "地縄（じなわ）", id: "Tali pembatas tanah", ne: "सिमाना डोरी" },
        { ja: "陸墨（ろくずみ）", id: "Garis level horizontal", ne: "तेर्सो लेबल रेखा" },
        { ja: "親墨（おやずみ）", id: "Garis utama bangunan", ne: "मुख्य मूल रेखा" }
      ],
      answer: 0,
      expJa: "【テキスト P.81参照】型枠や資材が置かれても基準線を確認できるよう、一定寸法ずらして引く墨を「逃げ墨（にげずみ）」または「寄り墨」と呼びます。",
      expId: "Nige-zumi adalah garis acuan yang digeser beberapa puluh cm dari as tengah agar tetap terlihat saat konstruksi dipasang.",
      expNe: "सामान वा फर्माले मुख्य रेखा नछोपियोस् भनेर केही दूरी पर सारेर कोरिने रेखालाई 'निगे-जुमी' भनिन्छ।"
    },
    {
      cat: "第4章 墨出し用語（P.81）",
      q: "<ruby>建物<rt>たてもの</rt></ruby>の<ruby>各階<rt>かくかい</rt></ruby>の<ruby>柱<rt>はしら</rt></ruby>や<ruby>壁<rt>かべ</rt></ruby>に<ruby>引<rt>ひ</rt></ruby>かれる、**<ruby>高<rt>たか</rt></ruby>さの<ruby>基準<rt>きじゅん</rt></ruby>となる<ruby>水平<rt>すいへい</rt></ruby>な<ruby>線<rt>せん</rt></ruby>（<ruby>床仕上<rt>ゆかしあ</rt></ruby>げから1mなどの<ruby>高<rt>たか</rt></ruby>さ）**を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk garis horizontal rata air yang digambar pada dinding/kolom sebagai patokan acuan ketinggian (biasanya 1m dari lantai)?",
      q_ne: "भित्ता वा पिलरमा उचाइको मानक नाप्न कोरिने तेर्सो लेभल रेखा (भुइँबाट १ मिटरको उचाइमा कोरिने) लाई के भनिन्छ?",
      options: [
        { ja: "陸墨（ろくずみ／水平墨）", id: "Garis elevasi horizontal (Roku-zumi)", ne: "रोकु-जुमी (तेर्सो लेभल रेखा)" },
        { ja: "通芯（とおりしん）", id: "Garis as bangunan", ne: "मुख्य सेन्टर लाइन" },
        { ja: "捨てコン（すてこん）", id: "Beton lantai kerja", ne: "पातलो कच्ची कंक्रीट" },
        { ja: "天端（てんば）", id: "Permukaan paling atas", ne: "माथिल्लो सतह (तेन्बा)" }
      ],
      answer: 0,
      expJa: "【テキスト P.81参照】水平のことを現場では「陸（ろく）」と呼び、基準の高さを示す水平線を「陸墨（ろくずみ）」と呼びます。",
      expId: "Roku-zumi (陸墨) adalah garis horizontal penanda ketinggian (elevasi) yang digunakan sebagai acuan seluruh lantai.",
      expNe: "कार्यस्थलमा तेर्सो समतललाई 'रोकु' भनिन्छ, र उचाइको मानक जनाउने तेर्सो रेखालाई 'रोकु-जुमी' भनिन्छ।"
    },
    {
      cat: "第4章 遣り方用語（P.82）",
      q: "<ruby>着工直後<rt>ちゃっこうちょくご</rt></ruby>に、<ruby>設計図<rt>せっけいず</rt></ruby>どおりに<ruby>建物<rt>たてもの</rt></ruby>が<ruby>敷地<rt>しきち</rt></ruby>のどこに<ruby>建<rt>た</rt></ruby>つかを<ruby>確認<rt>かくにん</rt></ruby>するため、<ruby>地面<rt>じめん</rt></ruby>に<ruby>縄<rt>なわ</rt></ruby>やビニール<ruby>紐<rt>ひも</rt></ruby>を<ruby>張<rt>は</rt></ruby>って<ruby>建物<rt>たてもの</rt></ruby>の<ruby>外周<rt>がいしゅう</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>すことを<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk kegiatan membentangkan tali di tanah tepat di awal proyek untuk memperlihatkan letak keliling gedung di area tanah?",
      q_ne: "काम सुरु हुनासाथ जमिनमा भवन कहाँ बन्छ भनेर देखाउन वरिपरि डोरी टाँगेर भवनको घेरा देखाउने कामलाई के भनिन्छ?",
      options: [
        { ja: "地縄張り（じなわばり）", id: "Pemasangan tali batas tanah (Jinawa-bari)", ne: "जिनावा-बारी (जमिनमा डोरी टाँग्ने काम)" },
        { ja: "遣り方（やりかた）", id: "Bousplank (Yarikata)", ne: "यारिकाता (काठको घेरा लगाउने)" },
        { ja: "水糸引き（みずいとひき）", id: "Penarikan benang sipat", ne: "लेभल धागो तन्काउने" },
        { ja: "丁張（ちょうはり）", id: "Pematokan profil tanah", ne: "काठको फ्रेम बनाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.82参照】建物の配置・境界からの距離をお施主様や監督と目で見て確認するために地面に縄を張る作業を「地縄（じなわ）張り」と呼びます。",
      expId: "Jinawa-bari adalah membentangkan tali di permukaan tanah untuk memvisualisasikan posisi dan batas denah bangunan.",
      expNe: "जग्गाको सिमानाबाट भवन कति टाढा बन्छ भनी नापेर जमिनमा डोरी टाँगेर देखाउने कामलाई 'जिनावा-बारी' भनिन्छ।"
    },
    {
      cat: "第4章 遣り方用語（P.82）",
      q: "<ruby>根切<rt>ねぎ</rt></ruby>りや<ruby>基礎工事<rt>きそこうじ</rt></ruby>の<ruby>基準<rt>きじゅん</rt></ruby>とするため、<ruby>建物<rt>たてもの</rt></ruby>の<ruby>外側<rt>そとがわ</rt></ruby>に<ruby>杭<rt>くい</rt></ruby>（<ruby>木杭<rt>きぐい</rt></ruby>）を<ruby>打<rt>う</rt></ruby>ち、<ruby>水平<rt>すいへい</rt></ruby>に<ruby>貫板<rt>ぬきいた</rt></ruby>を<ruby>渡<rt>わた</rt></ruby>して<ruby>設<rt>もう</rt></ruby>ける<ruby>仮設<rt>かせつ</rt></ruby>の<ruby>枠組<rt>わくぐ</rt></ruby>みを<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa nama rangka kayu sementara berupa tiang patok dan papan horizontal yang dipasang di sekeliling bangunan sebagai acuan pondasi dan penggalian?",
      q_ne: "जग खन्ने र पिलर उठाउने मानक बनाउन भवनको बाहिर काठका किला ठोकेर तेर्सो फल्याक जोडी बनाइने अस्थायी फ्रेमलाई के भनिन्छ?",
      options: [
        { ja: "遣り方（やりかた／丁張：ちょうはり）", id: "Bousplank / Profil acuan (Yarikata)", ne: "यारिकाता / चौहारी (काठको निर्माण फ्रेम)" },
        { ja: "足場（あしば）", id: "Perancah (Scaffolding)", ne: "खट (आशिबा)" },
        { ja: "矢板（やいた）", id: "Dinding turap penahan tanah", ne: "माटो छेक्ने पाता" },
        { ja: "型枠（かたわく）", id: "Bekisting", ne: "ढलानको फर्मा" }
      ],
      answer: 0,
      expJa: "【テキスト P.82参照】掘削後も建物の中心や高さ基準が狂わないよう、外側に木杭と水貫（みずぬき）で作る仮設枠を「遣り方（やりかた）」または「丁張（ちょうはり）」と呼びます。",
      expId: "Yarikata (bousplank) dipasang di luar area galian agar garis as dan tinggi patokan tidak hilang saat tanah digali.",
      expNe: "माटो खन्दा पनि रेखा र उचाइ नहराओस् भनेर बाहिरपट्टि काठको फ्रेम बनाइन्छ जसलाई 'यारिकाता' भनिन्छ।"
    },
    {
      cat: "第4章 遣り方用語（P.82）",
      q: "「<ruby>遣り方<rt>やりかた</rt></ruby>」の<ruby>貫板<rt>ぬきいた</rt></ruby>に<ruby>釘<rt>くぎ</rt></ruby>を<ruby>打<rt>う</rt></ruby>ち、<ruby>建物<rt>たてもの</rt></ruby>の<ruby>通<rt>とお</rt></ruby>り<ruby>芯<rt>しん</rt></ruby>や<ruby>基礎<rt>きそ</rt></ruby>の<ruby>高<rt>たか</rt></ruby>さを<ruby>確認<rt>かくにん</rt></ruby>するために**ピンと<ruby>張<rt>は</rt></ruby>る<ruby>細<rt>ほそ</rt></ruby>い<ruby>黄色<rt>きいろ</rt></ruby>や<ruby>蛍光色<rt>けいこうしょく</rt></ruby>のナイロン<ruby>糸<rt>いと</rt></ruby>**を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk benang nilon tipis berwarna mencolok yang dibentangkan tegang di atas bousplank (yarikata) untuk memeriksa as bangunan dan kelurusan?",
      q_ne: "यारिकाताको काठमा काँटी ठोकेर भवनको सेन्टर लाइन र लेभल हेर्न कसिलो गरी तन्काइने चम्किलो नाइलनको धागोलाई के भनिन्छ?",
      options: [
        { ja: "水糸（みずいと）", id: "Benang sipat datar / benang ukur (Mizu-ito)", ne: "मिजु-इतो (लेभल धागो / डोरी)" },
        { ja: "介錯ロープ（かいしゃくロープ）", id: "Tali pemandu beban derek", ne: "क्रेनको सामान डोर्याउने डोरी" },
        { ja: "親綱（おやづな）", id: "Tali pengaman cantolan harness", ne: "हार्नेस अड्काउने मुख्य डोरी" },
        { ja: "番線（ばんせん）", id: "Kawat pengikat besi beton", ne: "रड बाँध्ने काँटी तार" }
      ],
      answer: 0,
      expJa: "【テキスト P.82参照】水平な高さと直線の通り芯を示すためにピンと張るナイロン糸を「水糸（みずいと）」と呼びます。作業中に足や物に引っ掛けて緩めないよう注意が必要です。",
      expId: "Mizu-ito adalah benang tipis yang ditarik kencang sebagai panduan kelurusan horizontal dan vertikal saat konstruksi.",
      expNe: "'मिजु-इतो' सीधा रेखा र तेर्सो समतल देखाउन तन्काइने धागो हो। हिँड्दा यसमा खुट्टा अल्झाएर खुकुलो बनाउनु हुँदैन।"
    }
  ]
};
