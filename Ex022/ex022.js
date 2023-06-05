var filmes = []
var links = []
function Botaofilmes() {
    var nome = document.getElementById("nome").value
    var link = document.getElementById("link").value
    filmes.push(nome)
    links.push(link)
    document.getElementById('Exibir').innerHTML = ''

    for (var i = 0; i < filmes.length; i++) {
        document.getElementById('Exibir').innerHTML += `<div><img src="${links[i]}"><p>${filmes[i]}</p></div>`
    }

}

function BotaoSorteio(){
    var filmesorteado = parseInt(Math.random()*filmes.length)
    document.getElementById("Exibir").innerHTML = `<div><img src="${links[filmesorteado]}"><p>${filmes[filmesorteado]}</p></div>`
}