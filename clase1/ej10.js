/*
    Object:

    El objeto es un tipo de dato que nos permite agrupar valores para
    representar elementos de la vida. Se define con {}. Puede tener propiedades
    y metodos. Las propiedades describen al objeto y los métodos le dan
    funcionalidad. Las propiedades soportan cualquier tipo de dato.

    Podemos acceder a las propiedades de un objeto de la siguiente forma:
        objeto.propiedad

    De forma similar podemos acceder a un método utilizando () al final.
        objeto.metodo()
*/


// Ejemplo objeto fiesta:
var fiesta = {
    cantidadDePersonas: 40,
    dirección: 'mendoza 1432 4to B',
    comprarBebidas: true,
    comprarTorta: false,
    bebidas: ['coca', 'sprite', 'agua'],
    dj: {
        traeParlantes: true,
        pasaMusicaElectronica: false
    },
    comenzar: function() {
        console.log('Fiesta!! Fiesta!!');
    }
};

// Imprimimos el objeto fiesta.
console.log(fiesta);

// Imprimimos las propiedades del objeto alumno.
console.log(fiesta);
console.log(fiesta.cantidadDePersonas);
console.log(fiesta.dirección);
console.log(fiesta.comprarBebidas);
console.log(fiesta.comprarTorta);
console.log(fiesta.bebidas);

/*
    Imprimimos las propiedades del objeto dj que es una propiedad
    del objeto fiesta.
*/
console.log(fiesta.dj);
console.log(fiesta.dj.traeParlantes);
console.log(fiesta.dj.pasaMusicaElectronica);

// Ejecutamos e imprimimos el método definido en el objeto alumno
console.log( fiesta.comenzar() );
