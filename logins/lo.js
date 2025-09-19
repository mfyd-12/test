const form = document.querySelector('form');
const usernameInput = document.getElementById('user');
const passwordInput = document.getElementById('password');
const Email = document.getElementById("Email");
const cv = document.getElementById("cv");

cv.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});