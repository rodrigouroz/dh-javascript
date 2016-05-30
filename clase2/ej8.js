// Switch: valor por defecto

var color = 'violeta';

if (color === 'azul') {
    console.log('el color seleccionado es azul');
} else if (color === 'verde') {
    console.log('el color seleccionado es verde');
} else if (color === 'rojo') {
    console.log('el color seleccionado es rojo');
} else {
    console.log('sabemos que el color no es ni azul, verde o rojo');
}


switch (color) {
    case 'azul':
        console.log('el color seleccionado es azul');
        break;
    case 'verde':
        console.log('el color seleccionado es verde');
        break;
    case 'rojo':
        console.log('el color seleccionado es rojo');
        break;
    default:
        console.log('sabemos que el color no es ni azul, verde o rojo');
}
