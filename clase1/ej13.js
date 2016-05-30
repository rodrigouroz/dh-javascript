/*
    Number: Propiedades y Metodos
    Los tipo de datos number tienen propiedades y metodos que nos permiten
    saber más cosas sobre ellos.
*/

/*
    parseFloat:

    Transforma una cadena en un número con punto flotante.
        Number.parseFloat(cadena);
*/

var numeroEnCadena = '10.2';
console.log( typeof numeroEnCadena );
console.log( typeof Number.parseFloat(numeroEnCadena) );

/*
    parseInt:

    Transforma una cadena en un número entero.
        Number.parseInt(cadena);
*/

var numeroEnCadena = '10';
console.log( typeof numeroEnCadena );
console.log( typeof Number.parseInt(numeroEnCadena) );

/*
    toString:

    Transforma una número en una cadena.
        variableNumerica.parseInt(cadena);
*/
var numero = 10;
console.log( typeof numero);
console.log( typeof numero.toString());
