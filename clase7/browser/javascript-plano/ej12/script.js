/*
    Formularios:

        Poniendo todo junto!!

*/

window.onload = function() {

    var usuario = {
        id: 10,
        nombre: 'Roberto',
        apellido: 'Perez',
        password: '1234',
        estadoCivil: 'casado',
        quiereRecibirNovedades: true,
        comentario: 'Hola, soy estudiante de programación y quiero aprender nuevos lenguajes!!'
    };

    var formulario = document.getElementById('formulario-de-invitados');

    var inputNombre = document.getElementsByName('nombre').item(0);
    var inputApellido = document.getElementsByName('apellido').item(0);
    var inputPassword = document.getElementsByName('password').item(0);

    var elementosEstadoCivil = document.getElementsByName('estado-civil');
    var elementoEstadoCivil;

    var elementoSelectProfesion = document.getElementsByName('profesion').item(0);
    var profesion = elementoSelectProfesion.options[elementoSelectProfesion.selectedIndex].value;

    var elementoNovedades = document.getElementsByName('recibir-novedades').item(0);

    var elementoIDUusario = document.getElementsByName('id-usuario').item(0);

    var elementoComentario = document.getElementsByName('comentario').item(0);

    var botonLimpiarFormulario = document.getElementById('limpiar-form');

    inputNombre.value = usuario.nombre;
    inputApellido.value = usuario.apellido;
    inputPassword.value = usuario.password;

    for(var indice = 0; indice < elementosEstadoCivil.length; indice++) {
        var elemento = elementosEstadoCivil[indice];

        if (elemento.value === usuario.estadoCivil) {
            elementoEstadoCivil = elemento;
            elementoEstadoCivil.checked = true;
        }
    }

    if (usuario.quiereRecibirNovedades) {
        elementoNovedades.checked = true;
    } else {
        elementoNovedades.checked = false;
    }

    elementoIDUusario.value = usuario.id;

    elementoComentario.value = usuario.comentario;


    botonLimpiarFormulario.onclick = function(evento) {
        evento.preventDefault();

        inputNombre.value = '';
        inputApellido.value = '';
        inputPassword.value = '';
        elementoIDUusario.value = '';
        elementoComentario.value = '';

        elementoEstadoCivil.checked = false;
        elementoNovedades.checked = false;
    }

    formulario.onsubmit = function(evento) {
        evento.preventDefault();

        var elementoPerfilDeUsuario = document.getElementById('perfil-usuario');

        var itemDePerfil = document.createElement('li');
        itemDePerfil.innerText = 'ID: ' + elementoIDUusario.value;
        elementoPerfilDeUsuario.appendChild(itemDePerfil);

        itemDePerfil = document.createElement('li');
        itemDePerfil.innerText = 'Nombre: ' + inputNombre.value;
        elementoPerfilDeUsuario.appendChild(itemDePerfil);

        itemDePerfil = document.createElement('li');
        itemDePerfil.innerText = 'Apellido: ' + inputApellido.value;
        elementoPerfilDeUsuario.appendChild(itemDePerfil);

        itemDePerfil = document.createElement('li');
        itemDePerfil.innerText = 'Password: ' + inputPassword.value;
        elementoPerfilDeUsuario.appendChild(itemDePerfil);

        itemDePerfil = document.createElement('li');
        itemDePerfil.innerText = 'Comentario: ' + elementoComentario.value;
        elementoPerfilDeUsuario.appendChild(itemDePerfil);

        itemDePerfil = document.createElement('li');
        itemDePerfil.innerText = 'Estado Civil: ' + elementoEstadoCivil.value;
        elementoPerfilDeUsuario.appendChild(itemDePerfil);

        itemDePerfil = document.createElement('li');
        itemDePerfil.innerText = 'Profesión: ' + profesion;
        elementoPerfilDeUsuario.appendChild(itemDePerfil);

        itemDePerfil = document.createElement('li');
        itemDePerfil.innerText = 'Quiere las novedades: ' + ((elementoNovedades.checked) ? 'si' : 'no');
        elementoPerfilDeUsuario.appendChild(itemDePerfil);

    }

}
