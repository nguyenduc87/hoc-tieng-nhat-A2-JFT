import { kanjiList } from "./data/kanji-bai-2.js";
import { addEvents, initToggleNav } from "../assets/js/test-common.js";

const quizEl = document.getElementById("quiz");
const navEl = document.getElementById("questionNav");


function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function createCard(index, questionText, answers, correctAnswer) {

  const card = document.createElement("div");
  card.className = "question-card";
  card.id = "q" + index;

  card.innerHTML = `
    <div class="question-title">
      <span class="question-number">第 ${index + 1}</span>
      ${questionText}
    </div>

    <div class="answers">
      ${answers.map(a => `
        <button data-correct="${a === correctAnswer}">
          ${a}
        </button>
      `).join("")}
    </div>
  `;

  quizEl.appendChild(card);

  const navBtn = document.createElement("button");
  navBtn.textContent = index + 1;
  navEl.appendChild(navBtn);
}

function renderQuiz() {

  quizEl.innerHTML = "";
  navEl.innerHTML = "";

  const hiraQuestions = kanjiList.slice(0, 10); // lấy 10 câu đầu

  // ===== PHẦN 1: Kanji → Hira (cũ) =====
  kanjiList.forEach((item, index) => {

    const wrong = shuffle(
      kanjiList.filter(k => k.furi !== item.furi)
    ).slice(0, 3).map(k => k.furi);

    const answers = shuffle([item.furi, ...wrong]);

    createCard(
      index,
      `「${item.kanji}」の読み方は何ですか。`,
      answers,
      item.furi
    );
  });

  // ===== PHẦN 2: Hira → Kanji (mới 10 câu) =====
  hiraQuestions.forEach((item, i) => {

    const realIndex = kanjiList.length + i;

    const wrong = shuffle(
      kanjiList.filter(k => k.kanji !== item.kanji)
    ).slice(0, 3).map(k => k.kanji);

    const answers = shuffle([item.kanji, ...wrong]);

    createCard(
      realIndex,
      `「${item.furi}」の漢字はどれですか。`,
      answers,
      item.kanji
    );
  });

  initToggleNav(20);

  addEvents();
}

renderQuiz();
