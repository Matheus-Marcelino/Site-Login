console.log("\033[1;31mBem vindo ao nosso sistema de Acesso! :D\033[0m")

function change_mode(){
    let login = document.getElementById("login");
    let cadastro = document.getElementById("cadastro");
    login.classList.toggle("hidden");
    cadastro.classList.toggle("hidden");
}