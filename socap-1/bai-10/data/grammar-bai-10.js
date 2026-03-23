export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 10： – Tôi muốn tham gia lớp học tiếng Nhật",
    summaryList: [
      {
        label: "① V-てみたいんですが…",
        example: "合気道を「やってみたいんですが…。」",
        vi: "Tôi 「muốn thử」 tập Aikido…"
      },
      {
        label: "② (khoảng thời gian)（に）～回",
        example: "日本語クラスは「週に１回」です。",
        vi: "Lớp tiếng Nhật học 「1 lần mỗi tuần.」"
      },
      {
        label: "③ V-ましょうか？",
        example: "教室のチラシを持って「来ましょうか」？",
        vi: "Tôi mang tờ rơi của lớp học 「đến nhé?」"
      },
      {
        label: "④ Hỏi lại　聞き返し",
        example: "すみません。「ぼご」は、「どういう意味ですか？」",
        vi: "Xin lỗi, “ぼご” 「có nghĩa là gì?」"
      },
      {
        label: "⑤ Nのとき、～/ナA-なとき、～/イA-いとき、～",
        example: "高校「のとき」、少し日本語を勉強しました。",
        vi: "「Hồi」 học cấp 3, tôi đã học một chút tiếng Nhật."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① V-てみたいんですが…",
    usage: [
      "Dùng để diễn tả mong muốn thử làm một việc chưa từng làm hoặc việc mới."
    ],
    structure: "V-てみたいんですが…",
    notes: {
      points: [
        "Động từ được chia ở thể て rồi kết hợp với みたいんですが."
      ],
      examples: [
        {
          jp: "合気道【あいきどう】を「やってみたいんですが…。」",
          vi: "Tôi muốn thử tập Aikido…"
        },
        {
          jp: "書道【しょどう】教室に「参加【さんか】してみたいんですが…。」",
          vi: "Tôi 「muốn thử tham gia」 lớp học thư pháp…"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "日本料理を「作ってみたいんですが…」",
        vi: "Tôi 「muốn thử nấu」 món ăn Nhật…"

      },
      {
        speaker: "B",
        jp: "体験【たいけん】教室ですか？それとも、毎週のコースですか？",
        vi: "Lớp học trải nghiệm à? Hay là khóa học hàng tuần?"
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② （Thời gianに）～回",
    usage: [
      "Dùng để diễn tả tần suất hành động trong một khoảng thời gian nhất định.",
      "Trước に là các từ chỉ khoảng thời gian như 週／～週間 (tuần/～ tuần), 月／～か月 (tháng/～ tháng), 年／～年 (năm/～ năm).",
      "Sau số lần thêm 回 để biểu thị số lần thực hiện."
    ],
    structure: "（期間に）～回",
    notes: {
      points: [
        "Có trường hợp に được lược bỏ.",
        "Có thể thêm ぐらい sau 回 để biểu thị tần suất đại khái."
      ],
      examples: [
        {
          jp: "日本語クラスは「週に１回【かい】」です。",
          vi: "Lớp học tiếng Nhật được tổ chức 「1 lần mỗi tuần」."
        },
        {
          jp: "「１週に２回」、国際交流会【こくさいこうりゅうかい】があります。",
          vi: "Buổi giao lưu quốc tế được tổ chức 「2 lần 1 tuần」."
        },
        {
          jp: "オリンピックは「４年に１回」あります。",
          vi: "Thế vận hội được tổ chức 「4 năm 1 lần」."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "日本語クラスは「どのくらいありますか？」",
        vi: "Lớp tiếng Nhật được tổ chức bao nhiêu lần?"
      },
      {
        speaker: "B",
        jp: "「週に１回」あります。",
        vi: "Mỗi tuần có 1 lần."
      },
      {
        speaker: "A",
        jp: "国際交流会【こくさいこうりゅうかい】はどうですか？",
        vi: "Còn buổi giao lưu quốc tế thì sao?"
      },
      {
        speaker: "B",
        jp: "「１週に２回」あります。",
        vi: "Một tuần có 2 lần."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ V-ましょうか？",
    usage: [
      "Dùng để đề nghị giúp đỡ hoặc gợi ý làm một việc cho người khác.",
      "Thường dùng khi muốn lịch sự hỏi xem có cần mình làm gì đó không."
    ],
    structure: "V-ましょうか？",
    notes: {
      points: [
        "Mẫu câu này thường được dùng trong hội thoại để thể hiện sự lịch sự.",
        "Có thể dịch là: “Tôi làm ~ nhé?”, “Tôi giúp ~ nhé?”."
      ],
      examples: [
        {
          jp: "教室のチラシを「持って来ましょうか？」",
          vi: "Tôi 「mang」 tờ rơi của lớp học 「đến nhé?」"
        },
        {
          jp: "窓【まど】を開【あ】け「ましょうか？」",
          vi: "Tôi 「mở」 cửa sổ 「nhé?」"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "暑いですね。",
        vi: "Nóng quá nhỉ."
      },
      {
        speaker: "B",
        jp: "窓を開け「ましょうか？」",
        vi: "Tôi 「mở」 cửa sổ 「nhé?」"
      },
      {
        speaker: "A",
        jp: "はい、お願いします。",
        vi: "Vâng, nhờ bạn nhé."
      }
    ]
  },

  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ Hỏi lại (Có nghĩa là gì?)",
    usage: [
      "Dùng để hỏi lại ý nghĩa của một từ hoặc cụm từ khi chưa hiểu.",
      "Thường bắt đầu bằng すみません　Vd: すみません、～はどういう意味【いみ】ですか？"
    ],
    structure: "すみません、Nはどういう意味ですか？",
    notes: {
      points: [
        "Cách nói lịch sự để xác nhận lại nghĩa của từ.",
        "どういう意味ですか : “có nghĩa là gì?”."
      ],
      examples: [
        {
          jp: "すみません、「ぼご」は、どういう意味【いみ】ですか？",
          vi: "Xin lỗi, “ぼご” có nghĩa là gì?"
        },
        {
          jp: "すみません、「意味」は、どういう意味【いみ】ですか？",
          vi: "Xin lỗi, “意味” có nghĩa là gì?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "この言葉【ことば】の意味がわかりません。",
        vi: "Tôi không hiểu nghĩa của từ này."
      },
      {
        speaker: "B",
        jp: "すみません、「ぼご」は、どういう意味ですか？",
        vi: "Xin lỗi, “ぼご” có nghĩa là gì?"
      },
      {
        speaker: "A",
        jp: "母語【ぼご】、つまり自分の国の言葉【ことば】です。",
        vi: "母語 nghĩa là tiếng mẹ đẻ, tức là ngôn ngữ của đất nước mình."
      }
    ]
  },

  {
    id: "5",
    tab: "Mẫu 5",
    title: "⑤ Nのとき、～ / ナA-なとき、～ / イA-いとき、～",
    usage: [
      "Cách nói thể hiện thời điểm xảy ra của sự việc.",
      "Có thể kết hợp với danh từ (Nのとき), <br>tính từ đuôi な (ナA-なとき), <br>hoặc tính từ đuôi い (イA-いとき).",
      "Ý nghĩa: “Khi… thì…”."
    ],
    structure: "Nのとき、～ / ナA-なとき、～ / イA-いとき、～",
    notes: {
      points: [
        "Mẫu câu này rất phổ biến để nói về trải nghiệm hoặc tình huống trong quá khứ.",
        "Có thể dùng với cả danh từ, tính từ và động từ.",
        "Ví dụ: 学生のとき (khi còn là học sinh), 暇【ひま】なとき (khi rảnh), 忙しいとき (khi bận)."
      ],
      examples: [
        {
          jp: "高校【こうこう】の「とき」、少し日本語を勉強しました。",
          vi: "「Hồi học cấp 3」, tôi đã học một chút tiếng Nhật."
        },
        {
          jp: "暇【ひま】な「とき」、本を読みます。",
          vi: "「Khi rảnh」, tôi đọc sách."
        },
        {
          jp: "「忙しいとき」、電話に出【で】られません。",
          vi: "「Khi bận」, tôi không thể nghe điện thoại."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "「学生のとき」、何をしましたか？",
        vi: "「Khi」 còn là 「học sinh」, bạn đã làm gì?"
      },
      {
        speaker: "B",
        jp: "「高校のとき」、少し日本語を勉強しました。",
        vi: "「Hồi học cấp 3」, tôi đã học một chút tiếng Nhật."
      },
      {
        speaker: "A",
        jp: "「暇なとき」はどうしますか？",
        vi: "「Khi rảnh」 thì bạn làm gì?"
      },
      {
        speaker: "B",
        jp: "本を読みます。",
        vi: "Tôi đọc sách."
      }
    ]
  }
];
