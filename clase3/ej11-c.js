/*
    Hoisting:

        El hoisting no afecta a la asignación de funciones a variables.
*/

var saludar = 'Santiago';

var saludar = function() {
    console.log('Martin');
}

// imprime function
console.log(typeof saludar);
