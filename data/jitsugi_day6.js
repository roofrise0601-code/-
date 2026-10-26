const CURRENT_QUIZ_DATA = {
  title: "実技⑥：<ruby>躯体工事<rt>くたいこうじ</rt></ruby>の<ruby>施工技術<rt>せこうぎじゅつ</rt></ruby>・<ruby>品質管理<rt>ひんしつかんり</rt></ruby>（P.145〜160）",
  key: "score_jitsugi_6",
  passScore: 70,
  questions: [
    {
      cat: "第6章 足場工事：建地と根がらみ（P.150）",
      q: "足場の組立において、建地（支柱）が沈下・移動して足場全体が倒壊するのを防ぐため、**建地の最下部（足元）に取り付ける部材**として正しいものはどれですか。",
      q_id: "Komponen apakah yang wajib dipasang mengikat bagian paling bawah tiang perancah (tateji) agar tidak bergeser dan mencegah perancah roboh?",
      q_ne: "खटको मुख्य खुट्टा (तातेजी) हल्लिन वा भासिन नदिन सबैभन्दा मुनिको भागमा बाँधिने तेर्सो पाइपलाई के भनिन्छ?",
      options: [
        { ja: "根がらみ（ねがらみ）", id: "Negarami (Pipa Pengikat Kaki Tiang Bawah)", ne: "नेगारामी (फेद बाँध्ने सुरक्षा पाइप)" },
        { ja: "巾木（はばき）", id: "Habaki (Toeboard / Pelindung Kaki)", ne: "हाबाकी (छेउको काठको फलेक)" },
        { ja: "腕木（うでぎ）", id: "Udegi (Batang Penyangga Lantai)", ne: "उदेगी (फलेक अड्याउने डन्डी)" },
        { ja: "下さん（したさん）", id: "Shitasan (Palang Pengaman Bawah)", ne: "शिता-सान (मुनिको सुरक्षा बार)" }
      ],
      answer: 0,
      expJa: "【テキスト P.150参照】建地の足元部分は、建地どうしを「根がらみ」でつないで動かないように固定し、足場の沈下・倒壊を防ぎます[cite: 43]。",
      expId: "Negarami adalah pipa yang mengikat seluruh bagian paling bawah tiang perancah agar posisi tiang terkunci kokoh dan tidak roboh.",
      expNe: "खटका सबै खुट्टाहरूलाई मुनिबाट बाँधेर नहल्लिने बनाउन 'नेगारामी' पाइप अनिवार्य लगाइन्छ।"
    },
    {
      cat: "第6章 鉄骨工事：ベースプレートの施工（P.152）",
      q: "鉄骨建て方において、柱を建てる基礎コンクリートの天端高さが微妙に異なるとき、**柱の高さを水平に揃えて精度を確保するために充填する材料**は何ですか。",
      q_id: "Material apakah yang digunakan untuk meratakan dan mengisi celah bawah pelat dasar tiang baja (base plate) agar ketinggiannya rata sempurna?",
      q_ne: "स्टिलको पिलर राख्नुअघि जगको लेभल मिलाउन र बेस प्लेट मुनिको खाली ठाउँ भर्न प्रयोग गरिने मसला कुन हो?",
      options: [
        { ja: "無収縮モルタル（むしゅうしゅくモルタル）", id: "Mushushoku Mortar (Non-shrink Mortar)", ne: "मुशूशुको मोर्टार (नखुम्चिने विशेष सिमेन्ट मसला)" },
        { ja: "砂利（じゃり）", id: "Kerikil Kasar (Jari)", ne: "ढुङ्गा/गिट्टी (जारी)" },
        { ja: "石膏パテ（せっこうパテ）", id: "Gypsum Putty (Pate)", ne: "जिप्सम पुट्टी (पाते)" },
        { ja: "発泡スチロール", id: "Styrofoam", ne: "स्टाइरोफोम (फोम)" }
      ],
      answer: 0,
      expJa: "【テキスト P.152参照】基礎の高さを確認し、無収縮モルタルや薄い鉄板を重ねて使って、全ての柱のベースプレートの高さを正確に合わせます[cite: 44]。",
      expId: "Non-shrink mortar (mu-shuushuku mortar) digunakan untuk leveling base plate karena tidak menyusut saat mengering sehingga struktur kokoh.",
      expNe: "सुकेपछि पनि नखुम्चिने भएकोले जग र बेस प्लेटको बीचमा 'मुशूशुको मोर्टार' हालिन्छ।"
    },
    {
      cat: "第6章 鉄筋工事：主筋とフープ筋の役割（P.154）",
      q: "鉄筋コンクリート造の「柱」において、垂直に配置された主筋の周りを取り囲むように巻く**「フープ筋（帯筋）」の主な目的**は何ですか。",
      q_id: "Apakah fungsi utama dari 'Hoop-kin' (sengkang / begel) yang dipasang melingkari besi utama kolom secara horizontal?",
      q_ne: "पिलरको ठाडो मुख्य रडलाई वरिपरिबाट बाँध्ने 'हुप-किन (रिङ/टाइ बार)' को मुख्य काम के हो?",
      options: [
        { ja: "地震などの揺れによる主筋のズレを防ぎ、せん断力（ハサミで切るような力）に対して補強するため", id: "Mencegah pergeseran besi utama saat gempa dan memperkuat tiang terhadap gaya geser (shear force)", ne: "भूकम्पमा मुख्य रड हल्लिन नदिन र पिलरलाई भाँचिनबाट जोगाउन (सियर फोर्स रोक्न)" },
        { ja: "柱のデザインを美しく装飾するため", id: "Sebagai hiasan estetika desain kolom", ne: "पिलर राम्रो देखाउनका लागि" },
        { ja: "コンクリートが早く固まるように熱を伝えるため", id: "Menghantarkan panas agar beton cepat kering", ne: "कंक्रीट छिटो सुकाउन तातो पठाउन" },
        { ja: "作業員がよじ登るためのハシゴ代わりにするため", id: "Sebagai tangga panjatan darurat pekerja", ne: "कामदारलाई माथि चढ्न भर्याङ बनाउन" }
      ],
      answer: 0,
      expJa: "【テキスト P.154参照】柱のフープ筋（帯筋）は、地震等の揺れによる主筋のズレや、せん断力（せん断破壊）に対する補強の目的で取り付けられます[cite: 46]。",
      expId: "Hoop-kin mengikat besi utama agar tidak mekar dan menahan gaya geser horizontal saat terjadi guncangan gempa bumi.",
      expNe: "पिलरको मुख्य रडलाई भूकम्पको बेला च्यातिन नदिन र बलियो बनाउन रिङ (हुप-किन) प्रयोग गरिन्छ।"
    },
    {
      cat: "第6章 鉄筋工事：スラブのかぶり厚さ（P.153）",
      q: "コンクリート内部の鉄筋をサビから守るため、コンクリート表面から鉄筋外側までの最短距離を「かぶり」と呼びます。**コンクリートが持つどのような性質が鉄筋の酸化（サビ）を防いでいますか**。",
      q_id: "Sifat kimia apakah yang dimiliki beton basah/kering sehingga mampu melindungi besi tulangan di dalamnya dari karat?",
      q_ne: "कंक्रीटमा हुने कुन रासायनिक गुणले गर्दा भित्रको रडमा खिया लाग्न पाउँदैन?",
      options: [
        { ja: "強いアルカリ性（時間が経つと大気中の炭酸ガスで中性化が進む）", id: "Sifat Basa Kuat (Alkali) yang seiring waktu akan dinetralisir oleh udara luar", ne: "कडा अल्काली (क्षारीय) गुण (समय बित्दै जाँदा हावाको कारण न्युट्रल हुँदै जान्छ)" },
        { ja: "強い酸性", id: "Sifat Asam Kuat", ne: "कडा अम्ल (एसिडिक) गुण" },
        { ja: "高い油分と脂質", id: "Kandungan minyak dan lemak tinggi", ne: "धेरै तेल र चिल्लोपन भएको गुण" },
        { ja: "完全な真空状態", id: "Kondisi ruang hampa udara total", ne: "हावा नै नछिर्ने भ्याकुम अवस्था" }
      ],
      answer: 0,
      expJa: "【テキスト P.153参照】コンクリートは強アルカリ性のため鉄筋を錆から守りますが、年月の経過とともに空気中の二酸化炭素等により中性化が進み、鉄筋まで達すると錆びてしまいます[cite: 46]。",
      expId: "Beton bersifat alkali kuat sehingga melindungi besi dari karat. Jika lapisan 'kaburi' tipis, proses netralisasi cepat membuat besi berkarat dan retak.",
      expNe: "कंक्रीट कडा अल्काली हुने भएकोले रड खिया लाग्दैन। तर कभर पातलो भएमा छिट्टै खिया लागेर ढलान फुट्छ।"
    },
    {
      cat: "第6章 鉄筋継手：ガス圧接の初期加圧と炎（P.156〜157）",
      q: "鉄筋のガス圧接作業において、突き合わせた端面が酸化して不純物が混ざるのを防ぐため、**加熱の初期段階で使用するバーナーの炎**はどれですか。",
      q_id: "Jenis nyala api apakah yang digunakan pada tahap awal pemanasan gas assetsu untuk mencegah oksidasi pada permukaan sambungan besi?",
      q_ne: "ग्यास वेल्डिङ (आस्सेचु) गर्दा रडको टुप्पोमा खिया वा फोहोर पस्न नदिन सुरुमा प्रयोग गरिने आगोको ज्वाला कुन हो?",
      options: [
        { ja: "還元炎（かんげんえん）", id: "Kangen-en (Nyala Api Reduksi / Api Berlebih Asetilen)", ne: "कान्गेन-एन (अक्सिजन घटाएर निकालिने विशेष ज्वाला)" },
        { ja: "酸化炎（さんかえん）", id: "Sanka-en (Nyala Api Oksidasi)", ne: "सान्का-एन (अक्सिजन धेरै भएको आगो)" },
        { ja: "ろうそくの炎", id: "Lilin biasa", ne: "मैनबत्तीको आगो" },
        { ja: "ライターの火", id: "Korek api gas biasa", ne: "लाइटरको आगो" }
      ],
      answer: 0,
      expJa: "【テキスト P.157図参照】ガス圧接の初期加圧段階では、端面の酸化を防ぐために「還元炎」を使用し、その後「中性炎」で均一に加熱してふくらみを形成します[cite: 48]。",
      expId: "Pada tahap awal pengelasan gas assetsu, api reduksi (kangen-en) dipakai agar permukaan potongan besi tidak teroksidasi oleh oksigen.",
      expNe: "सुरुमा रडलाई डढ्न र खिया लाग्न नदिन 'कान्गेन-एन' ज्वाला प्रयोग गरी चाप दिइन्छ।"
    },
    {
      cat: "第6章 溶接工事：溶接ヒューム対策（P.157〜158）",
      q: "アーク溶接作業を行う際、金属蒸気が空気中で冷却されて煙のように浮遊する物質（溶接ヒューム）を吸い込むと「じん肺」等の健康障害を起こします。**これを防ぐために作業員が必ず着用する保護具**は何ですか。",
      q_id: "Alat pelindung diri (APD) apakah yang WAJIB dipakai juru las untuk mencegah terhirupnya uap asap logam (welding fume) yang merusak paru-paru?",
      q_ne: "आर्क वेल्डिङ गर्दा निस्कने विषालु धातुको धुवाँ (ह्युम) फोक्सोमा जान नदिन अनिवार्य लगाउनुपर्ने मास्क कुन हो?",
      options: [
        { ja: "防塵マスク（ぼうじんマスク）", id: "Masker Debu Khusus Las (Boujin Mask)", ne: "धुलो/धुवाँ छेक्ने मास्क (बौजिन मास्क)" },
        { ja: "紙の使い捨てサージカルマスク", id: "Masker medis kertas biasa", ne: "सामान्य कागजको मेडिकल मास्क" },
        { ja: "ガーゼマスク", id: "Masker kain kasa", ne: "कपडाको सामान्य मास्क" },
        { ja: "タオルを口に巻くだけ", id: "Hanya melilitkan handuk ke mulut", ne: "मुखमा रुमाल मात्र बाँध्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.157〜158参照】溶接ヒュームを吸い込むと頭痛や発熱、肺の機能障害（じん肺）を起こすため、規格を満たした防塵マスクの着用が義務付けられています[cite: 48, 51]。",
      expId: "Uap logam las (welding fume) menyebabkan sakit paru-paru kronis (pneumoconiosis). Wajib menggunakan masker debu berfilter standar industri.",
      expNe: "वेल्डिङको धुवाँले फोक्सोको गम्भीर रोग (जिनपाइ) लाग्ने हुनाले गुणस्तरीय 'बौजिन मास्क' अनिवार्य लगाउनुपर्छ।"
    },
    {
      cat: "第6章 型枠工事：スラブ支保工の水平つなぎ（P.158〜159）",
      q: "スラブ（床）の型枠を支えるパイプサポート（支保工）において、**サポートの高さが長くなる場合、座屈（折れ曲がり）を防ぐために設ける安全基準**として正しいものはどれですか。",
      q_id: "Berdasarkan standar keselamatan, pada ketinggian berapakah pipa support bekisting lantai wajib dipasang pengikat horizontal (suikei tsunagi)?",
      q_ne: "भुइँको ढलान फर्मा अड्याउने पाइप सपोर्ट अग्लो हुँदा, त्यसलाई दोब्रिन वा भाँचिन नदिन कति उचाइमा तेर्सो पाइप (होरिजोन्टल पाइप) बाँध्नुपर्छ?",
      options: [
        { ja: "高さ2m以内ごとに水平つなぎを設ける", id: "Wajib dipasang pipa pengikat horizontal setiap ketinggian maksimal 2 meter", ne: "प्रत्येक २ मिटरको उचाइभित्र तेर्सो सुरक्षा पाइप बाँध्ने" },
        { ja: "高さ10mごとに1箇所設ければよい", id: "Cukup setiap 10 meter sekali", ne: "१० मिटरको फरकमा एउटा मात्र बाँधे पुग्छ" },
        { ja: "パイプサポートは何本つないでも水平つなぎは不要である", id: "Tidak perlu pengikat sama sekali berapa pun tingginya", ne: "जतिसुकै अग्लो भए पनि तेर्सो पाइप बाँध्न पर्दैन" },
        { ja: "天井のコンクリートが固まってから水平つなぎを入れる", id: "Pengikat baru dipasang setelah cor beton mengeras", ne: "ढलान सुकिसकेपछि मात्र तेर्सो पाइप बाँध्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.159参照】パイプサポートの滑動や座屈を防ぐため、足元には根がらみを設け、サポートが長くなる場合は「高さ2m以内ごと」に単管パイプで水平つなぎを取り付けます[cite: 52]。",
      expId: "Pipe support yang tinggi mudah melengkung/patah jika terbebani beton basah. Standar wajib memasang bracing horizontal setiap tinggi 2 meter.",
      expNe: "ढलानको भारीले टेको दोब्रिन सक्ने हुनाले प्रत्येक २ मिटरको उचाइमा तेर्सो पाइपले एकअर्कालाई बाँध्नुपर्छ।"
    },
    {
      cat: "第6章 コンクリート圧送：ポンプ車のアウトリガ設置（P.159〜160）",
      q: "コンクリートポンプ車で打設を行う際、車体の転倒を防ぐためにアウトリガを最大幅に張り出します。**傾斜地において許容される「車体の水平角度の傾き」**は前後左右とも何度以内ですか。",
      q_id: "Berapakah sudut kemiringan maksimal horizontal (depan-belakang, kiri-kanan) yang diizinkan saat menyetel outrigger pompa beton di tanah miring?",
      q_ne: "भिरालो जमिनमा कंक्रीट पम्प गाडी राख्दा, गाडी पल्टिन नदिन अगाडि-पछाडि र दायाँ-बायाँको लेभल बढीमा कति डिग्रीभित्र हुनुपर्छ?",
      options: [
        { ja: "3°以内（前後左右とも）", id: "Maksimal 3 derajat (depan, belakang, kiri, kanan)", ne: "३ डिग्रीभित्र (अगाडि, पछाडि, दायाँ, बायाँ चारैतिर)" },
        { ja: "15°以内", id: "Maksimal 15 derajat", ne: "१५ डिग्रीभित्र" },
        { ja: "45°以内", id: "Maksimal 45 derajat", ne: "४५ डिग्रीभित्र" },
        { ja: "傾いていてもタイヤが浮いていれば何度でも良い", id: "Boleh miring berapa saja asalkan ban terangkat", ne: "पाङ्ग्रा हावामा भए जति ढल्के पनि फरक पर्दैन" }
      ],
      answer: 0,
      expJa: "【テキスト P.160参照】コンクリートポンプ車の打設では、アウトリガを最大幅に張り出し、傾斜地では水平角度が前後左右とも「3°以内」になるようジャッキで調整します[cite: 53]。",
      expId: "Sudut kemiringan maksimal mobil pompa beton adalah 3 derajat ke segala arah. Lebih dari itu, boom bisa terbalik saat menyalurkan cor.",
      expNe: "पम्प गाडी पल्टिनबाट रोक्न यसको लेभल चारैतिर बढीमा ३ डिग्री भित्रै ठ्याक्कै मिलाउनुपर्छ।"
    },
    {
      cat: "第6章 コンクリート圧送：電線との安全離隔距離（P.160）",
      q: "コンクリートポンプ車のブームを旋回・伸長させて作業する際、**周辺の高圧電線に対して直接接触していなくても感電事故が起こる原因**は何ですか。",
      q_id: "Mengapa kecelakaan sengatan listrik fatal bisa terjadi saat boom pompa beton mendekati kabel tegangan tinggi meskipun TIDAK menempel fisik secara langsung?",
      q_ne: "पम्प गाडीको लामो पाइपले हाइभोल्टेज बिजुलीको तारलाई नछुँदा पनि करेन्ट लाग्ने मुख्य कारण के हो?",
      options: [
        { ja: "高圧電線は近づくだけで空気を突き破って電気が流れる「火花放電（アーク放電）」が起きるため", id: "Karena tegangan tinggi dapat melompat melalui udara menciptakan 'Pelepasan Bunga Api' (Arc Flash) saat jarak terlalu dekat", ne: "हाइभोल्टेज तारमा नजिक पुग्ने बित्तिकै हावाबाटै बिजुलीको झिल्का उछिट्टिएर (आर्क डिस्चार्ज) करेन्ट प्रवाह हुने भएकोले" },
        { ja: "生コンクリートが磁石のように電気を吸い寄せるから", id: "Karena adonan beton basah bersifat magnet menarik listrik", ne: "कंक्रीटले चुम्बक जस्तै बिजुली तानेकोले" },
        { ja: "作業員の履いている安全靴が電気を発電するから", id: "Karena sepatu safety pekerja menghasilkan listrik", ne: "जुत्ताले आफैं करेन्ट निकालेकोले" },
        { ja: "高圧電線は風が吹くとゴムのように伸びて巻き付いてくるから", id: "Karena kabel listrik bisa memanjang melilit alat saat tertiup angin", ne: "हावाले गर्दा तार रबर जस्तै तन्किएर बेरिने भएकोले" }
      ],
      answer: 0,
      expJa: "【テキスト P.160参照】電圧の高い電線は、直接接触しなくても火花放電（アーク）によって電気が流れて感電します。必ず定められた「安全離隔距離」を保つ必要があります[cite: 53]。",
      expId: "Listrik tegangan tinggi bisa menyambar loncat lewat udara (spark discharge). Wajib menjaga jarak bebas aman (anzen rikaku kyori) setiap saat.",
      expNe: "हाइभोल्टेज तार नछुँदा पनि हावाबाटै करेन्ट हान्छ। त्यसैले तोकिएको निश्चित सुरक्षा दूरी (दूरी कायम) राख्नै पर्छ।"
    },
    {
      cat: "第6章 型枠工事：フォームタイと単管パイプ（P.158）",
      q: "コンクリート打設時の生コン側圧は非常に巨大です。**壁型枠の膨らみや破壊（パンク）を防ぐため、フォームタイを締め付ける際の正しい施工方法**はどれですか。",
      q_id: "Bagaimanakah metode yang BENAR dalam memasang pengunci form-tie pada bekisting dinding agar tidak jebol oleh tekanan beton basah?",
      q_ne: "ढलान गर्दा भित्ताको फर्मा फुट्न नदिन 'फर्म-टाई (फर्मा कस्ने बोल्ट)' कस्दा कुन तरिका अपनाउनु सही हो?",
      options: [
        { ja: "セパレータとフォームタイに単管パイプを通し、適正なピッチで均等に堅固に締め付ける", id: "Memasukkan pipa perancah (tankan pipe) di antara form-tie dan kencangkan merata pada jarak rapat yang dihitung aman", ne: "सेपारेटर र फर्म-टाईको बीचमा तेर्सो-ठाडो पाइप छिराएर नियम अनुसारको दूरीमा बलियोसँग कस्ने" },
        { ja: "単管パイプは重いので通さず、ベニヤ板に直接ナットを締め付ける", id: "Tidak memakai pipa besi penguat dan hanya memasang mur langsung ke triplek bekisting", ne: "पाइप नहाली सिधै काठको फर्मामा मात्र नट कस्ने" },
        { ja: "フォームタイは一番上と一番下の2箇所だけ締めれば十分である", id: "Cukup mengencangkan form-tie di bagian paling atas dan bawah saja", ne: "सबैभन्दा माथि र मुनि दुई ठाउँमा मात्र कसे पुग्छ" },
        { ja: "手で軽く回して止まったところで締付け作業を終える", id: "Cukup diputar ringan dengan tangan kosong tanpa kunci pas", ne: "रेन्च प्रयोग नगरी हातले मात्र हल्का घुमाएर छोड्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.158参照】壁型枠はセパレータ、Pコン、フォームタイを用い、単管パイプを通して堅固に締め付けることでコンクリートの巨大な側圧に耐える構造にします[cite: 51]。",
      expId: "Form-tie wajib dipasang dengan menjepit pipa baja perancah (tankan pipe) ganda agar permukaan bekisting rata kuat menahan tekanan beton basah.",
      expNe: "फर्मा फुट्न नदिन फलामको पाइप छिराएर फर्म-टाई र सेपारेटरलाई बलियो गरी कस्नुपर्छ।"
    }
  ]
};
