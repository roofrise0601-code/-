const CURRENT_QUIZ_DATA = {
  title: "直前フル模試⑥：【本番的中】<ruby>学科<rt>がっか</rt></ruby>40問 ＋ <ruby>実技<rt>じつぎ</rt></ruby>25問（計65問）",
  key: "score_final_moshi_6",
  passScore: 70,
  questions: [
    // ==========================================
    // 【学科試験パート：40問（問1〜問40）】
    // ==========================================
    {
      cat: "学科：クリティカルパスの計算（工程短縮）",
      q: "問1：ネットワーク式工程表において、工事全体の総工期を短縮したい場合、職長や現場管理者が真っ先に対策（人員増や工程見直し）を投入すべき作業経路はどれですか。",
      q_id: "Soal 1: Dalam bagan Network Schedule, jalur kerja manakah yang WAJIB diprioritaskan untuk penambahan tenaga/alat jika ingin memangkas total durasi proyek?",
      q_ne: "प्रश्न १: नेटवर्क कार्यतालिकामा पूरै कामको म्याद छिटो सक्नका लागि शोकुचोले सबैभन्दा पहिले कुन बाटोका कामहरूमा मान्छे थप्नुपर्छ?",
      options: [
        { ja: "クリティカルパス（重点経路）上にある作業（余裕日数がゼロの作業）", id: "Pekerjaan yang berada di Jalur Kritis / Critical Path (yang memiliki float/waktu luang nol)", ne: "क्रिटिकल पाथ (सबैभन्दा मुख्य संवेदनशील बाटो) मा पर्ने कामहरू (जहाँ फुर्सदको समय शून्य हुन्छ)" },
        { ja: "余裕日数（トータルフロート）がたっぷり何十日もある作業", id: "Pekerjaan santai yang punya waktu luang puluhan hari", ne: "धेरै दिन फुर्सदको समय बाँकी भएका सजिला कामहरू" },
        { ja: "すでに工事がすべて完了している過去の作業", id: "Pekerjaan yang sudah selesai 100%", ne: "पहिले नै सम्पन्न भइसकेका पुराना कामहरू" },
        { ja: "プロジェクトに関係のない事務所の清掃作業", id: "Membersihkan kantor yang tidak terkait struktur", ne: "परियोजनासँग सम्बन्ध नभएको सरसफाइ काम" }
      ],
      answer: 0,
      expJa: "【クリティカルパスの短縮】余裕日数（フロート）がある作業を短縮しても全体の工期は1日も縮まりません。全体の期日を決めている「クリティカルパス上の作業」短縮のみが有効です。",
      expId: "Mempercepat jalur santai tidak mengubah deadline akhir. Hanya mempercepat mata rantai Critical Path yang bisa memotong total durasi proyek.",
      expNe: "फुर्सद भएको काम छिटो गरेर म्याद छोट्टिन्न। क्रिटिकल पाथमा रहेका मुख्य कामहरू छिटो गरे मात्र पूरै प्रोजेक्टको समय घट्छ।"
    },
    {
      cat: "学科：労働安全衛生規則の改正（足場の点検者）",
      q: "問2：近年の労働安全衛生規則改正により、足場の組立・変更後の点検において、事業者が指名しなければならない「足場の点検者」の資格要件として正しいものはどれですか。",
      q_id: "Soal 2: Berdasarkan revisi UU K3 Jepang terbaru, kualifikasi apakah yang WAJIB dimiliki orang yang ditunjuk sebagai Pemeriksa Perancah (Ashiba no Tenkensha)?",
      q_ne: "प्रश्न २: जापानी सुरक्षा ऐनको नयाँ संशोधन अनुसार खट बनाएपछि जाँच गर्न कम्पनीले खटाउने 'खट निरीक्षक' सँग कुन योग्यता हुनैपर्छ?",
      options: [
        { ja: "足場の組立て等作業主任者講習修了者、または建築施工管理技士等の法定の点検者実務研修を修了した十分な知識・経験を有する者", id: "Pemegang lisensi Mandor Ahli Perancah (Sagyou Shunensha) atau Insinyur Pelaksana Konstruksi yang telah lulus pelatihan inspeksi resmi", ne: "खट निर्माण कार्य प्रमुख (साग्यो शुनिन्शा) तालिम लिएको व्यक्ति वा इन्जिनियरिङ योग्यता भई आधिकारिक खट निरीक्षण तालिम पूरा गरेको अनुभवी व्यक्ति" },
        { ja: "現場に初めて入ったその日の未経験の作業員", id: "Pekerja magang baru yang belum pernah pegang alat", ne: "पहिलो दिन कार्यस्थलमा आएको कुनै अनुभव नभएको कामदार" },
        { ja: "現場を通りかかった一般の通行人", id: "Warga pejalan kaki yang lewat", ne: "बाटो हिँड्ने अपरिचित बटुवा" },
        { ja: "資格や研修は一切不要で、誰でも勘で点検してよい", id: "Bebas tanpa lisensi apa pun hanya pakai insting", ne: "कुनै तालिम चाहिँदैन जसले जाँचे पनि हुन्छ" }
      ],
      answer: 0,
      expJa: "【足場点検者の要件化】法改正により、点検者の指名と記録保存（工事終了まで）が厳格化されました。作業主任者など十分な能力を持つ者をあらかじめ指名します。",
      expId: "Inspektur perancah wajib resmi ditunjuk dari orang yang memiliki sertifikat Sagyou Shunensha atau pelatihan K3 perancah resmi.",
      expNe: "खटको जाँच गर्ने मान्छे आधिकारिक तालिम प्राप्त हुनैपर्छ। नयाँ नियम अनुसार योग्य निरीक्षकले जाँचेर हस्ताक्षर गर्नुपर्छ।"
    },
    {
      cat: "学科：労働基準法・解雇予告手当",
      q: "問3：労働基準法において、事業主が労働者を解雇しようとする場合、少なくとも何日前に予告しなければならないか、またはその日数分の手当を支払わなければならないですか。",
      q_id: "Soal 3: Berdasarkan UU Standar Ketenagakerjaan Jepang, berapa hari sebelumnya perusahaan wajib memberitahukan surat PHK kepada karyawan?",
      q_ne: "प्रश्न ३: जापानी श्रम कानुन अनुसार कम्पनीले कुनै कामदारलाई कामबाट निकाल्नु (निष्कासन गर्नु) अघि कम्तीमा कति दिन पहिले पूर्व-सूचना दिनुपर्छ वा सो बराबरको तलब तिर्नुपर्छ?",
      options: [
        { ja: "少なくとも「30日前」に予告する（直前の即時解雇の場合は30日分以上の解雇予告手当を支払う）", id: "Minimal '30 HARI SEBELUMNYA' (atau membayar uang kompensasi pesangon minimal 30 hari gaji)", ne: "कम्तीमा '३० दिन अगाडि' सूचना दिनुपर्छ (तुरुन्तै निकाल्ने भए कम्तीमा ३० दिन बराबरको पूरा तलब तिर्नुपर्छ)" },
        { ja: "解雇する1秒前に言えばよい", id: "Cukup 1 detik sebelum dikeluarkan", ne: "१ सेकेन्ड अगाडि भने पुग्छ" },
        { ja: "10年前に予告しなければならない", id: "10 tahun sebelumnya", ne: "१० वर्ष अगाडि" },
        { ja: "予告も手当も一切支払わずに無一文で追い出すことができる", id: "Bebas mengusir tanpa pesangon sepeser pun", ne: "कुनै पैसा नदिई तुरुन्तै निकाल्न पाइने" }
      ],
      answer: 0,
      expJa: "【労基法第20条】労働者の生活保護のため、解雇には「30日前の予告」か「30日分以上の平均賃金（予告手当）」の支払いが絶対条件です。",
      expId: "PHK wajib H-30 hari. Jika di-PHK mendadak hari itu juga, majikan wajib membayar tunjangan 30 hari gaji penuh.",
      expNe: "कामदारलाई कामबाट निकाल्न ३० दिन अगावै भन्नुपर्छ, नत्र ३० दिनको तलब क्षतिपूर्ति बापत दिनैपर्छ।"
    },
    {
      cat: "学科：熱中症警戒アラートと「暑さ指数（WBGT）33以上」",
      q: "問4：気象庁・環境省から「熱中症特別警戒アラート（一段階上の重大警報）」が発表される基準となるWBGT値はどれですか。",
      q_id: "Soal 4: Berapakah angka indeks WBGT yang menjadi pemicu dikeluarkannya 'Peringatan Darurat Khusus Heatstroke' (Necchuushou Tokubetsu Keikai Alert)?",
      q_ne: "प्रश्न ४: मौसम विभागले सबैभन्दा उच्च तहको 'विशेष आपतकालीन हिटस्ट्रोक चेतावनी' जारी गर्ने WBGT गर्मीको मापदण्ड कति हो?",
      options: [
        { ja: "都道府県内のすべての観測地点でWBGT値が「35以上」と予測される場合（通常の熱中症警戒アラートはWBGT「33以上」）", id: "Prediksi nilai WBGT mencapai '35 ke atas' di seluruh wilayah (Peringatan siaga biasa di angka WBGT 33 ke atas)", ne: "सबै ठाउँमा WBGT गर्मीको नाप '३५ भन्दा माथि' पुग्ने अनुमान गरिएको बेला (सामान्य अलर्ट चाहिँ ३३ मा निस्कन्छ)" },
        { ja: "WBGTが10以下の寒い日", id: "WBGT 10 ke bawah", ne: "१० भन्दा कम भएको चिसो दिन" },
        { ja: "気温がマイナス5℃の雪の日", id: "Hari salju minus 5°C", ne: "हिउँ परेको दिन" },
        { ja: "数値の基準はなく知事の気分で決まる", id: "Suka-suka gubernur tanpa angka", ne: "कुनै मापदण्ड नभएको" }
      ],
      answer: 0,
      expJa: "【熱中症特別警戒情報】極めて危険な猛暑（都道府県内全域でWBGT 35以上）の際に発令されます。現場では作業の中止や冷房施設への完全退避を講じます。",
      expId: "Peringatan Siaga Biasa = WBGT 33; Peringatan Darurat Ekstrem Khusus = WBGT 35. Di level ini, operasi luar ruangan wajib ditinjau ulang total.",
      expNe: "WBGT ३३ नाघे अलर्ट आउँछ, र ३५ पुगेमा 'विशेष आपतकाल' लागु हुन्छ। यस्तो बेला घामको काम पूरै रोक्नुपर्छ।"
    },
    {
      cat: "学科：国家資格・建設キャリアアップシステム（レベル判定）",
      q: "問5：建設キャリアアップシステム（CCUS）において、特定技能2号の技能者が目指すべき「能力評価基準（技能レベル）」の最高峰は何ですか。",
      q_id: "Soal 5: Dalam sistem sertifikasi CCUS Jepang, tingkatan level apakah (warna kartu) yang menjadi standar kemampuan seorang Mandor Unggul / Tokutei Ginou 2?",
      q_ne: "प्रश्न ५: CCUS कामदार प्रणालीमा, तोकुतेइ गिनौ २ का कुशल शोकुचोले प्राप्त गर्ने 'दक्षता स्तर (कार्डको रङ)' कुन हो?",
      options: [
        { ja: "レベル3（銀色カード：職長・熟練技能者）または レベル4（金色の最高峰カード：登録基幹技能者・現場統括指導者）", id: "Level 3 (Kartu Silver: Mandor Berpengalaman) atau Level 4 (Kartu Emas Emas: Tokuroku Kikan Ginousha / Kepala Mandor)", ne: "तह ३ (चाँदीको कार्ड: अनुभवी शोकुचो) वा तह ४ (सुनौलो कार्ड: सबैभन्दा उच्च तहको कुशल नेतृत्वकर्ता)" },
        { ja: "レベル1（白色カード：見習い・初級技能者）", id: "Level 1 (Kartu Putih: Pemula)", ne: "तह १ (सेतो कार्ड: नयाँ सिकारु)" },
        { ja: "ブラックカード（借金王カード）", id: "Kartu Hitam Kredit", ne: "कालो कार्ड" },
        { ja: "ポイントカード（スーパーの割引券）", id: "Kartu Diskon Minimarket", ne: "पसलको कार्ड" }
      ],
      answer: 0,
      expJa: "【CCUSカードの4段階】白（Lv1：初級）➔ 青（Lv2：中堅）➔ 銀（Lv3：職長）➔ 金（Lv4：高度熟練・登録基幹技能者）。特定技能2号は銀・金レベルの即戦力リーダーです。",
      expId: "Tingkatan kartu CCUS: Putih (Junior) -> Biru (Menengah) -> Perak (Mandor Shokucho) -> Emas (Kepala Mandor Kikan Ginousha).",
      expNe: "CCUS मा सेतो (१), नीलो (२), चाँदी (३-शोकुचो) र सुनौलो (४-सर्वोच्च विज्ञ) हुन्छ। तोकुतेइ गिनौ २ ले चाँदी वा सुनौलो कार्ड पाउँछन्।"
    },
    {
      cat: "学科：労働安全衛生法・元方安全衛生管理者の選任",
      q: "問6：建設業の特定元方事業者が、混在作業現場において統括安全衛生責任者を補佐させるため、安全の専任実務者として選任しなければならない者は誰ですか。",
      q_id: "Soal 6: Pejabat teknis K3 apakah yang wajib ditunjuk kontraktor utama untuk mendampingi dan membantu tugas administratif Toukatsu Anzen Eisei Sekininsha di proyek?",
      q_ne: "प्रश्न ६: कार्यस्थलका मुख्य सुरक्षा निर्देशक (तोउकाचु) लाई सहयोग गर्न मुख्य कम्पनीले अनिवार्य खटाउने 'सुरक्षा अधिकृत' को हुन्?",
      options: [
        { ja: "元方安全衛生管理者（もとかたあんぜんえいせいかんりしゃ）", id: "Motokata Anzen Eisei Kanrisha (Site Safety Supervisor Kontraktor Utama)", ne: "मोतोकाता आन्जेन एइसेइ कान्रिशा (मुख्य कम्पनीका सुरक्षा प्राविधिक अधिकृत)" },
        { ja: "事務アシスタント", id: "Staf Administrasi Magang", ne: "सहायक कर्मचारी" },
        { ja: "クレーン運転手", id: "Operator Crane", ne: "क्रेन चालक" },
        { ja: "交通警備員", id: "Petugas Satpam Lalu Lintas", ne: "ट्राफिक गार्ड" }
      ],
      answer: 0,
      expJa: "【安衛法第15条の2】特定元方事業者は、統括安全衛生責任者を選任した現場において、その技術的補佐を行う「元方安全衛生管理者」を選任しなければなりません。",
      expId: "Motokata Anzen Eisei Kanrisha adalah tangan kanan dari Toukatsu, bertugas mengawasi implementasi K3 di lapangan secara teknis harian.",
      expNe: "मुख्य कम्पनीका सुरक्षा निर्देशकलाई प्राविधिक सहयोग गर्न खटाइने पूर्णकालीन सुरक्षा प्रमुख 'मोतोकाता कान्रिशा' हुन्।"
    },
    {
      cat: "学科：熱中症と「深部体温の冷えにくさ（蓄熱）」",
      q: "問7：真夏の炎天下で作業中、直射日光を遮る日陰に移動しただけで水分も取らず体を冷やさなかった場合、なぜ熱中症の発症を防げないのですか。",
      q_id: "Soal 7: Mengapa hanya berpindah ke tempat teduh TANPA minum air dan TANPA kompres es TIDAK BISA menghentikan serangan sengatan panas?",
      q_ne: "प्रश्न ७: घाममा काम गर्दागर्दै छहारीमा गएर बस्दैमा, पानी नपिई र शरीर नचिस्याईकन हिटस्ट्रोक हुनबाट किन जोगिन सकिँदैन?",
      options: [
        { ja: "一度体内に蓄積された熱（深部体温の熱）は、人間自身の自然放熱だけでは数時間下がらず、外部から能動的に冷却（氷・水・風）しなければ熱がこもり続けるため", id: "Panas yang terperangkap di dalam organ tubuh tidak bisa turun sendiri hanya dengan berteduh; WAJIB didinginkan aktif memakai es, air, dan angin!", ne: "शरीरको भित्री अंगमा जम्मा भएको तातोपन छहारीमा बस्दैमा आफैं घट्दैन; बाहिरबाट बरफ, पानी र पंखाले जबरजस्ती नचिस्याएसम्म तातो भित्रै गुम्सिरहने भएकाले" },
        { ja: "日陰に入ると幽霊に熱を吸い取られるから", id: "Karena tempat teduh ada hantu", ne: "छहारीमा भूत हुने भएकोले" },
        { ja: "日陰は気温が100℃まで上昇するから", id: "Tempat teduh suhunya 100°C", ne: "छहारी झन् तातो हुने भएकोले" },
        { ja: "体温は日陰に入ると1秒でマイナス10℃まで急降下するから", id: "Suhu anjlok drastis dalam 1 detik", ne: "तापक्रम तत्काल माइनसमा जाने भएकोले" }
      ],
      answer: 0,
      expJa: "【体内の蓄熱の恐怖】脱水した身体は汗が出ず放熱能力を失っています。日陰に入るだけでは深部体温は下がらず熱中症が進行します。水と氷と風で強制冷却します。",
      expId: "Berteduh saja tidak cukup! Tubuh yang dehidrasi seperti mesin radiator kering. Harus disiram air dan ditempel es agar suhunya turun.",
      expNe: "पसिना आउन बन्द भएपछि छहारीमा बसे पनि भित्री तातो घट्दैन। बरफ र पानी लगाएर जबरजस्ती चिस्याउनै पर्छ।"
    },
    {
      cat: "学科：労働基準法・就労制限（年少者・妊産婦）",
      q: "問8：労働基準法において、満18歳未満の年少者を作業に従事させることが固く禁止されている危険有害業務はどれですか。",
      q_id: "Soal 8: Jenis pekerjaan berbahaya apakah yang DILARANG KERAS oleh hukum bagi pekerja di bawah usia 18 tahun (remaja/anak di bawah umur)?",
      q_ne: "प्रश्न ८: श्रम कानुन अनुसार १८ वर्ष मुनिका नाबालिग कामदारहरूलाई काममा लगाउन कडा प्रतिबन्ध लगाइएको 'खतरनाक काम' कुन हो?",
      options: [
        { ja: "深さ5m以上の地山掘削作業、高さ5m以上の足場の組立解体、および最大積載量5トン以上の大型トラックの運転", id: "Penggalian tanah sedalam 5m+, perakitan/pembongkaran perancah di ketinggian 5m+, dan menyopir truk besar kapasitas 5 ton ke atas", ne: "५ मिटरभन्दा गहिरो खाल्डो खन्ने काम, ५ मिटरभन्दा अग्लो खट बनाउने/भत्काउने काम, र ५ टनभन्दा ठूला टिपर गाडी चलाउने काम" },
        { ja: "現場事務所の書類の整理作業", id: "Merapikan berkas di meja kantor", ne: "अफिसको कागजपत्र मिलाउने" },
        { ja: "安全朝礼でのラジオ体操への参加", id: "Ikut senam pagi apel", ne: "बिहानी कसरतमा भाग लिने" },
        { ja: "休憩所にお茶や紙コップを補充する作業", id: "Mengisi gelas kertas di dispenser air", ne: "पानीको कप मिलाउने काम" }
      ],
      answer: 0,
      expJa: "【年少者労働基準規則】満18歳未満の年少者は、クレーン運転、玉掛け、深さ5m以上の掘削、高さ5m以上の高所足場作業など、危険有害業務への就業が禁じられています。",
      expId: "Pekerja usia < 18 tahun DILARANG ditugaskan di ketinggian 5m ke atas atau mengoperasikan alat berat demi perlindungan keselamatan remaja.",
      expNe: "१८ वर्ष मुनिका युवाहरूलाई ५ मिटरभन्दा अग्लो खटमा चढाउन वा ठूला क्रेन-टिपर चलाउन कानुनले कडा रोक लगाएको छ।"
    },
    {
      cat: "学科：建設業法・技術検定制度（1級・2級技士）",
      q: "問9：建設業法に基づく国家資格であり、現場の主任技術者や専任監理技術者となる資格を与える「施工管理技士」の検定種目として誤っているものはどれですか。",
      q_id: "Soal 9: Manakah yang BUKAN merupakan cabang sertifikasi resmi Insinyur Pelaksana Proyek (Sekou Kanri Gishi) di bawah UU Konstruksi Jepang?",
      q_ne: "प्रश्न ९: जापानी निर्माण ऐन अनुसार मान्यता प्राप्त 'इन्जिनियरिङ व्यवस्थापन (सेकौ कान्री गिशी)' को आधिकारिक विधा भित्र 'नपर्ने' कुरा कुन हो?",
      options: [
        { ja: "宇宙旅行施工管理技士", id: "Insinyur Manajemen Wisata Luar Angkasa (Fiktif)", ne: "अन्तरिक्ष यात्रा व्यवस्थापन इन्जिनियर (काल्पनिक)" },
        { ja: "建築施工管理技士（1級・2級）", id: "Insinyur Manajemen Konstruksi Arsitektur Gedung (1-Kyuu / 2-Kyuu)", ne: "भवन निर्माण व्यवस्थापन इन्जिनियर (१ र २ तह)" },
        { ja: "土木施工管理技士（1級・2級）", id: "Insinyur Manajemen Konstruksi Teknik Sipil (Doboku)", ne: "सिभिल निर्माण व्यवस्थापन इन्जिनियर (१ र २ तह)" },
        { ja: "管工事施工管理技士（1級・2級）", id: "Insinyur Manajemen Pekerjaan Perpipaan & Sanitasi (Kan-kouji)", ne: "पाइप तथा प्लम्बिङ व्यवस्थापन इन्जिनियर (१ र २ तह)" }
      ],
      answer: 0,
      expJa: "【施工管理技士の種目】建築、土木、管工事、電気工事、電気通信、造園、建設機械の7種目です。「宇宙旅行」等の種目は存在しません。",
      expId: "7 cabang resmi Sekou Kanri Gishi: Arsitektur, Sipil, Pipa/Mekanikal, Listrik, Telekomunikasi, Lanskap Taman, dan Alat Berat.",
      expNe: "जापानमा भवन, सिभिल, पाइप, बिजुली, सञ्चार, बगैँचा र हेभी मेसिन गरी ७ वटा विधामा मात्र आधिकारिक इन्जिनियरिङ परीक्षा हुन्छ।"
    },
    {
      cat: "学科：熱中症と「現場の空調服バッテリー管理」",
      q: "問10：ファン付き作業服（空調服）の小型リチウムイオンバッテリーを現場で使用・充電する際、火災や爆発事故を防ぐための安全ルールはどれですか。",
      q_id: "Soal 10: Aturan keselamatan apakah yang WAJIB ditaati saat mengisi daya baterai litium baju kipas angin (Kuu-chou-fuku) di barak proyek?",
      q_ne: "प्रश्न १०: पंखा भएको ज्याकेटको लिथियम ब्याट्री कार्यस्थलमा चार्ज गर्दा आगलागी वा विस्फोट हुन नदिन अनिवार्य मान्नुपर्ने नियम के हो?",
      options: [
        { ja: "メーカー純正の正規充電器を使用し、直射日光や高温多湿の場所を避け、衝撃で膨張・変形したバッテリーは直ちに使用を中止して廃棄する", id: "Gunakan charger adaptor ASLI pabrik, hindari tempat panas terik, dan SEGERA BUANG baterai yang kembung/penyok akibat pernah jatuh", ne: "कम्पनीको आधिकारिक ओरिजिनल चार्जर मात्र प्रयोग गर्ने, घाम र तातो ठाउँबाट टाढा राख्ने, र फुल्लिएको वा चोट लागेर बाङ्गो भएको ब्याट्री तुरुन्तै फाल्ने" },
        { ja: "バッテリーをストーブの上に乗せて温めながら充電する", id: "Menaruh baterai di atas kompor pemanas saat dicas", ne: "हिटर माथि राखेर तातो बनाउँदै चार्ज गर्ने" },
        { ja: "膨らんで煙が出ているバッテリーをガムテープで縛って使い続ける", id: "Memakai baterai kembung yang berasap dengan dililit lakban", ne: "धुवाँ निस्किएको र सुन्निएको ब्याट्रीमा टेप बाँधेर चलाइरहने" },
        { ja: "釘をバッテリーに突き刺して電気が残っているか確かめる", id: "Menusuk baterai dengan paku untuk cek sisa listrik", ne: "काँटीले घोपेर ब्याट्रीमा चार्ज छ कि नाई हेर्ने" }
      ],
      answer: 0,
      expJa: "【リチウムイオン電池の安全】落下衝撃や社外品充電器による過充電でバッテリーが破裂発火する事故が多発しています。膨張バッテリーは即廃棄します。",
      expId: "Baterai kembung atau retak akibat jatuh adalah bom waktu yang bisa meledak membakar baju. Jangan pakai charger palsu!",
      expNe: "खसेर बाङ्गो भएको वा फुलेको ब्याट्री जुनसुकै बेला पड्किएर कपडामा आगो लाग्छ। यस्तो ब्याट्री तुरुन्त फाल्नुपर्छ।"
    },
    {
      cat: "学科：クリティカルパスの計算（トータルフロート）",
      q: "問11：工程管理において、ある作業の「最早開始日（最も早く始められる日）」が第10日目で、「最遅開始日（遅れても工期に影響しない限界日）」が第15日目であった場合、この作業の「余裕日数（トータルフロート）」は何日ですか。",
      q_id: "Soal 11: Suatu pekerjaan paling cepat bisa dimulai hari ke-10 (Early Start) dan paling lambat harus dimulai hari ke-15 (Late Start). Berapakah hari waktu luangnya (Total Float)?",
      q_ne: "प्रश्न ११: कार्यतालिकामा कुनै काम सबैभन्दा छिटो सुरु गर्न मिल्ने दिन १० औं दिन हो, र ढिलोमा सुरु गरिसक्नुपर्ने अन्तिम दिन १५ औं दिन हो भने, यो कामको 'फुर्सदको समय (टोटल फ्लोट)' कति दिन हुन्छ?",
      options: [
        { ja: "5日間（最遅開始日 15日 − 最早開始日 10日 ＝ 5日の余裕日数）", id: "5 Hari (Hari ke-15 - Hari ke-10 = 5 Hari Waktu Luang Bebas)", ne: "५ दिन (१५ औं दिन - १० औं दिन = ५ दिन फुर्सदको समय)" },
        { ja: "25日間", id: "25 Hari", ne: "२५ दिन" },
        { ja: "0日間（余裕なし）", id: "0 Hari", ne: "० दिन" },
        { ja: "150日間", id: "150 Hari", ne: "१५० दिन" }
      ],
      answer: 0,
      expJa: "【トータルフロートの計算】全余裕日数（TF）＝ 最遅開始日（LS）− 最早開始日（ES）＝ 15 − 10 ＝ 5日です。この作業は5日遅れても全体の工期には影響しません。",
      expId: "Total Float = Late Start - Early Start = 15 - 10 = 5 hari. Pekerjaan ini memiliki toleransi santai 5 hari tanpa memundurkan deadline proyek.",
      expNe: "ढिलो सुरु गर्न मिल्ने दिनबाट छिटो सुरु हुने दिन घटाउँदा फुर्सदको दिन निस्कन्छ (१५ - १० = ५ दिन)।"
    },
    {
      cat: "学科：労働安全衛生法・特別教育の記録保存義務",
      q: "問12：事業者が足場組立や玉掛け（1t未満）、酸欠等の「特別教育」を労働者に実施した際、その教育記録（受講者・科目・日時等）を作成し保存しなければならない法定期間はどれですか。",
      q_id: "Soal 12: Berapakah masa simpan dokumen bukti pelatihan khusus (Tokubetsu Kyouiku) yang WAJIB diarsipkan perusahaan menurut UU Keselamatan Kerja?",
      q_ne: "प्रश्न १२: कम्पनीले कामदारलाई दिएको 'विशेष कानुनी तालिम (तोकुबेचु क्योइकु)' को आधिकारिक रेकर्ड फाइल कम्पनीले कम्तीमा कति वर्षसम्म सुरक्षित राख्नै पर्छ?",
      options: [
        { ja: "「3年間」保存しなければならない", id: "Wajib diarsipkan selama minimal '3 TAHUN'", ne: "कम्तीमा '३ वर्षसम्म' अनिवार्य सुरक्षित राख्नुपर्छ" },
        { ja: "講習が終わったらその日のうちにシュレッダーで裁断する", id: "Boleh dihancurkan hari itu juga", ne: "तालिम सकिनासाथ तत्काल च्यातेर फाल्ने" },
        { ja: "100年間", id: "100 tahun", ne: "१०० वर्ष" },
        { ja: "記録を作成・保存する義務は存在しない", id: "Tidak ada kewajiban arsip", ne: "रेकर्ड राख्नै पर्दैन" }
      ],
      answer: 0,
      expJa: "【安衛則第38条】事業者は、特別教育を実施したときは、受講者氏名、科目、日時等の記録を作成し、「3年間」保存しなければなりません（労基署の立入検査対象です）。",
      expId: "Arsip bukti kelulusan Tokubetsu Kyouiku wajib disimpan 3 tahun oleh perusahaan sebagai bukti audit resmi Depnaker.",
      expNe: "कामदारले तालिम लिएको आधिकारिक प्रमाण फाइल कम्पनीले कम्तीमा ३ वर्षसम्म सुरक्षित राख्नुपर्ने कानुनी बाध्यता छ।"
    },
    {
      cat: "学科：熱中症と「現場のAED（自動体外式除細動器）」",
      q: "問13：熱中症の最重症例などで作業員が突然倒れ、「意識がなく、正常な呼吸をしていない（息をしていない）」場合に、職長が119番通報と同時に直ちに行うべき一次救命処置は何ですか。",
      q_id: "Soal 13: Korban ambruk tak sadarkan diri dan TIDAK BERPAPAS NORMAL. Tindakan resusitasi jantung paru apakah yang WAJIB segera dilakukan bersamaan dengan memanggil ambulans?",
      q_ne: "प्रश्न १३: साथी एक्कासि ढल्यो, बोलाउँदा बोल्दैन र सास पनि फेरिरहेको छैन। ११९ मा फोन गर्नुका साथै तुरुन्तै सुरु गर्नुपर्ने प्राथमिक जीवन रक्षाको काम कुन हो?",
      options: [
        { ja: "直ちに「胸骨圧迫（心臓マッサージ）」を開始し、近くにある「AED（除細動器）」を手配させて音声ガイダンスに従って電気ショックを実施する", id: "SEGERA lakukan 'Kompresi Dada / RJP (Pijat Jantung)' non-stop, ambil mesin AED terdekat, dan ikuti panduan suara mesin untuk kejut listrik jantung", ne: "तुरुन्तै दुवै हातले छाती थिच्ने 'मुटुको मालिस (सिपिआर)' सुरु गर्ने, नजिकै भएको 'AED मेसिन' ल्याउन लगाएर मेसिनले बोले अनुसार बिजुलीको झट्का दिने" },
        { ja: "息を吹き返すまで顔を平手打ちして叩き続ける", id: "Menampar wajahnya terus-menerus", ne: "गालामा थप्पड हानिरहने" },
        { ja: "口の中に冷たい水を無理やり流し込む", id: "Menuang air dingin ke mulut orang yang tidak bernapas", ne: "सास नफेरेको मान्छेको मुखमा पानी खन्याउने" },
        { ja: "意識が戻るのを祈りながら1時間手を握って見守る", id: "Berdoa sambil memegang tangannya 1 jam", ne: "हात समातेर १ घण्टासम्म प्रार्थना गरेर बस्ने" }
      ],
      answer: 0,
      expJa: "【一次救命処置（BLS）】正常な呼吸がない場合は心停止です。1分遅れるごとに救命率は10%低下します。即座の胸骨圧迫（1分間に100〜120回）とAED装着が命を救います。",
      expId: "Tidak bernapas = Jantung Berhenti! Pijat dada di tengah tulang dada sekuat tenaga sedalam 5 cm sambil menunggu mesin AED tiba.",
      expNe: "सास नफेर्नु भनेको मुटु बन्द हुनु हो। तुरुन्तै छाती थिच्न सुरु गरेर AED मेसिनको सहायता नलिए मान्छे केही मिनेटमै मर्छ।"
    },
    {
      cat: "学科：労働基準法・就労時間の休憩時間ルール",
      q: "問14：労働基準法第34条に基づき、事業主が労働時間に応じて労働者の労働時間の途中に与えなければならない「法定休憩時間」の基準として正しいものはどれですか。",
      q_id: "Soal 14: Berapakah hak durasi waktu istirahat (Kyuukei) yang WAJIB diberikan majikan di tengah-tengah jam kerja menurut UU Ketenagakerjaan Jepang?",
      q_ne: "प्रश्न १४: जापानी श्रम कानुनको धारा ३४ अनुसार कामको बीचमा कम्पनीले कामदारलाई दिनैपर्ने 'कानुनी आरामको समय (ब्रेक)' कति हो?",
      options: [
        { ja: "労働時間が6時間を超える場合は「少なくとも45分」、8時間を超える場合は「少なくとも1時間」の休憩を途中に与えなければならない", id: "Kerja > 6 jam: Wajib istirahat minimal '45 MENIT'; Kerja > 8 jam: Wajib istirahat minimal '1 JAM PENUH'", ne: "कामको समय ६ घण्टाभन्दा बढी भए 'कम्तीमा ४५ मिनेट', र ८ घण्टाभन्दा बढी भए 'कम्तीमा १ पूरा घण्टा' को आराम दिनैपर्छ" },
        { ja: "12時間労働でも休憩は1秒も与えなくてよい", id: "Boleh tanpa istirahat sama sekali meski kerja 12 jam", ne: "१२ घण्टा काम गराउँदा पनि ब्रेक दिनु नपर्ने" },
        { ja: "休憩時間はすべて工事完了後にまとめて1年後に与える", id: "Istirahat dirapel setahun kemudian", ne: "१ वर्षपछि एकैचोटि आराम दिने" },
        { ja: "休憩中は現場事務所の電話番を強制させてもよい", id: "Pekerja wajib disuruh jaga telepon kantor saat jam istirahat", ne: "ब्रेकको बेलामा अफिसको फोन कुर्न लगाउन मिल्ने" }
      ],
      answer: 0,
      expJa: "【労基法第34条】休憩は労働時間の「途中」に与え、かつ「自由に利用」させなければなりません。電話当番や手待ちは労働時間とみなされます。",
      expId: "Hak istirahat sah: > 6 jam kerja wajib jeda 45 menit; > 8 jam kerja wajib jeda 60 menit dan pekerja bebas keluar makan.",
      expNe: "६ घण्टा कटे ४५ मिनेट र ८ घण्टा कटे १ घण्टा कामदारलाई कामबाट पूरै फुर्सद भएको ब्रेक दिनैपर्छ।"
    },
    {
      cat: "学科：熱中症と「現場のWBGT計測器の設置場所」",
      q: "問15：現場の熱中症リスクを正確に評価するため、WBGT（暑さ指数）計測器を設置する「場所・高さ」の正しい基準はどれですか。",
      q_id: "Soal 15: Di manakah posisi titik dan ketinggian yang BENAR untuk menaruh alat ukur indeks WBGT di proyek agar mencerminkan bahaya nyata bagi pekerja?",
      q_ne: "प्रश्न १५: कार्यस्थलको वास्तविक गर्मी सही नाप्नका लागि WBGT नाप्ने मिटरलाई कुन ठाउँ र कति उचाइमा राख्नुपर्छ?",
      options: [
        { ja: "作業員が実際に作業している場所（日射・気流・照り返しを受ける場所）で、地面から「高さおおむね1m〜1.5m（人間の胸から腰の高さ）」に設置する", id: "Di titik tempat pekerja BENAR-BENAR BERKERJA, dengan ketinggian tiang sekitar 1 meter sampai 1,5 meter dari tanah (setinggi dada manusia)", ne: "कामदारले साँच्चै काम गरिरहेकै ठाउँमा (घाम र तातो लाग्ने ठाउँमै), जमिनबाट 'करिब १ देखि १.५ मिटरको उचाइमा (मान्छेको छातीदेखि कम्मरको उचाइमा)' राख्ने" },
        { ja: "一番涼しい冷房の効いた事務所のエアコンの真ん前に置く", id: "Ditaruh di dalam kantor ber-AC dingin tepat di depan hembusan AC", ne: "सबैभन्दा चिसो एसी कोठाभित्र लगेर एसीको अगाडि राख्ने" },
        { ja: "冷蔵庫の中に密閉して入れておく", id: "Dimasukkan ke dalam kulkas beku", ne: "फ्रिजभित्र बन्द गरेर राख्ने" },
        { ja: "地下100mの洞窟の中に埋めておく", id: "Dikubur di gua tanah", ne: "जमिनमुनि खाल्डोमा पुर्ने" }
      ],
      answer: 0,
      expJa: "【WBGT計の設置基準】冷房の効いた事務所に置いても意味がありません。作業員の身体が実際に受ける熱環境を測るため、作業エリアの地上1〜1.5mに設置します。",
      expId: "Alat WBGT harus merasakan apa yang dirasakan tubuh tukang! Pasang di area kerja luar setinggi dada (1-1,5 m). Jangan curang ditaruh di ruang AC kantor.",
      expNe: "एसी भएको कोठामा मिटर राखेर धोका दिन पाइँदैन। कामदार जहाँ घाममा खटिएका छन्, त्यहीँ छातीको उचाइमा राखेर नाप्नुपर्छ।"
    },
    {
      cat: "学科：労働安全衛生法・足場の組立作業主任者の職務",
      q: "問16：足場の組立て等作業主任者が、足場の組立や解体の作業現場で直接行わなければならない法定職務として正しいものはどれですか。",
      q_id: "Soal 16: Tugas hukum apakah yang WAJIB dijalankan oleh Mandor Ahli Perakitan Perancah (Ashiba no Kumitate Sagyou Shunensha) langsung di titik kerja?",
      q_ne: "प्रश्न १६: खट बनाउने वा भत्काउने ठाउँमा खटिएका आधिकारिक कार्य प्रमुख (साग्यो शुनिन्शा) ले फिल्डमा गर्नैपर्ने कानुनी काम कुन हो?",
      options: [
        { ja: "材料の欠陥の有無を点検して不良品を排除し、器具・工具・安全帯の機能を点検し、作業方法と人員配置を決定して作業を直接指揮監視する", id: "Cek cacat pipa/klem dan singkirkan yang rusak, periksa kelaikan tali harness, tentukan metode kerja, dan awasi langsung di tempat", ne: "भाँचिएका वा बिग्रेका पाइप-क्ल्याम्पहरू छाँटेर हटाउने, सेफ्टी बेल्ट जाँच्ने, काम गर्ने तरिका र मान्छे तोक्ने र फिल्डमै बसेर प्रत्यक्ष निर्देशन दिने" },
        { ja: "作業中は現場事務所でパソコンゲームをして遊ぶこと", id: "Main game komputer di kantor proyek selama perancah dirakit", ne: "अफिसमा बसेर कम्प्युटर गेम खेल्ने" },
        { ja: "作業員にヘルメットを脱ぐように命令すること", id: "Menyuruh pekerja melepas helm pengaman", ne: "हेल्मेट फुकाल्न लगाउने" },
        { ja: "足場の解体部材をわざと通行人の頭の上に落とすこと", id: "Sengaja menjatuhkan pipa ke kepala pejalan kaki", ne: "सामान बटुवाको टाउकोमा खसाल्ने" }
      ],
      answer: 0,
      expJa: "【安衛則第566条】足場作業主任者は「材料の点検・不良品排除」「器具工具の点検」「作業方法の決定と指揮監視」「安全帯の使用状況監視」が絶対義務です。",
      expId: "Mandor ahli perancah wajib stand-by di lokasi memelototi pemasangan klem, menyortir pipa retak, dan memastikan 100% harness tercantol.",
      expNe: "खट प्रमुखले कार्यस्थलमै बसेर बिग्रेका सामान हटाउने र सबैले सेफ्टी बेल्ट लगाएको आफ्नै आँखाले निगरानी गर्नुपर्छ।"
    },
    {
      cat: "学科：熱中症と「現場の塩分入りタブレットの保管場所」",
      q: "問17：夏季に現場で配布する塩分補給タブレットや経口補水液パウダーを保管する際、変質や劣化・湿気による固着を防ぐ正しい保管環境はどれですか。",
      q_id: "Soal 17: Bagaimanakah cara penyimpanan stok permen garam dan bubuk oralit yang BENAR di proyek agar tidak meleleh rusak terkena hawa lembab?",
      q_ne: "प्रश्न १७: कार्यस्थलमा कामदारका लागि राखिने नुनको चक्की र जीवनजलको धुलो बिग्रन र पग्लन नदिन कसरी सुरक्षित भण्डारण गर्नुपर्छ?",
      options: [
        { ja: "直射日光と高温多湿を避け、乾燥剤を入れた密閉容器に収納して冷暗所（冷房の効いた詰所内等）に保管する", id: "Simpan di tempat sejuk kering (ruang kantor ber-AC), wadah kedap udara dengan silika gel pengering, dan hindari terik matahari", ne: "घाम र ओसिलो तातोबाट जोगाएर, सिलिका जेल (सुक्खा राख्ने धुलो) भएको बिर्को बन्द हुने भाँडोमा हाली चिसो अफिसभित्र राख्ने" },
        { ja: "雨水が溜まった屋外の水たまりの中に袋を開けて浸しておく", id: "Merendam kantong terbuka di genangan air hujan", ne: "पानीको खाल्डोमा डुबाएर राख्ने" },
        { ja: "真夏の鉄板の上に直射日光で放置してドロドロに溶かす", id: "Dijemur di atas plat seng panas sampai meleleh lengket", ne: "तातो फलामको पातामाथि घाममा छाडिदिने" },
        { ja: "セメントの粉や砂利の中に混ぜて保管する", id: "Dicampur ke dalam adukan semen dan pasir", ne: "सिमेन्टको धुलोभित्र मिसाएर राख्ने" }
      ],
      answer: 0,
      expJa: "【タブレットの保管】塩分タブレットは湿気と高熱を吸うとドロドロに溶けて変質します。冷暗所の密閉ケースで衛生的に管理します。",
      expId: "Permen garam mudah mencair jika terkena lembab dan panas. Simpan dalam toples tertutup rapat di ruang kantor ber-AC.",
      expNe: "नुनको चक्कीले ओस र तातो पाउनासाथ पग्लेर काम नलाग्ने हुन्छ। त्यसैले हावा नपस्ने डिब्बामा राखेर चिसो कोठामा राख्नुपर्छ।"
    },
    {
      cat: "学科：クレーン作業と「荷つりワイヤーの安全係数」",
      q: "問18：クレーン等安全規則に基づき、玉掛け用ワイヤーロープの切断荷重を最大許容荷重で割った「安全係数（安全率）」の法定基準はどれですか。",
      q_id: "Soal 18: Berapakah angka faktor keamanan (Safety Factor) minimal yang diwajibkan oleh UU Crane untuk kawat seling pengangkat beban?",
      q_ne: "प्रश्न १८: क्रेनको कानुन अनुसार सामान उचाल्ने स्लिङ तार (वायर रोप) को सुरक्षा फ्याक्टर (बलियोपनको अनुपात) कम्तीमा कति हुनैपर्छ?",
      options: [
        { ja: "安全係数は「6以上」（クレーン等の玉掛け用ワイヤーロープ）", id: "Faktor Keamanan minimal '6 KE ATAS' (Kawat Seling Crane)", ne: "सुरक्षा फ्याक्टर कम्तीमा '६ वा सोभन्दा माथि' (क्रेनको स्लिङ तारका लागि)" },
        { ja: "安全係数は0.1（限界ギリギリまで弱くする）", id: "Faktor keamanan 0,1", ne: "०.१ मात्र" },
        { ja: "安全係数は1（重さと強度がまったく同じ）", id: "Faktor keamanan 1", ne: "१ मात्र" },
        { ja: "安全係数の基準は存在しない", id: "Tidak ada standar", ne: "कुनै नियम छैन" }
      ],
      answer: 0,
      expJa: "【クレーン則第213条】玉掛け用ワイヤーロープの安全係数は「6以上」でなければ使用できません（フック等の金具は5以上）。強度の6倍の余裕を持たせます。",
      expId: "Safety factor kawat seling crane WAJIB minimal 6. Artinya, kawat harus memiliki daya tahan putus 6 kali lipat dari berat beban yang diangkat.",
      expNe: "क्रेनको स्लिङ तार सामानको तौलभन्दा कम्तीमा ६ गुणा बढी भार थेग्न सक्ने क्षमताको (फ्याक्टर ६) हुनैपर्छ।"
    },
    {
      cat: "学科：熱中症と「現場の体調不良者の付き添い搬送」",
      q: "問19：熱中症で気分が悪くなった作業員を病院へ連れて行く際、タクシーを呼んで作業員を一人だけで乗せて病院へ向かわせることについて、職長としての判断はどれですか。",
      q_id: "Soal 19: Bolehkah mandor menyuruh pekerja yang kena heatstroke naik taksi sendirian ke rumah sakit tanpa didampingi rekan kerja?",
      q_ne: "प्रश्न १९: गर्मीले बिरामी परेको कामदारलाई ट्याक्सी बोलाएर एक्लै अस्पताल पठाउने कामलाई शोकुचोले किन कडा प्रतिबन्ध लगाउनुपर्छ?",
      options: [
        { ja: "絶対に禁止！移動中のタクシー車内で意識を失ったり呼吸停止する危険があるため、必ず職長や同僚が車内に同乗し、容態を見守りながら搬送する", id: "DILARANG KERAS! Korban bisa pingsan koma atau berhenti napas mendadak di dalam taksi. WAJIB didampingi rekan/mandor sampai masuk ruang IGD!", ne: "कडा प्रतिबन्ध! ट्याक्सीभित्रै एक्कासि बेहोस हुने वा सास रोकिने खतरा हुने भएकाले, अनिवार्य रूपमा शोकुचो वा साथी सँगै चढेर डाक्टरको हातमा नपुगुन्जेल हेरचाह गर्दै लैजाने" },
        { ja: "タクシー代を節約できるなら一人で乗せるのが正しい", id: "Boleh demi hemat uang", ne: "पैसा बच्छ भने एक्लै पठाउने" },
        { ja: "タクシーの運転手にすべて医療処置を任せれば安心である", id: "Meminta sopir taksi yang mengobatinya", ne: "ट्याक्सी ड्राइभरलाई उपचार गर्न भन्ने" },
        { ja: "病院に着いたら電話してくるよう言って見送るだけでよい", id: "Cukup melambaikan tangan", ne: "हात हल्लाएर बिदा गर्ने" }
      ],
      answer: 0,
      expJa: "【熱中症搬送の鉄則】熱中症は車内で数分のうちに意識不明へ急変します。タクシー運転手は医療対応できません。必ず指導員や同僚が同乗して病院へ付き添います。",
      expId: "Jangan biarkan korban heatstroke naik taksi sendirian! Banyak kasus korban meninggal di jok belakang taksi karena tidak ada yang mengawasi napasnya.",
      expNe: "ट्याक्सीमा एक्लै पठाए बाटोमै सास रोकिएर मर्न सक्छ। त्यसैले साथी सँगै बसेर अस्पतालको इमर्जेन्सी कोठासम्मै पुर्याउनुपर्छ।"
    },
    {
      cat: "学科：職長としての「安全第一（Safety First）」の真意",
      q: "問20：世界的な安全スローガンである「安全第一（Safety First）」という言葉が生まれた歴史的背景において、元々のモットー（方針順序）として正しいものはどれですか。",
      q_id: "Soal 20: Bagaimanakah sejarah urutan semboyan K3 dunia yang sebenarnya saat slogan 'Safety First' pertama kali diciptakan di industri baja?",
      q_ne: "प्रश्न २०: विश्वप्रसिद्ध नारा 'सुरक्षा पहिलो प्राथमिकता (सेफ्टी फस्ट)' बन्दा, वास्तवमा कुन ३ वटा कुरालाई सही क्रममा मिलाइएको थियो?",
      options: [
        { ja: "「安全第一（Safety First）、品質第二（Quality Second）、生産第三（Production Third）」", id: "1. Keselamatan Pertama (Safety First) -> 2. Mutu Kedua (Quality Second) -> 3. Produksi Ketiga (Production Third)", ne: "१. सुरक्षा पहिलो (Safety First) -> २. गुणस्तर दोस्रो (Quality Second) -> ३. उत्पादन तेस्रो (Production Third)" },
        { ja: "「利益第一、スピード第二、安全は一番最後」", id: "Uang nomor satu, cepat nomor dua, keselamatan terakhir", ne: "नाफा पहिलो, गति दोस्रो, सुरक्षा अन्तिम" },
        { ja: "「手抜き第一、言い訳第二、逃亡第三」", id: "Malas nomor satu, alasan nomor dua, kabur nomor tiga", ne: "लापरबाही पहिलो, बहाना दोस्रो, भाग्ने तेस्रो" },
        { ja: "「書類第一、会議第二、現場は無視」", id: "Kertas nomor satu, rapat nomor dua, lapangan cuek", ne: "कागजपत्र पहिलो, बैठक दोस्रो, काम बेवास्ता" }
      ],
      answer: 0,
      expJa: "【安全第一の起源】米国の製鉄会社が「生産第一」から「安全第一・品質第二・生産第三」に経営方針を転換した結果、事故が激減し、逆に品質も生産性も最高記録を達成しました。",
      expId: "Sejarah membuktikan: Menomorsatukan keselamatan (Safety First) justru membuat mutu meningkat dan profit laba melonjak paling tinggi.",
      expNe: "सुरक्षालाई पहिलो स्थानमा राख्दा मात्र गुणस्तर र उत्पादन स्वतः बढ्छ। त्यसैले 'सुरक्षा पहिलो, गुणस्तर दोस्रो र काम तेस्रो' भनिएको हो।"
    },
    {
      cat: "学科：熱中症と「現場の冷房車・休憩車両」",
      q: "問21：山間部の土木工事や仮設プレハブが建てられない現場において、熱中症を防ぐために作業員の休憩所として活用が義務化・推奨されている設備は何ですか。",
      q_id: "Soal 21: Kendaraan fasilitas apakah yang disediakan di proyek terpencil yang tidak ada barak permanen agar pekerja bisa ngadem AC?",
      q_ne: "प्रश्न २१: पहाडी बाटो वा क्याम्प बनाउन नसकिने ठाउँमा काम गर्दा कामदारलाई आराम गराउन व्यवस्था गरिने विशेष गाडी कुन हो?",
      options: [
        { ja: "冷房設備付きの休憩車両（エアコン付き大型マイクロバスや移動式クーラーハウス）", id: "Kendaraan Istirahat Ber-AC (Mobil Bus Rest Area / Van Pendingin Lapangan Khusus)", ne: "एसी जडान गरिएको आराम गाडी (चिसो एसी भएको ठूलो बस वा मोबाइल विश्राम भ्यान)" },
        { ja: "窓が閉まらないサビだらけの軽トラックの荷台", id: "Bak truk karatan tanpa atap", ne: "झ्याल नभएको थोत्रो गाडी" },
        { ja: "エアコンが壊れた黒塗りのワゴン車", id: "Mobil van hitam tanpa AC", ne: "एसी बिग्रेको कालो गाडी" },
        { ja: "重機の燃料運搬用タンクローリー", id: "Truk tangki bahan bakar solar", ne: "तेलको ट्याङ्कर" }
      ],
      answer: 0,
      expJa: "【移動式休憩所】プレハブが建てられない道路・山岳現場では、常時アイドリング冷房が効いた専用バス（クールバス）を配備して作業員の深部体温を下げます。",
      expId: "Cool-Bus ber-AC wajib disiapkan di proyek jalan raya/gunung terpencil sebagai pengganti bedeng istirahat.",
      expNe: "घर बनाउन नमिल्ने ठाउँमा काम गर्दा एसी भएको बसलाई नै विश्रामस्थल बनाएर कामदारलाई चिस्याइन्छ।"
    },
    {
      cat: "学科：足場の「巾木」の角部（コーナー）の隙間",
      q: "問22：足場の作業床のコーナー部分（角部）に幅木を取り付ける際、部材の突き合わせ部分からボルト等の小物が落下するのを防ぐ正しい処置はどれですか。",
      q_id: "Soal 22: Tindakan apakah yang WAJIB dipasang pada sudut pertemuan (pojokan) papan habaki toeboard perancah agar baut tidak jatuh lewat celah siku?",
      q_ne: "प्रश्न २४: खटको कुनामा हाबाकी तख्ता जोड्दा, कुनाको खाली ठाउँबाट नट-बोल्ट खस्न नदिन गरिने सही उपाय के हो?",
      options: [
        { ja: "コーナー用の隙間塞ぎ部材（コーナー幅木金具や幅木シート）を取り付け、角の隙間をゼロにして密着させる", id: "Pasang plat penutup siku khusus (Corner Habaki) agar celah sudut tertutup rapat tanpa lubang", ne: "कुना जोड्ने विशेष पाता (कर्नर हाबाकी) लगाएर कुनाको प्वाल पूरै बन्द गरी टाँस्ने" },
        { ja: "コーナー部分は危険なので人が通れないように3mの穴を開けておく", id: "Membuka lubang 3 meter di pojokan", ne: "कुनामा ३ मिटरको प्वाल छाडिदिने" },
        { ja: "角の隙間に新聞紙を丸めて詰めておく", id: "Menjejali kertas koran bekas", ne: "अखबार कोचेर राख्ने" },
        { ja: "角の幅木は邪魔なので両側とも50cm切り落としておく", id: "Memotong toeboard 50 cm agar renggang", ne: "दुवैतिरको तख्ता ५० सेमी काटेर फाल्ने" }
      ],
      answer: 0,
      expJa: "【コーナー幅木】直線部だけでなく足場の出隅・入隅の角部は隙間ができやすい弱点です。専用のコーナー金具を当てて完全な隙間ゼロ防護を行います。",
      expId: "Sudut perancah sering bolong jika papan toeboard hanya dipotong lurus. Wajib pasang klem siku corner habaki.",
      expNe: "खटको कुनाबाट सामान धेरै खस्ने भएकाले कुनामा विशेष 'कर्नर हाबाकी' हालेर प्वाल टाल्नै पर्छ।"
    },
    {
      cat: "学科：熱中症と「現場の体調不良者の回復確認」",
      q: "問23：熱中症で日陰で休ませた作業員が「もう治ったので作業に戻りたい」と言った際、職長が確認すべき「復帰させてはならない危険な兆候」はどれですか。",
      q_id: "Soal 23: Pekerja mengaku 'sudah sehat dan ingin kerja lagi'. Tanda bahaya apakah yang membuktikan bahwa pekerja tersebut SEBENARNYA BELUM PULIH dan DILARANG KERJA?",
      q_ne: "प्रश्न २३: बिरामी साथीले 'मलाई ठीक भयो, म फेरि काममा जान्छु' भन्दा पनि, काममा फर्काउन नहुने 'खतराको लक्षण' कुन हो?",
      options: [
        { ja: "立ち上がらせたときにふらつく、まっすぐ歩けない、手足に力が入らない、受け答えの反応が鈍い（立ちくらみ・低血圧状態）", id: "Tubuh sempoyongan saat berdiri, jalan tidak lurus, tangan lemas tanpa tenaga, dan respon bicara lambat telat", ne: "उभिँदा जिउ लड्खडाउनु, सिधा हिँड्न नसक्नु, हातगोडामा तागत नहुनु र बोलाउँदा ढिलो गरी बोल्नु (कमजोरीको अवस्था)" },
        { ja: "元気にジャンプして力強く挨拶ができる", id: "Bisa melompat bertenaga dan salam lantang", ne: "उफ्रिन सक्ने र ठूलो स्वरले बोल्ने" },
        { ja: "顔色が赤みを帯びて血色が良く戻っている", id: "Wajah segar merona normal", ne: "अनुहार हँसिलो भएको" },
        { ja: "体温計で36.5℃の平熱が確認できた", id: "Suhu normal 36,5°C", ne: "तापक्रम ३६.५ डिग्री भएको" }
      ],
      answer: 0,
      expJa: "【作業復帰の判断】本人の「大丈夫」は信用してはいけません。起立させて歩かせ、まっすぐ歩けない・ふらつく場合は脳貧血・脱水が続いており高所作業厳禁です。",
      expId: "Jangan percaya ucapan 'saya sudah sembuh'! Tes dengan menyuruhnya berdiri dan berjalan 5 langkah lurus. Jika goyang, dia dilarang keras memanjat perancah.",
      expNe: "बिरामीले 'ठीक भयो' भन्दैमा विश्वास गर्नुहुन्न। उभिएर हिँडाएर हेर्दा खुट्टा काँपेमा उसलाई काममा पठाउनै पाइँदैन।"
    },
    {
      cat: "学科：クレーン作業と「吊り荷の旋回範囲の監視」",
      q: "問24：クレーンで資材を旋回運搬する際、足場や電線、周辺建物に荷が激突する事故を防ぐために合図者が常に行うべき監視行動はどれですか。",
      q_id: "Soal 24: Pengawasan apakah yang WAJIB terus dipantau juru sinyal saat crane memutar memindahkan barang di udara?",
      q_ne: "प्रश्न २४: क्रेनले सामान हावामा घुमाएर लैजाँदा खट, बिजुलीको तार वा घरमा सामान ठोक्किन नदिन संकेत दिने मान्छेले के हेरिरहनुपर्छ?",
      options: [
        { ja: "荷の通過ルート全体を見渡し、電線や障害物との安全離隔距離を保ち、下方に人がいないことを確認しながら旋回を誘導する", id: "Memantau seluruh jalur lintasan barang di udara, pastikan jarak bebas aman dari kabel listrik, dan sterilkan manusia di tanah", ne: "सामान जाने पूरै आकाशको बाटो हेर्ने, बिजुलीको तार र अवरोधबाट टाढा राख्ने, र मुनि मान्छे नभएको हेर्दै क्रेन घुमाउन संकेत दिने" },
        { ja: "クレーンの運転席のメーターだけを凝視して外は見ない", id: "Hanya melihat speedometer kabin tanpa melihat ke luar", ne: "बाहिर नहेरी गाडीको मिटर मात्र हेर्ने" },
        { ja: "目を閉じて耳で風の音だけを聴いて合図する", id: "Memejamkan mata dan hanya mendengarkan suara angin", ne: "आँखा चिम्लेर हावाको आवाज सुन्ने" },
        { ja: "障害物にぶつかる寸前までわざと近づけてスリルを楽しむ", id: "Sengaja mendekatkan barang ke kabel listrik untuk uji nyali", ne: "तारमा ठोक्किन लाग्ने गरी रमाइलो हेर्ने" }
      ],
      answer: 0,
      expJa: "【旋回監視の基本】吊り荷の接触事故は一瞬で電線切断や足場倒壊を招きます。合図者は荷の先回りをして全周囲のクリアランス（離隔）を確認します。",
      expId: "Juru sinyal wajib memandu jalur terbang barang agar tidak menyenggol kabel listrik tegangan tinggi atau tiang perancah.",
      expNe: "क्रेनको सामान तार वा खटमा ठोक्किएमा पूरै कार्यस्थल ध्वस्त हुन्छ। त्यसैले संकेत दिने मान्छेले चारैतिरको खाली ठाउँ हेर्नै पर्छ।"
    },
    {
      cat: "学科：熱中症と「現場の冷却タオルの使用法」",
      q: "問25：水に濡らして絞って振ると冷たくなる「冷感ネッククーラー（冷却タオル）」を現場で使用する際の正しい管理はどれですか。",
      q_id: "Soal 25: Bagaimanakah cara pemakaian handuk pendingin leher (Cooling Towel) yang BENAR dan aman di proyek?",
      q_ne: "प्रश्न २५: पानीमा भिजाएर घाँटीमा बेर्ने 'चिसो तौलिया (कुलिङ टावेल)' कार्यस्थलमा प्रयोग गर्दा कुन सुरक्षा नियम मान्नुपर्छ?",
      options: [
        { ja: "首に巻く際は機械の回転軸や突起物に巻き込まれないよう端を衣服の中にしっかり収め、ぬるくなったら再度水に濡らして振って冷感を復活させる", id: "Selipkan ujung handuk ke dalam kerah baju agar tidak tergulung putaran mesin, dan kibaskan kembali di udara saat mulai hangat", ne: "घुम्ने मेसिनमा कपडा नबेरियोस् भनेर तौलियाको टुप्पोलाई कपडाभित्र राम्ररी घुसार्ने, र तातो भएपछि फेरि पानीमा भिजाएर हम्की चिसो बनाउने" },
        { ja: "タオルの端を1メートル長く垂らして丸のこの刃の横で作業する", id: "Membiarkan ujung handuk menjuntai panjang 1 meter dekat mata gergaji", ne: "तौलियाको लामो टुप्पो गोलो आराको छेउमै झुन्ड्याएर काम गर्ने" },
        { ja: "タオルにガソリンを含ませて首に巻く", id: "Membasahi handuk dengan bensin", ne: "पेट्रोल भिजाएर घाँटीमा बाँध्ने" },
        { ja: "タオルを首に強く固結びして息が苦しい状態で作業する", id: "Mengikat simpul mati kencang sampai tercekik leher", ne: "घाँटी नै थुनिने गरी कसिलो गाँठो पार्ने" }
      ],
      answer: 0,
      expJa: "【タオルの巻き込まれ防止】首に巻いたタオルの端が回転工具（グラインダーや丸のこ）に巻き込まれると首が絞まり即死します。必ず服の内側へ完全に収納します。",
      expId: "Ujung handuk yang menjuntai di leher bisa tersambar mesin bor putar dan mematahkan leher seketika. Selipkan ke dalam baju!",
      expNe: "घाँटीमा बाँधेको तौलियाको टुप्पो घुम्ने मेसिनमा पर्यो भने मान्छेको घाँटी नै निमोठेर मार्छ। त्यसैले तौलियाको छेउ कपडाभित्र हाल्नुपर्छ।"
    },
    {
      cat: "学科：足場の「壁つなぎ」の専用アンカー強度",
      q: "問26：RC造の建物躯体に足場の壁つなぎを接続する際、打ち込むアンカーボルトが引き抜け脱落するのを防ぐための施工基準はどれですか。",
      q_id: "Soal 26: Bagaimanakah standar pemasangan paku angkur dinding (anchor bolt) untuk kabe-tsunagi pada beton agar tidak jebol tercabut?",
      q_ne: "प्रश्न २६: ढलानको भित्तामा खट बाँध्ने रड (काबे-चुनागी) को एङ्कर बोल्ट ठोक्दा, त्यो फुत्किएर नझरोस् भन्नाका लागि कसरी ठोक्नुपर्छ?",
      options: [
        { ja: "所定のドリル径と深さで正確に下穴をあけ、孔内のコンクリート粉じんをブロワー等で清掃し、規定トルクで確実にアンカーを拡張打設する", id: "Bor lubang sesuai diameter dan kedalaman spesifikasi, bersihkan serbuk beton dengan pompa blower, lalu kencangkan baut angkur sesuai torsi standar", ne: "तोकिएको साइजको ड्रिलले सही गहिराइको प्वाल पार्ने, भित्रको सिमेन्टको धुलो पम्पले फुकेर सफा गर्ने, र तोकिएको बलमा एङ्कर कस्ने" },
        { ja: "穴の中にコンクリートの粉が山盛り詰まったまま、細いアンカーを手で差し込むだけにする", id: "Menancapkan angkur longgar ke lubang kotor tanpa ditiup debunya", ne: "प्वालभित्र धुलो भरिएकै बेला हातले मात्र खुकुलो छिराउने" },
        { ja: "壁の表面に接着剤でペタッとアンカーを貼り付けるだけにする", id: "Hanya menempelkan angkur ke dinding pakai lem kertas", ne: "भित्तामा गमले मात्र टाँस्ने" },
        { ja: "下穴をあけずに直接ハンマーでコンクリートを粉砕しながらねじ込む", id: "Memukul paksa tanpa dibor", ne: "ड्रिल नगरी हम्बरले हानेर फुटाउने" }
      ],
      answer: 0,
      expJa: "【壁つなぎアンカー施工】孔内の粉じん未清掃はアンカー引抜耐力を半減させます。下穴穿孔 ➔ ブロワー清掃 ➔ アンカー打設 ➔ 規定トルク締付けが鉄則です。",
      expId: "Bersihkan serbuk beton dari lubang bor dengan pompa udara sebelum pasang dynabolt angkur. Debu sisa membuat angkur mudah copot tercabut.",
      expNe: "प्वालभित्रको धुलो राम्ररी सफा नगरी एङ्कर हाले त्यो हावाले तान्नासाथ उप्किन्छ र खट ढल्छ।"
    },
    {
      cat: "学科：熱中症と「現場の体調不良者の搬送準備」",
      q: "問27：熱中症で倒れた作業員を日陰で冷却しながら救急車を待つ間、到着後1秒でも早く車内へ収容できるように職長が現場で準備しておくべき搬送用具は何ですか。",
      q_id: "Soal 27: Alat bantu angkut darurat apakah yang WAJIB disiapkan di samping korban saat menunggu ambulans agar proses evakuasi berjalan cepat?",
      q_ne: "प्रश्न २७: एम्बुलेन्स नआउन्जेल बिरामीलाई शीतलमा राखेर कुर्दै गर्दा, गाडी आउनासाथ बिरामीलाई छिट्टै गाडीमा हाल्न छेउमा ठिक्क पारिने सामान के हो?",
      options: [
        { ja: "救急用担架（ストレッチャー / スクープストレッチャー・布担架）と、日よけ用パラソル・毛布", id: "Tandu Darurat (Stretcher / Tandu Lipat Kain) dan payung peneduh serta selimut bersih", ne: "स्ट्रेचर (बिरामी बोक्ने सुताउने खाट / कपडाको स्ट्रेचर), घाम छेक्ने ठूलो छाता र कम्बल" },
        { ja: "一輪車（ネコ車）に放り込んで砂利を上からかける", id: "Gerobak dorong pasir arco", ne: "बालुवा बोक्ने ठेलागाडा" },
        { ja: "ロープで足首を縛って引きずり回す準備", id: "Mengikat pergelangan kaki dengan tali untuk diseret", ne: "खुट्टामा डोरी बाँधेर घिसार्ने" },
        { ja: "段ボール箱の中に小さく折りたたんで梱包しておく", id: "Memasukkan tubuh korban ke dalam kardus paket", ne: "कार्टुनभित्र प्याक गरेर राख्ने" }
      ],
      answer: 0,
      expJa: "【現場の担架配備】現場事務所や詰所には「救急担架」の常備が義務付けられています。救急隊到着時に即座に搬送できるようストレッチャーを展開しておきます。",
      expId: "Siapkan tandu stretcher di samping korban agar saat paramedis tiba, korban bisa langsung diangkat ke dalam mobil ambulans tanpa buang waktu.",
      expNe: "एम्बुलेन्स आइपुग्नासाथ बिरामीलाई तुरुन्त गाडीमा हाल्न सकियोस् भनेर पहिले नै स्ट्रेचर तयार पारेर राख्नुपर्छ।"
    },
    {
      cat: "学科：クレーン作業と「吊り具（シャックル）の正しい使用」",
      q: "問28：クレーンで鉄骨や資材を吊り上げる際に使用する連結金具「シャックル（Shackle）」の正しい使用状態として適切なものはどれですか。",
      q_id: "Soal 28: Bagaimanakah cara pemakaian Segel Pengait (Shackle) yang BENAR saat menghubungkan kawat seling ke beban angkat?",
      q_ne: "प्रश्न २८: क्रेनले सामान उठाउँदा स्लिङ तारलाई सामानसँग जोड्ने 'यु-आकारको फलामे साकल (शाकल)' जोड्ने सही तरिका कुन हो?",
      options: [
        { ja: "シャックルのピンを最後まで手で完全にねじ込み、ピンに異常な曲がりや摩耗がなく、本体クラウン部にワイヤーを掛けて正しく荷重を受けさせる", id: "Putar pin shackle sampai mentok kencang, pastikan tidak bengkok/retak, dan beban ditaruh di busur lengkungan badan shackle (bukan di pin secara miring)", ne: "शाकलको पिनलाई हातले अन्तिमसम्म कसिलो गरी कस्ने, पिन बाङ्गो नभएको हेर्ने, र तारलाई शाकलको गोलो भागमा पारेर सिधा भार थेग्ने बनाउने" },
        { ja: "ピンを半分だけ差し込んでグラグラのまま吊り上げる", id: "Pin hanya masuk separuh dan dibiarkan kendor", ne: "पिन आधा मात्र छिराएर हल्लिँदै उचाल्ने" },
        { ja: "ピンを紛失したので割り箸を穴に刺しておく", id: "Mengganti pin shackle dengan sumpit kayu", ne: "पिन हरायो भन्दै काठको सिन्का हाल्ने" },
        { ja: "シャックルを真横から引っ張ってU字を押し広げるように使う", id: "Menarik shackle dari samping secara miring", ne: "शाकललाई तेर्सो पारेर च्यातिने गरी तन्काउने" }
      ],
      answer: 0,
      expJa: "【シャックルの使用基準】シャックルのピンは奥まで締め切り、横荷重（斜め引っ張り）を避けて直角方向に引きます。ピンの抜け止め割りピンも確実に装着します。",
      expId: "Putar baut pin shackle sampai mentok rapat. Beban miring menyamping pada shackle akan mematahkan baut seketika.",
      expNe: "शाकलको पिन पूरै कस्नुपर्छ। छड्के पारेर तेर्सो भार दिएमा शाकलको पिन भाँचिएर सामान तल खस्छ।"
    },
    {
      cat: "学科：熱中症と「現場の冷水シャワー・ミスト設備」",
      q: "問29：真夏の現場において、休憩時間中に作業員が火照った身体を一気にクールダウンさせるために現場に設置される設備は何ですか。",
      q_id: "Soal 29: Fasilitas air apakah yang sangat efektif disediakan di samping barak proyek agar pekerja bisa menyiram kepala/tangan dengan air dingin saat jam istirahat?",
      q_ne: "प्रश्न २९: गर्मीमा काम गर्दा आरामको समयमा तातेको टाउको र शरीर चिस्याउन कार्यस्थलको आराम कोठा छेउमा राखिने विशेष पानीको व्यवस्था के हो?",
      options: [
        { ja: "簡易シャワー設備（または水道直結の頭部・腕冷却用シンクシャワー）", id: "Fasilitas Pancuran Air Mandi Darurat (Emergency Shower / Wastafel Cuci Kepala & Tangan Air Dingin)", ne: "अस्थायी चिसो पानीको नुहाउने सावर (वा टाउको र हात चिस्याउने पानीको धारा/सिङ्क)" },
        { ja: "熱湯が湧き出る天然温泉風呂", id: "Kolam air panas mendidih", ne: "उम्लेको तातो पानीको पोखरी" },
        { ja: "泥水が溜まった工事用の排水溝", id: "Selokan parit lumpur kotor", ne: "फोहोर हिलोको नाली" },
        { ja: "サボテンが植えてある砂漠エリア", id: "Taman kaktus pasir", ne: "घारी" }
      ],
      answer: 0,
      expJa: "【テキスト P.191参照】休憩時に水道水で頭部や前腕を直接濡らして冷やすことは、体表面からの気化熱放散を劇的に促し、熱中症予防に絶大な効果があります[cite: 21]。",
      expId: "Membasahi kepala dan kedua lengan bawah dengan kucuran air keran saat istirahat menurunkan suhu kulit seketika lewat efek penguapan.",
      expNe: "ब्रेकको बेलामा धाराको चिसो पानीले टाउको र हात पखाल्दा शरीरको राप उडेर जान्छ र हिटस्ट्रोक हुन पाउँदैन।"
    },
    {
      cat: "学科：足場の「布（ぬの）」の緊結と水平精度",
      q: "問30：足場の水平材である「布（ぬの）」を取り付ける際、足場全体の安全性と作業床の水平を保つために守るべき基準はどれですか。",
      q_id: "Soal 30: Bagaimanakah standar perakitan pipa horizontal (Nuno) perancah agar lantai kerja tidak miring miring dan aman dipijak?",
      q_ne: "प्रश्न ३०: खटको तेर्सो पाइप (नुनो) बाँध्दा, भुइँको फलेक नढल्कियोस् र सुरक्षित होस् भन्नाका लागि कुन नियम मान्नुपर्छ?",
      options: [
        { ja: "水平器（レベル）で水平を確認しながら建地に直角クランプ等で堅固に緊結し、各層の高さを均等に揃える", id: "Gunakan waterpass untuk memastikan pipa horizontal rata air, lalu kunci mati dengan klem siku pada tiang tateji di ketinggian yang seragam", ne: "वाटरपासले हेरेर पाइप ठ्याक्कै तेर्सो भएको पक्का गर्दै ठाडो खम्बामा चोक्कोउ क्ल्याम्पले बलियोसँग कस्ने र सबै तलाको उचाइ बराबर मिलाउने" },
        { ja: "手前を高く、奥を低くしてわざと45度傾けて取り付ける", id: "Sengaja dimiringkan 45 derajat", ne: "४५ डिग्री बाङ्गो पारेर कस्ने" },
        { ja: "建地にガムテープで貼り付けるだけでボルトは締めない", id: "Hanya ditempel lakban tanpa baut", ne: "टेपले मात्र टाँस्ने" },
        { ja: "布パイプを途中で切断してブラブラぶら下げておく", id: "Memotong pipa di tengah jalan dan membiarkannya menggantung", ne: "पाइप बीचमै काटेर झुन्ड्याउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.150参照】布パイプが傾いているとその上に敷く作業床全体が傾斜し、作業員の滑落転倒事故を引き起こします。水準器による水平確認が必須です。",
      expId: "Pipa nuno harus 100% rata air horizontal. Pipa yang miring membuat lantai perancah licin melorotkan tukang yang berjalan di atasnya.",
      expNe: "तेर्सो पाइप अलिकति पनि ढल्केको भए त्यसमाथि ओछ्याइने फलेक चिप्लो हुन्छ र मान्छे लड्छ। त्यसैले लेभल हेरेर तेर्सो बाँध्नुपर्छ।"
    },
    {
      cat: "学科：熱中症と「現場の塩分補給タブレットの摂取頻度」",
      q: "問31：猛暑の現場において、作業員が塩分補給タブレット（塩飴）を摂取する際の適切な頻度の目安として正しいものはどれですか。",
      q_id: "Soal 31: Berapakah frekuensi wajar pekerja mengonsumsi tablet permen garam (Shio Tablet) yang diimbangi minum air saat kerja fisik di bawah terik matahari?",
      q_ne: "प्रश्न ३१: चर्को घाममा काम गर्दा पानीसँगै नुनको चक्की (साल्ट ट्याब्लेट) खाने सही समय तालिका कुन हो?",
      options: [
        { ja: "大量に汗をかいている場合、休憩時間ごと（おおむね1時間に1〜2回程度）、コップ1杯の水と一緒に1粒を摂取する", id: "Saat banyak keringat: 1 butir tablet garam setiap jam istirahat (sekitar 1-2 kali per jam) bersama 1 gelas air putih", ne: "धेरै पसिना आउँदा: हरेक ब्रेकको समयमा (घण्टामा करिब १-२ पटक), १ गिलास पानीसँगै १ वटा चक्की खाने" },
        { ja: "1秒間に100粒ずつ休まず食べ続ける", id: "Makan 100 butir per detik tanpa henti", ne: "लगातार १०० वटा खाइरहने" },
        { ja: "1ヶ月に1回だけ舐める", id: "Sebulan sekali", ne: "महिनामा एकपटक मात्र" },
        { ja: "朝起きてから夜寝るまでご飯代わりにタブレットだけを食べる", id: "Makan permen garam sebagai pengganti nasi seharian", ne: "खानाको साटो चक्की मात्र खाने" }
      ],
      answer: 0,
      expJa: "【塩分タブレットの適正摂取】汗の量に応じて「水分補給（15〜20分おき）とセット」で、1回の休憩につき1粒程度を水と一緒に摂取するのが胃腸に優しい基本ペースです。",
      expId: "Minum air tiap 15-20 menit, dan ambil 1 butir permen garam tiap jeda istirahat 1 jam sekali. Jangan makan berlebihan.",
      expNe: "१५-२० मिनेटमा पानी पिउने र घण्टाको ब्रेकमा १ गिलास पानीसँग १ वटा नुनको चक्की खानु नै सबैभन्दा सुरक्षित तरिका हो।"
    },
    {
      cat: "学科：クレーン作業と「吊り荷の地切り確認項目」",
      q: "問32：移動式クレーンで荷を「地切り（20〜30cm浮かせた状態）」した際、合図者と運転手が指差し呼称で確認すべき項目の組み合わせとして正しいものはどれですか。",
      q_id: "Soal 32: Manakah kombinasi 3 item pemeriksaan wajib saat proses 'Jigiri' (menghentikan sejenak angkatan 20 cm dari tanah)?",
      q_ne: "प्रश्न ३२: क्रेनले सामान भुइँबाट २०-३० सेमी उठाएर रोकेको बेला (जिगिरी गर्दा) अनिवार्य हेर्नुपर्ने '३ वटा मुख्य कुराहरू' कुन हुन्?",
      options: [
        { ja: "①荷の水平バランス（傾きがないか） ／ ②ワイヤーの掛かり状態と緩み ／ ③巻上ブレーキの制動（滑り落ちないか）", id: "1. Keseimbangan Beban (Tidak miring) / 2. Kondisi kawat seling mencengkeram rapat / 3. Rem winch derek mengunci pakem (beban tidak melorot)", ne: "१. सामानको सन्तुलन (बाङ्गो नभएको) / २. स्लिङ तार राम्ररी कसेको र नखुस्किएको / ३. क्रेनको ब्रेकले राम्ररी थामेको (सामान तल नझरेको)" },
        { ja: "荷物の色 ／ 運転手の靴のサイズ ／ クレーンの年式", id: "Warna barang / Ukuran sepatu / Tahun truk", ne: "सामानको रङ / जुत्ताको साइज / मोडल" },
        { ja: "現場事務所のテレビ番組 ／ お弁当のおかず ／ 天気予報", id: "Acara TV / Lauk bekal / Ramalan cuaca", ne: "टिभी / खाना / मौसम" },
        { ja: "何も確認せず即座に最高速で巻き上げる", id: "Langsung tarik kencang tanpa cek", ne: "केही नहेरी सिधै तान्ने" }
      ],
      answer: 0,
      expJa: "【地切りの3点確認】荷が少し浮いた瞬間、「荷の重心バランス・ワイヤーの噛み込み・ブレーキの保持」の3点を指差して「ヨシ！」と確認してから本巻上げに移ります。",
      expId: "Tiga cek wajib Jigiri: Keseimbangan barang, ikatan kawat seling, dan rem derek. Semua harus 'YOSHI!' baru boleh ditarik terbang tinggi.",
      expNe: "सामान भुइँबाट उठ्नासाथ सामानको लेभल, तारको कसाइ र ब्रेकको पकड यो ३ कुरा हेरेर 'ठिक छ (योशी)!' भनेपछि मात्र माथि लैजानुपर्छ।"
    },
    {
      cat: "学科：熱中症と「現場の体調不良者の回復後の作業制限」",
      q: "問33：熱中症を発症して日陰で回復した作業員を、当日の午後の作業に復帰させる際の医学的な基本原則はどれですか。",
      q_id: "Soal 33: Bagaimanakah aturan medis yang BENAR jika pekerja yang sempat tumbang kena heatstroke memaksakan diri ingin lanjut kerja di siang hari?",
      q_ne: "प्रश्न ३३: बिहान गर्मीले ढलेको बिरामी साथी दिउँसो 'म काममा फर्किन्छु' भन्दा शोकुचोले मान्नुपर्ने कानुनी र चिकित्सकीय नियम के हो?",
      options: [
        { ja: "原則として当日の炎天下作業や高所危険作業への復帰は「禁止」とし、軽作業に留めるか、無理をさせずに早退・休養させる", id: "HARAM balik ke atap/terik matahari hari itu! Batasi hanya tugas sangat ringan di tempat sejuk, atau pulangkan untuk istirahat total", ne: "दिउँसो फेरि चर्को घाम वा अग्लो जोखिमपूर्ण काममा फर्काउन 'कडा प्रतिबन्ध' लगाउने; अति हलुका काम मात्र दिने वा काम छोडाएर घरमा आराम गर्न पठाउने" },
        { ja: "遅れを取り戻すため、午後は炎天下で3倍激しい重労働をさせる", id: "Menyuruh kerja fisik 3 kali lipat lebih berat di bawah matahari", ne: "समय भ्याउन ३ गुणा बढी गाह्रो काममा जोत्ने" },
        { ja: "休んだ罰として水を飲むことを禁止して作業させる", id: "Melarang minum air sebagai hukuman", ne: "सजाय स्वरूप पानी पिउन नदिई काम लगाउने" },
        { ja: "夜通しで翌朝まで24時間連続で働かせる", id: "Lembur 24 jam semalaman", ne: "रातीभरि २४ घण्टा काम गराउने" }
      ],
      answer: 0,
      expJa: "【熱中症後の当日復帰禁止】一度熱中症を起こした身体は体温調節機能が壊れており、同日中に再発すると即座に重篤な意識障害を起こします。当日の危険作業は禁止です。",
      expId: "Orang yang baru kena heatstroke TIDAK BOLEH kembali ke terik matahari hari itu juga. Organ tubuhnya masih rapuh, terpapar panas lagi akan langsung merobohkannya.",
      expNe: "एकपटक हिटस्ट्रोक भएको मान्छेको शरीर कमजोर भइसकेको हुन्छ। त्यसैले त्यो दिन फेरि घाममा पठाउनै पाइँदैन, घर पठाएर आराम गराउनुपर्छ।"
    },
    {
      cat: "学科：足場の「建地（たてじ）」の間隔基準",
      q: "問34：単管足場を組み立てる際、足場の強度を確保するために守るべき「建地（支柱）と建地の間隔（スパン）」の法定基準はどれですか。",
      q_id: "Soal 34: Berapakah jarak interval maksimal antar tiang vertikal (tateji) pada perancah pipa tunggal (tankan ashiba)?",
      q_ne: "प्रश्न ३४: पाइपको खट (तान्कान आशिबा) बनाउँदा एउटा ठाडो खम्बादेखि अर्को ठाडो खम्बाबीचको दूरी (स्प्यान) बढीमा कति हुनुपर्छ?",
      options: [
        { ja: "桁行方向（長手方向）：1.85m以下 ／ 梁間方向（幅方向）：1.5m以下", id: "Arah Membujur (Panjang): Maksimal 1,85 m / Arah Melintang (Lebar): Maksimal 1,5 m", ne: "लामो दिशातिर: बढीमा १.८५ मिटर / चौडाइ दिशातिर: बढीमा १.५ मिटर" },
        { ja: "桁行方向：50メートル ／ 梁間方向：50メートル", id: "50 meter", ne: "५० मिटर" },
        { ja: "建地の間隔に制限はなく、1本の柱だけでビル全体を囲む", id: "Cukup 1 tiang untuk seluruh gedung", ne: "एउटा मात्र खम्बा भए पुग्छ" },
        { ja: "間隔は1mm以下にしてパイプを隙間なく並べる", id: "Jarak 1 mm", ne: "१ मिमी" }
      ],
      answer: 0,
      expJa: "【安衛則第571条】単管足場の建地間隔は「桁行1.85m以下、梁間1.5m以下」です。これ以上広げるとパイプが荷重に耐えきれず折損倒壊します。",
      expId: "Batas jarak antar tiang perancah: Panjang maks 1,85 m; Lebar maks 1,5 m demi menjamin kekuatan menahan beban adukan dan tukang.",
      expNe: "पाइपको खटका खम्बाहरू लम्बाइतिर १.८५ मिटर र चौडाइतिर १.५ मिटरभन्दा टाढा हुनुहुँदैन, नत्र खट बीचबाटै भाँच्चिन्छ।"
    },
    {
      cat: "学科：熱中症と「現場の塩分補給タブレットの携行」",
      q: "問35：広大な造成現場や高所足場など休憩所から遠い持ち場で作業する際、作業員が個人で携行すべき熱中症対策グッズとして正しいものはどれですか。",
      q_id: "Soal 35: Perlengkapan pribadi apakah yang WAJIB dibawa di kantong rompi pekerja saat bertugas jauh di ujung proyek di musim panas?",
      q_ne: "प्रश्न ३५: आराम कोठाभन्दा धेरै टाढा अग्लो खट वा फिल्डमा काम गर्न जाँदा कामदारले आफ्नो खल्तीमा अनिवार्य बोक्नुपर्ने सुरक्षा सामान कुन हो?",
      options: [
        { ja: "保温水筒（氷入りスポーツドリンク等）と、ポケットに入れた塩分補給タブレット（数粒）", id: "Termos Minum Dingin (Isotonik ber-es) DAN beberapa butir permen garam di saku kantong baju", ne: "चिसो पानीको थर्मस बोतल (बरफ र जीवनजल भएको) र खल्तीमा नुनको चक्की (साल्ट ट्याब्लेट)" },
        { ja: "重い石ころを10個ポケットに詰める", id: "10 butir batu kali di saku", ne: "खल्तीमा १० वटा ढुङ्गा बोक्ने" },
        { ja: "熱いお湯を入れたガラス瓶", id: "Botol kaca berisi air mendidih", ne: "तातो पानीको सिसाको बोतल" },
        { ja: "何も持たずに手ぶらで水分補給を我慢する", id: "Tangan kosong dan menahan haus", ne: "केही नबोकी तिर्खा सहेर बस्ने" }
      ],
      answer: 0,
      expJa: "【携帯給水】遠い持ち場では給水所に戻るのを億劫がり脱水死します。各自が水筒と塩飴を身につけて持ち歩く（携行給水）ルールを徹底します。",
      expId: "Bawa termos es dan permen garam di badan! Jangan biarkan tukang bekerja di lantai atas tanpa membawa botol minum sendiri.",
      expNe: "पानी लिन टाढा आउन अल्छी मानेर मान्छे डिहाइड्रेसनले मर्छ। त्यसैले सबैले आफ्नै साथमा चिसो पानीको बोतल र नुनको चक्की बोक्नै पर्छ।"
    },
    {
      cat: "学科：クレーン作業と「吊り荷の斜め引きの禁止」",
      q: "問36：移動式クレーンにおいて、地上の離れた場所にある重い資材を、フックを斜めに引っ張って引きずり寄せる「斜め吊り（横引き）」が厳禁されている理由は何ですか。",
      q_id: "Soal 36: Mengapa DILARANG KERAS menarik barang dari samping secara miring (Naname-zuri / Dragging) menggunakan crane?",
      q_ne: "प्रश्न ३६: क्रेनको हुकलाई छड्के तानेर भुइँको सामान घिसार्दै उचाल्ने 'छड्के तानातान (नानामे-जुरी)' गर्न किन कडा प्रतिबन्ध लगाइएको हो?",
      options: [
        { ja: "地切りした瞬間に荷が振り子のように作業員に向かって猛スピードで激突し、さらにブームに横曲げ荷重がかかってクレーンが転倒するため", id: "Saat terangkat, beban akan berayun ganas seperti pendulum menghantam pekerja, dan tiang boom crane patah terpuntir gaya samping", ne: "सामान भुइँबाट उठ्नासाथ पिङ जस्तै हुत्तिएर कामदारलाई हानेर मार्छ, र क्रेनको हातमा तेर्सो भार परेर हातै भाँचिन्छ वा क्रेन पल्टिन्छ" },
        { ja: "クレーンのタイヤの空気が抜けるから", id: "Ban kempis", ne: "पाङ्ग्राको हावा खुस्किन्छ भनेर" },
        { ja: "ワイヤーが綺麗に掃除されてしまうから", id: "Kawat jadi bersih", ne: "तार सफा हुन्छ भनेर" },
        { ja: "荷物が軽くなりすぎて上に飛んでいってしまうから", id: "Barang jadi terlalu ringan melayang", ne: "सामान उडेर जान्छ भनेर" }
      ],
      answer: 0,
      expJa: "【クレーン則第73条】クレーンは垂直吊り専用の機械です。斜め引きをすると荷振れによる激突、およびジブの横曲げ破壊・転倒の2大惨事を引き起こします。",
      expId: "Tarik miring (Naname-zuri) membengkokkan tiang boom crane dan membuat barang menghantam pekerja seperti peluru meriam. Dilarang keras!",
      expNe: "क्रेनले सिधा ९० डिग्रीमा मात्र सामान उचाल्नुपर्छ। छड्के ताने सामान पिङ जस्तै हुत्तिएर मान्छे मार्छ र क्रेन पल्टिन्छ।"
    },
    {
      cat: "学科：熱中症と「現場の体調不良者の病院引継ぎ」",
      q: "問37：熱中症で救急搬送された作業員について、医師から元請や会社に対して必ず照会される情報として最も重要なものはどれですか。",
      q_id: "Soal 37: Informasi medis apakah yang selalu ditanyakan dokter IGD rumah sakit kepada mandor saat menerima pasien pekerja proyek yang pingsan?",
      q_ne: "प्रश्न ३७: गर्मीले ढलेको बिरामीलाई अस्पताल पुर्याउनासाथ, इमर्जेन्सी डाक्टरले शोकुचोसँग अनिवार्य सोध्ने सबैभन्दा मुख्य जानकारी के हो?",
      options: [
        { ja: "「倒れた場所の環境（直射日光やWBGT）、何時頃からどのような症状が出たか、倒れた時の意識の有無、現場で何を飲ませ冷やしたか」", id: "Kondisi lingkungan (suhu/matahari), jam berapa mulai lemas, status kesadaran saat ambruk, dan apa saja P3K yang sudah diberikan di proyek", ne: "काम गरेको ठाउँको गर्मी, कति बजेदेखि कस्तो लक्षण देखियो, ढल्दा होस थियो कि थिएन, र कार्यस्थलमा के खुवाइयो र कसरी चिस्याइयो भन्ने विवरण" },
        { ja: "作業員が乗ってきた車のナンバープレートの数字", id: "Plat nomor mobil pekerja", ne: "गाडीको नम्बर" },
        { ja: "作業員の作業服のメーカー名", id: "Merek baju kerja", ne: "कपडाको ब्रान्ड" },
        { ja: "元請の会社の株価の終値", id: "Harga saham perusahaan kontraktor", ne: "कम्पनीको सेयर मूल्य" }
      ],
      answer: 0,
      expJa: "【医師への報告】病院での救命処置（急速輸液やICU管理）は現場での「経過時間と初期処置内容」によって決まります。正確な事実伝達が命を救います。",
      expId: "Dokter butuh data riil: Jam berapa pingsan, suhu lingkungan, dan apakah pasien sempat kejang. Catat ini sebelum ambulans tiba!",
      expNe: "बिरामी कति बजे ढल्यो र फिल्डमा के प्राथमिक उपचार गरियो भन्ने सही जानकारी पाएपछि मात्र डाक्टरले तुरुन्त बचाउन सक्छन्।"
    },
    {
      cat: "学科：足場の「壁つなぎ」の定期点検頻度（P.182）",
      q: "問38：強風や突風による足場の倒壊を防ぐため、職長や点検者が「壁つなぎ金具の緩みや外れ」を点検すべきタイミングとして正しいものはどれですか。",
      q_id: "Soal 38: Kapan sajakah pemeriksaan berkala terhadap klem pengikat dinding (kabe-tsunagi) WAJIB dilakukan untuk mencegah perancah roboh?",
      q_ne: "प्रश्न ३८: खटलाई भित्तामा बाँध्ने रड (काबे-चुनागी) खुकुलो भए/नभएको शोकुचोले कुन-कुन बेलामा अनिवार्य जाँच गर्नै पर्छ?",
      options: [
        { ja: "毎日の作業開始前点検、週間安全点検、および強風・大雨・大雪・地震の直後に必ず実施する", id: "Cek rutin sebelum kerja tiap pagi, inspeksi mingguan, dan WAJIB DICEK ULANG detik pertama setelah angin kencang/hujan/gempa", ne: "हरेक दिन काम थाल्नुअघिको जाँचमा, हप्ताको सुरक्षा जाँचमा, र ठूलो हावाहुरी, पानी वा भूकम्प आएर थामिने बित्तिकै" },
        { ja: "建物が完成して足場を解体する最後の1秒前だけ", id: "Hanya saat mau membongkar perancah", ne: "खट भत्काउने अन्तिम दिन मात्र" },
        { ja: "10年間に1回だけ双眼鏡で眺める", id: "10 tahun sekali", ne: "१० वर्षमा १ पटक" },
        { ja: "壁つなぎは一度付けたら絶対に緩まないので点検は不要である", id: "Tidak perlu dicek karena tidak mungkin kendor", ne: "जाँच गर्नै नपर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.182参照】壁つなぎは風圧の繰り返し振動で徐々に緩みます[cite: 12]。日常点検に加え、台風や地震の後は直ちに全箇所を点検・増し締めします[cite: 12]。",
      expId: "Klem kabe-tsunagi bisa kendor akibat getaran angin tiap hari. Cek tiap pagi dan wajib cek total setelah diterpa badai/gempa.",
      expNe: "हावाको कम्पनले काबे-चुनागीका पेचहरू आफैं खुकुलो हुन्छन्। त्यसैले दैनिक बिहान र हुरीबतासपछि पूरै जाँच्नुपर्छ।"
    },
    {
      cat: "学科：熱中症と「現場の塩分補給タブレットの配備場所」",
      q: "問39：現場で作業員がいつでも自由に塩分を補給できるよう、塩分タブレットや飴を配置しておくべき場所として最も適切なものはどれですか。",
      q_id: "Soal 39: Di manakah lokasi penempatan toples permen garam K3 yang PALING STRATEGIS agar mudah dijangkau semua pekerja di proyek?",
      q_ne: "प्रश्न ३९: कामदारले आवश्यकता अनुसार जतिखेर पनि नुनको चक्की खान सकून् भन्नाका लागि कार्यस्थलको कुन ठाउँमा राख्नु सबैभन्दा राम्रो हुन्छ?",
      options: [
        { ja: "詰所・冷房休憩所の給水器の真横、および現場の各安全掲示板・仮設給水タンクの直近（水と一緒に取れる場所）", id: "Tepat di samping galon air dispenser ruang istirahat ber-AC, dan di samping tangki air minum pos K3 lapangan", ne: "एसी आराम कोठाको पानी मेसिनको ठ्याक्कै छेउमा, र कार्यस्थलको पानी ट्याङ्की तथा सुरक्षा बोर्ड भएको ठाउँमा (पानीसँगै खान मिल्ने गरी)" },
        { ja: "鍵のかかった金庫の奥底に厳重に隠しておく", id: "Terkunci di dalam brankas besi rahasia", ne: "ताल्चा मारेको सेफभित्र लुकाएर" },
        { ja: "屋上の雨水タンクの泥の中に沈めておく", id: "Ditenggelamkan ke tangki air kotor", ne: "फोहोर पानीभित्र डुबाएर" },
        { ja: "現場から5キロメートル離れたコンビニエンスストアのレジの横", id: "Di minimarket 5 km dari proyek", ne: "५ किलोमिटर टाढाको पसलमा" }
      ],
      answer: 0,
      expJa: "【給水と塩分のセット配備】塩分タブレットは「水筒に水を入れる場所」「コップで水を飲む場所」の真横に置くことで、水と塩分の一体摂取を習慣化させます。",
      expId: "Taruh toples permen garam tepat di samping kran air minum! Melihat garam mengingatkan pekerja untuk minum air dan mengambilnya bersamaan.",
      expNe: "पानी पिउने धारा वा ट्याङ्कीको ठ्याक्कै छेउमा नुनको चक्की राखेपछि कामदारले पानी पिउँदा नुन पनि सँगै खान सम्झन्छन्।"
    },
    {
      cat: "学科：特定技能2号職長と「外国人作業員の安全教育」",
      q: "問40：特定技能2号を取得した職長が、自社の外国人後輩や実習生に対して安全指導を行う際、最も誇り高く目指すべき「ゴール（目標）」は何ですか。",
      q_id: "Soal 40: Apakah visi misi paling mulia bagi seorang Shokucho Tokutei Ginou 2 saat mendidik adik-adik pekerja asing dari negaranya di Jepang?",
      q_ne: "प्रश्न ४०: तोकुतेइ गिनौ २ का एक सफल शोकुचोले आफ्ना देशका विदेशी भाइ-बहिनीहरूलाई काम सिकाउँदा मनमा राख्नुपर्ने सबैभन्दा ठूलो र महान लक्ष्य के हो?",
      options: [
        { ja: "「確かな日本の施工技術と安全意識を優しく丁寧に教え込み、全員が怪我なくプロの技能者として自立し、笑顔で活躍できるように導く」こと", id: "Mendidik teknik konstruksi Jepang & disiplin K3 secara sabar, membimbing mereka mandiri menjadi ahli profesional tanpa cedera, dan sukses berkarier bahagia", ne: "'जापानको उच्च प्रविधि र सुरक्षा नियम मायाका साथ धैर्यपूर्वक सिकाएर, कसैलाई चोट नलागी सबैलाई दक्ष मिस्त्रीको रूपमा स्थापित गराई हाँसीखुसी सफल बनाउनु'" },
        { ja: "後輩を怒鳴り散らして自分の代わりに雑用ばかりをやらせること", id: "Membentak junior dan menyuruhnya melakukan tugas babu", ne: "जुनियरलाई गाली गरेर आफ्नो काम सबै उसलाई पन्छाउने" },
        { ja: "日本の安全ルールを教えず適当に作業させて事故を起こさせること", id: "Membiarkan bekerja tanpa aturan K3 sampai celaka", ne: "नियम नसिकाई दुर्घटनामा पर्न दिने" },
        { ja: "自分だけが偉そうにして後輩の相談には一切乗らないこと", id: "Sombong sendirian dan tidak mau mendengar curhat adik kelas", ne: "घमण्ड देखाएर साथीहरूको समस्या नसुन्ने" }
      ],
      answer: 0,
      expJa: "【特定技能2号のリーダーシップ】母国の後輩たちの命とキャリアを守り育てる架け橋となることこそ、特定技能2号職長の真の価値と誇りです。",
      expId: "Anda adalah panutan! Keberhasilan sejati Shokucho Tokutei Ginou 2 adalah mencetak generasi tukang profesional yang selamat dan sejahtera.",
      expNe: "आफ्ना साथीहरूको ज्यान जोगाउँदै उनीहरूलाई पनि आफू जस्तै सफल मिस्त्री र लिडर बनाउनु नै तोकुतेइ गिनौ २ को साँचो गौरव हो।"
    },

    // ==========================================
    // 【実技試験パート：25問（問41〜問65）】
    // ==========================================
    {
      cat: "実技：オートレベルの「逆さ標尺（天井高測定）」",
      q: "問41：室内の型枠スラブ下端や天井の梁下高さをオートレベルで測量する際、スタッフ（標尺）を上下逆さまにして天井に押し当てて測定する場合の計算処理として正しいものはどれですか。",
      q_id: "Soal 41: Saat mengukur elevasi dasar dak plafon/balok dengan membalik rambu ukur staff ke atas (menempel ke plafon), bagaimanakah perhitungan matematikanya?",
      q_ne: "प्रश्न ४१: कोठाभित्र सिलिङ वा बिमको मुनिको उचाइ नाप्न स्टाफ रडलाई उल्टो पारेर सिलिङमा टाँसेर नाप्दा, उचाइको हिसाब गर्दा कुन तरिका अपनाउनुपर्छ?",
      options: [
        { ja: "逆さに当てた標尺の読み値は「マイナス（負の数）」として扱い、器高（視準線高）に数値を「加算（プラス）」して天井高さを求める", id: "Bacaan rambu terbalik dianggap 'MINUS', sehingga untuk mencari tinggi plafon adalah Tinggi Instrumen DITAMBAH angka bacaan rambu terbalik", ne: "उल्टो पारेको स्टाफको अंकलाई 'माइनस' मानिन्छ, र यन्त्रको उचाइमा त्यो अंक 'जोडेर (प्लस गरेर)' सिलिङको ठ्याक्कै उचाइ निकालिन्छ" },
        { ja: "望遠鏡のレンズを天井に向けて斜めに立てる", id: "Mengarahkan teropong miring ke langit", ne: "मेसिनलाई आकाशतिर फर्काउने" },
        { ja: "スタッフをのこぎりで半分に切り落として測る", id: "Memotong dua rambu ukur dengan gergaji", ne: "स्टाफलाई आराले काटेर नाप्ने" },
        { ja: "逆さ標尺は法令で禁止されているので測定してはならない", id: "Dilarang hukum", ne: "नाप्नै नपाइने" }
      ],
      answer: 0,
      expJa: "【逆さ標尺の計算】視準線より上にある天井を測る場合、スタッフの読み値は上向きの距離になります。天井高 ＝ 器高 ＋ 読み値（絶対値）で計算します。",
      expId: "Rambu terbalik (Inverted Staff): Tinggi Plafon = Tinggi Garis Bidik Instrumen + Nilai Bacaan Rambu Terbalik.",
      expNe: "मेसिनको हेर्ने लाइनभन्दा माथि सिलिङ हुने भएकाले, यन्त्रको उचाइमा उल्टो स्टाफको अंक जोड्दा सिलिङको उचाइ निस्कन्छ।"
    },
    {
      cat: "実技：セオドライト（トランシット）の通り芯出し",
      q: "問42：構造物の通り芯（基準直線）をセオドライトで遠くまで通す際、望遠鏡の反転（正・反）測定を行って誤差を打ち消す作業は何ですか。",
      q_id: "Soal 42: Prosedur apakah pada Theodolite yang dilakukan dengan memutar teropong 180 derajat (posisi Piringan Kiri dan Piringan Kanan) untuk membasmi kesalahan alat?",
      q_ne: "प्रश्न ४२: लामो सिधा धर्को कोर्न टेलिस्कोपलाई १८० डिग्री उल्टो-सुल्टो (दायाँ र बायाँ) घुमाएर मेसिनको गल्ती हटाउने नापी विधिलाई के भनिन्छ?",
      options: [
        { ja: "正反測定（せいはんそくてい / 望遠鏡の反転による視準線誤差の消去）", id: "Seihan Sokutei (Pengukuran Posisi Biasa dan Luar Biasa / Direct & Reverse Measurement)", ne: "सेइहान सोकुतेइ (सुल्टो र उल्टो दुवैतिरबाट नापेर मेसिनको खराबी हटाउने विधि)" },
        { ja: "スピード測定", id: "Uji kecepatan", ne: "स्पिड नाप" },
        { ja: "体重測定", id: "Timbang badan", ne: "तौल नाप" },
        { ja: "視力検査", id: "Tes mata minus", ne: "आँखा जाँच" }
      ],
      answer: 0,
      expJa: "【正反測定】望遠鏡を正位と反位（180度反転）で視準して中間点を求めることで、望遠鏡の視準軸誤差や水平軸誤差を完全に相殺して超高精度の直線を引きます。",
      expId: "Metode Direct-Reverse (Seihan) membalik teropong 180° untuk melenyapkan kesalahan mekanis optik, menghasilkan as garis lurus sempurna.",
      expNe: "टेलिस्कोपलाई सुल्टो र उल्टो दुवैतिरबाट हेरेर बीचको बिन्दु निकाल्दा मेसिनको सबै खराबी हटेर १००% सिधा रेखा बन्छ।"
    },
    {
      cat: "実技：足場ジャッキベースの「ねじの出し長」限界",
      q: "問43：枠組足場や単管足場のジャッキベース（ねじ式固定ベース）において、足場の座屈・倒壊を防ぐための「ねじの突出長さ（繰り出し量）」の許容限界はどれですか。",
      q_id: "Soal 43: Berapakah batas panjang maksimal ulir drat jack base yang boleh dikeluarkan demi mencegah patahnya kaki tiang perancah?",
      q_ne: "प्रश्न ४३: खटको जगको ज्याक बेस (उचाइ मिलाउने पेच) धेरै बाहिर निकाल्दा भाँचिने डर हुने भएकाले, पेच बढीमा कति सेन्टिमिटरसम्म मात्र बाहिर निकाल्न पाइन्छ?",
      options: [
        { ja: "ねじの出し長は「25cm（250mm）以内」（または35cm以内の認定品基準）とし、規定長を超えて伸ばしすぎない", id: "Panjang ulir drat yang keluar maksimal '25 cm (250 mm) KE BAWAH' (tidak boleh diputar terlalu tinggi)", ne: "पेच बाहिर निस्कने लम्बाइ बढीमा '२५ सेमी (२५० मिमी) भित्र' हुनुपर्छ (धेरै माथिसम्म बटार्न पाइँदैन)" },
        { ja: "ねじが外れてグラグラ抜けるまで1メートル伸ばす", id: "Diputar sampai 1 meter sampai baut hampir lepas", ne: "पेच फुत्किन लाग्ने गरी १ मिटर माथि तन्काउने" },
        { ja: "ねじをすべて金づちで叩き折って使う", id: "Dihancurkan dengan palu", ne: "पेच हम्बरले भाँच्ने" },
        { ja: "伸ばす長さに制限はなく何メートルでもよい", id: "Bebas tanpa batas", ne: "जति लामो निकाले पनि हुने" }
      ],
      answer: 0,
      expJa: "【ジャッキベース基準】ジャッキのねじを長く出しすぎると曲げ強度が急減し、足場の荷重でネジ部がポッキリ座屈して足場が倒壊します。25cm以内が標準です。",
      expId: "Batas ulir drat jack base maksimal 25 cm! Mengeluarkan drat terlalu panjang membuat batang besi melengkung patah saat menahan beban perancah.",
      expNe: "ज्याक बेसको पेच २५ सेमीभन्दा बढी बाहिर निकाले भार पर्दा पेच बीचबाटै दोब्रिएर पूरै खट ढल्छ।"
    },
    {
      cat: "実技：単管足場の「腕木（うでぎ）」のピッチ（P.150）",
      q: "問44：単管足場において、作業床（足場板）を支えるために布パイプの間に直角に渡す「腕木パイプ」の設置間隔ピッチとして正しいものはどれですか。",
      q_id: "Soal 44: Berapakah jarak interval pemasangan pipa penopang lantai (Udegi) pada perancah pipa tunggal agar papan lantai tidak jebol saat dipijak?",
      q_ne: "प्रश्न ४४: खटको काठको फलेक अड्याउन तेर्सो पारिने सपोर्ट पाइप (उदेगी) कति-कति दूरीको फरकमा बाँध्नुपर्छ?",
      options: [
        { ja: "足場板の厚みやスパンに応じ、原則として「1.0m〜1.05m以下」の間隔で配置する", id: "Sesuai standar papan lantai, dipasang dengan jarak interval maksimal '1,0 meter sampai 1,05 meter ke bawah'", ne: "फलेकको मोटाइ अनुसार, अनिवार्य रूपमा बढीमा '१.० मिटरदेखि १.०५ मिटरको फरकमा' बाँध्ने" },
        { ja: "10メートルおきに1本配置する", id: "Setiap jarak 10 meter", ne: "१० मिटरको फरकमा" },
        { ja: "腕木は使わず足場板を空中に浮かせておく", id: "Tanpa pipa penopang", ne: "पाइप नराखी हावामा राख्ने" },
        { ja: "建物の屋上だけに1本置く", id: "Hanya di atap", ne: "छतमा मात्र राख्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.150参照】足場板（厚さ35mm等）のたわみを防ぎ、安全に歩行させるため、腕木の間隔は「1.0m〜1.05m程度」とし直交クランプで緊結します。",
      expId: "Pipa penopang udegi dipasang maksimal tiap jarak 1 meter agar papan lantai perancah tidak patah melengkung saat tukang memikul beban berat.",
      expNe: "फलेक अड्याउने पाइप १ मिटरभन्दा टाढा भए फलेक लच्किएर भाँच्चिन्छ। त्यसैले १ मिटरको फरकमा पाइप बाँध्नुपर्छ।"
    },
    {
      cat: "実技：スラブコンクリートの打設順序（梁とスラブ）",
      q: "問45：梁とスラブが一体となった床コンクリートを打設する際、ひび割れや型枠の過負荷を防ぐための正しい打設順序はどれですか。",
      q_id: "Soal 45: Manakah urutan pengecoran beton yang BENAR saat mencor balok (Hari) dan pelat lantai (Slab) secara bersamaan?",
      q_ne: "प्रश्न ४५: बिम र भुइँको ढलान एकैसाथ गर्दा, फर्मा फुट्न नदिन र चिरा पर्न नदिन कंक्रीट खन्याउने सही क्रम कुन हो?",
      options: [
        { ja: "まず「柱・壁」を打ち、次に「梁」の底から順に打ち込み、最後に「スラブ」のコンクリートを打って平らに均す", id: "Cor Kolom/Dinding terlebih dahulu -> kemudian cor Balok (Hari) secara bertahap -> terakhir cor Pelat Lantai (Slab) dan ratakan", ne: "पहिले 'पिलर र भित्ता' ढलान गर्ने -> त्यसपछि 'बिम' भर्ने -> र अन्त्यमा 'भुइँको स्ल्याब' ढलान गरी सम्याउने" },
        { ja: "スラブを最初に極厚に打ってから、下にある柱へ無理やり棒で押し込む", id: "Cor lantai dulu baru ditekan masuk ke tiang", ne: "पहिले भुइँ ढलान गरेर पछि पिलरमा ठेल्ने" },
        { ja: "型枠の外側の地面に生コンをすべて捨ててから作業する", id: "Dibuang ke tanah luar", ne: "भुइँमा फालेर काम गर्ने" },
        { ja: "梁の中央だけを打って柱は空洞のまま放置する", id: "Hanya cor tengah balok dan biarkan tiang kosong", ne: "बिम मात्र भरेर पिलर खाली छोड्ने" }
      ],
      answer: 0,
      expJa: "【打設順序の基本】コンクリートは鉛直部材（柱・壁）➔ 水平深部材（梁）➔ 水平版（スラブ）の順に下から上へ沈下（ブリーディング）を見極めながら打ち進めます。",
      expId: "Urutan cor beton: Tiang kolom -> Balok balok -> Lantai dak slab. Ini memberi waktu beton tiang untuk memadat stabil sebelum dibebani cor lantai.",
      expNe: "पहिले ठाडो पिलर-भित्ता भर्नुपर्छ, अनि बिम भरेर अन्तिममा छतको ढलान गर्नुपर्छ। उल्टो गरे फर्मा फुट्छ।"
    },
    {
      cat: "実技：コンクリートの「ブリーディング水」の処理",
      q: "問46：コンクリート打設後、表面に余分な水分が上昇して浮き上がってくる「ブリーディング水」に対する正しい左官仕上げ前の処理はどれですか。",
      q_id: "Soal 46: Bagaimanakah penanganan air semen yang naik menggenang ke permukaan coran (Bleeding Water) sebelum tukang plester menghaluskan lantai?",
      q_ne: "प्रश्न ४६: ढलान गरेपछि कंक्रीटको सतहमा पानी तैरिएर आउने (ब्लिडिङ पानी) समस्या हुँदा, फिनिसिङ गर्नुअघि त्यो पानीलाई के गर्नुपर्छ?",
      options: [
        { ja: "表面の水が引くまで待つか、スポンジやウエスで余分な水を吸い取って除去してから金ごて仕上げを行う（水があるうちにこすらない）", id: "Tunggu sampai air terserap hilang ATAU serap buang genangan air dengan spons/kain, BARU gosok sendok semen kote (jangan gosok saat masih becek air)", ne: "पानी आफैं सुक्न दिने वा स्पन्जले अतिरिक्त पानी तानेर फाल्ने, अनि मात्र गुरमालाले फिनिसिङ गर्ने (पानी भएकै बेला घोट्न निषेध)" },
        { ja: "浮いてきた水の上に乾いたセメントの粉をそのまま大量に振り撒く", id: "Menaburkan bubuk semen kering mentah langsung ke atas genangan air", ne: "पानी माथि सुक्खा सिमेन्टको धुलो छर्कने" },
        { ja: "水たまりの上からペンキを塗って蓋をする", id: "Mengecat di atas genangan air", ne: "पानी माथि रङ लगाउने" },
        { ja: "バーナーで直火であぶって沸騰させて蒸発させる", id: "Membakar dengan api gas sampai mendidih", ne: "आगोले डढाएर पानी उमाल्ने" }
      ],
      answer: 0,
      expJa: "【ブリーディング処理】水が浮いている状態でコテをあてると、脆弱なレイタンス層ができて将来の表面ボロボロ剥離の原因になります。セメント粉まきも厳禁です。",
      expId: "Dilarang menggosok kote saat air bleeding masih menggenang! Air harus dibuang pakai spons. Menaburkan semen kering akan membuat lantai retak mengelupas.",
      expNe: "तैरिएको पानी भएकै बेला गुरमाला चलाए वा सुक्खा सिमेन्ट छर्के ढलानको सतह पछि पापडी परेर उप्किन्छ। त्यसैले पानी हटाएर मात्र सम्याउनुपर्छ।"
    },
    {
      cat: "実技：外壁タイルの「目地詰め（目地モルタル）」（P.168）",
      q: "問47：外壁タイル張り工事において、タイル同士のすき間（目地）にモルタルを詰める際、白華（エフロレッセンス）やタイルの汚れを防ぐ正しい施工法はどれですか。",
      q_id: "Soal 47: Manakah teknik pengisian adukan nat semen keramik (Meji-tsume) dinding luar yang BENAR agar tidak timbul kerak putih garam (Efflorescence)?",
      q_ne: "प्रश्न ४७: भित्तामा टायल टाँसेपछि जोर्नीमा मसला भर्दा (मेजी काम गर्दा) सेतो नुन निस्किएर नफोहोरियोस् भन्नाका लागि कुन तरिका अपनाउनु सही हो?",
      options: [
        { ja: "目地モルタルを目地底まで空洞なく完全に押し込み、表面が締まった段階で目地ごてで強く押さえ、タイル表面についたモルタルは速やかにスポンジ水洗いで拭き取る", id: "Tekan adukan semen nat padat sampai ke dasar, padatkan kuat dengan sendok kote nat, lalu segera bersihkan sisa semen di keramik dengan spons basah", ne: "मसलालाई जोर्नीको पिँधसम्म नहल्लिने गरी भर्ने, विशेष गुरमालाले थिचेर खाँद्ने, र टायलको बाहिर लागेको मसला तुरुन्तै भिजेको स्पन्जले पुछेर सफा गर्ने" },
        { ja: "目地には何も詰めず、土や泥を指で塗りつけておく", id: "Mengisi celah nat dengan tanah lumpur", ne: "हिलो माटो भर्ने" },
        { ja: "タイルが汚れたまま1ヶ月放置してカチカチに固める", id: "Membiarkan semen kotor di keramik selama 1 bulan", ne: "१ महिनासम्म टायल सफा नगरी छाड्ने" },
        { ja: "目地モルタルの中にサラダ油を混ぜてドロドロにする", id: "Mencampur minyak goreng ke adukan semen nat", ne: "खानेतेल मिसाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.168参照】目地に空洞があると雨水が侵入して凍結破壊やタイルの浮き・白華を引き起こします。目地ごてで密実に締め込み、直ちにスポンジ清掃します。",
      expId: "Padatkan nat semen keramik sampai dasar dan langsung lap bersih keramiknya dengan spons basah sebelum semen mengering permanen.",
      expNe: "टायलको जोर्नीमा मसला खाँदिएन भने पानी पसेर जाडोमा टायल फुट्छ। त्यसैले राम्ररी खाँदेर टायल सफा गर्नै पर्छ।"
    },
    {
      cat: "実技：屋根の「雪止め瓦（ゆきどめがわら）」（P.166）",
      q: "問48：日本瓦葺き屋根において、金属製の雪止め金具を取り付ける代わりに、瓦自体の表面に突起（三日月状やリブ）が付いていて雪をせき止める瓦は何ですか。",
      q_id: "Soal 48: Jenis genteng tanah liat tradisional Jepang apakah yang memiliki tonjolan bulan sabit di permukaannya khusus untuk menahan longsoran salju atap?",
      q_ne: "प्रश्न ४८: जापानी परम्परागत टायलको छानामा, फलामे पाताको सट्टा टायलकै माथि चन्द्रमा आकारको उठेको भाग भएर हिउँलाई रोक्ने विशेष टायललाई के भनिन्छ?",
      options: [
        { ja: "雪止め瓦（ゆきどめがわら）", id: "Yukidome-gawara (Genteng Penahan Salju Khusus)", ne: "युकिदोमे-गावारा (हिउँ रोक्ने विशेष टायल)" },
        { ja: "鬼瓦（おにがわら）", id: "Oni-gawara (Genteng Hiasan Kepala Iblis)", ne: "ओनी-गावारा (राक्षसको मुख भएको शोभा टायल)" },
        { ja: "軒瓦（のきがわら）", id: "Noki-gawara (Genteng Ujung Teritisan)", ne: "नोकी-गावारा (किनारको टायल)" },
        { ja: "平瓦（ひらがわら）", id: "Hira-gawara (Genteng Datar Biasa)", ne: "हिरा-गावारा (साधारण टायल)" }
      ],
      answer: 0,
      expJa: "【テキスト P.166参照】和瓦には雪を引っ掛ける輪っかや突起が一体成形された「雪止め瓦」があり、景観を保ちながら落雪被害を防止します。",
      expId: "Yukidome-gawara adalah genteng khusus dengan pengait tonjolan untuk menahan tumpukan salju agar tidak longsor ke jalan.",
      expNe: "यो टायलमा पहिले नै उठेको भाग बनाइएको हुन्छ जसले हिउँलाई छानामै रोकेर तल खस्न दिँदैन।"
    },
    {
      cat: "実技：アルミサッシの「くさび（クサビ）の撤去」（P.173）",
      q: "問49：RC造の窓枠サッシ施工において、仮止めと位置調整のために開口部に差し込んだ「調整用くさび（木製・鉄製）」のモルタル充填時の処置として正しいものはどれですか。",
      q_id: "Soal 49: Bagaimanakah perlakuan yang BENAR terhadap baji ganjal (kusabi) setelah kusen aluminium selesai dilas dan siap diinjeksi adukan mortar?",
      q_ne: "प्रश्न ४९: ढलानको भित्तामा झ्यालको फ्रेम मिलाउन हालिएका काठ वा फलामका पच्चरहरू (कुसाबी) वेल्डिङ सकिएपछि सिमेन्ट भर्ने बेला के गर्नुपर्छ?",
      options: [
        { ja: "溶接完了後、くさびをそのまま埋め込むと雨漏りやサビ・腐食の原因になるため、モルタル充填の工程に合わせて「必ずくさびをすべて抜き取る」", id: "Baji kusabi WAJIB DICABUT KELUAR seluruhnya! Membiarkan kusabi kayu/besi tertanam di dalam semen akan memicu retak kebocoran air", ne: "वेल्डिङ सकिएपछि पच्चरहरू 'अनिवार्य रूपमा सबै थुतेर निकाल्ने', नत्र काठ कुहिएर वा फलाममा खिया लागेर त्यहीँबाट पानी चुहिन्छ" },
        { ja: "くさびを奥まで金づちで叩き込んでモルタルの中に永久に埋めてしまう", id: "Memukul kusabi semakin dalam dan menanamnya selamanya", ne: "पच्चरलाई भित्रै ठोकेर सिमेन्टभित्रै पुर्ने" },
        { ja: "くさびを100本追加して隙間をくさびだけで埋め尽くす", id: "Menambah 100 baji sampai penuh", ne: "१०० वटा पच्चर थपेर भर्ने" },
        { ja: "くさびはそのままにしてサッシを外して捨てる", id: "Mencabut kusen jendela dan meninggalkan bajinya", ne: "झ्याल फालिदिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.173参照】木製くさびを埋め殺すと腐食して空洞ができ、鉄製くさびはサビて膨張爆裂し漏水の道となります。溶接固定後は必ず抜き取ってトロ詰めします。",
      expId: "Baji kusabi wajib dicabut setelah las selesai! Kusabi yang tertinggal di dalam semen akan membusuk dan menjadi jalur masuk bocornya air hujan.",
      expNe: "झ्यालको लेभल मिलाउने पच्चरहरू पछि अनिवार्य थुतेर निकाल्नुपर्छ। भित्रै छाडे काठ कुहिन्छ र पानी चुहिने प्वाल बन्छ।"
    },
    {
      cat: "実技：吹付けウレタンの「ピンホール（ボイド）欠陥」（P.174）",
      q: "問50：硬質ウレタンフォームの吹付け施工において、コンクリート下地が雨水で濡れている状態でウレタン原液を吹き付けた場合に発生する重大な施工不良は何ですか。",
      q_id: "Soal 50: Cacat kegagalan insulasi fatal apakah yang timbul jika busa semprot polyurethane foam disemprotkan ke atas beton yang basah oleh air hujan?",
      q_ne: "प्रश्न ५०: पानीले भिजेको चिसो कंक्रीटमाथि फोम इन्सुलेसन (स्प्रे फोम) छर्किँदा कस्तो भयानक खराबी उत्पन्न हुन्छ?",
      options: [
        { ja: "ウレタン原液が水と異常反応して激しく発泡ガスを吹き出し、無数の気泡穴（ボイド・ピンホール）や密着不良（剥離）を起こして断熱性能がゼロになる", id: "Reaksi kimia abnormal dengan air memicu gas meletup-letup, membentuk rongga bolong-bolong (void/pinhole), dan busa terkelupas lepas dari beton", ne: "केमिकलले पानीसँग अस्वाभाविक रियाक्सन गरेर ग्यास पड्किन्छ, अनगिन्ती प्वालहरू (भ्वाङ) पर्छन्, र फोम भित्तामा नटाँसिई उप्किएर काम नलाग्ने हुन्छ" },
        { ja: "ウレタンがカチカチの純金に変化する", id: "Busa berubah menjadi emas", ne: "सुन बन्ने" },
        { ja: "断熱性能が通常の100倍に強化される", id: "Insulasi makin kuat 100 kali lipat", ne: "१०० गुणा राम्रो हुने" },
        { ja: "コンクリートが完全に透明ガラスになる", id: "Beton berubah menjadi kaca transparan", ne: "सिसा बन्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.174参照】ウレタンは水が大敵です。湿潤下地へ施工すると接着強度がゼロになり、発泡セルが崩壊してスカスカの不良ウレタンになります。完全乾燥下地に施工します。",
      expId: "Air adalah musuh nomor satu insulasi urethane! Menyemprot di atas dinding basah membuat busa berpori bocor dan langsung terkelupas jatuh.",
      expNe: "फोमका लागि पानी काल बराबर हो। चिसो भित्तामा फोम छर्के फोम भित्रैबाट कुहिन्छ र भित्ताबाट उप्किन्छ। भित्ता पूर्ण सुक्खा हुनैपर्छ।"
    },
    {
      cat: "実技：塩ビシート防水の「溶着確認（試し溶着）」",
      q: "問51：塩ビシート防水工事において、熱風溶接機（ライスター等）でシート同士を溶着する際、作業開始前に必ず行う「テスト施工（試し溶着）」の合格判定基準はどれですか。",
      q_id: "Soal 51: Apakah kriteria LULUS pada uji tarik sobek (Peel Test) sambungan lembaran membran PVC yang dilas mesin pemanas udara panas sebelum pekerjaan dimulai?",
      q_ne: "प्रश्न ५१: तातो हावा दिने मेसिन (वेल्डिङ मेसिन) ले प्लास्टिकको वाटरप्रुफिङ सिट टाँस्नुअघि, बिहान नमुना सिट टाँसेर हातले तान्दा 'पास' हुने सही मापदण्ड कुन हो?",
      options: [
        { ja: "溶着した試験片を手で無理やり引き剥がした際、接合面が剥がれるのではなく、塩ビシートの母材（シート自体）が引き裂かれる「母材破壊」が起きること", id: "Saat sambungan ditarik paksa tangan, lembaran PVC-nya yang SOBEK (kerusakan bahan induk), BUKAN lepas di garis sambungan lasnya!", ne: "टाँसेको नमुनालाई हातले बेस्सरी तान्दा, जोर्नी खुस्किने नभई सिटको आफ्नै कपडा च्यातिनुपर्छ (सिटै च्यातिने गरी जोर्नी बलियो हुनुपर्ने)" },
        { ja: "手で引っ張るとシールのようにツルンと簡単に剥がれること", id: "Terlepas licin dengan mudah seperti stiker", ne: "स्टिकर जस्तै सजिलै उप्किने" },
        { ja: "シートが真っ黒に炭化して穴が開いていること", id: "Lembaran gosong bolong hitam", ne: "डढेर कालो प्वाल परेको" },
        { ja: "シートが溶けずに冷たいまま離れること", id: "Lembaran tidak meleleh sama sekali", ne: "तातो नै नभई छुट्टिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.175参照】熱風溶着の品質確認は「母材破壊（シート自体が破れるほどの溶着強度）」が基準です。接合面が剥がれる場合は温度または速度を再調整します。",
      expId: "Uji las PVC yang sempurna: Sambungan las lebih kuat daripada plastiknya. Jika ditarik robek, plastiknya yang koyak, bukan sambungannya yang copot.",
      expNe: "तातोले टाँसेको सिट तान्दा जोर्नी खुस्किए फेल हुन्छ, सिटै च्यातिए मात्र जोर्नी बलियो छ भनी पास मानिन्छ।"
    },
    {
      cat: "実技：研削といしの外観点検（打音検査）",
      q: "問52：ディスクグラインダーに砥石を取り付ける前、内部に目に見えない微細な亀裂（ヒビ割れ）がないか確認するために木槌等で軽く叩く「打音検査」の合格判定音はどれですか。",
      q_id: "Soal 52: Bagaimanakah bunyi pantulan yang BENAR pada Uji Ketuk (Daon Kensa) batu gerinda menggunakan obeng/palu kayu untuk memastikan batu tidak retak di dalam?",
      q_ne: "प्रश्न ५२: ग्राइन्डरमा ढुङ्गा हाल्नुअघि ढुङ्गा भित्र चर्किएको छ कि छैन जाँच्न काठको बिँडले हल्का ठोकेर आवाज सुन्दा (दाओन टेस्ट गर्दा) 'पास' हुने आवाज कस्तो हुन्छ?",
      options: [
        { ja: "「キーン」または「カチッ」とした澄んだ金属的な高い打撃音（ひび割れがある場合は「ボコッ」「バフッ」という濁音が出る）", id: "Bunyi 'TINK / NYARING TINGGI' jernih memantul (jika batu retak, bunyinya akan 'BOP / REDUP PECAH' tidak berdering)", ne: "'टिनिनिन' वा 'ठिन' आवाज आउने प्रष्ट तीखो आवाज (चर्किएको ढुङ्गा भए 'भुस्स' वा 'ढुक' आवाज आउँछ)" },
        { ja: "「ボフッ」という鈍い濁った重い音", id: "Bunyi 'bop' redup tumpul", ne: "धमिलो भुक्क आवाज" },
        { ja: "何も音がしない無音状態", id: "Hening tanpa bunyi", ne: "कुनै आवाज नआउने" },
        { ja: "といしからサイレンの音が鳴り響く", id: "Bunyi sirene", ne: "हर्नको आवाज" }
      ],
      answer: 0,
      expJa: "【といしの打音検査】指にぶら下げたといしを木製ドライバーの柄などでコツコツ叩き、澄んだ金属音を確認します。濁った音（クラックあり）のといしは回転させると即座に粉砕爆発します。",
      expId: "Ketuk batu gerinda dengan obeng kayu: Bunyi nyaring 'TING' = AMAN; bunyi redup 'POK' = RETAK DALAM, langsung buang ke tempat sampah!",
      expNe: "काठको बिँडले हिर्काउँदा 'टिनिन' तीखो आवाज आए ढुङ्गा सग्लो हुन्छ, तर धमिलो 'ढुक' आवाज आए भित्र चर्किएको हुन्छ र मेसिन चलाउनासाथ पड्किन्छ।"
    },
    {
      cat: "実技：足場の「筋交い（すじかい）」の固定ピンの外れ止め",
      q: "問53：枠組足場の建枠に交さ筋交いを取り付けた際、風や振動で筋交いが金具から抜け落ちる事故を防ぐために備えられている安全機構は何ですか。",
      q_id: "Soal 53: Lidah pengaman pengunci apakah yang ada pada tiang perancah gawang (wakugumi) untuk mencegah pipa silang sujikai terlepas sendiri?",
      q_ne: "प्रश्न ५३: जापानी फ्रेम खटमा छड्के डन्डी (सुजिकाई) अड्याएपछि हावाले हल्लाएर फुत्किन नदिन लगाइने लक पिनलाई के भनिन्छ?",
      options: [
        { ja: "筋交い止めピン（グラビティロック / 重力式・ばね式抜け止めストッパー）", id: "Gravity Lock / Kancing Penahan Sujikai (Kait Pengunci Otomatis Penahan Lepas)", ne: "सुजिकाई लक पिन (ग्राभिटी लक / डन्डी फुत्किन नदिने सुरक्षा लचकदार लक)" },
        { ja: "木製のつまようじ", id: "Tusuk gigi kayu", ne: "दाँत कोट्याउने सिन्का" },
        { ja: "輪ゴム", id: "Karet gelang", ne: "रबर" },
        { ja: "セロハンテープ", id: "Solasi kertas", ne: "कागजको टेप" }
      ],
      answer: 0,
      expJa: "【グラビティロック】筋交いをピンにはめ込むと、重力で爪が下りて抜けなくなる「グラビティロック（重力式）」等の外れ止めが正常に作動しているか点検します。",
      expId: "Gravity lock otomatis mengunci pipa silang sujikai dengan beban gravitasinya sendiri. Pastikan lidah kancingnya turun menutup penuh.",
      expNe: "यो लकले डन्डी छिराउनासाथ आफ्नै तौलले झरेर लक गरिदिन्छ, जसले गर्दा हावाले हल्लाए पनि डन्डी बाहिर फुत्किन पाउँदैन।"
    },
    {
      cat: "実技：熱中症と「現場の冷却ベストの保冷剤交換タイミング」",
      q: "問54：炎天下でアイスベスト（保冷剤入りベスト）を着用して作業する際、体温冷却効果を持続させるための保冷パックの交換管理として正しいものはどれですか。",
      q_id: "Soal 54: Berapa jam sekalikan kantong es (ice pack) pada rompi pendingin Ice Vest WAJIB diganti dengan es baru di kulkas saat cuaca terik?",
      q_ne: "प्रश्न ५४: घाममा काम गर्दा लगाएको बरफको भेस्ट (आइस भेस्ट) को बरफ कति-कति घण्टामा नयाँ चिसो बरफसँग फेर्नुपर्छ?",
      options: [
        { ja: "保冷パックが完全に溶けてぬるくなる前（おおむね2時間〜3時間ごと、または昼の休憩時）に、冷凍庫の予備パックと交換する", id: "Setiap '2 sampai 3 jam sekali' (atau saat jam istirahat siang), ganti kantong es yang mulai mencair dengan stok es beku baru dari freezer", ne: "बरफ पूरै पग्लिएर तातो हुनुअगावै (करिब 'हरेक २ देखि ३ घण्टामा' वा दिउँसोको खानाको ब्रेकमा) फ्रिजमा भएको नयाँ जमेको बरफसँग फेर्ने" },
        { ja: "1年に1回だけ交換すれば十分である", id: "Cukup setahun sekali", ne: "वर्षमा एकपटक फेर्ने" },
        { ja: "保冷パックが沸騰してお湯になるまで交換してはならない", id: "Dilarang ganti sampai airnya mendidih", ne: "पानी उम्लिएपछि मात्र फेर्ने" },
        { ja: "保冷剤を破いて中身のジェルを直接飲んでしまう", id: "Meminum gel pendinginnya", ne: "भित्रको जेल खाने" }
      ],
      answer: 0,
      expJa: "【保冷剤の持続限界】一般的な保冷剤の冷却持続時間は猛暑下では約2〜3時間です。ぬるい保冷剤を当て続けると断熱材となり熱がこもるため、定期交換します。",
      expId: "Es di rompi akan mencair dalam 2-3 jam terpapar terik matahari. Selalu siapkan es cadangan di freezer kantor untuk ditukar tiap jeda istirahat.",
      expNe: "घाममा २-३ घण्टामा बरफ पग्लिन्छ। पग्लिएको तातो प्याक लगाइराखे झन् गर्मी हुने भएकाले चिसो बरफसँग फेरिरहनुपर्छ।"
    },
    {
      cat: "実技：救急通報時の「現場住所の正確な伝達」",
      q: "問55：119番の消防指令センターに通報する際、新築現場など正式な住居表示（番地）がまだ決まっていない場所で、救急車を迷わせずに呼ぶための伝達方法はどれですか。",
      q_id: "Soal 55: Bagaimanakah cara menyebutkan lokasi proyek ke operator 119 Ambulans jika lokasi proyek adalah proyek baru yang belum ada nomor rumah resminya?",
      q_ne: "प्रश्न ५५: नयाँ बन्दै गरेको घरमा नम्बर नहुँदा, ११९ एम्बुलेन्सलाई बाटो नअलमलिई छिट्टै बोलाउन ठेगाना बताउने सही तरिका कुन हो?",
      options: [
        { ja: "建築確認看板に記載された地名地番を伝え、さらに「〇〇交差点の北側50m、〇〇小学校の東側の新築工事現場」など、目印となる交差点や建物を伝える", id: "Sebutkan nomor blok tanah pada plang IMB (Kenchiku Kakunin), ditambah patokan jelas: '50 m sebelah utara perempatan XX, samping SD XX'", ne: "साइट अगाडिको अनुमति बोर्डमा लेखिएको जग्गाको ठेगाना बताउने, र नजिकैको चिनिने ठाउँ जस्तै 'फलानो चोकबाट ५० मिटर उत्तर, फलानो स्कुलको पूर्वतिरको नयाँ साइट' भनी प्रष्ट खुलाउने" },
        { ja: "「私の目の前に大きな青空が広がっています」とだけ伝える", id: "Hanya bilang 'di atas saya ada langit biru'", ne: "'मेरो माथि नीलो आकाश छ' मात्र भन्ने" },
        { ja: "「急いで来てください」と叫んですぐに電話を切る", id: "Berteriak 'cepat ke sini!' lalu langsung tutup telepon", ne: "'छिटो आउनु' भनेर फोन काटिदिने" },
        { ja: "自分の母国の自宅の住所をカタカナで伝える", id: "Menyebutkan alamat rumah di negara asalnya", ne: "आफ्नो देशको ठेगाना बताउने" }
      ],
      answer: 0,
      expJa: "【119番通報の技術】番地未確定の新築現場では、建築確認表示板の地番と、「交差点名・近隣の学校やコンビニなどのランドマーク」を伝えることで救急車が最短で到着します。",
      expId: "Sebutkan nama persimpangan jalan terdekat, nama toko/sekolah terdekat, dan nama plang proyek Kenchiku Kakunin agar sopir ambulans tidak tersesat.",
      expNe: "नयाँ साइटमा ठेगाना नहुँदा नजिकको चोक, स्कुल वा पसलको नाम किटेर भनेपछि मात्र एम्बुलेन्स १ मिनेट पनि ढिलो नगरी आइपुग्छ।"
    },
    {
      cat: "実技：足場作業床の「隙間・抜け穴」の養生措置",
      q: "問56：足場の柱の周りやコーナー部分に、足場板が敷ききれず「幅10cmの隙間」が空いてしまいました。職長が指示すべき正しい安全処置はどれですか。",
      q_id: "Soal 56: Ada celah lubang kosong selebar 10 cm di lantai perancah dekat tiang yang tidak tertutup papan. Tindakan perbaikan apakah yang WAJIB diperintahkan Shokucho?",
      q_ne: "प्रश्न ५६: खटको खम्बा वरिपरि फलेक नपुगेर '१० सेन्टिमिटरको खाली प्वाल' रहन गयो। शोकुचोले तुरुन्त कस्तो सुरक्षा सुधार गर्न लगाउनुपर्छ?",
      options: [
        { ja: "そのまま放置せず、専用の隙間塞ぎ板（隙間埋め部材や合板）を番線で強固に固定し、足の踏み外しや工具落下の隙間を完全に塞ぐ", id: "Segera pasang pelat penutup celah khusus (sukima-ume) atau potongan triplek tebal yang diikat kawat mati agar celah tertutup rata", ne: "त्यत्तिकै नछाड्ने, विशेष खाली ठाउँ पुर्ने पाता वा काठको फलेक हालेर बलियो तारले बाँध्ने र खुट्टा चिप्लिने वा औजार खस्ने प्वाल पूरै बन्द गर्ने" },
        { ja: "10cmくらいなら人間は落ちないのでそのまま放置させる", id: "Dibiarkan saja karena manusia tidak muat", ne: "मान्छे खस्दैन भन्दै खुला छाड्ने" },
        { ja: "隙間から下に唾を吐いて遊ぶように指示する", id: "Menyuruh meludah lewat celah itu", ne: "त्यही प्वालबाट तल थुक्न लगाउने" },
        { ja: "隙間の上に薄い紙を1枚載せて見えなくする", id: "Ditutupi selembar kertas tipis", ne: "पातलो कागजले छोप्ने" }
      ],
      answer: 0,
      expJa: "【隙間3cm以下の原則】足場板の隙間は3cm以下が法令基準です。10cmの隙間は足を挟んで骨折転落するか、落とした工具が階下の人を直撃します。即時閉塞します。",
      expId: "Celah 10 cm adalah perangkap maut! Kaki pekerja bisa terperosok patah dan palu bisa jatuh membunuh orang di bawah. Tutup rapat pakai papan kayu!",
      expNe: "१० सेमीको प्वालमा खुट्टा फसेर मान्छे लड्छ र औजार तल खस्छ। त्यसैले तुरुन्तै काठको फलेक ठोकेर प्वाल टाल्नै पर्छ।"
    },
    {
      cat: "実技：携帯用丸のこの「刃の交換時のプラグ抜き」",
      q: "問57：携帯用電気丸のこの替刃を交換する際、誤ってスイッチに触れて刃が突然回転し、指を切り落とす大事故を防ぐための絶対ルールは何ですか。",
      q_id: "Soal 57: Aturan keselamatan MUTLAK apakah yang WAJIB dilakukan sebelum tangan menyentuh mata pisau gergaji bundar saat mengganti pisau?",
      q_ne: "प्रश्न ५७: गोलो आरा (मारुनोको) को ब्लेड फेर्दा, झुक्केर स्वीच थिचिएर आरा घुम्दा हात नकाटियोस् भन्नाका लागि अनिवार्य गर्नुपर्ने मुख्य काम के हो?",
      options: [
        { ja: "必ず「電源プラグをコンセントから完全に抜く（充電式の場合はバッテリーを本体から取り外す）」ことを指差し確認してから刃に触れる", id: "WAJIB 'CABUT COLOKAN KABEL DARI STOPKONTAK' (atau cabut baterai untuk tipe cordless) dan pastikan tunjuk-sebut sebelum menyentuh pisau!", ne: "अनिवार्य रूपमा 'बिजुलीको तार प्लगबाट पूरै थुत्ने (ब्याट्रीवाला भए ब्याट्री नै बाहिर निकाल्ने)' र आँखाले हेरेर पक्का गरेपछि मात्र ब्लेड छुने" },
        { ja: "電源プラグを挿したまま、スイッチレバーを握りしめて刃を取り替える", id: "Mengganti pisau sambil memegang tombol saklar listrik menyala", ne: "प्लग जोडेकै अवस्थामा स्वीच समातेर ब्लेड खोल्ने" },
        { ja: "丸のこを通電して最高速で回転させながらスパナでボルトを緩める", id: "Memutar mesin kencang sambil menempelkan kunci pas", ne: "मेसिन घुमिरहेकै बेला रेन्चले नट खोल्न खोज्ने" },
        { ja: "目を閉じて手探りで交換する", id: "Mengganti pisau dengan mata tertutup", ne: "आँखा चिम्लेर फेर्ने" }
      ],
      answer: 0,
      expJa: "【刃物交換の電源遮断】「プラグを抜く／バッテリーを外す」を怠った刃物交換中の誤起動切断事故は後を絶ちません。物理的に電力を遮断して交換します。",
      expId: "CABUT COLOKAN / BATERAI SEBELUM SENTUH PISAU! Sedikit senggolan di tombol saat kabel terpasang akan memenggal putus jari-jari tangan Anda.",
      expNe: "प्लग नथुती वा ब्याट्री ननिकाली ब्लेड छुँदा झुक्केर स्वीच थिचिए औंला तत्कालै काटिन्छ। त्यसैले बत्तीको कनेक्सन पूरै काटेर मात्र ब्लेड फेर्नुपर्छ।"
    },
    {
      cat: "学科：熱中症と「現場の塩分入り飴・タブレットの塩分量」",
      q: "問58：市販の塩熱サプリや塩飴を1粒食べた際、摂取できる食塩相当量はおおむねどれくらいですか。",
      q_id: "Soal 58: Berapakah rata-rata kandungan garam (Natrium/NaCl) yang didapat dari memakan 1 butir permen garam K3?",
      q_ne: "प्रश्न ५८: कार्यस्थलमा खाइने १ वटा नुनको चक्की (साल्ट ट्याब्लेट) बाट शरीरलाई करिब कति ग्राम नुन प्राप्त हुन्छ?",
      options: [
        { ja: "1粒あたり おおむね「0.1g 〜 0.2g程度」（コップ1杯の水と飲むことで0.1%食塩水とほぼ同等になる）", id: "Sekitar '0,1 gram sampai 0,2 gram' per butir (jika diminum dengan 1 gelas air 100-200 ml, setara dengan cairan oralit standar)", ne: "१ वटा चक्कीमा करिब '०.१ देखि ०.२ ग्राम' (१ गिलास पानीसँग खाँदा ०.१% को आदर्श नुनपानी बन्दछ)" },
        { ja: "1粒あたり 500グラム（塩の塊）", id: "500 gram garam per butir", ne: "५०० ग्राम नुन" },
        { ja: "塩分はゼロで砂糖しか入っていない", id: "Nol gram garam", ne: "नुन नै नभएको" },
        { ja: "1粒あたり 10キログラム", id: "10 kg garam", ne: "१० किलो नुन" }
      ],
      answer: 0,
      expJa: "【タブレットの塩分量】熱中症用タブレット1粒には約0.1〜0.2gの食塩が含まれており、コップ1杯（100〜150ml）の水と合わせて飲むことで最適な電解質バランスになります。",
      expId: "Satu permen garam mengandung ~0,1-0,2 g garam. Minum dengan segelas air putih menghasilkan larutan seimbang yang pas diserap tubuh.",
      expNe: "एउटा चक्कीमा ०.१-०.२ ग्राम नुन हुन्छ। त्यसैले १ गिलास पानीसँग १ वटा चक्की खाँदा शरीरमा ठ्याक्कै आवश्यक नुन पुग्छ।"
    },
    {
      cat: "実技：ディスクグラインダーの「といしの締め付けフランジ」",
      q: "問59：ディスクグラインダーに研削といしを取り付ける際、専用の固定金具（フランジ・座金）を取り付ける正しいルールはどれですか。",
      q_id: "Soal 59: Bagaimanakah aturan pemasangan klem piringan (flange) penjepit batu gerinda yang BENAR?",
      q_ne: "प्रश्न ५९: ग्राइन्डरमा ढुङ्गा कस्दा ढुङ्गालाई दुवैतिरबाट च्याप्ने फलामे वासर (फ्ल्यान्ज) कस्ने सही नियम कुन हो?",
      options: [
        { ja: "といしの表裏にメーカー純正の正規フランジを正しく組み合わせ、専用ピンスパナを用いて締めすぎず緩みなく均等に締め付ける", id: "Gunakan sepasang Flange Asli pabrik yang cocok di kedua sisi batu, kencangkan pas memakai kunci pin khusus tanpa dipaksa over-torsi", ne: "ढुङ्गाको दुवैतिर कम्पनीको ओरिजिनल वासर (फ्ल्यान्ज) सही तरिकाले राख्ने, र आफ्नै विशेष रेन्चले नफुत्किने गरी ठिक्क कस्ने (धेरै बल गरेर नथिच्ने)" },
        { ja: "フランジを紛失したので、大きな石を挟んでハンマーで叩き込む", id: "Mengganjal dengan batu kali", ne: "ढुङ्गा हालेर हम्बरले ठोक्ने" },
        { ja: "といしが割れるまで巨大なパイプレンチで限界まで力任せに締め上げる", id: "Mengencangkan sekuat tenaga sampai batu gerinda retak", ne: "ढुङ्गा नै चर्किने गरी ठूलो रेन्चले बेस्सरी कस्ने" },
        { ja: "フランジは付けずにナット1個だけで止める", id: "Tanpa flange dan hanya pakai mur biasa", ne: "वासर नराखी एउटा नट मात्र कस्ने" }
      ],
      answer: 0,
      expJa: "【フランジの締付け】外径の異なる不適合フランジや締めすぎは、といし内部に初期クラック（ひび割れ）を発生させ破裂事故の原因になります。正規フランジを適正トルクで締めます。",
      expId: "Flange asli wajib menjepit kedua sisi batu gerinda secara merata. Mengencangkan terlalu keras membuat batu gerinda retak di dalam sebelum berputar.",
      expNe: "वासर धेरै कसे भित्रै ढुङ्गा चर्किएर घुम्दा पड्किन्छ। त्यसैले आफ्नै ओरिजिनल वासर हालेर ठिक्क शक्तिमा कस्नुपर्छ।"
    },
    {
      cat: "実技：熱中症と「現場の体調不良者の搬送時のエアコン」",
      q: "問60：熱中症の作業員を会社の車（乗用車・ワゴン車）に乗せて病院へ搬送する際、車内のエアコン（空調）の設定として正しいものはどれですか。",
      q_id: "Soal 60: Bagaimanakah setelan AC mobil yang BENAR saat membawa pekerja korban heatstroke ke IGD rumah sakit?",
      q_ne: "प्रश्न ६०: हिटस्ट्रोक लागेको बिरामीलाई गाडीमा राखेर अस्पताल लैजाँदा गाडीको एसी कस्तो बनाएर कुदाउनुपर्छ?",
      options: [
        { ja: "車内の冷房（クーラー）を最大に効かせて涼しく保ち、冷たい風を直接当てながら、必要に応じて首や脇に氷嚢を当て続けて搬送する", id: "Nyalakan AC mobil pendingin secara MAKSIMAL, arahkan hembusan angin dingin ke tubuh korban, dan teruskan kompres es di leher/ketiak selama perjalanan", ne: "गाडीको एसीलाई 'पूरै चिसो (अधिकतम)' बनाएर चलाउने, चिसो हावा बिरामीको शरीरमा पार्ने, र बाटोभरि घाँटी र काखीमा बरफ लगाइरहने" },
        { ja: "ヒーター（暖房）を限界まで熱く入れて窓を締め切る", id: "Menyalakan pemanas heater panas maksimal", ne: "हिटर बालेर गाडी झन् तातो बनाउने" },
        { ja: "エアコンを切り、真夏の熱気が入るように窓を全開にして走る", id: "Mematikan AC dan membuka jendela lebar di cuaca terik", ne: "एसी बन्द गरेर घामको तातो हावा छिराउने" },
        { ja: "車内をサウナ状態にして汗をかかせる", id: "Membuat kabin mobil seperti sauna", ne: "गाडीलाई साउना जस्तो बनाउने" }
      ],
      answer: 0,
      expJa: "【搬送中の継続冷却】車内が高温だと搬送中の数十分で深部体温が急上昇し脳死に至ります。エアコン最強＋氷嚢冷却を病院到着の最後の1秒まで継続します。",
      expId: "AC mobil wajib dingin maksimal! Menaruh korban heatstroke di mobil panas tanpa AC akan membunuhnya sebelum sampai di gerbang rumah sakit.",
      expNe: "गाडीभित्र गर्मी भए बाटोमै मान्छेको दिमाग मर्छ। त्यसैले गाडीको एसी पूरै चिसो बनाएर बरफ लगाउँदै अस्पताल पुर्याउनुपर्छ।"
    },
    {
      cat: "実技：足場作業床の「跳ね出し部の踏み抜き禁止」（P.150）",
      q: "問61：足場板の端部が腕木パイプから30cm以上長く突き出ている「跳ね出し部分」について、作業員に徹底すべき歩行禁止ルールはどれですか。",
      q_id: "Soal 61: Bahaya maut apakah yang terjadi jika pekerja menginjak ujung papan perancah yang menonjol keluar bebas tanpa tumpuan pipa (Overhang Cantilever)?",
      q_ne: "प्रश्न ६१: खटको पाइपभन्दा धेरै बाहिर हावामा निस्किएको काठको फलेकको टुप्पो (ओभरह्याङ भाग) मा झुक्केर टेक्दा कस्तो भयानक दुर्घटना हुन्छ?",
      options: [
        { ja: "端を踏んだ瞬間にシーソーのように板が跳ね上がり、足場板ごと作業員が真っ逆さまに階下へ墜落するため、跳ね出し端部には絶対に足を乗せない", id: "Begitu ujung diinjak, papan akan terjungkit seperti jungkat-jungkit (seesaw) dan melempar pekerja jatuh ke jurang! Dilarang menginjak ujung papan!", ne: "छेउमा टेक्ने बित्तिकै फलेक पिङ जस्तै हुत्तिएर पल्टिन्छ र फलेकसँगै मान्छे सिधै तल खसेर मर्छ, त्यसैले बाहिर निस्किएको छेउमा कहिल्यै टेक्न पाइँदैन" },
        { ja: "トランポリンのように跳ねて上の階へ飛び移れる", id: "Bisa melompat indah ke lantai atas", ne: "उफ्रेर माथिल्लो तलामा पुगिने" },
        { ja: "足場板が自動的に伸びて階段になる", id: "Papan memanjang jadi tangga", ne: "फलेक आफैं लामो बन्ने" },
        { ja: "何も起きず安全に作業できる", id: "Aman tanpa bahaya", ne: "केही नहुने" }
      ],
      answer: 0,
      expJa: "【テキスト P.150参照】跳ね出し端部の踏み抜き転落は足場事故の典型です。跳ね出し長さは20cm以下とし、支持点のない端部には防護措置を講じます。",
      expId: "Menginjak ujung papan perancah yang menjulur tanpa tumpuan sama saja menginjak jebakan maut jungkat-jungkit. Jangan injak ujung papan!",
      expNe: "मुनि सपोर्ट नभएको फलेकको छेउमा टेक्नासाथ फलेक पल्टिएर मान्छे तल खस्छ। त्यस्तो ठाउँमा झुक्केर पनि खुट्टा हाल्नुहुन्न।"
    },
    {
      cat: "実技：熱中症と「現場の塩分補給タブレットの保管期限」",
      q: "問62：現場事務所に昨年の夏から保管されていた「開封済みの古い塩分タブレット」を発見しました。職長としての正しい判断はどれですか。",
      q_id: "Soal 62: Anda menemukan toples permen garam K3 sisa tahun lalu yang sudah terbuka dan agak lembab lengket. Apakah keputusan yang BENAR?",
      q_ne: "प्रश्न ६२: साइट अफिसमा पोहोर सालको बिर्को खुलिसकेको, ओस पसेर लतपतिएको पुरानो नुनको चक्की भेटियो। शोकुचोले के निर्णय गर्नुपर्छ?",
      options: [
        { ja: "湿気を吸って変質・カビや細菌が繁殖している恐れがあるため廃棄し、今シーズン用に新しく購入した未開封の正規タブレットを配備する", id: "BUANG KE TEMPAT SAMPAH! Permen garam yang lembab lengket bisa terkontaminasi bakteri. Ganti dengan stok baru yang masih segel!", ne: "तुरुन्त 'फोहोरमा फाल्ने'! ओसले गर्दा ब्याक्टेरिया र ढुसी परिसकेको हुनसक्छ। यो वर्षका लागि नयाँ सिलबन्दी भएको चक्की ल्याएर राख्ने" },
        { ja: "もったいないので作業員全員に配って全部食べ切らせる", id: "Menyuruh pekerja menghabiskannya agar tidak mubazir", ne: "खेर नजाओस् भनेर सबैलाई बाँडेर जबर्जस्ती खान लगाउने" },
        { ja: "天日干ししてカビを乾かしてから配る", id: "Dijemur matahari lalu dibagikan", ne: "घाममा सुकाएर फेरि बाँड्ने" },
        { ja: "水に溶かして目薬として再利用する", id: "Dilarutkan jadi obat tetes mata", ne: "आँखामा हाल्ने" }
      ],
      answer: 0,
      expJa: "【食品衛生と熱中症】開封後1年経ったタブレットは湿気を含み衛生上危険です。作業員の健康管理のため、シーズンごとに新しい未開封品を配備します。",
      expId: "Permen garam sisa tahun lalu yang lengket wajib dibuang. Jangan korbankan perut anak buah dengan makanan basi demi hemat receh.",
      expNe: "पोहरको पुरानो चक्कीमा ढुसी परेर झाडापखाला लाग्न सक्छ। त्यसैले पुरानो चक्की फ्याँकेर नयाँ चक्की मात्र बाँड्नुपर्छ।"
    },
    {
      cat: "実技：クレーン作業と「吊り荷の合図の復唱」",
      q: "問63：騒音の激しい現場において、無線機（トランシーバー）を用いてクレーン運転手に合図を送る際、誤作動や聞き間違いを防ぐための交信ルールはどれですか。",
      q_id: "Soal 63: Aturan komunikasi radio HT apakah yang WAJIB dipatuhi antara juru sinyal dan operator crane di proyek yang bising?",
      q_ne: "प्रश्न ६३: चर्को आवाज आउने कार्यस्थलमा वाकीटकीबाट क्रेन चालकलाई इसारा दिँदा, गलत निर्देशन हुन नदिन कुन नियम कडाइका साथ मान्नुपर्छ?",
      options: [
        { ja: "合図者は「巻上げ」「スロー」「停止」等の短い標準用語を用い、クレーン運転手は合図の指示内容を必ず声に出して復唱（オウム返し）してから操作する", id: "Gunakan kata standar resmi ('Gulung Naik', 'Pelan', 'STOP!'), dan operator crane WAJIB mengulang sebut (read-back) instruksi sebelum tuas digerakkan", ne: "संकेत दिनेले 'माथि', 'बिस्तारै', 'रोक्नु' जस्ता आधिकारिक छोटा शब्द बोल्ने, र क्रेन चालकले त्यो निर्देशन सुनेर मुखले दोहोर्याएपछि (कन्फर्म गरेपछि) मात्र क्रेन चलाउने" },
        { ja: "早口言葉や冗談を言いながらレバーを動かす", id: "Bercanda sambil menggerakkan tuas", ne: "ठट्टा गर्दै क्रेन चलाउने" },
        { ja: "無言で息遣いだけで指示を伝える", id: "Hanya mendesah tanpa kata", ne: "नबोली सास मात्र फेर्ने" },
        { ja: "音楽を大音量でトランシーバーに流し続ける", id: "Menyetel musik di HT", ne: "वाकीटकीमा गीत बजाउने" }
      ],
      answer: 0,
      expJa: "【無線合図の復唱確認】「巻き上げ」と「巻き下げ」の聞き間違いは即座に墜落や激突事故になります。運転手が「巻上げ了解！」と必ず復唱してから操作します。",
      expId: "Komunikasi crane via HT wajib ada 'Read-Back' (pengulangan kata). Sopir wajib mengulang kata perintah sebelum menyentuh tuas derek.",
      expNe: "वाकीटकीमा निर्देशन सुन्नासाथ चालकले 'माथि उठाउने कुरा बुझें!' भनी दोहोर्याएर पक्का गरेपछि मात्र क्रेन चलाउनुपर्छ।"
    },
    {
      cat: "実技：熱中症と「現場の体調不良者の回復確認チェックリスト」",
      q: "問64：熱中症で休ませた作業員の回復状態を客観的に評価するため、職長がチェックすべき「3つの正常復帰項目」として正しいものはどれですか。",
      q_id: "Soal 64: Manakah 3 indikator fisik yang membuktikan bahwa pekerja BENAR-BENAR SUDAH PULIH dari gejala heatstroke ringan?",
      q_ne: "प्रश्न ६४: आराम गरिरहेको बिरामी साथी पूर्ण रूपमा स्वस्थ भइसक्यो भनेर प्रमाणित गर्ने '३ वटा मुख्य शारीरिक संकेतहरू' कुन हुन्?",
      options: [
        { ja: "①体温が平熱（37℃未満）に戻っている、②会話の受け答えがハッキリして意識が明瞭である、③自力で立ち上がってふらつかずにまっすぐ歩行できる", id: "1. Suhu tubuh normal (< 37°C), 2. Respon bicara lancar dan pikiran jernih, 3. Mampu berdiri dan jalan lurus seimbang tanpa sempoyongan", ne: "१. शरीरको तापक्रम सामान्य (३७ डिग्री मुनि) मा झरेको, २. प्रष्टसँग बोल्न सक्ने र पूर्ण होसमा आएको, र ३. आफैं उठेर नहल्लिईकन सिधा हिँड्न सकेको" },
        { ja: "まだ熱が41℃あるが本人が笑っている", id: "Masih demam 41°C tapi tersenyum", ne: "तापक्रम ४१ डिग्री भए पनि हाँसिरहेको" },
        { ja: "目は開かないが息をしている", id: "Mata merem tapi bernapas", ne: "आँखा नखोले पनि सास फेरिरहेको" },
        { ja: "足がガクガク震えて立っていられない", id: "Kaki gemetar tidak bisa berdiri", ne: "खुट्टा कापेर उभिन नसकेको" }
      ],
      answer: 0,
      expJa: "【回復の3条件】体温平熱復帰・意識完全清明・平衡感覚（歩行）正常の3つが揃って初めて「回復」と判定します。1つでも欠けていれば病院搬送です。",
      expId: "3 syarat pulih total: Suhu < 37°C, pikiran sadar penuh, dan bisa jalan lurus tegap. Jika salah satu belum terpenuhi, bawa ke dokter!",
      expNe: "तापक्रम ३७ डिग्री मुनि आउने, बोली प्रष्ट हुने र सिधा हिँड्न सक्ने यो ३ वटै कुरा ठीक भए मात्र बिरामी निको भएको मानिन्छ।"
    },
    {
      cat: "実技：特定技能2号職長の「本日の無事故完了の誓い」",
      q: "問65：本日の作業がすべて完了し、終業ミーティング（終礼）を行う際、職長が班員全員の無事故を確認して締めくくる最後の掛け声は何ですか。",
      q_id: "Soal 65: Apakah salam penutup K3 yang diucapkan lantang bersama seluruh tim saat apel pulang sore hari untuk bersyukur atas Zero Accident hari ini?",
      q_ne: "प्रश्न ६५: दिनभरिको काम दुर्घटनाबिना सम्पन्न भएपछि, साँझको बिदाइ बैठक (शुउरेइ) मा शोकुचो र साथीहरूले एकअर्कालाई सम्मान गर्दै भन्ने अन्तिम सुरक्षा नारा के हो?",
      options: [
        { ja: "「本日も一日、無事故・無災害ヨシ！お疲れ様でした！明日もご安全に！」", id: "'Hari ini NIHIL KECELAKAAN - YOSHI! Terima kasih atas kerja kerasnya, Besok tetap GO-ANZEN NI!'", ne: "'आज पनि दिनभरि शून्य दुर्घटना - ठिक छ (योशी)! सबैलाई धेरै-धेरै धन्यवाद! भोलि पनि सुरक्षित रहनुहोस् (गो-आन्जेन नि)!' " },
        { ja: "「誰も死ななくてラッキーだったな、バイバイ」", id: "Untung tidak mati, bye-bye", ne: "कोही मरेन भाग्यमानी थियौं, बाइबाइ" },
        { ja: "「明日は全員遅刻してこい」", id: "Besok terlambat saja semua", ne: "भोलि सबै ढिलो आउनु" },
        { ja: "無言で睨みつけて背中を向けて帰る", id: "Pulang tanpa bicara", ne: "नबोली फर्कने" }
      ],
      answer: 0,
      expJa: "【テキスト P.194参照】「無事故の確認」と「互いへの感謝のねぎらい」、そして「明日へのご安全に！」の掛け声が、強い安全文化とチームワークを完成させます。",
      expId: "Penutup apel sore yang sempurna: Tegaskan Zero Accident hari ini, ucapkan otsukaresama deshita, dan serukan 'Go-anzen ni!' untuk esok hari.",
      expNe: "आज कुनै दुर्घटना भएन भनी खुसी साट्ने, साथीहरूको मिहिनेतको कदर गर्ने र भोलिको सुरक्षाको कामना गर्दै 'गो-आन्जेन नि!' भन्नु नै असल संस्कार हो।"
    }
  ]
};
