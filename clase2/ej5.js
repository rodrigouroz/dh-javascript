// Uso de Expresiones como condición

var verdadero = true;

if (verdadero) {
    console.log('Estoy usando un valor verdadero');
}

var edad = 15;
var esMujer = true;

if (edad === 15 && esMujer) {
    console.log('A festejar los 15!');
}

var promedio = 6;

if (promedio >= 6) {
    console.log('Muy bien, aprobaste la cursada');
} else {
    console.log('Nos vemos en el próximo cuatrimestre');
}

var alumno1 = {
    nombre: 'Pedro',
    apellido: 'Rodriguez'
};

var alumno2 = {
    nombre: 'Pedro',
    apellido: 'Martinez',
    soltero: true

}

// mirar un poco más esto:
if (alumno2.soltero) {
    console.log('El alumno dos es soltero');
}

if (alumno1.nombre === alumno2.nombre) {
    console.log('Tenemos 2 alumnos con el mismo nombre');
}

if ( alumno1.nombre === alumno2.nombre) {
    console.log('Tenemos 2 alumnos que se llaman igual')

    if (alumno1.apellido === alumno2.apellido) {
        console.log('y tienen el mismo apellido');
    } else {
        console.log('pero no tienen el mismo apellido');
    }
}

var jugadores = [
    'Sergio',
    'Matias',
    'Cristian',
    'Gonzalo',
    'Alejandro',
    'Fernando',
    'Nicolás',
    'Pedro',
    'Anibal',
    'Marcelo'
]

if (jugadores.length === 10) {
    console.log('Ya podemos arrancar el partido');
}
