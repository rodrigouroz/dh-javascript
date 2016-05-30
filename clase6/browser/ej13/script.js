/*
    Insertar un elemento:
        El objeto jQuery tiene 2 metodos que nos permiten insertar elementos
        dentro de otros.

        append:
            Acepta un elemento para insertar como parametro
                Estructura:
                    $(selector).append(elementoAInsertar);

        appendTo:
            Acepta un elemento como parámetro que será el contenedor donde se
            va insertar el objeto que llama a este método.
                Estructura:
                    $(selector).appendTo(destino);
*/
$(function(){
    // creamos un elemento h1 y le asignamos un texto.
    var $titulo = $('<h1></h1>').text('Insertando elementos con jQuery!!!');

    // creamos un elemento h2 y le asignamos un texto.
    var $segundoTitulo = $('<h2></h2>').text('Me agregaron usando appendTo!!!');

    // seleccionamos el elemento body.
    var $body = $('body');

    // agregamos a body el elemento título.
    $body.append($titulo);

    // el elemento segundoTitulo es agregado al body.
    $segundoTitulo.appendTo($body);
});
