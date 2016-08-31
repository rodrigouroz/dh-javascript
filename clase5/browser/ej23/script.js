/*
    Eventos
*/

// registramos un evento usando la propiedad de un objeto
window.onload = function() {
    var boton = document.querySelector('button');

    boton.addEventListener('click', function() {
        alert('Ahhhhh tengo un evento asociado!!!');
        this.textContent = 'Me clickearon';
    });
}
