/*
    forEach
        Los array tienen un metodo llamado forEach que permite iterar sobre cada elemento de un array

        Estructura:
            array.forEach( function(elemento) {
                codigoAEjecutarConCada(elemento);
            });
*/

var alumnos = ['Ezequiel', 'Roberto', 'María', 'Eugenia', 'Ximena'];

alumnos.forEach(function(alumno) {
    console.log(alumno);
});
