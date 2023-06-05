function BotaoTabuada() {
    var numero = document.getElementById("numero").value
    document.getElementById("Verificacao").innerHTML = ""
    for (var valor1 = 1; valor1 <= 10; valor1++) {
        var multiplicacao = Number(valor1) * Number(numero)
        document.getElementById("Verificacao").innerHTML += `${numero} X ${valor1}= ${multiplicacao} <br>   `
    }
}