/*
    Formularios:

        Otro de los elementos que tenemos en un formulario es el objeto
        radio button. Por lo general este elemento se utiliza para seleccionar
        entre 2 valores donde sólo uno puede estar seleccionado. Para lograr
        esto se utiliza el mismo atributo name.

        Por medio del selector querySelector() podemos obtener el elemento
        radio button que está activo. Para esto debemos utilizar un selector
        de css :checked.

        Estructura:
            var radioButton = document.querySelector(selector :checked);
*/

window.onload = function() {
    var elementoEstadoCivil = document.querySelector('input[name="estado-civil"]:checked');
    console.log(elementoEstadoCivil);

    var estadoCivil = elementoEstadoCivil.value;
    console.log(estadoCivil);
}
