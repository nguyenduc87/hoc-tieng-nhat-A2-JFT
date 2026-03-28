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

// function renderQuiz() {

//     quizEl.innerHTML = "";
//     navEl.innerHTML = "";

//     grammarList.forEach((item, index) => {

//         const texts = [].concat(item.leftContent?.text || "");

//         const shuffledOptions = shuffle([...item.options]);

//         const card = document.createElement("div");
//         card.className = "question-card";
//         card.id = "q" + index;

//         card.innerHTML = `
//             <div class="question-header">
//                 <span class="question-number">第 ${index + 1}</span>
//                 <span class="question-text">${item.question}</span>
//             </div>

//             <div class="question-body">

//                 ${item.leftContent?.image ?
//                 `<img src="${item.leftContent.image}" class="left-image">`
//                 : ""}

//                 ${texts.map(t => `
//                     <div class="left-text">${addHira(highlight(t))}</div>
//                 `).join("")}

//                 <div class="answers vertical">
//                     ${shuffledOptions.map(opt => `
//                         <button data-correct="${opt === item.correct}">
//                             ${opt}
//                         </button>
//                     `).join("")}
//                 </div>

//                 <!-- 👇 THÊM PHẦN NÀY -->
//                 <div class="explanation hidden">
//                     ${item.explanation || ""}
//                 </div>
//             </div>
//         `;

//         quizEl.appendChild(card);

//         const navBtn = document.createElement("button");
//         navBtn.textContent = index + 1;
//         navEl.appendChild(navBtn);
//     });

//     initToggleNav(20);

//     addEvents();
// }


function renderQuiz() {
    quizEl.innerHTML = "";
    navEl.innerHTML = "";

    grammarList.forEach((item, index) => {
        const texts = [].concat(item.leftContent?.text || "");

        const card = document.createElement("div");
        card.className = "question-card stylish-card";
        card.id = "q" + index;

        card.innerHTML = `
            <div class="question-header">
                <span class="question-number">第 ${index + 1} 問</span>
                <span class="question-text">${item.question}</span>
            </div>

            <div class="question-body">
                ${item.leftContent?.image ?
                `<img src="${item.leftContent.image}" class="left-image">`
                : ""}

                ${texts.map(t => {
                    const match = t.match(/（(.+?)／(.+?)）/);
                    if (match) {
                        const before = t.split("（")[0];
                        const after = t.split("）")[1] || "";
                        const opt1 = match[1];
                        const opt2 = match[2];
                        return `
                            <div class="left-text">
                                ${addHira(highlight(before))}
                                <span class="option-group">
                                    <button class="choice-btn" data-choice="${opt1}">${opt1}</button>
                                    <button class="choice-btn" data-choice="${opt2}">${opt2}</button>
                                </span>
                                ${addHira(highlight(after))}
                            </div>
                        `;
                    } else {
                        return `<div class="left-text">${addHira(highlight(t))}</div>`;
                    }
                }).join("")}

                <div class="answers vertical">
                    ${item.options.map(opt => `
                        <button class="option-btn" data-correct="${opt === item.correct}">
                            ${opt}
                        </button>
                    `).join("")}
                </div>

                <div class="explanation hidden">
                    ${item.explanation || ""}
                </div>
            </div>
        `;

        quizEl.appendChild(card);

        const navBtn = document.createElement("button");
        navBtn.textContent = index + 1;
        navBtn.className = "nav-btn";
        navEl.appendChild(navBtn);
    });

    initToggleNav(20);
    addEvents();
    addChoiceEvents();
}

// Thêm sự kiện cho các nút lựa chọn trong ngoặc
function addChoiceEvents() {
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            // reset trạng thái
            btn.parentElement.querySelectorAll(".choice-btn").forEach(b => {
                b.classList.remove("correct", "wrong");
            });
            // highlight nút vừa chọn
            btn.classList.add("selected");
        });
    });

    document.querySelectorAll(".option-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const isCorrect = btn.dataset.correct === "true";
            if (isCorrect) {
                btn.classList.add("correct");
            } else {
                btn.classList.add("wrong");
            }
            // hiện giải thích
            const exp = btn.closest(".question-body").querySelector(".explanation");
            exp.classList.remove("hidden");
        });
    });
}
renderQuiz();
