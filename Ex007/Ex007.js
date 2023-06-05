function BotaoPonto1() {
    var nr1 = document.getElementById("nr1").innerHTML
    var ponto = Number(nr1) + 1
    document.getElementById("nr1").innerHTML = `${ponto}`

}

function BotaoPonto2() {
    var nr1 = document.getElementById("nr2").innerHTML
    var ponto = Number(nr1) + 1
    document.getElementById("nr2").innerHTML = `${ponto}`

}

function Basquete(valor, time) {
    if (time == "time2") {
        var nr1 = document.getElementById("nr4").innerHTML
        var ponto = Number(nr1) + valor
        document.getElementById("nr4").innerHTML = `${ponto}`
    }
    else {
        var nr1 = document.getElementById("nr3").innerHTML
        var ponto = Number(nr1) + valor
        document.getElementById("nr3").innerHTML = `${ponto}`
    }
}