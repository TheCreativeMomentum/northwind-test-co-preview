(function () {
  var MAP = {
    "hero-warehouse.png": "https://iili.io/nHEPRPj.png?v=gate-20260902b",
    "parts-stock.png": "https://iili.io/nHEP4ff.png?v=gate-20260902b",
    "service-bench.png": "https://iili.io/nHEPsJ2.png?v=gate-20260902b",
    "accountable-desk.png": "https://iili.io/nHEPZb9.png?v=gate-20260902b"
  };
  document.querySelectorAll(".tcm-cta__form").forEach(function (form) {
    form.addEventListener("submit", function (event) { event.preventDefault(); });
  });
  document.querySelectorAll("img").forEach(function (img) {
    var src = img.getAttribute("src") || "";
    Object.keys(MAP).forEach(function (name) {
      if (src.indexOf(name) !== -1) img.src = MAP[name];
    });
  });
})();
