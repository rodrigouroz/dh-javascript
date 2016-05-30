/*
    Atributos:

        removeAttribute(nombreAtributo, valorAtributo):
            Por medio de este metodo podemos agregar un nuevo atributo o modificar
            uno existente.
*/

// Esperamos que esté cargada la página.
window.onload = function() {

    var elementoH1 = document.querySelectorAll('h1')[0];
    elementoH1.removeAttribute('class');

    var elementoP = document.querySelectorAll('p').item(0);
    elementoP.removeAttribute('class');

}
