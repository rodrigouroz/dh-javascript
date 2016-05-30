/*
    Estilos:
        Los elementos que son HTML tienen una propiedad llamada style que
        retorna un objeto literal que representa los estilos que tiene establecido
        un objeto. Al ser un objeto de javascript podemos agregarle o modificarle
        atributos. Debemos escribir los nombres de los attributos como nombres
        de las propiedades de css en formato de nombreDePropiedadDeCss.
*/

// Esperamos que esté cargada la página.
window.onload = function() {

    var elementoH1 = document.querySelector('h1');
    elementoH1.style.color = 'green';

    var titulo = document.querySelector('h2');
    titulo.style.borderBottom = '1px solid black';

    var foto = document.querySelector('img');
    foto.style.border = '5px dashed green';

}
