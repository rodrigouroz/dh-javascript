/*
    Funciones anidadas:

        Dentro de una función puedo tener otra función.
        La función interna es privada y no puede ser accedida desde afuera de la función contenedora.

        function funcion1() {
            codigo;

            function funcion2() {
                codigo;
            }
        }
*/

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

function hacerCalculos(operador, valor1, valor2) {
    var resultado;

    switch (operador) {
        case '+':
            resultado = sumar(valor1, valor2);
            break;
        case '-':
            resultado = restar(valor1, valor2);
            break;
        default:
            resultado = 'Por favor selecciones + o - como operación';
    }

    return resultado;
}

console.log(hacerCalculos('+', 10, 20));
console.log(hacerCalculos('-', 30, 10));
console.log(hacerCalculos('/', 30, 3));

try {
    console.log(sumar(10, 20));
} catch(e) {
    console.log(e.message);
}

try {
    console.log(restar(10, 20));
} catch(e) {
    console.log(e.message);
}
