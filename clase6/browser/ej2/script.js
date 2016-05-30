/*
    Selectores

        La función de jQuery tiene muchas utilidades, una de ellas es la de
        funcionar como selector de elementos utilizando un selector de css
        (string) como parametro.

        Esta función retorna un objeto de jQuery que contiene al o los elementos
        que cumplan con el selector proporcionado. De alguna manera se comporta
        como querySelectAll de Javascript pero en este caso al retornar un
        objeto de jQuery nos permite tener metodos y propiedades propios que
        nos dan mayor funcionalidad.

        Se puede utilizar cualquier selector de CSS3 como también algunos
        propios de jQuery.

        Gracias a que jQuery implementa los selectores de CSS3 se puede utilizar
        para buscar elementos aún en browsers que no soportan esta versión de
        hoja de estilo.

        Estructura:
            $(selectorCss);
*/

// Esperamos que el documento esté cargado
$(function() {
    // retorna un objeto jQuery con 1 elemento h1
    console.log($('h1'));

    // retorna un objeto jQuery con 2 elementos h2
    console.log($('h2'));

    // retorna un objeto jQuery con 1 elemento img
    console.log($('img'));

    // retorna un objeto jQuery con 3 elementos p
    console.log($('p'));

    // retorna un objeto jQuery vacio
    console.log($('table'));

    // En estos ejemplos es como buscar utilizando getElementsByTagName
});
