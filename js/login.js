function login(){
    var login = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if(login == "admin@admin.com" && senha == "admin123") {
        alert("Conectado com sucesso!!!");
        location.href = "home.html";
    }
    else {
        alert("Error - Senha ou usuario invalidos!!!");
    }
}