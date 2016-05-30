/*
    nodeType:
    
        Dentro del DOM encontramos diferentes tipos de nodos y por medio
        del atributo nodeType podemos obtener un ID que nos dice de que tipo
        de nodo es.
*/

function mostrarTipoDeElemento(idElemento) {
    var tipoDeElemento;

    switch(idElemento) {
        case 1:
            tipoDeElemento = 'ELEMENT_NODE';
            break;
        case 3:
            tipoDeElemento = 'TEXT_NODE';
            break;
        case 8:
            tipoDeElemento = 'COMMENT_NODE';
            break;
        case 9:
            tipoDeElemento = 'DOCUMENT_NODE';
            break;
        case 10:
            tipoDeElemento = 'DOCUMENT_TYPE_NODE';
            break;
        default:
            tipoDeElemento = false;
    }
    return tipoDeElemento;
}

// Esperamos que esté cargada la página.
window.onload = function() {
    var nodoDoctype = document.childNodes[0];
    console.log('Doctype: ', mostrarTipoDeElemento(nodoDoctype.nodeType));

    var documento = document;
    console.log('Documento: ', mostrarTipoDeElemento(documento.nodeType));

    var nodoTextoEnBlanco = document.childNodes[1].childNodes[2].childNodes[0];
    console.log('Texto: ', mostrarTipoDeElemento(nodoTextoEnBlanco.nodeType));

    // dado que hay un nodo de texto vacio como primer elemento, el H1 quedo como segundo
    var nodoH1 = document.childNodes[1].childNodes[2].childNodes[1];
    console.log('Elemento: ', mostrarTipoDeElemento(nodoH1.nodeType));

    // accedemos al elemento H2
    var nodoH2 = document.childNodes[1].childNodes[2].childNodes[3];
    console.log('Elemento: ', mostrarTipoDeElemento(nodoH2.nodeType));

    // accedemos al elemento IMG
    var nodoIMG = document.childNodes[1].childNodes[2].childNodes[5];
    console.log('Elemento: ', mostrarTipoDeElemento(nodoIMG.nodeType));

    // accedemos al elemento P
    var nodoP = document.childNodes[1].childNodes[2].childNodes[7];
    console.log('Elemento', mostrarTipoDeElemento(nodoP.nodeType));

    // nodo comentario
    var nodoComentario = document.childNodes[1].childNodes[2].childNodes[9];
    console.log('Comentario', mostrarTipoDeElemento(nodoComentario.nodeType));
}
