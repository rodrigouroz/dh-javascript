/*
    Variables globales

    Si a una variable se le asigna un valor sin antes ser declarada con var
    se transforma automáticamente en una variable global.
*/

function saludar() {
    nombre = 'Martín';
}

try {
    console.log(nombre);
} catch (e) {
    console.log('error: ', e.message);
}

// cuando se ejecuta la función la variable nombre pasa a ser global ya que no fue declarada usando var
saludar();
console.log(nombre);
