export const grammarBai2 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 2 – Nói về sở thích",
    summaryList: [
      {
        label: "① V-ることです",
        example: "趣味は映画を「見ること」です。",
        vi: "Sở thích của tôi là 「xem phim.」"
      },
      {
        label: "② V-るのが好きです",
        example: "ゲームを「するのが好きです。」",
        vi: "Tôi thích 「chơi game.」"
      },
      {
        label: "③ người と địa điểm で Vます",
        example: "休みの日は、たいてい友だち「と」体育館「で」バドミントンを「します」。",
        vi: "Vào ngày nghỉ, tôi thường chơi cầu lông 「với」 bạn 「ở」 nhà thi đấu."
      },
      {
        label: "④ V1て、V2",
        example: "毎週、夕方までバドミントンを「して」、そのあと、みんなでご飯を「食べます。」",
        vi: "Mỗi tuần tôi chơi cầu lông đến chiều, 「sau đó」 mọi người cùng nhau ăn cơm."
      },
      {
        label: "⑤ V-ています",
        example: "いけばなを「習っています。」",
        vi: "Tôi 「đang học」 cắm hoa."
      },
      {
        label: "⑥ Nができます",
        example: "日本語、英語、フィリピン語、スペイン語「ができます。」",
        vi: "Tôi 「có thể sử dụng」 tiếng Nhật, tiếng Anh, tiếng Philippines và tiếng Tây Ban Nha."
      }
    ]
  },
  {
    id: "1",
    tab: "Mẫu 1",
    title: "① Vることです",
    usage: [
      "Danh từ hóa động từ (Vる → N)",
      "Trong bài này được dùng để nói về sở thích."
    ],
    structure: "Vる + こと",
    notes: {
      points: [
        "Thêm こと sau động từ thể từ điển Vる.",
        "Với động từ có する đi kèm như 料理する hoặc 勉強する. Có 2 cách nói:"
      ],
      examples: [
        {
          jp: "趣味は「料理をすること」です。",
          vi: "Sở thích của tôi là 「nấu ăn.」"
        },
        {
          jp: "趣味は「料理」です。",
          vi: "Sở thích của tôi là 「nấu ăn.」"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "趣味はなんですか。",
        vi: "Sở thích của bạn là gì?"
      },
      {
        speaker: "B",
        jp: "趣味は「サッカー」です。",
        vi: "Sở thích của tôi là 「bóng đá.」"
      },
      {
        speaker: "A",
        jp: "「見ること」と「すること」はどちらが好きですか。",
        vi: "「Việc Xem」 và 「việc chơi」 thì bạn thích cái nào?"
      },
      {
        speaker: "B",
        jp: "サッカーを「するのが好きです」。",
        vi: "Tôi thích 「chơi bóng.」"
      }
    ]
  },
  {
    id: "2",
    tab: "Mẫu 2",
    title: "② Vるのが好きです",
    usage: [
      "Cũng danh từ hóa động từ (Vる → N)",
      "Giống với việc thêm こと sau Vる."
    ],
    structure: "Vる + の → Vるの が好き ＝ N が好き",
    notes: {
      points: [
        "Thêm の sau động từ thể từ điển Vる.",
      ],
      examples: [
        {
          jp: "ゲームを「するのが好きです」。",
          vi: "Tôi thích 「chơi game.」"
        },
        {
          jp: "水泳を「するのが好きです」。",
          vi: "Tôi thích 「bơi lội.」"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "休みの日は何を「するのが好きですか」。",
        vi: "Ngày nghỉ bạn thích làm gì?"
      },
      {
        speaker: "B",
        jp: "映画を「見るのが好きです」。",
        vi: "Tôi thích 「xem phim.」"
      },
      {
        speaker: "A",
        jp: "日本料理で何を「食べるのが好きですか」。",
        vi: "Trong món Nhật, bạn thích ăn gì?"
      },
      {
        speaker: "B",
        jp: "寿司を「食べるのが好きです」。",
        vi: "Tôi thích ăn 「Sushi.」"
      }
    ]
  },
  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ 【Người】と【địa điểm】で　Vます",
    usage: [
      "Muốn nói 'Làm gì, với ai, ở đâu'",
    ],
    structure: "【Người】と【địa điểm】で　Vます",
    notes: {
      points: [
        "Đây là cách diễn đạt nơi xảy ra hành động và cùng thực hiện với ai.",
      ],
      examples: [
        {
          jp: "いつも、だれ「と」どこ「で」テニスをしますか。",
          vi: "Bạn hay chơi tenis 「ở đâu, cùng với ai」."
        },
        {
          jp: "兄と公園「で」します。",
          vi: "Tôi chơi 「cùng với」 anh trai 「ở」 công viên."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "だれ「と」学校「で」勉強しますか。",
        vi: "Bạn học 「với ai ở trường」?"
      },
      {
        speaker: "B",
        jp: "友だち「と」学校「で」勉強します。",
        vi: "Tôi học 「với bạn ở trường」."
      },
    ]
  },
  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ V1-て、V2",
    usage: [
      "Dùng để nối câu có từ 2 hành động trở lên theo trình tự.",
      "Nói về thói quen các việc làm trong ngày, có thể nói được ở quá khứ, tương lai.",
    ],
    structure: "Vế 1 を Vて、Vế 2",
    notes: {
      points: [
        "Nối câu thành 1 và các hành động phải xảy ra theo trình tự.",
      ],
      examples: [
        {
          jp: "昨日、バドミントンを「して」、（そのあと、）みんなでご飯を「食べました。」",
          vi: "Hôm qua, 「sau khi」 chơi cầu lông, 「sau đó」 đã đi ăn cơm cùng mọi người."
        },
        {
          jp: "朝、6時に起きて、顔（かお）をあらって、朝ごはんを食べました。",
          vi: "Sáng 「thức dậy」 lúc 6h, 「rửa mặt」 rồi 「ăn sáng.」"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "毎朝、何をしますか。",
        vi: "Sáng nào bạn làm gì?"
      },
      {
        speaker: "B",
        jp: "朝ごはんを「食べて」、会社に行きます。",
        vi: "Tôi 「ăn sáng」 rồi 「đi làm.」"
      },
      {
        speaker: "A",
        jp: "会社へはどうやって行きますか。",
        vi: "Bạn đi đến công ty bằng cách nào?"
      },
      {
        speaker: "B",
        jp: "電車に「乗って」、会社で仕事をします。",
        vi: "Tôi 「đi tàu」 rồi 「làm việc」 ở công ty."
      },
    ]
  },
  {
    id: "5",
    tab: "Mẫu 5",
    title: "⑤ V-ています",
    usage: [
      "Dùng để nói trạng thái hiện tại.",
      "Nói về thói quen, hành động lặp đi lặp lại.",
    ],
    structure: "Động từ thể て + います／いる",
    notes: {
      points: [
        "Bài 1 nói về nghề nghiệp đang làm, bài 2 này nói về hiện tại, thói quen lặp lại.",
      ],
      examples: [
        {
          jp: "Thuさんは今日、会社を休みました。「しっています」か。",
          vi: "Hôm nay bạn Thư nghỉ làm. Bạn 「có hay biết」 không?"
        },
        {
          jp: "週（しゅう）に1回（かい）、料理を「ならっています。」",
          vi: "Tuần 1 lần, tôi 「học」 nấu ăn."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "今、何を「しています」か。",
        vi: "Bây giờ bạn đang làm gì vậy?"
      },
      {
        speaker: "B",
        jp: "電話を「かけています」。",
        vi: "Tôi đang gọi điện thoại."
      },
    ]
  },
  {
    id: "6",
    tab: "Mẫu 6",
    title: "⑥ Nができます",
    usage: [
      "Dùng để thể hiện sở hữu năng lực (ngoại ngữ, thể thao, nhạc cụ)."
    ],
    structure: "Danh từ ができます",
    notes: {
      points: [
        "Khi nói できます thì đối phương sẽ hiểu bạn có năng lực tốt.",
      ],
      examples: [
        {
          jp: "英語「ができます」か。",
          vi: "「Năng lực」 tiếng Anh của bạn tốt không?"
        },
        {
          jp: "ピアノ「ができます。」",
          vi: "Tôi 「có thể」 chơi được Piano."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "漢字「ができます」か。",
        vi: "Bạn 「viết được」 chữ Hán không?"
      },
      {
        speaker: "B",
        jp: "いいえ、「あまりできません。」",
        vi: "Không, tôi 「không」 làm 「được nhiều.」"
      },
    ]
  }
];
