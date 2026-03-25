export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 11： – Tôi sẽ mua rau và thịt đến",
    summaryList: [
      {
        label: "① V-て 行きます／来ます",
        example: "肉と野菜は、私が「買って行きます」よ。",
        vi: "Thịt và rau thì tôi sẽ 「mua mang đến」."
      },
      {
        label: "② N1とN2(と)、どっちがいいですか？ / S。どれがいいですか？",
        example: "チョコレートケーキとチーズケーキ、「どっちがいいですか」？ ",
        vi: "Bánh sô-cô-la và bánh phô mai, 「cái nào thì tốt hơn?」"
      },
      {
        label: "③ Nのほうがいいです",
        example: "塩【しお】「のほうがいいです」。",
        vi: "Muối thì 「tốt hơn.」"
      },
      {
        label: "④ [từ nghi vấn]でもいいです",
        example: "A：「何が」食べたいですか？ B：何でもいいです。",
        vi: "A: Bạn muốn ăn gì? B: Ăn gì cũng được."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① V-て行きます／来ます",
    usage: [
      "Làm V trước tiên, rồi cứ thế đi/ đến nơi khác."
    ],
    structure: "V-て行きます／来ます",
    notes: {
      points: [
        "Động từ được chia ở thể て rồi kết hợp với 行く/来る.",
        "Từ hay dùng: 持って行く（Mang đi）、買って行く（mua mang đi）、作って行く（làm mang đi）"
      ],
      examples: [
        {
          jp: "肉と野菜は、私が「買って行きます」よ。",
          vi: "Thịt và rau thì tôi sẽ 「mua mang đến.」"
        },
        {
          jp: "明日のパーティー、私はデザートを「持って行きます」。",
          vi: "Ngày mai, tôi sẽ 「mang」 món tráng miệng 「tới」 bữa tiệc."
        },
        {
          jp: "自国の料理を「作って来ました」。どうぞ、食べてください。",
          vi: "Tôi đã 「nấu và mang đến」 món ăn đặc sản của đất nước tôi. Xin mời dùng thử."
        },
        {
          jp: "飲み物を「買って来ました」よ。",
          vi: "Tôi đã 「mua nước mang đến」 rồi."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "バーベキューのとき、何を「持って行きますか」？",
        vi: "Trong buổi tiệc nướng, bạn sẽ mang gì đến?"
      },
      {
        speaker: "B",
        jp: "私はサラダを「作って行きます」。",
        vi: "Tôi sẽ làm salad mang đến."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② N1とN2(と)、どっちがいいですか？ <br>　　　　　　S。どれがいいですか？",
    usage: [
      "Dùng để hỏi người khác chọn cái nào trong số những thứ được đưa ra.",
      "2 lựa chọn thì dùng どっち.",
      "3 lựa chọn trở lên thì dùng どれ."
    ],
    structure: "N1とN2(と)、どっちがいいですか？ <br> S。どれがいいですか？",
    notes: {
      points: [
        "どっち là cách nói thân mật của どちら.",
      ],
      examples: [
        {
          jp: "チョコレートケーキとチーズケーキ、「どっちがいいですか？」",
          vi: "Bạn thích bánh sô-cô-la hay bánh phô mai hơn?"
        },
        {
          jp: "お茶、いろいろありますね。「どれがいいですか？」",
          vi: "Có nhiều loại trà quá nhỉ. Bạn thích loại nào?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "飲み物はコーヒーと紅茶、「どっちがいいですか？」",
        vi: "Đồ uống thì cà phê hay trà, bạn thích cái nào?"
      },
      {
        speaker: "B",
        jp: "紅茶のほうがいいです。",
        vi: "Tôi thích trà hơn."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ Nのほうがいいです",
    usage: [
      "Dùng để diễn đạt sự lựa chọn hoặc sở thích giữa hai thứ.",
      "N là thứ người nói đã chọn.",
      "Có thể lược bỏ のほうが thành Nがいいです."
    ],
    structure: "Nのほうがいいです / Nがいいです",
    notes: {
      points: [
        "Trong hội thoại thân mật, có thể nói Nがいいです thay cho Nのほうがいいです."
      ],
      examples: [
        {
          jp: "塩【しお】「のほうがいいです。」",
          vi: "Tôi thích dùng muối hơn."
        },
        {
          jp: "肉と魚、「どっちがいいですか？」",
          vi: "Bạn thích thịt hay cá hơn?"
        },
        {
          jp: "肉が「いいです。」",
          vi: "Tôi thích thịt hơn."
        },
        {
          jp: "日本「のほうがいいです。」",
          vi: "Tôi thích ở Nhật hơn."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "旅行は海と山、どっちがいいですか？",
        vi: "Đi du lịch thì biển hay núi, bạn thích cái nào hơn?"
      },
      {
        speaker: "B",
        jp: "山のほうがいいです。",
        vi: "Tôi thích núi hơn."
      }
    ]
  },
  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ [từ nghi vấn]でもいいです",
    usage: [
      "Dùng để diễn đạt rằng người nói 「không có sở thích hay mong muốn đặc biệt.」",
      "Thường dùng 「khi được hỏi lựa chọn」, nhưng câu 「trả lời là 'cái gì cũng được'」."
    ],
    structure: "[từ nghi vấn] + でもいいです",
    notes: {
      points: [
        "Biểu thị sự không có sở thích hay mong muốn cụ thể.",
        "Có nhiều biến thể: <br>何でも (cái gì cũng), <br>どっちでも (cái nào cũng), <br>いつでも (lúc nào cũng), <br>だれでも (ai cũng), <br>どこでも (ở đâu cũng), <br>いくつでも (bao nhiêu cũng)."
      ],
      examples: [
        {
          jp: "A：何が食べたいですか？",
          vi: "A: Bạn muốn ăn gì?"
        },
        {
          jp: "B：「何でもいいです。」",
          vi: "B: Ăn gì cũng được."
        },
        {
          jp: "チョコレートケーキとチーズケーキ、どっちがいいですか？",
          vi: "Bạn thích bánh sô-cô-la hay bánh phô mai hơn?"
        },
        {
          jp: "「どっちでもいいです。」",
          vi: "Cái nào cũng được."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "旅行は海と山、どっちがいいですか？",
        vi: "Đi du lịch thì biển hay núi, bạn thích cái nào hơn?"
      },
      {
        speaker: "B",
        jp: "「どっちでもいいです。」",
        vi: "Cái nào cũng được."
      }
    ]
  }
];
