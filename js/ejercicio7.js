/*Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
La función debe tener dos parámetros:
Primer parámetro es un objeto con x número de campos y valores
Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro
Ejemplo de uso de la función:
*/

function returnFalsyValues(objeto, tipo) {
    for( var valor in objeto) {
        if (tipo(objeto[valor])) {
            delete objeto[valor]
        }
    }
    return objeto

}


const result = returnFalsyValues({ a: 1, b: '2', c: 3}, x=> typeof x === 'string')
console.log(result); //{a: 1, c: 3}

/*
const test = { a: 1, b: '2', c: 3 };

console.log(Object.keys(test))
console.log(typeof test['b'] === 'string')
*/