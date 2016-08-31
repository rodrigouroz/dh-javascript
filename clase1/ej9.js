/*
  Object:

  El objeto es un tipo de dato que nos permite agrupar valores para
  representar elementos de la vida. Se define con {}. Puede tener propiedades
  y metodos. Las propiedades describen al objeto y los métodos le dan
  funcionalidad. Las propiedades soportan cualquier tipo de dato.

  Podemos acceder a las propiedades de un objeto de la siguiente forma:
    objeto.propiedad

  De forma similar podemos acceder a un método utilizando () al final.
    objeto.metodo()
*/

// el objeto alumno tiene como propiedades: edad, nombre, colegio.
var alumno = {
    edad: 16,
    nombre: 'Santiago',
    colegio: 'Normal 4',
    saludar: function () {
        console.log('Hola');
    }
}

// Imprimimos el objeto alumno.
console.log(alumno);

// Imprimimos las propiedades del objeto alumno.
console.log(alumno.edad);
console.log(alumno.nombre);
console.log(alumno.colegio);

// Ejecutamos e imprimimos el método definido en el objeto alumno
console.log( alumno.saludar() );
