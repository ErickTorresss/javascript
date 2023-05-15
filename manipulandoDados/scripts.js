/**
    Prototype

    *prototype-based language
    *prototpe chain
    *__proto__


 */

/*
    Prototype é um conceito importante em JavaScript que permite a criação de objetos e a implementação de herança. Cada objeto em JavaScript possui um protótipo, que é usado como base para a criação de novos objetos. A cadeia de protótipos é utilizada para acessar propriedades e métodos em objetos. A definição do protótipo pode ser feita por meio de funções construtoras ou da sintaxe de classes. O sistema de protótipos em JavaScript é essencial para reutilização de código e criação de hierarquias de objetos.
 */

/*
    type conversion (typecasting) vs type coersion

    * Alteracao de um tipo de dado para outro tipo

*/

//console.log('9' + 5) //ocorre uma concatenacao, o '5' passa so tipo number para o tipo string, ou seja, coersion.

//console.log(Number('9') + 5) //ocorre uma conversao de tipo feita de maneira manual usando a funcao '(Number)', passando a string para o tipo Number.

//-------------------------------------------------------------//

// Manipulando Strings e Numeros

//Tranformar String em Numero e Numero em String

//let string = "123"
//console.log(Number(string))
//let numero = 123
//console.log(String(numero))

//-------------------------------------------------------------//

//Manipulando Strings e Numeros

//contar quantos caracteres tem uma palavra e quantos digitos tem um numero

//let word = "Paralelepipedo"
//console.log(word.length)
//let number = 34
//console.log(String(number).length)

//Transformar um numero quebrado com duas casas decimais e trocar ponto por virgula

//let number = 3.1234567
//console.log(number.toFixed(2).replace(".", ","))

//Transforme letras minusculas em maiusculas e faca o contrario depois

//let word = "Programar eh dahora!"
//console.log(word.toUpperCase())
//console.log(word.toLowerCase())

//-------------------------------------------------------------//

//Manipulando Strings e Arrays

// Separe um texte que contem espacos, em um novo array onde cada texto e uma posicao do array. Depois disso, transforme o array em um texto e onde eram espacos, coloque _

//let phrase = "Eu quero viver um amor!"
//let myArray = phrase.split(" ")
//console.log(myArray)
//let phraseWithUnderscore = myArray.join("_")
//console.log(phraseWithUnderscore)

//-------------------------------------------------------------//

//Manipulando Strings

//Verificar se o texto contem a palavra Amor

//let phrase = "Eu quero viver o amor!"
//console.log(phrase.includes("amor"))

//-------------------------------------------------------------//

//Manipulando Arrays

//Criar um Array usando o construtor
//let myArray = new Array('a', 'b', 'c')
//console.log(myArray)

//Contar os elementos de um Array

//console.log(["a", "b", "c"].length)

//-------------------------------------------------------------//

//Manipulando Arrays

//Transformar uma cadeia de caracteres em elementos de um array

//let word = "manipulacao"
//console.log(Array.from(word))

//-------------------------------------------------------------//

//Manipulando Arrays

let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("node.js")
//adicionar no comeco
techs.unshift("sql")
//remover do fim
//techs.pop()
//remover do comeco
//techs.shift()
//pegar somente alguns alementos do array
//console.log(techs.slice(1, 3))
//remover 1 ou mais intems em qualquer posicao do array
//techs.splice(1, 2)
//econtrar a posicao de um elemento no array
let position = techs.indexOf("css")
console.log(position)
techs.splice(position, 1)

console.log(techs)