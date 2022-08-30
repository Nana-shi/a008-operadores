/* Exercicio 2 30/08*/

let numero1
let numero2

numero1 = prompt("Digite um numero:")
numero1 = Number(numero1)
numero2 = prompt("Digite outro numero:")
numero2 = Number(numero2)

console.log("Primeiro numero:", numero1)
console.log("Segundo numero:", numero2)
console.log("O primeiro numero é maior que o segundo?", numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)
console.log("O primero numero é divisivel pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo numero é divisivel pelo primeiro?", numero2 % numero1 === 0)

console.log(numero1 / numero2, numero1 % numero2)