export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 11 – Tôi quên thẻ tích điểm mất rồi.",
    summaryList: [
      {
        label: "① V-てみてもいいですか？",
        example: "このセーター、「着てみてもいいですか」？",
        vi: "Tôi có thể 「mặc thử」 chiếc áo len này được không ạ?"
      },
      {
        label: "② ナA- / イA- すぎます",
        example: "この色はちょっと派手【はで】「すぎます」。",
        vi: "Màu này 「hơi」 bị lòe loẹt 「quá」."
      },
      {
        label: "③ ナA-な / イA-いの",
        example: "もうちょっと「大きいの」、ありますか？",
        vi: "Có cái nào to hơn một chút không ạ?"
      },
      {
        label: "④ Nを V-(ら)れます ＜Thể bị động③＞",
        example: "（私は）自転車を「盗【ぬす】まれました」。",
        vi: "Tôi đã 「bị lấy trộm」 mất xe đạp."
      },
      {
        label: "⑤ S（thể thông thường）かもしれません",
        example: "もしかしたら、バッグをとられた「かもしれません」。",
        vi: "「Không chừng là」 tôi đã bị giật mất túi xách rồi cũng nên."
      },
      {
        label: "⑥ V-てしまいました",
        example: "ポイントカード、「忘れてしまいました」。",
        vi: "Tôi 「lỡ quên mất」 thẻ tích điểm mất rồi."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① V-てみてもいいですか？",
    usage: [
      "Dùng để 「xin phép đối phương」 khi muốn thử làm một việc gì đó. Thường sử dụng rộng rãi khi thử đồ (quần áo, giày dép, mũ nón...) ở cửa hàng lúc đi mua sắm."
    ],
    structure: "Động từ thể て (V-て) + みてもいいですか？",
    notes: {
      points: [
        "Là cách biến đổi mẫu câu thử làm gì đó「V-てみます」đã học ở bài 12 Sơ cấp 1 thành dạng xin phép「〜てもいいですか？」.",
        "Khi đi mua sắm, có thể linh hoạt sử dụng các cụm động từ thử đồ quen thuộc như:<br> はいてみてもいいですか (đi thử giày/quần), <br> かぶってみてもいいですか (đội thử mũ).",
        "Ví dụ cốt lõi:<br> このセーター、着てみてもいいですか？ (Tôi mặc thử cái áo len này được không?)"
      ],
      examples: [
        {
          jp: "このセーター、「着てみてもいいですか」？",
          vi: "Tôi 「mặc thử」 cái áo len này được không?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "すみません。このペン、「使ってみてもいいですか」？",
        vi: "Xin lỗi, tôi có thể 「dùng thử」 chiếc bút này được không?"
      },
      {
        speaker: "B",
        jp: "どうぞ。",
        vi: "Xin mời."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② ナA- / イA- すぎます",
    usage: [
      "Dùng để thể hiện một trạng thái, mức độ nào đó đã 「vượt quá」 giới hạn hoặc 「quá mức」 cần thiết (thường mang ý nghĩa tiêu cực hoặc không phù hợp)."
    ],
    structure: "Tính từ đuôi イ (bỏ い) / Tính từ đuôi ナ (bỏ な) + すぎます",
    notes: {
      points: [
        "Là cách kết hợp mẫu câu vượt quá mức độ「〜すぎます」với các tính từ (bài 16 Sơ cấp 1 đã học kết hợp với động từ V-bỏ ます).",
        "Đối với tính từ đuôi イ: Bỏ đuôi「い」rồi cộng trực tiếp, ví dụ: 大きい (to) → 大きすぎます (quá to).",
        "Đối với tính từ đuôi ナ: Bỏ đuôi「な」rồi cộng trực tiếp, ví dụ: 派手な (lòe loẹt) → 派手すぎます (quá lòe loẹt).",
        "Ví dụ cốt lõi: この色【いろ】はちょっと派手【はで】すぎます。 (Màu này hơi bị lòe loẹt quá.)"
      ],
      examples: [
        {
          jp: "この色はちょっと「派手【はで】すぎます」。",
          vi: "Màu này hơi bị lòe loẹt quá."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "このジャケット、いいですね。",
        vi: "Áo khoác này đẹp nhỉ."
      },
      {
        speaker: "B",
        jp: "でも、「高【たか】すぎます」よ。",
        vi: "Nhưng mà đắt quá."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ ナA-な / イA-い の",
    usage: [
      "Dùng chữ「の」để thay thế cho một danh từ đã được nhắc đến trước đó hoặc đang hiện hữu trong văn cảnh, nhằm tránh lặp từ."
    ],
    structure: "Tính từ đuôi イ + の / Tính từ đuôi ナ + なの",
    notes: {
      points: [
        "Chữ「の」được dùng như một đại từ thay thế danh từ. Trong ví dụ cốt lõi, người nói cầm chiếc áo len và hỏi thì「の」chính là thay thế cho từ「セーター」.",
        "Khi kết hợp với tính từ đuôi イ sẽ có dạng: 〜いの. Ví dụ: 大きい (to) → 大きい の (cái to).",
        "Khi kết hợp với tính từ đuôi ナ sẽ có dạng: 〜なの. Ví dụ: きれいな (đẹp) → きれいな の (cái đẹp).",
        "Ví dụ cốt lõi: もうちょっと大きいの、ありますか？ (Có cái to hơn một chút không?)"
      ],
      examples: [
        {
          jp: "もうちょっと「大きいの」、ありますか？",
          vi: "Có cái to hơn một chút không?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "どのセーターが好きですか？",
        vi: "Bạn thích áo len nào?"
      },
      {
        speaker: "B",
        jp: "私は、赤い「の」がいいです。",
        vi: "Tôi thích cái màu đỏ."
      }
    ]
  },

  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ Nを V-(ら)れます ＜Bị động③＞",
    usage: [
      "Diễn tả việc đồ dùng hoặc bộ phận cơ thể bị người khác tác động gây thiệt hại, ảnh hưởng xấu."
    ],
    structure: "Vật sở hữu + を + Động từ bị động (V-られます)",
    notes: {
      points: [
        "Bị động gián tiếp (tổn thất). Đối tượng bị hại trực tiếp là vật/bộ phận cơ thể, nhưng chủ ngữ là người nói.",
        "Thường dùng với các động từ gây hại: とられる (bị lấy), 踏まれる (bị dẫm)."
      ],
      examples: [
        {
          jp: "バスの中で、携帯【けいたい】を「とられました」。",
          vi: "Tôi bị lấy mất điện thoại trên xe buýt."
        },
        {
          jp: "電車の中で、足を踏【ふ】まれたんです。",
          vi: "Tôi bị dẫm lên chân lúc ở trên tàu."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "どうしたんですか？顔色【かおいろ】が悪【わる】いですよ。",
        vi: "Bạn sao thế? Sắc mặt tệ quá kìa."
      },
      {
        speaker: "B",
        jp: "スーパーで、だれかに財布【さいふ】を盗【ぬす】まれました。",
        vi: "Tôi bị ai đó lấy trộm mất ví ở siêu thị rồi."
      }
    ]
  },

  {
    id: "5",
    tab: "Mẫu 5",
    title: "⑤ S（thể thông thường 普通形）かもしれません",
    usage: [
      "Thể hiện sự suy đoán, được dùng khi khả năng xảy ra không quá cao.",
      "Thể hiện rằng người nói không chắc chắn với suy nghĩ của mình."
    ],
    structure: "S (Thể thông thường 普通形) + かもしれません (*Danh từ và Tính từ đuôi ナ không đi kèm だ)",
    notes: {
      points: [
        "Kết hợp với thể thông thường. Tuy nhiên, nếu là danh từ và tính từ đuôi ナ thì sẽ không thêm だ vào trước かもしれません.",
        "Ví dụ danh từ/tính từ đuôi ナ: 休みかもしれない (có lẽ nghỉ), 暇かもしれない (có lẽ rảnh rỗi), v.v..",
        "Trong văn nói thân mật, có thể rút gọn chỉ nói 〜かも (Ví dụ: 忘れたかも (có lẽ tôi đã quên), 落としたかも (có lẽ tôi đã đánh rơi), v.v..)"
      ],
      examples: [
        {
          jp: "もしかしたら、バッグをとられた「かもしれません」。",
          vi: "「Có lẽ」 túi của tôi đã bị lấy trộm."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "あ、スマホがないです。さっきの店に忘れた「かもしれません」。",
        vi: "A, tôi không thấy điện thoại. 「Có lẽ」 tôi đã để quên ở cửa hàng lúc nãy."
      },
      {
        speaker: "B",
        jp: "じゃあ、行ってみましょう。",
        vi: "Vậy thì hãy đến đó xem."
      },
      {
        speaker: "A",
        jp: "店に電話したけど、だれも出ないよ。",
        vi: "Tôi đã gọi điện đến cửa hàng nhưng không ai nghe máy."
      }
    ]
  },

  {
    id: "6",
    tab: "Mẫu 6",
    title: "⑥ V-てしまいました",
    usage: [
      "Đây là cách nói được dùng khi hối hận về việc mình đã làm hoặc tiếc nuối về việc đã xảy ra.",
      "Trong ví dụ này, người nói thể hiện tâm trạng tiếc nuối do quên đồ."
    ],
    structure: "Động từ thể テ + しまいました",
    notes: {
      points: [
        "Kết hợp với thể テ của động từ.",
        "Trong các tình huống mua sắm, những cách diễn đạt なくしてしまいました (lỡ làm mất), 落としてしまいました (lỡ đánh rơi), 壊れてしまいました (hỏng mất rồi), v.v. thường hay được sử dụng.",
        "Trong văn nói, 〜てしまいました biến đổi thành 〜ちゃった, ví dụ: 忘れちゃった (Tôi quên mất rồi)."
      ],
      examples: [
        {
          jp: "ポイントカード、忘れ「てしまいました」。",
          vi: "Tôi quên thẻ tích điểm mất rồi."
        },
        {
          jp: "2か月前に買った掃除機が、もう壊れ「てしまいました」。",
          vi: "Máy hút bụi tôi mua 2 tháng trước đã hỏng mất rồi."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "そのスマホ、どうしたんですか？",
        vi: "Cái điện thoại đó bị làm sao vậy?"
      }
    ]
  },

];
