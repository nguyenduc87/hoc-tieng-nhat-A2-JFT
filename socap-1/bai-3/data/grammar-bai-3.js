export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 3 – Mùa và thời tiết",
    summaryList: [
      {
        label: "① Nになります／ナAになります／イAくなります",
        example: "春は桜の花が咲きます。「暖かくなります。」",
        vi: "Mùa xuân hoa anh đào nở. Trời 「trở nên ấm.」"
      },
      {
        label: "② いちばん ナAです／イAいです",
        example: "秋が「いちばん」好きです。",
        vi: "Tôi thích mùa thu 「nhất.」"
      },
      {
        label: "③ イA-いのが好きです／苦手です",
        example: "私は暑い「のが好きです。」寒いのが「苦手です。」",
        vi: "Tôi 「thích」 trời nóng. Tôi 「không thích」 trời lạnh."
      },
      {
        label: "④ ナAです／イAいです から",
        example: "秋が好きです。もみじの景色がきれいです「から。」",
        vi: "Tôi thích mùa thu 「vì」 phong cảnh lá đỏ đẹp."
      },
      {
        label: "⑤ S1 から、S2",
        example: "暑いのが大好きです「から」、夏が好きです。",
        vi: "「Vì」 tôi rất thích trời nóng nên tôi thích mùa hè."
      },
      {
        label: "⑥ N1 や N2",
        example: "海「や」山で遊ぶのが楽しいです。",
        vi: "Chơi ở biển 「và」 núi thì vui."
      },
      {
        label: "⑦ N1 とか（N2 とか）",
        example: "秋は果物がおいしいですよね。ぶどう「とか」梨「とか。」",
        vi: "Mùa thu trái cây ngon nhỉ. 「Như」 nho 「với」 lê 「chẳng hạn.」"
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① Nに／ナAに／イAく なります",
    usage: [
      "Dùng để diễn tả sự thay đổi.",
      "Trong bài này được dùng để nói về sự thay đổi của thời tiết và mùa."
    ],
    structure: "N + に なります ／ ナA + に なります ／ イAい → イAく なります",
    notes: {
      points: [
        "なります（なる） dùng để biểu thị sự thay đổi.",
        "Với danh từ và tính từ ナ → dùng ～に なります.",
        "Với tính từ イ → đổi 「い」 thành 「く」 rồi dùng ～く なります."
      ],
      examples: [
        {
          jp: "春は暖か「くなります。」",
          vi: "Mùa xuân 「trở nên」 ấm."
        },
        {
          jp: "夏は休み「になります。」",
          vi: "Mùa hè 「bước vào」 kỳ nghỉ."
        },
        {
          jp: "花が咲いて、公園がきれい「になりました。」",
          vi: "Hoa nở khiến công viên 「đã trở nên」 đẹp hơn."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "日本の春はどうですか。",
        vi: "Mùa xuân ở Nhật thế nào?"
      },
      {
        speaker: "B",
        jp: "だんだん暖かくなります。",
        vi: "Trời dần dần trở nên ấm."
      },
      {
        speaker: "A",
        jp: "夏はどうですか。",
        vi: "Mùa hè thì sao?"
      },
      {
        speaker: "B",
        jp: "七月から夏休みになります。",
        vi: "Từ tháng 7 sẽ bước vào kỳ nghỉ hè."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② いちばん ナAです／イAいです",
    usage: [
      "Dùng để diễn tả mức độ cao nhất (nhất).",
      "Đặt いちばん trước tính từ."
    ],
    structure: "いちばん + ナAです ／ いちばん + イAいです",
    notes: {
      points: [
        "Nghĩa gốc của いちばん là 'đầu tiên'.",
        "Khi đứng trước tính từ, nó mang nghĩa 'nhất'.",
        "Có thể dùng với cả tính từ ナ và tính từ イ."
      ],
      examples: [
        {
          jp: "秋が「いちばん」好きです。",
          vi: "Tôi thích mùa thu 「nhất.」"
        },
        {
          jp: "春が「いちばん」きれいです。",
          vi: "Mùa xuân đẹp 「nhất.」"
        },
        {
          jp: "日本では、８月が「いちばん」暑いです。",
          vi: "Ở Nhật, tháng 8 là thời điểm nóng 「nhất.」"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "好きな季節はいつですか。",
        vi: "Bạn thích mùa nào?"
      },
      {
        speaker: "B",
        jp: "春が「いちばん」好きです。",
        vi: "Tôi thích mùa xuân 「nhất.」"
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ イAいのが好きです／苦手です",
    usage: [
      "Dùng để nói về điều mình thích hoặc không thích.",
      "Trong bài này dùng để nói về thời tiết mà mình thích hoặc không thích."
    ],
    structure: "イAい + の + が + 好きです／苦手です",
    notes: {
      points: [
        "Với tính từ イ, thêm の để danh từ hóa rồi dùng ～のが好きです.",
        "苦手です mang nghĩa 'không thích' hoặc 'không giỏi'.",
        "苦手 là cách nói mềm hơn so với 好きじゃないです nên thường dùng trong hội thoại.",
        "Trong câu phủ định như ～のは好きじゃないです, trợ từ が thường đổi thành は."
      ],
      examples: [
        {
          jp: "私は暑い「のが好き」です。",
          vi: "Tôi 「thích」 trời nóng."
        },
        {
          jp: "寒いのが「苦手」です。",
          vi: "Tôi 「không thích」 trời lạnh."
        },
        {
          jp: "雨の日は出かけるのが「苦手」です。",
          vi: "Tôi 「không thích」 ra ngoài vào ngày mưa."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "どんな天気が好きですか。",
        vi: "Bạn thích thời tiết như thế nào?"
      },
      {
        speaker: "B",
        jp: "私は暖かいのが好きです。",
        vi: "Tôi thích trời ấm."
      },
      {
        speaker: "A",
        jp: "寒いのはどうですか。",
        vi: "Thế trời lạnh thì sao?"
      },
      {
        speaker: "B",
        jp: "寒いのは「苦手」です。",
        vi: "Tôi 「không thích」 trời lạnh."
      }
    ]
  },

  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ ナAです／イAいです から",
    usage: [
      "Dùng để nêu lý do.",
      "Đặt から ở cuối câu để giải thích nguyên nhân."
    ],
    structure: "ナAです／イAいです + から",
    notes: {
      points: [
        "から được thêm vào cuối câu để thể hiện lý do.",
        "Trong bài này dùng dạng 「tính từ です + から」. Tuy nhiên, trước から cũng có thể dùng động từ.",
      ],
      examples: [
        {
          jp: "秋が好きです。もみじの景色がきれい「ですから。」",
          vi: "Tôi thích mùa thu 「vì」 phong cảnh lá đỏ đẹp."
        },
        {
          jp: "雨が「降っていますから」、出かけません。",
          vi: "「Vì trời đang mưa」 nên tôi không ra ngoài."
        },
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "好きな季節はいつですか。",
        vi: "Bạn thích mùa nào?"
      },
      {
        speaker: "B",
        jp: "秋です。",
        vi: "Mùa thu."
      },
      {
        speaker: "A",
        jp: "どうしてですか。",
        vi: "Tại sao vậy?"
      },
      {
        speaker: "B",
        jp: "果物がおいしい「ですから。」",
        vi: "「Vì」 trái cây ngon."
      }
    ]
  },

  {
    id: "5",
    tab: "Mẫu 5",
    title: "⑤ S1 から、S2",
    usage: [
      "Dùng để nối hai câu với nhau để diễn tả lý do.",
      "S1 biểu thị nguyên nhân, S2 là kết quả."
    ],
    structure: "S1 + から、S2",
    notes: {
      points: [
        "から không chỉ đứng cuối câu mà còn có chức năng nối hai câu.",
        "S1 biểu thị lý do của S2.",
        "Có thể dùng với danh từ, tính từ và động từ."
      ],
      examples: [
        {
          jp: "暑いのが大好き「ですから」、夏が好きです。",
          vi: "「Vì」 rất thích trời nóng nên tôi thích mùa hè."
        },
        {
          jp: "果物がおいしい「ですから」、秋が好きです。",
          vi: "「Vì」 trái cây ngon nên tôi thích mùa thu."
        },
        {
          jp: "夏休みがあります「から」、夏がいちばん好きです。",
          vi: "「Vì」 có kỳ nghỉ hè nên tôi thích mùa hè nhất."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "どうして夏が好きですか。",
        vi: "Tại sao bạn thích mùa hè?"
      },
      {
        speaker: "B",
        jp: "海で遊べます「から」、夏が好きです。",
        vi: "「Vì」 có thể chơi ở biển nên tôi thích mùa hè."
      }
    ]
  },

  {
    id: "6",
    tab: "Mẫu 6",
    title: "⑥ N1 や N2",
    usage: [
      "Dùng để liệt kê một số ví dụ tiêu biểu.",
      "Không liệt kê hết tất cả."
    ],
    structure: "N1 や N2（や N3）",
    notes: {
      points: [
        "や dùng để nối danh từ với danh từ, giống trợ từ と.",
        "Khác với と, や được dùng khi đưa ra ví dụ, không liệt kê đầy đủ.",
        "Sau N2 có thể thêm など để nhấn mạnh ý 'v.v.'."
      ],
      examples: [
        {
          jp: "海「や」山で遊ぶのも楽しいです。",
          vi: "Chơi ở biển 「hay」 núi đều vui."
        },
        {
          jp: "春は桜「や」チューリップ「など」の花が咲きます。",
          vi: "Mùa xuân 「hoa anh đào, hoa tulip v.v.」 nở."
        },
        {
          jp: "秋はぶどう「や」梨がおいしいです。",
          vi: "Mùa thu nho 「và」 lê ngon."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "休みの日はどこへ行きますか。",
        vi: "Ngày nghỉ bạn đi đâu?"
      },
      {
        speaker: "B",
        jp: "海「や」山へ行きます。",
        vi: "Tôi đi biển 「và」 đi núi."
      }
    ]
  },

  {
    id: "7",
    tab: "Mẫu 7",
    title: "⑦ N1 とか（N2 とか）",
    usage: [
      "Dùng để đưa ra ví dụ.",
      "Thường dùng trong văn nói."
    ],
    structure: "N1 とか（N2 とか）",
    notes: {
      points: [
        "とか dùng khi đưa ra ví dụ.",
        "Khác với や, とか có thể dùng ngay cả khi chỉ đưa ra một ví dụ (N1 とか).",
        "Thường dùng trong hội thoại.",
        "とか có thể đứng giữa câu hoặc cuối câu.",
        "Ngoài danh từ, とか còn có thể đi với tính từ và động từ."
      ],
      examples: [
        {
          jp: "秋は果物がおいしいですね。ぶどう「とか」梨「とか。」",
          vi: "Mùa thu trái cây ngon nhỉ. 「Như」 nho với lê 「chẳng hạn.」"
        },
        {
          jp: "夏休みに、どこか旅行に行きたいですね。北海道「とか。」",
          vi: "Tôi muốn đi du lịch đâu đó vào kỳ nghỉ hè. 「Ví dụ」 như Hokkaido."
        },
        {
          jp: "スキー「とか」スケート「とか」が好きです。",
          vi: "Tôi thích trượt tuyết, trượt băng 「chẳng hạn.」"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "どんなスポーツが好きですか。",
        vi: "Bạn thích môn thể thao nào?"
      },
      {
        speaker: "B",
        jp: "野球（やきゅう）「とか」バドミントン「とか」が好きです。",
        vi: "Tôi thích bóng chày, cầu lông「chẳng hạn.」"
      }
    ]
  }
];
