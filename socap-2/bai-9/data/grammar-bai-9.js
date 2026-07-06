export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 8 – Bạn có biết quầy hàng ở đâu không ?.",
    summaryList: [
      {
        label: "① もう V-ました / まだ V-て(い)ません",
        example: "A：スピーチコンテストは、「もう始まりました」か？<br>B：「まだ始まってません」。",
        vi: "A: Cuộc thi hùng biện 「đã bắt đầu chưa」?<br>B: 「Vẫn chưa」 bắt đầu."
      },
      {
        label: "② まだ V-ます",
        example: "イベント、「まだやってます」か？",
        vi: "Sự kiện 「vẫn còn đang diễn ra」 à?"
      },
      {
        label: "③ 【từ nghi vấn】 + S(thể thông thường) か、～",
        example: "明日のフリーマーケットは、何時から「か」、わかりますか？",
        vi: "Bạn có biết chợ đồ cũ ngày mai bắt đầu từ mấy giờ không?"
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① もう V-ました / まだ V-て(い)ません",
    usage: [
      "「もう + Khẳng định」: Diễn tả hành động đã hoàn thành (Đã... rồi).",
      "「まだ + Phủ định」: Diễn tả hành động chưa hoàn thành (Chưa...).",
      "Dùng để hỏi và trả lời về việc một sự kiện đã bắt đầu hoặc kết thúc hay chưa.",
      "Khi trả lời nhanh, có thể dùng ngắn gọn là 「まだです」(Chưa ạ)."
    ],
    structure: "もう V-ました (Đã... rồi) <br> まだ V-て(い)ません (Chưa...)",
    notes: {
      points: [
        "Cấu trúc phủ định đi với まだ chuẩn chỉnh là 「V-ていません」, <br> nhưng trong giao tiếp thực tế hay nói tắt thành 「V-てません」.",
      ],
      examples: [
        {
          jp: "A：準備【じゅんび】は、「もう終わりました」か？",
          vi: "A：Bạn đã chuẩn bị 「xong chưa」?"
        },
        {
          jp: "B：「まだ終わっていません」。あと、少しかかります。",
          vi: "B：「Vẫn chưa」 xong ạ. Sẽ mất thêm một chút thời gian nữa."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "スピーチコンテストは、「もう始まりました」か？",
        vi: "Cuộc thi hùng biện đã bắt đầu chưa?"
      },
      {
        speaker: "B",
        jp: "「まだ始まってません」。",
        vi: "Vẫn chưa bắt đầu đâu."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② まだ V-ます",
    usage: [
      "「まだ + Câu khẳng định」: Diễn tả một trạng thái, hành động vẫn đang tiếp diễn 「(Vẫn còn... / Vẫn đang...)」.",
      "Dùng để 「hỏi hoặc xác nhận」 xem một sự kiện, hoạt động hay sự vật nào đó có 「còn tiếp tục duy trì」 hay không."
    ],
    structure: "まだ + V-ます (Thể khẳng định / Thể tiếp diễn)",
    structureImg: [
      "./images/grammar/mada_vmasu.png"
    ],
    notes: {
      points: [
        "Từ 「まだ」 trong mẫu câu này mang nghĩa là 「'vẫn còn', 'cho đến bây giờ vẫn thế'」.",
        "Trong văn nói giao tiếp, động từ thường được chia ở thể tiếp diễn 「V-ています」 hoặc nói tắt thành 「V-てます」 để diễn tả trạng thái đang xảy ra."
      ],
      examples: [
        {
          jp: "イベント、「まだやってます」か？",
          vi: "Sự kiện 「vẫn còn đang diễn ra」 à?"
        },
        {
          jp: "A：お菓子、「まだあります」か？",
          vi: "A：「Vẫn còn」 bánh kẹo chứ?"
        },
        {
          jp: "B：すみません。「もう」、全部なく「なりました」。",
          vi: "B：Xin lỗi, 「đã hết」 sạch rồi ạ."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "あのラーメン屋、「まだ開【ひら】いてます」か？",
        vi: "Quán mì ramen kia giờ này vẫn còn mở cửa chứ?"
      },
      {
        speaker: "B",
        jp: "夜の11時までやってるから、「まだ大丈夫です」よ。",
        vi: "Họ bán đến 11h đêm cơ, nên giờ vẫn thoải mái đấy."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ 【Từ nghi vấn】 + S(thể thông thường) か、～",
    usage: [
      "Dùng để 「lồng một câu hỏi」 có từ nghi vấn (khi nào, ở đâu, ai, tại sao...) vào trong một câu nói lớn.",
      "Thường dùng khi không chắc đối phương có biết câu trả lời hay không, hoặc dùng để nhờ vả, giải thích."
    ],
    structure: "【Từ nghi vấn】 + S(thể thông thường) か、[わかりませんか / 教えてください / しりません]",
    notes: {
      points: [
        "Trước chữ 「か」, động từ và tính từ phải đưa về thể thông thường (普通形).",
        "Lưu ý: Nếu là câu hỏi đuôi 「ですか」 (ví dụ: 何時からですか), khi ghép vào cấu trúc này phải bỏ 「です」 đi và giữ nguyên danh từ/tính từ rồi cộng thẳng với 「か」（何時から「か」）.",
        "Mẫu này không chỉ dùng để hỏi (か、わかりますか) mà còn dùng để nhờ vả (か、教えてください) hoặc trả lời (か、わかりません)."
      ],
      examples: [
        {
          jp: "明日のフリーマーケットは、何時から「か」、わかりますか？",
          vi: "Bạn có biết chợ đồ cũ ngày mai bắt đầu 「từ mấy giờ」 không?"
        },
        {
          jp: "何時から「始まるか」、教えてください。",
          vi: "Hãy cho tôi biết bắt đầu từ mấy giờ với."
        },
        {
          jp: "会議はいつ「終わるか」、わかりません。",
          vi: "Tôi không biết cuộc họp khi nào xong nữa."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "今度の花火大会、どこで「やるか」知っていますか？",
        vi: "Bạn có biết lễ hội pháo hoa tới đây được tổ chức ở đâu không?"
      },
      {
        speaker: "B",
        jp: "すみません、私もどこで「開【ひら】かれるか」分からないんです。",
        vi: "Xin lỗi nhé, tôi cũng không biết là nó được tổ chức ở đâu nữa."
      }
    ]
  },

];
