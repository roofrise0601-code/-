const CURRENT_QUIZ_DATA = {
  key: "score_gakka1_2",
  passScore: 70,
  title: "📗 Day 2：労働安全衛生法・工程管理・現場の安全（公式試験準拠）",
  questions: [
    {
      q: "<ruby>建設現場<rt>けんせつげんば</rt></ruby>において、<ruby>安全管理者<rt>あんぜんかんりしゃ</rt></ruby>や<ruby>衛生管理者<rt>えいせいかんりしゃ</rt></ruby>を<ruby>指揮<rt>しき</rt></ruby>し、<ruby>労働安全衛生<rt>ろうどうあんぜんえいせい</rt></ruby>の<ruby>業務<rt>ぎょうむ</rt></ruby>を<ruby>統括管理<rt>とうかつかんり</rt></ruby>する<ruby>責任者<rt>せきにんしゃ</rt></ruby>はどれですか。",
      q_id: "Apa sebutan bagi seseorang yang mengarahkan pengelola keselamatan dan pengelola kesehatan serta mengelola keselamatan dan kesehatan kerja di lokasi konstruksi?",
      q_ne: "निर्माण स्थलमा सुरक्षा प्रबन्धक र स्वास्थ्य प्रबन्धकलाई निर्देशन दिने तथा सम्पूर्ण सुरक्षा र स्वास्थ्यको रेखदेख गर्ने मुख्य अधिकारी को हुन्?",
      cat: "第2章 労働安全衛生法",
      options: [
        {
          ja: "<ruby>総括安全衛生管理者<rt>そうかつあんぜんえいせいかんりしゃ</rt></ruby>",
          id: "Pengelola keselamatan dan kesehatan umum.",
          ne: "महानिर्देशक सुरक्षा तथा स्वास्थ्य प्रबन्धक (General Safety and Health Manager)।"
        },
        {
          ja: "<ruby>職長<rt>しょくちょう</rt></ruby>",
          id: "Mandor.",
          ne: "फोरम्यान (टोली प्रमुख)।"
        },
        {
          ja: "<ruby>現場監督<rt>げんばかんとく</rt></ruby>（<ruby>監理員<rt>かんりいん</rt></ruby>）",
          id: "Pengawas lapangan.",
          ne: "कार्यस्थल सुपरभाइजर।"
        },
        {
          ja: "<ruby>設計者<rt>せっけいしゃ</rt></ruby>",
          id: "Desainer.",
          ne: "डिजाइनर।"
        }
      ],
      answer: 0,
      expJa: "総括安全衛生管理者は、事業場全体の安全衛生管理のトップとして、安全管理者や衛生管理者を指揮・統括します。",
      expId: "Pengelola keselamatan dan kesehatan umum bertugas memimpin seluruh sistem keselamatan di proyek di atas para pengelola lainnya.",
      expNe: "महानिर्देशक सुरक्षा प्रबन्धकले सम्पूर्ण निर्माण स्थलको सुरक्षा र स्वास्थ्य नियमहरूको मुख्य व्यवस्थापन गर्दछन्।"
    },
    {
      q: "リスク<ruby>低減措置<rt>ていげんそち</rt></ruby>の<ruby>検討<rt>けんとう</rt></ruby>において、「<ruby>本質的<rt>ほんしつてき</rt></ruby>な<ruby>対策<rt>たいさく</rt></ruby>」に<ruby>該当<rt>がいとう</rt></ruby>するものはどれですか。",
      q_id: "Pilih jawaban yang termasuk dalam penanggulangan substansial dalam pertimbangan langkah-langkah pengurangan risiko.",
      q_ne: "जोखिम न्यूनीकरणका उपायहरू विचार गर्दा 'मौलिक (आधारभूत) समाधान' मा कुन पर्दछ?",
      cat: "第2章 リスク対策",
      options: [
        {
          ja: "<ruby>有害<rt>ゆうがい</rt></ruby>な<ruby>材料<rt>ざいりょう</rt></ruby>を、より<ruby>安全<rt>あんぜん</rt></ruby>な<ruby>材料<rt>ざいりょう</rt></ruby>に<ruby>切<rt>き</rt></ruby>り<ruby>替<rt>か</rt></ruby>える（<ruby>代替<rt>だいたい</rt></ruby>する）。",
          id: "Mengganti bahan yang merugikan dengan bahan yang lebih aman.",
          ne: "हानिकारक सामग्रीलाई हटाएर सुरक्षित सामग्री प्रयोग गर्ने।"
        },
        {
          ja: "<ruby>防護手袋<rt>ぼうごてぶくろ</rt></ruby>などの<ruby>保護具<rt>ほごぐ</rt></ruby>を<ruby>着用<rt>ちゃくよう</rt></ruby>させる。",
          id: "Menggunakan sarung tangan pelindung.",
          ne: "सुरक्षा पञ्जा प्रयोग गर्ने।"
        },
        {
          ja: "<ruby>作業手順書<rt>さぎょうてじゅんしょ</rt></ruby>（マニュアル）を<ruby>整備<rt>せいび</rt></ruby>して<ruby>周知<rt>しゅうち</rt></ruby>する。",
          id: "Menyediakan manual kerja.",
          ne: "कामको म्यानुअल (निर्देशिका) तयार पार्ने।"
        },
        {
          ja: "<ruby>危険箇所<rt>きけんかしょ</rt></ruby>に<ruby>防護柵<rt>ぼうごさく</rt></ruby>（フェンス）を<ruby>設置<rt>せっち</rt></ruby>する。",
          id: "Memasang pagar pelindung.",
          ne: "जोखिमयुक्त ठाउँमा सुरक्षा बार (फेन्स) लगाउने।"
        }
      ],
      answer: 0,
      expJa: "本質的対策とは、危険源そのものを無くす・安全なものに置き換えることです。保護具の使用は最後の手段となります。",
      expId: "Penanggulangan substansial adalah menghilangkan sumber bahaya itu sendiri, seperti mengganti bahan berbahaya dengan yang aman.",
      expNe: "मौलिक समाधान भनेको जोखिमको स्रोत नै हटाउनु हो, जस्तै असुरक्षित सामग्रीको सट्टा पूर्ण सुरक्षित सामग्री प्रयोग गर्नु।"
    },
    {
      q: "<ruby>現場<rt>げんば</rt></ruby>の「ヒューマンエラー（<ruby>人間<rt>にんげん</rt></ruby>のミス）」を<ruby>引<rt>ひ</rt></ruby>き<ruby>起<rt>お</rt></ruby>こす<ruby>原因<rt>げんいん</rt></ruby>として、**<ruby>該当<rt>がいとう</rt></ruby>しないもの**はどれですか。",
      q_id: "Pilih satu jawaban yang tidak termasuk dalam jenis penyebab kesalahan manusia (human error).",
      q_ne: "मानवीय त्रुटि (Human Error) निम्त्याउने कारणहरूमा कुन पर्दैन?",
      cat: "第2章 安全衛生管理",
      options: [
        {
          ja: "<ruby>複数<rt>ふくすう</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>によるダブルチェック（相互確認）",
          id: "Pengecekan oleh banyak orang.",
          ne: "धेरै व्यक्तिहरूद्वारा दोहोरो जाँच (Double check) गर्नु।"
        },
        {
          ja: "<ruby>肉体的<rt>にくたいてき</rt></ruby>・<ruby>精神的<rt>せいしんてき</rt></ruby>な<ruby>疲労<rt>ひろう</rt></ruby>",
          id: "Kelelahan.",
          ne: "शारीरिक वा मानसिक थकान।"
        },
        {
          ja: "<ruby>近道<rt>ちかみち</rt></ruby>・<ruby>省略行為<rt>しょうりゃくこうい</rt></ruby>（<ruby>手間<rt>てま</rt></ruby>をはぶくこと）",
          id: "Tindakan pintas/tindakan menyingkat sesuatu.",
          ne: "सजिलो बाटो रोज्नु वा काम छोट्याउन खोज्नु।"
        },
        {
          ja: "<ruby>作業員同士<rt>さぎょういんどうし</rt></ruby>のコミュニケーション<ruby>不足<rt>ふそく</rt></ruby>",
          id: "Kurang komunikasi.",
          ne: "कामदारहरू बीच कुराकानी (सञ्चार) को अभाव हुनु।"
        }
      ],
      answer: 0,
      expJa: "複数人でのチェック（ダブルチェック）はミスを防止するための対策であり、エラーを引き起こす原因ではありません。",
      expId: "Pengecekan bersama/oleh banyak orang adalah metode pencegahan kesalahan, bukan penyebab human error.",
      expNe: "धेरै जना मिलेर दोहोरो जाँच गर्नु भनेको गल्ती रोक्ने उपाय हो, यो गल्तीको कारण होइन।"
    },
    {
      q: "<ruby>工事<rt>こうじ</rt></ruby>の<ruby>工期<rt>こうき</rt></ruby>（<ruby>完成日<rt>かんせいび</rt></ruby>）に<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わせるため、**<ruby>完成期日<rt>かんせいきじつ</rt></ruby>から<ruby>逆算<rt>ぎゃくさん</rt></ruby>して**<ruby>各工程<rt>かくこうてい</rt></ruby>の<ruby>必要日数<rt>ひつようにっすう</rt></ruby>を<ruby>計算<rt>けいさん</rt></ruby>する<ruby>手法<rt>しゅほう</rt></ruby>を<ruby>何<rt>なん</rt></ruby>と<ruby>呼<rt>よ</rt></ruby>びますか。",
      q_id: "Apa sebutan untuk metode penghitungan jumlah hari yang dibutuhkan untuk suatu proses dengan cara menelusuri balik prosesnya agar dapat memenuhi tanggal penyelesaian pekerjaan konstruksi?",
      q_ne: "काम सम्पन्न हुने अन्तिम मितिबाट उल्टो हिसाब गरेर प्रत्येक कामका लागि आवश्यक दिनहरू निर्धारण गर्ने विधिलाई के भनिन्छ?",
      cat: "第2章 工程管理",
      options: [
        {
          ja: "バックワード<ruby>法<rt>ほう</rt></ruby>（<ruby>逆進法<rt>ぎゃくしんほう</rt></ruby>）",
          id: "Metode mundur.",
          ne: "ब्याकवर्ड विधि (उल्टो गणना विधि)।"
        },
        {
          ja: "フォワード<ruby>法<rt>ほう</rt></ruby>（<ruby>前進法<rt>ぜんしんほう</rt></ruby>）",
          id: "Metode maju.",
          ne: "फरवर्ड विधि (अघिल्लो गणना विधि)।"
        },
        {
          ja: "<ruby>減算方式<rt>げんさんほうしき</rt></ruby>",
          id: "Metode pengurangan.",
          ne: "घटाउ विधि।"
        },
        {
          ja: "<ruby>回避方式<rt>かいひほうしき</rt></ruby>",
          id: "Metode penghindaran.",
          ne: "पन्छाउने विधि।"
        }
      ],
      answer: 0,
      expJa: "納期（完成日）からさかのぼって計画を立てる手法を「バックワード法（逆進法）」と呼びます。開始日から順に積み上げるのは「フォワード法」です。",
      expId: "Metode mundur menghitung jadwal dari tanggal selesai ke belakang agar tidak terjadi keterlambatan proyek.",
      expNe: "अन्तिम सम्पन्न मितिबाट पछाडि फर्केर योजना बनाउने विधिलाई 'ब्याकवर्ड विधि' भनिन्छ।"
    }
  ]
};
