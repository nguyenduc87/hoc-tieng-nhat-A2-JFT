export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 17： Đây là lá bùa anh trai tặng cho tôi.",
    summaryList: [
      {
        label: "① V (thể thông thường) + N",
        example: "ネパールから「持って来た飾【かざ】り」です。",
        vi: "Đây là 「đồ trang trí tôi mang từ」 Nepal về."
      },
      {
        label: "② 【người】に【vật】をもらいます",
        example: "このマグカップ、誕生日に、友だちに「もらった」んです。",
        vi: "Cái cốc này, tôi 「đã nhận」 từ bạn vào dịp sinh nhật."
      },
      {
        label: "③ 【người】に【vật】をくれます",
        example: "これは、兄が「くれた」お守【まも】りです。",
        vi: "Đây là lá bùa mà anh trai 「tặng (cho tôi)」."
      }
    ]
  },
// Chi tiết ngữ pháp
  {
    id: "1",
    tab: "Mẫu 1",
    title: "① V (thể thông thường) + N",
    usage: [
      "Dùng để bổ nghĩa cho danh từ bằng một mệnh đề động từ."
    ],
    structure: "V（thể thông thường）＋ N",
    notes: {
      points: [
        "Động từ đứng trước danh từ phải chia về thể thông thường (V-ru, V-ta, V-nai...).",
        "Trong câu, danh từ được bổ nghĩa có thể đứng ở vị trí chủ ngữ hoặc vị trí vị ngữ.",
        "Các mẫu câu thường dùng khi tặng quà sau: ",
        "（私が）作ったN (「N tôi đã làm」)<br> ～から持って来たN (「N tôi đã mang đến từ ～ đến」)<br> ～で買ったN (「N tôi đã mua tại ～」)",
        
      ],
      examples: [
        {
          jp: "これは「飾【かざ】り」です。",
          vi: "Đây là 「đồ trang trí」."
        },
        {
          jp: "私は、この飾【かざ】りをネパールから「持って来ました」。",
          vi: "Tôi 「đã mang」 đồ trang trí này từ Nepal đến."
        },
        {
          jp: "➡これは、ネパールから「持って来た飾【かざ】り」です。",
          vi: "Đây là 「đồ trang trí tôi đã mang đến」 từ Nepal."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "それは何ですか？",
        vi: "Đó là cái gì vậy?"
      },
      {
        speaker: "B",
        jp: "これは「母が「作った」料理」です。食べてください。",
        vi: "Đây là 「món ăn mẹ tôi đã làm」. Mời bạn ăn thử."
      }
    ]
  },
  {
    id: "2",
    tab: "Mẫu 2",
    title: "② 【người】に【vật】をもらいます",
    usage: [
      "Nhận cái gì từ ai đó.",
      "A は 「Người」 に 「Vật」 をもらいます",
      "A là người 「Nhận」 và cũng là Chủ Ngữ."
    ],
    structure: "Người ＋ に ＋ Vật ＋ をもらいます",
    notes: {
      points: [
        "Có thể thay trợ từ 「に」 bằng 「から」khi nhận từ một tổ chức/cơ quan.",
        "Nếu người tặng có vai vế cao hơn, sử dụng kính ngữ 「いただきます」thay cho 「もらいます」.",
      ],
      examples: [
        {
          jp: "誕生日に、息子【むすこ】「は」友だち「に」マグカップを「もらいました」。",
          vi: "Con trai tôi đã nhận được cái cốc từ bạn vào dịp sinh nhật."
        },
        {
          jp: "来週、銀行「から」借金【しゃっきん】を「もらいます」。(nhận từ tổ chức dùng から thay に)",
          vi: "Tuần sau, tôi sẽ nhận tiền vay từ ngân hàng."
        },
        {
          jp: "年末【ねんまつ】、抽選【ちゅうせん】で社長「に」スマホを「いただきました」。",
          vi: "Cuối năm, nhờ vào bốc thăm tôi 「đã nhận」 được smart phone từ giám đốc."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "素敵【すてき】な時計【とけい】ですね。",
        vi: "Chiếc đồng hồ đẹp quá nhỉ."
      },
      {
        speaker: "B",
        jp: "ええ、誕生日【たんじょうび】に父に「もらった」んです。",
        vi: "Vâng, tôi đã nhận nó từ bố vào ngày sinh nhật đấy."
      }
    ]
  },
  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ 【người】に【vật】をくれます",
    usage: [
      "Dùng khi người khác tặng/cho mình (hoặc người thân của mình) một vật gì đó.",
      "A 「が」 「Tôi/người phe tôi」 に 「Vật」をくれます <br> Trợ từ đứng sau người tặng là 「が」",
      "A là người 「Cho」 và cũng là Chủ Ngữ."
    ],
    structure: "Người (tặng) ＋ が ＋ (Tôi) ＋ に ＋ Vật ＋ をくれます",
    notes: {
      points: [
        "Khác với 「もらいます」 lấy 'người nhận' làm chủ ngữ",
        "Cấu trúc 「くれます」 lấy 'người tặng' làm chủ ngữ.",
        "Trợ từ đứng sau người tặng là 「が」.",
        "Đối tượng nhận 「～に」 thường là 'tôi' (watashi) nên có thể lược bỏ."
      ],
      examples: [
        {
          jp: "これは兄「が」「くれた」お守【まも】りです。",
          vi: "Đây là lá bùa mà anh trai đã tặng cho tôi."
        },
        {
          jp: "隣【となり】の人「が」 息子【むすこ】に お菓子【かし】を くれました。",
          vi: "Người hàng xóm đã tặng kẹo cho con trai tôi."
        },
        {
          jp: "友達【ともだち】「が」 妹【いもうと】に 花を くれました。",
          vi: "Bạn nó (Bạn của em gái) đã tặng hoa cho em gái tôi."
        },
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "そのペン、いいですね。",
        vi: "Cái bút đó tốt nhỉ."
      },
      {
        speaker: "B",
        jp: "これは先生が「くれた」んです。",
        vi: "Cái này là thầy giáo đã tặng cho tôi đấy."
      }
    ]
  }
];
