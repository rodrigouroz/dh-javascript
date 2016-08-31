/*
  Caracteres especiales en strings:
    \n 	Nueva Línea
    \t 	Tabulador
    \r 	Retorno de Línea
    \' 	Apóstrofe o comilla sencilla
    \" 	Comilla doble
    \\ 	Carácter Backslash
*/

// Nueva línea (\n):
var texto = 'Este es un texto que tiene \nmás de una linea';
console.log(texto);

// Tabulador (\t)
var textoTabulado = 'Este texto contiene un \t texto tabulado';
console.log(textoTabulado);

// Multilinea tabulado (\n\t)
var textoMultilineaTabulado = 'Este es un texto que tiene \n\tmás de una linea y está tabulado';
console.log(textoMultilineaTabulado);

// Retorno de línea (\r)
var textoRetorno = 'Este es un texto que tiene \rmás de una linea';
console.log(textoRetorno);

// Retorno y nueva línea (\r\n)
var textoRetornoNuevaLinea = 'Este es un texto que tiene \r\nmás de una linea';
console.log(textoRetornoNuevaLinea);

// Apóstrofe o comilla sencilla (\')
var textoConComillaSimpleEscapada = 'Texto con una \' comilla simple escapada';
console.log(textoConComillaSimpleEscapada);

// Comilla doble (\")
var textoConComillaDobleEscapada = "Texto con una \" comilla doble escapada";
console.log(textoConComillaDobleEscapada);

// Carácter Backslash (\\)
var textoConBarraEscapada = 'Este texto tiene una barra escapada \\ ya que se utiliza para caracteres especiales';
console.log(textoConBarraEscapada);
