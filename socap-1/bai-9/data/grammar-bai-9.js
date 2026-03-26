export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 9： – Có thể chỉ cho tôi cách đọc được không ?",
    summaryList: [
      {
        label: "① Nで <Cách thức>",
        example: "アニメ「で」日本語を勉強しました。",
        vi: "Tôi đã học tiếng Nhật 「bằng (thông qua)」 Anime."
      },
      {
        label: "② N1 は N2 が Aです <br> Nは V-るのが Aです",
        example: "日本語「は」文字【もじ】「が」難しいです。<br>英語「は」話す「のが」大変です。",
        vi: "Tiếng Nhật thì「chữ viết khó」. <br> Tiếng Anh thì 「việc nói」 rất vất vả."
      },
      {
        label: "③ N1 は、～。 (でも、) N2 は、～。 <So sánh>",
        example: "日本語「は」、読むのは少し難しいです。「でも」、会話は得意【とくい】です。",
        vi: "Tiếng Nhật thì việc đọc hơi khó. Nhưng hội thoại thì tôi giỏi."
      },
      {
        label: "④ V-てもらえませんか？",
        example: "日本語をチェック「してもらえませんか？」",
        vi: "Bạn 「có thể」 kiểm tra giúp tôi tiếng Nhật được không?"
      },
      {
        label: "⑤ V-方",
        example: "この書類【しょるい】の「書き方【かた】」がよくわかりません。",
        vi: "Tôi không rõ 「cách viết」 của loại hồ sơ này."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① Nで（Cách thức / Phương tiện）",
    usage: [
      "Dùng để diễn tả 「cách thức, phương pháp」 thực hiện hành động.",
    ],
    structure: "Nで + V",
    notes: {
      points: [
        "Ở nhập môn で chỉ đi bằng phương tiện gì Vd: バスで会社に行きます (Tôi đến công ty bằng xe buýt).",
        "Có thể dùng với nhiều phương tiện/cách học: 本で (bằng sách), ラジオで (bằng radio), ネットで (bằng internet), アプリで (bằng ứng dụng), v.v.",
        "Khi hỏi về cách thức: dùng どうやって.",
      ],
      examples: [
        {
          jp: "アニメ「で」日本語を勉強しました。",
          vi: "Tôi đã học tiếng Nhật 「bằng」 phim hoạt hình."
        },
        {
          jp: "バス「で」会社に行きます。",
          vi: "Tôi đến công ty 「bằng」 xe buýt."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "どこで日本語を勉強しましたか？",
        vi: "Bạn đã học tiếng Nhật ở đâu?"
      },
      {
        speaker: "B",
        jp: "日本語学校「で」勉強しました。",
        vi: "Tôi đã học ở trường tiếng Nhật."
      },
      {
        speaker: "C",
        jp: "私はネット「で」勉強しました。",
        vi: "Tôi đã học bằng internet."
      },
      {
        speaker: "A",
        jp: "「どうやって」日本語を勉強しましたか？",
        vi: "Bạn đã học tiếng Nhật 「bằng cách nào?」"
      },
      {
        speaker: "B",
        jp: "アプリ「で」勉強しました。",
        vi: "Tôi đã học 「bằng」 ứng dụng."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② N1 は N2 が Aです <br> Nは V-るのが Aです",
    usage: [
      "Dùng để diễn tả 「đánh giá / cảm nhận」 về một đặc điểm của sự vật, sự việc.",
      "N1 là chủ đề, N2 là yếu tố được đánh giá.",
      "V-る + の biến động từ thành danh từ để làm chủ ngữ."
    ],
    structure: "N1 は N2 が ナAです / イAいです <br> N は V-るの が ナAです / イAいです",
    notes: {
      points: [
        "Cấu trúc rất hay dùng với các tính từ như: <br>難しい (khó), <br>大変 (vất vả), <br>上手 (giỏi), <br>下手（へた） (kém)...",
        "V-るの có nghĩa là “việc làm ~”."
      ],
      examples: [
        {
          jp: "「日本語」は「文字」が「難しい」です。",
          vi: "Chữ viết của tiếng Nhật khó."
        },
        {
          jp: "「日本語」は「話すのが」大変【たいへん】です。",
          vi: "Việc nói tiếng Nhật vất vả."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "日本語はどうですか？",
        vi: "Tiếng Nhật thế nào?"
      },
      {
        speaker: "B",
        jp: "「文字【もじ】」が難しいですが、面白【おもしろ】いです。",
        vi: "Chữ khó nhưng thú vị."
      },
      {
        speaker: "A",
        jp: "話すのはどうですか？",
        vi: "Còn việc nói thì sao?"
      },
      {
        speaker: "B",
        jp: "「話すのが」大変です。",
        vi: "Việc nói thì vất vả."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ N1は～。(でも) N2は～。＜So sánh 対比＞",
    usage: [
      "Dùng để so sánh đặc điểm của 2 sự vật, sự việc.",
      "でも được dùng để nhấn mạnh sự so sánh."
    ],
    structure: "N1は～。(でも) N2は～。",
    notes: {
      points: [
        "でも giúp làm nổi bật sự đối lập."
      ],
      examples: [
        {
          jp: "日本語「は」、読むのは少し難しいです。「でも」、会話「は」得意【とくい】です。",
          vi: "Đọc tiếng Nhật thì hơi khó, nhưng hội thoại thì giỏi."
        },
        {
          jp: "ひらがな「は」好きです。カタカナ「は」苦手です。",
          vi: "Chữ hiragana thì thích. Chữ katakana thì kém."
        },
        {
          jp: "英語は文法【ぶんぽう】が簡単です。でも、単語【たんご】を覚【おぼ】えるのは大変です。",
          vi: "Ngữ pháp tiếng Anh thì đơn giản, nhưng việc nhớ từ vựng thì khó."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "日本語はどうですか？",
        vi: "Tiếng Nhật thế nào?"
      },
      {
        speaker: "B",
        jp: "読むのは少し難しいですが、会話は得意です。",
        vi: "Đọc thì hơi khó nhưng hội thoại thì giỏi."
      },
      {
        speaker: "A",
        jp: "ひらがなとカタカナはどうですか？",
        vi: "Hiragana và Katakana thì sao?"
      },
      {
        speaker: "B",
        jp: "ひらがなは好きですが、カタカナは苦手です。",
        vi: "Hiragana thì thích nhưng Katakana thì kém."
      }
    ]
  },

  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ V-てもらえませんか？",
    usage: [
      "Dùng để nhờ vả một cách lịch sự.",
      "Mẫu câu V-てください dùng khi đưa ra chỉ thị hay nhờ vả, <br>nhưng V-てもらえませんか? lịch sự hơn.",
    ],
    structure: "V-てもらえませんか？",
    notes: {
      points: [
        "Thường dùng với các động từ như: <br>教えて (dạy), <br>見せて (cho xem), <br>貸して (cho mượn), <br>説明して (giải thích), <br>書いて (viết), <br>言って (nói), <br>話して (nói chuyện)...",
      ],
      examples: [
        {
          jp: "日本語を「チェックしてもらえませんか？」",
          vi: "Bạn có thể kiểm tra tiếng Nhật cho tôi không?"
        },
        {
          jp: "この漢字の読み方を「教えてもらえませんか？」",
          vi: "Bạn có thể dạy tôi cách đọc chữ Hán này được không?"
        },
        {
          jp: "新しい教科書【きょうかしょ】、ちょっと「見せてもらえませんか？」",
          vi: "Bạn có thể cho tôi xem qua sách giáo khoa mới được không?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "この文を「チェックしてもらえませんか？」",
        vi: "Bạn có thể kiểm tra câu này cho tôi không?"
      },
      {
        speaker: "B",
        jp: "はい、いいですよ。",
        vi: "Vâng, được thôi."
      },
      {
        speaker: "A",
        jp: "この漢字の読み方を「教えてもらえませんか？」",
        vi: "Bạn có thể dạy tôi cách đọc chữ Hán này được không?"
      },
      {
        speaker: "B",
        jp: "「勉強」と読みます。",
        vi: "Đọc là 'benkyou'."
      }
    ]
  },
  {
    id: "5",
    tab: "Mẫu 5",
    title: "⑤ V-方（かた）",
    usage: [
      "～方 thể hiện phương pháp, cách thức thực hiện hành động.",
      "Động từ chia thể マス rồi bỏ ます, sau đó thêm 方.",
    ],
    structure: "V-方（かた）",
    notes: {
      points: [
        "Một số ví dụ phổ biến: <br>書き方 (cách viết), <br>読み方 (cách đọc), <br>し方・やり方 (cách làm), <br>行き方 (cách đi), <br>使い方 (cách dùng), <br>食べ方 (cách ăn)...",
      ],
      examples: [
        {
          jp: "この書類【しょるい】の「書き方」がよくわかりません。",
          vi: "Tôi không hiểu lắm cách viết giấy tờ này."
        },
        {
          jp: "日本語のいい練習の「し方」がありますか？",
          vi: "Bạn có cách luyện tập tiếng Nhật nào tốt không?"
        },
        {
          jp: "この辞書【じしょ】の「使い方」を教えてください。",
          vi: "Hãy chỉ cho tôi cách dùng quyển từ điển này."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "この機械【きかい】の使い方がわかりません。",
        vi: "Tôi không biết cách dùng cái máy này."
      },
      {
        speaker: "B",
        jp: "ボタンを押してから、スタートを選【えら】んでください。",
        vi: "Hãy nhấn nút rồi chọn 'Start'."
      },
      {
        speaker: "A",
        jp: "この漢字の書き方を「教えてもらえませんか？」",
        vi: "Bạn có thể chỉ tôi cách viết chữ Hán này được không?"
      },
      {
        speaker: "B",
        jp: "はい、まず横線【よこせん】を書いてください。",
        vi: "Vâng, trước tiên hãy viết nét ngang."
      }
    ]
  }
];
