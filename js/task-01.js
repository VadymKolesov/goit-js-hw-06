const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
  const categoryName = item.querySelector("h2");
  const categoryElement = item.querySelector("ul").children;
  console.log(`Category: ${categoryName.innerHTML}`);
  console.log(`Elements: ${categoryElement.length}`);
});
