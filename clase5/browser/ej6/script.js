/*
    Selectores:

            getElementsByTagName(nombreDelTag):
                Acepta un string como parametro y retorna una array de
                elementos que tengan el nombre de etiqueta que se pasó como
                parametro. Retorna una array vacio en caso de no encontrar
                elementos con dicho nombre.

*/

// Esperamos que esté cargada la página.
window.onload = function() {

    // buscamos los elementos que tengan el nombre de etiqueta h1
    var encabezado = document.getElementsByTagName('h1').item(0);
    console.log(encabezado);

    // buscamos los elementos que tengan el nombre de etiqueta h2
    var segundoEncabezado = document.getElementsByTagName('h2').item(0);
    console.log(segundoEncabezado);

    // buscamos los elementos que tengan el nombre de etiqueta img
    var foto = document.getElementsByTagName('img')[0];
    console.log(foto);

    // buscamos los elementos que tengan el nombre de etiqueta p
    var parrafo = document.getElementsByTagName('p')[0];
    console.log(parrafo);

    var tabla = document.getElementsByTagName('table');
    console.log(tabla);

}
