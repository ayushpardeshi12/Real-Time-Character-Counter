let textAreaEl = document.getElementById("textArea");
let totalCountEl = document.getElementById("total-count");
let RemainCountEl = document.getElementById("Remaining-count");

textAreaEl.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalCountEl.textContent = textAreaEl.value.split("").filter((element) => {
    return element.length !== 0;
  }).length;

  RemainCountEl.textContent =
    textArea.getAttribute("maxlength") - textArea.value.length;
}
