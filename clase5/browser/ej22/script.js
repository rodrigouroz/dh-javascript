/*
    Eventos:
        En Javascript podemos hacer uso de la programación orientada a eventos.
        Este estilo de programación el browser genera eventos cuando pasa algo
        con el documento o el browser.

        Por ejemplo podemos saber cuando se termino de cargar un documento,
        se presiona una tecla o se mueve el mouse.

        Hay que detallar que esto no es algo propio de Javascript sino de la
        programación en general, sobre todo cuando se tiene un UI. Podemos
        decir que la aplicación espera a que algo pase para notificarlo.
        Desde nuestro código podemos capturar esa notificiación y hacer algo
        en respuesta.

        Ejemplo: cuando cargue el documento, mostrar un msj en pantalla.

        Un evento consta de las siguientes partes:
            * Tipo de Evento: es el nombre del evento que ocurre.
                Ejemplo: load para la carga de un documento

            * Target del evento: es el objeto al cual le ocurre el evento o
                que está asociado a dicho evento.

            * Manejador de evento: es una función que maneja o responde a un
                evento. Se lo conoce tambien como listener.

            * Objeto del evento: es un objecto asoaciado con un evento en
                particular que contiene detalles sobre el evento. Este objeto
                es pasado como parámetro de la función que maneja el evento.
                Las propiedades de este objeto cambian según el tipo de evento
                que sea.
                    Ejemplo: puedo saber que tecla se presiona o posición del
                        mouse dependiendo del tipo de evento que maneje.

        Los eventos que un browser puede manejar están definidos y nosotros
        los podemos utilizar. Para esto hay que leer la documentación y aprender
        sobre ellos.

        Existen 2 formas básicas de registrar un manejador de eventos.
        La primera es por medio de establecer una propiedad en el objeto o
        document.

            Estructura:
                target.onNombreDelEvento = function () {}

            Ejemplo:
                button.onClick = function() {}

        Las propiedades que manejan eventos arrancan con la palabra on seguida
        del nombre del evento que queremos manejar.

        La otra forma de manejar un evento es registrando un evento con
        addEventListener().

        Este método puede ser aplicado en cualquier objeto, eso incluye
        window, document y en todos los elementos. Este método soporta
        2 parámetros:
            * Tipo de evento: es un string con el nombre del tipo de evento
            * Manejador de evento: es una función que se invoca cuando suceda el
                evento.

        Esctructura:
            objeto.addEventListener(tipoDeEvento, funcionQueLoManeja);


*/

// registramos un evento usando la propiedad de un objeto
window.addEventListener('load', function(){
    console.log('Este es el primero');
});

// registramos un evento usando el método addEventListener
window.addEventListener('load', function(){
    console.log('Este es el segundo');
});

// Podemos ver que ambos manejadores están escuchando el evento y ejecutan el codigo asociado
// Esto significa que podemos tener más manejadores de eventos asociados a un objeto para el mismo tipo de evento.
