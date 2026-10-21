const CURRENT_QUIZ_DATA = {
  title: "Day 26：<ruby>職長<rt>しょくちょう</rt></ruby>としての<ruby>図面<rt>ずめん</rt></ruby>・<ruby>施工図<rt>せこうず</rt></ruby>のとらえ<ruby>方<rt>かた</rt></ruby>（テキスト P.105〜115）",
  key: "score_gakka4_26",
  passScore: 70,
  questions: [
    {
      cat: "第4章 設計図書の役割（P.105）",
      q: "建設分野における「**設計図書（せっけいとしょ）**」の役割として、最も適切なものはどれですか。",
      q_id: "Manakah peran yang PALING TEPAT dari 'Dokumen Desain / Gambar Kontrak' (Sekkei Tosho) dalam proyek konstruksi?",
      q_ne: "निर्माण क्षेत्रमा 'डिजाइन कागजात तथा नक्सा (सेक्केइ तोश्यो)' को मुख्य भूमिका कुन हो?",
      options: [
        { ja: "設計者が想定した完成物の形状・機能・性能を明確に示し、お客様が求める品質を実現するための基準となるもの", id: "Menunjukkan secara jelas bentuk, fungsi, dan mutu bangunan rencana arsitek untuk mewujudkan standar kualitas yang diinginkan klien", ne: "इन्जिनियरले सोचेको भवनको आकार, कार्यक्षमता र गुणस्तर स्पष्ट पारी ग्राहकले चाहेको गुणस्तर प्राप्त गर्ने आधार" },
        { ja: "工事がすべて完了した後に、記念品として現場事務所に飾るためのポスター", id: "Poster kenang-kenangan yang dipajang di kantor proyek setelah pekerjaan selesai", ne: "काम सकिएपछि सम्झनाको लागि अफिसमा झुन्ड्याइने पोस्टर" },
        { ja: "職長が作業員の毎日の出勤確認を取るための出席名簿", id: "Buku absensi mandor untuk mendata kehadiran harian para pekerja", ne: "कामदारको दैनिक हाजिरी रेकर्ड राख्ने कापी" },
        { ja: "施工会社が自由に材料の寸法を変更して安く済ませるための下書き用紙", id: "Kertas corat-coret kontraktor untuk mengubah dimensi seenaknya demi menghemat biaya", ne: "खर्च घटाउन कम्पनीले आफ्नै मनखुसीले नाप बदल्न बनाइएको कच्चा कागज" }
      ],
      answer: 0,
      expJa: "【テキスト P.105参照】設計図書には設計者が意図した完成物の形状・機能・性能が明確に示されており、これに基づいて施工することで求められる品質の建築物を実現します。",
      expId: "Sekkei Tosho adalah acuan resmi yang memuat bentuk, fungsi, dan spesifikasi dari arsitek untuk mencapai kualitas pesanan klien.",
      expNe: "डिजाइन कागजातले भवनको आकार, प्रकार र गुणस्तर तोक्दछ। यसैको आधारमा काम गरेर मात्र सही गुणस्तरको भवन बन्दछ।"
    },
    {
      cat: "第4章 設計図書の種類（P.105〜108）",
      q: "建物の間取り、部屋の配置、外観デザイン、仕上げ材料などが示されている「**意匠図（いしょうず）**」に該当する図面はどれですか。",
      q_id: "Manakah lembar gambar yang termasuk dalam kategori 'Gambar Arsitektur' (Ishouzu: denah tata ruang, fasad luar, dan finishing)?",
      q_ne: "कोठाहरूको बनावट, बाहिरी रूप र फिनिसिङका सामग्रीहरू देखाइएको 'आर्किटेक्चरल नक्सा (इशौजु)' मा पर्ने कुन हो?",
      options: [
        { ja: "平面図（間取り図）・立面図（外観図）・断面図", id: "Denah Lantai (Heimen-zu), Tampak Luar (Ritsumen-zu), dan Potongan (Danmen-zu)", ne: "फ्लोर प्लान (हेइमेन-जु), बाहिरी दृश्य (रित्सुमेन-जु), र सेक्सन काटिएको दृश्य (दानमेन-जु)" },
        { ja: "配筋図・鉄骨詳細図・基礎伏図", id: "Gambar Pembesian, Detail Baja, dan Denah Balok Pondasi", ne: "रडको नक्सा, स्टिलको नक्सा, र जगको नक्सा" },
        { ja: "給排水衛生配管図・単線結線図・空調ダクト図", id: "Gambar Pemipaan Air Limbah, Diagram Kabel Listrik, dan Saluran AC", ne: "पानीको पाइप, बिजुलीको तार र एसीको नक्सा" },
        { ja: "避難経路図・現場事務所配置図・駐車場図面", id: "Denah Jalur Evakuasi, Tata Letak Kantor Proyek, dan Parkiran", ne: "भाग्ने बाटोको नक्सा र पार्किङको नक्सा" }
      ],
      answer: 0,
      expJa: "【テキスト P.105〜107参照】意匠図は意匠（デザインや間取り・仕上げ）を表す図面で、平面図、立面図、断面図、展開図、天井伏図などが含まれます。柱や梁の鉄筋構造は「構造図」です。",
      expId: "Ishouzu (Gambar Arsitektur) mencakup denah lantai (heimen-zu), tampak depan/samping (ritsumen-zu), dan potongan (danmen-zu).",
      expNe: "'इशौजु' भन्नाले कोठाको साइज, ढोका-झ्याल, बाहिरी दृश्य र फिनिसिङ देखाउने नक्सा हो (जस्तै फ्लोर प्लान, साइड भ्यु आदि)।"
    },
    {
      cat: "第4章 構造図の役割（P.106）",
      q: "建物の骨組みの安全性や強度を確保するため、**基礎・柱・梁・床・壁などの鉄筋の太さや配筋方法、鉄骨の接合などが記載された図面**は何ですか。",
      q_id: "Apa nama gambar teknis yang memuat detail kekuatan struktur seperti ukuran/jarak besi tulangan, pelat beton, kolom, dan balok rangka?",
      q_ne: "भवनको जग, पिलर, बिम, ढलान आदिमा प्रयोग हुने रडको मोटाइ, बिछ्याउने तरिका र बलियोपन देखाउने नक्सालाई के भनिन्छ?",
      options: [
        { ja: "構造図（こうぞうず）", id: "Gambar Struktur (Kouzou-zu)", ne: "संरचनात्मक नक्सा (कोउजौ-जु / स्ट्रक्चरल ड्रइङ)" },
        { ja: "意匠図（いしょうず）", id: "Gambar Arsitektur (Ishou-zu)", ne: "आर्किटेक्चरल नक्सा" },
        { ja: "設備図（せつびず）", id: "Gambar MEP / Utilitas (Setsubi-zu)", ne: "उपकरण/पाइपिङ नक्सा" },
        { ja: "外構図（がいこうず）", id: "Gambar Lanskap Eksterior (Gaikou-zu)", ne: "बाहिरी कम्पाउन्ड नक्सा" }
      ],
      answer: 0,
      expJa: "【テキスト P.106参照】建物の骨組みの構造強度を示す図面を「構造図」と呼びます。基礎伏図、各階梁伏図、柱・梁・壁・床の配筋リスト、鉄骨詳細図などが含まれます。",
      expId: "Kouzouzu (Gambar Struktur) adalah gambar teknik yang mengatur pembesian beton, pilar, bal
