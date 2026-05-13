export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 2 – Có vẻ là người chăm chỉ nhỉ.",
    summaryList: [
      {
        label: "① N1 は N2 が ナA-です／イA-いです ②",
        example: "江口【えぐち】さんは、髪【かみ】が「短いです」。",
        vi: "Anh Eguchi có mái tóc 「ngắn」."
      },
      {
        label: "② V-ている + 人",
        example: "ナインさんは、帽子【ぼうし】を「かぶっている人」です。/ 加藤【かとう】さんは、あそこで「コピーをしている人」です。",
        vi: "Anh Naing là 「người đang đội」 mũ. / Anh Kato là 「người đang photocopy」 ở đằng kia."
      },
      {
        label: "③ S よ",
        example: "原【はら】さんは、座【すわ】って、本を読んでいる人です「よ」。",
        vi: "Chị Hara là người đang ngồi đọc sách 「đấy/đó」."
      },
      {
        label: "④ S し、～",
        example: "三船敏郎【Mifune Toshiro】は、演技【えんぎ】が上手【じょうず】だ「し」、本当にかっこいいです。",
        vi: "Mifune Toshiro diễn xuất giỏi 「và còn」 thực sự rất ngầu nữa."
      }
    ]

  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① N1 は N2 が ナA-です／イA-いです",
    usage: [
      "Dùng để miêu tả đặc điểm của một điều gì đó hoặc một đối tượng nào đó.",
      "Trong bài này, cấu trúc được dùng cụ thể để 「miêu tả đặc điểm về ngoại hình của con người」.",
    ],
    structure: "N1 (người) は N2 (bộ phận cơ thể) が Tính từ です。",
    notes: {
      points: [
        "N1 là từ chỉ người, N2 là từ chỉ bộ phận cơ thể.",
        "Cấu trúc này còn có thể sử dụng để bổ nghĩa cho danh từ chỉ người."
      ],
      examples: [
        {
          jp: "背【せ】が高い／低【ひく】い",
          vi: "Dáng cao / thấp"
        },
        {
          jp: "髪【かみ】が長い／短【みじか】い",
          vi: "Tóc dài / ngắn"
        },
        {
          jp: "手【て】が大きい",
          vi: "Tay to"
        },
        {
          jp: "目【め】が黒い",
          vi: "Mắt đen"
        },
        {
          jp: "顔【かお】が丸【まる】い",
          vi: "Mặt tròn"
        },
        {
          jp: "髪【かみ】が短【みじか】い人",
          vi: "Người tóc ngắn"
        },
        {
          jp: "背【せ】が高い人",
          vi: "Người cao"
        },
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "江口【えぐち】さんはどの人ですか。",
        vi: "Anh Eguchi là người nào vậy?"
      },
      {
        speaker: "B",
        jp: "江口【えぐち】さんは、髪【かみ】が短い人です。",
        vi: "Anh Eguchi là người có mái tóc ngắn đó."
      },
      {
        speaker: "A",
        jp: "あの背【せ】が高い人ですか。",
        vi: "Là người dáng cao kia phải không?"
      },
      {
        speaker: "B",
        jp: "はい、そうです。",
        vi: "Vâng, đúng rồi."
      }
    ]
  },


  {
    id: "2",
    tab: "Mẫu 2",
    title: "② V-ている + 人",
    usage: [
      "Dùng để miêu tả đặc điểm hoặc trạng thái của một ai đó nhằm giúp người nghe xác định được đối tượng đang được nhắc tới.",
      "Cấu trúc này có thể diễn tả kết quả của một hành động (như việc mặc đồ) hoặc một hành động đang diễn ra."
    ],
    structure: "V-ている + 人 (Người đang [làm gì] / Người đang [mặc/đeo/đội gì])",
    notes: {
      points: [
        "Nhóm 1: Diễn tả trạng thái trang phục/phụ kiện (Kết quả của hành động).",
        "Nhóm 2: Diễn tả hành động đang diễn ra tại thời điểm nói.",
        "Lưu ý cách dịch từ 'Mặc/Đeo' trong tiếng Nhật rất đa dạng tùy vào vị trí trên cơ thể.",
        "～を着【き】ている: Mặc (áo, váy liền, trang phục từ thắt lưng trở lên)",
        "～をはいている: Đi/Mặc/Xỏ (giày, tất, quần, váy (chân váy)... từ thắt lưng trở xuống)",
        "～をかけている:  Thường là hành động treo mắc, tạo ra một sự treo lơ lửng",
        "～をつけている:  Thường là hành động đính, dính, hoặc đeo trực tiếp (Đeo (hoa tai, đồng hồ, phụ kiện nhỏ))"
      ],
      examples: [
        {
          jp: "ワンピースを着【き】ている",
          vi: "Đang mặc váy liền."
        },
        {
          jp: "コートを着【き】ている",
          vi: "Đang mặc áo khoác."
        },
        {
          jp: "スカートをはいている",
          vi: "Đang mặc váy."
        },
        {
          jp: "靴【くつ】をはいている",
          vi: "Đang đi giày."
        },
        {
          jp: "眼鏡【めがね】をかけている",
          vi: "Đeo kính."
        },
        {
          jp: "鍵【かぎ】をかけている",
          vi: "Khóa cửa"
        },
        {
          jp: "マスクをつけている",
          vi: "Đeo khẩu trang"
        },
        {
          jp: "香水【こうすい】をつけている",
          vi: "Xức nước hoa."
        },
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "ナインさんはどの人ですか。",
        vi: "Anh Naing là người nào vậy?"
      },
      {
        speaker: "B",
        jp: "あそこで帽子【ぼうし】をかぶっている人ですよ。",
        vi: "Là người đang đội mũ ở đằng kia đó."
      },
      {
        speaker: "A",
        jp: "あ、あの黒い靴【くつ】をはいている人ですね。",
        vi: "À, là người đang đi đôi giày màu đen phải không?"
      },
      {
        speaker: "B",
        jp: "はい、そうです。",
        vi: "Vâng, đúng rồi."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ S よ",
    usage: [
      "「よ」 đứng ở cuối câu, được dùng khi 「truyền đạt thông tin mới」 hoặc 「thông tin mà đối phương không biết」.",
      "Cấu trúc này cũng được dùng để 「gọi đối phương chú ý như cảnh báo nguy hiểm」."
    ],
    structure: "S + よ (Đấy/Đó/Kìa...)",
    notes: {
      points: [
        "Dùng để miêu tả người/vật mà ai đó đang tìm kiếm (cung cấp thông tin mới).",
        "Dùng để nhắc nhở, gây chú ý: 「危ないですよ」(Nguy hiểm đấy), 「車が来ますよ」(Ô tô đến kìa).",
        "Phân biệt với 「ね」: Dùng để xác nhận lại hoặc thể hiện sự đồng cảm (Người kia ạ?)."
      ],
      examples: [
        {
          jp: "原さんは、座って、本を読んでる人です「よ」。",
          vi: "Hara là người đang ngồi đọc sách 「đó」."
        },
        {
          jp: "あそこに座ってる人です「よ」。",
          vi: "Là người đang ngồi ở đằng kia 「đấy」."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "すみません。田中さんは、どの人ですか。",
        vi: "Xin lỗi. Cho tôi hỏi Tanaka là ai ạ?"
      },
      {
        speaker: "B",
        jp: "あそこに座ってる人です「よ」。",
        vi: "Là người đang ngồi ở đằng kia 「đấy」."
      },
      {
        speaker: "A",
        jp: "あの人です「ね」。ありがとうございます。",
        vi: "Người kia 「ạ?」 Cảm ơn anh."
      }
    ]
  },

  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ S し、～",
    usage: [
      "Dùng để đưa ra cảm xúc, ý kiến kèm với lý do, căn cứ.",
      "Sử dụng khi có nhiều lý do, căn cứ (liệt kê lý do)."
    ],
    structure: "S (thể thông thường hoặc lịch sự) + し、～",
    notes: {
      points: [
        "Cấu trúc này có thể kết hợp với cả thể lịch sự hoặc thể thông thường.",
        "Dùng để liệt kê nhiều đặc điểm hoặc lý do dẫn đến một kết luận/cảm xúc.",
        "Ví dụ: Khi muốn nói lý do tại sao thích một thành phố hoặc một người nào đó."
      ],
      examples: [
        {
          jp: "三船敏郎【Mifune Toshiro】は、演技【えんぎ】が上手【じょうず】だし、本当【ほんとう】にかっこいいです。",
          vi: "Mifune Toshiro có lối diễn xuất tốt và cực kỳ ngầu."
        },
        {
          jp: "ホーチミン市はにぎやかだし、天気がいいし、親切【しんせつ】だし。",
          vi: "Thành phố Hồ Chí Minh vừa nhộn nhịp, thời tiết lại tốt, (con người) lại thân thiện nữa."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "安室奈美恵【あむろなみえ】が好きなんですか？",
        vi: "Bạn thích Amuro Namie à?"
      },
      {
        speaker: "B",
        jp: "はい。かっこいいし、歌【うた】もダンスも上手【じょうず】だし。",
        vi: "Vâng. Cô ấy vừa ngầu, vừa hát hay lại còn nhảy đẹp nữa."
      }
    ]
  },

];
