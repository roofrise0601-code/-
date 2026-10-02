const CURRENT_QUIZ_DATA = {
  title: "特定技能2号 学科：Day 1（第1章 現場基本・チームワーク）",
  key: "score_gakka1",
  passScore: 70,
  questions: [
    {
      id: 1,
      cat: "第1章：1.1 チームワーク (p.1)",
      q: "<ruby>複数<rt>ふくすう</rt></ruby>の <ruby>専門<rt>せんもん</rt></ruby><ruby>工事業者<rt>こうじぎょうしゃ</rt></ruby>が <ruby>同<rt>おな</rt></ruby>じ<ruby>現場<rt>げんば</rt></ruby>で <ruby>工事<rt>こうじ</rt></ruby>を <ruby>進<rt>すす</rt></ruby>めています。<ruby>工事<rt>こうじ</rt></ruby>を スムーズに <ruby>安全<rt>あんぜん</rt></ruby>に <ruby>進<rt>すす</rt></ruby>めるための <ruby>職長<rt>しょくちょう</rt></ruby>の <ruby>行動<rt>こうどう</rt></ruby>として **<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なもの**は どれですか。",
      options: [
        "<ruby>現場監督<rt>げんばかんとく</rt></ruby>と<ruby>綿密<rt>めんみつ</rt></ruby>に<ruby>打合<rt>うちあわ</rt></ruby>せをし、<ruby>次<rt>つぎ</rt></ruby>の<ruby>工程<rt>こうてい</rt></ruby>の<ruby>専門<rt>せんもん</rt></ruby><ruby>工事業者<rt>こうじぎょうしゃ</rt></ruby>とも<ruby>連携<rt>れんけい</rt></ruby>して<ruby>技能者<rt>ぎのうしゃ</rt></ruby>に<ruby>指示<rt>しじ</rt></ruby>を<ruby>出<rt>だ</rt></ruby>す。",
        "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>工種<rt>こうしゅ</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>スピードだけを<ruby>優先<rt>ゆうせん</rt></ruby>し、<ruby>他<rt>ほか</rt></ruby>の<ruby>業者<rt>ぎょうしゃ</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>エリアを<ruby>先<rt>さき</rt></ruby>に<ruby>塞<rt>ふさ</rt></ruby>いで<ruby>施工<rt>せこう</rt></ruby>する。",
        "<ruby>経験<rt>けいけん</rt></ruby>の<ruby>少<rt>すく</rt></ruby>ない<ruby>後輩<rt>こうはい</rt></ruby><ruby>技能者<rt>ぎのうしゃ</rt></ruby>には<ruby>何<rt>なに</rt></ruby>もアドバイスせず、<ruby>失敗<rt>しっぱい</rt></ruby>して<ruby>自分<rt>じぶん</rt></ruby>で<ruby>覚<rt>おぼ</rt></ruby>えるまで<ruby>放置<rt>ほうち</rt></ruby>する。",
        "<ruby>現場監督<rt>げんばかんとく</rt></ruby>からの<ruby>指示<rt>しじ</rt></ruby>は<ruby>聞<rt>き</rt></ruby>かず、<ruby>職長<rt>しょくちょう</rt></ruby>の<ruby>長年<rt>ながねん</rt></ruby>の<ruby>勘<rt>かん</rt></ruby>だけで<ruby>勝手<rt>かって</rt></ruby>に<ruby>作業<rt>さぎょう</rt></ruby><ruby>手順<rt>てじゅん</rt></ruby>を<ruby>決<rt>き</rt></ruby>める。"
      ],
      answer: 0,
      hintId: "Kerja sama antar-subkontraktor dan koordinasi dengan pengawas lapangan adalah kunci kelancaran proyek.",
      hintNe: "विभिन्न ठेकेदारहरू बीचको टिमवर्क र सुपरभाइजरसँगको छलफल नै काम सुरक्षित तरिकाले अघि बढाउने मुख्य आधार हो।",
      expJa: "建設工事は多くの工程がつながっています。現場監督との打合せや専門工事業者間のチームワークを大切にします（テキストp.1）。",
      expId: "Mandor harus berkoordinasi dengan pengawas dan menjaga kerja sama antartim serta membimbing bawahan.",
      expNe: "सुपरभाइजरसँग नियमित छलफल र अन्य टोलीसँगको सहकार्य गर्दै जुनियरलाई सिकाउनु पर्छ।"
    },
    {
      id: 2,
      cat: "第1章：1.2 施工体制 (p.1-2)",
      q: "<ruby>建設<rt>けんせつ</rt></ruby><ruby>現場<rt>げんば</rt></ruby>における「<ruby>監理者<rt>かんりしゃ</rt></ruby>」の **<ruby>正<rt>ただ</rt></ruby>しい<ruby>役割<rt>やくわり</rt></ruby>**は どれですか。",
      options: [
        "<ruby>工事<rt>こうじ</rt></ruby>が <ruby>設計<rt>せっけい</rt></ruby><ruby>図書<rt>としょ</rt></ruby>（<ruby>図面<rt>ずめん</rt></ruby>）の<ruby>通<rt>とお</rt></ruby>りに <ruby>正<rt>ただ</rt></ruby>しく<ruby>行<rt>おこな</rt></ruby>われているかを <ruby>確認<rt>かくにん</rt></ruby>する。",
        "<ruby>工事<rt>こうじ</rt></ruby>を<ruby>建設<rt>けんせつ</rt></ruby><ruby>会社<rt>がいしゃ</rt></ruby>に<ruby>注文<rt>ちゅうもん</rt></ruby>し、<ruby>費用<rt>ひよう</rt></ruby>を<ruby>支払<rt>しはら</rt></ruby>う（<ruby>発注者<rt>はっちゅうしゃ</rt></ruby>）。",
        "<ruby>発注者<rt>はっちゅうしゃ</rt></ruby>の<ruby>希望<rt>きぼう</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いて、<ruby>建物<rt>たてもの</rt></ruby>の<ruby>設計<rt>せっけい</rt></ruby><ruby>図面<rt>ずめん</rt></ruby>を<ruby>描<rt>か</rt></ruby>く（<ruby>設計者<rt>せっけいしゃ</rt></ruby>）。",
        "<ruby>専門<rt>せんもん</rt></ruby><ruby>工事業者<rt>こうじぎょうしゃ</rt></ruby>の<ruby>作業員<rt>さぎょういん</rt></ruby>に<ruby>直接<rt>ちょくせつ</rt></ruby><ruby>手元<rt>てもと</rt></ruby>で<ruby>道具<rt>どうぐ</rt></ruby>の<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>える（<ruby>職長<rt>しょくちょう</rt></ruby>）。"
      ],
      answer: 0,
      hintId: "Kanrisha (Pengawas Konstruksi) bertugas memeriksa apakah pekerjaan di lapangan sudah sesuai gambar rencana.",
      hintNe: "'कान्रिशा' (सुपरभाइजिङ इन्जिनियर) को काम निर्माण कार्य नक्सा अनुसार भएको छ कि छैन भनी जाँच्नु हो।",
      expJa: "監理者は、工事が設計図書（図面）通りに適正に行われているかを確認する独立した立場の技術者です（テキストp.1-2）。",
      expId: "Kanrisha bertugas memeriksa kesesuaian antara pekerjaan nyata dengan gambar arsitektur.",
      expNe: "काम नक्सा वा डिजाइन बमोजिम सही ढङ्गले भइरहेको छ कि छैन भनेर निरीक्षण गर्ने प्राविधिक हो।"
    },
    {
      id: 3,
      cat: "第1章：1.3 建設キャリアアップシステム (p.2-3)",
      q: "<ruby>建設<rt>けんせつ</rt></ruby>キャリアアップシステム（CCUS）の カードの<ruby>色<rt>いろ</rt></ruby>について、**<ruby>誤<rt>あやま</rt></ruby>っているもの**は どれですか。",
      options: [
        "「レベル1（<ruby>初級<rt>しょきゅう</rt></ruby><ruby>技能者<rt>ぎのうしゃ</rt></ruby>・<ruby>見習<rt>みなら</rt></ruby>い）」のカードの<ruby>色<rt>いろ</rt></ruby>は **ブルー** である。",
        "「レベル2（<ruby>中堅<rt>ちゅうけん</rt></ruby><ruby>技能者<rt>ぎのうしゃ</rt></ruby>・<ruby>一人前<rt>いちにんまえ</rt></ruby>）」のカードの<ruby>色<rt>いろ</rt></ruby>は **ブルー** である。",
        "「レベル3（<ruby>職長<rt>しょくちょう</rt></ruby>として<ruby>現場<rt>げんば</rt></ruby>に<ruby>従事<rt>じゅうじ</rt></ruby>できる<ruby>技能者<rt>ぎのうしゃ</rt></ruby>）」のカードの<ruby>色<rt>いろ</rt></ruby>は **シルバー** である。",
        "「レベル4（<ruby>高度<rt>こうど</rt></ruby>なマネジメント<ruby>能力<rt>のうりょく</rt></ruby>を<ruby>有<rt>ゆう</rt></ruby>する<ruby>技能者<rt>ぎのうしゃ</rt></ruby>）」のカードの<ruby>色<rt>いろ</rt></ruby>は **ゴールド** である。"
      ],
      answer: 0,
      hintId: "Level 1 untuk pemula warnanya PUTIH (White), bukan biru. Level 2 baru Biru (Blue).",
      hintNe: "तह १ (सुरुवाती कामदार) को कार्डको रङ सेतो हुन्छ, नीलो होइन। तह २ चाहिँ नीलो हुन्छ।",
      expJa: "レベル1（初級技能者）は「ホワイト」です。レベル2は「ブルー」、レベル3は「シルバー」、レベル4は「ゴールド」です（テキストp.3）。",
      expId: "Tingkat kartu CCUS: Level 1 (Putih/Pemula), Level 2 (Biru), Level 3 (Perak), Level 4 (Emas).",
      expNe: "CCUS कार्डका रङहरू: तह १ (सेतो), तह २ (नीलो), तह ३ (चाँदी), तह ४ (सुनौलो) हुन्।"
    },
    {
      id: 4,
      cat: "第1章：1.4 現場のあいさつ (p.3)",
      q: "<ruby>日本<rt>にほん</rt></ruby>の <ruby>建設<rt>けんせつ</rt></ruby><ruby>現場<rt>げんば</rt></ruby>で「あいさつ」を <ruby>毎日<rt>まいにち</rt></ruby> <ruby>徹底<rt>てってい</rt></ruby>する **<ruby>最<rt>もっと</rt></ruby>も<ruby>大<rt>おお</rt></ruby>きな<ruby>目的<rt>もくてき</rt></ruby>**は どれですか。",
      options: [
        "<ruby>作業員<rt>さぎょういん</rt></ruby>どうしのコミュニケーションと<ruby>一体感<rt>いったいかん</rt></ruby>を<ruby>生<rt>う</rt></ruby>み、<ruby>建設<rt>けんせつ</rt></ruby><ruby>現場<rt>げんば</rt></ruby>での「<ruby>事故<rt>じこ</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐ」ため。",
        "<ruby>声<rt>こえ</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きさを<ruby>競<rt>きそ</rt></ruby>い<ruby>合<rt>あ</rt></ruby>って、<ruby>作業員<rt>さぎょういん</rt></ruby>の<ruby>序列<rt>じょれつ</rt></ruby>や<ruby>上下<rt>じょうげ</rt></ruby><ruby>関係<rt>かんけい</rt></ruby>をはっきりさせるため。",
        "<ruby>元請<rt>もとうけ</rt></ruby>の<ruby>監督<rt>かんとく</rt></ruby>に<ruby>怒<rt>おこ</rt></ruby>られないよう、<ruby>形<rt>かたち</rt></ruby>だけのマナーとして<ruby>義務<rt>ぎむ</rt></ruby>づけられているため。",
        "<ruby>他<rt>ほか</rt></ruby>の<ruby>業者<rt>ぎょうしゃ</rt></ruby>に<ruby>話<rt>はな</rt></ruby>しかけられないように、あらかじめ<ruby>先手<rt>せんて</rt></ruby>を<ruby>打<rt>う</rt></ruby>ってあいさつで<ruby>切<rt>き</rt></ruby>り<ruby>上<rt>あ</rt></ruby>げるため。"
      ],
      answer: 0,
      hintId: "Tujuan utama salam di lokasi kerja bukan sekadar formalitas, melainkan membangun rasa kebersamaan demi 'Mencegah Kecelakaan Kerja'.",
      hintNe: "अभिवादनको मुख्य उद्देश्य टोलीमा एकता ल्याएर 'दुर्घटना हुनबाट रोक्नु' हो।",
      expJa: "現場であいさつを交わす一番の目的は「現場での事故を防ぐこと」です。声を掛け合える関係が安全施工につながります（テキストp.3）。",
      expId: "Tujuan terpenting dari saling menyapa di proyek adalah mencegah kecelakaan.",
      expNe: "कार्यस्थलमा अभिवादन गर्नुको मुख्य उद्देश्य 'दुर्घटना रोक्नु' हो।"
    },
    {
      id: 5,
      cat: "第1章：1.5.1 全体朝礼 (p.4-5)",
      q: "<ruby>朝<rt>あさ</rt></ruby>の「<ruby>全体<rt>ぜんたい</rt></ruby><ruby>朝礼<rt>ちょうれい</rt></ruby>」で、<ruby>各社<rt>かくしゃ</rt></ruby>の <ruby>職長<rt>しょくちょう</rt></ruby>が <ruby>全員<rt>ぜんいん</rt></ruby>に<ruby>向<rt>む</rt></ruby>けて <ruby>作業<rt>さぎょう</rt></ruby><ruby>内容<rt>ないよう</rt></ruby>や <ruby>人員<rt>じんいん</rt></ruby>を <ruby>発表<rt>はっぴょう</rt></ruby>します。この<ruby>理由<rt>りゆう</rt></ruby>として **<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なもの**は どれですか。",
      options: [
        "<ruby>他<rt>ほか</rt></ruby>の<ruby>職種<rt>しょくしゅ</rt></ruby>が どんな<ruby>作業<rt>さぎょう</rt></ruby>をするかを<ruby>知<rt>し</rt></ruby>ることで、お<ruby>互<rt>たが</rt></ruby>いの<ruby>危険<rt>きけん</rt></ruby>や<ruby>自分<rt>じぶん</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>への<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐため。",
        "<ruby>他<rt>ほか</rt></ruby>の<ruby>会社<rt>かいしゃ</rt></ruby>よりも<ruby>多<rt>おお</rt></ruby>くの<ruby>作業員<rt>さぎょういん</rt></ruby>を<ruby>連<rt>つ</rt></ruby>れてきていることを<ruby>見<rt>み</rt></ruby>せつけてアピールするため。",
        "<ruby>作業<rt>さぎょう</rt></ruby><ruby>内容<rt>ないよう</rt></ruby>を<ruby>発表<rt>はっぴょう</rt></ruby>しておけば、<ruby>作業<rt>さぎょう</rt></ruby><ruby>手順書<rt>てじゅんしょ</rt></ruby>の<ruby>作成<rt>さくせい</rt></ruby>や<ruby>安全<rt>あんぜん</rt></ruby><ruby>確認<rt>かくにん</rt></ruby>を<ruby>省略<rt>しょうりゃく</rt></ruby>できるため。",
        "<ruby>現場監督<rt>げんばかんとく</rt></ruby>の<ruby>代<rt>か</rt></ruby>わりに、<ruby>職長<rt>しょくちょう</rt></ruby>が<ruby>工事<rt>こうじ</rt></ruby><ruby>全体<rt>ぜんたい</rt></ruby>の<ruby>責任<rt>せきにん</rt></ruby>をすべて<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けることを<ruby>宣言<rt>せんげん</rt></ruby>するため。"
      ],
      answer: 0,
      hintId: "Mengetahui apa yang dikerjakan tim lain sangat penting untuk menghindari bahaya tabrakan atau gangguan kerja antar-spesialisasi.",
      hintNe: "अन्य टोलीले के काम गर्दैछन् भनी थाहा पाउँदा एकअर्काको काममा पर्ने असर र सम्भावित खतराबाट जोगिन सकिन्छ।",
      expJa: "異なる工種の作業内容を知ることで、作業エリアの重複や上下作業による危険を未然に防ぎます（テキストp.4-5）。",
      expId: "Dengan saling mengetahui apa yang dikerjakan tim lain, pekerja bisa mengantisipasi bahaya silang.",
      expNe: "अन्य कामदारको कार्यतालिका बुझ्दा दुर्घटना र खतरालाई पहिले नै रोक्न मद्दत पुग्छ।"
    },
    {
      id: 6,
      cat: "第1章：1.5.2 職種ごとの朝礼とKY活動 (p.6-7)",
      q: "<ruby>職種<rt>しょくしゅ</rt></ruby>ごとの <ruby>朝礼<rt>ちょうれい</rt></ruby>で <ruby>行<rt>おこな</rt></ruby>う「KY<ruby>活動<rt>かつどう</rt></ruby>（<ruby>危険予知活動<rt>きけんよちかつどう</rt></ruby>）」の **<ruby>正<rt>ただ</rt></ruby>しい<ruby>手順<rt>てじゅん</rt></ruby>**は どれですか。",
      options: [
        "【<ruby>危険<rt>きけん</rt></ruby>の<ruby>発見<rt>はっけん</rt></ruby>】➔【<ruby>対策<rt>たいさく</rt></ruby>の<ruby>検討<rt>けんとう</rt></ruby>】➔【<ruby>行動<rt>こうどう</rt></ruby><ruby>目標<rt>もくひょう</rt></ruby>の<ruby>決定<rt>けってい</rt></ruby>】➔【<ruby>指差<rt>ゆびさ</rt></ruby>し<ruby>唱和<rt>しょうわ</rt></ruby>で かけ<ruby>声<rt>ごえ</rt></ruby>】",
        "【かけ<ruby>声<rt>ごえ</rt></ruby>】➔【<ruby>危険<rt>きけん</rt></ruby>の<ruby>発見<rt>はっけん</rt></ruby>】➔【<ruby>対策<rt>たいさく</rt></ruby>の<ruby>検討<rt>けんとう</rt></ruby>】➔【<ruby>行動<rt>こうどう</rt></ruby><ruby>目標<rt>もくひょう</rt></ruby>の<ruby>決定<rt>けってい</rt></ruby>】",
        "【<ruby>行動<rt>こうどう</rt></ruby><ruby>目標<rt>もくひょう</rt></ruby>の<ruby>決定<rt>けってい</rt></ruby>】➔【<ruby>対策<rt>たいさく</rt></ruby>の<ruby>検討<rt>けんとう</rt></ruby>】➔【<ruby>危険<rt>きけん</rt></ruby>の<ruby>発見<rt>はっけん</rt></ruby>】➔【タッチアンドコール】",
        "【<ruby>対策<rt>たいさく</rt></ruby>の<ruby>検討<rt>けんとう</rt></ruby>】➔【<ruby>危険<rt>きけん</rt></ruby>の<ruby>発見<rt>はっけん</rt></ruby>】➔【<ruby>指差<rt>ゆびさ</rt></ruby>し<ruby>唱和<rt>しょうわ</rt></ruby>】➔【<ruby>行動<rt>こうどう</rt></ruby><ruby>目標<rt>もくひょう</rt></ruby>の<ruby>決定<rt>けってい</rt></ruby>】"
      ],
      answer: 0,
      hintId: "Urutan KYK yang benar: Temukan Bahaya -> Bahas Solusi -> Tentukan Target Tim -> Teriakkan Slogan.",
      hintNe: "KY गतिविधिको सही क्रम: खतरा पत्ता लगाउने -> समाधान छलफल गर्ने -> कार्य लक्ष्य तय गर्ने -> औंलाले देखाउँदै नारा लगाउने।",
      expJa: "KY活動は、①危険の発見 ➔ ②対策の検討 ➔ ③行動目標の決定 ➔ ④指差し唱和の順序で行います（テキストp.6-7）。",
      expId: "Urutan KY: 1. Temukan bahaya -> 2. Bahas solusi -> 3. Tentukan target -> 4. Teriakkan sasaran bersama.",
      expNe: "KY को सही प्रक्रिया: १. खतरा पत्ता लगाउने -> २. उपायबारे छलफल -> ३. लक्ष्य तय -> ४. औंला देखाएर दोहोर्याउने।"
    },
    {
      id: 7,
      cat: "第1章：1.5.3 作業間の連絡調整 (p.7)",
      q: "<ruby>作業間連絡調整<rt>さぎょうかんれんらくちょうせい</rt></ruby><ruby>会議<rt>かいぎ</rt></ruby>について、**<ruby>適切<rt>てきせつ</rt></ruby>なもの**は どれですか。",
      options: [
        "<ruby>元請<rt>もとうけ</rt></ruby>と<ruby>各社<rt>かくしゃ</rt></ruby>の<ruby>職長<rt>しょくちょう</rt></ruby>が<ruby>集<rt>あつ</rt></ruby>まり、<ruby>翌日<rt>よくじつ</rt></ruby>の<ruby>作業エリア<rt>さぎょうえりあ</rt></ruby>や<ruby>クレーン<rt>くれーん</rt></ruby>の<ruby>使用時間<rt>しようじかん</rt></ruby>、<ruby>搬入<rt>はんにゅう</rt></ruby><ruby>予定<rt>よてい</rt></ruby>を<ruby>調整<rt>ちょうせい</rt></ruby>する。",
        "<ruby>職長<rt>しょくちょう</rt></ruby>は<ruby>会議<rt>かいぎ</rt></ruby>に<ruby>出<rt>で</rt></ruby>る<ruby>必要<rt>ひつよう</rt></ruby>はなく、<ruby>当日<rt>とうじつ</rt></ruby>の<ruby>朝<rt>あさ</rt></ruby>に<ruby>早<rt>はや</rt></ruby>い<ruby>者<rt>もの</rt></ruby><ruby>勝<rt>が</rt></ruby>ちで<ruby>重機<rt>じゅうき</rt></ruby>を<ruby>奪<rt>うば</rt></ruby>い<ruby>合<rt>あ</rt></ruby>う。",
        "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>会社<rt>かいしゃ</rt></ruby>が<ruby>使<rt>つか</rt></ruby>う<ruby>通路<rt>つうろ</rt></ruby>を、<ruby>他<rt>ほか</rt></ruby>の<ruby>業者<rt>ぎょうしゃ</rt></ruby>に<ruby>黙<rt>だま</rt></ruby>って<ruby>資材<rt>しざい</rt></ruby>で<ruby>塞<rt>ふさ</rt></ruby>いで<ruby>通行止<rt>つうこうど</rt></ruby>めにしてよい。",
        "<ruby>危険作業<rt>きけんさぎょう</rt></ruby>（<ruby>上<rt>うえ</rt></ruby>で<ruby>鉄骨<rt>てっこつ</rt></ruby>を<ruby>組<rt>く</rt></ruby>むなど）をするときも、<ruby>下<rt>した</rt></ruby>にいる<ruby>業者<rt>ぎょうしゃ</rt></ruby>には<ruby>知<rt>し</rt></ruby>らせずに<ruby>作業<rt>さぎょう</rt></ruby>する。"
      ],
      answer: 0,
      hintId: "Rapat koordinasi antar-mandor bertugas mengatur jadwal penggunaan derek, jalur material, dan mencegah bahaya silang besok harinya.",
      hintNe: "समन्वय बैठकमा भोलिको काम गर्ने ठाउँ, क्रेन प्रयोग र सामान ल्याउने समयबारे छलफल गरी मिलाइन्छ।",
      expJa: "作業間連絡調整会議では、翌日の工程や揚重機（クレーン）の使用時間、作業エリアの重複を防ぐ調整を行います（テキストp.7）。",
      expId: "Rapat koordinasi harian membahas pembagian area kerja, jadwal alat berat, dan jalur angkut barang untuk esok hari.",
      expNe: "कार्यनेताहरू बीचको बैठकले भोलिको काम जुध्न नदिई सुरक्षित रूपमा अघि बढाउन मद्दत गर्छ।"
    },
    {
      id: 8,
      cat: "第1章：1.5.4 巡視・点検 (p.7)",
      q: "<ruby>職長<rt>しょくちょう</rt></ruby>による **<ruby>現場巡視<rt>げんばじゅんし</rt></ruby>（<ruby>見回<rt>みまわ</rt></ruby>り）**で <ruby>確認<rt>かくにん</rt></ruby>すべきこととして、**<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なもの**は どれですか。",
      options: [
        "<ruby>作業員<rt>さぎょういん</rt></ruby>が<ruby>手順書<rt>てじゅんしょ</rt></ruby><ruby>通<rt>とお</rt></ruby>りに<ruby>安全<rt>あんぜん</rt></ruby>に<ruby>作業<rt>さぎょう</rt></ruby>しているか、<ruby>保護具<rt>ほごぐ</rt></ruby>を<ruby>正<rt>ただ</rt></ruby>しく<ruby>着<rt>つ</rt></ruby>けているか、<ruby>不安全<rt>ふあんぜん</rt></ruby>な<ruby>箇所<rt>かしょ</rt></ruby>がないかを<ruby>確認<rt>かくにん</rt></ruby>する。",
        "<ruby>作業員<rt>さぎょういん</rt></ruby>の<ruby>顔色<rt>かおいろ</rt></ruby>だけを<ruby>遠<rt>とお</rt></ruby>くから<ruby>眺<rt>なが</rt></ruby>め、<ruby>不安全行動<rt>ふあんぜんこうどう</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけても<ruby>注意<rt>ちゅうい</rt></ruby>せず<ruby>無視<rt>むし</rt></ruby>する。",
        "<ruby>休憩所<rt>きゅうけいじょ</rt></ruby>にずっと<ruby>座<rt>すわ</rt></ruby>ったままで、1<ruby>日<rt>にち</rt></ruby>中<ruby>現場<rt>げんば</rt></ruby>には<ruby>見回<rt>みまわ</rt></ruby>りに<ruby>行<rt>い</rt></ruby>かない。",
        "<ruby>他社<rt>たしゃ</rt></ruby>の<ruby>作業員<rt>さぎょういん</rt></ruby>とのおしゃべりだけを<ruby>楽<rt>たの</rt></ruby>しみ、<ruby>安全点検<rt>あんぜんてんけん</rt></ruby>は<ruby>行<rt>おこな</rt></ruby>わない。"
      ],
      answer: 0,
      hintId: "Saat patroli lapangan, mandor harus memastikan APD dipakai dengan benar dan SOP keselamatan dipatuhi secara nyata.",
      hintNe: "कार्यस्थल निरीक्षण गर्दा सुरक्षा उपकरण सही ढङ्गले लगाएको र सुरक्षित प्रक्रिया अनुसार काम भएको जाँच्नुपर्छ।",
      expJa: "現場巡視では、作業標準の遵守状況、保護具の適正使用、不安全行動や不安全状態の是正を直接確認します（テキストp.7）。",
      expId: "Mandor wajib berpatroli untuk melihat kepatuhan APD dan menghentikan tindakan tidak aman para pekerja secara langsung.",
      expNe: "कार्यस्थलमा घुम्दा कामदारले तोकिएका सुरक्षा नियम पालना गरेका छन् कि छैनन् भनी यकिन गर्नुपर्छ।"
    },
    {
      id: 9,
      cat: "第1章：1.5.5 後片付けと清掃 (5S) (p.7)",
      q: "<ruby>作業終了時<rt>さぎょうしゅうりょうじ</rt></ruby>の「<ruby>後片付<rt>あとかたづ</rt></ruby>け」や「5S」について、**<ruby>正<rt>ただ</rt></ruby>しいもの**は どれですか。",
      options: [
        "<ruby>作業後<rt>さぎょうご</rt></ruby>は<ruby>道具<rt>どうぐ</rt></ruby>や<ruby>材料<rt>ざいりょう</rt></ruby>を<ruby>決<rt>き</rt></ruby>められた<ruby>場所<rt>ばしょ</rt></ruby>に<ruby>片付<rt>かたづ</rt></ruby>け、<ruby>清掃<rt>せいそう</rt></ruby>・<ruby>整理整頓<rt>せいりせいとん</rt></ruby>をして<ruby>翌日<rt>よくじつ</rt></ruby>の<ruby>転倒<rt>てんとう</rt></ruby>や<ruby>事故<rt>じこ</rt></ruby>を<ruby>防<rt>ふせ</rt></ruby>ぐ。",
        "<ruby>使<rt>つか</rt></ruby>った<ruby>電動工具<rt>でんどうこうぐ</rt></ruby>はスイッチを入れたまま、<ruby>通路<rt>つうろ</rt></ruby>の<ruby>真ん中<rt>まんなか</rt></ruby>に<ruby>散<rt>ち</rt></ruby>らかして<ruby>帰<rt>かえ</rt></ruby>る。",
        "<ruby>掃除<rt>そうじ</rt></ruby>や<ruby>片付<rt>かたづ</rt></ruby>けは<ruby>元請<rt>もとうけ</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>なので、<ruby>下請<rt>したうけ</rt></ruby>の<ruby>職長<rt>しょくちょう</rt></ruby>や<ruby>作業員<rt>さぎょういん</rt></ruby>は<ruby>何<rt>なに</rt></ruby>も片付けなくてよい。",
        "<ruby>余<rt>あま</rt></ruby>ったクギやビスは、<ruby>拾<rt>ひろ</rt></ruby>わずに<ruby>足場<rt>あしば</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>にバラまいたままにしておく。"
      ],
      answer: 0,
      hintId: "Membersihkan tempat kerja dan merapikan alat (5S) mencegah kecelakaan tersandung/terpeleset besok harinya.",
      hintNe: "काम सकिएपछि औजार मिलाएर राख्ने र सरसफाइ गर्दा लड्ने वा चोट लाग्ने जोखिमबाट बच्न सकिन्छ।",
      expJa: "作業終了後の整理整頓・清掃（5S）は、つまずき転倒災害や落下事故を防ぎ、翌日の安全施工につながります（テキストp.7）。",
      expId: "Merapikan alat kerja dan sisa material adalah kewajiban dasar untuk mencegah kecelakaan di hari berikutnya.",
      expNe: "काम सकिएपछि सामान ठिक ठाउँमा थन्क्याउनु र सरसफाइ गर्नु सुरक्षित कार्यस्थलको पहिलो नियम हो।"
    },
    {
      id: 10,
      cat: "第1章：1.5.6 終業時の報告 (p.7)",
      q: "1<ruby>日<rt>にち</rt></ruby>の <ruby>作業<rt>さぎょう</rt></ruby>が <ruby>終<rt>お</rt></ruby>わったときの **<ruby>職長<rt>しょくちょう</rt></ruby>の<ruby>行動<rt>こうどう</rt></ruby>**として、**<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なもの**は どれですか。",
      options: [
        "<ruby>作業員<rt>さぎょういん</rt></ruby>の<ruby>怪我<rt>けが</rt></ruby>や<ruby>体調<rt>たいちょう</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>、<ruby>本日の<rt>ほんじつの</rt></ruby><ruby>進捗<rt>しんちょく</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>し、<ruby>現場監督<rt>げんばかんとく</rt></ruby>へ<ruby>作業終了<rt>さぎょうしゅうりょう</rt></ruby>の<ruby>報告<rt>ほうこく</rt></ruby>をしてから<ruby>退場<rt>たいじょう</rt></ruby>する。",
        "<ruby>現場監督<rt>げんばかんとく</rt></ruby>には<ruby>何<rt>なに</rt></ruby>も<ruby>言<rt>い</rt></ruby>わず、<ruby>時間<rt>じかん</rt></ruby>が<ruby>来<rt>き</rt></ruby>たら<ruby>勝手<rt>かって</rt></ruby>に<ruby>作業員<rt>さぎょういん</rt></ruby>を<ruby>連<rt>つ</rt></ruby>れて<ruby>帰<rt>かえ</rt></ruby>る。",
        "<ruby>作業員<rt>さぎょういん</rt></ruby>が<ruby>軽<rt>かる</rt></ruby>いケガをしていたが、<ruby>面倒<rt>めんどう</rt></ruby>なので<ruby>元請<rt>もとうけ</rt></ruby>には<ruby>報告<rt>ほうこく</rt></ruby>せず<ruby>隠<rt>かく</rt></ruby>す。",
        "<ruby>現場<rt>げんば</rt></ruby>の<ruby>戸締<rt>とじ</rt></ruby>まりや<ruby>火気<rt>かき</rt></ruby>・<ruby>電源<rt>でんげん</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>をせずに、そのまま<ruby>放置<rt>ほうち</rt></ruby>して<ruby>帰宅<rt>きたく</rt></ruby>する。"
      ],
      answer: 0,
      hintId: "Periksa kondisi tubuh pekerja, pastikan api/listrik aman, dan lapor selesai kerja ke pengawas lapangan sebelum pulang.",
      hintNe: "कामदारको स्वास्थ्य जाँच्ने, आगो/बिजुली बन्द भएको यकिन गर्ने र सुपरभाइजरलाई रिपोर्ट गरेर मात्र घर फर्कने।",
      expJa: "終業時は作業員全員の無事・進捗、火気・戸締まりを確認し、元請監督へ作業終了報告を行います（テキストp.7）。",
      expId: "Mandor wajib memeriksa keselamatan pekerja dan memastikan alat kerja aman sebelum melaporkan kepulangan ke kantor proyek.",
      expNe: "कामको अन्त्यमा सबै सुरक्षित रहेको यकिन गरी सुपरभाइजरलाई काम सकिएको जानकारी दिनुपर्छ।"
    }
  ]
};
