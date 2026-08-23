export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 13 – Nhiều tài liệu được trưng bày.",
    summaryList: [
      {
        label: "① V-(ら)れます <Bị động ④>",
        example: "この建物は、2年前に「建【た】てられました」。",
        vi: "Tòa nhà này đã được xây dựng từ 2 năm trước."
      },
      {
        label: "② V-てあります",
        example: "昔【むかし】、使われた道具【どうぐ】とか、いろいろな資料【しりょう】を展示【てんじ】「してあります」。",
        vi: "Những dụng cụ được sử dụng ngày xưa và nhiều tài liệu khác nhau đang được trưng bày."
      },
      {
        label: "③ N1 だけじゃなくて、N2 も～",
        example: "本「だけじゃなくて」、CD とか、DVD 「も」ただで借りられます。",
        vi: "Không chỉ sách mà cả đĩa CD hay DVD cũng được mượn miễn phí."
      },
      {
        label: "④ N なら、～",
        example: "返却【へんきゃく】は、市内【しない】の図書館【としょかん】「なら」、どこに返【かえ】してもいいです。",
        vi: "Về việc trả sách, nếu là thư viện trong thành phố thì trả ở đâu cũng được."
      },
      {
        label: "⑤ 【từ nghi vấn】 V-ても、～",
        example: "返却【へんきゃく】は、市内【しない】の図書館【としょかん】なら、どこに「返しても」いいです。",
        vi: "Về việc trả sách, nếu là thư viện trong thành phố thì trả ở đâu cũng được."
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① V-(ら)れます <Bị động ④>",
    usage: [
      "Đây là cách nói sử dụng khi nói về những tòa nhà, tác phẩm, v.v. được xây hoặc được tạo ra. Cách nói này dùng thể bị động của động từ."
    ],
    structure: "Động từ thể bị động V-(ら)れます",
    notes: {
      points: [
        "Trong trường hợp nói rõ chủ thể của hành động là ai thì có thể nói Nによって。",
        "Động từ 建てます được chia về thể bị động thành 建てられる。"
      ],
      examples: [
        {
          jp: "「太陽【たいよう】の塔【とい】」は、1970年に岡本太郎【Okamoto Taro】「によって」「作られた」作品です。",
          vi: "“Tháp Mặt trời” là tác phẩm được tạo ra bởi Okamoto Taro vào năm 1970."
        },
        {
          jp: "この交流【こうりゅう】プラザは、市民講座【しみんこうざ】やボランティア教室などに「使われています」。",
          vi: "Trung tâm giao lưu này được dùng để tổ chức khóa học cho người dân và lớp học tình nguyện."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "この美【うつく】しい絵【え】はだれ「によって」「描【か】かれた」んですか？",
        vi: "Bức tranh đẹp này được vẽ bởi ai thế?"
      },
      {
        speaker: "B",
        jp: "100年前に有名な画家【がか】「によって描【か】かれました」。",
        vi: "Nó được vẽ bởi một họa sĩ nổi tiếng từ 100 năm trước."
      },
      {
        speaker: "A",
        jp: "日本の伝統的【でんとうてき】な道具【どうぐ】は今でも「使われています」か？",
        vi: "Các dụng cụ truyền thống của Nhật Bản đến giờ vẫn được sử dụng chứ?"
      }
    ]
  },

  {
    id: "2",
    tab: "Tổng hợp câu bị động",
    title: "Tổng hợp câu bị động 受身文のまとめ",
    usage: [
      "Câu bị động gồm câu có chủ ngữ là sự vật, sự việc và câu có chủ ngữ là người. Trong giáo trình này, chúng ta đã học các câu bị động như sau."
    ],
    structure: "こと・ものを主語にした受身文 / 人を主語にした受身文",
    notes: {
      points: [
        "Câu bị động có chủ ngữ là sự vật, sự việc (こと・ものを主語にした受身文)",
        "Câu bị động có chủ ngữ là người (人を主語にした受身文)"
      ],
      examples: [
        {
          jp: "コンサートが開催【かいさい】されます。",
          vi: "Buổi hòa nhạc được tổ chức."
        },
        {
          jp: "この建物は２年前に建てられました。",
          vi: "Tòa nhà này được xây 2 năm trước."
        },
        {
          jp: "（私は）お店の人に、注意されました。",
          vi: "Tôi bị chủ của hàng nhắc nhở."
        },
        {
          jp: "（私は）自転車を盗【ぬす】まれました。",
          vi: "Tôi bị lấy trộm xe đạp."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "来週のコンサートはどこで開催【かいさい】されますか？",
        vi: "Buổi hòa nhạc tuần tới được tổ chức ở đâu vậy?"
      },
      {
        speaker: "B",
        jp: "駅前の新しい市民ホールで開催【かいさい】されますよ。",
        vi: "Được tổ chức ở hội trường người dân mới trước nhà ga đấy."
      },
      {
        speaker: "A",
        jp: "昨日、駐輪場【ちゅうりんじょう】で自転車を盗【ぬす】まれちゃったんだ。",
        vi: "Hôm qua tao bị lấy trộm xe đạp ở bãi đỗ xe mất rồi."
      },
      {
        speaker: "B",
        jp: "えっ, 大丈夫？警察【けいさつ】に連絡した？",
        vi: "Hả, có sao không? Đã báo cảnh sát chưa?"
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 2",
    title: "② V-てあります",
    usage: [
      "Đây là cách nói thể hiện rằng trạng thái đang lưu lại ở hiện tại là kết quả của hành động do ai đó đã làm một cách có mục đích."
    ],
    structure: "Tha động từ thể て (V-て) + あります",
    notes: {
      points: [
        "Cấu trúc này kết hợp với thể て của động từ. Những động từ được sử dụng ở đây là tha động từ thể hiện ý chí của người như 準備する (chuẩn bị), 飾る (trang trí), v.v..",
        "Khi nói về trạng thái nào đó đã được chuẩn bị sẵn sàng, chúng ta sử dụng cấu trúc NをV-てある。 Ngược lại, khi nói về trạng thái có thể thấy bằng mắt thường thì nói NがV-てある。"
      ],
      examples: [
        {
          jp: "昔、使われた道具とか、いろいろな資料を展示【てんじ】「してあります」。",
          vi: "Những dụng cụ được sử dụng thời xưa và nhiều loại tài liệu được trưng bày."
        },
        {
          jp: "入口【じんこう】の壁【かべ】には、住民【じゅうみん】の作品【さくひん】が飾【かざ】ってあります。",
          vi: "Trên tường ở cửa vào có treo tác phẩm của người dân."
        },
        {
          jp: "多言語【たげんご】のパンフレットを用意【ようい】してあります。",
          vi: "Chúng tôi chuẩn bị sách giới thiệu bằng nhiều thứ tiếng."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "会議【かいぎ】の資料、もう準備してある？",
        vi: "Tài liệu cuộc họp đã chuẩn bị sẵn chưa mày?"
      },
      {
        speaker: "B",
        jp: "うん, テーブルの上に置いてあるよ。",
        vi: "Rồi, tao để sẵn trên bàn rồi đấy."
      },
      {
        speaker: "A",
        jp: "ホワイトボードに何か書いてあるね。",
        vi: "Trên bảng trắng có viết cái gì sẵn kìa."
      },
      {
        speaker: "B",
        jp: "あ、次の予定が書いてあるんだよ。",
        vi: "À, lịch trình tiếp theo được viết sẵn ở đấy đó."
      }
    ]
  },

  {
    id: "4",
    tab: "V-ている và V-てある",
    title: "Cách nói thể hiện trạng thái: V-ている và V-てある",
    usage: [
      "V-ている và V-てある đều có thể sử dụng để thể hiện trạng thái.",
      "“Tha động từ + てある” là cách nói thể hiện rằng trạng thái đang lưu lại ở hiện tại là kết quả của hành động do ai đó đã làm một cách có mục đích. Mặt khác, “tự động từ + ている” không biểu thị ý chí của người nói mà chỉ thể hiện trạng thái đơn thuần."
    ],
    structure: "Tự động từ + ている / Tha động từ + てある",
    notes: {
      points: [
        "“Tự động từ + ている” biểu thị trạng thái đơn thuần, không thể hiện ý chí của con người.",
        "“Tha động từ + てある” là cách nói diễn tả kết quả của một hành động mà ai đó đã thực hiện với mục đích cụ thể, và trạng thái đó vẫn đang lưu lại ở hiện tại."
      ],
      examples: [
        {
          jp: "A：電気がついていますよ。 B：この部屋は一日中、電気がつけてあります。",
          vi: "A: Điện đang bật nhỉ. B: Điện phòng này được bật cả ngày."
        },
        {
          jp: "(ドアが) 開いている",
          vi: "Cửa đang mở."
        },
        {
          jp: "(ドアが) 開けてある",
          vi: "Cửa đang được mở."
        },
        {
          jp: "(ドアが) 閉まっている",
          vi: "Cửa đang đóng."
        },
        {
          jp: "(ドアが) 閉めてある",
          vi: "Cửa đang được đóng."
        },
        {
          jp: "(電気が) ついている",
          vi: "Điện đang bật."
        },
        {
          jp: "(電気が) つけてある",
          vi: "Điện đang được bật."
        },
        {
          jp: "(電気が) 消えている",
          vi: "Điện đang tắt."
        },
        {
          jp: "(電気が) 消してある",
          vi: "Điện đang được tắt."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "あ、エアコンが消【き】えてるね。",
        vi: "Ơ, điều hòa đang tắt kìa."
      },
      {
        speaker: "B",
        jp: "あえて消【け】してあるんだよ。今だれもいないからね。",
        vi: "Người ta cố tình tắt sẵn đấy. Vì bây giờ không có ai ở đây mà."
      },
      {
        speaker: "A",
        jp: "窓【まど】が閉【し】まってるけど、開【ひら】ける？",
        vi: "Cửa sổ đang đóng nè, mở ra không?"
      },
      {
        speaker: "B",
        jp: "鍵【かぎ】が閉【し】めてあるから、開【ひら】けられないよ。",
        vi: "Khóa được chốt sẵn rồi nên không mở được đâu."
      }
    ]
  },

  {
    id: "5",
    tab: "Mẫu 3",
    title: "③ N1 だけじゃなくて、N2 も～",
    usage: [
      "Đây là cách nói sử dụng để nhấn mạnh rằng 「cả N1 lẫn N2 đều như vậy」.",
      "N1 và N2 đều như thế, đây là biểu hiện dùng khi muốn nhấn mạnh điều đó."
    ],
    structure: "Danh từ 1 (N1) + だけじゃなくて、 Danh từ 2 (N2) + も ～",
    notes: {
      points: [
        "Trong bối cảnh trang trọng, cấu trúc này còn có cách nói khác là 「N1 だけではなくて」 hoặc 「N1 だけでなく」.",
        "Thường dùng để liệt kê và nhấn mạnh bổ sung thêm một đối tượng tương tự ở vế sau."
      ],
      examples: [
        {
          jp: "本だけじゃなくて、CD とか、DVD もただで借りられます。",
          vi: "Bạn có thể mượn không chỉ sách mà cả CD và DVD miễn phí."
        },
        {
          jp: "このフリースペースは、子どもだけじゃなくて、大人も利用できます。",
          vi: "Không chỉ trẻ em mà cả người lớn cũng có thể sử dụng không gian tự do này."
        },
        {
          jp: "交流プラザは、平日だけでなく、休みの日も開いています。",
          vi: "Trung tâm giao lưu mở cửa không chỉ ngày thường mà cả ngày nghỉ."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "このジム、土曜日だけじゃなくて日曜日もやってる？",
        vi: "Phòng gym này không chỉ thứ Bảy mà Chủ nhật cũng mở cửa chứ?"
      },
      {
        speaker: "B",
        jp: "うん、週末だけじゃなくて祝日【しゅくじつ】も開いてるよ。",
        vi: "Ừ, không chỉ cuối tuần mà cả ngày lễ cũng mở cửa luôn."
      },
      {
        speaker: "A",
        jp: "日本語だけじゃなくて, 他の外国語のパンフレットもある？",
        vi: "Có sách giới thiệu không chỉ bằng tiếng Nhật mà cả tiếng nước ngoài khác nữa không?"
      },
      {
        speaker: "B",
        jp: "英語だけじゃなくて、ベトナム語のも置いてあるよ。",
        vi: "Không chỉ tiếng Anh đâu, có để sẵn cả bản tiếng Việt nữa đấy."
      }
    ]
  },

  {
    id: "6",
    tab: "Mẫu 4",
    title: "④ N なら、～",
    usage: [
      "Chúng ta đã học ở bài 4 cách sử dụng của なら để 「trích lại lời đối phương và đưa ra lời khuyên hoặc nêu ý kiến」.",
      "なら còn có thể được sử dụng để thể hiện điều kiện giả định. Trong ví dụ trên, cấu trúc này được dùng với ý nghĩa 'nếu là các thư viện trong thành phố'."
    ],
    structure: "Danh từ (N) + なら、～",
    notes: {
      points: [
        "Bài này đưa ra ví dụ なら kết hợp với danh từ, tuy nhiên なら cũng có thể kết hợp với động từ và tính từ.",
        "Nếu là động từ và tính từ đuôi い thì dùng thể thông thường.",
        "Nếu là tính từ đuôi な thì bỏ な như 「大変なら」。"
      ],
      examples: [
        {
          jp: "返却【へんきゃく】は、市内の図書館【としょかん】「なら」、どこに返【かえ】してもいいです。",
          vi: "Bạn có thể trả sách ở bất cứ thư viện nào trong thành phố."
        },
        {
          jp: "A：この近くにおすすめの店がありますか？ B：この近くなら、「平兵衛【Heibe】」がおすすめです。",
          vi: "A: Chị có gợi ý nhà hàng nào ở gần đây không? B: Nếu gần đây thì tôi gợi ý nhà hàng Heibe."
        },
        {
          jp: "市内にお住【す】まいの方【かた】、お勤【つと】めの方【かた】なら、だれでも図書館【としょかん】の利用者【りようしゃ】カードが作れますよ。",
          vi: "Bất cứ người nào sinh sống hoặc làm việc trong thành phố thì đều có thể làm thẻ thư viện."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "お腹【なか】が空【す】いたんだけど、どこかいい店ある？",
        vi: "Tao đói bụng quá, có quán nào ngon không nhỉ?"
      },
      {
        speaker: "B",
        jp: "ラーメンなら, 駅前の店が美味【おい】しいよ。",
        vi: "Nếu mà là mì ramen thì quán trước nhà ga ngon lắm đó."
      },
      {
        speaker: "A",
        jp: "明日、みんなでスポーツジムに行かない？",
        vi: "Mai mọi người cùng đi phòng gym không?"
      },
      {
        speaker: "B",
        jp: "明日はちょっと忙しいから、来週なら行けるよ。",
        vi: "Mai tao hơi bận, nếu là tuần sau thì đi được."
      }
    ]
  },

  {
  id: "7",
  tab: "Mẫu 5",
  title: "⑤ 【từ nghi vấn 疑問詞】 V-ても、～",
  usage: [
    "Đây là cách nói biểu thị rằng 「dù trong bất cứ trường hợp nào」 thì điều ở 「vế sau vẫn hình thành」.",
    "Trong ví dụ này, người nói nói rằng 「khi trả sách」 mượn ở thư viện thì 「có thể trả ở bất cứ thư viện nào trong thành phố」 cũng được."
  ],
  structure: "Từ nghi vấn (いつ/どこ/だれ/何) + Động từ thể て (V-て) + も、～",
  notes: {
    points: [
      "「も」 được thêm vào sau thể テ của động từ.",
      "Cấu trúc này được sử dụng cùng với từ nghi vấn như 何を食べても (ăn cái gì cũng), どこへ行っても (đi đâu cũng), だれがやっても (ai làm cũng), v.v.."
    ],
    examples: [
      {
        jp: "返却は、市内の図書館なら、どこに返し「ても」いいです。",
        vi: "Bạn có thể trả sách ở bất cứ thư viện nào trong thành phố."
      },
      {
        jp: "この図書館はいつ来「ても」、空いていて静かなので、よく利用しています。",
        vi: "Thư viện này lúc nào tôi đến cũng đều vắng và yên tĩnh nên tôi thường xuyên sử dụng."
      },
      {
        jp: "市バスは、どこから乗っ「ても」、どこで降り「ても」200円です。",
        vi: "Xe buýt thành phố thì dù có lên hay xuống ở đâu cũng đều có giá 200 yên."
      }
    ]
  },
  dialogue: [
    {
      speaker: "A",
      jp: "この料理、何を入れても美味【おいし】しくなるよ。",
      vi: "Món ăn này cho cái gì vào cũng ngon hết á."
    },
    {
      speaker: "B",
      jp: "本当？料理が苦手な私が作っても大丈夫かな？",
      vi: "Thật không? Người nấu ăn dở như tao làm liệu có ổn không nhỉ?"
    },
    {
      speaker: "A",
      jp: "うん、だれが作っても失敗しないから安心しなよ。",
      vi: "Ừ, ai làm cũng không hỏng được đâu nên cứ yên tâm đi."
    },
    {
      speaker: "B",
      jp: "じゃあ、いつ作ってもいいように材料を買っておくね。",
      vi: "Thế để tao mua sẵn nguyên liệu để lúc nào làm cũng được nhé."
    }
  ]
}


];
