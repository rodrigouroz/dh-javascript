// Esperamos que esté cargada la página.

var segundos;
var interval;
var contador;

function inicializar() {

  if (interval) {
    window.clearInterval(interval);
  }

  segundos = 10;

  contador.textContent = segundos;

  interval = window.setInterval(function () {
    contador.textContent = --segundos;

    if (segundos == 0) {
      window.location = 'https://www.digitalhouse.com/';
    }

  }, 1000);
}

window.onload = function() {
    contador = document.getElementById('contador');

    inicializar();

    document.addEventListener('mousemove', function () {
        inicializar();
    });
}
