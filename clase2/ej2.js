/*
    if/else:

    El if/else es un condiconal que permite ejecutar una o varias sentencias
    según la condición sea positiva o negativa.

    En español podemos entender el IF como SI (CONDICION) ENTONCES SINO.

    Estrcutura:

        if (condicion) {
            ejecutarCodigo();
        } else {
            ejecutaCodigoSiLaCondicionEsFalsa();
        }
*/

var edadAlumno1 = 15;
var edadAlumno2 = 16;

/*
    Este condicional lo podemos leer de la siguiente manera:
    SI el alumno2 es mayor que el alumno1 ENTONCES imprimir en pantalla el texto
    El segundo alumno es más grande que el primero
*/
if (edadAlumno2 < edadAlumno1) {
    // Este texto nunca se va a ejuctar ya que alumno2 es más grande que alumno1.
    console.log('El segundo alumno es más chico que el primero');
} else {
    // Se ejecuta esta sentencia ya que la condicion se resuelve en falso.
    console.log('El segundo alumno no es más chico que el primero');
}
