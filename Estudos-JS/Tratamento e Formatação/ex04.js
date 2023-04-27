// Solicita ao usuário que digite o primeiro número e converte o valor digitado em um número inteiro usando a função "parseInt()"
var n1 = Number.parseInt(window.prompt("Digite um numero"))

// Solicita ao usuário que digite o segundo número e converte o valor digitado em um número inteiro usando a função "parseInt()"
var n2 = Number.parseInt(window.prompt("Digite outro numero"))

// Calcula a soma dos dois números e armazena o resultado na variável "soma"
var soma = n1 + n2;

// Exibe uma janela de alerta com o resultado da "soma"
alert("A soma dos valore é " + soma)

/*
(number + number) adição
(string + string) concatenação

Quando realizamos a soma de dois números, um quebrado (como "5.5") e outro inteiro (como "5"), 
o resultado esperado é a soma dos dois valores, ou seja, "10.5".
No entanto, se utilizarmos a função "parseInt()" para realizar a soma, 
o resultado será um número inteiro, o que significa que o valor quebrado será truncado. 
Portanto, o resultado seria "10", e não "10.5".
Por outro lado, se utilizarmos a função "parseFloat()", 
que é utilizada para converter uma string em um número com casas decimais, 
o resultado da soma de "5.5" e "5" seria "10.5", mantendo a parte decimal do número quebrado.
Assim, é importante escolher a função correta para o tipo de cálculo que se deseja realizar, 
dependendo da necessidade de manter ou descartar a parte decimal do resultado.
Também podemos utilizar somente "Number" para o p
*/