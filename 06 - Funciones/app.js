/* 
Funciones

a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
c) Crear una función validate integer que reciba un número como parámetro y verdadero si es un número entero.
d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
*/

// a)
function suma(a,b){
    return a + b;
}
var a = suma(3,4);
console.log('a) ' + a);

// b)
function suma(a,b){
    if (typeof(a) == 'number' && typeof(b) == 'number'){
        return a + b;
    }else{
        alert('Error: Invalid input data type');
        return NaN;
    }
}
console.log('b) (OK): ' + suma(5,6));
console.log('b) (Err): ' + suma('five',6));

// c)
function validateInteger(n){
    if(n == Math.trunc(n)){
        return true;
    }else{
        return false;
    }
}
console.log('c) (T): ' + validateInteger(7));
console.log('c) (F): ' + validateInteger(2.5));

// d)
function suma2(a,b){
    if (typeof(a) == 'number' && typeof(b) == 'number'){
        if(!validateInteger(a)){
            alert('Error: ' + a + ' is not integer');
            return Math.round(a);
        }
        if(!validateInteger(b)){
            alert('Error: ' + b + ' is not integer');
            return Math.round(b);
        }
        return a + b;
    }else{
        alert('Error: Invalid input data type');
        return NaN;
    }
}
console.log('d) (OK): ' + suma2(5,6));
console.log('d) (Err): ' + suma2(2.5,8));

// e)
function validateNumber(n){
    if (typeof(n) == 'number'){
        return true;
    }else{
        return false;
    }
}
function suma3(a,b){
    if (validateNumber(a) && validateNumber(b)){
        if(!validateInteger(a)){
            alert('Error: ' + a + ' is not integer');
            return Math.round(a);
        }
        if(!validateInteger(b)){
            alert('Error: ' + b + ' is not integer');
            return Math.round(b);
        }
        return a + b;
    }else{
        alert('Error: Invalid input data type');
        return NaN;
    }
}
console.log('e) (OK): ' + suma3(5,6));
console.log('e) (ErrNro): ' + suma3('five',6));
console.log('e) (ErrFloat): ' + suma3(2.5,8));