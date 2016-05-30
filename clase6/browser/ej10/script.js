/*
    Estilos:
        El objeto de jQuery tiene un método llamado css() que nos permite
        obtener las propiedades de css que tiene seteado un elemento como
        también setearle nuevos valores.
*/

$(function() {
    $('h1').css('color', 'green');
    console.log('Color del h1: ', $('h1').css('color'));

    $('h2').css('font-weight', 'normal');
    console.log($('h2').css('font-weight'));

    $('img').css('border', '5px dashed green');
    console.log('Ancho de borde del img: ', $('img').css('border-bottom-width'));
    console.log('Color de borde del img: ', $('img').css('border-bottom-color'));
    console.log('Estilo de borde del img: ', $('img').css('border-bottom-style'))
});
