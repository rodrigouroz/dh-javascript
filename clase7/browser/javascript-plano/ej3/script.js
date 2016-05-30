/*
    Formularios:

        Gracias a Javascript podemos obtener otros attributos del formulario
        como action, target, encoding y method.

        Action:
            Establece la URL del documento que va a procesar la información
            enviada por el formulario.

        Target:
            Establece el nombre o palabra reservada de donde se debe mostrar
            la respuesta luego de submitear el formulario.

        Encoding:
            Establece el tipo MIME con el que se va a encriptar los datos.

        Method:
            Establece cual es el método de HTTP que se va a utilizar para enviar
            los datos. Puede ser get o post.

        Name:
            Establece el nombre del formulario.
*/

window.onload = function() {
    // obtenemos el elemento formulario por medio de su ID
    var form = document.getElementById('formulario-de-invitados');

    // mostramos el nombre del formulario
    console.log('Name: ', form.name);

    // mostramos el documento que tiene establecido el formulario para procesar los datos
    console.log('Action: ', form.action);

    // mostramos que tipo de encoding se va a utilizar para enviar los datos
    console.log('Encoding: ', form.encoding);

    // mostramos que método de HTTP tiene establecido el formulario
    console.log('Method: ', form.method);

    // mostramos dónde queremos mostrar la respuesta del formulario
    console.log('Target: ', form.target);
}
