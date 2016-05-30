/*
    callback:

        También se puede utilizar una función anónima como callback y parametros
*/

function saludar( nombre, apellido, callback ) {
    var nombreCompleto = nombre + ' ' + apellido;
    console.log('Hola ' + nombre + ' ' + apellido);
    callback(nombreCompleto);
}

saludar('Martín', 'Rodriguez', function (nombreCompleto) {
    console.log('Chau '+ nombreCompleto + '!!');
});
