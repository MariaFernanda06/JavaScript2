function BotaoSorteio() {
    var nrSorteio = 1
    document.getElementById("Verificacao").innerHTML = ""
    while (nrSorteio <= 6){
        var nrSorteado = parseInt(Math.random() * 60) + 1
        document.getElementById("Verificacao").innerHTML += `${nrSorteado} `
        nrSorteio++
    }
}