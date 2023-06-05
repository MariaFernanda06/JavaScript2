/*Comentario em 
multiplas lihas*/

//Comentario em uma linha

//O alert é utilizado para exibir uma mensagem em popup
//alert("Olá Mundo")

/*No console conseguimos visualizar informações, 
sem exibir na pagina*/
console.log("Olá mundo! Utilizando console!")

//Criando uma função chamada quando clicamos no botão
function BotaoTeste() {
    alert("Você clicou no botão")
}

//Tipos de exibição de mensagens no console
console.error("Esta é uma mensagem de erro")
console.warn("Esta é uma mensagem de alerta")
console.info("Esta é uma mensagem de informação")

//Declarando variaveis

//String - conjunto de caracteres - declarar com "" ou ''
var nome = "Maria Fernanda"
var sobrenome = "Messias Adono"
var salario = 1290.85 //Para atribuir um valor decimal utilizar ponto e não virgula

//Number - todo numero em JS é do tipo Number - declarar sem ""
var idade = 16

//Bolean - somente recebe true ou false
var aprovado = true

console.log(typeof nome) //Comando typeof para saber o tipo do dado

console.log(nome + ' ' + sobrenome) //concateando string com o +

console.log(n1 + n2)//Irá somar as 2 variaveis number (35)
//Se utilizarmos o + com string ele concatena se utilizar com number soma
var n1 = 10
var n2 = 25

console.log(n3 + n4)//Irá concatear "juntar" as 2 variaveis ("1025")
var n3 = "10"
var n4 = "25"

n1 = n2 //Uma variavel pode receber o valor de outra variavel
console.log("n1=" + n1 + 'e o n2=' + n2)

salario = salario + 200 //Posso também somar a variavel com ela mesmo
console.log(salario)

salario += 200 //Representação mais simplificada da expressão acima
console.log(salario)

//Antigamente para juntar os textos e variaveis faziamos assim
console.log('Olá,' + nome + 'você tem ' + idade + 'anos e recebe R$' + salario)
//Hoje utilizanos a forma mais simples
console.log(`Olá, ${nome} você tem ${idade} anos e recebe ${salario}`)

//função do botão para obter o nome
function BotaoNome() {
    //no prompt abre opção para digitar algo
    var nome2 = prompt('Qual é o seu nome ?')
    //no confirm abre texto com opção ok e cancela
    confirm(`Olá ${nome2}, entendeu JS ?`)
}

function BotaoNumero() {
    //Receber valor1 de um prompt
    var valor1 = prompt("Informe o valor 1:")
    //Receber valor2 de um prompt
    var valor2 = prompt("Informe o valor 2:")
    //Posso utilizar parseInt() ou parseFloat() ou Number()
    //Variavel soma recebendo um valor1 + valor2
    //Convertendo a variavel de string para number
    var soma = Number(valor1) + Number(valor2)
    console.log(valor1 + valor2)
    //Exibir um alert o valor da soma
    //alert(`A soma dos numeros é: ${soma}`)
    document.getElementById("ResultadoSoma").innerHTML += `<br> A soma dos numeros ${valor1} e ${valor2} é = ${soma}`

}

function ExibirCidade() {
    //Variavel nomecidade recebendo o conteudo digitado no input
    var nomecidade = document.getElementById("cidade").value //".value"só se utiliza para input
    document.getElementById("ResultadoCidade").innerHTML = nomecidade
}

//operadores aritméticose ordem de precedencia
var opSoma = 5 + 2 //operador e soma +
console.log(opSoma) //7

var opSubtracao = 5 - 2 //operador de subtração -
console.log(opSubtracao) //3

var opMultiplicacao = 5 * 2 //operador de multiplicação *
console.log(opMultiplicacao) //10

var opDivisao = 5 / 2 //operador de divisão /
console.log(opDivisao) //2.5

var opExponenciacao = 5 ** 2 //operador de exponenciação **
console.log(opExponenciacao) //25

var opResto = 5 % 2 //operador de resto da divisão %
console.log(opResto) //1

//ordem de precedencia
var ordemPrecedencia1 = 5 + 3 / 2
console.log(ordemPrecedencia1) //6.5

var ordemPrecedencia2 = (5 + 3) / 2
console.log(ordemPrecedencia2) //4

/* 
 1º ()
 2º **
 3º * e /
 4º %
 5º + e -
*/

//constantes - valor não pode ser alterado depois de atribuido
const pi = 3.14
// pi = 3 - se o valor for alterado dara erro no javascript

//Auto atribuição
var n = 3
n = n + 3 // a variável recebe ela mesmo + 3
n += 3    // quer dizer o mesmo que a expressão acima 

n++ // quando precisamos somar + 1 ao valor da variável
n-- // quando precisamos subtrair -1 ao valor da variável

//Operadores Relacionais
var n1 = 5
var n2 = 6
console.log(n1 > n2) // > Maior que
console.log(n1 < n2) // < Menor que
console.log(n1 >= n2) // >= Maior ou igual que
console.log(n1 <= n2) // <= Menor ou igual que
console.log(n1 == n2) // == Igual
console.log(n1 != n2) // != Não igual - Diferente

//Estruturas condicionais
if (n1 > n2) {        //Verificando a condição entre parenteses
    // Se a condição for verdadeira "entra" nesse bloco
    console.log("O n1 é maior que o n2")
} else {
    // Se a condição NÃO for verdadeira "entra" nesse bloco ELSE
    console.log("O n1 não é maior que o n2")
}
//Exemplo de condição
var minhaIdade = 18
if (minhaIdade >= 16) {
    console.log("Você pode votar")
} else {
    console.log("Você NÃO pode votar")
}

//Operadores logicos
// && representa o E
var login = "adm"
var senha = "123"
//Para entar condição TRUE as duas condições precisam ser verdadeiras
if (login == "adm" && senha == "123") {
    //executa esse bloco quando as condições são TRUE
}
else {
    //executa esse bloco se pelo menos 1 condição dor FALSE
}

var media = 6
//operador OU -> || (pipe)
//para entar na condição TRUE pelo menos 1 condição precisa ser verdadeira
if (media == 6 || media == 5) {
    //executa esse bloco quando 1 condição é TRUE pelo menos
}
else {
    //aqui entra se todas as condições forem falsas
}

//Estruturas condicionais encadeadas
if (media >= 7) {
    console.log("Aprovado")
}
else if (media >= 5) { //podemos fazer um novo if junto com o else
    console.log("Recuperação")
}
else if (media < 5) {
    console.log("Reprovado")
}

//debugger
//podmos utilizar o debugger para analisar o código linha a linha

//exit
//Quando queremos para de executar uma função do JS utilizamos o exit

//Para sortearmos um valor aleatorio utilizamos o Math.random()
//O Math.random retorna um numero decimal e precisamos multiplicar pelo nr maximo que desejamos e somar 1 quando necessario
//O parseInt utilizamos para obter apenas a parte inteira do numero
var nrSorteado = parseInt(Math.random() * 100) + 1
console.log(nrSorteado)

//Switch Case
//É como de fosse varios if de forma mais simples 
var diaSemana = 3
debugger
switch (diaSemana) {
    case 1:
        console.log("Hoje é Domingo")
        break //Para o switch case e não verifica as outras opções

    case 2:
        console.log("Hoje é: Segunda")
        break

    case 3:
        console.log("Hoje é: Terça")
        break

    case 4:
        console.log("Hoje é: Quarta")
        break

    case 5:
        console.log("Hoje é: Quinta")

        break
    case 6:
        console.log("Hoje é: Sexta")
        break

    case 7:
        console.log("Hoje é: Sábado")
        break
    default:
        console.log("Dia inválido")
}

//Laços de repetição WHILE (que quer dizer enquanto)
//WHILE (condição)
//Enquanto a condição dos parenteses for veraddeira
//Continua repetindo o código do bloco

var nrvidas = 5
while (nrVidas > 0){
    console.log(`Você ainda tem ${nrVidas}`)
    nrVidas--
}

//Verificando se numero é par com while
var contador = 1 //Iniciando contador de vezes que irá executar
while(contador <= 10) {//Enquanto a condição for verdadeira 
    if(contador % 2 == 0){//condição para quando o contador for par
        console.log(`${contador} é par `)
    }
    else{
        console.log(`${contador} é ímpar `)
    }
    contador++ //Adicionamos +1 ao contador para não ficar em loop infinito
}

for (var cont = 1; cont <= 5; cont++){
    console.log(cont)
}
//For - laço de repetição
//1ª Expressão var i = 1
//(Aqui eu inicio o controle de vezes)
//2ª Expressão i <= 10
//(Aqui nós verificamos a condição para se manter no loop)
//3ª Expressão i++
//(Aqui acrescentamos na variavel +1 vez)
//Exibindo
for (let i = 1; i <= 10; i++) {
    console.log(i)
}