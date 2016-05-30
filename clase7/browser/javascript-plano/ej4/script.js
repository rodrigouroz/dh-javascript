/*
    Formularios:

        Los elementos del formulario tienen un attributo llamado value que nos
        permite establecer u obtener el valor de un elemento.

        Estructura:
            var elemento = document.forms[indice].elements[indiceElemento];
            elemento.value; -> obtenemos el valor del elemento
            elemento.value = nuevoValor; -> establecemos el nuevo valor del elemento.

*/

window.onload = function() {
    // obtenemos el elemento formulario por medio de su ID
    var form = document.getElementById('formulario-de-invitados');
    var elementos = form.elements;

    var inputNombre = elementos[0];
    var inputApellido = elementos[1];

    var nombre = inputNombre.value;
    var apellido = inputApellido.value;

    console.log('Nombre: ', nombre);
    console.log('Apellido: ', apellido);

    var boton = document.querySelector('button');

    boton.addEventListener('click', function(evento) {
        evento.preventDefault();
        inputNombre.value = 'Romina';
        inputApellido.value = 'Rodriguez';

        console.log('Nuevo valor del input nombre: ', inputNombre.value);
        console.log('Nuevo valor del input apellido: ', inputApellido.value);
    });

}
