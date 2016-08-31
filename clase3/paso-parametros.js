var s = 'Hola';
var a = [1, 2, 3, 5];

function parametros(cadena, coleccion) {
  cadena = cadena + ' como estas';
  coleccion.reverse();
}

parametros(s, a);

console.log(s);
console.log(a);
