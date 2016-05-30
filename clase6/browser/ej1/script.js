/*
    jQuery

        jQuery es una librería de Javascript que nos ayuda a solucionar
        problemas de compatibilidad entre los browsers. Es muy conocida y
        tiene muchos plugins que nos pueden ser útiles. jQuery simplifica la
        forma de buscar elementos como tambien manipularlos.

        Para poder utilizar jQuery debemos primero incluir la librería en el
        documento html. Se puede descargar desde el sitio oficial de la
        librería (https://jquery.com/). Nuestro código se debe cargar siempre
        luego de la librería.

        Tenemos dos formas de utilizar la librería, por un lado podemos usar
        jQuery() o $() como shorcut. Estas dos funciones están definidas en
        el scope global por lo cual se pueden acceder desde cualquier lado.
*/

// Esperamos que el documento esté cargado
$(function() {
    // si se ejecuta esta linea sabemos que se cargó jQuery
    console.log( 'Vamosss tenemos cargado jQuery!' );
});

jQuery(function() {
    console.log( 'también podemos utilizar jQuery como función.' );
});
