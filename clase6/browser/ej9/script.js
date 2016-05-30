/*
    Atributos

*/

// Esperamos que el documento esté cargado
$(function() {
    var $img = $('img');

    var boton = document.querySelector('button');
    boton.addEventListener('click', function() {
        if ($img.attr('id')) {
            $img.removeAttr('id');
        } else {
            $img.attr('id', 'foto');
        }

    });

});
