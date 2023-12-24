let userLgn;
let emailLgn;

let loginForm = document.querySelector("#form_log");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  location.href = "./dashboard.html";
});
