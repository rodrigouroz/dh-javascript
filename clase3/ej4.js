/*
    Funciones:
        Las funciones pueden recibir tantos parámetros como nosotros necesitemos.

    Estructura:
        function nombreFuncion(parametro1, parametro2, parametroN) {

        }
*/

function saludar(nombre) {
    console.log('Hola ' + nombre + '!!');
}

saludar('Javascript');


function sumar(numero1, numero2) {
    return numero1 + numero2;
}

var resultado = sumar(10, 20);
console.log(resultado);

console.log(sumar(11, 7));
