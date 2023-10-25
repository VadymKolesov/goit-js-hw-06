function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector(".change-color");
const page = document.querySelector("body");
const colorValueTitle = document.querySelector(".color");

const changeColor = () => {
  let colorPage = getRandomHexColor();
  page.style.backgroundColor = colorPage;
  colorValueTitle.textContent = colorPage;
};

colorButton.addEventListener("click", changeColor);
