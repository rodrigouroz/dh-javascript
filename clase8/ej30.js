function Mago(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Mago.prototype.hacerMagia = function() {
  console.log('Expecto Patronum!!!');
};

var mago1 = new Mago('Harry Potter',37);
var mago2 = new Mago('Hermione Granger',36);

console.log(mago1.nombre);    // Harry Potter
console.log(mago1.edad);    // 37
mago1.hacerMagia();   // Expecto Patronum!!!

console.log(mago2.nombre);    // Hermione Granger
console.log(mago2.edad);    // 36
mago2.hacerMagia();   // Expecto Patronum!!!
