/*
    Crear un elemento:

        Por medio de la función de jQuery podemos crear nuevos elementos. para
        esto debemos pasarle como parámetro una etiqueta con formato HTML.

        Ejemplo:

            $('<p></p>');
*/

$(function() {
    var titulo = $('<h1></h1>');
    console.log('Elemento h1:', titulo);

    var parrafo = $('<p>nuevo párrafo.</p>');
    console.log('Parrafo:', parrafo);

    var div = $('<div></div>');
    console.log('Div: ', div);
});
