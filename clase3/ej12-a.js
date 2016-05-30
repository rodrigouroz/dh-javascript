/*
    Closure:

        La función interna no solo tiene acceso a las variables declaradas
        en la función padre sino también a sus parámetros.
*/

function sumar(numero1, numero2) {
    function mostrarParametros() {
        console.log('los parametros son: ', numero1, numero2);
    }
    mostrarParametros();
}

// la función mostrarParametros tiene acceso a los parametros de la función sumar.
sumar(10, 20);
