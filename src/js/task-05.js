const inputEl = document.querySelector("#name-input");

const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", funValue);
function funValue(event) {
  const rextValue = inputEl.value ? inputEl.value : "Anonymous";
  spanEl.textContent = rextValue;
}
