export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 14 – Có thể cắt tóc mái ngắn thêm một chút được không ạ?",
    summaryList: [
      {
        label: "① ナA-に / イA-く V",
        example: "全体的に「短く」切ってください。",
        vi: "Hãy cắt ngắn toàn bộ đi ạ."
      },
      {
        label: "② Nのために、～",
        example: "外国の方「のために」、いろいろなサービスがあります。",
        vi: "Có rất nhiều dịch vụ dành cho người nước ngoài."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① ナA-に / イA-く V",
    usage: [
      "Đây là cách nói dùng để trình bày hành động được thực hiện như thế nào."
    ],
    structure: "Tính từ đuôi ナ + に / Tính từ đuôi イ (bỏ い) + く + Động từ V",
    notes: {
      points: [
        "Nếu là tính từ đuôi ナ thì thay な bằng に, ví dụ きれいに, 静かに。",
        "Nếu là tính từ đuôi イ thì thay い bằng く, ví dụ 早く, 長く。",
        "Những từ này được đặt trước động từ để bổ sung ý nghĩa cho động từ đó.",
        "Cũng có cách nói 短くする (làm cho ngắn) thay cho 短く切る (cắt ngắn) theo cấu trúc ナA-に / イA-く + する。"
      ],
      examples: [
        {
          jp: "全体的【ぜんたいてき】に「短【みじか】く」切【き】ってください。",
          vi: "Hãy cắt ngắn toàn bộ đi ạ."
        },
        {
          jp: "できるだけ「早【はや】く」申【もう】し込【こ】んでください。",
          vi: "Bạn nên đăng ký sớm nhất có thể."
        },
        {
          jp: "部屋【へや】は「きれい」に掃除【そうじ】してください。",
          vi: "Hãy dọn dẹp phòng sạch sẽ nhé."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A (Khách hàng)",
        jp: "すみません、髪【かみ】を全体的【ぜんたいてき】に「短【みじか】く」切【き】ってください。",
        vi: "Xin lỗi, hãy cắt ngắn toàn bộ tóc giúp tôi nhé."
      },
      {
        speaker: "B (Thợ cắt tóc)",
        jp: "わかりました。できるだけ「早【はや】く」仕上【しあ】げます。",
        vi: "Tôi hiểu rồi. Tôi sẽ làm xong sớm nhất có thể ạ."
      },
      {
        speaker: "A (Khách hàng)",
        jp: "あ、それと、終【お】わったら床【ゆか】を「きれい」に掃除【そうじ】してください。",
        vi: "À, với lại sau khi xong thì hãy quét dọn sàn nhà thật sạch sẽ giùm tôi nha."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② Nのために、～",
    usage: [
      "Đây là cách nói thể hiện đối tượng tiếp nhận lợi ích hoặc ưu đãi gì đó (dành cho)."
    ],
    structure: "Danh từ N + のために、～",
    notes: {
      points: [
        "Có nhiều cách nói khác như 家族のために (cho gia đình), 友だちのために (cho bạn bè), 自分のために (cho bản thân), v.v..",
        "Cũng có thể sử dụng cấu trúc N1 のための N2 như 子どものためのスペース (không gian dành cho trẻ em).",
        "Vế sau cũng có thể thể hiện mục đích của hành động, ví dụ 将来のために、がんばります (Tôi cố gắng vì tương lai), 健康のために、毎日歩いています (Tôi đi bộ hàng ngày để có sức khỏe)."
      ],
      examples: [
        {
          jp: "外国【がいこく】の方【かた】「のために」、いろいろなサービスがあります。",
          vi: "Có rất nhiều dịch vụ 「dành cho」 người nước ngoài."
        },
        {
          jp: "はじめての方【かた】「のために」、図書館【としょかん】の使い方【かた】をご説明【せつめい】します。",
          vi: "Tôi sẽ giải thích cách sử dụng thư viện 「cho」 những người lần đầu tới."
        },
        {
          jp: "これは、外国【がいこく】の方【かた】「のための」生活【せいかつ】ガイドブックです。",
          vi: "Đây là sách hướng dẫn đời sống 「dành cho」 người nước ngoài."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "すみません、ここ「は」子【こ】どもの「ための」スペースですか？",
        vi: "Xin lỗi, đây có phải là không gian dành cho trẻ em không?"
      },
      {
        speaker: "B",
        jp: "はい、そうです。将来【しょうらい】「のために」いろいろな本【ほん】も置【お】いてありますよ。",
        vi: "Vâng, đúng vậy đấy. Ở đây cũng có đặt sẵn nhiều sách để phục vụ cho tương lai của các bé nữa."
      }
    ]
  },

];
