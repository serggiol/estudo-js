function verificar() {
  var nacionalidade = document.getElementById("nacionalidade");
  var nacionalidade = nacionalidade.value;
  var exibir = document.getElementById("exibir");

  if (nacionalidade == "Brasil") {
    exibir.innerHTML = "Você é Brasileiro";
  } else {
    exibir.innerHTML = "Você é estrangeiro";
  }
}
