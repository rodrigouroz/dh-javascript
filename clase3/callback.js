var prueba = function (numero, funcionParaAplicar) {
  return funcionParaAplicar(numero);
}

function sumaUno(numero) {
  return numero + 1;
}

function esMayorA10(numero) {
  return numero > 10;
}

console.log(prueba(4, sumaUno));
console.log(prueba(4, esMayorA10));
