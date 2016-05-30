/*
    Break

        por medio de la sentencia break podemos cortar la ejecución de una estructura de repetición
*/

// Mostramos de 0 a 4. Al cortar la ejecución no se muestran el resto de los valores
for (var i = 0; i < 10; i++) {
    if (i === 5){
        break;
    }
    console.log(i);
}
