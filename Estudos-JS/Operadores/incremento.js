var x = 5
console.log(x) // 5

x = x - 1 //Diminui um
console.log(x) // 4

x-- //Diminui um
console.log(x) // 3

x = x + 1 //Adiciona um
console.log(x) // 4

x++ //Adiciona um
console.log(x) // 5

let i = 0;
console.log(++i);  // 1
console.log(i);    // 1
// a expressão "++i" é usada para incrementar o valor de "i" em 1 antes de ser exibido no console


let i = 0;
console.log(i++);  // Saída: 0
console.log(i);    // Saída: 1
// a expressão "i++" é usada para retornar o valor atual de "i" (0) antes do incremento ocorrer

for(let i = 0; i < 5; i++) {
    console.log(i);
  }
  
/*
Nesse caso, a variável i é iniciada com o valor 0 e, em cada iteração do loop, 
o operador de incremento é usado para adicionar 1 ao seu valor. Então, na primeira iteração, 
i vale 0, na segunda iteração i vale 1, e assim por diante, 
até que o loop execute 5 vezes e i tenha o valor 4.
*/
