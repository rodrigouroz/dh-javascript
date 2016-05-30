/*
    Formularios:

        Por medio del evento change() podemos manejar el cambio de selección
        de un elemento select.
*/

window.onload = function() {
    var elementoProfesion = document.getElementsByName('profesion').item(0);

    elementoProfesion.onchange = function() {
        var profesion = elementoProfesion.options[elementoProfesion.selectedIndex].value;

        switch(profesion) {
            case 'programador':
                console.log('Groso, que gran profesión');
            break;
            case 'arquitecto':
                console.log('Se tiene que poner a hacer maquetas!');
            break;
            case 'diseñador':
                console.log('Vamos con los dibujitos!!');
            break;
        }
    }
}
