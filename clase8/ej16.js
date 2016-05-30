function mostrarNombre() {
     console.log(this.nombre);
}

var mago1 = {
     nombre: 'Harry Potter'
}

var mago2 = {
     nombre: 'Hermione Granger'
}

mostrarNombre.call(mago1); // Harry Potter
mostrarNombre.call(mago2); // Hermione Granger
