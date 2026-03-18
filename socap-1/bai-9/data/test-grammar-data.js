export const grammarList = [
    {
        id: 1,
        grammar: "もうVました",
        leftContent: {
            image: "",
            text: [
                "A：新しいスーパー、もう行きましたか？",
                "B：はい、（＿＿）／いえ、（＿＿）",
            ]
        },
        question:
            "Chọn câu trả lời phù hợp.",
        options: [
            "行きました／まだです",
            "行きます／まだです",
            "行きました／行きませんです",
            "行きました／ないです",
        ],
        correct: "行きました／まだです",
        explanation: "もうVました dùng để nói hành động đã hoàn thành <br> Khi hỏi もうV-ましたか？: nếu đã làm → はい、V-ました。<br>Nếu chưa làm → いいえ、まだです。"
    },
    {
        id: 2,
        grammar: "もうVました",
        leftContent: {
            image: "",
            text: [
                "A：ポートタワー、もう登りましたか？",
                "B：はい、（＿＿＿）。"
            ]
        },
        question: "Chọn câu trả lời phù hợp.",
        options: [
            "登りました",
            "登ります",
            "登りませんでした",
            "登りません",
        ],
        correct: "登りました",
        explanation: "もうVました dùng để nói hành động đã hoàn thành <br> Khi hỏi もうV-ましたか？: nếu đã làm → はい、V-ました。<br>Nếu chưa làm → いいえ、まだです。"
    },
    {
        id: 3,
        grammar: "もうVました",
        leftContent: {
            image: "",
            text: [
                "A：お土産、（買う → ＿＿＿）？",
                "B：はい、買いました。"
            ]
        },
        question: "Chọn câu trả lời phù hợp.",
        options: [
            "もう買いましたか",
            "買いましたか",
            "もう買いませんでしたか",
            "もう買いますか",
        ],
        correct: "もう買いましたか",
        explanation: "もうVました dùng để nói hành động đã hoàn thành <br> Khi hỏi もうV-ましたか？: nếu đã làm → はい、V-ました。<br>Nếu chưa làm → いいえ、まだです。"
    },

    {
        id: 4,
        grammar: "V-たことがあります",
        leftContent: {
            image: "",
            text: [
                "A：牛丼を食べる →（＿＿＿＿＿）？"
            ]
        },
        question: "Dùng mẫu「～たことがありますか」",
        options: [
            "食べたことがありますか？",
            "食べますか？",
            "食べた？",
            "食べることがありますか？"
        ],
        correct: "食べたことがありますか？",
        explanation: "Mẫu 「V-たことがありますか」 dùng để hỏi trải nghiệm chưa.<br>牛丼を食べる → 牛丼を食べたことがありますか。<br>VN: Bạn đã từng ăn cơm bò (gyudon) chưa?"
    },
    {
        id: 5,
        grammar: "V-たことがあります",
        leftContent: {
            image: "",
            text: [
                "A：船に乗る →（＿＿＿＿＿）？"
            ]
        },
        question: "Dùng mẫu 「～たことがありますか」",
        options: [
            "乗りますか？",
            "乗ったことがありますか？",
            "乗ることがありますか？",
            "乗りましたか？"
        ],
        correct: "乗ったことがありますか？",
        explanation: "V-た + ことがありますか dùng để hỏi trải nghiệm chưa.<br>船に乗る → 船に乗ったことがありますか。<br>VN: Bạn đã từng đi tàu/thuyền chưa?"
    },
    {
        id: 6,
        grammar: "V-たことがあります",
        leftContent: {
            image: "",
            text: [
                "A：温泉に入る →（＿＿＿＿＿）？"
            ]
        },
        question: "Dùng mẫu 「～たことがありますか」",
        options: [
            "入りますか？",
            "入ることがありますか？",
            "入ったことがありますか？",
            "入りましたか？"
        ],
        correct: "入ったことがありますか？",
        explanation: "Mẫu hỏi trải nghiệm chưa: V-たことがありますか。<br>温泉に入る → 温泉に入ったことがありますか。<br>VN: Bạn đã từng tắm suối nước nóng chưa?"
    },

    {
        id: 7,
        grammar: "V-に 行きませんか",
        leftContent: {
            image: "../images/grammar/panda.png",
            text: [
                "A：パンダを見る →（＿＿＿＿＿）？"
            ]
        },
        question: "Dùng mẫu 「V-に行きませんか」",
        options: [
            "パンダを見ますか？",
            "パンダを見に行きませんか？",
            "パンダを見に行きます。",
            "パンダを見たいですか？"
        ],
        correct: "パンダを見に行きませんか？",
        explanation: "Mẫu 「V-に行きませんか」 dùng để rủ ai đó đi làm gì.<br>見る → 見に行きませんか。<br>パンダを見に行きませんか。<br>VN: Bạn đi xem gấu trúc không?"
    },

    {
        id: 8,
        grammar: "V-に 行きませんか",
        leftContent: {
            image: "../images/grammar/eiga.png",
            text: [
                "A：コンサートを聞く →（＿＿＿＿＿）？"
            ]
        },
        question: "Dùng mẫu 「V-に行きませんか」",
        options: [
            "コンサートを聞きませんか？",
            "コンサートを聞きに行きませんか？",
            "コンサートを聞きに行きますか？",
            "コンサートを聞きたいですか？"
        ],
        correct: "コンサートを聞きに行きませんか？",
        explanation: "Vます + に + 行きませんか dùng để rủ đi làm gì.<br>聞く → 聞きに行きませんか。<br>コンサートを聞きに行きませんか。<br>VN: Bạn đi nghe hòa nhạc không?"
    },

    {
        id: 9,
        grammar: "V-に 行きませんか",
        leftContent: {
            image: "../images/grammar/nomu.png",
            text: [
                "A：飲む →（＿＿＿＿＿）？"
            ]
        },
        question: "Dùng mẫu「V-に行きませんか」",
        options: [
            "飲みませんか？",
            "飲みに行きませんか？",
            "飲みに行きますか？",
            "飲みたいですか？"
        ],
        correct: "飲みに行きませんか？",
        explanation: "Mẫu rủ đi làm gì: Vます + に行きませんか。<br>飲む → 飲みに行きませんか。<br>VN: Bạn đi uống nước không?"
    },

    {
        id: 10,
        grammar: "Nの前に / Nのあとで",
        leftContent: {
            image: "",
            text: [
                "A：学校 → みんなで飲みに行く",
                "→（＿＿＿＿＿）、みんなで飲みに行きませんか？"
            ]
        },
        question: "Chọn câu phù hợp với thứ tự sự kiện.",
        options: [
            "学校のあとで",
            "学校の前に",
            "学校で",
            "学校へ"
        ],
        correct: "学校のあとで",
        explanation: "Mẫu 「Nのあとで」 dùng để nói sau khi làm việc gì.<br>学校 → みんなで飲みに行く<br>→ 学校のあとで、みんなで飲みに行きませんか。<br>VN: Sau khi tan học, chúng ta đi uống cùng nhau nhé?"
    },

    {
        id: 11,
        grammar: "Nの前に / Nのあとで",
        leftContent: {
            image: "",
            text: [
                "A：飲み物を買う → 映画",
                "→（＿＿＿＿＿）、飲み物を買いましょう。"
            ]
        },
        question: "Chọn câu phù hợp với thứ tự sự kiện.",
        options: [
            "映画のあとで",
            "映画の前に",
            "映画へ",
            "映画で"
        ],
        correct: "映画の前に",
        explanation: "Mẫu 「Nの前に」 dùng để nói trước khi làm việc gì.<br>映画の前に、飲み物を買いましょう。<br>VN: Trước khi xem phim, chúng ta mua đồ uống nhé."
    },

    {
        id: 12,
        grammar: "Nの前に / Nのあとで",
        leftContent: {
            image: "",
            text: [
                "A：トイレ → コンサート",
                "→（＿＿＿＿＿）、ちょっとトイレに行きますね。"
            ]
        },
        question: "Chọn câu phù hợp với thứ tự sự kiện.",
        options: [
            "コンサートのあとで",
            "コンサートの前に",
            "コンサートへ",
            "コンサートで"
        ],
        correct: "コンサートの前に",
        explanation: "「Nの前に」 dùng để nói trước một sự kiện.<br>コンサートの前に、ちょっとトイレに行きますね。<br>VN: Trước buổi hòa nhạc, tôi đi vệ sinh một chút."
    },

    {
        id: 13,
        grammar: "V-たいんですが",
        leftContent: {
            image: "",
            text: [
                "A：すみません、ちょっと（休む → ＿＿＿＿）…。"
            ]
        },
        question: "Chọn câu diễn đạt nguyện vọng đúng.",
        options: [
            "休みたいんですが",
            "休みますんですが",
            "休みたいですか",
            "休みましたんですが"
        ],
        correct: "休みたいんですが",
        explanation: "Mẫu 「V-たいんですが」 dùng để nói mong muốn một cách lịch sự, thường để mở đầu cho lời đề nghị hoặc xin phép.<br>休む → 休みたいんですが。<br>VN: Xin lỗi, tôi muốn nghỉ một chút..."
    },

    {
        id: 14,
        grammar: "V-たいんですが",
        leftContent: {
            image: "",
            text: [
                "A：食事の前に、お金を（おろす →  ＿＿＿＿）…。"
            ]
        },
        question: "Chọn câu diễn đạt nguyện vọng đúng.",
        options: [
            "おろしますんですが",
            "おろしたいんですが",
            "おろしますか",
            "おろしましたんですが"
        ],
        correct: "おろしたいんですが",
        explanation: "「V-たいんですが」 diễn đạt mong muốn trước khi nhờ hoặc hỏi thêm thông tin.<br>おろす → おろしたいんですが。<br>VN: Trước khi ăn, tôi muốn rút tiền..."
    },

    {
        id: 15,
        grammar: "V-たいんですが",
        leftContent: {
            image: "",
            text: [
                "A：京都に（旅行する →  ＿＿＿＿）、どの季節がおすすめですか？"
            ]
        },
        question: "Chọn câu diễn đạt nguyện vọng đúng.",
        options: [
            "旅行しますんですが",
            "旅行したいんですが",
            "旅行しましたか",
            "旅行したんです"
        ],
        correct: "旅行したいんですが",
        explanation: "Mẫu 「V-たいんですが」 thường dùng để nêu mong muốn rồi hỏi thêm thông tin.<br>京都に旅行したいんですが、どの季節がおすすめですか？<br>VN: Tôi muốn đi du lịch Kyoto, mùa nào được khuyên nên đi?"
    }
];
