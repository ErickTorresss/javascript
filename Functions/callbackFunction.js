// CallBack Function

function sayMyName(name){
    console.log('Antes d executar o callback')

    name()

    console.log('Depois de executar o callback')
}
sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)

/*
    Em resumo, uma Callback Function é uma função passada como argumento para outra função e é executada dentro dessa função. Elas são muito usadas em operações assíncronas em JavaScript, permitindo que o código continue a ser executado enquanto a operação é realizada em segundo plano. As Callbacks podem ser anônimas ou nomeadas e podem ser definidas como funções de flecha ou funções regulares. No entanto, o uso excessivo de Callbacks pode levar a um fenômeno conhecido como "Callback Hell", onde o código se torna difícil de ler e manter. Outras técnicas, como Promises e Async/await, podem ser usadas para evitar esse problema.
*/
