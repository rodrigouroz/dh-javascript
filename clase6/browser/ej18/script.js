/*
    Crear e insertar elementos:
*/

// Esperamos que esté cargada la página.
window.onload = function() {
    // buscamos el elemento que va a funcionar como contenedor de los nuevos elementos
    var $listaDeInvitados = $('#lista-de-invitados');

    // definimos un array de lista de invitados
    var nombresDeInvitados = ['Gonzalo', 'Ro', 'Xime', 'Sergio', 'Romi', 'Ale', 'Diana'];

    // recorremos la lista de invitados
    nombresDeInvitados.forEach(function(nombre) {
        // por cada invitado creamos un elemento li (list item)
        $('<li></li>').text(nombre).appendTo($listaDeInvitados);
    });
}
