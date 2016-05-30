/*
    callback:

        La función que se ejecuta como callback también puede recibir parámetros
*/
function finDelSaludo(nombreCompleto) {
    console.log('Chau '+ nombreCompleto + '!!');
}

function saludar( nombre, apellido, callback ) {
    var nombreCompleto = nombre + ' ' + apellido;
    console.log('Hola ' + nombre + ' ' + apellido);
    callback(nombreCompleto);
}

saludar('Martín', 'Rodriguez', finDelSaludo);
