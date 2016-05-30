/*
    Crear un elemento:

        createElement():

            El objeto document tienen un método llamado createElement que nos permite
            crear nuevos nodos elementos HTML.

            createElement acepta como parámetro un string con el nomre de una
            etiqueta de HTML (a, div, span, li, ul, etc).

            Estructura:
                var nuevoElemento = document.createElement(nombreDelTagACrear);

        createTextNode():
            El objeto document también tiene un método createTextNode que nos
            permite crear nodos de texto.

            Dado que es un nodo de texto, acepta como parametro un string con
            el contenido del nuevo nodo.

            Estructura:
                var texto = document.createTextNode(nuevoTexto);
*/

// Esperamos que esté cargada la página.
window.onload = function() {
    // por medio del método createElement podemos crear un nuevo elemento
    var titulo = document.createElement('h1');
    console.log('Elemento h1:', titulo);

    // al tener creado un elemento nuevo podemos manipularlo al igual que siempre
    titulo.style.color = 'red';

    // podemos ver en la consola que creamos un nuevo nodo elemento que tiene un color rojo
    console.log(titulo);

    // por medio del método createTextNode podemos crear nuevos nodos de texto.
    var texto = document.createTextNode('soy un nuevo nodo de Texto!!!');

    // podemos ver en la consola el nuevo nodo de texto
    console.log(texto);

}
