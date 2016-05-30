/*
    Selectores

        Para buscar un elemento por name sólo tenemos que usar el selector
        de CSS para name.

        Ejemplo:
            [atributo=valor]

*/

// Esperamos que el documento esté cargado
$(function() {
    // retorna un objeto jQuery con 1 elemento img que tiene el name buscado.
    console.log($('[name=nombre-de-la-fiesta]'));
});
