/*
    Hacer update a un elemento:

    innerText / textContext:
        El objeto node tiene un attributo llamado innerText que nos permite
        leer o escribir contenido en modo de texto.

        Estructura:
            nodo.innerText; -> retorna el contenido de texto
            nodo.innerText = 'nuevo texto'; -> asigna un nuevo texto

    innerHTML:
        El objeto element tiene un atributo llamado innerHTML que nos permite
        leer o escribir contenido en HTML de un nodo.

        Al aceptar código HTML el texto es procesado antes de ser incluido.

        Estructura:
            elemento.innerHTML; -> retorna el contenido en HTML
            elemento.innerHTML = '<p>Nuevo parrafo</p>'; -> asigna un nuevo HTML al nodo elemento
*/

// Esperamos que esté cargada la página.
window.onload = function() {

    // buscamos el elemento h1
    var titulo = document.querySelector('h1');

    // por medio de innerText podemos modificar el nodo de texto que contiene
    titulo.innerText = 'Yo soy programador y me gusta!!';

    // buscamos el elemento que tiene el ID contenedor
    var contenedor = document.getElementById('contenedor');

    // creamos un nuevo elemento h1
    var nuevoTitulo = document.createElement('h1');

    // por medio del método innerHTML podemos modificar el contenido con formato HTML
    nuevoTitulo.innerHTML = '<p>Este nuevo parrafo lo creamos de forma dinámica</p>';

    // asignamos el nuevo titulo al contenedor
    contenedor.appendChild(nuevoTitulo);
}
