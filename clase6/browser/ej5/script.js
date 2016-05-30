/*
    Selectores

        Para buscar un elemento por class sólo tenemos que usar el selector
        de CSS para class.

        Ejemplo:
            .nombredelaclase
*/

// Esperamos que el documento esté cargado
$(function() {
    // retorna un objeto jQuery con 1 elemento img que tiene el class buscado.
    console.log($('.negrita'));
});
