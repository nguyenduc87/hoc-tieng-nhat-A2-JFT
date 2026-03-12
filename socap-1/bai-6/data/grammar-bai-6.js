export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 6 – Bưu điện đi thế nào thì được?",
    summaryList: [
      {
        label: "① Nに行きたいんですが…",
        example: "マルイデパートに「行きたいんですが…。」",
        vi: "Tôi muốn đến cửa hàng bách hóa Marui..."
      },
      {
        label: "② Vて、～",
        example: "この道をまっすぐ「行って」、２つ目の信号を左に曲がってください。",
        vi: "Đi thẳng con đường này, rồi rẽ trái ở đèn tín hiệu thứ hai."
      },
      {
        label: "③ N1じゃなくて、N2",
        example: "１つ目「じゃなくて」、２つ目です。",
        vi: "Không phải cái thứ nhất, mà là cái thứ hai."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① Nに行きたいんですが…",
    usage: [
      "～んですが… để trình bày tình huống của bản thân và nhờ đối phương giúp đỡ.",
      "Trong bài này thường dùng khi muốn hỏi đường.",
    ],
    structure: "Nに行きたいんですが…",
    notes: {
      points: [
        "Thêm 「～んですが…」 vào cuối câu để giải thích tình huống của mình và nhờ đối phương giúp đỡ.",
        "Ở đây dùng khi muốn đi đến một nơi nào đó nhưng không biết đường nên hỏi cách đi.",
      ],
      examples: [
        {
          jp: "マルイデパートに「行きたいんですが…。」",
          vi: "Tôi muốn đi đến trung tâm thương mại Maruichi."
        }
      ]
    },
    dialogue: [
      {
        speaker: "例1",
        jp: "駅はどこですか。",
        vi: "Nhà ga ở đâu ạ?"
      },
      {
        speaker: "例2",
        jp: "駅は、「どう行ったらいいですか。」（どう　Vたらいいですか）",
        vi: "Tôi phải đi như thế nào thì đến được ga?"
      },
      {
        speaker: "例3",
        jp: "銀行に「行きたいんですが…。」",
        vi: "Tôi muốn đi đến ngân hàng..."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② Vて、～",
    usage: [
      "Dùng thể て của động từ để nối các hành động xảy ra theo thứ tự.",
    ],
    structure: "Vて、～／Vてください",
    notes: {
      points: [
        "Dùng thể て để nối các hành động theo thứ tự khi hướng dẫn đường đi.",
        "Khi chỉ đường, thường nói vị trí tổng quát trước, khi gần tới thì mô tả đặc điểm nhận biết."
      ],
      examples: [
        {
          jp: "この道をまっすぐ「行って」、２つ目の信号を左に曲がってください。",
          vi: "Hãy đi thẳng con đường này và rẽ trái ở đèn giao thông thứ hai."
        },
        {
          jp: "マルイデパートは、あの信号を右に「曲がって」、そのあと、ずっとまっすぐです。",
          vi: "Để tới trung tâm thương mại Maruichi thì rẽ phải ở đèn giao thông kia, sau đó đi thẳng."
        },
        {
          jp: "科学博物館は、ここをまっすぐ「行って」、橋を「渡って」、すぐ右に曲がったところにあります。",
          vi: "Bảo tàng Khoa học đi thẳng từ đây, qua cầu rồi rẽ phải ngay là tới."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "家はどの辺ですか。",
        vi: "Nhà bạn ở khu nào?"
      },
      {
        speaker: "B",
        jp: "小島高校の近くです。",
        vi: "Gần trường cấp 3 Kojima."
      },
      {
        speaker: "A",
        jp: "もうすぐ小島高校だけど…。",
        vi: "Sắp tới trường cấp 3 Kojima rồi…"
      },
      {
        speaker: "B",
        jp: "この先に、白くて大きな家があります。その角を右に入ってください。",
        vi: "Phía trước có một ngôi nhà lớn màu trắng. Hãy rẽ phải ở góc đó."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ N1じゃなくて、N2",
    usage: [
      "Dùng để đính chính lại thông tin mà đối phương đã nói.",
      "Phủ định N1 rồi sửa lại thành N2.",
      "Khi muốn nói 'không phải A mà là B'."
    ],
    structure: "N1じゃなくて、N2",
    notes: {
      points: [
        "Dùng khi muốn sửa lại điều mà đối phương hiểu nhầm.",
        "Phủ định N1 và đưa ra thông tin đúng là N2.",
        "「～じゃなくて」 là dạng nối của 「～じゃない（です）」."
      ],
      examples: [
        {
          jp: "１つ目「じゃなくて」、２つ目です。",
          vi: "Không phải cái thứ nhất, mà là cái thứ hai."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "すみません。博物館【はくぶつかん】はどこですか。",
        vi: "Xin lỗi. Cho tôi hỏi bảo tàng ở đâu?"
      },
      {
        speaker: "B",
        jp: "博物館？ 市立【しりつ】博物館ですか。",
        vi: "Bảo tàng à? Có phải bảo tàng thành phố không?"
      },
      {
        speaker: "A",
        jp: "いいえ、市立博物館「じゃなくて」、科学【かがく】博物館です。",
        vi: "Không, không phải bảo tàng thành phố mà là Bảo tàng Khoa học."
      }
    ]
  }

];
