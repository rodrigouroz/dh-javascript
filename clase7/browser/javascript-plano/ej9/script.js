/*
    Formularios:

        Otro de los elementos del formulario es el elemento checkbox. Este
        objeto tiene un atributo checked que retorna un valor booleano (true/false)
        por el cual podemos saber si fue seleccionado.

        El atributo checked se puede utilizar tanto para obtener su valor como
        tambien para establecer un nuevo valor.

        Estructura:
            checkbox.checked; -> retorna el valor del objeto checked
            checkbox.checked = true/false; -> establece un nuevo valor al elemento.
*/

window.onload = function() {
    var elementoRecibirNovedades = document.getElementsByName('recibir-novedades').item(0);
    console.log('Elemento checkbox: ', elementoRecibirNovedades);

    // el atributo checked retorna un valor booleano
    var quiereRecibirNovedades = elementoRecibirNovedades.checked;
    console.log('Valor del elemento checkbox: ', quiereRecibirNovedades);

    // al ser un valor booleano podemos utilizarlo para un condicional
    if (quiereRecibirNovedades) {
        console.log('suscribir a la lista de novedades');

        // por medio del atributo checked podemos cambiar el valor del elemento checkbox
        elementoRecibirNovedades.checked = false;
    } else {
        console.log('el usuario se pierde todas las novedades copadas que tenemos!');

        // por medio del atributo checked podemos cambiar el valor del elemento checkbox
        elementoRecibirNovedades.checked = true;
    }
}
