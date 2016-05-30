function mostrarNombre(mensaje) {
  console.log(this.nombre + mensaje);
}

var mago1 = {
     nombre: 'Harry Potter'
}

var mago2 = {
     nombre: 'Hermione Granger'
}

mostrarNombre.call(mago1, [' es el mejor']); // Harry Potter es el mejor
mostrarNombre.call(mago2, [' es una genia']); // Hermione Granger es una genia
