/*
    Children:
*/

// Esperamos que esté cargada la página.
window.onload = function() {

    // nos traemos los hijos del nodo principal
    var nodosDelDocumento = document.childNodes;
    var nodosDelDocumentoSinTextos = document.children;
    console.log('Lista de nodos con texto: ', nodosDelDocumento);
    console.log('Lista de nodos hijos que son elementos: ', nodosDelDocumentoSinTextos);
}
