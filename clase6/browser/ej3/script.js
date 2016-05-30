/*
    Selectores

        Para buscar un elemento por ID sólo tenemos que usar el Selector
        de CSS para ID.

        Ejemplo:
            #id
*/

// Esperamos que el documento esté cargado
$(function() {
    // retorna un objeto jQuery con 1 elemento img que tiene el ID buscado.
    console.log($('#foto-de-fiesta'));
});
