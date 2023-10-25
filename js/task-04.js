const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");
let counterValue = 0;

const minusValue = (() => {
    counterValue -= 1;
    value.textContent = counterValue;
});

const plusValue = (() => {
    counterValue += 1;
    value.textContent = counterValue;
});

buttonMinus.addEventListener("click", minusValue);
buttonPlus.addEventListener("click", plusValue);

