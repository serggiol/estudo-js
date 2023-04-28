var a = window.document.getElementById('area')

function clicar() {
    a.innerText = "Clicou!"
    a.style.background = "red"
}

function entrar() {
    a.innerText = "Entrou!"
}

function sair() {
    a.innerText = "Saiu!"
    a.style.background = "green"
}


/*
var a = document.getElementById('area');

function interagir(evento) {
    if (evento.type === "click") {
        a.textContent = "Clicou!";
        a.style.background = "red";
    } else if (evento.type === "mouseenter") {
        a.textContent = "Entrou!";
    } else if (evento.type === "mouseleave") {
    		a.style.background = "green"
        a.textContent = "Saiu!";
    }
}

a.addEventListener("click", interagir);
a.addEventListener("mouseenter", interagir);
a.addEventListener("mouseleave", interagir);
*/


/*
var a = document.getElementById('area');

a.addEventListener("click", function() {
    a.innerText = "Clicou!";
    a.style.background = "red";
});

a.addEventListener("mouseenter", function() {
		a.innerText = "Entrou";
})

a.addEventListener("mouseleave", function() {
    a.innerText = "Saiu!";
    a.style.background = "green";
});

*/