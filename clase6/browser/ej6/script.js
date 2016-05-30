/*
    Atributos

        El objeto de jQuery tiene un metodo llamado attr que nos permite tanto
        obtener el valor de un atributo como también establecerlo.

        Ejemplo:
            $().attr(nombreAtributo); -> retorna el valor de un atributo
            $().attr(nombreAtributo, nuevoValor); -> asigna un nuevo valor al atribut
*/

// Esperamos que el documento esté cargado
$(function() {
    console.log($('h2').attr('id'));
    console.log($('img').attr('class'));

    $('h2').attr('id', 'nuevo-id');
    $('img').attr('class', 'borde');

    var boton = document.querySelector('button');
    boton.addEventListener('click', function() {
        $('img').attr('width', '650px');
        $('img').attr('height', '500px');
    });
});
