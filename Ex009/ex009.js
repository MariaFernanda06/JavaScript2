function BotaoVerificar() {
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value

    if (idade >= 18) {
        document.getElementById("Verificacao").innerHTML += `<p class= "aprovado">Parabéns ${nome}, você pode tirar CNH !</p>`
    }
    else {
        document.getElementById("Verificacao").innerHTML += `<p class= "reprovado">Desculpe ${nome}, você não pode tirar CNH !</p>`

    }

}

function BotaoLimpar() {
    document.getElementById("Verificacao").innerHTML = ""
}