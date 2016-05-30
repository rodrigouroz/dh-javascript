var mago = {
  nombre: 'Harry Potter',
  hacerMagia: function() {
       console.log('Expecto Patronum!!!');
  }
};

for (propiedad in mago) {
  console.log(mago[propiedad]);
}
