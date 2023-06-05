function BotaoLogin() {
    var nome = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value

    if (nome == "adm" && senha == "123" ) {
        document.getElementById("Verificacao").innerHTML += `<p class= "aprovado">Bem vindo(a) ${nome} !</p>`
        exit
    }
    else {
        document.getElementById("Verificacao").innerHTML += `<p class= "reprovado">Usuário ou senha invalido !</p>`

    }

}

function BotaoLimpar() {
    document.getElementById("Verificacao").innerHTML = ""
}