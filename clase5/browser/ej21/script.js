/*
    Crear e insertar elementos:
        Utilizando el método createElement de document y el método appendChild
        de element, podemos crear e insertar nodos dentro de otros nodos.

        Podemos crear nodos de texto utilizando el metodo element.createTextNode.
*/

// Esperamos que esté cargada la página.
window.onload = function() {
    // buscamos el elemento que va a funcionar como contenedor de los nuevos elementos
    var listaDeInvitados = document.getElementById('lista-de-invitados');

    // definimos un array de lista de invitados
    var nombresDeInvitados = ['Gonzalo', 'Ro', 'Xime', 'Sergio', 'Romi', 'Ale', 'Diana'];

    // recorremos la lista de invitados
    nombresDeInvitados.forEach(function(nombre) {
        // por cada invitado creamos un elemento li (list item)
        var nuevoInvitado = document.createElement('li');

        // creamos un nuevo nodo de texto
        var texto = document.createTextNode(nombre);

        // insertamos el nuevo nodo de texto dentro del li
        nuevoInvitado.appendChild(texto);

        // insertamos el nuevo elemento al final del elemento lista
        listaDeInvitados.appendChild(nuevoInvitado);
    });
}
