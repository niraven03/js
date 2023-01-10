alert("Bienvenido a DigitalMarket. Seleccione los productos que desea llevar.")
let producto = Number(prompt("1 - Celular Gama Media $45.000 / 2 - Celular Gama Alta $140.000 / 3 - Notebook I3 $120.000 / 4 - Notebook I5 $178.000 / 5 - Notebook I7 $215.000 / 6 - TV 32 $80.000 / 7 - TV 42´ $125.000 / 8 - TV 58´ $264.000 / 9 - Reloj digital $55.000 / 0 - Para dejar el carrito"))
let cantidadProducto;
let total = 0;

let cantidad = (cantidad, precio) => {
    return cantidad*precio
}

while (producto != 0) {
    switch (producto) {
        case 1:
            cantidadProducto = Number(prompt("Indique la cantidad de Celulares Gama Media que va a necesitar: "))
                total += cantidad(cantidadProducto, 45000)
            break;
        case 2:
            cantidadPorducto = Number(prompt("Indique la cantidad de Celulares Gama Alta que va a necesitar: "))
                total += cantidad(cantidadProducto, 140000)
            break;
        case 3:
            cantidadPorducto = Number(prompt("Indique la cantidad de Notebook I3 que va a necesitar: "))
                total += cantidad(cantidadProducto, 120000)
        break;
        case 4:
            cantidadPorducto = Number(prompt("Indique la cantidad de Notebook I5 que va a necesitar: "))
                total += cantidad(cantidadProducto, 178000)
            break;
        case 5:
            cantidadPorducto = Number(prompt("Indique la cantidad de Notebook I7 que va a necesitar: "))
                total += cantidad(cantidadProducto, 215000)
            break;
        case 6:
            cantidadPorducto = Number(prompt("Indique la cantidad de TV 32 que va a necesitar: "))
                total += cantidad(cantidadProducto, 80000)
            break;
        case 7:
            cantidadPorducto = Number(prompt("Indique la cantidad de TV 42 que va a necesitar: "))
                total += cantidad(cantidadProducto, 125000)
            break;
        case 8:
            cantidadPorducto = Number(prompt("Indique la cantidad de TV 58 que va a necesitar: "))
                total += cantidad(cantidadProducto, 264000)
            break;
        case 9:
            cantidadPorducto = Number(prompt("Indique la cantidad de Relojes digital que va a necesitar: "))
                total += cantidad(cantidadProducto, 55000)
            break;
    }
    producto = Number(prompt("1 - Celular Gama Media $45.000 / 2 - Celular Gama Alta $140.000 / 3 - Notebook I3 $120.000 / 4 - Notebook I5 $178.000 / 5 - Notebook I7 $215.000 / 6 - TV 32 $80.000 / 7 - TV 42´ $125.000 / 8 - TV 58´ $264.000 / 9 - Reloj digital $55.000 / 0 - Para dejar el carrito"))
}

alert("El total de tu compra es: " + total)
