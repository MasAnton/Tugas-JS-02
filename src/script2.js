const registerButton = document.getElementById("registerButton");
const namaPengguna = document.getElementById("namaPengguna");

registerButton.addEventListener("click", function () {
  let userElement2 = namaPengguna.value;
  alert(`Username ${userElement2} Berhasil Dibuat`);
});
