const CURRENT_QUIZ_DATA = {
  key: "score_gakka1_4",
  passScore: 70,
  title: "📗 Day 4：原価管理・安全服装・国家資格（公式試験準拠）",
  questions: [
    {
      q: "<ruby>建設業<rt>けんせつぎょう</rt></ruby>における「<ruby>工事費<rt>こうじひ</rt></ruby>」のうち、「<ruby>労務費<rt>ろうむひ</rt></ruby>」についての<ruby>説明<rt>せつめい</rt></ruby>として**<ruby>最<rt>もっと</rt></ruby>も<ruby>適切<rt>てきせつ</rt></ruby>なもの**はどれですか。",
      q_id: "Manakah dari berikut ini yang menggambarkan 'biaya tenaga kerja' sebagai biaya konstruksi dalam industri konstruksi?",
      q_ne: "निर्माण उद्योगमा 'निर्माण खर्च' अन्तर्गत 'श्रम लागत (労務費)' को बारेमा सबैभन्दा उपयुक्त भनाइ कुन हो?",
      cat: "第4章 原価管理・コスト",
      options: [
        {
          ja: "<ruby>工事<rt>こうじ</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>直接行<rt>ちょくせつおこな</rt></ruby>う<ruby>作業員<rt>さぎょういん</rt></ruby>に<ruby>支払<rt>しはら</rt></ruby>うための<ruby>人件費<rt>じんけんひ</rt></ruby>。",
          id: "Biaya tenaga kerja bagi pekerja yang melakukan pekerjaan konstruksi.",
          ne: "निर्माण कार्य प्रत्यक्ष रूपमा गर्ने कामदारहरूलाई भुक्तानी गरिने ज्याला वा श्रम खर्च।"
        },
        {
          ja: "<ruby>工事<rt>こうじ</rt></ruby>に<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>資材<rt>しざい</rt></ruby>や<ruby>道具<rt>どうぐ</rt></ruby>を<ruby>購入<rt>こうにゅう</rt></ruby>するための<ruby>費用<rt>ひよう</rt></ruby>。",
          id: "Biaya pembelian barang-barang yang diperlukan untuk konstruksi.",
          ne: "निर्माणका लागि आवश्यक सामग्री र औजार खरिद गर्न लाग्ने खर्च।"
        },
        {
          ja: "<ruby>工事<rt>こうじ</rt></ruby>の<ruby>一部<rt>いちぶ</rt></ruby>の<ruby>工程<rt>こうてい</rt></ruby>を、<ruby>他<rt>ほか</rt></ruby>の<ruby>専門会社<rt>せんもんがいしゃ</rt></ruby>に<ruby>外注<rt>がいちゅう</rt></ruby>するための<ruby>費用<rt>ひよう</rt></ruby>。",
          id: "Biaya alih daya sebagian proses kepada kontraktor lain.",
          ne: "कामको केही भाग अन्य विशेषज्ञ कम्पनीलाई ठेक्का (आउटसोर्स) दिन लाग्ने खर्च।"
        },
        {
          ja: "<ruby>現場<rt>げんば</rt></ruby>で<ruby>使<rt>つか</rt></ruby>うトラックや<ruby>重機<rt>じゅうき</rt></ruby>などの<ruby>車両<rt>しゃりょう</rt></ruby>を<ruby>購入<rt>こうにゅう</rt></ruby>するための<ruby>費用<rt>ひよう</rt></ruby>。",
          id: "Biaya pembelian kendaraan kerja.",
          ne: "साइटमा प्रयोग हुने गाडी तथा हेभी मेसिनरी किन्न लाग्ने खर्च।"
        }
      ],
      answer: 0,
      expJa: "労務費とは、工事施工に直接従事する技能労働者に対する賃金手当（人件費）を指します。資材の購入は材料費、外注は外注費、車両等は機械経費となります。",
      expId: "Biaya tenaga kerja (労務費) adalah upah langsung untuk para tukang/pekerja di lokasi proyek. Pembelian barang disebut biaya material.",
      expNe: "श्रम लागत भनेको साइटमा वास्तविक निर्माण कार्य गर्ने कामदारहरूको तलब तथा ज्याला हो।"
    },
    {
      q: "<ruby>国<rt>くに</rt></ruby>が<ruby>技能<rt>ぎのう</rt></ruby>の<ruby>習得<rt>しゅうとく</rt></ruby>レベル（1<ruby>級<rt>きゅう</rt></ruby>・2<ruby>級<rt>きゅう</rt></ruby>・3<ruby>級<rt>きゅう</rt></ruby>など）を<ruby>検定<rt>けんてい</rt></ruby>して<ruby>証明<rt>しょうめい</rt></ruby>する「<ruby>技能検定制度<rt>ぎのうけんていせいど</rt></ruby>」に<ruby>合格<rt>ごうかく</rt></ruby>した<ruby>人<rt>ひと</rt></ruby>は、**<ruby>何<rt>なん</rt></ruby>という<ruby>称号<rt>しょうごう</rt></ruby>**を<ruby>名乗<rt>なの</rt></ruby>ることができますか。",
      q_id: "Ada sistem ujian keterampilan di mana tingkat 1, 2, dan 3 disertifikasi oleh pemerintah. Sebutan apa yang dapat digunakan seseorang yang lulus ujian keterampilan?",
      q_ne: "सरकारले दक्षता स्तर (तह १, तह २, तह ३) प्रमाणित गर्ने 'दक्षता परीक्षा (技能検定)' उत्तीर्ण गरेको व्यक्तिले कुन पदवी प्रयोग गर्न पाउँछ?",
      cat: "第4章 資格・制度",
      options: [
        {
          ja: "<ruby>技能士<rt>ぎのうし</rt></ruby>",
          id: "Teknisi terampil.",
          ne: "प्रमाणित प्राविधिक / दक्ष कालीगढ (技能士)।"
        },
        {
          ja: "<ruby>技術士<rt>ぎじゅつし</rt></ruby>",
          id: "Insinyur profesional.",
          ne: "व्यावसायिक इन्जिनियर (Professional Engineer)।"
        },
        {
          ja: "<ruby>弁護士<rt>べんごし</rt></ruby>",
          id: "Pengacara.",
          ne: "वकिल (Lawyer)।"
        },
        {
          ja: "<ruby>司法書士<rt>しほうしょし</rt></ruby>",
          id: "Juru tulis pengadilan.",
          ne: "न्यायिक लेखक (Judicial Scrivener)।"
        }
      ],
      answer: 0,
      expJa: "働く人々の有する技能を一定の基準によって検定する国家検定制度（技能検定）に合格した者のみが「技能士」を名乗ることができます。",
      expId: "Orang yang lulus ujian evaluasi keterampilan nasional berhak menggunakan gelar resmi 'Teknisi Terampil' (技能士 - Ginoushi).",
      expNe: "राष्ट्रिय दक्षता परीक्षा उत्तीर्ण व्यक्तिले मात्र आधिकारिक रूपमा 'प्रमाणित कालीगढ (技能士)' उपाधि प्रयोग गर्न पाउँछ।"
    },
    {
      q: "<ruby>建設現場<rt>けんせつげんば</rt></ruby>に<ruby>入場<rt>にゅうじょう</rt></ruby>する<ruby>際<rt>さい</rt></ruby>の「<ruby>服装<rt>ふくそう</rt></ruby>」や「<ruby>身<rt>み</rt></ruby>だしなみ」として、**<ruby>適切<rt>てきせつ</rt></ruby>なもの**はどれですか。",
      q_id: "Pilih pakaian dan perilaku yang sesuai saat berada di lokasi konstruksi.",
      q_ne: "निर्माण साइटमा प्रवेश गर्दा अपनाउनुपर्ने 'उचित पोसाक' र व्यवहार कुन हो?",
      cat: "第4章 安全基本",
      options: [
        {
          ja: "<ruby>長袖<rt>ながそで</rt></ruby>の<ruby>作業着<rt>さぎょうぎ</rt></ruby>と<ruby>長<rt>なが</rt></ruby>ズボンをしっかりと<ruby>着用<rt>ちゃくよう</rt></ruby>する。",
          id: "Baju lengan panjang dan celana panjang.",
          ne: "लामो बाहुला भएको कार्य-कपडा र लामो सुरुवाल राम्रोसँग लगाउने।"
        },
        {
          ja: "<ruby>暑<rt>あつ</rt></ruby>いときは、<ruby>作業着<rt>さぎょうぎ</rt></ruby>の<ruby>袖<rt>そで</rt></ruby>をまくって<ruby>作業<rt>さぎょう</rt></ruby>をする。",
          id: "Menggulung lengan baju.",
          ne: "गर्मी भएको बेला कामको कपडाको बाहुला माथितिर बटारेर काम गर्ने।"
        },
        {
          ja: "<ruby>両手<rt>りょうて</rt></ruby>をズボンのポケットに<ruby>入<rt>い</rt></ruby>れたまま<ruby>現場内<rt>げんばない</rt></ruby>を<ruby>歩行<rt>ほこう</rt></ruby>する。",
          id: "Berjalan dengan tangan dimasukkan ke saku.",
          ne: "दुवै हात सुरुवालको खल्तीमा हालेर साइटभित्र हिँड्डुल गर्ने।"
        },
        {
          ja: "<ruby>上着<rt>うわぎ</rt></ruby>のボタンやファスナーを<ruby>全<rt>すべ</rt></ruby>て<ruby>開<rt>あ</rt></ruby>けっ<ruby>放<rt>ぱな</rt></ruby>しにして<ruby>風通<rt>かぜとお</rt></ruby>しをよくする。",
          id: "Membuka kancing jaket dan membiarkan terbuka di bagian depan.",
          ne: "हावा छिरोस् भनेर ज्याकेटको टाँक वा चेन पूरै खुला राख्ने।"
        }
      ],
      answer: 0,
      expJa: "現場では擦り傷・切り傷・火傷や紫外線・害虫から肌を守るため、原則として長袖・長ズボンの着用が義務付けられています。ポケットに手を入れて歩くのは転倒時に受身が取れず危険です。",
      expId: "Di lokasi kerja wajib mengenakan baju lengan panjang dan celana panjang untuk melindungi tubuh dari cedera atau benda tajam.",
      expNe: "चोटपटक, कोरिनबाट जोगिन निर्माण स्थलमा लामो बाहुला भएको कपडा र लामो सुरुवाल लगाउनु अनिवार्य छ।"
    },
    {
      q: "<ruby>建設現場<rt>けんせつげんば</rt></ruby>の「<ruby>安全管理<rt>あんぜんかんり</rt></ruby>」を<ruby>行<rt>おこな</rt></ruby>ううえで、**<ruby>最<rt>もっと</rt></ruby>も<ruby>求<rt>もと</rt></ruby>められる<ruby>能力<rt>のうりょく</rt></ruby>**はどれですか。",
      q_id: "Pilih jawaban yang paling tepat mengenai keterampilan yang dibutuhkan untuk manajemen keselamatan di lokasi konstruksi.",
      q_ne: "निर्माण साइटमा 'सुरक्षा व्यवस्थापन' गर्नका लागि सबैभन्दा बढी आवश्यक पर्ने क्षमता कुन हो?",
      cat: "第4章 安全衛生管理",
      options: [
        {
          ja: "<ruby>作業環境<rt>さぎょうかんきょう</rt></ruby>に<ruby>潜<rt>ひそ</rt></ruby>む「<ruby>危険<rt>きけん</rt></ruby>やリスク」を<ruby>発見<rt>はっけん</rt></ruby>・<ruby>察知<rt>さっち</rt></ruby>する<ruby>能力<rt>のうりょく</rt></ruby>。",
          id: "Kemampuan mengenali bahaya dan risiko.",
          ne: "कामको वातावरणमा लुकेका 'खतरा र जोखिमहरू' पहिचान गर्न सक्ने क्षमता।"
        },
        {
          ja: "<ruby>品質<rt>ひんしつ</rt></ruby>の<ruby>高<rt>たか</rt></ruby>い<ruby>工事<rt>こうじ</rt></ruby>を素早く<ruby>仕上<rt>しあ</rt></ruby>げるための<ruby>技術力<rt>ぎじゅつりょく</rt></ruby>。",
          id: "Keterampilan untuk melakukan pekerjaan berkualitas.",
          ne: "उच्च गुणस्तरको काम छिटो सक्ने प्राविधिक सीप।"
        },
        {
          ja: "<ruby>工事費用<rt>こうじひよう</rt></ruby>をできるだけ<ruby>安<rt>やす</rt></ruby>く<ruby>抑<rt>おさ</rt></ruby>えるためのコスト<ruby>感覚<rt>かんかく</rt></ruby>。",
          id: "Kesadaran biaya.",
          ne: "निर्माण खर्च जतिसक्दो कम गर्ने बजेट सम्बन्धी चेतना।"
        },
        {
          ja: "<ruby>遅<rt>おく</rt></ruby>れた<ruby>工程<rt>こうてい</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>戻<rt>もど</rt></ruby>すために、<ruby>無理<rt>むり</rt></ruby>に<ruby>作業員<rt>さぎょういん</rt></ruby>を<ruby>働<rt>はたら</rt></ruby>かせる<ruby>調整力<rt>ちょうせいりょく</rt></ruby>。",
          id: "Kemampuan untuk melakukan koordinasi untuk menebus keterlambatan proses.",
          ne: "ढिलाइ भएको तालिका मिलाउन कामदारहरूलाई जबरजस्ती खटाउने क्षमता।"
        }
      ],
      answer: 0,
      expJa: "安全管理の本質は、事故が起こる前に「不安全な状態・不安全な行動」を察知し、事前に取り除く危険予知・リスク察知能力です。",
      expId: "Kemampuan terpenting dalam manajemen keselamatan adalah kepekaan untuk mendeteksi potensi bahaya dan risiko sebelum kecelakaan terjadi.",
      expNe: "सुरक्षा व्यवस्थापनको मुख्य उद्देश्य दुर्घटना हुनु अगावै सम्भावित जोखिमको पहिचान गरी हटाउन सक्ने क्षमता हुनु हो।"
    }
  ]
};
