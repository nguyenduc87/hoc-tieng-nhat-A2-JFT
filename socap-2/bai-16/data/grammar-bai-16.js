export const grammarBai3 = [
  {
    id: "summary",
    tab: "Tóm tắt",
    title: "Bài 16 – Dù động đất xảy ra cũng đừng cuống.",
    summaryList: [
      {
        label: "① V (thể mệnh lệnh) / V-るな (thể mệnh lệnh cấm chỉ)",
        example: "急【いそ】げ。こっちに集【あつ】ま「れ」。 / 走【はし】る「な」。",
        vi: "Nhanh lên! Tập trung lại bên này! / Không được chạy!"
      },
      {
        label: "② V-ないようにしてください",
        example: "できるだけ煙【けむり】を吸【す】わ「ないようにしてください」。",
        vi: "Hãy 「cố gắng không」 hít phải khói nhiều nhất có thể."
      },
      {
        label: "③ V-(られ)なくなります",
        example: "ドアが開【あ】かなくなると、外【そと】に逃【に】げ「られなくなります」。",
        vi: "Nếu cửa không mở được thì sẽ 「không thể」 chạy thoát ra ngoài được."
      },
      {
        label: "④ S ても、～",
        example: "大【おお】きな地震【じしん】が来【き】「ても」、あわてて動【うご】かないでください。",
        vi: "「Cho dù」 có động đất lớn xảy ra, xin cũng đừng luống cuống di chuyển."
      },
      {
        label: "⑤ V(thể thông thường) かどうか、～",
        example: "店【みせ】が開【ひら】いている「かどうか」、わからないけど…。",
        vi: "Tôi không biết là cửa hàng 「có đang mở cửa hay không nữa...」"
      }
    ]
  },

  {
    id: "1",
    tab: "Mẫu 1",
    title: "① V (thể mệnh lệnh) / V-るな (thể mệnh lệnh cấm chỉ)",
    usage: [
      "Khi đưa ra chỉ dẫn hay 「ra lệnh làm」 một việc gì đó thì sử dụng 「thể mệnh lệnh」 của động từ, ví dụ 急げ (nhanh lên).",
      "Khi đưa ra chỉ dẫn hay 「ra lệnh không được làm」 việc gì đó thì sử dụng thể mệnh lệnh 「cấm chỉ」 bằng cách thêm な vào sau thể từ điển của động từ, ví dụ 走るな (không được chạy).",
      "「Thể て」 của động từ 「hay V-ないで」 cũng được dùng để đưa 「ra chỉ dẫn」, ví dụ 走って (chạy đi), 来ないで (đừng đến). Tuy nhiên, khi sử dụng thể mệnh lệnh thì cách nói sẽ mạnh hơn.",
      "Thể mệnh lệnh cũng được sử dụng khi 「cổ vũ trong thể thao」, ví dụ 行け! (Tiến lên!), がんばれ! (Cố lên!), 負けるな! (Không được thua!)."
    ],
    structure: "Động từ thể mệnh lệnh (V命令形) / Động từ thể từ điển + な (V-るな)",
    structureImg: [
      "images/reading/16-01.png"
    ],
    notes: {
      points: [
        "Cách nói này mang sắc thái vô cùng mạnh mẽ, thường dùng trong trường hợp khẩn cấp (như thiên tai, hỏa hoạn), phân cấp thứ bậc rõ rệt hoặc khi cổ vũ thể thao cuồng nhiệt."
      ],
      examples: [
        {
          jp: "急【いそ】げ。こっちに集【あつ】ま「れ」。",
          vi: "Nhanh lên. Tập trung ở đây."
        },
        {
          jp: "走【はし】る「な」。",
          vi: "Không được chạy."
        },
        {
          jp: "行け！ / がんばれ！ / 負【ま】ける「な」！",
          vi: "Tiến lên! / Cố lên! / Không được thua!"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "揺【ゆ】れが大きいぞ！机の下に隠【かく】れろ！",
        vi: "Rung lắc mạnh lắm đấy! Nấp dưới gầm bàn mau!"
      },
      {
        speaker: "B",
        jp: "はい！あ、火事【かじ】だ！あっちのドアから逃【に】げろ！",
        vi: "Vâng! Ơ, hỏa hoạn rồi! Chạy thoát từ cửa đằng kia mau!"
      },
      {
        speaker: "A",
        jp: "エレベーターを使うな！階段【かいだん】を使【つか】え！",
        vi: "Không được dùng thang máy! Dùng cầu thang bộ đi!"
      }
    ]
  },

  {
    id: "2",
    tab: "Mẫu 2",
    title: "② V-ないようにしてください",
    usage: [
      "V-ないようにしてください là cách nói dùng để yêu cầu người khác 「cố gắng không làm」 việc gì đó.",
      "Trong ví dụ trên, cấu trúc này được sử dụng để truyền đạt những điều cần chú ý khi diễn tập phòng chống thiên tai."
    ],
    structure: "Động từ thể ない (V-ない) + ようにしてください",
    notes: {
      points: [
        "Trong bài 16 Sơ cấp 1, chúng ta đã học cấu trúc V-ないようにしています diễn tả cố gắng không làm một việc nào đó, ví dụ 食べすぎないようにしています (Tôi cố gắng không ăn nhiều).",
        "「V-ないようにしてください」 là cách nói khi bạn yêu cầu hoặc nhờ vả đối phương cố gắng hết sức để không làm như vậy (mang tính nỗ lực, thực hiện thói quen hoặc hành vi phòng ngừa). Ở đây, cấu trúc được dùng khi muốn truyền đạt các hạng mục chú ý trong lúc diễn tập phòng chống thiên tai."
      ],
      examples: [
        {
          jp: "できるだけ煙【けむり】を吸【す】わないようにしてください。",
          vi: "Hãy cố gắng hết sức để không hít khói."
        },
        {
          jp: "逃【に】げるときに、あわてて転【ころ】ばないようにしてください。",
          vi: "Khi sơ tán, hãy chú ý đừng luống cuống để bị ngã."
        },
        {
          jp: "夜【よる】は、1人【ひとり】で外【そと】に出【で】ないようにしてください。",
          vi: "Đừng ra ngoài một mình vào buổi tối."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "避難【ひなん】するときは、荷物【にもつ】を持【も】ち出【だ】さ「ないようにしてください」。",
        vi: "Khi sơ tán, xin vui lòng cố gắng đừng mang theo hành lý ra ngoài."
      },
      {
        speaker: "B",
        jp: "わかりました。貴重品【きちょうひん】だけ持って行きます。",
        vi: "Vâng tôi hiểu rồi. Tôi sẽ chỉ mang theo đồ quý giá thôi."
      },
      {
        speaker: "A",
        jp: "あと、絶対【ぜったい】にエレベーターは使【つか】わ「ないようにしてください」ね。",
        vi: "Với cả, tuyệt đối hãy cố gắng đừng sử dụng thang máy nhé."
      }
    ]
  },

  {
    id: "3",
    tab: "Mẫu 3",
    title: "③ V-(られ)なくなります",
    usage: [
      "Cấu trúc này dùng để thể hiện sự thay đổi trạng thái sang một trạng thái khác (「trở nên không thể làm gì」 hoặc một 「hiện tượng không còn xảy ra nữa」).",
      "Khi kết hợp với dạng 「phủ định của thể khả năng」 của động từ như 逃げ「られなくなります」 (không thể thoát ra ngoài) thì sẽ thể hiện trạng thái 「không thể làm việc nào đó」."
    ],
    structure: "Động từ thể phủ định (V-ない) -> Biến đổi 「ない」 thành 「なく」 + なります",
    notes: {
      points: [
        "Trong bài 3 Sơ cấp 1, chúng ta đã học danh từ, tính từ kết hợp với なります biểu thị sự thay đổi như 休みになります (Trường sẽ bước vào kỳ nghỉ), 暖かくなります (Trời ấm lên). Bài này đưa ra ví dụ kết hợp với dạng phủ định của động từ để thể hiện sự thay đổi.",
        "Khi kết hợp với dạng phủ định của tự động từ, ví dụ かぎが閉まらない (cửa không khóa được), 機械が動かない (máy không chạy), 荷物が入らない (hành lý không vừa), v.v. thì sẽ thể hiện sự thay đổi sang trạng thái khác.",
        "Biến đổi ない thể hiện phủ định thành なく rồi thêm なります。",
        "Động từ thể khả năng phủ định khi kết hợp với cấu trúc này sẽ mang ý nghĩa: 「một việc trước đây có thể làm, nay do điều kiện khách quan tác động mà biến đổi thành không thể làm được nữa.」"
      ],
      examples: [
        {
          jp: "ドアが開【あ】かなくなると、外【そと】に「逃【に】げられなくなります。",
          vi: "Nếu cửa không mở thì sẽ 「không thể thoát ra ngoài」."
        },
        {
          jp: "地震【じしん】の影響【えいきょう】で、スーパーに水【みず】や食べ物【たべもの】が「届【とど】かなくなりました」。",
          vi: "Do ảnh hưởng của động đất, nước và thức ăn 「đã không được giao đến」 siêu thị nữa."
        },
        {
          jp: "台風【たいふう】が近【ちか】づいて、雨風【あめかぜ】が強【つよ】くなると、電車【でんしゃ】が「利用【りよう】できなくなります」。",
          vi: "Khi bão đến gần, nếu mưa to gió lớn thì sẽ 「không sử dụng được」 tàu điện nữa."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "大雪【おおゆき】が降【ふ】ると、どうなりますか？",
        vi: "Nếu tuyết rơi dày thì sẽ thế nào ạ?"
      },
      {
        speaker: "B",
        jp: "道路【どうろ】が使【つか】えなくなって、バスが「走【はし】らなくなります」よ。",
        vi: "Đường sá sẽ không dùng được nữa và xe buýt cũng 「sẽ không chạy nữa」 đâu."
      },
      {
        speaker: "A",
        jp: "停電【ていでん】したら、携帯【けいたい】の充電【じゅうでん】も「できなくなります」ね。",
        vi: "Nếu mất điện thì cũng sẽ không sạc được điện thoại nữa nhỉ."
      }
    ]
  },

  {
    id: "4",
    tab: "Mẫu 4",
    title: "④ S ても、～",
    usage: [
      "～ても được dùng với ý nghĩa ngay cả khi sự việc nào đó xảy ra / dù có rơi vào trạng thái nào đó (điều kiện giả định ngược).",
      "Thường dùng cùng với もし (nếu), 万が一 (ngộ nhỡ)."
    ],
    structure: "Động từ thể テ + も (V-ても) <br> Tính từ đuôi イ -> くて + も <br> Danh từ & Tính từ đuôi ナ + でも",
    notes: {
      points: [
        "Nếu là động từ thì thêm も vào sau thể テ.",
        "Tính từ đuôi イ biến đổi thành ～くても, ví dụ 寒【さむ】くても (cho dù trời lạnh).",
        "Danh từ và tính từ đuôi ナ biến đổi thành ～でも, ví dụ 台風【たいふう】でも (cho dù bão), 大変【たいへん】でも (cho dù vất vả)."
      ],
      examples: [
        {
          jp: "大【おお】きな地震【じしん】が来「ても」、あわてて動【うご】かないでください。",
          vi: "Cho dù động đất lớn xảy ra thì cũng đừng di chuyển luống cuống."
        },
        {
          jp: "1週間分【いっしゅうかんぶん】の水と食料【しょくりょう】がありますから、断水【だんすい】し「ても」、しばらくはだいじょうぶです。",
          vi: "Vì có đủ nước và thức ăn trong 1 tuần nên dù bị cắt nước thì cũng không sao."
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "外が暗【くら】くても、避難【ひなん】しなければなりませんか？",
        vi: "Cho dù bên ngoài trời tối thì vẫn phải đi sơ tán ạ?"
      },
      {
        speaker: "B",
        jp: "ええ、危【あぶ】なく「ても」、早めに安全【あんぜん】な場所へ行ってください。",
        vi: "Vâng, dù có nguy hiểm thì cũng hãy đi đến nơi an toàn càng sớm càng tốt."
      },
      {
        speaker: "A",
        jp: "もし台風【たいふう】「でも」、防災訓練【ぼうさいくんれん】はありますか？",
        vi: "Nếu chẳng may có bão thì vẫn có buổi diễn tập phòng chống thiên tai chứ ạ?"
      }
    ]
  },

  {
    id: "5",
    tab: "Tổng hợp ～たら, ～ても",
    title: "Tổng hợp các mẫu câu thể hiện điều kiện: ～たら and ～ても",
    usage: [
      "～たら là cách nói lấy một sự việc đã xảy ra làm tiền đề. Có 2 trường hợp: <br> ① biểu thị giả định (điều kiện giả định) và <br> ② xác định trước sự việc sẽ xảy ra (điều kiện xác định).",
      "～ても là cách nói biểu thị rằng 「cho dù sự việc có xảy ra」 thì điều ở 「vế sau vẫn hình thành」 (điều kiện giả định ngược)."
    ],
    structure: "・[～たら]: Động từ thể た -> ⁮たら <br> Tính từ đuôi イ -> かったら <br> Danh từ & Tính từ đuôi ナ -> だったら <br><br>・[～ても]: Động từ thể テ + も <br> Tính từ đuôi イ -> くても <br> Danh từ & Tính từ đuôi ナ + でも",
    notes: {
      points: [
        "「～たら」 trường hợp ① (Giả định): Dùng khi giả định một tình huống chưa xảy ra ở hiện tại hoặc tương lai.",
        "「～たら」 trường hợp ② (Xác định): Dùng khi sự việc chắc chắn sẽ xảy ra trong tương lai, sau khi sự việc đó hoàn thành thì hành động ở vế sau mới được thực hiện.",
        "「～ても」 (Giả định ngược): 「Vế sau mang kết quả trái ngược」 hoàn toàn so với suy đoán thông thường từ điều kiện ở vế trước."
      ],
      examples: [
        {
          jp: "① 雨が降【ふ】ったら、イベントは中止【ちゅうし】になります。（仮定条件【かていじょうけん】）",
          vi: "Nếu trời mưa thì sự kiện sẽ bị hủy. (điều kiện giả định)"
        },
        {
          jp: "② イベントが終わわったら、パーティーがあります。（確定条件【かていじょうけん】）",
          vi: "Sau khi sự kiện kết thúc sẽ có bữa tiệc. (điều kiện xác định)"
        },
        {
          jp: "雨が降【ふ】っても、イベントは開催【かいさい】されます。（逆接【ぎゃくせつ】の仮定条件【かていじょうけん】）",
          vi: "Cho dù trời mưa, sự kiện vẫn được tổ chức. (điều kiện giả định ngược)"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "地震【じしん】が起【お】こったら、まず何をしますか？",
        vi: "Nếu động đất xảy ra, việc đầu tiên bạn làm là gì?"
      },
      {
        speaker: "B",
        jp: "頭【あたま】を保護【ほご】します。揺【ゆ】れが激【はげ】しくても、あわてて外【そと】へ出【だ】ないようにします。",
        vi: "Tôi sẽ bảo vệ đầu. Cho dù rung lắc dữ dội, tôi cũng cố gắng không hoảng loạn chạy ra ngoài."
      },
      {
        speaker: "A",
        jp: "避難所【ひなんじょ】に着【つ】いたら、係員【かかりいん】に名前を伝【つた】えてくださいね。",
        vi: "Sau khi đến nơi lánh nạn, hãy báo tên của mình cho người phụ trách nhé."
      }
    ]
  },
  {
    id: "6",
    tab: "Mẫu 5",
    title: "⑤ V (thể thông thường 普通形) かどうか、～",
    usage: [
      "～かどうか thể hiện ý 「có hay không」. Câu ví dụ 店が開いている「かどうか」 có nghĩa là 'cửa hàng 「mở cửa hay không mở cửa」'.",
      "Ở bài này, chúng ta sẽ học cấu trúc không sử dụng từ nghi vấn (khác với cấu trúc 'từ nghi vấn + ～か' đã học ở bài 8).",
      "Ngoài cách diễn đạt bản thân không biết như わきまりません trong ví dụ, có thể dùng 知っていますか？ (Bạn có biết không?) để hỏi người khác, hoặc 教えてください (Hãy chỉ cho tôi) để yêu cầu."
    ],
    structure: "Động từ thể thông thường (V-普通形) + かどうか、～",
    notes: {
      points: [
        "「～かどうか」 là cách nói thể hiện việc 'có chuyện đó hay là không phải như vậy'. Ví dụ 「店が開いているかどうか」 mang ý nghĩa là 「お店が開いているか、開いていないか」 (cửa hàng có mở hay không mở).",
        "Trong bài 8, chúng ta đã học cấu trúc dùng từ nghi vấn như 「フリーマーケットは、何時からか、わかりますか？」. Còn trong bài này, chúng ta học hình thức không sử dụng từ nghi vấn.",
        "Bên cạnh việc tự nói về việc bản thân không biết (わかりません), cấu trúc này cũng dùng khi hỏi đối phương (知っていますか？) hoặc khi đưa ra yêu cầu, nhờ vả (教えてください)."
      ],
      examples: [
        {
          jp: "店が開【あ】いている「かどうか」、わからないけど…。",
          vi: "Tôi không biết liệu cửa hàng 「có mở cửa hay không nữa...」"
        },
        {
          jp: "今、スーパーに行【い】っても、水が売【う】ってる「かどうか」、わかりません。",
          vi: "Tôi không biết bây giờ đi siêu thị thì 「có mua được nước hay không」."
        },
        {
          jp: "明日、給水車【きゅうすいしゃ】が来る「かどうか」、知っていますか？",
          vi: "Bạn có biết liệu ngày mai xe cấp nước 「có đến hay không?」"
        }
      ]
    },
    dialogue: [
      {
        speaker: "A",
        jp: "すみません、この近くの避難所【ひなんじょ】が開【あ】いているかどうか、わかりますか？",
        vi: "Xin lỗi, anh/chị có biết liệu nơi lánh nạn ở gần đây có đang mở cửa hay không ạ?"
      },
      {
        speaker: "B",
        jp: "さあ、ちょっとわかりませんね。スマホで調【しら】べてみましょうか。",
        vi: "À, tôi cũng không rõ nữa. Để tôi thử tra bằng điện thoại xem sao nhé."
      },
      {
        speaker: "A",
        jp: "ありがとうございます。あと、電気が通【とお】っているかどうか、教えてください。",
        vi: "Cảm ơn anh/chị. Với lại, xin hãy chỉ cho tôi biết liệu đã có điện lại hay chưa với ạ."
      }
    ]
  },

];
