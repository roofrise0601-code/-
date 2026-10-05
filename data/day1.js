const CURRENT_QUIZ_DATA = {
  key: "score_gakka1",
  passScore: 70,
  title: "📗 Day 1：施工体制・職長の役割・安全管理（公式試験準拠）",
  questions: [
    {
      q: "<ruby>日本<rt>にほん</rt></ruby>の<ruby>建設工事<rt>けんせつこうじ</rt></ruby>の<ruby>施工体制<rt>せこうたいせい</rt></ruby>における「<ruby>専門工事業者<rt>せんもんこうじぎょうしゃ</rt></ruby>」についての<ruby>説明<rt>せつめい</rt></ruby>として、**<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なもの**はどれですか。",
      cat: "第1章 施工体制",
      options: [
        "各工事の専門家であり、職長の指示のもとで作業員が作業を行う。",
        "建設業者に工事を発注し、工事費用を支払う。",
        "注文者の希望を聞いて、建物の設計図面を作成する。",
        "大規模な工事現場全体の統括と監理を行う。"
      ],
      answer: 0,
      hintId: "Kontraktor khusus adalah ahli dalam pekerjaannya dan bekerja di bawah arahan mandor.",
      hintNe: "विशेष ठेकेदारहरू आफ्नै विधाका दक्ष हुन् जसले टोली प्रमुखको निर्देशनमा काम गर्छन्।",
      expJa: "専門工事業者（サブコン・協力会社）は、鉄骨、板金、左官などの専門工事を行う専門家です。職長の指示のもとで作業員が施工します。",
      expId: "Kontraktor khusus adalah ahli dalam bidang masing-masing yang bekerja sesuai instruksi mandor.",
      expNe: "विशेष ठेकेदारहरू आफ्नो क्षेत्रका दक्ष कामदार हुन् जसले टोली प्रमुखको नेतृत्वमा काम गर्छन्।"
    },
    {
      q: "<ruby>建設現場<rt>けんせつげんば</rt></ruby>における「<ruby>職長<rt>しょくちょう</rt></ruby>」の<ruby>役割<rt>やくわり</rt></ruby>として、**<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なもの**はどれですか。",
      cat: "第1章 職長の役割",
      options: [
        "作業員に適切な指示を出し、それぞれの目標を達成できるよう支援・指導する。",
        "作業員の毎月の賃金（給料）を計算して口座に振り込む。",
        "中規模以上の現場において、元請の現場責任者として全体を統括する。",
        "施主（注文者）と打ち合わせを重ねて、建物の設計図面を引く。"
      ],
      answer: 0,
      hintId: "Mandor bertugas memberikan instruksi yang tepat kepada para pekerja secara langsung.",
      hintNe: "टोली प्रमुखले कामदारहरूलाई काम सिकाउने र निर्देशन दिने काम गर्दछ।",
      expJa: "職長は直接作業員を指導・指揮監督し、現場の安全と工程を管理するリーダーです。",
      expId: "Mandor bertanggung jawab mengarahkan para pekerja langsung dan menjaga keselamatan.",
      expNe: "फोरम्यानले कामदारहरूलाई प्रत्यक्ष काम सिकाउने र काम अगाडि बढाउने नेतृत्व गर्दछ।"
    },
    {
      q: "<ruby>職場<rt>しょくば</rt></ruby>の<ruby>労働者<rt>ろうどうしゃ</rt></ruby>の<ruby>安全<rt>あんぜん</rt></ruby>と<ruby>健康<rt>けんこう</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>し、<ruby>快適<rt>かいてき</rt></ruby>な<ruby>職場環境<rt>しょくばかんきょう</rt></ruby>を<ruby>作<rt>つく</rt></ruby>るための<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>みとして、**<ruby>適切<rt>てきせつ</rt></ruby>でないもの**はどれですか。",
      cat: "第1章 安全衛生",
      options: [
        "パワーハラスメント（立場を利用した嫌がらせ・暴言）",
        "リスクアセスメント（危険性の事前特定と対策）",
        "KY活動（危険予知活動による安全先取り）",
        "ストレスチェック（労働者の心の健康管理）"
      ],
      answer: 0,
      hintId: "Pilih tindakan yang merugikan dan melanggar aturan kerja (Penyalahgunaan kekuasaan).",
      hintNe: "कार्यस्थलमा गर्न नहुने नराम्रो व्यवहार (Power harassment) छान्नुहोस्।",
      expJa: "パワーハラスメントは職場環境を著しく悪化させる不適切な行為です。",
      expId: "Penyalahgunaan kekuasaan merusak lingkungan kerja dan dilarang keras.",
      expNe: "पदको दुरुपयोग गरेर दुर्व्यवहार गर्नु कार्यस्थलको वातावरण बिगार्ने गैरकानुनी काम हो।"
    },
    {
      q: "<ruby>現場<rt>げんば</rt></ruby>で「リスクアセスメント」を<ruby>実施<rt>じっし</rt></ruby>することの**<ruby>効果<rt>こうか</rt></ruby>として<ruby>適切<rt>てきせつ</rt></ruby>でないもの**はどれですか。",
      cat: "第1章 安全管理",
      options: [
        "作業員が安全について考える必要がなくなり、自分の作業だけに集中できる。",
        "現場全体で危険に対する共通の認識を共有することができる。",
        "安全対策の優先順位を合理的に決めることができる。",
        "職場のすべての人の安全に対する感受性を高めることができる。"
      ],
      answer: 0,
      hintId: "Penilaian risiko dilakukan agar SEMUA pekerja peduli keselamatan, bukan mengabaikannya.",
      hintNe: "जोखिम मूल्याङ्कनले सबैलाई सुरक्षाप्रति सचेत गराउँछ।",
      expJa: "リスクアセスメントは全員で安全意識を高めるための活動です。「安全を考えなくてよくなる」というのは誤りです。",
      expId: "Penilaian risiko justru meningkatkan kesadaran keselamatan setiap orang di tempat kerja.",
      expNe: "जोखिम मूल्याङ्कनले सबैलाई सुरक्षाप्रति सचेत गराउँछ।"
    }
  ]
};
