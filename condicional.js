var cantidad = 10
var precio = 1.5
var descuento = 10

//calcolar cantidad*precio si la cantidad es < 10 si es <= 10 aplicar descuento
//y arrotondar 2 decimales ---> MATH.round(num*100)/100


if (cantidad <= 10) {
    console.log((Math.round(cantidad * precio * (1 - descuento / 100)) * 100 / 100));

}
else if (cantidad > 10) {
    console.log("la cantidad e mayor a 10");
}
