/*
    Scope:
        El scope (alcance) de una variable es el contexto donde dicha variable existe.
        Es decir que especifíca desde donde se puede acceder y si tenemos acceso a una variable.

        Las variables pueden ser de scope local o global.

        Variables globales
        Se llama variable global a una variable que se puede acceder desde cualquier parte del código.

*/

var variableGlobal = 'Esta es una variable global';

function mostrarVariableGlobal() {
    console.log(variableGlobal);
}

console.log(variableGlobal);
mostrarVariableGlobal();
