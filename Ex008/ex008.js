function BotaoMedia() {
    var aluno = document.getElementById("aluno").value
    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value

    if (Number(nota1) > 10) {
        alert("Nota1 não pode ser maior que 10")
        exit
    }
    if (Number(nota2) > 10) {
        alert("Nota2 não pode ser maior que 10")
        exit
    }

    var media = (Number(nota1) + Number(nota2)) / 2

    if (media >= 7) {
        document.getElementById("ResultadoMedia").innerHTML += `<br> O aluno(a) ${aluno} tirou nota ${nota1} e ${nota2}, sua média foi ${media} <b class="verde">Aprovado</b>`
    }
    else {
        document.getElementById("ResultadoMedia").innerHTML += `<br> O aluno(a) ${aluno} tirou nota ${nota1} e ${nota2}, sua média foi ${media} <b class="vermelho">Reprovado</b>`

    }
}

function BotaoLimpar() {
    document.getElementById("ResultadoMedia").innerHTML = ""
}