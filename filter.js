/* Tenemos un array a = [10, 1, 23, 50, 90, 2], obtener otro array b
con los valores menores a 10. 

a = [10, 1, 23, 50, 90, 2];
var b = a.filter(.......);
console.log(b);.*/

a = [10, 1, 23, 50, 90, 2];
var b = a.filter(checkA);   // El metodo filter() Llama la funcion checkA que, para cada elemento del 
// array a, comprueba que su valor sea menore a 10 y en caso afirmativo
// lo añade al nuevo array b.
function checkA(a) {
    return a < 10;
}
console.log(b);             //devuelve b=[1, 2]
