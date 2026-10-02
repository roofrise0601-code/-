const CURRENT_QUIZ_DATA = {
  title: "特定技能2号 学科：Day 2（第2章 2.1 労働法編）",
  key: "score_gakka1_2",
  passScore: 70,
  questions: [
    {
      id: 1,
      cat: "2.1.1 労働基準法：労働条件の決定 (p.8)",
      q: "<ruby>労働基準法<rt>ろうどうきじゅんほう</rt></ruby>における「<ruby>労働条件<rt>ろうどうじょうけん</rt></ruby>の<ruby>決定<rt>けってい</rt></ruby>」について、**<ruby>正<rt>ただ</rt></ruby>しいもの**は どれですか。",
      options: [
        "<ruby>労働条件<rt>ろうどうじょうけん</rt></ruby>は、<ruby>使用者<rt>しようしゃ</rt></ruby>と<ruby>労働者<rt>ろうどうしゃ</rt></ruby>が「<ruby>対等<rt>たいとう</rt></ruby>の<ruby>立場<rt>たちば</rt></ruby>」において<ruby>決定<rt>けってい</rt></ruby>すべきものであり、お<ruby>互<rt>たが</rt></ruby>いに<ruby>約束事<rt>やくそくごと</rt></ruby>をしっかり<ruby>守<rt>まも</rt></ruby>る<ruby>必要<rt>ひつよう</rt></ruby>がある。",
        "<ruby>会社<rt>かいしゃ</rt></ruby>（<ruby>使用者<rt>しようしゃ</rt></ruby>）の<ruby>立場<rt>たちば</rt></ruby>のほうが<ruby>強<rt>つよ</rt></ruby>いため、<ruby>会社<rt>かいしゃ</rt></ruby>が<ruby>一方的<rt>いっぽうてき</rt></ruby>にどんなに<ruby>不利<rt>ふり</rt></ruby>な<ruby>条件<rt>じょうけん</rt></ruby>でも<ruby>決<rt>き</rt></ruby>めてよい。",
        "<ruby>法律<rt>ほうりつ</rt></ruby>の<ruby>基準<rt>きじゅん</rt></ruby>に<ruby>達<rt>たっ</rt></ruby>していない<ruby>労働条件<rt>ろうどうじょうけん</rt></ruby>であっても、<ruby>労働者<rt>ろうどうしゃ</rt></ruby>が<ruby>同意<rt>どうい</rt></ruby>すればその<ruby>契約<rt>けいやく</rt></ruby>は<ruby>有効<rt>ゆうこう</rt></ruby>になる。",
        "<ruby>労働条件<rt>ろうどうじょうけん</rt></ruby>とは「<ruby>賃金<rt>ちんぎん</rt></ruby>」のことだけをいい、<ruby>労働時間<rt>ろうどうじかん</rt></ruby>や<ruby>安全衛生<rt>あんぜんえいせい</rt></ruby>は<ruby>含<rt>ふく</rt></ruby>まれない。"
      ],
      answer: 0,
      hintId: "Kondisi kerja harus diputuskan atas dasar kedudukan setara antara pengusaha dan pekerja.",
      hintNe: "कामको सर्तहरू रोजगारदाता र श्रमिक दुवै समान हैसियतमा रहेर तय गर्नुपर्छ र पालना गर्नुपर्छ।",
      expJa: "労働条件は使用者と労働者が対等の立場において決定すべきものです。基準に達しない部分は違法となり労働基準法が適用されます（テキストp.8）。",
      expId: "Syarat kerja harus disepakati secara setara antara perusahaan dan pekerja, tidak boleh di bawah standar hukum.",
      expNe: "श्रम मानक ऐन अनुसार कामको सर्त रोजगारदाता र कामदारले बराबरीको हैसियतमा तय गर्नुपर्छ।"
    },
    {
      id: 2,
      cat: "2.1.1 労働基準法：均等・強制労働禁止・パワハラ防止 (p.8)",
      q: "<ruby>労働基準法<rt>ろうどうきじゅんほう</rt></ruby>および<ruby>労働施策総合推進法<rt>ろうどうしさくそうごうすいしんほう</rt></ruby>（パワハラ<ruby>防止法<rt>ぼうしほう</rt></ruby>）について、**<ruby>誤<rt>あやま</rt></ruby>っているもの**は どれですか。",
      options: [
        "<ruby>外国人<rt>がいこくじん</rt></ruby>であることを<ruby>理由<rt>りゆう</rt></ruby>にして、<ruby>賃金<rt>ちんぎん</rt></ruby>や<ruby>労働条件<rt>ろうどうじょうけん</rt></ruby>で<ruby>差別的取扱<rt>さべつてきとりあつかい</rt></ruby>をしてもよい。",
        "<ruby>暴行<rt>ぼうこう</rt></ruby>、<ruby>脅迫<rt>きょうはく</rt></ruby>、<ruby>監禁<rt>かんきん</rt></ruby>などで<ruby>労働者<rt>ろうどうしゃ</rt></ruby>の<ruby>意思<rt>いし</rt></ruby>に<ruby>反<rt>はん</rt></ruby>して<ruby>労働<rt>ろうどう</rt></ruby>を<ruby>強制<rt>きょうせい</rt></ruby>してはならない。",
        "<ruby>職場<rt>しょくば</rt></ruby>での<ruby>優位性<rt>ゆういせい</rt></ruby>を<ruby>利用<rt>りよう</rt></ruby>して<ruby>業務<rt>ぎょうむ</rt></ruby>の<ruby>適正<rt>てきせい</rt></ruby>な<ruby>範囲<rt>はんい</rt></ruby>を<ruby>超<rt>こ</rt></ruby>えて<ruby>苦痛<rt>くつう</rt></ruby>を<ruby>与<rt>あた</rt></ruby>えるパワハラは<ruby>禁止<rt>きんし</rt></ruby>されている。",
        "<ruby>会社<rt>かいしゃ</rt></ruby>はパワハラを<ruby>防止<rt>ぼうし</rt></ruby>するため、<ruby>相談窓口<rt>そうだんまどぐち</rt></ruby>を<ruby>設<rt>もう</rt></ruby>けるなどの<ruby>措置<rt>そち</rt></ruby>を<ruby>講<rt>こう</rt></ruby>じることが<ruby>義務<rt>ぎむ</rt></ruby>づけられている。"
      ],
      answer: 0,
      hintId: "Diskriminasi upah atau perlakuan berdasarkan kebangsaan asing sangat dilarang!",
      hintNe: "विदेशी भएकै कारणले तलब वा कामको सुविधामा भेदभाव गर्नु गैरकानुनी हो।",
      expJa: "国籍、信条、社会的身分を理由とする差別的取扱いは禁止されています（テキストp.8）。",
      expId: "Pengusaha dilarang memperlakukan pekerja secara diskriminatif berdasarkan kebangsaan asing.",
      expNe: "श्रम मानक ऐनले राष्ट्रियता वा धार्मिक आस्थाका आधारमा भेदभाव गर्न पूर्ण रोक लगाएको छ।"
    },
    {
      id: 3,
      cat: "2.1.1 労働基準法：労働条件の明示 (p.8-9)",
      q: "<ruby>使用者<rt>しようしゃ</rt></ruby>（<ruby>会社<rt>かいしゃ</rt></ruby>）が <ruby>労働者<rt>ろうどうしゃ</rt></ruby>に **<ruby>必<rt>かなら</rt></ruby>ず<ruby>明示<rt>めいじ</rt></ruby>（<ruby>知<rt>し</rt></ruby>らせる）しなければならない6<ruby>項目<rt>こうもく</rt></ruby>**に <ruby>含<rt>ふく</rt></ruby>まれないものは どれですか。",
      options: [
        "<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>役員<rt>やくいん</rt></ruby>や<ruby>職長<rt>しょくちょう</rt></ruby>の「<ruby>趣味<rt>しゅみ</rt></ruby>や<ruby>家族<rt>かぞく</rt></ruby><ruby>構成<rt>こうせい</rt></ruby>」",
        "<ruby>労働契約<rt>ろうどうけいやく</rt></ruby>の<ruby>期間<rt>きかん</rt></ruby>、および<ruby>契約<rt>けいやく</rt></ruby>を<ruby>更新<rt>こうしん</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>の<ruby>基準<rt>きじゅん</rt></ruby>",
        "<ruby>就業場所<rt>しゅうぎょうばしょ</rt></ruby>、および<ruby>従事<rt>じゅうじ</rt></ruby>する<ruby>業務<rt>ぎょうむ</rt></ruby>の<ruby>内容<rt>ないよう</rt></ruby>",
        "<ruby>終業<rt>しゅうぎょう</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>、<ruby>残業<rt>ざんぎょう</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>、<ruby>休憩時間<rt>きゅうけいじかん</rt></ruby>、<ruby>休日<rt>きゅうじつ</rt></ruby>、<ruby>休暇<rt>きゅうか</rt></ruby>、<ruby>賃金<rt>ちんぎん</rt></ruby>、<ruby>退職<rt>たいしょく</rt></ruby>・<ruby>解雇<rt>かいこ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>事項<rt>じこう</rt></ruby>"
      ],
      answer: 0,
      hintId: "Poin yang wajib dinyatakan meliputi periode kontrak, lokasi kerja, jenis tugas, jam kerja, upah, dan aturan PHK.",
      hintNe: "काम सम्झौतामा कामको ठाउँ, कामको विवरण, तलब, कामको समय र बिदा आदि अनिवार्य लेखिएको हुनुपर्छ।",
      expJa: "明示義務があるのは、契約期間、更新基準、就業場所・業務内容、労働時間・休日、賃金、退職・解雇の6項目です（テキストp.8-9）。",
      expId: "Pemberi kerja wajib menyatakan 6 butir persyaratan kerja utama secara tertulis saat merekrut pekerja.",
      expNe: "कम्पनीले कामदार भर्ना गर्दा कामको सर्त सम्बन्धी ६ बुँदा अनिवार्य रूपमा स्पष्ट खुलाउनुपर्छ।"
    },
    {
      id: 4,
      cat: "2.1.1 労働基準法：賠償予定の禁止・解雇・賃金5原則 (p.9)",
      q: "<ruby>労働基準法<rt>ろうどうきじゅんほう</rt></ruby>の ルールについて、**<ruby>正<rt>ただ</rt></ruby>しいもの**は どれですか。",
      options: [
        "<ruby>解雇<rt>かいこ</rt></ruby>は<ruby>少<rt>すく</rt></ruby>なくとも30<ruby>日前<rt>にちまえ</rt></ruby>に<ruby>予告<rt>よこく</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>であり、<ruby>賃金<rt>ちんぎん</rt></ruby>は「<ruby>通貨<rt>つうか</rt></ruby>で、<ruby>直接<rt>ちょくせつ</rt></ruby>、<ruby>全額<rt>ぜんがく</rt></ruby>を、<ruby>毎月<rt>まいつき</rt></ruby>1<ruby>回以上<rt>かいいじょう</rt></ruby>、<ruby>一定<rt>いってい</rt></ruby>の<ruby>期日<rt>きじつ</rt></ruby>に」<ruby>支払<rt>しはら</rt></ruby>わなければならない。",
        "「<ruby>仕事<rt>しごと</rt></ruby>をやめたら<ruby>違約金<rt>いやくきん</rt></ruby>として50<ruby>万円<rt>まんえん</rt></ruby><ruby>払<rt>はら</rt></ruby>う」という<ruby>契約<rt>けいやく</rt></ruby>をあらかじめ<ruby>結<rt>むす</rt></ruby>んでもよい。",
        "<ruby>仕事中<rt>しごとちゅう</rt></ruby>のケガで<ruby>休業<rt>きゅうぎょう</rt></ruby>している<ruby>期間中<rt>きかんちゅう</rt></ruby>であっても、<ruby>会社<rt>かいしゃ</rt></ruby>はいつでも<ruby>即日<rt>そくじつ</rt></ruby><ruby>解雇<rt>かいこ</rt></ruby>できる。",
        "<ruby>給料<rt>きゅうりょう</rt></ruby>は<ruby>現金<rt>げんきん</rt></ruby>ではなく、お<ruby>米<rt>こめ</rt></ruby>や<ruby>商品券<rt>しょうひんけん</rt></ruby>などの<ruby>品物<rt>しなもの</rt></ruby>だけで<ruby>支払<rt>しはら</rt></ruby>うことができる。"
      ],
      answer: 0,
      hintId: "PHK butuh pemberitahuan 30 hari sebelumnya, dan upah wajib dibayar mata uang tunai secara penuh langsung ke pekerja.",
      hintNe: "कामबाट निकाल्न ३० दिन अघि सूचना दिनुपर्छ र तलब ५ नियम अनुसार नगद मुद्रामा सिधै दिनुपर्छ।",
      expJa: "解雇は30日前の予告が必要で、賃金支払いの5原則が定められています。賠償予定は違法です（テキストp.9）。",
      expId: "PHK wajib diberitahukan minimal 30 hari sebelumnya, dan upah harus dibayarkan tunai sesuai 5 prinsip upah.",
      expNe: "कामबाट हटाउँदा ३० दिन अघि पूर्वसूचना दिनुपर्छ र तलब जापानी मुद्रामा कामदारलाई सिधै पूरै भुक्तानी गर्नुपर्छ।"
    },
    {
      id: 5,
      cat: "2.1.1 労働基準法：労働時間・休憩・36協定割増 (p.9-10)",
      q: "<ruby>法定労働時間<rt>ほうていろうどうじかん</rt></ruby>と <ruby>残業<rt>ざんぎょう</rt></ruby>について、**<ruby>正<rt>ただ</rt></ruby>しいもの**は どれですか。",
      options: [
        "<ruby>労働時間<rt>ろうどうじかん</rt></ruby>は<ruby>原則<rt>げんそく</rt></ruby>「1<ruby>週<rt>しゅう</rt></ruby>40<ruby>時間<rt>じかん</rt></ruby>、1<ruby>日<rt>にち</rt></ruby>8<ruby>時間<rt>じかん</rt></ruby>」以内で、<ruby>残業<rt>ざんぎょう</rt></ruby>には36<ruby>協定<rt>きょうてい</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>であり、<ruby>通常残業<rt>つうじょうざんぎょう</rt></ruby>は25％<ruby>以上<rt>いじょう</rt></ruby>、<ruby>休日出勤<rt>きゅうじつしゅっきん</rt></ruby>は35％<ruby>以上<rt>いじょう</rt></ruby>の<ruby>割増賃金<rt>わりましちんぎん</rt></ruby>となる。",
        "<ruby>労働時間<rt>ろうどうじかん</rt></ruby>が8<ruby>時間<rt>じかん</rt></ruby>を<ruby>超<rt>こ</rt></ruby>える<ruby>場合<rt>ばあい</rt></ruby>でも、<ruby>休憩時間<rt>きゅうけいじかん</rt></ruby>は15<ruby>分<rt>ふん</rt></ruby>だけ<ruby>与<rt>あた</rt></ruby>えればよい。",
        "<ruby>休日<rt>きゅうじつ</rt></ruby>に<ruby>出勤<rt>しゅっきん</rt></ruby>して<ruby>働<rt>はたら</rt></ruby>いたときでも、<ruby>平日<rt>へいじつ</rt></ruby>と<ruby>全<rt>まった</rt></ruby>く<ruby>同<rt>おな</rt></ruby>じ<ruby>時給<rt>じきゅう</rt></ruby>（<ruby>割増<rt>わりまし</rt></ruby>なし）でよい。",
        "<ruby>会社<rt>かいしゃ</rt></ruby>は36<ruby>協定<rt>きょうてい</rt></ruby>を<ruby>結<rt>むす</rt></ruby>んでいなくても、1<ruby>日<rt>にち</rt></ruby>15<ruby>時間<rt>じかん</rt></ruby>まで<ruby>自由<rt>じゆう</rt></ruby>に<ruby>残業<rt>ざんぎょう</rt></ruby>させてよい。"
      ],
      answer: 0,
      hintId: "Jam kerja legal 8 jam/hari (40 jam/minggu). Lembur butuh Perjanjian 36 (+25%), kerja di hari libur resmi (+35%).",
      hintNe: "कामको समय दिनको ८ घण्टा हो। ओभरटाइमका लागि ३६ सम्झौता चाहिन्छ र सामान्य ओभरटाइममा २५% तथा बिदाको काममा ३५% थप ज्याला पाउनुपर्छ।",
      expJa: "労働時間は原則週40時間・1日8時間です。通常残業は25%以上、休日出勤は35%以上の割増が必要です（テキストp.9-10）。",
      expId: "Batas kerja standar 8 jam/hari. Lembur biasa minimal +25%, kerja hari libur minimal +35%.",
      expNe: "कानुनी कामको समय दिनको ८ घण्टा हो र ओभरटाइम गर्दा कानुनी रूपमा अतिरिक्त पारिश्रमिक पाउनुपर्छ।"
    },
    {
      id: 6,
      cat: "2.1.1 労働基準法：年次有給休暇 (p.10)",
      q: "「<ruby>年次有給休暇<rt>ねんじゆうきゅうきゅうか</rt></ruby>」の ルールとして、**<ruby>正<rt>ただ</rt></ruby>しいもの**は どれですか。",
      options: [
        "<ruby>雇<rt>やと</rt></ruby>い<ruby>入<rt>い</rt></ruby>れから6か月<ruby>間継続勤務<rt>かんけいぞくきんむ</rt></ruby>し、<ruby>全労働日<rt>ぜんろうどうび</rt></ruby>の8<ruby>割以上出勤<rt>わりいじょうしゅっきん</rt></ruby>した<ruby>労働者<rt>ろうどうしゃ</rt></ruby>には「10<ruby>労働日<rt>ろうどうび</rt></ruby>」の<ruby>有給休暇<rt>ゆうきゅうきゅうか</rt></ruby>が<ruby>与<rt>あた</rt></ruby>えられ、<ruby>有休<rt>ゆうきゅう</rt></ruby>の<ruby>買<rt>か</rt></ruby>い<ruby>取<rt>と</rt></ruby>りは<ruby>違法<rt>いほう</rt></ruby>である。",
        "<ruby>有給休暇<rt>ゆうきゅうきゅうか</rt></ruby>は<ruby>使<rt>つか</rt></ruby>わせずに、すべて<ruby>会社<rt>かいしゃ</rt></ruby>がお<ruby>金<rt>かね</rt></ruby>で<ruby>強制買<rt>きょうせいか</rt></ruby>い<ruby>取<rt>と</rt></ruby>りすることが<ruby>法律<rt>ほうりつ</rt></ruby>で<ruby>義務<rt>ぎむ</rt></ruby>づけられている。",
        "<ruby>外国人<rt>がいこくじん</rt></ruby>の<ruby>技能者<rt>ぎのうしゃ</rt></ruby>には、<ruby>何年<rt>なんねん</rt></ruby><ruby>働<rt>はたら</rt></ruby>いても<ruby>有給休暇<rt>ゆうきゅうきゅうか</rt></ruby>を1<ruby>日<rt>にち</rt></ruby>も<ruby>与<rt>あた</rt></ruby>えなくてよい。",
        "<ruby>有給休暇<rt>ゆうきゅうきゅうか</rt></ruby>を<ruby>取得<rt>しゅとく</rt></ruby>して<ruby>休<rt>やす</rt></ruby>んだ<ruby>日<rt>ひ</rt></ruby>は、その<ruby>日<rt>ひ</rt></ruby>の<ruby>給料<rt>きゅうりょう</rt></ruby>をゼロ（<ruby>無給<rt>むきゅう</rt></ruby>）にしなければならない。"
      ],
      answer: 0,
      hintId: "Bekerja 6 bulan berturut-turut dengan kehadiran 80% berhak mendapat cuti berbayar 10 hari. Cuti tidak boleh dibeli paksa.",
      hintNe: "६ महिना काम गरी ८०% उपस्थिति भएमा १० दिन सवेतन बिदा पाइन्छ। यसलाई पैसामा किन्न पाइँदैन।",
      expJa: "6か月継続勤務・8割以上出勤で10日が付与されます。使用者による有給休暇の買い取りは違法です（テキストp.10）。",
      expId: "Pekerja berhak atas 10 hari cuti tahunan berbayar (Yukyu) setelah 6 bulan masa kerja.",
      expNe: "६ महिना काम गरेपछि १० दिनको तलबसहित बिदा पाउनुपर्छ र यो बिदा पैसामा साट्न पाइँदैन।"
    },
    {
      id: 7,
      cat: "2.1.2 労働安全衛生法：安全衛生旗と労災原因 (p.11-12)",
      q: "<ruby>労働安全衛生法<rt>ろうどうあんぜんえいせいほう</rt></ruby>および <ruby>建設業<rt>けんせつぎょう</rt></ruby>の <ruby>安全対策<rt>あんぜんたいさく</rt></ruby>について、**<ruby>正<rt>ただ</rt></ruby>しいもの**は どれですか。",
      options: [
        "<ruby>建設業<rt>けんせつぎょう</rt></ruby>の<ruby>死亡災害<rt>しぼうさいがい</rt></ruby>で<ruby>最<rt>もっと</rt></ruby>も<ruby>多<rt>おお</rt></ruby>いのは「<ruby>墜落<rt>ついらく</rt></ruby>・<ruby>転落<rt>てんらく</rt></ruby>」であり、<ruby>幅<rt>はば</rt></ruby>40cm<ruby>以上<rt>いじょう</rt></ruby>の<ruby>作業床<rt>さぎょうゆか</rt></ruby>やフルハーネス<ruby>型<rt>がた</rt></ruby>の<ruby>使用<rt>しよう</rt></ruby>が<ruby>原則<rt>げんそく</rt></ruby>とされている。",
        "<ruby>現場<rt>げんば</rt></ruby>に<ruby>掲<rt>かか</rt></ruby>げる「<ruby>安全衛生旗<rt>あんぜんえいせいき</rt></ruby>」は<ruby>単<rt>たん</rt></ruby>なる<ruby>飾<rt>かざ</rt></ruby>りであり、<ruby>安全管理<rt>あんぜんかんり</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>はない。",
        "<ruby>夏<rt>なつ</rt></ruby>の<ruby>熱中症<rt>ねっちゅうしょう</rt></ruby><ruby>予防<rt>よぼう</rt></ruby>のために、<ruby>作業員<rt>さぎょういん</rt></ruby>に<ruby>水<rt>みず</rt></ruby>や<ruby>塩飴<rt>しおあめ</rt></ruby>を<ruby>与<rt>あた</rt></ruby>えることは<ruby>禁止<rt>きんし</rt></ruby>されている。",
        "<ruby>高所作業<rt>こうしょさぎょう</rt></ruby>では、<ruby>安全帯<rt>あんぜんたい</rt></ruby>を<ruby>使<rt>つか</rt></ruby>わずに<ruby>手<rt>て</rt></ruby>すりだけに<ruby>頼<rt>たよ</rt></ruby>って<ruby>作業<rt>さぎょう</rt></ruby>するのが<ruby>基本<rt>きほん</rt></ruby>である。"
      ],
      answer: 0,
      hintId: "Penyebab kematian tertinggi di konstruksi adalah 'Jatuh/Terjatuh', wajib lantai kerja min 40cm dan full-harness.",
      hintNe: "निर्माण क्षेत्रमा मृत्युको सबैभन्दा ठूलो कारण 'खस्नु/लड्नु' हो। कम्तीमा ४० सेमीको कार्यथलो र फुल-हार्नेस अनिवार्य हुन्छ।",
      expJa: "建設業の死亡災害は「墜落・転落」が圧倒的に多く、幅40cm以上の作業床やフルハーネス型の原則使用が義務付けられています（テキストp.11-12）。",
      expId: "Kecelakaan jatuh/terpeleset mendominasi fatalitas di konstruksi. Lantai kerja min 40 cm dan full harness diwajibkan secara hukum.",
      expNe: "निर्माणमा हुने मृत्युमध्ये लडेर हुने दुर्घटना सबैभन्दा धेरै हुन्छ, त्यसैले फुल-हार्नेस सेफ्टी बेल्ट लगाउनु अनिवार्य छ।"
    },
    {
      id: 8,
      cat: "2.1.3 最低賃金法 (p.13)",
      q: "「<ruby>最低賃金法<rt>さいていちんぎんほう</rt></ruby>」についての **<ruby>正<rt>ただ</rt></ruby>しい<ruby>説明<rt>せつめい</rt></ruby>**は どれですか。",
      options: [
        "<ruby>物価<rt>ぶっか</rt></ruby>や<ruby>賃金水準<rt>ちんぎんすいじゅん</rt></ruby>をふまえ、<ruby>都道府県単位<rt>とどうふけんたんい</rt></ruby>で「<ruby>地域別最低賃金<rt>ちいきべつさいていちんぎん</rt></ruby>」が<ruby>決<rt>き</rt></ruby>められており、すべての<ruby>雇用労働者<rt>こようろうどうしゃ</rt></ruby>に<ruby>適用<rt>てきよう</rt></ruby>される。",
        "<ruby>外国人<rt>がいこくじん</rt></ruby>の<ruby>技能実習生<rt>ぎのうじっしゅうせい</rt></ruby>や<ruby>特定技能者<rt>とくていぎのうしゃ</rt></ruby>には、<ruby>最低賃金<rt>さいていちんぎん</rt></ruby>より<ruby>低<rt>ひく</rt></ruby>い<ruby>給料<rt>きゅうりょう</rt></ruby>を<ruby>支払<rt>しはら</rt></ruby>っても<ruby>罰則<rt>ばっそく</rt></ruby>はない。",
        "<ruby>最低賃金<rt>さいていちんぎん</rt></ruby>の<ruby>金額<rt>きんがく</rt></ruby>は、<ruby>全国<rt>ぜんこく</rt></ruby>どこの<ruby>県<rt>けん</rt></ruby>でも<ruby>全<rt>まった</rt></ruby>く<ruby>同<rt>おな</rt></ruby>じ1つの<ruby>金額<rt>きんがく</rt></ruby>に<ruby>統一<rt>とういつ</rt></ruby>されている。",
        "<ruby>会社<rt>かいしゃ</rt></ruby>が「<ruby>赤字<rt>あかじ</rt></ruby>だから」と<ruby>言<rt>い</rt></ruby>えば、<ruby>最低賃金<rt>さいていちんぎん</rt></ruby>を<ruby>下回<rt>したまわ</rt></ruby>る<ruby>給料<rt>きゅうりょう</rt></ruby>に<ruby>引<rt>ひ</rt></ruby>き<ruby>下<rt>さ</rt></ruby>げることができる。"
      ],
      answer: 0,
      hintId: "Upah minimum ditetapkan per prefektur dan berlaku untuk semua pekerja tanpa terkecuali, melanggar akan dikenai sanksi pidana.",
      hintNe: "न्यूनतम ज्याला प्रिफेक्चर अनुसार तोकिएको हुन्छ र विदेशी लगायत सबै श्रमिकलाई अनिवार्य लागु हुन्छ।",
      expJa: "最低賃金は都道府県単位で定められ、雇用形態や職種、国籍に関係なく適用されます。下回る場合は罰則規定があります（テキストp.13）。",
      expId: "Upah minimum ditetapkan berdasarkan wilayah prefektur dan wajib dipatuhi oleh seluruh pengusaha.",
      expNe: "न्यूनतम ज्याला प्रिफेक्चर अनुसार फरक हुन्छ र यो भन्दा कम तलब दिनु गैरकानुनी हो।"
    },
    {
      id: 9,
      cat: "2.1.4 労働者災害補償保険法 (労災保険) (p.13-14)",
      q: "「<ruby>労災保険<rt>ろうさいほけん</rt></ruby>」についての **<ruby>正<rt>ただ</rt></ruby>しいもの**は どれですか。",
      options: [
        "<ruby>業務災害<rt>ぎょうむさいがい</rt></ruby>だけでなく<ruby>通勤災害<rt>つうきんさいがい</rt></ruby>も<ruby>対象<rt>たいしょう</rt></ruby>となり、<ruby>保険料<rt>ほけんりょう</rt></ruby>は「<ruby>全額事業主<rt>ぜんがくじぎょうぬし</rt></ruby>の<ruby>負担<rt>ふたん</rt></ruby>」であり、<ruby>労災<rt>ろうさい</rt></ruby>を<ruby>隠<rt>かく</rt></ruby>す「<ruby>労災<rt>ろうさい</rt></ruby>かくし」は<ruby>犯罪<rt>はんざい</rt></ruby>である。",
        "<ruby>労災保険<rt>ろうさいほけん</rt></ruby>の<ruby>保険料<rt>ほけんりょう</rt></ruby>は、<ruby>毎月<rt>まいつき</rt></ruby><ruby>全額<rt>ぜんがく</rt></ruby>を<ruby>労働者<rt>ろうどうしゃ</rt></ruby>の<ruby>給料<rt>きゅうりょう</rt></ruby>から<ruby>天引き<rt>てんびき</rt></ruby>して<ruby>集<rt>あつ</rt></ruby>めなければならない。",
        "<ruby>現場<rt>げんば</rt></ruby>でケガをした<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>元請<rt>もとうけ</rt></ruby>に<ruby>迷惑<rt>めいわく</rt></ruby>がかかるので<ruby>健康保険<rt>けんこうほけん</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>病院<rt>びょういん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くのが<ruby>正<rt>ただ</rt></ruby>しい。",
        "<ruby>一人親方<rt>ひとりおやかた</rt></ruby>や<ruby>中小企業<rt>ちゅうしょうきぎょう</rt></ruby>の<ruby>事業主<rt>じぎょうぬし</rt></ruby>は、どんな<ruby>場合<rt>ばあい</rt></ruby>でも<ruby>労災保険<rt>ろうさいほけん</rt></ruby>には<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>加入<rt>かにゅう</rt></ruby>できない。"
      ],
      answer: 0,
      hintId: "Premi Rousai ditanggung 100% oleh pengusaha. Menyembunyikan kecelakaan kerja adalah tindak kejahatan pidana!",
      hintNe: "रोउसाइ बिमाको प्रिमियम शतप्रतिशत कम्पनीले तिर्छ। दुर्घटना लुकाउनु कानुनी अपराध हो।",
      expJa: "労災保険の保険料は全額事業主負担です。事故を隠す「労災かくし」は犯罪です。一人親方には特別加入制度があります（テキストp.13-14）。",
      expId: "Premi asuransi kecelakaan kerja dibayar penuh oleh perusahaan. Menyembunyikan insiden kecelakaan kerja dilarang keras.",
      expNe: "रोउसाइ बिमा प्रिमियम पूरै कम्पनीले तिर्छ। दुर्घटना भएमा ढाकछोप नगरी अनिवार्य रिपोर्ट गर्नुपर्छ।"
    },
    {
      id: 10,
      cat: "2.1.5〜2.1.7 雇用保険・建設雇用改善計画・能力開発 (p.15-17)",
      q: "<ruby>雇用保険<rt>こようほけん</rt></ruby>や <ruby>技能検定<rt>ぎのうけんてい</rt></ruby>について、**<ruby>正<rt>ただ</rt></ruby>しいもの**は どれですか。",
      options: [
        "<ruby>特定技能外国人<rt>とくていぎのうがいこくじん</rt></ruby>も<ruby>雇用保険<rt>こようほけん</rt></ruby>の<ruby>給付<rt>きゅうふ</rt></ruby>を<ruby>受<rt>う</rt></ruby>けることができ、<ruby>国<rt>くに</rt></ruby>の「<ruby>技能検定<rt>ぎのうけんてい</rt></ruby>」に<ruby>合格<rt>ごうかく</rt></ruby>すると「<ruby>技能士<rt>ぎのうし</rt></ruby>」と<ruby>名乗<rt>なの</rt></ruby>ることができる。",
        "<ruby>外国人<rt>がいこくじん</rt></ruby>が<ruby>失業<rt>しつぎょう</rt></ruby>したときは、その<ruby>日<rt>ひ</rt></ruby>のうちに<ruby>必<rt>かなら</rt></ruby>ず<ruby>母国<rt>ぼこく</rt></ruby>へ<ruby>強制帰国<rt>きょうせいきこく</rt></ruby>しなければならない。",
        "<ruby>雇用保険<rt>こようほけん</rt></ruby>は<ruby>日本人<rt>にほんじん</rt></ruby>だけが<ruby>加入<rt>かにゅう</rt></ruby>でき、<ruby>外国人<rt>がいこくじん</rt></ruby>は<ruby>加入<rt>かにゅう</rt></ruby>することが<ruby>禁止<rt>きんし</rt></ruby>されている。",
        "<ruby>建設業<rt>けんせつぎょう</rt></ruby>では<ruby>若者<rt>わかもの</rt></ruby>や<ruby>外国人<rt>がいこくじん</rt></ruby>の<ruby>育成<rt>いくせい</rt></ruby>のために<ruby>職業訓練<rt>しょくぎょうくんれん</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>ってはならないと<ruby>定<rt>さだ</rt></ruby>められている。"
      ],
      answer: 0,
      hintId: "Pekerja asing Tokutei Ginou berhak atas tunjangan asuransi pengangguran, dan lulus ujian keterampilan berhak bergelar Ginoushi.",
      hintNe: "तोकुतेइ गिनौ कामदारले पनि बेरोजगारी बिमा सुविधा पाउँछन् र सीप परीक्षा पास गरेमा 'गिनौशी' को उपाधि पाउँछन्।",
      expJa: "特定技能外国人も失業時に給付を受けることが可能です。技能検定に合格すると「技能士」と名乗ることができます（テキストp.15-17）。",
      expId: "Pekerja asing berhak atas manfaat asuransi pengangguran dan sertifikasi negara Ginoushi setelah lulus uji kompetensi.",
      expNe: "विदेशी कामदारले पनि काम छुटेमा बेरोजगारी भत्ता पाउने अधिकार हुन्छ र सीप परीक्षा उत्तीर्ण भएपछि राष्ट्रिय प्रमाणपत्र पाइन्छ।"
    }
  ]
};
