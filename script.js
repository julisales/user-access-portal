const container = document.getElementById('container');
const btnRegister = document.getElementById('register');
const btnLogin = document.getElementById('login');

btnRegister.addEventListener("click", () => {
    container.classList.add("active");
});

btnLogin.addEventListener("click", () => {
    container.classList.remove("active");
});