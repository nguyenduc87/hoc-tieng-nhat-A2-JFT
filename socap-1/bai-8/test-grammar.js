import { grammarList } from "./data/test-grammar-data.js";
import { addEvents, initToggleNav } from "../assets/js/test-common.js";

const quizEl = document.getElementById("quiz");
const navEl = document.getElementById("questionNav");

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

// Tô màu chữ đỏ
function highlight(text) {
    return text.replace(/「(.*?)」/g, '<span class="red-text">$1</span>');
}
// Phiên âm hira trên kanji
function addHira(text) {
  return text.replace(
    /([\p{Script=Han}々〆ヵヶ]+)【(.*?)】/gu,
    "<ruby><rb>$1</rb><rt>$2</rt></ruby>"
  );
}

function renderQuiz() {

    quizEl.innerHTML = "";
    navEl.innerHTML = "";

    grammarList.forEach((item, index) => {

        const texts = [].concat(item.leftContent?.text || "");

        const shuffledOptions = shuffle([...item.options]);

        const card = document.createElement("div");
        card.className = "question-card";
        card.id = "q" + index;

        card.innerHTML = `
            <div class="question-header">
                <span class="question-number">第 ${index + 1}</span>
                <span class="question-text">${item.question}</span>
            </div>

            <div class="question-body">

                ${item.leftContent?.image ?
                `<img src="${item.leftContent.image}" class="left-image">`
                : ""}

                ${texts.map(t => `
                    <div class="left-text">${addHira(highlight(t))}</div>
                `).join("")}

                <div class="answers vertical">
                    ${shuffledOptions.map(opt => `
                        <button data-correct="${opt === item.correct}">
                            ${opt}
                        </button>
                    `).join("")}
                </div>

                <!-- 👇 THÊM PHẦN NÀY -->
                <div class="explanation hidden">
                    ${item.explanation || ""}
                </div>
            </div>
        `;

        quizEl.appendChild(card);

        const navBtn = document.createElement("button");
        navBtn.textContent = index + 1;
        navEl.appendChild(navBtn);
    });

    initToggleNav(20);

    addEvents();
}

renderQuiz();
