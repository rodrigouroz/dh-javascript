var letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numeros = [34, 15, 11, 0];

var palabra = numeros.map(function (numero) {
  var indice = numero % letras.length;
  return letras[indice];
});

console.log(palabra.join('-'));
