// Cria uma variavel chamada "salario" e armazena o valor "1200" nela
var salario = 1200

// Imprime normalmente o numero
console.log(salario) // 1200

// Imprime o numero conforme a moeda usada
console.log(salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})) // R$ 1.200,00
console.log(salario.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})) // US$ 1.200,00
console.log(salario.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})) // € 1.200,00