/*Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
La función debe tener un objeto como único parámetro.
Ejemplo de uso de la función:
*/

function toLowerCaseKeys(array){
    return Object.entries(array).map(([k,v]) => [k.toLowerCase(), v])
    
}
const myObject = { NamE: 'Charles', ADDress: 'Home Street'};
const myObjLowerCase = toLowerCaseKeys(myObject);

console.log(myObjLowerCase); // { name: 'Charles', address: 'Home Street'}


