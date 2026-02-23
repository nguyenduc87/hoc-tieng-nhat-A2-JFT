const list = document.querySelector(".lesson-list");

list.innerHTML = socap1Lessons.map(bai => `
  <div class="lesson-card" data-id="${bai.id}">
    <h3>Bài ${bai.id}</h3>
    <span>${bai.title}</span>
  </div>
`).join("");

// Click vào bài
document.querySelectorAll(".lesson-card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.id;

    // 👉 Chuyển sang trang bài tương ứng
    window.location.href = `bai-${id}/bai-${id}.html`;
  });
});

