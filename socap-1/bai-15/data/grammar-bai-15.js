export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 15： Tôi bị sốt và đau họng",
    summaryList: [
      {
        label: "① ～んです",
        example: "昨日から38度【ど】の熱【ねつ】があって、のどがすごく「痛いんです」。",
        vi: "Từ hôm qua tôi bị sốt 38 độ và cổ họng rất đau."
      },
      {
        label: "② V-ないでください",
        example: "今週は仕事を休んで、できるだけ人に「会わないでください」。",
        vi: "Tuần này hãy nghỉ làm và cố gắng 「đừng gặp」 người khác."
      },
      {
        label: "③ V（thể thông thường）＋N①",
        example: "こちらは、「せきを抑【おさ】える薬【くすり】」です。",
        vi: "Đây là 「thuốc để giảm ho」."
      },
      {
        label: "④ V-る前に、～ / V-たあと、～",
        example: "１日１回、「寝る前」に飲んでください。<br> 飲むと、眠くなります。「飲んだあと」、運転しないでくださいね。",
        vi: "Mỗi ngày uống một lần 「trước khi ngủ」.<br> Uống vào sẽ buồn ngủ, 「sau khi uống」 thì đừng lái xe."
      },
      {
        label: "⑤ ～とき（に）、～",
        example: "この薬は、痛くて「がまんできないときに」、飲んでください。",
        vi: "Thuốc này hãy uống 「khi đau không chịu nổi」."
      }
    ]
  }
  ,

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① ～んです",
    usage: [
      "Cách nói giải thích tình trạng với đối phương ."
    ],
    structure: "V（る辞書形／た形／ない形）＋んです<br> Aな／N＋なんです<br>Aい＋んです",
    notes: {
      points: [
        "Bài 14 chủ yếu dùng V động từ nói về lý do đến muộn, về sớm.",
        "Bài này 「thêm N danh từ và A tính từ」",
        "「Chú ý: N、Aな→なんです」",
        "Nếu lo lắng đối phương có vẻ không ổn thì hãy hỏi: 「どうしたんですか？(Bạn sao vậy?)」",
      ],
      examples: [
        {
          jp: "医者：今日、どうしましたか？",
          vi: "Bác sĩ: Hôm nay, bị làm sao vậy?"
        },
        {
          jp: "患者【かんじゃ】：頭【あたま】が痛くて、吐【は】き気【き】がするんです",
          vi: "Bệnh nhân: Tôi bị đau đầu và buồn nôn"
        },
        {
          jp: "医者：いつからですか？",
          vi: "Bác sĩ: Bị từ khi nào?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "腕【うで】のけが、どうしたんですか？",
        vi: "Vết thương ở cánh tay là bị sao vậy?"
      },
      {
        speaker: "B",
        jp: "自転車が転【ころ】んだんです。",
        vi: "Tôi bị ngã xe đạp."
      },
      {
        speaker: "A",
        jp: "気【き】をつけてくださいね",
        vi: "Bạn hãy cẩn thận nhé."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② V-ないでください",
    usage: [
      "Cách nói yêu cầu hoặc chỉ dẫn người khác 「xin đừng làm hành động V」.",
    ],
    structure: "Vない＋でください",
    notes: {
      points: [
        "Động từ chia thể ない＋ください。",
        "Trong bài này bác sĩ chỉ dẫn bệnh nhân phải làm gì."
      ],
      examples: [
        {
          jp: "今週は仕事を休んで、できるだけ人に「会わないでください」。",
          vi: "Tuần này hãy nghỉ làm, cố gắng đừng gặp người khác nhé."
        },
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "風邪【かぜ】ですね。しばらく、激【はげ】しい運動【うんどう】しないでください。",
        vi: "Bạn bị cảm rồi. đừng vận động mạnh trong một thời gian nhé"
      },
      {
        speaker: "B",
        jp: "お風呂に入ってもいいですか。",
        vi: "Tôi tắm bồn có được không."
      },
      {
        speaker: "A",
        jp: "熱がありますから、今日は、入【はい】らないでください。",
        vi: "Vì bị sốt nên hôm nay đừng tắm bồn"
      },
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ V（thể thông thường）＋N ①",
    usage: [
      "Đây là cách nói bổ nghĩa cho N để làm rõ N.",
      "Trong tiếng Nhật thành phần bổ nghĩa sẽ đặt trước N.",

    ],
    structure: "イA-くて、～／イA-くなくて、～",
    notes: {
      points: [
        "せきの薬【くすり】：せき là 「danh từ」 thành phần bổ nghĩa cho danh từ くすり。→ Thuốc ho",
        "いい薬【くすり】：いい là 「tính từ」 thành phần bổ nghĩa cho danh từ くすり。→ Thuốc tốt",
        "せきを抑【おさ】える薬【くすり】：抑【おさ】える là 「động từ」 thành phần bổ nghĩa cho danh từ くすり。→ Thuốc trị ho",
        "「Lưu ý: Động từ dạng thể từ điển (Vる、Vた、Vない）」",
        "Cách kết hợp: ",
        "薬【くすり】 là N được bổ nghĩa sẽ là Chủ ngữ của câu: ",
        "Câu 1: これは、薬です (Đây là thuốc)",
        "Câu 2: この薬は、せきを抑【おさ】えます。(Thuốc này trị ho)",
        "→Kết hợp 2 câu: これは、せきを「抑【おさ】える薬」です (Đây là thuốc trị ho)",
        "Công dụng khác của thuốc như sau: ",
        "熱を下【さ】がる（hạ sốt）",
        "せき／鼻水【はなみず】を抑える（trị ho/sổ mũi）",
        "胃【い】を守【まも】る（bảo vệ dạ dày）",
      ],
      examples: [
        {
          jp: "これは、何の薬ですか?",
          vi: "Đây là thuốc gì ạ?."
        },
        {
          jp: "熱を下【さ】げる薬です。胃【い】を守【まも】る薬と一緒【いっしょ】に飲んでください",
          vi: "Thuốc hạ sốt. hãy uống chung với thuốc bảo vệ dạ dày"
        },
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "この薬はどうですか？",
        vi: "Thuốc này như thế nào ạ?."
      },
      {
        speaker: "B",
        jp: "熱を下【さ】げる薬なので、体【からだ】が楽【らく】になります。",
        vi: "Vì là thuốc hạ sốt nên sẽ làm cơ thể trở nên dễ chịu hơn."
      }
    ]
  },
  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ V-る前に、～ / V-たあと、～",
    usage: [
      "V-る前に、～：Trước khi làm V, ~",
      "V-たあと、～：Sau khi làm V, ~",
    ],
    structure: "V-る前に、～ <br> V-たあと、～",
    notes: {
      points: [
        "Nói thứ tự của hành động",
        "Bài 8 dùng Nの前に。Bài này dùng V động từ"
      ],
      examples: [
        {
          jp: "この薬はいつ飲みますか？",
          vi: "Thuốc này uống khi nào ạ?"
        },
        {
          jp: "白い薬は、ご飯を「食べたあと」、飲んでください。",
          vi: "Viên màu trắng hãy uống sau khi ăn."
        },
        {
          jp: "カプセル、「寝る前に」、飲んでください。",
          vi: "Viên con nhộng hãy uống trước khi đi ngủ."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "せきを抑える薬は、ご飯を食べる前に、飲みますか？",
        vi: "Thuốc trị ho, tôi uống trước khi ăn phải không ạ?"
      },
      {
        speaker: "B",
        jp: "食べたあと、飲んだ方【ほう】がいいですよ。",
        vi: "Nên uống sau khi ă nhé."
      }
    ]
  },
  {
    id: "5",
    tab: "Mẫu 5",
    title: "⑤ ～とき（に）、～",
    usage: [
      "～とき dịch là 「khi...」nói về thời điểm hoặc tình trạng.",
      "Trong bài này, ～とき được dùng để đưa ra lời khuyên về bệnh tật hay sức khỏe, ví dụ: khi có triệu chứng gì thì nên uống thuốc, khi cảm thấy không khỏe thì nên làm gì.",
      "「Trong bài 10」, chúng ta đã học cách kết hợp với danh từ và tính từ như 「高校のとき (hồi cấp 3), 暇なとき (lúc rảnh rỗi), 忙しいとき (khi bận rộn)」.",
      "「Trong bài 13」, chúng ta cũng đã học cấu trúc V-たいとき, ví dụ 「両面コピーをしたいとき (khi muốn photocopy 2 mặt)」.",
      "Nếu là động từ thì kết hợp với thể từ điển thể る, thể た, thể ナイ.",
      "～ときは、～ được dùng khi muốn đưa ra chủ đề."
    ],
    structure: "Động từ (辞書形／た形／ナイ形) + とき",
    notes: {
      points: [
        "～とき biểu thị thời điểm hoặc tình trạng nào đó.",
        "Thường dùng trong lời khuyên về sức khỏe."
      ],
      examples: [
        {
          jp: "この薬は、いつ飲みますか？",
          vi: "Thuốc này uống khi nào?"
        },
        {
          jp: "高い熱が出【で】た「とき」、飲んでください",
          vi: "Hãy uống 「khi」 bị sốt cao."
        },
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "風邪をひいた「ときは」、どうしていますか？",
        vi: "「Khi」 bị cảm thì bạn thường làm gì?"
      },
      {
        speaker: "B",
        jp: "水をたくさん飲んで、温【あたた】かくて、早く寝【ね】ます",
        vi: "Uống nhiều nước, giữ ấm, và ngủ sớm"
      }
    ]
  },

];
