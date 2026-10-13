const CURRENT_QUIZ_DATA = {
  title: "Day 6：<ruby>設備工事<rt>せつびこうじ</rt></ruby>・<ruby>特別教育<rt>とくべつきょういく</rt></ruby>・<ruby>現場<rt>げんば</rt></ruby>の<ruby>合図<rt>あいず</rt></ruby>（テキスト P.83〜98）",
  key: "score_gakka1_6",
  passScore: 70,
  questions: [
    {
      cat: "第6章 電気設備（P.83〜）",
      q: "<ruby>漏電<rt>ろうでん</rt></ruby>による<ruby>感電事故<rt>かんでんじこ</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐため、<ruby>電気機器<rt>でんききき</rt></ruby>の<ruby>金属製外箱<rt>きんぞくせいがいそう</rt></ruby>などを<ruby>大地<rt>だいち</rt></ruby>（<ruby>地面<rt>じめん</rt></ruby>）と<ruby>電線<rt>でんせん</rt></ruby>でつなぐ<ruby>工事<rt>こうじ</rt></ruby>を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk pekerjaan menghubungkan rangka logam peralatan listrik ke tanah (bumi) dengan kabel untuk mencegah sengatan listrik akibat kebocoran arus?",
      q_ne: "करेन्ट चुहावटबाट हुने दुर्घटना रोक्न विद्युतीय उपकरणको धातुको भागलाई तारमार्फत जमिनसँग जोड्ने कामलाई के भनिन्छ?",
      options: [
        { ja: "接地工事（アース工事）", id: "Pekerjaan pembumian / grounding (Earth)", ne: "अर्थिङ कार्य (ग्राउन्डिङ)" },
        { ja: "送電工事（そうでんこうじ）", id: "Pekerjaan transmisi daya", ne: "विद्युत प्रसारण कार्य" },
        { ja: "絶縁破壊（ぜつえんはかい）", id: "Kerusakan isolasi", ne: "इन्सुलेसन क्षति" },
        { ja: "変圧工事（へんあつこうじ）", id: "Pekerjaan transformasi tegangan", ne: "भोल्टेज परिवर्तन कार्य" }
      ],
      answer: 0,
      expJa: "【テキスト P.83参照】接地（アース）工事は、漏電した電流を大地へ安全に逃がし、人間への感電を防ぐ最重要の電気保安工事です。",
      expId: "Grounding (接地工事) mengalirkan arus bocor ke tanah secara aman untuk melindungi manusia dari sengatan listrik.",
      expNe: "अर्थिङ कार्यले लिक भएको करेन्टलाई सुरक्षित रूपमा जमिनमुनि पठाएर मानिसलाई करेन्ट लाग्नबाट बचाउँछ।"
    },
    {
      cat: "第6章 給排水・衛生設備（P.85〜）",
      q: "<ruby>自然流下<rt>しぜんりゅうか</rt></ruby>（<ruby>重力<rt>じゅうりょく</rt></ruby>）で<ruby>汚水<rt>おすい</rt></ruby>や<ruby>雑排水<rt>ざつはいすい</rt></ruby>を<ruby>流<rt>なが</rt></ruby>す<ruby>排水管<rt>はいすいかん</rt></ruby>の<ruby>施工<rt>せこう</rt></ruby>において、**<ruby>最<rt>もっと</rt></ruby>も<ruby>重要<rt>じゅうよう</rt></ruby>なこと**はどれですか。",
      q_id: "Manakah hal PALING PENTING dalam pemasangan pipa pembuangan limbah yang mengalir secara alami menggunakan gravitasi?",
      q_ne: "गुरुत्वाकर्षणको भरमा ढल तथा फोहोर पानी बगाउने पाइप जडान गर्दा सबैभन्दा महत्त्वपूर्ण कुरा कुन हो?",
      options: [
        { ja: "流れの方向に適切な下り勾配（水勾配）を保って配管する", id: "Mempertahankan kemiringan menurun yang tepat ke arah aliran", ne: "पानी बग्ने दिशामा उपयुक्त ओरालो (भिरालो) बनाएर पाइप राख्ने" },
        { ja: "排水が逆流するのを防ぐため、途中で上り坂にする", id: "Membuat tanjakan di tengah untuk mencegah aliran balik", ne: "पानी फर्किन नदिन बीचमा उकालो बनाउने" },
        { ja: "見た目を綺麗にするため、完全に水平（傾きゼロ）に固定する", id: "Dibuat datar sempurna agar terlihat rapi", ne: "राम्रो देखाउन पूर्ण रूपमा तेर्सो बनाउने" },
        { ja: "配管の太さは細ければ細いほど勢いよく流れるので細くする", id: "Menggunakan pipa sekecil mungkin agar aliran kencang", ne: "पानीको गति बढाउन सकेसम्म पातलो पाइप प्रयोग गर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.85参照】自然流下の排水管は、適切な下り勾配（1/50〜1/100など管径に応じた勾配）を確保しないと汚物が滞留・逆流して詰まりの原因になります。",
      expId: "Pipa pembuangan harus memiliki kemiringan menurun yang tepat sesuai diameter pipa agar kotoran tidak mengendap dan menyumbat.",
      expNe: "ढलको पाइपमा उपयुक्त ओरालो ढलान (१/५० देखि १/१०० सम्म) नबनाए फोहोर पानी अड्किने र जाम हुने समस्या हुन्छ।"
    },
    {
      cat: "第6章 空調換気設備（P.87〜）",
      q: "<ruby>室外機<rt>しつがいき</rt></ruby>と<ruby>室内機<rt>しつないき</rt></ruby>をつなぐエアコン（空調機）の<ruby>冷媒配管<rt>れいばいはいかん</rt></ruby>（<ruby>銅管<rt>どうかん</rt></ruby>）に<ruby>求<rt>もと</rt></ruby>められる<ruby>施工<rt>せこう</rt></ruby>として、<ruby>正<rt>ただ</rt></ruby>しいものはどれですか。",
      q_id: "Manakah tindakan yang BENAR dalam pemasangan pipa refrigeran tembaga yang menghubungkan unit outdoor dan indoor AC?",
      q_ne: "एसीको बाहिरी युनिट र भित्री युनिट जोड्ने तामाको पाइप जडान गर्दा कुन कार्य सही हो?",
      options: [
        { ja: "冷媒ガスを通す前に「真空引き」を行って配管内の空気と水分を完全に除去する", id: "Melakukan proses vakum untuk membuang udara dan uap air sebelum mengisi gas", ne: "ग्यास हाल्नुअघि 'भ्याकुम' गरेर पाइपभित्रको हावा र ओस पूर्ण रूपमा हटाउने" },
        { ja: "配管内に結露が起きても冷えるので、断熱材は巻かなくてよい", id: "Tidak perlu membungkus insulasi karena embun membantu mendinginkan", ne: "पाइपमा पानीको थोपा जम्दा चिसो हुने भएकाले इन्सुलेसन बेर्नु पर्दैन" },
        { ja: "配管の長さに合わせて手で何度も急激に曲げて直角を作る", id: "Membengkokkannya secara tajam berulang kali dengan tangan", ne: "हातले पटक-पटक कडासँग दोबारेर ९० डिग्रीको कोण बनाउने" },
        { ja: "配管内部にホコリやゴミが入っても、エアコンの風で外に出るので気にしない", id: "Mengabaikan debu karena akan terbuang sendiri oleh angin AC", ne: "पाइपभित्र धुलो पसे पनि एसीको हावाले उडाउने भएकोले ध्यान नदिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.87参照】冷媒配管内に空気や水分が残っていると、コンプレッサーの故障や冷暖房効率の低下を招きます。専用ポンプによる「真空引き」が必須です。",
      expId: "Proses vakum (真空引き) wajib dilakukan untuk menghilangkan udara dan kelembapan agar kompresor AC tidak rusak.",
      expNe: "पाइपभित्र हावा वा पानी रहेमा कम्प्रेसर बिग्रने भएकोले 'भ्याकुम पम्प' लगाएर सफा गर्नु अनिवार्य हुन्छ।"
    },
    {
      cat: "第6章 特別教育と就業制限（P.89〜）",
      q: "<ruby>労働安全衛生法<rt>ろうどうあんぜんえいせいほう</rt></ruby>における「<ruby>特別教育<rt>とくべつきょういく</rt></ruby>」と「<ruby>技能講習<rt>ぎのうこうしゅう</rt></ruby>」の<ruby>関係<rt>かんけい</rt></ruby>について、**<ruby>正<rt>ただ</rt></ruby>しい<ruby>説明<rt>せつめい</rt></ruby>**はどれですか。",
      q_id: "Manakah penjelasan yang BENAR mengenai perbedaan antara 'Pendidikan Khusus (Tokubetsu Kyoiku)' dan 'Pelatihan Keterampilan (Ginou Koushu)' menurut UU Keselamatan & Kesehatan Kerja?",
      q_ne: "श्रम सुरक्षा तथा स्वास्थ्य ऐन अनुसार 'विशेष शिक्षा' र 'सीप तालिम' बीचको भिन्नता बारे कुन सही हो?",
      options: [
        { ja: "技能講習の修了が必要な危険有害業務は、特別教育の修了だけでは作業できない", id: "Pekerjaan berbahaya yang mewajibkan sertifikat Ginou Koushu tidak boleh dikerjakan hanya dengan sertifikat Tokubetsu Kyoiku", ne: "सीप तालिम (गिनौ कोउशु) चाहिने जोखिमपूर्ण काम विशेष शिक्षा मात्र लिएर गर्न पाइँदैन" },
        { ja: "特別教育を一度修了すれば、どんな大型建設機械でも無制限に運転できる", id: "Lulus Tokubetsu Kyoiku mengizinkan pengoperasian semua alat berat tanpa batas", ne: "विशेष शिक्षा लिएपछि जुनसुकै ठूला मेसिन पनि बिना रोकतोक चलाउन पाइन्छ" },
        { ja: "特別教育と技能講習は全く同じ資格であり名前が違うだけである", id: "Keduanya adalah kualifikasi yang persis sama, hanya beda nama", ne: "दुवै एउटै योग्यता हुन्, नाम मात्र फरक हो" },
        { ja: "外国籍の労働者は、日本語の試験に合格しない限り特別教育を受講できない", id: "Pekerja asing tidak boleh ikut Tokubetsu Kyoiku sebelum lulus tes bahasa Jepang", ne: "विदेशी कामदारले जापानी भाषा परीक्षा पास नगरेसम्म विशेष शिक्षा लिन पाउँदैनन्" }
      ],
      answer: 0,
      expJa: "【テキスト P.89参照】危険度が高い「就業制限業務」は都道府県労働局長登録教習機関での『技能講習修了証』が必要です。特別教育の上位資格にあたります。",
      expId: "Pekerjaan berisiko tinggi wajib memiliki sertifikat 'Ginou Koushu'. Sertifikat 'Tokubetsu Kyoiku' saja tidak cukup.",
      expNe: "धेरै जोखिमपूर्ण काम गर्न 'सीप तालिम (गिनौ कोउशु)' को प्रमाणपत्र चाहिन्छ। विशेष शिक्षाले मात्र त्यस्ता काम गर्न मिल्दैन।"
    },
    {
      cat: "第6章 玉掛けの資格区分（P.91〜）",
      q: "クレーンの「<ruby>玉掛<rt>たまか</rt></ruby>け<ruby>作業<rt>さぎょう</rt></ruby>」において、**吊り上げ荷重が1トン以上のクレーン**を<ruby>使用<rt>しよう</rt></ruby>して<ruby>荷掛<rt>にか</rt></ruby>けを<ruby>行<rt>おこな</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>に<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>資格<rt>しかく</rt></ruby>はどれですか。",
      q_id: "Kualifikasi apa yang WAJIB dimiliki untuk melakukan pekerjaan pemasangan sling (tamakake) pada crane dengan kapasitas angkat 1 ton atau lebih?",
      q_ne: "१ टन वा सोभन्दा बढी क्षमताको क्रेनमा सामान बाँध्ने (तामाकाके) काम गर्न कुन योग्यता अनिवार्य चाहिन्छ?",
      options: [
        { ja: "玉掛け技能講習修了証", id: "Sertifikat Pelatihan Keterampilan Tamakake (Ginou Koushu)", ne: "तामाकाके सीप तालिम प्रमाणपत्र (गिनौ कोउशु)" },
        { ja: "玉掛け特別教育修了証", id: "Sertifikat Pendidikan Khusus Tamakake (Tokubetsu Kyoiku)", ne: "तामाकाके विशेष शिक्षा प्रमाणपत्र" },
        { ja: "普通自動車運転免許", id: "SIM mobil standar", ne: "साधारण सवारी चालक अनुमतिपत्र" },
        { ja: "資格は不要（誰でも作業可能）", id: "Tidak butuh sertifikat (siapa saja boleh)", ne: "कुनै योग्यता चाहिँदैन (जोसुकैले गर्न मिल्छ)" }
      ],
      answer: 0,
      expJa: "【テキスト P.91参照】吊り上げ荷重1トン未満は「特別教育」で作業できますが、1トン以上は法的に『玉掛け技能講習』の修了が必要です。",
      expId: "Untuk crane 1 ton ke atas, wajib memiliki sertifikat 'Ginou Koushu' (Pelatihan Keterampilan Tamakake).",
      expNe: "१ टन भन्दा कमको लागि 'विशेष शिक्षा' भए पुग्छ, तर १ टन वा सोभन्दा माथिको लागि 'गिनौ कोउशु' उत्तीर्ण गरेको हुनुपर्छ।"
    },
    {
      cat: "第6章 高所作業車・足場（P.93〜）",
      q: "<ruby>作業床<rt>さぎょうゆか</rt></ruby>の<ruby>高<rt>たか</rt></ruby>さが「**10m<ruby>未満<rt>みまん</rt></ruby>**」の<ruby>高所作業車<rt>こうしょさぎょうしゃ</rt></ruby>を<ruby>現場<rt>げんば</rt></ruby>で<ruby>運転<rt>うんてん</rt></ruby>・<ruby>操作<rt>そうさ</rt></ruby>する<ruby>際<rt>さい</rt></ruby>に<ruby>受講<rt>じゅこう</rt></ruby>しておくべきものはどれですか。",
      q_id: "Pelatihan apa yang harus diselesaikan untuk mengoperasikan platform kerja bergerak (aerial work platform) dengan ketinggian lantai kerja di bawah 10 meter?",
      q_ne: "१० मिटरभन्दा होचो उचाइमा काम गर्ने स्काई लिफ्ट (एरियल वर्क प्लेटफर्म) चलाउन कुन तालिम लिनुपर्छ?",
      options: [
        { ja: "高所作業車運転特別教育", id: "Pendidikan Khusus Pengoperasian Aerial Work Platform (di bawah 10m)", ne: "१० मिटर मुनिको स्काई लिफ्ट चालक विशेष शिक्षा" },
        { ja: "足場の組立て等作業主任者", id: "Kepala Operasi Perakitan Perancah", ne: "खट जडान कार्य प्रमुख" },
        { ja: "有機溶剤作業主任者", id: "Kepala Operasi Pelarut Organik", ne: "रसायन कार्य प्रमुख" },
        { ja: "フォークリフト運転技能講習", id: "Pelatihan Pengoperasian Forklift", ne: "फोर्कलिफ्ट चालक तालिम" }
      ],
      answer: 0,
      expJa: "【テキスト P.93参照】作業床高さ10m未満の高所作業車の運転業務は「特別教育」の対象です（10m以上の場合は技能講習が必要です）。",
      expId: "Untuk mengoperasikan aerial work platform di bawah 10m, wajib mengikuti Pendidikan Khusus (特別教育).",
      expNe: "१० मिटरभन्दा मुनिको स्काई लिफ्ट चलाउन 'विशेष शिक्षा' लिनुपर्छ (१० मिटर वा माथिको लागि गिनौ कोउशु चाहिन्छ)।"
    },
    {
      cat: "第6章 現場の合図・コミュニケーション（P.95〜）",
      q: "<ruby>朝礼<rt>ちょうれい</rt></ruby>やKY<ruby>活動<rt>かつどう</rt></ruby>で<ruby>決<rt>き</rt></ruby>めた「<ruby>安全目標<rt>あんぜんもくひょう</rt></ruby>」を<ruby>全員<rt>ぜんいん</rt></ruby>で<ruby>唱和<rt>しょうわ</rt></ruby>し、<ruby>指差<rt>ゆびさ</rt></ruby>しをしながら「**ヨシ！**」と<ruby>確認<rt>かくにん</rt></ruby>する<ruby>動作<rt>どうさ</rt></ruby>の<ruby>効果<rt>こうか</rt></ruby>として**<ruby>正<rt>ただ</rt></ruby>しいもの**はどれですか。",
      q_id: "Manakah efek yang BENAR dari melakukan 'Yubisashi Koushou' (menunjuk dan menyebut sambil berseru 'YOSHI!')?",
      q_ne: "औंलाले देखाउँदै ठूलो स्वरले 'योशी!' भनी सुरक्षा जाँच (युबिसाशी कोउशोउ) गर्नुको वास्तविक फाइदा कुन हो?",
      options: [
        { ja: "意識を高めて集中力を促し、操作ミスや不注意によるエラーを大幅に減らす", id: "Meningkatkan kesadaran dan konsentrasi serta mengurangi kesalahan manusia secara signifikan", ne: "ध्यान केन्द्रित गराई मानिसबाट हुने लापरबाही र गल्तीहरूलाई धेरै घटाउँछ" },
        { ja: "現場監督に大きな声を聞かせて怒られないようにするだけ", id: "Hanya agar tidak dimarahi pengawas proyek", ne: "साइट सुपरभाइजरलाई ठूलो स्वर सुनाएर गाली खानबाट बच्न मात्र" },
        { ja: "声の大きさを競い合ってチームの序列を決める", id: "Menentukan peringkat tim berdasarkan volume suara", ne: "कसको स्वर ठूलो छ भनी प्रतिस्पर्धा गर्न" },
        { ja: "科学的な効果はなく、単なる形式的な儀式にすぎない", id: "Tidak ada efek ilmiahnya, hanya sekadar formalitas belaka", ne: "कुनै वैज्ञानिक फाइदा छैन, देखावटी नियम मात्र हो" }
      ],
      answer: 0,
      expJa: "【テキスト P.95参照】指差呼称（ゆびさしこしょう）は脳を覚醒させ、操作ミスやヒューマンエラーの発生率を約6分の1に減らす科学的実証効果があります。",
      expId: "Yubisashi Koushou terbukti secara ilmiah dapat mengurangi kesalahan operasional hingga sekitar 1/6.",
      expNe: "औंलाले देखाएर स्वर निकाल्दा दिमाग सक्रिय हुन्छ र गल्ती हुने सम्भावना ६ गुणा घट्छ भन्ने वैज्ञानिक तथ्य छ।"
    },
    {
      cat: "第6章 現場の合図（P.96〜）",
      q: "<ruby>重機<rt>じゅうき</rt></ruby>やクレーンの<ruby>合図<rt>あいず</rt></ruby>で、<ruby>人<rt>ひと</rt></ruby>や<ruby>物<rt>もの</rt></ruby>に<ruby>危険<rt>きけん</rt></ruby>が<ruby>迫<rt>せま</rt></ruby>ったときの「**<ruby>緊急停止<rt>きんきゅうていし</rt></ruby>**」の<ruby>合図<rt>あいず</rt></ruby>に関する<ruby>原則<rt>げんそく</rt></ruby>はどれですか。",
      q_id: "Manakah aturan baku mengenai sinyal 'BERHENTI DARURAT' saat ada bahaya pada orang atau benda di sekitar alat berat/crane?",
      q_ne: "क्रेन वा भारी उपकरणको काममा मानिस वा वस्तुलाई खतरा आइपर्दा 'आपतकालीन रोक्ने संकेत' बारे नियम के हो?",
      options: [
        { ja: "危険を発見した者は、指名された合図者でなくても直ちに全員停止の合図を出してよい", id: "Siapa pun yang melihat bahaya berhak langsung memberi sinyal BERHENTI, meski bukan juru sinyal resmi", ne: "खतरा देख्ने जोसुकै व्यक्तिले तोकिएको संकेतकर्ता नभए पनि तुरुन्तै रोक्ने इसारा गर्न पाउँछ" },
        { ja: "正式な合図者を探して耳打ちするまで誰も声を出してはならない", id: "Dilarang bersuara sampai menemukan juru sinyal resmi", ne: "तोकिएको संकेतकर्ता नभेटेसम्म कसैले पनि आवाज निकाल्नु हुँदैन" },
        { ja: "オペレーター自身の判断に任せて作業員は何もしない", id: "Menyerahkan sepenuhnya kepada operator tanpa berbuat apa-apa", ne: "चालकले आफैं बुझ्छ भन्दै कामदारले केही नगर्ने" },
        { ja: "工事が遅れるので怪我人が出るまでは合図を出してはならない", id: "Tidak boleh berhenti sampai ada yang cedera agar tidak telat", ne: "काम ढिलो हुने भएकोले चोट नलागेसम्म रोक्न नभन्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.96参照】クレーン作業では合図者1名が原則ですが、「緊急停止（非常停止）」だけは例外です。事故を防ぐため現場にいる誰もが直ちに合図を出さなければなりません。",
      expId: "Pengecualian mutlak: Untuk BERHENTI DARURAT, siapa pun yang melihat bahaya WAJIB segera memberi sinyal stop.",
      expNe: "अपवाद नियम: आपतकालीन अवस्थामा रोक्नको लागि भने खतरा देख्ने जोसुकैले पनि तुरुन्त रोक्ने संकेत दिनुपर्छ।"
    },
    {
      cat: "第6章 ドローン・航空法（P.97〜）",
      q: "<ruby>建設現場<rt>けんせつげんば</rt></ruby>の<ruby>測量<rt>そくりょう</rt></ruby>や<ruby>点検<rt>てんけん</rt></ruby>でドローン（<ruby>無人航空機<rt>むじんこうくうき</rt></ruby>）を<ruby>飛行<rt>ひこう</rt></ruby>させる<ruby>際<rt>さい</rt></ruby>、**<ruby>航空法<rt>こうくうほう</rt></ruby>により<ruby>原則禁止<rt>げんそくきんし</rt></ruby>（<ruby>許可<rt>きょか</rt></ruby>・<ruby>承認<rt>しょうにん</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>）とされている<ruby>飛行方法<rt>ひこうほうほう</rt></ruby>**はどれですか。",
      q_id: "Manakah metode penerbangan drone (pesawat nirawak) di lokasi konstruksi yang secara prinsip DILARANG oleh Undang-Undang Penerbangan Jepang tanpa izin khusus?",
      q_ne: "जापानको उड्डयन ऐन अनुसार विशेष अनुमति बिना निर्माण कार्यस्थलमा ड्रोन उडाउन प्रतिबन्धित गरिएको तरिका कुन हो?",
      options: [
        { ja: "操縦者の目視外飛行（ドローンを直接見ないで画面だけ見て飛ばすこと）", id: "Penerbangan di luar pandangan visual (BVLOS / tanpa melihat langsung)", ne: "आँखाले नदेख्ने गरी टाढा उडाउनु (स्क्रिन मात्र हेरेर उडाउनु)" },
        { ja: "昼間の時間帯に操縦者の視界内で飛行させること", id: "Terbang siang hari dalam batas pandangan visual", ne: "दिउँसोको समयमा आँखाले देखिने गरी उडाउनु" },
        { ja: "自社の敷地内で高さ5m程度をゆっくり飛ばすこと", id: "Terbang rendah sekitar 5m di lahan milik sendiri", ne: "आफ्नै जग्गाभित्र ५ मिटर उचाइमा बिस्तारै उडाउनु" },
        { ja: "風のない晴れた日に安全確認をして離陸させること", id: "Lepas landas di hari cerah tanpa angin setelah cek keselamatan", ne: "हावा नचलेको सफा दिनमा सुरक्षा जाँच गरेर उडाउनु" }
      ],
      answer: 0,
      expJa: "【テキスト P.97参照】航空法により「目視外飛行」「夜間飛行」「人や物件から30m未満の飛行」等は国土交通大臣の許可・承認がない限り禁止されています。",
      expId: "Berdasarkan UU Penerbangan, penerbangan di luar jangkauan mata langsung (BVLOS) dilarang tanpa izin resmi Kementerian.",
      expNe: "उड्डयन ऐन अनुसार आँखाले प्रत्यक्ष नदेखिने गरी ड्रोन उडाउन मन्त्रालयको विशेष अनुमति लिनैपर्छ।"
    },
    {
      cat: "第6章 現場ルール・ドローン安全（P.98）",
      q: "<ruby>現場内<rt>げんばない</rt></ruby>でドローンによる<ruby>空撮<rt>くうさつ</rt></ruby>や<ruby>屋根点検<rt>やねてんけん</rt></ruby>を<ruby>安全<rt>あんぜん</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>うための<ruby>配慮<rt>はいりょ</rt></ruby>として、**<ruby>不適切<rt>ふてきせつ</rt></ruby>なもの**はどれですか。",
      q_id: "Manakah tindakan yang TIDAK TEPAT dalam memastikan keselamatan saat menggunakan drone untuk inspeksi atap atau fotografi udara?",
      q_ne: "ड्रोनबाट छानाको निरीक्षण वा भिडियो खिच्दा सुरक्षाको दृष्टिकोणले कुन कार्य गलत हो?",
      options: [
        { ja: "バッテリー残量がギリギリになるまで飛行を続け、警告音が鳴ってから慌てて着陸させた", id: "Terus terbang sampai baterai hampir habis dan panik saat alarm berbunyi", ne: "ब्याट्री सकिनै लाग्दासम्म उडाइरहने र वार्निङ बजेपछि आत्तिएर अवतरण गराउने" },
        { ja: "強風時や雨天時はプロペラの破損や墜落の危険があるため飛行を中止した", id: "Membatalkan penerbangan saat angin kencang atau hujan", ne: "हावाहुरी र पानी परेको बेला दुर्घटना हुने डरले उडान बन्द गर्ने" },
        { ja: "ドローンの離発着場所の周囲に関係者以外の作業員が立ち入らないよう区画した", id: "Membuat barikade area lepas landas agar orang lain tidak mendekat", ne: "ड्रोन उड्ने र बस्ने ठाउँमा अरू मानिस पस्न नदिन घेरा हाल्ने" },
        { ja: "プロペラの亀裂やボルトの緩みがないか飛行前に日常点検を実施した", id: "Melakukan pemeriksaan rutin baling-baling sebelum terbang", ne: "उडान अघि पङ्खा चिरिएको छ कि छैन जाँच गर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.98参照】ドローンのバッテリー切れは墜落に直結します。予備の残量を十分に残した段階で安全に着陸させる運用基準の遵守が必須です。",
      expId: "Kehabisan baterai drone bisa menyebabkan jatuh fatal. Drone harus didaratkan sebelum baterai menipis.",
      expNe: "ड्रोनको ब्याट्री सकिएमा सिधै खस्न सक्छ। ब्याट्री धेरै बाँकी छँदै सुरक्षित अवतरण गराउनुपर्छ।"
    }
  ]
};
