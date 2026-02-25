export const grammarList = [
    {
        id: 1,
        grammar: "Mẫu N/ナA/イA-く なります",
        leftContent: {
            image: "",
            text: "せみが鳴きます。公園が（うるさいです） →"
        },
        question: "Mẫu N/ナA/イA-く なります",
        options: [
            "公園がうるさいです。",
            "公園がうるさくなります。",
            "公園がうるさいになります。",
            "公園がうるさになります。"
        ],
        correct: "公園がうるさくなります。",
        explanation: "イA bỏ い + く + なります → うるさい → うるさくなります。"
    },
    {
        id: 2,
        grammar: "N/ナA/イA-く なります",
        leftContent: {
            image: "",
            text: "秋は（すずしいです） →"
        },
        question: "Mẫu N/ナA/イA-く なります",
        options: [
            "秋はすずしいになります。",
            "秋はすずしくなります。",
            "秋はすずしいなります。",
            "秋はすずしくになります。"
        ],
        correct: "秋はすずしくなります。",
        explanation: "イA: すずしい → すずしく + なります → すずしくなります。"
    },
    {
        id: 3,
        grammar: "N/ナA/イA-く なります",
        leftContent: {
            image: "",
            text: "もみじで、山の景色が（きれいです） →"
        },
        question: "Mẫu N/ナA/イA-く なります",
        options: [
            "山の景色がきれいになります。",
            "山の景色がきれいなります。",
            "山の景色がきれいくなります。",
            "山の景色がきれいですなります。"
        ],
        correct: "山の景色がきれいになります。",
        explanation: "ナA bỏ です + に + なります → きれいです → きれいになります。"
    },

    {
        id: 4,
        grammar: "Mẫu いちばん ナAです／イAです",
        leftContent: {
            image: "",
            text: "ここの桜｜有名（な）"
        },
        question: "Mẫu いちばん ナAです／イAです",
        options: [
            "ここの桜がいちばん有名です。",
            "ここの桜はいちばん有名です。",
            "ここの桜はいちばん有名なです。",
            "ここの桜がいちばん有名なです。"
        ],
        correct: "ここの桜はいちばん有名です。",
        explanation: "ナA: 有名（な）→ いちばん + ナA + です。ナ không dùng trước です."
    },
    {
        id: 5,
        grammar: "いちばん ナAです／イAです",
        leftContent: {
            image: "",
            text: "8月｜暑い"
        },
        question: "Mẫu いちばん ナAです／イAです",
        options: [
            "8月はいちばん暑いです。",
            "8月がいちばん暑いです。",
            "8月はいちばん暑いなです。",
            "8月はいちばん暑くです。"
        ],
        correct: "8月はいちばん暑いです。",
        explanation: "イA giữ nguyên: いちばん + 暑い + です。"
    },
    {
        id: 6,
        grammar: "いちばん ナAです／イAです",
        leftContent: {
            image: "",
            text: "秋｜果物がおいしい"
        },
        question: "Mẫu いちばん ナAです／イAです",
        options: [
            "秋はいちばん果物がおいしいです。",
            "秋がいちばん果物がおいしいです。",
            "秋はいちばんおいしい果物です。",
            "秋はいちばん果物がおいしいなです。"
        ],
        correct: "秋はいちばん果物がおいしいです。",
        explanation: "Câu có mệnh đề: 果物がおいしい đứng sau いちばん. Cấu trúc: N は いちばん + 文 + です。"
    },

    {
        id: 7,
        grammar: "イA-のが 好きです／苦手です",
        leftContent: {
            image: "",
            text: "暖かい（😊）"
        },
        question: "Mẫu イA-のが 好きです／苦手です",
        options: [
            "暖かいが好きです。",
            "暖かいのが好きです。",
            "暖かいの好きです。",
            "暖かいのが好きなです。"
        ],
        correct: "暖かいのが好きです。",
        explanation: "イA + の + が + 好きです。Tính từ chuyển thành danh từ bằng cách thêm の."
    },
    {
        id: 8,
        grammar: "イA-のが 好きです／苦手です",
        leftContent: {
            image: "",
            text: "すずしい（😊）"
        },
        question: "Mẫu イA-のが 好きです／苦手です",
        options: [
            "すずしいが好きです。",
            "すずしいのが好きです。",
            "すずしいの好きです。",
            "すずしいのが好きなです。"
        ],
        correct: "すずしいのが好きです。",
        explanation: "イA + のが + 好きです. Dùng の để danh từ hóa tính từ."
    },
    {
        id: 9,
        grammar: "Mẫu イA-のが 好きです／苦手です",
        leftContent: {
            image: "",
            text: "蒸し暑い（😢）"
        },
        question: "Mẫu イA-のが 好きです／苦手です",
        options: [
            "蒸し暑いのが苦手です。",
            "蒸し暑いが苦手です。",
            "蒸し暑いの苦手です。",
            "蒸し暑いのが苦手なです。"
        ],
        correct: "蒸し暑いのが苦手です。",
        explanation: "イA + のが + 苦手です. Biểu đạt điều gì đó mình không giỏi / không thích."
    },

    {
        id: 10,
        grammar: "ナAです／イAです + から",
        leftContent: {
            image: "",
            text: "春｜桜がきれい"
        },
        question: "Mẫu ナAです／イAです + から",
        options: [
            "春が好きです。桜がきれいからです。",
            "春が好きです。桜がきれいですから。",
            "春が好きです。桜がきれいなですから。",
            "春が好きです。桜がきれいですからです。"
        ],
        correct: "春が好きです。桜がきれいですから。",
        explanation: "ナA + です + から. きれい → きれいですから。"
    },
    {
        id: 11,
        grammar: "ナAです／イAです + から",
        leftContent: {
            image: "",
            text: "夏｜海で遊ぶのが楽しい"
        },
        question: "Mẫu ナAです／イAです + から",
        options: [
            "夏が好きです。海で遊ぶのが楽しいから。",
            "夏が好きです。海で遊ぶのが楽しいですから。",
            "夏が好きです。海で遊ぶのが楽しいなですから。",
            "夏が好きです。海で遊ぶの楽しいですから。"
        ],
        correct: "夏が好きです。海で遊ぶのが楽しいですから。",
        explanation: "イA + です + から. 楽しい → 楽しいですから。"
    },
    {
        id: 12,
        grammar: "Mẫu ナAです／イAです + から",
        leftContent: {
            image: "",
            text: "冬｜雪の景色がきれい"
        },
        question: "Mẫu ナAです／イAです + から",
        options: [
            "冬が好きです。雪の景色がきれいですから。",
            "冬が好きです。雪の景色がきれいからです。",
            "冬が好きです。雪の景色がきれいなですから。",
            "冬が好きです。雪の景色がきれいですからです。"
        ],
        correct: "冬が好きです。雪の景色がきれいですから。",
        explanation: "ナA + です + から. Khi giải thích lý do ở cuối câu dùng ～ですから。"
    },

    {
        id: 13,
        grammar: "S1 から、S2",
        leftContent: {
            image: "",
            text: "学校が休み｜夏がいちばん好き"
        },
        question: "Mẫu S1 から、S2",
        options: [
            "学校が休みですから、夏がいちばん好きです。",
            "学校が休みから、夏がいちばん好きです。",
            "学校が休みですから夏がいちばん好きですから。",
            "学校が休みなから、夏がいちばん好きです。"
        ],
        correct: "学校が休みですから、夏がいちばん好きです。",
        explanation: "Danh từ + です + から. S1 là lý do, S2 là kết quả."
    },
    {
        id: 14,
        grammar: "S1 から、S2",
        leftContent: {
            image: "",
            text: "雨がたくさん降る｜梅雨が苦手"
        },
        question: "Mẫu S1 から、S2",
        options: [
            "雨がたくさん降りますから、梅雨が苦手です。",
            "雨がたくさん降るですから、梅雨が苦手です。",
            "雨がたくさん降るから、梅雨が苦手です。",
            "雨がたくさん降りますから、梅雨が苦手ですから。"
        ],
        correct: "雨がたくさん降るから、梅雨が苦手です。",
        explanation: "Động từ thể thường + から. Khi nối 2 câu có thể dùng る + から."
    },
    {
        id: 15,
        grammar: "Mẫu S1 から、S2",
        leftContent: {
            image: "",
            text: "山に登るのが趣味｜夏が大好き"
        },
        question: "Mẫu S1 から、S2",
        options: [
            "山に登るのが趣味ですから、夏が大好きです。",
            "山に登るのが趣味から、夏が大好きです。",
            "山に登るの趣味ですから、夏が大好きです。",
            "山に登るのが趣味ですから、夏が大好きですから。"
        ],
        correct: "山に登るのが趣味ですから、夏が大好きです。",
        explanation: "Cụm danh từ + です + から. S1 nêu lý do, S2 là cảm xúc/kết quả."
    },

    {
        id: 16,
        grammar: "N1 や N2",
        leftContent: {
            image: "",
            text: "春｜花"
        },
        question: "Mẫu N1 や N2",
        options: [
            "春は、桜やチューリップなどの花が咲きます。",
            "春は、桜とやチューリップなどの花が咲きます。",
            "春は、桜やチューリップの花が咲きますや。",
            "春は、桜やチューリップが花です。"
        ],
        correct: "春は、桜やチューリップなどの花が咲きます。",
        explanation: "や dùng để nêu ví dụ không đầy đủ. Thường đi với など."
    },
    {
        id: 17,
        grammar: "N1 や N2",
        leftContent: {
            image: "",
            text: "夏｜場所"
        },
        question: "Mẫu N1 や N2",
        options: [
            "夏は、海や山に行きます。",
            "夏は、海とや山に行きます。",
            "夏は、海や山を行きます。",
            "夏は、海や行きます山。"
        ],
        correct: "夏は、海や山に行きます。",
        explanation: "や nối các danh từ cùng loại. Không dùng とや."
    },
    {
        id: 18,
        grammar: "N1 や N2",
        leftContent: {
            image: "",
            text: "果物｜秋"
        },
        question: "Mẫu N1 や N2",
        options: [
            "秋は、りんごやぶどうがおいしいです。",
            "秋は、りんごとやぶどうがおいしいです。",
            "秋は、りんごやぶどうをおいしいです。",
            "秋は、りんごやがおいしいです。"
        ],
        correct: "秋は、りんごやぶどうがおいしいです。",
        explanation: "や dùng khi đưa ra vài ví dụ tiêu biểu, không liệt kê hết."
    },

    {
        id: 19,
        grammar: "Mẫu N1 とか (N2 とか)",
        leftContent: {
            image: "",
            text: "秋がいちばん好きです。果物がおいしいですよね。(　　　)とか。"
        },
        question: "Mẫu N1 とか (N2 とか)",
        options: [
            "もみじ",
            "ぶどう",
            "ハイキング",
            "うどん",
            "旅行"
        ],
        correct: "ぶどう",
        explanation: "とか dùng để nêu ví dụ. ぶどう là một loại trái cây phù hợp ngữ cảnh."
    },
    {
        id: 20,
        grammar: "N1 とか (N2 とか)",
        leftContent: {
            image: "",
            text: "夏が好きです。休みに、どこか行きたいです。(　　　)とか、(　　　)とか。"
        },
        question: "Mẫu N1 とか (N2 とか)",
        options: [
            "海・山",
            "せみ・ぶどう",
            "休み・山",
            "ぶどう・せみ",
            "山・休み"
        ],
        correct: "海・山",
        explanation: "とか dùng để liệt kê ví dụ. 海 và 山 là địa điểm phù hợp với ngữ cảnh đi chơi."
    },
    {
        id: 21,
        grammar: "N1 とか (N2 とか)",
        leftContent: {
            image: "",
            text: "私は冬がいちばん好きです。(　　　)とか、食べ物がおいしいです。"
        },
        question: "（　　　）に入ることばはどれですか。",
        options: [
            "スケート",
            "寒い",
            "雪",
            "温泉",
            "うどん"
        ],
        correct: "雪",
        explanation: "とか dùng để nêu ví dụ. 雪 là danh từ phù hợp với chủ đề mùa đông."
    }
];
