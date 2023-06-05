function Botaofilmes() {
    var filmes = ['Harry Potter', 'Interestrelar', 'Star Wars', 'Vingadores', 'Barbie']
    for (var i = 0; i < filmes.length; i++) {
        document.getElementById("Exibir").innerHTML += `Posição no vetor ${i}-filme ${filmes[i]}<br> `
    }
}