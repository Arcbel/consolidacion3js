class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productosDisponibles = [
    new Producto("Leche", 1000),
    new Producto("Pan de Molde", 2000),
    new Producto("Queso", 1200),
    new Producto("Mermelada", 890),
    new Producto("Azúcar", 1300),
];

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto, cantidad) {
        this.productos.push({ producto, cantidad });
        alert(`${cantidad} ${producto.nombre}(s) agregado(s) al carrito.`);
    }

    calcularTotal() {
        return this.productos.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
    }

    finalizarCompra() {
        const total = this.calcularTotal();
        alert("Total de la compra: $" + total.toFixed(2));
    }
}

const carrito = new Carrito();

function iniciarCompra() {
    let continuar = true;

    while (continuar) {
        let productosTexto = "Productos disponibles:\n";
        productosDisponibles.forEach((producto, index) => {
            productosTexto += `${index + 1}- ${producto.nombre} $${producto.precio}\n`;
        });

        alert(productosTexto);

        let numeroProducto = parseInt(prompt("Ingresa el número del producto que deseas agregar al carrito:"));
        while (isNaN(numeroProducto) || numeroProducto < 1 || numeroProducto > productosDisponibles.length) {
            numeroProducto = parseInt(prompt("Número inválido. Ingresa el número del producto que deseas agregar al carrito:"));
        }

        let cantidad = parseInt(prompt("Ingresa la cantidad de unidades:"));
        while (isNaN(cantidad) || cantidad < 1) {
            cantidad = parseInt(prompt("Cantidad inválida. Ingresa la cantidad de unidades:"));
        }

        const productoSeleccionado = productosDisponibles[numeroProducto - 1];
        carrito.agregarProducto(productoSeleccionado, cantidad);

        continuar = confirm("¿Deseas seguir agregando productos?");
    }

    carrito.finalizarCompra();
}

iniciarCompra();


