export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 15 – Điện trong phòng họp vẫn bật.",
    summaryList: [
      {
        label: "① V-たままです",
        example: "会議室の電気 「ついたままでした」よ。",
        vi: "Đèn trong phòng họp 「vẫn bật nguyên」 đấy."
      },
      {
        label: "② V-るのにいいです",
        example: "マイストローは、ごみを「減【へ】らすのにいいんです」よ。",
        vi: "Ống hút cá nhân rất 「tốt cho việc」 giảm thiểu rác thải đấy."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① V-たままです",
    usage: [
      "まま thể hiện rằng không có sự thay đổi về trạng thái.",
      "V-たまま là cách nói thể hiện trạng thái lẽ ra kết thúc nhưng vẫn tiếp tục mà không thay đổi. <br> 会議室の電気 「ついたままでした」よ。<br> Trong ví dụ này, người nói dùng để nhắc nhở rằng đèn phòng họp lẽ ra đã phải tắt mà lại vẫn bật."
    ],
    structure: "Động từ thể タ (V-た) + まま",
    notes: {
      points: [
        "Kết hợp với thể タ của động từ.",
        "そのまま có nghĩa là không thay đổi trạng thái. Ví dụ そのまま食べる thể hiện việc ăn mà không chế biến, không gia giảm.",
        "V-たまま、～ cũng có thể thể hiện việc thực hiện hành động tiếp theo trong trạng thái đó."
      ],
      examples: [
        {
          jp: "A：窓が開いたままでしたよ。\nB：あ、すみません。忘れてました。",
          vi: "A: Cửa sổ vẫn mở nguyên đấy.\nB: A, xin lỗi. Tôi quên mất."
        },
        {
          jp: "A：テーブルの上、片付けましょうか？\nB：あ、そのままでいいです。",
          vi: "A: Tôi dọn mặt bàn nhé?\nB: À, cứ để nguyên như thế là được."
        },
        {
          jp: "エアコンをつけたまま、寝てしまいました。",
          vi: "Tôi đã để điều hòa bật nguyên mà ngủ thiếp đi."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "すみません、会議室の電気が「ついたままです」よ。",
        vi: "Xin lỗi, đèn trong phòng họp vẫn đang bật nguyên như thế kìa."
      },
      {
        speaker: "B",
        jp: "あ、消すのを忘れました。教えてくれてありがとうございます。",
        vi: "Ôi, tôi quên tắt mất. Cảm ơn bạn đã nhắc nhé."
      },
      {
        speaker: "A",
        jp: "水を「出したまま」にしないで、すぐ止めてくださいね。",
        vi: "Đừng có xả nước chảy nguyên như thế, hãy khóa lại ngay nhé."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② V-るのにいいです",
    usage: [
      "Đây là cách nói dùng để giải thích đồ vật nào đó phù hợp hay hữu ích với điều gì."
    ],
    structure: "Động từ thể từ điển (V-る) + のにいいです",
    notes: {
      points: [
        "Phần danh từ của cách nói Nにいい như 環境【かんきょう】にいい (tốt cho môi trường), 省【しょう】エネにいい (tốt cho tiết kiệm năng lượng) biến đổi thành động từ.",
        "Thêm の vào sau động từ thể từ điển, rồi thêm にいいです。",
        "Ngoài いいです, có thể sử dụng với các từ như 使います (dùng), 役立【やくだつ】ちます (có ích)."
      ],
      examples: [
        {
          jp: "マイストローは、ごみを「減【へ】らすのにいいんです」よ。",
          vi: "Ống hút của tôi tốt cho việc giảm lượng rác thải."
        },
        {
          jp: "風呂敷【furoshiki】は、荷物【にもつ】を「包【つつ】むのに使います」。",
          vi: "Khăn furoshiki được dùng để gói đồ."
        },
        {
          jp: "古い布【ぬの】は、油【あぶら】を捨【す】てるのに役立【やくだつ】ちます。",
          vi: "Vải cũ có ích cho việc vứt dầu mỡ."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "このアプリ、日本語を「勉強するのにいい」ですよ。",
        vi: "Ứng dụng này tốt cho việc học tiếng Nhật lắm đấy."
      },
      {
        speaker: "B",
        jp: "そうなんですか！さっそくダウンロードしてみます。",
        vi: "Thế ạ! Tôi sẽ tải về dùng thử ngay."
      },
      {
        speaker: "A",
        jp: "このはさみは、固【かた】い紙を「切るのに使います」。",
        vi: "Cây kéo này được dùng để cắt giấy cứng."
      },
      {
        speaker: "B",
        jp: "わかりました。気をつけて使いますね。",
        vi: "Tôi hiểu rồi. Tôi sẽ cẩn thận khi dùng."
      }
    ]
  }

];
