/*
    Formularios:

        Por medio de los elementos select podemos obtener el valor elegido.

        El objeto select tiene el atributo selectedIndex que nos retorna el
        índice numérico de la opción seleccionada.

        Otro de los atributos que tiene el objeto select es options que nos
        retorna la colección de elementos options.

        Combiando estos dos atributos podemos obtener el valor del option
        seleccionado en el elemento select.

        Al igual que el resto de los elementos HTML del formulario, el objeto
        option tiene un atributo value que nos da el valor del mismo.

        Estructura:

            select.selectedIndex; -> retorna el índice del valor seleccionado
            select.options; -> retorna la colección de elementos options
            select.options[indice]; -> retorna el option seleccionado
            select.options[indice].value; -> retoran el valor del elemento seleccionado.
*/

window.onload = function() {
    // seleccionamos el elemento select
    var elementoSelectProfesion = document.getElementsByName('profesion').item(0);
    console.log('elemento option seleccionado', elementoSelectProfesion);

    var indiceElementoSeleccionado = elementoSelectProfesion.selectedIndex;
    console.log('Indice seleccionado: ', indiceElementoSeleccionado);

    // por medio del atributo options podemos obtener la coleccion de elementos options del select
    var elementosOptions = elementoSelectProfesion.options;
    console.log('Colección de elementos options: ', elementosOptions);

    // utilizando la colección de opciones y el indice de elemento seleccionado podemos obtener el option elegido
    var optionSeleccionado = elementosOptions[indiceElementoSeleccionado];
    console.log('elemento option elegido: ', optionSeleccionado);

    // al igual que el resto de los elementos del formulario, el elemento option tienen un atributo value
    var profesionSeleccionada = optionSeleccionado.value;
    console.log('profesión: ', profesionSeleccionada);
}
