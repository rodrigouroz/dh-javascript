/*
    Arguments:
        Todas las funciones tienen un objeto llamado arguments que contiene
        todos los parámetros que se le pasaron a esa función.

        function nombreFuncion(parametro1, parametro2) {
            arguments;
        }
*/

function sumar() {
    var suma = 0;

    for (var index = 0; index < arguments.length; index++) {
        suma += arguments[index];
    }

    return suma;
}


console.log(sumar('hola ', 'como ', 'andan ', 'hoy'));
