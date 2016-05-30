/*
    AJAX:

It is possible for JavaScript code to script HTTP, however. HTTP requests are initiated
when a script sets the location property of a window object or calls the submit() method
of a form object. In both cases, the browser loads a new page. This kind of trivial HTTP
scripting can be useful in a multiframed web page but is not the topic we’ll cover here.
Instead, this chapter explains how scripts can communicate with a web server without
causing the web browser to reload the content of any window or frame.
The term Ajax describes an architecture for web applications that prominently features
scripted HTTP.1 The key feature of an Ajax application is that it uses scripted HTTP
to initiate data exchange with a web server without causing pages to reload. The ability
to avoid page reloads (which were the norm in the early days of the Web) results in
responsive web applications that feel more like traditional desktop applications. A web
application might use Ajax technologies to log user interaction data to the server or to
improve its start-up time by displaying only a simple page at first a

*/

// <div class="invitado">
//     <div class="foto">
//         <img src="../../assets/img/pappo.png">
//     </div>
//     <div class="info">
//         <div class="titulo">Nombre y apellido</div>
//         <div>Roberto Napolitano</div>
//         <div class="titulo">Edad</div>
//         <div>66 años</div>
//     </div>
// </div>


function mostrarInvitados (invitados) {
    var contenedorGeneral = document.getElementById('contenedor');

    invitados.forEach(function(invitado){
        var contenedorInvitado = document.createElement('div');
        contenedorInvitado.setAttribute('class', 'invitado');

        var contenedorFoto = document.createElement('div');
        contenedorFoto.setAttribute('class', 'foto');

        var foto = document.createElement('img');
        foto.setAttribute('src',  'http://localhost:8000/clase7/browser/assets/img/' + invitado.imagenUrl);

        var contenido = document.createElement('div');
        contenido.setAttribute('class', 'info');

        var tituloNombre = document.createElement('div');
        tituloNombre.setAttribute('class', 'titulo');
        tituloNombre.innerText = 'Nombre y Apellido:';

        var contenidoNombre = document.createElement('div');
        contenidoNombre.innerText = invitado.nombre + ' ' + invitado.apellido;

        var tituloEdad = document.createElement('div');
        tituloEdad.setAttribute('class', 'titulo');
        tituloEdad.innerText = 'Edad:';

        var contenidoEdad = document.createElement('div');
        contenidoEdad.innerText = invitado.edad + ' años';

        contenido.appendChild(tituloNombre);
        contenido.appendChild(contenidoNombre);
        contenido.appendChild(tituloEdad);
        contenido.appendChild(contenidoEdad);

        contenedorFoto.appendChild(foto);

        contenedorInvitado.appendChild(contenedorFoto);
        contenedorInvitado.appendChild(contenido);
        contenedorGeneral.appendChild(contenedorInvitado);
    });
}

window.onload = function() {
    var request = new XMLHttpRequest();
    var url = 'http://localhost:3000/invitados';

    request.open('GET', url);

    request.onreadystatechange = function () {
        var termino = 4;
        var statusOk = 200;

        if (request.status === statusOk) {
            if (request.readyState === termino) {
                var invitados = JSON.parse(request.response).invitados;
                mostrarInvitados(invitados);
            }
        } else {
          console.log('Error: ' + request.status);
        }
    };

    request.send(null);
}
