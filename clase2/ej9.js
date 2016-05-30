/*
    Metodos y Propiedades más usadas de un Array
*/

// Propiedades:

// length: retorna la cantidad de elementos que tiene un array
var utiles = ['birome', 'lápiz', 'goma', 'tijera'];
console.log('utiles: ', utiles.length);

// Métodos:

// toString: retorna un string (cadena de caracteres) representando el array.
var utiles = ['birome', 'lápiz', 'goma', 'tijera'];
console.log('utiles sin transformar a string: ', utiles);
console.log('utiles transformado a string: ', utiles.toString());

// concat: este método retorna la unión de 2 arrays
var equipo1 = ['Mario', 'Pedro', 'Juan', 'Mariano', 'Ariel'],
    equipo2 = ['Alejandro', 'Sergio', 'Darío', 'Maca', 'Ezequiel'];

var jugadores = equipo1.concat(equipo2);
console.log('Equipo 1: ', equipo1);
console.log('Equipo 2: ', equipo2);
console.log('Jugadores para el partido: ', jugadores);

// indexOf: retorna el ínidice del primer elemento que encuentra o -1 en caso de que no encuentre dicho elemento.
var frutas = ['manzana', 'banana', 'pera'];
console.log('La banana está en la posición: ', frutas.indexOf('banana'));
console.log('La naranja está en la posición: ', frutas.indexOf('naranja'));

// lastIndexOf: funciona de la misma manera que indexOf pero retorna la posición de la última ocurrencia. También retorna -1 en caso de no encontrar el elemento
var frutas = ['manzana', 'banana', 'pera', 'manzana'];
console.log('La manzana está en la última posición: ', frutas.lastIndexOf('manzana'));
console.log('La naranja está en la última posición: ', frutas.lastIndexOf('naranja'));

// join: une todos los elementos de un array en un string (cadena de caracteres) utilizando el separador que le pasamos como parametro
var ingredientes = ['Muzzarela', 'salsa de tomate', 'jamón', 'morrones'];
console.log('Me gusta la pizza con: ', ingredientes.join(', '));

// push: agrega elementos al final de un array y retorna la nueva longitud del mismo
var invitados = ['Matías', 'Eliana', 'Julián'];
console.log('Ahora los inivitados son: ', invitados.push('Ezequiel', 'Roberto', 'María', 'Eugenia', 'Ximena'));
console.log('Inivtados:', invitados);

// unshift: el metodo unshift agrega uno o más elementos al inicio de un array y retorna la nueva longitud del array
var invitados = ['Matías', 'Eliana', 'Julián'];
console.log('Cantidad de invitados: ', invitados.unshift('Ezequiel', 'Roberto', 'María', 'Eugenia', 'Ximena'));
console.log('Los nuevos invitados van al inicio: :', invitados);

/*
    splice:
        Este metodo cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

        splice(inicio, cantidadDeElementosABorrar, elementoNuevo1, elementoNuevo2);

        inicio: es el ínidice donde vamos a insertar o borrar elementos
        cantidadDeElementosABorrar: es el número de elementos que queremos borrar. Si este parámetro es 0 no borra ningún elemento.
        elementoNuevo: son los elementos que queremos agregar

        Retorno: retorna un array con los elementos borrados. En caso de no borrar elementos, retorna un array vacío.
*/
var frutas = ['manzana', 'banana', 'pera', 'manzana'];
console.log ('Se eliminó la fruta: ', frutas.splice(2, 1, 'naranja', 'durazno'));
console.log('Ahora tenemos la siguiente lista de frutas', frutas);

// shift: el metodo shift retorna y remueve el primer elemento de un array.
var ingredientes = ['Muzzarela', 'salsa de tomate', 'jamón', 'morrones'],
    primerIngrediente = ingredientes.shift();

console.log('Qué podemos hacer con los siguientes ingredientes?: ', ingredientes);
console.log('Sin Muzza no hay pizza!!: ', primerIngrediente)

// pop: el metodo pop retorna y remueve el último elemento de un array
var ingredientes = ['Muzzarela', 'salsa de tomate', 'jamón', 'morrones'],
    ultimoIngrediente = ingredientes.pop();

console.log('ahora la pizza me gusta con los siguientes ingredientes: ', ingredientes);
console.log('Le saqué el siguiente ingrediente porque no me gusta: ', ultimoIngrediente)

/*
    slice:
        retorna una sección de un array dentro de un array nuevo
        arr.slice([inicio [, fin]])

        inicio: si no se establece el inicio toma como que es 0 y arranca desde el principio del array.
                si el inidice es negativo toma los últimos elementos iniciando desde el final del array.

        fin:  si se omite este parámetro toma hasta el final de la cadena
              no incluye el último elemento de cada selección
*/
var ingredientes = ['Muzzarela', 'salsa de tomate', 'jamón', 'morrones'];
console.log('sólo vamos a usar algunos ingredientes: ', ingredientes.slice(1,3));
// si queremos inlcuir el último elemento:
console.log('sólo vamos a usar algunos ingredientes incluyendo el último de la lista: ', ingredientes.slice(1));

// sort: este metodo ordena un array.
var alumnos = ['Matías', 'Eliana', 'Julián', 'Alejandro'],
    notas = [4, 1, 7, 9, 1, 2, 8];

console.log(alumnos.sort());
console.log(notas.sort());

// reverse: invierte el orden de los elementos de un array.
var alumnos = ['Matías', 'Eliana', 'Julián', 'Alejandro'],
    notas = [4,1,7,9,1,2,8];

console.log(alumnos.reverse());
console.log(notas.reverse());
