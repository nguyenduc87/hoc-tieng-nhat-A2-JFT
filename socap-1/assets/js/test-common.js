function addEvents() {

    const allQuestions = document.querySelectorAll(".question-card");
    const navButtons = document.querySelectorAll("#questionNav button");
    const submitBtn = document.getElementById("submitBtn");

    /* ========================
       CHỌN ĐÁP ÁN
    ======================== */
    allQuestions.forEach((question, qIndex) => {
        const buttons = question.querySelectorAll("button");

        buttons.forEach(btn => {
            btn.addEventListener("click", () => {

                // Bỏ chọn cũ
                buttons.forEach(b => b.classList.remove("selected"));
                btn.classList.add("selected");

                // Tô màu nav
                if (navButtons[qIndex]) {
                    navButtons[qIndex].classList.add("answered");
                }
            });
        });
    });


    /* ========================
       CLICK QUESTION NAV
    ======================== */
    navButtons.forEach((navBtn, index) => {
        navBtn.addEventListener("click", () => {

            navButtons.forEach(b => b.classList.remove("active-nav"));
            navBtn.classList.add("active-nav");

            const target = document.getElementById("q" + index);
            target?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });


    /* ========================
       SUBMIT
    ======================== */
    submitBtn?.addEventListener("click", () => {

        let score = 0;

        allQuestions.forEach((question, qIndex) => {

            const buttons = question.querySelectorAll("button");
            const navBtn = navButtons[qIndex];

            let selectedBtn = question.querySelector(".selected");

            buttons.forEach(btn => {

                const isCorrect = btn.dataset.correct === "true";

                btn.classList.remove("correct", "wrong");

                if (isCorrect) {
                    btn.classList.add("correct");
                }

                if (selectedBtn && selectedBtn.dataset.correct !== "true") {
                    selectedBtn.classList.add("wrong");
                }

                btn.disabled = true;
            });

            // Nav màu
            if (selectedBtn) {
                if (selectedBtn.dataset.correct === "true") {
                    score++;
                    navBtn?.classList.add("nav-correct");
                } else {
                    navBtn?.classList.add("nav-wrong");
                }
            } else {
                navBtn?.classList.add("nav-unanswered");
            }

            // Hiện explanation
            const explanation = question.querySelector(".explanation");
            explanation?.classList.remove("hidden");

        });

        submitBtn.style.display = "none";
        showResult(score, allQuestions.length);
    });
}


/* ========================
   TOGGLE NAV (>20 câu)
======================== */
function initToggleNav(limit = 20) {

    const navEl = document.getElementById("questionNav");
    if (!navEl) return;

    const navButtons = navEl.querySelectorAll("button");
    if (navButtons.length <= limit) return;

    navEl.classList.add("collapsed");

    if (document.querySelector(".toggle-nav")) return;

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "toggle-nav";
    toggleBtn.textContent = "↓ Xem thêm";

    toggleBtn.addEventListener("click", () => {
        navEl.classList.toggle("collapsed");
        toggleBtn.textContent =
            navEl.classList.contains("collapsed")
                ? "↓ Xem thêm"
                : "↑ Ẩn bớt";
    });

    navEl.parentNode.insertBefore(toggleBtn, navEl.nextSibling);
}


/* ========================
   SHOW RESULT
======================== */
function showResult(score, total) {

    let resultBox = document.getElementById("resultBox");

    if (!resultBox) {
        resultBox = document.createElement("div");
        resultBox.id = "resultBox";
        document.getElementById("quiz").appendChild(resultBox);
    }

    resultBox.innerHTML = `
        <div class="result-content">
            <h3>Số câu đúng: ${score} / ${total}</h3>
            <button id="retryBtn">Làm lại</button>
        </div>
    `;

    document.getElementById("retryBtn")
        .addEventListener("click", () => location.reload());
}

export { addEvents, initToggleNav };