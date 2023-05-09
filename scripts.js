//1. Declare uma variavel de nome weight
//let weight

//2. Qual é o tipo da variável acima?
//console.log(typeof weight)
//undefined

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        *name: String
        *age: Number (integer)
        *stars: Number (float)
        *isSubscriebed: Boolean
*/

//let name = 'Erick'
//let age = 20
//let stars = 7.5
//let isSubscriebed = true

/*
    4. A variável student é de que tipo de dado?
    4.1. Atribua a ela as mesmas propriedades e valores do exercício 3.
    4.2. Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.
*/

let student = {
    name: 'Erick',
    age: 20,
    weight: 60.5
}
//console.log(student)
//console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
   5. Declare uma variavel do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
*/

let students = []

/*
  6. Reatribua valor para a variavel acima, colocando dentro dela o objeto da questão 4. (Não copiar e colar o objeto, mas usando o objeto criado e inserir ele no Array)
*/

students = [
    student
]

console.log(students)

/*
  7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])

/*
  8. Crie um novo student e coloque na posição 1 do Array acima
*/

const petros = {
    name: 'Petros',
    age: 20,
    weight: 80.0
}

students = [
    student,
    petros
]

/*
  9. Sem rodar o código responda qual é a resposta do código abaixo e porque? Após sua resposta, roda o código e veja se você acertou.

  console.log(a)
  var a = 1
*/

//R: a resposta será 1. pois a variavel var é global, mesmo que ela seja declarada depois da saida de dados, ela sera exibida no console. caso ela nao fosse declara antes, tao pouco depois do 'console.log()' o resultado seria undefined.

//console.log(a)
//var a = 1

//Correção: a resposta correta é undefined. pois no momento em que o console chama a variavel a, ela ainda nao esta declarada. logo apos sua declaração sendo uma variavel (var), ela sofre o hoisting. ou seja, o valor da variavel está indefinido.

//console.log(a)
//var a = 1