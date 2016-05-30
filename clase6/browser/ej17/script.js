/*
    Llamados encadenados:

        El objeto de jQuery al usarlo como selector puede retornar una colección
        de elementos o un elemento. Cuando retorna un elemento podemos hacer
        llamados anidados y se irán ejecutando en el orden que nosotros lo
        establecemos.

        Estructura:
            $(selector).metodo().metodo().metodo();
*/

$(function() {
    var $lista = $('#lista-de-invitados');

    // 

    $lista.children('li').find('.destacado').css('color',
        'pink').css('text-decoration', 'none').parent().css('color', 'pink');
});
