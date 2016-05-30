/*
    callback:

        Para evitar problemas al tener que encontrar un error se considera
        una buena práctica ponerle nombres a los callbacks.
*/

function saludar( nombre, apellido, callback ) {
    var nombreCompleto = nombre + ' ' + apellido;
    console.log('Hola ' + nombre + ' ' + apellido);
    callback(nombreCompleto);
}

saludar('Martín', 'Rodriguez', function callbackSaludo(nombreCompleto) {
    console.log('Chau '+ nombreCompleto + '!!');
});
