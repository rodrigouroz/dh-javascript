function Mago(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.hacerMagia = function() {
    console.log('Expecto Patronum!!!');
  };
  this.saludar = function() {
    console.log('hola soy ' + this.nombre + ' y tengo ' + this.edad + ' años');
  };
}

var mago1 = new Mago('Harry Potter',37);
var mago2 = new Mago('Hermione Granger',36);

console.log(mago1.nombre);    // Harry Potter
console.log(mago1.edad);    // 37
mago1.hacerMagia();   // Expecto Patronum!!!
mago1.saludar();    // hola soy Harry Potter y tengo 37 años

console.log(mago2.nombre);    // Hermione Granger
console.log(mago2.edad);    // 36
mago2.hacerMagia();   // Expecto Patronum!!!
mago2.saludar();    // hola soy Hermione Granger y tengo 36 años
