const CURRENT_QUIZ_DATA = {
  title: "実技⑤：<ruby>建設工事<rt>けんせつこうじ</rt></ruby>の<ruby>安全<rt>あんぜん</rt></ruby>・<ruby>災害防止対策<rt>さいがいぼうしたいさく</rt></ruby>（P.179〜194）",
  key: "score_jitsugi_5",
  passScore: 70,
  questions: [
    {
      cat: "第7章 建設業の三大災害（P.179〜180）",
      q: "建設業における死亡労働災害の4〜7割を占める「**三大災害**」と呼ばれる事故の型の組み合わせとして、正しいものはどれですか。",
      q_id: "Manakah kombinasi yang BENAR mengenai '3 Besar Jenis Bencana' (San-dai Saigai) yang mencakup 40-70% kematian di konstruksi Jepang?",
      q_ne: "जापानको निर्माण क्षेत्रमा हुने ज्यान जाने दुर्घटनाको ४० देखि ७० प्रतिशत हिस्सा ओगट्ने '३ ठूला दुर्घटनाहरू' कुन-कुन हुन्?",
      options: [
        { ja: "墜落・転落 ／ 建設機械・クレーンなど災害 ／ 崩壊・倒壊災害", id: "Jatuh/Terpeleset dari Ketinggian / Bencana Alat Berat & Crane / Roboh & Longsor", ne: "माथिबाट खस्नु / क्रेन वा हेभी मेसिनको दुर्घटना / संरचना भत्कनु वा पुरिनु" },
        { ja: "熱中症 ／ 腰痛 ／ 擦り傷", id: "Sengatan Panas / Sakit Pinggang / Luka Gores", ne: "हिटस्ट्रोक / कम्मर दुख्नु / कोतरिनु" },
        { ja: "感電 ／ 火傷 ／ 道具の紛失", id: "Tersengat Listrik / Luka Bakar / Alat Hilang", ne: "करेन्ट लाग्नु / डढ्नु / औजार हराउनु" },
        { ja: "睡眠不足 ／ 遅刻 ／ 言葉遣いのミス", id: "Kurang Tidur / Terlambat / Salah Ucap", ne: "निन्द्रा नपुग्नु / ढिलो हुनु / बोली बिग्रनु" }
      ],
      answer: 0,
      expJa: "【テキスト P.179参照】建設現場の三大災害は「墜落・転落」「建設機械・クレーンなど災害」「崩壊・倒壊災害」で、死亡災害全体の4〜7割を占めています。",
      expId: "Tiga musibah paling mematikan: Jatuh dari ketinggian, Alat berat & crane, serta Struktur roboh/longsor.",
      expNe: "मृत्यु हुने मुख्य ३ कारणहरू हुन्: माथिबाट खस्नु, क्रेन वा मेसिनमा च्यापिनु, र पर्खाल वा खट भत्कनु।"
    },
    {
      cat: "第7章 外国人労働者の災害状況（P.180）",
      q: "日本の全業種において、**外国人労働者の死亡災害発生件数が最も多い業種**はどれですか。",
      q_id: "Di antara semua industri di Jepang, sektor manakah yang memiliki jumlah kecelakaan fatal (kematian) pekerja asing terbanyak?",
      q_ne: "जापानका सम्पूर्ण औद्योगिक क्षेत्रहरू मध्ये विदेशी कामदारहरूको मृत्यु दुर्घटना सबैभन्दा बढी हुने क्षेत्र कुन हो?",
      options: [
        { ja: "建設業", id: "Konstruksi (Kensetsu-gyou)", ne: "निर्माण क्षेत्र (कन्स्ट्रक्सन)" },
        { ja: "製造業", id: "Manufaktur Pabrik", ne: "उत्पादन क्षेत्र (फ्याक्ट्री)" },
        { ja: "農業・林業", id: "Pertanian & Kehutanan", ne: "कृषि तथा वन क्षेत्र" },
        { ja: "飲食サービス業", id: "Restoran & Pelayanan", ne: "होटल तथा रेस्टुरेन्ट" }
      ],
      answer: 0,
      expJa: "【テキスト P.180 表7-3参照】全業種における外国人労働者の死亡者数は、建設業が最も多くなっています（令和3年度で17名など）。安全のルール徹底が極めて重要です。",
      expId: "Sektor konstruksi mencatat angka kematian pekerja asing tertinggi di Jepang, sehingga kepatuhan K3 sangat vital.",
      expNe: "जापानमा विदेशी कामदारको सबैभन्दा धेरै ज्यान जाने क्षेत्र निर्माण क्षेत्र नै हो। त्यसैले सुरक्षा नियम कडाइका साथ मान्नुपर्छ।"
    },
    {
      cat: "第7章 足場の倒壊防止（P.182）",
      q: "足場の倒壊事故を防ぐための対策として、**誤っているもの**はどれですか。",
      q_id: "Manakah tindakan yang SALAH dalam mencegah robohnya perancah (scaffolding)?",
      q_ne: "खट (परान्चाह) ढल्नबाट रोक्न गरिने उपायहरू मध्ये कुन 'गलत' हो?",
      options: [
        { ja: "手間と材料費を節約するため、壁つなぎを規定の半分以下に間引いて施工する", id: "Mengurangi/menjarangkan pengikat dinding (kabe-tsunagi) hingga separuhnya demi hemat biaya dan waktu", ne: "समय र खर्च बचाउन भित्तामा बाँध्ने रड (काबे-चुनागी) तोकिएको भन्दा आधा कम लगाउने" },
        { ja: "敷板と地盤の間にすき間が空かないように平坦にし、ベース金具を釘でしっかり固定する", id: "Membuat tanah rata agar tidak ada celah di bawah papan alas, lalu paku pelat base ke papan", ne: "जमिन सम्याएर काठको फलेक ओछ्याउने र जगको प्लेटलाई किल्ला ठोकेर कस्ने" },
        { ja: "強風が予想されるときは、風圧で足場が引っ張られないよう養生シートの一部または全部を外す", id: "Melepas sebagian/seluruh jaring terpal saat angin kencang agar perancah tidak tertarik angin", ne: "हुरीबतास आउने बेला खटलाई बतासले नतानोस् भनेर वरिपरिको जाली वा त्रिपाल फुकालिदिने" },
        { ja: "留め具の緩みや壁つなぎの固定状態を定期的に点検する", id: "Memeriksa secara berkala kekencangan klem dan kondisi pengikat dinding", ne: "क्ल्याम्प खुकुलो भए/नभएको र भित्तामा बाँधेको ठाउँ नियमित जाँच गर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.182参照】壁つなぎを間引く（減らす）手抜き工事は強風や地震時の倒壊事故の直接的な原因になります。絶対に間引いてはいけません。",
      expId: "Mengurangi pengikat dinding (kabe-tsunagi) adalah kecurangan fatal yang menyebabkan perancah roboh tertiup angin.",
      expNe: "भित्तामा बाँध्ने रड कम गर्नु घोर लापरबाही हो। यसो गर्दा हावाहुरी आउँदा पूरै खट ढल्छ।"
    },
    {
      cat: "第7章 建設機械・重機安全（P.182〜183）",
      q: "バックホウ（油圧ショベル）や移動式クレーンなどの建設機械を使用する際の安全管理として、正しいものはどれですか。",
      q_id: "Manakah aturan keselamatan yang BENAR saat mengoperasikan alat berat seperti backhoe atau crane?",
      q_ne: "ब्याकहो वा क्रेन जस्ता हेभी मेसिन प्रयोग गर्दा पालना गर्नुपर्ने सही नियम कुन हो?",
      options: [
        { ja: "バックホウの旋回範囲内への立入を禁止し、本来の目的以外の用途（無理な荷の吊り上げ等）には使用しない", id: "Larang orang masuk radius putar backhoe, dan jangan gunakan di luar fungsinya (misal mengangkat beban berlebih)", ne: "मेसिन घुम्ने ठाउँमा मान्छे पस्न निषेध गर्ने र क्षमताभन्दा बढी सामान उठाउने जस्ता गलत काममा प्रयोग नगर्ने" },
        { ja: "トラックへの積み下ろし時にスピードを出して一気に駆け上がる", id: "Ngebut saat naik/turun truk pengangkut agar tidak membuang waktu", ne: "ट्रकमा चढाउँदा वा ओराल्दा छिटो सक्न चर्को गतिमा चलाउने" },
        { ja: "クレーンのアウトリガは狭い場所なので片側だけ出して作業する", id: "Hanya menjulurkan outrigger satu sisi saja di tempat yang sempit", ne: "ठाउँ साँघुरो छ भन्दै क्रेनको एउटा मात्र खुट्टा (आउट्रिगर) निकालेर काम गर्ने" },
        { ja: "作業効率を上げるため、吊り荷の真下に作業員を配置して手で荷を支えさせる", id: "Menyuruh pekerja berdiri tepat di bawah beban gantung untuk memeganginya dengan tangan", ne: "झुन्ड्याइएको सामानको ठ्याक्कै मुनि कामदारलाई हातले समात्न लगाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.182〜183参照】バックホウの旋回時の激突や転倒、クレーンの能力オーバーやアウトリガ誤用による転倒が多発しています。本来の用途以外に使用してはいけません。",
      expId: "Dilarang keras berada di radius putar alat berat atau di bawah beban gantung. Jangan gunakan alat di luar fungsi aslinya.",
      expNe: "मेसिन घुम्ने ठाउँ र झुन्ड्याएको सामान मुनि बस्नु हुँदैन। मेसिनलाई तोकिएको काम बाहेक अन्य काममा प्रयोग गर्नुहुन्न।"
    },
    {
      cat: "第7章 脚立・はしご作業（P.184）",
      q: "住宅や内装工事で多用される「脚立（きゃたつ）」を使用する際、**墜落・転倒を防ぐために禁止されている行為**はどれですか。",
      q_id: "Manakah tindakan yang DILARANG saat menggunakan tangga lipat (kyatatsu) untuk mencegah jatuh/terguling?",
      q_ne: "भर्याङ (क्याताचु) प्रयोग गर्दा लड्नबाट बच्न कुन काम गर्न 'निषेध' गरिएको छ?",
      options: [
        { ja: "脚立の天板に乗って作業したり、天板にまたがって作業すること", id: "Bekerja sambil berdiri di papan paling atas (top plate) atau mendudukinya seperti menunggang kuda", ne: "भर्याङको सबैभन्दा माथिल्लो फलेकमाथि उभिएर वा दुईतिर खुट्टा राखेर (घोडा चढे जस्तै) काम गर्नु" },
        { ja: "開き止め金具を確実にロックして使用すること", id: "Mengunci engsel pengaman tangga dengan kencang sebelum naik", ne: "भर्याङको बिचको लक राम्ररी लगाएर मात्र चढ्नु" },
        { ja: "脚立の足元にゴミや障害物がない平坦な場所に設置すること", id: "Menaruh tangga di permukaan yang rata dan bersih dari sampah", ne: "खुट्टा मुनि फोहोर नभएको समथर ठाउँमा भर्याङ राख्नु" },
        { ja: "手すり付きの可搬式作業台を使用すること", id: "Menggunakan perancah portabel yang dilengkapi pagar pengaman", ne: "हातले समात्ने रेलिङ भएको सुरक्षित टेबल प्रयोग गर्नु" }
      ],
      answer: 0,
      expJa: "【テキスト P.184参照】脚立の天板に乗る、またがって作業する、荷物を持って昇降することは禁止です。バランスを崩して重傷・死亡事故につながります。",
      expId: "Dilarang berdiri di anak tangga teratas (top plate) atau mengangkanginya. Gunakan meja kerja berpagar jika memungkinkan.",
      expNe: "भर्याङको टुप्पोमाथि उभिनु वा दुईतिर खुट्टा फैलाएर काम गर्नु कडा निषेध छ। यसो गर्दा सन्तुलन गुमेर गम्भीर चोट लाग्छ।"
    },
    {
      cat: "第7章 回転工具と手袋の禁止（P.184・P.190）",
      q: "「丸のこ、ボール盤、面取り盤、パイプねじ切機」などの**回転する刃物・機械を扱う際、手袋（軍手）の着用が禁止されている理由**は何ですか。",
      q_id: "Mengapa dilarang memakai sarung tangan kain (gunte) saat menggunakan mesin berputar seperti gergaji bundar, mesin bor, atau mesin senai?",
      q_ne: "गोलो आरा (मारुनोको), ड्रिल वा पाइपको थ्रेड काट्ने जस्ता घुम्ने मेसिन चलाउँदा पञ्जा (गुन्ते) लगाउन किन 'निषेध' गरिएको हो?",
      options: [
        { ja: "手袋の繊維が高速回転する刃や軸に巻き込まれ、指や手を切断・骨折する大事故になる恐れがあるため", id: "Serat sarung tangan bisa tersangkut dan tergulung oleh putaran pisau, mengakibatkan jari/tangan terpotong atau patah", ne: "पञ्जाको धागो घुम्ने ब्लेड वा मेसिनमा बेरिएर हात वा औंला काटिने र भाँचिने भयानक दुर्घटना हुने जोखिम भएकोले" },
        { ja: "手袋が汚れるともったいないから", id: "Karena sayang jika sarung tangan menjadi kotor", ne: "पञ्जा फोहोर हुन्छ भनेर" },
        { ja: "手が汗をかいて工具が滑りやすくなるから", id: "Karena tangan berkeringat dan alat jadi licin", ne: "पसिना आएर औजार चिप्लिन्छ भनेर" },
        { ja: "機械の温度が下がって切れ味が落ちるから", id: "Karena suhu mesin bisa turun dan mengurangi ketajaman", ne: "मेसिन चिसो भएर धार घट्छ भनेर" }
      ],
      answer: 0,
      expJa: "【テキスト P.184・190参照】回転刃物（丸のこ・ボール盤・ねじ切機等）の作業では、手袋の巻き込まれ事故を防ぐため軍手などの手袋着用は固く禁止されています。",
      expId: "Putaran mesin bisa menyambar serat sarung tangan dan menarik tangan masuk ke dalam mata pisau. Jangan pernah pakai sarung tangan kain!",
      expNe: "घुम्ने मेसिनले पञ्जालाई च्याप्प समातेर पूरै हात भित्र तानिदिन्छ। त्यसैले यस्ता मेसिन चलाउँदा पञ्जा लगाउनै हुन्न।"
    },
    {
      cat: "第7章 安全施工サイクルの日常業務（P.185〜187）",
      q: "現場で毎朝実施される安全ミーティングにおいて、**職長を中心に行う重要な安全衛生活動**はどれですか。",
      q_id: "Kegiatan K3 vital apakah yang dipimpin oleh Mandor (Shokucho) saat Rapat Keselamatan Tim di pagi hari?",
      q_ne: "बिहानको सुरक्षा बैठक (सेफ्टी मिटिङ) मा शोकुचोले टोलीका सदस्यहरूसँग गर्ने मुख्य काम कुन हो?",
      options: [
        { ja: "前日の作業の反省、当日の作業工程に潜む危険予知（KY）活動、および新規入場者教育の実施", id: "Evaluasi kerja kemarin, Aktivitas Prediksi Bahaya (KYT) untuk tugas hari ini, dan edukasi pekerja baru", ne: "अघिल्लो दिनको कामको समीक्षा, आजको काममा हुनसक्ने खतराको अनुमान (KY बैठक), र नयाँ कामदारलाई तालिम" },
        { ja: "その日の昼食の弁当のメニュー決め", id: "Menentukan menu makan siang hari itu", ne: "दिउँसोको खानाको परिकार छान्ने" },
        { ja: "職長が一人で黙ってスマートフォンのゲームをする", id: "Mandor diam sendirian sambil main game HP", ne: "शोकुचो एक्लै चुपचाप मोबाइल गेम खेलेर बस्ने" },
        { ja: "安全確認を省略して全員で現場から解散する", id: "Membatalkan briefing K3 lalu bubar begitu saja", ne: "सुरक्षा जाँच नगरी सबै कामदारलाई आ-आफ्नो बाटो लाग्न भन्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.186参照】毎朝の安全ミーティングでは、職長を中心に「前日作業の反省」「当日の作業手順と危険予知（KY）活動」「新規入場者教育」を行います。",
      expId: "Rapat keselamatan pagi fokus pada evaluasi kerja, analisis bahaya KYT harian kelompok, dan pengenalan pekerja baru.",
      expNe: "बिहानी सुरक्षा बैठकमा अघिल्लो दिनको समीक्षा, आजको कामको खतरा अनुमान (KY), र नयाँ साथीलाई नियम सिकाउने काम गरिन्छ।"
    },
    {
      cat: "第7章 フルハーネス型墜落制止用器具の義務（P.189）",
      q: "建設業において、**フルハーネス型墜落制止用器具の装着が求められる高さ基準**として正しいものはどれですか。",
      q_id: "Berapakah batas ketinggian kerja di mana penggunaan Full Body Harness diwajibkan secara ketat pada industri konstruksi Jepang?",
      q_ne: "जापानको निर्माण क्षेत्रमा 'फुल बडी सेफ्टी हार्नेस' लगाउन अनिवार्य गरिएको उचाइको मापदण्ड कति हो?",
      options: [
        { ja: "高さ5mを超える場所での作業（一般的な業種基準は6.75m超だが、建設業は5m超で義務）", id: "Ketinggian di atas 5 meter (standar umum industri 6,75m, tetapi konstruksi diperketat di atas 5m)", ne: "५ मिटरभन्दा अग्लो ठाउँमा (अन्य क्षेत्रमा ६.७५ मिटर भए पनि निर्माण क्षेत्रमा ५ मिटरमै अनिवार्य छ)" },
        { ja: "高さ50cm以上", id: "Ketinggian di atas 50 cm", ne: "५० सेन्टिमिटरभन्दा माथि" },
        { ja: "高さ100m以上", id: "Ketinggian di atas 100 meter", ne: "१०० मिटरभन्दा माथि" },
        { ja: "地下室の作業のみで、高所では着用不要", id: "Hanya di ruang bawah tanah, tidak perlu di ketinggian", ne: "जमिन मुनि मात्र, अग्लो ठाउँमा लगाउनै पर्दैन" }
      ],
      answer: 0,
      expJa: "【テキスト P.189参照】2022年1月2日より一般基準は作業床高さ6.75m超ですが、墜落事故の多い建設業では「5mを超える高さ」でフルハーネスの着用が義務付けられています。",
      expId: "Di industri konstruksi, batas kewajiban full body harness diperketat pada pekerjaan di ketinggian di atas 5 meter.",
      expNe: "निर्माण क्षेत्रमा धेरै दुर्घटना हुने भएकोले ५ मिटरभन्दा अग्लो ठाउँमा काम गर्दा सेफ्टी हार्नेस अनिवार्य गरिएको छ।"
    },
    {
      cat: "第7章 熱中症予防の暑さ指数（P.190〜191）",
      q: "建設現場における熱中症対策として、**気象庁や環境省が提供し現場管理に用いられている指標（暑さ指数）の略称**は何ですか。",
      q_id: "Apakah singkatan dari Indeks Panas (Wet Bulb Globe Temperature) yang wajib dipantau untuk mencegah heatstroke di proyek konstruksi?",
      q_ne: "गर्मीमा हिटस्ट्रोक हुन नदिन कार्यस्थलमा नापिने 'गर्मी सूचकांक (तातोपनको लेभल)' को अंग्रेजी संक्षिप्त नाम के हो?",
      options: [
        { ja: "WBGT（暑さ指数）", id: "WBGT (Wet Bulb Globe Temperature / Indeks Panas)", ne: "WBGT (गर्मी सूचकांक)" },
        { ja: "QCDSE", id: "QCDSE (Manajemen Proyek)", ne: "QCDSE (व्यवस्थापन सूत्र)" },
        { ja: "OODA", id: "OODA (Siklus Pengambilan Keputusan)", ne: "OODA (निर्णय प्रक्रिया)" },
        { ja: "PDCA", id: "PDCA (Siklus Manajemen)", ne: "PDCA (व्यवस्थापन चक्र)" }
      ],
      answer: 0,
      expJa: "【テキスト P.190〜191参照】熱中症の危険度を判断するため「WBGT（暑さ指数）」を計測器で把握し、大型扇風機、冷房休憩所、水分・塩分補給などの対策を実施します。",
      expId: "WBGT adalah indeks suhu basah dan bola radiasi matahari yang digunakan untuk menilai risiko bahaya sengatan panas di lapangan.",
      expNe: "गर्मीको जोखिम नाप्न 'WBGT मिटर' प्रयोग गरिन्छ र सोही अनुसार एसी, पंखा र जीवनजलको व्यवस्था मिलाइन्छ।"
    },
    {
      cat: "第7章 ヒューマンエラーの種類（P.192〜193）",
      q: "「効率よく早く終わらせたい」という焦りから、**決められた安全手順や安全通路の通行を省略してしまうことで起きるヒューマンエラー**を何と呼びますか。",
      q_id: "Apa sebutan jenis human error di mana pekerja sengaja melewati/memotong prosedur aman demi ingin cepat selesai?",
      q_ne: "काम छिटो र सजिलै सक्ने लोभमा तोकिएको सुरक्षा नियम वा बाटो छलेर सर्टकट अपनाउँदा हुने गल्तीलाई के भनिन्छ?",
      options: [
        { ja: "近道行動・省略行動", id: "Chikamichi Koudou / Shouryaku Koudou (Pintasan / Pemotongan Prosedur)", ne: "चिकामिची / शौर्याकु कोउदौ (सर्टकट बाटो अपनाउने गल्ती)" },
        { ja: "認知ミス", id: "Ninchi Miss (Salah Persepsi)", ne: "निन्ची मिस (बुझाइमा हुने भ्रम)" },
        { ja: "パニック", id: "Panic (Kepanikan Tiba-tiba)", ne: "प्यानिक (अताल्लिएर गरिने गल्ती)" },
        { ja: "経験不足", id: "Keiken Busoku (Kurang Pengalaman)", ne: "अनुभवको कमी" }
      ],
      answer: 0,
      expJa: "【テキスト P.193参照】「近道行動・省略行動」は、楽をしたい・急ぎたいという気持ちから安全手順を飛ばしてしまい、墜落や巻き込まれなどの重大事故を招く代表的なエラーです。",
      expId: "Chikamichi koudou adalah tindakan memotong SOP keselamatan demi jalan pintas. Ini adalah pemicu kecelakaan paling sering.",
      expNe: "छिटो सक्नका लागि नियम छल्ने वा सर्टकट बाटो हिँड्ने बानीले ज्यान जाने ठूलो दुर्घटना निम्त्याउँछ।"
    }
  ]
};
