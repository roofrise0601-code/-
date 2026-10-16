const CURRENT_QUIZ_DATA = {
  title: "Day 19：<ruby>原価管理<rt>げんかかんり</rt></ruby>（4<ruby>費目<rt>ひもく</rt></ruby>・<ruby>日報<rt>にっぽう</rt></ruby>）と<ruby>品質管理<rt>ひんしつかんり</rt></ruby>（テキスト P.48〜54）",
  key: "score_gakka3_19",
  passScore: 70,
  questions: [
    {
      cat: "第2章 工事原価の構成（P.48）",
      q: "建設業における「**完成工事原価**」を構成する**4つの費用（費目）**として、正しい組み合わせはどれですか。",
      q_id: "Manakah kombinasi yang BENAR mengenai 4 elemen biaya pembentuk 'HPP Proyek Selesai' (Kansei Kouji Genka)?",
      q_ne: "सम्पन्न निर्माण लागत (खर्च) बन्ने '४ मुख्य खर्च शीर्षकहरू' को सही जोडी कुन हो?",
      options: [
        { ja: "材料費・労務費・外注費・経費", id: "Biaya Bahan, Biaya Tenaga Kerja, Biaya Subkon, Biaya Operasional (Keihi)", ne: "सामग्री खर्च, ज्याला खर्च, बाहिरी ठेक्का खर्च, प्रशासनिक खर्च" },
        { ja: "広告費・交通費・交際費・通信費", id: "Biaya Iklan, Biaya Transportasi, Biaya Jamuan, Biaya Komunikasi", ne: "विज्ञापन, यातायात, मनोरञ्जन, फोन खर्च" },
        { ja: "敷地費・登記費・水道代・電気代", id: "Biaya Lahan, Biaya Notaris, Tagihan Air, Tagihan Listrik", ne: "जमिन, दर्ता, पानी, बिजुली खर्च" },
        { ja: "基本給・残業代・賞与・退職金", id: "Gaji Pokok, Lembur, Bonus, Pesangon", ne: "आधारभूत तलब, ओभरटाइम, बोनस, उपदान" }
      ],
      answer: 0,
      expJa: "【テキスト P.48参照】完成工事原価は①材料費（素材等の物品代）、②労務費（職人の工賃・人件費）、③外注費（下請発注費用）、④経費（上記以外の費用）の4つに分類されます。",
      expId: "Biaya konstruksi terbagi menjadi 4 elemen utama: Zairyou-hi (Bahan), Roumu-hi (Tenaga kerja langsung), Gaichuu-hi (Subkontraktor), dan Keihi (Biaya lain).",
      expNe: "निर्माणको कुल लागत ४ भागमा बाँडिन्छ: सामग्री खर्च, ज्याला (कामदार खर्च), बाहिरी ठेकेदार खर्च, र अन्य प्रशासनिक खर्च।"
    },
    {
      cat: "第2章 労務費の定義（P.48）",
      q: "工事原価の4費目のうち、**「工事施工を行う職人の人件費（工賃）」**に該当するものはどれですか。",
      q_id: "Di antara 4 elemen biaya konstruksi, manakah yang merupakan 'upah tenaga kerja tukang' yang langsung mengerjakan konstruksi?",
      q_ne: "निर्माण लागतका ४ शीर्षकहरू मध्ये 'कामदार तथा मिस्त्रीको प्रत्यक्ष ज्याला (पारिश्रमिक)' कुन शीर्षकमा पर्छ?",
      options: [
        { ja: "労務費（ろうむひ）", id: "Roumu-hi (Biaya Tenaga Kerja Langsung)", ne: "रोउमु-हि (ज्याला / श्रम खर्च)" },
        { ja: "材料費（ざいりょうひ）", id: "Zairyou-hi (Biaya Bahan)", ne: "जाइर्यौ-हि (सामग्री खर्च)" },
        { ja: "外注費（がいちゅうひ）", id: "Gaichuu-hi (Biaya Subkontraktor)", ne: "गाइच्युउ-हि (बाहिरी ठेक्का)" },
        { ja: "経費（けいひ）", id: "Keihi (Biaya Operasional)", ne: "केइहि (अन्य खर्च)" }
      ],
      answer: 0,
      expJa: "【テキスト P.48参照】直接工事施工にあたる職人の工賃・人件費を「労務費」と呼びます。工程の一部を他社に丸ごと発注する費用は「外注費」となります。",
      expId: "Roumu-hi adalah upah langsung para tukang/pekerja di proyek. Jika pekerjaan diserahkan ke vendor lain, tercatat sebagai Gaichuu-hi.",
      expNe: "'रोउमु-हि' भन्नाले कार्यस्थलमा खटिने कामदारहरूको प्रत्यक्ष ज्याला हो। अरू कम्पनीलाई काम सुम्पिँदा त्यो 'गाइच्युउ-हि' बन्दछ।"
    },
    {
      cat: "第2章 予定原価とコスト削減（P.48〜49）",
      q: "現場において**「予定していた原価を超えてしまい、会社の利益を減らしてしまう最大の原因」**としてテキストに挙げられているものはどれですか。",
      q_id: "Manakah penyebab terbesar membengkaknya anggaran rencana hingga menggerus keuntungan perusahaan menurut penjelasan buku teks?",
      q_ne: "पाठ्यपुस्तक अनुसार तोकिएको बजेट नाघेर कम्पनीको नाफा घट्ने सबैभन्दा ठूलो कारण कुन हो?",
      options: [
        { ja: "手待ち・手戻り・手直し・手違いや、ムリ・ムダ・ムラによる作業のロス", id: "Waktu tunggu (temachi), pengerjaan ulang (temodori), perbaikan cacat (tenaoshi), salah pesan (techigai), dan pemborosan", ne: "हात खाली बस्नु (तेमाची), काम दोहोर्याउनु (तेमोदोरी), बिग्रेको सच्याउनु (तेनाओशी) र मुरी-मुदा-मुराका कारण हुने क्षति" },
        { ja: "安全保護具を正しく着用して作業したこと", id: "Mengenakan APD keselamatan kerja secara benar", ne: "सुरक्षा सामग्री नियम अनुसार लगाएर काम गर्नु" },
        { ja: "始業前点検と安全ミーティングを毎日欠かさず実施したこと", id: "Melakukan briefing pagi dan inspeksi alat secara rutin", ne: "बिहानी बैठक र औजारको दैनिक जाँच नियमित गर्नु" },
        { ja: "工事写真を規定の構図でしっかりと撮影して記録したこと", id: "Mengambil dokumentasi foto proyek sesuai standar 5W1H", ne: "प्रमाणको रूपमा निर्माणको फोटो नियम अनुसार खिच्नु" }
      ],
      answer: 0,
      expJa: "【テキスト P.48〜49参照】手待ち、手戻り、手直し、手違いなどの無駄な作業が発生すると、余分な人工（人件費）や材料費がかかり、予定していた利益がコスト増加で圧迫されます。",
      expId: "Penyebab utama pembengkakan biaya dan kerugian laba adalah adanya temachi, temodori, tenaoshi, serta muri-muda-mura.",
      expNe: "काम रोकिनु, गल्ती सच्याउनु, फेरि बनाउनु जस्ता खेर जाने कामहरूले कामदार खर्च बढाएर कम्पनीको नाफा घटाउँछन्।"
    },
    {
      cat: "第2章 作業日報の活用（P.49）",
      q: "職長や作業員が毎日作成する「**作業日報（さぎょうにっぽう）**」を分析することで、最も直接的に削減・最適化できるコストは何ですか。",
      q_id: "Dengan menganalisis 'Laporan Kerja Harian' (Sagyou Nippou), biaya manakah yang paling efektif dipangkas dan dioptimalkan penempatannya?",
      q_ne: "दैनिक कामको विवरण लेखिने 'दैनिक कार्य रिपोर्ट (साग्यौ निप्पौ)' विश्लेषण गरेर सबैभन्दा बढी बचत गर्न सकिने मुख्य खर्च कुन हो?",
      options: [
        { ja: "人件費（人工：にんく）", id: "Biaya Tenaga Kerja / Upah Mandays (Ninku)", ne: "कामदारको ज्याला खर्च / दिनको ज्याला (निन्कु)" },
        { ja: "現場事務所の土地代", id: "Biaya Sewa Tanah Kantor Proyek", ne: "साइट अफिसको जग्गा भाडा" },
        { ja: "重機の輸入関税", id: "Pajak Bea Cukai Alat Berat Impor", ne: "मेसिनको भन्सार कर" },
        { ja: "工事完成後の建物の火災保険料", id: "Premi Asuransi Kebakaran Bangunan Selesai", ne: "भवनको बीमा शुल्क" }
      ],
      answer: 0,
      expJa: "【テキスト P.49参照】コストの中で最も大きな比重を占めるのが「人件費（人工：にんく）」です。日報から作業員の働き方を分析することで最適な人材配置を行い、人件費の無駄を削減できます。",
      expId: "Komponen biaya terbesar adalah tenaga kerja (人工 / Ninku). Analisis laporan harian membantu mandor mengatur jumlah orang secara tepat.",
      expNe: "खर्चको सबैभन्दा ठूलो हिस्सा कामदारको ज्याला (निन्कु) हो। दैनिक रिपोर्ट अध्ययन गरी सही मान्छे खटाएर यो खर्च घटाउन सकिन्छ।"
    },
    {
      cat: "第2章 品質の定義（P.50）",
      q: "JIS規格および建設現場における「**品質（ひんしつ）の良さ**」の定義として、最も適切なものはどれですか。",
      q_id: "Manakah definisi yang PALING TEPAT mengenai arti 'Kualitas Mutu yang Baik' menurut standar JIS dan konstruksi?",
      q_ne: "JIS मापदण्ड र निर्माण कार्यस्थल अनुसार 'उत्कृष्ट गुणस्तर' को सबैभन्दा सही परिभाषा कुन हो?",
      options: [
        { ja: "単に製品の質や出来栄えが良いだけでなく、「お客様（発注者）が求める機能や性能を備えている状態」であること", id: "Bukan hanya fisik fisiknya rapi, melainkan terpenuhinya fungsi dan performa yang dituntut oleh klien (pengguna)", ne: "हेर्दा राम्रो हुनु मात्र नभई 'ग्राहक (घरधनी) ले चाहेको कार्यक्षमता र गुणहरू पूर्ण रूपमा पुगेको अवस्था' हुनु" },
        { ja: "設計図面を無視して職人の独自のこだわりだけで豪華に作ること", id: "Mengabaikan gambar kerja demi selera mewah tukang sendiri", ne: "नक्सा मिचेर मिस्त्रीले आफ्नै खुसीले महँगो बनाउनु" },
        { ja: "どんなに使いにくくても、見た目の色や形だけが綺麗な状態のこと", id: "Hanya indah dilihat dari luar meski fungsinya sangat merepotkan pengguna", ne: "चलाउन जतिसुकै असजिलो भए पनि बाहिरबाट हेर्दा मात्र राम्रो देखिनु" },
        { ja: "発注者の要望よりも工期の早さだけを最優先にした仕上がりのこと", id: "Hasil kerja yang hanya mementingkan kecepatan tanpa peduli permintaan klien", ne: "ग्राहकको इच्छा नहेरी कामको गति मात्र चाँडो भएको अवस्था" }
      ],
      answer: 0,
      expJa: "【テキスト P.50参照】品質の良さとは、単なる見た目の出来栄えだけでなく、設計図書通りの要求を満たし、使用するお客様が求める機能や性能を正しく備えている状態を指します。",
      expId: "Mutu yang baik berarti memenuhi fungsi dan spesifikasi yang diminta klien sesuai dokumen kontrak dan gambar kerja.",
      expNe: "राम्रो गुणस्तर भन्नाले नक्सा अनुसार बनेको र प्रयोग गर्ने ग्राहकलाई चाहिने सबै सुविधा र बलियोपन भएको अवस्था हो।"
    },
    {
      cat: "第2章 設計図書と施工図（P.50〜51）",
      q: "設計図書と施工図の関係について、**施工図（せこうず）の役割**として最も適切なものはどれですか。",
      q_id: "Mengenai hubungan dokumen desain dan gambar kerja lapangan, manakah peran yang PALING TEPAT dari 'Gambar Kerja Lapangan' (Sekouzu)?",
      q_ne: "डिजाइन नक्सा र फिल्ड नक्साको सम्बन्धमा 'फिल्ड निर्माण नक्सा (सेकोउजु)' को मुख्य भूमिका कुन हो?",
      options: [
        { ja: "設計図書をもとに、現場で実際に作業員が正しく施工できるよう細部の納まり等を具体化した図面である", id: "Gambar detail praktis yang dibuat dari dokumen desain agar pekerja di proyek dapat mengeksekusi sambungan secara presisi", ne: "डिजाइन नक्साको आधारमा कार्यस्थलमा कामदारहरूले ठ्याक्कै काम गर्न सक्ने गरी कुना-कुनाको नाप प्रष्ट पारिएको नक्सा हो" },
        { ja: "建物の工事がすべて終わった後に、市役所に提出するためだけに描く図面", id: "Gambar formalitas yang baru digambar setelah proyek selesai untuk diserahkan ke dinas", ne: "काम सकिएपछि नगरपालिकामा बुझाउन मात्र पछि कोरिने नक्सा" },
        { ja: "職長が作業員の出勤日数を数えるために使う出席簿のこと", id: "Daftar hadir yang dipakai mandor untuk mencatat absensi tukang", ne: "कामदारको हाजिरी गन्न शोकुचोले प्रयोग गर्ने कापी" },
        { ja: "設計図書の図面とは全く異なる寸法を勝手に職人が書き込む落書き帳", id: "Buku catatan corat-coret tukang untuk mengubah dimensi sesuka hati", ne: "इन्जिनियरको नक्सालाई बिगारेर मिस्त्रीले मनलाग्दी लेख्ने कापी" }
      ],
      answer: 0,
      expJa: "【テキスト P.50〜51参照】設計図書（意匠・構造・設備等）から現場施工用に細部の納まりや段取りを落とし込んだものが「施工図」です。職長は施工図を理解して施工管理を行います。",
      expId: "Sekouzu (Shop drawing) adalah gambar kerja detail praktis di lapangan yang menjadi acuan langsung para pekerja.",
      expNe: "'सेकोउजु' नक्सालाई कार्यस्थलमा वास्तविकतामा ढाल्न बनाइएको विस्तृत कार्य-नक्सा हो, जसलाई हेरेर कामदारले काम गर्छन्।"
    },
    {
      cat: "第2章 施工写真の撮影（P.52〜53）",
      q: "工事の区切りごとに撮影する「**施工写真（せこうしゃしん）**」の役割や撮影ルールとして、**最も適切なもの**はどれですか。",
      q_id: "Manakah aturan dan peran yang PALING BENAR dalam pengambilan 'Foto Dokumentasi Konstruksi' (Sekou Shashin)?",
      q_ne: "कामका विभिन्न चरणमा खिँचिने 'निर्माण प्रमाण फोटो (सेकोउ शाशिन)' को नियम सम्बन्धी कुन भनाइ सही छ?",
      options: [
        { ja: "5W1H（いつ・どこで・誰が・何を等）が分かる構図にし、黒板の文字がはっきり読めるように撮影する", id: "Gunakan komposisi 5W1H (kapan, di mana, siapa, apa) dan pastikan tulisan di papan tulis proyek (kokuban) terbaca jelas", ne: "5W1H (कहिले, कहाँ, कसले, के) प्रष्ट बुझिने फ्रेम बनाउने र कालोपाटीको अक्षर स्पष्ट पढ्न सकिने गरी फोटो खिच्ने" },
        { ja: "黒板の文字が反射して見えなくなっていても、気にせずそのまま保存する", id: "Membiarkan tulisan papan tulis silau/kabur tanpa diulang", ne: "पाटीको अक्षर टल्किएर नदेखिए पनि केही फरक पर्दैन भन्दै त्यतिकै सेभ गर्ने" },
        { ja: "完成後に隠れて見えなくなる部分（配筋や埋設配管など）は撮影しなくてよい", id: "Bagian yang tertutup beton (besi tulangan, pipa tanam) tidak perlu difoto", ne: "ढलानभित्र छोपिने भागहरू (रड, पाइप) पछि नदेखिने भएकाले फोटो खिच्नु पर्दैन" },
        { ja: "思いついたときに適当な角度から周囲の無関係な物ばかり写す", id: "Memotret benda-benda yang tidak relevan secara acak kapan pun ingat", ne: "आफूलाई मन लागेको बेला काम नलाग्ने अरू नै वस्तुको फोटो खिच्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.52〜53参照】施工写真は工事記録や品質の証拠であり、完成後に見えなくなる部分の確認に不可欠です。5W1Hが分かり、撮影用黒板の文字が読める構図で計画的に撮影します。",
      expId: "Foto proyek adalah bukti kualitas kerja (terutama bagian tersembunyi). Wajib memenuhi 5W1H dan papan informasi harus terbaca jelas.",
      expNe: "निर्माणको फोटो गुणस्तरको ठूलो प्रमाण हो (विशेषगरी ढलानभित्र लुक्ने भागहरू)। बोर्डको अक्षर प्रष्ट बुझिने गरी ५W१H खुलाएर खिच्नुपर्छ।"
    },
    {
      cat: "第2章 作業員の教育指導（P.53〜54）",
      q: "現場で経験の少ない作業員に技術教育を行う際、**職長やベテランが取るべき指導方法**として最も適切なものはどれですか。",
      q_id: "Metode bimbingan manakah yang PALING TEPAT diterapkan oleh Shokucho kepada pekerja baru yang belum berpengalaman?",
      q_ne: "कार्यस्थलमा नयाँ वा थोरै अनुभव भएका कामदारहरूलाई सीप सिकाउँदा शोकुचोले अपनाउनुपर्ने सबैभन्दा सही तरिका कुन हो?",
      options: [
        { ja: "単に作業のやり方（動作）を教えるだけでなく、「なぜその方法で作業するのか」という理由やコツを言葉で分かりやすく説明する", id: "Bukan hanya mendikte gerakan tangan, tetapi juga menjelaskan secara lisan dengan jelas 'mengapa memakai metode tersebut' beserta triknya", ne: "हातको काम मात्र देखाउने होइन, 'किन यो तरिकाले काम गर्नुपर्छ' भन्ने कारण र यसका मुख्य बुँदाहरू शब्दमा प्रष्ट बुझाउने" },
        { ja: "何も教えずに「昔のように見て盗んで10年かけて覚えろ」と突き放す", id: "Tidak memberi tahu apa-apa dan menyuruh 'belajar sendiri melihat diam-diam selama 10 tahun'", ne: "केही नसिकाई 'पहिलेको जमाना जस्तै १० वर्ष लगाएर आफैं हेरेर चोर' भन्दै एक्लै छोड्ने" },
        { ja: "作業のコツは職人の秘密なので、絶対に後輩には教えないようにする", id: "Menyembunyikan trik kerja dari junior karena dianggap rahasia pribadi", ne: "कामको मुख्य तरिका आफ्नो गोप्य सीप हो भन्दै जुनियरलाई कहिल्यै नसिकाउने" },
        { ja: "作業員が失敗したときに、理由も説明せずに感情的に怒鳴りつけるだけにする", id: "Hanya membentak emosional saat pekerja salah tanpa menjelaskan letak kesalahannya", ne: "काम बिग्रँदा कारण नबुझाई कामदारमाथि रिसाएर चिच्याउने मात्र गर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.53〜54参照】現代の建設現場では効率と品質の両立が求められます。「見て覚えろ」の限界を克服し、なぜそのやり方が良いのかの理由やコツを分かりやすく説明する指導能力が求められます。",
      expId: "Bimbingan modern menuntut mandor menjelaskan 'alasan dan tips' secara jelas, bukan lagi sekadar menyuruh bawahan mengamati 10 tahun.",
      expNe: "आधुनिक निर्माणमा काम छिटो र गुणस्तरीय हुनुपर्छ। त्यसैले पुराना तरिकाले नभई 'किन यो तरिका सही छ' प्रष्ट व्याख्या गरेर सिकाउनुपर्छ।"
    },
    {
      cat: "第2章 品質改善思考：3現主義（P.54）",
      q: "施工品質の欠陥が発生したとき、思い込みや先入観を捨てて事実を確認する基本思考である「**3現主義（さんげんしゅぎ）**」の3つの要素はどれですか。",
      q_id: "Tiga elemen dasar apakah yang membentuk filosofi 'Sangenshugi' (Prinsip 3 Nyata) saat memecahkan masalah cacat mutu?",
      q_ne: "काममा खराबी वा समस्या आउँदा कुनै पूर्वाग्रह नराखी समाधान खोज्ने '३-वास्तविकताको सिद्धान्त (सान्गेन-श्युगी)' का ३ तत्त्वहरू के-के हुन्?",
      options: [
        { ja: "現地（現場へ行く）・現物（実際の物を見る）・現実（何が起きているか事実を確認する）", id: "Genchi (Tempat nyata), Genbutsu (Benda nyata), Genjitsu (Fakta nyata yang terjadi)", ne: "गेन्ची (वास्तविक स्थल), गेन्बुचु (वास्तविक वस्तु), गेन्जिचु (वास्तविक घटना/तथ्य)" },
        { ja: "現在・過去・未来", id: "Masa Sekarang, Masa Lalu, Masa Depan", ne: "वर्तमान, भूत, भविष्य" },
        { ja: "現金・現職・現役", id: "Uang Tunai, Jabatan Aktif, Status Aktif", ne: "नगद, बहालवाला, सक्रिय" },
        { ja: "現場監督・現場主任・現場作業員", id: "Pengawas Proyek, Kepala Mandor, Pekerja", ne: "इन्जिनियर, नाइके, कामदार" }
      ],
      answer: 0,
      expJa: "【テキスト P.54参照】品質欠陥が発生した際は、「現地」に足を運び、「現物」を直接見つめ、「現実」に起きている事実を確認する『3現主義』が問題解決の基本です。",
      expId: "Sangenshugi adalah: pergi ke Genchi (lokasi langsung), melihat Genbutsu (barang bukti fisik), dan memeriksa Genjitsu (fakta yang sebenarnya).",
      expNe: "'सान्गेन-श्युगी' भन्नाले घटना घटेको ठाउँमा जाने (गेन्ची), बिग्रिएको सामान हेर्ने (गेन्बुचु), र के भएको हो सत्य बुझ्ने (गेन्जिचु) हो।"
    },
    {
      cat: "第2章 品質改善思考：5現主義（P.54）",
      q: "3現主義に加えて、問題解決の精度を高める「**5現主義（ごげんしゅぎ）**」で追加される2つの要素の組み合わせはどれですか。",
      q_id: "Manakah 2 elemen tambahan yang melengkapi 3-Gen menjadi 'Gogenshugi' (Prinsip 5 Nyata) untuk analisis ilmiah?",
      q_ne: "३-वास्तविकतामा थप अनुसन्धानका लागि जोडिने '५-वास्तविकता (गोन्गेन-श्युगी)' का थप २ तत्त्वहरू कुन-कुन हुन्?",
      options: [
        { ja: "原理（そうなる理論・法則）と 原則（例外を除いて一般に成り立つ決まり）", id: "Genri (Prinsip/Hukum Teori Ilmiah) dan Gensoku (Aturan Baku Standar)", ne: "गेन्त्री (वैज्ञानिक नियम वा सिद्धान्त) र गेन्ससोकु (सामान्य स्थापित नियम)" },
        { ja: "原因と結果", id: "Penyebab dan Akibat", ne: "कारण र नतिजा" },
        { ja: "減点と加点", id: "Pengurangan dan Penambahan Nilai", ne: "नम्बर घटाउने र जोड्ने" },
        { ja: "厳重注意と減給処分", id: "Peringatan Keras dan Pemotongan Gaji", ne: "कडा चेतावनी र तलब कट्टी" }
      ],
      answer: 0,
      expJa: "【テキスト P.54参照】「3現主義（現地・現物・現実）」に「原理（科学的な法則や理論）」と「原則（標準的なルール）」を加えたものを『5現主義』と呼び、原理原則から外れた点がないかを分析します。",
      expId: "Gogenshugi menambahkan Genri (Hukum teori ilmiah) dan Gensoku (Aturan standar) ke dalam 3-Gen untuk menemukan solusi yang tepat.",
      expNe: "सान्गेन-श्युगीमा 'गेन्त्री (वैज्ञानिक सिद्धान्त)' र 'गेन्ससोकु (मानक नियम)' थपेर ५ वटा वास्तविक आधारमा समस्याको समाधान खोजिन्छ।"
    }
  ]
};
