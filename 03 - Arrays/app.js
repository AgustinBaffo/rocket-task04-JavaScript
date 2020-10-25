/* 
Arrays

a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
e) Invertir el orden del array (utilizar reverse)
f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

*/

var month = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
var month2 = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

// a)
console.log('a) Mes 5: ' + month[4] + ' - Mes 11: ' + month[10]);

// b)
month.sort();
console.log('b) ' + month);

// c)
month.unshift('firstElement');
month.push('lastElement');
console.log('c) ' + month);

// d)
month.shift();
month.pop();
console.log('d) ' + month);

// e)
month.reverse();
console.log('e) ' + month);

// f)
f = month.join('-');
console.log('f) ' + f);

// g)
g = month2.slice(4,11);
console.log('g) ' + g);