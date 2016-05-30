/*
    Remover elementos:

        El objeto de jQuery tiene un método remove() que nos permite remover
        elementos.

        Estructura:
            $(selector).remove();
*/

$(function() {
    var $titulo = $('h1');
    var $listaDeInvitados = $('#lista-de-invitados');

    // removemos a Ro
    $listaDeInvitados.children('li:nth-child(1)').remove();

    // removemos a Xime
    $listaDeInvitados.children('li:nth-child(1)').remove();

    // removemos a Romi
    $listaDeInvitados.children('li:nth-child(1)').remove();

    // removemos a Diana
    $listaDeInvitados.children('li:nth-child(4)').remove();

    // le cambiamos el texto al título
    $titulo.text('Perdón chicas, sale noche de play!!!');
});
