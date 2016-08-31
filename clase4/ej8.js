/*
    Objeto literal:
        Los métodos también pueden recibir parametros ya que son una función.
*/

function entrenar(premio) {
    if (premio) {
        console.log('Da la pata');
    } else {
        console.log('Te mira');
    }
}

// definimos un objeto perro que tiene un metodo ladrar
var perro = {
    entrenar: entrenar
}

// Con premio tenemos un perro muy copado!
perro.entrenar(10 > 2);

// Sin premio no esperes que te preste mucha atención
perro.entrenar(undefined);
