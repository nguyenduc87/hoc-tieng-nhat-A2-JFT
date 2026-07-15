export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 9 – Mọi người làm gì trong ngày Thành Nhân ?.",
    summaryList: [
      {
        label: "① 〜んですか？",
        example: "成人の日は、何をする「んですか」？",
        vi: "Vào Ngày Thành Nhân thì người ta làm gì 「thế ạ」?"
      },
      {
        label: "② Nしか + câu phủ định",
        example: "乗り物に３つ「しか乗れませんでした」。",
        vi: "Tôi 「chỉ đi/chơi được」 có 3 trò thôi."
      },
      {
        label: "③ Nだけ",
        example: "今年は、１日「だけ」実家【じっか】に帰りました。",
        vi: "Năm nay, tôi về nhà bố mẹ đẻ 「chỉ」 đúng 1 ngày."
      },
      {
        label: "④ V-たりして、〜",
        example: "友だちといっしょに買い物を「したりして」、楽しかったです。",
        vi: "Tôi đi mua sắm cùng với bạn bè 「này nọ」, rất là vui."
      },
      {
        label: "⑤ V-なくちゃならない",
        example: "甥【おい】や姪【めい】にお年玉【としだま】を「あげなくちゃならない」し、大変でした。",
        vi: "Tôi 「phải mừng tuổi」 cho các cháu, thật là vất vả."
      },
      {
        label: "⑥ V-れます < Thể khả năng ③ >",
        example: "DVDもたくさん「見れました」。<br>久しぶりに、実家【じっか】の母の料理を「食べれて」よかったです。",
        vi: "Tôi đã 「có thể xem」 được rất nhiều DVD.<br>Lâu lắm rồi mới lại 「được ăn」 món ăn mẹ nấu ở quê, thật là may mắn."
      },
      {
        label: "⑦ S(thể thông thường) + 人が〜 / 人も〜",
        example: "春節【しゅんせつ】は、田舎に「帰る人が」多いです。<br>最近では、海外に「旅行する人も」います。",
        vi: "Vào dịp Tết Nguyên Đán, 「người về」 quê rất nhiều.<br>Gần đây cũng có cả 「người đi du lịch」 nước ngoài nữa."
      },
      {
        label: "⑧ V-ながら、〜",
        example: "ソンクラーンは、町を「歩きながら」、みんなで水をかけ合います。",
        vi: "Vào lễ hội Songkran, mọi người 「vừa đi bộ」 trên phố vừa té nước vào nhau."
      },
      {
        label: "⑨ Nによって",
        example: "レバランは、年【とし】「によって」違います。",
        vi: "Lễ Lebaran thì khác nhau tùy 「theo từng」 năm."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① 〜んですか？",
    usage: [
      "Dùng để hỏi khi bạn tò mò, muốn đối phương giải thích rõ hơn về một tình huống hoặc lý do mà bạn chưa biết rõ.",
      "Thường kết hợp với các từ để hỏi (Cái gì, Khi nào, Ở đâu...) để đào sâu thông tin."
    ],
    structure: "Từ để hỏi (何 / どこ / いつ...) + Thể thông thường + んですか？",
    notes: {
      points: [
        "Đuôi câu này mang sắc thái tò mò, quan tâm và muốn tìm hiểu sâu, không phải là câu hỏi thông thường.",
        "Ví dụ cốt lõi: 成人の日は、何をするんですか？ (Vào Ngày Thành Nhân thì người ta làm gì thế ạ?)"
      ],
      examples: [
        {
          jp: "その服、どこで買った「んですか？」",
          vi: "Bộ quần áo đó, bạn mua ở đâu thế?"
        },
        {
          jp: "どうして遅れた「んですか？」",
          vi: "Tại sao bạn lại đến muộn thế?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "成人式【せいじんしき】の着物、高そうですね。自分で、買う「んですか」？",
        vi: "Kimono cho dịp Lễ Thành nhân có vẻ đắt nhỉ. Mọi người tự mua à?"
      },
      {
        speaker: "B",
        jp: "そうですね。買う人もいますけど、レンタルもできますよ。",
        vi: "Vâng đúng vậy. Cũng có người mua nhưng phần lớn là có thể thuê được."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② Nしか + câu phủ định",
    usage: [
      "Dùng để nhấn mạnh 「số lượng」 hoặc 「phạm vi bị giới hạn (chỉ có ngần đó, không có thêm)」.",
      "Luôn luôn 「đi kèm với」 động từ hoặc đuôi câu ở dạng 「phủ định」 (〜ない / 〜ません) ở cuối câu 「nhưng mang ý nghĩa khẳng định (Chỉ...)」."
    ],
    structure: "Danh từ (Số lượng / Người / Thời gian...) + しか + V-ない / V-ません",
    notes: {
      points: [
        "Cấu trúc này thường mang sắc thái tiếc nuối, thất vọng vì số lượng ít hơn so với kỳ vọng.",
        "Đôi khi cũng dùng để nhấn mạnh sự tích cực, may mắn vì mức độ giới hạn nhỏ (ví dụ: chỉ phải chờ một chút).",
        "Ví dụ cốt lõi: 乗り物に３つしか乗れませんでした。(Tôi chỉ chơi được 3 trò chơi [tiếc vì ít])."
      ],
      examples: [
        {
          jp: "夜「しか行けません」。",
          vi: "Tôi 「chỉ」 có thể đi vào buổi tối."
        },
        {
          jp: "女性「しか入れません」。",
          vi: "「Chỉ」 có nữ giới mới được vào."
        },
        {
          jp: "10分「しか待ちませんでした」。",
          vi: "Tôi 「chỉ」 phải chờ có 10 phút thôi (nhanh hơn tưởng tượng)."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "あの店、いつも混んでいて、時間がかかりますよね。",
        vi: "Cửa hàng kia, lúc nào cũng đông người nên mất nhiều thời gian nhỉ."
      },
      {
        speaker: "B",
        jp: "ええ。でも、昨日は空【す】いていて、10分しか待【ま】ちませんでしたよ。",
        vi: "Vâng. Nhưng hôm qua vắng nên tôi chỉ phải chờ 10 phút thôi."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ Nだけ",
    usage: [
      "Dùng để biểu thị sự giới hạn (chỉ riêng cái này, không có cái khác).",
      "Khác với 「しか」, cấu trúc 「だけ」 đi với câu khẳng định và chỉ đơn thuần đưa ra dữ kiện khách quan, 「không thể hiện cảm xúc tiếc nuối hay thất vọng của người nói」."
    ],
    structure: "Danh từ (Số lượng / Vật / Người...) + だけ + Động từ dạng khẳng định",
    notes: {
      points: [
        "Chỉ mang tính chất giới hạn số lượng/phạm vi một cách thuần túy, trung lập.",
        "Ví dụ phân biệt: Nếu nói 「1日だけ帰りました」 nghĩa là 'tôi chỉ về 1 ngày (vì có lịch trình khác)'. Còn nếu nói 「1日しか帰れませんでした」 nghĩa là 'tiếc quá, bận quá nên chỉ về được vỏn vẹn có 1 ngày'.",
        "Ví dụ cốt lõi: 今年は、１日だけ実家【じっか】に帰りました。(Năm nay, tôi chỉ về nhà bố mẹ đẻ 1 ngày)."
      ],
      examples: [
        {
          jp: "今年は、仕事が忙しくて、実家【じっか】に1日しか帰れませんでした。",
          vi: "Năm nay công việc bận rộn quá nên tôi chỉ có thể về nhà mẹ đẻ vỏn vẹn 1 ngày thôi <br> (thể hiện sự tiếc nuối khi thay bằng しか)."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "資料【しりょう】のこのページ「だけ」、コピーしてください。",
        vi: "「Chỉ photocopy trang này」 trong tài liệu thôi nhé."
      },
      {
        speaker: "B",
        jp: "わかりました。すぐやります。",
        vi: "Tôi hiểu rồi. Tôi sẽ làm ngay."
      }
    ]
  },
  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ V-たりして、〜",
    usage: [
      "Dùng để đưa ra một 「hành động tiêu biểu」 làm ví dụ 「cho chuỗi những việc đã làm.」",
      "Thay vì liệt kê 2 hành động trở lên như cấu trúc truyền thống (V1-たり、V2-たりします), cấu trúc này chỉ cần nêu ra 1 hành động đại diện dưới dạng 「〜たりして」."
    ],
    structure: "Động từ (Thể quá khứ Ta) + たりして、[Mệnh đề chính]",
    notes: {
      points: [
        "Hành động được nhắc đến chỉ là một 「ví dụ điển hình」, ngụ ý vẫn còn những hành động khác tương tự không được liệt kê hết.",
        "Ví dụ cốt lõi: 友だちといっしょに買い物を「したりして」、楽しかったです。<br> (Tôi đã đi mua sắm [và làm vài việc khác] cùng bạn mình, đã rất vui)."
      ],
      examples: [
        {
          jp: "休日【きゅうじつ】はカフェで本を読ん「だりして」、過【す】ごしています。",
          vi: "Ngày nghỉ tôi thường dành thời gian như là đọc sách ở quán cà phê."
        },
        {
          jp: "昨日の夜は、YouTubeを見「たりして」、夜更【よふ】かししてしまいました。",
          vi: "Tối qua tôi thức muộn để làm mấy việc như là xem YouTube."
        },
        {
          jp: "お正月は実家【じっか】でおいしいものを食べ「たりして」、のんびりしました。",
          vi: "Dịp Tết tôi đã thư giãn ở quê như là ăn nhiều món ngon."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "休みはどうでしたか？",
        vi: "Kỳ nghỉ của anh thế nào?"
      },
      {
        speaker: "B",
        jp: "家で音楽を聞い「たりして」、のんびり過ごしました。",
        vi: "Tôi ở nhà nghe nhạc (và làm vài việc khác) rồi thư giãn thoải mái."
      }
    ]
  },
  {
    id: "5",
    tab: "Mẫu 5",
    title: "⑤ V-なくちゃならない",
    usage: [
      "Dùng để diễn tả một việc bắt buộc phải làm, không thể không làm.",
      "Có ý nghĩa hoàn toàn giống với cấu trúc 「〜なければならない」 nhưng mang sắc thái thân mật, gần gũi hơn và thường dùng nhiều trong văn nói (giao tiếp hàng ngày)."
    ],
    structure: "Động từ thể Nai (bỏ ない) + なくちゃならない / なくちゃいけない",
    notes: {
      points: [
        "Trong đời sống thường ngày, người Nhật rất hay nói tắt cụm này thành 「〜なくちゃ」 cho ngắn gọn (ví dụ: 行かなくちゃ - Tôi phải đi đây).",
        "Ví dụ cốt lõi trong sách: 甥や姪にお年玉をあげなくちゃならないし、大変でした。 <br> (Tôi phải mừng tuổi cho các cháu trai cháu gái nên cũng vất vả)."
      ],
      examples: [
        {
          jp: "明日テストがあるから、 今日は勉強し「なくちゃならない」.",
          vi: "Vì ngày mai có bài kiểm tra nên hôm nay tẽ phải học bài."
        },
        {
          jp: "もう遅いから、そろそろ帰ら「なくちゃならない」。",
          vi: "Muộn rồi nên tớ phải chuẩn bị đi về thôi."
        },
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "忙しそうですね。",
        vi: "Chị có vẻ bận rộn nhỉ."
      },
      {
        speaker: "B",
        jp: "ええ、これから会議の準備【じゅんび】をし「なくちゃならない」んです。",
        vi: "Vâng, bây giờ tôi phải chuẩn bị cho cuộc họp ạ."
      }
    ]
  },
  {
    id: "6",
    tab: "Mẫu 6",
    title: "⑥ V-れます < Thể khả năng ③ >",
    usage: [
      "Đây là dạng rút gọn của thể khả năng đối với động từ nhóm 2 và nhóm 3.",
      "Người nói lược bỏ chữ 「ら」 trong đuôi gốc 「〜られます」 biến thành 「〜れます」 để nói nhanh và tự nhiên hơn."
    ],
    structure: "Động từ nhóm 2/nhóm 3 (bỏ られます) + れます / れない / れた",
    structureImg: [
      "./images/grammar/bi-dong-kha-nang.png"
    ],
    notes: {
      points: [
        "Cách nói này được gọi là ら抜き言葉 (Từ lược bỏ ら).",
        "Hiện nay nó cực kỳ phổ biến trong giao tiếp hàng ngày của người Nhật.",
        "Ví dụ cốt lõi: 食べられます ➔ 食べれます (Có thể ăn); 見られます ➔ 見れます (Có thể xem); 来られます ➔ 来れます (Có thể đến)."
      ],
      examples: [
        {
          jp: "辛い料理、「食べれる」？",
          vi: "Cậu có ăn được đồ cay không?"
        },
        {
          jp: "ここからきれいな海が「見れる」よ。",
          vi: "Từ đây có thể nhìn thấy biển đẹp lắm đấy."
        },
        {
          jp: "明日のパーティー、「来【こ】れる」？",
          vi: "Bữa tiệc ngày mai cậu đến được chứ?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "すみません。明日、用【よう】があって、仕事に来【こ】れません。",
        vi: "Xin lỗi anh. Ngày mai tôi có việc bận nên không thể đến làm việc được."
      },
      {
        speaker: "B",
        jp: "そうですか。わかりました。",
        vi: "Vậy à. Tôi biết rồi."
      }
    ]
  },
  {
    id: "7",
    tab: "Mẫu 7",
    title: "⑦ S thông thường + 人が多い / 人もいる",
    usage: [
      "Dùng để miêu tả xu hướng hoặc thói quen của một nhóm người trong một hoàn cảnh cụ thể.",
      "「〜人が多い」: Diễn tả số đông, phần lớn mọi người đều làm hành động đó.",
      "「〜人もいる」: Diễn tả một bộ phận, trong số đông đó cũng có những người lựa chọn làm hành động như vậy."
    ],
    structure: "S (Thể thông thường) + 人が多い (Nhiều người...) / 人もいる (Cũng có người...)",
    notes: {
      points: [
        "Đây chính là ngữ pháp bổ nghĩa danh từ (Định ngữ) cơ bản: Cả một cụm hành động phía trước đứng làm tính từ để giải thích rõ hơn cho chữ 'Người' (人).",
        "Ví dụ cốt lõi: 田舎に帰る人が多い (Nhiều người về quê); <br> 海外に旅行する人もいる (Cũng có người đi du lịch nước ngoài)."
      ],
      examples: [
        {
          jp: "朝ご飯を食べない「人が多い」です。",
          vi: "「Có nhiều người」 không ăn sáng."
        },
        {
          jp: "会社に自転車で行く「人もいます」。",
          vi: "「Cũng có những người」 đi làm bằng xe đạp."
        },
        {
          jp: "クリスマスは、友だちとパーティーをする「人もいます」が、何もしない「人もいます」。",
          vi: "Vào Giáng sinh, 「có những người」 tổ chức tiệc tùng với bạn bè, nhưng 「cũng có những người」 chẳng làm gì cả."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "日本のお正月【しょうがつ】は、どうやって過【す】ごしますか？",
        vi: "Ngày Tết ở Nhật mọi người trải qua như thế nào?"
      },
      {
        speaker: "B",
        jp: "家族と過【す】ごす人が多いです。でも、最近【さいきん】は1人で旅行に行く人もいますよ。",
        vi: "Nhiều người đón Tết cùng gia đình lắm. Nhưng dạo gần đây cũng có cả những người một mình đi du lịch nữa đấy."
      }
    ]
  },
  {
    id: "8",
    tab: "Mẫu 8",
    title: "⑧ V-ながら、〜",
    usage: [
      "Dùng để diễn tả 「2 hành động」 được thực hiện 「song song, đồng thời cùng một lúc」.",
      "Hành động đứng sau 「ながら」 thường là hành động chính cần nhấn mạnh."
    ],
    structure: "Động từ thể ます (bỏ ます) + ながら、[Hành động 2]",
    notes: {
      points: [
        "「Chủ ngữ」 của cả hai hành động bắt buộc phải là 「cùng một người」.",
        "Ví dụ cốt lõi: 町を歩きながら、水をかけ合います。<br> (Vừa đi bộ trên phố vừa té nước vào nhau)."
      ],
      examples: [
        {
          jp: "お正月は、食事をし「ながら」、両親【りょうしん】といろいろ話しました。",
          vi: "Vào dịp năm mới, tôi vừa ăn cơm vừa nói chuyện nhiều điều với bố mẹ."
        },
        {
          jp: "お祭りでは、歌を歌い「ながら」、みんなで踊ります。",
          vi: "Tại lễ hội, mọi người vừa hát vừa cùng nhau nhảy múa."
        },
        {
          jp: "音楽を聞き「ながら」、勉強します。",
          vi: "Tôi vừa nghe nhạc vừa học bài (Ví dụ thực tế)."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "歩き「ながら」スマホを使うのは, nguy hiểm lắm đấy nhé.",
        vi: "Vừa đi bộ vừa dùng điện thoại là nguy hiểm lắm đấy nhé."
      },
      {
        speaker: "B",
        jp: "すみません、気をつけます。",
        vi: "Xin lỗi, tôi sẽ chú ý."
      }
    ]
  },
  {
    id: "9",
    tab: "Mẫu 9",
    title: "⑨ Nによって",
    usage: [
      "Dùng để biểu thị sự đa dạng, thay đổi hoặc khác biệt (「tùy thuộc」 vào danh từ đứng trước).",
      "Vế sau thường đi kèm với các từ thể hiện sự khác nhau như: 違います (khác nhau), 変わります (thay đổi), hoặc いろいろあります (có nhiều loại)."
    ],
    structure: "Danh từ (Người / Quốc gia / Thời gian / Địa điểm...) + によって + 違います / 変わります",
    notes: {
      points: [
        "Các cụm từ cố định cực kỳ thông dụng: 人によって (tùy người), 国によって (tùy nước), 場所によって (tùy nơi).",
        "Ví dụ cốt lõi: 年【とし】によって違います。(Khác nhau tùy theo từng năm)."
      ],
      examples: [
        {
          jp: "日本は、場所「によって」天気が全然違いますね。",
          vi: "Ở Nhật Bản, tùy theo từng nơi mà thời tiết hoàn toàn khác nhau nhỉ."
        },
        {
          jp: "文化や習慣【しゅうかん】は、国によって変【か】わります。",
          vi: "Văn hóa và tập quán sẽ thay đổi tùy theo từng quốc gia."
        },
        {
          jp: "人「によって」考【かんが】え方【かた】がいろいろあります。",
          vi: "Tùy mỗi người mà có nhiều cách suy nghĩ khác nhau."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "お正月は、どんな料理を作りますか？",
        vi: "Mọi người sẽ nấu món gì vào dịp năm mới?"
      },
      {
        speaker: "B",
        jp: "家「によって」違いますね。",
        vi: "Tùy từng gia đình sẽ khác nhau nhé."
      }
    ]
  },

];
