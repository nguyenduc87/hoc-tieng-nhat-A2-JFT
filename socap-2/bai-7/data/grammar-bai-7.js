export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 6 – Thật vui vì tôi đã đi được nhiều nơi.",
    summaryList: [
      {
        label: "① V-るつもりです",
        example: "明日は、中禅寺湖【ちゅうぜんじこ】に「行くつもりです」。",
        vi: "Ngày mai, tôi 「dự định sẽ đi」 hồ Chuzenji."
      },
      {
        label: "② V-(られ)て、～ ／ V-(られ)なくて、～",
        example: "いろいろなところに「行けて」、よかったです。\nショーが「見られなくて」、残念【ざんねん】でした。",
        vi: "Thật tốt vì 「đã có thể đi」 được nhiều nơi.\nThật đáng tiếc vì 「đã không thể xem」 được buổi biểu diễn."
      },
      {
        label: "③ S1 し、S2 し、～",
        example: "海で泳げた「し」、船に乗れた「し」、楽しかったです。",
        vi: "Vừa có thể bơi ở biển 「lại vừa」 có thể đi thuyền nên đã rất vui."
      },
      {
        label: "④ V-る／V-ている／V-た とき、～",
        example: "道を「歩いているとき」、リスを見ました。\nウミネコが近くに「来たとき」、ちょっとこわかったです。",
        vi: "「Khi đang đi bộ」 trên đường, tôi đã nhìn thấy một con sóc.\n「Khi」 chim mòng biển đến gần, tôi đã hơi sợ một chút."
      },
      {
        label: "⑤ 【người】と【số người】で",
        example: "友だち「と２人で」ハウステンボスに行ってきました。",
        vi: "Tôi đã cùng một người bạn (「2 người với nhau」) đi chơi ở Huis Ten Bosch về."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① V-るつもりです ／ V-ないつもりです",
    usage: [
      "Dùng để trình bày việc định làm, hoặc dự định, kế hoạch cụ thể mà bản thân đang suy nghĩ.",
      "Trong ví dụ trên, cấu trúc này được dùng để nói về dự định đi đâu trong chuyến du lịch."
    ],
    structure: "V-るつもりです ／ V-ないつもりです",
    notes: {
      points: [
        "Thể từ điển (V-る) của động từ là 「định làm」, thể ない (V-ない) để nói về những việc 「không định làm」.",
        "「V-るつもりです」 là cách nói dùng để trình bày về những 「dự định mang tính cụ thể hơn」, còn 「V-たいです」 là cách nói để trình bày 「mong muốn đơn thuần」, không liên quan đến việc có thực hiện được hay không."
      ],
      examples: [
        {
          jp: "明日は、中禅寺湖【ちゅうぜんじこ】に「行くつもりです」。",
          vi: "Tôi định đi hồ Chuzenji vào ngày mai."
        },
        {
          jp: "時間がないので、神社【じんじゃ】には「行かないつもりです」。",
          vi: "Vì không có thời gian nên tôi định không tới đền nữa."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "休みはどうしますか？",
        vi: "Anh định làm gì vào ngày nghỉ?"
      },
      {
        speaker: "B",
        jp: "箱根【はこね】に「行くつもりです」。",
        vi: "Tôi định đi Hakone."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② V-(られ)て、～ ／ V-(られ)なくて、～",
    usage: [
      "Đây là cách nói 「nêu lý do cho những việc đã làm được hoặc chưa làm được」, rồi nêu cảm tưởng về điều đó.",
      "Thông thường cấu trúc này sẽ sử dụng 「động từ thể khả năng」 để nói về lý do."
    ],
    structure: "V-(られ)て、～ ／ V-(られ)なくて、～",
    notes: {
      points: [
        "Đưa thể khả năng của động từ về thể て hoặc dạng ～なくて.",
        "Sử dụng dưới dạng 行けて (có thể đi), 見られて (có thể xem) khi nói về những việc đã làm được, 行けなくて (không đi được), 見られなくて (không xem được) khi nói về những việc chưa làm được.",
        "Vế sau thường là quá khứ và là những từ biểu thị cảm xúc của bản thân như 楽しかった (vui), おもしろかった (thú vị), 感動した (cảm động), つまらなかった (chán), v.v.."
      ],
      examples: [
        {
          jp: "いろいろなところに「行けて」、よかったです。",
          vi: "Thật vui vì đã có thể đi rất nhiều nơi."
        },
        {
          jp: "ショーが「見られなくて」、残念【ざんねん】でした。",
          vi: "Thật tiếc vì tôi không xem được show diễn đó."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "きれいな夕日が「見られて」、感動【かんどう】しました。",
        vi: "Tôi rất cảm động vì đã ngắm được cảnh hoàng hôn đẹp như vậy."
      },
      {
        speaker: "B",
        jp: "金閣寺【きんかくじ】に「行けなくて」、残念【ざんねん】でした。",
        vi: "Thật tiếc vì tôi không đi chùa Kinkakuji được."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ S1 し、S2 し、～",
    usage: [
      "Dùng để liệt kê các lý do, nguyên nhân cho một kết quả hoặc một đánh giá nào đó.",
      "Thể hiện ý nghĩa vừa làm được việc này, lại vừa làm được việc kia.",
      "Cấu tạo S (thể thông thường) <a href='./the-kha-nang/index.html'>click xem tại đây</a>"
    ],
    structure: "S1 し、S2 し、～ (S: thể thông thường hoặc lịch sự)",
    notes: {
      points: [
        "Chúng ta đã học cách kết hợp tính từ với cấu trúc ～し ở bài 2 để nêu ra lý do như trong ví dụ 「かっこいいし、歌もダンスも上手だし(Cô ấy vừa ngầu, vừa hát hay, vừa nhảy đẹp)」. Bài này chủ yếu đưa ra những ví dụ kết hợp ～し với thể khả năng của động từ.",
      ],
      examples: [
        {
          jp: "海で泳【およ】げた「し」、船【ふね】に乗れた「し」、楽しかったです。",
          vi: "Tôi rất vui vì vừa có thể bơi ở biển, lại có thể đi tàu thủy nữa."
        },
        {
          jp: "温泉【おんせん】にも入れた「し」、ゆっくりできた「し」、よかったです。",
          vi: "Thật tốt vì có thể vừa tắm suối nước nóng vừa thư giãn."
        },
        {
          jp: "沖縄【おきなわ】、いいですよね。海で泳げる「し」、おいしいものも食べられる「し」。",
          vi: "Okinawa được đấy nhỉ. Chúng ta có thể bơi và ăn những món ăn ngon."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "今度の休み、沖縄【おきなわ】に行くんですが、どうですか？",
        vi: "Kỳ nghỉ tới tôi sẽ đi Okinawa đấy, ở đó thế nào ạ?"
      },
      {
        speaker: "B",
        jp: "沖縄【おきなわ】、いいですよ。海で泳げる「し」、おいしいものも食べられる「し」、本当に楽しかったです。",
        vi: "Okinawa được lắm đấy. Vừa có thể bơi ở biển, lại vừa được ăn đồ ăn ngon, thực sự đã rất vui."
      },
    ]
  },

  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ V-る ／ V-ている ／ V-た とき、～",
    usage: [
      "Dùng để biểu thị thời điểm, trạng thái khi một hành động hoặc sự việc nào đó xảy ra.",
      "Chú ý hành động chia ở thể ます khi đi với とき là không có (Vます + とき: Ko Co)."
    ],
    structure: "V-る ／ V-ている ／ V-た + とき、～",
    notes: {
      points: [
        "Chúng ta đã học cách biểu thị thời điểm, trạng thái khi sử dụng とき ở bài 15 Sơ cấp 1 như trong ví dụ 熱があるとき、この薬を飲んでください (Hãy uống thuốc này khi bị sốt).",
        "V-ているとき、～ thể hiện rằng trong lúc tiếp tục hành động V thì có điều gì đó xảy ra như trong ví dụ ①.",
        "V-るとき、～ thể hiện rằng ngay trước khi thực hiện hành động V thì có điều gì đó xảy ra như trong ví dụ ②.",
        "V-たとき、～ thể hiện rằng ngay sau khi thực hiện hành động V thì có điều gì đó xảy ra như trong ví dụ ③."
      ],
      examples: [
        {
          jp: "富士山【ぐじさん】に「登【のぼ】っているとき」、空【そら】が晴【は】れました。",
          vi: "Khi tôi đang leo núi Phú Sĩ thì trời nắng lên."
        },
        {
          jp: "富士山【ぐじさん】に「行くとき」、バスに乗【の】りました。",
          vi: "Khi đi tới núi Phú Sĩ, tôi đã đi xe buýt."
        },
        {
          jp: "家に「着【つ】いたとき」、疲【つ】れれて動【うご】けませんでした。",
          vi: "Khi về tới nhà, tôi mệt tới mức không cử động nổi."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "富士山【ふじさん】の旅行はどうでしたか？",
        vi: "Chuyến đi núi Phú Sĩ thế nào rồi bạn?"
      },
      {
        speaker: "B",
        jp: "楽しかったですよ！富士山に「行くとき」、バスで行ったんです。<br>で、山に「登っているとき」、ちょうど空【そら】が晴れてきれいな景色が見られました。",
        vi: "Vui lắm luôn! Lúc đi tới núi Phú Sĩ thì mình đi bằng xe buýt. <br> Rồi trong lúc đang leo núi thì vừa vặn trời lại nắng lên nên đã ngắm được cảnh đẹp lắm."
      },
      {
        speaker: "A",
        jp: "わあ, いいですね！うらやましいです。",
        vi: "Oa, thích thế nhỉ! Ghen tị thật đấy."
      }
    ]
  },

  {
    id: "5",
    tab: "Mẫu 5",
    title: "⑤ 【người】と【số người】で",
    usage: [
      "Cấu trúc này được sử dụng khi nói về người sẽ đi cùng mình và số lượng người.",
      "Dùng khi muốn nói về đối phương cùng thực hiện hành động và số lượng người cùng làm việc đó."
    ],
    structure: "【người】と【số người】で",
    notes: {
      points: [
        "Số lượng người trong cấu trúc này biểu thị số người bao gồm cả bản thân mình. Ví dụ: '2人' trong '友だちと2人' nghĩa là bạn và mình, tổng cộng là 2 người.",
        "Thành phần [người] と có thể liệt kê nhiều người như trong câu ví dụ."
      ],
      examples: [
        {
          jp: "「友だちと２人で」ハウステンボスに行って来ました。",
          vi: "Tôi và bạn mình, 2 người chúng tôi cùng đi đến Huis Ten Bosch."
        },
        {
          jp: "今度、「田中【たなか】さんとバイさんと３人で」日帰り旅行に行きます。",
          vi: "Lần sau, cùng với Imada và Bai, 3 chúng tôi sẽ đi du lịch và về trong ngày."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "今週の土曜日に、だれと日本に行きますか？",
        vi: "Thứ Bảy tuần này bạn đi Nhật Bản cùng với ai vậy?"
      },
      {
        speaker: "B",
        jp: "「アンさんと２人で」日本に行きます。",
        vi: "Mình đi Nhật với bạn An (tổng cộng 2 người)."
      },
      {
        speaker: "A",
        jp: "そうですか、気を付けてくださいね。",
        vi: "Vậy à, bạn đi cẩn thận nhé."
      }
    ]
  }

];
