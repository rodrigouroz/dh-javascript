/*
    Estructura de repetición:

        se utilizan para repetir un bloque de código hasta que la condición se evalúa como falsa

    For:

        Estructura:

            for (expresionInicial; condicion; expresionDeIncremento) {
                codigo;
                codigo;
            }

            expresionInicial: se utiliza para declarar una variable
                que va a funcionar como contador y se inicializa con el valor que queremos
            condicion: puede ser cualquier sentencia que se resuelva en true o false
            expresionDeIncremento: esta sección se ejecuta luego de ejecutar el cuerpo
                del for (en este caso donde dice codigo) y nos permite incrementar o desincrementar el valor de una variable.
*/

// mostrar de 0 a 10
for (var acumulador = 0; acumulador <= 10; acumulador++) {
    console.log(acumulador);
}

// mostrar de 10 a 0
for (var acumulador = 10; acumulador >= 0; acumulador--) {
    console.log(acumulador);
}

// mostrar números de 0 a 20 de a 2
for (var acumulador = 0; acumulador <= 20; acumulador+= 2) {
    console.log(acumulador);
}

// mostrar de 20 a 0 de a d
for (var acumulador = 20; acumulador >= 0; acumulador-= 2) {
    console.log(acumulador);
}
