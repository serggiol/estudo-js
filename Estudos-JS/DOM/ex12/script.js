/* 
Variavel "p1" recebe o primeiro elemento "p" encontrado
na pagina HTML. Essa variavel é usada para exibir o texto contido
dentro do elemento "P" através do "document.write", que insera o texto
no corpo da pagina HTML
*/
var p1 = window.document.getElementsByTagName("p")[0];
document.write(`Está escrito assim : ${p1.innerText}`);

/*
Variavel "msg" recebe o elemento HTML identificado pelo id "test".
Em seguida, o texto do elemento é atualizado para "Clique aqui";
*/
var msg = document.getElementById("test");
msg.innerText = "Clique aqui";

/*
Variavel "msg2" recebe o elemento HTML "div"
identificado pelo id "test" e altera o seu plano de fundo para preto.
*/
var msg2 = document.querySelector("div#test");
msg2.style.background = "black";
