export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 18： Tặng món quà gì đó nhé.",
    summaryList: [
      {
        label: "① S (thể thông thường) そうです",
        example: "お子さんが「生まれたそうです」ね。",
        vi: "「Nghe nói」 là chị mới sinh em bé nhỉ."
      },
      {
        label: "② 【người】に【vật】をあげます",
        example: "アナさん「に」何かプレゼント「をあげませんか？」",
        vi: "Chúng ta cùng 「tặng」 món quà gì đó 「cho」 Ana nhé?"
      },
      {
        label: "③ S (thể thông thường) と言っていました",
        example: "アナさん、前に、焼き鳥が大好きだ「と言っていました」。",
        vi: "「Trước đây Ana có nói」 là cô ấy rất thích món thịt gà nướng."
      },
      {
        label: "④ S (thể thông thường) と思います",
        example: "もっと、思い出に残るものがいい「と思います」。",
        vi: "「Tôi nghĩ」 là những món đồ lưu lại nhiều kỷ niệm thì sẽ tốt hơn."
      }
    ]
  },
  // Chi tiết ngữ pháp
  {
    id: "1",
    tab: "Mẫu 1",
    title: "① S (thể thông thường) そうです",
    usage: [
      "Dùng để truyền đạt lại thông tin mà bản thân nghe hoặc đọc được cho người khác.",
      "Cấu tạo S (thể thông thường) <a href='./the-thong-thuong/index.html'>click xem tại đây</a>"
    ],
    structure: "S (thể thông thường 普通形) ＋ そうです",
    notes: {
      points: [
        "S thể thông thường: 「danh từ, tính từ い・な, động từ」.",
        "Cần phân biệt với mẫu 'Có vẻ': <br>1. Vます (bỏ ます) + そう: 「Có vẻ」 (sắp xảy ra / phỏng đoán).<br>2. V (る・た・ない) + そう: 「Nghe nói」 (truyền đạt thông tin).",
        "Thường dùng để mở đầu câu chuyện trước khi nói 'おめでとう' để chúc mừng đối phương."
      ],
      examples: [
        {
          jp: "お子さんが「生【う】まれたそうです」ね。",
          vi: "「Nghe nói」 anh chị mới sinh em bé ạ."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "来月、「結婚【けっこん】するそうです」ね。おめでとうございます。",
        vi: "「Nghe nói」 tháng sau chị kết hôn ạ. Chúc mừng chị nhé."
      },
      {
        speaker: "B",
        jp: "ありがとうございます。",
        vi: "Cảm ơn anh."
      }
    ]
  },
  {
    id: "2",
    tab: "Mẫu 2",
    title: "② 【người A】は【người B】 に 【vật 物】 を あげます",
    usage: [
      "「Người A」 tặng/cho 「người B」 món đồ.",
      "Trợ từ 「に」 đứng sau người nhận để chỉ đối tượng được cho/tặng."
    ],
    structure: "【Người cho】 は 【Người nhận】 に 【Vật】 を あげます",
    notes: {
      points: [
        "「あげます (あげる)」 dùng khi 「người nói」 tặng cho người khác, hoặc người này tặng cho người kia (「không dùng khi người khác tặng cho mình」).",
        "Đối với người trên, thường chuyển sang dùng 「さしあげます」 để thể hiện sự kính trọng.",
        "Cần phân biệt rõ với 「くれる」 (người khác tặng mình) và 「もらう」 (mình nhận từ người khác)."
      ],
      examples: [
        {
          jp: "アナさんに何かプレゼントをあげませんか？",
          vi: "Hay là mình tặng gì đó cho Ana nhỉ?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "明日は、トアンさんの誕生日ですね。みんなで、何かあげませんか？",
        vi: "Ngày mai là sinh nhật Toản nhỉ. Hay là chúng ta cùng tặng món quà gì cho bạn ấy?"
      },
      {
        speaker: "B",
        jp: "いいですね。じゃあ、ケーキと花をあげましょう。",
        vi: "Được đấy nhỉ. Vậy thì chúng ta tặng bánh và hoa nhé."
      }
    ]
  },

  {
    id: "note_giving_receiving",
    tab: "Phân biệt あげる, くれる, và もらう",
    title: "Phân biệt cách sử dụng あげる, くれる, và もらう",
    usage: [
      "Trong tiếng Nhật có 3 động từ thể hiện sự cho và nhận là あげる, くれる và もらう.",
      "Việc lựa chọn động từ phụ thuộc vào việc ai là 'người tặng', ai là 'người nhận' và có sự xuất hiện của 'tôi' (私) hay không."
    ],
    structure: "Dựa vào vai trò chủ ngữ",
    notes: {
      points: [
        "【あげる】: Dùng khi chủ ngữ là 'người tặng'. (A tặng cho B).",
        "【くれる】: Dùng khi chủ ngữ là 'người tặng', nhưng người nhận phải là 'tôi' (私) hoặc người thân trong gia đình tôi.",
        "【もらう】: Dùng khi chủ ngữ là 'người nhận'. (A nhận từ B).",
        "Ghi nhớ: Khi mình được nhận, nếu muốn dùng người tặng làm chủ ngữ thì dùng くれる, nếu muốn dùng mình làm chủ ngữ thì dùng もらう."
      ],
      examples: [
        {
          jp: "「A」さんは、Bさんにプレゼントを「あげました」。",
          vi: "「A」 đã tặng B một món quà. (「Chủ ngữ là người tặng」)"
        },
        {
          jp: "Aさんは、「私に」プレゼントを「くれました」。",
          vi: "A đã tặng tôi một món quà. (Chủ ngữ là người tặng, 「người nhận là 'tôi'」)"
        },
        {
          jp: "「A」さんは、Bさんにプレゼントを「もらいました」。",
          vi: "A đã nhận một món quà từ B. (「Chủ ngữ là người nhận」)"
        },
        {
          jp: "「私」は、Itoさんにプレゼントを「もらいました」。",
          vi: "Tôi đã nhận một món quà từ Ito. (「Chủ ngữ là người nhận」)"
        }
      ]
    }
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ S (thể thông thường) と言っていました",
    usage: [
      "Dùng để 「truyền đạt lại」 điều một người đã nói cho người khác biết.",
      "Thông tin này thường là những điều bản thân đã nghe được trực tiếp từ người nói."
    ],
    structure: "S (thể thông thường 普通形) ＋ と言っていました",
    notes: {
      points: [
        "Trợ từ 「と」 dùng để biểu thị nội dung trích dẫn. Câu trích dẫn đứng trước 「と」 phải chia về thể thông thường.",
        "Phân biệt với ～そうです: 「～そうです」 có nguồn tin rộng hơn (tivi, báo chí, internet...), còn 「～と言っていました」 giới hạn ở việc nghe trực tiếp từ chính chủ.",
        "Mẫu này rất hữu ích khi muốn nhắc lại sở thích hoặc dự định của ai đó để gợi ý quà tặng."
      ],
      examples: [
        {
          jp: "アナさん、前に、焼き鳥が大好きだ「と言っていました」。",
          vi: "Ana 「từng nói rằng」 cô ấy rất thích món thịt gà nướng."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "さっき、山田さんから電話がありましたよ。",
        vi: "Vừa nãy chị có điện thoại từ anh Yamada đấy."
      },
      {
        speaker: "B",
        jp: "何か言っていましたか？",
        vi: "Anh ấy có nói gì không?"
      },
      {
        speaker: "A",
        jp: "またあとで電話する「と言っていました」。",
        vi: "Anh ấy nói là sẽ gọi điện lại sau."
      }
    ]
  },
  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ S (thể thông thường) と思います",
    usage: [
      "Dùng để thể hiện 「ý kiến, suy nghĩ hoặc phán đoán của bản thân」 về một vấn đề nào đó."
    ],
    structure: "S (thể thông thường 普通形) ＋ と思います",
    notes: {
      points: [
        "Trợ từ 「と」 dùng để biểu thị nội dung của suy nghĩ (nghĩ rằng...).",
        "Câu trích dẫn trước 「と」 phải chia về thể thông thường.",
        "Đây là cách nói mang tính chủ quan của người nói, giúp câu văn trở nên mềm mỏng hơn thay vì khẳng định chắc chắn."
      ],
      examples: [
        {
          jp: "もっと、思【おも】い出【で】に残【のこ】るものがいい「と思【おも】います」。",
          vi: "Tôi nghĩ là nên tặng món quà gì đó có thể lưu giữ làm kỷ niệm hơn."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "明日のパーティーは何人ぐらい来ますか？",
        vi: "Bữa tiệc ngày mai có khoảng bao nhiêu người đến?"
      },
      {
        speaker: "B",
        jp: "10人ぐらいだ「と思【おも】います」。",
        vi: "Tôi nghĩ là khoảng 10 người."
      },
      {
        speaker: "A",
        jp: "佐藤【さとう】さん、来るでしょうか？",
        vi: "Liệu Sato có đến không nhỉ?"
      },
      {
        speaker: "B",
        jp: "忙しいと言っていましたから、来ない「と思【おも】います」よ。",
        vi: "Anh ấy nói là bận nên tôi nghĩ là anh ấy sẽ không đến đâu."
      }
    ]
  },

];
