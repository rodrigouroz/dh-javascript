function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var numero = getRandomInt(10);

console.log('El numero es ', numero);
switch (numero) {
  case 0:
    console.log('Salta en una pata');
    break;
  case 1:
    console.log('Da una vuelta carnero');
    break;
  case 2:
    console.log('Canta una canción');
    break;
  case 3:
    console.log('Relatá el gol de Maradona a los ingleses');
    break;
  case 4:
    console.log('Hacé todos los ejercicios');
    break;
  case 5:
    console.log('Invitanos a todos a almorzar');
    break;
  case 6:
    console.log('Completar...');
    break;
  case 7:
    console.log('Completar...');
    break;
  case 8:
    console.log('Completar...');
    break;
  case 9:
    console.log('Completar...');
    break;
  default:

}
