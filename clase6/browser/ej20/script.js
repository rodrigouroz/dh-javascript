/*
    Eventos:

        Con jQuery podemos bindear un evento a toda una colección o a cada elemento
        en forma individual.
*/
$(function() {
    function pintar() {
        var colores = ['red', 'blue', 'pink', 'yellow', 'green', 'black'];
        var color;

        if (!$(this).css('background-color') || $(this).css('background-color') === 'transparent') {
            var indice = Math.floor(Math.random() * colores.length);
            color = colores[indice];
        } else {
            color = 'transparent';
        }

        $(this).css('background-color', color);
    }

    // puedo bindear el evento click a cada uno de los elementos de la colección
    $('div').on('click', pintar);

    // puedo asociar el evento a cada uno de los items de forma individual
    $('div').eq(0).on('click', function() {
        console.log('Click en el primer div');
    });

    // puedo asociar el evento a cada uno de los items de forma individual
    $('div').eq(1).on('click', function() {
        console.log('Click en el segundo div');
    });

    // puedo asociar el evento a cada uno de los items de forma individual
    $('div').eq(2).on('click', function() {
        console.log('Click en el tercer div');
    });

    // puedo asociar el evento a cada uno de los items de forma individual
    $('div').eq(3).on('click', function() {
        console.log('Click en el cuarto div');
    });
});
