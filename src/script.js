// LoginPage
const userID = document.getElementById("userID");
const passwordID = document.getElementById("passwordID");
const loginButton = document.getElementById("loginButton");
const logOutButton = document.getElementById("logOutButton");
const forgetPW = document.getElementById("forgetPW");
const createAccount = document.getElementById("createAccount");

loginButton.addEventListener("click", function () {
  let userElement = userID.value;
  alert(`Login Sebagai : ${userElement}`);
  userID.style.display = "none";
  passwordID.style.display = "none";
  forgetPW.style.display = "none";
  createAccount.style.display = "none";
  loginButton.style.display = "none";
  logOutButton.style.display = "block";

  const whenLogin = document.getElementById("whenLogin");

  whenLogin.innerHTML = `Anda Masuk Sebagai : ${userElement}`;
  whenLogin.style.display = "block";
});

logOutButton.addEventListener("click", function () {
  location.reload();
});

// LoginPage End
