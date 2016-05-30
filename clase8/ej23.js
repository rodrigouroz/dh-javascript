var mago = {
  nombre: 'Harry Potter',
  hacerMagia: function() {
       console.log('Expecto Patronum!!!');
  }
};

console.log(mago.nombre);
delete mago.nombre;
console.log(mago.nombre);
