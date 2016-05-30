/*
    Selectores:

        querySelector(cssQuery):
            Acepta un string como parametro y retorna un elemento que
            esté dentro del rango seleccionado utilizando el css query.
            Retorna null en caso de no encontrar elemento en dicho contexto.

*/

// Esperamos que esté cargada la página.
window.onload = function() {

    var elementoH1 = document.querySelector('h1');
    console.log(elementoH1);

    var titulo = document.querySelector('#titulo');
    console.log(titulo);

    var foto = document.querySelector('.foto');
    console.log(foto);

    var tabla = document.querySelector('table');
    console.log(tabla);
}
