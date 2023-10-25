const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const listItems = [];

ingredients.forEach((ing) => {
  const item = document.createElement("li");
  item.textContent = ing;
  item.classList.add("item");
  listItems.push(item);
});

list.prepend(...listItems);
