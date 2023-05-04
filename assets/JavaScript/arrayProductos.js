class Producto {
    constructor (nombre, categoria, precio) {
        this.nombre = nombre;
        this. categoria = categoria;
        this.precio = precio;
    }
}

const product_1 = new Producto ("Primavera", "jabon", "$ 800");
const product_2 = new Producto ("Verano", "ceramica", "$ 800");
const product_3 = new Producto ("otoño", "cosmetica", "$ 800");
const product_4 = new Producto ("invierno", "hilos", "$ 800");

const Productos = [product_1, product_2, product_3, product_4];

