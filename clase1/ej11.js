/*
    typeof:

    Indica el tipo de dato de un operador.
    Retorna una cadena de caracteres (string)
    Se puede utilizar con y sin ():
        typeof variable (lo vamos a utilizar de esta forma en el curso)
        typeof(variable)
*/

// number
var numero = 10;
console.log( typeof numero );

// string
var cadenaConcomillaDoble = "Cadena de texto con comilla doble";
var cadenaConComillaSimple = 'Cadena de texto con comilla simple';
console.log( typeof cadenaConcomillaDoble );
console.log( typeof cadenaConComillaSimple );

// boolean
var estaBuenoElCurso = true;
var javascriptEsLoMismoQueJava = false;
console.log( typeof estaBuenoElCurso );
console.log( typeof javascriptEsLoMismoQueJava);

// object
var alumno = {
    nombre: 'Adrian',
    edad: 18
};
console.log( typeof alumno );

// undefined
var valorIndefinido = undefined;
console.log( typeof valorIndefinido );

// Casos especiales:

// object
var valorNulo = null;
console.log( typeof valorNulo );

// object
var notas = [10, 8, 7];
console.log( typeof notas );
