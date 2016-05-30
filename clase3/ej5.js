/*
    Funciones:
        Podemos utilizar una función como una condición.
        Javascript va a ejecutar la función y va a evaluar el resultado en la condición.
*/

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

if (sumar(10, 20) > 25) {
    console.log('El resultado de la suma da más de 25');
}


function usuarioRegistrado() {
    return false;
}

if (usuarioRegistrado()) {
    console.log('El usuario está registrado');
} else {
    console.log('El usuario no está registrado');
}
