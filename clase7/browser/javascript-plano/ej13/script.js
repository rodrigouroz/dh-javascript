/*
    Formularios:

        Los elementos del formulario pueden manejar eventos por medio de Los
        métodos: onfocus, onblur, onchange, oninput. También se pueden escribir
        utilizando el método addEventListener(callback).

        Eventos:

            focus:
                Este evento se dispara al establecer el foco en un elemento

            blur:
                Este evento se dispara al remover el foco sobre un elemento

            change:
                Este evento se dispara cuando cambia el valor de un elementos

            input:
                Este evento se dispara al ingresar datos a un elemento.

        Estructura:
            elemento.onfocus = function(){
                // código que maneja el focus del elemento
            }

            elemento.onblur = function(){
                // código que maneja el blur del elemento
            }

            elemento.onchange = function(){
                // código que maneja el cambio de valor
            }

            elemento.oninput = function(){
                // código que maneja el ingreso de datos a un elemento
            }

*/

window.onload = function() {
        var elementoNombre = document.getElementsByName('nombre').item(0);

        elementoNombre.onfocus = function(evento) {
            console.log('Se establece el foco en el elemento nombre');
        }

        elementoNombre.onblur = function(evento) {
            console.log('Se perdió foco del elemento nombre');
        }

        var elementoApellido = document.getElementsByName('apellido').item(0);

        elementoApellido.onchange = function(evento) {
            console.log('El texto cambió: ', elementoApellido.value);
        }

        elementoApellido.oninput = function(evento) {
            console.log(elementoApellido.value);
        }

}
