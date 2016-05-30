/*
    Atributos:

        hasAttributes():
            retorna un valor boolean true en caso de que el elemento tenga
            atributos y false en caso de que no los tenga.
*/

// Esperamos que esté cargada la página.
window.onload = function() {

    var elementoH1 = document.querySelectorAll('h1')[0];
    if (elementoH1.hasAttributes()) {
        console.log('el título tiene atributos');
    } else {
        console.log('el título NO tiene atributos');
    }

}
