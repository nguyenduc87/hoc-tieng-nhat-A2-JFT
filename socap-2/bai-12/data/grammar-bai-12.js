export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 12 – Máy hút bụi này nhẹ và dễ di chuyển đấy.",
    summaryList: [
      {
        label: "① V-るまで、～",
        example: "手元【てもと】に「届くまで」、２日しかかかりませんでした。",
        vi: "Cho đến khi sản phẩm tới tay, chỉ mất có 2 ngày."
      },
      {
        label: "② V-やすいです / V-にくいです",
        example: "どっちが使い「やすい」ですか？ / この掃除機【そうじき】は、重【おも】くて、使い「にくい」ですね。",
        vi: "Cái nào dễ sử dụng hơn? / Chiếc máy hút bụi này nặng nên khó sử dụng nhỉ."
      },
      {
        label: "③ N1とN2(と)、どちら／どっちが～か？（N1より）N2のほうが、～。",
        example: "A：どっちが使いやすいですか？ B：セーシバの掃除機【そうじき】「のほうが」スギシタより軽くて、動【うご】かしやすいですよ。",
        vi: "A: Cái nào dễ sử dụng hơn? B: Máy hút bụi của Seeshiba nhẹ và dễ di chuyển hơn của Sugishita đấy."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① V-るまで、～",
    usage: [
      "「まで」 kết hợp với danh từ để thể hiện khoảng thời gian. Trong bài này, 「まで」 kết hợp với động từ để biểu thị sự liên tục mang tính thời gian cho đến khi hành động kết thúc."
    ],
    structure: "Động từ thể từ điển (V-る) + まで、～",
    notes: {
      points: [
        "Kết hợp với thể từ điển của động từ.",
        "Trong ví dụ cốt lõi, 「まで」 được dùng để nói về thời gian giao hàng."
      ],
      examples: [
        {
          jp: "手元に「届くまで」、2日しかかかりませんでした。",
          vi: "Chỉ mất 2 ngày cho đến khi nhận được."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "パソコンが「直るまで」、どのぐらいかかりますか？",
        vi: "Sẽ mất bao lâu để sửa máy tính?"
      },
      {
        speaker: "B",
        jp: "1週間ぐらいだと思います。",
        vi: "Tôi nghĩ khoảng 1 tuần."
      },
      {
        speaker: "A",
        jp: "店の人が「来るまで」、ここで待っていてください。",
        vi: "Hãy đợi ở đây cho đến khi nhân viên cửa hàng đến."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② V-やすいです / V-にくいです",
    usage: [
      "Đây là cách nói thể hiện sự dễ dàng hoặc khó khăn khi thực hiện hành động."
    ],
    structure: "Động từ thể マス (bỏ ます) + やすい / にくい + です",
    notes: {
      points: [
        "Kết hợp với thể マス đã bỏ ます của động từ. 「～やすい」 thể hiện rằng việc đó dễ dàng, 「～にくい」 thể hiện rằng việc đó khó khăn.",
        "Có các cách diễn đạt quen thuộc như: わかりやすい／わかりにくい (dễ hiểu / khó hiểu), 見やすい／見にくい (dễ nhìn / khó nhìn), 書きやすい／書きにくい (dễ viết / khó viết)."
      ],
      examples: [
        {
          jp: "どっちが使い「やすい」ですか？",
          vi: "Cái nào dễ sử dụng?"
        },
        {
          jp: "この掃除機【そうじき】は、重【おも】くて、使い「にくい」ですね。",
          vi: "Máy hút bụi này nặng, khó sử dụng nhỉ."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "この説明書【せつめいしょ】は、説明がとてもわかり「やすい」ですね。",
        vi: "Quyển sách hướng dẫn này giải thích rất dễ hiểu nhỉ."
      },
      {
        speaker: "B",
        jp: "この掃除機【そうじき】は、じょうぶで壊【こわ】れ「にくい」ですよ。",
        vi: "Chiếc máy hút bụi này bền và khó hỏng (khó hư) lắm đấy."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ N1とN2(と)、どちら／どっちが～か？ （N1より）N2のほうが、～。",
    usage: [
      "Đây là cách nói so sánh 2 thứ. Trong bài này, cấu trúc trên được dùng để so sánh chức năng và giá cả của sản phẩm."
    ],
    structure: "N1 と N2 (と)、どちら／どっちが ~ か？ / （N1 より）N2 のほうが、～。",
    notes: {
      points: [
        "「のほう」 trong N2のほうが～ dùng để nhấn mạnh việc so sánh. 「N1より」 biểu thị đối tượng so sánh, nhưng được lược bỏ nếu việc so sánh với cái gì đã rõ ràng trong văn cảnh.",
        "Chủ đề của bài này là mua sắm, vì vậy sẽ rất hữu ích khi nhớ các cách nói như 使【つか】いやすい (dễ sử dụng), 軽【かる】い (nhẹ), デザインがいい (thiết kế đẹp), 機能【きのう】が多【おお】い (nhiều chức năng), 手【い】入れが簡単【かんたん】 (dễ chăm sóc), 壊【こわ】れにくい (khó hỏng), v.v.."
      ],
      examples: [
        {
          jp: "A：どっちが使いやすいですか？",
          vi: "Cái nào dễ sử dụng?"
        },
        {
          jp: "B：セーシバの掃除機【そうじき】「のほうが」スギシタより軽【かる】くて、動【うご】かしやすいですよ。",
          vi: "Máy hút bụi của Seshiba nhẹ và dễ di chuyển hơn so với máy của Sugishita."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "冷蔵庫【れいぞうこ】の色は、白とシルバーと、「どっちが」人気【にんき】ですか？",
        vi: "Màu nào của tủ lạnh được ưa chuộng hơn, màu trắng hay màu bạc?"
      },
      {
        speaker: "B",
        jp: "白のほうがよく売【う】れています。でも、若【わか】い人には、白よりシルバー「のほうが」人気【にんき】があります。",
        vi: "Màu trắng bán được nhiều hơn. Tuy nhiên, màu bạc được giới trẻ ưa chuộng hơn màu trắng."
      }
    ]
  },

  
];
