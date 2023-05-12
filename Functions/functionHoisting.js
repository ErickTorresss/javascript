// Function Hoisting

sayMyName()

function sayMyName(){
    console.log('Erick')
}
/*
    O hoisting de funções é um comportamento em JavaScript onde as declarações de funções são movidas para o topo do escopo atual durante a compilação do código, antes da execução real. Isso significa que, mesmo que uma função seja declarada em um ponto posterior no código, ela ainda pode ser chamada antes de sua declaração, sem causar um erro de referência indefinida.

    No entanto, é importante notar que apenas a declaração da função é elevada, não sua atribuição ou inicialização. Isso significa que, se uma função for declarada com uma atribuição a uma variável, a variável não será elevada e sua referência antes da atribuição resultará em um valor undefined.

    Para evitar problemas de hoisting e manter o código mais legível e organizado, é recomendável declarar todas as funções no início do escopo em que são usadas, ou usar funções como expressões ao invés de declarações.
*/