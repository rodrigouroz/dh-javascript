/*
    Eventos
        Dentro de la función que maneja el evento podemos utilizar la palabra
        reservada this que en ese contexto hace referencia al objeto que
        ejecuto el evento.
        
*/

function pintar() {
    var colores = ['red', 'blue', 'pink', 'yellow', 'green', 'black'];

    if (!this.style.backgroundColor || this.style.backgroundColor === 'transparent') {
        var indice = Math.floor(Math.random() * colores.length);
        this.style.backgroundColor = colores[indice];
    } else {
        this.style.backgroundColor = 'transparent';
    }
}

// registramos un evento usando la propiedad de un objeto
window.onload = function() {
    var cuadrados = document.querySelectorAll('div');

    cuadrados.item(0).addEventListener('click', pintar);
    cuadrados.item(1).addEventListener('click', pintar);
    cuadrados.item(2).addEventListener('click', pintar);
    cuadrados.item(3).addEventListener('click', pintar);
}
