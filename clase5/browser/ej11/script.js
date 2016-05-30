/*
    Atributos:

        getAttribute(nombreAtributo):
            retorna el valor del atributo y null en caso de no encontrarlo.
*/

// Esperamos que esté cargada la página.
window.onload = function() {

    var elementoH1 = document.querySelectorAll('h1')[0];
    console.log(elementoH1.getAttribute('title'));

    var titulo = document.querySelectorAll('#titulo').item(0);
    console.log(titulo.getAttribute('id'));

    var foto = document.querySelectorAll('.foto').item(0);
    console.log(foto.getAttribute('class'));

}
