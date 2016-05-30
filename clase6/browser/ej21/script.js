/*
    Crear e insertar elementos:
        Utilizando el método createElement de document y el método appendChild
        de element, podemos crear e insertar nodos dentro de otros nodos.

        Podemos crear nodos de texto utilizando el metodo element.createTextNode.
*/

$(function() {
    var $listaDeInvitados = $('#lista-de-invitados');
    var nombresDeInvitados = ['Gonzalo', 'Ro', 'Xime', 'Sergio', 'Romi', 'Ale', 'Diana'];

    nombresDeInvitados.forEach(function(nombre) {
        $('<li></li>').text(nombre).on('click', function() {
            var confirmaBorrarElemento = confirm('Ud. quiere borrar este elemento?');
            if (confirmaBorrarElemento) {
                $(this).remove();
            }
        }).appendTo($listaDeInvitados);
    });
});
