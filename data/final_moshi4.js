const CURRENT_QUIZ_DATA = {
  title: "直前フル模試④：【本番的中】<ruby>学科<rt>がっか</rt></ruby>40問 ＋ <ruby>実技<rt>じつぎ</rt></ruby>25問（計65問）",
  key: "score_final_moshi_4",
  passScore: 70,
  questions: [
    // ==========================================
    // 【学科試験パート：40問（問1〜問40）】
    // ==========================================
    {
      cat: "学科：環境管理・ミティゲーションの順序",
      q: "問1：建設工事における自然環境保全の考え方「環境ミティゲーション（緩和措置）」において、最も優先すべき対策の順序として正しいものはどれですか。",
      q_id: "Soal 1: Manakah urutan prioritas yang BENAR dalam konsep 'Mitigasi Lingkungan' untuk meminimalkan dampak buruk proyek konstruksi terhadap alam?",
      q_ne: "प्रश्न १: निर्माण कार्य गर्दा वातावरण जोगाउन अपनाइने 'वातावरणीय न्यूनीकरण (मिटिगेसन)' को सबैभन्दा पहिलोदेखि अन्तिम प्राथमिकताको सही क्रम कुन हो?",
      options: [
        { ja: "①回避（影響を完全に避ける） ➔ ②最小化（影響を小さく抑える） ➔ ③修正・復元（元の状態に戻す） ➔ ④代償（別の場所で補償・創出する）", id: "1. Menghindari (Avoidance) -> 2. Meminimalkan (Minimization) -> 3. Memperbaiki/Restorasi (Rectification) -> 4. Kompensasi (Compensation)", ne: "१. असर नै पर्न नदिने (बच्ने) -> २. असरलाई कम गर्ने -> ३. सुधार वा पहिलेकै अवस्थामा फर्काउने -> ४. क्षतिपूर्ति (अन्यत्र नयाँ वातावरण बनाइदिने)" },
        { ja: "①代償 ➔ ②修正 ➔ ③最小化 ➔ ④回避", id: "1. Kompensasi -> 2. Restorasi -> 3. Minimalkan -> 4. Hindari", ne: "१. क्षतिपूर्ति -> २. सुधार -> ३. कम गर्ने -> ४. बच्ने" },
        { ja: "①自然をすべて破壊する ➔ ②放置する ➔ ③写真を撮る ➔ ④逃げる", id: "1. Hancurkan alam -> 2. Abaikan -> 3. Foto -> 4. Kabur", ne: "१. प्रकृति विनाश गर्ने -> २. छाडिदिने -> ३. फोटो खिच्ने -> ४. भाग्ने" },
        { ja: "①木を全部切り倒す ➔ ②川を埋め立てる ➔ ③ゴミを捨てる ➔ ④工事完了", id: "1. Tebang pohon -> 2. Urug sungai -> 3. Buang sampah -> 4. Selesai", ne: "१. रूख ढाल्ने -> २. खोला पुर्ने -> ३. फोहोर फाल्ने -> ४. काम सक्ने" }
      ],
      answer: 0,
      expJa: "【環境ミティゲーション】環境への悪影響は「まず回避する」ことが最優先であり、やむを得ない場合に「最小化」「復元」「代償（補償）」へと進みます。",
      expId: "Prioritas mutlak mitigasi alam: Hindari dampak buruk terlebih dahulu. Kompensasi/ganti rugi adalah opsi terakhir.",
      expNe: "वातावरण जोगाउँदा पहिले असर नै नपर्ने गरी काम गर्नु पहिलो नियम हो, क्षतिपूर्ति दिनु अन्तिम विकल्प मात्र हो।"
    },
    {
      cat: "学科：建設副産物とマニフェスト（産業廃棄物管理票）",
      q: "問2：現場から排出されるコンクリートガラや廃プラスチック等の産業廃棄物を処理業者に委託する際、不法投棄を防ぐため法律で交付が義務付けられている管理伝票は何ですか。",
      q_id: "Soal 2: Dokumen manifes pelacak apakah yang WAJIB diterbitkan kontraktor utama untuk mencegah pembuangan sampah liar (illegal dumping) saat menyerahkan limbah proyek ke pihak pengolah?",
      q_ne: "प्रश्न २: कार्यस्थलबाट निस्कने कंक्रीटको फोहोर वा प्लास्टिक ठेकेदारलाई जिम्मा लगाउँदा, जथाभावी नफालियोस् भनी कानुन अनुसार अनिवार्य काटिने कागजात कुन हो?",
      options: [
        { ja: "産業廃棄物管理票（マニフェスト伝票 / 紙または電子マニフェスト）", id: "Manifes Pengelolaan Limbah Industri (Sangyou Haikibutsu Manifest / Kertas atau Digital)", ne: "औद्योगिक फोहोर व्यवस्थापन पुर्जी (म्यानिफेस्ट स्लिप / डिजिटल म्यानिफेस्ट)" },
        { ja: "領収書（レシート）のみ", id: "Hanya struk nota belanja biasa", ne: "बिल वा रसिद मात्र" },
        { ja: "年賀状", id: "Kartu ucapan tahun baru", ne: "नयाँ वर्षको शुभकामना कार्ड" },
        { ja: "賞状", id: "Piagam penghargaan prestasi", ne: "प्रशंसा पत्र" }
      ],
      answer: 0,
      expJa: "【廃棄物処理法】排出事業者は、収集運搬・中間処理・最終処分までを適正に追跡・確認するため「マニフェスト（管理票）」を交付し5年間保存する義務があります。",
      expId: "Manifest limbah (sangyou haikibutsu manifest) melacak aliran sampah dari truk angkut hingga pengolahan akhir demi mencegah pembuangan liar.",
      expNe: "फोहोर जथाभावी खोला वा जंगलमा नफालियोस् भनेर अन्तिमसम्म निगरानी गर्न 'म्यानिफेस्ट' पुर्जी अनिवार्य काट्नुपर्छ।"
    },
    {
      cat: "学科：騒音規制法・振動規制法の特定建設作業",
      q: "問3：住宅街や都市部でブレーカーによるコンクリートはつり作業や杭打ち作業を行う際、周辺環境を守るため法令上必要な手続きはどれですか。",
      q_id: "Soal 3: Prosedur hukum apakah yang WAJIB diajukan kontraktor ke pemerintah kota minimal 7 hari sebelum memulai pekerjaan bersuara/getaran keras (seperti jackhammer)?",
      q_ne: "प्रश्न ३: बस्ती नजिक चर्को आवाज आउने ब्रेकरले कंक्रीट फुटाउने वा पिलर ठोक्ने काम गर्नुअघि, कानुन अनुसार नगरपालिकामा अनिवार्य बुझाउनुपर्ने निवेदन कुन हो?",
      options: [
        { ja: "作業開始の7日前までに、市町村長へ「特定建設作業実施届出書」を提出し、防音シート等の騒音防止対策を講じる", id: "Menyerahkan formulir 'Tokutei Kensetsu Sagyou' ke dinas kota minimal 7 hari sebelum kerja dimulai dan memasang terpal peredam suara", ne: "काम थाल्नुभन्दा कम्तीमा ७ दिनअगावै नगर प्रमुखसमक्ष 'विशेष निर्माण कार्य निवेदन' दर्ता गर्ने र आवाज छेक्ने त्रिपाल लगाउने" },
        { ja: "届出は一切出さず、夜中の午前2時に一番大きな音を出して一気に作業する", id: "Tanpa izin dan sengaja membongkar jam 2 dini hari", ne: "अनुमति नलिई राती २ बजे चर्को आवाज निकालेर काम गर्ने" },
        { ja: "近隣住民に耳栓を無料で配れば法律の手続きは不要である", id: "Hanya membagikan penutup telinga ke warga sekitar", ne: "छिमेकीलाई कान थुन्ने इयरप्लग बाँडेर निवेदन नबुझाउने" },
        { ja: "騒音計をハンマーで壊して測定できないようにする", id: "Merusak alat pengukur kebisingan decibel meter dengan palu", ne: "आवाज नाप्ने मिटर नै हम्बरले फुटाउने" }
      ],
      answer: 0,
      expJa: "【騒音規制法・振動規制法】指定地域内で特定建設作業を施工する場合、開始の7日前までに市町村へ届出を行い、基準値（85dB等）以下の騒音管理を徹底します。",
      expId: "Pekerjaan kebisingan tinggi wajib melapor ke pemerintah kota H-7 sebelum mulai kerja dan memasang pagar peredam kebisingan.",
      expNe: "धेरै आवाज र कम्पन आउने काम गर्नुअघि ७ दिनपहिले नै नगरपालिकामा निवेदन दिएर आवाज छेक्ने पर्दा लगाउनै पर्छ।"
    },
    {
      cat: "学科：労働安全衛生法・健康診断の義務",
      q: "問4：事業者が常時使用する労働者に対して行わなければならない「定期健康診断（一般健康診断）」の法定頻度として正しいものはどれですか。",
      q_id: "Soal 4: Berapakah frekuensi wajib pelaksanaan Medical Check-up Berkala (Teiki Kenkou Shindan) bagi pekerja tetap menurut UU Keselamatan Kerja?",
      q_ne: "प्रश्न ४: कम्पनीले आफ्ना नियमित कामदारहरूको 'नियमित स्वास्थ्य जाँच (मेडिकल चेकअप)' कानुन अनुसार कम्तीमा कति समयमा गराउनै पर्छ?",
      options: [
        { ja: "1年以内ごとに1回（深夜業等の特定業務従事者は6ヶ月以内ごとに1回）", id: "Minimal 1 kali dalam 1 tahun (bagi pekerja shift malam/khusus: 6 bulan sekali)", ne: "कम्तीमा वर्षमा १ पटक (राती काम गर्ने वा विशेष काम गर्नेको हकमा ६ महिनामा १ पटक)" },
        { ja: "50年に1回", id: "50 tahun sekali", ne: "५० वर्षमा १ पटक" },
        { ja: "風邪をひいて会社を休んだ時だけ", id: "Hanya saat pekerja jatuh sakit dan izin kerja", ne: "रुघा लागेर बिदा बसेको बेला मात्र" },
        { ja: "健康診断は違法なので受診させてはならない", id: "Pemeriksaan medis adalah tindakan terlarang", ne: "स्वास्थ्य जाँच गराउनै नपाइने" }
      ],
      answer: 0,
      expJa: "【安衛則第44条・45条】一般定期健康診断は「1年に1回」、深夜業や特定化学物質等を扱う有害業務従事者は「半年に1回」受診させ、結果を保存する義務があります。",
      expId: "Medical check-up wajib diberikan setahun sekali (pekerja shift malam 6 bulan sekali) untuk mendeteksi penyakit dini.",
      expNe: "हरेक कामदारको वर्षमा कम्तीमा एकपटक (राती काम गर्नेको ६ महिनामा) स्वास्थ्य जाँच गराउनु कम्पनीको कानुनी कर्तव्य हो।"
    },
    {
      cat: "学科：熱中症と「作業環境管理」の具体策",
      q: "問5：労働衛生の3管理のうち、熱中症を防ぐための「作業環境管理（現場の物理的環境の改善）」に該当するものはどれですか。",
      q_id: "Soal 5: Manakah yang tergolong ke dalam 'Manajemen Lingkungan Kerja' (Sagyou Kankyou Kanri) dalam rangka mencegah heatstroke?",
      q_ne: "प्रश्न ५: स्वास्थ्यका ३ व्यवस्थापन मध्ये गर्मीबाट जोगाउन गरिने 'कार्य वातावरण व्यवस्थापन (फिल्डको भौतिक सुधार)' भित्र कुन उपाय पर्दछ?",
      options: [
        { ja: "直射日光を遮る遮光ネットの展張、大型送風機やドライミストの設置、エアコン完備の冷房休憩所の整備", id: "Memasang jaring peneduh paranet, blower kipas kabut air mist, dan ruang istirahat sejuk ber-AC", ne: "घाम छेक्ने जाली टाँग्ने, ठूला पंखा र पानीको बाफ मेसिन राख्ने, र एसी भएको चिसो कोठा बनाउने" },
        { ja: "作業員に朝食をしっかり食べるよう口頭で指導すること", id: "Menasihati pekerja agar sarapan bergizi di rumah (Manajemen Pribadi)", ne: "घरमा बिहान खाना खान सम्झाउनु (व्यक्तिगत व्यवस्थापन)" },
        { ja: "作業時間を短縮して休憩回数を増やすこと", id: "Menyesuaikan jam istirahat berkala (Manajemen Kerja)", ne: "कामको समय मिलाउनु (कार्यविधि व्यवस्थापन)" },
        { ja: "健康診断で血圧を測定すること", id: "Mengukur tensi darah saat medical check-up (Manajemen Kesehatan)", ne: "रक्तचाप नाप्नु (स्वास्थ्य व्यवस्थापन)" }
      ],
      answer: 0,
      expJa: "【作業環境管理】設備や物理的環境を直接改善する（日除け・冷房室・ミスト・通風）対策を作業環境管理と呼びます。休憩の入れ方は作業管理、健診は健康管理です。",
      expId: "Sagyou Kankyou Kanri fokus pada rekayasa fisik lingkungan: AC, jaring peneduh, dan kipas kabut air.",
      expNe: "वातावरण व्यवस्थापन भन्नाले काम गर्ने ठाउँलाई भौतिक रूपमा चिसो बनाउने (एसी, पंखा, छहारी) व्यवस्थालाई बुझाउँछ।"
    },
    {
      cat: "学科：熱中症と「作業管理」の具体策",
      q: "問6：労働衛生の3管理のうち、熱中症を防ぐための「作業管理（作業の進め方・保護具・行動の改善）」に該当するものはどれですか。",
      q_id: "Soal 6: Manakah tindakan yang tergolong ke dalam 'Manajemen Cara Kerja' (Sagyou Kanri) dalam pengendalian sengatan panas?",
      q_ne: "प्रश्न ६: स्वास्थ्यका ३ व्यवस्थापन मध्ये गर्मीबाट बच्न गरिने 'कार्यविधि व्यवस्थापन (काम गर्ने तरिका/नियमको सुधार)' भित्र कुन पर्दछ?",
      options: [
        { ja: "WBGT値に応じたこまめな休憩の設定、作業負荷の軽減、ファン付き作業着や通気性の良い作業服の着用", id: "Mengatur rotasi jam istirahat sesuai angka WBGT, mengurangi angkat berat, serta memakai rompi ber-kipas angin (Kuu-chou-fuku)", ne: "WBGT अनुसार समय-समयमा आरामको तालिका बनाउने, धेरै भारी काम घटाउने र पंखा भएको ज्याकेट लगाउन लगाउने" },
        { ja: "現場事務所にエアコンを新しく購入して取り付けること", id: "Membeli unit AC baru untuk kantor (Lingkungan)", ne: "अफिसमा नयाँ एसी जडान गर्नु (वातावरण)" },
        { ja: "産業医による健康相談窓口を設置すること", id: "Konsultasi medis dengan dokter perusahaan (Kesehatan)", ne: "डाक्टरसँग स्वास्थ्य सल्लाह लिनु (स्वास्थ्य)" },
        { ja: "現場の周囲に防音パネルを立てること", id: "Memasang panel pagar peredam suara (Lingkungan)", ne: "आवाज छेक्ने पर्खाल लगाउनु (वातावरण)" }
      ],
      answer: 0,
      expJa: "【作業管理】作業時間や作業量、休憩タイミングの調整、ファン付き作業服等の着用など「人の作業動作・装備」を安全にコントロールすることを作業管理と呼びます。",
      expId: "Sagyou Kanri mengatur pola jam kerja, porsi istirahat berkala, dan pemakaian pakaian APD sejuk.",
      expNe: "काम गर्ने समय तालिका मिलाउने, आराम गराउने र पंखावाला कपडा लगाउनु नै 'कार्यविधि व्यवस्थापन' हो।"
    },
    {
      cat: "学科：設計図書の種類と優先順位",
      q: "問7：工事を施工する基準となる「設計図書」の内容に食い違いや矛盾があった場合、契約上、最も優先される設計図書はどれですか。",
      q_id: "Soal 7: Jika terdapat perbedaan atau kontradiksi antara dokumen gambar teknik dan dokumen spesifikasi tertulis, manakah dokumen yang MEMILIKI TINGKAT PRIORITAS TERTINGGI?",
      q_ne: "प्रश्न ७: नक्सा (ड्रइङ) र विस्तृत विवरण लेखिएको पुस्तिका (स्पेसिफिकेसन) बीच कुरा बाझिएमा, सबैभन्दा पहिले कुन कागजातको नियम मान्य हुन्छ?",
      options: [
        { ja: "質問回答書 ➔ 特記仕様書 ➔ 設計図面 ➔ 共通仕様書（特記仕様書や質問回答書が一般図面より優先される）", id: "Surat Tanya Jawab (Q&A) -> Spesifikasi Khusus (Tokki Shiyousho) -> Gambar Denah -> Spesifikasi Umum (Kyoutsuu Shiyousho)", ne: "प्रश्न-उत्तर पत्र -> विशेष सर्त पुस्तिका (टोक्की शियोउशो) -> नक्सा (ड्रइङ) -> सामान्य सर्त पुस्तिका" },
        { ja: "一番古い古いメモ用紙", id: "Catatan coretan kertas paling kuno", ne: "पुरानो रद्दी कागज" },
        { ja: "職長の昨晩の夢の内容", id: "Isi mimpi tidur mandor tadi malam", ne: "शोकुचोले राती देखेको सपना" },
        { ja: "すべての図書を無視して作業員の直感を最優先とする", id: "Mengabaikan semua berkas dan ikuti insting tukang", ne: "नक्सा सबै फालेर कामदारको अन्दाज" }
      ],
      answer: 0,
      expJa: "【設計図書の優先順位】工事請負契約では「質問回答書 ＞ 特記仕様書 ＞ 設計図 ＞ 共通仕様書 ＞ 現場説明書」の順で優先適用されます。特記仕様書は図面に勝ります。",
      expId: "Dokumen Q&A dan Spesifikasi Khusus (Tokki Shiyousho) memiliki kekuatan hukum lebih tinggi daripada gambar denah standar.",
      expNe: "नक्सामा जेसुकै भए पनि विशेष सर्त पुस्तिका (टोक्की शियोउशो) र प्रश्नोत्तर पत्रमा लेखिएकै कुरा अन्तिम मान्य हुन्छ।"
    },
    {
      cat: "学科：施工図（施工計画図）の役割",
      q: "問8：設計者が作成した「設計図」をそのまま現場で施工できないため、専門工事業者が取り合いや納まり、正確な割付け寸法を反映して現場用に作成する図面は何ですか。",
      q_id: "Soal 8: Gambar kerja detail apakah yang dibuat oleh subkontraktor lapangan untuk menerjemahkan desain arsitek menjadi ukuran presisi siap pasang?",
      q_ne: "प्रश्न ८: इन्जिनियरको नक्सालाई फिल्डमा ठ्याक्कै काम गर्न मिल्ने गरी नाप, साइज र जोर्नी मिलाएर बनाइने 'कार्यस्थलको विस्तृत नक्सा' कुन हो?",
      options: [
        { ja: "施工図（せこうず / 工作図・躯体図・割付図等）", id: "Sekou-zu (Shop Drawing / Gambar Kerja Pelaksanaan Lapangan)", ne: "सेकौ-जु (सप ड्रइङ / फिल्डको कार्य नक्सा)" },
        { ja: "案内図", id: "Peta Denah Lokasi Proyek", ne: "बाटोको नक्सा" },
        { ja: "完成予想パース絵画", id: "Lukisan Ilustrasi Konsep Promosi", ne: "विज्ञापनको काल्पनिक चित्र" },
        { ja: "電気配線チラシ", id: "Brosur iklan kabel toko", ne: "पसलको ब्रोसर" }
      ],
      answer: 0,
      expJa: "【施工図の役割】設計図を元に、部材の干渉をなくし実際の施工寸法や取付け方法をミリ単位で描き起こした図面を「施工図（工作図）」と呼びます。",
      expId: "Shop Drawing (Sekou-zu) adalah gambar detail yang dibuat agar tukang bisa langsung memotong dan merakit di lapangan tanpa bingung.",
      expNe: "इन्जिनियरको नक्सालाई फिल्डमा नापेर काम गर्न मिल्ने गरी बनाएको विस्तृत नक्सालाई 'सेकौ-जु (सप ड्रइङ)' भनिन्छ।"
    },
    {
      cat: "学科：熱中症予防の「自発的脱水」のメカニズム",
      q: "問9：汗をかいた作業員が水だけを飲んだ際に、喉の渇きが止まったと錯覚して水分補給をやめてしまい、体内の塩分がさらに薄まって悪化する現象を何と呼びますか。",
      q_id: "Soal 9: Fenomena dehidrasi berbahaya apakah saat pekerja merasa 'sudah tidak haus lagi' setelah minum air murni saja, padahal tubuhnya krisis cairan elektrolit?",
      q_ne: "प्रश्न ९: पसिना बगेको बेला सादा पानी मात्र पिउँदा तिर्खा मेटिएको जस्तो लाग्ने तर भित्र शरीर झन् सुक्खा भएर नुनको कमीले ढल्ने समस्यालाई के भनिन्छ?",
      options: [
        { ja: "自発的脱水症（じはつてきだっすいしょう）", id: "Dehidrasi Spontan (Spontaneous Dehydration / Jihatsuteki Dassui)", ne: "जिहाचुतेकी दास्सुइ (भ्रमपूर्ण जलवियोजन / नुन घटेर हुने डिहाइड्रेसन)" },
        { ja: "満腹症", id: "Kekenyangan makan", ne: "अघाउनु" },
        { ja: "骨粗鬆症", id: "Pengeroposan tulang", ne: "हड्डी कमजोर हुनु" },
        { ja: "貧血症のみ", id: "Kurang darah anemia saja", ne: "रगतको कमी मात्र" }
      ],
      answer: 0,
      expJa: "【自発的脱水】水だけを飲むと血液の塩分濃度が低下し、脳が「水分が余っている」と誤認して喉の渇きを止め、尿として水を排泄させてしまいます。塩分補給が不可欠です。",
      expId: "Minum air tawar saja menipu otak menghentikan rasa haus, padahal darah krisis natrium. Selalu konsumsi air bersama garam/elektrolit.",
      expNe: "सादा पानीले दिमागलाई झुक्याउँछ र तिर्खा लाग्न छोड्छ, तर शरीरभित्र नुन सकिएर मान्छे बेहोस हुन्छ। त्यसैले जीवनजल अनिवार्य चाहिन्छ।"
    },
    {
      cat: "学科：騒音性難聴の予防と耳栓",
      q: "問10：コンクリート破砕や高速切断機など強烈な騒音（85dB以上）を伴う作業に長期間従事する作業員が、聴覚障害（職業性難聴）を防ぐために着用すべき保護具は何ですか。",
      q_id: "Soal 10: Alat pelindung diri (APD) apakah yang WAJIB dipakai pekerja saat melakukan pemotongan/pembobokan beton bersuara bising ekstrem (>= 85 dB)?",
      q_ne: "प्रश्न १०: कंक्रीट फुटाउँदा वा चर्को आवाज (८५ डेसिबलभन्दा माथि) आउने मेसिन चलाउँदा कानको जाली फुटेर बहिरो हुनबाट जोगाउने सुरक्षा साधन कुन हो?",
      options: [
        { ja: "耳栓（またはイヤーマフ / 遮音保護具）", id: "Penyumbat Telinga (Earplug) atau Earmuff (Pelindung Kebisingan)", ne: "इयरप्लग (कान थुन्ने प्लग) वा इयरमफ (कान छोप्ने हेडफोन)" },
        { ja: "音楽用イヤホンで大音量で音楽を聴く", id: "Mendengarkan musik keras-keras lewat earphone HP", ne: "इयरफोनमा चर्को गीत बजाएर सुन्ने" },
        { ja: "耳に紙を少し丸めて詰めるだけ", id: "Menyumbat kuping dengan kertas biasa", ne: "कानमा कागजको टुक्रा कोच्ने" },
        { ja: "耳当て（冬用の防寒用具）", id: "Penutup kuping kain musim dingin biasa", ne: "जाडोको कपडाको कानटोपी" }
      ],
      answer: 0,
      expJa: "【騒音障害防止ガイドライン】85dB以上の騒音環境では、内耳の有毛細胞が破壊され回復不能な難聴になります。遮音性能を満たした「耳栓」や「イヤーマフ」を常時着用します。",
      expId: "Kebisingan proyek > 85 dB menghancurkan sel saraf pendengaran secara permanen. Earplug industri wajib terpasang rapat.",
      expNe: "चर्को आवाजले कानको नसा सधैंका लागि मर्छ र मान्छे बहिरो हुन्छ। त्यसैले गुणस्तरीय 'इयरप्लग' कानमा कोच्नै पर्छ।"
    },
    {
      cat: "学科：熱中症対策・プレクーリング（深部体温）",
      q: "問11：直射日光下での作業開始前に、アイススラリー（微細な氷飲料）を飲んだり、冷房休憩室で体をあらかじめ冷やしておく「プレクーリング」の効果は何ですか。",
      q_id: "Soal 11: Apakah manfaat fisiologis dari tindakan 'Pre-cooling' (meminum es slurry atau mendinginkan badan sebelum mulai kerja di bawah matahari)?",
      q_ne: "प्रश्न ११: चर्को घाममा निस्कनुअघि नै आइस स्लरी (बरफको घोल) खाएर शरीर भित्रैबाट चिस्याउने (प्रि-कुलिङ) गर्नुको मुख्य फाइदा के हो?",
      options: [
        { ja: "作業中の深部体温（内臓や脳の温度）の上昇を遅らせ、疲労を軽減して熱中症の発症限界時間を大幅に延長させる", id: "Memperlambat kenaikan suhu inti organ dalam dan otak, menekan kelelahan, dan memperpanjang ketahanan tubuh sebelum terserang heatstroke", ne: "शरीरको भित्री तापक्रम र दिमाग तात्न नदिई ढिलो गराउने, थकान घटाउने र धेरै समयसम्म गर्मी थेग्न सक्ने बनाउने" },
        { ja: "体温が氷点下になって凍傷になる", id: "Menyebabkan radang dingin membeku", ne: "शरीर जमेर बरफ बन्ने" },
        { ja: "筋肉がすべて溶けてなくなってしまう", id: "Melarutkan otot tubuh", ne: "मांसपेशी पग्लेर जाने" },
        { ja: "汗がまったく出なくなって体内に熱がこもり危険になる", id: "Membuat keringat macet total", ne: "पसिना आउनै बन्द हुने" }
      ],
      answer: 0,
      expJa: "【プレクーリングの効果】作業前にあらかじめ深部体温を0.3〜0.5℃下げておくことで、暑い環境での作業継続可能時間が延び、安全性が飛躍的に向上します。",
      expId: "Pre-cooling memberi cadangan waktu dingin bagi organ dalam tubuh sehingga pekerja tidak cepat tumbang saat terpapar terik matahari.",
      expNe: "काममा निस्कनुअघि नै शरीर चिस्याउँदा भित्री अंगहरू तात्न पाउँदैनन् र कामदार लामो समयसम्म सुरक्षित रहन्छ।"
    },
    {
      cat: "学科：コンクリート打設と打継ぎ時間の限度",
      q: "問12：コンクリート工事において、先に打ち込んだ下層のコンクリートと上層のコンクリートが一体化しなくなる「コールドジョイント」を防ぐための、許容打継ぎ時間間隔（外気温25℃以上）の基準はどれですか。",
      q_id: "Soal 12: Berapakah batas interval waktu maksimal antar pengecoran lapis bawah dan lapis atas saat suhu udara panas (25°C ke atas) demi mencegah cacat Cold Joint?",
      q_ne: "प्रश्न १२: गर्मी मौसममा (तापक्रम २५ डिग्रीभन्दा माथि हुँदा) पहिलेको ढलान सुकेर जोर्नी नजोडिने (कोल्ड जोइन्ट) समस्या हुन नदिन, कति घण्टाभित्र अर्को कंक्रीट खन्याइसक्नुपर्छ?",
      options: [
        { ja: "2時間以内（25℃未満の場合は2.5時間以内）", id: "Maksimal dalam 2 jam (jika suhu di bawah 25°C: maksimal 2,5 jam)", ne: "बढीमा '२ घण्टाभित्र' (तापक्रम २५ डिग्री मुनि भए २.५ घण्टाभित्र)" },
        { ja: "10時間以内", id: "Maksimal 10 jam", ne: "१० घण्टाभित्र" },
        { ja: "24時間（丸1日）後", id: "24 jam kemudian", ne: "२४ घण्टा (पूरै १ दिन) पछि" },
        { ja: "時間は関係なく1週間後に打ち継いでもよい", id: "Boleh seminggu kemudian", ne: "१ हप्तापछि जहिले खन्याए पनि हुने" }
      ],
      answer: 0,
      expJa: "【JASS 5基準】気温25℃以上の夏季は硬化が急速に進むため、打継ぎ時間の間隔は「2時間以内」と厳格に定められています。これを超えると一体化しません。",
      expId: "Batas jeda cor saat cuaca panas (>25°C) adalah MAKSIMAL 2 JAM. Melewati 2 jam, lapisan cor tidak akan menyatu dan pasti retak bocor.",
      expNe: "गर्मीमा कंक्रीट छिट्टै जम्ने हुनाले २ घण्टाभित्रै माथिल्लो ढलान खन्याइसक्नुपर्छ, नत्र बीचमा चिरा परेर पानी चुहिन्छ।"
    },
    {
      cat: "学科：振動工具の作業時間制限（白ろう病防止）",
      q: "問13：コンクリートブレーカーや振動ドリル、チェーンソー等の手持ち振動工具を使用する際、手指の血管が収縮して白くなる職業病（白ろう病）を防ぐための1日の作業時間基準はどれですか。",
      q_id: "Soal 13: Berapakah batas maksimal jam pemakaian alat getar tangan (seperti jackhammer/breaker) per hari untuk mencegah penyakit 'Jari Putih' (Raynaud's syndrome / Hakurou-byou)?",
      q_ne: "प्रश्न १३: कम्पन हुने हाते मेसिन (ब्रेकर वा भाइब्रेटर) चलाउँदा औंलाको रगत नसा मरेर औंला सेतो हुने रोग (हाकुरौ-ब्योउ) बाट बच्न दिनमा बढीमा कति समय मात्र चलाउन पाइन्छ?",
      options: [
        { ja: "1日の振動ばく露時間は合計2時間以内とし、連続使用時間は30分以内とする", id: "Total pemakaian maksimal 2 jam per hari, dan durasi getar terus-menerus maksimal 30 menit", ne: "दिनभरिमा जम्मा '२ घण्टाभन्दा कम' मात्र चलाउने, र एकपटकमा लगातार ३० मिनेटभन्दा बढी नचलाउने" },
        { ja: "休憩なしで朝から晩まで8時間連続で使用させる", id: "Dipakai non-stop 8 jam tanpa jeda", ne: "बिहानदेखि साँझसम्म लगातार ८ घण्टा चलाउने" },
        { ja: "手が完全に麻痺して動かなくなるまで使う", id: "Dipakai sampai tangan mati rasa total", ne: "हातको होसै हराउन्जेल चलाउने" },
        { ja: "時間の制限はなく24時間交代で使い続ける", id: "Bebas 24 jam bergantian", ne: "२४ घण्टा लगातार चलाउने" }
      ],
      answer: 0,
      expJa: "【振動障害予防指針】振動工具の長時間使用は末梢神経と血管を破壊する「白ろう病」の原因になります。1日合計2時間以内、連続30分以内の厳守が必須です。",
      expId: "Alat getar merusak pembuluh darah jari. Batas aman: Maksimal 30 menit terus-menerus dan total akumulasi maksimal 2 jam per hari.",
      expNe: "कम्पनले औंलाको नसा बिगार्छ। त्यसैले दिनमा बढीमा २ घण्टा र लगातार ३० मिनेटभन्दा बढी चलाउन पाइँदैन।"
    },
    {
      cat: "学科：高所作業と足場の点検（悪天候後）",
      q: "問14：台風の大雨や強風、または中震以上の地震が発生した直後、足場での作業を再開する前に職長や事業者が必ず行わなければならない義務はどれですか。",
      q_id: "Soal 14: Kewajiban mutlak apakah yang WAJIB dilakukan Shokucho sebelum mengizinkan pekerja naik kembali ke perancah setelah diterjang badai taifun atau gempa bumi?",
      q_ne: "प्रश्न १४: ठूलो हुरीबतास, आँधीबेहरी वा भूकम्प आएर थामिएपछि, खटमा काम सुरु गर्नुअघि शोकुचोले अनिवार्य गर्नुपर्ने काम के हो?",
      options: [
        { ja: "足場の点検者を指名し、壁つなぎの緩み・外れ、手すりのガタつき、固定ベースの沈下、足場板の浮き等の異常がないか点検し、補修完了後に作業を再開する", id: "Menunjuk petugas pemeriksa untuk menginspeksi kabe-tsunagi, kekencangan klem, pondasi tiang yang amblas, dan perbaiki kerusakan sebelum naik", ne: "जाँच गर्ने व्यक्ति तोकेर भित्तामा बाँधेको रड फुत्किएको छ कि, रेलिङ हल्लिएको छ कि र जग भासिएको छ कि पूरै जाँच्ने र मर्मत गरेपछि मात्र काम सुरु गर्ने" },
        { ja: "点検は面倒なので行わず、一番体重の重い作業員を走らせて崩れないか試す", id: "Tanpa cek, menyuruh pekerja paling gemuk lari di atasnya untuk mengetes", ne: "जाँच नगरी सबैभन्दा मोटो साथीलाई खटमा दौडाएर हेर्ने" },
        { ja: "足場が傾いて倒れそうでも、そのまま全員を登らせて作業させる", id: "Tetap menyuruh pekerja naik meski tiang miring mau roboh", ne: "खट ढल्न लागेको भए पनि सबैलाई माथि चढाउने" },
        { ja: "作業員にヘルメットを脱がせて登らせる", id: "Menyuruh pekerja melepas helm", ne: "हेल्मेट फुकालेर चढ्न लगाउने" }
      ],
      answer: 0,
      expJa: "【安衛則第567条】悪天候（強風・大雨等）や地震の後は、壁つなぎの破断やベースの浮き沈みが発生しています。点検と補修を行わずに使用してはなりません。",
      expId: "Badai sering mencabut klem kabe-tsunagi perancah. Wajib inspeksi menyeluruh setelah cuaca buruk reda sebelum pijakan dipanjat.",
      expNe: "आँधी वा भूकम्पले खटको भित्ता बाँध्ने रड उप्काएको हुनसक्छ। त्यसैले सम्पूर्ण खट जाँच गरेर मर्मत नगरी चढ्न पाइँदैन।"
    },
    {
      cat: "学科：酸素欠乏・硫化水素危険作業主任者",
      q: "問15：下水道工事や汚泥ピット内での作業において、硫化水素中毒や酸素欠乏症を防ぐため、作業主任者が現場で直ちに講じなければならない措置はどれですか。",
      q_id: "Soal 15: Tindakan apakah yang WAJIB dijalankan oleh Mandor Ahli Bahaya Kurang Oksigen & H2S di lokasi lubang gorong-gorong?",
      q_ne: "प्रश्न १५: ढल वा फोहोर पानीको खाल्डोमा अक्सिजनको कमी र विषालु ग्यासबाट जोगाउन कार्य प्रमुखले गर्नुपर्ने अनिवार्य काम कुन हो?",
      options: [
        { ja: "作業開始前および作業中、定期的に空気中の酸素濃度（18%以上）および硫化水素濃度（10ppm以下）を測定し、送風機で常に換気を継続する", id: "Ukur kadar oksigen (>= 18%) dan gas H2S (<= 10 ppm) secara berkala dengan alat detektor, dan nyalakan blower ventilasi terus-menerus", ne: "काम थाल्नुअघि र काम गर्दागर्दै पनि अक्सिजन (१८% भन्दा माथि) र ग्यास (१०ppm भन्दा कम) नापिरहने र पङ्खाबाट हावा पठाइरहने" },
        { ja: "臭いがあるときは鼻をつまんで口だけで呼吸しながら作業させる", id: "Menyuruh bernapas lewat mulut jika tercium bau busuk", ne: "गन्ध आए नाक थुनेर मुखले सास फेर्न लगाउने" },
        { ja: "換気用送風機のスイッチを途中で切って静かにさせる", id: "Mematikan blower ventilasi karena suaranya bising", ne: "आवाज ठूलो भयो भन्दै हावा दिने पङ्खा बन्द गरिदिने" },
        { ja: "作業員を穴の中に閉じ込めて外から蓋をする", id: "Menutup lubang manhole dari luar saat ada orang di dalam", ne: "मान्छे भित्रै छँदा बाहिरबाट ढक्कन बन्द गरिदिने" }
      ],
      answer: 0,
      expJa: "【酸欠則第14条・15条】酸欠症（酸素18%未満）および硫化水素中毒（10ppm超）は即死します。測定の継続と送風機による強制換気が絶対条件です。",
      expId: "Oksigen harus >= 18% dan gas beracun H2S <= 10 ppm. Blower angin TIDAK BOLEH dimatikan sedetik pun selama ada manusia di bawah.",
      expNe: "अक्सिजन १८% भन्दा धेरै र ग्यास १०ppm भन्दा कम हुनैपर्छ। मान्छे खाल्डोभित्र छँदासम्म हावा दिने पङ्खा एकछिन पनि निभाउन पाइँदैन।"
    },
    {
      cat: "学科：熱中症と「健康管理」の具体策",
      q: "問16：労働衛生の3管理のうち、熱中症を防ぐための「健康管理（個人の身体状態の把握）」に該当するものはどれですか。",
      q_id: "Soal 16: Manakah tindakan yang tergolong ke dalam 'Manajemen Kesehatan' (Kenkou Kanri) untuk mencegah heatstroke?",
      q_ne: "प्रश्न १६: स्वास्थ्यका ३ व्यवस्थापन मध्ये गर्मीबाट बच्न गरिने 'स्वास्थ्य व्यवस्थापन (कामदारको व्यक्तिगत स्वास्थ्य जाँच)' भित्र कुन उपाय पर्दछ?",
      options: [
        { ja: "毎朝の朝礼での顔色・体温・血圧の確認、睡眠不足や二日酔い・前日体調の問診チェック、日常の健康診断の実施", id: "Pengecekan suhu tubuh/tekanan darah di apel pagi, tanya jawab riwayat kurang tidur/mabuk semalam, dan medical check-up rutin", ne: "हरेक बिहान अनुहारको रङ, ज्वरो र रक्तचाप जाँच्ने, निन्द्रा पुग्यो कि नाई र रक्सी खाएको छ कि सोध्ने र नियमित स्वास्थ्य परीक्षण गर्ने" },
        { ja: "休憩所に大型扇風機を設置すること", id: "Memasang blower kipas angin di tempat istirahat (Lingkungan)", ne: "आराम गर्ने ठाउँमा ठूलो पंखा राख्नु (वातावरण)" },
        { ja: "作業時間を1時間短縮すること", id: "Memotong jam kerja 1 jam (Manajemen Kerja)", ne: "कामको समय १ घण्टा घटाउनु (कार्यविधि)" },
        { ja: "日陰を作るためにブルーシートを張ること", id: "Memasang terpal peneduh (Lingkungan)", ne: "घाम छेक्न त्रिपाल टाँग्नु (वातावरण)" }
      ],
      answer: 0,
      expJa: "【健康管理】睡眠不足、二日酔い、感冒（風邪）、朝食抜きは熱中症発症の4大リスクです。朝礼時の対話とバイタル確認で早期に察知します。",
      expId: "Kenkou Kanri fokus pada kondisi tubuh individu: cek tensi, deteksi kurang tidur, dan skrining riwayat mabuk semalam.",
      expNe: "निन्द्रा नपुग्नु, रक्सीको नशा हुनु र बिहान खाना नखानु हिटस्ट्रोकका मुख्य कारण हुन्। बिहान यसको जाँच गर्नु नै स्वास्थ्य व्यवस्थापन हो।"
    },
    {
      cat: "学科：クレーン作業と強風時の安全対策（旋回ブレーキ）",
      q: "問17：作業終了時や強風による作業中止時、タワークレーン（ジブクレーン）のジブ（腕）を固定する際の正しい措置はどれですか。",
      q_id: "Soal 17: Bagaimanakah perlakuan terhadap rem putar (swing brake) tower crane saat jam kerja selesai demi mencegah crane patah tertiup badai angin?",
      q_ne: "प्रश्न १७: काम सकिएपछि वा हावाहुरी चल्दा अग्लो टावर क्रेनको लामो हात (जिब) भाँचिन नदिन घुम्ने ब्रेक (स्विङ ब्रेक) लाई के गर्नुपर्छ?",
      options: [
        { ja: "旋回ブレーキを解放（フリー状態）にし、ジブが風上を向いて風を受け流す「風見鶏（フリー旋回）」状態にしておく", id: "Lepas rem putar ke posisi BEBAS (Free Swing), agar lengan crane bisa berputar bebas seperti baling-baling cuaca mengikuti arah angin", ne: "घुम्ने ब्रेकलाई खुल्ला (फ्री) छोडिदिने, ताकि हावा जता चल्छ क्रेनको हात हावाको दिशामै घुमेर बतासलाई सजिलै बग्न देओस्" },
        { ja: "旋回ブレーキを限界までガチガチにロックして絶対に動かないように固定する", id: "Mengunci mati rem putar sekuat tenaga agar tidak bisa bergerak sama sekali", ne: "ब्रेक बेस्सरी कसेर क्रेनलाई कत्ति पनि घुम्न नदिने गरी कस्ने" },
        { ja: "ジブの先端に100トンの重りをぶら下げて風に耐えさせる", id: "Menggantungkan beban 100 ton di ujung boom", ne: "टुप्पोमा १०० टनको भारी झुन्ड्याएर राख्ने" },
        { ja: "クレーンの運転席の窓をすべて全開にしておく", id: "Membuka seluruh jendela kabin operator", ne: "झ्यालहरू सबै खुल्लै राख्ने" }
      ],
      answer: 0,
      expJa: "【タワークレーンの強風対策】ブレーキを固定すると強風の風圧を横からモロに受けてタワーごと倒壊します。フリー旋回にして風を受け流す（風見鶏状態）のが鉄則です。",
      expId: "Lengan tower crane wajib dibuat 'Free Swing' saat malam/badai agar berputar mengikuti hembusan angin tanpa patah.",
      expNe: "ब्रेक कसिलो पारेर राखे हुरीबतासको धक्काले क्रेन बीचबाटै भाँचिन्छ। त्यसैले ब्रेक खुल्ला छोडेर हावा जता चल्छ उतै घुम्न दिनुपर्छ।"
    },
    {
      cat: "学科：感電防止・アース（接地）の目的",
      q: "問18：現場で使用する電動工具や配電盤に「アース線（接地線）」を確実に接続する最も重要な目的は何ですか。",
      q_id: "Soal 18: Apakah tujuan paling penting dari penyambungan Kabel Arde / Grounding (Earth) pada alat listrik proyek konstruksi?",
      q_ne: "प्रश्न १८: कार्यस्थलका विद्युतीय औजार र बिजुली बोर्डमा 'अर्थिङको तार (जमिनमा जोडिने तार)' जोड्नुको सबैभन्दा मुख्य उद्देश्य के हो?",
      options: [
        { ja: "万一、機器の内部で漏電が発生した際、危険な電気をアース線を通じて地面へ逃がし、人間を流れる感電電流を極小にして命を守るため", id: "Jika terjadi kebocoran listrik, arus listrik berbahaya dialirkan ke tanah lewat kabel arde, sehingga manusia tidak tersengat mati saat menyentuh alat", ne: "औजारभित्र करेन्ट चुहावट भइहालेमा, त्यो खतरनाक करेन्टलाई तारमार्फत जमिनभित्र पठाइदिने र मान्छेले छुँदा करेन्ट लाग्न नदिई ज्यान जोगाउने" },
        { ja: "工具のモーターのパワーを3倍にアップさせるため", id: "Meningkatkan daya motor mesin 3 kali lipat", ne: "मेसिनको तागत ३ गुणा बढाउन" },
        { ja: "電気代をタダにするため", id: "Agar tagihan listrik gratis", ne: "बिजुलीको महसुल सित्तैमा गराउन" },
        { ja: "暗い現場で工具をピカピカ光らせるため", id: "Agar alat menyala berkilau di tempat gelap", ne: "अँध्यारोमा औजार चम्काउन" }
      ],
      answer: 0,
      expJa: "【アースの原理】アースは電気の「抜け道」です。アース線の抵抗値が人体よりはるかに低いため、漏電時に電気は人間ではなく地面に流れ、感電死を防ぎます。",
      expId: "Arde/Grounding mengalirkan arus bocor ke bumi. Tanpa arde, tubuh manusia yang menyentuh bodi alat akan menjadi kabel hidup penghantar listrik.",
      expNe: "अर्थिङले चुहिएको करेन्ट सिधै जमिनमा पुर्याउँछ। अर्थिङ नजोडे मेसिन छुने बित्तिकै मान्छेको शरीरबाट करेन्ट बगेर तत्काल ज्यान जान्छ।"
    },
    {
      cat: "学科：熱中症予防・経口補水液の作り方",
      q: "問19：現場で専用の経口補水液がない緊急時、水1リットルに対して砂糖と食塩を混ぜて応急の経口補水液を作る場合の適切な配合比率はどれですか。",
      q_id: "Soal 19: Jika stok cairan oralit habis di proyek, berapakah takaran darurat campuran Gula dan Garam ke dalam 1 Liter air bersih untuk membuat oralit darurat?",
      q_ne: "प्रश्न १९: कार्यस्थलमा जीवनजल सकिएको आपतकालीन अवस्थामा, १ लिटर सफा पानीमा नुन र चिनी मिसाएर जीवनजल बनाउँदा कुन सही नाप मिलाउनुपर्छ?",
      options: [
        { ja: "水1リットル に対し、砂糖「大さじ4〜5杯（約20〜40g）」と、食塩「小さじ半分（約1〜2g）」", id: "1 Liter Air : Gula pasir 4-5 sendok makan (sekitar 20-40 gram) + Garam dapur 1/2 sendok teh (sekitar 1-2 gram)", ne: "१ लिटर पानीमा: चिनी '४ देखि ५ ठूलो चम्चा (करिब २०-४० ग्राम)' र नुन 'आधा सानो चम्चा (करिब १-२ ग्राम)'" },
        { ja: "水1リットル に対し、食塩をどんぶり1杯分山盛りに入れる", id: "1 Liter Air : Satu mangkok penuh garam dapur pekat", ne: "१ लिटर पानीमा १ कचौरा भरि नुन खन्याउने" },
        { ja: "水1リットル に対し、唐辛子とタバスコを混ぜる", id: "1 Liter Air : Cabai rawit dan saus tabasco pedas", ne: "पानीमा खुर्सानी मिसाउने" },
        { ja: "砂糖だけを1キログラム溶かしてドロドロのシロップにする", id: "1 kg gula pasir pekat", ne: "१ किलो चिनी हालेर बाक्लो चास्नी बनाउने" }
      ],
      answer: 0,
      expJa: "【応急経口補水液】水1L＋砂糖40g＋食塩1〜2g（レモン果汁適量）の浸透圧比率は、小腸での水分とナトリウムの急速吸収を促す黄金比率です。",
      expId: "Resep oralit darurat: 1 Liter air + 4 sendok makan gula + 1/2 sendok teh garam dapur. Komposisi ini paling cepat diserap usus.",
      expNe: "१ लिटर पानीमा आधा चम्चा नुन र ४-५ चम्चा चिनी मिलाउँदा बन्ने घोलले शरीरमा तत्काल पानी र नुन पुर्याएर बिरामी बचाउँछ।"
    },
    {
      cat: "学科：職長としての「報連相（ホウレンソウ）」の徹底",
      q: "問20：現場で工程の遅延や作業員の怪我、部材の破損などの不都合なトラブルが発生した際、職長が元請に対して取るべき「報告」のルールとして正しいものはどれですか。",
      q_id: "Soal 20: Manakah aturan melapor (Houkoku) yang BENAR bagi Shokucho ke pengawas utama saat terjadi masalah buruk (keterlambatan/kecelakaan/kerusakan barang)?",
      q_ne: "प्रश्न २०: कार्यस्थलमा काम ढिला हुने, सामान बिग्रने वा साथी घाइते हुने जस्ता नराम्रा समस्या आइपर्दा, शोकुचोले मुख्य हाकिमलाई रिपोर्ट गर्ने सही नियम कुन हो?",
      options: [
        { ja: "「悪い情報ほど、隠さず・嘘をつかず・直ちに（即座に）」事実を正確に元請所長へ報告し、指示を仰いで善後策を協議する", id: "Prinsip 'Kabar buruk harus dilaporkan paling cepat, jujur tanpa manipulasi' kepada pengawas utama demi mencari solusi bersama", ne: "नराम्रो समाचार जति चाँडो सकिन्छ नढाँटी र नलुकाई तुरुन्तै मुख्य हाकिमलाई सत्य तथ्य बताउने र समाधानको उपाय खोज्ने" },
        { ja: "怒られるのを防ぐため、工事がすべて終わるまで絶対に隠し通す", id: "Menyembunyikan rapat-rapat sampai seluruh proyek selesai", ne: "गाली खाइने डरले काम नसकुन्जेलसम्म पूरै लुकाउने" },
        { ja: "都合の悪い事実だけを書類から消し去り、大成功していると嘘の報告書を出す", id: "Menghapus fakta buruk dari laporan dan berbohong bahwa proyek sukses besar", ne: "खराब कुरा मेटेर सबै राम्रो भइरहेको छ भनी झुटो रिपोर्ट बुझाउने" },
        { ja: "問題が起きたらすべて他社の作業員のせいにして自分は逃げる", id: "Menyalahkan tukang dari subkontraktor lain lalu lari", ne: "अरु कम्पनीको टाउकोमा दोष थुपारेर आफू पन्छिने" }
      ],
      answer: 0,
      expJa: "【職長の報連相】トラブル報告の遅れは被害を何倍にも拡大させます。「バッドニュース・ファースト（悪い情報ほど一番早く正直に報告する）」がプロの鉄則です。",
      expId: "Bad news travels first! Lapor kabar buruk detik pertama adalah tanda mandor berkelas; menyembunyikan masalah adalah kejahatan proyek.",
      expNe: "नराम्रो कुरा लुकाए समस्या झन् ठूलो हुन्छ। त्यसैले गल्ती वा समस्या आउने बित्तिकै तुरुन्तै साँचो रिपोर्ट गर्नु नै असल शोकुचोको कर्तव्य हो।"
    },
    {
      cat: "学科：熱中症と「黒球温度」の意味",
      q: "問21：暑さ指数（WBGT）の測定器に付いている「黒い球体（黒球）」が測定している熱環境の要素は何ですか。",
      q_id: "Soal 21: Elemen radiasi panas apakah yang diukur oleh bola hitam (globe thermometer) pada alat pengukur indeks WBGT?",
      q_ne: "प्रश्न २१: WBGT गर्मी नाप्ने मिटरको माथि भएको 'कालो गोलो डल्लो (कालो बल)' ले वातावरणको कुन तातोपन नाप्ने काम गर्छ?",
      options: [
        { ja: "直射日光や地面・建物の照り返しによる「放射熱（日射・熱放射）」", id: "Panas Radiasi (Radiant Heat) dari sengatan sinar matahari dan pantulan panas aspal/beton", ne: "घामको सिधा किरण र भुइँ/भित्ताबाट फर्किने तातोपना 'विकिरण ताप (रेडियन्ट हिट)'" },
        { ja: "現場のホコリの多さ", id: "Kepadatan debu pasir", ne: "धुलोको मात्रा" },
        { ja: "風の吹く方向（風向）", id: "Arah mata angin", ne: "हावाको दिशा" },
        { ja: "大気中の酸素の重さ", id: "Berat jenis oksigen", ne: "अक्सिजनको तौल" }
      ],
      answer: 0,
      expJa: "【黒球温度の役割】黒球は太陽光や周囲の高温壁面からの「放射熱（輻射熱）」を吸収して計測します。気温が同じでも直射日光下でWBGTが跳ね上がるのはこのためです。",
      expId: "Bola hitam menyerap radiasi sinar matahari langsung dan pantulan aspal panas. Ini sebabnya berteduh langsung menurunkan angka WBGT.",
      expNe: "कालो बलले घामको कडा तातो र जमिनको राप सोसेर विकिरण ताप नाप्छ। त्यसैले छहारीमा बस्दा WBGT तुरुन्तै घट्छ।"
    },
    {
      cat: "学科：有機溶剤等の呼吸用保護具の点検（フィットテスト）",
      q: "問22：防毒マスクや防塵マスクを装着した際、顔とマスクの隙間から有害なガスや粉じんが漏れ込んでいないかを確認する「密着性の確認（フィットチェック）」の手順として正しいものはどれですか。",
      q_id: "Soal 22: Bagaimanakah cara pengujian kerapatan masker (Fit Check) yang BENAR untuk memastikan tidak ada gas kimia bocor masuk lewat pipi?",
      q_ne: "प्रश्न २२: ग्यास मास्क वा डस्ट मास्क लगाउँदा गाला र मास्कको बीचबाट विषालु ग्यास चुहिएर भित्र पस्दैन भनेर जाँच्ने (फिट चेक गर्ने) सही तरिका कुन हो?",
      options: [
        { ja: "手のひらで吸気口（フィルター部）を塞いで息を吸い込み、マスクが顔にペタッと吸い付き息が入ってこないことを確認する（陰圧法）", id: "Tutup lubang filter dengan telapak tangan lalu tarik napas; masker harus kempis menempel rapat ke muka tanpa ada udara bocor masuk (Uji Tekanan Negatif)", ne: "हातको हत्केलाले मास्कको प्वाल थुनेर सास भित्र तान्ने; मास्क गालामा च्याप्प टाँसिनुपर्छ र कतैबाट पनि हावा छिर्नुहुँदैन (फिट टेस्ट)" },
        { ja: "マスクの紐を限界まで緩めて鼻を出して呼吸する", id: "Mengendorkan tali masker dan mengeluarkan hidung", ne: "तुना खुकुलो पारेर नाक बाहिर निकालेर सास फेर्ने" },
        { ja: "マスクのフィルターに穴を開けて息をしやすくする", id: "Melubangi filter masker agar bernapas lebih lega", ne: "सास फेर्न सजिलो होस् भनेर फिल्टरमा प्वाल पार्ने" },
        { ja: "マスクの上から水をかけてテストする", id: "Menyiram air dari luar masker", ne: "माथिबाट पानी हालेर जाँच्ने" }
      ],
      answer: 0,
      expJa: "【フィットチェック】フィルター部を手で押さえて息を吸い、顔に密着して空気が入ってこないこと（陰圧法）、逆に息を吐いて漏れ出ないこと（陽圧法）を確認します。",
      expId: "Tutup filter dengan telapak tangan, hirup napas. Jika masker menempel kencang ke wajah tanpa ada celah desis angin, artinya masker 100% aman kedap.",
      expNe: "हातले फिल्टर थुनेर सास तान्दा मास्क च्याप्प टाँसिएर हावा छिरेन भने मात्र मास्कले १००% काम गर्छ।"
    },
    {
      cat: "学科：熱中症と現場のアルコール禁止（二日酔いの危険）",
      q: "問23：前夜の大量の飲酒による「二日酔い」の状態で夏の炎天下の作業に従事することが、極めて危険である医学的理由は何ですか。",
      q_id: "Soal 23: Mengapa bekerja di musim panas dalam kondisi mabuk sisa alkohol kemarin (hangover / futsukayoi) SANGAT MEMATIKAN bagi pekerja?",
      q_ne: "प्रश्न २३: अघिल्लो राती धेरै रक्सी खाएर 'ह्याङओभर (नशा नउत्रेको)' भएको अवस्थामा गर्मी घाममा काम गर्नु किन ज्यान जान सक्ने खतरनाक मानिन्छ?",
      options: [
        { ja: "アルコールの強い利尿作用によって体内の水分とミネラルがすでに枯渇（脱水状態）しており、体温調節中枢が麻痺して急激に重症熱中症を発症するため", id: "Efek diuretik alkohol menguras habis air seni semalaman sehingga tubuh sudah dehidrasi parah sejak pagi, memicu heatstroke fatal dalam hitungan menit", ne: "रक्सीले पिसाब धेरै गराएर शरीरको पानी र नुन पहिल्यै सुकिसकेको (डिहाइड्रेसन भएको) हुन्छ, जसले गर्दा घाममा निस्कनासाथ केही मिनेटमै ढल्ने खतरा हुन्छ" },
        { ja: "アルコールを飲むと血液が凍りついて動けなくなるから", id: "Karena alkohol membekukan aliran darah", ne: "रक्सीले रगत जमाइदिने भएकोले" },
        { ja: "二日酔いの人は作業スピードが速すぎて周囲がついてこれないから", id: "Karena pekerja mabuk bekerja terlalu cepat", ne: "धेरै छिटो काम गर्ने भएकोले" },
        { ja: "現場のビールがすべて売り切れてしまうから", id: "Karena stok bir proyek bisa habis", ne: "कार्यस्थलको बियर सकिन्छ भनेर" }
      ],
      answer: 0,
      expJa: "【二日酔いと熱中症】アルコールは抗利尿ホルモンを抑制し、飲んだ量以上の水分を体から奪います。二日酔いの体は「カラカラの脱水状態」であり、猛暑に出ると即死のリスクがあります。",
      expId: "Tubuh orang hangover sudah mengalami defisit cairan parah sejak bangun tidur. Terpapar matahari sebentar saja langsung memicu koma sengatan panas.",
      expNe: "रक्सीले शरीरको सम्पूर्ण पानी पिसाबबाट फालिसकेको हुन्छ। यस्तो सुक्खा शरीर लिएर घाममा काम गरे तत्काल ज्यान जान्छ।"
    },
    {
      cat: "学科：建設機械の転倒防止（平坦・堅土の確保）",
      q: "問24：ホイールローダーやラフテレーンクレーンを不整地や軟弱地盤で走行・作業させる際、路肩の崩壊やマシンの横転を防ぐための対策として誤っているものはどれですか。",
      q_id: "Soal 24: Manakah tindakan yang SALAH dalam mencegah terbaliknya alat berat saat beroperasi di tanah lembek/tepi tebing?",
      q_ne: "प्रश्न २४: कमजोर जमिन वा भीरको छेउमा क्रेन वा लोडर गाडी चलाउँदा पल्टिन नदिन कुन काम गर्नु 'गलत' हो?",
      options: [
        { ja: "路肩の崩壊を防ぐための地盤補強を行わず、崖っぷちのギリギリの端を最高速度で走行させる", id: "Menyuruh alat berat ngebut di bibir jurang tanpa memperkuat tebing penahan tanah", ne: "भीरको छेउ बलियो नबनाई भिरैभीर चर्को स्पिडमा गाडी कुदाउने" },
        { ja: "敷鉄板を並べてタイヤの沈下を防ぎ、走行経路を平坦に締め固める", id: "Menggelar pelat baja tebal (shiki-teppan) dan memadatkan jalur lintasan jalan", ne: "बाक्लो फलामे प्लेट ओछ्याएर पाङ्ग्रा भासिन नदिने र बाटो सम्याएर कुट्ने" },
        { ja: "路肩や法面（のりめん）から十分な安全離隔距離をとって運行させる", id: "Menjaga jarak aman dari tepi jurang/tebing lereng", ne: "भीरको किनारबाट निश्चित सुरक्षा दूरी टाढा राखेर गाडी चलाउने" },
        { ja: "専任の誘導員を配置して重機の足元地盤を確認しながら誘導する", id: "Menempatkan petugas誘導員 untuk memantau kestabilan tanah di bawah ban", ne: "ट्राफिक गार्ड राखेर जमिनको अवस्था हेर्दै गाडीलाई बाटो देखाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.183参照】重機の路肩からの転落・転倒はオペレーターが下敷きになる死亡事故に直結します[cite: 13]。十分な幅員の確保、敷鉄板による養生、誘導員の配置を徹底します[cite: 13]。",
      expId: "Tebing tanah galian mudah longsor terinjak roda puluhan ton alat berat. Wajib pasang pelat baja dan jaga jarak dari bibir tebing.",
      expNe: "गह्रौं गाडीले कुल्चनासाथ भीरको माटो भत्किन्छ। त्यसैले फलामे प्लेट ओछ्याउने र किनारबाट टाढा राख्नुपर्छ।"
    },
    {
      cat: "学科：足場の積載荷重と偏荷重の防止",
      q: "問25：枠組足場の上に外壁タイルやセメント袋などの重量資材を仮置きする際、足場の局所崩壊を防ぐために守るべきルールはどれですか。",
      q_id: "Soal 25: Aturan apakah yang WAJIB ditaati saat menumpuk material berat (seperti semen/keramik) di atas lantai perancah agar tidak patah roboh?",
      q_ne: "प्रश्न २५: खटको भुइँमा सिमेन्टको बोरा वा टायल जस्ता गह्रौं सामान राख्दा खट भाँच्चिएर लड्न नदिन पालना गर्नुपर्ने नियम कुन हो?",
      options: [
        { ja: "許容積載荷重の範囲内であっても1箇所に集中して山積みにせず、建地（柱）の直上を避けて全体に均等に分散配置する", id: "Jangan menumpuk beban di satu titik saja (hindari beban timpang/eksentrik); sebarkan beban secara merata di sepanjang bentang perancah", ne: "तोकिएको तौलभित्र भए पनि एउटै ठाउँमा धेरै थुपारेर भार नपार्ने; पूरै खटभरि बराबर बाँडेर मिलाएर राख्ने" },
        { ja: "足場板1枚の真ん中に重さ5トンの鉄塊をドカンと載せる", id: "Menaruh bongkahan besi 5 ton tepat di tengah satu lembar papan", ne: "एउटा फलेकको बीचमा ५ टनको फलाम थुपार्ने" },
        { ja: "歩行通路を完全に塞ぐように天井まで隙間なく資材を積み上げる", id: "Menimbun material sampai menyentuh langit-langit hingga jalan tertutup total", ne: "हिँड्ने बाटो पूरै थुनेर सिलिङसम्म सामान थुपार्ने" },
        { ja: "資材が転がり落ちるように足場板を斜めに傾けておく", id: "Memasang papan miring agar barang menggelinding jatuh", ne: "सामान तल खसोस् भनी फलेक छड्के पारेर राख्ने" }
      ],
      answer: 0,
      expJa: "【偏荷重の防止】総重量が制限値以下でも、特定のスパンや梁に重量が集中（偏荷重）すると部分破断して足場全体が倒壊します。重量物は分散配置が鉄則です。",
      expId: "Beban terpusat (point load) meremukkan lantai perancah. Sebarkan tumpukan semen secara merata di atas beberapa tiang.",
      expNe: "एउटै ठाउँमा धेरै भारी थुपारे खटको त्यो भाग भाँचिएर पूरै खट ढल्छ। त्यसैले सामान जहिले पनि फैलाएर राख्नुपर्छ।"
    },
    {
      cat: "学科：安全朝礼でのラジオ体操の目的",
      q: "問26：現場の毎朝の安全朝礼において、全員で「ラジオ体操」を行う最大の医学的・安全上の目的は何ですか。",
      q_id: "Soal 26: Apakah tujuan medis dan keselamatan kerja terpenting dari senam pagi bersama (Rajio Taisou) di proyek Jepang?",
      q_ne: "प्रश्न २६: बिहानी सुरक्षा सभामा सबैजना मिलेर गरिने 'रेडियो कसरत (बिहानी व्यायाम)' को मुख्य उद्देश्य के हो?",
      options: [
        { ja: "筋肉や関節の柔軟性を高めて作業中の筋腱損傷や腰痛・転倒を防ぎ、全身の血流を促して脳の覚醒度（集中力）を一気に高めるため", id: "Meregangkan otot/sendi demi mencegah keseleo, sakit pinggang, dan tersandung, serta memompa aliran darah agar otak bangun fokus siaga", ne: "मांसपेशी र जोर्नीहरू तन्काएर ढाड दुख्ने र लड्ने दुर्घटना रोक्न, र शरीरमा रगत सञ्चालन बढाएर दिमागलाई पूर्ण चनाखो बनाउनका लागि" },
        { ja: "作業員の服を泥で汚すためだけ", id: "Hanya untuk mengotori baju kerja", ne: "कपडा फोहोर बनाउन" },
        { ja: "朝から全員の体力を消耗させて昼寝しやすくするため", id: "Agar stamina pekerja terkuras dan cepat ngantuk", ne: "कामदारलाई थकाएर सुत्न सजिलो होस् भनेर" },
        { ja: "現場監督が作業員のダンスの腕前を採点するため", id: "Untuk menilai bakat menari pekerja", ne: "नाच प्रतियोगिताको नम्बर दिन" }
      ],
      answer: 0,
      expJa: "【テキスト P.186参照】ラジオ体操は全身の筋肉をくまなく動かす科学的ストレッチです[cite: 16]。作業前の筋温上昇と中枢神経の覚醒により、朝一番のケガを劇的に減少させます。",
      expId: "Senam pagi menaikkan suhu otot dan menyalakan fokus otak dari rasa kantuk, memangkas cedera otot dan salah langkah di pagi hari.",
      expNe: "बिहान कसरत गर्दा मांसपेशी तन्किन्छ, ढाड मर्किने डर हुन्न र निन्द्रा खुलेर दिमाग ताजा भई सुरक्षित काम गर्न सकिन्छ।"
    },
    {
      cat: "学科：脚立使用時の「天板跨ぎ作業」の危険性",
      q: "問27：内装工事などで、作業員が脚立の天板にまたがって（左右に足を下ろして）作業してはならない最も危険な理由は何ですか。",
      q_id: "Soal 27: Mengapa bekerja dengan posisi menduduki/mengangkangi puncak tangga lipat (seperti menunggang kuda) SANGAT BERBAHAYA?",
      q_ne: "प्रश्न २७: भर्याङ (क्याताचु) को दुईतिर खुट्टा झुन्ड्याएर (घोडा चढे झैं) टुप्पोमा बसेर काम गर्नु किन अति खतरनाक मानिन्छ?",
      options: [
        { ja: "身体の重心が高くなり、横方向の力に対して極めて不安定になり、バランスを崩した瞬間に脚立ごと横転して頭部から墜落するため", id: "Titik berat tubuh menjadi terlalu tinggi dan sangat rapuh terhadap gaya dorong samping; jika oleng, tangga akan terbalik dan kepala menghantam lantai", ne: "शरीरको सन्तुलन धेरै माथि पुगेर छेउतिर हल्का धक्का लाग्नासाथ भर्याङ नै पल्टिन्छ र टाउको भुइँमा बजारिएर ज्यान जान्छ" },
        { ja: "ズボンのお尻が破れて恥ずかしいから", id: "Hanya karena celana bisa sobek", ne: "प्यान्ट च्यातिन्छ भनेर" },
        { ja: "脚立のアルミが冷たくて気持ちいいから", id: "Karena aluminiumnya dingin", ne: "आल्मुनियम चिसो हुन्छ भनेर" },
        { ja: "法律で脚立の上に座ると靴が汚れると決まっているから", id: "Karena sepatu jadi kotor", ne: "जुत्ता फोहोर हुन्छ भनेर" }
      ],
      answer: 0,
      expJa: "【テキスト P.184参照】脚立の天板跨ぎ作業は、足で踏ん張りが効かず、身体が揺れた瞬間に脚立ごと横倒しになります[cite: 14]。必ずステップ上に両足で立って作業します[cite: 14]。",
      expId: "Mengangkangi tangga melumpuhkan refleks kaki untuk menyeimbangkan diri. Saat tangan menarik bor, tangga akan terpelanting ke samping seketika.",
      expNe: "क्याताचुको टुप्पोमा बसेर काम गर्दा खुट्टाले टेक्न नपाएर भर्याङसँगै मान्छे छेउतिर पछारिन्छ र टाउको फुट्छ।"
    },
    {
      cat: "学科：熱中症と作業服の通気性・遮光性",
      q: "問28：夏季の屋外現場において、熱中症を防ぐために推奨される作業服（衣服）の選び方として正しいものはどれですか。",
      q_id: "Soal 28: Manakah kriteria pemilihan baju kerja (workwear) yang BENAR untuk menekan sengatan panas di proyek luar ruangan saat musim panas?",
      q_ne: "प्रश्न २८: गर्मीमा घाममा काम गर्दा हिटस्ट्रोकबाट जोगिन कामदारको पोसाक छान्ने सही नियम कुन हो?",
      options: [
        { ja: "吸汗速乾性に優れ、通気性が良く、熱を吸収しにくい淡い色（白やシルバー・薄青等）の長袖作業服を着用する", id: "Baju kerja lengan panjang berbahan cepat kering menyerap keringat, berventilasi baik, dan berwarna terang (putih/silver) yang memantulkan panas", ne: "पसिना छिट्टै सुकाउने, हावा छिर्ने र घामको तातो नसोस्ने हल्का रङको (सेतो, चाँदी वा हल्का नीलो) लामो बाहुला भएको कपडा लगाउने" },
        { ja: "熱を限界まで吸収する真っ黒な分厚い革ジャンパーを素肌の上に着る", id: "Jaket kulit tebal warna hitam legam yang menyerap panas maksimal", ne: "तातो सोस्ने बाक्लो कालो छालाको ज्याकेट लगाउने" },
        { ja: "上半身裸（ハダカ）になって直射日光を直接肌に浴びながら作業する", id: "Bekerja telanjang dada tanpa baju di bawah matahari", ne: "नाङ्गो जिउ भएर घाममा काम गर्ने" },
        { ja: "風をまったく通さない完全密閉のサウナスーツを着て作業する", id: "Memakai baju sauna plastik kedap udara", ne: "हावा नछिर्ने प्लास्टिकको साउना सुट लगाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.191参照】黒い服は太陽熱を吸収して衣服内温度が50℃近くまで跳ね上がります[cite: 21]。淡色で吸汗速乾・通気性の良い長袖（直射日光遮断）を着用します[cite: 21]。",
      expId: "Baju warna hitam menyerap panas matahari secara ekstrem. Pakai baju warna terang berventilasi yang memantulkan radiasi surya.",
      expNe: "कालो कपडाले घामको तातो सोसेर भित्र ५० डिग्रीसम्म पुर्याउँछ। त्यसैले सेतो वा हल्का रङको हावा छिर्ने कपडा लगाउनुपर्छ।"
    },
    {
      cat: "学科：保護手袋と回転工具（巻き込まれの物理的理由）",
      q: "問29：ボール盤やパイプねじ切り機、電気丸のこなどの回転する機械を使用する際、なぜ「革手袋や軍手」の着用が禁止されているのですか。",
      q_id: "Soal 29: Mengapa secara mekanis DILARANG KERAS memakai sarung tangan (kain/kulit) saat mengoperasikan mesin potong/bor yang berputar?",
      q_ne: "प्रश्न २९: घुम्ने मेसिनहरू (ड्रिल, गोलो आरा वा थ्रेडिङ मेसिन) चलाउँदा कपडा वा छालाको पञ्जा लगाउन किन कडा प्रतिबन्ध लगाइएको हो?",
      options: [
        { ja: "回転軸や刃先に手袋の布地がわずかでも触れると、強力なトルクで手袋ごと指や腕が瞬時に巻き込まれ、骨折や引きちぎり切断の大事故になるため", id: "Jika kain sarung tangan tersenggol putaran mesin, torsi mesin yang sangat kuat akan menggulung kain dan menarik paksa tangan masuk hingga teramputasi remuk", ne: "घुमिरहेको भागमा पञ्जाको सानो धागो छुने बित्तिकै मेसिनको चर्को शक्तिले पञ्जासहित पूरै हातलाई भित्र तानेर हड्डी भाँच्ने र औंला चुँडाल्ने भएकाले" },
        { ja: "手袋が破れると買い直すお金がもったいないから", id: "Karena sayang uang untuk beli sarung tangan baru", ne: "नयाँ पञ्जा किन्ने पैसा खर्च हुन्छ भनेर" },
        { ja: "手袋をしていると指紋が機械について汚れるから", id: "Agar sidik jari tidak mengotori mesin", ne: "औंठाछाप मेसिनमा बस्छ भनेर" },
        { ja: "素手のほうが機械に電気が流れて感電しやすいから", id: "Agar mudah tersetrum", ne: "करेन्ट लाग्न सजिलो हुन्छ भनेर" }
      ],
      answer: 0,
      expJa: "【テキスト P.184・190参照】回転機械は人間が引っ張り返せる力ではありません。手袋の繊維が噛み込まれた瞬間、指・手首・腕全体が巻き込まれ即座に切断されます[cite: 14, 20]。",
      expId: "Torsi mesin putar ribuan RPM tidak bisa dilawan tenaga manusia. Serat kain yang tersambar akan memuntir putus tangan Anda dalam hitungan detik. WAJIB TELANJANG TANGAN!",
      expNe: "मेसिनको घुम्ने शक्ति यति धेरै हुन्छ कि पञ्जा समात्ने बित्तिकै मान्छेको हातै भित्र तानिदिन्छ। त्यसैले यस्ता मेसिनमा खाली हातले काम गर्नुपर्छ।"
    },
    {
      cat: "学科：熱中症疑い時の「脇・股の動脈冷却」の理由",
      q: "問30：熱中症で高熱を出して倒れた作業員の「首の両脇」「脇の下」「太ももの付け根」を最優先で冷やす医学的理由は何ですか。",
      q_id: "Soal 30: Apakah alasan medis utama mengapa kompres es WAJIB difokuskan pada Leher, Ketiak, dan Selangkangan Paha saat menangani korban heatstroke?",
      q_ne: "प्रश्न ३०: हिटस्ट्रोकले थलिएको बिरामीको 'घाँटी', 'काखी' र 'तिघ्राको जोर्नी' मा नै बरफ राखेर चिस्याउनु पछाडिको मुख्य चिकित्सकीय कारण के हो?",
      options: [
        { ja: "皮膚の浅い表面のすぐ近くを大量の血液が流れる太い動脈が通っているため、そこを冷やすことで冷えた血液が全身を循環し、脳や内臓の深部体温を最も速く下げられるから", id: "Karena di area tersebut mengalir pembuluh darah arteri besar dekat permukaan kulit; mendinginkannya akan memompa darah dingin ke seluruh tubuh dan mendinginkan otak seketika", ne: "छालाको नजिकै ठूला रक्तनलीहरू (धमनी) बगेका हुन्छन्, त्यहाँ चिस्याउँदा चिसो रगत तुरुन्तै शरीरभरि घुम्छ र दिमाग तथा भित्री अंगको तातोपन सबैभन्दा छिटो घट्छ" },
        { ja: "そこを冷やすとくすぐったくて目を覚ますから", id: "Karena korban merasa geli lalu bangun", ne: "काउकुती लागेर बिरामी ब्युँझिन्छ भनेर" },
        { ja: "氷嚢を置くのにちょうど平らな場所だから", id: "Karena tempatnya pas datar untuk menaruh es", ne: "बरफ राख्न सजिलो ठाउँ भएर" },
        { ja: "医学的な意味はなく現場の昔からの習慣にすぎない", id: "Hanya tradisi kuno tanpa dasar medis", ne: "कुनै वैज्ञानिक कारण नभई पुरानो चलन मात्र हो" }
      ],
      answer: 0,
      expJa: "【テキスト P.190参照】首（頸動脈）、脇（腋窩動脈）、股（大腿動脈）は血液の熱交換ラジエーターです[cite: 20]。ここを冷やすことが脳死や多臓器不全を防ぐ最大の救命措置です[cite: 20]。",
      expId: "Tiga titik arteri besar ini adalah kunci mendinginkan darah yang mengalir ke otak. Mengompres dahi saja TIDAK CUKUP menyelamatkan nyawa.",
      expNe: "घाँटी र काखी मुनि शरीरका मुख्य रक्तनलीहरू हुन्छन्। त्यहाँ बरफ राख्दा चिसिएको रगत दिमागमा पुगेर मान्छेको ज्यान तत्काल जोगिन्छ।"
    },
    {
      cat: "学科：酸素欠乏症における「一呼吸の恐怖」",
      q: "問31：酸素濃度が10%未満の酸素欠乏空気を人間が一呼吸でも吸い込んだ場合に起こる人体の反応として正しいものはどれですか。",
      q_id: "Soal 31: Bagaimanakah reaksi fatal tubuh manusia jika menghirup udara beroksigen rendah (< 10%) bahkan HANYA DALAM SATU TARIKAN NAPAS?",
      q_ne: "प्रश्न ३१: अक्सिजनको मात्रा १०% भन्दा कम भएको हावा मानिसले 'जम्मा एक सासमा मात्र' तान्यो भने शरीरमा तत्काल के हुन्छ?",
      options: [
        { ja: "肺の中の酸素が逆に空気中に奪われ、脳が瞬時に酸素を失って一瞬（数秒）で意識を失って卒倒し、数分以内に心停止・死亡する", id: "Oksigen di dalam darah justru tersedot keluar ke paru-paru; otak lumpuh seketika dan korban langsung pingsan ambruk dalam 1 detik, lalu tewas dalam hitungan menit", ne: "रगतमा भएको अक्सिजन उल्टै फोक्सो हुँदै बाहिर तानिन्छ; दिमागले काम गर्न छोडेर मान्छे १ सेकेन्डमै भुइँमा ढल्छ र केही मिनेटभित्र मुटु बन्द भई मृत्यु हुन्छ" },
        { ja: "深呼吸したように気分がスッキリして元気になる", id: "Badan terasa segar bugar", ne: "शरीरमा स्फूर्ति आउने" },
        { ja: "少しあくびが出るだけで何時間でも普通に作業できる", id: "Hanya menguap kecil dan bisa lanjut kerja berjam-jam", ne: "हाइ मात्र आउने र केही नहुने" },
        { ja: "視力が急激に良くなって遠くがよく見えるようになる", id: "Pandangan mata menjadi sangat tajam", ne: "आँखाको ज्योति धेरै बढ्ने" }
      ],
      answer: 0,
      expJa: "【酸欠のメカニズム】無酸素空気を吸うと、血液中の酸素が分圧差で肺胞へと逆流し脱酸素化されます。警告症状なしで即座に失神（一発卒倒）するため自力脱出は不可能です。",
      expId: "Satu tarikan napas udara minim oksigen langsung menyedot habis oksigen dari otak. Korban ambruk tumbang seperti ditebas pedang tanpa sempat berteriak minta tolong.",
      expNe: "अक्सिजन नभएको हावा एकपटक मात्र सास फेरे पनि रगतको बाँकी अक्सिजन पनि सकिन्छ र मान्छे कराउन समेत नपाई तुरुन्तै ढलेर मर्छ।"
    },
    {
      cat: "学科：熱中症と「深部体温40℃」の限界",
      q: "問32：熱中症によって体温調節機能が完全に破綻し、深部体温が40℃を超えた状態を放置した場合に起こる致命的な体内障害は何ですか。",
      q_id: "Soal 32: Kerusakan fatal apakah yang terjadi pada organ tubuh manusia jika demam inti tubuh akibat sengatan panas dibiarkan melampaui 40°C?",
      q_ne: "प्रश्न ३२: हिटस्ट्रोकका कारण शरीरको भित्री तापक्रम ४० डिग्रीभन्दा माथि पुगेर धेरै बेरसम्म चिस्याउन नसके शरीरभित्र कस्तो भयानक क्षति हुन्छ?",
      options: [
        { ja: "脳神経や肝臓・腎臓などの全身のタンパク質が熱変性（熱で凝固）を起こし、不可逆的な多臓器不全を引き起こして極めて高い確率で死に至る", id: "Protein sel otak, hati, dan ginjal menggumpal rusak terpanggang panas (koagulasi protein); memicu gagal organ ganda permanen dan kematian", ne: "दिमाग, कलेजो र मिर्गौलाका कोषहरू अत्यधिक तातोले गर्दा अण्डा पाके झैं जमेर नष्ट हुन्छन्, जसले गर्दा अंगहरू फेल भई मृत्यु हुन्छ" },
        { ja: "皮膚がツルツルになって若返る", id: "Kulit menjadi halus dan awet muda", ne: "छाला राम्रो हुने" },
        { ja: "体内のウイルスがすべて死滅して健康になる", id: "Semua bakteri mati dan tubuh sehat", ne: "रोगका कीटाणु मरेर निरोगी हुने" },
        { ja: "身体が軽くなって空を飛べるようになる", id: "Tubuh menjadi ringan bisa melayang", ne: "शरीर हलुका हुने" }
      ],
      answer: 0,
      expJa: "【テキスト P.190参照】体温が40℃を超えると生体タンパク質の熱変性が始まります[cite: 20]。一度固まった脳や肝臓のタンパク質は冷やしても元に戻りません。40℃を超える前に急速冷却しなければなりません。",
      expId: "Suhu tubuh > 40°C merebus protein otak dan ginjal seperti merebus telur ayam. Kerusakan ini permanen! Dinginkan korban dengan es TANPA TUNDA.",
      expNe: "४० डिग्री नाघेपछि मानिसको दिमाग र मिर्गौला तातोले उम्लेर बिग्रिन्छ, जुन पछि कहिल्यै निको हुन्न। त्यसैले तुरुन्तै चिस्याउनै पर्छ।"
    },
    {
      cat: "学科：クレーン作業とアウトリガ敷鉄板の地耐力",
      q: "問33：移動式クレーンを設置する際、アウトリガ反力（集中荷重）が地盤の支持力（地耐力）を上回った場合に発生する事故は何ですか。",
      q_id: "Soal 33: Musibah fatal apakah yang terjadi jika daya tekan hidrolik kaki outrigger crane melebihi daya dukung kekuatan tanah di bawahnya?",
      q_ne: "प्रश्न ३३: क्रेनको खुट्टाले भुइँमा दिने चर्को भार जमिनको माटोले थेग्न नसक्दा कस्तो भयानक दुर्घटना हुन्छ?",
      options: [
        { ja: "アウトリガが地盤を突き破って地中にズブズブと陥没し、クレーンがバランスを失って一瞬で横転・倒壊する", id: "Cakar outrigger menembus amblas ke dalam tanah, membuat crane kehilangan keseimbangan lalu terbalik roboh seketika", ne: "क्रेनको खुट्टा माटो भासिएर जमिनमुनि गहिरो गाडिन्छ, जसले गर्दा क्रेनको सन्तुलन गुमेर गाडी तुरुन्तै पल्टिन्छ" },
        { ja: "クレーンがトランポリンのように跳ね上がる", id: "Crane melompat seperti trampolin", ne: "क्रेन उफ्रिने" },
        { ja: "地中から温泉が湧き出してくる", id: "Air panas sumber onsen menyembur", ne: "जमिनबाट तातो पानी निस्कने" },
        { ja: "タイヤの空気が自動的に満タンになる", id: "Ban terisi angin otomatis", ne: "हावा भरिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.183参照】クレーン転倒の最多原因はアウトリガの地中陥没です[cite: 13]。軟弱地盤には必ず大型敷鉄板（厚さ22mm等）を2枚重ねて敷き、地耐力を確保します。",
      expId: "Tanah yang amblas menelan kaki outrigger adalah pembunuh nomor satu dalam insiden crane terbalik. Wajib alas pelat baja tebal.",
      expNe: "क्रेन पल्टिने मुख्य कारण नै खुट्टा जमिनमा भासिनु हो। कमजोर जमिनमा बाक्लो फलामे प्लेट दोहोर्याएर ओछ्याउनुपर्छ।"
    },
    {
      cat: "学科：熱中症と現場の「WBGT値の低減設備」",
      q: "問34：直射日光が照りつける鉄骨上や屋外ヤードにおいて、環境省・厚労省が推奨する「WBGT値を物理的に下げるための仮設設備」として最も適切なものはどれですか。",
      q_id: "Soal 34: Fasilitas fisik apakah yang direkomendasikan Kementerian Kesehatan & Lingkungan Jepang untuk menurunkan nilai indeks WBGT di lapangan terbuka?",
      q_ne: "प्रश्न ३४: खुला घाममा काम गर्दा WBGT गर्मीको नापलाई भौतिक रूपमै घटाउन सरकारले सिफारिस गरेको अस्थायी उपकरण कुन हो?",
      options: [
        { ja: "遮光ネット（寒冷紗）、ドライミスト発生装置、大型気化熱送風機（大型扇風機）", id: "Jaring Peneduh Paranet, Nozzle Penyemprot Butiran Air Halus (Dry Mist), dan Kipas Blower Penguapan Air Skala Besar", ne: "घाम छेक्ने कालो जाली (पारानेट), पानीको मसिनो बाफ छर्कने मेसिन (ड्राई मिस्ट), र ठूला वाष्पीकरण पंखाहरू" },
        { ja: "現場用ドラム缶焚き火ストーブ", id: "Tungku api tong drum", ne: "दाउरा बाल्ने हिटर" },
        { ja: "白熱電球の投光器100台の一斉照射", id: "100 unit lampu sorot panas", ne: "१०० वटा तातो बत्ती बाल्ने" },
        { ja: "風を完全に遮断する厚手の防音シートの壁囲い", id: "Dinding kedap udara tanpa angin", ne: "हावा छेक्ने बाक्लो पर्खाल" }
      ],
      answer: 0,
      expJa: "【テキスト P.191参照】日射を遮光ネットで遮り、気化熱を利用したミストや大型送風機で冷却することで、作業エリアのWBGT値を2〜3℃低減させることができます[cite: 21]。",
      expId: "Kombinasi paranet peneduh dan dry mist blower terbukti ampuh memangkas angka WBGT sebesar 2 hingga 3 derajat celcius di titik kerja.",
      expNe: "घाम छेक्ने जाली र पानीको बाफ छर्कने पंखा सँगै चलाउँदा कार्यस्थलको WBGT तापक्रम २ देखि ३ डिग्रीसम्म तुरुन्तै घट्छ।"
    },
    {
      cat: "学科：脚立の「開き止め金具」の重要性",
      q: "問35：アルミ製脚立の開き止め金具（止め金）が外れたり変形した状態で作業員が登った場合、何が起きて事故になるのですか。",
      q_id: "Soal 35: Bahaya fatal apakah yang terjadi jika pekerja nekat memanjat tangga lipat (kyatatsu) yang engsel penguncinya rusak atau tidak dikunci?",
      q_ne: "प्रश्न ३५: भर्याङ (क्याताचु) को दुई खुट्टालाई बाँध्ने बीचको लक भाँचिएको वा नलगाइएको अवस्थामा चढ्दा कस्तो भयानक दुर्घटना हुन्छ?",
      options: [
        { ja: "作業員の体重と道具の荷重がかかった瞬間、脚が左右に滑って一気に真っ平らに開いてしまい、作業員が真下や横へ激しく墜落・転倒する", id: "Saat menerima beban tubuh, kaki tangga akan melebar tergelincir sampai mendatar licin, melempar pekerja jatuh terbanting ke lantai", ne: "मान्छेको तौल पर्ने बित्तिकै भर्याङका दुवै खुट्टा भुइँमा चिप्लिएर पूरै च्यातिन्छन् र कामदार सिधै भुइँमा बजारिएर गम्भीर घाइते हुन्छ" },
        { ja: "脚立が空中にフワフワと浮き上がっていく", id: "Tangga melayang ke udara", ne: "भर्याङ हावामा उड्ने" },
        { ja: "脚立の色が金色に変化する", id: "Warna tangga berubah emas", ne: "रङ सुनौलो हुने" },
        { ja: "何も起きず新品同様に頑丈になる", id: "Tidak terjadi apa-apa", ne: "केही नहुने" }
      ],
      answer: 0,
      expJa: "【テキスト P.184参照】開き止め金具がロックされていない脚立は、荷重で脚が滑って180度開いて開脚倒壊します[cite: 14]。左右のロックの完全確認が必須です[cite: 14]。",
      expId: "Tanpa kuncian engsel hirakidome, kedua kaki tangga lipat akan mekar terbuka 180 derajat begitu diinjak, membanting tubuh ke lantai beton.",
      expNe: "बीचको लक नलागेको क्याताचुमा टेक्नसाथ भर्याङ १८० डिग्री सिधा भएर चिप्लिन्छ र मान्छे सिधै भुइँमा पछारिन्छ।"
    },
    {
      cat: "学科：熱中症と「睡眠不足」の相乗リスク",
      q: "問36：前夜の睡眠時間が「3時間未満」など極端な睡眠不足の作業員を、当日の炎天下の高所作業にそのまま従事させてはならない医学的理由は何ですか。",
      q_id: "Soal 36: Mengapa pekerja yang kurang tidur parah (tidur < 3 jam) DILARANG KERAS ditugaskan bekerja di ketinggian cuaca terik hari itu?",
      q_ne: "प्रश्न ३६: राती ३ घण्टाभन्दा कम मात्र सुतेर निन्द्रा नपुगेको कामदारलाई चर्को घाममा अग्लो ठाउँको काममा किन कडा प्रतिबन्ध लगाउनुपर्छ?",
      options: [
        { ja: "自律神経の乱れにより体温調節（発汗機能）が著しく低下しており、めまいや集中力低下から一瞬で熱中症を発症して足場から墜落死するリスクが極めて高いため", id: "Sistem saraf otonom terganggu sehingga tubuh gagal berkeringat normal; pusing dan hilang fokus memicu sengatan panas kilat berujung jatuh dari perancah", ne: "निन्द्रा नपुग्दा पसिना आउने प्रणाली बिग्रिन्छ, रिङ्गटा लाग्ने र ध्यान हराउने हुनाले केही बेरमै हिटस्ट्रोक भएर खटबाट खसी ज्यान जाने उच्च जोखिम हुन्छ" },
        { ja: "作業員が元気すぎて他の人の邪魔をするから", id: "Pekerja jadi terlalu bersemangat", ne: "धेरै फुर्तिलो हुने भएकोले" },
        { ja: "睡眠不足の人は体重が重くなり足場板が割れるから", id: "Berat badan bertambah drastis", ne: "तौल धेरै बढ्ने भएकोले" },
        { ja: "お昼休みにご飯をたくさん食べすぎてしまうから", id: "Makan siang terlalu banyak", ne: "धेरै खाना खाने भएकोले" }
      ],
      answer: 0,
      expJa: "【睡眠不足と熱中症】熱中症死亡事例の多くに「前日の睡眠不足」が共通しています。脳の体温中枢が働かず急激に倒れます。地上での軽作業へ即座に配置転換します。",
      expId: "Kurang tidur melumpuhkan sistem pendingin alami tubuh. Pekerja kurang tidur yang memanjat perancah di siang terik sama saja dengan bunuh diri.",
      expNe: "निन्द्रा नपुगेको मान्छे घाममा चढ्नु भनेको आत्महत्या सरह हो। शरीरको तापक्रम नियन्त्रण नभएर रिङ्गटा लाग्छ र मान्छे तल खस्छ।"
    },
    {
      cat: "学科：クレーン作業と強風による作業中止基準（瞬間風速）",
      q: "問37：移動式クレーンやタワークレーンによる揚重作業において、労働安全衛生規則に基づき、作業を直ちに中止しなければならない風速基準はどれですか。",
      q_id: "Soal 37: Berapakah batas kecepatan angin hembusan sesaat (shunkan fuusoku) di mana operasi crane mengangkat barang WAJIB DIHENTIKAN total?",
      q_ne: "प्रश्न ३७: क्रेनले सामान उठाउँदा हावाहुरीका कारण काम तुरुन्तै बन्द गर्नुपर्ने 'हावाको अचानक गतिको मापदण्ड' कति हो?",
      options: [
        { ja: "瞬間風速が毎秒15m以上（または10分間の平均風速が毎秒10m以上）", id: "Kecepatan hembusan angin sesaat 15 m/s ke atas (atau rata-rata 10 menit mencapai 10 m/s ke atas)", ne: "हावाको अचानक गति प्रति सेकेन्ड १५ मिटर (१५m/s) भन्दा बढी (वा १० मिनेटको औसत गति १०m/s भन्दा बढी)" },
        { ja: "瞬間風速が毎秒1m以上", id: "Kecepatan angin 1 m/s", ne: "प्रति सेकेन्ड १ मिटर" },
        { ja: "風速50m以上", id: "Kecepatan angin 50 m/s", ne: "प्रति सेकेन्ड ५० मिटर" },
        { ja: "台風直撃でもクレーン作業を止めてはならない", id: "Dilarang berhenti meski ada taifun", ne: "आँधी आए पनि रोक्न नपाइने" }
      ],
      answer: 0,
      expJa: "【クレーン則第74条の2】強風時（瞬間15m/s以上・平均10m/s以上）は、吊り荷が激しく旋回・流されて周囲に激突するか、クレーンが転倒するため作業中止が義務です。",
      expId: "Angin kencang sesaat 15 m/s mematikan operasi crane! Beban gantung akan berayun liar menghantam struktur gedung.",
      expNe: "हावाको गति १५m/s पुग्ने बित्तिकै क्रेनको काम रोक्नै पर्छ किनकि झुन्ड्याएको सामान हावाले उडाएर भवन वा मान्छेमा ठोक्किन्छ।"
    },
    {
      cat: "学科：熱中症と「救急車を呼ぶ判断の遅れ」の危険",
      q: "問38：現場で熱中症の作業員が倒れた際、職長が「少し休ませれば治るだろう」と安易に自己判断して救急車（119番）の手配を遅らせた場合に発生する最悪の結果は何ですか。",
      q_id: "Soal 38: Apakah konsekuensi fatal jika Shokucho menunda memanggil Ambulans 119 karena meremehkan dan mengira 'nanti juga sembuh sendiri kalau diistirahatkan'?",
      q_ne: "प्रश्न ३८: गर्मीले बिरामी परेको साथीलाई 'एकछिन आराम गरे निको भइहाल्छ नि' भन्दै शोकुचोले समयमै एम्बुलेन्स (११९) नबोलाउँदा कस्तो भयानक नतिजा आउँछ?",
      options: [
        { ja: "深部体温が急速に上昇し続けて脳死状態や多臓器不全に陥り、手遅れとなって作業員が死亡する", id: "Suhu organ dalam terus membara tanpa terkendali hingga otak mati (koma), berujung kematian tragis akibat keterlambatan medis", ne: "शरीरको भित्री तापक्रम अनियन्त्रित भई दिमागको मृत्यु (ब्रेन डेड) हुन्छ, उपचार नपाई ढिलो भएर साथीको अकालमै ज्यान जान्छ" },
        { ja: "作業員が自力で立ち上がってフルマラソンを完走する", id: "Pekerja langsung lari maraton", ne: "बिरामी आफैं दौडिएर म्याराथन जित्ने" },
        { ja: "元請から表彰状がもらえる", id: "Dapat penghargaan dari kontraktor utama", ne: "हाकिमबाट पुरस्कार पाइने" },
        { ja: "病院代がタダになる", id: "Biaya RS jadi gratis", ne: "अस्पतालको खर्च सित्तैमा हुने" }
      ],
      answer: 0,
      expJa: "【熱中症の搬送遅延死】熱中症死亡事故の9割は「様子を見よう」と放置して救急車の手配が遅れたことが原因です。意識混濁や自力摂取不可時は迷わず119番です。",
      expId: "Menunda telepon 119 adalah penyebab utama kematian heatstroke. 'Menunggu様子見' di tempat tidur barak proyek membunuh pekerja.",
      expNe: "हिटस्ट्रोकमा 'अलि पर्खौं' भन्नु मान्छे मार्नु हो। होस हराउन थाल्ने बित्तिकै १ सेकेन्ड नरोकिई ११९ एम्बुलेन्स बोलाउनुपर्छ।"
    },
    {
      cat: "学科：足場の幅木（はばき）の隙間管理（P.103）",
      q: "問39：足場の作業床に幅木を取り付ける際、幅木の下端と足場板の床面とのすき間に関する安全管理として正しいものはどれですか。",
      q_id: "Soal 39: Bagaimanakah aturan celah antara tepi bawah papan habaki (toeboard) dan permukaan lantai kerja perancah?",
      q_ne: "प्रश्न ३९: खटको भुइँमा हाबाकी (किनारको तख्ता) लगाउँदा, तख्ताको मुनि र भुइँको बीचमा कति खाली ठाउँ (प्वाल) छाड्न मिल्छ?",
      options: [
        { ja: "ボルトやナット・小工具がすき間からすり抜けて落下しないよう、床面とのすき間は「原則すき間なし（1cm以下）」で密着させて取り付ける", id: "Wajib rapat tanpa celah (maksimal celah < 1 cm) agar baut, mur, atau obeng kecil tidak menggelinding lolos menerobos kolong habaki", ne: "नट, बोल्ट वा साना पेचकस मुनिबाट नछिरुन् भन्नका लागि भुइँ र तख्ताको बीचमा 'कुनै खाली ठाउँ नराखी (१ सेमीभन्दा कम)' टाँसेर कस्ने" },
        { ja: "風通しを良くするため、下端を20cm浮かせて取り付ける", id: "Diberi celah 20 cm agar ada angin", ne: "हावा छिरोस् भनेर २० सेमी माथि राख्ने" },
        { ja: "工具を足で蹴飛ばして下に落とせるように5cmのすき間を開ける", id: "Diberi celah 5 cm untuk menendang baut jatuh", ne: "औजार तल खसाल्न ५ सेमीको प्वाल छाड्ने" },
        { ja: "幅木は地面に立てて足場の上には取り付けない", id: "Ditaruh di tanah saja", ne: "भुइँमा मात्र राख्ने खटमा नराख्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.103参照】幅木の下にすき間があると、蹴飛ばしたボルトやシノがすき間からそのまま落下して直撃事故になります[cite: 8]。床板に隙間なく密着施工します。",
      expId: "Habaki harus menempel rapat ke lantai. Celah 2 cm saja sudah cukup untuk meloloskan baut besi membunuh orang di bawah.",
      expNe: "हाबाकीको मुनि थोरै पनि प्वाल भए खुट्टाले ठोकिएर नट-बोल्ट तल खस्छ। त्यसैले भुइँसँग टपक्क जोडेर कस्नुपर्छ।"
    },
    {
      cat: "学科：職長としての「率先垂範」の安全行動",
      q: "問40：特定技能2号の職長として、現場の作業員全員に安全ルール（保護具着用や指差し呼称）を徹底させるために、最も効果的で信頼される行動は何ですか。",
      q_id: "Soal 40: Tindakan apakah yang PALING EFEKTIF dan membuat Shokucho dihormati pekerja dalam menegakkan disiplin keselamatan kerja di proyek?",
      q_ne: "प्रश्न ४०: तोकुतेइ गिनौ २ का एक कुशल शोकुचोले आफ्ना कामदारहरूलाई सुरक्षा नियम कडाइका साथ पालना गराउन आफैंले गर्नुपर्ने सबैभन्दा प्रभावकारी काम के हो?",
      options: [
        { ja: "職長自らが誰よりも厳格にルールを守り、アゴ紐を締め、フルハーネスを確実に掛け、大きな声で指差し呼称を行う「率先垂範（そっせんすいはん）」の姿を見せること", id: "Memberi teladan nyata (Sossen Suihan): Mandor sendiri yang paling disiplin mengunci tali helm, mencantolkan harness, dan lantang tunjuk-sebut!", ne: "अरुलाई भन्नुभन्दा पहिले शोकुचो आफैंले सबैभन्दा कडाइका साथ नियम मान्ने, हेल्मेटको तुना कस्ने, हार्नेस अड्काउने र ठूलो स्वरले औंल्याएर बोल्ने 'आफैं उदाहरण बन्ने (सोस्सेन सुइहान)'" },
        { ja: "自分は偉いのでアゴ紐を外してタバコを吸いながら、作業員だけに大声で怒鳴り散らすこと", id: "Mandor merokok tanpa tali helm sambil membentak-bentak anak buah", ne: "आफू हाकिम हुँ भन्दै हेल्मेटको तुना नबाँधी चुरोट खाँदै कामदारलाई गाली गर्ने" },
        { ja: "安全ルールを守る作業員を「真面目すぎてカッコ悪い」とバカにすること", id: "Mengejek pekerja yang taat K3 sebagai orang kaku", ne: "नियम मान्ने साथीलाई जिस्क्याउने" },
        { ja: "危険な作業をすべて新人に丸投げして自分は事務所で昼寝すること", id: "Menyerahkan tugas maut ke anak baru sementara mandor tidur di AC", ne: "जोखिमपूर्ण काम नयाँ कामदारलाई दिएर आफू अफिसमा सुत्ने" }
      ],
      answer: 0,
      expJa: "【職長の率先垂範】リーダー自らがルールを破っていれば、作業員が従うはずがありません。「職長の背中を見て育つ」文化を作り、自らの行動で安全を示します。",
      expId: "Pemimpin sejati memimpin dengan teladan. Jika mandor disiplin mencantolkan hook harness, seluruh anak buah akan otomatis mengikutinya.",
      expNe: "नेता आफैंले नियम मानेन भने कसैले मान्दैन। शोकुचो आफैंले अगाडि सरेर नियम माने मात्र सबै कामदारले मानेर कार्यस्थल सुरक्षित हुन्छ।"
    },

    // ==========================================
    // 【実技試験パート：25問（問41〜問65）】
    // ==========================================
    {
      cat: "実技：オートレベルの据付け手順（三脚の踏み込み）",
      q: "問41：オートレベル（水準器）を地面に三脚で据え付ける際、測定中に三脚が沈下して高低差の誤差が出るのを防ぐための基本動作はどれですか。",
      q_id: "Soal 41: Tindakan wajib apakah yang harus dilakukan pada kaki tripod Auto Level saat mendirikannya di atas tanah proyek agar tidak amblas saat mengukur?",
      q_ne: "प्रश्न ४१: अटो लेभलको ट्राइपड स्ट्यान्ड जमिनमा गाड्दा, नाप्दानाप्दै स्ट्यान्ड भासिएर नाप नबिग्रियोस् भन्नाका लागि सुरुमा के गर्नै पर्छ?",
      options: [
        { ja: "三脚の3本の脚の先（石突き）を、自分の体重をかけてしっかりと地面に強く踏み込んで固定する", id: "Injak kuat ketiga ujung sepatu logam kaki tripod (ishitsuki) menggunakan seluruh bobot tubuh ke dalam tanah", ne: "स्ट्यान्डका तीनवटै खुट्टाको फलामे चुच्चोलाई आफ्नो पूरै शरीरको तौल दिएर खुट्टाले कुल्ची जमिनभित्र बेस्सरी गाड्ने" },
        { ja: "三脚の脚を地面に置くだけで一切踏み込まない", id: "Hanya menaruh ujung kaki tripod di atas rumput tanpa diinjak", ne: "स्ट्यान्डलाई जमिन माथि हल्का छुवाएर मात्र राख्ने" },
        { ja: "三脚の脚を水たまりの泥の上に浮かせておく", id: "Membiarkan kaki tripod mengambang di lumpur", ne: "हिलो माथि तैरिने गरी राख्ने" },
        { ja: "三脚を1本足だけで立てて手で支え続ける", id: "Hanya memakai 1 kaki tripod dan dipegangi tangan", ne: "एउटा मात्र खुट्टाको भरमा हातले समातेर राख्ने" }
      ],
      answer: 0,
      expJa: "【レベル据付けの基本】石突き（いしづき）の踏み込み不足は、測定中の沈下誤差の最大要因です。体重をかけて地面にしっかり食い込ませます。",
      expId: "Injak sepatu kaki tripod dengan tumit sepatu safety sekuat tenaga ke dalam tanah agar alat ukur tidak goyang terpaan angin atau getaran truk.",
      expNe: "स्ट्यान्डको खुट्टा राम्ररी नगाडे मान्छे हिँड्दा वा गाडी गुड्दा लेभल बिग्रिन्छ। त्यसैले खुट्टाले कुल्चेर जमिनमा गाड्नै पर्छ।"
    },
    {
      cat: "実技：スタッフの読定（逆さ文字の理由）",
      q: "問42：一部の測量用望遠鏡や古いレベルでスタッフを覗いた際、望遠鏡内部の光学プリズムの構造により「数字が上下逆さま（倒立像）」に見える場合の正しい読み方はどれですか。",
      q_id: "Soal 42: Jika Anda mengintip teropong level optik lama dan angka pada rambu ukur terlihat terbalik atas-bawah (inverted image), bagaimanakah cara membacanya yang BENAR?",
      q_ne: "प्रश्न ४२: पुरानो अटो लेभलको लेन्सबाट हेर्दा भित्र स्टाफको अंक उल्टो (मुनिको अंक माथि, माथिको अंक मुनि) देखियो भने, सही नाप कसरी पढ्नुपर्छ?",
      options: [
        { ja: "数字が倒立像であることを意識し、目盛りの数値の増加方向（下から上に向かって増える本来の方向）を間違えないように慎重に数値を読み取る", id: "Pahami bahwa bayangan terbalik; baca angka dengan teliti mengikuti arah pertambahan skala aslinya dari bawah ke atas", ne: "अंक उल्टो देखिएको हो भन्ने कुरा बुझेर, तलबाट माथितिर अंक बढ्ने क्रमलाई ध्यान दिएर होसियारीपूर्वक नाप पढ्ने" },
        { ja: "望遠鏡を逆さまにひっくり返して覗く", id: "Membalik teropong level menjadi jungkir balik", ne: "मेसिनलाई नै उल्टो पारेर हेर्ने" },
        { ja: "スタッフを持っている作業員に逆立ちして立たせる", id: "Menyuruh pemegang rambu ukur berdiri kayang jungkir balik", ne: "स्टाफ समात्ने मान्छेलाई शीर्षासन (टाउकोले टेकेर) उभिन लगाउने" },
        { ja: "読めないので測量をあきらめて適当な数字をメモする", id: "Mengarang angka semaunya", ne: "अन्दाजमा जे पायो त्यही अंक लेख्ने" }
      ],
      answer: 0,
      expJa: "【倒立像の読定】古い光学測量機器では倒立像が見えます。目盛りの大小の進行方向を頭の中で冷静に判断して正しく読み取ります（現代機は正立像が主流です）。",
      expId: "Bayangan terbalik (inverted) adalah sifat optik lensa teropong konvensional. Baca skala dengan cermat sesuai arah kenaikan angka aslinya.",
      expNe: "उल्टो देखिने मेसिन भए पनि अंक कताबाट बढ्दै गएको छ भन्ने विचार गरेर सही अंक पढ्नुपर्छ।"
    },
    {
      cat: "実技：足場部材（ジャッキベースの段差調整）",
      q: "問43：傾斜した道路や階段状の地盤に足場を組み立てる際、足場の最下部の建地を垂直・水平に揃えるために高さをミリ単位で微調整できる部材は何ですか。",
      q_id: "Soal 43: Komponen dasar perancah apakah yang memiliki ulir ulir drat untuk mengatur ketinggian tiang perancah di tanah yang miring/berundak agar rata air?",
      q_ne: "प्रश्न ४३: भिरालो सडक वा सिँढी भएको जमिनमा खट बनाउँदा, खटका खुट्टाहरूलाई ठ्याक्कै सिधा लेभलमा मिलाउन पेच घुमाएर उचाइ घटाउन-बढाउन मिल्ने बेस कुन हो?",
      options: [
        { ja: "ジャッキベース（ねじ式ジャッキ金具）", id: "Jack Base (Pelat Dasar Ulir Pengatur Elevasi)", ne: "ज्याक बेस (पेच भएको उचाइ मिलाउने बेस प्लेट)" },
        { ja: "固定クランプ", id: "Klem Mati", ne: "फिक्स्ड क्ल्याम्प" },
        { ja: "自在クランプ", id: "Klem Putar", ne: "स्विभल क्ल्याम्प" },
        { ja: "単管ジョイント", id: "Penyambung Pipa Tunggal", ne: "पाइप जोड्ने जोइन्ट" }
      ],
      answer: 0,
      expJa: "【テキスト P.103参照】ジャッキベースのハンドルを回してネジ長さを調節することで、地盤の高低差を吸収し、足場全体の水平（陸墨）を正確に保持します[cite: 8]。",
      expId: "Jack base memiliki ulir pengatur ketinggian untuk menyamakan elevasi tiang perancah di atas tanah yang miring.",
      expNe: "ज्याक बेसको पेच घुमाएर भिरालो जमिनमा पनि खटका सबै खुट्टाहरूलाई एउटै लेभलमा सिधा बनाउन सकिन्छ।"
    },
    {
      cat: "実技：足場クランプの種類（直交と自在の使い分け）",
      q: "問44：2本の単管パイプを「直角（90度）」に強固に交差固定する際に使用するクランプ金具の名称は何ですか。",
      q_id: "Soal 44: Jenis klem pipa apakah yang WAJIB digunakan khusus untuk mengunci dua pipa perancah pada sudut siku-siku paten '90 DERAJAT'?",
      q_ne: "प्रश्न ४४: दुईवटा फलामका पाइपहरूलाई ठ्याक्कै '९० डिग्रीको समकोण' मा बलियो गरी जोड्न प्रयोग गरिने आधिकारिक क्ल्याम्प कुन हो?",
      options: [
        { ja: "直交型クランプ（ちょっこうクランプ / 直交金具）", id: "Klem 직교 / Klem Siku 90 Derajat (Chokkou Clamp / Right Angle Clamp)", ne: "चोक्कोउ क्ल्याम्प (९० डिग्री फिक्स्ड क्ल्याम्प / समकोण क्ल्याम्प)" },
        { ja: "自在型クランプ（角度が自由に動くクランプ）", id: "Klem Putar Bebas (Jizai Clamp / Swivel Clamp)", ne: "जिजाई क्ल्याम्प (घुम्ने क्ल्याम्प)" },
        { ja: "洗濯ばさみ", id: "Jepitan jemuran baju", ne: "कपडा सुकाउने चिम्टा" },
        { ja: "ゴムバンド", id: "Tali karet gelang", ne: "रबर" }
      ],
      answer: 0,
      expJa: "【直交と自在の区別】建地と布・腕木など直角交差部には強固な「直交クランプ」を用います。筋交いなどの斜め留めには角度が変わる「自在クランプ」を用います。",
      expId: "Klem 직교 (Right-angle clamp) mengunci pipa mati 90 derajat. Klem自在 (Swivel clamp) hanya dipakai khusus untuk pipa silang diagonal (sujikai).",
      expNe: "९० डिग्रीको जोर्नीमा सधैं 'चोक्कोउ क्ल्याम्प' लगाउनुपर्छ, घुम्ने 'जिजाई क्ल्याम्प' चाहिँ छड्के डन्डी (सुजिकाई) मा मात्र लगाइन्छ।"
    },
    {
      cat: "実技：足場クランプの締付けトルク確認（ラチェット）",
      q: "問45：足場のクランプナットをラチェットレンチ（シノ）で締め付ける際、締め付けが緩すぎても締めすぎてボルトを破断させてもいけません。標準的な適正締付けトルクはどれですか。",
      q_id: "Soal 45: Berapakah standar torsi pengencangan baut klem perancah yang BENAR (tidak boleh terlalu kendor dan tidak boleh terlalu kencang sampai patah)?",
      q_ne: "प्रश्न ४५: खटको क्ल्याम्पको नट रेन्च (शिनो) ले कस्दा, धेरै खुकुलो पनि हुन नदिन र धेरै कसेर बोल्ट भाँचिन पनि नदिन कति शक्ति (टर्क) मा कस्नुपर्छ?",
      options: [
        { ja: "おおむね 34.3 N・m 〜 44.1 N・m（約350〜450 kgf・cm）", id: "Sekitar 34,3 N·m sampai 44,1 N·m (kencang mantap dengan tenaga tangan penuh kunci rachet)", ne: "करिब ३४.३ देखि ४४.१ N・m (रेन्चले हातको पूरा बल लगाएर ठिक्क कसिलो हुने गरी)" },
        { ja: "指先で1回回すだけの 0.1 N・m", id: "Cuma 0,1 N·m (bisa diputar jari)", ne: "हातको औंलाले हल्का घुमाउने ०.१ N・m" },
        { ja: "巨大な鉄パイプをレンチに差し込んで全体重で飛び跳ねて締める 5000 N・m", id: "5000 N·m sampai baut patah terpelintir", ne: "ठूलो पाइप जोडेर उफ्रिँदै कस्ने ५००० N・m" },
        { ja: "トルクの基準はなく足で蹴飛ばして止まった位置", id: "Ditendang dengan sepatu", ne: "कुनै नियम छैन" }
      ],
      answer: 0,
      expJa: "【クランプ締付けトルク】適正トルクは「350〜450kgf・cm」です。締めすぎるとボルトが降伏破断し、緩いと作業中にパイプが滑り抜けて大崩壊します。",
      expId: "Torsi standar klem perancah adalah 350-450 kgf·cm. Baut yang dipaksa terlalu kencang akan retak putus saat menahan beban ayunan pekerja.",
      expNe: "क्ल्याम्प धेरै कसे बोल्ट भाँचिन्छ, खुकुलो भए पाइप चिप्लिन्छ। त्यसैले तोकिएको ३५०-४५० kgf・cm टर्कमा कस्नुपर्छ।"
    },
    {
      cat: "実技：コンクリートテストピース採取（現場試験項目）",
      q: "問46：生コンクリート車が現場に到着した際、打設を開始する前に現場で採取して測定しなければならない「受入検査項目」の組み合わせとして正しいものはどれですか。",
      q_id: "Soal 46: Manakah kombinasi 4 item pengujian wajib yang HARUS diuji pada truk molen cor yang baru tiba di proyek sebelum beton boleh dituang?",
      q_ne: "प्रश्न ४६: कंक्रीटको गाडी कार्यस्थलमा आइपुग्नासाथ ढलान थाल्नुअघि फिल्डमै गरिने '४ वटा अनिवार्य जाँचहरू' कुन हुन्?",
      options: [
        { ja: "①スランプ（流動性） ／ ②空気量（4.5%等） ／ ③コンクリート温度 ／ ④塩化物含有量（カンブス試験）", id: "1. Slump (Kekentalan) / 2. Kadar Udara (Air Content ~4,5%) / 3. Suhu Cor / 4. Kadar Garam Klorida (Chloride)", ne: "१. स्लम (कडापन/तरलता) / २. हावाको मात्रा (करिब ४.५%) / ३. कंक्रीटको तापक्रम / ४. नुनको मात्रा (क्लोराइड जाँच)" },
        { ja: "味見 ／ 匂い ／ 色の濃さ ／ 泡立ち", id: "Rasa di lidah / Aroma / Warna / Busa", ne: "चाख्ने / गन्ध / रङ / फिज" },
        { ja: "トラックの走行距離 ／ 運転手の体重 ／ タイヤの溝 ／ ラジオの音量", id: "Jarak tempuh truk / Berat sopir / Ban / Musik", ne: "गाडीको किलोमिटर / ड्राइभरको तौल / पाङ्ग्रा / रेडियो" },
        { ja: "検査は一切不要で即座に型枠に流し込む", id: "Langsung cor tanpa uji laboratorium", ne: "कुनै जाँच नगरी सिधै खन्याउने" }
      ],
      answer: 0,
      expJa: "【生コン受入検査】現場到着時にスランプ、空気量（4.5±1.5%）、温度、塩化物量（0.30kg/m³以下）を測定し、合格を確認してから打設を開始します。",
      expId: "4 uji wajib beton segar: Slump, Air Content (Kadar Udara), Suhu Beton, dan Uji Garam Klorida agar struktur tidak roboh.",
      expNe: "कंक्रीट गाडी आउने बित्तिकै स्लम, हावाको मात्रा, तापक्रम र नुनको मात्रा नापेर पास भएपछि मात्र ढलान गर्न पाइन्छ।"
    },
    {
      cat: "実技：コンクリート圧送・先送り材の廃棄確認（P.160）",
      q: "問47：コンクリートポンプ車で打設をスタートする際、輸送管内を潤滑するために最初に送り出されるモルタル（先送り材）が出てきました。作業員への正しい合図・指示はどれですか。",
      q_id: "Soal 47: Adonan semen pelicin pipa cor pertama (Saki-okuri-zai) mulai menyembur keluar dari ujung selang pipa pompa. Apakah instruksi TEGAS Shokucho?",
      q_ne: "प्रश्न ४७: पम्प गाडीको पाइपबाट सुरुको चिप्लो बनाउने मसला (साकी-ओकुरी-जाई) बाहिर निस्कन थाल्यो। शोकुचोले तुरुन्त के निर्देशन दिनुपर्छ?",
      options: [
        { ja: "「先送り材を型枠の中に入れるな！受け箱（産廃容器）に全量吐き出させて現場外へ廃棄しろ！」と指示する", id: "'JANGAN MASUKKAN KE BEKISTING! Tampung seluruh adonan pelicin ke dalam bak wadah terpisah dan buang ke limbah luar!'", ne: "'फर्माभित्र पस्न नदेउ! बाहिर छुट्टै बाकसमा पूरै मसला थापेर कार्यस्थल बाहिर फालिदेउ!'" },
        { ja: "「型枠の一番深い柱の底にそのまま全部流し込め！」と指示する", id: "'Tuang semuanya ke dalam dasar bekisting kolom!'", ne: "'पिलरको फर्माभित्रै खन्याइदेउ!'" },
        { ja: "「作業員の足元にまき散らして滑りやすくしろ！」と指示する", id: "'Siramkan ke lantai jalan pekerja agar licin!'", ne: "'हिँड्ने बाटोमा छर्किदेउ!'" },
        { ja: "先送り材をすくって全員で食べるように命じる", id: "Menyuruh pekerja memakannya", ne: "सबैलाई खान लगाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.160参照】先送り材は正規のコンクリートとは配合強度が異なり骨材も入っていません。型枠内に混入すると強度不足・構造破壊の致命的欠陥になります。",
      expId: "Saki-okuri-zai BUKAN beton struktur! Jika masuk bekisting, semen pelicin ini membuat tiang retak hancur. Wajib buang ke bak penampung limbah.",
      expNe: "सुरुको चिप्लो मसलामा गिट्टी हुँदैन र यसले ढलान कमजोर बनाउँछ। त्यसैले यसलाई फर्माभित्र हाल्न नदिई छुट्टै बाकसमा थापेर फाल्नुपर्छ।"
    },
    {
      cat: "実技：外壁タイルのオープンタイム切れの目視判定（P.168）",
      q: "問48：外壁に圧着張り用モルタルを塗布して作業していたところ、直射日光と風でモルタルの表面が白っぽく乾燥して薄皮が張った状態（ドライアウト）になりました。このモルタルに対する職長の判定はどれですか。",
      q_id: "Soal 48: Mortar perekat keramik di dinding luar mengering keputihan dan berkerak tipis di permukaan akibat terpaan angin dan matahari (Dry Out). Apakah keputusan Shokucho?",
      q_ne: "प्रश्न ४८: भित्तामा टायल टाँस्ने मसला लगाएको ठाउँमा घाम र हावाले गर्दा मसलाको सतह सुकेर सेतो पत्र (ड्राई-आउट) देखियो। शोकुचोले कस्तो निर्णय लिनुपर्छ?",
      options: [
        { ja: "オープンタイムを超過して接着強度が失われているため、タイル張り作業を禁止し、乾燥したモルタルを直ちに削り落とさせて新しいモルタルを塗り直させる", id: "Daya rekat telah MATI total! Dilarang menempel keramik; kerok bersih seluruh semen kering tersebut dan oleskan adukan baru!", ne: "मसलाको टाँसिने शक्ति पूरै मरिसक्यो! टायल टाँस्न रोक लगाउने, सुकेको मसला खुर्किएर फाल्ने र नयाँ मसला दल्न लगाउने" },
        { ja: "白くて綺麗なので合格とし、そのまま上からタイルを強く押し込ませる", id: "Lolos karena warnanya putih bersih, tempel terus", ne: "राम्रो देखियो भन्दै त्यसमाथि टायल ठोक्न लगाउने" },
        { ja: "唾液（ツバ）を吐きかけて湿らせてからタイルを貼らせる", id: "Meludahi dinding agar basah lalu tempel", ne: "थुक छर्केर टाँस्न लगाउने" },
        { ja: "タイルを貼らずにモルタルのまま建物を引き渡す", id: "Biarkan dinding tanpa keramik", ne: "टायल नै नटाँसी छाडिदिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.168参照】表面に薄皮が張ったモルタルにタイルを張っても全く接着せず、数ヶ月〜数年後に数トンのタイルが一斉に剥落して通行人を直撃します。",
      expId: "Dry-out adalah racun keramik! Menempelkan keramik di atas semen yang mulai berkerak pasti berujung keramik copot menimpa orang di jalan.",
      expNe: "सुक्खा पत्र बनेको मसलामा टायल टाँसे केही समयपछि टायल उप्किएर सडकमा झर्छ र मान्छे मार्छ। त्यसैले त्यो मसला फालेर नयाँ लगाउनै पर्छ।"
    },
    {
      cat: "実技：塗装工事の膜厚測定（ウェットゲージ）",
      q: "問49：外壁や鉄骨の塗装作業の直後、塗布された塗料が指定通りの厚み（仕様書の塗布量）で均一に塗られているかをその場で検査する測定器具は何ですか。",
      q_id: "Soal 49: Alat ukur bergerigi apakah yang ditancapkan tegak lurus pada lapisan cat basah yang baru selesai dipoles untuk mengukur ketebalan cat basah (wet film thickness)?",
      q_ne: "प्रश्न ४९: रङ लगाउने बित्तिकै रङ तोकिए अनुसार बाक्लो भयो कि नाई भनी काँचो रङको मोटाइ नाप्न रङमाथि सिधा घोपेर हेरिने काँटी जस्तो यन्त्र कुन हो?",
      options: [
        { ja: "ウェットフィルム膜厚計（ウェットゲージ / くし形膜厚測定板）", id: "Wet Film Thickness Gauge (Wet Gauge / Alat Ukur Ketebalan Cat Basah Sisir)", ne: "वेट फिल्म मोटाइ मिटर (वेट गेज / काँचो रङको मोटाइ नाप्ने काँडेदार पत्ती)" },
        { ja: "定規（竹ものさし）", id: "Penggaris bambu", ne: "बाँसको रुलर" },
        { ja: "ノギス", id: "Jangka sorong kaliper", ne: "भर्नियर क्यालिपर" },
        { ja: "体重計", id: "Timbangan berat badan", ne: "तौल मेसिन" }
      ],
      answer: 0,
      expJa: "【塗装の品質管理】塗装直後に「ウェットゲージ」を垂直に押し当て、どの歯まで塗料が付着したかで未硬化時の膜厚（μm）を測定し、塗り不足や塗りすぎを是正します。",
      expId: "Wet gauge bergigi ditancapkan pada cat basah untuk memastikan ketebalan mikron cat sesuai spesifikasi arsitek sebelum kering.",
      expNe: "काँचो रङमा 'वेट गेज' पत्ती सिधा डुबाएर रङ कुन काँटासम्म लाग्यो हेरेर रङको मोटाइ ठ्याक्कै नापिन्छ।"
    },
    {
      cat: "実技：屋根・雨仕舞の「谷樋（たにどい）」の施工判断（P.166）",
      q: "問50：2つの屋根面が合流する部分（谷部）に設置される金属製の板金樋「谷樋（たにどい）」において、最も雨漏り事故が多発する理由と施工管理の着眼点はどれですか。",
      q_id: "Soal 50: Mengapa talang jurai dalam (Tanidoi) di pertemuan dua bidang atap menjadi titik paling rawan bocor, dan bagaimanakah kontrol mutu plat sengnya?",
      q_ne: "प्रश्न ५०: दुईवटा छाना जोडिने कुनाको भित्री नाली (तानिदोइ) बाट सबैभन्दा धेरै पानी चुहिने कारण के हो र त्यहाँ जस्ताको पाता लगाउँदा केमा ध्यान दिनुपर्छ?",
      options: [
        { ja: "屋根全体の雨水や雪が集中的に集まる最重要箇所であるため、幅と深さが十分なステンレス等の高耐久板金を加工し、十分な重なり幅とシーリングで雨仕舞を施工する", id: "Karena area talang jurai menampung volume debit air dan salju terbanyak dari seluruh atap; wajib pakai plat stainless tebal anti-karat dengan overlap lebar dan seal sempurna", ne: "दुवै छानाको पूरै पानी र हिउँ यहीँ थुप्रिने भएकाले, खिया नलाग्ने स्टेनलेस पातालाई गहिरो र फराकिलो बनाएर खप्ट्याई बलियो वाटरप्रुफिङ गर्नुपर्छ" },
        { ja: "水が集まる場所なので、板金に穴をたくさん開けて水が下に落ちるようにする", id: "Melubangi plat talang agar air menetes ke loteng", ne: "पानी सजिलै झरोस् भनेर जस्तापातामा धेरै प्वाल पार्ने" },
        { ja: "谷樋は目立たない場所なので段ボールを敷いておく", id: "Hanya menaruh kardus bekas karena tidak kelihatan dari bawah", ne: "नदेखिने ठाउँ भएकाले कागजको कार्टुन ओछ्याउने" },
        { ja: "雨水が溜まるように谷樋を逆勾配（水が流れない傾き）にしておく", id: "Membuat kemiringan terbalik agar air tergenang", ne: "पानी नजमोस् भनी उल्टो भिरालो बनाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.166参照】谷樋は屋根で最も雨水負荷が集中する弱点です。落ち葉詰まりやゴミによるオーバーフロー、板金の電食サビを防ぐ高規格施工を行います。",
      expId: "Tanidoi adalah muara air hujan atap. Kesalahan overlap 1 cm saja di jurai dalam ini akan membanjiri plafon rumah.",
      expNe: "छानाको सबैभन्दा धेरै पानी बग्ने ठाउँ नै 'तानिदोइ' हो। यहाँको पातामा अलिकति पनि गल्ती भए घरभित्र बाढी पस्छ।"
    },
    {
      cat: "実技：サッシ周囲のバックアップ材装てん（P.172）",
      q: "問51：外壁とアルミサッシ枠の間の目地にシーリング材を充填する前、シーリング材が目地底に接着して破断するのを防ぐために底に詰める材料は何ですか。",
      q_id: "Soal 51: Batang busa spons apakah yang dimasukkan ke dasar celah nat kusen jendela sebelum dilem silikon untuk mencegah lem menempel ke dasar (menjamin ikatan 2 sisi)?",
      q_ne: "प्रश्न ५१: झ्यालको फ्रेम र भित्ताको जोर्नीमा सिलिकन गम भर्नुअघि, गम भित्री भागमा टाँसिएर च्यातिन नदिन जोर्नीको पिँधमा कोचािने फोमको डोरी कुन हो?",
      options: [
        { ja: "バックアップ材（発泡ポリエチレン製丸棒・角棒 / 3面接着防止材）", id: "Backup Material (Busa Spons Polyethylene Bulat/Kotak pencegah ikatan 3 sisi)", ne: "ब्याकअप सामग्री (फोमको स्पन्ज डोरी / ३-तर्फी टाँसिने समस्या रोक्ने डोरी)" },
        { ja: "生コンクリートの塊", id: "Gumpalan batu beton", ne: "ढुङ्गाको टुक्रा" },
        { ja: "ティッシュペーパーを水で濡らしたもの", id: "Tisu basah kertas", ne: "भिजेको टिस्यु पेपर" },
        { ja: "スチールウール（金属たわし）", id: "Serabut kawat cuci piring", ne: "भाँडा माझ्ने तारको जाली" }
      ],
      answer: 0,
      expJa: "【テキスト P.172参照】目地底にシーリング材がくっつく「3面接着」になると目地の伸縮でシーリングが裂けます。バックアップ材（またはボンドブレーカー）で「2面接着」にします。",
      expId: "Backup material menjamin lem sealant hanya menempel di sisi kiri dan kanan (ikatan 2 sisi), sehingga karet sealant bisa melar bebas saat gempa tanpa sobek.",
      expNe: "सिलिकन गम दायाँ-बायाँ दुईतिर मात्र टाँसिनुपर्छ। पिँधमा टाँसिए गम च्यातिने भएकाले मुनि 'ब्याकअप फोम' कोचिन्छ।"
    },
    {
      cat: "実技：吹付けウレタンの原液ドラム缶の安全保管（P.174）",
      q: "問52：現場に搬入された硬質ウレタンフォームの原液（A液・B液のドラム缶）を保管する際、容器の破裂や変質・火災事故を防ぐ正しい保管状態はどれですか。",
      q_id: "Soal 52: Bagaimanakah standar penyimpanan drum cairan insulasi polyurethane foam (Drum A & Drum B) yang BENAR di proyek?",
      q_ne: "प्रश्न ५२: स्प्रे फोम इन्सुलेसनका केमिकल ड्रमहरू कार्यस्थलमा राख्दा ड्रम पड्किन वा आगो लाग्नबाट जोगाउने सही तरिका कुन हो?",
      options: [
        { ja: "水分の混入と直射日光を厳禁とし、密栓した状態で常温（20℃前後）の通風の良い屋内に保管し、周囲に消火器を配備する", id: "Wadah tertutup rapat di suhu kamar ~20°C yang berventilasi, DILARANG KENA AIR & MATAHARI LANGSUNG, serta sediakan tabung APAR", ne: "पानी पर्न र घाम लाग्नबाट पूर्ण जोगाउने, बिर्को कसेर करिब २० डिग्रीको हावा चल्ने कोठामा राख्ने र छेउमा आगो निभाउने सिलिन्डर राख्ने" },
        { ja: "ドラム缶の口を開け放したまま、雨水が直接注ぎ込む屋外に放置する", id: "Membiarkan drum terbuka terkena guyuran air hujan", ne: "ड्रमको बिर्को खोलेर पानी पर्ने ठाउँमा बाहिर छाडिदिने" },
        { ja: "ドラム缶を溶接作業の火花が直接降り注ぐ真下に置く", id: "Menaruh drum tepat di bawah semburan percikan api las", ne: "वेल्डिङको झिल्का खस्ने ठाउँको मुनि ड्रम राख्ने" },
        { ja: "ドラム缶の温度を80℃以上に温めるため直火であぶる", id: "Memanaskan drum dengan semburan api langsung sampai 80°C", ne: "ड्रमलाई आगो बालेर ८० डिग्रीसम्म तताउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.174参照】ウレタン原料のイソシアネートは水と激しく反応して炭酸ガスを発生しドラム缶が爆発します。密栓・水分遮断・20℃保管・火気厳禁が鉄則です。",
      expId: "Zat kimia urethane bereaksi keras meledak jika kemasukan tetesan air hujan! Simpan tertutup rapat di suhu 20°C jauh dari api las.",
      expNe: "यो केमिकलमा पानी पर्नासाथ ग्यास बनेर ड्रम बम जस्तै पड्किन्छ। त्यसैले पानी र आगोबाट टाढा २० डिग्रीमा राख्नुपर्छ।"
    },
    {
      cat: "実技：シート防水のディスクヒーター接合（P.175）",
      q: "問53：塩ビシート防水の「機械的固定工法」において、下地に固定されたディスク盤と塩ビシートを裏側から熱溶着させる専用工具は何ですか。",
      q_id: "Soal 53: Alat pemanas induksi elektromagnetik apakah yang ditempelkan dari atas lembaran membran PVC untuk melekatkan membran ke piringan disk bawah tanpa membakar?",
      q_ne: "प्रश्न ५३: प्लास्टिकको वाटरप्रुफिङ सिट टाँस्दा, मुनिको चक्का (डिस्क) लाई माथिबाटै मेसिनले तताएर पातासँग टाँसिदिने विशेष इन्डक्सन यन्त्र कुन हो?",
      options: [
        { ja: "誘導加熱装置（電磁誘導ディスクヒーター / IH接合機）", id: "Induction Heating Device (Mesin Pemanas Induksi Disk PVC / IH Welder)", ne: "इन्डक्सन तताउने यन्त्र (डिस्क हिटर / IH मेसिन)" },
        { ja: "木炭を入れたアイロン", id: "Setrika arang kuno", ne: "कोइला हाल्ने इस्त्री" },
        { ja: "電子レンジ", id: "Microwave dapur", ne: "माइक्रोवेभ ओभन" },
        { ja: "ガスバーナーの直火", id: "Semburan api gas elpiji langsung", ne: "ग्यासको नाङ्गो आगो" }
      ],
      answer: 0,
      expJa: "【テキスト P.175参照】電磁誘導加熱装置をシートの上から当てることで、下にある金属ディスクだけを非接触で瞬間発熱させ、シート裏面とディスクを完全融着させます。",
      expId: "Induction disk heater memanaskan pelat disk di bawah lembaran secara magnetik tanpa melubangi membran PVC, mengunci atap tahan badai taifun.",
      expNe: "यो मेसिनले माथिबाटै म्याग्नेटिक शक्तिले मुनिको फलामे चक्का तताएर प्लास्टिकको सिटलाई नडढाई बलियोसँग टाँसिदिन्छ।"
    },
    {
      cat: "実技：高所開口部手すりの「中さん」の役割（P.181）",
      q: "問54：足場や床開口部に設置する高さ85cm以上の手すりにおいて、手すりの下を人がすり抜けて墜落するのを防ぐため、手すりと床面の中間に水平に設ける部材は何ですか。",
      q_id: "Soal 54: Palang pengaman horizontal apakah yang wajib dipasang di tengah-tengah antara reling atas dan lantai kerja agar badan pekerja tidak lolos merosot jatuh?",
      q_ne: "प्रश्न ५४: ८५ सेमी अग्लो रेलिङ र भुइँको बीचबाट मान्छे चिप्लिएर तल नखसोस् भन्नाका लागि बीच भागमा तेर्सो बाँधिने सुरक्षा बारलाई के भनिन्छ?",
      options: [
        { ja: "中さん（なかさん / 中間手すり・高さ35〜50cmに設置）", id: "Nakasan (Reling Tengah Pengaman / Mid-rail)", ne: "नाका-सान (बीचको सुरक्षा रेलिङ / मध्य बार)" },
        { ja: "上さん", id: "Reling Atas", ne: "माथिल्लो बार" },
        { ja: "ジャッキベース", id: "Jack Base", ne: "ज्याक बेस" },
        { ja: "壁つなぎ", id: "Kabe-tsunagi", ne: "काबे-चुनागी" }
      ],
      answer: 0,
      expJa: "【テキスト P.181参照】手すり（高さ85cm以上）だけだと、作業員がつまずいて倒れたときに下をすり抜けて墜落します[cite: 11]。「中さん（高さ35〜50cm）」の設置が法令で義務です[cite: 11]。",
      expId: "Nakasan (mid-rail) menutup celah kosong di bawah reling utama agar tubuh pekerja yang terpeleset tidak lolos menggelinding ke jurang.",
      expNe: "माथिल्लो रेलिङ मात्र भए मान्छे मुनिबाट चिप्लिएर खस्छ। त्यसैले बीचमा ३५-५० सेमीको उचाइमा 'नाका-सान' बार अनिवार्य लगाइन्छ।"
    },
    {
      cat: "実技：ディスクグラインダーの「試運転」の法令義務",
      q: "問55：ディスクグラインダーに新しい研削といしを取り付けた直後、安全確認のために行わなければならない試運転の時間基準はどれですか。",
      q_id: "Soal 55: Berapakah durasi uji putar tanpa beban (trial run) yang WAJIB dijalankan saat baru mengganti batu gerinda baru menurut undang-undang K3?",
      q_ne: "प्रश्न ५५: ग्राइन्ダーमा नयाँ ढुङ्गा फेरेपछि, ढुङ्गा नफुटी सुरक्षित छ भनी पक्का गर्न खाली मेसिन चलाएर परीक्षण (टेस्ट) गर्नुपर्ने कानुनी समय कति हो?",
      options: [
        { ja: "といし交換時は「3分間以上」、毎日の作業開始前は「1分間以上」の試運転を行う", id: "Saat ganti batu baru: minimal '3 menit ke atas'; saat cek harian sebelum kerja: minimal '1 menit ke atas'", ne: "नयाँ ढुङ्गा फेर्दा: कम्तीमा '३ मिनेट वा सोभन्दा बढी'; र दैनिक काम सुरु गर्दा: कम्तीमा '१ मिनेट' खाली घुमाएर टेस्ट गर्ने" },
        { ja: "試運転は0.1秒でスイッチを切る", id: "Cukup 0,1 detik", ne: "०.१ सेकेन्ड मात्र चलाउने" },
        { ja: "試運転は危険なので一切回してはならない", id: "Dilarang uji putar", ne: "टेष्ट नै गर्न नहुने" },
        { ja: "12時間ぶっ通しで回し続ける", id: "Diputar non-stop 12 jam", ne: "१२ घण्टा लगातार चलाउने" }
      ],
      answer: 0,
      expJa: "【安衛則第119条】といしの初期不良やクラックは回転開始直後に破裂します。新品交換時は「3分以上」、当日の作業開始前は「1分以上」、人を避けて試運転します。",
      expId: "Batu gerinda cacat biasanya meledak di putaran awal. Wajib tes putar 3 menit saat ganti baru dan 1 menit tiap pagi sebelum dipakai motong.",
      expNe: "चर्किएको ढुङ्गा सुरुमै पड्किन्छ। त्यसैले नयाँ ढुङ्गा हाल्दा ३ मिनेट र दैनिक बिहान १ मिनेट सुरक्षित ठाउँमा फर्काएर खाली टेस्ट गर्नैपर्छ।"
    },
    {
      cat: "実技：熱中症と「体感温度」を下げる現場ファン配置",
      q: "問56：風通しの悪い屋内現場において、大型扇風機（工場扇）を設置する際、作業員の熱中症を最も効率的に防ぐファンの配置・風向はどれですか。",
      q_id: "Soal 56: Bagaimanakah penempatan blower kipas angin industri yang PALING EFEKTIF untuk mendinginkan pekerja di dalam ruangan proyek yang pengap?",
      q_ne: "प्रश्न ५६: हावा नचल्ने बन्द कोठाभित्र ठूलो पंखा (फ्याक्ट्री फ्यान) राख्दा कामदारलाई हिटस्ट्रोक हुन नदिन पंखा कुन दिशा फर्काएर राख्नु सबैभन्दा राम्रो हुन्छ?",
      options: [
        { ja: "外の新鮮な空気を取り入れられる開口部（窓やドア）を背にして設置し、作業員の身体に気流が循環しつつ熱気と粉じんを外部へ押し出す風の流れを作る", id: "Taruh kipas membelakangi jendela/pintu luar untuk meniupkan udara segar ke tubuh pekerja sekaligus mendorong hawa panas keluar", ne: "झ्याल वा ढोकाबाट आउने बाहिरको ताजा हावा तानेर कामदारको शरीरमा पार्ने र भित्रको तातो हावालाई बाहिर धकेल्ने गरी हावाको बहाव बनाउने" },
        { ja: "部屋を密閉して壁に向かって風を吹き当てる", id: "Meniupkan angin ke tembok kosong di ruangan tertutup", ne: "झ्याल-ढोका बन्द गरेर भित्तातर्फ मात्र पंखा फर्काउने" },
        { ja: "作業員の顔から5cmの至近距離で強風を当てて目を乾燥させる", id: "Meniup tepat ke mata dari jarak 5 cm", ne: "मुखको ५ सेमी नजिकै राखेर आँखा सुकाउने" },
        { ja: "天井に向けて誰もいない空間に風を送る", id: "Meniup ke atap kosong yang tidak ada orang", ne: "मान्छे नभएको सिलिङतिर मात्र हावा पठाउने" }
      ],
      answer: 0,
      expJa: "【気流による冷却】体表面に秒速1mの気流が当たるだけで体感温度は約1℃下がります。外気の給気ルート上にファンを配置し、空気のよどみを無くします。",
      expId: "Pasang kipas menghisap udara segar dari luar dan mengarahkannya ke pekerja. Ini membuang hawa panas dan menurunkan suhu tubuh riil.",
      expNe: "ताजा हावा आउने ठाउँमा पंखा राखेर कामदारतर्फ हावा पठाउँदा शरिरको पसिना सुकेर शीतलता मिल्छ र हिटस्ट्रोक हुन पाउँदैन।"
    },
    {
      cat: "実技：脚立の「開き止め金具」の変形点検",
      q: "問57：作業前点検で脚立を確認したところ、中央の開き止め金具が外側にぐにゃりと曲がっており、完全にまっすぐ伸びない状態でした。職長の正しい判定はどれですか。",
      q_id: "Soal 57: Saat cek alat pagi, terlihat engsel pengunci (hirakidome) tangga lipat bengkok rusak dan tidak bisa mengunci lurus sempurna. Apakah keputusan Shokucho?",
      q_ne: "प्रश्न ५७: बिहान भर्याङ (क्याताचु) जाँच्दा, बीचको लक दोब्रिएर बिग्रिएको र सिधा भएर लक नहुने अवस्थामा पाइयो। शोकुचोले कस्तो सही निर्णय लिनुपर्छ?",
      options: [
        { ja: "荷重がかかると一瞬で外れて脚立が倒壊し墜落するため、直ちに「使用禁止（廃棄・修理）」の赤札を貼り、現場から撤去させる", id: "DILARANG PAKAI! Tempel label 'RUSAK - JANGAN PAKAI' dan singkirkan dari lokasi karena tangga bengkok akan roboh saat diinjak", ne: "तुरुन्त 'प्रयोग गर्न निषेध (काम नलाग्ने)' लेखेर रातो स्टिकर टाँस्ने र फिल्डबाट हटाउने, नत्र टेक्नसाथ खुट्टा चिप्लिएर लड्छ" },
        { ja: "曲がっている方を下にして地面に置けば使えると判断する", id: "Boleh dipakai asal posisi bengkok ditaruh di bawah", ne: "बिग्रिएको भाग मुनि पारेर चलाउन दिने" },
        { ja: "ガムテープを上からぐるぐる巻きにしてそのまま使わせる", id: "Hanya dililit lakban dan lanjut dipakai", ne: "टेपले बेरेर चलाउन लगाउने" },
        { ja: "作業員に「ゆっくり登れば大丈夫だ」と言って作業させる", id: "Menyuruh pekerja naik pelan-pelan", ne: "बिस्तारै चढे केही हुन्न भन्दै काममा लगाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.184参照】開き止め金具の変形や破損は転倒事故の直接原因です[cite: 14]。不完全な安全装置の工具は即座に使用禁止処分にし現場から隔離します。",
      expId: "Tangga dengan engsel pengunci bengkok adalah jebakan maut! Tempel tanda afkir dan buang ke tempat rongsok.",
      expNe: "लक बिग्रिएको क्याताचु चलाउनु सिधै दुर्घटना निम्त्याउनु हो। यसलाई तुरुन्तै रातो ट्याग लगाएर कार्यस्थलबाट हटाउनै पर्छ।"
    },
    {
      cat: "実技：玉掛け用具・ワイヤーのキンク（折れ曲がり癖）",
      q: "問58：クレーンの玉掛けワイヤーロープに、過去の無理な引っ張りによってできた鋭利な折れ曲がり癖（キンク）が残っていました。職長としての判定はどれですか。",
      q_id: "Soal 58: Kawat seling crane memiliki bekas tekukan patah mati (kinking) yang parah. Apakah keputusan inspeksi yang WAJIB diambil Shokucho?",
      q_ne: "प्रश्न ५८: क्रेनको स्लिङ तारमा पहिले तन्किँदा परेको कडा गाँठो वा दोब्रिएको दाग (किङ्क) देखियो। शोकुचोले के निर्णय गर्नुपर्छ?",
      options: [
        { ja: "キンクした部分は内部素線が著しく破断・疲労しており、荷を吊った瞬間に破断して荷が落下するため、直ちに「廃棄処分（切断廃棄）」とする", id: "WAJIB DIAFKIR POTONG BUANG! Bagian kinking telah kehilangan 80% kekuatannya dan akan putus mendadak saat mengangkat barang", ne: "तुरुन्त 'काटेर फाल्ने (नष्ट गर्ने)'! गाँठो परेको ठाउँको भित्री तारहरू मरिसकेका हुन्छन् र सामान उचाल्नासाथ चुँडिएर सामान खस्छ" },
        { ja: "ハンマーで叩いて平らに戻してそのまま使う", id: "Dipukul palu agar lurus kembali lalu dipakai", ne: "हम्बरले हिर्काएर सोझ्याई फेरि प्रयोग गर्ने" },
        { ja: "キンクした部分にペンキを塗って目立たなくして使う", id: "Dicat agar bekas tekukan tidak kelihatan", ne: "रङ दलेर दाग लुकाई चलाउने" },
        { ja: "軽い荷物専用のワイヤーとして使い続ける", id: "Dipakai khusus untuk barang ringan saja", ne: "हलुका सामान उचाल्न चलाइरहने" }
      ],
      answer: 0,
      expJa: "【クレーン則第219条】キンク（kink）が生じたワイヤーロープは法令で使用が禁止されています。叩いて直しても強度は戻らず破断事故を引き起こします。",
      expId: "Kawat kinking pantang dipakai lagi! Menghantamnya dengan palu tidak akan memulihkan kekuatan serat baja yang sudah patah di dalam.",
      expNe: "गाँठो परेको (किङ्क भएको) स्लिङ तार प्रयोग गर्न कानुनले कडा निषेध गरेको छ। यसलाई हम्बरले पिटेर सोझ्याए पनि भार पर्दा तुरुन्त चुँडिन्छ।"
    },
    {
      cat: "実技：熱中症と「体温冷却の終了タイミング」",
      q: "問59：熱中症で高熱を出して倒れた作業員に氷嚢を当てて冷却処置を行っています。体を冷やすのを緩める（または中止する）目安となる「目標体温」はどれですか。",
      q_id: "Soal 59: Berapakah batas suhu tubuh yang menjadi patokan untuk menghentikan kompres es intensif agar korban tidak kedinginan berlebih (hipotermia)?",
      q_ne: "प्रश्न ५९: हिटस्ट्रोक भएर शरीर तातेको बिरामीलाई बरफले चिस्याउँदा, धेरै चिसो भएर काम्न नदिन बरफ हटाउने 'लक्ष्य तापक्रम' कति डिग्री हो?",
      options: [
        { ja: "体温が「38℃前後」まで下がり、全身の震え（シバリング）が始まったら過度の冷却を中止し、乾いた毛布等で保温に切り替える", id: "Hentikan kompres intensif saat suhu tubuh sudah turun ke sekitar 38°C (atau korban mulai menggigil gemetar), lalu jaga kehangatan normal", ne: "शरीरको तापक्रम घटेर 'करिब ३८ डिग्री' मा झरेपछि र बिरामी काम्न थालेपछि धेरै चिस्याउन बन्द गर्ने, र सुक्खा कपडाले न्यानो बनाउने" },
        { ja: "体温が0℃まで下がるまで氷漬けにし続ける", id: "Didinginkan terus sampai suhu 0°C membeku", ne: "तापक्रम ० डिग्री नपुगुन्जेल बरफमै राखिरहने" },
        { ja: "1秒だけ氷を当てたらすぐに熱湯風呂に入れる", id: "Cuma 1 detik lalu masukkan ke bak air mendidih", ne: "१ सेकेन्ड मात्र बरफ लगाएर तातो पानीमा हाल्ने" },
        { ja: "体温は測らずに作業員が泣き叫ぶまで冷やす", id: "Didinginkan sampai menangis kencang", ne: "तापक्रम ननापी रुन्जेल चिस्याइरहने" }
      ],
      answer: 0,
      expJa: "【救急冷却の目標】過度の冷却は逆に低体温症（シバリングによる熱産生）を引き起こします。深部体温「38℃」を目安に積極冷却を終了し、救急隊へ引き継ぎます。",
      expId: "Target pendinginan darurat adalah suhu badan ~38°C. Jika pasien mulai menggigil kedinginan hebat, hentikan kompres es.",
      expNe: "शरीरको तातोपन ३८ डिग्रीमा झरेपछि बरफ हटाउनुपर्छ, नत्र बिरामी धेरै चिसो भएर काम्न थाल्छ।"
    },
    {
      cat: "実技：丸のこの「ベースプレート（定盤）の歪み」点検",
      q: "問60：携帯用電気丸のこのベースプレート（底面の金属板）が落下等で歪んでガタついている状態で木材を切断しようとした場合、発生する最も危険な事故は何ですか。",
      q_id: "Soal 60: Bahaya fatal apakah yang timbul jika menggunakan gergaji bundar yang pelat dasar bawahnya (base plate) penyok melengkung akibat pernah jatuh?",
      q_ne: "प्रश्न ६०: गोलो आराको मुनिको फलामे प्लेट (बेस प्लेट) भुइँमा बजारिएर बाङ्गो भएको अवस्थामा काठ काट्न खोजे कस्तो भयानक दुर्घटना हुन्छ?",
      options: [
        { ja: "鋸刃が木材に対して直角に入らず斜めにねじれ、切断途中で激しいキックバック（刃の跳ね返り）が発生して作業員の身体を直撃する", id: "Mata pisau masuk miring bengkok ke alur kayu, memicu loncatan KICKBACK dahsyat yang menghantam dada/perut operator", ne: "ब्लेड काठभित्र सिधा नछिरी बाङ्गो भएर च्यापिन्छ, जसले गर्दा भयानक 'किकब्याक' भएर मेसिन उछिट्टिई कामदारको छाती वा पेट चिर्छ" },
        { ja: "木材が自動的に直角に切れるようになる", id: "Kayu terpotong siku otomatis", ne: "काठ आफैं सिधा काटिने" },
        { ja: "丸のこのモーターから音楽が流れてくる", id: "Mesin mengeluarkan alunan musik", ne: "मेसिनबाट गीत बज्ने" },
        { ja: "木材が金色に光り輝く", id: "Kayu berubah berkilau", ne: "काठ चम्किलो हुने" }
      ],
      answer: 0,
      expJa: "【テキスト P.129参照】ベースの狂いは鋸刃の「ねじれ切り」を引き起こし、ほぼ100%の確率でキックバックを誘発します。ガタつきのある丸のこは使用禁止です。",
      expId: "Base plate yang penyok membuat pisau berputar miring di dalam alur kayu, memicu sentakan kickback yang tak bisa ditahan tangan manusia.",
      expNe: "मुनिको बेस प्लेट बाङ्गो भए ब्लेड काठभित्र अड्किन्छ र किकब्याक भएर मेसिनले मान्छेलाई काट्छ। त्यसैले यस्तो मेसिन चलाउनै हुन्न।"
    },
    {
      cat: "実技：高所作業でのフルハーネスの「腿ベルト」の緩み",
      q: "問61：作業員のフルハーネス装着状態を確認したところ、動きにくいからと「腿（もも）ベルト」を極端にゆるゆるにしていました。この状態で墜落した場合に起こる致命的な人身被害は何ですか。",
      q_id: "Soal 61: Pekerja mengendorkan sabuk paha (thigh strap) full harness karena merasa risih berjalan. Cedera fatal apakah yang terjadi jika dia jatuh tergelantung?",
      q_ne: "प्रश्न ६१: हिँड्न अप्ठ्यारो भयो भन्दै कामदारले सेफ्टी हार्नेसको तिघ्राको फित्ता एकदमै खुकुलो पारेर लगाएको छ। यो अवस्थामा मान्छे माथिबाट खसेमा कस्तो भयानक चोट लाग्छ?",
      options: [
        { ja: "落下阻止時の衝撃で胸ベルトが首元まで一気にずり上がり、首が絞まって窒息死するか、股関節や骨盤を強打して大動脈破裂・失神を起こす", id: "Hentakan jatuh akan menyentak sabuk dada mencekik leher hingga mati lemas, atau sabuk paha menghantam pangkal paha meremukkan arteri tulang panggul", ne: "खस्दा लाग्ने ठूलो झट्काले छातीको फित्ता घाँटीसम्म सरेर सास थुनिएर मृत्यु हुन्छ, वा तिघ्राको फित्ताले जोर्नीमा बेस्सरी हानेर रगतको मुख्य नसा फुटाई मान्छे मर्छ" },
        { ja: "クッションのように柔らかく着地できる", id: "Mendarat lembut seperti kasur busa", ne: "डस्ना माथि परे झैं आरामले बस्ने" },
        { ja: "足が長くなってスタイルが良くなる", id: "Kaki menjadi lebih jenjang", ne: "खुट्टा लामो हुने" },
        { ja: "身体のどこにも全く衝撃がかからない", id: "Tidak ada beban sentakan sama sekali", ne: "शरीरमा कुनै झट्का नलाग्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.189参照】腿ベルトの緩みは死亡事故の隠れた主因です[cite: 19]。落下時にハーネスがすり抜けるか、ずり上がって頸部を圧迫窒息死させます。指1本が入る隙間で密着装着させます。",
      expId: "Tali paha yang kendor akan menyentak selangkangan dan leher saat menahan orang jatuh, memicu patah tulang panggul dan mati tercekik.",
      expNe: "तिघ्राको फित्ता खुकुलो भए खस्ने बित्तिकै हार्नेस घाँटीमा पुगेर मान्छेको सास थुनिन्छ र मर्छ। त्यसैले फित्ता सधैं टपक्क बाँध्नुपर्छ।"
    },
    {
      cat: "実技：熱中症と「現場の製氷機・水筒管理」",
      q: "問62：夏季現場で職長が作業員の熱中症を防ぐため、休憩所の製氷機と各自の水筒に関して毎朝徹底すべき衛生管理ルールはどれですか。",
      q_id: "Soal 62: Manajemen K3 apakah yang wajib diperiksa Shokucho setiap pagi terkait mesin pembuat es (seihyouki) dan botol air minum pekerja di barak?",
      q_ne: "प्रश्न ६२: गर्मीमा कामदारलाई स्वस्थ राख्न आराम कोठाको बरफ मेसिन र पानीको बोतल सम्बन्धमा शोकुचोले हरेक बिहान गर्नुपर्ने व्यवस्था के हो?",
      options: [
        { ja: "製氷機の氷を水筒や氷嚢にたっぷり満たして作業場所に携行させ、現場の給水タンクの残量を常に確認して氷と冷水を切らさないように補給する", id: "Pastikan termos pekerja terisi penuh es batu dan air elektrolit, serta pantau galon air di titik kerja agar stok air dingin tidak pernah habis", ne: "कामदारको बोतल र आइस ब्यागमा प्रशस्त बरफ र चिसो पानी भराएर फिल्डमा पठाउने, र कार्यस्थलको पानी ट्याङ्कीमा पानी र बरफ कहिल्यै नसकिने गरी भर्िरहने" },
        { ja: "製氷機の氷をすべて捨てて、熱湯だけを水筒に入れさせる", id: "Membuang es dan hanya memberi air panas mendidih", ne: "बरफ फालिदिने र तातो पानी मात्र बोकाउने" },
        { ja: "水筒を持っていくと荷物が重くなるので現場への持ち込みを禁止する", id: "Melarang membawa botol minum agar tidak berat", ne: "गह्रौं हुन्छ भन्दै पानीको बोतल बोक्न नदिने" },
        { ja: "1週間にコップ1杯の水だけを全員で分け合って飲む", id: "Berbagi satu gelas air untuk seminggu", ne: "हप्तामा एक गिलास पानी सबैले बाँडेर पिउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.191参照】「手元に冷たい水と氷がある」環境の維持が命を守ります[cite: 21]。水分補給所まで遠いと作業員が我慢してしまい熱中症で倒れます[cite: 21]。",
      expId: "Sediakan es dan air dingin sedekat mungkin dengan titik kerja. Jika pekerja harus jalan jauh 10 menit hanya untuk minum, mereka akan malas dan akhirnya pingsan.",
      expNe: "काम गर्ने ठाउँमै चिसो पानी र बरफ नराखे कामदार पानी लिन टाढा जान अल्छी गर्छन् र ढल्छन्। त्यसैले कार्यस्थलमै पानीको व्यवस्था हुनुपर्छ।"
    },
    {
      cat: "実技：足場組立時の「親綱（安全帯取付設備）」の先行設置",
      q: "問63：くさび緊結式足場の最上層を組み立てる際、作業床がまだない危険な箇所で作業員がフルハーネスのフックを掛けるために行う手順はどれですか。",
      q_id: "Soal 63: Bagaimanakah cara pengamanan cantolan hook harness bagi tukang yang sedang merakit lantai teratas perancah yang belum ada lantainya?",
      q_ne: "प्रश्न ६३: खटको सबैभन्दा माथिल्लो तलामा नयाँ फलेक हाल्नुअघि भुइँ नै नभएको ठाउँमा कामदारले सेफ्टी हार्नेसको हुक कहाँ अड्काएर काम गर्नुपर्छ?",
      options: [
        { ja: "1層下の堅固な手すり枠や親綱支柱に親綱（ロープ）を張り、下層から確実にフックを掛けて安全を確保しながら部材を取り付ける", id: "Pasang tali induk (oyazuna) pada tiang perancah satu lantai di bawahnya yang kokoh, lalu cantolkan hook sebelum memanjat memasang tiang baru", ne: "एक तला मुनिको बलियो रेलिङ वा खम्बामा मुख्य सुरक्षा डोरी (ओया-जुना) टाँग्ने, र मुनिबाटै हुक अड्काएर सुरक्षित भएपछि मात्र माथिल्लो सामान जोड्ने" },
        { ja: "フックは掛けずに、鳥のように両手を広げてバランスを取って作業する", id: "Membuka kedua tangan seperti burung tanpa mencantolkan hook", ne: "हुक नअड्काई चरा जस्तै हात फैलाएर सन्तुलन मिलाउने" },
        { ja: "落ちそうになったら近くの作業員の服を掴んで道連れにする", id: "Menarik baju rekan jika mau jatuh", ne: "लड्न लाग्दा साथीको कपडा समात्ने" },
        { ja: "目隠しをして恐怖心を無くして作業する", id: "Menutup mata agar tidak takut tinggi", ne: "आँखा चिम्लेर काम गर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.189参照】足場組立作業時の墜落死は「無胴綱（フック未装着）」の瞬間に多発します[cite: 19]。親綱支柱や親綱を先行設置し、100%フック掛けを徹底します[cite: 19]。",
      expId: "Tukang perancah wajib memasang tali oyazuna terlebih dahulu dari bawah. Dilarang berdiri di atas pipa tanpa kaitan hook harness!",
      expNe: "खट बनाउँदा हुक नअड्काएको एकै सेकेन्डमा मान्छे खसेर मर्छ। त्यसैले मुनिबाटै सुरक्षा डोरी टाँगेर हुक अड्काएर मात्र माथि चढ्नुपर्छ।"
    },
    {
      cat: "実技：スレート屋根工事の親綱設置（P.181）",
      q: "問64：傾斜のあるスレート屋根の上で改修工事を行う際、作業員の転落および踏み抜き墜落を防ぐために屋根全体に施す命綱設備は何ですか。",
      q_id: "Soal 64: Sistem pengaman tali apakah yang WAJIB dibentangkan di sepanjang bubungan atap seng/asbes agar pekerja bisa mencantolkan harness?",
      q_ne: "प्रश्न ६४: भिरालो स्लेट छानामा काम गर्दा लड्न र छाना फुटेर खस्न नदिन छानाको धुरीभरि टाँगिने मुख्य सुरक्षा डोरी प्रणाली कुन हो?",
      options: [
        { ja: "屋根の棟（頂上）に強固な親綱支柱を堅結し、親綱（本線ワイヤーロープ）をピンと張り渡し、ロリップ等の安全器を介してフルハーネスを連結する", id: "Pasang tiang angkur kokoh di bubungan puncak atap, bentangkan kawat tali induk (oyazuna) kencang, dan hubungkan harness memakai alat pengunci otomatis (lorip)", ne: "छानाको धुरी (टुप्पो) मा बलियो खम्बा कस्ने, मुख्य फलामे डोरी (ओया-जुना) कसिलो गरी टाँग्ने र लरिप (लक हुने मेसिन) मार्फत सेफ्टी हार्नेस जोड्ने" },
        { ja: "屋根の上に石鹸水をまいて滑りやすくしておく", id: "Menyiram air sabun di atap agar licin", ne: "छानामा साबुन पानी छर्किदिने" },
        { ja: "雨樋（あまどい）のプラスチックパイプに全員の命綱を結びつける", id: "Mengikat tali pengaman ke pipa talang air plastik", ne: "प्लास्टिकको पानी पाइपमा सबैको डोरी बाँध्ने" },
        { ja: "親綱は張らず、屋根の斜面を滑り台のように滑って降りる", id: "Meluncur bebas seperti perosotan anak-anak", ne: "डोरी नबाँधी चिप्लेटी खेलेर झर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.181参照】屋根上では親綱と墜落制止用器具の併用が絶対条件です[cite: 11]。棟に親綱を展張し、スライディング金具（ロリップ）を通して常時接続します。",
      expId: "Tali oyazuna wajib dibentangkan di puncak atap menggunakan tiang angkur baja. Hubungkan lanyard harness dengan klem lorip penahan jatuh.",
      expNe: "छानाको टुप्पोमा बलियो डोरी टाँगेर लरिप मेसिनबाट सेफ्टी बेल्ट नजोडी छानामा काम गर्नै पाइँदैन।"
    },
    {
      cat: "実技：救急要請時の「現場住所と誘導員配置」",
      q: "問65：重症熱中症や墜落等で119番（救急車）を通報した直後、救急車が現場に迷わず最速で到着できるように職長が現場で手配すべき行動はどれですか。",
      q_id: "Soal 65: Setelah menelepon 119 Ambulans, tindakan apakah yang WAJIB segera diperintahkan Shokucho di gerbang proyek agar tim medis tidak tersesat?",
      q_ne: "प्रश्न ६५: ११९ मा एम्बुलेन्स बोलाउनासाथ, डाक्टरको गाडी नअलमलिई सिधै घाइते भएको ठाउँमा छिट्टै आइपुगोस् भन्नाका लागि शोकुचोले गेटमा के व्यवस्था मिलाउनुपर्छ?",
      options: [
        { ja: "現場の進入ゲートを全開にし、表の公道の分かりやすい交差点やゲート前に「誘導員」を直ちに走らせて配置し、救急車を事故現場直近まで誘導させる", id: "Buka penuh gerbang proyek, dan SEGERA suruh petugas誘導員 berlari ke persimpangan jalan raya depan proyek untuk menyambut dan memandu mobil ambulans masuk", ne: "साइटको मुख्य गेट पूरै खोल्न लगाउने, र बाहिर सडकको चोक वा गेट अगाडि तुरुन्तै 'गार्ड (पथप्रदर्शक)' लाई कुदाएर राख्ने ताकि एम्बुलेन्सलाई सिधै घाइते भएकै ठाउँमा डोर्याएर ल्याउन सकोस्" },
        { ja: "ゲートに頑丈なチェーンと鍵をかけて誰も入れないようにする", id: "Mengunci gembok gerbang agar ambulans tidak bisa masuk", ne: "गेटमा साङ्लो बाँधेर ताल्चा ठोकिदिने" },
        { ja: "救急車が来るまで全員で現場事務所でお茶を飲んで待つ", id: "Semua orang santai minum teh di kantor menunggu ambulans datang sendiri", ne: "सबैजना अफिसमा चिया खाएर चुपचाप बसिरहने" },
        { ja: "救急車のサイレンが聞こえたら全員で裏口から逃げ出す", id: "Semua pekerja lari kabur lewat pintu belakang saat sirene bunyi", ne: "एम्बुलेन्सको हर्न सुन्नासाथ पछाडिको ढोकाबाट भाग्ने" }
      ],
      answer: 0,
      expJa: "【緊急搬送の鉄則】建設現場は広大で入り口が分かりにくいため、救急車が迷って数分の救命ロスタイムが生じます。公道とゲートへの誘導員配置が人命を救います。",
      expId: "Sopir ambulans sering tidak tahu pintu masuk proyek konstruksi. Wajib tempatkan petugas di pinggir jalan raya untuk melambaikan tangan memandu ambulans masuk.",
      expNe: "निर्माण क्षेत्र ठूलो हुने भएकाले एम्बुलेन्स झुक्किन सक्छ। बाटोको चोक र गेटमै मान्छे खटाएर हात हल्लाउँदै गाडीलाई घाइते भएकै ठाउँसम्म डोर्याउनै पर्छ।"
    }
  ]
};
