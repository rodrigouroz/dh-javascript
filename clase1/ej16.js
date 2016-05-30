/*
    Operadores de comparación (simple y estricta)

    Devuelve un valor lógico basado en si la comparación es verdadera (true) o falsa (false)
*/

// Igualdad simple de cadenas de texto. Es case sensitive (==)
var nombreAlumno = 'Juan';
var nombreProfesor = 'Juan';
console.log(nombreAlumno == nombreProfesor);

var nombreAlumno = 'Juan';
var nombreProfesor = 'juan';
console.log(nombreAlumno == nombreProfesor);

// Igualdad simple de números (==)
var edadAlumno = 16;
var edadProfesor = 30;
var edadAlumno2 = 16;
console.log( edadAlumno == edadAlumno2);
console.log( edadAlumno == edadProfesor);

// Desigualdad (!=)
var numero1 = 10;
var numero2 = 20;
console.log( numero1 != numero2);

// Mayor que (>)
var numero1 = 10;
var numero2 = 20;
console.log( numero1 > numero2 );
console.log( numero2 > numero1 );

// Menor que (<)
var numero1 = 10;
var numero2 = 20;
console.log( numero1 < numero2 );
console.log( numero2 < numero1 );

// Mayor o igual que (>=)
var numero1 = 10;
var numero2 = 20;
var numero3 = 10;
console.log( numero1 >= numero2 );
console.log( numero2 >= numero1 );
console.log( numero1 >= numero3 );

// Menor o igual que (<=)
var numero1 = 10;
var numero2 = 20;
var numero3 = 10;
console.log( numero1 <= numero2 );
console.log( numero2 <= numero1 );
console.log( numero1 <= numero3 );

// Comparació de igualdad simple entre una número y una cadena (==)
var cadena = '16';
var numero = 16;
console.log(cadena == numero);


/*
    Comparación de igualdad estricta:

    Este tipo de comprobación compara tanto que sea el mismo valor como tipo de dato.
        var numero = 10;    (number)
        var cadena = '10'   (string)
        cadena === numero   -> retorna false ya que el valor es igual pero no son el mismo tipo de dato.
*/

// Comparació de igualdad estricta entre una número y una cadena (===)
var cadena = '16';
var numero = 16;
console.log(cadena === numero);

/*
    Desigualdad estricta entre una número y una cadena (!==)

    Este tipo de comprobación compara tanto que sea el mismo valor como tipo de dato.
        var numero = 10;    (number)
        var cadena = '10'   (string)
        cadena !== numero   -> retorna true ya que el valor no es igual y no son el mismo tipo de dato.
*/
var cadena = '16';
var numero = 16;
console.log(cadena !== numero);
