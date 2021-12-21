const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("#ingredients");
console.log(ingredientsEl);

const ron = ingredients.map((item) => {
  const liEl = document.createElement("li");
  liEl.textContent = item;
  liEl.classList.add("item");
  console.log(liEl);
  return liEl;
});
ingredientsEl.append(...ron);
