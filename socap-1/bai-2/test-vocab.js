import { vocabList } from "./data/vocab-bai-2.js";
import { addEvents, initToggleNav } from "../assets/js/test-common.js";

const quizEl = document.getElementById("quiz");
const navEl = document.getElementById("questionNav");


function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function renderQuiz() {

  quizEl.innerHTML = "";
  navEl.innerHTML = "";

  vocabList.forEach((item, index) => {

    const wrong = shuffle(
      vocabList.filter(v => v.vi !== item.vi)
    ).slice(0, 3).map(v => v.vi);

    const answers = shuffle([item.vi, ...wrong]);

    const card = document.createElement("div");
    card.className = "question-card";
    card.id = "q" + index;

    card.innerHTML = `
      <div class="question-title">
        <span class="question-number">第 ${index + 1}</span>
        「${item.jp}（${item.hira}）」の意味は何ですか。
      </div>

      <div class="answers">
        ${answers.map(a => `
          <button data-correct="${a === item.vi}">
            ${a}
          </button>
        `).join("")}
      </div>
    `;

    quizEl.appendChild(card);

    const buttons = card.querySelectorAll("button");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
      });
    });

    const navBtn = document.createElement("button");
    navBtn.textContent = index + 1;
    navEl.appendChild(navBtn);
  });

  initToggleNav(20);

  addEvents();
}

renderQuiz();
