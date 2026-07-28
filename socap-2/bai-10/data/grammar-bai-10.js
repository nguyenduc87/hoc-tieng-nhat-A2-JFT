export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 10 – Nên mặc trang phục nào đi.",
    summaryList: [
      {
        label: "① 【từ nghi vấn】 V-ばいいですか？",
        example: "お葬式【そうしき】には、何を持って「行けばいいですか」？",
        vi: "Tôi 「nên mang theo」 cái gì đến đám tang?"
      },
      {
        label: "② V-てはいけません／だめです<br>Vちゃ いけません／だめです",
        example: "信号【しんごう】が赤のときは、横断歩道【おうだんほうどう】を「渡【わた】ってはいけません」よ。<br>バスの中では、「話【はな】しちゃだめ」だよね。",
        vi: "Khi đèn tín hiệu màu đỏ thì 「không được」 đi bộ qua đường đâu nhé.<br>Trong xe buýt thì 「không được」 nói chuyện đúng không nhỉ."
      },
      {
        label: "③ V-なくちゃ",
        example: "食器【しょっき】は自分で「片付【かたづ】けなくちゃ」。",
        vi: "「Phải」 tự mình dọn dẹp bát đĩa thôi."
      },
      {
        label: "④ V-るように、〜<br>V-ないように、〜",
        example: "次【つぎ】の人がすぐに席【せき】に「座【すわ】れるように」、食器【しょっき】を片付【かたづ】けます。<br>トイレが「つまらないように」、紙はごみ箱に捨てます。",
        vi: "Tôi dọn dẹp bát đĩa 「để」 người tiếp theo 「có thể ngồi」 vào chỗ ngay lập tức.<br>Tôi vứt giấy vào thùng rác 「để」 nhà vệ sinh 「không bị tắc」."
      },
      {
        label: "⑤ V-(ら)れます ＜Bị động②＞",
        example: "お店の店長【てんちょう】さんに、「今度から気【き】をつけて」と注意【ちゅうい】されました。",
        vi: "Tôi đã 「bị」 chủ cửa hàng 「nhắc nhở rằng」 「Từ lần sau hãy cẩn thận nhé」."
      },
      {
        label: "⑥ S(thể thông thường) の？",
        example: "お金を払【はら】わないで、ジュース飲んだの？",
        vi: "Không trả tiền mà đã uống nước trái cây rồi à?"
      },
      {
        label: "⑦ V-なきゃ",
        example: "ちゃんとお金を払ってから「飲まなきゃ」。",
        vi: "「Phải」 trả tiền đàng hoàng rồi mới uống chứ."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① 【Từ nghi vấn】 V-ばいいですか？",
    usage: [
      "Dùng để xin đối phương giải thích về cách làm hoặc các quy tắc, quy định, phép lịch sự, thói quen (như trang phục, đồ cần mang theo khi đi đám hiếu, đám hỷ...)."
    ],
    structure: "Từ nghi vấn (何 / どこ / いつ...) + Động từ thể điều kiện (V-ば) + いいですか？",
    structureImg: [
      "./images/grammar/the-ba.png"
    ],
    notes: {
      points: [
        "Là sự kết hợp giữa thể điều kiện (V-ば) và câu hỏi xin ý kiến (いいですか？).",
        "Khác với cấu trúc「〜たらいいですか？」(dùng xin lời khuyên mang tính cá nhân), cấu trúc「〜ばいいですか？」thường dùng để hỏi về những điều đã được quy định sẵn, mang tính quy tắc hoặc tập quán chung.",
        "Ví dụ cốt lõi: お葬式には、何を持って行けばいいですか？ (Tôi nên mang theo cái gì đến đám tang?)"
      ],
      examples: [
        {
          jp: "お葬式【そうしき】には、何を持って行けばいいですか？",
          vi: "Tôi nên mang theo cái gì đến đám tang?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "友だちの結婚式には、何を着て行けばいいですか？",
        vi: "Tôi nên mặc gì đến lễ cưới của bạn tôi?"
      },
      {
        speaker: "B",
        jp: "ワンピースとか、ちょっときれいな服を着て行けばいいと思いますよ。",
        vi: "Tôi nghĩ bạn nên mặc váy hoặc trang phục gì đó đẹp một chút."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② V-てはいけません／だめです・Vちゃいけません／だめです",
    usage: [
      "Dùng để truyền đạt những điều bị cấm, điều không được phép làm."
    ],
    structure: "Động từ thể て + はいけません / だめです\nĐộng từ thể ちゃ + いけません / だめです",
    notes: {
      points: [
        "Cấu trúc「〜てはいけません」thường dùng để giải thích về những quy tắc mang tính quy định công cộng, luật lệ chung.",
        "Cấu trúc「〜ちゃだめ / 〜ちゃいけない」là cách nói rút gọn, mang tính thân mật, thường dùng trong văn nói hàng ngày để nhắc nhở bạn bè, người thân một cách nhẹ nhàng.",
        "Ví dụ cốt lõi: 信号が赤のときは、横断歩道を渡ってはいけませんよ。(Khi đèn tín hiệu màu đỏ thì không được đi bộ qua đường đâu nhé.)"
      ],
      examples: [
        {
          jp: "館内は禁煙です。たばこを「吸ってはいけません」。",
          vi: "Trong tòa nhà cấm hút thuốc. Anh 「không được hút thuốc」 đâu."
        },
        {
          jp: "「触【さわ】っちゃだめ」。壊【こわ】れるから。",
          vi: "「Không được sờ」 đâu. Hỏng mất đấy."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "すみません、ここでタバコを吸【す】ってもいいですか？",
        vi: "Xin lỗi, tôi hút thuốc ở đây có được không?"
      },
      {
        speaker: "B",
        jp: "いいえ、あそこを見てください。「禁煙【きんえん】」と書いてありますよ。 ここで「吸【す】ってはいけません」。",
        vi: "Không được đâu, hãy nhìn đằng kia xem. Có chữ \"Cấm hút thuốc\" kìa. Bạn 「không được hút thuốc」 ở đây."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ V-なくちゃ",
    usage: [
      "Dùng để truyền đạt những điều bắt buộc phải làm.",
      "Có thể dùng để nhắc nhở đối phương hoặc dùng để tự nhắc nhở, nói với chính bản thân mình."
    ],
    structure: "Động từ thể ない (bỏ ない) + なくちゃ",
    notes: {
      points: [
        "Là dạng rút gọn thân mật của cấu trúc「〜なくちゃならない」(Phải làm gì đó).",
        "Được sử dụng rất phổ biến trong văn nói hàng ngày với người thân, bạn bè hoặc khi tự thoại."
      ],
      examples: [
        {
          jp: "食器【しょっき】は自分で「片付けなくちゃ」。",
          vi: "Bạn 「phải tự dọn dẹp」 bát đũa của mình."
        },
        {
          jp: "甥【おい】や姪【めい】にお年玉を「あげなくちゃならない」し、大変でした。",
          vi: "Tôi 「phải mừng tuổi」 cháu trai và cháu gái nên cũng vất vả."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "あ、もう12時だ。そろそろ「帰らなくちゃ」。",
        vi: "Ôi, 12 giờ rồi. Tớ 「phải đi về」 thôi."
      },
      {
        speaker: "B",
        jp: "そうだね。また明日ね！",
        vi: "Ừ đúng rồi nhỉ. Hẹn gặp lại ngày mai nhé!"
      }
    ]
  },

  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ V-るように、〜 ／ V-ないように、〜",
    usage: [
      "Dùng để thể hiện mục đích.",
      "Hành động ở vế sau thực hiện nhằm hướng tới kết quả hoặc trạng thái mong muốn xuất hiện ở vế trước (đứng trước ように)."
    ],
    structure: "Động từ thể Từ điển (V-る) + ように、[Hành động]\nĐộng từ thể ない (V-ない) + ように、[Hành động]",
    notes: {
      points: [
        "Động từ thể khẳng định đi với 'ように' thường là động từ trạng thái (わかる) hoặc động từ thể khả năng (できる, 座れる).",
        "Không sử dụng các động từ chỉ ý chí chủ quan (như 働く, 食べる) ở vế trước 'ように'.",
        "Ví dụ đúng: 日本の会社で「働けるように」、日本語を勉強しています。 (Tôi học tiếng Nhật để 'có thể làm việc' ở công ty Nhật)."
      ],
      examples: [
        {
          jp: "だれでも「わかるように」、簡単な日本語で説明してください。",
          vi: "Hãy giải thích thật đơn giản bằng tiếng Nhật để mọi người đều 「có thể hiểu」."
        },
        {
          jp: "交通事故に「あわないように」、横断歩道を渡ったほうがいいですよ。",
          vi: "Anh nên sang đường ở lối qua đường dành cho người đi bộ để 「tránh gặp phải」 tai nạn giao thông."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "日本語の新聞が「読めるように」なりたいです。どうすればいいですか？",
        vi: "Tôi muốn 「có thể đọc được」 báo tiếng Nhật. Tôi nên làm thế nào?"
      },
      {
        speaker: "B",
        jp: "毎日、少しずつ漢字を覚えるようにしてください。",
        vi: "Mỗi ngày bạn hãy cố gắng nhớ một ít chữ Hán xem sao."
      }
    ]
  },
  {
    id: "5",
    tab: "Mẫu 5",
    title: "⑤ V-(ら)れます ＜Bị động②＞",
    usage: [
      "Thể hiện việc người nói tiếp nhận trực tiếp một hành động tác động từ người khác (thường là bị nhắc nhở, bị mắng, bị gọi tên...).",
      "Người tiếp nhận hành động đóng vai trò là chủ ngữ (私) và đối tượng thực hiện hành động sẽ đi với trợ từ に hoặc から."
    ],
    structure: "Chủ ngữ (Người nhận) + は + Người thực hiện + に/から + Động từ thể Bị động (V-られる)",
    structureImg: [
      "./images/grammar/bi-dong.png"
    ],
    notes: {
      points: [
        "Khác với thể bị động đồ vật/sự kiện (ở Bài 7, ví dụ: コンサートが開かれます), đặc trưng của mẫu bị động này là Người đóng vai trò làm chủ ngữ.",
        "Động từ nhóm 2 có đuôi bị động là 'られる' (giống với thể khả năng).",
        "Các động từ thường gặp trong mẫu này: 〜と言われる (được/bị nói rằng), 呼ばれる (được/bị gọi), しかられる (bị mắng), 注意される (bị nhắc nhở)."
      ],
      examples: [
        {
          jp: "子どものとき、よく母に「しかられました」。",
          vi: "Hồi còn nhỏ tôi hay 「bị mẹ mắng」."
        },
        {
          jp: "うれしそうですね。",
          vi: "Trông bạn có vẻ vui nhỉ."
        },
        {
          jp: "はい。先生に、よくがんばったと「言われました」。",
          vi: "Vâng, tôi vừa 「được cô giáo bảo là」 đã cố gắng rất nhiều."
        },
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "さっき、店長に何か「言われたの」？",
        vi: "Lúc nãy cậu 「bị quản lý nói」 gì à?"
      },
      {
        speaker: "B",
        jp: "ええ。「今度から気をつけて」って「注意されました」。",
        vi: "Ừ. Tớ 「bị nhắc nhở」 là \"Từ lần sau phải chú ý\" đấy."
      }
    ]
  },
  {
    id: "6",
    tab: "Mẫu 6",
    title: "⑥ S(thể thông thường) の？",
    usage: [
      "Dùng trong hội thoại thân mật để yêu cầu đối phương giải thích về tình hình hoặc lý do của sự việc."
    ],
    structure: "Mệnh đề thể Thông thường (普通形) + の？",
    notes: {
      points: [
        "Đây là kiểu thông thường (thân mật, suồng sã) của cấu trúc「〜んですか？」.",
        "Khi chuyển từ dạng lịch sự「〜んですか？」sang thể thông thường, đuôi câu sẽ biến đổi thành「〜の？」và lên giọng ở cuối câu.",
        "Ví dụ điển hình:「どうしたの？」chính là cách nói thân mật của「どうしたんですか？」(Cậu sao thế?)."
      ],
      examples: [
        {
          jp: "お金を払わないで、ジュース「飲んだの？」",
          vi: "Bạn uống nước ép khi chưa trả tiền á?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "どうしたの？元気ないね。何か「あったの？」",
        vi: "Cậu sao thế? Trông cậu không khỏe. Có chuyện gì 「xảy ra à?」"
      },
      {
        speaker: "B",
        jp: "うん、……",
        vi: "Ừm..."
      }
    ]
  },
  {
    id: "7",
    tab: "Mẫu 7",
    title: "⑦ V-なきゃ",
    usage: [
      "Dùng để truyền đạt việc bắt buộc phải làm, không thể không làm."
    ],
    structure: "Động từ thể ない (bỏ ない) + なきゃ",
    structureImg: [
      "./images/grammar/10-7.png"
    ],
    notes: {
      points: [
        "Đây là cách nói thân mật, suồng sã của cấu trúc bắt buộc「〜なければなりません」.",
        "Trong văn nói trang trọng, ta dùng「〜なければなりません」, khi chuyển sang văn nói đời thường sẽ biến đổi thành「〜なきゃならない」, và cuối cùng được lược bỏ đuôi 'ならない' ở phía sau để chỉ còn ngắn gọn là「〜なきゃ」."
      ],
      examples: [
        {
          jp: "ちゃんとお金を払ってから「飲まなきゃ」。",
          vi: "Bạn 「phải trả tiền」 đàng hoàng rồi mới được uống."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "だめ。電車に乗るときは、ちゃんと列【れつ】に「並ばなきゃ」。",
        vi: "Không được. Khi lên tàu, bạn 「phải xếp hàng」 đàng hoàng chứ."
      },
      {
        speaker: "B",
        jp: "えー、そうなの！？",
        vi: "Ơ, vậy á?!"
      }
    ]
  },

];
