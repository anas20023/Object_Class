let Sgn_div = document.querySelector("#main_div");
let signup_top = document.querySelector("#div_sgn");
let sgn_btn_1 = document.querySelector("#btn_1");
let sgn_btn_2 = document.querySelector("#btn_2");
let signupForm = document.querySelector("#form_sbmt");

sgn_btn_1.addEventListener("click", () => {
  signup_top.classList.remove("flex");
  signup_top.classList.add("hidden");
  Sgn_div.classList.remove("hidden");
  Sgn_div.classList.add("flex");
});

sgn_btn_2.addEventListener("click", () => {
  signup_top.classList.remove("flex");
  signup_top.classList.add("hidden");
  Sgn_div.classList.remove("hidden");
  Sgn_div.classList.add("flex");
});

// Signup Form Submit Event
let usernameSgn;
let emailSgn;

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  usernameSgn = document.getElementById("inline-full-name").value;
  emailSgn = document.getElementById("inline-email").value;
  document.getElementById("inline-full-name").value = "";
  document.getElementById("inline-email").value = "";
  location.href = "./login.html";
});

// Login Form Submit Event
