/*
    Eventos

        Los eventos en jQuery también tienen propiedades y métodos.

        Propiedades:
            * type:
                Tipo de evento.
            * target:
                Es el elemento del DOM que disparó el evento.

            * pageX y pageY:
                Posición del mouse. Esta propiedad la tenemos cuando se utiliza
                un evento de mouse.

        Métodos:
            preventDefault:
                Previene que se ejecute el evento por defaul que tiene asociado
                el elemento.

*/

// Esperamos que esté cargada la página.
$(function() {
    var $irAGoogle = $('.alerta');
    var $prevenirIrAOle = $('.no-ejecutar');
    var $linkDePropiedades = $('.propiedades');

    $irAGoogle.click(function(evento) {
        var confirma = confirm('Seguro queres ir a google?');
        if (!confirma) {
            evento.preventDefault();
        }
    });

    $prevenirIrAOle.click(function(evento) {
        console.log('Parece que no hace nada pero estamos capturando el evento y cambiando la forma de ejecución!');
        evento.preventDefault();
    });

    $linkDePropiedades.click(function(evento) {
        console.log('Tipo de evento: ', evento.type)
        console.log('Target del evento: ', evento.target);
    });

    $linkDePropiedades.mousemove(function(evento) {
        console.log('x:', evento.pageX);
        console.log('y:', evento.pageY);
    });


});
