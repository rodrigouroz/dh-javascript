/*
    Strict Mode:

        La versión de ECMAScript 5 posee una forma de elegir utilizar una
        variante restringida de javascript llamada scrict mode (modo estricto).

        El modo estríctoEl modo estricto cambia algunas cosoas como:
          * elimina algunos errores silenciosos de JavaScript haciendo a que lancen excepciones.
          * corrige errores que facilita a los motores de JavaScript realizar
            optimizaciones. Esto significa que el modo estricto a veces puede
            correr más rápido que el código idéntico que no lo sea.
          * prohibe cierta sintáxis que puede ser definido en futuras versiones
            de ECMAScript haciendo nuestro código más compatible.

        Estructura:
            'use strict';

        Ejemplos:
            * tira un error al definir variables globales sin var
            * no permite utilizar 2 propiedades con el mismo valor en objetos
            * no permite utilizar 2 parámetros con el mismo nombre
            * tira un error si usamos números con el 0 adelante
*/

'use strict';
nombre = 'Martín';
console.log(nombre);
