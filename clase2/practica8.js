var numeros = [1, 7, 4, 25, 3, 4, 35, 4, 3, 4, 12];

console.log(numeros);
/*
for (var i = 0; i < numeros.length; i++) {

  for (var j = 0; j < numeros.length; j++) {
    if (i == j) {
      continue;
    }
    if (numeros[i] == numeros[j]) {
      numeros.splice(j, 1);
    }
  }
}
*/

var result = [];

for (var i = 0; i < numeros.length; i++) {

  if (numeros.indexOf(numeros[i]) == i) {
      result.push(numeros[i]);
  }

}

console.log(result);
