/*
    Condicionales:

    Los condicionales son instrucciones que permiten ejecutar o no un código
    según una condición.
*/

/*
    if:

    El if es un condiconal que permite ejecutar una o varias sentencias según
    la condición sea positiva.

    En español podemos entender el IF como SI ENTONCES.

    Estrcutura:

        if (condicion) {
            ejecutarCodigo();
        }
*/

var edadAlumno1 = 15;
var edadAlumno2 = 16;

/*
    Este condicional lo podemos leer de la siguiente manera:
    SI el alumno2 es mayor que el alumno1 ENTONCES imprimir en pantalla el texto
    El segundo alumno es más grande que el primero
*/
if (edadAlumno2 > edadAlumno1) {
    console.log('El segundo alumno es más grande que el primero');
}
