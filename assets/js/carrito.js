import {
    stock_Cosmetica
} from "./stock.js"

var carritoCompras = []; //este es nuestra variable contenedora de todos los carritos

export const carrito = (productoId) => { //acá estamos pasando una función
    const contenedorCarrito = document.querySelector(completarXXX)

    const renderProductoCarrito = () => {
        var producto = stock_Cosmetica.find(producto => stock_Cosmetica.id == productoId)
        carritoCompras.push(producto)

        producto.cantidad = 1 //hacer un condicional en donde si ya tengo el producto cantidad, el producto con el id, en lugar de agregar el producto entero agregar el producto en cantidad

        var div = document.createElement("div")
        div.classList.add(NOMBREDELACLASE)
        div.innerHTML = `<p>${stock_Cosmetica.nombre}</p>
                    <p> Precio: $ ${stock_Cosmetica.precio}</p>
                    <p> Cantidad: ${producto.cantidad}</p>
                    <button class="eliminar" id=${stock_Cosmetica.id}>Eliminar del carro</button> 
    ` //hacer el boton eliminar producto funcional, ver apuntes de clase

        contenedorCarrito.appendChild(div)

    }
    renderProductoCarrito()

}