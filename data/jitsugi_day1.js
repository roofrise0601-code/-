const CURRENT_QUIZ_DATA = {
  title: "実技・判断等試験①：<ruby>工具<rt>こうぐ</rt></ruby>・<ruby>機械<rt>きかい</rt></ruby>・<ruby>材料<rt>ざいりょう</rt></ruby>・<ruby>計測器<rt>けいそくき</rt></ruby>の<ruby>知識<rt>ちしき</rt></ruby>（P.100〜144）",
  key: "score_jitsugi_1",
  passScore: 70,
  questions: [
    {
      cat: "第5章 建設機械（P.100〜101）",
      q: "土砂や岩石等の運搬専用車両で、**「荷台を傾斜させて排土（ダンプ）できる建設機械」**として正しいものはどれですか。",
      q_id: "Manakah kendaraan konstruksi yang tepat untuk mengangkut tanah/batu dan dapat membuang muatan dengan memiringkan baknya?",
      q_ne: "माटो वा ढुङ्गा ओसारपसार गर्न प्रयोग हुने र पछाडिको भाग उठाएर सामान खन्याउन मिल्ने सवारी साधन कुन हो?",
      options: [
        { ja: "ダンプトラック", id: "Dump Truck", ne: "डम्प ट्रक" },
        { ja: "ブルドーザ", id: "Bulldozer", ne: "बुलडोजर" },
        { ja: "クローラクレーン", id: "Crawler Crane", ne: "क्रोलर क्रेन" },
        { ja: "トラックアジテータ（生コン車）", id: "Truk Mixer (生コン車)", ne: "कंक्रीट मिक्सर गाडी" }
      ],
      answer: 0,
      expJa: "【テキスト P.101参照】土砂や岩石等の運搬専用車両で、荷台を傾けて排土（ダンプ）できるものを「ダンプトラック」と呼びます。油圧ショベル等と組み合わせて使われます。",
      expId: "Dump truck adalah kendaraan khusus angkut tanah/batu yang dapat memiringkan baknya. Sering dipadukan dengan excavator.",
      expNe: "माटो वा ढुङ्गा ओसार्ने र पछाडिको भाग ढल्काएर सामान खन्याउन मिल्ने गाडी 'डम्प ट्रक' हो।"
    },
    {
      cat: "第5章 とび工事・足場部材（P.102〜103）",
      q: "足場の安全確保に関する部材のうち、**「足場板の外側に取り付け、物や工具の落下を防止する板材」**は何ですか。",
      q_id: "Apakah nama komponen pengaman yang dipasang di tepi luar lantai perancah untuk mencegah jatuhnya barang dan perkakas?",
      q_ne: "खट (परान्चाह) को बाहिरी किनारमा औजार वा सामान खस्न नदिन लगाइने काठ वा पातालाई के भनिन्छ?",
      options: [
        { ja: "幅木（はばき）", id: "Habaki (Toeboard / Papan Pelindung Tepi Bawah)", ne: "हाबाकी (किनारको तख्ता / टो-बोर्ड)" },
        { ja: "筋交（すじかい）", id: "Sujikai (Bracing / Batang Penguat Diagonal)", ne: "सुजिकाई (छड्के डन्डी)" },
        { ja: "固定ベース", id: "Kotei Base (Pelat Dasar Tiang)", ne: "कोतेइ बेस (जगको प्लेट)" },
        { ja: "壁つなぎ", id: "Kabe-tsunagi (Angkur Pengikat Dinding)", ne: "काबे-चुनागी (भित्तामा बाँध्ने रड)" }
      ],
      answer: 0,
      expJa: "【テキスト P.103参照】幅木（はばき）は足場板の外側に取り付け、足元からの工具やボルト・資材の落下を防止するための板材です。",
      expId: "Habaki dipasang di tepi luar lantai injakan perancah untuk mencegah benda/alat kerja terjatuh menimpa orang di bawah.",
      expNe: "'हाबाकी' खटको भुइँको किनारमा औजार वा सामान तल खस्नबाट रोक्न लगाइने सुरक्षा तख्ता हो।"
    },
    {
      cat: "第5章 とび・鉄骨の工具（P.104〜105）",
      q: "先端が尖っていて曲がった形をしており、**「番線の結束や締め付け、ボルト穴の位置合わせに使われる工具」**は何ですか。",
      q_id: "Alat apakah yang memiliki ujung runcing melengkung, digunakan untuk mengikat kawat bansen dan meluruskan lubang baut?",
      q_ne: "टुप्पो तिखो र बाङ्गो भएको, मोटो तार कस्न र नट-बोल्टको प्वाल मिलाउन प्रयोग गरिने औजार कुन हो?",
      options: [
        { ja: "シノ（シノ付きラチェットレンチ）", id: "Shino (Kunci Ratchet Ujung Runcing)", ne: "शिनो (चोसो भएको र्याचेट रेन्च)" },
        { ja: "スパナ", id: "Spana (Kunci Pas Terbuka)", ne: "ओपन स्प्यानर (खुल्ला रेन्च)" },
        { ja: "番線カッター", id: "Pemotong Kawat Bansen (Bolt Cutter)", ne: "तार काट्ने कटर" },
        { ja: "安全ブロック", id: "Safety Block (Blok Pengaman Jatuh)", ne: "सेफ्टी ब्लक" }
      ],
      answer: 0,
      expJa: "【テキスト P.104〜105参照】先端が尖って曲がった工具を「シノ」と言います。番線の結束や鉄骨のボルト穴合わせに使われ、ラチェットレンチと一体になったものが多用されます。",
      expId: "Shino memiliki ujung runcing bengkok untuk mengikat kawat besi bansen dan menyelaraskan lubang baut baja.",
      expNe: "'शिनो' को टुप्पो तिखो हुन्छ। यसले मोटो तार कस्ने र फलामे बिमका प्वालहरू एकआपसमा मिलाउने काम गर्दछ।"
    },
    {
      cat: "第5章 鉄筋工事（P.107〜108）",
      q: "鉄筋工事で使用される部材のうち、**「床筋（スラブ筋）のかぶり厚さを確保するために下に置くサイコロ状のモルタルブロック」**は何ですか。",
      q_id: "Apa sebutan untuk spacer balok mortar berbentuk dadu yang ditaruh di bawah besi lantai untuk menjaga selimut beton?",
      q_ne: "भुइँको ढलानमा रडको मुनि आवश्यक दूरी (कभर) कायम राख्न राखिने सिमेन्टको सानो ब्लक (पासा आकारको) लाई के भनिन्छ?",
      options: [
        { ja: "キャラメル", id: "Caramel (Spacer Blok Mortar Dadu)", ne: "क्यारामेल (सिमेन्टको पासा ब्लक)" },
        { ja: "ドーナツ", id: "Donut (Spacer Plastik Bulat)", ne: "डोनट (गोलो प्लास्टिक स्पेसर)" },
        { ja: "ハッカー", id: "Hacker (Alat Pemutar Kawat Pengikat)", ne: "ह्याकर (तार बाँध्ने औजार)" },
        { ja: "プラキャップ", id: "Plastic Cap (Tutup Pelindung Ujung Besi)", ne: "प्लास्टिक क्याप" }
      ],
      answer: 0,
      expJa: "【テキスト P.107参照】床筋のかぶり厚さを確保するサイコロ状のモルタルブロックを「キャラメル」と呼びます。柱や梁の側面にはドーナツ状のスペーサーを用います。",
      expId: "Caramel adalah blok mortar berbentuk kubus dadu untuk menjaga ketebalan selimut beton pada besi lantai/pelat.",
      expNe: "'क्यारामेल' भन्नाले भुइँको रडलाई निश्चित उचाइमा उठाएर कंक्रीट कभर बनाउन राखिने सिमेन्टको ब्लक हो।"
    },
    {
      cat: "第5章 型枠工事（P.111〜112）",
      q: "型枠工事において、**「向かい合う型枠と型枠の間隔を一定に保ち、コンクリートの厚みを施工図通りに確保する部材」**は何ですか。",
      q_id: "Komponen apakah yang dipasang di antara dua sisi bekisting untuk menjaga ketebalan dinding beton tetap presisi sesuai gambar?",
      q_ne: "फर्मा (फर्मवर्क) का दुवै पाटालाई निश्चित दूरीमा अड्याएर पर्खालको मोटाइ नक्सा अनुसार बनाउन प्रयोग गरिने रड कुन हो?",
      options: [
        { ja: "丸セパレーター（セパ）", id: "Maru Separator (Batang Penjaga Jarak Bekisting)", ne: "मारु सेपारेटर (दुरी मिलाउने रड)" },
        { ja: "Pコン", id: "P-Con (Cone Plastik Ujung Separator)", ne: "पी-कन (प्लास्टिकको कोण)" },
        { ja: "パイプサポート", id: "Pipe Support (Tiang Penyangga Pipa)", ne: "पाइप सपोर्ट (टेको)" },
        { ja: "面木（めんぎ）", id: "Mengi (Kayu Pembentuk Sudut Bevel)", ne: "मेन्गी (कुना काट्ने काठ)" }
      ],
      answer: 0,
      expJa: "【テキスト P.111参照】向かい合う型枠の間隔を一定に保ち、コンクリートの厚みを確保する部材を「丸セパレーター（セパ）」と呼びます。両端にPコンを付けて使用します。",
      expId: "Maru Separator berfungsi menjaga jarak antar-papan bekisting agar ketebalan dinding beton sesuai ukuran cetakan.",
      expNe: "'मारु सेपारेटर' ले पर्खालका दुईवटा फर्मालाई जोडिन वा खुम्चिन नदिई कंक्रीटको सही मोटाइ कायम राख्छ।"
    },
    {
      cat: "第5章 コンクリート工事（P.115）",
      q: "生コンクリートの打設前に行う「スランプ試験」において、**スランプコーンを外した後に測る「スランプ値」**とは何のことですか。",
      q_id: "Dalam uji slump sebelum pengecoran beton, apakah yang dimaksud dengan 'Nilai Slump' yang diukur setelah cetakan kerucut diangkat?",
      q_ne: "ढलान गर्नुअघि गरिने स्लम परीक्षणमा, कोन निकालेपछि नापिने 'स्लम भ्यालु (नाप)' ले के जनाउँछ?",
      options: [
        { ja: "コーンを外したことによって、コンクリートが自重で下がった（低くなった）分の高さ", id: "Penurunan tinggi beton akibat berat sendirinya setelah cetakan kerucut diangkat", ne: "कोन हटाएपछि कंक्रीट आफ्नै तौलले तल झरेको (घटेको) उचाइ" },
        { ja: "コンクリートが完全に固まるまでにかかった日数", id: "Jumlah hari yang dibutuhkan sampai beton mengeras total", ne: "कंक्रीट पूर्ण रूपमा सुक्न लागेको दिन" },
        { ja: "生コンクリートの中に含まれる砂利の総重量", id: "Berat total kerikil di dalam adonan beton", ne: "कंक्रीटमा भएको गिट्टीको तौल" },
        { ja: "ミキサー車のタイヤの空気圧の数値", id: "Tekanan angin ban truk mixer", ne: "मिक्सर गाडीको टायरको हावाको चाप" }
      ],
      answer: 0,
      expJa: "【テキスト P.115, 135参照】スランプ試験では、高さ30cmのスランプコーンを引き抜いた時に、コンクリート頂部がどれだけ下がったか（スランプ値）を検尺で測り、流動性と品質を確認します。",
      expId: "Nilai slump adalah ukuran penurunan tinggi adonan beton basah setelah kerucut diangkat untuk menguji keenceran/mutu adonan.",
      expNe: "स्लम नाप भनेको कोन झिक्दा कंक्रीट कति सेन्टिमिटर तल झर्छ भनी नापिने उचाइ हो, जसले मसला कत्तिको गिलो छ देखाउँछ।"
    },
    {
      cat: "第5章 左官工事（P.117〜118）",
      q: "左官工事で壁の角を仕上げる際、**「外側の角（出隅：ですみ）」と「内側の角（入隅：いりずみ）」に使うコテの組み合わせ**として正しいものはどれですか。",
      q_id: "Manakah kombinasi roskam (kote) yang BENAR untuk menghaluskan sudut luar (Desumi) dan sudut dalam (Irizumi)?",
      q_ne: "प्लास्टर गर्दा बाहिरी कुना (देसुमी) र भित्री कुना (इरिजुमी) मिलाउन प्रयोग गरिने कर्नी (कोते) को सही जोडी कुन हो?",
      options: [
        { ja: "出隅＝面引きごて ／ 入隅＝切り付けごて", id: "Sudut Luar = Menbiki-gote / Sudut Dalam = Kiritsuke-gote", ne: "बाहिरी कुना = मेन्बिकी-गोते / भित्री कुना = किरित्सुके-गोते" },
        { ja: "出隅＝切り付けごて ／ 入隅＝面引きごて", id: "Sudut Luar = Kiritsuke-gote / Sudut Dalam = Menbiki-gote", ne: "बाहिरी कुना = किरित्सुके / भित्री कुना = मेन्बिकी" },
        { ja: "出隅・入隅ともにブロックごてを使用する", id: "Keduanya menggunakan roskam batako", ne: "दुवै कुनामा ब्लकको कर्नी प्रयोग गर्ने" },
        { ja: "角の仕上げにはハッカーを使用する", id: "Menggunakan hacker besi untuk menghaluskan sudut", ne: "कुना मिलाउन ह्याकर औजार चलाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.118参照】外側に突き出た角（出隅）には「面引きごて」、内側の引っ込んだ角（入隅）には「切り付けごて」を使い分けます。",
      expId: "Untuk sudut dinding luar (出隅) gunakan Menbiki-gote, dan untuk sudut siku dalam (入隅) gunakan Kiritsuke-gote.",
      expNe: "बाहिर निस्केको कुनालाई 'मेन्बिकी-गोते' ले र भित्र दबेको कुनालाई 'किरित्सुके-गोते' ले चिल्लो बनाइन्छ।"
    },
    {
      cat: "第5章 電動工具の安全（P.129）",
      q: "木材などを切断する「携帯用丸のこ」を使用する際、**作業者が最も注意すべき危険な現象と安全確認**はどれですか。",
      q_id: "Bahaya paling fatal apakah yang wajib diwaspadai saat memakai gergaji bundar listrik (Marunoko), serta tindakan pencegahannya?",
      q_ne: "विद्युतीय गोलो आरा (मारुनोको) चलाउँदा सबैभन्दा खतरनाक हुने अवस्था र त्यसको सुरक्षा जाँच कुन हो?",
      options: [
        { ja: "材料から刃が跳ね上がって意図しない方向に飛ぶ「キックバック」に注意し、使用前に安全カバーの正常な動作を確認する", id: "Waspadai 'Kickback' (hentakan balik mendadak), dan selalu pastikan kap penutup pengaman bergerak normal sebelum digunakan", ne: "आरा अचानक उछिट्टिएर मान्छेतिर आउने 'किकब्याक' बाट बच्ने, र चलाउनुअघि सुरक्षा कभर राम्ररी चल्छ कि नाई जाँच गर्ने" },
        { ja: "作業スピードを上げるため、安全カバーを針金で開いたまま固定して作業する", id: "Mengikat buka penutup pengaman dengan kawat agar bisa memotong cepat", ne: "काम छिटो सक्न सुरक्षा कभरलाई तारले बाँधेर खुल्लै राख्ने" },
        { ja: "刃が材料に挟まって回転が止まりそうになったら、力任せに強く押し込む", id: "Mendorong sekuat tenaga saat mata pisau macet terjepit bahan", ne: "ब्लेड अड्किएर रोकिन लाग्दा झन् बल गरेर जबर्जस्ती थिच्ने" },
        { ja: "丸のこは音がうるさいので、耳栓をして周囲の確認を一切せず作業する", id: "Memakai sumbat telinga dan memotong tanpa melihat sekeliling karena bising", ne: "हल्ला हुने भएकाले वरपर केही नहेरी काममा मात्र जोतिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.129参照】丸のこは材料から刃が跳ね上がる「キックバック」による重大事故（死亡・切断事故）が多発しています。使用前には安全カバーがスムーズに閉じるかを必ず点検します。",
      expId: "Kickback adalah loncatan pisau gergaji yang sangat mematikan. Wajib pastikan safety cover berfungsi otomatis sebelum bekerja.",
      expNe: "मारुनोको चलाउँदा काठले ब्लेडलाई हुत्याएर मानिसलाई काट्ने 'किकब्याक' को ठूलो जोखिम हुन्छ। सुरक्षा कभर अनिवार्य जाँच्नुपर्छ।"
    },
    {
      cat: "第5章 測量・墨出し器具（P.134）",
      q: "円錐状のおもりを糸でぶら下げ、**「柱や壁などが地面に対して垂直に立っているか」を確認するための道具**は何ですか。",
      q_id: "Alat pengukur apakah yang menggunakan beban kerucut berujung lancip yang digantung dengan benang untuk mengecek ketegaklurusan vertikal pilar?",
      q_ne: "धागोमा तिखो डल्लो झुन्ड्याएर पिलर वा भित्ता सिधा ९० डिग्रीमा ठडिएको छ कि छैन भनी जाँच्ने औजार (साहुल) कुन हो?",
      options: [
        { ja: "下げ振り（さげふり）", id: "Sagefuri (Unting-unting / Plumb Bob)", ne: "सागेफुरी (साहुल / प्लम्ब बब)" },
        { ja: "水糸（みずいと）", id: "Mizu-ito (Benang Ukur Level)", ne: "मिजु-इतो (डोरी/धागो)" },
        { ja: "さしがね", id: "Sashigane (Penggaris Siku Baja L)", ne: "साशिगाने (फलामे गुनिया)" },
        { ja: "折尺（おりじゃく）", id: "Orijaku (Meteran Lipat Kayu)", ne: "ओरिजाकु (पट्याउने स्केल)" }
      ],
      answer: 0,
      expJa: "【テキスト P.134参照】先端が円錐状に尖ったおもりを糸で垂らし、柱や壁との距離が一定かで垂直を確認する道具を「下げ振り」と呼びます。",
      expId: "Sagefuri (unting-unting) digunakan untuk memastikan ketegakan tiang/pilar secara vertikal menggunakan gravitasi bandul kerucut.",
      expNe: "'सागेफुरी' (साहुल) ले पिलर वा भित्ता जमिनबाट ठ्याक्कै सिधा (भर्टिकल) उभिएको छ कि छैन भनी जाँच्दछ।"
    },
    {
      cat: "第5章 はしご・脚立の安全（P.143）",
      q: "現場で「はしご」や「脚立」を使用する際の安全管理判断として、**最も適切な記述**はどれですか。",
      q_id: "Manakah aturan keselamatan yang PALING BENAR saat menggunakan tangga lurus (hashigo) atau tangga lipat (kyatatsu) di proyek?",
      q_ne: "कार्यस्थलमा भर्याङ (हाशिगो) वा चारखुट्टे भर्याङ (क्याताचु) प्रयोग गर्दा पालना गर्नुपर्ने सबैभन्दा सही नियम कुन हो?",
      options: [
        { ja: "はしごの立てかけ角度は約75度とし、転倒防止のため補助者と作業する。脚立の天板の上には決して立たない", id: "Kemiringan tangga lurus harus sekitar 75 derajat didampingi pembantu, serta DILARANG KERAS berdiri di atas pelat paling atas (top plate) tangga lipat", ne: "भर्याङको ढल्काइ कोण करिब ७५ डिग्री हुनुपर्छ र तलबाट समात्ने मान्छे चाहिन्छ। चारखुट्टे भर्याङको सबैभन्दा माथिल्लो पातामा कहिल्यै उभिनु हुँदैन" },
        { ja: "脚立の天板の上に両足で立ち上がって背伸びしながら作業する", id: "Berdiri tegak dengan kedua kaki di atas pelat puncak tangga lipat sambil berjinjit", ne: "भर्याङको टुप्पोमा दुवै खुट्टाले उभिएर तन्किँदै काम गर्ने" },
        { ja: "脚立の天板を左右にまたいで座り、腰を大きくひねりながら作業する", id: "Duduk mengangkangi pelat tangga lipat dan memutar badan secara ekstrem", ne: "भर्याङको माथि दुईतिर खुट्टा राखेर बस्ने र शरीर बटारेर काम गर्ने" },
        { ja: "はしごは角度が急な（90度に近い）ほうが場所を取らず安全である", id: "Semakin tegak tangga (mendekati 90 derajat) semakin aman dan hemat ruang", ne: "भर्याङ जति सिधा (९० डिग्री) राख्यो त्यति ठाउँ जोगिएर सुरक्षित हुन्छ" }
      ],
      answer: 0,
      expJa: "【テキスト P.143参照】はしごは傾斜角度約75度とし、補助者を配置します。脚立の天板に乗ったり、天板をまたいで乗る行為はバランスを崩し転落する危険があるため禁止されています。",
      expId: "Kemiringan tangga aman adalah 75 derajat. Jangan pernah berdiri atau duduk mengangkangi bagian atas tangga karena rawan terjungkal jatuh.",
      expNe: "भर्याङ ७५ डिग्रीमा राखेर तल मान्छेले समात्नुपर्छ। भर्याङको टुप्पोमा बस्ने वा उभिने गर्दा सन्तुलन गुमेर लड्ने ठूलो खतरा हुन्छ।"
    }
  ]
};
