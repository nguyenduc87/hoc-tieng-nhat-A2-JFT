export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 6 – Bưu điện đi thế nào thì được?",
    summaryList: [
      {
        label: "① Nで、～／ナAで、～／イAくて、～",
        example: "この町は、とてもにぎやか「で」、便利です。",
        vi: "Thị trấn này rất náo nhiệt 「và」 tiện lợi."
      },
      {
        label: "② Nだ／ナAだ／イAい けど、～",
        example: "たちばな公園は、場所は不便だ「けど」、きれいですよ。",
        vi: "Công viên Tachibana 「tuy」 vị trí bất tiện nhưng đẹp."
      },
      {
        label: "③ V-ることができます",
        example: "一年中、いろいろな花を「見ることができます。」",
        vi: "Quanh năm 「có thể ngắm」 nhiều loại hoa khác nhau."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① Nで、／ナAで、／イAくて、～",
    usage: [
      "Dùng để nối 2 câu hoặc 2 ý với nhau.",
      "Nếu là N hoặc A ナ thì dùng dạng 「～で」.",
      "Nếu là A イ thì đổi 「い」 thành 「くて」."
    ],
    structure: "Nで、～／ナAで、～／イAくて、～",
    notes: {
      points: [
        "Dùng để liệt kê đặc điểm hoặc nối các tính chất song song.",
        "Vế trước, vế sau mang ý nghĩa bổ sung cho nhau."
      ],
      examples: [
        {
          jp: "この町は、とても「にぎやかで」、便利です。",
          vi: "Khu phố này rất náo nhiệt và tiện lợi."
        },
        {
          jp: "この部屋は、「広くて」、きれいです。",
          vi: "Căn phòng này rộng và sạch nữa."
        }
      ]
    },
    dialogue: [
      {
        speaker: "例1",
        jp: "ここは「田舎で」、のんびりしています。",
        vi: "Đây là nông thôn và cuộc sống thong thả."
      },
      {
        speaker: "例2",
        jp: "この辺は緑が「多くて」、静かでいいですね。",
        vi: "Quanh đây nhiều cây xanh, yên tĩnh và thích nhỉ."
      },
      {
        speaker: "例3",
        jp: "この町はバスが「少なくて」、ちょっと不便です。",
        vi: "Khu phố này ít xe buýt nên hơi bất tiện."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② Nだ／ナAだ／イAい けど、～",
    usage: [
      "Dùng để nối 2 câu có quan hệ trái ngược nhau.",
      "Nếu là N hoặc A đuôi ナ thì dùng 「～だけど」.",
      "Nếu là A đuôi イ thì dùng 「～いけど」."
    ],
    structure: "Nだ／ナAだ／イAい + けど、～",
    notes: {
      points: [
        "Một vế thể hiện đánh giá tích cực, vế còn lại thể hiện đánh giá tiêu cực (hoặc ngược lại).",
        "Dùng khi muốn nêu ý đối lập một cách mềm mại."
      ],
      examples: [
        {
          jp: "日本人だけど、漢字があまり書けません。",
          vi: "Dù là người Nhật nhưng không viết được nhiều kanji lắm."
        },
        {
          jp: "日曜日だけど、仕事があります。",
          vi: "Dù là Chủ nhật nhưng vẫn có việc phải làm."
        }
      ]
    },
    dialogue: [
      {
        speaker: "例1",
        jp: "都会だけど、緑が多いですね。",
        vi: "Là thành phố nhưng có nhiều cây xanh nhỉ."
      },
      {
        speaker: "例2",
        jp: "この辺は静かだけど、ちょっと不便です。",
        vi: "Vùng này yên tĩnh nhưng hơi bất tiện."
      },
      {
        speaker: "例3",
        jp: "ここからちょっと遠いけど、バスがあります。",
        vi: "Từ đây hơi xa nhưng có xe buýt."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ V-ることができます",
    usage: [
      "Diễn tả khả năng hoặc điều có thể thực hiện trong một hoàn cảnh nhất định.",
      "Khi muốn biến động từ thành danh từ thì thêm 「こと」 sau thể từ điển."
    ],
    structure: "V-る + ことができます",
    notes: {
      points: [
        "Trong bài này giải thích về thành phố, địa điểm du lịch, nhà hàng..."
      ],
      examples: [
        {
          jp: "一年中、いろいろな花を見ることができます。",
          vi: "Quanh năm có thể ngắm nhiều loại hoa."
        }
      ]
    },
    dialogue: [
      {
        speaker: "例1",
        jp: "この店では、地元の料理を食べることができます。",
        vi: "Ở cửa hàng này có thể ăn món địa phương."
      },
      {
        speaker: "例2",
        jp: "丘の上から海と町を見渡すことができます。",
        vi: "Từ trên đồi có thể nhìn bao quát biển và khu phố."
      },
      {
        speaker: "例3",
        jp: "夏はここで泳ぐことができます。",
        vi: "Mùa hè có thể bơi ở đây."
      }
    ]
  }

];
