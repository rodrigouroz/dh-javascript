/*
    JSON:

        JSON (JavaScript Object Notation) significa que es un formato para
        intercambiar datos de forma simple. Es fácil de leer y escrbir.

        En su estructura es muy parecido a un objeto literal de Javascript con
        algunas diferencias. Los nombres de las propiedades se escriben entre
        comillas dobles y los valores de string también.

        Ejemplo:
            var objetoEnFormatoJSON = {
                "atributo": "valor",
                "atributo1": 1,
                "atributo2": [],
                "atributo3": null,
                "atributo4": false
            }

        Javascript tiene un objeto JSON que tiene los métodos stringify() y
        parse().

        stringify:
            El método stringify permite pasar un objeto o valor de javascript
            al formato JSON.

        parse:
            El método parse toma una cadena de caracteres en formato JSON y lo
            transforma en un obejeto o valor de Javascript.

        Gracias a estos 2 métodos se puede utilizar el formato JSON para
        intercambiar datos en formato de texto.
*/

window.onload = function() {

    // defino un objeto literal
    var persona = {
        nombre: 'Raul',
        apellido: 'Gomez',
        edad: 30,
        dni: '20271182',
        hijos: ['Juan', 'Pedro', 'Noelia'],
        casado: true
    };

    // muestro en pantalla el objeto persona
    console.log(persona);

    // por medio del objeto JSON y su método stringify podemos transformar un objeto a string
    var personaComoString = JSON.stringify(persona);
    console.log('Persona como string:', personaComoString);

    // por medio del objeto JSON y su metodo parse podemos transformar un string en un objeto
    var personaComoObjeto = JSON.parse(personaComoString);
    console.log(personaComoObjeto);

}
