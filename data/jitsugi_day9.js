const CURRENT_QUIZ_DATA = {
  title: "実技⑨：【本番直前】<ruby>実技判断等試験<rt>じつぎはんだんとうしけん</rt></ruby> <ruby>ファイナル総合模試<rt>そうごうもし</rt></ruby>（本番形式 20問）",
  key: "score_jitsugi_9",
  passScore: 70,
  questions: [
    {
      cat: "第5章 計測器（P.100）",
      q: "建設現場において、敷地や構造物の高低差（レベル）を測定する際、望遠鏡内の十字線で標尺（スタッフ）の目盛りを水平視準して高さを読み取る測量機器は何ですか。",
      q_id: "Alat ukur survei apakah yang digunakan untuk membidik rambu ukur (staff) secara horizontal guna mengukur beda tinggi tanah atau struktur?",
      q_ne: "जमिन वा संरचनाको उचाइको फरक (लेभल) नाप्न टेलिस्कोपबाट तेर्सो हेरेर स्टाफको अंक पढ्ने नापी यन्त्र कुन हो?",
      options: [
        { ja: "オートレベル（水準器）", id: "Auto Level (Waterpass)", ne: "अटो लेभल (वाटरपास यन्त्र)" },
        { ja: "シクネスゲージ", id: "Thickness Gauge (Pengukur Celah)", ne: "थिकनेस गेज (पातलो खाली ठाउँ नाप्ने पत्ती)" },
        { ja: "テストハンマー", id: "Test Hammer", ne: "टेस्ट ह्यामर" },
        { ja: "トルクレンチ", id: "Torque Wrench", ne: "टर्क रेन्च" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.100参照】オートレベルは標尺（スタッフ）と組み合わせて高低差や水平レベルを正確に測定する測量機器です。",
      expId: "Auto Level digunakan bersama rambu ukur (staff) untuk menentukan elevasi beda tinggi dan kerataan horizontal tanah/bangunan.",
      expNe: "अटो लेभलले जमिन कति अग्लो-होचो छ भन्ने कुरा स्टाफ रडसँग मिलाएर सही नाप दिन्छ।"
    },
    {
      cat: "第5章 足場部材（P.103）",
      q: "単管足場やくさび緊結式足場において、作業床の周囲に取り付けて工具やボルト・資材の階下への落下を防ぐ保護板は何ですか。",
      q_id: "Papan pengaman apakah yang wajib dipasang di sepanjang tepi luar lantai kerja perancah untuk mencegah benda/perkakas tertendang jatuh ke bawah?",
      q_ne: "खटमा काम गर्दा औजार वा सामान खुट्टाले ठोकिएर तल नखसोस् भनी भुइँको किनारमा लगाइने सुरक्षा तख्ता कुन हो?",
      options: [
        { ja: "幅木（はばき）", id: "Habaki (Toeboard)", ne: "हाबाकी (टो-बोर्ड / किनारको फलेक)" },
        { ja: "壁つなぎ金具", id: "Klem Pengikat Dinding", ne: "भित्तामा बाँध्ने क्ल्याम्प" },
        { ja: "ジャッキベース", id: "Jack Base", ne: "ज्याक बेस" },
        { ja: "筋交い（すじかい）", id: "Sujikai (Bracing)", ne: "सुजिकाई (छड्के डन्डी)" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.103参照】幅木は作業床の端からの物体の落下を防止するために必須の安全部材です[cite: 8]。",
      expId: "Habaki (toeboard) dipasang di tepi lantai perancah untuk menghentikan material kecil/alat agar tidak menggelinding jatuh.",
      expNe: "हाबाकीले खटको किनारबाट सामान र औजार तल खसेर मान्छेलाई लाग्नबाट रोक्छ।"
    },
    {
      cat: "第5章 鉄筋スペーサー（P.107）",
      q: "柱や梁・壁などの側面において、鉄筋と型枠の接触を防ぎ、規定の「かぶり厚さ」を均一に保つために鉄筋にはめ込む樹脂製の部材は何ですか。",
      q_id: "Spacer plastik berbentuk bundar apakah yang disematkan pada besi tulangan kolom/dinding untuk menjaga jarak selimut beton dari cetakan bekisting?",
      q_ne: "पिलर वा भित्ताको रड फर्मामा नटाँसियोस् भनेर रडमा अड्काइने गोलो प्लास्टिक स्पेसर कुन हो?",
      options: [
        { ja: "ドーナツ（プラスチックスペーサー）", id: "Donut (Spacer Plastik Bulat)", ne: "डोनट (गोलो प्लास्टिक स्पेसर)" },
        { ja: "フォームタイ", id: "Form-tie", ne: "फर्म-टाई" },
        { ja: "セパレーター", id: "Separator", ne: "सेपारेटर" },
        { ja: "パイプサポート", id: "Pipe Support", ne: "पाइप सपोर्ट" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.107参照】柱や壁の垂直鉄筋にはドーナツ型スペーサーを取り付けてかぶり厚さを確保します[cite: 12]。",
      expId: "Donut spacer plastik dipasang melingkar pada besi kolom/dinding agar posisi besi tidak menempel ke dinding bekisting.",
      expNe: "डोनट स्पेसरले पिलर र भित्तामा कंक्रीटको बाक्लो कभर (कावुरी) कायम राख्छ।"
    },
    {
      cat: "第5章 切断工具安全（P.128〜129）",
      q: "木材を切断する「携帯用電気丸のこ」を取り扱う際、キックバック（刃の跳ね返り）や巻き込まれ事故を防ぐルールとして正しいものはどれですか。",
      q_id: "Manakah aturan keselamatan yang BENAR saat menggunakan gergaji bundar listrik (portable circular saw)?",
      q_ne: "विद्युतीय हाते गोलो आरा चलाउँदा किकब्याक र बेरिने दुर्घटना रोक्न कुन नियम सही छ?",
      options: [
        { ja: "安全カバーのスムーズな自動復帰を確認し、手袋（軍手）は刃に巻き込まれる恐れがあるため着用しない", id: "Pastikan cover pengaman menutup otomatis dengan lancar, dan DILARANG memakai sarung tangan kain karena bisa tergulung pisau", ne: "सुरक्षा कभर आफैं बन्द हुन्छ कि नाई जाँच्ने, र पञ्जा ब्लेडमा बेरिने खतरा हुने भएकोले पञ्जा नलगाउने" },
        { ja: "安全カバーが邪魔なのでヒモで縛り上げて開いたまま固定する", id: "Mengikat safety cover agar selalu terbuka agar mudah memotong", ne: "कभरले डिस्टर्ब गर्यो भन्दै डोरीले बाँधेर खुल्लै राख्ने" },
        { ja: "軍手を二重にはめて回転中の刃の横を指先で押さえながら切る", id: "Memakai sarung tangan rangkap dua sambil menahan kayu dekat mata pisau", ne: "दुईवटा पञ्जा लगाएर घुमिरहेको ब्लेडको छेउमा हात राखेर काट्ने" },
        { ja: "木材がガタガタ動いて不安定な状態で一気に押し込む", id: "Mendorong kuat kayu yang bergoyang tanpa dijepit klem", ne: "काठ हल्लिइरहेकै बेला जबर्जस्ती बल गरेर काट्ने" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.128〜129参照】丸のこ使用時の安全カバー固定は絶対禁止です[cite: 34]。また、回転工具への軍手着用は巻き込まれの原因となるため禁止です[cite: 54]。",
      expId: "Cover pengaman wajib bergerak bebas otomatis. Dilarang memakai sarung tangan kain saat mengoperasikan mesin potong putar.",
      expNe: "सुरक्षा कभर बाँधेर खुल्ला राख्न हुन्न र घुम्ने मेसिन चलाउँदा पञ्जा लगाउन कडा निषेध छ।"
    },
    {
      cat: "第5章 研削工具安全（P.130）",
      q: "ディスクグラインダー（高速サンダー）を使用する際、砥石の破壊や破片の飛散から身を守る安全措置として誤っているものはどれですか。",
      q_id: "Manakah tindakan keselamatan yang SALAH saat mengoperasikan mesin gerinda tangan (disc grinder)?",
      q_ne: "डिस्क ग्राइन्डर (सान्डर) चलाउँदा ढुङ्गा फुटेर लाग्नबाट बच्न कुन काम गर्नु 'गलत' हो?",
      options: [
        { ja: "砥石がよく見えるように、ホイールカバー（安全覆い）を取り外して作業する", id: "Melepas cover pelindung mata gerinda agar pandangan mata ke titik potong lebih jelas", ne: "काटेको ठाउँ राम्ररी देखियोस् भनेर ग्राइन्डरको सुरक्षा कभर फुकालेर काम गर्ने" },
        { ja: "作業開始前に砥石にヒビ割れや欠けがないか外観点検と試運転を行う", id: "Melakukan pemeriksaan visual dan uji putar tanpa beban sebelum mulai bekerja", ne: "काम थाल्नुअघि ढुङ्गा चर्किएको छ कि छैन हेर्ने र खाली घुमाएर परीक्षण गर्ने" },
        { ja: "最高使用周速度（限界回転数）に適合した正規の砥石を使用する", id: "Menggunakan batu gerinda dengan batas kecepatan putar (rpm) yang sesuai spesifikasi mesin", ne: "मेसिनको घुम्ने गतिसँग मिल्ने तोकिएको सही ढुङ्गा मात्र प्रयोग गर्ने" },
        { ja: "火花や粉じんから目を守るため保護メガネを必ず着用する", id: "Wajib memakai kacamata pelindung untuk mencegah percikan api mengenai mata", ne: "आँखामा आगोको झिल्का नपरोस् भनेर सुरक्षा चस्मा अनिवार्य लगाउने" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.130参照】グラインダーの安全カバーを取り外す行為は重大な法令違反であり、砥石破損時に破片が直撃して死亡事故につながります[cite: 36]。",
      expId: "Dilarang keras melepas safety cover gerinda. Jika batu gerinda pecah saat berputar kencang, serpihannya bisa membunuh operator.",
      expNe: "ग्राइन्डरको सुरक्षा कभर फुकाल्नु ज्यादै खतरनाक गल्ती हो। ढुङ्गा फुटेमा मान्छेको ज्यान जान्छ।"
    },
    {
      cat: "第6章 施工計画（P.146）",
      q: "工事を着工する前の施工計画において、バランスよく効率的に組み合わせるべき「施工手段の5M」の組み合わせとして正しいものはどれですか。",
      q_id: "Manakah kombinasi yang BENAR mengenai '5M Sarana Pelaksanaan Proyek' (Sekou Shudan no 5M) dalam perencanaan konstruksi?",
      q_ne: "निर्माण योजना बनाउँदा मिलाउनुपर्ने '५M का साधनहरू' को सही समूह कुन हो?",
      options: [
        { ja: "人（Men）・材料（Materials）・方法（Methods）・機械（Machinery）・資金（Money）", id: "Orang (Men), Material (Materials), Metode (Methods), Mesin (Machinery), dan Dana (Money)", ne: "मानिस (Men), सामग्री (Materials), तरिका (Methods), मेसिन (Machinery), र बजेट (Money)" },
        { ja: "安全・品質・工程・原価・環境", id: "Safety, Quality, Delivery, Cost, Environment (QCDSE)", ne: "सुरक्षा, गुणस्तर, समय, खर्च, वातावरण (QCDSE)" },
        { ja: "整理・整頓・清掃・清潔・躾", id: "Seiri, Seiton, Seisou, Seiketsu, Shitsuke (5S)", ne: "५एस (सफा र व्यवस्थित राख्ने नियम)" },
        { ja: "計画・実施・確認・見直し・報告", id: "Plan, Do, Check, Action (PDCA)", ne: "पिडिसिए (योजना, काम, जाँच र सुधार)" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.146参照】施工手段の5Mとは「人または労力（Men）、材料（Materials）、方法（Methods）、機械（Machinery）、資金（Money）」のことです。",
      expId: "5M sarana proyek: Men (pekerja), Materials (bahan), Methods (metode kerja), Machinery (alat/mesin), dan Money (anggaran).",
      expNe: "निर्माणका साधन ५M भन्नाले मानिस, सामग्री, विधि, मेसिन र पैसा हुन्।"
    },
    {
      cat: "第6章 墨出し（P.149）",
      q: "躯体工事が進むと通り芯などの基準線が柱や壁で隠れて見えなくなるのを防ぐため、一定の距離（例えば1m）を平行に離して引く補助基準線は何ですか。",
      q_id: "Apa nama garis acuan bantu yang ditarik mundur dengan jarak tetap dari as asli agar posisinya tetap bisa diukur saat dinding sudah berdiri?",
      q_ne: "पिलर वा पर्खाल बनेपछि मुख्य धर्को छोपिने हुनाले, निश्चित दूरी पर सारेर कोरिने सहायक रेखालाई के भनिन्छ?",
      options: [
        { ja: "逃げ墨（にげずみ）／ 返り墨（かえりずみ）", id: "Nige-zumi / Kaeri-zumi (Offset Line)", ne: "निगे-जुमी (पर सारेको रेखा / अफसेट लाइन)" },
        { ja: "陸墨（ろくずみ）", id: "Roku-zumi (Garis Level Horizontal)", ne: "रोकु-जुमी (तेर्सो लेभल रेखा)" },
        { ja: "地縄（じなわ）", id: "Jinawa (Tali Batas Tapak Bangunan)", ne: "जिनावा (जमिनमा कोरेको सिमाना)" },
        { ja: "水糸（みずいと）", id: "Mizu-ito (Benang Acuan)", ne: "मिजु-इतो (सिधा धागो)" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.149参照】部材の施工によって本来の位置が隠れるのを防ぐため、一定寸法離して引いておく線を「逃げ墨（返り墨）」と呼びます。",
      expId: "Nige-zumi adalah garis acuan cadangan yang digeser dengan jarak pasti agar tukang tetap punya patokan ukur.",
      expNe: "मुख्य रेखा छोपिने भएकोले १ मिटर पर सारेर कोरिने सहायक रेखालाई 'निगे-जुमी' भनिन्छ।"
    },
    {
      cat: "第6章 足場安全（P.150〜151）",
      q: "足場の倒壊・沈下事故を防ぐための施工管理として、最も適切な判断はどれですか。",
      q_id: "Manakah tindakan pencegahan yang PALING TEPAT untuk mencegah perancah amblas atau roboh saat didirikan?",
      q_ne: "खट भासिने वा ढल्ने दुर्घटना रोक्न कुन काम गर्नु सबैभन्दा उपयुक्त हुन्छ?",
      options: [
        { ja: "地盤を締め固めて敷板を敷き、ベース金具を釘止めし、建地の足元を根がらみでつなぎ、建物と壁つなぎで固定する", id: "Padatkan tanah, pasang papan alas, paku pelat base, pasang pipa pengikat bawah (negarami), dan pasang kabe-tsunagi ke dinding", ne: "जमिन कुटेर फलेक ओछ्याउने, बेस प्लेट किल्लाले ठोक्ने, मुनि नेगारामीले बाँध्ने र भित्तामा काबे-चुनागीले कस्ने" },
        { ja: "柔らかいぬかるみの上に直接ベース金具を置き、釘は打たずに作業する", id: "Menaruh base plate langsung di atas tanah becek tanpa dipaku", ne: "हिलो माटोमाथि सिधै प्लेट राख्ने र किल्ला नठोक्ने" },
        { ja: "作業通路が狭くなるため、足場の筋交い（すじかい）をすべて撤去する", id: "Melepas seluruh pipa silang (sujikai) agar perancah terasa longgar", ne: "अप्ठ्यारो भयो भन्दै छड्के डन्डी (सुजिकाई) सबै फुकाल्ने" },
        { ja: "壁つなぎは工事の邪魔になるため、建物が完成するまで1箇所も取り付けない", id: "Tidak memasang pengikat dinding sama sekali agar tidak mengganggu", ne: "काममा बाधा पुग्छ भन्दै भित्तामा कतै पनि नबाँध्ने" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.150〜151参照】建地が1箇所でも沈むと足場全体が倒壊します。地盤締め固め、敷板、ベース金具固定、根がらみ、筋交い、壁つなぎの徹底が不可欠です。",
      expId: "Satu tiang amblas bisa merobohkan seluruh perancah. Wajib padatkan tanah, beri shiki-ita, paku base, pasang negarami, sujikai, dan kabe-tsunagi.",
      expNe: "एउटा खुट्टा भासिए पनि पूरै खट ढल्छ। त्यसैले जमिन कुट्ने, फलेक ओछ्याउने, मुनि बाँध्ने र भित्तामा कस्ने काम अनिवार्य छ।"
    },
    {
      cat: "第6章 鉄骨工事（P.152）",
      q: "鉄骨建て方において、柱と梁を組み立てた後に「建入れ直し（たていれなおし）」を行う目的として正しいものはどれですか。",
      q_id: "Apakah tujuan dilakukannya proses 'Tateire-naoshi' (Penyetelan Ketegakan Rangka Baja) setelah tiang dan balok terpasang?",
      q_ne: "स्टिलको पिलर र बिम जोडेपछि 'तातेइरे-नाओशी (फ्रेम सोझ्याउने)' काम किन गरिन्छ?",
      options: [
        { ja: "梁を取り付けると柱が引っ張られて傾くため、ワイヤー等で引っ張って正確な垂直性を直してからボルトの本締めや溶接を行うため", id: "Karena pemasangan balok menarik tiang hingga miring, maka harus disetel vertikal sempurna dengan kawat penegang sebelum baut dikencangkan mati dan dilas", ne: "बिम जोड्दा पिलर ढल्किने हुनाले, तारले तानेर सिधा पारेपछि मात्र नट-बोल्ट कस्न र वेल्डिङ गर्नका लागि" },
        { ja: "鉄骨の表面をハンマーで叩いて塗装を剥がすため", id: "Untuk mengelupas cat besi dengan palu", ne: "हम्बरले हिर्काएर रङ खुइल्याउनका लागि" },
        { ja: "柱の高さをグラインダーで削って低くするため", id: "Untuk memotong pendek tinggi tiang dengan gerinda", ne: "पिलरको उचाइ घटाउनका लागि" },
        { ja: "建具を取り付ける位置に穴を開けるため", id: "Untuk melubangi tiang sebagai tempat kusen pintu", ne: "झ्याल-ढोका हाल्ने प्वाल पार्नका लागि" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.152参照】梁の組み込みで柱は垂直を失います。ワイヤー等で引っ張り建て入れ調整を行ってから、ナットの本締めや溶接を行います。",
      expId: "Tateire-naoshi mengoreksi tiang baja yang condong akibat tarikan balok agar kembali tegak lurus sempurna sebelum baut mati dikencangkan.",
      expNe: "बिम जोड्दा पिलर ढल्किने भएकोले तारले तानेर सिधा बनाएपछि मात्र नट-बोल्ट कसिन्छ।"
    },
    {
      cat: "第6章 鉄筋継手（P.156〜157）",
      q: "鉄筋の「ガス圧接工事」における施工管理として、最も適切な判断はどれですか。",
      q_id: "Manakah penilaian kontrol mutu yang PALING TEPAT dalam pelaksanaan pekerjaan Gas Pressure Welding (Gas Assetsu) besi beton?",
      q_ne: "रड जोड्ने 'ग्यास वेल्डिङ (आस्सेचु)' काम गर्दा कुन नियम पालना गर्नु सबैभन्दा सही हुन्छ?",
      options: [
        { ja: "端面は酸化を防ぐため圧接当日に冷間直角切断機で切断し、加圧しながら直径の約2倍の範囲を加熱して規定のふくらみを作る", id: "Potong siku ujung besi di hari kerja agar tidak teroksidasi, panaskan selebar 2 kali diameter sambil ditekan hingga terbentuk tonjolan bulat standar", ne: "काम गर्ने दिनमै मेसिनले रडको टुप्पो ९० डिग्रीमा सोझो काट्ने, चाप दिँदै रडको मोटाइको २ गुणा तताएर तोकिएको डल्लो बनाउने" },
        { ja: "切断面が赤くサビたまま、雨の中でバーナーをあててくっつける", id: "Memanaskan besi yang sudah berkarat di bawah guyuran hujan lebat", ne: "खिया लागेको रडलाई पानी परेको बेला तताएर जोड्ने" },
        { ja: "ふくらみが折れ曲がって大きな割れ目が入っていてもそのまま合格とする", id: "Meloloskan sambungan yang retak dan bengkok tanpa perlu diuji tarik", ne: "जोर्नी बाङ्गो भएको र चिरा परेको भए पनि पास गरिदिने" },
        { ja: "加圧器を使わずに手で押し合って接合する", id: "Menyambung besi hanya dengan dorongan tangan kosong tanpa alat pres", ne: "मेसिनको चाप नदिई हातले मात्र थिचेर जोड्ने" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.156〜157参照】圧接端面は当日に直角に切断し酸化を防ぎます。鉄筋径の約2倍の範囲を均等加熱し加圧して所定のふくらみを形成します。",
      expId: "Potong ujung besi tegak lurus di hari H agar tidak teroksidasi, panaskan selebar 2x diameter dengan api netral sambil ditekan hingga tonjolan memenuhi syarat uji tarik.",
      expNe: "टुप्पो सोझो काटेर सफा गर्ने, रडको मोटाइको २ गुणा तताउने र तोकिएको गोलो डल्लो बनेको छ कि छैन भनेर जाँच गर्नुपर्छ।"
    },
    {
      cat: "第6章 型枠工事（P.158〜159）",
      q: "コンクリート打設中に「型枠が側圧に耐えきれず破壊され、生コンが流れ出す事故（パンク）」を防ぐための措置として、誤っているものはどれですか。",
      q_id: "Manakah tindakan yang SALAH dalam mencegah bekisting jebol (panku) akibat tekanan samping beton basah?",
      q_ne: "ढलान गर्दा मसलाको चापले फर्मा फुट्ने र कंक्रीट बाहिर पोखिने दुर्घटना (पाङ्कु) रोक्न कुन काम गर्नु 'गलत' हो?",
      options: [
        { ja: "打設時間を短縮するため、柱や壁の型枠に高所から一気に猛スピードで生コンを流し込む", id: "Menuangkan beton dari tempat sangat tinggi dengan kecepatan luar biasa tinggi agar cepat selesai", ne: "छिटो सक्नका लागि धेरै माथिबाट एकैचोटि चर्को गतिमा कंक्रीट खन्याउने" },
        { ja: "セパレーター、フォームタイ、パイプサポートを計算された適正ピッチで強固に締め付ける", id: "Memasang separator, form-tie, dan pipe support secara kuat pada jarak rapat yang dihitung aman", ne: "सेपारेटर, फर्म-टाई र टेकोहरू नियम अनुसारको बलियो दूरीमा कस्ने" },
        { ja: "コンクリートポンプ業者と事前に打合せを行い、1時間に打ち上げる高さを適切にコントロールする", id: "Berkoordinasi dengan operator pompa beton untuk membatasi kecepatan kenaikan cor per jam", ne: "१ घण्टामा कति उचाइसम्म मात्र ढलान गर्ने भनी पम्प चालकसँग गति नियन्त्रण गर्ने" },
        { ja: "スラブ（床）下には十分な本数のパイプサポートを配置し、高さ2m以内ごとに水平つなぎを設ける", id: "Memasang pipe support lantai dalam jumlah cukup dan memasang pengikat horizontal setiap tinggi 2 meter", ne: "भुइँको मुनि प्रशस्त टेकोहरू राख्ने र २ मिटरको उचाइमा तेर्सो पाइपले बाँध्ने" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.158参照】高所から一気に急激な速度で流し込むと、許容側圧を大幅に超えて型枠が破壊（パンク）します。打設速度を適切に管理することが重要です。",
      expId: "Mengecor terlalu cepat dari tempat tinggi melipatgandakan tekanan samping hingga bekisting pecah jebol. Kecepatan cor harus dikontrol.",
      expNe: "धेरै माथिबाट हतारिएर खन्याउँदा फर्मा फुट्छ। त्यसैले गति मिलाएर बिस्तारै बराबर उचाइमा भर्नुपर्छ।"
    },
    {
      cat: "第6章 コンクリート圧送（P.160）",
      q: "コンクリートポンプ車で打設を開始する直前に、輸送管の内側を滑りやすくするために通す「先送り材（富調合モルタル等）」の取り扱いとして正しいものはどれですか。",
      q_id: "Bagaimanakah penanganan yang BENAR terhadap 'Saki-okuri-zai' (adonan pelumas pipa pompa cor) saat mulai memompa beton?",
      q_ne: "पम्प गाडीको पाइप चिप्लो बनाउन सुरुमा हालिने 'साकी-ओकुरी-जाई (सुरुवाती मसला)' लाई के गर्नुपर्छ?",
      options: [
        { ja: "型枠の中に打ち込むとコンクリートの強度や品質を低下させるため、型枠内には入れず必ず廃棄する", id: "DILARANG dimasukkan ke dalam bekisting karena merusak mutu/kekuatan beton, sehingga wajib dibuang terpisah", ne: "फर्माभित्र हालेमा ढलानको बलियोपन र गुणस्तर घट्ने भएकाले यसलाई फर्माभित्र नहाली अनिवार्य रूपमा बाहिर फाल्नुपर्छ" },
        { ja: "もったいないので一番重要な柱の根元に全量流し込む", id: "Dituangkan seluruhnya ke pangkal tiang paling penting agar tidak mubazir", ne: "खेर नजाओस् भनेर सबैभन्दा मुख्य पिलरको फेदमा खन्याउने" },
        { ja: "先送り材は水と全く同じなので、そのまま壁型枠に打ち込んで良い", id: "Boleh dimasukkan ke dinding karena sifatnya sama seperti air biasa", ne: "यो पानी जस्तै भएकाले भित्ताको फर्मामा हाल्दा केही फरक पर्दैन" },
        { ja: "作業員の手洗いや道具洗いの洗剤として使用する", id: "Digunakan sebagai sabun untuk mencuci tangan pekerja", ne: "हात धुने साबुनको रूपमा प्रयोग गर्ने" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.160参照】先送り材は輸送管の潤滑用であり骨材比率等が異なるため、型枠に打ち込むと構造強度の重大な欠陥になります。必ず型枠外へ廃棄します。",
      expId: "Saki-okuri-zai wajib dibuang dan tidak boleh masuk ke struktur karena komposisinya berbeda dan merusak kekuatan beton.",
      expNe: "पाइप सफा गर्ने र चिप्लो बनाउने सुरुको मसलाले ढलान कमजोर बनाउँछ। त्यसैले यसलाई फर्माभित्र नहाली फाल्नै पर्छ।"
    },
    {
      cat: "第6章 塗装工事（P.160〜161）",
      q: "外壁塗装工事において、塗膜の密着不良や剥がれを防ぐため、作業を行ってはならない気象条件はどれですか。",
      q_id: "Kondisi cuaca bagaimanakah di mana pekerjaan pengecatan dinding luar DILARANG keras dilakukan?",
      q_ne: "बाहिरी भित्तामा रङ लगाउँदा कुन मौसमी अवस्थामा काम गर्न कडा प्रतिबन्ध छ?",
      options: [
        { ja: "雨天時、および湿度が85%以上のとき", id: "Saat hujan, dan saat kelembapan udara mencapai 85% ke atas", ne: "पानी परेको बेला, र हावामा ओस (ह्युमिडिटी) ८५% भन्दा बढी भएको बेला" },
        { ja: "気温が20℃で快晴のとき", id: "Saat cerah dengan suhu 20°C", ne: "घाम लागेको २० डिग्रीको मौसममा" },
        { ja: "風が全くなく穏やかな春の日のとき", id: "Saat musim semi yang tenang tanpa angin", ne: "हावा नचलेको वसन्त ऋतुमा" },
        { ja: "日当たりが良く壁が乾燥しているとき", id: "Saat dinding kering terkena sinar matahari", ne: "घामले भित्ता राम्ररी सुकेको बेला" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.161参照】雨天や湿度85%以上の高湿度時は、塗料が適切に乾燥せず塗膜の白化や密着不良を起こすため施工を中止します[cite: 54]。",
      expId: "Dilarang mengecat saat hujan atau kelembapan udara >= 85% karena cat tidak bisa mengering sempurna dan pasti mengelupas.",
      expNe: "पानी परेको बेला र हावामा ओस ८५% भन्दा बढी हुँदा रङ राम्ररी सुक्दैन र पछि उप्किन्छ। त्यसैले काम रोक्नुपर्छ।"
    },
    {
      cat: "第6章 屋根・板金（P.166〜167）",
      q: "屋根工事や建築板金工事において、建物を雨水から守る「雨仕舞（あまじまい）」の設計・施工の考え方として最も適切なものはどれですか。",
      q_id: "Manakah konsep yang PALING TEPAT mengenai 'Amajizumai' (Sistem Pengaliran Air Hujan) pada pekerjaan atap dan talang seng?",
      q_ne: "छाना र जस्तापाताको काम गर्दा पानी पस्न नदिने 'अमाजिमाई (पानी निकास प्रणाली)' सम्बन्धी कुन सोच सबैभन्दा सही हो?",
      options: [
        { ja: "雨水が建物の隙間から内部に回り込まないよう、水切り板金や勾配を工夫して雨水をスムーズに雨どいや地面に受け流す構造にする", id: "Mendesain plat seng talang (mizukiri) dan kemiringan agar air hujan terarah lancar mengalir ke talang tanpa meresap masuk celah gedung", ne: "पानी घरभित्र नपसोस् भनेर जस्ताको पाता र भिरालो भाग मिलाई वर्षाको पानीलाई सजिलै पाइप वा भुइँतिर बगाइदिने संरचना बनाउने" },
        { ja: "雨水はすべて屋根の上に溜めておき、自然に蒸発するのを待つ構造にする", id: "Membuat air tergenang di atas atap hingga menguap dengan sendirinya", ne: "पानी छानामै जमेर बसोस् र आफैं सुकोस् भन्ने बनाउने" },
        { ja: "水切り板金は見た目が悪いため、壁との取り合い部分には一切金物を取り付けない", id: "Tidak memasang plat talang air karena dianggap merusak estetika", ne: "नराम्रो देखिन्छ भन्दै कुना-काप्चामा कुनै पनि पाता नहाल्ने" },
        { ja: "雨仕舞とは、雨が降ってきたら全員で作業をやめて家に帰ることである", id: "Amajizumai berarti langsung pulang ke rumah saat hujan turun", ne: "पानी पर्न थालेपछि काम छोडेर घर जाने कामलाई बुझाउँछ" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.166〜167参照】雨仕舞とは単に隙間を塞ぐだけでなく、水切り板金等を用いて雨水をスムーズに雨どいへ誘導し建物外へ受け流す知恵と構造のことです。",
      expId: "Amajizumai adalah rekayasa mengalirkan air hujan secara alami menggunakan seng penangkal (mizukiri) menuju talang agar tidak bocor.",
      expNe: "'अमाजिमाई' भन्नाले पानी रोक्ने मात्र होइन, छानामा परेको पानीलाई सहजै बगाएर पाइपबाट बाहिर फाल्ने वैज्ञानिक प्रविधि हो।"
    },
    {
      cat: "第6章 タイル工事（P.168）",
      q: "外壁タイル張り工事において、タイルの裏足にモルタルがしっかり食い込む粘着力を維持できる限界時間を何と呼びますか。",
      q_id: "Apakah istilah batas waktu penempelan keramik setelah adukan mortar dioleskan pada dinding agar tidak terjadi keramik lepas/jatuh?",
      q_ne: "भित्तामा मसला लगाएपछि टायल टाँसिसक्नुपर्ने, मसलाको टाँसिने शक्ति रहने अन्तिम समयसीमालाई के भनिन्छ?",
      options: [
        { ja: "オープンタイム", id: "Open Time (Waktu Tempel Terbuka)", ne: "ओपन टाइम (मसला लगाएपछि टाँस्ने समयसीमा)" },
        { ja: "ハーフタイム", id: "Half Time", ne: "हाफ टाइम" },
        { ja: "ランチタイム", id: "Lunch Time", ne: "लन्च टाइम" },
        { ja: "ロスタイム", id: "Loss Time", ne: "लस टाइम" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.168参照】張り付け用モルタル塗布後、タイルの接着力を保持できる許容時間を「オープンタイム」と呼びます。これを超えると剥落事故につながります。",
      expId: "Open time adalah batas waktu tempel setelah semen dioleskan. Jika melewati batas ini, semen mengering dan keramik pasti lepas jatuh.",
      expNe: "'ओपन टाइम' भन्नाले मसला लगाएपछि त्यो नसुक्दै टायल टाँसिसक्नुपर्ने समय हो। ढिलो भएमा टायल उप्किएर झर्छ।"
    },
    {
      cat: "第7章 死亡災害の型（P.181〜182）",
      q: "日本の建設業において、死亡事故の発生原因として全体の約4割を占め、最も件数が多い「事故の型」はどれですか。",
      q_id: "Di industri konstruksi Jepang, jenis kecelakaan apakah yang menempati porsi terbesar (sekitar 40%) dari seluruh kecelakaan fatal / kematian?",
      q_ne: "जापानको निर्माण क्षेत्रमा कुल मृत्यु हुने दुर्घटनाहरू मध्ये सबैभन्दा धेरै (करिब ४० प्रतिशत) हिस्सा ओगट्ने दुर्घटनाको प्रकार कुन हो?",
      options: [
        { ja: "墜落・転落（ついらく・てんらく）", id: "Jatuh dari Ketinggian / Terjatuh (Tsuiraku / Tenraku)", ne: "अग्लो ठाउँबाट खस्नु वा लड्नु (चुइराकु / तेनराकु)" },
        { ja: "熱中症（ねっちゅうしょう）", id: "Sengatan Panas (Heatstroke)", ne: "गर्मीले बेहोस हुनु (हिटस्ट्रोक)" },
        { ja: "交通事故（こうつうじこ）", id: "Kecelakaan Lalu Lintas Jalan Raya", ne: "सडक दुर्घटना" },
        { ja: "火災による火傷（かさい）", id: "Luka Bakar Akibat Kebakaran", ne: "आगोले पोल्नु" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.181〜182参照】建設業の死亡災害で最も多いのは「墜落・転落」で、全体の約40%を占めます。フルハーネスの着用徹底が最重要です。",
      expId: "Penyebab kematian nomor satu di proyek konstruksi adalah 'Jatuh dari ketinggian' (sekitar 40%). Penggunaan full harness dan pagar pengaman sangat krusial.",
      expNe: "निर्माण क्षेत्रमा ज्यान जाने दुर्घटनाहरू मध्ये सबैभन्दा धेरै करिब ४०% अग्लो ठाउँबाट खसेर हुने गर्दछ। त्यसैले सेफ्टी हार्नेस अनिवार्य छ।"
    },
    {
      cat: "第7章 安全装備（P.189）",
      q: "建設業において、フルハーネス型墜落制止用器具の装着が求められる高さ基準として正しいものはどれですか。",
      q_id: "Berapakah batas ketinggian kerja di mana penggunaan Full Body Harness diwajibkan secara ketat pada industri konstruksi Jepang?",
      q_ne: "जापानको निर्माण क्षेत्रमा 'फुल बडी सेफ्टी हार्नेस' लगाउन अनिवार्य गरिएको उचाइको मापदण्ड कति हो?",
      options: [
        { ja: "高さ5mを超える場所での作業（一般的な業種基準は6.75m超だが、建設業は5m超で義務）", id: "Ketinggian di atas 5 meter (standar umum industri 6,75m, tetapi konstruksi diperketat di atas 5m)", ne: "५ मिटरभन्दा अग्लो ठाउँमा (अन्य क्षेत्रमा ६.७५ मिटर भए पनि निर्माण क्षेत्रमा ५ मिटरमै अनिवार्य छ)" },
        { ja: "高さ50cm以上", id: "Ketinggian di atas 50 cm", ne: "५० सेन्टिमिटरभन्दा माथि" },
        { ja: "高さ100m以上", id: "Ketinggian di atas 100 meter", ne: "१०० मिटरभन्दा माथि" },
        { ja: "地下室の作業のみで、高所では着用不要", id: "Hanya di ruang bawah tanah, tidak perlu di ketinggian", ne: "जमिन मुनि मात्र, अग्लो ठाउँमा लगाउनै पर्दैन" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.189参照】一般基準は作業床高さ6.75m超ですが、墜落事故の多い建設業では「5mを超える高さ」でフルハーネスの着用が義務付けられています[cite: 54]。",
      expId: "Di industri konstruksi, batas kewajiban full body harness diperketat pada pekerjaan di ketinggian di atas 5 meter.",
      expNe: "निर्माण क्षेत्रमा धेरै दुर्घटना हुने भएकोले ५ मिटरभन्दा अग्लो ठाउँमा काम गर्दा सेफ्टी हार्नेस अनिवार्य गरिएको छ।"
    },
    {
      cat: "第7章 熱中症予防（P.190）",
      q: "夏季の現場で作業員が「めまい・立ちくらみ・大量の発汗・筋肉のけいれん」を訴えた際、職長が取るべき緊急処置として誤っているものはどれですか。",
      q_id: "Manakah tindakan yang SALAH jika seorang pekerja mengalami gejala awal heatstroke (pusing, keringat mengucur deras, dan kram otot)?",
      q_ne: "गर्मीमा कामदारलाई रिङ्गटा लाग्ने, अत्यधिक पसिना आउने र मांसपेशी बाउँडिने (हिटस्ट्रोकका लक्षण) देखिँदा गर्न नहुने 'गलत' काम कुन हो?",
      options: [
        { ja: "「根性が足りない」と叱責し、冷房のない炎天下の直射日光下で一人で作業を続けさせる", id: "Memarahinya 'kurang bermental baja' dan memaksanya terus bekerja sendirian di bawah terik matahari tanpa AC", ne: "'जाँगर चलेन' भनेर गाली गर्ने र घाममै एक्लै काम गरिरहन लगाउने" },
        { ja: "直ちに涼しい日陰や冷房の効いた休憩所に移動させ、衣服を緩めて体を休ませる", id: "Segera bawa ke tempat teduh/ber-AC yang sejuk, lalu longgarkan pakaian kerjanya", ne: "तुरुन्तै शीतल छहारी वा एसी भएको कोठामा लैजाने र कपडा खुकुलो पारेर सुताउने" },
        { ja: "首の周り、脇の下、太ももの付け根などに冷却材や氷をあてて太い血管を冷やす", id: "Kompres es/air dingin di area leher, ketiak, dan pangkal paha untuk mendinginkan aliran darah", ne: "घाँटीको वरिपरि, काखीमुनि र तिघ्राको जोर्नीमा बरफ वा चिसो पानी राखेर रगतको नसा चिस्याउने" },
        { ja: "意識がはっきりしていれば、冷たい水や塩分・スポーツドリンクを自力で飲ませる", id: "Jika korban sadar jelas, berikan air dingin, garam, atau minuman isotonik secara mandiri", ne: "होश छ भने चिसो पानी, जीवनजल वा स्पोर्ट्स ड्रिंक आफैं पिउन दिने" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.190参照】熱中症の疑いがある作業員を炎天下で放置・作業継続させることは生命の危機に直結します[cite: 54]。直ちに涼しい場所で冷却・水分補給を行います[cite: 55]。",
      expId: "Memaksa pekerja bekerja saat gejala heatstroke adalah tindakan fatal mematikan. Wajib evakuasi ke tempat dingin, kompres es, dan beri elektrolit.",
      expNe: "गर्मीमा बिरामी परेको मान्छेलाई जबर्जस्ती काम लगाउनु ज्यान मार्नु जस्तै हो। तुरुन्त चिसो ठाउँमा लगेर घाँटी र काखी चिस्याई जीवनजल दिनुपर्छ।"
    },
    {
      cat: "第7章 指差し呼称（P.192〜194）",
      q: "人間のヒューマンエラーを防ぐための「指差し呼称（しさこしょう）」の正しい動作手順として正しいものはどれですか。",
      q_id: "Manakah urutan gerakan yang BENAR saat mempraktikkan 'Pointing and Calling' (Shisashi Koshou) untuk mencegah kelalaian?",
      q_ne: "मानिसबाट हुने भुलचुक रोक्न गरिने 'तुरुन्तै औंल्याएर आवाज निकाल्ने (शिसा-कोशौ)' विधिको सही चरण कुन हो?",
      options: [
        { ja: "対象をしっかり目で見る ➔ 右手の人差し指で対象を指差す ➔ 「〇〇ヨシ！」と声に出して耳で確認する", id: "Lihat objek dengan fokus -> Tunjuk objek dengan jari telunjuk kanan -> Ucapkan lantang '...YOSHI!' dan dengarkan dengan telinga", ne: "आँखाले वस्तुलाई प्रष्ट हेर्ने -> दाहिने हातको चोर औंलाले सिधा देखाउने -> ठूलो स्वरले '...ठिक छ (योशी)!' भन्दै कानले सुन्ने" },
        { ja: "目を閉じたまま指だけを後ろに向ける", id: "Memejamkan mata sambil mengarahkan jari ke belakang", ne: "आँखा चिम्लेर पछाडितिर औंला देखाउने" },
        { ja: "声は出さずに心の中でだけつぶやく", id: "Hanya bergumam pelan di dalam hati tanpa bersuara", ne: "मुखले आवाज ननिकाली मनमनै सोच्ने" },
        { ja: "指を差したあと、すぐに工具を地面に投げ捨てる", id: "Melempar alat ke tanah setelah menunjuk", ne: "औंलाले देखाएपछि औजार भुइँमा फालिदिने" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.192〜194参照】指差し呼称は「目で見る（視覚）➔ 腕を伸ばして指差す（運動感覚）➔ 口で呼称する（発声）➔ 自分の声を耳で聴く（聴覚）」を連動させ、脳の意識レベルをクリアな状態に引き上げます。",
      expId: "Tunjuk-sebut mengintegrasikan 4 panca indra: Mata melihat target, Jari menunjuk tegas, Mulut bersuara lantang, dan Telinga mendengar verifikasi.",
      expNe: "आँखाले हेर्ने, हातले देखाउने, मुखले बोल्ने र कानले सुन्ने चारवटै इन्द्रिय सक्रिय पारेपछि दिमाग पूर्ण सचेत हुन्छ र गल्ती हुन पाउँदैन।"
    },
    {
      cat: "第7章 職長としての安全責任（P.194〜196）",
      q: "特定技能2号の職長として、「自らの班の無事故・無災害」を達成するために最も不可欠な日々の心構えはどれですか。",
      q_id: "Manakah sikap mental harian yang PALING MUTLAK bagi Shokucho pemegang visa Tokutei Ginou 2 demi mencapai Zero-Accident di kelompoknya?",
      q_ne: "तोकुतेइ गिनौ २ का एक कुशल शोकुचोले आफ्नो टोलीलाई दुर्घटनामुक्त (जिरो एक्सिडेन्ट) बनाउन सधैं मनमा राख्नुपर्ने अनिवार्य सोच कुन हो?",
      options: [
        { ja: "「安全は何よりも全てに優先する」という信念を持ち、自らルールを守って率先垂範し、作業員と対話して危険を摘み取る", id: "Memegang teguh prinsip 'Keselamatan di Atas Segalanya', memberi teladan disiplin diri, serta aktif berdialog untuk membasmi potensi bahaya", ne: "'सुरक्षा नै सबैभन्दा माथि हो' भन्ने दृढ विश्वास लिई आफैं नियम मानेर उदाहरण बन्ने, र कामदारसँग दैनिक संवाद गरी जोखिम हटाउने" },
        { ja: "納期さえ間に合えば、多少の安全ルール違反や怪我は仕方がないと割り切る", id: "Memaklumi pelanggaran K3 dan luka ringan asalkan target jadwal tercapai", ne: "काम समयमा सकिने भए थोरै नियम मिच्नु वा चोट लाग्नु सामान्य हो भनी सोच्ने" },
        { ja: "安全の注意は書類の上だけで行い、現場では作業員に完全に丸投げする", id: "Hanya tertib di atas kertas laporan dan lepas tangan membiarkan pekerja di lapangan", ne: "कागजमा मात्र सुरक्षाको कुरा देखाउने तर फिल्डमा कामदारलाई वास्तै नगर्ने" },
        { ja: "事故が起きたらすべて作業員の不注意のせいにして自分は責任を取らない", id: "Menyalahkan kecerobohan pekerja saat insiden dan lari dari tanggung jawab", ne: "दुर्घटना भएपछि सबै दोष कामदारमाथि थोपरेर आफू पानीमाथिको ओभानो बन्ने" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.195〜196参照】職長は現場の安全の最高責任者です。「生産性や利益より安全が最優先」という信念を持ち、毎日の声がけと点検で作業員の命を守り抜きます。",
      expId: "Filosofi K3: Keselamatan selalu nomor satu mengalahkan kecepatan dan biaya. Mandor harus memimpin lewat keteladanan nyata di lapangan.",
      expNe: "शोकुचो कार्यस्थलको सुरक्षाको मुख्य रक्षक हो। नाफा वा गतिभन्दा सुरक्षा सधैं अगाडि हुन्छ भन्ने कुरा व्यवहारमा देखाउनुपर्छ।"
    }
  ]
};
