/*
    Formularios:
        Los elementos input type=text tienen un propiedad llamada value
        que nos permite obtener o establecer el valor que tiene un campo de
        texto.

        Estructura:
            elemento.value; // retorna el valor
            elemento.value = valor; // establece un nuevo valor

*/

window.onload = function() {
    var elementoNombre = document.getElementById('nombre');
    var elementoApellido = document.getElementById('apellido');

    elementoNombre.value = 'Gonzalo';
    elementoApellido.value = 'Bertranou';
}
