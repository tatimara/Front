/*Dado tres arrays de números, sacar en un nuevo array la intersección de estos. */

const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

function interseccion(uno,dos,tres) {
    var d = new Set(dos);
    var t = new Set(tres);
    a= uno.filter(item => d.has(item));
    return a.filter(item=> t.has(item));
}
console.log(interseccion(arrNumber1,arrNumber2,arrNumber3))