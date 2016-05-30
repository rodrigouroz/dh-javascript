/*
    Insertar un elemento:

        appendChild():
            Los objetos tiene un método llamado appendChild que nos
            permite insertar un nodo dentro del otro. Este método inserta el
            nuevo nodo como último nodo hijo del nodo contenedor.

*/

// Esperamos que esté cargada la página.
window.onload = function() {
    // por medio del método createElement podemos crear un nuevo elemento
    var titulo = document.createElement('h1');
    var texto = document.createTextNode('soy un nuevo nodo de Texto!!!');
    var body = document.querySelector('body');

    // insertamos el nodo de texto dentro del título
    titulo.appendChild(texto);

    // podemos ver en consola que el nodo titulo tiene un nodo de texto
    console.log(titulo.childNodes);

    // el body es un nodo como cualquier otro por lo cual podemos insertarle un nuevo elemento
    // en este caso es el titulo que creamos.
    body.appendChild(titulo);
}
