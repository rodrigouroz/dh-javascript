var mago = {
  nombre: 'Harry Potter',
  hacerMagia: function() {
       console.log('Expecto Patronum!!!');
  }
};

console.log('hacerMagia' in mago);  // true
console.log(mago.hasOwnProperty('hacerMagia')); // true
console.log(mago.toString());
console.log(mago.hasOwnProperty('toString')); // false
