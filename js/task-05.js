const input = document.querySelector("#name-input");
const message = document.querySelector("#name-output");

const changeMessage = (() => {
    if (input.value) {
        message.innerHTML = input.value;
    } else
    if(input.value === "") {
        message.innerHTML = "Anonymous";
    };
});

input.addEventListener("input", changeMessage);