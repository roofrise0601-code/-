const CURRENT_QUIZ_DATA = {
  title: "直前フル模試⑤：【本番的中】<ruby>学科<rt>がっか</rt></ruby>40問 ＋ <ruby>実技<rt>じつぎ</rt></ruby>25問（計65問）",
  key: "score_final_moshi_5",
  passScore: 70,
  questions: [
    // ==========================================
    // 【学科試験パート：40問（問1〜問40）】
    // ==========================================
    {
      cat: "学科：外国人労働者への指示・伝達",
      q: "問1：特定技能2号の職長として、日本語があまり得意でない外国人作業員に安全作業を指示する際、最も適切な指示方法はどれですか。",
      q_id: "Soal 1: Bagaimanakah cara penyampaian instruksi kerja aman yang PALING TEPAT bagi Shokucho kepada pekerja asing yang belum mahir berbahasa Jepang?",
      q_ne: "प्रश्न १: जापानी भाषा राम्रो नबोल्ने विदेशी कामदारलाई सुरक्षित कामको निर्देशन दिँदा तोकुतेइ गिनौ २ का शोकुचोले कस्तो तरिका अपनाउनु सबैभन्दा राम्रो हुन्छ?",
      options: [
        { ja: "簡単な単語と短い文肢を使い、身振り手振りや写真・図面を指差しながら説明し、最後に自分の言葉で復唱（言い直し）させて理解度を確認する", id: "Gunakan kata sederhana & kalimat pendek, tunjuk foto/denah & gestur tangan, lalu minta dia mengulang kembali (read-back) dengan kata-katanya sendiri", ne: "सजिला शब्द र छोटा वाक्य बोल्ने, फोटो/नक्सा देखाउँदै हातले इसारा गर्ने, र अन्त्यमा उसलाई आफ्नै भाषामा दोहोर्याउन लगाएर बुझेको पक्का गर्ने" },
        { ja: "早口の難しい専門用語を並べ立てて一方的にまくしたてる", id: "Berbicara sangat cepat memakai istilah teknis rumit tanpa jeda", ne: "छिटोछिटो गाह्रो जापानी भाषा बोलेर एकतर्फी अह्राउने" },
        { ja: "理解したか確認せず、「わかったな！」と睨みつけて立ち去る", id: "Tidak mengecek pemahaman dan hanya melotot 'Sudah paham kan!' lalu pergi", ne: "बुझ्यो कि नाई नसोधी 'बुझिस् नि!' भन्दै घुरेर हिँड्ने" },
        { ja: "言葉が通じないからと一切会話をせず、手で突き飛ばして持ち場に行かせる", id: "Mendorong kasar badannya ke titik kerja tanpa bicara apa-apa", ne: "बोली बुझिन्न भन्दै हातले धकेलेर काममा पठाउने" }
      ],
      answer: 0,
      expJa: "【外国人への指示伝達】一方的な指示は禁物です。「やさしい日本語」「視覚的提示（写真・図）」「復唱確認（相手に言わせる）」の3点を徹底します。",
      expId: "Tiga kunci instruksi pekerja asing: Bahasa sederhana, tunjuk gambar visual, dan minta read-back (mengulang instruksi).",
      expNe: "विदेशी साथीलाई सिकाउँदा सरल भाषा, फोटो र आफैंले दोहोर्याउन लगाउने विधि नै सबैभन्दा प्रभावकारी हुन्छ।"
    },
    {
      cat: "学科：クレーン合図者の責任",
      q: "問2：クレーンによる揚重作業において、合図者が守らなければならない義務として正しいものはどれですか。",
      q_id: "Soal 2: Manakah kewajiban mutlak yang WAJIB ditaati oleh seorang juru sinyal aba-aba crane (Aizusha)?",
      q_ne: "प्रश्न २: क्रेनलाई संकेत (इसारा) दिने आधिकारिक व्यक्तिले पालना गर्नुपर्ने अनिवार्य नियम कुन हो?",
      options: [
        { ja: "クレーン運転手および吊り荷の双方から死角がなく常に見通せる安全な位置に立ち、定まった明確な合図を単独で行う", id: "Berdiri di posisi aman yang terlihat jelas oleh sopir crane dan titik beban gantung (bebas blindspot), serta memberi sinyal tunggal yang pasti", ne: "क्रेन चालक र झुन्ड्याएको सामान दुवैले प्रष्ट देख्ने सुरक्षित ठाउँमा उभिने, र एक्लैले तोकिएको प्रष्ट संकेत दिने" },
        { ja: "吊り荷の真下に潜り込み、荷を手で抱えながら大声で叫ぶ", id: "Masuk ke kolong beban gantung sambil memeluk barang dan berteriak", ne: "झुन्ड्याएको सामानको मुनि पसेर सामान समात्दै कराउने" },
        { ja: "スマートフォンでゲームをしながら片手で適当に合図する", id: "Main game HP sambil melambaikan tangan asal-asalan", ne: "मोबाइल गेम खेल्दै एउटा हातले इसारा गर्ने" },
        { ja: "作業員全員が同時にバラバラの合図を運転手に出す", id: "Semua pekerja memberi aba-aba bersamaan secara acak", ne: "सबैले आ-आफ्नो मनखुसी फरक इसारा गर्ने" }
      ],
      answer: 0,
      expJa: "【玉掛け合図の原則】合図者は「指名された1名」のみです。運転席と吊り荷の両方が常時視認でき、かつ自身が巻き込まれない安全位置から合図を出します。",
      expId: "Juru sinyal wajib berdiri di luar jangkauan bahaya dan terlihat jelas oleh sopir crane. Dilarang ada 2 orang memberi sinyal bersamaan.",
      expNe: "संकेत दिने व्यक्ति ड्राइभरले प्रष्ट देख्ने सुरक्षित ठाउँमा उभिनुपर्छ। दुई जनाले इसारा गरे चालक झुक्किन्छ।"
    },
    {
      cat: "学科：重機・車両系建設機械の主用途外使用",
      q: "問3：油圧ショベル（バックホウ）を本来の掘削用途以外の目的で使用することが法令で原則禁止されている理由として、最も適切なものはどれですか。",
      q_id: "Soal 3: Mengapa UU K3 melarang keras penggunaan excavator untuk fungsi di luar rancangan aslinya (seperti mengangkat beban berat tanpa kran)?",
      q_ne: "प्रश्न ३: एक्साभेटरलाई खन्ने बाहेक अन्य गलत काम (जस्तै क्रेन जस्तो भारी उचाल्ने) मा प्रयोग गर्न कानुनले किन कडा प्रतिबन्ध लगाएको हो?",
      options: [
        { ja: "機体の重心バランスが崩れて横転したり、ワイヤーの外れ・アームの破断等により作業員を押し潰す重大事故が多発するため", id: "Keseimbangan titik berat mesin rusak memicu excavator terbalik, atau seling lepas/boom patah menimpa pekerja di bawahnya", ne: "मेसिनको सन्तुलन गुमेर गाडी पल्टिने, तार फुत्किने वा हातै भाँचिएर कामदार किचिने भयानक दुर्घटनाहरू हुने भएकाले" },
        { ja: "燃料の軽油がたくさん減って会社の経費がかさむから", id: "Karena boros bahan bakar solar perusahaan", ne: "डिजेल धेरै खर्च हुन्छ भनेर" },
        { ja: "重機のエンジン音がうるさくなって近所迷惑だから", id: "Karena suara mesin menjadi terlalu bising", ne: "आवाज ठूलो हुन्छ भनेर" },
        { ja: "重機メーカーの社長が怒るから", id: "Karena pemilik pabrik alat berat bisa marah", ne: "मेसिन बनाउने साहु रिसाउँछ भनेर" }
      ],
      answer: 0,
      expJa: "【安衛則第164条】バックホウでの無理な吊り上げや荷台への押し込み等の主用途外使用は、転倒災害・挟まれ災害の最大の温床です（クレーン仕様機を除く）。",
      expId: "Memakai bucket excavator untuk mengangkat barang di luar spesifikasi crane sering membalikkan alat berat menimpa manusia.",
      expNe: "एक्साभेटरको बकेटमा भारी झुन्ड्याए गाडी पल्टिएर मान्छेको ज्यान जान्छ। त्यसैले तोकिएको काममा मात्र प्रयोग गर्नुपर्छ।"
    },
    {
      cat: "学科：建築板金と屋根の「雨仕舞（あまじまい）」",
      q: "問4：屋根工事や建築板金工事において、建物を雨漏りから守る「雨仕舞」の基本概念として、最も適切なものはどれですか。",
      q_id: "Soal 4: Manakah konsep paling dasar dari 'Amajizumai' (Sistem Pengaliran Air Hujan) pada pekerjaan atap dan talang plat seng?",
      q_ne: "प्रश्न ४: छाना र जस्तापाताको काममा घरलाई पानी चुहिनबाट जोगाउने 'अमाजिमाई (पानी निकास प्रणाली)' को मुख्य सिद्धान्त कुन हो?",
      options: [
        { ja: "雨水を建物内部に浸入させないよう、水切り板金や勾配（傾き）を工夫して、雨水をスムーズに外へ受け流して雨樋に導く知恵と構造", id: "Kombinasi kemiringan dan plat flashing seng (mizukiri) untuk mengalirkan air hujan meluncur lancar menuju talang tanpa meresap masuk celah", ne: "घरभित्र पानी पस्न नदिन जस्ताको पाता र भिरालो भाग मिलाएर वर्षाको पानीलाई सजिलै बाहिर बगाउने र पाइपमा खसाल्ने वैज्ञानिक संरचना" },
        { ja: "屋根の隙間をすべて接着剤やガムテープでベタベタに固めて隙間を無くすこと", id: "Menambal seluruh celah atap dengan lakban dan lem sampai rapat mati", ne: "छानाका सबै खाली ठाउँमा टेप र गम टाँसेर बन्द गर्ने" },
        { ja: "雨水が降ってきたら屋根の上に大きな傘を差して雨宿りすること", id: "Memasang payung raksasa di atas atap rumah", ne: "छानामाथि ठूलो छाता ओढाउने" },
        { ja: "雨水はすべて天井裏に溜めて生活用水として使う構造にすること", id: "Menampung seluruh air hujan di loteng untuk air minum", ne: "पानीलाई सिलिङमा जम्मा गरेर चलाउने" }
      ],
      answer: 0,
      expJa: "【雨仕舞の本質】単に密閉（シーリング）するだけでなく、自然の重力と勾配、水切り板金を利用して「雨水を滞留させずに受け流す」ことが雨仕舞の神髄です。",
      expId: "Amajizumai bukan sekadar menambal lem, melainkan rekayasa aliran air alami menggunakan lekukan seng agar air tidak pernah tergenang.",
      expNe: "अमाजिमाई भन्नाले पानीलाई घरमा जम्नै नदिई सजिलै बगाएर बाहिर फाल्ने जस्तापाताको वैज्ञानिक विधि हो।"
    },
    {
      cat: "学科：スレート屋根とアスベスト（石綿）対策",
      q: "問5：2004年（平成16年）以前に施工された古い波板スレート屋根の改修・解体工事において、作業員の健康障害を防ぐため義務付けられている措置はどれですか。",
      q_id: "Soal 5: Tindakan pencegahan apakah yang WAJIB ditaati saat membongkar atap asbes gelombang tua demi mencegah terhirupnya serat karsinogenik asbes?",
      q_ne: "प्रश्न ५: पुरानो स्लेट छाना भत्काउँदा क्यान्सर गराउने विषालु धुलो (एस्बेस्टस) बाट बच्न कानुन अनुसार अनिवार्य पालना गर्नुपर्ने नियम कुन हो?",
      options: [
        { ja: "アスベスト（石綿）含有の事前調査を行い、石綿作業主任者を配置し、湿潤化（水撒き等）しながら割らずに手作業で取り外し、防塵マスクを着用する", id: "Survei awal asbes, tunjuk Mandor Asbes, basahi bahan agar debu tidak terbang, bongkar manual tanpa dipecahkan, dan pakai masker respirator standar", ne: "एस्बेस्टस जाँच गर्ने, विशेष कार्य प्रमुख खटाउने, धुलो नउडोस् भनी पानी छर्कने, नफुर्टाई हातैले खोल्ने र गुणस्तरीय डस्ट मास्क लगाउने" },
        { ja: "粉じんが舞い散るように、ハンマーで端から粉々に叩き割りながら作業する", id: "Menghancurkan asbes berkeping-keping dengan palu sampai berdebu tebal", ne: "हम्बरले हानेर टुक्राटुक्रा पार्दै धुलो उडाएर फुटाउने" },
        { ja: "マスクは息苦しいので外して深呼吸しながら解体する", id: "Melepas masker dan bernapas dalam-dalam", ne: "मास्क फुकालेर खुला सास फेर्दै भत्काउने" },
        { ja: "解体したスレートガラをその場で焚き火で燃やして灰にする", id: "Membakar sampah asbes di api unggun proyek", ne: "भत्काएको स्लेटलाई आगो बालेर खरानी बनाउने" }
      ],
      answer: 0,
      expJa: "【石綿障害予防規則】古いスレート板にはアスベストが含まれている可能性が高く、破砕は厳禁です。湿潤化（薬液散布）、非破砕除去、特別教育修了が必須です。",
      expId: "Membongkar asbes tua DILARANG DIHANCURKAN! Basahi dengan air dan lepaskan utuh bautnya memakai masker respirator anti-asbes.",
      expNe: "पुरानो स्लेटमा क्यान्सर गराउने एस्बेस्टस हुन्छ। त्यसैले यसलाई नफुर्टाई पानी छर्केर सिङ्गो पाता नै खोल्नुपर्छ।"
    },
    {
      cat: "学科：熱中症警戒時の「現場管理者の権限」",
      q: "問6：WBGT値が著しく上昇し、熱中症による作業員の死亡リスクが極めて高いと判断した場合、職長・安全衛生責任者に認められている権限はどれですか。",
      q_id: "Soal 6: Wewenang mutlak apakah yang dimiliki seorang Shokucho demi melindungi nyawa anak buahnya saat cuaca ekstrem membara?",
      q_ne: "प्रश्न ६: अत्यधिक गर्मी बढेर कामदारको ज्यान जाने खतरा देखिएमा शोकुचोसँग भएको सबैभन्दा ठूलो आधिकारिक अधिकार कुन हो?",
      options: [
        { ja: "人命を最優先し、元請と協議の上で作業を即座に「一時中断・中止」または作業内容の変更・退避を命じる権限", id: "Wewenang MUTLAK menghentikan sementara pekerjaan, memindahkan pekerja ke ruang sejuk, atau mengubah tugas demi keselamatan nyawa", ne: "साथीहरूको ज्यान जोगाउन काम तुरुन्त 'रोक्ने, कामको तालिका फेर्ने वा चिसो ठाउँमा सार्ने' निर्देशन दिने अधिकार" },
        { ja: "元請の許可がない限り、誰かが熱中症で死んでも絶対に作業を止めてはならない規則", id: "Dilarang stop kerja sampai ada orang meninggal", ne: "कोही नमरेसम्म काम रोक्न नपाउने नियम" },
        { ja: "作業員の給料を半額に減額する権限", id: "Memotong gaji pekerja separuh", ne: "तलब आधा काट्ने अधिकार" },
        { ja: "現場のすべての自動販売機を破壊する権限", id: "Menghancurkan mesin minuman", ne: "भेन्डिङ मेसिन फुटाउने अधिकार" }
      ],
      answer: 0,
      expJa: "【作業停止権】安衛法上、急迫した危険があるときは作業を中止し退避させなければなりません。職長は命を守るための作業中止権限を行使します。",
      expId: "Mandor BERHAK dan WAJIB menghentikan pekerjaan jika hawa panas membahayakan nyawa. Keselamatan selalu nomor satu mengalahkan deadline.",
      expNe: "गर्मीले ज्यान जाने अवस्था आए काम तुरुन्तै रोक्ने अधिकार शोकुचोसँग हुन्छ। कामभन्दा मानिसको ज्यान सधैं ठूलो हुन्छ।"
    },
    {
      cat: "学科：ハインリッヒの法則の実践（ヒヤリハット活動）",
      q: "問7：現場で「ヒヤリハット報告（ニアミス報告）」を集める際、作業員から率直な報告をたくさん集めるための職長の姿勢として正しいものはどれですか。",
      q_id: "Soal 7: Sikap kepemimpinan bagaimanakah yang BENAR dari seorang Shokucho agar para pekerja tidak takut melaporkan kejadian nyaris celaka (hiyari-hatto)?",
      q_ne: "प्रश्न ७: कामदारहरूले नडराईकन 'थोरैले जोगिएका घटनाहरू (हियारी-हाट्टो)' रिपोर्ट गरुन् भन्नका लागि शोकुचोले कस्तो व्यवहार देखाउनुपर्छ?",
      options: [
        { ja: "「非難禁止（ミスを怒らない）」の原則を徹底し、報告してくれた作業員に「危険を教えてくれてありがとう」と感謝してチーム全員で対策を考える", id: "Pegang prinsip 'DILARANG MENYALAHKAN', ucapkan terima kasih karena telah memberitahu bahaya, dan cari solusi bersama seluruh tim", ne: "'दोष नदिने (गाली नगर्ने)' नियम कडाइका साथ मान्ने, 'खतरा औंल्याइदिएकोमा धन्यवाद' भन्दै प्रशंसा गर्ने र टोली मिलेर समाधान खोज्ने" },
        { ja: "ヒヤリハットを提出した作業員を全員の前で大声で叱り飛ばす", id: "Membentak pekerja yang melapor di depan umum", ne: "रिपोर्ट ल्याउने कामदारलाई सबैको अगाडि बेस्सरी गाली गर्ने" },
        { ja: "ヒヤリハット報告を出した人のボーナスを減額する", id: "Memotong bonus pekerja yang melapor", ne: "रिपोर्ट दिने मान्छेको बोनस काट्ने" },
        { ja: "集まった報告用紙を読まずに目の前で破り捨てる", id: "Merobek kertas laporan di depan pekerja", ne: "रिपोर्टको कागज नपढी च्यातेर फालिदिने" }
      ],
      answer: 0,
      expJa: "【ヒヤリハットの鉄則】報告者を叱責すると現場は隠蔽体質になり、次は必ず死亡事故が起きます。「非難禁止」と「感謝」が安全文化の基礎です。",
      expId: "Jangan pernah marahi pekerja yang melapor nyaris celaka! Memarahi mereka membuat bahaya disembunyikan dan berujung kematian.",
      expNe: "गल्ती स्वीकारेर रिपोर्ट ल्याउने साथीलाई गाली गरे अरुले लुकाउँछन् र पछि ठूलो दुर्घटना हुन्छ। त्यसैले धन्यवाद दिएर सुधार्नुपर्छ।"
    },
    {
      cat: "学科：車両系建設機械の立ち入り禁止区域（P.182）",
      q: "問8：バックホウで掘削作業を行う際、アームやバケット、旋回体後部との激突・挟まれ事故を防ぐため、事業者が設定すべき安全エリアはどれですか。",
      q_id: "Soal 8: Area pembatas apakah yang WAJIB disterilkan dari manusia saat excavator sedang beroperasi?",
      q_ne: "प्रश्न ८: एक्साभेटरले काम गरिरहेको बेला मान्छे किचिन वा च्यापिनबाट रोक्न कानुन अनुसार खाली गराउनुपर्ने क्षेत्र कुन हो?",
      options: [
        { ja: "アームおよび旋回体の最大稼働範囲（旋回半径）の内側全域を「立入禁止区域」とし、バリケード等で区画する", id: "Seluruh radius putar maksimal bodi dan jangkauan lengan excavator wajib dipagari barikade sebagai AREA DILARANG MASUK", ne: "मेसिनको हात र पछाडिको भाग घुम्ने पूरै घेरा (रेडियस) लाई बार लगाएर 'प्रवेश निषेध क्षेत्र' बनाउने" },
        { ja: "重機の真後ろ10cmの至近距離を作業員の喫煙所にする", id: "Menjadikan area 10 cm di belakang excavator sebagai tempat merokok", ne: "मेसिनको पछाडि १० सेमी नजिक चुरोट खाने ठाउँ बनाउने" },
        { ja: "立ち入り禁止にはせず、誰でも重機を触りながら歩いてよい", id: "Bebas bagi siapa saja untuk menyentuh excavator yang berputar", ne: "घुमिरहेको गाडी जोसुकैले छुन पाउने" },
        { ja: "バケットの下を安全通路として通り抜けさせる", id: "Menjadikan kolong bucket sebagai jalur jalan kaki umum", ne: "बकेट मुनिबाट मान्छे हिँड्ने बाटो बनाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.182参照】重機災害の多くは旋回範囲内への侵入による挟まれ・激突です[cite: 12]。カラーコーンやバーによる物理的な隔離が必須です[cite: 12]。",
      expId: "Radius putar excavator adalah zona maut. Siapa pun dilarang melangkahkan kaki ke dalam batas kerucut cone pembatas.",
      expNe: "एक्साभेटर घुम्ने ठाउँमा मान्छे छिरे सिधै किचिन्छ। त्यसैले त्यो पूरै क्षेत्रमा बार लगाएर मान्छे पस्न निषेध गर्नुपर्छ।"
    },
    {
      cat: "学科：熱中症対策・経口補水液の適正温度",
      q: "問9：熱中症予防および初期処置において、体内に最も速やかに吸収され、かつ体内から熱を奪うのに適した「飲料水の温度」はどれですか。",
      q_id: "Soal 9: Berapakah suhu air minum yang PALING CEPAT diserap lambung dan paling efektif mendinginkan tubuh saat musim panas?",
      q_ne: "प्रश्न ९: गर्मीमा पिएको पानी पेटले सबैभन्दा छिटो सोस्न र शरीर चिस्याउनका लागि पिउने पानीको सबैभन्दा उत्तम तापक्रम कति हुनुपर्छ?",
      options: [
        { ja: "5℃ 〜 15℃（ほどよく冷たい温度）", id: "5°C sampai 15°C (suhu dingin sejuk yang pas)", ne: "५ देखि १५ डिग्री (ठिक्कको चिसो पानी)" },
        { ja: "100℃（沸騰した熱湯）", id: "100°C (air mendidih panas)", ne: "१०० डिग्री (उम्लेको तातो पानी)" },
        { ja: "マイナス50℃の固体氷の塊", id: "Bongkahan es beku minus 50°C", ne: "माइनस ५० डिग्रीको बरफ" },
        { ja: "生ぬるい50℃のお湯", id: "Air hangat suam-suam kuku 50°C", ne: "५० डिग्रीको तातो पानी" }
      ],
      answer: 0,
      expJa: "【水分の吸収速度】飲料水は「5〜15℃」に冷えていると胃から腸への排出が最も速く、かつ体内の熱を吸収して効率的に体温を下げます。",
      expId: "Air bersuhu 5-15°C paling cepat diserap dinding usus ke pembuluh darah dan membantu mendinginkan suhu lambung.",
      expNe: "५ देखि १५ डिग्रीको ठिक्कको चिसो पानी पेटले सबैभन्दा चाँडो रगतमा पुर्याउँछ र शरीरलाई छिटो चिस्याउँछ।"
    },
    {
      cat: "学科：高所開口部の手すりの強度要件",
      q: "問10：足場や床開口部に設ける高さ85cm以上の手すりにおいて、作業員が寄りかかったり衝突した際に耐えなければならない荷重強度基準はどれですか。",
      q_id: "Soal 10: Berapakah beban dorong horizontal minimal yang WAJIB mampu ditahan oleh pagar pengaman (railing) perancah agar tidak patah saat ditabrak pekerja?",
      q_ne: "प्रश्न १०: खट वा खुला ठाउँमा लगाइएको सुरक्षा रेलिङमा कामदार ठोक्किँदा वा अडेस लाग्दा नभाँचियोस् भन्नाका लागि रेलिङले कम्तीमा कति किलोको धक्का थेग्नै पर्छ?",
      options: [
        { ja: "85kg以上の水平荷重（成人男性が体重を預けても外れたり変形しない強度）", id: "Beban dorong horizontal minimal 85 kg (sekitar 833 N ke atas tanpa patah terlepas)", ne: "कम्तीमा '८५ किलो वा त्योभन्दा बढी' को तेर्सो धक्का (वयस्क मान्छे ठोक्किँदा पनि नभाँचिने बलियोपन)" },
        { ja: "10gの羽毛が触れただけで折れる強度", id: "Patah jika terkena bulu burung seberat 10 gram", ne: "१० ग्रामको चराको प्वाँखले छुँदा पनि भाँचिने" },
        { ja: "手すりはロープ1本をセロハンテープで留めただけでよい", id: "Cukup tali rafia yang ditempel selotip kertas", ne: "टेपले टाँसेको डोरी भए पुग्ने" },
        { ja: "手すりの強度に関する法的な基準は存在しない", id: "Tidak ada standar hukum", ne: "कुनै कानुनी नियम छैन" }
      ],
      answer: 0,
      expJa: "【手すりの強度基準】手すりや中さんは、人がつまずいてぶつかった際に脱落しないよう、85kg（833N）以上の水平荷重に耐える構造が義務です。",
      expId: "Pagar railing wajib kokoh menahan hantaman beban minimal 85 kg agar tidak patah saat tersenggol orang berbadan besar.",
      expNe: "मान्छे लडेर ठोक्किँदा रेलिङ नभाँचियोस् भनेर कम्तीमा ८५ किलोको धक्का थेग्ने बलियो रेलिङ बनाउनै पर्छ।"
    },
    {
      cat: "学科：有機溶剤中毒予防・換気装置の排気口",
      q: "問11：屋内で有機溶剤を使用する際に稼働させる局所排気装置（換気ダクト）について、排出されたシンナー蒸気が周囲に悪影響を及ぼさないための排気口の位置基準はどれですか。",
      q_id: "Soal 11: Di manakah posisi lubang pembuangan pipa exhaust (ducting) saat menyedot uap thinner berbahaya dari dalam ruangan?",
      q_ne: "प्रश्न ११: कोठाभित्र थिनरको काम गर्दा विषालु बाफ बाहिर फाल्ने पङ्खाको पाइप (डक्ट) को मुख कता फर्काएर राख्नुपर्छ?",
      options: [
        { ja: "屋外の安全な場所で、かつ建物の窓や空気取入口から離れた高さ（原則として屋上等の十分な高さ）へ排気する", id: "Dibuang ke udara terbuka di luar gedung, jauh dari jendela/ventilasi masuk, dan di ketinggian aman (misal atap)", ne: "झ्याल वा ताजा हावा छिर्ने ठाउँभन्दा धेरै टाढा बाहिर खुला हावामा र अग्लो छतमा पुर्याएर फाल्ने" },
        { ja: "隣の部屋の休憩所の換気扇の吸気口の真ん前に吹き出す", id: "Ditiupkan tepat ke jendela ruang istirahat rekan kerja", ne: "अर्को कोठाको आराम गर्ने ठाउँको झ्यालतिर फर्काउने" },
        { ja: "現場事務所のエアコンの真裏に排気する", id: "Dibuang ke saluran AC kantor proyek", ne: "अफिसको एसीको पछाडि फाल्ने" },
        { ja: "排気管を自分のズボンの裾の中に差し込んでおく", id: "Dimasukkan ke dalam celana sendiri", ne: "आफ्नै प्यान्टभित्र पाइप छिराउने" }
      ],
      answer: 0,
      expJa: "【有機則第17条】排気口から出た有害ガスが再び建物内に逆流しないよう、排気口は直接屋外の安全な開放空間へ立ち上げます。",
      expId: "Uap beracun wajib dibuang ke udara bebas di atap luar. Jangan buang di dekat jendela terbuka karena racun akan terhirup kembali.",
      expNe: "विषालु हावा फेरि कोठाभित्र नपसोस् भनेर बाहिर खुला ठाउँमा र झ्यालहरूभन्दा टाढा अग्लो ठाउँबाट फाल्नुपर्छ।"
    },
    {
      cat: "学科：熱中症予防・塩分補給タブレット",
      q: "問12：夏季の現場で作業員に配布される「塩熱サプリ（塩分補給タブレット）」を摂取する際、必ず守らなければならない医学的ルールはどれですか。",
      q_id: "Soal 12: Aturan medis apakah yang WAJIB dipatuhi saat pekerja mengonsumsi tablet permen garam (Shio Tablet) di musim panas?",
      q_ne: "प्रश्न १२: गर्मीमा कामदारलाई बाँडिने 'नुनको चक्की (साल्ट ट्याब्लेट)' खाँदा पालना गर्नुपर्ने अनिवार्य नियम के हो?",
      options: [
        { ja: "必ず「十分な水分（水またはお茶コップ1〜2杯）」と一緒に摂取する（水なしで塩分だけを摂ると胃や腎臓に負担がかかり脱水が悪化するため）", id: "WAJIB diminum bersama AIR YANG CUKUP (1-2 gelas air). Mengonsumsi tablet garam tanpa air justru memperparah dehidrasi ginjal!", ne: "अनिवार्य रूपमा 'प्रशस्त पानी (१ देखि २ गिलास)' सँगै खाने (पानी नपिई नुनको चक्की मात्र खाए मिर्गौला बिग्रिन्छ र डिहाइड्रेसन झन् बढ्छ)" },
        { ja: "水は一切飲まずに、1回にタブレットを100粒まとめて噛み砕く", id: "Mengunyah 100 butir sekaligus tanpa minum air", ne: "पानी नपिई एकैपटक १०० वटा चक्की चपाउने" },
        { ja: "塩分タブレットを砕いて目薬として目の中に入れる", id: "Menumbuk tablet dan memasukkannya ke mata", ne: "धुलो बनाएर आँखामा हाल्ने" },
        { ja: "お酒（ビール）のつまみとしてだけ食べる", id: "Hanya dimakan sebagai camilan minum bir", ne: "बियर खाँदा सितन बनाएर खाने" }
      ],
      answer: 0,
      expJa: "【塩分補給の注意点】塩分だけを過剰に摂取すると、体内の浸透圧が狂い細胞から水分が奪われて危険です。必ず十分な水分（水100〜200ml）と一緒に摂取します。",
      expId: "Tablet garam WAJIB ditelan bersama air putih. Menelan garam kering tanpa air membuat darah makin pekat berbahaya.",
      expNe: "नुनको चक्की सधैं पानीसँगै खानुपर्छ। पानी नपिई चक्की मात्र खाए रगत धेरै बाक्लो भएर ज्यान जोखिममा पर्छ।"
    },
    {
      cat: "学科：脚立使用時の「天板直下2段目」ルール",
      q: "問13：高さ2mの脚立を使用する際、作業員が安全に足を乗せて作業できる「最高限度のステップ位置」はどこですか。",
      q_id: "Soal 13: Pada tangga lipat setinggi 2 meter, manakah batas anak tangga PALING ATAS yang masih diizinkan untuk dipijak kaki pekerja?",
      q_ne: "प्रश्न १३: २ मिटर अग्लो भर्याङ (क्याताचु) मा काम गर्दा, कामदारले खुट्टा राखेर काम गर्न पाउने 'सबैभन्दा माथिल्लो सुरक्षित खुड्किला' कुन हो?",
      options: [
        { ja: "天板から数えて「2段目以下（上から2番目より下のステップ）」", id: "Anak tangga nomor 2 DARI ATAS (atau lebih bawah)", ne: "टुप्पोबाट गन्दा 'दोस्रो खुड्किला वा त्योभन्दा मुनि'" },
        { ja: "天板（最上部）の板の上", id: "Papan paling atas (top plate)", ne: "सबैभन्दा टुप्पोको फलेकमाथि" },
        { ja: "脚立の開き止め金具の針金の上", id: "Di atas kawat engsel pengunci", ne: "बीचको फलामे लक माथि" },
        { ja: "脚立のてっぺんに立てた丸太の上", id: "Di atas kayu yang dipasang di puncak tangga", ne: "टुप्पोमा काठ राखेर त्यसमाथि" }
      ],
      answer: 0,
      expJa: "【テキスト P.184参照】脚立の天板（最上段）に乗ることは禁止です[cite: 14]。安全に作業できる足場は「天板から2段目以下」であり、身体を脚立に密着させて安定を保ちます[cite: 14]。",
      expId: "Batas pijakan kaki teratas adalah anak tangga kedua dari atas. Menginjak papan teratas adalah pelanggaran K3 fatal.",
      expNe: "क्याताचुको टुप्पोमा खुट्टा राख्न पाइँदैन। कम्तीमा माथिबाट दोस्रो वा त्योभन्दा मुनिको खुड्किलामा मात्र उभिनुपर्छ।"
    },
    {
      cat: "学科：足場板の支持点数と跳ね出し（P.150）",
      q: "問14：足場板を作業床として敷く際、板が中央でたわんだり端を踏んで跳ね上がらないようにするための支持（腕木）の基準として正しいものはどれですか。",
      q_id: "Soal 4: Bagaimanakah standar penopang pipa bantalan (udegi) di bawah papan perancah agar papan tidak melengkung atau terjungkit saat diinjak?",
      q_ne: "प्रश्न १४: खटको काठको फलेक टेक्दा बीचमा लच्किन वा छेउमा टेक्दा पल्टिन नदिन मुनिको सपोर्ट पाइप (उदेगी) कति ठाउँमा हुनुपर्छ?",
      options: [
        { ja: "足場板は原則として「3箇所以上の支持点」で支え、端部の跳ね出し長さは「10cm〜20cm程度」として番線で確実に固定する", id: "Papan perancah ditopang minimal di 3 titik tumpuan (kedua ujung & tengah), dengan ujung menonjol keluar (cantilever) 10-20 cm dan diikat kawat", ne: "फलेकलाई कम्तीमा '३ ठाउँमा (दुवै छेउ र बीचमा)' पाइपले थेग्ने, छेउको बाहिर निस्कने भाग '१० देखि २० सेमी' राख्ने र तारले बाँध्ने" },
        { ja: "中央の1箇所だけでシーソーのように支える", id: "Hanya ditopang di 1 titik tengah seperti jungkat-jungkit", ne: "बीचमा एउटा मात्र पाइप राखेर पल्टिने बनाउने" },
        { ja: "板の端を1メートル以上大きく突き出させておく", id: "Membiarkan ujung papan menonjol bebas 1 meter ke luar", ne: "छेउको भाग १ मिटर भन्दा धेरै बाहिर निकाल्ने" },
        { ja: "支持パイプは使わず、板どうしをボンドで貼り合わせる", id: "Tanpa pipa penopang dan hanya dilem", ne: "पाइप नराखी फलेक मात्र गमले टाँस्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.150参照】2点支持だと中央がたわみ、端を踏んだ瞬間に板が跳ね上がって作業員が転落します。原則3点支持＋適正な跳ね出し（10〜20cm）を守ります。",
      expId: "Papan perancah wajib 3 tumpuan (3-point support) dan overlap ujungnya 10-20 cm agar tidak njolak-njeglok saat diinjak ujungnya.",
      expNe: "फलेकलाई ३ ठाउँमा पाइपले नथेगे छेउमा टेक्नासाथ फलेक पल्टिएर मान्छे तल खस्छ।"
    },
    {
      cat: "学科：熱中症と「現場の製氷機の衛生管理」",
      q: "問15：夏季に現場に設置される製氷機（アイスメーカー）から氷を取り出す際、感染症や食中毒を防ぐための正しい衛生管理はどれですか。",
      q_id: "Soal 15: Bagaimanakah cara pengambilan es batu dari mesin pembuat es (seihyouki) di barak proyek yang BENAR dan higienis?",
      q_ne: "प्रश्न १५: कार्यस्थलको बरफ मेसिनबाट बरफ निकाल्दा झाडापखाला वा रोग सर्न नदिन पालना गर्नुपर्ने सही नियम कुन हो?",
      options: [
        { ja: "泥や油で汚れた素手で直接氷を掴み取らず、必ず専用の清潔な「アイススコップ」を使用して取り出す", id: "DILARANG mengambil es dengan tangan kosong yang kotor! Selalu gunakan 'Sekop Es Bersih Khusus' yang disediakan", ne: "हिलो वा तेल लागेको खाली हातले सिधै बरफ नछुने, अनिवार्य रूपमा सफा 'बरफको चम्चा (स्कुप)' प्रयोग गरेर निकाल्ने" },
        { ja: "作業後の泥だらけの軍手で氷をかき混ぜて鷲づかみする", id: "Mengaduk-aduk es dengan sarung tangan kain yang berlumpur", ne: "हिलो लागेको पञ्जाले बरफ मुछेर निकाल्ने" },
        { ja: "安全靴のまま製氷機の中に入って足で氷を踏み出す", id: "Menginjak-injak es di dalam mesin memakai sepatu safety", ne: "सेफ्टी जुत्ता लगाएर मेसिनभित्र पसेर कुल्चने" },
        { ja: "製氷機の中に飲みかけの缶ジュースを沈めて冷やす", id: "Merendam kaleng minuman bekas ke dalam wadah es batu", ne: "जुसको जुठो क्यान मेसिनभित्र डुबाएर राख्ने" }
      ],
      answer: 0,
      expJa: "【製氷機の衛生管理】汚れた手で氷を取るとノロウイルスや大腸菌が集団感染し現場全体が麻痺します。専用スコップの使用と定期消毒を徹底します。",
      expId: "Gunakan sekop es khusus. Mengambil es dengan tangan kotor memicu wabah muntaber massal di lokasi proyek.",
      expNe: "फोहोर हातले बरफ झिके पूरै टोलीलाई झाडापखाला लाग्छ। त्यसैले सधैं सफा चम्चाले मात्र बरफ निकाल्नुपर्छ।"
    },
    {
      cat: "学科：移動式クレーンのアウトリガ完全張出しの原則",
      q: "問16：クレーン作業において、なぜアウトリガを「最大（100%）に張り出す」ことが原則とされているのですか。",
      q_id: "Soal 16: Mengapa kaki hidrolik outrigger crane WAJIB dijulurkan secara MAKSIMAL (100% Full Extended)?",
      q_ne: "प्रश्न १६: क्रेनको खुट्टा (आउट्रिगर) सधैं 'पूरै बाहिर (१००%)' निकाल्नु किन अनिवार्य मानिन्छ?",
      options: [
        { ja: "張出し幅を狭くすると、荷物を横に旋回させた瞬間に転倒モーメントに耐え切れず、定格荷重以内であっても一瞬で横転倒壊するため", id: "Jika kaki tidak full, momen kestabilan anjlok drastis; crane akan langsung terbalik saat boom berputar ke samping meski beban tidak berlebih", ne: "खुट्टा पूरै ननिकाले मेसिनको सन्तुलन धेरै कमजोर हुन्छ; र सामान छेउतिर घुमाउने बित्तिकै तोकिएको तौलभित्रै भए पनि क्रेन तुरुन्तै पल्टिन्छ" },
        { ja: "アウトリガを出すと道路が狭くなって車が通れなくなるから", id: "Agar jalanan macet", ne: "बाटो जाम गराउन" },
        { ja: "見た目がカニの足のようでかっこいいから", id: "Agar tampak keren seperti kepiting", ne: "राम्रो देखाउनका लागि" },
        { ja: "アウトリガは飾りなので出しても出さなくても性能は同じである", id: "Hiasan saja tanpa pengaruh", ne: "देखावटी सामान मात्र भएकोले" }
      ],
      answer: 0,
      expJa: "【アウトリガの性能】クレーンの吊り上げ能力表は「アウトリガ最大張出し」を基準に計算されています。幅を狭くすると能力は半分以下に激減し即横転します。",
      expId: "Kapasitas angkat crane dihitung atas dasar outrigger terbuka 100%. Membuka separuh membuat crane terpelanting saat boom miring.",
      expNe: "क्रेनको सम्पूर्ण तागत खुट्टा पूरै बाहिर निकाल्दा मात्र आउँछ। खुट्टा थोरै निकाले सामान घुमाउनासाथ क्रेन पल्टिन्छ।"
    },
    {
      cat: "学科：熱中症と「高齢作業員の口渇感低下」",
      q: "問17：高齢の建設技能者が、若手作業員に比べて熱中症で重症化しやすい医学的理由として正しいものはどれですか。",
      q_id: "Soal 17: Mengapa pekerja konstruksi lanjut usia (lansia) jauh lebih rentan terkena heatstroke parah tanpa mereka sadari?",
      q_ne: "प्रश्न १७: उमेर ढल्किएका वृद्ध कामदारहरू युवाहरूको तुलनामा किन सजिलै थाहा नपाईकनै हिटस्ट्रोकबाट थलिन्छन्?",
      options: [
        { ja: "加齢により体内の水分割合が減少し、さらに「喉の渇きを感じる脳のセンサー（口渇感）」が鈍くなっているため、脱水が進んでいても水分を摂らない傾向があるから", id: "Kandungan air tubuh lansia lebih sedikit, dan sensor haus di otak melemah sehingga mereka tidak merasa haus meski tubuh sudah krisis air", ne: "उमेर बढेपछि शरीरमा पानीको मात्रा कम हुन्छ, र 'तिर्खा लागेको थाहा पाउने दिमागको सेन्सर' कमजोर हुने हुनाले डिहाइड्रेसन भइसक्दा पनि पानी नपिउने बानी हुन्छ" },
        { ja: "高齢者は体温が常に50℃を超えているから", id: "Suhu tubuh lansia selalu 50°C", ne: "तापक्रम सधैं ५० डिग्री हुने भएकोले" },
        { ja: "高齢者は水を飲むと病気になる体質だから", id: "Lansia tidak boleh minum air", ne: "पानी पिए बिरामी हुने भएकोले" },
        { ja: "若者よりも汗を100倍多くかくから", id: "Berkeringat 100 kali lebih banyak", ne: "धेरै पसिना आउने भएकोले" }
      ],
      answer: 0,
      expJa: "【高齢者の熱中症特徴】高齢者は口渇中枢の感受性が低下しており、「喉が渇いた」と感じた時には手遅れレベルの脱水になっています。時間を決めた定時強制給水が必須です。",
      expId: "Pekerja tua tidak merasa haus meski tubuhnya sekarat dehidrasi. Shokucho wajib menyuruh mereka minum berdasarkan jadwal jam, bukan rasa haus.",
      expNe: "वृद्ध साथीहरूलाई शरीर सुक्खा भइसक्दा पनि तिर्खा लागेको थाहै हुन्न। त्यसैले तिर्खा नलागे पनि समय मिलाएर पानी पिउन लगाउनै पर्छ।"
    },
    {
      cat: "学科：墜落制止用器具のフック「不完全ロック」の危険",
      q: "問18：フルハーネスのランヤードのフックを足場パイプに掛ける際、絶対にやってはならない「不安全な掛け方」はどれですか。",
      q_id: "Soal 18: Manakah cara mencantolkan kait hook lanyard harness yang SALAH dan SANGAT BERBAHAYA?",
      q_ne: "प्रश्न १८: सेफ्टी हार्नेसको हुक खटको पाइपमा अड्काउँदा झुक्केर पनि गर्न नहुने 'खतरनाक तरिका' कुन हो?",
      options: [
        { ja: "フックの外れ止め装置（安全レバー）が開ききったまま引っ掛ける「掛けっぱなし（口開き掛け）」", id: "Mencantolkan hook dengan kondisi lidah pengunci terbuka menganga gantung (tidak mengunci 'klik')", ne: "हुकको सुरक्षा लक (जिब्रो) बन्द नभई खुल्लै रहेको अवस्थामा झुन्ड्याएर काम गर्नु" },
        { ja: "フックの外れ止めが「カチッ」と完全に閉じたことを目視と手で確認する", id: "Memastikan lidah kait terkunci bunyi 'klik' sempurna", ne: "हुकको लक 'क्लिक' गरेर बन्द भएको हात र आँखाले पक्का गर्नु" },
        { ja: "腰より高い位置にある堅固な構造物に掛ける", id: "Mencantolkan di struktur kokoh di atas pinggang", ne: "कम्मरभन्दा माथिको बलियो ठाउँमा अड्काउनु" },
        { ja: "ランヤードが鋭利な角に擦れないように確認する", id: "Memastikan tali tidak mengenai sudut tajam", ne: "डोरी धारिलो कुनामा नघोटिएको हेर्नु" }
      ],
      answer: 0,
      expJa: "【テキスト P.189参照】外れ止めが閉じていない「口開き」状態だと、作業員の身体の反転やロープの跳ね返りによってフックがパイプから外れて墜落死します[cite: 19]。",
      expId: "Kait hook yang tidak mengunci 'klik' akan terlepas sendiri saat tali tersenggol. Selalu tarik hook dengan tangan untuk memastikan sudah terkunci mati.",
      expNe: "हुकको लक राम्ररी बन्द नभए डोरी हल्लिने बित्तिकै हुक आफैं फुत्किन्छ र मान्छे तल खस्छ।"
    },
    {
      cat: "学科：熱中症と「現場の休憩所の環境基準」",
      q: "問19：厚生労働省のガイドラインに基づき、事業者が現場に設置すべき「熱中症予防のための休憩所」の設備基準として正しいものはどれですか。",
      q_id: "Soal 19: Standar fasilitas apakah yang WAJIB dipenuhi pada ruang istirahat proyek (rest area) untuk mencegah heatstroke menurut Kemenaker Jepang?",
      q_ne: "प्रश्न १९: श्रम मन्त्रालयको निर्देशिका अनुसार कार्यस्थलको आराम कोठामा अनिवार्य हुनुपर्ने सुविधाहरू कुन हुन्?",
      options: [
        { ja: "冷房設備（エアコン）を備えるか日陰で風通しを良くし、氷・冷水・塩分が常備され、横になって足を高くして休息できるスペースがあること", id: "Tersedia pendingin AC (atau teduh berventilasi), stok es & air dingin & garam, serta kasur/lantai untuk berbaring mengangkat kaki", ne: "एसी भएको (वा हावा चल्ने चिसो छहारी), बरफ, चिसो पानी र नुन सधैं राखिएको, र खुट्टा माथि उठाएर पल्टिन मिल्ने ठाउँ भएको" },
        { ja: "気温45℃の密閉されたビニールハウス", id: "Ruangan plastik tertutup bersuhu 45°C", ne: "४५ डिग्री तातो भएको बन्द कोठा" },
        { ja: "椅子も水もなく立木に寄りかかって立つだけの場所", id: "Hanya berdiri bersandar pohon tanpa air", ne: "पानी र कुर्सी नभएको रूखको फेद" },
        { ja: "休憩所の中での会話や水分補給を法律で禁止すること", id: "Melarang minum air di dalam ruang istirahat", ne: "आराम कोठाभित्र पानी पिउन निषेध गरिएको ठाउँ" }
      ],
      answer: 0,
      expJa: "【テキスト P.191参照】熱中症休憩所は「エアコン＋製氷機・給水器＋塩分＋仰臥位（足を上げて寝転がれる）スペース」の4点セットが標準仕様です[cite: 21]。",
      expId: "Ruang istirahat wajib ber-AC, ada air es & garam, dan bisa dipakai rebahan dengan posisi kaki lebih tinggi dari kepala untuk memulihkan tensi darah.",
      expNe: "आराम कोठामा एसी, चिसो पानी, नुन र खुट्टा माथि पारेर पल्टिन मिल्ने ठाउँ हुनैपर्छ।"
    },
    {
      cat: "学科：職長と「作業員の褒め方・叱り方」",
      q: "問20：外国人実習生や若手作業員の安全意識を向上させ、信頼関係を築くための職長の「指導方法」として最も適切なものはどれですか。",
      q_id: "Soal 20: Bagaimanakah teknik membina dan menegur (Coaching) yang PALING EFEKTIF bagi Shokucho untuk mendisiplinkan pekerja muda/pekerja asing?",
      q_ne: "प्रश्न २०: विदेशी वा नयाँ कामदारलाई सुरक्षा नियम सिकाउन र उनीहरूको मन जित्न शोकुचोले गर्नुपर्ने सबैभन्दा असल तरिका कुन हो?",
      options: [
        { ja: "良い行動（手順遵守や整理整頓）は「その場ですぐ具体的に褒め」、危険な行動は「感情的にならず理由を説明して個別に指導する」", id: "Tindakan K3 yang benar 'LANGSUNG DIPUJI DI TEMPAT SECARA SPESIFIK', dan pelanggaran bahaya 'DITEGUR DENGAN LOGIS TANPA EMOSI MARAH SECARA EMPAT MATA'", ne: "राम्रो काम गर्दा 'तत्काल त्यहीँ स्पष्ट प्रशंसा गर्ने', र गल्ती गर्दा 'रिस नदेखाई एक्लै बोलाएर कारण सम्झाई सम्झाउने'" },
        { ja: "どんなに良い仕事をしても絶対に褒めず、粗探しをして怒鳴る", id: "Tidak pernah memuji dan selalu mencari-cari kesalahan untuk dibentak", ne: "जति राम्रो गरे पनि प्रशंसा नगर्ने र खोट खोजेर गाली मात्र गर्ने" },
        { ja: "ミスをした作業員を全員の前で正座させて土下座させる", id: "Menyuruh pekerja sujud meminta maaf di depan umum", ne: "सबैको अगाडि घुँडा टेक्न लगाएर माफी माग्न लगाउने" },
        { ja: "危ない作業をしていても面倒なので何も言わず無視する", id: "Masa bodoh membiarkan bahaya karena malas menegur", ne: "खतरा देखे पनि झन्झट मानेर केही नभन्ने" }
      ],
      answer: 0,
      expJa: "【職長のコーチング技術】「褒める時はみんなの前で即座に、叱る（指導する）時は感情を排して理由を1対1で教える」が人を育てる不変の鉄則です。",
      expId: "Puji di depan umum, tegur empat mata secara logis. Membentak kasar merusak mental dan membuat pekerja menutupi bahaya.",
      expNe: "राम्रो कामको सबैको अगाडि प्रशंसा गर्ने, तर गल्ती हुँदा रिस नगरी एक्लै बोलाएर कारण सिकाउनु नै असल नेतृत्व हो।"
    },
    {
      cat: "学科：熱中症と「朝食抜き」の重大リスク",
      q: "問21：現場の朝礼問診で作業員が「今朝は時間がなくて朝ごはんを食べてこなかった」と申告しました。職長が直ちにパンやおにぎりを食べさせるべき医学的理由は何ですか。",
      q_id: "Soal 21: Pekerja lapor belum sarapan pagi ini karena terburu-buru. Mengapa Shokucho WAJIB menyuruhnya sarapan roti/onigiri sebelum mulai kerja di musim panas?",
      q_ne: "प्रश्न २१: बिहान हतार भएर खाना नखाई आएको कामदारलाई, गर्मीमा काम थाल्नुअघि नै शोकुचोले अनिवार्य केही खान लगाउनुपर्ने चिकित्सकीय कारण के हो?",
      options: [
        { ja: "朝食を抜くと、エネルギー不足だけでなく、食事から摂取すべき「約1リットルの水分と塩分」が体内に不足しており、午前中の早い段階で脱水症・熱中症を起こすため", id: "Melewatkan sarapan berarti tubuh tekor cairan ~1 LITER dan garam yang seharusnya didapat dari makanan, memicu pingsan dehidrasi di pagi hari", ne: "खाना नखाँदा तागत मात्र होइन, खानाबाट पाइने 'करिब १ लिटर पानी र नुन' शरीरमा नपुगेर बिहानै हिटस्ट्रोक भएर ढल्ने खतरा हुने भएकाले" },
        { ja: "現場のお弁当屋さんの売り上げを伸ばすため", id: "Agar warung makan proyek laku", ne: "होटलको व्यापार बढाउन" },
        { ja: "朝ごはんを食べないと靴ひもがほどけやすくなるから", id: "Tali sepatu mudah lepas", ne: "जुत्ताको तुना फुत्किन्छ भनेर" },
        { ja: "満腹にすると体が重くなって高所から飛び降りられなくなるから", id: "Agar tubuh gemuk tidak bisa lompat", ne: "मोटो भएर हामफाल्न नसकोस् भनेर" }
      ],
      answer: 0,
      expJa: "【朝食と熱中症】人間は1日の必要水分の約半分を食事から得ています。朝食抜きは「500〜1000mlの脱水状態」で猛暑現場に出動するのと同じであり自殺行為です。",
      expId: "Sarapan menyumbang 1 liter air dan mineral bagi tubuh. Melewatkan sarapan adalah resep instan pingsan heatstroke di jam 10 pagi.",
      expNe: "मानिसले दैनिक चाहिने आधा पानी खानाबाटै पाउँछ। बिहान खाना नखाई घाममा काम गर्नु भनेको मृत्युलाई निम्तो दिनु सरह हो।"
    },
    {
      cat: "学科：足場の「布（ぬの）」と「建地（たてじ）」の用語",
      q: "問22：単管足場やくさび緊結式足場において、地面に対して垂直に立つ「縦の支柱」と、水平方向に渡す「横のパイプ」の現場名称の正しい組み合わせはどれですか。",
      q_id: "Soal 22: Manakah pasangan istilah perancah yang BENAR untuk 'Tiang Vertikal yang Berdiri Tegak' dan 'Pipa Horizontal yang Membujur Rata'?",
      q_ne: "प्रश्न २२: खटमा जमिनबाट ९० डिग्री सिधा उभिने 'ठाडो खम्बा' र तेर्सो पारिने 'तेर्सो पाइप' को सही जापानी नाम कुन हो?",
      options: [
        { ja: "垂直の支柱：建地（たてじ） ／ 水平の横パイプ：布（ぬの）", id: "Tiang Vertikal: Tateji ／ Pipa Horizontal: Nuno", ne: "ठाडो खम्बा: तातेजी (Tateji) ／ तेर्सो पाइप: नुनो (Nuno)" },
        { ja: "垂直の支柱：布 ／ 水平の横パイプ：建地", id: "Tiang Vertikal: Nuno ／ Pipa Horizontal: Tateji", ne: "ठाडो: नुनो ／ तेर्सो: तातेजी" },
        { ja: "垂直の支柱：幅木 ／ 水平の横パイプ：筋交い", id: "Tiang Vertikal: Habaki ／ Pipa Horizontal: Sujikai", ne: "ठाडो: हाबाकी ／ तेर्सो: सुजिकाई" },
        { ja: "垂直の支柱：梁 ／ 水平の横パイプ：柱", id: "Tiang Vertikal: Hari ／ Pipa Horizontal: Hashira", ne: "ठाडो: बिम ／ तेर्सो: पिलर" }
      ],
      answer: 0,
      expJa: "【テキスト P.150参照】足場の基本構造用語です。垂直の支柱を「建地（たてじ）」、桁行方向（長手方向）に水平に渡すパイプを「布（ぬの）」と呼びます。",
      expId: "Tateji adalah tiang tegak perancah; Nuno adalah pipa membujur horizontal yang mengikat tiang tateji.",
      expNe: "खटको ठाडो पिलरलाई 'तातेजी' र तेर्सो पाइपलाई 'नुनो' भनिन्छ। यो आधारभूत प्राविधिक शब्द हो।"
    },
    {
      cat: "学科：熱中症と「現場の緊急連絡網」",
      q: "問23：現場事務所や休憩所に必ず貼り出しておくべき「熱中症・労災緊急連絡体制図」に記載すべき必須情報の組み合わせはどれですか。",
      q_id: "Soal 23: Informasi darurat apakah yang WAJIB tertulis besar di dinding barak proyek untuk penanganan darurat kecelakaan?",
      q_ne: "प्रश्न २३: कार्यस्थलको भित्तामा ठूलो अक्षरले टाँसिने 'आपतकालीन सम्पर्क तालिका' मा अनिवार्य हुनुपर्ने विवरण कुन हो?",
      options: [
        { ja: "救急通報先（119番）、現場の正確な所在地住所（目標物・呼称）、最寄りの救急指定病院の名称と電話番号、元請現場本部の緊急連絡先", id: "Nomor 119 Ambulans, Alamat Lengkap Titik Proyek (patokan jalan), Nama & Telepon Rumah Sakit Rujukan Terdekat, serta HP Komando Kantor Proyek", ne: "एम्बुलेन्स (११९), कार्यस्थलको ठ्याक्कै ठेगाना (नजिकैको चिनिने ठाउँ), नजिकको इमर्जेन्सी अस्पतालको नाम र फोन, र मुख्य हाकिमको फोन नम्बर" },
        { ja: "現場監督の好きなプロ野球チームの勝敗表", id: "Jadwal pertandingan bisbol pengawas", ne: "बेसबल खेलको तालिका" },
        { ja: "居酒屋の生ビール半額クーポンのチラシ", id: "Brosur kupon diskon bir kedai minum", ne: "रक्सी पसलको छुट कुपन" },
        { ja: "現場の近くのパチンコ店の新台入替情報", id: "Info mesin baru kasino pachinko", ne: "पाचिङ्को क्यासिनोको सूचना" }
      ],
      answer: 0,
      expJa: "【緊急時体制】パニック時に現場住所や病院名が出てこず数分のロスが生じます。誰でも目に入る場所に「住所と病院電話番号」を特大文字で掲示します。",
      expId: "Tempel alamat proyek dan nomor telepon RS darurat di dinding dengan huruf besar agar siapa pun bisa membaca lancar saat menelpon 119.",
      expNe: "आपत पर्दा ठेगाना बिर्सिन सक्छ। त्यसैले जोसुकैले देख्ने गरी भित्तामा कार्यस्थलको ठेगाना र अस्पतालको नम्बर टाँस्नै पर्छ।"
    },
    {
      cat: "学科：クレーン作業と「吊り荷の下への立入り禁止」",
      q: "問24：クレーンで資材を吊り上げて高所へ運搬中、玉掛けワイヤーが万一破断した場合に作業員が押し潰されて即死するのを防ぐ絶対ルールはどれですか。",
      q_id: "Soal 24: Aturan keselamatan MUTLAK apakah yang melindungi pekerja dari maut saat kawat sling putus menjatuhkan beban crane?",
      q_ne: "प्रश्न २४: क्रेनको तार चुँडिएर सामान खस्दा कामदार किचिएर तत्काल मर्नबाट जोगाउने 'एक नम्बरको नियम' कुन हो?",
      options: [
        { ja: "吊り荷の下（旋回通過範囲を含む直下エリア）には、いかなる理由があっても絶対に立ち入らない・入らせない", id: "DILARANG KERAS BERADA DI BAWAH BEBAN GANTUNG! Siapa pun haram melintas atau berdiri di kolong barang yang sedang terbang melayang", ne: "झुन्ड्याइएको सामानको मुनि (सामान घुम्ने मुनिको कुनै पनि भागमा) कुनै पनि हालतमा कोही पनि मान्छे पस्न नदिने/नजाने" },
        { ja: "ヘルメットを二重に被っていれば吊り荷の真下に立っても安全である", id: "Boleh berdiri di bawah beban asal memakai helm rangkap dua", ne: "दुईवटा हेल्मेट लगाए सामान मुनि बस्न मिल्छ भनी बस्ने" },
        { ja: "手で吊り荷を真下から押し上げて支えながら歩く", id: "Berjalan sambil menahan beban dari bawah dengan kedua telapak tangan", ne: "सामान मुनिबाट हातले ठेल्दै हिँड्ने" },
        { ja: "吊り荷の下でお弁当を広げて食べる", id: "Makan siang di bawah beban gantung", ne: "झुन्ड्याएको सामान मुनि बसेर खाना खाने" }
      ],
      answer: 0,
      expJa: "【テキスト P.183参照】「吊り荷の下に入るな」は玉掛け作業の絶対の掟です[cite: 13]。介錯ロープ（誘導ひも）を用いて離れた位置から荷を制御します[cite: 13]。",
      expId: "Haram hukumnya berdiri di bawah beban crane! Jika kawat seling putus, beban berton-ton akan meremukkan badan menjadi serpihan.",
      expNe: "झुन्ड्याइएको सामानको मुनि उभिनु भनेको मृत्युलाई बोलाउनु हो। सामानलाई टाढैबाट डोरीले डोर्याउनुपर्छ, मुनि कहिल्यै जानुहुन्न।"
    },
    {
      cat: "学科：熱中症と「現場の救急箱（冷感グッズ）」",
      q: "問25：熱中症の初期対応を迅速に行うため、現場の救急箱（ファーストエイドキット）に常備しておくべき物品として最も適切なものはどれですか。",
      q_id: "Soal 25: Perlengkapan medis darurat apakah yang WAJIB tersedia lengkap di dalam Kotak P3K Proyek khusus penanganan heatstroke?",
      q_ne: "प्रश्न २५: हिटस्ट्रोक हुँदा तुरुन्त प्राथमिक उपचार गर्नका लागि कार्यस्थलको फस्ट एड बक्स (औषधि बाकस) मा हुनैपर्ने सामान कुन हो?",
      options: [
        { ja: "瞬間冷却パック（叩いて冷たくなる保冷剤）、体温計、経口補水液（OS-1等）、食塩、霧吹きスプレー、うちわ・扇子", id: "Kompres Es Instan (Instant Ice Pack), Termometer Suhu, Cairan Oralit ORS, Garam, Botol Semprotan Air Mist, dan Kipas Angin Tangan", ne: "हान्ने बित्तिकै बरफ बन्ने आइस प्याक, थर्मामिटर, जीवनजल, नुन, पानी छर्कने स्प्रे बोतल र हम्कने हाते पंखा" },
        { ja: "熱いお灸と風邪薬", id: "Balsem pemanas dan obat flu", ne: "तातो मलम र रुघाको औषधि" },
        { ja: "ホッカイロ（使い捨てカイロ）", id: "Bantalan pemanas saku musim dingin", ne: "हात तताउने तातो प्याक" },
        { ja: "辛いスパイスとワサビ", id: "Cabai bubuk dan pasta wasabi", ne: "खुर्सानीको धुलो" }
      ],
      answer: 0,
      expJa: "【テキスト P.191参照】救急箱には緑十字が付けられます[cite: 21]。夏季は叩くだけで急冷する瞬間冷却材や経口補水液を常に満杯に補充しておきます。",
      expId: "Kotak P3K musim panas wajib berisi Ice Pack Instan, botol semprotan mist, dan minuman elektrolit siap minum.",
      expNe: "गर्मीमा फस्ट एड बक्सभित्र तत्काल चिसो हुने आइस प्याक, जीवनजल, थर्मामिटर र पानीको स्प्रे अनिवार्य राख्नुपर्छ।"
    },
    {
      cat: "学科：足場の筋交い（すじかい）の間引きの危険性",
      q: "問26：足場の筋交い（交さブレース）を通行の邪魔だからと作業員が勝手に外して（間引いて）作業した場合に起こる致命的な事故は何ですか。",
      q_id: "Soal 26: Tragedi maut apakah yang terjadi jika pekerja melepas pipa silang diagonal (sujikai) perancah hanya karena dianggap menghalangi jalan?",
      q_ne: "प्रश्न २६: हिँड्न अप्ठ्यारो भयो भन्दै खटको छड्के डन्डी (सुजिकाई) कामदारले मनखुसी फुकालेर काम गर्दा कस्तो भयानक दुर्घटना हुन्छ?",
      options: [
        { ja: "足場の水平方向の強度が完全に失われ、作業員の体重移動や突風によって足場全体が平行四辺形に潰れて一瞬で倒壊する", id: "Kekakuan perancah nol total; ayunan langkah pekerja atau hembusan angin akan melipat runtuh seluruh rangka perancah seketika", ne: "खटको थेग्ने शक्ति शून्य हुन्छ, र कामदार हिँड्दा वा हावाको हल्का झोक्का आउनासाथ पूरै खट बाङ्गो भएर तासको पत्ता झैं ढल्छ" },
        { ja: "足場がより頑丈になって絶対に倒れなくなる", id: "Perancah jadi makin kokoh", ne: "खट झन् धेरै बलियो हुने" },
        { ja: "足場板が自動的に綺麗に掃除される", id: "Lantai perancah bersih sendiri", ne: "आफैं सफा हुने" },
        { ja: "何の影響もなく工事スピードが10倍になる", id: "Tidak ada pengaruh apa pun", ne: "कुनै असर नपर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.182参照】足場倒壊事故の直接原因の多くは「壁つなぎや筋交いの無断取り外し（手抜き）」です[cite: 12]。1本の筋交い取り外しが足場全体の崩壊を招きます[cite: 12]。",
      expId: "Melepas satu batang sujikai meruntuhkan stabilitas seluruh bentang perancah. Dilarang keras melepas pipa silang tanpa izin pengawas!",
      expNe: "एउटा मात्र सुजिकाई फुकाले पनि पूरै खटको सन्तुलन बिग्रिएर एकैपटक ढल्छ। त्यसैले सुजिकाई फुकाल्न कडा प्रतिबन्ध छ।"
    },
    {
      cat: "学科：熱中症と「現場のクールダウンウェア」",
      q: "問27：直射日光下で鉄骨組み立てや屋根工事を行う際、ヘルメットの首筋部分に取り付けて直射日光を遮り、首の動脈の温度上昇を防ぐ器具は何ですか。",
      q_id: "Soal 27: Kain pelindung apakah yang dipasang di bagian belakang helm proyek untuk menutupi tengkuk leher dari sengatan matahari langsung?",
      q_ne: "प्रश्न २७: घाममा काम गर्दा घाँटीको पछाडिको भागलाई सिधा घामबाट जोगाउन र रगत तात्न नदिन हेल्मेटको पछाडि झुन्ड्याइने कपडा कुन हो?",
      options: [
        { ja: "日よけタレ（ヘルメット用遮光サンシェード / ネックガード）", id: "Kain Peneduh Tengkuk Helm (Helmet Sunshade / Neck Shade Guard)", ne: "घाँटी छोप्ने कपडा (हेल्मेट सनशेड / नेक गार्ड)" },
        { ja: "毛糸のマフラー（冬用）", id: "Syal rajut wol tebal musim dingin", ne: "जाडोको गलबन्दी" },
        { ja: "プラスチックの板金ハサミ", id: "Gunting seng", ne: "कैंची" },
        { ja: "ネクタイ", id: "Dasi kantoran", ne: "टाई" }
      ],
      answer: 0,
      expJa: "【テキスト P.191参照】首の後ろ（延髄・頸動脈）に直射日光が当たると体温調節中枢が麻痺します[cite: 21]。ヘルメット後部に取り付ける「日よけタレ」で遮光します[cite: 21]。",
      expId: "Neck shade helm melindungi tengkuk dari sengatan sinar UV matahari. Menjaga leher tetap dingin mencegah kelumpuhan sensor otak.",
      expNe: "घाँटीको पछाडि सिधा घाम पर्दा दिमागले काम गर्न छोड्छ। त्यसैले हेल्मेटमा 'घाँटी छोप्ने कपडा' झुन्ड्याउनुपर्छ।"
    },
    {
      cat: "学科：クレーン作業と「荷振れ（にぶれ）」の止め方",
      q: "問28：移動式クレーンで吊り上げた荷が振り子のように左右に大きく揺れ始めた際、運転手と合図者が行うべき正しい荷振れの止め方はどれですか。",
      q_id: "Soal 28: Bagaimanakah cara menghentikan ayunan beban gantung (load swing) yang bergoyang liar di udara saat diangkat crane?",
      q_ne: "प्रश्न २८: क्रेनले उचालेको सामान हावामा पिङ जस्तै दायाँ-बायाँ बेस्सरी हल्लिन थाल्यो भने, सामान हल्लाउन रोक्ने सही तरिका कुन हो?",
      options: [
        { ja: "ジブ（ブーム）の先端を、荷が揺れて動いていく進行方向へ先回りして素早く追いかけて真上に位置させ、揺れを相殺して静止させる（追いクレーン）", id: "Arahkan ujung boom crane mengejar ke arah ayunan barang (chasing the swing) agar titik puncak tepat berada tegak lurus di atas beban", ne: "क्रेनको हातको टुप्पोलाई सामान जुन दिशामा हल्लिँदै गएको छ त्यतै पछ्याएर सामानको ठ्याक्कै माथि पुर्याउने (ओइ-क्रेन विधि) र कम्पन शान्त पार्ने" },
        { ja: "作業員が走っていって素手で飛びついて体当たりで止める", id: "Menyuruh pekerja menabrakkan badannya untuk menahan beban", ne: "कामदारलाई दौडाएर खाली हातले समात्न लगाउने" },
        { ja: "クレーンの旋回レバーを左右にめちゃくちゃにガチャガチャ激しく動かす", id: "Mengocok tuas putar crane kencang ke kiri dan kanan", ne: "क्रेनको लिभरलाई यताउता बेस्सरी हल्लाउने" },
        { ja: "ワイヤーを一気に巻き上げて建物の屋根に激突させる", id: "Menggulung kencang agar menabrak atap", ne: "छतमा लगेर ठोक्काइदिने" }
      ],
      answer: 0,
      expJa: "【荷振れ止めの技術】荷の揺れを止めるには、ブームの先端を荷の動く方向へ追従（追いノッチ）させ、荷の重心の真上に滑車を持ってくることで揺れを吸収します。",
      expId: "Hentikan ayunan beban dengan menggerakkan ujung boom mengikuti arah ayunan barang sampai posisi seling kembali tegak lurus 90 derajat.",
      expNe: "सामान हल्लिँदा क्रेनको टुप्पोलाई सामान हल्लिएकै दिशातर्फ सारेर ठ्याक्कै माथि पारेपछि मात्र सामान हल्लिन रोकिन्छ।"
    },
    {
      cat: "学科：熱中症と「現場の塩分補給水（0.1〜0.2%）」",
      q: "問29：現場の給水タンクにスポーツドリンクがない場合、食塩を真水に溶かして熱中症予防に最適な「0.1〜0.2%の食塩水」を作る際の分量基準はどれですか。",
      q_id: "Soal 29: Berapakah takaran garam dapur yang tepat dilarutkan ke dalam 1 Liter air bersih untuk membuat air garam pencegah heatstroke standar (kadar 0,1 - 0,2%)?",
      q_ne: "प्रश्न २९: कार्यस्थलमा स्पोर्ट्स ड्रिंक नहुँदा, १ लिटर सफा पानीमा कति नुन घोल्दा '०.१ देखि ०.२% को सही नुनपानी' बन्दछ?",
      options: [
        { ja: "水1リットル（1,000ml）に対して、食塩「1g〜2g（小さじ1/3〜半分程度）」", id: "1 Liter Air (1.000 ml) : Garam dapur 1 sampai 2 gram (sekitar 1/3 hingga 1/2 sendok teh kecil)", ne: "१ लिटर पानी (१००० मिली) मा: नुन '१ देखि २ ग्राम (सानो चम्चाको १/३ देखि आधा चम्चा)'" },
        { ja: "水1リットルに対して、食塩100g（海水よりもしょっぱい激濃塩水）", id: "1 Liter Air : 100 gram garam pekat", ne: "१ लिटर पानीमा १०० ग्राम धेरै नुन" },
        { ja: "水1リットルに対して、塩は入れず砂糖だけを山盛り入れる", id: "Tanpa garam sama sekali", ne: "नुन नै नहाल्ने" },
        { ja: "水ではなくガソリンに塩を溶かす", id: "Melarutkan garam ke bensin", ne: "पेट्रोलमा नुन हाल्ने" }
      ],
      answer: 0,
      expJa: "【適正塩分濃度】厚生労働省の熱中症予防指針では「0.1〜0.2%の食塩水（水1Lに食塩1〜2g）」の摂取が推奨されています。濃すぎると胃に負担がかかります。",
      expId: "Kadar garam ideal untuk diserap tubuh tanpa mual adalah 1-2 gram garam per 1 liter air bersih (konsentrasi 0,1-0,2%).",
      expNe: "१ लिटर पानीमा १-२ ग्राम नुन हाल्दा शरीरलाई चाहिने ठिक्कको नुनपानी बन्छ, जसले गर्मीमा ढल्न दिँदैन।"
    },
    {
      cat: "学科：足場の「筋交い（すじかい）」の取り付け向き",
      q: "問30：枠組足場や単管足場の交さ筋交いを取り付ける際、ボルトやクランプで固定する正しい状態はどれですか。",
      q_id: "Soal 30: Bagaimanakah pemasangan pipa silang diagonal (sujikai) perancah yang BENAR dan kokoh?",
      q_ne: "प्रश्न ३०: खटको छड्के डन्डी (सुजिकाई) पाइपमा जोड्दा कुन अवस्था हुनुपर्छ?",
      options: [
        { ja: "筋交いの両端および交差部が建地や布にガタつきなく確実に緊結され、ピンの抜け止めがロックされている状態", id: "Kedua ujung dan titik persilangan sujikai terkunci kencang tanpa goyang ke tiang/palang, dan pin pengaman terkunci rapat", ne: "डन्डीका दुवै छेउहरू नहल्लिने गरी बलियोसँग कसेको र सुरक्षा पिन राम्ररी लक भएको अवस्था" },
        { ja: "片方の端だけ針金で結び、もう片方はブラブラぶら下げておく状態", id: "Hanya diikat satu sisi dan sisi lainnya dibiarkan menggantung", ne: "एउटा छेउ मात्र बाँधेर अर्को छेउ त्यत्तिकै झुन्ड्याएको" },
        { ja: "筋交いが大きく弓なりに曲がって折れかかっている状態", id: "Pipa sujikai melengkung bengkok parah mau patah", ne: "डन्डी नै दोब्रिएर भाँचिन लागेको" },
        { ja: "クランプのネジを締めずに手で乗せてあるだけの状態", id: "Hanya ditumpangkan tanpa dikunci klem", ne: "नट नकसी त्यत्तिकै राखेको" }
      ],
      answer: 0,
      expJa: "【テキスト P.150参照】筋交いは両端が確実に固定されて初めて斜材としての引張・圧縮強度を発揮します。ピンやクランプのガタつきをゼロにします。",
      expId: "Sujikai harus terkunci kaku di kedua ujungnya. Sujikai yang kendor tidak mampu menahan goyangan beban pekerja saat perancah berguncang.",
      expNe: "सुजिकाईका दुवै छेउ बलियोसँग नकसे खट हल्लिन्छ। त्यसैले क्ल्याम्प र पिन पूरै कसेर लक गर्नैपर्छ।"
    },
    {
      cat: "学科：熱中症と「現場の塩分タブレット過剰摂取」の危険",
      q: "問31：熱中症を予防しようとして、水分を飲まずに塩分タブレットや食塩だけを大量にポリポリ食べ続けた場合に起こる危険な健康被害は何ですか。",
      q_id: "Soal 31: Bahaya apakah yang terjadi jika pekerja terus-menerus mengunyah tablet garam dalam jumlah banyak TANPA diimbangi minum air yang cukup?",
      q_ne: "प्रश्न ३१: पानी नपिईकन नुनको चक्की मात्र धेरै खाइरहँदा शरीरमा कस्तो नराम्रो असर पर्छ?",
      options: [
        { ja: "血中の塩分濃度が異常に高くなり（高ナトリウム血症）、急激な口渇、嘔吐、血圧上昇を招き、細胞から水分が奪われて脱水症状が悪化する", id: "Kadar garam darah melonjak bahaya (hipernatremia), memicu mual muntah, tensi darah melonjak drastis, dan cairan sel tersedot kering", ne: "रगतमा नुनको मात्रा अत्यधिक बढेर रक्तचाप बढ्छ, बान्ता हुन्छ र शरीरका कोषहरूबाट पानी उल्टै बाहिर तानिएर डिहाइड्रेसन झन् घातक बन्छ" },
        { ja: "頭が非常に良くなって計算スピードが速くなる", id: "Otak menjadi sangat pintar", ne: "दिमाग धेरै छिटो चल्ने" },
        { ja: "肌がツヤツヤになって美白になる", id: "Kulit menjadi putih bersinar", ne: "छाला सेतो हुने" },
        { ja: "どんなに高い所から飛び降りても骨折しなくなる", id: "Kebal patah tulang saat jatuh dari gedung", ne: "माथिबाट खस्दा पनि हाड नभाँचिने" }
      ],
      answer: 0,
      expJa: "【塩分過多の危険】塩分補給は「水分とのバランス」が命です。水なしで塩分ばかり摂ると高ナトリウム血症になり脳浮腫や意識障害を引き起こします。",
      expId: "Garam tanpa air adalah racun hipernatremia! Garam menarik air keluar dari sel otak, membuat pekerja makin cepat pingsan.",
      expNe: "पानी नपिई नुन मात्र खाए रगत धेरै नुनिलो भएर दिमागमा असर गर्छ र बिरामी झन् छिट्टै ढल्छ।"
    },
    {
      cat: "学科：クレーン作業と「巻過防止装置（まきすぎぼうし）」",
      q: "問32：移動式クレーンでフックを巻き上げる際、フックブロックがブーム先端（ジブトップ）のシーブ（滑車）に激突してワイヤーが破断し、荷が墜落するのを防ぐ安全装置は何ですか。",
      q_id: "Soal 32: Alat pengaman otomatis apakah pada crane yang langsung menghentikan putaran mesin derek saat kait hook hampir menabrak ujung tiang boom?",
      q_ne: "प्रश्न ३२: क्रेनको हुक माथि तान्दा क्रेनको टुप्पोमा ठोक्किएर तार चुँडिन नदिन, हुक ठोकिनुअघि नै मेसिनलाई आफैं बन्द गरिदिने सुरक्षा यन्त्र कुन हो?",
      options: [
        { ja: "巻過防止装置（まきすぎぼうしそうち / リミットスイッチ）", id: "Makisugi Boushi Sochi (Alat Pembatas Derek Otomatis / Over-hoist Limit Switch)", ne: "माकिसुगी बौशी (क्रेनको हुक धेरै माथि जान नदिने सुरक्षा सेन्सर / ओभर-होइस्ट लिमिटर)" },
        { ja: "スピードメーター", id: "Speedometer laju jalan", ne: "स्पिड मिटर" },
        { ja: "燃料ゲージ", id: "Pengukur sisa bensin", ne: "तेल नाप्ने काँटा" },
        { ja: "クラクション（警笛）", id: "Klakson suara", ne: "हर्न" }
      ],
      answer: 0,
      expJa: "【クレーン則第21条】巻過防止装置は、フックとジブ先端の間隔が0.25m（直角巻きは0.05m）以上で自動停止する安全装置です。無効化は固く禁止されています。",
      expId: "Over-hoist limit switch mematikan putaran motor winch otomatis saat hook berjarak 25 cm dari ujung boom agar kawat tidak putus tergilas.",
      expNe: "यो सेन्सरले हुक क्रेनको टुप्पोमा ठोकिनुभन्दा २५ सेमी अगाडि नै मेसिन रोकिदिन्छ ताकि तार चुँडिएर सामान नखसोस्।"
    },
    {
      cat: "学科：熱中症と「現場のクーラー付き休憩所の温度設定」",
      q: "問33：夏季の現場に設置するエアコン付き休憩所において、冷やしすぎによる自律神経の乱れ（温度差疲労）を防ぎ、かつ身体を効率的に冷やす「推奨室温」はどれですか。",
      q_id: "Soal 33: Berapakah setelan suhu AC ruang istirahat proyek yang PALING IDEAL agar tubuh pekerja sejuk tanpa mengalami syok kedinginan saat keluar-masuk?",
      q_ne: "प्रश्न ३३: कार्यस्थलको एसी भएको आराम कोठामा, बाहिर निस्कँदा शरीरलाई झट्का नलागोस् भन्नाका लागि एसीको सबैभन्दा उपयुक्त तापक्रम कति डिग्रीमा मिलाउनुपर्छ?",
      options: [
        { ja: "外気温との差が極端になりすぎない「25℃ 〜 28℃程度」", id: "Sekitar 25°C sampai 28°C (perbedaan suhu dengan luar ruangan tidak melebihi 5-7°C)", ne: "बाहिरको तापक्रमसँग धेरै फरक नहुने गरी 'करिब २५ देखि २८ डिग्री'" },
        { ja: "冷凍庫と同じマイナス20℃", id: "Minus 20°C seperti freezer beku", ne: "माइनस २० डिग्री" },
        { ja: "暖房を入れて40℃にする", id: "Dinyalakan pemanas panas 40°C", ne: "हिटर बालेर ४० डिग्री बनाउने" },
        { ja: "設定温度は1℃にして氷柱を作る", id: "Disetel 1°C sampai keluar es", ne: "१ डिग्रीमा राख्ने" }
      ],
      answer: 0,
      expJa: "【休憩所の適正温度】外気温と室温の差が10℃以上あると、出入りのたびに自律神経が疲弊します。室温は「25〜28℃」に保ち、扇風機を併用して身体を冷まします。",
      expId: "Suhu AC ruang istirahat ideal adalah 25-28°C. Terlalu dingin (<20°C) membuat pembuluh darah kaget kram saat kembali ke terik matahari.",
      expNe: "एसी धेरै चिसो (२५ डिग्रीभन्दा मुनि) बनाए बाहिर घाममा निस्कँदा रगतको नसा खुम्चिएर मान्छे बिरामी पर्छ। त्यसैले २५-२८ डिग्री नै उत्तम हो।"
    },
    {
      cat: "学科：足場の「壁つなぎ」の引張・圧縮耐力",
      q: "問34：足場を建物躯体に固定する「壁つなぎ金具」が耐えなければならない力の種類として正しいものはどれですか。",
      q_id: "Soal 34: Gaya mekanis apakah yang WAJIB mampu ditahan oleh batang angkur pengikat dinding (kabe-tsunagi) perancah?",
      q_ne: "प्रश्न ३४: खटलाई भित्तामा बाँध्ने रड (काबे-चुनागी) ले थेग्नैपर्ने दुईवटा मुख्य शक्तिहरू कुन-कुन हुन्?",
      options: [
        { ja: "風や地震によって足場が外側へ引っ張られる「引張力」と、内側へ押し付けられる「圧縮力」の双方", id: "Dua arah sekaligus: Gaya Tarik (saat perancah tertarik ke luar) DAN Gaya Tekan (saat perancah terdorong menabrak dinding)", ne: "दुवै शक्ति: हावाले खटलाई बाहिर तान्दा थेग्ने 'तान्ने शक्ति (टेन्सन)' र भित्तातर्फ धकेल्दा थेग्ने 'थिच्ने शक्ति (कम्प्रेसन)' दुवै" },
        { ja: "下向きに落ちる重力だけ", id: "Hanya gaya gravitasi ke bawah", ne: "तल खस्ने भार मात्र" },
        { ja: "上向きに飛んでいく浮力だけ", id: "Hanya gaya apung ke atas", ne: "माथि उड्ने शक्ति मात्र" },
        { ja: "壁つなぎ金具は力を支える必要はない", id: "Tidak menahan gaya apa pun", ne: "कुनै शक्ति थेग्न पर्दैन" }
      ],
      answer: 0,
      expJa: "【テキスト P.182参照】強風時、足場のシートは外側へ引っ張られる力（負圧）と内側へ押される力（正圧）を交互に受けます[cite: 12]。壁つなぎは引張・圧縮の両方に耐える金物を使います[cite: 12]。",
      expId: "Kabe-tsunagi harus kaku menahan tarikan angin kencang ke luar gedung sekaligus menahan dorongan angin ke arah dalam gedung.",
      expNe: "हुरीबतास चल्दा खट बाहिर पनि तानिन्छ र भित्र पनि ठोक्किन्छ। त्यसैले काबे-चुनागीले तान्ने र थिच्ने दुवै शक्ति थेग्नै पर्छ।"
    },
    {
      cat: "学科：熱中症と「現場の単独作業の禁止」",
      q: "問35：夏季の現場において、熱中症による死亡事故を防ぐために職長が絶対に徹底しなければならない「作業員の配置ルール」はどれですか。",
      q_id: "Soal 35: Aturan penempatan pekerja apakah yang WAJIB ditaati Shokucho di musim panas agar pekerja tidak tewas diam-diam sendirian?",
      q_ne: "प्रश्न ३५: गर्मीमा कसैले थाहै नपाई एक्लै मर्न नदिन शोकुचोले कडाइका साथ लागू गर्नुपर्ने 'कामदार खटाउने नियम' कुन हो?",
      options: [
        { ja: "死角となる場所や奥まったエリアでの「単独作業（1人きりの作業）」を原則禁止し、必ず2人以上のペア（バディシステム）で配置して相互監視させる", id: "DILARANG KERAS KERJA SENDIRIAN (Tandoku Sagyou) di area tersembunyi! Wajib sistem berpasangan minimal 2 orang (Buddy System) untuk saling memantau", ne: "कसैले नदेख्ने कुनामा 'एक्लै काम गर्न (एकल काम)' कडा निषेध गर्ने! अनिवार्य रूपमा कम्तीमा २ जनाको जोडी (बडी सिस्टम) बनाएर खटाउने ताकि एकले अर्कोलाई हेर्न सकून्" },
        { ja: "作業員全員を1人ずつ遠く離れた別の部屋に孤立させて作業させる", id: "Menaruh 1 pekerja di 1 ruangan terpisah agar tidak bisa bicara", ne: "सबैलाई एक्लाएक्लै छुट्टाछुट्टै कोठामा थुनेर काम लगाउने" },
        { ja: "具合が悪くなっても誰にも助けを求めないよう命令する", id: "Melarang meminta tolong jika sakit", ne: "बिरामी भए पनि गुहार माग्न नपाउने" },
        { ja: "見回りは一切行わず職長は夕方まで昼寝する", id: "Mandor tidur sampai sore tanpa patroli", ne: "शोकुचोले दिनभरि अनुगमन नै नगर्ने" }
      ],
      answer: 0,
      expJa: "【単独作業の禁止】1人で作業していると熱中症で倒れた瞬間に誰にも気づかれず、発見された時には手遅れで死亡します。必ず2人1組で声を掛け合わせます。",
      expId: "Kerja sendirian di musim panas = maut tersembunyi! Sistem kerja berdua (Buddy System) memastikan korban langsung ditolong detik pertama saat ambruk.",
      expNe: "एक्लै काम गर्दा ढलेमा कसैले थाहा पाउँदैन र अस्पताल पुर्याउन ढिलो भएर मान्छे मर्छ। त्यसैले सधैं २ जनाको जोडी बनाएर काम लगाउनुपर्छ।"
    },
    {
      cat: "学科：クレーン作業と「定格総荷重」の厳守",
      q: "問36：移動式クレーンの性能表（性能曲線）に記載されている「定格総荷重」に関する正しい理解はどれですか。",
      q_id: "Soal 36: Apakah arti sebenarnya dari angka 'Teikaku Sou-kajuu' (Kapasitas Beban Total Terukur) pada tabel performa crane?",
      q_ne: "प्रश्न ३६: क्रेनको क्षमता तालिकामा लेखिएको 'कुल तोकिएको भार (तेइकाकु सोउ-काजुउ)' भनेको के हो?",
      options: [
        { ja: "フックブロックや玉掛けワイヤー・吊り具の重量を含んだ「吊り上げ可能な最大の限界総重量」であり、絶対にこれを超えて荷を吊ってはならない", id: "Total beban maksimal yang mencakup berat barang cor/besi DITAMBAH berat kait gancu hook & berat kawat seling; HARAM DILAMPAUI!", ne: "झुन्ड्याइने सामानको तौल मात्र होइन, क्रेनको हुक र स्लिङ तारको तौल समेत जोडेर 'उचाल्न मिल्ने अधिकतम सीमा' हो, जुन सीमा कहिल्यै नाघ्नु हुँदैन" },
        { ja: "荷物の重さだけであり、フックやワイヤーの重さはいくら重くても無視してよい", id: "Hanya berat barang saja, abaikan berat kait hook crane", ne: "सामानको तौल मात्र हो, हुकको तौल जोड्नै पर्दैन" },
        { ja: "性能表の数値の3倍までは無理して吊ってもクレーンは壊れない", id: "Boleh mengangkat 3 kali lipat dari angka tabel", ne: "तालिकाको भन्दा ३ गुणा बढी सामान उचाल्दा पनि केही हुन्न" },
        { ja: "定格総荷重とはクレーン車のガソリンタンクの容量のことである", id: "Kapasitas tangki solar crane", ne: "क्रेनको डिजेल ट्याङ्कीको क्षमता" }
      ],
      answer: 0,
      expJa: "【定格総荷重の定義】「定格総荷重 ＝ 吊り荷の重さ ＋ フックの重さ ＋ 玉掛け用具の重さ」です。フック自体の自重（数百kg〜数トン）を計算に入れないと過負荷横転します。",
      expId: "Teikaku Soukajuu sudah termasuk berat hook crane itu sendiri! Jangan lupa kurangi kapasitas dengan berat hook sebelum mengikat barang.",
      expNe: "तोकिएको भारमा क्रेनको हुक र तारको आफ्नै तौल पनि जोडिन्छ। हुकको तौल नघटाई सामान बाँधे क्रेन पल्टिन्छ।"
    },
    {
      cat: "学科：熱中症と「現場の冷却シート・うちわ」",
      q: "問37：熱中症で倒れた作業員に応急処置を行う際、おでこ（額）に冷却ジェルシートを貼る行為についての救急医学的な正しい評価はどれですか。",
      q_id: "Soal 37: Bagaimanakah penilaian medis yang BENAR mengenai tindakan menempel plester kompres demam (koolfever) di dahi pada korban heatstroke?",
      q_ne: "प्रश्न ३७: हिटस्ट्रोकले ढलेको बिरामीको निधारमा ज्वरोको चिसो पट्टी (कुलफिभर) टाँस्ने काम सम्बन्धी सही चिकित्सकीय धारणा कुन हो?",
      options: [
        { ja: "おでこを冷やすだけでは深部体温は全く下がらないため、額のシートに頼らず、氷嚢等で太い動脈（首・脇・股）を冷やし全身に水をかけて扇ぐ必要がある", id: "Menempel plester dahi HANYA memberi rasa nyaman di kulit tapi TIDAK menurunkan suhu otak! Wajib kompres es di Leher, Ketiak, Paha, dan siram air", ne: "निधारमा पट्टी टाँस्दैमा शरीरको भित्री तापक्रम कत्ति पनि घट्दैन! पट्टीमा भर नपरी घाँटी, काखी र तिघ्राको जोर्नीमा बरफ राख्ने र पानी छर्केर हम्कनै पर्छ" },
        { ja: "おでこに1枚貼るだけで熱中症は1秒で完治するので他の処置は不要である", id: "Cukup plester dahi, semua sembuh seketika", ne: "निधारमा टाँसेपछि १ सेकेन्डमै निको हुन्छ" },
        { ja: "おでこに貼ると脳が凍ってしまうので絶対に使用禁止である", id: "Membuat otak membeku", ne: "दिमागै जम्ने भएकोले लगाउनै हुन्न" },
        { ja: "おでこではなく背中に100枚貼り詰めるべきである", id: "Ditempel 100 lembar di punggung", ne: "पिठ्युँमा १०० वटा टाँस्नुपर्छ" }
      ],
      answer: 0,
      expJa: "【テキスト P.190参照】市販の冷却シートはおでこの皮膚感覚を冷やすだけで、高熱の血液を下げる冷却能力はありません[cite: 20]。首・脇・股の氷嚢冷却と全身水かけ送風が絶対です[cite: 20]。",
      expId: "Plester dahi TIDAK BISA menurunkan demam heatstroke 40°C! Jangan buang waktu, segera kompres es di pangkal paha, ketiak, dan leher.",
      expNe: "निधारको चिसो पट्टीले मात्र ज्यान जोगिन्न। घाँटी, काखी र तिघ्रामा बरफ राखेर पानीले जिउ भिजाई हावा हम्कनै पर्छ।"
    },
    {
      cat: "学科：足場の「幅木」の固定外れの危険",
      q: "問38：足場の作業床の幅木（高さ15cm以上）が、針金が切れて外れかかり足場板との間に隙間ができているのを放置した場合の危険性は何ですか。",
      q_id: "Soal 38: Bahaya fatal apakah yang timbul jika papan habaki (toeboard) perancah kendor ikatannya sehingga timbul celah menganga di lantai perancah?",
      q_ne: "प्रश्न ३८: खटको किनारको तख्ता (हाबाकी) बाँधेको तार चुँडिएर खुकुलो भई भुइँसँग प्वाल परेको अवस्थालाई त्यत्तिकै छोडे कस्तो खतरा हुन्छ?",
      options: [
        { ja: "作業員が蹴飛ばしたボルト、ラチェットレンチ、足場部材がすき間からすり抜けて地上へ一直線に落下し、下を歩く作業員の頭部を直撃して即死させる", id: "Baut, kunci pas rachet, atau pipa yang tertendang kaki akan meluncur jatuh menerobos celah dan menghantam kepala pekerja di bawah hingga tewas seketika", ne: "कामदारको खुट्टाले ठोकिएको नट-बोल्ट वा रेन्च त्यो प्वालबाट सिधै तल खस्छ, र तल हिँडिरहेको साथीको टाउकोमा सिधै लागेर तत्काल ज्यान जान्छ" },
        { ja: "足場の隙間から小鳥が入ってきて巣を作る", id: "Burung masuk membuat sarang", ne: "चरा पसेर गुँड बनाउने" },
        { ja: "足場の重量が軽くなって作業員が動きやすくなる", id: "Perancah jadi ringan", ne: "खट हल्का हुने" },
        { ja: "何も危険はなく現場の風通しが良くなるだけである", id: "Hanya sirkulasi angin makin sejuk", ne: "हावा मात्र चल्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.103参照】幅木の固定不良による隙間は落下物災害の元凶です[cite: 8]。わずか数センチの隙間から落ちたボルト1個が直撃死事故を引き起こします。番線で再緊結します。",
      expId: "Celah habaki yang renggang adalah celah maut pelontar baut! Segera ikat kencang dengan kawat bendrat ke pipa perancah.",
      expNe: "हाबाकीको सानो प्वालबाट खसेको सानो नटले पनि तलको मान्छेको ज्यान लिन्छ। त्यसैले तारले तुरुन्तै बाँधेर प्वाल बन्द गर्नुपर्छ।"
    },
    {
      cat: "学科：熱中症と「現場の製氷機の日常点検」",
      q: "問39：猛暑期に入る前の初夏（5月〜6月）、現場事務所や休憩所の製氷機・冷蔵庫・給水器に関して職長や安全衛生担当者が行うべき点検はどれですか。",
      q_id: "Soal 39: Pemeriksaan apakah yang WAJIB dilakukan sebelum puncak musim panas tiba terhadap mesin es, kulkas, dan dispenser air di proyek?",
      q_ne: "प्रश्न ३९: चर्को गर्मी सुरु हुनुअघि नै (जेठ-असार तिर) कार्यस्थलका फ्रिज, बरफ मेसिन र पानी मेसिनको सम्बन्धमा शोकुचोले गर्नुपर्ने पूर्व-जाँच के हो?",
      options: [
        { ja: "実際に電源を入れて正常に急速製氷できるか試運転を行い、内部の清掃・除菌消毒を徹底し、フィルターを清掃して故障がないか確認する", id: "Uji coba nyala mesin es untuk cek kecepatan produksi es, bersihkan filter, kuras dan desinfeksi wadah tangki agar tidak berlumut/rusak", ne: "मेसिन चलाएर राम्ररी छिटो बरफ बन्छ कि नाई टेस्ट गर्ने, भित्र फोहोर र लेउ सफा गरी औषधिले कीटाणु मार्ने र बिग्रेको भए पहिले नै मर्मत गर्ने" },
        { ja: "製氷機のコンセントを抜いて倉庫の奥深くに隠しておく", id: "Mencabut kabel dan menyembunyikannya di gudang", ne: "तार थुतेर गोदाममा लुकाउने" },
        { ja: "壊れて氷が出なくても真夏になるまで放置しておく", id: "Membiarkan rusak sampai puncak panas", ne: "बिग्रिए पनि गर्मी नआउन्जेल त्यत्तिकै छाड्ने" },
        { ja: "製氷機の中にゴミ箱のゴミを詰めておく", id: "Mengisi sampah ke dalam tangki es", ne: "भित्र फोहोर कोचेर राख्ने" }
      ],
      answer: 0,
      expJa: "【猛暑前の点検】真夏が始まってから製氷機が故障していると熱中症が多発します。5月の段階で試運転・給水フィルター清掃・消毒を完了させておくのがプロの現場管理です。",
      expId: "Cek mesin es di bulan Mei! Jika mesin es rusak saat cuaca 35°C datang mendadak, proyek Anda akan panen korban pingsan.",
      expNe: "गर्मी सुरु भएपछि मेसिन बिग्रेको थाहा पाए कामदार बिरामी पर्छन्। त्यसैले वैशाख-जेठमै बरफ बन्छ कि नाई जाँचेर सफा राख्नुपर्छ।"
    },
    {
      cat: "学科：特定技能2号のリーダーシップと「ゼロ災現場」",
      q: "問40：特定技能2号の職長が、元請所長や発注者からも高く評価され、作業員からも慕われる「真の現場リーダー」となるための行動原則は何ですか。",
      q_id: "Soal 40: Prinsip kepemimpinan apakah yang membuat Mandor Tokutei Ginou 2 disegani kontraktor utama dan dicintai oleh seluruh anak buahnya?",
      q_ne: "प्रश्न ४०: तोकुतेइ गिनौ २ का एक कुशल शोकुचोले मुख्य कम्पनीका हाकिमको विश्वास जित्ने र आफ्ना कामदारहरूको प्रिय बन्ने 'सच्चा नेतृत्व' को मूल मन्त्र के हो?",
      options: [
        { ja: "「品質・工程・原価の追求も、すべて作業員の安全と健康があってこそ成り立つ」という真理を胸に刻み、誠実な対話と確かな技術でゼロ災を達成すること", id: "Memegang prinsip luhur: 'Mutu, jadwal, dan laba proyek HANYA BERMAKNA jika seluruh pekerja sehat dan selamat!', memimpin dengan integritas demi Zero Accident", ne: "'गुणस्तर, समय र नाफा जतिसुकै भए पनि त्यो कामदारको सुरक्षा र स्वास्थ्य बिना अर्थहीन हुन्छ' भन्ने सत्यलाई आत्मसात् गरी इमानदारी र उच्च सीपले शून्य दुर्घटना बनाउनु" },
        { ja: "嘘の工事日報を書いて元請を騙し、浮いたお金で贅沢をすること", id: "Membuat laporan fiktif untuk menipu pengawas demi keuntungan pribadi", ne: "झुटो रिपोर्ट बनाएर हाकिमलाई ढाँट्ने र ठग्ने" },
        { ja: "現場で一番サボって作業員にすべての重労働を押し付けること", id: "Paling malas bekerja dan melimpahkan semua tugas berat ke anak buah", ne: "आफू काम छल्ने र साथीलाई गाह्रो काममा जोत्ने" },
        { ja: "事故が起きたら怪我をした作業員を殴って口止めすること", id: "Memukuli korban kecelakaan agar tutup mulut", ne: "दुर्घटना भएपछि घाइतेलाई कुटेर मुख थुन्न खोज्ने" }
      ],
      answer: 0,
      expJa: "【特定技能2号の誇り】2号職長は建設産業の未来を担うリーダーです。高い安全意識と確かな施工技術、仲間への深い思いやりが真の信頼を築きます。",
      expId: "Mandor sejati membuktikan bahwa proyek sukses adalah proyek yang selesai tepat waktu TANPA ADA SATU PUN PEKERJA YANG TERLUKA.",
      expNe: "सच्चा शोकुचो त्यो हो जसले एकजना पनि साथीलाई चोट लाग्न नदिई काम समयमै पूरा गरेर सबैलाई सकुशल घर फर्काउँछ।"
    },

    // ==========================================
    // 【実技試験パート：25問（問41〜問65）】
    // ==========================================
    {
      cat: "実技：オートレベルの「視準線の点検（くい違い誤差）」",
      q: "問41：オートレベルの視準軸（望遠鏡の中心線）が完全に水平であるかを現場で点検する「2点標尺法（ペグテスト）」において、機器の狂いを確認する正しい手順はどれですか。",
      q_id: "Soal 41: Bagaimanakah cara pengujian akurasi garis bidik horizontal Auto Level di lapangan memakai metode 2 titik patok (Peg Test)?",
      q_ne: "प्रश्न ४१: अटो लेभलको टेलिस्कोपको सिधा हेर्ने लाइन ठ्याक्कै तेर्सो छ कि बाङ्गो छ भनी फिल्डमै परीक्षण गर्ने 'पेग टेस्ट (दुई खम्बा विधि)' को सही तरिका कुन हो?",
      options: [
        { ja: "約30〜50m離した2地点A・Bの「等距離の中央」にレベルを据えて高低差を測り、次に「一方の標尺のすぐ近く」に据えて測った高低差と比較し、一致するか確認する", id: "Dirikan level tepat di tengah-tengah antara patok A & B (jarak sama) untuk dapat beda tinggi asli, lalu pindahkan level dekat patok A untuk cek apakah hasilnya sama persis", ne: "करिब ३०-५० मिटर पर रहेका दुई बिन्दु A र B को 'ठ्याक्कै बीचमा' मेसिन राखेर उचाइको फरक नाप्ने, त्यसपछि 'एउटा बिन्दुको नजिकै' सारेर नाप्दा उचाइको फरक उस्तै आउँछ कि नाई जाँच्ने" },
        { ja: "レベルを放り投げて地面に落ちた音で水平か判定する", id: "Melempar level ke tanah dan mendengar bunyi jatuhnya", ne: "मेसिन भुइँमा फालेर आवाज सुन्ने" },
        { ja: "望遠鏡を逆さまにして太陽を直視して判定する", id: "Melihat langsung ke matahari dari teropong terbalik", ne: "घामतिर सिधै हेरेर जाँच्ने" },
        { ja: "レベルのネジをすべて外してバラバラにして点検する", id: "Membongkar seluruh sekrup mesin sampai pretel", ne: "सबै पेच खोलेर टुक्राटुक्रा पार्ने" }
      ],
      answer: 0,
      expJa: "【レベルのペグテスト】中央に据えた測定（等距離で器差相殺）で真の高低差を求め、端に据えた測定と比較することで視準線誤差（コリメーション誤差）を検出します。",
      expId: "Peg Test membandingkan bacaan dari posisi tengah simetris vs posisi tepi. Jika selisih tinggi berbeda, sekrup kalibrasi teropong wajib disetel ulang.",
      expNe: "दुई बिन्दुको ठ्याक्कै बीचमा राखेर नाप्दा र छेउमा सारेर नाप्दा नाप एउटै आयो भने मात्र अटो लेभल १००% ठीक छ भन्ने प्रमाणित हुन्छ।"
    },
    {
      cat: "実技：トランシット（トータルステーション）の求心",
      q: "問42：測量機器（トータルステーション）を地面の測量基準点（鋲）の真上に据え付ける際、求心望遠鏡（またはレーザー求心器）の十字線を地上の鋲の中心に合わせる操作部品は何ですか。",
      q_id: "Soal 42: Komponen apakah yang digeser pada pelat dasar tripod untuk memposisikan titik laser/optik teropong tepat di atas paku as patok tanah?",
      q_ne: "प्रश्न ४२: टोटल स्टेसन यन्त्रलाई भुइँको काँटी (सर्भे किल्ला) को ठ्याक्कै सेन्टर माथि राख्दा, लेजर थोप्लोलाई किल्लाको सेन्टरमा मिलाउन खुकुलो पारेर चलाइने भाग कुन हो?",
      options: [
        { ja: "三脚の定盤固定ねじ（締め付けねじを少し緩めて機器本体をスライドさせて水平移動させる）", id: "Sekrup Pengunci Pelat Tripod (kendorkan sedikit sekrup bawah lalu geser badan mesin secara horizontal di atas piringan tripod)", ne: "ट्राइपड स्ट्यान्डको मुनिको कस्ने पेच (पेच थोरै खुकुलो पारेर मेसिनलाई बिस्तारै यताउता सारेर सेन्टर मिलाउने)" },
        { ja: "望遠鏡の接眼レンズを叩いて動かす", id: "Memukul lensa mata teropong", ne: "लेन्स ठोकेर सार्ने" },
        { ja: "地面の測量鋲をハンマーで叩いて機械の真下に打ち直す", id: "Mencabut paku tanah dan memukulnya pindah ke bawah mesin", ne: "भुइँको काँटी नै उखेलेर मेसिन मुनि सार्ने" },
        { ja: "三脚の脚をのこぎりで切って高さを変える", id: "Menggergaji kaki tripod", ne: "स्ट्यान्डको खुट्टा आराले काट्ने" }
      ],
      answer: 0,
      expJa: "【トータルステーションの求心整準】整準ねじで水平を出した後、三脚の固定ねじを緩めて機器をスライドさせ、地上の点（鋲）と光学求心線をミリ単位で合致させます。",
      expId: "Kendorkan baut dasar tripod sedikit untuk menggeser bodi total station hingga titik laser sentering tepat membidik tengah paku as.",
      expNe: "स्ट्यान्डको मुनिको नट थोरै खुकुलो पारेर मेसिनलाई सार्दै लेजर थोप्लोलाई भुइँको किल्लाको ठ्याक्कै केन्द्रमा मिलाइन्छ।"
    },
    {
      cat: "実技：単管足場のクランプの向き（水溜まり防止）",
      q: "問43：屋外の単管足場にクランプ（直交金具等）を取り付ける際、長期間の雨水によるサビやボルトの固着を防ぐための正しい取り付け向きはどれですか。",
      q_id: "Soal 43: Bagaimanakah posisi arah baut klem perancah (clamp) yang BENAR saat dipasang di luar ruangan agar tidak mudah berkarat macet tergenang air hujan?",
      q_ne: "प्रश्न ४३: बाहिर खट बनाउँदा पाइपमा क्ल्याम्प कस्दा, पानी जमेर खिया नलागोस् भन्नाका लागि बोल्टको मुख कुन दिशा फर्काएर कस्नुपर्छ?",
      options: [
        { ja: "ボルトのネジ部が「下向き（または横向き）」になるように取り付け、ボルトのカップ内に雨水やゴミが溜まらない向きにする", id: "Arahkan drat baut menghadap KE BAWAH (atau menyamping), agar air hujan dan debu tidak mengendap di dalam mangkok baut klem", ne: "बोल्टको पेच भएको भाग 'मुनितिर (वा छेउतिर)' फर्काएर कस्ने, ताकि बोल्टको कचौराभित्र पानी र फोहोर जम्न नपाओस्" },
        { ja: "雨水がたっぷり溜まるようにボルトを真上に向けて取り付ける", id: "Arahkan baut tegak lurus ke atas agar menampung air hujan", ne: "पानी मज्जाले जमोस् भनेर बोल्ट आकाशतिर फर्काएर कस्ने" },
        { ja: "クランプに泥をたっぷり詰めてネジを回らなくしておく", id: "Mengisi mangkok klem dengan lumpur tanah", ne: "क्ल्याम्पभित्र हिलो कोचेर राख्ने" },
        { ja: "ボルトをペンチでへし折ってから取り付ける", id: "Mematahkan baut klem dengan tang", ne: "बोल्ट भाँचेर कस्ने" }
      ],
      answer: 0,
      expJa: "【クランプの取付向き】ボルトが上を向いていると雨水が溜まって早期にサビ付き、解体時にボルトが回らなくなります。水が抜ける「下向き・横向き」が鉄則です。",
      expId: "Baut klem yang menghadap ke atas akan menampung air hujan dan berkarat mati. Selalu pasang menghadap ke bawah agar air langsung menetes jatuh.",
      expNe: "बोल्ट माथितिर फर्काए पानी जमेर खिया लाग्छ र पछि फुकाल्न सकिन्न। त्यसैले बोल्ट सधैं मुनितिर फर्काएर कस्नुपर्छ।"
    },
    {
      cat: "実技：足場部材（単管ジョイント・ボンジョイントの禁止）",
      q: "問44：単管足場の建地（垂直の柱）を長手方向に接続する際、引張力に耐えられないため原則として建地への使用が禁止されているジョイント部材は何ですか。",
      q_id: "Soal 44: Jenis sambungan pipa perancah tipe tekan apakah yang DILARANG KERAS dipakai pada tiang vertikal (tateji) karena tidak mampu menahan gaya tarik terangkat?",
      q_ne: "प्रश्न ४४: खटको ठाडो खम्बा (तातेजी) जोड्दा तान्ने शक्ति थेग्न नसक्ने भएकाले खम्बामा प्रयोग गर्न कडा प्रतिबन्ध लगाइएको कमजोर जोइन्ट कुन हो?",
      options: [
        { ja: "ボンジョイント（ピン留め式・差し込み摩擦式の外接ジョイント）", id: "Bon-joint (Penyambung Pipa Tipe Selip / Gesek tanpa Baut Kunci Tarik)", ne: "बोन-जोइन्ट (पिन मात्र भएको पुरानो कमजोर पाइप जोड्ने जोइन्ट)" },
        { ja: "直線ジョイント（ボルト締付け式の安全認定ジョイント）", id: "Chokusen Joint (Sambungan Baut Resmi)", ne: "चोकुसेन जोइन्ट (बोल्ट कस्ने आधिकारिक बलियो जोइन्ट)" },
        { ja: "直交クランプ", id: "Klem Siku 90 Derajat", ne: "समकोण क्ल्याम्प" },
        { ja: "ジャッキベース", id: "Jack Base", ne: "ज्याक बेस" }
      ],
      answer: 0,
      expJa: "【安衛則の改正基準】ボンジョイントは引張強度が著しく低く、強風で足場が浮き上がった際にスポッと抜けて足場崩壊を引き起こすため、建地への使用は禁止されています。",
      expId: "Bon-joint dilarang dipakai di tiang perancah karena pipa mudah tercabut lepas saat ditiup angin topan. Gunakan sambungan baut berlisensi JIS.",
      expNe: "बोन-जोइन्टमा नट-बोल्ट नहुने भएकाले हुरीबतास आउँदा पाइप फुत्त फुत्किएर पूरै खट ढल्छ। त्यसैले खम्बामा यसको प्रयोग निषेध छ।"
    },
    {
      cat: "実技：コンクリート打設と「打ち込み高さ（自由落下高さ）」",
      q: "問45：柱や壁の型枠に生コンクリートを打ち込む際、骨材（砂利）とモルタルが分離してジャンカになるのを防ぐための「自由落下高さ」の許容基準はどれですか。",
      q_id: "Soal 45: Berapakah batas ketinggian jatuh bebas maksimal (free fall height) saat menuangkan coran beton dari ujung selang agar kerikil tidak terpisah dari air semen?",
      q_ne: "प्रश्न ४५: पिलर वा भित्ताको फर्मामा कंक्रीट खन्याउँदा, गिट्टी र सिमेन्टको घोल छुट्टिएर ढलान कमजोर (जान्का) नहोस् भन्नाका लागि कति उचाइभित्रबाट मात्र खन्याउनुपर्छ?",
      options: [
        { ja: "ホース先端からの落下高さを「1.5m以内」とし、型枠の底近くまでホースを落とし込んで打設する", id: "Ketinggian jatuh bebas selang cor maksimal '1,5 METER KE BAWAH', julurkan selang sedekat mungkin ke dasar bekisting", ne: "पाइपको टुप्पोबाट खस्ने उचाइ बढीमा '१.५ मिटरभित्र' राख्ने, र फर्माको पिँध नजिकै पाइप छिराएर बिस्तारै खन्याउने" },
        { ja: "ビルの屋上（高さ30m）から地上へ一気にダイレクトに落とし込む", id: "Menjatuhkan cor bebas dari atap lantai 10 (tinggi 30 m) ke tanah", ne: "१० तला माथि (३० मिटर) बाट सिधै भुइँमा खसाल्ने" },
        { ja: "落下高さは高ければ高いほどコンクリートが固くなって良い", id: "Makin tinggi makin baik", ne: "जति माथिबाट खसायो त्यति राम्रो हुने" },
        { ja: "高さ10mからバケツで勢いよく放り投げる", id: "Dilempar dari ember di ketinggian 10 m", ne: "१० मिटर माथिबाट बाल्टिनले हुत्याउने" }
      ],
      answer: 0,
      expJa: "【材料分離の防止】高所から生コンを自由落下させると、重い粗骨材だけが下に跳ねて沈み、上部がペーストだけになって重大な強度不足（ジャンカ）を起こします。1.5m以内が鉄則です。",
      expId: "Menjatuhkan coran > 1,5 meter memisahkan batu kerikil dan semen (segregasi), membuat beton keropos berlubang seperti sarang lebah.",
      expNe: "१.५ मिटरभन्दा माथिबाट खन्याए गह्रौं गिट्टी भुइँमा पछारिएर सिमेन्टको घोल छुट्टिन्छ र ढलान मौरीको चाका जस्तै प्वालैप्वाल भएको कमजोर बन्छ।"
    },
    {
      cat: "実技：コンクリートバイブレーターの「挿入ピッチ（間隔）」",
      q: "問46：スラブや梁のコンクリート打設において、内部振動機（バイブレーター）を均等に挿入して締め固める際、振動が重なり合うように配置する「挿入間隔（ピッチ）」の基準はどれですか。",
      q_id: "Soal 46: Berapakah jarak interval titik tancap (pitch) alat getar pemadat (concrete vibrator) agar seluruh adukan beton padat merata tanpa ada area yang terlewat?",
      q_ne: "प्रश्न ४६: ढलान गर्दा मसलालाई भित्रसम्म खाँद्न भाइब्रेटर मेसिन हाल्दा, कुनै ठाउँ नछुटोस् भन्नाका लागि एउटा प्वालदेखि अर्को प्वालबीचको दूरी (पिच) कति हुनुपर्छ?",
      options: [
        { ja: "挿入間隔はおおむね「50cm（0.5m）以下」とし、前の打設層に先端が10cm程度届くように垂直に差し込む", id: "Jarak titik tancap maksimal '50 cm ke bawah', dan ujung vibrator harus menembus masuk sekitar 10 cm ke lapisan cor di bawahnya", ne: "भाइब्रेटर हाल्ने दूरी बढीमा '५० सेन्टिमिटर (आधा मिटर) भित्र' हुनुपर्छ, र पहिले ढालेको तल्लो मसलामा टुप्पो १० सेमीसम्म छिराउनुपर्छ" },
        { ja: "10メートルおきに1回だけ差し込めば十分である", id: "Cukup setiap jarak 10 meter sekali", ne: "१० मिटरको फरकमा एकपटक हाले पुग्छ" },
        { ja: "部屋の四隅の角だけに1秒ずつ差し込む", id: "Hanya di 4 pojok ruangan masing-masing 1 detik", ne: "कोठाको ४ कुनामा १ सेकेन्ड मात्र हाल्ने" },
        { ja: "バイブレーターは使わず、作業員がスラブの上でジャンプして踏み固める", id: "Pekerja melompat-lompat di atas adukan cor", ne: "भाइब्रेटर नचलाई मान्छे उफ्रेर खाँद्ने" }
      ],
      answer: 0,
      expJa: "【JASS 5締固め基準】バイブレーターの有効振動半径は約25cmです。隙間なく締め固めるため、挿入ピッチは「50cm以下」とし、下層のコンクリートに10cm差し込んで一体化させます。",
      expId: "Tancapkan vibrator setiap jarak 50 cm secara vertikal dan tembuskan 10 cm ke lapisan cor bawahnya agar tidak terbentuk rongga keropos.",
      expNe: "भाइब्रेटरले वरिपरि २५ सेमीसम्म मात्र कम्पन दिन्छ। त्यसैले ५०-५० सेमीको फरकमा हाल्दै तल्लो ढलानमा १० सेमी छिराएर खाँद्नुपर्छ।"
    },
    {
      cat: "実技：外壁塗装の「下塗り（シーラー・プライマー）」の役割（P.160）",
      q: "問47：外壁の塗り替え塗装工事において、高圧洗浄・ケレンを行った後、中塗り塗料を塗る前に必ず「下塗り材（シーラーやプライマー）」を塗布する最も重要な目的は何ですか。",
      q_id: "Soal 47: Apakah fungsi paling vital dari lapisan cat dasar (Sealer / Primer / Shita-nuri) sebelum cat utama dipoleskan pada dinding luar?",
      q_ne: "प्रश्न ४७: भित्तामा रङ लगाउँदा मुख्य रङ लगाउनुअघि सुरुमा 'प्राइमर/सिलर (तलको पहिलो कोट)' लगाउनुको सबैभन्दा मुख्य उद्देश्य के हो?",
      options: [
        { ja: "脆弱になった下地表面を固め、中塗り・上塗り塗料の吸い込みを均一に抑え、下地と仕上げ塗膜を強力に接着（密着）させるため", id: "Memperkuat permukaan dinding yang rapuh, mencegah cat terserap boros ke dalam pori dinding, dan merekatkan cat akhir agar tidak mengelupas", ne: "कमजोर भएको भित्ताको सतहलाई बलियो बनाउन, रङलाई भित्ताले धेरै सोस्न नदिन, र नयाँ रङलाई भित्तामा च्याप्प टाँसिने बनाउनका लागि" },
        { ja: "中塗りや上塗りを塗らずに下塗りだけで工事を終わらせるため", id: "Agar tidak perlu mengecat lapis kedua dan ketiga", ne: "दोस्रो र तेस्रो कोट लगाउनु नपरोस् भनेर" },
        { ja: "壁の表面を濡らしてペンキを水で薄めるため", id: "Untuk mengencerkan cat dengan air", ne: "रङमा पानी मिसाउनका लागि" },
        { ja: "下塗り材は余った塗料を適当に混ぜたゴミ処理のため", id: "Hanya untuk membuang sisa cat lama", ne: "पुरानो बाँकी रङ फाल्नका लागि" }
      ],
      answer: 0,
      expJa: "【テキスト P.160参照】シーラー（Sealer）は「覆い隠す・密着させる」意味です。下塗りを省略すると、仕上塗料が下地に吸い込まれて色ムラになり、数ヶ月でパリパリ剥がれ落ちます。",
      expId: "Sealer/Primer adalah lem perekat cat. Mengecat tanpa cat dasar membuat cat utama langsung mengelupas rontok ditiup angin.",
      expNe: "प्राइमर भनेको रङको गम (अंकुश) हो। यो नलगाई रङ लगाए केही महिनामै रङ पत्र-पत्र परेर उप्किन्छ।"
    },
    {
      cat: "実技：屋根の「雪止め金具（ゆきどめ）」の配置基準（P.166）",
      q: "問48：積雪地域において、屋根の上の雪が一気に地面へ滑り落ちる落雪事故や、軒樋（雨どい）の破損を防ぐために取り付ける「雪止め金具」の設置位置として正しいものはどれですか。",
      q_id: "Soal 48: Di bagian atap manakah penahan salju (Yukidome) WAJIB dipasang agar longsoran salju atap tidak menghantam pejalan kaki atau merusak talang air?",
      q_ne: "प्रश्न ४८: हिउँ पर्ने ठाउँमा छानाको हिउँ एकैपटक तल खसेर मान्छेलाई नलागोस् र पानी पाइप नभाँचियोस् भनी छानामा 'युकिदोमे' फलाम कहाँ लगाइन्छ?",
      options: [
        { ja: "軒先から少し上がった柱や外壁の直上付近（建物の構造で荷重をしっかり受け止められる位置）に千鳥状等でバランスよく配置する", id: "Dipasang sedikit di atas tepi teritisan atap, tepat di atas garis dinding/tiang rumah (posisi yang kuat menahan beban dorong tumpukan salju)", ne: "छानाको किनारभन्दा थोरै माथि पिलर वा भित्ताको ठ्याक्कै माथिल्लो भागमा (जहाँ घरको फ्रेमले हिउँको गह्रौं भार थेग्न सक्छ) मिलाएर कस्ने" },
        { ja: "屋根のてっぺん（大棟）の頂点だけに1個だけ取り付ける", id: "Hanya 1 buah di puncak bubungan paling atas", ne: "छानाको सबैभन्दा टुप्पोमा जम्मा १ वटा मात्र लगाउने" },
        { ja: "雨樋のプラスチックの中に雪止め金具を落としておく", id: "Ditaruh di dalam pipa talang plastik", ne: "प्लास्टिकको पाइपभित्र राख्ने" },
        { ja: "雪止め金具を取り付けると屋根が割れるので一切取り付けてはならない", id: "Dilarang pasang karena merusak atap", ne: "लगाउनै नहुने" }
      ],
      answer: 0,
      expJa: "【テキスト P.166参照】雪止め金具は軒先ギリギリに付けると軒先が雪の重みで折れます。壁の直上付近に配置し、雪の荷重を建物の構造体へ安全に伝達させます。",
      expId: "Yukidome dipasang di atas garis tiang dinding rumah agar berat salju berton-ton ditopang oleh tiang pondasi gedung, bukan ujung seng yang rapuh.",
      expNe: "युकिदोमे धेरै छेउमा लगाए हिउँको भारीले छानाको टुप्पो नै भाँचिन्छ। त्यसैले भित्ताको पिलर पर्ने ठाउँ माथि कस्नुपर्छ।"
    },
    {
      cat: "実技：タイル密着張り工法（ヴィブラート使用）（P.169）",
      q: "問49：外壁タイル密着張り工法において、タイルを張り付けモルタルに埋め込み、裏足全体にモルタルを隙間なく行き渡らせるために使用する専用工具は何ですか。",
      q_id: "Soal 49: Alat getar genggam apakah yang digetarkan di atas permukaan keramik dinding luar agar mortar perekat mengalir rata memenuhi rongga belakang keramik?",
      q_ne: "प्रश्न ४९: भित्तामा टायल टाँस्दा टायलको पछाडि मसला राम्ररी पसेर टायल कहिल्यै नउप्कियोस् भन्नाका लागि टायल माथि कम्पन दिन चलाइने हाते भाइब्रेटर कुन हो?",
      options: [
        { ja: "小形振動工具（ヴィブラート / タイル圧着振動機）", id: "Vibrator Keramik Portabel (Vibrato / Alat Penggetar Penempel Keramik Dinding)", ne: "सानो टायल भाइब्रेटर (भिब्रेटो / टायल टाँस्ने कम्पन मेसिन)" },
        { ja: "大型チェーンソー", id: "Chainsaw gergaji mesin", ne: "चेनस मेसिन" },
        { ja: "釘打ち機（ネイラー）", id: "Pistol paku angin", ne: "किल्ला ठोक्ने गन" },
        { ja: "油圧ジャッキ", id: "Dongkrak hidrolik", ne: "ज्याक" }
      ],
      answer: 0,
      expJa: "【テキスト P.169参照】「密着張り工法」では、タイル張り付け用振動機（ヴィブラート）を用いてタイルに微振動を与え、モルタルを目地部まで盛り上がらせて剥落を防ぎます。",
      expId: "Vibrato menggetarkan keramik sehingga adukan mortar basah merata ke seluruh punggung keramik, mematikan rongga udara penyebab keramik copot.",
      expNe: "भिब्रेटो मेसिनले टायलमाथि हल्का कम्पन दिएर मसलालाई टायलको चारै कुनामा फैलाउँछ र टायल कहिल्यै उप्किँदैन।"
    },
    {
      cat: "実技：RC造サッシアンカーの溶接ピッチ（P.173）",
      q: "問50：鉄筋コンクリート造の窓開口部にアルミサッシを取り付ける際、サッシ枠のアンカープレートを躯体の埋込み鉄筋にアーク溶接する「標準的な配置間隔（ピッチ）」はどれですか。",
      q_id: "Soal 50: Berapakah jarak interval pengelasan angkur besi kusen jendela aluminium (sash) ke dinding beton (RC) menurut standar arsitektur?",
      q_ne: "प्रश्न ५०: ढलानको भित्तामा झ्यालको आल्मुनियम फ्रेम जोड्दा, फ्रेमको एङ्करलाई भित्ताको रडसँग वेल्डिङ गर्ने 'मानक दूरी (पिच)' कति हुनुपर्छ?",
      options: [
        { ja: "枠の四隅（コーナー）から約150mm以内、中間部は「おおむね500mm内外の間隔」で溶接固定する", id: "Dari sudut pojok maksimal 150 mm, dan di bagian tengah berjarak setiap sekitar 500 mm", ne: "झ्यालको चारै कुनाबाट करिब '१५० मिमीभित्र', र बीचको भागमा 'करिब ५०० मिमी (आधा मिटर) को फरकमा' वेल्डिङ गर्ने" },
        { ja: "窓枠の真ん中に1箇所だけ点付け溶接する", id: "Hanya 1 titik las di tengah kusen", ne: "बीचमा एउटा मात्र टाँका लगाउने" },
        { ja: "5メートルおきに溶接する", id: "Setiap jarak 5 meter", ne: "५ मिटरको फरकमा वेल्डिङ गर्ने" },
        { ja: "溶接は火災になるので禁止されておりガムテープで留める", id: "Dilarang las dan pakai lakban kertas", ne: "वेल्डिङ नगरी टेपले टाँस्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.173図参照】サッシの溶接基準は、コーナー端部から150mm、中間ピッチ500mm以内です。台風の強烈な風圧を受けてもサッシ枠が脱落・変形しない強度を確保します。",
      expId: "Standar las kusen jendela: 150 mm dari sudut dan interval maksimal 500 mm agar kusen kokoh menahan terpaan angin badai taifun.",
      expNe: "झ्यालको कुनाबाट १५० मिमी र बीचमा ५००-५०० मिमीको फरकमा वेल्डिङ गरेपछि मात्र हुरीबतास आउँदा पनि झ्याल हल्लिँदैन।"
    },
    {
      cat: "実技：内装石膏ボードの「ジョイントパテ処理」（P.170）",
      q: "問51：石膏ボードの上に壁紙（クロス）を張る前に行うパテ処理において、下塗りと上塗りのパテの使い分けとして正しいものはどれですか。",
      q_id: "Soal 51: Bagaimanakah teknik plamir dempul (putty) yang BENAR pada sambungan papan gypsum sebelum wallpaper dipasang?",
      q_ne: "प्रश्न ५१: जिप्सम बोर्डमाथि वालपेपर लगाउनुअघि पुट्टी लगाउँदा, सुरुको पुट्टी र अन्तिम पुट्टी लगाउने सही तरिका कुन हो?",
      options: [
        { ja: "下塗りにはやせ（乾燥収縮）の少ない硬化型パテにジョイントテープを伏せ込み、上塗りには粒子の細かい乾燥型パテを広く薄く塗り伸ばして平滑にする", id: "Gunakan dempul pengeras anti-susut + pita fiber di lapisan pertama, lalu lapis atas gunakan dempul halus fleksibel yang diamplas rata sempurna", ne: "सुरुमा नखुम्चिने कडा पुट्टी लगाएर जोर्नीमा फाइबर टेप टाँस्ने, र माथिल्लो कोटमा मसिनो चिल्लो पुट्टी फराकिलो पारेर पातलो लगाई खाक्सीले सम्याउने" },
        { ja: "パテの中に小石や砂利を混ぜて表面をザラザラにする", id: "Mencampur kerikil batu ke dalam adukan dempul", ne: "पुट्टीमा गिट्टी मिसाएर खस्रो बनाउने" },
        { ja: "パテは塗らずに壁紙の裏に新聞紙を挟んで張る", id: "Menyelipkan koran bekas di balik wallpaper tanpa dempul", ne: "पुट्टी नलगाई पछाडि अखबार हाल्ने" },
        { ja: "パテが乾かないドロドロの状態で即座にクロスを張る", id: "Langsung menempel wallpaper saat dempul masih basah kuyup", ne: "पुट्टी काँचै छँदा वालपेपर टाँस्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.170参照】石膏ボード目地は「下塗りパテ＋ファイバーテープ ➔ 中塗りパテ ➔ 上塗りパテ ➔ サンドペーパー研磨」の複数工程で段差をゼロにします。",
      expId: "Dempul gypsum dilakukan bertahap (dempul dasar + pita fiber -> dempul halus finis -> amplas rata) agar wallpaper tidak bergaris gelembung.",
      expNe: "पहिले टेप टाँसेर पहिलो पुट्टी लगाउने, सुकेपछि मसिनो पुट्टी लगाएर खाक्सीले घोटेपछि मात्र वालपेपर चिल्लो देखिन्छ।"
    },
    {
      cat: "実技：吹付けウレタンの「スキン層（表面皮膜）」（P.174）",
      q: "問52：硬質ウレタンフォームを発泡吹き付けした際、ウレタンの表面に自然形成される緻密で硬い層（スキン層）に関する知識として正しいものはどれですか。",
      q_id: "Soal 52: Manakah pemahaman yang BENAR mengenai lapisan kulit padat (Skin Layer) yang terbentuk alami di permukaan insulasi busa semprot polyurethane foam?",
      q_ne: "प्रश्न ५२: स्प्रे फोम इन्सुलेसन छर्केपछि बाहिरी सतहमा आफैं बन्ने बाक्लो कडा पत्र (स्किन लेयर) सम्बन्धी कुन कुरा सही छ?",
      options: [
        { ja: "表面のスキン層は水蒸気や湿気の浸入を防ぐ優れた防湿性能を持っているため、仕上げに支障がない限り原則として削り取らない", id: "Lapisan kulit permukaan (skin layer) memiliki daya tahan tinggi terhadap rembesan uap air; jangan dikikis/dipotong kecuali sangat mengganggu", ne: "बाहिरी सतहको कडा पत्र (स्किन लेयर) ले पानीको बाफ र ओस पस्न नदिने हुनाले, काममा बाधा नपर्दासम्म यसलाई ताछेर फाल्नुहुँदैन" },
        { ja: "スキン層は毒ガスを出すのですべてカッターで削り落とさなければならない", id: "Harus dikikis habis karena beracun", ne: "विषालु हुन्छ भन्दै चक्कुले ताछेर फाल्ने" },
        { ja: "スキン層をハンマーで叩いて粉々に粉砕しておく", id: "Dihancurkan dengan palu", ne: "हम्बरले हानेर फुटाउने" },
        { ja: "スキン層の上にガソリンを塗って溶かしてしまう", id: "Disiram bensin agar meleleh", ne: "पेट्रोल हालेर पगाल्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.174参照】ウレタンのスキン層（表面のツルツルした緻密層）は透湿抵抗が高く、内部結露を防ぐバリアの役目を果たします。不用意なカットは防湿性を落とします。",
      expId: "Skin layer urethane adalah pelindung anti-lembab alami. Memotong lapisan ini akan merusak daya tahan insulasi terhadap uap air.",
      expNe: "फोमको बाहिरी चिल्लो पत्रले ओस छिर्न दिँदैन। त्यसैले यसलाई नचाहिँदो गरी काट्नुहुन्न।"
    },
    {
      cat: "実技：シート防水の「重ね幅（接合幅）」（P.175）",
      q: "問53：加硫ゴム系や塩化ビニル系のシート防水工事において、シート同士を接着剤や熱融着で重ね合わせて張り合わせる際の「最小重ね幅」基準はどれですか。",
      q_id: "Soal 53: Berapakah lebar tumpang tindih minimal (overlap sambungan) antar lembaran membran waterproofing atap agar tidak bocor?",
      q_ne: "प्रश्न ५३: छतमा वाटरप्रुफिङ प्लास्टिक वा रबरको सिट ओछ्याउँदा एउटा सिटमाथि अर्को सिट खप्ट्याइने (ओभरल्याप) भाग कम्तीमा कति सेमी हुनुपर्छ?",
      options: [
        { ja: "シート相互の重ね幅は「40mm（塩ビ融着）〜100mm（接着工法）以上」を確保する", id: "Lebar tumpang tindih sambungan minimal '40 mm (las panas PVC) sampai 100 mm (lem karet)' ke atas", ne: "सिट खप्ट्याइने भाग कम्तीमा '४० मिमी (तातोले टाँस्दा) देखि १०० मिमी (गमले टाँस्दा)' हुनुपर्छ" },
        { ja: "重ね幅は1mmで十分である", id: "Cukup 1 mm", ne: "१ मिमी भए पुग्छ" },
        { ja: "重ねずに隙間を5cm開けておく", id: "Diberi celah bolong 5 cm", ne: "५ सेमी खुला छाड्ने" },
        { ja: "シートを縦に丸めて鉛筆のように立てておく", id: "Digulung seperti pensil", ne: "सिसाकलम जस्तै बेर्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.175参照】シート防水の漏水事故の9割はジョイント（重ね部）の接着不良です。仕様規定の重ね幅（熱融着40mm以上、接着工法100mm前後）を厳守します。",
      expId: "Overlap sambungan membran atap wajib 40-100 mm. Sambungan yang kurang lebar akan terkelupas ditiup angin badai dan air hujan merembes masuk.",
      expNe: "सिटको जोर्नीबाटै पानी चुहिने भएकाले कम्तीमा ४० देखि १०० मिमी खप्ट्याएर मेसिन वा गमले टाँस्नुपर्छ।"
    },
    {
      cat: "実技：玉掛け用ワイヤーの「アイ加工（アイスプライス）」",
      q: "問54：玉掛けワイヤーロープの端部を丸い輪っか（アイ）に加工する際、最も信頼性が高く強度が安定している正規の加工方法はどれですか。",
      q_id: "Soal 54: Manakah metode pembuatan mata kait (eye splice) kawat seling crane yang PALING KUAT dan diakui secara resmi oleh standar keselamatan industri?",
      q_ne: "प्रश्न ५४: क्रेनको स्लिङ तारको टुप्पोमा हुक अड्काउने गोलो रिङ (आँखा) बनाउँदा, सबैभन्दा बलियो र आधिकारिक मानिने तरिका कुन हो?",
      options: [
        { ja: "編込み加工（アイスプライス）を行い、さらに専用のスリーブ（金属管）を高圧プレス機で圧縮成形した圧着加工（ロック加工）", id: "Anyaman kawat (Eye Splice) yang dipres permanen menggunakan selongsong logam padat (Aluminium Sleeve Press / Talurit Lock)", ne: "तारलाई एकअर्कामा बुनेर (आइस स्प्लाइस), त्यसपछि धातुको बाक्लो पाइप हालेर मेसिनले थिचेर लक गरिएको (लक प्रोसेस)" },
        { ja: "手で固結び（ダンゴ結び）にして解けないように祈る", id: "Mengikat simpul mati dengan tangan kosong", ne: "हातले गाँठो पारेर छोड्ने" },
        { ja: "ガムテープをぐるぐる巻きにして止める", id: "Hanya dililit isolasi selotip", ne: "टेपले बेर्ने" },
        { ja: "輪ゴムで3回縛る", id: "Diikat 3 karet gelang", ne: "रबरले बाँध्ने" }
      ],
      answer: 0,
      expJa: "【玉掛けワイヤーの規格】ワイヤーロープを手で結ぶ（結節）と強度は半分以下に低下し破断します。工場で高圧プレスされた「段落としロック加工」品を使用します。",
      expId: "Kawat seling wajib memakai sambungan pres hidrolik pabrik (Talurit/Lock Processing). Mengikat kawat seling dengan simpul tangan adalah pembunuhan terencana!",
      expNe: "हातले गाँठो पारेको तार सामान उचाल्दा खुस्किन्छ। त्यसैले फ्याक्ट्रीमा मेसिनले थिचेर बनाइएको बलियो स्लिङ तार मात्र प्रयोग गर्नुपर्छ।"
    },
    {
      cat: "実技：熱中症と「深部体温の正確な測定方法」",
      q: "問55：熱中症で倒れた作業員の体温を測定する際、皮膚の表面温度を測る非接触型体温計（おでこ検温計）の数値だけで安心・判断してはならない医学的理由は何ですか。",
      q_id: "Soal 55: Mengapa termometer tembak dahi (non-contact infra-red) TIDAK BOLEH dijadikan patokan tunggal saat menangani korban heatstroke?",
      q_ne: "प्रश्न ५५: गर्मीले ढलेको बिरामीको निधारमा थर्मलगन (टाढाबाट नाप्ने थर्मोमिटर) ले नापेको तापक्रमलाई मात्र आधार मानेर ढुक्क हुन किन मिल्दैन?",
      options: [
        { ja: "皮膚表面は汗の蒸発や外気で冷やされて36℃前後に見えても、脳や内臓の「深部体温」は40℃以上の超危険な高熱になっている場合があるから", id: "Kulit luar dahi bisa tampak dingin 36°C karena tersapu angin/keringat, padahal suhu inti organ dalam dan otak sudah mendidih > 40°C!", ne: "निधारको छाला पसिना र हावाले चिसिएर ३६ डिग्री जस्तो देखिए पनि, दिमाग र भित्री अंगको 'भित्री तापक्रम (डिप टेम्परेचर)' ४० डिग्रीभन्दा बढी तातो भएको हुनसक्ने भएकाले" },
        { ja: "体温計からビームが出て作業員の目が潰れるから", id: "Sinar laser merusak mata", ne: "आँखा फुट्छ भनेर" },
        { ja: "体温計の電池が爆発するから", id: "Baterai bisa meledak", ne: "ब्याट्री पड्किन्छ भनेर" },
        { ja: "体温計は熱中症のときだけ動かなくなるから", id: "Alat mati otomatis saat heatstroke", ne: "मेसिन बिग्रिन्छ भनेर" }
      ],
      answer: 0,
      expJa: "【深部体温と表面体温の解離】大量に汗をかいた後や風に当たった皮膚は急速に冷えますが、体内の熱はこもったままです。意識レベルや症状（痙攣・言動）で重症度を判断します。",
      expId: "Termometer tembak dahi sering menipu! Kulit luar dingin tapi otak sedang terpanggang. Selalu lihat kondisi kesadaran dan respon bicara korban.",
      expNe: "निधारमा चिसो देखिए पनि भित्र दिमाग तातेर उम्लेको हुनसक्छ। त्यसैले थर्मोमिटरमा भन्दा बिरामीको होस र बोलीमा ध्यान दिनुपर्छ।"
    },
    {
      cat: "実技：脚立作業時の「作業半径と身の乗り出し禁止」",
      q: "問56：内装工事で脚立に立って天井の配管やボード張りを行う際、作業員がやってはならない危険行動はどれですか。",
      q_id: "Soal 56: Tindakan berbahaya apakah yang DILARANG saat bekerja di atas tangga lipat (kyatatsu) untuk menjangkau titik yang jauh?",
      q_ne: "प्रश्न ५६: भर्याङ (क्याताचु) माथि चढेर काम गर्दा परको सामान भ्याउनका लागि झुक्केर पनि गर्न नहुने खतरनाक काम कुन हो?",
      options: [
        { ja: "脚立を移動させるのを面倒くさがり、脚立の上から身体を大きく外側へ乗り出して作業すること（胴体が脚立の幅から外れる無理な姿勢）", id: "Malas memindahkan tangga, lalu mencondongkan badan jauh ke samping melebihi lebar kaki tangga (overreaching)", ne: "भर्याङ सार्न अल्छी मानेर, भर्याङको चौडाइभन्दा धेरै बाहिर जिउ तन्काएर (झुण्डिएर) परसम्म काम गर्न खोज्नु" },
        { ja: "手が届きにくい場所は、面倒でも一度脚立から降りて、脚立を作業位置の正面に置き直す", id: "Turun dari tangga dan memindahkan tangga tepat di bawah titik kerja", ne: "हात नपुगेपछि तल झरेर भर्याङलाई ठ्याक्कै काम गर्ने ठाउँ मुनि सार्नु" },
        { ja: "脚立のステップに両足で安定して立つ", id: "Berdiri seimbang di anak tangga dengan kedua kaki", ne: "दुवै खुट्टाले टेकेर सन्तुलन मिलाई उभिनु" },
        { ja: "作業前に脚立の足元にゴミがないか確認する", id: "Cek lantai bersih sebelum pasang tangga", ne: "मुनि फोहोर छैन भनी हेर्नु" }
      ],
      answer: 0,
      expJa: "【テキスト P.184参照】「身の乗り出し（Overreaching）」は脚立転倒の主因です[cite: 14]。身体のバックル（ヘソ）が脚立の支柱の外側に出ない範囲で作業し、遠い場所は必ず脚立を移動させます[cite: 14]。",
      expId: "Jangan malas geser tangga! Mencondongkan badan ke samping akan membalikkan tangga dalam hitungan detik. Turun dan geser tangganya!",
      expNe: "भर्याङ सार्न अल्छी गरेर शरीर धेरै बाहिर तन्काए भर्याङ पल्टिन्छ। अल्छी नगरी ओर्लेर भर्याङ सार्नुपर्छ।"
    },
    {
      cat: "実技：新規入場者の保護具（安全帯フックの規格マーク）",
      q: "問57：作業員の墜落制止用器具を点検する際、現行の日本の安全基準を満たしていることを証明するラベル表示はどれですか。",
      q_id: "Soal 57: Tanda label resmi apakah yang WAJIB tertera pada sabuk Full Body Harness untuk membuktikan bahwa alat tersebut sah sesuai standar hukum Jepang terbaru?",
      q_ne: "प्रश्न ५७: कामदारको सेफ्टी हार्नेस जाँच्दा, यो नयाँ जापानी कानुन अनुसारको प्रमाणित सामग्री हो भनी छुट्याउने आधिकारिक लेबल कुन हो?",
      options: [
        { ja: "「墜落制止用器具の規格」適合品（ショックアブソーバの種別：第1種または第2種、最大使用質量等が明記されたJIS規格タグ）", id: "Label 'Tsuiraku Seishi-you Kigu no Kikaku' (Standar Alat Penahan Jatuh) yang mencantumkan Jenis Shock Absorber (Tipe 1/2) dan Batas Beban Kg", ne: "'चुइराकु सेइशी-योउ किगु नो किकाकु (सेफ्टी हार्नेस मापदण्ड)' लेखिएको आधिकारिक ट्याग (जसमा शक-एब्जर्बरको प्रकार र तौल क्षमता लेखिएको हुन्छ)" },
        { ja: "「おもちゃ用安全基準合格」のマーク", id: "Label SNI mainan anak-anak", ne: "बालबालिकाको खेलौनाको मार्क" },
        { ja: "「洗濯機で丸洗い可能」とだけ書かれた紙", id: "Bisa dicuci mesin cuci", ne: "कपडा धुने मेसिनमा धुन मिल्ने कागज" },
        { ja: "メーカー名も規格も何も書いていない無地のテープ", id: "Pita polosan tanpa tulisan apa pun", ne: "केही नलेखिएको सादा टेप" }
      ],
      answer: 0,
      expJa: "【テキスト P.189参照】旧規格の「安全帯（胴ベルト型等）」は原則使用禁止です。現行法に適合した「墜落制止用器具の規格」表示があるフルハーネスのみを使用させます[cite: 19]。",
      expId: "Pastikan ada label resmi 'Tsuiraku Seishi-you Kigu' pada harness. Tipe lama (dou-belt) sudah ILEGAL untuk pekerjaan ketinggian konstruksi.",
      expNe: "पुरानो कम्मरमा मात्र बाँध्ने बेल्ट अवैध भइसकेको छ। नयाँ कानुन अनुसारको आधिकारिक छाप भएको फुल बडी हार्नेस मात्र लगाउनुपर्छ।"
    },
    {
      cat: "実技：熱中症と「現場のクーラー付き休憩所の換気」",
      q: "問58：猛暑時にエアコンを作動させている密閉された現場詰所・休憩所において、熱中症予防と同時に感染症や酸欠・CO2濃度上昇を防ぐ正しい管理はどれですか。",
      q_id: "Soal 58: Bagaimanakah cara ventilasi yang BENAR di dalam ruang istirahat ber-AC agar suhu tetap dingin sekaligus udara tetap kaya oksigen segar?",
      q_ne: "प्रश्न ५८: गर्मीमा एसी चलाएको बन्द आराम कोठाभित्र हावा चिसो राख्दै अक्सिजन घट्न नदिन र रोग सर्न नदिन कस्तो व्यवस्था मिलाउनुपर्छ?",
      options: [
        { ja: "エアコンを冷房運転したまま、換気扇を常時回すか、1時間に1〜2回程度窓を数分間開けて空気の入れ替えを行う", id: "Nyalakan kipas exhaust ventilasi terus-menerus sambil AC menyala, atau buka jendela sedikit beberapa menit setiap 1 jam sekali", ne: "एसी चलिरहेकै बेला पनि हावा फाल्ने पङ्खा निरन्तर चलाउने, वा घण्टामा १-२ पटक केही मिनेटका लागि झ्याल खोलेर ताजा हावा छिराउने" },
        { ja: "冷気が逃げるのを防ぐため、すべての換気扇を止め窓の隙間を目張りして密閉する", id: "Menutup rapat semua ventilasi dan mematikan exhaust agar hawa dingin tidak kabur", ne: "चिसो हावा नजाओस् भनेर सबै झ्याल र पङ्खाहरू पूरै बन्द गरेर थुन्ने" },
        { ja: "休憩所の中で炭火を起こして焼肉パーティーをする", id: "Membakar arang sate di dalam ruang AC tertutup", ne: "भित्र कोइला बालेर सेकुवा पोल्ने" },
        { ja: "エアコンのフィルターを泥で塗りつぶして風を止める", id: "Melumuri filter AC dengan lumpur", ne: "फिल्टरमा हिलो हाल्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.191参照】密閉した休憩所に作業員が密集すると二酸化炭素濃度が急上昇し、頭痛や疲労・感染症の原因になります[cite: 21]。冷房しつつ常時換気を行うのが現代の標準です。",
      expId: "Jangan tutup rapat ruang AC tanpa ventilasi! Banyak pekerja bernapas di ruang sempit membuat CO2 melonjak tinggi memicu pusing lemas.",
      expNe: "धेरै मान्छे बस्ने चिसो कोठामा हावा नफेरे अक्सिजन सकिएर टाउको दुख्छ। त्यसैले एसीसँगै भेन्टिलेसन पङ्खा चलाइराख्नुपर्छ।"
    },
    {
      cat: "実技：クレーン作業と「巻過防止装置のバイパス禁止」",
      q: "問59：クレーンの巻過防止装置の警報ブザーが鳴って巻き上げが自動停止した際、運転手がやってはならない最も危険な不正操作はどれですか。",
      q_id: "Soal 59: Tindakan kecurangan terlarang dan paling fatal apakah yang DILARANG KERAS dilakukan saat sensor batas derek (over-hoist) berbunyi mengunci mesin?",
      q_ne: "प्रश्न ५९: क्रेनको हुक धेरै माथि पुगेर सेन्सरले 'टी-टी' आवाज निकाल्दै मेसिन रोकिदिएपछि, ड्राइभरले गर्न नहुने 'कडा निषेधित बदमासी' कुन हो?",
      options: [
        { ja: "バイパススイッチ（解除スイッチ）を押しっぱなしにして安全装置を強制無効化し、さらに限界を超えて巻き上げを強行すること", id: "Menekan saklar bypass (pembatal darurat) untuk mematikan sensor pengaman lalu memaksakan derek naik terus sampai menabrak ujung boom", ne: "बाइपास (सुरक्षा हटाउने बटन) थिचेर सेन्सरलाई जबरजस्ती बन्द गराउने र हुकलाई झन् माथि तानेर टुप्पोमा ठोक्काउन खोज्नु" },
        { ja: "直ちに巻き上げを停止し、ゆっくりとフックを下方へ巻き下げる", id: "Langsung stop derek dan turunkan hook perlahan menjauhi boom", ne: "तुरुन्त तान्न रोकेर बिस्तारै हुकलाई तल झार्नु" },
        { ja: "合図者にブームの先端とフックの間隔を目視確認させる", id: "Menyuruh juru sinyal mengecek jarak hook ke ujung tiang", ne: "संकेत दिने मान्छेलाई कति दूरी बाँकी छ हेर्न लगाउनु" },
        { ja: "巻き過防止装置のリミットスイッチが正常に復帰するか点検する", id: "Memeriksa apakah tuas sensor kembali ke posisi normal", ne: "सेन्सर ठीक ठाउँमा आयो कि नाई जाँच्नु" }
      ],
      answer: 0,
      expJa: "【巻過防止の無効化禁止】バイパススイッチで巻き上げを強行すると、フックが滑車を破壊しワイヤーが切断、数トンのフックと荷が真下に自由落下して直撃死亡事故になります。",
      expId: "Mem-bypass sensor batas derek adalah penyebab utama kawat seling putus dan beban crane jatuh menimpa orang di bawah. HARAM DIBYPASS!",
      expNe: "सुरक्षा सेन्सरलाई बाइपास गरेर माथि ताने तार तुरुन्त चुँडिन्छ र हुकसहितको सामान तल खसेर तलका सबै मान्छे किचिन्छन्।"
    },
    {
      cat: "学科：熱中症と「現場の冷却ベスト（保冷剤入り）」",
      q: "問60：真夏の溶接作業や鉄骨建て方など、火花や粉じんのためファン付き作業着が使用できない現場において、効果的な熱中症対策装備は何ですか。",
      q_id: "Soal 60: Perlengkapan pendingin badan apakah yang SANGAT EFEKTIF dipakai juru las saat baju kipas angin dilarang demi keamanan percikan api?",
      q_ne: "प्रश्न ६०: वेल्डिङ वा आगोको झिल्का उछिट्टिने ठाउँमा पंखा भएको ज्याकेट लगाउन नमिल्दा, शरीर चिस्याउन भित्र लगाइने विशेष कपडा कुन हो?",
      options: [
        { ja: "保冷剤ポケット付きアイスベスト（脇や背中の動脈を直接保冷パックで冷やすインナーベスト）", id: "Rompi Pendingin Berisi Ice Pack (Ice Vest / Cooling Vest dengan kantong es di ketiak & punggung)", ne: "बरफका प्याकहरू राख्न मिल्ने 'आइस भेस्ट' (काखी र ढाडको नसालाई चिस्याउने बरफको खल्ती भएको भित्री भेस्ट)" },
        { ja: "新聞紙を体に巻きつける", id: "Melilitkan koran ke badan", ne: "शरीरमा अखबार बेर्ने" },
        { ja: "厚手のウールセーター", id: "Sweater rajut tebal", ne: "बाक्लो स्वीटर" },
        { ja: "毛皮のコート", id: "Mantel bulu hewan", ne: "रौँ भएको कोट" }
      ],
      answer: 0,
      expJa: "【テキスト P.191参照】火気使用現場では空調服が火花を吸い込み引火する危険があります[cite: 20]。その場合は保冷剤を両脇に密着させる「アイスベスト」が極めて有効です[cite: 21]。",
      expId: "Ice Vest dengan kantong kompres es di ketiak adalah solusi terbaik bagi juru las yang tidak bisa memakai baju kipas angin.",
      expNe: "वेल्डिङ गर्दा पंखा चलाए आगो टिप्ने डर हुन्छ। त्यसैले काखीमुनि बरफ राख्न मिल्ने 'आइस भेस्ट' लगाएर काम गर्नुपर्छ।"
    },
    {
      cat: "実技：足場解体時の「壁つなぎの先行解体禁止」（P.182）",
      q: "問61：建物の足場を解体する際、作業員が解体しやすさを優先して「壁つなぎを上の階まで一気に全部外してから足場部材を下ろす」施工を行っていた場合の職長の判断はどれですか。",
      q_id: "Soal 61: Saat membongkar perancah, tukang melepas seluruh klem pengikat dinding (kabe-tsunagi) sekaligus dari atas ke bawah sebelum pipa dibongkar. Apakah perintah Shokucho?",
      q_ne: "प्रश्न ६१: खट भत्काउँदा कामदारले छिटो सक्नका लागि 'भित्तामा बाँधेका सबै काबे-चुनागी रडहरू पहिले नै एकैचोटि फुकालेर' अनि मात्र पाइप खोल्न थाल्यो। शोकुचोले तुरुन्त के गर्नुपर्छ?",
      options: [
        { ja: "極めて危険な重大違反であり、突風で足場全体が外側へ一気に倒壊するため、直ちに作業を停止させ、足場解体の進捗に合わせて「最上層の壁つなぎを最後まで残しながら」解体させる", id: "HENTIKAN KERJA DETIK ITU JUGA! Perancah akan langsung roboh terbalik ditiup angin. Bongkar kabe-tsunagi bertahap lapis demi lapis bersamaan dengan pipa!", ne: "तुरुन्त काम रोक्ने! हावाको हल्का धक्काले पनि पूरै खट सडकतिर एकैचोटि ढल्छ। त्यसैले पाइप भत्काउँदै झरेपछि मात्र त्यो तलाको रड क्रमशः फुकाल्न लगाउने" },
        { ja: "早く解体できるなら素晴らしいアイデアだと褒める", id: "Memujinya karena kerjaan jadi cepat", ne: "छिटो सकिने भयो भन्दै प्रशंसा गर्ने" },
        { ja: "壁つなぎをすべて外した足場の上で作業員全員でジャンプさせる", id: "Menyuruh pekerja melompat di atasnya", ne: "सबैलाई माथि उफ्रिन लगाउने" },
        { ja: "見て見ぬふりをして事務所へ戻る", id: "Pura-pura tidak tahu lalu pergi", ne: "देखे पनि नदेखे झैं गरी जाने" }
      ],
      answer: 0,
      expJa: "【テキスト P.182参照】足場解体中の倒壊事故の9割は「壁つなぎの先行取り外し」です[cite: 12]。壁つなぎは足場の解体階のすぐ直下まで最後まで残し、1層ずつ解体します[cite: 12]。",
      expId: "Melepas kabe-tsunagi duluan sebelum pipa perancah dibongkar adalah penyebab utama perancah roboh massal menimpa jalan raya. Bongkar bertahap lapis demi lapis!",
      expNe: "पाइप भत्काउनु अघि नै भित्ताको रड फुकाले खट सडकमा ढलेर नरसंहार हुन्छ। त्यसैले तला अनुसार बिस्तारै रड फुकाल्दै झर्नुपर्छ।"
    },
    {
      cat: "実技：熱中症と「現場の麦茶の利点」",
      q: "問62：現場の給水タンクに用意する日常の飲料として、緑茶やコーヒーよりも「麦茶（むぎちゃ）」が最も推奨されている医学的理由は何ですか。",
      q_id: "Soal 62: Mengapa Teh Gandum (Mugicha) jauh lebih direkomendasikan untuk pekerja proyek di musim panas dibandingkan teh hijau atau kopi?",
      q_ne: "प्रश्न ६२: गर्मीमा काम गर्दा कफी वा ग्रिन टी भन्दा जापानी 'जौको चिया (मुगिचा)' पिउनु सबैभन्दा राम्रो मानिनुको मुख्य कारण के हो?",
      options: [
        { ja: "カフェインが含まれていない（ノンカフェイン）ため利尿作用がなく、カリウムやナトリウム等のミネラルを豊富に含み、水分を体内に長く保持できるから", id: "Bebas Kafein (tidak memicu buang air kecil) dan kaya mineral alami (kalium/natrium), sehingga air bertahan lama di dalam pembuluh darah", ne: "यसमा क्याफिन नहुने (पिसाब धेरै नलाग्ने) भएकोले, र प्रशस्त खनिज (पोटासियम/सोडियम) हुने भएकाले शरीरभित्र पानी धेरै बेरसम्म रहिरहने हुनाले" },
        { ja: "麦茶を飲むと足が速くなるから", id: "Bisa lari lebih kencang", ne: "दौडिन सजिलो हुने भएकोले" },
        { ja: "麦茶はどんなに暑い日でも凍りついているから", id: "Mugicha selalu beku", ne: "सधैं जम्ने भएकोले" },
        { ja: "緑茶やコーヒーは建設業法で飲むことが禁止されているから", id: "Kopi dilarang oleh UU Konstruksi", ne: "कफी पिउन कानुनले निषेध गरेकोले" }
      ],
      answer: 0,
      expJa: "【麦茶の効能】緑茶やコーヒーに含まれるカフェインは利尿作用があり、飲んだ以上に水分を尿として排出させて脱水を招きます。ノンカフェインの麦茶が現場の水分補給に最適です。",
      expId: "Mugicha tidak mengandung kafein sehingga tidak membuat Anda kencing terus-menerus. Sangat aman dan sehat menjaga hidrasi darah.",
      expNe: "कफी र ग्रिन टीले पिसाब धेरै गराएर शरीरको पानी सुकाउँछ। तर मुगिचामा क्याफिन नहुने र खनिज धेरै हुने भएकाले यो सबैभन्दा उत्तम हुन्छ।"
    },
    {
      cat: "実技：脚立の「開き止め金具」の自作・代用禁止",
      q: "問63：脚立の中央の開き止め金具がちぎれて破損したため、作業員が「針金（番線）を結びつけて代用」していました。職長の正しい指示はどれですか。",
      q_id: "Soal 63: Engsel pengunci tangga lipat putus dan diakali pekerja dengan mengikatkan kawat bendrat sebagai gantinya. Apakah perintah TEGAS Shokucho?",
      q_ne: "प्रश्न ६३: भर्याङ (क्याताचु) को बीचको लक भाँचिएपछि कामदारले 'फलामे तारले बाँधेर काम चलाउन' खोजिरहेको छ। शोकुचोले के निर्देशन दिनुपर्छ?",
      options: [
        { ja: "針金は荷重や衝撃で簡単に伸びたり破断し、一瞬で脚立が開脚倒壊して転落死するため、直ちに使用を中止させ、正規の部品交換または新品に更新させる", id: "HENTIKAN SEGERA! Kawat akan putus saat dibebani dan tangga langsung mekar rebah menjatuhkan pekerja. Ganti sparepart asli atau buang ganti tangga baru!", ne: "तुरुन्त काम रोक्ने! भार पर्दा तार चुँडिन्छ र भर्याङ एकैपटक च्यापिएर मान्छे लड्छ। कम्पनीको आधिकारिक पार्टपुर्जा फेर्ने वा नयाँ भर्याङ ल्याउने" },
        { ja: "針金を10重にきつく巻けば新品より強くなると言って褒める", id: "Memujinya pintar mengikat kawat", ne: "तार धेरै बेरे झन् बलियो हुन्छ भनी प्रशंसा गर्ने" },
        { ja: "針金の代わりにビニールテープで結び直させる", id: "Menyuruh ganti pakai selotip plastik", ne: "प्लास्टिकको टेपले बाँध्न लगाउने" },
        { ja: "作業員に「片足立ちで乗れば大丈夫だ」とアドバイスする", id: "Menyuruh naik dengan satu kaki saja", ne: "एउटा खुट्टाले मात्र टेके केही हुन्न भन्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.184参照】安全装置の番線代用は最も危険な違反行為です[cite: 14]。針金は伸びやすく衝撃に耐えられません。必ずメーカー正規品への交換が必要です。",
      expId: "Mengakali engsel tangga lipat dengan kawat adalah jebakan maut. Kawat tidak punya daya tahan impak dan pasti putus saat tukang bergerak di atas.",
      expNe: "भर्याङको लक भाँचिएपछि तारले बाँध्नु भनेको मृत्युको पासो थाप्नु हो। यस्तो भर्याङ तुरुन्त हटाएर नयाँ प्रयोग गर्नुपर्छ।"
    },
    {
      cat: "実技：熱中症と「現場の緊急搬送（救急車が来るまでの姿勢）」",
      q: "問64：熱中症で意識が朦朧として倒れている作業員の救急車を待つ間、嘔吐（吐き気）がある場合の安全な寝かせ方（体位）はどれですか。",
      q_id: "Soal 64: Bagaimanakah posisi tidur darurat (Recovery Position) yang BENAR untuk korban heatstroke yang mual/muntah saat menunggu ambulans datang?",
      q_ne: "प्रश्न ६४: हिटस्ट्रोक भएर बान्ता गरिरहेको अचेत बिरामीलाई एम्बुलेन्स नआउन्जेल कुन सही पोजिसनमा सुताएर राख्नुपर्छ?",
      options: [
        { ja: "顔を横に向け、身体を横向きに寝かせる「回復体位（側臥位）」をとらせ、吐瀉物が喉に詰まって窒息するのを防ぐ", id: "Posisikan tubuh miring menyamping dengan kepala menoleh ke samping (Posisi Pemulihan / Recovery Position) agar muntahan tidak menyumbat paru-paru", ne: "अनुहारलाई छेउतिर फर्काएर कोल्टे पारेर सुताउने 'रिकभरी पोजिसन (साइड पोजिसन)', ताकि बान्ता आए पनि घाँटीमा नअड्कियोस् र सास नथुनियोस्" },
        { ja: "真っ直ぐ仰向け（上向き）に寝かせて首の後ろを高く反らせる", id: "Tidur telentang lurus menatap langit", ne: "आकाशतिर हेर्ने गरी उत्तानो सुताउने" },
        { ja: "うつ伏せ（下向き）にして背中の上に重い荷物を載せる", id: "Tengkurap dan menindih punggungnya dengan barang", ne: "घोप्टो पारेर पिठ्युँमा भारी राख्ने" },
        { ja: "立たせたままロープで柱に縛り付けておく", id: "Diikat berdiri di tiang", ne: "खम्बामा बाँधेर उभ्याउने" }
      ],
      answer: 0,
      expJa: "【回復体位（側臥位）】意識が低下した状態で仰向けに寝かせると、嘔吐物が気道に詰まって数分で窒息死します。必ず横向き（側臥位）にして気道を確保します。",
      expId: "Korban muntah WAJIB dimiringkan badannya (Recovery Position). Menelentangkannya membuat cairan muntah masuk ke paru-paru memicu henti napas seketika.",
      expNe: "बान्ता आउने बिरामीलाई उत्तानो सुताए बान्ताले सास फेर्ने नली थुनेर तत्काल ज्यान जान्छ। त्यसैले सधैं कोल्टे पारेर सुताउनुपर्छ।"
    },
    {
      cat: "実技：救急隊到着時の「現場引継ぎの完了報告」",
      q: "問65：119番通報した救急隊員が事故現場に到着した瞬間、職長が救急隊長に手渡すべき「最も正確な救命メモ（情報引継ぎ）」の項目はどれですか。",
      q_id: "Soal 65: Catatan medis darurat apakah yang WAJIB dilaporkan secara lisan & tertulis oleh Shokucho kepada komandan regu paramedis Ambulans saat tiba di lokasi?",
      q_ne: "प्रश्न ६५: एम्बुलेन्सका डाक्टरहरू कार्यस्थलमा आइपुग्ने बित्तिकै, शोकुचोले उनीहरूलाई तत्काल बुझाउनुपर्ने सबैभन्दा मुख्य जानकारी के हो?",
      options: [
        { ja: "①事故発生の時刻と原因、②初期の意識状態と現在の意識変化、③測定した体温・血圧、④現場で実施した処置（冷却部位・飲ませた水分量）、⑤本人の持病・アレルギー・服用薬", id: "1. Jam & kronologi kejadian, 2. Grafik kesadaran awal s/d sekarang, 3. Suhu badan, 4. Rincian P3K (titik kompres & jumlah minum), 5. Riwayat penyakit/obat korban", ne: "१. घटना घटेको समय र कारण, २. सुरुको होस र अहिलेको अवस्था, ३. नापेको तापक्रम, ४. फिल्डमा गरिएको प्राथमिक उपचार (बरफ लगाएको ठाउँ र पिएको पानीको मात्रा), ५. बिरामीको पुरानो रोग र औषधि" },
        { ja: "現場事務所の設計図面一式", id: "Denah gambar arsitektur kantor proyek", ne: "अफिसको नक्सा" },
        { ja: "元請会社の昨年度の売上高報告書", id: "Laporan neraca keuangan perusahaan tahun lalu", ne: "कम्पनीको पुरानो नाफा-नोक्सानको हिसाब" },
        { ja: "職長の今月の残業時間メモ", id: "Catatan lembur pribadi mandor", ne: "शोकुचोको व्यक्तिगत ओभरटाइम हिसाब" }
      ],
      answer: 0,
      expJa: "【救急隊への情報引継ぎ】現場で「何時に倒れ、体温が何度で、どんな冷却処置を何分間行ったか」の正確なメモを手渡すことで、医師が適切な点滴治療を即座に開始できます。",
      expId: "Beri tahu paramedis: Jam pingsan, suhu badan, dan kompres apa yang sudah diberikan. Info ini menentukan hidup matinya korban di IGD rumah sakit.",
      expNe: "कति बजे ढल्यो, तापक्रम कति थियो, र कस्तो प्राथमिक उपचार गरियो भन्ने प्रष्ट जानकारी डाक्टरलाई दिएपछि मात्र अस्पतालमा तुरुन्तै सही उपचार सुरु हुन सक्छ।"
    }
  ]
};
