/*
    Funciones:
        Una función puede retornar o no un valor.

    Estructura:

        function nombreFuncion() {
            return valorARetornar;
        }
*/

function saludar() {
    return 'Hola Javascript!!';
}

var saludo = saludar();
console.log('Saludo guardado en una variable: ', saludo);

console.log('Saludo ejecutando una función: ', saludar());
