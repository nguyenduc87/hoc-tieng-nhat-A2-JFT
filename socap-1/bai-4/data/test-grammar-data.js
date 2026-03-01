export const grammarList = [
    {
        id: 1,
        grammar: "S ね（đồng cảm）",
        leftContent: {
            image: "",
            text: "Câu nào thích hợp dùng ね thể hiện đồng cảm",
        },
        question: "S ね",
        options: [
            "今日も蒸し暑いですね。",
            "私の国には、雨期と乾期がありますね。",
            "毎日、雨がよく降りますね。",
            "はじめて雪を見ましたね。"
        ],
        correct: "今日も蒸し暑いですね。",
        explanation: "「ね」 dùng khi người nói mong người nghe cùng chia sẻ cảm xúc hoặc cảm nhận chung. Câu về thời tiết hiện tại dễ tạo sự đồng cảm → 今日も蒸し暑いですね。"
    },
    {
        id: 2,
        grammar: "S ね（đồng cảm）",
        leftContent: {
            image: "",
            text: "Câu nào thích hợp dùng ね thể hiện đồng cảm",
        },
        question: "S ね",
        options: [
            "わあ、もみじがきれいですね。",
            "私の国の冬は、マイナス40度になりますね。",
            "毎日、雨がよく降りますね。",
            "台風が来ましたね。"
        ],
        correct: "わあ、もみじがきれいですね。",
        explanation: "「ね」 dùng khi bày tỏ cảm xúc và mong người nghe cùng chia sẻ. Câu cảm thán trước cảnh đẹp rất tự nhiên khi dùng ね。"
    },
    {
        id: 3,
        grammar: "S ね（đồng cảm）",
        leftContent: {
            image: "",
            text: "Câu nào thích hợp dùng ね thể hiện đồng cảm",
        },
        question: "S ね",
        options: [
            "昨日の雨、すごかったですね。",
            "私の国には、雨期と乾期がありますね。",
            "毎日、雨がよく降りますね。",
            "はじめて雪を見ましたね。"
        ],
        correct: "昨日の雨、すごかったですね。",
        explanation: "Khi nói về trải nghiệm chung (ví dụ cơn mưa hôm qua), dùng ね để xác nhận và chia sẻ cảm xúc với người nghe."
    },

    {
        id: 4,
        grammar: "Phi quá khứ / Quá khứ",
        leftContent: {
            image: "",
            text: "昨日はとても（寒い）→"
        },
        question: "Chọn dạng đúng (phi quá khứ / quá khứ)",
        options: [
            "寒いです",
            "寒かったです",
            "寒くです",
            "寒いでした"
        ],
        correct: "寒かったです",
        explanation: "いA quá khứ: bỏ い + かったです → 寒い → 寒かったです。Vì có 昨日 nên dùng quá khứ."
    },
    {
        id: 5,
        grammar: "Phi quá khứ / Quá khứ",
        leftContent: {
            image: "",
            text: "北海道に行きました。（すずしい）→"
        },
        question: "Chọn dạng đúng (phi quá khứ / quá khứ)",
        options: [
            "すずしい",
            "すずしかったです",
            "すずしくなります",
            "すずしいでした"
        ],
        correct: "すずしかったです",
        explanation: "Tính từ い quá khứ: bỏ い thêm かった. Vì có 行きました là quá khứ。"
    },
    {
        id: 6,
        grammar: "Phi quá khứ / Quá khứ",
        leftContent: {
            image: "",
            text: "この公園は、春のチューリップが（有名な）→"
        },
        question: "Chọn dạng đúng (phi quá khứ / quá khứ)",
        options: [
            "有名です",
            "有名でした",
            "有名なです",
            "有名なでした"
        ],
        correct: "有名です",
        explanation: "ナA hiện tại: ナA + です. Câu diễn tả sự thật chung nên dùng 有名です。"
    },

    {
        id: 7,
        grammar: "V-て います",
        leftContent: {
            image: "",
            text: "雨が降る →"
        },
        question: "V-て います (diễn tả hiện tượng đang xảy ra)",
        options: [
            "降っています",
            "降ります",
            "降りました",
            "降っていました"
        ],
        correct: "降っています",
        explanation: "Động từ nhóm 1: 降る → 降って + います → 降っています (mưa đang rơi)."
    },
    {
        id: 8,
        grammar: "V-て います",
        leftContent: {
            image: "",
            text: "風が吹く →"
        },
        question: "V-て います (diễn tả hiện tượng đang xảy ra)",
        options: [
            "吹いています",
            "吹きます",
            "吹きました",
            "吹っています"
        ],
        correct: "吹いています",
        explanation: "吹く → 吹いて + います → 吹いています (gió đang thổi)."
    },
    {
        id: 9,
        grammar: "V-て います",
        leftContent: {
            image: "",
            text: "雪が降る →"
        },
        question: "V-て います (diễn tả hiện tượng đang xảy ra)",
        options: [
            "降っています",
            "降ります",
            "降りました",
            "降っていました"
        ],
        correct: "降っています",
        explanation: "降る → 降って + います → 降っています (tuyết đang rơi)."
    },

    {
        id: 10,
        grammar: "V-て います",
        leftContent: {
            image: "",
            text: "雷が鳴る →"
        },
        question: "V-て います (diễn tả hiện tượng đang xảy ra)",
        options: [
            "鳴っています",
            "鳴ります",
            "鳴りました",
            "鳴っていました"
        ],
        correct: "鳴っています",
        explanation: "鳴る → 鳴って + います → 鳴っています (sấm đang kêu)."
    },
    {
        id: 11,
        grammar: "V-て います",
        leftContent: {
            image: "",
            text: "晴れる →"
        },
        question: "V-て います (diễn tả hiện tượng đang xảy ra)",
        options: [
            "晴れています",
            "晴れます",
            "晴れました",
            "晴っています"
        ],
        correct: "晴れています",
        explanation: "晴れる (nhóm 2) → 晴れて + います → 晴れています (trời đang nắng/quang)."
    },
    {
        id: 12,
        grammar: "N / ナA / イA / Vる + でしょう",
        leftContent: {
            image: "",
            text: "ゴールデンウィークは、にぎやかです。→"
        },
        question: "Chọn dạng đúng với でしょう (ナA)",
        options: [
            "にぎやかでしょう",
            "にぎやかだでしょう",
            "にぎやかですでしょう",
            "にぎやかでしたでしょう"
        ],
        correct: "にぎやかでしょう",
        explanation: "ナA bỏ です → ナA + でしょう。"
    },

    {
        id: 13,
        grammar: "N / ナA / イA / Vる + でしょう",
        leftContent: {
            image: "",
            text: "７月は、蒸し暑いです。→"
        },
        question: "Chọn dạng đúng với でしょう (イA)",
        options: [
            "蒸し暑いでしょう",
            "蒸し暑でしょう",
            "蒸し暑いだでしょう",
            "蒸し暑かったでしょう"
        ],
        correct: "蒸し暑いでしょう",
        explanation: "イA giữ nguyên + でしょう。"
    },
    {
        id: 14,
        grammar: "N / ナA / イA / Vる + でしょう",
        leftContent: {
            image: "",
            text: "今週は、ずっといい天気です。→"
        },
        question: "Chọn dạng đúng với でしょう (N)",
        options: [
            "いい天気でしょう",
            "いい天気だでしょう",
            "いい天気ですでしょう",
            "いい天気でしたでしょう"
        ],
        correct: "いい天気でしょう",
        explanation: "Danh từ bỏ です → N + でしょう。"
    },
    {
        id: 15,
        grammar: "N / ナA / イA / Vる + でしょう",
        leftContent: {
            image: "",
            text: "午後から、強い雨が降ります。→"
        },
        question: "Chọn dạng đúng với でしょう (Vる)",
        options: [
            "降るでしょう",
            "降りますでしょう",
            "降ったでしょう",
            "降りでしょう"
        ],
        correct: "降るでしょう",
        explanation: "Động từ thể từ điển (Vる) + でしょう。"
    },

    
];
