export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 14： Tôi xin nghỉ có được không ạ?",
    summaryList: [
      {
        label: "① Nで、～／ナA-で、～／イA-くて、～／V-て、～",
        example: "道が「混【こ】んでいて」、ぜんぜん動きません。",
        vi: "「Vì」 đường đông nên xe không nhúc nhích được. 「(Nguyên nhân / Lý do)」"
      },
      {
        label: "② S1。それで、S2",
        example: "これから病院に行きます。「それで」、少し遅刻【ちこく】します。",
        vi: "Tôi sẽ đi bệnh viện. 「Vì vậy」 tôi sẽ hơi muộn."
      },
      {
        label: "③ V-てもいいですか？",
        example: "トイレに「行って来てもいいですか？」",
        vi: "Tôi 「xin phép」 đi vệ sinh có được không?"
      },
      {
        label: "④ V-てもいいでしょうか？",
        example: "明日の午後、「早退【そうたい】してもいいでしょうか」？",
        vi: "Chiều mai tôi 「xin phép」 về sớm có được không?"
      },
      {
        label: "⑤ V-なければなりません",
        example: "ちょっと、役所に「行かなければならないんです。」",
        vi: "Tôi 「phải đi」 đến cơ quan hành chính một chút."
      },
      {
        label: "⑥ ～んです①",
        example: "東京から、国の友だちが「来るんです。」",
        vi: "Bạn từ quê sẽ đến Tokyo. 「(Giải thích tình huống)」"
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① Nで / ナA-で / イA-くて / V-て Nguyên nhân / Lý do",
    usage: [
      "Sử dụng để nối 2 câu, trong đó vế trước biểu thị nguyên nhân, lý do của vế sau."
    ],
    structure: "Nで / ナA-で / イA-くて / V-て",
    notes: {
      points: [
        "Nếu là danh từ: sử dụng Nで (Ví dụ: 事故で - do tai nạn).",
        "Nếu là tính từ đuôi ナ: sử dụng ～で (Ví dụ: 仕事が大変で - vì công việc vất vả).",
        "Nếu là tính từ đuôi イ: sử dụng ～くて (Ví dụ: 体の具合が悪くて - vì không khỏe).",
        "Nếu là động từ: sử dụng thể て (Ví dụ: 道が混んでいて - vì đường đông).",
        "Cấu trúc này cũng thường dùng khi trình bày lý do để xin lỗi."
      ],
      examples: [
        {
          jp: "道が混【こ】んでいて、ぜんぜん動きません。",
          vi: "Đường đông nên các phương tiện hoàn toàn không di chuyển."
        },
        {
          jp: "「事故で」、電車が遅れています。",
          vi: "Do tai nạn nên tàu điện đến muộn."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "昨日は、休んですみませんでした。",
        vi: "Tôi xin lỗi vì đã nghỉ ngày hôm qua."
      },
      {
        speaker: "B",
        jp: "どうしたんですか。",
        vi: "Có chuyện gì vậy?"
      },
      {
        speaker: "A",
        jp: "体の具合が悪くて、動けませんでした。",
        vi: "Vì trong người không khỏe nên tôi không cử động được."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② S1。それで、S2",
    usage: [
      "Dùng để trình bày nguyên nhân, lý do. Sử dụng liên từ 'それで' để biểu thị mối quan hệ giữa hai câu."
    ],
    structure: "S1。それで、S2",
    notes: {
      points: [
        "Vế S1 thể hiện nguyên nhân, lý do dẫn đến kết quả ở vế S2."
      ],
      examples: [
        {
          jp: "これから病院【びょういん】に行きます。「それで」、少し遅刻【ちこく】します。",
          vi: "Bây giờ tôi sẽ đi bệnh viện. Vì vậy tôi sẽ đến muộn một chút."
        },
        {
          jp: "家に財布【さいふ】を忘【わす】れました. これから取りに帰ります。「それで」、少し遅れます。",
          vi: "Tôi đã quên ví ở nhà. Bây giờ tôi sẽ về lấy. Vì vậy tôi sẽ đến muộn một chút."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "すみません。昨日から熱【ねつ】があります。それで、今日は1日休みたいんですが…。",
        vi: "Xin lỗi, tôi bị sốt từ hôm qua. Vì vậy hôm nay tôi muốn nghỉ một ngày ạ."
      },
      {
        speaker: "B",
        jp: "わかりました。お大事【だいじ】に。",
        vi: "Tôi hiểu rồi. Chúc bạn chóng khỏe nhé."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ V- てもいいですか？",
    usage: [
      "Đây là cách nói dùng để xin phép thực hiện một hành động nào đó."
    ],
    structure: "V- てもいいですか？",
    notes: {
      points: [
        "Để cho phép, thường sử dụng các mẫu như: <br> どうぞ (Mời bạn/Cứ tự nhiên), <br> わかりました (Tôi hiểu rồi), <br> いいですよ (Được chứ/Được ạ)."
      ],
      examples: [
        {
          jp: "トイレに「行って来てもいいですか？」",
          vi: "Tôi đi vệ sinh có được không?"
        },
        {
          jp: "食べてもいいですか。",
          vi: "Tôi ăn có được không?"
        },
        {
          jp: "言ってもいいですか。",
          vi: "Tôi nói có được không?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "あのう, ちょっと休憩【きゅうけい】してもいいですか？",
        vi: "Dạ, tôi nghỉ giải lao một chút có được không?"
      },
      {
        speaker: "B",
        jp: "どうぞ。",
        vi: "Bạn cứ tự nhiên."
      },
      {
        speaker: "A",
        jp: "ちょっと、質問【しつもん】してもいいですか？",
        vi: "Tôi đặt câu hỏi có được không ạ?"
      },
      {
        speaker: "B",
        jp: "すみませんが、あとにしてもらえませんか？「（Từ chối khéo）」",
        vi: "Xin lỗi, bạn 「có thể để sau」 có được không?"
      }
    ]
  },

  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ V- てもいいでしょうか？",
    usage: [
      "Đây là cách nói lịch sự hơn của cấu trúc '～てもいいですか？'.",
    ],
    structure: "V- てもいいでしょうか？",
    notes: {
      points: [
        "Phần cuối câu '～「ですか？」' được biến đổi thành '～「でしょうか？」' để tăng mức độ trang trọng, lễ phép.",
        "Thường dùng khi 「xin phép cấp trên, người lớn tuổi」 hoặc trong các 「tình huống trang trọng.」"
      ],
      examples: [
        {
          jp: "明日の午後、「早退【そうたい】してもいいでしょうか？」",
          vi: "Chiều mai tôi về sớm có được không ạ?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "すみません. ちょっと質問【しつもん】してもいいでしょうか？",
        vi: "Xin lỗi, tôi hỏi một chút có được không ạ?"
      },
      {
        speaker: "B",
        jp: "はい、何ですか？",
        vi: "Vâng, có việc gì vậy?"
      }
    ]
  },

  {
    id: "5",
    tab: "Mẫu 5",
    title: "⑤ ～なければなりません",
    usage: [
      "Diễn đạt việc dù thế nào cũng phải làm, không liên quan đến ý chí hay nguyện vọng cá nhân.",
      "Thường dùng để trình bày lý do khi xin nghỉ hoặc về sớm."
    ],
    structure: "V-ない (bỏ ない) + なければなりません",
    notes: {
      points: [
        "Khi muốn giải thích lý do, người ta thường thêm ～んです thành: ～なければならないんです (Xem lại mẫu số 1).",
        "Cấu trúc này nhấn mạnh vào nghĩa vụ hoặc tình huống bắt buộc phải thực hiện."
      ],
      examples: [
        {
          jp: "ちょっと、役所【やくしょ】に「行かなければならないんです。」",
          vi: "Tôi 「phải đi」 đến cơ quan hành chính một chút."
        },
        {
          jp: "今日はガスの点検【てんけん】があって、午前中【ごぜんちゅう】は家に「いなければなりません。」",
          vi: "Hôm nay có kiểm tra ga nên buổi sáng tôi 「phải ở nhà.」"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "すみません。明日の午後、早退【そうたい】してもいいでしょうか？",
        vi: "Xin lỗi, chiều mai tôi về sớm có được không ạ?"
      },
      {
        speaker: "A",
        jp: "病院【びょういん】に「行かなければならないんです。」",
        vi: "Vì tôi 「phải đi」 đến bệnh viện."
      },
      {
        speaker: "B",
        jp: "わかりました。",
        vi: "Tôi hiểu rồi."
      }
    ]
  },

  {
    id: "6",
    tab: "Mẫu 6",
    title: "⑥ ～んです ①",
    usage: [
      "Dùng để 「giải thích tình hình」 hoặc 「trình bày lý do với đối phương」 (ví dụ như khi xin nghỉ hoặc về sớm)."
    ],
    structure: "V (Thể từ điển)／V なければならない  + んです",
    notes: {
      points: [
        "Đây là cách nói để 「giải thích tình hình.」 Trong bài này, nó được dùng để đưa ra 「lý do cho việc xin phép.」",
        "Khác với cấu trúc '～んですが…' (dùng để yêu cầu sự hỗ trợ), mẫu này 「không có 'が…' ở cuối câu.」",
        "Có thể kết hợp với thể từ điển của động từ hoặc đi sau cấu trúc '～なければならない'.",
        "Ví dụ: '来るんです' (từ thể từ điển 来る) hoặc '行かなければならないんです'."
      ],
      examples: [
        {
          jp: "東京から、国の友だちが「来るんです。」",
          vi: "Một người bạn ở nước tôi sẽ từ Tokyo đến đây."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "すみません。来週の月曜日、お休みを「取ってもいいでしょうか？」",
        vi: "Xin lỗi, thứ hai tuần sau tôi 「xin phép」 nghỉ có được không ạ?"
      },
      {
        speaker: "A",
        jp: "市役所に「行かなければならないんです。」",
        vi: "「Vì tôi phải đi」 đến cơ quan hành chính."
      },
      {
        speaker: "B",
        jp: "わかりました。",
        vi: "Tôi hiểu rồi."
      }
    ]
  }

];
