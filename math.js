document.addEventListener("DOMContentLoaded", function () {
  if (typeof renderMathInElement === "function") {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false
    });
  }

  document.querySelectorAll("[data-copy-target]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = document.getElementById(btn.getAttribute("data-copy-target"));
      if (!target || !navigator.clipboard) return;
      var orig = btn.textContent;
      navigator.clipboard.writeText(target.textContent.trim()).then(function () {
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = orig; }, 1600);
      });
    });
  });
});
