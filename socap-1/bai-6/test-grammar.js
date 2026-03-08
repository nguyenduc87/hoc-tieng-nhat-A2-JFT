import { grammarList } from "./data/test-grammar-data.js";
import { addEvents, initToggleNav } from "../assets/js/test-common.js";

const quizEl = document.getElementById("quiz");
const navEl = document.getElementById("questionNav");

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function renderQuiz() {

    quizEl.innerHTML = "";
    navEl.innerHTML = "";

    grammarList.forEach((item, index) => {

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

                ${item.leftContent?.text ?
                `<div class="left-text">${item.leftContent.text}</div>`
                : ""}

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
