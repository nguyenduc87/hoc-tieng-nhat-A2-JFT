const data = [
    {
        auto: "開く（あく）",
        trans: "開ける（あける）",
        vi: "mở",
        exAuto: "ドアが開きます",
        exAutoVi: "Cửa tự mở",
        exTrans: "ドアを開けます",
        exTransVi: "Mở cửa"
    },
    {
        auto: "閉まる（しまる）",
        trans: "閉める（しめる）",
        vi: "đóng",
        exAuto: "ドアが閉まります",
        exAutoVi: "Cửa tự đóng",
        exTrans: "ドアを閉めます",
        exTransVi: "Đóng cửa"
    },
    {
        auto: "つく",
        trans: "つける",
        vi: "bật",
        exAuto: "電気がつきました",
        exAutoVi: "Đèn tự bật",
        exTrans: "電気をつけました",
        exTransVi: "Bật đèn"
    },
    {
        auto: "消える（きえる）",
        trans: "消す（けす）",
        vi: "tắt",
        exAuto: "電気が消えました",
        exAutoVi: "Đèn tự tắt",
        exTrans: "電気を消しました",
        exTransVi: "Tắt đèn"
    },
    {
        auto: "始まる（はじまる）",
        trans: "始める（はじめる）",
        vi: "bắt đầu",
        exAuto: "授業が始まります",
        exAutoVi: "Buổi học bắt đầu",
        exTrans: "授業を始めます",
        exTransVi: "Bắt đầu buổi học"
    },
    {
        auto: "終わる（おわる）",
        trans: "終える（おえる）",
        vi: "kết thúc",
        exAuto: "仕事が終わりました",
        exAutoVi: "Công việc kết thúc",
        exTrans: "仕事を終えました",
        exTransVi: "Hoàn thành công việc"
    },
    {
        auto: "入る（はいる）",
        trans: "入れる（いれる）",
        vi: "vào / cho vào",
        exAuto: "人が部屋に入りました",
        exAutoVi: "Người vào phòng",
        exTrans: "水をコップに入れます",
        exTransVi: "Cho nước vào cốc"
    },
    {
        auto: "出る（でる）",
        trans: "出す（だす）",
        vi: "ra / lấy ra",
        exAuto: "学生が教室から出ました",
        exAutoVi: "Học sinh ra khỏi lớp",
        exTrans: "かばんから本を出します",
        exTransVi: "Lấy sách ra khỏi cặp"
    },
    {
        auto: "止まる（とまる）",
        trans: "止める（とめる）",
        vi: "dừng",
        exAuto: "バスが止まりました",
        exAutoVi: "Xe buýt dừng lại",
        exTrans: "車を止めます",
        exTransVi: "Dừng xe"
    },
    {
        auto: "落ちる（おちる）",
        trans: "落とす（おとす）",
        vi: "rơi / làm rơi",
        exAuto: "りんごが落ちました",
        exAutoVi: "Táo rơi",
        exTrans: "りんごを落としました",
        exTransVi: "Làm rơi táo"
    }
];

const tbody = document.getElementById("table-body");

function render() {
    tbody.innerHTML = "";

    data.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
      <td class="auto">${item.auto}</td>
      <td class="trans">${item.trans}</td>
      <td class="vi">${item.vi}</td>
    `;

        tbody.appendChild(row);
    });
}

let show = true;
function toggleMeaning() {
    show = !show;
    document.querySelectorAll(".vi").forEach(el => {
        el.style.display = show ? "table-cell" : "none";
    });
}

render();

// Tạo quiz
function generateQuiz() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";

    const shuffled = [...data].sort(() => 0.5 - Math.random()).slice(0, 10);

    shuffled.forEach((item, index) => {
        const isAuto = Math.random() > 0.5;
        const question = isAuto ? item.auto : item.trans;
        const correctType = isAuto ? "auto" : "trans";

        // tạo 3 đáp án nghĩa (1 đúng + 2 sai)
        const meanings = [item.vi];
        while (meanings.length < 3) {
            const random = data[Math.floor(Math.random() * data.length)].vi;
            if (!meanings.includes(random)) meanings.push(random);
        }

        meanings.sort(() => 0.5 - Math.random());

        const div = document.createElement("div");
        div.className = "quiz-item";

        div.innerHTML = `
            <div class="card">
                <div class="question">
                <b>${index + 1}. ${question}</b>
                </div>

                <!-- chọn loại -->
                <div class="btn-group type-group" data-q="${index}">
                <button data-value="auto">Tự động từ</button>
                <button data-value="trans">Tha động từ</button>
                </div>

                <!-- chọn nghĩa -->
                <div class="btn-group mean-group" data-q="${index}">
                ${meanings.map(m => `
                    <button data-value="${m}">${m}</button>
                `).join("")}
                </div>

                <!-- ví dụ -->
                <div class="example">
                    <p>🟢Tự:  ${item.exAuto}（${item.exAutoVi}）</p>
                    <p>🟠Tha:  ${item.exTrans}（${item.exTransVi}）</p>
                </div>

                <input type="hidden" id="typeAns${index}" value="${correctType}">
                <input type="hidden" id="meanAns${index}" value="${item.vi}">

                <div class="explain" id="exp${index}"></div>
            </div>
        `;

        quizDiv.appendChild(div);
    });
}

function submitQuiz() {
    let score = 0;

    for (let i = 0; i < 10; i++) {
        const typeAns = document.getElementById(`typeAns${i}`).value;
        const meanAns = document.getElementById(`meanAns${i}`).value;

        // lấy button đã chọn
        const typeUser = document.querySelector(
            `.type-group[data-q="${i}"] .active`
        );

        const meanUser = document.querySelector(
            `.mean-group[data-q="${i}"] .active`
        );

        const exp = document.getElementById(`exp${i}`);

        let correct = true;

        // chưa chọn
        if (!typeUser || !meanUser) {
            exp.innerHTML = "⚠️ Bạn chưa chọn đủ đáp án";
            exp.className = "explain wrong";
            continue;
        }

        // check đúng sai
        if (typeUser.dataset.value !== typeAns) correct = false;
        if (meanUser.dataset.value !== meanAns) correct = false;

        if (correct) {
            score++;
            exp.innerHTML = "✅ Đúng";
            exp.className = "explain correct";
        } else {
            exp.innerHTML = `
                ❌ Sai <br>
                → Loại đúng: ${typeAns === "auto" ? "Tự động từ" : "Tha động từ"}<br>
                → Nghĩa: ${meanAns}
            `;
            exp.className = "explain wrong";
        }
    }

    document.getElementById("result").innerText =
        `🎯 Bạn đúng ${score}/10 câu`;
}


document.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON" && e.target.dataset.value) {
        const group = e.target.parentElement;

        group.querySelectorAll("button").forEach(btn =>
            btn.classList.remove("active")
        );

        e.target.classList.add("active");
    }
});

// load
generateQuiz();
