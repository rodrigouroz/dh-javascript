/*
    Hoisting:

        La declaración de las funciones tiene precedencia sobre la declaración
        de las variables.
*/

var saludar;

function saludar() {
    console.log('Martín');
}

// imprime function ya que la función es movida a la parte superior sobre la declaración de la variable.
console.log(typeof saludar);
