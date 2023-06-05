function BotaoImpares() {
    document.getElementById("Verificacao").innerHTML = ""
    for (var contador = 1; contador <= 20; contador++) {
        if(contador % 2 == 1){
            document.getElementById("Verificacao").innerHTML += `${contador} <br>`
        }
    }
}