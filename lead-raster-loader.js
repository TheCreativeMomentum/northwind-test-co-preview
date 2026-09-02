document.querySelectorAll(".tcm-cta__form").forEach(function (form) {
  form.addEventListener("submit", function (event) { event.preventDefault(); });
});
document.querySelectorAll("img").forEach(function (img) {
  img.addEventListener("error", function () {
    var src = img.getAttribute("src");
    if (!src || src.indexOf(".png") === -1 || img.dataset.b64Tried) return;
    img.dataset.b64Tried = "1";
    function asData(mime, text) {
      img.src = "data:" + mime + ";base64," + String(text).replace(/\s+/g, "");
    }
    fetch(src + ".b64").then(function (response) {
      return response.ok ? response.text() : Promise.reject();
    }).then(function (text) {
      asData("image/png", text);
    }).catch(function () {
      var jpg = src.replace(/\.png$/i, ".jpg.b64");
      return fetch(jpg).then(function (response) {
        return response.ok ? response.text() : Promise.reject();
      }).then(function (text) { asData("image/jpeg", text); });
    }).catch(function () {});
  });
});
