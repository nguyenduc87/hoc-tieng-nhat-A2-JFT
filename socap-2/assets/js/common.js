/* =========================
   MENU + CONTENT SWITCH
========================= */
const menuItems = document.querySelectorAll(".menu-item");
const sections = document.querySelectorAll(".content-section");

const mainBtn = document.getElementById("mainBtn");
const testBtn = document.getElementById("testBtn");


const menuConfig = {
  vocab: {
    mainText: "📘 Từ vựng",
    testText: "✏️ Test từ vựng"
  },
  kanji: {
    mainText: "有 Hán tự",
    testText: "✏️ Test hán tự"
  },
  grammar: {
    mainText: "✏️ Ngữ pháp",
    testText: "📝 Bài tập"
  },
  listening: {
    mainText: "🎧 Nghe",
    testText: "▶️ Bài nghe"
  },
  reading: {
    mainText: "📖 Đọc",
    testText: "❓ Câu hỏi"
  }
};

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    const key = item.dataset.target;
    if (!key) return;

    // active menu
    menuItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    // show section
    sections.forEach(s => s.classList.remove("active"));
    const target = document.getElementById(key);
    if (target) target.classList.add("active");

    // update buttons
    if (menuConfig[key] && mainBtn && testBtn) {
      mainBtn.textContent = menuConfig[key].mainText;
      testBtn.textContent = menuConfig[key].testText;
    }

    // mobile UX
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/* =========================
   PREVIOUS LESSON BUTTON
========================= */
const prevBtn = document.getElementById("prevBtn");

if (prevBtn) {
  const path = window.location.pathname;
  const match = path.match(/bai-(\d+)/);

  if (match) {
    const current = Number(match[1]);
    if (current > 1) {
      const prev = current - 1;
      prevBtn.addEventListener("click", () => {
        window.location.href = `../bai-${prev}/bai-${prev}.html`;
      });
    } else {
      // bài 1 thì disable
      prevBtn.disabled = true;
      prevBtn.style.opacity = 0.4;
    }
  }
}

/* =========================
   NEXT LESSON BUTTON
========================= */
const nextBtn = document.getElementById("nextBtn");

if (nextBtn) {
  const path = window.location.pathname;
  const match = path.match(/bai-(\d+)/);

  if (match) {
    const current = Number(match[1]);
    const TOTAL_LESSONS = 18; // SC1 có 18 bài

    if (current < TOTAL_LESSONS) {
      const next = current + 1;
      nextBtn.addEventListener("click", () => {
        window.location.href = `../bai-${next}/bai-${next}.html`;
      });
    } else {
      // bài cuối thì disable
      nextBtn.disabled = true;
      nextBtn.style.opacity = 0.4;
    }
  }
}


/* =========================
   Xem Script và bản dịch
========================= */

// Nút đổi màu nghe
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".toggle-btn");
  if (!btn) return;

  const id = btn.dataset.id;
  const box = document.getElementById(id);

  const card = btn.closest(".listen-card");
  const boxes = card.querySelectorAll(".slide-box");
  const buttons = card.querySelectorAll(".toggle-btn");

  boxes.forEach(b => {
    if (b.id === id) {
      b.classList.toggle("show");
    } else {
      b.classList.remove("show");
    }
  });

  buttons.forEach(b => {
    if (b === btn) {
      b.classList.toggle("active");
    } else {
      b.classList.remove("active");
    }
  });
});


if (testBtn) {
  testBtn.addEventListener("click", () => {
    const activeMenu = document.querySelector(".menu-item.active");
    if (!activeMenu) return;

    const key = activeMenu.dataset.target;

    const currentPath = window.location.pathname;
    const lessonMatch = currentPath.match(/bai-\d+/);

    if (!lessonMatch) return;

    const currentLesson = lessonMatch[0];

    const testRoutes = {
      kanji: "test-kanji.html",
      vocab: "test-vocab.html",
      grammar: "test-grammar.html"
    };

    if (testRoutes[key]) {
      window.location.href = `../${currentLesson}/test/${testRoutes[key]}`;
    }
  });
}










