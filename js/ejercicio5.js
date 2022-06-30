/*Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain. El valor de isSpain será un booleano indicando si es una ciudad de España.
Ejemplo: {city: "Logroño", isSpain: "true"}
 */

const arrCities = [
    { city: 'Logroño', country: 'Spain', capital: false },
    { city: 'Bordeaux', country: 'France', capital: false },
    { city: 'Madrid', country: 'Spain', capital: true },
    { city: 'Florence', country: 'Italy', capital: true },
    { city: 'Oslo', country: 'Norway', capital: true },
    { city: 'Jaen', country: 'Spain', capital: false }
];

const arrEsp = arrCities.filter( city => city.country.includes('Spain') && city.capital == false ).map( city => ({city: city.city, isSpain : true}))
const arrNoCap = arrCities.filter( city => city.capital == false && !city.country.includes('Spain') ).map( city => ({city: city.city, isSpain : false}))

const isSpain = arrEsp.concat(arrNoCap)

console.log(arrEsp)
console.log(arrNoCap)
console.log(isSpain)

