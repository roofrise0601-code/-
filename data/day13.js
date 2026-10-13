const CURRENT_QUIZ_DATA = {
  title: "Day 13：5S<ruby>活動<rt>かつどう</rt></ruby>・<ruby>詰所<rt>つめしょ</rt></ruby>・<ruby>服装<rt>ふくそう</rt></ruby>・<ruby>現場<rt>げんば</rt></ruby>マナー（テキスト P.95〜99）",
  key: "score_gakka2_13",
  passScore: 70,
  questions: [
    {
      cat: "第4章 5S活動（P.95）",
      q: "日本の建設現場で徹底される「5S活動」のうち、「**必要なものと不要なものを分け、不要なものを処分すること**」を何と呼びますか。",
      q_id: "Dalam gerakan 5S di lokasi konstruksi Jepang, apa sebutan untuk tindakan 'memisahkan antara yang diperlukan dan yang tidak, lalu membuang yang tidak diperlukan'?",
      q_ne: "जापानी निर्माण कार्यस्थलको '5S अभियान' मध्ये 'चाहिने र नचाहिने सामान छुट्याएर नचाहिनेलाई फाल्नु' लाई के भनिन्छ?",
      options: [
        { ja: "整理（せいり）", id: "Seiri (Ringkas / Pemilahan)", ne: "सेइरी (छान्ने / अनावश्यक हटाउने)" },
        { ja: "整頓（せいとん）", id: "Seiton (Rapi / Penataan)", ne: "सेइतोन (मिलाएर राख्ने)" },
        { ja: "清掃（せいそう）", id: "Seisou (Resik / Pembersihan)", ne: "सेइसौ (सफाइ गर्ने)" },
        { ja: "清潔（せいけつ）", id: "Seiketsu (Rawat / Menjaga kebersihan)", ne: "सेइकेचु (सफा कायम राख्ने)" }
      ],
      answer: 0,
      expJa: "【テキスト P.95参照】5Sの最初は「整理（せいり）」です。不要な資材やゴミを現場から撤去することで、つまずき転倒や作業スペースの狭隘化を防ぎます。",
      expId: "Seiri (整理) adalah membuang barang yang tidak terpakai agar area kerja bebas hambatan dan tidak memicu kecelakaan tersandung.",
      expNe: "'सेइरी' अनावश्यक सामान हटाएर कार्यस्थललाई सुरक्षित र फराकिलो बनाउने 5S को पहिलो नियम हो।"
    },
    {
      cat: "第4章 5S活動（P.95）",
      q: "5S活動における「**整頓（せいとん）**」の具体的な行動として、最も適切なものはどれですか。",
      q_id: "Manakah tindakan konkret yang PALING TEPAT mengenai 'Seiton' (Penataan rapi) dalam gerakan 5S?",
      q_ne: "5S अभियान अन्तर्गत 'सेइतोन (मिलाएर राख्ने)' को सबैभन्दा उपयुक्त व्यवहार कुन हो?",
      options: [
        { ja: "必要な道具や材料を、誰でもすぐに取り出せるよう定位置を決めて表示・保管する", id: "Menentukan tempat pasti dan label agar siapa pun bisa mengambil alat yang diperlukan dengan cepat", ne: "चाहिने औजार र सामान जोसुकैले तुरुन्त भेट्टाउन सक्ने गरी निश्चित ठाउँ तोकेर राख्ने" },
        { ja: "使った工具はその場に置いたままにして作業を早く終わらせる", id: "Meninggalkan alat di tempat kerja agar cepat selesai", ne: "काम छिटो सक्न औजारहरू प्रयोग गरेकै ठाउँमा छरपस्ट छोड्ने" },
        { ja: "ゴミ箱がいっぱいになったら周囲の床に置いておく", id: "Menaruh sampah di lantai sekitar jika tong sampah penuh", ne: "डस्टबिन भरिएपछि वरपर भुइँमै फोहोर थुपार्ने" },
        { ja: "他の会社の工具でも勝手に使って元の場所に戻さない", id: "Memakai alat subkontraktor lain tanpa izin dan tidak mengembalikannya", ne: "अरू कम्पनीको औजार सोध्दै नसोधी चलाउने र फिर्ता नगर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.95参照】「整頓」とは、必要なものを誰でもすぐに取り出せ、すぐに戻せる状態（定位置管理・表示管理）にすることです。",
      expId: "Seiton berarti menempatkan barang di tempat yang ditentukan secara rapi agar efisien dan aman.",
      expNe: "'सेइतोन' भन्नाले सामान खोज्न समय खेर नजाओस् भनेर तोकिएको ठाउँमा चिन्ह लगाएर सजाएर राख्नु हो।"
    },
    {
      cat: "第4章 詰所・休憩所のマナー（P.96）",
      q: "現場の「作業員詰所（休憩所）」を利用する際のマナーとして、**誤っているもの**はどれですか。",
      q_id: "Manakah tindakan yang SALAH dalam mematuhi etika dan aturan di ruang istirahat (Tsumesho) pekerja?",
      q_ne: "कामदारहरूको विश्राम कक्ष (चुमेशो) प्रयोग गर्दा पालना गर्नुपर्ने नियमहरू मध्ये कुन गलत हो?",
      options: [
        { ja: "泥やホコリのついた作業靴（安全靴）のまま、土足禁止の畳やマットの上に上がる", id: "Masuk ke area tatami/lantai bersih dengan sepatu keselamatan yang kotor berlumpur", ne: "हिलो र धुलो लागेको सेफ्टी जुत्ता लगाएर जुत्ता खोल्ने ठाउँ वा कार्पेटमा चढ्ने" },
        { ja: "喫煙は指定された喫煙所のみで行い、詰所内では吸わない", id: "Merokok hanya di area merokok resmi dan tidak merokok di ruang istirahat", ne: "चुरोट तोकिएको ठाउँमा मात्र पिउने र विश्राम कक्षभित्र नपिउने" },
        { ja: "弁当の空き箱やペットボトルは分別して指定のゴミ箱へ捨てる", id: "Membuang kotak makan dan botol plastik ke tempat sampah yang terpisah", ne: "खानाको बक्स र प्लास्टिकका बोतलहरू छुट्टाछुट्टै डस्टबिनमा फाल्ने" },
        { ja: "休憩が終わったらイスや机を整頓し、自分のゴミを残さない", id: "Merapikan kursi dan meja serta tidak meninggalkan sampah setelah istirahat", ne: "विश्राम सकिएपछि टेबल-कुर्सी मिलाउने र आफ्नो फोहोर नछोड्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.96参照】詰所は他社の作業員も利用する共同空間です。土足禁止エリアに安全靴で上がることや、机の上に足を乗せるなどの不衛生な行為は厳禁です。",
      expId: "Dilarang masuk ke area istirahat bersih dengan sepatu kerja kotor. Jaga kebersihan bersama.",
      expNe: "विश्राम कक्ष साझा ठाउँ हो। हिलो भएको सेफ्टी जुत्ता लगाएर कार्पेट वा तातामीमा पस्न कडा प्रतिबन्ध छ।"
    },
    {
      cat: "第4章 服装・身だしなみ（P.97）",
      q: "現場で着用する「ヘルメット（保護帽）」の正しい使用方法として、**最も適切なもの**はどれですか。",
      q_id: "Manakah cara pemakaian helm keselamatan (pelindung kepala) yang PALING BENAR di lokasi kerja?",
      q_ne: "कार्यस्थलमा सुरक्षा हेल्मेट प्रयोग गर्दा सबैभन्दा सही तरिका कुन हो?",
      options: [
        { ja: "あご紐（あごひも）を緩みなくしっかり締め、脱落しないようにかぶる", id: "Mengencangkan tali dagu dengan pas dan kencang agar helm tidak lepas saat benturan/jatuh", ne: "हेल्मेट नझरोस् भनेर चिउँडोको डोरी (फित्ता) कसिलो गरी बाँध्ने" },
        { ja: "暑いときはあご紐を外して後頭部に引っ掛けておく", id: "Melepas tali dagu saat panas dan menyangkutkannya ke belakang", ne: "गर्मी हुँदा चिउँडोको फित्ता फुकालेर पछाडि झुन्ड्याउने" },
        { ja: "視界を広くするため、ヘルメットを後ろに傾けて浅くかぶる", id: "Memiringkan helm ke belakang agar pandangan lebih luas", ne: "टाढासम्म देख्न हेल्मेटलाई पछाडितिर ढल्काएर लगाउने" },
        { ja: "ひび割れや強い衝撃を受けたヘルメットでも、割れていなければ使い続ける", id: "Tetap memakai helm yang pernah terbentur keras selama belum pecah", ne: "ठूलो चोट लागेको हेल्मेट चर्किएको छैन भनेर त्यही प्रयोग गरिरहने" }
      ],
      answer: 0,
      expJa: "【テキスト P.97参照】あご紐を締めていないと、墜落・転倒の瞬間にヘルメットが脱げて頭部を守れません。耳紐とあご紐の正しい調整が命を守ります。",
      expId: "Tali dagu helm harus terpasang kencang. Jika longgar atau tidak dipasang, helm akan terlepas saat terjadi kecelakaan jatuh.",
      expNe: "चिउँडोको फित्ता नकसी लगाउँदा लड्ने बेला हेल्मेट फुत्किन्छ। फित्ता सधैं कसिलो गरी बाँध्नुपर्छ।"
    },
    {
      cat: "第4章 服装の巻き込まれ防止（P.97）",
      q: "回転工具（ディスクグラインダーや丸のこなど）を使用する際の服装・保護具として、**重大な事故（巻き込まれ）につながる危険な行為**はどれですか。",
      q_id: "Manakah tindakan BERBAHAYA yang memicu kecelakaan tersangkut fatal saat menggunakan alat potong putar (gerinda, gergaji mesin)?",
      q_ne: "घुम्ने औजार (ग्राइन्डर वा गोलो आरा) प्रयोग गर्दा औजारमा बेरिएर ठूलो दुर्घटना हुने खतरनाक काम कुन हो?",
      options: [
        { ja: "繊維が回転部に巻き込まれる恐れがあるため、「軍手（編み手袋）」を着用して作業する", id: "Memakai sarung tangan rajut katun (Gunte) yang mudah tersangkut bilah putar", ne: "घुम्ने भागमा धागो बेरिन सक्ने भएकोले 'धागोको पञ्जा (गुन्ते)' लगाएर काम गर्ने" },
        { ja: "作業服の袖口（そでぐち）のボタンをしっかり留めておく", id: "Mengancingkan pergelangan lengan baju kerja dengan rapi", ne: "काम गर्ने लुगाको बाहुलाको टाँक कसिलो गरी लगाउने" },
        { ja: "保護メガネ（防じんメガネ）を着用して火花や切粉を防ぐ", id: "Memakai kacamata pelindung untuk mencegah percikan api dan serbuk", ne: "आगोको झिल्का र धुलोबाट बच्न सुरक्षा चस्मा लगाउने" },
        { ja: "タオルを首に巻いたまま作業せず、外しておく", id: "Melepas handuk dari leher agar tidak terbelit putaran", ne: "घाँटीमा गम्छा वा तौलिया नबेरी फुकालेर काम गर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.97参照】ボール盤やグラインダー、丸のこなどの回転機器作業では、巻き込まれ災害を防ぐため軍手などの編み手袋の使用は禁止されています（素手または専用手袋）。",
      expId: "Dilarang memakai sarung tangan kain rajut saat mengoperasikan mesin putar karena sangat mudah terseret ke dalam mesin.",
      expNe: "घुम्ने मेसिन चलाउँदा धागोको पञ्जा प्रयोग गर्न कडा प्रतिबन्ध छ, किनकि पञ्जा मेसिनमा बेरिएर हात काटिन सक्छ।"
    },
    {
      cat: "第4章 フルハーネス着用（P.97〜98）",
      q: "「墜落制止用器具（フルハーネス型）」を着用する際、**安全上守らなければならない基準**として正しいものはどれですか。",
      q_id: "Manakah standar keselamatan yang BENAR saat mengenakan alat penahan jatuh (Full-body Harness)?",
      q_ne: "उचाइमा लड्नबाट जोगाउने 'फुल बडी हार्नेस' लगाउँदा पालना गर्नुपर्ने सही सुरक्षा नियम कुन हो?",
      options: [
        { ja: "ランヤードのフックは、腰より高い位置の頑丈な手すりや親綱に掛ける", id: "Kait lanyard harus dikaitkan ke tali keselamatan (Oyazuna) atau pipa kokoh di atas pinggang", ne: "हार्नेसको हुक कम्मरभन्दा माथिको बलियो रेलिङ वा मुख्य सुरक्षा डोरी (ओयाजुना) मा अड्काउने" },
        { ja: "フックを足元（つま先）のパイプに掛けて作業する", id: "Mengaitkan kait ke pipa di ujung kaki", ne: "हुकलाई खुट्टाको छेउको पाइपमा अड्काएर काम गर्ने" },
        { ja: "動きにくいので肩ベルトや腿ベルトを限界まで緩めておく", id: "Melonggarkan tali bahu dan paha selebar mungkin agar mudah bergerak", ne: "हिँड्न सजिलो होस् भनेर काँध र तिघ्राको बेल्ट खुकुलो बनाउने" },
        { ja: "1丁掛けのフックを掛け替えるとき、一度フックを外して両手フリーで歩く", id: "Melepas kaitan sepenuhnya saat berpindah tanpa memakai tali kedua", ne: "अर्को ठाउँमा सार्दा हुक पूरै फुकालेर हात खुला राखी हिँड्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.97〜98参照】ショックアブソーバの落下距離を最短に抑えるため、ランヤードのフックは「腰より高い位置」に掛けるのが原則です。掛け替え時は2丁掛けを徹底します。",
      expId: "Kait lanyard harness wajib dipasang pada posisi lebih tinggi dari pinggang untuk meminimalkan jarak jatuh bebas.",
      expNe: "लडेको खण्डमा झड्का कम होस् भनेर हार्नेसको हुक सधैं कम्मरभन्दा माथिको स्थानमा अड्काउनुपर्छ।"
    },
    {
      cat: "第4章 言葉づかい・返事（P.98）",
      q: "職長や監督から指示や注意を受けたときの現場でのコミュニケーションとして、**最も適切な対応**はどれですか。",
      q_id: "Manakah sikap komunikasi yang PALING TEPAT saat menerima instruksi atau peringatan dari mandor / pengawas?",
      q_ne: "सुपरभाइजर वा इन्जिनियरबाट निर्देशन वा सुझाव पाउँदा सबैभन्दा उपयुक्त जवाफ कुन हो?",
      options: [
        { ja: "「はい、わかりました！」とハッキリ返事をし、不明な点はその場ですぐ質問して確認する", id: "Menjawab tegas 'Hai, wakarimashita!' dan langsung bertanya jika ada instruksi yang belum jelas", ne: "'हजुर, बुझें (हाइ, वाकारिमाशिता)!' भनी प्रष्ट जवाफ दिने र नबुझेको कुरा तुरुन्त सोध्ने" },
        { ja: "意味が分からなくても怒られたくないので分かったふりをして作業を始める", id: "Pura-pura paham karena takut dimarahi, lalu mulai bekerja sendiri", ne: "नबुझे पनि गाली खाइएला भन्ने डरले बुझेको जस्तो गरेर काम सुरु गर्ने" },
        { ja: "何も返事をせず、無言で背中を向けて立ち去る", id: "Pergi tanpa bersuara dan tanpa membalas ucapan apa pun", ne: "केही नबोली चुपचाप पछाडि फर्केर हिँड्ने" },
        { ja: "「自分は悪くない」と言い訳をして他人のせいにする", id: "Membela diri dengan menyalahkan pekerja lain", ne: "'मेरो गल्ती होइन' भन्दै अरूलाई दोष लगाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.98参照】「分かったふり」は重大な手戻りや人身事故を引き起こします。ハッキリ返事をした上で、分からない言葉や手順は「もう一度教えてください」と確認するのがプロの姿勢です。",
      expId: "Pura-pura paham sangat berbahaya di konstruksi. Jawab dengan jelas, lalu tanyakan kembali jika belum mengerti.",
      expNe: "नबुझीकन 'बुझें' भन्नु अत्यन्त खतरनाक हुन्छ। प्रष्ट जवाफ दिनुहोस् र नबुझेको कुरा फेरि सोधेर मात्र काम गर्नुहोस्।"
    },
    {
      cat: "第4章 後片付け・分別（P.99）",
      q: "一日の作業が終了したときの「後片付け」として、**不適切な行動**はどれですか。",
      q_id: "Manakah tindakan yang TIDAK TEPAT saat melakukan pembersihan dan perapian (ato-katazuke) di akhir jam kerja?",
      q_ne: "दिनभरिको काम सकिएपछि कार्यस्थल सफा गर्ने (आतो-काताजुके) कार्यमा कुन गलत हो?",
      options: [
        { ja: "面倒なので、木くず・鉄くず・プラスチック・塗料缶を全部まとめて一つの袋に捨てた", id: "Membuang kayu, besi, plastik, dan kaleng cat campur aduk ke dalam satu kantong karena malas", ne: "झन्झट मानेर काठ, फलाम, प्लास्टिक र पेन्टका डब्बाहरू सबै एउटै झोलामा मिसाएर फाल्ने" },
        { ja: "使用した電動工具やコードリールを片付け、電源プラグをコンセントから抜いた", id: "Merapikan alat listrik dan gulungan kabel serta mencabut steker dari stopkontak", ne: "विद्युतीय औजार र तारहरू मिलाएर राख्ने र प्लगबाट तार छुटाउने" },
        { ja: "作業通路に資材がはみ出していないか確認し、安全通路を確保した", id: "Memastikan jalur pejalan kaki bebas dari sisa material", ne: "हिँड्ने बाटोमा सामान छरपस्ट नभएको जाँच गरी बाटो खुला राख्ने" },
        { ja: "火気を使用した場所では、火の気が完全に消えているかを30分以上経過後も再確認した", id: "Memeriksa ulang area pengelasan/api untuk memastikan tidak ada bara yang tersisa", ne: "आगो वा वेल्डिङ प्रयोग गरेको ठाउँमा आगो पूर्ण निभेको ३० मिनेटपछि पनि फेरि जाँच गर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.99参照】建設廃棄物は「廃棄物処理法」に基づき、木材・金属・廃プラスチック・危険物などに厳格に分別して排出しなければなりません（混合投棄の禁止）。",
      expId: "Sampah konstruksi wajib dipilah berdasarkan jenisnya (kayu, besi, plastik). DILARANG mencampurnya jadi satu.",
      expNe: "निर्माण क्षेत्रको फोहोर कानुन अनुसार काठ, फलाम, प्लास्टिक छुट्टाछुट्टै छुट्याएर फाल्नुपर्छ, कहिल्यै मिसाएर फाल्नु हुँदैन।"
    },
    {
      cat: "第4章 道具の点検・手入れ（P.99）",
      q: "作業終了後の「工具の手入れ・保管」に関する行動として、**最も適切なもの**はどれですか。",
      q_id: "Manakah tindakan yang PALING TEPAT mengenai pemeliharaan dan penyimpanan peralatan kerja setelah selesai digunakan?",
      q_ne: "काम सकिएपछि औजारहरूको मर्मत-सम्भार र भण्डारण सम्बन्धी कुन कार्य सबैभन्दा उपयुक्त छ?",
      options: [
        { ja: "刃物の欠けやコードの傷がないか点検し、泥や汚れを拭き取って決められた工具箱に戻す", id: "Memeriksa keausan mata pisau/kabel, membersihkan kotoran, lalu menyimpan ke kotak alat yang ditentukan", ne: "औजारको धार भाँचिएको वा तार काटिएको छ कि जाँच गर्ने, फोहोर पुछ्ने र तोकिएको बक्समा राख्ने" },
        { ja: "明日も使うので、足場の上にインパクトドライバーを置いたまま帰宅する", id: "Meninggalkan obeng impact di atas perancah karena besok akan dipakai lagi", ne: "भोलि पनि प्रयोग गर्नुपर्छ भनेर खट (आशिबा) माथि नै मेसिन छोडेर घर जाने" },
        { ja: "バッテリー工具は雨が当たっても壊れないので屋外に野ざらしで置く", id: "Menaruh alat baterai di luar ruangan kehujanan", ne: "ब्याट्री औजारहरू पानी पर्ने खुला चौरमै छोडिदिने" },
        { ja: "刃が欠けて危険な丸のこでも、動く間は職長に報告せず隠しておく", id: "Menyembunyikan gergaji rusak dari mandor selama mesin masih bisa berputar", ne: "आराको दाँत भाँचिएर खतरनाक भए पनि चल्दासम्म सुपरभाइजरलाई नबताई लुकाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.99参照】道具の清掃と点検は明日の安全作業の第1歩です。足場上に放置すると強風での落下災害につながるため、必ず指定の工具箱へ片付けます。",
      expId: "Membersihkan dan memeriksa alat adalah langkah awal keselamatan esok hari. Jangan tinggalkan alat di atas scaffolding.",
      expNe: "औजार सफा र जाँच गरेर बक्समा राख्नुपर्छ। खटमा औजार छोड्दा हावाले खसालेर अरू मानिसलाई चोट लाग्न सक्छ।"
    },
    {
      cat: "第4章 共同生活・近隣配慮（P.99）",
      q: "現場周辺の「近隣住民」や「第三者」に対するマナーとして、**不適切な行動**はどれですか。",
      q_id: "Manakah tindakan yang TIDAK TEPAT terhadap warga sekitar lokasi proyek atau masyarakat umum?",
      q_ne: "कार्यस्थल वरपरका छिमेकी बासिन्दा तथा सर्वसाधारण जनताप्रति कुन व्यवहार अनुचित हो?",
      options: [
        { ja: "休憩時間に近隣住民の家の前や私道に座り込み、タバコを吸って大声で雑談する", id: "Duduk di depan rumah tetangga/jalan pribadi saat istirahat, merokok, dan mengobrol keras-keras", ne: "विश्रामको समयमा छिमेकीको घर अगाडि वा निजी बाटोमा बसेर चुरोट पिउँदै ठूलो स्वरले गफ गर्ने" },
        { ja: "現場周辺で近隣の方と目が合ったら「おはようございます」「こんにちは」と挨拶する", id: "Menyapa warga dengan sopan saat berpapasan di sekitar proyek", ne: "कार्यस्थल वरपर छिमेकी भेटिँदा विनम्रतापूर्वक 'ओहायौ' वा 'कोन्निचिवा' भनी अभिवादन गर्ने" },
        { ja: "工事車両の出入り時は歩行者や自転車の安全を最優先にする", id: "Memprioritaskan keselamatan pejalan kaki dan pesepeda saat truk keluar masuk", ne: "निर्माण गाडीहरू ओहोरदोहोर गर्दा पैदल यात्रु र साइकललाई पहिलो प्राथमिकता दिने" },
        { ja: "現場境界の外の道路に土砂がこぼれたら、すぐにホウキと水で掃除する", id: "Segera menyapu dan membersihkan tanah yang tumpah ke jalan umum", ne: "बाहिर सडकमा माटो पोखिएमा तुरुन्त कुचोले बढारेर सफा गर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.99参照】現場の外でも会社の看板を背負っています。近隣住宅前での座り込み、ポイ捨て、大声の雑談は地域クレームや工事中断の原因になります。",
      expId: "Jaga sopan santun di lingkungan sekitar. Dilarang nongkrong di depan rumah warga atau buang sampah sembarangan.",
      expNe: "कार्यस्थल बाहिर पनि कम्पनीको इज्जत जोगाउनुपर्छ। छिमेकीको घर अगाडि बस्ने, चुरोट फाल्ने वा होहल्ला गर्ने काम कहिल्यै नगर्नुहोस्।"
    }
  ]
};
