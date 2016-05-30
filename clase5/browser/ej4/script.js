// Esperamos que esté cargada la página.
window.onload = function() {
    // buscamos un elemento por id 'foto-de-fiesta' y retorna el elemento
    var elementoFoto = document.getElementById('foto-de-fiesta');
    console.log(elementoFoto);

    // buscamos un elemento por id 'lista-de-invitados' y retorna null
    var elementoLista = document.getElementById('lista-de-invitados');
    console.log('lista: ', elementoLista);
}
