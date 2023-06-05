function BotaoTabuada() {
    var numero = document.getElementById("numero").value
    var valor1 = 1
    document.getElementById("Verificacao").innerHTML = ""
    while (valor1 <= 10) {
        var multiplicacao = Number(valor1) * Number(numero)
        document.getElementById("Verificacao").innerHTML += `${numero} X ${valor1}= ${multiplicacao} <br>   `
        valor1++
    }
}