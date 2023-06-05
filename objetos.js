var listaCarros = []

//Declarando um objeto e informando os atributos 
//Todo objeto é declarando com {}
var carro = {
    ano: '2020',
    modelo: 'Gol',
    marca: 'VW'
}
//Para exibir o atributo do objeto faço a seguinte forma objeto.atributo
console.log(carro.ano + '-' + carro.modelo)
console.log(`${carro.ano} - ${carro.modelo}`) //Melhor jeito de fazer

//Adicionando o objeto carro ao vetor listaCarros
listaCarros.push(carro)
console.log(listaCarros .length)// 1 - so existe 1 item

//Novo objeto - novo carro
carro = {
    ano: '2022',
    modelo: 'Onix',
    marca:'GM'
}

listaCarros.push(carro)
console.log (listaCarros.length)

for(var andar in listaCarros){
    console.log(listaCarros[andar].modelo)
}