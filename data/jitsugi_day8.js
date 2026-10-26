const CURRENT_QUIZ_DATA = {
  title: "実技⑧：<ruby>安全衛生管理<rt>あんぜんえいせいかんり</rt></ruby>とヒューマンエラー<ruby>防止<rt>ぼうし</rt></ruby>（P.179〜194）",
  key: "score_jitsugi_8",
  passScore: 70,
  questions: [
    {
      cat: "第7章 はしご・脚立の安全基準（P.184）",
      q: "現場で「はしご」や「脚立」を使用して作業する際の安全管理として、**正しいルール**はどれですか。",
      q_id: "Manakah aturan keselamatan yang BENAR saat menggunakan tangga lurus atau tangga lipat di lokasi proyek?",
      q_ne: "कार्यस्थलमा सिधा भर्याङ वा दोहोरो भर्याङ (क्याताचु) प्रयोग गर्दा पालना गर्नुपर्ने सही नियम कुन हो?",
      options: [
        { ja: "はしごは上端・下端を堅固に固定して下端の滑り止めを確認し、脚立では天板に乗ったり跨いだりして作業しない", id: "Kunci kuat ujung atas & bawah tangga lurus, cek karet anti-selip, dan DILARANG berdiri/mengangkang di anak tangga teratas tangga lipat", ne: "भर्याङको टुप्पो र फेद बलियोसँग बाँध्ने, मुनिको रबर जाँच्ने र क्याताचुको टुप्पोमाथि खुट्टा राखेर वा घोडा जस्तो चढेर काम नगर्ने" },
        { ja: "両手に工具箱を持ったまま、バランスを取ってはしごを駆け上がる", id: "Menaiki tangga sambil kedua tangan memegang kotak perkakas", ne: "दुवै हातमा औजारको बाकस बोकेर भर्याङ उक्लने" },
        { ja: "作業高さが足りないときは、脚立の上にビールケースを重ねてその上に立つ", id: "Menumpuk peti minuman di atas tangga lipat jika tinggi kerja kurang", ne: "उचाइ नपुगे भर्याङ माथि बाकस थपेर त्यसमाथि उभिने" },
        { ja: "はしごが倒れないように、通りがかりの通行人に手で支えさせておく", id: "Menyuruh pejalan kaki yang lewat untuk memegangi tangga", ne: "बाटो हिँड्ने मान्छेलाई भर्याङ समात्न लगाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.184参照】脚立の天板に乗る・跨がる作業や、両手に物を持っての昇降は厳禁です[cite: 48]。はしごは上端または下端の固定、滑り止め状態の確認が必須です[cite: 48]。",
      expId: "Pegang prinsip 3 titik tumpu saat naik tangga. Dilarang berdiri di anak tangga paling atas dan wajib ikat ujung tangga agar tidak tergelincir.",
      expNe: "भर्याङ चढ्दा सधैं हात खुट्टाको सन्तुलन मिलाउने र क्याताचुको सबैभन्दा माथिल्लो भागमा उभिएर काम गर्न कडा निषेध छ।"
    },
    {
      cat: "第7章 新規入場者教育の実施時期（P.188）",
      q: "工事現場における「新規入場者教育」について、**実施すべきタイミングと時間**として最も適切なものはどれですか。",
      q_id: "Kapan waktu pelaksanaan dan berapa lama durasi standar untuk 'Edukasi Pekerja Masuk Baru' (Shinki Nyuujousha Kyouiku)?",
      q_ne: "नयाँ कार्यस्थलमा काम सुरु गर्नुअघि दिइने अभिमुखीकरण तालिम (नयाँ कामदार तालिम) कहिले र कति समय दिनुपर्छ?",
      options: [
        { ja: "初めて現場に入り作業を開始する「当日の作業前」に、現場事務所等で30分程度実施する", id: "Dilakukan 'Sebelum mulai kerja di hari pertama' masuk proyek, di ruang rapat kantor proyek selama sekitar 30 menit", ne: "पहिलोपटक कार्यस्थलमा छिर्ने 'दिनको काम सुरु हुनुअघि नै', साइट अफिसमा करिब ३० मिनेट जति दिने" },
        { ja: "工事がすべて完了して現場を引き渡す日の夕方に実施する", id: "Dilakukan sore hari setelah seluruh proyek selesai serah terima", ne: "काम सकिएर घर फर्कने दिनको साँझमा दिने" },
        { ja: "入場してから1ヶ月ほど経過して、現場に慣れてから実施する", id: "Dilakukan setelah 1 bulan bekerja agar pekerja terbiasa dulu", ne: "काम गरेको १ महिनापछि बानी परेपछि दिने" },
        { ja: "朝礼のラジオ体操の途中で10秒だけ口頭で注意して終わらせる", id: "Hanya bicara 10 detik saat senam pagi apel umum", ne: "बिहान कसरत गर्दागर्दै १० सेकेन्डमा मुखले मात्र भनेर सक्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.188参照】建設現場での死亡災害の半数近くが入場1週間以内に発生しています[cite: 52]。そのため、作業を開始する「当日の作業前」に30分程度、危険箇所やルールを教育します[cite: 52]。",
      expId: "Sebagian besar kecelakaan fatal terjadi pada minggu pertama pekerja baru masuk. Edukasi wajib diberikan sebelum jam kerja hari pertama dimulai.",
      expNe: "धेरैजसो दुर्घटना काम सुरु गरेको पहिलो हप्तामै हुने भएकोले, पहिलो दिन काम थाल्नुअघि नै अनिवार्य ३० मिनेट तालिम दिनुपर्छ।"
    },
    {
      cat: "第7章 熱中症予防：WBGT値と管理者の措置（P.190〜191）",
      q: "夏季の現場管理において、熱中症を防ぐために**現場所長や職長が行うべき環境整備・措置**として誤っているものはどれですか。",
      q_id: "Manakah tindakan yang SALAH dilakukan pengawas proyek dalam mencegah sengatan panas (heatstroke) di musim panas?",
      q_ne: "गर्मी महिनामा कामदारलाई हिटस्ट्रोक हुनबाट जोगाउन कार्यस्थलमा गर्न नहुने 'गलत' काम कुन हो?",
      options: [
        { ja: "WBGT（暑さ指数）が危険レベルに達しても、納期を守るために休憩時間を削って連続作業を命じる", id: "Mengurangi jam istirahat dan memaksa lembur terus-menerus demi mengejar deadline meski angka WBGT berbahaya", ne: "गर्मीको खतरा सूचकांक (WBGT) उच्च हुँदा पनि काम सक्नका लागि आराम गर्ने समय घटाएर लगातार काममा जोत्नु" },
        { ja: "エアコン付きの涼しい休憩所を整備し、冷蔵庫・製氷機・飲料水給水器を設置する", id: "Menyediakan ruang istirahat ber-AC, kulkas, pembuat es batu, dan dispenser air minum gratis", ne: "एसी भएको चिसो कोठा, फ्रिज, बरफ मेसिन र चिसो पानी पिउने ठाउँको व्यवस्था गर्नु" },
        { ja: "大型扇風機や遮光ネット、ドライミストを現場に設置して作業環境温度を下げる", id: "Memasang blower kipas besar, paranet peneduh, dan mist sprayer kabut air di area kerja", ne: "ठूला पंखा, घाम छेक्ने जाली र पानीको बाफ छर्कने मेसिन राखेर गर्मी घटाउनु" },
        { ja: "猛暑日には、出勤時刻や退社時刻を早めるサマータイム等の調整を検討する", id: "Menyesuaikan jam kerja lebih pagi agar pekerja pulang sebelum puncak terik siang hari", ne: "चर्को घामबाट जोगिन बिहान सबेरै काम सुरु गरेर दिउँसो छिट्टै छुट्टी दिने तालिका बनाउनु" }
      ],
      answer: 0,
      expJa: "【テキスト P.190〜191参照】WBGT値が高い時に休憩を削ることは生命の危機に直結します[cite: 54, 55]。冷房休憩所の整備、製氷機・水分の確保、作業時間の調整等により熱中症を予防します[cite: 55]。",
      expId: "Memaksa pekerja bekerja tanpa istirahat saat suhu ekstrem adalah pelanggaran keselamatan fatal. Sediakan peneduh, es, dan air elektrolit.",
      expNe: "चर्को गर्मीमा आराम गर्न नदिई काम लगाउनु ज्यानमारा काम हो। शीतल छहारी, बरफ र प्रशस्त पानीको व्यवस्था गर्नुपर्छ।"
    },
    {
      cat: "第7章 安全標識：緑十字と安全衛生旗（P.191）",
      q: "日本の建設現場で掲げられる**「安全衛生旗」のデザイン**として正しいものはどれですか。",
      q_id: "Manakah deskripsi desain yang BENAR mengenai Bendera K3 (Anzen Eisei-ki) yang dikibarkan di proyek konstruksi Jepang?",
      q_ne: "जापानको कार्यस्थलमा फहराइने 'सुरक्षा तथा स्वास्थ्य झण्डा (आन्जेन एइसेइ-की)' को सही डिजाइन कुन हो?",
      options: [
        { ja: "白地に、緑十字の横棒部分に青色のラインが入った十字マーク（緑が安全、青白が衛生を象徴）", id: "Latar putih dengan Palang Hijau yang memiliki garis biru horizontal di tengah palang (Hijau: Keselamatan, Biru: Kesehatan)", ne: "सेतो पृष्ठभूमिमा हरियो क्रस, जसको तेर्सो भागमा नीलो धर्को भरिएको हुन्छ (हरियोले सुरक्षा र नीलोले स्वास्थ्य जनाउँछ)" },
        { ja: "黒地に赤色でドクロが描かれたマーク", id: "Latar hitam dengan gambar tengkorak merah", ne: "कालो कपडामा रातो खप्पर भएको" },
        { ja: "黄色い三角の中に黒い感嘆符（！）が入ったマーク", id: "Segitiga kuning dengan tanda seru hitam", ne: "पहेंलो त्रिभुजभित्र कालो आश्चर्यबोधक चिन्ह" },
        { ja: "赤と白のストライプで工事中止を知らせるマーク", id: "Garis-garis merah putih penanda proyek ditutup", ne: "रातो र सेतो धर्का भएको झण्डा" }
      ],
      answer: 0,
      expJa: "【テキスト P.191参照】「緑十字」は安全のシンボルで、「安全衛生旗」は緑十字に衛生を象徴する青色の十字（横ライン）を組み合わせたデザインです[cite: 55]。",
      expId: "Bendera K3 Jepang (Anzen Eiseiki) memadukan warna hijau (keselamatan kerja) dan warna biru (kesehatan kerja) di atas latar putih.",
      expNe: "जापानको सुरक्षा झण्डामा हरियो (सुरक्षा) र नीलो (स्वास्थ्य) रङ मिसाएर क्रस चिन्ह बनाइएको हुन्छ।"
    },
    {
      cat: "第7章 ヒューマンエラー：認知ミス（P.192）",
      q: "ヒューマンエラーの原因分類のうち、**「思い込みが原因で、相手の指示やクレーンの合図を見間違えてしまうエラー」**は何ですか。",
      q_id: "Dalam klasifikasi human error, apa sebutan untuk kesalahan yang timbul akibat asumsi keliru sehingga salah mengartikan instruksi rekan?",
      q_ne: "मानिसबाट हुने गल्तीहरू मध्ये, 'आफ्नै मनगढन्ते सोचका कारण साथीको इसारा वा क्रेनको संकेत गलत बुझ्ने' गल्तीलाई के भनिन्छ?",
      options: [
        { ja: "認知ミス（にんちミス）", id: "Ninchi Miss (Salah Persepsi / Asumsi Keliru)", ne: "निन्ची मिस (बुझाइमा हुने भ्रम / गलत अनुमान)" },
        { ja: "疲労", id: "Hirou (Kelelahan Fisik)", ne: "हिरौ (शारीरिक थकान)" },
        { ja: "パニック", id: "Panic (Kepanikan)", ne: "प्यानिक (आत्तिनु)" },
        { ja: "不注意", id: "Fuchuui (Kurang Fokus / Ceroboh)", ne: "फुचूई (असावधानी)" }
      ],
      answer: 0,
      expJa: "【テキスト P.192参照】「この場面ではこう指示が来るはずだ」という先入観や思い込みによって、指示や合図を見誤るエラーを「認知ミス」と呼びます[cite: 56]。",
      expId: "Ninchi miss adalah kesalahan akibat berasumsi duluan sehingga mata/telinga keliru menangkap aba-aba rekan kerja.",
      expNe: "यस्तै निर्देशन आउँछ होला भनी पहिले नै मनमा सोच्नाले संकेत गलत बुझिनुलाई 'निन्ची मिस' भनिन्छ।"
    },
    {
      cat: "第7章 ヒューマンエラー：不注意（P.192）",
      q: "前方の作業に過度に集中しすぎたため、**足元の開口部や背後の穴に気づかずに転落してしまうようなエラー**はどれに分類されますか。",
      q_id: "Kategori human error manakah yang menjelaskan situasi pekerja terlalu fokus pada satu titik di depan hingga tidak sadar ada lubang di belakangnya lalu jatuh?",
      q_ne: "अगाडिको काममा मात्र धेरै ध्यान दिँदा, पछाडिको खाल्डो नदेखेर खस्ने दुर्घटना कुन गल्तीमा पर्दछ?",
      options: [
        { ja: "不注意（集中による周囲への注意力低下）", id: "Fuchuui (Kurang Perhatian terhadap Sekitar akibat Terlalu Fokus)", ne: "फुचूई (एउटै कुरामा मात्र घोरिँदा वरिपरिको होस गुम्नु)" },
        { ja: "近道行動", id: "Chikamichi Koudou (Jalan Pintas)", ne: "सर्टकट बाटो हिँड्ने गल्ती" },
        { ja: "知識不足", id: "Chishiki Busoku (Kurang Pengetahuan)", ne: "ज्ञानको कमी" },
        { ja: "集団欠陥", id: "Shuudan Kekkan (Cacat Kelompok)", ne: "समूहको दबाब" }
      ],
      answer: 0,
      expJa: "【テキスト P.192参照】1つの作業に集中しすぎると周囲への注意力が低下し、背後の危険や足元の穴に気づかず墜落するなどの「不注意」による事故が発生します[cite: 56]。",
      expId: "Terlalu fokus pada satu titik bisa membutakan pandangan dari bahaya di sekelilingnya (tunnel vision). Ini tergolong 'Fuchuui'.",
      expNe: "एउटा काममा मात्र मग्न हुँदा वरिपरिको खतरा देखिँदैन। यसलाई असावधानी (फुचूई) भनिन्छ।"
    },
    {
      cat: "第7章 ヒューマンエラー：慣れによる手抜き（P.193）",
      q: "作業に熟練して自信がつくことで、**「初心者の頃は守っていた安全確認や保護具の着用を省略してしまうエラー」**はどれですか。",
      q_id: "Kesalahan apakah yang timbul saat pekerja merasa sudah sangat ahli sehingga mulai menggampangkan SOP dan melepas APD?",
      q_ne: "काममा धेरै अनुभवी र बानी परेपछि घमण्ड बढेर, 'नयाँ छँदा मान्ने गरेका सुरक्षा नियम र सेफ्टी बेल्ट लगाउन छोड्ने' गल्ती कुन हो?",
      options: [
        { ja: "慣れによる手抜き", id: "Nare ni yoru Tenuki (Keteledoran akibat Terlalu Terbiasa / Overconfidence)", ne: "बानी परेकाले गरिने लापरबाही (घमण्डले नियम मिच्नु)" },
        { ja: "経験不足", id: "Kurang Pengalaman", ne: "अनुभवको कमी" },
        { ja: "場面行動本能", id: "Refleks Situasional Spontan", ne: "अचानक गरिने व्यवहार" },
        { ja: "心身の機能低下", id: "Penurunan Fungsi Fisik Usia Lanjut", ne: "उमेरले गर्दा शरीर कमजोर हुनु" }
      ],
      answer: 0,
      expJa: "【テキスト P.193参照】仕事に慣れて自信がつくと気持ちが緩み、手順を飛ばす「慣れによる手抜き」が起こります[cite: 57]。ベテランであっても基本の安全点検の徹底が必須です[cite: 57]。",
      expId: "Terlalu terbiasa (nare) membuat orang merasa kebal kecelakaan sehingga tergoda memangkas SOP. Ini pemicu utama cedera pekerja senior.",
      expNe: "काममा जतिसुकै पुरानो भए पनि 'मलाई केही हुन्न' भन्दै नियम मिच्नु ठूलो गल्ती हो।"
    },
    {
      cat: "第7章 ヒューマンエラー：集団欠陥（P.193）",
      q: "工期が厳しく遅れそうな現場において、**「早く終わらせるためなら、多少の不安全行動をとっても仕方がない」という同調圧力が職場で生まれてしまうエラー**は何ですか。",
      q_id: "Apakah istilah untuk human error kelompok di mana muncul suasana 'wajar melanggar K3 demi mengejar target jadwal'?",
      q_ne: "काम समयमा सक्न ढिलो हुन लाग्दा, 'छिटो सक्नका लागि थोरै नियम मिच्नु स्वभाविक हो' भन्दै समूह मिलेर नियम उल्लंघन गर्ने गल्तीलाई के भनिन्छ?",
      options: [
        { ja: "集団欠陥（しゅうだんけっかん）", id: "Shuudan Kekkan (Cacat Mentalitas Kelompok / Groupthink Error)", ne: "शूदान केक्यान (समूहगत कमजोरी / समूहको दबाब)" },
        { ja: "認知ミス", id: "Salah Persepsi Individu", ne: "व्यक्तिगत भ्रम" },
        { ja: "疲労", id: "Kelelahan Tubuh", ne: "थकान" },
        { ja: "加齢による機能低下", id: "Penurunan Fisik Lansia", ne: "बुढ्यौली" }
      ],
      answer: 0,
      expJa: "【テキスト P.193参照】工期に追われると「不安全行動も仕方がない」という雰囲気が集団内に生まれがちです（集団欠陥）[cite: 57]。人命・安全がすべてに優先します[cite: 57]。",
      expId: "Shuudan Kekkan adalah penyakit kompromi kelompok yang mengabaikan K3 demi target waktu. Keselamatan nyawa harus selalu nomor satu.",
      expNe: "कामको हतारो छ भन्दैमा पूरै समूहले सुरक्षा नियम मिच्नु 'शूदान केक्यान' हो। समयभन्दा ज्यान ठूलो हुन्छ।"
    },
    {
      cat: "第7章 ヒューマンエラー：場面行動本能（P.193）",
      q: "高所や脚立の上でバランスを崩して倒れそうになった瞬間、**反射的に持っていた工具を放り投げてしまい、階下の作業員に直撃するような突発的行動**を何と呼びますか。",
      q_id: "Apa istilah psikologi kerja untuk refleks spontan melempar alat demi menyelamatkan diri saat nyaris jatuh, yang justru mencelakai rekan di bawah?",
      q_ne: "भर्याङबाट लड्न लाग्दा आफ्नो ज्यान जोगाउन हातको औजार हतारिएर तल फालिदिने र तलको मान्छेलाई लाग्ने दुर्घटना कुन स्वभावमा पर्छ?",
      options: [
        { ja: "場面行動本能（ばめんこうどうほんのう）", id: "Bamen Koudou Honnou (Insting Refleks Situasional)", ne: "बामेन कोउदौ होन्नौ (आपत पर्दा दिमागले गर्ने अनियन्त्रित हर्कत)" },
        { ja: "知識不足", id: "Kurang Pengetahuan", ne: "ज्ञान नहुनु" },
        { ja: "連絡不足", id: "Kurang Komunikasi", ne: "सम्पर्क नहुनु" },
        { ja: "整理整頓の不備", id: "Kurang Ringkas Rapi", ne: "सामान नथन्क्याउनु" }
      ],
      answer: 0,
      expJa: "【テキスト P.193参照】危険に直面した瞬間に身を守ろうとして無我夢中で取る反射的行動を「場面行動本能」と呼びます[cite: 57]。工具落下の防止策（落下防止コード等）が必要です。",
      expId: "Bamen Koudou Honnou adalah gerak refleks panik manusia. Gunakan tali pengikat alat (lanyard tools) agar alat tidak melayang saat refleks terjadi.",
      expNe: "मानिसले आपत पर्दा आफ्नै ज्यान जोगाउन औजार फाल्ने जस्ता अनपेक्षित व्यवहार देखाउँछ। त्यसैले औजारमा सुरक्षा डोरी बाँध्नुपर्छ।"
    },
    {
      cat: "第7章 職長としての挨拶と安全意識（P.194）",
      q: "建設現場において、お互いの安全意識を高め、良好なコミュニケーションを保つために**毎日交わされる最も基本的な挨拶**はどれですか。",
      q_id: "Apakah salam keselamatan kerja paling standar yang diucapkan setiap hari di lokasi proyek Jepang untuk saling mendoakan keselamatan?",
      q_ne: "जापानी कार्यस्थलमा सबैको सुरक्षाको कामना गर्दै दैनिक रूपमा साटासाट गरिने मुख्य अभिवादन (ग्रिटिङ) कुन हो?",
      options: [
        { ja: "「ご安全に！（ごあんぜんに）」", id: "'Go-anzen ni!' (Utamakan Selamat / Semoga Aman!)", ne: "'गो-आन्जेन नि!' (सुरक्षित रहनुहोस्!)" },
        { ja: "「さようなら」", id: "'Sayounara' (Selamat Tinggal)", ne: "'सायोनारा' (बिदा)" },
        { ja: "「おやすみなさい」", id: "'Oyasuminasai' (Selamat Tidur)", ne: "'ओयासुमिनासाइ' (शुभरात्री)" },
        { ja: "「ごちそうさまでした」", id: "'Gochisousama deshita' (Terima kasih atas makanannya)", ne: "'गोचिसौसामा' (खाना मिठो थियो)" }
      ],
      answer: 0,
      expJa: "【テキスト P.194参照】建設現場では「今日も一日ご安全に！」と互いに声を掛け合い、緊張感と安全意識を維持します[cite: 58]。",
      expId: "'Go-anzen ni!' adalah salam khas industri konstruksi Jepang untuk saling mengingatkan agar selamat sampai jam pulang kerja.",
      expNe: "जापानको निर्माण कार्यस्थलमा एकअर्काको जीवन रक्षाको कामना गर्दै सधैं 'गो-आन्जेन नि!' भनिन्छ।"
    }
  ]
};
