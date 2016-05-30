/*
    Atributos

        Podemos utilizar el método attr para saber si un elemento tiene o no un
        attributo como en el caso de hasAttribute();
*/

// Esperamos que el documento esté cargado
$(function() {
    var $img = $('img');

    var boton = document.querySelector('button');
    boton.addEventListener('click', function() {

        if ($('img').attr('id')) {
            console.log('Ahora la imagen tiene el id ' + $('img').attr('id'));
        } else {
            console.log('La imagen no tiene un ID');
            $('img').attr('id', 'foto-de-la-fiesta');
        }

    });

});
