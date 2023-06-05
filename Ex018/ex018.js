function BotaoImagens() {
    var numero = document.getElementById("numero").value
    document.getElementById("numero").value = ""
    document.getElementById("Exibir").innerHTML = ""
    for (var contador = 1; contador <= numero; contador++) {
        document.getElementById("Exibir").innerHTML += `<img class = "coracao" src="img/4096575_heart_like_love_icon.png" > `
    }
}