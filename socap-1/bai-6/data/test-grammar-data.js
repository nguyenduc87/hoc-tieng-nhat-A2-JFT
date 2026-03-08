export const grammarList = [
    {
        id: 1,
        grammar: "Nで、ナAで、イAくて",
        leftContent: {
            image: "",
            text: "人が多い｜にぎやか(な)",
        },
        question: "どうですか？この町は",
        options: [
            "人が多くて、にぎやかです。",
            "人が多いで、にぎやかです。",
            "人が多くて、にぎやかで。",
            "人が多いくて、にぎやかです。"
        ],
        correct: "人が多くて、にぎやかです。",
        explanation: "イ形容詞「多い」→ 多くて. ナ形容詞「にぎやか」→ にぎやかです。→ 人が多くて、にぎやかです。"
    },
    {
        id: 2,
        grammar: "Nで、ナAで、イAくて",
        leftContent: {
            image: "",
            text: "人が親切(な)｜住みやすい",
        },
        question: "どうですか？この町は",
        options: [
            "人が親切で、住みやすいです。",
            "人が親切くて、住みやすいです。",
            "人が親切に、住みやすいです。",
            "人が親切で、住みやすくです。"
        ],
        correct: "人が親切で、住みやすいです。",
        explanation: "ナ形容詞「親切」→ 親切で. イ形容詞「住みやすい」 giữ nguyên trước です。→ 人が親切で、住みやすいです。"
    },
    {
        id: 3,
        grammar: "Nで、ナAで、イAくて",
        leftContent: {
            image: "",
            text: "暑い｜大変(な)",
        },
        question: "どうですか？この町は",
        options: [
            "暑くて、大変です。",
            "暑いで、大変です。",
            "暑くて、大変で。",
            "暑いて、大変です。"
        ],
        correct: "暑くて、大変です。",
        explanation: "イ形容詞「暑い」→ 暑くて. ナ形容詞「大変」→ 大変です。→ 暑くて、大変です。"
    },

    {
        id: 4,
        grammar: "～て／～くて",
        leftContent: {
            image: "",
            text: "古い｜きたない",
        },
        question: "この建物はどうですか。",
        options: [
            "この建物は、古くて、きたないです。",
            "この建物は、古いで、きたないです。",
            "この建物は、古くて、きたないくてです。",
            "この建物は、古いくて、きたないです。"
        ],
        correct: "この建物は、古くて、きたないです。",
        explanation: "イ形容詞 nối với くて để liệt kê tính chất → 古い → 古くて. → この建物は、古くて、きたないです。"
    },
    {
        id: 5,
        grammar: "～けど",
        leftContent: {
            image: "",
            text: "古い｜きれい(な)",
        },
        question: "この建物はどうですか。",
        options: [
            "この建物は、古いけど、きれいです。",
            "この建物は、古くて、きれいです。",
            "この建物は、古いで、きれいです。",
            "この建物は、古いけど、きれいなです。"
        ],
        correct: "この建物は、古いけど、きれいです。",
        explanation: "「けど」 dùng để nối hai ý có sắc thái đối lập. → この建物は、古いけど、きれいです。"
    },
    {
        id: 6,
        grammar: "～て／～くて",
        leftContent: {
            image: "",
            text: "小さい｜有名(な)",
        },
        question: "この商店街はどうですか。",
        options: [
            "この商店街は、小さくて、有名です。",
            "この商店街は、小さいで、有名です。",
            "この商店街は、小さくて、有名なです。",
            "この商店街は、小さいくて、有名です。"
        ],
        correct: "この商店街は、小さくて、有名です。",
        explanation: "イ形容詞 → くて (小さい → 小さくて). ナ形容詞 bỏ な khi đứng trước です → 有名です。"
    },

    {
        id: 7,
        grammar: "～けど",
        leftContent: {
            image: "",
            text: "ちょっと高い｜おしゃれ(な)",
        },
        question: "あの店はどうですか。",
        options: [
            "あの店は、ちょっと高いけど、おしゃれです。",
            "あの店は、ちょっと高くて、おしゃれです。",
            "あの店は、ちょっと高いで、おしゃれです。",
            "あの店は、ちょっと高いけど、おしゃれなです。"
        ],
        correct: "あの店は、ちょっと高いけど、おしゃれです。",
        explanation: "「けど」 nối hai ý có sắc thái hơi trái nhau (đắt nhưng đẹp). → あの店は、ちょっと高いけど、おしゃれです。"
    },
    {
        id: 8,
        grammar: "Vることができます",
        leftContent: {
            image: "../images/grammar/yokohama.png",
            text: "横浜では、",
        },
        question: "横浜では、何ができますか。",
        options: [
            "船に乗ることができます。",
            "船に乗りますことができます。",
            "船を乗ることができます。",
            "船に乗るできます。"
        ],
        correct: "船に乗ることができます。",
        explanation: "V辞書形 + ことができます dùng để nói khả năng có thể làm. → 横浜では、船に乗ることができます。"
    },
    {
        id: 9,
        grammar: "Vることができます",
        leftContent: {
            image: "../images/grammar/tenboudai.png",
            text: "ビルの展望台から、",
        },
        question: "ビルの展望台（てんぼうだい）から、何ができますか。",
        options: [
            "町を見渡すことができます。",
            "町が見渡すことができます。",
            "町を見渡しますことができます。",
            "町を見渡すできます。"
        ],
        correct: "町を見渡すことができます。",
        explanation: "見渡す nghĩa là nhìn bao quát toàn cảnh. Mẫu: Vる + ことができます → ビルの展望台から、町を見渡すことができます。"
    },
    {
        id: 10,
        grammar: "Vることができます",
        leftContent: {
            image: "../images/grammar/rotenfuro.png",
            text: "この温泉では、",
        },
        question: "この温泉では、何ができますか。",
        options: [
            "露天風呂（ろてんぶろ）に入ることができます。",
            "露天風呂（ろてんぶろ）を入ることができます。",
            "露天風呂（ろてんぶろ）に入りますことができます。",
            "露天風呂（ろてんぶろ）に入るできます。"
        ],
        correct: "露天風呂（ろてんぶろ）に入ることができます。",
        explanation: "V辞書形 + ことができます diễn tả có thể làm. → この温泉では、露天風呂に入ることができます。"
    },
];
