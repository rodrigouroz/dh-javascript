/*
    Variables locales

    Error al no declarar las variables locales con var
*/

// declaro una variable global
var nombre = 'Darío';

function saludar() {
    // estoy accediendo a la variable gloabal por no usar var en la declaración
    nombre = 'Sergio';
    // imprime Sergio
    console.log('Llamado desde la función: ', nombre);
}

// imprime Darío
console.log('Llamado desde afuera de la función: ', nombre);
// se ejecuta la función saludar y se modifica el valor global de la variable nombre
saludar();
// imprime Sergio ya que la variable nombre fue modificada desde la función saludar.
console.log('Llamado desde afuera de la función: ', nombre);
