/*
    Atributos:

        Attributes:
            En cuanto tenemos seleccionado un elemento podemos acceder a sus
            attributos utilizando la propiedad attributes.

            Retorna un mapa (es como un array) que tiene valores key/value con
            los nombres y valores de los atributos de ese elemento.

        Estructura:
            elemento.attributes;
*/

// Esperamos que esté cargada la página.
window.onload = function() {

    var elementoH1 = document.querySelectorAll('h1')[0];
    console.log(elementoH1.attributes);

    var titulo = document.querySelectorAll('#titulo').item(0);
    console.log(titulo.attributes);

    var foto = document.querySelectorAll('.foto').item(0);
    console.log(foto.attributes);

}
