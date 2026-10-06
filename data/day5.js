const CURRENT_QUIZ_DATA = {
  title: "Day 5：<ruby>建築板金<rt>けんちくばんきん</rt></ruby>の<ruby>材料<rt>ざいりょう</rt></ruby>・<ruby>性質<rt>せいしつ</rt></ruby>・<ruby>屋根外壁基礎<rt>やねがいへききそ</rt></ruby>",
  key: "score_gakka1_5",
  passScore: 70,
  questions: [
    {
      cat: "第5章 板金材料",
      q: "<ruby>建築板金<rt>けんちくばんきん</rt></ruby>で<ruby>広<rt>ひろ</rt></ruby>く<ruby>使<rt>つか</rt></ruby>われる「ガルバリウム<ruby>鋼板<rt>こうはん</rt></ruby>」のメッキ<ruby>成分<rt>せいぶん</rt></ruby>として、**<ruby>最<rt>もっと</rt></ruby>も<ruby>多<rt>おお</rt></ruby>い<ruby>割合<rt>わりあい</rt></ruby>（<ruby>約<rt>やく</rt></ruby>55%）を<ruby>占<rt>し</rt></ruby>める<ruby>金属<rt>きんぞく</rt></ruby>**はどれですか。",
      q_id: "Logam apa yang memiliki proporsi terbesar (sekitar 55%) dalam lapisan pelapis 'baja galvalum' yang banyak digunakan dalam lembaran logam arsitektur?",
      q_ne: "वास्तुकला पाता (आर्किटेक्चरल शिट मेटल) मा व्यापक रूपमा प्रयोग हुने 'गाल्भाल्युम स्टील' को कोटिंगमा सबैभन्दा बढी (लगभग ५५%) हुने धातु कुन हो?",
      options: [
        { ja: "アルミニウム", id: "Aluminium", ne: "एल्युमिनियम" },
        { ja: "亜鉛（あえん）", id: "Seng (Zinc)", ne: "जस्ता (जिङ्क)" },
        { ja: "銅（どう）", id: "Tembaga", ne: "तामा" },
        { ja: "鉛（なまり）", id: "Timbal", ne: "सिसा (लिड)" }
      ],
      answer: 0,
      expJa: "ガルバリウム鋼板のメッキ組成は、アルミニウム55%、亜鉛43.4%、シリコン1.6%です。耐食性と加工性に大変優れています。",
      expId: "Komposisi pelapis galvalum adalah 55% aluminium, 43,4% seng, dan 1,6% silikon, memberikan ketahanan korosi yang sangat baik.",
      expNe: "गाल्भाल्युमको कोटिंगमा ५५% एल्युमिनियम, ४३.४% जस्ता र १.६% सिलिकन हुन्छ, जसले खिया लाग्नबाट जोगाउँछ।"
    },
    {
      cat: "第5章 金属の性質",
      q: "<ruby>異<rt>こと</rt></ruby>なる<ruby>種類<rt>しゅるい</rt></ruby>の<ruby>金属<rt>きんぞく</rt></ruby>（<ruby>例<rt>たと</rt></ruby>えば<ruby>銅<rt>どう</rt></ruby>と<ruby>鉄<rt>てつ</rt></ruby>）を<ruby>水<rt>みず</rt></ruby>のある<ruby>場所<rt>ばしょ</rt></ruby>で<ruby>接触<rt>せっしょく</rt></ruby>させると、<ruby>一方<rt>いっぽう</rt></ruby>の<ruby>金属<rt>きんぞく</rt></ruby>の<ruby>腐食<rt>ふしょく</rt></ruby>が<ruby>急速<rt>きゅうそく</rt></ruby>に<ruby>進<rt>すす</rt></ruby>む<ruby>現象<rt>げんしょう</rt></ruby>を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk fenomena di mana korosi pada salah satu logam terjadi sangat cepat saat dua logam berbeda bersentuhan di lingkungan basah?",
      q_ne: "पानी भएको ठाउँमा दुई फरक धातुहरू (जस्तै तामा र फलाम) आपसमा जोडिँदा एउटा धातु छिटो खियािएर नष्ट हुने प्रक्रियालाई के भनिन्छ?",
      options: [
        { ja: "電食（でんしょく／異種金属接触腐食）", id: "Korosi galvanik (Denshoku)", ne: "ग्याल्भानिक खिया (डेन्शोकु)" },
        { ja: "熱膨張（ねつぼうちょう）", id: "Pemuaian termal", ne: "तापीय विस्तार" },
        { ja: "加工硬化（かこうこうか）", id: "Pengerasan kerja (Work hardening)", ne: "कार्य कठोरता" },
        { ja: "経年劣化（けいねんれっか）", id: "Penuaan alami", ne: "समय अनुसारको क्षय" }
      ],
      answer: 0,
      expJa: "異なる金属が接触して水分が付着すると電池の回路が形成され、イオン化傾向の高い金属が急速に錆びます（電食）。銅樋の吊り金具に鉄釘を直接使ってはならない理由です。",
      expId: "Korosi galvanik (電食) terjadi bila dua logam berbeda bersentuhan dengan air. Jangan pasang paku besi langsung pada talang tembaga.",
      expNe: "फरक धातुहरू पानीको सम्पर्कमा जोडिँदा विद्युतीय प्रतिक्रिया भएर खिया लाग्छ। तामाको पाइपमा फलामको काँटी सिधै ठोक्नु हुँदैन।"
    },
    {
      cat: "第5章 屋根の部位",
      q: "<ruby>切妻屋根<rt>きりづまやね</rt></ruby>などで、<ruby>屋根<rt>やね</rt></ruby>の<ruby>一番高<rt>いちばんたか</rt></ruby>い<ruby>頂上部分<rt>ちょうじょうぶぶん</rt></ruby>にある<ruby>水平<rt>すいへい</rt></ruby>な<ruby>稜線<rt>りょうせん</rt></ruby>を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk garis punggung horizontal paling atas pada atap pelana (kirizuma)?",
      q_ne: "छानाको सबैभन्दा माथिल्लो तेर्सो धुरी (शिखर) भागलाई के भनिन्छ?",
      options: [
        { ja: "棟（むね）", id: "Bubungan (Mune)", ne: "धुरी (मुने)" },
        { ja: "軒先（のきさき）", id: "Ujung atap / Titisan (Nokisaki)", ne: "छानाको छेउ (नोकिसाकी)" },
        { ja: "ケラバ", id: "Tepi atap samping / Gable (Keraba)", ne: "छेउको किनारा (केराबा)" },
        { ja: "谷（たに）", id: "Lembah atap (Tani)", ne: "छानाको खोँच (तानी)" }
      ],
      answer: 0,
      expJa: "屋根の最頂部を「棟（むね）」と呼びます。雨仕舞いにおいて最も重要な役物（棟包み・笠木板金など）を取り付ける場所です。",
      expId: "Bagian puncak horizontal tertinggi disebut 'Mune' (bubungan). Penutup bubungan sangat penting untuk mencegah bocor.",
      expNe: "छानाको सबैभन्दा माथिल्लो भागलाई 'मुने' (धुरी) भनिन्छ। पानी चुहिन नदिन यहाँ विशेष पाताहरू जोडिन्छ।"
    },
    {
      cat: "第5章 屋根の部位",
      q: "<ruby>雨水<rt>あまみず</rt></ruby>を<ruby>受<rt>う</rt></ruby>けて<ruby>集<rt>あつ</rt></ruby>めるため、<ruby>屋根<rt>やね</rt></ruby>の<ruby>面<rt>めん</rt></ruby>と<ruby>面<rt>めん</rt></ruby>がV<ruby>字型<rt>じがた</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わさる<ruby>窪<rt>くぼ</rt></ruby>んだ<ruby>部分<rt>ぶぶん</rt></ruby>を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk bagian lembah berbentuk V tempat bertemunya dua bidang atap yang mengalirkan banyak air hujan?",
      q_ne: "दुई छानाहरू V आकारमा जोडिएर धेरै वर्षाको पानी बग्ने खोँच परेको भागलाई के भनिन्छ?",
      options: [
        { ja: "谷（たに／谷樋）", id: "Lembah atap / Talang lembah (Tani)", ne: "खोँच / तानी (Tani)" },
        { ja: "隅棟（すみむね）", id: "Bubungan miring (Sumimune)", ne: "कुनाको धुरी (सुमिमुने)" },
        { ja: "水切り（みずきり）", id: "Flashing penahan air (Mizukiri)", ne: "पानी छेक्ने पाता (मिजुकिरी)" },
        { ja: "鼻隠し（はなかくし）", id: "Fascia board (Hanakakushi)", ne: "फासिया बोर्ड (हानाकाकुशी)" }
      ],
      answer: 0,
      expJa: "「谷（たに）」は大量の雨水が集中して流れるため、雨漏りリスクが最も高い重要部位です。谷樋板金は重ね代を広く取り、防水紙を二重にするなどの確実な施工が必要です。",
      expId: "'Tani' adalah lembah pertemuan atap. Tempat ini menampung banyak air sehingga paling rawan bocor jika tidak dipasang benar.",
      expNe: "'तानी' छानाको खोँच भाग हो जहाँ धेरै पानी जम्मा भएर बग्छ। पानी चुहिने जोखिम बढी हुने भएकोले यहाँ बलियोसँग पाता लगाउनुपर्छ।"
    },
    {
      cat: "第5章 下地・防水",
      q: "<ruby>金属屋根<rt>きんぞくやね</rt></ruby>を<ruby>葺<rt>ふ</rt></ruby>く<ruby>前<rt>まえ</rt></ruby>に、<ruby>野地板<rt>のじいた</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>敷<rt>し</rt></ruby>く「<ruby>防水<rt>ぼうすい</rt></ruby>シート（ルーフィング）」の<ruby>敷<rt>し</rt></ruby>き<ruby>方<rt>かた</rt></ruby>として<ruby>正<rt>ただ</rt></ruby>しいものはどれですか。",
      q_id: "Manakah cara yang BENAR dalam memasang lembaran kedap air (roofing sheet) di atas papan atap sebelum memasang atap logam?",
      q_ne: "धातुको छाना लगाउनुअघि काठको फल्याक (नोजिता) माथि वाटरप्रुफ शिट (रुफिङ) बिछ्याउने सही तरिका कुन हो?",
      options: [
        { ja: "軒先（下側）から棟（上側）に向かって、下側の上に上側を重ねて敷く", id: "Dari bawah (nokisaki) ke atas (mune), menumpuk lembaran atas di atas lembaran bawah", ne: "तल्लो भाग (नोकिसाकी) बाट माथि (धुरी) तर्फ, तल्लो शिटमाथि माथिल्लो शिट खप्ट्याएर बिछ्याउने" },
        { ja: "棟（上側）から軒先（下側）に向かって敷いていく", id: "Dari atas ke bawah", ne: "माथिल्लो भागबाट तल्लो भाग तर्फ बिछ्याउँदै जाने" },
        { ja: "重ね幅は隙間なくぴったり合わせれば、重ね代は不要である", id: "Tidak perlu tumpang tindih jika posisinya pas", ne: "खप्ट्याउने भाग नराखी छेउमा छेउ मात्र जोडे पुग्छ" },
        { ja: "雨水が浸透しないよう、テープだけで貼り付けて釘打ちは一切しない", id: "Hanya ditempel selotip tanpa dipaku sama sekali", ne: "काँटी नठोकी टेपले मात्र टाँस्ने" }
      ],
      answer: 0,
      expJa: "水は上から下に流れるため、ルーフィングは必ず「下（軒先）から上（棟）」へ向かって張り進め、上のシートを下側のシートの上に重ねます（重ね代100mm以上）。逆張りは雨漏りの原因になります。",
      expId: "Roofing harus dipasang dari bawah ke atas agar air mengalir di atas sambungan. Tumpang tindih minimal 100mm.",
      expNe: "पानी माथिबाट तल बग्ने भएकाले रुफिङ सधैं तलबाट माथितर्फ खप्ट्याएर (कम्तीमा १०० मिमि) बिछ्याउनुपर्छ।"
    },
    {
      cat: "第5章 熱膨張",
      q: "<ruby>金属<rt>きんぞく</rt></ruby>は<ruby>温度<rt>おんど</rt></ruby>が<ruby>上<rt>あ</rt></ruby>がると<ruby>伸<rt>の</rt></ruby>び、<ruby>冷<rt>つめ</rt></ruby>たくなると<ruby>縮<rt>ちぢ</rt></ruby>む<ruby>性質<rt>せいしつ</rt></ruby>（<ruby>熱膨張<rt>ねつぼうちょう</rt></ruby>）があります。<ruby>長尺<rt>ちょうじゃく</rt></ruby>の<ruby>金属屋根<rt>きんぞくやね</rt></ruby>を<ruby>施工<rt>せこう</rt></ruby>する<ruby>際<rt>さい</rt></ruby>に**この<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>逃<rt>に</rt></ruby>がすための<ruby>工夫<rt>くふう</rt></ruby>**として<ruby>適切<rt>てきせつ</rt></ruby>なものはどれですか。",
      q_id: "Logam memuai saat panas dan menyusut saat dingin. Apa tindakan yang tepat untuk mengatasi pemuaian ini pada atap logam panjang?",
      q_ne: "तातो हुँदा धातु फैलिने र चिसो हुँदा खुम्चिने गर्दछ। लामो धातुको छाना लगाउँदा यो समस्या समाधान गर्न के गरिन्छ?",
      options: [
        { ja: "吊子（つりこ）を用いて固定し、伸縮できる遊び（クリアランス）を設ける", id: "Menggunakan tsuriko (cleat) dan memberi celah ekspansi", ne: "चुरिको (क्लिप) प्रयोग गरी फैलिन र खुम्चिन सक्ने ठाउँ (क्लियरेन्स) राख्ने" },
        { ja: "絶対に動かないよう、鉄板の中央にもビスを大量に打ち込んで固める", id: "Menyekrup bagian tengah rapat-rapat agar tidak bergerak sama sekali", ne: "हल्लिन नदिन पाताको बीचमा पनि धेरै पेच (स्क्रु) कसेर कस्ने" },
        { ja: "隙間ができないよう、すべての継ぎ手をボンドで隙間なく固着する", id: "Merekatkan semua sambungan dengan lem tanpa celah", ne: "सबै जोडाइहरूलाई गम लगाएर कडा बनाउने" },
        { ja: "熱膨張は微小なので現場では何も考慮しなくてよい", id: "Tidak perlu dipikirkan karena perubahannya sangat kecil", ne: "धेरै फरक नपर्ने भएकाले केही ध्यान दिनु पर्दैन" }
      ],
      answer: 0,
      expJa: "金属屋根（立平葺きなど）は太陽熱で数ミリ〜十数ミリ伸縮します。板金同士を緊結しすぎず、「吊子（つりこ）」を使ってスライドできるように逃げを作ることが波打ちや破断を防ぐ基本です。",
      expId: "Atap logam memuai oleh panas. Penggunaan tsuriko memungkinkan logam bergerak bebas tanpa melengkung atau robek.",
      expNe: "घामको तातोले पाता फैलिन्छ। पाता खुम्चिन र बाङ्गिन नदिन 'चुरिको' प्रयोग गरी सामान्य हल्लिने ठाउँ राखिन्छ।"
    },
    {
      cat: "第5章 雨樋",
      q: "<ruby>雨樋<rt>あまどい</rt></ruby>（軒樋）の<ruby>勾配<rt>こうばい</rt></ruby>（<ruby>傾<rt>かたむ</rt></ruby>き）について、**<ruby>適切<rt>てきせつ</rt></ruby>な<ruby>説明<rt>せつめい</rt></ruby>**はどれですか。",
      q_id: "Manakah pernyataan yang TEPAT mengenai kemiringan talang atap (nokidoi)?",
      q_ne: "छानाको पानी बग्ने पाइप/नाला (अमादोई) को भिरालोपन (स्लोप) बारे कुन भनाइ सही छ?",
      options: [
        { ja: "集水器（落とし口）に向かって適切な水下がり勾配をつける", id: "Membuat kemiringan menurun ke arah corong pembuangan air", ne: "पानी खस्ने पाइप (कलेक्टर) तर्फ पानी बग्ने गरी भिरालो बनाउने" },
        { ja: "見た目を綺麗にするため、完全に水平（水勾配ゼロ）にする", id: "Dibuat datar sempurna agar terlihat rapi", ne: "राम्रो देखाउन पूर्ण रूपमा तेर्सो (स्लोप नराखी) बनाउने" },
        { ja: "集水器から一番遠い場所を一番低くする", id: "Membuat titik terendah paling jauh dari corong pembuangan", ne: "पानी खस्ने ठाउँभन्दा टाढाको भागलाई सबैभन्दा होचो बनाउने" },
        { ja: "勾配は雨風で自然につくので調整して取り付ける必要はない", id: "Kemiringan tidak perlu diatur karena akan miring sendiri", ne: "स्लोप मिलाउनु पर्दैन, पानीको भारले आफैं मिल्छ" }
      ],
      answer: 0,
      expJa: "軒樋に勾配がないと雨水や泥が滞留し、樋の変形やオーバーフローの原因になります。集水器（落とし口）に向けて1/100〜1/200程度の水勾配を確保します。",
      expId: "Talang harus memiliki kemiringan ke arah corong pembuangan (1/100-1/200) agar air tidak tergenang dan meluap.",
      expNe: "पानी जमेर फोहोर थुप्रिन नदिन पानी खस्ने प्वालतर्फ १/१०० देखि १/२०० सम्मको भिरालो बनाउनुपर्छ।"
    },
    {
      cat: "第5章 板金加工",
      q: "<ruby>薄鉄板<rt>うすてっぱん</rt></ruby>の<ruby>端部<rt>たんぶ</rt></ruby>を<ruby>折<rt>お</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>して<ruby>強度<rt>きょうど</rt></ruby>を<ruby>高<rt>たか</rt></ruby>めたり、<ruby>手<rt>て</rt></ruby>を切らないように<ruby>丸<rt>まる</rt></ruby>める<ruby>加工<rt>かこう</rt></ruby>を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk proses melipat atau menggulung tepi lembaran logam agar lebih kuat dan tidak melukai tangan?",
      q_ne: "पातलो पाताको किनारालाई दोबारेर बलियो बनाउने र हात नकाटिने बनाउने कार्यलाई के भनिन्छ?",
      options: [
        { ja: "へミング加工（つぶし折り／紐出し）", id: "Hemming (melipat pinggiran)", ne: "हेमिङ (किनारा दोबार्ने काम)" },
        { ja: "シャーリング切断", id: "Pemotongan shearing", ne: "शियरिङ कटिङ" },
        { ja: "アーク溶接", id: "Las busur (Arc welding)", ne: "आर्क वेल्डिङ" },
        { ja: "リベット打ち", id: "Pemasangan keling (Rivet)", ne: "रिभेट ठोक्ने" }
      ],
      answer: 0,
      expJa: "板金の端を180度折り返す加工を「へミング（つぶし）」と呼びます。剛性を高め、切り口のバリでケガをするのを防ぎます。",
      expId: "Hemming adalah proses melipat tepi logam 180 derajat untuk menambah kekuatan dan mencegah luka.",
      expNe: "पाताको किनारालाई १८० डिग्री दोबार्ने कामलाई 'हेमिङ' भनिन्छ। यसले पातालाई दह्रो बनाउँछ र चोट लाग्न दिँदैन।"
    },
    {
      cat: "第5章 安全・玉掛け",
      q: "<ruby>現場<rt>げんば</rt></ruby>でクレーンを<ruby>使<rt>つか</rt></ruby>って<ruby>長尺<rt>ちょうじゃく</rt></ruby>の<ruby>屋根材<rt>やねざい</rt></ruby>を<ruby>揚重<rt>ようじゅう</rt></ruby>（<ruby>吊<rt>つ</rt></ruby>り<ruby>上<rt>あ</rt></ruby>げ）する<ruby>際<rt>さい</rt></ruby>の<ruby>安全行動<rt>あんぜんこうどう</rt></ruby>として、**<ruby>誤<rt>あやま</rt></ruby>っているもの**はどれですか。",
      q_id: "Manakah tindakan yang SALAH saat mengangkat lembaran atap panjang menggunakan crane di tempat kerja?",
      q_ne: "क्रेनको सहायताले लामो पाताहरू माथि उठाउँदा कुन कार्य गलत हो?",
      options: [
        { ja: "荷が揺れるのを抑えるため、吊り荷の下に潜り込んで手で直接支えた", id: "Berdiri tepat di bawah beban untuk memeganginya langsung", ne: "झुण्ड्याइएको सामान हल्लिन नदिन मुनि पसेर हातले सिधै समात्ने" },
        { ja: "荷の振れ止めのため、介錯ロープ（かいしゃくロープ）を取り付けて誘導した", id: "Memasang tali pemandu (tali kendali) untuk menstabilkan muatan", ne: "सामान हल्लिन नदिन डोरी (गाइड डोरी) बाँधेर टाढैबाट नियन्त्रण गर्ने" },
        { ja: "屋根材が折れ曲がらないよう、2点吊りまたは天秤棒（スプレッダー）を使用した", id: "Menggunakan pengangkat dua titik atau balok spreader", ne: "पाता नबाङ्गोस् भनेर दुई ठाउँमा बाँधेर वा ब्यालेन्स बार प्रयोग गरेर उठाउने" },
        { ja: "玉掛けワイヤーの素線切れや傷を事前に点検した", id: "Memeriksa kabel sling dari kerusakan sebelum digunakan", ne: "सामान बाँध्ने तार च्यातिएको वा बिग्रिएको छ कि भनेर पहिले नै जाँच गर्ने" }
      ],
      answer: 0,
      expJa: "【吊り荷の直下には絶対に立ち入ってはならない】がクレーン作業の最重要原則です。荷の制御は必ず離れた位置から「介錯ロープ」を使って行います。",
      expId: "JANGAN PERNAH berdiri di bawah beban yang tergantung! Gunakan tali pemandu dari jarak aman.",
      expNe: "झुण्ड्याइएको सामानको मुनि कहिल्यै पनि जानु हुँदैन! सुरक्षित दूरीबाट गाइड डोरी प्रयोग गर्नुपर्छ।"
    },
    {
      cat: "第5章 建築法規・防火",
      q: "<ruby>防火地域<rt>ぼうかちいき</rt></ruby>や<ruby>準防火地域<rt>じゅんぼうかちいき</rt></ruby>の<ruby>建築物<rt>けんちくぶつ</rt></ruby>において、<ruby>屋根<rt>やね</rt></ruby>に<ruby>求<rt>もと</rt></ruby>められる<ruby>性能<rt>せいのう</rt></ruby>として**<ruby>建築基準法<rt>けんちくきじゅんほう</rt></ruby>で<ruby>定<rt>さだ</rt></ruby>められているもの**はどれですか。",
      q_id: "Kinerja apa yang diwajibkan oleh Standar Bangunan Jepang untuk atap di kawasan pencegahan kebakaran?",
      q_ne: "जापानको भवन निर्माण ऐन अनुसार आगलागी नियन्त्रण क्षेत्रमा छानाको लागि कस्तो गुण अनिवार्य गरिएको छ?",
      options: [
        { ja: "不燃材料または飛び火防止性能（防火構造）", id: "Bahan tidak mudah terbakar atau tahan percikan api", ne: "आगो नलाग्ने सामग्री वा आगोको झिल्का छेक्ने क्षमता" },
        { ja: "完全な防音性能（音を100%通さないこと）", id: "Insulasi suara 100% kedap", ne: "पूर्ण ध्वनिरोधक क्षमता" },
        { ja: "透明で太陽光を全反射する性能", id: "Transparan dan memantulkan sinar matahari penuh", ne: "पारदर्शी र घाम पूर्ण परावर्तन गर्ने क्षमता" },
        { ja: "重量が1平方メートルあたり100kg以上あること", id: "Berat lebih dari 100kg per meter persegi", ne: "तौल प्रति वर्ग मिटर १०० केजी भन्दा बढी हुनुपर्ने" }
      ],
      answer: 0,
      expJa: "市街地での火災延焼を防ぐため、建築基準法第22条区域等では屋根に不燃材料（ガルバリウム鋼板等）や飛び火による発火を防ぐ性能が義務付けられています。",
      expId: "Di area perkotaan, atap harus menggunakan bahan tidak mudah terbakar (seperti galvalum) untuk mencegah penyebaran api.",
      expNe: "सहरमा आगलागी फैलिन नदिन छानामा नबल्ने धातुका पाता (गाल्भाल्युम आदि) प्रयोग गर्नुपर्ने कानुनी नियम छ।"
    }
  ]
};
