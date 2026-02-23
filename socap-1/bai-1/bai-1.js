import { vocabList } from "./data/vocab-bai-1.js";
import { kanjiList } from "./data/kanji-bai-1.js";
import { grammarBai2 } from "./data/grammar-bai-1.js";
import { listeningData } from "./data/listen-bai-1.js";
import { readingData } from "./data/reading-bai-1.js";


/* =========================
   VOCAB
========================= */
const vocabGrid = document.getElementById("vocabGrid");
if (vocabGrid) {
  vocabGrid.innerHTML = vocabList.map((v, i) => `
    <div class="card">
      <span class="jp">${i + 1}. ${v.jp}</span>
      <span class="hira">${v.hira}</span>
      <div class="meaning">${v.vi}</div>

      <div class="example">
        ${v.example}<br>
        <i>${v.exampleVi}</i>
      </div>
    </div>
  `).join("");
}

/* =========================
   KANJI
========================= */
const kanjiGrid = document.getElementById("kanjiGrid");
if (kanjiGrid) {
  kanjiGrid.innerHTML = kanjiList.map(k => `
    <div class="kanji-box">
      <div class="furi">${k.furi}</div>
      <div class="kanji-main">${k.kanji}</div>
      <div class="kanji-vi">${k.vi}</div>
    </div>
  `).join("");
}

/* =========================
   GRAMMAR
========================= */
const tabsEl = document.querySelector(".grammar-tabs");
const cardEl = document.querySelector(".grammar-card");

function renderTabs(activeId) {
  tabsEl.innerHTML = grammarBai2.map(g => `
    <div class="grammar-tab ${g.id === activeId ? "active" : ""}"
         data-id="${g.id}">
      ${g.tab}
    </div>
  `).join("");
}

// Tô màu chữ đỏ
function highlight(text) {
  return text.replace(/「(.*?)」/g, '<span class="red-text">$1</span>');
}
// Render Ngữ pháp
function renderGrammar(id) {
  const g = grammarBai2.find(x => x.id == id);
  if (!g) return;

  // 👉 TAB TÓM TẮT
  if (id === "summary") {
    cardEl.innerHTML = `
    <div class="grammar-title">${g.title}</div>

    <div class="grammar-block block-summary">
      ${g.summaryList.map(item => `
        <div class="summary-row">
          <div class="summary-left">${item.label}</div>
          <div class="summary-right">
            <div class="summary-jp">${highlight(item.example)}</div>
            <div class="summary-vi">${highlight(item.vi)}</div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
    return;
  }

  // 👉 TAB LIST MẪU NGỮ PHÁP
  cardEl.innerHTML = `
    <div class="grammar-title">${g.title}</div>

    ${g.usage ? `
    <div class="grammar-block block-usage">
      <h4>Cách dùng</h4>
      <ul>${g.usage.map(u => `<li>${u}</li>`).join("")}</ul>
    </div>` : ""}

    ${g.structure ? `
    <div class="grammar-block block-structure">
      <h4>Cấu trúc</h4>
      <span class="structure-badge">${g.structure}</span>
    </div>` : ""}

    <!-- Lưu ý + Ví dụ -->
    <div class="grammar-block block-note">
      <h4>Lưu ý</h4>
      <ul>
        ${g.notes.points.map(p => `<li>${p}</li>`).join("")}
      </ul>

      <div class="note-example">
        <h5>Ví dụ</h5>
        ${g.notes.examples.map((e, i) => `
          <p class="example-jp">${i + 1}. ${highlight(e.jp)}</p>
          <p class="example-vi">${highlight(e.vi)}</p>
        `).join("")}
      </div>
    </div>

    ${g.dialogue ? `
    <div class="grammar-block block-dialogue">
      <h4>Hội thoại</h4>
      ${g.dialogue.map(d => `
        <p><strong>${d.speaker}:</strong> ${highlight(d.jp)}</p>
        <p class="dialogue-vi"><strong>${d.speaker}:</strong> ${highlight(d.vi)}</p>
      `).join("")}
    </div>` : ""}
  `;
}

renderTabs("summary");
renderGrammar("summary");

tabsEl.addEventListener("click", e => {
  const tab = e.target.closest(".grammar-tab");
  if (!tab) return;

  const id = tab.dataset.id;
  renderTabs(id);
  renderGrammar(id);

  // 👉 CUỘN LÊN ĐẦU MƯỢT
  const grammarCard = document.querySelector(".grammar-card");
  const tabs = document.querySelector(".grammar-tabs");

  if (grammarCard && tabs) {
    const EXTRA_OFFSET = 110;
    const offset =
      grammarCard.getBoundingClientRect().top +
      window.pageYOffset -
      tabs.offsetHeight - EXTRA_OFFSET; // 12px cho thoáng

    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  }
});

/* =========================
   LISTEN
========================= */
function setupListeningLayout() {
  const container = document.getElementById("listenContainer");

  // Tạo wrapper 2 cột
  const wrapper = document.createElement("div");
  wrapper.className = "listening-layout";

  const sidebar = document.createElement("aside");
  sidebar.className = "listening-sidebar";
  sidebar.innerHTML = `
    <h3>Nghe</h3>
    <ul id="listeningMenu"></ul>
  `;

  const content = document.createElement("div");
  content.className = "listening-content";

  // Di chuyển listenContainer vào content
  container.parentNode.insertBefore(wrapper, container);
  wrapper.appendChild(sidebar);
  wrapper.appendChild(content);
  content.appendChild(container);
}


function renderListeningMenu() {
  const menu = document.getElementById("listeningMenu");
  menu.innerHTML = "";

  listeningData.forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <a href="#audio-${index}" 
         data-index="${index}" 
         class="${index === 0 ? "active" : ""}">
        ${item.title}
      </a>
    `;

    menu.appendChild(li);
  });

  setActiveOnClick();
  setActiveOnScroll();
}


function setActiveOnClick() {
  const links = document.querySelectorAll("#listeningMenu a");

  links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

function setActiveOnScroll() {
  const sections = document.querySelectorAll(".listen-card");
  const links = document.querySelectorAll("#listeningMenu a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

function renderListening() {
  const container = document.getElementById("listenContainer");

  listeningData.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "listen-card";
    card.id = `audio-${index}`;

    card.innerHTML = `
      <div class="listen-header">
        <b>${item.title}</b>
      </div>

      <div class="audio-player">
        <button class="play-btn">▶</button>
        <div class="progress-container">
          <div class="progress"></div>
        </div>

        <span class="time">0:00 / 0:00</span>

        <button class="rewind-btn">⏪</button>

        <audio class="audio-element">
          <source src="${item.audio}" type="audio/mpeg">
        </audio>
      </div>


      <div class="btn-group">
        <button class="toggle-btn" data-id="script-${index}">👀 Xem script</button>
        <button class="toggle-btn" data-id="trans-${index}">VN Xem bản dịch</button>
      </div>

      <div id="script-${index}" class="slide-box">
        ${item.script.map(line => `<p>${line}</p>`).join("")}
      </div>

      <div id="trans-${index}" class="slide-box">
        ${item.translation.map(line => `<p>${line}</p>`).join("")}
      </div>
      
    `;

    container.appendChild(card);
  });
}

function initAudioPlayers() {
  document.querySelectorAll(".audio-player").forEach(player => {

    const audio = player.querySelector(".audio-element");
    const playBtn = player.querySelector(".play-btn");
    const rewindBtn = player.querySelector(".rewind-btn");
    const progress = player.querySelector(".progress");
    const progressContainer = player.querySelector(".progress-container");
    const timeDisplay = player.querySelector(".time");

    function formatTime(seconds) {
      if (!seconds) return "0:00";
      const m = Math.floor(seconds / 60);
      const s = Math.floor(seconds % 60);
      return `${m}:${s < 10 ? "0" + s : s}`;
    }

    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸";
      } else {
        audio.pause();
        playBtn.textContent = "▶";
      }
    });

    rewindBtn?.addEventListener("click", () => {
      audio.currentTime = Math.max(0, audio.currentTime - 5);
    });

    audio.addEventListener("timeupdate", () => {
      if (!audio.duration) return;
      const percent = (audio.currentTime / audio.duration) * 100;
      progress.style.width = percent + "%";
      timeDisplay.textContent =
        `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    });

    progressContainer.addEventListener("click", e => {
      if (!audio.duration) return;
      const width = progressContainer.clientWidth;
      const clickX = e.offsetX;
      audio.currentTime = (clickX / width) * audio.duration;
    });

  });
}
/* =========================
   READING
========================= */
const readingList = document.getElementById("readingList");

function renderReading() {
  readingList.innerHTML = readingData.map(item => `
    <div class="reading-card">
        <h2>${item.title}</h2>

        <div class="reading-image">
            <img src="${item.image}" alt="reading image">
        </div>

        <div class="reading-text">
            ${item.conversation.map(line => `<p>${line}</p>`).join("")}
        </div>

        <div class="reading-translate-toggle">
          <button class="toggle-translate">Hiện / Ẩn bản dịch</button>
        </div>

        <div class="reading-translate hidden">
          ${item.translate.map(line => `<p>${line}</p>`).join("")}
        </div>

        <div class="reading-vocab">
          <p>📘Từ Vựng:</p>
            ${item.vocab.map(line => `
              <div class="vocab-item">
              <span class="jp">${line.jp}</span> : 
              <span class="vn">${line.vn}</span>
              </div>
              `
  ).join("")}
        </div>

        <div class="question-box" id="readingQuestion">
            <h4>❓ Câu hỏi</h4>
            ${item.questions.map((q, i) => `<p>${i + 1}. ${q}</p>`).join("")}
        </div>

        <button class="answer-btn">Xem đáp án</button>

        <div class="answer-box">
            ${item.answers.map((a, i) => `<p>${i + 1}. ${a}</p>`).join("")}
        </div>
    </div>
  `).join("");
}

renderReading();

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("answer-btn")) {
    const answerBox = e.target.nextElementSibling;
    answerBox.classList.toggle("show");
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("toggle-translate")) {
    const translateBox = e.target
      .closest(".reading-card")
      .querySelector(".reading-translate");

    translateBox.classList.toggle("hidden");
  }
});


renderListening();
setupListeningLayout();
renderListeningMenu();
initAudioPlayers();





