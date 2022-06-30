/*Crea una función que elimine las etiquetas html o xml de un string.
La función debe tener un string como único parámetro.
Ejemplo de uso de la función:
*/

function removeHTMLTags(string){
    if((string === null)||(string===''))
    return false;
    else
    return string.replace( /(<([^>]+)>)/ig, ' ');
}


const result = removeHTMLTags('<div><span>lorem</span><strong>ipsum</strong></div>');
console.log(result); //lorem ipsum