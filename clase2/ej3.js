/*
    if/else:

    El if/else/if es un condiconal que permite ejecutar una o varias sentencias
    según la condición sea positiva o negativa.

    En español podemos entender el IF como SI CONDICION ENTONCES SINO SI.

    Estrcutura:

        if (condicion) {
            ejecutarCodigo();
        } else if (segundaCondicion) {
            ejecutaEsteCodigoSiLaSegundaConcionEsVerdadera();
        }
*/

var edadAlumno1 = 15;
var edadAlumno2 = 16;

if (edadAlumno2 < edadAlumno1) {
    // Este texto nunca se va a ejuctar ya que alumno2 es más grande que alumno1.
    console.log('El segundo alumno es más chico que el primero');
} else if (edadAlumno2 >= 18) {
    // esta sentencia no se ejcuta ya que la segunda condición es falsa.
    console.log('El segundo alumno no es tiene 18 años o más');
} else {
    // Se ejecuta esta sentencia ya que la condicion anterior es falsa.
    console.log('El segundo alumno no es más chico que el primero pero es menor de edad');
}
