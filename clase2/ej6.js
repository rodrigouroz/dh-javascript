/*
    Truthy and falsy: cohersion?

    En Javascript un valor truthy es un valor que al ser evaluado como boolean se transforma en verdadero.
    Por consiguiente se considera falsy a todos los valores que al ser evaluados como boolean se transforman
    en false.
    Todos los valores son truthy menos los que se encuentran en la lista de valores falsy.

    Lista valores Falsy:
        false
        null
        undefined
        0
        NaN
        ''
*/

if (false) {
    console.log('la premisa false es verdadera');
} else {
    console.log('la premisa false es falsa');
}

if (null) {
    console.log('la premisa null es verdadera');
} else {
    console.log('la premisa null es falsa');
}

if (undefined) {
    console.log('la premisa undefined es verdadera');
} else {
    console.log('la premisa undefined es falsa');
}

if (0) {
    console.log('la premisa 0 es verdadera');
} else {
    console.log('la premisa 0 es falsa');
}

if (NaN) {
    console.log('la premisa NaN es verdadera');
} else {
    console.log('la premisa NaN es falsa');
}

if ('') {
    console.log('la premisa \'\' (string vacío) es verdadera');
} else {
    console.log('la premisa \'\' (string vacío) es falsa');
}
