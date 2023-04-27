// Solicita ao usuário que digite o primeiro número e converte o valor digitado em um número inteiro usando a função "parseInt()"
var n1 = Number(window.prompt("Digite um numero"))

// Solicita ao usuário que digite o segundo número e converte o valor digitado em um número inteiro usando a função "parseInt()"
var n2 = Number(window.prompt("Digite outro numero"))

// Calcula a soma dos dois números e armazena o resultado na variável "soma"
var soma = n1 + n2;

// Exibe uma janela de alerta com o resultado da "soma"
alert("A soma dos valore é " + soma)

/*
(number + number) adição
(string + string) concatenação

Além das funções "parseInt()" e "parseFloat()", existe a função "Number()", 
que também pode ser usada para converter uma string em um número. 
A diferença é que a função "Number()" é capaz de identificar tanto 
números inteiros quanto números quebrados e converter corretamente.
Assim, ao invés de utilizar a função "parseInt()", 
que retorna somente números inteiros, é possível utilizar a função "Number()" 
para realizar a conversão e manter a parte decimal quando necessário. 
É importante lembrar que, ao utilizar a função "Number()" ou "parseFloat()", 
é necessário passar a string que contém o número como parâmetro.
*/
