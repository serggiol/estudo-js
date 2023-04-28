var p1 = window.document.getElementsByTagName("p")[0];
document.write(`Está escrito assim : ${p1.innerText}`);

var msg = document.getElementById("test");
msg.innerText = "Clique aqui";

var msg2 = document.querySelector("div#test");
msg2.style.background = "black";
