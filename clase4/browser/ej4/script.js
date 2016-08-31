/*
    Prompt:
        El objeto window tiene otro método llamado prompt que nos permite
        interactuar con el usuario ya que le podemos pedir que ingrese
        un valor.

        Estructura:
            var respuesta = prompt(mensaje);
            var respuesta = window.prompt(mensaje);
*/

var nombre;

try {
  nombre = dameTuNombre();
} catch (error) {
  console.log('Estoy aca');
  nombre = prompt('Dame tu nombre ahora!');
}

console.log(nombre);

var apellido = window.prompt('Escribe tu apellido');
console.log(apellido);

alert('Bienvenida/o ' + nombre + ' ' + apellido + '!!!');
