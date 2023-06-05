function BotaoVerificar() {
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value

    if (idade >= 18 && idade <= 65) {
        document.getElementById("Verificacao").innerHTML += `<p class= "verde">${nome} seu voto é obrigatório</p>`

    } else if (idade >= 16 || idade > 65) {
        document.getElementById("Verificacao").innerHTML += `<p class= "azul">${nome} seu voto não é obrigatório</p>`
    }
    else if (idade < 16) {
        document.getElementById("Verificacao").innerHTML += `<p class= "vermelho">${nome} você não pode votar</p>` 
    }
}

function BotaoLimpar() {
    document.getElementById("Verificacao").innerHTML = ""
}