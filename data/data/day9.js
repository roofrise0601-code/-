const CURRENT_QUIZ_DATA = {
  title: "Day 9：<ruby>土工事<rt>どこうじ</rt></ruby>・<ruby>地業<rt>じぎょう</rt></ruby>・<ruby>足場仮設<rt>あしばかせつ</rt></ruby>の<ruby>現場用語<rt>げんばようご</rt></ruby>（テキスト P.82〜86）",
  key: "score_gakka2_9",
  passScore: 70,
  questions: [
    {
      cat: "第4章 土工事用語（P.82〜83）",
      q: "<ruby>根切<rt>ねぎ</rt></ruby>り（<ruby>掘削<rt>くっさく</rt></ruby>）において、<ruby>設計図<rt>せっけいず</rt></ruby>で<ruby>指定<rt>してい</rt></ruby>された<ruby>一番深<rt>いちばんふか</rt></ruby>い<ruby>底<rt>そこ</rt></ruby>の<ruby>高<rt>たか</rt></ruby>さまで<ruby>正確<rt>せいかく</rt></ruby>に<ruby>掘<rt>ほ</rt></ruby>り、<ruby>平<rt>たい</rt></ruby>らに<ruby>整<rt>ととの</rt></ruby>えることを<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk pekerjaan meratakan permukaan dasar tanah galian tepat pada ketinggian yang ditentukan dalam gambar rencana?",
      q_ne: "नक्सामा तोकिएको अन्तिम गहिराइसम्म ठ्याक्कै खनेर जमिनको पिँधलाई समतल बनाउने कामलाई के भनिन्छ?",
      options: [
        { ja: "床付け（とこづけ）", id: "Tokozuke (Perataan dasar galian)", ne: "तोकोजुके (खाल्डोको पिँध समतल बनाउने)" },
        { ja: "埋戻し（うめもどし）", id: "Umemodoshi (Pengurukan kembali)", ne: "उमेमोदोशी (माटो पुर्ने)" },
        { ja: "水締め（みずじめ）", id: "Mizujime (Pemadatan dengan air)", ne: "मिजुजिमे (पानीले माटो बसाल्ने)" },
        { ja: "山留め（やまどめ）", id: "Yamadome (Dinding penahan tanah)", ne: "यामादोमे (माटो रोक्ने पर्खाल)" }
      ],
      answer: 0,
      expJa: "【テキスト P.82〜83参照】掘削面の最終底面を所定の高さ・平坦さに仕上げることを「床付け（とこづけ）」と呼びます。掘りすぎ（余掘り）は地盤を痛めるため厳禁です。",
      expId: "Tokozuke adalah menyelesaikan dasar galian hingga rata dan tepat sesuai elevasi rencana. Jangan menggali terlalu dalam.",
      expNe: "'तोकोजुके' भन्नाले जगको पिँधलाई तोकिएको नापमा समतल बनाउने काम बुझिन्छ। धेरै गहिरो खन्नु हुँदैन।"
    },
    {
      cat: "第4章 地業・基礎用語（P.83〜84）",
      q: "<ruby>床付<rt>とこづ</rt></ruby>けした<ruby>地盤<rt>じばん</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に、<ruby>墨出<rt>すみだ</rt></ruby>しを<ruby>正確<rt>せいかく</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>い、<ruby>型枠<rt>かたわく</rt></ruby>や<ruby>鉄筋<rt>てっきん</rt></ruby>を<ruby>水平<rt>すいへい</rt></ruby>に<ruby>組<rt>く</rt></ruby>むために<ruby>打<rt>う</rt></ruby>つ「**5〜10cmほどの<ruby>薄<rt>うす</rt></ruby>いコンクリート**」を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk lapisan beton tipis (sekitar 5-10 cm) tanpa tulangan yang dicor di atas tanah dasar untuk garis sumidashi dan dasar bekisting?",
      q_ne: "नक्साको रेखा (सुमिदाशी) कोर्न र फर्मा/रड मिलाउन माटोमाथि ढलान गरिने ५ देखि १० सेमिको पातलो कंक्रीटलाई के भनिन्छ?",
      options: [
        { ja: "捨てコン（すてコン／捨てコンクリート）", id: "Sute-con (Lantai kerja beton)", ne: "सुते-कोन (पातलो आधार कंक्रीट)" },
        { ja: "生コン（なまコン）", id: "Nama-con (Beton segar)", ne: "नामा-कोन (काँचो कंक्रीट)" },
        { ja: "耐圧盤（たいあつばん）", id: "Pelat pondasi utama", ne: "मुख्य जगको स्ल्याब" },
        { ja: "モルタル", id: "Mortar", ne: "मसला (मोर्तार)" }
      ],
      answer: 0,
      expJa: "【テキスト P.83〜84参照】構造計算上の強度としては見込まず、作業の足場・基準線（墨出し）・鉄筋のかぶり厚さ確保のために打つコンクリートを「捨てコン」と呼びます。",
      expId: "Sute-con adalah lantai kerja beton tanpa tulangan untuk mempermudah sumidashi dan perakitan besi pondasi.",
      expNe: "'सुते-कोन' संरचनात्मक बलको लागि होइन, रेखा कोर्न र रड/फर्मा मिलाएर बाँध्न बिछ्याइने पातलो कंक्रीट हो।"
    },
    {
      cat: "第4章 地業用語（P.85）",
      q: "<ruby>基礎<rt>きそ</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>割栗石<rt>わりぐりいし</rt></ruby>（<ruby>大<rt>おお</rt></ruby>きめの<ruby>砕石<rt>さいせき</rt></ruby>）を<ruby>敷<rt>し</rt></ruby>き<ruby>並<rt>なら</rt></ruby>べた<ruby>後<rt>あと</rt></ruby>、<ruby>石<rt>いし</rt></ruby>のすき<ruby>間<rt>ま</rt></ruby>を<ruby>埋<rt>う</rt></ruby>めて<ruby>締<rt>し</rt></ruby>まりをよくするために<ruby>撒<rt>ま</rt></ruby>く<ruby>細<rt>こま</rt></ruby>かい<ruby>砂利<rt>じゃり</rt></ruby>を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk kerikil halus yang ditebarkan untuk mengisi celah antar-batu belah (wariguri-ishi) pada pondasi sebelum dipadatkan?",
      q_ne: "जगमुनि ठूला ढुङ्गा (वारिगुरी-इशी) बिछ्याएपछि तिनीहरूका बीचको खाली ठाउँ भर्न छरिने मसिनो गिटीलाई के भनिन्छ?",
      options: [
        { ja: "目つぶし砂利（めつぶしじゃり）", id: "Metsubushi-jari (Kerikil pengisi celah)", ne: "मेचुबुशी-जारी (प्वाल भर्ने मसिनो गिटी)" },
        { ja: "玉石（たまいし）", id: "Batu kali bulat", ne: "गोलो ढुङ्गा" },
        { ja: "川砂（かわずな）", id: "Pasir sungai", ne: "खोलाको बालुवा" },
        { ja: "スラグ", id: "Slag besi", ne: "धातुको फोहोर (स्ल्याग)" }
      ],
      answer: 0,
      expJa: "【テキスト P.85参照】割栗石の間隙を細かい砕石・砂利で埋める作業を「目つぶし」と呼び、ランマーやローラーで転圧して強固な地業を作ります。",
      expId: "Metsubushi-jari digunakan untuk mengisi celah batu belah agar lapisan pondasi bawah menjadi padat sempurna saat dipadatkan.",
      expNe: "ढुङ्गाका बीचका प्वालहरू मसिनो गिटीले भरेर रोलर वा र्यामबले थिचेर बलियो बनाउने कामलाई 'मेचुबुशी' भनिन्छ।"
    },
    {
      cat: "第4章 土工事用語（P.83）",
      q: "<ruby>基礎<rt>きそ</rt></ruby>が<ruby>完成<rt>かんせい</rt></ruby>した<ruby>後<rt>あと</rt></ruby>、<ruby>掘削<rt>くっさく</rt></ruby>したすき<ruby>間<rt>ま</rt></ruby>に<ruby>土<rt>つち</rt></ruby>を<ruby>戻<rt>もど</rt></ruby>し<ruby>入<rt>い</rt></ruby>れる「<ruby>埋戻<rt>うめもど</rt></ruby>し」の<ruby>作業<rt>さぎょう</rt></ruby>で、**<ruby>最<rt>もっと</rt></ruby>も<ruby>重要<rt>じゅうよう</rt></ruby>なこと**はどれですか。",
      q_id: "Manakah hal PALING PENTING saat melakukan pengurukan kembali tanah (umemodoshi) di sekitar pondasi yang sudah selesai?",
      q_ne: "जग बनिसकेपछि खाल्डोमा फेरि माटो पुर्ने (उमेमोदोशी) काम गर्दा सबैभन्दा महत्त्वपूर्ण कुरा के हो?",
      options: [
        { ja: "30cm程度の厚さごとに、ランマー等で十分に締め固め（転圧）を行う", id: "Memadatkan tanah lapis demi lapis (tiap 30 cm) menggunakan stamper/rammer", ne: "करिब ३० सेमिको तह बनाएर र्यामरले राम्रोसँग थिच्दै (प्याक गर्दै) जाने" },
        { ja: "一度に上端まで土を一気に流し込んで作業を早く終わらせる", id: "Menuang seluruh tanah sekaligus hingga penuh agar cepat selesai", ne: "छिटो सक्न एकैचोटि सबै माटो खाल्डोभरि खन्याउने" },
        { ja: "埋戻し土には現場の廃材やゴミを混ぜて処分する", id: "Mencampur sampah/puing bangunan ke dalam tanah uruk", ne: "फोहोर र काठका टुक्राहरू माटोसँग मिसाएर पुर्ने" },
        { ja: "転圧は雨が降れば自然に締まるので機械を使わない", id: "Tidak perlu memadatkan dengan mesin karena air hujan akan memadatkannya", ne: "पानी परेपछि आफैं बस्छ भन्दै मेसिनले नथिच्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.83参照】埋戻しを一気に埋めると将来地盤が沈下します。30cm程度の層ごとにランマー等でしっかり締め固める「層状転圧」が必須ルールです。",
      expId: "Pengurukan tanah harus dipadatkan lapis demi lapis (tiap 30 cm). Jika ditimbun sekaligus, tanah akan amblas di masa depan.",
      expNe: "माटो एकैचोटि पुर्दा पछि जमिन भासिन्छ। हरेक ३० सेन्टिमिटरको तह बनाएर मेसिनले थिच्नु अनिवार्य नियम हो।"
    },
    {
      cat: "第4章 足場用語（P.86）",
      q: "<ruby>建設現場<rt>けんせつげんば</rt></ruby>で<ruby>足場<rt>あしば</rt></ruby>を<ruby>組<rt>く</rt></ruby>むときに<ruby>使<rt>つか</rt></ruby>う、**<ruby>直径<rt>ちょっけい</rt></ruby>48.6mmの<ruby>鋼製<rt>こうせい</rt></ruby>の<ruby>丸<rt>まる</rt></ruby>いパイプ**を<ruby>現場<rt>げんば</rt></ruby>では<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan di lapangan untuk pipa baja bulat berdiameter 48,6 mm yang digunakan untuk merakit perancah (scaffolding)?",
      q_ne: "निर्माण कार्यस्थलमा खट (आशिबा) बनाउन प्रयोग गरिने ४८.६ मिमि व्यास भएको फलामको गोलो पाइपलाई के भनिन्छ?",
      options: [
        { ja: "単管（たんかん／単管パイプ）", id: "Tankan (Pipa baja perancah)", ne: "तान्कान (खटको फलामे पाइप)" },
        { ja: "アングル", id: "Besi siku (Angle)", ne: "एङ्गल फलाम" },
        { ja: "鉄筋（てっきん）", id: "Besi beton (Rebar)", ne: "रड (रेबार)" },
        { ja: "胴縁（どうぶち）", id: "Rangka dinding kayu/baja", ne: "भित्ताको फ्रेम" }
      ],
      answer: 0,
      expJa: "【テキスト P.86参照】足場や仮設囲い、手すりなどに多用される直径48.6mmの鋼管を現場用語で「単管（たんかん）」または「単管パイプ」と呼びます。",
      expId: "Pipa baja berdiameter 48,6 mm yang menjadi komponen utama perancah disebut 'Tankan' atau 'Tankan pipe'.",
      expNe: "खट बनाउन र अस्थायी रेलिङ हाल्न प्रयोग हुने ४८.६ मिमि फलामे पाइपलाई 'तान्कान' भनिन्छ।"
    },
    {
      cat: "第4章 足場金具（P.86）",
      q: "2<ruby>本<rt>ほん</rt></ruby>の<ruby>単管<rt>たんかん</rt></ruby>パイプを<ruby>直角<rt>ちょっかく</rt></ruby>や<ruby>自由<rt>じゆう</rt></ruby>な<ruby>角度<rt>かくど</rt></ruby>でしっかり<ruby>連結<rt>れんけつ</rt></ruby>・<ruby>固定<rt>こてい</rt></ruby>するために<ruby>使<rt>つか</rt></ruby>う<ruby>金具<rt>かなぐ</rt></ruby>を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk klem penjepit logam yang digunakan untuk menyambung dan mengunci dua pipa tankan secara kuat?",
      q_ne: "दुईवटा तान्कान पाइपलाई ९० डिग्री वा अन्य कोणमा बलियोसँग जोड्न कसिने फलामे क्ल्याम्प (च्याप्ने साधन) लाई के भनिन्छ?",
      options: [
        { ja: "クランプ（直交クランプ・自在クランプ）", id: "Klem perancah (Clamp / Chokkou & Jizai)", ne: "क्ल्याम्प (चोक्कोउ र जिजाइ क्ल्याम्प)" },
        { ja: "ジョイント", id: "Sambungan lurus pipa", ne: "पाइप जोड्ने जोइन्ट" },
        { ja: "ベース金具", id: "Jack base alas perancah", ne: "भुइँमा राख्ने बेस प्लेट" },
        { ja: "番線（ばんせん）", id: "Kawat bendrat", ne: "तार" }
      ],
      answer: 0,
      expJa: "【テキスト P.86参照】単管パイプ同士を固定する金具を「クランプ」と呼びます。90度固定の「直交クランプ」と、角度を自由に変えられる「自在クランプ」があります。",
      expId: "Clamp digunakan untuk mengunci pipa perancah. Ada klem mati 90 derajat (Chokkou) dan klem hidup/putar (Jizai).",
      expNe: "तान्कान पाइप जोड्ने फलामे साधनलाई 'क्ल्याम्प' भनिन्छ। ९० डिग्रीमा जोड्ने र घुम्ने खालका क्ल्याम्प हुन्छन्।"
    },
    {
      cat: "第4章 足場安全用語（P.86）",
      q: "<ruby>足場<rt>あしば</rt></ruby>の<ruby>作業床<rt>さぎょうゆか</rt></ruby>のすき<ruby>間<rt>ま</rt></ruby>から、<ruby>ボルト<rt>ぼると</rt></ruby>や<ruby>工具<rt>こうぐ</rt></ruby>などの<ruby>小物品<rt>しょうぶっぴん</rt></ruby>が<ruby>下<rt>した</rt></ruby>へ<ruby>転<rt>ころ</rt></ruby>がり<ruby>落<rt>お</rt></ruby>ちるのを<ruby>防<rt>ふせ</rt></ruby>ぐため、<ruby>床<rt>ゆか</rt></ruby>の<ruby>端<rt>はし</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>付<rt>つ</rt></ruby>ける「**<ruby>高<rt>たか</rt></ruby>さ10cm<ruby>以上<rt>いじょう</rt></ruby>の<ruby>板<rt>いた</rt></ruby>**」を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk papan penahan setinggi minimal 10 cm yang dipasang di tepi lantai kerja perancah untuk mencegah perkakas kecil jatuh ke bawah?",
      q_ne: "खटको भुइँबाट नट-बोल्ट र औजारहरू तल खस्न नदिन छेउमा लगाइने १० सेमिभन्दा अग्लो सुरक्षा पट्टीलाई के भनिन्छ?",
      options: [
        { ja: "巾木（はばき／幅木）", id: "Toe-board / Habaki (Papan tepi penahan jatuh)", ne: "हाबाकी (सामान खस्न नदिने छेउको फल्याक)" },
        { ja: "手すり（てすり）", id: "Pagar pembatas tangan (Handrail)", ne: "हातले समात्ने रेलिङ" },
        { ja: "筋かい（すじかい）", id: "Batang silang pengaku (Bracing)", ne: "क्रस टेको (सुजिकाई)" },
        { ja: "メッシュシート", id: "Jaring pengaman luar", ne: "सुरक्षा जाली (नेट)" }
      ],
      answer: 0,
      expJa: "【テキスト P.86参照】作業床の端からの工具等の落下災害を防ぐ板を「巾木（はばき）」と呼びます。安衛則により高さ10cm以上の設置が義務付けられています。",
      expId: "Habaki (toe-board) dipasang di tepi lantai perancah setinggi minimal 10 cm untuk mencegah alat menggelinding jatuh.",
      expNe: "'हाबाकी' खटको छेउमा राखिने कम्तीमा १० सेमि अग्लो फल्याक हो जसले औजारहरू तल खसेर अरूलाई लाग्न दिँदैन।"
    },
    {
      cat: "第4章 足場安全用語（P.86）",
      q: "<ruby>強風<rt>きょうふう</rt></ruby>や<ruby>地震<rt>じしん</rt></ruby>で<ruby>足場<rt>あしば</rt></ruby>が<ruby>外側<rt>そとがわ</rt></ruby>に<ruby>倒<rt>たお</rt></ruby>れるのを<ruby>防<rt>ふせ</rt></ruby>ぐため、<ruby>足場<rt>あしば</rt></ruby>と<ruby>建物<rt>たてもの</rt></ruby>の<ruby>躯体<rt>くたい</rt></ruby>（<ruby>柱<rt>はしら</rt></ruby>や<ruby>壁<rt>かべ</rt></ruby>）をしっかり<ruby>固定<rt>こてい</rt></ruby>する<ruby>部材<rt>ぶざい</rt></ruby>を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk angkur pengikat yang menghubungkan perancah ke struktur gedung (kolom/dinding) agar perancah tidak roboh ditiup angin?",
      q_ne: "हावाहुरी वा भूकम्पले खट बाहिर नढलोस् भनेर खटलाई भवनको पर्खाल वा पिलरसँग कस्ने साधनलाई के भनिन्छ?",
      options: [
        { ja: "壁つなぎ（かべつなぎ）", id: "Wall tie / Kabe-tsunagi (Pengikat dinding)", ne: "काबे-चुनागी (भित्तामा कस्ने साधन)" },
        { ja: "ジャッキベース", id: "Jack base penopang kaki", ne: "ज्याक बेस" },
        { ja: "ブレース", id: "Brace pengaku", ne: "ब्रेस" },
        { ja: "親綱（おやづな）", id: "Tali keselamatan", ne: "सेफ्टी डोरी" }
      ],
      answer: 0,
      expJa: "【テキスト P.86参照】足場の倒壊・はらみ出しを防止するため躯体と緊結する部材を「壁つなぎ」と呼びます。単管足場では垂直5.0m以下・水平5.5m以下ごとに設置します。",
      expId: "Kabe-tsunagi adalah angkur penting pengikat perancah ke dinding bangunan agar perancah tidak roboh terhempas angin kencang.",
      expNe: "'काबे-चुनागी' खटलाई भवनको पर्खालसँग बलियोसँग बाँध्ने साधन हो, जसले खटलाई ढल्नबाट बचाउँछ।"
    },
    {
      cat: "第4章 足場作業ルール（P.86）",
      q: "<ruby>作業<rt>さぎょう</rt></ruby>の<ruby>邪魔<rt>じゃま</rt></ruby>になるからといって、**<ruby>現場作業員<rt>げんばさぎょういん</rt></ruby>が<ruby>勝手<rt>かって</rt></ruby>に<ruby>外<rt>はず</rt></ruby>してはならない<ruby>足場部材<rt>あしばぶざい</rt></ruby>**として、<ruby>正<rt>ただ</rt></ruby>しいものはどれですか。",
      q_id: "Komponen perancah mana yang DILARANG KERAS dilepas sendiri oleh pekerja lapangan hanya karena menghalangi pekerjaan?",
      q_ne: "काम गर्दा बाधा पुगेको बहानामा कामदारले आफूखुसी फुकाल्न कडा प्रतिबन्ध लगाइएको खटको भाग कुन हो?",
      options: [
        { ja: "手すり・巾木・筋かい・壁つなぎ（すべて無断取り外し禁止）", id: "Handrail, toe-board, bracing, dan wall tie (Semuanya dilarang dilepas tanpa izin)", ne: "रेलिङ, हाबाकी, क्रस टेको र काबे-चुनागी (कुनै पनि आफूखुसी फुकाल्न पाइँदैन)" },
        { ja: "手すりだけなら外して作業してもよい", id: "Boleh melepas handrail saja saat bekerja", ne: "रेलिङ मात्र फुकालेर काम गर्न मिल्छ" },
        { ja: "巾木は邪魔なら足で蹴り落として外してよい", id: "Toe-board boleh ditendang lepas jika mengganggu", ne: "हाबाकी बाधा भए खुट्टाले हानेर फाल्न मिल्छ" },
        { ja: "壁つなぎは1箇所くらい外しても足場は倒れないので自由である", id: "Bebas melepas 1 wall tie karena perancah tidak akan langsung roboh", ne: "एउटा काबे-चुनागी फुकाल्दा केही हुँदैन भनेर फुकाल्न पाइन्छ" }
      ],
      answer: 0,
      expJa: "【テキスト P.86参照】足場の手すり、幅木、筋かい、壁つなぎを勝手に外すと墜落事故や足場倒壊を招きます。やむを得ず外す場合は必ず職長・足場作業主任者の許可と安全対策（親綱等）が必要です。",
      expId: "DILARANG KERAS melepas handrail, habaki, sujikai, atau kabe-tsunagi tanpa izin pengawas karena berisiko fatal mematikan.",
      expNe: "रेलिङ वा काबे-चुनागी आफूखुसी फुकाल्दा खट भत्किने र लडेर मृत्यु हुने जोखिम हुन्छ। सुपरभाइजरको अनुमति बिना कहिल्यै नफुकाल्नुहोस्।"
    },
    {
      cat: "第4章 墨出しと高さ（P.82）",
      q: "<ruby>遣り方<rt>やりかた</rt></ruby>や<ruby>基礎工事<rt>きそこうじ</rt></ruby>において、すべての<ruby>高<rt>たか</rt></ruby>さの<ruby>基準<rt>きじゅん</rt></ruby>となる「**ベンチマーク（BM／基準点）**」の<ruby>管理<rt>かんり</rt></ruby>として、**<ruby>適切<rt>てきせつ</rt></ruby>なもの**はどれですか。",
      q_id: "Manakah tindakan yang BENAR dalam mengelola Titik Acuan Ketinggian (Benchmark / BM) pada pekerjaan pondasi dan bousplank?",
      q_ne: "जग र यारिकाताको काममा उचाइको मुख्य आधार बिन्दु (बेन्चमार्क / BM) को व्यवस्थापन सम्बन्धी कुन उपयुक्त छ?",
      options: [
        { ja: "工事中に動かないよう、境界杭や近隣の動かない構造物に2箇所以上設置して保護する", id: "Dipasang di 2 titik atau lebih pada struktur tetap/patok batas tanah agar tidak bergeser", ne: "काम गर्दा नहल्लियोस् भनेर जग्गाको सिमाना वा नहल्लिने संरचनामा २ वा सोभन्दा बढी ठाउँमा राख्ने" },
        { ja: "地面に刺した細い木の枝をベンチマークとして使う", id: "Menggunakan ranting pohon kecil yang ditancap ke tanah", ne: "जमिनमा गाडिएको रुखको सानो हाँगालाई बेन्चमार्क मान्ने" },
        { ja: "工事用トラックがよく通る通路の真ん中に目印をつける", id: "Menaruh tanda di tengah jalan yang sering dilalui truk proyek", ne: "ट्रकहरू हिँड्ने बाटोको बीचमा निशाना बनाउने" },
        { ja: "ベンチマークの位置は監督の記憶だけで管理し記録は残さない", id: "Hanya diingat oleh mandor tanpa dicatat sama sekali", ne: "कागजातमा नलेखी सुपरभाइजरको दिमागमा मात्र सम्झिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.82参照】ベンチマーク（BM）が狂うと建物全体の高さが狂ってしまいます。絶対に動かないマンホールや固定構造物に設置し、万一に備えて2箇所以上確保します。",
      expId: "Benchmark (BM) adalah acuan tinggi seluruh bangunan. Harus dibuat minimal di 2 titik tetap yang tidak akan bergerak selama proyek.",
      expNe: "बेन्चमार्क बिन्दु हल्लियो भने सम्पूर्ण भवनको उचाइ बिग्रिन्छ। नहल्लिने ठाउँमा कम्तीमा २ ठाउँ सुरक्षित चिन्ह लगाउनुपर्छ।"
    }
  ]
};
