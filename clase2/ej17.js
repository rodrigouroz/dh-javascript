/*
    reduce:
        Este método aplica una función a un acumulador para reducirlo en un valor único

        array.reduce(function(valorAnterior, valorActual, indice, vector) {
            return unValor;
        });
*/
var numeros = [0,1,2,3,4,5,6,7,8,9,10],
    sumaDeNumeros = numeros.reduce(function(valorAnterior, valorActual){
        return valorAnterior + valorActual;
    });

// imprime la suma de todos los números del array
console.log(sumaDeNumeros);
