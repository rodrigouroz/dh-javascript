/*
    Formularios:

        Javascript permite utilizar expresiones regulares para encontrar
        patrones de texto en un string.

        Por lo general se pueden utilizar estas expresiones regulares para
        validar los campos de textos.

        Las expresiones regulares o regex tienen un método test() que nos
        permiten validar si un string para saber si cumple con la expresión
        regular.

        Estructura:
            regex.text(texto); -> retorna un valor boolean dependiendo si cumple o no con la expresión regular.

        Vamos a ver algúnos casos más comunes.
*/

window.onload = function() {

    // valida que el string tenga números y letras
    var regexCampoVacio = /^[a-z0-9]+$/i;

    // valida una estructura de mail. Hay muchas opciones para hacer esto
    var regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // seleccionamos los elementos
    var elementoUsuario = document.getElementsByName('usuario')[0];
    var elementoMail = document.getElementsByName('mail')[0];

    // seleccionamos los botones
    var botonLimpiarForm = document.getElementById('limpiar-form');
    var botonIngresar = document.getElementById('ingresar');

    // limpiamos el form al hacer click en el botón limpiar form
    botonLimpiarForm.onclick = function() {
        elementoUsuario.value = '';
        elementoMail.value = '';
        document.getElementsByClassName('error').item(0).style.display = 'none';
        document.getElementsByClassName('exito').item(0).style.display = 'none';
    }

    // podemos crear un usuario haciendo click en el botón crear usuario
    botonIngresar.onclick = function(evento) {
        evento.preventDefault();

        if (regexCampoVacio.test(elementoUsuario.value) && regexMail.test(elementoMail.value)) {
            document.getElementsByClassName('exito').item(0).style.display = 'block';
            document.getElementsByClassName('error').item(0).style.display = 'none';
        } else {
            document.getElementsByClassName('error').item(0).style.display = 'block';
            document.getElementsByClassName('exito').item(0).style.display = 'none';
        }
    }

}
