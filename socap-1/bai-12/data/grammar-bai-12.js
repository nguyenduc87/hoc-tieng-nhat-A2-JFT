export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 12： Cơm hộp trong ngon nhỉ.",
    summaryList: [
      {
        label: "① ナA- / イA - そうです",
        example: "そのお弁当、「おいしそうですね。」",
        vi: "Cơm hộp của bạn 「trông ngon nhỉ」."
      },
      {
        label: "② ナA- / イA - そうな N",
        example: "それ、「辛【から】そうな料理」ですね。",
        vi: "Đó là món ăn 「trông có vẻ cay nhỉ」."
      },
      {
        label: "③ イA-くて、～ / イA-くなくて、～",
        example: "この卵焼【たまごや】き、「甘くて」、おいしいですね。 / 茶碗蒸【Chawan-mushi】し、「甘くなくて」、おいしいですよ。",
        vi: "Món trứng cuộn này ngọt và ngon nhỉ. / Chawanmushi không ngọt mà vẫn ngon đấy."
      },
      {
        label: "④ V-てみます",
        example: "よかったら、この卵焼【たまごや】き、「食べてみて」ください。",
        vi: "Nếu được thì hãy 「thử ăn」 món trứng cuộn này nhé."
      },
      {
        label: "⑤ Tự động từ / Tha động từ",
        example: "鶏肉【とりにく】とか、エビとか、きのことかが入ってます。ときどき、銀杏【ぎんなん】も入れますよ。",
        vi: "Có thịt gà, tôm, nấm… thỉnh thoảng cũng cho thêm hạt ngân hạnh."
      },
      {
        label: "⑥ イA-くないですか?",
        example: "味【あじ】は、「うすくない」ですか?",
        vi: "Vị có nhạt quá không?"
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① ～そうです",
    usage: [
      "Diễn đạt ấn tượng chủ quan dựa trên quan sát bên ngoài."
    ],
    structure: "ナA - イA - そうです",
    notes: {
      points: [
        "Nếu là tính từ đuôi イ thì bỏ い, nếu là tính từ đuôi ナ thì bỏ な rồi thêm ～そうです.",
        "Dùng để nhận xét trực giác từ bề ngoài, ví dụ: おいしそう (có vẻ ngon), 辛そう (có vẻ cay), すっぱそう (có vẻ chua).",
        "Cũng kết hợp với tính từ đuôi ナ như 元気そうです (có vẻ khỏe mạnh), 大変そうです (có vẻ vất vả)."
      ],
      examples: [
        {
          jp: "そのお弁当、「おいしそう」ですね。",
          vi: "Cơm hộp của bạn 「trông」 ngon nhỉ."
        },
        {
          jp: "「おいしそう」なお弁当です。",
          vi: "Cơm hộp đó, 「có vẻ」 ngon nhỉ."
        },
        {
          jp: "このみかんは、「すっぱそう」ですね。",
          vi: "Quả quýt này 「trông có vẻ」 chua nhỉ."
        },
        {
          jp: "彼は「元気そう」です。",
          vi: "Anh ấy 「trông có vẻ」 khỏe mạnh."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "この料理、「辛そう」ですね。",
        vi: "Món ăn này 「trông có vẻ」 cay nhỉ."
      },
      {
        speaker: "B",
        jp: "ええ、でも食べてみないと分【わ】かりませんね。",
        vi: "Ừ, nhưng không ăn thử thì không biết chắc được."
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
        "Tự động từ: 雨が降る (trời mưa), ドアが閉まる (cửa đóng), 入る (vào).",
        "Tha động từ: ご飯を食べる (ăn cơm), ドアを閉める (đóng cửa), 入れる (cho vào).",
        "Cấu trúc ～が入っています dùng để mô tả trạng thái món ăn có nguyên liệu gì.",
        "Cấu trúc ～を入れます thể hiện hành động có chủ ý cho nguyên liệu vào món ăn."
      ],
      examples: [
        {
          jp: "鶏肉【とりにく】とか、エビとか、きのことかが入ってます。",
          vi: "Món này có thịt gà, tôm, nấm."
        },
        {
          jp: "ときどき、銀杏も入れますよ。",
          vi: "Thỉnh thoảng tôi cũng cho cả bạch quả vào nữa."
        },
        {
          jp: "ドア「が」閉まっています。-> Tự động từ: N が V",
          vi: "Cửa đang đóng."
        },
        {
          jp: "ドア「を」閉めます。-> Tha động từ:(Người が) N を V",
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
