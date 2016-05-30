/*
    Recursividad

        Se llama recursividad cuando una función se llama a si misma.
        Necesitamos establecer una salida de la recursividad para evitar que
        entre en un loop infinito (y nos cuelgue todo!!)
*/

function contar(valor) {
    if (valor < 10) {
        console.log(valor);
        valor++;
        contar(valor);
    } else {
        console.log('terminamos la recursividad y nos explota la cabeza PUMM!!!');
    }
}

contar(0)
