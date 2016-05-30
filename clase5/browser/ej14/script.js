/*
    Atributos:

        setAttribute(nombreAtributo, valor):
            Por medio de este metodo podemos agregar un nuevo atributo o modificar
            uno existente.
*/

// Esperamos que esté cargada la página.
window.onload = function() {

    var elementoH1 = document.querySelectorAll('h1')[0];
    elementoH1.setAttribute('id', 'titulo-principal');

    var elementoP = document.querySelectorAll('p').item(0);
    elementoP.setAttribute('class', 'negrita');

}
