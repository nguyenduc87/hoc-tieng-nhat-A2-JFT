export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 7 – Tôi bị lạc đường nên sẽ đến muộn một chút",
    summaryList: [
      {
        label: "① N はどうですか？",
        example: "６時は「どうですか？」",
        vi: "6 giờ có 「được không?」"
      },
      {
        label: "② N でもいいですか？",
        example: "６時半「でもいいですか？」",
        vi: "6 giờ rưỡi 「cũng được chứ?」"
      },
      {
        label: "③ Nで、～／V-て、～ ＜Nguyên nhân / lý do＞",
        example: "事故「で」電車が止まりました。／「ねぼうして」、今、起きました。",
        vi: "Tàu điện dừng vì tai nạn. / Vì ngủ quên nên bây giờ tôi mới thức dậy."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① N はどうですか？",
    usage: [
      "Dùng khi 「đề xuất」 một điều gì đó và hỏi xem đối phương có đồng ý không.",
      "Trong bài này dùng để quyết định thời gian hoặc địa điểm gặp.",
      "N là từ chỉ thời gian hoặc địa điểm."
    ],
    structure: "N はどうですか？",
    notes: {
      points: [
        "N là thời gian.",
        "どうでしょうか：lịch sự hơn khi nói với người trên."
      ],
      examples: [
        {
          jp: "６時は「どうですか」？",
          vi: "6 giờ có 「được không?」"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "明日の待ち合わせ、「どうしますか？」",
        vi: "Ngày mai mình sẽ gặp nhau thế nào 「kế hoạch gặp」?"
      },
      {
        speaker: "B",
        jp: "ホテルのロビーは「どうですか？」",
        vi: "Sảnh khách sạn 「được không?」"
      },
      {
        speaker: "A",
        jp: "わかりました。ロビーですね。",
        vi: "Được. Hẹn cậu ở sảnh khách sạn nhé."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② N でもいいですか？",
    usage: [
      "Dùng khi đưa ra một 「đề xuất thay thế」 và hỏi xem đối phương có đồng ý không.",
      "Thường dùng khi đề xuất ban đầu không thuận tiện nên đưa ra phương án khác.",
      "N là từ chỉ thời gian hoặc địa điểm."
    ],
    structure: "N でもいいですか？",
    notes: {
      points: [
        "「Đưa ra phương án thay thế」 hỏi xem đối phương đồng ý không?",
        "N là từ chỉ thời gian hoặc địa điểm."
      ],
      examples: [
        {
          jp: "「６時半でもいいですか？」",
          vi: "Hay là 「6 giờ rưỡi được không?」"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "明日の待【ま】ち合【あ】わせ、平和【へいわ】の鳥の像【ぞう】の前は「どうですか？」",
        vi: "Ngày mai mình gặp nhau trước bức tượng Heiwa-no-tori 「được không?」"
      },
      {
        speaker: "B",
        jp: "ちょっとわかりません。「駅の改札【かいさつ】でもいいですか？」",
        vi: "Tớ không biết chỗ đấy. Hay là mình gặp nhau ở 「cửa soát vé nhà ga được không?」"
      },
      {
        speaker: "A",
        jp: "いいですよ。",
        vi: "Được thôi."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ N で、～／V-て、～ ＜Nguyên nhân / lý do＞",
    usage: [
      "Dùng khi đưa ra nguyên nhân hoặc lý do cho sự việc ở phía sau.",
      "Nếu là danh từ thì dùng 「Nで」.",
      "Nếu là động từ thì dùng dạng 「V-て」."
    ],
    structure: "Nで、～／V-て、～",
    notes: {
      points: [
        "Dùng để nói nguyên nhân hoặc lý do của sự việc.",
        "Dạng 「て」 không chỉ nói thứ tự hành động mà còn diễn tả lý do hoặc nguyên nhân."
      ],
      examples: [
        {
          jp: "「事故で」電車が止まりました。",
          vi: "Tàu điện dừng 「vì tai nạn」."
        },
        {
          jp: "「ねぼうして」、今、起きました。",
          vi: "「Vì ngủ quên」 nên bây giờ tôi mới thức dậy."
        }
      ]
    },
    dialogue: [
      {
        speaker: "例1",
        jp: "「渋滞【じゅうたい】で」、30分ぐらい遅【おく】れます。",
        vi: "Tôi sẽ đến muộn khoảng 30 phút 「vì tắc đường.」"
      },
      {
        speaker: "例2",
        jp: "道に「迷【まよ】って」、ちょっと遅【おく】れます。",
        vi: "Tôi sẽ đến muộn một chút 「vì bị lạc」 đường."
      }
    ]
  }

];
