/*
    Formularios:

        Por medio del evento submit del formulario podemos mandar los datos
        que tiene cargado el formulario al documento que tiene establecido
        en el atributo del formulario action.

        Con Javascript podemos manejar el evento submit por medio del métodos
        onsubmit(). Al igual que el resto de los eventos podemos controlar
        que no se ejecute el evento por default con el metodo del eventos
        preventDefault().

        Estructura:

            form.onsubmit = function(evento) {
                evento.preventDefault();
            }
*/

window.onload = function() {
    // obtenemos el elemento formulario por medio de su ID
    var form = document.getElementById('formulario-de-invitados');

    // al ejecutar el evento submit el formulario envía los datos al documento que tiene en el atributo action
    form.onsubmit = function(evento) {
        // por medio del preventDefault cortamos la ejecución del evento submit
        evento.preventDefault();
        alert('Se ejecuta el submit del form');
    }
}
