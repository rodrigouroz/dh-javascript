/*
    if en una linea:

    El if en una linea es igual al anterior sólo que se puede escribir en una linea.

    Estrcutura:
        (condicion) ? codigoQueEjecutaSiEsVerdadero : codigoQueEjecutaSiEsFalso;

*/

var edadAlumno1 = 15;
var edadAlumno2 = 16;
var mensajeVerdadero = 'El segundo alumno es más chico que el primero';
var mensajeFalso = 'El segundo alumno no es más chico que el primero';

(edadAlumno2 > edadAlumno1) ? console.log( mensajeVerdadero ) : console.log( mensajeFalso );
