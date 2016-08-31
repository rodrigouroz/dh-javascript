/*
    Objeto literal:
        Al igual que las propiedades podemos crear un método sin estar antes
        definído en el objeto.
*/

var perro = {};

perro.nombre = 'Sultán';

perro.ladrar = function() {
  console.log('Mi nombre es ' + this.nombre);
}

perro.ladrar();
