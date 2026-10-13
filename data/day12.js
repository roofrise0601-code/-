const CURRENT_QUIZ_DATA = {
  title: "Day 12：<ruby>電気<rt>でんき</rt></ruby>・<ruby>通信<rt>つうしん</rt></ruby>・<ruby>設備用語<rt>せつびようご</rt></ruby>（テキスト P.91〜94）",
  key: "score_gakka2_12",
  passScore: 70,
  questions: [
    {
      cat: "第4章 電気設備用語（P.91）",
      q: "<ruby>電気<rt>でんき</rt></ruby>を<ruby>各部屋<rt>かくへや</rt></ruby>や<ruby>回路<rt>かいろ</rt></ruby>に<ruby>分<rt>わ</rt></ruby>けて<ruby>送<rt>おく</rt></ruby>り、<ruby>漏電<rt>ろうでん</rt></ruby>や<ruby>過電流<rt>かでんりゅう</rt></ruby>（使いすぎ）のときに<ruby>電気<rt>でんき</rt></ruby>を<ruby>自動的<rt>じどうてき</rt></ruby>に<ruby>遮断<rt>しゃだん</rt></ruby>する<ruby>安全装置<rt>あんぜんそうち</rt></ruby>がまとまった<ruby>箱<rt>はこ</rt></ruby>を何と呼びますか。",
      q_id: "Apa sebutan untuk kotak panel listrik yang mendistribusikan arus ke setiap ruangan dan memutus aliran secara otomatis saat terjadi korsleting atau beban berlebih?",
      q_ne: "प्रत्येक कोठामा विद्युत वितरण गर्ने र करेन्ट लिक वा ओभरलोड हुँदा स्वचालित रूपमा बत्ती काट्ने सुरक्षा उपकरणहरू भएको बाकसलाई के भनिन्छ?",
      options: [
        { ja: "分電盤（ぶんでんばん）", id: "Bundenban (Kotak panel distribusi sekunder)", ne: "बुन्देन्बान (विद्युत वितरण प्यानल बोर्ड)" },
        { ja: "受変電設備（キュービクル）", id: "Cubicle gardu trafo tegangan tinggi", ne: "क्युबिकल (उच्च भोल्टेज ट्रान्सफर्मर)" },
        { ja: "メーターボックス", id: "Kotak meteran listrik", ne: "मिटर बक्स" },
        { ja: "プルボックス", id: "Pull box penarik kabel", ne: "पुल बक्स" }
      ],
      answer: 0,
      expJa: "【テキスト P.91参照】家庭や事務所の壁上部に取り付けられるブレーカーの集合盤を「分電盤」と呼びます。主幹ブレーカーや漏電遮断器、安全ブレーカーが収められています。",
      expId: "Bundenban adalah papan panel distribusi di dalam gedung yang berisi MCB dan ELCB untuk memutus arus saat bahaya.",
      expNe: "'बुन्देन्बान' भन्नाले भवनभित्र बिजुलीका विभिन्न सर्किटमा लाइन पठाउने र सुरक्षित राख्न ब्रेकरहरू राखिएको बोर्ड हो।"
    },
    {
      cat: "第4章 電気配線用語（P.92）",
      q: "<ruby>木造住宅<rt>もくぞうじゅうたく</rt></ruby>や<ruby>一般建築<rt>いっぱんけんちく</rt></ruby>の<ruby>屋内配線<rt>おくないはいせん</rt></ruby>で最も広く使われる、**ビニール<ruby>絶縁<rt>ぜつえん</rt></ruby>ビニールシースの<ruby>平形<rt>ひらがた</rt></ruby>ケーブル（ねずみ<ruby>色<rt>いろ</rt></ruby>の<ruby>平<rt>たい</rt></ruby>たい<ruby>電線<rt>でんせん</rt></ruby>）**を現場で何と呼びますか。",
      q_id: "Apa sebutan lapangan untuk kabel listrik pipih berinsulasi vinil warna abu-abu yang paling umum digunakan pada instalasi listrik dalam ruangan?",
      q_ne: "भवनभित्रको वाइरिङमा सबैभन्दा बढी प्रयोग हुने खरानी रङको चेप्टो बिजुलीको तार (केबल) लाई के भनिन्छ?",
      options: [
        { ja: "VVFケーブル（平形ビニルシースケーブル）", id: "Kabel VVF (Vinyl insulated vinyl sheath flat cable)", ne: "VVF केबल (चेप्टो भिनिल केबल)" },
        { ja: "同軸ケーブル（テレビ線）", id: "Kabel koaksial (Kabel antena TV)", ne: "टिभीको कोएक्सियल केबल" },
        { ja: "LANケーブル", id: "Kabel LAN internet", ne: "इन्टरनेट ल्यान केबल" },
        { ja: "キャブタイヤケーブル", id: "Kabel fleksibel cabtire", ne: "क्याबटायर केबल" }
      ],
      answer: 0,
      expJa: "【テキスト P.92参照】住宅やビルの低圧屋内配線で多用される平たい灰色の被覆線を「VVFケーブル（通称：Fケーブル）」と呼びます。",
      expId: "Kabel VVF (F-cable) adalah kabel standar instalasi listrik perumahan dan perkantoran untuk stopkontak dan lampu.",
      expNe: "'VVF केबल' घर र कार्यालयको बत्ती तथा प्लगका लागि प्रयोग गरिने सबैभन्दा मानक चेप्टो तार हो।"
    },
    {
      cat: "第4章 配管配線保護用語（P.92）",
      q: "コンクリートの<ruby>中<rt>なか</rt></ruby>や<ruby>壁<rt>かべ</rt></ruby>・<ruby>天井裏<rt>てんじょううら</rt></ruby>に<ruby>電線<rt>でんせん</rt></ruby>を<ruby>通<rt>とお</rt></ruby>すためにあらかじめ<ruby>埋<rt>う</rt></ruby>め<ruby>込<rt>こ</rt></ruby>む、**オレンジ<ruby>色<rt>いろ</rt></ruby>などの<ruby>蛇腹状<rt>じゃばらじょう</rt></ruby>のプラスチック<ruby>管<rt>かん</rt></ruby>**を何と呼びますか。",
      q_id: "Apa nama pipa fleksibel bergelombang (seperti selang oranye) yang ditanam di dalam beton/dinding sebagai jalur pelindung kabel listrik?",
      q_ne: "ढलान वा भित्ताभित्र बिजुलीका तारहरू सजिलै छिराउन पहिले नै बिछ्याइने सुन्तला रङको लचिलो पाइपलाई के भनिन्छ?",
      options: [
        { ja: "CD管／PF管（合成樹脂製可とう電線管）", id: "Pipa CD / Pipa PF (Pipa konduit fleksibel cor)", ne: "CD पाइप / PF पाइप (लचिलो कन्ड्युट पाइप)" },
        { ja: "塩ビ管（VP管）", id: "Pipa PVC keras (VP)", ne: "कडा PVC पाइप" },
        { ja: "ドレンホース", id: "Selang drain pembuangan AC", ne: "पानी फाल्ने पाइप" },
        { ja: "ガス管", id: "Pipa gas", ne: "ग्यास पाइप" }
      ],
      answer: 0,
      expJa: "【テキスト P.92参照】コンクリート埋設用の可とう管を「CD管（主にオレンジ色）」、露出・不燃箇所にも使える自消性のある可とう管を「PF管」と呼びます。",
      expId: "Pipa CD (oranye) digunakan khusus dicor beton, sedangkan pipa PF memiliki sifat tahan api untuk jalur kabel fleksibel.",
      expNe: "'CD पाइप' (सुन्तला रङ) ढलानभित्र तार हाल्न राखिन्छ र 'PF पाइप' आगो नलाग्ने लचिलो पाइप हो।"
    },
    {
      cat: "第4章 躯体貫通孔用語（P.93）",
      q: "<ruby>基礎<rt>きそ</rt></ruby>や<ruby>梁<rt>はり</rt></ruby>・<ruby>床<rt>ゆか</rt></ruby>などのコンクリートを<ruby>打設<rt>だせつ</rt></ruby>する<ruby>前<rt>まえ</rt></ruby>に、**<ruby>配管<rt>はいかん</rt></ruby>や<ruby>配線<rt>はいせん</rt></ruby>を<ruby>通<rt>とお</rt></ruby>すための「<ruby>貫通穴<rt>かんつうあな</rt></ruby>」をあらかじめ<ruby>確保<rt>かくほ</rt></ruby>しておく<ruby>筒<rt>つつ</rt></ruby>（パイプ）**を現場で何と呼びますか。",
      q_id: "Apa sebutan untuk pipa/tabung (sleeve) yang dipasang sebelum pengecoran beton agar nantinya terbentuk lubang tembus untuk pipa air atau kabel?",
      q_ne: "ढलान गर्नुअघि पाइप वा तार छिराउनका लागि पहिले नै प्वाल बनाइराख्न राखिने पाइप वा गोलो खोललाई के भनिन्छ?",
      options: [
        { ja: "スリーブ（配管スリーブ／ボイド管）", id: "Sleeve (Pipa selongsong pelubang beton)", ne: "स्लिभ / भोइड पाइप (प्वाल बनाउने खोल)" },
        { ja: "セパレーター", id: "Separator bekisting", ne: "फर्मा सेपरेटर" },
        { ja: "アンカーボルト", id: "Baut angkur", ne: "एङ्कर बोल्ट" },
        { ja: "サイコロ", id: "Spacer tahu beton", ne: "साइकोरो" }
      ],
      answer: 0,
      expJa: "【テキスト P.93参照】後からコンクリートに穴を開けると鉄筋を切断する恐れがあるため、事前に穴をあけておく部材を「スリーブ（紙製の筒はボイド管）」と呼びます。",
      expId: "Sleeve dipasang sebelum cor agar tidak perlu melubangi/merusak struktur beton yang sudah jadi di kemudian hari.",
      expNe: "'स्लिभ' ढलानपछि कंक्रीट फुटाउन नपरोस् भनेर पाइप छिराउने प्वाल बनाउन पहिल्यै राखिने खोल हो।"
    },
    {
      cat: "第4章 給排水衛生設備用語（P.93）",
      q: "<ruby>排水管<rt>はいすいかん</rt></ruby>の<ruby>途中<rt>とちゅう</rt></ruby>に<ruby>水<rt>みず</rt></ruby>をためておき、**<ruby>下水道<rt>げすいどう</rt></ruby>からの「<ruby>悪臭<rt>あくしゅう</rt></ruby>」や「<ruby>害虫<rt>がいちゅう</rt></ruby>」が<ruby>室内<rt>しつない</rt></ruby>に<ruby>入<rt>はい</rt></ruby>り<ruby>込<rt>こ</rt></ruby>むのを<ruby>防<rt>ふせ</rt></ruby>ぐ<ruby>仕組<rt>しく</rt></ruby>み（<ruby>水<rt>みず</rt></ruby>のフタ）**を何と呼びますか。",
      q_id: "Apa nama mekanisme penampung air pada pipa pembuangan yang berfungsi sebagai segel air untuk mencegah bau busuk dan serangga masuk ke ruangan?",
      q_ne: "ढलबाट आउने दुर्गन्ध र किराहरू कोठाभित्र पस्न नदिन पाइपको बीचमा पानी जमाएर राखिने सिल (ढक्कन) लाई के भनिन्छ?",
      options: [
        { ja: "排水トラップ（封水：ふうすい）", id: "Perangkap air / Trap (Water seal)", ne: "ड्रेन ट्र्याप / पानीको सिल (फुउसुई)" },
        { ja: "逆止弁（チャッキ弁）", id: "Katup satu arah (Check valve)", ne: "एकतर्फी भल्भ" },
        { ja: "減圧弁（げんあつべん）", id: "Katup pengurang tekanan", ne: "प्रेसर घटाउने भल्भ" },
        { ja: "通気弁（つうきべん）", id: "Katup ventilasi udara", ne: "भेन्टिलेसन भल्भ" }
      ],
      answer: 0,
      expJa: "【テキスト P.93参照】S字やU字の配管に水をためて臭気や虫を遮断する装置を「排水トラップ」、そこに溜まる水を「封水（ふうすい）」と呼びます。",
      expId: "Drain Trap menahan sedikit air (封水 / Fuusui) untuk mencegah bau busuk dari saluran limbah naik ke wastafel atau toilet.",
      expNe: "'ट्र्याप' ले थोरै पानी जमाएर ढलको गन्ध र कीराहरू कोठाभित्र आउनबाट पूर्ण रूपमा रोक्छ।"
    },
    {
      cat: "第4章 給水配管工法用語（P.93）",
      q: "<ruby>床下<rt>ゆかした</rt></ruby>に「ヘッダー」と<ruby>呼<rt>よ</rt></ruby>ばれる<ruby>分配器<rt>ぶんぱいき</rt></ruby>を<ruby>設<rt>もう</rt></ruby>け、そこからキッチンや<ruby>浴室<rt>よくしつ</rt></ruby>・トイレへ**<ruby>継手<rt>つぎて</rt></ruby>なしで<ruby>柔軟<rt>じゅうなん</rt></ruby>な<ruby>樹脂管<rt>じゅしかん</rt></ruby>を1<ruby>本<rt>ぽん</rt></ruby>ずつ<ruby>直接配管<rt>ちょくせつはいかん</rt></ruby>する<ruby>工法<rt>こうほう</rt></ruby>**を何と呼びますか。",
      q_id: "Metode pemipaan air apa yang menggunakan distributor header di bawah lantai dan menyalurkan pipa plastik fleksibel langsung ke keran tanpa sambungan di tengah?",
      q_ne: "भुइँमुनि एउटा मुख्य हेडर राखेर त्यहाँबाट भान्सा, बाथरुम आदिमा बीचमा कुनै जोर्नी बिना नै लचिलो प्लास्टिक पाइप सिधै लैजाने विधिलाई के भनिन्छ?",
      options: [
        { ja: "さや管ヘッダー工法", id: "Metode Sayakan Header (Sistem manifold pipa fleksibel)", ne: "सायाकान हेडर विधि (हेडर वितरण प्रणाली)" },
        { ja: "先分岐配管工法", id: "Metode percabangan konvensional", ne: "पुरानो शाखा पाइप विधि" },
        { ja: "圧送工法", id: "Metode pemompaan tekanan", ne: "प्रेसर पम्प विधि" },
        { ja: "ループ配管工法", id: "Metode pemipaan cincin (Loop)", ne: "लुप पाइप विधि" },
      ],
      answer: 0,
      expJa: "【テキスト P.93参照】更新性や水漏れリスク低減に優れた現代
