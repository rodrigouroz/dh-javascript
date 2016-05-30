/*
    callback:
        También puedo pasar la declaración de la función
*/
function finDelSaludo() {
    console.log('Chau!!!');
}

function saludar( callback ) {
    console.log('Hola Martín Rodriguez');
    callback();
}

saludar(finDelSaludo);
