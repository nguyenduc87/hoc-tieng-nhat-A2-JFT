export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 4 – Hãy ăn mà không chấm nước tương.",
    summaryList: [
      {
        label: "① Nなら、～",
        example: "A：この近くに、おすすめの店がありますか？\nB：この近く「なら」、「平兵衛」がおすすめです。",
        vi: "A: Ở gần đây có quán nào gợi ý không ạ?\nB: 「Nếu là」 ở gần đây thì quán 'Heibei' là gợi ý tốt nhất."
      },
      {
        label: "② V-て、～ ／ V-ないで、～ ＜Cách thức＞",
        example: "こちらの野菜【やさい】の天【てん】ぷらは、つゆに「つけて」食べてください。\nエビはつゆに「つけないで」、塩をかけて食べてください。",
        vi: "Món tempura rau củ này hãy 「chấm」 vào nước dùng rồi ăn.\nTôm thì 「đừng chấm」 vào nước dùng, hãy rắc muối lên rồi ăn."
      },
      {
        label: "③ V-ちゃだめです",
        example: "一度に、そんなにたくさんお肉を「入れちゃだめ」ですよ。",
        vi: "「Không được cho」 một lúc nhiều thịt đến như thế vào đâu nhé."
      },
      {
        label: "④ V-てから、～",
        example: "うどんは、お肉と野菜を「食べてから」、入れましょう。",
        vi: "Mì udon thì 「sau khi ăn」 thịt và rau xong chúng ta hãy cho vào nhé."
      },
      {
        label: "⑤ S1 が、 S2",
        example: "お店は新しくてきれいな「が」、お昼は混んでいます。",
        vi: "Cửa hàng thì mới và đẹp 「nhưng」 buổi trưa lại rất đông đúc."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① N なら、～",
    usage: [
      "Nếu như là N... (trong hội thoại)",
      "Đây là cách nói dùng để trả lời câu hỏi bằng cách trích dẫn lời đối phương. N là từ khóa của nội dung mà đối phương đã nói. ",
    ],
    structure: "N + なら、～",
    notes: {
      points: [
        "Trong ví dụ này, cách nói này được dùng để trả lời khi được hỏi về nhà hàng nên đến."
      ],
      examples: [
        {
          jp: "この近くなら、「平兵衛」がおすすめです。",
          vi: "Nếu gần đây thì tôi giới thiệu nhà hàng Heibei."
        },
        {
          jp: "おいしい店なら、「千歩」だね。",
          vi: "Nếu là quán ngon thì tôi giới thiệu Sempo."
        },
        {
          jp: "安い店がいいなら、「田山食堂」かな。",
          vi: "Nếu là nhà hàng giá rẻ, tôi giới thiệu Toyama Shokudo."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "この近くに、おすすめの店がありますか？",
        vi: "Gần đây có nhà hàng nào nên đến ăn không?"
      },
      {
        speaker: "B",
        jp: "この近くなら、「平兵衛」がおすすめです。",
        vi: "Nếu gần đây thì tôi giới thiệu nhà hàng Heibei."
      },
      {
        speaker: "A",
        jp: "おいしいラーメン屋さん、知りませんか？",
        vi: "Bạn có biết quán mì ramen nào ngon không?"
      },
      {
        speaker: "B",
        jp: "おいしい店なら、「千歩」だね。",
        vi: "Nếu là quán ngon thì tôi giới thiệu Sempo."
      },
      {
        speaker: "A",
        jp: "安くお昼ご飯が食べたいんですけど…。",
        vi: "Tôi muốn ăn trưa giá rẻ."
      },
      {
        speaker: "B",
        jp: "安い店がいいなら、「田山食堂」かな。安いし、おいしいよ。",
        vi: "Nếu là nhà hàng giá rẻ, tôi giới thiệu Toyama Shokudo. Vừa rẻ vừa ngon đấy."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② V-て、～ ／ V-ないで、～ ＜Cách thức＞",
    usage: [
      "Đây là cách nói được dùng khi hướng dẫn cách thức như cách ăn, cách uống, v.v...",
      "V-て / V-ないで diễn tả việc thực hiện hành động tiếp theo trong trạng thái như thế nào.",
      "V-て、～ được dùng để diễn tả việc thực hiện hành động tiếp theo ở trạng thái đó.",
      "V-ないで、～ được dùng để diễn tả việc thực hiện hành động tiếp theo mà không làm việc đó. Thêm で vào sau động từ thể ナイ."
    ],
    structure: "V-て + Hành động tiếp theo\nV-ないで + Hành động tiếp theo",
    notes: {
      points: [
        "Mẫu câu này dùng để chỉ cách thức, phương pháp để thực hiện một hành động khác.",
        "Đối với dạng phủ định, động từ nhóm 1, 2, 3 được chia sang thể ない rồi cộng thêm で (Ví dụ: つける -> つけないで)."
      ],
      examples: [
        {
          jp: "こちらの野菜【やさい】の天ぷらは、つゆに「つけて」食べてください。",
          vi: "Hãy chấm món tempura rau này với nước chấm rồi ăn."
        },
        {
          jp: "エビはつゆに「つけないで」、塩【しお】を「かけて」食べてください。",
          vi: "Tôm thì 「đừng chấm」 nước chấm mà hãy 「rắc」 muối rồi ăn."
        },
        {
          jp: "さとうを「いれないで」、コーヒーを飲みました。",
          vi: "Đã uống cafe mà 「không cho đường」."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "こちらの野菜の天ぷらは、どうやって食べますか？",
        vi: "Món tempura rau này ăn như thế nào ạ?"
      },
      {
        speaker: "B",
        jp: "つゆに「つけて」食べてください。",
        vi: "Hãy 「chấm」 với nước chấm rồi ăn."
      },
      {
        speaker: "A",
        jp: "エビも同じですか？",
        vi: "Tôm cũng ăn giống vậy ạ?"
      },
      {
        speaker: "B",
        jp: "いいえ、エビはつゆに「つけないで」、塩をかけて食べてください。",
        vi: "Không, tôm thì 「đừng chấm」 nước chấm mà hãy rắc muối rồi ăn nhé."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ V-ちゃだめです",
    usage: [
      "Không được làm hành động V",
      "Đây là cách nói dùng để trình bày với đối phương việc không được làm.",
    ],
    structure: "V-て (bỏ て) + ちゃだめです <br> V-で (bỏ で) + じゃだめです",
    notes: {
      points: [
        "V-ちゃだめです là thể rút gọn của V-てはだめです. Đây là cách nói thân mật được dùng trong văn nói.",
        "Nếu động từ thể テ ở dạng V-で như 飲んで、泳いで thì sẽ biến đổi thành V-じゃ như 飲んじゃ、泳いじゃ。"
      ],
      examples: [
        {
          jp: "一度に、そんなにたくさんお肉を「入れちゃだめ」ですよ。",
          vi: "Không được cho nhiều thịt như vậy vào cùng một lần. / Không được bỏ vào"
        },
        {
          jp: "そんなにたくさんしょうゆを「かけちゃだめ」ですよ。",
          vi: "Không được đổ quá nhiều nước tương như vậy."
        },
        {
          jp: "あっ、これはもう古いから、「食べちゃだめ」です。",
          vi: "A, cái này đã cũ rồi, không được ăn."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "あっ、これはもう古いから、「食べちゃだめ」です。",
        vi: "A, cái này đã cũ rồi, không được ăn."
      },
      {
        speaker: "B",
        jp: "そうなんですか。",
        vi: "Ra là thế."
      }
    ]
  },


  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ V-てから、～",
    usage: [
      "Đây là cách nói dùng để giải thích rõ ràng trình tự của hành động.",
      "V-てから、～ biểu thị rằng thực hiện hành động V trước, sau đó mới thực hiện hành động tiếp theo.",
    ],
    structure: "V-て + から、～",
    notes: {
      points: [
        "Kết hợp với động từ thể テ."
      ],
      examples: [
        {
          jp: "うどんは、お肉と野菜を「食べてから」、入れましょう。",
          vi: "Mì udon thì hãy cho vào sau khi ăn thịt và rau."
        },
        {
          jp: "お好み焼きは最初【さいしょ】に具【ぐ】をよく「混【ま】ぜてから」、焼【や】きます。",
          vi: "Okonomiyaki thì trước hết trộn đều các nguyên liệu lên, sau đó mới nướng. / Sau khi trộn thì..."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "うどんはいつ入れますか？",
        vi: "Khi nào thì cho mì udon vào ạ?"
      },
      {
        speaker: "B",
        jp: "うどんは、お肉と野菜を「食べてから」、入れましょう。",
        vi: "Mì udon thì hãy cho vào sau khi ăn thịt và rau nhé."
      }
    ]
  },

  {
    id: "5",
    tab: "Mẫu 5",
    title: "⑤ S1 が、S2",
    usage: [
      "~が được dùng để nối 2 câu có quan hệ trái ngược.",
      "Biểu thị sự trái ngược. ~けど thường được dùng trong văn nói. Ngược lại, ~が thường được dùng trong văn viết hay các tình huống trang trọng."
    ],
    structure: "S1 + が、S2",
    notes: {
      points: [
        "Cấu trúc này dùng để liên kết hai câu có nội dung đối lập, tương phản nhau.",
        "So với từ nối mang tính chất hội thoại hàng ngày, mẫu câu này mang sắc thái trang trọng, lịch sự hơn, thường xuất hiện trong các văn bản viết hoặc khi giao tiếp cần sự khách sáo."
      ],
      examples: [
        {
          jp: "お店は新しくてきれいです「が」、お昼は混【こ】んでいます。",
          vi: "Cửa hàng này mới và đẹp, 「nhưng」 buổi trưa thì đông."
        },
        {
          jp: "料理はとてもおいしかったです「が」、少し値段【ねだん】が高かったです。",
          vi: "Món ăn rất ngon 「nhưng」 giá thì hơi đắt."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "あのお店はどうでしたか？",
        vi: "Cửa hàng đó thế nào vậy?"
      },
      {
        speaker: "B",
        jp: "お店は新しくてきれいです「が」、お昼は混んでいます。",
        vi: "Cửa hàng đó mới và đẹp, nhưng buổi trưa thì đông lắm."
      }
    ]
  }

];
