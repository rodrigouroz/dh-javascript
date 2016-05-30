/*
    Atributos

        También podemos utilizar un objeto como parametro del método attr en
        caso de que necesitemos definir más de un atributo al mismo tiempo

        Ejemplo:
            $().attr({
                atributo: valor,
                atributo2: valor,
            });

*/

// Esperamos que el documento esté cargado
$(function() {
    var boton = document.querySelector('button');
    boton.addEventListener('click', function() {
        $('img').attr({
            width: '650px',
            height: '500px',
            alt: 'Fieeeeeestaaaaaaaaa!!',
            title: 'Fieeeeeestaaaaaaaaa!!'
        });
    });
});
