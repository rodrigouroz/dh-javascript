/*
    Eventos
        También podemos controlar los eventos que se disparan cuando se
        presionan las teclas. Por medio del evento keypress, keydown y keyup.

        El objeto del evento tiene propiedades como charCode que nos retorna
        el número de tecla que fué presionado. Con el metodo de string
        String.fromCharCode podemos saber que letra es.
*/

// Esperamos que esté cargada la página.
window.onload = function() {
    var titulo = document.querySelector('h1');

    document.addEventListener('keypress', function(evento) {
        console.log(evento.key);
        if (evento.charCode === 32) {
            titulo.innerHTML += '&nbsp;';
        } else {
            titulo.innerText += String.fromCharCode(evento.charCode);
        }
    });

}
