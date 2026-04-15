export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 16： Tôi đang cố gắng không ăn quá nhiều",
    summaryList: [
      {
        label: "① V-るといいです（よ）",
        example: "よく眠【ねむ】れないときは、ぬるいお風呂にゆっくり「入【はい】るといいですよ」。",
        vi: "Khi khó ngủ thì 「ngâm mình」 trong bồn nước ấm 「sẽ tốt」."
      },
      {
        label: "② V-すぎます",
        example: "昨日、「飲みすぎました」。",
        vi: "Hôm qua tôi đã 「uống quá nhiều」."
      },
      {
        label: "③ V1-たり、V2-たり（します）",
        example: "ジョギングし「たり」、ときどき家でヨガをし「たり」してます。",
        vi: "Tôi vừa chạy bộ, vừa thỉnh thoảng tập yoga ở nhà."
      },
      {
        label: "④ V-るようにしています / V-ないようにしています",
        example: "できるだけ、野菜【やさい】をたくさん「食べるようにしています」。<br>健康【けんこう】のために、「食べすぎないようにしています」。",
        vi: "Tôi cố gắng ăn nhiều rau. Vì sức khỏe, tôi cố gắng không ăn quá nhiều."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① V-るといいですよ",
    usage: [
      "Dùng để đưa ra lời khuyên nhẹ nhàng cho đối phương."
    ],
    structure: "V（辞書形）＋といいですよ",
    notes: {
      points: [
        "Đây là cách nói khi muốn đưa ra 「lời khuyên」 về sức khỏe hoặc sinh hoạt.",
        "Kết hợp với thể từ điển của động từ.",
        "Thường dùng trong hội thoại để gợi ý nhẹ nhàng, không mang tính ép buộc."
      ],
      examples: [
        {
          jp: "やわらかい料理を「食べるといいですよ」。",
          vi: "Ăn đồ ăn mềm sẽ tốt đấy."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "よく眠【ねむ】れないときは、どうすればいいですか？",
        vi: "Khi bị khó ngủ thì nên làm gì?"
      },
      {
        speaker: "B",
        jp: "静かな音楽を聞くといいですよ。",
        vi: "Nghe nhạc nhẹ sẽ tốt đấy."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② V-すぎます",
    usage: [
      "Diễn đạt hành động làm quá mức, thường mang nghĩa tiêu cực."
    ],
    structure: "V（ます bỏ ます）＋すぎます",
    notes: {
      points: [
        "Kết hợp với động từ ở thể ます, bỏ ます rồi thêm すぎます.",
        "Mang sắc thái tiêu cực: 「ăn quá nhiều, uống quá nhiều, làm việc quá nhiều…」"
      ],
      examples: [
        {
          jp: "「食べすぎて」、お腹【なか】が痛いです。",
          vi: "Tôi 「ăn quá nhiều」 nên bị đau bụng."
        },
        {
          jp: "スマホの画面【がめん】を「見すぎて」、目【め】が痛くなりました。",
          vi: "Tôi 「nhìn」 màn hình điện thoại 「quá nhiều」 nên bị đau mắt."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "昨日、「飲みすぎました」。",
        vi: "Hôm qua tôi đã uống quá nhiều."
      },
      {
        speaker: "B",
        jp: "そうですか。体【からだ】に気【き】をつけてくださいね。",
        vi: "Vậy à. Hãy chú ý đến sức khỏe nhé."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ V1-たり、V2-たり（します）",
    usage: [
      "Dùng khi muốn nêu ra một vài ví dụ tiêu biểu trong nhiều hành động."
    ],
    structure: "V（た形）＋り、V（た形）＋りします",
    notes: {
      points: [
        "Thêm り vào thể た của động từ để tạo thành ～たり.",
        "Ở 「cuối câu」 thường dùng 「します, しています hoặc するようにしています」.",
        "Cấu trúc này giúp câu văn tự nhiên hơn khi nói về thói quen hoặc hoạt động đa dạng."
      ],
      examples: [
        {
          jp: "ジョギング「したり」、ときどき家でヨガを「したり」しています。",
          vi: "Tôi thường chạy bộ và thỉnh thoảng tập yoga ở nhà."
        },
        {
          jp: "休みは、テレビを「見たり」、音楽を「聞いたり」して、ゆっくり過ごします。",
          vi: "Vào ngày nghỉ, tôi thư giãn bằng cách xem tivi và nghe nhạc."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "健康【けんこう】のために、何か気【き】をつけていますか？",
        vi: "Anh có làm gì để giữ sức khỏe không?"
      },
      {
        speaker: "B",
        jp: "ジムに「行ったり」、ウォーキングを「したり」しています。",
        vi: "Tôi thường đi tập gym và đi bộ."
      }
    ]
  },

  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ V-るようにしています / V-ないようにしています",
    usage: [
      "Diễn đạt việc 「cố gắng làm」 hoặc 「cố gắng không làm」 một hành động nào đó."
    ],
    structure: "V（辞書形）＋ようにしています / V（ナイ形）＋ようにしています",
    notes: {
      points: [
        "Thể hiện ý thức, sự chủ động của người nói trong việc duy trì thói quen hoặc hành vi.",
        "Thường dùng trong các ngữ cảnh nói về sức khỏe, sinh hoạt, hoặc lối sống."
      ],
      examples: [
        {
          jp: "できるだけ、野菜をたくさん「食べるようにしています」。",
          vi: "Tôi 「cố gắng ăn nhiều」 rau nhất có thể."
        },
        {
          jp: "健康【けんこう】のために、「食べすぎないようにしています」。",
          vi: "Tôi 「cố gắng không ăn quá nhiều」 để giữ sức khỏe."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "健康【けんこう】のために、何か気【き】をつけていますか？",
        vi: "Anh có làm gì để giữ sức khỏe không?"
      },
      {
        speaker: "B",
        jp: "私は、できるだけ、早く「寝るようにしています」。",
        vi: "Tôi 「cố gắng đi ngủ sớm」 nhất có thể."
      },
      {
        speaker: "C",
        jp: "私は、ストレスを「ためないようにしています」。",
        vi: "Tôi 「cố gắng để không bị」 stress."
      }
    ]
  },

];
