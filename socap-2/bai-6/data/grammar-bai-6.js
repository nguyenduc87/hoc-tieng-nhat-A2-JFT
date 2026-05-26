export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 5 – Bạn nên đặt chỗ sớm.",
    summaryList: [
      {
        label: "① V-(られ)ます <Thể khả năng①>",
        example: "新鮮【しんせん】なカニとかウニとか「食べられます」よ。",
        vi: "「Có thể ăn」 những món như cua hoặc cầu gai tươi ngon đấy."
      },
      {
        label: "② ～ところ",
        example: "遊べる「ところ」はありますか？",
        vi: "「Có chỗ nào」 có thể vui chơi không ạ?"
      },
      {
        label: "③ S(thể thông thường)って聞きました ／ S(thể thông thường)って言っていました",
        example: "うどんがおいしい「って聞きました」。\nバスが安くて便利だ「って」先輩が「言ってました」。",
        vi: "Tôi 「nghe nói」 là mì udon ngon lắm.\nTiền bối 「có nói là」 đi xe buýt vừa rẻ vừa tiện."
      },
      {
        label: "④ 【từ nghi vấn】 V-たらいいですか？",
        example: "日光【にっこう】に行くんですけど、何【なに】で「行ったらいいですか？」",
        vi: "Tôi sắp đi Nikko nhưng 「đi bằng phương tiện gì thì tốt」 ạ?"
      },
      {
        label: "⑤ V-たほうがいいです ／ V-ないほうがいいです",
        example: "厚【あ】い上着【うわぎ】を持って「行ったほうがいいです」よ。\nできれば、日曜日は「行かないほうがいいです」よ。",
        vi: "Bạn 「nên」 mang theo áo khoác dày đi thì hơn đấy.\nNếu có thể thì 「không nên」 đi vào Chủ Nhật đâu."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① V-(られ)ます <Thể khả năng 可能形①>",
    usage: [
      "Thể hiện khả năng thực hiện hành động gì trong hoàn cảnh nào đó.",
      "Thể hiện những việc có thể làm."
    ],
    structure: "V-(られ)ます",
    notes: {
      points: [
        "Câu tha động từ [N を V] khi chia động từ về thể khả năng sẽ chuyển thành [N が V-(られ)ます]. Ví dụ: カニを食べます (Tôi ăn cua) sẽ chuyển thành カニが食べられます (Tôi có thể ăn cua).",
        "Động từ nhóm 2 và động từ 来る của nhóm 3 có thể lược bỏ ら trở thành 見れる, 食べれる, 来【こ】れる.",
        "Ở trình độ sơ cấp 1, mẫu [V-辞書形 + ことができる] đã được học để biểu thị khả năng. Cấu trúc [V-(られ)ます] này cũng có thể dùng tương tự."
      ],
      examples: [
        {
          jp: "新鮮【しんせん】なカニとかウニとか「食べられます」よ。",
          vi: "Bạn có thể ăn cua và cầu gai tươi đấy."
        },
        {
          jp: "沖縄【おきなわ】は、暖【あたた】かいから、春から秋まで「泳げる」よ。シュノーケリングもできるし。",
          vi: "Vì ở Okinawa trời ấm nên có thể đi bơi từ mùa xuân đến mùa thu đấy. Có thể đi lặn nữa."
        },
        {
          jp: "京都は古い町で、お寺とか神社【じんじゃ】がたくさん「見られる」よ。",
          vi: "Kyoto là một thành phố cổ xưa, có thể xem rất nhiều chùa và đền."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "北海道【ほっかいどう】の旅行はどうでしたか？",
        vi: "Chuyến du lịch Hokkaido thế nào rồi?"
      },
      {
        speaker: "B",
        jp: "すごく楽しかったです！新鮮【しんせん】なカニとかウニとか「食べられました」よ。",
        vi: "Vui lắm luôn! Tôi đã được ăn cả cua và cầu gai tươi ngon nữa đấy."
      },
      {
        speaker: "A",
        jp: "いいですね！私もいつか行ってみたいです。",
        vi: "Thích thế! Một ngày nào đó tôi cũng muốn thử đến đó xem sao."
      },
      {
        speaker: "B",
        jp: "景色【けしき】もきれいだし、本当におすすめですよ。",
        vi: "Phong cảnh cũng đẹp nữa, thực sự rất đáng đi đấy."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② ～ところ",
    usage: [
      "ところ có nghĩa là nơi chốn.",
      "Dùng để giải thích, mô tả đặc điểm của một địa điểm nào đó bằng cách thêm cụm từ bổ nghĩa vào phía trước."
    ],
    structure: "Từ bổ nghĩa (V-thể thông thường / Tính từ) + ところ",
    notes: {
      points: [
        "Trước ところ sẽ là cụm từ thể hiện đó là nơi như thế nào (Ví dụ: nơi có thể chơi, nơi có cảnh đẹp, nơi có đồ ăn ngon, nơi có thể mua sắm).",
        "Cụm từ đứng trước đóng vai trò định ngữ bổ nghĩa trực tiếp cho danh từ ところ."
      ],
      examples: [
        {
          jp: "遊【あそ】べる「ところ」はありますか？",
          vi: "Có nơi nào có thể chơi không?"
        },
        {
          jp: "一日、ゆっくりできる「ところ」に行きたいです。",
          vi: "Tôi muốn đi tới nơi có thể thư giãn cả ngày."
        },
        {
          jp: "にぎやかで、食べ物がおいしい「ところ」です。",
          vi: "Đó là một nơi náo nhiệt với nhiều đồ ăn ngon."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "大阪【おおさか】は「どんなところ」ですか？",
        vi: "Osaka là nơi như thế nào?"
      },
      {
        speaker: "B",
        jp: "にぎやかで、食べ物がおいしい「ところ」です。",
        vi: "Đó là một nơi náo nhiệt với nhiều đồ ăn ngon."
      },
      {
        speaker: "A",
        jp: "へえ、今度の休みに行ってみたいですね。",
        vi: "Chà, kỳ nghỉ tới tôi muốn thử đến đó xem sao."
      },
      {
        speaker: "B",
        jp: "ぜひ！一日中【いちにちじゅう】ゆっくりできる「ところ」もたくさんありますよ。",
        vi: "Nhất định nhé! Ở đó cũng có nhiều nơi có thể thư giãn cả ngày đấy."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ S (thể thông thường 普通形) + って聞きました ／ って言っていました",
    usage: [
      "Đây là cách nói truyền đạt lại cho người khác những đánh giá, tin đồn, tin tức, v.v. mà tự mình nghe được hoặc người khác đã nói.",
      "Từ 「って」 được dùng như một hình thức thân mật, giản lược của trợ từ trích dẫn 「と」 trong văn nói."
    ],
    structure: "S (thể thông thường) + って聞きました\nS (thể thông thường) + って言っていました",
    notes: {
      points: [
        "Đối với danh từ (N) và tính từ đuôi na (な-Adj) ở thể khẳng định hiện tại, khi kết hợp với mẫu này sẽ chuyển thành [N / na-Adj + だって]. Ví dụ: 大変だ -> 大変だって, 有名だ -> 有名だって.",
        "Có thể sử dụng lược bớt phần phía sau, chỉ để lại 「って」 ở cuối câu giống như ví dụ 「うどんがおいしいって」 để diễn đạt ngắn gọn (Nghe nói mì udon ngon)."
      ],
      examples: [
        {
          jp: "うどんがおいしい「って聞きました」。",
          vi: "Tôi nghe nói là mì udon ngon lắm."
        },
        {
          jp: "友だちが、秋の日光は渋滞して大変だ「って言ってました」。",
          vi: "Bạn tôi nói rằng mùa thu ở Nikko đường sá đông đúc vất vả lắm."
        },
        {
          jp: "京都は豆腐料理が有名だ「って聞きました」。",
          vi: "Tôi nghe nói Kyoto nổi tiếng với các món ăn từ đậu phụ."
        },
        {
          jp: "田中さんも一緒に旅行、行きたい「って」。",
          vi: "Tanaka nói là cũng muốn đi du lịch cùng chúng ta."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "今度の旅行、どこに行こうか迷っているんだよね。",
        vi: "Chuyến du lịch tới, mình đang phân vân không biết nên đi đâu đây."
      },
      {
        speaker: "B",
        jp: "京都はどう？豆腐【とうふ】料理が有名だ「って聞きました」よ。",
        vi: "Hay là đi Kyoto đi? Mình nghe nói ở đó nổi tiếng với các món đậu phụ lắm."
      },
      {
        speaker: "A",
        jp: "いいね！バスの移動【いどう】は大変かな？",
        vi: "Hay đấy nhỉ! Nhưng di chuyển bằng xe buýt có vất vả không ta?"
      },
      {
        speaker: "B",
        jp: "バスが安くて便利だ「って」先輩【せんぱい】が言ってましたよ。",
        vi: "Tiền bối có nói là đi xe buýt vừa rẻ vừa tiện lợi đấy."
      }
    ]
  },

  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ 【Từ nghi vấn 疑問詞】 V-たらいいですか？",
    usage: [
      "Làm V thế nào thì được?",
      "Đây là cách nói dùng để xin đối phương lời khuyên về cách thức, phương pháp, cách xử lý.",
      "Trong bài này, cấu trúc trên được dùng để đưa ra lời khuyên về phương tiện di chuyển, nơi trọ, những thứ phải chuẩn bị, v.v. khi đi du lịch."
    ],
    structure: "【Từ nghi vấn】 + V-たらいいですか？",
    notes: {
      points: [
        "Động từ chia ở thể quá khứ ngắn (thể タ) kết hợp với 「ら」 để tạo thành 「たら」, phía sau là 「いいですか？」.",
        "Cấu trúc này được sử dụng kết hợp với các từ nghi vấn như 何で (bằng cái gì), 何を (cái gì), いつ (khi nào), どこに (ở đâu), どうやって (bằng cách nào), v.v."
      ],
      examples: [
        {
          jp: "日光【にっこう】に行くんですけど、「何で行ったらいいですか」？",
          vi: "Tôi chuẩn bị đi Nikko. Tôi 「nên đi bằng phương tiện gì đến đó」?"
        },
        {
          jp: "どんなところに「泊【と】まったらいいですか」？",
          vi: "Tôi 「nên trọ ở chỗ nào」?"
        },
        {
          jp: "お土産【みやげ】は、「どこで買ったらいいですか」？",
          vi: "Tôi 「nên mua đồ lưu niệm ở đâu」?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "今度、日光【にっこう】に行くんですけど、何で行ったらいいですか？",
        vi: "Sắp tới tôi sẽ đi Nikko, tôi nên đi bằng phương tiện gì đến đó thì tốt ạ?"
      },
      {
        speaker: "B",
        jp: "特急電車【とっきゅうでんしゃ】が早くて便利だから、おすすめですよ。",
        vi: "Đi tàu điện tốc hành vừa nhanh vừa tiện, tôi rất gợi ý nhé."
      },
      {
        speaker: "A",
        jp: "そうですか！宿【やど】はどんなところに泊【と】まったらいいですか？",
        vi: "Vậy ạ! Còn nơi ở thì tôi nên trọ ở chỗ nào thì được?"
      },
      {
        speaker: "B",
        jp: "のんびりできる民宿【みんしゅく】がおすすめだよ。",
        vi: "Tôi gợi ý anh nên ở nhà trọ bình dân để thư thả nghỉ ngơi."
      }
    ]
  },

  {
    id: "5",
    tab: "Mẫu 5",
    title: "⑤ V-たほうがいいです ／ V-ないほうがいいです",
    usage: [
      "Đây là cách nói dùng để đưa ra lời khuyên.",
      "「V-た」ほうがいい kết hợp với thể タ của động từ để đưa ra lời khuyên nên làm việc gì đó.",
      "「V-ない」ほうがいい kết hợp với thể ナイ của động từ để đưa ra lời khuyên không nên làm việc gì đó."
    ],
    structure: "V-た + ほうがいいです\nV-ない + ほうがいいです",
    notes: {
      points: [
        "So với cấu trúc V-るといい (đưa ra lời khuyên nhẹ nhàng đã học ở Sơ cấp 1), cấu trúc V-た／ないほうがいい 「mạnh hơn」 một chút và mang hàm ý 「nếu không làm như vậy thì sẽ nảy sinh vấn đề bất tiện」."
      ],
      examples: [
        {
          jp: "あのレストランは人気【にんき】なので、予約【よやく】して「行ったほうがいいです」よ。",
          vi: "Nhà hàng đó rất đông khách, vì vậy nên đặt chỗ trước thì hơn."
        },
        {
          jp: "お土産【みやげ】は、ここで「買わないほうがいいです」よ。",
          vi: "Quà lưu niệm thì không nên mua ở đây."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "晩ご飯はあそこのレストランに行こうと思っているんです。",
        vi: "Tôi đang định tối nay sẽ đến nhà hàng đằng kia ăn tối."
      },
      {
        speaker: "B",
        jp: "あのレストランは人気なので、予約して行ったほうがいいですよ。",
        vi: "Nhà hàng đó rất đông khách, vì vậy nên đặt chỗ trước thì hơn đấy."
      },
      {
        speaker: "A",
        jp: "そうなんですね！お土産もそこで買えますか？",
        vi: "Thế ạ! Ở đó có mua luôn quà lưu niệm được không nhỉ?"
      },
      {
        speaker: "B",
        jp: "お土産は、ここでは「買わないほうがいいです」よ。駅前【えきまえ】の方【ほう】が安いですから。",
        vi: "Quà lưu niệm thì không nên mua ở đây đâu. Vì ở trước ga bán rẻ hơn đấy."
      }
    ]
  }

];
