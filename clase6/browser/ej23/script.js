/*
    Eventos
        El objecto de jQuery tiene eventos para manejar el teclado.

        keydown():
            Es el evento al presionar una tecla sin liberarla.

        keypress():
            Es el evento que se ejecuta al presionar y liberar una tecla.

        keyup():
            Este evento se ejecuta al liberar una tecla.

*/

// Esperamos que esté cargada la página.
$(function() {
    var $titulo = $('h1');

    $(document).on('keypress', function(evento) {
        if (evento.charCode === 32) {
            $titulo.html($titulo.html() + '&nbsp;');
        } else {
            $titulo.text($titulo.text() + String.fromCharCode(evento.charCode));
        }
    });

});
