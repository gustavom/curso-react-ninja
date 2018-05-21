'use strict'

console.log('Arrow functions:')

// var sum = function (x, y){
//   return x + y
// }

// var sum = (x, y) => {
//   return x + y
// } 

// arrow functions com apenas um unico retorno, não precisa ficar entre chaves, pode chamar diretamente como o exemplo abaixo (remover a palavra 'return')
var sum = (x, y) => x + y 

// arrow functions com apenas um argumento/parametro da função, não precisa indicar ele entre parenteses, chame diretamente
var add1 = argumentoSimples => sum(argumentoSimples, 1)

console.log( sum(1,2) )
console.log( add1(5) )