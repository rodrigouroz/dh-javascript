/*
    Formularios:

        Por medio del atributo elements del objeto form podemos obtener la
        colección de elementos que tiene el formulario seleccionado.

        Ejemplo:
            var elementos = form.elements; -> retorna todos los elementos del form
            var elemento = form.elements[indice]; -> retorna el elemento del formulario que está en el indicie indicado
*/

window.onload = function() {
    // obtenemos el elemento formulario por medio de su ID
    var form = document.getElementById('formulario-de-invitados');
    console.log('Elementos: ', form.elements);

    console.log('Input nombre: ', form.elements[0]);
    console.log('Input apellido: ', form.elements[1]);
    console.log('Button: ', form.elements[2]);
}
