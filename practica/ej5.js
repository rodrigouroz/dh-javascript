/*
    Ejercicio 5:

    Dado dos valores numéricos, mostrar en pantalla cual es mayor, cual es menor o si son iguales.
*/

var numero1 = 11;
var numero2 = 10;


if (numero1 === numero2) {
    console.log('los 2 números son ' + numero1);
} else if (numero1 > numero2) {
    console.log(numero1 + ' es más grande que ' + numero2);
} else {
    console.log(numero2 + ' es más grande que ' + numero1);
}
