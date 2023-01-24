const productos = [
    {id: 1, nombre: "Celular Gama Media", precio: 45000},
    {id: 2, nombre: "Celular Gama Alta", precio: 140000},
    {id: 3, nombre: "Notebook I3", precio: 120000},
    {id: 4, nombre: "Notebook I5", precio: 178000},
    {id: 5, nombre: "Notebook I7", precio: 215000},
    {id: 6, nombre: "TV 32", precio: 80000},
    {id: 7, nombre: "TV 42", precio: 125000},
    {id: 8, nombre: "TV 58", precio: 264000},
    {id: 9, nombre: "Reloj digital", precio: 55000}
];
let carrito = [];

let compra = Number(prompt("Bienvenido a DigitalMarket. Si desea comprar en nuestra tienda ingrese 1, en caso contrario ingrese 0."))

while(compra != 1 && compra != 0){
    alert("Ese codigo no es valido. Ingrese 1 para ir a nuestra tienda o 0 para salir.")
    compra = Number(prompt("Bienvenido a DigitalMarket. Si desea comprar en nuestra tienda ingrese 1, en caso contrario ingrese 0."))
}

if(compra == 1){
    alert("Nuestros productos disponibles son los siguientes:")
    let listaPorductos = productos.map((producto) => producto.id + " " + producto.nombre + " " + "$" + producto.precio);
    alert(listaPorductos.join(" - "))
} else if( compra == 0){
    alert("Es una pena, pero esperamos que la proxima puedas disfrutrar de nuestros productos. Gracias")
}