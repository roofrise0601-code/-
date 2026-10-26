const CURRENT_QUIZ_DATA = {
  title: "直前フル模試②：【本番的中】<ruby>学科<rt>がっか</rt></ruby>40問 ＋ <ruby>実技<rt>じつぎ</rt></ruby>25問（計65問）",
  key: "score_final_moshi_2",
  passScore: 70,
  questions: [
    // ==========================================
    // 【学科試験パート：40問（問1〜問40）】
    // ==========================================
    {
      cat: "学科：リスクアセスメントの目的",
      q: "問1：職場における「リスクアセスメント」を実施する本来の目的として、最も適切なものはどれですか。",
      q_id: "Soal 1: Apakah tujuan utama dilakukannya Penilaian Risiko (Risk Assessment) di tempat kerja proyek?",
      q_ne: "प्रश्न १: कार्यस्थलमा 'जोखिम मूल्याङ्कन (रिस्क असेस्मेन्ट)' गर्नुको मुख्य उद्देश्य कुन हो?",
      options: [
        { ja: "作業場に潜む危険性や有害性を事前に特定し、リスクの大きさを見積もって優先順位をつけ、事故が起こる前に対策を講じてリスクを低減させるため", id: "Mengidentifikasi bahaya sejak dini, memperkirakan besaran risiko, menentukan prioritas, dan mengambil tindakan pencegahan sebelum terjadi kecelakaan", ne: "काम थाल्नुअघि नै लुकेका खतराहरू पत्ता लगाउने, जोखिमको स्तर नाप्ने र दुर्घटना हुनुभन्दा पहिले नै रोकथामका उपाय गरेर जोखिम घटाउने" },
        { ja: "事故が起きた後に作業員を厳しく罰して始末書を書かせるため", id: "Untuk menghukum pekerja secara keras dan menulis surat peringatan setelah insiden terjadi", ne: "दुर्घटना भइसकेपछि कामदारलाई कारबाही गर्न र स्पष्टीकरण लेखाउन" },
        { ja: "労働基準監督署に提出する書類を増やしてデスクワークを忙しく見せるため", id: "Hanya memperbanyak berkas formalitas agar tampak sibuk di kantor", ne: "सरकारी कार्यालयमा देखाउन कागजपत्र मात्र थुपार्न" },
        { ja: "危険な作業をすべて下請業者に押し付けて自社の責任を逃れるため", id: "Melimpahkan semua tugas berbahaya ke subkontraktor agar lepas tanggung jawab", ne: "जोखिमपूर्ण काम साना कम्पनीलाई पन्छाएर आफू उम्कन" }
      ],
      answer: 0,
      expJa: "【リスクアセスメント】危険を「事前に見つけて・見積もって・優先順位をつけて・低減措置を行う」先取り型の安全管理手法です。",
      expId: "Risk assessment bertujuan membasmi potensi kecelakaan sebelum terjadi melalui mitigasi bertingkat.",
      expNe: "दुर्घटना हुनुभन्दा अघि नै जोखिम पहिचान गरी योजनाबद्ध रूपमा हटाउने विधिलाई रिस्क असेस्मेन्ट भनिन्छ।"
    },
    {
      cat: "学科：リスク低減措置の優先順位",
      q: "問2：リスクアセスメントで特定したリスクを低減する際、最も優先すべき対策の順序として正しいものはどれですか。",
      q_id: "Soal 2: Manakah urutan prioritas yang BENAR dalam menerapkan tindakan pengendalian risiko (Risk Control)?",
      q_ne: "प्रश्न २: जोखिम घटाउने उपायहरू गर्दा सबैभन्दा पहिलो प्राथमिकतादेखि अन्तिम प्राथमिकताको सही क्रम कुन हो?",
      options: [
        { ja: "①本質的安全対策（危険の除去） ➔ ②工学的対策（防護柵・換気等） ➔ ③管理的対策（マニュアル・教育） ➔ ④個人用保護具の着用", id: "1. Eliminasi Bahaya Pokok -> 2. Rekayasa Teknis (Pagar/Ventilasi) -> 3. Kendali Administratif (SOP/Pelatihan) -> 4. Pemakaian APD", ne: "१. खतरालाई जरैदेखि हटाउने -> २. इन्जिनियरिङ उपाय (बार/भेन्टिलेसन) -> ३. प्रशासनिक उपाय (नियम/तालिम) -> ४. सुरक्षा सामग्री (मास्क/बेल्ट)" },
        { ja: "①個人用保護具の着用 ➔ ②管理的対策 ➔ ③工学的対策 ➔ ④本質的安全対策", id: "1. Pemakaian APD -> 2. Administratif -> 3. Rekayasa -> 4. Eliminasi", ne: "१. सुरक्षा सामग्री -> २. प्रशासनिक -> ३. इन्जिनियरिङ -> ४. खतरा हटाउने" },
        { ja: "①気合いと根性 ➔ ②作業の中止 ➔ ③全員解散 ➔ ④知らぬ顔", id: "1. Mental baja -> 2. Stop kerja -> 3. Bubar -> 4. Pura-pura tidak tahu", ne: "१. आँट गर्ने -> २. काम रोक्ने -> ३. घर जाने -> ४. बेवास्ता गर्ने" },
        { ja: "①注意喚起の看板 ➔ ②保護具 ➔ ③危険作業の増加 ➔ ④放置", id: "1. Pasang plang peringatan -> 2. APD -> 3. Tambah bahaya -> 4. Dibiarkan", ne: "१. बोर्ड टाँस्ने -> २. सुरक्षा सामग्री -> ३. झन् खतरा बढाउने -> ४. छाडिदिने" }
      ],
      answer: 0,
      expJa: "【低減措置の4段階優先順位】危険そのものを無くす「本質的対策」が最優先です。保護具の着用は最終手段（第4段階）に位置づけられます。",
      expId: "Prioritas mutlak: Hilangkan bahaya (eliminasi) dahulu. Memberi APD adalah benteng pertahanan terakhir.",
      expNe: "खतरालाई जरैबाट फाल्नु पहिलो उपाय हो, कामदारलाई सुरक्षा सामग्री (हेल्मेट/मास्क) लगाउन दिनु चाहिँ अन्तिम उपाय हो।"
    },
    {
      cat: "学科：労働安全衛生法・統括安全衛生責任者",
      q: "問3：特定元方事業者（ゼネコン元請等）が、ずい道やビル建設などの混在作業現場に配置しなければならない現場統括責任者は誰ですか。",
      q_id: "Soal 3: Pejabat penanggung jawab utama apakah yang WAJIB ditunjuk oleh kontraktor utama untuk mengoordinasikan seluruh subkontraktor di proyek?",
      q_ne: "प्रश्न ३: मुख्य निर्माण कम्पनी (जेनेकोन) ले सम्पूर्ण पेटी ठेकेदारहरूलाई समन्वय गर्न कार्यस्थलमा खटाउने मुख्य अधिकारी को हुन्?",
      options: [
        { ja: "統括安全衛生責任者（とうかつあんぜんえいせいせきにんしゃ）", id: "Toukatsu Anzen Eisei Sekininsha (General Safety and Health Manager)", ne: "तोउकाचु आन्जेन एइसेइ सेकिनिन्शा (महानिर्देशक सुरक्षा अधिकारी)" },
        { ja: "警備員", id: "Satpam Proyek", ne: "सुरक्षा गार्ड" },
        { ja: "事務員", id: "Staf Administrasi Kantor", ne: "लेखा कर्मचारी" },
        { ja: "資材納入業者", id: "Supplier Pengantar Pasir", ne: "सामान ओसार्ने साहु" }
      ],
      answer: 0,
      expJa: "【安衛法第15条】特定元方事業者は、関係請負人の労働者を含めた現場全体の労働災害を防止するため「統括安全衛生責任者」を選任します。",
      expId: "Toukatsu Anzen Eisei Sekininsha memegang komando tertinggi koordinasi K3 lintas seluruh perusahaan di satu area proyek.",
      expNe: "सबै कम्पनीका कामदारहरूको सुरक्षा मिलाउन मुख्य कम्पनीले तोक्ने सबैभन्दा माथिल्लो अधिकारी 'तोउकाचु' हुन्।"
    },
    {
      cat: "学科：協議組織の会議（安全衛生協議会）",
      q: "問4：元方事業者とすべての関係請負人（下請）で構成される協議組織の会議について、法令で定められた最低開催頻度はどれですか。",
      q_id: "Soal 4: Berapakah frekuensi minimal pelaksanaan rapat koordinasi K3 (Kyougi Soshiki) antara kontraktor utama dan seluruh subkontraktor menurut hukum?",
      q_ne: "प्रश्न ४: मुख्य कम्पनी र सबै साना कम्पनीहरू मिलेर गरिने 'सुरक्षा समन्वय परिषद् (क्योउगी सोशिकी)' को बैठक कानुन अनुसार कम्तीमा कति समयमा बस्नैपर्छ?",
      options: [
        { ja: "毎月1回以上（現場実務では毎日・毎週開催される）", id: "Minimal 1 bulan sekali (secara praktik lapangan dilakukan setiap hari/minggu)", ne: "कम्तीमा महिनाको १ पटक (फिल्डमा भने दैनिक वा हप्ताको १ पटक गरिन्छ)" },
        { ja: "10年に1回", id: "10 tahun sekali", ne: "१० वर्षमा १ पटक" },
        { ja: "建物が完成した後の打ち上げパーティーの時だけ", id: "Hanya saat pesta syukuran setelah gedung selesai", ne: "काम सकिएपछि भोज खाने बेला मात्र" },
        { ja: "事故で誰かが大怪我をした時以外は開催不要", id: "Hanya perlu jika ada korban luka parah", ne: "ठूलो दुर्घटना भएपछि मात्र" }
      ],
      answer: 0,
      expJa: "【安衛則第637条】協議組織の会議は法令上「毎月1回以上」の開催が義務付けられており、現場の実務では毎日の工程打合せとセットで頻繁に開催されます。",
      expId: "Hukum mewajibkan rapat koordinasi formal minimal sebulan sekali, namun di lapangan wajib diadakan tiap pagi/sore.",
      expNe: "कानुन अनुसार महिनामा कम्तीमा १ पटक सुरक्षा परिषद्को बैठक बस्नैपर्छ, फिल्डमा भने हरेक दिन गरिन्छ।"
    },
    {
      cat: "学科：元方事業者の巡視義務",
      q: "問5：特定元方事業者の現場統括管理において、現場の安全状態を確認するために行う「現場巡視（パトロール）」の法定頻度はどれですか。",
      q_id: "Soal 5: Berapakah frekuensi wajib patroli keliling lapangan (Junshi) yang harus dilakukan oleh kontraktor utama menurut peraturan K3?",
      q_ne: "प्रश्न ५: मुख्य कम्पनीका सुपरभाइजरले कार्यस्थलको सुरक्षा अवस्था हेर्न गरिने 'फिल्ड गस्ती (प्याट्रोल)' को कानुनी नियम कति हो?",
      options: [
        { ja: "毎作業日に少なくとも1回（毎日1回以上）", id: "Minimal 1 kali setiap hari kerja", ne: "काम हुने हरेक दिन कम्तीमा १ पटक (दैनिक १ पटक अनिवार्य)" },
        { ja: "1年に1回", id: "1 tahun sekali", ne: "वर्षमा १ पटक" },
        { ja: "雨の日だけ", id: "Hanya saat hujan", ne: "पानी परेको दिन मात्र" },
        { ja: "社長が現場に来る日だけ", id: "Hanya saat pemilik perusahaan berkunjung", ne: "मालिक आउने दिन मात्र" }
      ],
      answer: 0,
      expJa: "【安衛則第637条第1項第2号】特定元方事業者は、作業場所を「毎作業日に少なくとも1回」巡視しなければなりません。",
      expId: "Kontraktor utama wajib melakukan inspeksi keliling (patroli K3) ke setiap sudut proyek minimal satu kali setiap hari kerja.",
      expNe: "मुख्य कम्पनीले हरेक दिन कम्तीमा एकपटक कार्यस्थलको चारैतिर घुमेर सुरक्षा जाँच गर्नैपर्छ।"
    },
    {
      cat: "学科：送り出し教育の重要性",
      q: "問6：専門工事業者（サブコン）が、自社の作業員を初めて現場に入場させる前にあらかじめ自社で実施する教育は何ですか。",
      q_id: "Soal 6: Pelatihan awal apakah yang WAJIB diberikan oleh perusahaan subkontraktor kepada karyawannya sendiri di kantor/bengkel sebelum diberangkatkan ke proyek?",
      q_ne: "प्रश्न ६: कामदारलाई कार्यस्थलमा पठाउनुअघि आफ्नै कम्पनीको अफिसमा दिइने पूर्व-तालिमलाई के भनिन्छ?",
      options: [
        { ja: "送り出し教育（おくりだしきょういく）", id: "Okuridashi Kyouiku (Edukasi Pra-Pemberangkatan Pekerja)", ne: "ओकुरी-दाशी क्योइकु (कार्यस्थल प्रस्थानपूर्व तालिम)" },
        { ja: "海外旅行セミナー", id: "Seminar Liburan Luar Negeri", ne: "विदेश भ्रमण तालिम" },
        { ja: "自動車教習所の講習", id: "Kursus Mengemudi Mobil", ne: "ड्राइभिङ स्कुलको तालिम" },
        { ja: "忘年会の一発芸練習", id: "Latihan Lucu untuk Pesta Akhir Tahun", ne: "पार्टीमा नाच्ने अभ्यास" }
      ],
      answer: 0,
      expJa: "【送り出し教育】現場入場前に、現場の概要、自社の作業内容・手順、安全装備、現場規則を自社で事前教育することを「送り出し教育」と呼びます。",
      expId: "Okuridashi Kyouiku membekali pekerja mengenai aturan khusus proyek sebelum mereka melangkah ke gerbang lokasi konstruksi.",
      expNe: "फिल्डमा पस्नुअघि आफ्नै कम्पनीमा बसेर कामको नियम र सुरक्षाबारे सिक्ने तालिमलाई 'ओकुरी-दाशी क्योइकु' भनिन्छ।"
    },
    {
      cat: "学科：建設業法・一括下請負（丸投げ）の禁止",
      q: "問7：建設業法において、請け負った建設工事の全部または大部分を他の業者にそのまま丸投げする「一括下請負」が原則禁止されている理由は何ですか。",
      q_id: "Soal 7: Mengapa UU Konstruksi melarang keras praktik 'Ikka-tsu Shitaukeoi' (menjual/melimpahkan 100% kontrak proyek ke pihak lain tanpa bekerja)?",
      q_ne: "प्रश्न ७: निर्माण ऐनले ठेक्का पाएको सम्पूर्ण काम अरुलाई नै हुबहु जिम्मा दिने (मारुनागे / पूरै पेटी ठेक्का दिने) कामलाई किन प्रतिबन्ध लगाएको हो?",
      options: [
        { ja: "手抜き工事や工事費の中抜き（ブローカー行為）を招き、施工品質の低下、労働条件の悪化、および事故の温床となるため", id: "Memicu pemotongan dana sepihak (calo), menyebabkan penurunan mutu bangunan drastis, perbudakan pekerja, dan rawan kecelakaan fatal", ne: "बिचौलियाले कमिसन खाने, काम गुणस्तरहीन हुने, कामदारको तलब घट्ने र ठूला दुर्घटनाहरू निम्तिने भएकोले" },
        { ja: "書類の枚数が減って事務員が暇になってしまうから", id: "Karena berkas jadi sedikit dan staf kantor menganggur", ne: "कागजपत्र कम भएर कर्मचारी फुर्सदिला हुने भएकोले" },
        { ja: "建設業法の条文が長すぎて読むのが大変だから", id: "Karena pasal hukum terlalu panjang untuk dibaca", ne: "ऐन धेरै लामो भएकोले" },
        { ja: "元請の社長が現場で写真を撮れなくなるから", id: "Agar direktur utama bisa berfoto di proyek", ne: "हाकिमले फोटो खिच्न नपाउने भएकोले" }
      ],
      answer: 0,
      expJa: "【建設業法第22条】一括下請負（丸投げ）は、実際の施工責任の所在を曖昧にし、中間搾取と品質・安全の低下をもたらすため固く禁止されています。",
      expId: "Praktik calo proyek (marunage) merusak mutu dan keselamatan karena dana dipotong habis oleh pihak ketiga tanpa kerja nyata.",
      expNe: "काम नगरी कमिसन मात्र खाने र गुणस्तरहीन काम गराउने भएकाले काम पूरै अरुलाई पन्छाउन कानुनले कडा प्रतिबन्ध लगाएको छ।"
    },
    {
      cat: "学科：建設業退職金共済制度（建退共）",
      q: "問8：建設現場で働く技能者・作業員の福利厚生として、事業主が共済手帳に「証紙」を貼る（または電子申請する）退職金制度は何ですか。",
      q_id: "Soal 8: Skema tabungan pensiun apakah yang khusus diperuntukkan bagi pekerja lapangan konstruksi di mana perusahaan menempelkan perangko (shoushi)?",
      q_ne: "प्रश्न ८: निर्माण क्षेत्रका कामदारहरूको भविष्य सुरक्षित गर्न कम्पनीले हरेक महिना टिकट टाँसेर जम्मा गरिदिने विशेष उपदान कोष कुन हो?",
      options: [
        { ja: "建退共（けんたいきょう / 建設業退職金共済制度）", id: "Kentaikyou (Dana Pensiun Bersama Pekerja Konstruksi)", ne: "केन्ताइक्यो (निर्माण कामदार उपदान कोष / पेन्सन फन्ड)" },
        { ja: "宝くじ共済", id: "Lotere Berhadiah Kupon", ne: "चिट्ठा कोष" },
        { ja: "自動車重量税", id: "Pajak Bobot Kendaraan", ne: "सवारी साधन कर" },
        { ja: "住宅ローン減税", id: "Keringanan Pajak KPR Rumah", ne: "घर कर्जा कर छुट" }
      ],
      answer: 0,
      expJa: "【建退共制度】現場を移動することが多い建設技能者のために、働いた日数分の証紙を手帳に貼り、退職時にまとまった退職金が支払われる公的制度です。",
      expId: "Kentaikyou adalah jaminan hari tua pekerja proyek di mana perusahaan menabung perangko pensiun sesuai jumlah hari kerja.",
      expNe: "कामदारले जति दिन काम गर्छ, त्यति नै दिनको उपदान रकम जम्मा भएर काम छोड्दा एकमुष्ट पैसा पाइने सरकारी कोष 'केन्ताइक्यो' हो।"
    },
    {
      cat: "学科：建設キャリアアップシステム（CCUS）",
      q: "問9：技能者の資格や現場での就業履歴をICカード（キャリアアップカード）に蓄積し、技能者の処遇改善や現場管理に活用する制度は何ですか。",
      q_id: "Soal 9: Sistem pencatatan riwayat kerja digital apakah yang menggunakan Kartu IC untuk merekam sertifikat keahlian dan hari kerja tukang di Jepang?",
      q_ne: "प्रश्न ९: कामदारका सम्पूर्ण तालिम प्रमाणपत्र र काम गरेको दिनको रेकर्ड कार्डमा राखेर सेवा-सुविधा बढाउन प्रयोग गरिने 'आईसी कार्ड प्रणाली' कुन हो?",
      options: [
        { ja: "CCUS（建設キャリアアップシステム）", id: "CCUS (Construction Career Up System)", ne: "CCUS (निर्माण करियर अप प्रणाली / कामदार रेकर्ड कार्ड)" },
        { ja: "PASMO / Suica", id: "Kartu Kereta Komuter", ne: "रेल चढ्ने कार्ड" },
        { ja: "マイナンバーカードのみ", id: "Hanya Kartu KTP My Number", ne: "नागरिक परिचयपत्र मात्र" },
        { ja: "クレジットカード", id: "Kartu Kredit Bank", ne: "क्रेडिट कार्ड" },
      ],
      answer: 0,
      expJa: "【CCUS】技能者の資格、社会保険加入状況、現場入場履歴を登録・蓄積し、能力に応じた適正な処遇（昇給等）につなげる国家推進システムです。",
      expId: "CCUS mencatat setiap hari kerja tukang menggunakan mesin tap kartu di proyek, membuktikan jam terbang dan tingkat keahliannya.",
      expNe: "CCUS कार्ड कार्यस्थलको मेसिनमा छुवाएर (ट्याप गरेर) कामदारले आफ्नो अनुभव र दक्षता प्रमाणित गर्न सक्छन्।"
    },
    {
      cat: "学科：労働時間と36協定",
      q: "問10：労働基準法上、労働者に法定労働時間（1日8時間・週40時間）を超えて時間外労働（残業）をさせるために、事前に会社と労働者代表の間で締結・届出が必要な労使協定は何ですか。",
      q_id: "Soal 10: Perjanjian ketenagakerjaan apakah yang WAJIB disepakati dan didaftarkan ke Depnaker (Roudou Kijun Kantokusho) sebelum perusahaan bisa memberi lembur?",
      q_ne: "प्रश्न १०: श्रम कानुन अनुसार दिनको ८ घण्टा र हप्ताको ४० घण्टाभन्दा बढी ओभरटाइम (थप काम) लगाउनुअघि कम्पनी र कामदारबीच हुनुपर्ने आधिकारिक सम्झौता कुन हो?",
      options: [
        { ja: "36協定（さぶろくきょうてい / 時間外・休日労働に関する協定届）", id: "Perjanjian Pasal 36 (Saburoku Kyoutei / Surat Perjanjian Lembur)", ne: "३६ सम्झौता (साबुरोकु क्योतेइ / ओभरटाइम सम्झौता)" },
        { ja: "秘密保持誓約書のみ", id: "Hanya Perjanjian Kerahasiaan Informasi", ne: "गोपनीयता सम्झौता मात्र" },
        { ja: "賃貸借契約書", id: "Surat Kontrak Sewa Bangunan", ne: "घरभाडा सम्झौता" },
        { ja: "示談書", id: "Surat Perdamaian Kasus Hukum", ne: "मुद्दा मिलापत्र" }
      ],
      answer: 0,
      expJa: "【労基法第36条】36協定を締結し労基署へ届け出ないまま時間外労働をさせた場合、労働基準法違反となります。建設業も罰則付き上限規制が適用されています。",
      expId: "Tanpa Saburoku Kyoutei yang sah di Depnaker, perusahaan DILARANG memberi jam lembur kepada pekerjanya.",
      expNe: "३६ सम्झौता श्रम कार्यालयमा दर्ता नगराई कामदारलाई ओभरटाइम गराउनु कानुन विपरीत हुन्छ।"
    },
    {
      cat: "学科：安全配慮義務",
      q: "問11：労働契約法第5条に定められている、事業主が労働者に対して負う「労働者が生命・身体等の安全を確保しつつ労働することができるよう必要な配慮をする義務」を何と呼びますか。",
      q_id: "Soal 11: Apakah istilah kewajiban hukum bagi majikan untuk memastikan lingkungan kerja aman agar fisik dan nyawa pekerja terlindungi dari bahaya?",
      q_ne: "प्रश्न ११: श्रम सम्झौता ऐन अनुसार साहुले कामदारको ज्यान र शरीर सुरक्षित राख्दै काम गर्ने वातावरण बनाइदिनुपर्ने दायित्वलाई के भनिन्छ?",
      options: [
        { ja: "安全配慮義務（あんぜんはいりょぎむ）", id: "Anzen Hairyo Gimu (Kewajiban Memberikan Perhatian Keselamatan Kerja)", ne: "आन्जेन हाइर्यो गिमु (सुरक्षा प्रत्याभूति गर्ने कानुनी दायित्व)" },
        { ja: "秘密厳守義務", id: "Kewajiban Menjaga Rahasia", ne: "गोप्य राख्ने दायित्व" },
        { ja: "競業避止義務", id: "Kewajiban Tidak Bersaing Bisnis", ne: "प्रतिस्पर्धा नगर्ने दायित्व" },
        { ja: "年次有給休暇取得義務のみ", id: "Hanya Kewajiban Mengambil Cuti", ne: "बिदा लिने दायित्व मात्र" }
      ],
      answer: 0,
      expJa: "【労働契約法第5条】使用者は労働者に対して安全配慮義務を負っています。怠って事故が発生した場合、会社および管理者は巨額の損害賠償責任を負います。",
      expId: "Anzen Hairyo Gimu menuntut majikan menyiapkan perlindungan kerja mutlak. Pelanggaran atas hak ini berujung tuntutan pidana/perdata.",
      expNe: "कामदारलाई चोटपटक लाग्न नदिन सम्पूर्ण सुरक्षा व्यवस्था मिलाइदिनु कम्पनीको कानुनी दायित्व हो।"
    },
    {
      cat: "学科：熱中症予防・自覚症状の早期申告",
      q: "問12：夏季の熱中症による重篤化を防ぐため、朝礼やミーティングで職長が作業員全員に徹底すべき「体調に関するルール」として最も適切なものはどれですか。",
      q_id: "Soal 12: Manakah aturan disiplin kesehatan yang PALING TEPAT ditekankan Shokucho saat briefing pagi demi mencegah kematian akibat sengatan panas?",
      q_ne: "प्रश्न १२: चर्को गर्मीमा कसैको पनि ज्यान नजाओस भन्नाका लागि शोकुचोले बिहानी बैठकमा कामदारहरूलाई सिकाउनुपर्ने सबैभन्दा मुख्य नियम कुन हो?",
      options: [
        { ja: "「少しでも頭痛、めまい、吐き気、身体のだるさを感じたら我慢せず、直ちに作業を中断して職長や仲間に申し出る」こと", id: "Jika merasa sedikit pusing, mual, sakit kepala, atau lemas, JANGAN DITAHAN, segera hentikan kerja dan lapor ke mandor/rekan", ne: "टाउको दुख्ने, रिङ्गटा लाग्ने, वाकवाकी लाग्ने वा जिउ गल्ने अलिकति भए पनि सहन नगरी तुरुन्तै काम रोकेर शोकुचोलाई भनिहाल्नु" },
        { ja: "「倒れるまで絶対に仕事を休んではいけない」と我慢を強いること", id: "Memaksa menahan sakit dan dilarang istirahat sampai pingsan", ne: "ढलुन्जेलसम्म काम नरोक्नु भनी सहन बाध्य पार्नु" },
        { ja: "水やお茶を飲むと汗が出るので水分補給を禁止すること", id: "Melarang minum air agar tidak keluar banyak keringat", ne: "पसिना आउँछ भनेर पानी पिउन नदिनु" },
        { ja: "体調が悪くなったら誰にも言わずに現場の外の道路で倒れること", id: "Menyuruh keluar jalan raya sendirian jika merasa tidak enak badan", ne: "बिरामी भए कसैलाई नभनी बाहिर गएर पल्टिनु" }
      ],
      answer: 0,
      expJa: "【熱中症予防】熱中症は「我慢」が死を招きます。「異変を感じたら即座に申告・即座に休憩」できる職場の雰囲気作りが職長の最重要任務です。",
      expId: "Kunci selamat heatstroke: 'Lapor Cepat, Istirahat Cepat'. Menahan rasa pusing di bawah terik matahari memicu koma mematikan.",
      expNe: "गर्मीमा बिरामी हुँदा लुकाएर बस्नु ज्यान जानु हो। अलिकति असहज हुने बित्तिकै तुरुन्तै साथी वा हाकिमलाई भन्नुपर्छ।"
    },
    {
      cat: "学科：高所作業と天候による作業中止基準",
      q: "問13：労働安全衛生規則において、強風・大雨・大雪などの悪天候により危険が予想される場合、事業者が高所作業を中止しなければならない「強風の基準」はどれですか。",
      q_id: "Soal 13: Berdasarkan UU K3 Jepang, berapakah batas kecepatan angin rata-rata (Kyoufuu) di mana pekerjaan di ketinggian WAJIB DIHENTIKAN?",
      q_ne: "प्रश्न १३: श्रम सुरक्षा ऐन अनुसार हुरीबतास चल्दा अग्लो ठाउँको काम तुरुन्तै बन्द गर्नुपर्ने 'हावाको गतिको मापदण्ड' कति हो?",
      options: [
        { ja: "10分間の平均風速が毎秒10m以上（10m/s以上）", id: "Kecepatan angin rata-rata 10 meter per detik (10 m/s) ke atas selama 10 menit", ne: "१० मिनेटको हावाको औसत गति प्रति सेकेन्ड १० मिटर (१०m/s) भन्दा बढी भएको अवस्था" },
        { ja: "風速が毎秒1m以上", id: "Kecepatan angin 1 m/s", ne: "प्रति सेकेन्ड १ मिटर" },
        { ja: "台風の真ん中でも作業は中止してはならない", id: "Kerja tidak boleh berhenti meski di tengah badai taifun", ne: "आँधी आए पनि काम रोक्न नपाइने" },
        { ja: "風速100m以上", id: "Kecepatan angin 100 m/s", ne: "प्रति सेकेन्ड १०० मिटर" }
      ],
      answer: 0,
      expJa: "【安衛則第522条・第575条】強風（10m/s以上）、大雨（1回の降水量50mm以上）、中震以上の地震時は、足場・高所作業を直ちに中止しなければなりません。",
      expId: "Angin kencang 10 m/s ke atas otomatis menghentikan segala pekerjaan di atas perancah dan atap.",
      expNe: "हावाको गति प्रति सेकेन्ड १० मिटरभन्दा बढी हुनासाथ अग्लो ठाउँका सम्पूर्ण काम तत्काल बन्द गर्नुपर्छ।"
    },
    {
      cat: "学科：クレーン作業と強風による作業中止基準",
      q: "問14：クレーンや移動式クレーンを用いて荷を吊り上げる作業において、風により荷が煽られて転倒・激突の危険があるため作業を中止しなければならない風速基準はどれですか。",
      q_id: "Soal 14: Berapakah batas kecepatan angin seketika (shunkan fuusoku) di mana operasi crane mengangkat beban wajib dihentikan demi keselamatan?",
      q_ne: "प्रश्न १४: क्रेनले सामान उठाउँदा हावाले सामान हल्लिएर दुर्घटना हुनबाट रोक्न काम बन्द गर्नुपर्ने 'हावाको गतिको मापदण्ड' कुन हो?",
      options: [
        { ja: "瞬間風速が毎秒15m以上（または10分間平均風速10m/s以上）", id: "Kecepatan hembusan angin sesaat 15 m/s ke atas (atau rata-rata 10 m/s)", ne: "हावाको अचानक गति प्रति सेकेन्ड १५ मिटर (१५m/s) भन्दा बढी भएको अवस्था" },
        { ja: "風速毎秒2m以上", id: "Kecepatan angin 2 m/s", ne: "प्रति सेकेन्ड २ मिटर" },
        { ja: "竜巻が発生してクレーンが倒れるまで作業する", id: "Bekerja terus sampai crane roboh tertiup tornado", ne: "क्रेन ढलुन्जेल काम गरिरहने" },
        { ja: "風速の基準は存在しない", id: "Tidak ada standar kecepatan angin", ne: "कुनै मापदण्ड छैन" }
      ],
      answer: 0,
      expJa: "【クレーン則第74条の2】強風（瞬間15m/s以上・平均10m/s以上）のときはクレーン作業を直ちに中止し、ジブを固定する等の逸走防止・転倒防止措置を取ります。",
      expId: "Operasi crane wajib disetop saat angin sesaat mencapai 15 m/s karena beban gantung akan terombang-ambing tak terkendali.",
      expNe: "हावाको झोक्का १५m/s पुग्ने बित्तिकै क्रेनको काम रोक्नै पर्छ किनकि झुन्ड्याएको सामान हावाले उडाएर ठोक्किन्छ।"
    },
    {
      cat: "学科：作業主任者の選任義務",
      q: "問15：労働安全衛生法において、高所作業や危険作業の現場で直接その作業を指揮させるために事業者が選任しなければならない「作業主任者」に関する記述として正しいものはどれですか。",
      q_id: "Soal 15: Manakah pernyataan yang BENAR mengenai penunjukan 'Sagyou Shunensha' (Operations Chief / Mandor Ahli Khusus) menurut hukum?",
      q_ne: "प्रश्न १५: जोखिमपूर्ण कामहरूमा प्रत्यक्ष सुपरिवेक्षण गर्न कम्पनीले अनिवार्य खटाउनुपर्ने 'साग्यो शुनिन्शा (कार्य प्रमुख)' सम्बन्धी कुन भनाइ सही छ?",
      options: [
        { ja: "都道府県労働局長登録の「技能講習」を修了した有資格者の中から選任し、作業方法の決定や保護具の使用状況を直接指揮・監視させる", id: "Dipilih dari pemegang sertifikat 'Ginou Koushuu' resmi, bertugas menentukan metode kerja dan memantau pemakaian APD di lokasi", ne: "सरकारबाट मान्यता प्राप्त तालिम पास गरेका व्यक्तिहरूबाट छानिन्छ, जसले कार्यविधि निर्धारण गर्ने र सुरक्षा सामग्रीको प्रत्यक्ष निगरानी गर्छन्" },
        { ja: "誰でもよいのでその日一番遅刻してきた作業員を指名する", id: "Bebas memilih pekerja yang datang paling terlambat hari itu", ne: "ढिलो आउने कामदारलाई दण्ड स्वरूप तोक्ने" },
        { ja: "作業主任者は現場に行かず、自宅で寝ていなければならない", id: "Mandor ahli harus tidur di rumah dan tidak boleh ke proyek", ne: "घरमै सुतेर बस्ने व्यक्तिलाई तोक्ने" },
        { ja: "作業主任者に指示権限はなく、作業員の手元手伝いだけを行う", id: "Tidak punya wewenang dan hanya menjadi pembantu tukang", ne: "कुनै अधिकार नभएको सहयोगी कामदार" }
      ],
      answer: 0,
      expJa: "【安衛法第14条】足場組立、型枠支保工、鉄骨組立、木造解体、酸欠等の危険作業には、技能講習修了者から「作業主任者」を選任し直接指揮させます。",
      expId: "Sagyou Shunensha adalah pemegang lisensi Ginou Koushuu yang bertanggung jawab langsung di titik kerja berbahaya.",
      expNe: "खट बनाउने, फलाम जोड्ने जस्ता काममा आधिकारिक तालिम लिएको 'साग्यो शुनिन्शा' ले कामको प्रत्यक्ष कमाण्ड सम्हाल्नुपर्छ।"
    },
    {
      cat: "学科：足場の最大積載荷重の表示",
      q: "問16：足場の作業床に資材を仮置きする際、足場の倒壊や床材の踏み抜きを防ぐために必ず守らなければならないルールはどれですか。",
      q_id: "Soal 16: Aturan apakah yang WAJIB dipatuhi saat menaruh tumpukan material sementara di lantai kerja perancah?",
      q_ne: "प्रश्न १६: खटको भुइँमा निर्माण सामग्री राख्दा खट भत्किन वा भाँचिन नदिन अनिवार्य पालना गर्नुपर्ने नियम कुन हो?",
      options: [
        { ja: "足場の見やすい場所に「最大積載荷重（スパンあたり荷重等）」を表示し、その許容重量を超えて資材を過積載しない", id: "Pasang plang 'Beban Maksimal' di tempat yang mudah dibaca dan DILARANG menumpuk beban melebihi kapasitas izin", ne: "देखिने ठाउँमा 'अधिकतम लोड क्षमता' को बोर्ड टाँस्ने र तोकिएको भन्दा बढी भारी सामान थुपार्न निषेध गर्ने" },
        { ja: "足場板が割れてミシミシ鳴るまで限界まで高く資材を積み上げる", id: "Menumpuk material setinggi mungkin sampai lantai kayu berderit retak", ne: "काठको फलेक भाँच्चिएर आवाज आउन्जेलसम्म जति पनि थुपार्ने" },
        { ja: "足場の積載荷重は無限大なのでいくら重い鉄骨を置いてもよい", id: "Kapasitas perancah tidak terbatas sehingga bebas menaruh besi sebanyak apa pun", ne: "जतिसुकै गह्रौं सामान राखे पनि खटलाई केही हुन्न भन्दै थुपार्ने" },
        { ja: "積載荷重の表示板は邪魔なのでゴミ箱に捨てる", id: "Membuang papan batas beban ke tempat sampah", ne: "बोर्डलाई फोहोरको बाकसमा फालिदिने" }
      ],
      answer: 0,
      expJa: "【安衛則第562条】事業者は、足場の作業床の最大積載荷重を定め、これを見やすい場所に表示し、かつ、これを超えて積載してはなりません。",
      expId: "Kapasitas muat perancah wajib ditempel jelas (misal maks 400 kg per bentang span) dan dilarang ditumpuk melebihi batas.",
      expNe: "खटको हरेक भागमा बढीमा कति किलोसम्म राख्न पाइन्छ प्रष्ट लेख्नुपर्छ र त्योभन्दा बढी लोड राख्न पाइँदैन।"
    },
    {
      cat: "学科：建設機械の合図と誘導",
      q: "問17：ダンプトラックやラフテレーンクレーンが狭い現場通路を後退（バック）する際、職長が徹底させるべき安全管理はどれですか。",
      q_id: "Soal 17: Tindakan keselamatan apakah yang WAJIB ditaati saat truk dump atau crane bergerak mundur di jalur proyek yang sempit?",
      q_ne: "प्रश्न १७: टिपर गाडी वा क्रेन साँघुरो बाटोमा पछाडि सार्दा (ब्याक गर्दा) शोकुचोले कडाइका साथ पालना गराउनुपर्ने नियम कुन हो?",
      options: [
        { ja: "専任の誘導員を後方の安全な位置に配置し、後退経路に作業員がいないことを確認しながら所定の合図で誘導させる", id: "Tempatkan petugas pemandu resmi di posisi aman di belakang untuk memandu dengan sinyal pasti tanpa ada orang melintas", ne: "पछाडिपट्टि सुरक्षित ठाउँमा ट्राफिक गार्ड खटाउने र मान्छे नभएको पक्का गर्दै तोकिएको इसारा दिएर गाडी पछाडि सार्ने" },
        { ja: "後方は見えなくてもそのまま一気にアクセルを踏んでバックさせる", id: "Mundur kencang tanpa melihat ke belakang", ne: "पछाडि नहेरी सिधै एक्सेलेटर थिचेर ब्याक गर्ने" },
        { ja: "誘導員はトラックの真後ろの死角にぴったり密着して立つ", id: "Pemandu berdiri tepat di titik buta tepat di kolong belakang truk", ne: "ड्राइभरले नदेख्ने गाडीको ठ्याक्कै मुनि पछाडि टाँसिएर बस्ने" },
        { ja: "歩行者がいたらクラクションで威嚇して走って逃げさせる", id: "Membunyikan klakson keras agar pejalan kaki lari ketakutan", ne: "हर्न बजाएर हिँड्ने मान्छेलाई लखेट्ने" }
      ],
      answer: 0,
      expJa: "【重機後退事故防止】トラックの後退時は死角が多く巻き込まれ事故が多発します。必ず誘導員を適切な位置に配置して誘導します[cite: 12]。",
      expId: "Truk mundur wajib dipandu oleh petugas誘導員 yang berdiri di luar jangkauan titik buta sopir.",
      expNe: "गाडी ब्याक गर्दा पछाडि मान्छे किचिने डर धेरै हुने भएकाले अनिवार्य गार्ड राखेर मात्र गाडी पछाडि सार्नुपर्छ।"
    },
    {
      cat: "学科：玉掛けワイヤーの吊り角度",
      q: "問18：2本のワイヤーロープを使って荷を吊り上げる際、ワイヤーロープにかかる張力（引っ張り力）を安全に保つための「吊り角度」として適切なものはどれですか。",
      q_id: "Soal 18: Berapakah sudut bukaan antara 2 kawat seling (sudut kait) yang AMAN saat mengangkat beban dengan crane?",
      q_ne: "प्रश्न १८: क्रेनले दुईवटा स्लिङ तार प्रयोग गरी सामान उचाल्दा, तार नचुँडियोस् भन्नाका लागि दुई तारबीचको कोण (एङ्गल) बढीमा कति हुनुपर्छ?",
      options: [
        { ja: "吊り角度は60°以内にする（角度が大きくなるとワイヤーにかかる力が急激に増大するため）", id: "Sudut kait maksimal 60 derajat (karena makin lebar sudutnya, tegangan beban pada kawat melonjak drastis)", ne: "दुई तारबीचको कोण बढीमा ६० डिग्रीभित्र हुनुपर्छ (कोण ठूलो भए तारमा भार दोब्बर हुन्छ र चुँडिन्छ)" },
        { ja: "吊り角度は180°の真横にしてピーンと張る", id: "Sudut kait 180 derajat lurus mendatar", ne: "१८० डिग्री सिधा तेर्सो पारेर तन्काउने" },
        { ja: "角度が何度になってもワイヤーにかかる重さは全く変わらない", id: "Sudut tidak berpengaruh apa-apa pada kekuatan kawat", ne: "कोण जति भए पनि तारमा कुनै फरक पर्दैन" },
        { ja: "ワイヤーは1本だけで結び目を作って引っ掛ける", id: "Cukup memakai satu kawat yang ditali simpul", ne: "एउटा मात्र तारमा गाँठो पारेर झुन्ड्याउने" }
      ],
      answer: 0,
      expJa: "【玉掛け計算】吊り角度が60°を超えるとワイヤー張力が急増し、120°になると荷重の2倍の力が各ワイヤーにかかり破断します。基本は「60°以内」です。",
      expId: "Sudut angkat kawat sling maksimal 60 derajat. Makin melebar sudutnya, kawat mudah putus mendadak.",
      expNe: "स्लिङ तारको कोण ६० डिग्रीभन्दा फराकिलो भए तार चुँडिएर सामान खस्छ। त्यसैले ६० डिग्रीभित्रै राख्नुपर्छ।"
    },
    {
      cat: "学科：アーク溶接作業と遮光保護具",
      q: "問19：アーク溶接作業を行う際、強烈な紫外線や赤外線から目を保護し「電気性眼炎（目の激痛・目の焼け）」を防ぐために必ず使用する用具は何ですか。",
      q_id: "Soal 19: Alat pelindung apakah yang WAJIB dipakai juru las untuk melindungi mata dari sinar ultraviolet berbahaya agar tidak mengalami kebutaan/radang kornea?",
      q_ne: "प्रश्न १९: वेल्डिङ गर्दा निस्कने कडा किरणबाट आँखाको ज्योति जोगाउन अनिवार्य लगाउनुपर्ने विशेष सिसा भएको मुकुन्डो कुन हो?",
      options: [
        { ja: "遮光面（適切な遮光度番号の遮光保護具・溶接用保護面）", id: "Topeng Las dengan Kaca Filter Gelap (Shakou-men / Welding Helmet)", ne: "वेल्डिङ मुकुन्डो (कालो सुरक्षा सिसा भएको सिल्ड / शाकोउ-मेन)" },
        { ja: "普通の透明な老眼鏡", id: "Kacamata baca bening biasa", ne: "सामान्य पढ्ने चस्मा" },
        { ja: "プラスチックのザル", id: "Saringan plastik dapur", ne: "भान्साको प्लास्टिकको जाली" },
        { ja: "目を閉じるだけで保護具は使わない", id: "Cukup memejamkan mata tanpa pelindung", ne: "आँखा चिम्लिने, केही नलगाउने" }
      ],
      answer: 0,
      expJa: "【アーク溶接安全】溶接のアーク光（紫外線・赤外線）を直接見ると目を激しく損傷します。作業に応じた遮光度番号のフィルタープレート付き遮光面を着用します。",
      expId: "Sinar las mengandung radiasi UV tinggi. Wajib memakai topeng las (shakou-men) dengan kegelapan lensa standar.",
      expNe: "वेल्डिङको आगोले आँखा डढाउँछ। त्यसैले कालो सिसा भएको वेल्डिङ मास्क अनिवार्य लगाउनुपर्छ।"
    },
    {
      cat: "学科：粉じん作業と防塵マスクの国家検定",
      q: "問20：コンクリートのはつり作業や岩石切断作業において、作業員が吸い込む粉じんによって発症する肺の不治の職業病は何ですか。",
      q_id: "Soal 20: Penyakit paru-paru kronis tidak dapat sembuh apakah yang timbul akibat menghirup debu silika serbuk beton/batu secara terus-menerus?",
      q_ne: "प्रश्न २०: कंक्रीट फुटाउँदा वा ढुङ्गा काट्दा निस्कने मसिनो धुलो फोक्सोमा जमेर लाग्ने कहिल्यै निको नहुने भयानक रोग कुन हो?",
      options: [
        { ja: "じん肺（じんぱい / 珪肺症）", id: "Silikosis Paru-Paru / Pneumoconiosis (Jinpai)", ne: "जिनपाइ (फोक्सोमा धुलो जमेर हुने रोग / सिलिकोसिस)" },
        { ja: "花粉症", id: "Alergi Debu Bunga (Kafunshou)", ne: "परागकणको एलर्जी" },
        { ja: "虫歯", id: "Gigi Berlubang", ne: "दाँत किराले खाने रोग" },
        { ja: "乗り物酔い", id: "Mabuk Perjalanan Darat", ne: "गाडी लाग्ने समस्या" }
      ],
      answer: 0,
      expJa: "【粉じん則】鉱物やコンクリートの粉じんを長年吸入すると肺が線維化する「じん肺」を引き起こします。国家検定合格品の防塵マスク着用が義務です[cite: 20]。",
      expId: "Penyakit 'Jinpai' (paru-paru menghitam berkerak silika) tidak bisa disembuhkan. Masker debu bersertifikat nasional adalah pelindung mutlak.",
      expNe: "कंक्रीटको धुलोले फोक्सो बिगारेर 'जिनपाइ' रोग लाग्छ। यसको कुनै उपचार नहुने हुनाले गुणस्तरीय डस्ट मास्क अनिवार्य लगाउनुपर्छ।"
    },
    {
      cat: "学科：熱中症警戒アラートの対応",
      q: "問21：環境省および気象庁から「熱中症警戒アラート」が発表された猛暑日における現場管理として、最も適切な判断はどれですか。",
      q_id: "Soal 21: Manakah tindakan manajemen lapangan yang PALING TEPAT saat peringatan darurat Heatstroke Alert (Necchuushou Keikai Alert) diumumkan?",
      q_ne: "प्रश्न २१: मौसम विभागले 'अत्यधिक गर्मीको आपतकालीन चेतावनी' जारी गरेको दिन कार्यस्थलमा कस्तो व्यवस्था गर्नु सबैभन्दा उपयुक्त हुन्छ?",
      options: [
        { ja: "昼間の最も暑い時間帯の作業中止や時間短縮を検討し、作業間隔ごとに強制的な水分・塩分補給と冷房休憩所での休息を実施する", id: "Kurangi jam kerja siang hari, wajibkan minum air elektrolit berkala, dan istirahatkan pekerja di ruang ber-AC", ne: "दिउँसोको सबैभन्दा चर्को घाममा काम रोक्ने वा घटाउने, तोकिएको समयमा अनिवार्य पानी पिउन लगाउने र एसी कोठामा आराम गराउने" },
        { ja: "アラートが出たので休憩時間をすべてゼロにして全員で残業する", id: "Menghapus jam istirahat dan lembur massal", ne: "आराम गर्ने समय पूरै हटाएर थप काममा जोत्ने" },
        { ja: "スポーツドリンクは贅沢なので熱湯だけを飲ませる", id: "Melarang minuman isotonik dan hanya memberi air panas mendidih", ne: "चिसो जीवनजल नदिई उम्लेको तातो पानी मात्र खुवाउने" },
        { ja: "エアコンをすべて消して扇風機も停止させる", id: "Mematikan seluruh AC dan kipas angin", ne: "सबै एसी र पंखाहरू बन्द गरिदिने" }
      ],
      answer: 0,
      expJa: "【熱中症アラート対応】アラート発令時は命に関わる危険な暑さです。作業時間帯のシフト（早朝出勤）、こまめな休憩と水分塩分の強制摂取を指示します[cite: 21]。",
      expId: "Saat Heatstroke Alert bunyi, kurangi intensitas kerja fisik, paksa minum elektrolit, dan optimalkan pendingin ruangan.",
      expNe: "गर्मीको खतरा हुँदा दिउँसोको काम घटाउने र कामदारलाई जबरजस्ती चिसो कोठामा लगेर जीवनजल खुवाउनै पर्छ।"
    },
    {
      cat: "学科：高年齢労働者の労働災害防止",
      q: "問22：建設現場において60歳以上の高年齢労働者が増加しています。高年齢者の労働災害を防ぐための配慮として、最も適切なものはどれですか。",
      q_id: "Soal 22: Manakah tindakan kepedulian yang PALING TEPAT untuk mencegah kecelakaan pada pekerja konstruksi lanjut usia (usia 60 tahun ke atas)?",
      q_ne: "प्रश्न २२: कार्यस्थलमा ६० वर्ष कटेका वृद्ध कामदारहरूको सुरक्षाका लागि शोकुचोले गर्नुपर्ने सबैभन्दा राम्रो व्यवहार कुन हो?",
      options: [
        { ja: "身体機能（視力・筋力・平衡感覚）の低下を考慮し、足元の段差解消や十分な照度を確保し、無理のない適正な作業配置を行う", id: "Pahami penurunan fisik mata dan keseimbangan, hilangkan undakan jalan, beri lampu terang, dan beri tugas yang tidak over-fisik", ne: "उमेरका कारण आँखा कमजोर हुने र सन्तुलन घट्ने बुझेर, बाटो सम्याउने, उज्यालो बत्ती राखिदिने र धेरै गाह्रो नहुने काममा खटाउने" },
        { ja: "若い人よりも体力が有り余っているはずなので、一番重い荷物を一人で運ばせる", id: "Menyuruh pekerja tua memikul beban paling berat sendirian", ne: "युवाभन्दा बलियो हुन्छन् भन्दै सबैभन्दा गह्रौं भारी एक्लै बोकाउने" },
        { ja: "現場の通路に障害物をたくさん散らかして反射神経をテストする", id: "Menaruh rintangan di jalan untuk mengetes refleks pekerja tua", ne: "बाटोमा सामान छरेर वृद्धको चाल जाँच्न खोज्ने" },
        { ja: "安全保護具を一切渡さずに作業させる", id: "Membiarkan bekerja tanpa alat pelindung sama sekali", ne: "कुनै सुरक्षा सामग्री नदिई काममा लगाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.194参照】加齢に伴う視力・体力・平衡感覚の低下は本人が自覚しにくいため、段差の解消、照度確保、ゆとりある作業計画が求められます。",
      expId: "Pekerja senior rawan jatuh tersandung akibat penurunan sensorik. Singkirkan undakan tanah dan pastikan pencahayaan terang.",
      expNe: "उमेर ढल्किएका साथीहरूको आँखा र खुट्टा कमजोर हुने भएकाले बाटोका खाल्डाखुल्डी पुर्ने र उज्यालो बनाइदिनुपर्छ।"
    },
    {
      cat: "学科：熱中症と経口補水液（OS-1等）",
      q: "問23：熱中症の初期症状が現れた作業員に飲ませる飲料として、最も吸収効率が高く適しているものはどれですか。",
      q_id: "Soal 23: Minuman apakah yang PALING CEPAT diserap tubuh dan paling tepat diberikan saat pekerja mulai mengalami gejala sengatan panas?",
      q_ne: "प्रश्न २३: गर्मीले लट्ठ पर्न थालेको कामदारलाई शरीरमा तत्काल पानी पुर्याउन खुवाउनुपर्ने सबैभन्दा राम्रो पेय पदार्थ कुन हो?",
      options: [
        { ja: "経口補水液（水分とともに適度な塩分・電解質を含んだもの）", id: "Cairan Rehidrasi Oral / Minuman Isotonik Elektrolit (Oral Rehydration Solution)", ne: "जीवनजल / पुनर्जलीय घोल (नुन र खनिज मिसिएको स्पोर्ट्स ड्रिंक)" },
        { ja: "冷たいビールや日本酒などのアルコール類", id: "Bir dingin atau minuman beralkohol", ne: "चिसो बियर वा रक्सी" },
        { ja: "強烈なカフェインが入ったエナジードリンクの多量摂取", id: "Minuman berenergi tinggi kafein dosis tinggi", ne: "कडा क्याफिन भएको इनर्जी ड्रिंक" },
        { ja: "味の濃い熱い激辛スープ", id: "Sup kuah pedas mendidih", ne: "उम्लेको पिरो सुप" }
      ],
      answer: 0,
      expJa: "【テキスト P.190参照】大量発汗時は体内の塩分が失われているため、真水だけを飲むと血液が薄まり悪化します。塩分を含む「経口補水液」が最適です[cite: 20]。",
      expId: "Saat heatstroke, minum air murni saja justru memicu kram. Berikan cairan rehidrasi oral (ORS) atau isotonik bergaram.",
      expNe: "धेरै पसिना आउँदा सादा पानी मात्र खाए झन् गम्भीर हुन्छ। नुन र खनिज मिसिएको जीवनजल नै सबैभन्दा उत्तम हुन्छ।"
    },
    {
      cat: "学科：熱中症の分類（重症度Ⅲ度）",
      q: "問24：作業員が炎天下で「意識がない（返事をしない）、体が異常に熱い、全身がひきつっている（痙攣）」状態です。職長が取るべき行動はどれですか。",
      q_id: "Soal 24: Pekerja tak sadarkan diri, tubuh demam membara, dan kejang-kejang. Tindakan mutlak apakah yang WAJIB diambil detik itu juga?",
      q_ne: "प्रश्न २४: घाममा काम गर्दागर्दै कामदार बेहोस भयो, शरीर अत्यधिक तात्यो र जिउ काम्न थाल्यो। शोकुचोले तुरुन्त गर्नुपर्ने अनिवार्य काम कुन हो?",
      options: [
        { ja: "命に関わる最重症（Ⅲ度）であるため、直ちに119番通報して救急車を呼び、救急隊が到着するまで日陰で全身に水をかけ続け太い血管を冷やす", id: "Ini kondisi Darurat Mematikan Tingkat III! Segera panggil Ambulans 119, siram tubuh dengan air dingin, dan kompres es di nadi leher/paha", ne: "यो ज्यान जान सक्ने अति गम्भीर (स्तर ३) अवस्था हो! तत्काल ११९ मा एम्बुलेन्स बोलाउने, र गाडी नआउन्जेल शीतलमा राखेर जिउमा पानी खन्याउँदै घाँटी चिस्याउने" },
        { ja: "目を覚まさせるために口の中に無理やり熱いお茶を流し込む", id: "Memaksa menuangkan teh panas ke dalam mulut korban pingsan", ne: "होश खुलाउन बेहोस मान्छेको मुखमा जबर्जस्ती तातो चिया खन्याउने" },
        { ja: "夕方まで涼しい風が吹くのを待ってその場に寝かせておく", id: "Membiarkan tergeletak sampai sore menunggu angin sejuk", ne: "साँझसम्म आफैं चिसो होला भनी त्यहीँ छोडिदिने" },
        { ja: "誰にも見つからないようにシートでぐるぐる巻きにして隠す", id: "Membungkus korban dengan terpal agar tidak ketahuan orang", ne: "कसैले नदेखोस् भनेर त्रिपालले बेरेर लुकाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.190参照】意識障害や痙攣は重症度Ⅲ度で生命の危機です[cite: 20]。意識がない人に水を飲ませると窒息します。即座に119番通報し、体を冷却し続けます。",
      expId: "Tingkat 3 adalah darurat maut. Dilarang meminumkan air ke orang pingsan karena tersedak paru-paru. Telepon 119 detik itu juga!",
      expNe: "बेहोस भएको मान्छेलाई पानी खुवाउन खोजे सास फेर्ने नली थुनिएर तत्काल मर्छ। तुरुन्त ११९ एम्बुलेन्स बोलाएर जिउ चिस्याउनुपर्छ।"
    },
    {
      cat: "学科：安全施工サイクル・終業時の安全確認",
      q: "問25：1日の作業がすべて終わった終業時、各職長が元請の責任者と共に行う「終業時の安全確認」の内容として正しいものはどれですか。",
      q_id: "Soal 25: Pemeriksaan keselamatan apakah yang wajib dilakukan Shokucho bersama pengawas utama saat jam kerja proyek berakhir di sore hari?",
      q_ne: "प्रश्न २५: दिनभरिको काम सकिएपछि साँझको समयमा शोकुचोले मुख्य कम्पनीसँग मिलेर गरिने 'अन्तिम सुरक्षा जाँच' मा कुन कुरा हेरिन्छ?",
      options: [
        { ja: "火気使用場所の消火確認（残り火ゼロの確認）、現場出入口の施錠、資材の飛散・崩壊防止、および盗難防止の確認", id: "Cek pemadaman total titik api las, kunci gerbang proyek, ikat terpal agar tidak terbang ditiup angin malam, dan pastikan anti-maling", ne: "वेल्डिङ गरेको ठाउँमा आगो पूरै निभेको पक्का गर्ने, ढोकामा ताल्चा मार्ने, सामान हावाले नउडाउने गरी बाँध्ने र चोरी हुनबाट जोगाउने" },
        { ja: "明日の朝まで電動工具のスイッチをすべて入れっぱなしにして帰る", id: "Membiarkan semua mesin listrik menyala sepanjang malam", ne: "सबै विद्युतीय औजारहरू चालु नै छोडेर घर जाने" },
        { ja: "現場のゲートを全開にして誰でも自由に入れるようにしておく", id: "Membuka lebar gerbang agar orang luar bebas masuk", ne: "गेट खुल्लै छाडेर जोसुकैलाई पस्न दिने" },
        { ja: "ゴミを通路の中央に山積みにして放置する", id: "Menimbun sampah di tengah jalan proyek", ne: "बाटोको बीचमा फोहोर थुपारेर हिँड्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.187参照】終業時は「火気（消火確認）」「盗難・公衆災害防止（戸締まり・資材固定）」「明日の段取り」を確認して全員退場します[cite: 17]。",
      expId: "Sore hari wajib cek pemadaman api las, kunci pintu proyek, amankan material dari terpaan angin malam, dan matikan genset.",
      expNe: "काम सकिएपछि आगो कतै बाँकी छैन भन्ने हेर्ने, गेटमा ताल्चा लगाउने र राती हावाले सामान नउडाओस् भनी बाँधेर मात्र फर्कनुपर्छ।"
    },
    {
      cat: "学科：墜落防止ネットの設置基準",
      q: "問26：足場や鉄骨建て方において、手すりの設置が困難な箇所で作業員が墜落した際の衝撃を緩和するために張るネットは何ですか。",
      q_id: "Soal 26: Jaring pengaman apakah yang dibentangkan di bawah struktur baja untuk menangkap dan meredam benturan saat pekerja jatuh?",
      q_ne: "प्रश्न २६: अग्लो फलामको काम गर्दा रेलिङ लगाउन नसकिने ठाउँमा मानिस खसिहाले पनि जोगाउन मुनि टाँगिने सुरक्षा जालीलाई के भनिन्छ?",
      options: [
        { ja: "墜落防止ネット（安全ネット / 水平養生ネット）", id: "Jaring Pengaman Jatuh (Safety Net / Tsuiraku Boushi Net)", ne: "सुरक्षा जाली (सेफ्टी नेट / मान्छे खस्नबाट जोगाउने जाली)" },
        { ja: "魚釣り用の網", id: "Jaring penangkap ikan", ne: "माछा मार्ने जाल" },
        { ja: "テニスネット", id: "Jaring lapangan tenis", ne: "टेनिसको नेट" },
        { ja: "蚊帳（かや）", id: "Kelambu nyamuk kamar tidur", ne: "झुल" }
      ],
      answer: 0,
      expJa: "【安全ネット基準】手すり先行が困難な鉄骨建て方等では、墜落時の命綱として水平に「安全ネット（防網）」を規定の張り方で隙間なく展張します。",
      expId: "Safety net dipasang horizontal di bawah balok baja untuk menangkap tubuh pekerja jika sewaktu-waktu terpeleset jatuh.",
      expNe: "माथिबाट कामदार खसिहाले पनि जमिनमा बजारिन नदिन मुनि बलियो 'सेफ्टी नेट' अनिवार्य टाँगिन्छ।"
    },
    {
      cat: "学科：飛来落下災害の防止設備（朝顔）",
      q: "問27：仮設足場の外側に斜め上向きに突き出して設置し、足場から落下したボルトや工具が道路や歩行者に直撃するのを防ぐ防護棚は何ですか。",
      q_id: "Soal 27: Pelindung miring apakah yang dipasang menjorok ke luar pada perancah gedung bertingkat untuk menangkap serpihan/alat yang jatuh ke jalan?",
      q_ne: "प्रश्न २७: अग्लो घरको खटबाट औजार वा सामान खसेर बाटो हिँड्ने मान्छेलाई नलागोस् भनी खटको बाहिरतिर छड्के पारेर थापिने सुरक्षा तख्ता (जाली) लाई के भनिन्छ?",
      options: [
        { ja: "朝顔（あさがお / 落下物防護棚）", id: "Asagao (Protective Fan Catch Platform / Pelindung Jatuhan Material)", ne: "आसागाओ (सामान खस्न नदिने छड्के सुरक्षा छाना)" },
        { ja: "ひまわり", id: "Bunga Matahari", ne: "सूर्यमुखी" },
        { ja: "チューリップ", id: "Bunga Tulip", ne: "ट्युलिप" },
        { ja: "ベランダの手すり", id: "Pagar balkon rumah", ne: "बादलीको रेलिङ" }
      ],
      answer: 0,
      expJa: "【朝顔（防護棚）】朝顔の花に似ていることから呼ばれ、足場の外側に跳ね出して設置し、高所からの落下物が公道や歩行者に当たる公衆災害を防止します。",
      expId: "Asagao adalah kanopi miring di perancah yang berfungsi menangkap baut atau alat yang terjatuh agar tidak membunuh pejalan kaki di bawah.",
      expNe: "खटबाट खसेका सामान बाटोमा नझरुन् भनेर बाहिरतिर थापिने छड्के छानालाई जापानी भाषामा 'आसागाओ' भनिन्छ।"
    },
    {
      cat: "学科：ヒヤリハット報告の目的",
      q: "問28：現場で「あわや大怪我をしそうになったが、幸い怪我はなかった」というヒヤリハット体験をした際、職長が作業員に指導すべき正しい行動はどれですか。",
      q_id: "Soal 28: Jika pekerja mengalami insiden nyaris celaka (hiyari-hatto) tanpa luka, sikap apakah yang WAJIB ditanamkan Shokucho kepada pekerjanya?",
      q_ne: "प्रश्न २८: कार्यस्थलमा 'थोरैले गर्दा ठूलो चोट लाग्नबाट जोगिएको (हियारी-हाट्टो)' घटना हुँदा, शोकुचोले कामदारलाई कस्तो निर्देशन दिनुपर्छ?",
      options: [
        { ja: "叱責されることを恐れず直ちに報告させ、原因をチーム全体で分析して再発防止策を講じ、情報を全員で共有する", id: "Jangan takut dimarahi, segera laporkan ke tim, cari tahu akar masalahnya, dan ubah SOP agar tidak terulang pada orang lain", ne: "गाली खाइन्छ कि भनेर नडराई तुरुन्त रिपोर्ट गराउने, टोली मिलेर कारण खोज्ने र अर्को साथीलाई यस्तो नहोस् भनी सबैलाई सचेत गराउने" },
        { ja: "怒られるのが嫌なので誰にも言わずに秘密にして隠しておく", id: "Merahasiakannya karena takut dimarahi atau dipotong gaji", ne: "गाली खाइने डरले कसैलाई नभनी घटना लुकाउने" },
        { ja: "「怪我をしなかったのだから運が良かった」と笑って何もしない", id: "Tertawa santai dan menganggap itu cuma keberuntungan belaka", ne: "चोट लागेन भाग्यमानी रहेछु भन्दै हाँसेर टार्ने" },
        { ja: "ヒヤリハットを経験した作業員に罰金を払わせる", id: "Mendenda uang kepada pekerja yang nyaris celaka", ne: "घटनामा परेको साथीलाई जरिवाना तिराउने" }
      ],
      answer: 0,
      expJa: "【ヒヤリハットの共有】ヒヤリハットを隠すと、次は必ず死亡事故になります。非難禁止の原則のもと、原因をオープンにして現場全員で対策を共有します。",
      expId: "Hiyari-hatto wajib dilaporkan secara terbuka tanpa takut dihukum, demi memotong rantai penyebab sebelum memakan korban nyawa.",
      expNe: "थोरैले जोगिएका घटनाहरू लुकाएमा पछि कसैको ज्यान जान्छ। त्यसैले नलुकाई छलफल गरेर नियम सुधार्नुपर्छ।"
    },
    {
      cat: "学科：熱中症対策・プレクーリング（身体冷却）",
      q: "問29：真夏の酷暑作業において、作業前にあらかじめ体を冷やしておき、深部体温の上昇を遅らせる効果的な予防法は何ですか。",
      q_id: "Soal 29: Metode pencegahan apakah yang dilakukan dengan cara mendinginkan suhu inti tubuh sebelum mulai bekerja di cuaca terik?",
      q_ne: "प्रश्न २९: चर्को गर्मीमा काम थाल्नुअघि नै शरीरको भित्री तापक्रम बढ्न नदिन चिसो पेय वा आइस खाएर शरीर चिस्याउने विधिलाई के भनिन्छ?",
      options: [
        { ja: "プレクーリング（アイススラリーの摂取や作業前の冷房室待機）", id: "Pre-cooling (Meminum es serut halus 'Ice Slurry' atau berada di ruangan dingin sebelum kerja)", ne: "प्रि-कुलिङ (काम सुरु गर्नुअघि नै बरफको घोल पिउने वा चिसो एसी कोठामा बसेर शरीर चिस्याउने)" },
        { ja: "サウナに入って限界まで汗をかいておくこと", id: "Masuk sauna agar keluar keringat sebanyak mungkin sebelum kerja", ne: "काम थाल्नुअघि साउनामा पसेर पसिना निकाल्ने" },
        { ja: "熱いラーメンを食べて体温を40℃まで上げておくこと", id: "Makan ramen pedas panas agar suhu tubuh melonjak 40°C", ne: "तातो चाउचाउ खाएर शरीर झन् तताउने" },
        { ja: "ダウンジャケットを何重にも着込んで作業すること", id: "Memakai jaket musim dingin berlapis-lapis", ne: "जाडोको बाक्लो ज्याकेट लगाएर काम गर्ने" }
      ],
      answer: 0,
      expJa: "【最新の熱中症対策】作業前に微細な氷の粒子状飲料（アイススラリー）を飲んで体内から冷やす「プレクーリング」は、熱中症予防に極めて高い効果を発揮します。",
      expId: "Pre-cooling dengan ice slurry mendinginkan organ dalam tubuh lebih awal, memperpanjang daya tahan tubuh di bawah terik matahari.",
      expNe: "काममा निस्कनुअघि नै आइस घोल खाएर शरीर भित्रैबाट चिस्याउने 'प्रि-कुलिङ' विधिले हिटस्ट्रोकबाट पूर्ण बचाउँछ।"
    },
    {
      cat: "学科：ファン付き作業着の安全使用",
      q: "問30：現場で広く普及している「ファン付き作業着（空調服）」を使用する際の安全上の注意点として正しいものはどれですか。",
      q_id: "Soal 30: Manakah aturan keselamatan yang BENAR saat menggunakan rompi ber-kipas angin (Kuu-chou-fuku) di proyek konstruksi?",
      q_ne: "प्रश्न ३०: गर्मीमा लगाइने 'पंखा भएको ज्याकेट (कुउचौ-फुकु)' प्रयोग गर्दा पालना गर्नुपर्ने सही सुरक्षा नियम कुन हो?",
      options: [
        { ja: "ファンの吸気口に周囲のひもや粉じん、有害ガス、火花を吸い込ませないよう注意し、フルハーネス着用時は風路を塞がない専用インナー等を併用する", id: "Hindari tersedotnya percikan api/tali ke dalam kipas, dan gunakan rompi penahan celah angin khusus saat memakai harness agar aliran angin tidak terjepit", ne: "पंखामा आगोको झिल्का, फोहोर वा डोरी पस्न नदिने, र सेफ्टी हार्नेस लगाउँदा हावा रोकिन नदिन भित्र जाली भएको कपडा लगाउने" },
        { ja: "ファンの羽の中に指やドライバーを突っ込んで遊ぶ", id: "Memasukkan obeng atau jari ke baling-baling kipas", ne: "घुमिरहेको पंखाभित्र औंला वा पेचकस छिराउने" },
        { ja: "バッテリーを水たまりに沈めたまま強風で回し続ける", id: "Merendam baterai di genangan air saat kipas menyala", ne: "ब्याट्रीलाई पानीमा डुबाएर पंखा चलाउने" },
        { ja: "ファン付き作業着を着ていれば熱中症には絶対にならないので水は一切飲まない", id: "Tidak perlu minum air sama sekali karena sudah pakai baju kipas", ne: "पंखावाला ज्याकेट लगाएपछि कहिल्यै पानी पिउनु पर्दैन भनी नपिउने" }
      ],
      answer: 0,
      expJa: "【空調服の管理】ハーネスのベルトで服が締め付けられるとファンの風が全身に循環しなくなります。専用のスペーサーパッド等を用いて風路を確保します。",
      expId: "Pakai rompi khusus agar sabuk harness tidak mencekik aliran angin pendingin dari kipas baju kerja.",
      expNe: "सेफ्टी हार्नेसले ज्याकेट थिचेमा पंखाको हावा शरीरभरि घुम्न पाउँदैन, त्यसैले हावा छिर्ने प्याड प्रयोग गर्नुपर्छ।"
    },
    {
      cat: "学科：建設業法・下請代金の支払期日",
      q: "問31：元請業者が下請業者に対して工事代金を支払う期日について、建設業法で定められている上限ルールはどれですか。",
      q_id: "Soal 31: Berdasarkan UU Konstruksi, berapakah batas waktu maksimal pembayaran uang borongan dari kontraktor utama ke subkontraktor setelah pekerjaan selesai diuji?",
      q_ne: "प्रश्न ३१: निर्माण व्यवसाय ऐन अनुसार काम सम्पन्न भएपछि मुख्य कम्पनीले साना कम्पनी (सबकन्ट्र्याक्टर) लाई पैसा भुक्तानी गरिसक्नुपर्ने अन्तिम म्याद कति हो?",
      options: [
        { ja: "引渡しの申出があった日から50日以内で、できる限り短い期間内", id: "Maksimal dalam 50 hari sejak tanggal penyerahan hasil kerja selesai (dan secepat mungkin)", ne: "काम बुझाएको मितिबाट बढीमा ५० दिनभित्र (सकेसम्म छिटो भुक्तानी गर्नुपर्ने)" },
        { ja: "10年後", id: "10 tahun kemudian", ne: "१० वर्षपछि" },
        { ja: "代金は支払わずに逃げてもよい", id: "Boleh kabur tanpa membayar", ne: "पैसा नतिरी भाग्न पाइने" },
        { ja: "次の現場を受注するまで支払いは無期限延期できる", id: "Ditunda tanpa batas waktu sampai dapat proyek baru", ne: "नयाँ काम नपाउन्जेल जहिले तिरे पनि हुने" }
      ],
      answer: 0,
      expJa: "【建設業法第24条の6】元請負人は、下請負人からの引渡しの申出から「50日以内」で、かつできる限り短い期間内に下請代金を支払わなければなりません。",
      expId: "Pembayaran subkontraktor wajib lunas maksimal 50 hari sejak serah terima pekerjaan demi melindungi hak pekerja bawah.",
      expNe: "साना कम्पनीहरूको आर्थिक सुरक्षाका लागि काम सकिएको बढीमा ५० दिनभित्र मुख्य कम्पनीले सम्पूर्ण पैसा तिरिसक्नुपर्छ।"
    },
    {
      cat: "学科：足場板の重ね幅と緊結",
      q: "問32：足場の作業床において、足場板を長手方向に重ねて敷き並べる際、労働安全衛生規則で定められた「重ね幅」の基準はどれですか。",
      q_id: "Soal 32: Berapakah panjang tumpang tindih (overlap) minimal antar papan lantai perancah saat disambung bertumpuk menurut peraturan K3?",
      q_ne: "प्रश्न ३२: खटमा काठको वा फलामको फलेक ओछ्याउँदा एउटामाथि अर्को खप्ट्याइने भाग (ओभरल्याप) कम्तीमा कति सेमी हुनुपर्छ?",
      options: [
        { ja: "重ね幅は20cm以上とし、中央部で重なるようにして番線等で緊結する", id: "Panjang tumpang tindih minimal 20 cm ke atas dan diikat kuat dengan kawat di atas tumpuan", ne: "खप्ट्याइने लम्बाइ कम्तीमा २० सेमी वा त्योभन्दा बढी हुनुपर्छ र बलियो तारले बाँध्नुपर्छ" },
        { ja: "重ね幅は1cmで十分である", id: "Cukup tumpang tindih 1 cm", ne: "१ सेमी मात्र खप्ट्याए पुग्छ" },
        { ja: "重ねずに10cmの隙間を開けて飛び越えさせる", id: "Beri celah kosong 10 cm agar pekerja melompat", ne: "नखप्ट्याई १० सेमीको प्वाल छाडिदिने" },
        { ja: "ガムテープ1枚で仮止めするだけでよい", id: "Cukup ditempel selembar selotip kertas", ne: "कागजको टेपले मात्र टाँस्ने" }
      ],
      answer: 0,
      expJa: "【安衛則第563条】作業床の足場板を重ねて敷く場合は「20cm以上」重ね合わさなければなりません。端部に段差が生じるため、突き合わせ＋隙間3cm以下が推奨されます。",
      expId: "Overlap papan lantai perancah wajib minimal 20 cm di atas pipa tumpuan agar tidak terjungkit saat diinjak.",
      expNe: "फलेक टेक्दा पल्टिन नदिन दुई फलेकबीचको खप्टिने भाग कम्तीमा २० सेमी हुनैपर्छ र तारले बाँध्नुपर्छ।"
    },
    {
      cat: "学科：脚立の開き止め金具のロック",
      q: "問33：現場で脚立を開いて設置する際、作業員が登る前に必ず目視と手で確認しなければならない安全装置は何ですか。",
      q_id: "Soal 33: Alat pengaman apakah pada tangga lipat (kyatatsu) yang WAJIB dicek sudah terkunci sempurna sebelum dinaiki pekerja?",
      q_ne: "प्रश्न ३३: भर्याङ (क्याताचु) खोल्दा त्यो अचानक दोब्रिएर लड्न नदिन बीचमा भएको कुन सुरक्षा लक लागेको छ कि छैन जाँच्नै पर्छ?",
      options: [
        { ja: "開き止め金具（ステー）が確実に「カチッ」と完全に伸びきってロックされていること", id: "Engsel pengunci bukaan tangga (stay bar) sudah lurus total dan terkunci rapat", ne: "भर्याङको बीचमा भएको खुल्न रोक्ने फलामे लक (स्टे) पूर्ण रूपमा तन्किएर अड्किएको हुनुपर्ने" },
        { ja: "脚立に綺麗なシールが貼ってあること", id: "Ada stiker warna-warni yang indah di tangga", ne: "राम्रो स्टिकर टाँसिएको हुनुपर्ने" },
        { ja: "脚立の重量が100kg以上あること", id: "Berat tangga di atas 100 kg", ne: "भर्याङ १०० किलो गह्रौं हुनुपर्ने" },
        { ja: "脚立の足元に泥がたくさん付着していること", id: "Banyak lumpur menempel di kaki tangga", ne: "खुट्टामा धेरै हिलो लागेको हुनुपर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.184参照】開き止め金具がロックされていない脚立に登ると、荷重がかかった瞬間に脚が外側や内側に閉じて転倒・墜落します[cite: 14]。",
      expId: "Engsel pengunci bukaan (hirakidome) tangga lipat WAJIB terkunci lurus sempurna agar tangga tidak terlipat tiba-tiba saat dipijak.",
      expNe: "बीचको लक राम्ररी नलागेको क्याताचुमा चढ्ने बित्तिकै भर्याङ दोब्रिएर मान्छे लड्छ। त्यसैले लक हेर्नै पर्छ।"
    },
    {
      cat: "学科：有機溶剤作業主任者の職務",
      q: "問34：屋内でのウレタン塗装や防水工事など有機溶剤を取り扱う現場において、有機溶剤作業主任者が現場で行わなければならない職務はどれですか。",
      q_id: "Soal 34: Apakah tugas utama Yuuki Youzai Sagyou Shunensha (Mandor Khusus Pelarut Organik) di lokasi kerja tertutup?",
      q_ne: "प्रश्न ३४: कोठाभित्र थिनर वा रङको काम गर्दा खटाइने 'अर्ग्यानिक केमिकल कार्य प्रमुख' को मुख्य जिम्मेवारी के हो?",
      options: [
        { ja: "局所排気装置等の換気設備の稼働状況の点検、保護具（防毒マスク等）の着用状況の監視、および作業手順の直接指揮", id: "Memeriksa berfungsinya kipas exhaust ventilasi, memastikan pemakaian masker gas kimia, dan memimpin SOP di tempat", ne: "हावा बाहिर फाल्ने पङ्खा चलेको छ कि छैन जाँच्ने, सबैले ग्यास मास्क लगाएको हेर्ने र कामको प्रत्यक्ष नेतृत्व गर्ने" },
        { ja: "作業員にシンナーの匂いを嗅がせて感想を聞くこと", id: "Menyuruh pekerja mencium bau thinner", ne: "कामदारलाई थिनर सुँघ्न लगाउने" },
        { ja: "窓や出入口をすべて閉め切って部屋を密閉すること", id: "Menutup rapat semua jendela dan pintu agar kedap", ne: "झ्याल-ढोका सबै बन्द गरेर कोठा थुन्ने" },
        { ja: "防毒マスクを外して作業するよう命令すること", id: "Memerintahkan pekerja melepas masker gas", ne: "मास्क फुकालेर काम गर भन्ने" }
      ],
      answer: 0,
      expJa: "【有機則第19条】有機溶剤作業主任者は、換気装置の点検、保護具（防毒マスク・不浸透性手袋）の着用励行、中毒防止の指揮を行います。",
      expId: "Mandor ahli pelarut organik wajib memastikan sirkulasi blower berjalan dan masker gas respirator terpasang rapat di hidung semua pekerja.",
      expNe: "विषादी प्रमुखले पङ्खा चलाएर विषालु हावा बाहिर फाल्ने र सबैलाई ग्यास मास्क लगाउन लगाउने काम गर्नुपर्छ।"
    },
    {
      cat: "学科：酸欠危険場所での事故救助",
      q: "問35：地下ピット内で同僚が酸素欠乏症（または硫化水素中毒）で突然倒れました。周囲にいた作業員が救助に向かう際、絶対にやってはならない行動はどれですか。",
      q_id: "Soal 35: Rekan kerja tiba-tiba pingsan di dalam tangki bawah tanah (ruang minim oksigen). Manakah tindakan yang DILARANG KERAS dilakukan penolong?",
      q_ne: "प्रश्न ३५: जमिन मुनिको खाल्डोमा साथी अक्सिजनको कमीले एक्कासि बेहोस भएर लड्यो। उद्धार गर्न जाँदा झुक्किएर पनि गर्न नहुने 'कडा निषेधित' काम कुन हो?",
      options: [
        { ja: "空気呼吸器や送気マスクを着用せず、自分の息を止めただけで慌てて穴の中に飛び込んで救助しようとすること", id: "Panik melompat masuk ke dalam lubang tanpa memakai tabung oksigen SCBA (hanya bermodal menahan napas)", ne: "अक्सिजन सिलिन्डर वा मास्क नलगाई, सास मात्र रोकेर हतारिँदै खाल्डोभित्र उद्धार गर्न हामफाल्नु" },
        { ja: "直ちに周囲に大声で知らせ、119番通報と現場本部へ応援を要請する", id: "Berteriak minta tolong ke luar, panggil 119 dan kantor proyek", ne: "तुरुन्त ठूलो स्वरले गुहार माग्ने, ११९ एम्बुलेन्स र अफिसमा खबर गर्ने" },
        { ja: "送風機（大型ファン）を作動させて穴の中へ全力で新鮮な空気を送り込む", id: "Nyalakan blower angin darurat secepat mungkin untuk memasukkan udara segar", ne: "पङ्खा चलाएर खाल्डोभित्र प्रशस्त ताजा हावा पठाउन सुरु गर्ने" },
        { ja: "救助用の自給式呼吸器（SCBA）を装着し、命綱を付けて2人以上で進入する", id: "Memakai tabung pernapasan mandiri dan tali penolong sebelum masuk berdua", ne: "अक्सिजन सिलिन्डर लगाएर शरीरमा सुरक्षा डोरी बाँधी कम्तीमा २ जना भएर भित्र पस्ने" }
      ],
      answer: 0,
      expJa: "【酸欠救助の二次災害防止】酸欠空気は一呼吸吸い込むだけで即座に失神します。無防備で助けに入った仲間がバタバタと倒れる二次災害が後を絶ちません。空気呼吸器の着用が絶対条件です。",
      expId: "Jangan sekali-kali masuk menolong korban pingsan di ruang tertutup tanpa tabung oksigen! Anda akan langsung pingsan dalam 1 tarikan napas.",
      expNe: "अक्सिजन नभएको ठाउँमा एक सासमै मान्छे बेहोस हुन्छ। अक्सिजन सिलिन्डर नलगाई साथी बचाउन पस्दा आफैं पनि मरिन्छ।"
    },
    {
      cat: "学科：熱中症と塩分補給（水だけを飲む危険性）",
      q: "問36：猛暑の現場で大量に汗をかいた作業員が、「真水（冷水）だけ」を大量にガブ飲みした場合に起こる危険な症状（自発的脱水症）は何ですか。",
      q_id: "Soal 36: Bahaya medis apakah yang terjadi jika pekerja yang mandi keringat di musim panas HANYA meminum air putih tawar dalam jumlah banyak tanpa garam?",
      q_ne: "प्रश्न ३६: गर्मीमा अत्यधिक पसिना बगेको बेला कुनै कामदारले नुन नभएको 'सादा पानी मात्र' धेरै पिएमा शरीरमा कस्तो खतरा उत्पन्न हुन्छ?",
      options: [
        { ja: "血液中のナトリウム（塩分）濃度が急激に薄まり、筋肉の激痛や痙攣（こむら返り）を引き起こす低ナトリウム血症", id: "Kadar natrium (garam) darah anjlok drastis (hiponatremia), memicu kram otot parah dan mual muntah (dehidrasi spontan)", ne: "रगतमा नुनको मात्रा अत्यधिक घटेर मांसपेशीहरू कडा भई बाउँडिने (खुट्टा बटारिने) र बेहोस हुने खतरा" },
        { ja: "身体が急激に筋肉質になって怪力になる", id: "Tubuh mendadak menjadi sangat berotot", ne: "शरीरमा अचानक धेरै तागत आउने" },
        { ja: "体温がマイナス10℃まで凍りつく", id: "Suhu tubuh membeku hingga minus 10°C", ne: "शरीर चिसो भएर जम्ने" },
        { ja: "風邪が一瞬で完治する", id: "Penyakit flu langsung sembuh seketika", ne: "रुघाखोकी तत्काल निको हुने" }
      ],
      answer: 0,
      expJa: "【自発的脱水症】汗で塩分が出た後に水だけを飲むと、体液の濃度を保とうとして体が水分を尿として排泄してしまい、かえって脱水が悪化します。必ず0.1〜0.2%の食塩水を補給します。",
      expId: "Minum air tawar saja saat mandi keringat menyebabkan darah terlalu encer, memicu kram otot hebat (hiponatremia). Wajib minum elektrolit bergaram.",
      expNe: "पसिना निस्केपछि सादा पानी मात्र धेरै पिए रगतमा नुन घट्छ र पूरै शरीर बाउँडिएर ढल्छ। त्यसैले जीवनजल अनिवार्य चाहिन्छ।"
    },
    {
      cat: "学科：熱中症搬送時の救急隊への情報提供",
      q: "問37：熱中症の作業員を救急車で病院へ搬送する際、職長が救急隊員や医師に必ず正確に伝えなければならない現場情報はどれですか。",
      q_id: "Soal 37: Informasi penting apakah yang WAJIB dilaporkan Shokucho kepada petugas ambulans/dokter saat pekerja terkena heatstroke dievakuasi?",
      q_ne: "प्रश्न ३७: हिटस्ट्रोक भएको बिरामीलाई एम्बुलेन्समा अस्पताल पठाउँदा शोकुचोले डाक्टरलाई अनिवार्य टिपाइदिनुपर्ने महत्त्वपूर्ण जानकारी के हो?",
      options: [
        { ja: "発症前の作業環境（直射日光や室温、WBGT値）、作業時間、倒れた瞬間の状況、意識の変化、および現場で実施した冷却・水分補給の処置内容", id: "Suhu/WBGT area kerja, durasi jam kerja, kronologi saat ambruk, grafik kesadaran, serta rincian kompres es/air yang sudah diberikan di proyek", ne: "काम गरेको ठाउँको तापक्रम/WBGT, कति घण्टा काम गरेको थियो, ढल्दाको अवस्था, होसको अवस्था र फिल्डमा बरफ लगाएको विवरण" },
        { ja: "現場事務所の家賃の金額", id: "Biaya sewa kantor proyek", ne: "साइट अफिसको कोठा भाडा" },
        { ja: "本日の工事の出来高パーセンテージ", id: "Persentase progres proyek hari ini", ne: "आज काम कति प्रतिशत सकियो भन्ने हिसाब" },
        { ja: "作業員が乗っている車のローン残高", id: "Sisa cicilan kredit mobil pekerja", ne: "बिरामीको गाडीको ऋण कति बाँकी छ" }
      ],
      answer: 0,
      expJa: "【救急隊への引継ぎ】どのような環境で何時間作業し、現場でどんな応急処置（冷却・水分）を行ったかの正確な伝達が、病院での迅速な救命治療を左右します。",
      expId: "Laporkan riwayat suhu kerja, durasi terpapar panas, dan tindakan P3K yang telah dilakukan agar dokter bisa memberi infus tepat sasaran.",
      expNe: "बिरामी कति गर्मीमा कति समय खटिएको थियो र कार्यस्थलमा कस्तो प्राथमिक उपचार गरियो भन्ने कुरा डाक्टरलाई प्रष्ट बताउनुपर्छ।"
    },
    {
      cat: "学科：高所足場からの部材投下の禁止",
      q: "問38：足場の解体作業において、作業員が解体した単管パイプやクランプを地上へ下ろす際のルールとして正しいものはどれですか。",
      q_id: "Soal 38: Manakah aturan yang BENAR saat menurunkan pipa atau klem perancah bekas bongkaran ke tanah?",
      q_ne: "प्रश्न ३८: खट भत्काउँदा निस्किएका फलामका पाइप र क्ल्याम्पहरू भुइँमा झार्ने सही नियम कुन हो?",
      options: [
        { ja: "高所から下へ投げ落とす（投下する）ことは絶対に禁止し、ウインチやロープ吊り下ろし、または手渡しで安全に下ろす", id: "DILARANG KERAS melempar barang dari ketinggian! Turunkan memakai tali tambang, katrol hoist, atau estafet tangan ke tangan", ne: "माथिबाट तल सामान फाल्न (हुत्याउन) कडा प्रतिबन्ध छ! डोरीले बाँधेर, क्रेनबाट वा हातैले एकअर्कालाई समाताएर सुरक्षित झार्ने" },
        { ja: "下に人がいないことを祈りながら、目をつぶって思い切り投げ捨てる", id: "Melempar sekuat tenaga sambil memejamkan mata dan berdoa", ne: "तल कोही छैन होला भन्दै आँखा चिम्लेर बेस्सरी तल फालिदिने" },
        { ja: "パイプを槍のように地面に突き刺すように落とす", id: "Menjatuhkan pipa menukik tajam seperti tombak ke tanah", ne: "पाइपलाई भाला जस्तै जमिनमा खोप्ने गरी झार्ने" },
        { ja: "解体材はすべて足場の最上階に山積みにしたまま現場を離れる", id: "Menumpuk semua pipa di lantai teratas lalu ditinggal pergi", ne: "भत्काएका सामान सबै माथि नै थुपारेर घर हिँड्ने" }
      ],
      answer: 0,
      expJa: "【安衛則第520条】事業者は、高所から物体を投下するときは、投下設備（ダストシュート等）を設け、監視人を配置しなければならず、原則として手渡しや吊り下ろしで下ろします。",
      expId: "Dilarang melempar besi perancah ke tanah. Turunkan dengan tali katrol tambang atau estafet tangan.",
      expNe: "अग्लो ठाउँबाट पाइप वा क्ल्याम्प तल फाल्न पाइँदैन। डोरीले बाँधेर वा हातैले बिस्तारै तल झार्नुपर्छ।"
    },
    {
      cat: "学科：保護具の耐用年数と点検",
      q: "問39：作業員が毎日着用するヘルメット（労災保護帽）および墜落制止用器具（フルハーネス）の点検・交換基準として正しいものはどれですか。",
      q_id: "Soal 39: Manakah standar pemeriksaan dan penggantian APD (helm proyek & full harness) yang BENAR?",
      q_ne: "प्रश्न ३९: कामदारले दैनिक प्रयोग गर्ने सेफ्टी हेल्मेट र सेफ्टी हार्नेसको म्याद र जाँच सम्बन्धी कुन नियम सही छ?",
      options: [
        { ja: "一度でも大きな衝撃を受けたものは外見に異常がなくても直ちに破棄し、熱や紫外線による経年劣化を考慮してメーカー推奨期間（保護帽は3年等）で定期交換する", id: "Alat yang pernah kena benturan keras WAJIB DIBUANG meski tampak mulus, dan ganti rutin sesuai umur pakai (helm plastik maks 3 tahun)", ne: "एकपटक ठूलो धक्का खाएको सामान बाहिरबाट सग्लो देखिए पनि तुरुन्त फाल्ने र तोकिएको समय (हेल्मेटको हकमा ३ वर्ष) मा नयाँ फेर्ने" },
        { ja: "割れ目が入ったヘルメットもガムテープを貼れば100年間使える", id: "Helm retak bisa dipakai 100 tahun asal ditempel lakban", ne: "फुटेको हेल्मेटमा टेप टाँसेर १०० वर्षसम्म लगाउन मिल्छ" },
        { ja: "ベルトが擦り切れて半分ちぎれそうなフルハーネスもそのまま使う", id: "Tetap memakai tali harness yang sudah sobek separuh", ne: "हार्नेसको फित्ता आधा च्यातिए पनि त्यही लगाइरहने" },
        { ja: "保護具は洗うと壊れるので絶対に掃除してはならない", id: "Dilarang membersihkan APD karena bisa rusak", ne: "सुरक्षा सामग्री धोए बिग्रिन्छ भन्दै कहिल्यै सफा नगर्ने" }
      ],
      answer: 0,
      expJa: "【保護具の耐用限度】ヘルメット（熱可塑性樹脂製）は使用開始から3年以内、フルハーネスは3〜5年での交換が推奨されています。大きな衝撃を受けたものは即廃棄です。",
      expId: "Helm yang pernah kejatuhan batu wajib langsung diafkir. Umur pakai helm plastik standar industri adalah maksimal 3 tahun.",
      expNe: "एकपटक सामान खसेर ठोक्किएको हेल्मेट तत्काल फाल्नुपर्छ र सामान्यतया ३ वर्षमा नयाँ हेल्मेट फेर्नुपर्छ।"
    },
    {
      cat: "学科：職長会の活動と役割",
      q: "問40：大規模な建設現場において、各専門工事業者の職長たちが集まって自主的な安全衛生活動を展開する組織「職長会」の目的は何ですか。",
      q_id: "Soal 40: Apakah tujuan utama dibentuknya Paguyuban Mandor (Shokuchou-kai) yang beranggotakan seluruh mandor subkontraktor di proyek?",
      q_ne: "प्रश्न ४०: ठूला कार्यस्थलहरूमा सबै कम्पनीका शोकुचोहरू मिलेर बनाइने 'शोकुचो परिषद् (शोकुचो-काइ)' को मुख्य उद्देश्य के हो?",
      options: [
        { ja: "元請と緊密に連携しながら、業者間のコミュニケーションを深め、混在作業の危険防止、現場の5S美化、安全マナー向上を自主的に推進するため", id: "Bekerja sama dengan kontraktor utama untuk mempererat komunikasi lintas subkon, mencegah bahaya kerja silang, dan menjaga kebersihan 5S bersama", ne: "मुख्य कम्पनीसँग मिलेर सबै कम्पनीका कामदारबीच भाइचारा बढाउने, एकअर्काको काममा हुने खतरा हटाउने र ५एस सरसफाइ आफैं अगुवाइ गरेर चलाउने" },
        { ja: "元請の所長に反発して工事をストップさせるため", id: "Untuk melawan pengawas utama dan mogok kerja", ne: "हाकिमको विरोध गरेर काम ठप्प पार्न" },
        { ja: "現場事務所の裏でサボってタバコを吸う仲間を作るため", id: "Mencari teman merokok untuk bolos kerja di belakang kantor", ne: "पछाडि लुकेर चुरोट खाने साथी खोज्न" },
        { ja: "他の業者の道具を盗み合って自社の工具を増やすため", id: "Saling mencuri alat kerja perusahaan lain", ne: "अरुको औजार चोरेर आफ्नो बनाउन" }
      ],
      answer: 0,
      expJa: "【職長会の役割】職長会は、現場全体のリーダー層が業種の垣根を越えて結束し、自主的なパトロールやマナー向上運動を推進する極めて重要な組織です。",
      expId: "Shokuchou-kai adalah wadah persatuan seluruh mandor proyek untuk bersama-sama mewujudkan Zero Accident di lokasi.",
      expNe: "शोकुचो परिषद्ले विभिन्न कम्पनीका कामदारहरूलाई एकताबद्ध बनाई कार्यस्थललाई सफा र दुर्घटनामुक्त बनाउन ठूलो भूमिका खेल्छ।"
    },

    // ==========================================
    // 【実技試験パート：25問（問41〜問65）】
    // ==========================================
    {
      cat: "実技：オートレベルの測量計算（ベンチマーク）",
      q: "問41：地盤の基準点（ベンチマーク：高さBM = +10.000m）に立てたスタッフの読み値が「1.500m」でした。その後、掘削した床付け面に立てたスタッフの読み値が「3.000m」であった場合、その床付け面の正確な高さ（地盤高）はいくらですか。",
      q_id: "Soal 41: Bench Mark (BM) tanah = +10,000 m. Bacaan rambu di BM = 1,500 m (Backsight). Bacaan rambu di dasar galian = 3,000 m (Foresight). Berapakah elevasi dasar galian tersebut?",
      q_ne: "प्रश्न ४१: जमिनको मुख्य बिन्दुको उचाइ (BM) = +१०.००० मिटर छ। त्यहाँ स्टाफको नाप १.५०० मिटर देखियो। त्यसपछि खाल्डो खनेको सतहमा स्टाफ राख्दा नाप ३.००० मिटर देखियो भने, त्यो खाल्डोको भुइँको उचाइ कति हो?",
      options: [
        { ja: "+8.500m（器高 10.000 + 1.500 = 11.500m、地盤高 11.500 - 3.000 = +8.500m）", id: "+8,500 m (Tinggi Garis Bidik = 10,000 + 1,500 = 11,500 m; Elevasi Tanah = 11,500 - 3,000 = +8,500 m)", ne: "+८.५०० मिटर (यन्त्रको उचाइ = १०.००० + १.५०० = ११.५०० मिटर; जमिनको उचाइ = ११.५०० - ३.००० = +८.५०० मिटर)" },
        { ja: "+14.500m", id: "+14,500 m", ne: "+१४.५०० मिटर" },
        { ja: "+0.500m", id: "+0,500 m", ne: "+०.५०० मिटर" },
        { ja: "-3.000m", id: "-3,000 m", ne: "-३.००० मिटर" }
      ],
      answer: 0,
      expJa: "【レベル測量の計算】機械の視準線の高さ（器高式）＝ BM高さ（10.000m）＋ 後視（1.500m）＝ 11.500m。求めたい地盤高 ＝ 器高（11.500m）− 前視（3.000m）＝ +8.500m です。",
      expId: "Tinggi Instrumen = 10 + 1,5 = 11,5 m. Elevasi Tanah = 11,5 - 3,0 = 8,500 m.",
      expNe: "यन्त्रको उचाइ ११.५ मिटरबाट पछिल्लो नाप ३.० मिटर घटाउँदा सही उचाइ +८.५ मिटर निस्कन्छ।"
    },
    {
      cat: "実技：スラブ配筋のダブル配筋（上筋と下筋）",
      q: "問42：RC造の床（スラブ）配筋において、上筋と下筋の上下2段の網目を所定の間隔に保ち、上筋が作業員の体重で踏み潰れて沈下するのを防ぐために配置する金具は何ですか。",
      q_id: "Soal 42: Kursi besi penyangga apakah yang dipasang di antara jaring besi atas dan bawah pada pelat lantai (slab) agar besi atas tidak ambles saat diinjak?",
      q_ne: "प्रश्न ४२: भुइँको ढलान गर्दा माथिल्लो रडको जाली र तल्लो रडको जालीको बीचमा निश्चित दूरी राख्न र मान्छेले टेक्दा माथिल्लो जाली नदबियोस् भनी बीचमा हालिने फलामे कुर्सी आकारको स्ट्यान्ड कुन हो?",
      options: [
        { ja: "スペーサー（バーサポート / スラブ用ウマ金具）", id: "Bar Support / Kursi Cakar Ayam Besi Pelat (Uma-kanagu)", ne: "बार सपोर्ट (उमा-खानागु / रडको कुर्सी स्ट्यान्ड)" },
        { ja: "フォームタイ", id: "Form-tie", ne: "फर्म-टाई" },
        { ja: "丸セパ", id: "Maru-sepa", ne: "मारु-सेपा" },
        { ja: "アンカーボルト", id: "Anchor Bolt", ne: "एङ्कर बोल्ट" }
      ],
      answer: 0,
      expJa: "【テキスト P.107参照】スラブの上筋はコンクリート打設中に踏まれやすいため、頑丈な「ウマ金具（バーサポート）」を所定間隔（約1m内外）で配置して上筋の沈下を防ぎます[cite: 12]。",
      expId: "Bar support (uma-kanagu) menyangga jaring besi atas agar selimut beton bagian atas pelat tetap presisi sesuai cetak biru.",
      expNe: "ढलानको माथिल्लो जालीलाई मान्छेले कुल्चेर तल नदबाओस् भन्नका लागि 'उमा' कुर्सी स्ट्यान्ड बीचमा राखिन्छ।"
    },
    {
      cat: "実技：柱・壁のかぶり厚さ不足の欠陥写真判断",
      q: "問43：コンクリート打設前の配筋検査において、型枠と主筋のすき間が著しく狭く、鉄筋が型枠に接触している状態を発見しました。職長が指示すべき是正判断はどれですか。",
      q_id: "Soal 43: Pada inspeksi pembesian, terlihat besi utama tiang menempel rapat ke papan bekisting (selimut beton nol). Tindakan perbaikan apakah yang WAJIB diperintahkan Shokucho?",
      q_ne: "प्रश्न ४३: ढलान गर्नुअघि रड जाँच्दा, पिलरको रड फर्माको काठमा ठ्याक्कै टाँसिएको (कभर पुग्दै नपुगेको) भेटियो। शोकुचोले तुरुन्त कस्तो सुधार गर्न लगाउनुपर्छ?",
      options: [
        { ja: "そのまま打設すると将来必ずサビてコンクリートが爆裂破損するため、規定寸法のドーナツ型スペーサーを鉄筋に取り付けて型枠との離隔を確保する", id: "Wajib pasang spacer donut berukuran standar untuk memundurkan besi dari bekisting, karena menempelnya besi memicu karat dan beton pecah meledak", ne: "तोकिएको साइजको गोलो डोनट स्पेसर रडमा हालेर फर्माबाट पर हटाउने, नत्र पछि रडमा खिया लागेर ढलान पड्किन्छ" },
        { ja: "見えなくなるからそのまま生コンを流し込んで隠してしまう", id: "Langsung cor saja untuk menutup-nutupi karena tidak akan kelihatan dari luar", ne: "ढलान गरेपछि देखिन्न भन्दै त्यत्तिकै मसला खन्याउने" },
        { ja: "鉄筋をガスバーナーで炙って細く削る", id: "Membakar besi dengan api gas agar mengecil", ne: "रडलाई आगोले तताएर पातलो बनाउने" },
        { ja: "型枠を外側からハンマーで叩いて外側へ広げる", id: "Memukul bekisting dari luar dengan palu", ne: "फर्मालाई बाहिरबाट हम्बरले हिर्काउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.153参照】かぶり厚さがゼロの状態で打設すると、雨水が鉄筋に達してサビが膨張し、コンクリートが剥落する爆裂現象が起きます。必ずスペーサーを入れます。",
      expId: "Besi yang menempel ke bekisting akan langsung berkarat dan merusak struktur. Pasang spacer donut saat itu juga!",
      expNe: "रड फर्मामा टाँसिएमा ढलानको आयु सकिन्छ। त्यसैले डोनट स्पेसर हालेर फर्माबाट रडलाई टाढा राख्नै पर्छ।"
    },
    {
      cat: "実技：鉄筋の継手位置（圧接位置のずらし）",
      q: "問44：梁や柱の主筋をガス圧接で接合する際、構造計算上の弱点とならないよう、隣り合う鉄筋どうしの圧接位置（継手位置）に対して守らなければならない離隔距離はどれですか。",
      q_id: "Soal 44: Berapakah jarak selang-seling minimal antara titik sambungan las gas (assetsu) pada dua batang besi beton yang berdampingan?",
      q_ne: "प्रश्न ४४: पिलर वा बिमको छेउछाउका दुईवटा रडहरूलाई ग्यास वेल्डिङ गर्दा, जोर्नीहरू एउटै ठाउँमा नपरी एकअर्काबाट कम्तीमा कति दूरी फरक (छड्के) पारेर जोड्नुपर्छ?",
      options: [
        { ja: "隣り合う鉄筋の圧接位置は、相互に「400mm以上」ずらして配置する", id: "Titik sambungan las pada besi yang bersebelahan wajib digeser selang-seling minimal 400 mm ke atas/bawah", ne: "छेउको रडको जोर्नीभन्दा कम्तीमा '४०० मिमी (४० सेमी)' माथि वा तल सारेर जोड्नुपर्छ" },
        { ja: "すべての鉄筋をまったく同じ高さの一直線上に揃えて圧接する", id: "Semua titik las harus sejajar di satu garis ketinggian yang persis sama", ne: "सबै रडका जोर्नीहरू एउटै सिधा रेखामा पारेर जोड्ने" },
        { ja: "1mmだけずらせば十分である", id: "Cukup digeser 1 mm", ne: "१ मिमी मात्र सारे पुग्छ" },
        { ja: "継手位置をずらす必要は全くない", id: "Tidak perlu digeser sama sekali", ne: "दूरी सार्नै पर्दैन" }
      ],
      answer: 0,
      expJa: "【鉄筋継手基準】同じ断面に継手が集中すると強度が著しく低下するため、隣り合う主筋のガス圧接位置は相互に「400mm以上」離して千鳥状に配置します。",
      expId: "Titik sambung las wajib dibuat zigzag berselang-seling minimal 400 mm agar tidak terjadi kelemahan struktur di satu garis patah.",
      expNe: "सबै जोर्नीहरू एउटै ठाउँमा परे भूकम्पमा त्यहीँबाट भाँचिन्छ। त्यसैले जोर्नी कम्तीमा ४०० मिमी तल-माथि पारेर जोड्नुपर्छ।"
    },
    {
      cat: "実技：型枠の締付け金物（フォームタイの向き）",
      q: "問45：壁型枠に単管パイプを流してフォームタイを取り付ける際、座金を締め付ける正しい状態はどれですか。",
      q_id: "Soal 45: Bagaimanakah pemasangan pengunci pelat Form-tie pada bekisting dinding yang BENAR?",
      q_ne: "प्रश्न ४५: भित्ताको फर्मामा पाइप राखी 'फर्म-टाई' कस्दा वासर र नटको सही अवस्था कुन हुनुपर्छ?",
      options: [
        { ja: "単管パイプが2本平行に密着して挟み込まれ、フォームタイの座金がパイプに均等に圧着してガタつきなく締め付けられている状態", id: "Dua pipa perancah dijepit rapat sejajar, dan pelat washer form-tie menekan kuat rata tanpa goyang", ne: "दुईवटा फलामका पाइपहरू समानान्तर रूपमा च्यापिएर, फर्म-टाईको वासरले नहल्लिने गरी बराबर कसेको अवस्था" },
        { ja: "パイプが斜めに外れかかっており、ナットが指で回るほど緩んでいる状態", id: "Pipa miring mau copot dan mur kendor bisa diputar jari", ne: "पाइप फुत्किन लागेको र हातैले घुम्ने गरी नट खुकुलो भएको अवस्था" },
        { ja: "単管パイプを1本も通さず、合板の上に直接フォームタイを締めている状態", id: "Tanpa pipa penguat dan mur langsung menjepit triplek kayu", ne: "कुनै पाइप नै नहाली काठको बोर्डमा सिधै नट कसेको अवस्था" },
        { ja: "フォームタイのネジ山がすべて潰れてナットが入らない状態", id: "Drat baut rusak sehingga mur macet tidak bisa masuk", ne: "थ्रेड बिग्रिएर नट नै नछिरेको अवस्था" }
      ],
      answer: 0,
      expJa: "【テキスト P.158参照】壁型枠は単管パイプ（縦バタ・横バタ）を2本抱き合わせ、フォームタイで堅固に締め付けてコンクリートの巨大な側圧に耐える構造にします。",
      expId: "Form-tie menjepit pipa ganda dengan kuat untuk menahan dorongan adukan beton cair agar triplek tidak meledak jebol.",
      expNe: "फर्मा फुट्न नदिन दुईवटा पाइपलाई बीचमा राखेर फर्म-टाईको नट बेस्सरी कस्नुपर्छ।"
    },
    {
      cat: "実技：パイプサポートの継ぎ足し禁止（P.158）",
      q: "問46：型枠支保工において、スラブを支えるパイプサポートの長さが足りない場合、法令上固く禁止されている危険な施工はどれですか。",
      q_id: "Soal 46: Tindakan bahaya apakah yang DILARANG KERAS oleh hukum jika tiang penyangga bekisting (pipe support) kurang panjang?",
      q_ne: "प्रश्न ४६: ढलान अड्याउने फलामे टेको (पाइप सपोर्ट) को उचाइ नपुग्दा कानुनले कडा प्रतिबन्ध लगाएको 'खतरनाक काम' कुन हो?",
      options: [
        { ja: "パイプサポートを3本以上ボルトやつなぎ金具で縦に継ぎ足して使用すること（パイプサポートは原則2本までしか継げない）", id: "Menyambung 3 batang pipe support secara vertikal bertumpuk (Hukum melarang menyambung lebih dari 2 batang)", ne: "पाइप सपोर्टलाई ३ वटा वा त्योभन्दा बढी जोडेर अग्लो बनाउनु (कानुनले बढीमा २ वटा भन्दा बढी जोड्न दिँदैन)" },
        { ja: "専用の枠組支保工やシステム支保工に変更して施工すること", id: "Mengganti dengan sistem perancah modular shoring yang kokoh", ne: "नयाँ बलियो सिस्टम टेको फेरेर काम गर्नु" },
        { ja: "パイプサポートの足元に根がらみを設けること", id: "Memasang pipa pengikat bawah (negarami) di kaki tiang", ne: "टेकोको फेदमा नेगारामी पाइप बाँध्नु" },
        { ja: "高さ2mごとに水平つなぎを2方向に設けること", id: "Memasang pengikat horizontal di 2 arah setiap tinggi 2 meter", ne: "२ मिटरको उचाइमा तेर्सो पाइपले कस्नु" }
      ],
      answer: 0,
      expJa: "【安衛則第242条】パイプサポートを継いで用いるときは「3本以上継いではならない（2本まで）」と定められています。多く継ぐと座屈強度が激減して倒壊します。",
      expId: "Pipe support maksimal hanya boleh disambung 2 batang dengan 4 baut. Dilarang keras menyambung 3 batang atau lebih!",
      expNe: "टेकोको लम्बाइ नपुगे पनि ३ वटा जोड्न पाइँदैन (बढीमा २ वटा मात्र जोड्न मिल्छ), नत्र ढलानको भारले बीचबाटै भाँच्चिन्छ।"
    },
    {
      cat: "実技：コンクリートスランプ試験の読み取り",
      q: "問47：現場に到着した生コンクリートの受け入れ検査において、スランプコーン（高さ30cm）を引き上げた直後、コンクリート頂部の中央が沈み落ちた寸法が「18cm」でした。この生コンのスランプ値は何cmですか。",
      q_id: "Soal 47: Pada uji slump beton segar, setelah kerucut slump (tinggi 30 cm) diangkat, adukan beton turun luluh sejauh 18 cm. Berapakah nilai slump beton tersebut?",
      q_ne: "प्रश्न ४७: कार्यस्थलमा आएको ताजा कंक्रीटको जाँच गर्दा, ३० सेमी अग्लो स्लम कोन हटाएपछि कंक्रीट १८ सेमी तल झर्यो। त्यो कंक्रीटको 'स्लम भ्यालु' कति हो?",
      options: [
        { ja: "18cm（沈んだ量そのものがスランプ値）", id: "18 cm (Besarnya jarak penurunan beton adalah nilai slump itu sendiri)", ne: "१८ सेमी (कंक्रीट जति तल झर्छ, त्यही नै स्लम नाप हो)" },
        { ja: "12cm（30 - 18 = 12cm）", id: "12 cm", ne: "१२ सेमी" },
        { ja: "48cm（30 + 18 = 48cm）", id: "48 cm", ne: "४८ सेमी" },
        { ja: "0cm", id: "0 cm", ne: "० सेमी" }
      ],
      answer: 0,
      expJa: "【スランプ試験】スランプ値とは「コーンの元の高さ（30cm）からコンクリート頂部が何cm沈み下がったか」を示す値であり、沈んだ18cmがそのままスランプ値となります。",
      expId: "Nilai slump diukur dari puncak kerucut asli (30 cm) ke puncak adukan yang melorot turun. Jika turun 18 cm, maka slump = 18 cm.",
      expNe: "कंक्रीट माथिबाट जति सेन्टिमिटर तल झर्छ, त्यसैलाई स्लम भनिन्छ। १८ सेमी झरेको हुनाले स्लम १८ सेमी नै हुन्छ।"
    },
    {
      cat: "実技：コンクリートテストピースの養生",
      q: "問48：コンクリートの28日圧縮強度試験を行うため現場で採取したテストピース（供試体型枠）の標準養生方法として正しいものはどれですか。",
      q_id: "Soal 48: Bagaimanakah metode perawatan standar (standard curing) silinder sampel beton untuk uji kuat tekan 28 hari?",
      q_ne: "प्रश्न ४८: कंक्रीटको २८ दिने बलियोपन नाप्न बनाइएको नमुना सिलिन्डरलाई प्रयोगशालामा पठाउनुअघि कसरी सुरक्षित राख्नुपर्छ?",
      options: [
        { ja: "所定温度（20℃±2℃）の水中（水槽の中）に浸して養生する（標準水中養生）", id: "Direndam di dalam bak air bersuhu konstan (20°C ± 2°C) (Standard Water Curing)", ne: "तोकिएको तापक्रम (२० डिग्री ± २ डिग्री) भएको पानीको ट्याङ्कीभित्र डुबाएर राख्ने (पानी क्युरिङ)" },
        { ja: "直射日光の当たる乾いたアスファルトの上に放置してカラカラに乾燥させる", id: "Dijemur di atas aspal terik matahari sampai kering kerontang", ne: "घाममा तातो कालोपत्रे सडकमा सुक्खा बनाएर छोड्ने" },
        { ja: "冷蔵庫の冷凍室に入れて凍結させる", id: "Dibekukan di dalam freezer kulkas", ne: "फ्रिजको फ्रिजरभित्र राखेर जमाउने" },
        { ja: "テストピースをハンマーで叩いて丸い球体にする", id: "Dipukul palu agar berbentuk bola bulat", ne: "हम्बरले हिर्काएर गोलो डल्लो बनाउने" }
      ],
      answer: 0,
      expJa: "【JIS A 1108】28日強度の標準養生供試体は、脱型後直ちに「20℃±2℃の水の中」に入れて28日間水和反応を進行させます。",
      expId: "Silinder sampel beton wajib direndam di kolam air suhu 20°C (±2°C) agar mencapai kekuatan tekan maksimal saat diuji hidrolik.",
      expNe: "कंक्रीटको तागत नाप्ने नमुनालाई २० डिग्रीको पानीमा डुबाएर राखेपछि मात्र सिमेन्टले पूर्ण बल पाउँछ।"
    },
    {
      cat: "実技：コンクリートポンプ車のアウトリガ敷板",
      q: "問49：地盤の軟弱な場所でコンクリートポンプ車を設置する際、アウトリガの脚が地中にめり込んで車両が横転するのを防ぐための処置はどれですか。",
      q_id: "Soal 49: Tindakan apakah yang WAJIB dipasang di bawah kaki outrigger pompa beton di tanah lunak agar tidak amblas terbalik?",
      q_ne: "प्रश्न ४९: कमजोर वा गिलो जमिनमा कंक्रीट पम्प गाडी राख्दा, गाडीको खुट्टा (आउट्रिगर) जमिनमा भासिएर गाडी पल्टिन नदिन मुनि के राख्नुपर्छ?",
      options: [
        { ja: "厚い敷鉄板（または専用の敷角・アウトリガベース盤）を敷いて接地面積を広げ、地盤を十分に補強する", id: "Memasang pelat baja tebal (shiki-teppan) atau balok kayu keras lebar untuk menyebarkan beban tekanan ke tanah", ne: "बाक्लो फलामे प्लेट (शिकी-तेप्पान) वा काठको फलेक ओछ्याएर भार फैलाउने र जमिन बलियो बनाउने" },
        { ja: "泥の上に直接アウトリガを接地させてジャッキを上げる", id: "Langsung menekan hidrolik di atas tanah lumpur becek", ne: "हिलो माटोमाथि सिधै खुट्टा टेकाएर ज्याक उठाउने" },
        { ja: "アウトリガを出さずにタイヤだけで車体を支える", id: "Tidak mengeluarkan outrigger sama sekali dan hanya mengandalkan ban", ne: "खुट्टा नै ननिकाली गाडीको पाङ्ग्राको भरमा मात्र काम गर्ने" },
        { ja: "敷板の代わりに薄い段ボール箱を1枚敷く", id: "Hanya mengganjal dengan kardus kertas tipis", ne: "पातलो कागजको कार्टुन मात्र ओछ्याउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.160参照】ブーム伸長時はアウトリガ1点に数十トンの荷重が集中します。厚い敷鉄板やアウトリガベースで接地圧を分散させます。",
      expId: "Beban pompa beton saat boom berputar sangat dahsyat. Wajib beri pelat baja tebal di bawah cakar outrigger agar tanah tidak jebol.",
      expNe: "पम्प गाडीको खुट्टामा धेरै टन भार पर्ने भएकाले मुनि बाक्लो फलामे प्लेट ओछ्याउनै पर्छ।"
    },
    {
      cat: "実技：コンクリート打設後の散水養生",
      q: "問50：スラブのコンクリート打設完了後、コンクリートの乾燥収縮ひび割れを防ぎ、十分な強度を発現させるために行う養生作業は何ですか。",
      q_id: "Soal 50: Pekerjaan perawatan apakah yang dilakukan dengan menyiramkan air atau menutup terpal basah pada pelat lantai cor agar tidak retak rambut?",
      q_ne: "प्रश्न ५०: भुइँको ढलान सकिएपछि कंक्रीट सुकेर चिरा पर्न नदिन र बलियो बनाउन पानी छर्कने वा भिजेको म्याट ओछ्याउने कामलाई के भनिन्छ?",
      options: [
        { ja: "湿潤養生（散水養生・養生マット被覆）", id: "Perawatan Basah / Curing Air (Shitsujun Youjou / Sansui Youjou)", ne: "पानी क्युरिङ (भिजाएर राख्ने काम / सान्सुइ योउजोउ)" },
        { ja: "ドライヤーによる加熱乾燥養生", id: "Mengeringkan paksa dengan semprotan hair dryer", ne: "हेयर ड्रायरले सुकाउने" },
        { ja: "コンクリートを削り取るハツリ作業", id: "Memahat membongkar cor beton", ne: "कंक्रीट ताछेर फाल्ने काम" },
        { ja: "表面に塩を大量にまく塩漬け養生", id: "Menaburkan banyak garam di permukaan beton", ne: "माथिबाट धेरै नुन छर्ने" }
      ],
      answer: 0,
      expJa: "【コンクリート湿潤養生】打設直後の急激な乾燥はひび割れの最大原因です。硬化開始後は散水や養生マットで最低5日間以上は湿潤状態を保ちます。",
      expId: "Curing air (menyiram air dan menutup terpal basah) mutlak dilakukan minimal 5 hari agar beton tidak retak dan mencapai mutu K-300.",
      expNe: "ढलानपछि कंक्रीटलाई कम्तीमा ५ दिनसम्म पानी छर्केर भिजाएर राख्नुपर्छ, नत्र घामले सुकेर चिराचिरा पर्छ।"
    },
    {
      cat: "実技：外壁タイルの打診検査（テストハンマー）",
      q: "問51：外壁タイル張り工事の完了後、タイルが下地モルタルから浮いて剥落する危険がないかを確認するため、打診棒（テストハンマー）で行う検査方法はどれですか。",
      q_id: "Soal 51: Bagaimanakah cara pengujian ketukan tongkat pendulum (test hammer) untuk mendeteksi keramik dinding yang kopong/mau lepas?",
      q_ne: "प्रश्न ५१: बाहिरी भित्ताको टायल भित्रबाट उप्किएको छ कि छैन भनेर 'टेस्ट ह्यामर (जाँच गर्ने सानो डन्डी)' ले कसरी परीक्षण गरिन्छ?",
      options: [
        { ja: "タイルの表面を転がすように軽く叩き、打撃音（正常な金属音か、浮きによる鈍い濁音・ポコポコ音か）を聞き分けて判定する", id: "Mengetuk/menggesekkan bola tongkat pada keramik dan mendengarkan pantulan bunyinya (bunyi nyaring = padat; bunyi berongga/kopong = cacat lepas)", ne: "टायलको सतहमा डन्डी बिस्तारै ठोकेर आवाज सुन्ने (टिनिनिन आवाज आए टाँसिएको, भुक्क-भुक्क आवाज आए भित्र हावा पसेर उप्किएको)" },
        { ja: "巨大なハンマーでタイルを力任せに叩き割ってみる", id: "Memukul hancur keramik dengan godam besi besar", ne: "ठूलो घनले हानेर टायल फुटाउने" },
        { ja: "遠くから双眼鏡で眺めるだけで音は聞かない", id: "Hanya melihat dari jauh dengan teropong tanpa diketuk", ne: "टाढाबाट दूरबिनले हेर्ने मात्र" },
        { ja: "壁に水をかけてタイルが溶けるかどうか見る", id: "Menyiram air untuk melihat apakah keramik larut", ne: "पानी हालेर टायल पग्लिन्छ कि हेर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.102参照】打診検査では、正常部分は「キーン」と澄んだ高い音がし、裏面が浮いている部分は「ボコボコ」と濁った音が出るため、不良タイルを特定できます[cite: 6]。",
      expId: "Uji ketuk (dashin kensa) membedakan bunyi nyaring padat vs bunyi kopong berongga untuk menemukan keramik cacat sebelum jatuh menimpa orang.",
      expNe: "टायलमाथि डन्डीले ठोक्दा भित्र खोक्रो भए 'भुक्क-भुक्क' आवाज आउँछ। यस्तो टायल पछि खस्ने भएकाले फेर्नुपर्छ।"
    },
    {
      cat: "実技：シーリング工事のマスキングテープ（P.172）",
      q: "問52：外壁目地のシーリング（コーキング）工事において、シーリング材が外壁材の表面にはみ出して汚れるのを防ぐために行う正しい手順はどれですか。",
      q_id: "Soal 52: Manakah prosedur yang BENAR dalam memasang masking tape pada celah sambungan dinding sebelum menembakkan lem sealant?",
      q_ne: "प्रश्न ५२: भित्ताको जोर्नीमा सिलिकन (सिलिङ गम) भर्नुअघि वरिपरिको भित्ता नफोहोरियोस् भनेर मास्किङ टेप टाँस्ने सही तरिका कुन हो?",
      options: [
        { ja: "目地の両縁に沿って真っ直ぐマスキングテープを貼り、ヘラ押さえ完了後、シーリング材が硬化する前に速やかにテープを剥がす", id: "Tempel masking tape lurus rapi di kedua tepi nat, ratakan lem dengan kape spatula, lalu cabut tape SEBELUM lem mengering", ne: "जोर्नीको दुवै किनारमा सिधा मास्किङ टेप टाँस्ने, चम्चाले गम सम्याउने, र गम सुक्नुभन्दा अगाडि नै तुरुन्तै टेप उप्काउने" },
        { ja: "マスキングテープは剥がさずに、上からそのままペンキを塗って壁と同化させる", id: "Membiarkan masking tape tertempel selamanya dan dicat di atasnya", ne: "टेप नउप्काई त्यसमाथि रङ पोतेर छोडिदिने" },
        { ja: "シーリング材が完全にカチカチに固まってから力任せにテープを引きちぎる", id: "Menarik paksa tape setelah lem mengeras total seperti batu", ne: "सिलिकन ढुङ्गा जस्तै सुकिसकेपछि बल गरेर टेप तान्ने" },
        { ja: "テープは使わず、手についたシーリング材を壁になすりつける", id: "Tidak memakai isolasi dan mengoleskan sisa lem ke tembok", ne: "टेप नलगाई हातको गम भित्तामा पुछिदिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.172参照】シーリング材が硬化した後にテープを剥がすと、目地の端部が一緒に引きちぎれて防水不良になります。必ずヘラ押さえ直後の未硬化時に剥がします。",
      expId: "Masking tape wajib dicabut saat sealant masih basah. Jika dicabut setelah kering, tepi lem akan robek merusak fungsi tahan air.",
      expNe: "सिलिकन सुकेपछि टेप ताने छेउको गम पनि च्यातिएर पानी चुहिन्छ। त्यसैले गम काँचै छँदा टेप उप्काउनुपर्छ।"
    },
    {
      cat: "実技：サイディング外壁の留め付け金具",
      q: "問53：窯業系サイディング外壁の施工において、釘頭が見えず美観に優れ、地震時の揺れを吸収してひび割れを防ぐ工法は何ですか。",
      q_id: "Soal 53: Metode pemasangan panel dinding luar (siding) apakah yang menggunakan klem besi tersembunyi sehingga tidak ada paku tampak di permukaan?",
      q_ne: "प्रश्न ५३: बाहिरी भित्ताको बोर्ड (साइदिङ) लगाउँदा किल्लाको टाउको बाहिर नदेखिने र भूकम्पमा पनि नचर्किने गरी भित्रबाट क्ल्याम्पले कस्ने विधिलाई के भनिन्छ?",
      options: [
        { ja: "金具留め工法（留付金具工法）", id: "Kanagu-dome Kouhou (Metode Klem Klip Besi Tersembunyi)", ne: "खानागु-दोमे विधि (भित्रबाट क्लिप/क्ल्याम्पले कस्ने विधि)" },
        { ja: "ガムテープ貼り付け工法", id: "Metode tempel lakban kertas", ne: "कागजको टेपले टाँस्ने विधि" },
        { ja: "針金縛り工法", id: "Metode lilit kawat jemuran", ne: "तारले बाँध्ने विधि" },
        { ja: "泥団子固定工法", id: "Metode tempel bola lumpur", ne: "हिलोको डल्लाले टाँस्ने विधि" }
      ],
      answer: 0,
      expJa: "【外壁サイディング施工】従来の「釘打ち工法」に比べ、「金具留め工法」は板の表面を傷つけず、熱伸縮や地震の揺れを金具の遊びで吸収するため割れや漏水を激減させます。",
      expId: "Kanagu-dome menggunakan klip baja tersembunyi, menghasilkan dinding mulus tanpa bekas paku dan lebih tahan gempa.",
      expNe: "'खानागु-दोमे' विधिमा बोर्डको बाहिर किल्ला ठोकिँदैन, भित्रबाट फलामे क्लिपले कसिने भएकाले भित्ता चर्किँदैन।"
    },
    {
      cat: "実技：屋根のルーフィング（下葺き材）の重ね順（P.166）",
      q: "問54：屋根工事において、野地板の上に防水シート（アスファルトルーフィング）を敷き並べる際、雨漏りを防ぐ正しい敷き順と重ね幅はどれですか。",
      q_id: "Soal 54: Manakah urutan bentang dan panjang tumpang tindih (overlap) yang BENAR saat memasang kertas terpal aspal (roofing) di atas papan atap?",
      q_ne: "प्रश्न ५४: छानामा पानी नचुहियोस् भनेर काठको फलेकमाथि कालो वाटरप्रुफिङ कागज (रुफिङ सिट) ओछ्याउने सही क्रम र खप्ट्याइने नाप कुन हो?",
      options: [
        { ja: "軒先（下）から棟（上）に向かって順に張り上げ、上下の重ね幅は100mm以上、左右の重ね幅は200mm以上確保する", id: "Digelar dari Bawah (Nokisaki) menuju ke Atas (Mune), dengan overlap atas-bawah minimal 100 mm dan sambungan kiri-kanan minimal 200 mm", ne: "छानाको फेद (मुनि) बाट धुरी (माथि) तिर क्रमशः ओछ्याउँदै लैजाने, र तल-माथिको खप्टिने भाग कम्तीमा १०० मिमी र दायाँ-बायाँ २०० मिमी राख्ने" },
        { ja: "棟（上）から軒先（下）に向かって上から覆いかぶせるように逆向きに張る", id: "Dipasang terbalik dari atas ke bawah", ne: "धुरी (माथि) बाट मुनितिर उल्टो ओछ्याउने" },
        { ja: "重ね幅はゼロにし、ルーフィングどうしを突っ合わせて隙間を開けておく", id: "Tanpa overlap dan beri celah renggang", ne: "नखप्ट्याई बीचमा खाली ठाउँ छाड्ने" },
        { ja: "ルーフィングは破れやすいので新聞紙を敷き詰める", id: "Hanya memakai koran bekas sebagai pengganti roofing", ne: "कालो कागजको सट्टा पुरानो अखबार ओछ्याउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.166参照】水は上から下へ流れるため、下（軒先）から順に上へ重ねていく「下から上張り」が雨仕舞の絶対原則です。逆張りにすると雨水がシートの隙間から吸い込まれます。",
      expId: "Prinsip air mengalir: Pasang terpal atap dari bawah ke atas dengan overlap minimal 10 cm agar air meluncur bebas tanpa merembes sambungan.",
      expNe: "पानी माथिबाट मुनि बग्ने भएकाले रुफिङ सिट तलबाट माथितिर खप्ट्याउँदै लैजानुपर्छ। उल्टो ओछ्याए पानी भित्र चुहिन्छ।"
    },
    {
      cat: "実技：建築板金の折り曲げ加工（ハゼ組み）",
      q: "問55：金属板どうしをつなぎ合わせて防水性を保つ建築板金工事において、金属板の端部を折り曲げて互いに噛み合わせる接合方法は何ですか。",
      q_id: "Soal 55: Teknik lipatan sambungan plat seng apakah yang dibuat dengan cara menekuk kedua tepi plat lalu mengaitkannya satu sama lain hingga kedap air?",
      q_ne: "प्रश्न ५५: जस्तापाता जोड्दा पानी नछिरोस् भनेर दुवै पाताका किनारहरूलाई दोब्य्राएर एकअर्कामा लक हुने गरी जोड्ने विधिलाई के भनिन्छ?",
      options: [
        { ja: "ハゼ継ぎ（ハゼ組み / 折り返し接合）", id: "Haze-tsugi / Haze-gumi (Sambungan Lipat Kunci Plat Seng)", ne: "हाजे-चुगी (पात दोब्य्राएर एकअर्कामा अड्काउने लक जोर्नी)" },
        { ja: "ガムテープ留め", id: "Sambungan lakban", ne: "टेप जोर्नी" },
        { ja: "木工ボンド接着", id: "Lem kayu", ne: "काठको गम" },
        { ja: "洗濯ばさみ固定", id: "Jepitan jemuran baju", ne: "कपडा सुकाउने चिम्टा" }
      ],
      answer: 0,
      expJa: "【建築板金の基本技能】金属板の端を折り曲げてフック状にし、互いに噛み合わせて叩き締める「ハゼ継ぎ」は、釘を使わずに熱伸縮に耐え雨漏りを防ぐ板金技術です。",
      expId: "Haze-tsugi adalah sambungan lipat khas tukang seng (standing seam) yang mengunci kedua plat tanpa perlu menembus paku.",
      expNe: "जस्तापातामा किल्ला नठोकी दुवै छेउ दोब्य्राएर एकअर्कामा अड्काउने बलियो वाटरप्रुफिङ विधिलाई 'हाजे' भनिन्छ।"
    },
    {
      cat: "実技：丸のこの安全点検（銘板の回転数）",
      q: "問56：携帯用電気丸のこに新しい替刃（チップソー）を取り付ける際、重大な刃の破損事故を防ぐために確認すべき数値基準はどれですか。",
      q_id: "Soal 56: Angka spesifikasi apakah yang WAJIB dicocokkan antara bodi mesin gergaji bundar dan mata pisau baru agar mata pisau tidak pecah meledak saat berputar?",
      q_ne: "प्रश्न ५६: हाते गोलो आरा (मारुनोको) मा नयाँ ब्लेड हाल्दा, ब्लेड फुटेर दुर्घटना हुन नदिन मेसिन र ब्लेडमा भएको कुन नम्बर अनिवार्य हेर्नुपर्छ?",
      options: [
        { ja: "替刃に表示されている「最高使用回転速度（rpm）」が、丸のこ本体の定格無負荷回転速度を上回っていること", id: "Batas putaran maksimal pisau (Max RPM) harus LEBIH BESAR daripada kecepatan putar maksimal mesin gergaji", ne: "ब्लेडमा लेखिएको 'अधिकतम घुम्ने गति (Max RPM)' मेसिनको घुम्ने गतिभन्दा धेरै भएको हुनुपर्ने" },
        { ja: "替刃の色が作業員のヘルメットと同じ色であること", id: "Warna mata pisau sama dengan warna helm", ne: "ब्लेडको रङ र हेल्मेटको रङ मिलेको हुनुपर्ने" },
        { ja: "替刃の値段が一番安いこと", id: "Harga mata pisau paling murah", ne: "ब्लेडको मूल्य सबैभन्दा सस्तो हुनुपर्ने" },
        { ja: "替刃の外径が丸のこ本体のカバーよりも大きくて飛び出していること", id: "Ukuran pisau lebih besar daripada cover pelindung sampai menonjol keluar", ne: "कभरभन्दा ठूलो ब्लेड बाहिर निस्किएको हुनुपर्ने" }
      ],
      answer: 0,
      expJa: "【電動工具安全】丸のこの回転数より最高使用回転数が低い替刃を取り付けると、遠心力に耐えきれずに回転中に刃が粉砕・飛散して大事故になります。",
      expId: "RPM mata pisau WAJIB lebih tinggi daripada RPM mesin. Memasang mata pisau RPM rendah akan membuat pisau pecah beterbangan mencabik operator.",
      expNe: "मेसिनको गतिभन्दा कम क्षमता भएको कमजोर ब्लेड हालेमा घुम्दाघुम्दै ब्लेड टुक्राटुक्रा भएर उछिट्टिन्छ र मान्छे काट्छ।"
    },
    {
      cat: "実技：鉄骨建方のワイヤー外れ止め装置",
      q: "問57：クレーンで鉄骨梁や柱を吊り上げる際、フックから玉掛けワイヤーロープが不意に抜け落ちる事故を防ぐためにフックに備え付けられている機構は何ですか。",
      q_id: "Soal 57: Komponen lidah pengaman apakah yang ada pada kait gancu crane untuk mencegah kawat seling meleset lepas tiba-tiba saat mengangkat besi baja?",
      q_ne: "प्रश्न ५७: क्रेनको हुकबाट स्लिङ तार फुत्किएर सामान खस्न नदिन हुकको मुखमा लगाइएको सुरक्षा लक (जिब्रो) लाई के भनिन्छ?",
      options: [
        { ja: "外れ止め装置（安全ラッチ / フックラッチ）", id: "Hazure-dome Sochi (Lidah Pengunci Pengaman Kait / Safety Latch Hook)", ne: "हाजुरे-दोमे (हुकको सुरक्षा लक / सेफ्टी ल्याज)" },
        { ja: "アウトリガ", id: "Outrigger", ne: "आउट्रिगर" },
        { ja: "ジブ", id: "Jib Crane", ne: "जिब" },
        { ja: "ドラム", id: "Drum Winch", ne: "ड्रम" }
      ],
      answer: 0,
      expJa: "【クレーン則第20条】クレーンのフックには、玉掛け用具の外れ止め装置（ラッチ）を具備することが義務付けられており、ラッチが壊れているフックは使用禁止です。",
      expId: "Safety latch (lidah per pengaman) pada hook crane wajib berfungsi menutup rapat. Dilarang memakai hook jika kait pengamannya patah.",
      expNe: "क्रेनको हुकमा भएको 'सेफ्टी ल्याज' ले तारलाई बाहिर फुत्किन दिँदैन। यो लक भाँचिएको हुक प्रयोग गर्न कानुनले दिँदैन।"
    },
    {
      cat: "実技：親綱（おやづな）の支柱と緊張器",
      q: "問58：鉄骨上や高所通路に安全帯のフックを掛けるための「親綱」を張る際、万一の墜落時に作業員が床に激突するのを防ぐために守るべき基準はどれですか。",
      q_id: "Soal 58: Aturan apakah yang WAJIB ditaati saat memasang Tali Induk Pengaman (Oya-zuna) di atas rangka baja agar tali tidak melorot saat menahan beban jatuh?",
      q_ne: "प्रश्न ५८: अग्लो फलामको फ्रेममा हिँड्दा सेफ्टी बेल्ट अड्काउन बाँधिने 'मुख्य सुरक्षा डोरी (ओया-जुना)' टाँग्दा कुन नियम मान्नै पर्छ?",
      options: [
        { ja: "専用の親綱支柱を強固に固定し、親綱緊張器を用いてたるみがないようピンと張り、本線ワイヤーは切断やサビのない健全なものを使用する", id: "Kunci tiang oyazuna kokoh, tarik kencang tanpa kendor memakai tensioner khusus, dan gunakan kawat sling yang mulus tanpa cacat", ne: "डोरी अड्याउने फलामे खम्बा बलियोसँग कस्ने, तन्काउने यन्त्रले डोरीलाई झोलिन नदिई कसिलो पारेर तन्काउने र बलियो डोरी प्रयोग गर्ने" },
        { ja: "ビニールハウス用の細い麻紐をゆるゆるに結んでおく", id: "Memakai tali rami plastik tipis yang diikat kendor", ne: "पातलो सुतलीको डोरी खुकुलो पारेर बाँध्ने" },
        { ja: "1本の親綱に同時に50人の作業員がフックを掛けて作業する", id: "50 pekerja mencantolkan hook ke satu tali induk yang sama", ne: "एउटै डोरीमा ५० जनाले हुक अड्काएर झुन्डिने" },
        { ja: "柱に巻きつけただけで緊張器は使わずブラブラにしておく", id: "Hanya dililitkan ke tiang tanpa dikencangkan pengencang tali", ne: "खम्बामा बेरेर मात्र छाड्ने र डोरी कसिलो नबनाउने" }
      ],
      answer: 0,
      expJa: "【親綱の設置基準】たるんだ親綱は落下時の「落下距離」が長大になり床面に激突します。親綱緊張器で規定張力を与えてピンと張ります。1スパンにかける人数制限も厳守です。",
      expId: "Oyazuna wajib ditarik kencang menggunakan tensioner putar agar tidak kendur saat menahan entakan orang jatuh.",
      expNe: "ओया-जुना डोरी खुकुलो भए मान्छे खस्दा डोरीसँगै तल भुइँमा बजारिन्छ। त्यसैले तन्काउने मेसिनले डोरीलाई कसिलो पार्नुपर्छ।"
    },
    {
      cat: "実技：酸素・アセチレン容器の保管方法",
      q: "問59：ガス圧接やガス切断で使用する高圧ガス容器（酸素ボンベ・アセチレンボンベ）の保管ルールとして正しいものはどれですか。",
      q_id: "Soal 59: Manakah aturan penyimpanan tabung gas bertekanan tinggi (Tabung Oksigen & Tabung Asetilen) yang BENAR di proyek?",
      q_ne: "प्रश्न ५९: ग्यास वेल्डिङमा प्रयोग गरिने अक्सिजन र एसिटिलिनका ग्यास सिलिन्डरहरू कार्यस्थलमा राख्ने सही नियम कुन हो?",
      options: [
        { ja: "直射日光を避け温度を40℃以下に保ち、立てた状態で鎖などで確実に転倒防止措置を講じ、通風の良い場所に保管する", id: "Simpan di tempat berventilasi sejuk di bawah 40°C, hindari matahari langsung, ikat rantai agar tidak terguling tegak, dan pisahkan gas", ne: "घामबाट जोगाएर ४० डिग्री मुनिको हावा चल्ने ठाउँमा राख्ने, सिलिन्डरलाई सिधा उभ्याएर साङ्लोले लड्न नदिने गरी बाँध्ने" },
        { ja: "ガスが出やすいように地面に横にして転がしておく", id: "Menggelindingkan tabung tidur di tanah agar gas mudah keluar", ne: "ग्यास सजिलै निस्कियोस् भनेर सिलिन्डरलाई भुइँमा सुताएर राख्ने" },
        { ja: "ボンベのすぐ横で焚き火をしてドラム缶を燃やす", id: "Membuat api unggun tepat di samping tabung gas", ne: "सिलिन्डरको ठ्याक्कै छेउमा आगो बालेर ताप्ने" },
        { ja: "アセチレン容器と酸素容器を密着させて毛布でくるんでおく", id: "Membungkus tabung oksigen dan asetilen bersamaan dalam satu selimut", ne: "दुवै सिलिन्डरलाई सँगै टाँसेर सिरकले बेरेर राख्ने" }
      ],
      answer: 0,
      expJa: "【高圧ガス保安法】高圧ガスボンベは「40℃以下・直射日光防止・立てて鎖固定・通風良好・火気から5m以上離隔」が厳格な保管ルールです。",
      expId: "Tabung gas wajib disimpan tegak diikat rantai, suhu < 40°C, terlindung matahari, dan jauh dari percikan api las.",
      expNe: "ग्यास सिलिन्डरलाई सधैं ठाडो पारेर साङ्लोले बाँध्नुपर्छ र ४० डिग्रीभन्दा तातो हुन नदिन घामबाट टाढा राख्नुपर्छ।"
    },
    {
      cat: "実技：バックホウの旋回エリアの安全管理（P.182）",
      q: "問60：バックホウで掘削・土砂積み込み作業を行う際、アームや車体後部と周囲構造物との間に人が挟まれる事故を防ぐための対策はどれですか。",
      q_id: "Soal 60: Tindakan apakah yang WAJIB dipasang di sekeliling excavator (backhoe) untuk mencegah pekerja terjepit putaran bodi belakang alat berat?",
      q_ne: "प्रश्न ६०: एक्साभेटरले माटो खन्ने काम गर्दा मेसिनको पछाडिको भाग र पर्खालको बीचमा मान्छे च्यापिनबाट रोक्न गरिने सुरक्षा उपाय कुन हो?",
      options: [
        { ja: "バックホウの最大旋回半径の外側にカラーコーンやバーを設置して「旋回範囲内立入禁止」を徹底し、誘導員を配置する", id: "Pasang barikade cone pembatas di luar radius putar maksimal, larang siapa pun masuk radius putar, dan tempatkan juru pandu", ne: "मेसिन घुम्ने अन्तिम घेराभन्दा बाहिर ट्राफिक कोन राखेर 'पस्न निषेध' गर्ने र बाहिर गार्ड खटाउने" },
        { ja: "旋回する車体後部に背中をぴったりくっつけて立つ", id: "Berdiri menempelkan punggung di pantat bodi excavator yang sedang berputar", ne: "घुमिरहेको एक्साभेटरको पछाडि पिठ्युँ टाँसेर उभिने" },
        { ja: "立入禁止バーは重機がぶつかって邪魔なので設置しない", id: "Tidak memasang pagar pembatas karena mengganggu manuver alat", ne: "अवरोध हुन्छ भन्दै कुनै बार वा कोन नराख्ने" },
        { ja: "暗い夜間に無灯火のまま目隠しをして作業する", id: "Bekerja di malam gelap gulita tanpa menyalakan lampu sorot", ne: "राती बत्ती नबाली अन्धकारमा मेसिन चलाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.182参照】バックホウの死亡災害で最も多いのが旋回体後部と障害物との「挟まれ・巻き込まれ」です[cite: 12]。旋回エリアへの物理的立入禁止措置が必須です[cite: 12]。",
      expId: "Titik buta putaran belakang excavator sangat mematikan. Area radius putar wajib dipagari barikade kerucut cone bertuliskan Dilarang Masuk.",
      expNe: "एक्साभेटरको पछाडि मान्छे च्यापिने दुर्घटना धेरै हुने भएकाले मेसिन घुम्ने ठाउँमा मान्छे पस्नै नपाउने गरी कोनले घेर्नुपर्छ।"
    },
    {
      cat: "実技：熱中症の初期対応・体温冷却部位（P.190）",
      q: "問61：熱中症で倒れた作業員を冷やす際、最も効率的に体温を下げるために氷嚢や保冷剤を当てるべき「身体の部位」として正しい組み合わせはどれですか。",
      q_id: "Soal 61: Di bagian tubuh manakah es batu WAJIB dikompreskan agar suhu darah panas korban heatstroke turun paling cepat?",
      q_ne: "प्रश्न ६१: हिटस्ट्रोकले ढलेको बिरामीको रगतको तातोपन सबैभन्दा छिटो घटाउन बरफ राख्नुपर्ने 'शरीरका ३ मुख्य अंगहरू' कुन हुन्?",
      options: [
        { ja: "首の両脇（頸動脈） ／ 両脇の下（腋窩動脈） ／ 太ももの付け根の前面（大腿動脈）", id: "Kedua sisi Leher (Arteri Leher) / Kedua Ketiak / Kedua Pangkal Paha Selangkangan (Arteri Paha)", ne: "घाँटीको दुवै छेउ (घाँटीको मुख्य नसा) / दुवै काखीमुनि / दुवै तिघ्राको जोर्नी (तिघ्राको मुख्य नसा)" },
        { ja: "手の爪の先 ／ 足の裏のかかと ／ 髪の毛の毛先", id: "Ujung kuku jari tangan / Tumit kaki / Ujung rambut", ne: "हातको नङको टुप्पो / खुट्टाको कुर्कुच्चो / कपालको टुप्पो" },
        { ja: "安全靴の靴底の上から", id: "Di atas sol sepatu safety", ne: "सेफ्टी जुत्ताको तल" },
        { ja: "ヘルメットのてっぺんの上から", id: "Di atas puncak helm pengaman", ne: "हेल्मेटको सबैभन्दा माथि" }
      ],
      answer: 0,
      expJa: "【テキスト P.190参照】皮膚の近くを太い動脈が通っている「首・脇の下・太ももの付け根」を冷やすことで、冷えた血液が全身をめぐり深部体温を急速に下げます[cite: 20]。",
      expId: "Kompres es wajib ditempelkan di 3 titik pembuluh darah besar: Kiri-kanan Leher, Ketiak, dan Selangkangan Paha.",
      expNe: "शरीरका ठूला रक्तनलीहरू हुने ठाउँ घाँटी, काखी र तिघ्राको जोर्नीमा बरफ राख्दा रगत चिसिएर ज्यान जोगिन्छ।"
    },
    {
      cat: "実技：現場の安全標識の意味（P.191）",
      q: "問62：現場に掲示されている「白い背景に緑色の十字」が描かれたシンボルマーク（緑十字）は何を象徴していますか。",
      q_id: "Soal 62: Apakah makna dari lambang Palang Hijau dengan latar belakang putih (Ryokujuuji) yang selalu ada di proyek Jepang?",
      q_ne: "प्रश्न ६२: जापानी कार्यस्थलमा सेतो पृष्ठभूमिमा हरियो क्रस चिन्ह कोरिएको 'रियोकुजुउजी' ले के अर्थ जनाउँछ?",
      options: [
        { ja: "安全および労働衛生の象徴（安全第一）", id: "Simbol Keselamatan dan Kesehatan Kerja (Utamakan Selamat / Safety First)", ne: "औद्योगिक सुरक्षा र स्वास्थ्यको आधिकारिक प्रतीक चिन्ह (सुरक्षा पहिलो प्राथमिकता)" },
        { ja: "現場事務所の自動販売機の場所", id: "Tanda lokasi mesin minuman otomatis", ne: "जुस किन्ने भेन्डिङ मेसिनको ठाउँ" },
        { ja: "産業廃棄物のゴミ捨て場", id: "Tempat pembuangan sampah proyek", ne: "फोहोर फाल्ने ठाउँ" },
        { ja: "喫煙所の灰皿のマーク", id: "Asbak tempat merokok", ne: "चुरोट खाने ठाउँ" }
      ],
      answer: 0,
      expJa: "【テキスト P.191参照】緑十字は日本の建設・産業界における「安全第一（Safety First）」のシンボルであり、救急箱やヘルメットにも付けられます[cite: 21]。",
      expId: "Palang Hijau (Ryokujuuji) adalah lambang resmi nasional K3 Jepang yang melambangkan slogan 'Anzen Dai-ichi' (Utamakan Selamat).",
      expNe: "'हरियो क्रस' जापानको सुरक्षाको राष्ट्रिय चिन्ह हो, जसको अर्थ 'सुरक्षा नै सबैभन्दा पहिलो प्राथमिकता हो' भन्ने हुन्छ।"
    },
    {
      cat: "実技：新規入場者の体調問診と安全誓約",
      q: "問63：新しく入場してきた作業員に対して行う健康確認において、当日の高所作業を「禁止（配置変更）」と判断すべき状態はどれですか。",
      q_id: "Soal 63: Kondisi fisik bagaimanakah pada pekerja baru yang WAJIB DILARANG bekerja di ketinggian hari itu oleh Shokucho?",
      q_ne: "प्रश्न ६३: नयाँ कामदार बिहान कार्यस्थलमा आउँदा, कस्तो शारीरिक अवस्था देखिएमा शोकुचोले उसलाई अग्लो ठाउँमा चढ्न 'निषेध (काम परिवर्तन)' गर्नुपर्छ?",
      options: [
        { ja: "発熱やひどい二日酔いがあり、強い睡眠薬や風邪薬を飲んでいて意識がボーッとしてふらついている状態", id: "Demam, mabuk sisa alkohol kemarin, atau minum obat flu berdosis kantuk berat yang membuat tubuh sempoyongan", ne: "ज्वरो आएको, रक्सीको नशा नउत्रेको वा कडा औषधि खाएर जिउ लड्खडाएको र निन्द्रामा झुलेको अवस्था" },
        { ja: "前夜に8時間ぐっすり熟睡して顔色が良く元気な状態", id: "Tidur nyenyak 8 jam dan tampak segar bugar", ne: "८ घण्टा राम्ररी निदाएर हँसिलो र तन्दुरुस्त भएको अवस्था" },
        { ja: "朝ごはんをしっかり食べて血圧も正常な状態", id: "Sarapan cukup dan tekanan darah normal", ne: "बिहानको खाना खाएर रक्तचाप ठीक भएको अवस्था" },
        { ja: "フルハーネスを正しく体に密着させて装着している状態", id: "Memakai harness dengan kencang pas di tubuh", ne: "सेफ्टी हार्नेस नियम अनुसार राम्ररी लगाएको अवस्था" }
      ],
      answer: 0,
      expJa: "【適正配置判断】高熱、二日酔い、睡眠導入剤・抗ヒスタミン剤の服用による眠気は、高所からの墜落の直接原因になります。当日は地上作業へ配置転換します。",
      expId: "Pekerja yang pusing akibat obat penenang atau sisa alkohol DILARANG NAIK ke atas perancah. Pindahkan ke tugas darat.",
      expNe: "औषधिको निन्द्रा लागेको वा रक्सीको ह्याङओभर भएको मान्छेलाई अग्लो ठाउँमा पठाए सिधै खसेर मर्छ। त्यसैले भुइँको काममा सार्नुपर्छ।"
    },
    {
      cat: "実技：丸のこの手袋着用禁止の判断理由（P.184・P.190）",
      q: "問64：木材切断の作業員が「手が擦れると痛いから」と軍手をはめて丸のこを使おうとしています。職長としての正しい指導はどれですか。",
      q_id: "Soal 64: Pekerja mau memakai sarung tangan kain (gunte) saat memotong kayu pakai circular saw karena takut lecet. Apakah teguran Shokucho yang BENAR?",
      q_ne: "प्रश्न ६४: कामदारले काठ काट्ने गोलो आरा चलाउँदा हात कोतरिन्छ भन्दै कपडाको पञ्जा (गुन्ते) लगाउन खोज्यो। शोकुचोले कस्तो सही निर्देशन दिनुपर्छ?",
      options: [
        { ja: "「回転する刃物に軍手の繊維が巻き込まれると、手が引きずり込まれて指を切断する大事故になるから絶対に外せ」と強く制止する", id: "Segera hentikan keras: 'Buka sarung tanganmu! Serat kain gunte akan tergulung pisau putar dan memotong putus seluruh jarimu!'", ne: "तुरुन्तै रोक्ने: 'पञ्जा तत्काल फुकाल! घुम्ने ब्लेडले पञ्जाको धागो तानेर तिम्रो हातै मेसिनभित्र छिराई औंला काटिदिन्छ!'" },
        { ja: "「痛いなら軍手を3重に重ねて履きなさい」と指導する", id: "Menyuruh memakai sarung tangan rangkap 3 agar tebal", ne: "दुख्छ भने ३ वटा पञ्जा खप्ट्याएर लगाउ भन्ने" },
        { ja: "怪我をしても本人の自由なので見て見ぬふりをする", id: "Pura-pura tidak melihat karena itu urusan pribadi pekerja", ne: "आफ्नो काम होइन भन्दै देखे पनि नदेखे जस्तो गर्ने" },
        { ja: "丸のこの回転数を2倍に上げて作業させる", id: "Menaikkan kecepatan mesin 2 kali lipat", ne: "मेसिनको गति दोब्बर बढाएर काट्न लगाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.184・190参照】回転工具（丸のこ・ボール盤・ねじ切機等）に軍手を使用することは巻き込まれ切断事故の最大要因です。素手で作業させます[cite: 14, 20]。",
      expId: "Putaran mesin gergaji menyambar serat kain dan menarik telapak tangan masuk ke mata pisau dalam 0,1 detik. Dilarang pakai sarung tangan kain!",
      expNe: "घुम्ने मेसिन चलाउँदा पञ्जाको धागो अड्किएर हातै मेसिनले काटिदिन्छ। त्यसैले पञ्जा फुकालेर खाली हातले काम गर्नुपर्छ।"
    },
    {
      cat: "実技：熱中症疑い時の現場一次救命処置（水分補給の可否判断）",
      q: "問65：日陰に運んだ熱中症の作業員に水分を飲ませようとしましたが、呼びかけに対する返答が曖昧で意識が朦朧としています。職長としての正しい判断はどれですか。",
      q_id: "Soal 65: Anda ingin memberi minum pekerja yang pingsan terkena heatstroke, tetapi respon suaranya melantur dan kesadarannya linglung. Apakah tindakan yang BENAR?",
      q_ne: "प्रश्न ६५: गर्मीले ढलेको साथीलाई पानी खुवाउन खोज्दा, उसले बोलेको कुरा नबुझिने र होस हराएको जस्तो देखियो। शोकुचोले गर्नुपर्ने सही निर्णय कुन हो?",
      options: [
        { ja: "意識が不鮮明なときに無理やり水分を飲ませると、液体が肺に入って窒息死する危険があるため、水分補給を中止し体を冷やしながら救急車を待つ", id: "DILARANG memaksa minum saat korban tidak sadar penuh karena air bisa masuk ke paru-paru dan membuatnya mati tersedak! Terus kompres es sambil tunggu ambulans", ne: "पूर्ण होस नभएको मान्छेलाई जबर्जस्ती पानी खुवाए पानी फोक्सोमा पसेर सास थुनिएर मर्छ, त्यसैले पानी नखुवाई शरीर चिस्याउँदै एम्बुलेन्स कुर्नु" },
        { ja: "鼻をつまんで口をこじ開け、ペットボトル1本を一気に喉の奥へ流し込む", id: "Memencet hidung dan menuang paksa satu botol air ke dalam tenggorokan", ne: "नाक थुनेर मुखभित्र एकैपटक पूरै बोतलको पानी खन्याइदिने" },
        { ja: "意識を取り戻させるために顔を平手打ちして何度も叩く", id: "Menampar keras pipi korban berkali-kali agar sadar", ne: "होस खुलाउन गालामा बेस्सरी चड्कन हान्ने" },
        { ja: "現場に放置して作業員全員でそのまま帰宅する", id: "Meninggalkan korban sendirian dan semua orang pulang", ne: "त्यहीँ छोडेर सबैजना घर फर्कने" }
      ],
      answer: 0,
      expJa: "【熱中症応急処置の鉄則】「自力でペットボトルを持って飲めるか」が水分補給の判断基準です。意識が朦朧としている時に飲ませると誤嚥性窒息を起こし死亡します。",
      expId: "HANYA beri minum jika korban bisa memegang botol dan menelan sendiri. Korban setengah sadar yang dipaksa minum akan tewas tersedak cairan.",
      expNe: "आफैं हातले समातेर पिउन सक्ने होस छ भने मात्र पानी दिनुपर्छ। लट्ठ परेको मान्छेलाई पानी खुवाए फोक्सोमा पानी पसेर तत्काल ज्यान जान्छ।"
    }
  ]
};
