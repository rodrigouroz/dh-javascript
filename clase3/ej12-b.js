/*
    Closure:

        Las funciones internas tienen acceso a los parametros de la función
        que la contiene aún cuando es utilizada como función de retorno.

        Esto se produce ya que cuando se ejecuta una función javascript hace que
        tengan el mismo scope que cuando fue creada la función. Esto significa
        que al ser retornada la función interna todavía tiene acceso a los
        parámetros de la función que la contiene.
*/

function saludar(nombre) {
    var saludo = 'Hola';
    return function saludarConApellido(apellido) {
        console.log(saludo + ' ' + nombre + ' ' + apellido);
    }
}

// se llama a la función saludar y esta retorna una función que luego puedo utilizar.
var usarFuncionRetornada = saludar('Martín');

// ejecuto la función retornada por la función saludar.
usarFuncionRetornada('Rodriguez');
