const CURRENT_QUIZ_DATA = {
  title: "実技・判断等試験②：<ruby>建設現場<rt>けんせつげんば</rt></ruby>の<ruby>施工<rt>せこう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>知識<rt>ちしき</rt></ruby>（P.145〜178）",
  key: "score_jitsugi_2",
  passScore: 70,
  questions: [
    {
      cat: "第6章 施工計画の3要素（P.146）",
      q: "工事を着工する前に行う「施工計画」において、**計画を立てるべき最も基本的な3つの要素**として正しい組み合わせはどれですか。",
      q_id: "Manakah kombinasi yang BENAR mengenai 3 elemen paling mendasar dalam menyusun Rencana Pelaksanaan Konstruksi (Sekou Keikaku)?",
      q_ne: "निर्माण कार्य सुरु गर्नुअघि बनाइने 'कार्य योजना' मा तय गरिने सबैभन्दा आधारभूत ३ मुख्य तत्त्वहरूको सही जोडी कुन हो?",
      options: [
        { ja: "施工方法（どうやって造るか）・日程計画（いつ造るか）・資源計画（人・物・機械をどう調達するか）", id: "Metode Kerja (Cara membangun), Jadwal Waktu (Kapan dibangun), dan Rencana Sumber Daya (Orang, material, alat)", ne: "निर्माण विधि (कसरी बनाउने), कार्यतालिका (कहिले बनाउने), र स्रोतसाधन योजना (मानिस, सामग्री, मेसिन कसरी जुटाउने)" },
        { ja: "土地の売買価格・建物の固定資産税・完成後の家賃相場", id: "Harga Jual Lahan, Pajak Properti, dan Estimasi Uang Sewa", ne: "जग्गाको भाउ, सम्पत्ति कर, र भाडाको दर" },
        { ja: "現場事務所のテレビの配置・弁当の注文先・ラジオの選局", id: "Posisi TV Kantor, Pemesanan Bento, dan Saluran Radio", ne: "अफिसको टिभी, खानाको अर्डर, र रेडियो च्यानल" },
        { ja: "作業員の家族の職業・出身地の天気予報・旅行の計画", id: "Pekerjaan Keluarga Pekerja, Prakiraan Cuaca Kampung, dan Wisata", ne: "परिवारको जागिर, गाउँको मौसम, र घुम्ने योजना" }
      ],
      answer: 0,
      expJa: "【テキスト P.146参照】施工計画の基本は、①施工方法（どのような手順・工法で造るか）、②日程計画（いつまでに造るか・工程）、③資源計画（労務・材料・機械をどう手配するか）の3つを明確にすることです。",
      expId: "3 elemen dasar Sekou Keikaku: Metode pelaksanaan kerja, Jadwal tahapan waktu (jadwal), dan Pengalokasian sumber daya (tenaga, material, mesin).",
      expNe: "कार्य योजनाका ३ आधारभूत तत्त्वहरू हुन्: काम गर्ने तरिका वा विधि, काम सम्पन्न गर्ने कार्यतालिका, र मान्छे, सामान तथा मेसिनको व्यवस्थापन।"
    },
    {
      cat: "第6章 墨出しの基本（P.149）",
      q: "建物の正確な位置を出すための「墨出し（基準墨）」について、**柱や壁の仕上がり面から一定の距離（例えば1m）離して引く補助的な基準線**を何と呼びますか。",
      q_id: "Dalam pekerjaan Sumidashi (penandaan garis acuan), apa nama garis acuan bantu yang ditarik berjarak konstan (misal 1m) mundur dari bidang jadi pilar/dinding?",
      q_ne: "भवनको सिधा नाप निकाल्ने काममा पिलर वा भित्ताको वास्तविक नापभन्दा निश्चित दूरी (जस्तै १ मिटर) पर तानेर राखिने सहायक रेखालाई के भनिन्छ?",
      options: [
        { ja: "逃げ墨（にげずみ）／ 返り墨（かえりずみ）", id: "Nige-zumi / Kaeri-zumi (Garis Acuan Mundur / Offset Line)", ne: "निगे-जुमी (पर सारेको रेखा / अफसेट लाइन)" },
        { ja: "陸墨（ろくずみ）", id: "Roku-zumi (Garis Acuan Level Horizontal)", ne: "रोकु-जुमी (तेर्सो लेभल रेखा)" },
        { ja: "地縄（じなわ）", id: "Jinawa (Tali Batas Tapak Bangunan)", ne: "जिनावा (जमिनमा सीमा कोर्ने डोरी)" },
        { ja: "落書き（らくがき）", id: "Coretan Asal", ne: "हचुवाको कोरेको धर्को" }
      ],
      answer: 0,
      expJa: "【テキスト P.149参照】部材が施工されると本来の芯墨（基準線）が見えなくなってしまうため、あらかじめ一定寸法（500mmや1000mmなど）離した位置に引く基準線を「逃げ墨（返り墨）」と呼びます。",
      expId: "Nige-zumi adalah garis acuan bantu yang digeser berjarak tertentu agar tidak tertutup atau hilang saat dinding/pilar dipasang.",
      expNe: "पिलर वा पर्खाल बनेपछि मूल रेखा छोपिने हुनाले १ मिटर जति पर सारेर कोरिने सहायक रेखालाई 'निगे-जुमी' भनिन्छ।"
    },
    {
      cat: "第6章 鉄骨建方工事（P.151〜152）",
      q: "鉄骨建方において、柱や梁をクレーンで建て起こして仮ボルトを締めた後、**「柱の垂直精度を測定・修正する作業」**を現場用語で何と呼びますか。",
      q_id: "Pada erection rangka baja, apa nama pekerjaan memeriksa dan mengoreksi ketegaklurusan vertikal pilar baja menggunakan theodolite/plumb bob?",
      q_ne: "स्टिलको पिलर क्रेनले उठाएर अस्थायी बोल्ट कसेपछि पिलर सिधा ठडिएको छ कि छैन भनी नापेर सोझ्याउने कामलाई के भनिन्छ?",
      options: [
        { ja: "建入れ直し（たていれなおし）", id: "Tateire-naoshi (Koreksi Ketegakan Struktur / Plumbing-up)", ne: "तातेइरे-नाओशी (पिलरको सिधापन सोझ्याउने काम)" },
        { ja: "本締め（ほんじめ）", id: "Hon-jime (Pengencangan Akhir Baut Torsi)", ne: "होन्जिमे (बोल्टलाई अन्तिम कसाइ कस्ने)" },
        { ja: "ガス圧接（ガスあっせつ）", id: "Gas Assetsu (Sambungan Las Tekan Gas)", ne: "ग्यास वेल्डिङ" },
        { ja: "ケレン作業", id: "Keren (Pembersihan Karat Permukaan)", ne: "खिया खुर्कने काम" }
      ],
      answer: 0,
      expJa: "【テキスト P.151〜152参照】建て起こした鉄骨の傾きをトランシットや下げ振りで測定し、ワイヤーロープやレバーブロック等で引っ張って正確な垂直に直す作業を「建入れ直し」と呼びます。",
      expId: "Tateire-naoshi adalah proses menyetel ketegaklurusan pilar baja ke posisi vertikal sempurna sebelum baut dikencangkan mati (hon-jime).",
      expNe: "फलामे पिलर कत्तिको ढल्केको छ नापेर डोरी वा तान्ने मेसिनले तानेर ठ्याक्कै सिधा बनाउने कामलाई 'तातेइरे-नाओशी' भनिन्छ।"
    },
    {
      cat: "第6章 鉄筋工事：かぶり厚さ（P.153〜155）",
      q: "鉄筋コンクリート構造において、**「鉄筋のかぶり厚さ（鉄筋表面からコンクリート外表面までの最短距離）」を正しく確保しなければならない最も重要な理由**はどれですか。",
      q_id: "Mengapa menjaga ketebalan 'Selimut Beton' (Kaburi Atsusa) sesuai standar konstruksi menjadi hal yang sangat mutlak?",
      q_ne: "ढलान गर्दा रडको बाहिरी भागमा निश्चित बाक्लो सिमेन्टको कभर (काचुरी आचुसा) राख्नुपर्ने सबैभन्दा महत्त्वपूर्ण कारण कुन हो?",
      options: [
        { ja: "コンクリートのアルカリ性によって鉄筋のサビ（酸化）を防ぎ、火災時の高熱から鉄筋を守って建物の耐火・耐久性を保つため", id: "Mempertahankan sifat basa beton untuk mencegah karat pada besi, serta melindungi besi dari panas saat kebakaran demi ketahanan struktur", ne: "सिमेन्टको क्षारिय गुणले रडमा खिया लाग्न दिँदैन र आगलागी हुँदा आगोको तातोबाट रडलाई जोगाएर भवनलाई बलियो बनाइराख्छ" },
        { ja: "鉄筋を外から肉眼で見えるようにして、本数を数えやすくするため", id: "Agar besi terlihat dari luar sehingga mudah menghitung jumlah batangnya", ne: "बाहिरबाट रड सजिलै देखियोस् र गन्न सजिलो होस् भन्नका लागि" },
        { ja: "型枠を解体した後に鉄筋を手で引っ張って抜きやすくするため", id: "Supaya besi tulangan mudah dicabut dengan tangan setelah bekisting dibongkar", ne: "फर्मा खोलेपछि रडलाई हातले तानेर निकाल्न सजिलो होस् भन्नका लागि" },
        { ja: "コンクリートを流し込む量をできるだけ減らしてコストを削るため", id: "Untuk mengurangi volume semen cor demi menghemat anggaran", ne: "सिमेन्टको मसला थोरै हालेर खर्च बचाउनका लागि" }
      ],
      answer: 0,
      expJa: "【テキスト P.153〜155参照】コンクリートのかぶり厚さが不足すると、中性化によって鉄筋が早期にサビて膨張・破断し、火災時にも鉄筋が熱で軟化して建物崩壊の危機を招きます。",
      expId: "Selimut beton melindungi besi dari korosi/karat dan api kebakaran. Jika selimut terlalu tipis, besi cepat rapuh dan gedung rawan runtuh.",
      expNe: "सिमेन्टको कभर पुगेन भने रडमा तुरुन्तै खिया लाग्छ र आगलागी हुँदा रड पग्लिएर घर भत्कने ठूलो खतरा हुन्छ।"
    },
    {
      cat: "第6章 型枠工事：側圧と変形防止（P.158）",
      q: "コンクリート打設時に、生コンクリートの圧力（側圧）によって**型枠が外側に押し広げられてパンク（破壊・変形）するのを防ぐための施工管理**として正しいものはどれですか。",
      q_id: "Tindakan kontrol kerja manakah yang BENAR untuk mencegah bekisting jebol/rusak akibat tekanan samping (sokuatsu) adonan beton segar saat pengecoran?",
      q_ne: "ढलान गर्दा गिलो कंक्रीटको चर्को चापले फर्मा (काटावाकु) फुट्ने वा बाङ्गो हुने समस्या रोक्न गर्नुपर्ने सही व्यवस्थापन कुन हो?",
      options: [
        { ja: "セパレーター、フォームタイ、パイプサポートを規定の間隔で締め付け、打設速度（1時間に打ち上げる高さ）を早すぎないよう管理する", id: "Memasang separator, form-tie, dan pipe support sesuai jarak standar, serta mengontrol kecepatan cor agar tidak melebihi batas tinggi per jam", ne: "सेपारेटर, फर्म-टाई, र टेकोहरू नियम अनुसार निश्चित दूरीमा कस्ने, र १ घण्टामा कति उचाइसम्म ढलान गर्ने भन्ने गति नियन्त्रण गर्ने" },
        { ja: "1箇所に一気に最上階までコンクリートを集中して流し込む", id: "Mengecor langsung dari dasar hingga lantai atas secara kilat di satu titik", ne: "एउटै ठाउँमा एकैचोटि हतार-हतार धेरै मसला खन्याउने" },
        { ja: "作業員の手間を減らすため、フォームタイの締め付けナットを手で軽く回すだけにしておく", id: "Hanya memutar mur pengencang form-tie longgar dengan tangan agar hemat tenaga", ne: "हातले मात्र सजिलोसँग घुमाएर नटलाई खुकुलो छोड्ने" },
        { ja: "型枠の変形を防ぐために、型枠の中に水を満杯に入れてから生コンを流す", id: "Mengisi penuh bekisting dengan air sebelum adonan beton dituangkan", ne: "फर्माभित्र पहिले पूरै पानी भरेर अनि मात्र कंक्रीट हाल्ने" }
      ],
      answer: 0,
      expJa: "【テキスト P.158参照】型枠は側圧で膨らもうとします。緊結金具（セパ・フォームタイ）を適正ピッチで施工し、打設スピードが速すぎて許容側圧を超えないよう速度管理を行います。",
      expId: "Cegah jebolnya cetakan beton dengan mengencangkan baut form-tie secara presisi dan mengontrol kecepatan cor (tidak boleh terlalu cepat).",
      expNe: "गिलो मसलाको भारले फर्मा नफुटोस् भनेर नट-बोल्ट राम्ररी कस्नुपर्छ र ढलान गर्दा धेरै चाँडो-चाँडो खन्याउनु हुँदैन।"
    },
    {
      cat: "第6章 コンクリート工事：コールドジョイント防止（P.159）",
      q: "コンクリートの打ち継ぎ部分で、**先に打ち込んだ層と後から打ち込んだ層が一体化せず、境目にひび割れや強度低下が生じる欠陥（コールドジョイント）を防ぐ方法**として正しいものはどれですか。",
      q_id: "Bagaimana cara BENAR mencegah terjadinya 'Cold Joint' (cacat sambungan cor akibat lapisan bawah terlanjur mengeras sebelum lapisan atas dituang)?",
      q_ne: "पहिले हालेको कंक्रीट जम्न लागेपछि ढिलो गरी माथिल्लो तह हाल्दा दुई तह नजोडिएर चिरा पर्ने गल्ती (कोल्ड जोइन्ट) रोक्ने सही उपाय कुन हो?",
      options: [
        { ja: "下層のコンクリートが固まり始める前に上層を打ち重ね、棒状バイブレータの先端を下層に10cm程度差し込んで一体化させる", id: "Tuang lapisan atas sebelum lapisan bawah mulai mengeras, lalu tancapkan ujung vibrator sedalam sekitar 10cm ke lapisan bawah agar menyatu sempurna", ne: "तल्लो तह जम्नु अगावै माथिल्लो तह खन्याउने, र भाइब्रेटरको टुप्पोलाई तल्लो तहभित्र करिब १० सेन्टिमिटरसम्म छिराएर दुवैलाई राम्ररी मिसाउने" },
        { ja: "下層が完全にカチカチに硬化するまで3日間待ってから上層を流し込む", id: "Menunggu 3 hari sampai lapisan bawah mengeras total baru menuang atasnya", ne: "तल्लो तह पूरै ढुङ्गा जस्तै सुक्न ३ दिन पर्खेर अनि मात्र माथिल्लो तह हाल्ने" },
        { ja: "バイブレータを使うとコンクリートが分離するので一切振動を与えない", id: "Dilarang menggunakan vibrator sama sekali agar beton tidak terpisah", ne: "भाइब्रेटर चलाउनै नदिई त्यसै छोड्ने" },
        { ja: "打ち継ぎ面に大量の水をまいて泥水状態にしておく", id: "Menyiram banyak air sampai becek berlumpur pada sambungan cor", ne: "जोड्ने ठाउँमा धेरै पानी हालेर लेदो बनाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.159参照】打ち重ね時間の間隔を守り、上層打設時にバイブレータを下層コンクリートに約10cm挿入してしっかりと締め固めることで、コールドジョイントを防止します。",
      expId: "Cegah cold joint dengan menuang lapisan berikutnya tepat waktu dan menusukkan vibrator menembus lapisan bawah sedalam 10cm.",
      expNe: "कोल्ड जोइन्ट हुन नदिन समयमै अर्को तह हाल्ने र भाइब्रेटरलाई अघिल्लो तहभित्र १० सेन्टिमिटर छिराएर दुवै तह एक बनाउनुपर्छ।"
    },
    {
      cat: "第6章 屋根工事・建築板金工事（P.165〜167）",
      q: "住宅の屋根工事や建築板金工事において、**雨漏り（漏水）を二重に防ぐために野地板の上に敷く重要な防水シート**は何ですか。",
      q_id: "Lembaran tahan air apakah yang WAJIB dipasang di atas papan triplek atap (nojita) sebagai lapisan pertahanan kedua dari kebocoran air hujan?",
      q_ne: "छानाबाट पानी चुहिन नदिन काठको पाता (नोजीता) माथि सबैभन्दा पहिले ओछ्याइने वाटरप्रुफिङ कागजलाई के भनिन्छ?",
      options: [
        { ja: "アスファルトルーフィング（防水紙）", id: "Asphalt Roofing (Kertas Pelapis Tahan Air Aspal)", ne: "अस्फाल्ट रुफिङ (छानामा ओछ्याउने वाटरप्रुफिङ कागज)" },
        { ja: "石膏ボード", id: "Gypsum Board", ne: "जिप्सम बोर्ड" },
        { ja: "新聞紙", id: "Koran Bekas", ne: "पुरानो पत्रिका" },
        { ja: "防音シート", id: "Peredam Suara", ne: "आवाज रोक्ने सिट" }
      ],
      answer: 0,
      expJa: "【テキスト P.165〜167参照】瓦や金属屋根材の下には、二次防水（下葺き材）として「アスファルトルーフィング」を軒先から棟に向かって重ね代をとって敷き込み、雨水の浸入を防ぎます。",
      expId: "Asphalt roofing dipasang di atas papan atap sebagai lapisan kedap air sekunder mutlak sebelum genteng/seng dipasang.",
      expNe: "टायल वा जस्तापाताको मुनि पानी चुहिनबाट पूर्ण जोगाउन 'अस्फाल्ट रुफिङ' कागज बिछ्याउनै पर्छ।"
    },
    {
      cat: "第6章 タイル張り工事（P.168）",
      q: "外壁タイル張り工事において、タイルが将来剥落して通行人に衝突する重大事故を防ぐための**施工管理・自主検査**として適切なものはどれですか。",
      q_id: "Pemeriksaan apakah yang WAJIB dilakukan pada pasangan keramik dinding luar untuk mencegah keramik lepas menimpa orang?",
      q_ne: "भित्तामा टाँसेको टायल पछि उप्किएर मान्छेलाई किच्ने दुर्घटना रोक्न गरिने अनिवार्य जाँच कुन हो?",
      options: [
        { ja: "打診棒でタイルの表面を転がして音の反響を聴き、モルタルの「浮き」がないか全数確認する", id: "Menggulirkan tongkat pendeteksi suara (Dashin-bou) pada keramik untuk mendeteksi rongga kosong (keramik kopong)", ne: "जाँच गर्ने डन्डी (दाशिन-बोउ) ले टायलमा बिस्तारै ठोकेर आवाज सुन्ने र मुनि हावा छिरेर खुकुलो (उकिएको) छ कि छैन पत्ता लगाउने" },
        { ja: "遠くから見た目の色が綺麗であれば、触らずに合格とする", id: "Cukup melihat warnanya dari jauh tanpa menyentuhnya", ne: "टाढाबाट रङ राम्रो देखिएपछि नछोइकनै पास गरिदिने" },
        { ja: "タイルの裏に接着用モルタルを塗らずに両面テープだけで貼る", id: "Menempel keramik luar hanya memakai double-tape tanpa semen", ne: "मसला नहाली दुईतर्फी टेपले मात्र टायल टाँस्ने" },
        { ja: "浮いている箇所が見つかっても、上からペンキを塗って隠す", id: "Mengecat keramik yang kopong agar tidak kelihatan rusak", ne: "उक्किएको भेटिए पनि माथिबाट पेन्ट लगाएर लुकाइदिने" }
      ],
      answer: 0,
      expJa: "【テキスト P.168参照】外壁タイルの剥離・落下は人命に関わります。打診棒による打診検査を行い、反響音の違いからモルタルと下地の「浮き」を早期発見・手直しします。",
      expId: "Uji ketuk dengan Dashin-bou mendeteksi perbedaan suara gema untuk menemukan keramik kopong demi mencegah bahaya jatuh.",
      expNe: "टायल झरेमा ज्यान जान सक्छ। त्यसैले डन्डीले आवाज सुनेर खुकुलो टायल तुरुन्त पत्ता लगाई फेरि टाँस्नुपर्छ।"
    },
    {
      cat: "第6章 内装仕上げ工事（P.169）",
      q: "軽量鉄骨（LGS）による間仕切り壁下地の施工において、**垂直に立てる壁用の柱部材**は何ですか。",
      q_id: "Pada pemasangan partisi rangka baja ringan (LGS), apa nama batang profil baja vertikal yang dipasang tegak sebagai tiang dinding?",
      q_ne: "हल्का फलामे फ्रेम (LGS) बाट कोठाको पार्टिसन भित्ता बनाउँदा सिधा ९० डिग्रीमा ठड्याइने खम्बालाई के भनिन्छ?",
      options: [
        { ja: "スタッド（間仕切り用柱）", id: "Stud (Batang Rangka Vertikal)", ne: "स्टड (भित्ताको ठाडो फ्रेम/खम्बा)" },
        { ja: "ランナー", id: "Runner (Rel Rangka Horisontal Lantai/Plafon)", ne: "रनर (भुइँ र छतको तेर्सो रेल)" },
        { ja: "野縁（のぶち）", id: "Nobuchi (Rangka Penggantung Plafon)", ne: "नोबुची (छतको फलेक)" },
        { ja: "吊りボルト", id: "Baut Gantung Plafon", ne: "झुन्ड्याउने बोल्ट" }
      ],
      answer: 0,
      expJa: "【テキスト P.169参照】床と天井に取り付けた「ランナー」の溝の間に、垂直に差し込んで立てる間仕切り壁用の下地柱を「スタッド」と呼びます。",
      expId: "Stud adalah tiang vertikal yang diselipkan ke dalam rel runner atas dan bawah untuk membentuk rangka dinding partisi.",
      expNe: "भुइँ र छतको रनर रेलभित्र ठाडो गरी छिराइने भित्ताको मुख्य फ्रेमलाई 'स्टड' भनिन्छ।"
    },
    {
      cat: "第6章 解体工事の安全（P.177）",
      q: "建物の解体工事において、**周辺への危険防止および環境保護のために職長が徹底しなければならない措置**として誤っているものはどれですか。",
      q_id: "Manakah tindakan yang SALAH dalam pengelolaan K3 dan lingkungan saat melakukan pekerjaan pembongkaran gedung (Kaitai Kouji)?",
      q_ne: "पुरानो भवन भत्काउने (काइताई) काम गर्दा वरपरको सुरक्षा र वातावरण जोगाउन शोकुचोले गर्न नहुने 'गलत' काम कुन हो?",
      options: [
        { ja: "粉じんが近隣に飛び散っても構わないので、散水（水まき）を一切行わずに乾燥した状態で重機で粉砕する", id: "Menghancurkan beton dalam kondisi kering tanpa menyemprot air sama sekali sehingga debu pekat mencemari warga", ne: "धुलो जति उडे पनि मतलब छैन भन्दै पानी पटक्कै नछर्की सुक्खा अवस्थामा मेसिनले भवन फुटाउने" },
        { ja: "周囲に防音パネルや養生シートを隙間なく張り巡らせ、騒音や粉じんの飛散を防ぐ", id: "Memasang panel kedap suara dan jaring penutup rapat di sekeliling area kerja", ne: "वरपर आवाज र धुलो नजाओस् भनेर सुरक्षा जाली र साउन्डप्रुफ पाताले पूरै घेर्ने" },
        { ja: "解体材の落下や重機の転倒事故を防ぐため、立ち入り禁止区域を設定して監視員を配置する", id: "Memasang barikade dilarang melintas dan menugaskan petugas pengawas di sekitar alat berat", ne: "सामान खस्ने वा मेसिन पल्टिने जोखिम रोक्न मानिस पस्न नदिने घेरा लगाउने र गार्ड खटाउने" },
        { ja: "アスベスト（石綿）などの有害物質が含まれる建材がある場合は、法令に従い事前に適正な除去・隔離措置をとる", id: "Jika ada asbes berbahaya, lakukan isolasi dan pembuangan khusus sesuai hukum K3 sebelum gedung dirobohkan", ne: "एस्बेस्टस जस्ता विषालु वस्तु भए कानुन अनुसार पहिले नै छुट्टै सुरक्षित तरिकाले हटाउने" }
      ],
      answer: 0,
      expJa: "【テキスト P.177参照】解体工事では大量の粉じんが発生するため、十分な散水を行って粉じんの飛散を抑えることが義務付けられています。無散水での粉砕作業は重大な環境・法令違反です。",
      expId: "Pembongkaran beton wajib terus disiram air agar debu tidak terbang ke lingkungan warga. Membiarkan kering adalah pelanggaran berat.",
      expNe: "भत्काउँदा धुलो उड्न नदिन लगातार पानी छर्किनै पर्छ। पानी नहाली सुक्खा भत्काउनु गैरकानुनी काम हो।"
    }
  ]
};
