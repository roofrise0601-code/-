const CURRENT_QUIZ_DATA = {
  title: "Day 4：<ruby>原価管理<rt>げんかかんり</rt></ruby>・<ruby>安全基本<rt>あんぜんきほん</rt></ruby>・<ruby>国家資格<rt>こっかしかく</rt></ruby>",
  key: "score_gakka1_4",
  passScore: 70,
  questions: [
    {
      cat: "第4章 原価管理",
      q: "<ruby>工事原価<rt>こうじげんか</rt></ruby>を<ruby>構成<rt>こうせい</rt></ruby>する「4<ruby>大費目<rt>だいひもく</rt></ruby>」として、**<ruby>誤<rt>あやま</rt></ruby>っているもの**はどれですか。",
      q_id: "Manakah yang SALAH sebagai salah satu dari 'empat elemen biaya utama' dalam biaya konstruksi?",
      q_ne: "निर्माण लागतका 'चार प्रमुख खर्चहरू' मध्ये कुन गलत हो?",
      options: [
        { ja: "材料費（ざいりょうひ）", id: "Biaya material", ne: "सामग्री खर्च" },
        { ja: "労務費（ろうむひ）", id: "Biaya tenaga kerja", ne: "श्रम खर्च" },
        { ja: "外注費（がいちゅうひ）", id: "Biaya subkontraktor", ne: "उप-ठेक्का खर्च" },
        { ja: "営業接待費（えいぎょうせったいひ）", id: "Biaya jamuan bisnis", ne: "व्यापार मनोरन्जन खर्च" }
      ],
      answer: 3,
      expJa: "工事原価の4大費目は「材料費」「労務費」「外注費」「経費」です。営業接待費は本社一般管理費であり現場の工事原価には含まれません。",
      expId: "Empat biaya konstruksi adalah bahan, tenaga kerja, subkontrak, dan operasional. Biaya hiburan adalah biaya kantor pusat.",
      expNe: "निर्माण लागतका चार मुख्य तत्वहरू सामग्री, श्रम, उप-ठेक्का र अन्य खर्च हुन्। मनोरन्जन खर्च यसमा पर्दैन।"
    },
    {
      cat: "第4章 労務費",
      q: "<ruby>自社<rt>じしゃ</rt></ruby>が<ruby>直接雇用<rt>ちょくせつこよう</rt></ruby>している<ruby>職人<rt>しょくにん</rt></ruby>や<ruby>作業員<rt>さぎょういん</rt></ruby>に<ruby>支払<rt>しはら</rt></ruby>う<ruby>賃金<rt>ちんぎん</rt></ruby>・<ruby>給料<rt>きゅうりょう</rt></ruby>は、どの<ruby>費目<rt>ひもく</rt></ruby>に<ruby>分類<rt>ぶんるい</rt></ruby>されますか。",
      q_id: "Upah yang dibayarkan langsung kepada pekerja yang dipekerjakan sendiri termasuk dalam kategori apa?",
      q_ne: "कम्पनीले आफैंले काममा राखेका कामदारहरूलाई दिइने तलब कुन खर्च अन्तर्गत पर्दछ?",
      options: [
        { ja: "労務費（ろうむひ）", id: "Biaya tenaga kerja", ne: "श्रम खर्च" },
        { ja: "外注費（がいちゅうひ）", id: "Biaya subkontraktor", ne: "उप-ठेक्का खर्च" },
        { ja: "仮設経費（かせつけいひ）", id: "Biaya sementara", ne: "अस्थायी खर्च" },
        { ja: "現場経費（げんばけいひ）", id: "Biaya lapangan", ne: "कार्यस्थल खर्च" }
      ],
      answer: 0,
      expJa: "自社で直接雇用する作業員への支払いは「労務費」となります。下請負業者への発注は「外注費」です。",
      expId: "Upah untuk pekerja langsung adalah biaya tenaga kerja (労務費). Pembayaran ke subkontraktor adalah 外注費.",
      expNe: "आफ्ना प्रत्यक्ष कामदारलाई दिइने ज्याला 'श्रम खर्च' हो। सब-कन्ट्रयाक्टरलाई दिइने रकम 'उप-ठेक्का खर्च' हो।"
    },
    {
      cat: "第4章 実行予算",
      q: "<ruby>工事<rt>こうじ</rt></ruby>を<ruby>着工<rt>ちゃっこう</rt></ruby>する<ruby>前<rt>まえ</rt></ruby>に、<ruby>実際<rt>じっさい</rt></ruby>にどれだけの<ruby>費用<rt>ひよう</rt></ruby>で<ruby>施工<rt>せこう</rt></ruby>できるかを<ruby>計算<rt>けいさん</rt></ruby>し、<ruby>利益<rt>りえき</rt></ruby>を<ruby>管理<rt>かんり</rt></ruby>するための<ruby>予算<rt>よさん</rt></ruby>を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk anggaran yang dibuat sebelum konstruksi untuk mengontrol biaya aktual dan keuntungan?",
      q_ne: "काम सुरु हुनुअघि वास्तविक खर्च र नाफा व्यवस्थापन गर्न बनाइने बजेटलाई के भनिन्छ?",
      options: [
        { ja: "概算見積（がいさんみつもり）", id: "Perkiraan kasar", ne: "अनुमानित लागत" },
        { ja: "実行予算（じっこうよさん）", id: "Anggaran pelaksanaan", ne: "कार्यकारी बजेट" },
        { ja: "入札価格（にゅうさつかかく）", id: "Harga tender", ne: "बोलपत्र मूल्य" },
        { ja: "決算報告（けっさんほうこく）", id: "Laporan keuangan akhir", ne: "अन्तिम वित्तीय विवरण" }
      ],
      answer: 1,
      expJa: "受注した工事を計画通り黒字で完成させるため、工事着手前に作成する詳細な社内予算を「実行予算」と呼びます。",
      expId: "Anggaran pelaksanaan (実行予算) dibuat sebelum proyek dimulai untuk memastikan proyek menguntungkan.",
      expNe: "परियोजना नाफामा सम्पन्न गर्न काम सुरु गर्नुअघि बनाइने विस्तृत आन्तरिक बजेटलाई 'कार्यकारी बजेट' भनिन्छ।"
    },
    {
      cat: "第4章 安全基本",
      q: "<ruby>作業着<rt>さぎょうぎ</rt></ruby>や<ruby>保護具<rt>ほごぐ</rt></ruby>の<ruby>着用<rt>ちゃくよう</rt></ruby>において、**<ruby>不適切<rt>ふてきせつ</rt></ruby>なもの**はどれですか。",
      q_id: "Manakah yang TIDAK TEPAT dalam mengenakan pakaian kerja dan alat pelindung?",
      q_ne: "काम गर्ने पोशाक र सुरक्षा उपकरण लगाउने सम्बन्धमा कुन उपयुक्त छैन?",
      options: [
        { ja: "ヘルメットのあご紐を指1本入る程度にしっかり締める", id: "Mengencangkan tali dagu helm hingga pas", ne: "हेल्मेटको फित्तो एउटा औंला छिर्ने गरी कस्ने" },
        { ja: "回転する機械を扱う作業では、巻き込まれ防止のため手袋を着用しない", id: "Tidak memakai sarung tangan pada mesin berputar", ne: "घुम्ने मेसिनमा काम गर्दा पञ्जा नलगाउने" },
        { ja: "夏場の暑い日だったので、作業着の袖をまくって腕を出して作業した", id: "Menggulung lengan baju kerja saat cuaca panas", ne: "गर्मी भएकोले कामको पोशाकको बाहुला माथि सारेर काम गर्ने" },
        { ja: "足元の安全のため、現場の規定に合った安全靴を履く", id: "Memakai sepatu keselamatan sesuai standar", ne: "मापदण्ड अनुसारको सुरक्षा जुत्ता लगाउने" }
      ],
      answer: 2,
      expJa: "建設現場では刃物や鋭利な突起物、紫外線や火傷から皮膚を守るため、原則として長袖・長ズボンの着用が義務付けられています。",
      expId: "Di lokasi kerja, lengan panjang wajib dipakai untuk melindungi kulit dari luka, goresan, atau panas.",
      expNe: "कार्यस्थलमा चोटपटक र घामबाट छाला बचाउन सधैं लामो बाहुला भएको कपडा लगाउनुपर्छ।"
    },
    {
      cat: "第4章 安全帯",
      q: "<ruby>高所作業<rt>こうしょさぎょう</rt></ruby>で<ruby>使用<rt>しよう</rt></ruby>する<ruby>墜落制止用器具<rt>ついらくせいしようきぐ</rt></ruby>の<ruby>原則<rt>げんそく</rt></ruby>として、<ruby>正<rt>ただ</rt></ruby>しいものはどれですか。",
      q_id: "Manakah pernyataan yang BENAR mengenai alat pelindung jatuh (harness) untuk pekerjaan di ketinggian?",
      q_ne: "उचाइमा काम गर्दा प्रयोग गरिने सुरक्षा बेल्ट (हार्नेस) बारे कुन भनाइ सही छ?",
      options: [
        { ja: "墜落制止用器具は、胴ベルト型ではなく「フルハーネス型」が原則である", id: "Harness seluruh tubuh (full harness) adalah standar utama", ne: "फुल हार्नेस प्रकारको बेल्ट प्रयोग गर्नु अनिवार्य नियम हो" },
        { ja: "フックは腰の高さよりできるだけ低い位置に取り付ける", id: "Kait dipasang serendah mungkin dari pinggang", ne: "हुकलाई कम्मरभन्दा सकेसम्म तल झुण्ड्याउने" },
        { ja: "点検でベルトに小さな亀裂があったが、まだ切れていないので使い続けた", id: "Tetap memakai sabuk yang retak karena belum putus", ne: "बेल्टमा सानो चिरिएको भए पनि नचुँडिएसम्म प्रयोग गर्ने" },
        { ja: "安全帯を着用していれば、足場の手すりや巾木は不要である", id: "Pagar pembatas perancah tidak diperlukan jika memakai harness", ne: "हार्नेस लगाएपछि खटको रेलिङको आवश्यकता पर्दैन" }
      ],
      answer: 0,
      expJa: "法改正により、高さ6.75m（建設業では5m）以上の高所作業では「フルハーネス型」の着用が原則化されています。フックは腰より高い位置に掛けるのが基本です。",
      expId: "Sesuai undang-undang, full harness adalah standar utama di ketinggian. Kait harus dipasang lebih tinggi dari pinggang.",
      expNe: "नियम अनुसार उचाइमा काम गर्दा 'फुल हार्नेस' लगाउनु अनिवार्य छ। हुक कम्मरभन्दा माथि अड्काउनुपर्छ।"
    },
    {
      cat: "第4章 技能検定",
      q: "<ruby>職業能力開発促進法<rt>しょくぎょうのうりょくかいはつそくしんほう</rt></ruby>に<ruby>基<rt>もと</rt></ruby>づき、<ruby>労働者<rt>ろうどうしゃ</rt></ruby>の<ruby>持<rt>も</rt></ruby>つ<ruby>技能<rt>ぎのう</rt></ruby>を<ruby>国<rt>くに</rt></ruby>が<ruby>評価<rt>ひょうか</rt></ruby>・<ruby>証明<rt>しょうめい</rt></ruby>する<ruby>国家検定制度<rt>こっかけんていせいど</rt></ruby>を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa nama sistem pengujian nasional yang menilai dan mengesahkan keterampilan pekerja?",
      q_ne: "कामदारहरूको सीप परीक्षण र प्रमाणित गर्ने राष्ट्रिय प्रणालीलाई के भनिन्छ?",
      options: [
        { ja: "技能検定（ぎのうけんてい）", id: "Uji Keterampilan Teknis (Ginou Kentei)", ne: "सीप परीक्षण (गिनौ केन्तेई)" },
        { ja: "日本語能力試験（にほんごのうりょくしけん）", id: "JLPT (Tes Kemampuan Bahasa Jepang)", ne: "जापानी भाषा परीक्षा (JLPT)" },
        { ja: "安全衛生教育（あんぜんえいせいきょういく）", id: "Pendidikan Keselamatan & Kesehatan", ne: "सुरक्षा तथा स्वास्थ्य शिक्षा" },
        { ja: "建設業許可試験（けんせつぎょうきょかしけん）", id: "Ujian Izin Usaha Konstruksi", ne: "निर्माण व्यवसाय इजाजत परीक्षा" }
      ],
      answer: 0,
      expJa: "技能検定に合格すると「技能士」の称号が与えられ、国家資格として高い技術力が公的に証明されます。",
      expId: "Lulus 'Ginou Kentei' memberikan gelar teknisi bersertifikat nasional (Ginoushi).",
      expNe: "'गिनौ केन्तेई' उत्तीर्ण गरेपछि 'गिनौशी' को राष्ट्रिय उपाधि प्राप्त हुन्छ।"
    },
    {
      cat: "第4章 危険予知",
      q: "<ruby>作業前<rt>さぎょうまえ</rt></ruby>に、どのような<ruby>危険<rt>きけん</rt></ruby>が<ruby>潜<rt>ひそ</rt></ruby>んでいるかを<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>い、<ruby>対策<rt>たいさく</rt></ruby>を<ruby>決<rt>き</rt></ruby>めて<ruby>行動目標<rt>こうどうもくひょう</rt></ruby>を<ruby>指差呼称<rt>ゆびさしこしょう</rt></ruby>する<ruby>活動<rt>かつどう</rt></ruby>を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk kegiatan mendiskusikan potensi bahaya dan menentukan tindakan pencegahan sebelum bekerja?",
      q_ne: "काम सुरु गर्नुअघि सम्भावित खतराहरूबारे छलफल गरी रोकथामका उपाय तय गर्ने गतिविधिलाई के भनिन्छ?",
      options: [
        { ja: "KYK（危険予知活動）", id: "KYK (Aktivitas Prediksi Bahaya)", ne: "KYK (खतरा पूर्वानुमान गतिविधि)" },
        { ja: "QCサークル", id: "Gugus Kendali Mutu (QC)", ne: "गुणस्तर नियन्त्रण घेरा" },
        { ja: "朝礼体操（ちょうれいたいそう）", id: "Senam pagi", ne: "बिहानी व्यायाम" },
        { ja: "出欠確認（しゅっけつかくにん）", id: "Pemeriksaan kehadiran", ne: "हाजिरी जाँच" }
      ],
      answer: 0,
      expJa: "KYK（Kiken Yochi Katsudo＝危険予知活動）は、現場で毎朝行われる最も代表的な安全ミーティングです。",
      expId: "KYK adalah aktivitas prediksi bahaya setiap pagi untuk mencegah kecelakaan di tempat kerja.",
      expNe: "KYK कार्यस्थलमा दुर्घटना रोक्न हरेक बिहान गरिने खतरा पूर्वानुमान छलफल हो।"
    },
    {
      cat: "第4章 ヒヤリハット",
      q: "<ruby>事故<rt>じこ</rt></ruby>や<ruby>災害<rt>さいがい</rt></ruby>には至らなかったものの、「**ヒヤリ**」としたり「**ハッ**」とした<ruby>危<rt>あぶ</rt></ruby>ない<ruby>出来事<rt>できごと</rt></ruby>に対する<ruby>正<rt>ただ</rt></ruby>しい<ruby>対応<rt>たいおう</rt></ruby>はどれですか。",
      q_id: "Bagaimana tindakan yang BENAR terhadap insiden nyaris celaka (hiyari-hatto)?",
      q_ne: "दुर्घटना नभए पनि झन्डै दुर्घटना हुन लागेको (हियारी-हात्तो) घटनामा के गर्नुपर्छ?",
      options: [
        { ja: "誰にも怪我がなかったので、上司や仲間には報告せず忘れる", id: "Melupakannya tanpa melapor karena tidak ada yang terluka", ne: "कसैलाई चोट नलागेकोले कसैलाई नबताई बिर्सने" },
        { ja: "怒られるのが怖いので、自分の胸の中にしまっておく", id: "Menyimpannya sendiri karena takut dimarahi", ne: "गाली खाने डरले कसैलाई नभनी आफैंमा राख्ने" },
        { ja: "事例をチーム全体で共有し、重大事故が起きる前に対策を講じる", id: "Membagikan kejadian tersebut ke tim untuk mencegah kecelakaan besar", ne: "ठूलो दुर्घटना हुन नदिन घटना टोलीसँग बाँडेर रोकथाम गर्ने" },
        { ja: "運が悪かっただけと考えて、そのまま同じ方法で作業を続ける", id: "Menganggap hanya nasib buruk dan lanjut bekerja dengan cara yang sama", ne: "भाग्य खराब थियो भन्दै पुरानै तरिकाले काम जारी राख्ने" }
      ],
      answer: 2,
      expJa: "「1件の重大事故の裏には29件の軽微な事故と300件のヒヤリハットがある（ハインリッヒの法則）」と言われます。ヒヤリとした時点で情報を共有し対策することが命を守ります。",
      expId: "Prinsip Heinrich: Di balik 1 kecelakaan fatal ada 300 kejadian nyaris celaka. Melaporkan dan berbagi info sangat penting.",
      expNe: "हेनरिकको नियम: १ ठूलो दुर्घटना पछाडि ३०० वटा साना झन्डै हुने घटना हुन्छन्। यस्ता घटना टोलीमा बाँड्नुपर्छ।"
    },
    {
      cat: "第4章 施工管理",
      q: "<ruby>現場代理人<rt>げんばだいりにん</rt></ruby>や<ruby>職長<rt>しょくちょう</rt></ruby>が<ruby>行<rt>おこな</rt></ruby>う「<ruby>施工管理<rt>せこうかんり</rt></ruby>の4<ruby>大管理<rt>だいかんり</rt></ruby>」に**<ruby>含<rt>ふく</rt></ruby>まれないもの**はどれですか。",
      q_id: "Manakah yang BUKAN merupakan salah satu dari '4 pilar manajemen konstruksi'?",
      q_ne: "निर्माण व्यवस्थापनका 'चार मुख्य व्यवस्थापन' भित्र कुन पर्दैन?",
      options: [
        { ja: "工程管理（こうていかんり）", id: "Manajemen jadwal (proses)", ne: "समय तालिका व्यवस्थापन" },
        { ja: "品質管理（ひんしつかんり）", id: "Manajemen kualitas", ne: "गुणस्तर व्यवस्थापन" },
        { ja: "営業宣伝管理（えいぎょうせんでんかんり）", id: "Manajemen promosi & penjualan", ne: "विज्ञापन तथा प्रचार व्यवस्थापन" },
        { ja: "安全管理（あんぜんかんり）", id: "Manajemen keselamatan", ne: "सुरक्षा व्यवस्थापन" }
      ],
      answer: 2,
      expJa: "施工管理の4大管理は「工程管理」「品質管理」「原価管理」「安全管理」です（QCDS）。営業宣伝は含まれません。",
      expId: "Empat pilar manajemen konstruksi adalah jadwal, kualitas, biaya, dan keselamatan (QCDS).",
      expNe: "निर्माण व्यवस्थापनका चार स्तम्भ समय, गुणस्तर, लागत र सुरक्षा (QCDS) हुन्।"
    },
    {
      cat: "第4章 建設マナー・合図",
      q: "<ruby>現場<rt>げんば</rt></ruby>でクレーンや<ruby>重機<rt>じゅうき</rt></ruby>を<ruby>誘導<rt>ゆうどう</rt></ruby>する際の「<ruby>合図<rt>あいず</rt></ruby>」についての<ruby>説明<rt>せつめい</rt></ruby>として、**<ruby>適切<rt>てきせつ</rt></ruby>なもの**はどれですか。",
      q_id: "Manakah pernyataan yang TEPAT mengenai pemberian isyarat (sinyal) alat berat/crane di tempat kerja?",
      q_ne: "कार्यस्थलमा क्रेन वा भारी उपकरणलाई संकेत (इसारा) दिने सम्बन्धमा कुन उपयुक्त छ?",
      options: [
        { ja: "作業員なら誰でもその場の判断で自由にクレーンに合図を出してよい", id: "Pekerja mana pun boleh memberi sinyal sesuka hati", ne: "जुनसुकै कामदारले पनि आफ्नै हिसाबले क्रेनलाई संकेत दिन मिल्छ" },
        { ja: "指名された特定の合図者1名が、統一された明確な合図を行う", id: "Hanya satu orang pemberi sinyal yang ditunjuk yang memberi instruksi jelas", ne: "तोकिएको एकजना संकेतकर्ताले मात्र स्पष्ट र निश्चित संकेत दिनुपर्छ" },
        { ja: "合図者はオペレーターから見えない死角に立って合図する", id: "Pemberi sinyal berdiri di area blind spot operator", ne: "संकेतकर्ता चालकले नदेख्ने ठाउँमा बसेर संकेत दिने" },
        { ja: "危険を感じても、合図者以外の者が合図（停止）を出してはならない", id: "Orang lain dilarang menyuruh berhenti meski ada bahaya", ne: "खतरा महसुस भए पनि संकेतकर्ता बाहेक अरूले रोक्न भन्नु हुँदैन" }
      ],
      answer: 1,
      expJa: "重機や玉掛けの合図は、混乱を防ぐため「指名された1名の合図者」が行うのが鉄則です。ただし、【緊急停止】の合図だけは危険を発見した誰もが出してよいと決められています。",
      expId: "Sinyal harus diberikan oleh 1 orang yang ditunjuk. Namun, jika ada bahaya mendesak, SIAPA PUN boleh memberi sinyal BERHENTI.",
      expNe: "संकेत तोकिएको एकजनाले मात्र दिनुपर्छ। तर, आपतकालीन अवस्थामा जोसुकैले पनि 'रोक्ने' संकेत दिन पाउँछ।"
    }
  ]
};
