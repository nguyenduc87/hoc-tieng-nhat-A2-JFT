export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 7 – Nếu trời mưa thì sẽ tổ chức tại hội trường.",
    summaryList: [
      {
        label: "① ～たら、～",
        example: "雨が「降ったら」、盆踊【ぼんおど】りは日曜日にやるよ。<br> 盆踊【ぼんおど】りが「終わったら」、いっしょに居酒屋【いざかや】に行きましょう。",
        vi: "Nếu trời mưa thì điệu múa Bon sẽ được tổ chức vào Chủ Nhật. <br> Sau khi điệu múa Bon kết thúc, chúng ta cùng nhau đi quán nhậu nhé."
      },
      {
        label: "② V-(ら)れます ＜Bị động①＞",
        example: "７月14日、『ひかりホール』において、コンサートが「開催【かいさい】されます」。",
        vi: "Vào ngày 14 tháng 7, một buổi hòa nhạc sẽ được tổ chức tại 「Hikari Hall」."
      },
      {
        label: "③ V-(られ)ます ＜Thể khả năng②＞",
        example: "盆踊【ぼんおど】りは簡単【かんたん】だから、だれでも「踊【おど】れます」よ。",
        vi: "Vì điệu múa Bon đơn giản nên ai cũng có thể múa được đấy."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① ～たら、～",
    usage: [
      "Có 2 trường hợp như sau:",
      "Trường hợp 「không chắc chắn」 sự việc đó sẽ xảy ra. Được dùng để biểu thị giả định như 雨が降ったら. Có thể 「thêm もし vào đầu câu」 (điều kiện giả định).",
      "Trường hợp 「xác định trước」 sự việc đó sẽ xảy ra. Trong ví dụ, người nói sử dụng để nói họ 「sẽ làm gì sau khi múa Bon-odori」 (điều kiện xác định)."
    ],
    structure: "~Vた+ら、~",
    structureImg: [
      "./images/grammar/tara.png"
    ],
    notes: {
      points: [
        "~たら được chia bằng cách thêm ら vào sau thể quá khứ thông thường của danh từ, tính từ đuôi イ, tính từ đuôi ナ, động từ."
      ],
      examples: [
        {
          jp: "雨が「降ったら」、盆踊りは日曜日にやるよ。",
          vi: "Nếu trời mưa, múa Bon-odori sẽ được tổ chức vào Chủ nhật."
        },
        {
          jp: "盆踊りが「終わったら」、いっしょに居酒屋に行きましょう。",
          vi: "Sau khi múa Bon-odori, hãy cùng nhau đến quán rượu."
        },
        {
          jp: "もし、わからないことが「あったら」、いつでも質問【しつもん】してください。",
          vi: "Nếu có gì không hiểu thì hãy hỏi tôi bất cứ lúc nào."
        },
        {
          jp: "６時に「なったら」、仕事を終わりにしてください。",
          vi: "Đến 6h thì hãy kết thúc công việc."
        },
        {
          jp: "「暇【ひま】だったら」、ちょっと手伝ってください。",
          vi: "Nếu bạn rảnh thì hãy giúp tôi một chút."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "この資料の作り方、ちょっと難しいですね。",
        vi: "Cách làm tài liệu này hơi khó nhỉ."
      },
      {
        speaker: "B",
        jp: "もし、わからないことが「あったら」、いつでも質問してください。私も「暇だったら」、手伝いますよ。",
        vi: "Nếu có gì không hiểu thì cứ hỏi tôi bất cứ lúc nào nhé. Nếu tôi rảnh, tôi cũng sẽ phụ một tay."
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② V-(ら)れます ＜Bị động 受身①＞",
    usage: [
      "sự kiện 「được tổ chức」 được lấy làm chủ ngữ để truyền đạt thông tin chứ không phải người tổ chức (chủ thể hành động). Trong trường hợp này, thể bị động của động từ được sử dụng.",
      "①来週、[ひかりホールで]、（だれかが）コンサート「を開催します」 (Câu gốc) <br> (Ai đó) 「sẽ tổ chức」 buổi hòa nhạc ở hội trường Hikari vào tuần sau. <br> ②来週、[ひかりホールで]、コンサート「が開催まされす」<br> Buổi hòa nhạc 「được tổ chức」 tại hội trường Hikari.",
      "Chủ ngữ của câu ① là người tổ chức hòa nhạc. Ngược lại, chủ ngữ của câu ② là コンサート (buổi hòa nhạc). <br> 開催【かいさい】されます (される) (được tổ chức) 「là thể bị động」 của động từ 開催【かいさい】します (する) (tổ chức).",
      "Trong bài này, mục tiêu là nghe hiểu các từ thường được dùng để thông báo sự kiện như: <br>「開催【かいさい】される」 (được tổ chức), 「行【おこな】われる」 (được thực hiện), 「開【ひら】かれる」 (được tổ chức).",
      "Những từ này được sử dụng trong các thông báo, phát thanh trang trọng. <br> Còn trong hội thoại hàng ngày, chúng ta sẽ nói: <br> 7月14日に、ひかりホールで、コンサートがあります <br> (Sẽ có buổi hòa nhạc ở hội trường Hikari vào ngày 14 tháng 7)."
    ],
    structure: "V-(ら)れます",
    structureImg: [
      "./images/grammar/bi-dong.png"
    ],
    notes: {
      points: [
        "Trợ từ を -> が",
      ],
      examples: [
        {
          jp: "明日【あした】、18時【じ】から、海岸【かいがん】で、花火大会【はなびたいかい】が「行【おこな】われます」。",
          vi: "Lễ hội pháo hoa sẽ được tổ chức ở bãi biển từ 18h ngày mai."
        },
        {
          jp: "月【つき】に1回【いっかい】、公園でフリーマーケットが「開【ひら】かれます」。",
          vi: "Chợ trời được tổ chức ở công viên mỗi tháng 1 lần."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "明日、18時から、海岸【かいがん】で、花火大会【はなびたいかい】が「行【おこな】われます」よ。",
        vi: "Từ 18h ngày mai, lễ hội pháo hoa sẽ được tổ chức ở bãi biển đấy."
      },
      {
        speaker: "B",
        jp: "そうなんですか！あそこは月【つき】に1回【いっかい】、公園でフリーマーケットも「開【ひら】かれます」よね。",
        vi: "Vậy à bạn! Ở đó mỗi tháng 1 lần cũng có chợ trời được tổ chức ở công viên nữa nhỉ."
      }
    ]
  },

  {
  id: "3",
  tab: "Mẫu 3",
  title: "② V-(られ)ます ＜Thể khả năng 可能形②＞",
  usage: [
    "Đây là cách nói thể hiện năng lực.",
    "Chúng ta đã học cách chia thể khả năng ở bài 5. Có 2 cách dùng thể khả năng: <br> ① thể hiện năng lực của chủ thể, <br> ② thể hiện khả năng thực hiện hành động trong hoàn cảnh được đưa ra.",
    "Trong bài này, chúng ta học cách dùng ①.",
    "Chúng ta đã học cách dùng ② trong bài 5: <br> 北海道【ほっかいどう】では、新鮮【しんせん】なカニとかウニとか「食べられます」よ <br> (「Có thể ăn」 cua và cầu gai tươi ở Hokkaido đấy).",
  ],
  structure: "V-(られ)ます",
  structureImg: [
    "./images/grammar/kha-nang.png"
  ],
  notes: {
    points: [
      "Thể hiện năng lực cá nhân của chủ thể"
    ],
    examples: [
      {
        jp: "盆踊【ぼんおど】りは簡単【かんたん】だから、だれでも「踊【おど】れます」よ。",
        vi: "Múa Bon-odori đơn giản nên ai cũng 「có thể múa」 được đấy."
      }
    ]
  },
  dialogue: [
    {
      speaker: "A",
      jp: "何か楽器【がっき】ができますか？",
      vi: "Bạn có thể chơi nhạc cụ nào không?"
    },
    {
      speaker: "B",
      jp: "ギターが「弾【ひ】けます」。",
      vi: "Tôi 「có thể chơi」 ghi-ta."
    }
  ]
},

];
