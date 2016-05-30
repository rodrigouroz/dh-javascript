/*
    Eventos:
        jQuery tiene 2 maneras de manejar los eventos, por un lado tiene métodos
        con el nombre del evento ( click() )y también tiene un evento llamado
        on() donde se puede especificar el tipo de evento que queremos manejar.

        Esctructura:
            $(selector).click(callback);

            $(selector).(stringTipoDeEvento, callback);
*/
$(function() {

    $('button').on('click', function() {
        alert('Me hicieron CLICK!!');
    });

    $('button').click(function() {
        console.log('también tengo bindeado un evento click utilizando el método click()');
    });
});
