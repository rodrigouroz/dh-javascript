/*
    filter:
        este metodo retorna un array nuevo con los valores filtrados según nuestro criterio

        array.filter(function(elemento) {
            return true/false;
        })
*/
var numeros = [0, 1,2,3,4,5,6,7,8,9,10],
    numerosPares = numeros.filter(function(numero) {
        return (numero % 2 === 0);
    });

console.log(numerosPares);
