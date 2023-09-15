const username_button = document.getElementById("username_input");
const password_button = document.getElementById("password_input");
const submit_button = document.getElementById("submit_button");
const auth_screen = document.getElementById("auth_screen");
const error_msg = document.getElementById("error_msg");
const success_msg = document.getElementById("success_msg");
const username = "123";
const passoword = "123";

const errorMessage = () => {
  error_msg.style.top = "1rem";

  setTimeout(() => {
    error_msg.style.top = "-10rem";
  }, 4000);
};

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 13 && auth_screen.style.display != "none") {
    if (username_button.value == "" || password_button.value == "") {
      return errorMessage();
    }
    if (
      username_button.value != username &&
      password_button.value != passoword
    ) {
      return errorMessage();
    }
    if (
      username_button.value == username &&
      password_button.value == passoword
    ) {
      auth_screen.style.display = "none";
    }
  }
});
submit_button.addEventListener("click", (e) => {
  if (username_button.value == "" || password_button.value == "") {
    return errorMessage();
  }
  if (username_button.value != username && password_button.value != passoword)
    return errorMessage();
  if (username_button.value == username && password_button.value == passoword) {
    auth_screen.style.display = "none";
  }
});
