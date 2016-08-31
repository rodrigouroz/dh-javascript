/*
    DOM - Document Object Model
        El Modelo de Objetos del Documento (DOM) proporciona una representación
        estructural de un documento (html o xml), permitiendo la modificación
        de su contenido o su presentación visual. Esto significa que como
        programadores tenemos acceso a objetos que tienen propiedades, métodos
        y eventos disponibles para crear y manipular páginas web.

        El DOM se utiliza para tener acceso la pagina web y por eso se relaciona
        comunmente con Javascript pero no es el único lenguje con el que puede
        interactuar.

        Por medio del DOM podemos agregar, borrar y cambiar elementos, sus
        atributos o su contenido. Podemos hacer todas estas cosas gracias a que
        el DOM representa el documento como un arbol de nodos como objetos y
        define metodos para poder accederlos y cambiar la estructura, estilos y
        contenido del documento.

        Los nodos también pueden ser manipulados gracias a que tienen
        menejadores de eventos asociados y pueden responder cuando se ejecuten.

        Cada browser tiene su propia implementación del DOM. Esto trajo problemas
        en el pasado pero hoy en día hay menos ya que existe una especificación
        por parte del W3C y los fabricantes de browsers tratan de crearlo
        cumpliendo con dichas especificaciones.

        Dentro del DOM encontramos los siguientes tipos de datos:
            document: representa el documento en si mismo. Es el nodo principal.
            element: representa un nodo elemento
            nodeList: es un array con nodos. Sus elementos se pueden acceder por
                      medio items o indice del array. Ejemeplo:
                      listaDeNodos.item(indice);
                      listaDeNodos[indice];
            attribute: representan los atributos de los nodos / elementos

        Para acceder a los nodos hijos de un nodo utilizamos el atributo childNodes
        que retorna una colección de nodos hijos en caso de que tenga
*/

// Esperamos que esté cargada la página.
window.onload = function() {

    // nos traemos los hijos del nodo principal
    var nodosDelDocumento = document.childNodes;

    // mostramos los 2 nodos hijos del documento, doctype y html
    console.log('Hijos de document: ', nodosDelDocumento);

    // accedemos al nodo hijo HTML y listamos sus hijos HEAD y BODY
    var nodosDelHTML = document.childNodes[1].childNodes;
    console.log('Hijos de HTML: ', nodosDelHTML);

    // mostramos los hijos del BODY y vemos que hay nodos de texto y nodos elementos
    var nodosDelBODY = document.childNodes[1].childNodes[2].childNodes;
    console.log('Hijos del BODY: ', nodosDelBODY);

    // Al identar el código, el browser parsea el espacio en blanco como un nodo de texto vacio
    var nodoTextoEnBlanco = document.childNodes[1].childNodes[2].childNodes[0];
    console.log('Nodo de texto vacio por cómo está identado el código: ', nodoTextoEnBlanco);

    // dado que hay un nodo de texto vacio como primer elemento, el H1 quedo como segundo
    var nodoH1 = document.childNodes[1].childNodes[2].childNodes[1];
    console.log('nodo H1: ', nodoH1);

    // accedemos al elemento H2
    var nodoH2 = document.childNodes[1].childNodes[2].childNodes[3];
    console.log('nodo H2: ', nodoH2);

    // accedemos al elemento IMG
    var nodoIMG = document.childNodes[1].childNodes[2].childNodes[5];
    console.log('nodo IMG: ', nodoIMG);

    // accedemos al elemento P
    var nodoP = document.childNodes[1].childNodes[2].childNodes[7];
    console.log('nodo P: ', nodoP);

    // nodo comentario
    var nodoComentario = document.childNodes[1].childNodes[2].childNodes[9];
    console.log(nodoComentario);
}
