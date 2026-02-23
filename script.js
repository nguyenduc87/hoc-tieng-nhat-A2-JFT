document.querySelectorAll(".level-card").forEach(card => {
  card.addEventListener("click", () => {
    const level = card.dataset.level;

    const map = {
      nhapmon: "nhap-mon",
      socap1: "socap-1",
      socap2: "socap-2"
    };

    if (map[level]) {
      window.location.href = `${map[level]}/so-cap-1.html`;
    }
  });
});
