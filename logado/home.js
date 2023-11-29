let usuario = JSON.parse(localStorage.getItem("logado"));
document.getElementById("titulo").innerHTML = "Bem vindo(a), "+usuario.login+"!";


function deslogar(){
    window.location.href = "../index.html";
}
function pagNotas(){
    window.location.href = "../anotaçoes/notas.html";
}