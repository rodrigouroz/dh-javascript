var palabra = 'digital';

var frases = [
  'Hoy es miercoles',
  'Estamos en digital house',
  'Estamos cursando javascript en Digital house',
  'Estamos a punto de terminar agosto'
];

// crear un nuevo array que contenga solo las frases que tengan
// la palabra 'digital'

var filtrado = frases.filter(function (frase) {
  return frase.indexOf(palabra) != -1;
});

console.log(filtrado);
