/*Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
La función debe tener 2 parámetros:
Primer parámetro debe ser el número de bytes
Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.

Ejemplo de uso de la función:
}*/

const result1 = formBytesToFormattedSizeUnits(1000);
console.log(result1); // 1KB

const result2 = formBytesToFormattedSizeUnits(1234056789);
console.log(result2); // 123MB

const result3 = formBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result3); // -12.145GB



function formBytesToFormattedSizeUnits(bytes, numTrunc = 3) {
    
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    if (bytes === 0) return '0 bytes';
    const b = Math.abs(bytes)
    const dec = numTrunc < 0 ? 0 : numTrunc;
    const i = Math.floor(Math.log(b) / Math.log(1024));

    return parseFloat((b / Math.pow(1024,i)).toPrecision(dec)) + ' ' + sizes[i];

}
