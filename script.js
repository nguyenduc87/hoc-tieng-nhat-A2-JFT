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
