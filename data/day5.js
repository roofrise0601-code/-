const CURRENT_QUIZ_DATA = {
  title: "Day 5：<ruby>専門工事<rt>せんもんこうじ</rt></ruby>の<ruby>種類<rt>しゅるい</rt></ruby>・<ruby>構造<rt>こうぞう</rt></ruby>と<ruby>基礎工法<rt>きそこうほう</rt></ruby>（テキスト P.66〜82）",
  key: "score_gakka1_5",
  passScore: 70,
  questions: [
    {
      cat: "第5章 土工・根切り（P.66〜）",
      q: "<ruby>建物<rt>たてもの</rt></ruby>の<ruby>基礎<rt>きそ</rt></ruby>や<ruby>地下構造物<rt>ちかこうぞうぶつ</rt></ruby>を<ruby>造<rt>つく</rt></ruby>るために、<ruby>地盤<rt>じばん</rt></ruby>の<ruby>土<rt>つち</rt></ruby>を<ruby>掘<rt>ほ</rt></ruby>り<ruby>下<rt>さ</rt></ruby>げる<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk pekerjaan menggali tanah untuk membuat pondasi bangunan atau struktur bawah tanah?",
      q_ne: "भवनको जग वा जमिनमुनिको संरचना बनाउन माटो खन्ने कार्यलाई के भनिन्छ?",
      options: [
        { ja: "根切り（ねぎり）", id: "Penggalian tanah (Negiri)", ne: "जगको खाल्डो खन्ने (नेगिरी)" },
        { ja: "盛土（もりど）", id: "Penimbunan tanah (Morido)", ne: "माटो भर्ने (मोरिदो)" },
        { ja: "地縄張り（じなわばり）", id: "Pemasangan tali batas tanah", ne: "जमिनमा डोरी टाँग्ने" },
        { ja: "墨出し（すみだし）", id: "Penandaan garis (Sumidashi)", ne: "निशान लगाउने (सुमिदाशी)" }
      ],
      answer: 0,
      expJa: "【テキスト P.66参照】建物の基礎を施工するために地盤を掘削する土工事を「根切り（ねぎり）」と呼びます。周囲の崩壊を防ぐため山留め工事などを併用します。",
      expId: "Pekerjaan penggalian tanah untuk pondasi disebut 'Negiri'. Sering dipadukan dengan dinding penahan tanah.",
      expNe: "जग बनाउन जमिन खन्ने कामलाई 'नेगिरी' भनिन्छ। माटो खस्न नदिन वरपर टेको पर्खाल पनि लगाइन्छ।"
    },
    {
      cat: "第5章 山留め工事（P.68〜）",
      q: "<ruby>根切<rt>ねぎ</rt></ruby>り<ruby>工事<rt>こうじ</rt></ruby>で<ruby>深<rt>ふか</rt></ruby>く<ruby>掘削<rt>くっさく</rt></ruby>する<ruby>際<rt>さい</rt></ruby>、<ruby>周囲<rt>しゅうい</rt></ruby>の<ruby>土砂<rt>どしゃ</rt></ruby>の<ruby>崩壊<rt>ほうかい</rt></ruby>や<ruby>地下水<rt>ちかすい</rt></ruby>の<ruby>浸入<rt>しんにゅう</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐために<ruby>設置<rt>せっち</rt></ruby>する<ruby>仮設壁<rt>かせつかべ</rt></ruby>を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk dinding penahan sementara yang dipasang untuk mencegah longsornya tanah dan masuknya air saat penggalian dalam?",
      q_ne: "गहिरो खाल्डो खन्दा वरिपरिको माटो भासिन र जमिनमुनिको पानी पस्न नदिन राखिने अस्थायी पर्खाललाई के भनिन्छ?",
      options: [
        { ja: "山留め（やまどめ）", id: "Dinding penahan tanah sementara (Yamadome)", ne: "माटो रोक्ने पर्खाल (यामादोमे)" },
        { ja: "型枠（かたわく）", id: "Bekisting (Katawaku)", ne: "फर्मा / साँचो (कातावाकु)" },
        { ja: "間仕切り（まじきり）", id: "Dinding partisi", ne: "कोठा छुट्याउने पर्खाल" },
        { ja: "擁壁（ようへき）", id: "Dinding penahan permanen", ne: "स्थायी पर्खाल" }
      ],
      answer: 0,
      expJa: "【テキスト P.68参照】土砂崩壊を食い止める仮設構造物を「山留め（やまどめ）」と呼びます。親杭横矢板工法やシートパイル（鋼矢板）工法などがあります。",
      expId: "Dinding penahan sementara untuk mencegah longsor saat penggalian disebut 'Yamadome'.",
      expNe: "माटो खस्न नदिन खडा गरिने अस्थायी सुरक्षा पर्खाललाई 'यामादोमे' भनिन्छ।"
    },
    {
      cat: "第5章 基礎杭工法（P.70〜）",
      q: "<ruby>支持地盤<rt>しじじばん</rt></ruby>（<ruby>固<rt>かた</rt></ruby>い<ruby>地層<rt>ちそう</rt></ruby>）が<ruby>深<rt>ふか</rt></ruby>い<ruby>位置<rt>いち</rt></ruby>にある<ruby>場合<rt>ばあい</rt></ruby>に、<ruby>建物<rt>たてもの</rt></ruby>の<ruby>重<rt>おも</rt></ruby>さを<ruby>深<rt>ふか</rt></ruby>い<ruby>地盤<rt>じばん</rt></ruby>へ<ruby>伝<rt>つた</rt></ruby>えるために<ruby>打<rt>う</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>むものはどれですか。",
      q_id: "Apa yang dipasang untuk menyalurkan beban bangunan ke lapisan tanah keras yang berada di posisi sangat dalam?",
      q_ne: "बलियो जमिन धेरै गहिराइमा भएको बेला भवनको भार तलसम्म पुर्याउन जमिनमा के गाडिन्छ?",
      options: [
        { ja: "基礎杭（きそぐい）", id: "Tiang pancang pondasi (Kisogui)", ne: "जगको पिलर / पाइल (किसोगुई)" },
        { ja: "敷板（しきいた）", id: "Pelat alas (Shikiita)", ne: "ओछ्याउने फल्याक" },
        { ja: "胴縁（どうぶち）", id: "Rangka dinding (Dobuchi)", ne: "भित्ताको फ्रेम" },
        { ja: "笠木（かさぎ）", id: "Tutup parapet (Kasagi)", ne: "पर्खालको टुप्पोको पाता" }
      ],
      answer: 0,
      expJa: "【テキスト P.70参照】軟弱地盤で直接基礎が作れない場合、強固な支持層まで「杭（既製コンクリート杭、鋼管杭、場所打ち杭など）」を打ち込んで建物を支えます。",
      expId: "Bila lapisan tanah keras sangat dalam, tiang pancang (foundation pile) dipasang untuk menopang beban gedung.",
      expNe: "कमजोर माटो भएको ठाउँमा बलियो जमिनसम्म जगको पिलर (पाइल) गाडेर भवनको भार धान्न लगाइन्छ।"
    },
    {
      cat: "第5章 地盤改良（P.72〜）",
      q: "<ruby>軟弱<rt>なんじゃく</rt></ruby>な<ruby>地盤<rt>じばん</rt></ruby>にセメント<ruby>系<rt>けい</rt></ruby>の<ruby>固化材<rt>こかざい</rt></ruby>を<ruby>混<rt>ま</rt></ruby>ぜて<ruby>攪拌<rt>かくはん</rt></ruby>し、<ruby>地盤<rt>じばん</rt></ruby>そのものの<ruby>強度<rt>きょうど</rt></ruby>を<ruby>高<rt>たか</rt></ruby>める<ruby>工法<rt>こうほう</rt></ruby>を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa nama metode perbaikan tanah dengan mencampur bahan pemadat berbahan dasar semen ke dalam tanah lunak?",
      q_ne: "कमजोर जमिनमा सिमेन्ट मिसाएर जमिनलाई नै बलियो बनाउने विधिलाई के भनिन्छ?",
      options: [
        { ja: "地盤改良工法（じばんかいりょうこうほう）", id: "Metode perbaikan tanah (Jiban Kairyo)", ne: "जमिन सुधार विधि (जिबान खाइर्यो)" },
        { ja: "発破工法（はっぱこうほう）", id: "Metode peledakan dinamit", ne: "विस्फोटक विधि" },
        { ja: "水盛管工法（みずもりかんこうほう）", id: "Metode selang waterpass", ne: "पानीको लेभल पाइप विधि" },
        { ja: "揚重工法（ようじゅうこうほう）", id: "Metode pengangkatan beban", ne: "सामान उठाउने विधि" }
      ],
      answer: 0,
      expJa: "【テキスト P.72参照】セメント系固化材を土と混ぜ合わせる「表層改良工法」や「柱状改良工法」などがあり、地盤の不同沈下を防ぎます。",
      expId: "Metode perbaikan tanah (地盤改良) mencampur semen dan tanah untuk mencegah penurunan tanah yang tidak rata.",
      expNe: "कमजोर जमिनलाई भासिन नदिन सिमेन्ट मिसाएर जमिन बलियो बनाउने विधिलाई 'जमिन सुधार विधि' भनिन्छ।"
    },
    {
      cat: "第5章 地震対策構造（P.74〜）",
      q: "<ruby>建物<rt>たてもの</rt></ruby>の<ruby>基礎<rt>きそ</rt></ruby>と<ruby>上部構造<rt>じょうぶこうぞう</rt></ruby>の<ruby>間<rt>あいだ</rt></ruby>にゴムやダンパーなどの<ruby>装置<rt>そうち</rt></ruby>を入れ、**<ruby>地震<rt>じしん</rt></ruby>の<ruby>揺<rt>ゆ</rt></ruby>れを<ruby>建物<rt>たてもの</rt></ruby>に<ruby>直接伝<rt>ちょくせつつた</rt></ruby>えないようにする<ruby>構造<rt>こうぞう</rt></ruby>**はどれですか。",
      q_id: "Struktur apa yang memasang bantalan karet/damper antara pondasi dan bangunan agar getaran gempa tidak langsung diteruskan ke gedung?",
      q_ne: "भूकम्पको धक्का भवनमा सिधै जान नदिन जग र भवनको बीचमा रबर वा ड्याम्पर राख्ने संरचना कुन हो?",
      options: [
        { ja: "免震構造（めんしんこうぞう）", id: "Struktur isolasi gempa (Menshin)", ne: "भूकम्प पृथकीकरण संरचना (मेन्शिन)" },
        { ja: "耐震構造（たいしんこうぞう）", id: "Struktur tahan gempa (Taishin)", ne: "भूकम्प प्रतिरोधी संरचना (ताइशिन)" },
        { ja: "制震構造（せいしんこうぞう）", id: "Struktur redaman gempa (Seishin)", ne: "भूकम्प नियन्त्रण संरचना (सेइशिन)" },
        { ja: "無筋構造（むきんこうぞう）", id: "Struktur tanpa tulangan", ne: "रड बिनाको संरचना" }
      ],
      answer: 0,
      expJa: "【テキスト P.74参照】「免震（めんしん）」は積層ゴム等で建物を地面から絶縁して揺れを逃がします。「耐震」は頑丈さで耐える構造、「制震」はダンパーで揺れを吸収する構造です。",
      expId: "Menshin (免震) memisahkan bangunan dari tanah menggunakan bantalan karet agar guncangan gempa terisolasi.",
      expNe: "'मेन्शिन' ले रबरको माध्यमबाट भवनलाई जमिनको भूकम्पीय कम्पनबाट अलग राखी सुरक्षा गर्दछ।"
    },
    {
      cat: "第5章 鉄筋工事・圧接（P.76〜）",
      q: "<ruby>鉄筋<rt>てっきん</rt></ruby>の<ruby>継手<rt>つぎて</rt></ruby>において、2<ruby>本<rt>ほん</rt></ruby>の<ruby>鉄筋<rt>てっきん</rt></ruby>の<ruby>端面<rt>たんめん</rt></ruby>を<ruby>突<rt>つ</rt></ruby>き<ruby>合<rt>あ</rt></ruby>わせ、ガスバーナーで<ruby>加熱<rt>かねつ</rt></ruby>しながら<ruby>圧力<rt>あつりょく</rt></ruby>をかけて<ruby>接合<rt>せつごう</rt></ruby>する<ruby>工法<rt>こうほう</rt></ruby>はどれですか。",
      q_id: "Metode apa yang menyambung dua ujung besi beton dengan memanaskannya menggunakan pembakar gas sambil ditekan?",
      q_ne: "दुईवटा रडका छेउहरूलाई जोडेर ग्यासले तताउँदै बलपूर्वक थिचेर जोड्ने विधिलाई के भनिन्छ?",
      options: [
        { ja: "ガス圧接継手（ガスあっせつつぎて）", id: "Sambungan las tekan gas (Gas pressure welding)", ne: "ग्यास प्रेसर वेल्डिङ जोर्नी" },
        { ja: "重ね継手（かさねつぎて）", id: "Sambungan lewatan (Lap joint)", ne: "खप्ट्याउने जोर्नी" },
        { ja: "機械式継手（きかいしきつぎて）", id: "Sambungan mekanis (Coupler)", ne: "मेकानिकल जोर्नी" },
        { ja: "接着剤継手（せっちゃくざいつぎて）", id: "Sambungan perekat lem", ne: "गमले टाँस्ने जोर्नी" }
      ],
      answer: 0,
      expJa: "【テキスト P.76参照】太い異形鉄筋の代表的な接合方法が「ガス圧接（あっせつ）」です。アセチレンと酸素の炎で加熱しながら加圧し、一体化させます。",
      expId: "Gas pressure welding menyatukan dua ujung besi beton menggunakan panas gas dan tekanan kuat.",
      expNe: "बाक्लो रडहरू जोड्न ग्यासको आगोले तताएर प्रेसर दिई जोड्ने तरिकालाई 'ग्यास प्रेसर वेल्डिङ' भनिन्छ।"
    },
    {
      cat: "第5章 鉄筋圧接検査（P.77〜）",
      q: "ガス<ruby>圧接<rt>あっせつ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>った<ruby>後<rt>あと</rt></ruby>の「ふくらみ（<ruby>圧接部<rt>あっせつぶ</rt></ruby>）」の<ruby>外観検査基準<rt>がいかんけんさきじゅん</rt></ruby>として、**<ruby>誤<rt>あやま</rt></ruby>っているもの**はどれですか。",
      q_id: "Manakah yang SALAH mengenai kriteria pemeriksaan visual bagian tonjolan hasil pengelasan tekan gas (gas pressure welding)?",
      q_ne: "ग्यास प्रेसर वेल्डिङ गरिसकेपछि फुकेको भाग (जोर्नी) को बाहिरी जाँच सम्बन्धी कुन भनाइ गलत हो?",
      options: [
        { ja: "ふくらみの直径は、鉄筋径の1.4倍以上あること", id: "Diameter tonjolan harus minimal 1,4 kali diameter besi", ne: "फुकेको भागको मोटाइ रडको मोटाइभन्दा कम्तीमा १.४ गुणा बढी हुनुपर्छ" },
        { ja: "ふくらみの長さは、鉄筋径の1.2倍以上あること", id: "Panjang tonjolan harus minimal 1,2 kali diameter besi", ne: "फुकेको भागको लम्बाइ रडको मोटाइभन्दा कम्तीमा १.२ गुणा बढी हुनुपर्छ" },
        { ja: "ふくらみの中央に明確な折れ曲がりや著しい偏心があってはならない", id: "Tidak boleh ada tekukan tajam atau ketidaksejajaran parah", ne: "फुकेको भागको बीचमा बाङ्गो वा धेरै एकातर्फ ढल्केको हुनु हुँदैन" },
        { ja: "表面に深い亀裂や割れがあっても、冷めれば問題ない", id: "Retakan dalam di permukaan tidak masalah jika sudah dingin", ne: "सतहमा गहिरो चिरिएको दाग भए पनि चिसो भएपछि केही फरक पर्दैन" }
      ],
      answer: 3,
      expJa: "【テキスト P.77参照】圧接部に亀裂（クラック）やすすの混入、へこみがあるものは重大な欠陥（不合格）となります。不合格箇所は切断して再圧接する必要があります。",
      expId: "Jika ada retakan pada tonjolan las tekan, itu adalah cacat fatal (TIDAK LULUS) dan harus dipotong lalu dilas ulang.",
      expNe: "जोर्नी फुकेको भागमा चिरिएको वा फुटेको दाग छ भने त्यो फेल हुन्छ, त्यसलाई काटेर फेरि जोड्नुपर्छ।"
    },
    {
      cat: "第5章 コンクリート性質（P.79〜）",
      q: "まだ<ruby>固<rt>かた</rt></ruby>まっていない生コンクリートの「**やわらかさ（<ruby>流動性<rt>りゅうどうせい</rt></ruby>）**」を<ruby>測<rt>はか</rt></ruby>るための<ruby>現場試験<rt>げんばしけん</rt></ruby>はどれですか。",
      q_id: "Apa nama uji lapangan untuk mengukur keenceran / kelecakan (kemudahan mengalir) beton segar yang belum mengeras?",
      q_ne: "नजमेको काँचो कंक्रीट कत्तिको नरम/पातलो (बग्ने खालको) छ भनी नाप्ने परीक्षणलाई के भनिन्छ?",
      options: [
        { ja: "スランプ試験（スランプ値の測定）", id: "Uji Slump (pengukuran nilai slump)", ne: "स्लम्प परीक्षण (स्लम्प भ्यालु नाप्ने)" },
        { ja: "引張試験（ひっぱりしけん）", id: "Uji tarik", ne: "तान्ने शक्ति परीक्षण" },
        { ja: "シュミットハンマー試験", id: "Uji Schmidt Hammer", ne: "ह्यामर परीक्षण" },
        { ja: "放射線透過試験", id: "Uji radiografi sinar-X", ne: "रेडियोग्राफी परीक्षण" }
      ],
      answer: 0,
      expJa: "【テキスト P.79参照】円錐状のスランプコーンに生コンを詰め、コーンを引き抜いた時に何cm下がったかを測定する試験を「スランプ試験」と呼びます。数字が大きいほど柔らかいコンクリートです。",
      expId: "Uji slump mengukur seberapa banyak beton segar turun (dalam cm) setelah cetakan kerucut diangkat.",
      expNe: "काँचो कंक्रीटको तरलता नाप्ने विधिलाई 'स्लम्प परीक्षण' भनिन्छ। संख्या जति ठूलो हुन्छ, कंक्रीट त्यति नै नरम हुन्छ।"
    },
    {
      cat: "第5章 コンクリート打設（P.80〜）",
      q: "コンクリートを<ruby>型枠<rt>かたわく</rt></ruby>に<ruby>流<rt>なが</rt></ruby>し<ruby>込<rt>こ</rt></ruby>む<ruby>打設作業<rt>だせつさぎょう</rt></ruby>において、**<ruby>不適切<rt>ふてきせつ</rt></ruby>な行動**はどれですか。",
      q_id: "Manakah tindakan yang TIDAK TEPAT saat pengecoran beton ke dalam bekisting?",
      q_ne: "फर्मा (साँचो) भित्र कंक्रीट हाल्ने (ढलान गर्ने) कार्यमा कुन गलत हो?",
      options: [
        { ja: "コンクリートの流動性を良くするため、現場で勝手に水を足した", id: "Menambahkan air sendiri di lokasi agar beton lebih encer", ne: "सजिलोसँग बगोस् भनेर कार्यस्थलमा आफूखुसी पानी थप्ने" },
        { ja: "内部の隙間（空隙）をなくすため、棒状バイブレーターで適度に締め固めた", id: "Memadatkan dengan vibrator beton secara merata", ne: "हावाको प्वाल नहोस् भनेर भाइब्रेटर लगाएर राम्रोसँग खाँद्ने" },
        { ja: "打継ぎの時間間隔（コールドジョイント防止）を守って打ち進めた", id: "Memperhatikan interval waktu pengecoran agar tidak terbentuk cold joint", ne: "चिसो जोड (कोल्ड जोइन्ट) नबनोस् भनेर तोकिएको समयभित्र अर्को तह हाल्ने" },
        { ja: "型枠や鉄筋に急激な衝撃を与えないよう、落下の高さを低く保った", id: "Menjaga ketinggian jatuh tetap rendah agar tidak merusak bekisting", ne: "फर्मा र रड नहल्लियोस् भनेर धेरै माथिबाट नखसाली नजिकैबाट खसाल्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.80参照】現場での勝手な加水（水を足すこと）は強度の著しい低下やひび割れを招くため絶対に禁止です。適正な水セメント比を守らなければなりません。",
      expId: "DILARANG KERAS menambahkan air ke dalam beton di lokasi kerja karena dapat menurunkan kekuatan beton secara drastis.",
      expNe: "कार्यस्थलमा कंक्रीटमा आफूखुसी पानी थप्न कडा प्रतिबन्ध छ! पानी थप्दा कंक्रीटको शक्ति धेरै कमजोर हुन्छ।"
    },
    {
      cat: "第5章 コンクリート養生（P.82）",
      q: "コンクリートを<ruby>打設<rt>だせつ</rt></ruby>した<ruby>後<rt>あと</rt></ruby>、<ruby>所定<rt>しょてい</rt></ruby>の<ruby>強度<rt>きょうど</rt></ruby>が<ruby>出<rt>で</rt></ruby>るまで<ruby>保護<rt>ほご</rt></ruby>する「<ruby>養生<rt>ようじょう</rt></ruby>」について、**<ruby>適切<rt>てきせつ</rt></ruby>なもの**はどれですか。",
      q_id: "Manakah pernyataan yang TEPAT mengenai proses perawatan (curing / youjou) beton setelah dicor hingga mencapai kekuatan yang cukup?",
      q_ne: "ढलान गरेपछि तोकिएको शक्ति नआएसम्म कंक्रीटलाई जोगाउने (क्युरिङ / योउजोउ) बारे कुन उपयुक्त छ?",
      options: [
        { ja: "初期の急激な乾燥を防ぐため、散水やシートで湿潤状態を保つ", id: "Menjaga kondisi tetap lembap dengan disiram air atau ditutup terpal untuk mencegah kekeringan", ne: "छिट्टै सुक्न नदिन पानी छर्कने वा त्रिपालले छोपेर ओसिलो बनाइराख्ने" },
        { ja: "早く乾かして固めるため、直射日光に当てて強風を送る", id: "Menjemur di bawah terik matahari dan angin kencang agar cepat kering", ne: "छिटो सुकोस् भनेर चर्को घाम र हावामा खुला छोड्ने" },
        { ja: "打設した翌日には、人が歩いて硬さを足で確かめる", id: "Berjalan di atasnya keesokan harinya untuk mengecek kekerasan", ne: "भोलिपल्टै मानिस हिँडेर कत्तिको कडा भयो भनेर खुट्टाले थिचेर हेर्ने" },
        { ja: "冬場でもコンクリートが凍結する心配はないので何も覆わない", id: "Tidak menutup apa pun di musim dingin karena beton tidak akan beku", ne: "जाडोमा पनि कंक्रीट जम्दैन भनेर केही नओढाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.82参照】コンクリートは水とセメントの化学反応（水和反応）で固まります。急激な乾燥や低温凍結を防ぐため、散水やマットで湿潤養生・保温養生を行うのが鉄則です。",
      expId: "Beton membutuhkan kelembapan untuk reaksi hidrasi. Curing basah (disiram/ditutup) penting agar tidak retak.",
      expNe: "कंक्रीट पानीसँगको रासायनिक प्रतिक्रियाबाट कडा हुन्छ। चर्को घामबाट बचाउन पानी हालेर ओसिलो बनाइराख्नुपर्छ।"
    }
  ]
};
