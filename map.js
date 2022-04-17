//Tenemos el array var productos, usar map para obtener otro array que suba al precio un 5%,
// redondear a 2 decimales.
// varproductosSalidas=productos.map(.......)
// console.log(productosSalidas)

var productos = [{ id: 1, precio: 2 }, { id: 1, precio: 4.5 }]

var b = productos.map(importeSubido);

function importeSubido(productos) {
    return {
        id: productos.id,
        precio: (productos.precio * 1.05).toFixed(2)
    }
}

console.log(b)          // devuelve b=[{id:1,precio:2.10},{id:1,precio:4.73}]