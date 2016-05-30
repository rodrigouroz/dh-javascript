/*
    Parametros por valor (copia) o referencia:

        Al pasar un parámetro a una función javascript elige pasarlos por valor,
        realiza una copia de la variable y sino pasa una referencia de la misma.

        La diferencia entre estos conceptos es que si al pasar una variable por
        valor se genera internamente una copia de la variable esto quiere decir
        que si modifico dicha variable internamente no cambia el valor de la
        variable original.

        Los objetos, funciones y arrays se pasan por referencia. Esto significa
        que al ser modificados internamente dentro de una función se ven
        reflejados dichos cambios en la versión original de los mismos.
*/

// defino una variable nombre
var nombre = 'Ximena';

// defino una función que acepta un parametro y lo modifica
function modificarNombre(nombreComoParametro) {
    nombreComoParametro = 'Martín';
}

// ejecuto la función pasando la variable nombre como parámetro
modificarNombre(nombre);

// imprime Ximena ya que la función recibe una copia de esta variable y no una referencia
console.log(nombre);

// defino un array
var coleccion = ['autitos', 'soldaditos', 'cucharas'];

// esta función espera un array como parametro
function modificarColeccion (coleccion) {
    coleccion.push('revistas', 'libros');
}

// muestra el array original
console.log('Colección antes de ser modificada: ', coleccion);

// dentro de la función modificamos la colección
modificarColeccion (coleccion);

// imprime la colección con los nuevos elementos que se agregaron en la función
console.log('Colección después de ser modificada: ', coleccion);
