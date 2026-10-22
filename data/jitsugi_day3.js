const CURRENT_QUIZ_DATA = {
  title: "実技・判断等試験③：<ruby>建設工事<rt>けんせつこうじ</rt></ruby>の<ruby>安全<rt>あんぜん</rt></ruby>・<ruby>災害防止対策<rt>さいがいぼうしたいさく</rt></ruby>（P.179〜196）",
  key: "score_jitsugi_3",
  passScore: 70,
  questions: [
    {
      cat: "第7章 死亡災害の型（P.181〜182）",
      q: "日本の建設業において、**死亡事故の発生原因として全体の約4割を占め、最も件数が多い「事故の型」**はどれですか。",
      q_id: "Di industri konstruksi Jepang, jenis kecelakaan apakah yang menempati porsi terbesar (sekitar 40%) dari seluruh kecelakaan fatal / kematian?",
      q_ne: "जापानको निर्माण क्षेत्रमा कुल मृत्यु हुने दुर्घटनाहरू मध्ये सबैभन्दा धेरै (करिब ४० प्रतिशत) हिस्सा ओगट्ने दुर्घटनाको प्रकार कुन हो?",
      options: [
        { ja: "墜落・転落（ついらく・てんらく）", id: "Jatuh dari Ketinggian / Terjatuh (Tsuiraku / Tenraku)", ne: "अग्लो ठाउँबाट खस्नु वा लड्नु (चुइराकु / तेनराकु)" },
        { ja: "熱中症（ねっちゅうしょう）", id: "Sengatan Panas (Heatstroke)", ne: "गर्मीले बेहोस हुनु (हिटस्ट्रोक)" },
        { ja: "交通事故（こうつうじこ）", id: "Kecelakaan Lalu Lintas Jalan Raya", ne: "सडक दुर्घटना" },
        { ja: "火災による火傷（かさい）", id: "Luka Bakar Akibat Kebakaran", ne: "आगोले पोल्नु" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.181〜182参照】建設業の死亡災害で最も多いのは「墜落・転落」で、全体の約40%を占めます。次いで「建設機械・クレーン等による激突・はさまれ」「倒壊・崩壊」が続きます。",
      expId: "Penyebab kematian nomor satu di proyek konstruksi adalah 'Jatuh dari ketinggian' (sekitar 40%). Penggunaan full harness dan pagar pengaman sangat krusial.",
      expNe: "निर्माण क्षेत्रमा ज्यान जाने दुर्घटनाहरू मध्ये सबैभन्दा धेरै करिब ४०% अग्लो ठाउँबाट खसेर हुने गर्दछ। त्यसैले सेफ्टी हार्नेस अनिवार्य छ।"
    },
    {
      cat: "第7章 死亡災害の三大要因（P.181〜184）",
      q: "建設業における**「三大死亡災害事故」と呼ばれる事故の型**の組み合わせとして、正しいものはどれですか。",
      q_id: "Manakah kombinasi yang BENAR mengenai '3 Besar Jenis Kecelakaan Fatal' (San-dai Shibou Saigai) di proyek konstruksi?",
      q_ne: "निर्माण क्षेत्रमा हुने '३ ठूला प्राणघातक दुर्घटनाहरू' को सही जोडी कुन हो?",
      options: [
        { ja: "墜落・転落 ／ 建設機械・クレーン等による災害 ／ 倒壊・崩壊", id: "Jatuh dari Ketinggian / Alat Berat & Crane / Keruntuhan & Robohnya Struktur", ne: "माथिबाट खस्नु / क्रेन वा हेभी मेसिनको दुर्घटना / संरचना भत्कनु वा पुरिनु" },
        { ja: "熱中症 ／ 腰痛 ／ 擦り傷", id: "Heatstroke / Sakit Pinggang / Luka Gores", ne: "हिटस्ट्रोक / कम्मर दुख्नु / कोतरिनु" },
        { ja: "指の切り傷 ／ 風邪 ／ 道具の紛失", id: "Luka Iris Jari / Flu / Alat Hilang", ne: "औंला काटिनु / रुघाखोकी / सामान हराउनु" },
        { ja: "寝坊 ／ 遅刻 ／ 言葉遣いのミス", id: "Kesiangan / Terlambat / Salah Ucap", ne: "ढिलो उठ्नु / ढिला हुनु / बोली बिग्रनु" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.181〜184参照】建設業の死亡災害の約7割以上が「墜落・転落」「建設機械・クレーン等」「土砂や構造物の倒壊・崩壊」の3大災害で占められています。",
      expId: "3 jenis musibah paling mematikan: Jatuh dari ketinggian, Tertabrak/terjepit alat berat & crane, serta Tertimbun longsor/runtuhan.",
      expNe: "मृत्यु हुने मुख्य ३ कारणहरू हुन्: माथिबाट खस्नु, क्रेन वा मेसिनमा च्यापिनु, र पर्खाल वा माटोको ढिस्कोले पुरिनु।"
    },
    {
      cat: "第7章 安全施工サイクル（P.185〜186）",
      q: "現場で毎日繰り返される「安全施工サイクルの日常業務」において、**始業前（朝一番）に実施すべき活動の順序**として最も適切なものはどれですか。",
      q_id: "Manakah urutan kegiatan awal kerja pagi yang PALING BENAR dalam Siklus Konstruksi Aman (Anzen Sekou Cycle) harian?",
      q_ne: "दैनिक 'सुरक्षा निर्माण चक्र' मा बिहान काम सुरु गर्नुअघि गरिने क्रियाकलापहरूको सही क्रम कुन हो?",
      options: [
        { ja: "朝礼（ラジオ体操・指示連絡） ➔ 安全ミーティング（KY活動・危険予知） ➔ 現場巡回・作業前の用具点検", id: "Apel Pagi (Senam & Briefing) -> Rapat K3 Tim (Aktivitas KY) -> Patroli Lapangan & Cek Perkakas Mandiri", ne: "बिहानी बैठक (कसरत र निर्देशन) -> सुरक्षा बैठक (खतरा अनुमान/KY) -> फिल्ड निरीक्षण र औजार जाँच" },
        { ja: "いきなり高所作業を開始 ➔ 昼休みに朝礼 ➔ 夕方に体操", id: "Langsung kerja di ketinggian -> Apel saat istirahat siang -> Senam sore", ne: "सिधै माथि गएर काम थाल्ने -> दिउँसो बैठक -> साँझ कसरत" },
        { ja: "道具の片付け ➔ 終礼 ➔ 朝礼", id: "Merapikan alat -> Evaluasi sore -> Apel pagi", ne: "सामान थन्काउने -> साँझको बैठक -> बिहानको बैठक" },
        { ja: "朝礼を中止して全員で現場事務所のテレビを見る", id: "Membatalkan apel dan menonton TV di kantor proyek", ne: "बैठक बन्द गरेर टिभी हेर्ने" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.185〜186参照】毎朝の安全施工サイクルは、全員参加の朝礼（体操・連絡）から始まり、各職種ごとのKY活動（安全ミーティング）、作業前の設備・保護具点検を経て作業に入ります。",
      expId: "Urutan pagi wajib: Apel umum (Radio Taiso & info) -> KYT kelompok kerja -> Pengecekan alat & area sebelum kerja dimulai.",
      expNe: "बिहान पहिले सबै मिलेर कसरत र बैठक गर्ने, त्यसपछि टोलीको KY बैठकमा खतरा छलफल गर्ने र औजार जाँचेर मात्र काम थाल्ने।"
    },
    {
      cat: "第7章 新規入場者教育（P.188）",
      q: "工事現場に初めて入場する作業員に対して行う「**新規入場者教育**」において、職長や管理者が必ず伝えなければならない重要事項はどれですか。",
      q_id: "Manakah informasi vital yang WAJIB disampaikan saat 'Edukasi Pekerja Masuk Baru' (Shinki Nyuujousha Kyouiku) di hari pertama masuk proyek?",
      q_ne: "पहिलोपटक कार्यस्थलमा पस्ने नयाँ कामदारलाई दिइने अभिमुखीकरण तालिममा शोकुचोले अनिवार्य सिकाउनुपर्ने मुख्य कुरा के हो?",
      options: [
        { ja: "現場固有の安全ルール・立入禁止区域・避難経路および緊急時連絡体制", id: "Aturan K3 khas proyek tersebut, area dilarang melintas, denah jalur evakuasi darurat, dan nomor kontak darurat", ne: "त्यस कार्यस्थलको आफ्नै सुरक्षा नियम, पस्न निषेध गरिएको ठाउँ, आपतकालीन भाग्ने बाटो र आपतकालीन सम्पर्क नम्बरहरू" },
        { ja: "元請の所長の家族構成と休日のスケジュール", id: "Susunan keluarga dan jadwal liburan kepala pengawas utama", ne: "कम्पनीका हाकिमको परिवार र बिदाको तालिका" },
        { ja: "現場事務所の自動販売機のジュースの値段一覧", id: "Daftar harga minuman di mesin penjual otomatis kantor proyek", ne: "चिया-कफीको मूल्य सूची" },
        { ja: "10年後の建物の修繕計画の見積もり金額", id: "Estimasi biaya perbaikan gedung 10 tahun mendatang", ne: "१० वर्षपछिको मर्मत खर्चको हिसाब" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.188参照】新規入場者教育では、現場配置図、退避場所・避難経路、立入禁止区域、安全設備の位置、元請の安全指示事項を徹底教育します。",
      expId: "Pekerja baru wajib paham denah bahaya, jalur evakuasi darurat gempa/kebakaran, rambu dilarang masuk, dan alur pelaporan bahaya.",
      expNe: "नयाँ कामदारलाई कहाँ जान हुन्न, खतरा कहाँ छ, आपत पर्दा कता भाग्ने र कसलाई खबर गर्ने भन्ने कुरा पहिलो दिनमै सिकाउनुपर्छ।"
    },
    {
      cat: "第7章 安全装備（P.189）",
      q: "高さ2m以上の高所作業において使用が義務付けられている「**フルハーネス型墜落制止用器具**」の着用基準として、正しいものはどれですか。",
      q_id: "Manakah aturan penggunaan yang BENAR mengenai 'Full Body Harness' (Tsuiraku Seishi-you Kigu) pada pekerjaan di ketinggian 2 meter ke atas?",
      q_ne: "२ मिटरभन्दा अग्लो ठाउँमा काम गर्दा अनिवार्य गरिएको 'फुल बडी सेफ्टी हार्नेस' लगाउने सही नियम कुन हो?",
      options: [
        { ja: "腿（もも）・胸・肩のベルトを体にフィットするように確実に締め、ショックアブソーバ付きランヤードのフックを堅固な構造物に掛ける", id: "Kencangkan tali paha, dada, dan bahu pas di badan, lalu kaitkan hook lanyard bershock-absorber ke struktur penahan yang kokoh", ne: "तिघ्रा, छाती र काँधका फित्ताहरू शरीरमा ठिक्क हुने गरी कस्ने, र शक-एब्जर्बर भएको डोरीको हुकलाई बलियो संरचनामा अड्काउने" },
        { ja: "息苦しいので胸ベルトと腿ベルトを完全に外して肩だけに引っ掛けておく", id: "Melepas total sabuk paha dan dada karena sesak dan hanya menyangkutkannya di bahu", ne: "सास फेर्न गाह्रो भयो भन्दै तिघ्रा र छातीको फित्ता खुल्लै छाडेर काँधमा मात्र झुन्ड्याउने" },
        { ja: "ランヤードのフックは足元より下の細い針金に引っ掛けて作業する", id: "Mengaitkan hook ke kawat tipis di bawah telapak kaki", ne: "हुकलाई खुट्टा मुनिको पातलो तारमा अड्काएर काम गर्ने" },
        { ja: "ヘルメットのアゴ紐を外した状態でフルハーネスを着用する", id: "Memakai harness tetapi melepas tali dagu helm pengaman", ne: "हेल्मेटको चिउँडोको डोरी फुकालेर काम गर्ने" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.189参照】フルハーネスは正しく密着装着しないと落下時に体が抜け出したり圧迫で重傷を負います。ランヤードは腰より高い位置の頑丈な親綱等に確実に掛けます。",
      expId: "Full harness harus dikencangkan pas di tubuh (bahu, dada, paha). Hook lanyard wajib dikaitkan ke titik jangkar di atas pinggang.",
      expNe: "हार्नेस खुकुलो भए खस्दा शरीर फुत्किने खतरा हुन्छ। शरीरमा टपक्क मिल्ने गरी बाँध्ने र हुक कम्मरभन्दा माथिको बलियो ठाउँमा अड्काउनुपर्छ।"
    },
    {
      cat: "第7章 熱中症の症状と応急措置（P.190）",
      q: "夏季の現場で作業員が「めまい・立ちくらみ・大量の発汗・筋肉のけいれん」を訴えた際、**職長が取るべき緊急処置**として誤っているものはどれですか。",
      q_id: "Manakah tindakan yang SALAH jika seorang pekerja mengalami gejala awal heatstroke (pusing, keringat mengucur deras, dan kram otot)?",
      q_ne: "गर्मीमा कामदारलाई रिङ्गटा लाग्ने, अत्यधिक पसिना आउने र मांसपेशी बाउँडिने (हिटस्ट्रोकका लक्षण) देखिँदा गर्न नहुने 'गलत' काम कुन हो?",
      options: [
        { ja: "「根性が足りない」と叱責し、冷房のない炎天下の直射日光下で一人で作業を続けさせる", id: "Memarahinya 'kurang bermental baja' dan memaksanya terus bekerja sendirian di bawah terik matahari tanpa AC", ne: "'जाँगर चलेन' भनेर गाली गर्ने र घाममै एक्लै काम गरिरहन लगाउने" },
        { ja: "直ちに涼しい日陰や冷房の効いた休憩所に移動させ、衣服を緩めて体を休ませる", id: "Segera bawa ke tempat teduh/ber-AC yang sejuk, lalu longgarkan pakaian kerjanya", ne: "तुरुन्तै शीतल छहारी वा एसी भएको कोठामा लैजाने र कपडा खुकुलो पारेर सुताउने" },
        { ja: "首の周り、脇の下、太ももの付け根などに冷却材や氷をあてて太い血管を冷やす", id: "Kompres es/air dingin di area leher, ketiak, dan pangkal paha untuk mendinginkan aliran darah", ne: "घाँटीको वरिपरि, काखीमुनि र तिघ्राको जोर्नीमा बरफ वा चिसो पानी राखेर रगतको नसा चिस्याउने" },
        { ja: "意識がはっきりしていれば、冷たい水や塩分・スポーツドリンクを自力で飲ませる", id: "Jika korban sadar jelas, berikan air dingin, garam, atau minuman isotonik secara mandiri", ne: "होश छ भने चिसो पानी, जीवनजल वा स्पोर्ट्स ड्रिंक आफैं पिउन दिने" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.190参照】熱中症の兆候を見逃すと数十分で意識を失い命を落とします。直ちに涼しい場所へ移し、冷却措置（首・脇・股の冷却）と水分塩分補給を行います。自力で飲めない場合は即救急車を呼びます。",
      expId: "Memaksa pekerja bekerja saat gejala heatstroke adalah tindakan fatal mematikan. Wajib evakuasi ke tempat dingin, kompres es, dan beri elektrolit.",
      expNe: "गर्मीमा बिरामी परेको मान्छेलाई जबर्जस्ती काम लगाउनु ज्यान मार्नु जस्तै हो। तुरुन्त चिसो ठाउँमा लगेर घाँटी र काखी चिस्याई जीवनजल दिनुपर्छ।"
    },
    {
      cat: "第7章 安全標識・マーク（P.191）",
      q: "現場で使われる安全マークのうち、**「緑十字（りょくじゅうじ）」**が象徴している意味は何ですか。",
      q_id: "Apakah makna lambang 'Palang Hijau' (Ryokujuuji) yang selalu terpasang di helm dan papan proyek konstruksi Jepang?",
      q_ne: "जापानी कार्यस्थल र हेल्मेटमा राखिने 'हरियो क्रस चिन्ह (हर्ब/रियोकुजुउजी)' ले के अर्थ जनाउँछ?",
      options: [
        { ja: "安全および労働衛生の象徴（安全第一）", id: "Simbol Keselamatan dan Kesehatan Kerja (Safety First / Anzen Dai-ichi)", ne: "औद्योगिक सुरक्षा र स्वास्थ्यको प्रतीक (सुरक्षा पहिलो प्राथमिकता)" },
        { ja: "現場事務所の食堂の目印", id: "Penanda kantin makan kantor proyek", ne: "क्यान्टिन वा खाना खाने ठाउँको चिन्ह" },
        { ja: "産業廃棄物の投棄場所のマーク", id: "Tanda tempat pembuangan sampah industri", ne: "फोहोर फाल्ने डम्पिङ ठाउँ" },
        { ja: "工事が中止になったことを知らせる看板", id: "Plang pengumuman bahwa proyek telah dibatalkan", ne: "काम रद्द भएको सूचना" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.191参照】緑十字（白地に緑色の十字マーク）は日本の産業安全のシンボルマークであり、「安全第一」の精神を表しています。十字の横棒を青色にしたものは「安全衛生旗」として使われます。",
      expId: "Palang Hijau (Ryokujuuji) adalah simbol resmi keselamatan kerja K3 nasional Jepang yang melambangkan slogan 'Utamakan Selamat' (Anzen Dai-ichi).",
      expNe: "'हरियो क्रस' जापानको आधिकारिक औद्योगिक सुरक्षाको प्रतीक चिन्ह हो, जसको अर्थ 'सुरक्षा नै पहिलो प्राथमिकता हो' भन्ने हुन्छ।"
    },
    {
      cat: "第7章 ヒューマンエラーと指差し呼称（P.192〜194）",
      q: "人間が引き起こすヒューマンエラーを防ぐための「指差し呼称（しさこしょう）」について、**正しい動作の手順**はどれですか。",
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
      cat: "第7章 危険行動の注意指導（P.194〜195）",
      q: "高所で安全帯のフックを掛けずに作業している仲間を見かけたとき、**現場の作業員や職長が取るべき最も適切な行動**はどれですか。",
      q_id: "Jika Anda melihat rekan kerja sedang beraktivitas di ketinggian tanpa mencantolkan hook harness, tindakan apakah yang PALING TEPAT?",
      q_ne: "कार्यस्थलमा कुनै साथीले अग्लो ठाउँमा सेफ्टी हार्नेसको हुक नअड्काई काम गरिरहेको देख्नुभयो भने तपाईंले तुरुन्त के गर्नुपर्छ?",
      options: [
        { ja: "重大な墜落事故を防ぐため、その場ですぐに作業を制止し、親綱に確実にフックを掛けるよう強く注意・指導する", id: "Segera hentikan pekerjaannya detik itu juga demi mencegah jatuh fatal, lalu tegur tegas agar mencantolkan hook ke tali pengaman", ne: "ज्यान जाने खतराबाट जोगाउन तत्काल उसलाई काम गर्नबाट रोक्ने र तुरुन्तै सुरक्षा डोरीमा हुक अड्काउन कडा निर्देशन दिने" },
        { ja: "他人の仕事なので関係ないと思い、見なかったことにして通り過ぎる", id: "Berpura-pura tidak melihat dan lewat begitu saja karena menganggap urusan orang lain", ne: "आफ्नो काम होइन भन्दै नदेखे जस्तो गरेर हिँड्ने" },
        { ja: "落ちて怪我をするまで待ってから笑う", id: "Menunggu rekan terjatuh dan terluka baru menertawakannya", ne: "तल खसेर चोट लागेपछि मात्र हाँस्ने" },
        { ja: "足場を揺らして驚かせる", id: "Menggoyang-goyangkan perancah untuk mengagetkannya", ne: "तर्साउन खटलाई हल्लाइदिने" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.194〜195参照】危険行動（不安全行動）の放置は重大災害に直結します。職種や上下関係に関係なく、その場ですぐに作業を止めて安全な手順（フック掛け）を実行させることが命を守る鉄則です。",
      expId: "Melihat bahaya K3 wajib langsung dihentikan di tempat tanpa kompromi. Saling mengingatkan (koegake) adalah kunci keselamatan nyawa.",
      expNe: "खतरा देख्ने बित्तिकै तत्काल रोक्नुपर्छ। साथीलाई सचेत गराएर हुक अड्काउन लगाउनाले उसको अमूल्य जीवन जोगिन्छ।"
    },
    {
      cat: "第7章 職長としての安全責任（P.195〜196）",
      q: "特定技能2号の職長として、**「自らの班の無事故・無災害」を達成するために最も不可欠な日々の心構え**はどれですか。",
      q_id: "Manakah sikap mental harian yang PALING MUTLAK bagi Shokucho pemegang visa Tokutei Ginou 2 demi mencapai Zero-Accident di kelompoknya?",
      q_ne: "तोकुतेइ गिनौ २ का एक कुशल शोकुचोले आफ्नो टोलीलाई दुर्घटनामुक्त (जिरो एक्सिडेन्ट) बनाउन सधैं मनमा राख्नुपर्ने अनिवार्य सोच कुन हो?",
      options: [
        { ja: "「安全は何よりも全てに優先する」という信念を持ち、自らルールを守って率先垂範し、作業員と対話して危険を摘み取る", id: "Memegang teguh prinsip 'Keselamatan di Atas Segalanya', memberi teladan disiplin diri, serta aktif berdialog untuk membasmi potensi bahaya", ne: "'सुरक्षा नै सबैभन्दा माथि हो' भन्ने दृढ विश्वास लिई आफैं नियम मानेर उदाहरण बन्ने, र कामदारसँग दैनिक संवाद गरी जोखिम हटाउने" },
        { ja: "納期さえ間に合えば、多少の安全ルール違反や怪我は仕方がないと割り切る", id: "Memaklumi pelanggaran K3 dan luka ringan asalkan target jadwal tercapai", ne: "काम समयमा सकिने भए थोरै नियम मिच्नु वा चोट लाग्नु सामान्य हो भनी सोच्ने" },
        { ja: "安全の注意は書類の上だけで行い、現場では作業員に完全に丸投げする", id: "Hanya tertib di atas kertas laporan dan lepas tangan membiarkan pekerja di lapangan", ne: "कागजमा मात्र सुरक्षाको कुरा देखाउने तर फिल्डमा कामदारलाई वास्तै नगर्ने" },
        { ja: "事故が起きたらすべて作業員の不注意のせいにして自分は責任を取らない", id: "Menyalahkan kecerobohan pekerja saat insiden dan lari dari tanggung jawab", ne: "दुर्घटना भएपछि सबै दोष कामदारमाथि थोपरेर आफू पानीमाथिको ओभानो बन्ने" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.195〜196参照】職長は現場の安全の最高責任者です。「生産性や利益より安全が最優先」という揺るぎない信念を持ち、毎日の声がけと点検で作業員の命を守り抜きます。",
      expId: "Filosofi K3: Keselamatan selalu nomor satu mengalahkan kecepatan dan biaya. Mandor harus memimpin lewat keteladanan nyata di lapangan.",
      expNe: "शोकुचो कार्यस्थलको सुरक्षाको मुख्य रक्षक हो। नाफा वा गतिभन्दा सुरक्षा सधैं अगाडि हुन्छ भन्ने कुरा व्यवहारमा देखाउनुपर्छ।"
    }
  ]
};
