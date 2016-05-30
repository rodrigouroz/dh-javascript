/*
    Eventos
        Por medio del objeto event podemos conocer más datos sobre el evento o
        prevenir que se ejecute el circuito por defecto de ejecución.

        Para prevenir la ejecución de un evento por defecto utilizamos
        el metodo preventDefault.

        Estructura:
            evento.preventDefault();
*/

// Esperamos que esté cargada la página.
window.onload = function() {
    var irAGoogle = document.querySelector('.alerta');
    var prevenirIrAOle = document.querySelector('.no-ejecutar');

    irAGoogle.addEventListener('click', function(evento) {
        var confirma = confirm('Seguro queres ir a google?');
        if (!confirma) {
            evento.preventDefault();
        }
    });

    prevenirIrAOle.addEventListener('click', function(evento) {
        console.log('Parece que no hace nada pero estamos capturando el evento y cambiando la forma de ejecución!');
        evento.preventDefault();
    });
}
