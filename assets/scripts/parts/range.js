document.addEventListener("DOMContentLoaded", () => {
  const rangeItems = document.querySelectorAll(".range-item");

  rangeItems.forEach((item) => {
    const total = parseInt(item.getAttribute("data-total"), 10);
    const collected = parseInt(item.getAttribute("data-collected"), 10);
    const percent = Math.min((collected / total) * 100, 100);

    const line = item.querySelector(".range-item__line");
    line.style.setProperty("--percent", percent + "%");
  });
});
