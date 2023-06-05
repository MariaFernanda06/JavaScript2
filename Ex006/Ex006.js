function BotaoCalcular() {
    var nr1 = document.getElementById("nr1").value
    var nr2 = document.getElementById("nr2").value
    var opSoma = parseFloat(nr1) + parseFloat   (nr2)
    var opSubtracao = nr1 - nr2
    var opMultiplicacao = nr1 * nr2
    var opDivisao = nr1 / nr2
    var opExponenciacao = nr1 ** nr2
    var opResto = nr1 % nr2
    document.getElementById("ResultadoCalculo").innerHTML =
        `${nr1} + ${nr2} = ${opSoma} <br>
     ${nr1} - ${nr2} = ${opSubtracao} <br>
     ${nr1} * ${nr2} = ${opMultiplicacao} <br>
     ${nr1} / ${nr2} = ${opDivisao} <br>
     ${nr1} ** ${nr2} = ${opExponenciacao} <br>
     ${nr1} % ${nr2} = ${opResto}`
     document.getElementById("nr1").value = ""
     document.getElementById("nr2").value = ""
}

function BotaoLimpar(){
    document.getElementById("ResultadoCalculo").innerHTML = ""
    }