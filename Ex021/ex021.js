var filmes = []

function Botaofilmes() {
    var nome = document.getElementById("nome").value
    filmes.push(nome)
    document.getElementById('Exibir').innerHTML = ''

    for (var i = 0; i < filmes.length; i++) {
        document.getElementById('Exibir').innerHTML += `${filmes[i]} <br>`
    }

}

function BotaoLimpar() {
    document.getElementById("Exibir").innerHTML = ""
    filmes = []
}
