function logar(params) {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    if (email == "admin@gmail.com" && senha == "admin") {
        alert("Sucessfully logged in")
        window.location.href="./sistemapostinhojs.html";
    } else {
        alert("Incorrect Login or Password")
    }
}