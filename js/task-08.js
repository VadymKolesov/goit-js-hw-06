const form = document.querySelector(".login-form");

const checkForm = (event) => {
  event.preventDefault();
  const dataForm = new FormData(event.target);
  const user = {};
  dataForm.forEach((data, key) => {
    user[key] = data;
  });
  if (!user.email || !user.password) {
    alert(`All fields must be filled in`);
  } else {
    console.log(user);
  }
};

form.addEventListener("submit", checkForm);
