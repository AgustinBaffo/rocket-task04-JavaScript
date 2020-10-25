/*
Variables y Operadores
a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).
*/

// a)
var a = 3;
var b = 5;
var c = a + b;
console.log(c);

// b)
var firstname = 'Agustin';
var lastname = 'Baffo';
var name = firstname + lastname;
console.log(name);

// c)
var myFirstVariable = "This is my first variable";
var myOtherVariable = "This is noy my variable";
var count = myFirstVariable.length + myOtherVariable.length;
console.log(count);
