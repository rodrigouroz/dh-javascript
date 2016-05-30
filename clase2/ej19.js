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
            } finally {
                codigoParaTerminar();
            }
*/

// error manejado
try {
    funcionQueNoExiste();
} catch(e) {
    // las exception tienen una propiedad message que contiene el msj de error
    console.log('Error manejado: ', e.message);
} finally {
    console.log('finally: Acá no pasó nada');
}
