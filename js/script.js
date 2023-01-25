const productos = [
    {id: 1, nombre: "motorola", precio: 45000},
    {id: 2, nombre: "iphone", precio: 140000},
    {id: 3, nombre: "lenovo", precio: 120000},
    {id: 4, nombre: "bangho", precio: 178000},
    {id: 5, nombre: "asus", precio: 215000},
    {id: 6, nombre: "noblex", precio: 80000},
    {id: 7, nombre: "hitachi", precio: 125000},
    {id: 8, nombre: "samsung", precio: 264000},
    {id: 9, nombre: "reloj", precio: 55000}
];
let carrito = [];

let compra = Number(prompt("Bienvenido a DigitalMarket. Si desea comprar en nuestra tienda ingrese 1, en caso contrario ingrese 0."))

console.log(productos)

while(compra != 1 && compra != 0){
    alert("Ese codigo no es valido. Ingrese 1 para ir a nuestra tienda o 0 para salir.")
    compra = Number(prompt("Bienvenido a DigitalMarket. Si desea comprar en nuestra tienda ingrese 1, en caso contrario ingrese 0."))
}

if(compra == 1){
    alert("Nuestros productos disponibles son los siguientes:")
    let listaProductos = productos.map((producto) => producto.nombre + " " + "$" + producto.precio);
    alert(listaProductos.join(" - "))
} else if( compra == 0){
    alert("Es una pena, pero esperamos que la proxima puedas disfrutrar de nuestros productos. Gracias")
}

while(compra != 0){
    let producto = prompt("Agrega un producto a tu carrito.")
    let precio = 0

    if(producto == "motorola" || producto == "iphone" || producto == "lenovo" || producto == "bangho" || producto == "asus" || producto == "noblex" || producto == "hitachi" || producto == "samsung" || producto == "reloj"){
        switch(producto){
            case "motorola":
                precio = 45000;
                break;
            case "iphone":
                precio = 140000;
                break;
            case "lenovo":
                precio = 120000;
                break;
            case "bangho":
                precio = 178000;
                ;
            case "asus":
                precio = 215000;
                break;
            case "noblex":
                precio = 80000;
                break;
            case "hitachi":
                precio = 125000;
                break;
            case "samsung":
                precio = 264000;
                break;
            case "reloj":
                precio = 55000;
                break;
            default:
                break;
        }
    let cantidad = Number(prompt("Elija la cantidad que desea."))
    carrito.push({producto, precio, cantidad})
    console.log(carrito)
    } else {
        alert("No contamos con ese producto.");
    }

    compra = prompt("¿Desea seguir comprando? 1 - Si | 0 - No")
    while(compra == 0){
        alert("Muchas gracias por la compra, esperamos volver a verlo.")
        carrito.map((carritoFinal) => { console.log(`producto: ${carritoFinal.producto}, precio total: ${carritoFinal.cantidad * carritoFinal.precio}, cantidad: ${carritoFinal.cantidad}`)})
        break
    }
}

const totalCantidad = carrito.reduce((acc, el) => acc + el.cantidad, 0);
const totalPagar = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
const totalIva = totalPagar * 1.21;
console.log(`El detalle de su compra es: \n Cantidad de articulos seleccionados: ${totalCantidad} \n Precio total de su compra sin IVA: $${totalPagar} \n Total a pagar con IVA: $${totalIva}`)
alert(`El detalle de su compra es: \n Cantidad de articulos seleccionados: ${totalCantidad} \n Precio total de su compra sin IVA: $${totalPagar} \n Total a pagar con IVA: $${totalIva}`)