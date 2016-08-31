var cadenas = ['¿', 'hola', ' ', 'como', 'estas', 'hoy', '?'];
var frase;

frase = cadenas.reduce(function (acumulador, palabra) {
  return acumulador + palabra;
}, '');

console.log(frase);
