export const grammarList = [
    {
        id: 1,
        grammar: "Nはどうですか",
        leftContent: {
            image: "",
            text: "",
        },
        question:
            "<br>A: 待ち合わせの時間は、何時にしますか？<br>B: そうですね。（6時半 → ）<br>A: はい、だいじょうぶです。",
        options: [
            "6時半はどうですか？",
            "6時半でもいいですか？",
            "6時半に行きます。",
            "6時半でした。"
        ],
        correct: "6時半はどうですか？",
        explanation: "B đề xuất thời gian bằng mẫu 「Nはどうですか」 → 6時半はどうですか？"
    },
    {
        id: 2,
        grammar: "Nはどうですか",
        leftContent: {
            image: "",
            text: "",
        },
        question: "<br>A: 明日の待ち合わせ、どうしますか？<br>B: （ホテルのロビー → ）<br>A: ロビーですね。",
        options: [
            "ホテルのロビーはどうですか？",
            "ホテルのロビーでもいいですか？",
            "ホテルのロビーに行きます。",
            "ホテルのロビーでした。"
        ],
        correct: "ホテルのロビーはどうですか？",
        explanation: "B đề xuất địa điểm bằng mẫu 「Nはどうですか」 → ホテルのロビーはどうですか？"
    },
    {
        id: 3,
        grammar: "Nはどうですか",
        leftContent: {
            image: "",
            text: "",
        },
        question: "<br>A: 待ち合わせ、何時にしますか？<br>B: そうですね。（14時 → ）<br>A: わかりました。場所は？<br>B: （1階のエレベーターの前 → ）<br>A: はい、だいじょうぶです。",
        options: [
            "14時はどうですか？ / 1階のエレベーターの前はどうですか？",
            "14時でもいいですか？ / 1階のエレベーターの前でもいいですか？",
            "14時に行きます。 / 1階のエレベーターの前に行きます。",
            "14時でした。 / 1階のエレベーターの前でした。"
        ],
        correct: "14時はどうですか？ / 1階のエレベーターの前はどうですか？",
        explanation: "Cả thời gian và địa điểm đều dùng mẫu đề xuất 「Nはどうですか」."
    },

    {
        id: 4,
        grammar: "Nはどうですか",
        leftContent: {
            image: "",
            text: "",
        },
        question: "<br>A: 待ち合わせ、何時にしましょうか。<br>B: じゃあ、（17時 → ）<br>A: 17時ですね。わかりました。",
        options: [
            "17時はどうですか？",
            "17時でもいいですか？",
            "17時に行きます。",
            "17時でした。"
        ],
        correct: "17時はどうですか？",
        explanation: "B đề xuất thời gian gặp bằng mẫu 「Nはどうですか」 → 17時はどうですか？"
    },
    {
        id: 5,
        grammar: "Nでもいいですか",
        leftContent: {
            image: "",
            text: "",
        },
        question: "<br>A: 待ち合わせ、何時にしますか？<br>B: 6時はどうですか？<br>A: すみません、6時は早いです。（7時 → ）<br>B: じゃあ、7時にしましょう。",
        options: [
            "7時でもいいですか？",
            "7時はどうですか？",
            "7時に行きます。",
            "7時でした。"
        ],
        correct: "7時でもいいですか？",
        explanation: "Khi đề xuất phương án thay thế dùng 「Nでもいいですか」 → 7時でもいいですか？"
    },
    {
        id: 6,
        grammar: "Nでもいいですか",
        leftContent: {
            image: "",
            text: "",
        },
        question: "<br>A: 今晩、待ち合わせは「平和の鳥」の像でいいですか？<br>B: すみません、ちょっとわかりません。（博物館の入口 → ）<br>A: ああ、じゃあそうしましょう。",
        options: [
            "博物館の入口でもいいですか？",
            "博物館の入口はどうですか？",
            "博物館の入口に行きます。",
            "博物館の入口でした。"
        ],
        correct: "博物館の入口でもいいですか？",
        explanation: "B không biết địa điểm nên đề xuất địa điểm khác bằng 「Nでもいいですか」."
    },
    {
        id: 7,
        grammar: "Nでもいいですか",
        leftContent: {
            image: "",
            text: "",
        },
        question: "<br>A: 待ち合わせ、どこにしますか。<br>B: 駅の西口はどうですか？<br>A: 西口は不便ですよ。（北口 → ）<br>B: わかりました。北口ですね。",
        options: [
            "北口でもいいですか？",
            "北口はどうですか？",
            "北口に行きます。",
            "北口でした。"
        ],
        correct: "北口でもいいですか？",
        explanation: "Sau khi A nói 西口 không tiện, B đề xuất phương án khác bằng 「Nでもいいですか」."
    },
    {
        id: 8,
        grammar: "Nでもいいですか",
        leftContent: {
            image: "",
            text: "",
        },
        question: "<br>A: 明日の飲み会は、8時に始めましょう。<br>B: 8時は遅いですよ。（6時 → ）<br>C: 6時は早いですね。（7時 → ）<br>A: じゃあ、7時にしましょう。",
        options: [
            "6時でもいいですか。7時でもいいですか。",
            "6時はどうですか。7時でもいいですか。",
            "6時に行きます。7時はどうですか。",
            "6時でした。7時でした。"
        ],
        correct: "6時はどうですか。7時でもいいですか。",
        explanation: "B đề xuất thời gian mới → 「6時はどうですか」。C thấy 6 giờ sớm nên đề xuất phương án khác → 「7時でもいいですか」。"
    },
    {
        id: 9,
        grammar: "Nで / V-て",
        leftContent: {
            image: "",
            text: "渋滞",
        },
        question: "（　　　）、少し遅れます。",
        options: [
            "渋滞で",
            "渋滞に",
            "渋滞が",
            "渋滞は"
        ],
        correct: "渋滞で",
        explanation: "Danh từ + で diễn tả nguyên nhân → 渋滞で、少し遅れます。"
    },
    {
        id: 10,
        grammar: "Nで / V-て",
        leftContent: {
            image: "",
            text: "事故",
        },
        question: "（　　　）、電車が止まりました。",
        options: [
            "事故で",
            "事故に",
            "事故が",
            "事故は"
        ],
        correct: "事故で",
        explanation: "Danh từ + で diễn tả nguyên nhân → 事故で、電車が止まりました。"
    },
    {
        id: 11,
        grammar: "Nで / V-て",
        leftContent: {
            image: "",
            text: "寝坊する",
        },
        question: "（　　　）、今、起きました。",
        options: [
            "寝坊して",
            "寝坊で",
            "寝坊に",
            "寝坊が"
        ],
        correct: "寝坊して",
        explanation: "Động từ thể て diễn tả nguyên nhân → 寝坊して、今起きました。"
    },
    {
        id: 12,
        grammar: "Nで / V-て",
        leftContent: {
            image: "",
            text: "台風",
        },
        question: "（　　　）、学校が休みになりました。",
        options: [
            "台風で",
            "台風に",
            "台風が",
            "台風は"
        ],
        correct: "台風で",
        explanation: "Danh từ + で diễn tả nguyên nhân → 台風で、学校が休みになりました。"
    }
];
