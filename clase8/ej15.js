var mago = {
     nombre: 'Harry Potter',
     edad: 37,
     saludar: function() {
       console.log('hola soy ' + this.nombre + ' y tengo ' + this.edad + ' años');
     }
}

mago.saludar(); // hola soy Harry Potter y tengo 37 años
