/*
    Eventos
        Podemos capturar algunos eventos del mouse, entre los más conocidos
        se encuentran: click, dblclick, mouseover, mouseout y mousemove.

        El objeto evento asociado al mouse tiene atributos que nos permite
        saber la posición donde se encuentra con clientX y clientY.

*/

// Esperamos que esté cargada la página.
window.onload = function() {
    var cuadrados = document.querySelectorAll('div');

    cuadrados.item(0).addEventListener('click', function(evento) {
        alert('Me hicieron click');
        console.log('X: ', evento.clientX);
        console.log('Y: ', evento.clientY);
    });

    cuadrados.item(1).addEventListener('dblclick', function(){
        alert('Me hicieron doble click');
    });

    cuadrados.item(2).addEventListener('mouseover', function() {
        console.log('Tengo un mouse arriba mio');
    });

    cuadrados.item(2).addEventListener('mouseout', function() {
        console.log('Chau mouse, volveeeeee');
    });

    cuadrados.item(3).addEventListener('mousemove', function() {
        console.log('Este ratón no se queda quieto!!!');
    });
}
