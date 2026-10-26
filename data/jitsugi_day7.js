const CURRENT_QUIZ_DATA = {
  title: "実技⑦：<ruby>外装<rt>がいそう</rt></ruby>・<ruby>仕上工事<rt>しあげこうじ</rt></ruby>の<ruby>施工技術<rt>せこうぎじゅつ</rt></ruby>・<ruby>品質判断<rt>ひんしつはんだん</rt></ruby>（P.160〜178）",
  key: "score_jitsugi_7",
  passScore: 70,
  questions: [
    {
      cat: "第6章 塗装工事：下地処理と工程間隔時間（P.160〜161）",
      q: "外壁塗装工事において、塗膜の剥がれやひび割れを防ぐ施工管理として、**最も適切な判断**はどれですか。",
      q_id: "Manakah penilaian kontrol mutu yang PALING BENAR pada pekerjaan pengecatan dinding luar agar lapisan cat tidak retak atau terkelupas?",
      q_ne: "बाहिरी भित्तामा रङ लगाउँदा रङ नउप्कियोस् र नफुटोस् भन्नका लागि कुन नियम पालना गर्नु सबैभन्दा सही हुन्छ?",
      options: [
        { ja: "高圧洗浄等で汚れを落とし（ケレン）、塗料ごとの指定工程間隔時間以上を空けて乾燥させ、湿度85%以上の時は塗装を行わない", id: "Lakukan pembersihan dasar (keren), beri jeda waktu pengeringan antar lapisan sesuai spesifikasi, dan DILARANG mengecat saat kelembapan udara 85% ke atas", ne: "पहिले प्रेसर पानीले भित्ता सफा गर्ने (केरेन), तोकिएको समयसम्म सुक्न दिने र हावामा ओस (ह्युमिडिटी) ८५% भन्दा बढी हुँदा रङ नलगाउने" },
        { ja: "工期を急ぐため、雨が降って壁が濡れていても気にせず上塗り塗料を一気に塗る", id: "Tetap mengecat lapis akhir saat hujan deras agar proyek cepat selesai", ne: "छिटो सक्नका लागि पानी परेर भित्ता भिजेकै बेला पनि एकैचोटि रङ दल्ने" },
        { ja: "下塗り・中塗りは不要なので、最初の1回だけで上塗り塗料を厚く塗って終わらせる", id: "Hanya mengecat sekali tebal tanpa perlu cat dasar (primer) atau lapis kedua", ne: "प्राइमर र दोस्रो कोट नहाली सिधै एकैपटक बाक्लो रङ दलेर सक्ने" },
        { ja: "近隣の住宅や車に塗料が飛散しても、自然に雨で流れるので養生シートは張らない", id: "Tidak memasang jaring penutup karena cat yang mengenai mobil tetangga bisa hilang sendiri kena hujan", ne: "छिमेकीको घर र गाडीमा रङ छिट्टिए पनि पानीले पखाल्छ भन्दै त्रिपालले नछोप्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.160〜161参照】塗装は「ケレン（清掃・下地調整）」と「工程間隔時間（乾燥待ち時間）」の確保が必須です[cite: 53, 54]。また、雨天や湿度85%以上の高湿度時は結露や硬化不良を起こすため施工禁止です[cite: 54]。",
      expId: "Pengecatan wajib melalui pembersihan (keren), jeda kering antar lapisan, dan dilarang mengecat saat hujan/kelembapan udara >= 85%.",
      expNe: "रङ राम्ररी टाँसिनका लागि भित्ता सफा गर्ने, सुक्ने समय दिने र ओस ८५% भन्दा बढी हुँदा काम रोक्नुपर्छ।"
    },
    {
      cat: "第6章 左官工事：出隅・入隅のこて使い（P.162）",
      q: "左官工事で壁のコーナー部分を美しく仕上げる際、**「出隅（外に張り出した角）」と「入隅（内側の引っ込んだ角）」を押さえるために使い分ける「こて」の正しい組み合わせ**はどれですか。",
      q_id: "Manakah kombinasi sendok semen (kote) yang BENAR untuk meratakan sudut luar (dezumi) dan sudut dalam (irizumi) pada plesteran dinding?",
      q_ne: "भित्ता प्लास्टर गर्दा बाहिर निस्किएको कुना (देजुमी) र भित्र दबेको कुना (इरिजुमी) मिलाउन प्रयोग गरिने 'कोते (गुरमाला)' को सही जोडी कुन हो?",
      options: [
        { ja: "出隅：面引きごて ／ 入隅：切付けごて", id: "Sudut Luar (Dezumi): Menbiki-gote / Sudut Dalam (Irizumi): Kiritsuke-gote", ne: "बाहिरी कुना: मेनबिकी-गोते / भित्री कुना: किरिचुके-गोते" },
        { ja: "出隅：金づち ／ 入隅：ノミ", id: "Sudut Luar: Palu / Sudut Dalam: Pahat", ne: "बाहिरी कुना: हम्बर / भित्री कुना: छिनो" },
        { ja: "出隅：スコップ ／ 入隅：バール", id: "Sudut Luar: Sekop / Sudut Dalam: Linggis", ne: "बाहिरी कुना: बेल्चा / भित्री कुना: सबल" },
        { ja: "出隅・入隅ともに手で直接なでて仕上げる", id: "Dielus langsung menggunakan telapak tangan kosong", ne: "दुवै कुना हातले मात्र छामेर मिलाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.162写真参照】出隅の押えには「面引きごて」を使用し、入隅の押えには「切付けごて」を用いて正確で真っ直ぐな角を仕上げます[cite: 55]。",
      expId: "Menbiki-gote dipakai untuk merapikan sudut luar menonjol (dezumi), sedangkan Kiritsuke-gote dipakai khusus menyudutkan lekukan dalam (irizumi).",
      expNe: "बाहिरी कुनालाई चिल्लो बनाउन 'मेनबिकी-गोते' र भित्री कुना मिलाउन 'किरिचुके-गोते' गुरमाला प्रयोग गरिन्छ।"
    },
    {
      cat: "第6章 建築大工工事：木造軸組工法の順序（P.163〜164）",
      q: "木造在来軸組工法の建て方において、基礎の上に土台を敷いた後、**「上棟（棟上げ）」に至るまでの骨組み組立手順**として正しいものはどれですか。",
      q_id: "Manakah urutan perakitan rangka kayu (zairai jikugumi) yang BENAR mulai dari tsuchidai hingga proses 'Joutou' (Muneage)?",
      q_ne: "काठको घर बनाउँदा जगमाथि काठ (दोदाइ) राखेपछि धुरीको काठ हाल्ने (जोउतौ) सम्मको सही कामको क्रम कुन हो?",
      options: [
        { ja: "土台敷 ➔ 柱・梁・胴差の建入れ（仮筋交い） ➔ 小屋束・母屋・棟木の取付け ➔ 垂木・野地板の取付け（上棟）", id: "Pasang Tsuchidai -> Tegakkan Tiang/Balok (Kari-sujikai) -> Pasang Tiang Atap/Moya/Munagi -> Pasang Kasau (Taruki) & Papan Atap (Noji-ita) -> Joutou", ne: "दोदाइ ओछ्याउने -> पिलर र बिम जोड्ने (अस्थायी सुजिकाई) -> धुरीका टेका र मोया जोड्ने -> छानो अड्याउने काठ र फलेक ठोक्ने (जोउतौ)" },
        { ja: "野地板を地面で組み立ててから、一番最後に土台を下に差し込む", id: "Memasang papan atap di tanah lalu menyelipkan pondasi kayu paling akhir", ne: "जमिनमै छानाको फलेक ठोक्ने र अन्तिममा मुनि जगको काठ छिराउने" },
        { ja: "屋根瓦をすべて葺き終わってから、柱を立てて垂直にする", id: "Memasang genteng terlebih dahulu baru mendirikan tiang rumah", ne: "छानामा टायल छाइसकेपछि मात्र घरको पिलर उठाउने" },
        { ja: "土台の上にいきなりサッシとガラスを取り付ける", id: "Langsung memasang kusen jendela aluminium di atas pondasi kayu", ne: "काठको जगमाथि सिधै झ्याल-ढोकाका फ्रेम हाल्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.163〜164参照】土台敷➔柱・梁・胴差の建入れ（仮筋交い）➔2階軸組➔小屋束・母屋・棟木（むなぎ）の取付け➔垂木・野地板取付けまで完了した段階を「上棟（棟上げ・建前）」と呼びます[cite: 56, 57]。",
      expId: "Urutan rangka kayu: pondasi tsuchidai, tiang/balok lantai 1 & 2 dengan kari-sujikai, tiang atap koyazuka, balok bubungan munagi, kasau taruki, dan papan atap.",
      expNe: "पहिले जगको काठ, त्यसपछि पिलर-बिम, अनि धुरीको काठ र छानाको काठ ठोकेपछि 'जोउतौ' कार्य पूरा हुन्छ।"
    },
    {
      cat: "第6章 屋根・板金：南蛮漆喰と雪止め（P.166）",
      q: "日本の屋根工事における施工知識として、**正しい記述**はどれですか。",
      q_id: "Manakah pernyataan yang BENAR mengenai pengetahuan teknis konstruksi atap genteng tradisional Jepang?",
      q_ne: "जापानी परम्परागत छाना र जस्तापाता सम्बन्धी कुन भनाइ 'सही' छ?",
      options: [
        { ja: "瓦の組み合わせ部分の防水には「南蛮漆喰」を使い、積雪地域では落雪による軒の破壊を防ぐため「雪止め」金物を取り付ける", id: "Gunakan semen Nanban Shikkui untuk menutup celah sambungan genteng agar kedap air, dan pasang penahan salju (yukidome) di daerah bersalju agar atap tidak ambrol", ne: "टायलको जोर्नीबाट पानी चुहिन नदिन 'नान्बान नुन' (विशेष मसला) हालिन्छ र हिउँ पर्ने ठाउँमा हिउँ खसेर छाना नभत्कियोस् भनेर 'युकिदोमे' फलाम लगाइन्छ" },
        { ja: "瓦屋根は非常に軽いため、地震に対する耐震性の配慮は全く必要ない", id: "Genteng tanah liat sangat ringan sehingga tidak perlu mempertimbangkan gempa bumi", ne: "माटोको टायल एकदमै हलुका हुने भएकाले भूकम्पको कुनै विचार गर्नै पर्दैन" },
        { ja: "雪止め金具を取り付けると、屋根に雪が全く積もらなくなる", id: "Pemasangan yukidome membuat salju tidak bisa menempel sama sekali di atap", ne: "युकिदोमे हालेपछि छानामा पटक्कै हिउँ जम्न पाउँदैन" },
        { ja: "雨仕舞とは、屋根に穴を開けて雨水を天井裏にわざと溜めることである", id: "Amajizumai adalah membuat lubang atap agar air hujan masuk ke loteng", ne: "अमाजिमाई भन्नाले पानी घरभित्र चुहाएर सिलिङमा जम्मा गर्ने काम हो" }
      ],
      answer: 0,
      expJa: "【テキスト P.165〜166参照】瓦屋根の取り合い防水には「南蛮漆喰」を用います[cite: 58]。また、雪の多い地方では落雪で軒を壊さないよう「雪止め金具」を施工します。粘土瓦は重量があるため耐震性への配慮も重要です[cite: 58]。",
      expId: "Sambungan genteng ditambal dengan nanban-shikkui agar tidak bocor. Di daerah dingin, klem penahan salju (yukidome) wajib dipasang agar salju tidak longsor.",
      expNe: "टायलको खाली भाग 'नान्बान मोर्टार' ले बन्द गरिन्छ र हिउँ बगेर तलको भाग नभाँचियोस् भनी 'युकिदोमे' राखिन्छ।"
    },
    {
      cat: "第6章 建築板金：金属板のケガキ・曲げ（P.167）",
      q: "建築板金工事において、薄い金属板を加工する際の基本動作として、**最も適切な判断**はどれですか。",
      q_id: "Manakah prosedur kerja yang PALING TEPAT saat memotong dan menekuk plat seng tipis pada pekerjaan architectural sheet metal?",
      q_ne: "जस्तापाता (सिट मेटल) को काम गर्दा धर्को कोर्ने, काट्ने र दोब्य्राउने काममा कुन तरिका सबैभन्दा उपयुक्त हुन्छ?",
      options: [
        { ja: "ケガキ針等でできるだけ1度で線を引き、金切ばさみでケガキ線から目を離さず慎重に切り進め、切断面はやすりで滑らかにする", id: "Gores garis acuan sekali jadi, potong hati-hati tepat di atas garis tanpa melepas pandangan, lalu haluskan tepi potongan tajam dengan kikir besi", ne: "सियो जस्तो सियोले एकैपटकमा धर्को कोर्ने, कैंचीले धर्कोबाट आँखा नहटाई काट्ने, र धारिलो टुप्पोलाई रेती (रेती) ले घोटेर चिल्लो बनाउने" },
        { ja: "切断面がギザギザで鋭利な刃物のようになっていても、手袋をしているのでやすりがけは省略する", id: "Membiarkan tepi plat tajam bergerigi tanpa dikikir halus", ne: "टुप्पो धारिलो भए पनि पञ्जा लगाएको छु भन्दै रेती नलगाई छाडिदिने" },
        { ja: "金属板を曲げるときは、最初から力任せにハンマーで強打して直角に曲げる", id: "Langsung memukul sekuat tenaga dengan palu godam pada tekukan pertama", ne: "सुरुमै ठूलो घनले बेस्सरी हिर्काएर एकैचोटि दोब्य्राउन खोज्ने" },
        { ja: "同じ部材を何百枚も作る時でも、毎回定規で適当に測りながらフリーハンドで切る", id: "Memotong ratusan plat secara manual tanpa pernah membuat mal acuan (gauge)", ne: "सयौं वटा पाता काट्दा पनि कुनै फर्मा (गेज) नबनाई अन्दाजमा हातले काट्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.167参照】ケガキはできるだけ1度で行い（量産時はゲージ作成）、ケガキ線の上をハサミで慎重に切断します。切断面（バリ）はやすりで滑らかに仕上げてケガや引っ掛かりを防ぎます。",
      expId: "Gores plat satu kali tarikan, potong fokus di atas garis, dan haluskan tepi tajam (burr) dengan kikir agar tidak melukai tangan atau merusak waterproofing.",
      expNe: "धर्को प्रष्ट कोर्ने, लाइनमा ठ्याक्कै काट्ने र काटिएको धारिलो भागलाई रेतीले घोटेर चिल्लो बनाउनुपर्छ।"
    },
    {
      cat: "第6章 タイル工事：改良圧着張りと密着張り（P.168〜169）",
      q: "外壁タイルの剥離・剥落事故を確実に防ぐため、**「張り付けモルタルを下地側とタイルの裏面の両方に塗って押し付ける工法」**は何ですか。",
      q_id: "Metode penempelan keramik dinding apakah yang dilakukan dengan cara mengoleskan adukan mortar pada dinding DAN bagian belakang keramik?",
      q_ne: "टायल उप्किएर खस्न नदिन भित्ता र टायलको पछाडि दुवैतिर मसला लगाएर टाँस्ने विधिलाई के भनिन्छ?",
      options: [
        { ja: "改良圧着張り（かいりょうあっちゃくばり）", id: "Kairyou Atchakubari (Metode Perekat Ganda Dinding & Keramik)", ne: "काइर्यौ आच्छाकुबारी (दुवैतिर मसला लगाएर टाँस्ने विधि)" },
        { ja: "空洞張り", id: "Pemasangan berongga tanpa perekat", ne: "कुनै मसला नहाली टाँस्ने विधि" },
        { ja: "水洗い張り", id: "Hanya menyiram dengan air biasa", ne: "पानीले मात्र पखालेर टाँस्ने" },
        { ja: "両面テープ張り", id: "Hanya memakai double-tape kertas", ne: "कागजको टेपले मात्र टाँस्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.168〜169参照】下地だけに塗る「圧着張り」はオープンタイム管理が難しいため、下地とタイル裏面の両方にモルタルを塗る「改良圧着張り」や、振動工具を用いる「密着張り」が開発されました。",
      expId: "Kairyou Atchakubari mengoleskan mortar perekat di kedua sisi (permukaan dinding dan belakang keramik) untuk menjamin daya rekat maksimal.",
      expNe: "'काइर्यौ आच्छाकुबारी' मा भित्ता र टायल दुवैमा मसला लगाइने हुनाले टायल कहिल्यै उप्किँदैन।"
    },
    {
      cat: "第6章 内装・表装工事：石膏ボードの目地と出隅処理（P.170）",
      q: "壁や天井のクロス（壁紙）張りにおいて、下地の継ぎ目が浮き出て美観を損ねるのを防ぐため、**石膏ボードの「つなぎ目」や「出隅」に行う正しい下地処理手順**はどれですか。",
      q_id: "Manakah urutan perataan sambungan papan gypsum (gypsum board) yang BENAR sebelum wallpaper (cross) dipasang?",
      q_ne: "वालपेपर (क्रस) टाँस्नुअघि जिप्सम बोर्डको जोर्नी र बाहिरी कुना नदेखियोस् भन्नाका लागि गरिने सही पुट्टी काम कुन हो?",
      options: [
        { ja: "つなぎ目にファイバーテープ、出隅にコーナーテープを貼り、パテ処理をして乾燥後にヤスリで平滑に研磨する", id: "Tempel fiber tape di sambungan & corner tape di sudut luar, oleskan dempul/putty, lalu amplas rata setelah kering", ne: "जोर्नीमा फाइबर टेप र बाहिरी कुनामा कर्नर टेप टाँस्ने, पुट्टी लगाउने र सुकेपछि खाक्सी (रेगमाल) ले घोटेर चिल्लो बनाउने" },
        { ja: "段差があっても気にせず、ボードの上にそのまま直接糊を塗って壁紙を張る", id: "Langsung menempel wallpaper tanpa mendempul sambungan papan", ne: "खाल्डाखुल्डी भए पनि वास्ता नगरी सिधै गम लगाएर वालपेपर टाँस्ने" },
        { ja: "目地の隙間に新聞紙を丸めて詰め込んでおく", id: "Menjejali celah sambungan menggunakan remasan koran bekas", ne: "खाली ठाउँमा पुरानो अखबार कोचेर राख्ने" },
        { ja: "石膏ボードの表面をハンマーで叩いてすべて砕く", id: "Menghancurkan seluruh papan gypsum dengan palu", ne: "बोर्डको बाहिरी भागलाई हम्बरले हिर्काएर फुटाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.170参照】石膏ボードのつなぎ目はファイバーテープ、出隅にはコーナーテープを貼り、パテ処理後にサンドペーパーで研磨して完全に平滑にしてからクロスを張ります。",
      expId: "Celah gypsum board wajib diberi fiber tape, sudut luar diberi corner tape, diplamir (putty), lalu diamplas halus agar permukaan wallpaper tidak bergelombang.",
      expNe: "टेप टाँसेर पुट्टी लगाउने र सुकेपछि खाक्सीले सम्याएर मात्र वालपेपर टाँस्नुपर्छ।"
    },
    {
      cat: "第6章 サッシ工事：RC造のサッシ枠固定工法（P.173）",
      q: "鉄筋コンクリート（RC）造の建物にアルミサッシを取り付ける際、**サッシ枠を躯体に強固に固定するための正しい施工方法**はどれですか。",
      q_id: "Bagaimanakah metode standar yang BENAR dalam mengunci kusen aluminium (sash) pada dinding beton bertulang (RC)?",
      q_ne: "ढलानको भित्ता (RC) मा आल्मुनियमको झ्यालको फ्रेम (स्यास) लाई बलियोसँग कस्ने सही तरिका कुन हो?",
      options: [
        { ja: "くさびで仮止め・位置調整後、躯体に埋め込まれた鉄筋とサッシのアンカー部品を電気溶接で固定し、隙間をモルタルで埋める", id: "Ganjal baji (kusabi) untuk setel posisi, las listrik angkur kusen ke besi dinding, lalu isi celah kusen dengan adukan mortar", ne: "काठको पच्चर (कुसाबी) हालेर लेभल मिलाउने, भित्ताको रड र फ्रेमको एङ्करलाई वेल्डिङ गरी कस्ने र खाली ठाउँमा सिमेन्ट मसला भर्ने" },
        { ja: "接着剤（木工ボンド）だけでコンクリートにサッシを貼り付ける", id: "Hanya menempelkan kusen ke beton dengan lem kayu biasa", ne: "काठ टाँस्ने फेभिकोल गमले मात्र झ्याल टाँस्ने" },
        { ja: "固定用の金物は切断して捨て、窓枠を紐で縛って吊るしておく", id: "Membuang plat angkur dan hanya mengikat kusen jendela dengan tali", ne: "एङ्कर फालिदिने र झ्यालको फ्रेमलाई डोरीले बाँधेर झुन्ड्याउने" },
        { ja: "サッシと躯体の隙間には何も詰めず、風通しが良いように開けておく", id: "Membiarkan celah kusen terbuka lebar tanpa diisi mortar agar ada angin", ne: "हावा छिरोस् भनेर झ्यालको वरिपरिको खाली ठाउँमा केही पनि नभर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.173図参照】RC造では開口部にくさびを入れて高さ・出入りを微調整し、躯体の埋込み鉄筋とサッシ側アンカーをアーク溶接で一体化させた後、モルタルを隙間に充填します。",
      expId: "Kusen jendela aluminium pada gedung beton diatur posisinya dengan baji (kusabi), dilas mati ke angkur besi dinding, lalu diinjeksi mortar kedap air.",
      expNe: "कुसाबीले लेभल मिलाएपछि भित्ताको रडसँग वेल्डिङ गर्ने र वरिपरिको खाली ठाउँमा सिमेन्ट मसला कोचेर पानी रोकिन्छ।"
    },
    {
      cat: "第6章 吹付けウレタン工事：原液の保管と施工管理（P.174）",
      q: "建物の断熱工事で用いる「硬質ウレタンフォーム」の取り扱い・施工管理として、**正しい判断**はどれですか。",
      q_id: "Manakah tindakan penanganan yang BENAR dalam penyimpanan cairan kimia dan aplikasi insulasi semprot Polyurethane Foam?",
      q_ne: "घरलाई तातो-चिसोबाट जोगाउने 'पोलियुरेथेन फोम (स्प्रे इन्सुलेसन)' को केमिकल राख्ने र छर्कने सही नियम कुन हो?",
      options: [
        { ja: "原液（ポリイソシアネート・ポリオール）は水が入ると変質・破裂する恐れがあるため20℃前後で密栓貯蔵し、施工中はウレタン厚測定器で厚さを検査する", id: "Simpan cairan kimia tertutup rapat di suhu sekitar 20°C (hindari air total), dan cek ketebalan semprotan secara berkala dengan alat ukur jarum", ne: "केमिकलमा पानी परेमा फुट्ने खतरा हुने हुनाले २० डिग्रीको तापक्रममा बिर्को कसेर राख्ने र काम गर्दा मिटरले मोटाइ नाप्ने" },
        { ja: "固まりやすいので、ドラム缶の底をガスバーナーの直火で直接加熱して温める", id: "Memanaskan drum cairan kimia langsung menggunakan semburan api gas elpiji", ne: "केमिकल जम्न आँट्यो भन्दै ड्रमको मुनि सिधै ग्यास बालेर तताउने" },
        { ja: "コンクリート表面が水や油で濡れてドロドロの状態でウレタンを吹き付ける", id: "Menyemprotkan busa ke atas beton basah yang berminyak dan berlumpur", ne: "भित्तामा पानी र तेल लतपतिएकै बेला फोम स्प्रे गर्ने" },
        { ja: "ウレタンはいくら薄く吹き付けても断熱性能は全く変わらないので厚さは測定しない", id: "Ketebalan tidak perlu diukur karena semprotan tipis pun performanya sama", ne: "जतिसुकै पातलो छर्के पनि फरक पर्दैन भन्दै मोटाइ नै ननाप्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.174参照】ウレタン原液は水と反応すると二酸化炭素を放出し容器破裂の危険があるため20℃前後で保管し直火加熱は厳禁です。施工中は4〜5mおきに厚測定器で検査します。",
      expId: "Bahan kimia urethane wajib disimpan tertutup suhu ~20°C (dilarang kena air & api langsung). Ketebalan insulasi wajib diperiksa dengan alat ukur khusus.",
      expNe: "केमिकलमा पानी पर्न दिनुहुन्न र २० डिग्रीमा राख्नुपर्छ। छर्केपछि तोकिएको मोटाइ पुग्यो कि नाई मिटरले नाप्नै पर्छ।"
    },
    {
      cat: "第6章 防水工事：シート防水の工法（P.175）",
      q: "屋上などの塩ビシート防水工事において、改修工事で下地の影響を受けにくく、**「固定用ディスクに誘導加熱装置で熱を加えてシートと一体化させる工法」**は何ですか。",
      q_id: "Metode pemasangan waterproofing membran PVC apakah yang menggunakan piringan disk penahan yang dipanaskan dengan mesin induksi?",
      q_ne: "छतमा पानी चुहिन नदिन प्लास्टिक पाता ओछ्याउँदा, चक्का (डिस्क) लाई मेसिनले तताएर पातासँग टाँस्ने विधिलाई के भनिन्छ?",
      options: [
        { ja: "機械的固定工法（機械式固定法）", id: "Kikaiteki Kotei Kouhou (Metode Pengikatan Mekanis / Disk Induksi)", ne: "किकाइतेकी कोतेइ कोउहौ (मेसिनले चक्का तताएर कस्ने विधि)" },
        { ja: "砂利敷き工法", id: "Hanya menaburkan pasir dan batu kerikil di atas membran", ne: "माथिबाट ढुङ्गा-गिट्टी मात्र छर्ने विधि" },
        { ja: "泥塗り工法", id: "Melumuri atap dengan lumpur sawah", ne: "हिलो माटो मात्र दल्ने विधि" },
        { ja: "自然放置工法", id: "Membiarkan lembaran tertiup angin tanpa dikunci", ne: "नबाँधी हावामै छाडिदिने विधि" }
      ],
      answer: 0,
      expJa: "【テキスト P.175参照】「機械的固定工法」は、下地に固定ディスクを取り付け、誘導加熱装置で熱を加えて塩ビシートとディスクを一体化させる工法で、下地の湿気や汚れの影響を受けにくい特長があります。",
      expId: "Metode fiksasi mekanis (kikaiteki kotei) mengunci membran PVC menggunakan induction disc pemanas khusus sehingga tahan terhadap angin kencang.",
      expNe: "'किकाइतेकी कोतेइ विधि' मा विशेष चक्कालाई मेसिनले तताएर सिटसँग टाँसिन्छ, जसले गर्दा हावाले उडाउन पाउँदैन।"
    }
  ]
};
