/*
    Vaciar un elemento:

        El objeto de jQuery tiene un método empty() que nos permite remover el
        contenido de un elemento.

        Estructura:
            $(selector).empty();
*/

$(function() {
    // seleccionamos el la lista de invitados
    var $listaDeInivitados = $('#lista-de-invitados');

    // vaciamos la lista de invitados
    $listaDeInivitados.empty();

    // otra opción de lograr esto es usando el método html con un string vacío
    $listaDeInivitados.html('');

    // llenamos la lista de invitados con muchos amigos del exterior
    $listaDeInivitados.append($('<li></li>').text('Han Solo'));
    $listaDeInivitados.append($('<li></li>').text('Chewbacca'));
    $listaDeInivitados.append($('<li></li>').text('Princesa Leia'));
    $listaDeInivitados.append($('<li></li>').text('Luke Skywalker'));

    $('h1').text('Ahora esta fiesta es galáctica!!');
});
