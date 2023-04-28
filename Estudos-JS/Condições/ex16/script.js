function calcular() {
  var velocidade = document.getElementById("velocidade");
  var res = document.getElementById("res");
  var vel = Number(velocidade.value);

  res.innerHTML = `Sua velocidade é de <strong>${vel}Km/h</strong>`;

  if (vel > 60) {
    res.innerHTML += `<p>Você está MULTADO pois passou de </strong>60Km/h</strong></p>`;
  }
}
