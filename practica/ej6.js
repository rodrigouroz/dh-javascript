/*
    Ejercicio 6:

    Mostrar en pantalla si el triángulo es equilátero isósceles o escaleno según el valor de sus lados: ladoA, ladoB, ladoC
*/

var ladoA = 10;
var ladoB = 11;
var ladoC = 12;

if (ladoA == ladoB && ladoB == ladoC) {
    console.log('equilatero');
} else if ( (ladoA == ladoB & ladoB !== ladoC) || (ladoA == ladoC) )  {
    console.log('isosceles');
} else {
    console.log('escaleno');
}
