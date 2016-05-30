/*
    callback:

        Async: javascript es un lenguaje asincrónico esto significa que una
        llamado puede ejecutarse ahora y no se cuando termina. Para poder manejar
        esta situación se utiliza el patron de diseño callback.

        En javascript se puede pasar una función como parámetro
        al igual que cualquier otra tipo de dato (string, array, number, etc).

        Se denomina callback a una función que es pasada como parámetro a
        otra función que será ejecutada al finalizar la acción anterior.
*/

var finDelSaludo = function() {
    console.log('Chau!!!');
}

function saludar( callback ) {
    console.log('Hola Martín Rodriguez');
    callback();
}

saludar( finDelSaludo );
