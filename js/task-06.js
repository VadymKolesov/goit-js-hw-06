const input = document.querySelector("[data-length]");

const inputCheck = () => {
  if (input.value.length == input.dataset.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("change", inputCheck);
