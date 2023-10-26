const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
range.value = 20;

const changeFontSize = () => {
  text.style.fontSize = range.value + "px";
};

range.addEventListener("input", changeFontSize);
