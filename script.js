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

input.addEventListener("keydown", (e) => {

  if (e.key !== "Enter") return;

  const keyword = input.value.trim().toLowerCase();

  if (keyword === "") {
    modal.style.display = "none";
    return;
  }

  const list = grammarData.filter(item =>
    item.grammar.toLowerCase().includes(keyword)
  );

  // 2. SẮP XẾP: Ưu tiên từ khóa ở đầu chuỗi + Gom các mục trùng tên lại với nhau
  list.sort((a, b) => {
    const aGrammar = a.grammar.toLowerCase();
    const bGrammar = b.grammar.toLowerCase();

    // Bước A: Nếu tên trùng nhau hoàn toàn, xếp chúng đứng cạnh nhau
    if (aGrammar === bGrammar) return 0;

    // Bước B: So sánh vị trí xuất hiện của từ khóa tìm kiếm
    const indexA = aGrammar.indexOf(keyword);
    const indexB = bGrammar.indexOf(keyword);

    // Ưu tiên kết quả có từ khóa nằm gần đầu chuỗi hơn
    if (indexA !== -1 && indexB !== -1) {
      if (indexA !== indexB) {
        return indexA - indexB;
      }
      // Nếu vị trí giống nhau (ví dụ cùng ở đầu), xếp theo bảng chữ cái để gom nhóm
      return aGrammar.localeCompare(bGrammar);
    }

    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    return 0;
  });

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
            `;

      div.onclick = () => {
        // Lấy ra phần đường dẫn gốc của GitHub Pages (ví dụ: /hoc-tieng-nhat-A2-JFT)
        const rootPath = window.location.pathname.split('/')[1];

        // Tự động nối tên repo vào trước link dữ liệu
        window.location.href = `/${rootPath}${item.link}`;
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
