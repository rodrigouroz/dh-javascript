var amigos = ['Pedro', 'Martín', 'Juan', 'Ximena', 'Romina', 'Carmen'];

function mostrarAmigo (amigo) {
    console.log(amigo);
}

// paso una función como parámetro.
console.log('Primer uso de un callback:');
amigos.forEach(mostrarAmigo);

// obtengo el mismo resultado utilizando una función anínima.
console.log('Segundo uso de un callback::');
amigos.forEach(function(amigo) {
    console.log(amigo);
});
