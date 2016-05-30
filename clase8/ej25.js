var mago = {
  nombre: 'Harry Potter',
  edad: 37
};

var propiedades = Object.keys(mago);

propiedades.forEach(function(propiedad) {
  console.log('nombre de la propiedad: ', propiedad);
  console.log('valor: ', mago[propiedad]);
});
