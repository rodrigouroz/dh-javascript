/*
    Closure:

        Se denomina closure a una función interna que tiene acceso a las
        variables de otra función externa que la contiene.

        Las funciones denominadas closure tienen acceso a los siguientes scopes:
          * Scope local propio
          * Scope local de la función que la contiene
          * Scope global

        Se crea un closure creando una función dentro de otra.
*/

var nombre = 'Martín';

function funcionExterna() {
    var apellido = 'Rodriguez';

    function funcionInterna() {
        var edad = 32;
        // puede imprimir las 3 variables ya que tiene acceso a ellas
        console.log(nombre + ' ' + apellido + ' tiene ' + edad + ' años.');
    }

    funcionInterna();

    try {
        console.log(edad);
    } catch(e) {
        // imprime un error ya que edad es solo accesible dentro de funcionInterna
        console.log('Edad: ', e.message);
    }
}

funcionExterna();

try {
    console.log(apellido, edad);
} catch(e) {
    // imprime un error ya que ambas variables están dentro de una función.
    console.log('apellido y edad: ', e.message);
}
