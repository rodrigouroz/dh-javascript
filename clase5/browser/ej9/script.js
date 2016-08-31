/*
    Selectores:

            querySelectorAll(nombreDeLaClase):
                Acepta un string como parametro y retorna una array de
                elementos que estén comprendidos en el contexto de busqueda
                utilizando el query de css.
                Retorna una array vacio en caso de no encontrar elementos en
                dicho contexto.

*/

// Esperamos que esté cargada la página.
window.onload = function() {

    var elementoH1 = document.querySelectorAll('h1');
    console.log(elementoH1);

    var titulo = document.querySelectorAll('#titulo').item(0);
    console.log(titulo);

    var foto = document.querySelectorAll('.foto').item(0);
    console.log(foto);

    var tabla = document.querySelectorAll('table');
    console.log(tabla);
}
