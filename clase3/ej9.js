/*
    Variable locales
        Javascript tiene scope local dentro de las funciones. Esto significa
        que las variables declaradas dentro de una función pueden ser accedidas
        solamente dentro del contexto de la función o por otras funciones dentro de esta función.

        Las variables locales tienen prioridad sobre las variables globales
        cuando son definidas con el mismo nombre y las accedemos desde dentro de una función
*/

// declaro una variable a nivel global
var nombre = "Matías";
​
// defino una función llamada mostrarNombre
​function mostrarNombre () {
    // defino una variable local que solo puede ser accedida dentro del contexto de esta función.
    var nombre = "Santiago";
    // imprime el nombre Santiago
    console.log (nombre);
}

// imprime Matías ya que es el valor de la variable global
console.log (nombre);
