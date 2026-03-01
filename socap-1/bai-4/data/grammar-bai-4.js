export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 4 – Cách nói thời tiết Nắng-Mưa",
    summaryList: [
      {
        label: "① Sね＜Đồng cảm＞",
        example: "今日はいい天気です「ね。」",
        vi: "Hôm nay thời tiết đẹp 「nhỉ.」"
      },
      {
        label: "② Phi quá khứ／Quá khứ",
        example: "昨日はすごい「雨でした」ね。",
        vi: "Hôm qua mưa dữ dội nhỉ."
      },
      {
        label: "③ V-ています",
        example: "今も少し雨が「降っています」。",
        vi: "Bây giờ vẫn 「đang mưa」 một chút."
      },
      {
        label: "④ N／ナA／イAい／V-る でしょう",
        example: "明日は「晴れるでしょう。」",
        vi: "Ngày mai 「chắc sẽ nắng.」"
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① S ね ＜Đồng cảm・共感＞",
    usage: [
      "Dùng khi muốn thể hiện sự đồng cảm với đối phương hoặc câu chuyện của họ.",
      "Thường dùng với chủ đề dễ chia sẻ như thời tiết, khí hậu để mở đầu câu chuyện.",
      "Ở Nhập môn 「～ね」 dùng để xác nhận (ví dụ: コピー20枚ですね - 20 bản photo phải ko ạ?)."
    ],
    structure: "S + ね",
    notes: {
      points: [
        "Thời tiết, nhiệt độ là chủ đề dễ chia sẻ nên thường dùng 「ね」.",
      ],
      examples: [
        {
          jp: "今日はいい天気です「ね。」",
          vi: "Hôm nay trời đẹp 「nhỉ.」"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "今日はいい天気です「ね。」",
        vi: "Hôm nay trời đẹp 「nhỉ.」"
      },
      {
        speaker: "B",
        jp: "そうです「ね。」",
        vi: "Đúng thế 「nhỉ.」"
      },
      {
        speaker: "A",
        jp: "だいぶ暖かくなりました「ね。」",
        vi: "Trời đã ấm lên khá nhiều 「nhỉ.」"
      },
      {
        speaker: "B",
        jp: "本当です「ね。」",
        vi: "Thật vậy 「nhỉ.」"
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② Phi quá khứ／Quá khứ（非過去・過去）",
    usage: [
      "Danh từ, động từ ở hiện tại, tương lai → Phi quá khứ.",
      "Danh từ, động từ ở quá khứ → Quá khứ.",
    ],
    structure: "Hiện tại: Nです／ナAです／イAいです／V-ます<br>Quá khứ: Nでした／ナAでした／イAかったです／V-ました",
    notes: {
      points: [
        "Thời gian quá khứ -> quá khứ. Hiện tại -> phi quá khứ.",
      ],
      examples: [
        {
          jp: "「昨日」はすごい「雨でした」ね。",
          vi: "「Hôm qua」 trời mưa rất to nhỉ."
        },
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "おはようございます。朝から「暑い」ですね。",
        vi: "Chào buổi sáng. 「Từ sáng đã nóng」 nhỉ."
      },
      {
        speaker: "B",
        jp: "そうですね。ゆうべも「暑かった」ですね。",
        vi: "Đúng vậy. 「Tối qua cũng nóng」 nhỉ."
      },
      {
        speaker: "A",
        jp: "毎日、よく「降ります」ね。",
        vi: "Dạo này 「ngày nào cũng」 mưa nhiều nhỉ."
      },
      {
        speaker: "B",
        jp: "本当ですね。",
        vi: "Thật vậy nhỉ."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ V-ています",
    usage: [
      "Ở đây được dùng để nói chuyện về thời tiết hiện tại.",
      "Hãy nhớ: 晴れています(Trời đang nắng)、くもっています(Trời nhiều mây)、雨／雪が降っています(Trời đang mưa)."
    ],
    structure: "V-て + います",
    notes: {
      points: [
        "Trong bài này dùng để mô tả thời tiết hiện tại."
      ],
      examples: [
        {
          jp: "今も少し雨が「降っています。」",
          vi: "Bây giờ vẫn đang mưa một chút."
        },
        {
          jp: "晴れています。",
          vi: "Trời đang nắng."
        },
        {
          jp: "くもっています。",
          vi: "Trời đang nhiều mây."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "今朝は、よく「晴れています」ね。",
        vi: "Sáng nay 「trời đang nắng」 đẹp nhỉ."
      },
      {
        speaker: "B",
        jp: "今は、風が「吹いています」。注意してください。",
        vi: "Bây giờ 「gió đang thổi」. Hãy cẩn thận."
      },
      {
        speaker: "A",
        jp: "今日は「くもっていて」、あまり天気がよくないですね。",
        vi: "Hôm nay 「nhiều mây」 nên thời tiết không được đẹp lắm nhỉ."
      }
    ]
  },

  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ N／ナA／イAい／V-る　でしょう",
    usage: [
      "Dùng để đưa ra dự đoán, dùng trong dự báo thời tiết, bản tin.",
      "～でしょう thể hiện sự phỏng đoán.",
      "Trong hội thoại thường không được dùng với nghĩa phỏng đoán.",
      "Nói trong hội thoại nghe không tự nhiên, giống người đang đọc bản tin hơn.",
    ],
    structure: "N , Aな , Aい , Vる ＋ でしょう",
    notes: {
      points: [
        "Với danh từ và tính từ ナ: đổi ～です thành ～でしょう.",
        "Với tính từ イ: giữ nguyên ～い rồi thêm でしょう.",
        "Với động từ: dùng dạng từ điển + でしょう."
      ],
      examples: [
        {
          jp: "明日は「晴れるでしょう。」",
          vi: "Ngày mai trời sẽ nắng."
        },
        {
          jp: "明日も「寒いでしょう。」",
          vi: "Ngày mai cũng sẽ lạnh."
        },
        {
          jp: "雨は、今日の夕方には「やむでしょう。」",
          vi: "Mưa có lẽ sẽ tạnh vào chiều nay."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "明日は「晴れるでしょう。」",
        vi: "Ngày mai trời sẽ nắng."
      },
      {
        speaker: "B",
        jp: "そうですね。",
        vi: "Chắc vậy."
      }
    ]
  }
];
