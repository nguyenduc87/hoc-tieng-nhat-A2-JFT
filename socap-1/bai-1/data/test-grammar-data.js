export const grammarList = [
    {
        id: 1,
        grammar: "Kiểu lịch sự / thông thường。",
        leftContent: {
            image: "../images/grammar/senpai-kohai.png",
            text: "（お久しぶりです／久しぶり）"
        },
        question: "Hãy chọn đáp án phù hợp theo ảnh",
        options: [
            "お久しぶりです。",
            "お久しぶり。",
            "久しぶり。",
            "お久しぶり？"
        ],
        correct: "お久しぶりです。",
        explanation: "Kiểu lịch sự có お久しぶりです là phù hợp."
    },
    {
        id: 2,
        grammar: "Kiểu lịch sự / thông thường。",
        leftContent: {
            image: "../images/grammar/tren-duoi.png",
            text: "（お元気ですか？／元気？）"
        },
        question: "Hãy chọn đáp án phù hợp theo ảnh.",
        options: [
            "元気じゃないです。",
            "元気です。",
            "元気？",
            "お元気ですか？"
        ],
        correct: "お元気ですか？",
        explanation: "Kiểu lịch sự có お元気ですか？là phù hợp."
    },
    {
        id: 3,
        grammar: "Kiểu lịch sự / thông thường。",
        leftContent: {
            image: "../images/grammar/banbe.png",
            text: "（おはようございます／おはよう）"
        },
        question: "Hãy chọn đáp án phù hợp theo ảnh.",
        options: [
            "おはようございます。",
            "おはよう",
            "どうも　おはようございます。",
            "おはようございますです。"
        ],
        correct: "おはよう",
        explanation: "Bạn bè chỉ cần nói ngắn おはよう"
    },
    {
        id: 4,
        grammar: "Kiểu lịch sự / thông thường。",
        leftContent: {
            image: "",
            text: "コーヒー、飲む？→"

        },
        question: "Chuyển sang kiểu lịch sự.",
        options: [
            "コーヒー、飲みますか。",
            "コーヒー、飲みますです。",
            "コーヒー、飲むか。",
            "コーヒー、飲んで。"
        ],
        correct: "コーヒー、飲みますか。",
        explanation: "V thể từ điển ➡ V-ます。"
    },
    {
        id: 5,
        grammar: "Kiểu lịch sự / thông thường。",
        leftContent: {
            image: "",
            text: "となりのつくえ、かたづけて→"

        },
        question: "Chuyển sang kiểu lịch sự.",
        options: [
            "となりのつくえ、かたづけています。",
            "となりのつくえ、かたづけます。",
            "となりのつくえ、かたづける。",
            "となりのつくえ、かたづけてください。"
        ],
        correct: "となりのつくえ、かたづけてください。",
        explanation: "Vて nghĩa là yêu cầu nhờ vả nên ➡Vてください。"
    },
    {
        id: 6,
        grammar: "【Khoảng thời gian】になります。",
        leftContent: {
            image: "",
            text: "日本に来て、（1年2ヶ月）→"

        },
        question: "Hãy nói khoảng thời gian dùng になります.",
        options: [
            "日本に来て、1年2ヶ月です。",
            "日本に来て、1年2ヶ月なります。",
            "日本に来て、1年2ヶ月になります。",
            "日本に来ます、1年2ヶ月になります。"
        ],
        correct: "日本に来て、1年2ヶ月になります。",
        explanation: "V thể て、【thời gian】 + になります。"
    },
    {
        id: 7,
        grammar: "【Khoảng thời gian】になります。",
        leftContent: {
            image: "",
            text: "仕事を始めて、（4年）→"
        },
        question: "Hãy nói khoảng thời gian dùng になります.",
        options: [
            "仕事を始めて、4年です。",
            "仕事を始めて、4年なります。",
            "仕事を始めて、4年になります。",
            "仕事を始めます、4年になります。"
        ],
        correct: "仕事を始めて、4年になります。",
        explanation: "V thể て + 【thời gian】になります。"
    },
    {
        id: 8,
        grammar: "【Khoảng thời gian】になります。",
        leftContent: {
            image: "",
            text: "ここで働いて、（6ヶ月）→"
        },
        question: "Hãy nói khoảng thời gian dùng になります.",
        options: [
            "ここで働いて、6ヶ月です。",
            "ここで働いて、6ヶ月なります。",
            "ここで働いて、6ヶ月になります。",
            "ここで働きます、6ヶ月になります。"
        ],
        correct: "ここで働いて、6ヶ月になります。",
        explanation: "V thể て + 【thời gian】になります。"
    },
    {
        id: 9,
        grammar: "【Khoảng thời gian】になります。",
        leftContent: {
            image: "",
            text: "東京に住んで、ちょうど（2年）→"
        },
        question: "Hãy nói khoảng thời gian dùng になります.",
        options: [
            "東京に住んで、ちょうど2年です。",
            "東京に住んで、ちょうど2年なります。",
            "東京に住んで、ちょうど2年になります。",
            "東京に住みます、ちょうど2年になります。"
        ],
        correct: "東京に住んで、ちょうど2年になります。",
        explanation: "V thể て + 【thời gian】になります。"
    },
    {
        id: 10,
        grammar: "【Thời điểm】に来ました。",
        leftContent: {
            image: "",
            text: "日本に（2022年4月）→"
        },
        question: "Hãy dùng 【thời điểm】に来ました。",
        options: [
            "日本に2022年4月来ました。",
            "日本に2022年4月に来ました。",
            "日本へ2022年4月を来ました。",
            "日本に2022年4月で来ました。"
        ],
        correct: "日本に2022年4月に来ました。",
        explanation: "Danh từ chỉ thời điểm + に + 来ました。"
    },
    {
        id: 11,
        grammar: "【Thời điểm】に来ました。",
        leftContent: {
            image: "",
            text: "東京に（先週）→"
        },
        question: "Hãy dùng 【thời điểm】に来ました。",
        options: [
            "東京に先週来ました。",
            "東京に先週に来ました。",
            "東京へ先週を来ました。",
            "東京に先週で来ました。"
        ],
        correct: "東京に先週来ました。",
        explanation: "Với một số từ như 先週, きのう, hôm nay... không cần に."
    },
    {
        id: 12,
        grammar: "【Thời điểm】に来ました。",
        leftContent: {
            image: "",
            text: "大阪に（先週の土曜日）→"
        },
        question: "Hãy dùng 【thời điểm】に来ました。",
        options: [
            "大阪に先週の土曜日来ました。",
            "大阪に先週の土曜日に来ました。",
            "大阪へ先週の土曜日を来ました。",
            "大阪に先週の土曜日で来ました。"
        ],
        correct: "大阪に先週の土曜日に来ました。",
        explanation: "Ngày tháng cụ thể bắt buộc dùng に."
    },
    {
        id: 13,
        grammar: "Vています。",
        leftContent: {
            image: "../images/grammar/kojo.png",
            text: "（工場で働く）→"
        },
        question: "Hãy dùng Vています。",
        options: [
            "工場で働きます。",
            "工場で働いています。",
            "工場で働いました。",
            "工場で働いていますか。"
        ],
        correct: "工場で働いています。",
        explanation: "Động từ thể て + います → diễn tả hành động đang diễn ra."
    },
    {
        id: 14,
        grammar: "Vています。",
        leftContent: {
            image: "../images/grammar/kensetu.png",
            text: "（建設の仕事をする）→"
        },
        question: "Hãy dùng Vています。",
        options: [
            "建設の仕事をします。",
            "建設の仕事をしています。",
            "建設の仕事をしました。",
            "建設の仕事をしていましたか。"
        ],
        correct: "建設の仕事をしています。",
        explanation: "する → して + います → しています。"
    },
    {
        id: 15,
        grammar: "Vています。",
        leftContent: {
            image: "../images/grammar/kaigo.png",
            text: "（介護の仕事をする）→"
        },
        question: "Hãy dùng Vています。",
        options: [
            "介護の仕事をします。",
            "介護の仕事をしています。",
            "介護の仕事をしたいます。",
            "介護の仕事をしていました。"
        ],
        correct: "介護の仕事をしています。",
        explanation: "する → しています。 Dùng để nói nghề nghiệp hiện tại."
    },
    {
        id: 16,
        grammar: "Vています。",
        leftContent: {
            image: "../images/grammar/yasai.png",
            text: "（野菜を作る）→"
        },
        question: "Hãy dùng Vています。",
        options: [
            "野菜を作ります。",
            "野菜を作っています。",
            "野菜を作りました。",
            "野菜を作っていましたか。"
        ],
        correct: "野菜を作っています。",
        explanation: "作る → 作って + います → 作っています。"
    }
];
