/*
    String: Propiedades y Metodos

    Los tipo de datos string tienen propiedades y metodos que nos permiten
    saber más cosas sobre la cadena de caracteres como también poder interactuar
    con ellos.

    Detalle completo de los strings:
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String
*/

// Propiedad:

// length: retorna la longitud de la cadena (cantidad de caracteres);
var nombre = 'Ignacio';
console.log(nombre.length);


// Metodos:

// toLowerCase: pasa todo a minúsculas
var nombre = 'IGNACIO';
console.log( nombre.toLowerCase() );


// toLocaleUpperCase: pasa todo a mayúsculas
var nombre = 'ignacio';
console.log( nombre.toLocaleUpperCase() );

/*
    substr: devuelve una cadena definiendo el inicio y la cantidad de caracteres.

        string.substr(inicio, cantidadDeCaracteres);
*/

var nuevaCadena = 'Javascript es el lenguaje más utilizado en la web';
console.log( nuevaCadena.substr(0, 10) );

var serBuenProgramador = 'para ser buen programador hace falta practicar mucho';
console.log( serBuenProgramador.substr(37, 15) );


/*
    concat:

    Nos permite concatenar (unir) dos o más cadenas de texto o valores.

    string.concat(valor);
    string.concat(valor1, valor2, valor3);
*/

var nombre = 'Martín';
var espacio = ' ';
var apellido = 'Rodriguez';
console.log(nombre.concat(apellido));
console.log( nombre.concat(espacio, apellido) );


/*
    charAt:

    Retorna la posición en la que se encuentra un caracter.
    Al igual que los array esta basado en 0 por lo cual el primer caracter es
    0 y el último es igual a la longitud de la cadena -1.
*/

var lenguaje = 'Javascript';
console.log( lenguaje.charAt(0) );
console.log( lenguaje.charAt(9) );


/*
    indexOf:

    Retorna la primera ocurrencia del valor especificado.
    En caso de no encontrar conicidencia retorna -1.
*/

var frase = 'Que bueno está Javascript';
console.log( frase.indexOf('Javascript') );
console.log( frase.indexOf('Ruby') );


/*
    replace:

    Nos permite remplazar un valor por otro dentro de una cadena.
        string.replace(valorQueQuieroRemplazar, remplazo);
*/


var frase = 'Que bueno esta Ruby';
console.log( frase.replace('Ruby', 'Javascript') );


/*
    slice:

    Extrae una sección de una cadena y devuelve una cadena nueva.
    Se puede pasar la posición inicial y final para crear la nueva cadena.
    En caso de no pasar el paramametro final extrae desde el inicio establecido
    hasta el final de la cadena.

        string.slice(inicio, fin)
*/

var fraseOriginal = 'Me gusta programar';
console.log( fraseOriginal.slice(9) );
console.log( fraseOriginal.slice(0, 8) );

/*
    split:

    Permite dividir una cadena en varias estableciendo cual es el criterio que
    queremos. Retorna un array con todas las cadenas como resultado.

        string.split(cadena)
*/

var alumnos = "Martín, Ignacio, Rodolfo, Valentina, Agustina, Micaela";
console.log( alumnos.split(',') );
