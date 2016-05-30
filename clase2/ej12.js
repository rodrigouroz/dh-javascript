/*
    do / while

    El do/while es muy parecido al while pero con la diferencia que al menos se
    ejecuta una vez ya que se valida la condición al finalizar la iteración

    do {
        codigo
    } while (condicion)

    Podemos leer esto como: HACER esto MIENTRAS sea verdadera la condición
*/

var contador = 0;

do {
    console.log(contador);
    contador++;
} while( contador <= 10)
