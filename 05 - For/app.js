/* 
For

a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
d) Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).
*/

var myArray = new Array('apple','pear','orange','bannana','strawberry');

// a)
for(var i=0;i<5;i++){
    alert(myArray[i]);
}

// b)
var b;
for(var i=0;i<5;i++){
    b = myArray[i][0].toUpperCase() + myArray[i].substr(1,myArray[i].length-1);
    alert(b);
}

// c)
var sentence = '';
for(var i=0;i<5;i++){
    sentence += myArray[i];
}
alert(sentence);

// d)
var d = new Array();
for(var i=0;i<10;i++){
    d[i] = i;
}
console.log(d);
