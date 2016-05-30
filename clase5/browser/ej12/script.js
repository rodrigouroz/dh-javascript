/*
    Atributos:

        hasAttribute(nombreAtributo):
            retorna un valor boolean true en caso de encontrarlo y false en caso
            de que no lo haga.
*/

// Esperamos que esté cargada la página.
window.onload = function() {

    var elementoH1 = document.querySelectorAll('h1')[0];
    console.log(elementoH1.hasAttribute('title'));

    var foto = document.querySelectorAll('.foto').item(0);
    console.log(foto.hasAttribute('class'));

    if (foto.hasAttribute('class')) {
        console.log('Esta foto si que tiene clase!!.. Cuak!!');
    }

}
