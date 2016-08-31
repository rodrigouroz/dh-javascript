/*
    Selectores:

            getElementsByName(nombreDelElemento):
                Acepta un string como parametro y retorna una array de
                elementos que tengan el atributo name que se pasó como parametro.
                Retorna una array vacio en caso de no encontrar elementos con
                dicho nombre.

*/

// Esperamos que esté cargada la página.
window.onload = function() {

    // buscamos los elementos que tengan el nombre 'nombre-de-la-fiesta'
    var elementosPorNombre = document.getElementsByName('nombre-de-la-fiesta');

    // obtenemos un array con un elemento.
    console.log(elementosPorNombre);

    // accedemos al primer elemento
    console.log(elementosPorNombre[0]);

    // accedemos al primer elemento
    console.log(elementosPorNombre.item(0));

    var arrayVacio = document.getElementsByName('algun-elemento');

    // al no encontrar ningún elemento con ese nombre retorna una nodeList vacio
    console.log('nodeList(array) vacio: ', arrayVacio);

}
