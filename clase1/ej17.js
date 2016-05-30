/*
    Operadores lógicos

    Estos operadores devuelven un valor boleano.
*/


// And / y (&&)
var numero1 = 10;
var numero2 = 5;

// Esto se lee como: (numero1 es mayor que numero2) Y (numero2 es igual a 5)
console.log( (numero1 > numero2) && (numero2 === 5) ); // -> retorna true ya que ambas sentencias son verdaderas

// Esto se lee como: numero1 es mayor que numero2 Y numero2 es igual a 10
console.log( (numero1 > numero2) && (numero2 === 10) ); // -> retorna false ya que una de las sentencias es falsa


// Or / o (||)

// Esto se lee como: numero1 es mayor que numero2 O numero2 es igual a 5
console.log( (numero1 > numero2) || (numero2 === 5) ); // -> retorna true ya que la primer sentencia es verdadera

// Esto se lee como: numero1 es mayor que numero2 Y numero2 es igual a 10
console.log( (numero1 > numero2) || (numero2 === 10) ); // -> retorna true ya que una de las sentencias es verdadera


// Negación (!)
var verdadero = true;
var falso = false;

console.log(!verdadero); // -> retorna false ya que invierte el valor de verdadero a falso
console.log(!falso); // -> retorna true ya que invierte el valor de falso a verdadero

console.log( !(numero1 > numero2) );
// -> retorna false ya que primero se evalua la comparación entre numero1 y numero2. Luego se invierte el valor
