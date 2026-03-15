export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 8 – Bạn từng chơi bóng chày bao giờ chưa?",
    summaryList: [
      {
        label: "① もう V-ました",
        example: "新しいアウトレットモール、「もう行きました」か？",
        vi: "Bạn 「đã」 đi outlet mall mới 「chưa?」"
      },
      {
        label: "② V-たことがあります",
        example: "プロレスを「見たことがあります」か？",
        vi: "Bạn đã từng xem đấu vật chuyên nghiệp chưa?"
      },
      {
        label: "③ V-に行きませんか？",
        example: "いっしょに「食べに行きませんか？」",
        vi: "Chúng ta cùng đi ăn nhé?"
      },
      {
        label: "④ Nの前に、～ / Nのあとで(、)～",
        example: "食事「の前に」、お金をおろしたいんですが…。／買い物「のあとで」、ゲームコーナーに行きませんか？",
        vi: "「Trước khi」 ăn tôi muốn rút tiền… / 「Sau khi」 mua sắm chúng ta đi khu game nhé?"
      },
      {
        label: "⑤ V-たいんですが…",
        example: "ジョギングシューズを「買いたいんですが…。」",
        vi: "Tôi 「muốn mua」 giày chạy…"
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① もう V-ました",
    usage: [
      "Dùng để nói một 「hành động đã hoàn thành.」",
      "もう mang nghĩa là 「đã, rồi」.",
    ],
    structure: "もう V-ました / もう V-ましたか？",
    notes: {
      points: [
        "Khi hỏi もうV-ましたか？: nếu đã làm → はい、V-ました。",
        "Nếu chưa làm → いいえ、まだです。",
        "Những việc làm được xem là đương nhiên vì nghĩ rằng đối phương đã làm <br>(vd: 宿題（しゅくだい）は、もうやった？)",
      ],
      examples: [
        {
          jp: "新しいアウトレットモール、「もう行きました」か？",
          vi: "Bạn đã đến trung tâm thương mại hàng tồn mới chưa?"
        },
        {
          jp: "ポートタワー、「もう登りました」か？",
          vi: "Bạn đã lên tháp cảng chưa?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "「もう」、この町のいろいろなところに「行きました」か？",
        vi: "Bạn đã đi nhiều nơi trong thành phố này chưa?"
      },
      {
        speaker: "B",
        jp: "はい、博物館とお城に「行きました」。でも、動物園は「まだです」。",
        vi: "Rồi, tôi đã đi bảo tàng và lâu đài. Nhưng sở thú thì tôi chưa."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② V-たことがあります",
    usage: [
      "Dùng khi trình bày 「trải nghiệm đã từng có.」",
      "Phía sau thể た của động từ là ～ことがあります.",
      "Thể た dùng để thể hiện quá khứ hoặc sự hoàn thành."
    ],
    structure: "V-た + ことがあります",
    notes: {
      points: [
        "Khi được hỏi về trải nghiệm: nếu đã từng có → V-たことがあります。",
        "Nếu chưa từng có → V-たことがないです / V-たことがありません。",
        "Trong hội thoại, 「trợ từ が」 trong V-たことがあります 「có thể lược bỏ」.",
        "Khác với もうV-ましたか？: mẫu này chỉ đơn thuần 「hỏi」 xem đối phương 「có trải nghiệm đó hay không」."
      ],
      examples: [
        {
          jp: "プロレスを「見たことがあります」か？",
          vi: "Bạn 「đã từng xem」 đấu vật chưa?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "あそこのアジアレストラン、「行ったことある」？",
        vi: "Bạn 「đã đến」 nhà hàng châu Á đằng kia 「bao giờ chưa?」"
      },
      {
        speaker: "B",
        jp: "はい、一度「あります」。",
        vi: "Rồi, tôi từng đến đó một lần."
      },
      {
        speaker: "C",
        jp: "私は、「ありません」。",
        vi: "Tôi thì chưa."
      },
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ V-に行きませんか？",
    usage: [
      "Dùng để mời rủ đối phương.",
    ],
    structure: "V-ます (bỏ ます) + に行きませんか？",
    notes: {
      points: [
        "Trong hội thoại thân mật, V-に「行きませんか」？ ➡ V-に「行かない？」",
        "Ví dụ: 食べます → 食べに行く (đi ăn), 飲みます → 飲みに行く (đi uống).",
      ],
      examples: [
        {
          jp: "いっしょに「食べに行きませんか」？",
          vi: "Chúng ta 「cùng đi ăn nhé?」"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "プロレス、いっしょに「見に行きませんか」？",
        vi: "Chúng ta 「cùng đi xem」 đấu vật nhé?"
      },
      {
        speaker: "B",
        jp: "いいですね。行きましょう。",
        vi: "Nghe được đấy. Cùng đi nhé."
      },
      {
        speaker: "A",
        jp: "今度、映画「見に行かない？」",
        vi: "Lần tới mình cùng đi xem phim nhé?"
      },
      {
        speaker: "B",
        jp: "ぜひ。",
        vi: "Tất nhiên rồi."
      }
    ]
  },

  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ Nの前に、～ / Nのあと(で)、～",
    usage: [
      "Nの前に～: trước khi làm N.",
      "Nのあと(で)～: sau khi làm N."
    ],
    structure: "Nの前に、～ / Nのあと(で)、～",
    notes: {
      points: [
        "Trợ từ 「で」 trong Nのあとで đôi khi 「có thể lược bỏ.」",
      ],
      examples: [
        {
          jp: "「食事の前に」、お金をおろしたいんですが…。",
          vi: "Tôi muốn rút tiền 「trước khi đi ăn」."
        },
        {
          jp: "「買い物のあとで」、ゲームコーナーに行きませんか？",
          vi: "「Sau khi mua sắm」, chúng ta đến khu trò chơi nhé?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "「映画の前に」、カフェでお茶をしましょう。",
        vi: "Hãy cùng đi uống cà phê 「trước khi xem phim」 nhé."
      },
      {
        speaker: "A",
        jp: "「仕事のあとで」、みんなでボウリングに行きませんか？",
        vi: "「Sau giờ làm」, chúng ta cùng đi chơi bowling nhé?"
      }
    ]
  },

  {
    id: "5",
    tab: "Mẫu 5",
    title: "⑤ V-たいんですが…",
    usage: [
      "Trình bày mong muốn của bản thân <br>và ngầm mong đối phương giúp đỡ hoặc đưa ra đề xuất.",
      "Cấu trúc này thường được dùng khi muốn nhờ vả, <br> hỏi ý kiến hoặc mở đầu cho một yêu cầu."
    ],
    structure: "V-たいんですが…",
    notes: {
      points: [
        "Ở bài 6 đã học mẫu Nに行きたいんですが…;<br> bài này mở rộng dùng với các động từ khác ngoài 行く.",
      ],
      examples: [
        {
          jp: "ジョギングシューズを「買いたいんですが…。」",
          vi: "Tôi muốn mua giày chạy..."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "ちょっと「休みたいんですが…。」",
        vi: "Tôi muốn nghỉ một chút..."
      },
      {
        speaker: "B",
        jp: "じゃ、あそこのカフェに入りましょう。",
        vi: "Vậy thì chúng ta vào quán cà phê đằng kia nhé."
      },
      {
        speaker: "A",
        jp: "Tシャツを「買いたいんですが」、あのお店、見てもいいですか？",
        vi: "Tôi muốn mua áo phông. Cửa hàng đằng kia xem được không?"
      }
    ]
  }

];
