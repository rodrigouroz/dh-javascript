/*
    Padres / hijos:

        El objeto jQuery tiene métodos para manejar la relación entre elementos
        hijos y padres.

        Por medio del método parent() podemos obtener el elemento padre del
        objeto que llamó el método.

        Estructura:
            $(selector).parent(); -> retorna el padre del elemento.

        Para conocer los hijos de un elmento utilizamos el metodo children().
        Este métod se puede llamar con un string como parámetro y va retornar
        los hijos que cumplan sólo con esa condición.

        Estructura:
            $(selector).children(); -> retorna los hijos de un elemento.
            $(selector).children(selectorDeHijos); -> retorna los hijos de un elemento filtrado por el selector de hijos.
*/

$(function() {
    // buscamos todos los elementos li de la lista de invitados
    // seleccionamos el primer elemento utilizando firts()
    // obtenemos el elemento padre de la lista
    // obtenemos el atributo ID de la lista
    var idLista = $('#lista-de-invitados li').first().parent().attr('id');
    var $lista = $('#lista-de-invitados');

    // imprimimos el ID de la lista
    console.log(idLista);

    // imprimimos los hijos de la lista
    console.log($lista.children());

    // imprimimos el hijo que tiene la clase
    console.log($lista.children('.resaltado').text());
});
