const CURRENT_QUIZ_DATA = {
  key: "score_gakka1",
  passScore: 70,
  title: "📗 Day 1：施工体制・職長の役割・安全管理（公式試験準拠）",
  questions: [
    {
      q: "<ruby>日本<rt>にほん</rt></ruby>の<ruby>建設工事<rt>けんせつこうじ</rt></ruby>の<ruby>施工体制<rt>せこうたいせい</rt></ruby>における「<ruby>専門工事業者<rt>せんもんこうじぎょうしゃ</rt></ruby>」についての<ruby>説明<rt>せつめい</rt></ruby>として、**<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なもの**はどれですか。",
      q_id: "Manakah yang menggambarkan kontraktor khusus dalam sistem pelaksanaan pekerjaan konstruksi di Jepang?",
      q_ne: "जापानको निर्माण कार्य प्रणालीमा 'विशेष ठेकेदार (専門工事業者)' को बारेमा कुन भनाइ सबैभन्दा उपयुक्त छ?",
      cat: "第1章 施工体制",
      options: [
        {
          ja: "<ruby>各工事<rt>かくこうじ</rt></ruby>の<ruby>専門家<rt>せんもんか</rt></ruby>であり、<ruby>職長<rt>しょくちょう</rt></ruby>の<ruby>指示<rt>しじ</rt></ruby>のもとで<ruby>複数<rt>ふくすう</rt></ruby>の<ruby>作業員<rt>さぎょういん</rt></ruby>が<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。",
          id: "Merupakan ahli dalam setiap pekerjaan, dan beberapa operator bekerja sesuai instruksi mandor.",
          ne: "प्रत्येक कामका विज्ञ हुन्, र धेरै कामदारहरूले टोली प्रमुखको निर्देशनमा काम गर्छन्।"
        },
        {
          ja: "<ruby>建設業者<rt>けんせつぎょうしゃ</rt></ruby>に<ruby>工事<rt>こうじ</rt></ruby>を<ruby>発注<rt>はっちゅう</rt></ruby>し、<ruby>工事費用<rt>こうじひよう</rt></ruby>を<ruby>支払<rt>しはら</rt></ruby>う。",
          id: "Memesan pekerjaan konstruksi kepada vendor konstruksi.",
          ne: "निर्माण कम्पनीलाई कामको जिम्मा दिने र निर्माण खर्च भुक्तानी गर्ने।"
        },
        {
          ja: "<ruby>注文者<rt>ちゅうもんしゃ</rt></ruby>の<ruby>希望<rt>きぼう</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いて、<ruby>建物<rt>たてもの</rt></ruby>の<ruby>設計図面<rt>せっけいずめん</rt></ruby>を<ruby>作成<rt>さくせい</rt></ruby>する。",
          id: "Membuat buku desain untuk mewujudkan permintaan pemesan.",
          ne: "अर्डर गर्ने व्यक्तिको माग अनुसारको डिजाइन नक्सा बनाउने।"
        },
        {
          ja: "<ruby>大規模<rt>だいきぼ</rt></ruby>な<ruby>工事現場<rt>こうじげんば</rt></ruby><ruby>全体<rt>ぜんたい</rt></ruby>の<ruby>統括<rt>とうかつ</rt></ruby>と<ruby>監理<rt>かんり</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う。",
          id: "Mengawasi dan mengarahkan keseluruhan lokasi konstruksi skala besar.",
          ne: "ठूलो निर्माण साइटको समग्र व्यवस्थापन र सुपरिवेक्षण गर्ने।"
        }
      ],
      answer: 0,
      expJa: "専門工事業者（サブコン・協力会社）は各工事の専門家であり、職長の指揮のもとで作業員が実施工を行います。",
      expId: "Kontraktor khusus adalah ahli dalam bidang masing-masing yang bekerja sesuai instruksi mandor.",
      expNe: "विशेष ठेकेदारहरू आफ्नो क्षेत्रका दक्ष कामदार हुन् जसले टोली प्रमुखको नेतृत्वमा काम गर्छन्।"
    },
    {
      q: "<ruby>建設現場<rt>けんせつげんば</rt></ruby>における「<ruby>職長<rt>しょくちょう</rt></ruby>」の<ruby>役割<rt>やくわり</rt></ruby>として、**<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なもの**はどれですか。",
      q_id: "Manakah dari berikut ini yang merupakan peran mandor yang tepat?",
      q_ne: "निर्माण साइटमा 'फोरम्यान (職長)' को सही भूमिका कुन हो?",
      cat: "第1章 職長の役割",
      options: [
        {
          ja: "<ruby>作業員<rt>さぎょういん</rt></ruby>に<ruby>適切<rt>てきせつ</rt></ruby>な<ruby>指示<rt>しじ</rt></ruby>を<ruby>出<rt>だ</rt></ruby>し、それぞれの<ruby>目標<rt>もくひょう</rt></ruby>を<ruby>達成<rt>たっせい</rt></ruby>できるよう<ruby>支援<rt>しえん</rt></ruby>・<ruby>指導<rt>しどう</rt></ruby>する。",
          id: "Memberikan instruksi yang tepat kepada pekerja dan membantu mereka mencapai tujuan mereka.",
          ne: "कामदारहरूलाई उचित निर्देशन दिनु र आफ्नो लक्ष्य पूरा गर्न सहयोग गर्नु।"
        },
        {
          ja: "<ruby>作業員<rt>さぎょういん</rt></ruby>の<ruby>毎月<rt>まいつき</rt></ruby>の<ruby>賃金<rt>ちんぎん</rt></ruby>（<ruby>給料<rt>きゅうりょう</rt></ruby>）を<ruby>計算<rt>けいさん</rt></ruby>して<ruby>口座<rt>こうざ</rt></ruby>に<ruby>振<rt>ふ</rt></ruby>り<ruby>込<rt>こ</rt></ruby>む。",
          id: "Menghitung upah pekerja.",
          ne: "कामदारहरूको मासिक तलब हिसाब गरेर खातामा पठाउनु।"
        },
        {
          ja: "<ruby>中規模<rt>ちゅうきぼ</rt></ruby><ruby>以上<rt>いじょう</rt></ruby>の<ruby>現場<rt>げんば</rt></ruby>において、<ruby>元請<rt>もとうけ</rt></ruby>の<ruby>現場責任者<rt>げんばせきにんしゃ</rt></ruby>として<ruby>全体<rt>ぜんたい</rt></ruby>を<ruby>統括<rt>とうかつ</rt></ruby>する。",
          id: "Mengawasi lokasi konstruksi sebagai penanggung jawab lokasi konstruksi di lokasi konstruksi berukuran sedang atau lebih.",
          ne: "मध्यम वा ठूला निर्माण साइटमा मुख्य जिम्मेवार व्यक्तिको रूपमा सबै हेरचाह गर्नु।"
        },
        {
          ja: "<ruby>施主<rt>せしゅ</rt></ruby>（<ruby>注文者<rt>ちゅうもんしゃ</rt></ruby>）と<ruby>打<rt>う</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせを<ruby>重<rt>かさ</rt></ruby>ねて、<ruby>建物<rt>たてもの</rt></ruby>の<ruby>設計図面<rt>せっけいずめん</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>く。",
          id: "Membuat gambar desain.",
          ne: "घरधनीसँग सल्लाह गरेर भवनको डिजाइन नक्सा कोर्नु।"
        }
      ],
      answer: 0,
      expJa: "職長は作業員を直接指揮監督し、安全確保と作業品質・効率の向上を担うリーダーです。",
      expId: "Mandor bertanggung jawab mengarahkan para pekerja langsung, menjaga keselamatan, dan membantu tim menyelesaikan pekerjaan.",
      expNe: "फोरम्यानले कामदारहरूलाई प्रत्यक्ष काम सिकाउने र काम अगाडि बढाउने नेतृत्व गर्दछ।"
    },
    {
      q: "<ruby>職場<rt>しょくば</rt></ruby>の<ruby>労働者<rt>ろうどうしゃ</rt></ruby>の<ruby>安全<rt>あんぜん</rt></ruby>と<ruby>健康<rt>けんこう</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>し、<ruby>快適<rt>かいてき</rt></ruby>な<ruby>職場環境<rt>しょくばかんきょう</rt></ruby>を<ruby>作<rt>つく</rt></ruby>るための<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>みとして、**<ruby>適切<rt>てきせつ</rt></ruby>でないもの**はどれですか。",
      q_id: "Manakah yang bukan merupakan kegiatan yang tepat untuk memastikan keselamatan dan kesehatan pekerja di tempat kerja serta menciptakan lingkungan tempat kerja yang nyaman?",
      q_ne: "कार्यस्थलमा कामदारहरूको सुरक्षा र स्वास्थ्य सुनिश्चित गर्न तथा राम्रो वातावरण बनाउन कुन कार्य उपयुक्त होइन?",
      cat: "第1章 安全衛生",
      options: [
        {
          ja: "パワーハラスメント（<ruby>立場<rt>たちば</rt></ruby>を<ruby>利用<rt>りよう</rt></ruby>した<ruby>嫌<rt>いや</rt></ruby>がらせ・<ruby>暴言<rt>ぼうげん</rt></ruby>）",
          id: "Penyalahgunaan kekuasaan (Power harassment).",
          ne: "आफ्नो पदको दुरुपयोग गरी गालीगलौज वा हेपाहा व्यवहार गर्नु (Power harassment)।"
        },
        {
          ja: "リスクアセスメント（<ruby>危険性<rt>きけんせい</rt></ruby>の<ruby>事前特定<rt>じぜんとくてい</rt></ruby>と<ruby>対策<rt>たいさく</rt></ruby>）",
          id: "Penilaian risiko.",
          ne: "जोखिम मूल्याङ्कन (Risk assessment)।"
        },
        {
          ja: "KY<ruby>活動<rt>かつどう</rt></ruby>（<ruby>危険予知活動<rt>きけんよちかつどう</rt></ruby>による<ruby>安全先取<rt>あんぜんさきど</rt></ruby>り）",
          id: "Kegiatan KY (Kiken Yochi).",
          ne: "जोखिम अनुमान गतिविधि (KY activity)।"
        },
        {
          ja: "ストレスチェック（<ruby>労働者<rt>ろうどうしゃ</rt></ruby>の<ruby>心<rt>こころ</rt></ruby>の<ruby>健康管理<rt>けんこうかんり</rt></ruby>）",
          id: "Pemeriksaan stres.",
          ne: "मानसिक तनाव जाँच (Stress check)।"
        }
      ],
      answer: 0,
      expJa: "パワーハラスメントは職場環境を著しく悪化させる行為であり、法律で防止措置が義務付けられています。",
      expId: "Penyalahgunaan kekuasaan merusak lingkungan kerja dan dilarang keras.",
      expNe: "पदको दुरुपयोग गरेर दुर्व्यवहार गर्नु कार्यस्थलको वातावरण बिगार्ने गैरकानुनी काम हो।"
    },
    {
      q: "<ruby>現場<rt>げんば</rt></ruby>で「リスクアセスメント」を<ruby>実施<rt>じっし</rt></ruby>することの**<ruby>効果<rt>こうか</rt></ruby>として<ruby>適切<rt>てきせつ</rt></ruby>でないもの**はどれですか。",
      q_id: "Manakah jawaban yang tidak tepat mengenai efektivitas pelaksanaan penilaian risiko?",
      q_ne: "जोखिम मूल्याङ्कन (Risk assessment) गर्नुको फाइदाको रूपमा कुन भनाइ गलत छ?",
      cat: "第1章 安全管理",
      options: [
        {
          ja: "<ruby>作業員<rt>さぎょういん</rt></ruby>が<ruby>安全<rt>あんぜん</rt></ruby>について<ruby>考<rt>かんが</rt></ruby>える<ruby>必要<rt>ひつよう</rt></ruby>がなくなり、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>だけに<ruby>集中<rt>しゅうちゅう</rt></ruby>できる。",
          id: "Pekerja dapat berkonsentrasi pada pekerjaannya tanpa perlu memikirkan keselamatan.",
          ne: "कामदारहरूले सुरक्षाको बारेमा सोच्नै पर्दैन र आफ्नो काममा मात्र ध्यान दिन सक्छन्।"
        },
        {
          ja: "<ruby>現場全体<rt>げんばぜんたい</rt></ruby>で<ruby>危険<rt>きけん</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>共通<rt>きょうつう</rt></ruby>の<ruby>認識<rt>にんしき</rt></ruby>を<ruby>共有<rt>きょうゆう</rt></ruby>することができる。",
          id: "Dapat berbagi kesadaran terhadap risiko.",
          ne: "कार्यस्थलका सबैले सम्भावित जोखिमबारे साझा जानकारी पाउन सक्छन्।"
        },
        {
          ja: "<ruby>安全対策<rt>あんぜんたいさく</rt></ruby>の<ruby>優先順位<rt>ゆうせんじゅんい</rt></ruby>を<ruby>合理的<rt>ごうりてき</rt></ruby>に<ruby>決<rt>き</rt></ruby>めることができる。",
          id: "Dapat memprioritaskan langkah-langkah keselamatan secara rasional.",
          ne: "सुरक्षाका उपायहरूलाई प्राथमिकता अनुसार व्यवस्थित गर्न सकिन्छ।"
        },
        {
          ja: "<ruby>職場<rt>しょくば</rt></ruby>のすべての<ruby>人<rt>ひと</rt></ruby>の「<ruby>安全<rt>あんぜん</rt>への<ruby>感受性<rt>かんじゅせい</rt></ruby>」を<ruby>高<rt>たか</rt></ruby>めることができる。",
          id: "Dapat meningkatkan kepekaan terhadap 'keselamatan' pada semua orang di tempat kerja.",
          ne: "कार्यस्थलका सबै व्यक्तिहरूमा सुरक्षा सम्बन्धी चेतना बढाउन सकिन्छ।"
        }
      ],
      answer: 0,
      expJa: "リスクアセスメントは全員の安全意識を高めるための活動です。「安全を考えなくてよくなる」というのは誤りです。",
      expId: "Penilaian risiko justru meningkatkan kesadaran keselamatan setiap orang di tempat kerja.",
      expNe: "जोखिम मूल्याङ्कनले सबैलाई सुरक्षाप्रति सचेत गराउँछ।"
    }
  ]
};
