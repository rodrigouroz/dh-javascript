function mostrarNombre(mensaje) {
  console.log(this.nombre + mensaje);
}

var mago1 = {
     nombre: 'Harry Potter'
}

var mago2 = {
     nombre: 'Hermione Granger'
}

var mostrarHarry = mostrarNombre.bind(mago1, [' es el mejor']);
var mostrarHermione = mostrarNombre.bind(mago2, [' es una genia']);

mostrarHarry(); // Harry Potter es el mejor
mostrarHermione();  // Hermione Granger es una genia
