/*
    Hijos / Padres:
        Hasta ahora vimos como acceder a los nodos hijos de un nodo. En esta
        oportunidad vamos a ver como se puede acceder al elemento padre
        utilizando el atributo parentNode

*/

// Esperamos que esté cargada la página.
window.onload = function() {
    // accedemos al nodo IMG
    var nodoIMG = document.childNodes[1].childNodes[2].childNodes[5];
    console.log('El padre del nodo IMG es: ', nodoIMG.parentNode);
}
