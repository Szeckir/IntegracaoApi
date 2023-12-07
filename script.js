const formulario = document.querySelector("form");
const InputNome = document.querySelector(".nome")
const InputEmail = document.querySelector(".email")
const InputSenha = document.querySelector(".senha")

function cadastrar() {
    fetch("https://localhost:8080/cadastrar", {
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'aplication/json'
        },
        method: "POST",
        body: JSON.stringify({
            nome: InputNome.value,
            email: InputEmail.value,
            senha: InputSenha.value
        })
    })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
};

function limpar () {
    InputNome.value = "";
    InputEmail.value = "";
    InputSenha.value = "";
}


formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastrar();
    limpar();
});