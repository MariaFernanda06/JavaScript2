var nrSorteado = parseInt(Math.random() * 100) + 1
var nr = 0

function BotaoChute(){
    var valor1 = prompt("Chute um número")
    nr = nr + 1

     if (valor1 == nrSorteado){
        document.getElementById("Verificacao").innerHTML += `<b>Parabéns você acertou o N° ${nrSorteado}, em ${nr} tentativas !</b>`
    }
    else if (valor1 < nrSorteado){
        document.getElementById("Verificacao").innerHTML += `<p>Você chutou ${valor1}, pensei em um numero MAIOR</p>`
    }
    else if(valor1 > nrSorteado){
        document.getElementById("Verificacao").innerHTML += `<p>Você chutou ${valor1}, pensei em um numero MENOR</p>`
    }
    
}

function BotaoLimpar() {
    document.getElementById("Verificacao").innerHTML = ""
    nrSorteado = parseInt(Math.random() * 100) + 1
    nr = 0 
}