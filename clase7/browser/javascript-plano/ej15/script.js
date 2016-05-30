/*
    Formularios:

        Por medio del atributo value podemos obtener el valor de un elemento.
        Al mismo tiempo podemos utilizar el atributo length del objeto string
        para saber su longitud. De esta forma podemos validar si el elemento
        está vacío.
*/

window.onload = function() {

    // seleccionamos los elementos
    var elementoNombre = document.getElementsByName('nombre')[0];
    var elementoApellido = document.getElementsByName('apellido')[0];

    // seleccionamos los botones
    var botonLimpiarForm = document.getElementById('limpiar-form');
    var crearUsuario = document.getElementById('submit-form');

    // limpiamos el form al hacer click en el botón limpiar form
    botonLimpiarForm.onclick = function() {
        elementoNombre.value = '';
        elementoApellido.value = '';
        document.getElementsByClassName('error').item(0).style.display = 'none';
        document.getElementsByClassName('exito').item(0).style.display = 'none';
    }

    // podemos crear un usuario haciendo click en el botón crear usuario
    crearUsuario.onclick = function(evento) {
        evento.preventDefault();

        // validamos si los campos de texto están llenos y mostramos distintos mensajes según el caso
        if (elementoNombre.value.length === 0 && elementoApellido.value.length === 0) {
            document.getElementsByClassName('error').item(0).style.display = 'block';
            document.getElementsByClassName('exito').item(0).style.display = 'none';
        } else {
            document.getElementsByClassName('exito').item(0).style.display = 'block';
            document.getElementsByClassName('error').item(0).style.display = 'none';
        }
    }

}
