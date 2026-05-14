export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 3 – Tôi bị dị ứng nên không ăn được.",
    summaryList: [
      {
        label: "① S1 ので、 S2",
        example: "今日【きょう】は自転車【じてんしゃ】で来【き】た「ので」、飲【の】めないんです。",
        vi: "「Vì」 hôm nay tôi đến bằng xe đạp nên không uống được."
      },
      {
        label: "② S よね",
        example: "おすし、わさび、入【はい】ってます「よね」。",
        vi: "Trong sushi có cho mù tạt đúng không 「nhỉ」."
      },
      {
        label: "③ N で～",
        example: "A: テーブルと座敷【ざしき】がございますが……。\nB: テーブル「で」お願【ねが】いします。",
        vi: "A: Chúng tôi có bàn ăn và phòng ngồi chiếu tatami...\nB: Làm ơn cho tôi bàn ăn 「nhé」."
      },
      {
        label: "④ ナA-な／イA-い／V-る のは、Nです",
        example: "人気【にんき】がある「のは」、お刺身定食【さしみていしょく】です。",
        vi: "Cái 「được ưa chuộng nhất」 chính là suất ăn cơm cá sống Sashimi."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① S1 の で、 S2",
    usage: [
      "Bởi vì... S1 là lý do.",
      "Đây là cách nói trình bày lý do. Trong bài này, cách nói này được dùng để đưa ra lý do không thể ăn/uống để từ chối.",
    ],
    structure: "S1 (Thể thông thường / Thể lịch sự) ので、S2 <br>* Danh từ + なので\n* Tính từ đuôi ナ + なので",
    notes: {
      points: [
        "「ので」 kết hợp cả với thể lịch sự và thể thông thường. Bài này đưa ra trường hợp kết hợp với thể thông thường. Danh từ và tính từ đuôi ナ sẽ nằm ở dạng Nな／ナA-なので、~.",
        "Một cách diễn đạt khác để thể hiện lý do là 「から」. Mặc dù có thể nói 「自転車で来たから、飲めないんです」, nhưng 「ので」 là cách nói lịch sự, nhẹ nhàng hơn khi trình bày lý do mang tính cá nhân."
      ],
      examples: [
        {
          jp: "明日【あした】、私用【しよう】があるので、休暇【きゅうか】を取【と】ってもいいでしょうか。",
          vi: "Ngày mai vì có việc riêng nên tôi có thể xin nghỉ phép được không ạ?"
        },
        {
          jp: "ひまなので、音楽【おんがく】を聞【き】きます。",
          vi: "Vì rảnh rỗi nên tôi nghe nhạc."
        },
        {
          jp: "雨【あめ】なので、出【で】かけません。",
          vi: "Vì trời mưa nên tôi không ra ngoài."
        },
        {
          jp: "今日【きょう】は自転車【じてんしゃ】で来【き】たので、飲【の】めないんです。",
          vi: "Hôm nay tôi đến bằng xe đạp nên không uống được."
        },
        {
          jp: "ベジタリアンなので、肉【にく】とか魚【さかな】はだめなんです。",
          vi: "Tôi ăn chay nên không ăn thịt, cá."
        },
        {
          jp: "この店【みせ】は有名【ゆうめい】なので、いつも混【こ】んでいます。",
          vi: "Cửa hàng này nổi tiếng nên lúc nào cũng đông."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "今日は一緒【いっしょ】にビールを飲みに行きませんか。",
        vi: "Hôm nay cậu có muốn đi uống bia cùng tớ không?"
      },
      {
        speaker: "B",
        jp: "すみません、今日は自転車【じてんしゃ】で来【き】たので、飲【の】めないんです。",
        vi: "Xin lỗi nhé, vì hôm nay tớ đi xe đạp đến nên không uống được rồi."
      },
      {
        speaker: "A",
        jp: "あ、そうなんですね。じゃあ, また今度【こんど】誘【さそ】いますね。",
        vi: "À, ra là vậy à. Thế thì để lần tới tớ lại rủ nhé."
      },
      {
        speaker: "B",
        jp: "はい、ぜひ！ お気【き】をつけて。",
        vi: "Vâng, nhất định nhé! Cậu đi cẩn thận."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② S よね",
    usage: [
      "Đây là cách nói xác nhận với đối phương về điều mình nghĩ.",
      "Dùng để xác nhận lại cho chắc chắn một sự việc mà người nói nghĩ là đúng như vậy."
    ],
    structure: "S (Thể thông thường / Thể lịch sự) + よね",
    notes: {
      points: [
        "Được dùng khi bản thân người nói nghĩ rằng điều đó là đúng, và muốn hỏi để xác nhận lại với đối phương (自分がそうだと思っていることを相手に確認するときの言い方です).",
        "Phân biệt với câu hỏi thông thường: Câu hỏi 「入ってますか？」 (Có cho vào không?) được dùng khi hoàn toàn không biết sự thật. Trong khi câu hỏi 「入ってますよね」 (Có cho vào đúng không nhỉ?) được dùng khi người nói tin rằng món ăn có chứa thành phần đó và chỉ muốn hỏi lại để kiểm tra cho chắc chắn."
      ],
      examples: [
        {
          jp: "おすし、わさび、入【はい】ってます「よね」。",
          vi: "Sushi có wasabi nhỉ? (Trong sushi có cho mù tạt đúng không nhỉ?)"
        },
        {
          jp: "定食のご飯は、おかわりできます「よね」。",
          vi: "Tôi có thể gọi thêm cơm nhỉ?"
        },
        {
          jp: "はい、できますよ。",
          vi: "Vâng, được ạ."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "おすし、わさび、入【はい】ってますよね。",
        vi: "Trong sushi có cho mù tạt đúng không nhỉ?"
      },
      {
        speaker: "B",
        jp: "はい、入【はい】っていますよ。抜【ぬ】きにしましょうか？",
        vi: "Vâng, có cho đấy ạ. Tôi làm loại không có mù tạt cho anh nhé?"
      },
      {
        speaker: "A",
        jp: "ええ、わさび抜【ぬ】きでお願【ねが】いします。",
        vi: "Vâng, làm ơn làm loại không có mù tạt giúp tôi."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ N で～",
    usage: [
      "Đưa ra lựa chọn của mình khi được hỏi.",
      "Khi được hỏi cái gì tốt hay cái nào tốt hơn thì sử dụng N で để trả lời cho sự lựa chọn của mình.",
      "Trong bài này, cấu trúc này được dùng để truyền đạt nguyện vọng về chỗ ngồi hay thực đơn với nhân viên tại nhà hàng."
    ],
    structure: "Danh từ (N) + で",
    notes: {
      points: [
        "Khi được hỏi cái nào tốt hoặc muốn chọn cái gì, người ta dùng 「Nで」 để trả lời. Trong bài này, cấu trúc này được dùng để truyền đạt nguyện vọng về chỗ ngồi hoặc món ăn với nhân viên nhà hàng.",
        "「Nで」 thường được dùng bằng cách thêm お願いします (Tôi sẽ lấy N), だいじょうぶです (N là được rồi), いいです (N là ổn). Cũng có thể chỉ sử dụng 「Nで」."
      ],
      examples: [
        {
          jp: "テーブルでお願【ねが】いします。",
          vi: "Cho tôi chỗ ngồi bàn."
        },
        {
          jp: "べつべつでお願【ねが】いします。",
          vi: "Làm ơn tính riêng (khi thanh toán) giúp chúng tôi."
        },
        {
          jp: "A: ご飯【はん】の量【りょう】、大盛り【おおもり】にしますか？\nB: 普通【ふつう】でだいじょうぶです。",
          vi: "A: Anh/chị chọn phần cơm lớn không ạ?\nB: Phần cơm bình thường là được rồi."
        },
        {
          jp: "A: ミックスフライ定食【ていしょく】がおすすめです。\nB: じゃあ、それで。",
          vi: "A: Suất ăn tẩm bột rán thập cẩm là món được gợi ý.\nB: Vậy tôi sẽ chọn món đó."
        }
      ]
    },
    dialogue: [
      {
        speaker: "店員",
        jp: "テーブルと座敷【ざしき】がございますが……。",
        vi: "Chúng tôi có chỗ ngồi bàn và ngồi chiếu ạ."
      },
      {
        speaker: "客",
        jp: "テーブルでお願【ねが】いします。",
        vi: "Cho tôi chỗ ngồi bàn."
      }
    ]
  },

  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ ナA-な／イA-い／V-る のは、Nです",
    usage: [
      "Đây là cách nói dùng để truyền đạt N là thông tin mới cho đối phương.",
      "Trong ví dụ này, cách nói này được sử dụng để trả lời khi được hỏi về món ăn được ưa chuộng hay món ăn gợi ý."
    ],
    structure: "ナA-な／イA-い／V-る のは、Nです",
    notes: {
      points: [
        "Trước 「のは」 là giải thích tiền đề cho N. Nhấn mạnh vào phần thông tin Danh từ (N) đứng ở phía sau.",
        "Mẫu câu này thường dùng để biến đổi một mệnh đề hành động hoặc tính chất thành một cụm danh từ làm chủ ngữ, giúp người nghe tập trung vào thông tin quan trọng nhất ở vế sau."
      ],
      examples: [
        {
          jp: "人気【にんき】がある「のは」、お刺身定食【さしみていしょく】です。",
          vi: "Món được ưa chuộng là suất ăn sashimi."
        },
        {
          jp: "たくさんココナッツがある「のは」Ben Treです。",
          vi: "Nơi có nhiều dừa chính là Bến Tre."
        },
        {
          jp: "この店【みせ】でおいしい「のは」、親子丼【おやこどん】ですよ。",
          vi: "Món ngon ở nhà hàng này là oyako-don (cơm thịt gà và trứng) đấy."
        },
        {
          jp: "よくみんなが注文【ちゅうもん】する「のは」、ミックスフライ定食【ていしょく】です。",
          vi: "Mọi người hay gọi suất cơm tẩm bột rán thập cẩm."
        },
        {
          jp: "ベトナムでたくさん採【と】れる「のは」、カシューナッツです。",
          vi: "Loại hạt được thu hoạch nhiều ở Việt Nam chính là hạt điều."
        },
        {
          jp: "ビールによく合【あ】う「のは」、ピーナッツ（落花生【らっかせい】）です。",
          vi: "Món rất hợp với bia chính là đậu phộng (lạc)."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "あのー、おすすめは何ですか？",
        vi: "À... món gợi ý của quán là gì vậy ạ?"
      },
      {
        speaker: "B",
        jp: "そうですね……人気【にんき】がある「のは」、お刺身定食【さしみていしょく】です。",
        vi: "Xem nào... món được ưa chuộng nhất chính là suất ăn cơm cá sống Sashimi ạ."
      }
    ]
  }


];
