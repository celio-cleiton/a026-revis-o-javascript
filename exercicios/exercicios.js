// Exercício 01
const nomeDoProduto = prompt("Digite o nome do produto")
let precoDoProduto = Number(prompt("Digite o Valor do produto"))
precoDoProduto = precoDoProduto - 1
console.log(`O GERENTE FICOU DOIDO! Desconto de 1 real no
preço do produto ${nomeDoProduto} valor R$${precoDoProduto}`)

// Exercício 02
const num1 = Number(prompt("Digite o primeiro número"));
const num2 = Number(prompt("Digite o segundo número"));
console.log(`Seus números são: num1 = ${num1} e num2 = ${num2}`);
console.log("Soma:", num1 + num2);
console.log("Subtração:", num1 - num2);
console.log("Multiplicação:", num1 * num2);
console.log("Divisão:", num1 / num2);
console.log("Resto da Divisão:", num1 % num2);

//Exercício 03
const numeroSorteado = Math.floor(Math.random() * 10) + 1
const numeroRecebido = Number(prompt("Digite um número de 1 a 10"))
console.log(`O número sorteado foi: ${numeroSorteado}`)
if (numeroRecebido === numeroSorteado){
    console.log("Seu número é igual ao número sorteado!")
} else if (numeroRecebido > numeroSorteado){
    console.log("Seu número é maior do que o número sorteado!")
} else {
    console.log("Seu número é menor do que o número sorteado!")
}

// Exercício 04
const idade = Number(prompt("Digite sua idade"))
const altura = Number(prompt("Digite sua altura em centímetros"))
const temProblemaCardiaco = prompt("Você tem algum problema cardíado? S/N")
if (idade >= 18 && altura >= 160 && temProblemaCardiaco === "N") {
    console.log("Pode entrar no brinquedo")
} else {
    console.log("Não pode entrar no brinquedo")
}

// Exercício 05
const frase = "  Hoje eu vou comer beterraba uva  "
console.log(frase, frase.length)
console.log(frase.trim(), frase.length)
console.log(frase.toLowerCase())
console.log("Tem a palavra comer?", frase.includes("comer"))
console.log("Tem a palavra batata?", frase.includes("batata"))
const novaFrase = frase.replaceAll("beterraba", "batata")
console.log(novaFrase)
console.log("Tem a palavra comer?", novaFrase.includes("comer"))
console.log("Tem a palavra batata?", novaFrase.includes("batata"))

// Exercício 06
const listaDeCompras = ["batata", "cenoura", "beterraba"]
console.log(listaDeCompras[1])
console.log("Tamanho da lista:", listaDeCompras.length)
listaDeCompras.push("Mandioca","Beterraba","Uva")
console.log(listaDeCompras)
console.log("Tem cenoura?", listaDeCompras.includes("cenoura"))
listaDeCompras.splice(1, 1)
console.log(listaDeCompras)

// Exercício 07
const array = [56, 27, 9, 19, 15]

function divideDois1 (arrayDeNumeros) {
    const primeiro = arrayDeNumeros[0] / 2
    const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2

    arrayDeNumeros[0] = primeiro
    arrayDeNumeros[arrayDeNumeros.length-1] = ultimo
    return arrayDeNumeros
}

let divideDois2 = function (arrayDeNumeros) {
    const primeiro = arrayDeNumeros[0] / 2
    const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2

    arrayDeNumeros[0] = primeiro
    arrayDeNumeros[arrayDeNumeros.length-1] = ultimo
    return arrayDeNumeros
}

let divideDois3 = (arrayDeNumeros) => {
    const primeiro = arrayDeNumeros[0] / 2
    const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2

    arrayDeNumeros[0] = primeiro
    arrayDeNumeros[arrayDeNumeros.length-1] = ultimo
    return arrayDeNumeros
}

console.log(divideDois1(array))
console.log(divideDois2(array))
console.log(divideDois3(array))

// Exercício 08

const pessoa = {
    nome: "Roberta",
    idade: 28,
    generoMusical: "Bolero"
}

console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}`)

const outraPessoa = {
    ...pessoa,
    nome: "Amanda"
}

console.log(outraPessoa)

// Exercício 09
const numero = Number(prompt("Digite um número"))

if (numero % 2 === 0){
    console.log("É par")
} else {
    console.log("É ímpar")
}

// Exercício 10
const animal = prompt("Nome do um animal")

if (animal === "cachorro"){
    console.log("animal encontrado cachorro")
} else if (animal === "gato"){
    console.log("animal encontrado gato")
} else if (animal === "vaca"){
    console.log("animal encontrado vaca")
} else {
    console.log("animal não encontrado")
}

switch(animal){
    case "cachorro":
        console.log("animal encontrado cachorro")
        break;
    case "gato":
        console.log("animal encontrado gato")
        break;
    case "vaca":
        console.log("animal encontrado vaca")
        break;
    default:
        console.log("Animal não encontrado")
        break
}

// Exercício 11
const numeros = [11, 15, 18, 14, 120, 13, 100]

let maior = -Infinity

let i = 0
while(i < numeros.length) {
    if(numeros[i] > maior){
        maior = numeros[i]
    }
    i++
}

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > maior){
        maior = numeros[i]
    }
}

numero = numeros[i]
for (let numero of numeros){
    if(numero > maior){
        maior = numero
    }
}

console.log(`O maior número é ${maior}`)
console.log(`número é ${numero}`)

// Exercício 12
