let preco = 19.9
let desconto = 0.4
let precoComDesconto = preco * (1 - desconto)

console.log(19.9 * 0.6)
console.log(preco * (1 - desconto))
console.log(precoComDesconto) /*melhor maneira*/

let nome = 'caderno' /*concatenação com o simbolo +*/
let categoria = 'papelaria'
console.log(
  'produto: ' +
    nome +
    ' ,  categoria: ' +
    categoria +
    ' , preco: ' +
    preco +
    ' , desconto: ' +
    desconto
)
