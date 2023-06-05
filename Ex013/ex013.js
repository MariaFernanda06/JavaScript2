function BotaoMes() {
    var Meses = parseInt(Math.random() * 13) + 1
    var nome = document.getElementById("nome").value
    switch (Meses) {
        case 1:
            document.getElementById("Verificacao").innerHTML = `<p>Parabéns ${nome}, você vai casar em Janeiro!</p>
            <img src= "img/casamento.jpg">`
            break
        case 2:
            document.getElementById("Verificacao").innerHTML = `<p>Parabéns ${nome}, você vai casar em Fevereiro!</p>
            <img src= "img/casamento.jpg">`
            break
        case 3:
            document.getElementById("Verificacao").innerHTML = `<p>Parabéns ${nome}, você vai casar em Março!</p>
            <img src= "img/casamento.jpg">`
            break
        case 4:
            document.getElementById("Verificacao").innerHTML = `<p>Parabéns ${nome}, você vai casar em Abril!</p>
            <img src= "img/casamento.jpg">`
            break
        case 5:
            document.getElementById("Verificacao").innerHTML = `<p>Parabéns ${nome}, você vai casar em Maio!</p>
            <img src= "img/casamento.jpg">`
            break
        case 6:
            document.getElementById("Verificacao").innerHTML = `<p>Parabéns ${nome}, você vai casar em Junho!</p>
            <img src= "img/casamento.jpg">`
            break
        case 7:
            document.getElementById("Verificacao").innerHTML = `<p>Parabéns ${nome}, você vai casar em Julho!</p>
            <img src= "img/casamento.jpg">`
            break
        case 8:
            document.getElementById("Verificacao").innerHTML = `<p>Parabéns ${nome}, você vai casar em Agosto!</p>
            <img src= "img/casamento.jpg">`
            break
        case 9:
            document.getElementById("Verificacao").innerHTML = `<p>Parabéns ${nome}, você vai casar em Setembro!</p>
            <img src= "img/casamento.jpg">`
            break
        case 10:
            document.getElementById("Verificacao").innerHTML = `<p>Parabéns ${nome}, você vai casar em Outubro!</p>
            <img src= "img/casamento.jpg">`
            break
        case 11:
            document.getElementById("Verificacao").innerHTML = `<p>Parabéns ${nome}, você vai casar em Novembro!</p>
            <img src= "img/casamento.jpg">`
            break
        case 12:
            document.getElementById("Verificacao").innerHTML = `<p>Parabéns ${nome}, você vai casar em Dezembro!</p>
            <img src= "img/casamento.jpg">`
            break
        default:
            document.getElementById("Verificacao").innerHTML = `<p>Desculpe ${nome}, você não vai se casar!</p>
            <img src= "img/png-coração-vermelho.png">`
            break
    }

}

