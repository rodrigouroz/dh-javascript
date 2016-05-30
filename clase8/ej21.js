var mago = {
  nombre: 'Harry Potter',
  hacerMagia: function() {
       console.log('Expecto Patronum!!!');
  }
};

console.log('hacerMagia' in mago);  // true
