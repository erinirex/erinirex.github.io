(() => {
  "use strict";
  const button = document.querySelector(".dream-toggle");
  const label = document.querySelector(".mode-label");
  const meta = document.querySelector('meta[name="theme-color"]');
  function setDusk(dusk) {
    document.documentElement.dataset.palette = dusk ? "dusk" : "day";
    button.setAttribute("aria-pressed", String(dusk));
    button.setAttribute(
      "aria-label",
      dusk ? "Switch to day palette" : "Switch to dusk palette",
    );
    label.textContent = dusk ? "Daylight" : "Dusk";
    meta.content = dusk ? "#202838" : "#e8edf3";
  }
  let saved = false;
  try {
    saved = localStorage.getItem("erinirex-dusk") === "true";
  } catch (_) {
    /* Storage is optional. */
  }
  setDusk(saved);
  button.addEventListener("click", () => {
    const dusk = button.getAttribute("aria-pressed") !== "true";
    setDusk(dusk);
    try {
      localStorage.setItem("erinirex-dusk", String(dusk));
    } catch (_) {
      /* Private browsing fallback. */
    }
  });
})();
