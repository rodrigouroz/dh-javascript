/*
    Remover elementos:
        El objeto node tiene un método llamado removeChild que nos permite
        remover nodos hijos.

        Para poder remover un nodo tenemos que primero seleccionarlo.

        Estructura:
            node.removeChild(nodoARemover);
*/

// Esperamos que esté cargada la página.
window.onload = function() {
    // buscamos el elemento que va a funcionar como contenedor de los nuevos elementos
    var listaDeInvitados = document.getElementById('lista-de-invitados');

    // obtenemos los nodos hijos
    var nodos = listaDeInvitados.children;

    // removemos a Ro
    listaDeInvitados.removeChild(nodos.item(1));

    // removemos a Xime
    listaDeInvitados.removeChild(nodos.item(1));

    // removemos a Romi
    listaDeInvitados.removeChild(nodos.item(2));

    // removemos a Diana
    listaDeInvitados.removeChild(nodos.item(3));

    console.log(nodos);

    var titulo = document.querySelector('h1');
    titulo.innerText = 'Perdón chicas, sale noche de play!!!';
}
