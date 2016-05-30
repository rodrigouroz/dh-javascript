/*
    jQuery Plugin:

        jQuery tiene muchos plugins que nos permiten agregar funcionalidad
        a nuestros sitios de una manera muy fácil.

        URL:
            http://zurb.com/playground/reveal-modal-plugin

        Al construir un elemento usando un plugin por lo general podemos
        utilizar un objeto literal con propiedades para configurar el nuevo-modal
        elemento del plugin.

        Estructura:
            $(selector).nombreElementoPlugin({
                propiedad: valor,
                propiedad1: valor1
            });
*/

// Esperamos que esté cargada la página.
$(function() {
    $('#normal').click(function(evento) {
        // al agregar el plugin reveal podemos llamar al método reveal para
        // crear un elemento modal de reveal.
        $('#nuevo-modal').reveal();
    })

    $('#con-propiedades').click(function(evento) {
        // creamos un objeto literal con propiedades que tiene el modal
        // estas propiedades siempre salen de la documentación del plugin
        var configuracionModal = {
             animation: 'none',
             animationspeed: 100,
             closeonbackgroundclick: true,
             dismissmodalclass: 'close-reveal-modal'
        }
        // le pasamos las propiedades de configuración del modal.
        $('#nuevo-modal').reveal(configuracionModal);
    })
});
