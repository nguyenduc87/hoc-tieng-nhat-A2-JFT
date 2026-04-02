const data = [
    { auto: "開く（あく）", trans: "開ける（あける）", vi: "mở" },
    { auto: "閉まる（しまる）", trans: "閉める（しめる）", vi: "đóng" },
    { auto: "つく", trans: "つける", vi: "bật" },
    { auto: "消える（きえる）", trans: "消す（けす）", vi: "tắt" },
    { auto: "始まる（はじまる）", trans: "始める（はじめる）", vi: "bắt đầu" },
    { auto: "終わる（おわる）", trans: "終える（おえる）", vi: "kết thúc" },
    { auto: "入る（はいる）", trans: "入れる（いれる）", vi: "vào / cho vào" },
    { auto: "出る（でる）", trans: "出す（だす）", vi: "ra / lấy ra" },
    { auto: "止まる（とまる）", trans: "止める（とめる）", vi: "dừng" },
    { auto: "落ちる（おちる）", trans: "落とす（おとす）", vi: "rơi / làm rơi" }
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
      <p><b>${index + 1}. ${question}</b></p>

      <!-- chọn loại -->
      <label><input type="radio" name="type${index}" value="auto">Tự động từ</label>
      <label><input type="radio" name="type${index}" value="trans">Tha động từ</label>

      <br>

      <!-- chọn nghĩa -->
      ${meanings.map(m => `
        <label>
          <input type="radio" name="mean${index}" value="${m}">
          ${m}
        </label>
      `).join("")}

      <input type="hidden" id="typeAns${index}" value="${correctType}">
      <input type="hidden" id="meanAns${index}" value="${item.vi}">

      <div class="explain" id="exp${index}"></div>
    `;

        quizDiv.appendChild(div);
    });
}

function submitQuiz() {
    let score = 0;

    for (let i = 0; i < 10; i++) {
        const typeAns = document.getElementById(`typeAns${i}`).value;
        const meanAns = document.getElementById(`meanAns${i}`).value;

        const typeUser = document.querySelector(`input[name="type${i}"]:checked`);
        const meanUser = document.querySelector(`input[name="mean${i}"]:checked`);

        let correct = true;

        if (!typeUser || typeUser.value !== typeAns) correct = false;
        if (!meanUser || meanUser.value !== meanAns) correct = false;

        const exp = document.getElementById(`exp${i}`);

        if (correct) {
            score++;
            exp.innerHTML = `✅ Đúng`;
            exp.className = "explain correct";
        } else {
            exp.innerHTML = `
        ❌ Sai → ${typeAns === "auto" ? "Tự động từ" : "Tha động từ"} | Nghĩa: ${meanAns}
      `;
            exp.className = "explain wrong";
        }
    }

    document.getElementById("result").innerText =
        `🎯 Bạn đúng ${score}/10 câu`;

}

// load
generateQuiz();
