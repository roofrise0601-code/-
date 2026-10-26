const CURRENT_QUIZ_DATA = {
  title: "実技④：【実技ファイナル本番模擬試験】<ruby>全範囲<rt>ぜんはんい</rt></ruby> <ruby>総合判断テスト<rt>そうごうはんだんてすと</rt></ruby>（10問）",
  key: "score_jitsugi_4",
  passScore: 70,
  questions: [
    {
      cat: "実技総仕上げ：足場安全（P.103）",
      q: "足場の作業床において、作業員が誤って工具やボルトを蹴飛ばして階下に落とす事故を防ぐため、**作業床の外側に必ず設置しなければならない部材**は何ですか。",
      q_id: "Komponen apakah yang wajib dipasang di tepi luar lantai kerja perancah untuk mencegah perkakas/baut tertendang jatuh ke bawah?",
      q_ne: "खटमा काम गर्दा औजार वा नट-बोल्ट खुट्टाले ठोकिएर तल खस्न नदिन भुइँको किनारमा अनिवार्य लगाइने तख्ता कुन हो?",
      options: [
        { ja: "幅木（はばき）", id: "Habaki (Toeboard / Pelindung Tepi Bawah)", ne: "हाबाकी (किनारको तख्ता / टो-बोर्ड)" },
        { ja: "壁つなぎ", id: "Kabe-tsunagi (Angkur Pengikat Dinding)", ne: "काबे-चुनागी (भित्ताको रड)" },
        { ja: "固定ベース", id: "Kotei Base (Pelat Dasar Tiang)", ne: "कोतेइ बेस (जगको प्लेट)" },
        { ja: "パイプサポート", id: "Pipe Support (Tiang Penyangga)", ne: "पाइप सपोर्ट (टेको)" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.103参照】幅木（はばき）は、足場板の外側に取り付けて工具やボルト・資材の落下を防止するための部材です[cite: 8]。",
      expId: "Habaki adalah papan pelindung tepi bawah lantai perancah untuk mencegah benda dan perkakas jatuh menimpa orang di bawah.",
      expNe: "'हाबाकी' ले खटको किनारबाट औजार वा सामान तल खस्नबाट रोक्छ।"
    },
    {
      cat: "実技総仕上げ：鉄筋工事（P.107）",
      q: "柱や梁・壁などの側面において、**「鉄筋と型枠のすき間（かぶり厚さ）」を一定に保つために鉄筋にはめ込むドーナツ状の部材**は何ですか。",
      q_id: "Komponen berbentuk donat apakah yang dipasang pada besi tulangan kolom/dinding untuk menjaga jarak selimut beton dari bekisting?",
      q_ne: "पिलर वा भित्ताको रडलाई फर्मामा टाँसिन नदिई निश्चित दूरी (कभर) कायम राख्न रडमा छिराइने गोलो स्पेसर कुन हो?",
      options: [
        { ja: "ドーナツ（プラスチックスペーサー）", id: "Donut (Spacer Plastik Bulat)", ne: "डोनट (गोलो प्लास्टिक स्पेसर)" },
        { ja: "キャラメル", id: "Caramel (Blok Mortar Dadu)", ne: "क्यारामेल (सिमेन्टको ब्लक)" },
        { ja: "ハッカー", id: "Hacker (Alat Pemutar Kawat)", ne: "ह्याकर (तार कस्ने औजार)" },
        { ja: "アンカーボルト", id: "Anchor Bolt", ne: "एङ्कर बोल्ट" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.107参照】柱、梁、壁筋のかぶり厚さを確保するために鉄筋にはめるドーナツ状のスペーサーを「ドーナツ」と呼びます[cite: 12]。",
      expId: "Donut adalah spacer bulat untuk memastikan ketebalan selimut beton pada kolom dan dinding.",
      expNe: "'डोनट' भन्नाले पिलर र भित्तामा कंक्रीट कभर बनाउन रडमा अड्काइने गोलो स्पेसर हो।"
    },
    {
      cat: "実技総仕上げ：電動工具安全（P.129）",
      q: "木材や合板を切断する「携帯用丸のこ」を使用する際、**作業者の意図しない方向へ刃が激しく跳ね上がる重大事故（キックバック）を防ぐための基本動作**はどれですか。",
      q_id: "Tindakan apakah yang WAJIB dilakukan untuk mencegah bahaya fatal loncatan balik (Kickback) saat menggunakan gergaji bundar listrik?",
      q_ne: "विद्युतीय गोलो आरा चलाउँदा ब्लेड अचानक उछिट्टिएर आउने 'किकब्याक' दुर्घटना रोक्न अनिवार्य गरिने जाँच कुन हो?",
      options: [
        { ja: "使用前に安全カバーがスムーズに開閉（自重で戻るか）することを確認し、無理な体勢で押し込まない", id: "Pastikan cover pengaman bekerja lancar menutup otomatis sebelum dipakai, dan jangan memotong dengan posisi janggal/memaksa", ne: "चलाउनुअघि सुरक्षा कभर आफैं राम्ररी खुल्ने-बन्द हुने गर्छ कि गर्दैन जाँच्ने, र जबर्जस्ती बल नगर्ने" },
        { ja: "作業効率を最優先するため、安全カバーをテープや針金で開いたまま固定して使う", id: "Mengikat buka cover pengaman dengan kawat agar memotong lebih cepat", ne: "छिटो काम गर्न कभरलाई तारले बाँधेर खुल्लै राख्ने" },
        { ja: "刃が木材に引っかかって止まりそうになったら、力任せに前へ強く押し込む", id: "Mendorong sekuat tenaga saat mata pisau tersangkut pada kayu", ne: "ब्लेड काठमा अड्किन लाग्दा झन् बल गरेर घचेट्ने" },
        { ja: "両手を離して片手だけでブラブラ持ちながら切断する", id: "Memotong hanya dengan satu tangan secara longgar", ne: "एउटा मात्र हातले हल्लाई हल्लाई काट्ने" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.129参照】丸のこのキックバックは命に関わる重大事故につながります[cite: 34]。使用前には安全カバーの確実な動作確認が必須です[cite: 34]。",
      expId: "Kickback sangat mematikan. Selalu periksa fungsi safety cover otomatis sebelum gergaji dihidupkan.",
      expNe: "किकब्याकबाट बच्न सुरक्षा कभर राम्ररी चल्छ कि नाई अनिवार्य जाँच्नुपर्छ।"
    },
    {
      cat: "実技総仕上げ：施工計画（P.146）",
      q: "施工計画を立案する際、効率的な施工手段を整理するために用いられる**「施工手段の5M」に含まれないもの**はどれですか。",
      q_id: "Manakah elemen yang BUKAN merupakan bagian dari '5M Sarana Pelaksanaan Proyek' (Sekou Shudan no 5M)?",
      q_ne: "निर्माण योजनाका '५M का साधनहरू' भित्र 'नपर्ने' कुरा कुन हो?",
      options: [
        { ja: "食事（Meal）", id: "Makanan (Meal)", ne: "खाना (Meal)" },
        { ja: "人・労力（Men）", id: "Tenaga Kerja (Men)", ne: "मानिस (Men)" },
        { ja: "材料（Materials）", id: "Material (Materials)", ne: "सामग्री (Materials)" },
        { ja: "機械（Machinery）", id: "Mesin / Alat (Machinery)", ne: "मेसिन (Machinery)" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.146参照】施工手段の5Mは「人（Men）、材料（Materials）、方法（Methods）、機械（Machinery）、資金（Money）」であり、食事（Meal）は含まれません。",
      expId: "5M adalah Men, Materials, Methods, Machinery, dan Money. 'Meal' bukan bagian dari 5M.",
      expNe: "५M मा Men, Materials, Methods, Machinery, र Money पर्दछन्। Meal (खाना) पर्दैन।"
    },
    {
      cat: "実技総仕上げ：鉄骨工事（P.152）",
      q: "鉄骨建て方において、柱と梁を組み立てた後に**「建入れ直し（たていれなおし）」を行う理由**として正しいものはどれですか。",
      q_id: "Mengapa pekerjaan 'Tateire-naoshi' (Penyetelan Ketegakan Struktur) wajib dilakukan setelah perakitan kolom dan balok baja?",
      q_ne: "स्टिलको पिलर र बिम जोडेपछि 'तातेइरे-नाओशी (फ्रेम सोझ्याउने)' काम किन गर्नुपर्छ?",
      options: [
        { ja: "梁を架け渡すことで柱が引っ張られて垂直精度が狂うため、ワイヤー等で引いて正確な垂直を直してから本締め・溶接するため", id: "Karena pemasangan balok menarik tiang hingga miring, maka harus disetel vertikal sempurna dengan sling sebelum baut dikencangkan mati dan dilas", ne: "बिम जोड्दा पिलर तानिएर ढल्किने हुनाले, तारले तानेर सिधा पारेपछि मात्र नट-बोल्ट पूर्ण कस्न र वेल्डिङ गर्नका लागि" },
        { ja: "鉄骨の表面についたサビをハンマーで叩き落とすため", id: "Untuk merontokkan karat baja dengan palu", ne: "स्टिलको खिया झार्नका लागि" },
        { ja: "現場事務所の冷房の効きを良くするため", id: "Agar AC kantor proyek bekerja lebih dingin", ne: "अफिसको एसी राम्रो चलोस् भन्नका लागि" },
        { ja: "柱の高さを低く削り落とすため", id: "Untuk memotong pendek tiang baja", ne: "पिलरको उचाइ घटाउनका लागि" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.152参照】梁を入れると柱が引っ張られて垂直が保てなくなるため、ワイヤー等で建て入れ調整を行ってからナットの本締めや溶接を行います。",
      expId: "Tateire-naoshi mengoreksi tiang yang condong akibat beban balok agar kembali tegak lurus sempurna.",
      expNe: "बिमको तौलले पिलर ढल्किने भएकाले तारले तानेर सिधा बनाएपछि मात्र नट-बोल्ट कसिन्छ।"
    },
    {
      cat: "実技総仕上げ：コンクリート圧送（P.160）",
      q: "コンクリートポンプ車で打設を始める直前、輸送管の内側を滑りやすくするために最初に流す**「先送り材（富調合モルタル等）」の適正な処置**はどれですか。",
      q_id: "Bagaimanakah penanganan yang BENAR terhadap 'Saki-okuri-zai' (adonan pelicin pipa pompa cor)?",
      q_ne: "पम्प गाडीको पाइप चिप्लो बनाउन सुरुमा हालिने 'साकी-ओकुरी-जाई (सुरुवाती मसला)' लाई के गर्नुपर्छ?",
      options: [
        { ja: "型枠の中に打ち込むとコンクリートの強度や品質が低下するため、型枠内に入れずに廃棄する", id: "Wajib dibuang keluar dan DILARANG dimasukkan ke dalam bekisting karena merusak mutu beton", ne: "फर्माभित्र हालेमा ढलान कमजोर हुने भएकाले फर्माभित्र नहाली बाहिर फाल्ने" },
        { ja: "もったいないので柱の型枠の底に全量流し込む", id: "Dituangkan ke dasar bekisting kolom agar hemat", ne: "खेर नजाओस् भनेर पिलरको फेदमा खन्याउने" },
        { ja: "外壁タイルの接着剤として再利用する", id: "Dipakai ulang sebagai lem keramik luar", ne: "टायल टाँस्ने गमको रूपमा चलाउने" },
        { ja: "水で10倍に薄めて現場に散水する", id: "Diencerkan air 10 kali untuk menyiram debu", ne: "पानी मिसाएर धुलो मार्न छर्कने" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.160参照】先送り材は配合が異なり強度低下を招くため、型枠に打ち込まず必ず廃棄します。",
      expId: "Saki-okuri-zai tidak boleh masuk ke struktur karena komposisinya merusak kekuatan beton.",
      expNe: "सुरुको चिप्लो बनाउने मसलाले ढलान कमजोर बनाउने हुनाले यसलाई फर्माभित्र नहाली फाल्नै पर्छ।"
    },
    {
      cat: "実技総仕上げ：屋根・外装（P.166〜167）",
      q: "屋根工事や建築板金工事において、建物を雨漏りから守るために**「水切り板金や勾配を工夫して雨水をスムーズに雨どいへ受け流す構造」**を何と呼びますか。",
      q_id: "Apa sebutan untuk rekayasa konstruksi atap/seng yang mengarahkan air hujan mengalir lancar menuju talang agar tidak bocor?",
      q_ne: "छानाबाट पानी चुहिन नदिन जस्ताको पाता र भिरालो भाग मिलाएर वर्षाको पानीलाई सहजै पाइपतिर बगाइदिने संरचनालाई के भनिन्छ?",
      options: [
        { ja: "雨仕舞（あまじまい）", id: "Amajizumai (Sistem Pengaliran Air Hujan)", ne: "अमाजिमाई (पानी निकास प्रणाली)" },
        { ja: "水盛り（みずもり）", id: "Mizumori (Pengukuran Waterpass)", ne: "मिजुमोरी (लेभल नाप्ने काम)" },
        { ja: "墨出し（すみだし）", id: "Sumidashi (Garis Acuan)", ne: "सुमिदाशी (धर्को कोर्ने काम)" },
        { ja: "根がらみ（ねがらみ）", id: "Negarami (Pengikat Kaki Tiang)", ne: "नेगारामी (फेद बाँध्ने पाइप)" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.166〜167参照】雨水を雨どいに誘導して地面に受け流す構造を「雨仕舞（あまじまい）」と呼びます。",
      expId: "Amajizumai adalah sistem pengaliran air hujan menggunakan plat seng talang (mizukiri) agar bangunan tidak bocor.",
      expNe: "'अमाजिमाई' भन्नाले पानीलाई सहज रूपमा बगाएर बाहिर फाल्ने वाटरप्रुफिङ प्रविधि हो।"
    },
    {
      cat: "実技総仕上げ：死亡災害防止（P.181〜182）",
      q: "日本の建設現場において、**死亡事故の中で最も発生割合が高く（約4割）、最優先で対策すべき事故の型**はどれですか。",
      q_id: "Jenis kecelakaan kerja apakah yang menempati persentase kematian tertinggi (sekitar 40%) di proyek konstruksi Jepang?",
      q_ne: "जापानको निर्माण कार्यस्थलमा हुने मृत्यु दुर्घटनाहरू मध्ये सबैभन्दा धेरै (करिब ४०%) हिस्सा ओगट्ने दुर्घटना कुन हो?",
      options: [
        { ja: "墜落・転落（ついらく・てんらく）", id: "Jatuh dari Ketinggian (Tsuiraku / Tenraku)", ne: "अग्लो ठाउँबाट खस्नु वा लड्नु (चुइराकु / तेनराकु)" },
        { ja: "感電（かんでん）", id: "Tersengat Listrik", ne: "करेन्ट लाग्नु" },
        { ja: "熱中症（ねっちゅうしょう）", id: "Sengatan Panas (Heatstroke)", ne: "हिटस्ट्रोक हुनु" },
        { ja: "飛来・落下（ひらい・らっか）", id: "Tertimpa Benda Jatuh", ne: "माथिबाट सामान खसेर लाग्नु" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.181〜182参照】建設業の死亡事故の約4割を「墜落・転落」が占めており、手すり先行足場やフルハーネスの適切な使用が最重要です。",
      expId: "Jatuh dari ketinggian adalah penyebab kematian nomor satu (sekitar 40%) di proyek konstruksi Jepang.",
      expNe: "निर्माण क्षेत्रमा करिब ४०% मृत्यु अग्लो ठाउँबाट खसेर हुने भएकाले यसको रोकथाम पहिलो प्राथमिकता हो।"
    },
    {
      cat: "実技総仕上げ：高所安全用具（P.189）",
      q: "高さ2m以上の高所作業で使用する「フルハーネス型墜落制止用器具」について、**万一の落下時に命を守る正しい使用方法**はどれですか。",
      q_id: "Bagaimanakah cara pemakaian yang BENAR dari Full Body Harness pada ketinggian 2 meter ke atas?",
      q_ne: "२ मिटरभन्दा अग्लो ठाउँमा प्रयोग गरिने 'फुल बडी सेफ्टी हार्नेस' लगाउने सही तरिका कुन हो?",
      options: [
        { ja: "腿・胸・肩のベルトを体に隙間なくフィットさせ、ショックアブソーバ付きランヤードのフックを腰より高い位置の頑丈な親綱等に掛ける", id: "Kencangkan pas sabuk paha, dada, dan bahu, lalu cantolkan hook lanyard bershock-absorber ke tali induk/titik jangkar yang kokoh di atas pinggang", ne: "तिघ्रा, छाती र काँधका फित्ताहरू शरीरमा टपक्क बाँध्ने, र डोरीको हुकलाई कम्मरभन्दा माथिको बलियो डोरी वा पाइपमा अड्काउने" },
        { ja: "動きにくいので腿ベルトを外して肩だけにぶら下げておく", id: "Melepas sabuk paha agar leluasa bergerak dan hanya menggantungkannya di bahu", ne: "हिँड्न सजिलो होस् भनेर तिघ्राको फित्ता फुकालेर काँधमा मात्र झुन्ड्याउने" },
        { ja: "フックを掛ける場所がないときは、自分の長靴にフックを挟んで作業する", id: "Menjepitkan hook ke sepatu boot sendiri jika tidak ada cantolan", ne: "अड्काउने ठाउँ नहुँदा आफ्नै जुत्तामा हुक अड्काउने" },
        { ja: "ヘルメットのあご紐を外して作業する", id: "Bekerja dengan melepas tali dagu helm", ne: "हेल्मेटको चिउँडोको तुना फुकालेर काम गर्ने" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.189参照】フルハーネスは正しく密着装着し、ランヤードのフックは腰より高い頑丈な構造物・親綱に掛けます。",
      expId: "Full harness harus dikencangkan pas di tubuh dan hook wajib dikaitkan di atas posisi pinggang.",
      expNe: "हार्नेस शरीरमा कसिलो गरी बाँध्ने र हुक सधैं कम्मरभन्दा माथिको बलियो ठाउँमा अड्काउनुपर्छ।"
    },
    {
      cat: "実技総仕上げ：ヒューマンエラー防止（P.192〜194）",
      q: "作業の要所要所で誤判断や不安全行動を防ぐ「指差し呼称（しさこしょう）」の**動作と呼称の組み合わせ**として正しいものはどれですか。",
      q_id: "Manakah urutan praktik yang BENAR dari metode 'Pointing and Calling' (Shisashi Koshou) untuk mencegah kelalaian kerja?",
      q_ne: "मानिसबाट हुने गल्ती रोक्न गरिने 'औंल्याएर आवाज निकाल्ने (शिसा-कोशौ)' विधिको सही तरिका कुन हो?",
      options: [
        { ja: "対象を目で確認し、右手人差し指でしっかりと指差しながら、大きな声で「〇〇ヨシ！」と発声して耳で聴く", id: "Mata fokus melihat target, tunjuk tegas dengan telunjuk kanan, ucapkan lantang '...YOSHI!', dan dengarkan dengan telinga sendiri", ne: "आँखाले वस्तुलाई हेर्ने, दाहिने हातको चोर औंलाले सिधा देखाउने, ठूलो स्वरले '...ठिक छ (योशी)!' भन्ने र आफ्नै कानले सुन्ने" },
        { ja: "声を出さずに心の中でだけ唱える", id: "Hanya bergumam pelan di dalam hati tanpa bersuara", ne: "आवाज ननिकाली मनमनै भन्ने" },
        { ja: "後ろを向いたまま適当に指をさす", id: "Menunjuk asal ke belakang tanpa melihat", ne: "पछाडितिर फर्केर जे पायो त्यही देखाउने" },
        { ja: "指差した瞬間に目を閉じる", id: "Memejamkan mata saat menunjuk", ne: "औंलाले देखाउने बित्तिकै आँखा चिम्लने" }
      ],
      answer: 0,
      expJa: "【実技テキスト P.192〜194参照】指差し呼称は「見る・指差す・発声する・聴く」の五感を総動員して意識レベルを高め、誤認・エラーを大幅に防ぎます。",
      expId: "Tunjuk-sebut mengaktifkan mata, jari, suara, dan pendengaran secara simultan agar pikiran selalu fokus dan siaga.",
      expNe: "हेर्ने, देखाउने, बोल्ने र सुन्ने चारै क्रिया एकसाथ गर्दा दिमाग सतर्क भई गल्ती हुन पाउँदैन।"
    }
  ]
};
