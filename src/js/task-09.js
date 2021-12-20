function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  spanRef: document.querySelector(".color"),
  buttonRef: document.querySelector("button"),
  bodyRef: document.querySelector("body"),
};
console.log(refs);
refs.buttonRef.addEventListener(`click`, () => {
  const color = getRandomHexColor();
  refs.bodyRef.style.backgroundColor = color;
  refs.spanRef.textContent = color;
});
