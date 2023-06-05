 function Botaonumero(){
    var calculando = document.getElementById("numero").value
    var valor1 = calculando*2
    var valor2 = calculando/2
    document.getElementById("ResultadoCalculo").innerHTML += `<br> O dobro de ${calculando} é igual a ${valor1} e a metade é ${valor2}`
    document.getElementById("numero").value = ""
        }
    
    function BotaoLimpar(){
        document.getElementById("ResultadoCalculo").innerHTML = ""
        }