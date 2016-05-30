/*
    Hoisting:

    Todas las variables en javascript son llevadas a la parte superior del
    contexto donde fueron declaradas.

    Cabe destacar que sólo la declaración de dichas variables sufre esta
    transformación no así la asignación.

    Esto ocurre ya que el motor de Javascript hace 2 pasadas por el código,
    primero pasa relevando el contexto (se crean variables, funciones y parámetros)
    y la segunda pasada es donde ejecuta el código.
*/

/*
    imprime undefined pero no explota el código ya que la declaración de la
    variable es movido a la parte superior del contexto. En este caso sería a
    la primer línea de código.
*/
console.log(nombre);
/*
    esta sentencia se divide en dos partes:
        declaración: var nombre
        asignación: nombre = 'Martín'
    La delaración de la variable es movida a la sección superior, no así la
    asignación.
*/
var nombre = 'Martín';
// imprime el nombre Martín ya que se ejecutó la asignación.
console.log(nombre);
