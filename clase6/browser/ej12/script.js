/*
    Modificar un elemento:

        El objeto de jQuery tiene 2 métodos que nos permiten tanto obtener
        como establecer el valor de su contenido. Como vimos esto puede
        ser un texto o formato HTML.

        Para cambiar u obtener el texto utilizamos el método text(). Es lo mismo
        que podemos hacer utilizando innerText o textContent.

        Ejemplo:

            $(selector).text(); -> obtiene el texto.
            $(selector).text(nuevoValor); -> establece el texto.

        Para cambiar u obtener el contenido HTML utilizamos el método html(). Es
        lo mismo que podemos hacer utilizando innerHTML.

        Ejemplo:

            $selector.html(); -> obtiene el conteniodo encodeado en HTML.
            $selector.html(nuevoValorHtml); -> establece el nuevo contenido en formato HTML.
*/

$(function() {
    var $titulo = $('<h1>');
    $titulo.text('Bienvenidos a jQuery');
    console.log('Contenido del título usando método text(): ', $titulo.text());

    var $parrafo = $('<p>');
    $parrafo.text('jQuery es una librería escrita en Javascript que nos permite hacer las cosas más fáciles.');
    console.log('Contenido del párrafo usando método text(): ', $parrafo.text());

    var $div = $('div');
    $div.html('<h3>Este título se creó utilizando el método HTML</h3>');
    console.log('Contenido del div utilizando el método html(): '$div.html());
});
