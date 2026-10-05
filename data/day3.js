const CURRENT_QUIZ_DATA = {
  key: "score_gakka1_3",
  passScore: 70,
  title: "📗 Day 3：建設業法・品質管理・作業手順書（公式試験準拠）",
  questions: [
    {
      q: "<ruby>建設業法<rt>けんせつぎょうほう</rt></ruby>に<ruby>基<rt>づ</rt></ruby>づき、<ruby>適正<rt>てきせい</rt></ruby>な<ruby>施工<rt>せこう</rt></ruby>を<ruby>確保<rt>かくほ</rt></ruby>するために<ruby>工事現場<rt>こうじげんば</rt></ruby>に<ruby>配置<rt>はいち</rt></ruby>しなければならない「<ruby>技術者<rt>ぎじゅつしゃ</rt></ruby>」はどれですか。",
      q_id: "Berdasarkan Undang-Undang Industri Konstruksi, siapa insinyur yang harus dipekerjakan untuk memastikan pelaksanaan konstruksi yang sesuai?",
      q_ne: "निर्माण उद्योग कानून अनुसार, निर्माण कार्य ठीकसँग सम्पन्न भएको सुनिश्चित गर्न साइटमा खटाउनुपर्ने 'इन्जिनियर (प्राविधिक)' को हुन्?",
      cat: "第3章 建設業法",
      options: [
        {
          ja: "<ruby>監理技術者<rt>かんりぎじゅつしゃ</rt></ruby>・<ruby>主任技術者<rt>しゅにんぎじゅつしゃ</rt></ruby>",
          id: "Insinyur pengelola, insinyur utama.",
          ne: "सुपरिवेक्षण इन्जिनियर (監理技術者), मुख्य इन्जिनियर (主任技術者)।"
        },
        {
          ja: "<ruby>現場代理人<rt>げんばだいりにん</rt></ruby>",
          id: "Agen lapangan.",
          ne: "कार्यस्थल प्रतिनिधि (साइट एजेन्ट)।"
        },
        {
          ja: "<ruby>安全衛生責任者<rt>あんぜんえいせいせきにんしゃ</rt></ruby>",
          id: "Penanggung jawab keselamatan dan kesehatan.",
          ne: "सुरक्षा तथा स्वास्थ्य जिम्मेवार व्यक्ति।"
        },
        {
          ja: "<ruby>職長<rt>しょくちょう</rt></ruby>",
          id: "Mandor.",
          ne: "फोरम्यान (टोली प्रमुख)।"
        }
      ],
      answer: 0,
      expJa: "建設業法第26条により、建設業者は工事現場における施工の技術上の管理をつかさどる者として、主任技術者または監理技術者を配置しなければなりません。",
      expId: "Berdasarkan UU Industri Konstruksi, kontraktor wajib menempatkan insinyur utama atau insinyur pengelola di lokasi proyek untuk mengelola teknik konstruksi.",
      expNe: "निर्माण उद्योग ऐन अनुसार, निर्माण कार्यको प्राविधिक व्यवस्थापनका लागि मुख्य इन्जिनियर वा सुपरिवेक्षण इन्जिनियर खटाउनु अनिवार्य छ।"
    },
    {
      q: "<ruby>建設現場<rt>けんせつげんば</rt></ruby>のことわざである「<ruby>段取<rt>だんど</rt></ruby>り<ruby>八分<rt>はちぶ</rt></ruby>、<ruby>仕事<rt>しごと</rt></ruby><ruby>二分<rt>にぶ</rt></ruby>」の**<ruby>正<rt>ただ</rt></ruby>しい<ruby>意味<rt>いみ</rt></ruby>**はどれですか。",
      q_id: "Pilih jawaban yang tepat untuk arti dari pepatah '8 bagian untuk persiapan, 2 bagian untuk bekerja'.",
      q_ne: "'तयारी ८ भाग, काम २ भाग (段取り八分、仕事二分)' भन्ने भनाइको सही अर्थ कुन हो?",
      cat: "第3章 工程管理・段取り",
      options: [
        {
          ja: "<ruby>仕事<rt>しごと</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>める<ruby>前<rt>まえ</rt></ruby>の「<ruby>事前<rt>じぜん</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>・<ruby>計画<rt>けいかく</rt></ruby>」が極めて<ruby>重要<rt>じゅうよう</rt></ruby>であるということ。",
          id: "Persiapan sebelum memulai bekerja itu penting.",
          ne: "काम सुरु गर्नु अघिको 'तयारी र योजना' अत्यन्तै महत्त्वपूर्ण हुन्छ भन्ने कुरा।"
        },
        {
          ja: "<ruby>作業<rt>さぎょう</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>は8<ruby>分間<rt>ふんかん</rt></ruby>で<ruby>手早<rt>てばや</rt></ruby>く<ruby>終<rt>お</rt></ruby>わらせるべきだということ。",
          id: "Persiapan dapat diselesaikan dalam waktu 8 menit.",
          ne: "कामको तयारी जम्मा ८ मिनेटभित्रमा सक्नुपर्छ भन्ने कुरा।"
        },
        {
          ja: "<ruby>仕事<rt>しごと</rt></ruby>をするにあたって、<ruby>事前<rt>じぜん</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>はまったく<ruby>必要<rt>ひつよう</rt></ruby>ないということ。",
          id: "Tidak perlu persiapan untuk bekerja.",
          ne: "काम गर्नका लागि पहिलेबाट कुनै तयारी आवश्यक पर्दैन भन्ने कुरा।"
        },
        {
          ja: "<ruby>仕事<rt>しごと</rt></ruby>の<ruby>品質<rt>ひんしつ</rt></ruby>の<ruby>良<rt>よ</rt></ruby>し<ruby>悪<rt>あ</rt></ruby>しは、<ruby>準備段階<rt>じゅんびだんかい</rt></ruby>とは<ruby>関係<rt>かんけい</rt></ruby>がないということ。",
          id: "Kualitas pekerjaan Anda tidak bergantung pada tahap persiapan.",
          ne: "कामको गुणस्तर तयारीको चरणसँग कुनै सम्बन्धित हुँदैन भन्ने कुरा।"
        }
      ],
      answer: 0,
      expJa: "段取り（事前の計画・資材の手配・打ち合わせ）を8割の力でしっかり整えておけば、実際の作業（2割）は安全かつスムーズに完了するという教えです。",
      expId: "Artinya jika persiapan dan perencanaan dilakukan dengan matang (80%), maka pelaksanaan pekerjaan sebenarnya (20%) akan berjalan lancar dan sukses.",
      expNe: "यदि ८०% ध्यान तयारी, योजना र सामग्री व्यवस्थापनमा लगाइयो भने, बाँकी २०% वास्तविक काम निकै सुरक्षित र सहज रूपमा सम्पन्न हुन्छ।"
    },
    {
      q: "<ruby>現場<rt>げんば</rt></ruby>における「<ruby>品質管理<rt>ひんしつかんり</rt></ruby>」についての<ruby>説明<rt>せつめい</rt></ruby>として、**<ruby>適切<rt>てきせつ</rt></ruby>なもの**はどれですか。",
      q_id: "Pilih jawaban yang tepat mengenai kendali mutu.",
      q_ne: "साइटमा 'गुणस्तर नियन्त्रण (品質管理)' को बारेमा कुन भनाइ उपयुक्त छ?",
      cat: "第3章 品質管理",
      options: [
        {
          ja: "<ruby>設計図書<rt>せっけいとしょ</rt></ruby>の<ruby>内容<rt>ないよう</rt></ruby>について、<ruby>発注者<rt>はっちゅうしゃ</rt></ruby>や<ruby>設計者<rt>せっけいしゃ</rt></ruby>から<ruby>事前<rt>じぜん</rt></ruby>にしっかり<ruby>説明<rt>せつめい</rt></ruby>を<ruby>受<rt>う</rt></ruby>けて<ruby>理解<rt>りかい</rt></ruby>する。",
          id: "Menerima penjelasan dari pemesan dan desainer mengenai isi buku desain.",
          ne: "डिजाइन नक्साको विवरणबारे अर्डरकर्ता र डिजाइनरबाट पहिले नै राम्रोसँग स्पष्टीकरण लिएर बुझ्ने।"
        },
        {
          ja: "<ruby>工事完了後<rt>こうじかんりょうご</rt></ruby>に<ruby>見<rt>み</rt></ruby>えなくなってしまう<ruby>部分<rt>ぶぶん</rt></ruby>（<ruby>隠ぺい部<rt>いんぺいぶ</rt></ruby>）は、<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>る<ruby>必要<rt>ひつよう</rt></ruby>がない。",
          id: "Tidak perlu mengambil foto bagian konstruksi yang tidak akan terlihat setelah selesai.",
          ne: "काम सकिएपछि नदेखिने भागहरू (लुक्ने भाग) को फोटो खिच्न आवश्यक छैन।"
        },
        {
          ja: "<ruby>作業員<rt>さぎょういん</rt></ruby>にコツや<ruby>注意点<rt>ちゅういてん</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えず、<ruby>見<rt>み</rt></ruby>て<ruby>覚<rt>おぼ</rt></ruby>えさせるようにする。",
          id: "Tidak memberitahukan kiat kepada pekerja dan membiarkan mereka belajar dengan melihat sendiri.",
          ne: "कामदारहरूलाई कुनै सुझाव वा तरिका नसिकाई हेरेर मात्र सिक्न दिने।"
        },
        {
          ja: "<ruby>施工不良<rt>せこうふりょう</rt></ruby>や<ruby>欠陥<rt>けっかん</rt></ruby>が<ruby>発生<rt>はっせい</rt></ruby>したときは、<ruby>現地<rt>げんち</rt></ruby>の<ruby>実物<rt>じつぶつ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>せず<ruby>経験<rt>けいけん</rt></ruby>だけで<ruby>判断<rt>はんだん</rt></ruby>する。",
          id: "Jika terjadi cacat, menilai berdasarkan pengalaman daripada melihat benda aktual setempat.",
          ne: "कुनै खराबी आएमा वास्तविक ठाउँ र वस्तु नहेरी केवल आफ्नो पुरानो अनुभवको आधारमा निर्णय गर्ने।"
        }
      ],
      answer: 0,
      expJa: "品質管理の第一歩は、設計図書を正確に把握することです。隠ぺい部の施工写真は必須であり、問題発生時は必ず現地・現物を確認します。",
      expId: "Langkah pertama kendali mutu adalah memahami desain dari pemilik dan perancang. Bagian yang tertutup wajib difoto, dan jika ada cacat harus cek langsung barang aslinya.",
      expNe: "गुणस्तर नियन्त्रणको पहिलो कदम भनेको डिजाइन नक्सालाई पूर्ण रूपमा बुझ्नु हो। पछि नदेखिने भागहरूको फोटो प्रमाण राख्नु अनिवार्य हुन्छ।"
    },
    {
      q: "<ruby>誰<rt>だれ</rt></ruby>にでも<ruby>分<rt>わ</rt></ruby>かりやすい「<ruby>作業手順書<rt>さぎょうてじゅんしょ</rt></ruby>」を<ruby>作成<rt>さくせい</rt></ruby>する<ruby>際<rt>さい</rt></ruby>の<ruby>注意点<rt>ちゅういてん</rt></ruby>として、**<ruby>適切<rt>てきせつ</rt></ruby>でないもの**はどれですか。",
      q_id: "Pilih jawaban yang tidak tepat mengenai hal yang perlu dipertimbangkan saat membuat petunjuk prosedur kerja yang mudah dipahami.",
      q_ne: "सबैले सजिलै बुझ्ने 'कार्यविधि निर्देशिका (作業手順書)' बनाउँदा ध्यान दिनुपर्ने कुराहरूमा कुन भनाइ गलत छ?",
      cat: "第3章 作業手順書",
      options: [
        {
          ja: "<ruby>誰<rt>だれ</rt></ruby>でもできるような「<ruby>簡単<rt>かんたん</rt></ruby>な<ruby>作業<rt>さぎょう</rt></ruby>」については、<ruby>説明<rt>せつめい</rt></ruby>をすべて<ruby>省略<rt>しょうりゃく</rt></ruby>して<ruby>書<rt>か</rt></ruby>かない。",
          id: "Mengabaikan tugas yang mudah.",
          ne: "सजिलो कामहरूलाई बेवास्ता गरी निर्देशिकामा लेख्दै नलेख्ने।"
        },
        {
          ja: "<ruby>長文<rt>ちょうぶん</rt></ruby>を<ruby>避<rt>さ</rt></ruby>け、<ruby>簡潔<rt>かんけつ</rt></ruby>でわかりやすい<ruby>表現<rt>ひょうげん</rt></ruby>で<ruby>書<rt>か</rt></ruby>く。",
          id: "Menulis dengan singkat dan jelas.",
          ne: "लामो वाक्य नलेखी छोटो र स्पष्ट भाषामा लेख्ने।"
        },
        {
          ja: "<ruby>危険<rt>きけん</rt></ruby>が<ruby>予想<rt>よそう</rt></ruby>される<ruby>作業<rt>さぎょう</rt></ruby>には、<ruby>安全上<rt>あんぜんじょう</rt></ruby>の<ruby>注意事項<rt>ちゅういじこう</rt></ruby>をしっかりと<ruby>記載<rt>きさい</rt></ruby>する。",
          id: "Menulis catatan untuk pekerjaan yang diperkirakan berbahaya.",
          ne: "जोखिम हुनसक्ने कामका लागि सुरक्षा सम्बन्धी विशेष निर्देशनहरू प्रष्ट लेख्ने।"
        },
        {
          ja: "なぜその<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>うのかという「<ruby>理由<rt>りゆう</rt>・<ruby>目的<rt>もくてき</rt></ruby>」もあわせて<ruby>記載<rt>きさい</rt></ruby>する。",
          id: "Menulis alasan mengapa tugas tersebut perlu dilakukan.",
          ne: "त्यो काम किन गर्नुपरेको हो भन्ने 'कारण र उद्देश्य' पनि सँगै खुलाउने।"
        }
      ],
      answer: 0,
      expJa: "簡単な作業だと思い込んで手順書から省略すると、経験の浅い作業員が思わぬミスや事故を起こす原因になります。基本手順こそ抜け漏れなく記載します。",
      expId: "Mengabaikan langkah mudah adalah kesalahan, karena pekerja baru bisa mengalami kecelakaan dari hal sepele. Semua langkah dasar harus ditulis jelas.",
      expNe: "सजिलो काम ठानेर लेख्न छोड्दा नयाँ कामदारले त्यहीँबाट गल्ती वा दुर्घटना निम्त्याउन सक्छन्। त्यसैले सबै प्रक्रिया खुलाउनुपर्छ।"
    }
  ]
};
