/*
    Selectores:

            getElementsByClassName(nombreDeLaClase):
                Acepta un string como parametro y retorna una array de
                elementos que tengan la clase buscada.
                Retorna una array vacio en caso de no encontrar elementos con
                dicha clase.

*/

// Esperamos que esté cargada la página.
window.onload = function() {

    // buscamos los elementos que tengan la clase 'negrita'
    var textoEnNegrita = document.getElementsByClassName('negrita').item(0);
    console.log(textoEnNegrita);

    var textoEnRojo = document.getElementsByClassName('rojo');

    if (textoEnRojo.length == 0) {
        console.log('no hay texto rojo en este documento');
    }
}
