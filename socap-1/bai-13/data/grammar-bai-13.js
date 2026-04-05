export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 13： Máy photocopy này dùng thế nào?",
    summaryList: [
      {
        label: "① ～んですが…",
        example: "会議室の電気が「つかないんですが…。」",
        vi: "Đèn phòng họp không sáng (tôi phải làm sao bây giờ)..."
      },
      {
        label: "② V-そうです",
        example: "どのぐらい「かかりそう」ですか？",
        vi: "Có vẻ sẽ mất khoảng bao lâu nữa?"
      },
      {
        label: "③ V-たいとき、～",
        example: "両面コピー「したいとき」は、どうすればいいですか？",
        vi: "Khi muốn photocopy hai mặt thì tôi nên làm thế nào?"
      },
      {
        label: "④ V-ると、～",
        example: "このスタートボタンを「押すと」、コピーが始まります。",
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
          jp: "会議室【かいぎしつ】の電気がつかないんですが…。",
          vi: "Đèn phòng họp không bật được ạ."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "会議室の電気がつかないんですが…。",
        vi: "Đèn phòng họp không bật được ạ."
      },
      {
        speaker: "B",
        jp: "そうですか。では、事務所【じむしょ】に連絡【れんらく】してください。",
        vi: "Vậy à. Thế thì hãy liên hệ với văn phòng nhé."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② V-そうです",
    usage: [
      "Dùng để diễn đạt dự đoán, phỏng đoán về hành động hoặc tình trạng dựa trên tình hình, tiến triển."
    ],
    structure: "V-ます → bỏ ます + そうです",
    notes: {
      points: [
        "Có thể dùng để hỏi đáp về tiến độ công việc.",
        "Ở bài 12 đã học cách kết hợp với tính từ (おいしそうです). Trong bài này học cách kết hợp với động từ thể ます bằng cách bỏ ます.",
        "Khi dự đoán thời gian cần thiết, thêm で sau khoảng thời gian: 10分ぐらいで (trong khoảng 10 phút)."
      ],
      examples: [
        {
          jp: "あと10分ぐらいで「終わりそう」です。",
          vi: "Có vẻ sẽ kết thúc sau khoảng 10 phút nữa."
        },
        {
          jp: "明日、一日中雨が「降りそう」です。",
          vi: "Ngày mai, trời có vẻ mưa cả ngày."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "1人で、できますか？",
        vi: "Bạn có làm được một mình không?"
      },
      {
        speaker: "B",
        jp: "はい、だいじょうぶです。",
        vi: "Vâng, không vấn đề gì ạ."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ V-たいとき、～",
    usage: [
      "Dùng để diễn đạt nguyện vọng muốn làm một hành động nào đó và xin lời khuyên từ đối phương."
    ],
    structure: "V-ます → bỏ ます + たいとき、～",
    notes: {
      points: [
        "Ở bài 10 đã học ～とき để chỉ thời điểm (高校のとき 少し日本語を勉強しました).",
        "Trong bài này, cấu trúc V-たいとき,どうすればいいですか? dùng để trình bày mong muốn và hỏi cách thực hiện.",
        "Cụm từ どうすればいいですか? (Tôi phải làm thế nào?) được dùng như một mẫu câu cố định."
      ],
      examples: [
        {
          jp: "両面【りょうめん】コピー「したいとき」は、どうすればいいですか？",
          vi: "Tôi muốn photocopy 2 mặt thì phải làm thế nào?"
        },
        {
          jp: "拡大【かくだい】コピー「したいとき」は、どうすればいいですか？",
          vi: "Tôi muốn photocopy phóng to thì phải làm thế nào?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "拡大コピーしたいときは、どうすればいいですか？",
        vi: "Tôi muốn photocopy phóng to thì phải làm thế nào?"
      },
      {
        speaker: "B",
        jp: "このボタンを押してください。",
        vi: "Hãy ấn nút này."
      }
    ]
  },

  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ V-ると、～",
    usage: [
      "Dùng để diễn đạt kết quả tự nhiên xảy ra sau một hành động nào đó.",
      "Thường dùng khi giải thích cách sử dụng máy móc, dụng cụ."
    ],
    structure: "V-る + と、～",
    notes: {
      points: [
        "～と kết hợp với động từ ở thể từ điển.",
        "Diễn đạt sự việc xảy ra như kết quả của một hành động.",
        "Ví dụ: Ấn nút thì máy sẽ hoạt động."
      ],
      examples: [
        {
          jp: "春に「来ると」、色々な花が咲【さ】きます。",
          vi: "Đến vào mùa xuân thì nhiều loại hoa sẽ nở."
        },
        {
          jp: "このスタートボタンを「押【お】すと」、コピーが始まります。",
          vi: "Ấn nút start thì sẽ bắt đầu photocopy."
        },
        {
          jp: "このボタンを「押【お】すと」、カラーコピーができます。",
          vi: "Ấn nút này thì có thể photocopy màu."
        },
        {
          jp: "このトイレは、ここに手【て】を「かざすと」、水が流【なが】れます。",
          vi: "Ở nhà vệ sinh này, che tay vào đây thì nước sẽ xả ra."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "このボタンを押【お】すと、カラーコピーができます。",
        vi: "Ấn nút này thì có thể photocopy màu."
      },
      {
        speaker: "B",
        jp: "はい、そうです。簡単ですね。",
        vi: "Vâng, đúng vậy. Đơn giản nhỉ."
      }
    ]
  },

  {
    id: "5",
    tab: "Mẫu 5",
    title: "⑤ Trả lời với はい／いいえ",
    usage: [
      "Khi câu hỏi là phủ định, nếu đúng thì trả lời はい + phủ định, nếu sai thì trả lời いいえ + khẳng định."
    ],
    structure: "はい + phủ định文 ／ いいえ + khẳng định文",
    notes: {
      points: [
        "Ví dụ: コピー機、使ったことないですか？ → はい、ないです。",
        "Nếu thực tế là đã dùng, thì trả lời: いいえ、あります。"
      ],
      examples: [
        {
          jp: "この機械【きかい】、前に使ったことないですか？",
          vi: "Cái máy này, trước đây bạn chưa từng dùng à?"
        },
        {
          jp: "はい、使ったことありません。",
          vi: "Vâng, tôi chưa từng dùng."
        },
        {
          jp: "いいえ、前に一度使ったことがあります。",
          vi: "Không. Tôi từng dùng một lần rồi."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "コピー機、使ったことないですか？",
        vi: "Bạn chưa từng sử dụng máy photocopy à?"
      },
      {
        speaker: "B",
        jp: "はい、ないです。",
        vi: "Vâng, tôi chưa ạ."
      },
      {
        speaker: "C",
        jp: "いいえ、あります。",
        vi: "Không, tôi đã từng dùng rồi."
      }
    ]
  },
];
