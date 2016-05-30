/*
    Hoisting:

        En el caso de que una variable es declarada y asignada con un valor
        sobrescribe la declaración de una función.
*/

var saludar = 'Martín';

function saludar() {
    console.log('Santiago');
}

/*
    imprime string ya que la asignación de la variable nombre ocurre
    luego que la definición de la variable y función nombre.
*/
console.log(typeof saludar);
