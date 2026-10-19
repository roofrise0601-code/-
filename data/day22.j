const CURRENT_QUIZ_DATA = {
  title: "Day 22：<ruby>安衛法改正<rt>あんえいほうかいせい</rt></ruby>と<ruby>災害発生<rt>さいがいはっせい</rt></ruby>モデル・<ruby>本質安全<rt>ほんしつあんぜん</rt></ruby>（テキスト P.69〜78）",
  key: "score_gakka4_22",
  passScore: 70,
  questions: [
    {
      cat: "第3章 安全衛生委員会（P.72〜73）",
      q: "労働安全衛生法において、労働者の安全と健康を守るための「**安全衛生委員会**」を設置することが義務付けられる**事業所の労働者数**はどれですか。",
      q_id: "Berapa jumlah pekerja di tempat kerja proyek konstruksi yang mewajibkan pembentukan 'Komite Keselamatan dan Kesehatan Kerja' (Anzen Eisei Iinkai)?",
      q_ne: "औद्योगिक सुरक्षा तथा स्वास्थ्य ऐन अनुसार कति जना कामदार भएको कार्यस्थलमा 'सुरक्षा तथा स्वास्थ्य समिति' गठन गर्न कानुनी रूपमा अनिवार्य छ?",
      options: [
        { ja: "常時50人以上", id: "50 orang atau lebih", ne: "५० जना वा सोभन्दा बढी" },
        { ja: "常時10人以上", id: "10 orang atau lebih", ne: "१० जना वा सोभन्दा बढी" },
        { ja: "常時20人以上", id: "20 orang atau lebih", ne: "२० जना वा सोभन्दा बढी" },
        { ja: "常時100人以上", id: "100 orang atau lebih", ne: "१०० जना वा सोभन्दा बढी" }
      ],
      answer: 0,
      expJa: "【テキスト P.72〜73参照】建設業においては、事業所の労働者の数が常時50人以上の場合、労働者と事業者が協力して安全衛生委員会を設置することが義務付けられています。",
      expId: "UU K3 Jepang mewajibkan pembentukan Komite K3 untuk tempat kerja/kantor cabang konstruksi dengan jumlah tenaga kerja 50 orang atau lebih.",
      expNe: "नियमित ५० जना वा सोभन्दा बढी कामदार कार्यरत रहेको निर्माण कार्यस्थलमा 'सुरक्षा तथा स्वास्थ्य समिति' स्थापना गर्न अनिवार्य छ।"
    },
    {
      cat: "第3章 法改正：労働時間の把握（P.74）",
      q: "労働安全衛生法等の改正により、事業者が労働者の労働時間状況を「タイムカードやPCログイン履歴などの客観的な方法」で把握した場合、**その記録を保存しなければならない期間**は何年間ですか。",
      q_id: "Berapa tahun masa simpan wajib bagi data catatan jam kerja buruh (time card/login PC) yang dicatat secara objektif oleh pengusaha?",
      q_ne: "कानुन अनुसार कामदारहरूको काम गरेको समय (टाइम कार्ड वा कम्प्युटर लगइन रेकर्ड) कम्पनीले कति वर्षसम्म सुरक्षित राख्नुपर्छ?",
      options: [
        { ja: "3年間", id: "3 tahun", ne: "३ वर्ष" },
        { ja: "1年間", id: "1 tahun", ne: "१ वर्ष" },
        { ja: "6か月間", id: "6 bulan", ne: "६ महिना" },
        { ja: "10年間", id: "10 tahun", ne: "१० वर्ष" }
      ],
      answer: 0,
      expJa: "【テキスト P.74参照】客観的な方法による労働時間状況の把握が法律で義務化され、その労働時間の記録は『3年間保存』しなければなりません。",
      expId: "Pencatatan jam kerja secara objektif wajib disimpan selama 3 tahun penuh sesuai regulasi ketenagakerjaan Jepang.",
      expNe: "कामदारको काम गरेको समयको वस्तुनिष्ठ रेकर्ड कम्पनीले अनिवार्य रूपमा ३ वर्षसम्म सुरक्षित राख्नुपर्छ।"
    },
    {
      cat: "第3章 法改正：医師面接指導（P.74〜75）",
      q: "長時間労働による過労死（脳血管疾患や虚血性心疾患）を防止するため、**医師による面接指導の対象となる「1か月の超過労働時間」の要件**は、改正により何時間に変更されましたか。",
      q_id: "Berapa jam batas lembur sebulan yang direvisi menjadi syarat pemeriksaan medis/konseling dokter untuk mencegah kematian akibat kerja berlebihan (karoushi)?",
      q_ne: "अत्यधिक कामले हुने मृत्यु (मुटु वा मस्तिष्कको रोग) रोक्न डाक्टरसँग अनिवार्य परामर्श लिनुपर्ने 'महिनाको ओभरटाइम' कति घण्टा तोकिएको छ?",
      options: [
        { ja: "1か月の超過労働時間が「80時間」を超えた場合（従来の100時間から引き下げ）", id: "Lembur melebihi '80 jam' sebulan (diturunkan dari aturan lama 100 jam)", ne: "महिनामा ओभरटाइम '८० घण्टा' नाघेमा (पुरानो १०० घण्टाको नियमलाई घटाएर)" },
        { ja: "1か月の超過労働時間が「45時間」を超えた場合", id: "Lembur melebihi 45 jam sebulan", ne: "महिनामा ओभरटाइम ४५ घण्टा नाघेमा" },
        { ja: "1か月の超過労働時間が「200時間」を超えた場合", id: "Lembur melebihi 200 jam sebulan", ne: "महिनामा ओभरटाइम २०० घण्टा नाघेमा" },
        { ja: "どんなに長時間労働をしても医師の面接は受けられない", id: "Tidak ada pemeriksaan dokter berapa jam pun lemburnya", ne: "जतिसुकै काम गरे पनि डाक्टरसँग भेट्न नपाइने" }
      ],
      answer: 0,
      expJa: "【テキスト P.74〜75参照】脳・心臓疾患の発症リスクに関する医学的知見に基づき、医師による面接指導の要件が従来の「月100時間超」から『月80時間超』に引き下げられました。",
      expId: "Batas waktu lembur untuk hak konseling dokter diturunkan dari 100 jam menjadi 80 jam sebulan demi mencegah penyakit kardiovaskular.",
      expNe: "मुटु र मस्तिष्क घातको जोखिम धेरै हुने भएकाले महिनामा ८० घण्टाभन्दा बढी ओभरटाइम गर्ने कामदारलाई डाक्टरसँग परामर्श गराउनुपर्छ।"
    },
    {
      cat: "第3章 「事故」と「災害」の違い（P.75）",
      q: "労働安全分野における「事故」と「災害」の使い分けとして、**「災害（さいがい）」の定義**として正しいものはどれですか。",
      q_id: "Dalam terminologi K3 Jepang, apakah definisi yang TEPAT mengenai istilah 'Saigai' (Bencana / Kecelakaan Korban Manusia)?",
      q_ne: "औद्योगिक सुरक्षाको भाषामा 'दुर्घटना (जिन्सी क्षति/साइगाई)' को सही परिभाषा कुन हो?",
      options: [
        { ja: "事故のうち、被害が「人の身体（負傷や死亡）」に及んだ場合", id: "Kejadian kecelakaan di mana dampaknya mengenai 'tubuh manusia' (cedera atau meninggal dunia)", ne: "दुर्घटनाहरू मध्ये जसको असर 'मानव शरीर (चोटपटक वा मृत्यु)' मा पर्न जान्छ" },
        { ja: "人が全く怪我をしておらず、機械だけが壊れた場合", id: "Kondisi di mana tidak ada orang terluka dan hanya mesin yang rusak", ne: "मानिसलाई केही नभई केवल मेसिन मात्र फुटेको अवस्था" },
        { ja: "予定工期よりも2日早く工事が完了した場合", id: "Proyek selesai 2 hari lebih cepat dari jadwal semula", ne: "तोकिएको मितिभन्दा २ दिन अगाडि काम सम्पन्न भएको अवस्था" },
        { ja: "朝礼で全員が指差し呼称を元気よく行った状態のこと", id: "Kondisi saat semua orang melakukan tunjuk-sebut dengan semangat saat apel", ne: "बिहानी बैठकमा सबैले हात उठाएर आवाज निकालेको अवस्था" }
      ],
      answer: 0,
      expJa: "【テキスト P.75参照】設備や行動が基準から外れて損害を生じる事象を「事故」、そのうち被害が人の身体（負傷・疾病・死亡）に及んだものを「災害」と使い分けます。",
      expId: "'Jiko' adalah insiden kerusakan alat/prosedur, sedangkan 'Saigai' khusus merujuk jika ada korban fisik manusia (cedera/tewas).",
      expNe: "सामान वा मेसिन मात्र बिग्रनु 'जिल्को (दुर्घटना)' हो भने मानिसको ज्यान वा शरीरमा चोट लाग्नुलाई 'साइगाई' भनिन्छ।"
    },
    {
      cat: "第3章 労働災害発生の基本モデル（P.76〜77）",
      q: "休業4日以上の労働災害の要因を分析した結果、**「不安全な状態（物）」と「不安全な行動（人）」が重なったときに発生する労働災害の割合**はおよそ何％ですか。",
      q_id: "Berdasarkan analisis statistik kecelakaan kerja berat (absen 4+ hari), berapa persen bencana yang timbul saat 'Kondisi Tidak Aman (Barang)' dan 'Tindakan Tidak Aman (Orang)' terjadi BERSAMAAN?",
      q_ne: "गम्भीर औद्योगिक दुर्घटनाहरूको विश्लेषण अनुसार, 'असुरक्षित अवस्था (सामान)' र 'असुरक्षित व्यवहार (मानिस)' दुवै एकैपटक मिल्दा घट्ने दुर्घटनाको हिस्सा करिब कति प्रतिशत छ?",
      options: [
        { ja: "約90%程度", id: "Sekitar 90%", ne: "करिब ९०% जति" },
        { ja: "約10%程度", id: "Sekitar 10%", ne: "करिब १०% जति" },
        { ja: "約30%程度", id: "Sekitar 30%", ne: "करिब ३०% जति" },
        { ja: "約5%未満", id: "Kurang dari 5%", ne: "५% भन्दा कम" },
      ],
      answer: 0,
      expJa: "【テキスト P.76〜77参照】労働災害の約90%は「不安全な状態（物）」と「不安全な行動（人）」が重なった瞬間に発生します。どちらか一方の不安定さを排除できれば災害の大半を防げます。",
      expId: "Sekitar 90% kecelakaan kerja fatal terjadi akibat bertemunya 'kondisi fisik tidak aman' dan 'tindakan ceroboh manusia' secara bersamaan.",
      expNe: "करिब ९०% दुर्घटनाहरू 'खराब भौतिक अवस्था' र 'मानिसको लापरबाही' एकैसाथ जुध्दा हुने गर्दछ।"
    },
    {
      cat: "第3章 本質安全（P.77〜78）",
      q: "安全対策における「**本質安全（ほんしつあんぜん）**」の考え方として、最も適切なものはどれですか。",
      q_id: "Manakah konsep yang PALING TEPAT mengenai 'Keselamatan Hakiki' (Honshitsu Anzen / Intrinsic Safety)?",
      q_ne: "सुरक्षाका उपायहरू मध्ये 'मूलभूत सुरक्षा (होन्शिचु आन्जेन)' को दृष्टिकोण सम्बन्धी कुन भनाइ सबैभन्दा सही छ?",
      options: [
        { ja: "危険そのものを無くすため、危険な作業を行わない選択をしたり、危険な材料・工程を安全なものに変更すること", id: "Menghilangkan sumber bahaya itu sendiri, seperti meniadakan pekerjaan berbahaya atau mengganti material beracun dengan yang aman", ne: "खतराको मूल जड नै हटाउनका लागि खतरनाक काम नै नगर्ने, वा खतरनाक केमिकल र प्रक्रियालाई पूरै सुरक्षित वस्तुले बदल्ने" },
        { ja: "危険があっても保護メガネを二重にかければ絶対に安全だと信じること", id: "Percaya bahwa memakai kacamata ganda sudah pasti aman meski ada ledakan", ne: "खतरा भए पनि दुईवटा चस्मा लगाएपछि केही हुन्न भनी विश्वास गर्ने" },
        { ja: "危険な作業を新入社員だけにやらせてベテランが避けること", id: "Menyerahkan tugas berbahaya hanya kepada pekerja baru", ne: "खतरनाक काम नयाँ कामदारलाई मात्र गर्न लगाउने" },
        { ja: "事故が起きてから怪我人に絆創膏を貼ること", id: "Menempelkan plester luka setelah kecelakaan terjadi", ne: "दुर्घटना भएपछि घाइतेलाई मलमपट्टी लगाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.77〜78参照】本質安全とは「危険な状態そのものを避ける（無くす）」ことです（例：車が危険なら乗らない、危険作業をやらない、無害な材料に変える）。",
      expId: "Honshitsu Anzen adalah melenyapkan bahaya dari akarnya (misal: menghapus tugas berisiko tinggi atau mengganti bahan kimia berbahaya).",
      expNe: "'होन्शिचु आन्जेन' भन्नाले खतराको स्रोत नै पूरै हटाउनु हो, जस्तै जोखिमयुक्त काम नै खारेज गर्नु वा सुरक्षित सामान प्रयोग गर्नु।"
    },
    {
      cat: "第3章 機能安全（P.77〜78）",
      q: "作業自体を無くすことができない場合に、センサーや保護装置などによって**危険を低減させる考え方**を何と呼びますか。",
      q_id: "Apa sebutan untuk pendekatan menurunkan risiko bahaya menggunakan perangkat kontrol, sensor, atau APD saat pekerjaan fisik tidak bisa ditiadakan?",
      q_ne: "काम हटाउन नसकिने अवस्थामा सेन्सर, सुरक्षा जाली वा उपकरणहरूको मद्दतले जोखिम घटाउने दृष्टिकोणलाई के भनिन्छ?",
      options: [
        { ja: "機能安全（きのうあんぜん）", id: "Kinou Anzen (Keselamatan Fungsional / Functional Safety)", ne: "किनौ आन्जेन (कार्यात्मक सुरक्षा)" },
        { ja: "本質安全（ほんしつあんぜん）", id: "Honshitsu Anzen (Keselamatan Hakiki)", ne: "होन्शिचु आन्जेन" },
        { ja: "事後安全", id: "Keselamatan Pasca-kejadian", ne: "घटनापछिको सुरक्षा" },
        { ja: "自然安全", id: "Keselamatan Alami", ne: "प्राकृतिक सुरक्षा" }
      ],
      answer: 0,
      expJa: "【テキスト P.77〜78参照】作業そのものを無くせない現実において、高所作業車、安全ネット、フルハーネス、衝突被害軽減ブレーキ等の機能や装置でリスクを低減する考え方を「機能安全」と言います。",
      expId: "Kinou Anzen adalah keselamatan fungsional: meminimalkan cedera menggunakan alat bantu seperti harness, jaring pengaman, dan sensor stop.",
      expNe: "काम रोक्न नसकिँदा हार्नेस, सेफ्टी नेट वा सेन्सर जस्ता साधन प्रयोग गरेर दुर्घटनाको असर घटाउनुलाई 'किनौ आन्जेन' भनिन्छ।"
    },
    {
      cat: "第3章 隔離の原則（P.78）",
      q: "機能安全の代表的な手法である「**隔離（かくり）**」の現場での具体例として、**適切なもの**はどれですか。",
      q_id: "Manakah contoh penerapan nyata di lapangan mengenai metode 'Isolasi / Pemisahan' (Kakuri) untuk menjauhkan manusia dari bahaya?",
      q_ne: "मानिसलाई जोखिमबाट टाढा राख्ने 'आइसोलेसन / अलग्ग्याउने (काकुरी)' विधिको कार्यस्थलको सही उदाहरण कुन हो?",
      options: [
        { ja: "重機作業エリアへの立ち入り禁止柵の設置や、機械の回転ベルト部への安全カバーの取り付け", id: "Memasang pagar batas dilarang masuk di area alat berat, serta memasang penutup kap pelindung pada sabuk mesin putar", ne: "ठूला मेसिन चल्ने ठाउँमा मानिस पस्न नदिने बार लगाउने, र घुम्ने बेल्टमा सुरक्षा कभर लगाउने" },
        { ja: "誰でも自由に触れるように、むき出しの回転モーターの横に通路を作ること", id: "Membuat jalur jalan tepat di sebelah motor mesin putar terbuka", ne: "खुल्ला घुमिरहेको मोटरको छेउमै मानिस हिँड्ने बाटो बनाउने" },
        { ja: "高圧送電線のすぐ横でクレーンを誘導員なしで旋回させること", id: "Memutar boom crane tepat di samping kabel listrik tegangan tinggi tanpa petugas pemandu", ne: "उच्च भोल्टेजको तार नजिकै कुनै गाइड बिना क्रेन घुमाउने" },
        { ja: "深さ2メートルの掘削溝の周囲に手すりやカラーコーンを一切置かないこと", id: "Tidak memasang pagar atau cone di sekeliling galian sedalam 2 meter", ne: "२ मिटर गहिरो खाल्डो वरिपरि कुनै बार वा चेतावनी चिन्ह नराख्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.78参照】「隔離」とは危険なものに人を近づけないことです。立ち入り禁止柵、誘導員の配置、回転部へのカバー設置、高圧電線への防護カバー管などがこれに該当します。",
      expId: "Kakuri (Isolasi) berarti mencegah manusia mendekati bahaya, misalnya memasang barikade di area crane dan memasang cover pelindung belt mesin.",
      expNe: "'काकुरी' भनेको मानिसलाई खतराको नजिक जान नदिनु हो, जस्तै बार लगाउनु वा घुम्ने मेसिनमा कभर हाल्नु।"
    },
    {
      cat: "第3章 電線離隔距離（P.78）",
      q: "クレーン工事などの作業場所の近くに「**高圧送電線**」がある場合、感電災害を防ぐための措置として最も適切なものはどれですか。",
      q_id: "Jika terdapat 'Kabel Listrik Tegangan Tinggi' di dekat area pengoperasian crane, tindakan apakah yang paling tepat untuk mencegah sengatan listrik?",
      q_ne: "क्रेन चलाउने ठाउँ नजिकै 'उच्च भोल्टेजको बिजुलीको लाइन' भएमा करेन्ट लाग्नबाट जोगिन गर्नुपर्ने सबैभन्दा उपयुक्त उपाय कुन हो?",
      options: [
        { ja: "電線に近づいただけでも放電により感電するため、所定の離隔距離を保ち、防護施設（防護管）や注意標識を設ける", id: "Menjaga jarak aman bebas karena listrik bisa menyengat lewat lompatan bunga api, serta memasang selubung pelindung pipa dan rambu", ne: "तारमा नछोए पनि नजिक जाँदा करेन्ट उफ्रिन सक्ने भएकाले निश्चित दूरी कायम गर्ने, तारमा सुरक्षा खोल (कभर) लगाउने र चेतावनी बोर्ड राख्ने" },
        { ja: "電線に直接クレーンのフックを引っ掛けて固定する", id: "Mencantolkan kait crane langsung ke kabel listrik agar tidak goyang", ne: "क्रेनको हुक सिधै बिजुलीको तारमा अड्काएर कस्ने" },
        { ja: "雨の日を選んで送電線に水をかけながら作業する", id: "Bekerja di hari hujan sambil menyiram air ke arah kabel transmisi", ne: "पानी परेको दिन पारेर तारमा पानी छ्याप्दै काम गर्ने" },
        { ja: "離隔距離は気にせず、オペレーターの勘だけで送電線スレスレを作業させる", id: "Mengabaikan jarak aman dan mengandalkan insting operator di dekat kabel", ne: "दूरीको वास्ता नगरी चालकको अन्दाजको भरमा तारको छेउमै काम गर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.78参照】高圧送電線は直接触れなくても近づくだけで空中放電により感電します。離隔距離の確保、電線への防護具装着、監視員の配置等の対策を徹底します。",
      expId: "Tegangan tinggi dapat menyengat tanpa disentuh (loncatan listrik udara). Wajib menjaga jarak aman dan memasang selongsong isolasi pengaman.",
      expNe: "उच्च भोल्टेजको तारमा नछोए पनि हावाबाट करेन्ट लाग्न सक्छ। त्यसैले निश्चित दूरी राख्ने र तारमा सुरक्षा पाइप लगाउनुपर्छ।"
    },
    {
      cat: "第3章 保護具の着用徹底（P.78〜79）",
      q: "保護メガネ、防じんマスク、安全手袋などの保護具を使用する際のルールとして、**最も適切な記述**はどれですか。",
      q_id: "Manakah aturan yang PALING BENAR dalam pemakaian APD seperti kacamata pelindung, masker debu, dan sarung tangan keselamatan?",
      q_ne: "सुरक्षा चस्मा, धुलोको मास्क, र सेफ्टी पञ्जा प्रयोग गर्दा पालना गर्नुपर्ने सबैभन्दा सही नियम कुन हो?",
      options: [
        { ja: "その保護具が必要とされる作業を行う場合は、作業時間がたとえわずか（数分）であっても着用を徹底する", id: "Wajib memakai APD secara tertib tanpa terkecuali, meskipun durasi pekerjaan berbahaya tersebut HANYA SEBENTAR (beberapa menit)", ne: "सुरक्षा सामग्री चाहिने काम गर्दा कामको समय जतिसुकै छोटो (केही मिनेट मात्र) भए पनि अनिवार्य रूपमा लगाउने" },
        { ja: "作業時間が5分以内であれば、保護メガネやマスクを着用しなくてもよい", id: "Boleh tidak memakai kacamata atau masker jika tugasnya selesai dalam 5 menit", ne: "५ मिनेटभन्दा छोटो काम भए चस्मा वा मास्क नलगाए पनि हुन्छ" },
        { ja: "職長が見ていない場所であれば、息苦しいので防じんマスクを外して作業する", id: "Boleh melepas masker saat mandor tidak melihat karena terasa sesak", ne: "शोकुचोले नहेरेको ठाउँमा सास फेर्न गाह्रो भयो भन्दै मास्क फुकाल्ने" },
        { ja: "保護具は破損して穴が空いていても、形が残っていれば買い替えずに使い続ける", id: "Tetap memakai APD yang sudah robek dan bolong selama masih bisa dipakai", ne: "सुरक्षा सामग्री च्यातिएर प्वाल परे पनि नफेरी त्यही चलाइरहने" }
      ],
      answer: 0,
      expJa: "【テキスト P.78〜79参照】保護具が有効な作業をさせる場合には、「たとえ作業時間がわずかであっても、保護具の使用を徹底する」ことが重大災害防止の鉄則です。",
      expId: "Meskipun tugas hanya berlangsung beberapa menit, APD wajib dipakai sempurna. Kecelakaan fatal sering terjadi saat mengabaikan tugas singkat.",
      expNe: "काम जतिसुकै छोटो समयको भए पनि सुरक्षा सामग्री अनिवार्य लगाउनुपर्छ। केही सेकेन्डको लापरबाहीले आँखा वा ज्यान जान सक्छ।"
    }
  ]
};
