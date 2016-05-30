function Mago(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.mascotas = [];
}

Mago.prototype.hacerMagia = function() {
  console.log('Expecto Patronum!!!');
};

Mago.prototype.saludar = function() {
  console.log('hola soy ' + this.nombre + ' y tengo ' + this.edad + ' años');
};

var mago1 = new Mago('Harry Potter',37);
mago1.mascotas.push('Hedwig');
var mago2 = new Mago('Hermione Granger',36);
mago2.mascotas.push('Crookshanks');

console.log(mago1.mascotas.length);   // 1
console.log(mago2.mascotas.length);   // 1
