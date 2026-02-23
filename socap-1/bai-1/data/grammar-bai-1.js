export const grammarBai2 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 1 – Đang làm việc tại nhà hàng.",
    summaryList: [
      {
        label: "① Kiểu lịch sự / thông thường",
        example: "お久しぶり「です」。お元気「ですか」。",
        vi: "Đã lâu không gặp. Bạn có khỏe không?"
      },
      {
        label: "② 【Khoảng thời gian】になります。",
        example: "日本に来て「１年」になります。",
        vi: "「Đã 1 năm」 kể từ khi tôi đến Nhật."
      },
      {
        label: "③ 【Thời điểm】（に）来ました。",
        example: "「去年の９月」に来ました。",
        vi: "Tôi đã đến vào 「tháng 9 năm trước.」"
      },
      {
        label: "④ Vています",
        example: "日本では、スーパーで働いています。",
        vi: "Ở Nhật, tôi làm việc tại siêu thị."
      },
      
    ]
  },
  {
    id: "1",
    tab: "Mẫu 1",
    title: "① Kiểu lịch sự / thông thường",
    usage: [
      "Kiểu lịch sự là hình thức trang trọng có sử dụng です, ます ở cuối câu, thể hiện sự kính trọng đối với người nghe.",
      "Có です là kiểu lịch sự, không có です là kiểu thông thường."
    ],
    structure: "Vị trí cuối câu + です／V-ます。",
    notes: {
      points: [
        "Thêm です/ます vào cuối câu.",
        "Với người thân thiết thì có thể bỏ です／V từ điển. Có 2 cách nói:"
      ],
      examples: [
        {
          jp: "お元気「ですか」",
          vi: "Bạn khỏe không?"
        },
        {
          jp: "元気？",
          vi: "Khỏe không?"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "久しぶり。",
        vi: "Lâu rồi không gặp."
      },
      {
        speaker: "B",
        jp: "ああ、久しぶり。",
        vi: "Ừ, lâu rồi không gặp."
      },
      {
        speaker: "A",
        jp: "久しぶり。",
        vi: "Lâu rồi không gặp."
      },
      {
        speaker: "B",
        jp: "お久しぶり「です。」",
        vi: "Đã lâu không gặp 「ạ.」"
      }
    ]
  },
  {
    id: "2",
    tab: "Mẫu 2",
    title: "② 【Khoảng thời gian】になります。",
    usage: [
      "Cách nói thể hiện quá trình thời gian.",
      "Nói đã mấy năm ～年, mấy tháng ～か月 từ khi..."
    ],
    structure: "～か月／～年　＋　になります。",
    notes: {
      points: [
        "Phải có 「になります」 thể hiện sự thay đổi.",
        "Phải có 「Vて」 để nói 「thời điểm bắt đầu.」 Vd: 日本に「来て」（từ khi đến Nhật）.",
        "Dịch: 「Đã mấy năm」 hoặc 「mấy tháng」 kể từ khi ...",
      ],
      examples: [
        {
          jp: "日本に来て「１年」になります",
          vi: "「Đã 1 năm」 kể từ khi tôi đến Nhật."
        },
        {
          jp: "仕事を始めて「3ヶ月」になります。",
          vi: "「Đã 3 tháng」 kể từ khi tôi bắt đầu công việc."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "日本に「来て、どれぐらいですか」",
        vi: "Bạn đến Nhật được bao lâu rồi?"
      },
      {
        speaker: "B",
        jp: "ちょうど半年です。",
        vi: "Vừa đúng nửa năm"
      },
      {
        speaker: "A",
        jp: "仕事を「始めて、どのぐらいになりますか。」",
        vi: "Bạn bắt đầu công việc được bao lâu rồi?"
      },
      {
        speaker: "B",
        jp: "「3ヶ月」になります。",
        vi: "Được 3 tháng"
      }
    ]
  },
  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ 【Thời điểm】（に）来ました。",
    usage: [
      "Dùng để nói thời điểm xảy ra sự việc.",
    ],
    structure: "【Thời điểm】（に）来ました。",
    notes: {
      points: [
        "Không dùng に với các từ（先月、先週、去年、明日、昨日、今日.v.v.）",
      ],
      examples: [
        {
          jp: "今日の朝、来ました。",
          vi: "Đã đến sáng nay."
        },
        {
          jp: "先週の土曜日「に」来ました。",
          vi: "Đã đến 「vào ngày」 thứ 7 tuần trước."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "いつ、日本に来ましたか。",
        vi: "Bạn đến Nhật khi nào vậy?"
      },
      {
        speaker: "B",
        jp: "先月、来ました。",
        vi: "Tôi đến từ tháng trước."
      },
    ]
  },
  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ Vています",
    usage: [
      "Giải thích nghề nghiệp hiện tại của mình.",
    ],
    structure: "Vて＋います",
    notes: {
      points: [
        "Nói về trạng thái hiện tại",
        "Trong văn nói thường lược bỏ い nói ています➡てます",
      ],
      examples: [
        {
          jp: "日本では、何を「しています」か。",
          vi: "Ở Nhật, bạn đang làm việc gì?"
        },
        {
          jp: "スーパーで「働いています。」",
          vi: "Tôi đang làm việc tại siêu thị."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "日本では、何を「しています」か。",
        vi: "Ở Nhật, bạn đang làm việc gì?"
      },
      {
        speaker: "B",
        jp: "「働いています」。介護（かいご）の仕事を「しています。」",
        vi: "Tôi đang làm việc. Đang làm công việc hộ lý chăm sóc người già."
      },
      {
        speaker: "A",
        jp: "Bさんは？",
        vi: "Còn bạn thì sao?"
      },
      {
        speaker: "B",
        jp: "私は日本語学校で日本語を勉強「してます。」",
        vi: "Tôi đang học tiếng Nhật tại trường tiếng Nhật."
      },
    ]
  },
  
];
