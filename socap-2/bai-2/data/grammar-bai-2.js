export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 1 – Tôi vừa mới đến Nhật tuần trước.",
    summaryList: [
      {
        label: "① N1 という N2",
        example: "ホアは【花】「という」意味です。",
        vi: "Hoa có nghĩa là 「Hoa」 (bông hoa)."
      },
      {
        label: "② V-たばかりです",
        example: "先週、日本に「来たばかり」です。",
        vi: "Tôi 「vừa mới đến」 Nhật vào tuần trước."
      },
      {
        label: "③ V-ていました",
        example: "ベトナムでは、ホテルで「働いていました」。",
        vi: "Ở Việt Nam, tôi đã từng làm việc tại khách sạn."
      },
      {
        label: "④ それ／そこ <Đại từ chỉ định trong văn cảnh>",
        example: "ジョグジャカルタという大きい町があります。ウォノソボは、「そこ」からバスで４時間ぐらいです。",
        vi: "Có một thành phố lớn tên là Yogyakarta. Wonosobo cách 「nơi đó」 khoảng 4 tiếng đi xe buýt."
      },
      {
        label: "⑤ ～て、～ / ～から、～ / ～けど、～",
        example: "お茶の畑がたくさん「あって」、のんびりしています。/ ウランバートルは首都だ「から」、都会ですよ。/ 首都ではない「けど」、とてもにぎやかです。",
        vi: "Có nhiều cánh đồng trà và rất thong thả. / Vì Ulaanbaatar là thủ đô nên là đô thị đấy. / Tuy không phải thủ đô nhưng rất nhộn nhịp."
      }
    ]
  },
  {
    id: "1",
    tab: "Mẫu 1",
    title: "① N1 という N2",
    usage: [
      "Sử dụng khi giới thiệu hoặc giải thích về một đối tượng mà người nghe có thể chưa biết.",
      "Cấu trúc 「～という意味」 dùng để giải thích ý nghĩa của từ. Trong bài này, cấu trúc trên được sử dụng để giải thích về ý nghĩa tên của bản thân cho đối phương."
    ],
    structure: "N1 という N2 (N2 là..., N2 như là..., N2 gọi là...). ",
    notes: {
      points: [
        "Ngoài ra, cấu trúc này cũng có các cách dùng phổ biến như: ~という料理 (món ăn tên là ~), ~という店 (cửa hàng tên là ~), ~という人 (người tên là ~)."
      ],
      examples: [
        {
          jp: "「フォー」という料理",
          vi: "Món ăn tên là 「Phở」"
        },
        {
          jp: "「まるかめ」という店",
          vi: "Cửa hàng tên là 「Marukame」"
        },
        {
          jp: "さっき、田中「という」人から電話がありましたよ",
          vi: "Vừa rồi, có điện thoại từ người tên là 「Tanaka」."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "ベトナムのどちらからですか。",
        vi: "Bạn đến từ đâu ở Việt Nam vậy?"
      },
      {
        speaker: "B",
        jp: "ダナンという町から来ました。",
        vi: "Tôi đến từ một thành phố tên là Đà Nẵng."
      },
      {
        speaker: "A",
        jp: "そうですか。今は何をしていますか。",
        vi: "Vậy à. Hiện tại bạn đang làm gì?"
      },
      {
        speaker: "B",
        jp: "今は、「東京イン」というホテルで働いています。",
        vi: "Hiện tại tôi đang làm việc ở một khách sạn tên là Tokyo Inn."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② V-たばかりです",
    usage: [
      "Đây là cách nói thể hiện một hành động nào đó mới xảy ra chưa lâu.",
      "Thời gian 'vừa mới' này được quyết định dựa trên cảm nhận chủ quan của người nói."
    ],
    structure: "V-た + ばかりです (Vừa mới V...)",
    notes: {
      points: [
        "Kết hợp với động từ thể Quá khứ (thể た).",
        "Thường đi kèm với các động từ như: 来た (đến), 着いた (đến nơi), 帰った (về), 始めた (bắt đầu), 食べた (ăn)..."
      ],
      examples: [
        {
          jp: "先週、日本に「来たばかり」です。",
          vi: "Tôi 「vừa mới đến」 Nhật vào tuần trước."
        },
        {
          jp: "さっき空港【くうこう】に「着【つ】いたばかり」です。",
          vi: "Tôi 「vừa mới tới」 sân bay lúc nãy."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "合気道【あいきどう】は長いんですか？",
        vi: "Bạn tập Aikido lâu chưa?"
      },
      {
        speaker: "B",
        jp: "いいえ、 最近【さいきん】、「始【はじ】めたばかり」です。",
        vi: "Chưa, tôi 「mới bắt đầu」 gần đây thôi."
      },
      {
        speaker: "A",
        jp: "そうですか。頑張【がんば】ってくださいね。",
        vi: "Vậy à. Cố gắng lên nhé."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ V-ていました",
    usage: [
      "Trong bài này, cấu trúc được sử dụng khi nói về 「công việc đã làm trong một giai đoạn nào đó ở quá khứ」."
    ],
    structure: "V-て + いました (Đã làm... [trong một khoảng thời gian])",
    notes: {
      points: [
        "Khác với V-てい ます (trạng thái hiện tại), V-ていました diễn tả trạng thái trong quá khứ.",
        "Thường dùng để kể về nghề nghiệp, thói quen hoặc việc học tập trước đây."
      ],
      examples: [
        {
          jp: "ベトナムでは、ホテルで「働いていました」。",
          vi: "Hồi ở Việt Nam, tôi đã  (từng có thời gian) làm việc tại khách sạn."
        },
        {
          jp: "いけばなを「習っていました」。",
          vi: "Tôi đã (từng có thời gian) học cắm hoa ikebana."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "国ではどんな仕事を「していました」か？",
        vi: "Bạn đã làm công việc gì khi còn ở nước mình?"
      },
      {
        speaker: "B",
        jp: "ツアーガイドの仕事をしていました。",
        vi: "Tôi đã làm hướng dẫn viên du lịch."
      },
      {
        speaker: "A",
        jp: "へえ、すごいですね！",
        vi: "Chà, giỏi quá nhỉ!"
      }
    ]
  },

  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ それ／そこ <Đại từ chỉ định trong văn cảnh>",
    usage: [
      "Dùng để chỉ 「những điều」 bản thân hoặc đối phương 「đã nói trước đó」 trong hội thoại.",
      "Trong văn cảnh, 'そこ' hoặc 'それ' được dùng để 「thay thế cho một danh từ/địa điểm」 cụ thể đã được nhắc đến ở câu trước 「để tránh lặp từ」."
    ],
    structure: "それ / そこ (Cái đó / Nơi đó)",
    notes: {
      points: [
        "Sử dụng để chỉ những thứ mà người nghe vừa nhắc tới hoặc mình vừa nêu ra.",
        "Ví dụ: 'そこ' trong câu trên dùng để chỉ 'ジョグジャカルタ' (Yogyakarta) đã được nhắc đến."
      ],
      examples: [
        {
          jp: "「ジョグジャカルタ」という大きい町があります。ウォノソボは、「そこ」からバスで4時間ぐらいです。",
          vi: "Có một thành phố lớn tên là 「Yogyakarta」. Wonosobo cách 「nơi đó」 khoảng 4 tiếng đi xe buýt."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "私の町は、「ストロマトライト」が有名です。",
        vi: "Thành phố của tôi nổi tiếng với stromatolite."
      },
      {
        speaker: "B",
        jp: "「それ」は何ですか。",
        vi: "Đó là cái gì thế?"
      }
    ]
  },
  {
    id: "5",
    tab: "Mẫu 5",
    title: "⑤ ～て、～ / ～から / ～けど",
    usage: [
      "Sử dụng để nối hai câu thành một câu duy nhất.",
      "Mẫu 「～て」 dùng để liệt kê các câu.",
      "Mẫu 「～から」 dùng để nói về nguyên nhân, lý do.",
      "Mẫu 「～けど」 dùng để nối hai vế có quan hệ đối lập (tương phản)."
    ],
    structure: "Câu 1 + [て／から／けど] + Câu 2",
    notes: {
      points: [
        "「～から」 và 「～けど」 có thể kết hợp với cả thể lịch sự (です／ます) hoặc thể thông thường (だ／v từ điển).",
        "Có thể kết hợp với cả câu khẳng định và câu phủ định (ví dụ: ではないから)."
      ],
      examples: [
        {
          jp: "お茶の畑【はたけ】がたくさん「あって」、のんびりしています。",
          vi: "Có nhiều vườn chè, cảm giác rất thư thái."
        },
        {
          jp: "ウランバートルは首都【しゅと】だ「から」、都会【とかい】ですよ。",
          vi: "「Vì」 Ulaanbaatar là thủ đô 「nên」 đó là một đô thị đấy."
        },
        {
          jp: "首都【しゅと】ではない「けど」、とてもにぎやかです。",
          vi: "Không phải thủ đô 「nhưng」 rất náo nhiệt."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "あなたの町はどんなところですか？",
        vi: "Thành phố của bạn là nơi như thế nào?"
      },
      {
        speaker: "B",
        jp: "私の町は有名じゃないけど、とてもいい町ですよ。町の中央【ちゅうおう】は、屋台【やたい】がたくさんあって、にぎやかです。",
        vi: "Thành phố của tôi tuy không nổi tiếng nhưng là một nơi rất tốt. Ở trung tâm thành phố có rất nhiều quán xá và rất náo nhiệt."
      },
      {
        speaker: "A",
        jp: "へえ、いいですね。静かですか？",
        vi: "Chà, thích nhỉ. Ở đó có yên tĩnh không?"
      },
      {
        speaker: "B",
        jp: "町は山の中だから、空気【くうき】がよくて、とても気持【きもち】ちがいいんです。",
        vi: "Vì thị trấn nằm ở trên núi nên không khí trong lành và rất dễ chịu."
      }
    ]
  },


];
