(function () {
  var BASE = "https://raw.githubusercontent.com/TheCreativeMomentum/northwind-test-co-preview/main/images/";
  var NAMES = {
    "hero-warehouse.png": 1,
    "parts-stock.png": 1,
    "service-bench.png": 1,
    "accountable-desk.png": 1
  };
  document.querySelectorAll(".tcm-cta__form").forEach(function (form) {
    form.addEventListener("submit", function (event) { event.preventDefault(); });
  });
  document.querySelectorAll("img").forEach(function (img) {
    var src = img.getAttribute("src") || "";
    var file = src.split("/").pop();
    if (NAMES[file]) {
      img.src = BASE + file;
    }
  });
})();
