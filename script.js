document.querySelectorAll(".level-card").forEach(card => {
  card.addEventListener("click", () => {
    const level = card.dataset.level;

    const map = {
      nhapmon: "nhap-mon/nhap-mon.html",
      socap1: "socap-1/so-cap-1.html",
      socap2: "socap-2/so-cap-2.html"
    };

    if (map[level]) {
      window.location.href = map[level];
    }
  });
});

const input = document.getElementById("grammarSearch");
const modal = document.getElementById("grammarModal");
const result = document.getElementById("grammarResult");
const closeBtn = document.querySelector(".close");

input.addEventListener("input", () => {

  const keyword = input.value.trim().toLowerCase();

  if (keyword === "") {
    modal.style.display = "none";
    return;
  }

  const list = grammarData.filter(item =>

    item.grammar.toLowerCase().includes(keyword) ||

    item.meaning.toLowerCase().includes(keyword) ||

    item.lesson.toLowerCase().includes(keyword)

  );

  result.innerHTML = "";

  if (list.length === 0) {

    result.innerHTML = "<p>Không tìm thấy.</p>";

  } else {

    list.forEach(item => {

      const div = document.createElement("div");

      div.className = "result-item";

      div.innerHTML = `
                <b>${item.grammar}</b><br>
                <small>${item.meaning}</small><br>
                ${item.lesson}
            `;

      div.onclick = () => {
        window.location.href = item.link;
      }

      result.appendChild(div);

    });

  }

  modal.style.display = "block";

});

closeBtn.onclick = () => {
  modal.style.display = "none";
}

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
