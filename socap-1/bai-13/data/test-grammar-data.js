export const grammarList = [
    {
        id: 1,
        grammar: "① ～んですが…",
        leftContent: {
            image: "",
            text: [
                "倉庫の電気がつきません。",
                "➡あのう、（倉庫の電気が＿＿＿＿）",
            ]
        },
        question:
            "（＿＿）Chọn câu đúng",
        options: [
            "つかないんですが",
            "つきません",
            "つきます",
            "ついていません",
        ],
        correct: "つかないんですが",
        explanation: "Diễn đạt tình hình của bản thân và hỏi đối phương cách xử lý. <br>-> Đèn nhà kho bật không sáng được."
    },
    {
        id: 2,
        grammar: "① ～んですが…",
        leftContent: {
            image: "",
            text: [
                "エアコンから変な音がします。",
                "➡あのう、（変な音が＿＿＿＿）",
            ]
        },
        question:
            "（＿＿）Chọn câu đúng",
        options: [
            "するんですが",
            "するん",
            "する",
            "しますね",
        ],
        correct: "するんですが",
        explanation: "Diễn đạt tình hình của bản thân và hỏi đối phương cách xử lý. <br>-> Có tiếng lạ bất thường từ máy lạnh."
    },
    {
        id: 3,
        grammar: "① ～んですが…",
        leftContent: {
            image: "",
            text: [
                "コピーの紙【かみ】がなくなりました。",
                "➡あのう、（紙【かみ】が＿＿＿＿）",
            ]
        },
        question:
            "（＿＿）Chọn câu đúng",
        options: [
            "なくなったんですが",
            "なくなります",
            "なります",
            "なりました",
        ],
        correct: "なくなったんですが",
        explanation: "Diễn đạt tình hình của bản thân và hỏi đối phương cách xử lý. <br>-> Giấy copy đã hết rồi."
    },

    {
        id: 4,
        grammar: "② Vる→Vない",
        leftContent: {
            image: "",
            text: [
                "1. 聞く｜2. 動く｜3. 帰る｜4. いる｜5. 待つ",
                "→1. ＿＿｜2. ＿＿｜3. ＿＿｜4. ＿＿｜5. ＿＿"
            ]
        },
        question: "Vる→Vない",
        options: [
            "1. 聞かない｜2. 動かない｜3. 帰らない｜4. いない｜5. 待たない",
            "1. 聞きない｜2. 動かない｜3. 帰らない｜4. いない｜5. 待たない",
            "1. 聞かない｜2. 動きない｜3. 帰らない｜4. いない｜5. 待たない",
            "1. 聞かない｜2. 動かない｜3. 帰りない｜4. いるない｜5. 待たない",
        ],
        correct: "1. 聞かない｜2. 動かない｜3. 帰らない｜4. いない｜5. 待たない",
        explanation: "Mẫu N1はN2がイAです → Tiếng Anh thì phát âm thú vị."
    },
    {
        id: 5,
        grammar: "② V-そうです",
        leftContent: {
            image: "",
            text: [
                "どのぐらいかかりそうですか",
                "→あと10分ぐらいで（終わります＿＿＿）。"
            ]
        },
        question: "V-そうです",
        options: [
            "終わりそうです",
            "終わりです",
            "終わります",
            "終わったそうです",
        ],
        correct: "終わりそうです",
        explanation: "Mẫu V-そうです dùng để phỏng đoán dựa vào tình hình, tiến triển→ <br> Sau 10 phút nữa sẽ xong."
    },
    {
        id: 6,
        grammar: "② V-そうです",
        leftContent: {
            image: "",
            text: [
                "手伝いましょうか",
                "→大丈夫です。1人で（できます＿＿＿）。"
            ]
        },
        question: "V-そうです",
        options: [
            "できそうです",
            "できます",
            "できません",
            "できないんですが",
        ],
        correct: "できそうです",
        explanation: "Mẫu V-そうです dùng để phỏng đoán dựa vào tình hình, tiến triển→ <br> Không sao. Một mình có thể làm được"
    },

    {
        id: 7,
        grammar: "② V-そうです",
        leftContent: {
            image: "",
            text: [
                "できましたか",
                "→すみません、もうお少し（かかります＿＿＿）。"
            ]
        },
        question: "V-そうです",
        options: [
            "かかりそうです",
            "かかります",
            "かかりません",
            "かかりです",
        ],
        correct: "かかりそうです",
        explanation: "Mẫu V-そうです dùng để phỏng đoán dựa vào tình hình, tiến triển→ <br> Xin lỗi, sẽ tốn thêm 1 chút nữa ạ"
    },
    {
        id: 8,
        grammar: "③ Vたい　とき、～。",
        leftContent: {
            image: "",
            text: [
                "両面コピーする",
                "→両面コピー＿＿＿とき、どうすればいいですか？"
            ]
        },
        question: "Dùng Vたい　とき、～。",
        options: [
            "したい",
            "したいん",
            "します",
            "する",
        ],
        correct: "したい",
        explanation: "Vたい　とき、～。Khi muốn copy, làm thế nào thì được ạ?"
    },
    {
        id: 9,
        grammar: "③ Vたい　とき、～。",
        leftContent: {
            image: "",
            text: [
                "FAXを送【おく】る",
                "→FAXを＿＿＿とき、どうすればいいですか？"
            ]
        },
        question: "Dùng Vたい　とき、～。",
        options: [
            "送りたい",
            "送りたいん",
            "送ります",
            "送る",
        ],
        correct: "送りたい",
        explanation: "Vたい　とき、～。Khi muốn gửi FAX, làm thế nào thì được ạ?"
    },

    {
        id: 10,
        grammar: "③ Vたい　とき、～。",
        leftContent: {
            image: "",
            text: [
                "電源を入れる",
                "→電源を＿＿＿とき、どうすればいいですか？"
            ]
        },
        question: "Dùng Vたい　とき、～。",
        options: [
            "入れたい",
            "入れます",
            "入れる",
            "入れるん",
        ],
        correct: "入れたい",
        explanation: "Vたい　とき、～。Khi muốn bật nguồn điện, làm thế nào thì được ạ?"
    },

    {
        id: 11,
        grammar: "④ Vると、～",
        leftContent: {
            image: "",
            text: [
                "スタートボタンを押します➡コピーが始まります",
                "スタートボタンを＿＿＿、コピーが始まります"
            ]
        },
        question: "Dùng Vると、～ <br> đạt kết quả tự nhiên xảy ra sau một hành động",
        options: [
            "押すと",
            "押します",
            "押す",
            "押したいとき",
        ],
        correct: "押すと",
        explanation: "Dùng Vると、～ <br> Ấn nút start thì sẽ bắt đầu copy"
    },
    {
        id: 12,
        grammar: "④ Vると、～",
        leftContent: {
            image: "",
            text: [
                "ここに紙をセットします➡A3のコピーができます",
                "ここに紙を＿＿＿、A3のコピーができます"
            ]
        },
        question: "Dùng Vると、～ <br> đạt kết quả tự nhiên xảy ra sau một hành động",
        options: [
            "セットすると",
            "セットしますと",
            "セットするん",
            "セットしたい",
        ],
        correct: "セットすると",
        explanation: "Dùng Vると、～ <br> Đặt giấy vào chỗ này thì có thể copy được A3"
    },
    {
        id: 13,
        grammar: "④ Vると、～",
        leftContent: {
            image: "",
            text: [
                "ここにコップを置きます➡コーヒーが出ます",
                "ここにコップを＿＿＿、コーヒーが出ます"
            ]
        },
        question: "Dùng Vると、～ <br> đạt kết quả tự nhiên xảy ra sau một hành động",
        options: [
            "置くと",
            "置きますと",
            "置きます",
            "置くん",
        ],
        correct: "置くと",
        explanation: "Dùng Vると、～ <br> Đặt cái ly vào chỗ này thì cafe sẽ ra"
    },

    {
        id: 14,
        grammar: "⑤ はい／いいえ（肯定文・否定文）",
        leftContent: {
            image: "",
            text: [
                "A：コピー機、使ったことないですか？",
                "B：（はい／いいえ）、一度もありません。"
            ]
        },
        question: "（＿＿）Chọn đáp án đúng",
        options: [
            "はい",
            "いいえ",
        ],
        correct: "はい",
        explanation: "Nếu đúng thì trả lời はい、Sai thì trả lời いいえ. <br> Bạn chưa từng sử dụng máy photo hả. <br> Vâng, chưa lần nào"
    },
    {
        id: 15,
        grammar: "⑤ はい／いいえ（肯定文・否定文）",
        leftContent: {
            image: "",
            text: [
                "A：パソコン、動きませんか？",
                "B：（はい／いいえ）、電源が入りません。"
            ]
        },
        question: "（＿＿）Chọn đáp án đúng",
        options: [
            "はい",
            "いいえ",
        ],
        correct: "はい",
        explanation: "Nếu đúng thì trả lời はい、Sai thì trả lời いいえ. <br> máy tính không chạy hả. <br> Vâng, Chưa có nguồn điện"
    },
    {
        id: 16,
        grammar: "⑤ はい／いいえ（肯定文・否定文）",
        leftContent: {
            image: "",
            text: [
                "A：その仕事、まだまだ時間がかかりそうですか？",
                "B：（はい／いいえ）、もうすぐ終わります。"
            ]
        },
        question: "（＿＿）Chọn đáp án đúng",
        options: [
            "はい",
            "いいえ",
        ],
        correct: "いいえ",
        explanation: "Nếu đúng thì trả lời はい、Sai thì trả lời いいえ. <br> A: Công việc đó trông vẫn còn tốn nhiều thời gian phải không? <br> B: Không, sắp xong rồi."
    },
];
