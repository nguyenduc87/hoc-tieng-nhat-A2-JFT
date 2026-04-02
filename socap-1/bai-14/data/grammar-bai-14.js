export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 13： Máy photocopy này dùng thế nào?",
    summaryList: [
      {
        label: "① ～んですが…",
        example: "会議室の電気がつかないんですが…。",
        vi: "Đèn phòng họp không sáng (tôi phải làm sao bây giờ)..."
      },
      {
        label: "② V-そうです",
        example: "どのぐらいかかりそうですか？",
        vi: "Có vẻ sẽ mất khoảng bao lâu nữa?"
      },
      {
        label: "③ V-たいとき、～",
        example: "両面コピーしたいときは、どうすればいいですか？",
        vi: "Khi muốn photocopy hai mặt thì tôi nên làm thế nào?"
      },
      {
        label: "④ V-ると、～",
        example: "このスタートボタンを押すと、コピーが始まります。",
        vi: "Hễ ấn nút Start này thì máy sẽ bắt đầu copy."
      },
      {
        label: "⑤ はい、【câu phủ định】 / いいえ、【câu khẳng định】",
        example: "A：コピー機、使ったことないですか？ \nB：はい、ないです。",
        vi: "Vâng, [câu phủ định] / Không, [câu khẳng định] (Cách trả lời câu hỏi phủ định).\nA: Bạn chưa dùng máy photocopy bao giờ à? \nB: Vâng, tôi chưa dùng."
      }
    ]
  },

  {
    id: 1,
    tab: "Mẫu 1",
    title: "① ～んですが…",
    usage: [
      "Diễn đạt tình hình của bản thân và hỏi đối phương cách xử lý."
    ],
    structure: "V（辞書形／タ形／ナイ形）＋んですが…",
    notes: {
      points: [
        "Đây là cách nói để giải thích tình huống và mong đối phương đưa ra chỉ dẫn.",
        "Trong các bài trước (Bài 8, Bài 10) đã có cấu trúc V-たいんですが…, V-てみたいんですが…。",
        "Ở đây mở rộng với thể từ điển, thể た, thể ない của động từ.",
        "Thể ナイ của động từ là dạng phủ định, kết thúc bằng đuôi ない."
      ],
      examples: [
        {
          jp: "会議室の電気がつかないんですが…。",
          vi: "Đèn phòng họp không sáng ạ."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "会議室の電気がつかないんですが…。",
        vi: "Đèn phòng họp không sáng ạ."
      },
      {
        speaker: "B",
        jp: "そうですか。では、事務所に連絡してください。",
        vi: "Vậy à. Thế thì hãy liên hệ với văn phòng nhé."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② ～そうなN",
    usage: [
      "～そうです cũng có thể bổ nghĩa cho danh từ, khi đó dùng ～そうなN.",
    ],
    structure: "ナA- / イA- ～そうなN",
    notes: {
      points: [
        "Ví dụ: それ、辛そうな料理ですね ≈ その料理、辛そうですね."
      ],
      examples: [
        {
          jp: "それ、辛そうな料理ですね。",
          vi: "Món đó trông có vẻ cay nhỉ."
        },
        {
          jp: "おいしそうなケーキですね。",
          vi: "Chiếc bánh trông ngon nhỉ."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "その料理、辛そうですね。",
        vi: "Món ăn đó trông có vẻ cay nhỉ."
      },
      {
        speaker: "B",
        jp: "ええ、でも食べてみないと分かりませんね。",
        vi: "Ừ, nhưng không ăn thử thì không biết chắc được."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ イA-くて、～／イA-くなくて、～",
    usage: [
      "Dùng để nối các tính từ hoặc diễn đạt lý do cho mệnh đề sau.",
      "～くて dùng với tính từ đuôi イ ở dạng khẳng định.",
      "～くなくて dùng với tính từ đuôi イ ở dạng phủ định."
    ],
    structure: "イA-くて、～／イA-くなくて、～",
    notes: {
      points: [
        "Trong bài 5 đã học ～くて để liệt kê nhiều tính từ.",
        "Ngoài chức năng liệt kê, ～くて còn diễn đạt lý do cho mệnh đề phía sau.",
        "Dạng phủ định là ～くなくて, cũng dùng để nêu lý do."
      ],
      examples: [
        {
          jp: "この卵焼き、「甘くて」、おいしいですね。",
          vi: "Món trứng cuộn này ngọt nên ngon nhỉ."
        },
        {
          jp: "茶碗蒸【chawan-mushi】し、「甘くなくて」、おいしいですよ。",
          vi: "Món chawanmushi không ngọt đâu nên ngon lắm."
        },
        {
          jp: "梅干【うめぼし】しはすっぱくて、苦手です。",
          vi: "Món mơ muối thì chua nên tôi không thích."
        },
        {
          jp: "この料理は辛くなくて、子どもも食べることができます。",
          vi: "Món này không cay nên trẻ con cũng ăn được."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "このさしみ、高くて、買うことができません。",
        vi: "Món sashimi này đắt quá nên tôi không mua được."
      },
      {
        speaker: "B",
        jp: "この家、場所がよくて、高いです。",
        vi: "Ngôi nhà này vị trí tốt nên giá cao."
      }
    ]
  },
  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ V-てみます",
    usage: [
      "Dùng khi thử làm một hành động nào đó lần đầu để biết nó như thế nào.",
      "Thường dùng để diễn đạt ý định thử trải nghiệm hoặc khuyến khích người khác thử."
    ],
    structure: "V-てみます",
    notes: {
      points: [
        "Động từ được chia ở thể て rồi kết hợp với みます.",
        "Dùng khi muốn thử làm một việc để biết kết quả hoặc cảm giác.",
        "Ví dụ: 食べてみます (ăn thử), 飲んでみます (uống thử), してみます (thử làm), やってみます (thử làm thử)."
      ],
      examples: [
        {
          jp: "よかったら、この卵焼き、「食べてみて」ください。",
          vi: "Nếu thích thì bạn hãy 「ăn thử」 miếng trứng cuộn này nhé."
        },
        {
          jp: "くつを「はいてみます。」",
          vi: "Tôi sẽ thử mang giày."
        },
        {
          jp: "新しいゲームを「してみます。」",
          vi: "Tôi sẽ thử chơi trò chơi mới."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "この料理、「食べてみませんか？」",
        vi: "Bạn có muốn thử ăn món này không?"
      },
      {
        speaker: "B",
        jp: "ええ、「食べてみます。」",
        vi: "Ừ, tôi sẽ thử ăn."
      }
    ]
  },
  {
    id: "5",
    tab: "Mẫu 5",
    title: "⑤ Tự động từ / Tha động từ",
    usage: [
      "Phân biệt giữa động từ tự động và tha động từ trong tiếng Nhật.",
      "「Tự động từ」 diễn tả sự việc 「xảy ra không có chủ ý rõ ràng.」",
      "Tha động từ diễn tả hành động có chủ ý của người thực hiện.",
      "Danh sách Tự/ Tha động <a href='./list-tu-dong-tu/list.html'>click xem tại đây</a>"
    ],
    structure: "Tự động từ + て います / Tha động từ + ます",
    notes: {
      points: [
        "Tự động từ: 雨が降る (trời mưa), ドアが閉【し】まる (cửa đóng), 入る (vào).",
        "Tha động từ: ご飯を食べる (ăn cơm), ドアを閉【し】める (đóng cửa), 入れる (cho vào).",
        "Cấu trúc ～が入っています dùng để mô tả trạng thái món ăn có nguyên liệu gì.",
        "Cấu trúc ～を入れます thể hiện hành động có chủ ý cho nguyên liệu vào món ăn."
      ],
      examples: [
        {
          jp: "鶏肉【とりにく】とか、エビとか、きのことか「が入ってます」。",
          vi: "Món này có thịt gà, tôm, nấm."
        },
        {
          jp: "ときどき、銀杏【ぎんなん】も「入れます」よ。",
          vi: "Thỉnh thoảng tôi cũng cho cả bạch quả vào nữa."
        },
        {
          jp: "ドア「が」閉【し】まっています。-> Tự động từ: N が Vています",
          vi: "Cửa đang đóng."
        },
        {
          jp: "ドア「を」閉めます。-> Tha động từ:(Người が) N を Vています",
          vi: "Tôi sẽ đóng cửa."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "この料理、何が入っていますか？",
        vi: "Món này có những nguyên liệu gì vậy?"
      },
      {
        speaker: "B",
        jp: "鶏肉やエビなどが入っています。銀杏も入れましたよ。",
        vi: "Có thịt gà, tôm… Tôi cũng đã cho thêm bạch quả nữa."
      }
    ]
  },
  {
    id: "6",
    tab: "Mẫu 6",
    title: "⑥ イA-くないですか?",
    usage: [
      "Dùng để xác nhận xem điều bản thân đang lo lắng có ổn hay không.",
      "Thường dùng khi muốn hỏi lịch sự, thể hiện sự quan tâm đến người nghe.",
    ],
    structure: "イA-くないですか?",
    notes: {
      points: [
        "Thể hiện sự quan tâm, lịch sự, và xác nhận tình trạng của đối phương.",
        "Ví dụ: 「味は、うすくないですか？ (Vị không nhạt chứ ạ?)」.",
        "Có thể thay tính từ để dùng trong nhiều tình huống khác: <br>「難しくないですか？」, <br>「寒くないですか？」, <br>「高くないですか？」.",
      ],
      examples: [
        {
          jp: "味は、「うすくないですか？」",
          vi: "Vị không bị nhạt chứ ạ?"
        },
        {
          jp: "この漢字、「難しくないですか？」",
          vi: "Chữ Hán này không khó chứ ạ?"
        },
        {
          jp: "この部屋、「寒くないですか？」",
          vi: "Phòng này không lạnh chứ ạ?"
        },
        {
          jp: "わさび、「辛【から】くないですか？」",
          vi: "Wasabi không cay chứ ạ?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "わさび、辛くないですか？",
        vi: "Wasabi không cay chứ ạ?"
      },
      {
        speaker: "B",
        jp: "だいじょうぶです。わさび、大好きですから。",
        vi: "Không sao. Vì tôi rất thích wasabi."
      }
    ]
  }
];
