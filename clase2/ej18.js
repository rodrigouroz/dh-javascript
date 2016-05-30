'use strict';
/*
    try/catch

        por medio de try and catch podemos manejar los errores y de esta forma tener más control sobre
        nuestra aplicación.

        Estructura:
            try {
                codigoAProbar()
            } catch(exception) {
                codigoParaManejarError();
            }
*/

// error sin manejar
funcionQueNoExiste();

// error manejado
try {
    funcionQueNoExiste();
} catch(e) {
    console.log('Error: ', e);
    console.log('Acá no pasó nada');
}
