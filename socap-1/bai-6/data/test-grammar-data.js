export const grammarList = [
    {
        id: 1,
        grammar: "Nはどこですか",
        leftContent: {
            image: "../images/grammar/post_office.png",
            text: "郵便局【ゆうびんきょく】",
        },
        question: "Cách hỏi đường nào là đúng?",
        options: [
            "郵便局はどこですか。",
            "郵便局をどこですか。",
            "郵便局にどこですか。",
            "郵便局がどこへですか。"
        ],
        correct: "郵便局はどこですか。",
        explanation: "Mẫu hỏi vị trí địa điểm cơ bản: 「Nはどこですか。」 → Bưu điện ở đâu?"
    },
    {
        id: 2,
        grammar: "Nはどう行ったらいいですか",
        leftContent: {
            image: "../images/grammar/hospital.png",
            text: "市民【しみん】病院",
        },
        question: "Cách hỏi đường nào là đúng?",
        options: [
            "市民病院はどう行ったらいいですか。",
            "市民病院をどう行ったらいいですか。",
            "市民病院がどう行ったらいいですか。",
            "市民病院にどう行きますかどこ。"
        ],
        correct: "市民病院はどう行ったらいいですか。",
        explanation: "Dùng khi muốn hỏi cách đi: 「Nはどう行ったらいいですか。」 → Đi thế nào thì tới bệnh viện thành phố?"
    },
    {
        id: 3,
        grammar: "Nに行きたいんですが",
        leftContent: {
            image: "../images/grammar/station.png",
            text: "駅",
        },
        question: "Cách hỏi đường nào là đúng?",
        options: [
            "駅に行きたいんですが…。",
            "駅を行きたいんですが。",
            "駅が行きたいんですが。",
            "駅にどこ行きたいんですが。"
        ],
        correct: "駅に行きたいんですが…。",
        explanation: "「Nに行きたいんですが…」 dùng để trình bày tình huống và nhờ người khác giúp chỉ đường."
    },

    {
        id: 4,
        grammar: "Vて、～",
        leftContent: {
            image: "",
            text: "その信号を曲がります。まっすぐ行きます。"
        },
        question: "Hãy nói câu chỉ đường đúng bằng cách nối 2 câu.",
        options: [
            "その信号を曲がって、まっすぐ行ってください。",
            "その信号を曲がりて、まっすぐ行きます。",
            "その信号を曲がるて、まっすぐ行ってください。",
            "その信号を曲がって、まっすぐ行きますて。"
        ],
        correct: "その信号を曲がって、まっすぐ行ってください。",
        explanation: "Dùng thể て để nối 2 hành động chỉ đường: 曲がります → 曲がって。"
    },
    {
        id: 5,
        grammar: "Vて、～",
        leftContent: {
            image: "",
            text: "２つ目の信号を左に曲がります。１つ目の角を右に曲がります。"
        },
        question: "Hãy nói câu chỉ đường đúng bằng cách nối 2 câu.",
        options: [
            "２つ目の信号を左に曲がって、１つ目の角を右に曲がってください。",
            "２つ目の信号を左に曲がるて、１つ目の角を右に曲がります。",
            "２つ目の信号を左に曲がりて、１つ目の角を右に曲がってください。",
            "２つ目の信号を左に曲がって、１つ目の角を右に曲がりますて。"
        ],
        correct: "２つ目の信号を左に曲がって、１つ目の角を右に曲がってください。",
        explanation: "Nối 2 hành động bằng thể て: 曲がります → 曲がって。"
    },
    {
        id: 6,
        grammar: "Vて、～",
        leftContent: {
            image: "",
            text: "駅の前の道を渡ります。銀行とコンビニの間【あいだ】の道をまっすぐ行きます。"
        },
        question: "Hãy nói câu chỉ đường đúng bằng cách nối 2 câu.",
        options: [
            "駅の前の道を渡って、銀行とコンビニの間の道をまっすぐ行ってください。",
            "駅の前の道を渡るて、銀行とコンビニの間の道をまっすぐ行きます。",
            "駅の前の道を渡りて、銀行とコンビニの間の道をまっすぐ行ってください。",
            "駅の前の道を渡って、銀行とコンビニの間の道をまっすぐ行きますて。"
        ],
        correct: "駅の前の道を渡って、銀行とコンビニの間の道をまっすぐ行ってください。",
        explanation: "渡ります → 渡って để nối 2 hành động chỉ đường."
    },
    {
        id: 7,
        grammar: "Vて、～",
        leftContent: {
            image: "",
            text: "Đi thẳng con đường này, rẽ phải chỗ cột đèn thứ 2. Sẽ thấy ngân hàng ABC."
        },
        question: "Hãy chỉ đường đến ngân hàng ABC",
        options: [
            "この道をまっすぐ行って、右に曲がります。ABC銀行が見えます。",
            "この道をまっすぐ行って、１つ目の信号を右に曲がります。ABC銀行が見えます。",
            "この道をまっすぐ行って、２つ目の信号を右に曲がってください。ABC銀行が見えます。",
            "この道をまっすぐ行って、２つ目の信号を右に曲がって、橋を渡ってください。ABC銀行が見えます。"
        ],
        correct: "この道をまっすぐ行って、２つ目の信号を右に曲がってください。ABC銀行が見えます。",
        explanation: "この道をまっすぐ行って：Đi thẳng đường này| 右に曲がってください：Hãy rẽ phải| ABC銀行が見えます：Có thể thấy ngân hàng ABC."
    },

    {
        id: 8,
        grammar: "N1じゃなくて、N2",
        leftContent: {
            image: "",
            text: "A: ここをまっすぐ行って、次の角を右に曲がります。<br>B: 次の角を左ですね？ <br>A: いいえ、（　　　）。"
        },
        question: "Hãy sửa lại thông tin cho đúng.",
        options: [
            "左じゃなくて、右です。",
            "右じゃなくて、左です。",
            "左で、右です。",
            "左が、右です。"
        ],
        correct: "左じゃなくて、右です。",
        explanation: "Dùng mẫu N1じゃなくて、N2 để sửa lại thông tin: không phải rẽ trái mà rẽ phải."
    },
    {
        id: 9,
        grammar: "N1じゃなくて、N2",
        leftContent: {
            image: "",
            text: "A: この先に、公園があります。郵便局は、そのすぐ横にあります。<br> B: ええと、交番の横【よこ】ですか？<br>A: いいえ、（　　　）。"
        },
        question: "Hãy sửa lại thông tin cho đúng.",
        options: [
            "交番じゃなくて、公園の横です。",
            "公園じゃなくて、交番の横です。",
            "交番で、公園の横です。",
            "交番が、公園の横です。"
        ],
        correct: "交番じゃなくて、公園の横です。",
        explanation: "Phủ định thông tin sai rồi đưa thông tin đúng: không phải cạnh đồn cảnh sát mà là cạnh công viên."
    },
    {
        id: 10,
        grammar: "N1じゃなくて、N2",
        leftContent: {
            image: "",
            text: "A: この橋を渡って、まっすぐ行って、赤いビルの３階にあります。<br> B: はい、黒いビルの４階ですね？<br> A: いいえ、（　　　）。"
        },
        question: "Hãy sửa lại thông tin cho đúng.",
        options: [
            "黒いビルの４階じゃなくて、赤いビルの３階です。",
            "赤いビルの３階じゃなくて、黒いビルの４階です。",
            "黒いビルで、赤いビルの３階です。",
            "黒いビルが、赤いビルの３階です。"
        ],
        correct: "黒いビルの４階じゃなくて、赤いビルの３階です。",
        explanation: "Dùng N1じゃなくて、N2 để đính chính: không phải tầng 4 tòa nhà màu đen mà là tầng 3 tòa nhà màu đỏ."
    },
    {
        id: 11,
        grammar: "N1じゃなくて、N2",
        leftContent: {
            image: "",
            text: "A: Tại Nhật bạn đang làm ở nhà hàng hả?<br> B: Không, không phải nhà hàng mà là ở siêu thị"
        },
        question: "Dịch sang tiếng Nhật nào là đúng:",
        options: [
            "A: 日本では、レストランで働いていますか？<br> B：いいえ、レストランじゃなくて、スーパーです。",
            "A: 日本では、レストランで働いていますか？<br> B：いいえ、スーパーじゃなくて、レストランです。",
            "A: 日本では、ホテルで働いていますか？<br> B：いいえ、レストランじゃなくて、スーパーです。",
            "A: 日本では、ホテルで働いていますか？<br> B：いいえ、スーパーじゃなくて、レストランです。",
        ],
        correct: "A: 日本では、レストランで働いていますか？<br> B：いいえ、レストランじゃなくて、スーパーです。",
        explanation: "Dùng N1じゃなくて、N2 để đính chính: không phải nhà hàng mà là siêu thị."
    }
];
