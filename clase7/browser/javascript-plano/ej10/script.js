/*
    Formularios:

        Otro de los elementos del formulario es el input type=hidden. Este
        elemento nos permite tener un valor oculto dentro del formulario.
        El usuario no va a ver dicho elemento pero al ser un elementos
        del formulario y estar dentro del mismo será enviado con el resto
        de los datos.

        Al igual que el resto de los elementos del formulario el input type=hidden
        tiene un atributo value que nos retorna o nos permite establecer
        el valor del campo oculto.

*/

window.onload = function() {

    // seleccionamos el elemento oculto
    var elementoOculto = document.getElementsByName('id-usuario').item(0);
    console.log('Elemento oculto: ', elementoOculto);

    // obtenemos el valor por defecto del elemento oculto
    var valorElementoOculto = elementoOculto.value;
    console.log('Valor del elemento oculto: ', valorElementoOculto);

    // establecemos un nuevo valor del elemento oculto
    elementoOculto.value = '123456';

    // vemos que pudimos cambiar el valor del elemento. En este momento el input type=hidden tiene un nuevo valor
    var valorElementoOculto = elementoOculto.value;
    console.log('Valor del elemento oculto: ', valorElementoOculto);
}
