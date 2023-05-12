/* Function Constructor

    *expressao new
    *criar um novo objeto
    *this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " esta andando"
    }
}
const erick = new Person("Erick")
const joao = new Person("Joao")
console.log(erick.walk())
console.log(joao.walk())

/*
    Em resumo, Function Constructor é uma técnica em JavaScript que permite criar funções dinamicamente em tempo de execução usando a função construtora "Function()". No entanto, essa técnica pode ser arriscada, pois as funções criadas dessa maneira podem ser vulneráveis a ataques de injeção de código. Por essa razão, é importante ter cuidado ao usá-la e evitar criar funções a partir de dados não confiáveis. Existem outras técnicas mais seguras para criar funções em JavaScript, que devem ser preferidas sempre que possível.
*/