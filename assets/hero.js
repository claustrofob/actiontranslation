// The hero behaves like the app's request card: it glows while "translating", then shows the result.
// Without JavaScript or with reduced motion, the finished card is shown as is.
(function () {
  var card = document.getElementById("request");
  var source = document.getElementById("source-language");
  var select = document.getElementById("target-language");
  var headline = document.getElementById("headline");
  if (!card || !source || !select || !headline) return;

  var calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var timer;

  function showSelection() {
    var option = select.options[select.selectedIndex];
    headline.textContent = option.dataset.phrase;
    headline.lang = option.value;
    headline.dir = option.dataset.dir;
  }

  function translate(duration, detecting) {
    window.clearTimeout(timer);
    if (calm) {
      showSelection();
      return;
    }
    card.classList.add("is-translating");
    if (detecting) source.textContent = "Detecting";
    timer = window.setTimeout(function () {
      showSelection();
      source.textContent = "Vietnamese";
      card.classList.remove("is-translating");
    }, duration);
  }

  select.value = "en";
  select.addEventListener("change", function () {
    translate(650, false);
  });
  translate(2200, true);
})();
