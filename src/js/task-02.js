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
const ron = ingredients.forEach((item) => {
  const liEl = document.createElement("li");
  liEl.textContent = item;
  liEl.classList.add("item");
  console.log(liEl);
  ingredientsEl.append(liEl);
});
