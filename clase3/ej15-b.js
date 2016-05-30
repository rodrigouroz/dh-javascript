/*
    callback:

        También se puede utilizar una función anónima como callback
*/

function saludar( callback ) {
    console.log('Hola Martín Rodriguez');
    callback();
}

saludar(function(){
    console.log('Chau!!!');
});
