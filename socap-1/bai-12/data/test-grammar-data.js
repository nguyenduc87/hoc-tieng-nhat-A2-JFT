export const grammarList = [
    {
        id: 1,
        grammar: "① Aい・Aな+そうです",
        leftContent: {
            image: "",
            text: [
                "これは、私の国の料理です。",
                "へー、すごく（辛【から】い→＿＿＿）ですね",
            ]
        },
        question:
            "Dùng Aい・Aな+そうです",
        options: [
            "辛そう",
            "辛いそう",
            "辛くない",
            "辛い",
        ],
        correct: "辛そう",
        explanation: "Diễn đạt ấn tượng chủ quan dựa trên quan sát bên ngoài."
    },
    {
        id: 2,
        grammar: "① Aい・Aな+そうです",
        leftContent: {
            image: "",
            text: [
                "すき焼き、できましたよ。",
                "わあ、（おいしい＿＿＿）。",
            ]
        },
        question:
            "Dùng Aい・Aな+そうです",
        options: [
            "おいしそう",
            "おいしいそう",
            "おいしいです",
            "おいしそうな",
        ],
        correct: "おいしそう",
        explanation: "Diễn đạt ấn tượng chủ quan dựa trên quan sát bên ngoài."
    },
    {
        id: 3,
        grammar: "① Aい・Aな+そうです",
        leftContent: {
            image: "",
            text: [
                "このみかん、まだ（すっぱい＿＿＿）ですね。",
                "そうですね。でも、こっちのみかんは、もう（大丈夫＿＿＿）ですよ。",
            ]
        },
        question:
            "Dùng Aい・Aな+そうです",
        options: [
            "すっぱそう",
            "すっぱい",
            "すっぱいそう",
            "すっぱいです",
        ],
        correct: "すっぱそう",
        explanation: "Diễn đạt ấn tượng chủ quan dựa trên quan sát bên ngoài."
    },

    {
        id: 4,
        grammar: "② Aい・Aな+そうN",
        leftContent: {
            image: "",
            text: [
                "この料理、辛そうですね",
                "➡＿＿＿ですね。"
            ]
        },
        question: "Dùng Aい・Aな+そうN",
        options: [
            "辛そうな料理",
            "辛そう料理",
            "辛いそうな料理",
            "料理が辛いです",
        ],
        correct: "辛そうな料理",
        explanation: "Dùng Aい・Aな+そうN dùng để bổ nghĩa cho danh từ そうなN"
    },
    {
        id: 5,
        grammar: "② Aい・Aな+そうN",
        leftContent: {
            image: "",
            text: [
                "すき焼き、おいしそうですね",
                "→＿＿＿ですね。"
            ]
        },
        question: "Dùng Aい・Aな+そうN",
        options: [
            "おいしそうなすき焼き",
            "おいしいなすき焼き",
            "おいしいすき焼き",
            "おいしい",
        ],
        correct: "おいしそうなすき焼き",
        explanation: "Dùng Aい・Aな+そうN dùng để bổ nghĩa cho danh từ そうなN"
    },
    {
        id: 6,
        grammar: "② Aい・Aな+そうN",
        leftContent: {
            image: "",
            text: [
                "このお弁当、子どもが好きそうですね",
                "→＿＿＿ですね。"
            ]
        },
        question: "Dùng Aい・Aな+そうN",
        options: [
            "子どもが好きそうなお弁当",
            "子どもが好き",
            "子どもが好きなお弁当",
            "お弁当が好き",
        ],
        correct: "子どもが好きそうなお弁当",
        explanation: "Dùng Aい・Aな+そうN dùng để bổ nghĩa cho danh từ そうなN"
    },

    {
        id: 7,
        grammar: "③ イA-くて、～ / イA-くなくて、～",
        leftContent: {
            image: "",
            text: [
                "この卵焼き、甘いです。おいしいです",
                "→この卵焼き、＿＿＿＿。"
            ]
        },
        question: "Dùng イA-くて、～ / イA-くなくて、～",
        options: [
            "甘くておいしいです",
            "甘いくておいしいです",
            "おいしいです",
            "甘くないです",
        ],
        correct: "甘くておいしいです",
        explanation: "Dùng để 「nối các tính từ」 hoặc 「diễn đạt lý do cho mệnh đề sau.」"
    },
    {
        id: 8,
        grammar: "③ イA-くて、～ / イA-くなくて、～",
        leftContent: {
            image: "",
            text: [
                "このスープ、味がうすいです。いまいちです",
                "→このスープ、味が＿＿＿＿。"
            ]
        },
        question: "Dùng イA-くて、～ / イA-くなくて、～",
        options: [
            "うすくて、いまいちです",
            "うすい、いまいちです",
            "うすく、いまいちです",
            "うすいくて、いまいちです",
        ],
        correct: "うすくて、いまいちです",
        explanation: "Dùng để 「nối các tính từ」 hoặc 「diễn đạt lý do cho mệnh đề sau.」"
    },
    {
        id: 9,
        grammar: "③ イA-くて、～ / イA-くなくて、～",
        leftContent: {
            image: "",
            text: [
                "このコーヒー、あまり苦くないです。おいしいです",
                "→このコーヒー、＿＿＿＿。"
            ]
        },
        question: "Dùng イA-くて、～ / イA-くなくて、～",
        options: [
            "あまり苦くなくて、おいしいです",
            "あまり苦くて、おいしいです",
            "あまり苦い、おいしいです",
            "あまり苦くない、おいしいです",
        ],
        correct: "あまり苦くなくて、おいしいです",
        explanation: "Dùng để 「nối các tính từ」 hoặc 「diễn đạt lý do cho mệnh đề sau.」"
    },

    {
        id: 10,
        grammar: "④ Vて みます",
        leftContent: {
            image: "",
            text: [
                "日本酒、飲む？",
                "→少し、＿＿＿＿"
            ]
        },
        question: "Chọn câu lịch sự cao nhất",
        options: [
            "飲んでみます",
            "飲んでます",
            "飲みます",
            "飲みますか",
        ],
        correct: "飲んでみます",
        explanation: "Vて みます（cách nói làm thử hành động gì đó）。"
    },
    {
        id: 11,
        grammar: "④ Vて みます",
        leftContent: {
            image: "",
            text: [
                "日本酒、飲む？",
                "→少し、＿＿＿＿"
            ]
        },
        question: "Chọn câu lịch sự cao nhất",
        options: [
            "飲んでみます",
            "飲んでます",
            "飲みます",
            "飲みますか",
        ],
        correct: "飲んでみます",
        explanation: "Vて みます（cách nói làm thử hành động gì đó）。"
    },
    {
        id: 12,
        grammar: "④ Vて みます",
        leftContent: {
            image: "",
            text: [
                "ちょっと、味がうすいでうね",
                "もっと、さとうを（入れる→＿＿＿＿）"
            ]
        },
        question: "Chọn câu lịch sự cao nhất",
        options: [
            "入れて見ましょうか",
            "入れて見まません",
            "入れ、見ましょうか",
            "入れます",
        ],
        correct: "入れて見ましょうか",
        explanation: "Vて みます（cách nói làm thử hành động gì đó）。"
    },
    {
        id: 13,
        grammar: "④ Vて みます",
        leftContent: {
            image: "",
            text: [
                "新しい居酒屋、今度、みんなで＿＿＿＿ませんか？",
                "飲みに行く→"
            ]
        },
        question: "Chọn câu lịch sự cao nhất",
        options: [
            "飲みに行ってみ",
            "飲み行ってみ",
            "飲みます行ってみ",
            "飲んで行きます",
        ],
        correct: "飲みに行ってみ",
        explanation: "Vて みます（cách nói làm thử hành động gì đó）。"
    },
    {
        id: 14,
        grammar: "⑤ Tự động từ - tha động từ",
        leftContent: {
            image: "",
            text: [
                "このピザ、エビが＿＿＿＿か？",
                "入れて／入って"
            ]
        },
        question: "（＿＿）Chọn đáp án đúng",
        options: [
            "入って",
            "入れて",
        ],
        correct: "入って",
        explanation: "入れる：Tha động từ, 入る：Tự động từ. <br> Pizza này, con tôm có được bỏ vào ko?"
    },
    {
        id: 15,
        grammar: "⑤ Tự động từ - tha động từ",
        leftContent: {
            image: "",
            text: [
                "お茶、＿＿＿ましょうか？",
                "いれ／はいり"
            ]
        },
        question: "（＿＿）Chọn đáp án đúng",
        options: [
            "いれ",
            "はいり",
        ],
        correct: "いれ",
        explanation: "入れる：Tha động từ, 入る：Tự động từ. <br> Tôi pha trà nhé?"
    },
    {
        id: 16,
        grammar: "⑤ Tự động từ - tha động từ",
        leftContent: {
            image: "",
            text: [
                "バーベキュー、次は何を＿＿＿ましょうか？",
                "焼き／焼け"
            ]
        },
        question: "（＿＿）Chọn đáp án đúng",
        options: [
            "焼き",
            "焼け",
        ],
        correct: "焼き",
        explanation: "焼く：Tha động từ, 焼ける：Tự động từ. <br> BBQ, lần sau sẽ nướng gì?"
    },
];
