const CURRENT_QUIZ_DATA = {
  title: "Day 18：<ruby>工程計画<rt>こうていけいかく</rt></ruby>・ネットワーク<ruby>式工程表<rt>しきこうていひょう</rt></ruby>（テキスト P.43〜47）",
  key: "score_gakka3_18",
  passScore: 70,
  questions: [
    {
      cat: "第2章 工程管理の役割（P.43〜54）",
      q: "工程管理において<ruby>職長<rt>しょくちょう</rt></ruby>が<ruby>担<rt>にな</rt></ruby>う「**4つの役割**」の組み合わせとして、正しいものはどれですか。",
      q_id: "Manakah kombinasi yang BENAR mengenai 4 peran Shokucho dalam manajemen jadwal kerja (Koutei Kanri)?",
      q_ne: "कार्यतालिका व्यवस्थापन (कोउतेइ कान्री) मा शोकुचोका ४ मुख्य भूमिकाहरूको सही जोडी कुन हो?",
      options: [
        { ja: "工程計画の作成・工程計画の共有・工程計画の監視・工程計画の更新", id: "Pembuatan jadwal, Pembagian/sharing jadwal, Pemantauan jadwal, Pembaruan jadwal", ne: "तालिका बनाउने, तालिका आदानप्रदान गर्ने, तालिकाको निगरानी गर्ने, तालिका अद्यावधिक गर्ने" },
        { ja: "工事費の請求・下請への発注・作業員の解雇・材料の転売", id: "Penagihan biaya, Pemesanan subkon, Pemecatan pekerja, Penjualan material", ne: "खर्च असुल्ने, ठेक्का दिने, कामदार निकाल्ने, सामान बेच्ने" },
        { ja: "朝礼の廃止・安全パトロールの中止・手戻りの容認・夜勤の強制", id: "Menghapus briefing, Menghentikan patroli, Membiarkan kesalahan, Memaksa shift malam", ne: "बैठक हटाउने, गस्ती रोक्ने, गल्ती छोड्ने, रात्रिकालीन काम जबर्जस्ती लगाउने" },
        { ja: "設計図面の変更・建築確認申請・地鎮祭の手配・近隣補償", id: "Mengubah gambar arsitek, Izin mendirikan bangunan, Upacara adat, Ganti rugi tetangga", ne: "नक्सा बदल्ने, अनुमति लिने, पूजा गर्ने, छिमेकीलाई मुआब्जा दिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.43〜44参照】職長の工程管理の役割は、①工程計画の作成、②作業員との共有、③現場での進捗監視、④遅れや状況変化に応じた計画更新の4つです。",
      expId: "4 pilar manajemen jadwal oleh Shokucho adalah: Membuat jadwal (Sakusei), Membagikan (Kyouyuu), Mengawasi (Kanshi), dan Memperbarui (Koushin).",
      expNe: "शोकुचोको कार्यतालिका सम्बन्धी ४ जिम्मेवारीहरू: योजना बनाउने, कामदारलाई बुझाउने, कामको गति जाँच्ने र आवश्यकता अनुसार तालिका सच्याउने हुन्।"
    },
    {
      cat: "第2章 日数決定の方法（P.44）",
      q: "工程に必要な日数を決める方法のうち、**「それぞれの作業に必要な日数を前から順番に足し加えていく方法」**を何と呼びますか。",
      q_id: "Apa sebutan untuk metode penentuan jadwal dengan cara menjumlahkan hari kerja yang dibutuhkan dari tahapan awal ke tahap berikutnya secara berurutan?",
      q_ne: "सुरुको चरणबाट आवश्यक दिनहरू जोड्दै अन्तिम मिति निकाल्ने विधिलाई के भनिन्छ?",
      options: [
        { ja: "順行法（じゅんぎょうほう）", id: "Metode Maju (Jungyou-hou / Forward scheduling)", ne: "जुनग्यौ-हौ (अगाडिबाट दिन जोड्दै लैजाने विधि)" },
        { ja: "逆算法（ぎゃくさんほう）", id: "Metode Mundur (Gyakusan-hou / Backward scheduling)", ne: "ग्याकुसान-हौ (अन्तिम दिनबाट उल्टो हिसाब गर्ने विधि)" },
        { ja: "消去法（しょうきょほう）", id: "Metode Eliminasi", ne: "हटाउने विधि" },
        { ja: "概算法（がいさんほう）", id: "Metode Estimasi Kasar", ne: "अन्दाजी विधि" }
      ],
      answer: 0,
      expJa: "【テキスト P.44参照】作業に必要な日数を積み上げていく方法を「順行法」、工事の完成期日から逆算して各工程の日数を割り出す方法を「逆算法」と呼びます。",
      expId: "Jungyou-hou (forward) menghitung maju dari awal pekerjaan, sedangkan Gyakusan-hou (backward) menghitung mundur dari batas akhir serah terima.",
      expNe: "सुरुको कामबाट दिन जोड्दै अन्तिम मिति निकाल्नु 'जुनग्यौ-हौ' हो, र सम्पन्न हुने मितिबाट उल्टो हिसाब गरी दिन बाँड्नु 'ग्याकुसान-हौ' हो।"
    },
    {
      cat: "第2章 ネットワーク式工程表：基本（P.44〜45）",
      q: "ネットワーク式工程表において、**「〇印」**は何を意味していますか。",
      q_id: "Dalam diagram jaringan kerja (Network Schedule), apakah arti dari simbol lingkaran (○)?",
      q_ne: "नेटवर्क कार्यतालिका (नेटवर्क सिस्टिम) मा 'गोलो चिन्ह (〇)' ले के जनाउँछ?",
      options: [
        { ja: "イベント（作業の開始点や完了点などの節目）", id: "Event (Simpul / Titik awal atau akhir dari suatu tahapan kegiatan)", ne: "इभेन्ट (कुनै काम सुरु हुने वा सकिने मुख्य बिन्दु)" },
        { ja: "作業の日数（作業期間）", id: "Durasi jumlah hari kerja", ne: "काम लाग्ने दिनको संख्या" },
        { ja: "作業員の人数（人工）", id: "Jumlah personel pekerja (mandays)", ne: "कामदारको संख्या" },
        { ja: "使用する建設機械の台数", id: "Jumlah unit alat berat yang dipakai", ne: "प्रयोग हुने मेसिनको संख्या" }
      ],
      answer: 0,
      expJa: "【テキスト P.44〜45参照】ネットワーク式工程表において、〇印は「イベント（作業の区切り・節目）」を表し、作業内容や所要日数は「矢印（アクティビティ）」で表します。",
      expId: "Simbol lingkaran (○) adalah 'Event', yaitu titik peristiwa mulai atau selesainya suatu pekerjaan. Tanda panah adalah kegiatan dan durasi hari.",
      expNe: "नेटवर्क तालिकामा गोलो चिन्ह (〇) ले 'इभेन्ट' अर्थात् काम सुरु हुने वा सकिने बिन्दु जनाउँछ। तीरले काम र दिन जनाउँछ।"
    },
    {
      cat: "第2章 ネットワーク式工程表：点線（P.45）",
      q: "ネットワーク式工程表において、作業時間を必要としない**「点線の矢印（ダミー）」**が示している意味として、正しいものはどれですか。",
      q_id: "Apakah arti dari tanda panah garis putus-putus (Dummy) pada diagram jaringan kerja yang tidak memerlukan waktu pengerjaan?",
      q_ne: "कुनै समय नलाग्ने 'डट-डट भएको तीर (डमी)' ले नेटवर्क तालिकामा के अर्थ राख्छ?",
      options: [
        { ja: "前のイベントが完了しないと、次のイベントの作業を開始できないという「作業の順序関係」", id: "Keterkaitan urutan: tahapan berikutnya TIDAK BISA dimulai sebelum tahapan sebelumnya selesai", ne: "अघिल्लो चरणको काम नसकिई त्यसपछिको काम सुरु गर्न मिल्दैन भन्ने अनिवार्य नियम" },
        { ja: "雨が降ったときだけ行う予備の作業", id: "Pekerjaan cadangan yang hanya dilakukan saat hujan", ne: "पानी पर्दा मात्र गरिने वैकल्पिक काम" },
        { ja: "別の会社にすべて丸投げして外注する作業", id: "Pekerjaan yang disubkontrakkan seluruhnya ke pihak luar", ne: "अरू कम्पनीलाई जिम्मा दिइने बाहिरी काम" },
        { ja: "すでに完了して二度と行わない過去の作業", id: "Pekerjaan masa lalu yang telah rampung dan tidak diulang lagi", ne: "पहिले नै सकिएको पुरानो काम" }
      ],
      answer: 0,
      expJa: "【テキスト P.45参照】点線の矢印（ダミー）は作業日数はゼロですが、「先行作業が完了しないと後続作業を開始できない」という作業手順の制約関係を表します。",
      expId: "Garis putus-putus (dummy) menunjukkan ketergantungan logika: pekerjaan di ujung panah tidak boleh mulai sebelum pangkalnya tuntas.",
      expNe: "डट-डट तीरले समय नलिए पनि अघिल्लो काम पूरा नभएसम्म अर्को काम सुरु हुन सक्दैन भन्ने कडा नियम देखाउँछ।"
    },
    {
      cat: "第2章 クリティカルパス（P.45）",
      q: "ネットワーク式工程表において、**「全体の工期に直接影響するため、1日も遅れが許されない最長の日数を要する作業経路」**を何と呼びますか。",
      q_id: "Apa sebutan untuk jalur kegiatan terpanjang pada network schedule yang tidak boleh terlambat sama sekali karena akan langsung menunda tanggal selesai proyek?",
      q_ne: "नेटवर्क तालिकामा अलिकति पनि ढिलो हुन नहुने, जसले गर्दा पूरै भवनको म्याद ढिलो हुन्छ, त्यस्तो सबैभन्दा लामो मुख्य बाटोलाई के भनिन्छ?",
      options: [
        { ja: "クリティカルパス（重点管理経路）", id: "Critical Path (Lintasan Kritis)", ne: "क्रिटिकल पाथ (सबैभन्दा जोखिमपूर्ण मुख्य बाटो)" },
        { ja: "バイパス（迂回路）", id: "Bypass (Jalur pintas)", ne: "बाइपास (वैकल्पिक बाटो)" },
        { ja: "スロープ", id: "Slope (Tanjakan)", ne: "भिरालो बाटो" },
        { ja: "フロート（余裕時間）", id: "Float (Waktu longgar)", ne: "फ्लोट (फुर्सदको समय)" }
      ],
      answer: 0,
      expJa: "【テキスト P.45参照】遅れの許されない経路を「クリティカルパス」と呼びます。テキスト図2-7の例では、作業A（10日）→作業B（6日）→作業D（5日）の計21日間がクリティカルパスです。",
      expId: "Critical Path adalah rangkaian pekerjaan terpanjang tanpa toleransi keterlambatan; jika terlambat 1 hari saja, serah terima gedung pasti molor.",
      expNe: "'क्रिटिकल पाथ' भन्नाले १ दिन पनि ढिलो हुन नहुने मुख्य कामको बाटो हो। यसमा ढिलो हुनासाथ पूरै प्रोजेक्ट ढिलो हुन्छ।"
    },
    {
      cat: "第2章 余裕日数の計算（P.45）",
      q: "テキスト図2-7において、作業A完了後に「**作業B（所要日数6日）**」と「**作業C（所要日数3日）**」が同時に進められ、両方が終わった後に作業Dへ進む場合、**作業Cには何日間の余裕（フロート）**がありますか。",
      q_id: "Berdasarkan Gambar 2-7, jika Kegiatan B butuh 6 hari dan Kegiatan C butuh 3 hari dikerjakan bersamaan sebelum lanjut ke D, berapa hari kelonggaran waktu (float) yang dimiliki Kegiatan C?",
      q_ne: "चित्र २-७ अनुसार, काम B सक्न ६ दिन र काम C सक्न ३ दिन लाग्छ, र दुवै सकिएपछि मात्र काम D सुरु हुन्छ भने, काम C सँग कति दिनको फुर्सद (मार्जिन) छ?",
      options: [
        { ja: "3日間の余裕がある", id: "Ada kelonggaran 3 hari", ne: "३ दिनको फुर्सद (अतिरिक्त समय) छ" },
        { ja: "余裕は全くない（0日）", id: "Sama sekali tidak ada kelonggaran (0 hari)", ne: "कुनै समय छैन (० दिन)" },
        { ja: "6日間の余裕がある", id: "Ada kelonggaran 6 hari", ne: "६ दिनको फुर्सद छ" },
        { ja: "10日間の余裕がある", id: "Ada kelonggaran 10 hari", ne: "१० दिनको फुर्सद छ" }
      ],
      answer: 0,
      expJa: "【テキスト P.45参照】作業B（6日）が終わるまで次のイベント④には進めません。作業Cは3日で終わるため、6日－3日＝3日間の余裕日数（トータルフロート）があると解釈できます。",
      expId: "Karena kegiatan B butuh 6 hari, kegiatan C yang hanya butuh 3 hari memiliki sisa toleransi waktu menganggur 6 - 3 = 3 hari.",
      expNe: "काम B लाई ६ दिन लाग्छ, तर C लाई ३ दिन मात्र लाग्ने हुनाले ६ - ३ = ३ दिनसम्म काम C ढिलो भए पनि समग्र काममा फरक पर्दैन।"
    },
    {
      cat: "第2章 全体工期の読み取り（P.45）",
      q: "テキスト図2-7のネットワーク式工程表において、①から⑤までの**「工事全体の最短完了日数」**は何日と読み取れますか。",
      q_id: "Berapa hari total durasi minimum penyelesaian seluruh proyek dari awal simpul (1) hingga akhir (5) berdasarkan Gambar 2-7?",
      q_ne: "चित्र २-७ को नेटवर्क तालिका अनुसार, काम सुरु (१) देखि सम्पन्न (५) हुन कुल कति दिन आवश्यक पर्छ?",
      options: [
        { ja: "21日間（A:10日 ＋ B:6日 ＋ D:5日）", id: "21 hari (A:10 hari + B:6 hari + D:5 hari)", ne: "२१ दिन (A:१० दिन + B:६ दिन + D:५ दिन)" },
        { ja: "18日間（A:10日 ＋ C:3日 ＋ D:5日）", id: "18 hari (A:10 hari + C:3 hari + D:5 hari)", ne: "१८ दिन" },
        { ja: "24日間（A:10日 ＋ B:6日 ＋ C:3日 ＋ D:5日）", id: "24 hari (dijumlahkan semua)", ne: "२४ दिन" },
        { ja: "15日間", id: "15 hari", ne: "१५ दिन" }
      ],
      answer: 0,
      expJa: "【テキスト P.45参照】①→②が10日、②→③→④が6日、④→⑤が5日です。最長経路（クリティカルパス）を通るため、全体の所要日数は 10 ＋ 6 ＋ 5 ＝ 21日 となります。",
      expId: "Total durasi dihitung dari jalur terpanjang: A (10 hari) + B (6 hari) + D (5 hari) = 21 hari. Angka pada kotak akhir simpul ⑤ menunjukkan 21.",
      expNe: "सबैभन्दा लामो बाटोको हिसाब गर्दा: A को १० दिन + B को ६ दिन + D को ५ दिन = २१ दिन पूरा लाग्छ।"
    },
    {
      cat: "第2章 工程表の更新・人員再配置（P.46）",
      q: "テキスト図2-8において、クリティカルパス上の**「作業Bが予定より遅れそう」になった場合**、全体の完了日（21日）を守るために職長が取るべき適切な対策はどれですか。",
      q_id: "Jika Kegiatan B berisiko terlambat, tindakan apakah yang paling tepat diambil Shokucho untuk mempertahankan tanggal selesai (21 hari) seperti pada Gambar 2-8?",
      q_ne: "यदि मुख्य काम B ढिलो हुन लाग्यो भने, २१ दिनमै काम सक्न शोकुचोले चित्र २-८ अनुसार कस्तो उपाय लगाउनुपर्छ?",
      options: [
        { ja: "3日間の余裕がある作業Cから作業員を1人、遅れそうな作業Bに応援（増員）として配置転換する", id: "Memindahkan 1 orang pekerja dari kegiatan C yang punya waktu longgar ke kegiatan B yang terancam telat", ne: "३ दिन फुर्सद भएको काम C बाट १ जना कामदारलाई काम B मा मद्दत गर्न (बढाउन) खटाउने" },
        { ja: "全体の完成予定日を勝手に1週間延期して会社や元請に黙っておく", id: "Mengulur tanggal serah terima seminggu tanpa memberi tahu siapa pun", ne: "कम्पनी र इन्जिनियरलाई नबताई सुटुक्क म्याद १ हप्ता पछाडि सार्ने" },
        { ja: "作業Bの作業員を全員帰宅させて作業を完全に放棄する", id: "Menyuruh semua pekerja di kegiatan B pulang dan membiarkan proyek mangkrak", ne: "काम B का सबै कामदारलाई घर पठाएर काम पूरै अलपत्र छोड्ने" },
        { ja: "安全ルールをすべて無視して手抜き工事を命じる", id: "Memerintahkan mengabaikan semua aturan keselamatan dan bekerja asal-asalan", ne: "सुरक्षाका नियम मिचेर गुणस्तरहीन काम छिटो गर्न दबाब दिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.46参照】余裕のある作業C（予定3日を4日に変更してもまだ余裕あり）から人員を作業Bに割り当てて増員し、全体の工期（21日）に影響を出さないように調整します。",
      expId: "Solusi cerdas mandor adalah mengalihkan tenaga kerja dari pekerjaan C yang memiliki sisa waktu longgar ke pekerjaan B yang sedang kritis.",
      expNe: "काम C मा फुर्सद भएकाले त्यहाँबाट १ जना मान्छे काम B मा सारेर काम B लाई छिटो अघि बढाउने र २१ दिनमै काम सम्पन्न गर्ने।"
    },
    {
      cat: "第2章 他職種との工程調整（P.47）",
      q: "工事現場において、**「自社の工程計画」だけでなく「工事全体の工程計画」の最新状況も常に把握しておくべき理由**として、最も適切なものはどれですか。",
      q_id: "Mengapa seorang Shokucho WAJIB selalu memantau status terbaru dari 'Jadwal Keseluruhan Proyek', bukan hanya jadwal perusahaannya sendiri?",
      q_ne: "शोकुचोले आफ्नो कम्पनीको तालिका मात्र नभई 'पूरै प्रोजेक्टको समग्र कार्यतालिका' को अवस्था सधैं बुझिराख्नु किन आवश्यक छ?",
      options: [
        { ja: "他の工事業者の遅れが自分たちの作業開始に影響したり、資材・機械の搬入日の調整が必要になるため", id: "Karena keterlambatan subkon lain akan menghambat dimulainya tugas kita, serta perlunya sinkronisasi kedatangan alat/material", ne: "अरू कम्पनीको काम ढिलो हुँदा आफ्नो काम सुरु गर्न असर पर्ने र सामान वा मेसिन ल्याउने समय मिलाउनुपर्ने हुनाले" },
        { ja: "他の業者のミスを見つけて社長に告げ口し、工事代金を横取りするため", id: "Untuk mencari-cari kesalahan subkon lain dan melaporkannya agar dapat tambahan uang", ne: "अरूको गल्ती पत्ता लगाएर उनीहरूको पैसा खोस्नका लागि" },
        { ja: "自分たちの作業をサボって現場を抜け出すタイミングを見計らうため", id: "Mencari celah waktu untuk bolos meninggalkan tempat kerja", ne: "काम छलेर कार्यस्थलबाट भाग्ने मौका खोज्नका लागि" },
        { ja: "元請の現場監督の仕事を奪って自分が現場監督に昇進するため", id: "Untuk merebut posisi pengawas utama dan naik jabatan sendiri", ne: "इन्जिनियरको काम खोसेर आफैं इन्जिनियर बन्नका लागि" }
      ],
      answer: 0,
      expJa: "【テキスト P.47参照】他職種の遅れが自分たちの作業開始を遅らせる恐れがあります。職長同士で事前打ち合わせを行い、重機の搬入日や工程の調整を行うことが不可欠です。",
      expId: "Mandor harus tahu jadwal menyeluruh karena keterlambatan bidang lain (misal cor belum kering) langsung menunda pekerjaan kita.",
      expNe: "अरूको काम ढिलो भएमा (जस्तै ढलान नसकिएमा) आफ्नो काम सुरु गर्न मिल्दैन, त्यसैले आपसमा छलफल गरी समय मिलाउनुपर्छ।"
    },
    {
      cat: "第2章 重点監視作業（P.47）",
      q: "天候不良などの不測の事態に備え、工程を確実に管理するために**「職長が重点的に進捗を監視すべき作業」**はどれですか。",
      q_id: "Untuk mengantisipasi cuaca buruk dan hambatan tak terduga, kegiatan manakah yang WAJIB dipantau secara ekstra ketat oleh Shokucho?",
      q_ne: "खराब मौसम जस्ता समस्या आइपरे पनि काम समयमै सक्न शोकुचोले 'सबैभन्दा बढी ध्यान दिएर निगरानी गर्नुपर्ने काम' कुन हो?",
      options: [
        { ja: "遅れの許されないクリティカルパス上の作業（テキスト図2-7の作業A、B、D）", id: "Pekerjaan pada lintasan kritis yang tidak memiliki toleransi keterlambatan (Kegiatan A, B, dan D)", ne: "अलिकति पनि ढिलो हुन नहुने क्रिटिकल पाथमा रहेका कामहरू (चित्र २-७ का काम A, B, र D)" },
        { ja: "何日遅れても全体に一切影響しない作業（余裕日数が無限にある作業）", id: "Pekerjaan santai yang terlambat berapa hari pun tidak berdampak", ne: "जति दिन ढिलो भए पनि कुनै असर नगर्ने फुर्सदिला कामहरू" },
        { ja: "すでに完了して検査も合格している作業", id: "Pekerjaan yang telah tuntas dan lulus inspeksi sebelumnya", ne: "पहिले नै सकिएर पास भइसकेका कामहरू" },
        { ja: "来月以降に着手する予定のまだ始まっていない作業", id: "Pekerjaan bulan depan yang belum dimulai sama sekali", ne: "अर्को महिना बल्ल सुरु हुने टाढाका कामहरू" }
      ],
      answer: 0,
      expJa: "【テキスト P.47参照】遅れが許されない作業（A、B、Dなどのクリティカルパス）は重点的に進捗を監視します。また、工程計画よりもやや早めに完了するペースで進めるのがリスク管理の基本です。",
      expId: "Pekerjaan di jalur kritis (A, B, D) wajib diawasi paling ketat karena jika satu saja meleset, target selesai proyek langsung jebol.",
      expNe: "क्रिटिकल पाथमा रहेका कामहरू (A, B, D) १ दिन पनि ढिलो हुन नदिन निरन्तर कडा निगरानीमा राख्नुपर्छ।"
    }
  ]
};
