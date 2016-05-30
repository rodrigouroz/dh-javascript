/*
    Formularios:

        Los formularios en HTML son una manera muy buena de obtener datos por
        parte del usuario.

        Por medio de Javascript podemos manejar los valores y eventos del
        formulario como también de sus elementos. También podemos validar los
        datos que el usuario ingresa.

        Podemos seleccionar un formulario utilizando los métodos getElementById(),
        getElementsByTagName() o querySelector().

        Ejemplo:

            var form = document.getElementById(idFormulario);

        Otra forma de seleccionar los formularios es por medio del objeto
        document utilizando la coleccion de forms. Cada elemento puede ser accedido
        utilizando una propiedad del formulario.

        Ejemplo:
            var formulario = document.forms[0];
*/

window.onload = function() {
    // obtenemos el elemento formulario por medio de su ID
    var form = document.getElementById('formulario-de-invitados');
    console.log('form usando getElementById()', form);

    // por medio de la colección document.forms podemos obtener el primer elemento
    form = document.forms[0];
    console.log('form usando document.forms[indice]', form);
}
