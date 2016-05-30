/*
    Formularios:

        Otro de los elementos del formulario es el elemento textarea.
        Este elemento nos permite escribir múltiples lineas.

        Con Javascript podemos obtener y establecer el valor de un objeto
        textarea por medio del atributo value.

        Estructura:
            textarea.value; -> obtenemos el valor del textarea
            textarea.value = nuevoValor; -> establecemos el nuevo valor del textarea
*/

window.onload = function() {

    // seleccionamos el elemento textarea
    var elementoComentario = document.getElementsByName('comentario').item(0);
    console.log(elementoComentario);

    // por medio del atributo value podemos obtener el valor del textarea
    var comentario = elementoComentario.value;
    console.log(comentario);

    // al igual que el resto de los elementos del formulario podemos utilizar el value para establecer un nuevo valor
    elementoComentario.value = 'Comentario controlado desde Javascript';

    // obtenemos el nuevo valor que cambiamos en la línea anterior
    comentario = elementoComentario.value;
    console.log(comentario);
}
