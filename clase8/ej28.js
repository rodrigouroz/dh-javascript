function Mago(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

var mago1 = new Mago('Harry Potter',37);
var mago2 = new Mago('Hermione Granger',36);

console.log(mago1.nombre);    // Harry Potter
console.log(mago1.edad);    // 37

console.log(mago2.nombre);    // Hermione Granger
console.log(mago2.edad);    // 36
