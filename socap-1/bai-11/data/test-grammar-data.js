export const grammarList = [
    {
        id: 1,
        grammar: "① Vて　行きます／来ます",
        leftContent: {
            image: "",
            text: [
                "A: 家で、おすしを（作って来ました／作って行きました）。みなさん、どうぞ。",
                "B: すごい！ありがとうございます。",
                "C: 飲み物もほしいですね。自動販売機で、お茶を（飲んで来ます／買って来ます）ね。",
                "A: だいじょうぶですよ。お茶も（持って来ました／持って行きました）。はい、どうぞ。"
            ]
        },
        question:
            "（＿＿）Chọn câu đúng",
        options: [
            "で",
            "に",
            "は",
            "を",
        ],
        correct: "で",
        explanation: "Nで（Cách thức/phương tiện）.<br> Câu hỏi là học bằng cách nào. -> Học bằng cách là tại trường."
    },
    {
        id: 2,
        grammar: "① Nで（Cách thức / Phương tiện）",
        leftContent: {
            image: "../images/grammar/01-02.png",
            text: [
                "どうやってアニメを見ますか？",
                "➡パソコン＿＿＿見ます。",
            ]
        },
        question:
            "（＿＿）Chọn câu đúng",
        options: [
            "で",
            "に",
            "は",
            "を",
        ],
        correct: "で",
        explanation: "Nで（Cách thức/phương tiện）.<br> Xem anime bằng máy tính → dùng パソコンで。"
    },
    {
        id: 3,
        grammar: "① Nで（Cách thức / Phương tiện）",
        leftContent: {
            image: "../images/grammar/01-03.png",
            text: [
                "どうやってニュースを読みますか？",
                "➡アプリ＿＿＿読みます。",
            ]
        },
        question:
            "（＿＿）Chọn câu đúng",
        options: [
            "で",
            "に",
            "は",
            "を",
        ],
        correct: "で",
        explanation: "Nで（Cách thức/phương tiện）.<br> Đọc bằng app → アプリで。"
    },

    {
        id: 4,
        grammar: "② N1は N2が ナAです / イAです",
        leftContent: {
            image: "",
            text: [
                "英語｜発音＝おもしろい",
                "➡（　　　　　　　　　　　）。"
            ]
        },
        question: "Chọn câu đúng",
        options: [
            "英語は発音がおもしろいです",
            "英語が発音はおもしろいです",
            "英語は発音をおもしろいです",
            "英語で発音がおもしろいです"
        ],
        correct: "英語は発音がおもしろいです",
        explanation: "Mẫu N1はN2がイAです → Tiếng Anh thì phát âm thú vị."
    },
    {
        id: 5,
        grammar: "② N1は N2が ナAです / イAです",
        leftContent: {
            image: "",
            text: [
                "ミャンマー語｜文字＝かわいい",
                "➡（　　　　　　　　　　　）。"
            ]
        },
        question: "Chọn câu đúng",
        options: [
            "ミャンマー語は文字がかわいいです",
            "ミャンマー語が文字はかわいいです",
            "ミャンマー語は文字をかわいいです",
            "ミャンマー語で文字がかわいいです"
        ],
        correct: "ミャンマー語は文字がかわいいです",
        explanation: "Mẫu N1はN2がイAです → Tiếng Myanmar thì chữ viết dễ thương."
    },
    {
        id: 6,
        grammar: "② N1は N2が ナAです / イAです",
        leftContent: {
            image: "",
            text: [
                "タイ語｜読む＝難しい",
                "➡（　　　　　　　　　　　）。"
            ]
        },
        question: "Chọn câu đúng",
        options: [
            "タイ語は読むが難しいです",
            "タイ語は読むのが難しいです",
            "タイ語が読むのは難しいです",
            "タイ語で読むのが難しいです"
        ],
        correct: "タイ語は読むのが難しいです",
        explanation: "Động từ → Vる + のが + イAです → Việc đọc tiếng Thái thì khó."
    },

    {
        id: 7,
        grammar: "③ N1は、～。（でも、）N2は、～。",
        leftContent: {
            image: "",
            text: [
                "話す＝得意(な)｜読む＝苦手(な)",
                "➡（　　　　　　　　　　　）。"
            ]
        },
        question: "Chọn câu đúng",
        options: [
            "話す は苦手です。でも、読む は得意です",
            "話す は得意です。でも、読む は苦手です",
            "話す のが得意です。でも、読む のが苦手です",
            "話す が得意です。でも、読む が苦手です"
        ],
        correct: "話すのが得意です。でも、読むのが苦手です",
        explanation: "So sánh đối lập: Vる + のは + ナAです。"
    },
    {
        id: 8,
        grammar: "③ N1は、～。（でも、）N2は、～。",
        leftContent: {
            image: "",
            text: [
                "ベトナム語｜発音【はつおん】＝とても難しい｜文法＝難しくない",
                "➡（　　　　　　　　　　　）。"
            ]
        },
        question: "Chọn câu đúng",
        options: [
            "ベトナム語 は発音 は とても難しいです。でも、文法 は 難しくないです",
            "ベトナム語 は発音 が とても難しいです。でも、文法 は 難しくないです",
            "ベトナム語 が発音 は とても難しいです。でも、文法 が 難しくないです",
            "ベトナム語 は発音 を とても難しいです。でも、文法 を 難しくないです"
        ],
        correct: "ベトナム語は発音がとても難しいです。でも、文法は難しくないです",
        explanation: "N1はN2がイAです。でも、N3はイAです（phủ định）。"
    },
    {
        id: 9,
        grammar: "③ N1は、～。（でも、）N2は、～。",
        leftContent: {
            image: "",
            text: [
                "モンゴル語｜文法＝日本語と似【に】ている｜文字＝ぜんぜん違【ちが】う",
                "➡（　　　　　　　　　　　）。"
            ]
        },
        question: "Chọn câu đúng",
        options: [
            "モンゴル語 は 文法 は 日本語と似ています。でも、文字 は ぜんぜん違います",
            "モンゴル語 は 文法 が 日本語と似ています。でも、文字 は ぜんぜん違います",
            "モンゴル語 が 文法 は 日本語と似ています。でも、文字 が ぜんぜん違います",
            "モンゴル語 は 文法 を 日本語と似ています。でも、文字 を ぜんぜん違います"
        ],
        correct: "モンゴル語は文法が日本語と似ています。でも、文字はぜんぜん違います",
        explanation: "So sánh đối lập: N1はN2が～です。でも、N3は～です。"
    },

    {
        id: 10,
        grammar: "④ Vて もらえませんか？",
        leftContent: {
            image: "",
            text: [
                "その教科書【きょうかしょ】、ちょっと見せてください。",
                "➡（　　　　　　　　　　　）？"
            ]
        },
        question: "Chọn câu lịch sự cao nhất",
        options: [
            "ちょっと見せてもらえませんか",
            "ちょっと見せてもらいますか",
            "ちょっと見せてくれませんか",
            "ちょっと見せてもらえます"
        ],
        correct: "ちょっと見せてもらえませんか",
        explanation: "Đổi từ ～てください → ～てもらえませんか（cách nói lịch sự hơn khi nhờ vả）。"
    },
    {
        id: 11,
        grammar: "④ Vて もらえませんか？",
        leftContent: {
            image: "",
            text: [
                "もう少し簡単【かんたん】なことばで言ってください。",
                "➡（　　　　　　　　　　　）？"
            ]
        },
        question: "Chọn câu lịch sự cao nhất",
        options: [
            "言ってもらえませんか",
            "言いますか",
            "言ってもらいますか",
            "言ってくださいか"
        ],
        correct: "言ってもらえませんか",
        explanation: "～てもらえませんか: nhờ ai đó làm gì (lịch sự)."
    },
    {
        id: 12,
        grammar: "④ Vて もらえませんか？",
        leftContent: {
            image: "",
            text: [
                "そのことば、紙【かみ】に書いてください。",
                "➡（　　　　　　　　　　　）？"
            ]
        },
        question: "Chọn câu lịch sự cao nhất",
        options: [
            "書いてもらえませんか",
            "書きますか",
            "書いてもらいますか",
            "書いてくださいか"
        ],
        correct: "書いてもらえませんか",
        explanation: "Cấu trúc nhờ vả lịch sự: Vて + もらえませんか。"
    },
    {
        id: 13,
        grammar: "④ Vて もらえませんか？",
        leftContent: {
            image: "",
            text: [
                "もういちど、ゆっくり説明してください。",
                "➡（　　　　　　　　　　　）？"
            ]
        },
        question: "Chọn câu lịch sự cao nhất",
        options: [
            "説明してもらえませんか",
            "説明しますか",
            "説明してもらいますか",
            "説明してくださいか"
        ],
        correct: "説明してもらえませんか",
        explanation: "Dùng để nhờ vả lịch sự trong hội thoại."
    },

    {
        id: 14,
        grammar: "⑤ V方",
        leftContent: {
            image: "",
            text: [
                "日本語、どうやって教えますか？",
                "➡日本語の（　　　）を勉強したいです。"
            ]
        },
        question: "（＿＿）Chọn đáp án đúng",
        options: [
            "教え方",
            "教える方",
            "教えます方",
            "教えること"
        ],
        correct: "教え方",
        explanation: "Vます → bỏます + 方 → 教え方（cách dạy）"
    },
    
];
