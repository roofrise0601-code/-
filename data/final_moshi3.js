const CURRENT_QUIZ_DATA = {
  title: "直前フル模試③：【本番的中】<ruby>学科<rt>がっか</rt></ruby>40問 ＋ <ruby>実技<rt>じつぎ</rt></ruby>25問（計65問）",
  key: "score_final_moshi_3",
  passScore: 70,
  questions: [
    // ==========================================
    // 【学科試験パート：40問（問1〜問40）】
    // ==========================================
    {
      cat: "学科：ヒューマンエラー「集団欠陥」",
      q: "問1：工期の遅れが深刻な現場において、「納期に間に合わせるためなら、多少の安全ルール違反や手順の省略も仕方がない」と同調圧力が生まれてしまうヒューマンエラーは何ですか。",
      q_id: "Soal 1: Apakah istilah untuk human error kelompok di mana muncul pemakluman massal 'wajar melanggar SOP K3 demi mengejar target jadwal'?",
      q_ne: "प्रश्न १: कामको म्याद सकिन लाग्दा 'काम छिटो सक्नका लागि थोरै नियम मिच्नु वा कार्यविधि छोड्नु स्वभाविक हो' भन्दै समूह मिलेर नियम उल्लंघन गर्ने गल्तीलाई के भनिन्छ?",
      options: [
        { ja: "集団欠陥（しゅうだんけっかん）", id: "Shuudan Kekkan (Cacat Mentalitas Kelompok / Groupthink Error)", ne: "शूदान केक्यान (समूहगत कमजोरी / समूहको गलत दबाब)" },
        { ja: "認知ミス", id: "Salah Persepsi Individu", ne: "व्यक्तिगत बुझाइमा भ्रम" },
        { ja: "疲労", id: "Kelelahan Tubuh", ne: "थकान" },
        { ja: "心身の機能低下", id: "Penurunan Fisik Lansia", ne: "उमेरले गर्दा कमजोर हुनु" }
      ],
      answer: 0,
      expJa: "【テキスト P.193参照】集団欠陥とは、グループ内で「工期優先、不安全行動もやむを得ない」という危険な雰囲気が形成されるエラーです[cite: 23]。人の安全がすべてに優先します[cite: 23]。",
      expId: "Shuudan Kekkan adalah kompromi berbahaya dari kelompok yang mengabaikan K3 demi target waktu. Keselamatan nyawa harus selalu nomor satu.",
      expNe: "कामको हतारो छ भन्दैमा पूरै समूहले सुरक्षा नियम मिच्नु 'शूदान केक्यान' हो। समयभन्दा साथीको ज्यान सधैं ठूलो हुन्छ।"
    },
    {
      cat: "学科：ヒューマンエラー「場面行動本能」",
      q: "問2：脚立の上で倒れそうになった瞬間、思わず身を守ろうとして持っていた金づちを放り投げてしまい、階下の作業員に当たって怪我をさせるような突発行動は何ですか。",
      q_id: "Soal 2: Apa istilah psikologi kerja untuk refleks spontan melempar alat demi menyelamatkan diri saat tergelincir, yang justru mencelakai rekan di bawah?",
      q_ne: "प्रश्न २: भर्याङबाट लड्न लाग्दा आफ्नो ज्यान जोगाउन हातको हम्बर हतारिएर तल फालिदिने र तलको साथीलाई लाग्ने दुर्घटना कुन स्वभावमा पर्छ?",
      options: [
        { ja: "場面行動本能（ばめんこうどうほんのう）", id: "Bamen Koudou Honnou (Insting Refleks Situasional)", ne: "बामेन कोउदौ होन्नौ (आपत पर्दा दिमागले गर्ने अनियन्त्रित हर्कत)" },
        { ja: "知識不足", id: "Kurang Pengetahuan", ne: "ज्ञानको कमी" },
        { ja: "連絡不足", id: "Kurang Komunikasi", ne: "सम्पर्क नहुनु" },
        { ja: "慣れによる手抜き", id: "Keteledoran akibat Terbiasa", ne: "घमण्डले नियम मिच्नु" }
      ],
      answer: 0,
      expJa: "【テキスト P.193参照】危険に直面した瞬間に無我夢中で取る反射的行動を「場面行動本能」と呼びます[cite: 23]。工具の落下防止コード装着等の対策が必要です。",
      expId: "Bamen Koudou Honnou adalah gerak refleks panik manusia. Gunakan tali pengikat alat (lanyard tools) agar alat tidak melayang saat refleks terjadi.",
      expNe: "मानिसले आपत पर्दा आफ्नै ज्यान जोगाउन औजार फाल्ने जस्ता अनपेक्षित व्यवहार देखाउँछ। त्यसैले औजारमा सुरक्षा डोरी बाँध्नुपर्छ।"
    },
    {
      cat: "学科：ヒューマンエラー「パニック」",
      q: "問3：足場上で予期せぬ大きな火花や破裂音に驚き、慌てて後退して足元の開口部から墜落するようなヒューマンエラーは何ですか。",
      q_id: "Soal 3: Apakah jenis human error saat seorang pekerja kaget mendadak oleh suara ledakan/percikan api lalu panik bergerak mundur hingga jatuh ke lubang?",
      q_ne: "प्रश्न ३: खटमा काम गर्दा अचानक ठूलो आवाज वा आगोको झिल्का देखेर अत्तालिँदै पछाडि सर्दा खाल्डोमा खस्ने दुर्घटना कुन गल्तीमा पर्छ?",
      options: [
        { ja: "パニック（不意の驚き・慌てによる不安全行動）", id: "Panic (Kepanikan Mendadak akibat Terkejut)", ne: "प्यानिक (अचानक तर्सिएर वा आत्तिएर गरिने गल्ती)" },
        { ja: "近道行動", id: "Jalan Pintas", ne: "सर्टकट बाटो" },
        { ja: "経験不足", id: "Kurang Pengalaman", ne: "अनुभवको कमी" },
        { ja: "集団欠陥", id: "Groupthink", ne: "समूहको दबाब" }
      ],
      answer: 0,
      expJa: "【テキスト P.193参照】人間は不意に驚いたり慌てたりすると正常な判断力を失い、とっさに不安全行動（パニック行動）をとってしまいます[cite: 23]。",
      expId: "Panic membuat otak kehilangan kendali sesaat sehingga tubuh refleks mundur ke area maut tanpa sadar.",
      expNe: "एक्कासि तर्सिँदा मान्छेले होस गुमाउँछ र पछाडिको खतरा नहेरी भाग्न खोज्दा दुर्घटनामा पर्छ।"
    },
    {
      cat: "学科：ヒューマンエラー「不注意」",
      q: "問4：目の前の1つの作業に過度に集中しすぎた結果、周囲への視界や意識が狭くなり、すぐ横を通ったバックホウに気づかず接触するエラーは何ですか。",
      q_id: "Soal 4: Apa sebutan kelalaian saat pekerja terlalu fokus pada satu titik kerjaan di tangannya hingga buta terhadap bahaya backhoe yang melintas di dekatnya?",
      q_ne: "प्रश्न ४: आफ्नो हातको एउटा काममा मात्र धेरै मग्न हुँदा वरिपरिको ध्यान हराएर, छेउबाट आएको एक्साभेटर नदेखि किचिने गल्ती कुन हो?",
      options: [
        { ja: "不注意（集中による周囲への注意力低下）", id: "Fuchuui (Kurang Perhatian terhadap Sekitar akibat Terlalu Fokus / Tunnel Vision)", ne: "फुचूई (एउटै काममा मात्र घोरिँदा वरिपरिको होस गुम्नु)" },
        { ja: "認知ミス", id: "Salah Asumsi", ne: "बुझाइमा भ्रम" },
        { ja: "連絡不足", id: "Kurang Koordinasi", ne: "सम्पर्क नहुनु" },
        { ja: "疲労", id: "Kelelahan Fisik", ne: "थकान" }
      ],
      answer: 0,
      expJa: "【テキスト P.192参照】1つの作業に集中すると周囲に対する注意力が著しく低下します[cite: 22]。作業前に周囲の立ち入り禁止措置を完了させておくことが肝要です。",
      expId: "Fuchuui terjadi saat fokus mata menyempit ke satu titik kerjaan, meniadakan kesadaran atas manuver alat berat di sekitarnya.",
      expNe: "एउटा काममा मात्र आँखा गाड्दा वरिपरिको खतरा देखिँदैन। त्यसैले काम थाल्नुअघि नै मेसिन आउने बाटो छेक्नुपर्छ।"
    },
    {
      cat: "学科：脚立の安全使用基準",
      q: "問5：内装や設備工事で脚立を使用する際、労働安全衛生規則上、完全に禁止されている使い方はどれですか。",
      q_id: "Soal 5: Manakah penggunaan tangga lipat (kyatatsu) yang DILARANG MUTLAK dalam aturan keselamatan kerja?",
      q_ne: "प्रश्न ५: कार्यस्थलमा भर्याङ (क्याताचु) प्रयोग गर्दा कानुनले कडा प्रतिबन्ध लगाएको 'निषेधित तरिका' कुन हो?",
      options: [
        { ja: "脚立の天板（最上段）に乗って作業したり、天板にまたがって作業すること", id: "Bekerja sambil berdiri di atas papan teratas (top plate) atau mengangkanginya seperti menunggang kuda", ne: "भर्याङको सबैभन्दा माथिल्लो फलेकमाथि उभिएर वा दुईतिर खुट्टा राखेर (घोडा चढे जस्तै) काम गर्नु" },
        { ja: "開き止め金具を確実にロックして使用すること", id: "Mengunci engsel pengaman tangga hingga lurus rapat", ne: "बीचको लक राम्ररी लगाएर मात्र चढ्नु" },
        { ja: "脚立の脚元を平坦で滑らない床面に設置すること", id: "Menaruh kaki tangga di lantai yang rata dan tidak licin", ne: "खुट्टा नचिप्लिने समथर ठाउँमा राख्नु" },
        { ja: "天板から2段目以下のステップに立って作業すること", id: "Berdiri di anak tangga kedua dari atas atau lebih bawah", ne: "टुप्पोबाट दोस्रो वा त्योभन्दा मुनिको खुड्किलामा उभिनु" }
      ],
      answer: 0,
      expJa: "【テキスト P.184参照】天板に乗る、跨がる作業はバランスを崩しやすく重傷・死亡事故の頻出パターンです[cite: 14]。天板から2段目以下に立って作業します[cite: 14]。",
      expId: "Dilarang berdiri di papan paling atas tangga lipat. Berdirilah di anak tangga nomor dua dari atas demi menjaga titik gravitasi tubuh.",
      expNe: "क्याताचुको टुप्पोमाथि उभिनु वा दुईतिर खुट्टा फैलाएर काम गर्नु कडा निषेध छ। यसो गर्दा सन्तुलन गुमेर गम्भीर चोट लाग्छ।"
    },
    {
      cat: "学科：はしごの安全使用基準",
      q: "問6：移動式はしごを立てかけて昇降設備として使用する際、上端の突き出し長さとして守るべき基準はどれですか。",
      q_id: "Soal 6: Berapakah panjang sisa ujung atas tangga lurus (hashigo) yang WAJIB menonjol melebihi bibir lantai pijakan atas?",
      q_ne: "प्रश्न ६: माथिल्लो तलामा चढ्नका लागि भर्याङ अडेस लगाउँदा, माथिल्लो सतहभन्दा भर्याङको टुप्पो कति माथिसम्म निस्किएको (उचाइ) हुनुपर्छ?",
      options: [
        { ja: "はしごの上端は、立てかけた踏み出し面から「60cm以上」突き出させる", id: "Ujung atas tangga wajib menonjol minimal 60 cm di atas lantai tumpuan pijakan", ne: "टेक्ने माथिल्लो सतहभन्दा भर्याङको टुप्पो कम्तीमा '६० सेमी' माथिसम्म निस्किएको हुनुपर्छ" },
        { ja: "床面より10cm低くしておき、飛び移らせる", id: "Lebih pendek 10 cm dari lantai agar pekerja melompat", ne: "सतहभन्दा १० सेमी होचो राख्ने" },
        { ja: "突き出し長さは1mmで十分である", id: "Cukup menonjol 1 mm", ne: "१ मिमी मात्र निस्के पुग्छ" },
        { ja: "はしごは真横に寝かせて使用する", id: "Tangga dipasang rebahan horizontal", ne: "भर्याङ तेर्सो पारेर राख्ने" }
      ],
      answer: 0,
      expJa: "【安衛則第527条】はしごを昇降設備とする場合、上端を床面から「60cm以上」突出させ、かつ上端または下端を転位しないよう固定します。",
      expId: "Tangga lurus wajib memiliki sisa ujung atas minimal 60 cm di atas lantai agar tangan pekerja punya pegangan kokoh saat melangkah keluar.",
      expNe: "माथिबाट बाहिर निस्कँदा हातले समात्न सजिलो होस् भनेर भर्याङको टुप्पो कम्तीमा ६० सेमी माथि निस्किएकै हुनुपर्छ।"
    },
    {
      cat: "学科：はしごの設置角度",
      q: "問7：壁面にはしごを立てかけて使用する際、滑り倒れを防ぐために最も安全とされる「はしごの設置傾斜角度」はどれですか。",
      q_id: "Soal 7: Berapakah sudut kemiringan ideal dan paling aman saat menyandarkan tangga lurus ke dinding?",
      q_ne: "प्रश्न ७: भित्तामा भर्याङ अडेस लगाउँदा चिप्लिन वा पल्टिन नदिन भर्याङ र जमिनबीचको सबैभन्दा सुरक्षित कोण (एङ्गल) कति हुनुपर्छ?",
      options: [
        { ja: "およそ75度（75°）", id: "Sekitar 75 derajat (75°)", ne: "करिब ७५ डिग्री (७५°)" },
        { ja: "真直ぐな90度", id: "Tegak lurus 90 derajat", ne: "ठ्याक्कै ९० डिग्री सिधा" },
        { ja: "ゆるやかな30度", id: "Landai 30 derajat", ne: "धेरै भिरालो ३० डिग्री" },
        { ja: "角度は何度でもよい", id: "Bebas berapa saja", ne: "जति डिग्री भए पनि हुन्छ" }
      ],
      answer: 0,
      expJa: "【はしごの安全角度】はしごの設置角度は「約75度」が最も安定します。立ちすぎ（90度近く）は後ろへ転倒し、寝かせすぎ（角度小）は足元が滑り抜けます。",
      expId: "Sudut sandar tangga lurus yang ideal adalah 75 derajat. Terlalu tegak rawan terjungkal ke belakang, terlalu landai rawan terpeleset patah.",
      expNe: "भर्याङ सधैं करिब ७५ डिग्रीको कोणमा राख्नुपर्छ। धेरै सिधा भए पछाडि लड्छ, धेरै सुताए मुनिबाट चिप्लिन्छ।"
    },
    {
      cat: "学科：携帯用丸のこのキックバック（P.129）",
      q: "問8：木材を切断する電気丸のこにおいて、切断中に木材の自重で切り口が閉じ、回転刃の後部を挟み込んだ瞬間に機械全体が作業者に向かって激しく跳ね飛ばされる現象は何ですか。",
      q_id: "Soal 8: Fenomena loncatan balik mematikan apakah saat celah kayu menjepit mata pisau gergaji bundar hingga mesin terlempar menghantam tubuh operator?",
      q_ne: "प्रश्न ८: काठ काट्दा काठको आफ्नै भारले गर्दा काटिएको ठाउँ च्यापिएर ब्लेड अड्किँदा, पूरै मेसिन मान्छेतर्फ बेस्सरी उछिट्टिएर आउने घटनालाई के भनिन्छ?",
      options: [
        { ja: "キックバック（反発・跳ね返り現象）", id: "Kickback (Sentakan Balik Mesin Potong)", ne: "किकब्याक (आरा अचानक उछिट्टिने घटना)" },
        { ja: "スランプ現象", id: "Slump", ne: "स्लम घटना" },
        { ja: "ブリーディング現象", id: "Bleeding", ne: "ब्लिडिङ" },
        { ja: "コールドジョイント", id: "Cold Joint", ne: "कोल्ड जोइन्ट" }
      ],
      answer: 0,
      expJa: "【テキスト P.129参照】丸のこのキックバックは胸や大腿部を直撃して死亡に至る凶悪な事故です。切断材の確実な両端支持と安全カバー点検を徹底します。",
      expId: "Kickback terjadi saat bilah pisau terjepit kayu basah/melorot, melempar gergaji ke arah dada operator dalam sekejap mata.",
      expNe: "काठ च्यापिएर ब्लेड अड्किँदा मेसिन उछिट्टिएर छाती वा पेट चिर्ने घटनालाई 'किकब्याक' भनिन्छ।"
    },
    {
      cat: "学科：丸のこの安全カバー固定の禁止（P.129）",
      q: "問9：丸のこを使用する作業員が「切り粉が詰まって作業しにくいから」と、可動式安全カバー（鋸刃覆い）を針金やテープで開いたまま固定して作業していました。職長としての判断はどれですか。",
      q_id: "Soal 9: Pekerja mengikat cover pengaman gergaji bundar dengan kawat agar terus terbuka karena merasa terganggu oleh serbuk kayu. Apakah tindakan Shokucho?",
      q_ne: "प्रश्न ९: कामदारले काठको धुलो अड्किएर झन्झट भयो भन्दै गोलो आराको सुरक्षा कभरलाई तारले बाँधेर खुल्लै राखेर काम गरिरहेको छ। शोकुचोले कस्तो कदम चाल्नुपर्छ?",
      options: [
        { ja: "極めて重大な法令違反であり、指や太ももを切断する死亡事故に直結するため、その場で直ちに作業を停止させ、針金を外して安全カバーを正常に戻させる", id: "Hentikan detik itu juga! Ini pelanggaran K3 berat yang memicu amputasi kaki/tangan. Buka kawat dan kembalikan fungsi per otomatis cover saat itu juga!", ne: "तुरुन्त काम रोक्ने! यो ज्यान जान सक्ने गम्भीर गल्ती हो, जसले हात-खुट्टा काटिदिन्छ। तत्काल तार फुकालेर कभरलाई आफ्नै चालमा चल्ने बनाउन लगाउने" },
        { ja: "作業効率が上がるなら工夫として褒めて認める", id: "Memujinya karena mempercepat pekerjaan", ne: "काम छिटो गर्यो भन्दै प्रशंसा गर्ने" },
        { ja: "安全カバーをバールで叩き割って完全に捨てさせる", id: "Menghancurkan cover dengan linggis dan membuangnya", ne: "कभरलाई सबलले हानेर फुटाएर फालिदिने" },
        { ja: "元請の所長が巡回してくるまで見て見ぬふりをする", id: "Mendiamkan sampai ditegur pengawas utama", ne: "हाकिम नआउन्जेल चुपचाप हेरिरहने" }
      ],
      answer: 0,
      expJa: "【テキスト P.129参照】安全カバーの固定・無効化は労働安全衛生規則違反です。キックバックや転倒時に高速回転する刃が直接身体に接触し即死事故になります。",
      expId: "Mengikat cover pengaman gergaji bundar adalah kejahatan SOP! Jangan toleransi, wajib dinormalkan kembali sebelum tombol ditekan.",
      expNe: "गोलो आराको सुरक्षा कभर बाँधेर खुल्ला राख्नु कानुन विपरीत हो। यस्तोमा मेसिन चिप्लनासाथ हात वा खुट्टा टुक्राटुक्रा हुन्छ।"
    },
    {
      cat: "学科：型枠支保工の安全基準（根がらみ）",
      q: "問10：コンクリート打設時のスラブ型枠支保工（パイプサポート）において、支柱の脚元が滑動して全体が崩壊するのを防ぐために最下部に取り付けるものは何ですか。",
      q_id: "Soal 10: Komponen pipa apakah yang wajib dipasang mengikat bagian paling bawah tiang support bekisting agar kaki tiang tidak bergeser tergelincir?",
      q_ne: "प्रश्न १०: ढलान गर्दा फर्मा अड्याउने टेकोका खुट्टाहरू चिप्लिएर पूरै छत नभत्कियोस् भन्नाका लागि सबैभन्दा मुनि बाँधिने सुरक्षा पाइप कुन हो?",
      options: [
        { ja: "根がらみ（ねがらみ / 脚部水平つなぎ）", id: "Negarami (Pipa Pengikat Kaki Tiang Bawah)", ne: "नेगारामी (फेद बाँध्ने तेर्सो सुरक्षा पाइप)" },
        { ja: "巾木", id: "Habaki", ne: "हाबाकी" },
        { ja: "フォームタイ", id: "Form-tie", ne: "फर्म-टाई" },
        { ja: "セパレーター", id: "Separator", ne: "सेपारेटर" }
      ],
      answer: 0,
      expJa: "【安衛則第242条】型枠支保工のパイプサポートの脚元には、滑動・沈下を防止するため必ず「根がらみ」を設け、敷板にベース金具を釘止めします。",
      expId: "Negarami mengunci seluruh telapak kaki tiang support bekisting di tanah agar tidak meleset saat menerima puluhan ton adukan cor basah.",
      expNe: "ढलानको गह्रौं भारले टेकोको खुट्टा चिप्लिन नदिन जमिनको सतह नजिकै 'नेगारामी' पाइपले बाँध्नै पर्छ।"
    },
    {
      cat: "学科：型枠支保工の水平つなぎの間隔",
      q: "問11：パイプサポートを高さ3.5m以上の高所スラブ支保工として用いる際、パイプの座屈（折れ曲がり）を防ぐために取り付ける水平つなぎの法定間隔はどれですか。",
      q_id: "Soal 11: Berapakah jarak interval pemasangan pipa pengikat horizontal (suikei tsunagi) untuk mencegah melengkungnya tiang pipe support yang tinggi?",
      q_ne: "प्रश्न ११: अग्लो ठाउँमा टेको लगाउँदा टेको बीचबाटै दोब्रिन वा भाँचिन नदिन कति उचाइको फरकमा तेर्सो पाइप (होरिजोन्टल ब्रेसिङ) बाँध्नुपर्छ?",
      options: [
        { ja: "高さ2m以内ごとに水平つなぎを縦横2方向に設ける", id: "Pasang pengikat horizontal di 2 arah (silang X dan Y) setiap ketinggian maksimal 2 meter", ne: "प्रत्येक २ मिटरको उचाइभित्र दुवै दिशामा (दायाँ-बायाँ र अगाडि-पछाडि) तेर्सो सुरक्षा पाइप बाँध्ने" },
        { ja: "高さ15mごとに1箇所設ける", id: "Setiap tinggi 15 meter", ne: "१५ मिटरको फरकमा" },
        { ja: "水平つなぎは一切不要である", id: "Sama sekali tidak perlu pengikat horizontal", ne: "तेर्सो पाइप बाँध्न पर्दैन" },
        { ja: "コンクリート打設が終わってから取り付ける", id: "Dipasang setelah cor beton mengeras", ne: "ढलान सकेपछि मात्र बाँध्ने" }
      ],
      answer: 0,
      expJa: "【安衛則第242条第1項第5号】パイプサポートの高さが2mを超える場合は、高さ「2m以内ごとに2方向」に水平つなぎを設け、ボルト等で緊結します。",
      expId: "Pipe support tinggi wajib diikat horizontal 2 arah setiap interval tinggi 2 meter agar tiang tidak terlipat patah saat menahan beban beton basah.",
      expNe: "टेको २ मिटरभन्दा अग्लो भएमा प्रत्येक २ मिटरको फरकमा चारैतिर तेर्सो पाइप बाँधेर बलियो बनाउनुपर्छ।"
    },
    {
      cat: "学科：型枠のパンク（側圧破壊）事故防止",
      q: "問12：柱や深基礎、壁のコンクリート打設中に「型枠が側圧に耐え切れず大破裂し、生コンが周囲に溢れ出す事故（パンク）」を防ぐための管理として正しいものはどれですか。",
      q_id: "Soal 12: Manakah tindakan kontrol mutu dan K3 yang BENAR untuk mencegah jebolnya bekisting (panku) akibat tekanan samping cairan beton?",
      q_ne: "प्रश्न १२: पर्खाल वा पिलरको ढलान गर्दा मसलाको चर्को चापले फर्मा फुट्ने र कंक्रीट पोखिने दुर्घटना (पाङ्कु) रोक्न कुन काम गर्नु सही हो?",
      options: [
        { ja: "セパレーターとフォームタイを計算されたピッチで強固に締め、コンクリートの「1時間あたりの打ち上がり高さ（打設速度）」を適切に制限して打設する", id: "Kencangkan separator & form-tie sesuai hitungan, dan batasi kecepatan kenaikan adukan cor per jam agar tekanan samping tidak berlebih", ne: "सेपारेटर र फर्म-टाई नियम अनुसार बलियो गरी कस्ने र १ घण्टामा कति उचाइसम्म मात्र ढलान गर्ने भनी गति नियन्त्रण गर्ने" },
        { ja: "一刻も早く終わらせるため、ポンプ車から最高吐出スピードで一気に上まで流し込む", id: "Mengecor secepat mungkin dari bawah ke atas tanpa henti untuk hemat waktu", ne: "छिटो सक्नका लागि पम्प गाडीबाट चर्को गतिमा एकैचोटि माथिसम्म खन्याउने" },
        { ja: "セパレーターはコストがかかるので半分に間引いて施工する", id: "Mengurangi separuh jumlah separator untuk menghemat uang", ne: "पैसा बचाउन सेपारेटर आधा मात्र लगाउने" },
        { ja: "型枠の外側からバーナーで炙って生コンを瞬間的に固めながら打設する", id: "Membakar bekisting dengan api elpiji agar cor cepat kering saat dituang", ne: "कंक्रीट छिटो सुकोस् भनेर फर्मा बाहिर आगो बालेर तताउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.158参照】生コンの側圧は液圧として作用するため、急激なスピードで打ち上げると許容荷重を突破して型枠がパンクします。打設速度の管理が命です。",
      expId: "Mengecor terlalu cepat melipatgandakan tekanan samping hidrolik hingga bekisting meledak jebol. Batasi kecepatan cor per jam.",
      expNe: "धेरै छिटो कंक्रीट खन्याउँदा फर्मा फुट्छ। त्यसैले सेपारेटर बलियो कस्ने र १ घण्टामा निश्चित उचाइ मात्र बिस्तारै भर्नुपर्छ।"
    },
    {
      cat: "学科：木造住宅の筋交い（すじかい）の役割",
      q: "問13：木造軸組工法の住宅において、柱と梁で組まれた四角形の骨組みに対角線状（斜め）に取り付け、地震や強風による水平力に抵抗する部材は何ですか。",
      q_id: "Soal 13: Batang kayu silang diagonal apakah yang dipasang di antara tiang dan balok pada rumah kayu Jepang untuk menahan guncangan gempa bumi dan angin topan?",
      q_ne: "प्रश्न १३: काठको घर बनाउँदा भूकम्प र हुरीबतासको धक्का थेग्न पिलर र बिमको बीचमा छड्के पारेर ठोकिने काठ (ब्रेसिङ) लाई के भनिन्छ?",
      options: [
        { ja: "筋交い（すじかい / 耐力壁部材）", id: "Sujikai (Bracing Diagonal Tahan Gempa)", ne: "सुजिकाई (भूकम्प प्रतिरोधी छड्के काठ / ब्रेसिङ)" },
        { ja: "野地板", id: "Noji-ita (Papan Atap)", ne: "नोजी-इता (छानाको फलेक)" },
        { ja: "垂木", id: "Taruki (Kasau Atap)", ne: "तारुकी (छाना अड्याउने काठ)" },
        { ja: "瓦座", id: "Kawara-za", ne: "कावारा-जा" }
      ],
      answer: 0,
      expJa: "【木造建築の構造】筋交いは水平力（地震力・風圧力）に対抗する耐力壁を構成する最重要部材です。金物（筋交いプレート）で柱・横架材と緊結します。",
      expId: "Sujikai adalah batang diagonal yang mengubah dinding biasa menjadi dinding penahan gempa (tairyoku-kabe).",
      expNe: "सुजिकाईले भूकम्प आउँदा वा हावाहुरी चल्दा घरलाई ढल्न दिँदैन र पूरै घरलाई बलियो बनाउँछ।"
    },
    {
      cat: "学科：丸のこの刃の突出し量基準",
      q: "問14：携帯用電気丸のこで木材やコンパネ合板を切断する際、キックバックを防ぎ切断面を綺麗に仕上げるための「鋸刃の深さ調整（突出し量）」の基準はどれですか。",
      q_id: "Soal 14: Berapakah ukuran keluarnya ujung mata pisau gergaji bundar di bawah permukaan kayu yang dipotong agar aman dari bahaya kickback?",
      q_ne: "प्रश्न १४: गोलो आराले काठ वा प्लाइउड काट्दा किकब्याक हुन नदिन काठको सतहभन्दा मुनि ब्लेड कति मात्र बाहिर निस्कने गरी मिलाउनुपर्छ?",
      options: [
        { ja: "切断材の裏面（下端）から、鋸刃のチップ（刃先）が「数ミリ〜5mm程度」だけ出る深さに調整する", id: "Atur kedalaman pisau hingga ujung mata gigi gergaji hanya menonjol keluar sekitar 3 sampai 5 mm di bawah kayu", ne: "काट्न लागेको काठको मुनिबाट ब्लेडको दाँत 'थोरै मात्र (३ देखि ५ मिमी जति)' बाहिर निस्कने गरी गहिराइ मिलाउने" },
        { ja: "刃を一番下まで限界まで深く突き出して切る（10cm以上出す）", id: "Keluarkan pisau sedalam-dalamnya hingga menonjol 10 cm ke bawah", ne: "ब्लेडलाई पूरै १० सेमीसम्म तल निस्कने गरी राखेर काट्ने" },
        { ja: "刃が木材に届かない深さに調整して空回りさせる", id: "Atur agar pisau tidak menyentuh kayu sama sekali", ne: "काठमै नछुने गरी माथि राख्ने" },
        { ja: "刃の深さ調整機能は使わずに壊しておく", id: "Merusak setelan pengatur kedalaman pisau", ne: "गहिराइ मिलाउने नट फुकालेर फाल्ने" }
      ],
      answer: 0,
      expJa: "【丸のこの安全基準】刃を深く出しすぎると、木材との摩擦抵抗が大きくなりキックバックの威力が倍増します。「材料厚み＋数ミリ（刃先1つ分）」が基本です。",
      expId: "Ujung gigi pisau gergaji bundar cukup menonjol 3-5 mm dari bawah kayu. Mengeluarkan pisau terlalu dalam memicu hentakan kickback ganas.",
      expNe: "ब्लेड धेरै तल निस्किएमा किकब्याकको खतरा धेरै हुन्छ। काठको मोटाइभन्दा जम्मा ३-५ मिमी मात्र मुनि निस्कने बनाउनुपर्छ।"
    },
    {
      cat: "学科：ディスクグラインダーの砥石最高周速度",
      q: "問15：高速回転するディスクグラインダー（サンダー）に研削といしを装着する際、といしの破壊・破裂事故を防ぐための大原則はどれですか。",
      q_id: "Soal 15: Aturan apakah yang WAJIB dicocokkan sebelum memasang piringan batu gerinda baru ke mesin gerinda tangan?",
      q_ne: "प्रश्न १५: ग्राइन्डर मेसिनमा नयाँ ढुङ्गा हाल्दा ढुङ्गा फुटेर उछिट्टिन नदिन अनिवार्य हेर्नुपर्ने मुख्य नियम कुन हो?",
      options: [
        { ja: "といしに印字された「最高使用周速度（または許容最高回転数）」が、グラインダー本体の無負荷回転速度以上であることを確認する", id: "Pastikan batas putaran piringan batu (Max RPM) SAMA DENGAN atau LEBIH TINGGI daripada kecepatan mesin gerinda", ne: "ढुङ्गामा लेखिएको 'अधिकतम घुम्ने स्पिड (Max RPM)' ग्राइन्डर मेसिनको स्पिड बराबर वा त्योभन्दा धेरै भएको पक्का गर्ने" },
        { ja: "といしの回転数が機械の回転数の半分以下のものを取り付ける", id: "Memasang batu gerinda yang kapasitas RPM-nya cuma separuh kecepatan mesin", ne: "मेसिनभन्दा आधा मात्र स्पिड भएको कमजोर ढुङ्गा हाल्ने" },
        { ja: "ラベルが破れて最高周速度が読めない中古のといしを使う", id: "Menggunakan batu bekas yang tulisannya sudah hilang terkelupas", ne: "नम्बर मेटिएको पुरानो ढुङ्गा प्रयोग गर्ने" },
        { ja: "といしをハンマーで叩いて半分に割ってから取り付ける", id: "Memecah dua batu gerinda dengan palu sebelum dipasang", ne: "ढुङ्गालाई हम्बरले फुटाएर आधा बनाएर हाल्ने" }
      ],
      answer: 0,
      expJa: "【といし安全規則】グラインダーの回転数がといしの最高許容回転速度を超えていると、過大な遠心力によってといしが粉砕・飛散し死亡事故になります。",
      expId: "RPM batu gerinda HARUS lebih tinggi daripada RPM mesin gerinda. Jika tidak, batu gerinda akan meledak hancur saat berputar kencang.",
      expNe: "मेसिनको स्पिडभन्दा ढुङ्गाको स्पिड धेरै हुनैपर्छ। कमजोर ढुङ्गा हालेमा घुम्दाघुम्दै पड्किएर मान्छेको ज्यान लिन्छ।"
    },
    {
      cat: "学科：木造解体工事の安全手順",
      q: "問16：木造住宅の解体工事を行う際、建物の不意の倒壊や部材の落下を防ぐための基本的な解体順序として正しいものはどれですか。",
      q_id: "Soal 16: Manakah urutan pembongkaran rumah kayu yang BENAR demi mencegah struktur roboh menimpa pekerja?",
      q_ne: "प्रश्न १६: पुरानो काठको घर भत्काउँदा एक्कासि घर ढलेर कामदार नथिचियोस् भन्नाका लागि भत्काउने सही क्रम कुन हो?",
      options: [
        { ja: "屋根葺き材・内装材の撤去 ➔ 小屋組・小屋束の解体 ➔ 2階軸組の解体 ➔ 1階軸組・土台の解体（上から下へ順序正しく解体）", id: "Bongkar genteng & interior -> Bongkar rangka atap -> Bongkar tiang lantai 2 -> Bongkar tiang lantai 1 & pondasi (Bongkar bertahap dari atas ke bawah)", ne: "पहिले छानाको टायल र भित्री सामान हटाउने -> छानाको काठ भत्काउने -> दोस्रो तलाको पिलर-बिम भत्काउने -> पहिलो तला र जग भत्काउने (माथिबाट तल क्रमशः भत्काउने)" },
        { ja: "1階の四隅の柱を最初にチェーンソーで切り落として建物全体を一気に倒す", id: "Memotong tiang utama lantai 1 duluan dengan gergaji mesin agar gedung langsung roboh", ne: "पहिलो तलाको मुख्य पिलर पहिले काटेर पूरै घर एकैचोटि लडाउने" },
        { ja: "基礎のコンクリートを爆薬で吹き飛ばしてから屋根に登る", id: "Meledakkan pondasi duluan baru naik ke atap", ne: "पहिले जग फुटाउने अनि छानामा चढ्ने" },
        { ja: "解体順序は関係なく、好きな場所から適当に壊す", id: "Bebas menghancurkan dari bagian mana saja sesukanya", ne: "जहाँ मन लाग्यो त्यहीँबाट जथाभावी भत्काउने" }
      ],
      answer: 0,
      expJa: "【解体工事の原則】解体は構造の安定性を維持しながら「上から下へ」順序正しく進めます。柱を先に抜くと予期せぬ倒壊で下敷きになります。",
      expId: "Pembongkaran gedung WAJIB bertahap dari atas ke bawah. Menghancurkan pilar bawah duluan akan meruntuhkan seluruh gedung menimpa pekerja.",
      expNe: "घर भत्काउँदा सधैं माथिबाट तलतिर क्रमशः आउनुपर्छ। तलको पिलर पहिले भत्काए पूरै घर मान्छेमाथि खस्छ।"
    },
    {
      cat: "学科：高速切断機（砥石切断機）の火花対策",
      q: "問17：金属パイプやアングル鋼を切断する高速切断機を使用する際、火災や火傷を防ぐ安全措置として誤っているものはどれですか。",
      q_id: "Soal 17: Manakah tindakan yang SALAH dalam mencegah kebakaran saat memotong besi memakai mesin potong abrasive cut-off saw?",
      q_ne: "प्रश्न १७: फलाम काट्ने ठूलो कटर मेसिन चलाउँदा आगो लाग्न वा डढ्नबाट बच्न कुन काम गर्नु 'गलत' हो?",
      options: [
        { ja: "火花が前方に激しく飛ぶので、切断機の真正面にシンナーの入った一斗缶を置いておく", id: "Menaruh kaleng thinner terbuka tepat di depan arah semburan percikan api potong", ne: "अगाडि आगोको झिल्का उछिट्टिने ठाउँमै थिनरको ड्रम बिर्को खोलेर राख्ने" },
        { ja: "火花の飛散方向に防炎スパッタシートを立てて遮断する", id: "Memasang lembaran kain tahan api (spatter sheet) di arah semburan bunga api", ne: "झिल्का जाने ठाउँमा आगो नलाग्ने कपडा (स्प्याटर सिट) को पर्दा लगाउने" },
        { ja: "火花や破片から目を守るため保護めがね（フェイスシールド）を着用する", id: "Memakai kacamata pelindung atau face shield agar mata tidak kena percikan", ne: "आँखा जोगाउन सुरक्षा चस्मा वा फेस सिल्ड लगाउने" },
        { ja: "手元に水バケツやABC消火器を常備配備する", id: "Menyiapkan ember air dan tabung pemadam api di dekat lokasi potong", ne: "छेउमै पानीको बाल्टिन र आगो निभाउने सिलिन्डर ठिक्क राख्ने" }
      ],
      answer: 0,
      expJa: "【切断機の防火】高速切断機の火花は高温の金属粉であり、数メートル先まで飛びます。可燃物（シンナー・塗料・木くず）は絶対に火花方向に置きません。",
      expId: "Percikan api mesin potong besi bisa menyambar kaleng thinner dan memicu ledakan besar seketika.",
      expNe: "फलाम काट्दा निस्कने झिल्का धेरै तातो हुन्छ। त्यसैले अगाडि थिनर वा आगो टिप्ने कुनै पनि सामान राख्नुहुन्न।"
    },
    {
      cat: "学科：チェーンソー作業の保護具",
      q: "問18：伐木作業や木材加工でチェーンソー（チェンソー）を使用する際、刃が接触した瞬間に繊維が絡みついて回転を強制停止させる安全装備は何ですか。",
      q_id: "Soal 18: Celana pelindung khusus apakah yang WAJIB dipakai saat menggunakan chainsaw untuk menghentikan putaran rantai jika terkena kaki?",
      q_ne: "प्रश्न १८: काठ काट्ने चेन-आरा (चेनस) चलाउँदा खुट्टामा आरा छुने बित्तिकै चेनलाई अड्काएर रोक्ने विशेष सुरक्षा पाइन्ट कुन हो?",
      options: [
        { ja: "チェーンソー用防護ズボン（チャップス / 耐切創繊維入り保護衣）", id: "Celana Pelindung Gergaji Mesin (Chainsaw Chaps / Celana Anti-Sayat Khusus)", ne: "चेनस सुरक्षा पाइन्ट (च्याप्स / आराले नकाट्ने विशेष धागो भएको पाइन्ट)" },
        { ja: "薄手の半ズボン", id: "Celana pendek tipis", ne: "पातलो कट्टु" },
        { ja: "ビニール製のおしゃれレインコート", id: "Jas hujan plastik tipis", ne: "प्लास्टिकको पातलो बर्सादी" },
        { ja: "パジャマ", id: "Baju tidur piyama", ne: "सुत्ने कपडा" }
      ],
      answer: 0,
      expJa: "【安衛則第480条等】チェーンソーによる下肢の切断事故を防ぐため、防護ズボン（またはチャップス）の着用が義務化されています。",
      expId: "Celana pelindung chainsaw (chaps) mengandung serat khusus yang akan mengunci rantai gergaji dalam 0,05 detik jika tersentuh.",
      expNe: "चेनसले खुट्टा काट्न नदिन विशेष 'च्याप्स पाइन्ट' लगाउनै पर्छ, जसले आरा छुने बित्तिकै चेनलाई जाम गरिदिन्छ।"
    },
    {
      cat: "学科：丸のこの平行定規（リップフェンス）",
      q: "問19：電気丸のこで合板や板材を同じ幅で長く真っ直ぐ切断（縦挽き）する際、ブレを防ぎキックバックを予防するために取り付ける補助器具は何ですか。",
      q_id: "Soal 19: Penggaris pemandu apakah yang dipasang pada gergaji bundar agar pemotongan kayu lurus sejajar tanpa melenceng?",
      q_ne: "प्रश्न १९: गोलो आराले काठ वा प्लाइउडलाई लामो सिधा एउटै साइजमा काट्नका लागि मेसिनमा जोड्ने फलामे गाइड रुलर कुन हो?",
      options: [
        { ja: "平行定規（サイドフェンス / ガイド定規）", id: "Penggaris Pemandu Sejajar (Parallel Guide Fence)", ne: "समानान्तर रुलर (गाइड रुलर / साइड फेन्स)" },
        { ja: "分度器", id: "Busur derajat kertas", ne: "प्रोटेक्टर" },
        { ja: "温度計", id: "Termometer suhu", ne: "थर्मोमिटर" },
        { ja: "虫眼鏡", id: "Kaca pembesar", ne: "म्याग्निफाइङ ग्लास" }
      ],
      answer: 0,
      expJa: "【テキスト P.128参照】フリーハンドで長い木材を切ると刃が斜めにねじれてキックバックが発生します。平行定規を使って真っ直ぐ送ります。",
      expId: "Parallel guide menjaga gergaji meluncur lurus sempurna, mencegah mata pisau terpuntir miring di dalam alur kayu.",
      expNe: "हातले मात्र काट्दा आरा बाङ्गो भएर किकब्याक हुन्छ। त्यसैले सिधा काट्न 'गाइड रुलर' लगाउनुपर्छ।"
    },
    {
      cat: "学科：内装工事のレーザーレベル（地墨合わせ）",
      q: "問20：内装工事において、床に引いた墨出し線にレーザー墨出し器の鉛直交点を正確に合わせるための装置は何ですか。",
      q_id: "Soal 20: Mekanisme apakah pada laser level yang memproyeksikan titik laser tepat tegak lurus ke lantai untuk mencocokkan garis as?",
      q_ne: "प्रश्न २०: कोठाभित्र काम गर्दा भुइँको धर्कोमा लेजर मेसिनको सेन्टर ठ्याक्कै मिलाउन मुनितिर रातो थोप्ला खसाल्ने बत्तीलाई के भनिन्छ?",
      options: [
        { ja: "地墨ポイント（下部レーザー照射口）", id: "Titik Laser Bawah / Titik As Lantai (Jizumi Point)", ne: "जिजुमी पोइन्ट (भुइँमा सेन्टर देखाउने तल्लो लेजर थोप्लो)" },
        { ja: "三脚の石突き", id: "Kaki tripod", ne: "स्ट्यान्डको खुट्टा" },
        { ja: "電源スイッチ", id: "Tombol on-off", ne: "अन-अफ बटन" },
        { ja: "収納ケース", id: "Kotak koper box", ne: "बाकस" }
      ],
      answer: 0,
      expJa: "【テキスト P.101参照】レーザー墨出し器の底面から下向きに照射される「地墨ポイント（赤点）」を床の交点に合わせることで、正確な鉛直基準墨を立ち上げます[cite: 5]。",
      expId: "Titik laser bawah (jizumi point) memproyeksikan titik laser tegak lurus ke lantai untuk menyetel as patokan dinding partisi.",
      expNe: "मेसिनको मुनिबाट जमिनमा पर्ने लेजर थोप्लो (जिजुमी) लाई भुइँको धर्कोमा ठ्याक्कै मिलाएर मात्र काम सुरु गरिन्छ।"
    },
    {
      cat: "学科：型枠の締付け不良とジャンカの発生",
      q: "問21：型枠のパネル同士の継ぎ目に隙間があったり、セパレーターの締め付けが不十分なまま打設した結果、セメントペーストが漏れ出して骨材（砂利）だけが露出する欠陥は何ですか。",
      q_id: "Soal 21: Cacat beton bolong-bolong berpori apakah yang timbul jika air semen bocor keluar lewat celah sambungan bekisting yang kendor?",
      q_ne: "प्रश्न २१: फर्माको जोर्नी खुकुलो भएर सिमेन्टको पानी बाहिर चुहिँदा, कंक्रीटमा गिट्टी मात्र देखिने मौरीको चाका जस्तो प्वाल पर्ने समस्यालाई के भनिन्छ?",
      options: [
        { ja: "ジャンカ（す・豆板 / 骨材露出欠陥）", id: "Janka / Honeycomb (Beton Keropos / Cacat Sarang Lebah)", ne: "जान्का (मौरीको चाका जस्तो कंक्रीटको प्वाल / हनिकम्ब)" },
        { ja: "鏡面仕上げ", id: "Finishing Mengkilap Cermin", ne: "ऐना जस्तो चिल्लो फिनिसिङ" },
        { ja: "白華現象（エフロレッセンス）", id: "Bercak Putih Garam", ne: "सेतो नुन निस्कने समस्या" },
        { ja: "防水モルタル", id: "Plesteran Kedap Air", ne: "वाटरप्रुफ प्लास्टर" }
      ],
      answer: 0,
      expJa: "【コンクリート欠陥】型枠の隙間からノロ（セメントペースト）が漏れると、そこが砂利だらけの空洞（ジャンカ）になり、構造強度が著しく低下します。",
      expId: "Janka (keropos honeycomb) terjadi saat air semen bocor lewat celah bekisting, menyisakan kerikil berongga tanpa perekat.",
      expNe: "फर्माको प्वालबाट सिमेन्टको घोल चुहिएमा भित्र गिट्टी मात्र बाँकी रहेर कमजोर प्वाल (जान्का) बन्छ।"
    },
    {
      cat: "学科：コンクリート打設後の型枠存置期間",
      q: "問22：スラブ（床）や梁の下の型枠やパイプサポートを取り外す際、構造計算上の圧縮強度に達する前に勝手にサポートを解体してはならない理由は何ですか。",
      q_id: "Soal 22: Mengapa tiang penyangga (pipe support) di bawah pelat lantai dan balok DILARANG dibongkar sebelum beton mencapai kekuatan tekan desain?",
      q_ne: "प्रश्न २२: भुइँको र बिमको मुनिका टेकोहरू (पाइप सपोर्ट) कंक्रीटले तोकिएको बलियोपन नपाउन्जेल किन फुकाल्न पाइँदैन?",
      options: [
        { ja: "硬化不足のコンクリートが自重や上階の作業荷重に耐えきれず、床全体が崩壊落盤する重大事故を起こすため", id: "Karena cor yang belum matang tidak kuat menahan beratnya sendiri dan beban lantai atas, sehingga memicu lantai ambrol seketika", ne: "काँचो कंक्रीटले आफ्नो तौल र माथिल्लो तलाको भार थेग्न नसकेर पूरै छत भत्किने भयानक दुर्घटना हुने भएकोले" },
        { ja: "サポートを外すと部屋が広くなりすぎて作業員が迷子になるから", id: "Agar pekerja tidak tersesat karena ruangan jadi terlalu luas", ne: "कोठा धेरै ठूलो भएर मान्छे हराउँछ भनेर" },
        { ja: "サポートは一度立てたら建物の解体まで外してはならない決まりだから", id: "Tiang support harus tertanam di gedung selamanya", ne: "टेको कहिल्यै फुकाल्नै हुन्न भन्ने नियम भएर" },
        { ja: "型枠大工の給料が減ってしまうから", id: "Agar gaji tukang bekisting tidak dipotong", ne: "सिकर्मीको तलब घट्छ भनेर" }
      ],
      answer: 0,
      expJa: "【型枠存置期間】スラブ下サポートの早期解体は建物崩壊の主因です。圧縮強度試験で設計基準強度（または規定強度）の発現を確認後に解体します。",
      expId: "Membongkar tiang support lantai sebelum beton matang akan meruntuhkan seluruh pelat cor menimpa orang di bawahnya.",
      expNe: "ढलान नसुक्दै हतारिएर मुनिको टेको निकालेमा पूरै छत तल खसेर मान्छेको ज्यान जान्छ।"
    },
    {
      cat: "学科：足場の筋交い（すじかい）の設置基準",
      q: "問23：枠組足場や単管足場の組立において、足場全体の横揺れやねじれ倒壊を防ぐため、全スパン・全層にわたって斜めに交差配置する部材は何ですか。",
      q_id: "Soal 23: Batang pipa silang diagonal apakah yang wajib dipasang silang di sepanjang bentang perancah untuk mencegah perancah bergoyang roboh?",
      q_ne: "प्रश्न २३: खट (परान्चाह) दायाँ-बायाँ हल्लिन र बटारिएर लड्न नदिन पूरै खटभरि छड्के पारेर बाँधिने डन्डी (ब्रेसिङ) लाई के भनिन्छ?",
      options: [
        { ja: "交さ筋交い（こうさすじかい / ブレース）", id: "Kousa Sujikai (Cross Bracing / Batang Silang Penstabil Perancah)", ne: "कोउसा सुजिकाई (क्रस ब्रेसिङ / खटको छड्के डन्डी)" },
        { ja: "幅木", id: "Habaki", ne: "हाबाकी" },
        { ja: "下さん", id: "Palang Bawah", ne: "मुनिको बार" },
        { ja: "養生シート", id: "Terpal Jaring", ne: "त्रिपाल" }
      ],
      answer: 0,
      expJa: "【テキスト P.150参照】筋交い（ブレース）を間引くと足場の水平剛性がゼロになり、作業員の歩行や強風で一瞬にして平行四辺形に潰れて倒壊します。",
      expId: "Cross bracing mengunci perancah agar tidak goyang. Melepas sujikai sama saja dengan merobohkan perancah.",
      expNe: "सुजिकाईले खटलाई हल्लिन दिँदैन। यो डन्डी फुकालेमा खट तासको पत्ता जस्तै एकैचोटि ढल्छ।"
    },
    {
      cat: "学科：開口部の水平養生ネット",
      q: "問24：鉄骨工事や吹き抜け工事において、高所作業床の開口部の真下に作業員の墜落阻止用として水平に展張するネットの網目基準はどれですか。",
      q_id: "Soal 24: Berapakah ukuran mata jaring (mesh) standar dari Safety Net horizontal yang dipasang di bawah balok baja untuk menangkap pekerja yang jatuh?",
      q_ne: "प्रश्न २४: अग्लो फलामको काम गर्दा मुनि टाँगिने सुरक्षा जाली (सेफ्टी नेट) को एउटा आँखीझ्याल (प्वाल) को साइज बढीमा कति हुनुपर्छ?",
      options: [
        { ja: "網目の1辺の長さが「10cm以下（合成繊維製安全ネット）」", id: "Ukuran kotak mata jaring maksimal 10 cm ke bawah (Jaring Sintetis Standar JIS)", ne: "जालीको एउटा प्वालको लम्बाइ बढीमा '१० सेन्टिमिटर वा त्योभन्दा सानो' हुनुपर्छ" },
        { ja: "網目の1辺が1メートル", id: "Ukuran kotak jaring 1 meter", ne: "१ मिटरको ठूलो प्वाल" },
        { ja: "網目の1辺が5メートル", id: "Ukuran kotak jaring 5 meter", ne: "५ मिटरको प्वाल" },
        { ja: "ネットに網目はなく完全な1枚の鉄板である", id: "Pelat besi solid tanpa jaring", ne: "प्वाल नभएको फलामे पाता" }
      ],
      answer: 0,
      expJa: "【安衛則第518条等】墜落防止用の安全ネット（1種・2種）は、人の身体がすり抜けないよう網目の一辺が10cm以下と規格化されています。",
      expId: "Mata jaring safety net maksimal 10 cm agar tubuh manusia tidak lolos menerobos saat terjatuh dari atas.",
      expNe: "मान्छेको जिउ छिरेर तल नखसोस् भनेर सेफ्टी नेटको प्वाल १० सेमीभन्दा सानो हुनैपर्छ।"
    },
    {
      cat: "学科：移動式足場（ローリングタワー）の安全使用",
      q: "問25：キャスター（車輪）が付いた移動式足場（ローリングタワー）を使用する際、転倒による死亡事故を防ぐための絶対ルールはどれですか。",
      q_id: "Soal 25: Aturan keselamatan MUTLAK apakah yang wajib dipatuhi saat menggunakan perancah beroda geser (Rolling Tower)?",
      q_ne: "प्रश्न २५: पाङ्ग्रा भएको गुड्ने खट (रोलिङ टावर) प्रयोग गर्दा पल्टिएर ज्यान जान नदिन अनिवार्य पालना गर्नुपर्ने नियम कुन हो?",
      options: [
        { ja: "作業床の上に人を乗せたまま移動させてはならず、作業時はキャスターのブレーキを確実にロックしアウトリガを最大に張り出す", id: "DILARANG menggeser perancah saat ada orang di atasnya! Kunci rem roda dan pasang outrigger cakar penopang maksimal saat kerja", ne: "माथि मान्छे चढेको बेला खट गुडाउन कडा प्रतिबन्ध छ! काम गर्दा पाङ्ग्राको ब्रेक लगाउने र बाहिरी खुट्टा (आउट्रिगर) पूर्ण फैलाउने" },
        { ja: "作業員が乗ったまま、下から全速力で押して現場内を走る", id: "Mendorong kencang perancah saat tukang masih asyik bekerja di atas", ne: "माथि मान्छे भएकै बेला मुनिबाट बेस्सरी धकेलेर कुदाउने" },
        { ja: "キャスターのブレーキは邪魔なので外して常に自由に動くようにする", id: "Melepas rem roda agar perancah bisa meluncur bebas sendiri", ne: "सजिलो हुन्छ भन्दै पाङ्ग्राको ब्रेक नै फुकालिदिने" },
        { ja: "タワーの高さを建物の屋根よりも高く積み上げて使う", id: "Menumpuk tower sangat tinggi melebihi atap gedung", ne: "घरभन्दा पनि अग्लो बनाएर खट थप्दै जाने" }
      ],
      answer: 0,
      expJa: "【テキスト P.184参照】人を乗せたまま移動させると溝や段差で一瞬にしてタワーが横転し墜落死します[cite: 14]。移動時は全員降り、停止時はブレーキ＋アウトリガ固定です[cite: 14]。",
      expId: "Dilarang memindahkan rolling tower saat ada orang di atas! Kunci rem roda dan pasang cakar outrigger sebelum memanjat.",
      expNe: "माथि मान्छे भएकै बेला पाङ्ग्रा गुडाए खट पल्टिएर मान्छे मर्छ। सधैं मान्छे ओरालेर मात्र खट सार्नुपर्छ।"
    },
    {
      cat: "学科：クレーン等のアウトリガの張り出し幅",
      q: "問26：移動式クレーンを現場に設置して揚重作業を行う際、クレーンの横転を防ぐためのアウトリガの張り出し基準はどれですか。",
      q_id: "Soal 26: Bagaimanakah standar penjuluran kaki penopang hidrolik (outrigger) crane yang BENAR saat diposisikan di proyek?",
      q_ne: "प्रश्न २६: क्रेनले सामान उठाउँदा क्रेन पल्टिन नदिन गाडीका खुट्टाहरू (आउट्रिगर) कतिसम्म बाहिर निकाल्नुपर्छ?",
      options: [
        { ja: "原則としてアウトリガを「最大張出し」とし、スライドロックを確実に掛けて車体を完全に水平に保つ", id: "Wajib dijulurkan secara 'Maksimal / Full Extended', kunci pin pengaman, dan pastikan bodi crane rata air (horizontal)", ne: "सधैं खुट्टाहरूलाई 'पूरै बाहिर (अधिकतम)' निकाल्ने, सुरक्षा पिन लगाउने र क्रेनलाई पूर्ण तेर्सो (लेभलमा) राख्ने" },
        { ja: "道路が狭いのでアウトリガを全く出さずにタイヤだけで吊る", id: "Tidak mengeluarkan outrigger sama sekali karena jalan sempit", ne: "बाटो साँघुरो छ भन्दै खुट्टा नै ननिकाली पाङ्ग्राको भरमा उचाल्ने" },
        { ja: "荷物を吊り上げる側の片足だけを少し出して反対側は引っ込める", id: "Hanya menjulurkan outrigger satu sisi saja di sisi beban", ne: "सामान भएको तिरको एउटा खुट्टा मात्र थोरै निकाल्ने" },
        { ja: "アウトリガの下に空き缶を並べて支える", id: "Mengganjal outrigger dengan kaleng minuman bekas", ne: "खुट्टा मुनि चिसोको खाली बट्टा राखेर अड्याउने" }
      ],
      answer: 0,
      expJa: "【クレーン則】アウトリガの中間張出しは定格荷重が激減し転倒の主因になります。やむを得ず中間張出しとする場合も性能計算表を厳守します。",
      expId: "Outrigger crane WAJIB dikeluarkan full maksimal di atas pelat baja tebal demi mencegah crane terbalik saat boom berputar.",
      expNe: "क्रेनको खुट्टा पूरै बाहिर ननिकाली सामान उठाए क्रेन तुरुन्तै पल्टिन्छ। त्यसैले खुट्टा पूरै तन्काउनै पर्छ।"
    },
    {
      cat: "学科：ワイヤーロープのクランプ留め（クリップ止め）",
      q: "問27：ワイヤーロープの端末加工において、ワイヤークリップを用いてアイ加工（輪っか作り）をする際の正しいクリップの向きと留め方はどれですか。",
      q_id: "Soal 27: Bagaimanakah cara pemasangan Klem Kawat Seling (Wire Clip) yang BENAR saat membuat simpul mata kawat?",
      q_ne: "प्रश्न २७: स्लिङ तारको टुप्पोमा गोलो रिङ बनाउन यु-बोल्ट क्ल्याम्प (वायर क्लिप) कस्दा क्ल्याम्प कुन दिशा फर्काएर कस्नुपर्छ?",
      options: [
        { ja: "クリップの本体（ベース・鞍部）を本線（荷重がかかる側）に当て、Uボルト側を止め線（端末側）に向けて所定間隔で均等に締め付ける", id: "Badan tapak klem (saddle) ditaruh di Kawat Utama (yang menahan beban), dan baut U-bolt ditaruh di Kawat Ujung pendek", ne: "क्ल्याम्पको बाक्लो भाग (स्याडल) मुख्य तन्किने तारतिर राख्ने, र 'U' आकारको बोल्ट छोटो टुप्पोतिर फर्काएर कस्ने" },
        { ja: "クリップの向きを1個ずつ交互に逆向きにして取り付ける", id: "Memasang klem bolak-balik selang-seling saling berlawanan", ne: "एउटा यता अर्को उता फर्काएर उल्टोपाल्टो कस्ने" },
        { ja: "Uボルト側を本線（強い力のかかる側）に向けて締め付ける", id: "Menaruh lengkungan U-bolt menekan kawat utama yang menahan beban", ne: "U-बोल्टलाई मुख्य तन्किने तारमाथि पारेर कस्ने" },
        { ja: "クリップは1個だけ軽く締めれば十分である", id: "Cukup memasang 1 buah klem saja", ne: "जम्मा एउटा मात्र क्ल्याम्प हल्का कसे पुग्छ" }
      ],
      answer: 0,
      expJa: "【ワイヤークリップの基本】「サドル（鞍部）は本線、Uボルトは端末」が鉄則です。Uボルトを本線にかけるとロープの素線を押し潰して強度が激減します。",
      expId: "Aturan mutlak klem kawat: 'Never saddle a dead horse'. Tapak klem menahan kawat utama, lengkungan U-bolt menekan kawat sisa.",
      expNe: "क्ल्याम्पको बाक्लो भाग सधैं मुख्य तन्किने तारमा पर्नुपर्छ। U-बोल्टले मुख्य तार थिचे तार चुँडिन्छ।"
    },
    {
      cat: "学科：熱中症と現場の体調不良者への声かけ",
      q: "問28：夏季の現場において、作業員同士がお互いの顔色や汗のかき方を確認し合う「声かけ運動」の目的として最も適切なものはどれですか。",
      q_id: "Soal 28: Apakah tujuan utama gerakan saling menyapa dan memantau kondisi fisik antar rekan kerja (Koegake Undou) di musim panas?",
      q_ne: "प्रश्न २८: गर्मीमा काम गर्दा साथी-साथी बीच एकअर्काको अनुहार र पसिना हेरेर 'हालखबर सोध्ने (कोएगाके अभियान)' गर्नुको मुख्य उद्देश्य के हो?",
      options: [
        { ja: "熱中症の初期症状（返事が遅い、顔色が青白い、動きが鈍い等）は本人が気づきにくいため、周囲が早期に発見して手遅れを防ぐため", id: "Penderita heatstroke sering tidak sadar dirinya mulai linglung; pemantauan oleh rekan kerja menyelamatkan nyawanya sebelum pingsan", ne: "हिटस्ट्रोक लागेको मान्छेले आफू बिरामी भएको आफैं पत्ता पाउन नसक्ने हुनाले, साथीहरूले चाँडै देखेर ज्यान जोगाउन सकियोस् भनेर" },
        { ja: "作業員のおしゃべりを増やして仕事をわざと遅らせるため", id: "Hanya untuk memperbanyak obrolan santai agar kerja molor", ne: "गफ गरेर काम ढिलो गराउन" },
        { ja: "誰が一番汗をかいているか競争するため", id: "Untuk bertanding siapa yang paling banyak berkeringat", ne: "कसको धेरै पसिना आउँछ भनेर प्रतिस्पर्धा गर्न" },
        { ja: "大きな声を出して近隣住民にアピールするため", id: "Pamer suara lantang ke tetangga sekitar", ne: "छिमेकीलाई ठूलो स्वर सुनाउन" }
      ],
      answer: 0,
      expJa: "【熱中症の早期発見】熱中症の初期は脳の機能低下により本人の判断力が麻痺します。「顔色がおかしい」「受け答えがおかしい」と周囲が気づくことが救命の鍵です。",
      expId: "Orang yang terkena heatstroke otaknya mulai bingung sehingga merasa dirinya 'baik-baik saja'. Teguran rekan kerja adalah penyelamat hidupnya.",
      expNe: "गर्मीले दिमाग सुस्त हुने भएकाले बिरामीले 'म ठीक छु' भन्छ। तर साथीले अनुहार हेरेर थाहा पाएर बचाउन सक्छ।"
    },
    {
      cat: "学科：ヘルメット（保護帽）のあご紐の点検",
      q: "問29：始業時の保護具点検において、職長が作業員のヘルメット着用状態を確認する際の合格基準はどれですか。",
      q_id: "Soal 29: Apakah standar LULUS saat Shokucho memeriksa pemakaian helm proyek pekerja di apel pagi?",
      q_ne: "प्रश्न २९: बिहानको औजार जाँचमा शोकुचोले कामदारको हेल्मेट हेर्दा पास हुने 'सही मापदण्ड' कुन हो?",
      options: [
        { ja: "アゴ紐のワンタッチバックルが確実に「パチン」と結合され、指が1本入る程度の適正な張力で緩みなく締まっていること", id: "Kancing tali dagu terkunci 'klik' rapat, dengan kekencangan pas (masuk 1 jari tangan) tanpa kendor menggelantung", ne: "चिउँडोको तुनाको लक 'क्लिक' गरेर अड्किएको, र एउटा औंला छिर्ने गरी ठिक्क कसिलो भएको हुनुपर्ने" },
        { ja: "アゴ紐が外れて胸元までブラブラ垂れ下がっていること", id: "Tali dagu dibiarkan menjuntai lepas di dada", ne: "तुना नबाँधी छातीसम्म झुन्डिएको हुनुपर्ने" },
        { ja: "ヘルメットのツバを真後ろに向けて被っていること", id: "Memakai helm terbalik moncongnya di belakang", ne: "हेल्मेट उल्टो पारेर पछाडि फर्काएको हुनुपर्ने" },
        { ja: "アゴ紐がハサミで切り落とされていること", id: "Tali dagu dipotong putus dengan gunting", ne: "तुना कैंचीले काटेर फालिएको हुनुपर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.189参照】アゴ紐が緩んでいると、転倒した最初の瞬間にヘルメットが脱げて頭部を地面に強打します[cite: 19]。指1本分の適切な締付けを徹底します。",
      expId: "Tali dagu wajib terkunci kencang pas 1 jari. Tali kendor sama saja dengan tidak memakai helm saat kepala membentur beton.",
      expNe: "चिउँडोको तुना खुकुलो भए लड्दा हेल्मेट फुत्किन्छ। त्यसैले एउटा औंला छिर्ने गरी कसिलो पार्नै पर्छ।"
    },
    {
      cat: "学科：フルハーネスのランヤード点検",
      q: "問30：高所作業で使用するフルハーネス型墜落制止用器具の「ショックアブソーバ（衝撃吸収器）」の日常点検項目として正しいものはどれですか。",
      q_id: "Soal 30: Pengecekan apakah yang WAJIB diperiksa pada Shock Absorber tali harness sebelum dipakai memanjat?",
      q_ne: "प्रश्न ३०: अग्लो ठाउँमा चढ्नुअघि सेफ्टी हार्नेसको डोरीमा भएको 'झट्का रोक्ने बट्टा (शक-एब्जर्बर)' मा के कुरा जाँच्नुपर्छ?",
      options: [
        { ja: "過去の落下衝撃等によってアブソーバの縫製部が引き裂かれて伸びきっていないか、およびカバーの破損がないか", id: "Pastikan jahitan peredam kejut belum sobek terurai akibat pernah menahan orang jatuh, dan cover pelindung utuh", ne: "पहिले लडेर झट्का खाएका कारण भित्रको सिलाइ च्यातिएर तन्किएको छ कि छैन र बाहिरको खोल सुरक्षित छ कि छैन हेर्ने" },
        { ja: "ショックアブソーバをカッターナイフで切り裂いて中身を確認すること", id: "Menyayat bungkus absorber dengan pisau cutter", ne: "ब्लेडले काटेर भित्र के छ हेर्ने" },
        { ja: "ショックアブソーバを取り外して針金で直結すること", id: "Melepas absorber dan menggantinya dengan kawat jemuran", ne: "अब्जर्बर फुकालेर तारले बाँध्ने" },
        { ja: "ショックアブソーバの中に水を流し込んで重くすること", id: "Mengisi air ke dalam kantong shock absorber", ne: "भित्र पानी भरेर गह्रौं बनाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.189参照】ショックアブソーバは一度でも強い落下荷重を受けると縫製が解けて伸び、衝撃を吸収する仕組みです[cite: 19]。展開・破損したものは再使用厳禁です。",
      expId: "Shock absorber yang jahitannya sudah terbuka tanda pernah menahan beban jatuh WAJIB DIBUANG. Daya redamnya sudah nol.",
      expNe: "एकपटक खसेर तन्किएको शक-एब्जर्बर काम नलाग्ने हुन्छ। त्यसैले सिलाइ च्यातिएको छ कि छैन दैनिक हेर्नुपर्छ।"
    },
    {
      cat: "学科：手すり先行足場の「据置手すり」",
      q: "問31：手すり先行工法の足場において、作業床を取り外す解体作業を行う際、最後まで残して作業員の墜落を防ぐ手すりのルールはどれですか。",
      q_id: "Soal 31: Bagaimanakah aturan pembongkaran pagar pengaman pada perancah sistem Tesuri Senkou saat lantai kerja dilepas?",
      q_ne: "प्रश्न ३१: पहिले रेलिङ लगाइने सुरक्षित खट (तेसुरी सेन्कोउ) भत्काउँदा, कामदार खस्नबाट जोगाउन सुरक्षा बार कहिले फुकाल्नुपर्छ?",
      options: [
        { ja: "作業床を取り外す間も手すりを常に残しておき、作業員が安全な下層へ退避した後に初めて手すりを解体する", id: "Pagar pengaman HARUS TETAP TERPASANG saat lantai kerja dibongkar, dan baru boleh dilepas setelah pekerja turun ke lantai aman di bawahnya", ne: "फलेक फुकाल्ने बेलासम्म पनि सुरक्षा बार जस्ताको तस्तै राखिरहने, र कामदार मुनिको सुरक्षित तलामा झरिसकेपछि मात्र बार फुकाल्ने" },
        { ja: "作業を始める前に一番最初にすべての手すりを外して捨てておく", id: "Melepas seluruh pagar pengaman di awal sebelum membongkar", ne: "काम सुरु हुनुअघि नै सबै बारहरू पहिले नै फुकालेर फाल्ने" },
        { ja: "手すりは解体せず、そのまま建物の中に埋め込んでしまう", id: "Membiarkan railing tertanam di dalam beton dinding", ne: "रेलिङ कहिल्यै नफुकाली भित्ताभित्रै पुर्ने" },
        { ja: "手すりの上を綱渡りしながら解体作業を進める", id: "Berjalan sirkus di atas pipa railing saat membongkar", ne: "रेलिङ माथि सर्कस जस्तो हिँड्दै भत्काउने" }
      ],
      answer: 0,
      expJa: "【手すり先行足場の解体】組立時だけでなく解体時も「常に手すりがある状態で作業床を外す」手順を徹底し、作業床解体後に下層から手すりを外します。",
      expId: "Prinsip Tesuri Senkou saat bongkar: Lantai kerja dilepas dari balik pagar pengaman. Pagar adalah komponen paling akhir yang dilepas dari bawah.",
      expNe: "खट भत्काउँदा पनि बार पहिले फुकाल्न पाइँदैन। भुइँको फलेक हटाइसकेर आफू तल झरेपछि मात्र सुरक्षित रूपमा बार फुकाल्नुपर्छ।"
    },
    {
      cat: "学科：脚立のステップ昇降の「3点支持」",
      q: "問32：はしごや脚立を昇降する際、バランスを崩して滑落するのを防ぐための基本動作「3点支持（三点確保）」とはどのような状態ですか。",
      q_id: "Soal 32: Apakah yang dimaksud dengan prinsip keselamatan '3 Titik Tumpu' (San-ten Shiji) saat menaiki tangga lurus atau tangga lipat?",
      q_ne: "प्रश्न ३२: भर्याङ वा क्याताचु चढ्दा-ओर्लँदा लड्नबाट बच्न अपनाइने '३ बिन्दुको पकड (सान्तेन शिजी)' भनेको के हो?",
      options: [
        { ja: "「両手と片足」または「両足と片手」の合計3点が、常にステップや手すりを確実に保持・接地している状態", id: "Kondisi di mana 'Dua Tangan dan Satu Kaki' ATAU 'Dua Kaki dan Satu Tangan' (total 3 titik) selalu mencengkeram tangga secara konstan", ne: "'दुवै हात र एउटा खुट्टा' वा 'दुवै खुट्टा र एउटा हात' गरी शरीरका जम्मा ३ वटा अङ्गले सधैं भर्याङलाई समातेको वा टेकेको अवस्था" },
        { ja: "両手をポケットに突っ込んで足だけで駆け上がること", id: "Menaiki tangga dengan kedua tangan di saku celana", ne: "हात खल्तीमा हालेर खुट्टाले मात्र दौडिएर चढ्ने" },
        { ja: "片足だけで立ち、両手を頭の上で拍手すること", id: "Berdiri 1 kaki sambil bertepuk tangan di atas kepala", ne: "एउटा खुट्टाले टेकेर दुवै हातले ताली बजाउने" },
        { ja: "背中と両膝の3箇所を壁に擦り付けながら登ること", id: "Menggesekkan punggung dan lutut ke dinding", ne: "पिठ्युँ र घुँडा भित्तामा दल्दै चढ्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.184参照】昇降時の鉄則は3点支持です[cite: 14]。両手に工具等を持っていると1点または2点支持になり、足が滑った瞬間に確実に墜落します[cite: 14]。",
      expId: "3 Titik Tumpu: Selalu pastikan 3 dari 4 anggota gerak badan (2 tangan + 1 kaki, atau 2 kaki + 1 tangan) mengunci tangga saat bergerak.",
      expNe: "भर्याङ चढ्दा सधैं ३ वटा अङ्ग (२ हात र १ खुट्टा, वा २ खुट्टा र १ हात) ले बलियोसँग समातेको हुनैपर्छ।"
    },
    {
      cat: "学科：有機溶剤中毒の初期症状",
      q: "問33：密閉された地下室で接着剤や塗料を使用している作業員が「頭痛、めまい、吐き気、身体のふらつき」を訴え始めました。職長が直ちに下すべき判断はどれですか。",
      q_id: "Soal 33: Pekerja di ruangan tertutup mulai mengeluh sakit kepala, mual, pusing melayang akibat uap lem/thinner. Apakah keputusan tegas yang WAJIB diambil Shokucho?",
      q_ne: "प्रश्न ३३: बन्द कोठाभित्र गम वा रङको काम गर्दा कामदारलाई टाउको दुख्ने, रिङ्गटा लाग्ने र बान्ता होला जस्तो भयो। शोकुचोले तुरुन्त कस्तो निर्णय लिनुपर्छ?",
      options: [
        { ja: "有機溶剤中毒の初期症状であるため、直ちに作業全員を屋外の新鮮な空気の場所へ避難させ、送風機で強制換気を行い、被災者を横にして衣服を緩める", id: "Gejala keracunan pelarut organik! Segera evakuasi SEMUA pekerja ke udara bebas di luar, nyalakan blower ventilasi maksimal, dan baringkan korban", ne: "यो केमिकल ग्यासको विष लागेको लक्षण हो! तुरुन्त सबै कामदारलाई बाहिर खुला हावामा निकाल्ने, पङ्खाले कोठा सफा गर्ने र बिरामीलाई सुताएर कपडा खुकुलो पार्ने" },
        { ja: "気のせいだからそのまま息を止めて作業を続けろと命じる", id: "Menyuruhnya menahan napas dan lanjut bekerja", ne: "भ्रम मात्र हो भन्दै सास रोकेर काम गर भन्ने" },
        { ja: "部屋のドアを外から鍵をかけて閉じ込める", id: "Mengunci pintu dari luar agar tidak bisa keluar", ne: "ढोकामा बाहिरबाट ताल्चा लगाइदिने" },
        { ja: "シンナーをさらに部屋中にまき散らして匂いに慣れさせる", id: "Menyiram lebih banyak thinner agar terbiasa baunya", ne: "बानी पर्छ भन्दै कोठाभरि अझै धेरै थिनर छर्किदिने" }
      ],
      answer: 0,
      expJa: "【有機溶剤中毒対応】有機溶剤の蒸気は空気より重く床付近に滞留します。頭痛やめまいは急性中毒のサインです。直ちに全員を新鮮な空気の場所へ退避させます。",
      expId: "Evakuasi segera ke udara segar saat gejala pusing pelarut kimia muncul. Menunda evakuasi memicu kerusakan saraf permanen dan koma.",
      expNe: "थिनरको गन्धले टाउको दुख्नु विष फैलिएको लक्षण हो। तुरुन्त कामदारलाई बाहिर खुला हावामा निकालेर सुताउनुपर्छ।"
    },
    {
      cat: "学科：熱中症予防の「クールダウンテント」",
      q: "問34：直射日光を遮る日陰がない屋外現場において、熱中症を防ぐために事業者が現場内に設けるべき応急休憩設備はどれですか。",
      q_id: "Soal 34: Fasilitas darurat apakah yang WAJIB didirikan di area proyek terbuka yang tidak memiliki naungan pohon/gedung untuk mencegah sengatan panas?",
      q_ne: "प्रश्न ३४: छहारी नभएको खुला घाममा काम गर्दा कामदारलाई आराम गराउन कार्यस्थलमा अनिवार्य खडा गरिने अस्थायी व्यवस्था के हो?",
      options: [
        { ja: "遮光ネット付きの休憩テント（大型扇風機・ミスト・冷水器付きの休憩所）", id: "Tenda Peneduh dengan Jaring Paranet (dilengkapi kipas angin kabut blower dan air minum dingin)", ne: "घाम छेक्ने जाली भएको आराम पाल (चिसो पानी, पंखा र बाफ मेसिन भएको अस्थायी क्याम्प)" },
        { ja: "サウナ風呂のテント", id: "Tenda pemanas sauna uap", ne: "तातो साउना पाल" },
        { ja: "ガラス張りの温室テント", id: "Tenda rumah kaca panas", ne: "सिसाको तातो घर" },
        { ja: "屋根のない金網の檻", id: "Kandang kawat tanpa atap", ne: "छाना नभएको जालीको खोर" }
      ],
      answer: 0,
      expJa: "【テキスト P.191参照】直射日光を遮る遮光ネットや大型テントを設置し、ファンやミスト、冷たい飲料水を常備することで作業員の熱疲労を回復させます[cite: 21]。",
      expId: "Tenda peneduh ber-paranet wajib disiapkan di lapangan terbuka agar pekerja bisa menurunkan suhu badan saat jeda istirahat.",
      expNe: "घाम नलाग्ने गरी पाल टाँगेर पंखा र चिसो पानीको व्यवस्था गरेमा कामदारको ज्यान जोगिन्छ।"
    },
    {
      cat: "学科：玉掛けワイヤーの廃棄基準（直径の減少）",
      q: "問35：直径（公称径）が10mmの新品の玉掛けワイヤーロープが摩耗し、ノギスで測定したところ外径が「9.0mm（10%減少）」になっていました。このワイヤーの正しい判定はどれですか。",
      q_id: "Soal 35: Kawat seling dengan diameter asli 10 mm telah aus terkikis menjadi 9,0 mm (menyusut 10%). Apakah keputusan yang BENAR mengenai kawat tersebut?",
      q_ne: "प्रश्न ३५: १० मिमी मोटाइ भएको क्रेनको नयाँ स्लिङ तार घोटिएर नाप्दा ९.० मिमी (१०% पातलो) भएको पाइयो। यो तारको सही निर्णय के हो?",
      options: [
        { ja: "直径の減少が公称径の7%を超えているため、重大な吊り荷落下事故を防ぐため直ちに「廃棄（使用禁止）」とする", id: "WAJIB DIBUANG dan DILARANG PAKAI! Karena diameter menyusut melebihi batas legal 7%, rawan putus saat mengangkat beban", ne: "तुरुन्त 'फाल्ने (प्रयोगमा रोक लगाउने)'! कानुन अनुसार ७% भन्दा धेरै पातलो भएको तार जुनसुकै बेला चुँडिएर सामान खस्छ" },
        { ja: "細くなって軽くなったので合格としてそのまま使う", id: "Lolos karena jadi lebih ringan dan lentur", ne: "हल्का भयो भन्दै पास गरेर चलाउने" },
        { ja: "細くなった部分にセロハンテープを巻いて太くして使う", id: "Dibalut lakban agar tampak gemuk kembali", ne: "टेप बाँधेर मोटो बनाएर चलाउने" },
        { ja: "100トン以上の鉄骨を吊り上げるメインワイヤーにする", id: "Dipakai untuk mengangkat beban 100 ton", ne: "१०० टनको भारी सामान उचाल्न प्रयोग गर्ने" }
      ],
      answer: 0,
      expJa: "【クレーン則第219条】ワイヤーロープの直径の減少が「公称径の7%を超えるもの」は法令で使用が禁止されています。10mmの場合、9.3mm未満で即廃棄です。",
      expId: "Batas susut diameter kawat seling adalah 7%. Jika kawat 10 mm susut jadi 9,0 mm (susut 10%), kawat tersebut ILEGAL dan wajib dipotong dibuang.",
      expNe: "तारको मोटाइ ७% भन्दा धेरै घटेमा कानुनले काम गर्न दिँदैन। १० मिमीको तार ९.० मिमी हुनु फेल हो र तत्काल फाल्नुपर्छ।"
    },
    {
      cat: "学科：火花飛散防止シート（スパッタシート）の規格",
      q: "問36：鉄骨溶接やサンダー切断作業の周囲に張る火花受けシート（スパッタシート）として使用しなければならない正規の規格品はどれですか。",
      q_id: "Soal 36: Standar spesifikasi resmi apakah yang WAJIB dimiliki kain pelindung percikan api (spatter sheet) las di proyek?",
      q_ne: "प्रश्न ३६: वेल्डिङ वा ग्राइन्डर गर्दा आगोको झिल्का छेक्न वरिपरि लगाइने कपडा (स्प्याटर सिट) कुन आधिकारिक गुणस्तरको हुनैपर्छ?",
      options: [
        { ja: "JIS A 1323（難燃性・耐火性試験に合格した防炎・耐炎スパッタシート）", id: "Standar JIS A 1323 (Kain Spatter Sheet Anti-Api yang lolos uji ketahanan panas las)", ne: "JIS A 1323 (आगोले नसल्किने प्रमाणित भएको आधिकारिक 'ज्वाला प्रतिरोधी स्प्याटर सिट')" },
        { ja: "青い一般的なビニールブルーシート", id: "Terpal plastik biru biasa (Blue Sheet)", ne: "सामान्य नीलो प्लास्टिकको त्रिपाल" },
        { ja: "古新聞紙を糊で貼り合わせたもの", id: "Kertas koran bekas yang dilem", ne: "पुरानो अखबार टाँसेको पर्दा" },
        { ja: "段ボール箱を切り開いた板", id: "Kardus bekas yang dipotong", ne: "कागजको कार्टुन खोलेको पाता" }
      ],
      answer: 0,
      expJa: "【スパッタシートの選定】ブルーシート（ポリエチレン製）は溶接火花で瞬時に溶けて引火します。必ずJIS規格（JIS A 1323）の耐火・防炎合格品（A種・B種等）を用います。",
      expId: "Dilarang keras memakai terpal biru untuk menampung percikan las! Terpal biru mudah meleleh terbakar. Gunakan spatter sheet bersertifikat JIS A 1323.",
      expNe: "नीलो प्लास्टिकको त्रिपालमा वेल्डिङको झिल्का पर्नासाथ तुरुन्त आगो लाग्छ। त्यसैले आगोले नटिप्ने विशेष प्रमाणित सिट मात्र प्रयोग गर्नुपर्छ।"
    },
    {
      cat: "学科：熱中症対策・暑熱順化（からだの慣れ）",
      q: "問37：梅雨明け直後など急激に気温が上昇する時期に熱中症が多発する原因と、職長が配慮すべき「暑熱順化（しょねつじゅんか）」に関する知識として正しいものはどれですか。",
      q_id: "Soal 37: Mengapa kecelakaan sengatan panas melonjak drastis saat awal musim panas tiba, dan apakah yang dimaksud dengan 'Shonetsu Junka' (Aklimatisasi Panas)?",
      q_ne: "प्रश्न ३७: गर्मी सुरु हुने बित्तिकै धेरै कामदार बिरामी पर्नुको कारण के हो र शरीरलाई गर्मीसँग बानी पार्ने 'शोनेचु जुन्का' सम्बन्धी कुन कुरा सही छ?",
      options: [
        { ja: "身体が暑さに慣れるまでには数日〜2週間程度かかるため、体が慣れていない初夏や休み明けは作業負荷を軽めにし、徐々に慣れさせる必要がある", id: "Tubuh butuh waktu beberapa hari hingga 2 minggu untuk adaptasi berkeringat dingin; kurangi beban kerja saat hari-hari pertama panas", ne: "शरीर गर्मीसँग बानी पर्न केही दिनदेखि २ हप्ता लाग्ने हुनाले, गर्मी सुरु भएको पहिलो हप्ता र लामो बिदापछि कामको भार हल्का गराएर बिस्तारै बानी पार्नुपर्छ" },
        { ja: "初日に真夏の炎天下で15時間連続作業させれば、その日のうちに完璧に暑さに適応できる", id: "Kerja paksa 15 jam di hari pertama langsung membuat tubuh kebal panas", ne: "पहिलो दिनमै १५ घण्टा घाममा जोतेपछि शरीर सधैंका लागि बानी पर्छ" },
        { ja: "人間の体は気温の変化に1秒で完全に順応できるので事前の配慮は不要である", id: "Tubuh manusia bisa adaptasi instan dalam 1 detik", ne: "मानिसको शरीर १ सेकेन्डमै गर्मीसँग बानी पर्छ" },
        { ja: "暑熱順化とは、毎日お風呂に入らないようにすることである", id: "Aklimatisasi berarti dilarang mandi", ne: "दिनहुँ ननुहाउने बानी गर्नु" }
      ],
      answer: 0,
      expJa: "【暑熱順化（しょねつじゅんか）】体が発汗によって体温調節できるようになるには約1〜2週間の「慣れ」が必要です。梅雨明けや連休明けの初日は熱中症が最も警戒されるタイミングです。",
      expId: "Aklimatisasi panas butuh 1-2 minggu. Jangan langsung memberi beban kerja berat saat tiba-tiba cuaca mendadak panas terik.",
      expNe: "गर्मीमा पसिना निकालेर शरीर चिस्याउन जिउलाई बानी पर्न १-२ हप्ता लाग्छ। त्यसैले गर्मीको सुरुका दिनमा बिस्तारै काम लगाउनुपर्छ।"
    },
    {
      cat: "学科：フルハーネスの二丁掛け（フック掛け替え）",
      q: "問38：足場の昇降階段や鉄骨上を移動する際、常にどちらかのフックが構造物に掛かっている状態を維持し、無胴綱（無フック）状態をゼロにする作業方法は何ですか。",
      q_id: "Soal 38: Metode pemakaian dua kait hook lanyard apakah yang WAJIB diterapkan agar pekerja tidak pernah sedetik pun berada dalam kondisi tanpa cantolan di ketinggian?",
      q_ne: "प्रश्न ३८: अग्लो ठाउँमा हिँड्दा वा चढ्दा कुनै पनि समयमा हुक नअड्किएको अवस्था हुन नदिन, दुईवटै हुक पालैपालो अड्काउँदै अगाडि बढ्ने नियमलाई के भनिन्छ?",
      options: [
        { ja: "ランヤードの二丁掛け（にちょうがけ / 2丁掛け）", id: "Nichou-gake (Metode Dua Kait Lanyard / 100% Tie-off)", ne: "निचौ-गाके (दुईवटै हुक प्रयोग गर्ने विधि / १००% लक)" },
        { ja: "ノーフック走行", id: "Berlari tanpa cantolan hook", ne: "हुक नलगाई दौडिने" },
        { ja: "片手ぶら下がり工法", id: "Bergelantungan satu tangan", ne: "एउटा हातले झुन्डिने विधि" },
        { ja: "ロープ飛び降り工法", id: "Melompat bebas", ne: "हामफाल्ने विधि" }
      ],
      answer: 0,
      expJa: "【二丁掛けの原則】フックを掛け替える一瞬の隙に足を滑らせて墜落死する事故を防ぐため、第1フックを掛けたまま第2フックを前方に掛け、常に1つが掛かっている状態を保ちます。",
      expId: "Nichou-gake (100% tie-off) memastikan satu hook selalu mencantol sebelum hook lainnya dilepas saat berpindah pijakan.",
      expNe: "हुक फेर्ने एकै सेकेन्डको बीचमा लडेर मान्छे मर्छ। त्यसैले एउटा हुक अड्काइराखेर मात्र अर्को हुक अगाडि सार्ने विधिलाई 'निचौ-गाके' भनिन्छ।"
    },
    {
      cat: "学科：外国人作業員へのKY活動の工夫",
      q: "問39：日本語の読み書きや専門用語の理解が十分でない外国人作業員が安全ミーティング（KY活動）に参加する際、職長が取るべき最も適切な工夫はどれですか。",
      q_id: "Soal 39: Pendekatan K3 apakah yang PALING TEPAT dilakukan Shokucho saat memimpin briefing KYT yang diikuti oleh pekerja asing yang belum lancar bahasa Jepang?",
      q_ne: "प्रश्न ३९: जापानी भाषा राम्रो नबुझ्ने विदेशी कामदारहरू सहभागी भएको बिहानी सुरक्षा बैठक (KYT) मा शोकुचोले कस्तो राम्रो तरिका अपनाउनुपर्छ?",
      options: [
        { ja: "危険予知イラストシートや現場写真を指差しながら、平易な言葉・身振り手振りを交え、母国語併記の単語カード等を活用して理解を確認する", id: "Gunakan gambar ilustrasi bahaya/foto lapangan, bahasa Jepang sederhana, gestur tangan, dan kartu istilah dwibahasa agar paham tuntas", ne: "खतराका चित्र र फोटो देखाउँदै इसारा गर्ने, सरल जापानी भाषा बोल्ने र उनीहरूको आफ्नै भाषाका शब्द कार्डहरू प्रयोग गरी बुझेको पक्का गर्ने" },
        { ja: "難しい漢字ばかりの分厚い日本の法律書を黙読させる", id: "Menyuruh membaca buku hukum kanji tebal dalam diam", ne: "गाह्रो कान्जी अक्षर भएको जापानी कानुनको किताब पढ्न लगाउने" },
        { ja: "外国人作業員は座らせておくだけで一切発言させない", id: "Menyuruh duduk diam dan melarang bicara sepatah kata pun", ne: "विदेशीलाई चुपचाप बस्न लगाउने र केही बोल्न नदिने" },
        { ja: "怒鳴り声を上げて恐怖心でルールを覚えさせる", id: "Membentak keras-keras agar hafal karena takut", ne: "थर्काएर र डर देखाएर नियम घोकाउन खोज्ने" }
      ],
      answer: 0,
      expJa: "【多言語安全管理】言葉の壁による理解不足は重大災害の原因になります。イラスト、写真、指差し、母国語対訳を用いた視覚的・体感的な対話が不可欠です。",
      expId: "Gunakan media visual (gambar ilustrasi KYT dan foto) serta bahasa sederhana agar pekerja asing memahami titik bahaya tanpa salah tafsir.",
      expNe: "भाषा नबुझ्दा दुर्घटना हुन्छ। त्यसैले चित्र, फोटो र सरल भाषा प्रयोग गरी विदेशी साथीहरूलाई खतरा स्पष्ट बुझाउनुपर्छ।"
    },
    {
      cat: "学科：熱中症疑い時の判断フロー（自力摂取の可否）",
      q: "問40：炎天下で倒れかけた作業員を日陰に運び水分を渡したところ、手が震えてペットボトルのキャップを開けられず、ボーッとしています。職長としての判断はどれですか。",
      q_id: "Soal 40: Pekerja yang lemas terkena panas tidak mampu membuka tutup botol karena tangannya gemetar dan pandangannya kosong. Apakah tindakan tegas Shokucho?",
      q_ne: "प्रश्न ४०: घाममा ढल्न लागेको कामदारलाई शीतलमा लगेर पानी दिँदा, हात कापेर बिर्को खोल्न सकेन र आँखा टोलाएर हेरिरह्यो। शोकुचोले तुरुन्त के निर्णय गर्नुपर्छ?",
      options: [
        { ja: "「自力で水分摂取ができない状態」は重症化の危険な兆候であるため、無理に飲ませず直ちに医療機関へ搬送（または119番通報）し、冷却を継続する", id: "Ketidakmampuan minum mandiri adalah tanda bahaya darurat! Hentikan paksaan minum, segera telepon 119/bawa ke IGD, dan terus kompres es", ne: "'आफैं पानी समातेर पिउन नसक्नु' अति गम्भीर खतराको लक्षण हो! जबर्जस्ती नखुवाई तुरुन्त ११९ एम्बुलेन्स बोलाउने र शरीर चिस्याइरहने" },
        { ja: "ペットボトルの水を鼻の穴から無理やり流し込む", id: "Memaksa menuang air ke lubang hidung korban", ne: "नाकको प्वालबाट जबर्जस्ती पानी खन्याइदिने" },
        { ja: "「キャップくらい自分で開けろ」と叱りつけて放置する", id: "Memarahinya manja karena tidak bisa buka tutup botol", ne: "'बिर्को पनि खोल्न नसक्ने' भनेर गाली गरी छोडिदिने" },
        { ja: "元気が出るように現場の周りを10周全力疾走させる", id: "Menyuruhnya lari sprint 10 keliling proyek", ne: "दौडिएर बल आउँछ भन्दै कुदाउन लगाउने" }
      ],
      answer: 0,
      expJa: "【熱中症重症度判定】「自力でペットボトルを持って飲めるか」が病院搬送の重要な分岐点です。自力で飲めない場合は即座に医療機関（119番）を手配します。",
      expId: "Jika korban tidak mampu memegang botol sendiri, artinya kesadaran otaknya sudah terganggu. Ini lampu merah darurat, segera bawa ke RS!",
      expNe: "आफैं बिर्को खोलेर पानी पिउन नसक्नु दिमागमा असर परिसकेको लक्षण हो। तुरुन्त अस्पताल पुर्याउनै पर्छ।"
    },

    // ==========================================
    // 【実技試験パート：25問（問41〜問65）】
    // ==========================================
    {
      cat: "実技：オートレベルの視差（パララックス）の除去",
      q: "問41：オートレベルで測量を行う際、接眼レンズを覗きながら頭を上下左右に動かしたとき、標尺（スタッフ）の目盛りと十字線がズレて動く現象（視差）をなくすための正しい調整手順はどれですか。",
      q_id: "Soal 41: Bagaimanakah cara menghilangkan bayangan semu (Parallax) pada teropong Auto Level agar benang silang dan angka rambu tidak bergeser saat mata bergerak?",
      q_ne: "प्रश्न ४१: अटो लेभलमा आँखा अगाडि-पछाडि हल्लाउँदा भित्रको क्रस धर्को र स्टाफको अंक हल्लिने समस्या (प्यारालाक्स) हटाउन गरिने सही मिलाउने तरिका कुन हो?",
      options: [
        { ja: "まず接眼レンズのピント環を回して十字線をクッキリと鮮明にし、その後にピントノブ（合焦ノブ）を回して標尺の目盛りに完全にピントを合わせる", id: "Putar cincin lensa mata (eyepiece) sampai benang silang hitam pekat tajam, baru putar knop fokus samping untuk menajamkan angka rambu ukur", ne: "पहिले आँखा नजिकको रिङ घुमाएर क्रस धर्कोलाई प्रष्ट कालो बनाउने, त्यसपछि मात्र साइडको नब घुमाएर स्टाफको अंकलाई ठ्याक्कै फोकस गर्ने" },
        { ja: "望遠鏡のガラスをハンマーで叩いてピントを合わせる", id: "Memukul lensa kaca dengan palu", ne: "हम्बरले सिसा ठोकेर मिलाउने" },
        { ja: "頭を激しく振り続けながらその中間値を勘で読む", id: "Menggelengkan kepala kencang dan menebak angka tengahnya", ne: "टाउको बेस्सरी हल्लाउँदै अन्दाजमा पढ्ने" },
        { ja: "視差は放置したまま目盛りの上端だけを適当に読む", id: "Membiarkan saja dan membaca angka paling atas asal-asalan", ne: "वास्ता नगरी माथिल्लो अंक पढ्ने" }
      ],
      answer: 0,
      expJa: "【水準測量の実務】視差（パララックス）が残っていると目の位置によって読み値が狂います。①接眼環で十字線を合わせ、②合焦ノブで目標を合わせます。",
      expId: "Hilangkan paralaks dengan 2 langkah: Tajamkan benang silang via eyepiece dulu, baru tajamkan obyek rambu via knop fokus.",
      expNe: "पहिले क्रस धर्को प्रष्ट पारेर अनि मात्र स्टाफको अंक फोकस गरिएन भने टाउको हल्लिँदा नाप बिग्रिन्छ।"
    },
    {
      cat: "実技：下げ振りと風揺れ防止（P.101）",
      q: "問42：鉄骨建て方や型枠の垂直精度を測定するため「下げ振り（さげふり / ピーキャッチ）」を吊り下げる際、風で糸が揺れて静止しないときの正しい対処法はどれですか。",
      q_id: "Soal 42: Tindakan apakah yang BENAR saat menggunakan unting-unting bandul (sagefuri) jika benang terus bergoyang tertiup angin?",
      q_ne: "प्रश्न ४२: पिलर सिधा ९० डिग्री छ कि छैन नाप्न साहुल (सागेफुरी / धागोको तौल) झुन्ड्याउँदा, हावाले गर्दा साहुल हल्लिरह्यो भने के गर्नुपर्छ?",
      options: [
        { ja: "水や油を入れたバケツの中に下げ振りの先端を浸して液体の粘性で揺れを鎮めて静止させ、数値を測定する", id: "Celupkan ujung bandul ke dalam ember berisi air/minyak untuk meredam goyangan angin hingga tenang sempurna", ne: "पानी वा तेल भएको बाल्टिनभित्र साहुलको टुप्पो डुबाएर हावाको कम्पन शान्त पार्ने र अंक नाप्ने" },
        { ja: "風が止むまで3日間その場に立ち尽くして待つ", id: "Berdiri mematung selama 3 hari menunggu angin reda", ne: "हावा रोकिन्छ कि भनी ३ दिन उभिएर बस्ने" },
        { ja: "糸を手で引っ張って無理やり柱に押し付けて垂直とする", id: "Menarik benang dengan tangan dan menempelkannya paksa ke tiang", ne: "हातले तानेर जबर्जस्ती पिलरमा टाँसिदिने" },
        { ja: "下げ振りの重りをカッターナイフで切り落として糸だけにする", id: "Memotong bandul pemberat dan hanya menyisakan benangnya", ne: "साहुलको तौल काटेर फालिदिने" }
      ],
      answer: 0,
      expJa: "【現場の垂直測定】風がある屋外では、下げ振りを水バケツ（ダンパー）に浸すことで表面張力と粘性により揺れを止め、正確な垂直寸法をミリ単位で測定できます。",
      expId: "Meredam goyangan unting-unting angin: Celupkan bandul ke dalam ember air untuk mengunci kestabilan garis tegak lurus.",
      expNe: "पानीको बाल्टिनभित्र साहुल डुबाउँदा हावाले हल्लाउन पाउँदैन र पिलर ९० डिग्री सिधा भए/नभएको ठ्याक्कै नाप्न सकिन्छ।"
    },
    {
      cat: "実技：足場作業床の隙間基準（P.103）",
      q: "問43：枠組足場や単管足場の作業床を設置する際、作業員の足の踏み外しや工具の落下を防ぐために守るべき「床材間の隙間」および「床と建地（建屋）の隙間」の安全基準はどれですか。",
      q_id: "Soal 43: Berapakah batas celah maksimal antar papan lantai kerja perancah (dan celah ke dinding) menurut standar keselamatan K3?",
      q_ne: "प्रश्न ४३: खटमा फलेक ओछ्याउँदा खुट्टा अल्झिन वा औजार खस्न नदिन, फलेक-फलेक बीचको खाली ठाउँ (प्वाल) बढीमा कति सेमीभित्र हुनुपर्छ?",
      options: [
        { ja: "床材間のすき間は「3cm以下」、床材と構造物（壁面）とのすき間は「30cm以下（原則12cm以下が望ましい）」とする", id: "Celah antar papan lantai maksimal '3 cm ke bawah', dan celah antara tepi lantai perancah ke dinding maksimal '30 cm ke bawah'", ne: "फलेक र फलेक बीचको खाली ठाउँ '३ सेमीभन्दा कम' र खटको भुइँ र भित्ताबीचको खाली ठाउँ '३० सेमीभन्दा कम' हुनुपर्छ" },
        { ja: "床材の間は人がすり抜けて落ちるように50cm開けておく", id: "Diberi celah 50 cm agar orang bisa menerobos", ne: "मान्छे खस्ने गरी ५० सेमीको खुला ठाउँ छाड्ने" },
        { ja: "すき間は1メートル以上開けるのが法令基準である", id: "Standar hukum adalah celah 1 meter", ne: "१ मिटरको प्वाल छाड्ने कानुन छ" },
        { ja: "すき間には何も敷かず、鉄パイプ1本の上を歩かせる", id: "Cukup berjalan di atas satu pipa besi tanpa papan lantai", ne: "फलेक नओछ्याई एउटा पाइप माथि हिँड्न लगाउने" }
      ],
      answer: 0,
      expJa: "【安衛則第563条】作業床の床材間のすき間は「3cm以下」、幅は40cm以上とし、物体落下と足元の踏み外しを物理的に防ぎます。",
      expId: "Celah antar papan lantai perancah tidak boleh lebih dari 3 cm untuk mencegah alat kecil terjatuh menembus ke bawah.",
      expNe: "फलेकहरूको बीचमा ३ सेन्टिमिटरभन्दा ठूलो प्वाल हुनुहुँदैन, नत्र औजार खसेर तलको मान्छेलाई लाग्छ।"
    },
    {
      cat: "実技：足場の幅木（はばき）の高さ寸法（P.103）",
      q: "問44：足場の作業床の外側に設置が義務付けられている「幅木（トウボード）」の高さ寸法として正しいものはどれですか。",
      q_id: "Soal 44: Berapakah tinggi minimal papan pelindung tepi bawah (Habaki / Toeboard) perancah menurut standar K3 Jepang?",
      q_ne: "प्रश्न ४४: खटको भुइँको किनारमा औजार खस्न नदिन लगाइने तख्ता (हाबाकी / टो-बोर्ड) को उचाइ कम्तीमा कति सेमी हुनुपर्छ?",
      options: [
        { ja: "高さ「15cm以上（またはメッシュ幅木や隙間用部材で同等以上の性能）」", id: "Tinggi minimal '15 cm ke atas' dari permukaan lantai kerja", ne: "भुइँको सतहबाट कम्तीमा '१५ सेन्टिमिटर वा त्योभन्दा अग्लो'" },
        { ja: "高さ1mm", id: "Tinggi 1 mm", ne: "१ मिमी" },
        { ja: "高さ5メートル", id: "Tinggi 5 meter", ne: "५ मिटर" },
        { ja: "幅木の高さに決まりはないので輪ゴムを置いておく", id: "Cukup meletakkan karet gelang", ne: "कुनै नियम छैन" }
      ],
      answer: 0,
      expJa: "【安衛則第563条第1項第3号】物体の落下防止措置として、高さ「15cm以上」の幅木、メッシュ枠、またはこれと同等以上の設備を設けることが義務です[cite: 8]。",
      expId: "Tinggi papan habaki perancah minimal 15 cm agar baut atau palu yang tertendang tidak meluncur jatuh ke bawah.",
      expNe: "खुट्टाले ठोकिएर औजार वा नट-बोल्ट तल नखसोस् भन्नका लागि हाबाकी तख्ता कम्तीमा १५ सेमी अग्लो हुनैपर्छ।"
    },
    {
      cat: "実技：型枠Pコン（プラスチックコーン）の役割（P.104）",
      q: "問45：コンクリート壁型枠のセパレーターの両端に取り付けるプラスチック製のコーン（Pコン）の主な役割は何ですか。",
      q_id: "Soal 45: Apakah fungsi utama dari Plastic Cone (P-Con) yang dipasang di kedua ujung batang separator bekisting dinding?",
      q_ne: "प्रश्न ४५: भित्ताको फर्मा कस्दा सेपारेटर रडको दुवै छेउमा जोडिने प्लास्टिकको टोपी (पी-कन) को मुख्य काम के हो?",
      options: [
        { ja: "型枠合板との接触面を保護し、所定のかぶり厚さを確保するとともに、脱型後にPコンを取り外した後の穴をモルタル等で埋めやすくするため", id: "Mencegah besi separator menembus permukaan cor, menjamin selimut beton, dan membentuk lubang rapi agar mudah ditambal mortar semen setelah bekisting dibongkar", ne: "फर्माको काठलाई जोगाउने, कंक्रीटको कभर कायम राख्ने र फर्मा खोलेपछि पी-कन निकालेर प्वालमा सिमेन्ट मसला भर्न सजिलो बनाउने" },
        { ja: "型枠を燃えやすくするための着火剤として使うため", id: "Sebagai bahan bakar pemantik api", ne: "आगो सल्काउने इन्धनको रूपमा" },
        { ja: "コンクリートの中に埋めたまま取り出さない飾り物にするため", id: "Hiasan dinding yang dibiarkan tertanam selamanya", ne: "कंक्रीट भित्रै छोड्ने खेलौना" },
        { ja: "生コンクリートの匂いを甘いバニラの香りに変えるため", id: "Pengharum aroma adukan beton", ne: "कंक्रीटको गन्ध मीठो बनाउन" }
      ],
      answer: 0,
      expJa: "【テキスト P.104参照】Pコン（通常長さ25mm〜50mm）によりセパレーター端面をコンクリート表面から没入させ、サビの露出を防ぎ美しくモルタル穴埋め（Pコン埋め）ができます[cite: 9]。",
      expId: "P-Con menyisakan ceruk rapi di dinding beton setelah bekisting dibuka, sehingga besi separator tidak nongol keluar dan mudah diplamir semen kedap air.",
      expNe: "पी-कनले सेपारेटर रडलाई भित्रै राख्छ र बाहिर खिया लाग्न दिँदैन। फर्मा खोलेपछि यो प्लास्टिक निकालेर मसला भरिन्छ।"
    },
    {
      cat: "実技：型枠パイプサポートのピン差し込み（P.104）",
      q: "問46：パイプサポートの高さを調整して固定する際、スライドパイプの穴に差し込む「専用の挿入ピン」の正しい使用状態はどれですか。",
      q_id: "Soal 46: Bagaimanakah cara penguncian Pin Baja Asli (Insert Pin) pada pipa support bekisting yang BENAR?",
      q_ne: "प्रश्न ४६: फर्मा अड्याउने टेको (पाइप सपोर्ट) को उचाइ मिलाएर अड्काउँदा, प्वालमा छिराइने 'विशेष फलामे पिन' को सही अवस्था कुन हो?",
      options: [
        { ja: "メーカー指定の正規品の高強度専用ピンを奥まで完全に差し込み、チェーン等の外れ止めを確認して使用する", id: "Gunakan PIN ASLI pabrik berkekuatan tinggi, tancapkan tembus lurus sempurna, dan pastikan rantai pengaman terpasang", ne: "कम्पनीको तोकिएको बलियो आधिकारिक पिन प्वालबाट वारपार हुने गरी पूरै छिराउने र फुत्किन नदिने लक पक्का गर्ने" },
        { ja: "専用ピンを紛失したので、現場に落ちていた細い曲がった錆びた鉄筋端材を代わりに刺しておく", id: "Memakai potongan besi beton bekas yang bengkok dan berkarat karena pin aslinya hilang", ne: "पिन हरायो भन्दै भुइँमा भेटिएको पातलो बाङ्गो रडको टुक्रा छिराएर अड्याउने" },
        { ja: "木箸（割り箸）を穴に差し込んでおく", id: "Menancapkan sumpit makan kayu", ne: "काठको चम्चा वा सिन्का छिराउने" },
        { ja: "ピンは刺さずにガムテープを巻いて高さを支える", id: "Tanpa pin dan hanya melilitkan lakban", ne: "पिन नहाली टेप मात्र बेरेर राख्ने" }
      ],
      answer: 0,
      expJa: "【型枠支保工安全】鉄筋端材や細いボルトをピン代わりに代用すると、打設の荷重がかかった瞬間にピンがせん断破壊し、床全体が一瞬で大崩壊します。必ず専用ピンを使用します。",
      expId: "DILARANG KERAS mengganti pin support dengan potongan besi bekas! Potongan besi akan patah tergunting saat adukan beton basah masuk, meruntuhkan seluruh dak lantai.",
      expNe: "टेकोको आधिकारिक पिन हरायो भन्दै साधारण रड हाले ढलानको भारले त्यो रड भाँचिएर पूरै छत मान्छेमाथि खस्छ।"
    },
    {
      cat: "実技：スラブ配筋の乱れ是正（打設前）",
      q: "問47：コンクリートポンプ車で打設中、生コンの圧送ホースの激しい揺れや作業員の歩行によって、スラブ鉄筋のピッチが乱れて広がってしまいました。職長としての指示はどれですか。",
      q_id: "Soal 47: Saat pengecoran berlangsung, dorongan selang pompa beton dan injakan kaki pekerja membuat jarak susunan besi lantai bergeser renggang. Apakah perintah Shokucho?",
      q_ne: "प्रश्न ४७: ढलान गर्दा पम्पको पाइप हल्लिएर वा कामदारले कुल्चेर भुइँको रडको जालीहरू सरेर दूरी बिग्रियो। शोकुचोले तुरुन्त के निर्देशन दिनुपर्छ?",
      options: [
        { ja: "直ちにコンクリート打設を一時ストップさせ、鉄筋工に指示して鉄筋ピッチを正規の寸法に直し、結束線で固結してから打設を再開する", id: "Hentikan cor sejenak! Panggil tukang besi untuk mengembalikan jarak antar besi sesuai denah dan ikat kawat bendrat ulang, baru lanjut cor", ne: "तुरुन्त ढलान रोक्ने! रड मिस्त्रीलाई बोलाएर रडको नाप नक्सा अनुसार मिलाउन लगाउने र तारले बाँधेपछि मात्र फेरि ढलान थाल्ने" },
        { ja: "鉄筋の配置がいくら乱れていても、固まれば一緒なので無視してそのまま上から生コンを流し込む", id: "Abaikan saja dan timbun terus dengan beton karena tidak kelihatan setelah kering", ne: "जतिसुकै सरे पनि केही हुन्न भन्दै माथिबाट कंक्रीट खन्याइरहने" },
        { ja: "ズレた鉄筋をハッカーで切断してその場に捨てさせる", id: "Memotong besi yang geser dan membuangnya", ne: "सरेको रडलाई काटेर मिल्काइदिने" },
        { ja: "型枠を解体して今日の作業を中止して全員解散する", id: "Membongkar bekisting dan pulang", ne: "फर्मा भत्काएर घर जाने" }
      ],
      answer: 0,
      expJa: "【配筋の是正】鉄筋の間隔（ピッチ）が狂ったまま打設すると床の曲げ引張強度が不足し、後からスラブがたわんだり亀裂が入ります。打設中でも是正が最優先です。",
      expId: "Jangan timbun besi yang berantakan! Setel ulang jarak besi sesuai gambar teknik dan kencangkan kawat bendratnya sebelum semen dituang.",
      expNe: "रडको दूरी बिग्रिएकै अवस्थामा ढलान गरे पछि छत लच्किन्छ र चर्किन्छ। त्यसैले तुरुन्त रोकेर रड मिलाउनै पर्छ।"
    },
    {
      cat: "実技：鉄筋のサビ（赤サビと黒サビの判定）",
      q: "問48：現場に搬入された鉄筋の表面状態を検査する際、コンクリートとの付着強度に問題がなく「合格（使用可能）」と判定できるサビの状態はどれですか。",
      q_id: "Soal 48: Pada pemeriksaan kualitas besi beton di proyek, kondisi karat bagaimanakah yang dinilai 'LULUS / AMAN DIGUNAKAN' karena tidak merusak daya lekat beton?",
      q_ne: "प्रश्न ४८: कार्यस्थलमा आएको रड जाँच्दा, कंक्रीटसँग टाँसिने बलियोपनमा असर नगर्ने हुनाले 'पास (प्रयोग गर्न मिल्ने)' मानिने खियाको अवस्था कुन हो?",
      options: [
        { ja: "表面に薄い赤サビが均一に付着している程度で、ウエス等で拭くと取れ、鉄筋の断面減少（浮きサビ・サビ層の剥離）がない状態", id: "Karat merah tipis di permukaan yang tidak mengelupas (tidak ada pengurangan diameter besi dan tidak bersisik kerak tebal)", ne: "सतहमा पातलो रातो खिया मात्र लागेको, पुछ्दा सफा हुने र रडको मोटाइ नघटेको वा पत्र-पत्र परेर नउप्किएको अवस्था" },
        { ja: "サビが何層にも重なってボロボロとパイ生地のように分厚く剥がれ落ち、鉄筋が細くなっている状態", id: "Karat tebal mengelupas bersisik seperti kue biskuit dan diameter besi mengecil", ne: "खियाको पत्र-पत्र बनेर बिस्कुट जस्तै झर्ने र रड पातलो भइसकेको अवस्था" },
        { ja: "鉄筋の表面に工業用グリスや油がベッタリと大量に塗りたくられている状態", id: "Permukaan besi berlumuran minyak pelumas oli tebal", ne: "रडको वरिपरि धेरै चिल्लो ग्रिज वा मोबिल लतपतिएको अवस्था" },
        { ja: "鉄筋がサビて中央からポッキリと折れている状態", id: "Besi patah dua akibat keropos karat", ne: "खियाले गर्दा रड बीचबाटै भाँचिएको अवस्था" }
      ],
      answer: 0,
      expJa: "【鉄筋のサビ管理】健全な「初期の赤サビ」はコンクリートとの付着強度を高める効果があり使用可能です。ただし、層状に剥がれる浮きサビ（断面欠損）や油着は不合格です。",
      expId: "Karat merah tipis (light rust) aman digunakan dan justru merekat kuat dengan semen. Karat bersisik tebal (flaking rust) atau beroli wajib ditolak.",
      expNe: "पातलो रातो खियाले कंक्रीटलाई झन् समात्न मद्दत गर्छ, तर पत्र-पत्र परेर उप्किने बाक्लो खिया भएको वा तेल लागेको रड चलाउन पाइँदैन।"
    },
    {
      cat: "実技：ガス圧接のバーナー火炎調整（中性炎）",
      q: "問49：鉄筋のガス圧接において、端面が密着した後のふくらみ形成段階で、鉄筋を均等に加熱するためにバーナーで調整する「最適な炎」は何ですか。",
      q_id: "Soal 49: Jenis nyala api apakah yang digunakan pada tahap pembentukan tonjolan bulat las gas assetsu agar besi panas merata tanpa terbakar hangus?",
      q_ne: "प्रश्न ४९: रडको ग्यास वेल्डिङ (आस्सेचु) गर्दा टुप्पो जोडिएपछि गोलो डल्लो बनाउने बेलामा बर्नरबाट निकालिने 'सबैभन्दा उत्तम ज्वाला (आगो)' कुन हो?",
      options: [
        { ja: "中性炎（ちゅうせいえん / 酸素とアセチレンが完全燃焼した正常な白光炎）", id: "Chusei-en (Nyala Api Netral / Pembakaran Sempurna Oksigen & Asetilen Seimbang)", ne: "चुउसेइ-एन (न्युट्रल आगो / अक्सिजन र एसिटिलिन बराबर मिलेर बनेको सेतो सफा ज्वाला)" },
        { ja: "酸素過剰の酸化炎", id: "Nyala Api Oksidasi Berlebih", ne: "अक्सिजन धेरै भएको ज्वाला" },
        { ja: "マッチの火", id: "Api korek kayu", ne: "सलाईको आगो" },
        { ja: "石油ストーブの炎", id: "Api kompor minyak tanah", ne: "मट्टितेल हिटरको आगो" }
      ],
      answer: 0,
      expJa: "【テキスト P.157図参照】ガス圧接のふくらみ成形工程では、完全燃焼させた「中性炎」を用いて鉄筋の全周を均等に加熱し、所定のふくらみ径（1.4d以上）に仕上げます。",
      expId: "Nyala api netral (chusei-en) menghasilkan suhu optimal 1200°C untuk melunakkan besi baja hingga membentuk tonjolan bulat tanpa merusak karbon baja.",
      expNe: "डल्लो बनाउँदा अक्सिजन र ग्यास बराबर मिलाइएको 'न्युट्रल ज्वाला' ले रडलाई चारैतिर बराबर तताउनुपर्छ।"
    },
    {
      cat: "実技：木造建て方の仮筋交い（P.163）",
      q: "問50：木造住宅の建て方において、柱や梁を組み上げた直後、建物の垂直を下げ振り等で確認しながら固定し、本筋交いや構造用合板を張るまでの間、骨組みの倒壊を防ぐため斜めに打ち付ける仮設部材は何ですか。",
      q_id: "Soal 50: Batang kayu diagonal sementara apakah yang dipaku menyilang saat mendirikan rangka kayu rumah Jepang untuk menahan tiang tetap tegak lurus sebelum dinding permanen dipasang?",
      q_ne: "प्रश्न ५०: काठको घर ठड्याउँदा पिलर-बिम जोड्ने बित्तिकै घर नढलोस् भनेर ९० डिग्री सिधा पारेपछि अस्थायी रूपमा छड्के ठोकिने काठलाई के भनिन्छ?",
      options: [
        { ja: "仮筋交い（かりすじかい / 建入れ直し仮固定材）", id: "Kari-sujikai (Bracing Kayu Diagonal Sementara)", ne: "कारी-सुजिकाई (अस्थायी छड्के काठ / अस्थायी ब्रेसिङ)" },
        { ja: "土台", id: "Tsuchidai", ne: "दोदाइ" },
        { ja: "鴨居（かもい）", id: "Kamoi", ne: "कामोइ" },
        { ja: "敷居（しきい）", id: "Shikii", ne: "शिकी" }
      ],
      answer: 0,
      expJa: "【テキスト P.163参照】柱を建てた段階では骨組みに水平抵抗力がありません。建入れ直しで垂直を出した後、直ちに「仮筋交い」を打ち付けて固め、風倒壊を防ぎます。",
      expId: "Kari-sujikai memegang tiang-tiang kayu agar tidak miring tertiup angin saat tukang merakit atap lantai atas.",
      expNe: "घरको फ्रेम जोड्ने बित्तिकै सिधा पारेर 'कारी-सुजिकाई' ठोकिहाल्नुपर्छ, नत्र हावाले पूरै घर लडाइदिन्छ।"
    },
    {
      cat: "実技：ディスクグラインダーの保護カバー（P.130）",
      q: "問51：ディスクグラインダーを使用する際、万一といしが破裂した際に破片が作業員の顔や手を直撃しないよう、常に覆っていなければならない角度範囲はどれですか。",
      q_id: "Soal 51: Bagaimanakah posisi penyesuaian penutup pelindung (wheel guard) gerinda tangan yang BENAR untuk melindungi tubuh operator?",
      q_ne: "प्रश्न ५१: ग्राइन्डर चलाउँदा ढुङ्गा फुटेर शरीरमा नलागोस् भन्नाका लागि सुरक्षा कभरलाई कुन भाग छेकिने गरी मिलाउनुपर्छ?",
      options: [
        { ja: "といしの「半分（180度以上）」を覆い、かつカバーの開口部が作業者の身体・顔とは反対方向（前方）を向くように調整して取り付ける", id: "Menutupi minimal 180 derajat piringan, dan sisi bukaan cover diarahkan MENJAUHI tubuh/wajah operator", ne: "ढुङ्गाको कम्तीमा आधा (१८० डिग्रीभन्दा बढी) भाग ढाकिएको हुनुपर्ने, र खुला भाग कामदारको शरीर र मुखभन्दा 'पर' फर्काएर कस्ने" },
        { ja: "カバーの開口部を自分の顔の真正面に向けて取り付ける", id: "Mengarahkan bukaan cover tepat lurus ke mata/wajah sendiri", ne: "कभरको खुला भाग आफ्नै मुखतिर फर्काएर कस्ने" },
        { ja: "といし全体を完全にビニール袋で密封して見えなくする", id: "Membungkus seluruh gerinda dengan kantong kresek", ne: "प्लास्टिकको झोलाले पूरै मेसिन बाँध्ने" },
        { ja: "保護カバーは邪魔なのでグラインダーから外してゴミ箱に捨てる", id: "Melepas cover pengaman dan membuangnya", ne: "कभर फुकालेर फोहोरमा फाल्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.130参照】グラインダーの安全カバーは「作業者側に破片が飛ばない向き」に固定します。カバーなしでの使用は即死災害の主因です。",
      expId: "Wheel cover gerinda wajib diposisikan menghalangi serpihan batu ke arah dada/muka operator. Jangan sekali-kali mengoperasikan gerinda telanjang tanpa cover!",
      expNe: "ग्राइन्डरको सुरक्षा कभरको बन्द भएको भाग आफ्ना मुखतिर पारेर कस्नुपर्छ ताकि ढुङ्गा फुट्दा आफ्नै शरीरमा नलागोस्।"
    },
    {
      cat: "実技：スレート屋根工事の踏み抜き防止（P.181）",
      q: "問52：工場の屋根などで古いスレート板の上を歩行・作業する際、スレートを踏み抜いて階下へ墜落する死亡事故を防ぐための安全器具は何ですか。",
      q_id: "Soal 52: Papan pijakan apakah yang WAJIB dipasang di atas atap asbes gelombang (slate) agar pekerja tidak menginjak jebol dan jatuh menembus atap?",
      q_ne: "प्रश्न ५२: फ्याक्ट्रीको पुरानो स्लेट छानामा काम गर्दा छाना फुटेर तल खस्न नदिन छानामाथि ओछ्याइने सुरक्षा काठको फलेकलाई के भनिन्छ?",
      options: [
        { ja: "歩み板（あゆみいた / 足場板）を2枚以上渡し、踏み抜き防止ネットをスレート下に展張する", id: "Papan Titian (Ayumi-ita / Papan Perancah) selebar minimal 30 cm, serta pasang jaring pengaman di bawah atap", ne: "हिँड्ने काठको फलेक (आयुमी-इता) ओछ्याएर मात्र टेक्ने, र छाना मुनि सुरक्षा जाली टाँग्ने" },
        { ja: "スレートの薄い波の真ん中をつま先立ちで跳ねて歩く", id: "Berjingkat melompat di atas lekukan asbes tipis", ne: "स्लेटको बीचमा औंलाले टेकेर उफ्रिँदै हिँड्ने" },
        { ja: "フルハーネスを外し、両手に荷物を抱えて走る", id: "Melepas harness dan berlari kencang membawa barang", ne: "हार्नेस फुकालेर भारी बोकेर दौडिने" },
        { ja: "雨が降ってスレートが苔でヌルヌル滑る日にダッシュする", id: "Berlari kencang saat asbes basah berlumut licin kena hujan", ne: "लेउ लागेर चिप्लो भएको बेला कुद्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.181参照】スレート屋根の踏み抜き墜落は屋根工事の死因第1位です[cite: 11]。幅30cm以上の歩み板を渡し、親綱にフルハーネスを常時掛けて歩行します[cite: 11]。",
      expId: "Atap seng/asbes gelombang tua sangat rapuh. WAJIB pasang papan titian (ayumi-ita) dan jaring penahan di bawahnya.",
      expNe: "पुरानो स्लेट छाना मान्छे टेक्नासाथ फुट्छ। त्यसैले माथि फलेक (आयुमी-इता) ओछ्याएर र सेफ्टी बेल्ट लगाएर मात्र हिँड्नुपर्छ।"
    },
    {
      cat: "実技：高所開口部の塞ぎ（コンパネ蓋の釘止め）",
      q: "問53：床スラブの床穴（開口部）を厚い合板（コンパネ等）で塞ぐ際、歩行者が蓋ごとズレて穴に転落するのを防ぐ正しい固定方法はどれですか。",
      q_id: "Soal 53: Bagaimanakah cara penguncian penutup triplek pada lubang bukaan lantai cor (kaikoubu) yang BENAR?",
      q_ne: "प्रश्न ५३: भुइँको खुला प्वालमाथि काठको बाक्लो फलेक (प्लाइउड) हालेर बन्द गर्दा, फलेक चिप्लिएर मान्छे प्वालमा नखसोस् भन्नका लागि कसरी कस्नुपर्छ?",
      options: [
        { ja: "合板の裏面に穴の内寸に合わせた角材（ズレ止めサン）を打ち付け、床面に釘やアンカーで強固に固定し、赤ペンキ等で「開口部・危険・乗るな」と明記する", id: "Paku balok penahan geser di balik triplek, paku paten ke lantai agar tidak bergeser, dan tulis besar 'AWAS LUBANG - JANGAN DIINJAK'", ne: "फलेकको मुनि नहल्लिने काठको टुक्रा ठोक्ने, भुइँसँग किल्ला ठोकेर बलियो बनाउने र रातो अक्षरले 'खतरा - खुला प्वाल' लेख्ने" },
        { ja: "穴の上に薄い合板を載せるだけで釘は打たず放置する", id: "Hanya menaruh triplek di atas lubang tanpa dipaku sama sekali", ne: "प्वाल माथि फलेक त्यसै राख्ने र किल्ला नठोक्ने" },
        { ja: "穴の存在を隠すために上にゴミ袋を山積みにする", id: "Menimbun kantong sampah di atas lubang agar tidak kelihatan", ne: "प्वाल लुकाउन माथि फोहोरको थुप्रो राख्ने" },
        { ja: "合板の中央に大きな穴を開けて通り抜けられるようにする", id: "Melubangi tengah triplek agar bisa dilewati", ne: "फलेकको बीचमा अझ ठूलो प्वाल पार्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.182参照】開口部の蓋が単に置いてあるだけだと、人が端を踏んだ瞬間にシーソーのように蓋が外れて転落死します[cite: 12]。裏桟固定・釘止め・危険表示が必須です[cite: 12]。",
      expId: "Penutup lubang tanpa paku dan balok ganjal bawah akan terbalik seperti jungkat-jungkit saat diinjak, menelan pekerja jatuh ke bawah.",
      expNe: "किल्ला नठोकी राखेको फलेकको छेउमा टेक्दा फलेक पल्टिएर मान्छे खाल्डोमा खस्छ। त्यसैले मुनि काठ ठोकेर किल्ला कस्नै पर्छ।"
    },
    {
      cat: "実技：塗装工事の養生テープ（マスカー）の貼り方",
      q: "問54：外壁やサッシの塗装工事において、塗料の飛散を防ぐビニール付き養生テープ（マスカー）を貼る際、風でバタついて剥がれないようにする正しい手順はどれですか。",
      q_id: "Soal 54: Manakah teknik menempel plastik pelindung berperekat (masker) yang BENAR agar tidak sobek lepas tertiup angin?",
      q_ne: "प्रश्न ५४: रङ लगाउँदा झ्यालमा छिट्टा नपरोस् भनेर प्लास्टिक टाँसिएको टेप (मास्कार) लगाउँदा, हावाले च्यातेर नउडाओस् भनी टाँस्ने सही तरिका कुन हो?",
      options: [
        { ja: "被着面のホコリや水分を拭き取り、テープを指でしっかり圧着して貼り、ビニールを広げた後は端部や中央をガムテープ等で適宜躯体に留め付ける", id: "Bersihkan debu/air di kusen, tekan kuat lem lakban dengan jari, buka plastik pelindung, lalu kuncikan ujung plastik ke dinding dengan selotip", ne: "झ्यालको धुलो र पानी पुछ्ने, टेपलाई औंलाले थिचेर टाँस्ने, प्लास्टिक खोलेपछि त्यसको छेउलाई पनि भित्तामा टेपले टाँसेर नहल्लिने बनाउने" },
        { ja: "濡れた泥の上に泥ごとテープを貼り付ける", id: "Menempelkan selotip di atas lumpur basah", ne: "हिलो माथि नै टेप टाँस्ने" },
        { ja: "ビニールを広げた後、風になびくままバタバタ放置する", id: "Membiarkan plastik berkibar-kibar liar ditiup angin", ne: "प्लास्टिक हावामा हल्लिन छाडिदिने" },
        { ja: "マスカーの上に火のついたタバコを押し付ける", id: "Menempelkan puntung rokok menyala ke plastik masker", ne: "प्लास्टिक माथि चुरोटको ठुटोले डढाउने" }
      ],
      answer: 0,
      expJa: "【塗装養生の手順】マスカーテープは下地のホコリや水分を拭き取ってから圧着します。ビニールが風でバタつくと近隣や塗りたての壁に張り付いて大事故になります。",
      expId: "Bersihkan kusen dari debu, tekan perekat masker, dan ikat ujung plastik agar tidak berkibar liar merusak cat basah.",
      expNe: "धुलो पुछेर टेप थिचेर टाँस्ने र हावाले नउडाओस् भनी प्लास्टिकको टुप्पोलाई पनि टेपले भित्तामा कस्नुपर्छ।"
    },
    {
      cat: "実技：熱中症発症時の意識確認（JCS判定）",
      q: "問55：熱中症の疑いで倒れた作業員に意識があるか確認するため、職長が最初に声をかける「適切な呼びかけ方法」はどれですか。",
      q_id: "Soal 55: Bagaimanakah cara pemanggilan suara yang BENAR untuk memeriksa tingkat kesadaran korban heatstroke?",
      q_ne: "प्रश्न ५५: गर्मीले ढलेको कामदारको होस छ कि छैन भनेर जाँच गर्न शोकुचोले उसलाई बोलाउने सबैभन्दा सही तरिका कुन हो?",
      options: [
        { ja: "肩を軽く叩きながら耳元で「〇〇さん、大丈夫ですか！私の声が聞こえますか！」と大声で明確に呼びかけ、目を開けるか返答があるか確認する", id: "Tepuk lembut pundaknya sambil memanggil keras di dekat telinganya: 'Pak/Mas...! Anda dengar suara saya?!', lalu amati respon mata dan bicaranya", ne: "काँधमा बिस्तारै थप्थपाउँदै कान नजिक ठूलो स्वरले 'फलानो जी, ठीक हुनुहुन्छ! मेरो आवाज सुन्नुभयो!' भनी बोलाउने र आँखा खोलेको वा बोलेको हेर्ने" },
        { ja: "無言で遠くから1時間じっと見つめる", id: "Menatap dalam diam dari jarak 10 meter selama 1 jam", ne: "टाढाबाट चुपचाप १ घण्टासम्म हेरिरहने" },
        { ja: "倒れている作業員の顔に冷水をバケツで勢いよくぶっかける", id: "Menyiram seember air es ke wajah korban pingsan", ne: "बेहोस मान्छेको मुखमा बाल्टिनको चिसो पानी झ्वाम्म खन्याइदिने" },
        { ja: "起こすのを諦めてその場に放置して立ち去る", id: "Menyerah membangunkannya lalu ditinggal pergi", ne: "होस खुलाउन छोडेर त्यत्तिकै हिँड्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.190参照】意識確認は「肩を叩きながら大声で呼びかける」が救急医学の鉄則です[cite: 20]。呼びかけに答えず目も開けない場合は重症度Ⅲ度であり、即119番です。",
      expId: "Cek respon kesadaran: Tepuk bahu dan panggil nama secara tegas. Jika tidak merespon atau melantur, segera telepon 119 ambulans!",
      expNe: "काँधमा थप्थपाएर ठूलो स्वरले बोलाउने। बोलाउँदा पनि आँखा नखोले वा नबोले यो ज्यान जाने अवस्था हो र तुरुन्त ११९ मा फोन गर्नुपर्छ।"
    },
    {
      cat: "実技：高所作業での工具落下防止コード（P.183）",
      q: "問56：足場上や梁の上でラチェットレンチやインパクトドライバーを使用する際、工具が手から滑り落ちて階下の作業員に直撃するのを防ぐ安全措置は何ですか。",
      q_id: "Soal 56: Alat pengaman apakah yang WAJIB dipasang menghubungkan alat kerja tangan (kunci pas/bor) ke sabuk pinggang saat bekerja di ketinggian?",
      q_ne: "प्रश्न ५६: अग्लो खटमा काम गर्दा हातबाट रेन्च वा ड्रिल मेसिन चिप्लिएर तलको साथीको टाउकोमा नखसोस् भनेर औजारमा बाँधिने सुरक्षा डोरी कुन हो?",
      options: [
        { ja: "工具落下防止コード（セーフティコード / カールコード）を工具と作業ベルトに確実に連結する", id: "Tali Pengaman Perkakas Anti-Jatuh (Safety Lanyard Tool / Curl Cord) yang mengunci alat ke sabuk pinggang", ne: "औजार खस्न नदिने स्प्रिङ डोरी (सेफ्टी कर्ड / टुल ल्यान्यार्ड) औजार र आफ्नो कम्मरको बेल्टमा बलियोसँग जोड्ने" },
        { ja: "工具にサラダ油を塗って滑りやすくしておく", id: "Melumuri perkakas dengan minyak goreng agar licin", ne: "औजारमा तेल दलेर चिप्लो बनाउने" },
        { ja: "工具を足場板の上に並べて足で蹴飛ばしながら使う", id: "Menaruh alat di lantai dan menendangnya dengan kaki", ne: "औजार भुइँमा राखेर खुट्टाले लात हान्दै चलाउने" },
        { ja: "落下防止コードは邪魔なのでハサミで切り落とす", id: "Memotong kabel pengaman alat dengan gunting", ne: "डोरीलाई कैंचीले काटेर फालिदिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.183参照】高所から落下したボルト1個、工具1個はヘルメットを突き破って直撃即死災害を引き起こします[cite: 13]。手工具への落下防止コード接続は義務です[cite: 13]。",
      expId: "Baut atau kunci pas yang jatuh dari lantai 5 memiliki daya hancur peluru. Wajib pasang tali pengaman (tool lanyard) di semua perkakas.",
      expNe: "अग्लो ठाउँबाट खसेको सानो रेन्चले पनि तलको मान्छेको हेल्मेट फुटाएर ज्यान लिन्छ। त्यसैले औजारमा सुरक्षा डोरी बाँध्नै पर्छ।"
    },
    {
      cat: "実技：脚立作業時の安全靴と昇降方向",
      q: "問57：脚立を昇降する際、作業員が向くべき身体の向きとして正しいものはどれですか。",
      q_id: "Soal 57: Ke arah manakah tubuh pekerja WAJIB menghadap saat menaiki atau menuruni tangga lipat (kyatatsu)?",
      q_ne: "प्रश्न ५७: भर्याङ (क्याताचु) चढ्दा वा ओर्लँदा शरीरको अनुहार कुन दिशा फर्काएर हिँड्नुपर्छ?",
      options: [
        { ja: "昇る時も降りる時も、常に「脚立の踏み面（ステップ）」に身体の正面を向けて昇降する", id: "Selalu HADAP DEPAN ke arah anak tangga, baik saat naik MAUPUN saat turun (jangan membelakangi tangga)", ne: "चढ्दा र ओर्लँदा दुवै समयमा सधैं आफ्नो शरीरको अनुहार 'भर्याङको खुड्किलातिर' फर्काएर हिँड्ने" },
        { ja: "降りる時は脚立に背中を向けて階段のように前向きに駆け下りる", id: "Menuruni tangga dengan membelakangi tangga seperti lari di tangga rumah", ne: "झर्ने बेलामा भर्याङतिर पिठ्युँ फर्काएर अगाडितिर दौडिएर झर्ने" },
        { ja: "横向きにカニ歩きで飛び跳ねながら降りる", id: "Melompat miring menyamping seperti kepiting", ne: "गँगटो जस्तै छड्के परेर उफ्रिँदै झर्ने" },
        { ja: "後ろ向きに目をつぶって飛び降りる", id: "Melompat terjun bebas ke belakang dengan mata tertutup", ne: "आँखा चिम्लेर पछाडितिर हामफाल्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.184参照】脚立やはしごから降りる際に背を向けて降りようとすると、踏み外して確実に後方転倒・墜落します[cite: 14]。必ず「ステップに対面」して昇降します[cite: 14]。",
      expId: "Selalu menghadap ke anak tangga saat naik maupun turun. Menuruni tangga lipat dengan membelakangi tangga adalah penyebab tersering patah tulang.",
      expNe: "भर्याङबाट झर्दा पिठ्युँ फर्काएर झरे खुट्टा चिप्लिएर पछाडि बजारिन्छ। सधैं भर्याङतिरै अनुहार फर्काएर झर्नुपर्छ।"
    },
    {
      cat: "実技：新規入場者教育のアンケート確認（安全履歴）",
      q: "問58：新規入場者アンケートにおいて、新しく現場に入ってきた作業員が「高所恐怖症、持病のてんかん、心臓疾患」を有していることが判明しました。職長としての適切な配慮はどれですか。",
      q_id: "Soal 58: Formulir pekerja baru mencatat bahwa pekerja memiliki riwayat fobia ketinggian parah atau penyakit jantung. Apakah tindakan bijak Shokucho?",
      q_ne: "प्रश्न ५८: नयाँ कामदारको फारम हेर्दा उसलाई 'अग्लो ठाउँमा डर लाग्ने (फोबिया), मुटुको रोग वा छारे रोग' भएको थाहा भयो। शोकुचोले कस्तो उचित निर्णय लिनुपर्छ?",
      options: [
        { ja: "生命の安全を最優先し、本人の同意を得て足場や屋根などの高所作業から外し、地上での材料加工や手元作業などの安全な持ち場に配置する", id: "Pindahkan ke tugas aman di darat (seperti perakitan bahan atau logistik tanah) dan DILARANG menugaskannya di ketinggian atap/perancah", ne: "साथीको ज्यान जोगाउन उसलाई सम्झाई-बुझाई अग्लो ठाउँ वा छानाको कामबाट हटाउने, र भुइँमा बसेर सामान बनाउने सुरक्षित काममा खटाउने" },
        { ja: "「慣れれば治る」と言って、最も高い足場の最上階に一人で登らせる", id: "Memaksa memanjat lantai tertinggi sendirian agar terbiasa", ne: "बानी परेपछि ठीक हुन्छ भन्दै सबैभन्दा अग्लो ठाउँमा एक्लै चढाउने" },
        { ja: "持病を全員の前で大声でからかって笑い者にする", id: "Mengejek penyakitnya di depan umum", ne: "सबै साथीहरूको अगाडि उसको रोगको मजाक उडाउने" },
        { ja: "現場から即座に叩き出して二度と建設業界で働けないようにする", id: "Mengusirnya kasar dari dunia konstruksi", ne: "गाली गरेर कार्यस्थलबाट लखेट्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.188参照】新規入場者アンケートは適正配置のために行います[cite: 18]。持病や身体的特性を把握し、墜落等のリスクがある危険作業から外して適材適所で命を守ります[cite: 18]。",
      expId: "Data medis pekerja baru dipakai untuk penempatan yang tepat. Pekerja dengan riwayat pusing/jantung haram didekatkan ke tepi jurang ketinggian.",
      expNe: "फारम भर्नुको उद्देश्य नै बिरामी साथीलाई जोखिमबाट बचाउनु हो। मुटुको रोगीलाई अग्लोमा नपठाई भुइँको सुरक्षित काम दिनुपर्छ।"
    },
    {
      cat: "実技：WBGT値に応じた作業管理（P.190）",
      q: "問59：現場のWBGT計測器が「31℃以上（危険レベル）」を示した際、職長が作業班に対して下すべき指示として最も適切なものはどれですか。",
      q_id: "Soal 59: Angka WBGT di lapangan menunjukkan '31°C ke atas (Level Bahaya Kritis / Danger)'. Instruksi apakah yang WAJIB dikeluarkan Shokucho?",
      q_ne: "प्रश्न ५९: कार्यस्थलको WBGT गर्मी नाप्ने मिटरले '३१ डिग्रीभन्दा माथि (खतराको उच्च स्तर)' देखायो। शोकुचोले टोलीलाई दिनुपर्ने सबैभन्दा सही निर्देशन कुन हो?",
      options: [
        { ja: "原則として重労働の作業を中止または大幅に軽減し、作業時間を30分以内ごとに区切って冷房休憩所での休息と水分・塩分補給を強制する", id: "Hentikan kerja fisik berat, batasi kerja maksimal 30 menit diselingi istirahat wajib di ruang AC, serta wajibkan minum elektrolit", ne: "धेरै भारी शारीरिक काम रोक्ने, काम गर्ने समयलाई बढीमा ३० मिनेटमा सीमित गरी अनिवार्य एसी कोठामा लगेर आराम र जीवनजल खुवाउने" },
        { ja: "危険レベルになったので、全員長袖の上からさらにセーターを着て作業する", id: "Menyuruh pekerja memakai sweater tebal", ne: "स्वीटर थपेर काम गर्न लगाउने" },
        { ja: "WBGTの数値は見なかったことにして、計測器の電池を抜く", id: "Mencabut baterai alat ukur WBGT agar tidak bunyi", ne: "मिटरको ब्याट्री थुतेर फालिदिने" },
        { ja: "現場の水道をすべて止めて水を飲めないようにする", id: "Mematikan semua keran air agar pekerja tidak bisa minum", ne: "पानीको धारा बन्द गरेर पानी पिउन नदिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.190〜191参照】WBGT 31℃以上は「高齢者等においては安静状態でも発生する危険性」がある最高危険区分です[cite: 20, 21]。激しい作業は中止し休憩を頻繁に入れます[cite: 21]。",
      expId: "WBGT >= 31°C adalah zona merah maut. Batasi kerja fisik berat dan wajibkan istirahat berkala di ruang pendingin ber-AC.",
      expNe: "WBGT ३१ डिग्री पुग्नु अति खतरनाक अवस्था हो। धेरै गह्रौं काम रोक्ने र आधा-आधा घण्टामा चिसो कोठामा आराम गराउनै पर्छ।"
    },
    {
      cat: "実技：クレーン作業の「地切り（じぎり）」判定",
      q: "問60：クレーンで鉄筋束や敷鉄板を吊り上げる際、玉掛けワイヤーの緩みや荷の重心のズレによる荷崩れ事故を防ぐため、最初に行う動作は何ですか。",
      q_id: "Soal 60: Prosedur apakah yang WAJIB dilakukan operator crane dengan menghentikan angkatan sejenak saat beban baru terangkat tipis (sekitar 20-30 cm) dari tanah?",
      q_ne: "प्रश्न ६०: क्रेनले गह्रौं सामान उचाल्दा सामान पल्टिन वा तार फुत्किन नदिन, सामान भुइँबाट २०-३० सेमी माथि उठ्ने बित्तिकै एकपटक रोकेर गरिने जाँचलाई के भनिन्छ?",
      options: [
        { ja: "地切り（じぎり / 荷が地面をわずかに離れた高さで一旦停止し、玉掛けの緩み・偏心・フックの外れ止めを確認する動作）", id: "Jigiri (Menghentikan angkatan saat beban terangkat 20-30 cm dari tanah untuk cek keseimbangan beban dan sling kawat)", ne: "जिगिरी (सामान भुइँबाट थोरै माथि उठ्ने बित्तिकै एकछिन रोकेर सन्तुलन, तारको कसाइ र हुकको लक जाँच्ने काम)" },
        { ja: "全速力で一気に屋上まで巻き上げる動作", id: "Langsung menarik kencang ke atap tanpa berhenti", ne: "नरोकी एकैचोटि चर्को गतिमा माथि तान्ने" },
        { ja: "吊り荷の上に作業員が乗って一緒に飛び上がる動作", id: "Pekerja naik di atas barang dan ikut terbang bersama", ne: "सामान माथि मान्छे चढेर सँगै माथि उड्ने" },
        { ja: "クレーンのエンジンを止めて荷をぶら下げたまま帰宅する動作", id: "Mematikan mesin dan membiarkan barang tergantung lalu pulang", ne: "सामान हावामै झुन्ड्याएर इन्जिन बन्द गरी घर जाने" }
      ],
      answer: 0,
      expJa: "【玉掛けの鉄則：地切り】荷が浮いた直後（20〜30cm）に「一旦停止」し、荷の傾き、ワイヤーの掛かり、ブレーキの効きを指差し呼称で確認してから本格巻上げに移ります。",
      expId: "Jigiri adalah titik henti krusial saat beban baru terangkat sejengkal tanah untuk memastikan ikatan kawat tidak selip sebelum terbang tinggi.",
      expNe: "सामान भुइँबाट उठ्ने बित्तिकै एकपटक रोकेर सन्तुलन हेर्ने कामलाई 'जिगिरी' भनिन्छ। यसो गर्दा तार फुत्किने खतरा शून्य हुन्छ।"
    },
    {
      cat: "実技：熱中症の回復後の帰宅判断（単独帰宅の禁止）",
      q: "問61：現場で熱中症の初期症状で倒れ、日陰で休んで「もう大丈夫です」と自分で歩けるまで回復した作業員に対する職長の判断として正しいものはどれですか。",
      q_id: "Soal 61: Pekerja yang tadi ambruk kena heatstroke sudah merasa enakan dan bilang 'saya sudah sembuh'. Bagaimanakah tindakan pemulangan yang BENAR?",
      q_ne: "प्रश्न ६१: गर्मीले ढलेको साथी चिसोमा आराम गरेपछि 'मलाई ठीक भयो, म एक्लै घर जान्छु' भन्न थाल्यो। शोकुचोले कस्तो सही निर्णय लिनुपर्छ?",
      options: [
        { ja: "熱中症は帰宅途中に急変・再発して倒れる危険があるため、絶対に一人で歩いて帰らせず、病院を受診させるか家族・同僚が付き添って車で送る", id: "Gejala heatstroke sering kambuh mendadak di jalan! DILARANG menyuruh pulang sendirian; wajib diantar rekan/keluarga dengan mobil", ne: "घर जाँदाजाँदै बाटोमै फेरि बेहोस भएर लड्न सक्ने खतरा हुने भएकाले, झुक्केर पनि एक्लै हिँडेर घर जान नदिने; साथी वा परिवारले गाडीमा सँगै राखेर अस्पताल लैजाने वा घर पुर्याउने" },
        { ja: "「治ったなら今すぐ高所作業に戻って残業しろ」と現場に復帰させる", id: "Menyuruhnya langsung naik kembali ke atap untuk lembur", ne: "ठीक भयो भने तुरुन्तै अग्लो ठाउँमा गएर ओभरटाइम गर भन्ने" },
        { ja: "真夏の炎天下の中を歩いて10km先の自宅まで一人で歩かせる", id: "Menyuruh jalan kaki pulang 10 km di bawah terik matahari", ne: "घाममै १० किलोमिटर हिँडेर एक्लै घर जा भन्ने" },
        { ja: "作業服をすべて脱がせて現場の外へ追い出す", id: "Mengusirnya keluar proyek", ne: "कार्यस्थलबाट लखेट्ने" }
      ],
      answer: 0,
      expJa: "【熱中症の帰宅管理】熱中症は一時的に回復したように見えても、脱水や電解質異常により帰宅途中の路上や駅で急変・死亡する事例が多発しています。単独帰宅は厳禁です。",
      expId: "Korban heatstroke DILARANG pulang sendirian! Kondisi fisik bisa drop mendadak di jalan. Wajib dikawal dengan kendaraan ber-AC.",
      expNe: "गर्मीले बिरामी परेको मान्छे बाटोमा फेरि ढल्न सक्छ। त्यसैले उसलाई कहिल्यै एक्लै जान नदिई साथीले गाडीमा सँगै लगेर घर पुर्याउनुपर्छ।"
    },
    {
      cat: "実技：高所作業での安全帯ロープの擦れ防止",
      q: "問62：フルハーネスのランヤード（命綱ロープ）を鉄骨のH形鋼や足場の角に掛けて作業する際、ロープが切断するのを防ぐ安全措置はどれですか。",
      q_id: "Soal 62: Tindakan apakah yang WAJIB dipasang saat tali lanyard harness bersentuhan dengan sudut tajam balok baja (H-Beam)?",
      q_ne: "प्रश्न ६२: सेफ्टी हार्नेसको डोरी फलामको धारिलो कुना वा बिममा घोटिन सक्ने ठाउँमा काम गर्दा डोरी नकाटियोस् भनेर के गर्नुपर्छ?",
      options: [
        { ja: "鉄骨の鋭利な角（エッジ）に当て布（ゴムパットやホース等のコーナー養生具）を巻き、ロープが直接擦れて破断しないように防護する", id: "Pasang bantalan pelindung sudut tajam (karet tebal/selang pelindung sudut) agar tali lanyard tidak teriris putus oleh tepi baja", ne: "फलामको धारिलो कुनामा बाक्लो रबर, होस पाइप वा कपडा बेरेर (कर्नर प्याड हालेर) डोरी घोटिएर चुँडिनबाट जोगाउने" },
        { ja: "鋭利な鉄骨の角でロープをゴシゴシ擦りながら作業する", id: "Sengaja menggesekkan tali ke sudut tajam baja", ne: "धारिलो कुनामा डोरी घोट्दै काम गर्ने" },
        { ja: "ロープが切れても気にせずそのまま作業を続ける", id: "Membiarkan tali teriris tanpa peduli", ne: "डोरी काटिए पनि वास्ता नगर्ने" },
        { ja: "ランヤードの代わりに細いビニール紐を結んでおく", id: "Mengganti tali harness dengan tali rafia plastik", ne: "प्लास्टिकको सुतली बाँध्ने" }
      ],
      answer: 0,
      expJa: "【エッジによる破断防止】万一の墜落時、H形鋼の鋭利なエッジにランヤードが強く接触するとナイフで切られたように一瞬で切断します。必ず当て布（エッジガード）を施します。",
      expId: "Sudut tajam besi H-Beam bisa memotong tali harness seperti pisau saat ada hentakan jatuh. Selalu pasang bantalan pelindung sudut (edge guard).",
      expNe: "फलामको धारिलो कुनामा सेफ्टी डोरी पर्यो भने खस्ने बित्तिकै चक्कुले काटे जस्तै डोरी चुँडिन्छ। त्यसैले रबरको कभर हाल्नै पर्छ।"
    },
    {
      cat: "実技：足場解体時の「関係者以外立入禁止」",
      q: "問63：建物の外壁足場を解体する際、地上を歩く作業員や一般通行人に解体部材が直撃する事故を防ぐための地上部の安全措置はどれですか。",
      q_id: "Soal 63: Tindakan pengamanan tanah apakah yang WAJIB dipasang di bawah area saat pembongkaran perancah gedung sedang berlangsung?",
      q_ne: "प्रश्न ६३: घरको खट भत्काउँदा माथिबाट सामान खसेर बाटो हिँड्ने मान्छेलाई नलागोस् भन्नाका लागि भुइँमा गरिने अनिवार्य सुरक्षा व्यवस्था के हो?",
      options: [
        { ja: "解体エリアの周囲をバリケードやトラロープで区画して「立入禁止」標識を掲示し、専任の監視員（立入監視人）を常時配置する", id: "Pasang barikade pagar pembatas bertuliskan 'DILARANG MASUK', serta tempatkan petugas pengawas darat khusus yang berjaga penuh waktu", ne: "भत्काउने ठाउँ वरिपरि बार र डोरी लगाएर 'प्रवेश निषेध' को बोर्ड टाँस्ने, र भुइँमा पूर्ण समय बस्ने गरी कडा सुरक्षा गार्ड खटाउने" },
        { ja: "通行人が通れるようにバリケードは一切置かない", id: "Tidak memasang pagar agar orang bebas melintas", ne: "मान्छे हिँड्न सजिलो होस् भनेर कुनै बार नराख्ने" },
        { ja: "監視員は置かずに、解体作業員が上から大声で怒鳴るだけにする", id: "Tanpa petugas darat, hanya mengandalkan teriakan tukang dari atas", ne: "गार्ड नराखी माथिबाट मान्छेले मात्र चिच्याउने" },
        { ja: "解体したパイプをわざと道路の真ん中に放り投げる", id: "Melempar pipa bongkaran ke tengah jalan raya", ne: "भत्काएको पाइप सडकको बीचमा फालिदिने" }
      ],
      answer: 0,
      expJa: "【安衛則第564条等】足場の解体作業時は、部材の落下による第三者災害を防ぐため、立入禁止区域の明示と「専任の監視員」の配置が法律で義務付けられています。",
      expId: "Area bawah pembongkaran perancah WAJIB dipagari barikade dan dijaga petugas pengawas khusus agar tidak ada orang melintas ke bawah.",
      expNe: "खट भत्काउँदा तल सामान खस्ने डर हुने भएकाले भुइँमा बार लगाउने र गार्ड राखेर मान्छे पस्न नदिनु कानुनी नियम हो।"
    },
    {
      cat: "実技：熱中症対策・遮熱ヘルメット（P.191）",
      q: "問64：直射日光を受ける屋外の屋根工事や鉄骨工事において、頭部の温度上昇を抑えて熱中症を防ぐために推奨されるヘルメットの機能はどれですか。",
      q_id: "Soal 64: Fitur helm pengaman apakah yang sangat dianjurkan untuk menekan lonjakan suhu kepala saat bekerja di atap terik matahari?",
      q_ne: "प्रश्न ६४: चर्को घाममा छाना वा फलामको काम गर्दा टाउको तात्न नदिन र हिटस्ट्रोकबाट बच्न प्रयोग गरिने आधुनिक हेल्मेटको विशेषता के हो?",
      options: [
        { ja: "遮熱顔料練り込み（遮熱塗装）が施され、太陽光の赤外線を反射して帽体内部の温度上昇を約10℃低減させる遮熱ヘルメット", id: "Helm Anti-Panas Radiasi (Sha-netsu Helmet) yang memantulkan sinar infra merah matahari sehingga suhu dalam helm lebih dingin ~10°C", ne: "घामको किरण परावर्तन गर्ने विशेष 'ताप प्रतिरोधी हेल्मेट (शानेचु हेल्मेट)', जसले भित्रको तापक्रम करिब १० डिग्री चिसो बनाउँछ" },
        { ja: "熱を吸収しやすい真っ黒な鉄製のヘルメット", id: "Helm besi warna hitam legam yang menyerap panas", ne: "घामको तातो सोस्ने कालो फलामे हेल्मेट" },
        { ja: "通気孔が一切なく完全に密閉されたヘルメット", id: "Helm tanpa ventilasi yang kedap udara total", ne: "हावा छिर्ने प्वाल नै नभएको बन्द हेल्मेट" },
        { ja: "内側にストーブが内蔵されている冬用ヘルメット", id: "Helm dengan pemanas listrik di dalamnya", ne: "भित्र हिटर जडान भएको हेल्मेट" }
      ],
      answer: 0,
      expJa: "【テキスト P.191参照】遮熱ヘルメットは赤外線を反射する特殊素材でできており、直射日光下でも帽体内温度の上昇を劇的に抑えて熱中症を防ぎます[cite: 21]。",
      expId: "Helm berteknologi Shanetsu memantulkan radiasi infra merah sinar matahari, menjaga kepala tetap sejuk meski bekerja di atas atap seng.",
      expNe: "घामको तातो फाल्ने 'शानेचु हेल्मेट' ले टाउकोलाई सितल बनाउँछ र गर्मीमा रिङ्गटा लाग्नबाट जोगाउँछ।"
    },
    {
      cat: "実技：災害発生時の職長の通報判断（119番と元請連絡）",
      q: "問65：高所作業中に仲間が足場から落下し頭から血を流して倒れています。職長が応援要請の電話をかける際、最も優先すべき連絡順序はどれですか。",
      q_id: "Soal 65: Pekerja jatuh dari perancah dan bersimbah darah. Manakah urutan kontak panggilan darurat yang PALING BENAR dilakukan Shokucho?",
      q_ne: "प्रश्न ६५: खटबाट साथी लडेर टाउकोबाट रगत बगेर अचेत भयो। शोकुचोले फोन गर्दा सबैभन्दा पहिले कसलाई खबर गर्नुपर्छ?",
      options: [
        { ja: "一刻を争う人命救助のため直ちに「119番（救急車）」を呼び、現場の正確な住所と状況を伝えた後、即座に「元請現場事務所（所長）」へ緊急報告する", id: "Segera telepon 119 (Ambulans) untuk menyelamatkan nyawa, sebutkan alamat proyek dan kondisi luka, lalu detik berikutnya lapor Kantor Proyek Kontraktor Utama", ne: "ज्यान जोगाउन तुरुन्तै '११९ (एम्बुलेन्स)' मा फोन गरी कार्यस्थलको ठेगाना र घाइतेको अवस्था बताउने, र लगत्तै 'मुख्य कम्पनीको अफिस (हाकिम)' लाई आपतकालीन खबर गर्ने" },
        { ja: "怒られるのが嫌なので、怪我人をそのままにして自分の親戚に電話して相談する", id: "Menelepon saudara di kampung untuk curhat karena takut dimarahi", ne: "गाली खाइएला भनेर घाइतेलाई छोडी गाउँको आफन्तलाई फोन गरेर सल्लाह माग्ने" },
        { ja: "出前のお弁当屋さんに電話してラーメンを注文する", id: "Menelepon warung makan untuk pesan mie ramen", ne: "होटलमा फोन गरेर खाना मगाउने" },
        { ja: "誰にも連絡せず、作業員全員でその場から走って逃亡する", id: "Semua pekerja lari kabur meninggalkan lokasi tanpa melapor", ne: "कसैलाई खबर नगरी सबैजना भाग्ने" }
      ],
      answer: 0,
      expJa: "【緊急事態対応の鉄則】人命救助が最優先です。「119番救急通報（住所・負傷状況伝達）➔ 元請現場本部通報（誘導員手配・ゲート開放）」を数分以内に行います。",
      expId: "Nyawa nomor satu: Hubungi 119 Ambulans terlebih dahulu! Kemudian hubungi kantor proyek agar mereka membuka pintu gerbang untuk menyambut ambulans.",
      expNe: "साथीको ज्यान बचाउन १ सेकेन्ड पनि खेर नफाली पहिला ११९ मा एम्बुलेन्स बोलाउने र तुरुन्त मुख्य हाकिमलाई खबर गरी गेट खुलाउन लगाउनुपर्छ।"
    }
  ]
};
