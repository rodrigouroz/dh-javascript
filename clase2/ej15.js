/*
    Map

        los arrays tienen un método llamado map que retorna un array nuevo con
        los valores modificados según la función que le pasemos

        array.map( function(elemento) {
            return codigo;
        });
*/

var numeros = [0,1,2,3,4,5,6,7,8,9,10],
    numerosMasUno = numeros.map(function(numero) {
        return numero + 1;
    });

console.log(numeros);
console.log(numerosMasUno);
