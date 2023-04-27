let texto = " Exemplo de texto para demonstração ";

// Normal
console.log(texto)

// length - retorna o tamanho da string
console.log(texto.length); // 35

// slice() - extrai uma parte da string
console.log(texto.slice(0, 8)); // "Exemplo"

// substring() - similar ao slice(), mas não aceita valores negativos
console.log(texto.substring(8, 11)); // "de"

// substr() - similar ao slice(), mas o segundo parâmetro é o comprimento da substring
console.log(texto.substr(11, 6)); // "texto"

// replace() - substitui um valor por outro na string
console.log(texto.replace("Exemplo", "Exemplo alterado")); // " Exemplo alterado de texto para demonstração "

// replaceAll() - substitui todas as ocorrências de um valor por outro na string
console.log(texto.replaceAll("o", "*")); // " Exempl* de text* para dem*nstraçã* "

// toUpperCase() - converte a string para maiúsculas
console.log(texto.toUpperCase()); // " EXEMPLO DE TEXTO PARA DEMONSTRAÇÃO "

// toLowerCase() - converte a string para minúsculas
console.log(texto.toLowerCase()); // " exemplo de texto para demonstração "

// concat() - concatena duas ou mais strings
console.log(texto.concat("Mais um texto.", " Outro texto.")); // " Exemplo de texto para demonstração Mais um texto. Outro texto."

// trim() - remove espaços em branco no início e no fim da string
console.log(texto.trim()); // "Exemplo de texto para demonstração"

// trimStart() - remove espaços em branco no início da string
console.log(texto.trimStart()); // "Exemplo de texto para demonstração "

// trimEnd() - remove espaços em branco no fim da string
console.log(texto.trimEnd()); // " Exemplo de texto para demonstração"

// padStart() - preenche a string com caracteres no início até atingir um determinado comprimento
console.log(texto.padStart(50, "*")); // "*************** Exemplo de texto para demonstração "

// padEnd() - preenche a string com caracteres no fim até atingir um determinado comprimento
console.log(texto.padEnd(50, "*")); // " Exemplo de texto para demonstração ***************"

// charAt() - retorna o caractere em um determinado índice da string
console.log(texto.charAt(1)); // " "

// charCodeAt() - retorna o código Unicode do caractere em um determinado índice da string
console.log(texto.charCodeAt(0)); // 32

// split() - divide a string em um array de substrings com base em um separador
console.log(texto.split(" ")); // ["", "Exemplo", "de", "texto", "para", "demonstração", ""]
