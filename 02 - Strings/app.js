/*
Strings

a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/

// a)
var a = "This is a string with at least 10 characters";
a = a.toUpperCase();
console.log('a) ' + a);

// b)
var b1 = "This is a string with at least 10 characters";
var b2 = b1.substr(0,5);
console.log('b) ' + b2);

// c)
var c1 = "This is a string with at least 10 characters";
var c2 = c1.substr(c1.length-3,3);
console.log('c) ' + c2);

// d)
var d1 = "this is a STRING with at least 10 CHARACTERS";
var d2 = d1.toLowerCase();
var d3 = d1[0].toUpperCase()
console.log('d) ' + d3 + d2.substr(1,d2.length-1));

// e)
var e1 = "This is a string with at least 10 characters and some spaces";
var e2 = e1.indexOf(' ');
console.log('e) ' + e2);

// f)
var f1 = "the arachnophobia is extreme or irrational fear of spiders.";
firstUpper = f1[f1.indexOf("arachnophobia")].toUpperCase();
secondUpper = f1[f1.indexOf("irrational")].toUpperCase();
firstSub = f1.substr(0,f1.indexOf("arachnophobia"));
secondSub = f1.substr(f1.indexOf("arachnophobia") + 1,f1.indexOf("irrational") - f1.indexOf("arachnophobia") - 1);
thirdSub = f1.substr(f1.indexOf("irrational") + 1,f1.length - f1.indexOf("irrational") - 1);
f2 = firstSub+firstUpper+secondSub+secondUpper+thirdSub;
console.log(f2);